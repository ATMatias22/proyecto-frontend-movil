import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DripsyProvider } from 'dripsy';

import Login from './src/views/Login/Login';
import Register from './src/views/Register/Register';
import MostrarSensores from './src/views/MostrarSensores/MostrarSensores';
import MostrarSensoresInvitado from './src/views/MostrarSensores/MostrarSensoresInvitado';
import InfoDispositivo from './src/views/InfoDispositivo/InfoDispositivo';
import AgregarDispositivo from './src/views/MostrarSensores/AgregarDispositivo';
import CambiarContraseña from './src/views/InfoDispositivo/CambiarContraseña';
import CambiarRedWifi from './src/views/InfoDispositivo/CambiarRedWifi';
import VerInvitados from './src/views/InfoDispositivo/VerInvitados';
import AgregarInvitado from './src/views/InfoDispositivo/AgregarInvitado';
import VerHistorial from './src/views/InfoDispositivo/VerHistorial';
import EliminarDispositivo from './src/views/InfoDispositivo/EliminarDispositivo';
import Perfil from './src/views/Perfil/Perfil';
import ModificarPerfil from './src/views/Perfil/ModificarPerfil';
import EliminarPerfil from './src/views/Perfil/EliminarPerfil';
import CambiarTema from './src/views/Perfil/CambiarTema';
import CambiarContraseñaPerfil from './src/views/Perfil/CambiarContraseñaPerfil';


const Stack = createNativeStackNavigator();

const theme={
  fontSizes: [14, 16, 20],
};

export default function App() {
  return (
    <DripsyProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />

          <Stack.Screen name="MostrarSensores" component={MostrarSensores} />
          <Stack.Screen name="MostrarSensoresInvitado" component={MostrarSensoresInvitado} />
          <Stack.Screen name="AgregarDispositivo" component={AgregarDispositivo} />

          <Stack.Screen name="Perfil" component={Perfil} />
          <Stack.Screen name="ModificarPerfil" component={ModificarPerfil} />
          <Stack.Screen name="EliminarPerfil" component={EliminarPerfil} />
          <Stack.Screen name="CambiarTema" component={CambiarTema} />
          <Stack.Screen name="CambiarContraseñaPerfil" component={CambiarContraseñaPerfil} />

          <Stack.Screen name="InfoDispositivo" component={InfoDispositivo} />
          <Stack.Screen name="CambiarContraseña" component={CambiarContraseña} />
          <Stack.Screen name="CambiarRedWifi" component={CambiarRedWifi} />
          <Stack.Screen name="VerInvitados" component={VerInvitados} />
          <Stack.Screen name="AgregarInvitado" component={AgregarInvitado} />
          <Stack.Screen name="VerHistorial" component={VerHistorial} />
          <Stack.Screen name="EliminarDispositivo" component={EliminarDispositivo} />
        </Stack.Navigator>
      </NavigationContainer>
    </DripsyProvider>
  );
}


