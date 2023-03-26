import Input from "../../Layout/input.component";

const UserSignin = () => {

    const onChangeHandler = ({ name, value }) => {
        console.log({ name, value })
    }

  return (
    <form className="form">
       <Input 
            type="email"
            name="email"
            label="Email"
            isRequired="*"
            value=""
            onChangeHandler={onChangeHandler}
       />
       <Input 
            type="password"
            name="password"
            label="Password"
            isRequired="*"
            value=""
            onChangeHandler={onChangeHandler}
       />
    </form>
  )
}

export default UserSignin;