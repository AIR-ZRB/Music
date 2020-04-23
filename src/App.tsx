import React from "react";
import { HashRouter, Route, NavLink, Redirect } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";
// import ""
import "./App.scss";


class App extends React.Component<any, any> {

  constructor(props: any) {
    super(props);

    this.state = {
      themeColor: "primary",
      list: [
        {
          icon: "Music-note-beamed",
          content: "推荐音乐"
        },
        {
          icon: "Mic",
          content: "私人FM"
        },
        {
          icon: "Camera-video",
          content: "视频"
        },
        {
          icon: "Tv",
          content: "直播"
        },
        {
          icon: "people",
          content: "朋友"
        },
        {
          icon: "Heart",
          content: "喜欢的音乐"
        },
        {
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
            <ListColumn list={this.state.list} />
          </div>

        </HashRouter>
      </div>
      // </HashRouter>
    );
  }
}








function ListLink(props: any) {
  return props.list.map(item => {
    return <li key={item.icon}>
      <NavLink to={"/"+item.content}>
        <img src={process.env.PUBLIC_URL + `/icons/${item.icon}.svg`} alt="" width="20" height="20" title={item.content} />
        <span>{item.content}</span>
      </NavLink>
    </li>
  })
}

function ListColumn(props: any){
    return props.list.map(item =>{
      return <Route component={item.icon}></Route>
    })
}










export default App;
