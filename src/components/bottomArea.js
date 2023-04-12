import {Platform, ScrollView, View} from "react-native";
import {IconButton, MD3Colors, Text, useTheme} from "react-native-paper";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
const BottomArea = ({setModalVisible}) => {
  const shouldBeCutOffHeight = Platform.OS === "android" ? 10 : 0;

  const {colors} = useTheme();

  return (
    <View
      horizontal
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 14,
        paddingBottom: 20 + shouldBeCutOffHeight,
        paddingHorizontal: 10,
        backgroundColor: colors.onSurfaceVariant,
      }}
    >
      <View style={{paddingVertical: 4}}>
        <Ionicons name={"reorder-three-outline"} color={"gray"} size={26} />
      </View>

      <View
        style={{
          position: "absolute",
          top: -20,
          left: "47%",
          width: 46,
          height: 46,
          borderRadius: 23,
          elevation: 4,
          shadowColor: "black",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: colors.onSurfaceVariant,
        }}
      >
        <IconButton
          icon="plus"
          iconColor={MD3Colors.error50}
          size={26}
          onPress={() => {
            setModalVisible((p) => !p);
          }}
        />
      </View>
      <View>
        <Entypo name={"dots-three-horizontal"} color={"gray"} size={22} />
      </View>
    </View>
  );
};

export default BottomArea;
