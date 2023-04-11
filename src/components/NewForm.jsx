import React from 'react';
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";

const NewForm = () => {
    // form validation rules
    const validationSchema = Yup.object().shape({
        acceptTerms: Yup.bool()
            .oneOf([true], 'Accept Ts & Cs is required')
    });

    // functions to build form returned by useForm() hook
    const { register, handleSubmit, reset, errors } = useForm({
        resolver: yupResolver(validationSchema)
    });

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">React - Required Checkbox Example with React Hook Form</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)} onReset={reset}>
                    <div className="form-group form-check">
                        <input name="acceptTerms" type="checkbox"
                               ref={register}
                               id="acceptTerms"
                                />
                        <label for="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                        <div className="invalid-feedback">{errors?.acceptTerms?.message}</div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1">Register</button>
                        <button className="btn btn-secondary" type="reset">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default NewForm;