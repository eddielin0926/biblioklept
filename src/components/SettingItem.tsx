import React from "react";
import { Pressable, StyleSheet, Switch, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

type SettingItemProps = {
  title: string;
  label?: string;
  value?: boolean;
  controlType: "button" | "switch";
  onPress?: () => void;
};

const SettingItem: React.FC<SettingItemProps> = ({
  title,
  label,
  value,
  controlType,
  onPress,
}) => {
  const control = () => {
    if (controlType == "button") {
      return (
        <Pressable onPress={onPress}>
          <MaterialIcons name="keyboard-arrow-right" size={30} color="black" />
        </Pressable>
      );
    }
    if (controlType == "switch") {
      return <Switch value={value} onValueChange={onPress} />;
    }
  };
  return (
    <View style={styles.settingItem}>
      <Text style={styles.title}>{title}</Text>
      <Text>{label}</Text>
      {control()}
    </View>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  settingItem: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    borderColor: "#cecece",
  },
  title: {
    flex: 1,
    fontSize: 20,
  },
});
