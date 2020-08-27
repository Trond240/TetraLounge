import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
// import Routes from './Routes.js'

class tetraLoungeApp extends Component {
   render() {
      return (
        <section>
          <p>Made it</p>
        </section>
        //  <Routes />
      )
   }
}
export default tetraLoungeApp
AppRegistry.registerComponent('tetraLoungeApp', () => tetraLoungeApp)