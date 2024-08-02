"use strict";
(globalThis["webpackChunkpok"] = globalThis["webpackChunkpok"] || []).push([[695],{

/***/ 3695:
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
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/RoomPage.vue?vue&type=template&id=96f55836

const _hoisted_1 = {
  key: 0
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_backend_status = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("backend-status");
  const _component_preset_collection_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("preset-collection-dialog");
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
      flat: "",
      class: "q-pa-md"
    }, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_preset_collection_dialog, {
        ref: "presetSelector"
      }, null, 512), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
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
                onClick: $options.openPresetCollectionSelector,
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
;// CONCATENATED MODULE: ./src/pages/RoomPage.vue?vue&type=template&id=96f55836

// EXTERNAL MODULE: ./src/services/apiServices.js
var apiServices = __webpack_require__(6166);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/PresetCollectionDialog.vue?vue&type=template&id=ef74e5d6&scoped=true

const _withScopeId = n => ((0,runtime_core_esm_bundler/* pushScopeId */.Qi)("data-v-ef74e5d6"), n = n(), (0,runtime_core_esm_bundler/* popScopeId */.jt)(), n);
const PresetCollectionDialogvue_type_template_id_ef74e5d6_scoped_true_hoisted_1 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", {
  class: "q-mb-md"
}, " Wir haben für dich je nach Geschmack und Genre verschieden Preset-Sammlungen zusammengestellt. Wähle einfach eine Sammlung aus und starte mit dem Proben. Viel Spaß! ", -1));
const _hoisted_2 = {
  class: "column q-pa-md full-width"
};
const _hoisted_3 = {
  class: "btn-content"
};
const _hoisted_4 = {
  class: "btn-heading"
};
const _hoisted_5 = {
  class: "btn-description"
};
function PresetCollectionDialogvue_type_template_id_ef74e5d6_scoped_true_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_q_toolbar_title = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar-title");
  const _component_q_btn = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-btn");
  const _component_q_toolbar = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-toolbar");
  const _component_q_card_section = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card-section");
  const _component_q_card = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-card");
  const _component_q_dialog = (0,runtime_core_esm_bundler/* resolveComponent */.g2)("q-dialog");
  const _directive_close_popup = (0,runtime_core_esm_bundler/* resolveDirective */.gN)("close-popup");
  return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_dialog, {
    modelValue: $data.showDialog,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => $data.showDialog = $event)
  }, {
    default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card, null, {
      default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_toolbar_title, null, {
          default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createTextVNode */.eW)("Preset-Vorauswahl")]),
          _: 1
        }), (0,runtime_core_esm_bundler/* withDirectives */.bo)((0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_btn, {
          flat: "",
          round: "",
          dense: "",
          icon: "close"
        }, null, 512), [[_directive_close_popup]])]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, null, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [PresetCollectionDialogvue_type_template_id_ef74e5d6_scoped_true_hoisted_1]),
        _: 1
      }), (0,runtime_core_esm_bundler/* createVNode */.bF)(_component_q_card_section, {
        class: "flex flex-center"
      }, {
        default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_2, [((0,runtime_core_esm_bundler/* openBlock */.uX)(true), (0,runtime_core_esm_bundler/* createElementBlock */.CE)(runtime_core_esm_bundler/* Fragment */.FK, null, (0,runtime_core_esm_bundler/* renderList */.pI)($data.roomPresets, preset => {
          return (0,runtime_core_esm_bundler/* openBlock */.uX)(), (0,runtime_core_esm_bundler/* createBlock */.Wv)(_component_q_btn, {
            "no-caps": "",
            key: preset.id,
            color: "primary",
            class: "custom-btn full-width q-mb-md",
            onClick: $event => $options.selectRoomPresetCollection(preset.id),
            unelevated: ""
          }, {
            default: (0,runtime_core_esm_bundler/* withCtx */.k6)(() => [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_3, [(0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_4, (0,shared_esm_bundler/* toDisplayString */.v_)(preset.name), 1), (0,runtime_core_esm_bundler/* createElementVNode */.Lk)("div", _hoisted_5, (0,shared_esm_bundler/* toDisplayString */.v_)(preset.description), 1)])]),
            _: 2
          }, 1032, ["onClick"]);
        }), 128))])]),
        _: 1
      })]),
      _: 1
    })]),
    _: 1
  }, 8, ["modelValue"]);
}
;// CONCATENATED MODULE: ./src/components/PresetCollectionDialog.vue?vue&type=template&id=ef74e5d6&scoped=true

// EXTERNAL MODULE: ./src/stores/instruments-store.js
var instruments_store = __webpack_require__(6394);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/components/PresetCollectionDialog.vue?vue&type=script&lang=js



