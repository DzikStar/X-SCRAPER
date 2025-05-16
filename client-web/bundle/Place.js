"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Place"],
    {
        507651: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                i = a(202784),
                o = a(107267),
                s = a(403556),
                n = a(791632);
            const l = (e) => {
                    const t = (0, o.useHistory)();
                    return i.createElement(s.Z, (0, r.Z)({}, e, { isCompact: (0, n.HD)(t) }));
                },
                c = i.memo(l);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                i = a(500002),
                o = a(668214),
                s = a(997174),
                n = a(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: n.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: r },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: o, search: s },
                            locationKey: n,
                        } = e;
                    let l = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (l = !0));
                    const c = i || n;
                    ((c && i !== n) || (!c && a !== o) || r !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, i.ZP)(l(c));
        },
        886191: (e, t, a) => {
            a.d(t, { Z: () => k });
            var r = a(202784),
                i = a(731708),
                o = a(457311),
                s = a(332920),
                n = a.n(s),
                l = a(912021),
                c = a(864702),
                d = a(479506),
                p = a(903019),
                u = a(519896),
                h = a(774006),
                m = a(443781),
                g = a(810641),
                f = a(335632);
            const y = n().c09de2d4,
                b = n().ae111c99,
                _ = r.createElement(n().I18NFormatMessage, { $i18n: "e7e44bab" }, r.createElement(i.ZP, { link: "/settings/search" }, n().f191a2ba));
            class C extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === d.Z.ItemType.USER || e === d.Z.ItemType.TOPIC || e === d.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: a, searchMode: r, urtEndpointOptions: i, vertical: o } = this.props,
                                { featureSwitches: s } = this.context,
                                n = s.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, r, a, o, i, n);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || r.createElement(o.Z, { header: b({ query: t }), message: _ });
                        }),
                        (this._getMemoizedModule = (0, l.Z)((e, t, a, r, i, o, s) => (0, h.Z)({ query: e, searchMode: a, querySource: t, searchFilters: r, vertical: i, urtEndpointOptions: o, searchTimelinesGraphQLEnabled: s }))),
                        (this._getMemoizedEntryConfiguration = (0, l.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, f.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== p.N3.Live;
                    return r.createElement(g.Z, { apiErrorHandlerMap: c.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: u.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: y });
                }
            }
            C.contextType = m.rC;
            const k = C;
        },
        864702: (e, t, a) => {
            a.d(t, { d: () => l });
            var r = a(332920),
                i = a.n(r),
                o = a(615656),
                s = a(51525);
            const n = i().i1801686,
                l = { [o.ZP.GenericForbidden]: { toast: (0, s.j)() }, [o.ZP.InvalidRequestUrl]: { toast: { text: n, withClearButton: !0 } }, showToast: !0 };
        },
        883432: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        774006: (e, t, a) => {
            a.d(t, { Z: () => g, u: () => m });
            var r = a(644829),
                i = a(750085),
                o = a(903019),
                s = a(883432),
                n = a(555875),
                l = a(218951);
            const c = "search-",
                d = " near:me",
                p = " filter:follows",
                u = { [o.N3.Image]: { result_filter: o.N3.Image }, [o.N3.List]: { result_filter: o.N3.List }, [o.N3.Live]: { tweet_search_mode: o.N3.Live }, [o.N3.Media]: { result_filter: o.N3.Media }, [o.N3.Top]: {}, [o.N3.User]: { result_filter: o.N3.User }, [o.N3.Video]: { result_filter: o.N3.Video } },
                h = (e) => (((e) => e === s.Z.SpellingCorrectionRevertClick || e === s.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                m = () => (e, t) => {
                    e(
                        (0, n.CY)(t())
                            .filter((e) => 0 === e.indexOf(c))
                            .map((e) => (0, n.$q)(e)),
                    );
                },
                g = ({ query: e, searchMode: t = o.N3.Top, querySource: a, searchFilters: s, vertical: n, urtEndpointOptions: m, searchTimelinesGraphQLEnabled: g }) => {
                    const f = h(a),
                        y = s && s.peopleFilter ? "searcher_follows" : void 0,
                        b = y ? "-pf" : "",
                        _ = s && s.locationFilter && !e.includes(d) ? `${e}${d}` : e,
                        C = { timelineId: `${c}${_}-${t}${f}${b}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearch, getEndpointParams: (e) => ({ ...m?.requestParams, q: _, social_filter: y, vertical: n, ...u[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === o.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (g) {
                        const e = y && !_.includes(p) ? `${_}${p}` : _,
                            s = ((e) => {
                                switch (e) {
                                    case o.N3.Image:
                                        return "Photos";
                                    case o.N3.List:
                                        return "Lists";
                                    case o.N3.Media:
                                        return "Media";
                                    case o.N3.Top:
                                        return "Top";
                                    case o.N3.User:
                                        return "People";
                                    case o.N3.Video:
                                        return "Videos";
                                    case o.N3.Live:
                                    default:
                                        return "Latest";
                                }
                            })(t),
                            n = `gql-${c}${_}-${t}${f}${b}`;
                        return (0, l.Z)({ ...C, timelineId: n, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: i.Z, network: { getEndpointParams: ({ count: t, cursor: r }) => ({ rawQuery: e, count: t, product: s, querySource: a, cursor: "string" == typeof r ? r : void 0 }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearchGraphQL } });
                    }
                    return (0, l.Z)(C);
                };
        },
        230558: (e, t, a) => {
            a.r(t), a.d(t, { PlaceScreen: () => D, default: () => H });
            var r = a(202784),
                i = a(325686),
                o = a(154003),
                s = a(731708),
                n = a(392237),
                l = a(332920),
                c = a.n(l),
                d = a(171709),
                p = a(718e3),
                u = a(290402),
                h = a(252021),
                m = a(507651),
                g = a(652904),
                f = a(886191),
                y = a(292484),
                b = a(903019),
                _ = a(503229),
                C = a(71620),
                k = a(668214),
                E = a(242419),
                S = a(502909),
                x = a(600823);
            const Z = (0, S.ZP)({ namespace: "places" }),
                v = (0, S.tb)(Z, { context: "FETCH_PLACE", endpoint: (e) => e.withEndpoint(E.Z).fetchPlace }),
                T = { ...Z, ...v },
                w = x.Z.register(T),
                P = (e, t) => t.match.params.placeId,
                I = (e, t) => w.select(e, P(0, t)),
                N = (e, t) => w.selectFetchStatus(e, P(0, t)),
                R = (0, k.Z)()
                    .propsFromState(() => ({ place: I, placeFetchStatus: N, placeId: P }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, C.zr)("PLACE_SCREEN"), fetchPlaceIfNeeded: w.fetchOneIfNeeded }))
                    .withAnalytics({ page: "place" }),
                L = c().jaaa8984,
                $ = c().fa4e68ca,
                q = c().add55c98,
                B = c().f4a654a4,
                M = (e) => {
                    let t = {};
                    "foursquare" === e.vendor &&
                        (t = ((e) => {
                            const { venue_id: t } = e.data;
                            return { attributionDetails: r.createElement(d.default, { style: F.icon }), href: `https://foursquare.com/v/${t}`, buttonText: B };
                        })(e));
                    const { attributionDetails: a, buttonText: s, href: n } = t;
                    return r.createElement(i.Z, { style: F.attribution }, r.createElement(i.Z, { style: F.attributionDetails }, a), r.createElement(o.ZP, { link: n, size: "xSmall", type: "brandOutlined" }, s));
                },
                D = (e) => {
                    const { createLocalApiErrorHandler: t, fetchPlaceIfNeeded: a, history: o, location: n, place: l, placeFetchStatus: c, placeId: d } = e,
                        _ = l ? l.full_name : L;
                    r.useEffect(() => {
                        a(d).catch(t());
                    }, [t, a, d]);
                    const C = () => {
                            if (!l) return null;
                            const { attributes: e, vendor_info: t } = l,
                                { street_address: a } = e;
                            return r.createElement(i.Z, { style: F.locationDetails }, r.createElement(s.ZP, { size: "headline1", weight: "bold" }, l.full_name), a ? r.createElement(s.ZP, { color: "gray700", size: "body" }, a) : null, t ? M(t) : null);
                        },
                        k = () => "media" === (n.query && n.query.f),
                        E = () => {
                            const e = [
                                { isActive: x, key: $, retainScrollPosition: !1, to: n.pathname, label: $ },
                                { isActive: k, key: q, retainScrollPosition: !1, to: { query: { f: "media" }, pathname: n.pathname }, label: q },
                            ];
                            return r.createElement(m.Z, { links: e });
                        },
                        S = () => {
                            const e = k() ? `place:${d} filter:media` : `place:${d}`;
                            return r.createElement(f.Z, { query: e, searchMode: b.N3.Top });
                        },
                        x = () => "media" !== (n.query && n.query.f),
                        Z = (0, y.hx)();
                    return r.createElement(g.Z, null, r.createElement(h.Z, { backLocation: Z ? void 0 : "/home", documentTitle: _, history: o, primaryContent: r.createElement(r.Fragment, null, r.createElement(i.Z, { style: F.header }, r.createElement(u.Z, { fetchStatus: c, render: C }), E()), S()), sidebarContent: r.createElement(p.Z, null), title: Z ? null : L }));
                },
                F = n.default.create((e) => ({ header: { backgroundColor: e.colors.cellBackground, zIndex: e.componentZIndices.appBarZIndex }, locationDetails: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, icon: { color: e.colors.gray700 }, attribution: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space12 }, attributionDetails: { flexShrink: 1, marginEnd: e.spaces.space12 } })),
                H = R((0, _.Z)(D));
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => Z });
            var r = a(807896),
                i = a(202784),
                o = a(194504),
                s = a(235902),
                n = a(392237),
                l = a(325686),
                c = a(332920),
                d = a.n(c),
                p = a(912021),
                u = a(516951),
                h = a(731708),
                m = a(310088),
                g = a(175993),
                f = a(58881),
                y = a(530732);
            const b = d().d2414d31,
                _ = () => d().ce4e85ae,
                C = d().fb9f6f39;
            class k extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: a, query: r, state: i } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: r, method: "push", state: { ...i, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, r) => {
                            const i = n.default.theme.colors.text,
                                o = n.default.theme.colors.gray700;
                            return a || r ? (e || t ? i : o) : e ? i : o;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: r, children: o, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: k, style: S, to: x } = this.props,
                        { location: Z } = this.state,
                        v = x ? this._getMemoizedLink(x, k) : void 0,
                        T = c ? c(x) : Z?.pathname === v?.pathname,
                        w = f.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0 }),
                        P = g ? "medium" : T ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": T, focusable: !!T, interactiveStyles: w, link: v, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? E.pill : E.link, p && T ? E.active : null, d ? (p ? E.compactPill : E.compactLink) : null, u ? E.roundedRect : null, S], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: p && E.flexGrow }, i.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [E.text, { color: this._getTextColor(T, c, g, p) }, d && E.compactText, g && t && E.focusedText], weight: P }, e && i.createElement(e, { style: E.icon }), o, g || p ? null : i.createElement(l.Z, { style: T && [E.border, { backgroundColor: n.default.theme.colors[s] }] })), a ? i.createElement(m.Z, { count: a, standalone: !0, style: [E.badge, a >= 10 && E.multiDigitBadge, a >= 20 && E.truncatedCountBadge], truncatedCountFormatter: C, unreadCountLabel: b, withBorder: !1 }) : r ? i.createElement(m.Z, { pip: !0, standalone: !0, style: E.badgePip, textColor: "red500", unreadCountLabel: _, withBorder: !1 }) : null));
                }
            }
            (k.contextType = g.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const E = n.default.create((e) => ({
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
                S = k,
                x = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                Z = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: n, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = s.ZP.useProps(),
                        m = h() && !n,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: o, ...s }, c) => {
                                    const d = m ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return i.createElement(S, (0, r.Z)({ viewType: o }, s, { isCompact: a, isPillLink: n, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, a, n, l, m, c],
                        );
                    return i.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: n && x.gap, childrenStyle: !m && x.flexGrow, key: u, style: [n ? null : x.segmentedControl, m && x.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Place.918ecbda.js.map
