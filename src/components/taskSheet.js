import Modal from "react-native-modal";
import {StyleSheet, View, Keyboard, TextInput} from "react-native";
import {useState} from "react";
import {useTheme, Text, IconButton, Button, Chip} from "react-native-paper";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import firestore from "@react-native-firebase/firestore";
import {useDispatch} from "react-redux";
import {getTaskAction} from "../store/slices/task/taskSlice";

const AddTaskBottomSheet = ({modalVisible, setModalVisible}) => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState();
  const [data, setData] = useState({
    title: null,
    description: null,
    date: null,
  });
  const [theDate, setTheDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const {colors} = useTheme();
  const onDismiss = () => {
    Keyboard.dismiss;
  };

  const addTask = async () => {
    if (data.title === null || data.description === null) {
    } else {
      firestore()
        .collection("tasks")
        .add(data)
        .then(() => {
          dispatch(getTaskAction());
          setModalVisible(false);
          console.log("Tasks added!");
        });
    }
  };

  return (
    <>
      <Modal
        onBackdropPress={() => setModalVisible(false)}
        onBackButtonPress={() => setModalVisible(false)}
        isVisible={modalVisible}
        swipeDirection="down"
        onSwipeComplete={() => setModalVisible((p) => !p)}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={1500}
        animationOutTiming={2000}
        backdropTransitionInTiming={1000}
        backdropTransitionOutTiming={1000}
        style={styles.modal}
      >
        <View style={{...styles.modalContent, backgroundColor: colors.onSurfaceVariant}}>
          <View>
            <TextInput
              placeholder="Title"
              placeholderTextColor={"gray"}
              onChangeText={(v) => setData((p) => ({...p, title: v}))}
              onSubmitEditing={onDismiss}
              style={{color: "white"}}
            />
            <TextInput
              placeholder="Description"
              placeholderTextColor={"gray"}
              onChangeText={(v) => setData((p) => ({...p, description: v}))}
              onSubmitEditing={onDismiss}
              style={{color: "white"}}
            />
          </View>
          {data.date && (
            <View style={{width: 100}}>
              {/* <Button
                icon={"close"}
                mode="outlined"
                textColor="skyblue"
                onPress={() => setTheDate(null)}
                style={{width: "30%"}}
                labelStyle={{fontSize: 13}}
                contentStyle={{flexDirection: "row-reverse"}}
              >
                {moment(theDate).format("YY-MM-DD")}
              </Button> */}

              <View
                style={{
                  borderRadius: 20,
                  padding: 5,
                  borderWidth: 1,
                  borderColor: colors.outline,
                  alignItems: "center",
                }}
              >
                <Text variant="bodyMedium" style={{color: "skyblue"}}>
                  {moment(data.date).format("YY-MM-DD")}
                </Text>
              </View>
            </View>
          )}

          <View style={{justifyContent: "space-between", flexDirection: "row", alignItems: "center"}}>
            <IconButton
              icon="calendar"
              iconColor={"skyblue"}
              size={20}
              style={{marginHorizontal: 20}}
              onPress={() => setOpenDate(true)}
            />

            <Text variant="bodySmall" style={{color: "skyblue", marginRight: 8}} onPress={() => addTask()}>
              Save
            </Text>
          </View>
        </View>
      </Modal>
      <DatePicker
        modal
        open={openDate}
        date={theDate}
        onConfirm={(ddate) => {
          setData((p) => ({...p, date: moment(ddate).toISOString()}));
          setOpenDate(false);
          setTheDate(ddate);
        }}
        mode="date"
        onCancel={() => {
          setOpenDate(false);
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  flexView: {
    flex: 1,
    backgroundColor: "white",
  },
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    // backgroundColor: "#161616",
    paddingTop: 12,
    paddingHorizontal: 16,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    minHeight: 155,
    paddingBottom: 20,
  },
  center: {},
  barIcon: {
    width: 60,
    height: 5,
    backgroundColor: "#bbb",
    borderRadius: 3,
    alignSelf: "center",
  },
  text: {
    color: "#bbb",
    fontSize: 24,
  },
  btnContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 500,
  },
});

export default AddTaskBottomSheet;
