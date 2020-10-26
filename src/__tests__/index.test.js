import { render } from '@testing-library/react';
import App from '../pages/index';

describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId('app');
    expect(app).toBeInTheDocument();
  });
});
