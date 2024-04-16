export default function cleanSet(set, str) {
  let result = [];
  if (!str || typeof str !== 'string') {
    return '';
  }
  set.forEach((element) => {
    if (typeof element === 'string' && element.startsWith(str)) {
      result += (result.length > 0 ? '-' : '') + element.slice(str.length);
    }
  });
  return result;
}
