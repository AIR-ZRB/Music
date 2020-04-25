
import React from "react";
import "./recommendMusic.scss";


import { requestData,NavList } from "../../components/MusicComponent";


export default class RecommendMusic extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            themeColor: "primary",      // 主题色，如果项目大则提取到公共数据
            navList: [
                {
                    name: "个性推荐",
                    urlName: "english",
                    select: true
                },
                {
                    name: "歌单",
                    urlName: "english",
                    select: false
                },
                {
                    name: "主播电台",
                    urlName: "english",
                    select: false
                },
                {
                    name: "歌手",
                    urlName: "english",
                    select: false
                },
                {
                    name: "最新音乐",
                    urlName: "english",
                    select: false
                },
            ],
            songList: [
                {
                    "id": 3091142760,
                    "type": 1,
                    "name": "[周末假期运势] 宅在家 宜听歌吸猫 种花晒太阳",
                    "copywriter": "猜你喜欢",
                    "picUrl": "https://p1.music.126.net/j9YWps6yZZxdElYr1mUGbQ==/109951164510509692.jpg",
                    "playcount": 12354244,
                    "createTime": 1574681889005,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/pmHS4fcQtcNEGewNb5HRhg==/2002210674180202.jpg",
                        "avatarImgId": 109951164873881470,
                        "backgroundImgId": 2002210674180202,
                        "detailDescription": "网易云音乐官方账号",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164873881480",
                        "backgroundImgIdStr": "2002210674180202",
                        "accountStatus": 0,
                        "userId": 1,
                        "vipType": 11,
                        "province": 110000,
                        "avatarUrl": "https://p1.music.126.net/LzIA_BYxqJj9mrj1NfCWDQ==/109951164873881480.jpg",
                        "authStatus": 1,
                        "userType": 2,
                        "nickname": "网易云音乐",
                        "gender": 1,
                        "birthday": -2209017600000,
                        "city": 110101,
                        "mutual": false,
                        "remarkName": null,
                        "description": "网易云音乐官方账号",
                        "signature": "网易云音乐是8亿人都在使用的音乐平台，致力于帮助音乐爱好者发现音乐惊喜，帮助音乐人实现梦想。 \n2019年8月31日起，将不再提供实时在线人工服务。您可以优先通过自助方式解决问题，如仍需求助，可在相关页面留下您的问题，后续会有人工为您解答，辛苦您耐心等待，给您带来的不便敬请谅解。 如果仍然不能解决您的问题，可以邮件我们： 用户：ncm5990@163.com 音乐人：yyr599@163.com",
                        "authority": 3
                    },
                    "trackCount": 50,
                    "userId": 1,
                    "alg": "official_playlist_sceneRank"
                },
                {
                    "id": 3136952023,
                    "type": 1,
                    "name": "私人雷达|根据听歌记录为你打造",
                    "copywriter": "猜你喜欢",
                    "picUrl": "https://p1.music.126.net/BeIc-sv62xZPpVBS4DjE-g==/109951164607988464.jpg",
                    "playcount": 398810208,
                    "createTime": 1577330551437,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
                        "avatarImgId": 109951164602170900,
                        "backgroundImgId": 109951162868126480,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951164602170892",
                        "backgroundImgIdStr": "109951162868126486",
                        "accountStatus": 0,
                        "userId": 1287293193,
                        "vipType": 0,
                        "province": 310000,
                        "avatarUrl": "https://p1.music.126.net/EK8pGfc2MItejAT7Z54Hqg==/109951164602170892.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "云音乐智能推荐",
                        "gender": 0,
                        "birthday": 1577808000000,
                        "city": 310101,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "喵~~~",
                        "authority": 0
                    },
                    "trackCount": 55,
                    "userId": 1287293193,
                    "alg": "alg_mgc_red"
                },
                {
                    "id": 2111401734,
                    "type": 1,
                    "name": "「ACG」由衷的青睐，源自真心的美好",
                    "copywriter": "根据你喜欢的单曲《Clover wish》推荐",
                    "picUrl": "https://p1.music.126.net/wfPI__cBbpo8cpIwXC7dxg==/109951163697466861.jpg",
                    "playcount": 4136703,
                    "createTime": 1519208750725,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/lygpb5uMmSgpBCnHLtNW-w==/109951163744540248.jpg",
                        "avatarImgId": 109951164834013340,
                        "backgroundImgId": 109951163744540260,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": [
                            "ACG",
                            "电子",
                            "欧美"
                        ],
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164834013352",
                        "backgroundImgIdStr": "109951163744540248",
                        "accountStatus": 0,
                        "userId": 88644734,
                        "vipType": 11,
                        "province": 1000000,
                        "avatarUrl": "https://p1.music.126.net/93g9vXH2argBCyDNCr6M-w==/109951164834013352.jpg",
                        "authStatus": 0,
                        "userType": 200,
                        "nickname": "Areal肥阳",
                        "gender": 1,
                        "birthday": 744566400000,
                        "city": 1003100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "厦门福祥文化传播有限公司，厦门雅絃录音棚，合作请私信~每日2.00-6.00回复\n多类型系列歌单制作人。音乐视频编辑。一个纯粹的人。B站：Areal肥阳",
                        "authority": 0
                    },
                    "trackCount": 137,
                    "userId": 88644734,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 50515481,
                    "type": 1,
                    "name": "「持续更新」元气少女",
                    "copywriter": "根据你喜欢的单曲《Clover wish》推荐",
                    "picUrl": "https://p1.music.126.net/VpxLTSBr1mAcIqIneMFKxA==/1374389547119710.jpg",
                    "playcount": 610842,
                    "createTime": 1423190616815,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/YVugPM3JAL1u8JAfPFpTHw==/109951164581060755.jpg",
                        "avatarImgId": 109951164375192700,
                        "backgroundImgId": 109951164581060750,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": [
                            "日语",
                            "ACG"
                        ],
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164375192704",
                        "backgroundImgIdStr": "109951164581060755",
                        "accountStatus": 0,
                        "userId": 37367480,
                        "vipType": 11,
                        "province": 510000,
                        "avatarUrl": "https://p1.music.126.net/Y9XUfjbULRI5uHSfyejUAQ==/109951164375192704.jpg",
                        "authStatus": 0,
                        "userType": 200,
                        "nickname": "蓬莱小碎骨",
                        "gender": 0,
                        "birthday": 712476000000,
                        "city": 510100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "金发碧眼控...没错就是你Alice!",
                        "authority": 0
                    },
                    "trackCount": 250,
                    "userId": 37367480,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 2512931513,
                    "type": 1,
                    "name": "网易云热评10w+的中文歌",
                    "copywriter": "根据你喜欢的单曲《好想爱这个世界啊 (Live)》推荐",
                    "picUrl": "https://p1.music.126.net/Mw_H4eIypz2ne9-kVcaAqg==/109951164269312765.jpg",
                    "playcount": 40156080,
                    "createTime": 1542159300425,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/9HShMN10vHM8pAOcwDtRYw==/109951164716607536.jpg",
                        "avatarImgId": 109951164520300770,
                        "backgroundImgId": 109951164716607540,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951164520300762",
                        "backgroundImgIdStr": "109951164716607536",
                        "accountStatus": 0,
                        "userId": 599035249,
                        "vipType": 0,
                        "province": 370000,
                        "avatarUrl": "https://p1.music.126.net/LNL_irvE_wYbYiJ3YtFM5g==/109951164520300762.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "喝奶茶要加珍珠奥",
                        "gender": 2,
                        "birthday": 873879343721,
                        "city": 370100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "",
                        "authority": 0
                    },
                    "trackCount": 299,
                    "userId": 599035249,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 883357217,
                    "type": 1,
                    "name": "逆燃神曲，怠惰退散（燃向BGM）",
                    "copywriter": "根据你喜欢的单曲《RAGE OF DUST》推荐",
                    "picUrl": "https://p1.music.126.net/uZR14VbAYfgw3TrfsPnH8Q==/109951164205180456.jpg",
                    "playcount": 271843,
                    "createTime": 1502938862771,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/7xjis9btwnS1tdXwSz3bqQ==/109951163002017351.jpg",
                        "avatarImgId": 109951163003457220,
                        "backgroundImgId": 109951163002017340,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951163003457214",
                        "backgroundImgIdStr": "109951163002017351",
                        "accountStatus": 0,
                        "userId": 377688997,
                        "vipType": 11,
                        "province": 320000,
                        "avatarUrl": "https://p1.music.126.net/3Ncw4AW0016ukhOtzFMLjg==/109951163003457214.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "vaeliebow",
                        "gender": 0,
                        "birthday": 944300541113,
                        "city": 320300,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "系统无法识别该介绍所用文字",
                        "authority": 0
                    },
                    "trackCount": 230,
                    "userId": 377688997,
                    "alg": "itembased"
                },
                {
                    "id": 813333839,
                    "type": 1,
                    "name": "打游戏必备| 感受这场听觉盛宴!",
                    "copywriter": "根据你喜欢的单曲《HYDRA》推荐",
                    "picUrl": "https://p1.music.126.net/jwJ1b4i9SFbQ0NHeV-jkNQ==/109951164597892399.jpg",
                    "playcount": 16005602,
                    "createTime": 1500215094576,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/xr-P6cEYglNq-knwwpbhzw==/109951164910680077.jpg",
                        "avatarImgId": 109951164935113100,
                        "backgroundImgId": 109951164910680080,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": [
                            "日语",
                            "ACG"
                        ],
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164935113100",
                        "backgroundImgIdStr": "109951164910680077",
                        "accountStatus": 0,
                        "userId": 129377889,
                        "vipType": 11,
                        "province": 410000,
                        "avatarUrl": "https://p1.music.126.net/n5W17I16M8C4x1yjNNBpnQ==/109951164935113100.jpg",
                        "authStatus": 0,
                        "userType": 200,
                        "nickname": "chaz1",
                        "gender": 0,
                        "birthday": 631123200000,
                        "city": 411300,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "you don't have to cry",
                        "authority": 0
                    },
                    "trackCount": 308,
                    "userId": 129377889,
                    "alg": "itembased"
                },
                {
                    "id": 2019129958,
                    "type": 1,
                    "name": "【精选】欧美踩点混剪bgm燃向/剧情向",
                    "copywriter": "根据你喜欢的单曲《Sold Out》推荐",
                    "picUrl": "https://p1.music.126.net/Vul1lVY04aTjJU984riRXw==/19056735533185390.jpg",
                    "playcount": 86760968,
                    "createTime": 1513519389110,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/bJ1Vlt_QBolhMdy5kW3tbw==/109951163362396727.jpg",
                        "avatarImgId": 18712588394802140,
                        "backgroundImgId": 109951163362396720,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "18712588394802140",
                        "backgroundImgIdStr": "109951163362396727",
                        "accountStatus": 0,
                        "userId": 275011203,
                        "vipType": 10,
                        "province": 610000,
                        "avatarUrl": "https://p1.music.126.net/2hfzu3CJ2Om4MaS1wbm-hA==/18712588394802140.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "想养金毛的Apple",
                        "gender": 2,
                        "birthday": -2209017600000,
                        "city": 610100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "微博同id，欢迎找我玩~",
                        "authority": 0
                    },
                    "trackCount": 119,
                    "userId": 275011203,
                    "alg": "itembased"
                },
                {
                    "id": 2565832140,
                    "type": 1,
                    "name": "HimeHina田中姬铃木雏",
                    "copywriter": "根据你喜欢的单曲《琥珀の身体》推荐",
                    "picUrl": "https://p1.music.126.net/-0Irx5ETWiPSDeIb41z9pg==/109951164828956590.jpg",
                    "playcount": 54191,
                    "createTime": 1545319746819,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/vRej4Z_GI_8xrKcw_dLEpQ==/109951163972450248.jpg",
                        "avatarImgId": 109951164040776700,
                        "backgroundImgId": 109951163972450240,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951164040776701",
                        "backgroundImgIdStr": "109951163972450248",
                        "accountStatus": 0,
                        "userId": 1636493678,
                        "vipType": 0,
                        "province": 410000,
                        "avatarUrl": "https://p1.music.126.net/7ZkM1cAPX-YgpthuL8gjtw==/109951164040776701.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "跳跳兰",
                        "gender": 2,
                        "birthday": -2209017600000,
                        "city": 410100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "我还木有签名嘞!",
                        "authority": 0
                    },
                    "trackCount": 266,
                    "userId": 1636493678,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 2959846603,
                    "type": 1,
                    "name": "百位日本女声优，每人一首萌曲",
                    "copywriter": "根据你喜欢的单曲《回レ！雪月花 (夜々Ver.)》推荐",
                    "picUrl": "https://p1.music.126.net/LakR0305gyueQ-Tv2HQBYw==/109951164541395048.jpg",
                    "playcount": 433077,
                    "createTime": 1566979112631,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/s8MpAavzNBlrkab5BEVftw==/109951164345232526.jpg",
                        "avatarImgId": 109951164872502880,
                        "backgroundImgId": 109951164345232530,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": [
                            "日语",
                            "影视原声",
                            "ACG"
                        ],
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951164872502879",
                        "backgroundImgIdStr": "109951164345232526",
                        "accountStatus": 0,
                        "userId": 436839125,
                        "vipType": 11,
                        "province": 340000,
                        "avatarUrl": "https://p1.music.126.net/EbB1OpD7qfhQ2YObRifcwQ==/109951164872502879.jpg",
                        "authStatus": 0,
                        "userType": 200,
                        "nickname": "-弘木-",
                        "gender": 1,
                        "birthday": 868118400000,
                        "city": 340800,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "爱好做推番歌单\r\rACG、电子、古风音乐爱好者丨节奏控 | 补番狂魔 \r\r只要你喜欢『许嵩』『米津玄師 』『秋田弘 』『Ingrid Michaelson』『Imagine Dragons』『神前晓』『前山田健一』『骨头社』『京阿尼』『疯房子』，我们就是好朋友",
                        "authority": 0
                    },
                    "trackCount": 714,
                    "userId": 436839125,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 2302684948,
                    "type": 1,
                    "name": "无前奏 | 喜欢无需铺垫 几秒就能沉醉",
                    "copywriter": "根据你喜欢的单曲《HYDRA》推荐",
                    "picUrl": "https://p1.music.126.net/Cf_Qy5bpyoZ7PI8Cj5tabA==/109951164857125215.jpg",
                    "playcount": 22683940,
                    "createTime": 1530835960596,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/XU7dACKWXNiiudHl073oow==/109951164483145882.jpg",
                        "avatarImgId": 109951164879572460,
                        "backgroundImgId": 109951164483145890,
                        "detailDescription": "网易云音乐VIP官方账号",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951164879572466",
                        "backgroundImgIdStr": "109951164483145882",
                        "accountStatus": 0,
                        "userId": 1452176465,
                        "vipType": 11,
                        "province": 330000,
                        "avatarUrl": "https://p1.music.126.net/ZVQwrUkMExU9Npzn22ak0A==/109951164879572466.jpg",
                        "authStatus": 1,
                        "userType": 3,
                        "nickname": "云音乐VIP",
                        "gender": 0,
                        "birthday": 631123200000,
                        "city": 330100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "网易云音乐VIP官方账号",
                        "signature": "网易云音乐是6亿人都在使用的音乐平台，致力于帮助音乐爱好者发现音乐惊喜，帮助音乐人实现梦想。本号为画风不太正经但很走心且一听歌就会摇摆的网易云音乐VIP正经官号。如果仍然不能解决您的问题，请邮件我们：用户：ncm5990@163.com音乐人：yyr599@163.com",
                        "authority": 0
                    },
                    "trackCount": 61,
                    "userId": 1452176465,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 2803466145,
                    "type": 1,
                    "name": "Kawaii Bass|请问要来一点软萌电子吗？",
                    "copywriter": "根据你喜欢的单曲《Akiba》推荐",
                    "picUrl": "https://p1.music.126.net/diJdhon3N7mXcjPgwdJ6Rg==/109951164234700073.jpg",
                    "playcount": 215576,
                    "createTime": 1558150174584,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/F1d1HIgIQVQwtDMxgGGrtg==/109951164021881385.jpg",
                        "avatarImgId": 109951164144275840,
                        "backgroundImgId": 109951164021881390,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": [
                            "日语",
                            "ACG",
                            "影视原声"
                        ],
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164144275837",
                        "backgroundImgIdStr": "109951164021881385",
                        "accountStatus": 0,
                        "userId": 504246035,
                        "vipType": 11,
                        "province": 440000,
                        "avatarUrl": "https://p1.music.126.net/692tP3oycbhbhs3Ac1DGgw==/109951164144275837.jpg",
                        "authStatus": 0,
                        "userType": 200,
                        "nickname": "不安定的滑稽",
                        "gender": 1,
                        "birthday": 954779622373,
                        "city": 441300,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "我想成为一个温柔的人，因为曾被温柔的人那样对待，深深了解那种被温柔相待的感觉。",
                        "authority": 0
                    },
                    "trackCount": 66,
                    "userId": 504246035,
                    "alg": "itembased"
                },
                {
                    "id": 616554231,
                    "type": 1,
                    "name": "【日系】那些听了就不舍暂停的歌",
                    "copywriter": "根据你喜欢的单曲《フリージア》推荐",
                    "picUrl": "https://p1.music.126.net/DjBcAVeVEtFFTGo6aI8zOQ==/109951164929821399.jpg",
                    "playcount": 23812,
                    "createTime": 1488373951183,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/XreHztUpbcIf3zIQe-ZnYA==/109951164569841273.jpg",
                        "avatarImgId": 109951164857021740,
                        "backgroundImgId": 109951164569841280,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951164857021745",
                        "backgroundImgIdStr": "109951164569841273",
                        "accountStatus": 0,
                        "userId": 365719543,
                        "vipType": 11,
                        "province": 510000,
                        "avatarUrl": "https://p1.music.126.net/F-l7YSI1Q44OkcwwR7X_5Q==/109951164857021745.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "花间千羽",
                        "gender": 2,
                        "birthday": 963205026055,
                        "city": 510100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "日系 Vocaloid爱好者",
                        "authority": 0
                    },
                    "trackCount": 326,
                    "userId": 365719543,
                    "alg": "itembased"
                },
                {
                    "id": 132717364,
                    "type": 1,
                    "name": "『1979-至今』全年代日本动漫ED大盘点",
                    "copywriter": "根据你喜欢的单曲《夜空》推荐",
                    "picUrl": "https://p1.music.126.net/U6kmqYWAgrWXEg_pmxJDHA==/3411784583019600.jpg",
                    "playcount": 5788719,
                    "createTime": 1448714625088,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/sGivlUmbTDTYVSAdYosmww==/109951164425448705.jpg",
                        "avatarImgId": 109951164874661740,
                        "backgroundImgId": 109951164425448700,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": [
                            "影视原声",
                            "日语",
                            "ACG"
                        ],
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164874661744",
                        "backgroundImgIdStr": "109951164425448705",
                        "accountStatus": 0,
                        "userId": 81635197,
                        "vipType": 11,
                        "province": 510000,
                        "avatarUrl": "https://p1.music.126.net/Zbu9Q2c2wh1wBxccsiyq5A==/109951164874661744.jpg",
                        "authStatus": 0,
                        "userType": 200,
                        "nickname": "佐仓小小千代",
                        "gender": 1,
                        "birthday": 1584288000000,
                        "city": 510100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "音乐和动漫都能带来感动，不是吗？",
                        "authority": 0
                    },
                    "trackCount": 602,
                    "userId": 81635197,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 467824586,
                    "type": 1,
                    "name": "【日积月累】的日系良曲",
                    "copywriter": "根据你喜欢的单曲《六等星の夜》推荐",
                    "picUrl": "https://p1.music.126.net/aV-bv1hPhVwEnpdTVOC_qw==/109951162795185286.jpg",
                    "playcount": 11675281,
                    "createTime": 1474277734830,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/l6l0VUuDjHmxS6mpBqhftQ==/109951162791057669.jpg",
                        "avatarImgId": 109951162817996240,
                        "backgroundImgId": 109951162791057660,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951162817996244",
                        "backgroundImgIdStr": "109951162791057669",
                        "accountStatus": 0,
                        "userId": 294528750,
                        "vipType": 0,
                        "province": 320000,
                        "avatarUrl": "https://p1.music.126.net/Y49u7nVqs6-1r2N2EzRg4A==/109951162817996244.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "左丘绮山",
                        "gender": 1,
                        "birthday": -2209017600000,
                        "city": 320300,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "好像没什么想说的。。。",
                        "authority": 0
                    },
                    "trackCount": 196,
                    "userId": 294528750,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 775372535,
                    "type": 1,
                    "name": "崩坏3官方Impact-Original Soundtrack",
                    "copywriter": "根据你喜欢的单曲《Starfall》推荐",
                    "picUrl": "https://p1.music.126.net/TRZI3Ut9JH4YBJsPCPm8XA==/18724683023220866.jpg",
                    "playcount": 4329302,
                    "createTime": 1498298886828,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/dg1AphW4SVrAqdmNeTYnxQ==/109951164333963519.jpg",
                        "avatarImgId": 109951164725948030,
                        "backgroundImgId": 109951164333963520,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164725948037",
                        "backgroundImgIdStr": "109951164333963519",
                        "accountStatus": 0,
                        "userId": 318855774,
                        "vipType": 0,
                        "province": 1000000,
                        "avatarUrl": "https://p1.music.126.net/k9tgI4PzwQU_g7W_WgW-qA==/109951164725948037.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "Mihoyo认证账号V",
                        "gender": 2,
                        "birthday": 957542400000,
                        "city": 1001900,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "什么都聊群 707861870，\n有问题联系我【群内管理员：狐妖主任基金会限定 Kapn】",
                        "authority": 0
                    },
                    "trackCount": 68,
                    "userId": 318855774,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 959475356,
                    "type": 1,
                    "name": "不需要过多的伴奏，清唱也是一种美",
                    "copywriter": "根据你喜欢的单曲《たいせつなきみのために、ぼくにできるいちばんのこと》推荐",
                    "picUrl": "https://p1.music.126.net/1quz-PZDJG9PMdpMtqz46A==/109951163048869320.jpg",
                    "playcount": 7821720,
                    "createTime": 1508066983360,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/vMMxp1NzwBoUwPlwP3P9iQ==/109951162848301371.jpg",
                        "avatarImgId": 109951164935024060,
                        "backgroundImgId": 109951162848301380,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": [
                            "日语",
                            "ACG",
                            "轻音乐"
                        ],
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951164935024060",
                        "backgroundImgIdStr": "109951162848301371",
                        "accountStatus": 0,
                        "userId": 62696289,
                        "vipType": 11,
                        "province": 1000000,
                        "avatarUrl": "https://p1.music.126.net/uFQDTdSbdBp0g3ower4Hsg==/109951164935024060.jpg",
                        "authStatus": 0,
                        "userType": 200,
                        "nickname": "PurionPurion",
                        "gender": 2,
                        "birthday": 829238400000,
                        "city": 1005500,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "注：舰B话题禁止，看到就拉黑【FGO刷屏注意，道满姑姑阿清政哥哥段藏萨老师小马老师西哥厨】勿背至诚，勿耻行言，勿失气力，勿怨勤勉，勿入懒惰，勿忘初心。孤独之子啊，愿星光照亮你前进的道路…【歌单封面动态自取，ID在简介里^_^】",
                        "authority": 0
                    },
                    "trackCount": 154,
                    "userId": 62696289,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 2493547662,
                    "type": 1,
                    "name": "日本vlog背景音乐",
                    "copywriter": "根据你喜欢的单曲《明日の朝には》推荐",
                    "picUrl": "https://p1.music.126.net/1zOMcO4a3Pxo8c5xhiVZ1Q==/109951163637220918.jpg",
                    "playcount": 20690212,
                    "createTime": 1540972659026,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/rRZtQz1pzA5BgeCVBaUHkA==/109951164491684895.jpg",
                        "avatarImgId": 109951164412629940,
                        "backgroundImgId": 109951164491684900,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 0,
                        "followed": false,
                        "avatarImgIdStr": "109951164412629936",
                        "backgroundImgIdStr": "109951164491684895",
                        "accountStatus": 0,
                        "userId": 130851092,
                        "vipType": 0,
                        "province": 1000000,
                        "avatarUrl": "https://p1.music.126.net/0UxClaDCYGzExDYGU3wu-A==/109951164412629936.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "比潘胖胖还能吃",
                        "gender": 2,
                        "birthday": -2209017600000,
                        "city": 1007700,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "热爱可抵岁月漫长。",
                        "authority": 0
                    },
                    "trackCount": 160,
                    "userId": 130851092,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 443797814,
                    "type": 1,
                    "name": "超好听の二次元日文歌",
                    "copywriter": "根据你喜欢的单曲《六等星の夜》推荐",
                    "picUrl": "https://p1.music.126.net/Yn8-GCMLZJ-NbwSM8Yj6lw==/109951162972995997.jpg",
                    "playcount": 23791224,
                    "createTime": 1471210803978,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/QUBVFDgWPp6m4q10OJYWlA==/109951164770672610.jpg",
                        "avatarImgId": 109951164770662460,
                        "backgroundImgId": 109951164770672600,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": null,
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164770662464",
                        "backgroundImgIdStr": "109951164770672610",
                        "accountStatus": 0,
                        "userId": 283230319,
                        "vipType": 11,
                        "province": 420000,
                        "avatarUrl": "https://p1.music.126.net/nMU_0JzNJCFxvVa9eaSCNg==/109951164770662464.jpg",
                        "authStatus": 0,
                        "userType": 0,
                        "nickname": "小仙女七七酱",
                        "gender": 2,
                        "birthday": 908812800000,
                        "city": 420100,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "斗鱼直播，房间号503866，ID：小仙女七七酱",
                        "authority": 0
                    },
                    "trackCount": 328,
                    "userId": 283230319,
                    "alg": "bysong_play_rt"
                },
                {
                    "id": 806728741,
                    "type": 1,
                    "name": "「日语民谣」月色中的浅吟低唱",
                    "copywriter": "根据你喜欢的单曲《明日の朝には》推荐",
                    "picUrl": "https://p1.music.126.net/aao5Ku06P5PrMafCfT3MjQ==/18648816720698170.jpg",
                    "playcount": 20513208,
                    "createTime": 1499764728242,
                    "creator": {
                        "backgroundUrl": "http://p1.music.126.net/12SzZkoXShvhnaEBAmfCIg==/109951164936463613.jpg",
                        "avatarImgId": 109951164541822900,
                        "backgroundImgId": 109951164936463620,
                        "detailDescription": "",
                        "defaultAvatar": false,
                        "expertTags": [
                            "日语",
                            "轻音乐",
                            "欧美"
                        ],
                        "djStatus": 10,
                        "followed": false,
                        "avatarImgIdStr": "109951164541822889",
                        "backgroundImgIdStr": "109951164936463613",
                        "accountStatus": 0,
                        "userId": 74029445,
                        "vipType": 11,
                        "province": 1000000,
                        "avatarUrl": "https://p1.music.126.net/N3hK9zXfDdT9OGv6Goz0Tw==/109951164541822889.jpg",
                        "authStatus": 0,
                        "userType": 200,
                        "nickname": "xept",
                        "gender": 0,
                        "birthday": -1577952000000,
                        "city": 1010000,
                        "mutual": false,
                        "remarkName": null,
                        "description": "",
                        "signature": "higan banana",
                        "authority": 0
                    },
                    "trackCount": 72,
                    "userId": 74029445,
                    "alg": "bysong_play_rt"
                }
            ]
        }
    }


    setData(editName: any, step: any = 11) {
        this.setState({
            editName: step
        })
    }



    // 获取每日歌单请求
    reqTodayMusic(): void {
        let url = "http://localhost:4000/recommend/resource";
        requestData(url)
            .then((data: any) => {
                console.log(data.recommend);

                this.setState({
                    songList: data.recommend
                })
            })
    }


    componentWillMount(){
        // this.reqTodayMusic();
    }




    render() {
        return (
            <div className="recommendMusic">
                <nav className="navigation">
                    <ul>
                        <NavList navList={this.state.navList} edit={this.setData.bind(this)} />
                    </ul>
                </nav>

                <div className="banner">
                    <img src="" alt="" height="300" />
                    <img src="" alt="" height="300" />
                </div>

                <div className="songList">
                    <p>今日推荐歌单</p>
                    <ul>
                        <SongList songList={this.state.songList} />
                    </ul>
                </div>


            </div>
        )
    }
}


// 音乐列表
function SongList(props: any) {
    return props.songList.map((item: any) => {
        return <li className="list" style={{ backgroundImage: `url(${item.picUrl})` }} key={item.songListName}>
            <span>{item.name}</span>
        </li>

    })
}









