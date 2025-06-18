"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Search-9f4db315"],
    {
        58687: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({ fetch: (t = {}, o = {}) => e.get("saved_searches/list", t, o), create: (t, o = {}) => e.post("saved_searches/create", t, {}, o), destroy: (t, o = {}) => e.post(`saved_searches/destroy/${t.id}`, t, {}, o) });
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var a = o(202784),
                r = o(614983),
                n = o.n(r),
                s = o(325686),
                d = o(370006),
                i = o(786998),
                l = o(929028),
                c = o(386802);
            function h(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends a.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: n, isFullWidth: s, isLarge: l, leftControl: c, middleControl: u, position: p, rightControl: m, secondaryBar: b, style: S, subtitle: w, title: _, titleDomId: y, titleIconCell: f, titleIconCellSize: g, withBackground: k, withWideContainer: D } = this.props,
                        { isModal: E } = this.context,
                        C = n ? c : a.createElement(d.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        A = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!k, E, !!b);
                    return a.createElement(a.Fragment, null, a.createElement(i.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: l, leftControl: C, middleControl: u, position: h(p, E, r), rightControl: m, style: S, subtitle: w, title: _, titleDomId: y, titleIconCell: f, titleIconCellSize: g, withBackground: A, withWideContainer: D }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = l.Z.getBackgroundStyles();
                    return t ? a.createElement(s.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
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
                d = o(655352);
            const i = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: o, shouldRenderFab: s = !0, style: l, withoutBottomPadding: c, ...h }) => {
                    const u = t || n.Z,
                        p = s && !(0, d.ZP)();
                    return r.createElement(u, (0, a.Z)({}, h, { style: [p && !c && i.root, l] }), e, p ? o : null);
                };
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => p });
            var a = o(202784),
                r = o(325686),
                n = o(108362),
                s = o(386802),
                d = o(392237),
                i = o(652904),
                l = o(555079),
                c = o(625661),
                h = o(449067),
                u = o(715601);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: s, hideBackButton: d, history: i, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: b, rightControl: S, secondaryBar: w, subtitle: _, title: y } = this.props,
                                { isModal: f } = this.context;
                            return a.createElement(r.Z, { style: f ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, a.createElement(c.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: n, centerTitle: s, fixed: !f, hideBackButton: d, history: i, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: b, ref: e, rightControl: S, secondaryBar: w, style: [f && m.appBarModal, t], subtitle: _, title: y, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: s, documentTitle: d, isFullWidth: l, isLarge: c, renderHeader: p, title: b, withoutBottomBarMobile: S } = this.props,
                        { isModal: w } = this.context,
                        _ = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(i.Z, null, a.createElement(h.Z.Configure, { documentTitle: d, headerless: !0, title: b }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, w && m.rootModal] }, !w && _, a.createElement(n.Z, { isFullWidth: l, isLarge: c, style: [m.container, w && m.containerModal, s] }, w ? a.createElement(u.Z, { style: m.viewport }, _, o) : o), t ? a.createElement(r.Z, { style: [m.bottomBarModal, !w && !S && m.bottomBarMobile] }, a.createElement(n.Z, { isFullWidth: l, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = d.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: d.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        896008: (e, t, o) => {
            o.d(t, { J: () => T, Z: () => B });
            var a = o(202784),
                r = o(325686),
                n = o(449479),
                s = o(30183),
                d = o(392237),
                i = o(111677),
                l = o.n(i),
                c = o(744531),
                h = o(685399),
                u = o(443781),
                p = o(369241),
                m = o(725516);
            const b = "searchFiltersAdvancedSearch",
                S = Object.freeze({ People: "People", Location: "Location" }),
                w = l().j622effe,
                _ = l().g2fd3206,
                y = l().defb4aaa,
                f = l().af293dc2,
                g = l().jaaa8984,
                k = l().i5045e74,
                D = l().h2388754,
                E = "anyone",
                C = "youFollow",
                A = "anywhere",
                v = "nearYou",
                M = [
                    {
                        label: _,
                        name: S.People,
                        options: [
                            { label: y, value: E },
                            { label: f, value: C },
                        ],
                    },
                    {
                        label: g,
                        name: S.Location,
                        options: [
                            { label: k, value: A },
                            { label: D, value: v },
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
                                        const e = { pf: t === C ? "on" : void 0, lf: "on" === a.lf ? a.lf : void 0 };
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
                            o.replace({ pathname: r, query: (0, h.Z)({ ...a.query, ...e }) });
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
                        d = s.query,
                        i = o && d && d.pf ? C : E,
                        l = d && d.lf ? v : A;
                    this.state = { peopleFilter: i, locationFilter: l, shouldShowLoginSheet: !1 };
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ action: "impression" });
                }
                render() {
                    const { withBottomBorder: e } = this.props,
                        { shouldShowLoginSheet: t } = this.state;
                    return a.createElement(r.Z, null, a.createElement(r.Z, { style: x.content }, this._renderFilters()), a.createElement(r.Z, { style: e && x.bottomBorder, testID: b }, a.createElement(s.Z, { link: this._getAdvancedSearchLink(), onPress: this._handleFooterPress, text: w })), t ? a.createElement(p.ZP, { onClose: this._handleHideLoginSheet }) : null);
                }
            }
            (T.contextType = u.rC), (T.defaultProps = { withBottomBorder: !1 });
            const x = d.default.create((e) => ({ content: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space16 }, bottomBorder: { borderBottomColor: e.colors.gray50, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, paddingTop: { paddingTop: e.spaces.space4 } })),
                B = (0, m.Z)(T, { page: "search_filters" });
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => l });
            var a = o(807896),
                r = o(202784),
                n = o(107267),
                s = o(403556),
                d = o(791632);
            const i = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: o, ...i } = e;
                    return r.createElement(s.Z, (0, a.Z)({}, i, { isCompact: o || (0, d.HD)(t) }));
                },
                l = r.memo(i);
        },
        387524: (e, t, o) => {
            o.d(t, { Z: () => b });
            var a = o(807896),
                r = o(202784),
                n = o(325686),
                s = o(292627),
                d = o(537392),
                i = o(392237),
                l = o(365023),
                c = o(392027),
                h = o(774654),
                u = o(725516),
                p = o(443781);
            const m = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${h.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: o, onPress: b, scribeComponent: S, ...w } = e,
                        { loggedInUserId: _ } = r.useContext(p.rC),
                        y = (0, u.z)(),
                        f = r.useCallback(
                            (e) => {
                                y.scribe({ component: S, action: "click" }), b && b(e);
                            },
                            [y, b, S],
                        ),
                        g = h.ZM.useCollapsibleNavBars(),
                        k = [...h.Ah({ elementPosition: "bottom" }), g && m.fabStaysAboveSafeArea];
                    return _
                        ? r.createElement(
                              s.Z.FloatingAction,
                              null,
                              r.createElement(d.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > i.default.theme.breakpoints.large,
                                      d = e > i.default.theme.breakpoints.medium,
                                      h = e < i.default.theme.breakpoints.micro,
                                      u = [m.root, d && m.rootMedium, s && m.rootLarge],
                                      p = [m.fab, s && m.fabLarge, h && m.fabMicro, k];
                                  return r.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      r.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, d) => r.createElement(n.Z, (0, a.Z)({ ref: e() }, d({ style: p })), r.createElement(c.Z, (0, a.Z)({}, w, { "aria-label": t, label: s ? o : void 0, onPress: f, style: h && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, o) => {
            o.d(t, { Z: () => i });
            o(136728);
            var a = o(202784),
                r = o(387524),
                n = o(635510);
            const s = "/compose/post";
            class d extends a.PureComponent {
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
                    const { "aria-label": e, icon: t, label: o, scribeComponent: d } = this.props;
                    return a.createElement(r.Z, { "aria-label": e, href: s, icon: t, label: o, onPress: this._handlePress, scribeComponent: d, testID: n.Z.tweet });
                }
            }
            const i = d;
        },
        32677: (e, t, o) => {
            o.d(t, { Z: () => h });
            var a = o(202784),
                r = o(111677),
                n = o.n(r),
                s = o(186444),
                d = o(355883);
            const i = n().j0179e90,
                l = n().ee69d769({ verb: "" }),
                c = a.createElement(s.default, null),
                h = ({ getLocationState: e, history: t }) => a.createElement(d.Z, { "aria-label": i, getLocationState: e, history: t, icon: c, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        233391: (e, t, o) => {
            o.d(t, { BH: () => G, Qj: () => $, Wc: () => O, sI: () => U });
            var a = o(202784),
                r = o(731708),
                n = o(392237),
                s = o(111677),
                d = o.n(s),
                i = o(911373),
                l = o(761744),
                c = o(98440),
                h = o(720600),
                u = o(125966),
                p = o(544367),
                m = o(452693),
                b = o(971657),
                S = o(956272),
                w = o(520913);
            const _ = d().a17a75da,
                y = d().e7342ed4,
                f = d().b6a43e78,
                g = d().b469e406,
                k = d().b8505290,
                D = ({ userFullName: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "e1a49407" }, a.createElement(r.ZP, null, e)) : void 0),
                E = d().ae8b0564,
                C = ({ userFullName: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "be54ed41" }, a.createElement(r.ZP, null, e)) : void 0),
                A = d().f2adab0e,
                v = ({ userFullName: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "jb19eb17" }, a.createElement(r.ZP, null, e)) : void 0),
                M = ({ userFullName: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "bbfee611" }, a.createElement(r.ZP, null, e)) : void 0),
                T = d().b7821a74,
                x = ({ userFullName: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "af104f2b" }, a.createElement(r.ZP, null, e)) : void 0),
                B = ({ customText: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "ccc1f303" }, a.createElement(r.ZP, null, e)) : void 0),
                Z = ({ userFullName: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "ce02fabf" }, a.createElement(r.ZP, null, e)) : void 0),
                I = d().e6d43d06,
                L = ({ customText: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "a85608a7" }, a.createElement(r.ZP, null, e)) : void 0),
                P = d().ic848090,
                N = d().f9ebe066,
                F = ({ userFullName: e }) => (e ? a.createElement(d().I18NFormatMessage, { $i18n: "c76865b7" }, a.createElement(r.ZP, null, e)) : void 0),
                R = d().je3d93e2,
                q = d().ea88ce2e,
                H = d().je3d93e2,
                G = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                O = (e, t) => {
                    switch (t) {
                        case G.follow:
                            return { icon: i.default, text: M, subtext: T, iconStyle: V.iconOther };
                        case G.like:
                            return { icon: l.default, text: A, subtext: v, iconStyle: V.iconLike };
                        case G.reply:
                            return { icon: c.default, text: k, subtext: D, iconStyle: V.iconOther };
                        case G.retweet:
                            return { icon: h.default, text: E, subtext: C, iconStyle: V.iconRetweet };
                        case G.dmshare:
                            return { icon: u.default, text: x, iconStyle: V.iconOther };
                        case G.subscribe:
                            return { icon: p.default, text: B, subtext: Z, iconStyle: V.iconOther };
                        case G.topic:
                            return { icon: m.default, text: I, subtext: L, iconStyle: V.iconTopics };
                        case G.community:
                            return { icon: b.default, text: P, subtext: N, iconStyle: V.iconOther };
                        case G.search:
                            return { icon: S.default, text: F, subtext: R, iconStyle: V.iconOther };
                        default:
                            return { icon: w.default, text: q, subtext: H, iconStyle: V.iconTwitter };
                    }
                },
                U = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? _ : f),
                $ = (e) => (e.hasValue("responsive_web_use_app_prompt_copy_variant", "prompt_better") ? y : g),
                V = n.default.create((e) => ({ iconOther: { color: e.colors.blue500 }, iconLike: { color: e.colors.magenta500 }, iconTwitter: { color: e.colors.brandColor }, iconRetweet: { color: e.colors.green500 }, iconTopics: { color: e.colors.blue500 } }));
        },
        369241: (e, t, o) => {
            o.d(t, { BH: () => v.BH, ZP: () => P });
            o(875640);
            var a = o(202784),
                r = o(529356),
                n = o(111677),
                s = o.n(n),
                d = o(323265),
                i = o(170542),
                l = o(951790),
                c = o(804027),
                h = o(443781),
                u = o(325686),
                p = o(292627),
                m = o(731708),
                b = o(154003),
                S = o(392237);
            class w extends a.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: o, primaryText: r, secondaryButtonLabel: n, secondaryText: s } = this.props;
                    return a.createElement(p.Z.HalfSheet, null, a.createElement(u.Z, { style: _.sheetContent }, a.createElement(u.Z, { style: _.content }, a.createElement(u.Z, { style: _.header }, a.createElement(m.ZP, { color: "white", size: "headline1", weight: "bold" }, r)), a.createElement(m.ZP, { color: "white", style: _.secondaryText }, s)), a.createElement(u.Z, { style: _.footer }, a.createElement(b.ZP, { onPress: t, size: "medium", style: _.button, type: "onMediaOutlined" }, a.createElement(m.ZP, { numberOfLines: 1 }, n)), a.createElement(b.ZP, { onPress: e, size: "medium", style: _.button, type: "onMediaWhiteFilled" }, a.createElement(m.ZP, { numberOfLines: 1 }, o)))));
                }
            }
            const _ = S.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: S.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                y = w;
            var f = o(668214),
                g = o(558369),
                k = o(118823),
                D = o(390387),
                E = o(38562),
                C = o(936572);
            const A = (0, f.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: g.ur, loginPromptShown: E.fj, loginPromptLastShown: C.ne, startLocation: k.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: E.Af, setLoginReturnPath: D.Jm, updateSettings: E.VP }))
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
                        (this._isStandaloneApp = i.Z.isStandaloneApp()),
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
                        (this._hasMobileAppStore = () => d.ZP.isIOS() || d.ZP.isAndroid());
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
                    const { allowBackNavigation: e, customText: t, displayMode: o, hideSignUp: n, isFullHeightOnMobile: s, loginLabel: d, useBottomBanner: i, userFullName: l } = this.props;
                    if (!this._shouldRenderPrompt()) return null;
                    const { icon: c, iconStyle: h, subtext: u, text: p } = this._getFullSheetDisplayElements(o),
                        m = "function" == typeof p ? p({ customText: t, userFullName: l }) : p,
                        b = "function" == typeof u ? u({ customText: t, userFullName: l }) : u,
                        S = n ? "" : this.props.signupLabel,
                        w = { pathname: "/i/flow/login", state: this._getLoginState() },
                        _ = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return i ? a.createElement(y, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: x, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: B, secondaryText: this._getHalfSheetSecondaryText() }) : a.createElement(r.Z, { actionLabel: d, actionLink: w, allowBackNavigation: e, graphic: c, graphicStyle: h, headline: m || "", isFullHeightOnMobile: s, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: S, secondaryActionLink: _, subtext: b || "", tertiaryActionLabel: this._showTertiaryCTA ? T : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: o, useBottomBanner: a } = this.props,
                        r = a ? "half_sheet" : o;
                    t.scribe({ component: "login_signup_sheet", element: r, action: e });
                }
            }
            (L.defaultProps = { displayMode: v.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: I, signupLabel: Z, onlyShowOnce: !1 }), (L.displayMode = v.BH), (L.contextType = h.rC);
            const P = A(L);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var a = o(202784),
                r = o(500002),
                n = o(668214),
                s = o(997174),
                d = o(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: s.NH }))
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
                            locationKey: d,
                        } = e;
                    let i = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (i = !0));
                    const l = r || d;
                    ((l && r !== d) || (!l && o !== n) || a !== s || i) && this._performPageUpdates(this.props);
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
            const c = (0, r.ZP)(i(l));
        },
        886191: (e, t, o) => {
            o.d(t, { Z: () => g });
            var a = o(202784),
                r = o(731708),
                n = o(457311),
                s = o(111677),
                d = o.n(s),
                i = o(912021),
                l = o(864702),
                c = o(479506),
                h = o(903019),
                u = o(519896),
                p = o(774006),
                m = o(443781),
                b = o(810641),
                S = o(335632);
            const w = d().c09de2d4,
                _ = d().ae111c99,
                y = a.createElement(d().I18NFormatMessage, { $i18n: "e7e44bab" }, a.createElement(r.ZP, { link: "/settings/search" }, d().f191a2ba));
            class f extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === c.Z.ItemType.USER || e === c.Z.ItemType.TOPIC || e === c.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: o, searchMode: a, urtEndpointOptions: r, vertical: n } = this.props,
                                { featureSwitches: s } = this.context,
                                d = s.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, a, o, n, r, d);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || a.createElement(n.Z, { header: _({ query: t }), message: y });
                        }),
                        (this._getMemoizedModule = (0, i.Z)((e, t, o, a, r, n, s) => (0, p.Z)({ query: e, searchMode: o, querySource: t, searchFilters: a, vertical: r, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: s }))),
                        (this._getMemoizedEntryConfiguration = (0, i.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, S.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== h.N3.Live;
                    return a.createElement(b.Z, { apiErrorHandlerMap: l.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: u.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: w });
                }
            }
            f.contextType = m.rC;
            const g = f;
        },
        243754: (e, t, o) => {
            o.d(t, { Z: () => h });
            var a = o(202784),
                r = o(190286),
                n = o(111677),
                s = o.n(n),
                d = o(436001);
            const i = s().hffea05c,
                l = s().j037e374,
                c = s().d96cf7ce,
                h = ({ onCancel: e, onConfirm: t }) => a.createElement(r.Z, { confirmButtonLabel: c, confirmButtonType: "destructiveFilled", headline: i, onCancel: e, onConfirm: t, testID: d.Z.deleteSavedSearchDialog, text: l });
        },
        436001: (e, t, o) => {
            o.d(t, { Z: () => a });
            const a = { deleteRecentSearchesDialog: "deleteRecentSearchesDialog", deleteSavedSearchDialog: "deleteSavedSearchDialog", typeaheadEmptySearch: "typeaheadEmptySearch", typeaheadRecentSearchesHeader: "typeaheadRecentSearchesHeader", typeaheadRecentSearchesItem: "typeaheadRecentSearchesItem", typeaheadSavedSearchesContainer: "typeaheadSavedSearchesContainer", typeaheadSavedSearchesHeader: "typeaheadSavedSearchesHeader", typeaheadSavedSearchesItem: "typeaheadSavedSearchesItem" };
        },
        864702: (e, t, o) => {
            o.d(t, { d: () => i });
            var a = o(111677),
                r = o.n(a),
                n = o(615656),
                s = o(51525);
            const d = r().i1801686,
                i = { [n.ZP.GenericForbidden]: { toast: (0, s.j)() }, [n.ZP.InvalidRequestUrl]: { toast: { text: d, withClearButton: !0 } }, showToast: !0 };
        },
        337455: (e, t, o) => {
            o.d(t, { Z: () => i });
            var a = o(202784),
                r = o(411916),
                n = o.n(r),
                s = o(373463),
                d = o.n(s);
            function i(e) {
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
                return d()(t, e);
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
            o.d(t, { GL: () => S, as: () => b, k9: () => w, l9: () => _ });
            var a = o(58687),
                r = o(163889),
                n = o(499627),
                s = o(917799),
                d = o(312771),
                i = o(390387);
            const l = "savedSearches",
                c = { fetchStatus: d.ZP.NONE, savedSearches: [] },
                h = Object.freeze({ REQUEST: "rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST", SUCCESS: "rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS", FAILURE: "rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/savedSearches/SAVE_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/SAVE_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/SAVE_SEARCH_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE" });
            function m(e = c, t) {
                if (!t) return e;
                switch (t.type) {
                    case h.SUCCESS: {
                        const o = t.payload,
                            a = Array.isArray(o);
                        return a || (0, r.ZP)("Saved search results are not type array", { extra: { savedSearchResultsType: typeof o } }), { ...e, fetchStatus: d.ZP.LOADED, savedSearches: a && o ? o : [] };
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
            n.Z.register({ [l]: m });
            const b = (e) => e[l].savedSearches,
                S =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, s._O)(t, { request: r.withEndpoint(a.Z).create, params: { query: e } })({ actionTypes: u, context: "SAVE_SEARCH" }),
                w =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, s._O)(t, { request: r.withEndpoint(a.Z).destroy, params: { id: e } })({ actionTypes: p, context: "DELETE_SAVED_SEARCH" }),
                _ =
                    () =>
                    (e, t, { api: o }) => {
                        const r = t();
                        if (!(0, i.Qb)(r)) return Promise.resolve();
                        const n = ((e) => e[l].fetchStatus)(r) === d.ZP.LOADED;
                        return n ? Promise.resolve() : e((e, t, { api: o }) => (0, s._O)(e, { request: o.withEndpoint(a.Z).fetch, params: {} })({ actionTypes: h, context: "FETCH_SAVED_SEARCHES" }));
                    };
        },
        774006: (e, t, o) => {
            o.d(t, { Z: () => b, u: () => m });
            var a = o(644829),
                r = o(750085),
                n = o(903019),
                s = o(883432),
                d = o(555875),
                i = o(218951);
            const l = "search-",
                c = " near:me",
                h = " filter:follows",
                u = { [n.N3.Image]: { result_filter: n.N3.Image }, [n.N3.List]: { result_filter: n.N3.List }, [n.N3.Live]: { tweet_search_mode: n.N3.Live }, [n.N3.Media]: { result_filter: n.N3.Media }, [n.N3.Top]: {}, [n.N3.User]: { result_filter: n.N3.User }, [n.N3.Video]: { result_filter: n.N3.Video } },
                p = (e) => (((e) => e === s.Z.SpellingCorrectionRevertClick || e === s.Z.SpellingExpansionRevertClick)(e) ? "-revert" : ""),
                m = () => (e, t) => {
                    e(
                        (0, d.CY)(t())
                            .filter((e) => 0 === e.indexOf(l))
                            .map((e) => (0, d.$q)(e)),
                    );
                },
                b = ({ query: e, searchMode: t = n.N3.Top, querySource: o, searchFilters: s, vertical: d, urtEndpointOptions: m, searchTimelinesGraphQLEnabled: b }) => {
                    const S = p(o),
                        w = s && s.peopleFilter ? "searcher_follows" : void 0,
                        _ = w ? "-pf" : "",
                        y = s && s.locationFilter && !e.includes(c) ? `${e}${c}` : e,
                        f = { timelineId: `${l}${y}-${t}${S}${_}`, network: { getEndpoint: (e) => e.withEndpoint(a.Z).fetchSearch, getEndpointParams: (e) => ({ ...m?.requestParams, q: y, social_filter: w, vertical: d, ...u[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === n.N3.Live ? 5e3 : void 0, timelineType: "search" };
                    if (b) {
                        const e = w && !y.includes(h) ? `${y}${h}` : y,
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
                            d = `gql-${l}${y}-${t}${S}${_}`;
                        return (0, i.Z)({ ...f, timelineId: d, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: r.Z, network: { getEndpointParams: ({ count: t, cursor: a }) => ({ rawQuery: e, count: t, product: s, querySource: o, cursor: "string" == typeof a ? a : void 0 }), getEndpoint: (e) => e.withEndpoint(a.Z).fetchSearchGraphQL } });
                    }
                    return (0, i.Z)(f);
                };
        },
        80927: (e, t, o) => {
            o.r(t), o.d(t, { SearchFiltersScreen: () => h, default: () => u });
            var a = o(807896),
                r = o(202784),
                n = o(111677),
                s = o.n(n),
                d = o(980407),
                i = o(896008),
                l = o(725516);
            const c = s().aea62568;
            function h(e) {
                const { history: t, location: o } = e;
                return r.createElement(d.Z, { documentTitle: c, history: t, title: c }, r.createElement(i.J, (0, a.Z)({}, e, { key: o.key, withBottomBorder: !0 })));
            }
            const u = (0, l.Z)(h, { page: "search_filters" });
        },
        184297: (e, t, o) => {
            o.r(t), o.d(t, { SearchScreen: () => Ue, default: () => $e });
            var a = o(202784),
                r = o(537392),
                n = o(691533),
                s = o(844685),
                d = o(457311),
                i = o(111677),
                l = o.n(i),
                c = o(912021),
                h = o(459679),
                u = o(791632),
                p = o(805104),
                m = o(718e3);
            o(272175);
            l().b11805af, l().d610e8c3;
            var b = o(896008),
                S = o(252021),
                w = o(507651),
                _ = o(443781),
                y = o(652904),
                f = o(243754);
            const g = (0, o(523561).Z)({
                loader: () =>
                    Promise.all([
                        o.e("icons.21"),
                        o.e("icons.16"),
                        o.e("icons.10"),
                        o.e("icons.1"),
                        o.e("icons.19"),
                        o.e("icons.0"),
                        o.e("icons.23"),
                        o.e("icons.8"),
                        o.e("icons.2"),
                        o.e("icons.3"),
                        o.e("icons.15"),
                        o.e("icons.4"),
                        o.e("modules.common-e907d115"),
                        o.e("modules.common-e019dbda"),
                        o.e("icons.9"),
                        o.e("icons.7"),
                        o.e("icons.28"),
                        o.e("icons.26"),
                        o.e("icons.24"),
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
                        o.e("icons.18"),
                        o.e("icons.13"),
                        o.e("icons.29"),
                        o.e("icons.27"),
                        o.e("icons.25"),
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
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-35700d06"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-66c34182"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-6af19649"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-f16ea073"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDraw-8e0713f9"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        o.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"),
                        o.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        o.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        o.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                        o.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
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
                        o.e("shared~loader.Dock~bundle.GrokDrawer~bundle.DockPeek~bundle.Grok~bundle.LiveEvent~loader.JetfuelFrame~loader."),
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
                        o.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown~loader.TexBlock"),
                        o.e("shared~bundle.TwitterArticles~bundle.Grok~loader.Markdown"),
                        o.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a"),
                        o.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-63cb1cc4"),
                        o.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-bf286bb5"),
                        o.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6ac0f1a5"),
                        o.e("shared~bundle.Grok~loader.Markdown-6107ac1a"),
                        o.e("shared~bundle.Grok~loader.Markdown-0ae4e026"),
                        o.e("shared~bundle.Grok~loader.Markdown-b16f5c14"),
                        o.e("shared~bundle.Grok~loader.Markdown-63cb1cc4"),
                        o.e("shared~bundle.Grok~loader.Markdown-d49ace54"),
                        o.e("shared~bundle.Grok~loader.Markdown-3277c3ad"),
                        o.e("shared~bundle.Grok~loader.Markdown-57c2c4a2"),
                        o.e("shared~bundle.Grok~loader.Markdown-6bf2d53b"),
                        o.e("shared~bundle.Grok~loader.Markdown-78667c23"),
                        o.e("shared~bundle.Grok~loader.Markdown-a244d277"),
                        o.e("shared~bundle.Grok~loader.Markdown-0d8ef87b"),
                        o.e("shared~bundle.Grok~loader.Markdown-26844252"),
                        o.e("shared~bundle.Grok~loader.Markdown-f29574de"),
                        o.e("shared~bundle.Grok~loader.Markdown-4ff64aa1"),
                        o.e("shared~bundle.GrokDrawer~bundle.Grok"),
                        o.e("bundle.Grok-6107ac1a"),
                        o.e("bundle.Grok-9f4db315"),
                        o.e("bundle.Grok-65f95f73"),
                        o.e("bundle.Grok-63cb1cc4"),
                        o.e("bundle.Grok-c69e90f3"),
                        o.e("bundle.Grok-16d5f187"),
                        o.e("bundle.Grok-38dc3b4a"),
                        o.e("bundle.Grok-1d830d6b"),
                        o.e("bundle.Grok-7bc92c09"),
                        o.e("bundle.Grok-f8a31592"),
                        o.e("bundle.Grok-7a6ce5c4"),
                        o.e("bundle.Grok-cebf58fc"),
                        o.e("bundle.Grok-29bebf45"),
                        o.e("bundle.Grok-29980aa8"),
                        o.e("bundle.Grok-6ac0f1a5"),
                        o.e("bundle.Grok-3c20ad5c"),
                    ]).then(o.bind(o, 528829)),
            });
            var k = o(601576);
            const D = l().f9d35b98,
                E = l().ha925ad4,
                C = l().h0a9931c,
                A = { customErrorHandler: () => (0, k.mf)({ text: E }), showToast: !0 },
                v = { customErrorHandler: () => (0, k.mf)({ text: D }), showToast: !0 },
                M = { customErrorHandler: () => (0, k.mf)({ text: C }), showToast: !0 };
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
            const G = (e, t) => {
                    const { location: o } = t;
                    return o.query && o.query.src && "string" == typeof o.query.src ? o.query.src : "";
                },
                O = (e, t) => {
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
                    .propsFromState(() => ({ searchFocused: $, query: O, querySrc: G, isQueryAlreadySaved: (0, L.P1)(O, q.as, (e, t) => t.map((e) => e.query).indexOf(e) > -1), searchType: U, searchFilters: V, mode: Z.Jm, savedSearches: q.as, vertical: (0, N.cI)("vertical"), isSideNavExpandedByUser: H.op }))
                    .propsFromActions(() => ({ addToast: k.fz, createLocalApiErrorHandler: (0, P.zr)("SEARCH_SCREEN"), deleteSavedSearch: q.k9, fetchSavedSearchesIfNeeded: q.l9, saveSearch: q.GL, scribeAction: R.n }))
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
                de = l().aea62568,
                ie = l().j622effe,
                le = l().h4912b5e,
                ce = l().b9bc69ca;
            const he = function (e) {
                const { deleteSavedSearch: t, isLoggedIn: o, isQueryAlreadySaved: r, isTwoColumn: n, location: s, onClose: d, saveSearch: i } = e,
                    l = (0, ee.hC)("responsive_web_saved_search_enabled"),
                    c = [];
                return (
                    n || c.push({ Icon: Q.default, testID: te, text: de, link: { pathname: "/i/search_filters", query: s.query } }),
                    c.push({ Icon: j.default, testID: oe, text: ie, link: { pathname: "/search-advanced", query: { ...(0, Y.Z)(s.query, ["src"]) } } }),
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
                                          e(), i();
                                      },
                                  }))),
                    a.createElement(W.Z, { items: c, onCloseRequested: d })
                );
            };
            var ue = o(476984),
                pe = o.n(ue),
                me = o(842623),
                be = o(33104),
                Se = o(789831),
                we = o(959658),
                _e = o(32677),
                ye = o(886191),
                fe = o(864702),
                ge = o(774006),
                ke = o(735313);
            const De = (e, t) => "POP" === t.history.action,
                Ee = (e, t) => {
                    const { location: o } = t;
                    return o?.state?.urtEndpointOptions;
                },
                Ce = (0, F.Z)()
                    .propsFromState(() => ({ dataLookupId: Z.XN, isBackNavigation: De, searchMode: Z.Jm, urtEndpointOptions: Ee }))
                    .propsFromActions(() => ({ clearTimelineCache: ({ fetchOptions: e, module: t }) => (0, ke.Z)(t, e), createLocalApiErrorHandler: (0, P.zr)("SEARCH_RESULTS_SCREEN") })),
                Ae = (e) => (e && (0, me.Z)(e) ? { defaultText: ` ${e}`, positionCursorAtBeginning: !0 } : void 0);
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
                        (this._getMemoizedComposeLocationState = (0, c.Z)(Ae));
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
                        { featureSwitches: d, viewerUserId: i } = this.context,
                        l = !(!i || !d.isTrue("voice_rooms_search_results_page_audiospace_ring_enabled")),
                        c = this._getSearchMode();
                    return a.createElement(Se.Z, { component: be.Z, fab: this._renderFloatingComposeButton(), shouldRenderFab: !r }, a.createElement(we.b.Provider, { query: e }, a.createElement(ye.Z, { fetchOptions: this._getFetchOptions(), query: e, querySrc: t, searchFilters: o, searchMode: c, urtEndpointOptions: n, vertical: s, withUserPresence: l })));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return a.createElement(_e.Z, { getLocationState: this._getFabState, history: e });
                }
                _getFetchOptions() {
                    const { dataLookupId: e, querySrc: t } = this.props;
                    return { query_source: t, data_lookup_id: e };
                }
                _clearTimelineCache() {
                    const { clearTimelineCache: e, createLocalApiErrorHandler: t, query: o, querySrc: a, searchFilters: r, urtEndpointOptions: n } = this.props,
                        s = this._getSearchMode(),
                        { featureSwitches: d } = this.context,
                        i = d.isTrue("search_timelines_graphql_enabled");
                    (0, u.HD)(this.context.history) || e({ module: (0, ge.Z)({ query: o, querySource: a, searchMode: s, searchFilters: r, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: i }), fetchOptions: this._getFetchOptions() }).catch(t(fe.d));
                }
            }
            ve.contextType = _.rC;
            const Me = Ce(ve),
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
                Ge = l().a4645d92,
                Oe = [
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
                                const d = T.Z.isTwoColumnLayout(r);
                                return a.createElement(he, { deleteSavedSearch: this._onDeleteSavedSearchMenuClick, history: t, isLoggedIn: s, isQueryAlreadySaved: o, isTwoColumn: d, location: n, onClose: e, saveSearch: this._onSaveSearch });
                            });
                        }),
                        (this._onSaveSearch = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: o, query: a, saveSearch: r, savedSearches: n } = this.props,
                                s = n.length;
                            a &&
                                r(a)
                                    .then(() => e({ text: He }))
                                    .catch(o(s < 25 ? A : v));
                            const d = B.Z.forSavedSearchResult(a, s);
                            t.scribe({ element: "saved_search", action: "add", data: { items: [d] } });
                        }),
                        (this._handleOnDeleteSavedSearchConfirm = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: o, deleteSavedSearch: a, query: r, savedSearches: n } = this.props,
                                s = n.findIndex((e) => e.query === r),
                                d = n[s];
                            if (d) {
                                a(d.id_str)
                                    .then(() => e({ text: Ge }))
                                    .catch(o(M));
                                const r = B.Z.forSavedSearchResult(d.query, s);
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
                                { mode: d } = this.props,
                                i = o.isTrue("responsive_web_grok_search_summary_enabled"),
                                l = o.isTrue("responsive_web_grok_search_summary_sidebar");
                            return a.createElement(a.Fragment, null, !i || (l && t) ? null : a.createElement(n.Z, null, a.createElement(g, { hidden: "top" !== d, query: s })), a.createElement(Me, e), r ? a.createElement(f.Z, { onCancel: this._handleOnDeleteSavedSearchCancel, onConfirm: this._handleOnDeleteSavedSearchConfirm }) : null);
                        }),
                        (this._renderSidebarContent = () => {
                            const { history: e, location: t, mode: o, query: r } = this.props;
                            let d = !1;
                            this.context.userClaims.isAnyPremiumSubscriber() || (d = this.context.featureSwitches.isTrue("subscriptions_upsells_radar_sidebar_enabled"));
                            const i = this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_enabled") && this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_sidebar");
                            return a.createElement(m.Z, { withRadarUpsell: d, withSearchBox: !1, withTrends: !!r }, i ? a.createElement(n.Z, null, a.createElement(g, { heightFactor: 2, hidden: "top" !== o, query: r })) : null, a.createElement(s.Z, { text: qe }), a.createElement(b.Z, { history: e, key: t.key, location: t }));
                        }),
                        (this._renderTabs = () => {
                            const { analytics: e, mode: t, query: o, querySrc: r, searchFilters: n, searchType: s, vertical: d } = this.props,
                                { featureSwitches: i, viewerUserId: l } = this.context,
                                c = (0, h.Z)(Oe, (a) => {
                                    if (!(0, Z.PH)(a.type, i, !!l)) return;
                                    const c = (0, Z.PH)(t, i, !!l) ? Z._I[t] : void 0,
                                        h = Z._I[a.type],
                                        u = () => h === c;
                                    return {
                                        isActive: u,
                                        key: a.type,
                                        to: (0, Z.Rg)({ query: o, querySrc: r, modeValue: h, searchType: s, searchFilters: n, vertical: d }),
                                        label: a.label,
                                        onClick: () => {
                                            u() || e.scribe({ element: `search_filter_${a.type}`, action: "navigate", data: this._getScribeData(o, r, n) });
                                        },
                                    };
                                });
                            return a.createElement(w.Z, { links: c });
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
                    const { history: e, isSideNavExpandedByUser: t, location: o, mode: n, query: s, querySrc: i, searchFilters: l, searchFocused: c, searchType: h, vertical: p } = this.props,
                        { shouldClearTimelineCache: m } = this.state,
                        b = !!s,
                        w = b ? Be({ query: s }) : xe,
                        _ = { history: e, location: o, query: s, querySrc: i, searchFilters: l, searchFocused: c, vertical: p, shouldClearTimelineCache: m },
                        f = { initialValue: s, mode: n, onSubmit: this._handleSearchBoxSubmit, searchFilters: l, showBrandedHashFlag: !0 },
                        g = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        k = this.context.featureSwitches.isTrue("rweb_sourcemap_migration_side_expand_by_default");
                    return (0, u.HD)(e) && !b
                        ? a.createElement(d.Z, null)
                        : b
                          ? a.createElement(
                                x.nO,
                                { data: this._getScribeData(s, i, l, n, p), namespace: this._getMemoizedTimelineScribeNamespace(n, p) },
                                a.createElement(
                                    y.Z,
                                    null,
                                    null,
                                    a.createElement(r.ZP, null, ({ windowWidth: o }) => {
                                        const r = T.Z.isTwoColumnLayout(o),
                                            n = T.Z.isTwoColumnLayoutRedesign(o, t ?? k),
                                            d = this._renderRightControl({ isTwoColumn: r, searchFocused: c });
                                        return a.createElement(S.Z, { backLocation: "/explore", composeOptions: Ae(s), documentTitle: w, history: e, primaryContent: this._renderPrimaryContent(_, g ? n : r), rightControl: d, searchBoxOptions: f, secondaryBar: this._renderTabs(), sidebarContent: this._renderSidebarContent(), title: s, withBottomLoginSignupBar: !0, withSearchBox: !0 });
                                    }),
                                ),
                            )
                          : a.createElement(I.Z, { to: "/explore" });
                }
            }
            Ue.contextType = _.rC;
            const $e = z(Ue);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search-9f4db315.bbb45b1a.js.map
