import React from "react";
import { HashRouter, Route, NavLink, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
// import ""
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
          content: "推荐音乐"
        },
        {
          name: "personalFM",
          icon: "Mic",
          content: "私人FM"
        },
        {
          name: "video",
          icon: "Camera-video",
          content: "视频"
        },
        {
          name: "liveStreaming",
          icon: "Tv",
          content: "直播"
        },
        {
          name: "friends",
          icon: "people",
          content: "朋友"
        },
        {
          name: "favoriteMusic",
          icon: "Heart",
          content: "喜欢的音乐"
        },
        {
          name: "songList",
          icon: "Music-note-list",
          content: "我的歌单"
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








function ListLink(props: any) {
  return props.list.map((item:any) => {
    return <li key={item.content}>
      <NavLink to={"/"+item.name}>
        <img src={process.env.PUBLIC_URL + `/icons/${item.icon}.svg`} alt="" width="20" height="20" title={item.content} />
        <span>{item.content}</span>
      </NavLink>
    </li>
  })
}

function ListColumn(props: any){
    return props.list.map((item:any) =>{
      console.log("??")
      return <Route key={item.name}  path={"/"+item.name} component={item.name} />
    })
}










export default App;
