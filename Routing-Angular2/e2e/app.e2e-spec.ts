import { RoutingAngular2Page } from './app.po';

describe('routing-angular2 App', () => {
  let page: RoutingAngular2Page;

  beforeEach(() => {
    page = new RoutingAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
