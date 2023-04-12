import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";
import TaskScreen from "../screens/taskScreen";
import {SplashScreen} from "../screens/splashScreen";

export const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen component={SplashScreen} name="SplashScreen" options={{headerShown: false}} />
      <Stack.Screen component={TaskScreen} name="TaskScreen" options={{headerShown: false, gestureEnabled: false}} />
    </Stack.Navigator>
  );
};

export default MainStack;
