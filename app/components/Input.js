import React from "react";
import {TextInput, StyleSheet} from 'react-native';

const Input = ({value, changeText,addTodo}) => (
    <TextInput
        value = {value}
        style={styles.input}
        placeholder={"나는 할 수 있다!!!"}
        onChangeText = {changeText}
        onEndEditing = {addTodo}
        maxLength={30}
        returnKeyType="done"/>
);

const styles = StyleSheet.create({
    input: {
        fontSize: 25,
        paddingTop: 15,
    }
})

export default Input;