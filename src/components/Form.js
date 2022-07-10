import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Picker } from '@react-native-picker/picker';
import colors from "../utils/colors";




const Form = (props) => {

    const { setMeses, setInteres, setCapital, meses } = props;
    return (
        <View style={styles.formStyle}>
            <View style={styles.viewInput}>
                <TextInput
                    style={styles.input}
                    placeholder="Cantidad a Pedir"
                    keyboardType="numeric"
                    onChange={(e) => setCapital(e.nativeEvent.text)}
                />
                <TextInput
                    style={[styles.input, styles.inputPorcentaje]}
                    placeholder="Interes %"
                    keyboardType="numeric"
                    onChange={(e) => setInteres(e.nativeEvent.text)}
                />
            </View>
            <Picker
                style={pickerSelect.inputAndroid}
                selectedValue={meses}
                onValueChange={(itemValue, itemIndex) => {
                    setMeses(itemValue);
                    console.log(itemValue, itemIndex);
                }}
            >
                <Picker.Item label="Selecioná plazos..." value={null} />
                <Picker.Item label="3 Meses" value="3" />
                <Picker.Item label="6 Meses" value="6" />
                <Picker.Item label="12 Meses" value="12" />
                <Picker.Item label="24 Meses" value="24" />
            </Picker>
        </View>
    )
}


const styles = StyleSheet.create({
    formStyle: {
        position: 'absolute',
        width: "90%",
        bottom: 0,
        paddingHorizontal: 50,
        backgroundColor: colors.PRIMARY_COLOR_DARK,
        borderRadius: 30,
        height: 180,
        justifyContent: 'center'
    },
    viewInput: {
        flexDirection: "row"

    },
    input: {
        height: 50,
        width: "60%",
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        marginRight: 5,
        marginLeft: -5,
        marginBottom: 10,
        color: "#000",
        paddingHorizontal: 20
    },
    inputPorcentaje: {
        width: "40%",
        marginLeft: 5,
    }
});


const pickerSelect = StyleSheet.create({
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderColor: "grey",
        borderRadius: 8,
        color: "#000",
        paddingRight: 30,
        backgroundColor: "#fff",
    }
})


export default Form;


