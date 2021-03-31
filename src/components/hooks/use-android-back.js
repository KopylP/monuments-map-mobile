import { useEffect } from 'react';
import { BackHandler } from 'react-native';
import { isAndroid } from '../../helpers/platform-helpers';



export default function useAndroidBack(action) {
    const onAttach = () => {
        BackHandler.addEventListener('hardwareBackPress', action);
    }
    
    const onDetach = () => {
        BackHandler.removeEventListener('hardwareBackPress', action);
    }

    useEffect(() => {
        if (isAndroid) {
            onAttach();
            return onDetach;
        }
    })
}