import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import Footer from './src/components/Footer';
import Form from './src/components/Form';
import Resultado from './src/components/Resultado';
import colors from './src/utils/colors';

const App = () => {

  const [capital, setCapital] = useState(null);
  const [interes, setInteres] = useState(null);
  const [meses, setMeses] = useState(null);
  const [total, setTotal] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (capital && interes && meses) calcular(); 
    else reset();
  }, [capital, interes, meses])

  const calcular = () => {
    reset();

    if (!capital) {
      setError('Añade cantidad a pedir');
    } else if (!interes) {
      setError('Añade los intereses');
    } else if (!meses) {
      setError('Seleciona los meses')
    } else {
      const i = interes / 100;
      const fee = capital / ((1 - Math.pow(i + 1, -meses)) / i);

      setTotal({
        pagoMes: fee.toFixed(2).replace('.', ','),
        totalPagar: (fee * meses).toFixed(2).replace('.', ',')
      });

    }
  }

  const reset = () => {
    setError('');
    setTotal(null);
  }

  return (
    <>

      <StatusBar barStyle="light-content" />
      <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
        <React.Fragment>


          <SafeAreaView style={styles.safeArea}>
            <View style={styles.background} />
            <Text style={styles.title}>Cotizador Prestamos</Text>
            <Form
              setCapital={setCapital}
              setInteres={setInteres}
              setMeses={setMeses}
              meses={meses}
            />
          </SafeAreaView>

          <Resultado
            capital={capital}
            interes={interes}
            meses={meses}
            error={error}
            total={total}
          />
          <Footer
            calcular={calcular}
          />
        </React.Fragment>
      </TouchableWithoutFeedback>
    </>

  );
};

const styles = StyleSheet.create({
  safeArea: {
    height: 290,
    alignItems: 'center'
  },
  title: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 15,
    top: 20
  },
  background: {
    backgroundColor: colors.PRIMARY_COLOR,
    height: 200,
    width: "100%",
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    position: "absolute",
    zIndex: -1,
  }

});

export default App;
