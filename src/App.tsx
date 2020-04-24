import React from "react";
import { HashRouter, Route, NavLink, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
import "./App.scss";

import recommendMusic from "./pages/recommendMusic/recommendMusic";
import personalFM from "./pages/personalFM/personalFM";
import video from "./pages/video/video";
import liveStreaming from "./pages/liveStreaming/liveStreaming";
import friends from "./pages/friends/friends";
import favoriteMusic from "./pages/favoriteMusic/favoriteMusic";
import songList from "./pages/songList/songList";


class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      themeColor: "primary",
      list: [
        {
          name: "recommendMusic",
          icon: "Music-note-beamed",
          content: "推荐音乐",
          select: true,
        },
        {
          name: "personalFM",
          icon: "Mic",
          content: "私人FM",
          select: false,
        },
        {
          name: "video",
          icon: "Camera-video",
          content: "视频",
          select: false,
        },
        {
          name: "liveStreaming",
          icon: "Tv",
          content: "直播",
          select: false,
        },
        {
          name: "friends",
          icon: "people",
          content: "朋友",
          select: false,
        },
        {
          name: "favoriteMusic",
          icon: "Heart",
          content: "喜欢的音乐",
          select: false,
        },
        {
          name: "songList",
          icon: "Music-note-list",
          content: "我的歌单",
          select: false,
        },


      ]
    }

  }





  render() {
    return (

      <div className="App">
        <HashRouter>
          <nav className={`navbar navbar-dark bg-${this.state.themeColor}`}>
            <a className="navbar-brand" href="#">基佬云音乐</a>
          </nav>

          <div className="navList">
            <ul>
              <ListLink list={this.state.list} />
            </ul>
          </div>

          <div className="column">
            <Redirect path="/" to="/recommendMusic" />
            <ListColumn list={this.state.list} />
          </div>

        </HashRouter>
      </div>
    );
  }
}





// 列表
function ListLink(props: any) {

  let clickActive = (select: boolean, index: number) => {
    props.navList.map((item: any) => {
      return item.select = false;
    })
    props.navList[index].select = true;
    props.edit("navList", props.navList)

  }


  return props.list.map((item: any,index:number) => {
    return <li key={item.content} style={{ "borderLeftWidth": item.select ? "7px" : "0" }} >
      <NavLink to={"/" + item.name}>
        <img src={process.env.PUBLIC_URL + `/icons/${item.icon}.svg`} alt="" width="20" height="20" title={item.content} />
        <span>{item.content}</span>
      </NavLink>
    </li>
  })
}

// 对应的列表
function ListColumn(props: any) {
  return props.list.map((item: any) => {
    
    return <Route key={item.name} path={"/" + item.name} component={personalFM} />
  })
}


export default App;
