(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[119],{

/***/ 6166:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";

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

/***/ 9119:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InstrumentPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/InstrumentPage.vue?vue&type=template&id=1151c5e0

const _hoisted_1 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_backend_status = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("backend-status");
  const _component_instrument_control = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("instrument-control");
  const _component_q_page = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-page");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_page, null, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [!$setup.isBackendAvailable ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)("div", _hoisted_1, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_backend_status)])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.isBackendAvailable ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_instrument_control, {
      key: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/pages/InstrumentPage.vue?vue&type=template&id=1151c5e0

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
// EXTERNAL MODULE: ./src/assets/icons/tuning-fork.png
var tuning_fork = __webpack_require__(9394);
var tuning_fork_default = /*#__PURE__*/__webpack_require__.n(tuning_fork);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/InstrumentControl.vue?vue&type=template&id=02d5b2aa&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.Qi)("data-v-02d5b2aa"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.jt)(), n);
const InstrumentControlvue_type_template_id_02d5b2aa_scoped_true_hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
  class: "icon-img",
  src: (tuning_fork_default())
}, null, -1));
const _hoisted_2 = {
  class: "col-5"
};
const _hoisted_3 = {
  class: "full-width q-mb-md flex flex-center"
};
const _hoisted_4 = {
  class: "full-width flex flex-center"
};
const _hoisted_5 = {
  class: "full-width q-mt-md q-mb-xl flex flex-center"
};
const _hoisted_6 = {
  class: "full-width flex flex-center"
};
const _hoisted_7 = {
  class: "col-7"
};
const _hoisted_8 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "q-mt-lg"
}, " Instrument ist stummgeschaltet ", -1));
function InstrumentControlvue_type_template_id_02d5b2aa_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_fab_action = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-fab-action");
  const _component_q_fab = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-fab");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_slider = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-slider");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_card, {
    flat: ""
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
      class: "q-pb-xl"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        color: "secondary",
        class: "q-mt-sm",
        "no-caps": "",
        rounded: "",
        onClick: $setup.selectInstrument
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)((0,shared_esm_bundler/* toDisplayString */.v_)($setup.selectedInstrumentName || "Wähle dein Instrument"), 1)]),
        _: 1
      }, 8, ["onClick"]), $setup.selectedInstrumentId && !$data.isMuted ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_fab, {
        key: 0,
        class: "float-right",
        color: "primary",
        icon: "keyboard_arrow_left",
        direction: "left"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab_action, {
          color: "secondary",
          onClick: $options.toggleMute,
          icon: "volume_off"
        }, null, 8, ["onClick"]), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_fab_action, {
          color: "secondary",
          onClick: $setup.openPanorama,
          icon: "panorama_horizontal"
        }, null, 8, ["onClick"]), $setup.selectedInstrumentHasTuner ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_fab_action, {
          key: 0,
          color: "secondary",
          onClick: $setup.openTuner
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [InstrumentControlvue_type_template_id_02d5b2aa_scoped_true_hoisted_1]),
          _: 1
        }, 8, ["onClick"])) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
        _: 1
      })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
      _: 1
    }), $setup.selectedInstrumentId && !$data.isMuted ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_card_section, {
      key: 0,
      flat: "",
      class: "full-width q-pa-none row no-wrap items-start q-pa-none"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
        flat: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
          class: "q-mr-sm"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            disable: $data.isMuted,
            round: "",
            icon: "volume_up",
            color: "primary",
            onClick: _cache[0] || (_cache[0] = $event => $options.changeVolume(1)),
            size: "lg"
          }, null, 8, ["disable"])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_slider, {
            disable: $data.isMuted,
            class: "vertical-slider",
            modelValue: $options.intVolume,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => $options.intVolume = $event),
            "track-size": "40px",
            "thumb-size": "0px",
            color: "grey-6",
            reverse: "",
            min: 0,
            max: 100,
            vertical: ""
          }, null, 8, ["disable", "modelValue"])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
            disable: $data.isMuted,
            round: "",
            icon: "volume_down",
            color: "primary",
            onClick: _cache[2] || (_cache[2] = $event => $options.changeVolume(-1)),
            size: "lg"
          }, null, 8, ["disable"])]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_6, (0,shared_esm_bundler/* toDisplayString */.v_)($options.displayVolume), 1)]),
          _: 1
        })]),
        _: 1
      })]), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_7, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
        flat: ""
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
          class: "q-pl-md q-pr-lg"
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($data.presets, (preset, index) => {
            return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_btn, {
              padding: "",
              disable: $data.isMuted,
              dense: "",
              "no-wrap": "",
              "no-caps": "",
              size: "md",
              class: (0,shared_esm_bundler/* normalizeClass */.C4)(["full-width q-mb-md q-pa-md", $options.getPresetButtonClass(index + 1)]),
              label: $data.presets[index],
              key: index,
              onClick: $event => $options.selectPreset(index + 1)
            }, null, 8, ["disable", "class", "label", "onClick"]);
          }), 128))]),
          _: 1
        })]),
        _: 1
      })])]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true), $setup.selectedInstrumentId && $data.isMuted ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_card_section, {
      key: 1,
      flat: "",
      class: "column items-center",
      style: {
        "margin-top": "120px"
      }
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
        round: "",
        icon: "volume_off",
        color: "primary",
        onClick: $options.toggleMute,
        size: "xl"
      }, null, 8, ["onClick"]), _hoisted_8]),
      _: 1
    })) : (0,runtime_core_esm_bundler/* createCommentVNode */.Q3)("", true)]),
    _: 1
  });
}
;// CONCATENATED MODULE: ./src/components/InstrumentControl.vue?vue&type=template&id=02d5b2aa&scoped=true

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(239);
// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.mjs
var vue_router = __webpack_require__(455);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/InstrumentControl.vue?vue&type=script&lang=js





