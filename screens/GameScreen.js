import { StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';

function generatedRandomNumberBetween(min, max, exclude) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if (rndNumber == exclude) {
        generatedRandomNumberBetween(min, max, exclude);
    } else {
        return rndNumber;
    }
}

function GameScreen({ usrNumber }) {
    const initialGuest = generatedRandomNumberBetween(1, 100, usrNumber);
    const [currentGuess, setCurrentGuest] = useState(initialGuest);

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                {/* + - */}
            </View>
            {/* <View>Log Rounds</View> */}
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
});
