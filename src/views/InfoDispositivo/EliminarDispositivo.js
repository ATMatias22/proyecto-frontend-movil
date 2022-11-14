import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function EliminarDispositivo({ navigation }) {
  return (
    <View style={Styles.container}>

      <View style={Styles.container2}>

        <Text style={Styles.texto}>
          ¿Esta seguro de que quiere eliminar este dispositivo?</Text>
        

      <View style={Styles.botones}>
        <View>
        <Button
          title='Aceptar'
          onPress={() => navigation.navigate('MostrarSensores')}
        />
        </View>
     
        <View>
          <Button
            title='Cancelar'
            onPress={() => navigation.navigate('InfoDispositivo')}
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
      flex: 1,
      //marginTop:120
  },
  container2:{
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: "#f1f1f1",
    alignItems: "center", 
    marginTop:120,
    borderRadius:20
  },
  texto:{
    fontSize: 20, 
    textAlign:"center", 
    fontWeight:"bold"
  },
  botones:{
    marginLeft: 100, 
    marginRight: 100,
    marginTop: 60, 
    marginBottom:20, 
    flexDirection: "row"
  }
})