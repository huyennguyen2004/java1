import {
  List,
  Datagrid,
  TextField,
  DeleteButton,
  EditButton,
  Create,
  Edit,
  SimpleForm,
  TextInput,
} from "react-admin";

export const AddressList = () => (
  <List>
    <Datagrid>
      <TextField source="addressId" label="Address ID" />
      <TextField source="buildingName" label="Building Name" />
      <TextField source="street" label="Street Name" />
      <TextField source="city" label="City Name" />
      <TextField source="state" label="State Name" />
      <TextField source="country" label="Country Name" />
      <TextField source="pincode" label="Pincode Name" />
      <EditButton />
      <DeleteButton />
    </Datagrid>
  </List>
);
export const AddressCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="addressName" label="Address Name" />
    </SimpleForm>
  </Create>
);
export const AddressEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="addressId" label="Address ID" disabled />
      <TextInput source="addressName" label="Address Name" />
    </SimpleForm>
  </Edit>
);
