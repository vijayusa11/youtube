import React from 'react'
import './SidebarRow.css'

function SidebarRow({ selected, papa, Icon, title }) {
    return (
        <div className={`sidebarRow ${selected && 'selected'} ${papa && 'papa'}`}>
            <Icon className={`sidebarRow__icon ${selected && 'selected'}`}/>
            <h2 className='sidebarRow__title'>{title}</h2>
            
        </div>
    )
}

export default SidebarRow
