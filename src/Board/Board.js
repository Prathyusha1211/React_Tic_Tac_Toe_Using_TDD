import React from "react";

const Board = () => {
    return (
        <>
            <div>
                <button data-testid="square-button" className="square">X</button>
                <button data-testid="square-button" className="square">X</button>
                <button data-testid="square-button" className="square">X</button>
            </div>
            <div>
                <button data-testid="square-button" className="square">X</button>
                <button data-testid="square-button" className="square">X</button>
                <button data-testid="square-button" className="square">X</button>
            </div>
            <div>
                <button data-testid="square-button" className="square">X</button>
                <button data-testid="square-button" className="square">X</button>
                <button data-testid="square-button" className="square">X</button>
            </div>
        </>
    )
        ;
}

export default Board