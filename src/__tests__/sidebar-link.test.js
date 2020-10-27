import { render } from '@testing-library/react';
import SidebarLink from '../components/layout/SidebarLink';

describe('Sidebar Link', () => {
  it('should render an anchor element with the href value', () => {
    const { getByTestId } = render(<SidebarLink href="/">Home</SidebarLink>);

    expect(getByTestId('sidebar-link')).toHaveAttribute('href', '/');
  });
});
