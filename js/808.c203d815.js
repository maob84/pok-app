"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[808],{

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $r: () => (/* binding */ toggleInstrumentMute),
/* harmony export */   Bz: () => (/* binding */ turnTunerOn),
/* harmony export */   Cl: () => (/* binding */ updateInstrumentPanorama),
/* harmony export */   GY: () => (/* binding */ getRoomPresetCollections),
/* harmony export */   LO: () => (/* binding */ selectInstrumentPreset),
/* harmony export */   O8: () => (/* binding */ getCurrentRoomPresetCollection),
/* harmony export */   Qy: () => (/* binding */ getInstrumentById),
/* harmony export */   RV: () => (/* binding */ updateInstrumentVolume),
/* harmony export */   U8: () => (/* binding */ selectCurrentRoomPresetCollection),
/* harmony export */   Zr: () => (/* binding */ resetRoom),
/* harmony export */   mw: () => (/* binding */ getControlQrImage),
/* harmony export */   ok: () => (/* binding */ getWifiQrImage),
/* harmony export */   pB: () => (/* binding */ getInstruments),
/* harmony export */   uB: () => (/* binding */ getTuning),
/* harmony export */   uJ: () => (/* binding */ getRoomStatus),
/* harmony export */   xr: () => (/* binding */ turnTunerOff)
/* harmony export */ });
/* unused harmony exports apiClient, getTunerState */
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
    }
  },
  getters: {
    getSelectedPresetCollectionName: state => state.selectedPresetCollectionName,
    getSelectedInstrumentId: state => state.selectedInstrumentId,
    getSelectedInstrumentName: state => state.selectedInstrumentName,
    getSelectedInstrumentType: state => state.selectedInstrumentType,
    selectedInstrumentHasTuner: state => state.selectedInstrumentType === 'guitar'
  }
});

/***/ }),

/***/ 6006:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BackendStatus)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BackendStatus.vue?vue&type=template&id=0c0600b4

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
  const _component_q_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-spinner");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_banner = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-banner");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_banner, {
    dense: "",
    class: "bg-primary text-white"
  }, {
    avatar: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
      name: "signal_wifi_off"
    })]),
    action: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
      flat: "",
      "no-caps": "",
      label: "Erneute versuchen",
      loading: $data.isLoading,
      icon: "refresh",
      color: "white",
      onClick: $options.retry
    }, {
      loading: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_spinner, {
        class: "on-left"
      })]),
      _: 1
    }, 8, ["loading", "onClick"])]),
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" Es besteht keine Verbindung zum Proberaum. Bitte überprüfe die Verbindung zum Proberaum-WLAN. ")]),
    _: 1
  })]);
}
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/BackendStatus.vue?vue&type=script&lang=js

/* harmony default export */ const BackendStatusvue_type_script_lang_js = ({
  data() {
    return {
      isLoading: false
    };
  },
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
  },
  computed: {
    isAvailable() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      return store.isBackendAvailable;
    }
  },
  methods: {
    retry() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      this.isLoading = true;
      store.checkBackendAvailability();
      setTimeout(() => {
        this.isLoading = false;
      }, 1500);
    }
  }
});
;// CONCATENATED MODULE: ./src/components/BackendStatus.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__(6868);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__(492);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(8210);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/BackendStatus.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(BackendStatusvue_type_script_lang_js, [['render',render]])

/* harmony default export */ const BackendStatus = (__exports__);
;




runtime_auto_import_default()(BackendStatusvue_type_script_lang_js, 'components', {QBanner: QBanner/* default */.A,QIcon: QIcon/* default */.A,QBtn: QBtn/* default */.A,QSpinner: QSpinner/* default */.A});


/***/ }),

/***/ 9808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RoomPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/RoomPage.vue?vue&type=template&id=ec644280