/* harmony default export */ const InstrumentControlvue_type_script_lang_js = ({
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const router = (0,vue_router/* useRouter */.rd)();
    const selectedInstrumentName = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.getSelectedInstrumentName);
    const selectedInstrumentId = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.getSelectedInstrumentId);
    const selectedInstrumentHasTuner = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.selectedInstrumentHasTuner);
    const selectInstrument = () => {
      router.push('/select-instrument');
    };
    const openTuner = () => {
      router.push(`/tuner/${selectedInstrumentId.value}`);
    };
    const openPanorama = () => {
      router.push(`/panorama/${selectedInstrumentId.value}`);
    };
    return {
      selectedInstrumentName,
      selectedInstrumentId,
      selectedInstrumentHasTuner,
      selectInstrument,
      openTuner,
      openPanorama
    };
  },
  created() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    this.updateInstrumentState(store.getSelectedInstrumentId);
  },
  name: 'InstrumentControl',
  data() {
    return {
      isLoading: true,
      volume: 30,
      isMuted: false,
      currentPreset: null,
      // we start with index 0, in the REST api the first element is 1
      presets: []
    };
  },
  components: {},
  computed: {
    intVolume: {
      get() {
        return this.volume;
      },
      set(value) {
        let volume = parseInt(value, 10);
        this.changeVolume(volume - this.volume);
      }
    },
    displayVolume: {
      get() {
        return "Lautstärke " + this.volume + ' %';
      }
    }
  },
  mounted() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    (0,runtime_core_esm_bundler/* watch */.wB)(() => store.selectedInstrumentId, newValue => {
      this.updateInstrumentState(newValue);
    });
  },
  methods: {
    getPresetButtonClass(index) {
      if (this.currentPreset === index) {
        return 'bg-primary text-white';
      } else {
        return 'bg-secondary text-white';
      }
    },
    getMuteButtonClass() {
      return {
        'bg-primary text-white': this.isMuted
      };
    },
    updateInstrumentState(selectedInstrumentId) {
      if (!selectedInstrumentId) return;
      (0,apiServices/* getInstrumentById */.Qy)(selectedInstrumentId).then(response => {
        this.isMuted = response.data.is_muted;
        this.volume = response.data.volume;
        this.currentPreset = response.data.selected_preset.id;

        // retrieve reported presets and store names in local array
        this.presets = response.data.presets.slice(0, 6).map(preset => preset.name);
      }).catch(error => {
        console.error('Error fetching instrument state:', error);
      });
      this.isLoading = false;
    },
    toggleMute() {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      const selectedInstrumentId = store.getSelectedInstrumentId;
      if (!selectedInstrumentId) return;
      this.isMuted = !this.isMuted;
      (0,apiServices/* toggleInstrumentMute */.$r)(selectedInstrumentId).then(response => {
        this.isMuted = response.data.is_muted;
      }).catch(error => {
        console.error('Error toggling mute:', error);
      });
    },
    changeVolume(amount) {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      const selectedInstrumentId = store.getSelectedInstrumentId;
      if (!selectedInstrumentId) return;
      this.volume = Math.max(0, Math.min(100, this.volume + amount));

      // perform REST api call and update state with response
      (0,apiServices/* updateInstrumentVolume */.RV)(selectedInstrumentId, this.volume).then(response => {
        this.volume = response.data.volume;
      }).catch(error => {
        console.error('Error setting volume:', error);
      });
    },
    selectPreset(presetId) {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      const selectedInstrumentId = store.getSelectedInstrumentId;
      if (!selectedInstrumentId) return;
      this.currentPreset = presetId;
      (0,apiServices/* selectInstrumentPreset */.LO)(selectedInstrumentId, presetId).then(response => {
        this.currentPreset = response.data.selected_preset.id;
      }).catch(error => {
        console.error('Error setting preset:', error);
      });
    }
  }
});
;// CONCATENATED MODULE: ./src/components/InstrumentControl.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFab.js
var QFab = __webpack_require__(4782);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFabAction.js
var QFabAction = __webpack_require__(284);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/slider/QSlider.js + 1 modules
var QSlider = __webpack_require__(1444);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/InstrumentControl.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(InstrumentControlvue_type_script_lang_js, [['render',InstrumentControlvue_type_template_id_02d5b2aa_scoped_true_render],['__scopeId',"data-v-02d5b2aa"]])

