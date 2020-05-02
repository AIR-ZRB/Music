
import React from "react";
import "./recommendMusic.scss";


import { requestData, NavList } from "../../components/MusicComponent";


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
              
            ],
            banner: [

            ]
        }
    }


    setData(editName: any, step: any = 11) {
        this.setState({
            editName: step
        })
    }



    // 获取每日歌单请求
    requestTodaySongList = (): void => {
        let url = "http://localhost:4000/recommend/resource";
        requestData(url)
            .then((data: any) => {
                console.log(data.recommend);
                this.setState({
                    songList: data.recommend
                })
            })
    }

    // 获取banner图
    requestBanner = (): void => {
        let url = "http://localhost:4000/banner";
        requestData(url)
            .then((data: any)=>{
                this.setState({
                    banner: data.banners
                })
               
            })
    }


    componentDidMount() {
        this.requestTodaySongList();   // 需要登录
        this.requestBanner();

    }




    render() {
        return (
            <div className="recommendMusic">

                <NavList navList={this.state.navList} edit={this.setData.bind(this)} />


                <div className="banner">
                    <Banner banner={this.state.banner} />
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
    return props.songList.map((item: any, index: number) => {
        return <li className="list" style={{ backgroundImage: `url(${item.picUrl})` }} key={item.id}>
            <span>{item.name}</span>
        </li>

    })
}

// Banner
function Banner(props: any) {
    return props.banner.map((item: any) => {
        return <img src={item.imageUrl} alt="" key={item.imageUrl}/>
    })
}








