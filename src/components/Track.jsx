import React from "react";

function Track (props) {

    return(
        <div className='Track'>
            <div className="Track-information">
            <h4>{props.track.name}</h4>
            <p>{props.track.artist} | {props.track.album}</p>
            </div>
            <button className='Track-action'>+</button>
        </div>
    );
}

export default Track;