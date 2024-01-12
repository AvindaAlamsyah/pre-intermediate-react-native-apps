import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import { useEffect, useState } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import { Ionicons } from '@expo/vector-icons';
import GuessLogItem from '../components/game/GuessLogItem';

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
    const [guessRounds, setGuessRounds] = useState([initialGuest]);

    useEffect(() => {
        if (currentGuess === usrNumber) {
            onGameOver();
        }
    }, [currentGuess, usrNumber, onGameOver]);

    useEffect(() => {
        minBoundary = 1;
        maxBoundary = 100;
    }, []);

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
        setGuessRounds((prevGuessNumbers) => [newRndNumber, ...prevGuessNumbers]);
    }

    const guessRoundListLength = guessRounds.length;

    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card>
                <InstructionText style={styles.instructionText}>Higher or Lower?</InstructionText>
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                            <Ionicons
                                name="md-remove"
                                size={24}
                            />
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                            <Ionicons
                                name="md-add"
                                size={24}
                            />
                        </PrimaryButton>
                    </View>
                </View>
            </Card>
            <FlatList
                data={guessRounds}
                renderItem={(guessRound) => {
                    return (
                        <GuessLogItem
                            roundNumber={guessRoundListLength - guessRound.index}
                            guess={guessRound.item}
                        />
                    );
                }}
                keyExtractor={(item) => {
                    return item;
                }}
            />
        </View>
    );
}

export default GameScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
    instructionText: {
        marginBottom: 24,
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1,
    },
});
