import * as React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';
import Input from '../../Componentes/Input/Index';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

import { validateEmail } from '../../Helpers/Helpers';

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
        navigation.navigate('VerInvitados')
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
                            onClick={() => agregarInv()}
                            //onClick={() => navigation.navigate('VerInvitados')}
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
    botonAgregarInv: {
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