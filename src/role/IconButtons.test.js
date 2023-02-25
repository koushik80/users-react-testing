import { render, screen } from '@testing-library/react';
import IconButtons from './IconButtons';

// Directly Accessing an Accessible Name
test('find elements based on label', () => {
  render(<IconButtons />);

  const signInbutton = screen.getByRole('button', {
    name: /sign in/i
  });
  const signOutbutton = screen.getByRole('button', {
    name: /sign out/i
  });

  expect(signInbutton).toBeInTheDocument();
  expect(signOutbutton).toBeInTheDocument();
});