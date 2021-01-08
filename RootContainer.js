import React, { Component } from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import App from './App';
import HomeDeliveroo from './HomeDeliveroo';
import ProductDeliveroo from './ProductDeliveroo';

const Stack = createSharedElementStackNavigator({
    App: App,
    HomeDeliveroo : HomeDeliveroo,
    ProductDeliveroo : ProductDeliveroo,
},{
    initialRouteName: 'HomeDeliveroo'
}
);

const AppContainer = createAppContainer(Stack);

class RootContainer extends Component{
    render(){
        return <AppContainer/>
    }
}

export default RootContainer;