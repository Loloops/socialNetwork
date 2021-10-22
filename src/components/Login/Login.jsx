import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/formControls/FormsContols";
import { requiredField } from "../common/validators/validators";





const LoginForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Login'} component={Input} name={'login'} validate={[requiredField]}/>
        </div>
        <div>
          <Field placeholder={'Password'} component={Input}name={'password'} validate={[requiredField]}/>
        </div>
        <div>
          <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)


const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  }
  return(
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}


export default Login