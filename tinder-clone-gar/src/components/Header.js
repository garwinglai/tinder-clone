import React from 'react';
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { QuestionAnswer } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon style={{ fontSize: 40 }} />
            </IconButton>

            <img src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png" alt="tinder_logo" />
            <IconButton>
                <QuestionAnswer style={{ fontSize: 40 }} />
            </IconButton>

        </div>
    )
}

export default Header
