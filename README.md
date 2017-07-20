# angular-flex-picture

angular-flex-picture is a small library that is meant to be used within an @angular/flex-layout project.  
It provides a directive `flexMedia` that applies a media query to an HTML source element within a picture element.  
All the breakpoint aliases defined in @angular/flex-layout are recognized.  


# Basic example

* Install angular-flex-picture `npm install --save angular-flex-picture`  

* Make sure to import `FlexMediaModule` in the relevant module
```typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexMediaModule} from 'angular-flex-picture';

import {AppComponent} from './app.component';

@NgModule({
  imports: [BrowserModule, FlexMediaModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

* Add the flexMedia directive. The possible values passed to the `flexMedia` directive are the breakpoint aliases defined in the 
[responsive API ](https://github.com/angular/flex-layout/wiki/Responsive-API#mediaqueries-and-aliases) of @angular/flex-layout.

```html
<picture>
  <source [flexMedia]="'xs'" srcset="https://dummyimage.com/300x200/d607d6/fff.png&text=xs">
  <source [flexMedia]="'md'" srcset="https://dummyimage.com/500x300/0820d4/fff.png&text=md">
  <img src="https://dummyimage.com/600x400/ffffff/000000.png&text=default" style="width:auto;">
</picture>
```

More information:
- More about the [ picture HTML element ](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture)
- [ Creating custom breakpoints](https://github.com/angular/flex-layout/wiki/Custom-Breakpoints)

# Acknowledgements
The library was built with [angular-quickstart-lib] (https://github.com/filipesilva/angular-quickstart-lib)


