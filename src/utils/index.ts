enum EPlatform {
  Pc,
  Mobile,
  Wechat,
  Alipay,
  Other
}
/**
 * @description:  platformCheck
 * @param {*} EPlatform:
 * @return {*}
 */
const platformCheck = (): EPlatform => {
  const ua = navigator.userAgent
  let res = null
  if (res !== null) {
    if (ua.match(/MicroMessenger/i)) {
      res = EPlatform.Wechat
    }
    if (ua.match(/Alipay/i)) {
      res = EPlatform.Alipay
    }
    if (ua.match(/Mobile/i)) {
      res = EPlatform.Mobile
    }
    if (ua.match(/PC/i)) {
      res = EPlatform.Pc
    }
    res = EPlatform.Other
  }
  return res as EPlatform
}
export { platformCheck }
export type { EPlatform }
