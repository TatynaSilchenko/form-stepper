import React from 'react';
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import {Controller, useFormContext} from "react-hook-form";
import Checkbox from "@mui/material/Checkbox";

const Step2 = () => {
    const {control} = useFormContext();
    return <div>
        <h1>Choose the correct answer?</h1>
        <FormControl>
            <Controller
                control={control}
                name="radioButtonsGroup"
                render={({
                             field,
                             fieldState: {invalid, isTouched, isDirty, error},
                             formState,
                         }) => (
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="female"
                        name="radioButtonsGroup"
                        {...field}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                )}
            />

        </FormControl>
        </div>
};

export default Step2;