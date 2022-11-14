import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

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
    return (
        <View style={Styles.container} >

            <View style={Styles.formContainer}>
                <View style={Styles.input}>

                    <FontAwesomeIcon icon={faWifi} style={Styles.icono}/>
                    <TextInput
                        placeholder='Ingresar nombre'
                        autoCapitalize='none'
                    />
                </View>

                <View style={Styles.input}>

                    <FontAwesomeIcon icon={faLock} style={Styles.icono}/>
                    <TextInput
                        placeholder='Ingresar contraseña'
                        secureTextEntry={true}
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



                <View style={Styles.botonCambiarRed}>
                    <View>
                        <Button
                            title="Cambiar red"
                            onPress={() => navigation.navigate('InfoDispositivo')}
                        />
                    </View>
                </View>
            </View>

        </View>
    );
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
    }
})