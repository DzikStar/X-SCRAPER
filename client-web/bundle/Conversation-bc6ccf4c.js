"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-bc6ccf4c", "icons/IconTrashcan-js"],
    {
        362075: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(807896),
                o = r(202784),
                i = r(325686),
                n = r(688715),
                l = r(950822),
                s = r(386802),
                c = r(392237);
            class d extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = o.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: r } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return r ? r(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let a;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    a = JSON.parse(e.data);
                                } catch (t) {
                                    return void (r && r(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(a);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: r, dangerouslyDisableSandbox: a, src: s, style: c, title: d } = this.props,
                        { isModal: h } = this.context,
                        u = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        g = (0, l.Z)("iframe", { allow: `${u.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, n.ju)(s), style: p.iframe, title: d, ...(a ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${r ? " allow-top-navigation" : ""}` }) });
                    return o.createElement(i.Z, { style: h ? [p.root, p.modalPadding, c] : [p.root, c] }, g);
                }
            }
            d.contextType = s.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                h = o.forwardRef((e, t) => o.createElement(d, (0, a.Z)({ forwardedRef: t }, e)));
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                o = r(325686),
                i = r(191796),
                n = r(58399),
                l = r(731708),
                s = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: h = !1, label: u, link: g, onPress: m, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: w, testID: C = "pivot", thumbnail: v, thumbnailSize: E, withoutArrow: Z = !1 } = e,
                        x = [p.thumbnailContainer, "medium" === E && p.thumbnailContainerMedium],
                        k = "string" == typeof u ? a.createElement(l.ZP, null, u) : u,
                        I = "object" == typeof g && g.external && !g.openInSameFrame,
                        D = r ? ("string" == typeof r ? a.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, r) : r) : null,
                        R = a.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return a.createElement(s.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : g, onPress: m, role: y, style: [p.root, R, d && p.disabled, w], testID: C, withInteractiveStyling: !!g || !!m }, a.createElement(o.Z, { style: p.contentContainer }, v ? a.createElement(o.Z, { style: x }, v) : null, a.createElement(o.Z, { style: p.content }, k, D), f ? f() : null, (!g && !m) || d || Z ? null : I ? a.createElement(i.default, { style: p.icon }) : a.createElement(n.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        84679: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(807896),
                o = r(202784),
                i = r(31501),
                n = r(879891);
            const l = (e) => {
                const { direction: t } = (0, n.Z)();
                return o.createElement(i.Z, (0, a.Z)({}, e, { languageWritingDirection: t }));
            };
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                o = r(325686),
                i = r(913973),
                n = r(731708),
                l = r(950822),
                s = r(466792),
                c = r(58881),
                d = r(530732),
                p = r(352924),
                h = r(392237);
            class u extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, p.F)()),
                        (this.descriptionId = (0, p.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: p, helpText: u, label: m, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        w = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        C = r ? y : w;
                    return a.createElement(s.Z, { disabled: p }, (s) => a.createElement(o.Z, { role: "label", style: [g.root, !p && g.interactive], testID: f }, a.createElement(o.Z, { style: g.topContainer }, a.createElement(n.ZP, { id: this.labelId }, m), a.createElement(o.Z, { style: g.radioContainer }, a.createElement(d.Z, { interactiveStyles: C, interactivityState: s, style: g.radioBackground }, a.createElement(o.Z, { style: [g.circle, r && g.circleActive, p && g.circleDisabled, r && p && g.circleCheckedAndDisabled] }, r ? a.createElement(i.default, { style: g.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), u ? a.createElement(n.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, u) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            u.defaultProps = { disabled: !1, checked: !1 };
            const g = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = u,
                b = "radioGroup";
            let f = 1;
            class y extends a.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: r } = this.props;
                            r(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (r) => {
                            (this._radioRefs[e] = r), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: i, name: l, options: s, value: c } = this.props;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": i && !e ? this._labelId : void 0, role: "radiogroup", style: r && w.disabled, testID: `${b}${l}` },
                        i ? a.createElement(o.Z, { id: this._labelId, role: "label", style: w.header }, a.createElement(n.ZP, { style: w.label, weight: "bold" }, i), t ? a.createElement(n.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => a.createElement(m, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const w = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        782947: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(807896),
                o = r(202784),
                i = r(896632),
                n = r(325686),
                l = r(711223),
                s = r(516951),
                c = r(731708),
                d = r(868634),
                p = r(952428),
                h = r(352924),
                u = r(392237);
            const g = u.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                m = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: a, dedicatedPillRow: i, description: u, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: w, illustration: C, infoLabel: v, infoLabelType: E, inlineCallout: Z, label: x, name: k, onChange: I, pillText: D, pillType: R, reverseLabels: _, secondaryContent: z, secondaryDescription: S, switchStyle: P, testID: M }) => {
                    const T = (0, h.b)(),
                        $ = (0, h.b)(),
                        W = (0, h.b)(),
                        B = o.createElement(c.ZP, { color: P ? (a ? "text" : "gray800") : "text", id: T, role: "label", size: P ? "body" : "headline2", testID: "headline-label", weight: P ? "normal" : "bold" }, x),
                        j = !!u && o.createElement(c.ZP, { color: "gray700", id: $, size: "subtext1", style: D ? g.descriptionWithPill : g.description, testID: "description-label" }, u),
                        H = o.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: g.description }, S),
                        V = D ? o.createElement(d.ZP, { style: i ? g.pill : g.inlinePill, type: R }, D) : null,
                        F = o.createElement(o.Fragment, null, i ? V : null, o.createElement(n.Z, { style: [g.row, v && g.marginBottom8] }, _ ? j : B, i ? null : V), o.createElement(n.Z, { style: [g.row, _ && g.marginTop4] }, _ ? B : j), z || (S ? H : void 0)),
                        L = P ? "unset" : (r ? 100 / r : 100) + "%",
                        O = P ? [g.padding8, g.borderRadiusLarge, a ? g.backgroundDefault : g.backgroundTransparent] : [g.padding16, g.boxShadow, g.borderRadiusLarge, a ? g.checked : null, g.backgroundDefault];
                    return o.createElement(o.Fragment, null, o.createElement(p.Z, { disabled: b, style: [g.root, ...O, w ? { maxWidth: L, ...g.grow } : null, 1 === t || w ? null : g.withMarginTop, t !== r && w && !P && g.withMarginEnd, !b && g.interactive], testID: M, withInteractiveStyling: !P }, !!C && o.createElement(n.Z, { style: g.iconContainer, testID: "illustration" }, C), o.createElement(n.Z, { style: [g.labelContainer, P && g.alignCenter] }, !!v && o.createElement(n.Z, { style: g.info }, o.createElement(d.ZP, { background: "green" === E ? "green500" : "red" === E ? "magenta500" : "yellow" === E ? "orange50" : "gray500" }, o.createElement(c.ZP, { color: "yellow" === E ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, v)), "red" !== E && "yellow" !== E && o.createElement(l.default, { style: g.infoIcon, testID: "infoIcon" })), F, a && !!Z && o.createElement(n.Z, { style: g.inlineCalloutContainer, testID: "inlineCallout" }, Z)), !!y && o.createElement(n.Z, { style: g.endContentContainer, testID: "endContent" }, o.createElement(c.ZP, { id: W, size: "subtext1", weight: "bold" }, y)), o.createElement("input", { "aria-describedby": `${$} ${W}`, "aria-label": e, "aria-labelledby": T, "aria-posinset": t, "aria-setsize": r, checked: a, disabled: b, name: k, onChange: a ? s.Z : I, style: m, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = o.useCallback(({ value: e, ...t }) => o.createElement(b, (0, a.Z)({}, t, { key: e })), []);
                    return o.createElement(i.Z, (0, a.Z)({}, e, { renderSelector: t }));
                };
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        748138: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                i = r(783427),
                n = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        250195: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                i = r(783427),
                n = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16 6V4.5C16 3.12 14.88 2 13.5 2h-3C9.11 2 8 3.12 8 4.5V6H3v2h1.06l.81 11.21C4.98 20.78 6.28 22 7.86 22h8.27c1.58 0 2.88-1.22 3-2.79L19.93 8H21V6h-5zm-6-1.5c0-.28.22-.5.5-.5h3c.27 0 .5.22.5.5V6h-4V4.5zM11 17H9v-6h2v6zm4 0h-2v-6h2v6z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-bc6ccf4c.8a94a02a.js.map
