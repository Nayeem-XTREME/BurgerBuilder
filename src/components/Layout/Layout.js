import React from 'react'
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar'

export default function Layout(props) {
    return (
        <div>
            <Toolbar/>

            <main className = {classes.Content}>
                {props.children}
            </main>
        </div>
    )
}
