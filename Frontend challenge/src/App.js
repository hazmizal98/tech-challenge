import * as React from "react";
import { Admin, Resource} from 'react-admin';
import { UserList } from './Components/Users';
import jsonServerProvider from 'ra-data-json-server';
import UserIcon from '@material-ui/icons/Group';
import PhotoIcon from '@material-ui/icons/Photo';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'; 
import Homepage from './Components/Homepage';
import auth from './auth';
import MyLoginPage from './Components/Backgroundlogin'
import { AlbumList, AlbumEdit } from './Components/Albumactions'
import { PhotoList, PhotoEdit } from './Components/Photoactions';


const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const App = () => (
    <Admin loginPage={MyLoginPage} dashboard={Homepage} authProvider={auth} dataProvider={dataProvider}>
        <Resource name="users" list={UserList} icon={UserIcon} />
        <Resource name="albums" list={AlbumList} edit={AlbumEdit} icon={PhotoLibraryIcon} />
        <Resource name="photos" list={PhotoList} edit={PhotoEdit} icon={PhotoIcon} />

    </Admin>
);

export default App;