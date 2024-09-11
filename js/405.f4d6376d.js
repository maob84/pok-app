"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[405],{

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ toggleInstrumentMute),
/* harmony export */   Bz: () => (/* binding */ turnTunerOn),
/* harmony export */   Cl: () => (/* binding */ updateInstrumentPanorama),
/* harmony export */   Eo: () => (/* binding */ getControlQrImage2),
/* harmony export */   GA: () => (/* binding */ api_getRecordings),
/* harmony export */   GY: () => (/* binding */ getRoomPresetCollections),
/* harmony export */   LO: () => (/* binding */ selectInstrumentPreset),
/* harmony export */   O8: () => (/* binding */ getCurrentRoomPresetCollection),
/* harmony export */   Qy: () => (/* binding */ getInstrumentById),
/* harmony export */   RV: () => (/* binding */ updateInstrumentVolume),
/* harmony export */   U8: () => (/* binding */ selectCurrentRoomPresetCollection),
/* harmony export */   Y0: () => (/* binding */ api_deleteRecording),
/* harmony export */   Zq: () => (/* binding */ api_stopPlayback),
/* harmony export */   Zr: () => (/* binding */ resetRoom),
/* harmony export */   dn: () => (/* binding */ api_stopRecording),
/* harmony export */   jo: () => (/* binding */ api_startRecording),
/* harmony export */   kR: () => (/* binding */ api_getRecorderStatus),
/* harmony export */   mw: () => (/* binding */ getControlQrImage),
/* harmony export */   ok: () => (/* binding */ getWifiQrImage),
/* harmony export */   pB: () => (/* binding */ getInstruments),
/* harmony export */   uB: () => (/* binding */ getTuning),
/* harmony export */   uJ: () => (/* binding */ getRoomStatus),
/* harmony export */   x_: () => (/* binding */ api_playRecording),
/* harmony export */   xr: () => (/* binding */ turnTunerOff)
/* harmony export */ });
/* unused harmony exports apiClient, recClient, getTunerState */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2303);


//const apiUrl = process.env.VUE_APP_API_URL || 'http://192.168.1.9:8000';
//const apiUrl = 'https://room.proben-ohne-krach.de:443';
//const apiUrl = 'http://192.168.2.111:8000';

const apiUrl = "http://192.168.0.102:8000";
const apiClient = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});
const recClient = axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.create({
  baseURL: "https://srv.proben-ohne-krach.de:8002",
  headers: {
    'Content-Type': 'application/json'
  }
});

// General room services
const getRoomPresetCollections = () => apiClient.get('/room/presetcollections');
const getCurrentRoomPresetCollection = () => apiClient.get('/room/presetcollections/current');
const selectCurrentRoomPresetCollection = id => apiClient.put('/room/presetcollections/current', null, {
  params: {
    id: id
  }
});
const resetRoom = () => apiClient.post('/room/reset');
const getWifiQrImage = () => apiClient.get('/room/wifi-qr-code', {
  responseType: 'blob'
});
const getControlQrImage = () => apiClient.get('/room/control-qr-code', {
  responseType: 'blob'
});
const getControlQrImage2 = () => apiClient.get('/room/control-qr-code2', {
  responseType: 'blob'
});
const getRoomStatus = () => apiClient.get('/room');

// Instrument services
const getInstruments = () => apiClient.get('/instruments');
const getInstrumentById = id => apiClient.get(`/instruments/${id}`);
const updateInstrumentVolume = (id, volume) => apiClient.patch(`/instruments/${id}/volume`, null, {
  params: {
    volume: volume
  }
});
const updateInstrumentPanorama = (id, panorama) => apiClient.patch(`/instruments/${id}/panorama`, null, {
  params: {
    panorama: panorama
  }
});
const selectInstrumentPreset = (id, preset_id) => apiClient.patch(`/instruments/${id}/preset`, null, {
  params: {
    preset_id: preset_id
  }
});
const toggleInstrumentMute = id => apiClient.patch(`/instruments/${id}/mute`);

