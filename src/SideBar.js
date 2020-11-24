import React from 'react'
import {  FaTimes} from 'react-icons/fa'
import {links, social} from './data'
import logo192 from './logo192.png'
import {useGlobalContext} from './context'

const SideBar = () => {
    const {isSideBarOpen, closeSideBar} = useGlobalContext()
    return (
    <aside className={`${isSideBarOpen ? 'side-bar show-sideBar' : 'side-bar'}`}>
        <div className="side-bar-header">
            <img src={logo192} alt={logo192} />
            <button className="close-sideBar" onClick={()=> closeSideBar()}>
                <FaTimes />
            </button>
        </div>
        <ul className="links">
            {links.map(link => {
                const {id, url, text, icon} = link
                return (
                <li key={id}>
                    <a href={url}>
                        {icon}
                        {text}
                    </a>
                </li>
                )
            })}
        </ul>
        <ul className="social-icon">
            {social.map(soc => {
                const {id, url, icon} = soc
                return (
                <li key={id}>
                    <a href={url}>
                        {icon}
                    </a>
                </li>
                )
            })}
        </ul>
    </aside>
    )
}

export default SideBar