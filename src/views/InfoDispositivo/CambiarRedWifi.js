import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';
import Input from '../../Componentes/Input/Index';

import { faWifi } from '@fortawesome/free-solid-svg-icons/faWifi'
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'

export default function CambiarRedWifi({ navigation }) {


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
    const [errorNombreRed, setErrorNombreRed] = React.useState("")
    const [errorPassword, setErrorPassword] = React.useState("")
    //const [loading, setLoading] = useState(false)

    const onChange = (e, type) => {
        setFormData({ ...formData, [type]: e.nativeEvent.text })
    }

    const cambiarRedWifi = () => {
        if (!validateData()) {
            return;
        }
        navigation.navigate('InfoDispositivo')
    }


    const validateData = () => {
        setErrorPassword("")
        let isValid = true

        if (formData.nombreRed == "") {
            setErrorNombreRed("Debes ingresar un nombre de red.")
            isValid = false
        }

        if (formData.password !== "111111" & formData.password !== "") {
            setErrorPassword("Contraseña incorrecta.")
            isValid = false
        }

        if (formData.password == "") {
            setErrorPassword("Debes ingresar una contraseña.")
            isValid = false
        }

        return isValid
    }
    return (
        <View style={Styles.container} >

            <View style={Styles.formContainer}>

                {/*<Input
                    placeholder="Ingresar nombre"
                    icono={
                        <FontAwesomeIcon icon={faWifi} />
                    }
                />*/}
                <View style={Styles.input}>
                    <FontAwesomeIcon icon={faWifi} style={Styles.icono} />
                    <TextInput
                        placeholder='Ingresar nombre'
                        autoCapitalize='none'
                        errorMessage={errorNombreRed}
                        onChange={(e) => onChange(e, "nombreRed")}
                        defaultValue={formData.nombreRed}
                    />
                </View>
                {errorNombreRed !== null ?
                    <Text style={Styles.mensajeError}>{errorNombreRed}</Text>
                    :
                    null
                }

                <View style={Styles.input}>

                    <FontAwesomeIcon icon={faLock} style={Styles.icono} />
                    <TextInput
                        placeholder='Ingresar contraseña'
                        secureTextEntry={true}
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


                <View style={Styles.botonCambiarRed}>
                    <View>
                        <Boton text="Cambiar red"
                            onClick={() => cambiarRedWifi()}
                            // onClick={() => navigation.navigate('InfoDispositivo')}
                            type="principal" />
                    </View>
                </View>
            </View>

        </View>
    );
}

const defaultFormValues = () => {
    return { nombreRed: "", password: "" }
}


const Styles = StyleSheet.create({
    container: {
        backgroundColor: "orange",
        flex: 1
    },
    formContainer: {
        marginTop: 90,
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
        marginLeft: 80
    },
    botonCambiarRed: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 20,
        marginBottom: 20
    },
    mensajeError: {
        marginLeft: 40,
        color: "red"
    }
})