import ReactDOM from 'react-dom'
import React from 'react';
import SocialNetworkApp from './App';

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<SocialNetworkApp />, div)
  ReactDOM.unmountComponentAtNode(div)
});
