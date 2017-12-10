import React from 'react';
import Sticky from './sticky';

class StickyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickies: [
        {
          title: "sticky 1",
          content: "sticky 1 content",
        },
        {
          title: "",
          content: "",
        },
      ]
    };
    this.updateSticky = this.updateSticky.bind(this);
  }
  
  updateSticky(i) {
    return (title, content) => {
      const updatedSticky = {
        title,
        content,
      };
      const stickies = this.state.stickies.map((sticky, j) => {
        if (i === j) {
          return updatedSticky;
        } else {
          return sticky;
        }
      });
      if (i === stickies.length - 1 && (title || content)) {
        stickies.push({ title: "", content: "" });
      }
      this.setState({
        stickies
      });
    };
  }
  
  render () {
    const stickies = this.state.stickies.map((sticky, i) => {
      return (
        <Sticky
          key={i}
          title={sticky.title}
          content={sticky.content}
          updateSticky={this.updateSticky(i)}/>
      );
    });
    
    return(
      <div className="sticky-index">
        {stickies}
      </div>
    );
  }
}

export default StickyIndex;
