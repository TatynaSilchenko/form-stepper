import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";
import styles from './Step.module.css';
import {FormControlLabel} from "@mui/material";
import {pink} from '@mui/material/colors';

const styleCheck = {
    color: pink[800],
    '& .MuiSvgIcon-root': {fontSize: 35},
    '&.Mui-checked': {
        color: '#bf1650',
    },
}

const Step1 = ({title, register, error}) => {
    const {control} = useFormContext();
    const onChange = (event) => {
        console.log('change', event.target.value);
    };
    return <>
        <h1>{title}</h1>
        <div className={styles.answersBlock}>

            <Controller
                control={control}
                name="step1"
                render={({
                             field,
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                         }) => (
                    <FormControlLabel
                        label="answer1"
                        control={
                            <Checkbox  {...field}
                                       control={control}
                                       name={"step1"}
                                       value="answer1"
                                       onChange={field.onChange}
                                       sx={styleCheck}
                                       {...register('step1', {
                                           required: {
                                               value: true,
                                               message: 'Be sure to answer'
                                           }
                                       })}
                            />
                        }
                    />
                )}
            />
            <Controller
                control={control}
                name="step1"
                render={({
                             field,
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                         }) => (
                    <FormControlLabel
                        label="answer2"
                        control={
                            <Checkbox  {...field}
                                       name={"step1"}
                                       value="answer2"
                                       onChange={field.onChange}
                                       sx={styleCheck}
                                       {...register('step1', {
                                           required: {
                                               value: true,
                                               message: 'Be sure to answer'
                                           }
                                       })}
                            />
                        }
                    />
                )}
            />
            <Controller
                control={control}
                name="step1"
                render={({
                             field,
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                         }) => (
                    <FormControlLabel
                        label="answer3"
                        control={
                            <Checkbox  {...field}
                                       name={"step1"}
                                       value="answer3"
                                       onChange={field.onChange}
                                       sx={styleCheck}
                                       {...register('step1', {
                                           required: {
                                               value: true,
                                               message: 'Be sure to answer'
                                           }
                                       })}
                            />
                        }
                    />
                )}
            />
            <Controller
                control={control}
                name="step1"
                render={({
                             field,
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                         }) => (
                    <FormControlLabel
                        label="answer4"
                        control={
                            <Checkbox  {...field}
                                       name={"step1"}
                                       value="answer4"
                                       onChange={field.onChange}
                                       sx={styleCheck}
                                       {...register('step1', {
                                           required: {
                                               value: true,
                                               message: 'Be sure to answer'
                                           }
                                       })}
                            />
                        }
                    />
                )}
            />
            <Controller
                control={control}
                name="step1"
                render={({
                             field,
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                         }) => (
                    <FormControlLabel
                        label="answer5"
                        control={
                            <Checkbox  {...field}
                                       name={"step1"}
                                       value="answer5"
                                       onChange={field.onChange}
                                       sx={styleCheck}
                                       {...register('step1', {
                                           required: {
                                               value: true,
                                               message: 'Be sure to answer'
                                           }
                                       })}
                            />
                        }
                    />
                )}
            />
        </div>
        <div className={styles.errorBlock}>
            {error?.step1?.message}
        </div>
    </>
};

export default Step1;