import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ScheduleIcon from '@material-ui/icons/Schedule';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRow selected Icon={HomeIcon} title='Home' />
            <SidebarRow Icon={WhatshotIcon} title='Trending' />
            <SidebarRow papa Icon={SubscriptionsIcon} title='Subscription' />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title='Library' />
            <SidebarRow Icon={HistoryIcon} title='History' />
            <SidebarRow Icon={OndemandVideoIcon} title='Your videos' />
            <SidebarRow Icon={ScheduleIcon} title='Watch later' />
            <SidebarRow papa Icon={ThumbUpIcon} title='Liked videos' />
            <SidebarRow Icon={ExpandMoreIcon} title='Show More' />
            <hr />
        </div>
    )
}

export default Sidebar
