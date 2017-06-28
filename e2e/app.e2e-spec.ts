import { TestNgEventPage } from './app.po';

describe('test-ng-event App', () => {
  let page: TestNgEventPage;

  beforeEach(() => {
    page = new TestNgEventPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
