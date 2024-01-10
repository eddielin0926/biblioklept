import React from "react";
import { Tabs } from "expo-router/tabs";
import { MaterialIcons } from "@expo/vector-icons";

type IconType = (props: {
  focused: boolean;
  color: string;
  size: number;
}) => React.ReactNode;

export default () => {
  const HomeIcon: IconType = ({ color, size }) => {
    return <MaterialIcons name="home" size={size} color={color} />;
  };
  const CollectIcon: IconType = ({ color, size }) => {
    return <MaterialIcons name="bookmark" size={size} color={color} />;
  };
  const SearchIcon: IconType = ({ color, size }) => {
    return <MaterialIcons name="search" size={size} color={color} />;
  };
  const SettingsIcon: IconType = ({ color, size }) => {
    return <MaterialIcons name="settings" size={size} color={color} />;
  };

  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{ title: "首頁", tabBarLabel: "首頁", tabBarIcon: HomeIcon }}
      />
      <Tabs.Screen
        name="collect"
        options={{
          title: "收藏",
          tabBarLabel: "收藏",
          tabBarIcon: CollectIcon,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{ title: "搜尋", tabBarLabel: "搜尋", tabBarIcon: SearchIcon }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "設定",
          tabBarLabel: "設定",
          tabBarIcon: SettingsIcon,
        }}
      />
    </Tabs>
  );
};
