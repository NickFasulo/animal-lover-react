import React, { Component } from 'react';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div id="sidebar" className="ui visible wide sidebar right">
        <h3 id="likes">Likes</h3>
        <div id="items" className="ui items">
          <div id="item" className="item">
            <div className="ui small">
              <img src="#" />
            </div>
            <div className="middle aligned content">
              <a className="header">Animal</a>
            </div>
          </div>
          <h3 id="dislikes">Dislikes</h3>
          <div id="item" className="item">
            <div className="ui small">
              <img src="#" />
            </div>
            <div className="middle aligned content">
              <a className="header">Animal</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
