import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // before changes in connect, execute this componentDidMount as Handle Submit, 
    // and getData act liek mapDispatchToProps, dispatching action to reducer
    //this.props.getData();
    this.props.getData("https://api.valentinog.com/api/link/");
  }

  render() {
    return (
      <ul>
        {this.props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }; // connecr props articles to state.remoteArticles for state reading
}

export default connect(
  mapStateToProps,
  { getData }
)(Post);
