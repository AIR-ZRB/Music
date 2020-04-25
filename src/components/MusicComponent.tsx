import React from "react"

import "./components.scss";


// 音乐列表（歌单使用）
export let MusicList = (props: any): any => {
    return <div className="musicList">
        <ul>
            <li></li>
            <li>操作</li>
            <li>音乐标题</li>
            <li>歌手</li>
            <li>专辑</li>
            <li>时长</li>
        </ul>

        {props.musicList.map((item: any, index: number) => {
            return <ul key={`${item.musicList}+${index}`}>
                <li>01</li>
                <li>爱心</li>
                <li>{item.musicName}</li>
                <li>{item.singer}</li>
                <li>{item.album}</li>
                <li>{item.time}</li>
            </ul>

        })}
    </div>

}

// 请求数据
export let requestData = (url: string, params?: object): any => {
    return new Promise((reject: any, resolve: any) => {
        fetch(url)
            .then((res: any) => {
                return res.json();
            })
            .then((data: any) => {
                data.code === 200 ? reject(data) : resolve(data.msg);
            })
    })
}

// 网易云的经典导航栏

export let NavList = (props: any): any => {
    // 点击切换，需要传入一个方法来修改父组件的state
    let clickActive = (select: boolean, index: number) => {
        props.navList.map((item: any) => {
            return item.select = false;
        })
        props.navList[index].select = true;
        props.edit("navList", props.navList)

    }
    return <div className="navigation">
        <ul>
            {props.navList.map(((item: any, index: number) => {
                return <li key={item.name} onClick={() => clickActive(item.select, index)} style={{ "borderBottomWidth": item.select ? "2px" : "0px" }}><a>{item.name}</a></li>
            }))}
        </ul>
    </div>

}





// 歌单列表
export class MusicSongList extends React.Component<any, any> {
    static defaultProps = {
        data: {
            coverImgUrl: "https://p2.music.126.net/apsoAvOWvOf--D1vfNl7Pg==/3296335861568246.jpg",        // 歌单的封面
            name: "Skyblue_Air喜欢的音乐",               // 歌单的名字
            id: "471267581",                  // 歌单的Id
            avatarUrl: "http://p1.music.126.net/56_Km5Vsr0S8cIgiI-C0Mw==/109951164938014307.jpg",
            nickname: "Skyblue_Air",
            musicList: [
                {
                    like: true,
                    musicName: "好像爱这个世界",
                    singer: "华晨宇",
                    album: "歌手·当打之年 第9期",
                    time: "04:22"
                }
            ],
        }
    }


    constructor(props: any) {
        super(props);
        this.state = {
            navList: [
                {
                    name: "歌曲列表",
                    urlName: "songLis",
                    select: true
                },
                {
                    name: "评论",
                    urlName: "comment",
                    select: false
                },
                {
                    name: "收藏者",
                    urlName: "collect",
                    select: false
                },
            ]
        }
    }



    render() {
        return (
            <div className="mySongList">
                <div className="listMessage">
                    <section className="picture">
                        <img src={this.props.data.coverImgUrl} alt="" className="coverImg" />
                    </section>
                    <section className="message">
                        <h3>{this.props.data.name}</h3>


                        <div className="listCreate">
                            <img src={this.props.data.avatarUrl} alt="" className="avatar" />
                            <p>
                                <span className="user">{this.props.data.nickname}</span>
                                <span className="createTime">创建时间：2016-1-1</span>
                            </p>
                        </div>


                        <section className="btn-ctrl">
                            <button type="button" className="btn btn-primary">播放全部</button>
                            <button type="button" className="btn btn-light">收藏</button>
                            <button type="button" className="btn btn-light">分享</button>
                            <button type="button" className="btn btn-light">下载</button>
                        </section>
                    </section>
                </div>

                <div>
                    <NavList navList={this.state.navList} />
                    <MusicList musicList={this.props.data.musicList} />
                </div>
            </div>
        )
    }
}


