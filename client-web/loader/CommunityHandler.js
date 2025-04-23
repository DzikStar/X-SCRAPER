"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CommunityHandler"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var n = o(202784),
                i = o(614983),
                r = o.n(i),
                a = o(325686),
                l = o(370006),
                s = o(786998),
                d = o(929028),
                c = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: r, isFullWidth: a, isLarge: d, leftControl: c, middleControl: p, position: m, rightControl: h, secondaryBar: b, style: g, subtitle: y, title: B, titleDomId: C, titleIconCell: f, titleIconCellSize: x, withBackground: k, withWideContainer: w } = this.props,
                        { isModal: T } = this.context,
                        Z = r ? c : n.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!k, T, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: d, leftControl: Z, middleControl: p, position: u(m, T, i), rightControl: h, style: g, subtitle: y, title: B, titleDomId: C, titleIconCell: f, titleIconCellSize: x, withBackground: E, withWideContainer: w }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = c.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => m });
            var n = o(202784),
                i = o(325686),
                r = o(108362),
                a = o(386802),
                l = o(392237),
                s = o(652904),
                d = o(555079),
                c = o(625661),
                u = o(449067),
                p = o(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: r, centerTitle: a, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: b, rightControl: g, secondaryBar: y, subtitle: B, title: C } = this.props,
                                { isModal: f } = this.context;
                            return n.createElement(i.Z, { style: f ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, n.createElement(c.ZP, { backButtonType: o || (f ? "close" : "back"), backLocation: r, centerTitle: a, fixed: !f, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: b, ref: e, rightControl: g, secondaryBar: y, style: [f && h.appBarModal, t], subtitle: B, title: C, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: l, isFullWidth: d, isLarge: c, renderHeader: m, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: y } = this.context,
                        B = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: b }), n.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, y && h.rootModal] }, !y && B, n.createElement(r.Z, { isFullWidth: d, isLarge: c, style: [h.container, y && h.containerModal, a] }, y ? n.createElement(p.Z, { style: h.viewport }, B, o) : o), t ? n.createElement(i.Z, { style: [h.bottomBarModal, !y && !g && h.bottomBarMobile] }, n.createElement(r.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = a.Z);
            const h = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        812190: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(202784),
                i = o(544239),
                r = o(872788),
                a = o(71620),
                l = o(668214),
                s = o(491963),
                d = o(709318);
            const c = (e, { communityId: t }) => (t ? s.ZP.select(e, t) : void 0),
                u = (e, { communityId: t }) => !!t && (0, d.H4)(e, t),
                p = ({ community: e, communityId: t, createLocalApiErrorHandler: o, isPinned: a, onActionButtonJoinClick: l, onPress: s, pinTimeline: d, shouldDisplayPin: c, style: u, thumbnailSize: p, unpinTimeline: m, withActionButton: h }) => {
                    const b = n.useMemo(() => e && { isPinned: a, handlePinOrUnpin: () => (a ? m({ id: t, name: e.name, type: r.FO.COMMUNITY }).catch(o) : d({ id: t, name: e.name, type: r.FO.COMMUNITY }).catch(o)) }, [e, t, o, a, d, m]),
                        g = c ? b : void 0;
                    if (e) {
                        const { is_nsfw: o, media: r, member_count: a, membersFacepileUrls: d, name: c, primary_community_topic: m } = e;
                        return n.createElement(i.Z, { communityId: t, isNsfw: o, media: r, memberCount: a, membersFacepile: d, name: c, onActionButtonJoinClick: l, onPress: s, style: u, thumbnailSize: p, topic: m?.topic_name, withActionButton: h, withPinAction: g });
                    }
                    return null;
                },
                m = (0, l.Z)()
                    .propsFromState(() => ({ community: c, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: d.qM, unpinTimeline: d.bK, createLocalApiErrorHandler: (0, a.zr)("TOGGLE_PIN_COMMUNITY") }))(n.memo(p));
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                i = o(500002),
                r = o(668214),
                a = o(997174),
                l = o(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class d extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: r, search: a },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const d = i || l;
                    ((d && i !== l) || (!d && o !== r) || n !== a || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, i.ZP)(s(d));
        },
        325800: (e, t, o) => {
            o.r(t), o.d(t, { default: () => d });
            var n = o(459643),
                i = o(351322),
                r = o(202784),
                a = o(812190);
            const l = ({ entry: e, shouldDisplayPin: t }) => {
                    const o = e.content.id;
                    return r.createElement(a.Z, { communityId: o, shouldDisplayPin: t });
                },
                s = r.memo(l),
                d = (e) => i.iH({ component: s, shouldDisplayBorder: (0, n.Z)(!1), isFocusable: (0, n.Z)(!0) }).getHandler(() => e);
        },
        280278: (e, t, o) => {
            o.d(t, { ZP: () => b });
            var n = o(202784),
                i = o(325686),
                r = o(827515),
                a = o(461756),
                l = o(731708),
                s = o(392237);
            const d = "up",
                c = "down",
                u = (e, t, o) => {
                    o((o) => {
                        const n = (0, r.Z)(e) ? (e > (o.count || 0) ? d : c) : d;
                        return { ...o, count: e, oldText: o.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                p = {};
            [d, c].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                h = s.default.create({ root: { overflow: "hidden" } }),
                b = (e) => {
                    const { children: t, containerStyle: o, count: s, ...c } = e,
                        [b, g] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
                        y = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (y.current)
                                if (a.Z.reducedMotionEnabled) g((o) => ({ ...o, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== b.pendingText) {
                                    t === b.text || ((0, r.Z)(e.count) && b.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((o) => ({ ...o, pendingCount: e.count, pendingText: t })), b.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            y.current &&
                                !1 === b.animating &&
                                (b.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              y.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : b.pendingText && u(b.pendingCount, b.pendingText, g));
                        }, [b.animating, b.oldText]),
                        n.useMemo(() => {
                            const e = p[b.transitionDirection],
                                t = b.oldText && !a.Z.reducedMotionEnabled,
                                r = !b.animating && b.oldText && !a.Z.reducedMotionEnabled,
                                s = { ...m, ...(b.animating ? e.post : e.active) },
                                d = { ...(r ? e.pre : e.active) };
                            return n.createElement(
                                i.Z,
                                { style: [h.root, o] },
                                t ? n.createElement("span", { style: s }, n.createElement(l.ZP, c, b.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, g),
                                        style: d,
                                    },
                                    n.createElement(l.ZP, c, b.text),
                                ),
                            );
                        }, [o, c, b, y, g])
                    );
                };
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        988227: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                i = o(890601),
                r = o(783427),
                a = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        730895: (e, t, o) => {
            var n = o(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.0718344a.js.map
