/*!
 * 
 * NOTE: This file is generated by webpack from aboutwelcome.jsx
 * using the npm bundle task.
 * 
 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MultiStageAboutWelcome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var _components_HeroText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _components_FxCards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _components_MSLocalized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4);
/* harmony import */ var _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */








class AboutWelcome extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      metricsFlowUri: null
    };
    this.fetchFxAFlowUri = this.fetchFxAFlowUri.bind(this);
    this.handleStartBtnClick = this.handleStartBtnClick.bind(this);
  }

  async fetchFxAFlowUri() {
    this.setState({
      metricsFlowUri: await window.AWGetFxAMetricsFlowURI()
    });
  }

  componentDidMount() {
    this.fetchFxAFlowUri(); // Record impression with performance data after allowing the page to load

    window.addEventListener("load", () => {
      const {
        domComplete,
        domInteractive
      } = performance.getEntriesByType("navigation").pop();
      window.AWSendEventTelemetry({
        event: "IMPRESSION",
        event_context: {
          domComplete,
          domInteractive,
          mountStart: performance.getEntriesByName("mount").pop().startTime,
          source: this.props.UTMTerm,
          page: "about:welcome"
        },
        message_id: this.props.messageId
      });
    }, {
      once: true
    }); // Captures user has seen about:welcome by setting
    // firstrun.didSeeAboutWelcome pref to true and capturing welcome UI unique messageId

    window.AWSendToParent("SET_WELCOME_MESSAGE_SEEN", this.props.messageId);
  }

  handleStartBtnClick() {
    _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_6__["AboutWelcomeUtils"].handleUserAction(this.props.startButton.action);
    const ping = {
      event: "CLICK_BUTTON",
      event_context: {
        source: this.props.startButton.message_id,
        page: "about:welcome"
      },
      message_id: this.props.messageId,
      id: "ABOUT_WELCOME"
    };
    window.AWSendEventTelemetry(ping);
  }

  render() {
    const {
      props
    } = this; // TBD: Refactor to redirect based off template value
    // inside props.template
    // Create SimpleAboutWelcome that renders default about welcome
    // See Bug 1638087

    if (props.screens) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MultiStageAboutWelcome__WEBPACK_IMPORTED_MODULE_2__["MultiStageAboutWelcome"], {
        screens: props.screens,
        metricsFlowUri: this.state.metricsFlowUri,
        message_id: props.messageId,
        utm_term: props.UTMTerm
      });
    }

    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "outer-wrapper welcomeContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "welcomeContainerInner"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_HeroText__WEBPACK_IMPORTED_MODULE_3__["HeroText"], {
      title: props.title,
      subtitle: props.subtitle
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_FxCards__WEBPACK_IMPORTED_MODULE_4__["FxCards"], {
      cards: props.cards,
      metricsFlowUri: this.state.metricsFlowUri,
      sendTelemetry: window.AWSendEventTelemetry,
      utm_term: props.UTMTerm
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MSLocalized__WEBPACK_IMPORTED_MODULE_5__["Localized"], {
      text: props.startButton.label
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "start-button",
      onClick: this.handleStartBtnClick
    })))));
  }

}

AboutWelcome.defaultProps = _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_6__["DEFAULT_WELCOME_CONTENT"];

function ComputeMessageId(experimentId, branchId, settings) {
  let messageId = "ABOUT_WELCOME";
  let UTMTerm = "default";

  if (settings.id && settings.screens) {
    messageId = settings.id.toUpperCase();
  }

  if (experimentId && branchId) {
    UTMTerm = `${experimentId}-${branchId}`.toLowerCase();
  }

  return {
    messageId,
    UTMTerm
  };
}

async function mount() {
  const {
    slug,
    branch
  } = await window.AWGetStartupData();
  let settings = branch && branch.value ? branch.value : {};

  if (!(branch && branch.value)) {
    // Check for override content in pref browser.aboutwelcome.overrideContent
    settings = await window.AWGetMultiStageScreens();
  }

  let {
    messageId,
    UTMTerm
  } = ComputeMessageId(slug, branch && branch.slug, settings);
  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutWelcome, _extends({
    messageId: messageId,
    UTMTerm: UTMTerm
  }, settings)), document.getElementById("root"));
}

