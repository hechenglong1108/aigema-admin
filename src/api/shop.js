import fetch from '@/utils/fetch'


/**
 * 登录
 */
export function login(data) {
  return fetch({
    url: '/aip/admin/login',
    method: 'POST',
    data
  })
}

/**
 * 退出
 */
export function userLogout() {
  return fetch({
    url: '/aip/admin/logout',
    method: 'POST'
  })
}

