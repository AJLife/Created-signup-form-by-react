import './App.css';
import Grandpa from './component/Grandpa/Grandpa';
import HookForm from './component/HookForm/HookForm';
import RefForm from './component/RefForm/RefForm';
import ReusableForm from './component/ReusableForm/ReusableForm';
import SimpleForm from './component/Simple Form/SimpleForm';
import StateFulForm from './component/StateFulForm/StateFulForm';
function App() {
  const handleSignUpSubmit = data =>{
    //  data.preventDefault();
     console.log('sign up data:',data);
}
  const handleProfileUpdate = data =>{
    // data.preventDefault();
    console.log('Update profile data:', data);
}

  return (
  <>
    <div>
      <h1>Simple form</h1>
      {/* Process 1 */}
      <SimpleForm></SimpleForm>
      {/* Process 2 */}
      <StateFulForm></StateFulForm>
      {/* Process 3 useRef */}
      <RefForm></RefForm>
      {/* Process 4 useCustomHook */}
      <HookForm></HookForm>
      {/* Process 5 ReusableForm */}
      <ReusableForm 
      formTitle={'Sign up'}
      handleSubmit={handleSignUpSubmit}>
        <div>
          <h2>Sign up</h2>
          <p>Please Registard first </p>
        </div>
      </ReusableForm>
      <ReusableForm 
      formTitle={'Update Profile'} 
      submitBtnText='Update'
      handleSubmit={handleProfileUpdate}>
        <div>
          <h2>Update Profile</h2>
          <p>Always upto date your profile</p>
        </div>
      </ReusableForm>
    </div>
    <Grandpa></Grandpa>
  </>
  )
}

export default App
