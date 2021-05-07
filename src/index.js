import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

const specialAlert = () => window.alert("Well aren't you special")

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={specialAlert} />
  </div>,
  document.getElementById('root')
);