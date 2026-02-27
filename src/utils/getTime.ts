// 获取当前时间判断是否是上午下午还是晚上
export const getTime = () => {
  let date = new Date()
  let hour = date.getHours()
  if (hour >= 6 && hour < 12) {
    return '上午好'
  } else if (hour >= 12 && hour < 18) {
    return '下午好'
  } else {
    return '晚上好'
  }
}
