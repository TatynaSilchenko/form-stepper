import React from 'react';
import {useForm} from 'react-hook-form';
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import styles from "./components/UserForm.module.css";
import UserForm from "./components/UserForm";

const App = () => {
    const {control, handleSubmit} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <>
            <Container className={styles.stepperBox} component={Box}>
                <UserForm/>
            </Container>
        </>
    );
};

export default App;