import React from "react";

import { MusicSongList } from "../../components/MusicComponent";


export default class songList extends React.Component<any,any> {


    static defaultProps = {
        data: {
            coverImgUrl: "",        // 歌单的封面
            name: "",               // 歌单的名字
            id: ""                  // 歌单的Id
        }
    }

    constructor(props: any){
        super(props);

    }


    render(){
        return (
            <MusicSongList />
        )   
    }
}