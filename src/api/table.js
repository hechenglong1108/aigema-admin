import fetch from '@/utils/fetch'

/**
 * 获取列表数据
 */
export function getList(config) {
  return fetch({
    url: config.url,
    method: 'get',
    params: config.data
  })
}
