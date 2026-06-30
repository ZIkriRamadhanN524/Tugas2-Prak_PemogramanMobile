import React, { useMemo, useState } from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

import CourseCard from "../components/CourseCard";
import SearchBar from "../components/SearchBar";

import { courses } from "../data/courses";

export type RootStackParamList = {
  HomeTabs: undefined;
  CourseDetail: {
    courseId: string;
  };
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "HomeTabs">;

export default function CourseSummaryScreen() {
  const navigation = useNavigation<NavigationProp>();

  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const keyword = search.toLowerCase();

      return (
        course.courseName.toLowerCase().includes(keyword) ||
        course.courseCode.toLowerCase().includes(keyword)
      );
    });
  }, [search]);

  const totalCredits = courses.reduce((sum, item) => sum + item.credits, 0);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.title}>Sistem Jadwal Kuliah</Text>

      <Text style={styles.subtitle}>Ringkasan Mata Kuliah Semester Ini</Text>

      <SearchBar
        value={search}
        onChangeText={setSearch}
        placeholder="Cari Mata Kuliah atau Kode..."
      />

      <View style={styles.summaryContainer}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>{courses.length}</Text>

          <Text style={styles.summaryText}>Mata Kuliah</Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryNumber}>{totalCredits}</Text>

          <Text style={styles.summaryText}>Total SKS</Text>
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              onPress={() =>
                navigation.navigate("CourseDetail", {
                  courseId: course.id,
                })
              }
            />
          ))
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>Mata kuliah tidak ditemukan.</Text>
          </View>
        )}
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

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2563EB",
    marginTop: 15,
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
    marginTop: 6,
    marginBottom: 5,
  },

  summaryContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
  },

  summaryCard: {
    width: "48%",
    backgroundColor: "#2563EB",
    borderRadius: 15,
    paddingVertical: 22,
    alignItems: "center",
    elevation: 4,
  },

  summaryNumber: {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",
  },

  summaryText: {
    color: "#FFF",
    marginTop: 6,
    fontSize: 15,
  },

  empty: {
    marginTop: 40,
    alignItems: "center",
  },

  emptyText: {
    color: "#888",
    fontSize: 16,
  },
});
