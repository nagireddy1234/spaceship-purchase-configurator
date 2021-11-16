import React from 'react';
import renderer from 'react-test-renderer';
import { colors } from '../../home';
import ColorSelector from './index';

it('Checking ColorSelector component rendring correctly or not.', () => {
    const home = renderer
        .create(<ColorSelector onClick={() => {}} selected={false} color={colors.white} colorName="White" price={0} />)
        .toJSON();
    expect(home).toMatchSnapshot();
});
