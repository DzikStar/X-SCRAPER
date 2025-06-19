"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Account", "icons/IconFollowArrowLeftStroke-js", "shared~loader.DashMenu~loader.DashModal"],
    {
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i,
                r,
                l,
                a,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (l = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [l], storageKey: null }, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, a], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = o;
        },
        906433: (e, t, n) => {
            n.d(t, { Z: () => g });
            n(136728);
            var i = n(202784),
                r = n(325686),
                l = n(952428),
                a = n(731708),
                o = n(310088),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(206962);
            const m = () => d().d9ef2842,
                p = d().d86bbf0f,
                f = d().h6beb5fb,
                g = ({ badgeCount: e, decoration: t, icon: n, iconColor: s, label: c, link: d, onClick: g, pip: _, rightControl: y, testID: h }) =>
                    i.createElement(
                        r.Z,
                        { style: b.dashMenuItem },
                        i.createElement(
                            l.Z,
                            { link: d, onClick: g, style: b.link, testID: h },
                            i.createElement(
                                r.Z,
                                { style: b.item },
                                n
                                    ? i.createElement(n, {
                                          style: (() => {
                                              const e = [b.icon, b.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                i.createElement(a.ZP, { numberOfLines: 1, size: "headline1", style: b.itemLabel, weight: "bold" }, c),
                                e || _ ? i.createElement(r.Z, { style: b.itemAccessory }, i.createElement(o.Z, { count: e, pip: _, standalone: !0, truncatedCountFormatter: f, unreadCountLabel: _ ? m : p })) : null,
                                t ? i.createElement(r.Z, { style: b.leftMargin }, t) : null,
                            ),
                        ),
                        y,
                    ),
                b = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, t, n) => {
            n.d(t, { Z: () => k });
            var i = n(202784),
                r = n(325686),
                l = n(661810),
                a = n(952428),
                o = n(731708),
                s = n(392237),
                c = n(516951),
                d = n(500002),
                u = n(443781),
                m = n(71620),
                p = n(668214),
                f = n(172497),
                g = n(466036),
                b = n(390387),
                _ = n(919022);
            const y = (0, p.Z)()
                .propsFromState(() => ({ communitiesActions: b.yK, hasCommunityMemberships: f.fn, pendingFollowersInfo: g.sC, viewerUser: _.ZP.selectViewerUser, userFeatures: b.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: t, pendingFollowersInfo: n, userFeatures: i, viewerUser: r }) => {
                    const { acceptedIds: l, ids: a } = n;
                    return { communitiesActions: e, acceptedFollowerCount: l.length, hasCommunityMemberships: t, viewerUser: r, pendingFollowerCount: a.length - l.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: g.GE }))
                .withAnalytics();
            var h = n(906433),
                w = n(879526);
            const v = ({ acceptedFollowerCount: e, analytics: t, pendingFollowerCount: n, viewerUser: s, onClose: d = c.Z }) => {
                    const { featureSwitches: m, userClaims: p } = (0, u.QZ)(),
                        { coreItems: f, countrySpecificItems: g } = (0, w.O)({ analytics: t, featureSwitches: m, onClose: d, userClaims: p, viewerUser: s, acceptedFollowerCount: e, pendingFollowerCount: n });
                    return i.createElement(
                        i.Fragment,
                        null,
                        ((e) =>
                            e.map((e, t) => {
                                const { component: n = h.Z, ...r } = e,
                                    l = { ...r },
                                    a = i.createElement(n, l);
                                return i.createElement(i.Fragment, { key: t }, a);
                            }))(f),
                        ((b = g),
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(r.Z, { style: E.redesignDivider }, i.createElement(l.Z, { space: "space12", style: E.divider })),
                            b.map((e, t) => i.createElement(a.Z, { key: t, link: e.link, onClick: e.onClick, style: E.countrySpecificItem }, i.createElement(o.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var b;
                },
                k = (0, d.ZP)(y(i.memo(v))),
                E = s.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        879526: (e, t, n) => {
            n.d(t, { O: () => Ce });
            var i = n(202784),
                r = n(400752),
                l = n(537392),
                a = n(688715),
                o = n(868634),
                s = n(111677),
                c = n.n(s),
                d = n(1753),
                u = n(625271),
                m = n(883069),
                p = n(279849),
                f = n(197318),
                g = n(689582),
                b = n(256260),
                _ = n(511323),
                y = n(80361),
                h = n(856151),
                w = n(53674),
                v = n(792618),
                k = n(520913),
                E = n(297896),
                C = n(175564),
                Z = n(748138),
                x = n(698891),
                P = n(68290),
                T = n(707570),
                F = n(839),
                S = n(593875),
                I = n(829110),
                M = n(720930),
                A = n(516951),
                D = n(450681),
                L = n(400915),
                V = n(420182),
                N = n(997657),
                z = n(306114),
                O = n(279918),
                U = n(722517),
                B = n(880647),
                R = n(655352),
                j = n(125363),
                $ = n(466036),
                H = n(390387),
                K = n(76920),
                W = n(477403),
                G = n(104119),
                q = n(484633),
                Q = n(381904),
                X = n(206962);
            const Y = c().a15648a4,
                J = c().i3145aa0,
                ee = c().cdf89b84,
                te = c().i83d4f14,
                ne = c().aeede01a,
                ie = c().b0041756,
                re = c().ae1bbb26,
                le = c().d299431c,
                ae = c().fa98627a,
                oe = c().fd442790,
                se = c().da137d9a,
                ce = c().e0cb0c72,
                de = c().j087774e,
                ue = c().e2eef3c2,
                me = c().b55d8a78,
                pe = c().e5323e36,
                fe = c().h02a6fe6,
                ge = c().f75d1806,
                be = c().a5a30af0,
                _e = c().b007440a,
                ye = c().a5cbc19a,
                he = c().d13d697c,
                we = c().j0e2cfa8,
                ve = c().h5e38204,
                ke = c().h7d5d9fa,
                Ee = "rweb.navItemDecorations",
                Ce = ({ analytics: e, featureSwitches: t, onClose: n = A.Z, userClaims: s, viewerUser: c, acceptedFollowerCount: Ce, pendingFollowerCount: Ze }) => {
                    let xe = [],
                        Pe = [];
                    const Te = (0, U.Z)("PremiumNav"),
                        Fe = t.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Se = (0, r.Dv)(V.lZ),
                        [Ie, Me] = i.useState(!1),
                        [Ae, De] = i.useState(!1),
                        Le = t.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ve = t.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ne = (0, G.Md)(Ve);
                    i.useEffect(() => {
                        Ne &&
                            Se.get(Ee).then((e) => {
                                Me(!e?.analyticsClickedV2), De(!e?.[Ne?.key]);
                            });
                    }, [Se, Ne]);
                    const ze = (0, j.I0)();
                    i.useEffect(() => {
                        c?.protected && ze($.GE());
                    }, [ze, c]);
                    const Oe = (0, K.Zy)();
                    Oe.size > 0 && Oe.add("/settings");
                    const Ue = (0, j.v9)(H.Lz),
                        Be = ({ link: e }) => !(Ue && (("string" == typeof e && ((e.startsWith("/settings") && !Oe.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        je = (0, l.iv)().width,
                        $e = B.Z.isOneColumnLayout(je) || B.Z.isOneColumnSquishedLayout(je),
                        He = t.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ue,
                        Ke = t.isTrue("branded_like_preview_enabled"),
                        We = t.isTrue("subscriptions_sign_up_enabled"),
                        Ge = t.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        qe = t.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Qe = t.isTrue("rweb_xchat_enabled"),
                        Xe = s.isAnyPremiumSubscriber(),
                        Ye = s.isVerifiedOrg(),
                        Je = s.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        et = Xe,
                        tt = s.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, R.ZP)(),
                        { role: nt } = (0, L.l7)(),
                        { activeItem: it } = (0, Q.Y)(),
                        rt = t.isTrue("voice_rooms_web_space_creation") && nt !== q.Q.host && it?.type !== q.W.space,
                        lt = t.isTrue("rweb_go_live_enabled"),
                        at = t.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        ot = t.isTrue("payments_enabled"),
                        st = t.isTrue("recruiting_global_jobs_search_enabled"),
                        ct = (0, W.vC)(),
                        dt = t.isTrue("c9s_enabled") && !!c,
                        ut = (0, z.Z)(),
                        mt = i.useMemo(() => !(Xe || !ut) && t.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Xe, t, ut]),
                        pt = (t) => () => {
                            t && e.scribe({ section: "overflow_menu", element: t, action: "click", data: { message: "VDL redesign dash menu item" } }), n && n();
                        },
                        ft = { icon: d.default, label: be, link: "/compose/articles", onClick: pt("article_composer") },
                        gt = { label: se, link: (0, a.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: pt("german_transparency_item") },
                        bt = { label: ne, link: (0, a.ju)("https://legal.x.com/imprint.html"), onClick: pt("imprint_item") },
                        _t = { icon: u.default, label: Y, link: "/i/communitynotes", onClick: pt("birdwatch") },
                        yt = { icon: m.default, label: J, link: "/i/bookmarks", onClick: pt("bookmarks_overflow_item") },
                        ht = { icon: p.default, label: ee, link: "/i/branded_likes_preview", onClick: pt("branded_likes_preview_overflow_item") },
                        wt = (f.default, pt("labs_item"), { icon: g.default, label: ie, link: `/${Re}/lists`, onClick: pt("lists_overflow_item") }),
                        vt = { badgeCount: Ze, icon: b.default, label: te, link: "/follower_requests", onClick: pt("follower_requests_overflow_item") },
                        kt = { icon: _.default, label: ae, link: `/${Re}`, onClick: pt("profile_overflow_item") },
                        Et = { icon: y.default, label: "Money", link: "/i/money", onClick: pt("payments_overflow_item") },
                        Ct = { icon: h.default, label: de, link: "/i/coins", onClick: pt("twitter_coins") },
                        Zt = () => ({
                            icon: w.default,
                            label: ye,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Se.get(Ee).then((e) => {
                                    const t = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Se.set(Ee, t);
                                }),
                                pt("analytics")),
                            decoration: Ie ? i.createElement(o.ZP, { background: "blue500" }, he) : null,
                        }),
                        xt = () => {
                            const e = t.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: n } = e ? Te : {},
                                r = "UpsellButtonRenderProperties" === n?.render_properties.__typename && n.render_properties.action_label ? n.render_properties.action_label : ge,
                                l = "UpsellButtonRenderProperties" === Te?.upsellContent?.render_properties.__typename ? Te.upsellContent.render_properties.decoration_label : null;
                            return { icon: Fe ? v.default : k.default, label: r, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: pt("verified_overflow_item"), decoration: l ? i.createElement(o.ZP, { background: "blue500" }, l) : null };
                        },
                        Pt = { icon: Fe ? v.default : k.default, label: ge, link: "/i/premium", onClick: pt("premium_hub") },
                        Tt = { label: re, link: "/logout", icon: E.default, onClick: pt("logout_overflow_item"), testID: X.Z.logout },
                        Ft = { icon: C.default, label: ce, link: (0, a.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: pt("twitter_ads_item") },
                        St = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        It = { icon: Z.default, label: le, link: St ? "/i/monetization" : "/settings/monetization", onClick: pt("monetization") },
                        Mt = { icon: x.default, label: oe, link: "/settings", onClick: pt("settings_overflow_item"), testID: X.Z.settings },
                        At = () => ({
                            label: Le ? we : ue,
                            onClick: () => (
                                Le &&
                                    Ne &&
                                    Se.get(Ee).then((e) => {
                                        const t = { ...e, [Ne?.key]: !0 };
                                        Se.set(Ee, t);
                                    }),
                                pt("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: P.default,
                            decoration: Ae && Le && Ne ? i.createElement(o.ZP, { background: "blue500" }, Ne.label) : null,
                        }),
                        Dt = { label: ue, onClick: pt("verified_organization_dashboard_item"), link: "/i/verified", icon: P.default },
                        Lt = { label: me, onClick: pt("create_space_item"), link: "/i/spaces/start", icon: T.default },
                        Vt = { label: pe, onClick: pt("go_live_item"), link: "/i/go-live", icon: F.default },
                        Nt = c ? { label: fe, onClick: pt("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        zt = Qe && c ? { label: ve, onClick: pt("chat_item"), link: "/i/chat", icon: I.default, decoration: i.createElement(o.ZP, { background: "blue500" }, ke) } : void 0,
                        Ot = t.isTrue("spaces_conference_enabled") || !!ct,
                        Ut = { label: "Conferences", onClick: pt("conferences_item"), link: "/i/conferences", icon: F.default },
                        Bt = { label: _e, onClick: pt("jobs_item"), link: "/jobs", icon: M.default },
                        Rt = [gt, bt],
                        jt = We && !Xe,
                        $t = qe,
                        Ht = (0, D.Z)([zt, kt, et ? Pt : void 0, ot ? Et : void 0, jt ? xt() : void 0, dt ? Nt : void 0, Re ? wt : void 0, yt, tt ? ft : void 0, $t ? (Ye ? Dt : At()) : void 0, at ? Ct : void 0, He ? _t : void 0, Ze || Ce ? vt : void 0, mt ? Zt() : void 0, It, Ft, st ? Bt : void 0, Ot ? Ut : void 0, Mt, Tt]).filter(Be),
                        Kt = i.useContext(N.hC),
                        Wt = (0, D.Z)([zt, O.yw.Lists > Kt && Re ? wt : void 0, O.yw.Premium > Kt && et ? Pt : void 0, O.yw.PremiumSignup > Kt && jt ? xt() : void 0, O.yw.Bookmarks > Kt ? yt : void 0, O.yw.Payments > Kt && ot ? Et : void 0, O.yw.Communities > Kt && dt ? Nt : void 0, O.yw.Articles > Kt && Je ? ft : void 0, O.yw.CommunityNotes > Kt && He ? _t : void 0, O.yw.Analytics > Kt && mt ? Zt() : void 0, It, O.yw.VerifiedOrgDash > Kt && $t && Ye ? Dt : void 0, (((!Ye || s.isLegacyVerifiedOrg()) && O.yw.VerifiedOrgSignup > Kt) || (s.isVerifiedOrgAffiliate() && !s.isVerifiedOrg())) && t.isTrue("blue_business_vo_nav_for_legacy_verified") ? At() : void 0, at ? Ct : void 0, Ke ? ht : void 0, Ze || Ce ? vt : void 0, Ft, O.yw.Jobs > Kt && st ? Bt : void 0, void 0, rt ? Lt : void 0, lt ? Vt : void 0, Ot ? Ut : void 0, Mt]).filter(Be);
                    return (0, R.ZP)() ? ((xe = xe.concat(Wt)), Ge && $e && (Pe = Rt)) : ((xe = xe.concat(Ht)), Ge && (Pe = Rt)), { coreItems: xe, countrySpecificItems: Pe };
                };
        },
        206962: (e, t, n) => {
            n.d(t, { Z: () => i });
            const i = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        16222: (e, t, n) => {
            function i(e, t) {
                try {
                    return e();
                } catch (e) {
                    return t(e);
                }
            }
            n.d(t, { o: () => i });
        },
        64672: (e, t, n) => {
            n.r(t), n.d(t, { AccountScreen: () => _, default: () => h });
            var i = n(202784),
                r = n(325686),
                l = n(366635),
                a = n(392237),
                o = n(111677),
                s = n.n(o),
                c = n(449067),
                d = n(120735),
                u = n(652904),
                m = n(725516),
                p = n(668214),
                f = n(919022);
            const g = (0, p.Z)()
                    .propsFromState(() => ({ loggedInUser: f.ZP.selectLoggedInUser }))
                    .withAnalytics({ page: "me" }),
                b = s().i5f7b6b8;
            class _ extends i.Component {
                render() {
                    return i.createElement(u.Z, null, i.createElement(c.Z.Configure, { documentTitle: b, title: this._renderUserName() }, i.createElement(r.Z, { style: y.dashmenu }, i.createElement(d.Z, null))));
                }
                _renderUserName() {
                    const { loggedInUser: e } = this.props;
                    return e ? i.createElement(l.Z, { badgeContext: "account", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, translatorType: e.translator_type, withScreenName: !1 }) : null;
                }
            }
            const y = a.default.create((e) => ({ dashmenu: { marginBottom: e.componentDimensions.appBarHeight } })),
                h = (0, m.Z)(g(_));
        },
        477403: (e, t, n) => {
            n.d(t, { eY: () => m, si: () => _, vC: () => u });
            n(543673), n(240753), n(128399);
            var i = n(395337),
                r = n(202784),
                l = (n(585488), n(516951)),
                a = n(952793),
                o = n(16222),
                s = n(125363),
                c = n(919022),
                d = n(535338);
            function u(e) {
                return (0, s.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const t = (0, o.o)(() => new URL(e), l.Z);
                    if (!t || !p.includes(t.host)) return;
                    const n = t.pathname.slice(1).toLowerCase();
                    return f[n];
                })(c.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const p = ["twitter.com", "x.com"],
                f = { xai: "1661523610111193088" },
                g = Object.values(f),
                b = i.Z;
            function _() {
                const e = (0, d.p)(b, {}),
                    t = (0, a.hC)("spaces_conference_enabled");
                return r.useMemo(() => {
                    const n = e.affiliations?.affiliated_account_ids_results,
                        i = (
                            n?.flatMap(({ rest_id: e, result: t }) => {
                                if ("User" !== t?.__typename) return [];
                                return [{ name: t.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => g.includes(e));
                    return t && !i.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...i] : i;
                }, [e.affiliations?.affiliated_account_ids_results, t]);
            }
        },
        621399: (e, t, n) => {
            n.r(t), n.d(t, { TVProfile: () => ke, default: () => Ce });
            n(136728);
            var i = n(202784),
                r = n(396342),
                l = n(214997),
                a = n(325686),
                o = n(731708),
                s = n(98538),
                c = n(891198),
                d = n(366635),
                u = n(392237),
                m = n(111677),
                p = n.n(m),
                f = n(516951),
                g = n(187669),
                b = n(290402),
                _ = n(363047),
                y = n(902641),
                h = n(273413),
                w = n(602737),
                v = n(905346),
                k = n(269653),
                E = n(686010),
                C = n(291394),
                Z = n(650093),
                x = n(183822),
                P = n(575626),
                T = n(752475),
                F = n(334113),
                S = n(873930),
                I = n(125363),
                M = n(919022),
                A = n(312771),
                D = n(673932),
                L = n(87063),
                V = n(668214),
                N = n(903558),
                z = n(682461);
            const O = (e, t) => {
                    const { match: n } = t,
                        i = n.params.screenName,
                        r = e.tv?.profile?.[i?.toLowerCase() || ""];
                    return r;
                },
                U = (e) => e.tv?.player,
                B = (e, t) => {
                    const { match: n } = t,
                        i = n.params.screenName;
                    return e.tv?.profile?.[i?.toLowerCase() || ""]?.cursor;
                },
                R = (e) => e.tv?.profileFetchStatus === L.Z.LOADING,
                j = (0, V.Z)()
                    .propsFromState(() => ({ tvProfile: O, tvPlayer: U, cursor: B, isLoading: R }))
                    .propsFromActions(() => ({ playerOpen: N.eX.playerOpen, fetchUserProfileAndVideos: z.Sn }))
                    .withAnalytics({ page: "profile" });
            var $ = n(708411),
                H = n(154003),
                K = n(524483),
                W = n(467537),
                G = n(725516);
            const q = "tv-follow-button",
                Q = p().eb5f060c,
                X = p().d960b55c,
                Y = p().c0f56044,
                J = p().cfd2f35e,
                ee = p().ja66a2b5,
                te = p().e4c91b70,
                ne = ({ style: e, user: t }) => {
                    const { closeModal: n, openModal: r } = (0, K.N)(),
                        l = (0, I.I0)(),
                        a = (0, G.z)(),
                        o = i.useCallback(() => {
                            t?.following
                                ? (a.scribe({ element: "unfollow-button", action: "click", data: { profile_id: t.id_str } }),
                                  r({
                                      primaryText: ee({ screenName: t.screen_name }),
                                      secondaryText: te,
                                      primaryAction: {
                                          buttonText: Y,
                                          onClick: () => {
                                              l(z.fv({ userId: t.id_str, screenName: t?.screen_name })), n();
                                          },
                                      },
                                      secondaryAction: {
                                          buttonText: J,
                                          onClick: () => {
                                              n();
                                          },
                                      },
                                      handleEscape: () => {
                                          n();
                                      },
                                  }))
                                : (a.scribe({ element: "follow-button", action: "click", data: { profile_id: t.id_str } }), l(z.ZN({ userId: t.id_str, screenName: t?.screen_name })));
                        }, [a, n, l, r, t?.following, t.id_str, t.screen_name]);
                    return i.createElement(W.C, { "aria-label": t?.following ? Y : Q, focusedStyle: t?.following ? ie.interactiveViewUnfollowFocused : void 0, name: q, onPress: o, role: "button", style: [ie.interactiveView, e] }, ({ hasFocus: e }) => {
                        const n = t?.following ? (e ? Y : X) : Q;
                        return i.createElement(H.ZP, { "aria-label": n, size: "small", style: ie.button, type: t?.following ? (e ? "destructiveOutlined" : "primaryOutlined") : "primaryFilled" }, n);
                    });
                },
                ie = u.default.create((e) => ({ interactiveView: { borderRadius: e.borderRadii.infinite }, interactiveViewUnfollowFocused: { borderColor: e.colors.red500 }, button: { width: 128 * e.scaleMultiplier } }));
            var re = n(74514),
                le = n(405303);
            const ae = p().j87c21f4,
                oe = p().iebc30ca,
                se = ({ style: e, user: t }) => {
                    const n = (0, I.I0)(),
                        r = (0, G.z)(),
                        l = i.useCallback(() => {
                            r.scribe({ element: "notify-button", action: "click", data: { profile_id: t.id_str } }), n(z.BX({ userId: t.id_str, notificationsEnabled: !t.notifications, screenName: t?.screen_name }));
                        }, [r, n, t.id_str, t.notifications, t?.screen_name]);
                    return i.createElement(W.C, { "aria-label": t?.notifications ? oe : ae, name: "tv-notify-button", onPress: l, role: "button", style: [ce.interactiveView, e] }, i.createElement(H.ZP, { icon: t?.notifications ? i.createElement(re.default, null) : i.createElement(le.default, null), size: "small", type: "primaryOutlined" }));
                },
                ce = u.default.create((e) => ({ interactiveView: { borderRadius: e.borderRadii.infinite } })),
                de = "profile-grid",
                ue = "profile-content",
                me = p().g7ee7019,
                pe = p().fb83778c,
                fe = p().e5b0e544,
                ge = p().dd4bbaea,
                be = p().i71d6193,
                _e = p().adb512f0,
                ye = ({ history: e, user: t }) => {
                    const n = t ? me({ name: t?.screen_name }) : pe;
                    return i.createElement(
                        a.Z,
                        { style: Ee.loggedOutProfilePrompt },
                        i.createElement(o.ZP, { size: "headline2", style: Ee.marginBottom16 }, n),
                        i.createElement(
                            w.K,
                            {
                                autoFocus: !0,
                                name: "search-login-button",
                                onPress: () => {
                                    e.push(_.C2);
                                },
                            },
                            fe,
                        ),
                    );
                },
                he = ({ user: e }) => i.createElement(a.Z, { style: [Ee.profileStats, Ee.marginBottom6] }, i.createElement(a.Z, { style: [Ee.profileStatsItem, Ee.marginEnd8] }, i.createElement(p().I18NFormatMessage, { $i18n: "d2924acb" }, i.createElement(s.Z.Value, { style: Ee.marginEnd4 }, p().ec08efe4({ formattedCount: c.ZP.getTruncatedCount(e?.followers_count || 0) })), i.createElement(s.Z.Label, { style: Ee.marginEnd4 }, p().h9f711f0({ count: e?.followers_count || 0 })))), i.createElement(a.Z, { style: [Ee.profileStatsItem, Ee.marginEnd8] }, i.createElement(p().I18NFormatMessage, { $i18n: "a8f9642d" }, i.createElement(s.Z.Value, { style: Ee.marginEnd4 }, p().bef78294({ formattedCount: c.ZP.getTruncatedCount(e?.friends_count || 0) })), i.createElement(s.Z.Label, { style: Ee.marginEnd4 }, p().hda3bb87({ count: e?.friends_count || 0 }))))),
                we = (e) => `${P.sN}.${D.rQ}.${de}.carousel-${e}`,
                ve = (e) => `${P.sN}.${D.rQ}.${de}.${ue}.video-${e}`,
                ke = ({ cursor: e, fetchUserProfileAndVideos: t, history: n, isLoading: s, match: c, playerOpen: u, tvProfile: m }) => {
                    const p = c.params.screenName,
                        _ = m?.user,
                        w = m?.modules,
                        L = m?.videos,
                        V = (0, I.v9)(M.ZP.selectViewerUser),
                        N = V && _ && V.id_str === _.id_str,
                        z = (w?.length || 0) + 1,
                        O = i.useRef(null),
                        U = i.useRef(Array(z).fill(null));
                    (0, g.q)(() => {
                        ((p && !_) || !L) && t({ screenName: p });
                    });
                    const { clearVoiceHandlers: B, registerVoiceHandlers: R } = (0, y.B)();
                    i.useEffect(
                        () => (
                            R({ onupdatestate: () => h.E.List }),
                            function () {
                                B();
                            }
                        ),
                        [B, R],
                    );
                    const j = i.useCallback(() => {
                            p && !s && t({ screenName: p, cursor: e });
                        }, [p, s, t, e]),
                        H = (0, I.I0)(),
                        K = i.useCallback(
                            (e) => {
                                H(u(e)), n.push((0, D.X5)(e));
                            },
                            [H, n, u],
                        ),
                        W = ((e) => ("https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" === e ? $.jz : e ? e.replace($.KB, "_400x400.jpg") : $.jz))(_?.profile_image_url_https),
                        G = i.useCallback(() => !1, []),
                        Q = i.useMemo(
                            () =>
                                w?.map((e, t) => () => {
                                    O.current?.positionRef.current !== t && O.current?.setPosition(t);
                                }),
                            [w],
                        ),
                        X = i.useCallback(() => {
                            O.current?.positionRef.current !== z - 1 && O.current?.setPosition(z - 1);
                        }, [z]),
                        Y = i.useMemo(
                            () =>
                                w?.map((e, t) =>
                                    i.createElement(
                                        a.Z,
                                        {
                                            key: t,
                                            ref: (e) => {
                                                U.current[t] = e;
                                            },
                                        },
                                        i.createElement(v.Z, { content: e.content, displayType: (0, F.qU)(e.displayType), handleNoriginArrowPress: G, name: `carousel-${t.toString()}`, onFocus: Q?.[t], onSelectVideo: K, title: e.title }),
                                    ),
                                ),
                            [G, w, Q, K],
                        ),
                        J = i.useMemo(() => {
                            const e = w && w.length > 0;
                            if (L && L?.length > 0)
                                return i.createElement(
                                    a.Z,
                                    {
                                        ref: (e) => {
                                            U.current[z - 1] = e;
                                        },
                                    },
                                    i.createElement(Z.Z, { autoFocus: !e, content: L, handleNoriginArrowPress: G, name: ue, onFocus: X, onNearEnd: j, onSelectVideo: K, returnToFirstElementOnEscape: !0, style: Ee.content, title: e ? _e : void 0, width: 4 }),
                                );
                        }, [j, G, w, X, K, z, L]),
                        ee = i.useCallback((e) => {
                            O.current = e;
                        }, []),
                        te = i.useCallback(
                            (e) => {
                                if (O.current?.isAnimating.current) return !0;
                                const t = O.current?.positionRef.current || 0;
                                let n = 0;
                                switch (e.key) {
                                    case "ArrowUp":
                                        if (0 === t) return (0, r.setFocus)(`${P.sN}.${D.rQ}.${q}`), !0;
                                        (n = Math.max(t - 1, 0)), (0, r.setFocus)(we(n));
                                        break;
                                    case "ArrowDown":
                                        if (((n = Math.min(t + 1, z)), n === z)) return !1;
                                        if (n === z - 1) return (0, r.setFocus)(ve(0)), !0;
                                        break;
                                    case "ArrowLeft":
                                        (0, r.setFocus)(`${P.sN}.${P.TZ}`);
                                }
                                return !0;
                            },
                            [z],
                        ),
                        ie = (0, S.Z)(),
                        re = i.useMemo(() => (ie ? i.createElement(a.Z, null, Y, J) : i.createElement(C.k, { getGPUScrollerApi: ee, renderedItemRefs: U, scrollX: !1, scrollY: !0 }, Y, J)), [ee, Y, J, ie]),
                        le = (0, r.getCurrentFocusKey)(),
                        ae = i.useCallback((e) => (w?.length ? le !== we(0) && ((0, r.setFocus)(we(0)), !0) : !!L?.length && le !== ve(0) && ((0, r.setFocus)(ve(0)), !0)), [le, w?.length, L?.length]),
                        oe = i.useMemo(() => (L?.length || w?.length ? i.createElement(E.Z, { "aria-label": void 0, autoFocus: !0, name: de, onArrowPress: te, onEscapeOrBack: ae, role: "grid", saveLastFocusedChild: !0, trackChildren: !0 }, re) : i.createElement(a.Z, { style: Ee.noVideosContainer }, i.createElement(o.ZP, { size: "headline1", weight: "bold" }, N ? ge : be({ name: `@${_?.screen_name || ""}` })))), [te, ae, N, w?.length, re, _?.screen_name, L?.length]),
                        ce = i.useCallback(() => (V ? oe : i.createElement(ye, { history: n, user: _ })), [n, oe, _, V]),
                        me = i.useMemo(() => i.createElement(b.Z, { fetchStatus: _ && L ? A.ZP.LOADED : A.ZP.LOADING, onRequestRetry: f.Z, render: ce, retryable: !1 }), [ce, _, L]);
                    return i.createElement(i.Fragment, null, i.createElement(x.Z, null, i.createElement(a.Z, { style: Ee.header }, _ ? i.createElement(a.Z, { style: Ee.profileInfo }, i.createElement(T.Z, { source: W, style: [Ee.userAvatar, Ee.marginEnd16], verifiedType: _.verified_type, withOuterBorder: !0 }), i.createElement(a.Z, { style: [Ee.profileDetails, N && Ee.ownProfileDetails, Ee.marginEnd16] }, i.createElement(d.Z, { affiliateBadgeInfo: _.highlightedLabel, badgeContext: "content", isBlueVerified: _.is_blue_verified, isProtected: _.protected, isVerified: _.verified, name: _.name, nameSize: "headline1", screenName: _.screen_name, screenNameSize: "body", style: Ee.marginBottom6, verifiedType: _.verified_type, withLink: !1, withNameWrap: !0 }), _.description ? i.createElement(o.ZP, { style: [Ee.profileDescription, Ee.marginBottom6] }, i.createElement(k.x, { text: _.description })) : null, i.createElement(he, { user: _ }), V && !N ? i.createElement(a.Z, { style: [Ee.buttonSection, Ee.marginBottom6] }, i.createElement(ne, { style: Ee.marginEnd8, user: _ }), i.createElement(se, { style: Ee.marginEnd8, user: _ })) : null)) : null), ie ? i.createElement(l.Z, null, me) : i.createElement(a.Z, { style: ie ? void 0 : Ee.overflowHidden }, me)));
                },
                Ee = u.default.create((e) => ({ header: { minHeight: 128 * e.scaleMultiplier, paddingHorizontal: e.spaces.space24, paddingTop: 60 * e.scaleMultiplier, paddingBottom: e.spaces.space32 }, userAvatar: { minHeight: 128 * e.scaleMultiplier, width: 128 * e.scaleMultiplier }, overflowHidden: { overflow: "hidden" }, marginBottom6: { marginBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, marginEnd4: { marginEnd: e.spaces.space4 }, marginEnd8: { marginEnd: e.spaces.space8 }, marginEnd16: { marginEnd: e.spaces.space16 }, marginBottom16: { marginBottom: e.spaces.space16 }, profileInfo: { flexDirection: "row" }, profileDetails: { justifyContent: "end" }, ownProfileDetails: { justifyContent: "center" }, profileDescription: { marginBottom: e.spaces.space4 }, profileStats: { marginBottom: e.spaces.space4, flexDirection: "row" }, profileStatsItem: { flexDirection: "row" }, buttonSection: { bottom: -e.borderWidthsPx.medium, flexDirection: "row", marginTop: e.spaces.space2, start: -e.borderWidthsPx.medium }, contentWrapper: { flex: 1 }, content: { paddingHorizontal: e.spaces.space24 }, loggedOutProfilePrompt: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: e.spaces.space64 }, noVideosContainer: { width: "100%", height: "100%", display: "flex", alignItems: "center", paddingTop: e.spaces.space64 } })),
                Ce = j(ke);
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(202784),
                r = n(325686),
                l = n(392237);
            function a({ spacing: e, style: t }) {
                return i.createElement(r.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var i = n(202784),
                r = n(325686),
                l = n(827515),
                a = n(461756),
                o = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const i = (0, l.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: i };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                f = s.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [g, b] = i.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        _ = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (_.current = !0),
                                function () {
                                    _.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (_.current)
                                if (a.Z.reducedMotionEnabled) b((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, l.Z)(e.count) && g.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, b));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            _.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              _.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, b));
                        }, [g.animating, g.oldText]),
                        i.useMemo(() => {
                            const e = m[g.transitionDirection],
                                t = g.oldText && !a.Z.reducedMotionEnabled,
                                l = !g.animating && g.oldText && !a.Z.reducedMotionEnabled,
                                s = { ...p, ...(g.animating ? e.post : e.active) },
                                c = { ...(l ? e.pre : e.active) };
                            return i.createElement(
                                r.Z,
                                { style: [f.root, n] },
                                t ? i.createElement("span", { style: s }, i.createElement(o.ZP, d, g.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(_.current, b),
                                        style: c,
                                    },
                                    i.createElement(o.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, _, b])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(202784),
                r = n(325686),
                l = n(731708),
                a = n(891198),
                o = n(280278),
                s = n(392237);
            const c = "subtext1",
                d = i.createContext({ onMedia: !1 });
            class u extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: r } = this.props;
                    return i.createElement(l.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: r }, i.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                i.createElement(
                    r.Z,
                    { style: [m.row, e.style] },
                    i.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => i.createElement(r.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => i.createElement(d.Consumer, null, ({ onMedia: n }) => i.createElement(l.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: r, weight: a = "bold" }) => i.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? i.createElement(o.ZP, { children: t, count: n, size: c, style: r, weight: a }) : i.createElement(l.ZP, { children: t, color: s ? "white" : "text", size: c, style: r, weight: a }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
        893164: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(202784),
                r = n(325686),
                l = n(111677),
                a = n.n(l),
                o = n(355830),
                s = n(731708),
                c = n(154003),
                d = n(992942),
                u = n(392237);
            const m = a().a9edea48;
            function p(e) {
                const { displayBackgroundImage: t = !1, errorMessage: n, iconPlayError: l, imageSrc: a, onReloadPress: p } = e;
                return i.createElement(r.Z, { style: [u.default.absoluteFill, t ? null : f.blankOverlay] }, t ? i.createElement(i.Fragment, null, i.createElement(r.Z, { style: f.backgroundImage }, a && i.createElement(d.Z, { resizeMode: "cover", source: a, style: u.default.absoluteFill })), i.createElement(r.Z, { style: f.overlay })) : null, i.createElement(r.Z, { style: f.errorContainer }, i.createElement(r.Z, null, l ? i.createElement(o.default, { style: f.playErrorIcon }) : null), i.createElement(r.Z, { focusable: !0 }, i.createElement(s.ZP, { style: t ? f.errorMsgTextWhite : f.errorMsgTextGray }, n)), p ? i.createElement(c.ZP, { onPress: p, style: f.buttonContainer, type: "brandFilled" }, m) : null));
            }
            const f = u.default.create((e) => ({ backgroundImage: { ...u.default.absoluteFillObject, filter: "blur(5px)" }, overlay: { ...u.default.absoluteFillObject, backgroundColor: e.colors.translucentBlack77 }, blankOverlay: { backgroundColor: e.colors.gray0 }, buttonContainer: { justifyContent: "center", alignSelf: "center" }, errorContainer: { justifyContent: "center", height: "100%", marginHorizontal: e.spaces.space32 }, errorMsgTextWhite: { color: e.colors.white, textAlign: "center", marginBottom: e.spaces.space20 }, errorMsgTextGray: { color: e.colors.gray700, textAlign: "center", marginBottom: e.spaces.space20 }, playErrorIcon: { fill: e.colors.gray700, height: e.spaces.space48, width: e.spaces.space48, marginHorizontal: "auto", paddingBottom: e.spaces.space20, verticalAlign: "middle" } }));
        },
        256260: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                r = n(890601),
                l = n(783427),
                a = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M10 10c2.209 0 4-1.79 4-4s-1.791-4-4-4-4 1.79-4 4 1.791 4 4 4zm0-6c1.105 0 2 .9 2 2s-.895 2-2 2-2-.9-2-2 .895-2 2-2zm5.863 9.44C14.373 11.85 12.352 11 10 11s-4.373.85-5.863 2.44c-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46zM5.596 14.81C6.682 13.65 8.162 13 10 13s3.318.65 4.404 1.81c.921.978 1.602 2.388 1.939 4.19H3.657c.337-1.802 1.018-3.212 1.939-4.19zM24 10h-4.583l1.79 1.79-1.414 1.42-3.5-3.5-.707-.71.707-.71 3.5-3.5 1.414 1.42L19.417 8H24v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Account.93016bea.js.map
