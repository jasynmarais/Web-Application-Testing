import React from 'react';
import App, { getState } from './App';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

it('renders without crashing', () => {
  rtl.render(<App/>);
});