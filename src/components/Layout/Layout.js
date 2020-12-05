import React from 'react'
import classes from './Layout.module.css';

export default function Layout(props) {
    return (
        <div>
            <div>
                Toolbar
                Sidebar
                BackDrop
            </div>

            <main className = {classes.Content}>
                {props.children}
            </main>
        </div>
    )
}
