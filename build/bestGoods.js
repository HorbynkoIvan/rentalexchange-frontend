var bestGoods=function(e){function t(c){if(a[c])return a[c].exports;var r=a[c]={exports:{},id:c,loaded:!1};return e[c].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t){"use strict";var a=React.createClass({displayName:"BestGoods",render:function(){return React.createElement("div",{className:"row"},React.createElement(c,{title:"ЛУЧШИЕ ПРЕДЛОЖЕНИЯ НЕДЕЛИ"}),React.createElement(r,{image:"../public/img/Product.png",price:"155",goodName:"Name1"}),React.createElement(r,{image:"../public/img/Product.png",price:"250",goodName:"Name2"}),React.createElement(r,{image:"../public/img/Product.png",price:"350",goodName:"Name3"}),React.createElement(r,{image:"../public/img/Product.png",price:"450",goodName:"Name4"}))}}),c=React.createClass({displayName:"Title",render:function(){return React.createElement("h1",{className:"title center-align"},this.props.title)}}),r=React.createClass({displayName:"Goods",render:function(){return React.createElement("div",{className:"col s12 m3 l3"},React.createElement("div",{className:"card z-depth-2"},React.createElement("div",{className:"card-image"},React.createElement("a",{href:"#"},React.createElement("img",{src:this.props.image}))),React.createElement("div",{className:"card-action"},React.createElement("a",{href:"#"},React.createElement("span",{className:"price"},this.props.price),React.createElement("span",{className:"perweek"},this.props.goodName)))))}});React.render(React.createElement(a,null),document.getElementById("bestGoods-id"))}]);
//# sourceMappingURL=bestGoods.js.map