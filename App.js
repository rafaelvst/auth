import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyDxCsONqinX-fEJsGH5y-JfFbSCPAHTqGE',
      authDomain: 'authentication-7f87e.firebaseapp.com',
      databaseURL: 'https://authentication-7f87e.firebaseio.com',
      projectId: 'authentication-7f87e',
      storageBucket: 'authentication-7f87e.appspot.com',
      messagingSenderId: '272128748248'
    });
  }

  render () {
    return (
      <View>
       <Header headerText="Authentication" />
       <LoginForm />
      </View>
    )
  }
}

export default App;
