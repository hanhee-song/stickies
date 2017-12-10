import React from 'react';
import Sticky from './sticky';

class StickyIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stickies: [
        {
          title: "sticky 1",
          content: "sticky 1 content"
        },
        {
          title: "sticky 2",
          content: "sticky 2 content"
        }
      ]
    };
    this.updateSticky = this.updateSticky.bind(this);
  }
  
  updateSticky(title, content) {
    return () => {
      
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