// Tuner services
const getTunerState = id => apiClient.get(`/instruments/${id}/tuner`);
const turnTunerOn = id => apiClient.post(`/instruments/${id}/tuner/on`);
const turnTunerOff = id => apiClient.post(`/instruments/${id}/tuner/off`);
const getTuning = id => apiClient.get(`/instruments/${id}/tuning`);

// Recorder services
const api_startRecording = (name, start_time) => recClient.post('/recorder/start', null, {
  params: {
    name: name,
    start_time: start_time
  }
});
const api_stopRecording = () => recClient.post('/recorder/stop');
const api_playRecording = id => recClient.post(`/player/play/${id}`);
const api_deleteRecording = id => recClient.delete(`/recorder/delete/${id}`);
const api_getRecordings = id => recClient.get('/recorder/list-recordings');
const api_getRecorderStatus = () => recClient.get('/recorder/status');
const api_stopPlayback = () => recClient.post('/player/stop');

/***/ }),

/***/ 6394:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ useInstrumentStore)
/* harmony export */ });
/* harmony import */ var pinia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1555);
/* harmony import */ var _services_apiServices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6166);
/* harmony import */ var _boot_axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(660);



const useInstrumentStore = (0,pinia__WEBPACK_IMPORTED_MODULE_2__/* .defineStore */ .nY)('instrumentStore', {
  state: () => ({
    isRecorderActive: false,
    isBackendAvailable: false,
    selectedInstrumentId: null,
    selectedInstrumentName: null,
    selectedInstrumentType: null,
    selectedPresetCollectionName: null,
    isPreventScreenDimming: false,
    roomStatus: null
  }),
  actions: {
    togglePreventScreenDimming() {
      this.isPreventScreenDimming = !this.isPreventScreenDimming;
    },
    setPreventScreenDimming(value) {
      this.isPreventScreenDimming = value;
    },
    checkBackendAvailability() {
      console.log('Checking backend availability...');
      const response = _boot_axios__WEBPACK_IMPORTED_MODULE_1__.api.get('room').then(response => {
        if (response.status === 200) {
          this.isBackendAvailable = true;
          this.roomStatus = response.data;
          this.updateStore();
        } else {
          this.isBackendAvailable = false;
        }
      }).catch(error => {
        console.log('Backend service is not available:', error);
        this.isBackendAvailable = false;
      });
    },
    setSelectedInstrument(id, name, type) {
      this.selectedInstrumentId = id;
      this.selectedInstrumentName = name;
      this.selectedInstrumentType = type;
    },
    setPresetCollection(name) {
      this.selectedPresetCollectionName = name;
    },
    updateStore() {
      (0,_services_apiServices__WEBPACK_IMPORTED_MODULE_0__/* .getCurrentRoomPresetCollection */ .O8)().then(response => {
        this.selectedPresetCollectionName = response.data.name;
      }).catch(error => {
        console.error('Error getting preset collection:', error);
      });
    },
    setRecorderActive(value) {
      console.log('Setting recorder active:', value);
      this.isRecorderActive = value;
    }
  },
  getters: {
    getSelectedPresetCollectionName: state => state.selectedPresetCollectionName,
    getSelectedInstrumentId: state => state.selectedInstrumentId,
    getSelectedInstrumentName: state => state.selectedInstrumentName,
    getSelectedInstrumentType: state => state.selectedInstrumentType,
    selectedInstrumentHasTuner: state => state.selectedInstrumentType === 'guitar',
    getRecorderActive: state => state.isRecorderActive
  }
});

/***/ }),

/***/ 4405:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ HomePage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/HomePage.vue?vue&type=template&id=762033e0

