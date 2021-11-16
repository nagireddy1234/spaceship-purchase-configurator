import React from 'react';
import renderer from 'react-test-renderer';
import Home from './index';

it('Checking home page rendring correctly or not.', () => {
    const home = renderer.create(<Home />).toJSON();
    expect(home).toMatchSnapshot();
});
