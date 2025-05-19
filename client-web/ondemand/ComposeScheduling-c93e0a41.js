"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-c93e0a41"],
    {
        98538: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(325686),
                a = n(731708),
                i = n(891198),
                s = n(280278),
                l = n(392237);
            const c = "subtext1",
                d = o.createContext({ onMedia: !1 });
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: r } = this.props;
                    return o.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: r }, o.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (p.Group = (e) =>
                o.createElement(
                    r.Z,
                    { style: [u.row, e.style] },
                    o.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => o.createElement(r.Z, { key: t, style: t < n.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => o.createElement(d.Consumer, null, ({ onMedia: n }) => o.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: n, style: r, weight: i = "bold" }) => o.createElement(d.Consumer, null, ({ onMedia: l }) => (e ? o.createElement(s.ZP, { children: t, count: n, size: c, style: r, weight: i }) : o.createElement(a.ZP, { children: t, color: l ? "white" : "text", size: c, style: r, weight: i }))));
            const u = l.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = p;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(807896),
                r = n(202784),
                a = n(194504),
                i = n(235902),
                s = n(392237),
                l = n(325686),
                c = n(332920),
                d = n.n(c),
                p = n(912021),
                u = n(516951),
                h = n(731708),
                m = n(310088),
                g = n(175993),
                b = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                C = () => d().ce4e85ae,
                x = d().fb9f6f39;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: o, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: o, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, o) => {
                            const r = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
                            return n || o ? (e || t ? r : a) : e ? r : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: o, children: a, color: i, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: v, style: _, to: k } = this.props,
                        { location: E } = this.state,
                        P = k ? this._getMemoizedLink(k, v) : void 0,
                        Z = c ? c(k) : E?.pathname === P?.pathname,
                        S = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        T = g ? "medium" : Z ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: S, link: P, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? w.pill : w.link, p && Z ? w.active : null, d ? (p ? w.compactPill : w.compactLink) : null, u ? w.roundedRect : null, _], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: p && w.flexGrow }, r.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(Z, c, g, p) }, d && w.compactText, g && t && w.focusedText], weight: T }, e && r.createElement(e, { style: w.icon }), a, g || p ? null : r.createElement(l.Z, { style: Z && [w.border, { backgroundColor: s.default.theme.colors[i] }] })), n ? r.createElement(m.Z, { count: n, standalone: !0, style: [w.badge, n >= 10 && w.multiDigitBadge, n >= 20 && w.truncatedCountBadge], truncatedCountFormatter: x, unreadCountLabel: y, withBorder: !1 }) : o ? r.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (v.contextType = g.Z), (v.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const w = s.default.create((e) => ({
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
                _ = v,
                k = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = i.ZP.useProps(),
                        m = h() && !s,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...i }, c) => {
                                    const d = m ? [k.linkRedesign, 0 === c && k.firstLinkRedesign, e && 0 === c && k.withNoPaddingStart] : void 0;
                                    return r.createElement(_, (0, o.Z)({ viewType: a }, i, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, n, s, l, m, c],
                        );
                    return r.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && k.gap, childrenStyle: !m && k.flexGrow, key: u, style: [s ? null : k.segmentedControl, m && k.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        564619: (e, t, n) => {
            n.d(t, { Z: () => x });
            n(136728);
            var o = n(202784),
                r = n(325686),
                a = n(332920),
                i = n.n(a),
                s = n(323265),
                l = n(731708),
                c = n(855488),
                d = n(466818),
                p = n(392237);
            const u = (() => {
                    const e = {};
                    return (t) => {
                        const n = void 0 === t ? "undefined" : t.toString();
                        if (!e.hasOwnProperty(n)) {
                            const o = { use24HourTime: !!t, hourFormat: t ? "2-digit" : "numeric", minuteFormat: "2-digit" };
                            if ("object" == typeof window.Intl) {
                                const e = new window.Intl.DateTimeFormat("default", { hour12: void 0 === t ? void 0 : !t, hour: "numeric", minute: "numeric" }).resolvedOptions();
                                (o.use24HourTime = !e.hour12), (o.hourFormat = e.hour || o.hourFormat), (o.minuteFormat = e.minute || o.minuteFormat);
                            }
                            e[n] = o;
                        }
                        return e[n];
                    };
                })(),
                h = (e, t = 2, n = "0") => {
                    const o = n.repeat(t),
                        r = "number" == typeof e ? `${e}` : "";
                    return r.length >= t ? r : `${o}${r}`.slice(-t);
                },
                m = i().eb124f96,
                g = i().i7a6f114,
                b = i().ccc99ff2,
                f = [...Array(24).keys()],
                y = [...Array(13).keys()].slice(1),
                C = [...Array(60).keys()];
            class x extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { hour: t, minute: n, onChange: o } = this.props;
                            (e.hour === t && e.minute === n) || o(e);
                        }),
                        (this._handleNativeChange = (e) => {
                            const { value: t } = e.target;
                            this._handleChange(v.parse(t));
                        }),
                        (this._handleHourChange = (e) => {
                            const { use24HourTime: t } = this._getLocale(),
                                { hour: n, minute: o } = this.props;
                            let r;
                            e && ((r = parseInt(e, 10)), t || "number" != typeof n || (n > 12 ? (r = (r + 12) % 24) : (r %= 12))), this._handleChange(new v(r, o));
                        }),
                        (this._handleMinuteChange = (e) => {
                            const { hour: t } = this.props,
                                n = e ? parseInt(e, 10) : void 0;
                            this._handleChange(new v(t, n));
                        }),
                        (this._handleAmPmChange = (e) => {
                            let { hour: t } = this.props;
                            const { minute: n } = this.props;
                            switch (e) {
                                case "am":
                                    "number" == typeof t && t >= 12 && (t -= 12);
                                    break;
                                case "pm":
                                    "number" == typeof t && t < 12 && (t += 12);
                            }
                            this._handleChange(new v(t, n));
                        });
                }
                render() {
                    const { "aria-label": e, disabled: t, errorText: n, helperText: a, invalid: i, label: c, style: d } = this.props,
                        p = !!i,
                        u = s.ZP.isMobileOS();
                    return o.createElement(r.Z, { style: [t && w.disabled, d] }, o.createElement(r.Z, { "aria-label": e || c, role: "group" }, o.createElement(l.ZP, { color: "gray700" }, c), u ? o.createElement(r.Z, { style: w.containerNative }, this._renderNativeInput()) : o.createElement(r.Z, { style: w.containerSelectors }, this._renderSelectors())), o.createElement(r.Z, { style: w.subtextWrapper }, a ? this._renderHelperText() : null, p && n ? this._renderErrorText() : null));
                }
                _getLocale() {
                    const { use24HourTime: e } = this.props;
                    return u(e);
                }
                _getFields() {
                    const { hour: e, minute: t } = this.props,
                        { hour: n, minute: o } = new v(e, t),
                        { hourFormat: r, minuteFormat: a, use24HourTime: i } = this._getLocale(),
                        s = "number" == typeof n ? (n < 12 ? "am" : "pm") : void 0,
                        l = i ? f : y,
                        c = C,
                        d = "2-digit" === r ? 2 : 1,
                        p = "2-digit" === a ? 2 : 1,
                        u = [];
                    return (
                        u.push({ label: g, options: l.map((e) => ({ label: h(e, d), value: `${e}` })), onChange: this._handleHourChange, value: "number" == typeof n ? `${i ? n : n % 12 || 12}` : "", withEmptyOption: !0 }),
                        u.push({ label: b, options: c.map((e) => ({ label: h(e, p), value: `${e}` })), onChange: this._handleMinuteChange, value: "number" == typeof o ? `${o}` : "", withEmptyOption: !0 }),
                        i ||
                            u.push({
                                label: m,
                                options: [
                                    { label: "AM", value: "am" },
                                    { label: "PM", value: "pm" },
                                ],
                                onChange: this._handleAmPmChange,
                                value: void 0 !== s ? s : "",
                                withEmptyOption: void 0 === n || void 0 === o,
                            }),
                        u
                    );
                }
                _renderNativeInput() {
                    const { autoFocus: e, disabled: t, hour: n, label: r, minute: a } = this.props,
                        i = new v(n, a);
                    return o.createElement(c.Z, { autoCapitalize: "none", autoComplete: "off", autoCorrect: !1, autoFocus: e, editable: !t, label: r, name: "timeInput", numberOfLines: 1, onChange: this._handleNativeChange, spellCheck: "false", style: w.native, type: "time", value: i.toString() });
                }
                _renderSelectors() {
                    const { autoFocus: e, disabled: t, invalid: n } = this.props,
                        r = !!n,
                        a = this._getFields();
                    return o.createElement(
                        o.Fragment,
                        null,
                        a.map((n, a) => o.createElement(d.ZP, { autofocus: 0 === a ? e : void 0, disabled: t, hasError: r, key: n.label, label: n.label, onChange: n.onChange, options: n.options, value: n.value, withEmptyOption: n.withEmptyOption })),
                    );
                }
                _renderHelperText() {
                    const { helperText: e } = this.props;
                    return o.createElement(r.Z, { "aria-live": "polite" }, o.createElement(l.ZP, { color: "gray700", style: w.subtext }, e));
                }
                _renderErrorText() {
                    const { errorText: e } = this.props;
                    return o.createElement(r.Z, { "aria-live": "assertive" }, o.createElement(l.ZP, { color: "red500", style: w.subtext }, e));
                }
            }
            class v {
                constructor(e, t) {
                    const n = "number" == typeof e ? Math.max(Math.min(e, 23), 0) : void 0,
                        o = "number" == typeof t ? Math.max(Math.min(t, 59), 0) : void 0;
                    Object.defineProperty(this, "hour", { value: n, enumerable: !0 }), Object.defineProperty(this, "minute", { value: o, enumerable: !0 });
                }
                static parse(e) {
                    let t, n;
                    if (e && e.match(/^(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9])$/)) {
                        const [o, r] = e.split(":");
                        (t = parseInt(o, 10)), (n = parseInt(r, 10));
                    }
                    return new v(t, n);
                }
                toString() {
                    const e = "number" == typeof this.hour,
                        t = "number" == typeof this.minute;
                    return e && t ? `${h(this.hour)}:${h(this.minute)}` : "";
                }
            }
            const w = p.default.create((e) => ({ containerNative: { paddingTop: e.spaces.space2 }, containerSelectors: { display: "grid", gridColumnGap: e.spaces.space12, gridTemplateColumns: "1fr 1fr 1fr", paddingTop: e.spaces.space2 }, disabled: { cursor: "default", opacity: 0.5 }, native: { paddingVertical: 0, paddingHorizontal: 0 }, subtextWrapper: { flexDirection: "column", flex: 1 }, subtext: { paddingTop: e.spaces.space4 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-c93e0a41.21ef4b4a.js.map
