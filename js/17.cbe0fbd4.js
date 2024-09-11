"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[17],{

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

/***/ 5017:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
// EXTERNAL MODULE: ./node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var reactivity_esm_bundler = __webpack_require__(8734);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
;// CONCATENATED MODULE: ./src/utils/wakeLock.js
let wakeLock = null;
async function requestWakeLock() {
  try {
    if ('wakeLock' in navigator) {
      wakeLock = await navigator.wakeLock.request('screen');
      console.log('Wake lock is active');
    } else {
      console.log('Wake lock is not supported');
    }
  } catch (err) {
    console.error(`${err.name}, ${err.message}`);
  }
}
function releaseWakeLock() {
  if (wakeLock !== null) {
    wakeLock.release().then(() => {
      wakeLock = null;
      console.log('Wake lock released');
    });
  }
}

// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/layouts/MainLayout.vue?vue&type=script&setup=true&lang=js

const _withScopeId = n => (_pushScopeId("data-v-7a69430a"), n = n(), _popScopeId(), n);
const _hoisted_1 = {
  class: "row no-wrap"
};




/* harmony default export */ const MainLayoutvue_type_script_setup_true_lang_js = (/*#__PURE__*/Object.assign({
  name: 'MainLayout'
}, {
  __name: 'MainLayout',
  setup(__props) {
    (0,runtime_core_esm_bundler/* onMounted */.sV)(() => {
      requestWakeLock();
    });
    (0,runtime_core_esm_bundler/* onBeforeUnmount */.xo)(() => {
      releaseWakeLock();
    });
    const isRecorderActive = (0,runtime_core_esm_bundler/* computed */.EW)(() => {
      return store.getRecorderActive;
    });
    const leftDrawerOpen = (0,reactivity_esm_bundler/* ref */.KR)(false);
    const router = (0,vue_router/* useRouter */.rd)();
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function goBack() {
      router.go(-1);
    }
    function openHomePage() {
      window.open('http://www.proben-ohne-krach.de/', '_blank');
    }
    function openLiveSessionPage() {
      window.open('https://www.proben-ohne-krach.de/live-session-take-a-seat-/', '_blank');
    }
    return (_ctx, _cache) => {
      const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
      const _component_q_avatar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-avatar");
      const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar-title");
      const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar");
      const _component_q_space = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-space");
      const _component_q_header = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-header");
      const _component_q_route_tab = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-route-tab");
      const _component_q_tabs = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-tabs");
      const _component_q_footer = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-footer");
      const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
      const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-section");
      const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-label");
      const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item");
      const _component_q_separator = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-separator");
      const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-list");
      const _component_q_drawer = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-drawer");
      const _component_router_view = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("router-view");
      const _component_q_page_container = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page-container");
      const _component_q_layout = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-layout");
      const _directive_ripple = (0,runtime_core_esm_bundler/* resolveDirective */.gN)("ripple");
      return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_layout, {
        view: "hhh Lpr lFf"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_header, {
          class: "bg-dark"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_1, [_ctx.$route.meta.showBackArrow || _ctx.$route.meta.title ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_toolbar, {
            key: 0
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [_ctx.$route.meta.showBackArrow ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_btn, {
              key: 0,
              flat: "",
              round: "",
              dense: "",
              icon: "arrow_back",
              onClick: goBack
            })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), !_ctx.$route.meta.showBackArrow ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_avatar, {
              key: 1,
              class: "float-right"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
                src: "icons/icon-128x128.png",
                alt: "Proben ohne Krach",
                onClick: openHomePage
              })]),
              _: 1
            })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _ctx.$route.meta.title ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_toolbar_title, {
              key: 2,
              class: "text-center"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)(_ctx.$route.meta.title), 1)]),
              _: 1
            })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
            _: 1
          })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), _ctx.$route.meta.showHeader ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_toolbar, {
            key: 1
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
              flat: "",
              dense: "",
              round: "",
              icon: "menu",
              "aria-label": "Menu",
              onClick: toggleLeftDrawer
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar_title, {
              class: "text-center text-h6"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" PoK ")]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_space), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_avatar, {
              class: "float-right"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
                src: "icons/icon-128x128.png",
                alt: "Proben ohne Krach",
                onClick: openHomePage
              })]),
              _: 1
            })]),
            _: 1
          })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)])]),
          _: 1
        }), !_ctx.$route.meta.hideFooter ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_footer, {
          key: 0,
          class: "bg-dark q-pb-md"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_tabs, {
            "narrow-indicator": "",
            "active-class": "highlighted-tab"
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_route_tab, {
              "no-caps": "",
              icon: "home",
              label: "Start",
              to: "/",
              exact: ""
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_route_tab, {
              "no-caps": "",
              icon: "meeting_room",
              label: "Raum",
              to: "/room",
              exact: ""
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_route_tab, {
              "no-caps": "",
              icon: "fa-solid fa-sliders",
              label: "Instrument",
              to: "/instrument",
              exact: ""
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_route_tab, (0,runtime_core_esm_bundler/* mergeProps */.v6)({
              "no-caps": "",
              icon: "mic",
              label: "Aufnahme",
              to: "/recorder",
              exact: ""
            }, {
              ...(isRecorderActive.value ? {
                alert: 'red'
              } : {})
            }), null, 16)]),
            _: 1
          })]),
          _: 1
        })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_drawer, {
          modelValue: leftDrawerOpen.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => leftDrawerOpen.value = $event),
          "show-if-above": "",
          width: 270,
          mini: "",
          bordered: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_list, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              clickable: "",
              exact: "",
              to: "/"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "home"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Start")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              clickable: "",
              to: "/room"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "meeting_room"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Raumsteuerung")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              clickable: "",
              to: "/instrument"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "fa-solid fa-sliders"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Instrumentensteuerung")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_separator), (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              clickable: "",
              onClick: openHomePage
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "web"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Homepage")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              clickable: "",
              to: "/booking"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "calendar_month"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Proberaum buchen")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              clickable: "",
              onClick: openLiveSessionPage
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "highlight"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Live Sesssion - Take a seat")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_separator), (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              disable: "",
              clickable: "",
              to: "/admin"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "settings"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Adminbereich")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              clickable: "",
              to: "/impressum"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "policy"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Impressum")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]]), (0,runtime_core_esm_bundler/* withDirectives */.bo)(((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_item, {
              clickable: "",
              to: "/connection-status"
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
                avatar: ""
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                  name: "network_check"
                })]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                  default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Verbindungsstatus")]),
                  _: 1
                })]),
                _: 1
              })]),
              _: 1
            })), [[_directive_ripple]])]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_page_container, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_router_view)]),
          _: 1
        })]),
        _: 1
      });
    };
  }
}));
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue?vue&type=script&setup=true&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__(2008);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__(8416);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__(3952);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(9150);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/space/QSpace.js
var QSpace = __webpack_require__(3676);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__(7092);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__(2980);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QRouteTab.js + 1 modules
var QRouteTab = __webpack_require__(878);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__(6056);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__(3999);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js
var QItem = __webpack_require__(124);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__(5173);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(492);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__(3796);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__(386);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__(5205);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/ripple/Ripple.js + 1 modules
var Ripple = __webpack_require__(9626);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/layouts/MainLayout.vue



