import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'

export default function Register({ navigation }) {

  const [data, setData] = React.useState({
    email: "",
    password: "",
    secureTextEntry: true
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    });
  }

  return (
    <View style={Styles.container}>

      <View style={Styles.logo}>
        <Text>el logo</Text>
      </View>

      <View style={Styles.registerContainer}>

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faUser} style={Styles.icono} />
          <TextInput
            placeholder='Ingrese su mail'
            autoCapitalize='none'
          />
        </View>


        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder='Ingrese su contraseña'
            secureTextEntry={data.secureTextEntry ? true : false}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
              <FontAwesomeIcon icon={faEyeSlash} style={Styles.iconoOjo} />
              :
              <FontAwesomeIcon icon={faEye} style={{ marginLeft: 100, marginTop: 5, marginRight: 5 }} />
            }
          </TouchableOpacity>
        </View>


        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder='Su contraseña de nuevo'
            secureTextEntry={data.secureTextEntry ? true : false}
          />
          <TouchableOpacity
            onPress={updateSecureTextEntry}
          >
            {data.secureTextEntry ?
              <FontAwesomeIcon icon={faEyeSlash} style={{ marginRight: 5, marginTop: 5, marginLeft: 55 }} />
              :
              <FontAwesomeIcon icon={faEye} style={{ marginLeft: 100, marginTop: 5, marginRight: 5 }} />
            }
          </TouchableOpacity>
        </View>


        <View style={{ marginLeft: 60, marginRight: 60, marginTop: 30 }}>
          <View>
            <Button
              title="Registrarse"
              onPress={() => navigation.navigate('MostrarSensores')}
            />
          </View>

          <View style={{ marginTop: 30, alignItems: "center", flexDirection: "row" }}>
            <Text style={Styles.texto}>¿Ya tiene una cuenta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={{ fontWeight: "bold", fontSize: 10, paddingLeft: 20, color: "orange" }}>Ingresar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "orange",
    flex: 1
  },
  logo: {
    alignItems: "center",
    marginBottom: 90,
    marginTop: 60
  },
  registerContainer: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: "#f1f1f1",
  },
  input: {
    marginBottom: 10,
    borderColor: "#f1f1f1",
    borderWidth: 1,
    borderRadius: 30,
    // paddingStart:30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#fff",
    flexDirection: "row"
  },
  icono: {
    marginRight: 5,
    marginTop: 5
  },
  iconoOjo: {
    marginRight: 5,
    marginTop: 5,
    marginLeft: 60
  },
  texto: {
    fontWeight: "bold",
    fontSize: 10,
    paddingLeft: 10
  }

})
