"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[169],{

/***/ 9160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ InstrumentPage)
});

// EXTERNAL MODULE: ./node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var runtime_core_esm_bundler = __webpack_require__(1758);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/InstrumentPage.vue?vue&type=template&id=36b01b51

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
;// CONCATENATED MODULE: ./src/pages/InstrumentPage.vue?vue&type=template&id=36b01b51

// EXTERNAL MODULE: ./node_modules/@vue/shared/dist/shared.esm-bundler.js
var shared_esm_bundler = __webpack_require__(8790);
// EXTERNAL MODULE: ./src/assets/icons/tuning-fork.png
var tuning_fork = __webpack_require__(9394);
var tuning_fork_default = /*#__PURE__*/__webpack_require__.n(tuning_fork);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/InstrumentControl.vue?vue&type=template&id=43bf9b6e&scoped=true


const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.Qi)("data-v-43bf9b6e"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.jt)(), n);
const InstrumentControlvue_type_template_id_43bf9b6e_scoped_true_hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("img", {
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
function InstrumentControlvue_type_template_id_43bf9b6e_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_instrument_selector_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("instrument-selector-dialog");
  const _component_tuner_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("tuner-dialog");
  const _component_panorama_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("panorama-dialog");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_fab_action = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-fab-action");
  const _component_q_fab = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-fab");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_slider = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-slider");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_instrument_selector_dialog, {
    ref: "instrumentSelector"
  }, null, 512), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_tuner_dialog, {
    ref: "tunerDialog"
  }, null, 512), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_panorama_dialog, {
    ref: "panoramaDialog"
  }, null, 512), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, {
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
        onClick: $options.openInstrumentSelector
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
          onClick: $options.openPanoramaSelect,
          icon: "panorama_horizontal"
        }, null, 8, ["onClick"]), $setup.selectedInstrumentHasTuner ? ((0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_fab_action, {
          key: 0,
          color: "secondary",
          onClick: $options.openTuner
        }, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [InstrumentControlvue_type_template_id_43bf9b6e_scoped_true_hoisted_1]),
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
  })], 64);
}
;// CONCATENATED MODULE: ./src/components/InstrumentControl.vue?vue&type=template&id=43bf9b6e&scoped=true

// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
// EXTERNAL MODULE: ./src/components/InstrumentSelectorDialog.vue + 4 modules
var InstrumentSelectorDialog = __webpack_require__(4477);
// EXTERNAL MODULE: ./src/components/TunerDialog.vue + 4 modules
var TunerDialog = __webpack_require__(9627);
// EXTERNAL MODULE: ./src/components/PanoramaDialog.vue + 3 modules
var PanoramaDialog = __webpack_require__(2649);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/InstrumentControl.vue?vue&type=script&lang=js






/* harmony default export */ const InstrumentControlvue_type_script_lang_js = ({
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const selectedInstrumentName = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.getSelectedInstrumentName);
    const selectedInstrumentId = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.getSelectedInstrumentId);
    const selectedInstrumentHasTuner = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.selectedInstrumentHasTuner);
    return {
      selectedInstrumentName,
      selectedInstrumentId,
      selectedInstrumentHasTuner
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
  components: {
    InstrumentSelectorDialog: InstrumentSelectorDialog/* default */.A,
    TunerDialog: TunerDialog/* default */.A,
    PanoramaDialog: PanoramaDialog/* default */.A
  },
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
    openPanoramaSelect() {
      this.$refs.panoramaDialog.show(this.selectedInstrumentId);
    },
    openInstrumentSelector() {
      this.$refs.instrumentSelector.show();
    },
    openTuner() {
      this.$refs.tunerDialog.show(this.selectedInstrumentId);
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


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(InstrumentControlvue_type_script_lang_js, [['render',InstrumentControlvue_type_template_id_43bf9b6e_scoped_true_render],['__scopeId',"data-v-43bf9b6e"]])

/* harmony default export */ const InstrumentControl = (__exports__);
;






runtime_auto_import_default()(InstrumentControlvue_type_script_lang_js, 'components', {QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QBtn: QBtn/* default */.A,QFab: QFab/* default */.A,QFabAction: QFabAction/* default */.A,QSlider: QSlider/* default */.A});

// EXTERNAL MODULE: ./src/components/BackendStatus.vue + 3 modules
var BackendStatus = __webpack_require__(6006);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/InstrumentPage.vue?vue&type=script&lang=js




/* harmony default export */ const InstrumentPagevue_type_script_lang_js = ({
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const isBackendAvailable = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.isBackendAvailable);
    return {
      isBackendAvailable
    };
  },
  components: {
    InstrumentControl: InstrumentControl,
    BackendStatus: BackendStatus/* default */.A
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


/***/ })

}]);
//# sourceMappingURL=169.c1d6def4.js.map