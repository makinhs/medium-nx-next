import { render } from '@testing-library/react';

import MyCustomComponent from './my-custom-component';

describe('MyCustomComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyCustomComponent />);
    expect(baseElement).toBeTruthy();
  });
});
