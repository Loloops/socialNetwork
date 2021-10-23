import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { Field, reduxForm } from "redux-form";
import { login } from "../../redux/authReducer";
import { Input } from "../common/formControls/FormsContols";
import { requiredField } from "../common/validators/validators";
import classes from '../common/formControls/FormsControls.module.css'




const LoginForm = (props) => {
  return(
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field placeholder={'Email'} component={Input} name={'email'} validate={[requiredField]}/>
        </div>
        <div>
          <Field placeholder={'Password'} type='password' component={Input} name={'password'} validate={[requiredField]}/>
        </div>
        <div>
          <Field type={'checkbox'} component={Input} name={'rememberMe'}/> remember me
        </div>

        {props.error && <div className={classes.formSummaryError}>
          {props.error}
        </div>}

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
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if(props.isAuth) {
    return <Redirect to={'/profile'} />
  }


  return(
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login)