/* harmony default export */ const InstrumentControl = (__exports__);
;






runtime_auto_import_default()(InstrumentControlvue_type_script_lang_js, 'components', {QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QBtn: QBtn/* default */.A,QFab: QFab/* default */.A,QFabAction: QFabAction/* default */.A,QSlider: QSlider/* default */.A});

// EXTERNAL MODULE: ./src/components/BackendStatus.vue + 3 modules
var BackendStatus = __webpack_require__(6006);
// EXTERNAL MODULE: ./node_modules/nosleep.js/src/index.js
var src = __webpack_require__(3194);
var src_default = /*#__PURE__*/__webpack_require__.n(src);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/InstrumentPage.vue?vue&type=script&lang=js





/* harmony default export */ const InstrumentPagevue_type_script_lang_js = ({
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const isBackendAvailable = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.isBackendAvailable);
    return {
      isBackendAvailable,
      store
    };
  },
  data() {
    return {
      noSleep: new (src_default())()
    };
  },
  components: {
    InstrumentControl: InstrumentControl,
    BackendStatus: BackendStatus/* default */.A
  },
  mounted() {
    if (this.store.isPreventScreenDimming) {
      console.log('Enable prevent screen dimming');
      this.noSleep.enable();
    }
  },
  unmounted() {
    if (this.store.isPreventScreenDimming) {
      console.log('Disable prevent screen dimming');
      this.noSleep.disable();
    }
  }
});
;// CONCATENATED MODULE: ./src/pages/InstrumentPage.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
;// CONCATENATED MODULE: ./src/pages/InstrumentPage.vue




;
const InstrumentPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(InstrumentPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const InstrumentPage = (InstrumentPage_exports_);
;

runtime_auto_import_default()(InstrumentPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.A});


/***/ }),

/***/ 9394:
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAQAAACROWYpAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAD/h4/MvwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+gIEhQTMzmzzLIAAADjSURBVDjLzZSxFsFAEEXvEqFAoVDxAzRKh9Y5+AD//x2aPEUWuzEZHIpMkZnsvJd5M7sb6JxJUuot6/1SoAvkIEmMXXSNKV/IqgDo+2QAXZvLc0niCJQMwZh2wRTYSBLrjCtF0LRJyvwiQeZkLmnK8hKwtcnr6Pem7GWMJk/yT1v1L9m5qC8GFrfqBJSMzJ7r9XqrVoZwiVnWCI1b1c/rPgYW6qjyRwMQhvfX4pkI4e1cqxxTuOAd7gdbk+lE2zS1HpIweI2+Mu//5Vb+xDzyIXnarXmiI6QV849bZdr5cd47Zzd4ZOSAigyYbwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyNC0wOC0xOFQyMDoxOToyOSswMDowMKZhznIAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjQtMDgtMThUMjA6MTk6MjkrMDA6MDDXPHbOAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDI0LTA4LTE4VDIwOjE5OjUxKzAwOjAwuQMQbwAAAABJRU5ErkJggg=="

/***/ })

}]);
//# sourceMappingURL=119.ecb2a5bb.js.map