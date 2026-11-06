const Board = () => {
    return (
        <div className="Board">
            {[
                [{value: 0}, {value: 1}, {value: 2}, {value: "mine"}],
                [{value: 3}, {value: 4}, {value: 5}, {value: 6}],
                [{value: 7}, {value: 8}, {value: "mine"}, {value: "mine"}]
            ].map((row) => (
                <div className="row">{row.map((cell) => <div className = "cell">{cell.value}</div>)}</div>
            ))}
        </div>
    ); 
}

export default Board;