/* harmony default export */ const PresetCollectionDialogvue_type_script_lang_js = ({
  data() {
    return {
      showDialog: false,
      roomPresets: null
    };
  },
  methods: {
    fetchData() {
      (0,apiServices/* getRoomPresetCollections */.GY)().then(response => {
        this.roomPresets = response.data;
      }).catch(error => {
        console.error('Error fetching data from room backend:', error);
      });
    },
    show() {
      this.fetchData();
      this.showDialog = true;
    },
    close() {
      this.showDialog = false;
    },
    selectRoomPresetCollection(id) {
      const store = (0,instruments_store/* useInstrumentStore */.Q)();
      (0,apiServices/* selectCurrentRoomPresetCollection */.U8)(id).then(response => {
        const presetCollectionName = response.data.name;
        store.setPresetCollection(presetCollectionName);
      }).catch(error => {
        console.error('Error selecting room preset collection:', error);
      });
      this.close();
    }
  }
});
;// CONCATENATED MODULE: ./src/components/PresetCollectionDialog.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(2807);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/dialog/QDialog.js + 5 modules
var QDialog = __webpack_require__(4937);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__(3316);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__(6914);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__(9150);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js
var QBtn = __webpack_require__(6384);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__(4189);
// EXTERNAL MODULE: ./node_modules/quasar/src/directives/close-popup/ClosePopup.js
var ClosePopup = __webpack_require__(8672);
// EXTERNAL MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__(8582);
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);
;// CONCATENATED MODULE: ./src/components/PresetCollectionDialog.vue




;


const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.A)(PresetCollectionDialogvue_type_script_lang_js, [['render',PresetCollectionDialogvue_type_template_id_ef74e5d6_scoped_true_render],['__scopeId',"data-v-ef74e5d6"]])

/* harmony default export */ const PresetCollectionDialog = (__exports__);
;






runtime_auto_import_default()(PresetCollectionDialogvue_type_script_lang_js, 'components', {QDialog: QDialog/* default */.A,QCard: QCard/* default */.A,QToolbar: QToolbar/* default */.A,QToolbarTitle: QToolbarTitle/* default */.A,QBtn: QBtn/* default */.A,QCardSection: QCardSection/* default */.A});runtime_auto_import_default()(PresetCollectionDialogvue_type_script_lang_js, 'directives', {ClosePopup: ClosePopup/* default */.A});

// EXTERNAL MODULE: ./src/components/BackendStatus.vue + 3 modules
var BackendStatus = __webpack_require__(6006);
;// CONCATENATED MODULE: ./node_modules/@quasar/app-webpack/lib/webpack/loader.js.transform-quasar-imports.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-2.use[0]!./node_modules/@quasar/app-webpack/lib/webpack/loader.vue.auto-import-quasar.js??ruleSet[0].use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[1]!./src/pages/RoomPage.vue?vue&type=script&lang=js





/* harmony default export */ const RoomPagevue_type_script_lang_js = ({
  name: 'RoomView',
  components: {
    PresetCollectionDialog: PresetCollectionDialog,
    BackendStatus: BackendStatus/* default */.A
  },
  setup() {
    const store = (0,instruments_store/* useInstrumentStore */.Q)();
    const selectedPresetCollectionName = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.getSelectedPresetCollectionName);
    const isBackendAvailable = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.isBackendAvailable);
    const roomDoorOpen = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.roomStatus.door.status === 'open');
    const ambientLightOn = (0,runtime_core_esm_bundler/* computed */.EW)(() => store.roomStatus.light.is_on);
    if (store.isBackendAvailable) {
      store.updateStore();
    }
    return {
      selectedPresetCollectionName,
      roomDoorOpen,
      ambientLightOn,
      isBackendAvailable
    };
  },
  data() {
    return {
      performDoorAction: false
    };
  },
  computed: {},
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
 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__(7716);
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
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js + 3 modules
var QToggle = __webpack_require__(5087);
// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinner.js + 1 modules
var QSpinner = __webpack_require__(564);
;// CONCATENATED MODULE: ./src/pages/RoomPage.vue




;
const RoomPage_exports_ = /*#__PURE__*/(0,exportHelper/* default */.A)(RoomPagevue_type_script_lang_js, [['render',render]])

/* harmony default export */ const RoomPage = (RoomPage_exports_);
;











runtime_auto_import_default()(RoomPagevue_type_script_lang_js, 'components', {QPage: QPage/* default */.A,QCard: QCard/* default */.A,QCardSection: QCardSection/* default */.A,QList: QList/* default */.A,QItem: QItem/* default */.A,QItemSection: QItemSection/* default */.A,QIcon: QIcon/* default */.A,QItemLabel: QItemLabel/* default */.A,QBtn: QBtn/* default */.A,QToggle: QToggle/* default */.A,QSpinner: QSpinner/* default */.A});


/***/ })

}]);
//# sourceMappingURL=695.3c2ec196.js.map