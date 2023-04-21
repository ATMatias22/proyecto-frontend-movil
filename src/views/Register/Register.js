import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import Boton from "../../Componentes/Boton/Index";
import Input from "../../Componentes/Input/Index";

import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faLock } from "@fortawesome/free-solid-svg-icons/faLock";
import {
  faEyeSlash,
  height,
} from "@fortawesome/free-solid-svg-icons/faEyeSlash";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons/faEnvelope";
import { faCakeCandles } from "@fortawesome/free-solid-svg-icons/faCakeCandles";
import { faFlag } from "@fortawesome/free-solid-svg-icons/faFlag";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar"

import { validateEmail } from "../../Helpers/Helpers";

import DatePicker from "react-native-modern-datepicker";
import { getToday, getFormatedDate } from "react-native-modern-datepicker";

export default function Register({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
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
  const [errorNombre, setErrorNombre] = React.useState("");
  const [errorApellido, setErrorApellido] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorNacimiento, setErrorNacimiento] = React.useState("");
  const [errorNacionalidad, setErrorNacionalidad] = React.useState("");
  const [errorPassword, setErrorPassword] = React.useState("");
  const [errorConfirm, setErrorConfirm] = React.useState("");
  //const [loading, setLoading] = useState(false)


  const [open, setOpen] = React.useState(false); //abre y cierra el modal

  const [date, setDate] = React.useState(new Date()); //variable de date

  const today = getToday();

  const [isSelected, setIsSelected] = React.useState(false);


  function handleOnPress() {
    setOpen(!open);
  }

  function onDateSelected(value) {
    setDate(value);
    setIsSelected(true);
  }

  const onChange = (e, type) => {
    setFormData({ ...formData, [type]: e.nativeEvent.text });
  };

  const registerUser = () => {
    if (!validateData()) {
      return;
    }
    navigation.navigate("MostrarSensores");
  };

  const validateData = () => {
    setErrorNombre("");
    setErrorApellido("");
    setErrorEmail("");
    setErrorNacimiento("");
    setErrorNacionalidad("");
    setErrorPassword("");
    setErrorConfirm("");
    let isValid = true;

    if (formData.nombre == "") {
      setErrorNombre("Debes ingresar un nombre.");
      isValid = false;
    }
    if (formData.apellido == "") {
      setErrorApellido("Debes ingresar un apellido.");
      isValid = false;
    }
    if (!validateEmail(formData.email)) {
      setErrorEmail("Debes ingresar un email valido.");
      isValid = false;
    }
    if (formData.email == "") {
      setErrorEmail("Debe ingresar un email.");
      isValid = false;
    }
    if (
      (formData.email !== "ignacio@hola.com") &
      validateEmail(formData.email)
    ) {
      setErrorEmail("Email incorrecto.");
      isValid = false;
    }
    if (isSelected == false) {
      setErrorNacimiento("Debes ingresar una fecga de nacimiento")
      isValid = false;
    }
    if (date >= today) {
      setErrorNacimiento("Debes ingresar una fecha de nacimiento valida")
      isValid = false;
    }
    if (formData.nacionalidad == "") {
      setErrorNacionalidad("Debes ingresar una nacionalidad.");
      isValid = false;
    }
    if (formData.password == "") {
      setErrorPassword("Debe ingresar una contraseña.");
      isValid = false;
    }
    if ((formData.password !== "123456") & (formData.password !== "")) {
      setErrorPassword("Contraseña incorrecta.");
      isValid = false;
    }
    if ((formData.confirm !== formData.password) & (formData.confirm !== "")) {
      setErrorConfirm("La confirmacion no coincide.");
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
      <ScrollView>
      {<View style={Styles.logo}>
        <Image source={require("../../img/sensor3.png")} />
  </View>}

      <View style={Styles.registerContainer}>
        {/*comando para hacer que la pantalla
         suba cuando escribo en el teclado*/}

        {/*<Input
          placeholder="Ingrese su mail"
          icono={
            <FontAwesomeIcon icon={faUser} />
          }
        />*/}
        <View style={Styles.input}>
          <FontAwesomeIcon icon={faUser} style={Styles.icono} />
          <TextInput
            placeholder="Ingrese su nombre"
            autoCapitalize="none"
            errorMessage={errorNombre}
            onChange={(e) => onChange(e, "nombre")}
            defaultValue={formData.nombre}
          />
        </View>

        {errorNombre !== null ? (
          <Text style={Styles.mensajeError}>{errorNombre}</Text>
        ) : null}

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faUser} style={Styles.icono} />
          <TextInput
            placeholder="Ingrese su apellido"
            autoCapitalize="none"
            errorMessage={errorApellido}
            onChange={(e) => onChange(e, "apellido")}
            defaultValue={formData.apellido}
          />
        </View>

        {errorApellido !== null ? (
          <Text style={Styles.mensajeError}>{errorApellido}</Text>
        ) : null}

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faEnvelope} style={Styles.icono} />
          <TextInput
            placeholder="Ingrese su mail"
            autoCapitalize="none"
            errorMessage={errorEmail}
            onChange={(e) => onChange(e, "email")}
            defaultValue={formData.email}
          />
        </View>

        {errorEmail !== null ? (
          <Text style={Styles.mensajeError}>{errorEmail}</Text>
        ) : null}

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faCakeCandles} style={Styles.icono} />
          <TextInput
            placeholder="Ingrese fecha"
            editable={false}
            errorMessage={errorNacimiento}
            onChange={(e) => onChange(e, "nacimiento")}
            value={date == null ? "" : date}
          />
          <TouchableOpacity onPress={handleOnPress}>
            <FontAwesomeIcon icon={faCalendar} style={[Styles.icono, { marginLeft: 140 }]} />
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={open}
          >
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <View style={Styles.modalView}>
                <DatePicker
                  mode="calendar"
                  onSelectedChange={date => {
                    onDateSelected(date)
                  }}
                  options={{
                    textFontSize: 13,
                    selectedTextColor: "#fff",
                    mainColor: "#F47228",
                    backgroundColor: "#f1f1f1",
                    textSecondaryColor: "#F4722B"
                  }}
                  style={{ borderRadius: 20 }}
                />

                <TouchableOpacity onPress={handleOnPress}>
                  <Text style={{ marginTop: 10, marginBottom: -10, color: "#F4722B" }} >
                    Cerrar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>

        </View>
        {errorNacimiento !== null ? (
          <Text style={Styles.mensajeError}>{errorNacimiento}</Text>
        ) : null}

         <View style={Styles.input}>
          <FontAwesomeIcon icon={faFlag} style={Styles.icono} />
          <TextInput
            placeholder="Ingrese su nacionalidad"
            autoCapitalize="none"
            errorMessage={errorNacionalidad}
            onChange={(e) => onChange(e, "nacionalidad")}
            defaultValue={formData.nacionalidad}
          />
        </View>

        {errorNacionalidad !== null ? (
          <Text style={Styles.mensajeError}>{errorNacionalidad}</Text>
        ) : null}
        

        <View style={Styles.input}>
          <FontAwesomeIcon icon={faLock} style={Styles.icono} />
          <TextInput
            placeholder="Ingrese su contraseña"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            errorMessage={errorPassword}
            onChange={(e) => onChange(e, "password")}
            defaultValue={formData.password}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                style={{ marginLeft: 20, marginTop: 5, marginRight: 10 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                style={{ marginLeft: 80, marginTop: 5, marginRight: 10 }}
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
            placeholder="Su contraseña de nuevo"
            secureTextEntry={data.secureTextEntry ? true : false}
            autoCapitalize="none"
            errorMessage={errorConfirm}
            onChange={(e) => onChange(e, "confirm")}
            defaultValue={formData.confirm}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <FontAwesomeIcon
                icon={faEyeSlash}
                style={{ marginLeft: 10, marginTop: 5, marginRight: 10 }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faEye}
                style={{ marginLeft: 50, marginTop: 5, marginRight: 10 }}
              />
            )}
          </TouchableOpacity>
        </View>
        {errorPassword !== null ? (
          <Text style={Styles.mensajeError}>{errorConfirm}</Text>
        ) : null}

        <View style={{ marginLeft: 60, marginRight: 60, marginTop: 30 }}>
          <View>
            <Boton
              text="Registrarse"
              onClick={() => registerUser()}
              //onClick={() => navigation.navigate('MostrarSensores')}
              type="principal"
            />
          </View>

          <View
            style={{
              marginTop: 30,
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text style={Styles.texto}>¿Ya tiene una cuenta?</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 10,
                  paddingLeft: 20,
                  color: "orangered",
                }}
              >
                Ingresar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </ScrollView>
    </View>
  );
}

