import * as Analytics from 'expo-firebase-analytics';
import React from "react";

const withPressLog = (name, bindPropsToLogObject = p => {}) => (Wrapper) => (props) => {
    
    const { onPress } = props;
    const handlePress = (e) => {
        Analytics.logEvent(name, bindPropsToLogObject);
        onPress(e);
    }

    return <Wrapper {...props} onPress={handlePress}/>
}

export default withPressLog;