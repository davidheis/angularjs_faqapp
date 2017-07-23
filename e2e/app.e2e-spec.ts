import { Faqapp2Page } from './app.po';

describe('faqapp2 App', () => {
  let page: Faqapp2Page;

  beforeEach(() => {
    page = new Faqapp2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
