import {View, useWindowDimensions} from "react-native";
import {Text, useTheme} from "react-native-paper";

const ListEmptyComponent = () => {
  const {colors} = useTheme();
  const {height} = useWindowDimensions();
  return (
    <View style={{justifyContent: "center", width: "100%", height: height * 0.5, alignItems: "center"}}>
      <Text variant="labelMedium" style={{color: "white"}}>
        No Task Yet
      </Text>
      <Text variant="bodySmall" style={{color: colors.outline}}>
        Add Your Todos and Keep Track Of Them
      </Text>
    </View>
  );
};

export default ListEmptyComponent;
