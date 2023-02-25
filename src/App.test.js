import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('can receive a new user and show it on a list', () => {
  render(<App />);

  const nameInput = screen.getByRole('textbox', {
    name: /name/i,
  });
  const emailInput = screen.getByRole('textbox', {
    name: /enter email/i,
  });
  const button = screen.getByRole('button');

  user.click(nameInput);
  user.keyboard('Koushik');
  user.click(emailInput);
  user.keyboard('koushik@yml.com');

  user.click(button);

  const name = screen.getByRole('textbox', { name: 'Koushik' });
  const email = screen.getByRole('textbox', { name: 'koushik@yml.com' });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
