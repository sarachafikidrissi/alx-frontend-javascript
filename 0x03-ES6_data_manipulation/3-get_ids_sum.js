export default function getStudentIdsSum(list) {
  const sum = list.reduce((accum, obj) => accum + obj.id, 0);
  return sum;
}
