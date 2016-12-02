import { MemeMaker2Page } from './app.po';

describe('meme-maker2 App', function() {
  let page: MemeMaker2Page;

  beforeEach(() => {
    page = new MemeMaker2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
