"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-9f4db315"],
    {
        121363: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(506899),
                a = r(676145),
                n = r(588960),
                l = r.n(n),
                i = r(318752);
            const s = (e, t, r) => {
                    const o = (0, i.Z)(e, t, r);
                    if (e && "string" == typeof o.vcard) {
                        const e = l().parse(o.vcard),
                            t = (e && e[0]) || null;
                        return { ...o, vcard: t };
                    }
                    return o;
                },
                d = new o.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, a.Z)(e.id) ? e.id : e.id_str), processStrategy: s });
        },
        229333: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(202784),
                a = r(466999),
                n = r(325686),
                l = r(392237),
                i = r(674132);
            const s = r.n(i)().e5b0063d;
            let d = 0;
            class c extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${d}`), (d += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        r = s({ title: t });
                    return o.createElement(n.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(a.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), o.createElement(n.Z, { "aria-label": r }, e));
                }
            }
            const u = c;
        },
        917009: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                a = r(154003),
                n = r(674132),
                l = r.n(n),
                i = r(379327);
            const s = l().af40a8e0,
                d = (e) => {
                    const { "aria-label": t, link: r } = e;
                    return o.createElement(a.ZP, { "aria-label": t, hoverLabel: { label: s }, icon: o.createElement(i.default, null), link: r, pullRight: !0, type: "primaryText" });
                };
        },
        625661: (e, t, r) => {
            r.d(t, { ZP: () => h });
            var o = r(202784),
                a = r(614983),
                n = r.n(a),
                l = r(325686),
                i = r(370006),
                s = r(786998),
                d = r(929028),
                c = r(386802);
            function u(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: a, hideBackButton: n, isFullWidth: l, isLarge: d, leftControl: c, middleControl: h, position: m, rightControl: p, secondaryBar: _, style: g, subtitle: D, title: f, titleDomId: b, titleIconCell: y, titleIconCellSize: w, withBackground: M, withWideContainer: k } = this.props,
                        { isModal: v } = this.context,
                        Z = n ? c : o.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        C = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!M, v, !!_);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: r, isFullWidth: l, isLarge: d, leftControl: Z, middleControl: h, position: u(m, v, a), rightControl: p, style: g, subtitle: D, title: f, titleDomId: b, titleIconCell: y, titleIconCellSize: w, withBackground: C, withWideContainer: k }), _ || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = d.Z.getBackgroundStyles();
                    return t ? o.createElement(l.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(242454),
                n = r(190286);
            class l extends o.Component {
                constructor(e) {
                    super(e),
                        (this._handleClick = (e) => {
                            this.setState({ showConfirmation: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 });
                        }),
                        (this._handleConfirm = () => {
                            this.setState({ showConfirmation: !1 }), this.props.onConfirmationSheetConfirm();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                render() {
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: r, confirmationSheetConfirmButtonType: l, confirmationSheetHeadline: i, confirmationSheetText: s, label: d } = this.props;
                    return o.createElement(o.Fragment, null, o.createElement(a.Z, { align: e, color: t, label: d, onPress: this._handleClick }), this.state.showConfirmation ? o.createElement(n.Z, { confirmButtonLabel: r, confirmButtonType: l, headline: i, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: s }) : null);
                }
            }
            l.defaultProps = { color: "red500", align: "center" };
        },
        414939: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(325686),
                n = r(392237);
            class l extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(a.Z, { style: i.root });
                }
            }
            const i = n.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = l;
        },
        333241: (e, t, r) => {
            r.d(t, { Z: () => M });
            r(136728);
            var o = r(202784),
                a = r(638236),
                n = r(811176),
                l = r(674132),
                i = r.n(l),
                s = r(415506),
                d = r(516951),
                c = r(443781),
                u = r(376293),
                h = r(847607),
                m = r(417714),
                p = r(988823);
            const _ = "block",
                g = "mute",
                D = "removeFollower",
                f = "report",
                b = "share",
                y = i().j7bb1a43,
                w = i().hef5960c,
                M = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, c.QZ)(),
                        { onBlock: r, onClose: l, onMute: i, onRemoveFollower: p, onReportUser: M, onShare: k, onUnblock: v, onUnmute: Z, user: C } = e,
                        P = [],
                        I = (t, r) => {
                            const { confirm: o, onClose: a } = e;
                            if (t) {
                                const { label: e, ...n } = t;
                                o({ confirmButtonLabel: e, ...n })
                                    .then(r, d.Z)
                                    .finally(a);
                            } else r();
                        };
                    !!window.navigator.share &&
                        !C.protected &&
                        !C.blocking &&
                        !C.blocked_by &&
                        P.push({
                            Icon: a.Z,
                            onClick: () => {
                                l(), k();
                            },
                            testID: b,
                            text: w,
                        });
                    !C.blocking &&
                        P.push({
                            ...(0, h.N1)(
                                C,
                                () => {
                                    l(), i();
                                },
                                () => {
                                    l(), Z();
                                },
                            ),
                            testID: g,
                        });
                    C.followed_by &&
                        P.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    I(e, p);
                                },
                                user: C,
                            }),
                            testID: D,
                        }),
                        P.push((0, u.op)({ blockAction: (e) => I(e, r), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: _, unblockAction: (e) => I(e, v), user: C })),
                        P.push({
                            Icon: s.default,
                            onClick: () => {
                                l(), M();
                            },
                            testID: f,
                            text: y({ screenName: C.screen_name }),
                        });
                    const E = P.map(({ Icon: e, onClick: t, testID: r, text: o }) => ({ text: o, onClick: t, Icon: e, testID: r }));
                    return o.createElement(n.Z, { items: E, onCloseRequested: l });
                });
        },
        980407: (e, t, r) => {
            r.d(t, { Z: () => _, w: () => m });
            var o = r(202784),
                a = r(325686),
                n = r(108362),
                l = r(386802),
                i = r(392237),
                s = r(652904),
                d = r(555079),
                c = r(625661),
                u = r(449067),
                h = r(715601);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: n, centerTitle: l, hideBackButton: i, history: s, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: _, rightControl: g, secondaryBar: D, subtitle: f, title: b } = this.props,
                                { isModal: y } = this.context;
                            return o.createElement(a.Z, { style: y ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, o.createElement(c.ZP, { backButtonType: r || (y ? "close" : "back"), backLocation: n, centerTitle: l, fixed: !y, hideBackButton: i, history: s, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: _, ref: e, rightControl: g, secondaryBar: D, style: [y && p.appBarModal, t], subtitle: f, title: b, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: l, documentTitle: i, isFullWidth: d, isLarge: c, renderHeader: m, title: _, withoutBottomBarMobile: g } = this.props,
                        { isModal: D } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(s.Z, null, o.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: _ }), o.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, D && p.rootModal] }, !D && f, o.createElement(n.Z, { isFullWidth: d, isLarge: c, style: [p.container, D && p.containerModal, l] }, D ? o.createElement(h.Z, { style: p.viewport }, f, r) : r), t ? o.createElement(a.Z, { style: [p.bottomBarModal, !D && !g && p.bottomBarMobile] }, o.createElement(n.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = l.Z);
            const p = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                _ = m;
        },
        965245: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(807896),
                a = r(202784),
                n = r(229333),
                l = r(414939),
                i = r(334346);
            const s = ({ accessibilityTitle: e, footer: t = a.createElement(l.Z, null), ...r }) => {
                const s = a.createElement(i.C, (0, o.Z)({}, r, { footer: t }));
                return e ? a.createElement(n.Z, { title: e }, s) : s;
            };
        },
        811105: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                l = r(392237),
                i = r(674132),
                s = r.n(i);
            const d = s().c174e46e,
                c = s().a39075ff,
                u = l.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                h = (e) => {
                    const { scopes: t, size: r, title: l } = e,
                        [i, s] = o.useState(!1),
                        h = o.useCallback(() => {
                            s((e) => !e);
                        }, []),
                        m = i ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(n.ZP, { style: u.scopesHeader, weight: "bold" }, l),
                        o.createElement(
                            a.Z,
                            { role: "list" },
                            m.map((e) => o.createElement(n.ZP, { color: "subtext2" === r ? "gray700" : void 0, key: e.name, role: "listitem", size: r, style: u.listItem }, e.description)),
                        ),
                        p && i ? o.createElement(n.ZP, { onPress: h, style: u.toggleMoreLink }, d) : null,
                        p && !i ? o.createElement(n.ZP, { onPress: h, style: u.toggleMoreLink }, c({ n: t.length - 3 })) : null,
                    );
                };
        },
        864479: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(807896),
                a = r(202784),
                n = r(771099);
            const l = (e) => (t) => a.createElement(n.$6, null, (r) => a.createElement(e, (0, o.Z)({}, t, { isInSidebar: r })));
        },
        507651: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(807896),
                a = r(202784),
                n = r(107267),
                l = r(403556),
                i = r(791632);
            const s = (e) => {
                    const t = (0, n.useHistory)();
                    return a.createElement(l.Z, (0, o.Z)({}, e, { isCompact: (0, i.HD)(t) }));
                },
                d = a.memo(s);
        },
        293988: (e, t, r) => {
            r.d(t, { Z: () => k });
            var o = r(202784),
                a = r(154003),
                n = r(674132),
                l = r.n(n),
                i = r(74514),
                s = r(405303),
                d = r(684511),
                c = r(860174),
                u = r(71620),
                h = r(668214),
                m = r(257166),
                p = r(919022);
            const _ = (e, t) => !(!t.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                g = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: _ }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                D = l().bdba3e1a,
                f = l().c4da7d28,
                b = l().j87c21f4,
                y = l().iebc30ca,
                w = l().dc740eb2;
            class M extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(a.ZP, { "aria-label": f, hoverLabel: { label: y }, icon: o.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(a.ZP, { "aria-label": D, hoverLabel: { label: b }, icon: o.createElement(s.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(d.Z, { fullScreen: !0, message: w }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: r, userId: o } = this.props;
                    return r(o, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const k = g(M);
        },
        583335: (e, t, r) => {
            r.d(t, { Z: () => b });
            var o = r(202784),
                a = r(154003),
                n = r(40904),
                l = r(391366),
                i = r(847607),
                s = r(775412),
                d = r(837731),
                c = r(942893),
                u = r(71620),
                h = r(668214),
                m = r(629196),
                p = r(601576),
                _ = r(919022);
            const g = (e, t) => _.ZP.select(e, t.userId),
                D = (0, h.Z)()
                    .propsFromState(() => ({ user: g }))
                    .propsFromActions(() => ({ addToast: p.fz, createLocalApiErrorHandler: (0, u.zr)("MUTE_BUTTON_CONTAINER"), mute: m.r, unmute: _.ZP.unmute }))
                    .withAnalytics();
            class f extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: r, unmute: o, user: a, userId: n } = this.props;
                            return a
                                ? a.muting
                                    ? o(n).then((t) => {
                                          e({ text: (0, i.X6)(a.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(d.G))
                                    : r(n).then((t) => {
                                          e({ text: (0, i.FK)(a.screen_name) }), this._scribeAction("mute_user");
                                      }, t(s.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        r = e.muting ? n.default : l.default,
                        s = e.muting ? (0, i.PY)(e.screen_name) : (0, i.Aq)(e.screen_name),
                        d = e.muting ? i.cm : i.GS;
                    return o.createElement(a.ZP, { "aria-label": s, hoverLabel: { label: d }, icon: o.createElement(r, null), onPress: this._handleMutOrUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: r } = this.props;
                    t.scribe({ action: e, data: { items: r ? [c.Z.getUserItem(r)] : [] } });
                }
            }
            const b = D(f);
        },
        652904: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                a = r(500002),
                n = r(668214),
                l = r(997174),
                i = r(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class d extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: o },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: n, search: l },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (s = !0));
                    const d = a || i;
                    ((d && a !== i) || (!d && r !== n) || o !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, a.ZP)(s(d));
        },
        301410: (e, t, r) => {
            r.d(t, { i: () => p.ZP, z: () => f });
            var o = r(202784),
                a = r(928123),
                n = r.n(a),
                l = r(72845),
                i = r.n(l),
                s = r(57074),
                d = r.n(s),
                c = r(516951),
                u = r(88656),
                h = r(71620),
                m = r(163889),
                p = r(312771);
            const _ = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: c.Z });
            class g extends o.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, t) {
                    if (!(e instanceof u.Z)) throw e;
                    this.props.errorHandler(e), (0, m.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const D = ({ query: e, queryRef: t, render: r }) => {
                    const o = n()(e, t);
                    return r({ fetchStatus: p.ZP.LOADED, data: o, error: null, retry: c.Z });
                },
                f = (e, t) =>
                    function ({ fetchPolicy: r = "store-or-network", render: a, variables: n }) {
                        const [l, s] = i()(e),
                            c = (0, h.n7)(t.errorConfig.context),
                            u = d()(n),
                            m = o.useCallback(() => {
                                s(u, { fetchPolicy: "network-only" });
                            }, [s, u]);
                        return (
                            o.useLayoutEffect(() => {
                                s(u, { fetchPolicy: r });
                            }, [r, s, u]),
                            l
                                ? o.createElement(
                                      o.Suspense,
                                      { fallback: o.createElement(_, { render: a }) },
                                      o.createElement(g, { errorHandler: c(t.errorConfig.options || {}), key: l.fetchKey, retry: m }, (t, r) => (t ? a({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: r }) : o.createElement(D, { query: e, queryRef: l, render: a }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, r) => {
            r.d(t, { Z: () => w });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                l = r(855488),
                i = r(420412),
                s = r(844685),
                d = r(392237),
                c = r(674132),
                u = r.n(c),
                h = r(666536),
                m = r(668214),
                p = r(395042),
                _ = r(919022);
            const g = (0, m.Z)()
                    .propsFromState(() => ({ viewerUser: _.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: t }) => {
                        const r = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((t) => t !== e.username),
                            o = t?.screen_name;
                        return { viewerUser: t, suggestions: r, valid: (!!o && o.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                D = u().d1f6d336,
                f = u().de65c756;
            class b extends o.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUsernameStatus = (e) => {
                            const { fetchUsernameAvailability: t, viewerUser: r } = this.props;
                            r && t({ email: r.email && r.email[0] && r.email[0].address, full_name: r.name, suggest: !0, username: e });
                        }),
                        (this._handleTypedFieldChange = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            this._fetchUsernameStatusDebounced(e.target.value), this.setState({ value: e.target.value }), t(e.target.value);
                        }),
                        (this._handleItemSelect = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            if (e.target instanceof Node) {
                                const r = e.target.textContent;
                                this.setState({ value: r }), t(r);
                            }
                        }),
                        (this.state = { value: e.viewerUser && e.viewerUser.screen_name }),
                        (this._fetchUsernameStatusDebounced = (0, h.Z)((...e) => this._fetchUsernameStatus(...e), 250));
                }
                componentDidMount() {
                    const { viewerUser: e } = this.props;
                    e && this._fetchUsernameStatus(e.screen_name);
                }
                _renderOption(e, t) {
                    return o.createElement(n.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: y.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: r, validationError: n, viewerUser: d } = this.props;
                    if (!d) return null;
                    const c = !(r === d.screen_name || t || !n);
                    return o.createElement(
                        a.Z,
                        null,
                        o.createElement(l.Z, { autoComplete: "off", autoCorrect: !1, errorText: n, invalid: c, label: D, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        o.createElement(i.Z, null),
                        o.createElement(s.Z, { text: f }),
                        o.createElement(
                            a.Z,
                            { style: y.container },
                            e.map((e, t) => this._renderOption(e, t)),
                        ),
                    );
                }
            }
            const y = d.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                w = g(b);
        },
        733487: (e, t, r) => {
            r.d(t, { Z: () => v });
            var o = r(202784),
                a = r(154003),
                n = r(674132),
                l = r.n(n),
                i = r(40904),
                s = r(391366),
                d = r(775412),
                c = r(837731),
                u = r(942893),
                h = r(71620),
                m = r(668214),
                p = r(296196),
                _ = r(601576),
                g = r(919022);
            const D = (e, t) => g.ZP.select(e, t.userId),
                f = (0, m.Z)()
                    .propsFromState(() => ({ user: D }))
                    .propsFromActions(() => ({ addToast: _.fz, createLocalApiErrorHandler: (0, h.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: p.muteDMUser, unmuteDMUser: p.unmuteDMUser }))
                    .withAnalytics(),
                b = l().e67b2d65,
                y = l().f05597b3,
                w = l().gde6b425,
                M = l().e308019b;
            class k extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: r, unmuteDMUser: o, user: a, userId: n } = this.props;
                            return a
                                ? a.dm_muting
                                    ? o(n).then((t) => {
                                          e({ text: M({ name: a.name }) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : r(n).then((t) => {
                                          e({ text: w({ name: a.name }) }), this._scribeAction("mute_user");
                                      }, t(d.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        r = e.dm_muting ? i.default : s.default,
                        n = e.dm_muting ? y({ screenName: e.screen_name }) : b({ screenName: e.screen_name });
                    return o.createElement(a.ZP, { "aria-label": n, icon: o.createElement(r, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: r } = this.props;
                    t.scribe({ action: e, data: { items: r ? [u.Z.getUserItem(r)] : [] } });
                }
            }
            const v = f(k);
        },
        684511: (e, t, r) => {
            r.d(t, { Z: () => o });
            r(202784);
            const o = (0, r(523561).Z)({
                loader: () =>
                    Promise.all([
                        r.e("modules.common-e907d115"),
                        r.e("modules.common-e019dbda"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-5517db7c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        r.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        r.e("loader.PushNotificationsPrompt"),
                    ]).then(r.bind(r, 529629)),
            });
        },
        545334: (e, t, r) => {
            r.d(t, { d: () => a });
            var o = r(674132);
            const a = r.n(o)().gf5e9ea6;
        },
        916585: (e, t, r) => {
            r.d(t, { k: () => l });
            var o = r(674132),
                a = r.n(o),
                n = r(437358);
            const l = (e, t) => {
                const { id_str: r, screen_name: o } = e,
                    l = (0, a().d78131b9)({ screenName: o });
                return { Icon: n.default, text: l, link: { pathname: "/i/lists/add_member", state: { userId: r } }, onClick: t };
            };
        },
        847607: (e, t, r) => {
            r.d(t, { Aq: () => u, FK: () => f, GS: () => i, N1: () => m, PY: () => h, X6: () => b, cm: () => s });
            r(202784);
            var o = r(674132),
                a = r.n(o),
                n = r(391366),
                l = r(40904);
            const i = a().hb568af4,
                s = a().bb1cbeb6,
                d = (a().h2f62206, a().e67b2d65),
                c = a().f05597b3,
                u = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                m = (e, t, r) => {
                    const { muting: o, screen_name: a } = e;
                    return { text: o ? h(a) : u(a), onClick: o ? r : t, Icon: o ? n.default : l.default };
                },
                p = a().h59f52ee,
                _ = a().eea0cbee,
                g = a().i29533b3,
                D = a().h129c3c3,
                f = (e) => (e ? ((e) => g({ screenName: e }))(e) : p),
                b = (e) => (e ? ((e) => D({ screenName: e }))(e) : _);
        },
        417714: (e, t, r) => {
            r.d(t, { l: () => c });
            r(202784);
            var o = r(674132),
                a = r.n(o),
                n = r(224823);
            const l = a().b3036480,
                i = a().b3036480,
                s = a().e68b09b4,
                d = a().h27b7407,
                c = ({ removeFollowerAction: e, user: t }) => {
                    const r = u(t);
                    return { Icon: n.default, text: l, onClick: () => e(r) };
                },
                u = (e) => ({ confirmButtonType: "destructiveFilled", headline: i, label: s, text: d({ screenName: e.screen_name }) });
        },
        775412: (e, t, r) => {
            r.d(t, { W: () => i });
            var o = r(674132),
                a = r.n(o),
                n = r(615656);
            const l = a().ee87e71c,
                i = { [n.ZP.SelfMuteError]: { toast: { text: l } }, showToast: !0 };
        },
        48886: (e, t, r) => {
            r.d(t, { q: () => a });
            var o = r(674132);
            const a = { defaultToast: { text: r.n(o)().a30b63da }, showToast: !0 };
        },
        837731: (e, t, r) => {
            r.d(t, { G: () => i });
            var o = r(674132),
                a = r.n(o),
                n = r(615656);
            const l = a().ed428a76,
                i = { [n.ZP.NotMutingTargetUser]: { toast: { text: l } }, showToast: !0 };
        },
        860174: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(615656),
                a = r(51525);
            const n = { [o.ZP.FollowError]: { customAction: a.w1 } };
        },
        967262: (e, t, r) => {
            r.d(t, { m: () => o });
            const o = (e, t) => {
                    const r = e?.media_info;
                    if ("ApiImage" === r?.__typename) {
                        return { altText: r.alt_text, display_url: r.original_img_url, expanded_url: t?.expandedURLFormatter?.(e.media_id) ?? r.original_img_url, ext_alt_text: r.alt_text, ...(r.color_info?.palette && { ext_media_color: { palette: r.color_info.palette } }), id: n(e.media_id), id_str: e.media_id || "", media_key: e.media_key, media_url: r.original_img_url, media_url_https: r.original_img_url, original_info: { height: r.original_img_height, width: r.original_img_width }, sizes: { original: { h: r.original_img_height, resize: "fit", w: r.original_img_width } }, type: "photo" };
                    }
                    if ("ApiVideo" === r?.__typename) {
                        const { __typename: t, ...o } = r;
                        return a(o, e.media_id, r?.__typename);
                    }
                    if ("ApiGif" === r?.__typename) {
                        const { __typename: t, ...o } = r;
                        return a(o, e.media_id, r?.__typename);
                    }
                },
                a = (e, t, r) => {
                    const o = "ApiGif" === r ? "animated_gif" : "video",
                        a = e.preview_image;
                    return { type: o, id: n(t), id_str: t || "", ext_alt_text: a?.alt_text, ext_media_color: { palette: a?.color_info?.palette || [] }, media_url: a?.original_img_url || "", media_url_https: a?.original_img_url || "", url: a?.original_img_url || "", display_url: a?.original_img_url || "", expanded_url: a?.original_img_url || "", original_info: { height: a?.original_img_height || 0, width: a?.original_img_width || 0 }, sizes: { original: { h: a?.original_img_height || 0, resize: "fit", w: a?.original_img_width || 0 } }, video_info: { aspect_ratio: [e.aspect_ratio.numerator, e.aspect_ratio.denominator], ...(e.duration_millis && { duration_millis: e.duration_millis }), variants: e.variants.map((e) => ({ bitrate: e.bit_rate, content_type: e.content_type, url: e.url })) } };
                },
                n = (e) => {
                    const t = parseInt(e, 10);
                    return Number.isNaN(t) ? 0 : t;
                };
        },
        554997: (e, t, r) => {
            r.d(t, { r: () => n });
            const o = 19,
                a = 12,
                n = (e) => e.placeType && (e.placeType.code === o || e.placeType.code === a);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.4bf103da.js.map
