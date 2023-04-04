import './App.css'
import {useForm} from "react-hook-form";

function App() {
    const {
        register,
        formState: { errors, isValid },
        handleSubmit,
        reset
    } = useForm({
        mode: "onBlur"
    });
    
    const onSubmite = (data) => {
        console.log(JSON.stringify(data));
        reset();
    }

    return (
        <div className="App">
            <h1>Form stepper (react-hook-form)</h1>

            <form onSubmit={handleSubmit(onSubmite)}>
                <label htmlFor='firstName'>
                    First Name:
                </label>
                <input type="text"
                    {...register('firstName',{
                        required: "It's required!",
                        minLength: {
                            value:5,
                            message:"Min 5 symbols"
                        }
                    })}/>
                    <div style={{height:40}}>
                        {errors?.firstName && <p style={{margin:0}}>{errors?.firstName?.message||"Error!"}</p>}
                    </div>
                <input type="submit" disabled={!isValid}/>
            </form>
        </div>
    )
}

export default App
