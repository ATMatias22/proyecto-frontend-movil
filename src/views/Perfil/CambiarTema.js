import * as React from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text as TextoDripsy } from "dripsy";

export default function CambiarTema({ navigation }) {
  return (
    <View style={Styles.container}>
      <View style={Styles.container2}>
        {/*<Text style={Styles.texto}>
                    Elija un tema para la aplicacion</Text>*/}

        <TextoDripsy
          sx={{
            fontSize: [20, 25, 30],
            textAlign: "center",
            fontWeight: "bold",
            padding: 2,
          }}
        >
          Elija un tema para la aplicacion:
        </TextoDripsy>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={[Styles.opcionColor, { backgroundColor: "red" }]}
          />

          <TouchableOpacity
            style={[Styles.opcionColor, { backgroundColor: "blue" }]}
          />

          <TouchableOpacity
            style={[Styles.opcionColor, { backgroundColor: "green" }]}
          />
        </View>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <TouchableOpacity
            style={[Styles.opcionColor, { backgroundColor: "grey" }]}
          />

          <TouchableOpacity
            style={[Styles.opcionColor, { backgroundColor: "yellow" }]}
          />

          <TouchableOpacity
            style={[Styles.opcionColor, { backgroundColor: "orange" }]}
          />
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },
  container2: {
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderColor: "#FF8800",
    backgroundColor: "white",
    alignItems: "center",
    marginTop: 120,
    borderRadius: 30,
    borderWidth: 3,
  },
  texto: {
    fontSize: 14,
    textAlign: "center",
    fontWeight: "bold",
    padding: 5,
  },
  opcionColor: {
    padding: 25,
    margin: 10,
    borderWidth: 1,
    borderRadius: 15,
  },
});
