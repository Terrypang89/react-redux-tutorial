import React, { Component } from "react";
import { connect } from "react-redux";
import { addArticle } from "../actions/index";

/*
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
};
*/

function mapDispatchToProps(dispatch) {
  return {
    addArticle1: article => dispatch(addArticle(article))
    //addArticle: article => dispatch( return { type: ADD_ARTICLE, article } )
    // store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
    /* trigger rootReducer
    function rootReducer(state = initialState, action) {
      if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, { articles: state.articles.concat(action.payload)}
        );
      }
      return state;
    };
    */
  };
}

class ConnectedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    //console.log(event.target.id + ": " + event.target.value);
  }

  handleSubmit(event) { // dispatch an action
    event.preventDefault();
    const { title } = this.state;
    //const forbiddenWords = ['spam', 'money'];
    //const foundWord = forbiddenWords.filter(word => title.includes(word) )
    //if (foundWord) {
    //  return this.props.titleForbidden();
    //}
    this.props.addArticle1({ title });
    this.setState({ title: "" });
  }
  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <button type="submit">SAVE</button>
      </form>
    );
  }
}

const Form = connect(
  null,
  mapDispatchToProps
)(ConnectedForm);

export default Form
