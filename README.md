# angular-flex-picture

[![Build Status](https://travis-ci.org/benbraou/angular-flex-picture.svg?branch=main)](https://travis-ci.org/benbraou/angular-flex-picture)


angular-flex-picture is a small library that is meant to be used within an @angular/flex-layout project.  
It provides a directive `flexMedia` that applies a media query to an HTML source element within a picture element.  
All the breakpoint aliases defined in @angular/flex-layout are recognized.  


# Basic example

* Make sure @angular/flex-layout is installed otherwise  `npm install --save @angular/flex-layout`  
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

# Support and contributing 
Please feel free to open [an issue](https://github.com/benbraou/angular-flex-picture/issues?state=open).  
Pull requests with the fix and a test are welcome.  
To set up your local development environment, clone/fork and then run `npm install` and `npm run install-peer`.  
`npm run install-peer` will install @angular/flex-layout that is a peer dependency for angular-flex-picture  
The rest of scripts are further explained in the [excellent angular library quickstart](https://github.com/filipesilva/angular-quickstart-lib)  

# Acknowledgements
The library was built with [angular-quickstart-lib](https://github.com/filipesilva/angular-quickstart-lib)


