"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsInternals-9f4db315"],
    {
        121363: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(506899),
                r = o(676145),
                l = o(588960),
                i = o.n(l),
                a = o(318752);
            const s = (e, t, o) => {
                    const n = (0, a.Z)(e, t, o);
                    if (e && "string" == typeof n.vcard) {
                        const e = i().parse(n.vcard),
                            t = (e && e[0]) || null;
                        return { ...n, vcard: t };
                    }
                    return n;
                },
                c = new n.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, r.Z)(e.id) ? e.id : e.id_str), processStrategy: s });
        },
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(466999),
                l = o(325686),
                i = o(392237),
                a = o(674132);
            const s = o.n(a)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = s({ title: t });
                    return n.createElement(l.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), n.createElement(l.Z, { "aria-label": o }, e));
                }
            }
            const u = d;
        },
        917009: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(154003),
                l = o(674132),
                i = o.n(l),
                a = o(379327);
            const s = i().af40a8e0,
                c = (e) => {
                    const { "aria-label": t, link: o } = e;
                    return n.createElement(r.ZP, { "aria-label": t, hoverLabel: { label: s }, icon: n.createElement(a.default, null), link: o, pullRight: !0, type: "primaryText" });
                };
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                r = o(614983),
                l = o.n(r),
                i = o(325686),
                a = o(370006),
                s = o(786998),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: l, isFullWidth: i, isLarge: c, leftControl: d, middleControl: h, position: m, rightControl: p, secondaryBar: b, style: C, subtitle: y, title: f, titleDomId: k, titleIconCell: B, titleIconCellSize: g, withBackground: Z, withWideContainer: w } = this.props,
                        { isModal: x } = this.context,
                        E = l ? d : n.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        I = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!Z, x, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: E, middleControl: h, position: u(m, x, r), rightControl: p, style: C, subtitle: y, title: f, titleDomId: k, titleIconCell: B, titleIconCellSize: g, withBackground: I, withWideContainer: w }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        947135: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(242454),
                l = o(190286);
            class i extends n.Component {
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
                    const { align: e, color: t, confirmationSheetConfirmButtonLabel: o, confirmationSheetConfirmButtonType: i, confirmationSheetHeadline: a, confirmationSheetText: s, label: c } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(r.Z, { align: e, color: t, label: c, onPress: this._handleClick }), this.state.showConfirmation ? n.createElement(l.Z, { confirmButtonLabel: o, confirmButtonType: i, headline: a, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: s }) : null);
                }
            }
            i.defaultProps = { color: "red500", align: "center" };
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(325686),
                l = o(392237);
            class i extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: a.root });
                }
            }
            const a = l.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = i;
        },
        333241: (e, t, o) => {
            o.d(t, { Z: () => Z });
            o(136728);
            var n = o(202784),
                r = o(638236),
                l = o(811176),
                i = o(674132),
                a = o.n(i),
                s = o(415506),
                c = o(516951),
                d = o(443781),
                u = o(376293),
                h = o(847607),
                m = o(417714),
                p = o(988823);
            const b = "block",
                C = "mute",
                y = "removeFollower",
                f = "report",
                k = "share",
                B = a().j7bb1a43,
                g = a().hef5960c,
                Z = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: o, onClose: i, onMute: a, onRemoveFollower: p, onReportUser: Z, onShare: w, onUnblock: x, onUnmute: E, user: I } = e,
                        S = [],
                        v = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...l } = t;
                                n({ confirmButtonLabel: e, ...l })
                                    .then(o, c.Z)
                                    .finally(r);
                            } else o();
                        };
                    !!window.navigator.share &&
                        !I.protected &&
                        !I.blocking &&
                        !I.blocked_by &&
                        S.push({
                            Icon: r.Z,
                            onClick: () => {
                                i(), w();
                            },
                            testID: k,
                            text: g,
                        });
                    !I.blocking &&
                        S.push({
                            ...(0, h.N1)(
                                I,
                                () => {
                                    i(), a();
                                },
                                () => {
                                    i(), E();
                                },
                            ),
                            testID: C,
                        });
                    I.followed_by &&
                        S.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    v(e, p);
                                },
                                user: I,
                            }),
                            testID: y,
                        }),
                        S.push((0, u.op)({ blockAction: (e) => v(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: u.SC.FOLLOWERS_LIST, testID: b, unblockAction: (e) => v(e, x), user: I })),
                        S.push({
                            Icon: s.default,
                            onClick: () => {
                                i(), Z();
                            },
                            testID: f,
                            text: B({ screenName: I.screen_name }),
                        });
                    const L = S.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
                    return n.createElement(l.Z, { items: L, onCloseRequested: i });
                });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => m });
            var n = o(202784),
                r = o(325686),
                l = o(108362),
                i = o(386802),
                a = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                h = o(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: l, centerTitle: i, hideBackButton: a, history: s, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: b, rightControl: C, secondaryBar: y, subtitle: f, title: k } = this.props,
                                { isModal: B } = this.context;
                            return n.createElement(r.Z, { style: B ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (B ? "close" : "back"), backLocation: l, centerTitle: i, fixed: !B, hideBackButton: a, history: s, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: b, ref: e, rightControl: C, secondaryBar: y, style: [B && p.appBarModal, t], subtitle: f, title: k, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: m, title: b, withoutBottomBarMobile: C } = this.props,
                        { isModal: y } = this.context,
                        f = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(u.Z.Configure, { documentTitle: a, headerless: !0, title: b }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, y && p.rootModal] }, !y && f, n.createElement(l.Z, { isFullWidth: c, isLarge: d, style: [p.container, y && p.containerModal, i] }, y ? n.createElement(h.Z, { style: p.viewport }, f, o) : o), t ? n.createElement(r.Z, { style: [p.bottomBarModal, !y && !C && p.bottomBarMobile] }, n.createElement(l.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const p = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(807896),
                r = o(202784),
                l = o(229333),
                i = o(414939),
                a = o(334346);
            const s = ({ accessibilityTitle: e, footer: t = r.createElement(i.Z, null), ...o }) => {
                const s = r.createElement(a.C, (0, n.Z)({}, o, { footer: t }));
                return e ? r.createElement(l.Z, { title: e }, s) : s;
            };
        },
        253493: (e, t, o) => {
            o.d(t, { Z: () => B });
            var n = o(202784),
                r = o(107267),
                l = o(791632),
                i = o(325686),
                a = o(537392),
                s = o(10656),
                c = o(655352),
                d = o(555079),
                u = o(500002),
                h = o(625661),
                m = o(449067),
                p = o(655543),
                b = o(715601),
                C = o(392237);
            const y = C.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...C.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class f extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(i.Z, { style: y.fill }, n.createElement(b.Z, { style: y.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(a.ZP, null, ({ containerWidth: e }) => (s.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: o, screenType: r, showSubtitleOnRoot: l, showSubtitleOnWideDetail: i, withBottomBorder: a, withDetailOpen: s, ...d } = this.props;
                    return n.createElement(n.Fragment, null, (0, c.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(m.Z.Configure, d), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: o, appBarStyle: r, backLocation: l, documentTitle: a, headerless: s, history: c, leftControl: u, middleControl: p, onBackClick: b, rightControl: C, screenType: f, searchBoxOptions: k, secondaryBar: B, showSubtitleOnRoot: g, showSubtitleOnWideDetail: Z, subtitle: w, title: x, titleIconCell: E, titleIconCellSize: I, withDetailOpen: S, withSearchBox: v, withTweetButton: L, withWideContainer: _ } = this.props,
                        T = "root" === f,
                        D = "secondaryRoot" === f,
                        F = "primaryDetail" === f,
                        P = (F && Z) || (T && g),
                        M = T || (F && e),
                        R = T ? d.ey : F ? d.vX : void 0,
                        W = n.createElement(i.Z, { style: y.appBarContainer }, n.createElement(h.ZP, { backLocation: l, fixed: !1, hideBackButton: M, history: c, leftControl: u, middleControl: p, onBackClick: b, rightControl: C, secondaryBar: B, style: r, subtitle: P ? w : void 0, title: x, titleDomId: R, titleIconCell: E, titleIconCellSize: I, withWideContainer: _ })),
                        O = T || (D && S) ? null : n.createElement(m.Z.Configure, { SideNavButton: t, TabBar: o, backLocation: l, documentTitle: a, headerless: s, middleControl: p, onBackClick: b, rightControl: C, searchBoxOptions: k, subtitle: w, title: x, withSearchBox: v, withTweetButton: L });
                    return n.createElement(n.Fragment, null, O, W);
                }
            }
            (f.contextType = p.Z), (f.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0 });
            const k = (0, u.ZP)(f),
                B = (e) => {
                    const t = (0, r.useHistory)();
                    return (0, l.HD)(t) ? e.children || null : n.createElement(k, e);
                };
        },
        811105: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(202784),
                r = o(325686),
                l = o(731708),
                i = o(392237),
                a = o(674132),
                s = o.n(a);
            const c = s().c174e46e,
                d = s().a39075ff,
                u = i.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                h = (e) => {
                    const { scopes: t, size: o, title: i } = e,
                        [a, s] = n.useState(!1),
                        h = n.useCallback(() => {
                            s((e) => !e);
                        }, []),
                        m = a ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(l.ZP, { style: u.scopesHeader, weight: "bold" }, i),
                        n.createElement(
                            r.Z,
                            { role: "list" },
                            m.map((e) => n.createElement(l.ZP, { color: "subtext2" === o ? "gray700" : void 0, key: e.name, role: "listitem", size: o, style: u.listItem }, e.description)),
                        ),
                        p && a ? n.createElement(l.ZP, { onPress: h, style: u.toggleMoreLink }, c) : null,
                        p && !a ? n.createElement(l.ZP, { onPress: h, style: u.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        534763: (e, t, o) => {
            o.d(t, { H: () => c, b: () => d });
            var n = o(807896),
                r = o(202784),
                l = o(392237),
                i = o(779610);
            const a = (e) => {
                    const { Icon: t, iconColor: o, testID: n } = e;
                    return r.createElement(t, { style: o ? { color: l.default.theme.colors[o] } : s.thumbnail, testID: n });
                },
                s = l.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: o, testID: l, ...s } = e;
                return r.createElement(i.Z, (0, n.Z)({}, s, { thumbnail: r.createElement(a, { Icon: t, iconColor: o, testID: l }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...o } = e;
                return r.createElement(i.Z, (0, n.Z)({}, o, { link: { external: !0, pathname: e.link } }));
            }
        },
        864479: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(807896),
                r = o(202784),
                l = o(771099);
            const i = (e) => (t) => r.createElement(l.$6, null, (o) => r.createElement(e, (0, n.Z)({}, t, { isInSidebar: o })));
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                l = o(107267),
                i = o(403556),
                a = o(791632);
            const s = (e) => {
                    const t = (0, l.useHistory)();
                    return r.createElement(i.Z, (0, n.Z)({}, e, { isCompact: (0, a.HD)(t) }));
                },
                c = r.memo(s);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.4b3ee72a.js.map
