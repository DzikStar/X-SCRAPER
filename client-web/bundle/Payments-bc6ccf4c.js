"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-bc6ccf4c", "icons/IconDrawer-js", "icons/IconInterestStroke-js"],
    {
        661810: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                a = o(325686),
                i = o(392237);
            function n({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        362075: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(807896),
                a = o(202784),
                i = o(325686),
                n = o(688715),
                s = o(950822),
                l = o(386802),
                c = o(392237);
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = a.createRef()),
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: o, dangerouslyDisableSandbox: r, src: l, style: c, title: d } = this.props,
                        { isModal: u } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, s.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, n.ju)(l), style: p.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return a.createElement(i.Z, { style: u ? [p.root, p.modalPadding, c] : [p.root, c] }, m);
                }
            }
            d.contextType = l.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                u = a.forwardRef((e, t) => a.createElement(d, (0, r.Z)({ forwardedRef: t }, e)));
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                a = o(325686),
                i = o(191796),
                n = o(58399),
                s = o(731708),
                l = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: u = !1, label: h, link: m, onPress: g, paddingHorizontal: f, renderRightContent: b, role: y = "tab", styleOverride: w, testID: v = "pivot", thumbnail: C, thumbnailSize: x, withoutArrow: k = !1 } = e,
                        S = [p.thumbnailContainer, "medium" === x && p.thumbnailContainerMedium],
                        Z = "string" == typeof h ? r.createElement(s.ZP, null, h) : h,
                        R = "object" == typeof m && m.external && !m.openInSameFrame,
                        E = o ? ("string" == typeof o ? r.createElement(s.ZP, { color: "gray700", size: "subtext2", testID: `${v}-description` }, o) : o) : null,
                        W = r.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return r.createElement(l.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [p.root, W, d && p.disabled, w], testID: v, withInteractiveStyling: !!m || !!g }, r.createElement(a.Z, { style: p.contentContainer }, C ? r.createElement(a.Z, { style: S }, C) : null, r.createElement(a.Z, { style: p.content }, Z, E), b ? b() : null, (!m && !g) || d || k ? null : R ? r.createElement(i.default, { style: p.icon }) : r.createElement(n.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        776588: (e, t, o) => {
            o.d(t, { Z: () => s });
            var r = o(202784),
                a = o(325686),
                i = o(392237);
            const n = i.default.create((e) => ({ root: { display: "flex", flexDirection: "row", flexWrap: "nowrap", overflow: "hidden", width: "100%" }, borderRadius: { borderRadius: e.borderRadii.infinite }, lineWrap: { flexWrap: "wrap", overflow: "visible" }, word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 }, wordWrapper: { justifyContent: "center" } })),
                s = function ({ color: e, lineHeightPx: t, maxWidthPx: o, style: s, withBorderRadius: l, withLineWrap: c, wordHeightPx: d, wordPercentWidths: p, wordSpacingPx: u }) {
                    const h = r.useMemo(
                        () =>
                            p.map((o, s) => {
                                const c = u || i.default.theme.spaces.space4,
                                    h = s !== p.length - 1 ? c : 0,
                                    m = r.createElement(a.Z, { key: s, style: [n.word, { width: t ? "100%" : `${o}%` }, e && { backgroundColor: i.default.theme.colors[e] }, !t && { marginEnd: h }, l && n.borderRadius, !!d && { height: d }] });
                                return t ? r.createElement(a.Z, { key: s, style: [n.wordWrapper, t && { marginEnd: h }, { height: t, width: `${o}%` }] }, m) : m;
                            }),
                        [e, t, l, d, u, p],
                    );
                    return r.createElement(a.Z, { style: [n.root, c && n.lineWrap, { maxWidth: o || "none" }, s] }, h);
                };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var r = o(807896),
                a = o(202784),
                i = o(194504),
                n = o(235902),
                s = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                h = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                b = o(530732);
            const y = d().d2414d31,
                w = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: r, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const a = s.default.theme.colors.text,
                                i = s.default.theme.colors.gray700;
                            return o || r ? (e || t ? a : i) : e ? a : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: i, color: n, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: C, style: k, to: S } = this.props,
                        { location: Z } = this.state,
                        R = S ? this._getMemoizedLink(S, C) : void 0,
                        E = c ? c(S) : Z?.pathname === R?.pathname,
                        W = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        I = g ? "medium" : E ? "bold" : "medium";
                    return a.createElement(b.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: W, link: R, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? x.pill : x.link, p && E ? x.active : null, d ? (p ? x.compactPill : x.compactLink) : null, u ? x.roundedRect : null, k], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: p && x.flexGrow }, a.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(E, c, g, p) }, d && x.compactText, g && t && x.focusedText], weight: I }, e && a.createElement(e, { style: x.icon }), i, g || p ? null : a.createElement(l.Z, { style: E && [x.border, { backgroundColor: s.default.theme.colors[n] }] })), o ? a.createElement(m.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: y, withBorder: !1 }) : r ? a.createElement(m.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = s.default.create((e) => ({
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                k = C,
                S = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = n.ZP.useProps(),
                        m = h() && !s,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...n }, c) => {
                                    const d = m ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return a.createElement(k, (0, r.Z)({ viewType: i }, n, { isCompact: o, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, l, m, c],
                        );
                    return a.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: s && S.gap, childrenStyle: !m && S.flexGrow, key: u, style: [s ? null : S.segmentedControl, m && S.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        165822: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                a = o(325686),
                i = o(58881),
                n = o(530732),
                s = o(392237);
            const l = s.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: o, interactiveStyles: c, isCompact: d, link: p, lower: u, onClick: h, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: b = !0, withInteractiveStyling: y = !1 }) => {
                    const w = c ?? i.Z.generate({ backgroundColor: s.default.theme.colors.transparent, color: s.default.theme.colors.primary, insetFocusRing: b }),
                        v = r.createElement(r.Fragment, null, r.createElement(a.Z, { style: [l.defaultUpperContainerStyle, g, d && { height: "auto" }] }, f), u ? r.createElement(a.Z, { style: [l.defaultLowerContainerStyle, m] }, u) : null);
                    return r.createElement(n.Z, { "aria-label": e, disabled: o, interactive: y, interactiveStyles: y ? w : void 0, link: p, onClick: h, style: [l.root, t] }, v);
                };
        },
        953035: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                a = o(715417),
                i = o(167630),
                n = o(731708),
                s = o(392237),
                l = o(165822);
            const c = s.default.create((e) => {
                    const t = `calc(2 * ${e.spaces.space32})`;
                    return { upper: { height: t, justifyContent: "flex-end" }, lower: { height: t, justifyContent: "flex-start" }, container: { alignItems: "center" }, icon: { height: e.spaces.space32, width: e.spaces.space32 }, compact: { height: "auto", marginTop: e.spaces.space8 } };
                }),
                d = ({ containerStyle: e, icon: t = a.default, iconColor: o = "primary", link: d, onClick: p, text: u, isCompact: h, disabled: m, isLoading: g, withInteractiveStyling: f, interactiveStyles: b, textStyle: y }) => {
                    const w = r.useMemo(() => ({ color: s.default.theme.colors[o] }), [o]);
                    return r.createElement(l.Z, { "aria-label": u, containerStyle: [c.container, e], disabled: m, interactiveStyles: b, isCompact: h, link: d, lower: g ? r.createElement(i.Z, { size: "small" }) : r.createElement(n.ZP, { style: [y, w] }, u), onClick: p, stackLayoutLowerStyle: [c.lower, h ? c.compact : null], stackLayoutUpperStyle: c.upper, upper: r.createElement(t, { style: [c.icon, w] }), withInteractiveStyling: f });
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        19197: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M20 7H4V5h16v2zm-.004 6h-16v-2h16v2zM20 19H4v-2h16v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        913315: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                a = o(890601),
                i = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => a, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (o, r, a) => {
                        const i = t ? t(r, a, e) : !!r;
                        return i && o[0].push(r), !i && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-bc6ccf4c.1961312a.js.map
