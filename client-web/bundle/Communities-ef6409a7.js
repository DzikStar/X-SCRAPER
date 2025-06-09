"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-ef6409a7"],
    {
        264223: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(607566),
                a = n(202784),
                o = (n(585488), n(277660)),
                m = n.n(o),
                l = n(98538),
                c = n(111677),
                i = n.n(c);
            const s = i().d58baa7f,
                u = { value: a.createElement(l.Z.Value, null), label: a.createElement(l.Z.Label, null) },
                d = ({ community: e, onMedia: t = !1, style: n }) => {
                    const o = m()(r.Z, e),
                        { member_count: c = 0 } = o,
                        d = a.useMemo(() => ({ count: c, formattedCount: s(c) }), [c]);
                    return a.createElement(l.Z.Group, { style: n }, a.createElement(l.Z, { onMedia: t }, a.createElement(i().I18NFormatMessage, { $i18n: "b38e130b" }, a.cloneElement(u.value, null, i().ibd0106e({ formattedCount: d.formattedCount })), a.cloneElement(u.label, null, i().cface2d1({ count: d.count })))));
                },
                y = a.memo(d);
        },
        537517: (e, t, n) => {
            n.r(t), n.d(t, { CommunityFeedbackScreen: () => W, FeedbackType: () => U, default: () => V });
            var r = n(807896),
                a = n(202784),
                o = n(879113),
                m = n(111677),
                l = n.n(m),
                c = n(615656),
                i = n(718e3),
                s = n(252021),
                u = n(443781),
                d = n(652904),
                y = n(71620),
                p = n(615027),
                E = n(466441),
                f = n(668214),
                b = n(491963),
                g = n(836255),
                Z = n(919022);
            const _ = (e, t) => {
                    const { tweetId: n } = t.match.params;
                    return n ? g.Z.selectHydrated(e, n) : void 0;
                },
                I = (e, t) => {
                    const n = t.match.params;
                    return Object.entries(n).flat().includes("tweetId") ? U.HiddenTweet : U.RemovedMember;
                },
                h = (e, t) => {
                    const n = C(e, t);
                    return n ? b.ZP.select(e, n) : void 0;
                },
                C = (e, t) => {
                    if (I(0, t) === U.HiddenTweet) {
                        const { tweetId: n } = t.match.params,
                            r = n ? g.Z.selectHydrated(e, n) : void 0;
                        return r?.community_id_str;
                    }
                    const { communityId: n } = t.match.params;
                    return n || void 0;
                },
                v = (e, t) => {
                    const n = C(e, t);
                    if (n) return b.ZP.selectErrors(e)[n];
                },
                R = (e, t) => {
                    if (I(0, t) === U.HiddenTweet) {
                        const { tweetId: n } = t.match.params;
                        return n ? g.Z.selectFetchStatus(e, n) : void 0;
                    }
                    {
                        const { communityId: n } = t.match.params;
                        return n ? b.ZP.selectFetchStatus(e, n) : void 0;
                    }
                },
                w = (0, f.Z)()
                    .propsFromState(() => ({ community: h, error: v, fetchStatus: R, viewerUser: Z.ZP.selectViewerUser, tweet: _, type: I }))
                    .propsFromActions(() => ({ fetchCommunity: b.ZP.fetchOne, fetchTweet: g.Z.fetchOne }))
                    .withAnalytics({ page: "community", section: "moderation", component: "feedback" });
            var M = n(325686),
                x = n(731708),
                N = n(834324),
                S = n(420412),
                k = n(844685),
                P = n(392237),
                F = n(699910),
                $ = n(724328),
                T = n(301758);
            const A = l().bbd69672,
                D = l().c730a21c,
                q = l().a5baa7d2,
                z = l().icc32e3d,
                L = P.default.create((e) => ({ badges: { marginEnd: e.spaces.space16, marginStart: e.spaces.space2 }, communityTitle: { marginTop: e.spaces.space24, marginBottom: e.spaces.space2 }, helpText: { marginTop: e.spaces.space12, marginBottom: e.spaces.space24 }, hiddenTweetWarningText: { marginTop: e.spaces.space2, marginBottom: e.spaces.space24 }, removedMemberReason: { backgroundColor: P.default.theme.colors.gray50, borderRadius: P.default.theme.spacesPx.space4, border: "1px solid gray", padding: P.default.theme.spacesPx.space16, marginBottom: P.default.theme.spaces.space24 }, rulesTitle: { marginHorizontal: e.spacesPx.space16 }, titleText: { marginTop: P.default.theme.spaces.space24, marginBottom: e.spacesPx.space24 }, tweetContainer: { marginBottom: e.spacesPx.space12 }, tweetInfo: { display: "flex", flexDirection: "column", justifyContent: "center" }, tweetInfoItems: { marginHorizontal: e.spacesPx.space16 }, rules: { paddingHorizontal: e.spaces.space16 } })),
                O = (e) => {
                    const { community: t, history: n, location: r, match: o, tweet: m, type: l } = e,
                        c = { history: n, location: r, match: o },
                        i = m?.community_relationship,
                        s = i?.moderation_state,
                        u =
                            ((e) => {
                                switch (e) {
                                    case U.HiddenTweet:
                                        return s?.rule;
                                    case U.RemovedMember:
                                        return t?.viewerViolatedRule;
                                    default:
                                        return;
                                }
                            })(l)?.name || "",
                        d = t?.name,
                        y = t?.rules,
                        p = (0, $.E)({ communityName: d });
                    return y?.length
                        ? a.createElement(
                              M.Z,
                              { style: L.tweetInfo },
                              a.createElement(
                                  M.Z,
                                  { style: L.tweetInfoItems },
                                  ((e) => {
                                      switch (e) {
                                          case U.HiddenTweet:
                                              return a.createElement(a.Fragment, null, a.createElement(x.ZP, { color: "blue500", size: "subtext1", style: L.communityTitle, weight: "bold" }, d), a.createElement(x.ZP, { size: "headline1", style: [L.titleText, L.hiddenTweetWarningText], weight: "heavy" }, A), a.createElement(T.Z, { style: L.tweetContainer, tweetId: m?.id_str, withMediaAsTextLinks: !1 }), a.createElement(N.Z, { headline: D, text: u }), a.createElement(x.ZP, { style: L.helpText }, q));
                                          case U.RemovedMember:
                                              return a.createElement(a.Fragment, null, a.createElement(x.ZP, { size: "headline1", style: L.titleText, weight: "heavy" }, z({ communityName: d })), a.createElement(M.Z, { style: L.removedMemberReason }, a.createElement(x.ZP, { weight: "bold" }, u)));
                                      }
                                  })(l),
                              ),
                              a.createElement(S.Z, null),
                              a.createElement(k.Z, { text: p }),
                              a.createElement(F.Z, { badgeStyle: L.badges, ruleContainerStyle: L.rules, rules: y, withBottomMargin: !0, withHeader: !1 }),
                          )
                        : a.createElement(E.default, c);
                },
                H = l().jf99d610,
                j = "HIDDEN_TWEET_FEEDBACK_SCREEN",
                B = "REMOVED_MEMBER_FEEDBACK_SCREEN_CONTEXT",
                U = Object.freeze({ HiddenTweet: "hidden_tweet", RemovedMember: "removed_member" });
            function W(e) {
                const { featureSwitches: t } = a.useContext(u.rC),
                    n = t.isTrue("c9s_enabled"),
                    { analytics: m, community: l, error: f, fetchCommunity: b, fetchStatus: g, fetchTweet: Z, tweet: _, type: I, viewerUser: h, ...C } = e,
                    v = (e) => {
                        switch (e) {
                            case U.HiddenTweet:
                                return { isAuthorizedViewer: Boolean(h && h.id_str === _?.user.id_str), _handleRetry: N, shouldRenderFeedback: Boolean(_?.community_relationship?.moderation_state.rule) };
                            case U.RemovedMember:
                                return { isAuthorizedViewer: Boolean(h && l?.viewerViolatedRule), _handleRetry: S, shouldRenderFeedback: Boolean("CommunityUserRemovedModerationState" === l?.viewer_relationship?.moderation_state.__typename) };
                            default:
                                return {};
                        }
                    },
                    { communityId: R, tweetId: w } = e.match.params,
                    M = (0, y.n7)(j),
                    x = (0, y.n7)(B),
                    N = a.useEffect(() => {
                        w && Z(w).catch(M);
                    }, [M, Z, w]),
                    S = a.useEffect(() => {
                        R && b(R).catch(x);
                    }, [R, x, b]);
                if (R && f && (0, c.VZ)(f, c.ZP.CommunityNotFound)) return a.createElement(p.Z, { to: `/i/communities/${R}` });
                const k = a.createElement(E.default, C);
                return a.createElement(o.Z, {
                    fetchStatus: g,
                    onRequestRetry: v(I)._handleRetry,
                    render: () => {
                        const { isAuthorizedViewer: t, shouldRenderFeedback: o } = v(I);
                        return t && n && o ? a.createElement(d.Z, null, a.createElement(s.Z, { backLocation: "/notifications", history: C.history, primaryContent: a.createElement(O, (0, r.Z)({}, e, { type: I })), sidebarContent: a.createElement(i.Z, null), title: H })) : k;
                    },
                });
            }
            const V = w(W);
        },
        818916: (e, t, n) => {
            n.r(t), n.d(t, { CommunitiesModerationContainer: () => an, default: () => on });
            var r = n(807896),
                a = n(202784),
                o = n(107267),
                m = n(879113),
                l = n(615656),
                c = n(870358),
                i = n(615027),
                s = n(466441),
                u = n(71620),
                d = n(668214),
                y = n(491963),
                p = n(182846);
            const E = (0, d.Z)()
                .propsFromState(() => ({ community: p.ZM, fetchStatus: p.YE, error: p.Kz }))
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("COMMUNITY_MODERATION"), fetchCommunityIfNeeded: y.ZP.fetchOneIfNeeded }))
                .withAnalytics({ page: "communities", section: "moderation" });
            var f = n(63012),
                b = (n(585488), n(111677)),
                g = n.n(b),
                Z = n(252021),
                _ = n(56851),
                I = n(652904),
                h = n(736063),
                C = n(127218),
                v = n(610811),
                R = n(963786),
                w = n(277660),
                M = n.n(w),
                x = n(457311),
                N = n(965245),
                S = n(21958),
                k = n(325686),
                P = n(593866),
                F = n(731708),
                $ = n(420412),
                T = n(40610),
                A = n(966886),
                D = n(392237),
                q = n(833458),
                z = n(530813),
                L = n(443781),
                O = n(788993),
                H = n(125363),
                j = n(601576),
                B = n(114084),
                U = n(144526),
                W = n(154003),
                V = (n(571372), n(226245)),
                J = n(482242),
                K = n(351743),
                G = n.n(K),
                Q = n(516636);
            const Y = J.Z,
                X = V.Z,
                ee = g().i22835de,
                te = g().cb59a0fe,
                ne = U.Z,
                re = (e) => {
                    const { communityId: t, communityJoinRequestActions: n, onApproveError: r, onDenyError: o, userId: m } = e,
                        { join_request_approve_action_result: l, join_request_deny_action_result: c } = M()(ne, n),
                        [i, s] = (() => {
                            const [e, t] = G()(Y);
                            return [
                                a.useCallback(
                                    ({ communityId: n, userId: r }) =>
                                        t
                                            ? Promise.reject(new Error("Already committing action on member request"))
                                            : new Promise((t, a) => {
                                                  e({
                                                      variables: { communityId: n, userId: r },
                                                      onCompleted(e) {
                                                          t();
                                                      },
                                                      updater(e, t) {
                                                          if ("CommunityJoinRequest" === t?.community_join_request_approve?.__typename) {
                                                              const t = e.getRootField("community_join_request_approve")?.getLinkedRecord("user_relationship")?.getLinkedRecord("community_results"),
                                                                  n = (0, Q.h)(t);
                                                              n?.invalidateRecord();
                                                          }
                                                      },
                                                      onError: a,
                                                  });
                                              }),
                                    [e, t],
                                ),
                                t,
                            ];
                        })(),
                        [u, d] = (() => {
                            const [e, t] = G()(X);
                            return [
                                a.useCallback(
                                    ({ communityId: n, userId: r }) =>
                                        t
                                            ? Promise.reject(new Error("Already committing action on member request"))
                                            : new Promise((t, a) => {
                                                  e({
                                                      variables: { communityId: n, userId: r },
                                                      onCompleted(e) {
                                                          t();
                                                      },
                                                      onError: a,
                                                  });
                                              }),
                                    [e, t],
                                ),
                                t,
                            ];
                        })(),
                        y = s || d,
                        p = "CommunityJoinRequestDenyAction" === c?.__typename,
                        E = "CommunityJoinRequestApproveAction" === l?.__typename,
                        f = a.useCallback(() => {
                            u({ communityId: t, userId: m }).catch(o);
                        }, [u, t, m, o]),
                        b = a.useCallback(() => {
                            i({ communityId: t, userId: m }).catch(r);
                        }, [i, t, m, r]);
                    return a.createElement(k.Z, { style: ae.buttons }, a.createElement(W.ZP, { disabled: !E || y, onPress: b, style: ae.button, type: "primaryOutlined" }, ee), a.createElement(W.ZP, { disabled: !p || y, onPress: f, style: ae.button, type: "destructiveOutlined" }, te));
                },
                ae = D.default.create((e) => ({ buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space16 }, button: { alignSelf: "flex-start", flex: 1, marginEnd: e.spaces.space12 } })),
                oe = S.Z,
                me = g().d7f13fb9,
                le = g().a340df67,
                ce = g().jd8aae9d,
                ie = g().i580e149,
                se = ({ icon: e, label: t }) => a.createElement(a.Fragment, null, a.createElement(P.Z, { containerStyle: Ee.container, items: [{ label: a.createElement(F.ZP, null, t), decoration: e }] }), a.createElement($.Z, null)),
                ue = { blocking: g().b4a38e4e, muting: g().f0956736 },
                de = { mutual: { contextType: O.Z.FollowMutual, text: g().ae2205d2 }, following: { contextType: O.Z.FollowFollowing, text: g().d960b55c }, followedBy: { contextType: O.Z.FollowFollowed, text: g().b7f1e58a } },
                ye = {},
                pe = (e) => {
                    const { communityJoinRequest: t } = e,
                        n = M()(oe, t),
                        r = (0, H.I0)(),
                        o = n.user_relationship.user_results.result,
                        m = n.state,
                        l = "User" === o?.__typename && o.core?.screen_name,
                        c = a.useCallback(() => {
                            l && r((0, j.fz)({ text: ce({ screenName: l }) }));
                        }, [r, l]),
                        i = a.useCallback(() => {
                            l && r((0, j.fz)({ text: ie({ screenName: l }) }));
                        }, [r, l]),
                        s = n.user_relationship.community_results.result;
                    if ("User" !== o?.__typename || "Community" !== s?.__typename) return null;
                    const u = s.id_str,
                        { id_str: d, legacy: y, relationship_perspectives: p } = o,
                        { description: E } = y ?? {},
                        { blocking: f, followed_by: b, following: g, muting: Z } = p ?? {};
                    switch (m) {
                        case "Approved":
                            return a.createElement(se, { icon: fe, label: me({ screenName: l }) });
                        case "Denied":
                            return a.createElement(se, { icon: be, label: le({ screenName: l }) });
                        case "Invalid":
                            return null;
                    }
                    const _ = n.answer,
                        I = n.created_at,
                        { featureSwitches: h } = a.useContext(L.rC),
                        C = h.isTrue("c9s_community_answer_box_enabled"),
                        v = (({ following: e, isFollowedBy: t }) => (e && t ? de.mutual : e ? de.following : t ? de.followedBy : void 0))({ isFollowedBy: b, following: g }),
                        R = (({ blocking: e, muting: t }) => (e ? ue.blocking : t ? ue.muting : void 0))({ blocking: f, muting: Z }),
                        w = a.createElement(k.Z, null, R && a.createElement(F.ZP, { color: "red500", style: Ee.bottomText }, R), _ && "" !== _?.trim() && C && a.createElement(T.Z.Primary, { text: _ }), a.createElement(re, { communityId: u, communityJoinRequestActions: n.actions, onApproveError: c, onDenyError: i, userId: d }));
                    return a.createElement(a.Fragment, null, a.createElement(B.Z, { bottomControl: w, description: E || void 0, displayMode: "UserDetailed", entities: ye, screenNameSuffix: a.createElement(A.Z, { color: "gray700", timestamp: I }), socialContext: v, user: o }), a.createElement($.Z, null));
                },
                Ee = D.default.create((e) => ({ actioned: { flexDirection: "row" }, bottomText: { marginTop: e.spaces.space12 }, icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                fe = a.createElement(q.default, { style: Ee.icon }),
                be = a.createElement(z.default, { style: Ee.icon }),
                ge = g().addbb11e,
                Ze = g().c38131de,
                _e = R.Z,
                Ie = ({ id: e }) => e,
                he = (e) => a.createElement(pe, { communityJoinRequest: e }),
                Ce = () => a.createElement(x.Z, { header: ge, message: Ze }),
                ve = (e) => {
                    const { communityJoinRequests: t, fetchNext: n } = e,
                        { items: r } = M()(_e, t);
                    return a.createElement(N.Z, { cacheKey: "SlicesRelay_MemberRequestsList", identityFunction: Ie, items: r, noItemsRenderer: Ce, onNearEnd: n, renderer: he });
                },
                Re = g().gfccba44,
                we = { context: "member_requests" },
                Me = f.Z,
                xe = (e) => {
                    const t = (0, o.useHistory)(),
                        { communityId: n } = e,
                        { data: r, fetchNext: m } = (0, C.C)(Me, { communityId: n });
                    if ("Community" !== r.communityResults?.result?.__typename) return a.createElement(i.Z, { to: `/i/communities/${n}` });
                    const { join_requests_result: l, name: c } = r.communityResults.result;
                    if ("CommunityJoinRequests" === l.__typename) {
                        const { pending_join_requests_slice: e } = l,
                            r = a.createElement(v.Z, { communityId: n, moderatorArea: !0 }),
                            o = a.createElement(ve, { communityJoinRequests: e, fetchNext: m });
                        return a.createElement(I.Z, null, a.createElement(Z.Z, { backLocation: `/i/communities/${n}/tools`, history: t, primaryContent: o, sidebarContent: r, subtitle: c, title: Re }));
                    }
                    return a.createElement(_.Z, null);
                };
            function Ne({ communityId: e }) {
                return a.createElement(h.H, { errorConfig: we }, a.createElement(xe, { communityId: e }));
            }
            var Se = n(507651),
                ke = n(979227),
                Pe = n(26232),
                Fe = n(4452),
                $e = n(24949),
                Te = n(797362);
            const Ae = (e, t) => {
                    const { community: n } = t;
                    return n ? n.id_str : void 0;
                },
                De = (0, d.Z)()
                    .propsFromState(() => ({ tweetModerationLogSliceModule: (0, $e.P1)(Ae, (e) => (e ? (0, Te.J)(e) : void 0)) }))
                    .withAnalytics({ page: "community", section: "moderation", component: "moderation_log" });
            var qe = n(598461),
                ze = n(910962),
                Le = n(981931),
                Oe = n(645188),
                He = n(811176),
                je = n(124964),
                Be = n(247056),
                Ue = n(762410),
                We = n(775042),
                Ve = n(787657),
                Je = n(224823),
                Ke = n(750442),
                Ge = n(511323),
                Qe = n(297938),
                Ye = n(369676),
                Xe = n(323265),
                et = n(651175),
                tt = n(39482);
            const nt = g().d31e695c,
                rt = g().i9a18ce0,
                at = g().i24de0fe,
                ot = g().b1c662f8,
                mt = g().j9541e18,
                lt = tt.Z,
                ct = et.Z,
                it = (e) => {
                    const { communityId: t, isAlreadyReverted: n, isRevertLog: r, logIdentifier: o, onRevertError: m, userScreenName: l } = e,
                        [c] = G()(lt),
                        i = a.useCallback(() => {
                            c({ variables: { logIdentifier: o }, onError: m });
                        }, [c, o, m]);
                    return r || n ? a.createElement(k.Z, { style: dt.buttons }, a.createElement(W.ZP, { icon: a.createElement(q.default, null), size: "small", style: dt.button, type: "secondaryFilled" }, ot), a.createElement(W.ZP, { link: `/i/communities/${t}/search/?q=(from:${l})`, size: "small", style: dt.button, type: "primaryOutlined" }, mt)) : a.createElement(k.Z, { style: dt.buttons }, a.createElement(W.ZP, { onPress: i, size: "small", style: dt.button, type: "primaryOutlined" }, at), a.createElement(W.ZP, { link: `/i/communities/${t}/search/?q=(from:${l})`, size: "small", style: dt.button, type: "primaryOutlined" }, mt));
                },
                st = (e) => {
                    const { communityId: t, isAlreadyReverted: n, isRevertLog: r, logIdentifier: o, onRevertError: m, userScreenName: l } = e,
                        [c] = G()(ct),
                        i = a.useCallback(() => {
                            c({ variables: { logIdentifier: o }, onError: m });
                        }, [c, o, m]);
                    return r || n ? a.createElement(k.Z, { style: dt.buttons }, a.createElement(W.ZP, { icon: a.createElement(q.default, null), size: "small", style: dt.button, type: "secondaryFilled" }, rt), a.createElement(W.ZP, { link: `/i/communities/${t}/search/?q=(from:${l})`, size: "small", style: dt.button, type: "primaryOutlined" }, mt)) : a.createElement(k.Z, { style: dt.buttons }, a.createElement(W.ZP, { onPress: i, size: "small", style: dt.button, type: "primaryOutlined" }, nt));
                },
                ut = (e) => {
                    const { communityId: t, userScreenName: n } = e;
                    return a.createElement(k.Z, { style: dt.buttons }, a.createElement(W.ZP, { link: `/i/communities/${t}/search/?q=(from:${n})`, size: "small", style: dt.button, type: "primaryOutlined" }, mt));
                },
                dt = D.default.create((e) => ({ buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: e.spaces.space4, marginBottom: e.spaces.space4 }, button: { alignSelf: "flex-start", flex: 1, marginEnd: e.spaces.space1, marginStart: e.spaces.space1 } })),
                yt = Oe.Z,
                pt = g().e32e7e1a,
                Et = g().ab5a91a4,
                ft = g().b53fb7c6,
                bt = g().c546ba07,
                gt = g().h4516e4f,
                Zt = g().j10903d7,
                _t = g().e38bf285,
                It = g().dea0d437,
                ht = g().j10346f5,
                Ct = g().jb159607,
                vt = g().af7a63eb,
                Rt = g().i717dfc3,
                wt = (e) => {
                    const t = Xe.ZP.isWebView(),
                        n = (0, H.I0)(),
                        { communityId: r, logEntryRef: o } = e,
                        m = {},
                        l = M()(yt, o),
                        { action_timestamp: c, id: i, is_revert_log: s, member_req_answer: u, moderator_log_type: d, moderator_ref_results: y, reverted_moderator_ref_results: p, rule_ref: E, user_ref_results: f } = l,
                        b = i,
                        Z = "MemberRemoved" === d,
                        _ = "MemberJoined" === d,
                        I = "MemberLeft" === d,
                        h = "JoinRequestApproved" === d,
                        C = "JoinRequestRejected" === d,
                        v = f?.result,
                        R = "User" === v?.__typename,
                        w = v?.id_str,
                        x = v?.core?.screen_name,
                        N = x ? `/${x}` : null,
                        S = v?.core?.name || Et,
                        P = y.result,
                        D = y.result?.core?.name || pt,
                        q = P?.core?.screen_name,
                        z = q ? `/${q}` : null,
                        L = p?.result,
                        O = L?.core?.name || pt,
                        U = L?.core?.screen_name,
                        W = U ? `/${U}` : null,
                        V = !0 === s,
                        J = null != U,
                        K = E?.name,
                        G = u,
                        Q = z ? a.createElement(g().I18NFormatMessage, { $i18n: "c6e18a45" }, a.createElement(F.ZP, { link: z }, g().ce5ac32b({ moderatorName: D }))) : Zt({ moderatorName: D }),
                        Y = W ? a.createElement(g().I18NFormatMessage, { $i18n: "ef3b57ef" }, a.createElement(F.ZP, { link: W }, g().a7f869a4({ revertedModeratorName: O }))) : _t({ revertedModeratorName: O }),
                        X = N ? a.createElement(g().I18NFormatMessage, { $i18n: "e7878d67" }, a.createElement(F.ZP, { link: N }, g().efad949a({ userName: S }))) : It({ userName: S }),
                        ee = N ? a.createElement(g().I18NFormatMessage, { $i18n: "hd2489bb" }, a.createElement(F.ZP, { link: N }, g().d0ae5998({ userName: S }))) : ht({ userName: S }),
                        te = z ? a.createElement(g().I18NFormatMessage, { $i18n: "b4aa9d7b" }, a.createElement(F.ZP, { link: z }, g().ef020751({ moderatorName: D }))) : Ct({ moderatorName: D }),
                        ne = z ? a.createElement(g().I18NFormatMessage, { $i18n: "c5900395" }, a.createElement(F.ZP, { link: z }, g().a46c5a63({ moderatorName: D }))) : vt({ moderatorName: D }),
                        re = W ? a.createElement(g().I18NFormatMessage, { $i18n: "g561eb89" }, a.createElement(F.ZP, { link: W }, g().h55401a4({ revertedModeratorName: O }))) : Rt({ revertedModeratorName: O }),
                        ae = a.createElement(a.Fragment, null, V ? a.createElement(a.Fragment, null, a.createElement(We.default, { style: Mt.topIconStyle }), a.createElement(F.ZP, { style: Mt.topMessageStyle }, Y)) : a.createElement(a.Fragment, null, a.createElement(Ue.default, { style: Mt.topIconStyle }), a.createElement(F.ZP, { style: Mt.topMessageStyle }, Q))),
                        oe = a.createElement(a.Fragment, null, a.createElement(Ve.default, { style: Mt.topIconStyle }), a.createElement(F.ZP, { style: Mt.topMessageStyle }, X)),
                        me = a.createElement(a.Fragment, null, a.createElement(Je.default, { style: Mt.topIconStyle }), a.createElement(F.ZP, { style: Mt.topMessageStyle }, ee)),
                        le = a.createElement(a.Fragment, null, a.createElement(Ke.default, { style: Mt.topIconStyle }), a.createElement(F.ZP, { style: Mt.topMessageStyle }, te)),
                        ce = a.createElement(a.Fragment, null, V ? a.createElement(a.Fragment, null, a.createElement(We.default, { style: Mt.topIconStyle }), a.createElement(F.ZP, { style: Mt.topMessageStyle }, re)) : a.createElement(a.Fragment, null, a.createElement(Ue.default, { style: Mt.topIconStyle }), a.createElement(F.ZP, { style: Mt.topMessageStyle }, ne))),
                        ie = a.useCallback(
                            (e) => {
                                if (!x) return null;
                                let t;
                                return (
                                    (t =
                                        !C || V || J
                                            ? [
                                                  { text: bt({ userName: S }), Icon: Ge.default, link: `/${x}` },
                                                  { text: gt({ userName: S }), Icon: Qe.default, link: `/i/communities/${r}/search/?q=(from:${x})` },
                                              ]
                                            : [{ text: bt({ userName: S }), Icon: Ge.default, link: `/${x}` }]),
                                    a.createElement(He.Z, { items: t, onCloseRequested: e })
                                );
                            },
                            [r, x, S, C, V, J],
                        ),
                        se = a.useCallback(() => {
                            n((0, j.fz)({ text: ft }));
                        }, [n]),
                        ue = a.createElement(k.Z, null, Z && w && x && a.createElement(it, { communityId: r, isAlreadyReverted: J, isRevertLog: V, logIdentifier: b, onRevertError: se, userId: w, userScreenName: x }), _ && w && x && a.createElement(ut, { communityId: r, userId: w, userScreenName: x }), I && w && x && a.createElement(ut, { communityId: r, userId: w, userScreenName: x }), h && w && x && a.createElement(ut, { communityId: r, userId: w, userScreenName: x }), C && w && x && a.createElement(st, { communityId: r, isAlreadyReverted: J, isRevertLog: V, logIdentifier: b, onRevertError: se, userId: w, userScreenName: x }));
                    return "User" !== v?.__typename
                        ? null
                        : a.createElement(
                              k.Z,
                              { style: Mt.container },
                              a.createElement(
                                  a.Fragment,
                                  null,
                                  Z && v && R && a.createElement(a.Fragment, null, a.createElement("div", { style: Mt.topDividerStyle }, ae, a.createElement(je.Z, null), a.createElement(A.Z, { timestamp: Number(c) }), !t && a.createElement(Be.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ie, style: Mt.menu })), a.createElement(B.Z, { description: v?.legacy?.description ?? void 0, displayMode: "UserDetailed", entities: m, user: v }), K && a.createElement(T.Z.Custom, { Icon: Ye.default, "aria-live": "polite", backgroundColor: "gray100", text: K }), ue, a.createElement($.Z, null)),
                                  _ && v && R && a.createElement(a.Fragment, null, a.createElement("div", { style: Mt.topDividerStyle }, oe, a.createElement(je.Z, null), a.createElement(A.Z, { timestamp: Number(c) }), !t && a.createElement(Be.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ie, style: Mt.menu })), a.createElement(B.Z, { description: v?.legacy?.description ?? void 0, displayMode: "UserDetailed", entities: m, user: v }), ue, a.createElement($.Z, null)),
                                  I && v && R && a.createElement(a.Fragment, null, a.createElement("div", { style: Mt.topDividerStyle }, me, a.createElement(je.Z, null), a.createElement(A.Z, { timestamp: Number(c) }), !t && a.createElement(Be.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ie, style: Mt.menu })), a.createElement(B.Z, { description: v?.legacy?.description ?? void 0, displayMode: "UserDetailed", entities: m, user: v }), ue, a.createElement($.Z, null)),
                                  h && v && R && a.createElement(a.Fragment, null, a.createElement("div", { style: Mt.topDividerStyle }, le, a.createElement(je.Z, null), a.createElement(A.Z, { timestamp: Number(c) }), !t && a.createElement(Be.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ie, style: Mt.menu })), a.createElement(B.Z, { description: v?.legacy?.description ?? void 0, displayMode: "UserDetailed", entities: m, user: v }), G && a.createElement(T.Z.Custom, { Icon: Ye.default, "aria-live": "polite", backgroundColor: "gray100", text: G }), ue, a.createElement($.Z, null)),
                                  C && v && R && a.createElement(a.Fragment, null, a.createElement("div", { style: Mt.topDividerStyle }, ce, a.createElement(je.Z, null), a.createElement(A.Z, { timestamp: Number(c) }), !t && a.createElement(Be.Z, { activeColor: "primary", iconSize: "large", renderActionMenu: ie, style: Mt.menu })), a.createElement(B.Z, { description: v?.legacy?.description ?? void 0, displayMode: "UserDetailed", entities: m, user: v }), G && a.createElement(T.Z.Custom, { Icon: Ye.default, "aria-live": "polite", backgroundColor: "gray100", text: G }), ue, a.createElement($.Z, null)),
                              ),
                          );
                },
                Mt = D.default.create((e) => ({ menu: { marginStart: "auto", marginEnd: 2 }, actioned: { flexDirection: "row" }, bottomText: { marginTop: e.spaces.space12 }, icon: { height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space16, color: e.colors.gray700 }, container: { marginEnd: e.spaces.space16, marginStart: e.spaces.space16 }, topDividerStyle: { display: "flex", alignItems: "center", marginTop: 8 }, topIconStyle: { marginStart: 4 }, topMessageStyle: { marginStart: 6 } })),
                xt = { context: "moderator_log_log" },
                Nt = Le.Z,
                St = g().dffb0774,
                kt = g().ab512f26,
                Pt = () => a.createElement(x.Z, { header: St, message: kt }),
                Ft = (e) => {
                    const { communityId: t, fetchNext: n, moderationLog: r } = e,
                        o = M()(Nt, r).items || [];
                    return a.createElement(N.Z, { cacheKey: "SlicesRelay_ModeratorLogList", identityFunction: (e) => e.id, items: o, noItemsRenderer: Pt, onNearEnd: n, renderer: (e) => a.createElement(wt, { communityId: t, logEntryRef: e }) });
                },
                $t = (e) => a.createElement(h.H, { errorConfig: xt }, a.createElement(Ft, e)),
                Tt = { context: "moderation_log_timelines" },
                At = ze.Z,
                Dt = qe.Z,
                qt = (e) => {
                    const { communityId: t } = e,
                        { data: n, fetchNext: r } = (0, C.C)(At, { communityId: t });
                    if ("Community" !== n.communityResults?.result?.__typename) return a.createElement(i.Z, { to: `/i/communities/${t}` });
                    const o = n.communityResults.result?.join_request_moderation_log_slice;
                    return a.createElement($t, { communityId: t, fetchNext: r, moderationLog: o });
                },
                zt = (e) => {
                    const { communityId: t } = e,
                        { data: n, fetchNext: r } = (0, C.C)(Dt, { communityId: t });
                    if ("Community" !== n.communityResults?.result?.__typename) return a.createElement(i.Z, { to: `/i/communities/${t}` });
                    const o = n.communityResults.result?.removed_user_moderation_log_slice;
                    return a.createElement($t, { communityId: t, fetchNext: r, moderationLog: o });
                },
                Lt = (e) => a.createElement(h.H, { errorConfig: Tt }, a.createElement(qt, e)),
                Ot = (e) => a.createElement(h.H, { errorConfig: Tt }, a.createElement(zt, e)),
                Ht = g().e42dd8fa,
                jt = g().dffb0774,
                Bt = g().ab512f26,
                Ut = g().fa4e68ca,
                Wt = g().b8171558,
                Vt = g().dc6ce7b4,
                Jt = () => a.createElement(x.Z, { header: jt, message: Bt }),
                Kt = De((e) => {
                    const { community: t, history: n, location: r, tweetModerationLogSliceModule: m } = e,
                        { id_str: l, name: c } = t;
                    (0, Fe.ZP)();
                    const i = a.useMemo(
                            () => [
                                { to: { pathname: `/i/communities/${l}/moderation/moderation_log`, state: r.state }, label: Ut, key: Ut },
                                { to: { pathname: `/i/communities/${l}/moderation/moderation_log_members`, state: r.state }, label: Vt, key: Vt },
                                { to: { pathname: `/i/communities/${l}/moderation/moderation_log_banned`, state: r.state }, label: Wt, key: Wt },
                            ],
                            [l, r.state],
                        ),
                        s = m ? a.createElement(Pe.Z, { module: m, noItemsRenderer: Jt, renderer: (e) => a.createElement(ke.Z, { communityId: l, logIdentifier: e }) }) : null,
                        u = a.createElement(a.Fragment, null, a.createElement(Se.Z, { "aria-label": Ut, links: i }), a.createElement(o.Switch, null, a.createElement(o.Route, { exact: !0, path: `/i/communities/${l}/moderation/moderation_log` }, s), a.createElement(o.Route, { exact: !0, path: `/i/communities/${l}/moderation/moderation_log_members` }, a.createElement(Lt, { communityId: l })), a.createElement(o.Route, { exact: !0, path: `/i/communities/${l}/moderation/moderation_log_banned` }, a.createElement(Ot, { communityId: l }))));
                    return (
                        a.useEffect(() => {
                            (0, Fe.jW)("community-moderation-log-content-ready");
                        }, []),
                        a.createElement(I.Z, null, a.createElement(Z.Z, { backLocation: `/i/communities/${l}`, history: n, primaryContent: u, sidebarContent: a.createElement(v.Z, { communityId: l, moderatorArea: !0 }), subtitle: c, title: Ht }))
                    );
                });
            var Gt = n(714955);
            const Qt = (e, t) => {
                    const { community: n } = t;
                    return n ? n.id_str : void 0;
                },
                Yt = (0, d.Z)()
                    .propsFromState(() => ({ sliceModule: (0, $e.P1)(Qt, (e) => (e ? (0, Te.A)(e) : void 0)) }))
                    .withAnalytics({ page: "community", section: "moderation", component: "reported_tweets" }),
                Xt = g().c2c191fc,
                en = g().dffb0774,
                tn = g().j2e04b1e,
                nn = Yt((e) => {
                    const { community: t, history: n, sliceModule: r } = e,
                        { id_str: o, name: m } = t,
                        l = r ? a.createElement(Pe.Z, { module: r, noItemsRenderer: () => a.createElement(x.Z, { header: en, message: tn }), renderer: (e) => a.createElement(Gt.Z, { tweetId: e }) }) : null;
                    return a.createElement(I.Z, null, a.createElement(Z.Z, { backLocation: `/i/communities/${o}`, history: n, primaryContent: l, sidebarContent: a.createElement(v.Z, { communityId: o, moderatorArea: !0 }), subtitle: m, title: Xt }));
                });
            function rn(e) {
                const { analytics: t, community: n, ...m } = e,
                    l = m.match.path;
                return (0, c.uA)(n.role) ? a.createElement(o.Switch, null, a.createElement(o.Route, { exact: !0, path: `${l}/reported_tweets` }, a.createElement(nn, (0, r.Z)({}, m, { community: n }))), a.createElement(o.Route, { exact: !0, path: `${l}/member_requests` }, a.createElement(Ne, { communityId: n.id_str })), a.createElement(o.Route, { exact: !0, path: `${l}/moderation_log` }, a.createElement(Kt, (0, r.Z)({}, m, { community: n }))), a.createElement(o.Route, { exact: !0, path: `${l}/moderation_log_banned` }, a.createElement(Kt, (0, r.Z)({}, m, { community: n }))), a.createElement(o.Route, { exact: !0, path: `${l}/moderation_log_members` }, a.createElement(Kt, (0, r.Z)({}, m, { community: n }))), a.createElement(o.Route, null, a.createElement(s.default, m))) : a.createElement(s.default, m);
            }
            function an(e) {
                const { community: t, createLocalApiErrorHandler: n, error: o, fetchCommunityIfNeeded: c, fetchStatus: s, ...u } = e,
                    d = u.match.params.communityId,
                    y = a.useCallback(() => {
                        d && c(d).catch(n());
                    }, [d, n, c]);
                return a.useEffect(() => y(), [y]), d && o && (0, l.VZ)(o, l.ZP.CommunityNotFound) ? a.createElement(i.Z, { to: `/i/communities/${d}` }) : a.createElement(m.Z, { fetchStatus: s, onRequestRetry: y, render: () => (t ? a.createElement(rn, (0, r.Z)({}, u, { community: t })) : null) });
            }
            const on = E(an);
        },
        618586: (e, t, n) => {
            n.d(t, { ZP: () => L });
            var r = n(807896),
                a = (n(136728), n(316788)),
                o = n(202784),
                m = (n(585488), n(351743)),
                l = n.n(m),
                c = n(601413),
                i = n(811176),
                s = n(247056),
                u = n(190286),
                d = n(111677),
                y = n.n(d),
                p = n(762410),
                E = n(662696),
                f = n(530813),
                b = n(511323),
                g = n(443781),
                Z = n(870358),
                _ = n(395067),
                I = n(125363),
                h = n(837455),
                C = n(601576);
            const v = Object.freeze({ PromoteModerator: "PROMOTE_MODERATOR", DemoteModerator: "DEMOTE_MODERATOR" }),
                R = y().g30bc699,
                w = y().e585d844,
                M = y().cab7c6f8,
                x = y().af40a8e0,
                N = y().e96d5255,
                S = y().f348a395,
                k = y().c3a1aebe,
                P = y().c273c8a6,
                F = y().e68b09b4,
                $ = y().c0eb2a53,
                T = y().a5808125,
                A = y().a51d671b,
                D = { confirmButtonLabel: x, headline: M, text: (e) => o.createElement(y().I18NFormatMessage, { $i18n: "d46c6e8f" }, o.createElement(c.Z, { screenName: e })) },
                q = { confirmButtonLabel: F, headline: P, text: (e) => o.createElement(y().I18NFormatMessage, { $i18n: "c3a1f2bf" }, o.createElement(c.Z, { screenName: e })) },
                z = a.Z,
                L = (e) => {
                    const { viewerUserId: t } = o.useContext(g.rC),
                        { communityId: n, communityRole: a, recordId: m, screenName: c, userId: d, viewerRole: y } = e,
                        [M, x] = o.useState(null),
                        P = (0, I.I0)(),
                        [F, L] = l()(z),
                        O = o.useCallback(
                            ({ communityId: e, errorMessage: t, recordId: n, role: r, screenName: a, successMessage: o, userId: m }) => {
                                F({
                                    variables: { communityId: e, userId: m, role: r },
                                    updater(t) {
                                        const a = t.get(n);
                                        a?.setValue(r, `community_role(community_id:"${e}")`), P(h.Z.updateOne(`${e}_${m}`, { role: r }));
                                    },
                                    onCompleted() {
                                        P((0, C.fz)({ text: o }));
                                    },
                                    onError() {
                                        P((0, C.fz)({ text: t }));
                                    },
                                });
                            },
                            [F, P],
                        ),
                        H = o.useCallback(
                            ({ communityId: e, recordId: t, roleAction: n, screenName: r, userId: a }) => {
                                let o, m, l, c;
                                switch (n) {
                                    case v.PromoteModerator:
                                        (o = D), (l = Z.WW.Moderator), (c = N({ screenName: r })), (m = S({ screenName: r }));
                                        break;
                                    case v.DemoteModerator:
                                        (o = q), (l = Z.WW.Member), (c = $({ screenName: r })), (m = T({ screenName: r }));
                                        break;
                                    default:
                                        return;
                                }
                                x({
                                    ...o,
                                    text: o.text(r),
                                    onConfirm: () => {
                                        O({ communityId: e, errorMessage: m, recordId: t, role: l, screenName: r, successMessage: c, userId: a }), x(null);
                                    },
                                    onCancel: () => {
                                        x(null);
                                    },
                                });
                            },
                            [O],
                        ),
                        j = o.useCallback(
                            (e) => {
                                const t = [];
                                if (y === Z.WW.Admin)
                                    switch (a) {
                                        case Z.WW.Moderator:
                                            t.push({ disabled: L, text: k, Icon: p.default, onClick: () => H({ communityId: n, recordId: m, roleAction: v.DemoteModerator, screenName: c, userId: d }) });
                                            break;
                                        case Z.WW.Member:
                                            t.push({ disabled: L, text: w, Icon: E.default, onClick: () => H({ communityId: n, recordId: m, roleAction: v.PromoteModerator, screenName: c, userId: d }) });
                                    }
                                return a === Z.WW.Member && t.push({ text: A({ screenName: c }), Icon: f.default, link: { pathname: `/i/report/${_.C2.RemoveCommunityMember}/${d}?community_id=${n}`, state: { clientReferer: window.location.pathname, scribeNamespace: { page: "community", section: "people", component: "member" } } } }), t.push({ text: R({ screenName: c }), Icon: b.default, link: `/${c}` }), o.createElement(i.Z, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 });
                            },
                            [n, H, m, a, L, c, d, y],
                        );
                    return d !== t
                        ? o.createElement(
                              o.Fragment,
                              null,
                              o.createElement(s.Z, { renderActionMenu: j }),
                              M
                                  ? o.createElement(
                                        u.Z,
                                        (0, r.Z)(
                                            {
                                                confirmButtonType: "primary",
                                                onCancel: () => {
                                                    x(null);
                                                },
                                            },
                                            M,
                                        ),
                                    )
                                  : null,
                          )
                        : null;
                };
        },
        928495: (e, t, n) => {
            n.r(t), n.d(t, { CommunityPeopleScreen: () => M, Screen: () => R, communityPeopleQuery: () => v, default: () => x });
            var r = n(23984),
                a = n(202784),
                o = (n(585488), n(107267)),
                m = n(111677),
                l = n.n(m),
                c = n(718e3),
                i = n(21875),
                s = n(252021),
                u = n(507651),
                d = n(652904),
                y = n(736063),
                p = n(725516),
                E = n(535338),
                f = n(615027),
                b = n(185169),
                g = n(808798);
            const Z = l().h5245afa,
                _ = l().dc6ce7b4,
                I = l().f8321d82,
                h = l().ga2aa43c,
                C = { context: "PeopleCommunityQuery" },
                v = r.Z,
                R = () => {
                    const { communityId: e } = (0, o.useParams)();
                    return e ? a.createElement(w, { communityId: e }) : null;
                },
                w = ({ communityId: e }) => {
                    const t = (0, o.useHistory)(),
                        n = (0, o.useLocation)(),
                        [r, m] = a.useState(!1),
                        l = a.useMemo(
                            () => [
                                { to: { pathname: `/i/communities/${e}/members`, state: n.state }, label: I, key: I },
                                { to: { pathname: `/i/communities/${e}/moderators`, state: n.state }, label: h, key: h },
                            ],
                            [e, n.state],
                        ),
                        { communityResults: y } = (0, E.p)(v, { communityId: e });
                    if ("Community" !== y?.result?.__typename) return a.createElement(f.Z, { to: `/i/communities/${e}` });
                    const p = y.result.role,
                        C = n.pathname && n.pathname.indexOf("members") > 0,
                        R = C ? _ : h,
                        w = e ? a.createElement(a.Fragment, null, a.createElement(b.Z, { communityId: e, onIsSearchingChange: m, viewerRole: p }), r ? null : a.createElement(a.Fragment, null, a.createElement(u.Z, { "aria-label": R, links: l }), a.createElement(o.Switch, null, a.createElement(o.Route, { exact: !0, path: `/i/communities/${e}/members` }, a.createElement(g.ZP, { communityId: e, mode: g.VG.Members, viewerRole: p })), a.createElement(o.Route, { exact: !0, path: `/i/communities/${e}/moderators` }, a.createElement(g.ZP, { communityId: e, mode: g.VG.Moderators, viewerRole: p }))))) : null;
                    return a.createElement(d.Z, null, a.createElement(s.Z, { backLocation: e ? `/i/communities/${e}/` : "/", documentTitle: Z, history: t, primaryContent: w, rightControl: C && e ? a.createElement(i.Z, { communityId: e }) : null, sidebarContent: a.createElement(c.Z, null), title: _ }));
                },
                M = () => a.createElement(y.H, { errorConfig: C }, a.createElement(R, null)),
                x = (0, p.Z)(M, { page: "community", section: "people" });
        },
        185169: (e, t, n) => {
            n.d(t, { Z: () => b });
            var r = n(202784),
                a = n(392237),
                o = n(111677),
                m = n.n(o),
                l = n(874088),
                c = n(870358),
                i = n(339110),
                s = n(618586),
                u = n(668214),
                d = n(837455);
            const y = (e, t) => (t.communityId && t.userId ? d.Z.select(e, `${t.communityId}_${t.userId}`) : void 0);
            const p = (0, u.Z)().propsFromState(() => ({ userCommunityRoleRelationship: y }))(function (e) {
                    const { communityId: t, onCommunityRoleChange: n, userCommunityRoleRelationship: a, userId: o, viewerRole: m } = e;
                    if (
                        (r.useEffect(() => {
                            a && n(o, a);
                        }, [a, o, n]),
                        !a)
                    )
                        return null;
                    const {
                        role: l,
                        user: { id: c, screen_name: i },
                    } = a;
                    return r.createElement(s.ZP, { communityId: t, communityRole: l, recordId: c, screenName: i, userId: o, viewerRole: m });
                }),
                E = m().cf4898a0,
                f = [i.my.CommunityMembers];
            function b(e) {
                const { communityId: t, onIsSearchingChange: n, viewerRole: a } = e,
                    [o, m] = r.useState(!1),
                    [s, u] = r.useState(""),
                    [d, y] = r.useState({}),
                    b = r.useCallback(
                        (e, t) => {
                            y((n) => ({ ...n, [e]: t }));
                        },
                        [y],
                    ),
                    Z = r.useCallback(() => {
                        m(!0), n(!0);
                    }, [n]),
                    _ = r.useCallback(
                        (e) => {
                            u(e);
                            const t = !!e;
                            n(t), m(t);
                        },
                        [n],
                    ),
                    I = r.useCallback(() => {
                        s || (n(!1), m(!1));
                    }, [n, s]);
                if (!t) return null;
                return r.createElement(l.default, {
                    alwaysOpen: o,
                    communityId: t,
                    filter: f,
                    getItemIsDisabled: (e) => {
                        if ("user" === e.type) {
                            const { id_str: t } = e.data,
                                n = d[t];
                            return !(0, c.Wh)(n?.role);
                        }
                        return !1;
                    },
                    getUserDisplayNameLabel: (e) => {
                        if ("user" === e.type) {
                            const { id_str: t } = e.data,
                                n = d[t];
                            if (n) return (0, c.pu)(n.role);
                        }
                    },
                    getUserDisplayNameType: (e) => {
                        if ("user" === e.type) {
                            const { id_str: t } = e.data,
                                n = d[t];
                            if (n) return (0, c.yh)(n.role);
                        }
                    },
                    inputStyle: g.textInput,
                    isModal: !0,
                    onDismiss: I,
                    onFocus: Z,
                    onQueryChange: _,
                    placeholder: E,
                    renderUserDecoration: ({ userId: e }) => (a ? r.createElement(p, { communityId: t, onCommunityRoleChange: b, userId: e, viewerRole: a }) : null),
                    rounded: !0,
                    source: i._4.CommunityMemberSearch,
                    style: g.input,
                });
            }
            const g = a.default.create((e) => ({ input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 }, textInput: { marginBottom: e.spaces.space8 } }));
        },
        808798: (e, t, n) => {
            n.d(t, { VG: () => F, ZP: () => T });
            var r = n(202784),
                a = n(457311),
                o = n(111677),
                m = n.n(o),
                l = n(171084),
                c = (n(585488), n(965245)),
                i = n(736063),
                s = n(127218),
                u = n(239308),
                d = n(277660),
                y = n.n(d),
                p = n(443781),
                E = n(856522),
                f = n(870358),
                b = n(114084),
                g = n(618586);
            const Z = (e) => {
                    const { communityId: t, user: n, viewerRole: a } = e,
                        { viewerUserId: o } = r.useContext(p.rC),
                        m = y()(u.Z, n),
                        l = r.useMemo(() => {
                            const { community_role: e, core: n, id: l, legacy: c } = m,
                                { id_str: i } = c ?? {},
                                { screen_name: s } = n ?? {};
                            return (0, f.uA)(a) ? r.createElement(g.ZP, { communityId: t, communityRole: e, recordId: l, screenName: s, userId: i, viewerRole: a }) : o !== i ? r.createElement(E.Z, { user: m }) : null;
                        }, [t, o, m, a]),
                        c = (0, f.pu)(m.community_role),
                        i = (0, f.yh)(m.community_role);
                    return r.createElement(b.Z, { decoration: l, displayMode: "UserCompact", displayNameLabel: c, displayNameLabelType: i, user: m });
                },
                _ = { context: "members" },
                I = l.Z,
                h = (e) => e.__id,
                C = (e) => {
                    const { communityId: t, renderEmptyState: n, viewerRole: a } = e,
                        { data: o, fetchNext: m } = (0, s.C)(I, { communityId: t }),
                        l = r.useCallback((e) => ("User" !== e.result?.__typename ? null : r.createElement(Z, { communityId: t, user: e.result, viewerRole: a })), [a, t]),
                        i = "Community" === o.communityResults?.result?.__typename && o.communityResults.result;
                    if (!i) return null;
                    const u = i.members_slice.items_results;
                    return r.createElement(c.Z, { cacheKey: `SlicesRelay_CommunityMembersList_${t}`, identityFunction: h, items: u, noItemsRenderer: n, onNearEnd: m, renderer: l });
                },
                v = (e) => r.createElement(i.H, { errorConfig: _ }, r.createElement(C, e));
            var R = n(501701);
            const w = { context: "members" },
                M = R.Z,
                x = (e) => e.__id,
                N = (e) => {
                    const { communityId: t, renderEmptyState: n, viewerRole: a } = e,
                        { data: o, fetchNext: m } = (0, s.C)(M, { communityId: t }),
                        l = r.useCallback((e) => ("User" !== e.result?.__typename ? null : r.createElement(Z, { communityId: t, user: e.result, viewerRole: a })), [a, t]),
                        i = "Community" === o.communityResults?.result?.__typename && o.communityResults.result;
                    if (!i) return null;
                    const u = i.moderators_slice.items_results;
                    return r.createElement(c.Z, { cacheKey: `SlicesRelay_CommunityModeratorsList_${t}`, identityFunction: x, items: u, noItemsRenderer: n, onNearEnd: m, renderer: l });
                },
                S = (e) => r.createElement(i.H, { errorConfig: w }, r.createElement(N, e)),
                k = m().cdd87524,
                P = m().cca51910,
                F = { Moderators: "Moderators", Members: "Members" },
                $ = () => r.createElement(a.Z, { header: k, message: P }),
                T = (e) => {
                    const { communityId: t, mode: n, viewerRole: a } = e,
                        o = n === F.Moderators;
                    return a ? (o ? r.createElement(S, { communityId: t, renderEmptyState: $, viewerRole: a }) : r.createElement(v, { communityId: t, renderEmptyState: $, viewerRole: a })) : null;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-ef6409a7.78aab5ba.js.map
