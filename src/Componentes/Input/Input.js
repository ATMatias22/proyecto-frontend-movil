import * as React from 'react';
import { Props } from "./Tipos";

import {
    inputEstilos,
} from './Estilos';

import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'


const Input = ({ placeholder, icono, type = "normal" }) => {


    const [data, setData] = React.useState({
        email: "",
        password: "",
        secureTextEntry: false
    });

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    return (

        <View style={
            // {...inputEstilos[type]}
            Styles.input
        }>
            <View style={Styles.icono}>
                {icono}
            </View>
            <TextInput
                placeholder={placeholder}
                autoCapitalize='none'
                //secureTextEntry={data.secureTextEntry ? true : false}
            />
            {/*type = "contraseña" ?
                <TouchableOpacity
                    onPress={updateSecureTextEntry}
                >
                    {data.secureTextEntry ?
                        <FontAwesomeIcon icon={faEyeSlash} style={Styles.iconoOjo} />
                        :
                        <FontAwesomeIcon icon={faEye} style={{ marginLeft: 100, marginTop: 5, marginRight: 5 }} />
                    }
                </TouchableOpacity>
                :
                false
                */}
        </View>
    );
}
export default Input;

const Styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        borderColor: "#f1f1f1",
        borderWidth: 1,
        borderRadius: 30,
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
})