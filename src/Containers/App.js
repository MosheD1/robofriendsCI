import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import 'tachyons';
import Header from '../Components/Header';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
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
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return isPending ?
       <h1>Loading</h1> :
       (
        <div className='tc'>
          <Header />
          <Searchbox searhcChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
   } 
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
