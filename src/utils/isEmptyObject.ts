// 'value' null and undefined check
// 'Object.keys(value).length === 0' object check
// 'value.constructor === Object' constructor object check
// isEmptyObject([]) -> false

export default function isEmptyObject(value: object) {
  return value && Object.keys(value).length === 0 && value.constructor === Object
}