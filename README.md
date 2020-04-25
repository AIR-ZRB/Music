## 约束

+ 每个组件不能超过300行

## 问题

- [ ] 如何再cookie中登录
- [ ] 推荐音乐需要登陆后才能获取，先用假数据
- [ ] 把songList组件化


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