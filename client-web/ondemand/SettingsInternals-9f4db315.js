"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-9f4db315"],
    {
        121363: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(506899),
                r = o(676145),
                l = o(588960),
                s = o.n(l),
                i = o(318752);
            const a = (e, t, o) => {
                    const n = (0, i.Z)(e, t, o);
                    if (e && "string" == typeof n.vcard) {
                        const e = s().parse(n.vcard),
                            t = (e && e[0]) || null;
                        return { ...n, vcard: t };
                    }
                    return n;
                },
                c = new n.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, r.Z)(e.id) ? e.id : e.id_str), processStrategy: a });
        },
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(466999),
                l = o(325686),
                s = o(392237),
                i = o(111677);
            const a = o.n(i)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = a({ title: t });
                    return n.createElement(l.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: s.default.visuallyHidden }, t), n.createElement(l.Z, { "aria-label": o }, e));
                }
            }
            const u = d;
        },
        917009: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(154003),
                l = o(111677),
                s = o.n(l),
                i = o(379327);
            const a = s().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: o } = e;
                    return n.createElement(r.ZP, { "aria-label": t, hoverLabel: { label: a }, icon: n.createElement(i.default, null), link: o, pullRight: !0, type: "primaryText" });
                };
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                r = o(614983),
                l = o.n(r),
                s = o(325686),
                i = o(370006),
                a = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: l, isFullWidth: s, isLarge: c, leftControl: d, middleControl: h, position: m, rightControl: p, secondaryBar: g, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: w, titleIconCellSize: Z, withBackground: _, withWideContainer: v } = this.props,
                        { isModal: B } = this.context,
                        E = l ? d : n.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        k = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!_, B, !!g);
                    return n.createElement(n.Fragment, null, n.createElement(a.Z, { centerTitle: t, centeredLogo: o, isFullWidth: s, isLarge: c, leftControl: E, middleControl: h, position: u(m, B, r), rightControl: p, style: b, subtitle: f, title: y, titleDomId: C, titleIconCell: w, titleIconCellSize: Z, withBackground: k, withWideContainer: v }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(s.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(242454),
                l = o(190286);
            class s extends n.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: o, confirmationSheetConfirmButtonType: s, confirmationSheetHeadline: i, confirmationSheetText: a, label: c } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(r.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? n.createElement(l.Z, { confirmButtonLabel: o, confirmButtonType: s, headline: i, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: a }) : null);
                }
            }
            s.defaultProps = { color: "red500", align: "center" };
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                r = o(325686),
                l = o(392237);
            class s extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: i.root });
                }
            }
            const i = l.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                a = s;
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => Z });
            o(136728);
            var n = o(202784),
                r = o(638236),
                l = o(811176),
                s = o(111677),
                i = o.n(s),
                a = o(415506),
                c = o(516951),
                d = o(376293),
                u = o(847607),
                h = o(417714),
                m = o(988823);
            const p = "block",
                g = "mute",
                b = "removeFollower",
                f = "report",
                y = "share",
                C = i().j7bb1a43,
                w = i().g00b4c55,
                Z = (0, m.M)((e) => {
                    const { onBlock: t, onClose: o, onMute: s, onRemoveFollower: i, onReportUser: m, onShare: Z, onUnblock: _, onUnmute: v, user: B } = e,
                        E = [],
                        k = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...l } = t;
                                n({ confirmButtonLabel: e, ...l })
                                    .then(o, c.Z)
                                    .finally(r);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !B.protected &&
                        !B.blocking &&
                        !B.blocked_by &&
                        E.push({
                            Icon: r.Z,
                            onClick: () => {
                                o(), Z();
                            },
                            testID: y,
                            text: w({ screenName: B.screen_name }),
                        });
                    !B.blocking &&
                        E.push({
                            ...(0, u.N1)(
                                B,
                                () => {
                                    o(), s();
                                },
                                () => {
                                    o(), v();
                                },
                            ),
                            testID: g,
                        });
                    B.followed_by &&
                        E.push({
                            ...(0, h.l)({
                                removeFollowerAction: (e) => {
                                    k(e, i);
                                },
                                user: B,
                            }),
                            testID: b,
                        }),
                        E.push((0, d.op)({ blockAction: (e) => k(e, t), source: d.SC.FOLLOWERS_LIST, testID: p, unblockAction: (e) => k(e, _), user: B })),
                        E.push({
                            Icon: a.default,
                            onClick: () => {
                                o(), m();
                            },
                            testID: f,
                            text: C({ screenName: B.screen_name }),
                        });
                    const x = E.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(l.Z, { items: x, onCloseRequested: o });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => m });
            var n = o(202784),
                r = o(325686),
                l = o(108362),
                s = o(386802),
                i = o(392237),
                a = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                h = o(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: l, centerTitle: s, hideBackButton: i, history: a, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: y, title: C } = this.props,
                                { isModal: w } = this.context;
                            return n.createElement(r.Z, { style: w ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (w ? "close" : "back"), backLocation: l, centerTitle: s, fixed: !w, hideBackButton: i, history: a, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [w && p.appBarModal, t], subtitle: y, title: C, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: s, documentTitle: i, isFullWidth: c, isLarge: d, renderHeader: m, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        y = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(a.Z, null, n.createElement(u.Z.Configure, { documentTitle: i, headerless: !0, title: g }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, f && p.rootModal] }, !f && y, n.createElement(l.Z, { isFullWidth: c, isLarge: d, style: [p.container, f && p.containerModal, s] }, f ? n.createElement(h.Z, { style: p.viewport }, y, o) : o), t ? n.createElement(r.Z, { style: [p.bottomBarModal, !f && !b && p.bottomBarMobile] }, n.createElement(l.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = s.Z);
            const p = i.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: i.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = m;
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(807896),
                r = o(202784),
                l = o(229333),
                s = o(414939),
                i = o(334346);
            const a = ({ accessibilityTitle: e, footer: t = r.createElement(s.Z, null), ...o }) => {
                const a = r.createElement(i.C, (0, n.Z)({}, o, { footer: t }));
                return e ? r.createElement(l.Z, { title: e }, a) : a;
            };
        },
        349035: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(272175);
            const l = (0, o(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(r.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        222718: (e, t, o) => {
            o.d(t, { Z: () => f });
            var n = o(202784),
                r = o(325686),
                l = o(537392),
                s = o(10656),
                i = o(655352),
                a = o(555079),
                c = o(500002),
                d = o(625661),
                u = o(449067),
                h = o(655543),
                m = o(715601),
                p = o(392237);
            const g = p.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...p.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class b extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(r.Z, { style: g.fill }, n.createElement(m.Z, { style: g.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(l.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: o, screenType: r, showBackButtonOnRoot: l, showSubtitleOnRoot: s, showSubtitleOnWideDetail: a, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: h, ...m } = this.props;
                    return n.createElement(n.Fragment, null, (0, i.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(u.Z.Configure, m), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: o, appBarStyle: l, backLocation: s, documentTitle: i, headerless: c, history: h, leftControl: m, middleControl: p, onBackClick: b, rightControl: f, screenType: y, searchBoxOptions: C, secondaryBar: w, showBackButtonOnRoot: Z, showSubtitleOnRoot: _, showSubtitleOnWideDetail: v, showTitleOnRoot: B, subtitle: E, title: k, titleIconCell: x, titleIconCellSize: S, withDetailOpen: T, withSearchBox: P, withTweetButton: I, withWideContainer: D } = this.props,
                        L = "root" === y,
                        F = "secondaryRoot" === y,
                        U = "primaryDetail" === y,
                        A = (U && v) || (L && _),
                        O = (L && !Z) || (U && e),
                        M = (L && !B) || (U && e && !B),
                        R = L ? a.ey : U ? a.vX : void 0,
                        N = n.createElement(r.Z, { style: g.appBarContainer }, n.createElement(d.ZP, { backLocation: s, fixed: !1, hideBackButton: O, history: h, leftControl: m, middleControl: p, onBackClick: b, rightControl: f, secondaryBar: w, style: l, subtitle: A ? E : void 0, title: M ? void 0 : k, titleDomId: R, titleIconCell: x, titleIconCellSize: S, withWideContainer: D })),
                        H = L || (F && T) ? null : n.createElement(u.Z.Configure, { SideNavButton: t, TabBar: o, backLocation: s, documentTitle: i, headerless: c, middleControl: p, onBackClick: b, rightControl: f, searchBoxOptions: C, subtitle: E, title: k, withSearchBox: P, withTweetButton: I });
                    return n.createElement(n.Fragment, null, H, N);
                }
            }
            (b.contextType = h.Z), (b.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const f = (0, c.ZP)(b);
        },
        496364: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(107267),
                l = o(791632),
                s = o(222718);
            const i = (e) => {
                const t = (0, r.useHistory)();
                return (0, l.HD)(t) ? e.children || null : n.createElement(s.Z, e);
            };
        },
        811105: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(202784),
                r = o(325686),
                l = o(731708),
                s = o(392237),
                i = o(111677),
                a = o.n(i);
            const c = a().c174e46e,
                d = a().a39075ff,
                u = s.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                h = (e) => {
                    const { scopes: t, size: o, title: s } = e,
                        [i, a] = n.useState(!1),
                        h = n.useCallback(() => {
                            a((e) => !e);
                        }, []),
                        m = i ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(l.ZP, { style: u.scopesHeader, weight: "bold" }, s),
                        n.createElement(
                            r.Z,
                            { role: "list" },
                            m.map((e) => n.createElement(l.ZP, { color: "subtext2" === o ? "gray700" : void 0, key: e.name, role: "listitem", size: o, style: u.listItem }, e.description)),
                        ),
                        p && i ? n.createElement(l.ZP, { onPress: h, style: u.toggleMoreLink }, c) : null,
                        p && !i ? n.createElement(l.ZP, { onPress: h, style: u.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, o) => {
            o.d(t, { H: () => c, b: () => d });
            var n = o(807896),
                r = o(202784),
                l = o(392237),
                s = o(779610);
            const i = (e) => {
                    const { Icon: t, iconColor: o, testID: n } = e;
                    return r.createElement(t, { style: o ? { color: l.default.theme.colors[o] } : a.thumbnail, testID: n });
                },
                a = l.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: o, testID: l, ...a } = e;
                return r.createElement(s.Z, (0, n.Z)({}, a, { thumbnail: r.createElement(i, { Icon: t, iconColor: o, testID: l }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...o } = e;
                return r.createElement(s.Z, (0, n.Z)({}, o, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(807896),
                r = o(202784),
                l = o(771099);
            const s = (e) => (t) => r.createElement(l.$6, null, (o) => r.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                l = o(107267),
                s = o(403556),
                i = o(791632);
            const a = (e) => {
                    const t = (0, l.useHistory)(),
                        { isCompact: o, ...a } = e;
                    return r.createElement(s.Z, (0, n.Z)({}, a, { isCompact: o || (0, i.HD)(t) }));
                },
                c = r.memo(a);
        },
        293988: (e, t, o) => {
            o.d(t, { Z: () => v });
            var n = o(202784),
                r = o(154003),
                l = o(111677),
                s = o.n(l),
                i = o(74514),
                a = o(405303),
                c = o(684511),
                d = o(860174),
                u = o(71620),
                h = o(668214),
                m = o(257166),
                p = o(919022);
            const g = (e, t) => !(!t.allowPromptForPush || !m.selectShouldPromptBrowserPush(e)),
                b = (0, h.Z)()
                    .propsFromState(() => ({ shouldPromptPush: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = s().bdba3e1a,
                y = s().c4da7d28,
                C = s().j87c21f4,
                w = s().iebc30ca,
                Z = s().dc740eb2;
            class _ extends n.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? n.createElement(r.ZP, { "aria-label": y, hoverLabel: { label: w }, icon: n.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : n.createElement(r.ZP, { "aria-label": f, hoverLabel: { label: C }, icon: n.createElement(a.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return n.createElement("div", null, this.state.showingPushPrompt ? n.createElement(c.Z, { fullScreen: !0, message: Z }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: o, userId: n } = this.props;
                    return o(n, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = b(_);
        },
        583335: (e, t, o) => {
            o.d(t, { Z: () => C });
            var n = o(202784),
                r = o(154003),
                l = o(40904),
                s = o(391366),
                i = o(847607),
                a = o(775412),
                c = o(837731),
                d = o(942893),
                u = o(71620),
                h = o(668214),
                m = o(629196),
                p = o(601576),
                g = o(919022);
            const b = (e, t) => g.ZP.select(e, t.userId),
                f = (0, h.Z)()
                    .propsFromState(() => ({ user: b }))
                    .propsFromActions(() => ({ addToast: p.fz, createLocalApiErrorHandler: (0, u.zr)("MUTE_BUTTON_CONTAINER"), mute: m.r, unmute: g.ZP.unmute }))
                    .withAnalytics();
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleMutOrUnmuteToggle = () => {
                            this._handleMuteOrUnmuteToggleHelper();
                        }),
                        (this._handleMuteOrUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: o, unmute: n, user: r, userId: l } = this.props;
                            return r
                                ? r.muting
                                    ? n(l).then((t) => {
                                          e({ text: (0, i.X6)(r.screen_name) }), this._scribeAction("unmute_user");
                                      }, t(c.G))
                                    : o(l).then((t) => {
                                          e({ text: (0, i.FK)(r.screen_name) }), this._scribeAction("mute_user");
                                      }, t(a.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.muting ? "destructiveOutlined" : "brandOutlined",
                        o = e.muting ? l.default : s.default,
                        a = e.muting ? i.cm : i.GS,
                        c = e.muting ? i.cm : i.GS;
                    return n.createElement(r.ZP, { "aria-label": a, hoverLabel: { label: c }, icon: n.createElement(o, null), onPress: this._handleMutOrUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: o } = this.props;
                    t.scribe({ action: e, data: { items: o ? [d.Z.getUserItem(o)] : [] } });
                }
            }
            const C = f(y);
        },
        56851: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                r = o(420740),
                l = o(108362),
                s = o(731708),
                i = o(154003),
                a = o(392237),
                c = o(111677),
                d = o.n(c),
                u = o(349035);
            const h = "error-detail",
                m = d().e49537c2,
                p = d().a9ae1e78;
            class g extends n.PureComponent {
                render() {
                    return n.createElement(r.Z, { testID: h }, n.createElement(u.Z, null), n.createElement(l.Z, { style: b.root }, n.createElement(s.ZP, { align: "center", color: "gray700", style: b.retryText }, m), n.createElement(i.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const b = a.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                l = o(668214),
                s = o(997174),
                i = o(118823);
            const a = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: l, search: s },
                            locationKey: i,
                        } = e;
                    let a = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (a = !0));
                    const c = r || i;
                    ((c && r !== i) || (!c && o !== l) || n !== s || a) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(a(c));
        },
        301410: (e, t, o) => {
            o.d(t, { i: () => p.ZP, z: () => y });
            var n = o(202784),
                r = o(928123),
                l = o.n(r),
                s = o(72845),
                i = o.n(s),
                a = o(57074),
                c = o.n(a),
                d = o(516951),
                u = o(88656),
                h = o(71620),
                m = o(163889),
                p = o(312771);
            const g = ({ render: e }) => e({ fetchStatus: p.ZP.LOADING, data: null, error: null, retry: d.Z });
            class b extends n.Component {
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
            const f = ({ query: e, queryRef: t, render: o }) => {
                    const n = l()(e, t);
                    return o({ fetchStatus: p.ZP.LOADED, data: n, error: null, retry: d.Z });
                },
                y = (e, t) =>
                    function ({ fetchPolicy: o = "store-or-network", render: r, variables: l }) {
                        const [s, a] = i()(e),
                            d = (0, h.n7)(t.errorConfig.context),
                            u = c()(l),
                            m = n.useCallback(() => {
                                a(u, { fetchPolicy: "network-only" });
                            }, [a, u]);
                        return (
                            n.useLayoutEffect(() => {
                                a(u, { fetchPolicy: o });
                            }, [o, a, u]),
                            s
                                ? n.createElement(
                                      n.Suspense,
                                      { fallback: n.createElement(g, { render: r }) },
                                      n.createElement(b, { errorHandler: d(t.errorConfig.options || {}), key: s.fetchKey, retry: m }, (t, o) => (t ? r({ fetchStatus: p.ZP.FAILED, error: t, data: null, retry: o }) : n.createElement(f, { query: e, queryRef: s, render: r }))),
                                  )
                                : null
                        );
                    };
        },
        900128: (e, t, o) => {
            o.d(t, { Z: () => Z });
            var n = o(202784),
                r = o(325686),
                l = o(731708),
                s = o(855488),
                i = o(420412),
                a = o(844685),
                c = o(392237),
                d = o(111677),
                u = o.n(d),
                h = o(666536),
                m = o(668214),
                p = o(395042),
                g = o(919022);
            const b = (0, m.Z)()
                    .propsFromState(() => ({ viewerUser: g.ZP.selectViewerUser, usernameData: p.El }))
                    .adjustStateProps(({ usernameData: e, viewerUser: t }) => {
                        const o = (e.suggestions ? e.suggestions.map((e) => e.suggestion) : []).filter((t) => t !== e.username),
                            n = t?.screen_name;
                        return { viewerUser: t, suggestions: o, valid: (!!n && n.toLowerCase() === e.username?.toLowerCase()) || e.valid, validatedScreenName: e.username, validationError: e.desc };
                    })
                    .propsFromActions(() => ({ fetchUsernameAvailability: p.HR })),
                f = u().d1f6d336,
                y = u().de65c756;
            class C extends n.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUsernameStatus = (e) => {
                            const { fetchUsernameAvailability: t, viewerUser: o } = this.props;
                            o && t({ email: o.email && o.email[0] && o.email[0].address, full_name: o.name, suggest: !0, username: e });
                        }),
                        (this._handleTypedFieldChange = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            this._fetchUsernameStatusDebounced(e.target.value), this.setState({ value: e.target.value }), t(e.target.value);
                        }),
                        (this._handleItemSelect = (e) => {
                            const { onScreenNameChanged: t } = this.props;
                            if (e.target instanceof Node) {
                                const o = e.target.textContent;
                                this.setState({ value: o }), t(o);
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
                    return n.createElement(l.ZP, { color: "link", key: t, onPress: this._handleItemSelect, role: "button", style: w.altOptionText, withInteractiveStyling: !0 }, e);
                }
                render() {
                    const { suggestions: e, valid: t, validatedScreenName: o, validationError: l, viewerUser: c } = this.props;
                    if (!c) return null;
                    const d = !(o === c.screen_name || t || !l);
                    return n.createElement(
                        r.Z,
                        null,
                        n.createElement(s.Z, { autoComplete: "off", autoCorrect: !1, errorText: l, invalid: d, label: f, name: "typedScreenName", onChange: this._handleTypedFieldChange, spellCheck: "false", value: this.state.value }),
                        n.createElement(i.Z, null),
                        n.createElement(a.Z, { text: y }),
                        n.createElement(
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
        733487: (e, t, o) => {
            o.d(t, { Z: () => B });
            var n = o(202784),
                r = o(154003),
                l = o(111677),
                s = o.n(l),
                i = o(40904),
                a = o(391366),
                c = o(775412),
                d = o(837731),
                u = o(942893),
                h = o(71620),
                m = o(668214),
                p = o(296196),
                g = o(601576),
                b = o(919022);
            const f = (e, t) => b.ZP.select(e, t.userId),
                y = (0, m.Z)()
                    .propsFromState(() => ({ user: f }))
                    .propsFromActions(() => ({ addToast: g.fz, createLocalApiErrorHandler: (0, h.zr)("MUTE_DM_BUTTON_CONTAINER"), muteDMUser: p.muteDMUser, unmuteDMUser: p.unmuteDMUser }))
                    .withAnalytics(),
                C = s().hb568af4,
                w = s().bb1cbeb6,
                Z = s().gde6b425,
                _ = s().e308019b;
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleUnmuteToggle = () => {
                            this._handleUnmuteToggleHelper();
                        }),
                        (this._handleUnmuteToggleHelper = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, muteDMUser: o, unmuteDMUser: n, user: r, userId: l } = this.props;
                            return r
                                ? r.dm_muting
                                    ? n(l).then((t) => {
                                          e({ text: _({ name: r.name }) }), this._scribeAction("unmute_user");
                                      }, t(d.G))
                                    : o(l).then((t) => {
                                          e({ text: Z({ name: r.name }) }), this._scribeAction("mute_user");
                                      }, t(c.W))
                                : Promise.resolve();
                        });
                }
                render() {
                    const { user: e } = this.props;
                    if (!e) return null;
                    const t = e.dm_muting ? "destructiveOutlined" : "brandOutlined",
                        o = e.dm_muting ? i.default : a.default,
                        l = e.dm_muting ? w : C;
                    return n.createElement(r.ZP, { "aria-label": l, icon: n.createElement(o, null), onPress: this._handleUnmuteToggle, type: t });
                }
                _scribeAction(e) {
                    const { analytics: t, user: o } = this.props;
                    t.scribe({ action: e, data: { items: o ? [u.Z.getUserItem(o)] : [] } });
                }
            }
            const B = y(v);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.90f5c03a.js.map
