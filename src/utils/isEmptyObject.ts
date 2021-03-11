// 'value' null and undefined check
// 'Object.keys(value).length === 0' object check
// 'value.constructor === Object' constructor object check

export default function isEmptyObject(value: any) {
  return value && Object.keys(value).length === 0 && value.constructor === Object
}