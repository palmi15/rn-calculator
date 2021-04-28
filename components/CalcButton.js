import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native';


export default class CalcButton extends React.Component{


    render(){
        var bc = this.props.backgroundColor;
        return(
            <TouchableHighlight activeOpacity = {0.85} underlayColor="#E4E4E4" onPress={this.props.onPress}
             style={[styles.container, {backgroundColor: bc}, {...this.props.style}]}>
                <Text style={[styles.text, {color: this.props.color}]}>{this.props.title}</Text>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    container:{ 
        alignItems: "center", justifyContent: "center", margin: 5,
        width: 80, height: 80, borderRadius: 40},
    text: { fontSize: 30},
})