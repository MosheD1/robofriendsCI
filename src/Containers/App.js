import React from 'react';
import {connect} from 'react-redux';
import 'tachyons';
import MainPage from '../Components/MainPage';
import {setSearchField, requestRobots} from '../actions';

const mapStateToProps = state => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending : state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (e) => dispatch(setSearchField(e.target.value)),
    OnRequestRobots: () => dispatch(requestRobots())
  }
}

class App extends React.Component {
  
  componentDidMount() {
    console.log(this.props);
    this.props.OnRequestRobots();
  }

  render() {
    return <MainPage {...this.props} />
  } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
