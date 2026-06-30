export interface Meeting {
  id: string;
  courseName: string;
  meeting: number;
  topic: string;
  date: string;
}

export const meetings: Meeting[] = [
  // Pemrograman Mobile
  {
    id: "1",
    courseName: "Pemrograman Mobile",
    meeting: 1,
    topic: "Pengenalan React Native",
    date: "02 September 2025",
  },
  {
    id: "2",
    courseName: "Pemrograman Mobile",
    meeting: 2,
    topic: "Komponen Dasar",
    date: "09 September 2025",
  },
  {
    id: "3",
    courseName: "Pemrograman Mobile",
    meeting: 3,
    topic: "Navigation",
    date: "16 September 2025",
  },
  {
    id: "4",
    courseName: "Pemrograman Mobile",
    meeting: 4,
    topic: "FlatList",
    date: "23 September 2025",
  },
  {
    id: "5",
    courseName: "Pemrograman Mobile",
    meeting: 5,
    topic: "SectionList",
    date: "30 September 2025",
  },

  // Pemrograman Web Lanjut
  {
    id: "6",
    courseName: "Pemrograman Web Lanjut",
    meeting: 1,
    topic: "Vue Router",
    date: "03 September 2025",
  },
  {
    id: "7",
    courseName: "Pemrograman Web Lanjut",
    meeting: 2,
    topic: "Pinia",
    date: "10 September 2025",
  },
  {
    id: "8",
    courseName: "Pemrograman Web Lanjut",
    meeting: 3,
    topic: "REST API",
    date: "17 September 2025",
  },

  // Basis Data
  {
    id: "9",
    courseName: "Basis Data",
    meeting: 1,
    topic: "Entity Relationship Diagram",
    date: "04 September 2025",
  },
  {
    id: "10",
    courseName: "Basis Data",
    meeting: 2,
    topic: "Normalisasi",
    date: "11 September 2025",
  },

  // Kecerdasan Buatan
  {
    id: "11",
    courseName: "Kecerdasan Buatan",
    meeting: 1,
    topic: "Pengenalan AI",
    date: "05 September 2025",
  },
  {
    id: "12",
    courseName: "Kecerdasan Buatan",
    meeting: 2,
    topic: "Heuristic Search",
    date: "12 September 2025",
  },

  // Cloud Computing
  {
    id: "13",
    courseName: "Cloud Computing",
    meeting: 1,
    topic: "Konsep Cloud",
    date: "06 September 2025",
  },
  {
    id: "14",
    courseName: "Cloud Computing",
    meeting: 2,
    topic: "Cloud Service Model",
    date: "13 September 2025",
  },

  // IMK
  {
    id: "15",
    courseName: "Interaksi Manusia dan Komputer",
    meeting: 1,
    topic: "Konsep UI/UX",
    date: "07 September 2025",
  },
];
