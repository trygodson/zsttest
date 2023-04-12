import moment from "moment";
import {useState} from "react";
import {View} from "react-native";
import {RadioButton, Text, useTheme} from "react-native-paper";

const TaskItems = ({item}) => {
  const theme = useTheme();
  const [checked, setChecked] = useState(false);
  return (
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
  );
};

export default TaskItems;
