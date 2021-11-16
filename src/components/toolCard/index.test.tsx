import React from 'react';
import renderer from 'react-test-renderer';
import ToolCard from './index';

it('Checking ColorSelector component rendring correctly or not.', () => {
    const home = renderer.create(<ToolCard title="100 MW" price={0} selected={false} onClick={() => {}} />).toJSON();
    expect(home).toMatchSnapshot();
});
