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

/**
 * 发货
 */
export function deliver() {
  return fetch({
    url: '/aip/admin/logout',
    method: 'POST'
  })
}

/**
 * 订单详情
 */
export function getOrderDetail(params) {
  return fetch({
    url: '/ana/admin/biz/detail',
    method: 'get',
    params
  })
}


/**
 * 新增商品
 */
export function addGoods(data) {
  return fetch({
    url: '/ana/admin/commodity/create',
    method: 'POST',
    data
  })
}


/**
 * 修改商品
 */
export function editGoods(data) {
  return fetch({
    url: '/ana/admin/commodity/update',
    method: 'POST',
    data
  })
}


/**
 * 下架商品
 */
export function offShelf(data) {
  return fetch({
    url: '/ana/admin/commodity/updateSate',
    method: 'POST',
    data
  })
}



