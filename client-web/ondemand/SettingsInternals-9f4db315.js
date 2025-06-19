"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-9f4db315"],
    {
        121363: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(506899),
                r = n(676145),
                s = n(588960),
                l = n.n(s),
                a = n(318752);
            const i = (e, t, n) => {
                    const o = (0, a.Z)(e, t, n);
                    if (e && "string" == typeof o.vcard) {
                        const e = l().parse(o.vcard),
                            t = (e && e[0]) || null;
                        return { ...o, vcard: t };
                    }
                    return o;
                },
                c = new o.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, r.Z)(e.id) ? e.id : e.id_str), processStrategy: i });
        },
        229333: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(466999),
                s = n(325686),
                l = n(392237),
                a = n(111677);
            const i = n.n(a)().e5b0063d;
            let c = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = i({ title: t });
                    return o.createElement(s.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: l.default.visuallyHidden }, t), o.createElement(s.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        917009: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(154003),
                s = n(111677),
                l = n.n(s),
                a = n(379327);
            const i = l().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: n } = e;
                    return o.createElement(r.ZP, { "aria-label": t, hoverLabel: { label: i }, icon: o.createElement(a.default, null), link: n, pullRight: !0, type: "primaryText" });
                };
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var o = n(202784),
                r = n(614983),
                s = n.n(r),
                l = n(325686),
                a = n(370006),
                i = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            s()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: s, isFullWidth: l, isLarge: c, leftControl: d, middleControl: h, position: m, rightControl: p, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: w, titleIconCellSize: Z, withBackground: _, withWideContainer: v } = this.props,
                        { isModal: B } = this.context,
                        E = s ? d : o.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        k = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!_, B, !!g);
                    return o.createElement(o.Fragment, null, o.createElement(i.Z, { centerTitle: t, centeredLogo: n, isFullWidth: l, isLarge: c, leftControl: E, middleControl: h, position: u(m, B, r), rightControl: p, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: w, titleIconCellSize: Z, withBackground: k, withWideContainer: v }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(l.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(242454),
                s = n(190286);
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: l, confirmationSheetHeadline: a, confirmationSheetText: i, label: c } = this.props;
                    return o.createElement(o.Fragment, null, o.createElement(r.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? o.createElement(s.Z, { confirmButtonLabel: n, confirmButtonType: l, headline: a, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: i }) : null);
                }
            }
            l.defaultProps = { color: "red500", align: "center" };
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(325686),
                s = n(392237);
            class l extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(r.Z, { style: a.root });
                }
            }
            const a = s.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                i = l;
        },
        333241: (e, t, n) => {
            n.d(t, { Z: () => Z });
            n(136728);
            var o = n(202784),
                r = n(638236),
                s = n(811176),
                l = n(111677),
                a = n.n(l),
                i = n(415506),
                c = n(516951),
                d = n(376293),
                u = n(847607),
                h = n(417714),
                m = n(988823);
            const p = "block",
                g = "mute",
                b = "removeFollower",
                f = "report",
                y = "share",
                C = a().j7bb1a43,
                w = a().hef5960c,
                Z = (0, m.M)((e) => {
                    const { onBlock: t, onClose: n, onMute: l, onRemoveFollower: a, onReportUser: m, onShare: Z, onUnblock: _, onUnmute: v, user: B } = e,
                        E = [],
                        k = (t, n) => {
                            const { confirm: o, onClose: r } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                o({ confirmButtonLabel: e, ...s })
                                    .then(n, c.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !B.protected &&
                        !B.blocking &&
                        !B.blocked_by &&
                        E.push({
                            Icon: r.Z,
                            onClick: () => {
                                n(), Z();
                            },
                            testID: y,
                            text: w,
                        });
                    !B.blocking &&
                        E.push({
                            ...(0, u.N1)(
                                B,
                                () => {
                                    n(), l();
                                },
                                () => {
                                    n(), v();
                                },
                            ),
                            testID: g,
                        });
                    B.followed_by &&
                        E.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    k(e, a);
                                },
                                user: B,
                            }),
                            testID: b,
                        }),
                        E.push((0, d.op)({ blockAction: (e) => k(e, t), source: d.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => k(e, _), user: B })),
                        E.push({
                            Icon: i.default,
                            onClick: () => {
                                n(), m();
                            },
                            testID: f,
                            text: C({ screenName: B.screen_name }),
                        });
                    const x = E.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(s.Z, { items: x, onCloseRequested: n });
                });
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => g, w: () => m });
            var o = n(202784),
                r = n(325686),
                s = n(108362),
                l = n(386802),
                a = n(392237),
                i = n(652904),
                c = n(555079),
                d = n(625661),
                u = n(449067),
                h = n(715601);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: s, centerTitle: l, hideBackButton: a, history: i, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: y, title: C } = this.props,
                                { isModal: w } = this.context;
                            return o.createElement(r.Z, { style: w ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, o.createElement(d.ZP, { backButtonType: n || (w ? "close" : "back"), backLocation: s, centerTitle: l, fixed: !w, hideBackButton: a, history: i, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [w && p.appBarModal, t], subtitle: y, title: C, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: l, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        y = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(i.Z, null, o.createElement(u.Z.Configure, { documentTitle: a, headerless: !0, title: g }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, f && p.rootModal] }, !f && y, o.createElement(s.Z, { isFullWidth: c, isLarge: d, style: [p.container, f && p.containerModal, l] }, f ? o.createElement(h.Z, { style: p.viewport }, y, n) : n), t ? o.createElement(r.Z, { style: [p.bottomBarModal, !f && !b && p.bottomBarMobile] }, o.createElement(s.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = l.Z);
            const p = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(807896),
                r = n(202784),
                s = n(229333),
                l = n(414939),
                a = n(334346);
            const i = ({ accessibilityTitle: e, footer: t = r.createElement(l.Z, null), ...n }) => {
                const i = r.createElement(a.C, (0, o.Z)({}, n, { footer: t }));
                return e ? r.createElement(s.Z, { title: e }, i) : i;
            };
        },
        349035: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(272175);
            const s = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), o.createElement(r.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        222718: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                r = n(325686),
                s = n(537392),
                l = n(10656),
                a = n(655352),
                i = n(555079),
                c = n(500002),
                d = n(625661),
                u = n(449067),
                h = n(655543),
                m = n(715601),
                p = n(392237);
            const g = p.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...p.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class b extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(r.Z, { style: g.fill }, o.createElement(m.Z, { style: g.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(s.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showBackButtonOnRoot: s, showSubtitleOnRoot: l, showSubtitleOnWideDetail: i, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: h, ...m } = this.props;
                    return o.createElement(o.Fragment, null, (0, a.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(u.Z.Configure, m), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: s, backLocation: l, documentTitle: a, headerless: c, history: h, leftControl: m, middleControl: p, onBackClick: b, rightControl: f, screenType: y, searchBoxOptions: C, secondaryBar: w, showBackButtonOnRoot: Z, showSubtitleOnRoot: _, showSubtitleOnWideDetail: v, showTitleOnRoot: B, subtitle: E, title: k, titleIconCell: x, titleIconCellSize: S, withDetailOpen: T, withSearchBox: P, withTweetButton: I, withWideContainer: D } = this.props,
                        L = "root" === y,
                        F = "secondaryRoot" === y,
                        U = "primaryDetail" === y,
                        A = (U && v) || (L && _),
                        O = (L && !Z) || (U && e),
                        M = (L && !B) || (U && e && !B),
                        R = L ? i.ey : U ? i.vX : void 0,
                        N = o.createElement(r.Z, { style: g.appBarContainer }, o.createElement(d.ZP, { backLocation: l, fixed: !1, hideBackButton: O, history: h, leftControl: m, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: w, style: s, subtitle: A ? E : void 0, title: M ? void 0 : k, titleDomId: R, titleIconCell: x, titleIconCellSize: S, withWideContainer: D })),
                        H = L || (F && T) ? null : o.createElement(u.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: l, documentTitle: a, headerless: c, middleControl: p, onBackClick: b, rightControl: f, searchBoxOptions: C, subtitle: E, title: k, withSearchBox: P, withTweetButton: I });
                    return o.createElement(o.Fragment, null, H, N);
                }
            }
            (b.contextType = h.Z), (b.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const f = (0, c.ZP)(b);
        },
        496364: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                r = n(107267),
                s = n(791632),
                l = n(222718);
            const a = (e) => {
                const t = (0, r.useHistory)();
                return (0, s.HD)(t) ? e.children || null : o.createElement(l.Z, e);
            };
        },
        811105: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(325686),
                s = n(731708),
                l = n(392237),
                a = n(111677),
                i = n.n(a);
            const c = i().c174e46e,
                d = i().a39075ff,
                u = l.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                h = (e) => {
                    const { scopes: t, size: n, title: l } = e,
                        [a, i] = o.useState(!1),
                        h = o.useCallback(() => {
                            i((e) => !e);
                        }, []),
                        m = a ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(s.ZP, { style: u.scopesHeader, weight: "bold" }, l),
                        o.createElement(
                            r.Z,
                            { role: "list" },
                            m.map((e) => o.createElement(s.ZP, { color: "subtext2" === n ? "gray700" : void 0, key: e.name, role: "listitem", size: n, style: u.listItem }, e.description)),
                        ),
                        p && a ? o.createElement(s.ZP, { onPress: h, style: u.toggleMoreLink }, c) : null,
                        p && !a ? o.createElement(s.ZP, { onPress: h, style: u.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, n) => {
            n.d(t, { H: () => c, b: () => d });
            var o = n(807896),
                r = n(202784),
                s = n(392237),
                l = n(779610);
            const a = (e) => {
                    const { Icon: t, iconColor: n, testID: o } = e;
                    return r.createElement(t, { style: n ? { color: s.default.theme.colors[n] } : i.thumbnail, testID: o });
                },
                i = s.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: n, testID: s, ...i } = e;
                return r.createElement(l.Z, (0, o.Z)({}, i, { thumbnail: r.createElement(a, { Icon: t, iconColor: n, testID: s }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...n } = e;
                return r.createElement(l.Z, (0, o.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(807896),
                r = n(202784),
                s = n(771099);
            const l = (e) => (t) => r.createElement(s.$6, null, (n) => r.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                s = n(107267),
                l = n(403556),
                a = n(791632);
            const i = (e) => {
                    const t = (0, s.useHistory)(),
                        { isCompact: n, ...i } = e;
                    return r.createElement(l.Z, (0, o.Z)({}, i, { isCompact: n || (0, a.HD)(t) }));
                },
                c = r.memo(i);
        },
        293988: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                r = n(154003),
                s = n(111677),
                l = n.n(s),
                a = n(74514),
                i = n(405303),
                c = n(684511),
                d = n(860174),
                u = n(71620),
                h = n(668214),
                m = n(257166),
                p = n(919022);
            const g = (e, t) => !(!t.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                b = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = l().bdba3e1a,
                y = l().c4da7d28,
                C = l().j87c21f4,
                w = l().iebc30ca,
                Z = l().dc740eb2;
            class _ extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: w }, icon: o.createElement(a.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(r.ZP, { "aria-label": f, hoverLabel: { label: C }, icon: o.createElement(i.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(c.Z, { fullScreen: !0, message: Z }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: n, userId: o } = this.props;
                    return n(o, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = b(_);
        },
        583335: (e, t, n) => {
            n.d(t, { Z: () => C });
            var o = n(202784),
                r = n(154003),
                s = n(40904),
                l = n(391366),
                a = n(847607),
                i = n(775412),
                c = n(837731),
                d = n(942893),
                u = n(71620),
                h = n(668214),
                m = n(629196),
                p = n(601576),
                g = n(919022);
            const b = (e, t) => g.ZP.select(e, t.userId),
                f = (0, h.Z)()
                    .propsFromState(() => ({ user: b }))
                    .propsFromActions(() => ({ addToast: p.fz, createLocalApiErrorHandler: (0, u.zr)("MUTE_BUTTON_CONTAINER"), mute: m.r, unmute: g.ZP.unmute }))
                    .withAnalytics();
            class y extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: n, unmute: o, user: r, userId: s } = this.props;
                            return r
                                ? r.muting
                                    ? o(s).then((t) => {
                                          e({ text: (0, a.X6)(r.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : n(s).then((t) => {
                                          e({ text: (0, a.FK)(r.screen_name) }), this._scribeAction("mute_user");
                                      }, t(i.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.muting ? s.default : l.default,
                        i = e.muting ? (0, a.PY)(e.screen_name) : (0, a.Aq)(e.screen_name),
                        c = e.muting ? a.cm : a.GS;
                    return o.createElement(r.ZP, { "aria-label": i, hoverLabel: { label: c }, icon: o.createElement(n, null), onPress: this._handleMutOrUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [d.Z.getUserItem(n)] : [] } });
                }
            }
            const C = f(y);
        },
        56851: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(420740),
                s = n(108362),
                l = n(731708),
                a = n(154003),
                i = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(349035);
            const h = "error-detail",
                m = d().e49537c2,
                p = d().a9ae1e78;
            class g extends o.PureComponent {
                render() {
                    return o.createElement(r.Z, { testID: h }, o.createElement(u.Z, null), o.createElement(s.Z, { style: b.root }, o.createElement(l.ZP, { align: "center", color: "gray700", style: b.retryText }, m), o.createElement(a.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const b = i.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(500002),
                s = n(668214),
                l = n(997174),
                a = n(118823);
            const i = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: s, search: l },
                            locationKey: a,
                        } = e;
                    let i = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (i = !0));
                    const c = r || a;
                    ((c && r !== a) || (!c && n !== s) || o !== l || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(i(c));
        },
        301410: (e, t, n) => {
            n.d(t, { i: () => p.ZP, z: () => y });
            var o = n(202784),
                r = n(928123),
                s = n.n(r),
                l = n(72845),
                a = n.n(l),
                i = n(57074),
                c = n.n(i),
                d = n(516951),
                u = n(88656),
                h = n(71620),
                m = n(163889),
                p = n(312771);
            const g = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: d.Z });
            class b extends o.Component {
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
            const f = ({ query: e, queryRef: t, render: n }) => {
                    const o = s()(e, t);
                    return n({ fetchStatus: p.ZP.LOADED, data: o, error: null, retry: d.Z });
                },
                y = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: r, variables: s }) {
                        const [l, i] = a()(e),
                            d = (0, h.n7)(t.errorConfig.context),
                            u = c()(s),
                            m = o.useCallback(() => {
                                i(u, { fetchPolicy: "network-only" });
                            }, [i, u]);
                        return (
                            o.useLayoutEffect(() => {
                                i(u, { fetchPolicy: n });
                            }, [n, i, u]),
                            l
                                ? o.createElement(
                                      o.Suspense,
                                      { fallback: o.createElement(g, { render: r }) },
                                      o.createElement(b, { errorHandler: d(t.errorConfig.options || {}), key: l.fetchKey, retry: m }, (t, n) => (t ? r({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: n }) : o.createElement(f, { query: e, queryRef: l, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var o = n(202784),
                r = n(325686),
                s = n(731708),
                l = n(855488),
                a = n(420412),
                i = n(844685),
                c = n(392237),
                d = n(111677),
                u = n.n(d),
                h = n(666536),
                m = n(668214),
                p = n(395042),
                g = n(919022);
            const b = (0, m.Z)()
                    .propsFromState(() => ({ viewerUser: g.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: t }) => {
                        const n = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((t) => t !== e.username),
                            o = t?.screen_name;
                        return { viewerUser: t, suggestions: n, valid: (!!o && o.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                f = u().d1f6d336,
                y = u().de65c756;
            class C extends o.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUsernameStatus = (e) => {
                            const { fetchUsernameAvailability: t, viewerUser: n } = this.props;
                            n && t({ email: n.email && n.email[0] && n.email[0].address, full_name: n.name, suggest: !0, username: e });
                        }),
                        (this._handleTypedFieldChange = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            this._fetchUsernameStatusDebounced(e.target.value), this.setState({ value: e.target.value }), t(e.target.value);
                        }),
                        (this._handleItemSelect = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            if (e.target instanceof Node) {
                                const n = e.target.textContent;
                                this.setState({ value: n }), t(n);
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
                    return o.createElement(s.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: w.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: n, validationError: s, viewerUser: c } = this.props;
                    if (!c) return null;
                    const d = !(n === c.screen_name || t || !s);
                    return o.createElement(
                        r.Z,
                        null,
                        o.createElement(l.Z, { autoComplete: "off", autoCorrect: !1, errorText: s, invalid: d, label: f, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        o.createElement(a.Z, null),
                        o.createElement(i.Z, { text: y }),
                        o.createElement(
                            r.Z,
                            { style: w.container },
                            e.map((e, t) => this._renderOption(e, t)),
                        ),
                    );
                }
            }
            const w = c.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                Z = b(C);
        },
        733487: (e, t, n) => {
            n.d(t, { Z: () => B });
            var o = n(202784),
                r = n(154003),
                s = n(111677),
                l = n.n(s),
                a = n(40904),
                i = n(391366),
                c = n(775412),
                d = n(837731),
                u = n(942893),
                h = n(71620),
                m = n(668214),
                p = n(296196),
                g = n(601576),
                b = n(919022);
            const f = (e, t) => b.ZP.select(e, t.userId),
                y = (0, m.Z)()
                    .propsFromState(() => ({ user: f }))
                    .propsFromActions(() => ({ addToast: g.fz, createLocalApiErrorHandler: (0, h.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: p.muteDMUser, unmuteDMUser: p.unmuteDMUser }))
                    .withAnalytics(),
                C = l().e67b2d65,
                w = l().f05597b3,
                Z = l().gde6b425,
                _ = l().e308019b;
            class v extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: n, unmuteDMUser: o, user: r, userId: s } = this.props;
                            return r
                                ? r.dm_muting
                                    ? o(s).then((t) => {
                                          e({ text: _({ name: r.name }) }), this._scribeAction("unmute_user");
                                      }, t(d.G))
                                    : n(s).then((t) => {
                                          e({ text: Z({ name: r.name }) }), this._scribeAction("mute_user");
                                      }, t(c.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.dm_muting ? a.default : i.default,
                        s = e.dm_muting ? w({ screenName: e.screen_name }) : C({ screenName: e.screen_name });
                    return o.createElement(r.ZP, { "aria-label": s, icon: o.createElement(n, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [u.Z.getUserItem(n)] : [] } });
                }
            }
            const B = y(v);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.32dfce7a.js.map
