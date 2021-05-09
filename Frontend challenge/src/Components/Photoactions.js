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

const PhotoFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search Photo Title" source="q" alwaysOn />
        <ReferenceInput label="Album ID" source="albumId" reference="albums" allowEmpty>
            <TextInput source="id" />
        </ReferenceInput>
    </Filter>
);

export const PhotoList = props => (
    <List filters={<PhotoFilter />} {...props}>
        <Datagrid>
            <TextField label='Photos ID' source="id" />
            <TextField label='Album ID' source="albumId" />
            <ReferenceField label='Album Title' source="albumId" reference="albums">
                <TextField source="title" />
            </ReferenceField>
            <ReferenceField label='User ID' source="albumId" reference="albums">
                <TextField source="userId" />
            </ReferenceField>
            <TextField label='Photo Title' source="title" />
            <EditButton/>
        </Datagrid>
    </List>
);

export const PhotoEdit = props => (
    <Edit title={<PhotoTitle />} {...props}>
        <SimpleForm>
            <TextInput label="Album ID" disabled source="id" />
            <TextInput label="Photo Title" source="title" />
        </SimpleForm>
    </Edit>
);

const PhotoTitle = ({ record }) => {
    return <span>Photo {record ? `"${record.title}"` : ''}</span>;
};