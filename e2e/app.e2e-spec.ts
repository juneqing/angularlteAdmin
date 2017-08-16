import { NgAdminPage } from './app.po';

describe('ng-admin App', () => {
  let page: NgAdminPage;

  beforeEach(() => {
    page = new NgAdminPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
