import React from "react";
import "./video.scss";


import { connect } from "react-redux";
import { requestData } from "../../components/MusicComponent";

class video extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
        this.state = {
            data: [
                {
                    "id": 10930880,
                    "cover": "http://p1.music.126.net/88KeXDDrFdXFJQnshr9k-A==/109951164931809846.jpg",
                    "name": "盟誓",
                    "playCount": 11126,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "林坤信",
                    "artistId": 4119,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 4119,
                            "name": "林坤信"
                        }
                    ]
                },
                {
                    "id": 10932417,
                    "cover": "http://p1.music.126.net/I9BasOaWbj49a7BWXP4vrQ==/109951164945868911.jpg",
                    "name": "喉咙唱的沙哑",
                    "playCount": 74374,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "枯木逢春",
                    "artistId": 30284835,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 30284835,
                            "name": "枯木逢春"
                        }
                    ]
                },
                {
                    "id": 10932430,
                    "cover": "http://p1.music.126.net/76DwDYLasBa2gqU4O2sqjA==/109951164946164843.jpg",
                    "name": "[LiveONE] 우리 만남이(But I Will Miss You) 完整版中字",
                    "playCount": 2579,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "Paul Kim",
                    "artistId": 1137437,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 1137437,
                            "name": "Paul Kim"
                        }
                    ]
                },
                {
                    "id": 10932428,
                    "cover": "http://p1.music.126.net/ISyi26oTz8RmzihD5NopNg==/109951164946112459.jpg",
                    "name": "BAZOOKA!",
                    "playCount": 30523,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "公园少女",
                    "artistId": 29490232,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 29490232,
                            "name": "公园少女"
                        }
                    ]
                },
                {
                    "id": 10931844,
                    "cover": "http://p1.music.126.net/RX7EWDp8b1xW-cw75vsPFw==/109951164942994928.jpg",
                    "name": "[Look Me Up] 뱉어 (Spit it out) 中字",
                    "playCount": 11119,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "Solar",
                    "artistId": 1081079,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 1081079,
                            "name": "Solar"
                        }
                    ]
                },
                {
                    "id": 10931756,
                    "cover": "http://p1.music.126.net/V-vFYmoyguzfrl9VnIlIqg==/109951164940913004.jpg",
                    "name": "After (English Ver.)",
                    "playCount": 18196,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "蔡文静",
                    "artistId": 7395,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 7395,
                            "name": "蔡文静"
                        }
                    ]
                },
                {
                    "id": 10931722,
                    "cover": "http://p1.music.126.net/efkhC5JxYFfg_mVrDrC-Nw==/109951164940436332.jpg",
                    "name": "想你了",
                    "playCount": 38957,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "光良",
                    "artistId": 2842,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 2842,
                            "name": "光良"
                        }
                    ],
                    "transNames": [
                        "Thinking of You"
                    ]
                },
                {
                    "id": 10930888,
                    "cover": "http://p1.music.126.net/2Ep5IIIyWhKhcrdoGNOOfA==/109951164931953622.jpg",
                    "name": "倩女幽魂 (电影《倩女幽魂：人间情》主题曲)",
                    "playCount": 51920,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "阿云嘎",
                    "artistId": 12200490,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 12200490,
                            "name": "阿云嘎"
                        }
                    ]
                },
                {
                    "id": 10931235,
                    "cover": "http://p1.music.126.net/JuoKyc8ueUq87cI5ioAJug==/109951164924857184.jpg",
                    "name": "余情幽梦",
                    "playCount": 12152,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "仙剑奇侠传",
                    "artistId": 33956492,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 33956492,
                            "name": "仙剑奇侠传"
                        }
                    ]
                },
                {
                    "id": 10931367,
                    "cover": "http://p1.music.126.net/KLXSuUAMhIssMY5inCplhA==/109951164928601966.jpg",
                    "name": "时间教会我们的事",
                    "playCount": 13024,
                    "briefDesc": null,
                    "desc": null,
                    "artistName": "魏妙如",
                    "artistId": 1178023,
                    "duration": 0,
                    "mark": 0,
                    "subed": false,
                    "artists": [
                        {
                            "id": 1178023,
                            "name": "魏妙如"
                        }
                    ]
                }
            ]
        }
    }


    // 当组件被加载时
    componentWillMount() {
        this.requestMV(20);
        return true;
    }



    requestMV = (quantity: number): void => {
        let url = `http://localhost:4000/mv/first?limit=${quantity}`
        requestData(url)
            .then((data: any) => {
                this.setState({
                    data: data.data
                })
                // console.log(dd);
            })
    }


    render() {
        return (
            <div className="video">


                {/* <section className="videoList">
                    <img src="https://pic1.zhimg.com/80/v2-cc4f66fc089be551f5509d063c96deec_720w.jpg" alt="" />
                    <div className="video-describe">
                        <p>樱桃小丸子</p>
                        <p>by 咕咕咕咕</p>
                    </div>
                </section> */}

                <MVList data={this.state.data} />
            </div>
        )
    }
}


function MVList(props: any) {
    return (
        props.data.map((item: any) => {
            return <section className="videoList">
                <img src={item.cover} alt="" />
                <div className="video-describe">
                    <p title={item.name}>{item.name}</p>
                    <p>{item.artistName}</p>
                </div>
            </section>
        })
    )
}




const mapStateToProps = (state: any) => {
    return {
        store: state
    }
}


export default connect(mapStateToProps)(video);