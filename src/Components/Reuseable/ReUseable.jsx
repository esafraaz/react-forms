
const ReUseable = ({headings, func , children}) => {
    
    const handleSubmit = e =>{
            e.preventDefault();
            const data ={
                name: e.target.inputName.value,
                password: e.target.password.value
            }
            func(data)
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <h2>{headings}</h2>
                {children}
                <input type="text" name="inputName" id="inputName"  placeholder="Type you Name here."/>
                <br />
                <input type="password" name="password" id="inputPassword"  />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ReUseable;