performance.mark("mount");
mount();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiStageAboutWelcome", function() { return MultiStageAboutWelcome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeScreen", function() { return WelcomeScreen; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MSLocalized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _Zap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var _asrouter_templates_FirstRun_addUtmParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */





const DEFAULT_SITES = ["youtube-com", "facebook-com", "amazon", "reddit-com", "wikipedia-org", "twitter-com"].map(site => ({
  icon: `resource://activity-stream/data/content/tippytop/images/${site}@2x.png`
}));
const MultiStageAboutWelcome = props => {
  const [index, setScreenIndex] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Send impression ping when respective screen first renders
    props.screens.forEach(screen => {
      if (index === screen.order) {
        _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].sendImpressionTelemetry(`${props.message_id}_${screen.id}`);
      }
    }); // Remember that a new screen has loaded for browser navigation

    if (index > window.history.state) {
      window.history.pushState(index, "");
    }
  }, [index]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Switch to the screen tracked in state (null for initial state)
    const handler = ({
      state
    }) => setScreenIndex(Number(state)); // Handle page load, e.g., going back to about:welcome from about:home


    handler(window.history); // Watch for browser back/forward button navigation events

    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);
  const [flowParams, setFlowParams] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const {
    metricsFlowUri
  } = props;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    (async () => {
      if (metricsFlowUri) {
        setFlowParams((await _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].fetchFlowParams(metricsFlowUri)));
      }
    })();
  }, [metricsFlowUri]); // Transition to next screen, opening about:home on last screen button CTA

  const handleTransition = index < props.screens.length ? Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(() => setScreenIndex(prevState => prevState + 1), []) : _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].handleUserAction({
    type: "OPEN_ABOUT_PAGE",
    data: {
      args: "home",
      where: "current"
    }
  });
  const useImportable = props.message_id.includes("IMPORTABLE");
  const [topSites, setTopSites] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(DEFAULT_SITES);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    (async () => {
      const importable = JSON.parse((await window.AWGetImportableSites()));
      const showImportable = useImportable && importable.length >= 5;
      _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].sendImpressionTelemetry(`${props.message_id}_SITES`, {
        display: showImportable ? "importable" : "static",
        importable: importable.length
      });
      setTopSites(showImportable ? importable : DEFAULT_SITES);
    })();
  }, [useImportable]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: `multistageContainer`
  }, props.screens.map(screen => {
    return index === screen.order ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WelcomeScreen, {
      id: screen.id,
      totalNumberOfScreens: props.screens.length,
      order: screen.order,
      content: screen.content,
      navigate: handleTransition,
      topSites: topSites,
      messageId: `${props.message_id}_${screen.id}`,
      UTMTerm: props.utm_term,
      flowParams: flowParams
    }) : null;
  })));
};
class WelcomeScreen extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.handleAction = this.handleAction.bind(this);
  }

  handleOpenURL(action, flowParams, UTMTerm) {
    let {
      type,
      data
    } = action;
    let url = new URL(data.args);
    Object(_asrouter_templates_FirstRun_addUtmParams__WEBPACK_IMPORTED_MODULE_4__["addUtmParams"])(url, `aboutwelcome-${UTMTerm}-screen`);

    if (action.addFlowParams && flowParams) {
      url.searchParams.append("device_id", flowParams.deviceId);
      url.searchParams.append("flow_id", flowParams.flowId);
      url.searchParams.append("flow_begin_time", flowParams.flowBeginTime);
    }

    data = { ...data,
      args: url.toString()
    };
    _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].handleUserAction({
      type,
      data
    });
  }

  highlightTheme(theme) {
    const themes = document.querySelectorAll("button.theme");
    themes.forEach(function (element) {
      element.classList.remove("selected");

      if (element.value === theme) {
        element.classList.add("selected");
      }
    });
  }

  async handleAction(event) {
    let {
      props
    } = this;
    let targetContent = props.content[event.currentTarget.value] || props.content.tiles;

    if (!(targetContent && targetContent.action)) {
      return;
    } // Send telemetry before waiting on actions


    _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].sendActionTelemetry(props.messageId, event.currentTarget.value);
    let {
      action
    } = targetContent;

    if (action.type === "OPEN_URL") {
      this.handleOpenURL(action, props.flowParams, props.UTMTerm);
    } else if (action.type) {
      _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].handleUserAction(action); // Wait until migration closes to complete the action

      if (action.type === "SHOW_MIGRATION_WIZARD") {
        await window.AWWaitForMigrationClose();
        _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].sendActionTelemetry(props.messageId, "migrate_close");
      }
    } // A special tiles.action.theme value indicates we should use the event's value vs provided value.


    if (action.theme) {
      this.highlightTheme(event.currentTarget.value);
      window.AWSelectTheme(action.theme === "<event>" ? event.currentTarget.value : action.theme);
    }

    if (action.navigate) {
      props.navigate();
    }
  }

  renderSecondaryCTA(className) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `secondary-cta ${className}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
      text: this.props.content.secondary_button.text
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
      text: this.props.content.secondary_button.label
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "secondary",
      value: "secondary_button",
      onClick: this.handleAction
    })));
  }

  renderTiles() {
    switch (this.props.content.tiles.type) {
      case "topsites":
        return this.props.topSites ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tiles-topsites-section"
        }, this.props.topSites.slice(0, 5).map(({
          icon,
          label
        }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "site",
          key: icon + label
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "icon",
          style: icon ? {
            backgroundColor: "transparent",
            backgroundImage: `url(${icon})`
          } : {}
        }, icon ? "" : label[0].toUpperCase()), label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "host"
        }, label)))) : null;

      case "theme":
        return this.props.content.tiles.data ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "tiles-theme-section"
        }, this.props.content.tiles.data.map(({
          theme,
          label
        }) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          className: "theme",
          key: theme + label,
          value: theme,
          onClick: this.handleAction
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: `icon ${theme}`
        }), label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
          text: label
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "text"
        }))))) : null;
    }

    return null;
  }

  renderStepsIndicator() {
    let steps = [];

    for (let i = 0; i < this.props.totalNumberOfScreens; i++) {
      let className = i === this.props.order ? "current" : "";
      steps.push(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: i,
        className: `indicator ${className}`
      }));
    }

    return steps;
  }

  render() {
    const {
      content
    } = this.props;
    const hasSecondaryTopCTA = content.secondary_button && content.secondary_button.position === "top";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
      className: `screen ${this.props.id}`
    }, hasSecondaryTopCTA ? this.renderSecondaryCTA("top") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `brand-logo ${hasSecondaryTopCTA ? "cta-top" : ""}`
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "welcome-text"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Zap__WEBPACK_IMPORTED_MODULE_2__["Zap"], {
      hasZap: content.zap,
      text: content.title
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
      text: content.subtitle
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null))), content.tiles ? this.renderTiles() : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
      text: content.primary_button ? content.primary_button.label : null
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "primary",
      value: "primary_button",
      onClick: this.handleAction
    }))), content.secondary_button && content.secondary_button.position !== "top" ? this.renderSecondaryCTA() : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "steps"
    }, this.renderStepsIndicator()));
  }

}

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Localized", function() { return Localized; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

const MS_STRING_PROP = "string_id";
/**
 * Based on the .text prop, localizes an inner element if a string_id
 * is provided, OR renders plain text, OR hides it if nothing is provided.
 *
 * Examples:
 *
 * Localized text
 * ftl:
 *  title = Welcome
 * jsx:
 *   <Localized text={{string_id: "title"}}><h1 /></Localized>
 * output:
 *   <h1 data-l10n-id="title">Welcome</h1>
 *
 * Unlocalized text
 * jsx:
 *   <Localized text="Welcome"><h1 /></Localized>
 * output:
 *   <h1>Welcome</h1>
 */

const Localized = ({
  text,
  children
}) => {
  if (!text) {
    return null;
  }

  let props = children ? children.props : {};
  let textNode;

  if (typeof text === "object" && text[MS_STRING_PROP]) {
    props = { ...props
    };
    props["data-l10n-id"] = text[MS_STRING_PROP];
  } else if (typeof text === "string") {
    textNode = text;
  }

  if (!children) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", props, textNode);
  } else if (textNode) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, props, textNode);
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(children, props);
};

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Zap", function() { return Zap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MSLocalized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


const MS_STRING_PROP = "string_id";
const Zap = props => {
  if (!props.text) {
    return null;
  }

  if (props.hasZap) {
    if (typeof props.text === "object" && props.text[MS_STRING_PROP]) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
        text: props.text
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "welcomeZap"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        "data-l10n-name": "zap"
      })));
    } else if (typeof props.text === "string") {
      // Parse string to zap style last word of the props.text
      let titleArray = props.text.split(" ");
      let lastWord = `${titleArray.pop()}`;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
        className: "welcomeZap"
      }, titleArray.join(" ").concat(" "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, lastWord));
    }
  } else {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
      text: props.text
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null));
  }

  return null;
};

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutWelcomeUtils", function() { return AboutWelcomeUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_WELCOME_CONTENT", function() { return DEFAULT_WELCOME_CONTENT; });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */
const AboutWelcomeUtils = {
  handleUserAction(action) {
    window.AWSendToParent("SPECIAL_ACTION", action);
  },

  sendImpressionTelemetry(messageId, context) {
    window.AWSendEventTelemetry({
      event: "IMPRESSION",
      event_context: context,
      message_id: messageId
    });
  },

  sendActionTelemetry(messageId, elementId) {
    const ping = {
      event: "CLICK_BUTTON",
      event_context: {
        source: elementId,
        page: "about:welcome"
      },
      message_id: messageId
    };
    window.AWSendEventTelemetry(ping);
  },

  async fetchFlowParams(metricsFlowUri) {
    let flowParams;

    try {
      const response = await fetch(metricsFlowUri, {
        credentials: "omit"
      });

      if (response.status === 200) {
        const {
          deviceId,
          flowId,
          flowBeginTime
        } = await response.json();
        flowParams = {
          deviceId,
          flowId,
          flowBeginTime
        };
      } else {
        console.error("Non-200 response", response); // eslint-disable-line no-console
      }
    } catch (e) {
      flowParams = null;
    }

    return flowParams;
  },

  sendEvent(type, detail) {
    document.dispatchEvent(new CustomEvent(`AWPage:${type}`, {
      bubbles: true,
      detail
    }));
  }

};
const DEFAULT_WELCOME_CONTENT = {
  title: {
    string_id: "onboarding-welcome-header"
  },
  startButton: {
    label: {
      string_id: "onboarding-start-browsing-button-label"
    },
    message_id: "START_BROWSING_BUTTON",
    action: {
      type: "OPEN_AWESOME_BAR"
    }
  },
  cards: [{
    content: {
      title: {
        string_id: "onboarding-data-sync-title"
      },
      text: {
        string_id: "onboarding-data-sync-text2"
      },
      icon: "devices",
      primary_button: {
        label: {
          string_id: "onboarding-data-sync-button2"
        },
        action: {
          type: "OPEN_URL",
          addFlowParams: true,
          data: {
            args: "https://accounts.firefox.com/?service=sync&action=email&context=fx_desktop_v3&entrypoint=activity-stream-firstrun&style=trailhead",
            where: "tabshifted"
          }
        }
      }
    },
    id: "TRAILHEAD_CARD_2",
    order: 1,
    blockOnClick: false
  }, {
    content: {
      title: {
        string_id: "onboarding-firefox-monitor-title"
      },
      text: {
        string_id: "onboarding-firefox-monitor-text2"
      },
      icon: "ffmonitor",
      primary_button: {
        label: {
          string_id: "onboarding-firefox-monitor-button"
        },
        action: {
          type: "OPEN_URL",
          data: {
            args: "https://monitor.firefox.com/",
            where: "tabshifted"
          }
        }
      }
    },
    id: "TRAILHEAD_CARD_3",
    order: 2,
    blockOnClick: false
  }, {
    content: {
      title: {
        string_id: "onboarding-browse-privately-title"
      },
      text: {
        string_id: "onboarding-browse-privately-text"
      },
      icon: "private",
      primary_button: {
        label: {
          string_id: "onboarding-browse-privately-button"
        },
        action: {
          type: "OPEN_PRIVATE_BROWSER_WINDOW"
        }
      }
    },
    id: "TRAILHEAD_CARD_4",
    order: 3,
    blockOnClick: true
  }]
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_PARAMS", function() { return BASE_PARAMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUtmParams", function() { return addUtmParams; });
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

/**
 * BASE_PARAMS keys/values can be modified from outside this file
 */
const BASE_PARAMS = {
  utm_source: "activity-stream",
  utm_campaign: "firstrun",
  utm_medium: "referral"
};
/**
 * Takes in a url as a string or URL object and returns a URL object with the
 * utm_* parameters added to it. If a URL object is passed in, the paraemeters
 * are added to it (the return value can be ignored in that case as it's the
 * same object).
 */

function addUtmParams(url, utmTerm) {
  let returnUrl = url;

  if (typeof returnUrl === "string") {
    returnUrl = new URL(url);
  }

  Object.keys(BASE_PARAMS).forEach(key => {
    returnUrl.searchParams.append(key, BASE_PARAMS[key]);
  });
  returnUrl.searchParams.append("utm_term", utmTerm);
  return returnUrl;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroText", function() { return HeroText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MSLocalized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


const HeroText = props => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
    text: props.title
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "welcome-title"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
    text: props.subtitle
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "welcome-subtitle"
  })));
};

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FxCards", function() { return FxCards; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _asrouter_templates_FirstRun_addUtmParams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var _asrouter_templates_OnboardingMessage_OnboardingMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */




class FxCards extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      flowParams: null
    };
    this.fetchFxAFlowParams = this.fetchFxAFlowParams.bind(this);
    this.onCardAction = this.onCardAction.bind(this);
  }

  componentDidUpdate() {
    this.fetchFxAFlowParams();
  }

  componentDidMount() {
    this.fetchFxAFlowParams();
  }

  async fetchFxAFlowParams() {
    if (this.state.flowParams || !this.props.metricsFlowUri) {
      return;
    }

    const flowParams = await _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].fetchFlowParams(this.props.metricsFlowUri);
    this.setState({
      flowParams
    });
  }

  onCardAction(action) {
    let {
      type,
      data
    } = action;
    let UTMTerm = `aboutwelcome-${this.props.utm_term}-card`;

    if (action.type === "OPEN_URL") {
      let url = new URL(action.data.args);
      Object(_asrouter_templates_FirstRun_addUtmParams__WEBPACK_IMPORTED_MODULE_1__["addUtmParams"])(url, UTMTerm);

      if (action.addFlowParams && this.state.flowParams) {
        url.searchParams.append("device_id", this.state.flowParams.deviceId);
        url.searchParams.append("flow_id", this.state.flowParams.flowId);
        url.searchParams.append("flow_begin_time", this.state.flowParams.flowBeginTime);
      }

      data = { ...data,
        args: url.toString()
      };
    }

    _lib_aboutwelcome_utils__WEBPACK_IMPORTED_MODULE_3__["AboutWelcomeUtils"].handleUserAction({
      type,
      data
    });
  }

  render() {
    const {
      props
    } = this;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `welcomeCardGrid show`
    }, props.cards.map(card => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_asrouter_templates_OnboardingMessage_OnboardingMessage__WEBPACK_IMPORTED_MODULE_2__["OnboardingCard"], _extends({
      key: card.id,
      message: card,
      className: "welcomeCard",
      sendUserActionTelemetry: props.sendTelemetry,
      onAction: this.onCardAction,
      UISurface: "ABOUT_WELCOME"
    }, card)))));
  }

}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnboardingCard", function() { return OnboardingCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _aboutwelcome_components_MSLocalized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */


class OnboardingCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.PureComponent {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    const {
      props
    } = this;
    const ping = {
      event: "CLICK_BUTTON",
      message_id: props.id,
      id: props.UISurface
    };
    props.sendUserActionTelemetry(ping);
    props.onAction(props.content.primary_button.action, props.message);
  }

  render() {
    const {
      content
    } = this.props;
    const className = this.props.className || "onboardingMessage";
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: className
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: `onboardingMessageImage ${content.icon}`
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "onboardingContent"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aboutwelcome_components_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
      text: content.title
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "onboardingTitle"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aboutwelcome_components_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
      text: content.text
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "onboardingText"
    }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "onboardingButtonContainer"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_aboutwelcome_components_MSLocalized__WEBPACK_IMPORTED_MODULE_1__["Localized"], {
      text: content.primary_button.label
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "button onboardingButton",
      onClick: this.onClick
    })))));
  }

}

/***/ })
/******/ ]);