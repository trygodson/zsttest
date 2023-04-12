import {ScrollView, View} from "react-native";
import {IconButton, MD3Colors, Text, useTheme} from "react-native-paper";
import Animated from "react-native-reanimated";
const TopArea = () => {
  const {colors} = useTheme();
  return (
    <View style={{flexDirection: "row", borderBottomColor: "gray", borderBottomWidth: 1, marginBottom: 10}}>
      <IconButton
        icon="star"
        iconColor={colors.secondary}
        size={20}
        style={{marginHorizontal: 20}}
        onPress={() => console.log("Pressed")}
      />

      <ScrollView horizontal>
        <Animated.View style={{flexDirection: "row", justifyContent: "space-between", width: 80}}>
          <View
            style={{
              borderBottomColor: "skyblue",
              borderBottomWidth: 3,
              paddingVertical: 4,
              justifyContent: "center",
              paddingHorizontal: 6,
            }}
          >
            <Text variant="labelMedium" style={{color: "skyblue", fontSize: 13}}>
              My Task
            </Text>
          </View>
        </Animated.View>
        <Animated.View style={{flexDirection: "row", justifyContent: "space-between", width: 80}}>
          <View
            style={{
              // borderBottomColor: "skyblue",
              // borderBottomWidth: 3,
              paddingVertical: 4,
              justifyContent: "center",
              paddingHorizontal: 6,
            }}
          >
            <Text variant="labelMedium" style={{color: "skyblue", fontSize: 13}}>
              Blue Task
            </Text>
          </View>
        </Animated.View>
      </ScrollView>
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
