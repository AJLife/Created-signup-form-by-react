

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.phone.value);
        console.log('Form Submitted');
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" />
                <br />
                <input type="email" name='email'  /> <br />
                <input type={'tel'}  name="phone" /> <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;