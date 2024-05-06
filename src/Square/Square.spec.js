import React from "react";
import Square from "./Square";
import {screen, render} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {act} from "react";
describe('<Square/>', () => {

    let onSquareClickHandler;
    async function clickHandler(){
        onSquareClickHandler = jest.fn().mockName("onSquareClick");
        render(<Square onSquareClick={onSquareClickHandler}/>);
        userEvent.click(screen.getByTestId("square-button"));
    }

    it('should render correct value received from props', () => {
        //const {getByTestId} = render(<Square value="X"/>);
        render(<Square value="X"/>);
        expect(screen.getByTestId("square-button").textContent).toBe("X");
    });

    it('should able to call the associated function for square button', async() => {
        await clickHandler();
        expect(onSquareClickHandler).toHaveBeenCalled();
        expect(onSquareClickHandler).toHaveBeenCalledTimes(1);
    });


});