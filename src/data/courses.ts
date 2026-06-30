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
    lecturer: "RIZKI FADHILAH, S.T., M.Eng",
  },
  {
    id: "2",
    courseCode: "IF402",
    courseName: "Routing & Switching",
    credits: 3,
    lecturer: "APRI SISWANTO, S.Kom., M.Kom",
  },
  {
    id: "3",
    courseCode: "IF403",
    courseName: "Big Data",
    credits: 3,
    lecturer: "MULYANTO S.T., M.Cs., Ph.D",
  },
  {
    id: "4",
    courseCode: "IF404",
    courseName: "Natural Language Processing",
    credits: 3,
    lecturer: "Dr. ARBI HAZA NASUTION, B.IT.(Hons), M.IT",
  },
  {
    id: "5",
    courseCode: "IF405",
    courseName: "Machine Learning",
    credits: 2,
    lecturer: "MUTIA FADHILLA, S.ST., M.Sc",
  },
  {
    id: "6",
    courseCode: "IF406",
    courseName: "Interaksi Manusia dan Komputer",
    credits: 2,
    lecturer: "Dr. Dewi Lestari",
  },
];
