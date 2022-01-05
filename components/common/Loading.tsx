import React, {FC} from "react";
import { Spinner } from "react-bootstrap";

const Loading: FC = () => {
    return (
        <div className="container vh-100 w-100 d-flex justify-content-center align-items-center flex-column">
            <Spinner animation="border" variant="primary" role="status"></Spinner>
            <div className="text-primary">Loading...</div>
        </div>
    )
}

export default Loading;