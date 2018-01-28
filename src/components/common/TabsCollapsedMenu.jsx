import React from 'react';
import { Link } from 'react-router-dom';

const TabsCollapsedMenu = ({onClick, display, render}) => {
    
    const renderContent = () => {
        if(render === 'header') {
            return (
                <ul className='innerTabs'>
                    <li onClick={onClick}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li onClick={onClick}>
                        <Link to='/architecture'>Architecture</Link>
                    </li>
                    <li onClick={onClick}>
                        <Link to='/interior'>Interior</Link>
                    </li>
                    <li onClick={onClick}>
                        <Link to='/about'>About</Link>
                    </li>
                    <li onClick={onClick}>
                        <Link to='/contacts'>Contacts</Link>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul className='innerTabs'>
                    <li onClick={onClick}>
                        <Link to='#'>facebook</Link>
                    </li>
                    <li onClick={onClick}>
                        <Link to='#'>instagram</Link>
                    </li> 
                    <li onClick={onClick}>
                        <Link to='#'>behance</Link>
                    </li> 
                    <li onClick={onClick}>
                        <Link to='#'>pinterest</Link>
                    </li> 
                </ul>
            );
        } 
    }

    return(
        
        <div className='headerTabsCollapsedContainer' style={{ display: display}}>
            {renderContent()}
        </div>
    );

}

export default TabsCollapsedMenu;