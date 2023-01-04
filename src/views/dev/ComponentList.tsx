import Button from "../../components/buttons/Button";
import {Style, Variant} from "../../components/Declares";
import {TiHeartFullOutline} from 'react-icons/ti';
import {BiSearchAlt2} from "react-icons/bi";
import {MdOutlineUpdate} from "react-icons/md";
import Row from "../../components/layouts/Row";
import Col from "../../components/layouts/Col";
import TextField from "../../components/inputs/textfields/TextField";
import SelectField from "../../components/inputs/selects/SelectField";
import DateField from "../../components/inputs/dates/DateField";
import React from "react";
import DateRangeField from "../../components/inputs/dates/DateRangeField";

interface Animal {
    value: string;
    age: number;
}

export default function ComponentList() {
    const animals: Animal[] = [
        {value: "Dog", age: 3},
        {value: "Cat", age: 2},
        {value: "Bird", age: 1},
    ];
    const H1 = ({value}: { value: string }) => <h1
        style={{fontSize: "1.3rem", borderBottom: "2px solid var(--primary)"}}>{value}</h1>;

    const onChange = (e: any) => {
        console.log(e)
    }

    return <Col gap={"10"}>
        <H1 value={"Buttons"}/>
        <Row gap={"5"}>
            <Button style={Style.Primary}>
                <TiHeartFullOutline/>
                Primary Default
            </Button>
            <Button style={Style.Primary} variant={Variant.Success}>
                <TiHeartFullOutline/>
                Primary Success
            </Button>
            <Button style={Style.Primary} variant={Variant.Danger}>
                <TiHeartFullOutline/>
                Primary Danger
            </Button>
            <Button style={Style.Primary} variant={Variant.Warning}>
                <TiHeartFullOutline/>
                Primary Warning
            </Button>
        </Row>
        <Row gap={"5"}>
            <Button style={Style.Secondary}>
                <TiHeartFullOutline/>
                Secondary Default
            </Button>
            <Button style={Style.Secondary} variant={Variant.Success}>
                <TiHeartFullOutline/>
                Secondary Success
            </Button>
            <Button style={Style.Secondary} variant={Variant.Danger}>
                <TiHeartFullOutline/>
                Secondary Danger
            </Button>
            <Button style={Style.Secondary} variant={Variant.Warning}>
                <TiHeartFullOutline/>
                Secondary Warning
            </Button>
        </Row>
        <Row gap={"5"}>
            <Button style={Style.Tertiary}>
                <TiHeartFullOutline/>
                Tertiary Default
            </Button>
            <Button style={Style.Tertiary} variant={Variant.Success}>
                <TiHeartFullOutline/>
                Tertiary Success
            </Button>
            <Button style={Style.Tertiary} variant={Variant.Danger}>
                <TiHeartFullOutline/>
                Tertiary Danger
            </Button>
            <Button style={Style.Tertiary} variant={Variant.Warning}>
                <TiHeartFullOutline/>
                Tertiary Warning
            </Button>
        </Row>
        <H1 value={"TextFields"}/>
        <Row gap={"10"} style={{alignItems: "flex-end"}}>
            <TextField defaultValue={"value"}/>
            <TextField placeholder={"placeholder"} caption={"Caption"}/>
            <TextField icon={<BiSearchAlt2/>} caption={"Icon"} placeholder={"Search..."}/>
            <TextField required={true} caption={"Caption"}
                       helper={<div style={{display: "flex", gap: "4px"}}>Helper text: <div
                           style={{color: "red"}}>required</div></div>} placeholder={"required"}/>
        </Row>
        <H1 value={"SelectFields"}/>
        <Row gap={"10"} style={{alignItems: "flex-end"}}>
            <SelectField options={[{value: "op 1"}, {value: "op 2"}, {value: "op 3"}]}
                         generator={val => val.value}
                         onChange={onChange}
            />
            <SelectField caption={"Сонгох"}
                         placeholder={"Search..."}
            />
            <SelectField options={animals}
                         generator={val => val.value + " " + val.age}
                         onChange={onChange}
                         placeholder={"placeholder"}
                         caption={"Multi select"}
                         isMulti={true}
            />
            <SelectField required={true}
                         caption={"Caption"}
                         onChange={e => console.log(e)}
                         helper={<div style={{display: "flex", gap: "4px"}}>Helper text: <div
                             style={{color: "red"}}>required</div></div>}
                         placeholder={"required"}
            />
        </Row>
        <H1 value={"DateFields"}/>
        <Row gap={"10"} style={{alignItems: "flex-end"}}>
            <DateField
                caption={"Date"}
            />
            <DateField
                caption={"Date + Time"}
                time={true}
            />
            <DateField
                caption={"Date + Time + Icon"}
                time={true}
                helper={<div style={{display: "flex", gap: "4px"}}>Helper text: <div
                    style={{color: "red"}}>required</div></div>}
                placeholder={"required"}
                required={true}
                icon={<MdOutlineUpdate/>}
            />
            <DateRangeField
                onChange={(e => console.log(e))}
                caption={"Range"}
            />
        </Row>
    </Col>
}
