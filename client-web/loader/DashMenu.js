"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashMenu", "icons/IconDraw-js", "icons/IconHeartBurst-js"],
    {
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r,
                o,
                i,
                a,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (i = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [o, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [i], storageKey: null }, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, a], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            l.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = l;
        },
        906433: (e, t, n) => {
            n.d(t, { Z: () => f });
            n(136728);
            var r = n(202784),
                o = n(325686),
                i = n(952428),
                a = n(731708),
                l = n(310088),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(206962);
            const m = () => d().d9ef2842,
                p = d().d86bbf0f,
                h = d().h6beb5fb,
                f = ({ badgeCount: e, decoration: t, icon: n, iconColor: s, label: c, link: d, onClick: f, pip: w, rightControl: _, testID: b }) =>
                    r.createElement(
                        o.Z,
                        { style: g.dashMenuItem },
                        r.createElement(
                            i.Z,
                            { link: d, onClick: f, style: g.link, testID: b },
                            r.createElement(
                                o.Z,
                                { style: g.item },
                                n
                                    ? r.createElement(n, {
                                          style: (() => {
                                              const e = [g.icon, g.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                r.createElement(a.ZP, { numberOfLines: 1, size: "headline1", style: g.itemLabel, weight: "bold" }, c),
                                e || w ? r.createElement(o.Z, { style: g.itemAccessory }, r.createElement(l.Z, { count: e, pip: w, standalone: !0, truncatedCountFormatter: h, unreadCountLabel: w ? m : p })) : null,
                                t ? r.createElement(o.Z, { style: g.leftMargin }, t) : null,
                            ),
                        ),
                        _,
                    ),
                g = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(202784),
                o = n(325686),
                i = n(661810),
                a = n(952428),
                l = n(731708),
                s = n(392237),
                c = n(516951),
                d = n(500002),
                u = n(443781),
                m = n(71620),
                p = n(668214),
                h = n(172497),
                f = n(466036),
                g = n(390387),
                w = n(919022);
            const _ = (0, p.Z)()
                .propsFromState(() => ({ communitiesActions: g.yK, hasCommunityMemberships: h.fn, pendingFollowersInfo: f.sC, viewerUser: w.ZP.selectViewerUser, userFeatures: g.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: t, pendingFollowersInfo: n, userFeatures: r, viewerUser: o }) => {
                    const { acceptedIds: i, ids: a } = n;
                    return { communitiesActions: e, acceptedFollowerCount: i.length, hasCommunityMemberships: t, viewerUser: o, pendingFollowerCount: a.length - i.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: f.GE }))
                .withAnalytics();
            var b = n(906433),
                k = n(879526);
            const v = ({ acceptedFollowerCount: e, analytics: t, pendingFollowerCount: n, viewerUser: s, onClose: d = c.Z }) => {
                    const { featureSwitches: m, userClaims: p } = (0, u.QZ)(),
                        { coreItems: h, countrySpecificItems: f } = (0, k.O)({ analytics: t, featureSwitches: m, onClose: d, userClaims: p, viewerUser: s, acceptedFollowerCount: e, pendingFollowerCount: n });
                    return r.createElement(
                        r.Fragment,
                        null,
                        ((e) =>
                            e.map((e, t) => {
                                const { component: n = b.Z, ...o } = e,
                                    i = { ...o },
                                    a = r.createElement(n, i);
                                return r.createElement(r.Fragment, { key: t }, a);
                            }))(h),
                        ((g = f),
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(o.Z, { style: C.redesignDivider }, r.createElement(i.Z, { space: "space12", style: C.divider })),
                            g.map((e, t) => r.createElement(a.Z, { key: t, link: e.link, onClick: e.onClick, style: C.countrySpecificItem }, r.createElement(l.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var g;
                },
                y = (0, d.ZP)(_(r.memo(v))),
                C = s.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        879526: (e, t, n) => {
            n.d(t, { O: () => De });
            var r = n(202784),
                o = n(400752),
                i = n(537392),
                a = n(688715),
                l = n(868634),
                s = n(111677),
                c = n.n(s),
                d = n(1753),
                u = n(625271),
                m = n(883069),
                p = n(279849),
                h = n(197318),
                f = n(689582),
                g = n(256260),
                w = n(511323),
                _ = n(80361),
                b = n(856151),
                k = n(53674),
                v = n(792618),
                y = n(520913),
                C = n(297896),
                D = n(175564),
                E = n(748138),
                Z = n(698891),
                M = n(68290),
                P = n(707570),
                x = n(839),
                T = n(593875),
                S = n(829110),
                A = n(720930),
                I = n(516951),
                F = n(450681),
                U = n(400915),
                L = n(420182),
                N = n(997657),
                B = n(306114),
                V = n(279918),
                W = n(722517),
                O = n(880647),
                z = n(655352),
                H = n(125363),
                K = n(466036),
                R = n(390387),
                j = n(76920),
                $ = n(477403),
                G = n(104119),
                Y = n(484633),
                q = n(381904),
                Q = n(206962);
            const J = c().a15648a4,
                X = c().i3145aa0,
                ee = c().cdf89b84,
                te = c().i83d4f14,
                ne = c().aeede01a,
                re = c().b0041756,
                oe = c().ae1bbb26,
                ie = c().d299431c,
                ae = c().fa98627a,
                le = c().fd442790,
                se = c().da137d9a,
                ce = c().e0cb0c72,
                de = c().j087774e,
                ue = c().e2eef3c2,
                me = c().b55d8a78,
                pe = c().e5323e36,
                he = c().h02a6fe6,
                fe = c().f75d1806,
                ge = c().a5a30af0,
                we = c().b007440a,
                _e = c().a5cbc19a,
                be = c().d13d697c,
                ke = c().j0e2cfa8,
                ve = c().h5e38204,
                ye = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                De = ({ analytics: e, featureSwitches: t, onClose: n = I.Z, userClaims: s, viewerUser: c, acceptedFollowerCount: De, pendingFollowerCount: Ee }) => {
                    let Ze = [],
                        Me = [];
                    const Pe = (0, W.Z)("PremiumNav"),
                        xe = t.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Te = (0, o.Dv)(L.lZ),
                        [Se, Ae] = r.useState(!1),
                        [Ie, Fe] = r.useState(!1),
                        Ue = t.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Le = t.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ne = (0, G.Md)(Le);
                    r.useEffect(() => {
                        Ne &&
                            Te.get(Ce).then((e) => {
                                Ae(!e?.analyticsClickedV2), Fe(!e?.[Ne?.key]);
                            });
                    }, [Te, Ne]);
                    const Be = (0, H.I0)();
                    r.useEffect(() => {
                        c?.protected && Be(K.GE());
                    }, [Be, c]);
                    const Ve = (0, j.Zy)();
                    Ve.size > 0 && Ve.add("/settings");
                    const We = (0, H.v9)(R.Lz),
                        Oe = ({ link: e }) => !(We && (("string" == typeof e && ((e.startsWith("/settings") && !Ve.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        ze = c?.screen_name || "",
                        He = (0, i.iv)().width,
                        Ke = O.Z.isOneColumnLayout(He) || O.Z.isOneColumnSquishedLayout(He),
                        Re = t.isTrue("responsive_web_birdwatch_note_writing_enabled") && !We,
                        je = t.isTrue("branded_like_preview_enabled"),
                        $e = t.isTrue("subscriptions_sign_up_enabled"),
                        Ge = t.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        Ye = t.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        qe = t.isTrue("rweb_xchat_enabled"),
                        Qe = s.isAnyPremiumSubscriber(),
                        Je = s.isVerifiedOrg(),
                        Xe = s.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        et = Qe,
                        tt = s.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, z.ZP)(),
                        { role: nt } = (0, U.l7)(),
                        { activeItem: rt } = (0, q.Y)(),
                        ot = t.isTrue("voice_rooms_web_space_creation") && nt !== Y.Q.host && rt?.type !== Y.W.space,
                        it = t.isTrue("rweb_go_live_enabled"),
                        at = t.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        lt = t.isTrue("payments_enabled"),
                        st = t.isTrue("recruiting_global_jobs_search_enabled"),
                        ct = (0, $.vC)(),
                        dt = t.isTrue("c9s_enabled") && !!c,
                        ut = (0, B.Z)(),
                        mt = r.useMemo(() => !(Qe || !ut) && t.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Qe, t, ut]),
                        pt = (t) => () => {
                            t && e.scribe({ section: "overflow_menu", element: t, action: "click", data: { message: "VDL redesign dash menu item" } }), n && n();
                        },
                        ht = { icon: d.default, label: ge, link: "/compose/articles", onClick: pt("article_composer") },
                        ft = { label: se, link: (0, a.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: pt("german_transparency_item") },
                        gt = { label: ne, link: (0, a.ju)("https://legal.x.com/imprint.html"), onClick: pt("imprint_item") },
                        wt = { icon: u.default, label: J, link: "/i/communitynotes", onClick: pt("birdwatch") },
                        _t = { icon: m.default, label: X, link: "/i/bookmarks", onClick: pt("bookmarks_overflow_item") },
                        bt = { icon: p.default, label: ee, link: "/i/branded_likes_preview", onClick: pt("branded_likes_preview_overflow_item") },
                        kt = (h.default, pt("labs_item"), { icon: f.default, label: re, link: `/${ze}/lists`, onClick: pt("lists_overflow_item") }),
                        vt = { badgeCount: Ee, icon: g.default, label: te, link: "/follower_requests", onClick: pt("follower_requests_overflow_item") },
                        yt = { icon: w.default, label: ae, link: `/${ze}`, onClick: pt("profile_overflow_item") },
                        Ct = { icon: _.default, label: "Money", link: "/i/money", onClick: pt("payments_overflow_item") },
                        Dt = { icon: b.default, label: de, link: "/i/coins", onClick: pt("twitter_coins") },
                        Et = () => ({
                            icon: k.default,
                            label: _e,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Te.get(Ce).then((e) => {
                                    const t = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Te.set(Ce, t);
                                }),
                                pt("analytics")),
                            decoration: Se ? r.createElement(l.ZP, { background: "blue500" }, be) : null,
                        }),
                        Zt = () => {
                            const e = t.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: n } = e ? Pe : {},
                                o = "UpsellButtonRenderProperties" === n?.render_properties.__typename && n.render_properties.action_label ? n.render_properties.action_label : fe,
                                i = "UpsellButtonRenderProperties" === Pe?.upsellContent?.render_properties.__typename ? Pe.upsellContent.render_properties.decoration_label : null;
                            return { icon: xe ? v.default : y.default, label: o, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: pt("verified_overflow_item"), decoration: i ? r.createElement(l.ZP, { background: "blue500" }, i) : null };
                        },
                        Mt = { icon: xe ? v.default : y.default, label: fe, link: "/i/premium", onClick: pt("premium_hub") },
                        Pt = { label: oe, link: "/logout", icon: C.default, onClick: pt("logout_overflow_item"), testID: Q.Z.logout },
                        xt = { icon: D.default, label: ce, link: (0, a.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: pt("twitter_ads_item") },
                        Tt = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        St = { icon: E.default, label: ie, link: Tt ? "/i/monetization" : "/settings/monetization", onClick: pt("monetization") },
                        At = { icon: Z.default, label: le, link: "/settings", onClick: pt("settings_overflow_item"), testID: Q.Z.settings },
                        It = () => ({
                            label: Ue ? ke : ue,
                            onClick: () => (
                                Ue &&
                                    Ne &&
                                    Te.get(Ce).then((e) => {
                                        const t = { ...e, [Ne?.key]: !0 };
                                        Te.set(Ce, t);
                                    }),
                                pt("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: M.default,
                            decoration: Ie && Ue && Ne ? r.createElement(l.ZP, { background: "blue500" }, Ne.label) : null,
                        }),
                        Ft = { label: ue, onClick: pt("verified_organization_dashboard_item"), link: "/i/verified", icon: M.default },
                        Ut = { label: me, onClick: pt("create_space_item"), link: "/i/spaces/start", icon: P.default },
                        Lt = { label: pe, onClick: pt("go_live_item"), link: "/i/go-live", icon: x.default },
                        Nt = c ? { label: he, onClick: pt("communities_item"), link: `/${c.screen_name}/communities`, icon: T.default } : void 0,
                        Bt = qe && c ? { label: ve, onClick: pt("chat_item"), link: "/i/chat", icon: S.default, decoration: r.createElement(l.ZP, { background: "blue500" }, ye) } : void 0,
                        Vt = t.isTrue("spaces_conference_enabled") || !!ct,
                        Wt = { label: "Conferences", onClick: pt("conferences_item"), link: "/i/conferences", icon: x.default },
                        Ot = { label: we, onClick: pt("jobs_item"), link: "/jobs", icon: A.default },
                        zt = [ft, gt],
                        Ht = $e && !Qe,
                        Kt = Ye,
                        Rt = (0, F.Z)([Bt, yt, et ? Mt : void 0, lt ? Ct : void 0, Ht ? Zt() : void 0, dt ? Nt : void 0, ze ? kt : void 0, _t, tt ? ht : void 0, Kt ? (Je ? Ft : It()) : void 0, at ? Dt : void 0, Re ? wt : void 0, Ee || De ? vt : void 0, mt ? Et() : void 0, St, xt, st ? Ot : void 0, Vt ? Wt : void 0, At, Pt]).filter(Oe),
                        jt = r.useContext(N.hC),
                        $t = (0, F.Z)([Bt, V.yw.Lists > jt && ze ? kt : void 0, V.yw.Premium > jt && et ? Mt : void 0, V.yw.PremiumSignup > jt && Ht ? Zt() : void 0, V.yw.Bookmarks > jt ? _t : void 0, V.yw.Payments > jt && lt ? Ct : void 0, V.yw.Communities > jt && dt ? Nt : void 0, V.yw.Articles > jt && Xe ? ht : void 0, V.yw.CommunityNotes > jt && Re ? wt : void 0, V.yw.Analytics > jt && mt ? Et() : void 0, St, V.yw.VerifiedOrgDash > jt && Kt && Je ? Ft : void 0, (((!Je || s.isLegacyVerifiedOrg()) && V.yw.VerifiedOrgSignup > jt) || (s.isVerifiedOrgAffiliate() && !s.isVerifiedOrg())) && t.isTrue("blue_business_vo_nav_for_legacy_verified") ? It() : void 0, at ? Dt : void 0, je ? bt : void 0, Ee || De ? vt : void 0, xt, V.yw.Jobs > jt && st ? Ot : void 0, void 0, ot ? Ut : void 0, it ? Lt : void 0, Vt ? Wt : void 0, At]).filter(Oe);
                    return (0, z.ZP)() ? ((Ze = Ze.concat($t)), Ge && Ke && (Me = zt)) : ((Ze = Ze.concat(Rt)), Ge && (Me = zt)), { coreItems: Ze, countrySpecificItems: Me };
                };
        },
        569591: (e, t, n) => {
            n.r(t), n.d(t, { DashMenu: () => $, default: () => G });
            var r = n(202784),
                o = n(325686),
                i = n(266704),
                a = n(525271),
                l = n(392237),
                s = n(111677),
                c = n.n(s),
                d = n(952793),
                u = n(839090),
                m = n(655352),
                p = n(943914),
                h = n(310088),
                f = n(530732),
                g = n(823161),
                w = n(154003),
                _ = n(379327),
                b = n(149170),
                k = n(380155),
                v = n(725516),
                y = n(125363),
                C = n(390387),
                D = n(919022),
                E = n(110512),
                Z = n(105131),
                M = n(206962),
                P = n(71620),
                x = n(668214),
                T = n(454319),
                S = n(956817);
            const A = (0, x.Z)()
                    .propsFromState(() => ({ multiAccountUsers: T.$4, showMultiAccountOverflowPip: T.Zt, delegateUser: C.sy }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("DASH_MENU_ACCOUNT_SWITCH"), switchAccount: S.y })),
                I = c().da4691aa,
                F = c().c7e55ccf,
                U = c().d86bbf0f,
                L = c().h6beb5fb,
                N = { page: "dash" },
                B = ({ createLocalApiErrorHandler: e, delegateUser: t, multiAccountUsers: n, onClose: i, showMultiAccountOverflowPip: a, switchAccount: l }) => {
                    const s = (0, v.z)(),
                        c = (0, y.v9)(D.ZP.selectLoggedInUser),
                        d = (0, E.V7)(),
                        u = (0, y.I0)(),
                        m = t || d.length || n.length > 0,
                        p = (e) => (e ? r.createElement(h.Z, { count: e, truncatedCountFormatter: L, unreadCountLabel: U }) : null),
                        Z = r.useCallback(
                            (t, n, r) => () => {
                                s.scribe({ ...N, section: r ? "switch_to_protected_account" : "switch_account", element: n ? "account_bubble_badged" : "account_bubble", action: "click" }), l({ user_id: t }).catch(e(k.y));
                            },
                            [s, e, l],
                        ),
                        P = r.useCallback(() => {
                            s.scribe({ ...N, section: "switch_account", element: "dash_account_switcher", action: "click" }), i && i();
                        }, [s, i]);
                    return r.createElement(
                        o.Z,
                        { style: V.root },
                        (() => {
                            if (c && d.length) {
                                const e = d.map((e) => ({ screenName: e.core.screen_name, userId: e.legacy.id_str, badgeCount: void 0, avatarImageUrl: e.avatar?.image_url })),
                                    n = { screenName: c.screen_name, userId: c.id_str, badgeCount: void 0, avatarImageUrl: c.profile_image_url_https };
                                return [n, ...e.slice(0, 2)]
                                    .filter(({ userId: e }) => e !== (t?.userId ?? n.userId))
                                    .slice(0, 2)
                                    .map((e) => r.createElement(f.Z, { "aria-label": F({ screenname: e.screenName }), key: e.userId, onPress: () => (e.userId === c.id_str ? u((0, C.YJ)()) : u((0, C.vU)({ userId: e.userId }))), role: "button", style: V.link }, r.createElement(g.default, { decoration: p(e.badgeCount), size: "large", uri: e.avatarImageUrl })));
                            }
                            return n.map((e) => r.createElement(f.Z, { "aria-label": F({ screenname: e.screen_name }), key: e.user_id, onPress: Z(e.user_id, !!e.badgeCount, e.is_protected), role: "button", style: V.link }, r.createElement(g.default, { decoration: p(e.badgeCount), size: "large", uri: e.avatar_image_url })));
                        })(),
                        (() => {
                            const e = m ? r.createElement(b.default, { testID: M.Z.iconMore }) : r.createElement(_.default, { testID: M.Z.iconPlus });
                            return r.createElement(o.Z, null, r.createElement(w.ZP, { "aria-label": I, icon: e, link: "/account/switch", onPress: P, size: "small", testID: M.Z.switcher, type: "primaryOutlined" }), a ? r.createElement(h.Z, { pip: !0, truncatedCountFormatter: L, unreadCountLabel: U }) : null);
                        })(),
                    );
                },
                V = l.default.create((e) => ({ root: { alignSelf: "flex-start", flexDirection: "row" }, link: { borderRadius: e.borderRadii.infinite, marginEnd: e.spaces.space4 } })),
                W = (0, Z.P3)(A(r.memo(B)));
            var O = n(659773);
            const z = (0, x.Z)()
                .propsFromState(() => ({ viewerUser: D.ZP.selectViewerUser }))
                .propsFromActions(() => ({ fetchDataUsageSettingsIfNeeded: O.MJ }))
                .withAnalytics({ page: "dash" });
            var H = n(120735);
            const K = c().i5f7b6b8,
                R = (e) => ({ avatar: !0, badges: !0, description: !1, followButton: !1, followIndicator: !1, followersYouKnow: !1, fullName: !0, label: !1, stats: !0, subscriptionsCount: e }),
                j = r.createElement(p.B, null, r.createElement(W, null)),
                $ = (e) => {
                    const { alignMenu: t, analytics: n, fetchDataUsageSettingsIfNeeded: l, onClose: s, renderCustomMenuItems: c, viewerUser: p, withMoreSideNavOverflow: h } = e,
                        f = (0, d.hC)("creator_subscriptions_subscription_count_enabled");
                    r.useEffect(() => {
                        l(), n.scribePageImpression();
                    }, [n, l]);
                    const g =
                        ((w = "profile_overflow_item"),
                        () => {
                            w && n.scribe({ section: "overflow_menu", element: w, action: "click" }), s && s();
                        });
                    var w;
                    const _ = (e) => {
                        if (!p) return null;
                        const { creator_subscriptions_count: t, followers_count: n, friends_count: a, highlightedLabel: l, is_blue_verified: d, name: u, profile_image_url_https: w, protected: _, screen_name: b, translator_type: k, verified: v, verified_type: y } = p;
                        return (0, m.ZP)() ? r.createElement(o.Z, { style: Y.dropdownMinWidth }, c ? c() : r.createElement(H.Z, { onClose: s, withMoreSideNavOverflow: h })) : r.createElement(o.Z, { style: [e && Y.scrollableContentPadding, (0, m.ZP)() && Y.menuContentWidth] }, r.createElement(o.Z, { "aria-label": K, style: Y.header }, r.createElement(i.Z, { decoration: j, isAllowedToViewOptions: R(f), isLoggedIn: !0, isUserBlueVerified: d, isUserProtected: _, isUserStatsWithLink: !0, isUserVerified: v, onAvatarClick: g, onScreenNameClick: g, subscriptionsCount: t, userAvatarSize: "xLarge", userAvatarUri: w, userFollowersCount: n, userFriendsCount: a, userHighlightedLabel: l, userName: u, userScreenName: b, userTranslatorType: k, userVerifiedType: y, withNameWrap: !0 })), c ? c() : r.createElement(H.Z, { onClose: s }));
                    };
                    return (0, m.ZP)() ? r.createElement(u.Z, { animateInDuration: "long", isFixed: !0, onDismiss: s, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, _(!1)) : r.createElement(a.Z, { align: t, onDismissed: s, style: Y.drawer, withTopBar: !1 }, _(!0));
                },
                G = z($),
                Y = l.default.create((e) => ({ backgroundArea: { backgroundColor: e.colors.activeBlack }, drawer: { maxWidth: "70%" }, dropdownMinWidth: { minWidth: "318px" }, wrapper: { alignSelf: "flex-start", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium, overflowY: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch" }, scrollableItems: { overflow: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", flexGrow: 1, flexShrink: 1 }, scrollableContentPadding: { paddingBottom: "44px" }, header: { flexGrow: 0, flexShrink: 0 }, avatarWrapper: { flexGrow: 1 }, userNames: { display: "flex", flexDirection: "column", paddingVertical: e.spaces.space12 }, menuContentWidth: { width: `calc(${e.spaces.space64} * 4.25)` } }));
        },
        206962: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        839090: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([
                        n.e("icons.8"),
                        n.e("icons.15"),
                        n.e("icons.7"),
                        n.e("icons.3"),
                        n.e("icons.24"),
                        n.e("icons.12"),
                        n.e("icons.22"),
                        n.e("icons.2"),
                        n.e("icons.18"),
                        n.e("icons.9"),
                        n.e("icons.6"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.14"),
                        n.e("icons.5"),
                        n.e("icons.16"),
                        n.e("icons.19"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        n.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        n.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        n.e("shared~bundle.JobSearch~bundle.UserJobs~loader.WideLayout"),
                        n.e("loader.WideLayout-6107ac1a"),
                        n.e("loader.WideLayout-a2dee9c7"),
                    ]).then(n.bind(n, 616753)),
            });
        },
        16222: (e, t, n) => {
            function r(e, t) {
                try {
                    return e();
                } catch (e) {
                    return t(e);
                }
            }
            n.d(t, { o: () => r });
        },
        477403: (e, t, n) => {
            n.d(t, { eY: () => m, si: () => w, vC: () => u });
            n(543673), n(240753), n(128399);
            var r = n(395337),
                o = n(202784),
                i = (n(585488), n(516951)),
                a = n(952793),
                l = n(16222),
                s = n(125363),
                c = n(919022),
                d = n(535338);
            function u(e) {
                return (0, s.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const t = (0, l.o)(() => new URL(e), i.Z);
                    if (!t || !p.includes(t.host)) return;
                    const n = t.pathname.slice(1).toLowerCase();
                    return h[n];
                })(c.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const p = ["twitter.com", "x.com"],
                h = { xai: "1661523610111193088" },
                f = Object.values(h),
                g = r.Z;
            function w() {
                const e = (0, d.p)(g, {}),
                    t = (0, a.hC)("spaces_conference_enabled");
                return o.useMemo(() => {
                    const n = e.affiliations?.affiliated_account_ids_results,
                        r = (
                            n?.flatMap(({ rest_id: e, result: t }) => {
                                if ("User" !== t?.__typename) return [];
                                return [{ name: t.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => f.includes(e));
                    return t && !r.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...r] : r;
                }, [e.affiliations?.affiliated_account_ids_results, t]);
            }
        },
        525271: (e, t, n) => {
            n.d(t, { Z: () => y });
            var r = n(202784),
                o = n(325686),
                i = n(111677),
                a = n.n(i),
                l = n(837020),
                s = n(461756),
                c = n(786998),
                d = n(154003),
                u = n(950822),
                m = n(743618),
                p = n(745153),
                h = n(292627),
                f = n(224162),
                g = n(392237);
            const w = a().af8fa2ae,
                _ = r.createElement(l.default, null);
            class b extends r.Component {
                constructor(e) {
                    super(),
                        (this._isMounted = !0),
                        (this._setAnimationNode = (e) => {
                            this._animationNode = e;
                        }),
                        (this._handleTransitionEnd = (e) => {
                            !1 === this.state.isVisible && e.target instanceof window.HTMLElement && e.target === this._animationNode && this.props.onDismissed();
                        }),
                        (this._handleMaskClick = () => {
                            this._handleDismiss();
                        }),
                        (this._handleEsc = (e) => {
                            const { altKey: t, ctrlKey: n, key: r, metaKey: o } = e;
                            !(t || n || o) && "Escape" === r && this._handleDismiss();
                        }),
                        (this._handleDismiss = () => {
                            this.setState({ isVisible: !1 }), s.Z.reducedMotionEnabled && this.props.onDismissed();
                        }),
                        (this.state = { isVisible: !1 });
                }
                componentDidMount() {
                    window.requestAnimationFrame(() => {
                        this._isMounted && this.setState({ isVisible: !0 });
                    });
                }
                componentWillUnmount() {
                    this._isMounted = !1;
                }
                render() {
                    const { additionalControl: e, align: t, buttonType: n, children: i, style: a, subtitle: l, title: d, topBarStyle: g, withBackgroundBlur: w, withTopBar: _, withTransparentMask: b } = this.props,
                        { isVisible: y } = this.state;
                    return r.createElement(f.ZP.Consumer, null, ({ direction: f }) => {
                        const C = "rtl" === f,
                            D = y ? v.visibleDrawer : ("left" === t) === C ? v.offscreenRightDrawer : v.offscreenLeftDrawer,
                            E = y && !b ? v.maskWithBg : v.maskTransparent,
                            Z = y ? v.animateOpen : v.animateClose,
                            M = s.Z.reducedMotionEnabled ? null : Z;
                        return r.createElement(h.Z.Modal, null, r.createElement(p.Z, null, r.createElement(m.Z, null, r.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [v.mask, E, M, w ? v.backgroundBlur : null, "left" === t ? v.alignLeft : v.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: k, style: [v.root, w ? v.backgroundRootBlur : null, D, M, a], children: r.createElement(r.Fragment, null, _ ? r.createElement(c.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: g, subtitle: l, title: d }) : null, r.createElement(o.Z, { style: v.contentContainer }, i)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return r.createElement(d.ZP, { "aria-label": w, icon: _, onPress: this._handleMaskClick, type: e });
                }
            }
            b.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const k = (e) => {
                    e.stopPropagation();
                },
                v = g.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...g.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                y = b;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(325686),
                i = n(111677),
                a = n.n(i),
                l = n(815858),
                s = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const m = a().a35a5b10,
                p = a().fc8cd112,
                h = (e) => r.createElement(s.ZP, null, e);
            class f extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: i, userScreenName: a, withFacepile: u } = this.props,
                        p = this._renderMessage();
                    return r.createElement(l.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(d.Z, { "aria-label": m, interactiveStyles: null, link: a ? ((h = a), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: l }) => r.createElement(o.Z, { style: g.content }, !e && u ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || l) && !!a && g.underline, i] }, e && u ? r.createElement(c.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, p))) : r.createElement(o.Z, { style: g.content }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, p)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : p;
                }
                _renderOneUsername(e) {
                    return r.createElement(a().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(a().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(a().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(a().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
                }
            }
            f.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const g = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var r = n(202784),
                o = n(325686),
                i = n(827515),
                a = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, i.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [f, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        w = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (w.current = !0),
                                function () {
                                    w.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (w.current)
                                if (a.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, i.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            w.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              w.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, g));
                        }, [f.animating, f.oldText]),
                        r.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !a.Z.reducedMotionEnabled,
                                i = !f.animating && f.oldText && !a.Z.reducedMotionEnabled,
                                s = { ...p, ...(f.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, d, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(w.current, g),
                                        style: c,
                                    },
                                    r.createElement(l.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, w, g])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                i = n(731708),
                a = n(891198),
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
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: o } = this.props;
                    return r.createElement(i.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                r.createElement(
                    o.Z,
                    { style: [m.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(o.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(i.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: o, weight: a = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: c, style: o, weight: a }) : r.createElement(i.ZP, { children: t, color: s ? "white" : "text", size: c, style: o, weight: a }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
        266704: (e, t, n) => {
            n.d(t, { Z: () => k });
            var r = n(202784),
                o = n(325686),
                i = n(731708),
                a = n(235902),
                l = n(649846),
                s = n(529509),
                c = n(392237),
                d = n(823161),
                u = n(238406),
                m = n(366635),
                p = n(646797);
            const h = () => !1;
            class f extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: n, userScreenName: i } = this.props,
                                { followersYouKnow: a } = e;
                            if (a && t && n) {
                                const { avatarUrls: e, count: t, names: a } = n;
                                return t ? r.createElement(o.Z, { style: [g.marginTop12, g.minHeight] }, "number" == typeof t && r.createElement(s.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: a, userScreenName: i })) : null;
                            }
                        });
                }
                render() {
                    return r.createElement(a.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
                        const t = e();
                        return r.createElement(o.Z, { style: g.root }, this._renderHeader(t), this._renderErrorMessage(), this._renderUserDescription(), this._renderUserStats(), this._renderKnownFollowerSocialContext(), this._renderGrokButton(), t ? this._renderFollowButtonAtBottom() : null);
                    });
                }
                _renderFollowButton() {
                    const { followButton: e, isAllowedToViewOptions: t, isLoggedIn: n } = this.props,
                        { followButton: r } = t;
                    return r && n && e ? e : null;
                }
                _renderFollowButtonAtBottom() {
                    return r.createElement(o.Z, { style: g.followButtonAtBottom }, this._renderFollowButton());
                }
                _renderGrokButton() {
                    return this.props.grokButton ? r.createElement(o.Z, { style: g.grokButton }, this.props.grokButton) : null;
                }
                _renderUserAvatar() {
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: n, promotedContent: i, userAvatarSize: l, userAvatarUri: s, userScreenName: c } = this.props,
                        { avatar: u } = e;
                    return r.createElement(o.Z, { style: g.row }, r.createElement(a.ZP.Provider, { value: { userAvatarLabel: h } }, r.createElement(d.default, { link: n, onClick: t, promotedContent: i, screenName: c, size: l, uri: u ? s : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: n } = this.props,
                        { label: i } = t;
                    return n ? r.createElement(r.Fragment, null, this._renderUserAvatar(), r.createElement(o.Z, { style: g.marginTop8 }, this._renderUserName(), i && this._renderHighlightedUserLabel())) : r.createElement(o.Z, { style: g.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: n, isUserVerified: o, onScreenNameClick: i, profileLink: a, promotedContent: l, userHighlightedLabel: s, userName: c, userScreenName: d, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: h, withNameWrap: f } = this.props,
                        { badges: g, followIndicator: w, fullName: _ } = e;
                    return r.createElement(m.Z, { affiliateBadgeInfo: s, badgeContext: "account", isBlueVerified: g ? t : void 0, isProtected: g ? n : void 0, isVerified: g ? o : void 0, link: a, name: _ ? c : d, nameSize: "headline2", onLinkClick: i, promotedContent: l, screenName: d, translatorType: g ? u : void 0, verifiedType: g ? p : void 0, withFollowsYou: w && h, withLink: !0, withNameWrap: f, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && r.createElement(l.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? r.createElement(o.Z, { style: g.marginTop4 }, r.createElement(i.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: n, userId: i, userWithheldDescription: a, userWithheldEntities: l } = this.props,
                        { description: s } = e;
                    return s && t && n && i ? r.createElement(o.Z, { style: [g.row, g.marginTop12] }, r.createElement(u.Z, { description: t, entities: n, userId: i, withheldDescription: a, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: n, subscriptionsCount: i, userFollowersCount: a, userFriendsCount: l, userScreenName: s } = this.props,
                        { stats: c } = e;
                    return c ? r.createElement(o.Z, { style: [g.row, g.marginTop12] }, r.createElement(p.Z, { followersCount: a, friendsCount: l, onPress: n, screenName: s, subscriptionsCount: i, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            f.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const g = c.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var w = n(807896);
            var _ = n(111677);
            const b = n.n(_)().ef633578;
            class k extends r.PureComponent {
                render() {
                    return r.createElement(f, this.props);
                }
            }
            (k.Promoted = (e) => {
                const { followButton: t, isUserProtected: n, isUserVerified: o, knownFollowers: i, onAvatarClick: a, onScreenNameClick: l, promotedContent: s, userDescription: c, userId: d, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return r.createElement(f, (0, w.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: o, knownFollowers: i, onAvatarClick: a, onScreenNameClick: l, promotedContent: s, userAvatarUri: h.profile_image_url_https, userDescription: c, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: d, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
            }),
                (k.Suspended = function ({ onAvatarClick: e, onScreenNameClick: t, userScreenName: n }) {
                    const o = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", description: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                    return r.createElement(f, { errorMessage: b, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !1, followButton: !1, followIndicator: !0, followersYouKnow: !1, fullName: !1, label: !1, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !1, isUserProtected: o.protected, isUserStatsWithLink: o.isUserStatsWithLink, isUserVerified: o.verified, knownFollowers: { avatarUrls: [], names: [] }, onAvatarClick: e, onScreenNameClick: t, userAvatarUri: o.profile_image_url_https, userDescription: o.description, userEntities: o.entities, userFollowersCount: o.followers_count, userFriendsCount: o.friends_count, userId: o.id_str, userName: n, userScreenName: n, userWithFollowsYou: o.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0 });
                });
        },
        646797: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(111677),
                i = n.n(o),
                a = n(891198),
                l = n(98538);
            class s extends r.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: n, screenName: o, style: s, subscribersCount: c, subscriptionsCount: d, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${o}/verified_followers`;
                    return r.createElement(l.Z.Group, { style: s }, r.createElement(l.Z, { count: t, link: u ? `/${o}/following` : void 0, onPress: n }, r.createElement(i().I18NFormatMessage, { $i18n: "g3ed1dd5" }, r.createElement(l.Z.Value, null, i().e4f1e6e4({ formattedCount: (0, a.wl)(t) })), r.createElement(l.Z.Label, null, i().daf8a75f({ count: t })))), r.createElement(l.Z, { count: e, link: u ? h : void 0, onPress: n }, r.createElement(i().I18NFormatMessage, { $i18n: "i06724fb" }, r.createElement(l.Z.Value, null, i().ef1f4fc6({ formattedCount: (0, a.wl)(e) })), r.createElement(l.Z.Label, null, i().ad9b5988({ count: e })))), m && void 0 !== c && r.createElement(l.Z, { count: c, link: u ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: n }, r.createElement(i().I18NFormatMessage, { $i18n: "eb0084f3" }, r.createElement(l.Z.Value, null, i().a9980948({ formattedCount: (0, a.wl)(c) })), r.createElement(l.Z.Label, null, i().ce44a35c({ count: c })))), p && d && r.createElement(l.Z, { count: d, link: u ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: n }, r.createElement(i().I18NFormatMessage, { $i18n: "fc1b8f67" }, r.createElement(l.Z.Value, null, i().id949f68({ formattedCount: (0, a.wl)(d) })), r.createElement(l.Z.Label, null, i().hb608cfc({ count: d })))));
                }
            }
            s.defaultProps = { withLink: !0, withSubscribersCount: !0 };
        },
        197318: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M8.7 2.4c.7-.6 1.5-1 2.3-1.4.5-.2 1.1-.3 1.7-.3.4 0 .8.1 1.1.3s.7.4.9.7c.2.3.3.6.4 1 .1.4.1.7 0 1.1-.1.5-.2 1-.4 1.4-.4.8-.8 1.5-1.3 2.2-1.8 2.8-3.9 5.1-5.7 7.7-.4.6-.9 1.3-1.3 1.9-.2.3-.4.6-.6 1.1-.3.6.2.8.8.5 2.3-1.1 10.3-11.2 12.8-9 .3.3 1.7 1.5-1.3 5.8-.4.6-.7 1.1-1.1 1.6-.5.7-1.1 1.5-1.6 2.3-.4.6-.7 1.2-1 1.9-.1.2-.2.6 0 .8.4.4 1.9-.7 3.7-2.4l3.2-3.2c.5-.5 1.2.1.7.7-1.6 1.9-5.5 6.4-7.5 6.3-.4 0-.7-.1-1-.3s-.5-.5-.6-.8c-.1-.2-.2-.7.1-1.5.3-.8.6-1.6 1.1-2.3.5-.8 1-1.7 1.5-2.4.3-.5.7-1.1 1-1.6.3-.5.8-1.4 1.2-2 .2-.3.6-.9.2-1.2-.2-.2-.5-.2-1.3.6 0 0-6.6 6.7-9 8.4-1.3.9-2.8 1.2-3.6.4-1-.9-1.6-2.5 1.5-6.4 3.1-3.8 6.5-8.7 6.8-9.6.1-.2.1-.4.1-.5.1-.5-.5-.9-1-.7-.3.2-.8.5-1.6 1.2-2.3 2-4.3 4.3-6.1 6.8-.1.2-.3.3-.5.4s-.4.2-.6.2c-.4.1-.8-.1-1.2-.3-.3-.2-.5-.6-.6-1v-.6c.1-.2.1-.4.3-.5 2.7-2.9 5-5.2 7.5-7.3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        279849: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => o, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (n, r, o) => {
                        const i = t ? t(r, o, e) : !!r;
                        return i && n[0].push(r), !i && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashMenu.0047e42a.js.map
