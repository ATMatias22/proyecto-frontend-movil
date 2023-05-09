import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';
import Input from '../../Componentes/Input/Index';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

import { validateEmail } from '../../Helpers/Helpers';

import AsyncStorage from '@react-native-async-storage/async-storage';

import axios from "axios";

import { useRoute } from '@react-navigation/native';

export default function AgregarInvitado({ navigation }) {


    const [formData, setFormData] = React.useState(defaultFormValues())
    const [errorMail, setErrorMail] = React.useState("")

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    const agregarInv = () => {
        if (!validateData()) {
            return;
        }
        addInv(formData.mail)
       // navigation.navigate('VerInvitados')
      // navigation.goBack();
    }


    const validateData = () => {
        setErrorMail("")
        let isValid = true


        if (!validateEmail(formData.mail)) {
            setErrorMail("Debes ingresar un email valido.")
            isValid = false
        }
        if (formData.mail == "") {
            setErrorMail("Debes ingresar un email.")
            isValid = false
        }

        return isValid
    }

    const route = useRoute();

    const codeDisp = route.params.codigoDisp;
  


    const addInv = async (mail) => {

        let notification = JSON.stringify({
            email: mail,
            deviceCode: codeDisp
        })

        const token = await AsyncStorage.getItem('@storage_Key');

        let headers = {
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
            }
        }

        const peticion = await axios.post("http://192.168.0.176:8080/app_movil_sensor/api/device/add-observer", notification, headers)
            .then(async res => {

                navigation.goBack();
            })
            .catch(error =>

                console.log(error),
                setErrorMail("Accceso denegado.")
                // setLoading(false)
            );

    }

    return (
        <View style={Styles.container} >

            <View style={Styles.formContainer}>
                {/*<Input
                    placeholder="ejemplo@gmail.com"
                    icono={
                        <FontAwesomeIcon icon={faEnvelope} />
                    }
                    errorMessage={errorMail}
                    onChange={(e) => onChange(e, "mail")}
                    defaultValue={formData.mail}
                />
                {errorMail !== null ?
                    <Text style={Styles.mensajeError}>{errorMail}</Text>
                    :
                    null
                }
            */}
                <View style={Styles.input}>
                    <FontAwesomeIcon icon={faEnvelope} style={Styles.icono} />
                    <TextInput
                        placeholder='ejemplo@gmail.com'
                        autoCapitalize='none'
                        errorMessage={errorMail}
                        onChange={(e) => onChange(e, "mail")}
                        defaultValue={formData.mail}
                    />
                </View>
                {errorMail !== null ?
                    <Text style={Styles.mensajeError}>{errorMail}</Text>
                    :
                    null
                }

                <View style={Styles.botonAgregarInv}>
                    <View>
                        <Boton text="Agregar invitado"
                            onPress={() => agregarInv()}
                            //onPress={() => navigation.navigate('VerInvitados')}
                            type="principal" />
                    </View>
                </View>

            </View>


        </View>
    );
}

const defaultFormValues = () => {
    return { mail: ""/*, confirm: ""*/ }
}

const Styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    },
    formContainer: {
        marginLeft: 17,
        marginRight: 17,
        padding: 5,
        backgroundColor: "white",
        alignItems: "center",
        marginTop: 40,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: "#FF8800",
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
        marginTop: 5
    },
    botonAgregarInv: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 20,
        marginBottom: 20
    },
    mensajeError: {
        //marginLeft: 40,
        color: "red",
    },
})