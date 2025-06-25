"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashMenu"],
    {
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r,
                o,
                a,
                i,
                l = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [r, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [o, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (i = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, i], storageKey: null }], storageKey: null }] },
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
                a = n(952428),
                i = n(731708),
                l = n(310088),
                s = n(392237),
                d = n(111677),
                c = n.n(d),
                u = n(206962);
            const m = () => c().d9ef2842,
                p = c().d86bbf0f,
                h = c().h6beb5fb,
                f = ({ badgeCount: e, decoration: t, icon: n, iconColor: s, label: d, link: c, onClick: f, pip: w, rightControl: _, testID: b }) =>
                    r.createElement(
                        o.Z,
                        { style: g.dashMenuItem },
                        r.createElement(
                            a.Z,
                            { link: c, onClick: f, style: g.link, testID: b },
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
                                r.createElement(i.ZP, { numberOfLines: 1, size: "headline1", style: g.itemLabel, weight: "bold" }, d),
                                e || w ? r.createElement(o.Z, { style: g.itemAccessory }, r.createElement(l.Z, { count: e, pip: w, standalone: !0, truncatedCountFormatter: h, unreadCountLabel: w ? m : p })) : null,
                                t ? r.createElement(o.Z, { style: g.leftMargin }, t) : null,
                            ),
                        ),
                        _,
                    ),
                g = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, t, n) => {
            n.d(t, { Z: () => v });
            var r = n(202784),
                o = n(325686),
                a = n(661810),
                i = n(952428),
                l = n(731708),
                s = n(392237),
                d = n(516951),
                c = n(500002),
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
                    const { acceptedIds: a, ids: i } = n;
                    return { communitiesActions: e, acceptedFollowerCount: a.length, hasCommunityMemberships: t, viewerUser: o, pendingFollowerCount: i.length - a.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: f.GE }))
                .withAnalytics();
            var b = n(906433),
                k = n(879526);
            const y = ({ acceptedFollowerCount: e, analytics: t, pendingFollowerCount: n, viewerUser: s, onClose: c = d.Z }) => {
                    const { featureSwitches: m, userClaims: p } = (0, u.QZ)(),
                        { coreItems: h, countrySpecificItems: f } = (0, k.O)({ analytics: t, featureSwitches: m, onClose: c, userClaims: p, viewerUser: s, acceptedFollowerCount: e, pendingFollowerCount: n });
                    return r.createElement(
                        r.Fragment,
                        null,
                        ((e) =>
                            e.map((e, t) => {
                                const { component: n = b.Z, ...o } = e,
                                    a = { ...o },
                                    i = r.createElement(n, a);
                                return r.createElement(r.Fragment, { key: t }, i);
                            }))(h),
                        ((g = f),
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(o.Z, { style: D.redesignDivider }, r.createElement(a.Z, { space: "space12", style: D.divider })),
                            g.map((e, t) => r.createElement(i.Z, { key: t, link: e.link, onClick: e.onClick, style: D.countrySpecificItem }, r.createElement(l.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var g;
                },
                v = (0, c.ZP)(_(r.memo(y))),
                D = s.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        879526: (e, t, n) => {
            n.d(t, { O: () => Ce });
            var r = n(202784),
                o = n(400752),
                a = n(537392),
                i = n(688715),
                l = n(868634),
                s = n(111677),
                d = n.n(s),
                c = n(1753),
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
                y = n(792618),
                v = n(520913),
                D = n(297896),
                C = n(175564),
                E = n(748138),
                M = n(698891),
                Z = n(68290),
                P = n(707570),
                A = n(839),
                S = n(593875),
                T = n(829110),
                x = n(720930),
                I = n(516951),
                F = n(450681),
                U = n(400915),
                L = n(420182),
                N = n(997657),
                B = n(306114),
                W = n(279918),
                V = n(722517),
                O = n(880647),
                z = n(655352),
                H = n(125363),
                K = n(466036),
                R = n(390387),
                $ = n(76920),
                G = n(477403),
                j = n(104119),
                Y = n(484633),
                q = n(381904),
                Q = n(206962);
            const J = d().a15648a4,
                X = d().i3145aa0,
                ee = d().cdf89b84,
                te = d().i83d4f14,
                ne = d().aeede01a,
                re = d().b0041756,
                oe = d().ae1bbb26,
                ae = d().d299431c,
                ie = d().fa98627a,
                le = d().fd442790,
                se = d().da137d9a,
                de = d().e0cb0c72,
                ce = d().j087774e,
                ue = d().e2eef3c2,
                me = d().b55d8a78,
                pe = d().e5323e36,
                he = d().h02a6fe6,
                fe = d().f75d1806,
                ge = d().a5a30af0,
                we = d().b007440a,
                _e = d().a5cbc19a,
                be = d().d13d697c,
                ke = d().j0e2cfa8,
                ye = d().h5e38204,
                ve = d().h7d5d9fa,
                De = "rweb.navItemDecorations",
                Ce = ({ analytics: e, featureSwitches: t, onClose: n = I.Z, userClaims: s, viewerUser: d, acceptedFollowerCount: Ce, pendingFollowerCount: Ee }) => {
                    let Me = [],
                        Ze = [];
                    const Pe = (0, V.Z)("PremiumNav"),
                        Ae = t.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Se = (0, o.Dv)(L.lZ),
                        [Te, xe] = r.useState(!1),
                        [Ie, Fe] = r.useState(!1),
                        Ue = t.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Le = t.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ne = (0, j.Md)(Le);
                    r.useEffect(() => {
                        Ne &&
                            Se.get(De).then((e) => {
                                xe(!e?.analyticsClickedV2), Fe(!e?.[Ne?.key]);
                            });
                    }, [Se, Ne]);
                    const Be = (0, H.I0)();
                    r.useEffect(() => {
                        d?.protected && Be(K.GE());
                    }, [Be, d]);
                    const We = (0, $.Zy)();
                    We.size > 0 && We.add("/settings");
                    const Ve = (0, H.v9)(R.Lz),
                        Oe = ({ link: e }) => !(Ve && (("string" == typeof e && ((e.startsWith("/settings") && !We.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        ze = d?.screen_name || "",
                        He = (0, a.iv)().width,
                        Ke = O.Z.isOneColumnLayout(He) || O.Z.isOneColumnSquishedLayout(He),
                        Re = t.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ve,
                        $e = t.isTrue("branded_like_preview_enabled"),
                        Ge = t.isTrue("subscriptions_sign_up_enabled"),
                        je = t.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
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
                        at = t.isTrue("rweb_go_live_enabled"),
                        it = t.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        lt = t.isTrue("payments_enabled"),
                        st = t.isTrue("recruiting_global_jobs_search_enabled"),
                        dt = (0, G.vC)(),
                        ct = t.isTrue("c9s_enabled") && !!d,
                        ut = (0, B.Z)(),
                        mt = r.useMemo(() => !(Qe || !ut) && t.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Qe, t, ut]),
                        pt = (t) => () => {
                            t && e.scribe({ section: "overflow_menu", element: t, action: "click", data: { message: "VDL redesign dash menu item" } }), n && n();
                        },
                        ht = { icon: c.default, label: ge, link: "/compose/articles", onClick: pt("article_composer") },
                        ft = { label: se, link: (0, i.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: pt("german_transparency_item") },
                        gt = { label: ne, link: (0, i.ju)("https://legal.x.com/imprint.html"), onClick: pt("imprint_item") },
                        wt = { icon: u.default, label: J, link: "/i/communitynotes", onClick: pt("birdwatch") },
                        _t = { icon: m.default, label: X, link: "/i/bookmarks", onClick: pt("bookmarks_overflow_item") },
                        bt = { icon: p.default, label: ee, link: "/i/branded_likes_preview", onClick: pt("branded_likes_preview_overflow_item") },
                        kt = (h.default, pt("labs_item"), { icon: f.default, label: re, link: `/${ze}/lists`, onClick: pt("lists_overflow_item") }),
                        yt = { badgeCount: Ee, icon: g.default, label: te, link: "/follower_requests", onClick: pt("follower_requests_overflow_item") },
                        vt = { icon: w.default, label: ie, link: `/${ze}`, onClick: pt("profile_overflow_item") },
                        Dt = { icon: _.default, label: "Money", link: "/i/money", onClick: pt("payments_overflow_item") },
                        Ct = { icon: b.default, label: ce, link: "/i/coins", onClick: pt("twitter_coins") },
                        Et = () => ({
                            icon: k.default,
                            label: _e,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Se.get(De).then((e) => {
                                    const t = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Se.set(De, t);
                                }),
                                pt("analytics")),
                            decoration: Te ? r.createElement(l.ZP, { background: "blue500" }, be) : null,
                        }),
                        Mt = () => {
                            const e = t.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: n } = e ? Pe : {},
                                o = "UpsellButtonRenderProperties" === n?.render_properties.__typename && n.render_properties.action_label ? n.render_properties.action_label : fe,
                                a = "UpsellButtonRenderProperties" === Pe?.upsellContent?.render_properties.__typename ? Pe.upsellContent.render_properties.decoration_label : null;
                            return { icon: Ae ? y.default : v.default, label: o, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: pt("verified_overflow_item"), decoration: a ? r.createElement(l.ZP, { background: "blue500" }, a) : null };
                        },
                        Zt = { icon: Ae ? y.default : v.default, label: fe, link: "/i/premium", onClick: pt("premium_hub") },
                        Pt = { label: oe, link: "/logout", icon: D.default, onClick: pt("logout_overflow_item"), testID: Q.Z.logout },
                        At = { icon: C.default, label: de, link: (0, i.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: pt("twitter_ads_item") },
                        St = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Tt = { icon: E.default, label: ae, link: St ? "/i/monetization" : "/settings/monetization", onClick: pt("monetization") },
                        xt = { icon: M.default, label: le, link: "/settings", onClick: pt("settings_overflow_item"), testID: Q.Z.settings },
                        It = () => ({
                            label: Ue ? ke : ue,
                            onClick: () => (
                                Ue &&
                                    Ne &&
                                    Se.get(De).then((e) => {
                                        const t = { ...e, [Ne?.key]: !0 };
                                        Se.set(De, t);
                                    }),
                                pt("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: Z.default,
                            decoration: Ie && Ue && Ne ? r.createElement(l.ZP, { background: "blue500" }, Ne.label) : null,
                        }),
                        Ft = { label: ue, onClick: pt("verified_organization_dashboard_item"), link: "/i/verified", icon: Z.default },
                        Ut = { label: me, onClick: pt("create_space_item"), link: "/i/spaces/start", icon: P.default },
                        Lt = { label: pe, onClick: pt("go_live_item"), link: "/i/go-live", icon: A.default },
                        Nt = d ? { label: he, onClick: pt("communities_item"), link: `/${d.screen_name}/communities`, icon: S.default } : void 0,
                        Bt = qe && d ? { label: ye, onClick: pt("chat_item"), link: "/i/chat", icon: T.default, decoration: r.createElement(l.ZP, { background: "blue500" }, ve) } : void 0,
                        Wt = t.isTrue("spaces_conference_enabled") || !!dt,
                        Vt = { label: "Conferences", onClick: pt("conferences_item"), link: "/i/conferences", icon: A.default },
                        Ot = { label: we, onClick: pt("jobs_item"), link: "/jobs", icon: x.default },
                        zt = [ft, gt],
                        Ht = Ge && !Qe,
                        Kt = Ye,
                        Rt = (0, F.Z)([Bt, vt, et ? Zt : void 0, lt ? Dt : void 0, Ht ? Mt() : void 0, ct ? Nt : void 0, ze ? kt : void 0, _t, tt ? ht : void 0, Kt ? (Je ? Ft : It()) : void 0, it ? Ct : void 0, Re ? wt : void 0, Ee || Ce ? yt : void 0, mt ? Et() : void 0, Tt, At, st ? Ot : void 0, Wt ? Vt : void 0, xt, Pt]).filter(Oe),
                        $t = r.useContext(N.hC),
                        Gt = (0, F.Z)([Bt, W.yw.Lists > $t && ze ? kt : void 0, W.yw.Premium > $t && et ? Zt : void 0, W.yw.PremiumSignup > $t && Ht ? Mt() : void 0, W.yw.Bookmarks > $t ? _t : void 0, W.yw.Payments > $t && lt ? Dt : void 0, W.yw.Communities > $t && ct ? Nt : void 0, W.yw.Articles > $t && Xe ? ht : void 0, W.yw.CommunityNotes > $t && Re ? wt : void 0, W.yw.Analytics > $t && mt ? Et() : void 0, Tt, W.yw.VerifiedOrgDash > $t && Kt && Je ? Ft : void 0, (((!Je || s.isLegacyVerifiedOrg()) && W.yw.VerifiedOrgSignup > $t) || (s.isVerifiedOrgAffiliate() && !s.isVerifiedOrg())) && t.isTrue("blue_business_vo_nav_for_legacy_verified") ? It() : void 0, it ? Ct : void 0, $e ? bt : void 0, Ee || Ce ? yt : void 0, At, W.yw.Jobs > $t && st ? Ot : void 0, void 0, ot ? Ut : void 0, at ? Lt : void 0, Wt ? Vt : void 0, xt]).filter(Oe);
                    return (0, z.ZP)() ? ((Me = Me.concat(Gt)), je && Ke && (Ze = zt)) : ((Me = Me.concat(Rt)), je && (Ze = zt)), { coreItems: Me, countrySpecificItems: Ze };
                };
        },
        569591: (e, t, n) => {
            n.r(t), n.d(t, { DashMenu: () => G, default: () => j });
            var r = n(202784),
                o = n(325686),
                a = n(266704),
                i = n(525271),
                l = n(392237),
                s = n(111677),
                d = n.n(s),
                c = n(952793),
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
                y = n(725516),
                v = n(125363),
                D = n(390387),
                C = n(919022),
                E = n(110512),
                M = n(105131),
                Z = n(206962),
                P = n(71620),
                A = n(668214),
                S = n(454319),
                T = n(956817);
            const x = (0, A.Z)()
                    .propsFromState(() => ({ multiAccountUsers: S.$4, showMultiAccountOverflowPip: S.Zt, delegateUser: D.sy }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, P.zr)("DASH_MENU_ACCOUNT_SWITCH"), switchAccount: T.y })),
                I = d().da4691aa,
                F = d().c7e55ccf,
                U = d().d86bbf0f,
                L = d().h6beb5fb,
                N = { page: "dash" },
                B = ({ createLocalApiErrorHandler: e, delegateUser: t, multiAccountUsers: n, onClose: a, showMultiAccountOverflowPip: i, switchAccount: l }) => {
                    const s = (0, y.z)(),
                        d = (0, v.v9)(C.ZP.selectLoggedInUser),
                        c = (0, E.V7)(),
                        u = (0, v.I0)(),
                        m = t || c.length || n.length > 0,
                        p = (e) => (e ? r.createElement(h.Z, { count: e, truncatedCountFormatter: L, unreadCountLabel: U }) : null),
                        M = r.useCallback(
                            (t, n, r) => () => {
                                s.scribe({ ...N, section: r ? "switch_to_protected_account" : "switch_account", element: n ? "account_bubble_badged" : "account_bubble", action: "click" }), l({ user_id: t }).catch(e(k.y));
                            },
                            [s, e, l],
                        ),
                        P = r.useCallback(() => {
                            s.scribe({ ...N, section: "switch_account", element: "dash_account_switcher", action: "click" }), a && a();
                        }, [s, a]);
                    return r.createElement(
                        o.Z,
                        { style: W.root },
                        (() => {
                            if (d && c.length) {
                                const e = c.map((e) => ({ screenName: e.core.screen_name, userId: e.legacy.id_str, badgeCount: void 0, avatarImageUrl: e.avatar?.image_url })),
                                    n = { screenName: d.screen_name, userId: d.id_str, badgeCount: void 0, avatarImageUrl: d.profile_image_url_https };
                                return [n, ...e.slice(0, 2)]
                                    .filter(({ userId: e }) => e !== (t?.userId ?? n.userId))
                                    .slice(0, 2)
                                    .map((e) => r.createElement(f.Z, { "aria-label": F({ screenname: e.screenName }), key: e.userId, onPress: () => (e.userId === d.id_str ? u((0, D.YJ)()) : u((0, D.vU)({ userId: e.userId }))), role: "button", style: W.link }, r.createElement(g.default, { decoration: p(e.badgeCount), size: "large", uri: e.avatarImageUrl })));
                            }
                            return n.map((e) => r.createElement(f.Z, { "aria-label": F({ screenname: e.screen_name }), key: e.user_id, onPress: M(e.user_id, !!e.badgeCount, e.is_protected), role: "button", style: W.link }, r.createElement(g.default, { decoration: p(e.badgeCount), size: "large", uri: e.avatar_image_url })));
                        })(),
                        (() => {
                            const e = m ? r.createElement(b.default, { testID: Z.Z.iconMore }) : r.createElement(_.default, { testID: Z.Z.iconPlus });
                            return r.createElement(o.Z, null, r.createElement(w.ZP, { "aria-label": I, icon: e, link: "/account/switch", onPress: P, size: "small", testID: Z.Z.switcher, type: "primaryOutlined" }), i ? r.createElement(h.Z, { pip: !0, truncatedCountFormatter: L, unreadCountLabel: U }) : null);
                        })(),
                    );
                },
                W = l.default.create((e) => ({ root: { alignSelf: "flex-start", flexDirection: "row" }, link: { borderRadius: e.borderRadii.infinite, marginEnd: e.spaces.space4 } })),
                V = (0, M.P3)(x(r.memo(B)));
            var O = n(659773);
            const z = (0, A.Z)()
                .propsFromState(() => ({ viewerUser: C.ZP.selectViewerUser }))
                .propsFromActions(() => ({ fetchDataUsageSettingsIfNeeded: O.MJ }))
                .withAnalytics({ page: "dash" });
            var H = n(120735);
            const K = d().i5f7b6b8,
                R = (e) => ({ avatar: !0, badges: !0, description: !1, followButton: !1, followIndicator: !1, followersYouKnow: !1, fullName: !0, label: !1, stats: !0, subscriptionsCount: e }),
                $ = r.createElement(p.B, null, r.createElement(V, null)),
                G = (e) => {
                    const { alignMenu: t, analytics: n, fetchDataUsageSettingsIfNeeded: l, onClose: s, renderCustomMenuItems: d, viewerUser: p, withMoreSideNavOverflow: h } = e,
                        f = (0, c.hC)("creator_subscriptions_subscription_count_enabled");
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
                        const { creator_subscriptions_count: t, followers_count: n, friends_count: i, highlightedLabel: l, is_blue_verified: c, name: u, profile_image_url_https: w, protected: _, screen_name: b, translator_type: k, verified: y, verified_type: v } = p;
                        return (0, m.ZP)() ? r.createElement(o.Z, { style: Y.dropdownMinWidth }, d ? d() : r.createElement(H.Z, { onClose: s, withMoreSideNavOverflow: h })) : r.createElement(o.Z, { style: [e && Y.scrollableContentPadding, (0, m.ZP)() && Y.menuContentWidth] }, r.createElement(o.Z, { "aria-label": K, style: Y.header }, r.createElement(a.Z, { decoration: $, isAllowedToViewOptions: R(f), isLoggedIn: !0, isUserBlueVerified: c, isUserProtected: _, isUserStatsWithLink: !0, isUserVerified: y, onAvatarClick: g, onScreenNameClick: g, subscriptionsCount: t, userAvatarSize: "xLarge", userAvatarUri: w, userFollowersCount: n, userFriendsCount: i, userHighlightedLabel: l, userName: u, userScreenName: b, userTranslatorType: k, userVerifiedType: v, withNameWrap: !0 })), d ? d() : r.createElement(H.Z, { onClose: s }));
                    };
                    return (0, m.ZP)() ? r.createElement(u.Z, { animateInDuration: "long", isFixed: !0, onDismiss: s, preferredHorizontalOrientation: "right", preferredVerticalOrientation: "up" }, _(!1)) : r.createElement(i.Z, { align: t, onDismissed: s, style: Y.drawer, withTopBar: !1 }, _(!0));
                },
                j = z(G),
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
                        n.e("icons.21"),
                        n.e("icons.16"),
                        n.e("icons.10"),
                        n.e("icons.19"),
                        n.e("icons.1"),
                        n.e("icons.0"),
                        n.e("icons.8"),
                        n.e("icons.2"),
                        n.e("icons.23"),
                        n.e("icons.3"),
                        n.e("icons.15"),
                        n.e("modules.common-e907d115"),
                        n.e("modules.common-e019dbda"),
                        n.e("icons.9"),
                        n.e("icons.7"),
                        n.e("icons.24"),
                        n.e("icons.29"),
                        n.e("icons.13"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.SideNav~loader.SideNavRedesign~loader.Typeahe"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        n.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
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
                        n.e("loader.WideLayout-9f4db315"),
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
                a = (n(585488), n(516951)),
                i = n(952793),
                l = n(16222),
                s = n(125363),
                d = n(919022),
                c = n(535338);
            function u(e) {
                return (0, s.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const t = (0, l.o)(() => new URL(e), a.Z);
                    if (!t || !p.includes(t.host)) return;
                    const n = t.pathname.slice(1).toLowerCase();
                    return h[n];
                })(d.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const p = ["twitter.com", "x.com"],
                h = { xai: "1661523610111193088" },
                f = Object.values(h),
                g = r.Z;
            function w() {
                const e = (0, c.p)(g, {}),
                    t = (0, i.hC)("spaces_conference_enabled");
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
            n.d(t, { Z: () => v });
            var r = n(202784),
                o = n(325686),
                a = n(111677),
                i = n.n(a),
                l = n(837020),
                s = n(461756),
                d = n(786998),
                c = n(154003),
                u = n(950822),
                m = n(743618),
                p = n(745153),
                h = n(292627),
                f = n(224162),
                g = n(392237);
            const w = i().af8fa2ae,
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
                    const { additionalControl: e, align: t, buttonType: n, children: a, style: i, subtitle: l, title: c, topBarStyle: g, withBackgroundBlur: w, withTopBar: _, withTransparentMask: b } = this.props,
                        { isVisible: v } = this.state;
                    return r.createElement(f.ZP.Consumer, null, ({ direction: f }) => {
                        const D = "rtl" === f,
                            C = v ? y.visibleDrawer : ("left" === t) === D ? y.offscreenRightDrawer : y.offscreenLeftDrawer,
                            E = v && !b ? y.maskWithBg : y.maskTransparent,
                            M = v ? y.animateOpen : y.animateClose,
                            Z = s.Z.reducedMotionEnabled ? null : M;
                        return r.createElement(h.Z.Modal, null, r.createElement(p.Z, null, r.createElement(m.Z, null, r.createElement(o.Z, { onClick: this._handleMaskClick, onKeyUp: this._handleEsc, style: [y.mask, E, Z, w ? y.backgroundBlur : null, "left" === t ? y.alignLeft : y.alignRight] }, (0, u.Z)("div", { role: "dialog", onTransitionEnd: this._handleTransitionEnd, ref: this._setAnimationNode, onClick: k, style: [y.root, w ? y.backgroundRootBlur : null, C, Z, i], children: r.createElement(r.Fragment, null, _ ? r.createElement(d.Z, { leftControl: "left" === t ? e : "right" === t ? this._renderCloseButton(n) : null, rightControl: "left" === t ? this._renderCloseButton(n) : "right" === t ? e : null, style: g, subtitle: l, title: c }) : null, r.createElement(o.Z, { style: y.contentContainer }, a)) })))));
                    });
                }
                _renderCloseButton(e) {
                    return r.createElement(c.ZP, { "aria-label": w, icon: _, onPress: this._handleMaskClick, type: e });
                }
            }
            b.defaultProps = { align: "left", onDismissed: () => {}, withTopBar: !0 };
            const k = (e) => {
                    e.stopPropagation();
                },
                y = g.default.create((e) => ({ backgroundBlur: { backdropFilter: "blur(2px)" }, backgroundRootBlur: { boxShadow: "light" === e.paletteName ? e.boxShadows.small : "0 0 5px rgba(80,80,80,0.2), 0 1px 4px 1px rgba(80,80,80,0.25)" }, mask: { ...g.default.absoluteFillObject, position: "fixed", transitionProperty: "background-color", transitionTimingFunction: "ease" }, maskWithBg: { backgroundColor: e.colors.maskColor }, maskTransparent: { backgroundColor: e.colors.transparent }, root: { display: "flex", flexDirection: "column", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.small, minWidth: 280, maxWidth: "100%", flexGrow: 1, flexShrink: 1, minHeight: 0, height: "100vh", transitionProperty: "transform", transitionTimingFunction: "ease" }, visibleDrawer: { transform: [{ translateX: "0%" }] }, offscreenLeftDrawer: { transform: [{ translateX: "-100%" }] }, offscreenRightDrawer: { transform: [{ translateX: "100%" }] }, alignLeft: { alignItems: "flex-start" }, alignRight: { alignItems: "flex-end" }, animateOpen: { transitionDuration: "250ms" }, animateClose: { transitionDuration: "200ms" }, contentContainer: { flexGrow: 1, flexShrink: 1, minHeight: 0, overflowY: "auto", overscrollBehavior: "contain" } })),
                v = b;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(111677),
                i = n.n(a),
                l = n(815858),
                s = n(731708),
                d = n(642153),
                c = n(530732),
                u = n(392237);
            const m = i().a35a5b10,
                p = i().fc8cd112,
                h = (e) => r.createElement(s.ZP, null, e);
            class f extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: i, withFacepile: u } = this.props,
                        p = this._renderMessage();
                    return r.createElement(l.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(c.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((h = i), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: l }) => r.createElement(o.Z, { style: g.content }, !e && u ? r.createElement(d.Z, { userAvatarUrls: t }) : null, r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || l) && !!i && g.underline, a] }, e && u ? r.createElement(d.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, p))) : r.createElement(o.Z, { style: g.content }, r.createElement(s.ZP, { color: "gray700", size: "subtext2" }, p)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : p;
                }
                _renderOneUsername(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
                }
            }
            f.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const g = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                i = n(461756),
                l = n(731708),
                s = n(392237);
            const d = "up",
                c = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? d : c) : d;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [d, c].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = s.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: s, ...c } = e,
                        [f, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
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
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, g));
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
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...p, ...(f.animating ? e.post : e.active) },
                                d = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, c, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(w.current, g),
                                        style: d,
                                    },
                                    r.createElement(l.ZP, c, f.text),
                                ),
                            );
                        }, [n, c, f, w, g])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                a = n(731708),
                i = n(891198),
                l = n(280278),
                s = n(392237);
            const d = "subtext1",
                c = r.createContext({ onMedia: !1 });
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: o } = this.props;
                    return r.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, r.createElement(c.Provider, { value: { onMedia: n } }, e));
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
                (u.Label = ({ children: e, style: t }) => r.createElement(c.Consumer, null, ({ onMedia: n }) => r.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: d, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: o, weight: i = "bold" }) => r.createElement(c.Consumer, null, ({ onMedia: s }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: d, style: o, weight: i }) : r.createElement(a.ZP, { children: t, color: s ? "white" : "text", size: d, style: o, weight: i }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
        266704: (e, t, n) => {
            n.d(t, { Z: () => k });
            var r = n(202784),
                o = n(325686),
                a = n(731708),
                i = n(235902),
                l = n(649846),
                s = n(529509),
                d = n(392237),
                c = n(823161),
                u = n(238406),
                m = n(366635),
                p = n(646797);
            const h = () => !1;
            class f extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderKnownFollowerSocialContext = () => {
                            const { isAllowedToViewOptions: e, isLoggedIn: t, knownFollowers: n, userScreenName: a } = this.props,
                                { followersYouKnow: i } = e;
                            if (i && t && n) {
                                const { avatarUrls: e, count: t, names: i } = n;
                                return t ? r.createElement(o.Z, { style: [g.marginTop12, g.minHeight] }, "number" == typeof t && r.createElement(s.Z, { knownFollowersAvatarUrls: e, knownFollowersCount: t, knownFollowersNames: i, userScreenName: a })) : null;
                            }
                        });
                }
                render() {
                    return r.createElement(i.ZP.UseProps, null, ({ followButtonAtBottomOfPromotedUserCard: e }) => {
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
                    const { isAllowedToViewOptions: e, onAvatarClick: t, profileLink: n, promotedContent: a, userAvatarSize: l, userAvatarUri: s, userScreenName: d } = this.props,
                        { avatar: u } = e;
                    return r.createElement(o.Z, { style: g.row }, r.createElement(i.ZP.Provider, { value: { userAvatarLabel: h } }, r.createElement(c.default, { link: n, onClick: t, promotedContent: a, screenName: d, size: l, uri: u ? s : void 0, withLink: !0 })), this._renderDecoration());
                }
                _renderHeader(e) {
                    const { isAllowedToViewOptions: t, withUserAvatar: n } = this.props,
                        { label: a } = t;
                    return n ? r.createElement(r.Fragment, null, this._renderUserAvatar(), r.createElement(o.Z, { style: g.marginTop8 }, this._renderUserName(), a && this._renderHighlightedUserLabel())) : r.createElement(o.Z, { style: g.row }, this._renderUserName(), e ? null : this._renderDecoration());
                }
                _renderDecoration() {
                    const { decoration: e } = this.props;
                    return e || this._renderFollowButton();
                }
                _renderUserName() {
                    const { isAllowedToViewOptions: e, isUserBlueVerified: t, isUserProtected: n, isUserVerified: o, onScreenNameClick: a, profileLink: i, promotedContent: l, userHighlightedLabel: s, userName: d, userScreenName: c, userTranslatorType: u, userVerifiedType: p, userWithFollowsYou: h, withNameWrap: f } = this.props,
                        { badges: g, followIndicator: w, fullName: _ } = e;
                    return r.createElement(m.Z, { affiliateBadgeInfo: s, badgeContext: "account", isBlueVerified: g ? t : void 0, isProtected: g ? n : void 0, isVerified: g ? o : void 0, link: i, name: _ ? d : c, nameSize: "headline2", onLinkClick: a, promotedContent: l, screenName: c, translatorType: g ? u : void 0, verifiedType: g ? p : void 0, withFollowsYou: w && h, withLink: !0, withNameWrap: f, withStackedLayout: !0 });
                }
                _renderHighlightedUserLabel() {
                    const { userHighlightedLabel: e } = this.props;
                    return e && r.createElement(l.Z, { label: e });
                }
                _renderErrorMessage() {
                    const { errorMessage: e } = this.props;
                    return e ? r.createElement(o.Z, { style: g.marginTop4 }, r.createElement(a.ZP, null, e)) : null;
                }
                _renderUserDescription() {
                    const { isAllowedToViewOptions: e, userDescription: t, userEntities: n, userId: a, userWithheldDescription: i, userWithheldEntities: l } = this.props,
                        { description: s } = e;
                    return s && t && n && a ? r.createElement(o.Z, { style: [g.row, g.marginTop12] }, r.createElement(u.Z, { description: t, entities: n, userId: a, withheldDescription: i, withheldEntities: l })) : null;
                }
                _renderUserStats() {
                    const { isAllowedToViewOptions: e, isUserStatsWithLink: t, onUserStatsPress: n, subscriptionsCount: a, userFollowersCount: i, userFriendsCount: l, userScreenName: s } = this.props,
                        { stats: d } = e;
                    return d ? r.createElement(o.Z, { style: [g.row, g.marginTop12] }, r.createElement(p.Z, { followersCount: i, friendsCount: l, onPress: n, screenName: s, subscriptionsCount: a, withLink: t, withSubscriptionsCount: e.subscriptionsCount })) : null;
                }
            }
            f.defaultProps = { userAvatarSize: "jumbo", withUserAvatar: !0 };
            const g = d.default.create((e) => ({ root: { padding: e.spaces.space16 }, row: { flexDirection: "row", justifyContent: "space-between" }, marginTop12: { marginTop: e.spaces.space12 }, marginTop8: { marginTop: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 }, minHeight: { minHeight: e.spaces.space20 }, followButtonAtBottom: { justifyContent: "center", marginTop: e.spaces.space12 }, grokButton: { justifyContent: "center", marginTop: e.spaces.space16 } }));
            var w = n(807896);
            var _ = n(111677);
            const b = n.n(_)().ef633578;
            class k extends r.PureComponent {
                render() {
                    return r.createElement(f, this.props);
                }
            }
            (k.Promoted = (e) => {
                const { followButton: t, isUserProtected: n, isUserVerified: o, knownFollowers: a, onAvatarClick: i, onScreenNameClick: l, promotedContent: s, userDescription: d, userId: c, userName: u, userScreenName: m, ...p } = e,
                    h = { protected: !1, isUserStatsWithLink: !1, verified: !1, profile_image_url_https: "", entities: {}, followers_count: 0, friends_count: 0, id_str: "", followed_by: !1 };
                return r.createElement(f, (0, w.Z)({}, p, { followButton: t, isAllowedToViewOptions: { avatar: !1, badges: !0, description: !0, followButton: !0, followIndicator: !0, followersYouKnow: !0, fullName: !0, label: !0, stats: !1, subscriptionsCount: !1 }, isLoggedIn: !0, isUserProtected: n, isUserStatsWithLink: h.isUserStatsWithLink, isUserVerified: o, knownFollowers: a, onAvatarClick: i, onScreenNameClick: l, promotedContent: s, userAvatarUri: h.profile_image_url_https, userDescription: d, userEntities: h.entities, userFollowersCount: h.followers_count, userFriendsCount: h.friends_count, userId: c, userName: u, userScreenName: m, userWithFollowsYou: h.followed_by, userWithheldDescription: void 0, userWithheldEntities: void 0, withUserAvatar: !1 }));
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
                a = n.n(o),
                i = n(891198),
                l = n(98538);
            class s extends r.PureComponent {
                render() {
                    const { followersCount: e, friendsCount: t, onPress: n, screenName: o, style: s, subscribersCount: d, subscriptionsCount: c, withLink: u, withSubscribersCount: m, withSubscriptionsCount: p } = this.props,
                        h = `/${o}/verified_followers`;
                    return r.createElement(l.Z.Group, { style: s }, r.createElement(l.Z, { count: t, link: u ? `/${o}/following` : void 0, onPress: n }, r.createElement(a().I18NFormatMessage, { $i18n: "g3ed1dd5" }, r.createElement(l.Z.Value, null, a().e4f1e6e4({ formattedCount: (0, i.wl)(t) })), r.createElement(l.Z.Label, null, a().daf8a75f({ count: t })))), r.createElement(l.Z, { count: e, link: u ? h : void 0, onPress: n }, r.createElement(a().I18NFormatMessage, { $i18n: "i06724fb" }, r.createElement(l.Z.Value, null, a().ef1f4fc6({ formattedCount: (0, i.wl)(e) })), r.createElement(l.Z.Label, null, a().ad9b5988({ count: e })))), m && void 0 !== d && r.createElement(l.Z, { count: d, link: u ? `/${o}/creator-subscriptions/subscribers` : void 0, onPress: n }, r.createElement(a().I18NFormatMessage, { $i18n: "eb0084f3" }, r.createElement(l.Z.Value, null, a().a9980948({ formattedCount: (0, i.wl)(d) })), r.createElement(l.Z.Label, null, a().ce44a35c({ count: d })))), p && c && r.createElement(l.Z, { count: c, link: u ? `/${o}/creator-subscriptions/subscriptions` : void 0, onPress: n }, r.createElement(a().I18NFormatMessage, { $i18n: "fc1b8f67" }, r.createElement(l.Z.Value, null, a().id949f68({ formattedCount: (0, i.wl)(c) })), r.createElement(l.Z.Label, null, a().hb608cfc({ count: c })))));
                }
            }
            s.defaultProps = { withLink: !0, withSubscribersCount: !0 };
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
                        const a = t ? t(r, o, e) : !!r;
                        return a && n[0].push(r), !a && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashMenu.3903f1fa.js.map
