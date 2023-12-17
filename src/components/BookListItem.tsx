import { shadow } from "@/styles";
import React from "react";
import {
  GestureResponderEvent,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type BookListItemProps = {
  read?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
};

const BookListItem: React.FC<BookListItemProps> = ({
  read = false,
  onPress,
}) => {
  return (
    <Pressable
      style={[
        styles.bookListItem,
        read && shadow,
        read && { backgroundColor: "#fff" },
      ]}
      onPress={onPress}
    >
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>執法者手冊</Text>
        <Text style={styles.latest}>最新: 番外: 農場主二三事 (其一)</Text>
      </View>
      <View>
        <Text style={styles.update}>11 小時前</Text>
        <Text style={styles.source}>天天看小說</Text>
      </View>
    </Pressable>
  );
};

export default BookListItem;
const styles = StyleSheet.create({
  bookListItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  title: {
    fontSize: 20,
  },
  latest: {
    color: "gray",
  },
  update: {
    fontSize: 12,
  },
  source: {
    fontSize: 12,
  },
});
