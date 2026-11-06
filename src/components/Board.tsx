const Board = () => {
    return (
        <div className="Board">
            {[
                [1, 2, 3, "g"],
                [1, 2, 3, "g"],
                [1, 2, 3, "g"]
            ].map((row) => (
                <div>{row.map((cell) => cell)}</div>
            ))}
        </div>
    ); 
}

export default Board;