import { NavigationContainer } from '@react-navigation/native';
import TabStack from './TabStack';
import AuthStack from './AuthStack';
import { useMMKVString } from 'react-native-mmkv';

const Navigation = () => {
  //const [accessToken, setAccessToken] = useMMKVString('accessToken');
  const isAuthenticated = true;

  const linking = {
    prefixes: ['awesomeproject://'],
    config: {
      screens: {
        Home: {
          path: 'home/',
          screens: {
            Homepage: {
              path: 'homepage/',
            },
            DetailsPage: {
              path: 'details/:id',
            },
          },
        },

        Profile: {
          path: 'profile/',
          screens: {
            Profile: {
              path: 'index/',
            },
          },
        },
      },
    },
  };

  return (
    <NavigationContainer linking={linking}>
      {/* {accessToken ? <TabStack /> : <AuthStack />} */}
      {isAuthenticated ? <TabStack /> : <AuthStack />}
    </NavigationContainer>
  )
}

export default Navigation

