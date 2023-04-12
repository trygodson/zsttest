import {StackActions, useNavigation} from "@react-navigation/native";
import {useEffect} from "react";
import {Image, SafeAreaView, Text, View} from "react-native";
import {FocusAwareStatusBar} from "../components/common/FocusAwareStatusbar";
import {useTheme} from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {getTaskAction} from "../store/slices/task/taskSlice";
import {selectTaskAction} from "../store/slices/myMainTask/mainTaskSlice";

const SplashScreen = () => {
  const {dispatch} = useNavigation();
  const storeDispatch = useDispatch();
  const {mainList, selectedTask} = useSelector((state) => state.getMainTask);

  const {colors} = useTheme();
  const performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(async () => {
        storeDispatch(selectTaskAction(mainList[0]));
        dispatch(StackActions.replace("TaskScreen", {}));
        // const token = await GET_STORAGE_ITEM('token');
        // if (token === null) {
        // } else {
        //   dispatch(StackActions.replace('AppStack', {}));
        //   // navigation.dispatch(StackActions.replace("AppStack", {}));
        // }
      }, 2500)
    );
  };
  useEffect(() => {
    performTimeConsumingTask();
  }, []);

  return (
    <View style={{height: "100%", width: "100%", backgroundColor: colors.onPrimaryContainer}}>
      <SafeAreaView>
        <FocusAwareStatusBar barStyle={"light-content"} translucent backgroundColor={"transparent"} />
        <View style={{justifyContent: "center", alignItems: "center", width: "100%", height: "100%"}}>
          <View
            style={{
              width: 200,
              height: 200,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{fontSize: 30, fontWeight: "700", textAlign: "center", color: "white"}}>ZST TEST</Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export {SplashScreen};
