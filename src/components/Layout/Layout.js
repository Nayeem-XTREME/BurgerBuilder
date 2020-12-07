import React from 'react'
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

export default function Layout(props) {
    return (
        <div>
            <Toolbar/>
            <SideDrawer/>
            <main className = {classes.Content}>
                {props.children}
            </main>
        </div>
    )
}
