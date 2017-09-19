import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import Rxjs from 'rxjs';

export default class Input extends React.PureComponent {
  static propTypes = {
    onFinish: PropTypes.func.isRequired,
  }

  state = {
    text: '',
  }

  componentDidMount() {
    this.subscription = this.$onChange
    .debounceTime(750)
    .subscribe(searchValue => this.props.onFinish(searchValue));
  }

  componentWillUnmount() {
    if (this.subscription) this.subscription.unsubscribe();
  }

  onChange = (e) => {
    this.$onChange.next(e.target.value);
  }

  $onChange = new Rxjs.Subject();

  render() {
    return <TextInput {...this.props} onChange={this.onChange} />;
  }
}
