import React, {useState} from "react";
import Col from "../../layouts/Col";
import css from "../textfields/TextField.module.css";
import Row from "../../layouts/Row";
import DatePicker from "react-datepicker";
import {BsCalendarRangeFill} from 'react-icons/bs';

interface DateProps {
    value?: DateRange;
    caption?: React.ReactNode;
    helper?: React.ReactNode;
    icon?: React.ReactNode;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
    onChange?: (e: DateRange) => void;
}

export interface DateRange {
    start: Date;
    end?: Date;
}

export default function DateRangeField(props: DateProps) {
    const [value, setValue] = useState<DateRange>({
        start: props.value?.start || new Date(),
        end: props.value?.end
    });

    const onChange = (dates: any) => {
        const [start, end] = dates;
        if (props.onChange && start && end) props.onChange({start, end});
        setValue({start, end});
    }

    return <Col gap={props.caption ? "4" : "0"} className={`${css.root} ${props.disabled && css.disabled}`} style={{width: "220px"}}>
        {(props.caption || props.required) &&
            <label className={css.caption}>{props.caption} {props.required && <div className={css.required}/>}</label>}
        <Row className={css.wrap} gap={"5"}>
            <div className={css.icon}>{props.icon || <BsCalendarRangeFill/>}</div>
            <DatePicker
                selected={value.start}
                startDate={value.start}
                endDate={value.end}
                readOnly={props.readonly}
                disabled={props.disabled}
                placeholderText={props.placeholder}
                className={css.textField}
                onChange={onChange}
                dateFormat={"yyyy.MM.dd"}
                selectsRange
            />
        </Row>
        {props.helper && <label className={css.helper}>{props.helper}</label>}
    </Col>

}
