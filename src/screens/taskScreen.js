import {SafeAreaView} from "react-native-safe-area-context";
import {FlatList, RefreshControl, StatusBar, View, useWindowDimensions} from "react-native";
import {Button, Chip, RadioButton, Text, useTheme} from "react-native-paper";
import Header from "../components/header";
import TopArea from "../components/topArea";
import BottomArea from "../components/bottomArea";
import AddTaskBottomSheet from "../components/taskSheet";
import {useRef, useState} from "react";
import moment from "moment";
import {useDispatch, useSelector} from "react-redux";
import {getTaskAction} from "../store/slices/task/taskSlice";
import TaskItems from "../components/taskItems";
import Animated, {useAnimatedGestureHandler} from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";
const TaskScreen = () => {
  const theme = useTheme();
  const flatlistRef = useRef();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const {height} = useWindowDimensions();
  const {response, loading} = useSelector((state) => state.getTask);
  const TAB_WIDTH = 80;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{height, backgroundColor: theme.colors.onPrimaryContainer}}>
        <StatusBar animated={true} backgroundColor="#101518" barStyle="white-content" />
        <Header />
        <TopArea />

        <Animated.FlatList
          // ListHeaderComponent={<TopArea />}
          ref={flatlistRef}
          data={response}
          refreshControl={<RefreshControl refreshing={loading} onRefresh={() => dispatch(getTaskAction())} />}
          keyExtractor={(item) => `${item?.id}`}
          renderItem={({index, item}) => {
            return <TaskItems item={item} />;
          }}
          contentContainerStyle={{flexGrow: 1}}
          ListFooterComponentStyle={{flex: 1, justifyContent: "flex-end"}}
          // ListFooterComponent={<BottomArea setModalVisible={setShowModal} />}
        />
        <BottomArea setModalVisible={setShowModal} />
      </View>
      <AddTaskBottomSheet modalVisible={showModal} setModalVisible={setShowModal} />
    </SafeAreaView>
  );
};

export default TaskScreen;
