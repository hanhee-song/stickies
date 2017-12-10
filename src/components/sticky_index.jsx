import React from 'react';
import PropTypes from 'prop-types';
import Sticky from './sticky';

class StickyIndex extends React.Component {
  render () {
    return(
      <div>
        This is a sticky index
        <Sticky />
      </div>
    );
  }
}

export default StickyIndex;
