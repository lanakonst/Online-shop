import {
  BaseDirective2,
  CoreModule,
  LAYOUT_CONFIG,
  MediaMarshaller,
  SERVER_TOKEN,
  StyleBuilder,
  StyleUtils
} from "./chunk-NZ2JOFOE.js";
import {
  DomSanitizer
} from "./chunk-L35B324O.js";
import {
  coerceBooleanProperty
} from "./chunk-3C33HZE5.js";
import {
  NgClass,
  NgStyle,
  isPlatformServer
} from "./chunk-CE4XFQIV.js";
import {
  Directive,
  ElementRef,
  Inject,
  Injectable,
  Input,
  KeyValueDiffers,
  NgModule,
  Optional,
  PLATFORM_ID,
  Renderer2,
  SecurityContext,
  Self,
  __spreadValues,
  setClassMetadata,
  takeUntil,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵgetInheritedFactory
} from "./chunk-EA64WDY4.js";

// ../node_modules/@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout-extended.mjs
var ClassDirective = class _ClassDirective extends BaseDirective2 {
  /**
   * Capture class assignments so we cache the default classes
   * which are merged with activated styles and used as fallbacks.
   */
  set klass(val) {
    this.ngClassInstance.klass = val;
    this.setValue(val, "");
  }
  constructor(elementRef, styler, marshal, renderer2, ngClassInstance) {
    super(elementRef, null, styler, marshal);
    this.ngClassInstance = ngClassInstance;
    this.DIRECTIVE_KEY = "ngClass";
    if (!this.ngClassInstance) {
      this.ngClassInstance = new NgClass(elementRef, renderer2);
    }
    this.init();
    this.setValue("", "");
  }
  updateWithValue(value) {
    this.ngClassInstance.ngClass = value;
    this.ngClassInstance.ngDoCheck();
  }
  // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************
  /**
   * For ChangeDetectionStrategy.onPush and ngOnChanges() updates
   */
  ngDoCheck() {
    this.ngClassInstance.ngDoCheck();
  }
  static {
    this.ɵfac = function ClassDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ClassDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgClass, 10));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ClassDirective,
      inputs: {
        klass: [0, "class", "klass"]
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ClassDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }, {
    type: Renderer2
  }, {
    type: NgClass,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }], {
    klass: [{
      type: Input,
      args: ["class"]
    }]
  });
})();
var inputs$3 = ["ngClass", "ngClass.xs", "ngClass.sm", "ngClass.md", "ngClass.lg", "ngClass.xl", "ngClass.lt-sm", "ngClass.lt-md", "ngClass.lt-lg", "ngClass.lt-xl", "ngClass.gt-xs", "ngClass.gt-sm", "ngClass.gt-md", "ngClass.gt-lg"];
var selector$3 = `
  [ngClass], [ngClass.xs], [ngClass.sm], [ngClass.md], [ngClass.lg], [ngClass.xl],
  [ngClass.lt-sm], [ngClass.lt-md], [ngClass.lt-lg], [ngClass.lt-xl],
  [ngClass.gt-xs], [ngClass.gt-sm], [ngClass.gt-md], [ngClass.gt-lg]
`;
var DefaultClassDirective = class _DefaultClassDirective extends ClassDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$3;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultClassDirective_BaseFactory;
      return function DefaultClassDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultClassDirective_BaseFactory || (ɵDefaultClassDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultClassDirective)))(__ngFactoryType__ || _DefaultClassDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultClassDirective,
      selectors: [["", "ngClass", ""], ["", "ngClass.xs", ""], ["", "ngClass.sm", ""], ["", "ngClass.md", ""], ["", "ngClass.lg", ""], ["", "ngClass.xl", ""], ["", "ngClass.lt-sm", ""], ["", "ngClass.lt-md", ""], ["", "ngClass.lt-lg", ""], ["", "ngClass.lt-xl", ""], ["", "ngClass.gt-xs", ""], ["", "ngClass.gt-sm", ""], ["", "ngClass.gt-md", ""], ["", "ngClass.gt-lg", ""]],
      inputs: {
        ngClass: "ngClass",
        "ngClass.xs": "ngClass.xs",
        "ngClass.sm": "ngClass.sm",
        "ngClass.md": "ngClass.md",
        "ngClass.lg": "ngClass.lg",
        "ngClass.xl": "ngClass.xl",
        "ngClass.lt-sm": "ngClass.lt-sm",
        "ngClass.lt-md": "ngClass.lt-md",
        "ngClass.lt-lg": "ngClass.lt-lg",
        "ngClass.lt-xl": "ngClass.lt-xl",
        "ngClass.gt-xs": "ngClass.gt-xs",
        "ngClass.gt-sm": "ngClass.gt-sm",
        "ngClass.gt-md": "ngClass.gt-md",
        "ngClass.gt-lg": "ngClass.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultClassDirective, [{
    type: Directive,
    args: [{
      selector: selector$3,
      inputs: inputs$3
    }]
  }], null, null);
})();
var ImgSrcStyleBuilder = class _ImgSrcStyleBuilder extends StyleBuilder {
  buildStyles(url) {
    return {
      content: url ? `url(${url})` : ""
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵImgSrcStyleBuilder_BaseFactory;
      return function ImgSrcStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵImgSrcStyleBuilder_BaseFactory || (ɵImgSrcStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_ImgSrcStyleBuilder)))(__ngFactoryType__ || _ImgSrcStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ImgSrcStyleBuilder,
      factory: _ImgSrcStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgSrcStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ImgSrcDirective = class _ImgSrcDirective extends BaseDirective2 {
  set src(val) {
    this.defaultSrc = val;
    this.setValue(this.defaultSrc, "");
  }
  constructor(elementRef, styleBuilder, styler, marshal, platformId, serverModuleLoaded) {
    super(elementRef, styleBuilder, styler, marshal);
    this.platformId = platformId;
    this.serverModuleLoaded = serverModuleLoaded;
    this.DIRECTIVE_KEY = "img-src";
    this.defaultSrc = "";
    this.styleCache = imgSrcCache;
    this.init();
    this.setValue(this.nativeElement.getAttribute("src") || "", "");
    if (isPlatformServer(this.platformId) && this.serverModuleLoaded) {
      this.nativeElement.setAttribute("src", "");
    }
  }
  /**
   * Use the [responsively] activated input value to update
   * the host img src attribute or assign a default `img.src=''`
   * if the src has not been defined.
   *
   * Do nothing to standard `<img src="">` usages, only when responsive
   * keys are present do we actually call `setAttribute()`
   */
  updateWithValue(value) {
    const url = value || this.defaultSrc;
    if (isPlatformServer(this.platformId) && this.serverModuleLoaded) {
      this.addStyles(url);
    } else {
      this.nativeElement.setAttribute("src", url);
    }
  }
  static {
    this.ɵfac = function ImgSrcDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ImgSrcDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ImgSrcStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(SERVER_TOKEN));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ImgSrcDirective,
      inputs: {
        src: "src"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImgSrcDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ImgSrcStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SERVER_TOKEN]
    }]
  }], {
    src: [{
      type: Input,
      args: ["src"]
    }]
  });
})();
var imgSrcCache = /* @__PURE__ */ new Map();
var inputs$2 = ["src.xs", "src.sm", "src.md", "src.lg", "src.xl", "src.lt-sm", "src.lt-md", "src.lt-lg", "src.lt-xl", "src.gt-xs", "src.gt-sm", "src.gt-md", "src.gt-lg"];
var selector$2 = `
  img[src.xs],    img[src.sm],    img[src.md],    img[src.lg],   img[src.xl],
  img[src.lt-sm], img[src.lt-md], img[src.lt-lg], img[src.lt-xl],
  img[src.gt-xs], img[src.gt-sm], img[src.gt-md], img[src.gt-lg]
`;
var DefaultImgSrcDirective = class _DefaultImgSrcDirective extends ImgSrcDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$2;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultImgSrcDirective_BaseFactory;
      return function DefaultImgSrcDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultImgSrcDirective_BaseFactory || (ɵDefaultImgSrcDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultImgSrcDirective)))(__ngFactoryType__ || _DefaultImgSrcDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultImgSrcDirective,
      selectors: [["img", "src.xs", ""], ["img", "src.sm", ""], ["img", "src.md", ""], ["img", "src.lg", ""], ["img", "src.xl", ""], ["img", "src.lt-sm", ""], ["img", "src.lt-md", ""], ["img", "src.lt-lg", ""], ["img", "src.lt-xl", ""], ["img", "src.gt-xs", ""], ["img", "src.gt-sm", ""], ["img", "src.gt-md", ""], ["img", "src.gt-lg", ""]],
      inputs: {
        "src.xs": "src.xs",
        "src.sm": "src.sm",
        "src.md": "src.md",
        "src.lg": "src.lg",
        "src.xl": "src.xl",
        "src.lt-sm": "src.lt-sm",
        "src.lt-md": "src.lt-md",
        "src.lt-lg": "src.lt-lg",
        "src.lt-xl": "src.lt-xl",
        "src.gt-xs": "src.gt-xs",
        "src.gt-sm": "src.gt-sm",
        "src.gt-md": "src.gt-md",
        "src.gt-lg": "src.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultImgSrcDirective, [{
    type: Directive,
    args: [{
      selector: selector$2,
      inputs: inputs$2
    }]
  }], null, null);
})();
var ShowHideStyleBuilder = class _ShowHideStyleBuilder extends StyleBuilder {
  buildStyles(show, parent) {
    const shouldShow = show === "true";
    return {
      display: shouldShow ? parent.display || (parent.isServer ? "initial" : "") : "none"
    };
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵShowHideStyleBuilder_BaseFactory;
      return function ShowHideStyleBuilder_Factory(__ngFactoryType__) {
        return (ɵShowHideStyleBuilder_BaseFactory || (ɵShowHideStyleBuilder_BaseFactory = ɵɵgetInheritedFactory(_ShowHideStyleBuilder)))(__ngFactoryType__ || _ShowHideStyleBuilder);
      };
    })();
  }
  static {
    this.ɵprov = ɵɵdefineInjectable({
      token: _ShowHideStyleBuilder,
      factory: _ShowHideStyleBuilder.ɵfac,
      providedIn: "root"
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowHideStyleBuilder, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var ShowHideDirective = class _ShowHideDirective extends BaseDirective2 {
  constructor(elementRef, styleBuilder, styler, marshal, layoutConfig, platformId, serverModuleLoaded) {
    super(elementRef, styleBuilder, styler, marshal);
    this.layoutConfig = layoutConfig;
    this.platformId = platformId;
    this.serverModuleLoaded = serverModuleLoaded;
    this.DIRECTIVE_KEY = "show-hide";
    this.display = "";
    this.hasLayout = false;
    this.hasFlexChild = false;
  }
  // *********************************************
  // Lifecycle Methods
  // *********************************************
  ngAfterViewInit() {
    this.trackExtraTriggers();
    const children = Array.from(this.nativeElement.children);
    for (let i = 0; i < children.length; i++) {
      if (this.marshal.hasValue(children[i], "flex")) {
        this.hasFlexChild = true;
        break;
      }
    }
    if (DISPLAY_MAP.has(this.nativeElement)) {
      this.display = DISPLAY_MAP.get(this.nativeElement);
    } else {
      this.display = this.getDisplayStyle();
      DISPLAY_MAP.set(this.nativeElement, this.display);
    }
    this.init();
    const defaultValue = this.marshal.getValue(this.nativeElement, this.DIRECTIVE_KEY, "");
    if (defaultValue === void 0 || defaultValue === "") {
      this.setValue(true, "");
    } else {
      this.triggerUpdate();
    }
  }
  /**
   * On changes to any @Input properties...
   * Default to use the non-responsive Input value ('fxShow')
   * Then conditionally override with the mq-activated Input's current value
   */
  ngOnChanges(changes) {
    Object.keys(changes).forEach((key) => {
      if (this.inputs.indexOf(key) !== -1) {
        const inputKey = key.split(".");
        const bp = inputKey.slice(1).join(".");
        const inputValue = changes[key].currentValue;
        let shouldShow = inputValue !== "" ? inputValue !== 0 ? coerceBooleanProperty(inputValue) : false : true;
        if (inputKey[0] === "fxHide") {
          shouldShow = !shouldShow;
        }
        this.setValue(shouldShow, bp);
      }
    });
  }
  // *********************************************
  // Protected methods
  // *********************************************
  /**
   *  Watch for these extra triggers to update fxShow, fxHide stylings
   */
  trackExtraTriggers() {
    this.hasLayout = this.marshal.hasValue(this.nativeElement, "layout");
    ["layout", "layout-align"].forEach((key) => {
      this.marshal.trackValue(this.nativeElement, key).pipe(takeUntil(this.destroySubject)).subscribe(this.triggerUpdate.bind(this));
    });
  }
  /**
   * Override accessor to the current HTMLElement's `display` style
   * Note: Show/Hide will not change the display to 'flex' but will set it to 'block'
   * unless it was already explicitly specified inline or in a CSS stylesheet.
   */
  getDisplayStyle() {
    return this.hasLayout || this.hasFlexChild && this.layoutConfig.addFlexToParent ? "flex" : this.styler.lookupStyle(this.nativeElement, "display", true);
  }
  /** Validate the visibility value and then update the host's inline display style */
  updateWithValue(value = true) {
    if (value === "") {
      return;
    }
    const isServer = isPlatformServer(this.platformId);
    this.addStyles(value ? "true" : "false", {
      display: this.display,
      isServer
    });
    if (isServer && this.serverModuleLoaded) {
      this.nativeElement.style.setProperty("display", "");
    }
    this.marshal.triggerUpdate(this.parentElement, "layout-gap");
  }
  static {
    this.ɵfac = function ShowHideDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShowHideDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ShowHideStyleBuilder), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller), ɵɵdirectiveInject(LAYOUT_CONFIG), ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(SERVER_TOKEN));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _ShowHideDirective,
      features: [ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ShowHideDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: ShowHideStyleBuilder
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [LAYOUT_CONFIG]
    }]
  }, {
    type: Object,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Inject,
      args: [SERVER_TOKEN]
    }]
  }], null);
})();
var DISPLAY_MAP = /* @__PURE__ */ new WeakMap();
var inputs$1 = ["fxShow", "fxShow.print", "fxShow.xs", "fxShow.sm", "fxShow.md", "fxShow.lg", "fxShow.xl", "fxShow.lt-sm", "fxShow.lt-md", "fxShow.lt-lg", "fxShow.lt-xl", "fxShow.gt-xs", "fxShow.gt-sm", "fxShow.gt-md", "fxShow.gt-lg", "fxHide", "fxHide.print", "fxHide.xs", "fxHide.sm", "fxHide.md", "fxHide.lg", "fxHide.xl", "fxHide.lt-sm", "fxHide.lt-md", "fxHide.lt-lg", "fxHide.lt-xl", "fxHide.gt-xs", "fxHide.gt-sm", "fxHide.gt-md", "fxHide.gt-lg"];
var selector$1 = `
  [fxShow], [fxShow.print],
  [fxShow.xs], [fxShow.sm], [fxShow.md], [fxShow.lg], [fxShow.xl],
  [fxShow.lt-sm], [fxShow.lt-md], [fxShow.lt-lg], [fxShow.lt-xl],
  [fxShow.gt-xs], [fxShow.gt-sm], [fxShow.gt-md], [fxShow.gt-lg],
  [fxHide], [fxHide.print],
  [fxHide.xs], [fxHide.sm], [fxHide.md], [fxHide.lg], [fxHide.xl],
  [fxHide.lt-sm], [fxHide.lt-md], [fxHide.lt-lg], [fxHide.lt-xl],
  [fxHide.gt-xs], [fxHide.gt-sm], [fxHide.gt-md], [fxHide.gt-lg]
`;
var DefaultShowHideDirective = class _DefaultShowHideDirective extends ShowHideDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs$1;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultShowHideDirective_BaseFactory;
      return function DefaultShowHideDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultShowHideDirective_BaseFactory || (ɵDefaultShowHideDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultShowHideDirective)))(__ngFactoryType__ || _DefaultShowHideDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultShowHideDirective,
      selectors: [["", "fxShow", ""], ["", "fxShow.print", ""], ["", "fxShow.xs", ""], ["", "fxShow.sm", ""], ["", "fxShow.md", ""], ["", "fxShow.lg", ""], ["", "fxShow.xl", ""], ["", "fxShow.lt-sm", ""], ["", "fxShow.lt-md", ""], ["", "fxShow.lt-lg", ""], ["", "fxShow.lt-xl", ""], ["", "fxShow.gt-xs", ""], ["", "fxShow.gt-sm", ""], ["", "fxShow.gt-md", ""], ["", "fxShow.gt-lg", ""], ["", "fxHide", ""], ["", "fxHide.print", ""], ["", "fxHide.xs", ""], ["", "fxHide.sm", ""], ["", "fxHide.md", ""], ["", "fxHide.lg", ""], ["", "fxHide.xl", ""], ["", "fxHide.lt-sm", ""], ["", "fxHide.lt-md", ""], ["", "fxHide.lt-lg", ""], ["", "fxHide.lt-xl", ""], ["", "fxHide.gt-xs", ""], ["", "fxHide.gt-sm", ""], ["", "fxHide.gt-md", ""], ["", "fxHide.gt-lg", ""]],
      inputs: {
        fxShow: "fxShow",
        "fxShow.print": "fxShow.print",
        "fxShow.xs": "fxShow.xs",
        "fxShow.sm": "fxShow.sm",
        "fxShow.md": "fxShow.md",
        "fxShow.lg": "fxShow.lg",
        "fxShow.xl": "fxShow.xl",
        "fxShow.lt-sm": "fxShow.lt-sm",
        "fxShow.lt-md": "fxShow.lt-md",
        "fxShow.lt-lg": "fxShow.lt-lg",
        "fxShow.lt-xl": "fxShow.lt-xl",
        "fxShow.gt-xs": "fxShow.gt-xs",
        "fxShow.gt-sm": "fxShow.gt-sm",
        "fxShow.gt-md": "fxShow.gt-md",
        "fxShow.gt-lg": "fxShow.gt-lg",
        fxHide: "fxHide",
        "fxHide.print": "fxHide.print",
        "fxHide.xs": "fxHide.xs",
        "fxHide.sm": "fxHide.sm",
        "fxHide.md": "fxHide.md",
        "fxHide.lg": "fxHide.lg",
        "fxHide.xl": "fxHide.xl",
        "fxHide.lt-sm": "fxHide.lt-sm",
        "fxHide.lt-md": "fxHide.lt-md",
        "fxHide.lt-lg": "fxHide.lt-lg",
        "fxHide.lt-xl": "fxHide.lt-xl",
        "fxHide.gt-xs": "fxHide.gt-xs",
        "fxHide.gt-sm": "fxHide.gt-sm",
        "fxHide.gt-md": "fxHide.gt-md",
        "fxHide.gt-lg": "fxHide.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultShowHideDirective, [{
    type: Directive,
    args: [{
      selector: selector$1,
      inputs: inputs$1
    }]
  }], null, null);
})();
var NgStyleKeyValue = class {
  constructor(key, value, noQuotes = true) {
    this.key = key;
    this.value = value;
    this.key = noQuotes ? key.replace(/['"]/g, "").trim() : key.trim();
    this.value = noQuotes ? value.replace(/['"]/g, "").trim() : value.trim();
    this.value = this.value.replace(/;/, "");
  }
};
function getType(target) {
  let what = typeof target;
  if (what === "object") {
    return target.constructor === Array ? "array" : target.constructor === Set ? "set" : "object";
  }
  return what;
}
function buildRawList(source, delimiter = ";") {
  return String(source).trim().split(delimiter).map((val) => val.trim()).filter((val) => val !== "");
}
function buildMapFromList$1(styles, sanitize) {
  const sanitizeValue = (it) => {
    if (sanitize) {
      it.value = sanitize(it.value);
    }
    return it;
  };
  return styles.map(stringToKeyValue).filter((entry) => !!entry).map(sanitizeValue).reduce(keyValuesToMap, {});
}
function buildMapFromSet(source, sanitize) {
  let list = [];
  if (getType(source) === "set") {
    source.forEach((entry) => list.push(entry));
  } else {
    Object.keys(source).forEach((key) => {
      list.push(`${key}:${source[key]}`);
    });
  }
  return buildMapFromList$1(list, sanitize);
}
function stringToKeyValue(it) {
  const [key, ...vals] = it.split(":");
  return new NgStyleKeyValue(key, vals.join(":"));
}
function keyValuesToMap(map, entry) {
  if (!!entry.key) {
    map[entry.key] = entry.value;
  }
  return map;
}
var StyleDirective = class _StyleDirective extends BaseDirective2 {
  constructor(elementRef, styler, marshal, sanitizer, differs, renderer2, ngStyleInstance, serverLoaded, platformId) {
    super(elementRef, null, styler, marshal);
    this.sanitizer = sanitizer;
    this.ngStyleInstance = ngStyleInstance;
    this.DIRECTIVE_KEY = "ngStyle";
    if (!this.ngStyleInstance) {
      this.ngStyleInstance = new NgStyle(elementRef, differs, renderer2);
    }
    this.init();
    const styles = this.nativeElement.getAttribute("style") ?? "";
    this.fallbackStyles = this.buildStyleMap(styles);
    this.isServer = serverLoaded && isPlatformServer(platformId);
  }
  /** Add generated styles */
  updateWithValue(value) {
    const styles = this.buildStyleMap(value);
    this.ngStyleInstance.ngStyle = __spreadValues(__spreadValues({}, this.fallbackStyles), styles);
    if (this.isServer) {
      this.applyStyleToElement(styles);
    }
    this.ngStyleInstance.ngDoCheck();
  }
  /** Remove generated styles */
  clearStyles() {
    this.ngStyleInstance.ngStyle = this.fallbackStyles;
    this.ngStyleInstance.ngDoCheck();
  }
  /**
   * Convert raw strings to ngStyleMap; which is required by ngStyle
   * NOTE: Raw string key-value pairs MUST be delimited by `;`
   *       Comma-delimiters are not supported due to complexities of
   *       possible style values such as `rgba(x,x,x,x)` and others
   */
  buildStyleMap(styles) {
    const sanitizer = (val) => this.sanitizer.sanitize(SecurityContext.STYLE, val) ?? "";
    if (styles) {
      switch (getType(styles)) {
        case "string":
          return buildMapFromList(buildRawList(styles), sanitizer);
        case "array":
          return buildMapFromList(styles, sanitizer);
        case "set":
          return buildMapFromSet(styles, sanitizer);
        default:
          return buildMapFromSet(styles, sanitizer);
      }
    }
    return {};
  }
  // ******************************************************************
  // Lifecycle Hooks
  // ******************************************************************
  /** For ChangeDetectionStrategy.onPush and ngOnChanges() updates */
  ngDoCheck() {
    this.ngStyleInstance.ngDoCheck();
  }
  static {
    this.ɵfac = function StyleDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StyleDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(StyleUtils), ɵɵdirectiveInject(MediaMarshaller), ɵɵdirectiveInject(DomSanitizer), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(NgStyle, 10), ɵɵdirectiveInject(SERVER_TOKEN), ɵɵdirectiveInject(PLATFORM_ID));
    };
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _StyleDirective,
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StyleDirective, [{
    type: Directive
  }], () => [{
    type: ElementRef
  }, {
    type: StyleUtils
  }, {
    type: MediaMarshaller
  }, {
    type: DomSanitizer
  }, {
    type: KeyValueDiffers
  }, {
    type: Renderer2
  }, {
    type: NgStyle,
    decorators: [{
      type: Optional
    }, {
      type: Self
    }]
  }, {
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
var inputs = ["ngStyle", "ngStyle.xs", "ngStyle.sm", "ngStyle.md", "ngStyle.lg", "ngStyle.xl", "ngStyle.lt-sm", "ngStyle.lt-md", "ngStyle.lt-lg", "ngStyle.lt-xl", "ngStyle.gt-xs", "ngStyle.gt-sm", "ngStyle.gt-md", "ngStyle.gt-lg"];
var selector = `
  [ngStyle],
  [ngStyle.xs], [ngStyle.sm], [ngStyle.md], [ngStyle.lg], [ngStyle.xl],
  [ngStyle.lt-sm], [ngStyle.lt-md], [ngStyle.lt-lg], [ngStyle.lt-xl],
  [ngStyle.gt-xs], [ngStyle.gt-sm], [ngStyle.gt-md], [ngStyle.gt-lg]
`;
var DefaultStyleDirective = class _DefaultStyleDirective extends StyleDirective {
  constructor() {
    super(...arguments);
    this.inputs = inputs;
  }
  static {
    this.ɵfac = /* @__PURE__ */ (() => {
      let ɵDefaultStyleDirective_BaseFactory;
      return function DefaultStyleDirective_Factory(__ngFactoryType__) {
        return (ɵDefaultStyleDirective_BaseFactory || (ɵDefaultStyleDirective_BaseFactory = ɵɵgetInheritedFactory(_DefaultStyleDirective)))(__ngFactoryType__ || _DefaultStyleDirective);
      };
    })();
  }
  static {
    this.ɵdir = ɵɵdefineDirective({
      type: _DefaultStyleDirective,
      selectors: [["", "ngStyle", ""], ["", "ngStyle.xs", ""], ["", "ngStyle.sm", ""], ["", "ngStyle.md", ""], ["", "ngStyle.lg", ""], ["", "ngStyle.xl", ""], ["", "ngStyle.lt-sm", ""], ["", "ngStyle.lt-md", ""], ["", "ngStyle.lt-lg", ""], ["", "ngStyle.lt-xl", ""], ["", "ngStyle.gt-xs", ""], ["", "ngStyle.gt-sm", ""], ["", "ngStyle.gt-md", ""], ["", "ngStyle.gt-lg", ""]],
      inputs: {
        ngStyle: "ngStyle",
        "ngStyle.xs": "ngStyle.xs",
        "ngStyle.sm": "ngStyle.sm",
        "ngStyle.md": "ngStyle.md",
        "ngStyle.lg": "ngStyle.lg",
        "ngStyle.xl": "ngStyle.xl",
        "ngStyle.lt-sm": "ngStyle.lt-sm",
        "ngStyle.lt-md": "ngStyle.lt-md",
        "ngStyle.lt-lg": "ngStyle.lt-lg",
        "ngStyle.lt-xl": "ngStyle.lt-xl",
        "ngStyle.gt-xs": "ngStyle.gt-xs",
        "ngStyle.gt-sm": "ngStyle.gt-sm",
        "ngStyle.gt-md": "ngStyle.gt-md",
        "ngStyle.gt-lg": "ngStyle.gt-lg"
      },
      features: [ɵɵInheritDefinitionFeature]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DefaultStyleDirective, [{
    type: Directive,
    args: [{
      selector,
      inputs
    }]
  }], null, null);
})();
function buildMapFromList(styles, sanitize) {
  const sanitizeValue = (it) => {
    if (sanitize) {
      it.value = sanitize(it.value);
    }
    return it;
  };
  return styles.map(stringToKeyValue).filter((entry) => !!entry).map(sanitizeValue).reduce(keyValuesToMap, {});
}
var ALL_DIRECTIVES = [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective];
var ExtendedModule = class _ExtendedModule {
  static {
    this.ɵfac = function ExtendedModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExtendedModule)();
    };
  }
  static {
    this.ɵmod = ɵɵdefineNgModule({
      type: _ExtendedModule,
      imports: [CoreModule, DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective],
      exports: [DefaultShowHideDirective, DefaultClassDirective, DefaultStyleDirective, DefaultImgSrcDirective]
    });
  }
  static {
    this.ɵinj = ɵɵdefineInjector({
      imports: [CoreModule]
    });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExtendedModule, [{
    type: NgModule,
    args: [{
      imports: [CoreModule, ...ALL_DIRECTIVES],
      exports: [...ALL_DIRECTIVES]
    }]
  }], null, null);
})();

export {
  ClassDirective,
  DefaultClassDirective,
  ImgSrcStyleBuilder,
  ImgSrcDirective,
  DefaultImgSrcDirective,
  ShowHideStyleBuilder,
  ShowHideDirective,
  DefaultShowHideDirective,
  StyleDirective,
  DefaultStyleDirective,
  ExtendedModule
};
/*! Bundled license information:

@ngbracket/ngx-layout/fesm2022/ngbracket-ngx-layout-extended.mjs:
  (**
   * @license
   * Copyright Google LLC All Rights Reserved.
   *
   * Use of this source code is governed by an MIT-style license that can be
   * found in the LICENSE file at https://angular.io/license
   *)
*/
//# sourceMappingURL=chunk-XITDQST2.js.map
