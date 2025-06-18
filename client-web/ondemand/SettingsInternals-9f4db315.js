"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-9f4db315"],
    {
        121363: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(506899),
                r = n(676145),
                l = n(588960),
                s = n.n(l),
                i = n(318752);
            const a = (e, t, n) => {
                    const o = (0, i.Z)(e, t, n);
                    if (e && "string" == typeof o.vcard) {
                        const e = s().parse(o.vcard),
                            t = (e && e[0]) || null;
                        return { ...o, vcard: t };
                    }
                    return o;
                },
                c = new o.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, r.Z)(e.id) ? e.id : e.id_str), processStrategy: a });
        },
        229333: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(466999),
                l = n(325686),
                s = n(392237),
                i = n(111677);
            const a = n.n(i)().e5b0063d;
            let c = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = a({ title: t });
                    return o.createElement(l.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, t), o.createElement(l.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        917009: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(202784),
                r = n(154003),
                l = n(111677),
                s = n.n(l),
                i = n(379327);
            const a = s().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: n } = e;
                    return o.createElement(r.ZP, { "aria-label": t, hoverLabel: { label: a }, icon: o.createElement(i.default, null), link: n, pullRight: !0, type: "primaryText" });
                };
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var o = n(202784),
                r = n(614983),
                l = n.n(r),
                s = n(325686),
                i = n(370006),
                a = n(786998),
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
                            l()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: l, isFullWidth: s, isLarge: c, leftControl: d, middleControl: h, position: m, rightControl: p, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: w, titleIconCellSize: _, withBackground: Z, withWideContainer: v } = this.props,
                        { isModal: k } = this.context,
                        B = l ? d : o.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!Z, k, !!g);
                    return o.createElement(o.Fragment, null, o.createElement(a.Z, { centerTitle: t, centeredLogo: n, isFullWidth: s, isLarge: c, leftControl: B, middleControl: h, position: u(m, k, r), rightControl: p, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: w, titleIconCellSize: _, withBackground: E, withWideContainer: v }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(s.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(242454),
                l = n(190286);
            class s extends o.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: n, confirmationSheetConfirmButtonType: s, confirmationSheetHeadline: i, confirmationSheetText: a, label: c } = this.props;
                    return o.createElement(o.Fragment, null, o.createElement(r.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? o.createElement(l.Z, { confirmButtonLabel: n, confirmButtonType: s, headline: i, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: a }) : null);
                }
            }
            s.defaultProps = { color: "red500", align: "center" };
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                r = n(325686),
                l = n(392237);
            class s extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(r.Z, { style: i.root });
                }
            }
            const i = l.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                a = s;
        },
        333241: (e, t, n) => {
            n.d(t, { Z: () => Z });
            n(136728);
            var o = n(202784),
                r = n(638236),
                l = n(811176),
                s = n(111677),
                i = n.n(s),
                a = n(415506),
                c = n(516951),
                d = n(443781),
                u = n(376293),
                h = n(847607),
                m = n(417714),
                p = n(988823);
            const g = "block",
                b = "mute",
                f = "removeFollower",
                y = "report",
                C = "share",
                w = i().j7bb1a43,
                _ = i().hef5960c,
                Z = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: n, onClose: s, onMute: i, onRemoveFollower: p, onReportUser: Z, onShare: v, onUnblock: k, onUnmute: B, user: E } = e,
                        x = [],
                        S = (t, n) => {
                            const { confirm: o, onClose: r } = e;
                            if (t) {
                                const { label: e, ...l } = t;
                                o({ confirmButtonLabel: e, ...l })
                                    .then(n, c.Z)
                                    .finally(r);
                            } else n();
                        };
                    !!window.navigator.share &&
                        !E.protected &&
                        !E.blocking &&
                        !E.blocked_by &&
                        x.push({
                            Icon: r.Z,
                            onClick: () => {
                                s(), v();
                            },
                            testID: C,
                            text: _,
                        });
                    !E.blocking &&
                        x.push({
                            ...(0, h.N1)(
                                E,
                                () => {
                                    s(), i();
                                },
                                () => {
                                    s(), B();
                                },
                            ),
                            testID: b,
                        });
                    E.followed_by &&
                        x.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    S(e, p);
                                },
                                user: E,
                            }),
                            testID: f,
                        }),
                        x.push((0, u.op)({ blockAction: (e) => S(e, n), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: g, unblockAction: (e) => S(e, k), user: E })),
                        x.push({
                            Icon: a.default,
                            onClick: () => {
                                s(), Z();
                            },
                            testID: y,
                            text: w({ screenName: E.screen_name }),
                        });
                    const T = x.map(({ Icon: e, onClick: t, testID: n, text: o }) => ({ text: o, onClick: t, Icon: e, testID: n }));
                    return o.createElement(l.Z, { items: T, onCloseRequested: s });
                });
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => g, w: () => m });
            var o = n(202784),
                r = n(325686),
                l = n(108362),
                s = n(386802),
                i = n(392237),
                a = n(652904),
                c = n(555079),
                d = n(625661),
                u = n(449067),
                h = n(715601);
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: l, centerTitle: s, hideBackButton: i, history: a, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: y, title: C } = this.props,
                                { isModal: w } = this.context;
                            return o.createElement(r.Z, { style: w ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, o.createElement(d.ZP, { backButtonType: n || (w ? "close" : "back"), backLocation: l, centerTitle: s, fixed: !w, hideBackButton: i, history: a, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [w && p.appBarModal, t], subtitle: y, title: C, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: s, documentTitle: i, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        y = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(a.Z, null, o.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: g }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, f && p.rootModal] }, !f && y, o.createElement(l.Z, { isFullWidth: c, isLarge: d, style: [p.container, f && p.containerModal, s] }, f ? o.createElement(h.Z, { style: p.viewport }, y, n) : n), t ? o.createElement(r.Z, { style: [p.bottomBarModal, !f && !b && p.bottomBarMobile] }, o.createElement(l.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = s.Z);
            const p = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(807896),
                r = n(202784),
                l = n(229333),
                s = n(414939),
                i = n(334346);
            const a = ({ accessibilityTitle: e, footer: t = r.createElement(s.Z, null), ...n }) => {
                const a = r.createElement(i.C, (0, o.Z)({}, n, { footer: t }));
                return e ? r.createElement(l.Z, { title: e }, a) : a;
            };
        },
        349035: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(272175);
            const l = (0, n(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), o.createElement(r.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        222718: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                r = n(325686),
                l = n(537392),
                s = n(10656),
                i = n(655352),
                a = n(555079),
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
                    return o.createElement(l.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showBackButtonOnRoot: l, showSubtitleOnRoot: s, showSubtitleOnWideDetail: a, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: h, ...m } = this.props;
                    return o.createElement(o.Fragment, null, (0, i.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(u.Z.Configure, m), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: l, backLocation: s, documentTitle: i, headerless: c, history: h, leftControl: m, middleControl: p, onBackClick: b, rightControl: f, screenType: y, searchBoxOptions: C, secondaryBar: w, showBackButtonOnRoot: _, showSubtitleOnRoot: Z, showSubtitleOnWideDetail: v, showTitleOnRoot: k, subtitle: B, title: E, titleIconCell: x, titleIconCellSize: S, withDetailOpen: T, withSearchBox: P, withTweetButton: I, withWideContainer: D } = this.props,
                        L = "root" === y,
                        F = "secondaryRoot" === y,
                        U = "primaryDetail" === y,
                        A = (U && v) || (L && Z),
                        O = (L && !_) || (U && e),
                        M = (L && !k) || (U && e && !k),
                        R = L ? a.ey : U ? a.vX : void 0,
                        N = o.createElement(r.Z, { style: g.appBarContainer }, o.createElement(d.ZP, { backLocation: s, fixed: !1, hideBackButton: O, history: h, leftControl: m, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: w, style: l, subtitle: A ? B : void 0, title: M ? void 0 : E, titleDomId: R, titleIconCell: x, titleIconCellSize: S, withWideContainer: D })),
                        H = L || (F && T) ? null : o.createElement(u.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: s, documentTitle: i, headerless: c, middleControl: p, onBackClick: b, rightControl: f, searchBoxOptions: C, subtitle: B, title: E, withSearchBox: P, withTweetButton: I });
                    return o.createElement(o.Fragment, null, H, N);
                }
            }
            (b.contextType = h.Z), (b.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const f = (0, c.ZP)(b);
        },
        496364: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(107267),
                l = n(791632),
                s = n(222718);
            const i = (e) => {
                const t = (0, r.useHistory)();
                return (0, l.HD)(t) ? e.children || null : o.createElement(s.Z, e);
            };
        },
        811105: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(202784),
                r = n(325686),
                l = n(731708),
                s = n(392237),
                i = n(111677),
                a = n.n(i);
            const c = a().c174e46e,
                d = a().a39075ff,
                u = s.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                h = (e) => {
                    const { scopes: t, size: n, title: s } = e,
                        [i, a] = o.useState(!1),
                        h = o.useCallback(() => {
                            a((e) => !e);
                        }, []),
                        m = i ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(l.ZP, { style: u.scopesHeader, weight: "bold" }, s),
                        o.createElement(
                            r.Z,
                            { role: "list" },
                            m.map((e) => o.createElement(l.ZP, { color: "subtext2" === n ? "gray700" : void 0, key: e.name, role: "listitem", size: n, style: u.listItem }, e.description)),
                        ),
                        p && i ? o.createElement(l.ZP, { onPress: h, style: u.toggleMoreLink }, c) : null,
                        p && !i ? o.createElement(l.ZP, { onPress: h, style: u.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, n) => {
            n.d(t, { H: () => c, b: () => d });
            var o = n(807896),
                r = n(202784),
                l = n(392237),
                s = n(779610);
            const i = (e) => {
                    const { Icon: t, iconColor: n, testID: o } = e;
                    return r.createElement(t, { style: n ? { color: l.default.theme.colors[n] } : a.thumbnail, testID: o });
                },
                a = l.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: n, testID: l, ...a } = e;
                return r.createElement(s.Z, (0, o.Z)({}, a, { thumbnail: r.createElement(i, { Icon: t, iconColor: n, testID: l }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...n } = e;
                return r.createElement(s.Z, (0, o.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(807896),
                r = n(202784),
                l = n(771099);
            const s = (e) => (t) => r.createElement(l.$6, null, (n) => r.createElement(e, (0, o.Z)({}, t, { isInSidebar: n })));
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                l = n(107267),
                s = n(403556),
                i = n(791632);
            const a = (e) => {
                    const t = (0, l.useHistory)(),
                        { isCompact: n, ...a } = e;
                    return r.createElement(s.Z, (0, o.Z)({}, a, { isCompact: n || (0, i.HD)(t) }));
                },
                c = r.memo(a);
        },
        293988: (e, t, n) => {
            n.d(t, { Z: () => v });
            var o = n(202784),
                r = n(154003),
                l = n(111677),
                s = n.n(l),
                i = n(74514),
                a = n(405303),
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
                f = s().bdba3e1a,
                y = s().c4da7d28,
                C = s().j87c21f4,
                w = s().iebc30ca,
                _ = s().dc740eb2;
            class Z extends o.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? o.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: w }, icon: o.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : o.createElement(r.ZP, { "aria-label": f, hoverLabel: { label: C }, icon: o.createElement(a.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return o.createElement("div", null, this.state.showingPushPrompt ? o.createElement(c.Z, { fullScreen: !0, message: _ }) : null, this._renderButton());
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
            const v = b(Z);
        },
        583335: (e, t, n) => {
            n.d(t, { Z: () => C });
            var o = n(202784),
                r = n(154003),
                l = n(40904),
                s = n(391366),
                i = n(847607),
                a = n(775412),
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
                            const { addToast: e, createLocalApiErrorHandler: t, mute: n, unmute: o, user: r, userId: l } = this.props;
                            return r
                                ? r.muting
                                    ? o(l).then((t) => {
                                          e({ text: (0, i.X6)(r.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : n(l).then((t) => {
                                          e({ text: (0, i.FK)(r.screen_name) }), this._scribeAction("mute_user");
                                      }, t(a.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.muting ? l.default : s.default,
                        a = e.muting ? (0, i.PY)(e.screen_name) : (0, i.Aq)(e.screen_name),
                        c = e.muting ? i.cm : i.GS;
                    return o.createElement(r.ZP, { "aria-label": a, hoverLabel: { label: c }, icon: o.createElement(n, null), onPress: this._handleMutOrUnmuteToggle, type: t });
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
                l = n(108362),
                s = n(731708),
                i = n(154003),
                a = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(349035);
            const h = "error-detail",
                m = d().e49537c2,
                p = d().a9ae1e78;
            class g extends o.PureComponent {
                render() {
                    return o.createElement(r.Z, { testID: h }, o.createElement(u.Z, null), o.createElement(l.Z, { style: b.root }, o.createElement(s.ZP, { align: "center", color: "gray700", style: b.retryText }, m), o.createElement(i.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const b = a.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(500002),
                l = n(668214),
                s = n(997174),
                i = n(118823);
            const a = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
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
                            location: { pathname: l, search: s },
                            locationKey: i,
                        } = e;
                    let a = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (a = !0));
                    const c = r || i;
                    ((c && r !== i) || (!c && n !== l) || o !== s || a) && this._performPageUpdates(this.props);
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
            const d = (0, r.ZP)(a(c));
        },
        301410: (e, t, n) => {
            n.d(t, { i: () => p.ZP, z: () => y });
            var o = n(202784),
                r = n(928123),
                l = n.n(r),
                s = n(72845),
                i = n.n(s),
                a = n(57074),
                c = n.n(a),
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
                    const o = l()(e, t);
                    return n({ fetchStatus: p.ZP.LOADED, data: o, error: null, retry: d.Z });
                },
                y = (e, t) =>
                    function ({ fetchPolicy: n = "store-or-network", render: r, variables: l }) {
                        const [s, a] = i()(e),
                            d = (0, h.n7)(t.errorConfig.context),
                            u = c()(l),
                            m = o.useCallback(() => {
                                a(u, { fetchPolicy: "network-only" });
                            }, [a, u]);
                        return (
                            o.useLayoutEffect(() => {
                                a(u, { fetchPolicy: n });
                            }, [n, a, u]),
                            s
                                ? o.createElement(
                                      o.Suspense,
                                      { fallback: o.createElement(g, { render: r }) },
                                      o.createElement(b, { errorHandler: d(t.errorConfig.options || {}), key: s.fetchKey, retry: m }, (t, n) => (t ? r({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: n }) : o.createElement(f, { query: e, queryRef: s, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, n) => {
            n.d(t, { Z: () => _ });
            var o = n(202784),
                r = n(325686),
                l = n(731708),
                s = n(855488),
                i = n(420412),
                a = n(844685),
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
                    return o.createElement(l.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: w.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: n, validationError: l, viewerUser: c } = this.props;
                    if (!c) return null;
                    const d = !(n === c.screen_name || t || !l);
                    return o.createElement(
                        r.Z,
                        null,
                        o.createElement(s.Z, { autoComplete: "off", autoCorrect: !1, errorText: l, invalid: d, label: f, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        o.createElement(i.Z, null),
                        o.createElement(a.Z, { text: y }),
                        o.createElement(
                            r.Z,
                            { style: w.container },
                            e.map((e, t) => this._renderOption(e, t)),
                        ),
                    );
                }
            }
            const w = c.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, altOptionText: { display: "block", paddingVertical: e.spaces.space12 } })),
                _ = b(C);
        },
        733487: (e, t, n) => {
            n.d(t, { Z: () => k });
            var o = n(202784),
                r = n(154003),
                l = n(111677),
                s = n.n(l),
                i = n(40904),
                a = n(391366),
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
                C = s().e67b2d65,
                w = s().f05597b3,
                _ = s().gde6b425,
                Z = s().e308019b;
            class v extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: n, unmuteDMUser: o, user: r, userId: l } = this.props;
                            return r
                                ? r.dm_muting
                                    ? o(l).then((t) => {
                                          e({ text: Z({ name: r.name }) }), this._scribeAction("unmute_user");
                                      }, t(d.G))
                                    : n(l).then((t) => {
                                          e({ text: _({ name: r.name }) }), this._scribeAction("mute_user");
                                      }, t(c.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        n = e.dm_muting ? i.default : a.default,
                        l = e.dm_muting ? w({ screenName: e.screen_name }) : C({ screenName: e.screen_name });
                    return o.createElement(r.ZP, { "aria-label": l, icon: o.createElement(n, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: n } = this.props;
                    t.scribe({ action: e, data: { items: n ? [u.Z.getUserItem(n)] : [] } });
                }
            }
            const k = y(v);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.76c3e10a.js.map
