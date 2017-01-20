import { renderComponent , expect } from '../../test_helper';
import Header from '../../../../frontend/components/header/header';

describe('Header' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
