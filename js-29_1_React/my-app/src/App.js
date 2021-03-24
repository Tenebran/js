import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      localList: [
        { id: 'i_20', price: 2300, name: 'Example_1', completed: false },
        { id: 'i_25', price: 2400, name: 'Example_2', completed: false },
        { id: 'i_26', price: 4300, name: 'Example_3', completed: false },
        { id: 'i_28', price: 7300, name: 'Example_4', completed: false },
        { id: 'i_29', price: 8300, name: 'Example_5', completed: false },
        { id: 'i_14', price: 2500, name: 'Example_6', completed: false },
        { id: 'i_13', price: 2370, name: 'Example_7', completed: false },
        { id: 'i_18', price: 2340, name: 'Example_8', completed: false },
        { id: 'i_10', price: 2380, name: 'Example_9', completed: false },
        { id: 'i_5', price: 2309, name: 'Example_12', completed: false },
        { id: 'i_6', price: 2307, name: 'Example_15', completed: false },
        { id: 'i_145', price: 2345, name: 'Example_18', completed: false },
        { id: 'i_45', price: 2338, name: 'Example_28', completed: false },
      ],
    };

    const newList = [...this.state.localList];

    this.componentDidMount = () => {
      this.newArr = newList.filter(list => list.completed === false);
      if (!this.newArr.completed) {
        this.timerID = setInterval(() => {
          this.copyArr = newList.filter(list => list.completed === false);
          if (isNaN(this.copyArr) === true) {
            arrayRandElement(this.copyArr).completed = true;
          }
          this.setState({
            localList: newList,
          });
        }, 2000);
      }
    };

    this.componentDidUpdate = () => {
      if (isNaN(this.copyArr) === false) {
        clearTimeout(this.timerID);
      }
    };
  }

  changeBorder = () => {
    const listFilter1 = this.state.localList.filter(list => list.completed === false);
    const listFilter2 = this.state.localList.filter(list => list.completed === true);
    if (listFilter1 >= listFilter2) {
      return 'list';
    } else if (listFilter1.length === 0) {
      return 'list__border2';
    } else {
      return 'list__border';
    }
  };

  render() {
    return (
      <>
        <ul className={this.changeBorder()}>
          {this.state.localList.map(list => (
            <li key={list.id} className={list.completed === true ? 'green' : 'none'}>
              {list.name} {list.price}
            </li>
          ))}
        </ul>
      </>
    );
  }
}

function arrayRandElement(arr) {
  var rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}
