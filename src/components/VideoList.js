import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map(video => {

        let id = video.id.videoId?? video.id.channelId;

        return (
            <VideoItem
                key={id}
                onVideoSelect={onVideoSelect}
                video={video}
            />
        );
    });

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    );
};

export default VideoList;