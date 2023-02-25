import { render, screen, within } from '@testing-library/react';
import UserList from './UserList';

function renderComponent() {
  const users = [
    { name: 'Koushik', email: 'koushik@yml.com' },
    { name: 'Rosa', email: 'rosabella@yml.com' }
  ];
  render(<UserList users={users} />);

  return {
    users,
  }
};

test('render one row per user', () => {
  renderComponent();
  // Find all the rows in the table
  const rows = within(screen.getByTestId('users')).getAllByRole('row'); // mentioned as in the component: <tbody data-testid="users">
  //screen.logTestingPlaygroundURL();
  // eslint-disable-next-line
  //const rows = container.querySelectorAll('tbody tr');

  // Assertion: correct number of rows in the table
  expect(rows).toHaveLength(2);
});

test('render the email and name of each user', () => {
  const { users } = renderComponent();

  for (let user of users) {
    const name = screen.getByRole('cell', { name: user.name });
    const email = screen.getByRole('cell', { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
