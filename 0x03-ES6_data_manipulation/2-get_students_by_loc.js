export default function getStudentsByLocation(list, city) {
  const array = list.filter((obj) => obj.location === city);
  return array;
}
