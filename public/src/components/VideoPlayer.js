import React from 'react';

const VideoPlayer = ({ url }) => {
    return (
        <div className="video-container my-4" style={{ maxWidth: '100%', margin:'0 auto'}}>
            <video width="100%" height="auto" controls>
                <source src={url} type="video/mp4" />
                Browser doesnt support video tag.
            </video>
        </div>
    );
};

export default VideoPlayer;