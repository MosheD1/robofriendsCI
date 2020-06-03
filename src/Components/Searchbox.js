import React from 'react';

const Searchbox = ({ searhcChange }) => {
    return (
      <div>
        <input aria-label="Search Robot" onChange={searhcChange} className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots'/>
      </div>
    );
}

export default Searchbox;