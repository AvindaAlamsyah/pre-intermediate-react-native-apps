import { StyleSheet, Text, View } from 'react-native';
import Color from '../../constans/Color';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}
export default NumberContainer;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Color.secondary500,
        padding: 24,
        borderRadius: 8,
        margin: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        color: Color.secondary500,
        fontWeight: 'bold',
        fontSize: 36,
    },
});
