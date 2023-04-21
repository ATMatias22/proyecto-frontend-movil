import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';

import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'

export default function CambiarContraseña({ navigation }) {

    const [data, setData] = React.useState({
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
    const [errorPassword, setErrorPassword] = React.useState("")
    const [errorConfirm, setErrorConfirm] = React.useState("")
    //const [loading, setLoading] = useState(false)

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    const cambiarContraseñaDisp = () => {
        if (!validateData()) {
            return;
        }
        navigation.navigate('InfoDispositivo')
    }


    const validateData = () => {
        setErrorPassword("")
        setErrorConfirm("")
        let isValid = true

        if (formData.password !== "654321" & formData.password !== "") {
            setErrorPassword("Contraseña incorrecta.")
            isValid = false
        }
        if (formData.password == "") {
            setErrorPassword("Debes ingresar una contraseña.")
            isValid = false
        }
        if (formData.confirm !== formData.password & formData.confirm !== "") {
            setErrorConfirm("La confirmacion no coincide.")
            isValid = false
        }

        if (formData.confirm == "") {
            setErrorConfirm("Debe volver a ingresar la contraseña.")
            isValid = false
        }

        return isValid
    }

    return (
        <View style={Styles.container} >

            <View style={Styles.formContainer}>
                <View style={Styles.input}>
                    <FontAwesomeIcon icon={faLock} style={Styles.icono} />
                    <TextInput
                        placeholder='Ingresar contraseña actual'
                        secureTextEntry={data.secureTextEntry ? true : false}
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
                            <FontAwesomeIcon icon={faEye} style={{ marginLeft: 80, marginTop: 5, marginRight: 5 }} />
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
                        placeholder='Ingresar nueva contraseña'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        errorMessage={errorConfirm}
                        onChange={(e) => onChange(e, "confirm")}
                        defaultValue={formData.confirm}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ?
                            <FontAwesomeIcon icon={faEyeSlash} style={{ marginRight: 5, marginTop: 5, marginLeft: 29 }} />
                            :
                            <FontAwesomeIcon icon={faEye} style={{ marginLeft: 80, marginTop: 5, marginRight: 5 }} />
                        }
                    </TouchableOpacity>
                </View>
                {errorConfirm !== null ?
                    <Text style={Styles.mensajeError}>{errorConfirm}</Text>
                    :
                    null
                }

                <View style={Styles.botonCambiarCont}>
                    <Boton text="Cambiar contraseña"
                        onClick={() => cambiarContraseñaDisp()}
                        //onClick={() => navigation.navigate('InfoDispositivo')} 
                        type="principal" />
                </View>

            </View>

        </View>
    );
}

const defaultFormValues = () => {
    return { password: "", confirm: "" }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    formContainer: {
        marginTop: 90,
        marginLeft: 17,
        marginRight: 17,
        padding: 5,
        backgroundColor: "white",
        borderRadius: 30,
        borderColor: "#FF8800",
        borderWidth: 2,
    },
    input: {
        marginBottom: 10,
        borderColor: "#FF8800",
        borderWidth: 2,
        borderRadius: 30,
        // paddingStart:30,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        padding: 10,
        backgroundColor: "#EDEAEA",
        flexDirection: "row"
    },
    icono: {
        marginRight: 5,
        marginTop: 5
    },
    iconoOjo: {
        marginRight:5,
        marginTop: 5,
        marginLeft:7,
    },
    botonCambiarCont: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 20,
        marginBottom: 20
    },
    mensajeError: {
      marginLeft: 40,
      color: "red",
    },
})