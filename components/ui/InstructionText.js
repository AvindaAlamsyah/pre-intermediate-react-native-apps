import { StyleSheet, Text } from 'react-native';
import Color from '../../constans/color';

function InstructionText({ children, style }) {
    return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText: {
        fontFamily: 'open-sans',
        color: Color.secondary500,
        fontSize: 24,
    },
});