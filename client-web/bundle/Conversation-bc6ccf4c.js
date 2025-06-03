"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conversation-bc6ccf4c"],
    {
        362075: (e, t, r) => {
            r.d(t, { Z: () => u });
            var a = r(807896),
                o = r(202784),
                n = r(325686),
                i = r(688715),
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
                        { isModal: u } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        g = (0, l.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, i.ju)(s), style: p.iframe, title: d, ...(a ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${r ? " allow-top-navigation" : ""}` }) });
                    return o.createElement(n.Z, { style: u ? [p.root, p.modalPadding, c] : [p.root, c] }, g);
                }
            }
            d.contextType = s.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                u = o.forwardRef((e, t) => o.createElement(d, (0, a.Z)({ forwardedRef: t }, e)));
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var a = r(202784),
                o = r(325686),
                n = r(191796),
                i = r(58399),
                l = r(731708),
                s = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: u = !1, label: h, link: g, onPress: m, paddingHorizontal: b, renderRightContent: f, role: y = "tab", styleOverride: w, testID: C = "pivot", thumbnail: v, thumbnailSize: E, withoutArrow: Z = !1 } = e,
                        x = [p.thumbnailContainer, "medium" === E && p.thumbnailContainerMedium],
                        k = "string" == typeof h ? a.createElement(l.ZP, null, h) : h,
                        I = "object" == typeof g && g.external && !g.openInSameFrame,
                        D = r ? ("string" == typeof r ? a.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, r) : r) : null,
                        R = a.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return a.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : g, onPress: m, role: y, style: [p.root, R, d && p.disabled, w], testID: C, withInteractiveStyling: !!g || !!m }, a.createElement(o.Z, { style: p.contentContainer }, v ? a.createElement(o.Z, { style: x }, v) : null, a.createElement(o.Z, { style: p.content }, k, D), f ? f() : null, (!g && !m) || d || Z ? null : I ? a.createElement(n.default, { style: p.icon }) : a.createElement(i.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        84679: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(807896),
                o = r(202784),
                n = r(31501),
                i = r(879891);
            const l = (e) => {
                const { direction: t } = (0, i.Z)();
                return o.createElement(n.Z, (0, a.Z)({}, e, { languageWritingDirection: t }));
            };
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => y });
            var a = r(202784),
                o = r(325686),
                n = r(913973),
                i = r(731708),
                l = r(950822),
                s = r(466792),
                c = r(58881),
                d = r(530732),
                p = r(352924),
                u = r(392237);
            class h extends a.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: p, helpText: h, label: m, name: b, testID: f } = this.props,
                        y = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        w = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        C = r ? y : w;
                    return a.createElement(s.Z, { disabled: p }, (s) => a.createElement(o.Z, { role: "label", style: [g.root, !p && g.interactive], testID: f }, a.createElement(o.Z, { style: g.topContainer }, a.createElement(i.ZP, { id: this.labelId }, m), a.createElement(o.Z, { style: g.radioContainer }, a.createElement(d.Z, { interactiveStyles: C, interactivityState: s, style: g.radioBackground }, a.createElement(o.Z, { style: [g.circle, r && g.circleActive, p && g.circleDisabled, r && p && g.circleCheckedAndDisabled] }, r ? a.createElement(n.default, { style: g.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: p, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), h ? a.createElement(i.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, h) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            h.defaultProps = { disabled: !1, checked: !1 };
            const g = u.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = h,
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
                    const { "aria-label": e, description: t, disabled: r, label: n, name: l, options: s, value: c } = this.props;
                    return a.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: r && w.disabled, testID: `${b}${l}` },
                        n ? a.createElement(o.Z, { id: this._labelId, role: "label", style: w.header }, a.createElement(i.ZP, { style: w.label, weight: "bold" }, n), t ? a.createElement(i.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => a.createElement(m, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const w = u.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        782947: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(807896),
                o = r(202784),
                n = r(896632),
                i = r(325686),
                l = r(711223),
                s = r(516951),
                c = r(731708),
                d = r(868634),
                p = r(952428),
                u = r(352924),
                h = r(392237);
            const g = h.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                m = { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                b = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": r, checked: a, dedicatedPillRow: n, description: h, disabled: b, disabledInlineCallout: f, endContent: y, horizontal: w, illustration: C, infoLabel: v, infoLabelType: E, inlineCallout: Z, label: x, name: k, onChange: I, pillText: D, pillType: R, reverseLabels: _, secondaryContent: S, secondaryDescription: z, switchStyle: P, testID: T }) => {
                    const M = (0, u.b)(),
                        $ = (0, u.b)(),
                        W = (0, u.b)(),
                        B = o.createElement(c.ZP, { color: P ? (a ? "text" : "gray800") : "text", id: M, role: "label", size: P ? "body" : "headline2", testID: "headline-label", weight: P ? "normal" : "bold" }, x),
                        j = !!h && o.createElement(c.ZP, { color: "gray700", id: $, size: "subtext1", style: D ? g.descriptionWithPill : g.description, testID: "description-label" }, h),
                        F = o.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: g.description }, z),
                        L = D ? o.createElement(d.ZP, { style: n ? g.pill : g.inlinePill, type: R }, D) : null,
                        H = o.createElement(o.Fragment, null, n ? L : null, o.createElement(i.Z, { style: [g.row, v && g.marginBottom8] }, _ ? j : B, n ? null : L), o.createElement(i.Z, { style: [g.row, _ && g.marginTop4] }, _ ? B : j), S || (z ? F : void 0)),
                        O = P ? "unset" : (r ? 100 / r : 100) + "%",
                        G = P ? [g.padding8, g.borderRadiusLarge, a ? g.backgroundDefault : g.backgroundTransparent] : [g.padding16, g.boxShadow, g.borderRadiusLarge, a ? g.checked : null, g.backgroundDefault];
                    return o.createElement(o.Fragment, null, o.createElement(p.Z, { disabled: b, style: [g.root, ...G, w ? { maxWidth: O, ...g.grow } : null, 1 === t || w ? null : g.withMarginTop, t !== r && w && !P && g.withMarginEnd, !b && g.interactive], testID: T, withInteractiveStyling: !P }, !!C && o.createElement(i.Z, { style: g.iconContainer, testID: "illustration" }, C), o.createElement(i.Z, { style: [g.labelContainer, P && g.alignCenter] }, !!v && o.createElement(i.Z, { style: g.info }, o.createElement(d.ZP, { background: "green" === E ? "green500" : "red" === E ? "magenta500" : "yellow" === E ? "orange50" : "gray500" }, o.createElement(c.ZP, { color: "yellow" === E ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, v)), "red" !== E && "yellow" !== E && o.createElement(l.default, { style: g.infoIcon, testID: "infoIcon" })), H, a && !!Z && o.createElement(i.Z, { style: g.inlineCalloutContainer, testID: "inlineCallout" }, Z)), !!y && o.createElement(i.Z, { style: g.endContentContainer, testID: "endContent" }, o.createElement(c.ZP, { id: W, size: "subtext1", weight: "bold" }, y)), o.createElement("input", { "aria-describedby": `${$} ${W}`, "aria-label": e, "aria-labelledby": M, "aria-posinset": t, "aria-setsize": r, checked: a, disabled: b, name: k, onChange: a ? s.Z : I, style: m, type: "radio" })), b && f ? f : null);
                },
                f = (e) => {
                    const t = o.useCallback(({ value: e, ...t }) => o.createElement(b, (0, a.Z)({}, t, { key: e })), []);
                    return o.createElement(n.Z, (0, a.Z)({}, e, { renderSelector: t }));
                };
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        41065: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                o = r(890601),
                n = r(783427),
                i = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conversation-bc6ccf4c.5cd82afa.js.map
