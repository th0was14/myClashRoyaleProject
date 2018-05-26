import React from "react";
import ReactDOM from "react-dom";
import { Input } from "../presentational/Input";
import { postComment, fetchByTypeAndId } from "../../service/index";

export class FormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      seo_title: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  public state: { seo_title: string };

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value }, () =>
      console.log(this.state)
    );
  };

  addComment = event => {
    fetchByTypeAndId("Comments").then(comments => {
      postComment(this.state.seo_title, comments.length);
    });
  };

  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <Input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          handleChange={this.handleChange}
        />
        <button type="button" onClick={this.addComment}>
          Update comment
        </button>
      </form>
    );
  }
}
