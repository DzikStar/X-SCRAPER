"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpacePeek~bundle.Communities~loader.CommunityHandler-6107ac1a", "icons/IconDraggable-js"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => m });
            var n = o(202784),
                i = o(614983),
                r = o.n(i),
                l = o(325686),
                a = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class m extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: r, isFullWidth: l, isLarge: c, leftControl: d, middleControl: m, position: h, rightControl: p, secondaryBar: b, style: f, subtitle: g, title: y, titleDomId: w, titleIconCell: C, titleIconCellSize: B, withBackground: E, withWideContainer: x } = this.props,
                        { isModal: v } = this.context,
                        S = r ? d : n.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        k = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!E, v, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: l, isLarge: c, leftControl: S, middleControl: m, position: u(h, v, i), rightControl: p, style: f, subtitle: g, title: y, titleDomId: w, titleIconCell: C, titleIconCellSize: B, withBackground: k, withWideContainer: x }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(l.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        544239: (e, t, o) => {
            o.d(t, { Z: () => D });
            var n = o(202784),
                i = o(325686),
                r = o(107267),
                l = o(67369),
                a = o(392237),
                s = o(530525),
                c = o(439592),
                d = o(98538),
                u = o(731708),
                m = o(952428),
                h = o(642153),
                p = o(154003),
                b = o(111677),
                f = o.n(b),
                g = o(492140),
                y = o(833057),
                w = o(516951),
                C = o(443781),
                B = o(278817);
            const E = f().d58baa7f,
                x = f().gfdad702,
                v = ({ media: e, width: t }) => {
                    const { crop: o, image: r } = e,
                        d = (0, l.KU)(),
                        u = n.useMemo(() => [I.thumbnailContainer, d && I.thumbnailContainerNarrow, t ? { width: a.default.theme.spaces[t] } : null], [d, t]);
                    return n.createElement(i.Z, { style: u }, n.createElement(s.Z, { "aria-label": "", aspectMode: c.Z.SQUARE, backgroundColor: a.default.theme.colors.gray300, cropCandidates: o, image: r }));
                },
                S = ({ communityId: e, count: t }) => {
                    const o = E(t);
                    return n.createElement(d.Z.Group, null, n.createElement(d.Z, null, n.createElement(u.ZP, { color: "gray700" }, n.createElement(f().I18NFormatMessage, { $i18n: "b38e130b" }, n.createElement(d.Z.Value, null, f().ibd0106e({ formattedCount: o })), n.createElement(d.Z.Label, null, f().cface2d1({ count: t }))))));
                },
                k = ({ communityId: e, isNsfw: t, media: o, memberCount: r, membersFacepile: l, name: a, onActionButtonJoinClick: s, onPress: c, style: d, thumbnailSize: p, topic: b, withActionButton: f, withPinAction: g }) => {
                    const y = `/i/communities/${e}`,
                        { featureSwitches: w } = n.useContext(C.rC),
                        B = w.isTrue("communities_adult_content_setting_display"),
                        E = w.isTrue("communities_topic_display");
                    return n.createElement(m.Z, { link: y, onPress: c, style: [I.root, d] }, n.createElement(i.Z, { style: I.container }, n.createElement(i.Z, { style: I.leftColumn }, o ? n.createElement(v, { media: o, width: p }) : null, n.createElement(i.Z, { style: I.attribution }, n.createElement(i.Z, { style: I.name }, n.createElement(u.ZP, { numberOfLines: 1, weight: "bold" }, a), t && B ? n.createElement(u.ZP, { color: "red600", size: "subtext2" }, " ", x) : null), n.createElement(S, { communityId: e, count: r }), b && E ? n.createElement(i.Z, { style: I.name }, n.createElement(u.ZP, { color: "gray700", numberOfLines: 1 }, b)) : null, Array.isArray(l) ? n.createElement(h.Z, { style: I.facepile, userAvatarSize: "large", userAvatarUrls: l }) : l)), n.createElement(L, { communityId: e, onActionButtonJoinClick: s, withActionButton: f, withPinAction: g })));
                },
                Z = f().c5d23126,
                F = f().j44ec610,
                T = { label: Z },
                _ = { label: F };
            function L(e) {
                const t = (0, r.useRouteMatch)(),
                    { communityId: o, onActionButtonJoinClick: l, withActionButton: a, withPinAction: s } = e;
                return a ? n.createElement(i.Z, { style: I.rightColumn }, n.createElement(B.ZP, { communityId: o, match: t, onCommunityMembershipChange: w.Z, onJoinClick: l })) : s ? n.createElement(P, s) : null;
            }
            function P(e) {
                const { handlePinOrUnpin: t, isPinned: o } = e,
                    r = n.useMemo(() => (o ? n.createElement(g.default, { "aria-label": F }) : n.createElement(y.default, { "aria-label": Z })), [o]),
                    l = n.useCallback(
                        (e) => {
                            e.preventDefault(), t();
                        },
                        [t],
                    );
                return n.createElement(i.Z, { style: I.rightColumn }, n.createElement(p.ZP, { hoverLabel: o ? _ : T, icon: r, onPress: l, type: "brandText" }));
            }
            const D = n.memo(k),
                I = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, container: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, rightColumn: { alignItems: "center", justifyContent: "flex-end", flexDirection: "row", flex: 1, flexShrink: 1 }, attribution: { height: "100%", minWidth: 100 * e.scales[e.scale], justifyContent: "space-between", flexShrink: 1 }, facepile: { justifyContent: "flex-start" }, name: { marginBottom: e.spaces.space2, flexDirection: "row" }, thumbnailContainer: { width: 96 * e.scales[e.scale], marginEnd: e.spaces.space12, borderRadius: e.borderRadii.large, overflow: "hidden" }, thumbnailContainerNarrow: { width: e.spaces.space72 } }));
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => h });
            var n = o(202784),
                i = o(325686),
                r = o(108362),
                l = o(386802),
                a = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                m = o(715601);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: r, centerTitle: l, hideBackButton: a, history: s, isFullWidth: u, isLarge: m, middleControl: h, onBackClick: b, rightControl: f, secondaryBar: g, subtitle: y, title: w } = this.props,
                                { isModal: C } = this.context;
                            return n.createElement(i.Z, { style: C ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: r, centerTitle: l, fixed: !C, hideBackButton: a, history: s, isFullWidth: u, isLarge: m, middleControl: h, onBackClick: b, ref: e, rightControl: f, secondaryBar: g, style: [C && p.appBarModal, t], subtitle: y, title: w, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: l, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: h, title: b, withoutBottomBarMobile: f } = this.props,
                        { isModal: g } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(u.Z.Configure, { documentTitle: a, headerless: !0, title: b }), n.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, g && p.rootModal] }, !g && y, n.createElement(r.Z, { isFullWidth: c, isLarge: d, style: [p.container, g && p.containerModal, l] }, g ? n.createElement(m.Z, { style: p.viewport }, y, o) : o), t ? n.createElement(i.Z, { style: [p.bottomBarModal, !g && !f && p.bottomBarMobile] }, n.createElement(r.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = l.Z);
            const p = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = h;
        },
        727186: (e, t, o) => {
            o.d(t, { ZP: () => c });
            var n = o(807896),
                i = o(202784),
                r = o(325686),
                l = o(392237),
                a = o(386742);
            const s = l.default.create(() => ({ hidden: { opacity: 0 } })),
                c = (e) => {
                    const { children: t, disableInteractiveElementBlocking: o, draggableId: l, fromVirtualList: c, index: d, isBeingDragged: u, isDragDisabled: m, lockYAxis: h } = e;
                    return c && u
                        ? i.createElement(r.Z, { style: s.hidden }, t)
                        : i.createElement(a.lL, { disableInteractiveElementBlocking: o, draggableId: l, index: d, isDragDisabled: m }, (e) => {
                              const o = e.draggableProps.style,
                                  r = h
                                      ? ((e) => {
                                            if (e.transform) {
                                                const t = `translate(0px${e.transform.slice(e.transform.indexOf(","), e.transform.length)}`;
                                                return { ...e, transform: t };
                                            }
                                            return e;
                                        })(o)
                                      : o;
                              return i.createElement("div", (0, n.Z)({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps, { style: r }), t);
                          });
                };
        },
        699910: (e, t, o) => {
            o.d(t, { L: () => F, Z: () => L });
            var n = o(202784),
                i = o(325686),
                r = o(731708),
                l = o(593866),
                a = o(392237),
                s = o(857378),
                c = o(688715),
                d = o(111677),
                u = o.n(d);
            const m = (0, c.ju)("https://help.x.com/rules-and-policies/twitter-rules"),
                h = n.createElement(u().I18NFormatMessage, { $i18n: "j33cc663" }, n.createElement(r.ZP, { link: m, withInteractiveStyling: !1 }, u().h9526e03)),
                p = ({ containerStyle: e, explanation: t, explanationStyle: o, heading: l }) => n.createElement(i.Z, { style: e }, l, n.createElement(r.ZP, { color: "gray700", style: o }, t || h));
            var b = o(779610);
            const f = ({ getPivotLink: e, renderBadge: t, rules: o }) =>
                n.createElement(
                    n.Fragment,
                    null,
                    o.map((o, i) => {
                        const { description: l, name: a, rest_id: s } = o,
                            c = e(o),
                            d = t(i + 1),
                            u = n.createElement(r.ZP, { weight: "bold" }, a);
                        return n.createElement(b.Z, { description: l, key: s, label: u, link: c, thumbnail: d });
                    }),
                );
            var g = o(807896),
                y = o(727186),
                w = o(386742),
                C = o(678773);
            const B = "rules-container",
                E = "rules-order-badge",
                x = "rules-reorder-item",
                v = a.default.create((e) => ({ icon: { color: e.colors.gray300, flexShrink: 0, paddingStart: e.spaces.space12 } })),
                S = (e) => {
                    const { badge: t, rule: o } = e,
                        { description: i, name: l } = o,
                        a = n.createElement(r.ZP, { weight: "bold" }, l);
                    return n.createElement(b.Z, { description: i, label: a, renderRightContent: () => n.createElement(C.default, { style: v.icon }), testID: x, thumbnail: t });
                },
                k = (e, t, o) => {
                    if (!e.destination) return;
                    const n = ((e, t, o) => {
                        const n = Array.from(e),
                            [i] = n.splice(t, 1);
                        return n.splice(o, 0, i), n;
                    })(t, e.source.index, e.destination.index);
                    o(n);
                },
                Z = (e) => {
                    const { onReorder: t, renderBadge: o, rules: i } = e,
                        r = n.useCallback(
                            (e) => {
                                k(e, i, t);
                            },
                            [t, i],
                        );
                    return n.createElement(
                        w.Xi,
                        { onDragEnd: r },
                        n.createElement(w.$p, { droppableId: "droppable" }, (e, t) =>
                            n.createElement(
                                "div",
                                (0, g.Z)({}, e.droppableProps, { ref: e.innerRef }),
                                i.map((e, i) => {
                                    const { rest_id: r } = e;
                                    return n.createElement(y.ZP, { draggableId: r, index: i, isBeingDragged: t.draggingFromThisWith === r, key: r }, n.createElement(S, { badge: o(i + 1), rule: e }));
                                }),
                                e.placeholder,
                            ),
                        ),
                    );
                },
                F = Object.freeze({ Default: "Default", Pivot: "Pivot", Reorder: "Reorder" }),
                T = (e, t) => {
                    const { badgeStyle: o } = t;
                    return n.createElement(i.Z, { style: [_.badge, o], testID: E }, n.createElement(r.ZP, { align: "center", color: "text", weight: "bold" }, e));
                },
                _ = a.default.create((e) => ({ badge: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.infinite, justifyContent: "center", overflow: "hidden", height: e.spaces.space32, width: e.spaces.space32 }, bottomMargin: { marginBottom: s.h$ } })),
                L = ({ badgeStyle: e, displayType: t = F.Default, explanation: o, getPivotLink: r, headerContainerStyle: a, headerExplanationStyle: s, heading: c, limit: d, onReorder: u, ruleContainerStyle: m, rules: h, withBottomMargin: b = !1, withHeader: g = !0 }) => {
                    const y = { badgeStyle: e },
                        w = ((e, t, o) => (t ? e.slice(0, t) : e).map((e, t) => ({ label: e.name, description: e.description, decoration: T(t + 1, o) })))(h, d, y),
                        C = (e) => T(e, y);
                    return w.length > 0 ? n.createElement(i.Z, { style: b ? _.bottomMargin : null, testID: B }, g ? n.createElement(p, { containerStyle: a, explanation: o, explanationStyle: s, heading: c }) : null, t === F.Pivot && r ? n.createElement(f, { getPivotLink: r, renderBadge: C, rules: h }) : t === F.Reorder && u ? n.createElement(Z, { onReorder: u, renderBadge: C, rules: h }) : n.createElement(l.Z, { containerStyle: m, items: w })) : null;
                };
        },
        724328: (e, t, o) => {
            o.d(t, { E: () => i });
            o(202784);
            var n = o(111677);
            const i = o.n(n)().c00c234f;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(500002),
                r = o(668214),
                l = o(997174),
                a = o(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends n.Component {
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
                            location: { pathname: r, search: l },
                            locationKey: a,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = i || a;
                    ((c && i !== a) || (!c && o !== r) || n !== l || s) && this._performPageUpdates(this.props);
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
            const d = (0, i.ZP)(s(c));
        },
        386742: (e, t, o) => {
            o.d(t, { $p: () => d, Xi: () => l, _l: () => c, _y: () => a, bK: () => u, lL: () => s });
            var n = o(202784),
                i = o(523561),
                r = o(195560);
            const l = (0, i.Z)({ loader: () => Promise.all([o.e("ondemand.ReactBeautifulDnd-e96e9bea"), o.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(o.bind(o, 391426)), renderPlaceholder: (e, t) => n.createElement(r.Z, { hasError: e, onRetry: t }) }),
                a = l,
                s = (0, i.Z)({ noErrorBoundary: !0, loader: () => Promise.all([o.e("ondemand.ReactBeautifulDnd-e96e9bea"), o.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(o.bind(o, 797546)), renderPlaceholder: (e, t) => n.createElement(r.Z, { hasError: e, onRetry: t }) }),
                c = s,
                d = (0, i.Z)({ loader: () => Promise.all([o.e("ondemand.ReactBeautifulDnd-e96e9bea"), o.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(o.bind(o, 896830)), renderPlaceholder: (e, t) => n.createElement(r.Z, { hasError: e, onRetry: t }) }),
                u = d;
        },
        661810: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                i = o(325686),
                r = o(392237);
            function l({ spacing: e, style: t }) {
                return n.createElement(i.Z, { role: "separator", style: [a.divider, { marginVertical: null != e ? r.default.theme.spaces[e] : void 0 }, t] });
            }
            const a = r.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        723587: (e, t, o) => {
            o.d(t, { Z: () => me });
            var n = o(202784),
                i = o(614983),
                r = o.n(i),
                l = o(111677),
                a = o.n(l),
                s = o(516951),
                c = o(616894),
                d = o(235902),
                u = o(305098);
            const m = a().i8cfb6e6,
                h = a().ea100d6a,
                p = a().fe40537f,
                b = a().ab7c3460,
                f = a().i58d8718,
                g = n.createElement(c.default, null),
                y = ({ disabled: e, displayMode: t, onUnblock: o, showRelationshipChangeConfirmation: i, size: r, style: l, testID: a, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: m, buttonHoverLabel: h, buttonType: "destructiveFilled", confirmationSheetConfirmLabel: h, confirmationSheetHeadline: p({ screenName: s }), confirmationSheetText: d.ZP.useProps().isSoftBlockEnabled() ? f : b, disabled: e, displayMode: t, icon: g, onClick: o, showRelationshipChangeConfirmation: i, size: r, style: l, testID: a });
            var w = o(466999),
                C = o(76388),
                B = o(911373),
                E = o(733357),
                x = o(352924),
                v = o(392237);
            const S = a().ee05e96b,
                k = a().f238ba1d,
                Z = a().aeb6f0a0,
                F = a().a77a27c0,
                T = a().b4397192,
                _ = (e) => ({ customButtonColor: "white", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "plum500", customButtonHoverColor: "white", customButtonHoverBorderColor: "plum500" }),
                L = (e) => ({ customButtonColor: "plum500", customButtonBorderColor: e ? "transparent" : "plum500", customButtonBackgroundColor: "transparent", customButtonHoverColor: "white", customButtonHoverBorderColor: "gray700", customButtonHoverBackgroundColor: "gray700" }),
                P = v.default.create((e) => ({ hidden: { display: "none" } })),
                D = ({ "aria-describedby": e, buttonType: t, disabled: o, displayMode: i, id: r, isSuperFollowEligible: l, isSuperFollowing: a, isTransparent: s, name: c, onSuperFollow: d, onUnSuperFollow: m, size: h, style: p, testID: b }) => {
                    const f = n.useCallback(() => {
                            a ? m() : l && d();
                        }, [l, a, d, m]),
                        g = void 0 !== c ? `@${String(c)}` : "",
                        y = a ? F : Z,
                        C = g.length > 0 && void 0 !== y ? k({ followType: y, screenName: g }) : "",
                        B = a ? T : Z,
                        v = a ? L(s) : t ? void 0 : _(s),
                        D = n.useMemo(() => (void 0 !== e ? e : (0, x.F)()), [e]),
                        I = n.useCallback(() => {
                            const e = a ? F : l ? S({ followType: Z, screenName: c }) : null;
                            return e && !(0, E.Z)(e) ? n.createElement(w.Z, { id: D, style: P.hidden }, e) : null;
                        }, [a, l, D, c]);
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": D, "aria-label": C, buttonDefaultLabel: y, buttonHoverLabel: B, buttonType: t, customButtonConfig: v, disabled: o, displayMode: i, id: r, onClick: f, size: h, style: p, testID: b }), void 0 === e ? I() : null);
                },
                I = Object.freeze({ user: "user", topic: "topic", list: "list", community: "community", spaces: "spaces" }),
                R = a().cda66545,
                M = a().ee05e96b,
                H = a().a8d77a25,
                z = a().d0f4f3d9,
                N = a().f238ba1d,
                W = a().j6161cab,
                A = a().i4bb9ef7,
                U = a().ge753264,
                O = a().b837c0e8,
                j = n.createElement(C.default, null),
                V = n.createElement(B.default, null),
                $ = a().ddac1f1d,
                G = a().j8e33c40;
            class J extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getDescribedById = () => {
                            const { "aria-describedby": e } = this.props;
                            return void 0 !== e ? e : (0, x.F)();
                        }),
                        (this._renderDescribedBy = (e, t) => {
                            const o = this._getDescribedByText();
                            return (0, E.Z)(o) ? null : n.createElement(w.Z, { id: e, style: { display: "none" } }, o);
                        }),
                        (this._getDescribedByText = () => {
                            const { buttonText: e, isFollowing: t, isSuperFollowEligible: o, isSuperFollowing: n, name: i, type: r } = this.props;
                            let l = "";
                            const a = void 0 === i ? "" : i;
                            switch (r) {
                                case I.user:
                                case I.topic:
                                case I.list:
                                    n && e.unSuperFollow ? (l = e.unSuperFollow) : t ? (l = o ? M({ followType: e.superFollow, screenName: a }) : R({ followType: e.unfollow, screenName: a })) : t || (l = R({ followType: e.follow, screenName: a }));
                                    break;
                                case I.community:
                                    l = t ? H({ screenName: a }) : R({ followType: e.follow, screenName: a });
                                    break;
                                case I.spaces:
                                    t ? (l = R({ followType: e.unfollow, screenName: a })) : t || (l = R({ followType: e.follow, screenName: a }));
                                    break;
                                default:
                                    l = "";
                            }
                            return l;
                        }),
                        (this._getText = () => {
                            const { buttonText: e, name: t, type: o } = this.props,
                                n = void 0 !== t ? t : "",
                                i = A({ title: t }),
                                r = { [I.user]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: W({ screenName: t }), confirmationSheetText: U }, [I.topic]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: O }, [I.list]: { ariaFollowName: n, confirmationHeadline: i, confirmationSheetText: void 0 }, [I.community]: { ariaFollowName: n, confirmationHeadline: $({ communityName: t }), confirmationSheetText: G }, [I.spaces]: { ariaFollowName: void 0 !== t ? `@${String(t)}` : "", confirmationHeadline: W({ screenName: t }), confirmationSheetText: U } };
                            return { ariaFollowName: r[o].ariaFollowName, followLabel: e.follow, followBackLabel: e.followBack, followingLabel: e.following, unfollowLabel: e.unfollow, superFollowLabel: e.superFollow, superFollowingLabel: e.superFollowing, unSuperFollowLabel: e.unSuperFollow, confirmationHeadline: e.confirmationHeadline || r[o].confirmationHeadline, confirmationSheetText: e.confirmationSheetText || r[o].confirmationSheetText };
                        }),
                        (this._handlePress = () => {
                            const { isFollowing: e, isSuperFollowEligible: t, isSuperFollowing: o, onFollow: n, onSuperFollow: i, onUnSuperFollow: r, onUnfollow: l } = this.props;
                            o ? r() : e ? (t ? i() : l()) : (n(), this.setState({ hasJustFollowed: !0 }));
                        }),
                        (this._handleHoverOut = () => {
                            this.state.hasJustFollowed && this.setState({ hasJustFollowed: !1 });
                        }),
                        (this.state = { hasJustFollowed: !1 });
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, disabled: o, displayMode: i, id: r, isFollowed: l, isFollowing: a, isSuperFollowEligible: s, isSuperFollowing: c, isTransparent: d, showRelationshipChangeConfirmation: m, size: h, style: p, testID: b, type: f, withConfirmationSheetText: g } = this.props,
                        { ariaFollowName: y, confirmationHeadline: w, confirmationSheetText: C, followBackLabel: B, followLabel: E, followingLabel: x, superFollowLabel: v, superFollowingLabel: S, unSuperFollowLabel: k, unfollowLabel: Z } = this._getText(),
                        { hasJustFollowed: F } = this.state,
                        T = (t && t.followIcon) || V,
                        P = (t && t.followingIcon) || j,
                        D = "only-text" !== i ? (a ? P : T) : void 0;
                    let R = a ? x : E;
                    l && !a && B && (R = B);
                    let M = z;
                    (c || (a && s)) && (c && S ? ((M = N), (R = S)) : s && v && ((M = N), (R = v)));
                    const H = y.length > 0 && void 0 !== R ? M({ followType: R, screenName: y }) : "",
                        W = "primaryFilled";
                    let A, U, O, $;
                    const G = d ? "brandText" : W,
                        J = d ? "destructiveText" : "destructiveOutlined",
                        K = !c && (!a || !s) && a,
                        q = a ? "onMediaWhiteFilled" : "onMediaOutlined",
                        Q = a ? "onMediaOutlined" : "onMediaWhiteFilled";
                    f === I.community ? (A = a ? Z : E) : f === I.spaces ? ((A = a ? Z : E), (U = q), (O = Q)) : c && k ? (($ = L(d)), (A = k)) : a ? ((A = F ? x : Z), (U = F ? G : J), (O = d ? "brandText" : "primaryOutlined"), s && v && (($ = _(d)), (A = v), (O = void 0), (U = void 0))) : ((A = l && B ? B : E), (U = d ? "brandText" : W), (O = d ? "brandText" : W));
                    const X = this._getDescribedById();
                    return n.createElement(n.Fragment, null, n.createElement(u.Z, { "aria-describedby": X, "aria-label": H, buttonDefaultLabel: R, buttonHoverLabel: A, buttonHoverType: U, buttonType: O, confirmationSheetConfirmLabel: Z, confirmationSheetHeadline: w, confirmationSheetText: g ? C : void 0, customButtonConfig: $, disabled: o, displayMode: i, icon: D, id: r, onClick: this._handlePress, onHoverOut: this._handleHoverOut, showRelationshipChangeConfirmation: K && m, size: h, style: p, testID: b }), void 0 === e ? this._renderDescribedBy(X) : null);
                }
            }
            const K = J;
            var q = o(311687);
            const Q = a().f305840e,
                X = a().e23b20a0,
                Y = a().fe04d89a,
                ee = a().i036327c,
                te = a().j95e3097,
                oe = n.createElement(q.default, null),
                ne = ({ disabled: e, displayMode: t, onCancelPendingFollow: o, showRelationshipChangeConfirmation: i, size: r, style: l, testID: a, userScreenName: s }) => n.createElement(u.Z, { buttonDefaultLabel: Q, buttonHoverLabel: X, buttonType: "primaryOutlined", confirmationSheetCancelLabel: X, confirmationSheetConfirmLabel: Y, confirmationSheetHeadline: ee, confirmationSheetText: te({ screenName: s }), disabled: e, displayMode: t, icon: oe, onClick: o, showRelationshipChangeConfirmation: i, size: r, style: l, testID: a }),
                ie = Object.freeze({ follow: "follow", subscribe: "subscribe" }),
                re = a().ec72e2f8,
                le = a().a5f7ce12,
                ae = a().c3befdbe,
                se = a().d3029dbc,
                ce = a().aeb6f0a0,
                de = a().a77a27c0,
                ue = a().b4397192;
            class me extends n.Component {
                constructor(e) {
                    super(e), this._validateProps();
                }
                componentDidUpdate() {
                    this._validateProps();
                }
                render() {
                    const { "aria-describedby": e, buttonIcons: t, buttonText: o, buttonType: i, disabled: r, displayMode: l, id: a, isBlocking: s, isFollowRequestSent: c, isFollowed: d, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onCancelPendingFollow: f, onFollow: g, onSuperFollow: w, onUnSuperFollow: C, onUnblock: B, onUnfollow: E, relationshipMode: x, showRelationshipChangeConfirmation: v, size: S, style: k, testIDs: Z, type: F, withConfirmationSheetText: T } = this.props,
                        _ = s,
                        L = c,
                        P = x === ie.subscribe && (m || h);
                    return _ ? n.createElement(y, { disabled: r, displayMode: l, onUnblock: B, showRelationshipChangeConfirmation: v, size: S, style: k, testID: Z?.unblock, userScreenName: b }) : L ? n.createElement(ne, { disabled: r, displayMode: l, onCancelPendingFollow: f, showRelationshipChangeConfirmation: v, size: S, style: k, testID: Z?.cancel, userScreenName: b }) : P ? n.createElement(D, { "aria-describedby": e, buttonType: i, disabled: r, displayMode: l, id: a, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onSuperFollow: w, onUnSuperFollow: C, size: S, style: k, testID: h ? Z?.manageSubscription : Z?.subscribe }) : n.createElement(K, { "aria-describedby": e, buttonIcons: t, buttonText: o, disabled: r, displayMode: l, id: a, isFollowed: d, isFollowing: u, isSuperFollowEligible: m, isSuperFollowing: h, isTransparent: p, name: b, onFollow: g, onSuperFollow: w, onUnSuperFollow: C, onUnfollow: E, showRelationshipChangeConfirmation: v, size: S, style: k, testID: u ? Z?.unfollow : Z?.follow, type: F, withConfirmationSheetText: T });
                }
                _validateProps() {
                    const { name: e, showRelationshipChangeConfirmation: t } = this.props,
                        o = t && "string" == typeof e,
                        n = !t;
                    r()(o || n, "When showRelationshipChangeConfirmation is true, name must be defined.");
                }
            }
            me.defaultProps = { buttonText: { follow: re, followBack: le, following: ae, unfollow: se, superFollow: ce, superFollowing: de, unSuperFollow: ue }, displayMode: "only-text", relationshipMode: "follow", isBlocking: !1, isFollowRequestSent: !1, isTransparent: !1, onCancelPendingFollow: s.Z, onSuperFollow: s.Z, onUnblock: s.Z, onUnSuperFollow: s.Z, showRelationshipChangeConfirmation: !0, withConfirmationSheetText: !0 };
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                i = o(325686),
                r = o(191796),
                l = o(58399),
                a = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: m = !1, label: h, link: p, onPress: b, paddingHorizontal: f, renderRightContent: g, role: y = "tab", styleOverride: w, testID: C = "pivot", thumbnail: B, thumbnailSize: E, withoutArrow: x = !1 } = e,
                        v = [u.thumbnailContainer, "medium" === E && u.thumbnailContainerMedium],
                        S = "string" == typeof h ? n.createElement(a.ZP, null, h) : h,
                        k = "object" == typeof p && p.external && !p.openInSameFrame,
                        Z = o ? ("string" == typeof o ? n.createElement(a.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, o) : o) : null,
                        F = n.useMemo(() => ("space0" === f ? { paddingHorizontal: 0 } : { paddingHorizontal: f ? c.default.theme.spaces[f] : c.default.theme.componentDimensions.gutterHorizontal }), [f]);
                    return n.createElement(s.Z, { "aria-selected": "tab" === y ? m : null, disabled: d, link: d ? void 0 : p, onPress: b, role: y, style: [u.root, F, d && u.disabled, w], testID: C, withInteractiveStyling: !!p || !!b }, n.createElement(i.Z, { style: u.contentContainer }, B ? n.createElement(i.Z, { style: v }, B) : null, n.createElement(i.Z, { style: u.content }, S, Z), g ? g() : null, (!p && !b) || d || x ? null : k ? n.createElement(r.default, { style: u.icon }) : n.createElement(l.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        98538: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(202784),
                i = o(325686),
                r = o(731708),
                l = o(891198),
                a = o(280278),
                s = o(392237);
            const c = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: o, onPress: i } = this.props;
                    return n.createElement(r.ZP, { color: o ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: i }, n.createElement(d.Provider, { value: { onMedia: o } }, e));
                }
            }
            (u.Group = (e) =>
                n.createElement(
                    i.Z,
                    { style: [m.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, o) => n.createElement(i.Z, { key: t, style: t < o.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: o }) => n.createElement(r.ZP, { children: e, color: o ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: o, style: i, weight: l = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? n.createElement(a.ZP, { children: t, count: o, size: c, style: i, weight: l }) : n.createElement(r.ZP, { children: t, color: s ? "white" : "text", size: c, style: i, weight: l }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = u;
        },
        305098: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(807896),
                i = o(202784),
                r = o(325686),
                l = o(154003),
                a = o(190286),
                s = o(466792);
            Object.freeze({ iconText: "icon-text", onlyIcon: "only-icon", onlyText: "only-text" });
            class c extends i.Component {
                constructor(e) {
                    super(e),
                        (this._minWidth = 0),
                        (this._isMounted = !0),
                        (this._handleLabelMeasure = (e = !1) => {
                            setTimeout(() => {
                                const t = this._containerRef?.getBoundingClientRect().width,
                                    o = this._containerRef?.offsetWidth;
                                let n = 0;
                                t && o && (n = o ? t : o), (this._minWidth = Math.ceil(Math.max(this._minWidth, n))), e && this._isMounted && this.forceUpdate();
                            }, 0);
                        }),
                        (this._getCustomButtonProps = (e) => {
                            const { customButtonConfig: t } = this.props;
                            if (!t) return;
                            const { customButtonBackgroundColor: o, customButtonBorderColor: n, customButtonColor: i, customButtonHoverBackgroundColor: r, customButtonHoverBorderColor: l, customButtonHoverColor: a } = t,
                                s = { color: i, backgroundColor: o, borderColor: n };
                            return e && ((s.color = a || i), (s.backgroundColor = r || o), (s.borderColor = l || n)), s;
                        }),
                        (this._handleButtonPress = (e) => {
                            e.preventDefault(), this.props.showRelationshipChangeConfirmation ? this.setState({ showConfirmation: !0 }) : ((this._minWidth = 0), this.forceUpdate(), this.props.onClick());
                        }),
                        (this._handleConfirm = (e) => {
                            (this._minWidth = 0), this.setState({ showConfirmation: !1 }), this.props.onClick(), this._buttonRef?.focus();
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showConfirmation: !1 }), this._buttonRef?.focus();
                        }),
                        (this._handleHoverIn = () => {
                            this._handleLabelMeasure(!0);
                        }),
                        (this._setButtonRef = (e) => {
                            this._buttonRef = e;
                        }),
                        (this._setContainerRef = (e) => {
                            (this._containerRef = e), this._handleLabelMeasure();
                        }),
                        (this.state = { showConfirmation: !1 });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                componentDidUpdate(e) {
                    e.buttonDefaultLabel !== this.props.buttonDefaultLabel && this._handleLabelMeasure();
                }
                render() {
                    const { "aria-describedby": e, "aria-label": t, buttonDefaultLabel: o, buttonHoverLabel: c, buttonHoverType: d, buttonType: u, confirmationSheetCancelLabel: m, confirmationSheetConfirmLabel: h, confirmationSheetHeadline: p, confirmationSheetPrimaryButtonType: b, confirmationSheetText: f, disabled: g, displayMode: y, icon: w, id: C, onHoverOut: B, size: E, style: x, testID: v } = this.props,
                        S = [x, { minWidth: this._minWidth }];
                    return i.createElement(
                        r.Z,
                        { ref: this._setContainerRef, style: S },
                        i.createElement(s.Z, { onHoverIn: this._handleHoverIn, onHoverOut: B }, ({ isHovered: r }) => {
                            const a = r ? c : o,
                                s = r && d ? d : u,
                                m = this._getCustomButtonProps(r);
                            return i.createElement(l.ZP, (0, n.Z)({ "aria-describedby": e, "aria-label": "only-icon" === y ? a : t, disabled: g, icon: "only-text" !== y ? w : void 0, id: C, onPress: this._handleButtonPress, ref: this._setButtonRef, size: E, testID: v, type: s }, m), "only-icon" === y ? void 0 : a);
                        }),
                        this.state.showConfirmation ? i.createElement(a.Z, { cancelButtonLabel: m, confirmButtonLabel: h, confirmButtonType: b, headline: p, onCancel: this._handleCancel, onConfirm: this._handleConfirm, text: f }) : null,
                    );
                }
            }
            c.defaultProps = { showRelationshipChangeConfirmation: !1 };
            const d = c;
        },
        183806: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = o(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        678773: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                i = o(890601),
                r = o(783427),
                l = o(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const s = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpacePeek~bundle.Communities~loader.CommunityHandler-6107ac1a.2462f18a.js.map
