import { TurorialAngularPage } from './app.po';

describe('turorial-angular App', function() {
  let page: TurorialAngularPage;

  beforeEach(() => {
    page = new TurorialAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
