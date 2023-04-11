import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import styles from './Step.module.css';
import {FormControlLabel} from "@mui/material";
import { pink, purple } from '@mui/material/colors';

const styleCheck = {  color: pink[800],
    '& .MuiSvgIcon-root': { fontSize: 35 },
    '&.Mui-checked': {
        color: '#bf1650',
    },
}

const Step1 = ({title}) => {
    const {control} = useFormContext();
    return <>
        <h1>{title}</h1>
        <div className={styles.answersBlock}>

        <Controller
            control={control}
            name="answer1"
            render={({
                         field,
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <FormControlLabel
                    label="answer1"
                    control={
                        <Checkbox  {...field}
                                   sx={styleCheck}
                        />
                    }
                />
            )}
        />
        <Controller
            control={control}
            name="answer2"
            render={({
                         field,
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <FormControlLabel
                    label="answer2"
                    control={
                        <Checkbox  {...field}
                                   sx={styleCheck}
                        />
                    }
                />
            )}
        />
        <Controller
            control={control}
            name="answer3"
            render={({
                         field,
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <FormControlLabel
                    label="answer3"
                    control={
                        <Checkbox  {...field}
                                   sx={styleCheck}
                        />
                    }
                />
            )}
        />
        <Controller
            control={control}
            name="answer4"
            render={({
                         field,
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <FormControlLabel
                    label="answer4"
                    control={
                        <Checkbox  {...field}
                                   sx={styleCheck}
                        />
                    }
                />
            )}
        />
        <Controller
            control={control}
            name="answer5"
            render={({
                         field,
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <FormControlLabel
                    label="answer5"
                    control={
                        <Checkbox  {...field}
                                   sx={styleCheck}
                        />
                    }
                />
            )}
        />
        </div>
    </>
};

export default Step1;