import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";

import SettingItem from "@/components/SettingItem";

import packageJson from "../../../package.json";

type Order = "recent" | "update" | "status";

const Settings: React.FC = () => {
  const [order, setOrder] = useState<Order>("recent");
  const [simplify, setSimplify] = useState<boolean>(false);
  const [restrict, setRestrict] = useState<boolean>(false);
  const [timeAndPage, setTimeAndPage] = useState<boolean>(false);
  const [chapterTitle, setChapterTitle] = useState<boolean>(false);

  const selectOrderAlert = () =>
    Alert.alert("請選擇排序規則", undefined, [
      { text: "最近閱讀", onPress: () => setOrder("recent") },
      { text: "更新時間", onPress: () => setOrder("update") },
      { text: "閱讀狀態", onPress: () => setOrder("status") },
      { text: "取消", style: "cancel" },
    ]);

  const clearCacheAlert = () => {
    Alert.alert("清理小說緩存", "", [
      { text: "確認" },
      { text: "取消", style: "cancel" },
    ]);
  };

  const orderLabel = () => {
    if (order == "recent") {
      return "最近閱讀";
    }
    if (order == "update") {
      return "更新時間";
    }
    if (order == "status") {
      return "閱讀狀態";
    }
  };

  return (
    <View style={styles.settings}>
      <View style={styles.section}>
        <Text style={styles.title}>介面設置</Text>
        <SettingItem
          title="閱讀排序"
          controlType="button"
          label={orderLabel()}
          onPress={selectOrderAlert}
        />
        <SettingItem
          title="簡體閱讀"
          controlType="switch"
          value={simplify}
          onPress={() => setSimplify((prev) => !prev)}
        />
        <SettingItem
          title="省流量"
          controlType="switch"
          value={restrict}
          onPress={() => setRestrict((prev) => !prev)}
        />
        <SettingItem
          title="時間與頁碼"
          controlType="switch"
          value={timeAndPage}
          onPress={() => setTimeAndPage((prev) => !prev)}
        />
        <SettingItem
          title="章節名稱"
          controlType="switch"
          value={chapterTitle}
          onPress={() => setChapterTitle((prev) => !prev)}
        />
      </View>
      <View style={styles.section}>
        <Text style={styles.title}>更多</Text>
        <SettingItem
          title="清理緩存"
          controlType="button"
          label="548.7 MB"
          onPress={clearCacheAlert}
        />
        <SettingItem title="使用說明" controlType="button" />
        <SettingItem title="建議與評價" controlType="button" />
      </View>
      <Text style={styles.version}>{`版本 v${packageJson.version}`}</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  settings: {
    flex: 1,
    paddingHorizontal: 10,
  },
  section: {
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
  },
  version: {
    textAlign: "center",
    padding: 4,
  },
});
