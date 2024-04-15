export default function getListStudentIds(arg) {
  if (Array.isArray(arg)) {
    const array = arg.map((obj) => obj.id);
    return array;
  }
  return [];
}
