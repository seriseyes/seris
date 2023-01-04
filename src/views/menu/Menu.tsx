import Col from "../../components/layouts/Col";
import Row from "../../components/layouts/Row";
import {Link, Outlet} from "react-router-dom";

export default function Menu() {
    return <Col>
        <Row gap={"10"}>
            <Link to={'home'}>home</Link>
            <Link to={'dev'}>Dev</Link>
        </Row>
        <Outlet/>
    </Col>
}
