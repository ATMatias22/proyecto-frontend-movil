import * as React from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faEnvelope } from '@fortawesome/free-solid-svg-icons/faEnvelope'

export default function CambiarContraseña({ navigation }) {
    return (
        <View style={Styles.container} >

            <View style={Styles.formContainer}>
                <View style={Styles.input}>

                    <FontAwesomeIcon icon={faEnvelope} style={Styles.icono} />
                    <TextInput
                        placeholder='ejemplo@algo.com'
                        secureTextEntry={true}
                    />
                </View>

                <View style={Styles.botonAgregarInv}>
                    <View>
                        <Button
                            title="Agregar"
                            onPress={() => navigation.navigate('VerInvitados')}
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
    botonAgregarInv: {
        marginLeft: 60,
        marginRight: 60,
        marginTop: 20,
        marginBottom: 20
    }
})