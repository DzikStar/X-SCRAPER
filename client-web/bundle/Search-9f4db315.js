"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Search-9f4db315"],
    {
        58687: (e, t, a) => {
            a.d(t, { Z: () => o });
            const o = ({ apiClient: e, featureSwitches: t }) => ({ fetch: (t = {}, a = {}) => e.get("saved_searches/list", t, a), create: (t, a = {}) => e.post("saved_searches/create", t, {}, a), destroy: (t, a = {}) => e.post(`saved_searches/destroy/${t.id}`, t, {}, a) });
        },
        625661: (e, t, a) => {
            a.d(t, { ZP: () => h });
            var o = a(202784),
                r = a(614983),
                n = a.n(r),
                d = a(325686),
                i = a(370006),
                s = a(786998),
                l = a(929028),
                c = a(386802);
            function u(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class h extends o.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: r, hideBackButton: n, isFullWidth: d, isLarge: l, leftControl: c, middleControl: h, position: p, rightControl: b, secondaryBar: m, style: S, subtitle: y, title: w, titleDomId: _, titleIconCell: f, titleIconCellSize: g, withBackground: A, withWideContainer: D } = this.props,
                        { isModal: v } = this.context,
                        C = n ? c : o.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!A, v, !!m);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: a, isFullWidth: d, isLarge: l, leftControl: C, middleControl: h, position: u(p, v, r), rightControl: b, style: S, subtitle: y, title: w, titleDomId: _, titleIconCell: f, titleIconCellSize: g, withBackground: E, withWideContainer: D }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = l.Z.getBackgroundStyles();
                    return t ? o.createElement(d.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        33104: (e, t, a) => {
            a.d(t, { Z: () => r });
            a(202784);
            var o = a(325686);
            const r = (0, a(337455).Z)(o.Z);
        },
        789831: (e, t, a) => {
            a.d(t, { Z: () => l });
            var o = a(807896),
                r = a(202784),
                n = a(325686),
                d = a(392237),
                i = a(655352);
            const s = d.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: a, shouldRenderFab: d = !0, style: l, withoutBottomPadding: c, ...u }) => {
                    const h = t || n.Z,
                        p = d && !(0, i.ZP)();
                    return r.createElement(h, (0, o.Z)({}, u, { style: [p && !c && s.root, l] }), e, p ? a : null);
                };
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => m, w: () => p });
            var o = a(202784),
                r = a(325686),
                n = a(108362),
                d = a(386802),
                i = a(392237),
                s = a(652904),
                l = a(555079),
                c = a(625661),
                u = a(449067),
                h = a(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: n, centerTitle: d, hideBackButton: i, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: m, rightControl: S, secondaryBar: y, subtitle: w, title: _ } = this.props,
                                { isModal: f } = this.context;
                            return o.createElement(r.Z, { style: f ? [b.childViewAppBarRoot, b.appBarZindex] : b.appBarZindex }, o.createElement(c.ZP, { backButtonType: a || (f ? "close" : "back"), backLocation: n, centerTitle: d, fixed: !f, hideBackButton: i, history: s, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: m, ref: e, rightControl: S, secondaryBar: y, style: [f && b.appBarModal, t], subtitle: w, title: _, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: d, documentTitle: i, isFullWidth: l, isLarge: c, renderHeader: p, title: m, withoutBottomBarMobile: S } = this.props,
                        { isModal: y } = this.context,
                        w = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(s.Z, null, o.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: m }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [b.root, y && b.rootModal] }, !y && w, o.createElement(n.Z, { isFullWidth: l, isLarge: c, style: [b.container, y && b.containerModal, d] }, y ? o.createElement(h.Z, { style: b.viewport }, w, a) : a), t ? o.createElement(r.Z, { style: [b.bottomBarModal, !y && !S && b.bottomBarMobile] }, o.createElement(n.Z, { isFullWidth: l, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = d.Z);
            const b = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = p;
        },
        896008: (e, t, a) => {
            a.d(t, { J: () => B, Z: () => x });
            var o = a(202784),
                r = a(325686),
                n = a(449479),
                d = a(30183),
                i = a(392237),
                s = a(674132),
                l = a.n(s),
                c = a(744531),
                u = a(685399),
                h = a(443781),
                p = a(369241),
                b = a(725516);
            const m = "searchFiltersAdvancedSearch",
                S = Object.freeze({ People: "People", Location: "Location" }),
                y = l().j622effe,
                w = l().g2fd3206,
                _ = l().defb4aaa,
                f = l().af293dc2,
                g = l().jaaa8984,
                A = l().i5045e74,
                D = l().h2388754,
                v = "anyone",
                C = "youFollow",
                E = "anywhere",
                k = "nearYou",
                M = [
                    {
                        label: w,
                        name: S.People,
                        options: [
                            { label: _, value: v },
                            { label: f, value: C },
                        ],
                    },
                    {
                        label: g,
                        name: S.Location,
                        options: [
                            { label: A, value: E },
                            { label: D, value: k },
                        ],
                    },
                ];
            class B extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderFilters = () => M.map((e, t) => o.createElement(r.Z, { key: e.name, style: t > 0 && T.paddingTop }, o.createElement(n.Z, { label: e.label, name: e.name, onChange: this._handleFilterChange, options: e.options, value: this._getCurrentValue(e.name) })))),
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
                                    location: { query: o },
                                } = this.props;
                            switch (e) {
                                case S.People:
                                    if (a) {
                                        this.setState({ peopleFilter: t });
                                        const e = { pf: t === C ? "on" : void 0, lf: "on" === o.lf ? o.lf : void 0 };
                                        this._executeSearch(e, "people");
                                    } else this.setState({ shouldShowLoginSheet: !0 });
                                    break;
                                case S.Location: {
                                    this.setState({ locationFilter: t });
                                    const e = { lf: t === k ? "on" : void 0, pf: "on" === o.pf ? o.pf : void 0 };
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
                            const { history: a, location: o } = this.props;
                            this._scribeAction(t);
                            const r = this._getPathname();
                            a.replace({ pathname: r, query: (0, u.Z)({ ...o.query, ...e }) });
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
                        { location: d } = e,
                        i = d.query,
                        s = a && i && i.pf ? C : v,
                        l = i && i.lf ? k : E;
                    this.state = { peopleFilter: s, locationFilter: l, shouldShowLoginSheet: !1 };
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ action: "impression" });
                }
                render() {
                    const { withBottomBorder: e } = this.props,
                        { shouldShowLoginSheet: t } = this.state;
                    return o.createElement(r.Z, null, o.createElement(r.Z, { style: T.content }, this._renderFilters()), o.createElement(r.Z, { style: e && T.bottomBorder, testID: m }, o.createElement(d.Z, { link: this._getAdvancedSearchLink(), onPress: this._handleFooterPress, text: y })), t ? o.createElement(p.ZP, { onClose: this._handleHideLoginSheet }) : null);
                }
            }
            (B.contextType = h.rC), (B.defaultProps = { withBottomBorder: !1 });
            const T = i.default.create((e) => ({ content: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space16 }, bottomBorder: { borderBottomColor: e.colors.gray50, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, paddingTop: { paddingTop: e.spaces.space4 } })),
                x = (0, b.Z)(B, { page: "search_filters" });
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => l });
            var o = a(807896),
                r = a(202784),
                n = a(107267),
                d = a(403556),
                i = a(791632);
            const s = (e) => {
                    const t = (0, n.useHistory)();
                    return r.createElement(d.Z, (0, o.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                l = r.memo(s);
        },
        387524: (e, t, a) => {
            a.d(t, { Z: () => m });
            var o = a(807896),
                r = a(202784),
                n = a(325686),
                d = a(292627),
                i = a(537392),
                s = a(392237),
                l = a(365023),
                c = a(392027),
                u = a(774654),
                h = a(725516),
                p = a(443781);
            const b = s.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${s.default.iPhoneOffsetBottom} - ${u.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                m = (e) => {
                    const { "aria-label": t, label: a, onPress: m, scribeComponent: S, ...y } = e,
                        { loggedInUserId: w } = r.useContext(p.rC),
                        _ = (0, h.z)(),
                        f = r.useCallback(
                            (e) => {
                                _.scribe({ component: S, action: "click" }), m && m(e);
                            },
                            [_, m, S],
                        ),
                        g = u.ZM.useCollapsibleNavBars(),
                        A = [...u.Ah({ elementPosition: "bottom" }), g && b.fabStaysAboveSafeArea];
                    return w
                        ? r.createElement(
                              d.Z.FloatingAction,
                              null,
                              r.createElement(i.ZP, null, ({ windowWidth: e }) => {
                                  const d = e > s.default.theme.breakpoints.large,
                                      i = e > s.default.theme.breakpoints.medium,
                                      u = e < s.default.theme.breakpoints.micro,
                                      h = [b.root, i && b.rootMedium, d && b.rootLarge],
                                      p = [b.fab, d && b.fabLarge, u && b.fabMicro, A];
                                  return r.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: h },
                                      r.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, i) => r.createElement(n.Z, (0, o.Z)({ ref: e() }, i({ style: p })), r.createElement(c.Z, (0, o.Z)({}, y, { "aria-label": t, label: d ? a : void 0, onPress: f, style: u && b.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, a) => {
            a.d(t, { Z: () => s });
            a(136728);
            var o = a(202784),
                r = a(387524),
                n = a(635510);
            const d = "/compose/post";
            class i extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: a } = this.props,
                                o = { pathname: d, state: (t && t()) || {} };
                            a.push(o);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: a, scribeComponent: i } = this.props;
                    return o.createElement(r.Z, { "aria-label": e, href: d, icon: t, label: a, onPress: this._handlePress, scribeComponent: i, testID: n.Z.tweet });
                }
            }
            const s = i;
        },
        32677: (e, t, a) => {
            a.d(t, { Z: () => u });
            var o = a(202784),
                r = a(674132),
                n = a.n(r),
                d = a(186444),
                i = a(355883);
            const s = n().j0179e90,
                l = n().ee69d769({ verb: "" }),
                c = o.createElement(d.default, null),
                u = ({ getLocationState: e, history: t }) => o.createElement(i.Z, { "aria-label": s, getLocationState: e, history: t, icon: c, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, a) => {
            a.d(t, { Z: () => o });
            const o = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        233391: (e, t, a) => {
            a.d(t, { BH: () => O, Qj: () => $, Wc: () => G, sI: () => U });
            var o = a(202784),
                r = a(731708),
                n = a(392237),
                d = a(674132),
                i = a.n(d),
                s = a(911373),
                l = a(761744),
                c = a(98440),
                u = a(720600),
                h = a(125966),
                p = a(544367),
                b = a(452693),
                m = a(971657),
                S = a(956272),
                y = a(520913);
            const w = i().a17a75da,
                _ = i().e7342ed4,
                f = i().b6a43e78,
                g = i().b469e406,
                A = i().b8505290,
                D = ({ userFullName: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "e1a49407" }, o.createElement(r.ZP, null, e)) : void 0),
                v = i().ae8b0564,
                C = ({ userFullName: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "be54ed41" }, o.createElement(r.ZP, null, e)) : void 0),
                E = i().f2adab0e,
                k = ({ userFullName: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "jb19eb17" }, o.createElement(r.ZP, null, e)) : void 0),
                M = ({ userFullName: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "bbfee611" }, o.createElement(r.ZP, null, e)) : void 0),
                B = i().b7821a74,
                T = ({ userFullName: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "af104f2b" }, o.createElement(r.ZP, null, e)) : void 0),
                x = ({ customText: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "ccc1f303" }, o.createElement(r.ZP, null, e)) : void 0),
                Z = ({ userFullName: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "ce02fabf" }, o.createElement(r.ZP, null, e)) : void 0),
                I = i().e6d43d06,
                P = ({ customText: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "a85608a7" }, o.createElement(r.ZP, null, e)) : void 0),
                L = i().ic848090,
                F = i().f9ebe066,
                N = ({ userFullName: e }) => (e ? o.createElement(i().I18NFormatMessage, { $i18n: "c76865b7" }, o.createElement(r.ZP, null, e)) : void 0),
                R = i().je3d93e2,
                q = i().ea88ce2e,
                H = i().je3d93e2,
                O = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                G = (e, t) => {
                    switch (t) {
                        case O.follow:
                            return { icon: s.default, text: M, subtext: B, iconStyle: V.iconOther };
                        case O.like:
                            return { icon: l.default, text: E, subtext: k, iconStyle: V.iconLike };
                        case O.reply:
                            return { icon: c.default, text: A, subtext: D, iconStyle: V.iconOther };
                        case O.retweet:
                            return { icon: u.default, text: v, subtext: C, iconStyle: V.iconRetweet };
                        case O.dmshare:
                            return { icon: h.default, text: T, iconStyle: V.iconOther };
                        case O.subscribe:
                            return { icon: p.default, text: x, subtext: Z, iconStyle: V.iconOther };
                        case O.topic:
                            return { icon: b.default, text: I, subtext: P, iconStyle: V.iconTopics };
                        case O.community:
                            return { icon: m.default, text: L, subtext: F, iconStyle: V.iconOther };
                        case O.search:
                            return { icon: S.default, text: N, subtext: R, iconStyle: V.iconOther };
                        default:
                            return { icon: y.default, text: q, subtext: H, iconStyle: V.iconTwitter };
                    }
                },
                U = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? w : f),
                $ = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? _ : g),
                V = n.default.create((e) => ({ iconOther: { color: e.colors.blue500 }, iconLike: { color: e.colors.magenta500 }, iconTwitter: { color: e.colors.brandColor }, iconRetweet: { color: e.colors.green500 }, iconTopics: { color: e.colors.blue500 } }));
        },
        369241: (e, t, a) => {
            a.d(t, { BH: () => k.BH, ZP: () => L });
            a(875640);
            var o = a(202784),
                r = a(529356),
                n = a(674132),
                d = a.n(n),
                i = a(323265),
                s = a(170542),
                l = a(951790),
                c = a(804027),
                u = a(443781),
                h = a(325686),
                p = a(292627),
                b = a(731708),
                m = a(154003),
                S = a(392237);
            class y extends o.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: a, primaryText: r, secondaryButtonLabel: n, secondaryText: d } = this.props;
                    return o.createElement(p.Z.HalfSheet, null, o.createElement(h.Z, { style: w.sheetContent }, o.createElement(h.Z, { style: w.content }, o.createElement(h.Z, { style: w.header }, o.createElement(b.ZP, { color: "white", size: "headline1", weight: "bold" }, r)), o.createElement(b.ZP, { color: "white", style: w.secondaryText }, d)), o.createElement(h.Z, { style: w.footer }, o.createElement(m.ZP, { onPress: t, size: "medium", style: w.button, type: "onMediaOutlined" }, o.createElement(b.ZP, { numberOfLines: 1 }, n)), o.createElement(m.ZP, { onPress: e, size: "medium", style: w.button, type: "onMediaWhiteFilled" }, o.createElement(b.ZP, { numberOfLines: 1 }, a)))));
                }
            }
            const w = S.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: S.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                _ = y;
            var f = a(668214),
                g = a(558369),
                A = a(118823),
                D = a(390387),
                v = a(38562),
                C = a(936572);
            const E = (0, f.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: g.ur, loginPromptShown: v.fj, loginPromptLastShown: C.ne, startLocation: A.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: v.Af, setLoginReturnPath: D.Jm, updateSettings: v.VP }))
                .withAnalytics();
            var k = a(233391);
            a(920099), a(856642), a(782826), a(903019);
            const M = Object.freeze({ BannerSwitchToApp: "banner_switch_to_app", InterstitialSwitchToApp: "interstitial_switch_to_app", NuxAppDownload: "NUX-app-download", SwitchToAppFooter: "switch-to-app-footer", UseApp: "use-app", UseAppExtended: "use-app-extended", SwitchToAppHigh7: "switch_to_app_high_7", SwitchToAppHigh1: "switch_to_app_high_1", SwitchToAppHigh2: "switch_to_app_high_2", SwitchToAppHigh3: "switch_to_app_high_3", SwitchToAppHigh5: "switch_to_app_high_5", SwitchToAppLow7: "switch_to_app_low_7", SwitchToAppLow1: "switch_to_app_low_1", SwitchToAppLow3: "switch_to_app_low_3", SwitchToAppLow5: "switch_to_app_low_5", SwitchToAppLow9: "switch_to_app_low_9" }),
                B = d().j607bf02,
                T = d().j49fd4e8,
                x = d().hd50e064,
                Z = d().a565833e,
                I = d().e919c3bc;
            class P extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getFullSheetDisplayElements = k.Wc.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetPrimaryText = k.sI.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetSecondaryText = k.Qj.bind(null, this.context.featureSwitches)),
                        (this._isStandaloneApp = s.Z.isStandaloneApp()),
                        (this._shouldRenderPrompt = () => {
                            const { loginPromptLastShown: e, loginPromptShown: t, onlyShowOnce: a, useBottomBanner: o } = this.props,
                                { displayInterval: r } = this.state;
                            if (o && !this._hasMobileAppStore()) return !1;
                            if (a) {
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
                            const { onClose: t, postLoginPath: a, setLoginReturnPath: o } = this.props;
                            this._scribeAction("login"), a && o(a), t();
                        }),
                        (this._handleSignupButtonClick = (e) => {
                            this._scribeAction("signup"), this.props.onClose();
                        }),
                        (this._handleAppInstallButtonClick = (e) => {
                            e.preventDefault(), this._scribeAction("download"), l.Z.goToAppStore("loggedoutprompt");
                        }),
                        (this._getSignupState = () => {
                            const { displayMode: e, tweetId: t, userId: a } = this.props;
                            switch (e) {
                                case k.BH.follow:
                                    return { gatedAction: { action: c.qJ.Follow, user_id: a } };
                                case k.BH.like:
                                    return { gatedAction: { action: c.qJ.Favorite, tweet_id: t, user_id: a } };
                                case k.BH.reply:
                                    return { gatedAction: { action: c.qJ.Reply, tweet_id: t, user_id: a } };
                                case k.BH.retweet:
                                    return { gatedAction: { action: c.qJ.Retweet, tweet_id: t, user_id: a } };
                                default:
                                    return;
                            }
                        }),
                        (this._getLoginState = () => {
                            const { postLoginPath: e } = this.props;
                            if (e) return { input: { requested_variant: btoa(JSON.stringify({ redirect_after_login: e })) } };
                        }),
                        (this._hasMobileAppStore = () => i.ZP.isIOS() || i.ZP.isAndroid());
                    const { useBottomBanner: a } = this.props;
                    this._showTertiaryCTA = this._hasMobileAppStore() && !this._isStandaloneApp && this.context.featureSwitches.isTrue("responsive_web_login_signup_sheet_app_install_cta_enabled");
                    const o = this.context.featureSwitches.getNumberValue("rweb_update_fatigue_switch_to_app_day_timeout"),
                        r = this.context.featureSwitches.getStringValue("rweb_update_fatigue_switch_to_app_link");
                    this.state = { displayInterval: a ? 864e5 * o : 0, switchToAppLink: M[r] };
                }
                componentDidMount() {
                    this._shouldRenderPrompt() && this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { loginPromptShown: e, onlyShowOnce: t, setLoginPromptShown: a, updateSettings: o } = this.props;
                    !e && t && (a(!0), o({ loginPromptLastShown: Date.now() }));
                }
                render() {
                    const { allowBackNavigation: e, customText: t, displayMode: a, hideSignUp: n, isFullHeightOnMobile: d, loginLabel: i, useBottomBanner: s, userFullName: l } = this.props;
                    if (!this._shouldRenderPrompt()) return null;
                    const { icon: c, iconStyle: u, subtext: h, text: p } = this._getFullSheetDisplayElements(a),
                        b = "function" == typeof p ? p({ customText: t, userFullName: l }) : p,
                        m = "function" == typeof h ? h({ customText: t, userFullName: l }) : h,
                        S = n ? "" : this.props.signupLabel,
                        y = { pathname: "/i/flow/login", state: this._getLoginState() },
                        w = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return s ? o.createElement(_, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: T, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: x, secondaryText: this._getHalfSheetSecondaryText() }) : o.createElement(r.Z, { actionLabel: i, actionLink: y, allowBackNavigation: e, graphic: c, graphicStyle: u, headline: b || "", isFullHeightOnMobile: d, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: S, secondaryActionLink: w, subtext: m || "", tertiaryActionLabel: this._showTertiaryCTA ? B : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: a, useBottomBanner: o } = this.props,
                        r = o ? "half_sheet" : a;
                    t.scribe({ component: "login_signup_sheet", element: r, action: e });
                }
            }
            (P.defaultProps = { displayMode: k.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: I, signupLabel: Z, onlyShowOnce: !1 }), (P.displayMode = k.BH), (P.contextType = u.rC);
            const L = E(P);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var o = a(202784),
                r = a(500002),
                n = a(668214),
                d = a(997174),
                i = a(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: d.NH }))
                .withAnalytics();
            class l extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: n, search: d },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (s = !0));
                    const l = r || i;
                    ((l && r !== i) || (!l && a !== n) || o !== d || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const c = (0, r.ZP)(s(l));
        },
        886191: (e, t, a) => {
            a.d(t, { Z: () => g });
            var o = a(202784),
                r = a(731708),
                n = a(457311),
                d = a(674132),
                i = a.n(d),
                s = a(912021),
                l = a(864702),
                c = a(479506),
                u = a(903019),
                h = a(519896),
                p = a(774006),
                b = a(443781),
                m = a(810641),
                S = a(335632);
            const y = i().c09de2d4,
                w = i().ae111c99,
                _ = o.createElement(i().I18NFormatMessage, { $i18n: "e7e44bab" }, o.createElement(r.ZP, { link: "/settings/search" }, i().f191a2ba));
            class f extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === c.Z.ItemType.USER || e === c.Z.ItemType.TOPIC || e === c.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: a, searchMode: o, urtEndpointOptions: r, vertical: n } = this.props,
                                { featureSwitches: d } = this.context,
                                i = d.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, o, a, n, r, i);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || o.createElement(n.Z, { header: w({ query: t }), message: _ });
                        }),
                        (this._getMemoizedModule = (0, s.Z)((e, t, a, o, r, n, d) => (0, p.Z)({ query: e, searchMode: a, querySource: t, searchFilters: o, vertical: r, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: d }))),
                        (this._getMemoizedEntryConfiguration = (0, s.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, S.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== u.N3.Live;
                    return o.createElement(m.Z, { apiErrorHandlerMap: l.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: h.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: y });
                }
            }
            f.contextType = b.rC;
            const g = f;
        },
        243754: (e, t, a) => {
            a.d(t, { Z: () => u });
            var o = a(202784),
                r = a(190286),
                n = a(674132),
                d = a.n(n),
                i = a(436001);
            const s = d().hffea05c,
                l = d().j037e374,
                c = d().d96cf7ce,
                u = ({ onCancel: e, onConfirm: t }) => o.createElement(r.Z, { confirmButtonLabel: c, confirmButtonType: "destructiveFilled", headline: s, onCancel: e, onConfirm: t, testID: i.Z.deleteSavedSearchDialog, text: l });
        },
        436001: (e, t, a) => {
            a.d(t, { Z: () => o });
            const o = { deleteRecentSearchesDialog: "deleteRecentSearchesDialog", deleteSavedSearchDialog: "deleteSavedSearchDialog", typeaheadEmptySearch: "typeaheadEmptySearch", typeaheadRecentSearchesHeader: "typeaheadRecentSearchesHeader", typeaheadRecentSearchesItem: "typeaheadRecentSearchesItem", typeaheadSavedSearchesContainer: "typeaheadSavedSearchesContainer", typeaheadSavedSearchesHeader: "typeaheadSavedSearchesHeader", typeaheadSavedSearchesItem: "typeaheadSavedSearchesItem" };
        },
        864702: (e, t, a) => {
            a.d(t, { d: () => s });
            var o = a(674132),
                r = a.n(o),
                n = a(615656),
                d = a(51525);
            const i = r().i1801686,
                s = { [n.ZP.GenericForbidden]: { toast: (0, d.j)() }, [n.ZP.InvalidRequestUrl]: { toast: { text: i, withClearButton: !0 } }, showToast: !0 };
        },
        337455: (e, t, a) => {
            a.d(t, { Z: () => s });
            var o = a(202784),
                r = a(411916),
                n = a.n(r),
                d = a(373463),
                i = a.n(d);
            function s(e) {
                class t extends o.Component {
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
                        return this.state.shouldRender ? o.createElement(e, this.props) : null;
                    }
                }
                return i()(t, e);
            }
        },
        951790: (e, t, a) => {
            a.d(t, { Z: () => d });
            var o = a(323265);
            const r = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = n(e),
                            a = [t.android, t.ios],
                            o = a.find((e) => e.matches());
                        return o ? [o] : a;
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
                n = (e = "rwoiah") => ({ android: { platform: "android", matches: () => o.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => o.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                d = r;
        },
        883432: (e, t, a) => {
            a.d(t, { Z: () => o });
            const o = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        554951: (e, t, a) => {
            a.d(t, { GL: () => S, as: () => m, k9: () => y, l9: () => w });
            var o = a(58687),
                r = a(163889),
                n = a(499627),
                d = a(917799),
                i = a(312771),
                s = a(390387);
            const l = "savedSearches",
                c = { fetchStatus: i.ZP.NONE, savedSearches: [] },
                u = Object.freeze({ REQUEST: "rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST", SUCCESS: "rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS", FAILURE: "rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE" }),
                h = Object.freeze({ REQUEST: "rweb/savedSearches/SAVE_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/SAVE_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/SAVE_SEARCH_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE" });
            function b(e = c, t) {
                if (!t) return e;
                switch (t.type) {
                    case u.SUCCESS: {
                        const a = t.payload,
                            o = Array.isArray(a);
                        return o || (0, r.ZP)("Saved search results are not type array", { extra: { savedSearchResultsType: typeof a } }), { ...e, fetchStatus: i.ZP.LOADED, savedSearches: o && a ? a : [] };
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
            n.Z.register({ [l]: b });
            const m = (e) => e[l].savedSearches,
                S =
                    (e) =>
                    (t, a, { api: r }) =>
                        (0, d._O)(t, { request: r.withEndpoint(o.Z).create, params: { query: e } })({ actionTypes: h, context: "SAVE_SEARCH" }),
                y =
                    (e) =>
                    (t, a, { api: r }) =>
                        (0, d._O)(t, { request: r.withEndpoint(o.Z).destroy, params: { id: e } })({ actionTypes: p, context: "DELETE_SAVED_SEARCH" }),
                w =
                    () =>
                    (e, t, { api: a }) => {
                        const r = t();
                        if (!(0, s.Qb)(r)) return Promise.resolve();
                        const n = ((e) => e[l].fetchStatus)(r) === i.ZP.LOADED;
                        return n ? Promise.resolve() : e((e, t, { api: a }) => (0, d._O)(e, { request: a.withEndpoint(o.Z).fetch, params: {} })({ actionTypes: u, context: "FETCH_SAVED_SEARCHES" }));
                    };
        },
        774006: (e, t, a) => {
            a.d(t, { Z: () => m, u: () => b });
            var o = a(644829),
                r = a(750085),
                n = a(903019),
                d = a(883432),
                i = a(555875),
                s = a(218951);
            const l = "search-",
                c = " near:me",
                u = " filter:follows",
                h = { [n.N3.Image]: { result_filter: n.N3.Image }, [n.N3.List]: { result_filter: n.N3.List }, [n.N3.Live]: { tweet_search_mode: n.N3.Live }, [n.N3.Media]: { result_filter: n.N3.Media }, [n.N3.Top]: {}, [n.N3.User]: { result_filter: n.N3.User }, [n.N3.Video]: { result_filter: n.N3.Video } },
                p = (e) => (((e) => e === d.Z.SpellingCorrectionRevertClick || e === d.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                b = () => (e, t) => {
                    e(
                        (0, i.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, i.$q)(e)),
                    );
                },
                m = ({ query: e, searchMode: t = n.N3.Top, querySource: a, searchFilters: d, vertical: i, urtEndpointOptions: b, searchTimelinesGraphQLEnabled: m }) => {
                    const S = p(a),
                        y = d && d.peopleFilter ? "searcher_follows" : void 0,
                        w = y ? "-pf" : "",
                        _ = d && d.locationFilter && !e.includes(c) ? `${e}${c}` : e,
                        f = { timelineId: `${l}${_}-${t}${S}${w}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchSearch, getEndpointParams: (e) => ({ ...b?.requestParams, q: _, social_filter: y, vertical: i, ...h[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === n.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (m) {
                        const e = y && !_.includes(u) ? `${_}${u}` : _,
                            d = ((e) => {
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
                            i = `gql-${l}${_}-${t}${S}${w}`;
                        return (0, s.Z)({ ...f, timelineId: i, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: r.Z, network: { getEndpointParams: ({ count: t, cursor: o }) => ({ rawQuery: e, count: t, product: d, querySource: a, cursor: "string" == typeof o ? o : void 0 }), getEndpoint: (e) => e.withEndpoint(o.Z).fetchSearchGraphQL } });
                    }
                    return (0, s.Z)(f);
                };
        },
        80927: (e, t, a) => {
            a.r(t), a.d(t, { SearchFiltersScreen: () => u, default: () => h });
            var o = a(807896),
                r = a(202784),
                n = a(674132),
                d = a.n(n),
                i = a(980407),
                s = a(896008),
                l = a(725516);
            const c = d().aea62568;
            function u(e) {
                const { history: t, location: a } = e;
                return r.createElement(i.Z, { documentTitle: c, history: t, title: c }, r.createElement(s.J, (0, o.Z)({}, e, { key: a.key, withBottomBorder: !0 })));
            }
            const h = (0, l.Z)(u, { page: "search_filters" });
        },
        184297: (e, t, a) => {
            a.r(t), a.d(t, { SearchScreen: () => Ue, default: () => $e });
            var o = a(202784),
                r = a(537392),
                n = a(691533),
                d = a(844685),
                i = a(457311),
                s = a(674132),
                l = a.n(s),
                c = a(912021),
                u = a(459679),
                h = a(791632),
                p = a(805104),
                b = a(718e3);
            a(272175);
            l().b11805af, l().d610e8c3;
            var m = a(896008),
                S = a(252021),
                y = a(507651),
                w = a(443781),
                _ = a(652904),
                f = a(243754);
            const g = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("icons.7"),
                        a.e("icons.15"),
                        a.e("icons.8"),
                        a.e("icons.3"),
                        a.e("icons.24"),
                        a.e("icons.9"),
                        a.e("icons.22"),
                        a.e("icons.12"),
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("icons.5"),
                        a.e("icons.6"),
                        a.e("icons.14"),
                        a.e("icons.18"),
                        a.e("icons.2"),
                        a.e("icons.21"),
                        a.e("icons.16"),
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
                        a.e("icons.1"),
                        a.e("icons.28"),
                        a.e("icons.27"),
                        a.e("icons.19"),
                        a.e("icons.0"),
                        a.e("icons.4"),
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
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-de203a7b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-50148475"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-00a077b2"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-909816ba"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-604de716"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1299e360"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-60e08fbd"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-25704d22"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-7b94920a"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-a7573e1a"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-ee9ffade"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8d854c2e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aaf38a28"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-aeee0c9e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-da0e99d8"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-4b805c4b"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c377d397"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c219810"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-9b4c2397"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-c2fdd616"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-70774d80"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-92c1aea7"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8767a721"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-d5c922ba"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-e9891f16"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0a8205ef"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-5719ea67"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1b6af858"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-8c7141d9"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-87641eae"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-f33a9093"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b336079b"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1f6ca6be"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-b2a4a903"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-2569c2fe"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-0ad0de7e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-abb249de"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-6cde809e"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-708dfafd"),
                        a.e("shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-af3d50e9"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        a.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-012d0d8f"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-81ee9ca9"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        a.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        a.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~bundle.Ocf~ondemand.Insights~bundle.TV~bundle.Accoun"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~bundle.Payments~bundle.PaymentReceipt~ondemand.News~ondemand.Insig"),
                        a.e("shared~bundle.Birdwatch~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandler"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-5c163be3"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-306954a6"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-0ec68f8f"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-536eaa00"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-0786ae68"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-f82e0cd2"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-f5b13972"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-8584f0c3"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-01309e43"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-398ef225"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-fc70f967"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-e43b6c88"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-b08eb7a4"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-5ba759f7"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-ae3eee7f"),
                        a.e("shared~bundle.AccountAnalytics~bundle.Grok~ondemand.News~ondemand.Insights-27545368"),
                        a.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        a.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        a.e("bundle.Grok-e907d115"),
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
                        a.e("bundle.Grok-0f78f5a6"),
                        a.e("bundle.Grok-7a6ce5c4"),
                        a.e("bundle.Grok-cebf58fc"),
                        a.e("bundle.Grok-b328b613"),
                        a.e("bundle.Grok-9e9ee61b"),
                        a.e("bundle.Grok-6ac0f1a5"),
                        a.e("bundle.Grok-3c20ad5c"),
                    ]).then(a.bind(a, 528829)),
            });
            var A = a(601576);
            const D = l().f9d35b98,
                v = l().ha925ad4,
                C = l().h0a9931c,
                E = { customErrorHandler: () => (0, A.mf)({ text: v }), showToast: !0 },
                k = { customErrorHandler: () => (0, A.mf)({ text: D }), showToast: !0 },
                M = { customErrorHandler: () => (0, A.mf)({ text: C }), showToast: !0 };
            var B = a(10656),
                T = a(293115),
                x = a(942893),
                Z = a(903019),
                I = a(615027),
                P = a(24949),
                L = a(71620),
                F = a(2430),
                N = a(668214),
                R = a(704279),
                q = a(554951),
                H = a(936572);
            const O = (e, t) => {
                    const { location: a } = t;
                    return a.query && a.query.src && "string" == typeof a.query.src ? a.query.src : "";
                },
                G = (e, t) => {
                    const {
                        location: a,
                        match: { params: o },
                    } = t;
                    return o && o.unsafeHashtagQuery && "string" == typeof o.unsafeHashtagQuery ? `#${o.unsafeHashtagQuery}` : (a && a.query && a.query.q && (0, F.BX)(a.query.q)) || "";
                },
                U = (e, t) => {
                    const { location: a } = t;
                    return 0 === a.pathname.indexOf("/search") ? "search" : "hashtag";
                },
                $ = (e, t) => !!(t.location.state || {}).searchFocused,
                V = (0, P.P1)((0, F.cI)("pf"), (0, F.cI)("lf"), (e, t) => ({ peopleFilter: e, locationFilter: t })),
                z = (0, N.Z)()
                    .propsFromState(() => ({ searchFocused: $, query: G, querySrc: O, isQueryAlreadySaved: (0, P.P1)(G, q.as, (e, t) => t.map((e) => e.query).indexOf(e) > -1), searchType: U, searchFilters: V, mode: Z.Jm, savedSearches: q.as, vertical: (0, F.cI)("vertical"), isSideNavExpandedByUser: H.op }))
                    .propsFromActions(() => ({ addToast: A.fz, createLocalApiErrorHandler: (0, L.zr)("SEARCH_SCREEN"), deleteSavedSearch: q.k9, fetchSavedSearchesIfNeeded: q.l9, saveSearch: q.GL, scribeAction: R.n }))
                    .withAnalytics({ page: "search" });
            a(136728), a(901951);
            var W = a(811176),
                Q = a(517747),
                j = a(956272),
                J = a(698891),
                K = a(982866),
                X = a(607127),
                Y = a(744531),
                ee = a(952793);
            const te = "searchFilters-overflow",
                ae = "advancedSearch-overflow",
                oe = "searchSettings-overflow",
                re = "saveSearch-overflow",
                ne = "deleteSavedSearch-overflow",
                de = l().h1ef00dc,
                ie = l().aea62568,
                se = l().j622effe,
                le = l().h4912b5e,
                ce = l().b9bc69ca;
            const ue = function (e) {
                const { deleteSavedSearch: t, isLoggedIn: a, isQueryAlreadySaved: r, isTwoColumn: n, location: d, onClose: i, saveSearch: s } = e,
                    l = (0, ee.hC)("responsive_web_saved_search_enabled"),
                    c = [];
                return (
                    n || c.push({ Icon: Q.default, testID: te, text: ie, link: { pathname: "/i/search_filters", query: d.query } }),
                    c.push({ Icon: j.default, testID: ae, text: se, link: { pathname: "/search-advanced", query: { ...(0, Y.Z)(d.query, ["src"]) } } }),
                    a &&
                        (c.unshift({ Icon: J.default, testID: oe, text: de, link: "/settings/search" }),
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
                                          e(), s();
                                      },
                                  }))),
                    o.createElement(W.Z, { items: c, onCloseRequested: i })
                );
            };
            var he = a(476984),
                pe = a.n(he),
                be = a(842623),
                me = a(33104),
                Se = a(789831),
                ye = a(959658),
                we = a(32677),
                _e = a(886191),
                fe = a(864702),
                ge = a(774006),
                Ae = a(735313);
            const De = (e, t) => "POP" === t.history.action,
                ve = (e, t) => {
                    const { location: a } = t;
                    return a?.state?.urtEndpointOptions;
                },
                Ce = (0, N.Z)()
                    .propsFromState(() => ({ dataLookupId: Z.XN, isBackNavigation: De, searchMode: Z.Jm, urtEndpointOptions: ve }))
                    .propsFromActions(() => ({ clearTimelineCache: ({ fetchOptions: e, module: t }) => (0, Ae.Z)(t, e), createLocalApiErrorHandler: (0, L.zr)("SEARCH_RESULTS_SCREEN") })),
                Ee = (e) => (e && (0, be.Z)(e) ? { defaultText: ` ${e}`, positionCursorAtBeginning: !0 } : void 0);
            class ke extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getSearchMode = () => {
                            const { searchMode: e } = this.props,
                                { featureSwitches: t, viewerUserId: a } = this.context;
                            return (0, Z.PH)(e, t, !!a) ? e : Z.N3.Top;
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
                    const { isBackNavigation: t, query: a, querySrc: o, searchFilters: r, shouldClearTimelineCache: n } = this.props;
                    t || (!n && e.query === a && e.querySrc === o && pe()(e.searchFilters, r)) || this._clearTimelineCache();
                }
                render() {
                    const { query: e, querySrc: t, searchFilters: a, searchFocused: r, urtEndpointOptions: n, vertical: d } = this.props,
                        { featureSwitches: i, viewerUserId: s } = this.context,
                        l = !(!s || !i.isTrue("voice_rooms_search_results_page_audiospace_ring_enabled")),
                        c = this._getSearchMode();
                    return o.createElement(Se.Z, { component: me.Z, fab: this._renderFloatingComposeButton(), shouldRenderFab: !r }, o.createElement(ye.b.Provider, { query: e }, o.createElement(_e.Z, { fetchOptions: this._getFetchOptions(), query: e, querySrc: t, searchFilters: a, searchMode: c, urtEndpointOptions: n, vertical: d, withUserPresence: l })));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return o.createElement(we.Z, { getLocationState: this._getFabState, history: e });
                }
                _getFetchOptions() {
                    const { dataLookupId: e, querySrc: t } = this.props;
                    return { query_source: t, data_lookup_id: e };
                }
                _clearTimelineCache() {
                    const { clearTimelineCache: e, createLocalApiErrorHandler: t, query: a, querySrc: o, searchFilters: r, urtEndpointOptions: n } = this.props,
                        d = this._getSearchMode(),
                        { featureSwitches: i } = this.context,
                        s = i.isTrue("search_timelines_graphql_enabled");
                    (0, h.HD)(this.context.history) || e({ module: (0, ge.Z)({ query: a, querySource: o, searchMode: d, searchFilters: r, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: s }), fetchOptions: this._getFetchOptions() }).catch(t(fe.d));
                }
            }
            ke.contextType = w.rC;
            const Me = Ce(ke),
                Be = "searchBoxOverflowButton",
                Te = l().a9ae1e78,
                xe = l().e75df5c9,
                Ze = l().i66136aa,
                Ie = l().d601fc20,
                Pe = l().b0041756,
                Le = l().add55c98,
                Fe = l().g2fd3206,
                Ne = l().ac4fb0f4,
                Re = l().bb967f9e,
                qe = l().aea62568,
                He = l().gfcfbf8c,
                Oe = l().a4645d92,
                Ge = [
                    { type: Z.N3.Top, label: Ze },
                    { type: Z.N3.Live, label: Ie },
                    { type: Z.N3.User, label: Fe },
                    { type: Z.N3.Video, label: Re },
                    { type: Z.N3.Image, label: Ne },
                    { type: Z.N3.Media, label: Le },
                    { type: Z.N3.List, label: Pe },
                ];
            class Ue extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._viewerUserId = this.context.viewerUserId),
                        (this.state = { shouldShowDeleteSearchConfirmation: !1, shouldClearTimelineCache: !1 }),
                        (this._getScribeData = (0, c.Z)((e, t, a, o, r) => ({ search_details: { ...(0, Z.hB)({ query: e, querySrc: t, searchFilters: a, modeValue: o, vertical: r }) } }))),
                        (this._renderRightControl = ({ isTwoColumn: e, searchFocused: t }) => (e || !t ? o.createElement(p.Z, { onClick: this._handleOverflowMenuClick, renderMenu: this._renderMenu, testID: Be }) : void 0)),
                        (this._renderMenu = (e) => {
                            const { history: t, isQueryAlreadySaved: a, location: n } = this.props,
                                d = !!this.context.viewerUserId;
                            return o.createElement(r.ZP, null, ({ windowWidth: r }) => {
                                const i = B.Z.isTwoColumnLayout(r);
                                return o.createElement(ue, { deleteSavedSearch: this._onDeleteSavedSearchMenuClick, history: t, isLoggedIn: d, isQueryAlreadySaved: a, isTwoColumn: i, location: n, onClose: e, saveSearch: this._onSaveSearch });
                            });
                        }),
                        (this._onSaveSearch = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: a, query: o, saveSearch: r, savedSearches: n } = this.props,
                                d = n.length;
                            o &&
                                r(o)
                                    .then(() => e({ text: He }))
                                    .catch(a(d < 25 ? E : k));
                            const i = x.Z.forSavedSearchResult(o, d);
                            t.scribe({ element: "saved_search", action: "add", data: { items: [i] } });
                        }),
                        (this._handleOnDeleteSavedSearchConfirm = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: a, deleteSavedSearch: o, query: r, savedSearches: n } = this.props,
                                d = n.findIndex((e) => e.query === r),
                                i = n[d];
                            if (i) {
                                o(i.id_str)
                                    .then(() => e({ text: Oe }))
                                    .catch(a(M));
                                const r = x.Z.forSavedSearchResult(i.query, d);
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
                            const { featureSwitches: a } = this.context,
                                { shouldShowDeleteSearchConfirmation: r } = this.state,
                                { query: d } = e,
                                { mode: i } = this.props,
                                s = a.isTrue("responsive_web_grok_search_summary_enabled"),
                                l = a.isTrue("responsive_web_grok_search_summary_sidebar");
                            return o.createElement(o.Fragment, null, !s || (l && t) ? null : o.createElement(n.Z, null, o.createElement(g, { hidden: "top" !== i, query: d })), o.createElement(Me, e), r ? o.createElement(f.Z, { onCancel: this._handleOnDeleteSavedSearchCancel, onConfirm: this._handleOnDeleteSavedSearchConfirm }) : null);
                        }),
                        (this._renderSidebarContent = () => {
                            const { history: e, location: t, mode: a, query: r } = this.props;
                            let i = !1;
                            this.context.userClaims.isAnyPremiumSubscriber() || (i = this.context.featureSwitches.isTrue("subscriptions_upsells_radar_sidebar_enabled"));
                            const s = this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_enabled") && this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_sidebar");
                            return o.createElement(b.Z, { withRadarUpsell: i, withSearchBox: !1, withTrends: !!r }, s ? o.createElement(n.Z, null, o.createElement(g, { heightFactor: 2, hidden: "top" !== a, query: r })) : null, o.createElement(d.Z, { text: qe }), o.createElement(m.Z, { history: e, key: t.key, location: t }));
                        }),
                        (this._renderTabs = () => {
                            const { analytics: e, mode: t, query: a, querySrc: r, searchFilters: n, searchType: d, vertical: i } = this.props,
                                { featureSwitches: s, viewerUserId: l } = this.context,
                                c = (0, u.Z)(Ge, (o) => {
                                    if (!(0, Z.PH)(o.type, s, !!l)) return;
                                    const c = (0, Z.PH)(t, s, !!l) ? Z._I[t] : void 0,
                                        u = Z._I[o.type],
                                        h = () => u === c;
                                    return {
                                        isActive: h,
                                        key: o.type,
                                        to: (0, Z.Rg)({ query: a, querySrc: r, modeValue: u, searchType: d, searchFilters: n, vertical: i }),
                                        label: o.label,
                                        onClick: () => {
                                            h() || e.scribe({ element: `search_filter_${o.type}`, action: "navigate", data: this._getScribeData(a, r, n) });
                                        },
                                    };
                                });
                            return o.createElement(y.Z, { links: c });
                        }),
                        (this._getMemoizedTimelineScribeNamespace = (0, c.Z)((e, t) => ({ section: `search_filter_${e}${t === Z.rg.Topics ? "_topics" : ""}` }))),
                        (this._handleSearchBoxSubmit = (e, t, a = !1) => {
                            const { analytics: o } = this.props;
                            o.scribe({ section: "trendsplus", action: "search" }),
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
                    const { history: e, isSideNavExpandedByUser: t, location: a, mode: n, query: d, querySrc: s, searchFilters: l, searchFocused: c, searchType: u, vertical: p } = this.props,
                        { shouldClearTimelineCache: b } = this.state,
                        m = !!d,
                        y = m ? xe({ query: d }) : Te,
                        w = { history: e, location: a, query: d, querySrc: s, searchFilters: l, searchFocused: c, vertical: p, shouldClearTimelineCache: b },
                        f = { initialValue: d, mode: n, onSubmit: this._handleSearchBoxSubmit, searchFilters: l },
                        g = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        A = this.context.featureSwitches.isTrue("rweb_sourcemap_migration_side_expand_by_default");
                    return (0, h.HD)(e) && !m
                        ? o.createElement(i.Z, null)
                        : m
                          ? o.createElement(
                                T.nO,
                                { data: this._getScribeData(d, s, l, n, p), namespace: this._getMemoizedTimelineScribeNamespace(n, p) },
                                o.createElement(
                                    _.Z,
                                    null,
                                    null,
                                    o.createElement(r.ZP, null, ({ windowWidth: a }) => {
                                        const r = B.Z.isTwoColumnLayout(a),
                                            n = B.Z.isTwoColumnLayoutRedesign(a, t ?? A),
                                            i = this._renderRightControl({ isTwoColumn: r, searchFocused: c });
                                        return o.createElement(S.Z, { backLocation: "/explore", composeOptions: Ee(d), documentTitle: y, history: e, primaryContent: this._renderPrimaryContent(w, g ? n : r), rightControl: i, searchBoxOptions: f, secondaryBar: this._renderTabs(), sidebarContent: this._renderSidebarContent(), title: d, withBottomLoginSignupBar: !0, withSearchBox: !0 });
                                    }),
                                ),
                            )
                          : o.createElement(I.Z, { to: "/explore" });
                }
            }
            Ue.contextType = w.rC;
            const $e = z(Ue);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search-9f4db315.c1d615ba.js.map
