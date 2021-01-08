import React, { Component } from "react";
import { SharedElement } from 'react-navigation-shared-element';
import { View, Text, StyleSheet,Image,ScrollView  } from "react-native";
import {Container, Icon, Input} from 'native-base';


export default class ProductDeliveroo extends Component {

    static sharedElements = (navigation, otherNavigation, showing) => {
        const value = navigation.getParam('value');
        return [{id:`item.${value.id}.photo`, animation: 'fade', resize:'stretch'}];
      };

    static navigationOptions = {
        headerShown: false,
      };

    render() {
        const { navigation } = this.props;
        const value = navigation.getParam('value');
        return (
            <Container style={styles.container}>
                <SharedElement id={`item.${value.id}.photo`}>
                    <Image style={styles.img} source={{uri: value.url}}/>
                </SharedElement>
                <Text>{value.name}</Text>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    img:{
        width: 200,
        height:200,
    }
});