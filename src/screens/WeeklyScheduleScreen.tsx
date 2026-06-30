import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";

import ScheduleCard from "../components/ScheduleCard";
import { schedules } from "../data/schedules";

export default function WeeklyScheduleScreen() {
  return (
    <View style={styles.container}>
      <SectionList
        sections={schedules}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ScheduleCard item={item} />}
        renderSectionHeader={({ section }) => (
          <View style={styles.header}>
            <Text style={styles.headerText}>{section.title}</Text>
          </View>
        )}
        ListHeaderComponent={() => (
          <View style={styles.top}>
            <Text style={styles.title}>Jadwal Kuliah Mingguan</Text>

            <Text style={styles.subtitle}>Jadwal kuliah berdasarkan hari</Text>
          </View>
        )}
        stickySectionHeadersEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
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

  top: {
    marginBottom: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
  },

  subtitle: {
    color: "#666",
    marginTop: 5,
    marginBottom: 10,
  },

  header: {
    backgroundColor: "#2563EB",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 8,
  },

  headerText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
