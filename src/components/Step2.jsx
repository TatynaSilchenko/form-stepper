import React from 'react';
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {Controller, useFormContext} from "react-hook-form";
import styles from './Step.module.css';
import {pink} from "@mui/material/colors";

const styleRadio = {  color: pink[800],
    // '& .MuiSvgIcon-root': { fontSize: 15 },
    '&.MuiButtonBase-root': {
        background: 'linear-gradient(60.76deg,#e50093 .56%,#f73400 73.83%,#ed8000 92.51%)',
        color: '#ffffff',
        margin: '15px 30px',
        padding: '5px',
    },
    '&.MuiButtonBase-root::hover':{
        background: 'linear-gradient(0deg,rgba(255,255,255,.2),rgba(255,255,255,.2)),linear-gradient(60.76deg,#e50093 .56%,#f73400 73.83%,#ed8000 92.51%)'
    }
}
const Step2 = ({title}) => {
    const {control} = useFormContext();
    return <>
        <h1>{title}</h1>
        <FormControl>
            <div className={styles.answersBlock}>
            <Controller
                control={control}
                name="radioButtonsGroup"
                render={({
                             field,
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                         }) => (
                    <RadioGroup
                        defaultValue="female"
                        name="radioButtonsGroup"
                        {...field}
                    >
                        <FormControlLabel value="female" control={<Radio  sx={styleRadio}/>} label="Female" />
                        <FormControlLabel value="male" control={<Radio sx={styleRadio}/>} label="Male" />
                        <FormControlLabel value="other" control={<Radio sx={styleRadio}/>} label="Other" />
                    </RadioGroup>
                )}
            />
            </div>
            <div className={styles.errorBlock}>
            </div>
        </FormControl>
        </>
};

export default Step2;