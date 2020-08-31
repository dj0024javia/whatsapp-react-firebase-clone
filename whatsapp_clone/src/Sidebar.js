import React from 'react'
import './Sidebar.css'
import SettingsIcon from '@material-ui/icons/Settings';
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import Sidebarchat from './Sidebarchat';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar/>
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
           
            <div className='sidebar__search'>
                <div className="sidebar__searchContainer">
                    <SearchIcon />
                    <input placeholder="Search or start new chat" type="text" className="sidebar__input"/>
                </div>
            
            </div>

            <div className='sidebar__chats'>
                <Sidebarchat addNewChat/>
                <Sidebarchat />
                <Sidebarchat />

            </div>
        </div>
    )
}

export default Sidebar
