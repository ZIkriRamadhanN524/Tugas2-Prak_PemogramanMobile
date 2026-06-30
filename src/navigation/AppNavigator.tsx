import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Ionicons } from "@expo/vector-icons";

import CourseSummaryScreen from "../screens/CourseSummaryScreen";
import MeetingListScreen from "../screens/MeetingListScreen";
import WeeklyScheduleScreen from "../screens/WeeklyScheduleScreen";
import CourseDetailScreen from "../screens/CourseDetailScreen";

export type RootStackParamList = {
  HomeTabs: undefined;

  CourseDetail: {
    courseId: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: "#2563EB",

        tabBarInactiveTintColor: "#888",

        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,
        },

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap = "home";

          if (route.name === "Ringkasan") {
            iconName = "book";
          }

          if (route.name === "Pertemuan") {
            iconName = "list";
          }

          if (route.name === "Jadwal") {
            iconName = "calendar";
          }

          return <Ionicons name={iconName} color={color} size={size} />;
        },
      })}
    >
      <Tab.Screen name="Ringkasan" component={CourseSummaryScreen} />

      <Tab.Screen name="Pertemuan" component={MeetingListScreen} />

      <Tab.Screen name="Jadwal" component={WeeklyScheduleScreen} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTabs"
        component={HomeTabs}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="CourseDetail"
        component={CourseDetailScreen}
        options={{
          title: "Detail Mata Kuliah",
          headerBackTitleVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}
