import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { TreeChart } from "./tree";
import PropTypes from "prop-types";

export class App extends Component {
  static propTypes = {
    data: PropTypes.object
  };
  constructor() {
    super();
    this.state = {
      data: {
        children: [
          {
            children: [{}, {}]
          },
          {
            children: [{}, {}, {}]
          },
          {
            children: [
              {
                children: [{}, {}]
              }
            ]
          }
        ]
      }
    };
    this.addNode = this.addNode.bind(this);
    this.removeNode = this.removeNode.bind(this);
  }

  addNode() {
    this.state.data.children = this.state.data.children || [];
    this.state.data.children.push({});
    this.setState({
      data: this.state.data
    });
  }

  removeNode() {
    this.state.data.children.pop();
    this.setState({
      data: this.state.data
    });
  }
  render() {
    return (
      <div className="App" style={{width:'100%',height:'100%'}}>
        <TreeChart data={this.state.data} />
        <button onClick={this.addNode}>add node</button>
        <button onClick={this.removeNode}>remove node</button>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state[ownProps.id];
}

const ConnectedNode = connect(
  mapStateToProps,
  actions
)(App);
export default ConnectedNode;
