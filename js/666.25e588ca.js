"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[666],{

/***/ 3216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/HomePage.vue?vue&type=template&id=1c051820

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "q-mt-md q-mb-md text-center"
}, " Du bist erfolgreich mit dem Proberaum verbunden und kannst jetzt starten. ", -1);
const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "q-mt-md q-mb-md text-center"
}, " Live Session - Take a seat! Einmal im Monat hast du die Möglichkeit, an unserer inspirierenden Live-Session teilzunehmen. ", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_instrument_selector_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("instrument-selector-dialog");
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_carousel_slide = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-carousel-slide");
  const _component_q_carousel = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-carousel");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_fab_action = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-fab-action");
  const _component_q_fab = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-fab");
  const _component_q_page_sticky = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page-sticky");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, {
    padding: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
      flat: "",
      class: "q-pa-md"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        class: "q-mt-md"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_carousel, {
          modelValue: $setup.slide,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.slide = $event),
          "transition-prev": "slide-right",
          "transition-next": "slide-left",
          swipeable: "",
          navigation: "",
          "navigation-position": "top",
          "navigation-icon": "radio_button_unchecked",
          animated: "",
          height: "300px",
          "control-color": "primary",
          class: "rounded-borders bg-dark"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [$options.isBackendAvailable ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_carousel_slide, {
            key: 0,
            name: "connect",
            class: "column no-wrap flex-center"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_instrument_selector_dialog, {
              ref: "instrumentSelector"
            }, null, 512), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
              name: "wifi",
              color: "primary",
              size: "56px"
            }), _hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
              "no-caps": "",
              color: "primary",
              size: "lg",
              label: "Wähle dein Instrument",
              onClick: $options.openInstrumentSelector
            }, null, 8, ["onClick"])]),
            _: 1
          })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_carousel_slide, {
            name: "news",
            class: "column no-wrap flex-center"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
              name: "highlight",
              color: "primary",
              size: "56px"
            }), _hoisted_2, (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
              "no-caps": "",
              color: "primary",
              size: "md",
              label: "Mehr Infos & Anmeldung",
              onClick: $options.openLiveSessionPage
            }, null, 8, ["onClick"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_page_sticky, {
        position: "bottom-right",
        offset: [28, 58]
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab, {
          color: "primary",
          icon: "add",
          direction: "left"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab_action, {
            color: "secondary",
            onClick: $options.openHomePage,
            icon: "calendar_month",
            label: "Proberaum buchen"
          }, null, 8, ["onClick"])]),
          _: 1
        })]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/HomePage.vue?vue&type=template&id=1c051820

// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./src/components/InstrumentSelectorDialog.vue + 4 modules
var InstrumentSelectorDialog = __webpack_require__(4477);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar/use-quasar.js
var use_quasar = __webpack_require__(4907);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/HomePage.vue?vue&type=script&lang=js




/* harmony default export */ const HomePagevue_type_script_lang_js = ({
  setup() {
    const $q = (0,use_quasar/* default */.A)();
    const toggleFullscreen = () => {
      $q.fullscreen.request().then(() => {
        console.log('Fullscreen mode activated');
      }).catch(err => {
        console.error('Failed to activate fullscreen mode:', err);
      });
    };

    // If we are connected to the backend and now instrument is selected so far
    // prompt user with instrument selection, otherwise show news.
    const slide = (0,reactivity_esm_bundler/* ref */.KR)('news');
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    if (store.isBackendAvailable && store.selectedInstrumentId === null) {
      slide.value = 'connect';
    }
    return {
      showDialog: (0,reactivity_esm_bundler/* ref */.KR)(false),
      toggleFullscreen,
      slide
    };
  },
  data() {
    return {};
  },
  components: {
    InstrumentSelectorDialog: InstrumentSelectorDialog/* default */.A
  },
  methods: {
    openInstrumentSelector() {
      //this.toggleFullscreen();
      this.$refs.instrumentSelector.show();
    },
    openHomePage() {
      window.open('http://www.proben-ohne-krach.de/kontakt', '_blank');
    },
    openLiveSessionPage() {
      window.open('https://www.proben-ohne-krach.de/live-session-take-a-seat-/', '_blank');
    }
  },
  computed: {
    isBackendAvailable() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      return store.isBackendAvailable;
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/HomePage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js + 1 modules
var QCarousel = __webpack_require__(3454);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarouselSlide.js
var QCarouselSlide = __webpack_require__(8951);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(492);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page-sticky/QPageSticky.js + 1 modules
var QPageSticky = __webpack_require__(3718);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFab.js
var QFab = __webpack_require__(4782);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFabAction.js
var QFabAction = __webpack_require__(284);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/HomePage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(HomePagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const HomePage = (__exports__);
;










runtime_auto_import_default()(HomePagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QCarousel: QCarousel/* default */.A,QCarouselSlide: QCarouselSlide/* default */.A,QIcon: QIcon/* default */.A,QBtn: QBtn/* default */.A,QPageSticky: QPageSticky/* default */.A,QFab: QFab/* default */.A,QFabAction: QFabAction/* default */.A});


/***/ })

}]);
//# sourceMappingURL=666.25e588ca.js.map