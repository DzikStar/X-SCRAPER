"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-bc6ccf4c", "icons/IconDeviceLaptop-js", "icons/IconDeviceUnknown-js"],
    {
        362075: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(807896),
                n = o(202784),
                i = o(325686),
                a = o(688715),
                l = o(950822),
                s = o(386802),
                c = o(392237);
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = n.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: o } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return o ? o(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let r;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    r = JSON.parse(e.data);
                                } catch (t) {
                                    return void (o && o(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(r);
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: o, dangerouslyDisableSandbox: r, src: s, style: c, title: d } = this.props,
                        { isModal: u } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, l.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, a.ju)(s), style: p.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return n.createElement(i.Z, { style: u ? [p.root, p.modalPadding, c] : [p.root, c] }, m);
                }
            }
            d.contextType = s.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                u = n.forwardRef((e, t) => n.createElement(d, (0, r.Z)({ forwardedRef: t }, e)));
        },
        943401: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                n = o(731708),
                i = o(392237);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return r.createElement(n.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: o } = this.props,
                        i = l.root;
                    return t && o ? r.createElement(n.ZP, { color: "gray700", size: "subtext2", style: i }, e, " ", this._renderLearnMore()) : r.createElement(n.ZP, { color: "gray700", size: "subtext2", style: i }, e);
                }
            }
            const l = i.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = a;
        },
        928088: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(202784),
                n = o(325686);
            const i = o(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                a = function ({ children: e }) {
                    return r.createElement(n.Z, { style: i.root }, e);
                };
        },
        88307: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                n = o(325686),
                i = o(731708),
                a = o(392237);
            class l extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderSubtextAndLink = () => {
                            const { subtext: e } = this.props;
                            return r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, e, " ", this._renderLearnMore());
                        }),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return t && e ? r.createElement(i.ZP, { link: t, size: "subtext2" }, e) : null;
                        });
                }
                render() {
                    const { label: e, learnMoreLabel: t, learnMoreLink: o, subtext: a, withBottomBorder: l } = this.props;
                    return r.createElement(n.Z, { style: [s.root, l && s.bottomBorder] }, r.createElement(i.ZP, null, e), a ? (t && o ? this._renderSubtextAndLink() : r.createElement(i.ZP, { color: "gray700", size: "subtext2" }, a)) : null);
                }
            }
            l.defaultProps = { withBottomBorder: !0 };
            const s = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                c = l;
        },
        80512: (e, t, o) => {
            o.d(t, { Z: () => p });
            var r = o(202784),
                n = o(325686),
                i = o(815858),
                a = o(731708),
                l = o(449479),
                s = o(392237),
                c = o(451566);
            let d = 1;
            class p extends r.Component {
                constructor() {
                    super(),
                        (this._handleGateToggle = () => {
                            const { defaultOption: e, name: t, offValue: o, onChange: r, options: n, value: i } = this.props;
                            r(t, i === o ? e?.value || n[0].value : o);
                        }),
                        (this._handleAnimationComplete = () => {
                            this._radioGroupRef && this._radioGroupRef.focus();
                        }),
                        (this._setRadioGroupRef = (e) => {
                            this._radioGroupRef = e;
                        }),
                        (this._labelId = `RADIO_GROUP_${d}_LABEL`),
                        (d += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: s, name: d, offValue: p, onChange: h, options: m, value: g } = this.props;
                    return r.createElement(n.Z, { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "group", style: [u.root, o && u.disabled] }, r.createElement(r.Fragment, null, s ? r.createElement(n.Z, { id: this._labelId, role: "label", style: u.header }, r.createElement(n.Z, { style: u.label }, r.createElement(a.ZP, { weight: "bold" }, s), r.createElement(c.Z, { disabled: o, onValueChange: this._handleGateToggle, value: g !== p })), t ? r.createElement(a.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null, m && r.createElement(i.Z, { onAnimateComplete: this._handleAnimationComplete, show: g !== p }, r.createElement(n.Z, null, r.createElement(n.Z, { style: u.radioGroup, tabIndex: 0 }, r.createElement(l.Z, { "aria-label": e || s, disabled: o, name: d, onChange: h, options: m, ref: this._setRadioGroupRef, value: g }))))));
                }
            }
            p.defaultProps = { disabled: !1 };
            const u = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, header: { alignItems: "flex-start", marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, label: { paddingBottom: e.spaces.space4, flexDirection: "row", justifyContent: "space-between", width: "100%" }, radioGroup: { borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small, marginHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => k });
            var r = o(807896),
                n = o(202784),
                i = o(194504),
                a = o(235902),
                l = o(392237),
                s = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                h = o(731708),
                m = o(310088),
                g = o(175993),
                b = o(58881),
                f = o(530732);
            const y = d().d2414d31,
                x = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: r, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const n = l.default.theme.colors.text,
                                i = l.default.theme.colors.gray700;
                            return o || r ? (e || t ? n : i) : e ? n : i;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: i, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: w, style: Z, to: _ } = this.props,
                        { location: k } = this.state,
                        S = _ ? this._getMemoizedLink(_, w) : void 0,
                        E = c ? c(_) : k?.pathname === S?.pathname,
                        R = b.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? C.pillHoverStyle.backgroundColor : void 0 }),
                        z = g ? "medium" : E ? "bold" : "medium";
                    return n.createElement(f.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: R, link: S, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [C.pillStyle] : [C.link]), ...(p && E ? [C.pillActiveStyle] : []), d ? (p ? C.compactPill : C.compactLink) : null, u ? C.roundedRect : null, Z], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => n.createElement(s.Z, { style: p && C.flexGrow }, n.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(E, c, g, p) }, d && C.compactText, g && t && C.focusedText, p && C.pillTextStyle, p && E && C.pillActiveTextStyle, p && c && C.pillHoverTextStyle], weight: z }, e && n.createElement(e, { style: C.icon }), i, g || p ? null : n.createElement(s.Z, { style: E && [C.border, { backgroundColor: l.default.theme.colors[a] }] })), o ? n.createElement(m.Z, { count: o, standalone: !0, style: [C.badge, o >= 10 && C.multiDigitBadge, o >= 20 && C.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: y, withBorder: !1 }) : r ? n.createElement(m.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (w.contextType = g.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = l.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                Z = w,
                _ = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = a.ZP.useProps(),
                        m = h() && !l,
                        g = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...a }, c) => {
                                    const d = m ? [_.linkRedesign, 0 === c && _.firstLinkRedesign, e && 0 === c && _.withNoPaddingStart] : void 0;
                                    return n.createElement(Z, (0, r.Z)({ viewType: i }, a, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, l, s, m, c],
                        );
                    return n.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: l && _.gap, childrenStyle: !m && _.flexGrow, key: u, style: [l ? null : _.segmentedControl, m && _.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        762863: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M21 16V4.5C21 3.12 19.88 2 18.5 2h-13C4.12 2 3 3.12 3 4.5V16H1v4c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2v-4h-2zM5 4.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V16H5V4.5zM3 20v-2h18v2H3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        932466: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13zm6.07 6.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                i = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-bc6ccf4c.f759bd5a.js.map
