## 约束

+ 每个组件不能超过300行

## 问题

- [ ] 如何再cookie中登录
- [ ] 推荐音乐需要登陆后才能获取，先用假数据
- [x] 把songList组件化
- [ ] 动态列表优化
- [ ] 导航列表优化
- [ ] 私人列表优化
- [ ] 优化左边导航条的滚动条（自定义）
- [ ] 生命周期函数报错+警告
- [ ] 歌单图片
- [x] 播放歌曲


## 注意

- 如果没有版权或者没有的音乐你双击之后返回的也是null


## 接口


### 登录


`http://localhost:4000/login/cellphone?phone=xxx&password=xxx`

### 获取每日推荐歌单

`http://localhost:4000/recommend/resource`

### 获取用户歌单

说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户歌单
必选参数 : uid : 用户 id
接口地址 : /user/playlist
调用例子 : /user/playlist?uid=32953014


### 获取用户电台

说明 : 登陆后调用此接口 , 传入用户 id, 可以获取用户电台
必选参数 : uid : 用户 id
接口地址 : /user/dj
调用例子 : /user/dj?uid=32953014


### 喜欢音乐列表

说明 : 调用此接口 , 传入用户 id, 可获取已喜欢音乐id列表(id数组)
必选参数 : uid: 用户 id
接口地址 : /likelist
调用例子 : /likelist?uid=32953014

`http://localhost:4000/likelist?uid=337199199`


### 私人FM

说明 : 私人 FM( 需要登录 )
接口地址 : /personal_fm
调用例子 : /personal_fm


**私人FM → 获取歌词 → 绑定数据**


### 获取歌词

说明 : 调用此接口 , 传入音乐 id 可获得对应音乐的歌词 ( 不需要登录 )
必选参数 : id: 音乐 id
接口地址 : /lyric
调用例子 : /lyric?id=33894312


### 获取动态消息

说明 : 调用此接口 , 可获取各种动态 , 对应网页版网易云，朋友界面里的各种动态消息 ，如分享的视频，音乐，照片等！
必选参数 : pagesize : 每页数据,默认20
lasttime : 返回数据的 lasttime ,默认-1,传入上一次返回结果的 lasttime,将会返回下一页的数据
接口地址 : /event
调用例子 : /event?pagesize=30&lasttime=1556740526369

### 获取用户歌单



`http://localhost:4000/user/playlist?uid=337199199`



喜欢歌单的ID：471267581




获取歌单的过程：

获取所有的歌单 → 拿到所有歌单的ID → 请求获取歌单详情接口 