import React, { Component } from 'react';

import CommentsDisplayView from '../view/commentsDisplayView';

/*
 *            Props Name        Description                                     Value
 *@props -->  props name here   description here                                Value Type Here
 *
 */

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // Component Life Cycle Functions
  // Component Functions

  render() {
    return <CommentsDisplayView {...this.props} />;
  }
}

export default CommentsContainer;
