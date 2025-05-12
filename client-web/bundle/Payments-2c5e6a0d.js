"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-2c5e6a0d"],
    {
        362075: (e, t, o) => {
            o.d(t, { Z: () => u });
            var a = o(807896),
                n = o(202784),
                i = o(325686),
                s = o(688715),
                r = o(950822),
                l = o(386802),
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
                            let a;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    a = JSON.parse(e.data);
                                } catch (t) {
                                    return void (o && o(`Invalid postMessage data from ${e.origin}: ${e.data}`));
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: o, dangerouslyDisableSandbox: a, src: l, style: c, title: d } = this.props,
                        { isModal: u } = this.context,
                        m = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        h = (0, r.Z)("iframe", { allow: `${m.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, s.ju)(l), style: p.iframe, title: d, ...(a ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return n.createElement(i.Z, { style: u ? [p.root, p.modalPadding, c] : [p.root, c] }, h);
                }
            }
            d.contextType = l.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                u = n.forwardRef((e, t) => n.createElement(d, (0, a.Z)({ forwardedRef: t }, e)));
        },
        247056: (e, t, o) => {
            o.d(t, { Z: () => c });
            var a = o(202784),
                n = o(674132),
                i = o.n(n),
                s = o(149170),
                r = o(40644);
            const l = i().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: o = s.default, iconSize: n = "normal", isDisabled: i, onClick: c, preventFocusShift: d, renderActionMenu: p, style: u, testID: m, withDarkBackground: h = !1 }) {
                const g = a.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    f = a.useMemo(() => ({ label: t }), [t]);
                return a.createElement(r.ZP, { Icon: o, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: f, iconSize: n, isDisabled: i, onPress: g, preventFocusShift: d, renderMenu: p, style: u, testID: m });
            };
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                n = o(325686),
                i = o(191796),
                s = o(58399),
                r = o(731708),
                l = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: u = !1, label: m, link: h, onPress: g, paddingHorizontal: f, renderRightContent: b, role: y = "tab", styleOverride: w, testID: C = "pivot", thumbnail: x, thumbnailSize: k, withoutArrow: v = !1 } = e,
                        S = [p.thumbnailContainer, "medium" === k && p.thumbnailContainerMedium],
                        R = "string" == typeof m ? a.createElement(r.ZP, null, m) : m,
                        Z = "object" == typeof h && h.external && !h.openInSameFrame,
                        E = o ? ("string" == typeof o ? a.createElement(r.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, o) : o) : null,
                        I = a.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return a.createElement(l.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : h, onPress: g, role: y, style: [p.root, I, d && p.disabled, w], testID: C, withInteractiveStyling: !!h || !!g }, a.createElement(n.Z, { style: p.contentContainer }, x ? a.createElement(n.Z, { style: S }, x) : null, a.createElement(n.Z, { style: p.content }, R, E), b ? b() : null, (!h && !g) || d || v ? null : Z ? a.createElement(i.default, { style: p.icon }) : a.createElement(s.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => R });
            var a = o(807896),
                n = o(202784),
                i = o(194504),
                s = o(235902),
                r = o(392237),
                l = o(325686),
                c = o(674132),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                m = o(731708),
                h = o(310088),
                g = o(175993),
                f = o(58881),
                b = o(530732);
            const y = d().d2414d31,
                w = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class x extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: a, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: a, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, a) => {
                            const n = r.default.theme.colors.text,
                                i = r.default.theme.colors.gray700;
                            return o || a ? (e || t ? n : i) : e ? n : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: a, children: i, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: x, style: v, to: S } = this.props,
                        { location: R } = this.state,
                        Z = S ? this._getMemoizedLink(S, x) : void 0,
                        E = c ? c(S) : R?.pathname === Z?.pathname,
                        I = f.Z.generate({ backgroundColor: "transparent", color: r.default.theme.colors.text, insetFocusRing: !0 }),
                        P = g ? "medium" : E ? "bold" : "medium";
                    return n.createElement(b.Z, { "aria-label": t, "aria-selected": E, focusable: !!E, interactiveStyles: I, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? k.pill : k.link, p && E ? k.active : null, d ? (p ? k.compactPill : k.compactLink) : null, u ? k.roundedRect : null, v], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => n.createElement(l.Z, { style: p && k.flexGrow }, n.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(E, c, g, p) }, d && k.compactText, g && t && k.focusedText], weight: P }, e && n.createElement(e, { style: k.icon }), i, g || p ? null : n.createElement(l.Z, { style: E && [k.border, { backgroundColor: r.default.theme.colors[s] }] })), o ? n.createElement(h.Z, { count: o, standalone: !0, style: [k.badge, o >= 10 && k.multiDigitBadge, o >= 20 && k.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : a ? n.createElement(h.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (x.contextType = g.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = r.default.create((e) => ({
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
                v = x,
                S = r.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                R = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: r, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = s.ZP.useProps(),
                        h = m() && !r,
                        g = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...s }, c) => {
                                    const d = h ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return n.createElement(v, (0, a.Z)({ viewType: i }, s, { isCompact: o, isPillLink: r, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, o, r, l, h, c],
                        );
                    return n.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: r && S.gap, childrenStyle: !h && S.flexGrow, key: u, style: [r ? null : S.segmentedControl, h && S.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        165822: (e, t, o) => {
            o.d(t, { Z: () => c });
            var a = o(202784),
                n = o(325686),
                i = o(58881),
                s = o(530732),
                r = o(392237);
            const l = r.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: o, isCompact: c, link: d, lower: p, onClick: u, stackLayoutLowerStyle: m, stackLayoutUpperStyle: h, upper: g, withInsetFocusRing: f = !0, withInteractiveStyling: b = !1 }) => {
                    const y = i.Z.generate({ backgroundColor: r.default.theme.colors.transparent, color: r.default.theme.colors.primary, insetFocusRing: f }),
                        w = a.createElement(a.Fragment, null, a.createElement(n.Z, { style: [l.defaultUpperContainerStyle, h, c && { height: "auto" }] }, g), p ? a.createElement(n.Z, { style: [l.defaultLowerContainerStyle, m] }, p) : null);
                    return a.createElement(s.Z, { "aria-label": e, disabled: o, interactive: b, interactiveStyles: b ? y : void 0, link: d, onClick: u, style: [l.root, t] }, w);
                };
        },
        953035: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                n = o(715417),
                i = o(167630),
                s = o(731708),
                r = o(392237),
                l = o(165822);
            const c = r.default.create((e) => {
                    const t = `calc(2 * ${e.spaces.space32})`;
                    return { upper: { height: t, justifyContent: "flex-end" }, lower: { height: t, justifyContent: "flex-start" }, container: { alignItems: "center" }, icon: { height: e.spaces.space32, width: e.spaces.space32 }, compact: { height: "auto" } };
                }),
                d = ({ containerStyle: e, icon: t = n.default, iconColor: o = "primary", link: d, onClick: p, text: u, isCompact: m, disabled: h, isLoading: g, withInteractiveStyling: f }) => {
                    const b = a.useMemo(() => ({ color: r.default.theme.colors[o] }), [o]);
                    return a.createElement(l.Z, { "aria-label": u, containerStyle: [c.container, e], disabled: h, isCompact: m, link: d, lower: g ? a.createElement(i.Z, { size: "small" }) : a.createElement(s.ZP, { style: b }, u), onClick: p, stackLayoutLowerStyle: [c.lower, m ? c.compact : null], stackLayoutUpperStyle: c.upper, upper: a.createElement(t, { style: [c.icon, b] }), withInteractiveStyling: f });
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-2c5e6a0d.e4a4d36a.js.map
