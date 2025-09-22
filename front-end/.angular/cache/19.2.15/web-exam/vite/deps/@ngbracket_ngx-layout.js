import {
  DefaultFlexAlignDirective,
  DefaultFlexDirective,
  DefaultFlexOffsetDirective,
  DefaultFlexOrderDirective,
  DefaultLayoutAlignDirective,
  DefaultLayoutDirective,
  DefaultLayoutGapDirective,
  FlexAlignDirective,
  FlexAlignStyleBuilder,
  FlexDirective,
  FlexFillDirective,
  FlexFillStyleBuilder,
  FlexModule,
  FlexOffsetDirective,
  FlexOffsetStyleBuilder,
  FlexOrderDirective,
  FlexOrderStyleBuilder,
  FlexStyleBuilder,
  LayoutAlignDirective,
  LayoutAlignStyleBuilder,
  LayoutDirective,
  LayoutGapDirective,
  LayoutGapStyleBuilder,
  LayoutStyleBuilder
} from "./chunk-XPA5OOWF.js";
import {
  ClassDirective,
  DefaultClassDirective,
  DefaultImgSrcDirective,
  DefaultShowHideDirective,
  DefaultStyleDirective,
  ExtendedModule,
  ImgSrcDirective,
  ImgSrcStyleBuilder,
  ShowHideDirective,
  ShowHideStyleBuilder,
  StyleDirective
} from "./chunk-XITDQST2.js";
import {
  DefaultGridAlignColumnsDirective,
  DefaultGridAlignDirective,
  DefaultGridAlignRowsDirective,
  DefaultGridAreaDirective,
  DefaultGridAreasDirective,
  DefaultGridAutoDirective,
  DefaultGridColumnDirective,
  DefaultGridColumnsDirective,
  DefaultGridGapDirective,
  DefaultGridRowDirective,
  DefaultGridRowsDirective,
  GridAlignColumnsDirective,
  GridAlignColumnsStyleBuilder,
  GridAlignDirective,
  GridAlignRowsDirective,
  GridAlignRowsStyleBuilder,
  GridAlignStyleBuilder,
  GridAreaDirective,
  GridAreaStyleBuilder,
  GridAreasDirective,
  GridAreasStyleBuiler,
  GridAutoDirective,
  GridAutoStyleBuilder,
  GridColumnDirective,
  GridColumnStyleBuilder,
  GridColumnsDirective,
  GridColumnsStyleBuilder,
  GridGapDirective,
  GridGapStyleBuilder,
  GridModule,
  GridRowDirective,
  GridRowStyleBuilder,
  GridRowsDirective,
  GridRowsStyleBuilder
} from "./chunk-7LW6KI2G.js";
import {
  BREAKPOINT,
  BREAKPOINTS,
  BREAKPOINT_PRINT,
  BROWSER_PROVIDER,
  BaseDirective2,
  BreakPointRegistry,
  CLASS_NAME,
  CoreModule,
  DEFAULT_BREAKPOINTS,
  DEFAULT_CONFIG,
  LAYOUT_CONFIG,
  MatchMedia,
  MediaChange,
  MediaMarshaller,
  MediaObserver,
  MediaTrigger,
  MockMatchMedia,
  MockMatchMediaProvider,
  ORIENTATION_BREAKPOINTS,
  PrintHook,
  SERVER_TOKEN,
  ScreenTypes,
  StyleBuilder,
  StyleUtils,
  StylesheetMap,
  coerceArray,
  mergeAlias,
  multiply,
  removeStyles,
  sortAscendingPriority,
  sortDescendingPriority,
  validateBasis
} from "./chunk-NZ2JOFOE.js";
import "./chunk-L35B324O.js";
import "./chunk-3C33HZE5.js";
import "./chunk-F4OYN5YW.js";
import "./chunk-NT6COMR5.js";
import "./chunk-7AQY5XBE.js";
import {
  isPlatformServer
} from "./chunk-CE4XFQIV.js";
import {
  Inject,
  NgModule,
  PLATFORM_ID,
  Version,
  __spreadValues,
  setClassMetadata,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵinject
} from "./chunk-EA64WDY4.js";

