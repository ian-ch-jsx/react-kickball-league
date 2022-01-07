import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Team from './Team';

test('renders team name', () => {
  const { container } = render(
    <MemoryRouter>
      <Team match={{ params: { id: 1 } }} />
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
