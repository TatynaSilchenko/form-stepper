import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";

const Step1 = () => {
    const {control} = useFormContext();
    return <>
        <h1>Choose the correct answer?</h1>
        <Controller
            control={control}
            name="answer1"
            render={({
                         field,
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <Checkbox
                    {...field}
                />
            )}
        />
        <Controller
            control={control}
            name="answer2"
            render={({
                         field: { onChange, onBlur, value, name, ref },
                         fieldState: {invalid, isTouched, isDirty, error},
                         formState,
                     }) => (
                <Checkbox
                    onChange={onChange}
                    checked={value}
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
                <Checkbox
                    {...field}
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
                <Checkbox
                    {...field}
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
                <Checkbox
                    {...field}
                />
            )}
        />
    </>
};

export default Step1;