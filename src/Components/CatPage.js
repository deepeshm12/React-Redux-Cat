import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as catActions from '../actions/catActions';
//import HobbyList from '../hobbies/HobbyList';
//import CatForm from './CatForm';
import {browserHistory} from 'react-router';
//import toastr from 'toastr'; 
import CatsPage from './CatsPage';

class CatPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      cat: this.props.cat, 
      catHobbies: this.props.catHobbies,
      checkBoxHobbies: props.checkBoxHobbies,
      saving: false,
      isEditing: false
    };
    
  }
componentWillReceiveProps(nextProps) {
    if (this.props.cat.id != nextProps.cat.id) {
      this.setState({cat: nextProps.cat});
    }
}
  redirect() {
    browserHistory.push('/cats');
  }

   render() {
    if (this.state.isEditing) {
      return (
      <div>
        <h1>edit cat</h1>
            
      </div>
      )
    }
    return (
      <div>
      
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.state.cat.name}</h1>
        <p>breed: {this.state.cat.breed}</p>
        <p>weight: {this.state.cat.weight}</p>
        <p>temperament: {this.state.cat.temperament}</p>
            <button onClick={this.toggleEdit} className="btn btn-default  ">edit</button>
        <button onClick={this.deleteCat} className="btn btn-default  ">delete</button>
      </div>
      </div>
    );
  }
}


CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
  catHobbies: PropTypes.array.isRequired,
  checkBoxHobbies: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {

   let cat = {};
  const catId = ownProps.params.id;
  if (state.cats.length > 0) {
    cat = Object.assign({}, state.cats.find(cat => cat.id == catId))
  }
  return {cat: cat};
};  
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(catActions, dispatch)
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(CatPage); 

// connect:
// + will invoke mapDispatchToProps, with an argument of the store's dispatch function
// + it has access to the store, b/c you passed store in via the provider 
// + bindActionCreators will take your collection of action creator functions
// + iterate over it, wrap each AC function in store.dispatch(AC function)
// + make them available to your component as this.props.actions = {name of an action: store.dispatch(ac function)}







