import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Team from './Team';

test('renders team name and players', async () => {
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  await screen.findByText('Bridge City Sneakers', 'Ron Long');
  expect(container).toMatchSnapshot();
});
