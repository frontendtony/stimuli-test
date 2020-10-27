import { render } from '@testing-library/react';
import * as nextRouter from 'next/router';
import App from '../pages/index';

nextRouter.useRouter = jest.fn();
nextRouter.useRouter.mockImplementation(() => ({ route: '/' }));

describe('App', () => {
  it('renders without crashing', () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId('app');
    expect(app).toBeInTheDocument();
  });
});
