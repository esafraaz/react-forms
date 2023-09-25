import { useRef, useState } from "react";

const RefForm = () => {

        const emailRef = useRef('')
        const passWordRef = useRef('')
        const [email, setEmail] = useState('')
        const [pass, setPass] = useState('')
        const handleOnSubmit = e =>{
            e.preventDefault();
            setEmail(emailRef.current.value)
            setPass(passWordRef.current.value)
        }



	return (
		<div>
			<form onSubmit={handleOnSubmit}>
				<input ref={emailRef} type="email" name="Email" id="" /> 
                <br />
				<input ref={passWordRef} type="password" name="password" id="" /> <br />
				<input type="submit" value="Submit" />
			</form>

            <p>user email:{email} </p>
            <p>user pass: {pass} </p>
		</div>
	);
};

export default RefForm;
