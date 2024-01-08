import { StyleSheet, Text } from 'react-native';
import Color from '../constans/Color';

function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Color.secondary500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Color.secondary500,
        padding: 12,
    },
});
