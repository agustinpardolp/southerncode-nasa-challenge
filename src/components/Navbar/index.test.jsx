import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';

import { getFullWrappedComponent } from '../../utils';

import Navbar from '.';

describe('Rover view', () => {
  render(getFullWrappedComponent(Navbar));

  test('Render component correctly', async () => {
    expect(await screen.findByText('Rover Panel de Control')).toBeInTheDocument();
  });
});
