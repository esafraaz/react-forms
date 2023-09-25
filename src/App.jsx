
import './App.css'
import ReUseable from './Components/Reuseable/ReUseable'
// import RefForm from './Components/RefForm/RefForm'
// import Form from './Components/Form/Form'
// import StateForm from './Components/StateForm/StateForm'

function App() {
  const signUpFunc  = (data) =>{
      console.log(data)
  }
  const updateUpFunc  =(data) =>{
      console.log(data)
  }

  return (
    <>
      {/* <Form></Form> */}
      {/* <StateForm></StateForm> */}
      {/* <RefForm></RefForm> */}
      <ReUseable 
      headings = {'Sign Up'}
      func = {signUpFunc} >
          <p>You should sign Up Now.</p>
      </ReUseable>
      <ReUseable 
      headings = {'Update Profile.'}
      func = {updateUpFunc} >
          <p>You Update your Profile Regularly.</p>
      </ReUseable>
    </>
  )
}

export default App
 