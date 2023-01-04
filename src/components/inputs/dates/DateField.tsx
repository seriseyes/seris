import React, {useState} from "react";
import Col from "../../layouts/Col";
import css from "../textfields/TextField.module.css";
import Row from "../../layouts/Row";
import DatePicker from "react-datepicker";
import {BsCalendarDateFill} from 'react-icons/bs';

interface DateProps {
    value?: Date;
    time?: boolean;
    caption?: React.ReactNode;
    helper?: React.ReactNode;
    icon?: React.ReactNode;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (e: Date) => void;
}

export default function DateField(props: DateProps) {
    const [value, setValue] = useState<Date>(props.value || new Date());

    const onChange = (e: Date) => {
        if (props.onChange) props.onChange(e);
        setValue(e);
    }

    return <Col gap={props.caption ? "4" : "0"} className={`${css.root} ${props.disabled && css.disabled}`}>
        {(props.caption || props.required) &&
            <label className={css.caption}>{props.caption} {props.required && <div className={css.required}/>}</label>}
        <Row className={css.wrap} gap={"5"}>
            <div className={css.icon}>{props.icon || <BsCalendarDateFill/>}</div>
            <DatePicker
                selected={value}
                readOnly={props.readonly}
                disabled={props.disabled}
                placeholderText={props.placeholder}
                className={css.textField}
                onChange={onChange}
                dateFormat={"yyyy.MM.dd" + (props.time ? " HH:mm" : "")}
                showTimeSelect={props.time}
                timeFormat={"HH:mm"}
            />
        </Row>
        {props.helper && <label className={css.helper}>{props.helper}</label>}
    </Col>

}
