import React, {PropTypes} from 'react';
import TextInput from './TextInput';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as sessionActions from '../actions/sessionAction';

class LogInPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {credentials:{email: '',  password: ''}}
    this.onChange = this.onChange.bind(this);
    this.onSave = this.onSave.bind(this);
  }

  onChange(event) {
    const field = event.target.name;
    const credentials = this.state.credentials;
    credentials[field] = event.target.value;
    return this.setState({credentials: credentials});
  }

  onSave(event) {
    debugger;
    event.preventDefault();
    this.setState({
      credentials:{
        email: '', 
         password: ''
        }
    
    });
    this.props.actions.loginUser(this.state.credentials);
     
  }

  render() {
     let {loginError} = this.props;
    return (
      <div>
        <form>
          <TextInput
            name="email"
            label="email"
            value={this.state.credentials.email}
            onChange={this.onChange}/>

          <TextInput
            name="password"
            label="password"
            type="password"
            value={this.state.credentials.password}
            onChange={this.onChange}/>

          <input
            type="submit"
            className="btn btn-primary"
            onClick={this.onSave}/>
        <div className="message">
           { loginError.loginError && <div>{loginError.loginError}</div> }
        </div>
        </form>
      </div>
  );
  }
}

const mapStateToProps = (state) => {
      debugger;
  return {
      loginError: state.loginError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(sessionActions, dispatch),
   //login: (email, password) => dispatch(login(email, password))
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
