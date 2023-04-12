import moment from "moment";
import {useState} from "react";
import {View} from "react-native";
import {PanGestureHandler} from "react-native-gesture-handler";
import {RadioButton, Text, useTheme} from "react-native-paper";
import {useAnimatedGestureHandler} from "react-native-reanimated";

const TaskItems = ({item}) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  const gestureHandler = useAnimatedGestureHandler({
    onStart() {
      console.log("just started");
    },

    onActive(event) {
      console.log(event.absoluteX);
    },
    onFinish() {},
  });

  return (
    <PanGestureHandler onGestureEvent={gestureHandler}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 6,
          paddingHorizontal: 5,
        }}
      >
        <RadioButton.Android
          style={{width: "17%"}}
          uncheckedColor="#f1f1f1"
          value="checked"
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked((p) => !p)}
        />
        <View style={{width: "65%"}}>
          <Text variant="titleMedium" style={{color: "white"}}>
            {item?.title}
          </Text>
          <Text variant="bodyMedium" style={{color: "gray", marginVertical: 5}}>
            {item?.description}
          </Text>
          <View style={{width: "50%"}}>
            <View
              style={{
                borderRadius: 20,
                padding: 5,
                borderWidth: 1,
                borderColor: theme.colors.outline,
                alignItems: "center",
              }}
            >
              <Text variant="bodyMedium" style={{color: "skyblue"}}>
                {moment(item?.date).format("ll")}
              </Text>
            </View>
          </View>
        </View>
        <View style={{width: "15%"}}></View>
      </View>
    </PanGestureHandler>
  );
};

export default TaskItems;
