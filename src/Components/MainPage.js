import React from 'react';
import './MainPage.css';
import 'tachyons';
import Header from '../Components/Header';
import CardList from '../Components/CardList';
import Searchbox from '../Components/Searchbox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';

class MainPage extends React.Component {
  
  componentDidMount() {
    this.props.OnRequestRobots();
  }

  filterRobots = (robots) => {
    return robots.filter(robot => {
        return robot.name.toLocaleLowerCase().includes(this.props.searchField.toLocaleLowerCase());
      });
  }

  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props;

    return isPending ?
       <h1>Loading</h1> :
       (
        <div className='tc'>
          <Header />
          <Searchbox searhcChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={this.filterRobots(robots)}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
   } 
}

export default MainPage;
