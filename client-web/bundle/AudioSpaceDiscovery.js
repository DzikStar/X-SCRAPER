"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceDiscovery", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                s = o(99107),
                r = o(272175),
                i = o(111677);
            const a = o.n(i)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = a;
                    return e ? n.createElement(r.ql, null, n.createElement("meta", { content: e, property: "al:ios:url" }), n.createElement("meta", { content: s.AF, property: "al:ios:app_store_id" }), n.createElement("meta", { content: t, property: "al:ios:app_name" }), n.createElement("meta", { content: e, property: "al:android:url" }), n.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), n.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, o) => {
            o.d(t, { Z: () => r });
            var n = o(202784),
                s = o(272175);
            const r = (e) => {
                const { canonical: t, description: o = "", image: r, imageAlt: i, imageH: a, imageType: l, imageW: c, title: p, ttl: d, type: u } = e;
                return n.createElement(s.ql, null, u ? n.createElement("meta", { content: u, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, p ? n.createElement("meta", { content: p, property: "og:title" }) : null, n.createElement("meta", { content: o, property: "og:description" }), r ? n.createElement("meta", { content: r, property: "og:image" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? n.createElement("meta", { content: c, property: "og:image:width" }) : null, a ? n.createElement("meta", { content: a, property: "og:image:height" }) : null, i ? n.createElement("meta", { content: i, property: "og:image:alt" }) : null, d ? n.createElement("meta", { content: d, property: "og:ttl" }) : null);
            };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                s = o(202784),
                r = o(107267),
                i = o(403556),
                a = o(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: o, ...l } = e;
                    return s.createElement(i.Z, (0, n.Z)({}, l, { isCompact: o || (0, a.HD)(t) }));
                },
                c = s.memo(l);
        },
        80309: (e, t, o) => {
            o.d(t, { ZP: () => T, UJ: () => Z });
            var n = o(807896),
                s = (o(136728), o(202784)),
                r = o(251067),
                i = o(325686),
                a = o(392237),
                l = o(731708),
                c = o(111677),
                p = o.n(c),
                d = o(752624),
                u = o(516951),
                m = o(874627),
                g = o(994775),
                h = o(536387),
                b = o(163390),
                y = o(113840),
                f = o(500002),
                x = o(443781),
                S = o(668214),
                k = o(919022);
            const C = (0, S.Z)()
                .propsFromState(() => ({ viewerUser: k.ZP.selectViewerUser }))
                .adjustStateProps(({ viewerUser: e }) => ({ viewerUserScreenName: e ? e.screen_name : void 0 }));
            const v = [...o(122758).M],
                w = p().b47e760e,
                _ = p().fd2c7b44,
                E = new d.Z(),
                Z = (e) => E.subscribe(e).unsubscribe;
            class P extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._bindKeyboardShortcuts = () => {
                            const { history: e, jotaiStore: t, viewerUserScreenName: o } = this.props,
                                n = (t, o = {}) => e.push({ pathname: t, state: { ...o, source: "keyboard_shortcut" } }),
                                s = (e) => (t) => {
                                    t.preventDefault(), E.getListeners().length ? E.notify(e) : n("/explore", { searchFocused: !0, searchPrefill: e });
                                },
                                i = { [b.uq.labs.openCommandCenter]: u.Z, [b.uq.search]: s(), [b.uq.goToUser]: s("@"), [b.uq.openKeyboardShortcuts]: () => n("/i/keyboard_shortcuts"), [b.uq.goExplore]: () => n("/explore"), [b.uq.goSettings]: () => n("/settings") },
                                a = (e) => ({ [b.uq.goProfile]: () => n(`/${e}`), [b.uq.goLikes]: () => n(`/${e}/likes`), [b.uq.goLists]: () => n(`/${e}/lists`) }),
                                l = this.context.userClaims.isTrueAndEnabled("subscriptions_feature_1007"),
                                c = o && l ? { ...a(o), [b.uq.goTopArticles]: () => n("/i/articles") } : o ? a(o) : {},
                                p = { ...i, ...c, [b.uq.toggleCommandCenter]: (0, r.fH)(r.vw.prod) ? u.Z : () => t.set(m._K), [b.uq.goHome]: () => n("/home"), [b.uq.goDisplay]: () => n("/i/display"), [b.uq.goNotifications]: () => n("/notifications"), [b.uq.goMentions]: () => n("/notifications/mentions"), [b.uq.goMessages]: () => n("/messages"), [b.uq.goGrok]: () => n("/i/grok"), [b.uq.newMessage]: () => n("/messages/compose"), [b.uq.newTweet]: () => n("/compose/post"), [b.uq.goBookmarks]: () => n("/i/bookmarks"), [b.uq.goToDrafts]: () => n("/compose/post/unsent/drafts"), [b.uq.goToScheduled]: () => n("/compose/post/unsent/scheduled") },
                                d = this.props.viewerUserScreenName ? p : i;
                            this._unbindKeyboardShortcuts = (0, g.Z)(d);
                        });
                }
                componentDidMount() {
                    this._bindKeyboardShortcuts();
                }
                componentWillUnmount() {
                    this._unbindKeyboardShortcuts && this._unbindKeyboardShortcuts();
                }
                render() {
                    return this.props.viewerUserScreenName ? s.createElement(i.Z, { "aria-level": 2, role: "heading", style: a.default.visuallyHidden }, s.createElement(m.lk, null), s.createElement(l.ZP, null, w), s.createElement(l.ZP, { focusable: !1, link: "/i/keyboard_shortcuts" }, _)) : null;
                }
            }
            P.contextType = x.rC;
            const q = C(function (e) {
                    const t = (0, h.xO)();
                    return e.disabled ? null : s.createElement(P, (0, n.Z)({}, e, { jotaiStore: t }));
                }),
                T = (0, y.g)((0, f.ZP)(q), v);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                s = o(500002),
                r = o(668214),
                i = o(997174),
                a = o(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = s || a;
                    ((c && s !== a) || (!c && o !== r) || n !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const p = (0, s.ZP)(l(c));
        },
        121522: (e, t, o) => {
            o.d(t, { j: () => r });
            var n = o(202784),
                s = o(80309);
            function r() {
                const e = n.useRef(null);
                return (
                    n.useEffect(
                        () =>
                            (0, s.UJ)(() => {
                                e.current?.focus();
                            }),
                        [e],
                    ),
                    { inputRef: e }
                );
            }
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => _ });
            var n = o(807896),
                s = o(202784),
                r = o(194504),
                i = o(235902),
                a = o(392237),
                l = o(325686),
                c = o(111677),
                p = o.n(c),
                d = o(912021),
                u = o(516951),
                m = o(731708),
                g = o(310088),
                h = o(175993),
                b = o(58881),
                y = o(530732);
            const f = p().d2414d31,
                x = () => p().ce4e85ae,
                S = p().fb9f6f39;
            class k extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, d.Z)((e, t) => {
                            const { pathname: o, query: n, state: s } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...s, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const s = a.default.theme.colors.text,
                                r = a.default.theme.colors.gray700;
                            return o || n ? (e || t ? s : r) : e ? s : r;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: r, color: i, isActive: c, isCompact: p, isPillLink: d, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: k, style: v, to: w } = this.props,
                        { location: _ } = this.state,
                        E = w ? this._getMemoizedLink(w, k) : void 0,
                        Z = c ? c(w) : _?.pathname === E?.pathname,
                        P = b.Z.generate({ backgroundColor: "transparent", color: a.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: d ? C.pillHoverStyle.backgroundColor : void 0 }),
                        q = h ? "medium" : Z ? "bold" : "medium";
                    return s.createElement(y.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: P, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(d ? [C.pillStyle] : [C.link]), ...(d && Z ? [C.pillActiveStyle] : []), p ? (d ? C.compactPill : C.compactLink) : null, u ? C.roundedRect : null, v], withoutInteractiveStyles: h }, ({ isFocused: t, isHovered: c }) => s.createElement(l.Z, { style: d && C.flexGrow }, s.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(Z, c, h, d) }, p && C.compactText, h && t && C.focusedText, d && C.pillTextStyle, d && Z && C.pillActiveTextStyle, d && c && C.pillHoverTextStyle], weight: q }, e && s.createElement(e, { style: C.icon }), r, h || d ? null : s.createElement(l.Z, { style: Z && [C.border, { backgroundColor: a.default.theme.colors[i] }] })), o ? s.createElement(g.Z, { count: o, standalone: !0, style: [C.badge, o >= 10 && C.multiDigitBadge, o >= 20 && C.truncatedCountBadge], truncatedCountFormatter: S, unreadCountLabel: f, withBorder: !1 }) : n ? s.createElement(g.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (k.contextType = h.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = a.default.create((e) => ({
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
                v = k,
                w = a.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                _ = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: a, isRoundedRect: l, links: c, style: p, visibleItemIndex: d }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = i.ZP.useProps(),
                        g = m() && !a,
                        h = s.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...i }, c) => {
                                    const p = g ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return s.createElement(v, (0, n.Z)({ viewType: r }, i, { isCompact: o, isPillLink: a, isRoundedRect: l, isWebRedesign: g, style: p }), t);
                                }),
                            [e, o, a, l, g, c],
                        );
                    return s.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: a && w.gap, childrenStyle: !g && w.flexGrow, key: u, style: [a ? null : w.segmentedControl, g && w.leftAligned, p], visibleItemIndex: d }, h);
                };
        },
        41065: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var n = o(202784),
                s = o(890601),
                r = o(783427),
                i = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const l = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceDiscovery.c82904fa.js.map
