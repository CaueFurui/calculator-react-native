// imports 
import React from 'react'
import { Text, StyleSheet, Dimensions, TouchableHighlight } from 'react-native'


//style sheet
const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#F0F0F0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888',
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',   
    },
    buttonDouble: {
        width: (Dimensions.get("window").width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get("window").width / 4) * 3,
    }
})

// creation of the buttons
export default props => {
    const stylesButton = [styles.button]
    if (props.double) stylesButton.push(styles.buttonDouble)
    if (props.triple) stylesButton.push(styles.buttonTriple)
    if (props.operator) stylesButton.push(styles.operationButton)
    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={stylesButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}
