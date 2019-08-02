import React from 'react';
import { Home } from './App/views/Home.js';
import { Contact } from './App/views/Contact.js';
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MyRoutes = createStackNavigator({
    HomeRT: {
        screen: Home
    },
    ContactRT: {
        screen: Contact
    },
},
    {
        initialRouteName: 'HomeRT'
    }
);

const App = createAppContainer(MyRoutes);

export default App;


//export default class App extends React.Component {
//    render() {
//        return (
//            <MyRoutes />
//        );
//    }
//}
