import React from "react";

import { MusicSongList,AudioComponent } from "../../components/MusicComponent";


export default class songList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {}
    }




    render() {
        return (
                <MusicSongList songListId={this.props.router.location.search.substr(4)} />

        )
    }
}