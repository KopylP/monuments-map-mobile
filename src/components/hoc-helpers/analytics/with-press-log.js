import React from "react";
import { logApplicationEvent } from "../../../helpers/application-analytics";

const withPressLog = (name, bindPropsToLogObject = p => {}) => (Wrapper) => (props) => {
    
    const { onPress } = props;
    const handlePress = (e) => {
        logApplicationEvent(name, bindPropsToLogObject);
        onPress(e);
    }

    return <Wrapper {...props} onPress={handlePress}/>
}

export default withPressLog;