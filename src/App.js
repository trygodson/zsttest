import {SafeAreaProvider} from "react-native-safe-area-context";
import MainStack from "./navigations/mainStack";
import {NavigationContainer} from "@react-navigation/native";

const MainApp = () => {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <MainStack />
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default MainApp;
