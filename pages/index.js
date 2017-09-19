import React from 'react';

import connect from '_utils/connect';

import IndexComponent from '_containers/IndexComponent';

// Page must be class extending from React.Component to work properly..
class IndexPage extends React.Component {
  render() {
    return <IndexComponent />;
  }
}

// Page must be connected to provide a store to containers //
export default connect()(IndexPage);
