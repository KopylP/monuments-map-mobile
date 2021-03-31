import React from "react";
import { Text, View } from "react-native";
import Constants from 'expo-constants';

export default function AppVersion() {
    return <View style={{
        alignSelf: "flex-end",
        marginTop: 10,
        marginRight: 10,
    }}>
        <Text style={{
            fontSize: 13,
            fontWeight: "400",
            color: "#777",
        }}>{ Constants.manifest.version }</Text>
    </View>
}