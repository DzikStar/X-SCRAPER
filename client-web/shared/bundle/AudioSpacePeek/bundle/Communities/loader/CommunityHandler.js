"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpacePeek~bundle.Communities~loader.CommunityHandler"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => m });
            var r = n(202784),
                i = n(614983),
                a = n.n(i),
                o = n(325686),
                l = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: i, hideBackButton: a, isFullWidth: o, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: h, secondaryBar: y, style: b, subtitle: g, title: f, titleDomId: E, titleIconCell: C, titleIconCellSize: Z, withBackground: w, withWideContainer: v } = this.props,
                        { isModal: x } = this.context,
                        k = a ? d : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        P = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!w, x, !!y);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: o, isLarge: c, leftControl: k, middleControl: m, position: u(p, x, i), rightControl: h, style: b, subtitle: g, title: f, titleDomId: E, titleIconCell: C, titleIconCellSize: Z, withBackground: P, withWideContainer: v }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? r.createElement(o.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        544239: (e, t, n) => {
            n.d(t, { Z: () => L });
            var r = n(202784),
                i = n(325686),
                a = n(107267),
                o = n(67369),
                l = n(392237),
                s = n(530525),
                c = n(439592),
                d = n(98538),
                u = n(731708),
                m = n(952428),
                p = n(642153),
                h = n(154003),
                y = n(111677),
                b = n.n(y),
                g = n(492140),
                f = n(833057),
                E = n(516951),
                C = n(443781),
                Z = n(278817);
            const w = b().d58baa7f,
                v = b().gfdad702,
                x = ({ media: e, width: t }) => {
                    const { crop: n, image: a } = e,
                        d = (0, o.KU)(),
                        u = r.useMemo(() => [R.thumbnailContainer, d && R.thumbnailContainerNarrow, t ? { width: l.default.theme.spaces[t] } : null], [d, t]);
                    return r.createElement(i.Z, { style: u }, r.createElement(s.Z, { "aria-label": "", aspectMode: c.Z.SQUARE, backgroundColor: l.default.theme.colors.gray300, cropCandidates: n, image: a }));
                },
                k = ({ communityId: e, count: t }) => {
                    const n = w(t);
                    return r.createElement(d.Z.Group, null, r.createElement(d.Z, null, r.createElement(u.ZP, { color: "gray700" }, r.createElement(b().I18NFormatMessage, { $i18n: "b38e130b" }, r.createElement(d.Z.Value, null, b().ibd0106e({ formattedCount: n })), r.createElement(d.Z.Label, null, b().cface2d1({ count: t }))))));
                },
                P = ({ communityId: e, isNsfw: t, media: n, memberCount: a, membersFacepile: o, name: l, onActionButtonJoinClick: s, onPress: c, style: d, thumbnailSize: h, topic: y, withActionButton: b, withPinAction: g }) => {
                    const f = `/i/communities/${e}`,
                        { featureSwitches: E } = r.useContext(C.rC),
                        Z = E.isTrue("communities_adult_content_setting_display"),
                        w = E.isTrue("communities_topic_display");
                    return r.createElement(m.Z, { link: f, onPress: c, style: [R.root, d] }, r.createElement(i.Z, { style: R.container }, r.createElement(i.Z, { style: R.leftColumn }, n ? r.createElement(x, { media: n, width: h }) : null, r.createElement(i.Z, { style: R.attribution }, r.createElement(i.Z, { style: R.name }, r.createElement(u.ZP, { numberOfLines: 1, weight: "bold" }, l), t && Z ? r.createElement(u.ZP, { color: "red600", size: "subtext2" }, " ", v) : null), r.createElement(k, { communityId: e, count: a }), y && w ? r.createElement(i.Z, { style: R.name }, r.createElement(u.ZP, { color: "gray700", numberOfLines: 1 }, y)) : null, Array.isArray(o) ? r.createElement(p.Z, { style: R.facepile, userAvatarSize: "large", userAvatarUrls: o }) : o)), r.createElement(M, { communityId: e, onActionButtonJoinClick: s, withActionButton: b, withPinAction: g })));
                },
                I = b().c5d23126,
                S = b().j44ec610,
                _ = { label: I },
                B = { label: S };
            function M(e) {
                const t = (0, a.useRouteMatch)(),
                    { communityId: n, onActionButtonJoinClick: o, withActionButton: l, withPinAction: s } = e;
                return l ? r.createElement(i.Z, { style: R.rightColumn }, r.createElement(Z.ZP, { communityId: n, match: t, onCommunityMembershipChange: E.Z, onJoinClick: o })) : s ? r.createElement(A, s) : null;
            }
            function A(e) {
                const { handlePinOrUnpin: t, isPinned: n } = e,
                    a = r.useMemo(() => (n ? r.createElement(g.default, { "aria-label": S }) : r.createElement(f.default, { "aria-label": I })), [n]),
                    o = r.useCallback(
                        (e) => {
                            e.preventDefault(), t();
                        },
                        [t],
                    );
                return r.createElement(i.Z, { style: R.rightColumn }, r.createElement(h.ZP, { hoverLabel: n ? B : _, icon: a, onPress: o, type: "brandText" }));
            }
            const L = r.memo(P),
                R = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, container: { flexDirection: "row" }, leftColumn: { alignItems: "center", flexDirection: "row", flex: 1, flexShrink: 1 }, rightColumn: { alignItems: "center", justifyContent: "flex-end", flexDirection: "row", flex: 1, flexShrink: 1 }, attribution: { height: "100%", minWidth: 100 * e.scales[e.scale], justifyContent: "space-between", flexShrink: 1 }, facepile: { justifyContent: "flex-start" }, name: { marginBottom: e.spaces.space2, flexDirection: "row" }, thumbnailContainer: { width: 96 * e.scales[e.scale], marginEnd: e.spaces.space12, borderRadius: e.borderRadii.large, overflow: "hidden" }, thumbnailContainerNarrow: { width: e.spaces.space72 } }));
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => y, w: () => p });
            var r = n(202784),
                i = n(325686),
                a = n(108362),
                o = n(386802),
                l = n(392237),
                s = n(652904),
                c = n(555079),
                d = n(625661),
                u = n(449067),
                m = n(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: a, centerTitle: o, hideBackButton: l, history: s, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: y, rightControl: b, secondaryBar: g, subtitle: f, title: E } = this.props,
                                { isModal: C } = this.context;
                            return r.createElement(i.Z, { style: C ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, r.createElement(d.ZP, { backButtonType: n || (C ? "close" : "back"), backLocation: a, centerTitle: o, fixed: !C, hideBackButton: l, history: s, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: y, ref: e, rightControl: b, secondaryBar: g, style: [C && h.appBarModal, t], subtitle: f, title: E, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: o, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: p, title: y, withoutBottomBarMobile: b } = this.props,
                        { isModal: g } = this.context,
                        f = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: y }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, g && h.rootModal] }, !g && f, r.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [h.container, g && h.containerModal, o] }, g ? r.createElement(m.Z, { style: h.viewport }, f, n) : n), t ? r.createElement(i.Z, { style: [h.bottomBarModal, !g && !b && h.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = o.Z);
            const h = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = p;
        },
        727186: (e, t, n) => {
            n.d(t, { ZP: () => c });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                o = n(392237),
                l = n(386742);
            const s = o.default.create(() => ({ hidden: { opacity: 0 } })),
                c = (e) => {
                    const { children: t, disableInteractiveElementBlocking: n, draggableId: o, fromVirtualList: c, index: d, isBeingDragged: u, isDragDisabled: m, lockYAxis: p } = e;
                    return c && u
                        ? i.createElement(a.Z, { style: s.hidden }, t)
                        : i.createElement(l.lL, { disableInteractiveElementBlocking: n, draggableId: o, index: d, isDragDisabled: m }, (e) => {
                              const n = e.draggableProps.style,
                                  a = p
                                      ? ((e) => {
                                            if (e.transform) {
                                                const t = `translate(0px${e.transform.slice(e.transform.indexOf(","), e.transform.length)}`;
                                                return { ...e, transform: t };
                                            }
                                            return e;
                                        })(n)
                                      : n;
                              return i.createElement("div", (0, r.Z)({ ref: e.innerRef }, e.draggableProps, e.dragHandleProps, { style: a }), t);
                          });
                };
        },
        699910: (e, t, n) => {
            n.d(t, { L: () => S, Z: () => M });
            var r = n(202784),
                i = n(325686),
                a = n(731708),
                o = n(593866),
                l = n(392237),
                s = n(857378),
                c = n(688715),
                d = n(111677),
                u = n.n(d);
            const m = (0, c.ju)("https://help.x.com/rules-and-policies/twitter-rules"),
                p = r.createElement(u().I18NFormatMessage, { $i18n: "j33cc663" }, r.createElement(a.ZP, { link: m, withInteractiveStyling: !1 }, u().h9526e03)),
                h = ({ containerStyle: e, explanation: t, explanationStyle: n, heading: o }) => r.createElement(i.Z, { style: e }, o, r.createElement(a.ZP, { color: "gray700", style: n }, t || p));
            var y = n(779610);
            const b = ({ getPivotLink: e, renderBadge: t, rules: n }) =>
                r.createElement(
                    r.Fragment,
                    null,
                    n.map((n, i) => {
                        const { description: o, name: l, rest_id: s } = n,
                            c = e(n),
                            d = t(i + 1),
                            u = r.createElement(a.ZP, { weight: "bold" }, l);
                        return r.createElement(y.Z, { description: o, key: s, label: u, link: c, thumbnail: d });
                    }),
                );
            var g = n(807896),
                f = n(727186),
                E = n(386742),
                C = n(678773);
            const Z = "rules-container",
                w = "rules-order-badge",
                v = "rules-reorder-item",
                x = l.default.create((e) => ({ icon: { color: e.colors.gray300, flexShrink: 0, paddingStart: e.spaces.space12 } })),
                k = (e) => {
                    const { badge: t, rule: n } = e,
                        { description: i, name: o } = n,
                        l = r.createElement(a.ZP, { weight: "bold" }, o);
                    return r.createElement(y.Z, { description: i, label: l, renderRightContent: () => r.createElement(C.default, { style: x.icon }), testID: v, thumbnail: t });
                },
                P = (e, t, n) => {
                    if (!e.destination) return;
                    const r = ((e, t, n) => {
                        const r = Array.from(e),
                            [i] = r.splice(t, 1);
                        return r.splice(n, 0, i), r;
                    })(t, e.source.index, e.destination.index);
                    n(r);
                },
                I = (e) => {
                    const { onReorder: t, renderBadge: n, rules: i } = e,
                        a = r.useCallback(
                            (e) => {
                                P(e, i, t);
                            },
                            [t, i],
                        );
                    return r.createElement(
                        E.Xi,
                        { onDragEnd: a },
                        r.createElement(E.$p, { droppableId: "droppable" }, (e, t) =>
                            r.createElement(
                                "div",
                                (0, g.Z)({}, e.droppableProps, { ref: e.innerRef }),
                                i.map((e, i) => {
                                    const { rest_id: a } = e;
                                    return r.createElement(f.ZP, { draggableId: a, index: i, isBeingDragged: t.draggingFromThisWith === a, key: a }, r.createElement(k, { badge: n(i + 1), rule: e }));
                                }),
                                e.placeholder,
                            ),
                        ),
                    );
                },
                S = Object.freeze({ Default: "Default", Pivot: "Pivot", Reorder: "Reorder" }),
                _ = (e, t) => {
                    const { badgeStyle: n } = t;
                    return r.createElement(i.Z, { style: [B.badge, n], testID: w }, r.createElement(a.ZP, { align: "center", color: "text", weight: "bold" }, e));
                },
                B = l.default.create((e) => ({ badge: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.infinite, justifyContent: "center", overflow: "hidden", height: e.spaces.space32, width: e.spaces.space32 }, bottomMargin: { marginBottom: s.h$ } })),
                M = ({ badgeStyle: e, displayType: t = S.Default, explanation: n, getPivotLink: a, headerContainerStyle: l, headerExplanationStyle: s, heading: c, limit: d, onReorder: u, ruleContainerStyle: m, rules: p, withBottomMargin: y = !1, withHeader: g = !0 }) => {
                    const f = { badgeStyle: e },
                        E = ((e, t, n) => (t ? e.slice(0, t) : e).map((e, t) => ({ label: e.name, description: e.description, decoration: _(t + 1, n) })))(p, d, f),
                        C = (e) => _(e, f);
                    return E.length > 0 ? r.createElement(i.Z, { style: y ? B.bottomMargin : null, testID: Z }, g ? r.createElement(h, { containerStyle: l, explanation: n, explanationStyle: s, heading: c }) : null, t === S.Pivot && a ? r.createElement(b, { getPivotLink: a, renderBadge: C, rules: p }) : t === S.Reorder && u ? r.createElement(I, { onReorder: u, renderBadge: C, rules: p }) : r.createElement(o.Z, { containerStyle: m, items: E })) : null;
                };
        },
        724328: (e, t, n) => {
            n.d(t, { E: () => i });
            n(202784);
            var r = n(111677);
            const i = n.n(r)().c00c234f;
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                i = n(500002),
                a = n(668214),
                o = n(997174),
                l = n(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: r },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: a, search: o },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const c = i || l;
                    ((c && i !== l) || (!c && n !== a) || r !== o || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, i.ZP)(s(c));
        },
        386742: (e, t, n) => {
            n.d(t, { $p: () => d, Xi: () => o, _l: () => c, _y: () => l, bK: () => u, lL: () => s });
            var r = n(202784),
                i = n(523561),
                a = n(195560);
            const o = (0, i.Z)({ loader: () => Promise.all([n.e("ondemand.ReactBeautifulDnd-e96e9bea"), n.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(n.bind(n, 391426)), renderPlaceholder: (e, t) => r.createElement(a.Z, { hasError: e, onRetry: t }) }),
                l = o,
                s = (0, i.Z)({ noErrorBoundary: !0, loader: () => Promise.all([n.e("ondemand.ReactBeautifulDnd-e96e9bea"), n.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(n.bind(n, 797546)), renderPlaceholder: (e, t) => r.createElement(a.Z, { hasError: e, onRetry: t }) }),
                c = s,
                d = (0, i.Z)({ loader: () => Promise.all([n.e("ondemand.ReactBeautifulDnd-e96e9bea"), n.e("ondemand.ReactBeautifulDnd-1c3ec694")]).then(n.bind(n, 896830)), renderPlaceholder: (e, t) => r.createElement(a.Z, { hasError: e, onRetry: t }) }),
                u = d;
        },
        450562: (e, t, n) => {
            n.d(t, { V: () => a, Z: () => o });
            var r = n(189676),
                i = n(545521);
            const a = (e) => `communitiesMembershipsSlice-${e}`,
                o = (e) => (0, i.Z)({ contextSuffix: "COMMUNITIES_MEMBERSHIPS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(r.Z).fetchCommunitiesMembershipsSlice, getEndpointParams: (e) => e, sliceKey: a(e) });
        },
        299226: (e, t, n) => {
            n.d(t, { Lm: () => m, Wr: () => p, tV: () => h });
            n(136728);
            var r = n(491963),
                i = n(56519),
                a = n(709318),
                o = n(872788),
                l = n(390387),
                s = n(841198),
                c = n(919022),
                d = n(172497),
                u = n(450562);
            const m =
                    (e) =>
                    (t, n, { api: i }) =>
                        t(r.ZP.join(e)).then((i) => {
                            const c = n(),
                                m = ((e, t) => (e.some((e) => e === t) ? e : [t, ...e]))((0, d.eF)(c), e),
                                p = [(0, d.H_)(m)],
                                h = (0, l._h)(c);
                            h && p.push((0, s.Be)((0, u.V)(h)));
                            const y = i?.entities?.communities[e];
                            return y && (p.push(r.ZP.updateOne(e, y)), y.is_pinned && p.push((0, a.Co)({ id: e, name: y.name, type: o.FO.COMMUNITY }))), t(p);
                        }),
                p =
                    (e) =>
                    (t, n, { api: i }) =>
                        t(r.ZP.leave(e)).then((i) => {
                            const m = n(),
                                p = ((e, t) => e.filter((e) => t !== e))((0, d.eF)(m), e),
                                h = [(0, d.H_)(p)],
                                y = (0, l._h)(m);
                            y && h.push((0, s.Be)((0, u.V)(y)));
                            const b = i?.entities?.communities[e];
                            if (b) {
                                const t = c.ZP.selectViewerUser(m);
                                b.membersFacepileUrls && t?.profile_image_url_https && (b.membersFacepileUrls = b.membersFacepileUrls?.filter((e) => e !== t?.profile_image_url_https)), h.push(r.ZP.updateOne(e, b)), h.push((0, a.Vu)({ id: e, name: b.name, type: o.FO.COMMUNITY }));
                            }
                            return t(h);
                        }),
                h =
                    (e, t) =>
                    (n, a, { api: o }) =>
                        n(r.ZP.invite(e, { userId: t })).then((o) => {
                            const l = a();
                            if (o)
                                switch (o.type) {
                                    case "UserCommunityRelationship": {
                                        o.normalized.entities && n((0, i.dP)(o.normalized.entities));
                                        const t = ((e, t, n) => {
                                            const i = e.entities.communities.entities[t];
                                            if ("CommunityInvites" === i?.invites_result.__typename) {
                                                const e = { invites_result: { ...i.invites_result, remaining_invite_count: n(i.invites_result.remaining_invite_count) } };
                                                return r.ZP.updateOne(i.id_str, e);
                                            }
                                        })(l, e, () => o.remainingInviteCount);
                                        t && n(t);
                                        break;
                                    }
                                    case "UserCommunityInviteActionUnavailable": {
                                        const r = `${e}_${t}`,
                                            a = { id_str: r, __typename: "UserCommunityInviteActionUnavailable", reason: o.reason, message: o.message };
                                        n((0, i.dP)({ userCommunityInviteActionResult: { [r]: a } }));
                                        break;
                                    }
                                }
                        });
        },
        492057: (e, t, n) => {
            n.d(t, { BL: () => i, tc: () => a });
            var r = n(491963);
            const i = (e, t) => {
                    if (t.communityId) return r.ZP.select(e, t.communityId);
                },
                a = (e, t, n) => {
                    const i = n || t.communityId;
                    if (i) return r.ZP.selectFetchStatus(e, i);
                };
        },
        545521: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(99107),
                i = n(166852),
                a = n(841198),
                o = n(917799),
                l = n(312771),
                s = n(56519),
                c = n(877848);
            const d = (e) => [(0, s.dP)(e)];
            function u({ contextSuffix: e, getEndpointParams: t, getFetchApiEndpoint: n, mapEntitiesToActions: s = d, sliceKey: u, injectionOptions: { identityFunction: m } = {} }) {
                const p = [],
                    h = (e) => e[a.Yf]?.[u],
                    y = (e) => {
                        const t = h(e);
                        if (!t) return p;
                        const n = t.items || p,
                            r = t.injections;
                        return r?.length > 0 ? (0, i.Z)(r.concat(n), m) : n;
                    },
                    b = (e) => {
                        const t = h(e),
                            n = y(e),
                            r = n?.length > 0;
                        return t ? (0, l.ke)(t.fetchStatus, r) : l.ZP.NONE;
                    },
                    g =
                        (r) =>
                        (i, l, { api: c }) => {
                            const d = t(r);
                            return (0, o._O)(i, { params: d, request: n(c) })(a.t5({ contextSuffix: e, params: r, sliceKey: u }), (e) => {
                                if (e) return s(e.entities);
                            });
                        };
                return {
                    select: h,
                    selectItems: y,
                    selectFetchStatus: b,
                    fetch: g,
                    fetchIfNeeded: (e) => (t, n) => {
                        const i = n(),
                            a = h(i),
                            o = b(i);
                        return !a || (o !== l.ZP.LOADING && o !== l.ZP.LOADED) ? t(g(e)) : r.O4.resolve();
                    },
                    fetchBottom: (e) => (t, n) => {
                        const i = n(),
                            a = h(i),
                            o = ((e) => {
                                const t = h(e);
                                return t?.cursors?.next_cursor;
                            })(i);
                        return a.fetchStatus[c.Yj.BOTTOM] !== l.ZP.LOADING && o ? t(g({ ...e, cursor: o })) : r.O4.resolve();
                    },
                    injectItems: (e) => a.WC({ items: e, sliceKey: u, identityFunction: m }),
                    removeItems: (e) => a.Er({ items: e, sliceKey: u, identityFunction: m }),
                };
            }
        },
        841198: (e, t, n) => {
            n.d(t, { Be: () => f, Er: () => v, Ev: () => b, WC: () => Z, Yf: () => u, t5: () => x });
            n(571372);
            var r = n(166852),
                i = n(370751),
                a = n(499627),
                o = n(917799),
                l = n(312771),
                s = n(877848);
            const c = {},
                d = [],
                u = "slices",
                m = () => ({ cursors: {}, fetchStatus: { top: l.ZP.NONE, bottom: l.ZP.NONE }, items: d, injections: d }),
                p = (0, o.dg)("rweb/slices", "FETCH");
            const h = (e, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case p.REQUEST: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, fetchStatus: { ...e.fetchStatus, [n]: l.ZP.LOADING } } : e;
                        }
                        case p.SUCCESS: {
                            const { direction: n } = t.meta,
                                i = t.payload,
                                a = e.items;
                            return !n || i instanceof Error ? e : { ...e, items: (0, r.Z)(a.concat(i?.result)), cursors: { ...i?.slice_info }, error: null, fetchStatus: { ...e.fetchStatus, [n]: l.ZP.LOADED } };
                        }
                        case p.FAILURE: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, error: t.payload, fetchStatus: { ...e.fetchStatus, [n]: l.ZP.FAILED } } : e;
                        }
                        default:
                            return e;
                    }
                },
                y = "rweb/slices/CLEAR_PARTIAL_SLICES_CACHE",
                b = (e) => ({ type: y, meta: { sliceKey: e } }),
                g = "rweb/slices/DELETE_SLICE",
                f = (e) => ({ type: g, meta: { sliceKey: e } }),
                E = "rweb/slices/RESTORE_SLICE",
                C = "rweb/slices/INJECT_ITEMS_SLICE",
                Z = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: C, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                w = "rweb/slices/REMOVE_ITEMS_SLICE",
                v = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: w, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                x = ({ contextSuffix: e, params: t, sliceKey: n }) => ({ actionTypes: p, context: `FETCH_${e}`, meta: { sliceKey: n, direction: t?.cursor ? s.Yj.BOTTOM : s.Yj.TOP } });
            a.Z.register({
                [u]: function (e = c, t) {
                    if (!t) return e;
                    const { sliceKey: n } = t.meta || {};
                    if (!n) return e;
                    switch (t.type) {
                        case g: {
                            const t = { ...e };
                            return delete t[n], t;
                        }
                        case E:
                            return { ...e, [n]: t.payload };
                        case y: {
                            const t = { ...e };
                            return (
                                Object.keys(t).forEach((e) => {
                                    e.includes(n) && delete t[e];
                                }),
                                t
                            );
                        }
                        case C: {
                            const i = e[n] || m(),
                                a = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                o = Array.isArray(t.payload) ? t.payload : void 0;
                            return o?.length ? { ...e, [n]: { ...i, injections: (0, r.Z)(o.concat(i.injections), a) } } : e;
                        }
                        case w: {
                            const r = e[n] || m(),
                                a = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                o = Array.isArray(t.payload) ? (0, i.Z)(a ? t.payload.map(a) : t.payload) : void 0,
                                l = (e, t) => !o?.has(a ? a(e, t, r.injections) : e);
                            return o?.size ? { ...e, [n]: { ...r, injections: r.injections.filter(l), items: r.items.filter(l) } } : e;
                        }
                        default: {
                            const r = e[n] || m(),
                                i = h(r, t);
                            return { ...e, [n]: { ...i } };
                        }
                    }
                },
            });
        },
        278817: (e, t, n) => {
            n.d(t, { ZP: () => Q });
            var r = n(807896),
                i = n(202784),
                a = n(325686),
                o = n(107267),
                l = n(154003),
                s = n(970187),
                c = n(529356),
                d = n(392237),
                u = n(111677),
                m = n.n(u),
                p = n(870358),
                h = n(581335),
                y = n(71620),
                b = n(668214),
                g = n(491963),
                f = n(299226),
                E = n(492057),
                C = n(919022),
                Z = n(182846);
            const w = (0, b.Z)()
                .propsFromState(() => ({ community: E.BL, viewerUser: C.ZP.selectViewerUser, joinActionResultType: Z.HN }))
                .adjustStateProps((e) => {
                    const { viewerUser: t, ...n } = e;
                    return { isProtectedUser: t?.protected, ...n };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("COMMUNITY_DETAIL"), join: f.Lm, requestToJoin: g.ZP.requestToJoin, leave: f.Wr }));
            var v = n(708852),
                x = n(386802),
                k = n(138099),
                P = n(757700);
            function I(e) {
                const { children: t, onMaskClick: n } = e,
                    r = (0, v.D2)(),
                    a = i.useMemo(() => ({ isModal: r }), [r]);
                let o = { type: "full" };
                return r && (o = { ...o, onMaskClick: n, enableMaskForDismiss: !0, allowBackNavigation: !0, withKeyboardNavigation: !0, withMask: !0, style: P.CA[P.Cg.fixed] }), i.createElement(x.Z.Provider, { value: a }, i.createElement(k.Z, o, t));
            }
            const S = i.memo(I);
            var _ = n(731708);
            const B = m().bc7a7af4,
                M = ({ offendingRule: e }) => i.createElement(a.Z, null, e ? i.createElement(a.Z, { style: A.offendingRule }, ((e) => i.createElement(m().I18NFormatMessage, { $i18n: "jb124a07" }, i.createElement(_.ZP, { weight: "bold" }, m().a0e0a52c({ offendingRule: e }))))(e)) : null, i.createElement(_.ZP, null, B)),
                A = d.default.create((e) => ({ offendingRule: { display: "flex", marginBottom: e.spaces.space12 } })),
                L = m().hafa07f2,
                R = m().e7969518,
                D = m().c15bee32,
                T = m().efa265fc,
                F = i.createElement(m().I18NFormatMessage, { $i18n: "gb7eca21" }, i.createElement(_.ZP, { link: "/settings/audience_and_tagging" }, m().fe832999)),
                V = m().fc2a5c92,
                N = m().f9cecf48,
                j = m().bf7bdb60,
                O = m().h27d6950,
                U = m().b02360f6,
                z = Object.freeze({ joinAvailable: "CommunityJoinAction", joinUnavailable: "CommunityJoinActionUnavailable", leaveAvailable: "CommunityLeaveAction", leaveUnavailable: "CommunityLeaveActionUnavailable" }),
                H = Object.freeze({ Unavailable: "Unavailable", ViewerNotMember: "ViewerNotMember", ViewerIsSoleAdmin: "ViewerIsSoleAdmin" }),
                W = Object.freeze({ Unavailable: "Unavailable", ViewerIsMember: "ViewerIsMember", ViewerIsRemoved: "ViewerIsRemoved", ViewerNotInvited: "ViewerNotInvited", ViewerIsProtected: "ViewerIsProtected", ViewerRequestPending: "ViewerRequestPending", ViewerJoinRequestRequired: "ViewerRequestRequired" });
            const q = m().e6057014,
                $ = m().b5334780,
                K = { follow: m().b171d7c4, following: m().aa7ae3f6, unfollow: m().bb1d57b6 },
                J = m().j24c37b2,
                Y = (e) => {
                    const [t, n] = i.useState(void 0),
                        [d, u] = i.useState(!1),
                        m = { history: (0, o.useHistory)(), location: (0, o.useLocation)(), match: (0, o.useRouteMatch)() },
                        { community: y, createLocalApiErrorHandler: b, isProtectedUser: g, join: f, leave: E, onCommunityMembershipChange: C, onJoinClick: Z, requestToJoin: w } = e,
                        { actions: v, id_str: x, name: k, role: P } = y,
                        I = v?.join_action_result,
                        _ = v?.leave_action_result,
                        B = (0, p.Wh)(P),
                        A = I?.reason === W.ViewerJoinRequestRequired,
                        Y = I?.reason === W.ViewerRequestPending,
                        Q = i.useCallback(() => {
                            const { rules: e, viewerViolatedRule: t } = y,
                                { canAction: r, message: a } = (function (e, t, n) {
                                    const { __typename: r, message: a, reason: o } = e,
                                        l = (e) => ({ canAction: !0, message: e }),
                                        s = (e) => ({ canAction: !1, message: e }),
                                        c = s({ headline: N, text: j });
                                    switch (r) {
                                        case z.joinAvailable:
                                            return l();
                                        case z.joinUnavailable:
                                            switch (o) {
                                                case W.ViewerIsRemoved:
                                                    return s({ headline: D, text: i.createElement(M, { offendingRule: n?.name }) });
                                                case W.ViewerNotInvited:
                                                    return s({ headline: L, text: R });
                                                case W.ViewerIsProtected:
                                                    return t ? s({ headline: T, text: F }) : l();
                                                case W.Unavailable:
                                                    return s({ headline: N, text: a });
                                                case W.ViewerJoinRequestRequired:
                                                    return l();
                                                default:
                                                    return c;
                                            }
                                        default:
                                            return c;
                                    }
                                })(I, g, t);
                            Z && Z(), !r && a && n(a), r && (e && e.length > 0 ? u(!0) : A ? w(x).catch(b({})) : f(x).then(C).catch(b({})));
                        }, [y, x, b, g, f, A, I, w, C, Z]),
                        X = i.useCallback(() => {
                            const { canAction: e, message: t } = (function (e) {
                                const { __typename: t, reason: n } = e,
                                    r = (e) => ({ canAction: !1, message: e }),
                                    i = r({ headline: V, text: j });
                                switch (t) {
                                    case z.leaveAvailable:
                                        return { canAction: !0, message: a };
                                    case z.leaveUnavailable:
                                        return n === H.ViewerIsSoleAdmin ? r({ headline: O, text: U }) : i;
                                    default:
                                        return i;
                                }
                                var a;
                            })(_);
                            !e && t && n(t), e && E(x).then(C).catch(b({}));
                        }, [x, b, E, _, C]),
                        ee = i.useCallback(() => {
                            n(void 0);
                        }, []),
                        te = i.useCallback(() => {
                            u(!1);
                        }, []),
                        ne = i.useMemo(() => (A ? { ...K, follow: q } : K), [A]);
                    return i.createElement(a.Z, { style: G.button }, d ? i.createElement(S, { onMaskClick: te }, i.createElement(h.default, (0, r.Z)({ communityId: x, onCommunityMembershipChange: C, onDismiss: te }, m))) : null, Y ? i.createElement(l.ZP, { disabled: !0, type: "primaryOutlined" }, $) : k ? i.createElement(s.Z, { buttonText: ne, isFollowing: B, name: k, onFollow: Q, onUnfollow: X, type: "community" }) : null, t ? i.createElement(c.Z, { actionLabel: J, graphicDisplayMode: "none", headline: t.headline, onAction: ee, onClose: ee, subtext: t.text, withCloseButton: !1 }) : null);
                },
                G = d.default.create((e) => ({ button: { justifyContent: "right" } })),
                Q = w((e) => {
                    const { community: t, communityId: n, match: a, ...o } = e;
                    return t ? i.createElement(Y, (0, r.Z)({ community: t }, o)) : null;
                });
        },
        581335: (e, t, n) => {
            n.r(t), n.d(t, { CommunityRulesModal: () => T, default: () => F });
            var r = n(202784),
                i = n(325686),
                a = n(731708),
                o = n(154003),
                l = n(834324),
                s = n(661810),
                c = n(855488),
                d = n(392237),
                u = n(111677),
                m = n.n(u),
                p = n(211971),
                h = n(980407),
                y = n(699910),
                b = n(724328),
                g = n(443781),
                f = n(870358),
                E = n(87063),
                C = n(615027),
                Z = n(71620),
                w = n(668214),
                v = n(491963),
                x = n(299226),
                k = n(492057),
                P = n(182846);
            const I = (e, t) => {
                    const { communityId: n, location: r } = t;
                    return n ? k.BL(e, t) : r.state?.community || P.ZM(e, t);
                },
                S = (0, w.Z)()
                    .propsFromState(() => ({ community: I, fetchStatus: P.YE, isCommunityMember: P.Cp }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("COMMUNITY_RULES_SCREEN"), join: x.Lm, requestToJoin: v.ZP.requestToJoin, fetchCommunityIfNeeded: v.ZP.fetchOneIfNeeded }))
                    .withAnalytics({ page: "community", section: "rules", component: "modal" }),
                _ = m().h4fbfa58,
                B = m().ea8cfb1e,
                M = m().dc1b14a1,
                A = m().fc2a5c92,
                L = m().c966ac64,
                R = m().g690e07e,
                D = m().a5d21bf4,
                T = (e) => {
                    const { community: t, createLocalApiErrorHandler: n, fetchCommunityIfNeeded: d, fetchStatus: u, history: m, isCommunityMember: Z, join: w, match: v, onCommunityMembershipChange: x, onDismiss: k, requestToJoin: P } = e,
                        [I, S] = r.useState(""),
                        T = r.useCallback(
                            (e) => {
                                S(e.target.value);
                            },
                            [S],
                        ),
                        { featureSwitches: F } = r.useContext(g.rC),
                        N = F.getNumberValue("c9s_max_community_answer_length", 280),
                        j = F.isTrue("c9s_community_answer_box_join_page_enabled"),
                        O = e.communityId || v.params.communityId,
                        U = "ViewerRequestRequired" === t?.actions?.join_action_result?.reason,
                        [z, H] = r.useState(!1);
                    r.useEffect(() => {
                        O && !t && u !== E.Z.LOADED && d(O).catch(n());
                    });
                    const W = r.useCallback((e) => r.createElement(a.ZP, { size: "title4", weight: "bold" }, M({ communityName: e })), []),
                        q = U ? B : _,
                        $ = r.useCallback(() => {
                            if (t) {
                                const { id_str: e } = t;
                                if (U)
                                    return void P(e, { answer: I })
                                        .then((e) => {
                                            if ("CommunityJoinRequest" === e?.type) k();
                                            else H(!0);
                                        })
                                        .catch(n);
                                w(e).then(x).then(k).catch(n());
                            }
                        }, [I, t, n, H, w, U, x, k, P]),
                        K = r.useCallback(() => r.createElement(o.ZP, { onPress: $, size: "small", type: "brandFilled" }, q), [q, $]),
                        J = z ? r.createElement(i.Z, { style: V.error }, r.createElement(l.Z, { Icon: p.default, headline: A, text: L, type: "danger" })) : void 0;
                    if (t) {
                        const { name: e, question: n, rules: o } = t;
                        return o && o.length && !Z ? r.createElement(h.Z, { history: m, onBackClick: k, rightControl: K(), title: (0, b.E)({ communityName: e }) }, r.createElement(s.Z, { spacing: "space2" }), n && "" !== n?.trim() && U && j && r.createElement(i.Z, null, r.createElement(a.ZP, { size: "title4", style: V.divStyles, weight: "bold" }, n), r.createElement(c.Z, { calculateLength: f.Z, helperText: D, label: R, maxLength: N, multiline: !0, name: "typedJoinRequestAnswer", numberOfLines: 3, onChange: T }), r.createElement(s.Z, { spacing: "space2" })), J, r.createElement(y.Z, { badgeStyle: V.badgeStyle, headerContainerStyle: V.containerStyle, headerExplanationStyle: V.headerExplanationStyle, heading: W(e), rules: o })) : r.createElement(C.Z, { to: `/i/communities/${t.id_str}` });
                    }
                    return u === E.Z.LOADED ? r.createElement(C.Z, { to: "/" }) : null;
                },
                F = S(T),
                V = d.default.create((e) => ({ error: { paddingHorizontal: e.spaces.space16 }, badgeStyle: { marginEnd: e.spaces.space16 }, headerExplanationStyle: { marginTop: e.spaces.space8 }, containerStyle: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, divStyles: { marginEnd: e.spaces.space16, marginTop: e.spaces.space8, marginStart: e.spaces.space16 } }));
        },
        182846: (e, t, n) => {
            n.d(t, { Cp: () => d, Dt: () => u, HN: () => p, Kz: () => c, XH: () => o, YE: () => m, ZM: () => s, be: () => a, sq: () => l });
            var r = n(870358),
                i = n(491963);
            n(919022);
            const a = (e, t) => t.match.params.screenName || void 0,
                o = (e, t) => t.match.params.communityId || void 0,
                l = (e, t) => t.match.params.communityRuleId || void 0,
                s = (e, t) => {
                    const n = o(e, t);
                    return n ? i.ZP.select(e, n) : void 0;
                },
                c = (e, t) => {
                    const n = o(e, t);
                    if (n) return i.ZP.selectErrors(e)[n];
                },
                d = (e, t) => {
                    const n = s(e, t);
                    return (0, r.Wh)(n?.role);
                },
                u = (e, t) => {
                    const n = s(e, t),
                        r = l(e, t);
                    return n?.rules?.find((e) => e.rest_id === r);
                },
                m = (e, t, n) => {
                    const r = n || o(e, t);
                    if (r) return i.ZP.selectFetchStatus(e, r);
                },
                p = (e, t) => {
                    const n = s(e, t);
                    return n?.actions?.join_action_result?.__typename;
                };
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                i = n(325686),
                a = n(392237);
            function o({ spacing: e, style: t }) {
                return r.createElement(i.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? a.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = a.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                i = n(325686),
                a = n(191796),
                o = n(58399),
                l = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: m = !1, label: p, link: h, onPress: y, paddingHorizontal: b, renderRightContent: g, role: f = "tab", styleOverride: E, testID: C = "pivot", thumbnail: Z, thumbnailSize: w, withoutArrow: v = !1 } = e,
                        x = [u.thumbnailContainer, "medium" === w && u.thumbnailContainerMedium],
                        k = "string" == typeof p ? r.createElement(l.ZP, null, p) : p,
                        P = "object" == typeof h && h.external && !h.openInSameFrame,
                        I = n ? ("string" == typeof n ? r.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, n) : n) : null,
                        S = r.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === f ? m : null, disabled: d, link: d ? void 0 : h, onPress: y, role: f, style: [u.root, S, d && u.disabled, E], testID: C, withInteractiveStyling: !!h || !!y }, r.createElement(i.Z, { style: u.contentContainer }, Z ? r.createElement(i.Z, { style: x }, Z) : null, r.createElement(i.Z, { style: u.content }, k, I), g ? g() : null, (!h && !y) || d || v ? null : P ? r.createElement(a.default, { style: u.icon }) : r.createElement(o.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                i = n(325686),
                a = n(731708),
                o = n(891198),
                l = n(280278),
                s = n(392237);
            const c = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, o.Gb)(e) !== (0, o.wl)(e) ? { label: (0, o.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: i } = this.props;
                    return r.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: i }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                r.createElement(
                    i.Z,
                    { style: [m.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(i.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: i, weight: o = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: c, style: i, weight: o }) : r.createElement(a.ZP, { children: t, color: s ? "white" : "text", size: c, style: i, weight: o }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                i = n(890601),
                a = n(783427),
                o = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpacePeek~bundle.Communities~loader.CommunityHandler.47c0d59a.js.map
