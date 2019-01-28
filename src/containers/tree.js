import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// import * as d3 from "d3";
import "./../main.css";
import Tree from "react-d3-tree";

const myTreeData = [
  {
  "id": 1,
  "name": "Graduation",
  "attributes": {
    "level": "1.0",
    "id": 1,
    "description": "Top Level attributes  description"
  },
  "children": [
    {
      "id": 1,
      "name": "Level 2: Post Grad",
      "description": "Level 2:Post grad  ",
      "attributes": {
        "level": "1.1",
        "id": "1",
        "description": "Level 2:A attributes  description  "
      }
    },
    {
      "id": "2",
      "name": "Level 2: B",
      "description": "Level 2:B Level Description",
      "level": "1.1",
      "attributes": {
        "id": "1",
        "description": "Level 2:A attributes description",
        "keyA": "val A",
        "keyB": "val B",
        "keyC": "val C"
      }
    }
  ]
}
];

const transVal = {
  x: 582,
  y: 62
};

let svgObject = {};

const svgSquare = {
  shape: "circle",
  shapeProps: {
    width: 10,
    height: 10,
    x: -10,
    y: -10
  }
};

const myObj = {siblings: 2, nonSiblings: 1}

export class TreeChart extends Component {
  hello = () => {
    console.log("clicked event worked");
    setTimeout(() => {
      console.log(
        this.divElement.children[0].children[0].children[0].getBBox()
      );
      let box = this.divElement.children[0].children[0].children[0].getBBox();
      this.divElement.children[0].children[0].style.height =
        box.height + 60 + "px";
    }, 500);
  };
  componentDidMount() {
    setTimeout(() => {
      console.log(
        this.divElement.children[0].children[0].children[0].getBBox()
      );
      let box = this.divElement.children[0].children[0].children[0].getBBox();
      this.divElement.children[0].children[0].style.height =
        box.height + 60 + "px";
    }, 500);
  }
  render() {
    return (
      <div
        id="treeWrapper"
        style={{ height: "100%" }}
        ref={divElement => (this.divElement = divElement)}
      >
        <Tree
          zoomable={false}
          orientation="vertical"
          onClick={() => this.hello()}
          pathFunc="diagonal"
          translate={transVal}
          styles={svgObject}
          data={myTreeData}
          separation = {myObj}
        />
      </div>
    );
  }
}
