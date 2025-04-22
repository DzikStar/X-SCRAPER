(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-6107ac1a"],
    {
        362075: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var o = r(807896),
                n = r(202784),
                i = r(325686),
                a = r(688715),
                l = r(950822),
                s = r(386802),
                c = r(392237);
            class d extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = n.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: r } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return r ? r(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let o;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    o = JSON.parse(e.data);
                                } catch (t) {
                                    return void (r && r(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(o);
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: r, dangerouslyDisableSandbox: o, src: s, style: c, title: d } = this.props,
                        { isModal: p } = this.context,
                        f = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, l.Z)("iframe", { allow: `${f.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, a.ju)(s), style: u.iframe, title: d, ...(o ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${r ? " allow-top-navigation" : ""}` }) });
                    return n.createElement(i.Z, { style: p ? [u.root, u.modalPadding, c] : [u.root, c] }, m);
                }
            }
            d.contextType = s.t;
            const u = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                p = n.forwardRef((e, t) => n.createElement(d, (0, o.Z)({ forwardedRef: t }, e)));
        },
        779610: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(325686),
                i = r(191796),
                a = r(58399),
                l = r(731708),
                s = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: p = !1, label: f, link: m, onPress: h, paddingHorizontal: y, renderRightContent: b, role: g = "tab", styleOverride: v, testID: w = "pivot", thumbnail: E, thumbnailSize: S, withoutArrow: x = !1 } = e,
                        C = [u.thumbnailContainer, "medium" === S && u.thumbnailContainerMedium],
                        k = "string" == typeof f ? o.createElement(l.ZP, null, f) : f,
                        I = "object" == typeof m && m.external && !m.openInSameFrame,
                        O = r ? ("string" == typeof r ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${w}-description` }, r) : r) : null,
                        P = o.useMemo(() => ("space0" === y ? { paddingHorizontal: 0 } : { paddingHorizontal: y ? c.default.theme.spaces[y] : c.default.theme.componentDimensions.gutterHorizontal }), [y]);
                    return o.createElement(s.Z, { "aria-selected": "tab" === g ? p : null, disabled: d, link: d ? void 0 : m, onPress: h, role: g, style: [u.root, P, d && u.disabled, v], testID: w, withInteractiveStyling: !!m || !!h }, o.createElement(n.Z, { style: u.contentContainer }, E ? o.createElement(n.Z, { style: C }, E) : null, o.createElement(n.Z, { style: u.content }, k, O), b ? b() : null, (!m && !h) || d || x ? null : I ? o.createElement(i.default, { style: u.icon }) : o.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        403556: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => k });
            var o = r(807896),
                n = r(202784),
                i = r(194504),
                a = r(235902),
                l = r(392237),
                s = r(325686),
                c = r(674132),
                d = r.n(c),
                u = r(912021),
                p = r(516951),
                f = r(731708),
                m = r(310088),
                h = r(175993),
                y = r(58881),
                b = r(530732);
            const g = d().d2414d31,
                v = () => d().ce4e85ae,
                w = d().fb9f6f39;
            class E extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, u.Z)((e, t) => {
                            const { pathname: r, query: o, state: n } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: r, query: o, method: "push", state: { ...n, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, r, o) => {
                            const n = l.default.theme.colors.text,
                                i = l.default.theme.colors.gray700;
                            return r || o ? (e || t ? n : i) : e ? n : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: r, badgePip: o, children: i, color: a, isActive: c, isCompact: d, isPillLink: u, isRoundedRect: p, isWebRedesign: h, retainScrollPosition: E, style: x, to: C } = this.props,
                        { location: k } = this.state,
                        I = C ? this._getMemoizedLink(C, E) : void 0,
                        O = c ? c(C) : k?.pathname === I?.pathname,
                        P = y.Z.generate({ backgroundColor: "transparent", color: l.default.theme.colors.text, insetFocusRing: !0 }),
                        _ = h ? "medium" : O ? "bold" : "medium";
                    return n.createElement(b.Z, { "aria-label": t, "aria-selected": O, focusable: !!O, interactiveStyles: P, link: I, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [u ? S.pill : S.link, u && O ? S.active : null, d ? (u ? S.compactPill : S.compactLink) : null, p ? S.roundedRect : null, x], withoutInteractiveStyles: h || u }, ({ isFocused: t, isHovered: c }) => n.createElement(s.Z, { style: u && S.flexGrow }, n.createElement(f.ZP, { size: h ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(O, c, h, u) }, d && S.compactText, h && t && S.focusedText], weight: _ }, e && n.createElement(e, { style: S.icon }), i, h || u ? null : n.createElement(s.Z, { style: O && [S.border, { backgroundColor: l.default.theme.colors[a] }] })), r ? n.createElement(m.Z, { count: r, standalone: !0, style: [S.badge, r >= 10 && S.multiDigitBadge, r >= 20 && S.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: g, withBorder: !1 }) : o ? n.createElement(m.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: v, withBorder: !1 }) : null));
                }
            }
            (E.contextType = h.Z), (E.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = l.default.create((e) => ({
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
                x = E,
                C = l.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: r, isPillLink: l, isRoundedRect: s, links: c, style: d, visibleItemIndex: u }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: f } = a.ZP.useProps(),
                        m = f() && !l,
                        h = n.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...a }, c) => {
                                    const d = m ? [C.linkRedesign, 0 === c && C.firstLinkRedesign, e && 0 === c && C.withNoPaddingStart] : void 0;
                                    return n.createElement(x, (0, o.Z)({ viewType: i }, a, { isCompact: r, isPillLink: l, isRoundedRect: s, isWebRedesign: m, style: d }), t);
                                }),
                            [e, r, l, s, m, c],
                        );
                    return n.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: l && C.gap, childrenStyle: !m && C.flexGrow, key: p, style: [l ? null : C.segmentedControl, m && C.leftAligned, d], visibleItemIndex: u }, h);
                };
        },
        165822: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => c });
            var o = r(202784),
                n = r(325686),
                i = r(58881),
                a = r(530732),
                l = r(392237);
            const s = l.default.create((e) => ({ root: { padding: e.spaces.space12, borderRadius: e.borderRadii.large }, defaultLowerContainerStyle: { marginTop: e.spaces.space12, justifyContent: "flex-end" }, defaultUpperContainerStyle: { height: `calc(${e.spaces.space48}*2)`, overflow: "hidden", borderRadius: e.borderRadii.large } })),
                c = ({ "aria-label": e, containerStyle: t, disabled: r, isCompact: c, link: d, lower: u, onClick: p, stackLayoutLowerStyle: f, stackLayoutUpperStyle: m, upper: h, withInsetFocusRing: y = !0, withInteractiveStyling: b = !1 }) => {
                    const g = i.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, insetFocusRing: y }),
                        v = o.createElement(o.Fragment, null, o.createElement(n.Z, { style: [s.defaultUpperContainerStyle, m, c && { height: "auto" }] }, h), u ? o.createElement(n.Z, { style: [s.defaultLowerContainerStyle, f] }, u) : null);
                    return o.createElement(a.Z, { "aria-label": e, disabled: r, interactive: b, interactiveStyles: b ? g : void 0, link: d, onClick: p, style: [s.root, t] }, v);
                };
        },
        953035: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(715417),
                i = r(167630),
                a = r(731708),
                l = r(392237),
                s = r(165822);
            const c = l.default.create((e) => {
                    const t = `calc(2 * ${e.spaces.space32})`;
                    return { upper: { height: t, justifyContent: "flex-end" }, lower: { height: t, justifyContent: "flex-start" }, container: { alignItems: "center" }, icon: { height: e.spaces.space32, width: e.spaces.space32 }, compact: { height: "auto" } };
                }),
                d = ({ containerStyle: e, icon: t = n.default, iconColor: r = "primary", link: d, onClick: u, text: p, isCompact: f, disabled: m, isLoading: h, withInteractiveStyling: y }) => {
                    const b = o.useMemo(() => ({ color: l.default.theme.colors[r] }), [r]);
                    return o.createElement(s.Z, { "aria-label": p, containerStyle: [c.container, e], disabled: m, isCompact: f, link: d, lower: h ? o.createElement(i.Z, { size: "small" }) : o.createElement(a.ZP, { style: b }, p), onClick: u, stackLayoutLowerStyle: [c.lower, f ? c.compact : null], stackLayoutUpperStyle: c.upper, upper: o.createElement(t, { style: [c.icon, b] }), withInteractiveStyling: y });
                };
        },
        183806: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        40567: function (e, t, r) {
            !(function (e, t) {
                "use strict";
                var o = "default" in t ? t.default : t;
                function n(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var o = Object.getOwnPropertySymbols(e);
                        t &&
                            (o = o.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            r.push.apply(r, o);
                    }
                    return r;
                }
                function i(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? n(Object(r), !0).forEach(function (t) {
                                  a(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                              : n(Object(r)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                });
                    }
                    return e;
                }
                function a(e, t, r) {
                    return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                }
                function l(e, t) {
                    if (null == e) return {};
                    var r,
                        o,
                        n = {},
                        i = Object.keys(e);
                    for (o = 0; o < i.length; o++) (r = i[o]), t.indexOf(r) >= 0 || (n[r] = e[r]);
                    return n;
                }
                function s(e, t) {
                    if (null == e) return {};
                    var r,
                        o,
                        n = l(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (o = 0; o < i.length; o++) (r = i[o]), t.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]));
                    }
                    return n;
                }
                function c(e, t) {
                    return d(e) || u(e, t) || p(e, t) || m();
                }
                function d(e) {
                    if (Array.isArray(e)) return e;
                }
                function u(e, t) {
                    var r = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != r) {
                        var o,
                            n,
                            i = [],
                            a = !0,
                            l = !1;
                        try {
                            for (r = r.call(e); !(a = (o = r.next()).done) && (i.push(o.value), !t || i.length !== t); a = !0);
                        } catch (e) {
                            (l = !0), (n = e);
                        } finally {
                            try {
                                a || null == r.return || r.return();
                            } finally {
                                if (l) throw n;
                            }
                        }
                        return i;
                    }
                }
                function p(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? f(e, t) : void 0;
                    }
                }
                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, o = new Array(t); r < t; r++) o[r] = e[r];
                    return o;
                }
                function m() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var h = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== r.g ? r.g : "undefined" != typeof self ? self : {};
                function y(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                }
                function b(e, t) {
                    return e((t = { exports: {} }), t.exports), t.exports;
                }
                var g = b(function (e, t) {
                    var r =
                        (h && h.__rest) ||
                        function (e, t) {
                            var r = {};
                            for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var n = 0;
                                for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]]);
                            }
                            return r;
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.scripts = void 0), (t.scripts = {});
                    var n = function (e) {
                        var r = document.querySelector('script[src="' + e + '"]');
                        if (r) return (t.scripts[e] = { loading: !1, error: null, scriptEl: r });
                    };
                    function i(e) {
                        var i = e.src,
                            l = e.checkForExisting,
                            s = void 0 !== l && l,
                            c = r(e, ["src", "checkForExisting"]),
                            d = i ? t.scripts[i] : void 0;
                        !d && s && i && a && (d = n(i));
                        var u = (0, o.useState)(d ? d.loading : Boolean(i)),
                            p = u[0],
                            f = u[1],
                            m = (0, o.useState)(d ? d.error : null),
                            h = m[0],
                            y = m[1];
                        return (
                            (0, o.useEffect)(
                                function () {
                                    if (a && i && p && !h) {
                                        var e;
                                        !(d = t.scripts[i]) && s && (d = n(i)),
                                            d
                                                ? (e = d.scriptEl)
                                                : (((e = document.createElement("script")).src = i),
                                                  Object.keys(c).forEach(function (t) {
                                                      void 0 === e[t] ? e.setAttribute(t, c[t]) : (e[t] = c[t]);
                                                  }),
                                                  (d = t.scripts[i] = { loading: !0, error: null, scriptEl: e }));
                                        var r = function () {
                                                d && (d.loading = !1), f(!1);
                                            },
                                            o = function (e) {
                                                d && (d.error = e), y(e);
                                            };
                                        return (
                                            e.addEventListener("load", r),
                                            e.addEventListener("error", o),
                                            document.body.appendChild(e),
                                            function () {
                                                e.removeEventListener("load", r), e.removeEventListener("error", o);
                                            }
                                        );
                                    }
                                },
                                [i],
                            ),
                            [p, h]
                        );
                    }
                    t.default = i;
                    var a = "undefined" != typeof window && void 0 !== window.document;
                });
                y(g), g.scripts;
                var v = b(function (e, t) {
                        var r =
                            (h && h.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.scripts = t.default = void 0),
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                get: function () {
                                    return r(g).default;
                                },
                            }),
                            Object.defineProperty(t, "scripts", {
                                enumerable: !0,
                                get: function () {
                                    return g.scripts;
                                },
                            });
                    }),
                    w = y(v),
                    E =
                        (v.scripts,
                        function (e, t, r) {
                            var o = {};
                            return delete Object.assign(o, e, a({}, r, e[t]))[t], o;
                        }),
                    S = function (e, t) {
                        var r = { plaid: null, open: !1, onExitCallback: null };
                        if ("undefined" == typeof window || !window.Plaid) throw new Error("Plaid not loaded");
                        return (
                            (r.plaid = t(
                                i(
                                    i({}, e),
                                    {},
                                    {
                                        onExit: function (t, o) {
                                            (r.open = !1), e.onExit && e.onExit(t, o), r.onExitCallback && r.onExitCallback();
                                        },
                                    },
                                ),
                            )),
                            {
                                open: function () {
                                    r.plaid && ((r.open = !0), (r.onExitCallback = null), r.plaid.open());
                                },
                                exit: function (e, t) {
                                    r.open && r.plaid ? ((r.onExitCallback = t), r.plaid.exit(e), e && e.force && (r.open = !1)) : t && t();
                                },
                                destroy: function () {
                                    r.plaid && (r.plaid.destroy(), (r.plaid = null));
                                },
                            }
                        );
                    },
                    x = function (e, t) {
                        var r = E(e, "publicKey", "key");
                        return S(r, t);
                    },
                    C = "https://cdn.plaid.com/link/v2/stable/link-initialize.js",
                    k = function () {},
                    I = function (e) {
                        var r = c(w({ src: C, checkForExisting: !0 }), 2),
                            o = r[0],
                            n = r[1],
                            a = c(t.useState(null), 2),
                            l = a[0],
                            s = a[1],
                            d = c(t.useState(!1), 2),
                            u = d[0],
                            p = d[1],
                            f = (e.product || []).slice().sort().join(",");
                        t.useEffect(
                            function () {
                                if (!o && (e.token || e.publicKey || e.receivedRedirectUri) && !n && window.Plaid) {
                                    null != l &&
                                        l.exit({ force: !0 }, function () {
                                            return l.destroy();
                                        });
                                    var t = x(
                                        i(
                                            i({}, e),
                                            {},
                                            {
                                                onLoad: function () {
                                                    p(!0), e.onLoad && e.onLoad();
                                                },
                                            },
                                        ),
                                        window.Plaid.create,
                                    );
                                    return (
                                        s(t),
                                        function () {
                                            return t.exit({ force: !0 }, function () {
                                                return t.destroy();
                                            });
                                        }
                                    );
                                }
                            },
                            [o, n, e.publicKey, e.token, f],
                        );
                        var m = function () {
                            e.token;
                        };
                        return { error: n, ready: null != l && (!o || u), exit: l ? l.exit : k, open: l ? l.open : m };
                    },
                    O = ["children", "style", "className"],
                    P = function (e) {
                        var t = e.children,
                            r = e.style,
                            n = e.className,
                            a = s(e, O),
                            l = I(i({}, a)),
                            c = l.error,
                            d = l.open;
                        return o.createElement(
                            "button",
                            {
                                disabled: Boolean(c),
                                type: "button",
                                className: n,
                                style: i({ padding: "6px 4px", outline: "none", background: "#FFFFFF", border: "2px solid #F1F1F1", borderRadius: "4px" }, r),
                                onClick: function () {
                                    return d();
                                },
                            },
                            t,
                        );
                    };
                P.displayName = "PlaidLink";
                var _,
                    R = ["style", "className"],
                    L = function (e) {
                        var r = e.style,
                            n = e.className,
                            a = s(e, R),
                            l = c(w({ src: C, checkForExisting: !0 }), 2),
                            d = l[0],
                            u = l[1],
                            p = t.useRef(null);
                        return (
                            t.useEffect(
                                function () {
                                    if (!d && !u && window.Plaid && null != a.token && "" != a.token) {
                                        var e = window.Plaid.createEmbedded(i({}, a), p.current).destroy;
                                        return function () {
                                            e();
                                        };
                                    }
                                },
                                [d, u, a, p],
                            ),
                            o.createElement("div", { style: r, className: n, ref: p })
                        );
                    };
                ((_ = e.PlaidLinkStableEvent || (e.PlaidLinkStableEvent = {})).OPEN = "OPEN"), (_.EXIT = "EXIT"), (_.HANDOFF = "HANDOFF"), (_.SELECT_INSTITUTION = "SELECT_INSTITUTION"), (_.ERROR = "ERROR"), (_.BANK_INCOME_INSIGHTS_COMPLETED = "BANK_INCOME_INSIGHTS_COMPLETED"), (_.IDENTITY_VERIFICATION_PASS_SESSION = "IDENTITY_VERIFICATION_PASS_SESSION"), (_.IDENTITY_VERIFICATION_FAIL_SESSION = "IDENTITY_VERIFICATION_FAIL_SESSION"), (e.PlaidEmbeddedLink = L), (e.PlaidLink = P), (e.usePlaidLink = I), Object.defineProperty(e, "__esModule", { value: !0 });
            })(t, r(202784));
        },
        500200: (e, t, r) => {
            "use strict";
            var o = r(588386),
                n = r(151210),
                i = r(606161).loadQuery,
                a = r(982317),
                l = r(490434),
                s = r(265933),
                c = r(277660),
                d = r(712696),
                u = r(351743),
                p = r(598),
                f = r(928123),
                m = r(72845),
                h = r(463836),
                y = r(437429),
                b = r(353391),
                g = r(19663),
                v = r(703383);
            e.exports = { ConnectionHandler: v.ConnectionHandler, applyOptimisticMutation: v.applyOptimisticMutation, commitLocalUpdate: v.commitLocalUpdate, commitMutation: v.commitMutation, graphql: v.graphql, readInlineData: v.readInlineData, requestSubscription: v.requestSubscription, EntryPointContainer: o, RelayEnvironmentProvider: l, ProfilerContext: a, fetchQuery: v.fetchQuery, loadQuery: i, loadEntryPoint: n, useFragment: c, useLazyLoadQuery: d, useEntryPointLoader: s, useQueryLoader: m, useMutation: u, usePaginationFragment: p, usePreloadedQuery: f, useRefetchableFragment: h, useRelayEnvironment: y, useSubscribeToInvalidationState: b, useSubscription: g };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-6107ac1a.6879452a.js.map
