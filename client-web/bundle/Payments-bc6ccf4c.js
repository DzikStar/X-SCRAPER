"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-bc6ccf4c", "icons/IconChevronDown-js", "icons/IconExiting-js", "icons/IconFeedback-js", "icons/IconVideoExpand-js"],
    {
        661810: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(202784),
                i = o(325686),
                a = o(392237);
            function n({ spacing: e, style: t }) {
                return r.createElement(i.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        362075: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                i = o(202784),
                a = o(325686),
                n = o(688715),
                l = o(950822),
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
                        m = (0, l.Z)("iframe", { allow: `${u.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, n.ju)(s), style: p.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
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
                n = o(58399),
                l = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: h = !1, label: u, link: m, onPress: g, paddingHorizontal: f, renderRightContent: b, role: y = "tab", styleOverride: w, testID: v = "pivot", thumbnail: C, thumbnailSize: x, withoutArrow: S = !1 } = e,
                        k = [p.thumbnailContainer, "medium" === x && p.thumbnailContainerMedium],
                        Z = "string" == typeof u ? r.createElement(l.ZP, null, u) : u,
                        E = "object" == typeof m && m.external && !m.openInSameFrame,
                        R = o ? ("string" == typeof o ? r.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${v}-description` }, o) : o) : null,
                        W = r.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === y ? h : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [p.root, W, d && p.disabled, w], testID: v, withInteractiveStyling: !!m || !!g }, r.createElement(i.Z, { style: p.contentContainer }, C ? r.createElement(i.Z, { style: k }, C) : null, r.createElement(i.Z, { style: p.content }, Z, R), b ? b() : null, (!m && !g) || d || S ? null : E ? r.createElement(a.default, { style: p.icon }) : r.createElement(n.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        776588: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                i = o(325686),
                a = o(392237);
            const n = a.default.create((e) => ({ root: { display: "flex", flexDirection: "row", flexWrap: "nowrap", overflow: "hidden", width: "100%" }, borderRadius: { borderRadius: e.borderRadii.infinite }, lineWrap: { flexWrap: "wrap", overflow: "visible" }, word: { backgroundColor: e.colors.gray300, height: e.spaces.space4 }, wordWrapper: { justifyContent: "center" } })),
                l = function ({ color: e, lineHeightPx: t, maxWidthPx: o, style: l, withBorderRadius: s, withLineWrap: c, wordHeightPx: d, wordPercentWidths: p, wordSpacingPx: h }) {
                    const u = r.useMemo(
                        () =>
                            p.map((o, l) => {
                                const c = h || a.default.theme.spaces.space4,
                                    u = l !== p.length - 1 ? c : 0,
                                    m = r.createElement(i.Z, { key: l, style: [n.word, { width: t ? "100%" : `${o}%` }, e && { backgroundColor: a.default.theme.colors[e] }, !t && { marginEnd: u }, s && n.borderRadius, !!d && { height: d }] });
                                return t ? r.createElement(i.Z, { key: l, style: [n.wordWrapper, t && { marginEnd: u }, { height: t, width: `${o}%` }] }, m) : m;
                            }),
                        [e, t, s, d, h, p],
                    );
                    return r.createElement(i.Z, { style: [n.root, c && n.lineWrap, { maxWidth: o || "none" }, l] }, u);
                };
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var r = o(807896),
                i = o(202784),
                a = o(194504),
                n = o(235902),
                l = o(392237),
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
                w = () => d().ce4e85ae,
                v = d().fb9f6f39;
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
                            const i = l.default.theme.colors.text,
                                a = l.default.theme.colors.gray700;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: a, color: n, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: C, style: S, to: k } = this.props,
                        { location: Z } = this.state,
                        E = k ? this._getMemoizedLink(k, C) : void 0,
                        R = c ? c(k) : Z?.pathname === E?.pathname,
                        W = f.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? x.pillHoverStyle.backgroundColor : void 0 }),
                        z = g ? "medium" : R ? "bold" : "medium";
                    return i.createElement(b.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: W, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [x.pillStyle] : [x.link]), ...(p && R ? [x.pillActiveStyle] : []), d ? (p ? x.compactPill : x.compactLink) : null, h ? x.roundedRect : null, S], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: p && x.flexGrow }, i.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(R, c, g, p) }, d && x.compactText, g && t && x.focusedText, p && x.pillTextStyle, p && R && x.pillActiveTextStyle, p && c && x.pillHoverTextStyle], weight: z }, e && i.createElement(e, { style: x.icon }), a, g || p ? null : i.createElement(s.Z, { style: R && [x.border, { backgroundColor: l.default.theme.colors[n] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: y, withBorder: !1 }) : r ? i.createElement(m.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: w, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const x = l.default.create((e) => ({
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
                k = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: p }) => {
                    const h = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = n.ZP.useProps(),
                        m = u() && !l,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...n }, c) => {
                                    const d = m ? [k.linkRedesign, 0 === c && k.firstLinkRedesign, e && 0 === c && k.withNoPaddingStart] : void 0;
                                    return i.createElement(S, (0, r.Z)({ viewType: a }, n, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, l, s, m, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: l && k.gap, childrenStyle: !m && k.flexGrow, key: h, style: [l ? null : k.segmentedControl, m && k.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        165822: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                i = o(325686),
                a = o(58881),
                n = o(530732),
                l = o(392237);
            const s = l.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: o, interactiveStyles: c, isCompact: d, link: p, lower: h, onClick: u, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: b = !0, withInteractiveStyling: y = !1 }) => {
                    const w = c ?? a.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, insetFocusRing: b }),
                        v = r.createElement(r.Fragment, null, r.createElement(i.Z, { style: [s.defaultUpperContainerStyle, g, d && { height: "auto" }] }, f), h ? r.createElement(i.Z, { style: [s.defaultLowerContainerStyle, m] }, h) : null);
                    return r.createElement(n.Z, { "aria-label": e, disabled: o, interactive: y, interactiveStyles: y ? w : void 0, link: p, onClick: u, style: [s.root, t] }, v);
                };
        },
        953035: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(715417),
                a = o(167630),
                n = o(731708),
                l = o(392237),
                s = o(165822);
            const c = l.default.create((e) => {
                    const t = `calc(2 * ${e.spaces.space32})`;
                    return { upper: { height: t, justifyContent: "flex-end" }, lower: { height: t, justifyContent: "flex-start" }, container: { alignItems: "center" }, icon: { height: e.spaces.space32, width: e.spaces.space32 }, compact: { height: "auto", marginTop: e.spaces.space8 } };
                }),
                d = ({ containerStyle: e, icon: t = i.default, iconColor: o = "primary", link: d, onClick: p, text: h, isCompact: u, disabled: m, isLoading: g, withInteractiveStyling: f, interactiveStyles: b, textStyle: y }) => {
                    const w = r.useMemo(() => ({ color: l.default.theme.colors[o] }), [o]);
                    return r.createElement(s.Z, { "aria-label": h, containerStyle: [c.container, e], disabled: m, interactiveStyles: b, isCompact: u, link: d, lower: g ? r.createElement(a.Z, { size: "small" }) : r.createElement(n.ZP, { style: [y, w] }, h), onClick: p, stackLayoutLowerStyle: [c.lower, u ? c.compact : null], stackLayoutUpperStyle: c.upper, upper: r.createElement(t, { style: [c.icon, w] }), withInteractiveStyling: f });
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        487552: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3.543 8.96l1.414-1.42L12 14.59l7.043-7.05 1.414 1.42L12 17.41 3.543 8.96z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        297896: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        790093: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        177826: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.12 4.12 3 5.5 3H10v2H5.5c-.28 0-.5.22-.5.5V10H3V5.5zM14 3h4.5C19.88 3 21 4.12 21 5.5V10h-2V5.5c0-.28-.22-.5-.5-.5H14V3zM5 14v4.5c0 .28.22.5.5.5H10v2H5.5C4.12 21 3 19.88 3 18.5V14h2zm16 0v4.5c0 1.38-1.12 2.5-2.5 2.5H14v-2h4.5c.28 0 .5-.22.5-.5V14h2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-bc6ccf4c.be8ed72a.js.map
