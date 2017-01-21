import { renderComponent, renderMUIComponent, expect } from '../../test_helper';
import Header from '../../../frontend/components/header/header';

describe('Header' , () => {
  let component;

  beforeEach(() => {
    component = renderMUIComponent(Header);
  });

  it('renders the component', () => {
    expect(component).to.exist;
  });

  it('contains the name Blowify', () => {
    expect(component).to.contain('Blowify');
  });
});
