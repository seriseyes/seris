import css from "../textfields/TextField.module.css";
import Col from "../../layouts/Col";
import React from "react";
import Select from "react-select";
import {GetOptionLabel} from "react-select/dist/declarations/src/types";

interface SelectFieldProps<T> {
    value?: T;
    defaultValue?: T;
    options?: T[];
    onChange?: (e: any) => void;
    generator? : GetOptionLabel<T>;
    isMulti?: boolean;
    caption?: React.ReactNode;
    helper?: React.ReactNode;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    readonly?: boolean;
}

export default function SelectField<T>(props: SelectFieldProps<T>) {

    const styles: any = {
        singleValue: (provided: React.CSSProperties, state: T) => ({
            ...provided,
            color: "black"
        }),
        control: (provided: React.CSSProperties, state: T) => ({
            ...provided,
            background: "#E8EBEF",
            border: "none",
            borderRadius: '4px',
            cursor: "pointer",
        }),
        menu: (provided: React.CSSProperties, state: T) => ({
            ...provided,
            zIndex: 100
        }),
    }

    return <Col gap={props.caption ? "4" : "0"} className={`${css.root}`}>
        {(props.caption || props.required) &&
            <label className={css.caption}>{props.caption} {props.required && <div className={css.required}/>}</label>}
        <Select
            className={`${css.textField} ${css.selectField}`}
            styles={styles}
            defaultValue={props.defaultValue}
            options={props.options}
            onChange={props.onChange}
            value={props.value}
            isMulti={props.isMulti}
            closeMenuOnSelect={!props.isMulti}
            placeholder={props.placeholder || "Сонгох"}
            isDisabled={props.disabled}
            getOptionLabel={props.generator}
            menuPortalTarget={document.body}
            menuShouldScrollIntoView={false}
        />
        {props.helper && <label className={css.helper}>{props.helper}</label>}
    </Col>
}
