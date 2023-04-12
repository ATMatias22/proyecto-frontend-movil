import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Boton from '../../Componentes/Boton/Index';

import { Text as TextoDripsy } from 'dripsy';


export default function EliminarPerfil({ navigation }) {

  return (
    <View style={Styles.container}>

      <View style={Styles.container2}>

        {/*<Text style={Styles.texto}>
          ¿Esta seguro de que quiere eliminar su perfil?</Text>*/}

        <TextoDripsy
          sx={{
            fontSize: [20, 25, 30],
            textAlign: "center",
            fontWeight: "bold",
            padding: 1
          }}>
          ¿Esta seguro de que quiere eliminar su perfil?</TextoDripsy>

        <View style={Styles.botones}>
          <View>
            <Boton text="aceptar"
              onClick={() => navigation.navigate('Login')}
              type="aceptar"
            />
          </View>

          <View>
            <Boton text="cancelar"
              onClick={() => navigation.navigate('Perfil')}
              type="cancelar"
            />
          </View>
        </View>

      </View>

    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "orange",
    flex: 1
  },
  container2: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: "#f1f1f1",
    alignItems: "center",
    marginTop: 120,
    borderRadius: 20
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    padding: 5
  },
  botones: {
    marginLeft: 100,
    marginRight: 100,
    marginTop: 30,
    marginBottom: 20,
    flexDirection: "row"
  }
})