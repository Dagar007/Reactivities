import { Button,  Menu } from 'semantic-ui-react';
import { useStore } from '../stores/store';


export default function Navbar() {

    const {activityStore} = useStore();

    return(
        <Menu inverted fixed='top'>
            <Menu.Item header>
                <img src="/assets/logo.png" alt="logo" style={{marginRight: '10px'}}/>
                Reactivities
            </Menu.Item>
            <Menu.Item name='Actvities'/>
            <Menu.Item>
                <Button onClick={() => activityStore.openForm()} positive content="Create Activity" />
            </Menu.Item>
        </Menu>
    )
}