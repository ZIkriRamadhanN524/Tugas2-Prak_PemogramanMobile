export interface ScheduleItem {
  id: string;
  courseName: string;
  room: string;
  time: string;
}

export interface ScheduleSection {
  title: string;
  data: ScheduleItem[];
}

export const schedules: ScheduleSection[] = [
  {
    title: "Senin",
    data: [
      {
        id: "1",
        courseName: "Pemrograman Mobile",
        room: "Lab Mobile",
        time: "08.45 - 10.25",
      },
    ],
  },

  {
    title: "Selasa",
    data: [
      {
        id: "2",
        courseName: "Routing & Switching",
        room: "Lab Web",
        time: "08.00 - 10.30",
      },
    ],
  },

  {
    title: "Rabu",
    data: [
      {
        id: "3",
        courseName: "Interaksi Manusia dan Komputer",
        room: "Ruang Multimedia",
        time: "08.00 - 10.00",
      },
    ],
  },

  {
    title: "Kamis",
    data: [
      {
        id: "4",
        courseName: "Machine Learning",
        room: "Lab AI",
        time: "10.00 - 12.30",
      },
      {
        id: "5",
        courseName: "Big Data",
        room: "Lab Database",
        time: "13.00 - 15.30",
      },
    ],
  },

  {
    title: "Jumat",
    data: [
      {
        id: "6",
        courseName: "Natural Language Processing",
        room: "Lab AI",
        time: "10.00 - 12.30",
      },
    ],
  },
];
