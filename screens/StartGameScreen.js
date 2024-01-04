import { StyleSheet, TextInput, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.inputContainer}>
            <TextInput
                style={styles.inputNumber}
                maxLength={2}
                keyboardType="number-pad"
                autoCorrect={false}
            />
            <PrimaryButton>Reset</PrimaryButton>
            <PrimaryButton>Confirm</PrimaryButton>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        padding: 16,
        backgroundColor: 'maroon',
        elevation: 4,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        shadowOpacity: 0.25,
    },
    inputNumber: {
        height: 50,
        width: 50,
        fontSize: 31,
        fontWeight: 'bold',
        color: 'gold',
        borderBottomColor: 'gold',
        borderBottomWidth: 2,
        marginVertical: 16,
        textAlign: 'center',
    },
});
