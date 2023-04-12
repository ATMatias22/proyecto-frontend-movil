import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';
import Input from '../../Componentes/Input/Index';

import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'

import { validateEmail } from '../../Helpers/Helpers';

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
  const [formData, setFormData] = React.useState(defaultFormValues())
  const [errorEmail, setErrorEmail] = React.useState("")
  const [errorPassword, setErrorPassword] = React.useState("")
  const [errorConfirm, setErrorConfirm] = React.useState("")
  //const [loading, setLoading] = useState(false)

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text })
  }

  const registerUser = () => {
    if (!validateData()) {
      return;
    }
    navigation.navigate('MostrarSensores')
  }


  const validateData = () => {
    setErrorEmail("")
    setErrorPassword("")
    let isValid = true

    if (!validateEmail(formData.email)) {
      setErrorEmail("Debes ingresar un email valido.")
      isValid = false
    }
    if (formData.email == "") {
      setErrorEmail("Debe ingresar un email.")
      isValid = false
    }
    if (formData.email !== "ignacio@hola.com" & validateEmail(formData.email)) {
      setErrorEmail("Email incorrecto.")
      isValid = false
    }
    if (formData.password == "") {
      setErrorPassword("Debe ingresar una contraseña.")
      isValid = false
    }
    if (formData.password !== "123456" & formData.password !== "") {
      setErrorPassword("Contraseña incorrecta.")
      isValid = false
    }
    if (formData.confirm !== formData.password & formData.confirm !== "") {
      setErrorConfirm("La confirmacion no coincide.")
      isValid = false
    }
    if (formData.confirm == "") {
      setErrorConfirm("Debes volver a ingresar la contraseña.")
      isValid = false
    }

    return isValid
  }

  return (
    <View style={Styles.container}>

      <View style={Styles.logo}>
        <Text>el logo</Text>
      </View>

      <View style={Styles.registerContainer}>

        {/*<Input
          placeholder="Ingrese su mail"
          icono={
            <FontAwesomeIcon icon={faUser} />
          }
        />*/}

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faUser} style={Styles.icono} />
          <TextInput
            placeholder='Ingrese su mail'
            autoCapitalize='none'
            errorMessage={errorEmail}
            onChange={(e) => onChange(e, "email")}
            defaultValue={formData.email}
          />
        </View>
        {errorEmail !== null ?
          <Text style={Styles.mensajeError}>{errorEmail}</Text>
          :
          null
        }

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder='Ingrese su contraseña'
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize='none'
            errorMessage={errorPassword}
            onChange={(e) => onChange(e, "password")}
            defaultValue={formData.password}
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
        {errorPassword !== null ?
          <Text style={Styles.mensajeError}>{errorPassword}</Text>
          :
          null
        }

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder='Su contraseña de nuevo'
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize='none'
            errorMessage={errorConfirm}
            onChange={(e) => onChange(e, "confirm")}
            defaultValue={formData.confirm}
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
        {errorPassword !== null ?
          <Text style={Styles.mensajeError}>{errorConfirm}</Text>
          :
          null
        }

        <View style={{ marginLeft: 60, marginRight: 60, marginTop: 30 }}>
          <View>
            <Boton text="Registrarse"
             onClick={() => registerUser()}
              //onClick={() => navigation.navigate('MostrarSensores')}
              type="principal" />
          </View>

          <View style={{ marginTop: 30, alignItems: "center", flexDirection: "row" }}>
            <Text style={Styles.texto}>¿Ya tiene una cuenta?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Login')}
            >
              <Text style={{ fontWeight: "bold", fontSize: 10, paddingLeft: 20, color: "orangered" }}>Ingresar</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>

    </View>
  );
}

const defaultFormValues = () => {
  return { email: "", password: "", confirm: "" }
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
  },
  botonRegistrar: {
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    padding: 10,
    textAlign: "center",
    color: "white",
    backgroundColor: "orange",
    borderRadius: 30
  },
  mensajeError: {
    marginLeft: 40,
    color: "red"
  }

})
