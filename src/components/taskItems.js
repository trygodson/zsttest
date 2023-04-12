import moment from "moment";
import {useState} from "react";
import {View} from "react-native";
import {RadioButton, Text, useTheme} from "react-native-paper";
import AntDesign from "react-native-vector-icons/AntDesign";
import firestore from "@react-native-firebase/firestore";
import {useDispatch, useSelector} from "react-redux";
import {getTaskAction} from "../store/slices/task/taskSlice";

const TaskItems = ({item}) => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const {selectedTask} = useSelector((state) => state.getMainTask);

  const deleteTask = async (id) => {
    firestore()
      .collection("tasks")
      .doc(id)
      .delete()
      .then(() => {
        dispatch(getTaskAction(selectedTask));
      });
  };
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
      <View style={{width: "15%", alignItems: "center"}}>
        {checked && <AntDesign name="delete" size={18} color="red" onPress={() => deleteTask(item?.id)} />}
      </View>
    </View>
  );
};

export default TaskItems;
