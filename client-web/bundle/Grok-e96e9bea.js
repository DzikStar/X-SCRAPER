(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Grok-e96e9bea"],
    {
        903621: (e) => {
            e.exports = { queryId: "qaIzg304L134B5-NI43j2A", operationName: "UniversalSearchFeedbackMutation", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        349929: (e, n, a) => {
            "use strict";
            a.d(n, { G: () => v });
            var t = a(181674),
                l = a(213980),
                r = a.n(l),
                i = a(202784);
            function s(e, n) {
                var a = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var t = Object.getOwnPropertySymbols(e);
                    n &&
                        (t = t.filter(function (n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable;
                        })),
                        a.push.apply(a, t);
                }
                return a;
            }
            function o(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var a = null != arguments[n] ? arguments[n] : {};
                    n % 2
                        ? s(Object(a), !0).forEach(function (n) {
                              c(e, n, a[n]);
                          })
                        : Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a))
                          : s(Object(a)).forEach(function (n) {
                                Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(a, n));
                            });
                }
                return e;
            }
            function u(e) {
                return (
                    (u =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    u(e)
                );
            }
            function c(e, n, a) {
                return n in e ? Object.defineProperty(e, n, { value: a, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = a), e;
            }
            function d(e, n) {
                if (null == e) return {};
                var a,
                    t,
                    l = (function (e, n) {
                        if (null == e) return {};
                        var a,
                            t,
                            l = {},
                            r = Object.keys(e);
                        for (t = 0; t < r.length; t++) (a = r[t]), n.indexOf(a) >= 0 || (l[a] = e[a]);
                        return l;
                    })(e, n);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < r.length; t++) (a = r[t]), n.indexOf(a) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, a) && (l[a] = e[a]));
                }
                return l;
            }
            function m(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return g(e);
                    })(e) ||
                    (function (e) {
                        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                    })(e) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" == typeof e) return g(e, n);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === a && e.constructor && (a = e.constructor.name);
                        if ("Map" === a || "Set" === a) return Array.from(e);
                        if ("Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)) return g(e, n);
                    })(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function g(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var a = 0, t = new Array(n); a < n; a++) t[a] = e[a];
                return t;
            }
            function p(e) {
                return (
                    (n = e),
                    (n -= 0) == n
                        ? e
                        : (e = e.replace(/[\-_\s]+(.)?/g, function (e, n) {
                              return n ? n.toUpperCase() : "";
                          }))
                              .substr(0, 1)
                              .toLowerCase() + e.substr(1)
                );
                var n;
            }
            var y = ["style"];
            var f = !1;
            try {
                f = !0;
            } catch (e) {}
            function k(e) {
                return e && "object" === u(e) && e.prefix && e.iconName && e.icon ? e : t.Qc.icon ? t.Qc.icon(e) : null === e ? null : e && "object" === u(e) && e.prefix && e.iconName ? e : Array.isArray(e) && 2 === e.length ? { prefix: e[0], iconName: e[1] } : "string" == typeof e ? { prefix: "fas", iconName: e } : void 0;
            }
            function b(e, n) {
                return (Array.isArray(n) && n.length > 0) || (!Array.isArray(n) && n) ? c({}, e, n) : {};
            }
            var h = { border: !1, className: "", mask: null, maskId: null, fixedWidth: !1, inverse: !1, flip: !1, icon: null, listItem: !1, pull: null, pulse: !1, rotation: null, size: null, spin: !1, spinPulse: !1, spinReverse: !1, beat: !1, fade: !1, beatFade: !1, bounce: !1, shake: !1, symbol: !1, title: "", titleId: null, transform: null, swapOpacity: !1 },
                v = i.forwardRef(function (e, n) {
                    var a = o(o({}, h), e),
                        l = a.icon,
                        r = a.mask,
                        i = a.symbol,
                        s = a.className,
                        u = a.title,
                        d = a.titleId,
                        g = a.maskId,
                        p = k(l),
                        y = b(
                            "classes",
                            [].concat(
                                m(
                                    (function (e) {
                                        var n,
                                            a = e.beat,
                                            t = e.fade,
                                            l = e.beatFade,
                                            r = e.bounce,
                                            i = e.shake,
                                            s = e.flash,
                                            o = e.spin,
                                            u = e.spinPulse,
                                            d = e.spinReverse,
                                            m = e.pulse,
                                            g = e.fixedWidth,
                                            p = e.inverse,
                                            y = e.border,
                                            f = e.listItem,
                                            k = e.flip,
                                            b = e.size,
                                            h = e.rotation,
                                            v = e.pull,
                                            F = (c((n = { "fa-beat": a, "fa-fade": t, "fa-beat-fade": l, "fa-bounce": r, "fa-shake": i, "fa-flash": s, "fa-spin": o, "fa-spin-reverse": d, "fa-spin-pulse": u, "fa-pulse": m, "fa-fw": g, "fa-inverse": p, "fa-border": y, "fa-li": f, "fa-flip": !0 === k, "fa-flip-horizontal": "horizontal" === k || "both" === k, "fa-flip-vertical": "vertical" === k || "both" === k }), "fa-".concat(b), null != b), c(n, "fa-rotate-".concat(h), null != h && 0 !== h), c(n, "fa-pull-".concat(v), null != v), c(n, "fa-swap-opacity", e.swapOpacity), n);
                                        return Object.keys(F)
                                            .map(function (e) {
                                                return F[e] ? e : null;
                                            })
                                            .filter(function (e) {
                                                return e;
                                            });
                                    })(a),
                                ),
                                m((s || "").split(" ")),
                            ),
                        ),
                        v = b("transform", "string" == typeof a.transform ? t.Qc.transform(a.transform) : a.transform),
                        _ = b("mask", k(r)),
                        K = (0, t.qv)(p, o(o(o(o({}, y), v), _), {}, { symbol: i, title: u, titleId: d, maskId: g }));
                    if (!K)
                        return (
                            (function () {
                                var e;
                                !f && console && "function" == typeof console.error && (e = console).error.apply(e, arguments);
                            })("Could not find icon", p),
                            null
                        );
                    var S = K.abstract,
                        L = { ref: n };
                    return (
                        Object.keys(a).forEach(function (e) {
                            h.hasOwnProperty(e) || (L[e] = a[e]);
                        }),
                        F(S[0], L)
                    );
                });
            (v.displayName = "FontAwesomeIcon"), (v.propTypes = { beat: r().bool, border: r().bool, beatFade: r().bool, bounce: r().bool, className: r().string, fade: r().bool, flash: r().bool, mask: r().oneOfType([r().object, r().array, r().string]), maskId: r().string, fixedWidth: r().bool, inverse: r().bool, flip: r().oneOf([!0, !1, "horizontal", "vertical", "both"]), icon: r().oneOfType([r().object, r().array, r().string]), listItem: r().bool, pull: r().oneOf(["right", "left"]), pulse: r().bool, rotation: r().oneOf([0, 90, 180, 270]), shake: r().bool, size: r().oneOf(["2xs", "xs", "sm", "lg", "xl", "2xl", "1x", "2x", "3x", "4x", "5x", "6x", "7x", "8x", "9x", "10x"]), spin: r().bool, spinPulse: r().bool, spinReverse: r().bool, symbol: r().oneOfType([r().bool, r().string]), title: r().string, titleId: r().string, transform: r().oneOfType([r().string, r().object]), swapOpacity: r().bool });
            var F = function e(n, a) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                if ("string" == typeof a) return a;
                var l = (a.children || []).map(function (a) {
                        return e(n, a);
                    }),
                    r = Object.keys(a.attributes || {}).reduce(
                        function (e, n) {
                            var t = a.attributes[n];
                            switch (n) {
                                case "class":
                                    (e.attrs.className = t), delete a.attributes.class;
                                    break;
                                case "style":
                                    e.attrs.style = t
                                        .split(";")
                                        .map(function (e) {
                                            return e.trim();
                                        })
                                        .filter(function (e) {
                                            return e;
                                        })
                                        .reduce(function (e, n) {
                                            var a,
                                                t = n.indexOf(":"),
                                                l = p(n.slice(0, t)),
                                                r = n.slice(t + 1).trim();
                                            return l.startsWith("webkit") ? (e[((a = l), a.charAt(0).toUpperCase() + a.slice(1))] = r) : (e[l] = r), e;
                                        }, {});
                                    break;
                                default:
                                    0 === n.indexOf("aria-") || 0 === n.indexOf("data-") ? (e.attrs[n.toLowerCase()] = t) : (e.attrs[p(n)] = t);
                            }
                            return e;
                        },
                        { attrs: {} },
                    ),
                    i = t.style,
                    s = void 0 === i ? {} : i,
                    u = d(t, y);
                return (r.attrs.style = o(o({}, r.attrs.style), s)), n.apply(void 0, [a.tag, o(o({}, r.attrs), u)].concat(m(l)));
            }.bind(null, i.createElement);
        },
        693599: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => i });
            var t,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "conversationId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ConversationItem_DeleteConversationMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokDeletionResponse",
                                kind: "LinkedField",
                                name: "delete_grok_conversation",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "GrokDeletionError", kind: "LinkedField", name: "grok_deletion_error", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "ConversationItem_DeleteConversationMutation", selections: l },
                    params: { id: "TlKHSWVMVeaa-i7dqQqFQA", metadata: {}, name: "ConversationItem_DeleteConversationMutation", operationKind: "mutation", text: null },
                };
            r.hash = "6aa0a6abc91d6a64847a13c0f4b338ae";
            const i = r;
        },
        85148: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => i });
            var t,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [
                            { defaultValue: null, kind: "LocalArgument", name: "conversationId" },
                            { defaultValue: null, kind: "LocalArgument", name: "title" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ConversationItem_RenameConversationMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Variable", name: "new_title", variableName: "title" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokConversationEditResponse",
                                kind: "LinkedField",
                                name: "grokconversation_edit",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "GrokConversationEditError", kind: "LinkedField", name: "edit_error", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "ConversationItem_RenameConversationMutation", selections: l },
                    params: { id: "bGjN_WgGMm3ugR5LI9MyAA", metadata: {}, name: "ConversationItem_RenameConversationMutation", operationKind: "mutation", text: null },
                };
            r.hash = "6cd9dd0fa4500f77177e5a9677719bfe";
            const i = r;
        },
        794197: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => i });
            var t,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "view" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "DebugDrawerConversationIdQuery",
                        selections: (l = [
                            {
                                alias: "result",
                                args: [
                                    { kind: "Literal", name: "s", value: "84b0" },
                                    { kind: "Variable", name: "view", variableName: "view" },
                                ],
                                kind: "ScalarField",
                                name: "grok_internal_shared_conversation",
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "DebugDrawerConversationIdQuery", selections: l },
                    params: { id: "p1BzDIePWwkumE2_qYB98w", metadata: {}, name: "DebugDrawerConversationIdQuery", operationKind: "query", text: null },
                };
            r.hash = "c1b4506ef1fe6cd782adce780ddd9db6";
            const i = r;
        },
        184711: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => o });
            var t,
                l,
                r,
                i,
                s = {
                    fragment: {
                        argumentDefinitions: [(t = { defaultValue: null, kind: "LocalArgument", name: "custom_instruction" }), (l = { defaultValue: null, kind: "LocalArgument", name: "enabled" }), (r = { defaultValue: null, kind: "LocalArgument", name: "personality" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "GetGrokCustomizationSettingMutation",
                        selections: (i = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "custom_instruction", variableName: "custom_instruction" },
                                    { kind: "Variable", name: "enabled", variableName: "enabled" },
                                    { kind: "Variable", name: "personality", variableName: "personality" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "SetGrokCustomizationSettingResponse",
                                kind: "LinkedField",
                                name: "set_grok_customization_setting",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "SetGrokCustomizationSettingError", kind: "LinkedField", name: "customization_setting_update_error", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [l, t, r], kind: "Operation", name: "GetGrokCustomizationSettingMutation", selections: i },
                    params: { id: "G9u4mrv5jrU5UvFexfnEhw", metadata: {}, name: "GetGrokCustomizationSettingMutation", operationKind: "mutation", text: null },
                };
            s.hash = "ab8855d74a542ae7a2058136d2b84573";
            const o = s;
        },
        358687: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => r });
            var t,
                l = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "GetGrokCustomizationSettingQuery",
                        selections: (t = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "fd90" }],
                                concreteType: "GrokCustomizationSetting",
                                kind: "LinkedField",
                                name: "get_grok_customization_setting",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "enabled", storageKey: null },
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokPersonality",
                                        kind: "LinkedField",
                                        name: "personality",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "personality", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                    { alias: null, args: null, concreteType: "GrokCustomInstruction", kind: "LinkedField", name: "custom_instruction", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "instruction", storageKey: null }], storageKey: null },
                                ],
                                storageKey: 'get_grok_customization_setting(s:"fd90")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "GetGrokCustomizationSettingQuery", selections: t },
                    params: { id: "luwvdzCT7dsLdRRfOCsz6Q", metadata: {}, name: "GetGrokCustomizationSettingQuery", operationKind: "query", text: null },
                };
            l.hash = "5047e706a450a40281c0bc138d0850bb";
            const r = l;
        },
        207274: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => i });
            var t,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "conversation_ids" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "MemoryDrawerForgetGrokMemoryRelatedConversationsQuery",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_ids", variableName: "conversation_ids" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                kind: "ScalarField",
                                name: "forget_grok_memory_related_conversations",
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "MemoryDrawerForgetGrokMemoryRelatedConversationsQuery", selections: l },
                    params: { id: "OMSyrw3LRaTeQttlpXWxPQ", metadata: {}, name: "MemoryDrawerForgetGrokMemoryRelatedConversationsQuery", operationKind: "query", text: null },
                };
            r.hash = "809d2fa3ac80236cf3f3c3af7809eb22";
            const i = r;
        },
        822343: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => i });
            var t,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "conversation_ids" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "MemoryDrawerGetGrokMemoryRelatedConversationsQuery",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_ids", variableName: "conversation_ids" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GetMemoryRelatedConversationResponse",
                                kind: "LinkedField",
                                name: "get_grok_memory_related_conversations",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "MemoryRelatedConversation",
                                        kind: "LinkedField",
                                        name: "related_conversations",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "conversation_id", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "conversation_title", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "conversation_summary", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "updated_at_sec", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "MemoryDrawerGetGrokMemoryRelatedConversationsQuery", selections: l },
                    params: { id: "blP2X7XRazL-cjKxiBUITw", metadata: {}, name: "MemoryDrawerGetGrokMemoryRelatedConversationsQuery", operationKind: "query", text: null },
                };
            r.hash = "3d453e9a15d101fe19501f80abde2411";
            const i = r;
        },
        550523: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => i });
            var t,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [
                            { defaultValue: null, kind: "LocalArgument", name: "basicFeedback" },
                            { defaultValue: null, kind: "LocalArgument", name: "contextualFeedback" },
                            { defaultValue: null, kind: "LocalArgument", name: "conversationId" },
                            { defaultValue: null, kind: "LocalArgument", name: "conversationItemId" },
                            { defaultValue: null, kind: "LocalArgument", name: "modelVersion" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "feedbackMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "basic_feedback", variableName: "basicFeedback" },
                                    { kind: "Variable", name: "contextual_feedback", variableName: "contextualFeedback" },
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Variable", name: "conversation_item_id", variableName: "conversationItemId" },
                                    { kind: "Variable", name: "model_version", variableName: "modelVersion" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokConversationFeedbackResponse",
                                kind: "LinkedField",
                                name: "create_grok_conversation_feedback",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "GrokConversationFeedbackError", kind: "LinkedField", name: "grok_feedback_error", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "feedbackMutation", selections: l },
                    params: { id: "zv33bjbLTa35aipqMBnLgw", metadata: {}, name: "feedbackMutation", operationKind: "mutation", text: null },
                };
            r.hash = "12afbaf03bc93234ee883b8a950c0b04";
            const i = r;
        },
        738310: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => S });
            var t,
                l,
                r,
                i,
                s,
                o,
                u,
                c,
                d,
                m,
                g,
                p,
                y,
                f,
                k,
                b,
                h,
                v,
                F,
                _,
                K = {
                    fragment: {
                        argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "grokTokFeedQuery",
                        selections: [
                            {
                                alias: null,
                                args: (l = [
                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                    { kind: "Literal", name: "feed_types", value: "Image" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ]),
                                concreteType: "GrokFeed",
                                kind: "LinkedField",
                                name: "grok_feed",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokFeedItemWithPrompt",
                                        kind: "LinkedField",
                                        name: "items",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "item",
                                                plural: !1,
                                                selections: [
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (i = { alias: null, args: null, kind: "ScalarField", name: "image_id", storageKey: null }),
                                                            (s = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }),
                                                            (o = { alias: null, args: null, kind: "ScalarField", name: "original_share_id", storageKey: null }),
                                                            { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "original_post_id_results", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "LegacyTweet", kind: "LinkedField", name: "legacy", plural: !1, selections: [(c = { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null }), { kind: "RequiredField", field: (d = { alias: null, args: null, kind: "ScalarField", name: "favorited", storageKey: null }), action: "THROW" }], storageKey: null }], type: "Tweet", abstractKey: null }], storageKey: null }], storageKey: null },
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserResults",
                                                                kind: "LinkedField",
                                                                name: "user_id_results",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "result",
                                                                        plural: !1,
                                                                        selections: [
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    (m = { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [s], storageKey: null }),
                                                                                    (g = {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserCore",
                                                                                        kind: "LinkedField",
                                                                                        name: "core",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    }),
                                                                                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (p = { alias: null, args: null, kind: "ScalarField", name: "followers_count", storageKey: null }), action: "THROW" }, (y = { alias: null, args: null, kind: "ScalarField", name: "default_profile_image", storageKey: null })], storageKey: null },
                                                                                    (f = {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserRelationshipPerspectives",
                                                                                        kind: "LinkedField",
                                                                                        name: "relationship_perspectives",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    }),
                                                                                    (k = {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserVerification",
                                                                                        kind: "LinkedField",
                                                                                        name: "verification",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    }),
                                                                                ],
                                                                                type: "User",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        type: "GrokFeedImageItem",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            (b = { alias: null, args: null, concreteType: "GrokFeedItemPrompt", kind: "LinkedField", name: "prompt", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "prompt", storageKey: null }], storageKey: null }),
                                            (h = { alias: null, args: null, concreteType: "GrokFeedItemStats", kind: "LinkedField", name: "stats", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "likes", storageKey: null }], storageKey: null }),
                                        ],
                                        storageKey: null,
                                    },
                                    (v = { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null }),
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "grokTokFeedQuery", selections: [{ alias: null, args: l, concreteType: "GrokFeed", kind: "LinkedField", name: "grok_feed", plural: !1, selections: [{ alias: null, args: null, concreteType: "GrokFeedItemWithPrompt", kind: "LinkedField", name: "items", plural: !0, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "item", plural: !1, selections: [r, { kind: "InlineFragment", selections: [i, s, o, { alias: null, args: null, concreteType: "TweetResults", kind: "LinkedField", name: "original_post_id_results", plural: !1, selections: [u, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "LegacyTweet", kind: "LinkedField", name: "legacy", plural: !1, selections: [c, d], storageKey: null }, (F = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }), (_ = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "Tweet", abstractKey: null }], storageKey: null }, _], storageKey: null }, { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_id_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [m, g, { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [p, y], storageKey: null }, F, f, k, _], type: "User", abstractKey: null }], storageKey: null }, _], storageKey: null }], type: "GrokFeedImageItem", abstractKey: null }], storageKey: null }, b, h], storageKey: null }, v], storageKey: null }] },
                    params: { id: "j2kbQjoIwOzI1leopt1p7g", metadata: {}, name: "grokTokFeedQuery", operationKind: "query", text: null },
                };
            K.hash = "bde1e6d4c09f229863167dc092c9ef4a";
            const S = K;
        },
        927974: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => i });
            var t,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "cursor" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "personalityHooksAllPersonalitiesQuery",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokUserPersonalitiesResponse",
                                kind: "LinkedField",
                                name: "grok_user_personalities",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "GrokPersonalityWithId",
                                        kind: "LinkedField",
                                        name: "personalities",
                                        plural: !0,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "GrokPersonality",
                                                kind: "LinkedField",
                                                name: "personality",
                                                plural: !1,
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "personality", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                    { alias: null, args: null, kind: "ScalarField", name: "initial_user_prompt", storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "personality_id", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "personalityHooksAllPersonalitiesQuery", selections: l },
                    params: { id: "a5moJWybwfm8-u5Tx05vIw", metadata: {}, name: "personalityHooksAllPersonalitiesQuery", operationKind: "query", text: null },
                };
            r.hash = "e71ee736ad72fd1f1dcd522244f21f22";
            const i = r;
        },
        764877: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => u });
            var t,
                l,
                r,
                i,
                s,
                o = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "textPromptsQuery",
                        selections: (s = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "fd90" }],
                                concreteType: "GrokConfig",
                                kind: "LinkedField",
                                name: "grok_config",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiGrokPromptRevision",
                                        kind: "LinkedField",
                                        name: "prompt_revisions",
                                        plural: !0,
                                        selections: [
                                            (t = { alias: null, args: null, kind: "ScalarField", name: "icon_name", storageKey: null }),
                                            (l = { alias: null, args: null, kind: "ScalarField", name: "prompt", storageKey: null }),
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "ApiGrokPromptRevisionChild",
                                                kind: "LinkedField",
                                                name: "children",
                                                plural: !0,
                                                selections: [
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "display_label", storageKey: null }),
                                                    t,
                                                    l,
                                                    (i = {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "ApiToolOverrides",
                                                        kind: "LinkedField",
                                                        name: "tool_overrides",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "image_gen", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "trends_search", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "web_search", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "x_media_search", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "x_post_analyze", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "x_search", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    }),
                                                ],
                                                storageKey: null,
                                            },
                                            r,
                                            i,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'grok_config(s:"fd90")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "textPromptsQuery", selections: s },
                    params: { id: "XYzED3n5LtrNZJA9XsmzrA", metadata: {}, name: "textPromptsQuery", operationKind: "query", text: null },
                };
            o.hash = "40a6c4ac1d9ef945b1d328cdc16513e4";
            const u = o;
        },
        781472: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => i });
            var t,
                l,
                r = {
                    fragment: {
                        argumentDefinitions: (t = [
                            { defaultValue: null, kind: "LocalArgument", name: "conversationId" },
                            { defaultValue: null, kind: "LocalArgument", name: "isConversationShare" },
                            { defaultValue: null, kind: "LocalArgument", name: "rangeEnd" },
                            { defaultValue: null, kind: "LocalArgument", name: "rangeStart" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useShareGrokConversationMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Variable", name: "is_conversation_share", variableName: "isConversationShare" },
                                    { kind: "Variable", name: "range_end", variableName: "rangeEnd" },
                                    { kind: "Variable", name: "range_start", variableName: "rangeStart" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: null,
                                kind: "LinkedField",
                                name: "create_grok_share",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "share_id", storageKey: null }], type: "GrokShareId", abstractKey: null },
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], type: "GrokError", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: t, kind: "Operation", name: "useShareGrokConversationMutation", selections: l },
                    params: { id: "VjcMAfH8MXzaWoNmAsUidw", metadata: {}, name: "useShareGrokConversationMutation", operationKind: "mutation", text: null },
                };
            r.hash = "71469fd753713a81ef72304dc4531b74";
            const i = r;
        },
        548102: (e) => {
            "use strict";
            var n = /[|\\{}()[\]^$+*?.]/g;
            e.exports = function (e) {
                if ("string" != typeof e) throw new TypeError("Expected a string");
                return e.replace(n, "\\$&");
            };
        },
        739711: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => D });
            var t = a(807896),
                l = a(231461),
                r = a(202784),
                i = a(928316),
                s = a(19017);
            const o = function (e) {
                var n = e.children,
                    a = r.useRef(null);
                if (s.Z && !a.current) {
                    var t = document.createElement("div");
                    t && document.body && (document.body.appendChild(t), (a.current = t));
                }
                return (
                    r.useEffect(() => {
                        if (s.Z)
                            return () => {
                                document.body && a.current && (document.body.removeChild(a.current), (a.current = null));
                            };
                    }, []),
                    a.current && s.Z ? i.createPortal(n, a.current) : null
                );
            };
            var u = a(297689),
                c = a(890601);
            function d(e, n) {
                return "slide" === e ? (n ? g : p) : "fade" === e ? (n ? y : f) : n ? m.container : m.hidden;
            }
            var m = u.Z.create({ container: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0, zIndex: 9999 }, animatedIn: { animationDuration: "300ms", animationTimingFunction: "ease-in" }, animatedOut: { pointerEvents: "none", animationDuration: "300ms", animationTimingFunction: "ease-out" }, fadeIn: { opacity: 1, animationKeyframes: { "0%": { opacity: 0 }, "100%": { opacity: 1 } } }, fadeOut: { opacity: 0, animationKeyframes: { "0%": { opacity: 1 }, "100%": { opacity: 0 } } }, slideIn: { transform: "translateY(0%)", animationKeyframes: { "0%": { transform: "translateY(100%)" }, "100%": { transform: "translateY(0%)" } } }, slideOut: { transform: "translateY(100%)", animationKeyframes: { "0%": { transform: "translateY(0%)" }, "100%": { transform: "translateY(100%)" } } }, hidden: { opacity: 0 } }),
                g = [m.container, m.animatedIn, m.slideIn],
                p = [m.container, m.animatedOut, m.slideOut],
                y = [m.container, m.animatedIn, m.fadeIn],
                f = [m.container, m.animatedOut, m.fadeOut];
            const k = function (e) {
                var n = e.animationType,
                    a = e.children,
                    t = e.onDismiss,
                    l = e.onShow,
                    i = e.visible,
                    s = r.useState(!1),
                    o = s[0],
                    u = s[1],
                    g = r.useRef(!1),
                    p = r.useRef(!1),
                    y = n && "none" !== n,
                    f = r.useCallback(
                        (e) => {
                            (e && e.currentTarget !== e.target) || (i ? l && l() : u(!1));
                        },
                        [l, i],
                    );
                return (
                    r.useEffect(() => {
                        p.current && !o && t && t(), (p.current = o);
                    }, [o, t]),
                    r.useEffect(() => {
                        i && u(!0), i === g.current || y || f(), (g.current = i);
                    }, [y, i, f]),
                    o || i ? (0, c.Z)("div", { style: o ? d(n, i) : m.hidden, onAnimationEnd: f, children: a }) : null
                );
            };
            var b = a(325686),
                h = ["active", "children", "onRequestClose", "transparent"],
                v = r.forwardRef((e, n) => {
                    var a = e.active,
                        i = e.children,
                        o = e.onRequestClose,
                        u = e.transparent,
                        c = (0, l.Z)(e, h);
                    r.useEffect(() => {
                        if (s.Z) {
                            var e = (e) => {
                                a && "Escape" === e.key && (e.stopPropagation(), o && o());
                            };
                            return document.addEventListener("keyup", e, !1), () => document.removeEventListener("keyup", e, !1);
                        }
                    }, [a, o]);
                    var d = r.useMemo(() => [F.modal, u ? F.modalTransparent : F.modalOpaque], [u]);
                    return r.createElement(b.Z, (0, t.Z)({}, c, { "aria-modal": !0, ref: n, role: a ? "dialog" : null, style: d }), r.createElement(b.Z, { style: F.container }, i));
                }),
                F = u.Z.create({ modal: { position: "fixed", top: 0, right: 0, bottom: 0, left: 0 }, modalTransparent: { backgroundColor: "transparent" }, modalOpaque: { backgroundColor: "white" }, container: { top: 0, flex: 1 } });
            const _ = v;
            var K = a(386308),
                S = () => (0, c.Z)("div", { role: "none", tabIndex: 0, style: T.focusBracket });
            function L(e) {
                if (!s.Z) return !1;
                try {
                    e.focus();
                } catch (e) {}
                return document.activeElement === e;
            }
            function I(e) {
                for (var n = 0; n < e.childNodes.length; n++) {
                    var a = e.childNodes[n];
                    if (L(a) || I(a)) return !0;
                }
                return !1;
            }
            function w(e) {
                for (var n = e.childNodes.length - 1; n >= 0; n--) {
                    var a = e.childNodes[n];
                    if (L(a) || w(a)) return !0;
                }
                return !1;
            }
            const O = (e) => {
                var n = e.active,
                    a = e.children,
                    t = r.useRef(),
                    l = r.useRef({ trapFocusInProgress: !1, lastFocusedElement: null });
                return (
                    r.useEffect(() => {
                        if (s.Z) {
                            var e = () => {
                                if (null != t.current && !l.current.trapFocusInProgress && n) {
                                    try {
                                        if (((l.current.trapFocusInProgress = !0), document.activeElement instanceof Node && !t.current.contains(document.activeElement))) {
                                            var e = I(t.current);
                                            l.current.lastFocusedElement === document.activeElement && (e = w(t.current)), !e && null != t.current && document.activeElement && K.Z.focus(t.current);
                                        }
                                    } finally {
                                        l.current.trapFocusInProgress = !1;
                                    }
                                    l.current.lastFocusedElement = document.activeElement;
                                }
                            };
                            return e(), document.addEventListener("focus", e, !0), () => document.removeEventListener("focus", e, !0);
                        }
                    }, [n]),
                    r.useEffect(function () {
                        if (s.Z) {
                            var e = document.activeElement;
                            return function () {
                                e && document.contains(e) && K.Z.focus(e);
                            };
                        }
                    }, []),
                    r.createElement(r.Fragment, null, r.createElement(S, null), r.createElement(b.Z, { ref: t }, a), r.createElement(S, null))
                );
            };
            var T = u.Z.create({ focusBracket: { outlineStyle: "none" } }),
                E = ["animationType", "children", "onDismiss", "onRequestClose", "onShow", "transparent", "visible"],
                C = 0,
                P = [],
                R = {};
            function x() {
                if (0 !== P.length) {
                    var e = P[P.length - 1];
                    P.forEach((n) => {
                        n in R && R[n](n === e);
                    });
                }
            }
            function A(e) {
                e in R && (R[e](!1), delete R[e]);
                var n = P.indexOf(e);
                -1 !== n && (P.splice(n, 1), x());
            }
            const D = r.forwardRef((e, n) => {
                var a = e.animationType,
                    i = e.children,
                    s = e.onDismiss,
                    u = e.onRequestClose,
                    c = e.onShow,
                    d = e.transparent,
                    m = e.visible,
                    g = void 0 === m || m,
                    p = (0, l.Z)(e, E),
                    y = r.useMemo(() => C++, []),
                    f = r.useState(!1),
                    b = f[0],
                    h = f[1],
                    v = r.useCallback(() => {
                        A(y), s && s();
                    }, [y, s]),
                    F = r.useCallback(() => {
                        !(function (e, n) {
                            A(e), P.push(e), (R[e] = n), x();
                        })(y, h),
                            c && c();
                    }, [y, c]);
                return r.useEffect(() => () => A(y), [y]), r.createElement(o, null, r.createElement(k, { animationType: a, onDismiss: v, onShow: F, visible: g }, r.createElement(O, { active: b }, r.createElement(_, (0, t.Z)({}, p, { active: b, onRequestClose: u, ref: n, transparent: d }), i))));
            });
        },
        706307: (e, n, a) => {
            "use strict";
            a.d(n, { Z: () => y });
            var t = a(807896),
                l = a(231461),
                r = a(202784),
                i = a(752778),
                s = a(748803),
                o = a(297689),
                u = a(325686),
                c = a(180612),
                d = ["activeOpacity", "delayPressIn", "delayPressOut", "delayLongPress", "disabled", "focusable", "onLongPress", "onPress", "onPressIn", "onPressOut", "rejectResponderTermination", "style"];
            function m(e, n) {
                (0, c.O)("TouchableOpacity", "TouchableOpacity is deprecated. Please use Pressable.");
                var a = e.activeOpacity,
                    o = e.delayPressIn,
                    m = e.delayPressOut,
                    p = e.delayLongPress,
                    y = e.disabled,
                    f = e.focusable,
                    k = e.onLongPress,
                    b = e.onPress,
                    h = e.onPressIn,
                    v = e.onPressOut,
                    F = e.rejectResponderTermination,
                    _ = e.style,
                    K = (0, l.Z)(e, d),
                    S = (0, r.useRef)(null),
                    L = (0, i.Z)(n, S),
                    I = (0, r.useState)("0s"),
                    w = I[0],
                    O = I[1],
                    T = (0, r.useState)(null),
                    E = T[0],
                    C = T[1],
                    P = (0, r.useCallback)(
                        (e, n) => {
                            C(e), O(n ? n / 1e3 + "s" : "0s");
                        },
                        [C, O],
                    ),
                    R = (0, r.useCallback)(
                        (e) => {
                            P(null != a ? a : 0.2, e);
                        },
                        [a, P],
                    ),
                    x = (0, r.useCallback)(
                        (e) => {
                            P(null, e);
                        },
                        [P],
                    ),
                    A = (0, r.useMemo)(
                        () => ({
                            cancelable: !F,
                            disabled: y,
                            delayLongPress: p,
                            delayPressStart: o,
                            delayPressEnd: m,
                            onLongPress: k,
                            onPress: b,
                            onPressStart(e) {
                                var n = null != e.dispatchConfig ? "onResponderGrant" === e.dispatchConfig.registrationName : "keydown" === e.type;
                                R(n ? 0 : 150), null != h && h(e);
                            },
                            onPressEnd(e) {
                                x(250), null != v && v(e);
                            },
                        }),
                        [p, o, m, y, k, b, h, v, F, R, x],
                    ),
                    D = (0, s.Z)(S, A);
                return r.createElement(u.Z, (0, t.Z)({}, K, D, { accessibilityDisabled: y, focusable: !y && !1 !== f, pointerEvents: y ? "box-none" : void 0, ref: L, style: [g.root, !y && g.actionable, _, null != E && { opacity: E }, { transitionDuration: w }] }));
            }
            var g = o.Z.create({ root: { transitionProperty: "opacity", transitionDuration: "0.15s", userSelect: "none" }, actionable: { cursor: "pointer", touchAction: "manipulation" } }),
                p = r.memo(r.forwardRef(m));
            p.displayName = "TouchableOpacity";
            const y = p;
        },
        616531: (e, n, a) => {
            "use strict";
            function t(e, n, a, t) {
                return new (a || (a = Promise))(function (l, r) {
                    function i(e) {
                        try {
                            o(t.next(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function s(e) {
                        try {
                            o(t.throw(e));
                        } catch (e) {
                            r(e);
                        }
                    }
                    function o(e) {
                        var n;
                        e.done
                            ? l(e.value)
                            : ((n = e.value),
                              n instanceof a
                                  ? n
                                  : new a(function (e) {
                                        e(n);
                                    })).then(i, s);
                    }
                    o((t = t.apply(e, n || [])).next());
                });
            }
            function l(e) {
                return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
            }
            a.d(n, { aN: () => o }), "function" == typeof SuppressedError && SuppressedError;
            var r = l(function e(n, a) {
                if (n === a) return !0;
                if (n && a && "object" == typeof n && "object" == typeof a) {
                    if (n.constructor !== a.constructor) return !1;
                    var t, l, r;
                    if (Array.isArray(n)) {
                        if ((t = n.length) != a.length) return !1;
                        for (l = t; 0 != l--; ) if (!e(n[l], a[l])) return !1;
                        return !0;
                    }
                    if (n.constructor === RegExp) return n.source === a.source && n.flags === a.flags;
                    if (n.valueOf !== Object.prototype.valueOf) return n.valueOf() === a.valueOf();
                    if (n.toString !== Object.prototype.toString) return n.toString() === a.toString();
                    if ((t = (r = Object.keys(n)).length) !== Object.keys(a).length) return !1;
                    for (l = t; 0 != l--; ) if (!Object.prototype.hasOwnProperty.call(a, r[l])) return !1;
                    for (l = t; 0 != l--; ) {
                        var i = r[l];
                        if (!e(n[i], a[i])) return !1;
                    }
                    return !0;
                }
                return n != n && a != a;
            });
            const i = "__googleMapsScriptId";
            var s;
            !(function (e) {
                (e[(e.INITIALIZED = 0)] = "INITIALIZED"), (e[(e.LOADING = 1)] = "LOADING"), (e[(e.SUCCESS = 2)] = "SUCCESS"), (e[(e.FAILURE = 3)] = "FAILURE");
            })(s || (s = {}));
            class o {
                constructor({ apiKey: e, authReferrerPolicy: n, channel: a, client: t, id: l = i, language: s, libraries: u = [], mapIds: c, nonce: d, region: m, retries: g = 3, url: p = "https://maps.googleapis.com/maps/api/js", version: y }) {
                    if (((this.callbacks = []), (this.done = !1), (this.loading = !1), (this.errors = []), (this.apiKey = e), (this.authReferrerPolicy = n), (this.channel = a), (this.client = t), (this.id = l || i), (this.language = s), (this.libraries = u), (this.mapIds = c), (this.nonce = d), (this.region = m), (this.retries = g), (this.url = p), (this.version = y), o.instance)) {
                        if (!r(this.options, o.instance.options)) throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(o.instance.options)}`);
                        return o.instance;
                    }
                    o.instance = this;
                }
                get options() {
                    return { version: this.version, apiKey: this.apiKey, channel: this.channel, client: this.client, id: this.id, libraries: this.libraries, language: this.language, region: this.region, mapIds: this.mapIds, nonce: this.nonce, url: this.url, authReferrerPolicy: this.authReferrerPolicy };
                }
                get status() {
                    return this.errors.length ? s.FAILURE : this.done ? s.SUCCESS : this.loading ? s.LOADING : s.INITIALIZED;
                }
                get failed() {
                    return this.done && !this.loading && this.errors.length >= this.retries + 1;
                }
                createUrl() {
                    let e = this.url;
                    return (e += "?callback=__googleMapsCallback&loading=async"), this.apiKey && (e += `&key=${this.apiKey}`), this.channel && (e += `&channel=${this.channel}`), this.client && (e += `&client=${this.client}`), this.libraries.length > 0 && (e += `&libraries=${this.libraries.join(",")}`), this.language && (e += `&language=${this.language}`), this.region && (e += `&region=${this.region}`), this.version && (e += `&v=${this.version}`), this.mapIds && (e += `&map_ids=${this.mapIds.join(",")}`), this.authReferrerPolicy && (e += `&auth_referrer_policy=${this.authReferrerPolicy}`), e;
                }
                deleteScript() {
                    const e = document.getElementById(this.id);
                    e && e.remove();
                }
                load() {
                    return this.loadPromise();
                }
                loadPromise() {
                    return new Promise((e, n) => {
                        this.loadCallback((a) => {
                            a ? n(a.error) : e(window.google);
                        });
                    });
                }
                importLibrary(e) {
                    return this.execute(), google.maps.importLibrary(e);
                }
                loadCallback(e) {
                    this.callbacks.push(e), this.execute();
                }
                setScript() {
                    var e, n;
                    if (document.getElementById(this.id)) return void this.callback();
                    const a = { key: this.apiKey, channel: this.channel, client: this.client, libraries: this.libraries.length && this.libraries, v: this.version, mapIds: this.mapIds, language: this.language, region: this.region, authReferrerPolicy: this.authReferrerPolicy };
                    Object.keys(a).forEach((e) => !a[e] && delete a[e]),
                        (null === (n = null === (e = null === window || void 0 === window ? void 0 : window.google) || void 0 === e ? void 0 : e.maps) || void 0 === n ? void 0 : n.importLibrary) ||
                            ((e) => {
                                let n,
                                    a,
                                    l,
                                    r = "google",
                                    i = "importLibrary",
                                    s = "__ib__",
                                    o = document,
                                    u = window;
                                u = u[r] || (u[r] = {});
                                const c = u.maps || (u.maps = {}),
                                    d = new Set(),
                                    m = new URLSearchParams(),
                                    g = () =>
                                        n ||
                                        (n = new Promise((i, u) =>
                                            t(this, void 0, void 0, function* () {
                                                var t;
                                                for (l in (yield (a = o.createElement("script")), (a.id = this.id), m.set("libraries", [...d] + ""), e))
                                                    m.set(
                                                        l.replace(/[A-Z]/g, (e) => "_" + e[0].toLowerCase()),
                                                        e[l],
                                                    );
                                                m.set("callback", r + ".maps." + s), (a.src = this.url + "?" + m), (c[s] = i), (a.onerror = () => (n = u(Error("The Google Maps JavaScript API could not load.")))), (a.nonce = this.nonce || (null === (t = o.querySelector("script[nonce]")) || void 0 === t ? void 0 : t.nonce) || ""), o.head.append(a);
                                            }),
                                        ));
                                c[i] || (c[i] = (e, ...n) => d.add(e) && g().then(() => c[i](e, ...n)));
                            })(a);
                    const l = this.libraries.map((e) => this.importLibrary(e));
                    l.length || l.push(this.importLibrary("core")),
                        Promise.all(l).then(
                            () => this.callback(),
                            (e) => {
                                const n = new ErrorEvent("error", { error: e });
                                this.loadErrorCallback(n);
                            },
                        );
                }
                reset() {
                    this.deleteScript(), (this.done = !1), (this.loading = !1), (this.errors = []), (this.onerrorEvent = null);
                }
                resetIfRetryingFailed() {
                    this.failed && this.reset();
                }
                loadErrorCallback(e) {
                    if ((this.errors.push(e), this.errors.length <= this.retries)) {
                        const e = this.errors.length * Math.pow(2, this.errors.length);
                        setTimeout(() => {
                            this.deleteScript(), this.setScript();
                        }, e);
                    } else (this.onerrorEvent = e), this.callback();
                }
                callback() {
                    (this.done = !0),
                        (this.loading = !1),
                        this.callbacks.forEach((e) => {
                            e(this.onerrorEvent);
                        }),
                        (this.callbacks = []);
                }
                execute() {
                    if ((this.resetIfRetryingFailed(), !this.loading))
                        if (this.done) this.callback();
                        else {
                            if (window.google && window.google.maps && window.google.maps.version) return void this.callback();
                            (this.loading = !0), this.setScript();
                        }
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Grok-e96e9bea.1dafc69a.js.map
