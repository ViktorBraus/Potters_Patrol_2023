import React, { Component } from 'react';
import { render } from 'react-dom';
import '../../../App.css';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Notifications from 'react-notify-toast'

import Landing from './Landing'
import Confirm from './Confirm'
import Spinner from '../../Home/Spinner'
import { API_URL } from '../../../config'

class App extends Component {
  render() {
    return (
      <Register />
    );
  }
}


class Register extends Component {
  state = {
    loading: true
  }

  // When the component mounts, a simple GET request is made to 'wake up' the 
  // server. A lot of free services like Heroku and Now.sh will put your server 
  // to sleep if no one has used your application in a few minutes. Using a 
  // service like uptimerobot.com to ping the server regularly can mitigate 
  // sleepiness.
  componentDidMount = () => {
    fetch(`${API_URL}/wake-up`)
      .then(res => res.json())
      .then(() => {
        this.setState({ loading: false })
      })
      .catch(err => console.log(err))
  }

  // You are probaly used to seeing React 'render()' methods written like this:
  //
  // render() {
  //   return (
  //     <Some jsx />
  //   )
  // }
  //
  // Below is a version of writing a 'render()' that also works. The 'why does 
  // it work?' is related to the 'this' keyword in JavaScript and is beyond the 
  // scope of this post.  
  
  render = () => {
    
    // The 'content' function determines what to show the user based on whether 
    // the server is awake or not.
    const content = () => {
      
      // The server is still asleep, so provide a visual cue with the <Spinner /> 
      // component to give the user that feedback.
      if (this.state.loading) {
        return <Spinner size='8x' spinning='spinning' />
      }

      // The server is awake! React Router is used to either show the 
      // <Landing /> component where the emails are collected or the <Confirm /> 
      // component where the emails are confirmed.
      return (
        <BrowserRouter>  
          <Switch>
            {/* 
              the ':id' in this route will be the unique id the database 
              creates and is available on 'this.props' inside the <Confirm />
              component at this.props.match.params.id
            */}
            <Route exact path='/confirm/:id' component={Confirm} />
            <Route exact path='/' component={Landing} />
            <Redirect from='*' to='/'/>
          </Switch>
        </BrowserRouter>
      )
    }

    return (
      // The 'container' class uses flexbox to position and center its three 
      // children: <Notifications />, <main> and <Footer /> 
      <div className='registrybackground'>
        {/* 
          <Notifications > component from 'react-notify-toast'. This is the 
          placeholder on the dom that will hold all the feedback toast messages 
          whenever notify.show('My Message!') is called.
        */}
        <Notifications />
        <main>
          {content()}
        </main>
        {/* 
          For every Medium post I write I include a demo app that uses the same 
          footer. So, I have abstracted that out to use on future posts with 
          just a couple of props passed in.
        */}
      </div>
    )
  }
}
render(<App />, document.getElementById('root'));
export default App;