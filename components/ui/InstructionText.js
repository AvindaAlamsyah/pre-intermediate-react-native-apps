import { StyleSheet, Text } from 'react-native';
import Color from '../../constans/color';

function InstructionText({ children }) {
    return <Text style={styles.instructionText}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        color: Color.secondary500,
        fontSize: 24,
    },
});
