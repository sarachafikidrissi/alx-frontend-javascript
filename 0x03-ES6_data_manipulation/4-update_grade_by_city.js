export default function updateStudentGradeByCity(list, city, array) {
  const newList = list.filter((obj) => obj.location === city).map((obj) => {
    const grade = array.find((g) => g.studentId === obj.id);
    return { ...obj, grade: (grade && grade.grade) || 'N/A' };
  });
  return newList;
}
