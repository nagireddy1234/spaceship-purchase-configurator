import React from 'react';
import renderer from 'react-test-renderer';
import { sportPackage } from '../../data/packeges';
import OptionPackage from './index';

it('Checking ColorSelector component rendring correctly or not.', () => {
    const home = renderer
        .create(<OptionPackage planName="Sport" price={100} data={sportPackage} selected={false} onClick={() => {}} />)
        .toJSON();
    expect(home).toMatchSnapshot();
});
