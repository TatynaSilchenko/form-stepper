import React from 'react';
import {useForm} from 'react-hook-form';
import UserForm from "./components/UserForm";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

const App = () => {
    const {control, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Container component={Box}>
                <UserForm/>
            </Container>
        </>
        // <form onSubmit={handleSubmit(onSubmit)}>
        //     <Controller
        //         name="myCheckbox"
        //         control={control}
        //         defaultValue={false}
        //         render={({ field: { onChange, value } }) => (
        //             <Checkbox
        //                 name="myCheckbox"
        //                 label="My Checkbox Label"
        //                 value={value}
        //                 onChange={(e) => onChange(e.target.checked)}
        //             />
        //         )}
        //     />
        //     <button type="submit">Submit</button>
        // </form>
    );
};

export default App;