const _hoisted_1 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "q-mt-md q-mb-md text-center"
}, " Du bist erfolgreich mit dem Proberaum verbunden und kannst jetzt starten. ", -1);
const _hoisted_2 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "q-mt-md q-mb-md text-center"
}, " Nutze unsere Herbstaktion mit 20% Rabatt auf alle Proberaumbuchungen! Gilt im Zeitraum vom 1.9.2024 bis 31.12.2024. ", -1);
const _hoisted_3 = /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "q-mt-md q-mb-md text-center"
}, " Live Session - Take a seat! Einmal im Monat hast du die Möglichkeit, an unserer inspirierenden Live-Session teilzunehmen. ", -1);
function render(_ctx, _cache, $props, $setup, $data, $options) {
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
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
              name: "wifi",
              color: "primary",
              size: "56px"
            }), _hoisted_1, (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
              "no-caps": "",
              color: "primary",
              size: "lg",
              label: "Wähle dein Instrument",
              onClick: $setup.selectInstrument
            }, null, 8, ["onClick"])]),
            _: 1
          })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_carousel_slide, {
            name: "book",
            class: "column no-wrap flex-center"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
              name: "calendar_month",
              color: "primary",
              size: "56px"
            }), _hoisted_2, (0,runtime_core_esm_bundler/* createTextVNode */.eW)(), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
              "no-caps": "",
              color: "primary",
              size: "md",
              label: "Proberaum\n             buchen",
              to: "/booking"
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_carousel_slide, {
            name: "news",
            class: "column no-wrap flex-center"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
              name: "highlight",
              color: "primary",
              size: "56px"
            }), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(), _hoisted_3, (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
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
          direction: "up",
          "vertical-actions-align": "right"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab_action, {
            color: "secondary",
            onClick: $options.openWhatsappMessage,
            icon: "sms",
            label: "WhatsApp schreiben"
          }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab_action, {
            color: "secondary",
            to: "/booking",
            icon: "calendar_month",
            label: "Proberaum buchen"
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab_action, {
            color: "secondary",
            onClick: $options.makeCall,
            icon: "call",
            label: "Anrufen"
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
;// CONCATENATED MODULE: ./src/pages/HomePage.vue?vue&type=template&id=762033e0

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./node_modules/quasar/src/composables/use-quasar/use-quasar.js
var use_quasar = __webpack_require__(4907);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/HomePage.vue?vue&type=script&lang=js





/* harmony default export */ const HomePagevue_type_script_lang_js = ({
  setup() {
    const CC_PHONE_NUMBER = '+4915566023148';
    const $q = (0,use_quasar/* default */.A)();
    const router = (0,vue_router/* useRouter */.rd)();
    const toggleFullscreen = () => {
      $q.fullscreen.request().then(() => {
        console.log('Fullscreen mode activated');
      }).catch(err => {
        console.error('Failed to activate fullscreen mode:', err);
      });
    };
    const selectInstrument = () => {
      router.push('/select-instrument');
    };
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    if (!store.isBackendAvailable) {
      store.checkBackendAvailability();
    }
    const slide = (0,reactivity_esm_bundler/* ref */.KR)('book');
    if (store.isBackendAvailable /* && store.selectedInstrumentId === null*/) {
      slide.value = 'connect';
    }
    return {
      showDialog: (0,reactivity_esm_bundler/* ref */.KR)(false),
      toggleFullscreen,
      slide,
      selectInstrument,
      CC_PHONE_NUMBER
    };
  },
  data() {
    return {};
  },
  mounted() {
    this.checkConnectionStatus();
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    if (!store.isBackendAvailable) {
      setTimeout(() => {
        this.checkConnectionStatus();
      }, 400);
    }
  },
  methods: {
    checkConnectionStatus() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      if (store.isBackendAvailable && store.selectedInstrumentId === null) {
        this.slide = 'connect';
      }
    },
    openHomePage() {
      window.open('http://www.proben-ohne-krach.de/kontakt', '_blank');
    },
    openLiveSessionPage() {
      window.open('https://www.proben-ohne-krach.de/live-session-take-a-seat-/', '_blank');
    },
    makeCall() {
      window.location.href = `tel:${this.CC_PHONE_NUMBER}`;
    },
    openWhatsappMessage() {
      const url = `https://wa.me/${this.CC_PHONE_NUMBER}`;
      window.open(url, '_blank');
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/carousel/QCarousel.js
var QCarousel = __webpack_require__(9652);
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
//# sourceMappingURL=405.f4d6376d.js.map