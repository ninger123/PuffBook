import Mock from 'mockjs'
import home from './bookHome' // 首页的所有数据
import shelf from './bookShelf' // 书架的所有数据
import list from './bookList' // 图书的所有列表
import flatList from './bookFlatList' // 方便做查询用的

// 第一个参数，正则表达式匹配所请求的URL
Mock.mock(/\/book\/home/, 'get', home) // 前端请求/book/home的时候，就会请求home里的数据
Mock.mock(/\/book\/shelf/, 'get', shelf)
Mock.mock(/\/book\/list/, 'get', list)
Mock.mock(/\/book\/flat-list/, 'get', flatList)
