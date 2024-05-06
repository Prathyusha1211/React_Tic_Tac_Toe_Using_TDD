import React from "react";
import {getAllByTestId, render} from "@testing-library/react"
import Board from "./Board";
describe('Basic Rendering of the Board', () => {
    it('should contain the square', () => {
        const {getByTestId} = render(<Board/>);
        expect(getByTestId("square-button")).toBeDefined();
    });

    it('should contain 9 squares for Board', () => {
        const {getAllByTestId} = render(<Board/>);
        expect(getAllByTestId("square-button")).toHaveLength(9);

    });

    it('square should contain a value', () => {

    });

});