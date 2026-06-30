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
        time: "08.00 - 10.30",
      },
      {
        id: "2",
        courseName: "Basis Data",
        room: "Lab Database",
        time: "13.00 - 15.30",
      },
    ],
  },

  {
    title: "Selasa",
    data: [
      {
        id: "3",
        courseName: "Pemrograman Web Lanjut",
        room: "Lab Web",
        time: "08.00 - 10.30",
      },
    ],
  },

  {
    title: "Rabu",
    data: [
      {
        id: "4",
        courseName: "Cloud Computing",
        room: "Lab Cloud",
        time: "09.00 - 11.00",
      },
    ],
  },

  {
    title: "Kamis",
    data: [
      {
        id: "5",
        courseName: "Kecerdasan Buatan",
        room: "Lab AI",
        time: "10.00 - 12.30",
      },
    ],
  },

  {
    title: "Jumat",
    data: [
      {
        id: "6",
        courseName: "Interaksi Manusia dan Komputer",
        room: "Ruang Multimedia",
        time: "08.00 - 10.00",
      },
    ],
  },
];
