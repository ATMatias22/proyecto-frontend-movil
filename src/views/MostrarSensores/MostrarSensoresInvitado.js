import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Boton from '../../Componentes/Boton/Index';

import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash'

import { Text as TextoDripsy } from 'dripsy';

export default function MostrarSensoresInvitado({ navigation }) {
    return (
        <View style={Styles.container}>
            <View style={Styles.seleccionDispositivo}>
                <TouchableOpacity onPress={() => navigation.navigate('MostrarSensores')}>
                    <TextoDripsy
                        sx={{
                            fontSize: [10, 12, 14],
                            color: "white",
                            paddingLeft: 20
                        }}>
                        dispositivos en propiedad</TextoDripsy>
                    {/*  <Text style={{ fontSize: 10, color: "white", paddingLeft: 20 }}>dispositivos en propiedad</Text>*/}
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('MostrarSensoresInvitado')}>
                <TextoDripsy
                        sx={{
                            fontSize: [10, 12, 14],
                            color: "yellow",
                            paddingLeft: 20
                        }}>
                        dispositivos en los que esta vinculado</TextoDripsy>
                    {/*<Text style={{ fontSize: 10, paddingLeft: 20, color: "yellow" }}>dispositivos en los que esta vinculado</Text>*/}
                </TouchableOpacity>
            </View>


            <View style={Styles.dispositivo}>

                <View style={{ marginLeft: 5 }}>
                   {/* <Text style={Styles.texto}>Nombre del dispositivo</Text>*/}
                    <TextoDripsy sx={Styles.textoDripsy}>Nombre del dispositivo</TextoDripsy>
                    {/*<Text style={Styles.texto}>Dueño del dispositivo</Text>*/}
                    <TextoDripsy sx={Styles.textoDripsy}>Dueño del dispositivo</TextoDripsy>
                    {/*<Text style={Styles.texto}>Cantidad de personas vinculadas: X</Text>*/}
                    <TextoDripsy sx={Styles.textoDripsy}>Cantidad de personas vinculadas: X</TextoDripsy>
                </View>

                <View style={{ marginRight: 190, marginLeft: 10, marginTop: 10 }}>
                    <Boton text="Ver historial"
                        onClick={() => navigation.navigate('VerHistorial')}
                        type="secundario" />
                </View>

                <View style={{ marginLeft: 170, flexDirection: "row", padding: 8 }}>
                    <TouchableOpacity>
                        <FontAwesomeIcon icon={faTrash} style={{marginTop:10}}/>
                    </TouchableOpacity>
                    {/*<Text style={Styles.texto2}>EstadoWifi</Text>*/}
                    <TextoDripsy sx={Styles.textoDripsy2}>EstadoWifi</TextoDripsy>
                    {/*<Text style={Styles.texto2}>Encendido/apagado</Text>*/}
                    <TextoDripsy sx={Styles.textoDripsy2}>Encendido/apagado</TextoDripsy>
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
    seleccionDispositivo: {
        marginLeft: 10,
        marginTop: 20,
        flexDirection: "row"
    },
    dispositivo: {
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: "#fff",
        borderColor: "#f1f1f1",
    },
    textoDripsy:{
        fontSize: 10
    },
  /*  texto: {
        fontSize: 10
    },*/
    textoDripsy2:{
        fontSize: 8,
        paddingLeft: 10,
        paddingTop: 3
    },
   /* texto2: {
        fontSize: 8,
        paddingLeft: 10,
        paddingTop: 3
    },*/
    /* agregarDispositivo: {
         marginLeft: 20,
         marginTop: 10,
         backgroundColor: "#fff",
         padding: 8,
         marginRight: 308,
         borderRadius: 30
     },*/
    botonIrVerHistorial: {
        textTransform: "uppercase",
        textAlign: "center",
        backgroundColor: "orangered",
        color: "white",
        padding: 7,
        borderRadius: 30,
    },
})