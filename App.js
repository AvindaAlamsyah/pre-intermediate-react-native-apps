import { ImageBackground, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState();

    function pickedNumberHandler(pickedNumber) {
        setUserNumber(pickedNumber);
    }

    let screen = <StartGameScreen onPickedNumber={pickedNumberHandler} />;

    if (userNumber) {
        screen = <GameScreen />;
    }

    return (
        <LinearGradient
            colors={['darkred', 'gold']}
            style={styles.rootScreen}
        >
            <ImageBackground
                source={require('./assets/images/background.png')}
                resizeMode="cover"
                style={styles.rootScreen}
                imageStyle={styles.backgroudImage}
            >
                {screen}
            </ImageBackground>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
    },
    backgroudImage: {
        opacity: 0.15,
    },
});
