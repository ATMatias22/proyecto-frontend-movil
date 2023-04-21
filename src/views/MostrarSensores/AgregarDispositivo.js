import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';

import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'


export default function AgregarDispositivo({ navigation }) {

    const [data, setData] = React.useState({
        code: "",
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
    const [errorCode, setErrorCode] = React.useState("")
    const [errorPassword, setErrorPassword] = React.useState("")

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    const agregarDisp = () => {
        if (!validateData()) {
            return;
        }
        navigation.navigate('MostrarSensores')
    }


    const validateData = () => {
        setErrorCode("")
        setErrorPassword("")
        let isValid = true

        if (formData.code !== "coddisp1" & formData.code !== "") {
            setErrorCode("Debes ingresar un codigo valido.")
            isValid = false
            console.log("codigo mal")
        }

        if (formData.code == "" ) {
            setErrorCode("Debes ingresar un codigo.")
            isValid = false
            // console.log("codigo mal")
        }

        if (formData.password == "") {
            setErrorPassword("Debes ingresar una contraseña.")
            isValid = false
            // console.log("contraseña mal")
        }

        if (formData.password !== "222222" & formData.password !=="") {
            setErrorPassword("Contraseña incorrecta.")
            isValid = false
            // console.log("contraseña mal")
        }

        return isValid
    }
    return (
        <View style={Styles.container} >

            <View style={Styles.formContainer}>
                <View style={Styles.input}>

                    <FontAwesomeIcon icon={faCode} style={Styles.icono} />
                    <TextInput
                        placeholder='Ingresar codigo'
                        autoCapitalize='none'
                        errorMessage={errorCode}
                        onChange={(e) => onChange(e, "code")}
                        defaultValue={formData.code}
                    />
                </View>
                {errorCode !== null ?
                    <Text style={Styles.mensajeError}>{errorCode}</Text>
                    :
                    null
                }

                <View style={Styles.input}>

                    <FontAwesomeIcon icon={faLock} style={Styles.icono} />
                    <TextInput
                        placeholder='Ingresar contraseña'
                        secureTextEntry={data.secureTextEntry ? true : false}
                        errorMessage={errorPassword}
                        onChange={(e) => onChange(e, "password")}
                        defaultValue={formData.password}
                    />
                    <TouchableOpacity
                        onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ?
                            <FontAwesomeIcon icon={faEyeSlash} style={Styles.iconoOjo} />
                            :
                            <FontAwesomeIcon icon={faEye} style={{ marginLeft: 120, marginTop: 5, marginRight: 5 }} />
                        }
                    </TouchableOpacity>
                </View>
                {errorPassword !== null ?
                    <Text style={Styles.mensajeError}>{errorPassword}</Text>
                    :
                    null
                }

                <View style={Styles.botonAgregarDisp}>
                    <View>
                        <Boton text="Agregar dispositivo"
                            onClick={() => agregarDisp()}
                            // onClick={() => navigation.navigate('MostrarSensores')} 
                            type="principal" />
                    </View>
                </View>

            </View>


        </View>
    );
}

const defaultFormValues = () => {
    return { code: "", password: "" }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    formContainer: {
        marginTop: 40,
        marginLeft: 17,
        marginRight: 17,
        padding: 5,
        backgroundColor: "white",
        borderRadius:30,
        borderWidth: 3,
        borderColor: "#FF8800",

       
        
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
        backgroundColor: "#EDEAEA",
        flexDirection: "row",
        borderRadius:30,
        borderWidth: 3,
        borderColor: "#FF8800",
    },
    icono: {
        marginRight: 5,
        marginTop: 5
    },
    iconoOjo: {
        marginRight: 5,
        marginTop: 6,
        marginLeft: 80
    },
    botonAgregarDisp: {
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