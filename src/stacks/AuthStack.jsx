import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from '@screens/auth/register/Register';
import Login from '@screens/auth/login/Login';


const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name='Login' component={Login}/>
        <Stack.Screen options={{headerShown: false}} name='Register' component={Register}/>
    </Stack.Navigator>
  )
}

export default AuthStack

