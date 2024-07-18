/**
 * 获取 token
 * @returns
 */
export const getToken = () => {
  return localStorage.getItem('token')
}

/**
 * 设置 token
 * @param {*} value
 */
export const setToken = (value) => {
  localStorage.setItem('token', value)
}

/**
 * 清除 token
 */
export const removeToken = () => {
  localStorage.removeItem('token')
}

/**
 * 获取 userInfo
 * @returns
 */
export const getUserInfo = () => {
  return localStorage.getItem('userInfo')
}

/**
 * 设置 userInfo
 * @param {*} value
 */
export const setUserInfo = (value) => {
  localStorage.setItem('userInfo', value)
}

/**
 * 清除 userInfo
 */
export const removeUserInfo = () => {
  localStorage.removeItem('userInfo')
}
