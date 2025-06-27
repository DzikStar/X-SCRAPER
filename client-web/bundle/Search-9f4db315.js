"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Search-9f4db315"],
    {
        58687: (e, t, a) => {
            a.d(t, { Z: () => o });
            const o = ({ apiClient: e, featureSwitches: t }) => ({ fetch: (t = {}, a = {}) => e.get("saved_searches/list", t, a), create: (t, a = {}) => e.post("saved_searches/create", t, {}, a), destroy: (t, a = {}) => e.post(`saved_searches/destroy/${t.id}`, t, {}, a) });
        },
        625661: (e, t, a) => {
            a.d(t, { ZP: () => u });
            var o = a(202784),
                r = a(614983),
                n = a.n(r),
                s = a(325686),
                d = a(370006),
                i = a(786998),
                l = a(929028),
                c = a(386802);
            function h(e, t, a) {
                return e || (!t && a ? "fixed" : void 0);
            }
            class u extends o.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: a, fixed: r, hideBackButton: n, isFullWidth: s, isLarge: l, leftControl: c, middleControl: u, position: p, rightControl: m, secondaryBar: b, style: S, subtitle: w, title: _, titleDomId: y, titleIconCell: f, titleIconCellSize: g, withBackground: D, withWideContainer: k } = this.props,
                        { isModal: E } = this.context,
                        A = n ? c : o.createElement(d.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, t, a) {
                            return e && !(t && a);
                        })(!!D, E, !!b);
                    return o.createElement(o.Fragment, null, o.createElement(i.Z, { centerTitle: t, centeredLogo: a, isFullWidth: s, isLarge: l, leftControl: A, middleControl: u, position: h(p, E, r), rightControl: m, style: S, subtitle: w, title: _, titleDomId: y, titleIconCell: f, titleIconCellSize: g, withBackground: C, withWideContainer: k }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        a = l.Z.getBackgroundStyles();
                    return t ? o.createElement(s.Z, { style: !!e && a }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = c.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        789831: (e, t, a) => {
            a.d(t, { Z: () => l });
            var o = a(807896),
                r = a(202784),
                n = a(325686),
                s = a(392237),
                d = a(655352);
            const i = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: a, shouldRenderFab: s = !0, style: l, withoutBottomPadding: c, ...h }) => {
                    const u = t || n.Z,
                        p = s && !(0, d.ZP)();
                    return r.createElement(u, (0, o.Z)({}, h, { style: [p && !c && i.root, l] }), e, p ? a : null);
                };
        },
        980407: (e, t, a) => {
            a.d(t, { Z: () => b, w: () => p });
            var o = a(202784),
                r = a(325686),
                n = a(108362),
                s = a(386802),
                d = a(392237),
                i = a(652904),
                l = a(555079),
                c = a(625661),
                h = a(449067),
                u = a(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: a, backLocation: n, centerTitle: s, hideBackButton: d, history: i, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: b, rightControl: S, secondaryBar: w, subtitle: _, title: y } = this.props,
                                { isModal: f } = this.context;
                            return o.createElement(r.Z, { style: f ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(c.ZP, { backButtonType: a || (f ? "close" : "back"), backLocation: n, centerTitle: s, fixed: !f, hideBackButton: d, history: i, isFullWidth: h, isLarge: u, middleControl: p, onBackClick: b, ref: e, rightControl: S, secondaryBar: w, style: [f && m.appBarModal, t], subtitle: _, title: y, titleDomId: l.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: a } = this.context;
                            t && (a ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: a, containerStyle: s, documentTitle: d, isFullWidth: l, isLarge: c, renderHeader: p, title: b, withoutBottomBarMobile: S } = this.props,
                        { isModal: w } = this.context,
                        _ = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(i.Z, null, o.createElement(h.Z.Configure, { documentTitle: d, headerless: !0, title: b }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, w && m.rootModal] }, !w && _, o.createElement(n.Z, { isFullWidth: l, isLarge: c, style: [m.container, w && m.containerModal, s] }, w ? o.createElement(u.Z, { style: m.viewport }, _, a) : a), t ? o.createElement(r.Z, { style: [m.bottomBarModal, !w && !S && m.bottomBarMobile] }, o.createElement(n.Z, { isFullWidth: l, isLarge: c }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = s.Z);
            const m = d.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: d.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = p;
        },
        896008: (e, t, a) => {
            a.d(t, { J: () => T, Z: () => B });
            var o = a(202784),
                r = a(325686),
                n = a(449479),
                s = a(30183),
                d = a(392237),
                i = a(111677),
                l = a.n(i),
                c = a(744531),
                h = a(685399),
                u = a(443781),
                p = a(369241),
                m = a(725516);
            const b = "searchFiltersAdvancedSearch",
                S = Object.freeze({ People: "People", Location: "Location" }),
                w = l().j622effe,
                _ = l().g2fd3206,
                y = l().defb4aaa,
                f = l().af293dc2,
                g = l().jaaa8984,
                D = l().i5045e74,
                k = l().h2388754,
                E = "anyone",
                A = "youFollow",
                C = "anywhere",
                M = "nearYou",
                v = [
                    {
                        label: _,
                        name: S.People,
                        options: [
                            { label: y, value: E },
                            { label: f, value: A },
                        ],
                    },
                    {
                        label: g,
                        name: S.Location,
                        options: [
                            { label: D, value: C },
                            { label: k, value: M },
                        ],
                    },
                ];
            class T extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderFilters = () => v.map((e, t) => o.createElement(r.Z, { key: e.name, style: t > 0 && x.paddingTop }, o.createElement(n.Z, { label: e.label, name: e.name, onChange: this._handleFilterChange, options: e.options, value: this._getCurrentValue(e.name) })))),
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
                                        const e = { pf: t === A ? "on" : void 0, lf: "on" === o.lf ? o.lf : void 0 };
                                        this._executeSearch(e, "people");
                                    } else this.setState({ shouldShowLoginSheet: !0 });
                                    break;
                                case S.Location: {
                                    this.setState({ locationFilter: t });
                                    const e = { lf: t === M ? "on" : void 0, pf: "on" === o.pf ? o.pf : void 0 };
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
                            a.replace({ pathname: r, query: (0, h.Z)({ ...o.query, ...e }) });
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
                        i = a && d && d.pf ? A : E,
                        l = d && d.lf ? M : C;
                    this.state = { peopleFilter: i, locationFilter: l, shouldShowLoginSheet: !1 };
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ action: "impression" });
                }
                render() {
                    const { withBottomBorder: e } = this.props,
                        { shouldShowLoginSheet: t } = this.state;
                    return o.createElement(r.Z, null, o.createElement(r.Z, { style: x.content }, this._renderFilters()), o.createElement(r.Z, { style: e && x.bottomBorder, testID: b }, o.createElement(s.Z, { link: this._getAdvancedSearchLink(), onPress: this._handleFooterPress, text: w })), t ? o.createElement(p.ZP, { onClose: this._handleHideLoginSheet }) : null);
                }
            }
            (T.contextType = u.rC), (T.defaultProps = { withBottomBorder: !1 });
            const x = d.default.create((e) => ({ content: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space16 }, bottomBorder: { borderBottomColor: e.colors.gray50, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, paddingTop: { paddingTop: e.spaces.space4 } })),
                B = (0, m.Z)(T, { page: "search_filters" });
        },
        507651: (e, t, a) => {
            a.d(t, { Z: () => l });
            var o = a(807896),
                r = a(202784),
                n = a(107267),
                s = a(403556),
                d = a(791632);
            const i = (e) => {
                    const t = (0, n.useHistory)(),
                        { isCompact: a, ...i } = e;
                    return r.createElement(s.Z, (0, o.Z)({}, i, { isCompact: a || (0, d.HD)(t) }));
                },
                l = r.memo(i);
        },
        387524: (e, t, a) => {
            a.d(t, { Z: () => b });
            var o = a(807896),
                r = a(202784),
                n = a(325686),
                s = a(292627),
                d = a(537392),
                i = a(392237),
                l = a(365023),
                c = a(392027),
                h = a(774654),
                u = a(725516),
                p = a(443781);
            const m = i.default.create((e) => ({ root: { marginHorizontal: "auto", width: "100%" }, rootMedium: { position: "absolute", bottom: 0, start: 0, end: 0 }, rootLarge: { maxWidth: 1e3 }, fabStaysAboveSafeArea: { top: `calc(${i.default.iPhoneOffsetBottom} - ${h.ZM.getAppBarHeight()} - ${e.spaces.space20})` }, fab: { bottom: e.spaces.space20, alignSelf: "flex-end", end: e.spaces.space20 }, fabLarge: { end: e.spaces.space20 }, fabMicro: { bottom: e.spaces.space16, end: e.spaces.space16 }, buttonMicro: { height: e.spaces.space40, width: e.spaces.space40 } })),
                b = (e) => {
                    const { "aria-label": t, label: a, onPress: b, scribeComponent: S, ...w } = e,
                        { loggedInUserId: _ } = r.useContext(p.rC),
                        y = (0, u.z)(),
                        f = r.useCallback(
                            (e) => {
                                y.scribe({ component: S, action: "click" }), b && b(e);
                            },
                            [y, b, S],
                        ),
                        g = h.ZM.useCollapsibleNavBars(),
                        D = [...h.Ah({ elementPosition: "bottom" }), g && m.fabStaysAboveSafeArea];
                    return _
                        ? r.createElement(
                              s.Z.FloatingAction,
                              null,
                              r.createElement(d.ZP, null, ({ windowWidth: e }) => {
                                  const s = e > i.default.theme.breakpoints.large,
                                      d = e > i.default.theme.breakpoints.medium,
                                      h = e < i.default.theme.breakpoints.micro,
                                      u = [m.root, d && m.rootMedium, s && m.rootLarge],
                                      p = [m.fab, s && m.fabLarge, h && m.fabMicro, D];
                                  return r.createElement(
                                      n.Z,
                                      { "aria-label": t, pointerEvents: "box-none", role: "complementary", style: u },
                                      r.createElement(l.Z, { id: "FloatingActionButtonBase" }, (e, d) => r.createElement(n.Z, (0, o.Z)({ ref: e() }, d({ style: p })), r.createElement(c.Z, (0, o.Z)({}, w, { "aria-label": t, label: s ? a : void 0, onPress: f, style: h && m.buttonMicro })))),
                                  );
                              }),
                          )
                        : null;
                };
        },
        355883: (e, t, a) => {
            a.d(t, { Z: () => i });
            a(136728);
            var o = a(202784),
                r = a(387524),
                n = a(635510);
            const s = "/compose/post";
            class d extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            e.preventDefault();
                            const { getLocationState: t, history: a } = this.props,
                                o = { pathname: s, state: (t && t()) || {} };
                            a.push(o);
                        });
                }
                render() {
                    const { "aria-label": e, icon: t, label: a, scribeComponent: d } = this.props;
                    return o.createElement(r.Z, { "aria-label": e, href: s, icon: t, label: a, onPress: this._handlePress, scribeComponent: d, testID: n.Z.tweet });
                }
            }
            const i = d;
        },
        32677: (e, t, a) => {
            a.d(t, { Z: () => h });
            var o = a(202784),
                r = a(111677),
                n = a.n(r),
                s = a(186444),
                d = a(355883);
            const i = n().j0179e90,
                l = n().ee69d769({ verb: "" }),
                c = o.createElement(s.default, null),
                h = ({ getLocationState: e, history: t }) => o.createElement(d.Z, { "aria-label": i, getLocationState: e, history: t, icon: c, label: l, scribeComponent: "floating_compose_button" });
        },
        635510: (e, t, a) => {
            a.d(t, { Z: () => o });
            const o = { createList: "FloatingActionButtons_CreateList_Button", tweet: "FloatingActionButtons_Tweet_Button", message: "FloatingActionButtons_Message_Button" };
        },
        233391: (e, t, a) => {
            a.d(t, { BH: () => G, Qj: () => $, Wc: () => O, sI: () => U });
            var o = a(202784),
                r = a(731708),
                n = a(392237),
                s = a(111677),
                d = a.n(s),
                i = a(911373),
                l = a(761744),
                c = a(98440),
                h = a(720600),
                u = a(125966),
                p = a(544367),
                m = a(452693),
                b = a(971657),
                S = a(956272),
                w = a(520913);
            const _ = d().a17a75da,
                y = d().e7342ed4,
                f = d().b6a43e78,
                g = d().b469e406,
                D = d().b8505290,
                k = ({ userFullName: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "e1a49407" }, o.createElement(r.ZP, null, e)) : void 0),
                E = d().ae8b0564,
                A = ({ userFullName: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "be54ed41" }, o.createElement(r.ZP, null, e)) : void 0),
                C = d().f2adab0e,
                M = ({ userFullName: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "jb19eb17" }, o.createElement(r.ZP, null, e)) : void 0),
                v = ({ userFullName: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "bbfee611" }, o.createElement(r.ZP, null, e)) : void 0),
                T = d().b7821a74,
                x = ({ userFullName: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "af104f2b" }, o.createElement(r.ZP, null, e)) : void 0),
                B = ({ customText: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "ccc1f303" }, o.createElement(r.ZP, null, e)) : void 0),
                Z = ({ userFullName: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "ce02fabf" }, o.createElement(r.ZP, null, e)) : void 0),
                I = d().e6d43d06,
                P = ({ customText: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "a85608a7" }, o.createElement(r.ZP, null, e)) : void 0),
                L = d().ic848090,
                N = d().f9ebe066,
                F = ({ userFullName: e }) => (e ? o.createElement(d().I18NFormatMessage, { $i18n: "c76865b7" }, o.createElement(r.ZP, null, e)) : void 0),
                R = d().je3d93e2,
                q = d().ea88ce2e,
                H = d().je3d93e2,
                G = Object.freeze({ follow: "follow", like: "like", reply: "reply", retweet: "retweet", generic: "generic", dmshare: "dmshare", postvideo: "postvideo", subscribe: "subscribe", topic: "topic", community: "community", bookmark: "bookmark", search: "search" }),
                O = (e, t) => {
                    switch (t) {
                        case G.follow:
                            return { icon: i.default, text: v, subtext: T, iconStyle: V.iconOther };
                        case G.like:
                            return { icon: l.default, text: C, subtext: M, iconStyle: V.iconLike };
                        case G.reply:
                            return { icon: c.default, text: D, subtext: k, iconStyle: V.iconOther };
                        case G.retweet:
                            return { icon: h.default, text: E, subtext: A, iconStyle: V.iconRetweet };
                        case G.dmshare:
                            return { icon: u.default, text: x, iconStyle: V.iconOther };
                        case G.subscribe:
                            return { icon: p.default, text: B, subtext: Z, iconStyle: V.iconOther };
                        case G.topic:
                            return { icon: m.default, text: I, subtext: P, iconStyle: V.iconTopics };
                        case G.community:
                            return { icon: b.default, text: L, subtext: N, iconStyle: V.iconOther };
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
        369241: (e, t, a) => {
            a.d(t, { BH: () => M.BH, ZP: () => L });
            a(875640);
            var o = a(202784),
                r = a(529356),
                n = a(111677),
                s = a.n(n),
                d = a(323265),
                i = a(170542),
                l = a(951790),
                c = a(804027),
                h = a(443781),
                u = a(325686),
                p = a(292627),
                m = a(731708),
                b = a(154003),
                S = a(392237);
            class w extends o.PureComponent {
                render() {
                    const { onPrimaryButtonClick: e, onSecondaryButtonClick: t, primaryButtonLabel: a, primaryText: r, secondaryButtonLabel: n, secondaryText: s } = this.props;
                    return o.createElement(p.Z.HalfSheet, null, o.createElement(u.Z, { style: _.sheetContent }, o.createElement(u.Z, { style: _.content }, o.createElement(u.Z, { style: _.header }, o.createElement(m.ZP, { color: "white", size: "headline1", weight: "bold" }, r)), o.createElement(m.ZP, { color: "white", style: _.secondaryText }, s)), o.createElement(u.Z, { style: _.footer }, o.createElement(b.ZP, { onPress: t, size: "medium", style: _.button, type: "onMediaOutlined" }, o.createElement(m.ZP, { numberOfLines: 1 }, n)), o.createElement(b.ZP, { onPress: e, size: "medium", style: _.button, type: "onMediaWhiteFilled" }, o.createElement(m.ZP, { numberOfLines: 1 }, a)))));
                }
            }
            const _ = S.default.create((e) => ({ content: { padding: e.spaces.space20 }, footer: { flexDirection: "row", justifyContent: "space-between", paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space20, flexWrap: "wrap" }, button: { marginBottom: e.spaces.space4 }, header: { flexDirection: "row" }, secondaryText: { paddingTop: e.spaces.space12 }, sheetContent: { paddingBottom: S.default.iPhoneOffsetBottom, backgroundColor: e.colors.primary } })),
                y = w;
            var f = a(668214),
                g = a(558369),
                D = a(118823),
                k = a(390387),
                E = a(38562),
                A = a(936572);
            const C = (0, f.Z)()
                .propsFromState(() => ({ featureSwitchImpressions: g.ur, loginPromptShown: E.fj, loginPromptLastShown: A.ne, startLocation: D.Lg }))
                .propsFromActions(() => ({ setLoginPromptShown: E.Af, setLoginReturnPath: k.Jm, updateSettings: E.VP }))
                .withAnalytics();
            var M = a(233391);
            a(920099), a(856642), a(782826), a(903019);
            const v = Object.freeze({ BannerSwitchToApp: "banner_switch_to_app", InterstitialSwitchToApp: "interstitial_switch_to_app", NuxAppDownload: "NUX-app-download", SwitchToAppFooter: "switch-to-app-footer", UseApp: "use-app", UseAppExtended: "use-app-extended", SwitchToAppHigh7: "switch_to_app_high_7", SwitchToAppHigh1: "switch_to_app_high_1", SwitchToAppHigh2: "switch_to_app_high_2", SwitchToAppHigh3: "switch_to_app_high_3", SwitchToAppHigh5: "switch_to_app_high_5", SwitchToAppLow7: "switch_to_app_low_7", SwitchToAppLow1: "switch_to_app_low_1", SwitchToAppLow3: "switch_to_app_low_3", SwitchToAppLow5: "switch_to_app_low_5", SwitchToAppLow9: "switch_to_app_low_9" }),
                T = s().j607bf02,
                x = s().j49fd4e8,
                B = s().hd50e064,
                Z = s().a565833e,
                I = s().e919c3bc;
            class P extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getFullSheetDisplayElements = M.Wc.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetPrimaryText = M.sI.bind(null, this.context.featureSwitches)),
                        (this._getHalfSheetSecondaryText = M.Qj.bind(null, this.context.featureSwitches)),
                        (this._isStandaloneApp = i.Z.isStandaloneApp()),
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
                                case M.BH.follow:
                                    return { gatedAction: { action: c.qJ.Follow, user_id: a } };
                                case M.BH.like:
                                    return { gatedAction: { action: c.qJ.Favorite, tweet_id: t, user_id: a } };
                                case M.BH.reply:
                                    return { gatedAction: { action: c.qJ.Reply, tweet_id: t, user_id: a } };
                                case M.BH.retweet:
                                    return { gatedAction: { action: c.qJ.Retweet, tweet_id: t, user_id: a } };
                                default:
                                    return;
                            }
                        }),
                        (this._getLoginState = () => {
                            const { postLoginPath: e } = this.props;
                            if (e) return { input: { requested_variant: btoa(JSON.stringify({ redirect_after_login: e })) } };
                        }),
                        (this._hasMobileAppStore = () => d.ZP.isIOS() || d.ZP.isAndroid());
                    const { useBottomBanner: a } = this.props;
                    this._showTertiaryCTA = this._hasMobileAppStore() && !this._isStandaloneApp && this.context.featureSwitches.isTrue("responsive_web_login_signup_sheet_app_install_cta_enabled");
                    const o = this.context.featureSwitches.getNumberValue("rweb_update_fatigue_switch_to_app_day_timeout"),
                        r = this.context.featureSwitches.getStringValue("rweb_update_fatigue_switch_to_app_link");
                    this.state = { displayInterval: a ? 864e5 * o : 0, switchToAppLink: v[r] };
                }
                componentDidMount() {
                    this._shouldRenderPrompt() && this._scribeAction("impression");
                }
                componentWillUnmount() {
                    const { loginPromptShown: e, onlyShowOnce: t, setLoginPromptShown: a, updateSettings: o } = this.props;
                    !e && t && (a(!0), o({ loginPromptLastShown: Date.now() }));
                }
                render() {
                    const { allowBackNavigation: e, customText: t, displayMode: a, hideSignUp: n, isFullHeightOnMobile: s, loginLabel: d, useBottomBanner: i, userFullName: l } = this.props;
                    if (!this._shouldRenderPrompt()) return null;
                    const { icon: c, iconStyle: h, subtext: u, text: p } = this._getFullSheetDisplayElements(a),
                        m = "function" == typeof p ? p({ customText: t, userFullName: l }) : p,
                        b = "function" == typeof u ? u({ customText: t, userFullName: l }) : u,
                        S = n ? "" : this.props.signupLabel,
                        w = { pathname: "/i/flow/login", state: this._getLoginState() },
                        _ = { pathname: "/i/flow/signup", state: this._getSignupState() };
                    return i ? o.createElement(y, { onPrimaryButtonClick: this._handleAppInstallButtonClick, onSecondaryButtonClick: this._handleNotNow, primaryButtonLabel: x, primaryText: this._getHalfSheetPrimaryText(), secondaryButtonLabel: B, secondaryText: this._getHalfSheetSecondaryText() }) : o.createElement(r.Z, { actionLabel: d, actionLink: w, allowBackNavigation: e, graphic: c, graphicStyle: h, headline: m || "", isFullHeightOnMobile: s, onAction: this._handleSubmit, onClose: this._handleClose, onSecondaryAction: this._handleSignupButtonClick, onTertiaryAction: this._showTertiaryCTA ? this._handleAppInstallButtonClick : void 0, secondaryActionLabel: S, secondaryActionLink: _, subtext: b || "", tertiaryActionLabel: this._showTertiaryCTA ? T : void 0, useBrandedActionButtons: !0 });
                }
                _scribeAction(e) {
                    const { analytics: t, displayMode: a, useBottomBanner: o } = this.props,
                        r = o ? "half_sheet" : a;
                    t.scribe({ component: "login_signup_sheet", element: r, action: e });
                }
            }
            (P.defaultProps = { displayMode: M.BH.generic, hideSignUp: !1, isFullHeightOnMobile: !0, useBottomBanner: !1, loginLabel: I, signupLabel: Z, onlyShowOnce: !1 }), (P.displayMode = M.BH), (P.contextType = h.rC);
            const L = C(P);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var o = a(202784),
                r = a(500002),
                n = a(668214),
                s = a(997174),
                d = a(118823);
            const i = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: d.YF, updateTweetDetailNav: s.NH }))
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
                            location: { pathname: n, search: s },
                            locationKey: d,
                        } = e;
                    let i = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (i = !0));
                    const l = r || d;
                    ((l && r !== d) || (!l && a !== n) || o !== s || i) && this._performPageUpdates(this.props);
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
            const c = (0, r.ZP)(i(l));
        },
        886191: (e, t, a) => {
            a.d(t, { Z: () => g });
            var o = a(202784),
                r = a(731708),
                n = a(457311),
                s = a(111677),
                d = a.n(s),
                i = a(912021),
                l = a(864702),
                c = a(479506),
                h = a(903019),
                u = a(519896),
                p = a(774006),
                m = a(443781),
                b = a(810641),
                S = a(335632);
            const w = d().c09de2d4,
                _ = d().ae111c99,
                y = o.createElement(d().I18NFormatMessage, { $i18n: "e7e44bab" }, o.createElement(r.ZP, { link: "/settings/search" }, d().f191a2ba));
            class f extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._shouldStoreTypeaheadItem = (e) => e === c.Z.ItemType.USER || e === c.Z.ItemType.TOPIC || e === c.Z.ItemType.EVENT),
                        (this._getModule = () => {
                            const { query: e, querySrc: t, searchFilters: a, searchMode: o, urtEndpointOptions: r, vertical: n } = this.props,
                                { featureSwitches: s } = this.context,
                                d = s.isTrue("search_timelines_graphql_enabled");
                            return this._getMemoizedModule(e, t, o, a, n, r, d);
                        }),
                        (this._renderEmptyTimeline = () => {
                            const { emptyStateComponent: e, query: t } = this.props;
                            return e || o.createElement(n.Z, { header: _({ query: t }), message: y });
                        }),
                        (this._getMemoizedModule = (0, i.Z)((e, t, a, o, r, n, s) => (0, p.Z)({ query: e, searchMode: a, querySource: t, searchFilters: o, vertical: r, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: s }))),
                        (this._getMemoizedEntryConfiguration = (0, i.Z)((e) => (({ shouldStoreTypeaheadItem: e, withUserPresence: t }) => ({ ...(0, S.G)({ tweetDismissable: !0, displayBlocked: !0, shouldStoreTypeaheadItem: e, withUserPresence: t }) }))({ shouldStoreTypeaheadItem: this._shouldStoreTypeaheadItem, withUserPresence: e })));
                }
                render() {
                    const e = this.props.searchMode !== h.N3.Live;
                    return o.createElement(b.Z, { apiErrorHandlerMap: l.d, entryConfiguration: this._getMemoizedEntryConfiguration(this.props.withUserPresence), fetchOptions: this.props.fetchOptions, isSingleDirection: e, module: this._getModule(), prerollDisplayLocation: u.Nw.SEARCH_TWEETS, renderEmptyState: this._renderEmptyTimeline, title: w });
                }
            }
            f.contextType = m.rC;
            const g = f;
        },
        243754: (e, t, a) => {
            a.d(t, { Z: () => h });
            var o = a(202784),
                r = a(190286),
                n = a(111677),
                s = a.n(n),
                d = a(436001);
            const i = s().hffea05c,
                l = s().j037e374,
                c = s().d96cf7ce,
                h = ({ onCancel: e, onConfirm: t }) => o.createElement(r.Z, { confirmButtonLabel: c, confirmButtonType: "destructiveFilled", headline: i, onCancel: e, onConfirm: t, testID: d.Z.deleteSavedSearchDialog, text: l });
        },
        436001: (e, t, a) => {
            a.d(t, { Z: () => o });
            const o = { deleteRecentSearchesDialog: "deleteRecentSearchesDialog", deleteSavedSearchDialog: "deleteSavedSearchDialog", typeaheadEmptySearch: "typeaheadEmptySearch", typeaheadRecentSearchesHeader: "typeaheadRecentSearchesHeader", typeaheadRecentSearchesItem: "typeaheadRecentSearchesItem", typeaheadSavedSearchesContainer: "typeaheadSavedSearchesContainer", typeaheadSavedSearchesHeader: "typeaheadSavedSearchesHeader", typeaheadSavedSearchesItem: "typeaheadSavedSearchesItem" };
        },
        864702: (e, t, a) => {
            a.d(t, { d: () => i });
            var o = a(111677),
                r = a.n(o),
                n = a(615656),
                s = a(51525);
            const d = r().i1801686,
                i = { [n.ZP.GenericForbidden]: { toast: (0, s.j)() }, [n.ZP.InvalidRequestUrl]: { toast: { text: d, withClearButton: !0 } }, showToast: !0 };
        },
        951790: (e, t, a) => {
            a.d(t, { Z: () => s });
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
                s = r;
        },
        883432: (e, t, a) => {
            a.d(t, { Z: () => o });
            const o = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        554951: (e, t, a) => {
            a.d(t, { GL: () => S, as: () => b, k9: () => w, l9: () => _ });
            var o = a(58687),
                r = a(163889),
                n = a(499627),
                s = a(917799),
                d = a(312771),
                i = a(390387);
            const l = "savedSearches",
                c = { fetchStatus: d.ZP.NONE, savedSearches: [] },
                h = Object.freeze({ REQUEST: "rweb/savedSearches/FETCH_SAVED_SEARCHES_REQUEST", SUCCESS: "rweb/savedSearches/FETCH_SAVED_SEARCHES_SUCCESS", FAILURE: "rweb/savedSearches/FETCH_SAVED_SEARCHES_FAILURE" }),
                u = Object.freeze({ REQUEST: "rweb/savedSearches/SAVE_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/SAVE_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/SAVE_SEARCH_FAILURE" }),
                p = Object.freeze({ REQUEST: "rweb/savedSearches/DELETE_SAVED_SEARCH_REQUEST", SUCCESS: "rweb/savedSearches/DELETE_SAVED_SEARCH_SUCCESS", FAILURE: "rweb/savedSearches/DELETE_SAVED_SEARCH_FAILURE" });
            function m(e = c, t) {
                if (!t) return e;
                switch (t.type) {
                    case h.SUCCESS: {
                        const a = t.payload,
                            o = Array.isArray(a);
                        return o || (0, r.ZP)("Saved search results are not type array", { extra: { savedSearchResultsType: typeof a } }), { ...e, fetchStatus: d.ZP.LOADED, savedSearches: o && a ? a : [] };
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
                    (t, a, { api: r }) =>
                        (0, s._O)(t, { request: r.withEndpoint(o.Z).create, params: { query: e } })({ actionTypes: u, context: "SAVE_SEARCH" }),
                w =
                    (e) =>
                    (t, a, { api: r }) =>
                        (0, s._O)(t, { request: r.withEndpoint(o.Z).destroy, params: { id: e } })({ actionTypes: p, context: "DELETE_SAVED_SEARCH" }),
                _ =
                    () =>
                    (e, t, { api: a }) => {
                        const r = t();
                        if (!(0, i.Qb)(r)) return Promise.resolve();
                        const n = ((e) => e[l].fetchStatus)(r) === d.ZP.LOADED;
                        return n ? Promise.resolve() : e((e, t, { api: a }) => (0, s._O)(e, { request: a.withEndpoint(o.Z).fetch, params: {} })({ actionTypes: h, context: "FETCH_SAVED_SEARCHES" }));
                    };
        },
        774006: (e, t, a) => {
            a.d(t, { Z: () => b, u: () => m });
            var o = a(644829),
                r = a(750085),
                n = a(903019),
                s = a(883432),
                d = a(555875),
                i = a(218951);
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
                b = ({ query: e, searchMode: t = n.N3.Top, querySource: a, searchFilters: s, vertical: d, urtEndpointOptions: m, searchTimelinesGraphQLEnabled: b }) => {
                    const S = p(a),
                        w = s && s.peopleFilter ? "searcher_follows" : void 0,
                        _ = w ? "-pf" : "",
                        y = s && s.locationFilter && !e.includes(c) ? `${e}${c}` : e,
                        f = { timelineId: `${l}${y}-${t}${S}${_}`, network: { getEndpoint: (e) => e.withEndpoint(o.Z).fetchSearch, getEndpointParams: (e) => ({ ...m?.requestParams, q: y, social_filter: w, vertical: d, ...u[t], ...e }) }, context: "FETCH_SEARCH_TIMELINE", perfKey: "search", staleIntervalMs: t === n.N3.Live ? 5e3 : void 0, timelineType: "search" };
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
                        return (0, i.Z)({ ...f, timelineId: d, context: "FETCH_SEARCH_GRAPHQL_TIMELINE", formatResponse: r.Z, network: { getEndpointParams: ({ count: t, cursor: o }) => ({ rawQuery: e, count: t, product: s, querySource: a, cursor: "string" == typeof o ? o : void 0 }), getEndpoint: (e) => e.withEndpoint(o.Z).fetchSearchGraphQL } });
                    }
                    return (0, i.Z)(f);
                };
        },
        80927: (e, t, a) => {
            a.r(t), a.d(t, { SearchFiltersScreen: () => h, default: () => u });
            var o = a(807896),
                r = a(202784),
                n = a(111677),
                s = a.n(n),
                d = a(980407),
                i = a(896008),
                l = a(725516);
            const c = s().aea62568;
            function h(e) {
                const { history: t, location: a } = e;
                return r.createElement(d.Z, { documentTitle: c, history: t, title: c }, r.createElement(i.J, (0, o.Z)({}, e, { key: a.key, withBottomBorder: !0 })));
            }
            const u = (0, l.Z)(h, { page: "search_filters" });
        },
        184297: (e, t, a) => {
            a.r(t), a.d(t, { SearchScreen: () => Ue, default: () => $e });
            var o = a(202784),
                r = a(537392),
                n = a(691533),
                s = a(844685),
                d = a(457311),
                i = a(111677),
                l = a.n(i),
                c = a(912021),
                h = a(459679),
                u = a(791632),
                p = a(805104),
                m = a(718e3);
            a(272175);
            l().b11805af, l().d610e8c3;
            var b = a(896008),
                S = a(252021),
                w = a(507651),
                _ = a(443781),
                y = a(652904),
                f = a(243754);
            const g = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("icons.21"),
                        a.e("icons.16"),
                        a.e("icons.10"),
                        a.e("icons.19"),
                        a.e("icons.1"),
                        a.e("icons.0"),
                        a.e("icons.8"),
                        a.e("icons.2"),
                        a.e("icons.23"),
                        a.e("icons.3"),
                        a.e("icons.4"),
                        a.e("icons.15"),
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("icons.9"),
                        a.e("icons.7"),
                        a.e("icons.28"),
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
                        a.e("icons.26"),
                        a.e("icons.24"),
                        a.e("icons.29"),
                        a.e("icons.18"),
                        a.e("icons.13"),
                        a.e("icons.27"),
                        a.e("icons.25"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-62fc6e53"),
                        a.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f2c8af9d"),
                        a.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~bundle.GrokDrawer~ondemand.InlinePla"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        a.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        a.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-bbc41769"),
                        a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3ec0edf6"),
                        a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-3fd5f349"),
                        a.e("shared~loader.Dock~bundle.Articles~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSp-d9c770f1"),
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
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-bc6ccf4c"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6107ac1a"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-e4e3d8bb"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-bf286bb5"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok~loader.Markdown-6ac0f1a5"),
                        a.e("shared~bundle.Grok~loader.Markdown-6107ac1a"),
                        a.e("shared~bundle.Grok~loader.Markdown-0ae4e026"),
                        a.e("shared~bundle.Grok~loader.Markdown-b16f5c14"),
                        a.e("shared~bundle.Grok~loader.Markdown-63cb1cc4"),
                        a.e("shared~bundle.Grok~loader.Markdown-d49ace54"),
                        a.e("shared~bundle.Grok~loader.Markdown-3277c3ad"),
                        a.e("shared~bundle.Grok~loader.Markdown-57c2c4a2"),
                        a.e("shared~bundle.Grok~loader.Markdown-6bf2d53b"),
                        a.e("shared~bundle.Grok~loader.Markdown-78667c23"),
                        a.e("shared~bundle.Grok~loader.Markdown-a244d277"),
                        a.e("shared~bundle.Grok~loader.Markdown-0d8ef87b"),
                        a.e("shared~bundle.Grok~loader.Markdown-26844252"),
                        a.e("shared~bundle.Grok~loader.Markdown-f29574de"),
                        a.e("shared~bundle.Grok~loader.Markdown-4ff64aa1"),
                        a.e("shared~bundle.GrokDrawer~bundle.Grok"),
                        a.e("bundle.Grok-6107ac1a"),
                        a.e("bundle.Grok-9f4db315"),
                        a.e("bundle.Grok-65f95f73"),
                        a.e("bundle.Grok-63cb1cc4"),
                        a.e("bundle.Grok-c69e90f3"),
                        a.e("bundle.Grok-16d5f187"),
                        a.e("bundle.Grok-38dc3b4a"),
                        a.e("bundle.Grok-1d830d6b"),
                        a.e("bundle.Grok-7bc92c09"),
                        a.e("bundle.Grok-f8a31592"),
                        a.e("bundle.Grok-bd027025"),
                        a.e("bundle.Grok-7a6ce5c4"),
                        a.e("bundle.Grok-cebf58fc"),
                        a.e("bundle.Grok-29bebf45"),
                        a.e("bundle.Grok-29980aa8"),
                        a.e("bundle.Grok-6ac0f1a5"),
                        a.e("bundle.Grok-3c20ad5c"),
                    ]).then(a.bind(a, 528829)),
            });
            var D = a(601576);
            const k = l().f9d35b98,
                E = l().ha925ad4,
                A = l().h0a9931c,
                C = { customErrorHandler: () => (0, D.mf)({ text: E }), showToast: !0 },
                M = { customErrorHandler: () => (0, D.mf)({ text: k }), showToast: !0 },
                v = { customErrorHandler: () => (0, D.mf)({ text: A }), showToast: !0 };
            var T = a(10656),
                x = a(293115),
                B = a(942893),
                Z = a(903019),
                I = a(615027),
                P = a(24949),
                L = a(71620),
                N = a(2430),
                F = a(668214),
                R = a(704279),
                q = a(554951),
                H = a(936572);
            const G = (e, t) => {
                    const { location: a } = t;
                    return a.query && a.query.src && "string" == typeof a.query.src ? a.query.src : "";
                },
                O = (e, t) => {
                    const {
                        location: a,
                        match: { params: o },
                    } = t;
                    return o && o.unsafeHashtagQuery && "string" == typeof o.unsafeHashtagQuery ? `#${o.unsafeHashtagQuery}` : (a && a.query && a.query.q && (0, N.BX)(a.query.q)) || "";
                },
                U = (e, t) => {
                    const { location: a } = t;
                    return 0 === a.pathname.indexOf("/search") ? "search" : "hashtag";
                },
                $ = (e, t) => !!(t.location.state || {}).searchFocused,
                V = (0, P.P1)((0, N.cI)("pf"), (0, N.cI)("lf"), (e, t) => ({ peopleFilter: e, locationFilter: t })),
                z = (0, F.Z)()
                    .propsFromState(() => ({ searchFocused: $, query: O, querySrc: G, isQueryAlreadySaved: (0, P.P1)(O, q.as, (e, t) => t.map((e) => e.query).indexOf(e) > -1), searchType: U, searchFilters: V, mode: Z.Jm, savedSearches: q.as, vertical: (0, N.cI)("vertical"), isSideNavExpandedByUser: H.op }))
                    .propsFromActions(() => ({ addToast: D.fz, createLocalApiErrorHandler: (0, L.zr)("SEARCH_SCREEN"), deleteSavedSearch: q.k9, fetchSavedSearchesIfNeeded: q.l9, saveSearch: q.GL, scribeAction: R.n }))
                    .withAnalytics({ page: "search" });
            a(136728), a(901951);
            var Q = a(811176),
                W = a(517747),
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
                se = l().h1ef00dc,
                de = l().aea62568,
                ie = l().j622effe,
                le = l().h4912b5e,
                ce = l().b9bc69ca;
            const he = function (e) {
                const { deleteSavedSearch: t, isLoggedIn: a, isQueryAlreadySaved: r, isTwoColumn: n, location: s, onClose: d, saveSearch: i } = e,
                    l = (0, ee.hC)("responsive_web_saved_search_enabled"),
                    c = [];
                return (
                    n || c.push({ Icon: W.default, testID: te, text: de, link: { pathname: "/i/search_filters", query: s.query } }),
                    c.push({ Icon: j.default, testID: ae, text: ie, link: { pathname: "/search-advanced", query: { ...(0, Y.Z)(s.query, ["src"]) } } }),
                    a &&
                        (c.unshift({ Icon: J.default, testID: oe, text: se, link: "/settings/search" }),
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
                    o.createElement(Q.Z, { items: c, onCloseRequested: d })
                );
            };
            var ue = a(476984),
                pe = a.n(ue),
                me = a(108362),
                be = a(842623),
                Se = a(789831),
                we = a(959658),
                _e = a(32677),
                ye = a(886191),
                fe = a(864702),
                ge = a(774006),
                De = a(735313);
            const ke = (e, t) => "POP" === t.history.action,
                Ee = (e, t) => {
                    const { location: a } = t;
                    return a?.state?.urtEndpointOptions;
                },
                Ae = (0, F.Z)()
                    .propsFromState(() => ({ dataLookupId: Z.XN, isBackNavigation: ke, searchMode: Z.Jm, urtEndpointOptions: Ee }))
                    .propsFromActions(() => ({ clearTimelineCache: ({ fetchOptions: e, module: t }) => (0, De.Z)(t, e), createLocalApiErrorHandler: (0, L.zr)("SEARCH_RESULTS_SCREEN") })),
                Ce = (e) => (e && (0, be.Z)(e) ? { defaultText: ` ${e}`, positionCursorAtBeginning: !0 } : void 0);
            class Me extends o.Component {
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
                        (this._getMemoizedComposeLocationState = (0, c.Z)(Ce));
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
                    const { query: e, querySrc: t, searchFilters: a, searchFocused: r, urtEndpointOptions: n, vertical: s } = this.props,
                        { featureSwitches: d, viewerUserId: i } = this.context,
                        l = !(!i || !d.isTrue("voice_rooms_search_results_page_audiospace_ring_enabled")),
                        c = this._getSearchMode();
                    return o.createElement(Se.Z, { component: me.Z, fab: this._renderFloatingComposeButton(), shouldRenderFab: !r }, o.createElement(we.b.Provider, { query: e }, o.createElement(ye.Z, { fetchOptions: this._getFetchOptions(), query: e, querySrc: t, searchFilters: a, searchMode: c, urtEndpointOptions: n, vertical: s, withUserPresence: l })));
                }
                _renderFloatingComposeButton() {
                    const { history: e } = this.props;
                    return o.createElement(_e.Z, { getLocationState: this._getFabState, history: e });
                }
                _getFetchOptions() {
                    const { dataLookupId: e, querySrc: t } = this.props;
                    return { query_source: t, data_lookup_id: e };
                }
                _clearTimelineCache() {
                    const { clearTimelineCache: e, createLocalApiErrorHandler: t, query: a, querySrc: o, searchFilters: r, urtEndpointOptions: n } = this.props,
                        s = this._getSearchMode(),
                        { featureSwitches: d } = this.context,
                        i = d.isTrue("search_timelines_graphql_enabled");
                    (0, u.HD)(this.context.history) || e({ module: (0, ge.Z)({ query: a, querySource: o, searchMode: s, searchFilters: r, urtEndpointOptions: n, searchTimelinesGraphQLEnabled: i }), fetchOptions: this._getFetchOptions() }).catch(t(fe.d));
                }
            }
            Me.contextType = _.rC;
            const ve = Ae(Me),
                Te = "searchBoxOverflowButton",
                xe = l().a9ae1e78,
                Be = l().e75df5c9,
                Ze = l().i66136aa,
                Ie = l().d601fc20,
                Pe = l().b0041756,
                Le = l().add55c98,
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
                    { type: Z.N3.Media, label: Le },
                    { type: Z.N3.List, label: Pe },
                ];
            class Ue extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._viewerUserId = this.context.viewerUserId),
                        (this.state = { shouldShowDeleteSearchConfirmation: !1, shouldClearTimelineCache: !1 }),
                        (this._getScribeData = (0, c.Z)((e, t, a, o, r) => ({ search_details: { ...(0, Z.hB)({ query: e, querySrc: t, searchFilters: a, modeValue: o, vertical: r }) } }))),
                        (this._renderRightControl = ({ isTwoColumn: e, searchFocused: t }) => (e || !t ? o.createElement(p.Z, { onClick: this._handleOverflowMenuClick, renderMenu: this._renderMenu, testID: Te }) : void 0)),
                        (this._renderMenu = (e) => {
                            const { history: t, isQueryAlreadySaved: a, location: n } = this.props,
                                s = !!this.context.viewerUserId;
                            return o.createElement(r.ZP, null, ({ windowWidth: r }) => {
                                const d = T.Z.isTwoColumnLayout(r);
                                return o.createElement(he, { deleteSavedSearch: this._onDeleteSavedSearchMenuClick, history: t, isLoggedIn: s, isQueryAlreadySaved: a, isTwoColumn: d, location: n, onClose: e, saveSearch: this._onSaveSearch });
                            });
                        }),
                        (this._onSaveSearch = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: a, query: o, saveSearch: r, savedSearches: n } = this.props,
                                s = n.length;
                            o &&
                                r(o)
                                    .then(() => e({ text: He }))
                                    .catch(a(s < 25 ? C : M));
                            const d = B.Z.forSavedSearchResult(o, s);
                            t.scribe({ element: "saved_search", action: "add", data: { items: [d] } });
                        }),
                        (this._handleOnDeleteSavedSearchConfirm = () => {
                            const { addToast: e, analytics: t, createLocalApiErrorHandler: a, deleteSavedSearch: o, query: r, savedSearches: n } = this.props,
                                s = n.findIndex((e) => e.query === r),
                                d = n[s];
                            if (d) {
                                o(d.id_str)
                                    .then(() => e({ text: Ge }))
                                    .catch(a(v));
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
                            const { featureSwitches: a } = this.context,
                                { shouldShowDeleteSearchConfirmation: r } = this.state,
                                { query: s } = e,
                                { mode: d } = this.props,
                                i = a.isTrue("responsive_web_grok_search_summary_enabled"),
                                l = a.isTrue("responsive_web_grok_search_summary_sidebar");
                            return o.createElement(o.Fragment, null, !i || (l && t) ? null : o.createElement(n.Z, null, o.createElement(g, { hidden: "top" !== d, query: s })), o.createElement(ve, e), r ? o.createElement(f.Z, { onCancel: this._handleOnDeleteSavedSearchCancel, onConfirm: this._handleOnDeleteSavedSearchConfirm }) : null);
                        }),
                        (this._renderSidebarContent = () => {
                            const { history: e, location: t, mode: a, query: r } = this.props;
                            let d = !1;
                            this.context.userClaims.isAnyPremiumSubscriber() || (d = this.context.featureSwitches.isTrue("subscriptions_upsells_radar_sidebar_enabled"));
                            const i = this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_enabled") && this.context.featureSwitches.isTrue("responsive_web_grok_search_summary_sidebar");
                            return o.createElement(m.Z, { withRadarUpsell: d, withSearchBox: !1, withTrends: !!r }, i ? o.createElement(n.Z, null, o.createElement(g, { heightFactor: 2, hidden: "top" !== a, query: r })) : null, o.createElement(s.Z, { text: qe }), o.createElement(b.Z, { history: e, key: t.key, location: t }));
                        }),
                        (this._renderTabs = () => {
                            const { analytics: e, mode: t, query: a, querySrc: r, searchFilters: n, searchType: s, vertical: d } = this.props,
                                { featureSwitches: i, viewerUserId: l } = this.context,
                                c = (0, h.Z)(Oe, (o) => {
                                    if (!(0, Z.PH)(o.type, i, !!l)) return;
                                    const c = (0, Z.PH)(t, i, !!l) ? Z._I[t] : void 0,
                                        h = Z._I[o.type],
                                        u = () => h === c;
                                    return {
                                        isActive: u,
                                        key: o.type,
                                        to: (0, Z.Rg)({ query: a, querySrc: r, modeValue: h, searchType: s, searchFilters: n, vertical: d }),
                                        label: o.label,
                                        onClick: () => {
                                            u() || e.scribe({ element: `search_filter_${o.type}`, action: "navigate", data: this._getScribeData(a, r, n) });
                                        },
                                    };
                                });
                            return o.createElement(w.Z, { links: c });
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
                    const { history: e, isSideNavExpandedByUser: t, location: a, mode: n, query: s, querySrc: i, searchFilters: l, searchFocused: c, searchType: h, vertical: p } = this.props,
                        { shouldClearTimelineCache: m } = this.state,
                        b = !!s,
                        w = b ? Be({ query: s }) : xe,
                        _ = { history: e, location: a, query: s, querySrc: i, searchFilters: l, searchFocused: c, vertical: p, shouldClearTimelineCache: m },
                        f = { initialValue: s, mode: n, onSubmit: this._handleSearchBoxSubmit, searchFilters: l, showBrandedHashFlag: !0 },
                        g = this.context.featureSwitches.isTrue("rweb_sourcemap_migration"),
                        D = this.context.featureSwitches.isTrue("rweb_sourcemap_migration_side_expand_by_default");
                    return (0, u.HD)(e) && !b
                        ? o.createElement(d.Z, null)
                        : b
                          ? o.createElement(
                                x.nO,
                                { data: this._getScribeData(s, i, l, n, p), namespace: this._getMemoizedTimelineScribeNamespace(n, p) },
                                o.createElement(
                                    y.Z,
                                    null,
                                    null,
                                    o.createElement(r.ZP, null, ({ windowWidth: a }) => {
                                        const r = T.Z.isTwoColumnLayout(a),
                                            n = T.Z.isTwoColumnLayoutRedesign(a, t ?? D),
                                            d = this._renderRightControl({ isTwoColumn: r, searchFocused: c });
                                        return o.createElement(S.Z, { backLocation: "/explore", composeOptions: Ce(s), documentTitle: w, history: e, primaryContent: this._renderPrimaryContent(_, g ? n : r), rightControl: d, searchBoxOptions: f, secondaryBar: this._renderTabs(), sidebarContent: this._renderSidebarContent(), title: s, withBottomLoginSignupBar: !0, withSearchBox: !0 });
                                    }),
                                ),
                            )
                          : o.createElement(I.Z, { to: "/explore" });
                }
            }
            Ue.contextType = _.rC;
            const $e = z(Ue);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Search-9f4db315.2965082a.js.map
