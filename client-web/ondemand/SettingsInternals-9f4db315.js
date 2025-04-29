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
            o.d(t, { Z: () => h });
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
            const h = d;
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
            o.d(t, { ZP: () => u });
            var n = o(202784),
                r = o(614983),
                l = o.n(r),
                i = o(325686),
                a = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function h(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: l, isFullWidth: i, isLarge: c, leftControl: d, middleControl: u, position: m, rightControl: p, secondaryBar: b, style: f, subtitle: k, title: C, titleDomId: g, titleIconCell: y, titleIconCellSize: B, withBackground: Z, withWideContainer: E } = this.props,
                        { isModal: x } = this.context,
                        w = l ? d : n.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        I = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!Z, x, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: w, middleControl: u, position: h(m, x, r), rightControl: p, style: f, subtitle: k, title: C, titleDomId: g, titleIconCell: y, titleIconCellSize: B, withBackground: I, withWideContainer: E }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
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
                h = o(376293),
                u = o(847607),
                m = o(417714),
                p = o(988823);
            const b = "block",
                f = "mute",
                k = "removeFollower",
                C = "report",
                g = "share",
                y = a().j7bb1a43,
                B = a().hef5960c,
                Z = (0, p.M)((e) => {
                    const { featureSwitches: t } = (0, d.QZ)(),
                        { onBlock: o, onClose: i, onMute: a, onRemoveFollower: p, onReportUser: Z, onShare: E, onUnblock: x, onUnmute: w, user: I } = e,
                        _ = [],
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
                        _.push({
                            Icon: r.Z,
                            onClick: () => {
                                i(), E();
                            },
                            testID: g,
                            text: B,
                        });
                    !I.blocking &&
                        _.push({
                            ...(0, u.N1)(
                                I,
                                () => {
                                    i(), a();
                                },
                                () => {
                                    i(), w();
                                },
                            ),
                            testID: f,
                        });
                    I.followed_by &&
                        _.push({
                            ...(0, m.l)({
                                removeFollowerAction: (e) => {
                                    v(e, p);
                                },
                                user: I,
                            }),
                            testID: k,
                        }),
                        _.push((0, h.op)({ blockAction: (e) => v(e, o), isSoftBlockEnabled: t.isTrue("xprofile_blocked_by_view_enabled"), source: h.SC.FOLLOWERS_LIST, testID: b, unblockAction: (e) => v(e, x), user: I })),
                        _.push({
                            Icon: s.default,
                            onClick: () => {
                                i(), Z();
                            },
                            testID: C,
                            text: y({ screenName: I.screen_name }),
                        });
                    const L = _.map(({ Icon: e, onClick: t, testID: o, text: n }) => ({ text: n, onClick: t, Icon: e, testID: o }));
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
                h = o(449067),
                u = o(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: l, centerTitle: i, hideBackButton: a, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: b, rightControl: f, secondaryBar: k, subtitle: C, title: g } = this.props,
                                { isModal: y } = this.context;
                            return n.createElement(r.Z, { style: y ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (y ? "close" : "back"), backLocation: l, centerTitle: i, fixed: !y, hideBackButton: a, history: s, isFullWidth: h, isLarge: u, middleControl: m, onBackClick: b, ref: e, rightControl: f, secondaryBar: k, style: [y && p.appBarModal, t], subtitle: C, title: g, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: m, title: b, withoutBottomBarMobile: f } = this.props,
                        { isModal: k } = this.context,
                        C = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(h.Z.Configure, { documentTitle: a, headerless: !0, title: b }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, k && p.rootModal] }, !k && C, n.createElement(l.Z, { isFullWidth: c, isLarge: d, style: [p.container, k && p.containerModal, i] }, k ? n.createElement(u.Z, { style: p.viewport }, C, o) : o), t ? n.createElement(r.Z, { style: [p.bottomBarModal, !k && !f && p.bottomBarMobile] }, n.createElement(l.Z, { isFullWidth: c, isLarge: d }, t)) : null));
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
        811105: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(325686),
                l = o(731708),
                i = o(392237),
                a = o(674132),
                s = o.n(a);
            const c = s().c174e46e,
                d = s().a39075ff,
                h = i.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                u = (e) => {
                    const { scopes: t, size: o, title: i } = e,
                        [a, s] = n.useState(!1),
                        u = n.useCallback(() => {
                            s((e) => !e);
                        }, []),
                        m = a ? t : t.slice(0, 3),
                        p = t.length > 3;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(l.ZP, { style: h.scopesHeader, weight: "bold" }, i),
                        n.createElement(
                            r.Z,
                            { role: "list" },
                            m.map((e) => n.createElement(l.ZP, { color: "subtext2" === o ? "gray700" : void 0, key: e.name, role: "listitem", size: o, style: h.listItem }, e.description)),
                        ),
                        p && a ? n.createElement(l.ZP, { onPress: u, style: h.toggleMoreLink }, c) : null,
                        p && !a ? n.createElement(l.ZP, { onPress: u, style: h.toggleMoreLink }, d({ n: t.length - 3 })) : null,
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsInternals-9f4db315.840f4f2a.js.map
