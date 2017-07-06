import React, {PropTypes} from 'react';
import {Link, browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CatList from './CatList';
import * as actions from '../actions/catActions';

//import NewCatPage from './NewCatPage';


class CatsPage extends React.Component {
   componentWillMount() {
     debugger;
    if (this.props.cats[0].id == '') {
      this.props.actions.loadCats();
    }
  }
  render() {
    const cats = this.props.cats;
    return (
      <div className="col-md-12">
        <h1>Cats </h1>
       <div className="col-md-4">
          <CatList cats={cats} />
         </div>
        <div className="col-md-8">
        {this.props.children}
        </div>
      </div>
    );
  }
  
}
function mapStateToProps(state, ownProps) {
  if (state.cats.length > 0) {
    return {
      cats: state.cats
    };
  } else {
    return {
      cats: [{id: '', name: '', breed: '', temperament: '', weight: '', hobbies: []}]
    }
  }
}
function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)}
};
export default connect(mapStateToProps,mapDispatchToProps)(CatsPage);