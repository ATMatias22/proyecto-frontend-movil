import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Boton from "../../Componentes/Boton/Index";

import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";

export default function CambiarContraseñaPerfil({ navigation }) {
  const [data, setData] = React.useState({
    password: "",
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const [formData, setFormData] = React.useState(defaultFormValues());
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorConfirm, setErrorConfirm] = React.useState("");
  //const [loading, setLoading] = useState(false)

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const cambiarContraseñaPerfil = () => {
    if (!validateData()) {
      return;
    }
    navigation.navigate("MostrarSensores");
  };

  const validateData = () => {
    setErrorConfirm("");
    setErrorPassword("");
    let isValid = true;

    if ((formData.password !== "hola123") & (formData.password !== "")) {
      setErrorPassword("Contraseña incorrecta.");
      isValid = false;
    }
    if (formData.password == "") {
      setErrorPassword("Debes ingresar una contrasseña.");
      isValid = false;
    }
    if (formData.confirm !== formData.password) {
      setErrorConfirm("Las contraseñas no son iguales.");
      isValid = false;
    }
    if (formData.confirm == "") {
      setErrorConfirm("Debes volver a ingresar la contraseña.");
      isValid = false;
    }

    return isValid;
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.formContainer}>
        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder="Ingresar contraseña actual"
            secureTextEntry={data.secureTextEntry ? true : false}
            errorMessage={errorPassword}
            onChange={(e) => onChange(e, "password")}
            defaultValue={formData.password}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <FontAwesomeIcon icon={faEyeSlash} style={Styles.iconoOjo} />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                style={{ marginLeft: 80, marginTop: 5, marginRight: 5 }}
              />
            )}
          </TouchableOpacity>
        </View>
        {errorPassword !== null ? (
          <Text style={Styles.mensajeError}>{errorPassword}</Text>
        ) : null}

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder="Ingresar nueva contraseña"
            secureTextEntry={data.secureTextEntry ? true : false}
            errorMessage={errorConfirm}
            onChange={(e) => onChange(e, "confirm")}
            defaultValue={formData.confirm}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                style={{ marginRight: 5, marginTop: 5, marginLeft: 10 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                style={{ marginRight: 5, marginTop: 5, marginLeft: 100 }}
              />
            )}
          </TouchableOpacity>
        </View>
        {errorConfirm !== null ? (
          <Text style={Styles.mensajeError}>{errorConfirm}</Text>
        ) : null}

        <View style={Styles.botonCambiarCont}>
          <Boton
            text="Cambiar contraseña"
            onClick={() => cambiarContraseñaPerfil()}
            //onClick={() => navigation.navigate('InfoDispositivo')}
            type="principal"
          />
        </View>
      </View>
    </View>
  );
}

const defaultFormValues = () => {
  return { password: "", confirm: "" };
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  formContainer: {
    marginTop: 20,
    marginLeft: 17,
    marginRight: 17,
    padding: 5,
    borderWidth: 3,
    borderRadius: 30,
    borderColor: "#FF8800",
    backgroundColor: "withe",
  },
  input: {
    marginBottom: 10,
    borderColor: "#FF8800",
    borderWidth: 3,
    borderRadius: 30,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    padding: 10,
    backgroundColor: "#EDEAEA",
    flexDirection: "row",
  },
  icono: {
    marginRight: 5,
    marginTop: 5,
  },
  iconoOjo: {
    marginRight: 5,
    marginTop: 5,
    marginLeft: 0,
  },
  botonCambiarCont: {
    marginLeft: 60,
    marginRight: 60,
    marginTop: 20,
    marginBottom: 20,
  },
  mensajeError: {
    marginLeft: 40,
    color: "red",
  },
});
