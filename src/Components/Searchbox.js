import React from 'react';

const Searchbox = ({ searhcChange }) => {
    return (
      <div>
        <input onChange={searhcChange} className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots'/>
      </div>
    );
}

export default Searchbox;