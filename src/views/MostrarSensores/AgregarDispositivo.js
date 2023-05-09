import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';

import { faCode } from '@fortawesome/free-solid-svg-icons/faCode'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";


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
        // navigation.navigate('MostrarSensores')
        addDisp(formData.code, formData.password)
    }


    const validateData = () => {
        setErrorCode("")
        setErrorPassword("")
        let isValid = true



        if (formData.code == "") {
            setErrorCode("Debes ingresar un codigo.")
            isValid = false
            // console.log("codigo mal")
        }

        if (formData.password == "") {
            setErrorPassword("Debes ingresar una contraseña.")
            isValid = false
            // console.log("contraseña mal")
        }

        /*if (formData.password !== "222222" & formData.password !=="") {
            setErrorPassword("Contraseña incorrecta.")
            isValid = false
            // console.log("contraseña mal")
        }*/

        return isValid
    }

    const addDisp = async (code, password) => {

        let notification = JSON.stringify({
            code: code,
            password: password
        })

        const token = await AsyncStorage.getItem('@storage_Key');

        let headers = {
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        const peticion = await axios.put("http://192.168.0.176:8080/app_movil_sensor/api/device/link-user", notification, headers)
            .then(async res => {

                navigation.navigate("MostrarSensores")
            })
            .catch(error =>

                console.log(error),
                setErrorCode("Accceso denegado.")
                // setLoading(false)
            );

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
                            <FontAwesomeIcon icon={faEye} style={[Styles.iconoOjo, { marginLeft: 100 }]} />
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
                            onPress={() => agregarDisp()}
                            // onPress={() => navigation.navigate('MostrarSensores')} 
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
        borderRadius: 30,
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
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#FF8800",
    },
    icono: {
        marginRight: 5,
        marginTop: 5
    },
    iconoOjo: {
        alignSelf: "flex-end",
        marginLeft: "auto",
        marginTop: 7,
        marginLeft: 60
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