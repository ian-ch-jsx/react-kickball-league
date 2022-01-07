import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Team';

test.skip('should render an edit form', async () => {
  const { container } = render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );

  await screen.findByText('Bridge City Sneakers');

  expect(container).toMatchSnapshot();
});
