import React, {useState, useRef} from 'react';
import {Menu} from '@material-ui/core';
import {MoreVert} from '@material-ui/icons';

export default function MobileOptions({children,...props}){

    const [isOpen, setIsOpen] = useState(false);
    const iconRef = useRef();

    const openMenu = () => setIsOpen(true);
    const closeMenu = () => setIsOpen(false);

    return(
        <div {...props}>
            <MoreVert onClick={openMenu} fontSize="large" ref={iconRef}/>
            <Menu open={isOpen} onClose={closeMenu} anchorEl={iconRef.current}>
                {children}
            </Menu>
        </div>
    )
}