// ../node_modules/@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout.mjs
var FlexLayoutModule = class _FlexLayoutModule {
  /**
   * Initialize the FlexLayoutModule with a set of config options,
   * which sets the corresponding tokens accordingly
   */
  static withConfig(configOptions, breakpoints = []) {
    return {
      ngModule: _FlexLayoutModule,
      providers: configOptions.serverLoaded ? [{
        provide: LAYOUT_CONFIG,
        useValue: __spreadValues(__spreadValues({}, DEFAULT_CONFIG), configOptions)
      }, {
        provide: BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }, {
        provide: SERVER_TOKEN,
        useValue: true
      }] : [{
        provide: LAYOUT_CONFIG,
        useValue: __spreadValues(__spreadValues({}, DEFAULT_CONFIG), configOptions)
      }, {
        provide: BREAKPOINT,
        useValue: breakpoints,
        multi: true
      }]
    };
  }
  constructor(serverModuleLoaded, platformId) {
    if (isPlatformServer(platformId) && !serverModuleLoaded) {
      console.warn("Warning: Flex Layout loaded on the server without FlexLayoutServerModule");
    }
  }
  static {
    this.ɵfac = function FlexLayoutModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FlexLayoutModule)(ɵɵinject(SERVER_TOKEN), ɵɵinject(PLATFORM_ID));
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _FlexLayoutModule,
      imports: [FlexModule, ExtendedModule, GridModule],
      exports: [FlexModule, ExtendedModule, GridModule]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [FlexModule, ExtendedModule, GridModule, FlexModule, ExtendedModule, GridModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FlexLayoutModule, [{
    type: NgModule,
    args: [{
      imports: [FlexModule, ExtendedModule, GridModule],
      exports: [FlexModule, ExtendedModule, GridModule]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SERVER_TOKEN]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }], null);
})();
var VERSION = new Version("19.0.0");
export {
  BREAKPOINT,
  BREAKPOINTS,
  BREAKPOINT_PRINT,
  BROWSER_PROVIDER,
  BaseDirective2,
  BreakPointRegistry,
  CLASS_NAME,
  ClassDirective,
  CoreModule,
  DEFAULT_BREAKPOINTS,
  DEFAULT_CONFIG,
  DefaultClassDirective,
  DefaultFlexAlignDirective,
  DefaultFlexDirective,
  DefaultFlexOffsetDirective,
  DefaultFlexOrderDirective,
  DefaultGridAlignColumnsDirective,
  DefaultGridAlignDirective,
  DefaultGridAlignRowsDirective,
  DefaultGridAreaDirective,
  DefaultGridAreasDirective,
  DefaultGridAutoDirective,
  DefaultGridColumnDirective,
  DefaultGridColumnsDirective,
  DefaultGridGapDirective,
  DefaultGridRowDirective,
  DefaultGridRowsDirective,
  DefaultImgSrcDirective,
  DefaultLayoutAlignDirective,
  DefaultLayoutDirective,
  DefaultLayoutGapDirective,
  DefaultShowHideDirective,
  DefaultStyleDirective,
  ExtendedModule,
  FlexAlignDirective,
  FlexAlignStyleBuilder,
  FlexDirective,
  FlexFillDirective,
  FlexFillStyleBuilder,
  FlexLayoutModule,
  FlexModule,
  FlexOffsetDirective,
  FlexOffsetStyleBuilder,
  FlexOrderDirective,
  FlexOrderStyleBuilder,
  FlexStyleBuilder,
  GridAlignColumnsDirective,
  GridAlignColumnsStyleBuilder,
  GridAlignDirective,
  GridAlignRowsDirective,
  GridAlignRowsStyleBuilder,
  GridAlignStyleBuilder,
  GridAreaDirective,
  GridAreaStyleBuilder,
  GridAreasDirective,
  GridAreasStyleBuiler,
  GridAutoDirective,
  GridAutoStyleBuilder,
  GridColumnDirective,
  GridColumnStyleBuilder,
  GridColumnsDirective,
  GridColumnsStyleBuilder,
  GridGapDirective,
  GridGapStyleBuilder,
  GridModule,
  GridRowDirective,
  GridRowStyleBuilder,
  GridRowsDirective,
  GridRowsStyleBuilder,
  ImgSrcDirective,
  ImgSrcStyleBuilder,
  LAYOUT_CONFIG,
  LayoutAlignDirective,
  LayoutAlignStyleBuilder,
  LayoutDirective,
  LayoutGapDirective,
  LayoutGapStyleBuilder,
  LayoutStyleBuilder,
  MediaChange,
  MediaMarshaller,
  MediaObserver,
  MediaTrigger,
  ORIENTATION_BREAKPOINTS,
  PrintHook,
  SERVER_TOKEN,
  ScreenTypes,
  ShowHideDirective,
  ShowHideStyleBuilder,
  StyleBuilder,
  StyleDirective,
  StyleUtils,
  StylesheetMap,
  VERSION,
  coerceArray,
  mergeAlias,
  removeStyles,
  sortAscendingPriority,
  sortDescendingPriority,
  validateBasis,
  MatchMedia as ɵMatchMedia,
  MockMatchMedia as ɵMockMatchMedia,
  MockMatchMediaProvider as ɵMockMatchMediaProvider,
  multiply as ɵmultiply
};
/*! Bundled license information:

@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=@ngbracket_ngx-layout.js.map