const _hoisted_1 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_backend_status = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("backend-status");
  const _component_q_icon = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-icon");
  const _component_q_item_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-section");
  const _component_q_item_label = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item-label");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_item = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-item");
  const _component_q_toggle = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toggle");
  const _component_q_list = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-list");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_spinner = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-spinner");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [!$setup.isBackendAvailable ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_backend_status)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.isBackendAvailable ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_card, {
      key: 1,
      flat: ""
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_list, {
          bordered: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                name: "fa-solid fa-music"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Preset-Vorauswahl")]),
                _: 1
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              side: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                "no-caps": "",
                color: "primary",
                onClick: $setup.selectPresets,
                class: "q-mb-md",
                label: $setup.selectedPresetCollectionName
              }, null, 8, ["onClick", "label"])]),
              _: 1
            })]),
            _: 1
          }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, {
            disable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                name: "light"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Ambient-Beleuchtung")]),
                _: 1
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              side: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toggle, {
                size: "xl",
                modelValue: $setup.ambientLightOn,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $setup.ambientLightOn = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_list, {
          bordered: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, {
            disable: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                name: "door_front"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Zugangstür ist " + (0,shared_esm_bundler/* toDisplayString */.v_)($setup.roomDoorOpen ? "offen" : "verschlossen"), 1)]),
                _: 1
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              side: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
                color: "primary",
                round: "",
                size: "xl",
                icon: $setup.roomDoorOpen ? "lock" : "lock_open"
              }, null, 8, ["icon"])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_list, {
          bordered: ""
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item, null, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              avatar: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_icon, {
                name: "light_mode"
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, null, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, null, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Handy-Display nicht abdunkeln")]),
                _: 1
              }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_label, {
                caption: "",
                lines: "2"
              }, {
                default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Reduziert die Akkulaufzeit")]),
                _: 1
              })]),
              _: 1
            }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_item_section, {
              side: ""
            }, {
              default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toggle, {
                size: "xl",
                modelValue: $setup.isPreventScreenDimming,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $setup.isPreventScreenDimming = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        class: "q-mt-lg"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
          "no-caps": "",
          loading: $data.performDoorAction,
          color: "secondary",
          onClick: $options.performRoomReset,
          class: "full-width q-mb-md"
        }, {
          loading: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_spinner, {
            class: "on-left"
          }), (0,runtime_core_esm_bundler/* createTextVNode */.eW)(" Proberaum wird zurückgesetzt... ")]),
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)(" Proberaum zurücksetzen ")]),
          _: 1
        }, 8, ["loading", "onClick"])]),
        _: 1
      })]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/RoomPage.vue?vue&type=template&id=ec644280

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/components/BackendStatus.vue + 3 modules
var BackendStatus = __webpack_require__(6006);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/RoomPage.vue?vue&type=script&lang=js






/* harmony default export */ const RoomPagevue_type_script_lang_js = ({
  name: 'RoomView',
  components: {
    BackendStatus: BackendStatus/* default */.A
  },
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const router = (0,vue_router/* useRouter */.rd)();
    const selectedPresetCollectionName = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.getSelectedPresetCollectionName);
    const isBackendAvailable = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.isBackendAvailable);
    const roomDoorOpen = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.roomStatus.door.status === 'open');
    const ambientLightOn = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.roomStatus.light.is_on);
    const selectPresets = () => {
      router.push('/select-presets');
    };
    if (store.isBackendAvailable) {
      store.updateStore();
    }
    const isPreventScreenDimming = (0,runtime_core_esm_bundler/* computed */.EW)({
      get: () => store.isPreventScreenDimming,
      set: newValue => {
        store.setPreventScreenDimming(newValue);
      }
    });
    return {
      selectedPresetCollectionName,
      roomDoorOpen,
      ambientLightOn,
      isBackendAvailable,
      selectPresets,
      isPreventScreenDimming
    };
  },
  data() {
    return {
      performDoorAction: false
    };
  },
  methods: {
    openPresetCollectionSelector() {
      this.$refs.presetSelector.show();
    },
    performRoomReset() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      this.performDoorAction = true;
      // TODO: we shall wait on the feedback from the call to the REST api
      setTimeout(() => {
        this.performDoorAction = false;
      }, 1500);
      (0,apiServices/* resetRoom */.Zr)().then(response => {
        console.log('Room reset:', response);
      }).catch(error => {
        console.error('Error resetting room:', error);
      });
      store.updateStore();
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/RoomPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js
var QToggle = __webpack_require__(6908);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js
var QSpinner = __webpack_require__(8210);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/pages/RoomPage.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(RoomPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const RoomPage = (__exports__);
;











runtime_auto_import_default()(RoomPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QList: QList/* default */.A,QItem: QItem/* default */.A,QItemSection: QItemSection/* default */.A,QIcon: QIcon/* default */.A,QItemLabel: QItemLabel/* default */.A,QBtn: QBtn/* default */.A,QToggle: QToggle/* default */.A,QSpinner: QSpinner/* default */.A});


/***/ })

}]);
//# sourceMappingURL=808.c203d815.js.map