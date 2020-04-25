import React from "react";

import "./friends.scss"

export default class friends extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            dynamicState: [
                {
                    "actName": "高产的背后",
                    "pendantData": null,
                    "forwardCount": 0,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"#高产的背后#\\n论如何才能高产\"}",
                    "showTime": 1586961933382,
                    "pics": [
                        {
                            "originUrl": "https://p2.music.126.net/TefEyxrYXJfburS7IDWl6g==/109951164907998013.jpg",
                            "squareUrl": "https://p2.music.126.net/ZjVSTMsYwGkomV5EiTEIgQ==/109951164907988828.jpg",
                            "rectangleUrl": "https://p2.music.126.net/xxUcinYDchoLOJowjiApBg==/109951164907989326.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/hHicNVkw97aAWGiRZGD2lQ==/109951164907990805.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/xdp85-1wKPUT3JuwY21Geg==/109951164907994158.jpg",
                            "width": 762,
                            "height": 1545,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/joJhbjatRKxq9T8rvahvIw==/109951164907996110.jpg",
                            "squareUrl": "https://p2.music.126.net/6PP0kMAIDRVKrfENYF7zRg==/109951164907993271.jpg",
                            "rectangleUrl": "https://p2.music.126.net/9JgguLVq_uuEzn5_qqQwpQ==/109951164907987910.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/81yheyEyAklmm9sLc4qyXQ==/109951164907998999.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/dfn7-9v1DEMi4QAl9QsY6A==/109951164907999000.jpg",
                            "width": 792,
                            "height": 957,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/hfjQUuQ1j1MbfqhKygNdZQ==/109951164907996115.jpg",
                            "squareUrl": "https://p2.music.126.net/eigmos0tsQ204BpiWU94JQ==/109951164907996606.jpg",
                            "rectangleUrl": "https://p2.music.126.net/gUVAh4uKJ-5QztkEAIMpmA==/109951164907998501.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/g5GTRSqnOpOXOCpakvCiIg==/109951164907997573.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/0EEPW8hABwGEARq3ZMDmJA==/109951164907999003.jpg",
                            "width": 760,
                            "height": 981,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/LpQEnuLu22BMHKniHm-ryQ==/109951164907992274.jpg",
                            "squareUrl": "https://p2.music.126.net/d41hBUzZN2RbUNFrkDhjlA==/109951164907988840.jpg",
                            "rectangleUrl": "https://p2.music.126.net/01VzQMUhgJhjp4B610ZRjg==/109951164907995207.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/0QHujbVnaP31YX3WobluXw==/109951164907990321.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/yPCvJte3um5bVGYAJIa_MQ==/109951164907996126.jpg",
                            "width": 736,
                            "height": 1200,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/8Boc_iEvDvBgTl7296ibYg==/109951164907996128.jpg",
                            "squareUrl": "https://p2.music.126.net/XDNwOviVTY2CFzzKsxnd3Q==/109951164907989818.jpg",
                            "rectangleUrl": "https://p2.music.126.net/nfjMzJ87ogleNsyq9X68ng==/109951164907993290.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/X8FQFs8rBlQ0nuGACMXLFg==/109951164907988381.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/zOLCk50PfsBRkI8JX7GM9Q==/109951164907999015.jpg",
                            "width": 745,
                            "height": 1766,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/skUtSseyM2ZA11sSxf3Xhg==/109951164907987456.jpg",
                            "squareUrl": "https://p2.music.126.net/bD5wcvhQhwgNly2RqPgKmw==/109951164907998527.jpg",
                            "rectangleUrl": "https://p2.music.126.net/x8HcCjQRzL0re3_tbERr6A==/109951164907997116.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/2XduhNXveTN6O7FtnESPCQ==/109951164907999019.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/wZ6v0RZXl1E8dD3GzcMGsw==/109951164907992293.jpg",
                            "width": 763,
                            "height": 1628,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/GvbaazRkctHB6y72jLIPhQ==/109951164907993741.jpg",
                            "squareUrl": "https://p2.music.126.net/Fw020y4W5dYyAOOXEH9b9A==/109951164907991809.jpg",
                            "rectangleUrl": "https://p2.music.126.net/yrTc4djCXnsHKmb8X_LjXw==/109951164907999508.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/cpxERx8Bb_wA1mSMkVFZNA==/109951164908000000.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/1vPNnQN_9z14IO0xqF6FZA==/109951164907996628.jpg",
                            "width": 1500,
                            "height": 882,
                            "format": "jpg"
                        }
                    ],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 74814241,
                    "extJsonInfo": {
                        "actId": 74814241,
                        "actIds": [
                            74814241
                        ],
                        "uuid": "b9468b92c5d0db2a794af21bc6b0899b",
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "1",
                        "extParams": {}
                    },
                    "eventTime": 1587706754523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": "b9468b92c5d0db2a794af21bc6b0899b",
                    "id": 12422975340,
                    "type": 35,
                    "topEvent": false,
                    "insiteForwardCount": 0,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12422975340_299973996",
                            "resourceInfo": {
                                "id": 12422975340,
                                "userId": 299973996,
                                "name": "动态：#高产的背后#\n论如何才能高产[图片]",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 35
                            },
                            "resourceType": 2,
                            "commentCount": 36,
                            "likedCount": 189,
                            "shareCount": 0,
                            "hotCount": 3,
                            "latestLikedUsers": [
                                {
                                    "s": 1869778898,
                                    "t": 1587807484039
                                },
                                {
                                    "s": 516586646,
                                    "t": 1587805513905
                                },
                                {
                                    "s": 114675853,
                                    "t": 1587787031071
                                },
                                {
                                    "s": 566236678,
                                    "t": 1587740716528
                                },
                                {
                                    "s": 287251707,
                                    "t": 1587696540286
                                },
                                {
                                    "s": 502328947,
                                    "t": 1587637695074
                                },
                                {
                                    "s": 1374126421,
                                    "t": 1587631517723
                                },
                                {
                                    "s": 416721540,
                                    "t": 1587623679249
                                },
                                {
                                    "s": 1651392040,
                                    "t": 1587564339004
                                },
                                {
                                    "s": 385954605,
                                    "t": 1587552369345
                                }
                            ],
                            "resourceTitle": "动态：#高产的背后#\n论如何才能高产[图片]",
                            "resourceId": 12422975340,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12422975340,
                        "commentCount": 36,
                        "likedCount": 189,
                        "shareCount": 0,
                        "threadId": "A_EV_2_12422975340_299973996"
                    }
                },
                {
                    "actName": null,
                    "pendantData": null,
                    "forwardCount": 0,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"最近每天都 心情好\\n晚安安\"}",
                    "showTime": 1587484204798,
                    "pics": [
                        {
                            "originUrl": "https://p2.music.126.net/4dG5p9Ri468DSDKvtlzbIw==/109951164927066771.jpg",
                            "squareUrl": "https://p2.music.126.net/fEyJgiViyVWgaygoO-Oa8w==/109951164927074026.jpg",
                            "rectangleUrl": "https://p2.music.126.net/cJ4VTPX6-qRZBV2OH37xTA==/109951164927069672.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/a6Q73u9PhMTNcNuP28skJg==/109951164927073078.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/BFTk_xM55NE6YUz2JDvM9g==/109951164927072118.jpg",
                            "width": 1080,
                            "height": 1080,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/vAE3EVWbBR8EcGDJAn2zsg==/109951164927067216.jpg",
                            "squareUrl": "https://p2.music.126.net/7FUH3x8Ada4B9sCZM3xsQQ==/109951164927072613.jpg",
                            "rectangleUrl": "https://p2.music.126.net/8mwx8BR-ooHDW1CFDbHWZQ==/109951164927062369.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/_TtY6cXC-Sbzd0blSeakzg==/109951164927063818.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/VIa8XSTOgu-sIhHOwvbWGA==/109951164927070659.jpg",
                            "width": 2000,
                            "height": 1499,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/PMd8WBxlncKz2a_p6Z9D6g==/109951164927072129.jpg",
                            "squareUrl": "https://p2.music.126.net/lyGWsqNsZJBuN0eXpNjNaA==/109951164927068730.jpg",
                            "rectangleUrl": "https://p2.music.126.net/0i9axOFneD_x78v5r5d2YQ==/109951164927068235.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/TMoLm3Z88xhPudt-DGYIxA==/109951164927070164.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/liimJpO34w5GxTqVwQMLXw==/109951164927068238.jpg",
                            "width": 1728,
                            "height": 1728,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/7od8YPO4zpqPN8W5-2fl_Q==/109951164927071648.jpg",
                            "squareUrl": "https://p2.music.126.net/oi4yGoULgpUdLVV8atgQuQ==/109951164927066244.jpg",
                            "rectangleUrl": "https://p2.music.126.net/Wa2W5xtZOrf9dSg1RCDkeQ==/109951164927067226.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/DyOOxXXv1Pct19NQTLz4zw==/109951164927067778.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/KugH8uRdxq19HeGg8dkCuQ==/109951164927062380.jpg",
                            "width": 1368,
                            "height": 1368,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/Bxfmu-O90WoDT1jy65o0XA==/109951164927062868.jpg",
                            "squareUrl": "https://p2.music.126.net/o4CtV8rzmM3WuZG2An9CbQ==/109951164927070670.jpg",
                            "rectangleUrl": "https://p2.music.126.net/fMgGa_U_6N5i_3b3RHer0Q==/109951164927072138.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/ze4x7HwjtBEv1Q4BYHWFFw==/109951164927068740.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/ElJcLZoN19mOrBqEYMir5w==/109951164927073604.jpg",
                            "width": 1080,
                            "height": 1440,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/uo-tFCU8AJ6woaeJh5X1-Q==/109951164927067785.jpg",
                            "squareUrl": "https://p2.music.126.net/Fsp06Cb84K1YDTbPBDESzQ==/109951164927060990.jpg",
                            "rectangleUrl": "https://p2.music.126.net/vqkYWbEFfRbK4JWGjxAJYg==/109951164927063332.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/XjJAW-YNcLj6w74AkP129w==/109951164927065768.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/twVzJp-VjBwUyfMmuSKMRA==/109951164927067235.jpg",
                            "width": 1080,
                            "height": 2400,
                            "format": "jpg"
                        },
                        {
                            "originUrl": "https://p2.music.126.net/CZjG0yVHRy3CbrryYmIxCg==/109951164927060992.jpg",
                            "squareUrl": "https://p2.music.126.net/1BX8HedtvgqEEMOHUyL60g==/109951164927071668.jpg",
                            "rectangleUrl": "https://p2.music.126.net/wnUtxrvhn5G_6rvSYEYCnQ==/109951164927064816.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/sQ_PlIjMc3SWJ2f1OrxtBA==/109951164927071669.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/qdK5dgeH63oAZ96eMIgnNQ==/109951164927064821.jpg",
                            "width": 2000,
                            "height": 1125,
                            "format": "jpg"
                        }
                    ],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 0,
                    "extJsonInfo": {
                        "actId": 0,
                        "actIds": [],
                        "uuid": "a101ef6e9a04d4b652c899d9e9b3942d",
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "1",
                        "extParams": {}
                    },
                    "eventTime": 1587706753523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": "a101ef6e9a04d4b652c899d9e9b3942d",
                    "id": 12446364715,
                    "type": 35,
                    "topEvent": false,
                    "insiteForwardCount": 0,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12446364715_299973996",
                            "resourceInfo": {
                                "id": 12446364715,
                                "userId": 299973996,
                                "name": "动态：最近每天都 心情好\n晚安安[图片]",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 35
                            },
                            "resourceType": 2,
                            "commentCount": 7,
                            "likedCount": 130,
                            "shareCount": 0,
                            "hotCount": 1,
                            "latestLikedUsers": [
                                {
                                    "s": 1869778898,
                                    "t": 1587807266246
                                },
                                {
                                    "s": 502094918,
                                    "t": 1587803318024
                                },
                                {
                                    "s": 1436524231,
                                    "t": 1587796094316
                                },
                                {
                                    "s": 1803601357,
                                    "t": 1587789129238
                                },
                                {
                                    "s": 127687541,
                                    "t": 1587789030858
                                },
                                {
                                    "s": 1447813805,
                                    "t": 1587788281736
                                },
                                {
                                    "s": 250204697,
                                    "t": 1587772704852
                                },
                                {
                                    "s": 275877910,
                                    "t": 1587755512136
                                },
                                {
                                    "s": 629983258,
                                    "t": 1587748458172
                                },
                                {
                                    "s": 275837412,
                                    "t": 1587743533186
                                }
                            ],
                            "resourceTitle": "动态：最近每天都 心情好\n晚安安[图片]",
                            "resourceId": 12446364715,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12446364715,
                        "commentCount": 7,
                        "likedCount": 130,
                        "shareCount": 0,
                        "threadId": "A_EV_2_12446364715_299973996"
                    }
                },
                {
                    "actName": null,
                    "pendantData": null,
                    "forwardCount": 0,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"希望大家不要在除了我的歌的评论区以外的地方提到我，不管是以什么形式。尤其是在我的好朋友评论底下，不是我和某位唱见关系好=你可以到他们评论区底下去提我的名字，而是正因为这样才不要去。\\n非常感谢大家，如果在其他地方看到了帮忙举报一下吧，再次感谢。\"}",
                    "showTime": 1586486632362,
                    "pics": [],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 0,
                    "extJsonInfo": {
                        "actId": 0,
                        "actIds": [],
                        "uuid": "c0933cea7c8c9208d0bfcaa85cd9afc4",
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "3",
                        "extParams": {}
                    },
                    "eventTime": 1587706751523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": "c0933cea7c8c9208d0bfcaa85cd9afc4",
                    "id": 12400485213,
                    "type": 35,
                    "topEvent": false,
                    "insiteForwardCount": 0,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12400485213_299973996",
                            "resourceInfo": {
                                "id": 12400485213,
                                "userId": 299973996,
                                "name": "动态：希望大家不要在除了我的歌的评论区以外的地方提到我，不管是以什么形式。尤其是在我的好朋友评论底下，不是我和某位唱见关系好=你可以到他们评论区底下去提我的名字，而是正因为这样才不要去。\n非常感谢大家，如果在其他地方看到了帮忙举报一下吧，再次感谢。",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 35
                            },
                            "resourceType": 2,
                            "commentCount": 9,
                            "likedCount": 219,
                            "shareCount": 0,
                            "hotCount": 3,
                            "latestLikedUsers": [
                                {
                                    "s": 1760772909,
                                    "t": 1587774243953
                                },
                                {
                                    "s": 1481292941,
                                    "t": 1587761564020
                                },
                                {
                                    "s": 413189606,
                                    "t": 1587579799112
                                },
                                {
                                    "s": 385954605,
                                    "t": 1587552374067
                                },
                                {
                                    "s": 1462517787,
                                    "t": 1587544526394
                                },
                                {
                                    "s": 375584904,
                                    "t": 1587539035814
                                },
                                {
                                    "s": 1626190816,
                                    "t": 1587394085420
                                },
                                {
                                    "s": 1394863407,
                                    "t": 1587386676820
                                },
                                {
                                    "s": 439767014,
                                    "t": 1587313612179
                                },
                                {
                                    "s": 1722275625,
                                    "t": 1587273632059
                                }
                            ],
                            "resourceTitle": "动态：希望大家不要在除了我的歌的评论区以外的地方提到我，不管是以什么形式。尤其是在我的好朋友评论底下，不是我和某位唱见关系好=你可以到他们评论区底下去提我的名字，而是正因为这样才不要去。\n非常感谢大家，如果在其他地方看到了帮忙举报一下吧，再次感谢。",
                            "resourceId": 12400485213,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12400485213,
                        "commentCount": 9,
                        "likedCount": 219,
                        "shareCount": 0,
                        "threadId": "A_EV_2_12400485213_299973996"
                    }
                },
                {
                    "actName": null,
                    "pendantData": null,
                    "forwardCount": 0,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"\"}",
                    "showTime": 1586796993756,
                    "pics": [
                        {
                            "originUrl": "https://p2.music.126.net/d9gp5czXUtOHNUqS5G_R_w==/109951164902068085.jpg",
                            "squareUrl": "https://p2.music.126.net/GPDGdg7YmjjJ4Tk2504kGQ==/109951164902061711.jpg",
                            "rectangleUrl": "https://p2.music.126.net/YmfJq-RMRK-kiww7CFDyBQ==/109951164902067605.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/xXMvrt-D9uihbIIiLhBbuA==/109951164902063670.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/n7udkc834aI0xmYnP6dpDA==/109951164902065150.jpg",
                            "width": 300,
                            "height": 300,
                            "format": "gif"
                        }
                    ],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 0,
                    "extJsonInfo": {
                        "actId": 0,
                        "actIds": [],
                        "uuid": "6f2c0bddd738cb01cf1aea3a6c9b0b18",
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "3",
                        "extParams": {}
                    },
                    "eventTime": 1587706750523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": "6f2c0bddd738cb01cf1aea3a6c9b0b18",
                    "id": 12415375004,
                    "type": 35,
                    "topEvent": false,
                    "insiteForwardCount": 0,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12415375004_299973996",
                            "resourceInfo": {
                                "id": 12415375004,
                                "userId": 299973996,
                                "name": "动态：[图片]",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 35
                            },
                            "resourceType": 2,
                            "commentCount": 25,
                            "likedCount": 131,
                            "shareCount": 0,
                            "hotCount": 1,
                            "latestLikedUsers": [
                                {
                                    "s": 1869778898,
                                    "t": 1587807503477
                                },
                                {
                                    "s": 1436524231,
                                    "t": 1587796285248
                                },
                                {
                                    "s": 1492773766,
                                    "t": 1587731605117
                                },
                                {
                                    "s": 1790562719,
                                    "t": 1587645100359
                                },
                                {
                                    "s": 1862436551,
                                    "t": 1587458930180
                                },
                                {
                                    "s": 1293949877,
                                    "t": 1587447718020
                                },
                                {
                                    "s": 1626190816,
                                    "t": 1587394054383
                                },
                                {
                                    "s": 2097476755,
                                    "t": 1587378171929
                                },
                                {
                                    "s": 418750542,
                                    "t": 1587341330609
                                },
                                {
                                    "s": 1412074785,
                                    "t": 1587316829888
                                }
                            ],
                            "resourceTitle": "动态：[图片]",
                            "resourceId": 12415375004,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12415375004,
                        "commentCount": 25,
                        "likedCount": 131,
                        "shareCount": 0,
                        "threadId": "A_EV_2_12415375004_299973996"
                    }
                },
                {
                    "actName": null,
                    "pendantData": null,
                    "forwardCount": 0,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"哈哈哈我喜欢你们叫我姐姐\"}",
                    "showTime": 1585401847093,
                    "pics": [],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 0,
                    "extJsonInfo": {
                        "actId": 0,
                        "actIds": [],
                        "uuid": "ee831c9497e745d05c180cabb1dd992d",
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "3",
                        "extParams": {}
                    },
                    "eventTime": 1587706749523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": "ee831c9497e745d05c180cabb1dd992d",
                    "id": 12350718597,
                    "type": 35,
                    "topEvent": false,
                    "insiteForwardCount": 0,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12350718597_299973996",
                            "resourceInfo": {
                                "id": 12350718597,
                                "userId": 299973996,
                                "name": "动态：哈哈哈我喜欢你们叫我姐姐",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 35
                            },
                            "resourceType": 2,
                            "commentCount": 77,
                            "likedCount": 244,
                            "shareCount": 0,
                            "hotCount": 4,
                            "latestLikedUsers": [
                                {
                                    "s": 618184504,
                                    "t": 1587702152220
                                },
                                {
                                    "s": 1835412212,
                                    "t": 1587630168598
                                },
                                {
                                    "s": 1291543551,
                                    "t": 1587616836753
                                },
                                {
                                    "s": 589205877,
                                    "t": 1587602803579
                                },
                                {
                                    "s": 1367411688,
                                    "t": 1587249098141
                                },
                                {
                                    "s": 1596931221,
                                    "t": 1587221064285
                                },
                                {
                                    "s": 1516062487,
                                    "t": 1587186253918
                                },
                                {
                                    "s": 1479653730,
                                    "t": 1587061555114
                                },
                                {
                                    "s": 1527364212,
                                    "t": 1586958462232
                                },
                                {
                                    "s": 1414710953,
                                    "t": 1586909834665
                                }
                            ],
                            "resourceTitle": "动态：哈哈哈我喜欢你们叫我姐姐",
                            "resourceId": 12350718597,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12350718597,
                        "commentCount": 77,
                        "likedCount": 244,
                        "shareCount": 0,
                        "threadId": "A_EV_2_12350718597_299973996"
                    }
                },
                {
                    "actName": null,
                    "pendantData": null,
                    "forwardCount": 2,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"几个关于发音的老问题\\n抱拳了\"}",
                    "showTime": 1585234273985,
                    "pics": [
                        {
                            "originUrl": "https://p2.music.126.net/sPu6P72GsMkklmApklZHbA==/109951164842124227.jpg",
                            "squareUrl": "https://p2.music.126.net/2ix10FmkVX_cT_aUyxmlmA==/109951164842119971.jpg",
                            "rectangleUrl": "https://p2.music.126.net/QDFnanko6v4WnjrqK72iuw==/109951164842121874.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/w1C3oz7BkB6b2ZmtBGo4gg==/109951164842121400.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/BgPOLhB2v7bbC5ZOAY6pyA==/109951164842124713.jpg",
                            "width": 936,
                            "height": 3112,
                            "format": "jpg"
                        }
                    ],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 0,
                    "extJsonInfo": {
                        "actId": 0,
                        "actIds": [],
                        "uuid": "40e55534dcd7c8343a42c89a0f63ea84",
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "3",
                        "extParams": {}
                    },
                    "eventTime": 1587706748523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": "40e55534dcd7c8343a42c89a0f63ea84",
                    "id": 12342971345,
                    "type": 35,
                    "topEvent": false,
                    "insiteForwardCount": 2,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12342971345_299973996",
                            "resourceInfo": {
                                "id": 12342971345,
                                "userId": 299973996,
                                "name": "动态：几个关于发音的老问题\n抱拳了[图片]",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 35
                            },
                            "resourceType": 2,
                            "commentCount": 31,
                            "likedCount": 207,
                            "shareCount": 2,
                            "hotCount": 2,
                            "latestLikedUsers": [
                                {
                                    "s": 1334049105,
                                    "t": 1587735399121
                                },
                                {
                                    "s": 568034792,
                                    "t": 1587653868484
                                },
                                {
                                    "s": 280279041,
                                    "t": 1587389097349
                                },
                                {
                                    "s": 618184504,
                                    "t": 1587357938904
                                },
                                {
                                    "s": 333407579,
                                    "t": 1587215047911
                                },
                                {
                                    "s": 1516062487,
                                    "t": 1587184111138
                                },
                                {
                                    "s": 3231646268,
                                    "t": 1587026458506
                                },
                                {
                                    "s": 1766232148,
                                    "t": 1587026416859
                                },
                                {
                                    "s": 1367411688,
                                    "t": 1586999354228
                                },
                                {
                                    "s": 410982213,
                                    "t": 1586868947953
                                }
                            ],
                            "resourceTitle": "动态：几个关于发音的老问题\n抱拳了[图片]",
                            "resourceId": 12342971345,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12342971345,
                        "commentCount": 31,
                        "likedCount": 207,
                        "shareCount": 2,
                        "threadId": "A_EV_2_12342971345_299973996"
                    }
                },
                {
                    "actName": null,
                    "pendantData": null,
                    "forwardCount": 0,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"\"}",
                    "showTime": 1586697659815,
                    "pics": [
                        {
                            "originUrl": "https://p2.music.126.net/5-PJ4CbR4IPLP52Alg2aVw==/109951164898046817.jpg",
                            "squareUrl": "https://p2.music.126.net/6jnjynovmkD-F_J0qcy-Jg==/109951164898051227.jpg",
                            "rectangleUrl": "https://p2.music.126.net/ty3-S7SD5pA8wTJf8IF3_w==/109951164898052641.jpg",
                            "pcSquareUrl": "https://p2.music.126.net/xijHH6of1UW2jbRK3NqgPA==/109951164898054547.jpg",
                            "pcRectangleUrl": "https://p2.music.126.net/81FOwR-KkQY99waJb1_sPw==/109951164898051644.jpg",
                            "width": 1080,
                            "height": 1440,
                            "format": "jpg"
                        }
                    ],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 0,
                    "extJsonInfo": {
                        "actId": 0,
                        "actIds": [],
                        "uuid": "9ba0a0b298217c366ec455ea48ca9f90",
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "3",
                        "extParams": {}
                    },
                    "eventTime": 1587706747523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": "9ba0a0b298217c366ec455ea48ca9f90",
                    "id": 12410653213,
                    "type": 35,
                    "topEvent": false,
                    "insiteForwardCount": 0,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12410653213_299973996",
                            "resourceInfo": {
                                "id": 12410653213,
                                "userId": 299973996,
                                "name": "动态：[图片]",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 35
                            },
                            "resourceType": 2,
                            "commentCount": 8,
                            "likedCount": 108,
                            "shareCount": 0,
                            "hotCount": 0,
                            "latestLikedUsers": [
                                {
                                    "s": 1291543551,
                                    "t": 1587616697826
                                },
                                {
                                    "s": 1789577287,
                                    "t": 1587428904297
                                },
                                {
                                    "s": 1626190816,
                                    "t": 1587394099349
                                },
                                {
                                    "s": 1394863407,
                                    "t": 1587386673861
                                },
                                {
                                    "s": 61648517,
                                    "t": 1587375726061
                                },
                                {
                                    "s": 439767014,
                                    "t": 1587313610899
                                },
                                {
                                    "s": 1510049164,
                                    "t": 1587117220535
                                },
                                {
                                    "s": 1916450322,
                                    "t": 1587092313298
                                },
                                {
                                    "s": 1479653730,
                                    "t": 1587061375720
                                },
                                {
                                    "s": 2072020636,
                                    "t": 1587047425719
                                }
                            ],
                            "resourceTitle": "动态：[图片]",
                            "resourceId": 12410653213,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12410653213,
                        "commentCount": 8,
                        "likedCount": 108,
                        "shareCount": 0,
                        "threadId": "A_EV_2_12410653213_299973996"
                    }
                },
                {
                    "actName": null,
                    "pendantData": null,
                    "forwardCount": 1,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"都来听我的20岁生日礼物\\n歌词也是我的心情5555\\n我爱RF！！\",\"song\":{\"name\":\"夜奔（Cover：玄觞）\",\"id\":1435206754,\"position\":0,\"alias\":[],\"status\":0,\"fee\":0,\"copyrightId\":0,\"disc\":\"01\",\"no\":1,\"artists\":[{\"name\":\"RincolF\",\"id\":13413017,\"picId\":0,\"img1v1Id\":0,\"briefDesc\":\"\",\"picUrl\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"img1v1Url\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"albumSize\":0,\"alias\":[],\"trans\":\"\",\"musicSize\":0}],\"album\":{\"name\":\"夜奔\",\"id\":86912470,\"type\":\"专辑\",\"size\":0,\"picId\":109951164851844820,\"blurPicUrl\":\"http://p2.music.126.net/qK4XcLzj_Qt7cuwIf_HAQw==/109951164851844820.jpg\",\"companyId\":0,\"pic\":109951164851844820,\"picUrl\":\"http://p2.music.126.net/qK4XcLzj_Qt7cuwIf_HAQw==/109951164851844820.jpg\",\"publishTime\":1585492683244,\"description\":\"\",\"tags\":\"\",\"company\":null,\"briefDesc\":\"\",\"artist\":{\"name\":\"\",\"id\":0,\"picId\":0,\"img1v1Id\":0,\"briefDesc\":\"\",\"picUrl\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"img1v1Url\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"albumSize\":0,\"alias\":[],\"trans\":\"\",\"musicSize\":0},\"songs\":[],\"alias\":[],\"status\":0,\"copyrightId\":0,\"commentThreadId\":\"R_AL_3_86912470\",\"artists\":[{\"name\":\"RincolF\",\"id\":13413017,\"picId\":0,\"img1v1Id\":0,\"briefDesc\":\"\",\"picUrl\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"img1v1Url\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"albumSize\":0,\"alias\":[],\"trans\":\"\",\"musicSize\":0}],\"img80x80\":\"https://p1.music.126.net/qK4XcLzj_Qt7cuwIf_HAQw==/109951164851844820.jpg?param=80x80x1\"},\"starred\":false,\"popularity\":5.0,\"score\":5,\"starredNum\":0,\"duration\":244793,\"playedNum\":0,\"dayPlays\":0,\"hearTime\":0,\"ringtone\":\"\",\"crbt\":null,\"audition\":null,\"copyFrom\":\"\",\"commentThreadId\":\"R_SO_4_1435206754\",\"rtUrl\":null,\"ftype\":0,\"rtUrls\":[],\"copyright\":0,\"hMusic\":{\"name\":null,\"id\":4715483868,\"size\":9793872,\"extension\":\"mp3\",\"sr\":44100,\"dfsId\":0,\"bitrate\":320000,\"playTime\":244793,\"volumeDelta\":-40841.0},\"mMusic\":{\"name\":null,\"id\":4715483869,\"size\":5876341,\"extension\":\"mp3\",\"sr\":44100,\"dfsId\":0,\"bitrate\":192000,\"playTime\":244793,\"volumeDelta\":-38247.0},\"lMusic\":{\"name\":null,\"id\":4715483870,\"size\":3917575,\"extension\":\"mp3\",\"sr\":44100,\"dfsId\":0,\"bitrate\":128000,\"playTime\":244793,\"volumeDelta\":-36579.0},\"bMusic\":{\"name\":null,\"id\":4715483870,\"size\":3917575,\"extension\":\"mp3\",\"sr\":44100,\"dfsId\":0,\"bitrate\":128000,\"playTime\":244793,\"volumeDelta\":-36579.0},\"rtype\":0,\"rurl\":null,\"mvid\":0,\"mp3Url\":null}}",
                    "showTime": 1585497459101,
                    "pics": [],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 0,
                    "extJsonInfo": {
                        "actId": 0,
                        "actIds": [],
                        "uuid": null,
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "3",
                        "extParams": {}
                    },
                    "eventTime": 1587706746523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": null,
                    "id": 12355192382,
                    "type": 18,
                    "topEvent": false,
                    "insiteForwardCount": 1,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12355192382_299973996",
                            "resourceInfo": {
                                "id": 12355192382,
                                "userId": 299973996,
                                "name": "分享单曲：「夜奔（Cover：玄觞）」",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 18
                            },
                            "resourceType": 2,
                            "commentCount": 37,
                            "likedCount": 169,
                            "shareCount": 1,
                            "hotCount": 10,
                            "latestLikedUsers": [
                                {
                                    "s": 618184504,
                                    "t": 1587702170782
                                },
                                {
                                    "s": 1835412212,
                                    "t": 1587630160583
                                },
                                {
                                    "s": 2072020636,
                                    "t": 1587610747756
                                },
                                {
                                    "s": 1897451997,
                                    "t": 1587471708417
                                },
                                {
                                    "s": 449968741,
                                    "t": 1587385143158
                                },
                                {
                                    "s": 439767014,
                                    "t": 1587313632936
                                },
                                {
                                    "s": 1291543551,
                                    "t": 1587295769124
                                },
                                {
                                    "s": 391176315,
                                    "t": 1587195072352
                                },
                                {
                                    "s": 529681458,
                                    "t": 1587022220429
                                },
                                {
                                    "s": 410982213,
                                    "t": 1586868951842
                                }
                            ],
                            "resourceTitle": "分享单曲：「夜奔（Cover：玄觞）」",
                            "resourceId": 12355192382,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12355192382,
                        "commentCount": 37,
                        "likedCount": 169,
                        "shareCount": 1,
                        "threadId": "A_EV_2_12355192382_299973996"
                    }
                },
                {
                    "actName": null,
                    "pendantData": null,
                    "forwardCount": 0,
                    "lotteryEventData": null,
                    "tailMark": {
                        "markTitle": "长泽陵川",
                        "markType": "circle",
                        "markResourceId": "010008906479A14C490AD5F7F6FB31865179",
                        "markOrpheusUrl": "orpheus://nm/circle/mainPage?circleId=010008906479A14C490AD5F7F6FB31865179",
                        "circle": {
                            "imageUrl": "http://p5.music.126.net/TlTfF2pN0ccXOxlTXrlczg==/109951163458591317",
                            "postCount": "-2",
                            "member": "386"
                        }
                    },
                    "json": "{\"msg\":\"太用心太好听啦！！戴耳机各种和声听着太美了\\n炫耀生日礼物x2\\n今天打扰大家了哈哈我好烦\\n但是真的很好听！！\",\"song\":{\"name\":\"暖かい生き物（Cover：初音ミク）\",\"id\":1435005226,\"position\":0,\"alias\":[],\"status\":0,\"fee\":0,\"copyrightId\":0,\"disc\":\"01\",\"no\":1,\"artists\":[{\"name\":\"沫绵もめん\",\"id\":30378163,\"picId\":0,\"img1v1Id\":0,\"briefDesc\":\"\",\"picUrl\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"img1v1Url\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"albumSize\":0,\"alias\":[],\"trans\":\"\",\"musicSize\":0}],\"album\":{\"name\":\"暖かい生き物\",\"id\":86796053,\"type\":\"专辑\",\"size\":0,\"picId\":109951164850322467,\"blurPicUrl\":\"http://p2.music.126.net/nmxpt1fWtiCPGrdeyMvKMw==/109951164850322467.jpg\",\"companyId\":0,\"pic\":109951164850322467,\"picUrl\":\"http://p2.music.126.net/nmxpt1fWtiCPGrdeyMvKMw==/109951164850322467.jpg\",\"publishTime\":1585497600000,\"description\":\"\",\"tags\":\"\",\"company\":null,\"briefDesc\":\"\",\"artist\":{\"name\":\"\",\"id\":0,\"picId\":0,\"img1v1Id\":0,\"briefDesc\":\"\",\"picUrl\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"img1v1Url\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"albumSize\":0,\"alias\":[],\"trans\":\"\",\"musicSize\":0},\"songs\":[],\"alias\":[],\"status\":0,\"copyrightId\":0,\"commentThreadId\":\"R_AL_3_86796053\",\"artists\":[{\"name\":\"沫绵もめん\",\"id\":30378163,\"picId\":0,\"img1v1Id\":0,\"briefDesc\":\"\",\"picUrl\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"img1v1Url\":\"http://p2.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg\",\"albumSize\":0,\"alias\":[],\"trans\":\"\",\"musicSize\":0}],\"img80x80\":\"https://p1.music.126.net/nmxpt1fWtiCPGrdeyMvKMw==/109951164850322467.jpg?param=80x80x1\"},\"starred\":false,\"popularity\":5.0,\"score\":5,\"starredNum\":0,\"duration\":224473,\"playedNum\":0,\"dayPlays\":0,\"hearTime\":0,\"ringtone\":\"\",\"crbt\":null,\"audition\":null,\"copyFrom\":\"\",\"commentThreadId\":\"R_SO_4_1435005226\",\"rtUrl\":null,\"ftype\":0,\"rtUrls\":[],\"copyright\":0,\"hMusic\":{\"name\":null,\"id\":4716136912,\"size\":8981987,\"extension\":\"mp3\",\"sr\":44100,\"dfsId\":0,\"bitrate\":320000,\"playTime\":224473,\"volumeDelta\":-43645.0},\"mMusic\":{\"name\":null,\"id\":4716136913,\"size\":5389209,\"extension\":\"mp3\",\"sr\":44100,\"dfsId\":0,\"bitrate\":192000,\"playTime\":224473,\"volumeDelta\":-41027.0},\"lMusic\":{\"name\":null,\"id\":4716136914,\"size\":3592821,\"extension\":\"mp3\",\"sr\":44100,\"dfsId\":0,\"bitrate\":128000,\"playTime\":224473,\"volumeDelta\":-39281.0},\"bMusic\":{\"name\":null,\"id\":4716136914,\"size\":3592821,\"extension\":\"mp3\",\"sr\":44100,\"dfsId\":0,\"bitrate\":128000,\"playTime\":224473,\"volumeDelta\":-39281.0},\"rtype\":0,\"rurl\":null,\"mvid\":0,\"mp3Url\":null}}",
                    "showTime": 1585532848824,
                    "pics": [],
                    "tmplId": 0,
                    "expireTime": 0,
                    "rcmdInfo": null,
                    "actId": 0,
                    "extJsonInfo": {
                        "actId": 0,
                        "actIds": [],
                        "uuid": null,
                        "extType": "",
                        "extId": "",
                        "circleId": "010008906479A14C490AD5F7F6FB31865179",
                        "circlePubType": "3",
                        "extParams": {}
                    },
                    "eventTime": 1587706745523,
                    "user": {
                        "defaultAvatar": false,
                        "province": 500000,
                        "authStatus": 1,
                        "followed": true,
                        "avatarUrl": "http://p1.music.126.net/l-YPKtKHtnSPdUEggJNneQ==/109951164847655982.jpg",
                        "accountStatus": 0,
                        "gender": 2,
                        "city": 500101,
                        "birthday": 954345600000,
                        "userId": 299973996,
                        "userType": 4,
                        "nickname": "燹九",
                        "signature": "无妄",
                        "description": "",
                        "detailDescription": "",
                        "avatarImgId": 109951164847655980,
                        "backgroundImgId": 109951164156380100,
                        "backgroundUrl": "http://p1.music.126.net/oNhmjIZZlITj4k2NE_AD2g==/109951164156380102.jpg",
                        "authority": 0,
                        "mutual": false,
                        "expertTags": null,
                        "experts": null,
                        "djStatus": 10,
                        "vipType": 0,
                        "remarkName": null,
                        "backgroundImgIdStr": "109951164156380102",
                        "avatarImgIdStr": "109951164847655982",
                        "urlAnalyze": false,
                        "vipRights": null,
                        "avatarImgId_str": "109951164847655982",
                        "followeds": 27137
                    },
                    "uuid": null,
                    "id": 12356002307,
                    "type": 18,
                    "topEvent": false,
                    "insiteForwardCount": 0,
                    "info": {
                        "commentThread": {
                            "id": "A_EV_2_12356002307_299973996",
                            "resourceInfo": {
                                "id": 12356002307,
                                "userId": 299973996,
                                "name": "分享单曲：「暖かい生き物（Cover：初音ミク）」",
                                "imgUrl": null,
                                "creator": null,
                                "eventType": 18
                            },
                            "resourceType": 2,
                            "commentCount": 19,
                            "likedCount": 100,
                            "shareCount": 0,
                            "hotCount": 3,
                            "latestLikedUsers": [
                                {
                                    "s": 439767014,
                                    "t": 1587313631417
                                },
                                {
                                    "s": 492768506,
                                    "t": 1587187582991
                                },
                                {
                                    "s": 618184504,
                                    "t": 1587098101395
                                },
                                {
                                    "s": 1662439609,
                                    "t": 1587042247718
                                },
                                {
                                    "s": 529681458,
                                    "t": 1587022212691
                                },
                                {
                                    "s": 410982213,
                                    "t": 1586868958789
                                },
                                {
                                    "s": 1450313027,
                                    "t": 1586837031575
                                },
                                {
                                    "s": 349662404,
                                    "t": 1586788700369
                                },
                                {
                                    "s": 497707345,
                                    "t": 1586478985428
                                },
                                {
                                    "s": 1427513018,
                                    "t": 1586362964749
                                }
                            ],
                            "resourceTitle": "分享单曲：「暖かい生き物（Cover：初音ミク）」",
                            "resourceId": 12356002307,
                            "resourceOwnerId": 299973996
                        },
                        "latestLikedUsers": null,
                        "liked": false,
                        "comments": null,
                        "resourceType": 2,
                        "resourceId": 12356002307,
                        "commentCount": 19,
                        "likedCount": 100,
                        "shareCount": 0,
                        "threadId": "A_EV_2_12356002307_299973996"
                    }
                }
            ],
        }
    }


    render() {
        return (
            <div className="friends">

                <div className="title">
                    <h3>Friends</h3>
                    <button type="button" className="btn btn-primary">发动态</button>
                </div>
                <DynamicState dynamicState={this.state.dynamicState} />
            </div>
        )
    }
}


function DynamicState(props: any): any {
    return props.dynamicState.map((item: any, index: number) => {
        return <section key={index} className="dynamicState">

            <div className="userMessage">
                <img src={item.user.avatarUrl} alt="" />
                <div className="userName">

                    <p>
                        <span>{item.user.nickname}</span>
                        <span>发布动态</span>
                    </p>
                    <p>
                        {/* 发布时间 */}
                        {item.eventTime}
                    </p>

                    
                </div>
            </div>
                
            <div className="content">
                <p>{item.info.commentThread.resourceInfo.name}</p>

            </div>


        </section>
    })

}