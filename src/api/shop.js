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
export function deliver(data) {
  return fetch({
    url: '/ana/admin/biz/ship',
    method: 'POST',
    data
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
 * 商品详情
 */
export function getGoodsDetail(params) {
  return fetch({
    url: '/ana/admin/commodity/detail',
    method: 'GET',
    params
  })
}
/**
 * 删除商品
 */
export function deleteGoods(data) {
  return fetch({
    url: '/ana/admin/commodity/delete',
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

/**
 * 获取用户卡片
 */
export function getUserK(data) {
  return fetch({
    url: '/ana/admin/commodity/updateSate',
    method: 'POST',
    data
  })
}
/**
 * 发放都点
 */
export function rewardFaction(data) {
  return fetch({
    url: '/ana/admin/system/reward/faction',
    method: 'POST',
    data
  })
}

/**
 * 新增banner
 */
export function addBanner(data) {
  return fetch({
    url: '/ana/admin/banner/insert',
    method: 'POST',
    data
  })
}

/**
 * 修改banner
 */
export function editBanner(data) {
  return fetch({
    url: '/ana/admin/banner/update',
    method: 'POST',
    data
  })
}

/**
 * 修改banner
 */
export function getBanner(params) {
  return fetch({
    url: '/ana/admin/banner/info',
    method: 'GET',
    params
  })
}
/**
 * 修改banner
 */
export function editBannerStatus(data) {
  return fetch({
    url: '/ana/admin/banner/updateState',
    method: 'POST',
    data
  })
}
/**
 * 修改banner
 */
export function deletebanner(data) {
  return fetch({
    url: '/ana/admin/banner/delete',
    method: 'POST',
    data
  })
}

/**
 * 修改banner
 */
export function editState(data) {
  return fetch({
    url: '/ana/admin/award/log/update/state',
    method: 'POST',
    data
  })
}
/**
 * 修改物流
 */
 export function editlogistics(data) {
  return fetch({
    url: '/ana/admin/biz/logistics',
    method: 'POST',
    data
  })
}
/**
 * 撤回
 */
 export function withdraw(data) {
  return fetch({
    url: '/ana/admin/system/subtract/faction',
    method: 'POST',
    data
  })
}

/**
 * 获取
 */
 export function getPrize(data) {
  return fetch({
    url: '/ana/admin/award/level/list',
    method: 'get',
    params: data
  })
}

/**
 * 修改
 */
 export function editPrize(data) {
  return fetch({
    url: '/ana/admin/award/level/update',
    method: 'POST',
    data
  })
}





