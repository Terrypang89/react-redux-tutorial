// src/js/components/List.js

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles };

};

const ConnectedList = ({ articles }) => (
    <ul>
      {articles.map(el => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );

const List = connect(mapStateToProps)(ConnectedList);
//mapStateToProps: connect redux state to props of React components
//mapDispatchToProps: connects Redux actions to React props
//ConnectedList:

export default List;
