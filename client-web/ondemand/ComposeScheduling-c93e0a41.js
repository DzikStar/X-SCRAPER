"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-c93e0a41"],
    {
        98538: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(202784),
                r = o(325686),
                i = o(731708),
                a = o(891198),
                s = o(280278),
                l = o(392237);
            const c = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: o, onPress: r } = this.props;
                    return n.createElement(i.ZP, { color: o ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: r }, n.createElement(d.Provider, { value: { onMedia: o } }, e));
                }
            }
            (p.Group = (e) =>
                n.createElement(
                    r.Z,
                    { style: [u.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, o) => n.createElement(r.Z, { key: t, style: t < o.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: o }) => n.createElement(i.ZP, { children: e, color: o ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: o, style: r, weight: a = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: l }) => (e ? n.createElement(s.ZP, { children: t, count: o, size: c, style: r, weight: a }) : n.createElement(i.ZP, { children: t, color: l ? "white" : "text", size: c, style: r, weight: a }))));
            const u = l.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = p;
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => k });
            var n = o(807896),
                r = o(202784),
                i = o(194504),
                a = o(235902),
                s = o(392237),
                l = o(325686),
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
                C = d().fb9f6f39;
            class v extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: o, query: n, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const r = s.default.theme.colors.text,
                                i = s.default.theme.colors.gray700;
                            return o || n ? (e || t ? r : i) : e ? r : i;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: i, color: a, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: v, style: _, to: S } = this.props,
                        { location: k } = this.state,
                        E = S ? this._getMemoizedLink(S, v) : void 0,
                        P = c ? c(S) : k?.pathname === E?.pathname,
                        T = b.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? w.pillHoverStyle.backgroundColor : void 0 }),
                        Z = g ? "medium" : P ? "bold" : "medium";
                    return r.createElement(f.Z, { "aria-label": t, "aria-selected": P, focusable: !!P, interactiveStyles: T, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [w.pillStyle] : [w.link]), ...(p && P ? [w.pillActiveStyle] : []), d ? (p ? w.compactPill : w.compactLink) : null, u ? w.roundedRect : null, _], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: p && w.flexGrow }, r.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [w.text, { color: this._getTextColor(P, c, g, p) }, d && w.compactText, g && t && w.focusedText, p && w.pillTextStyle, p && P && w.pillActiveTextStyle, p && c && w.pillHoverTextStyle], weight: Z }, e && r.createElement(e, { style: w.icon }), i, g || p ? null : r.createElement(l.Z, { style: P && [w.border, { backgroundColor: s.default.theme.colors[a] }] })), o ? r.createElement(m.Z, { count: o, standalone: !0, style: [w.badge, o >= 10 && w.multiDigitBadge, o >= 20 && w.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: y, withBorder: !1 }) : n ? r.createElement(m.Z, { pip: !0, standalone: !0, style: w.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
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
                _ = v,
                S = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                k = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = a.ZP.useProps(),
                        m = h() && !s,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: i, ...a }, c) => {
                                    const d = m ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return r.createElement(_, (0, n.Z)({ viewType: i }, a, { isCompact: o, isPillLink: s, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, s, l, m, c],
                        );
                    return r.createElement(i.Z, { "aria-label": t, buttonsContainerStyle: s && S.gap, childrenStyle: !m && S.flexGrow, key: u, style: [s ? null : S.segmentedControl, m && S.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        564619: (e, t, o) => {
            o.d(t, { Z: () => C });
            o(136728);
            var n = o(202784),
                r = o(325686),
                i = o(111677),
                a = o.n(i),
                s = o(323265),
                l = o(731708),
                c = o(855488),
                d = o(466818),
                p = o(392237);
            const u = (() => {
                    const e = {};
                    return (t) => {
                        const o = void 0 === t ? "undefined" : t.toString();
                        if (!e.hasOwnProperty(o)) {
                            const n = { use24HourTime: !!t, hourFormat: t ? "2-digit" : "numeric", minuteFormat: "2-digit" };
                            if ("object" == typeof window.Intl) {
                                const e = new window.Intl.DateTimeFormat("default", { hour12: void 0 === t ? void 0 : !t, hour: "numeric", minute: "numeric" }).resolvedOptions();
                                (n.use24HourTime = !e.hour12), (n.hourFormat = e.hour || n.hourFormat), (n.minuteFormat = e.minute || n.minuteFormat);
                            }
                            e[o] = n;
                        }
                        return e[o];
                    };
                })(),
                h = (e, t = 2, o = "0") => {
                    const n = o.repeat(t),
                        r = "number" == typeof e ? `${e}` : "";
                    return r.length >= t ? r : `${n}${r}`.slice(-t);
                },
                m = a().eb124f96,
                g = a().i7a6f114,
                b = a().ccc99ff2,
                f = [...Array(24).keys()],
                y = [...Array(13).keys()].slice(1),
                x = [...Array(60).keys()];
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleChange = (e) => {
                            const { hour: t, minute: o, onChange: n } = this.props;
                            (e.hour === t && e.minute === o) || n(e);
                        }),
                        (this._handleNativeChange = (e) => {
                            const { value: t } = e.target;
                            this._handleChange(v.parse(t));
                        }),
                        (this._handleHourChange = (e) => {
                            const { use24HourTime: t } = this._getLocale(),
                                { hour: o, minute: n } = this.props;
                            let r;
                            e && ((r = parseInt(e, 10)), t || "number" != typeof o || (o > 12 ? (r = (r + 12) % 24) : (r %= 12))), this._handleChange(new v(r, n));
                        }),
                        (this._handleMinuteChange = (e) => {
                            const { hour: t } = this.props,
                                o = e ? parseInt(e, 10) : void 0;
                            this._handleChange(new v(t, o));
                        }),
                        (this._handleAmPmChange = (e) => {
                            let { hour: t } = this.props;
                            const { minute: o } = this.props;
                            switch (e) {
                                case "am":
                                    "number" == typeof t && t >= 12 && (t -= 12);
                                    break;
                                case "pm":
                                    "number" == typeof t && t < 12 && (t += 12);
                            }
                            this._handleChange(new v(t, o));
                        });
                }
                render() {
                    const { "aria-label": e, disabled: t, errorText: o, helperText: i, invalid: a, label: c, style: d } = this.props,
                        p = !!a,
                        u = s.ZP.isMobileOS();
                    return n.createElement(r.Z, { style: [t && w.disabled, d] }, n.createElement(r.Z, { "aria-label": e || c, role: "group" }, n.createElement(l.ZP, { color: "gray700" }, c), u ? n.createElement(r.Z, { style: w.containerNative }, this._renderNativeInput()) : n.createElement(r.Z, { style: w.containerSelectors }, this._renderSelectors())), n.createElement(r.Z, { style: w.subtextWrapper }, i ? this._renderHelperText() : null, p && o ? this._renderErrorText() : null));
                }
                _getLocale() {
                    const { use24HourTime: e } = this.props;
                    return u(e);
                }
                _getFields() {
                    const { hour: e, minute: t } = this.props,
                        { hour: o, minute: n } = new v(e, t),
                        { hourFormat: r, minuteFormat: i, use24HourTime: a } = this._getLocale(),
                        s = "number" == typeof o ? (o < 12 ? "am" : "pm") : void 0,
                        l = a ? f : y,
                        c = x,
                        d = "2-digit" === r ? 2 : 1,
                        p = "2-digit" === i ? 2 : 1,
                        u = [];
                    return (
                        u.push({ label: g, options: l.map((e) => ({ label: h(e, d), value: `${e}` })), onChange: this._handleHourChange, value: "number" == typeof o ? `${a ? o : o % 12 || 12}` : "", withEmptyOption: !0 }),
                        u.push({ label: b, options: c.map((e) => ({ label: h(e, p), value: `${e}` })), onChange: this._handleMinuteChange, value: "number" == typeof n ? `${n}` : "", withEmptyOption: !0 }),
                        a ||
                            u.push({
                                label: m,
                                options: [
                                    { label: "AM", value: "am" },
                                    { label: "PM", value: "pm" },
                                ],
                                onChange: this._handleAmPmChange,
                                value: void 0 !== s ? s : "",
                                withEmptyOption: void 0 === o || void 0 === n,
                            }),
                        u
                    );
                }
                _renderNativeInput() {
                    const { autoFocus: e, disabled: t, hour: o, label: r, minute: i } = this.props,
                        a = new v(o, i);
                    return n.createElement(c.Z, { autoCapitalize: "none", autoComplete: "off", autoCorrect: !1, autoFocus: e, editable: !t, label: r, name: "timeInput", numberOfLines: 1, onChange: this._handleNativeChange, spellCheck: "false", style: w.native, type: "time", value: a.toString() });
                }
                _renderSelectors() {
                    const { autoFocus: e, disabled: t, invalid: o } = this.props,
                        r = !!o,
                        i = this._getFields();
                    return n.createElement(
                        n.Fragment,
                        null,
                        i.map((o, i) => n.createElement(d.ZP, { autofocus: 0 === i ? e : void 0, disabled: t, hasError: r, key: o.label, label: o.label, onChange: o.onChange, options: o.options, value: o.value, withEmptyOption: o.withEmptyOption })),
                    );
                }
                _renderHelperText() {
                    const { helperText: e } = this.props;
                    return n.createElement(r.Z, { "aria-live": "polite" }, n.createElement(l.ZP, { color: "gray700", style: w.subtext }, e));
                }
                _renderErrorText() {
                    const { errorText: e } = this.props;
                    return n.createElement(r.Z, { "aria-live": "assertive" }, n.createElement(l.ZP, { color: "red500", style: w.subtext }, e));
                }
            }
            class v {
                constructor(e, t) {
                    const o = "number" == typeof e ? Math.max(Math.min(e, 23), 0) : void 0,
                        n = "number" == typeof t ? Math.max(Math.min(t, 59), 0) : void 0;
                    Object.defineProperty(this, "hour", { value: o, enumerable: !0 }), Object.defineProperty(this, "minute", { value: n, enumerable: !0 });
                }
                static parse(e) {
                    let t, o;
                    if (e && e.match(/^(0?[0-9]|1[0-9]|2[0-3]):([0-5]?[0-9])$/)) {
                        const [n, r] = e.split(":");
                        (t = parseInt(n, 10)), (o = parseInt(r, 10));
                    }
                    return new v(t, o);
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-c93e0a41.f364116a.js.map
