import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

const TabStack = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen options={{headerShown: false}} name="Home" component={HomeStack} />
            <Tab.Screen options={{headerShown: false}} name="Auth" component={AuthStack} />
        </Tab.Navigator>
    )
}

export default TabStack;