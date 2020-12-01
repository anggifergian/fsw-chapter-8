import React from 'react'
import Form from './common/form'
import Joi from 'joi'
import { login } from '../services/authService'

class Login extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {},
  }

  schema = {
    username: Joi.string().label('Username'),
    password: Joi.string().label('Password'),
  }

  doSubmit = async () => {
    try {
      const { username, password } = this.state.data
      const { data } = await login(username, password)

      // Save token
      localStorage.setItem('token', data.id)

      // Redirect to home
      window.location = '/'
    } catch (ex) {
      if (ex.response && ex.response.status >= 400) {
        const errors = { ...this.state.errors }
        errors.username = ex.response.data.error.message
        this.setState({ errors })
      }
    }
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username', 'text')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Masuk')}
        </form>
      </>
    )
  }
}

export default Login
