import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import './styles.css';
import api from '../../services/api';

export default class Main extends Component {
  state = {
    newBox: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(this.state.newBox);
    if (this.state.newBox === '' || this.state.newBox === null || this.state.newBox === undefined) {
      alert('Por favor, coloque um nome valido! :)');
      return false;
    }
    const response = await api.post('boxes', {
      title: this.state.newBox,

    });

    this.props.history.push(`/box/${response.data._id}`);

    // console.log(response.data);
  };

  handleInputChange = (e) => {
    this.setState({ newBox: e.target.value });
  };

  render() {
    return (
      <div id="main-container">
        <form onSubmit={this.handleSubmit}>
          <img src={logo} alt="" />
          <input
            placeholder="Criar um box"
            value={this.state.newBox}
            onChange={this.handleInputChange}
          />
          <button type="submit">Criar</button>
        </form>
      </div>
    );
  }
}
