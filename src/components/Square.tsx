import React, {Component} from "react";
import { useState } from 'react';

export type SquareProps = {value?: string, handleClick: () => void};

export default function Square(props: SquareProps) {
    return (
        <button className="square" onClick={props.handleClick}>
            {props.value}
        </button>
    );
}