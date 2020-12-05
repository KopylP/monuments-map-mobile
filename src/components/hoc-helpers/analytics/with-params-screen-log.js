import * as Analytics from 'expo-firebase-analytics';
import React, { useEffect } from "react";

const withParamsScreenLog = (name, bindParamsToLogObject = p => {}) => (Wrapper) => (props) => {
    
    const { params } = props;

    useEffect(() => {
        Analytics.logEvent(name, bindParamsToLogObject(params))
    }, []);

    return <Wrapper {...props}/>
}

export default withParamsScreenLog;