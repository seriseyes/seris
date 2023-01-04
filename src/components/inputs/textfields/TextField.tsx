import Col from "../../layouts/Col";
import {InputType} from "../../Declares";
import css from "./TextField.module.css";
import React from "react";
import Row from "../../layouts/Row";

interface TextFieldProps {
    type?: InputType;
    value?: string;
    defaultValue?: string;
    caption?: React.ReactNode;
    helper?: React.ReactNode;
    icon?: React.ReactNode;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
}

export default function TextField(props: TextFieldProps) {
    return <Col gap={props.caption ? "4" : "0"} className={`${css.root} ${props.disabled && css.disabled}`}>
        {(props.caption || props.required) &&
            <label className={css.caption}>{props.caption} {props.required && <div className={css.required}/>}</label>}
        <Row className={css.wrap}>
            {props.icon && <div className={css.icon}>{props.icon}</div>}
            <input value={props.value}
                   defaultValue={props.defaultValue}
                   readOnly={props.readonly}
                   disabled={props.disabled}
                   placeholder={props.placeholder}
                   className={css.textField}
                   type={InputType[props.type || 0]}
            />
        </Row>
        {props.helper && <label className={css.helper}>{props.helper}</label>}
    </Col>
}
