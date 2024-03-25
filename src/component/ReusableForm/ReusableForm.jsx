

const ReusableForm = ({formTitle , children , handleSubmit, submitBtnText = 'Submit'}) => {
    const handleLocalSubmit = e =>{
        e.preventDefault();
        const data ={
            name: e.target.name.value,
            email: e.target.email.value,
            pass: e.target.pass.value,
            phone: e.target.phone.value
        }
        handleSubmit(data);
    }
    return (
        <div 
        style={{
            border: '1px solid lightBlue',
            marginTop: '10px',
            padding: '10px', 
            borderRadius: '18px', 
            background: 'Blue'
        }}>
            {children}
            <form onSubmit={handleLocalSubmit} style={{padding: '12px ' , border:'1px solid white',borderRadius: '4px'}}>
                <input  type="text" name="name" id="" />
                <br />
                <input 
                type="email" name='email'  /> <br />
                <input type={'tel'}  name="phone" /> 
                <br /> 
                <input 
                type={'password'} name="pass" id="" /> <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReusableForm;