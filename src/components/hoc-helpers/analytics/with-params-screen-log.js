import React, { useEffect } from "react";
import { logApplicationEvent } from "../../../helpers/application-analytics";

const withParamsScreenLog = (name, bindParamsToLogObject = p => {}) => (Wrapper) => (props) => {
    
    const { params } = props;

    useEffect(() => {
        logApplicationEvent(name, bindParamsToLogObject(params))
    }, []);

    return <Wrapper {...props}/>
}

export default withParamsScreenLog;