"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-97a39920"],
    {
        224357: (e, t, n) => {
            n.d(t, { Z: () => x });
            n(890103), n(136728);
            var l = n(202784),
                o = n(325686),
                r = n(107267),
                i = n(731708),
                a = n(154003),
                c = n(392237),
                m = n(111677),
                s = n.n(m),
                u = n(837020),
                d = n(293723),
                p = n(263272),
                b = n(668214),
                _ = n(742602);
            const y = (0, b.Z)()
                    .propsFromState(() => ({ flags: _.LO }))
                    .propsFromActions(() => ({ setFlag: _.mB })),
                f = s().c66b37fa,
                h = s().g2768d0e,
                g = s().b192b58c,
                E = s().gd302780,
                Z = s().cbdddb0a,
                w = s().h5890b1a,
                v = [
                    { flag: "setup_clicked_rules", title: s().b4a6faca, link: (e) => ({ pathname: `/i/communities/${e}/tools/rules` }) },
                    { flag: "setup_clicked_personalization", title: s().a01e1a7c, link: (e) => ({ pathname: `/i/communities/${e}/tools/settings` }) },
                    { flag: "setup_clicked_invite", title: s().b139b54a, link: (e) => ({ pathname: `/i/communities/${e}/invite` }) },
                    { flag: "setup_clicked_tweet", title: s().f493480c, link: (e) => ({ pathname: "/compose/post", state: { text: `${E} https://twitter.com/i/communities/${e}`, positionCursorAtBeginning: !0 } }) },
                ],
                C = l.memo(({ communityId: e, flags: t, setFlag: n }) => {
                    const c = (0, r.useHistory)(),
                        m = l.useCallback(() => {
                            n(e, "setup_show_checklist", !1);
                        }, [e, n]);
                    if (!t.setup_show_checklist) return null;
                    const s = (t) => {
                            n(e, t.flag, !0).then(() => {
                                c.push(t.link(e));
                            });
                        },
                        b = (e, t) => {
                            13 === t.keyCode && s(e);
                        };
                    return l.createElement(
                        o.Z,
                        { style: k.wrapper },
                        l.createElement(o.Z, { style: k.header }, l.createElement(i.ZP, { size: "title3", weight: "bold" }, f), l.createElement(a.ZP, { "aria-label": g, icon: l.createElement(u.default, { style: k.close }), onClick: m, pullRight: !0, size: "medium", style: k.dismiss, type: "brandText" })),
                        l.createElement(i.ZP, { style: k.subtext }, h),
                        l.createElement(
                            o.Z,
                            { role: "list", style: k.list },
                            v.map((e) => {
                                const n = Boolean(t[e.flag]);
                                return l.createElement(o.Z, { focusable: !n, key: e.flag, onClick: n ? void 0 : s.bind(null, e), onKeyPress: n ? void 0 : b.bind(null, e), role: "listitem", style: [k.entry, n ? k.completedEntry : k.uncompletedEntry] }, l.createElement(i.ZP, { weight: "bold" }, e.title), n ? l.createElement(d.default, { "aria-label": Z, style: k.iconCompleted }) : l.createElement(p.default, { "aria-label": w, style: k.iconUncompleted }));
                            }),
                        ),
                    );
                }),
                k = c.default.create((e) => ({ wrapper: { padding: e.spaces.space32, borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.gray200, color: e.colors.text }, header: { display: "flex", flexDirection: "row", paddingBottom: e.spaces.space4, alignItems: "start" }, dismiss: { marginStart: "auto" }, subtext: { color: e.colors.gray700, paddingBottom: e.spaces.space16 }, close: { color: e.colors.text }, list: { gap: e.spaces.space16 }, entry: { display: "flex", flexDirection: "row", gap: e.spaces.space8, listStylePosition: "inside" }, completedEntry: {}, uncompletedEntry: { cursor: "pointer" }, iconCompleted: { marginStart: "auto", color: e.colors.green500 }, iconUncompleted: { marginStart: "auto", color: e.colors.gray300 } })),
                x = y(C);
        },
        610811: (e, t, n) => {
            n.d(t, { Z: () => i });
            var l = n(202784),
                o = n(718e3),
                r = n(399037);
            const i = (e) => {
                const { moderatorArea: t = !1 } = e,
                    n = ((e) => ({ withTopicsToFollow: !e, withTrends: !e, withWhoToFollow: !e }))(t);
                return l.createElement(o.Z, n, l.createElement(r.Z, e));
            };
        },
        733161: (e, t, n) => {
            n.r(t), n.d(t, { CommunityAnalyticsScreen: () => M, default: () => q });
            var l = n(843078),
                o = n(202784),
                r = (n(585488), n(712696)),
                i = n.n(r),
                a = n(107267),
                c = n(736063),
                m = n(725516),
                s = n(615027),
                u = n(111677),
                d = n.n(u),
                p = n(652904),
                b = n(485458),
                _ = n(325686),
                y = n(731708),
                f = n(738545),
                h = n(392237),
                g = n(979673);
            const E = { num_posts: { label: d().c199e390, popover: d().b4f51cd6 }, new_members: { label: d().g6f8325a, popover: d().b2bb7276 }, active_members: { label: d().e2172c92, popover: d().fe1a9f68 }, unique_posters: { label: d().e989927e, popover: d().d1386a90 }, total_members: { label: d().abf609f2, popover: d().h2081878 }, unique_logged_in_visitors: { label: d().a3235cd6, popover: d().g21e2a70 }, fav_count: { label: d().ied6bac2, popover: d().ced8d39a }, reply_count: { label: d().fb4f859c, popover: d().h5a41cce } },
                Z = d().c778d80b,
                w = d().g01559c6,
                v = d().i314218e,
                C = d().ba2e82a1;
            const k = ({ growth: e, metricKeysToRender: t, metrics: n }) => {
                    if (!n) return null;
                    const l = n,
                        r = e;
                    function i(e) {
                        const t = E[e];
                        if (!t) return;
                        const { current: n, past: i } = { current: l[(a = e)], past: r[`${a}_pct`] };
                        var a;
                        const c = "percent" === t.format ? Z(n ?? 0) : (0, g.fV)(n);
                        return o.createElement(f.ZP, { animated: !0, count: n ?? 0, key: e, label: t.label, popover: ((m = t.popover), o.createElement(_.Z, null, o.createElement(y.ZP, { color: "gray700", size: "body", weight: "normal" }, m))), size: "title2", trendValue: i / 100 ?? void 0, value: c });
                        var m;
                    }
                    const a = l.timestamp ? v + C(new Date(l.timestamp)) : w;
                    return o.createElement(
                        _.Z,
                        { style: x.root },
                        o.createElement(
                            _.Z,
                            { style: x.grid },
                            t.map((e) => i(e)),
                        ),
                        o.createElement(y.ZP, { color: "gray700", size: "subtext3" }, a),
                    );
                },
                x = h.default.create((e) => ({ root: { padding: 16 }, grid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridTemplateRows: "repeat(2, 1fr)", paddingVertical: 16, rowGap: 16 } })),
                I = ["num_posts", "new_members", "unique_posters", "fav_count", "reply_count"],
                S = ({ growth: e, metrics: t }) => (t ? o.createElement(k, { growth: e, metricKeysToRender: I, metrics: t }) : null),
                W = o.memo(S),
                R = d().d710b60c,
                T = ({ growth: e, metrics: t }) => o.createElement(p.Z, null, o.createElement(b.Z, { communityId: t.community_id.toString(), screenType: "primaryDetail", title: R }, o.createElement(W, { growth: e, metrics: t }))),
                P = o.memo(T),
                $ = l.Z,
                A = { context: "COMMUNITY_ANALYTICS_SCREEN" },
                B = ({ communityId: e }) => {
                    const t = i()($, { communityId: e }),
                        n = t?.communityResults.result.community_growth;
                    if (!n) {
                        const e = { active_members: 0, community_id: 0, engagement_rate: 0, impressions: 0, new_members: 0, num_posts: 0, total_members: 0, unique_posters: 0, unique_logged_in_visitors: 0, unique_logged_out_visitors: 0, unique_member_visitors: 0, fav_count: 0, reply_count: 0 },
                            t = { active_members_pct: 0, community_id: 0, engagement_rate_pct: 0, impressions_pct: 0, new_members_pct: 0, num_posts_pct: 0, total_members_pct: 0, unique_posters_pct: 0, unique_logged_in_visitors_pct: 0, unique_logged_out_visitors_pct: 0, unique_member_visitors_pct: 0, fav_count_pct: 0, reply_count_pct: 0 };
                        return o.createElement(P, { growth: t, metrics: e });
                    }
                    return o.createElement(P, { growth: n.growth_metrics, metrics: n.current_metrics });
                },
                M = () => {
                    const { communityId: e } = (0, a.useParams)();
                    return e ? o.createElement(c.H, { errorConfig: A }, o.createElement(B, { communityId: e })) : o.createElement(s.Z, { to: "/home" });
                },
                q = (0, m.Z)(M, { page: "community", section: "analytics" });
        },
        644631: (e, t, n) => {
            n.d(t, { ZP: () => De });
            var l = n(807896),
                o = n(456322),
                r = n(202784),
                i = (n(585488), n(736063)),
                a = n(870358),
                c = n(535338),
                m = n(82152),
                s = (n(136728), n(713491)),
                u = n(325686),
                d = n(277660),
                p = n.n(d),
                b = n(107267),
                _ = n(868634),
                y = n(392237),
                f = n(310088),
                h = n(844685),
                g = n(779610),
                E = n(688715),
                Z = n(661810),
                w = n(111677),
                v = n.n(w),
                C = n(415506),
                k = n(698891),
                x = n(607127),
                I = n(692165),
                S = n(119232),
                W = n(784732),
                R = n(53674),
                T = n(106186),
                P = n(544367),
                $ = n(648539),
                A = n(947135),
                B = n(92235),
                M = n(741049),
                q = n(443781),
                z = n(652904),
                F = n(621416),
                D = n(952793),
                L = n(946409),
                H = n(175856),
                U = n(947185),
                V = n(431433),
                K = n(158569),
                O = n(485458);
            const G = v().dce5e1b4,
                N = v().c5d8c93e,
                j = v().c8c7f9fc,
                Y = v().c2c191fc,
                Q = v().a87df2ee,
                X = v().dc6ce7b4,
                J = v().e42dd8fa,
                ee = v().gfca5254,
                te = v().c818c60c,
                ne = v().ee609174,
                le = v().ab19cdaa,
                oe = v().h6beb5fb,
                re = v().d755f47d,
                ie = v().efc26607,
                ae = v().adfcc3ce,
                ce = v().d0330d9c,
                me = v().fd67f7c8,
                se = v().e7e31264,
                ue = v().gc00d212,
                de = v().g0cbfc50,
                pe = v().h6ebcfca,
                be = v().c0fa0634,
                _e = v().da035fd5,
                ye = v().h41224f8,
                fe = v().b18e94b2,
                he = v().dc716b1c,
                ge = v().c3e2dda6,
                Ee = v().a68bffdc,
                Ze = r.createElement(_.ZP, { background: "primary", bold: !0, square: !1 }, _e({ ttc_c9s_spotlight_header: "" })),
                we = { label: v().c6ea29a2, header: v().a6e13fac, text: v().e538848c, confirmButtonLabel: v().j49e6aa2 },
                ve = y.default.create((e) => ({ thumbnail: { color: e.colors.gray700 }, upsellCardPadding: { padding: e.spaces.space20 } })),
                Ce = s.Z,
                ke = r.createElement(C.default, { style: ve.thumbnail }),
                xe = r.createElement(k.default, { style: ve.thumbnail }),
                Ie = r.createElement(x.default, { style: ve.thumbnail }),
                Se = r.createElement(I.default, { style: ve.thumbnail }),
                We = r.createElement(S.default, { style: ve.thumbnail }),
                Re = r.createElement(W.default, { style: ve.thumbnail }),
                Te = r.createElement(R.default, { style: ve.thumbnail }),
                Pe = r.createElement(T.default, { style: ve.thumbnail }),
                $e = r.createElement(P.default, { style: ve.thumbnail }),
                Ae = r.createElement($.default, { style: ve.thumbnail }),
                Be = r.memo(
                    (0, V.Z)(({ community: e, updateModeratorRole: t }) => {
                        const { viewerUserId: n } = r.useContext(q.rC),
                            [l, o] = (0, F.m)(H.Re),
                            i = (0, b.useHistory)(),
                            c = (0, b.useRouteMatch)(),
                            m = p()(Ce, e),
                            {
                                actions: s,
                                communityId: d,
                                member_count: _,
                                moderation: { count: y },
                                role: w,
                            } = m,
                            {
                                community_spotlight_setup_action_result: { __typename: v, deeplink: C },
                            } = s,
                            k = 'twitter://onboarding/task?flow_name=convert_to_professional&input_flow_data={"requested_variant": "communities"}' === C ? (0, L.Mh)(C)?.pathname || "/i/flow/convert_to_professional" : "/settings/professional_profile/profile_spotlight",
                            x = r.useCallback(() => (y > 0 ? r.createElement(f.Z, { count: y, standalone: !0, truncatedCountFormatter: oe, unreadCountLabel: re, withBorder: !1 }) : null), [y]),
                            I = w,
                            S = I === a.WW.Admin ? G : N,
                            W = I === a.WW.Admin ? ae : ce,
                            R = !c.isExact;
                        return r.createElement(
                            z.Z,
                            { locationKey: "communitySettingsRoot" },
                            r.createElement(
                                O.Z,
                                { communityId: d, screenType: "secondaryRoot", title: S, withDetailOpen: R },
                                r.createElement(
                                    u.Z,
                                    null,
                                    r.createElement(h.Z, { text: j }),
                                    r.createElement(M.Z, { label: Y, link: `/i/communities/${d}/moderation/reported_tweets`, renderRightContent: x, thumbnail: ke }),
                                    r.createElement(U.Z, { community: m }),
                                    (0, D.hC)("communities_moderation_log_enabled") && r.createElement(M.Z, { label: J, link: `/i/communities/${d}/moderation/moderation_log`, thumbnail: Ae }),
                                    r.createElement(h.Z, { text: Q }),
                                    I === a.WW.Admin ? r.createElement(M.Z, { description: me, label: ne, link: `/i/communities/${d}/tools/settings`, thumbnail: xe }) : null,
                                    (0, D.hC)("communities_spam_settings_enabled") && I === a.WW.Admin ? r.createElement(M.Z, { description: se, label: le, link: `/i/communities/${d}/tools/spam_settings`, thumbnail: Ie }) : null,
                                    r.createElement(M.Z, { description: ie({ memberCount: _ }), label: X, link: `/i/communities/${d}/tools/members`, thumbnail: We }),
                                    r.createElement(M.Z, { description: W, label: ee, link: `/i/communities/${d}/tools/rules`, thumbnail: Re }),
                                    (0, D.hC)("communities_analytics_enabled") ? r.createElement(M.Z, { description: Ee, label: te, link: `/i/communities/${d}/tools/analytics`, thumbnail: Te }) : null,
                                    (0, D.hC)("c9s_community_list_setting_enabled") && I === a.WW.Admin ? r.createElement(M.Z, { description: ge, label: he, link: `/i/communities/${d}/tools/lists`, thumbnail: $e }) : null,
                                    "CommunitySpotlightSetupActionShow" === v ? r.createElement(M.Z, { description: pe, label: be, link: k, thumbnail: Pe }) : null,
                                    r.createElement(g.Z, { description: de, label: ue, link: { external: !0, pathname: (0, E.ju)("https://help.x.com/using-twitter/communities") }, thumbnail: Se }),
                                    I === a.WW.Moderator
                                        ? r.createElement(
                                              r.Fragment,
                                              null,
                                              r.createElement(Z.Z, { spacing: "space1" }),
                                              r.createElement(A.Z, {
                                                  confirmationSheetConfirmButtonLabel: we.confirmButtonLabel,
                                                  confirmationSheetConfirmButtonType: "destructiveFilled",
                                                  confirmationSheetHeadline: we.header,
                                                  confirmationSheetText: we.text,
                                                  label: we.label,
                                                  onConfirmationSheetConfirm: () => {
                                                      n &&
                                                          t(d, { userId: n, role: a.WW.Member }).then(() => {
                                                              i.push(`i/communities/${d}`);
                                                          });
                                                  },
                                                  withBottomBorder: !1,
                                              }),
                                          )
                                        : null,
                                ),
                                "CommunitySpotlightSetupActionShow" === v && l ? r.createElement(u.Z, { style: ve.upsellCardPadding }, r.createElement(B.ZP, { header: Ze, imageUrl: K, link: k, onClick: o, primaryText: ye, secondaryText: fe })) : null,
                            ),
                        );
                    }),
                ),
                Me = { context: "CommunityToolsScreenContainerQuery" },
                qe = o.Z,
                ze = ({ communityId: e }) => {
                    const { communityResults: t } = (0, c.p)(qe, { communityId: e });
                    return "Community" !== t.result?.__typename ? null : r.createElement(Be, { community: t.result });
                },
                Fe = ({ community: e, communityId: t, ...n }) => r.createElement(i.H, { errorConfig: Me }, r.createElement(ze, (0, l.Z)({ community: e, communityId: t }, n))),
                De = (0, m.ys)(r.memo(Fe), { allowRoles: [a.WW.Admin, a.WW.Moderator] });
        },
        387433: (e, t, n) => {
            n.r(t), n.d(t, { CommunityListsRouter: () => G, default: () => N });
            var l = n(202784),
                o = n(107267),
                r = n(652904),
                i = n(870358),
                a = n(725516),
                c = n(615027),
                m = n(82152),
                s = (n(136728), n(422438)),
                u = n(706549),
                d = n(185525),
                p = n(394897),
                b = n(325686),
                _ = (n(585488), n(351743)),
                y = n.n(_),
                f = n(96083),
                h = n(167630),
                g = n(844685),
                E = n(661810),
                Z = n(731708),
                w = n(154003),
                v = n(392237),
                C = n(111677),
                k = n.n(C),
                x = n(443781),
                I = n(379873),
                S = n(736063),
                W = n(125363),
                R = n(38562),
                T = n(535338),
                P = n(485458);
            const $ = k().dc716b1c,
                A = k().d703ce9e,
                B = k().f21f023c,
                M = k().gbc2cf50,
                q = k().ef9462fa,
                z = k().fcda89f4,
                F = k().c09609d8,
                D = { context: "CommunityListScreen" },
                L = p.Z,
                H = d.Z,
                U = u.Z,
                V = s.Z,
                K = (e) => {
                    const { communityId: t } = e,
                        [n, o] = l.useState(null),
                        { viewerUserId: r } = l.useContext(x.rC),
                        { user: i } = (0, T.p)(L, { userId: r || "" }),
                        { communityResults: a } = (0, T.p)(H, { communityId: t }),
                        c = (0, W.v9)(R.IX),
                        [m, s] = y()(U),
                        [u, d] = y()(V);
                    l.useEffect(() => {
                        n || o(a?.result?.list?.rest_id);
                    }, [a, n, o]);
                    const p = l.useCallback(
                            (e) => {
                                const n = e.rest_id,
                                    o = a?.result?.list?.rest_id === n,
                                    r = l.createElement(f.Z, {
                                        checked: o,
                                        onChange: (e) => {
                                            e ? m({ variables: { communityId: t, listId: n } }) : u({ variables: { communityId: t } });
                                        },
                                    });
                                return l.createElement(I.z4, { dataSaverMode: c, decoration: r, key: e.rest_id, listRef: e, pinnedTimelinesCount: 0, role: "list-item" });
                            },
                            [a?.result?.list?.rest_id, c, m, t, u],
                        ),
                        _ = l.useMemo(() => {
                            if ("User" === i?.result?.__typename && "Community" === a?.result?.__typename) {
                                let e = [];
                                if (i.result?.lists)
                                    for (const t of i.result.lists) {
                                        const l = p(t);
                                        t.rest_id === n ? (e = [l, ...e]) : e.push(l);
                                    }
                                return e;
                            }
                        }, [i, a, p, n]);
                    return l.createElement(S.H, { errorConfig: D }, l.createElement(P.Z, { communityId: t, rightControl: s || d ? l.createElement(h.Z, null) : void 0, screenType: "primaryDetail", title: $ }, l.createElement(g.Z, { subtext: B, text: A }), l.createElement(g.Z, { text: M }), _, l.createElement(E.Z, { spacing: "space20" }), l.createElement(b.Z, { style: O.createButtonContainer }, l.createElement(b.Z, { style: O.text }, l.createElement(Z.ZP, { color: "white", size: "headline1", weight: "heavy" }, q), l.createElement(Z.ZP, { color: "gray700", size: "subtext2" }, z)), l.createElement(w.ZP, { link: "/i/lists/create", type: "primaryText" }, F))));
                },
                O = v.default.create((e) => ({ createButtonContainer: { paddingHorizontal: e.spaces.space16, flexDirection: "row" }, text: { flexDirection: "column", flexShrink: "1" } })),
                G = (e) => {
                    const { communityId: t, match: n } = e,
                        i = n.url;
                    return l.createElement(o.Switch, null, l.createElement(o.Route, { exact: !0, path: `${i}/` }, l.createElement(r.Z, null, l.createElement(K, { communityId: t }))), l.createElement(o.Route, null, l.createElement(c.Z, { to: `${i}/` })));
                },
                N = (0, m.ys)((0, a.Z)(G, { page: "communities", section: "lists" }), { allowRoles: [i.WW.Admin, i.WW.Moderator] });
        },
        993827: (e, t, n) => {
            n.r(t), n.d(t, { ToolsPeopleScreen: () => E, default: () => Z });
            var l = n(202784),
                o = n(325686),
                r = n(107267),
                i = n(111677),
                a = n.n(i),
                c = n(21875),
                m = n(507651),
                s = n(652904),
                u = n(870358),
                d = n(725516),
                p = n(82152),
                b = n(185169),
                _ = n(808798),
                y = n(485458);
            const f = a().dc6ce7b4,
                h = a().f8321d82,
                g = a().ga2aa43c,
                E = (e) => {
                    const { community: t, communityId: n, location: i } = e,
                        [a, u] = l.useState(!1),
                        d = i?.pathname && i.pathname.indexOf("members") > 0,
                        p = d ? h : g,
                        E = l.useMemo(() => {
                            const e = n
                                ? [
                                      { to: { pathname: `/i/communities/${n}/tools/members`, state: i.state }, label: h, key: h },
                                      { to: { pathname: `/i/communities/${n}/tools/moderators`, state: i.state }, label: g, key: g },
                                  ]
                                : [];
                            return l.createElement(m.Z, { "aria-label": p, links: e });
                        }, [n, p, i]);
                    return l.createElement(s.Z, null, l.createElement(y.Z, { communityId: t.id_str, rightControl: d ? l.createElement(c.Z, { communityId: n }) : void 0, title: f }, l.createElement(o.Z, null, l.createElement(b.Z, { communityId: n, onIsSearchingChange: u, viewerRole: t.role }), a ? null : l.createElement(l.Fragment, null, E, l.createElement(r.Switch, null, l.createElement(r.Route, { exact: !0, path: `/i/communities/${t.id_str}/tools/members` }, l.createElement(_.ZP, { communityId: t.id_str, mode: _.VG.Members, viewerRole: t.role })), l.createElement(r.Route, { exact: !0, path: `/i/communities/${t.id_str}/tools/moderators` }, l.createElement(_.ZP, { communityId: t.id_str, mode: _.VG.Moderators, viewerRole: t.role })))))));
                },
                Z = (0, p.ys)((0, d.Z)(E, { page: "communities", section: "people" }), { allowRoles: [u.WW.Admin, u.WW.Moderator] });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-97a39920.d8fa1f5a.js.map
