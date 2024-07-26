import React from "react";

class Square extends React.Component {
    onSquareClick: (a: any) => void;
    public state: any;
    constructor (onSquareClick: (a: any) => void, props: React.PropsWithChildren) {
        super(props)
        this.state = {
            value: null
        };
        this.onSquareClick = onSquareClick;
    }
    render()  {
        return (
          <button className="square" onClick={this.onSquareClick}>
            {this.state.value}
          </button>
        );
    }

    public setValue(new_value: string) {
        this.state.value = new_value;
    }

    public getValue() {
        return this.state.value;
    }
}

export default Square;