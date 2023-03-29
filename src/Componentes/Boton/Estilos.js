import { StyleSheet } from 'react-native';

export const botonEstilos = StyleSheet.create({

    principal: {
      fontWeight: "bold",
      fontSize: 16,
      textTransform: "uppercase",
      padding: 10,
      textAlign: "center",
      color: "white",
      backgroundColor: "orangered",
      borderRadius: 30
    },
    secundario: {
      fontWeight: "bold",
      textTransform: "uppercase",
      textAlign: "center",
      backgroundColor: "rgb(245, 190, 10)",
      color: "rgb(248, 67, 12)",
      padding: 7,
      borderRadius: 30,
    },
    aceptar: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    backgroundColor: "rgb(17, 216, 17)",
    color: "white",
    padding: 15,
    textTransform: "uppercase",
    marginRight: 10,
    borderRadius: 30
    },
    cancelar: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
    backgroundColor: "red",
    color: "white",
    padding: 15,
    textTransform: "uppercase",
    marginLeft: 10,
    borderRadius: 30
    }
  });