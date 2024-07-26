import Square from './Square'
class Board {
    squares: Square[];
    onPlay: (a: any) => any;
    xIsNext: boolean;
    status: string;

    constructor(squares: Square[], onPlay: (a: any) => any, xIsNext: boolean) {
        this.squares = squares;
        this.onPlay = onPlay;
        this.xIsNext = xIsNext;
    }

    calculateWinner(squares: Square[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a].getValue()){
          }
          if (squares[a].getValue() && squares[a].getValue() === squares[b].getValue() && squares[a].getValue() === squares[c].getValue()) {
                return squares[a].getValue();
          }
        }
        return null;
    }

    handleClick(i: number): void {
        if (this.calculateWinner(this.squares)) {
            console.log("returning cuz winner")
            return;
        }
        const nextSquares = this.squares.slice();
        console.log("Within internal method " + i)
        if (this.xIsNext) {
            nextSquares[i].setValue('X');
        } else {
            nextSquares[i].setValue('O');
        }
        console.log(nextSquares[i].getValue())
        const winner = this.calculateWinner(this.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.xIsNext ? 'X' : 'O');
        }
        this.onPlay(nextSquares);
    }

    render () {
        return (
            <>
                <div className="status">{status}</div>
                <div className="board-row">
                    {(this.createSquare(1).render())}
                    {(this.createSquare(2).render())}
                    {(this.createSquare(3).render())}
                </div>
                <div className="board-row">
                    {(this.createSquare(4).render())}
                    {(this.createSquare(5).render())}
                    {(this.createSquare(6).render())}
                </div>
                <div className="board-row">
                    {(this.createSquare(7).render())}
                    {(this.createSquare(8).render())}
                    {(this.createSquare(9).render())}
                </div>
            </>
        );
    }

    private createSquare(address: number) : Square {
        let square: Square = new Square(() => {
            console.log("handling click for" + address)
            this.handleClick(address - 1)
        }, null)
        this.squares[address - 1] = square;
        return square;
    }
}

export default Board;