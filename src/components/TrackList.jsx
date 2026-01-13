import React from 'react';
import Track from './Track';


function TrackList(props) {
    
    return (
        <div className='TrackList'>

            {props.tracks.map(track => <Track track={track} key={track.id} />)}



        
        </div>
    );
}


export default TrackList;