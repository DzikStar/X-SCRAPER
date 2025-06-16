"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-bc6ccf4c", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconInstitutionStroke-js", "icons/IconInterestStroke-js", "icons/IconSparkle-js"],
    {
        661810: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                i = o(325686),
                a = o(392237);
            function l({ spacing: e, style: t }) {
                return r.createElement(i.Z, { role: "separator", style: [n.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const n = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        362075: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                i = o(202784),
                a = o(325686),
                l = o(688715),
                n = o(950822),
                s = o(386802),
                c = o(392237);
            class d extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = i.createRef()),
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
                        { isModal: h } = this.context,
                        u = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, n.Z)("iframe", { allow: `${u.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, l.ju)(s), style: p.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return i.createElement(a.Z, { style: h ? [p.root, p.modalPadding, c] : [p.root, c] }, m);
                }
            }
            d.contextType = s.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                h = i.forwardRef((e, t) => i.createElement(d, (0, r.Z)({ forwardedRef: t }, e)));
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(325686),
                a = o(191796),
                l = o(58399),
                n = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: h = !1, label: u, link: m, onPress: g, paddingHorizontal: f, renderRightContent: b, role: y = "tab", styleOverride: v, testID: w = "pivot", thumbnail: C, thumbnailSize: x, withoutArrow: S = !1 } = e,
                        Z = [p.thumbnailContainer, "medium" === x && p.thumbnailContainerMedium],
                        k = "string" == typeof u ? r.createElement(n.ZP, null, u) : u,
                        E = "object" == typeof m && m.external && !m.openInSameFrame,
                        R = o ? ("string" == typeof o ? r.createElement(n.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, o) : o) : null,
                        z = r.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [p.root, z, d && p.disabled, v], testID: w, withInteractiveStyling: !!m || !!g }, r.createElement(i.Z, { style: p.contentContainer }, C ? r.createElement(i.Z, { style: Z }, C) : null, r.createElement(i.Z, { style: p.content }, k, R), b ? b() : null, (!m && !g) || d || S ? null : E ? r.createElement(a.default, { style: p.icon }) : r.createElement(l.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => k });
            var r = o(807896),
                i = o(202784),
                a = o(194504),
                l = o(235902),
                n = o(392237),
                s = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                h = o(516951),
                u = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                b = o(530732);
            const y = d().d2414d31,
                v = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class C extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: r, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: r, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = h.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, r) => {
                            const i = n.default.theme.colors.text,
                                a = n.default.theme.colors.gray700;
                            return o || r ? (e || t ? i : a) : e ? i : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: a, color: l, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: C, style: S, to: Z } = this.props,
                        { location: k } = this.state,
                        E = Z ? this._getMemoizedLink(Z, C) : void 0,
                        R = c ? c(Z) : k?.pathname === E?.pathname,
                        z = f.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? x.pillHoverStyle.backgroundColor : void 0 }),
                        I = g ? "medium" : R ? "bold" : "medium";
                    return i.createElement(b.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: z, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [x.pillStyle] : [x.link]), ...(p && R ? [x.pillActiveStyle] : []), d ? (p ? x.compactPill : x.compactLink) : null, h ? x.roundedRect : null, S], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: p && x.flexGrow }, i.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(R, c, g, p) }, d && x.compactText, g && t && x.focusedText, p && x.pillTextStyle, p && R && x.pillActiveTextStyle, p && c && x.pillHoverTextStyle], weight: I }, e && i.createElement(e, { style: x.icon }), a, g || p ? null : i.createElement(s.Z, { style: R && [x.border, { backgroundColor: n.default.theme.colors[l] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : r ? i.createElement(m.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = n.default.create((e) => ({
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
                S = C,
                Z = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: n, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = l.ZP.useProps(),
                        m = u() && !n,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...l }, c) => {
                                    const d = m ? [Z.linkRedesign, 0 === c && Z.firstLinkRedesign, e && 0 === c && Z.withNoPaddingStart] : void 0;
                                    return i.createElement(S, (0, r.Z)({ viewType: a }, l, { isCompact: o, isPillLink: n, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, n, s, m, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: n && Z.gap, childrenStyle: !m && Z.flexGrow, key: h, style: [n ? null : Z.segmentedControl, m && Z.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        165822: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                i = o(325686),
                a = o(58881),
                l = o(530732),
                n = o(392237);
            const s = n.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: o, interactiveStyles: c, isCompact: d, link: p, lower: h, onClick: u, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: b = !0, withInteractiveStyling: y = !1 }) => {
                    const v = c ?? a.Z.generate({ backgroundColor: n.default.theme.colors.transparent, color: n.default.theme.colors.primary, insetFocusRing: b }),
                        w = r.createElement(r.Fragment, null, r.createElement(i.Z, { style: [s.defaultUpperContainerStyle, g, d && { height: "auto" }] }, f), h ? r.createElement(i.Z, { style: [s.defaultLowerContainerStyle, m] }, h) : null);
                    return r.createElement(l.Z, { "aria-label": e, disabled: o, interactive: y, interactiveStyles: y ? v : void 0, link: p, onClick: u, style: [s.root, t] }, w);
                };
        },
        953035: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(715417),
                a = o(167630),
                l = o(731708),
                n = o(392237),
                s = o(165822);
            const c = n.default.create((e) => {
                    const t = `calc(2 * ${e.spaces.space32})`;
                    return { upper: { height: t, justifyContent: "flex-end" }, lower: { height: t, justifyContent: "flex-start" }, container: { alignItems: "center" }, icon: { height: e.spaces.space32, width: e.spaces.space32 }, compact: { height: "auto", marginTop: e.spaces.space8 } };
                }),
                d = ({ containerStyle: e, icon: t = i.default, iconColor: o = "primary", link: d, onClick: p, text: h, isCompact: u, disabled: m, isLoading: g, withInteractiveStyling: f, interactiveStyles: b, textStyle: y }) => {
                    const v = r.useMemo(() => ({ color: n.default.theme.colors[o] }), [o]);
                    return r.createElement(s.Z, { "aria-label": h, containerStyle: [c.container, e], disabled: m, interactiveStyles: b, isCompact: u, link: d, lower: g ? r.createElement(a.Z, { size: "small" }) : r.createElement(l.ZP, { style: [y, v] }, h), onClick: p, stackLayoutLowerStyle: [c.lower, u ? c.compact : null], stackLayoutUpperStyle: c.upper, upper: r.createElement(t, { style: [c.icon, v] }), withInteractiveStyling: f });
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        58399: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(717683),
                n = o(347101);
            const s = (e = {}) => {
                const t = r.useContext(l.Z),
                    { direction: o } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style, t && n.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: o });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        286555: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { clipRule: "evenodd", d: "M2 9.5h20V5.618L12 1.5 2 5.618zm18-2.543V7.5H4v-.543l8-3.294z", fillRule: "evenodd" }), r.createElement("path", { d: "M4 10.25h2v9H4zm4.667 0h2v9h-2zm6.666 0h-2v9h2zm2.667 0h2v9h-2zM2 20v2h20v-2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        913315: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 13h3.414l3.783-3.783 4.079 2.039 4.505-5.631-1.562-1.25-3.495 4.369-3.921-1.961L7.586 11H5V3H3v18h18v-2H5z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        264171: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        262009: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                l = o(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => i, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return i(e, t);
            };
            function i(e, t) {
                return e.reduce(
                    (o, r, i) => {
                        const a = t ? t(r, i, e) : !!r;
                        return a && o[0].push(r), !a && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-bc6ccf4c.7da88baa.js.map
