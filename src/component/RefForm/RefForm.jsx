import { useEffect, useRef } from "react";


const RefForm = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const phoneRef = useRef(null)
    useEffect(()=>{
        nameRef.current.focus();
    },[])
    const handleSubmit = e =>{
        e.preventDefault(); 
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passRef.current.value);
        console.log(phoneRef.current.value);
     };
      return (
        <div>
        <form onSubmit={handleSubmit}>
            <input ref={nameRef} type="text" name="name" id="" />
            <br />
            <input onChange={''} ref={emailRef}
            defaultValue={'example12@gmail.com'}
            type="email" name='email'  /> 
            <br />
            <input ref={phoneRef}
            type={'tel'}  name="phone" /> 
            <br />
            <input onChange={''}  ref={passRef}
            type={'password'} name="pass" id="" required /> <br />
            <input type="submit" value="Submit" />
            {/* {
                error && <p>{error}</p>
            } */}
        </form>
        </div>
    );
};

export default RefForm;