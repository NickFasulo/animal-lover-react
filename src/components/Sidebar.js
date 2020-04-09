import React, { Component } from 'react';

class Sidebar extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="sidebar">
        <h3>Likes</h3>
        <h3>Dislikes</h3>
      </div>
    );
  }
}

export default Sidebar;
