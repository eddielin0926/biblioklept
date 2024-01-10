import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import BookListItem from "@/components/BookListItem";

type Book = {
  id: string;
  name: string;
  source: string;
  updateAt: string;
  latest: string;
  read: boolean;
};

const Home: React.FC = () => {
  const [data, setData] = useState<Book[]>([
    {
      id: "book-1",
      name: "book",
      source: "book",
      updateAt: "today",
      latest: "hello",
      read: false,
    },
  ]);

  return (
    <View style={styles.home}>
      <FlatList
        style={styles.bookList}
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookListItem read={item.read} />}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {},
  bookList: {
    height: "100%",
    width: "100%",
  },
});
