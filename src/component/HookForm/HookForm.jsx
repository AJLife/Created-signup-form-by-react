import useInputState from "../../hooks/useInputState";

const HookForm = () => {
    // const [name , handleNameChange ] = useInputState('Natasha')
    const emailState = useInputState('faiza@sajid.go')
    const handleSubmit = e =>{
        console.log(emailState.value);
        e.preventDefault();
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            {/* <input onChange={handleNameChange} value={name}
            type="text" name="name" id="" /> */}
            <br />
            <input {...emailState}
            type="email" name='email'  /> <br />
            <input type={'tel'}  name="phone" /> 
            <br /> 
            <input  
            type={'password'} name="pass" id="" /> <br />
            <input type="submit" value="Submit" />
            
        </form>
        </div>
    );
};

export default HookForm;