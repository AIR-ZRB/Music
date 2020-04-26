import React from "react";

import { MusicSongList } from "../../components/MusicComponent";


export default class songList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);

    }


    render() {
        
        return (
            <MusicSongList songListId={this.props.location.search.substr(4)}/>
        )
    }
}