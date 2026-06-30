export interface Course {
  id: string;
  courseCode: string;
  courseName: string;
  credits: number;
  lecturer: string;
}

export const courses: Course[] = [
  {
    id: "1",
    courseCode: "IF401",
    courseName: "Pemrograman Mobile",
    credits: 3,
    lecturer: "Dr. Ahmad Fauzi",
  },
  {
    id: "2",
    courseCode: "IF402",
    courseName: "Pemrograman Web Lanjut",
    credits: 3,
    lecturer: "Dr. Budi Santoso",
  },
  {
    id: "3",
    courseCode: "IF403",
    courseName: "Basis Data",
    credits: 3,
    lecturer: "Dr. Siti Nurhaliza",
  },
  {
    id: "4",
    courseCode: "IF404",
    courseName: "Kecerdasan Buatan",
    credits: 3,
    lecturer: "Dr. Rudi Hartono",
  },
  {
    id: "5",
    courseCode: "IF405",
    courseName: "Cloud Computing",
    credits: 2,
    lecturer: "Dr. Andi Wijaya",
  },
  {
    id: "6",
    courseCode: "IF406",
    courseName: "Interaksi Manusia dan Komputer",
    credits: 2,
    lecturer: "Dr. Dewi Lestari",
  },
];
