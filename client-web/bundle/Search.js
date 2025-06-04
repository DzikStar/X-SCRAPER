"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Search"],
    {
        58687: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = ({ apiClient: e, featureSwitches: t }) => ({ fetch: (t = {}, a = {}) => e.get("saved_searches/list", t, a), create: (t, a = {}) => e.post("saved_searches/create", t, {}, a), destroy: (t, a = {}) => e.post(`saved_searches/destroy/${t.id}`, t, {}, a) });
        },
        625661: (e, t, a) => {
            a.d(t, { ZP: () => u });
            var r = a(202784),
                o = a(614983),
                n = a.n(o),
                s = a(325686),
                d = a(370006),
                l = a(786998),
                i = a(929028),
                c = a(386802);
            function h(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: o, hideBackButton: n, isFullWidth: s, isLarge: i, leftControl: c, middleControl: u, position: p, rightControl: b, secondaryBar: m, style: S, subtitle: g, title: y, titleDomId: f, titleIconCell: w, titleIconCellSize: C, withBackground: _, withWideContainer: D } = this.props,
                        { isModal: k } = this.context,
                        v = n ? c : r.createElement(d.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!_, k, !!m);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: a, isFullWidth: s, isLarge: i, leftControl: v, middleControl: u, position: h(p, k, o), rightControl: b, style: S, subtitle: g, title: y, titleDomId: f, titleIconCell: w, titleIconCellSize: C, withBackground: E, withWideContainer: D }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = i.Z.getBackgroundStyles();
                    return t ? r.createElement(s.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        33104: (e, t, a) => {
            a.d(t, { Z: () => o });
            a(202784);
            var r = a(325686);
            const o = (0, a(337455).Z)(r.Z);
        },
        789831: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r = a(807896),
                o = a(202784),
                n = a(325686),
                s = a(392237),
                d = a(655352);
            const l = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                i = ({ children: e, component: t, fab: a, shouldRenderFab: s = !0, style: i, withoutBottomPadding: c, ...h }) => {
                    const u = t || n.Z,
                        p = s && !(0, d.ZP)();
                    return o.createElement(u, (0, r.Z)({}, h, { style: [p && !c && l.root, i] }), e, p ? a : null);
                };
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => m, w: () => p });
            var r = a(202784),
                o = a(325686),
                n = a(108362),
                s = a(386802),
                d = a(392237),
                l = a(652904),
                i = a(555079),
                c = a(625661),
                h = a(449067),
                u = a(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: n, centerTitle: s, hideBackButton: d, history: l, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: m, rightControl: S, secondaryBar: g, subtitle: y, title: f } = this.props,
                                { isModal: w } = this.context;
                            return r.createElement(o.Z, { style: w ? [b.childViewAppBarRoot, b.appBarZindex] : b.appBarZindex }, r.createElement(c.ZP, { backButtonType: a || (w ? "close" : "back"), backLocation: n, centerTitle: s, fixed: !w, hideBackButton: d, history: l, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: m, ref: e, rightControl: S, secondaryBar: g, style: [w && b.appBarModal, t], subtitle: y, title: f, titleDomId: i.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: s, documentTitle: d, isFullWidth: i, isLarge: c, renderHeader: p, title: m, withoutBottomBarMobile: S } = this.props,
                        { isModal: g } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(h.Z.Configure, { documentTitle: d, headerless: !0, title: m }), r.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [b.root, g && b.rootModal] }, !g && y, r.createElement(n.Z, { isFullWidth: i, isLarge: c, style: [b.container, g && b.containerModal, s] }, g ? r.createElement(u.Z, { style: b.viewport }, y, a) : a), t ? r.createElement(o.Z, { style: [b.bottomBarModal, !g && !S && b.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: i, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const b = d.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: d.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = p;
        },
        896008: (e, t, a) => {
            a.d(t, { J: () => x, Z: () => Z });
            var r = a(202784),
                o = a(325686),
                n = a(449479),
                s = a(30183),
                d = a(392237),
                l = a(111677),
                i = a.n(l),
                c = a(744531),
                h = a(685399),
                u = a(443781),
                p = a(369241),
                b = a(725516);
            const m = "searchFiltersAdvancedSearch",
                S = Object.freeze({ People: "People", Location: "Location" }),
                g = i().j622effe,
                y = i().g2fd3206,
                f = i().defb4aaa,
                w = i().af293dc2,
                C = i().jaaa8984,
                _ = i().i5045e74,
                D = i().h2388754,
                k = "anyone",
                v = "youFollow",
                E = "anywhere",
                A = "nearYou",
                M = [
                    {
                        label: y,
                        name: S.People,
                        options: [
                            { label: f, value: k },
                            { label: w, value: v },
                        ],
                    },
                    {
                        label: C,
                        name: S.Location,
                        options: [
                            { label: _, value: E },
                            { label: D, value: A },
                        ],
                    },
                ];
            class x extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderFilters = () => M.map((e, t) => r.createElement(o.Z, { key: e.name, style: t > 0 && T.paddingTop }, r.createElement(n.Z, { label: e.label, name: e.name, onChange: this._handleFilterChange, options: e.options, value: this._getCurrentValue(e.name) })))),
                        (this._getCurrentValue = (e) => {
                            switch (e) {
                                case S.People:
                                    return this.state.peopleFilter;
                                case S.Location:
                                    return this.state.locationFilter;
                                default:
                                    return "";
                            }
                        }),
                        (this._handleFilterChange = (e, t) => {
                            const { loggedInUserId: a } = this.context,
                                {
                                    location: { query: r },
                                } = this.props;
                            switch (e) {
                                case S.People:
                                    if (a) {
                                        this.setState({ peopleFilter: t });
                                        const e = { pf: t === v ? "on" : void 0, lf: "on" === r.lf ? r.lf : void 0 };
                                        this._executeSearch(e, "people");
                                    } else this.setState({ shouldShowLoginSheet: !0 });
                                    break;
                                case S.Location: {
                                    this.setState({ locationFilter: t });
                                    const e = { lf: t === A ? "on" : void 0, pf: "on" === r.pf ? r.pf : void 0 };
                                    this._executeSearch(e, "location");
                                    break;
                                }
                            }
                        }),
                        (this._getAdvancedSearchLink = () => {
                            const { location: e } = this.props;
                            return { pathname: "/search-advanced", query: { ...(0, c.Z)(e.query, ["q", "src"]) } };
                        }),
                        (this._handleFooterPress = () => {
                            this._scribeAction("advanced_search");
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe({ element: e, action: "click" });
                        }),
                        (this._executeSearch = (e, t) => {
                            const { history: a, location: r } = this.props;
                            this._scribeAction(t);
                            const o = this._getPathname();
                            a.replace({ pathname: o, query: (0, h.Z)({ ...r.query, ...e }) });
                        }),
                        (this._getPathname = () => {
                            const { location: e } = this.props;
                            if (e.pathname.includes("/hashtag/")) return e.pathname;
                            if (e.state && e.state.previousPath && e.state.previousPath.includes("/hashtag/") && "/search" !== e.pathname) {
                                const t = e.state.previousPath,
                                    a = t.indexOf("?") > -1 ? t.indexOf("?") : t.length;
                                return t.substring(0, a);
                            }
                            return "/search";
                        }),
                        (this._handleHideLoginSheet = () => {
                            this.setState({ shouldShowLoginSheet: !1 });
                        });
                    const { loggedInUserId: a } = this.context,
                        { location: s } = e,
                        d = s.query,
                        l = a && d && d.pf ? v : k,
                        i = d && d.lf ? A : E;
                    this.state = { peopleFilter: l, locationFilter: i, shouldShowLoginSheet: !1 };
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ action: "impression" });
                }
                render() {
                    const { withBottomBorder: e } = this.props,
                        { shouldShowLoginSheet: t } = this.state;
                    return r.createElement(o.Z, null, r.createElement(o.Z, { style: T.content }, this._renderFilters()), r.createElement(o.Z, { style: e && T.bottomBorder, testID: m }, r.createElement(s.Z, { link: this._getAdvancedSearchLink(), onPress: this._handleFooterPress, text: g })), t ? r.createElement(p.ZP, { onClose: this._handleHideLoginSheet }) : null);
                }
            }
            (x.contextType = u.rC), (x.defaultProps = { withBottomBorder: !1 });
            const T = d.default.create((e) => ({ content: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space16 }, bottomBorder: { borderBottomColor: e.colors.gray50, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, paddingTop: { paddingTop: e.spaces.space4 } })),
                Z = (0, b.Z)(x, { page: "search_filters" });
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => i });
            var r = a(807896),
                o = a(202784),
                n = a(107267),
                s = a(403556),
                d = a(791632);
            const l = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: a, ...l } = e;
                    return o.createElement(s.Z, (0, r.Z)({}, l, { isCompact: a || (0, d.HD)(t) }));
                },
                i = o.memo(l);
        },
        387524: (e, t, a) => {
            a.d(t, { Z: () => m });
            var r = a(807896),
                o = a(202784),
                n = a(325686),
                s = a(292627),
                d = a(537392),
                l = a(392237),
                i = a(365023),
                c = a(392027),
                h = a(774654),
                u = a(725516),
                p = a(443781);
            const b = l.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${l.default.iPhoneOffsetBottom} - ${h.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                m = (e) => {
                    const { "aria-label": t, label: a, onPress: m, scribeComponent: S, ...g } = e,
                        { loggedInUserId: y } = o.useContext(p.rC),
                        f = (0, u.z)(),
                        w = o.useCallback(
                            (e) => {
                                f.scribe({ component: S, action: "click" }), m && m(e);
                            },
                            [f, m, S],
                        ),
                        C = h.ZM.useCollapsibleNavBars(),
                        _ = [...h.Ah({ elementPosition: "bottom" }), C && b.fabStaysAboveSafeArea];
                    return y
                        ? o.createElement(
                              s.Z.FloatingAction,
                              null,
                              o.createElement(d.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > l.default.theme.breakpoints.large,
                                      d = e > l.default.theme.breakpoints.medium,
                                      h = e < l.default.theme.breakpoints.micro,
                                      u = [b.root, d && b.rootMedium, s && b.rootLarge],
                                      p = [b.fab, s && b.fabLarge, h && b.fabMicro, _];
                                  return o.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      o.createElement(i.Z, { id: "FloatingActionButtonBase" }, (e, d) => o.createElement(n.Z, (0, r.Z)({ ref: e() }, d({ style: p })), o.createElement(c.Z, (0, r.Z)({}, g, { "aria-label": t, label: s ? a : void 0, onPress: w, style: h && b.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, a) => {
            a.d(t, { Z: () => l });
            a(136728);
            var r = a(202784),
                o = a(387524),
                n = a(635510);
            const s = "/compose/post";
            class d extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: a } = this.props,
                                r = { pathname: s, state: (t && t()) || {} };
                            a.push(r);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: a, scribeComponent: d } = this.props;
                    return r.createElement(o.Z, { "aria-label": e, href: s, icon: t, label: a, onPress: this._handlePress, scribeComponent: d, testID: n.Z.tweet });
                }
            }
            const l = d;
        },
        32677: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                o = a(111677),
                n = a.n(o),
                s = a(186444),
                d = a(355883);
            const l = n().j0179e90,
                i = n().ee69d769({ verb: "" }),
                c = r.createElement(s.default, null),
                h = ({ getLocationState: e, history: t }) => r.createElement(d.Z, { "aria-label": l, getLocationState: e, history: t, icon: c, label: i, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                o = a(500002),
                n = a(668214),
                s = a(997174),
                d = a(118823);
            const l = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class i extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: r },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: n, search: s },
                            locationKey: d,
                        } = e;
                    let l = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (l = !0));
                    const i = o || d;
                    ((i && o !== d) || (!i && a !== n) || r !== s || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            i.defaultProps = { children: null };
            const c = (0, o.ZP)(l(i));
        },
        886191: (e, t, a) => {
            a.d(t, { Z: () => C });
            var r = a(202784),
                o = a(731708),
                n = a(457311),
                s = a(111677),
                d = a.n(s),
                l = a(912021),
                i = a(864702),
                c = a(479506),
                h = a(903019),
                u = a(519896),
                p = a(774006),
                b = a(443781),
                m = a(810641),
                S = a(335632);
            const g = d().c09de2d4,
                y = d().ae111c99,
                f = r.createElement(d().I18NFormatMessage, { $i18n: "e7e44bab" }, r.createElement(o.ZP, { link: "/settings/search" }, d().f191a2ba));
            class w extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === c.Z.ItemType.USER || e === c.Z.ItemType.TOPIC || e === c.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: a, searchMode: r, urtEndpointOptions: o, vertical: n } = this.props,
                                { featureSwitches: s } = this.context,
                                d = s.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, r, a, n, o, d);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || r.createElement(n.Z, { header: y({ query: t }), message: f });
                        }),
                        (this._getMemoizedModule = (0, l.Z)((e, t, a, r, o, n, s) => (0, p.Z)({ query: e, searchMode: a, querySource: t, searchFilters: r, vertical: o, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: s }))),
                        (this._getMemoizedEntryConfiguration = (0, l.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, S.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== h.N3.Live;
                    return r.createElement(m.Z, { apiErrorHandlerMap: i.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: u.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: g });
                }
            }
            w.contextType = b.rC;
            const C = w;
        },
        243754: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                o = a(190286),
                n = a(111677),
                s = a.n(n),
                d = a(436001);
            const l = s().hffea05c,
                i = s().j037e374,
                c = s().d96cf7ce,
                h = ({ onCancel: e, onConfirm: t }) => r.createElement(o.Z, { confirmButtonLabel: c, confirmButtonType: "destructiveFilled", headline: l, onCancel: e, onConfirm: t, testID: d.Z.deleteSavedSearchDialog, text: i });
        },
        436001: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { deleteRecentSearchesDialog: "deleteRecentSearchesDialog", deleteSavedSearchDialog: "deleteSavedSearchDialog", typeaheadEmptySearch: "typeaheadEmptySearch", typeaheadRecentSearchesHeader: "typeaheadRecentSearchesHeader", typeaheadRecentSearchesItem: "typeaheadRecentSearchesItem", typeaheadSavedSearchesContainer: "typeaheadSavedSearchesContainer", typeaheadSavedSearchesHeader: "typeaheadSavedSearchesHeader", typeaheadSavedSearchesItem: "typeaheadSavedSearchesItem" };
        },
        864702: (e, t, a) => {
            a.d(t, { d: () => l });
            var r = a(111677),
                o = a.n(r),
                n = a(615656),
                s = a(51525);
            const d = o().i1801686,
                l = { [n.ZP.GenericForbidden]: { toast: (0, s.j)() }, [n.ZP.InvalidRequestUrl]: { toast: { text: d, withClearButton: !0 } }, showToast: !0 };
        },
        337455: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                o = a(411916),
                n = a.n(o),
                s = a(373463),
                d = a.n(s);
            function l(e) {
                class t extends r.Component {
                    constructor(e, t) {
                        super(e, t), (this.state = { shouldRender: !1 }), (this._mounted = !0);
                    }
                    componentWillUnmount() {
                        this._mounted = !1;
                    }
                    componentDidMount() {
                        n()(() => {
                            this._mounted && this.setState({ shouldRender: !0 });
                        });
                    }
                    render() {
                        return this.state.shouldRender ? r.createElement(e, this.props) : null;
                    }
                }
                return d()(t, e);
            }
        },
        883432: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        554951: (e, t, a) => {
            a.d(t, { GL: () => S, as: () => m, k9: () => g, l9: () => y });
            var r = a(58687),
                o = a(163889),
                n = a(499627),
                s = a(917799),
                d = a(312771),
                l = a(390387);
            const i = "savedSearches",
                c = { fetchStatus: d.ZP.NONE, savedSearches: [] },
                h = Object.freeze({ REQUEST: "rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST", SUCCESS: "rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS", FAILURE: "rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/savedSearches/SAVE_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/SAVE_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/SAVE_SEARCH_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE" });
            function b(e = c, t) {
                if (!t) return e;
                switch (t.type) {
                    case h.SUCCESS: {
                        const a = t.payload,
                            r = Array.isArray(a);
                        return r || (0, o.ZP)("Saved search results are not type array", { extra: { savedSearchResultsType: typeof a } }), { ...e, fetchStatus: d.ZP.LOADED, savedSearches: r && a ? a : [] };
                    }
                    case h.FAILURE:
                        return { ...e, fetchStatus: d.ZP.FAILED };
                    case u.SUCCESS:
                        return { ...e, savedSearches: t.payload ? [...e.savedSearches, t.payload] : e.savedSearches };
                    case p.SUCCESS:
                        return t.payload ? { ...e, savedSearches: e.savedSearches.filter((e) => e.id_str !== t.payload.id_str) } : e;
                    default:
                        return e;
                }
            }
            n.Z.register({ [i]: b });
            const m = (e) => e[i].savedSearches,
                S =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, s._O)(t, { request: o.withEndpoint(r.Z).create, params: { query: e } })({ actionTypes: u, context: "SAVE_SEARCH" }),
                g =
                    (e) =>
                    (t, a, { api: o }) =>
                        (0, s._O)(t, { request: o.withEndpoint(r.Z).destroy, params: { id: e } })({ actionTypes: p, context: "DELETE_SAVED_SEARCH" }),
                y =
                    () =>
                    (e, t, { api: a }) => {
                        const o = t();
                        if (!(0, l.Qb)(o)) return Promise.resolve();
                        const n = ((e) => e[i].fetchStatus)(o) === d.ZP.LOADED;
                        return n ? Promise.resolve() : e((e, t, { api: a }) => (0, s._O)(e, { request: a.withEndpoint(r.Z).fetch, params: {} })({ actionTypes: h, context: "FETCH_SAVED_SEARCHES" }));
                    };
        },
        774006: (e, t, a) => {
            a.d(t, { Z: () => m, u: () => b });
            var r = a(644829),
                o = a(750085),
                n = a(903019),
                s = a(883432),
                d = a(555875),
                l = a(218951);
            const i = "search-",
                c = " near:me",
                h = " filter:follows",
                u = { [n.N3.Image]: { result_filter: n.N3.Image }, [n.N3.List]: { result_filter: n.N3.List }, [n.N3.Live]: { tweet_search_mode: n.N3.Live }, [n.N3.Media]: { result_filter: n.N3.Media }, [n.N3.Top]: {}, [n.N3.User]: { result_filter: n.N3.User }, [n.N3.Video]: { result_filter: n.N3.Video } },
                p = (e) => (((e) => e === s.Z.SpellingCorrectionRevertClick || e === s.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                b = () => (e, t) => {
                    e(
                        (0, d.CY)(t())
                            .filter((e) => 0 === e.indexOf(i))
                            .map((e) => (0, d.$q)(e)),
                    );
                },
                m = ({ query: e, searchMode: t = n.N3.Top, querySource: a, searchFilters: s, vertical: d, urtEndpointOptions: b, searchTimelinesGraphQLEnabled: m }) => {
                    const S = p(a),
                        g = s && s.peopleFilter ? "searcher_follows" : void 0,
                        y = g ? "-pf" : "",
                        f = s && s.locationFilter && !e.includes(c) ? `${e}${c}` : e,
                        w = { timelineId: `${i}${f}-${t}${S}${y}`, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearch, getEndpointParams: (e) => ({ ...b?.requestParams, q: f, social_filter: g, vertical: d, ...u[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === n.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (m) {
                        const e = g && !f.includes(h) ? `${f}${h}` : f,
                            s = ((e) => {
                                switch (e) {
                                    case n.N3.Image:
                                        return "Photos";
                                    case n.N3.List:
                                        return "Lists";
                                    case n.N3.Media:
                                        return "Media";
                                    case n.N3.Top:
                                        return "Top";
                                    case n.N3.User:
                                        return "People";
                                    case n.N3.Video:
                                        return "Videos";
                                    case n.N3.Live:
                                    default:
                                        return "Latest";
                                }
                            })(t),
                            d = `gql-${i}${f}-${t}${S}${y}`;
                        return (0, l.Z)({ ...w, timelineId: d, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: o.Z, network: { getEndpointParams: ({ count: t, cursor: r }) => ({ rawQuery: e, count: t, product: s, querySource: a, cursor: "string" == typeof r ? r : void 0 }), getEndpoint: (e) => e.withEndpoint(r.Z).fetchSearchGraphQL } });
                    }
                    return (0, l.Z)(w);
                };
        },
        80927: (e, t, a) => {
            a.r(t), a.d(t, { SearchFiltersScreen: () => h, default: () => u });
            var r = a(807896),
                o = a(202784),
                n = a(111677),
                s = a.n(n),
                d = a(980407),
                l = a(896008),
                i = a(725516);
            const c = s().aea62568;
            function h(e) {
                const { history: t, location: a } = e;
                return o.createElement(d.Z, { documentTitle: c, history: t, title: c }, o.createElement(l.J, (0, r.Z)({}, e, { key: a.key, withBottomBorder: !0 })));
            }
            const u = (0, i.Z)(h, { page: "search_filters" });
        },
        111594: (e, t, a) => {
            a.r(t), a.d(t, { SearchScreen: () => Ue, default: () => We });
            var r = a(202784),
                o = a(537392),
                n = a(691533),
                s = a(844685),
                d = a(457311),
                l = a(111677),
                i = a.n(l),
                c = a(912021),
                h = a(459679),
                u = a(791632),
                p = a(805104),
                b = a(718e3);
            a(272175);
            i().b11805af, i().d610e8c3;
            var m = a(896008),
                S = a(252021),
                g = a(507651),
                y = a(443781),
                f = a(652904),
                w = a(243754);
            const C = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("icons.23"),
                        a.e("icons.0"),
                        a.e("icons.2"),
                        a.e("icons.16"),
                        a.e("icons.19"),
                        a.e("icons.10"),
                        a.e("icons.13"),
                        a.e("icons.24"),
                        a.e("icons.7"),
                        a.e("icons.22"),
                        a.e("icons.27"),
                        a.e("icons.17"),
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("icons.11"),
                        a.e("icons.26"),
                        a.e("modules.audio-6107ac1a"),
                        a.e("modules.audio-b953418a"),
                        a.e("modules.audio-7c51e6a7"),
                        a.e("modules.audio-04db59e9"),
                        a.e("modules.audio-76583d6c"),
                        a.e("modules.audio-b7a8a5fb"),
                        a.e("modules.audio-51f6e793"),
                        a.e("modules.audio-e019dbda"),
                        a.e("modules.audio-262c94d4"),
                        a.e("modules.audio-c6fe4ea4"),
                        a.e("icons.8"),
                        a.e("icons.4"),
                        a.e("icons.14"),
                        a.e("icons.28"),
                        a.e("icons.21"),
                        a.e("icons.3"),
                        a.e("icons.1"),
                        a.e("icons.18"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSp"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        a.e("shared~bundle.Grok~bundle.LiveEvent~loader.JetfuelFrame~loader.TimelineFrameHandler~loader.PremiumLoaders~ico"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-c6537f3f"),
                        a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-1fa591c2"),
                        a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-7290f522"),
                        a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-bfc056f9"),
                        a.e("shared~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen-ed448320"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        a.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        a.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        a.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        a.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        a.e("shared~bundle.Grok~loader.Markdown"),
                        a.e("bundle.Grok-bc6ccf4c"),
                        a.e("bundle.Grok-e96e9bea"),
                        a.e("bundle.Grok-0ae4e026"),
                        a.e("bundle.Grok-b16f5c14"),
                        a.e("bundle.Grok-9f4db315"),
                        a.e("bundle.Grok-e4e3d8bb"),
                        a.e("bundle.Grok-63cb1cc4"),
                        a.e("bundle.Grok-c69e90f3"),
                        a.e("bundle.Grok-ea2f266f"),
                        a.e("bundle.Grok-16d5f187"),
                        a.e("bundle.Grok-bf286bb5"),
                        a.e("bundle.Grok-78699f4a"),
                        a.e("bundle.Grok-38dc3b4a"),
                        a.e("bundle.Grok-1d830d6b"),
                        a.e("bundle.Grok-d49ace54"),
                        a.e("bundle.Grok-3277c3ad"),
                        a.e("bundle.Grok-57c2c4a2"),
                        a.e("bundle.Grok-f1a12957"),
                        a.e("bundle.Grok-78667c23"),
                        a.e("bundle.Grok-a244d277"),
                        a.e("bundle.Grok-0d8ef87b"),
                        a.e("bundle.Grok-1d41f45b"),
                        a.e("bundle.Grok-b8348d5d"),
                        a.e("bundle.Grok-7bc92c09"),
                        a.e("bundle.Grok-f8a31592"),
                        a.e("bundle.Grok-bd027025"),
                        a.e("bundle.Grok-7a6ce5c4"),
                        a.e("bundle.Grok-cebf58fc"),
                        a.e("bundle.Grok-29bebf45"),
                        a.e("bundle.Grok-9e9ee61b"),
                        a.e("bundle.Grok-6ac0f1a5"),
                        a.e("bundle.Grok-3c20ad5c"),
                    ]).then(a.bind(a, 528829)),
            });
            var _ = a(601576);
            const D = i().f9d35b98,
                k = i().ha925ad4,
                v = i().h0a9931c,
                E = { customErrorHandler: () => (0, _.mf)({ text: k }), showToast: !0 },
                A = { customErrorHandler: () => (0, _.mf)({ text: D }), showToast: !0 },
                M = { customErrorHandler: () => (0, _.mf)({ text: v }), showToast: !0 };
            var x = a(10656),
                T = a(293115),
                Z = a(942893),
                I = a(903019),
                B = a(615027),
                R = a(24949),
                P = a(71620),
                L = a(2430),
                N = a(668214),
                F = a(704279),
                q = a(554951),
                G = a(936572);
            const H = (e, t) => {
                    const { location: a } = t;
                    return a.query && a.query.src && "string" == typeof a.query.src ? a.query.src : "";
                },
                O = (e, t) => {
                    const {
                        location: a,
                        match: { params: r },
                    } = t;
                    return r && r.unsafeHashtagQuery && "string" == typeof r.unsafeHashtagQuery ? `#${r.unsafeHashtagQuery}` : (a && a.query && a.query.q && (0, L.BX)(a.query.q)) || "";
                },
                U = (e, t) => {
                    const { location: a } = t;
                    return 0 === a.pathname.indexOf("/search") ? "search" : "hashtag";
                },
                W = (e, t) => !!(t.location.state || {}).searchFocused,
                z = (0, R.P1)((0, L.cI)("pf"), (0, L.cI)("lf"), (e, t) => ({ peopleFilter: e, locationFilter: t })),
                $ = (0, N.Z)()
                    .propsFromState(() => ({ searchFocused: W, query: O, querySrc: H, isQueryAlreadySaved: (0, R.P1)(O, q.as, (e, t) => t.map((e) => e.query).indexOf(e) > -1), searchType: U, searchFilters: z, mode: I.Jm, savedSearches: q.as, vertical: (0, L.cI)("vertical"), isSideNavExpandedByUser: G.op }))
                    .propsFromActions(() => ({ addToast: _.fz, createLocalApiErrorHandler: (0, P.zr)("SEARCH_SCREEN"), deleteSavedSearch: q.k9, fetchSavedSearchesIfNeeded: q.l9, saveSearch: q.GL, scribeAction: F.n }))
                    .withAnalytics({ page: "search" });
            a(136728), a(901951);
            var V = a(811176),
                Q = a(517747),
                j = a(956272),
                J = a(698891),
                K = a(982866),
                Y = a(607127),
                X = a(744531),
                ee = a(952793);
            const te = "searchFilters-overflow",
                ae = "advancedSearch-overflow",
                re = "searchSettings-overflow",
                oe = "saveSearch-overflow",
                ne = "deleteSavedSearch-overflow",
                se = i().h1ef00dc,
                de = i().aea62568,
                le = i().j622effe,
                ie = i().h4912b5e,
                ce = i().b9bc69ca;
            const he = function (e) {
                const { deleteSavedSearch: t, isLoggedIn: a, isQueryAlreadySaved: o, isTwoColumn: n, location: s, onClose: d, saveSearch: l } = e,
                    i = (0, ee.hC)("responsive_web_saved_search_enabled"),
                    c = [];
                return (
                    n || c.push({ Icon: Q.default, testID: te, text: de, link: { pathname: "/i/search_filters", query: s.query } }),
                    c.push({ Icon: j.default, testID: ae, text: le, link: { pathname: "/search-advanced", query: { ...(0, X.Z)(s.query, ["src"]) } } }),
                    a &&
                        (c.unshift({ Icon: J.default, testID: re, text: se, link: "/settings/search" }),
                        i &&
                            (o
                                ? c.push({
                                      Icon: Y.default,
                                      isEmphasized: !0,
                                      testID: ne,
                                      text: ce,
                                      onClick: (e) => {
                                          e(), t();
                                      },
                                  })
                                : c.push({
                                      Icon: K.default,
                                      testID: oe,
                                      text: ie,
                                      onClick: (e) => {
                                          e(), l();
                                      },
                                  }))),
                    r.createElement(V.Z, { items: c, onCloseRequested: d })
                );
            };
            var ue = a(476984),
                pe = a.n(ue),
                be = a(316118);
            var me = a(33104),
                Se = a(789831),
                ge = a(959658),
                ye = a(32677),
                fe = a(886191),
                we = a(864702),
                Ce = a(774006),
                _e = a(735313);
            const De = (e, t) => "POP" === t.history.action,
                ke = (e, t) => {
                    const { location: a } = t;
                    return a?.state?.urtEndpointOptions;
                },
                ve = (0, N.Z)()
                    .propsFromState(() => ({ dataLookupId: I.XN, isBackNavigation: De, searchMode: I.Jm, urtEndpointOptions: ke }))
                    .propsFromActions(() => ({ clearTimelineCache: ({ fetchOptions: e, module: t }) => (0, _e.Z)(t, e), createLocalApiErrorHandler: (0, P.zr)("SEARCH_RESULTS_SCREEN") })),
                Ee = (e) =>
                    e &&
                    (function (e) {
                        if (!e) return !1;
                        const t = (0, be.Z)(e);
                        return 1 === t.length && t[0] === e.slice(1);
                    })(e)
                        ? { defaultText: ` ${e}`, positionCursorAtBeginning: !0 }
                        : void 0;
            class Ae extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getSearchMode = () => {
                            const { searchMode: e } = this.props,
                                { featureSwitches: t, viewerUserId: a } = this.context;
                            return (0, I.PH)(e, t, !!a) ? e : I.N3.Top;
                        }),
                        (this._getFabState = () => {
                            const { query: e } = this.props;
                            return this._getMemoizedComposeLocationState(e);
                        }),
                        (this._getMemoizedComposeLocationState = (0, c.Z)(Ee));
                }
                componentDidMount() {
                    const { isBackNavigation: e } = this.props;
                    e || this._clearTimelineCache();
                }
                componentDidUpdate(e) {
                    const { isBackNavigation: t, query: a, querySrc: r, searchFilters: o, shouldClearTimelineCache: n } = this.props;
                    t || (!n && e.query === a && e.querySrc === r && pe()(e.searchFilters, o)) || this._clearTimelineCache();
                }
                render() {
                    const { query: e, querySrc: t, searchFilters: a, searchFocused: o, urtEndpointOptions: n, vertical: s } = this.props,
                        { featureSwitches: d, viewerUserId: l } = this.context,
                        i = !(!l || !d.isTrue("voice_rooms_search_results_page_audiospace_ring_enabled")),
                        c = this._getSearchMode();
                    return r.createElement(Se.Z, { component: me.Z, fab: this._renderFloatingComposeButton(), shouldRenderFab: !o }, r.createElement(ge.b.Provider, { query: e }, r.createElement(fe.Z, { fetchOptions: this._getFetchOptions(), query: e, querySrc: t, searchFilters: a, searchMode: c, urtEndpointOptions: n, vertical: s, withUserPresence: i })));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return r.createElement(ye.Z, { getLocationState: this._getFabState, history: e });
                }
                _getFetchOptions() {
                    const { dataLookupId: e, querySrc: t } = this.props;
                    return { query_source: t, data_lookup_id: e };
                }
                _clearTimelineCache() {
                    const { clearTimelineCache: e, createLocalApiErrorHandler: t, query: a, querySrc: r, searchFilters: o, urtEndpointOptions: n } = this.props,
                        s = this._getSearchMode(),
                        { featureSwitches: d } = this.context,
                        l = d.isTrue("search_timelines_graphql_enabled");
                    (0, u.HD)(this.context.history) || e({ module: (0, Ce.Z)({ query: a, querySource: r, searchMode: s, searchFilters: o, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: l }), fetchOptions: this._getFetchOptions() }).catch(t(we.d));
                }
            }
            Ae.contextType = y.rC;
            const Me = ve(Ae),
                xe = "searchBoxOverflowButton",
                Te = i().a9ae1e78,
                Ze = i().e75df5c9,
                Ie = i().i66136aa,
                Be = i().d601fc20,
                Re = i().b0041756,
                Pe = i().add55c98,
                Le = i().g2fd3206,
                Ne = i().ac4fb0f4,
                Fe = i().bb967f9e,
                qe = i().aea62568,
                Ge = i().gfcfbf8c,
                He = i().a4645d92,
                Oe = [
                    { type: I.N3.Top, label: Ie },
                    { type: I.N3.Live, label: Be },
                    { type: I.N3.User, label: Le },
                    { type: I.N3.Video, label: Fe },
                    { type: I.N3.Image, label: Ne },
                    { type: I.N3.Media, label: Pe },
                    { type: I.N3.List, label: Re },
                ];
            class Ue extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._viewerUserId = this.context.viewerUserId),
                        (this.state = { shouldShowDeleteSearchConfirmation: !1, shouldClearTimelineCache: !1 }),
                        (this._getScribeData = (0, c.Z)((e, t, a, r, o) => ({ search_details: { ...(0, I.hB)({ query: e, querySrc: t, searchFilters: a, modeValue: r, vertical: o }) } }))),
                        (this._renderRightControl = ({ isTwoColumn: e, searchFocused: t }) => (e || !t ? r.createElement(p.Z, { onClick: this._handleOverflowMenuClick, renderMenu: this._renderMenu, testID: xe }) : void 0)),
                        (this._renderMenu = (e) => {
                            const { history: t, isQueryAlreadySaved: a, location: n } = this.props,
                                s = !!this.context.viewerUserId;
                            return r.createElement(o.ZP, null, ({ windowWidth: o }) => {
                                const d = x.Z.isTwoColumnLayout(o);
                                return r.createElement(he, { deleteSavedSearch: this._onDeleteSavedSearchMenuClick, history: t, isLoggedIn: s, isQueryAlreadySaved: a, isTwoColumn: d, location: n, onClose: e, saveSearch: this._onSaveSearch });
                            });
                        }),
                        (this._onSaveSearch = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: a, query: r, saveSearch: o, savedSearches: n } = this.props,
                                s = n.length;
                            r &&
                                o(r)
                                    .then(() => e({ text: Ge }))
                                    .catch(a(s < 25 ? E : A));
                            const d = Z.Z.forSavedSearchResult(r, s);
                            t.scribe({ element: "saved_search", action: "add", data: { items: [d] } });
                        }),
                        (this._handleOnDeleteSavedSearchConfirm = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: a, deleteSavedSearch: r, query: o, savedSearches: n } = this.props,
                                s = n.findIndex((e) => e.query === o),
                                d = n[s];
                            if (d) {
                                r(d.id_str)
                                    .then(() => e({ text: He }))
                                    .catch(a(M));
                                const o = Z.Z.forSavedSearchResult(d.query, s);
                                t.scribe({ element: "saved_search", action: "delete", data: { items: [o] } }), this.setState({ shouldShowDeleteSearchConfirmation: !1 });
                            }
                        }),
                        (this._handleOnDeleteSavedSearchCancel = () => {
                            this.setState({ shouldShowDeleteSearchConfirmation: !1 });
                        }),
                        (this._onDeleteSavedSearchMenuClick = () => {
                            this.setState({ shouldShowDeleteSearchConfirmation: !0 });
                        }),
                        (this._handleOverflowMenuClick = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "overflow_menu", action: "click" });
                        }),
                        (this._renderPrimaryContent = (e, t) => {
                            const { featureSwitches: a } = this.context,
                                { shouldShowDeleteSearchConfirmation: o } = this.state,
                                { query: s } = e,
                                { mode: d } = this.props,
                                l = a.isTrue("responsive_web_grok_search_summary_enabled"),
                                i = a.isTrue("responsive_web_grok_search_summary_sidebar");
                            return r.createElement(r.Fragment, null, !l || (i && t) ? null : r.createElement(n.Z, null, r.createElement(C, { hidden: "top" !== d, query: s })), r.createElement(Me, e), o ? r.createElement(w.Z, { onCancel: this._handleOnDeleteSavedSearchCancel, onConfirm: this._handleOnDeleteSavedSearchConfirm }) : null);
                        }),
                        (this._renderSidebarContent = () => {
                            const { history: e, location: t, mode: a, query: o } = this.props;
                            let d = !1;
                            this.context.userClaims.isAnyPremiumSubscriber() || (d = this.context.featureSwitches.isTrue("subscriptions_upsells_radar_sidebar_enabled"));
                            const l = this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_enabled") && this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_sidebar");
                            return r.createElement(b.Z, { withRadarUpsell: d, withSearchBox: !1, withTrends: !!o }, l ? r.createElement(n.Z, null, r.createElement(C, { heightFactor: 2, hidden: "top" !== a, query: o })) : null, r.createElement(s.Z, { text: qe }), r.createElement(m.Z, { history: e, key: t.key, location: t }));
                        }),
                        (this._renderTabs = () => {
                            const { analytics: e, mode: t, query: a, querySrc: o, searchFilters: n, searchType: s, vertical: d } = this.props,
                                { featureSwitches: l, viewerUserId: i } = this.context,
                                c = (0, h.Z)(Oe, (r) => {
                                    if (!(0, I.PH)(r.type, l, !!i)) return;
                                    const c = (0, I.PH)(t, l, !!i) ? I._I[t] : void 0,
                                        h = I._I[r.type],
                                        u = () => h === c;
                                    return {
                                        isActive: u,
                                        key: r.type,
                                        to: (0, I.Rg)({ query: a, querySrc: o, modeValue: h, searchType: s, searchFilters: n, vertical: d }),
                                        label: r.label,
                                        onClick: () => {
                                            u() || e.scribe({ element: `search_filter_${r.type}`, action: "navigate", data: this._getScribeData(a, o, n) });
                                        },
                                    };
                                });
                            return r.createElement(g.Z, { links: c });
                        }),
                        (this._getMemoizedTimelineScribeNamespace = (0, c.Z)((e, t) => ({ section: `search_filter_${e}${t === I.rg.Topics ? "_topics" : ""}` }))),
                        (this._handleSearchBoxSubmit = (e, t, a = !1) => {
                            const { analytics: r } = this.props;
                            r.scribe({ section: "trendsplus", action: "search" }),
                                a &&
                                    this.setState({ shouldClearTimelineCache: !0 }, () => {
                                        this.setState({ shouldClearTimelineCache: !1 });
                                    });
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchSavedSearchesIfNeeded: t } = this.props;
                    t().catch(e({}));
                }
                render() {
                    const { history: e, isSideNavExpandedByUser: t, location: a, mode: n, query: s, querySrc: l, searchFilters: i, searchFocused: c, searchType: h, vertical: p } = this.props,
                        { shouldClearTimelineCache: b } = this.state,
                        m = !!s,
                        g = m ? Ze({ query: s }) : Te,
                        y = { history: e, location: a, query: s, querySrc: l, searchFilters: i, searchFocused: c, vertical: p, shouldClearTimelineCache: b },
                        w = { initialValue: s, mode: n, onSubmit: this._handleSearchBoxSubmit, searchFilters: i, showBrandedHashFlag: !0 },
                        C = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        _ = this.context.featureSwitches.isTrue("rweb_sourcemap_migration_side_expand_by_default");
                    return (0, u.HD)(e) && !m
                        ? r.createElement(d.Z, null)
                        : m
                          ? r.createElement(
                                T.nO,
                                { data: this._getScribeData(s, l, i, n, p), namespace: this._getMemoizedTimelineScribeNamespace(n, p) },
                                r.createElement(
                                    f.Z,
                                    null,
                                    null,
                                    r.createElement(o.ZP, null, ({ windowWidth: a }) => {
                                        const o = x.Z.isTwoColumnLayout(a),
                                            n = x.Z.isTwoColumnLayoutRedesign(a, t ?? _),
                                            d = this._renderRightControl({ isTwoColumn: o, searchFocused: c });
                                        return r.createElement(S.Z, { backLocation: "/explore", composeOptions: Ee(s), documentTitle: g, history: e, primaryContent: this._renderPrimaryContent(y, C ? n : o), rightControl: d, searchBoxOptions: w, secondaryBar: this._renderTabs(), sidebarContent: this._renderSidebarContent(), title: s, withBottomLoginSignupBar: !0, withSearchBox: !0 });
                                    }),
                                ),
                            )
                          : r.createElement(B.Z, { to: "/explore" });
                }
            }
            Ue.contextType = y.rC;
            const We = $(Ue);
        },
        392027: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                o = a(154003),
                n = a(392237);
            class s extends r.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: a, disabled: n, href: s, icon: l, label: i, onPress: c, renderMenu: h, style: u, testID: p } = this.props,
                        b = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, a);
                    return r.createElement(o.ZP, { "aria-label": e, backgroundColor: t, color: b, disabled: n, icon: l, link: s, onPress: c, renderMenu: h, size: "xLarge", style: [d.root, !i && d.iconOnly, u], testID: p }, i);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const d = n.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                l = s;
        },
        30183: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                o = a(731708),
                n = a(952428);
            const s = a(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                d = function ({ align: e, link: t, onPress: a, text: d, weight: l, withBottomRadius: i, withDarkerInteractiveBackground: c }) {
                    return r.createElement(n.Z, { link: t, onPress: a, style: [s.root, i && s.withBottomRadius], withDarkerInteractiveBackground: c }, r.createElement(o.ZP, { align: e, color: "primary", weight: l }, d));
                };
        },
        449479: (e, t, a) => {
            a.d(t, { Z: () => y });
            var r = a(202784),
                o = a(325686),
                n = a(913973),
                s = a(731708),
                d = a(950822),
                l = a(466792),
                i = a(58881),
                c = a(530732),
                h = a(352924),
                u = a(392237);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, h.F)()),
                        (this.descriptionId = (0, h.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: a } = this.props;
                            a && !t && a(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: a, disabled: h, helpText: p, label: m, name: S, testID: g } = this.props,
                        y = i.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        f = i.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        w = a ? y : f;
                    return r.createElement(l.Z, { disabled: h }, (l) => r.createElement(o.Z, { role: "label", style: [b.root, !h && b.interactive], testID: g }, r.createElement(o.Z, { style: b.topContainer }, r.createElement(s.ZP, { id: this.labelId }, m), r.createElement(o.Z, { style: b.radioContainer }, r.createElement(c.Z, { interactiveStyles: w, interactivityState: l, style: b.radioBackground }, r.createElement(o.Z, { style: [b.circle, a && b.circleActive, h && b.circleDisabled, a && h && b.circleCheckedAndDisabled] }, a ? r.createElement(n.default, { style: b.checkMark }) : null)), (0, d.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: a, disabled: h, name: S, onChange: this._handleChange, ref: this._setRef, style: [b.nativeControl], type: "radio" }))), p ? r.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: b.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const b = u.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = p,
                S = "radioGroup";
            let g = 1;
            class y extends r.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: a } = this.props;
                            a(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (a) => {
                            (this._radioRefs[e] = a), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${g}_LABEL`),
                        (g += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: a, label: n, name: d, options: l, value: i } = this.props;
                    return r.createElement(
                        o.Z,
                        { "aria-label": e, "aria-labelledby": n && !e ? this._labelId : void 0, role: "radiogroup", style: a && f.disabled, testID: `${S}${d}` },
                        n ? r.createElement(o.Z, { id: this._labelId, role: "label", style: f.header }, r.createElement(s.ZP, { style: f.label, weight: "bold" }, n), t ? r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        l.map((e, t) => r.createElement(m, { "aria-posinset": t + 1, "aria-setsize": l.length, checked: e.value === i, disabled: a, helpText: e.helpText, key: e.value, label: e.label, name: d, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === i), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const f = u.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        403556: (e, t, a) => {
            a.d(t, { Z: () => v });
            var r = a(807896),
                o = a(202784),
                n = a(194504),
                s = a(235902),
                d = a(392237),
                l = a(325686),
                i = a(111677),
                c = a.n(i),
                h = a(912021),
                u = a(516951),
                p = a(731708),
                b = a(310088),
                m = a(175993),
                S = a(58881),
                g = a(530732);
            const y = c().d2414d31,
                f = () => c().ce4e85ae,
                w = c().fb9f6f39;
            class C extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, h.Z)((e, t) => {
                            const { pathname: a, query: r, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: r, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, a, r) => {
                            const o = d.default.theme.colors.text,
                                n = d.default.theme.colors.gray700;
                            return a || r ? (e || t ? o : n) : e ? o : n;
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
                    const { Icon: e, "aria-label": t, badgeCount: a, badgePip: r, children: n, color: s, isActive: i, isCompact: c, isPillLink: h, isRoundedRect: u, isWebRedesign: m, retainScrollPosition: C, style: D, to: k } = this.props,
                        { location: v } = this.state,
                        E = k ? this._getMemoizedLink(k, C) : void 0,
                        A = i ? i(k) : v?.pathname === E?.pathname,
                        M = S.Z.generate({ backgroundColor: "transparent", color: d.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: h ? _.pillHoverStyle.backgroundColor : void 0 }),
                        x = m ? "medium" : A ? "bold" : "medium";
                    return o.createElement(g.Z, { "aria-label": t, "aria-selected": A, focusable: !!A, interactiveStyles: M, link: E, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(h ? [_.pillStyle] : [_.link]), ...(h && A ? [_.pillActiveStyle] : []), c ? (h ? _.compactPill : _.compactLink) : null, u ? _.roundedRect : null, D], withoutInteractiveStyles: m }, ({ isFocused: t, isHovered: i }) => o.createElement(l.Z, { style: h && _.flexGrow }, o.createElement(p.ZP, { size: m ? "headline2" : void 0, style: [_.text, { color: this._getTextColor(A, i, m, h) }, c && _.compactText, m && t && _.focusedText, h && _.pillTextStyle, h && A && _.pillActiveTextStyle, h && i && _.pillHoverTextStyle], weight: x }, e && o.createElement(e, { style: _.icon }), n, m || h ? null : o.createElement(l.Z, { style: A && [_.border, { backgroundColor: d.default.theme.colors[s] }] })), a ? o.createElement(b.Z, { count: a, standalone: !0, style: [_.badge, a >= 10 && _.multiDigitBadge, a >= 20 && _.truncatedCountBadge], truncatedCountFormatter: w, unreadCountLabel: y, withBorder: !1 }) : r ? o.createElement(b.Z, { pip: !0, standalone: !0, style: _.badgePip, textColor: "red500", unreadCountLabel: f, withBorder: !1 }) : null));
                }
            }
            (C.contextType = m.Z), (C.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const _ = d.default.create((e) => ({
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
                D = C,
                k = d.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                v = ({ alignFirstItem: e, "aria-label": t, isCompact: a, isPillLink: d, isRoundedRect: l, links: i, style: c, visibleItemIndex: h }) => {
                    const u = i
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = s.ZP.useProps(),
                        b = p() && !d,
                        m = o.useMemo(
                            () =>
                                i.filter(Boolean).map(({ label: t, viewType: n, ...s }, i) => {
                                    const c = b ? [k.linkRedesign, 0 === i && k.firstLinkRedesign, e && 0 === i && k.withNoPaddingStart] : void 0;
                                    return o.createElement(D, (0, r.Z)({ viewType: n }, s, { isCompact: a, isPillLink: d, isRoundedRect: l, isWebRedesign: b, style: c }), t);
                                }),
                            [e, a, d, l, b, i],
                        );
                    return o.createElement(n.Z, { "aria-label": t, buttonsContainerStyle: d && k.gap, childrenStyle: !b && k.flexGrow, key: u, style: [d ? null : k.segmentedControl, b && k.leftAligned, c], visibleItemIndex: h }, m);
                };
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var r = a(202784),
                o = a(890601),
                n = a(783427),
                s = a(347101);
            const d = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            d.metadata = { width: 24, height: 24 };
            const l = d;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search.3798bc3a.js.map
