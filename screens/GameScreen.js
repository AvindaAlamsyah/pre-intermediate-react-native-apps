import { Alert, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';

let minBoundary = 1;
let maxBoundary = 100;

function generatedRandomNumberBetween(min, max, exclude) {
    const rndNumber = Math.floor(Math.random() * (max - min)) + min;

    if (rndNumber == exclude) {
        generatedRandomNumberBetween(min, max, exclude);
    } else {
        return rndNumber;
    }
}

function GameScreen({ usrNumber, onGameOver }) {
    const initialGuest = generatedRandomNumberBetween(1, 100, usrNumber);
    const [currentGuess, setCurrentGuest] = useState(initialGuest);

    useEffect(() => {
        if (currentGuess === usrNumber) {
            onGameOver();
        }
    }, [currentGuess, usrNumber, onGameOver]);

    function nextGuessHandler(direction) {
        if (
            (direction === 'lower' && currentGuess < usrNumber) ||
            (direction === 'greater' && currentGuess > usrNumber)
        ) {
            Alert.alert('Dont lie guys!', 'You know this is wrong command...', [
                { text: 'Pardon me!', style: 'cancel' },
            ]);
            return;
        }

        if (direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoundary = currentGuess + 1;
        }

        const newRndNumber = generatedRandomNumberBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuest(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <View>
                <Text>Higher or Lower?</Text>
                <View>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>-</PrimaryButton>
                    <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>+</PrimaryButton>
                </View>
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