;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(MainLayoutvue_type_script_setup_true_lang_js, [['__scopeId',"data-v-7a69430a"]])

/* harmony default export */ const MainLayout = (__exports__);
;


















runtime_auto_import_default()(MainLayoutvue_type_script_setup_true_lang_js, 'components', {QLayout: QLayout/* default */.A,QHeader: QHeader/* default */.A,QToolbar: QToolbar/* default */.A,QBtn: QBtn/* default */.A,QAvatar: QAvatar/* default */.A,QToolbarTitle: QToolbarTitle/* default */.A,QSpace: QSpace/* default */.A,QFooter: QFooter/* default */.A,QTabs: QTabs/* default */.A,QRouteTab: QRouteTab/* default */.A,QDrawer: QDrawer/* default */.A,QList: QList/* default */.A,QItem: QItem/* default */.A,QItemSection: QItemSection/* default */.A,QIcon: QIcon/* default */.A,QItemLabel: QItemLabel/* default */.A,QSeparator: QSeparator/* default */.A,QPageContainer: QPageContainer/* default */.A});runtime_auto_import_default()(MainLayoutvue_type_script_setup_true_lang_js, 'directives', {Ripple: Ripple/* default */.A});


/***/ })

}]);
//# sourceMappingURL=17.cbe0fbd4.js.map