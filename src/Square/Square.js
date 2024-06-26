import React, {useState} from "react";

export default function Square({value,onSquareClick}){
    return (
        <button data-testid="square-button" className="square" onClick={onSquareClick} >{value}</button>
    );
}