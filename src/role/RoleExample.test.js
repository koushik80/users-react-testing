import { render, screen } from '@testing-library/react';
import RoleExample from './RoleExample';

//finding elements by role
test('can find element by role', () => {
  render(<RoleExample />);

  const roles = [
    'link',
    'button',
    'contentinfo',
    'heading',
    'banner',
    'img',
    'checkbox',
    'spinbutton',
    'radio',
    'textbox',
    'listitem',
    'list'
  ];

  for (let role of roles) {
    const el = screen.getByRole(role);

    expect(el).toBeInTheDocument();

  };

});