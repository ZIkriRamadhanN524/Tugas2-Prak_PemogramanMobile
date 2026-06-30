import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { ScheduleItem } from "../data/schedules";

interface Props {
  item: ScheduleItem;
}

export default function ScheduleCard({ item }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.course}>{item.courseName}</Text>

      <View style={styles.row}>
        <Ionicons name="time" size={17} color="#2563EB" />

        <Text style={styles.text}>{item.time}</Text>
      </View>

      <View style={styles.row}>
        <Ionicons name="location" size={17} color="#2563EB" />

        <Text style={styles.text}>{item.room}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    elevation: 3,
  },

  course: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#2563EB",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },

  text: {
    marginLeft: 8,
    color: "#444",
  },
});
