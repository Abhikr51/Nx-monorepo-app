import { render } from '@testing-library/react';

import Dynotrace from './dynotrace';

describe('Dynotrace', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Dynotrace />);
    expect(baseElement).toBeTruthy();
  });
});
