import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    TextInput,
    Filter,
    EmailField
} from 'react-admin';

const UserFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const UserList = props => (
    <List filters={<UserFilter />} {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="username" />
            <EmailField source="email" />
        </Datagrid>
    </List>
);