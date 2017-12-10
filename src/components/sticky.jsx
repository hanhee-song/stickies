import React from 'react';
import onClickOutside from "react-onclickoutside";

class Sticky extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      content: this.props.content,
      editing: false,
    };
    this.enableEdit = this.enableEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  enableEdit(field) {
    return () => {
      this.setState({ editing: field });
    };
  }
  
  handleChange(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }
  
  handleSubmit(e) {
    debugger;
    e.preventDefault();
    this.props.updateSticky(this.state.title, this.state.content);
    this.setState({ editing: false });
  }
  
  handleClickOutside(e) {
    if (this.state.editing) {
      this.props.updateSticky(this.state.title, this.state.content);
      this.setState({ editing: false });
    }
  }
  
  render () {
    return(
      <div className="sticky">
        {
          this.state.editing !== "title" ?
          (
            <div className="sticky-title sticky-noninput"
              onClick={this.enableEdit("title")}>
              {this.state.title}
            </div>
          ) : (
            <form className="sticky-title"
              onSubmit={this.handleSubmit}>
              <input
                className="sticky-title-input sticky-input"
                autoFocus={this.state.editing === "title"}
                onChange={this.handleChange("title")}
                value={this.state.title}
                />
            </form>
          )
        }
        {
          this.state.editing !== "content" ?
          (
            <div className="sticky-content sticky-noninput"
              onClick={this.enableEdit("content")}>
              {this.state.content}
            </div>
          ) : (
            <form className="sticky-content"
              onSubmit={this.handleSubmit}>
              <textarea
                className="sticky-content-input sticky-input"
                autoFocus={this.state.editing === "content"}
                onChange={this.handleChange("content")}
                value={this.state.content}
                />
            </form>
          )
        }
      </div>
    );
  }
}

export default onClickOutside(Sticky);
