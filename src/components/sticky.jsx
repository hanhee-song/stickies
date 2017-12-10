import React from 'react';

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
  
  handleSubmit() {
    this.props.updateSticky(this.state.title, this.state.content);
  }
  
  render () {
    return(
      <div className="sticky">
        {
          !this.state.editing ?
          (
            <div className="sticky-title"
              onClick={this.enableEdit("title")}>
              {this.state.title}
            </div>
          ) : (
            <form className="sticky-title form"
              onSubmit={this.handleSubmit}>
              <input
                autoFocus={this.state.editing === "title"}
                onChange={this.handleChange("title")}
                value={this.state.title}
                />
            </form>
          )
        }
        {
          !this.state.editing ?
          (
            <div className="sticky-content"
              onClick={this.enableEdit("content")}>
              {this.state.content}
            </div>
          ) : (
            <form className="sticky-content form"
              onSubmit={this.handleSubmit}>
              <input
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

export default Sticky;
