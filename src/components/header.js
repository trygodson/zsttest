import {View} from "react-native";
import React from "react";
import {Avatar, Text} from "react-native-paper";

const Header = () => {
  return (
    <View
      style={{
        width: "100%",
        paddingRight: 12,
        alignItems: "center",
        flexDirection: "row",
        marginTop: 35,
        justifyContent: "space-between",
      }}
    >
      <View></View>
      <Text variant="headlineSmall" style={{color: "white"}}>
        Tasks
      </Text>

      <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
        <Avatar.Text
          label="O"
          size={30}
          color="purple"
          labelStyle={{fontSize: 20, fontWeight: "700", color: "white"}}
        />
      </View>
    </View>
  );
};

export default Header;
