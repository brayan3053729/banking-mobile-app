import { useEffect } from 'react';
import {
    View,
    Image,
    StyleSheet
} from 'react-native';

const Splash = ({ onFinish }: { onFinish: () => void }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 5000);
        return () => clearTimeout(timer);
    }, [onFinish]);
    return (
        <View>
            <Image
                source={require('../screens/images/logo.png')}
                resizeMode='contain'
            />
        </View>
    );
};

const styles =StyleSheet.create({
    contrainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'rgba(243, 4, 28, 1)'
    },
    logo:{
        width:200,
        height:200
    }

});

export default Splash;