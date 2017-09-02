import { YoutubedemoPage } from './app.po';

describe('youtubedemo App', () => {
  let page: YoutubedemoPage;

  beforeEach(() => {
    page = new YoutubedemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
