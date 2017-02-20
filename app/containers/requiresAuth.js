import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import { Actions } from 'react-native-redux-router'
import Login from '../components/Login'


export default function requiresAuth(Component) {
  class AuthenticatedComponent extends React.Component {
    static propTypes = {
      user: PropTypes.object,
      dispatch: PropTypes.func.isRequired
    };

    componentDidMount() {
      this._checkAndRedirect();
    }

    componentDidUpdate() {
      this._checkAndRedirect();
    }

    _checkAndRedirect() {
      const { dispatch } = this.props;

      if (!this.props.user) {
        Actions.replace(Login)
    }}

    render() {
      return (
      <View style={{flex:1}}>
         { props.user ? <Component {...this.props} /> : <Login /> }
      </View>
      );
    }
  }

  const mapStateToProps = (state) => {
    return {
      // user: state.account.user
    };
  };

  return connect(mapStateToProps)(AuthenticatedComponent);
}
