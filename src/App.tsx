// in src/App.js
import * as React from "react";
import { Admin, Create, Resource, SimpleForm, TextInput, ReferenceArrayInput, SelectArrayInput, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource name="users" list={ListGuesser} create={ExampleCreate} />
    </Admin>
  )
};

export default App;


const ExampleCreate = (props: any) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <ReferenceArrayInput source="permission_ids" reference="todos">
        <SelectArrayInput optionText="title" />
      </ReferenceArrayInput>
    </SimpleForm>
  </Create>
);
  