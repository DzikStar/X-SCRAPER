"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Place"],
    {
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                i = o(202784),
                a = o(107267),
                s = o(403556),
                n = o(791632);
            const l = (e) => {
                    const t = (0, a.useHistory)(),
                        { isCompact: o, ...l } = e;
                    return i.createElement(s.Z, (0, r.Z)({}, l, { isCompact: o || (0, n.HD)(t) }));
                },
                c = i.memo(l);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(500002),
                a = o(668214),
                s = o(997174),
                n = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: n.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class c extends r.Component {
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
                            location: { pathname: a, search: s },
                            locationKey: n,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = i || n;
                    ((c && i !== n) || (!c && o !== a) || r !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, i.ZP)(l(c));
        },
        886191: (e, t, o) => {
            o.d(t, { Z: () => C });
            var r = o(202784),
                i = o(731708),
                a = o(457311),
                s = o(111677),
                n = o.n(s),
                l = o(912021),
                c = o(864702),
                d = o(479506),
                p = o(903019),
                u = o(519896),
                h = o(774006),
                m = o(443781),
                g = o(810641),
                f = o(335632);
            const y = n().c09de2d4,
                b = n().ae111c99,
                _ = r.createElement(n().I18NFormatMessage, { $i18n: "e7e44bab" }, r.createElement(i.ZP, { link: "/settings/search" }, n().f191a2ba));
            class S extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === d.Z.ItemType.USER || e === d.Z.ItemType.TOPIC || e === d.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: o, searchMode: r, urtEndpointOptions: i, vertical: a } = this.props,
                                { featureSwitches: s } = this.context,
                                n = s.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, r, o, a, i, n);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || r.createElement(a.Z, { header: b({ query: t }), message: _ });
                        }),
                        (this._getMemoizedModule = (0, l.Z)((e, t, o, r, i, a, s) => (0, h.Z)({ query: e, searchMode: o, querySource: t, searchFilters: r, vertical: i, urtEndpointOptions: a, searchTimelinesGraphQLEnabled: s }))),
                        (this._getMemoizedEntryConfiguration = (0, l.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, f.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== p.N3.Live;
                    return r.createElement(g.Z, { apiErrorHandlerMap: c.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: u.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: y });
                }
            }
            S.contextType = m.rC;
            const C = S;
        },
        864702: (e, t, o) => {
            o.d(t, { d: () => l });
            var r = o(111677),
                i = o.n(r),
                a = o(615656),
                s = o(51525);
            const n = i().i1801686,
                l = { [a.ZP.GenericForbidden]: { toast: (0, s.j)() }, [a.ZP.InvalidRequestUrl]: { toast: { text: n, withClearButton: !0 } }, showToast: !0 };
        },
        883432: (e, t, o) => {
            o.d(t, { Z: () => r });
            const r = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        774006: (e, t, o) => {
            o.d(t, { Z: () => g, u: () => m });
            var r = o(644829),
                i = o(750085),
                a = o(903019),
                s = o(883432),
                n = o(555875),
                l = o(218951);
            const c = "search-",
                d = " near:me",
                p = " filter:follows",
                u = { [a.N3.Image]: { result_filter: a.N3.Image }, [a.N3.List]: { result_filter: a.N3.List }, [a.N3.Live]: { tweet_search_mode: a.N3.Live }, [a.N3.Media]: { result_filter: a.N3.Media }, [a.N3.Top]: {}, [a.N3.User]: { result_filter: a.N3.User }, [a.N3.Video]: { result_filter: a.N3.Video } },
                h = (e) => (((e) => e === s.Z.SpellingCorrectionRevertClick || e === s.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                m = () => (e, t) => {
                    e(
                        (0, n.CY)(t())
                            .filter((e) => 0 === e.indexOf(c))
                            .map((e) => (0, n.$q)(e)),
                    );
                },
                g = ({ query: e, searchMode: t = a.N3.Top, querySource: o, searchFilters: s, vertical: n, urtEndpointOptions: m, searchTimelinesGraphQLEnabled: g }) => {
                    const f = h(o),
                        y = s && s.peopleFilter ? "searcher_follows" : void 0,
                        b = y ? "-pf" : "",
                        _ = s && s.locationFilter && !e.includes(d) ? `${e}${d}` : e,
                        S = { timelineId: `${c}${_}-${t}${f}${b}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearch, getEndpointParams: (e) => ({ ...m?.requestParams, q: _, social_filter: y, vertical: n, ...u[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === a.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (g) {
                        const e = y && !_.includes(p) ? `${_}${p}` : _,
                            s = ((e) => {
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
                            n = `gql-${c}${_}-${t}${f}${b}`;
                        return (0, l.Z)({ ...S, timelineId: n, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: i.Z, network: { getEndpointParams: ({ count: t, cursor: r }) => ({ rawQuery: e, count: t, product: s, querySource: o, cursor: "string" == typeof r ? r : void 0 }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearchGraphQL } });
                    }
                    return (0, l.Z)(S);
                };
        },
        230558: (e, t, o) => {
            o.r(t), o.d(t, { PlaceScreen: () => M, default: () => W });
            var r = o(202784),
                i = o(325686),
                a = o(154003),
                s = o(731708),
                n = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(171709),
                p = o(718e3),
                u = o(290402),
                h = o(252021),
                m = o(507651),
                g = o(652904),
                f = o(886191),
                y = o(292484),
                b = o(903019),
                _ = o(503229),
                S = o(71620),
                C = o(668214),
                k = o(242419),
                x = o(502909),
                E = o(600823);
            const v = (0, x.ZP)({ namespace: "places" }),
                T = (0, x.tb)(v, { context: "FETCH_PLACE", endpoint: (e) => e.withEndpoint(k.Z).fetchPlace }),
                Z = { ...v, ...T },
                w = E.Z.register(Z),
                P = (e, t) => t.match.params.placeId,
                I = (e, t) => w.select(e, P(0, t)),
                N = (e, t) => w.selectFetchStatus(e, P(0, t)),
                R = (0, C.Z)()
                    .propsFromState(() => ({ place: I, placeFetchStatus: N, placeId: P }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, S.zr)("PLACE_SCREEN"), fetchPlaceIfNeeded: w.fetchOneIfNeeded }))
                    .withAnalytics({ page: "place" }),
                L = c().jaaa8984,
                $ = c().fa4e68ca,
                q = c().add55c98,
                B = c().f4a654a4,
                H = (e) => {
                    let t = {};
                    "foursquare" === e.vendor &&
                        (t = ((e) => {
                            const { venue_id: t } = e.data;
                            return { attributionDetails: r.createElement(d.default, { style: D.icon }), href: `https://foursquare.com/v/${t}`, buttonText: B };
                        })(e));
                    const { attributionDetails: o, buttonText: s, href: n } = t;
                    return r.createElement(i.Z, { style: D.attribution }, r.createElement(i.Z, { style: D.attributionDetails }, o), r.createElement(a.ZP, { link: n, size: "xSmall", type: "brandOutlined" }, s));
                },
                M = (e) => {
                    const { createLocalApiErrorHandler: t, fetchPlaceIfNeeded: o, history: a, location: n, place: l, placeFetchStatus: c, placeId: d } = e,
                        _ = l ? l.full_name : L;
                    r.useEffect(() => {
                        o(d).catch(t());
                    }, [t, o, d]);
                    const S = () => {
                            if (!l) return null;
                            const { attributes: e, vendor_info: t } = l,
                                { street_address: o } = e;
                            return r.createElement(i.Z, { style: D.locationDetails }, r.createElement(s.ZP, { size: "headline1", weight: "bold" }, l.full_name), o ? r.createElement(s.ZP, { color: "gray700", size: "body" }, o) : null, t ? H(t) : null);
                        },
                        C = () => "media" === (n.query && n.query.f),
                        k = () => {
                            const e = [
                                { isActive: E, key: $, retainScrollPosition: !1, to: n.pathname, label: $ },
                                { isActive: C, key: q, retainScrollPosition: !1, to: { query: { f: "media" }, pathname: n.pathname }, label: q },
                            ];
                            return r.createElement(m.Z, { links: e });
                        },
                        x = () => {
                            const e = C() ? `place:${d} filter:media` : `place:${d}`;
                            return r.createElement(f.Z, { query: e, searchMode: b.N3.Top });
                        },
                        E = () => "media" !== (n.query && n.query.f),
                        v = (0, y.hx)();
                    return r.createElement(g.Z, null, r.createElement(h.Z, { backLocation: v ? void 0 : "/home", documentTitle: _, history: a, primaryContent: r.createElement(r.Fragment, null, r.createElement(i.Z, { style: D.header }, r.createElement(u.Z, { fetchStatus: c, render: S }), k()), x()), sidebarContent: r.createElement(p.Z, null), title: v ? null : L }));
                },
                D = n.default.create((e) => ({ header: { backgroundColor: e.colors.cellBackground, zIndex: e.componentZIndices.appBarZIndex }, locationDetails: { borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space16 }, icon: { color: e.colors.gray700 }, attribution: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space12 }, attributionDetails: { flexShrink: 1, marginEnd: e.spaces.space12 } })),
                W = R((0, _.Z)(M));
        },
        403556: (e, t, o) => {
            o.d(t, { Z: () => v });
            var r = o(807896),
                i = o(202784),
                a = o(194504),
                s = o(235902),
                n = o(392237),
                l = o(325686),
                c = o(111677),
                d = o.n(c),
                p = o(912021),
                u = o(516951),
                h = o(731708),
                m = o(310088),
                g = o(175993),
                f = o(58881),
                y = o(530732);
            const b = d().d2414d31,
                _ = () => d().ce4e85ae,
                S = d().fb9f6f39;
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
                    const { Icon: e, "aria-label": t, badgeCount: o, badgePip: r, children: a, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: C, style: x, to: E } = this.props,
                        { location: v } = this.state,
                        T = E ? this._getMemoizedLink(E, C) : void 0,
                        Z = c ? c(E) : v?.pathname === T?.pathname,
                        w = f.Z.generate({ backgroundColor: "transparent", color: n.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? k.pillHoverStyle.backgroundColor : void 0 }),
                        P = g ? "medium" : Z ? "bold" : "medium";
                    return i.createElement(y.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: w, link: T, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [k.pillStyle] : [k.link]), ...(p && Z ? [k.pillActiveStyle] : []), d ? (p ? k.compactPill : k.compactLink) : null, u ? k.roundedRect : null, x], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => i.createElement(l.Z, { style: p && k.flexGrow }, i.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [k.text, { color: this._getTextColor(Z, c, g, p) }, d && k.compactText, g && t && k.focusedText, p && k.pillTextStyle, p && Z && k.pillActiveTextStyle, p && c && k.pillHoverTextStyle], weight: P }, e && i.createElement(e, { style: k.icon }), a, g || p ? null : i.createElement(l.Z, { style: Z && [k.border, { backgroundColor: n.default.theme.colors[s] }] })), o ? i.createElement(m.Z, { count: o, standalone: !0, style: [k.badge, o >= 10 && k.multiDigitBadge, o >= 20 && k.truncatedCountBadge], truncatedCountFormatter: S, unreadCountLabel: b, withBorder: !1 }) : r ? i.createElement(m.Z, { pip: !0, standalone: !0, style: k.badgePip, textColor: "red500", unreadCountLabel: _, withBorder: !1 }) : null));
                }
            }
            (C.contextType = g.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const k = n.default.create((e) => ({
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
                E = n.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                v = ({ alignFirstItem: e, "aria-label": t, isCompact: o, isPillLink: n, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = s.ZP.useProps(),
                        m = h() && !n,
                        g = i.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: a, ...s }, c) => {
                                    const d = m ? [E.linkRedesign, 0 === c && E.firstLinkRedesign, e && 0 === c && E.withNoPaddingStart] : void 0;
                                    return i.createElement(x, (0, r.Z)({ viewType: a }, s, { isCompact: o, isPillLink: n, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, o, n, l, m, c],
                        );
                    return i.createElement(a.Z, { "aria-label": t, buttonsContainerStyle: n && E.gap, childrenStyle: !m && E.flexGrow, key: u, style: [n ? null : E.segmentedControl, m && E.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Place.ad312f7a.js.map