const defaultFormValues = () => {
  return { nombre: "", apellido: "", email: "", nacimiento: "", nacionalidad: "", password: "", confirm: "" };
};

const Styles = StyleSheet.create({
  container: {
    textAlign: "center",
    backgroundColor: "white",
    flex: 1,
  },
  logo: {
    width: "100%",
    alignItems: "center",
    marginBottom: 30,
    marginTop: 20,
  },
  registerContainer: {
    marginLeft: 17,
    marginRight: 17,
    padding: 10,
    backgroundColor: "withe",
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#FF8800",
  },
  input: {
    marginBottom: 10,
    borderColor: "#FF8800",
    borderWidth: 3,
    borderRadius: 30,
    // paddingStart:30,
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
    //marginLeft: 32
  },
  icon: {
    color: "#c1c1c1",
  },
  iconoOjo: {
    marginRight: 5,
    marginTop: 5,
    marginLeft: 60,
  },
  texto: {
    fontWeight: "bold",
    fontSize: 12,
    paddingLeft: 12,
    //marginLeft: ,
  },
  botonRegistrar: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
    padding: 10,
    textAlign: "center",
    color: "white",
    backgroundColor: "orange",
    borderRadius: 30,
  },
  mensajeError: {
    marginLeft: 40,
    color: "red",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    alignItems: "center",
    padding: 25,
    width: "93%",
    showOffSet: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 7
  }
});
