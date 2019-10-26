import React from 'react';
import { StyleSheet, View , FlatList } from 'react-native';
import Header from './app/components/Header';
import SubTitle from './app/components/SubTitle';
import Input from './app/components/Input';
import TodoItem from './app/components/Todo';


export default class App extends React.Component {

  state = { // state 는 컴포넌트 안에서 데이터 변경 할 수 있게 하는 것
    inputValue : "",
    todos : [
      {
        title : "할일",
        isComplete : false
      },
      {
        title : "걷기",
        isComplete : false
      }
    ]
  }
  _makeTodoItem = ({ item, index}) =>{
    return (
      <TodoItem text = {item.title} isComplete={item.isComplete}
      //여기서 부턴 추가
      changeComplete={() => {
        const newTodo = [...this.state.todos];
        newTodo[index].isComplete = !newTodo[index].isComplete;
        this.setState({todos:newTodo});
        }} 
        deleteItem={() => {
          const newTodo = [...this.state.todos];
          newTodo.splice(index,1);
          this.setState({todos:newTodo});
        }}/>
    )
  }

  _changeText = (value) =>{
    this.setState({inputValue : value});
  }
  
  _addTodoItem = () => {
    if(this.state.inputValue != ''){
      const Input = this.state.inputValue;
      const prevItem = this.state.todos;
      const newItem = { title: Input, isComplete: false}
      this.setState({
        inputValue: '',
        todos: prevItem.concat(newItem)
      });
    }
}
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.centered}>
            <Header/>
        </View>
        <View style={styles.inputContainer}>
          <SubTitle title="오늘의 할 일 적기"/>
          <Input
          value = {this.state.inputValue}
          changeText = {this._changeText}
          addTodo = {this._addTodoItem}/>
        </View>
        <View style={styles.todoContainer}>
        <SubTitle title="Daily Quest"/>
           <FlatList
          data = {this.state.todos}
          renderItem={this._makeTodoItem}
          keyExtractor={(item, index) => { return `${index}`}}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#9FA8DA'
  },
  centered:{
    alignItems: "center"
  },
  inputContainer:{
    marginLeft: 20
  },
  todoContainer: {
    marginTop: 20,
    marginLeft:20
  }
});
