import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Teams from './Teams';

test('renders list of teams', async () => {
  const { container } = render(
    <MemoryRouter>
      <Teams />
    </MemoryRouter>
  );

  await screen.findByText('Bridge City Sneakers', 'VanCougers');

  expect(container).toMatchSnapshot();
});
