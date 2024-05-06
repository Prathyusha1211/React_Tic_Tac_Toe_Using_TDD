import React from "react";
import {fireEvent, getAllByTestId, getByTestId, render} from "@testing-library/react"
import Board from "./Board";

describe('Basic Rendering of the Board', () => {
    const {getAllByTestId} = render(<Board/>);
    const board = getAllByTestId("square-button");

    it('should contain 9 squares for Board', () => {
        expect(board).toHaveLength(9);
    });

    it('squares should contain initial value as null', () => {
        board.forEach((square) => {
            expect(square.textContent).toBe("");
        })
    });

});

describe('Testing Functionality of Board', () => {

    it('should display value X when clicked first time on board', () => {
        const {getAllByTestId} = render(<Board/>);
        const squares = getAllByTestId("square-button");
        fireEvent.click(squares[0]);
        expect(squares[0].textContent).toBe("X");
    })

    it('should display value O when clicked second on board', () => {
        const {getAllByTestId} = render(<Board/>);
        const squares = getAllByTestId("square-button");
        fireEvent.click(squares[0]);
        expect(squares[0].textContent).toBe("X");
        fireEvent.click(squares[1]);
        expect(squares[1].textContent).toBe("O");
    })

    it('should not change its value if it is clicked more than once on square', () => {
        const {getAllByTestId} = render(<Board/>);
        const squares = getAllByTestId("square-button");
        fireEvent.click(squares[0]);
        expect(squares[0].textContent).toBe("X");
        fireEvent.click(squares[0]);
        expect(squares[0].textContent).toBe("X");
    });
});

describe('Testing status of the next players turn', () => {
    it('should show X as the first player to take turn', () => {
        const {getByTestId} = render(<Board/>);
        const status = getByTestId("status");
        expect(status.textContent).toBe("Next Player: X");
    });

    it('should show O as the next player to take turn after X', () => {
        const {getByTestId} = render(<Board/>);
        const status = getByTestId("status");
        const {getAllByTestId} = render(<Board/>);
        const squares = getAllByTestId("square-button");
        expect(status.textContent).toBe("Next Player: X");
        fireEvent.click(squares[0]);
        expect(status.textContent).toBe("Next Player: O");

    });

    it('should show correct players turn after some clicks', () => {
        const {getByTestId} = render(<Board/>);
        const status = getByTestId("status");
        const {getAllByTestId} = render(<Board/>);
        const squares = getAllByTestId("square-button");
        fireEvent.click(squares[0]);
        fireEvent.click(squares[1]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[6]);
        //fireEvent.click(squares[8]);
        expect(status.textContent).toBe("Next Player: X");
    });

});

describe('Test functionalities after winning the game', () => {

    it('should display the winner is X if X won the game', () => {

        const {getByTestId} = render(<Board/>);
        const status = getByTestId("status");
        const {getAllByTestId} = render(<Board/>);
        const squares = getAllByTestId("square-button");
        fireEvent.click(squares[0]);
        fireEvent.click(squares[1]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[6]);
        fireEvent.click(squares[8]);
        expect(status.textContent).toBe("Winner : X");
    });

    it('should display the winner is O if O won the game', () => {
        const {getByTestId} = render(<Board/>);
        const status = getByTestId("status");
        const {getAllByTestId} = render(<Board/>);
        const squares = getAllByTestId("square-button");
        fireEvent.click(squares[0]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[2]);
        fireEvent.click(squares[1]);
        fireEvent.click(squares[3]);
        fireEvent.click(squares[7]);
        expect(status.textContent).toBe("Winner : O");

    });

    it('should not be able to make clicks after winning', () => {

        const {getByTestId} = render(<Board/>);
        const status = getByTestId("status");
        const {getAllByTestId} = render(<Board/>);
        const squares = getAllByTestId("square-button");
        fireEvent.click(squares[0]);
        fireEvent.click(squares[1]);
        fireEvent.click(squares[4]);
        fireEvent.click(squares[6]);
        fireEvent.click(squares[8]);
        expect(status.textContent).toBe("Winner : X");

        fireEvent.click(squares[3]);
        expect(squares[3].textContent).toBe("");

    });
});