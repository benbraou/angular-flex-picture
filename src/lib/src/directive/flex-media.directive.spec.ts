import {Component, DebugElement} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BreakPointRegistry, FlexLayoutModule} from '@angular/flex-layout';
import {BreakPoint} from '@angular/flex-layout';
import {By} from '@angular/platform-browser';

import {FlexMediaDirective} from './flex-media.directive';

const TEST_BREAKPOINTS = [
  {alias: 'xs', mediaQuery: 'screen and (max-width: 599px)'}, {
    alias: 'md',
    mediaQuery: 'screen and (min-width: 960px) and (max-width: 1279px)'
  }
];

@Component({
  template: `
<picture>
  <source [flexMedia]="'${
                          TEST_BREAKPOINTS[0].alias
                        }'" srcset="https://dummyimage.com/600x400/c236c2/434de0.png">
  <source [flexMedia]="'${
                          TEST_BREAKPOINTS[1].alias
                        }'" srcset="https://dummyimage.com/800x600/367ac2/434de0.png">
  <img src="https://dummyimage.com/800x600/c2ad36/42de4f.png" style="width:auto;">
</picture>
`
})
class TestFlexMediaComponent {
}

describe('Directive: FlexMedia', () => {
  let component: TestFlexMediaComponent;
  let fixture: ComponentFixture<TestFlexMediaComponent>;
  let pictureEl: DebugElement;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          imports: [FlexLayoutModule],
          declarations: [TestFlexMediaComponent, FlexMediaDirective],
          providers: [{
            provide: BreakPointRegistry,
            useFactory: () => new BreakPointRegistry(TEST_BREAKPOINTS),
            deps: []
          }]
        })
        .compileComponents();
    fixture = TestBed.createComponent(TestFlexMediaComponent);
    component = fixture.componentInstance;
    pictureEl = fixture.debugElement.query(By.css('picture'));
  }));

  it('should set the media attribute with the media query matching the breakpoint alias',
     async(() => {
       fixture.detectChanges();
       let sourceElts = pictureEl.nativeElement.querySelectorAll('source');
       expect(sourceElts).toBeTruthy();
       expect(sourceElts.length).toEqual(2);
       expect(sourceElts[0].getAttribute('media'))
           .toEqual(TEST_BREAKPOINTS[0].mediaQuery);
       expect(sourceElts[1].getAttribute('media'))
           .toEqual(TEST_BREAKPOINTS[1].mediaQuery);
     }));
});
