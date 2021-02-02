import { Avatar } from '@material-ui/core';
import React from 'react';
import './ChannelRow.css';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';

function ChannelRow({  image, channel, verified, subs, noOfVideos, description }) {
    return (
        <div className='channelRow'>
            <Avatar src={image} alt='vijay' className='channelRow__logo' />
            <div className='channelRow__text'>
                <h4>{channel} {verified && <CheckCircleOutlineIcon />}</h4>
                <p>{subs} subscribers • {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ChannelRow
