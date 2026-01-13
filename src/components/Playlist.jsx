import React from 'react';
import TrackList from './TrackList'

function PlayList() {

    return (
        <div className='Playlist'>
            <input defaultValue={"New Playlist"} />
            <TrackList />
            <button className='Playlist-save' type='submit'>Save</button>
        </div>
    );
}


export default PlayList;