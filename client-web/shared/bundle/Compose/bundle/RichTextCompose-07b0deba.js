"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Compose~bundle.RichTextCompose-07b0deba"],
    {
        572661: (e, t, n) => {
            n.d(t, { Z: () => Ae });
            var r = n(807896),
                a = n(202784),
                l = n(325686),
                o = n(840590),
                s = n(30899),
                i = n(392237),
                c = n(674132),
                d = n.n(c),
                u = n(187669),
                m = n(81233),
                p = n(443781),
                b = n(24949),
                g = n(71620),
                h = n(668214),
                y = n(491963),
                f = n(172497),
                C = n(450562),
                E = n(175856),
                Z = n(390387),
                v = n(137204),
                x = n(632960);
            const w = (e, t) => {
                    const n = t.audienceControlsValue.communityIdValue || void 0;
                    return n ? y.ZP.select(e, n) : void 0;
                },
                _ = (e, t) => (0, E.t5)(e, E.Us),
                F = (e, t) => (0, E.t5)(e, E.kr),
                I = (e) => {
                    const t = (0, v.Ln)(e);
                    return t.length ? t[0] : void 0;
                },
                S = (0, h.Z)()
                    .propsFromState(() => ({ communities: y.W0, educationalVisibilityFlag: _, trustedFriendsEducationVisibilityFlag: F, hasMemberships: f.fn, selectedCommunity: w, sliceModule: (0, b.P1)(Z.x0, (e) => (e ? (0, C.Z)(e) : void 0)), selectTrustedFriendsList: I, actAsUserId: Z.dY }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("COMMUNITIES_CONTROLS"), addEducationFlag: () => (0, E.pj)(E.Us), addTrustedFriendsEducationFlag: () => (0, E.pj)(E.kr), updateSingleComposer: x.zi, fetchOrCreateTrustedFriendsList: v.BS }));
            n(136728);
            var P = n(98538),
                T = n(154003),
                k = n(731708),
                M = n(143670),
                A = n(14284),
                L = n(491831),
                V = n(144251),
                D = n(337985),
                B = n(143778),
                z = n(715601),
                R = n(725516),
                O = n(26232);
            const H = (e, t) => (t.communityId ? y.ZP.select(e, t.communityId) : void 0),
                U = (e) => x.SJ(e, ""),
                N = (0, h.Z)().propsFromState(() => ({ community: H, broadcastCommunityTweet: U })),
                j = d().d58baa7f,
                W = N(
                    a.memo((e) => {
                        const { broadcastCommunityTweet: t, clickHandler: n, community: r, communityId: l, selectedCommunityId: o } = e;
                        if (!r) return null;
                        const { member_count: s } = r;
                        return a.createElement(M.Z, {
                            actionSubText: (() => {
                                const e = j(s);
                                return a.createElement(P.Z.Group, null, a.createElement(P.Z, null, a.createElement(d().I18NFormatMessage, { $i18n: "b38e130b" }, a.createElement(P.Z.Value, null, d().ibd0106e({ formattedCount: e })), a.createElement(P.Z.Label, null, d().cface2d1({ count: s })))));
                            })(),
                            actionText: r.name,
                            isSelected: o === l,
                            key: l,
                            media: r.media,
                            onClick: n({ _type: "community_members", communityIdValue: l, conversationControlsValue: "community_members", broadcast: t }),
                            selectable: !0,
                            style: $.menuItem,
                        });
                    }),
                ),
                $ = i.default.create((e) => ({ menuItem: { alignItems: "center" } })),
                G = d().e815fc34,
                q = d().c63602d4,
                Y = d().d52a1caa,
                J = d().cf44066a,
                Q = d().c6992b94,
                X = d().abd845fe,
                K = d().d58baa7f,
                ee = i.default.create((e) => ({ hidden: { visibility: "hidden" }, title: { flexDirection: "column", paddingVertical: e.spaces.space4, paddingHorizontal: e.spaces.space12 }, root: { flex: 1, flexDirection: "column", paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12 }, menuItem: { alignItems: "center" }, superFollowsIcon: { backgroundColor: e.colors.plum500 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, scrollable: { flexGrow: 1, flexShrink: 1, overflow: "auto" } })),
                te = (e) => {
                    const { actAsUserId: t, audienceControlsValue: n, dismiss: r, everyoneLabel: o, hasMemberships: s, history: i, isSuperFollowsCreator: c, isTrustedFriendsEnabled: u, onAudienceControlsValueChange: m, premiumAudienceControlEnabled: p, sliceModule: b, updateSingleComposer: g } = e,
                        h = n.premiumExclusiveControlOptions || void 0,
                        y = n.communityIdValue || void 0,
                        f = n.exclusivityControlValue || void 0,
                        C = n.trustedFriendsValue || void 0,
                        E = e.trustedFriendsList?.rest_id,
                        Z = e.trustedFriendsList?.member_count ?? 0,
                        v = (0, R.z)(),
                        x = a.useCallback(
                            (e) => () => {
                                m(e), ["super_followers_exclusive", "community_members", "trusted_friends_tweet", "premium_exclusive"].indexOf(e._type) > -1 && g({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } }), r();
                            },
                            [m, g, r],
                        ),
                        w = a.useCallback(() => {
                            if (E) return v.scribe({ section: "audience_selector", component: "trusted_friends", element: "edit_list_button", action: "click" }), i.push(`/i/circles/${E}/members`);
                        }, [t, v, i, E]);
                    return a.createElement(
                        l.Z,
                        { style: ee.root },
                        a.createElement(
                            z.Z,
                            { style: ee.viewport },
                            a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(k.ZP, { size: "headline1", style: ee.title, weight: "bold" }, G),
                                a.createElement(
                                    l.Z,
                                    { style: ee.scrollable },
                                    a.createElement(M.Z, { Icon: A.default, actionText: o, isSelected: !(f || y || C || h), onClick: x({ _type: "conversation_controls", conversationControlsValue: "all" }), selectable: !0, style: ee.menuItem, withIconAsThumbnail: !0 }),
                                    c ? a.createElement(M.Z, { Icon: L.default, actionText: Y, iconThumbnailColor: "exclusive", isSelected: !!f, onClick: x({ _type: "super_followers_exclusive", conversationControlsValue: "super_followers_exclusive", exclusivityControlValue: {} }), selectable: !0, style: ee.menuItem, withIconAsThumbnail: !0 }) : null,
                                    p ? a.createElement(M.Z, { Icon: V.default, actionText: Q, iconThumbnailColor: "primary", isSelected: !!h, onClick: x({ _type: "premium_exclusive", conversationControlsValue: "premium", premiumExclusiveControlOptions: {} }), selectable: !0, style: ee.menuItem, withIconAsThumbnail: !0 }) : null,
                                    u && e.trustedFriendsList && E
                                        ? a.createElement(M.Z, {
                                              Icon: D.default,
                                              actionSubText: ((e) => {
                                                  const t = K(e);
                                                  return a.createElement(P.Z.Group, null, a.createElement(P.Z, null, a.createElement(d().I18NFormatMessage, { $i18n: "g8ffaf17" }, a.createElement(P.Z.Value, null, d().a5f7b700({ formattedCount: t })), a.createElement(P.Z.Label, null, d().a7daec1e({ count: e }))), a.createElement(T.ZP, { onPress: w, size: "xSmall", type: "primaryText" }, X)));
                                              })(Z),
                                              actionText: J,
                                              iconThumbnailColor: "success",
                                              isSelected: !!C,
                                              onClick: x({ _type: "trusted_friends_tweet", conversationControlsValue: "trusted_friends_tweet", trustedFriendsMemberCount: Z, trustedFriendsValue: { trusted_friends_list_id: E } }),
                                              selectable: !0,
                                              style: ee.menuItem,
                                              withIconAsThumbnail: !0,
                                          })
                                        : null,
                                    s && b ? a.createElement(l.Z, null, a.createElement(k.ZP, { style: ee.title, weight: "bold" }, q), a.createElement(O.Z, { module: b, noItemsRenderer: B.Z, renderer: (e) => a.createElement(W, { clickHandler: x, communityId: e, dismiss: r, key: e, selectedCommunityId: y }), withoutHeadroom: !0 })) : null,
                                ),
                            ),
                        ),
                    );
                };
            var ne = n(530525),
                re = n(439592),
                ae = n(117754);
            const le = d().f0598964,
                oe = d().e1ae1c0a,
                se = d().fc5bfd96,
                ie = d().f5b3dc1e,
                ce = i.default.create((e) => ({ root: { flexDirection: "column", paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge }, modal: { borderRadius: e.borderRadii.none }, title: { flexDirection: "column", paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space12 }, createButton: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 }, coverContainer: { height: "170px", width: "100%" } })),
                de = (e) => {
                    const { onAction: t, setShowTrustedFriendsModal: n } = e;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(
                            l.Z,
                            { "aria-describedby": "trusted-friends-education-popover", "aria-labelledby": "trustd-friends-education-title", role: "dialog", style: ce.root },
                            a.createElement(l.Z, { style: ce.coverContainer }, a.createElement(ne.Z, { "aria-label": "", aspectMode: re.Z.COVER, image: ae })),
                            a.createElement(
                                l.Z,
                                { style: ce.title },
                                a.createElement(k.ZP, { id: "conversation-controls-title", size: "title3", style: ce.title, weight: "bold" }, le),
                                a.createElement(k.ZP, { color: "gray700", id: "conversation-controls-details", size: "body", style: ce.createButton }, oe),
                                a.createElement(
                                    T.ZP,
                                    {
                                        onPress: () => {
                                            t(), n(!0);
                                        },
                                        size: "xLarge",
                                        style: ce.createButton,
                                        type: "primaryFilled",
                                    },
                                    se,
                                ),
                                a.createElement(
                                    T.ZP,
                                    {
                                        key: "button_cancel",
                                        onPress: () => {
                                            t();
                                        },
                                        size: "xLarge",
                                        style: ce.cancelButton,
                                        type: "primaryOutlined",
                                    },
                                    ie,
                                ),
                            ),
                        ),
                    );
                };
            var ue = n(688715),
                me = n(529356),
                pe = n(159340),
                be = n(121791),
                ge = n(194417),
                he = n(293115);
            const ye = (0, ue.ju)("https://help.x.com/using-twitter/twitter-circle"),
                fe = d().eb969e30,
                Ce = d().j24c37b2,
                Ee = d().bb55e8ee,
                Ze = d().f1aedb7c,
                ve = d().b659fba8,
                xe = d().c474be66,
                we = d().h031847a;
            function _e(e) {
                const { changeAudienceToTrustedFriends: t, history: n, setShowModal: r, trustedFriendsListId: o } = e,
                    s = a.useCallback(() => {
                        t(), o && (r(!1), n.push(`/i/circles/${o}/members/suggested`));
                    }, [n, r, o, t]),
                    i = a.useCallback(() => {
                        r(!1), t();
                    }, [r, t]),
                    c = a.createElement(a.Fragment, null, a.createElement(l.Z, { style: Fe.contentWrapper }, a.createElement(l.Z, null, a.createElement(pe.default, { style: Fe.icon })), a.createElement(l.Z, { style: Fe.subtextContainer }, a.createElement(k.ZP, { align: "left", color: "text", style: Fe.subtextContainer, weight: "bold" }, Ee), a.createElement(k.ZP, { align: "left", color: "gray700" }, Ze))), a.createElement(l.Z, { style: Fe.contentWrapper }, a.createElement(l.Z, null, a.createElement(be.default, { style: Fe.icon })), a.createElement(l.Z, { style: Fe.subtextContainer }, a.createElement(k.ZP, { color: "text", weight: "bold" }, ve), a.createElement(k.ZP, { color: "gray700" }, xe))), a.createElement(l.Z, { style: Fe.contentWrapper }, a.createElement(l.Z, null, a.createElement(ge.default, { style: Fe.icon })), a.createElement(l.Z, { style: Fe.subtextContainer }, a.createElement(k.ZP, { color: "text", weight: "bold" }, we), a.createElement(k.ZP, { color: "gray700" }, a.createElement(d().I18NFormatMessage, { $i18n: "h3326073" }, a.createElement(k.ZP, { color: "text", link: ye, style: Fe.learnMore, weight: "bold", withUnderline: !0 }, d().bd9db21f))))));
                return a.createElement(he.nO, null, a.createElement(me.Z, { actionLabel: Ce, headline: fe, onAction: s, onClose: i, subtext: c, withCloseButton: !0 }));
            }
            const Fe = i.default.create((e) => ({ subtextContainer: { display: "flex", flexDirection: "column", width: "100%" }, icon: { color: e.colors.green500, paddingTop: e.spaces.space4, paddingEnd: e.spaces.space24 }, learnMore: { whiteSpace: "nowrap" }, contentWrapper: { display: "flex", flexDirection: "row", paddingTop: e.spaces.space32 } })),
                Ie = d().baffe39a,
                Se = d().e815fc34,
                Pe = d().d52a1caa,
                Te = d().cf44066a,
                ke = d().c6992b94;
            const Me = i.default.create((e) => ({ button: { paddingHorizontal: e.spaces.space4 }, container: { display: "inline-flex", flexDirection: "row", paddingBottom: e.spaces.space12 }, hidden: { visibility: "hidden" }, root: { flexDirection: "column", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16 } })),
                Ae = S(function (e) {
                    const { userClaims: t } = (0, p.QZ)(),
                        [n, i] = a.useState(!1),
                        [c, d] = a.useState(!1),
                        { actAsUserId: b, addEducationFlag: g, addTrustedFriendsEducationFlag: h, audienceControlsValue: y, disabled: f, educationalVisibilityFlag: C, experiments: E, hasMemberships: Z, isSuperFollowsCreator: v, onAudienceControlsValueChange: x, selectTrustedFriendsList: w, selectedCommunity: _, sliceModule: F, trustedFriendsEducationVisibilityFlag: I, updateSingleComposer: S } = e,
                        { isTrustedFriendsEnabled: P } = E,
                        T = t.isTrueAndEnabled("subscriptions_feature_create_premium_content"),
                        k = y.premiumExclusiveControlOptions || !1,
                        M = y.communityIdValue || !1,
                        A = y.exclusivityControlValue || !1,
                        L = y.trustedFriendsValue || !1,
                        V = w?.rest_id,
                        D = P && I,
                        B = (C && !_) || D;
                    let z,
                        R = Ie;
                    M && _?.name ? (R = _.name) : A ? (R = Pe) : L ? (R = Te) : k && (R = ke),
                        (z = A ? { color: "plum500", borderColor: "plum500", backgroundColor: "transparent" } : L ? { color: "green500", borderColor: "green500", backgroundColor: "transparent" } : { type: "brandOutlined" }),
                        (0, u.q)(() => {
                            const { fetchOrCreateTrustedFriendsList: t } = e;
                            P && t?.();
                        });
                    const O = a.useCallback(() => {
                            d(!1), g(), h();
                        }, [g, h]),
                        H = a.useCallback(
                            (e) =>
                                D && !M
                                    ? a.createElement(de, { history: o.default, onAction: e, setShowTrustedFriendsModal: i })
                                    : a.createElement(te, {
                                          actAsUserId: b,
                                          audienceControlsValue: y,
                                          dismiss: e,
                                          everyoneLabel: Ie,
                                          hasMemberships: Z,
                                          history: o.default,
                                          isSuperFollowsCreator: v,
                                          isTrustedFriendsEnabled: P,
                                          onAudienceControlsValueChange: (e) => {
                                              O(), x(e);
                                          },
                                          premiumAudienceControlEnabled: T,
                                          sliceModule: F,
                                          trustedFriendsList: w,
                                          updateSingleComposer: S,
                                      }),
                            [D, M, b, y, Z, v, T, P, F, w, S, O, x],
                        ),
                        U = a.useCallback(() => {
                            V && x({ _type: "trusted_friends_tweet", conversationControlsValue: "trusted_friends_tweet", trustedFriendsMemberCount: w?.member_count, trustedFriendsValue: { trusted_friends_list_id: V } });
                        }, [x, V, w]);
                    if (!(T || v || Z || (P && e.selectTrustedFriendsList))) return null;
                    let N;
                    return (
                        (N = B && !n ? "forceVisible" : "interactive"),
                        a.createElement(
                            l.Z,
                            { style: Me.container },
                            n ? a.createElement(_e, { changeAudienceToTrustedFriends: U, history: o.default, setShowModal: i, trustedFriendsListId: V }) : null,
                            a.createElement(
                                s.Z,
                                {
                                    disabled: f,
                                    onDismiss: O,
                                    onOpen: () => {
                                        d(!0);
                                    },
                                    renderContent: H,
                                    visibilityBehavior: N,
                                },
                                a.createElement(m.P, (0, r.Z)({ "aria-expanded": c, "aria-haspopup": "menu", "aria-label": Se, disabled: f, role: "button", size: "xSmall" }, z), R),
                            ),
                        )
                    );
                });
        },
        720891: (e, t, n) => {
            n.d(t, { Z: () => w });
            var r = n(807896),
                a = n(202784),
                l = n(325686),
                o = n(731708),
                s = n(124964),
                i = n(30899),
                c = n(154003),
                d = n(392237),
                u = n(674132),
                m = n.n(u),
                p = n(401388),
                b = n(699910),
                g = n(71620),
                h = n(668214),
                y = n(491963);
            const f = (e, t) => {
                    const n = t.selectedCommunityId;
                    return n ? y.ZP.select(e, n) : void 0;
                },
                C = (0, h.Z)()
                    .propsFromState(() => ({ community: f }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, g.zr)("COMMUNITY_RULES"), fetchCommunityIfNeeded: y.ZP.fetchOneIfNeeded })),
                E = m().gfca5254,
                Z = m().f510c8b2,
                v = a.createElement(o.ZP, { weight: "bold" }, Z),
                x = d.default.create((e) => ({ button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 }, badgeStyle: { marginEnd: e.spaces.space12 }, container: { display: "inline-flex", flexDirection: "row", paddingBottom: e.spaces.space12, alignItems: "baseline" }, rulesHeader: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space12 }, ruleContainerStyle: { paddingHorizontal: e.spaces.space16, fontWeight: "normal" } })),
                w = C(({ community: e, createLocalApiErrorHandler: t, fetchCommunityIfNeeded: n, selectedCommunityId: o, showMiddot: d }) => {
                    a.useEffect(() => {
                        o && (0, p.Z)(e) && n(o).catch(t());
                    }, [e, o, t, n]);
                    const [u, m] = a.useState(!1),
                        g = a.useCallback(
                            (t) => {
                                if (e?.rules) {
                                    const { rules: t } = e;
                                    return a.createElement(b.Z, { badgeStyle: x.badgeStyle, headerContainerStyle: x.rulesHeader, heading: v, ruleContainerStyle: x.ruleContainerStyle, rules: t });
                                }
                                return null;
                            },
                            [e],
                        );
                    if (e?.rules && e.rules.length > 0) {
                        const e = { borderColor: "transparent", backgroundColor: "transparent" };
                        return a.createElement(l.Z, { style: x.container }, d ? a.createElement(s.Z, null) : null, a.createElement(i.Z, { onDismiss: () => m(!1), onOpen: () => m(!0), renderContent: g }, a.createElement(c.ZP, (0, r.Z)({ "aria-expanded": u, "aria-haspopup": "dialog", role: "button", size: "xSmall", style: x.button }, e), E)));
                    }
                    return null;
                });
        },
        984041: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                a = n(325686),
                l = n(834324),
                o = n(392237),
                s = n(674132),
                i = n.n(s),
                c = n(621416),
                d = n(175856);
            const u = i().g46f363e,
                m = () => {
                    const [e, t] = (0, c.m)(d.qF);
                    return r.useEffect(() => t, [t]), e ? r.createElement(a.Z, { style: p.container }, r.createElement(l.Z, { onClose: t, text: u, withCloseButton: !0 })) : null;
                },
                p = o.default.create((e) => ({ container: { marginBottom: e.spaces.space8 } })),
                b = r.memo(m);
        },
        699910: (e, t, n) => {
            n.d(t, { L: () => S, Z: () => k });
            var r = n(202784),
                a = n(325686),
                l = n(731708),
                o = n(593866),
                s = n(392237),
                i = n(857378),
                c = n(688715),
                d = n(674132),
                u = n.n(d);
            const m = (0, c.ju)("https://help.x.com/rules-and-policies/twitter-rules"),
                p = r.createElement(u().I18NFormatMessage, { $i18n: "j33cc663" }, r.createElement(l.ZP, { link: m, withInteractiveStyling: !1 }, u().h9526e03)),
                b = ({ containerStyle: e, explanation: t, explanationStyle: n, heading: o }) => r.createElement(a.Z, { style: e }, o, r.createElement(l.ZP, { color: "gray700", style: n }, t || p));
            var g = n(779610);
            const h = ({ getPivotLink: e, renderBadge: t, rules: n }) =>
                r.createElement(
                    r.Fragment,
                    null,
                    n.map((n, a) => {
                        const { description: o, name: s, rest_id: i } = n,
                            c = e(n),
                            d = t(a + 1),
                            u = r.createElement(l.ZP, { weight: "bold" }, s);
                        return r.createElement(g.Z, { description: o, key: i, label: u, link: c, thumbnail: d });
                    }),
                );
            var y = n(807896),
                f = n(727186),
                C = n(386742),
                E = n(678773);
            const Z = "rules-container",
                v = "rules-order-badge",
                x = "rules-reorder-item",
                w = s.default.create((e) => ({ icon: { color: e.colors.gray300, flexShrink: 0, paddingStart: e.spaces.space12 } })),
                _ = (e) => {
                    const { badge: t, rule: n } = e,
                        { description: a, name: o } = n,
                        s = r.createElement(l.ZP, { weight: "bold" }, o);
                    return r.createElement(g.Z, { description: a, label: s, renderRightContent: () => r.createElement(E.default, { style: w.icon }), testID: x, thumbnail: t });
                },
                F = (e, t, n) => {
                    if (!e.destination) return;
                    const r = ((e, t, n) => {
                        const r = Array.from(e),
                            [a] = r.splice(t, 1);
                        return r.splice(n, 0, a), r;
                    })(t, e.source.index, e.destination.index);
                    n(r);
                },
                I = (e) => {
                    const { onReorder: t, renderBadge: n, rules: a } = e,
                        l = r.useCallback(
                            (e) => {
                                F(e, a, t);
                            },
                            [t, a],
                        );
                    return r.createElement(
                        C.Xi,
                        { onDragEnd: l },
                        r.createElement(C.$p, { droppableId: "droppable" }, (e, t) =>
                            r.createElement(
                                "div",
                                (0, y.Z)({}, e.droppableProps, { ref: e.innerRef }),
                                a.map((e, a) => {
                                    const { rest_id: l } = e;
                                    return r.createElement(f.ZP, { draggableId: l, index: a, isBeingDragged: t.draggingFromThisWith === l, key: l }, r.createElement(_, { badge: n(a + 1), rule: e }));
                                }),
                                e.placeholder,
                            ),
                        ),
                    );
                },
                S = Object.freeze({ Default: "Default", Pivot: "Pivot", Reorder: "Reorder" }),
                P = (e, t) => {
                    const { badgeStyle: n } = t;
                    return r.createElement(a.Z, { style: [T.badge, n], testID: v }, r.createElement(l.ZP, { align: "center", color: "text", weight: "bold" }, e));
                },
                T = s.default.create((e) => ({ badge: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.infinite, justifyContent: "center", overflow: "hidden", height: e.spaces.space32, width: e.spaces.space32 }, bottomMargin: { marginBottom: i.h$ } })),
                k = ({ badgeStyle: e, displayType: t = S.Default, explanation: n, getPivotLink: l, headerContainerStyle: s, headerExplanationStyle: i, heading: c, limit: d, onReorder: u, ruleContainerStyle: m, rules: p, withBottomMargin: g = !1, withHeader: y = !0 }) => {
                    const f = { badgeStyle: e },
                        C = ((e, t, n) => (t ? e.slice(0, t) : e).map((e, t) => ({ label: e.name, description: e.description, decoration: P(t + 1, n) })))(p, d, f),
                        E = (e) => P(e, f);
                    return C.length > 0 ? r.createElement(a.Z, { style: g ? T.bottomMargin : null, testID: Z }, y ? r.createElement(b, { containerStyle: s, explanation: n, explanationStyle: i, heading: c }) : null, t === S.Pivot && l ? r.createElement(h, { getPivotLink: l, renderBadge: E, rules: p }) : t === S.Reorder && u ? r.createElement(I, { onReorder: u, renderBadge: E, rules: p }) : r.createElement(o.Z, { containerStyle: m, items: C })) : null;
                };
        },
        90511: (e, t, n) => {
            n.d(t, { ZP: () => k, dm: () => S });
            var r = n(202784),
                a = n(99107),
                l = n(325686),
                o = n(154003),
                s = n(392237),
                i = n(674132),
                c = n.n(i),
                d = n(837020),
                u = n(666536),
                m = n(908478),
                p = n(500914),
                b = n(443781),
                g = n(260137),
                h = n(71620),
                y = n(668214),
                f = n(276001),
                C = n(798538),
                E = n(465814),
                Z = n(632960);
            function v(e, t, n) {
                const { urls: r } = t,
                    a = [...r];
                let l;
                for (const t of a.reverse()) if (((l = n(e, t)), l)) break;
                return l;
            }
            const x = (e, t) => v(e, t, f.Z.select),
                w = (e, t) => v(e, t, E.Z.select),
                _ = (0, y.Z)()
                    .propsFromState(() => ({ card: x, legacyAndUnifiedCard: w }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("COMPOSER_CARD_PREVIEW"), fetchCardPreviewIfNeeded: f.Z.fetchCardPreviewIfNeeded, updateDMComposer: C.G6, updateTweetComposer: Z.zi })),
                F = c().f6fec9f6,
                I = /^https?:\/\//i,
                S = (e) => {
                    const t = (0, p.Z)(e);
                    if (t.length) return t.map((e) => (!I.test(e) && `http://${e}`) || e);
                };
            class P extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._fetchCardPreviewIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchCardPreviewIfNeeded: t, urls: n } = this.props;
                            n.forEach((n) => {
                                t(n).catch(e());
                            });
                        }),
                        (this._handleCardPreviewDismissal = (e) => this._updateSingleComposer({ cardUrl: a.p_ })),
                        (this._updateSingleComposer = (e) => {
                            const { conversationId: t, index: n, updateDMComposer: r, updateTweetComposer: a } = this.props,
                                { cardUrl: l } = e || {};
                            this._isDMComposer ? t && r(t, l) : a({ updates: { cardUrl: l }, index: n });
                        }),
                        (this._debouncedFetchCardPreview = (0, u.Z)(this._fetchCardPreviewIfNeeded, 1e3)),
                        (this._isDMComposer = !!e.conversationId);
                }
                componentDidMount() {
                    this._debouncedFetchCardPreview();
                }
                componentDidUpdate(e) {
                    const { urls: t } = this.props;
                    (0, m.Z)(e.urls, t) || this._debouncedFetchCardPreview();
                }
                componentWillUnmount() {
                    this._updateSingleComposer();
                }
                render() {
                    const { isCardPreviewTombstoned: e, style: t } = this.props,
                        { viewerUserId: n } = this.context;
                    if (e || !n) return null;
                    const a = this._getCards();
                    return a ? r.createElement(l.Z, { style: t }, r.createElement(g.default, { card: a.legacyCard, cardContext: { tweetUserId: n, tweetId: "0" }, isInteractive: !1, preventVideoPlayback: !0, unifiedCard: a.unifiedCard }), r.createElement(o.ZP, { "aria-label": F, icon: r.createElement(d.default, null), onPress: this._handleCardPreviewDismissal, size: "xSmall", style: T.closeButton, type: "onMediaDominantColorFilled" })) : null;
                }
                _getCards() {
                    const { card: e, legacyAndUnifiedCard: t } = this.props,
                        n = { legacyCard: e ? { name: e.name, url: e.url, binding_values: e.binding_values } : t?.legacyCard, unifiedCard: t?.unifiedCard };
                    if (n.legacyCard || n.unifiedCard) return n;
                }
            }
            P.contextType = b.rC;
            const T = s.default.create((e) => ({ closeButton: { position: "absolute", top: e.spaces.space4, start: e.spaces.space4 } })),
                k = _(P);
        },
        737613: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(325686),
                l = n(834324),
                o = n(392237),
                s = n(674132),
                i = n.n(s),
                c = n(125363),
                d = n(390387),
                u = n(919022);
            const m = i().aacfbe55,
                p = i().ga8627cd,
                b = i().e6d2573f,
                g = i().d37a3e15,
                h = (e) => {
                    const { isReply: t, style: n, type: o } = e,
                        s = (0, c.v9)(d.Lz),
                        i = (0, c.v9)(u.ZP.selectViewerUser),
                        h = s ? i?.screen_name : void 0,
                        f = r.useMemo(() => [y.root, n], [n]);
                    let C = m({ screenName: h });
                    return "Tweet" === o && t ? (C = p({ screenName: h })) : "DM" === o ? (C = b({ screenName: h })) : "List" === o && (C = g({ screenName: h })), h ? r.createElement(a.Z, { style: f }, r.createElement(l.Z, { text: C })) : null;
                },
                y = o.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingBottom: e.spaces.space12 } }));
        },
        25704: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                a = n(529356),
                l = n(674132),
                o = n.n(l),
                s = n(621416),
                i = n(443781);
            const c = o().j24c37b2,
                d = ({ Content: e, contentStyle: t, actionLabel: n = c, flag: l, graphic: o, graphicDisplayMode: d, headline: u, isFullHeightOnMobile: m, enableMaskForDismiss: p, onAction: b, onClose: g, onSecondaryAction: h, secondaryActionLabel: y, supportUrl: f, subtext: C, withCloseButton: E, shouldShowForLoggedOut: Z = !1, shouldAddEducationFlagOnClose: v = !0, shouldAddEducationFlagOnSecondary: x = !0, shouldAddEducationFlagOnPrimary: w = !0 }) => {
                    const { loggedInUserId: _ } = r.useContext(i.rC),
                        [F, I] = (0, s.m)(l),
                        S = r.useCallback(
                            (e) => {
                                w && I(), b && b(e);
                            },
                            [I, b, w],
                        ),
                        P = r.useCallback(() => {
                            v && I(), g && g();
                        }, [I, v, g]),
                        T = r.useCallback(
                            (e) => {
                                x && I(), h && h(e);
                            },
                            [I, h, x],
                        );
                    if (!F || (!_ && !Z)) return null;
                    return r.createElement(a.Z, { actionLabel: n, contentStyle: t, enableMaskForDismiss: p, graphic: o, graphicDisplayMode: d || "none", headline: u, isFullHeightOnMobile: m, onAction: S, onClose: P, onSecondaryAction: T, secondaryActionLabel: y, subtext: C, supportUrl: f, withCloseButton: E }, e ? r.createElement(e, null) : null);
                },
                u = r.memo(d);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.RichTextCompose-07b0deba.bf6a62da.js.map
