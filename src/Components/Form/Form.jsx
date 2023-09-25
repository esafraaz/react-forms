
const Form = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.inputName.value);
        e.target.inputName.value = '';
    }
    return (
        <div>
            <form  onSubmit={handleSubmit}>
                <input type="text" name="inputName" id="inputName"  placeholder="Type you Name here."/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default Form;