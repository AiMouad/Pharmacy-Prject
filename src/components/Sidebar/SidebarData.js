import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';

export  const SidebarData = [
    {
        title : "Home",
        icon : <HomeIcon/> ,
        link :"/home",
    },
    
    {
        title : "Mail",
        icon : <EmailIcon/> ,
        link :"/mail",
    },

    {
        title : "Notification",
        icon : <NotificationsNoneIcon/> ,
        link :"../Notification/Notification.js",
    }
];

  