import {browser, by, element, ElementFinder} from 'protractor';

describe('QuickStart Lib E2E Tests', function() {

  beforeEach(() => browser.get(''));

  afterEach(() => {
    browser.manage().logs().get('browser').then((browserLog: any[]) => {
      expect(browserLog).toEqual([]);
    });
  });
  it('should', () => {
    element.all(by.css('source')).then(function(sourceElts: ElementFinder[]) {
      expect(sourceElts.length).toEqual(2);
      expect(sourceElts[0].getAttribute('media'))
          .toEqual('screen and (max-width: 599px)');
    });
  });
});
