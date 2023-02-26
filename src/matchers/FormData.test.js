import { render, screen, within } from '@testing-library/react';
import FormData from './FormData';

test('the form displays two buttons', () => {
  render(<FormData />);

  const form = screen.getByRole('form');
  const buttons = within(form).getAllByRole('button');

  expect(buttons).toHaveLength(2);

  //expect(form).toContainRole('button', 2);
});