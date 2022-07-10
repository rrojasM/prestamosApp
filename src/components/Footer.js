import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../utils/colors';

const Footer = (props) => {

    const { calcular } = props;
    return (
        <View style={styles.viewFooter}>
            <TouchableOpacity style={styles.button} onPress={calcular}>
                <Text style={styles.text}>Calcular</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    viewFooter: {
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        backgroundColor: colors.PRIMARY_COLOR,
        height: 100,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,

    },
    text: {
        fontWeight: 'bold',
        color: "#fff",
        fontSize: 18,
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        padding: 16,
        borderRadius: 20,
        width: "75%"
    }
});

export default Footer;