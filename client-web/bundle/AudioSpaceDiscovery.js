"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpaceDiscovery", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                s = o(99107),
                a = o(272175),
                r = o(111677);
            const i = o.n(r)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = i;
                    return e ? n.createElement(a.ql, null, n.createElement("meta", { content: e, property: "al:ios:url" }), n.createElement("meta", { content: s.AF, property: "al:ios:app_store_id" }), n.createElement("meta", { content: t, property: "al:ios:app_name" }), n.createElement("meta", { content: e, property: "al:android:url" }), n.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), n.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                s = o(272175);
            const a = (e) => {
                const { canonical: t, description: o = "", image: a, imageAlt: r, imageH: i, imageType: l, imageW: c, title: p, ttl: d, type: u } = e;
                return n.createElement(s.ql, null, u ? n.createElement("meta", { content: u, property: "og:type" }) : null, t ? n.createElement("meta", { content: t, property: "og:url" }) : null, p ? n.createElement("meta", { content: p, property: "og:title" }) : null, n.createElement("meta", { content: o, property: "og:description" }), a ? n.createElement("meta", { content: a, property: "og:image" }) : null, l ? n.createElement("meta", { content: l, property: "og:image:type" }) : null, c ? n.createElement("meta", { content: c, property: "og:image:width" }) : null, i ? n.createElement("meta", { content: i, property: "og:image:height" }) : null, r ? n.createElement("meta", { content: r, property: "og:image:alt" }) : null, d ? n.createElement("meta", { content: d, property: "og:ttl" }) : null);
            };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                s = o(202784),
                a = o(107267),
                r = o(403556),
                i = o(791632);
            const l = (e) => {
                    const t = (0, a.useHistory)();
                    return s.createElement(r.Z, (0, n.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                c = s.memo(l);
        },
        80309: (e, t, o) => {
            o.d(t, { ZP: () => R, UJ: () => Z });
            var n = o(807896),
                s = (o(136728), o(202784)),
                a = o(251067),
                r = o(325686),
                i = o(392237),
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
                k = o(668214),
                C = o(919022);
            const _ = (0, k.Z)()
                .propsFromState(() => ({ viewerUser: C.ZP.selectViewerUser }))
                .adjustStateProps(({ viewerUser: e }) => ({ viewerUserScreenName: e ? e.screen_name : void 0 }));
            const w = [...o(122758).M],
                S = p().b47e760e,
                v = p().fd2c7b44,
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
                                r = { [b.uq.labs.openCommandCenter]: u.Z, [b.uq.search]: s(), [b.uq.goToUser]: s("@"), [b.uq.openKeyboardShortcuts]: () => n("/i/keyboard_shortcuts"), [b.uq.goExplore]: () => n("/explore"), [b.uq.goSettings]: () => n("/settings") },
                                i = (e) => ({ [b.uq.goProfile]: () => n(`/${e}`), [b.uq.goLikes]: () => n(`/${e}/likes`), [b.uq.goLists]: () => n(`/${e}/lists`) }),
                                l = this.context.userClaims.isTrueAndEnabled("subscriptions_feature_1007"),
                                c = o && l ? { ...i(o), [b.uq.goTopArticles]: () => n("/i/articles") } : o ? i(o) : {},
                                p = { ...r, ...c, [b.uq.toggleCommandCenter]: (0, a.fH)(a.vw.prod) ? u.Z : () => t.set(m._K), [b.uq.goHome]: () => n("/home"), [b.uq.goDisplay]: () => n("/i/display"), [b.uq.goNotifications]: () => n("/notifications"), [b.uq.goMentions]: () => n("/notifications/mentions"), [b.uq.goMessages]: () => n("/messages"), [b.uq.goGrok]: () => n("/i/grok"), [b.uq.newMessage]: () => n("/messages/compose"), [b.uq.newTweet]: () => n("/compose/post"), [b.uq.goBookmarks]: () => n("/i/bookmarks"), [b.uq.goToDrafts]: () => n("/compose/post/unsent/drafts"), [b.uq.goToScheduled]: () => n("/compose/post/unsent/scheduled") },
                                d = this.props.viewerUserScreenName ? p : r;
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
                    return this.props.viewerUserScreenName ? s.createElement(r.Z, { "aria-level": 2, role: "heading", style: i.default.visuallyHidden }, s.createElement(m.lk, null), s.createElement(l.ZP, null, S), s.createElement(l.ZP, { focusable: !1, link: "/i/keyboard_shortcuts" }, v)) : null;
                }
            }
            P.contextType = x.rC;
            const q = _(function (e) {
                    const t = (0, h.xO)();
                    return e.disabled ? null : s.createElement(P, (0, n.Z)({}, e, { jotaiStore: t }));
                }),
                R = (0, y.g)((0, f.ZP)(q), w);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                s = o(500002),
                a = o(668214),
                r = o(997174),
                i = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: r.NH }))
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
                            location: { pathname: a, search: r },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = s || i;
                    ((c && s !== i) || (!c && o !== a) || n !== r || l) && this._performPageUpdates(this.props);
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
            o.d(t, { j: () => a });
            var n = o(202784),
                s = o(80309);
            function a() {
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
            o.d(t, { Z: () => v });
            var n = o(807896),
                s = o(202784),
                a = o(194504),
                r = o(235902),
                i = o(392237),
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
                k = p().fb9f6f39;
            class C extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, d.Z)((e, t) => {
                            const { pathname: o, query: n, state: s } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: o, query: n, method: "push", state: { ...s, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, o, n) => {
                            const s = i.default.theme.colors.text,
                                a = i.default.theme.colors.gray700;
                            return o || n ? (e || t ? s : a) : e ? s : a;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: n, children: a, color: r, isActive: c, isCompact: p, isPillLink: d, isRoundedRect: u, isWebRedesign: h, retainScrollPosition: C, style: w, to: S } = this.props,
                        { location: v } = this.state,
                        E = S ? this._getMemoizedLink(S, C) : void 0,
                        Z = c ? c(S) : v?.pathname === E?.pathname,
                        P = b.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        q = h ? "medium" : Z ? "bold" : "medium";
                    return s.createElement(y.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: P, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [d ? _.pill : _.link, d && Z ? _.active : null, p ? (d ? _.compactPill : _.compactLink) : null, u ? _.roundedRect : null, w], withoutInteractiveStyles: h || d }, ({ isFocused: t, isHovered: c }) => s.createElement(l.Z, { style: d && _.flexGrow }, s.createElement(m.ZP, { size: h ? "headline2" : void 0, style: [_.text, { color: this._getTextColor(Z, c, h, d) }, p && _.compactText, h && t && _.focusedText], weight: q }, e && s.createElement(e, { style: _.icon }), a, h || d ? null : s.createElement(l.Z, { style: Z && [_.border, { backgroundColor: i.default.theme.colors[r] }] })), o ? s.createElement(g.Z, { count: o, standalone: !0, style: [_.badge, o >= 10 && _.multiDigitBadge, o >= 20 && _.truncatedCountBadge], truncatedCountFormatter: k, unreadCountLabel: f, withBorder: !1 }) : n ? s.createElement(g.Z, { pip: !0, standalone: !0, style: _.badgePip, textColor: "red500", unreadCountLabel: x, withBorder: !1 }) : null));
                }
            }
            (C.contextType = h.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const _ = i.default.create((e) => ({
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
                w = C,
                S = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                v = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: i, isRoundedRect: l, links: c, style: p, visibleItemIndex: d }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = r.ZP.useProps(),
                        g = m() && !i,
                        h = s.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...r }, c) => {
                                    const p = g ? [S.linkRedesign, 0 === c && S.firstLinkRedesign, e && 0 === c && S.withNoPaddingStart] : void 0;
                                    return s.createElement(w, (0, n.Z)({ viewType: a }, r, { isCompact: o, isPillLink: i, isRoundedRect: l, isWebRedesign: g, style: p }), t);
                                }),
                            [e, o, i, l, g, c],
                        );
                    return s.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: i && S.gap, childrenStyle: !g && S.flexGrow, key: u, style: [i ? null : S.segmentedControl, g && S.leftAligned, p], visibleItemIndex: d }, h);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpaceDiscovery.2f810c3a.js.map
