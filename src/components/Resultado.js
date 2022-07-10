import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Resultado = (props) => {
    const { interes, capital, meses, total, error } = props;
    return (
        <View style={styles.content}>
            {total && (
                <View style={styles.resultado}>
                    <Text style={styles.title}>Resultado</Text>
                    <DataResult titulo={"Cantidad Solicitada"} value={`${capital}$`} />
                    <DataResult titulo={"Interes %"} value={`${interes}%`} />
                    <DataResult titulo={"Plazos"} value={`${meses} meses`} />
                    <DataResult titulo={"Pago Mensual"} value={`${total.pagoMes}$`} />
                    <DataResult titulo={"Total"} value={`${total.totalPagar}$`} />

                </View>
            )}
            <View>
                <Text style={styles.error}>{error}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

    error: {
        textAlign: 'center',
        color: "red",
        fontWeight: 'bold',
        fontSize: 20
    },
    content: {
        marginHorizontal: 40
    },
    resultado: {
        padding: 30,

    }
    , title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30
    },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20
    }

});

const DataResult = (props) => {
    const { titulo, value } = props;
    return (
        <>
            <View style={styles.value}>
                <Text>{titulo}</Text>
                <Text>{value}</Text>
            </View>
        </>
    )
}

export default Resultado;