import * as React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

import { Text as TextoDripsy } from 'dripsy';

export default function Perfil({ navigation }) {

    return (
        <View style={Styles.container}>

            <View style={Styles.logo}>
                <Text>el logo</Text>
            </View>

            <View style={{ marginTop: 30 }}>
                <View style={Styles.opcionesLetra}>
                    <TouchableOpacity style={{ flexDirection: "row" }}
                        onPress={() => navigation.navigate('ModificarPerfil')}>
                        {/*<Text>Cambiar datos</Text>*/}

                        <TextoDripsy
                        sx={{
                            fontSize: [14, 16, 18],
                        }}>
                       Cambiar datos</TextoDripsy>

                        <FontAwesomeIcon icon={faArrowRight} style={Styles.icono} />
                    </TouchableOpacity>
                </View>

                <View style={Styles.opcionesLetra}>
                    <TouchableOpacity style={{ flexDirection: "row" }}
                        onPress={() => navigation.navigate('CambiarContraseñaPerfil')}>
                        {/*<Text>Cambiar contraseña</Text>*/}

                        <TextoDripsy
                        sx={{
                            fontSize: [14, 16, 18],
                        }}>
                       Cambiar contraseña</TextoDripsy>

                        <FontAwesomeIcon icon={faArrowRight} style={{/*Styles.icono*/ paddingLeft: 280 }} />
                    </TouchableOpacity>
                </View>

                <View style={Styles.opcionesLetra}>
                    <TouchableOpacity style={{ flexDirection: "row" }}
                        onPress={() => navigation.navigate('CambiarTema')}>
                        {/*<Text>Cambiar tema</Text>*/}

                        <TextoDripsy
                        sx={{
                            fontSize: [14, 16, 18],
                        }}>
                       Cambiar tema</TextoDripsy>

                        <FontAwesomeIcon icon={faArrowRight} style={Styles.icono} />
                    </TouchableOpacity>
                </View>

                <View style={Styles.opcionesLetra}>
                    <TouchableOpacity style={{ flexDirection: "row" }}
                        onPress={() => navigation.navigate('EliminarPerfil')}>
                        {/*<Text>Eliminar perfil</Text>*/}

                        <TextoDripsy
                        sx={{
                            fontSize: [14, 16, 18],
                        }}>
                       Eliminar perfil</TextoDripsy>

                        <FontAwesomeIcon icon={faTrash} style={Styles.icono} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}

const Styles = StyleSheet.create({
    container: {
        textAlign: "center",
        backgroundColor: "orange",
        flex: 1
    },
    logo: {
        alignItems: "center",
        marginBottom: 90,
        marginTop: 60
    },
    opciones: {
        alignItems: "center"
    },
    opcionesLetra: {
        padding: 20,
        paddingLeft: 50,
        backgroundColor: "white",
        borderBottomWidth: 2,
        borderTopWidth: 2,
        textTransform: "uppercase",
        backgroundColor: "#f3f1f1"
    },
    icono: {
        paddingLeft: 350
    }
})