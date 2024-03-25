import { useState } from "react";

const StateFulForm = () => {
    
    const [email , setEmail] = useState(null);
    const [pass , setPass ] = useState(null)
    const [error , setError] = useState('');

    const handleSubmit = e =>{
        e.preventDefault(); 
        if (pass.length <6) {
            setError('Password must be 6 character or longer')
        }
        else{
            setError('')
            console.log(email ,pass);
        }
        
    } 
    const handleEmailChange = e =>{
        setEmail(e.target.value)
    } 
    const handlePassChange = e => {
        setPass(e.target.value);
    }
    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" id="" />
            <br />
            <input onChange={handleEmailChange}
            type="email" name='email'  /> <br />
            <input type={'tel'}  name="phone" /> <br />
            <br /> 
            <input onChange={handlePassChange} 
            type={'password'} name="pass" id="" /> <br />
            <input type="submit" value="Submit" />
            {
                error && <p>{error}</p>
            }
        </form>
        </div>
    );
};

export default StateFulForm;