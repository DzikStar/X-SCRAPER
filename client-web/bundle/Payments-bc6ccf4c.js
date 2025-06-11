"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-bc6ccf4c", "icons/IconExiting-js", "icons/IconEye-js", "icons/IconQrCode-js", "icons/IconUnlockStroke-js"],
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
            o.d(t, { Z: () => u });
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
                        { isModal: u } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, l.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, n.ju)(s), style: p.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return i.createElement(a.Z, { style: u ? [p.root, p.modalPadding, c] : [p.root, c] }, m);
                }
            }
            d.contextType = s.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                u = i.forwardRef((e, t) => i.createElement(d, (0, r.Z)({ forwardedRef: t }, e)));
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
                    const { decoration: t, description: o, disabled: d = !1, isActive: u = !1, label: h, link: m, onPress: g, paddingHorizontal: f, renderRightContent: b, role: y = "tab", styleOverride: v, testID: w = "pivot", thumbnail: C, thumbnailSize: x, withoutArrow: S = !1 } = e,
                        k = [p.thumbnailContainer, "medium" === x && p.thumbnailContainerMedium],
                        Z = "string" == typeof h ? r.createElement(l.ZP, null, h) : h,
                        E = "object" == typeof m && m.external && !m.openInSameFrame,
                        R = o ? ("string" == typeof o ? r.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, o) : o) : null,
                        z = r.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : m, onPress: g, role: y, style: [p.root, z, d && p.disabled, v], testID: w, withInteractiveStyling: !!m || !!g }, r.createElement(i.Z, { style: p.contentContainer }, C ? r.createElement(i.Z, { style: k }, C) : null, r.createElement(i.Z, { style: p.content }, Z, R), b ? b() : null, (!m && !g) || d || S ? null : E ? r.createElement(a.default, { style: p.icon }) : r.createElement(n.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
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
                u = o(516951),
                h = o(731708),
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
                        (this._unlisten = u.Z),
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: a, color: n, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: C, style: S, to: k } = this.props,
                        { location: Z } = this.state,
                        E = k ? this._getMemoizedLink(k, C) : void 0,
                        R = c ? c(k) : Z?.pathname === E?.pathname,
                        z = f.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? x.pillHoverStyle.backgroundColor : void 0 }),
                        I = g ? "medium" : R ? "bold" : "medium";
                    return i.createElement(b.Z, { "aria-label": t, "aria-selected": R, focusable: !!R, interactiveStyles: z, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [x.pillStyle] : [x.link]), ...(p && R ? [x.pillActiveStyle] : []), d ? (p ? x.compactPill : x.compactLink) : null, u ? x.roundedRect : null, S], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(s.Z, { style: p && x.flexGrow }, i.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [x.text, { color: this._getTextColor(R, c, g, p) }, d && x.compactText, g && t && x.focusedText, p && x.pillTextStyle, p && R && x.pillActiveTextStyle, p && c && x.pillHoverTextStyle], weight: I }, e && i.createElement(e, { style: x.icon }), a, g || p ? null : i.createElement(s.Z, { style: R && [x.border, { backgroundColor: l.default.theme.colors[n] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [x.badge, o >= 10 && x.multiDigitBadge, o >= 20 && x.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : r ? i.createElement(m.Z, { pip: !0, standalone: !0, style: x.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
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
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = n.ZP.useProps(),
                        m = h() && !l,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...n }, c) => {
                                    const d = m ? [k.linkRedesign, 0 === c && k.firstLinkRedesign, e && 0 === c && k.withNoPaddingStart] : void 0;
                                    return i.createElement(S, (0, r.Z)({ viewType: a }, n, { isCompact: o, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, l, s, m, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: l && k.gap, childrenStyle: !m && k.flexGrow, key: u, style: [l ? null : k.segmentedControl, m && k.leftAligned, d], visibleItemIndex: p }, g);
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
                c = ({ "aria-label": e, containerStyle: t, disabled: o, interactiveStyles: c, isCompact: d, link: p, lower: u, onClick: h, stackLayoutLowerStyle: m, stackLayoutUpperStyle: g, upper: f, withInsetFocusRing: b = !0, withInteractiveStyling: y = !1 }) => {
                    const v = c ?? a.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, insetFocusRing: b }),
                        w = r.createElement(r.Fragment, null, r.createElement(i.Z, { style: [s.defaultUpperContainerStyle, g, d && { height: "auto" }] }, f), u ? r.createElement(i.Z, { style: [s.defaultLowerContainerStyle, m] }, u) : null);
                    return r.createElement(n.Z, { "aria-label": e, disabled: o, interactive: y, interactiveStyles: y ? v : void 0, link: p, onClick: h, style: [s.root, t] }, w);
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
                d = ({ containerStyle: e, icon: t = i.default, iconColor: o = "primary", link: d, onClick: p, text: u, isCompact: h, disabled: m, isLoading: g, withInteractiveStyling: f, interactiveStyles: b, textStyle: y }) => {
                    const v = r.useMemo(() => ({ color: l.default.theme.colors[o] }), [o]);
                    return r.createElement(s.Z, { "aria-label": u, containerStyle: [c.container, e], disabled: m, interactiveStyles: b, isCompact: h, link: d, lower: g ? r.createElement(a.Z, { size: "small" }) : r.createElement(n.ZP, { style: [y, v] }, u), onClick: p, stackLayoutLowerStyle: [c.lower, h ? c.compact : null], stackLayoutUpperStyle: c.upper, upper: r.createElement(t, { style: [c.icon, v] }), withInteractiveStyling: f });
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
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
        988227: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        913408: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M13 3v8h8V3h-8zm6 6h-4V5h4v4zM3 21h8v-8H3v8zm2-6h4v4H5v-4zm-2-4h8V3H3v8zm2-6h4v4H5V5zm10.75 10.5H21V21h-2.75v-2.75h-2.5v-2.5H13V13h2.75v2.5zM13 18.25h2.75V21H13v-2.75z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        452693: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        777217: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11.4 2.041c-1.14.14-2.202.673-3.01 1.514-.65.676-1.079 1.491-1.295 2.465-.058.259-.075.584-.093 1.713L6.98 9.126l-.26.091c-1.37.48-2.35 1.599-2.637 3.01C4.004 12.615 4 12.76 4 15.5s.004 2.885.083 3.273c.228 1.119.902 2.078 1.873 2.663.329.199.854.396 1.287.485.375.076.557.079 4.757.079s4.382-.003 4.757-.079c1.36-.278 2.436-1.166 2.947-2.433.075-.188.173-.516.217-.731.074-.367.079-.554.079-3.257s-.005-2.89-.079-3.257c-.293-1.437-1.284-2.563-2.676-3.039-.568-.195-.77-.204-4.638-.204H8.993l.016-1.27c.016-1.212.021-1.285.115-1.591.294-.956 1.063-1.724 2.015-2.014.416-.126 1.215-.142 1.614-.031.73.202 1.358.655 1.76 1.269.153.235.234.417.427.969.311.883 1.586.875 1.873-.013.087-.269.085-.351-.018-.716-.229-.82-.635-1.498-1.27-2.123-.753-.741-1.595-1.199-2.541-1.382-.402-.077-1.185-.105-1.584-.057m5.123 9.032c.689.18 1.272.787 1.418 1.476.085.399.085 5.503 0 5.902-.078.37-.231.64-.541.953-.281.286-.546.442-.908.536-.343.09-8.641.09-8.984 0-.685-.178-1.259-.746-1.435-1.417-.061-.236-.069-.546-.071-2.995-.002-3.045 0-3.076.263-3.514.281-.471.723-.813 1.212-.941.241-.063.625-.068 4.523-.068s4.282.005 4.523.068m-4.828 1.984c-.229.072-.439.242-.567.459l-.108.184v3.606l.121.197c.402.653 1.316.653 1.718 0l.121-.197V13.7l-.108-.184c-.244-.415-.722-.601-1.177-.459" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-bc6ccf4c.252ceeca.js.map
