"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Place", "icons/IconFoursquareNoMargin-js"],
    {
        507651: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(807896),
                i = o(202784),
                a = o(107267),
                n = o(403556),
                s = o(791632);
            const c = (e) => {
                    const t = (0, a.useHistory)(),
                        { isCompact: o, ...c } = e;
                    return i.createElement(n.Z, (0, r.Z)({}, c, { isCompact: o || (0, s.HD)(t) }));
                },
                l = i.memo(c);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(500002),
                a = o(668214),
                n = o(997174),
                s = o(118823);
            const c = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class l extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: a, search: n },
                            locationKey: s,
                        } = e;
                    let c = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (c = !0));
                    const l = i || s;
                    ((l && i !== s) || (!l && o !== a) || r !== n || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, i.ZP)(c(l));
        },
        886191: (e, t, o) => {
            o.d(t, { Z: () => C });
            var r = o(202784),
                i = o(731708),
                a = o(457311),
                n = o(111677),
                s = o.n(n),
                c = o(912021),
                l = o(864702),
                d = o(479506),
                p = o(903019),
                h = o(519896),
                m = o(774006),
                u = o(443781),
                g = o(810641),
                f = o(335632);
            const y = s().c09de2d4,
                v = s().ae111c99,
                b = r.createElement(s().I18NFormatMessage, { $i18n: "e7e44bab" }, r.createElement(i.ZP, { link: "/settings/search" }, s().f191a2ba));
            class _ extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === d.Z.ItemType.USER || e === d.Z.ItemType.TOPIC || e === d.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: o, searchMode: r, urtEndpointOptions: i, vertical: a } = this.props,
                                { featureSwitches: n } = this.context,
                                s = n.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, r, o, a, i, s);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || r.createElement(a.Z, { header: v({ query: t }), message: b });
                        }),
                        (this._getMemoizedModule = (0, c.Z)((e, t, o, r, i, a, n) => (0, m.Z)({ query: e, searchMode: o, querySource: t, searchFilters: r, vertical: i, urtEndpointOptions: a, searchTimelinesGraphQLEnabled: n }))),
                        (this._getMemoizedEntryConfiguration = (0, c.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, f.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== p.N3.Live;
                    return r.createElement(g.Z, { apiErrorHandlerMap: l.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: h.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: y });
                }
            }
            _.contextType = u.rC;
            const C = _;
        },
        864702: (e, t, o) => {
            o.d(t, { d: () => c });
            var r = o(111677),
                i = o.n(r),
                a = o(615656),
                n = o(51525);
            const s = i().i1801686,
                c = { [a.ZP.GenericForbidden]: { toast: (0, n.j)() }, [a.ZP.InvalidRequestUrl]: { toast: { text: s, withClearButton: !0 } }, showToast: !0 };
        },
        883432: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        774006: (e, t, o) => {
            o.d(t, { Z: () => g, u: () => u });
            var r = o(644829),
                i = o(750085),
                a = o(903019),
                n = o(883432),
                s = o(555875),
                c = o(218951);
            const l = "search-",
                d = " near:me",
                p = " filter:follows",
                h = { [a.N3.Image]: { result_filter: a.N3.Image }, [a.N3.List]: { result_filter: a.N3.List }, [a.N3.Live]: { tweet_search_mode: a.N3.Live }, [a.N3.Media]: { result_filter: a.N3.Media }, [a.N3.Top]: {}, [a.N3.User]: { result_filter: a.N3.User }, [a.N3.Video]: { result_filter: a.N3.Video } },
                m = (e) => (((e) => e === n.Z.SpellingCorrectionRevertClick || e === n.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                u = () => (e, t) => {
                    e(
                        (0, s.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, s.$q)(e)),
                    );
                },
                g = ({ query: e, searchMode: t = a.N3.Top, querySource: o, searchFilters: n, vertical: s, urtEndpointOptions: u, searchTimelinesGraphQLEnabled: g }) => {
                    const f = m(o),
                        y = n && n.peopleFilter ? "searcher_follows" : void 0,
                        v = y ? "-pf" : "",
                        b = n && n.locationFilter && !e.includes(d) ? `${e}${d}` : e,
                        _ = { timelineId: `${l}${b}-${t}${f}${v}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearch, getEndpointParams: (e) => ({ ...u?.requestParams, q: b, social_filter: y, vertical: s, ...h[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === a.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (g) {
                        const e = y && !b.includes(p) ? `${b}${p}` : b,
                            n = ((e) => {
                                switch (e) {
                                    case a.N3.Image:
                                        return "Photos";
                                    case a.N3.List:
                                        return "Lists";
                                    case a.N3.Media:
                                        return "Media";
                                    case a.N3.Top:
                                        return "Top";
                                    case a.N3.User:
                                        return "People";
                                    case a.N3.Video:
                                        return "Videos";
                                    case a.N3.Live:
                                    default:
                                        return "Latest";
                                }
                            })(t),
                            s = `gql-${l}${b}-${t}${f}${v}`;
                        return (0, c.Z)({ ..._, timelineId: s, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: i.Z, network: { getEndpointParams: ({ count: t, cursor: r }) => ({ rawQuery: e, count: t, product: n, querySource: o, cursor: "string" == typeof r ? r : void 0 }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearchGraphQL } });
                    }
                    return (0, c.Z)(_);
                };
        },
        230558: (e, t, o) => {
            o.r(t), o.d(t, { PlaceScreen: () => q, default: () => D });
            var r = o(202784),
                i = o(325686),
                a = o(154003),
                n = o(731708),
                s = o(392237),
                c = o(111677),
                l = o.n(c),
                d = o(171709),
                p = o(718e3),
                h = o(290402),
                m = o(252021),
                u = o(507651),
                g = o(652904),
                f = o(886191),
                y = o(292484),
                v = o(903019),
                b = o(503229),
                _ = o(71620),
                C = o(668214),
                S = o(242419),
                x = o(502909),
                k = o(600823);
            const E = (0, x.ZP)({ namespace: "places" }),
                Z = (0, x.tb)(E, { context: "FETCH_PLACE", endpoint: (e) => e.withEndpoint(S.Z).fetchPlace }),
                T = { ...E, ...Z },
                w = k.Z.register(T),
                P = (e, t) => t.match.params.placeId,
                I = (e, t) => w.select(e, P(0, t)),
                z = (e, t) => w.selectFetchStatus(e, P(0, t)),
                N = (0, C.Z)()
                    .propsFromState(() => ({ place: I, placeFetchStatus: z, placeId: P }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("PLACE_SCREEN"), fetchPlaceIfNeeded: w.fetchOneIfNeeded }))
                    .withAnalytics({ page: "place" }),
                H = l().jaaa8984,
                R = l().fa4e68ca,
                L = l().add55c98,
                M = l().f4a654a4,
                B = (e) => {
                    let t = {};
                    "foursquare" === e.vendor &&
                        (t = ((e) => {
                            const { venue_id: t } = e.data;
                            return { attributionDetails: r.createElement(d.default, { style: $.icon }), href: `https://foursquare.com/v/${t}`, buttonText: M };
                        })(e));
                    const { attributionDetails: o, buttonText: n, href: s } = t;
                    return r.createElement(i.Z, { style: $.attribution }, r.createElement(i.Z, { style: $.attributionDetails }, o), r.createElement(a.ZP, { link: s, size: "xSmall", type: "brandOutlined" }, n));
                },
                q = (e) => {
                    const { createLocalApiErrorHandler: t, fetchPlaceIfNeeded: o, history: a, location: s, place: c, placeFetchStatus: l, placeId: d } = e,
                        b = c ? c.full_name : H;
                    r.useEffect(() => {
                        o(d).catch(t());
                    }, [t, o, d]);
                    const _ = () => {
                            if (!c) return null;
                            const { attributes: e, vendor_info: t } = c,
                                { street_address: o } = e;
                            return r.createElement(i.Z, { style: $.locationDetails }, r.createElement(n.ZP, { size: "headline1", weight: "bold" }, c.full_name), o ? r.createElement(n.ZP, { color: "gray700", size: "body" }, o) : null, t ? B(t) : null);
                        },
                        C = () => "media" === (s.query && s.query.f),
                        S = () => {
                            const e = [
                                { isActive: k, key: R, retainScrollPosition: !1, to: s.pathname, label: R },
                                { isActive: C, key: L, retainScrollPosition: !1, to: { query: { f: "media" }, pathname: s.pathname }, label: L },
                            ];
                            return r.createElement(u.Z, { links: e });
                        },
                        x = () => {
                            const e = C() ? `place:${d} filter:media` : `place:${d}`;
                            return r.createElement(f.Z, { query: e, searchMode: v.N3.Top });
                        },
                        k = () => "media" !== (s.query && s.query.f),
                        E = (0, y.hx)();
                    return r.createElement(g.Z, null, r.createElement(m.Z, { backLocation: E ? void 0 : "/home", documentTitle: b, history: a, primaryContent: r.createElement(r.Fragment, null, r.createElement(i.Z, { style: $.header }, r.createElement(h.Z, { fetchStatus: l, render: _ }), S()), x()), sidebarContent: r.createElement(p.Z, null), title: E ? null : H }));
                },
                $ = s.default.create((e) => ({ header: { backgroundColor: e.colors.cellBackground, zIndex: e.componentZIndices.appBarZIndex }, locationDetails: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, icon: { color: e.colors.gray700 }, attribution: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space12 }, attributionDetails: { flexShrink: 1, marginEnd: e.spaces.space12 } })),
                D = N((0, b.Z)(q));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => E });
            var r = o(807896),
                i = o(202784),
                a = o(194504),
                n = o(235902),
                s = o(392237),
                c = o(325686),
                l = o(111677),
                d = o.n(l),
                p = o(912021),
                h = o(516951),
                m = o(731708),
                u = o(310088),
                g = o(175993),
                f = o(58881),
                y = o(530732);
            const v = d().d2414d31,
                b = () => d().ce4e85ae,
                _ = d().fb9f6f39;
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
                            const i = s.default.theme.colors.text,
                                a = s.default.theme.colors.gray700;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: a, color: n, isActive: l, isCompact: d, isPillLink: p, isRoundedRect: h, isWebRedesign: g, retainScrollPosition: C, style: x, to: k } = this.props,
                        { location: E } = this.state,
                        Z = k ? this._getMemoizedLink(k, C) : void 0,
                        T = l ? l(k) : E?.pathname === Z?.pathname,
                        w = f.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? S.pillHoverStyle.backgroundColor : void 0 }),
                        P = g ? "medium" : T ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: w, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [S.pillStyle] : [S.link]), ...(p && T ? [S.pillActiveStyle] : []), d ? (p ? S.compactPill : S.compactLink) : null, h ? S.roundedRect : null, x], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: l }) => i.createElement(c.Z, { style: p && S.flexGrow }, i.createElement(m.ZP, { size: g ? "headline2" : void 0, style: [S.text, { color: this._getTextColor(T, l, g, p) }, d && S.compactText, g && t && S.focusedText, p && S.pillTextStyle, p && T && S.pillActiveTextStyle, p && l && S.pillHoverTextStyle], weight: P }, e && i.createElement(e, { style: S.icon }), a, g || p ? null : i.createElement(c.Z, { style: T && [S.border, { backgroundColor: s.default.theme.colors[n] }] })), o ? i.createElement(u.Z, { count: o, standalone: !0, style: [S.badge, o >= 10 && S.multiDigitBadge, o >= 20 && S.truncatedCountBadge], truncatedCountFormatter: _, unreadCountLabel: v, withBorder: !1 }) : r ? i.createElement(u.Z, { pip: !0, standalone: !0, style: S.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const S = s.default.create((e) => ({
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
                x = C,
                k = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                E = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: s, isRoundedRect: c, links: l, style: d, visibleItemIndex: p }) => {
                    const h = l
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: m } = n.ZP.useProps(),
                        u = m() && !s,
                        g = i.useMemo(
                            () =>
                                l.filter(Boolean).map(({ label: t, viewType: a, ...n }, l) => {
                                    const d = u ? [k.linkRedesign, 0 === l && k.firstLinkRedesign, e && 0 === l && k.withNoPaddingStart] : void 0;
                                    return i.createElement(x, (0, r.Z)({ viewType: a }, n, { isCompact: o, isPillLink: s, isRoundedRect: c, isWebRedesign: u, style: d }), t);
                                }),
                            [e, o, s, c, u, l],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: s && k.gap, childrenStyle: !u && k.flexGrow, key: h, style: [s ? null : k.segmentedControl, u && k.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
        171709: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)(
                    "svg",
                    {
                        ...e,
                        role: e["aria-label"] ? e.role || "img" : void 0,
                        "aria-hidden": void 0 === e["aria-label"],
                        style: [n.Z.root, e.style],
                        viewBox: "0 0 158 20",
                        children: r.createElement(
                            "g",
                            null,
                            r.createElement("path", {
                                d: "M1.29 9.333v3.992H0V4.31h3.412c.876 0 1.443.22 1.88.593.54.464.89 1.147.89 1.92 0 .772-.35 1.454-.89 1.918-.437.375-1.004.593-1.88.593H1.29M3.35 8.11c.618 0 .953-.155 1.185-.4.22-.23.36-.54.36-.888s-.142-.657-.36-.888c-.232-.245-.567-.4-1.185-.4H1.29V8.11h2.06zm6.155-.966c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.785-1.996-1.905-1.996S7.6 9.192 7.6 10.3c0 1.107.784 1.996 1.905 1.996zm9.025-5.021l1.662 4.134 1.66-4.134h1.263l-2.46 6.053h-.85l-1.7-4.25-1.7 4.25h-.85l-2.458-6.053h1.262l1.66 4.134 1.66-4.134h.85m6.091 3.284c.065 1.017.903 1.83 1.958 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.315 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258H24.62m.104-1.03h3.297c-.18-.774-.875-1.315-1.596-1.315-.786 0-1.494.528-1.7 1.314zm9.066-1.173c-.143-.04-.284-.052-.477-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.295-.412.926-.824 1.815-.824.13 0 .335.013.476.04l-.14 1.17m1.647 2.203c.064 1.017.902 1.83 1.957 1.83.902 0 1.39-.44 1.738-.825l.8.76c-.452.58-1.314 1.133-2.55 1.133-1.765 0-3.13-1.34-3.13-3.155 0-1.816 1.236-3.155 2.95-3.155 1.686 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.663m.103-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.786 0-1.494.528-1.7 1.314zm10.534 3.244c-.49.438-1.146.682-1.867.682-.54 0-1.108-.154-1.52-.4-.915-.54-1.545-1.544-1.545-2.755 0-1.212.645-2.23 1.56-2.77.41-.245.913-.386 1.48-.386.657 0 1.314.206 1.854.657V4.183h1.223v9.143h-1.185v-.553m-.038-3.606c-.373-.49-.992-.863-1.726-.863-1.172 0-1.945.94-1.945 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm7.815 4.159h-1.185V4.182h1.224v3.62c.54-.452 1.196-.658 1.853-.658.567 0 1.07.142 1.48.386.915.54 1.56 1.558 1.56 2.77 0 1.21-.632 2.214-1.546 2.755-.412.245-.98.4-1.52.4-.72 0-1.378-.245-1.867-.683v.554m.04-1.893c.41.554 1.042.863 1.66.863 1.172 0 2.01-.914 2.01-1.996 0-1.056-.773-1.996-1.946-1.996-.734 0-1.352.374-1.725.863v2.266zm6.296 4.983l1.635-3.72-2.588-5.423h1.313l1.893 3.992 1.74-3.992h1.287l-3.98 9.143h-1.3m39.407-8.563v1.223H96.63v4.25h-1.288V4.31h5.15v1.225H96.63v2.318h2.962m4.223-.709c1.79 0 3.13 1.352 3.13 3.155 0 1.802-1.34 3.154-3.13 3.154-1.79 0-3.13-1.352-3.13-3.155 0-1.803 1.34-3.156 3.13-3.156m0 5.152c1.12 0 1.906-.89 1.906-1.996 0-1.108-.784-1.996-1.905-1.996-1.12 0-1.906.89-1.906 1.996 0 1.107.785 1.996 1.905 1.996zm4.841.143c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.13.953.348 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.648-.384-2.15-1.015m10.25-4.082c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.186v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.144 1.17m1.48 3.362c.567.438 1.185.67 1.79.67.528 0 1.056-.283 1.056-.76 0-.695-1.005-.734-1.893-1.03-.735-.244-1.392-.708-1.392-1.558 0-1.3 1.16-1.893 2.24-1.893.89 0 1.533.283 2.01.67l-.63.876c-.374-.282-.812-.475-1.302-.475-.592 0-1.095.283-1.095.76 0 .412.477.554 1.083.708.953.245 2.202.67 2.202 1.92 0 1.145-1.07 1.853-2.254 1.853-.965 0-1.776-.296-2.446-.837l.632-.904m8.228 1.738c-.54 0-1.108-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.412-.245.914-.386 1.48-.386.684 0 1.34.206 1.894.682v-.553h1.185v9.143h-1.224v-3.62c-.49.427-1.107.658-1.828.658m1.828-4.288c-.373-.49-.99-.863-1.726-.863-1.172 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm3.45 3.272c-.374-.464-.554-1.056-.554-2.073v-3.09h1.223v3.283c0 .618.128.953.347 1.21.27.322.708.528 1.172.528.747 0 1.352-.45 1.7-.863v-4.16h1.223v6.052h-1.185v-.554c-.27.258-.94.682-1.777.682-.862.002-1.647-.384-2.15-1.015m11.333.335c-.49.438-1.146.682-1.867.682-.54 0-1.107-.154-1.52-.4-.914-.54-1.545-1.544-1.545-2.755 0-1.212.644-2.23 1.558-2.77.413-.245.916-.386 1.482-.386.683 0 1.34.206 1.893.682v-.553h1.185v6.052h-1.185v-.553m-.04-3.606c-.372-.49-.99-.863-1.724-.863-1.17 0-1.944.94-1.944 1.996 0 1.08.837 1.995 2.01 1.995.617 0 1.248-.31 1.66-.863V9.166zm6.232-.81c-.142-.04-.283-.052-.476-.052-.63 0-1.3.438-1.636 1.018v4.006h-1.223V7.273h1.185v.695c.297-.412.927-.824 1.816-.824.13 0 .335.013.477.04l-.142 1.17m1.905 2.203c.065 1.017.902 1.83 1.957 1.83.903 0 1.392-.44 1.74-.825l.797.76c-.45.58-1.313 1.133-2.55 1.133-1.764 0-3.13-1.34-3.13-3.155 0-1.816 1.237-3.155 2.95-3.155 1.687 0 2.91 1.365 2.91 3.155 0 .05 0 .142-.013.258h-4.66m.102-1.03h3.297c-.18-.774-.876-1.315-1.597-1.315-.785 0-1.493.528-1.7 1.314zM86.48 0H75.813C74.34 0 73.91 1.107 73.91 1.805v16.947c0 .786.42 1.077.658 1.173.237.097.892.177 1.284-.276 0 0 5.105-5.863 5.188-5.954.08-.09.17-.092.22-.092h3.234c1.37 0 1.59-.992 1.732-1.567.12-.48 1.455-7.32 1.9-9.488C88.466.89 88.046 0 86.48 0m-.254 12.037c.12-.48 1.455-7.32 1.9-9.488m-2.275.337l-.447 2.333c-.053.253-.302.49-.596.49l-4.156-.005c-.467 0-.87.352-.87.82v.508c0 .467.38.85.85.85h3.524c.33 0 .608.31.537.663-.07.353-.438 2.216-.48 2.41-.04.192-.246.454-.576.454h-2.878c-.598.02-.726.023-1.077.46-.352.435-3.506 4.222-3.506 4.222-.03.037-.062.026-.062-.014V2.852c0-.298.26-.648.648-.648h8.56c.317 0 .61.296.53.683z",
                            }),
                        ),
                    },
                    { writingDirection: t },
                );
            };
            s.metadata = { width: 158, height: 20 };
            const c = s;
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => c });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Place.ad7d634a.js.map
