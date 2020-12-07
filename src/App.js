// External import
import React, { Component } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'
import jwtDecode from 'jwt-decode'

// Local import
import NavBar from './components/navbar'
import Movies from './components/Movies'
import MoviesForm from './components/moviesForm'
import Login from './components/login'

class App extends Component {
  state = {}

  componentDidMount() {
    try {
      const jwt = localStorage.getItem('token')
      const user = jwtDecode(jwt)
      this.setState({ user })
    } catch (ex) {}
  }

  render() {
    console.log('User: ', this.state.user)
    return (
      <>
        <NavBar user={this.state.user} />
        <main>
          <div className="container" style={{ marginTop: 13 }}>
            <Switch>
              <Route path="/movies" exact component={Movies} />
              <Route path="/movies/:id" component={MoviesForm} />
              <Route path="/login" component={Login} />
              <Redirect from="/" exact to="/movies" />
            </Switch>
          </div>
        </main>
      </>
    )
  }
}

export default App
