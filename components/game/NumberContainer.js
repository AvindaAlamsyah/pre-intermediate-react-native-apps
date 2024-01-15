import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Color from '../../constans/color';

function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>{children}</Text>
        </View>
    );
}
export default NumberContainer;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderColor: Color.secondary500,
        padding: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        margin: deviceWidth < 380 ? 12 : 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberText: {
        fontFamily: 'open-sans-bold',
        color: Color.secondary500,
        fontSize: deviceWidth < 380 ? 28 : 36,
    },
});
