import React from "react";
import css from "./Button.module.css";
import {Style, Variant} from "../Declares";

interface Props {
    children?: React.ReactNode;
    variant?: Variant;
    style?: Style;
    css?: {};
    disabled?: boolean;
    onClick?: () => void;
}

export default function Button(props: Props) {

    return <button
        className={`${css.button} ${css["button" + Style[props.style || 0] + Variant[props.variant || 0]]}`}
        style={props.css}
        disabled={props.disabled}
        onClick={props.onClick}
    >
        {props.children}
    </button>
}
