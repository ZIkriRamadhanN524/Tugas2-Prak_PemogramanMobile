import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { Course } from "../data/courses";

interface Props {
  course: Course;
  onPress: () => void;
}

export default function CourseCard({ course, onPress }: Props) {
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && { opacity: 0.8 }]}
      onPress={onPress}
    >
      <View style={styles.header}>
        <Ionicons name="book" size={28} color="#2563EB" />

        <View style={styles.info}>
          <Text style={styles.title}>{course.courseName}</Text>

          <Text style={styles.code}>{course.courseCode}</Text>
        </View>

        <View style={styles.badge}>
          <Text style={styles.badgeText}>{course.credits} SKS</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.row}>
          <Ionicons name="person" size={16} color="#777" />

          <Text style={styles.lecturer}>{course.lecturer}</Text>
        </View>

        <View style={styles.button}>
          <Ionicons name="eye-outline" color="#FFF" size={18} />

          <Text style={styles.buttonText}>Detail</Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFF",
    borderRadius: 15,
    padding: 18,
    marginBottom: 18,
    elevation: 5,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1F2937",
  },

  code: {
    color: "#6B7280",
    marginTop: 3,
  },

  badge: {
    backgroundColor: "#2563EB",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  badgeText: {
    color: "#FFF",
    fontWeight: "bold",
  },

  footer: {
    marginTop: 18,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  },

  lecturer: {
    marginLeft: 8,
    color: "#555",
  },

  button: {
    marginTop: 15,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  buttonText: {
    color: "#FFF",
    marginLeft: 8,
    fontWeight: "bold",
  },
});
