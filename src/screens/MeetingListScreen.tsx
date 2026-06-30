import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import MeetingCard from "../components/MeetingCard";
import { meetings } from "../data/meetings";

export default function MeetingListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={meetings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MeetingCard meeting={item} />}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <Text style={styles.title}>Daftar Pertemuan Kuliah</Text>

            <Text style={styles.subtitle}>
              Seluruh jadwal pertemuan semester ini
            </Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Data pertemuan belum tersedia.</Text>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    paddingHorizontal: 16,
    paddingTop: 15,
  },

  header: {
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
  },

  subtitle: {
    marginTop: 5,
    color: "#666",
    fontSize: 15,
  },

  separator: {
    height: 14,
  },

  emptyContainer: {
    marginTop: 80,
    alignItems: "center",
  },

  emptyText: {
    color: "#888",
    fontSize: 16,
  },
});
