
import React from "react";
import "./recommendMusic.scss";

export default class recommendMusic extends React.Component<any, any> {

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
                    songListName: "推荐歌单",
                    list: [
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                    ]
                },
                {
                    songListName: "推荐MV",
                    list: [
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                        { listImage: "", describe: "今日歌单" },
                    ]
                },

            ]
        }
    }


    setData(editName: any, step: any = 11) {
        this.setState({
            editName: step
        })
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
                    <img src="https://img1.gamersky.com/upimg/users/2020/04/24/small_202004240024039167.jpg" alt="" height="300" />
                    <img src="https://img1.gamersky.com/upimg/users/2020/04/24/small_202004240024263042.jpg" alt="" height="300" />
                </div>

                <SongList songList={this.state.songList} />



            </div>
        )
    }
}


// 顶部导航组件
function NavList(props: any) {
    let clickActive = (select: boolean, index: number) => {
        props.navList.map((item: any) => {
            return item.select = false;
        })
        props.navList[index].select = true;
        props.edit("navList", props.navList)

    }

    return props.navList.map(((item: any, index: number) => {
        return <li key={item.name} onClick={() => clickActive(item.select, index)} style={{ "borderBottomWidth": item.select ? "2px" : "0px" }}><a>{item.name}</a></li>
    }))
}




function SongList(props: any) {
    return props.songList.map((item: any) => {
        return <div className="songList" key={item.songListName}>
            <p>{item.songListName}</p>
            <ul>
                {item.list.map((element: any,index: number) => {
                    return <li className="list" key={index}>
                        <span>{element.describe}</span>
                    </li>
                })}
            </ul>
        </div>
    })
}









