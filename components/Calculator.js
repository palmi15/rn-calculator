import React from 'react'
import {StyleSheet, View} from 'react-native';
import { CalcButton, CalcDisplay} from '.';
import CalcLogic, { defaultState } from '../CalcLogic';

export default class Calculator extends React.Component{

    state = defaultState; 
  
    handleTap = (type, value) => {
        this.setState(state => CalcLogic(type, value, state));
    }

    render(){
        return(
            <View style={styles.container}>
                <View styles={styles.displayContainer}>
                    <CalcDisplay display={this.state.currentValue}/>
                </View>

                <View style={styles.buttonContainer}>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.handleTap("clear")} 
                          title="C" color="black" backgroundColor="#D4D4D2"/>

                        <CalcButton onPress={() => this.handleTap("plusmin")}
                            title="+/-" color="black" backgroundColor="#D4D4D2"/>

                        <CalcButton onPress={() => this.handleTap("percent")}
                            title="%" color="black" backgroundColor="#D4D4D2"/>

                        <CalcButton onPress={() => this.handleTap("operator", "/")} 
                            title="&#247;" color="white" backgroundColor="#FF9500"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.handleTap("number", 7)} 
                            title="7" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("number", 8)} 
                            title="8" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("number", 9)} 
                            title="9" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("operator", "*")}
                            title="x" color="white" backgroundColor="#FF9500"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.handleTap("number", 4)} 
                            title="4" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("number", 5)} 
                            title="5" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("number", 6)} 
                            title="6" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("operator", "-")}
                            title="-" color="white" backgroundColor="#FF9500"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.handleTap("number", 1)} 
                            title="1" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("number", 2)} 
                            title="2" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("number", 3)} 
                            title="3" color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("operator", "+")}
                            title="+" color="white" backgroundColor="#FF9500"/>
                    </View>
                    <View style={styles.buttonRow}>
                        <CalcButton onPress={() => this.handleTap("number", 0)}
                            title="0" color="white" backgroundColor="#505050" style={{flex: 2}}/>

                        <CalcButton onPress={() => this.handleTap("number", ",")} 
                            title="," color="white" backgroundColor="#505050"/>

                        <CalcButton onPress={() => this.handleTap("equal")}
                            title="=" color="white" backgroundColor="#FF9500"/>
                    </View>
                </View>
            </View>
            
            
        )
    }
}

const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "black", paddingTop: 140},
    displayContainer: {flex: 1, justifyContent: "flex-end"},
    buttonRow: {flexDirection: "row", justifyContent: "space-between"}
});