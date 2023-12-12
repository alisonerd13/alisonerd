import { render } from '@testing-library/react';

import Interface from './interface';

describe('Interface', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Interface />);
    expect(baseElement).toBeTruthy();
  });
});
