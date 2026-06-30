import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Meeting } from "../data/meetings";

interface Props {
  meeting: Meeting;
}

export default function MeetingCard({ meeting }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.course}>{meeting.courseName}</Text>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>#{meeting.meeting}</Text>
        </View>
      </View>

      <Text style={styles.topic}>{meeting.topic}</Text>

      <View style={styles.dateRow}>
        <Ionicons name="calendar" size={16} color="#666" />

        <Text style={styles.date}>{meeting.date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    padding: 16,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  course: {
    fontSize: 16,
    fontWeight: "bold",
  },

  badge: {
    backgroundColor: "#2563EB",
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },

  badgeText: {
    color: "#FFF",
  },

  topic: {
    marginTop: 10,
    fontSize: 15,
    color: "#444",
  },

  dateRow: {
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
  },

  date: {
    marginLeft: 6,
    color: "#666",
  },
});
