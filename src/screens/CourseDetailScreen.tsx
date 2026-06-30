import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { RouteProp, useRoute } from "@react-navigation/native";

import { courses } from "../data/courses";
import { schedules } from "../data/schedules";
import { meetings } from "../data/meetings";

type RootStackParamList = {
  CourseDetail: {
    courseId: string;
  };
};

type DetailRouteProp = RouteProp<RootStackParamList, "CourseDetail">;

export default function CourseDetailScreen() {
  const route = useRoute<DetailRouteProp>();

  const { courseId } = route.params;

  const course = courses.find((item) => item.id === courseId);

  if (!course) {
    return (
      <View style={styles.center}>
        <Text>Data mata kuliah tidak ditemukan.</Text>
      </View>
    );
  }

  const schedule = schedules
    .flatMap((section) =>
      section.data.map((item) => ({
        day: section.title,
        ...item,
      })),
    )
    .find((item) => item.courseName === course.courseName);

  const meetingList = meetings.filter(
    (item) => item.courseName === course.courseName,
  );

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.headerCard}>
        <Text style={styles.courseName}>{course.courseName}</Text>

        <Text style={styles.courseCode}>{course.courseCode}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Informasi Mata Kuliah</Text>

        <Text style={styles.item}>👨‍🏫 Dosen :</Text>

        <Text style={styles.value}>{course.lecturer}</Text>

        <Text style={styles.item}>🎓 Jumlah SKS :</Text>

        <Text style={styles.value}>{course.credits} SKS</Text>
      </View>

      {schedule && (
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Jadwal Kuliah</Text>

          <Text style={styles.item}>📅 Hari</Text>

          <Text style={styles.value}>{schedule.day}</Text>

          <Text style={styles.item}>🕒 Jam</Text>

          <Text style={styles.value}>{schedule.time}</Text>

          <Text style={styles.item}>📍 Ruangan</Text>

          <Text style={styles.value}>{schedule.room}</Text>
        </View>
      )}

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Daftar Pertemuan</Text>

        {meetingList.map((item) => (
          <View key={item.id} style={styles.meeting}>
            <Text style={styles.meetingTitle}>Pertemuan {item.meeting}</Text>

            <Text style={styles.meetingTopic}>{item.topic}</Text>

            <Text style={styles.meetingDate}>{item.date}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6",
    padding: 18,
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerCard: {
    backgroundColor: "#2563EB",
    padding: 25,
    borderRadius: 18,
    marginBottom: 18,
  },

  courseName: {
    color: "#FFF",
    fontSize: 23,
    fontWeight: "bold",
  },

  courseCode: {
    color: "#E5E7EB",
    marginTop: 5,
    fontSize: 15,
  },

  card: {
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 15,
    marginBottom: 18,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#2563EB",
  },

  item: {
    marginTop: 8,
    fontWeight: "600",
    color: "#444",
  },

  value: {
    marginTop: 4,
    marginBottom: 8,
    color: "#666",
  },

  meeting: {
    marginBottom: 15,
    padding: 15,
    backgroundColor: "#EFF6FF",
    borderRadius: 10,
  },

  meetingTitle: {
    fontWeight: "bold",
    color: "#2563EB",
    fontSize: 16,
  },

  meetingTopic: {
    marginTop: 5,
    color: "#444",
  },

  meetingDate: {
    marginTop: 5,
    color: "#777",
    fontSize: 13,
  },
});
