import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Input from '_components/Input';

import meActions from '_actions/me';

import style from './style';

class IndexComponent extends React.Component {
  static propTypes = {
    me: PropTypes.shape({
      name: PropTypes.string,
    }),
    meActions: PropTypes.shape({
      setName: PropTypes.func.isRequired,
    }).isRequired,
  }

  static defaultProps = {
    me: { name: '' },
  }

  onFinish = (name) => {
    this.props.meActions.setName(name);
  }

  renderName = () => {
    const { name } = this.props.me;
    return name ? <Text> Welcome { name } </Text> : null;
  }

  render() {
    return (
      <View style={style.container}>
        <View style={style.card}>
          <Text style={style.text}> Enter your name </Text>
          <Input
            style={style.input}
            onFinish={this.onFinish}
          />
          { this.renderName() }
        </View>
      </View>
    );
  }
}

export default connect(state => ({
  me: state.me,
}), dispatch => ({
  meActions: bindActionCreators(meActions, dispatch),
}))(IndexComponent);
