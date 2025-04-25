"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Communities~ondemand.SettingsRevamp"],
    {
        947135: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(242454),
                i = n(190286);
            class a extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: a, confirmationSheetHeadline: l, confirmationSheetText: s, label: c } = this.props;
                    return r.createElement(r.Fragment, null, r.createElement(o.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? r.createElement(i.Z, { confirmButtonLabel: n, confirmButtonType: a, headline: l, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: s }) : null);
                }
            }
            a.defaultProps = { color: "red500", align: "center" };
        },
        92235: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                o = n(325686),
                i = n(58881),
                a = n(392237),
                l = n(731708),
                s = n(530525),
                c = n(439592),
                d = n(530732),
                h = n(725516);
            const u = "upsell-card",
                f = (e) => {
                    const { Icon: t, decoration: n, header: f, iconColor: g, imageUrl: m, link: y, onClick: v, primaryText: b, secondaryText: x } = e,
                        w = (0, h.z)(),
                        C = r.useCallback(() => {
                            w.scribeAction("click"), v && v();
                        }, [w, v]),
                        Z = i.Z.generate({ backgroundColor: a.default.theme.colors.transparent, color: a.default.theme.colors.gray300 }),
                        S = () => r.createElement(o.Z, { style: p.header }, t && r.createElement(t, { style: [p.icon, g && { color: a.default.theme.colors[g] }], testID: `${u}-icon` }), r.createElement(l.ZP, { size: "subtext1" }, f)),
                        k = () => r.createElement(r.Fragment, null, r.createElement(l.ZP, { size: "headline2", weight: "bold" }, b), x && r.createElement(l.ZP, { color: "gray700" }, x)),
                        E = () => r.createElement(o.Z, { style: p.decoration, testID: `${u}-decoration` }, n),
                        I = () => !!m && r.createElement(o.Z, { style: p.decoration, testID: `${u}-img` }, r.createElement(s.Z, { "aria-label": "", aspectMode: c.Z.exact(1), image: { url: m, width: 88, height: 88 } }));
                    return r.createElement(d.Z, { interactiveStyles: Z, link: y, onClick: C, style: p.root }, r.createElement(o.Z, { style: p.content }, r.createElement(S, { Icon: t, header: f, iconColor: g }), r.createElement(k, { primaryText: b, secondaryText: x })), n ? r.createElement(E, { decoration: n }) : r.createElement(I, { imageUrl: m }));
                },
                p = a.default.create((e) => ({ root: { borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderWidth: e.borderWidths.medium, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, content: { flexShrink: 1 }, header: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space12 }, icon: { height: e.spaces.space20, width: e.spaces.space20, marginEnd: e.spaces.space8 }, decoration: { width: `calc(${e.spaces.space80} + ${e.spaces.space8})`, marginStart: e.spaces.space16 } })),
                g = r.memo(f);
        },
        253493: (e, t, n) => {
            n.d(t, { Z: () => x });
            var r = n(202784),
                o = n(107267),
                i = n(791632),
                a = n(325686),
                l = n(537392),
                s = n(10656),
                c = n(655352),
                d = n(555079),
                h = n(500002),
                u = n(625661),
                f = n(449067),
                p = n(655543),
                g = n(715601),
                m = n(392237);
            const y = m.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...m.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? r.createElement(a.Z, { style: y.fill }, r.createElement(g.Z, { style: y.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return r.createElement(l.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: o, showSubtitleOnRoot: i, showSubtitleOnWideDetail: a, withBottomBorder: l, withDetailOpen: s, ...d } = this.props;
                    return r.createElement(r.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : r.createElement(f.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return r.createElement(r.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: o, backLocation: i, documentTitle: l, headerless: s, history: c, leftControl: h, middleControl: p, onBackClick: g, rightControl: m, screenType: v, searchBoxOptions: b, secondaryBar: x, showSubtitleOnRoot: w, showSubtitleOnWideDetail: C, subtitle: Z, title: S, titleIconCell: k, titleIconCellSize: E, withDetailOpen: I, withSearchBox: T, withTweetButton: O, withWideContainer: D } = this.props,
                        R = "root" === v,
                        _ = "secondaryRoot" === v,
                        P = "primaryDetail" === v,
                        B = (P && C) || (R && w),
                        L = R || (P && e),
                        N = R ? d.ey : P ? d.vX : void 0,
                        A = r.createElement(a.Z, { style: y.appBarContainer }, r.createElement(u.ZP, { backLocation: i, fixed: !1, hideBackButton: L, history: c, leftControl: h, middleControl: p, onBackClick: g, rightControl: m, secondaryBar: x, style: o, subtitle: B ? Z : void 0, title: S, titleDomId: N, titleIconCell: k, titleIconCellSize: E, withWideContainer: D })),
                        W = R || (_ && I) ? null : r.createElement(f.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: i, documentTitle: l, headerless: s, middleControl: p, onBackClick: g, rightControl: m, searchBoxOptions: b, subtitle: Z, title: S, withSearchBox: T, withTweetButton: O });
                    return r.createElement(r.Fragment, null, W, A);
                }
            }
            (v.contextType = p.Z), (v.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const b = (0, h.ZP)(v),
                x = (e) => {
                    const t = (0, o.useHistory)();
                    return (0, i.HD)(t) ? e.children || null : r.createElement(b, e);
                };
        },
        301410: (e, t, n) => {
            n.d(t, { i: () => p.ZP, z: () => v });
            var r = n(202784),
                o = n(928123),
                i = n.n(o),
                a = n(72845),
                l = n.n(a),
                s = n(57074),
                c = n.n(s),
                d = n(516951),
                h = n(88656),
                u = n(71620),
                f = n(163889),
                p = n(312771);
            const g = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: d.Z });
            class m extends r.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof h.Z)) throw e;
                    this.props.errorHandler(e), (0, f.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const y = ({ query: e, queryRef: t, render: n }) => {
                    const r = i()(e, t);
                    return n({ fetchStatus: p.ZP.LOADED, data: r, error: null, retry: d.Z });
                },
                v = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: o, variables: i }) {
                        const [a, s] = l()(e),
                            d = (0, u.n7)(t.errorConfig.context),
                            h = c()(i),
                            f = r.useCallback(() => {
                                s(h, { fetchPolicy: "network-only" });
                            }, [s, h]);
                        return (
                            r.useLayoutEffect(() => {
                                s(h, { fetchPolicy: n });
                            }, [n, s, h]),
                            a
                                ? r.createElement(
                                      r.Suspense,
                                      { fallback: r.createElement(g, { render: o }) },
                                      r.createElement(m, { errorHandler: d(t.errorConfig.options || {}), key: a.fetchKey, retry: f }, (t, n) => (t ? o({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: n }) : r.createElement(y, { query: e, queryRef: a, render: o }))),
                                  )
                                : null
                        );
                    };
        },
        466441: (e, t, n) => {
            n.r(t), n.d(t, { NotFoundScreen: () => b, default: () => w });
            n(571372);
            var r = n(202784),
                o = n(386802),
                i = n(108362),
                a = n(392237),
                l = n(674132),
                s = n.n(l),
                c = n(187669),
                d = n(449067),
                h = n(38293),
                u = n(231035),
                f = n(652904),
                p = n(952793),
                g = n(163889),
                m = n(725516);
            const y = s().ba929da8,
                v = s().d203e242;
            function b(e) {
                const { splat: t } = e.match.params,
                    { isModal: n } = r.useContext(o.Z),
                    a = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        a && t && (0, g.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    r.createElement(f.Z, null, r.createElement(d.Z.Configure, { backLocation: "/", documentTitle: y, title: v }), r.createElement(i.Z, { style: n && x.modal }, r.createElement(u.Z, null)), r.createElement(h.Z, { title: y, withMeta: !1 }))
                );
            }
            const x = a.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                w = (0, m.Z)(b, { page: "not_found" });
        },
        242454: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(807896),
                o = n(202784),
                i = n(325686),
                a = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                h = ({ align: e = "center", color: t, label: n, ...h }) => {
                    const u = l.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(i.Z, { style: d.container }, o.createElement(s.Z, (0, r.Z)({}, h, { interactiveStyles: u, style: d.root }), o.createElement(a.ZP, { align: e, color: t }, n)));
                };
        },
        449479: (e, t, n) => {
            n.d(t, { Z: () => v });
            var r = n(202784),
                o = n(325686),
                i = n(913973),
                a = n(731708),
                l = n(950822),
                s = n(466792),
                c = n(58881),
                d = n(530732),
                h = n(352924),
                u = n(392237);
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, h.F)()),
                        (this.descriptionId = (0, h.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: n } = this.props;
                            n && !t && n(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: n, disabled: h, helpText: f, label: g, name: m, testID: y } = this.props,
                        v = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        b = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        x = n ? v : b;
                    return r.createElement(s.Z, { disabled: h }, (s) => r.createElement(o.Z, { role: "label", style: [p.root, !h && p.interactive], testID: y }, r.createElement(o.Z, { style: p.topContainer }, r.createElement(a.ZP, { id: this.labelId }, g), r.createElement(o.Z, { style: p.radioContainer }, r.createElement(d.Z, { interactiveStyles: x, interactivityState: s, style: p.radioBackground }, r.createElement(o.Z, { style: [p.circle, n && p.circleActive, h && p.circleDisabled, n && h && p.circleCheckedAndDisabled] }, n ? r.createElement(i.default, { style: p.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: n, disabled: h, name: m, onChange: this._handleChange, ref: this._setRef, style: [p.nativeControl], type: "radio" }))), f ? r.createElement(a.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: p.helpText }, f) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            f.defaultProps = { disabled: !1, checked: !1 };
            const p = u.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = f,
                m = "radioGroup";
            let y = 1;
            class v extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: n } = this.props;
                            n(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (n) => {
                            (this._radioRefs[e] = n), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${y}_LABEL`),
                        (y += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: n, label: i, name: l, options: s, value: c } = this.props;
                    return r.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "radiogroup", style: n && b.disabled, testID: `${m}${l}` },
                        i ? r.createElement(o.Z, { id: this._labelId, role: "label", style: b.header }, r.createElement(a.ZP, { style: b.label, weight: "bold" }, i), t ? r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => r.createElement(g, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: n, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            v.defaultProps = { disabled: !1 };
            const b = u.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        101890: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                o = n(325686),
                i = n(449479),
                a = n(392237);
            const l = (e) => r.createElement(o.Z, { style: s.root }, r.createElement(i.Z, e)),
                s = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
        716042: (e, t, n) => {
            n.d(t, { JN: () => Q, W8: () => ne, JV: () => z });
            var r = n(807896);
            var o = n(759147);
            function i(e, t) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, t) {
                        var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != n) {
                            var r,
                                o,
                                i,
                                a,
                                l = [],
                                s = !0,
                                c = !1;
                            try {
                                if (((i = (n = n.call(e)).next), 0 === t)) {
                                    if (Object(n) !== n) return;
                                    s = !1;
                                } else for (; !(s = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); s = !0);
                            } catch (e) {
                                (c = !0), (o = e);
                            } finally {
                                try {
                                    if (!s && null != n.return && ((a = n.return()), Object(a) !== a)) return;
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return l;
                        }
                    })(e, t) ||
                    (0, o.Z)(e, t) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var a = n(256666);
            function l(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? Object(arguments[t]) : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        r.push.apply(
                            r,
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        ),
                        r.forEach(function (t) {
                            (0, a.Z)(e, t, n[t]);
                        });
                }
                return e;
            }
            var s = n(709249),
                c = n(887371),
                d = n(411987),
                h = n(695058),
                u = n(545754),
                f = n(580753),
                p = n(202784),
                g = n(928316),
                m = n(647677),
                y = n.n(m),
                v = n(238777),
                b = n(213980),
                x = n.n(b),
                w = (function () {
                    function e() {
                        (0, s.Z)(this, e), (0, a.Z)(this, "refs", {});
                    }
                    return (
                        (0, c.Z)(e, [
                            {
                                key: "add",
                                value: function (e, t) {
                                    this.refs[e] || (this.refs[e] = []), this.refs[e].push(t);
                                },
                            },
                            {
                                key: "remove",
                                value: function (e, t) {
                                    var n = this.getIndex(e, t);
                                    -1 !== n && this.refs[e].splice(n, 1);
                                },
                            },
                            {
                                key: "isActive",
                                value: function () {
                                    return this.active;
                                },
                            },
                            {
                                key: "getActive",
                                value: function () {
                                    var e = this;
                                    return this.refs[this.active.collection].find(function (t) {
                                        return t.node.sortableInfo.index == e.active.index;
                                    });
                                },
                            },
                            {
                                key: "getIndex",
                                value: function (e, t) {
                                    return this.refs[e].indexOf(t);
                                },
                            },
                            {
                                key: "getOrderedRefs",
                                value: function () {
                                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.active.collection;
                                    return this.refs[e].sort(C);
                                },
                            },
                        ]),
                        e
                    );
                })();
            function C(e, t) {
                return e.node.sortableInfo.index - t.node.sortableInfo.index;
            }
            function Z(e, t) {
                return Object.keys(e).reduce(function (n, r) {
                    return -1 === t.indexOf(r) && (n[r] = e[r]), n;
                }, {});
            }
            var S = { end: ["touchend", "touchcancel", "mouseup"], move: ["touchmove", "mousemove"], start: ["touchstart", "mousedown"] },
                k = (function () {
                    if ("undefined" == typeof window || "undefined" == typeof document) return "";
                    var e = window.getComputedStyle(document.documentElement, "") || ["-moz-hidden-iframe"],
                        t = (Array.prototype.slice
                            .call(e)
                            .join("")
                            .match(/-(moz|webkit|ms)-/) ||
                            ("" === e.OLink && ["", "o"]))[1];
                    return "ms" === t ? "ms" : t && t.length ? t[0].toUpperCase() + t.substr(1) : "";
                })();
            function E(e, t) {
                Object.keys(t).forEach(function (n) {
                    e.style[n] = t[n];
                });
            }
            function I(e, t) {
                e.style["".concat(k, "Transform")] = null == t ? "" : "translate3d(".concat(t.x, "px,").concat(t.y, "px,0)");
            }
            function T(e, t) {
                e.style["".concat(k, "TransitionDuration")] = null == t ? "" : "".concat(t, "ms");
            }
            function O(e, t) {
                for (; e; ) {
                    if (t(e)) return e;
                    e = e.parentNode;
                }
                return null;
            }
            function D(e, t, n) {
                return Math.max(e, Math.min(n, t));
            }
            function R(e) {
                return "px" === e.substr(-2) ? parseFloat(e) : 0;
            }
            function _(e, t) {
                var n = t.displayName || t.name;
                return n ? "".concat(e, "(").concat(n, ")") : e;
            }
            function P(e, t) {
                var n = e.getBoundingClientRect();
                return { top: n.top + t.top, left: n.left + t.left };
            }
            function B(e) {
                return e.touches && e.touches.length ? { x: e.touches[0].pageX, y: e.touches[0].pageY } : e.changedTouches && e.changedTouches.length ? { x: e.changedTouches[0].pageX, y: e.changedTouches[0].pageY } : { x: e.pageX, y: e.pageY };
            }
            function L(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { left: 0, top: 0 };
                if (e) {
                    var r = { left: n.left + e.offsetLeft, top: n.top + e.offsetTop };
                    return e.parentNode === t ? r : L(e.parentNode, t, r);
                }
            }
            function N(e) {
                var t = e.lockOffset,
                    n = e.width,
                    r = e.height,
                    o = t,
                    i = t,
                    a = "px";
                if ("string" == typeof t) {
                    var l = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(t);
                    y()(null !== l, 'lockOffset value should be a number or a string of a number followed by "px" or "%". Given %s', t), (o = parseFloat(t)), (i = parseFloat(t)), (a = l[1]);
                }
                return y()(isFinite(o) && isFinite(i), "lockOffset value should be a finite. Given %s", t), "%" === a && ((o = (o * n) / 100), (i = (i * r) / 100)), { x: o, y: i };
            }
            function A(e) {
                return e instanceof HTMLElement
                    ? (function (e) {
                          var t = window.getComputedStyle(e),
                              n = /(auto|scroll)/;
                          return ["overflow", "overflowX", "overflowY"].find(function (e) {
                              return n.test(t[e]);
                          });
                      })(e)
                        ? e
                        : A(e.parentNode)
                    : null;
            }
            var W = 27,
                M = 32,
                j = 37,
                H = 38,
                F = 39,
                K = 40,
                G = { Anchor: "A", Button: "BUTTON", Canvas: "CANVAS", Input: "INPUT", Option: "OPTION", Textarea: "TEXTAREA", Select: "SELECT" };
            function z(e) {
                var t,
                    n,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 };
                return (
                    (n = t =
                        (function (t) {
                            function n() {
                                var e, t;
                                (0, s.Z)(this, n);
                                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                                return (t = (0, d.Z)(this, (e = (0, h.Z)(n)).call.apply(e, [this].concat(o)))), (0, a.Z)((0, f.Z)((0, f.Z)(t)), "wrappedInstance", (0, p.createRef)()), t;
                            }
                            return (
                                (0, u.Z)(n, t),
                                (0, c.Z)(n, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            (0, g.findDOMNode)(this).sortableHandle = !0;
                                        },
                                    },
                                    {
                                        key: "getWrappedInstance",
                                        value: function () {
                                            return y()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call"), this.wrappedInstance.current;
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            var t = o.withRef ? this.wrappedInstance : null;
                                            return (0, p.createElement)(e, (0, r.Z)({ ref: t }, this.props));
                                        },
                                    },
                                ]),
                                n
                            );
                        })(p.Component)),
                    (0, a.Z)(t, "displayName", _("sortableHandle", e)),
                    n
                );
            }
            function V(e) {
                return null != e.sortableHandle;
            }
            var U = (function () {
                function e(t, n) {
                    (0, s.Z)(this, e), (this.container = t), (this.onScrollCallback = n);
                }
                return (
                    (0, c.Z)(e, [
                        {
                            key: "clear",
                            value: function () {
                                null != this.interval && (clearInterval(this.interval), (this.interval = null));
                            },
                        },
                        {
                            key: "update",
                            value: function (e) {
                                var t = this,
                                    n = e.translate,
                                    r = e.minTranslate,
                                    o = e.maxTranslate,
                                    i = e.width,
                                    a = e.height,
                                    l = { x: 0, y: 0 },
                                    s = { x: 1, y: 1 },
                                    c = 10,
                                    d = 10,
                                    h = this.container,
                                    u = h.scrollTop,
                                    f = h.scrollLeft,
                                    p = h.scrollHeight,
                                    g = h.scrollWidth,
                                    m = 0 === u,
                                    y = p - u - h.clientHeight == 0,
                                    v = 0 === f,
                                    b = g - f - h.clientWidth == 0;
                                n.y >= o.y - a / 2 && !y ? ((l.y = 1), (s.y = d * Math.abs((o.y - a / 2 - n.y) / a))) : n.x >= o.x - i / 2 && !b ? ((l.x = 1), (s.x = c * Math.abs((o.x - i / 2 - n.x) / i))) : n.y <= r.y + a / 2 && !m ? ((l.y = -1), (s.y = d * Math.abs((n.y - a / 2 - r.y) / a))) : n.x <= r.x + i / 2 && !v && ((l.x = -1), (s.x = c * Math.abs((n.x - i / 2 - r.x) / i))),
                                    this.interval && (this.clear(), (this.isAutoScrolling = !1)),
                                    (0 === l.x && 0 === l.y) ||
                                        (this.interval = setInterval(function () {
                                            t.isAutoScrolling = !0;
                                            var e = { left: s.x * l.x, top: s.y * l.y };
                                            (t.container.scrollTop += e.top), (t.container.scrollLeft += e.left), t.onScrollCallback(e);
                                        }, 5));
                            },
                        },
                    ]),
                    e
                );
            })();
            var X = { axis: x().oneOf(["x", "y", "xy"]), contentWindow: x().any, disableAutoscroll: x().bool, distance: x().number, getContainer: x().func, getHelperDimensions: x().func, helperClass: x().string, helperContainer: x().oneOfType([x().func, "undefined" == typeof HTMLElement ? x().any : x().instanceOf(HTMLElement)]), hideSortableGhost: x().bool, keyboardSortingTransitionDuration: x().number, lockAxis: x().string, lockOffset: x().oneOfType([x().number, x().string, x().arrayOf(x().oneOfType([x().number, x().string]))]), lockToContainerEdges: x().bool, onSortEnd: x().func, onSortMove: x().func, onSortOver: x().func, onSortStart: x().func, pressDelay: x().number, pressThreshold: x().number, keyCodes: x().shape({ lift: x().arrayOf(x().number), drop: x().arrayOf(x().number), cancel: x().arrayOf(x().number), up: x().arrayOf(x().number), down: x().arrayOf(x().number) }), shouldCancelStart: x().func, transitionDuration: x().number, updateBeforeSortStart: x().func, useDragHandle: x().bool, useWindowAsScrollContainer: x().bool },
                $ = { lift: [M], drop: [M], cancel: [W], up: [H, j], down: [K, F] },
                Y = {
                    axis: "y",
                    disableAutoscroll: !1,
                    distance: 0,
                    getHelperDimensions: function (e) {
                        var t = e.node;
                        return { height: t.offsetHeight, width: t.offsetWidth };
                    },
                    hideSortableGhost: !0,
                    lockOffset: "50%",
                    lockToContainerEdges: !1,
                    pressDelay: 0,
                    pressThreshold: 5,
                    keyCodes: $,
                    shouldCancelStart: function (e) {
                        return (
                            -1 !== [G.Input, G.Textarea, G.Select, G.Option, G.Button].indexOf(e.target.tagName) ||
                            !!O(e.target, function (e) {
                                return "true" === e.contentEditable;
                            })
                        );
                    },
                    transitionDuration: 300,
                    useWindowAsScrollContainer: !1,
                },
                q = Object.keys(X);
            var J = (0, p.createContext)({ manager: {} });
            function Q(e) {
                var t,
                    n,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 };
                return (
                    (n = t =
                        (function (t) {
                            function n(e) {
                                var t;
                                (0, s.Z)(this, n),
                                    (t = (0, d.Z)(this, (0, h.Z)(n).call(this, e))),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "state", {}),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleStart", function (e) {
                                        var n = t.props,
                                            r = n.distance,
                                            o = n.shouldCancelStart;
                                        if (2 !== e.button && !o(e)) {
                                            (t.touched = !0), (t.position = B(e));
                                            var i = O(e.target, function (e) {
                                                return null != e.sortableInfo;
                                            });
                                            if (i && i.sortableInfo && t.nodeIsChild(i) && !t.state.sorting) {
                                                var a = t.props.useDragHandle,
                                                    l = i.sortableInfo,
                                                    s = l.index,
                                                    c = l.collection;
                                                if (l.disabled) return;
                                                if (a && !O(e.target, V)) return;
                                                (t.manager.active = { collection: c, index: s }),
                                                    (function (e) {
                                                        return (e.touches && e.touches.length) || (e.changedTouches && e.changedTouches.length);
                                                    })(e) ||
                                                        e.target.tagName !== G.Anchor ||
                                                        e.preventDefault(),
                                                    r ||
                                                        (0 === t.props.pressDelay
                                                            ? t.handlePress(e)
                                                            : (t.pressTimer = setTimeout(function () {
                                                                  return t.handlePress(e);
                                                              }, t.props.pressDelay)));
                                            }
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "nodeIsChild", function (e) {
                                        return e.sortableInfo.manager === t.manager;
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleMove", function (e) {
                                        var n = t.props,
                                            r = n.distance,
                                            o = n.pressThreshold;
                                        if (!t.state.sorting && t.touched && !t._awaitingUpdateBeforeSortStart) {
                                            var i = B(e),
                                                a = { x: t.position.x - i.x, y: t.position.y - i.y },
                                                l = Math.abs(a.x) + Math.abs(a.y);
                                            (t.delta = a), r || (o && !(l >= o)) ? r && l >= r && t.manager.isActive() && t.handlePress(e) : (clearTimeout(t.cancelTimer), (t.cancelTimer = setTimeout(t.cancel, 0)));
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleEnd", function () {
                                        (t.touched = !1), t.cancel();
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "cancel", function () {
                                        var e = t.props.distance;
                                        t.state.sorting || (e || clearTimeout(t.pressTimer), (t.manager.active = null));
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handlePress", function (e) {
                                        try {
                                            var n = t.manager.getActive(),
                                                r = (function () {
                                                    if (n) {
                                                        var r = function () {
                                                                var n,
                                                                    r,
                                                                    o,
                                                                    d,
                                                                    m,
                                                                    y,
                                                                    b = f.sortableInfo.index,
                                                                    x = ((n = f), { bottom: R((r = window.getComputedStyle(n)).marginBottom), left: R(r.marginLeft), right: R(r.marginRight), top: R(r.marginTop) }),
                                                                    w = (function (e) {
                                                                        var t = window.getComputedStyle(e);
                                                                        return "grid" === t.display ? { x: R(t.gridColumnGap), y: R(t.gridRowGap) } : { x: 0, y: 0 };
                                                                    })(t.container),
                                                                    C = t.scrollContainer.getBoundingClientRect(),
                                                                    Z = a({ index: b, node: f, collection: p });
                                                                if (
                                                                    ((t.node = f),
                                                                    (t.margin = x),
                                                                    (t.gridGap = w),
                                                                    (t.width = Z.width),
                                                                    (t.height = Z.height),
                                                                    (t.marginOffset = { x: t.margin.left + t.margin.right + t.gridGap.x, y: Math.max(t.margin.top, t.margin.bottom, t.gridGap.y) }),
                                                                    (t.boundingClientRect = f.getBoundingClientRect()),
                                                                    (t.containerBoundingRect = C),
                                                                    (t.index = b),
                                                                    (t.newIndex = b),
                                                                    (t.axis = { x: i.indexOf("x") >= 0, y: i.indexOf("y") >= 0 }),
                                                                    (t.offsetEdge = L(f, t.container)),
                                                                    (t.initialOffset = B(g ? l({}, e, { pageX: t.boundingClientRect.left, pageY: t.boundingClientRect.top }) : e)),
                                                                    (t.initialScroll = { left: t.scrollContainer.scrollLeft, top: t.scrollContainer.scrollTop }),
                                                                    (t.initialWindowScroll = { left: window.pageXOffset, top: window.pageYOffset }),
                                                                    (t.helper = t.helperContainer.appendChild(
                                                                        ((d = "input, textarea, select, canvas, [contenteditable]"),
                                                                        (m = (o = f).querySelectorAll(d)),
                                                                        (y = o.cloneNode(!0)),
                                                                        (0, v.Z)(y.querySelectorAll(d)).forEach(function (e, t) {
                                                                            "file" !== e.type && (e.value = m[t].value), "radio" === e.type && e.name && (e.name = "__sortableClone__".concat(e.name)), e.tagName === G.Canvas && m[t].width > 0 && m[t].height > 0 && e.getContext("2d").drawImage(m[t], 0, 0);
                                                                        }),
                                                                        y),
                                                                    )),
                                                                    E(t.helper, { boxSizing: "border-box", height: "".concat(t.height, "px"), left: "".concat(t.boundingClientRect.left - x.left, "px"), pointerEvents: "none", position: "fixed", top: "".concat(t.boundingClientRect.top - x.top, "px"), width: "".concat(t.width, "px") }),
                                                                    g && t.helper.focus(),
                                                                    c && ((t.sortableGhost = f), E(f, { opacity: 0, visibility: "hidden" })),
                                                                    (t.minTranslate = {}),
                                                                    (t.maxTranslate = {}),
                                                                    g)
                                                                ) {
                                                                    var k = u ? { top: 0, left: 0, width: t.contentWindow.innerWidth, height: t.contentWindow.innerHeight } : t.containerBoundingRect,
                                                                        I = k.top,
                                                                        T = k.left,
                                                                        O = k.width,
                                                                        D = I + k.height,
                                                                        _ = T + O;
                                                                    t.axis.x && ((t.minTranslate.x = T - t.boundingClientRect.left), (t.maxTranslate.x = _ - (t.boundingClientRect.left + t.width))), t.axis.y && ((t.minTranslate.y = I - t.boundingClientRect.top), (t.maxTranslate.y = D - (t.boundingClientRect.top + t.height)));
                                                                } else t.axis.x && ((t.minTranslate.x = (u ? 0 : C.left) - t.boundingClientRect.left - t.width / 2), (t.maxTranslate.x = (u ? t.contentWindow.innerWidth : C.left + C.width) - t.boundingClientRect.left - t.width / 2)), t.axis.y && ((t.minTranslate.y = (u ? 0 : C.top) - t.boundingClientRect.top - t.height / 2), (t.maxTranslate.y = (u ? t.contentWindow.innerHeight : C.top + C.height) - t.boundingClientRect.top - t.height / 2));
                                                                s &&
                                                                    s.split(" ").forEach(function (e) {
                                                                        return t.helper.classList.add(e);
                                                                    }),
                                                                    (t.listenerNode = e.touches ? e.target : t.contentWindow),
                                                                    g
                                                                        ? (t.listenerNode.addEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.addEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.addEventListener("keydown", t.handleKeyDown))
                                                                        : (S.move.forEach(function (e) {
                                                                              return t.listenerNode.addEventListener(e, t.handleSortMove, !1);
                                                                          }),
                                                                          S.end.forEach(function (e) {
                                                                              return t.listenerNode.addEventListener(e, t.handleSortEnd, !1);
                                                                          })),
                                                                    t.setState({ sorting: !0, sortingIndex: b }),
                                                                    h && h({ node: f, index: b, collection: p, isKeySorting: g, nodes: t.manager.getOrderedRefs(), helper: t.helper }, e),
                                                                    g && t.keyMove(0);
                                                            },
                                                            o = t.props,
                                                            i = o.axis,
                                                            a = o.getHelperDimensions,
                                                            s = o.helperClass,
                                                            c = o.hideSortableGhost,
                                                            d = o.updateBeforeSortStart,
                                                            h = o.onSortStart,
                                                            u = o.useWindowAsScrollContainer,
                                                            f = n.node,
                                                            p = n.collection,
                                                            g = t.manager.isKeySorting,
                                                            m = (function () {
                                                                if ("function" == typeof d) {
                                                                    t._awaitingUpdateBeforeSortStart = !0;
                                                                    var n = (function (e, t) {
                                                                        try {
                                                                            var n = e();
                                                                        } catch (e) {
                                                                            return t(!0, e);
                                                                        }
                                                                        return n && n.then ? n.then(t.bind(null, !1), t.bind(null, !0)) : t(!1, value);
                                                                    })(
                                                                        function () {
                                                                            var t = f.sortableInfo.index;
                                                                            return Promise.resolve(d({ collection: p, index: t, node: f, isKeySorting: g }, e)).then(function () {});
                                                                        },
                                                                        function (e, n) {
                                                                            if (((t._awaitingUpdateBeforeSortStart = !1), e)) throw n;
                                                                            return n;
                                                                        },
                                                                    );
                                                                    if (n && n.then) return n.then(function () {});
                                                                }
                                                            })();
                                                        return m && m.then ? m.then(r) : r();
                                                    }
                                                })();
                                            return Promise.resolve(r && r.then ? r.then(function () {}) : void 0);
                                        } catch (e) {
                                            return Promise.reject(e);
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleSortMove", function (e) {
                                        var n = t.props.onSortMove;
                                        "function" == typeof e.preventDefault && e.cancelable && e.preventDefault(), t.updateHelperPosition(e), t.animateNodes(), t.autoscroll(), n && n(e);
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleSortEnd", function (e) {
                                        var n = t.props,
                                            r = n.hideSortableGhost,
                                            o = n.onSortEnd,
                                            i = t.manager,
                                            a = i.active.collection,
                                            l = i.isKeySorting,
                                            s = t.manager.getOrderedRefs();
                                        t.listenerNode &&
                                            (l
                                                ? (t.listenerNode.removeEventListener("wheel", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("mousedown", t.handleKeyEnd, !0), t.listenerNode.removeEventListener("keydown", t.handleKeyDown))
                                                : (S.move.forEach(function (e) {
                                                      return t.listenerNode.removeEventListener(e, t.handleSortMove);
                                                  }),
                                                  S.end.forEach(function (e) {
                                                      return t.listenerNode.removeEventListener(e, t.handleSortEnd);
                                                  }))),
                                            t.helper.parentNode.removeChild(t.helper),
                                            r && t.sortableGhost && E(t.sortableGhost, { opacity: "", visibility: "" });
                                        for (var c = 0, d = s.length; c < d; c++) {
                                            var h = s[c],
                                                u = h.node;
                                            (h.edgeOffset = null), (h.boundingClientRect = null), I(u, null), T(u, null), (h.translate = null);
                                        }
                                        t.autoScroller.clear(), (t.manager.active = null), (t.manager.isKeySorting = !1), t.setState({ sorting: !1, sortingIndex: null }), "function" == typeof o && o({ collection: a, newIndex: t.newIndex, oldIndex: t.index, isKeySorting: l, nodes: s }, e), (t.touched = !1);
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "autoscroll", function () {
                                        var e = t.props.disableAutoscroll,
                                            n = t.manager.isKeySorting;
                                        if (e) t.autoScroller.clear();
                                        else {
                                            if (n) {
                                                var r = l({}, t.translate),
                                                    o = 0,
                                                    i = 0;
                                                return t.axis.x && ((r.x = Math.min(t.maxTranslate.x, Math.max(t.minTranslate.x, t.translate.x))), (o = t.translate.x - r.x)), t.axis.y && ((r.y = Math.min(t.maxTranslate.y, Math.max(t.minTranslate.y, t.translate.y))), (i = t.translate.y - r.y)), (t.translate = r), I(t.helper, t.translate), (t.scrollContainer.scrollLeft += o), void (t.scrollContainer.scrollTop += i);
                                            }
                                            t.autoScroller.update({ height: t.height, maxTranslate: t.maxTranslate, minTranslate: t.minTranslate, translate: t.translate, width: t.width });
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "onAutoScroll", function (e) {
                                        (t.translate.x += e.left), (t.translate.y += e.top), t.animateNodes();
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleKeyDown", function (e) {
                                        var n = e.keyCode,
                                            r = t.props,
                                            o = r.shouldCancelStart,
                                            i = r.keyCodes,
                                            a = l({}, $, void 0 === i ? {} : i);
                                        (t.manager.active && !t.manager.isKeySorting) || !(t.manager.active || (a.lift.includes(n) && !o(e) && t.isValidSortingTarget(e))) || (e.stopPropagation(), e.preventDefault(), a.lift.includes(n) && !t.manager.active ? t.keyLift(e) : a.drop.includes(n) && t.manager.active ? t.keyDrop(e) : a.cancel.includes(n) ? ((t.newIndex = t.manager.active.index), t.keyDrop(e)) : a.up.includes(n) ? t.keyMove(-1) : a.down.includes(n) && t.keyMove(1));
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "keyLift", function (e) {
                                        var n = e.target,
                                            r = O(n, function (e) {
                                                return null != e.sortableInfo;
                                            }).sortableInfo,
                                            o = r.index,
                                            i = r.collection;
                                        (t.initialFocusedNode = n), (t.manager.isKeySorting = !0), (t.manager.active = { index: o, collection: i }), t.handlePress(e);
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "keyMove", function (e) {
                                        var n = t.manager.getOrderedRefs(),
                                            r = n[n.length - 1].node.sortableInfo.index,
                                            o = t.newIndex + e,
                                            i = t.newIndex;
                                        if (!(o < 0 || o > r)) {
                                            (t.prevIndex = i), (t.newIndex = o);
                                            var a = (function (e, t, n) {
                                                    return e < n && e > t ? e - 1 : e > n && e < t ? e + 1 : e;
                                                })(t.newIndex, t.prevIndex, t.index),
                                                l = n.find(function (e) {
                                                    return e.node.sortableInfo.index === a;
                                                }),
                                                s = l.node,
                                                c = t.containerScrollDelta,
                                                d = l.boundingClientRect || P(s, c),
                                                h = l.translate || { x: 0, y: 0 },
                                                u = d.top + h.y - c.top,
                                                f = d.left + h.x - c.left,
                                                p = i < o,
                                                g = p && t.axis.x ? s.offsetWidth - t.width : 0,
                                                m = p && t.axis.y ? s.offsetHeight - t.height : 0;
                                            t.handleSortMove({ pageX: f + g, pageY: u + m, ignoreTransition: 0 === e });
                                        }
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "keyDrop", function (e) {
                                        t.handleSortEnd(e), t.initialFocusedNode && t.initialFocusedNode.focus();
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "handleKeyEnd", function (e) {
                                        t.manager.active && t.keyDrop(e);
                                    }),
                                    (0, a.Z)((0, f.Z)((0, f.Z)(t)), "isValidSortingTarget", function (e) {
                                        var n = t.props.useDragHandle,
                                            r = e.target,
                                            o = O(r, function (e) {
                                                return null != e.sortableInfo;
                                            });
                                        return o && o.sortableInfo && !o.sortableInfo.disabled && (n ? V(r) : r.sortableInfo);
                                    });
                                var r = new w();
                                return (
                                    (function (e) {
                                        y()(!(e.distance && e.pressDelay), "Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.");
                                    })(e),
                                    (t.manager = r),
                                    (t.wrappedInstance = (0, p.createRef)()),
                                    (t.sortableContextValue = { manager: r }),
                                    (t.events = { end: t.handleEnd, move: t.handleMove, start: t.handleStart }),
                                    t
                                );
                            }
                            return (
                                (0, u.Z)(n, t),
                                (0, c.Z)(n, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            var e = this,
                                                t = this.props.useWindowAsScrollContainer,
                                                n = this.getContainer();
                                            Promise.resolve(n).then(function (n) {
                                                (e.container = n), (e.document = e.container.ownerDocument || document);
                                                var r = e.props.contentWindow || e.document.defaultView || window;
                                                (e.contentWindow = "function" == typeof r ? r() : r),
                                                    (e.scrollContainer = t ? e.document.scrollingElement || e.document.documentElement : A(e.container) || e.container),
                                                    (e.autoScroller = new U(e.scrollContainer, e.onAutoScroll)),
                                                    Object.keys(e.events).forEach(function (t) {
                                                        return S[t].forEach(function (n) {
                                                            return e.container.addEventListener(n, e.events[t], !1);
                                                        });
                                                    }),
                                                    e.container.addEventListener("keydown", e.handleKeyDown);
                                            });
                                        },
                                    },
                                    {
                                        key: "componentWillUnmount",
                                        value: function () {
                                            var e = this;
                                            this.helper && this.helper.parentNode && this.helper.parentNode.removeChild(this.helper),
                                                this.container &&
                                                    (Object.keys(this.events).forEach(function (t) {
                                                        return S[t].forEach(function (n) {
                                                            return e.container.removeEventListener(n, e.events[t]);
                                                        });
                                                    }),
                                                    this.container.removeEventListener("keydown", this.handleKeyDown));
                                        },
                                    },
                                    {
                                        key: "updateHelperPosition",
                                        value: function (e) {
                                            var t = this.props,
                                                n = t.lockAxis,
                                                r = t.lockOffset,
                                                o = t.lockToContainerEdges,
                                                a = t.transitionDuration,
                                                l = t.keyboardSortingTransitionDuration,
                                                s = void 0 === l ? a : l,
                                                c = this.manager.isKeySorting,
                                                d = e.ignoreTransition,
                                                h = B(e),
                                                u = { x: h.x - this.initialOffset.x, y: h.y - this.initialOffset.y };
                                            if (((u.y -= window.pageYOffset - this.initialWindowScroll.top), (u.x -= window.pageXOffset - this.initialWindowScroll.left), (this.translate = u), o)) {
                                                var f = (function (e) {
                                                        var t = e.height,
                                                            n = e.width,
                                                            r = e.lockOffset,
                                                            o = Array.isArray(r) ? r : [r, r];
                                                        y()(2 === o.length, "lockOffset prop of SortableContainer should be a single value or an array of exactly two values. Given %s", r);
                                                        var a = i(o, 2),
                                                            l = a[0],
                                                            s = a[1];
                                                        return [N({ height: t, lockOffset: l, width: n }), N({ height: t, lockOffset: s, width: n })];
                                                    })({ height: this.height, lockOffset: r, width: this.width }),
                                                    p = i(f, 2),
                                                    g = p[0],
                                                    m = p[1],
                                                    v = { x: this.width / 2 - g.x, y: this.height / 2 - g.y },
                                                    b = { x: this.width / 2 - m.x, y: this.height / 2 - m.y };
                                                (u.x = D(this.minTranslate.x + v.x, this.maxTranslate.x - b.x, u.x)), (u.y = D(this.minTranslate.y + v.y, this.maxTranslate.y - b.y, u.y));
                                            }
                                            "x" === n ? (u.y = 0) : "y" === n && (u.x = 0), c && s && !d && T(this.helper, s), I(this.helper, u);
                                        },
                                    },
                                    {
                                        key: "animateNodes",
                                        value: function () {
                                            var e = this.props,
                                                t = e.transitionDuration,
                                                n = e.hideSortableGhost,
                                                r = e.onSortOver,
                                                o = this.containerScrollDelta,
                                                i = this.windowScrollDelta,
                                                a = this.manager.getOrderedRefs(),
                                                l = this.offsetEdge.left + this.translate.x + o.left,
                                                s = this.offsetEdge.top + this.translate.y + o.top,
                                                c = this.manager.isKeySorting,
                                                d = this.newIndex;
                                            this.newIndex = null;
                                            for (var h = 0, u = a.length; h < u; h++) {
                                                var f = a[h].node,
                                                    p = f.sortableInfo.index,
                                                    g = f.offsetWidth,
                                                    m = f.offsetHeight,
                                                    y = { height: this.height > m ? m / 2 : this.height / 2, width: this.width > g ? g / 2 : this.width / 2 },
                                                    v = c && p > this.index && p <= d,
                                                    b = c && p < this.index && p >= d,
                                                    x = { x: 0, y: 0 },
                                                    w = a[h].edgeOffset;
                                                w || ((w = L(f, this.container)), (a[h].edgeOffset = w), c && (a[h].boundingClientRect = P(f, o)));
                                                var C = h < a.length - 1 && a[h + 1],
                                                    Z = h > 0 && a[h - 1];
                                                C && !C.edgeOffset && ((C.edgeOffset = L(C.node, this.container)), c && (C.boundingClientRect = P(C.node, o))), p !== this.index ? (t && T(f, t), this.axis.x ? (this.axis.y ? (b || (p < this.index && ((l + i.left - y.width <= w.left && s + i.top <= w.top + y.height) || s + i.top + y.height <= w.top)) ? ((x.x = this.width + this.marginOffset.x), w.left + x.x > this.containerBoundingRect.width - y.width && C && ((x.x = C.edgeOffset.left - w.left), (x.y = C.edgeOffset.top - w.top)), null === this.newIndex && (this.newIndex = p)) : (v || (p > this.index && ((l + i.left + y.width >= w.left && s + i.top + y.height >= w.top) || s + i.top + y.height >= w.top + m))) && ((x.x = -(this.width + this.marginOffset.x)), w.left + x.x < this.containerBoundingRect.left + y.width && Z && ((x.x = Z.edgeOffset.left - w.left), (x.y = Z.edgeOffset.top - w.top)), (this.newIndex = p))) : v || (p > this.index && l + i.left + y.width >= w.left) ? ((x.x = -(this.width + this.marginOffset.x)), (this.newIndex = p)) : (b || (p < this.index && l + i.left <= w.left + y.width)) && ((x.x = this.width + this.marginOffset.x), null == this.newIndex && (this.newIndex = p))) : this.axis.y && (v || (p > this.index && s + i.top + y.height >= w.top) ? ((x.y = -(this.height + this.marginOffset.y)), (this.newIndex = p)) : (b || (p < this.index && s + i.top <= w.top + y.height)) && ((x.y = this.height + this.marginOffset.y), null == this.newIndex && (this.newIndex = p))), I(f, x), (a[h].translate = x)) : n && ((this.sortableGhost = f), E(f, { opacity: 0, visibility: "hidden" }));
                                            }
                                            null == this.newIndex && (this.newIndex = this.index), c && (this.newIndex = d);
                                            var S = c ? this.prevIndex : d;
                                            r && this.newIndex !== S && r({ collection: this.manager.active.collection, index: this.index, newIndex: this.newIndex, oldIndex: S, isKeySorting: c, nodes: a, helper: this.helper });
                                        },
                                    },
                                    {
                                        key: "getWrappedInstance",
                                        value: function () {
                                            return y()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call"), this.wrappedInstance.current;
                                        },
                                    },
                                    {
                                        key: "getContainer",
                                        value: function () {
                                            var e = this.props.getContainer;
                                            return "function" != typeof e ? (0, g.findDOMNode)(this) : e(o.withRef ? this.getWrappedInstance() : void 0);
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            var t = o.withRef ? this.wrappedInstance : null;
                                            return (0, p.createElement)(J.Provider, { value: this.sortableContextValue }, (0, p.createElement)(e, (0, r.Z)({ ref: t }, Z(this.props, q))));
                                        },
                                    },
                                    {
                                        key: "helperContainer",
                                        get: function () {
                                            var e = this.props.helperContainer;
                                            return "function" == typeof e ? e() : this.props.helperContainer || this.document.body;
                                        },
                                    },
                                    {
                                        key: "containerScrollDelta",
                                        get: function () {
                                            return this.props.useWindowAsScrollContainer ? { left: 0, top: 0 } : { left: this.scrollContainer.scrollLeft - this.initialScroll.left, top: this.scrollContainer.scrollTop - this.initialScroll.top };
                                        },
                                    },
                                    {
                                        key: "windowScrollDelta",
                                        get: function () {
                                            return { left: this.contentWindow.pageXOffset - this.initialWindowScroll.left, top: this.contentWindow.pageYOffset - this.initialWindowScroll.top };
                                        },
                                    },
                                ]),
                                n
                            );
                        })(p.Component)),
                    (0, a.Z)(t, "displayName", _("sortableList", e)),
                    (0, a.Z)(t, "defaultProps", Y),
                    (0, a.Z)(t, "propTypes", X),
                    n
                );
            }
            var ee = { index: x().number.isRequired, collection: x().oneOfType([x().number, x().string]), disabled: x().bool },
                te = Object.keys(ee);
            function ne(e) {
                var t,
                    n,
                    o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { withRef: !1 };
                return (
                    (n = t =
                        (function (t) {
                            function n() {
                                var e, t;
                                (0, s.Z)(this, n);
                                for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++) o[i] = arguments[i];
                                return (t = (0, d.Z)(this, (e = (0, h.Z)(n)).call.apply(e, [this].concat(o)))), (0, a.Z)((0, f.Z)((0, f.Z)(t)), "wrappedInstance", (0, p.createRef)()), t;
                            }
                            return (
                                (0, u.Z)(n, t),
                                (0, c.Z)(n, [
                                    {
                                        key: "componentDidMount",
                                        value: function () {
                                            this.register();
                                        },
                                    },
                                    {
                                        key: "componentDidUpdate",
                                        value: function (e) {
                                            this.node && (e.index !== this.props.index && (this.node.sortableInfo.index = this.props.index), e.disabled !== this.props.disabled && (this.node.sortableInfo.disabled = this.props.disabled)), e.collection !== this.props.collection && (this.unregister(e.collection), this.register());
                                        },
                                    },
                                    {
                                        key: "componentWillUnmount",
                                        value: function () {
                                            this.unregister();
                                        },
                                    },
                                    {
                                        key: "register",
                                        value: function () {
                                            var e = this.props,
                                                t = e.collection,
                                                n = e.disabled,
                                                r = e.index,
                                                o = (0, g.findDOMNode)(this);
                                            (o.sortableInfo = { collection: t, disabled: n, index: r, manager: this.context.manager }), (this.node = o), (this.ref = { node: o }), this.context.manager.add(t, this.ref);
                                        },
                                    },
                                    {
                                        key: "unregister",
                                        value: function () {
                                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props.collection;
                                            this.context.manager.remove(e, this.ref);
                                        },
                                    },
                                    {
                                        key: "getWrappedInstance",
                                        value: function () {
                                            return y()(o.withRef, "To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call"), this.wrappedInstance.current;
                                        },
                                    },
                                    {
                                        key: "render",
                                        value: function () {
                                            var t = o.withRef ? this.wrappedInstance : null;
                                            return (0, p.createElement)(e, (0, r.Z)({ ref: t }, Z(this.props, te)));
                                        },
                                    },
                                ]),
                                n
                            );
                        })(p.Component)),
                    (0, a.Z)(t, "displayName", _("sortableElement", e)),
                    (0, a.Z)(t, "contextType", J),
                    (0, a.Z)(t, "propTypes", ee),
                    (0, a.Z)(t, "defaultProps", { collection: 0 }),
                    n
                );
            }
        },
        709249: (e, t, n) => {
            function r(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
            }
            n.d(t, { Z: () => r });
        },
        887371: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(145850);
            function o(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var o = t[n];
                    (o.enumerable = o.enumerable || !1), (o.configurable = !0), "value" in o && (o.writable = !0), Object.defineProperty(e, (0, r.Z)(o.key), o);
                }
            }
            function i(e, t, n) {
                return t && o(e.prototype, t), n && o(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e;
            }
        },
        695058: (e, t, n) => {
            function r(e) {
                return (
                    (r = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e);
                          }),
                    r(e)
                );
            }
            n.d(t, { Z: () => r });
        },
        545754: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(88960);
            function o(e, t) {
                if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, "prototype", { writable: !1 }), t && (0, r.Z)(e, t);
            }
        },
        411987: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(86522),
                o = n(580753);
            function i(e, t) {
                if (t && ("object" === (0, r.Z)(t) || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return (0, o.Z)(e);
            }
        },
        238777: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(200926);
            var o = n(759147);
            function i(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return (0, r.Z)(e);
                    })(e) ||
                    (function (e) {
                        if (("undefined" != typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                    })(e) ||
                    (0, o.Z)(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Communities~ondemand.SettingsRevamp.4d8b5f7a.js.map
