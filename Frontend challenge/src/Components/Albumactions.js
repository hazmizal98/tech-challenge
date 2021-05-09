import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
    Filter,
} from 'react-admin';

const AlbumFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Album Title" source="q" alwaysOn />
        <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
            <SelectInput optionText="name" />
        </ReferenceInput>
    </Filter>
);

export const AlbumList = props => (
    <List filters={<AlbumFilter />} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const AlbumEdit = props => (
    <Edit title={<AlbumTitle />} {...props}>
        <SimpleForm>
            <TextInput label="Album ID" disabled source="id" />
            <TextInput label="Album Title" source="title" />
        </SimpleForm>
    </Edit>
);

const AlbumTitle = ({ record }) => {
    return <span>Album {record ? `"${record.title}"` : ''}</span>;
};