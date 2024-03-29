import { NavLink } from 'react-router-dom';
import { Button,  Menu } from 'semantic-ui-react';


export default function Navbar() {
    return(
        <Menu inverted fixed='top'>
            <Menu.Item as={NavLink} to='/' exact header>
                <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item as={NavLink} to='/activities' name='Actvities'/>
            <Menu.Item>
                <Button as={NavLink} to='/createActivity' positive content="Create Activity" />
            </Menu.Item>
        </Menu>
    )
}