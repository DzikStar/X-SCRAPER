"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Search-9f4db315"],
    {
        58687: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ fetch: (t = {}, o = {}) => e.get("saved_searches/list", t, o), create: (t, o = {}) => e.post("saved_searches/create", t, {}, o), destroy: (t, o = {}) => e.post(`saved_searches/destroy/${t.id}`, t, {}, o) });
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var a = o(202784),
                r = o(614983),
                n = o.n(r),
                s = o(325686),
                i = o(370006),
                d = o(786998),
                l = o(929028),
                c = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends a.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: n, isFullWidth: s, isLarge: l, leftControl: c, middleControl: h, position: p, rightControl: m, secondaryBar: b, style: S, subtitle: _, title: y, titleDomId: w, titleIconCell: f, titleIconCellSize: g, withBackground: D, withWideContainer: A } = this.props,
                        { isModal: E } = this.context,
                        k = n ? c : a.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!D, E, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(d.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: l, leftControl: k, middleControl: h, position: u(p, E, r), rightControl: m, style: S, subtitle: _, title: y, titleDomId: w, titleIconCell: f, titleIconCellSize: g, withBackground: C, withWideContainer: A }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = l.Z.getBackgroundStyles();
                    return t ? a.createElement(s.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        33104: (e, t, o) => {
            o.d(t, { Z: () => r });
            o(202784);
            var a = o(325686);
            const r = (0, o(337455).Z)(a.Z);
        },
        789831: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(807896),
                r = o(202784),
                n = o(325686),
                s = o(392237),
                i = o(655352);
            const d = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: o, shouldRenderFab: s = !0, style: l, withoutBottomPadding: c, ...u }) => {
                    const h = t || n.Z,
                        p = s && !(0, i.ZP)();
                    return r.createElement(h, (0, a.Z)({}, u, { style: [p && !c && d.root, l] }), e, p ? o : null);
                };
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => p });
            var a = o(202784),
                r = o(325686),
                n = o(108362),
                s = o(386802),
                i = o(392237),
                d = o(652904),
                l = o(555079),
                c = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: s, hideBackButton: i, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, rightControl: S, secondaryBar: _, subtitle: y, title: w } = this.props,
                                { isModal: f } = this.context;
                            return a.createElement(r.Z, { style: f ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(c.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: n, centerTitle: s, fixed: !f, hideBackButton: i, history: d, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: b, ref: e, rightControl: S, secondaryBar: _, style: [f && m.appBarModal, t], subtitle: y, title: w, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: s, documentTitle: i, isFullWidth: l, isLarge: c, renderHeader: p, title: b, withoutBottomBarMobile: S } = this.props,
                        { isModal: _ } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(d.Z, null, a.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: b }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, _ && m.rootModal] }, !_ && y, a.createElement(n.Z, { isFullWidth: l, isLarge: c, style: [m.container, _ && m.containerModal, s] }, _ ? a.createElement(h.Z, { style: m.viewport }, y, o) : o), t ? a.createElement(r.Z, { style: [m.bottomBarModal, !_ && !S && m.bottomBarMobile] }, a.createElement(n.Z, { isFullWidth: l, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        896008: (e, t, o) => {
            o.d(t, { J: () => T, Z: () => B });
            var a = o(202784),
                r = o(325686),
                n = o(449479),
                s = o(30183),
                i = o(392237),
                d = o(111677),
                l = o.n(d),
                c = o(744531),
                u = o(685399),
                h = o(443781),
                p = o(369241),
                m = o(725516);
            const b = "searchFiltersAdvancedSearch",
                S = Object.freeze({ People: "People", Location: "Location" }),
                _ = l().j622effe,
                y = l().g2fd3206,
                w = l().defb4aaa,
                f = l().af293dc2,
                g = l().jaaa8984,
                D = l().i5045e74,
                A = l().h2388754,
                E = "anyone",
                k = "youFollow",
                C = "anywhere",
                v = "nearYou",
                M = [
                    {
                        label: y,
                        name: S.People,
                        options: [
                            { label: w, value: E },
                            { label: f, value: k },
                        ],
                    },
                    {
                        label: g,
                        name: S.Location,
                        options: [
                            { label: D, value: C },
                            { label: A, value: v },
                        ],
                    },
                ];
            class T extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderFilters = () => M.map((e, t) => a.createElement(r.Z, { key: e.name, style: t > 0 && x.paddingTop }, a.createElement(n.Z, { label: e.label, name: e.name, onChange: this._handleFilterChange, options: e.options, value: this._getCurrentValue(e.name) })))),
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
                            const { loggedInUserId: o } = this.context,
                                {
                                    location: { query: a },
                                } = this.props;
                            switch (e) {
                                case S.People:
                                    if (o) {
                                        this.setState({ peopleFilter: t });
                                        const e = { pf: t === k ? "on" : void 0, lf: "on" === a.lf ? a.lf : void 0 };
                                        this._executeSearch(e, "people");
                                    } else this.setState({ shouldShowLoginSheet: !0 });
                                    break;
                                case S.Location: {
                                    this.setState({ locationFilter: t });
                                    const e = { lf: t === v ? "on" : void 0, pf: "on" === a.pf ? a.pf : void 0 };
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
                            const { history: o, location: a } = this.props;
                            this._scribeAction(t);
                            const r = this._getPathname();
                            o.replace({ pathname: r, query: (0, u.Z)({ ...a.query, ...e }) });
                        }),
                        (this._getPathname = () => {
                            const { location: e } = this.props;
                            if (e.pathname.includes("/hashtag/")) return e.pathname;
                            if (e.state && e.state.previousPath && e.state.previousPath.includes("/hashtag/") && "/search" !== e.pathname) {
                                const t = e.state.previousPath,
                                    o = t.indexOf("?") > -1 ? t.indexOf("?") : t.length;
                                return t.substring(0, o);
                            }
                            return "/search";
                        }),
                        (this._handleHideLoginSheet = () => {
                            this.setState({ shouldShowLoginSheet: !1 });
                        });
                    const { loggedInUserId: o } = this.context,
                        { location: s } = e,
                        i = s.query,
                        d = o && i && i.pf ? k : E,
                        l = i && i.lf ? v : C;
                    this.state = { peopleFilter: d, locationFilter: l, shouldShowLoginSheet: !1 };
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ action: "impression" });
                }
                render() {
                    const { withBottomBorder: e } = this.props,
                        { shouldShowLoginSheet: t } = this.state;
                    return a.createElement(r.Z, null, a.createElement(r.Z, { style: x.content }, this._renderFilters()), a.createElement(r.Z, { style: e && x.bottomBorder, testID: b }, a.createElement(s.Z, { link: this._getAdvancedSearchLink(), onPress: this._handleFooterPress, text: _ })), t ? a.createElement(p.ZP, { onClose: this._handleHideLoginSheet }) : null);
                }
            }
            (T.contextType = h.rC), (T.defaultProps = { withBottomBorder: !1 });
            const x = i.default.create((e) => ({ content: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space16 }, bottomBorder: { borderBottomColor: e.colors.gray50, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, paddingTop: { paddingTop: e.spaces.space4 } })),
                B = (0, m.Z)(T, { page: "search_filters" });
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(807896),
                r = o(202784),
                n = o(107267),
                s = o(403556),
                i = o(791632);
            const d = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: o, ...d } = e;
                    return r.createElement(s.Z, (0, a.Z)({}, d, { isCompact: o || (0, i.HD)(t) }));
                },
                l = r.memo(d);
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => b });
            var a = o(807896),
                r = o(202784),
                n = o(325686),
                s = o(292627),
                i = o(537392),
                d = o(392237),
                l = o(365023),
                c = o(392027),
                u = o(774654),
                h = o(725516),
                p = o(443781);
            const m = d.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${d.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: o, onPress: b, scribeComponent: S, ..._ } = e,
                        { loggedInUserId: y } = r.useContext(p.rC),
                        w = (0, h.z)(),
                        f = r.useCallback(
                            (e) => {
                                w.scribe({ component: S, action: "click" }), b && b(e);
                            },
                            [w, b, S],
                        ),
                        g = u.ZM.useCollapsibleNavBars(),
                        D = [...u.Ah({ elementPosition: "bottom" }), g && m.fabStaysAboveSafeArea];
                    return y
                        ? r.createElement(
                              s.Z.FloatingAction,
                              null,
                              r.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > d.default.theme.breakpoints.large,
                                      i = e > d.default.theme.breakpoints.medium,
                                      u = e < d.default.theme.breakpoints.micro,
                                      h = [m.root, i && m.rootMedium, s && m.rootLarge],
                                      p = [m.fab, s && m.fabLarge, u && m.fabMicro, D];
                                  return r.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: h },
                                      r.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, i) => r.createElement(n.Z, (0, a.Z)({ ref: e() }, i({ style: p })), r.createElement(c.Z, (0, a.Z)({}, _, { "aria-label": t, label: s ? o : void 0, onPress: f, style: u && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => d });
            o(136728);
            var a = o(202784),
                r = o(387524),
                n = o(635510);
            const s = "/compose/post";
            class i extends a.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: o } = this.props,
                                a = { pathname: s, state: (t && t()) || {} };
                            o.push(a);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: o, scribeComponent: i } = this.props;
                    return a.createElement(r.Z, { "aria-label": e, href: s, icon: t, label: o, onPress: this._handlePress, scribeComponent: i, testID: n.Z.tweet });
                }
            }
            const d = i;
        },
        32677: (e, t, o) => {
            o.d(t, { Z: () => u });
            var a = o(202784),
                r = o(111677),
                n = o.n(r),
                s = o(186444),
                i = o(355883);
            const d = n().j0179e90,
                l = n().ee69d769({ verb: "" }),
                c = a.createElement(s.default, null),
                u = ({ getLocationState: e, history: t }) => a.createElement(i.Z, { "aria-label": d, getLocationState: e, history: t, icon: c, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        233391: (e, t, o) => {
            o.d(t, { BH: () => O, Qj: () => $, Wc: () => G, sI: () => U });
            var a = o(202784),
                r = o(731708),
                n = o(392237),
                s = o(111677),
                i = o.n(s),
                d = o(911373),
                l = o(761744),
                c = o(98440),
                u = o(720600),
                h = o(125966),
                p = o(544367),
                m = o(452693),
                b = o(971657),
                S = o(956272),
                _ = o(520913);
            const y = i().a17a75da,
                w = i().e7342ed4,
                f = i().b6a43e78,
                g = i().b469e406,
                D = i().b8505290,
                A = ({ userFullName: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "e1a49407" }, a.createElement(r.ZP, null, e)) : void 0),
                E = i().ae8b0564,
                k = ({ userFullName: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "be54ed41" }, a.createElement(r.ZP, null, e)) : void 0),
                C = i().f2adab0e,
                v = ({ userFullName: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "jb19eb17" }, a.createElement(r.ZP, null, e)) : void 0),
                M = ({ userFullName: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "bbfee611" }, a.createElement(r.ZP, null, e)) : void 0),
                T = i().b7821a74,
                x = ({ userFullName: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "af104f2b" }, a.createElement(r.ZP, null, e)) : void 0),
                B = ({ customText: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "ccc1f303" }, a.createElement(r.ZP, null, e)) : void 0),
                Z = ({ userFullName: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "ce02fabf" }, a.createElement(r.ZP, null, e)) : void 0),
                I = i().e6d43d06,
                L = ({ customText: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "a85608a7" }, a.createElement(r.ZP, null, e)) : void 0),
                P = i().ic848090,
                N = i().f9ebe066,
                F = ({ userFullName: e }) => (e ? a.createElement(i().I18NFormatMessage, { $i18n: "c76865b7" }, a.createElement(r.ZP, null, e)) : void 0),
                R = i().je3d93e2,
                q = i().ea88ce2e,
                H = i().je3d93e2,
                O = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                G = (e, t) => {
                    switch (t) {
                        case O.follow:
                            return { icon: d.default, text: M, subtext: T, iconStyle: V.iconOther };
                        case O.like:
                            return { icon: l.default, text: C, subtext: v, iconStyle: V.iconLike };
                        case O.reply:
                            return { icon: c.default, text: D, subtext: A, iconStyle: V.iconOther };
                        case O.retweet:
                            return { icon: u.default, text: E, subtext: k, iconStyle: V.iconRetweet };
                        case O.dmshare:
                            return { icon: h.default, text: x, iconStyle: V.iconOther };
                        case O.subscribe:
                            return { icon: p.default, text: B, subtext: Z, iconStyle: V.iconOther };
                        case O.topic:
                            return { icon: m.default, text: I, subtext: L, iconStyle: V.iconTopics };
                        case O.community:
                            return { icon: b.default, text: P, subtext: N, iconStyle: V.iconOther };
                        case O.search:
                            return { icon: S.default, text: F, subtext: R, iconStyle: V.iconOther };
                        default:
                            return { icon: _.default, text: q, subtext: H, iconStyle: V.iconTwitter };
                    }
                },
                U = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? y : f),
                $ = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? w : g),
                V = n.default.create((e) => ({ iconOther: { color: e.colors.blue500 }, iconLike: { color: e.colors.magenta500 }, iconTwitter: { color: e.colors.brandColor }, iconRetweet: { color: e.colors.green500 }, iconTopics: { color: e.colors.blue500 } }));
        },
        369241: (e, t, o) => {
            o.d(t, { BH: () => v.BH, ZP: () => P });
            o(875640);
            var a = o(202784),
                r = o(529356),
                n = o(111677),
                s = o.n(n),
                i = o(323265),
                d = o(170542),
                l = o(951790),
                c = o(804027),
                u = o(443781),
                h = o(325686),
                p = o(292627),
                m = o(731708),
                b = o(154003),
                S = o(392237);
            class _ extends a.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: o, primaryText: r, secondaryButtonLabel: n, secondaryText: s } = this.props;
                    return a.createElement(p.Z.HalfSheet, null, a.createElement(h.Z, { style: y.sheetContent }, a.createElement(h.Z, { style: y.content }, a.createElement(h.Z, { style: y.header }, a.createElement(m.ZP, { color: "white", size: "headline1", weight: "bold" }, r)), a.createElement(m.ZP, { color: "white", style: y.secondaryText }, s)), a.createElement(h.Z, { style: y.footer }, a.createElement(b.ZP, { onPress: t, size: "medium", style: y.button, type: "onMediaOutlined" }, a.createElement(m.ZP, { numberOfLines: 1 }, n)), a.createElement(b.ZP, { onPress: e, size: "medium", style: y.button, type: "onMediaWhiteFilled" }, a.createElement(m.ZP, { numberOfLines: 1 }, o)))));
                }
            }
            const y = S.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: S.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                w = _;
            var f = o(668214),
                g = o(558369),
                D = o(118823),
                A = o(390387),
                E = o(38562),
                k = o(936572);
            const C = (0, f.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: g.ur, loginPromptShown: E.fj, loginPromptLastShown: k.ne, startLocation: D.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: E.Af, setLoginReturnPath: A.Jm, updateSettings: E.VP }))
                .withAnalytics();
            var v = o(233391);
            o(920099), o(856642), o(782826), o(903019);
            const M = Object.freeze({ BannerSwitchToApp: "banner_switch_to_app", InterstitialSwitchToApp: "interstitial_switch_to_app", NuxAppDownload: "NUX-app-download", SwitchToAppFooter: "switch-to-app-footer", UseApp: "use-app", UseAppExtended: "use-app-extended", SwitchToAppHigh7: "switch_to_app_high_7", SwitchToAppHigh1: "switch_to_app_high_1", SwitchToAppHigh2: "switch_to_app_high_2", SwitchToAppHigh3: "switch_to_app_high_3", SwitchToAppHigh5: "switch_to_app_high_5", SwitchToAppLow7: "switch_to_app_low_7", SwitchToAppLow1: "switch_to_app_low_1", SwitchToAppLow3: "switch_to_app_low_3", SwitchToAppLow5: "switch_to_app_low_5", SwitchToAppLow9: "switch_to_app_low_9" }),
                T = s().j607bf02,
                x = s().j49fd4e8,
                B = s().hd50e064,
                Z = s().a565833e,
                I = s().e919c3bc;
            class L extends a.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getFullSheetDisplayElements = v.Wc.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetPrimaryText = v.sI.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetSecondaryText = v.Qj.bind(null, this.context.featureSwitches)),
                        (this._isStandaloneApp = d.Z.isStandaloneApp()),
                        (this._shouldRenderPrompt = () => {
                            const { loginPromptLastShown: e, loginPromptShown: t, onlyShowOnce: o, useBottomBanner: a } = this.props,
                                { displayInterval: r } = this.state;
                            if (a && !this._hasMobileAppStore()) return !1;
                            if (o) {
                                if (t) return !1;
                                if (r && Date.now() - e < r) return !1;
                            }
                            return !0;
                        }),
                        (this._handleClose = () => {
                            this._scribeAction("dismiss"), this.props.onClose();
                        }),
                        (this._handleNotNow = () => {
                            this._scribeAction("not_now"), this.props.onClose();
                        }),
                        (this._handleSubmit = (e) => {
                            const { onClose: t, postLoginPath: o, setLoginReturnPath: a } = this.props;
                            this._scribeAction("login"), o && a(o), t();
                        }),
                        (this._handleSignupButtonClick = (e) => {
                            this._scribeAction("signup"), this.props.onClose();
                        }),
                        (this._handleAppInstallButtonClick = (e) => {
                            e.preventDefault(), this._scribeAction("download"), l.Z.goToAppStore("loggedoutprompt");
                        }),
                        (this._getSignupState = () => {
                            const { displayMode: e, tweetId: t, userId: o } = this.props;
                            switch (e) {
                                case v.BH.follow:
                                    return { gatedAction: { action: c.qJ.Follow, user_id: o } };
                                case v.BH.like:
                                    return { gatedAction: { action: c.qJ.Favorite, tweet_id: t, user_id: o } };
                                case v.BH.reply:
                                    return { gatedAction: { action: c.qJ.Reply, tweet_id: t, user_id: o } };
                                case v.BH.retweet:
                                    return { gatedAction: { action: c.qJ.Retweet, tweet_id: t, user_id: o } };
                                default:
                                    return;
                            }
                        }),
                        (this._getLoginState = () => {
                            const { postLoginPath: e } = this.props;
                            if (e) return { input: { requested_variant: btoa(JSON.stringify({ redirect_after_login: e })) } };
                        }),
                        (this._hasMobileAppStore = () => i.ZP.isIOS() || i.ZP.isAndroid());
                    const { useBottomBanner: o } = this.props;
                    this._showTertiaryCTA = this._hasMobileAppStore() && !this._isStandaloneApp && this.context.featureSwitches.isTrue("responsive_web_login_signup_sheet_app_install_cta_enabled");
                    const a = this.context.featureSwitches.getNumberValue("rweb_update_fatigue_switch_to_app_day_timeout"),
                        r = this.context.featureSwitches.getStringValue("rweb_update_fatigue_switch_to_app_link");
                    this.state = { displayInterval: o ? 864e5 * a : 0, switchToAppLink: M[r] };
                }
                componentDidMount() {
                    this._shouldRenderPrompt() && this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { loginPromptShown: e, onlyShowOnce: t, setLoginPromptShown: o, updateSettings: a } = this.props;
                    !e && t && (o(!0), a({ loginPromptLastShown: Date.now() }));
                }
                render() {
                    const { allowBackNavigation: e, customText: t, displayMode: o, hideSignUp: n, isFullHeightOnMobile: s, loginLabel: i, useBottomBanner: d, userFullName: l } = this.props;
                    if (!this._shouldRenderPrompt()) return null;
                    const { icon: c, iconStyle: u, subtext: h, text: p } = this._getFullSheetDisplayElements(o),
                        m = "function" == typeof p ? p({ customText: t, userFullName: l }) : p,
                        b = "function" == typeof h ? h({ customText: t, userFullName: l }) : h,
                        S = n ? "" : this.props.signupLabel,
                        _ = { pathname: "/i/flow/login", state: this._getLoginState() },
                        y = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return d ? a.createElement(w, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: x, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: B, secondaryText: this._getHalfSheetSecondaryText() }) : a.createElement(r.Z, { actionLabel: i, actionLink: _, allowBackNavigation: e, graphic: c, graphicStyle: u, headline: m || "", isFullHeightOnMobile: s, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: S, secondaryActionLink: y, subtext: b || "", tertiaryActionLabel: this._showTertiaryCTA ? T : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: o, useBottomBanner: a } = this.props,
                        r = a ? "half_sheet" : o;
                    t.scribe({ component: "login_signup_sheet", element: r, action: e });
                }
            }
            (L.defaultProps = { displayMode: v.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: I, signupLabel: Z, onlyShowOnce: !1 }), (L.displayMode = v.BH), (L.contextType = u.rC);
            const P = C(L);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var a = o(202784),
                r = o(500002),
                n = o(668214),
                s = o(997174),
                i = o(118823);
            const d = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class l extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: s },
                            locationKey: i,
                        } = e;
                    let d = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (d = !0));
                    const l = r || i;
                    ((l && r !== i) || (!l && o !== n) || a !== s || d) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, r.ZP)(d(l));
        },
        886191: (e, t, o) => {
            o.d(t, { Z: () => g });
            var a = o(202784),
                r = o(731708),
                n = o(457311),
                s = o(111677),
                i = o.n(s),
                d = o(912021),
                l = o(864702),
                c = o(479506),
                u = o(903019),
                h = o(519896),
                p = o(774006),
                m = o(443781),
                b = o(810641),
                S = o(335632);
            const _ = i().c09de2d4,
                y = i().ae111c99,
                w = a.createElement(i().I18NFormatMessage, { $i18n: "e7e44bab" }, a.createElement(r.ZP, { link: "/settings/search" }, i().f191a2ba));
            class f extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === c.Z.ItemType.USER || e === c.Z.ItemType.TOPIC || e === c.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: o, searchMode: a, urtEndpointOptions: r, vertical: n } = this.props,
                                { featureSwitches: s } = this.context,
                                i = s.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, a, o, n, r, i);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || a.createElement(n.Z, { header: y({ query: t }), message: w });
                        }),
                        (this._getMemoizedModule = (0, d.Z)((e, t, o, a, r, n, s) => (0, p.Z)({ query: e, searchMode: o, querySource: t, searchFilters: a, vertical: r, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: s }))),
                        (this._getMemoizedEntryConfiguration = (0, d.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, S.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== u.N3.Live;
                    return a.createElement(b.Z, { apiErrorHandlerMap: l.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: h.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: _ });
                }
            }
            f.contextType = m.rC;
            const g = f;
        },
        243754: (e, t, o) => {
            o.d(t, { Z: () => u });
            var a = o(202784),
                r = o(190286),
                n = o(111677),
                s = o.n(n),
                i = o(436001);
            const d = s().hffea05c,
                l = s().j037e374,
                c = s().d96cf7ce,
                u = ({ onCancel: e, onConfirm: t }) => a.createElement(r.Z, { confirmButtonLabel: c, confirmButtonType: "destructiveFilled", headline: d, onCancel: e, onConfirm: t, testID: i.Z.deleteSavedSearchDialog, text: l });
        },
        436001: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = { deleteRecentSearchesDialog: "deleteRecentSearchesDialog", deleteSavedSearchDialog: "deleteSavedSearchDialog", typeaheadEmptySearch: "typeaheadEmptySearch", typeaheadRecentSearchesHeader: "typeaheadRecentSearchesHeader", typeaheadRecentSearchesItem: "typeaheadRecentSearchesItem", typeaheadSavedSearchesContainer: "typeaheadSavedSearchesContainer", typeaheadSavedSearchesHeader: "typeaheadSavedSearchesHeader", typeaheadSavedSearchesItem: "typeaheadSavedSearchesItem" };
        },
        864702: (e, t, o) => {
            o.d(t, { d: () => d });
            var a = o(111677),
                r = o.n(a),
                n = o(615656),
                s = o(51525);
            const i = r().i1801686,
                d = { [n.ZP.GenericForbidden]: { toast: (0, s.j)() }, [n.ZP.InvalidRequestUrl]: { toast: { text: i, withClearButton: !0 } }, showToast: !0 };
        },
        337455: (e, t, o) => {
            o.d(t, { Z: () => d });
            var a = o(202784),
                r = o(411916),
                n = o.n(r),
                s = o(373463),
                i = o.n(s);
            function d(e) {
                class t extends a.Component {
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
                        return this.state.shouldRender ? a.createElement(e, this.props) : null;
                    }
                }
                return i()(t, e);
            }
        },
        951790: (e, t, o) => {
            o.d(t, { Z: () => s });
            var a = o(323265);
            const r = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = n(e),
                            o = [t.android, t.ios],
                            a = o.find((e) => e.matches());
                        return a ? [a] : o;
                    },
                    getiOSAppStoreLink(e) {
                        const t = n(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = n(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && r.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        r.setLocation(e);
                    },
                },
                n = (e = "rwoiah") => ({ android: { platform: "android", matches: () => a.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => a.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                s = r;
        },
        883432: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        554951: (e, t, o) => {
            o.d(t, { GL: () => S, as: () => b, k9: () => _, l9: () => y });
            var a = o(58687),
                r = o(163889),
                n = o(499627),
                s = o(917799),
                i = o(312771),
                d = o(390387);
            const l = "savedSearches",
                c = { fetchStatus: i.ZP.NONE, savedSearches: [] },
                u = Object.freeze({ REQUEST: "rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST", SUCCESS: "rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS", FAILURE: "rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE" }),
                h = Object.freeze({ REQUEST: "rweb/savedSearches/SAVE_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/SAVE_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/SAVE_SEARCH_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE" });
            function m(e = c, t) {
                if (!t) return e;
                switch (t.type) {
                    case u.SUCCESS: {
                        const o = t.payload,
                            a = Array.isArray(o);
                        return a || (0, r.ZP)("Saved search results are not type array", { extra: { savedSearchResultsType: typeof o } }), { ...e, fetchStatus: i.ZP.LOADED, savedSearches: a && o ? o : [] };
                    }
                    case u.FAILURE:
                        return { ...e, fetchStatus: i.ZP.FAILED };
                    case h.SUCCESS:
                        return { ...e, savedSearches: t.payload ? [...e.savedSearches, t.payload] : e.savedSearches };
                    case p.SUCCESS:
                        return t.payload ? { ...e, savedSearches: e.savedSearches.filter((e) => e.id_str !== t.payload.id_str) } : e;
                    default:
                        return e;
                }
            }
            n.Z.register({ [l]: m });
            const b = (e) => e[l].savedSearches,
                S =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, s._O)(t, { request: r.withEndpoint(a.Z).create, params: { query: e } })({ actionTypes: h, context: "SAVE_SEARCH" }),
                _ =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, s._O)(t, { request: r.withEndpoint(a.Z).destroy, params: { id: e } })({ actionTypes: p, context: "DELETE_SAVED_SEARCH" }),
                y =
                    () =>
                    (e, t, { api: o }) => {
                        const r = t();
                        if (!(0, d.Qb)(r)) return Promise.resolve();
                        const n = ((e) => e[l].fetchStatus)(r) === i.ZP.LOADED;
                        return n ? Promise.resolve() : e((e, t, { api: o }) => (0, s._O)(e, { request: o.withEndpoint(a.Z).fetch, params: {} })({ actionTypes: u, context: "FETCH_SAVED_SEARCHES" }));
                    };
        },
        774006: (e, t, o) => {
            o.d(t, { Z: () => b, u: () => m });
            var a = o(644829),
                r = o(750085),
                n = o(903019),
                s = o(883432),
                i = o(555875),
                d = o(218951);
            const l = "search-",
                c = " near:me",
                u = " filter:follows",
                h = { [n.N3.Image]: { result_filter: n.N3.Image }, [n.N3.List]: { result_filter: n.N3.List }, [n.N3.Live]: { tweet_search_mode: n.N3.Live }, [n.N3.Media]: { result_filter: n.N3.Media }, [n.N3.Top]: {}, [n.N3.User]: { result_filter: n.N3.User }, [n.N3.Video]: { result_filter: n.N3.Video } },
                p = (e) => (((e) => e === s.Z.SpellingCorrectionRevertClick || e === s.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                m = () => (e, t) => {
                    e(
                        (0, i.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, i.$q)(e)),
                    );
                },
                b = ({ query: e, searchMode: t = n.N3.Top, querySource: o, searchFilters: s, vertical: i, urtEndpointOptions: m, searchTimelinesGraphQLEnabled: b }) => {
                    const S = p(o),
                        _ = s && s.peopleFilter ? "searcher_follows" : void 0,
                        y = _ ? "-pf" : "",
                        w = s && s.locationFilter && !e.includes(c) ? `${e}${c}` : e,
                        f = { timelineId: `${l}${w}-${t}${S}${y}`, network: { getEndpoint: (e) => e.withEndpoint(a.Z).fetchSearch, getEndpointParams: (e) => ({ ...m?.requestParams, q: w, social_filter: _, vertical: i, ...h[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === n.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (b) {
                        const e = _ && !w.includes(u) ? `${w}${u}` : w,
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
                            i = `gql-${l}${w}-${t}${S}${y}`;
                        return (0, d.Z)({ ...f, timelineId: i, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: r.Z, network: { getEndpointParams: ({ count: t, cursor: a }) => ({ rawQuery: e, count: t, product: s, querySource: o, cursor: "string" == typeof a ? a : void 0 }), getEndpoint: (e) => e.withEndpoint(a.Z).fetchSearchGraphQL } });
                    }
                    return (0, d.Z)(f);
                };
        },
        80927: (e, t, o) => {
            o.r(t), o.d(t, { SearchFiltersScreen: () => u, default: () => h });
            var a = o(807896),
                r = o(202784),
                n = o(111677),
                s = o.n(n),
                i = o(980407),
                d = o(896008),
                l = o(725516);
            const c = s().aea62568;
            function u(e) {
                const { history: t, location: o } = e;
                return r.createElement(i.Z, { documentTitle: c, history: t, title: c }, r.createElement(d.J, (0, a.Z)({}, e, { key: o.key, withBottomBorder: !0 })));
            }
            const h = (0, l.Z)(u, { page: "search_filters" });
        },
        184297: (e, t, o) => {
            o.r(t), o.d(t, { SearchScreen: () => Ue, default: () => $e });
            var a = o(202784),
                r = o(537392),
                n = o(691533),
                s = o(844685),
                i = o(457311),
                d = o(111677),
                l = o.n(d),
                c = o(912021),
                u = o(459679),
                h = o(791632),
                p = o(805104),
                m = o(718e3);
            o(272175);
            l().b11805af, l().d610e8c3;
            var b = o(896008),
                S = o(252021),
                _ = o(507651),
                y = o(443781),
                w = o(652904),
                f = o(243754);
            const g = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.8"),
                        o.e("icons.15"),
                        o.e("icons.7"),
                        o.e("icons.3"),
                        o.e("icons.24"),
                        o.e("icons.12"),
                        o.e("icons.22"),
                        o.e("icons.2"),
                        o.e("icons.18"),
                        o.e("icons.9"),
                        o.e("icons.1"),
                        o.e("icons.6"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.14"),
                        o.e("icons.5"),
                        o.e("modules.audio-6107ac1a"),
                        o.e("modules.audio-b953418a"),
                        o.e("modules.audio-7c51e6a7"),
                        o.e("modules.audio-04db59e9"),
                        o.e("modules.audio-76583d6c"),
                        o.e("modules.audio-b7a8a5fb"),
                        o.e("modules.audio-51f6e793"),
                        o.e("modules.audio-e019dbda"),
                        o.e("modules.audio-262c94d4"),
                        o.e("modules.audio-c6fe4ea4"),
                        o.e("icons.21"),
                        o.e("icons.16"),
                        o.e("icons.28"),
                        o.e("icons.17"),
                        o.e("icons.27"),
                        o.e("icons.19"),
                        o.e("icons.0"),
                        o.e("icons.4"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        o.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        o.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-8aa1f3e4"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-c6c15d67"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-214ae749"),
                        o.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2c2ff023"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-dba52705"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-6f94db39"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        o.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        o.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        o.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~l"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~bundle.Payments~ondemand.News~ondemand.Insights~loader"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b75711ed"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-eadf0bc8"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b6859af7"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-856c9f2b"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-30607449"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-ff768435"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b8a8a774"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4e7553e3"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-68027d49"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-b20998b4"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-703d6ce2"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-5f0ed14e"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-bd66f825"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-92ee7280"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-4cd14b6e"),
                        o.e("shared~bundle.AccountAnalytics~bundle.News~bundle.Grok~ondemand.News~ondemand.Insights~loader.Explor-380ace89"),
                        o.e("shared~loader.Dock~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFrame~loader.PremiumLoaders"),
                        o.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        o.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        o.e("shared~bundle.Grok~loader.Markdown"),
                        o.e("bundle.Grok-bc6ccf4c"),
                        o.e("bundle.Grok-e96e9bea"),
                        o.e("bundle.Grok-0ae4e026"),
                        o.e("bundle.Grok-b16f5c14"),
                        o.e("bundle.Grok-9f4db315"),
                        o.e("bundle.Grok-e4e3d8bb"),
                        o.e("bundle.Grok-63cb1cc4"),
                        o.e("bundle.Grok-c69e90f3"),
                        o.e("bundle.Grok-ea2f266f"),
                        o.e("bundle.Grok-16d5f187"),
                        o.e("bundle.Grok-bf286bb5"),
                        o.e("bundle.Grok-78699f4a"),
                        o.e("bundle.Grok-38dc3b4a"),
                        o.e("bundle.Grok-1d830d6b"),
                        o.e("bundle.Grok-d49ace54"),
                        o.e("bundle.Grok-3277c3ad"),
                        o.e("bundle.Grok-57c2c4a2"),
                        o.e("bundle.Grok-f1a12957"),
                        o.e("bundle.Grok-78667c23"),
                        o.e("bundle.Grok-a244d277"),
                        o.e("bundle.Grok-0d8ef87b"),
                        o.e("bundle.Grok-1d41f45b"),
                        o.e("bundle.Grok-b8348d5d"),
                        o.e("bundle.Grok-7bc92c09"),
                        o.e("bundle.Grok-f8a31592"),
                        o.e("bundle.Grok-bd027025"),
                        o.e("bundle.Grok-7a6ce5c4"),
                        o.e("bundle.Grok-cebf58fc"),
                        o.e("bundle.Grok-29bebf45"),
                        o.e("bundle.Grok-9e9ee61b"),
                        o.e("bundle.Grok-6ac0f1a5"),
                        o.e("bundle.Grok-3c20ad5c"),
                    ]).then(o.bind(o, 528829)),
            });
            var D = o(601576);
            const A = l().f9d35b98,
                E = l().ha925ad4,
                k = l().h0a9931c,
                C = { customErrorHandler: () => (0, D.mf)({ text: E }), showToast: !0 },
                v = { customErrorHandler: () => (0, D.mf)({ text: A }), showToast: !0 },
                M = { customErrorHandler: () => (0, D.mf)({ text: k }), showToast: !0 };
            var T = o(10656),
                x = o(293115),
                B = o(942893),
                Z = o(903019),
                I = o(615027),
                L = o(24949),
                P = o(71620),
                N = o(2430),
                F = o(668214),
                R = o(704279),
                q = o(554951),
                H = o(936572);
            const O = (e, t) => {
                    const { location: o } = t;
                    return o.query && o.query.src && "string" == typeof o.query.src ? o.query.src : "";
                },
                G = (e, t) => {
                    const {
                        location: o,
                        match: { params: a },
                    } = t;
                    return a && a.unsafeHashtagQuery && "string" == typeof a.unsafeHashtagQuery ? `#${a.unsafeHashtagQuery}` : (o && o.query && o.query.q && (0, N.BX)(o.query.q)) || "";
                },
                U = (e, t) => {
                    const { location: o } = t;
                    return 0 === o.pathname.indexOf("/search") ? "search" : "hashtag";
                },
                $ = (e, t) => !!(t.location.state || {}).searchFocused,
                V = (0, L.P1)((0, N.cI)("pf"), (0, N.cI)("lf"), (e, t) => ({ peopleFilter: e, locationFilter: t })),
                z = (0, F.Z)()
                    .propsFromState(() => ({ searchFocused: $, query: G, querySrc: O, isQueryAlreadySaved: (0, L.P1)(G, q.as, (e, t) => t.map((e) => e.query).indexOf(e) > -1), searchType: U, searchFilters: V, mode: Z.Jm, savedSearches: q.as, vertical: (0, N.cI)("vertical"), isSideNavExpandedByUser: H.op }))
                    .propsFromActions(() => ({ addToast: D.fz, createLocalApiErrorHandler: (0, P.zr)("SEARCH_SCREEN"), deleteSavedSearch: q.k9, fetchSavedSearchesIfNeeded: q.l9, saveSearch: q.GL, scribeAction: R.n }))
                    .withAnalytics({ page: "search" });
            o(136728), o(901951);
            var W = o(811176),
                Q = o(517747),
                j = o(956272),
                J = o(698891),
                K = o(982866),
                X = o(607127),
                Y = o(744531),
                ee = o(952793);
            const te = "searchFilters-overflow",
                oe = "advancedSearch-overflow",
                ae = "searchSettings-overflow",
                re = "saveSearch-overflow",
                ne = "deleteSavedSearch-overflow",
                se = l().h1ef00dc,
                ie = l().aea62568,
                de = l().j622effe,
                le = l().h4912b5e,
                ce = l().b9bc69ca;
            const ue = function (e) {
                const { deleteSavedSearch: t, isLoggedIn: o, isQueryAlreadySaved: r, isTwoColumn: n, location: s, onClose: i, saveSearch: d } = e,
                    l = (0, ee.hC)("responsive_web_saved_search_enabled"),
                    c = [];
                return (
                    n || c.push({ Icon: Q.default, testID: te, text: ie, link: { pathname: "/i/search_filters", query: s.query } }),
                    c.push({ Icon: j.default, testID: oe, text: de, link: { pathname: "/search-advanced", query: { ...(0, Y.Z)(s.query, ["src"]) } } }),
                    o &&
                        (c.unshift({ Icon: J.default, testID: ae, text: se, link: "/settings/search" }),
                        l &&
                            (r
                                ? c.push({
                                      Icon: X.default,
                                      isEmphasized: !0,
                                      testID: ne,
                                      text: ce,
                                      onClick: (e) => {
                                          e(), t();
                                      },
                                  })
                                : c.push({
                                      Icon: K.default,
                                      testID: re,
                                      text: le,
                                      onClick: (e) => {
                                          e(), d();
                                      },
                                  }))),
                    a.createElement(W.Z, { items: c, onCloseRequested: i })
                );
            };
            var he = o(476984),
                pe = o.n(he),
                me = o(842623),
                be = o(33104),
                Se = o(789831),
                _e = o(959658),
                ye = o(32677),
                we = o(886191),
                fe = o(864702),
                ge = o(774006),
                De = o(735313);
            const Ae = (e, t) => "POP" === t.history.action,
                Ee = (e, t) => {
                    const { location: o } = t;
                    return o?.state?.urtEndpointOptions;
                },
                ke = (0, F.Z)()
                    .propsFromState(() => ({ dataLookupId: Z.XN, isBackNavigation: Ae, searchMode: Z.Jm, urtEndpointOptions: Ee }))
                    .propsFromActions(() => ({ clearTimelineCache: ({ fetchOptions: e, module: t }) => (0, De.Z)(t, e), createLocalApiErrorHandler: (0, P.zr)("SEARCH_RESULTS_SCREEN") })),
                Ce = (e) => (e && (0, me.Z)(e) ? { defaultText: ` ${e}`, positionCursorAtBeginning: !0 } : void 0);
            class ve extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getSearchMode = () => {
                            const { searchMode: e } = this.props,
                                { featureSwitches: t, viewerUserId: o } = this.context;
                            return (0, Z.PH)(e, t, !!o) ? e : Z.N3.Top;
                        }),
                        (this._getFabState = () => {
                            const { query: e } = this.props;
                            return this._getMemoizedComposeLocationState(e);
                        }),
                        (this._getMemoizedComposeLocationState = (0, c.Z)(Ce));
                }
                componentDidMount() {
                    const { isBackNavigation: e } = this.props;
                    e || this._clearTimelineCache();
                }
                componentDidUpdate(e) {
                    const { isBackNavigation: t, query: o, querySrc: a, searchFilters: r, shouldClearTimelineCache: n } = this.props;
                    t || (!n && e.query === o && e.querySrc === a && pe()(e.searchFilters, r)) || this._clearTimelineCache();
                }
                render() {
                    const { query: e, querySrc: t, searchFilters: o, searchFocused: r, urtEndpointOptions: n, vertical: s } = this.props,
                        { featureSwitches: i, viewerUserId: d } = this.context,
                        l = !(!d || !i.isTrue("voice_rooms_search_results_page_audiospace_ring_enabled")),
                        c = this._getSearchMode();
                    return a.createElement(Se.Z, { component: be.Z, fab: this._renderFloatingComposeButton(), shouldRenderFab: !r }, a.createElement(_e.b.Provider, { query: e }, a.createElement(we.Z, { fetchOptions: this._getFetchOptions(), query: e, querySrc: t, searchFilters: o, searchMode: c, urtEndpointOptions: n, vertical: s, withUserPresence: l })));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return a.createElement(ye.Z, { getLocationState: this._getFabState, history: e });
                }
                _getFetchOptions() {
                    const { dataLookupId: e, querySrc: t } = this.props;
                    return { query_source: t, data_lookup_id: e };
                }
                _clearTimelineCache() {
                    const { clearTimelineCache: e, createLocalApiErrorHandler: t, query: o, querySrc: a, searchFilters: r, urtEndpointOptions: n } = this.props,
                        s = this._getSearchMode(),
                        { featureSwitches: i } = this.context,
                        d = i.isTrue("search_timelines_graphql_enabled");
                    (0, h.HD)(this.context.history) || e({ module: (0, ge.Z)({ query: o, querySource: a, searchMode: s, searchFilters: r, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: d }), fetchOptions: this._getFetchOptions() }).catch(t(fe.d));
                }
            }
            ve.contextType = y.rC;
            const Me = ke(ve),
                Te = "searchBoxOverflowButton",
                xe = l().a9ae1e78,
                Be = l().e75df5c9,
                Ze = l().i66136aa,
                Ie = l().d601fc20,
                Le = l().b0041756,
                Pe = l().add55c98,
                Ne = l().g2fd3206,
                Fe = l().ac4fb0f4,
                Re = l().bb967f9e,
                qe = l().aea62568,
                He = l().gfcfbf8c,
                Oe = l().a4645d92,
                Ge = [
                    { type: Z.N3.Top, label: Ze },
                    { type: Z.N3.Live, label: Ie },
                    { type: Z.N3.User, label: Ne },
                    { type: Z.N3.Video, label: Re },
                    { type: Z.N3.Image, label: Fe },
                    { type: Z.N3.Media, label: Pe },
                    { type: Z.N3.List, label: Le },
                ];
            class Ue extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._viewerUserId = this.context.viewerUserId),
                        (this.state = { shouldShowDeleteSearchConfirmation: !1, shouldClearTimelineCache: !1 }),
                        (this._getScribeData = (0, c.Z)((e, t, o, a, r) => ({ search_details: { ...(0, Z.hB)({ query: e, querySrc: t, searchFilters: o, modeValue: a, vertical: r }) } }))),
                        (this._renderRightControl = ({ isTwoColumn: e, searchFocused: t }) => (e || !t ? a.createElement(p.Z, { onClick: this._handleOverflowMenuClick, renderMenu: this._renderMenu, testID: Te }) : void 0)),
                        (this._renderMenu = (e) => {
                            const { history: t, isQueryAlreadySaved: o, location: n } = this.props,
                                s = !!this.context.viewerUserId;
                            return a.createElement(r.ZP, null, ({ windowWidth: r }) => {
                                const i = T.Z.isTwoColumnLayout(r);
                                return a.createElement(ue, { deleteSavedSearch: this._onDeleteSavedSearchMenuClick, history: t, isLoggedIn: s, isQueryAlreadySaved: o, isTwoColumn: i, location: n, onClose: e, saveSearch: this._onSaveSearch });
                            });
                        }),
                        (this._onSaveSearch = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: o, query: a, saveSearch: r, savedSearches: n } = this.props,
                                s = n.length;
                            a &&
                                r(a)
                                    .then(() => e({ text: He }))
                                    .catch(o(s < 25 ? C : v));
                            const i = B.Z.forSavedSearchResult(a, s);
                            t.scribe({ element: "saved_search", action: "add", data: { items: [i] } });
                        }),
                        (this._handleOnDeleteSavedSearchConfirm = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: o, deleteSavedSearch: a, query: r, savedSearches: n } = this.props,
                                s = n.findIndex((e) => e.query === r),
                                i = n[s];
                            if (i) {
                                a(i.id_str)
                                    .then(() => e({ text: Oe }))
                                    .catch(o(M));
                                const r = B.Z.forSavedSearchResult(i.query, s);
                                t.scribe({ element: "saved_search", action: "delete", data: { items: [r] } }), this.setState({ shouldShowDeleteSearchConfirmation: !1 });
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
                            const { featureSwitches: o } = this.context,
                                { shouldShowDeleteSearchConfirmation: r } = this.state,
                                { query: s } = e,
                                { mode: i } = this.props,
                                d = o.isTrue("responsive_web_grok_search_summary_enabled"),
                                l = o.isTrue("responsive_web_grok_search_summary_sidebar");
                            return a.createElement(a.Fragment, null, !d || (l && t) ? null : a.createElement(n.Z, null, a.createElement(g, { hidden: "top" !== i, query: s })), a.createElement(Me, e), r ? a.createElement(f.Z, { onCancel: this._handleOnDeleteSavedSearchCancel, onConfirm: this._handleOnDeleteSavedSearchConfirm }) : null);
                        }),
                        (this._renderSidebarContent = () => {
                            const { history: e, location: t, mode: o, query: r } = this.props;
                            let i = !1;
                            this.context.userClaims.isAnyPremiumSubscriber() || (i = this.context.featureSwitches.isTrue("subscriptions_upsells_radar_sidebar_enabled"));
                            const d = this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_enabled") && this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_sidebar");
                            return a.createElement(m.Z, { withRadarUpsell: i, withSearchBox: !1, withTrends: !!r }, d ? a.createElement(n.Z, null, a.createElement(g, { heightFactor: 2, hidden: "top" !== o, query: r })) : null, a.createElement(s.Z, { text: qe }), a.createElement(b.Z, { history: e, key: t.key, location: t }));
                        }),
                        (this._renderTabs = () => {
                            const { analytics: e, mode: t, query: o, querySrc: r, searchFilters: n, searchType: s, vertical: i } = this.props,
                                { featureSwitches: d, viewerUserId: l } = this.context,
                                c = (0, u.Z)(Ge, (a) => {
                                    if (!(0, Z.PH)(a.type, d, !!l)) return;
                                    const c = (0, Z.PH)(t, d, !!l) ? Z._I[t] : void 0,
                                        u = Z._I[a.type],
                                        h = () => u === c;
                                    return {
                                        isActive: h,
                                        key: a.type,
                                        to: (0, Z.Rg)({ query: o, querySrc: r, modeValue: u, searchType: s, searchFilters: n, vertical: i }),
                                        label: a.label,
                                        onClick: () => {
                                            h() || e.scribe({ element: `search_filter_${a.type}`, action: "navigate", data: this._getScribeData(o, r, n) });
                                        },
                                    };
                                });
                            return a.createElement(_.Z, { links: c });
                        }),
                        (this._getMemoizedTimelineScribeNamespace = (0, c.Z)((e, t) => ({ section: `search_filter_${e}${t === Z.rg.Topics ? "_topics" : ""}` }))),
                        (this._handleSearchBoxSubmit = (e, t, o = !1) => {
                            const { analytics: a } = this.props;
                            a.scribe({ section: "trendsplus", action: "search" }),
                                o &&
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
                    const { history: e, isSideNavExpandedByUser: t, location: o, mode: n, query: s, querySrc: d, searchFilters: l, searchFocused: c, searchType: u, vertical: p } = this.props,
                        { shouldClearTimelineCache: m } = this.state,
                        b = !!s,
                        _ = b ? Be({ query: s }) : xe,
                        y = { history: e, location: o, query: s, querySrc: d, searchFilters: l, searchFocused: c, vertical: p, shouldClearTimelineCache: m },
                        f = { initialValue: s, mode: n, onSubmit: this._handleSearchBoxSubmit, searchFilters: l, showBrandedHashFlag: !0 },
                        g = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        D = this.context.featureSwitches.isTrue("rweb_sourcemap_migration_side_expand_by_default");
                    return (0, h.HD)(e) && !b
                        ? a.createElement(i.Z, null)
                        : b
                          ? a.createElement(
                                x.nO,
                                { data: this._getScribeData(s, d, l, n, p), namespace: this._getMemoizedTimelineScribeNamespace(n, p) },
                                a.createElement(
                                    w.Z,
                                    null,
                                    null,
                                    a.createElement(r.ZP, null, ({ windowWidth: o }) => {
                                        const r = T.Z.isTwoColumnLayout(o),
                                            n = T.Z.isTwoColumnLayoutRedesign(o, t ?? D),
                                            i = this._renderRightControl({ isTwoColumn: r, searchFocused: c });
                                        return a.createElement(S.Z, { backLocation: "/explore", composeOptions: Ce(s), documentTitle: _, history: e, primaryContent: this._renderPrimaryContent(y, g ? n : r), rightControl: i, searchBoxOptions: f, secondaryBar: this._renderTabs(), sidebarContent: this._renderSidebarContent(), title: s, withBottomLoginSignupBar: !0, withSearchBox: !0 });
                                    }),
                                ),
                            )
                          : a.createElement(I.Z, { to: "/explore" });
                }
            }
            Ue.contextType = y.rC;
            const $e = z(Ue);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search-9f4db315.1d19919a.js.map
