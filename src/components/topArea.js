import {useEffect} from "react";
import {ScrollView, TouchableOpacity, View} from "react-native";
import {IconButton, MD3Colors, Text, useTheme} from "react-native-paper";
import Animated from "react-native-reanimated";
import {useDispatch, useSelector} from "react-redux";
import {selectTaskAction} from "../store/slices/myMainTask/mainTaskSlice";
import {getTaskAction} from "../store/slices/task/taskSlice";

const TopArea = () => {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const {mainList, selectedTask} = useSelector((state) => state.getMainTask);
  useEffect(() => {
    dispatch(getTaskAction(selectedTask));
  }, [selectedTask]);
  return (
    <View style={{flexDirection: "row", borderBottomColor: "gray", borderBottomWidth: 1, marginBottom: 10}}>
      <IconButton
        icon="star"
        iconColor={colors.secondary}
        size={20}
        style={{marginHorizontal: 20}}
        onPress={() => console.log("Pressed")}
      />

      <Animated.ScrollView horizontal>
        {mainList &&
          selectedTask &&
          mainList.length > 0 &&
          mainList.map((item, i) => (
            <Animated.View style={{flexDirection: "row", justifyContent: "space-between", width: 80}} key={i}>
              <TouchableOpacity
                style={{
                  borderBottomColor: selectedTask === item ? "skyblue" : "transparent",
                  borderBottomWidth: selectedTask === item ? 3 : 0,
                  paddingVertical: 4,
                  justifyContent: "center",
                  paddingHorizontal: 6,
                }}
                onPress={() => dispatch(selectTaskAction(item))}
              >
                <Text variant="labelMedium" style={{color: "skyblue", fontSize: 13}}>
                  {item ?? ""}
                </Text>
              </TouchableOpacity>
            </Animated.View>
          ))}
      </Animated.ScrollView>
      <View
        style={{
          paddingVertical: 4,
          justifyContent: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text variant="labelMedium" style={{color: "skyblue", fontSize: 13}}>
          + New Task
        </Text>
      </View>
    </View>
  );
};

export default TopArea;
