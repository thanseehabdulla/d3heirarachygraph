import React from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
// import * as d3 from "d3";
import "./../main.css";
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'Top Level',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
      {
        name: 'Level 2: B',
      },
      {
        name: 'Level 2: B',
      },
      {
        name: 'Level 2: B',
      },
      {
        name: 'Level 2: B',
        children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
        children: [
      {
        name: 'Level 2: A',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },]
      },]
      },]
      },]
      },]
      },
    ],
  },
];

const transVal = {
  x: 582,
  y : 62
}

let svgObject={

}

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10,
  }
}



export class TreeChart extends Component {
   hello = () =>{
    console.log("clicked event worked");
    setTimeout(()=>{
      console.log(this.divElement.children[0].children[0].children[0].getBBox());
      let box = this.divElement.children[0].children[0].children[0].getBBox();
      this.divElement.children[0].children[0].style.height = box.height + 60 +"px";
    }, 500)
  }
  componentDidMount() {
    setTimeout(()=>{
      console.log(this.divElement.children[0].children[0].children[0].getBBox());
      let box = this.divElement.children[0].children[0].children[0].getBBox();
      this.divElement.children[0].children[0].style.height = box.height + 60 +"px";
    }, 500)
  }
  render() {
    return (
      <div id="treeWrapper" style={{ height: '100%'}} ref={ (divElement) => this.divElement = divElement}>
        <Tree zoomable={false} orientation="vertical" onClick={()=>this.hello()} pathFunc="diagonal" translate ={transVal} styles={svgObject} data={myTreeData} />
      </div>
    );
  }
}
