"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Account", "icons/IconDraw-js", "icons/IconHeartBurst-js", "shared~loader.DashMenu~loader.DashModal"],
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
        949626: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            var i = n(950822);
            const r = (e) => (0, i.Z)("div", e);
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
                g = ({ badgeCount: e, decoration: t, icon: n, iconColor: s, label: c, link: d, onClick: g, pip: b, rightControl: h, testID: y }) =>
                    i.createElement(
                        r.Z,
                        { style: _.dashMenuItem },
                        i.createElement(
                            l.Z,
                            { link: d, onClick: g, style: _.link, testID: y },
                            i.createElement(
                                r.Z,
                                { style: _.item },
                                n
                                    ? i.createElement(n, {
                                          style: (() => {
                                              const e = [_.icon, _.iconWithDashRedesign];
                                              return s && e.push({ color: s }), e;
                                          })(),
                                          testID: u.Z.icon,
                                      })
                                    : null,
                                i.createElement(a.ZP, { numberOfLines: 1, size: "headline1", style: _.itemLabel, weight: "bold" }, c),
                                e || b ? i.createElement(r.Z, { style: _.itemAccessory }, i.createElement(o.Z, { count: e, pip: b, standalone: !0, truncatedCountFormatter: f, unreadCountLabel: b ? m : p })) : null,
                                t ? i.createElement(r.Z, { style: _.leftMargin }, t) : null,
                            ),
                        ),
                        h,
                    ),
                _ = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
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
                _ = n(390387),
                b = n(919022);
            const h = (0, p.Z)()
                .propsFromState(() => ({ communitiesActions: _.yK, hasCommunityMemberships: f.fn, pendingFollowersInfo: g.sC, viewerUser: b.ZP.selectViewerUser, userFeatures: _.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: t, pendingFollowersInfo: n, userFeatures: i, viewerUser: r }) => {
                    const { acceptedIds: l, ids: a } = n;
                    return { communitiesActions: e, acceptedFollowerCount: l.length, hasCommunityMemberships: t, viewerUser: r, pendingFollowerCount: a.length - l.length };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DASH_MENU_CONTAINER"), fetchPendingFollowersIfNeeded: g.GE }))
                .withAnalytics();
            var y = n(906433),
                v = n(879526);
            const w = ({ acceptedFollowerCount: e, analytics: t, pendingFollowerCount: n, viewerUser: s, onClose: d = c.Z }) => {
                    const { featureSwitches: m, userClaims: p } = (0, u.QZ)(),
                        { coreItems: f, countrySpecificItems: g } = (0, v.O)({ analytics: t, featureSwitches: m, onClose: d, userClaims: p, viewerUser: s, acceptedFollowerCount: e, pendingFollowerCount: n });
                    return i.createElement(
                        i.Fragment,
                        null,
                        ((e) =>
                            e.map((e, t) => {
                                const { component: n = y.Z, ...r } = e,
                                    l = { ...r },
                                    a = i.createElement(n, l);
                                return i.createElement(i.Fragment, { key: t }, a);
                            }))(f),
                        ((_ = g),
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(r.Z, { style: E.redesignDivider }, i.createElement(l.Z, { space: "space12", style: E.divider })),
                            _.map((e, t) => i.createElement(a.Z, { key: t, link: e.link, onClick: e.onClick, style: E.countrySpecificItem }, i.createElement(o.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var _;
                },
                k = (0, d.ZP)(h(i.memo(w))),
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
                _ = n(256260),
                b = n(511323),
                h = n(80361),
                y = n(856151),
                v = n(53674),
                w = n(792618),
                k = n(520913),
                E = n(297896),
                C = n(175564),
                Z = n(748138),
                x = n(698891),
                T = n(68290),
                P = n(707570),
                F = n(839),
                S = n(593875),
                I = n(829110),
                M = n(720930),
                D = n(516951),
                A = n(450681),
                L = n(400915),
                V = n(420182),
                z = n(997657),
                N = n(306114),
                U = n(279918),
                O = n(722517),
                B = n(880647),
                R = n(655352),
                $ = n(125363),
                j = n(466036),
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
                _e = c().a5a30af0,
                be = c().b007440a,
                he = c().a5cbc19a,
                ye = c().d13d697c,
                ve = c().j0e2cfa8,
                we = c().h5e38204,
                ke = c().h7d5d9fa,
                Ee = "rweb.navItemDecorations",
                Ce = ({ analytics: e, featureSwitches: t, onClose: n = D.Z, userClaims: s, viewerUser: c, acceptedFollowerCount: Ce, pendingFollowerCount: Ze }) => {
                    let xe = [],
                        Te = [];
                    const Pe = (0, O.Z)("PremiumNav"),
                        Fe = t.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Se = (0, r.Dv)(V.lZ),
                        [Ie, Me] = i.useState(!1),
                        [De, Ae] = i.useState(!1),
                        Le = t.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ve = t.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        ze = (0, G.Md)(Ve);
                    i.useEffect(() => {
                        ze &&
                            Se.get(Ee).then((e) => {
                                Me(!e?.analyticsClickedV2), Ae(!e?.[ze?.key]);
                            });
                    }, [Se, ze]);
                    const Ne = (0, $.I0)();
                    i.useEffect(() => {
                        c?.protected && Ne(j.GE());
                    }, [Ne, c]);
                    const Ue = (0, K.Zy)();
                    Ue.size > 0 && Ue.add("/settings");
                    const Oe = (0, $.v9)(H.Lz),
                        Be = ({ link: e }) => !(Oe && (("string" == typeof e && ((e.startsWith("/settings") && !Ue.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        $e = (0, l.iv)().width,
                        je = B.Z.isOneColumnLayout($e) || B.Z.isOneColumnSquishedLayout($e),
                        He = t.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Oe,
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
                        ut = (0, N.Z)(),
                        mt = i.useMemo(() => !(Xe || !ut) && t.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Xe, t, ut]),
                        pt = (t) => () => {
                            t && e.scribe({ section: "overflow_menu", element: t, action: "click", data: { message: "VDL redesign dash menu item" } }), n && n();
                        },
                        ft = { icon: d.default, label: _e, link: "/compose/articles", onClick: pt("article_composer") },
                        gt = { label: se, link: (0, a.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: pt("german_transparency_item") },
                        _t = { label: ne, link: (0, a.ju)("https://legal.x.com/imprint.html"), onClick: pt("imprint_item") },
                        bt = { icon: u.default, label: Y, link: "/i/communitynotes", onClick: pt("birdwatch") },
                        ht = { icon: m.default, label: J, link: "/i/bookmarks", onClick: pt("bookmarks_overflow_item") },
                        yt = { icon: p.default, label: ee, link: "/i/branded_likes_preview", onClick: pt("branded_likes_preview_overflow_item") },
                        vt = (f.default, pt("labs_item"), { icon: g.default, label: ie, link: `/${Re}/lists`, onClick: pt("lists_overflow_item") }),
                        wt = { badgeCount: Ze, icon: _.default, label: te, link: "/follower_requests", onClick: pt("follower_requests_overflow_item") },
                        kt = { icon: b.default, label: ae, link: `/${Re}`, onClick: pt("profile_overflow_item") },
                        Et = { icon: h.default, label: "Money", link: "/i/money", onClick: pt("payments_overflow_item") },
                        Ct = { icon: y.default, label: de, link: "/i/coins", onClick: pt("twitter_coins") },
                        Zt = () => ({
                            icon: v.default,
                            label: he,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Se.get(Ee).then((e) => {
                                    const t = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Se.set(Ee, t);
                                }),
                                pt("analytics")),
                            decoration: Ie ? i.createElement(o.ZP, { background: "blue500" }, ye) : null,
                        }),
                        xt = () => {
                            const e = t.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: n } = e ? Pe : {},
                                r = "UpsellButtonRenderProperties" === n?.render_properties.__typename && n.render_properties.action_label ? n.render_properties.action_label : ge,
                                l = "UpsellButtonRenderProperties" === Pe?.upsellContent?.render_properties.__typename ? Pe.upsellContent.render_properties.decoration_label : null;
                            return { icon: Fe ? w.default : k.default, label: r, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: pt("verified_overflow_item"), decoration: l ? i.createElement(o.ZP, { background: "blue500" }, l) : null };
                        },
                        Tt = { icon: Fe ? w.default : k.default, label: ge, link: "/i/premium", onClick: pt("premium_hub") },
                        Pt = { label: re, link: "/logout", icon: E.default, onClick: pt("logout_overflow_item"), testID: X.Z.logout },
                        Ft = { icon: C.default, label: ce, link: (0, a.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: pt("twitter_ads_item") },
                        St = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        It = { icon: Z.default, label: le, link: St ? "/i/monetization" : "/settings/monetization", onClick: pt("monetization") },
                        Mt = { icon: x.default, label: oe, link: "/settings", onClick: pt("settings_overflow_item"), testID: X.Z.settings },
                        Dt = () => ({
                            label: Le ? ve : ue,
                            onClick: () => (
                                Le &&
                                    ze &&
                                    Se.get(Ee).then((e) => {
                                        const t = { ...e, [ze?.key]: !0 };
                                        Se.set(Ee, t);
                                    }),
                                pt("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: T.default,
                            decoration: De && Le && ze ? i.createElement(o.ZP, { background: "blue500" }, ze.label) : null,
                        }),
                        At = { label: ue, onClick: pt("verified_organization_dashboard_item"), link: "/i/verified", icon: T.default },
                        Lt = { label: me, onClick: pt("create_space_item"), link: "/i/spaces/start", icon: P.default },
                        Vt = { label: pe, onClick: pt("go_live_item"), link: "/i/go-live", icon: F.default },
                        zt = c ? { label: fe, onClick: pt("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        Nt = Qe && c ? { label: we, onClick: pt("chat_item"), link: "/i/chat", icon: I.default, decoration: i.createElement(o.ZP, { background: "blue500" }, ke) } : void 0,
                        Ut = t.isTrue("spaces_conference_enabled") || !!ct,
                        Ot = { label: "Conferences", onClick: pt("conferences_item"), link: "/i/conferences", icon: F.default },
                        Bt = { label: be, onClick: pt("jobs_item"), link: "/jobs", icon: M.default },
                        Rt = [gt, _t],
                        $t = We && !Xe,
                        jt = qe,
                        Ht = (0, A.Z)([Nt, kt, et ? Tt : void 0, ot ? Et : void 0, $t ? xt() : void 0, dt ? zt : void 0, Re ? vt : void 0, ht, tt ? ft : void 0, jt ? (Ye ? At : Dt()) : void 0, at ? Ct : void 0, He ? bt : void 0, Ze || Ce ? wt : void 0, mt ? Zt() : void 0, It, Ft, st ? Bt : void 0, Ut ? Ot : void 0, Mt, Pt]).filter(Be),
                        Kt = i.useContext(z.hC),
                        Wt = (0, A.Z)([Nt, U.yw.Lists > Kt && Re ? vt : void 0, U.yw.Premium > Kt && et ? Tt : void 0, U.yw.PremiumSignup > Kt && $t ? xt() : void 0, U.yw.Bookmarks > Kt ? ht : void 0, U.yw.Payments > Kt && ot ? Et : void 0, U.yw.Communities > Kt && dt ? zt : void 0, U.yw.Articles > Kt && Je ? ft : void 0, U.yw.CommunityNotes > Kt && He ? bt : void 0, U.yw.Analytics > Kt && mt ? Zt() : void 0, It, U.yw.VerifiedOrgDash > Kt && jt && Ye ? At : void 0, (((!Ye || s.isLegacyVerifiedOrg()) && U.yw.VerifiedOrgSignup > Kt) || (s.isVerifiedOrgAffiliate() && !s.isVerifiedOrg())) && t.isTrue("blue_business_vo_nav_for_legacy_verified") ? Dt() : void 0, at ? Ct : void 0, Ke ? yt : void 0, Ze || Ce ? wt : void 0, Ft, U.yw.Jobs > Kt && st ? Bt : void 0, void 0, rt ? Lt : void 0, lt ? Vt : void 0, Ut ? Ot : void 0, Mt]).filter(Be);
                    return (0, R.ZP)() ? ((xe = xe.concat(Wt)), Ge && je && (Te = Rt)) : ((xe = xe.concat(Ht)), Ge && (Te = Rt)), { coreItems: xe, countrySpecificItems: Te };
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
            n.r(t), n.d(t, { AccountScreen: () => b, default: () => y });
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
                _ = s().i5f7b6b8;
            class b extends i.Component {
                render() {
                    return i.createElement(u.Z, null, i.createElement(c.Z.Configure, { documentTitle: _, title: this._renderUserName() }, i.createElement(r.Z, { style: h.dashmenu }, i.createElement(d.Z, null))));
                }
                _renderUserName() {
                    const { loggedInUser: e } = this.props;
                    return e ? i.createElement(l.Z, { badgeContext: "account", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, translatorType: e.translator_type, withScreenName: !1 }) : null;
                }
            }
            const h = a.default.create((e) => ({ dashmenu: { marginBottom: e.componentDimensions.appBarHeight } })),
                y = (0, m.Z)(g(b));
        },
        477403: (e, t, n) => {
            n.d(t, { eY: () => m, si: () => b, vC: () => u });
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
                _ = i.Z;
            function b() {
                const e = (0, d.p)(_, {}),
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
                _ = n(290402),
                b = n(363047),
                h = n(902641),
                y = n(273413),
                v = n(602737),
                w = n(905346),
                k = n(269653),
                E = n(686010),
                C = n(291394),
                Z = n(650093),
                x = n(183822),
                T = n(575626),
                P = n(752475),
                F = n(334113),
                S = n(873930),
                I = n(125363),
                M = n(919022),
                D = n(312771),
                A = n(673932),
                L = n(87063),
                V = n(668214),
                z = n(903558),
                N = n(682461);
            const U = (e, t) => {
                    const { match: n } = t,
                        i = n.params.screenName,
                        r = e.tv?.profile?.[i?.toLowerCase() || ""];
                    return r;
                },
                O = (e) => e.tv?.player,
                B = (e, t) => {
                    const { match: n } = t,
                        i = n.params.screenName;
                    return e.tv?.profile?.[i?.toLowerCase() || ""]?.cursor;
                },
                R = (e) => e.tv?.profileFetchStatus === L.Z.LOADING,
                $ = (0, V.Z)()
                    .propsFromState(() => ({ tvProfile: U, tvPlayer: O, cursor: B, isLoading: R }))
                    .propsFromActions(() => ({ playerOpen: z.eX.playerOpen, fetchUserProfileAndVideos: N.Sn }))
                    .withAnalytics({ page: "profile" });
            var j = n(708411),
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
                                              l(N.fv({ userId: t.id_str, screenName: t?.screen_name })), n();
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
                                : (a.scribe({ element: "follow-button", action: "click", data: { profile_id: t.id_str } }), l(N.ZN({ userId: t.id_str, screenName: t?.screen_name })));
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
                            r.scribe({ element: "notify-button", action: "click", data: { profile_id: t.id_str } }), n(N.BX({ userId: t.id_str, notificationsEnabled: !t.notifications, screenName: t?.screen_name }));
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
                _e = p().i71d6193,
                be = p().adb512f0,
                he = ({ history: e, user: t }) => {
                    const n = t ? me({ name: t?.screen_name }) : pe;
                    return i.createElement(
                        a.Z,
                        { style: Ee.loggedOutProfilePrompt },
                        i.createElement(o.ZP, { size: "headline2", style: Ee.marginBottom16 }, n),
                        i.createElement(
                            v.K,
                            {
                                autoFocus: !0,
                                name: "search-login-button",
                                onPress: () => {
                                    e.push(b.C2);
                                },
                            },
                            fe,
                        ),
                    );
                },
                ye = ({ user: e }) => i.createElement(a.Z, { style: [Ee.profileStats, Ee.marginBottom6] }, i.createElement(a.Z, { style: [Ee.profileStatsItem, Ee.marginEnd8] }, i.createElement(p().I18NFormatMessage, { $i18n: "d2924acb" }, i.createElement(s.Z.Value, { style: Ee.marginEnd4 }, p().ec08efe4({ formattedCount: c.ZP.getTruncatedCount(e?.followers_count || 0) })), i.createElement(s.Z.Label, { style: Ee.marginEnd4 }, p().h9f711f0({ count: e?.followers_count || 0 })))), i.createElement(a.Z, { style: [Ee.profileStatsItem, Ee.marginEnd8] }, i.createElement(p().I18NFormatMessage, { $i18n: "a8f9642d" }, i.createElement(s.Z.Value, { style: Ee.marginEnd4 }, p().bef78294({ formattedCount: c.ZP.getTruncatedCount(e?.friends_count || 0) })), i.createElement(s.Z.Label, { style: Ee.marginEnd4 }, p().hda3bb87({ count: e?.friends_count || 0 }))))),
                ve = (e) => `${T.sN}.${A.rQ}.${de}.carousel-${e}`,
                we = (e) => `${T.sN}.${A.rQ}.${de}.${ue}.video-${e}`,
                ke = ({ cursor: e, fetchUserProfileAndVideos: t, history: n, isLoading: s, match: c, playerOpen: u, tvProfile: m }) => {
                    const p = c.params.screenName,
                        b = m?.user,
                        v = m?.modules,
                        L = m?.videos,
                        V = (0, I.v9)(M.ZP.selectViewerUser),
                        z = V && b && V.id_str === b.id_str,
                        N = (v?.length || 0) + 1,
                        U = i.useRef(null),
                        O = i.useRef(Array(N).fill(null));
                    (0, g.q)(() => {
                        ((p && !b) || !L) && t({ screenName: p });
                    });
                    const { clearVoiceHandlers: B, registerVoiceHandlers: R } = (0, h.B)();
                    i.useEffect(
                        () => (
                            R({ onupdatestate: () => y.E.List }),
                            function () {
                                B();
                            }
                        ),
                        [B, R],
                    );
                    const $ = i.useCallback(() => {
                            p && !s && t({ screenName: p, cursor: e });
                        }, [p, s, t, e]),
                        H = (0, I.I0)(),
                        K = i.useCallback(
                            (e) => {
                                H(u(e)), n.push((0, A.X5)(e));
                            },
                            [H, n, u],
                        ),
                        W = ((e) => ("https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" === e ? j.jz : e ? e.replace(j.KB, "_400x400.jpg") : j.jz))(b?.profile_image_url_https),
                        G = i.useCallback(() => !1, []),
                        Q = i.useMemo(
                            () =>
                                v?.map((e, t) => () => {
                                    U.current?.positionRef.current !== t && U.current?.setPosition(t);
                                }),
                            [v],
                        ),
                        X = i.useCallback(() => {
                            U.current?.positionRef.current !== N - 1 && U.current?.setPosition(N - 1);
                        }, [N]),
                        Y = i.useMemo(
                            () =>
                                v?.map((e, t) =>
                                    i.createElement(
                                        a.Z,
                                        {
                                            key: t,
                                            ref: (e) => {
                                                O.current[t] = e;
                                            },
                                        },
                                        i.createElement(w.Z, { content: e.content, displayType: (0, F.qU)(e.displayType), handleNoriginArrowPress: G, name: `carousel-${t.toString()}`, onFocus: Q?.[t], onSelectVideo: K, title: e.title }),
                                    ),
                                ),
                            [G, v, Q, K],
                        ),
                        J = i.useMemo(() => {
                            const e = v && v.length > 0;
                            if (L && L?.length > 0)
                                return i.createElement(
                                    a.Z,
                                    {
                                        ref: (e) => {
                                            O.current[N - 1] = e;
                                        },
                                    },
                                    i.createElement(Z.Z, { autoFocus: !e, content: L, handleNoriginArrowPress: G, name: ue, onFocus: X, onNearEnd: $, onSelectVideo: K, returnToFirstElementOnEscape: !0, style: Ee.content, title: e ? be : void 0, width: 4 }),
                                );
                        }, [$, G, v, X, K, N, L]),
                        ee = i.useCallback((e) => {
                            U.current = e;
                        }, []),
                        te = i.useCallback(
                            (e) => {
                                if (U.current?.isAnimating.current) return !0;
                                const t = U.current?.positionRef.current || 0;
                                let n = 0;
                                switch (e.key) {
                                    case "ArrowUp":
                                        if (0 === t) return (0, r.setFocus)(`${T.sN}.${A.rQ}.${q}`), !0;
                                        (n = Math.max(t - 1, 0)), (0, r.setFocus)(ve(n));
                                        break;
                                    case "ArrowDown":
                                        if (((n = Math.min(t + 1, N)), n === N)) return !1;
                                        if (n === N - 1) return (0, r.setFocus)(we(0)), !0;
                                        break;
                                    case "ArrowLeft":
                                        (0, r.setFocus)(`${T.sN}.${T.TZ}`);
                                }
                                return !0;
                            },
                            [N],
                        ),
                        ie = (0, S.Z)(),
                        re = i.useMemo(() => (ie ? i.createElement(a.Z, null, Y, J) : i.createElement(C.k, { getGPUScrollerApi: ee, renderedItemRefs: O, scrollX: !1, scrollY: !0 }, Y, J)), [ee, Y, J, ie]),
                        le = (0, r.getCurrentFocusKey)(),
                        ae = i.useCallback((e) => (v?.length ? le !== ve(0) && ((0, r.setFocus)(ve(0)), !0) : !!L?.length && le !== we(0) && ((0, r.setFocus)(we(0)), !0)), [le, v?.length, L?.length]),
                        oe = i.useMemo(() => (L?.length || v?.length ? i.createElement(E.Z, { "aria-label": void 0, autoFocus: !0, name: de, onArrowPress: te, onEscapeOrBack: ae, role: "grid", saveLastFocusedChild: !0, trackChildren: !0 }, re) : i.createElement(a.Z, { style: Ee.noVideosContainer }, i.createElement(o.ZP, { size: "headline1", weight: "bold" }, z ? ge : _e({ name: `@${b?.screen_name || ""}` })))), [te, ae, z, v?.length, re, b?.screen_name, L?.length]),
                        ce = i.useCallback(() => (V ? oe : i.createElement(he, { history: n, user: b })), [n, oe, b, V]),
                        me = i.useMemo(() => i.createElement(_.Z, { fetchStatus: b && L ? D.ZP.LOADED : D.ZP.LOADING, onRequestRetry: f.Z, render: ce, retryable: !1 }), [ce, b, L]);
                    return i.createElement(i.Fragment, null, i.createElement(x.Z, null, i.createElement(a.Z, { style: Ee.header }, b ? i.createElement(a.Z, { style: Ee.profileInfo }, i.createElement(P.Z, { source: W, style: [Ee.userAvatar, Ee.marginEnd16], verifiedType: b.verified_type, withOuterBorder: !0 }), i.createElement(a.Z, { style: [Ee.profileDetails, z && Ee.ownProfileDetails, Ee.marginEnd16] }, i.createElement(d.Z, { affiliateBadgeInfo: b.highlightedLabel, badgeContext: "content", isBlueVerified: b.is_blue_verified, isProtected: b.protected, isVerified: b.verified, name: b.name, nameSize: "headline1", screenName: b.screen_name, screenNameSize: "body", style: Ee.marginBottom6, verifiedType: b.verified_type, withLink: !1, withNameWrap: !0 }), b.description ? i.createElement(o.ZP, { style: [Ee.profileDescription, Ee.marginBottom6] }, i.createElement(k.x, { text: b.description })) : null, i.createElement(ye, { user: b }), V && !z ? i.createElement(a.Z, { style: [Ee.buttonSection, Ee.marginBottom6] }, i.createElement(ne, { style: Ee.marginEnd8, user: b }), i.createElement(se, { style: Ee.marginEnd8, user: b })) : null)) : null), ie ? i.createElement(l.Z, null, me) : i.createElement(a.Z, { style: ie ? void 0 : Ee.overflowHidden }, me)));
                },
                Ee = u.default.create((e) => ({ header: { minHeight: 128 * e.scaleMultiplier, paddingHorizontal: e.spaces.space24, paddingTop: 60 * e.scaleMultiplier, paddingBottom: e.spaces.space32 }, userAvatar: { minHeight: 128 * e.scaleMultiplier, width: 128 * e.scaleMultiplier }, overflowHidden: { overflow: "hidden" }, marginBottom6: { marginBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, marginEnd4: { marginEnd: e.spaces.space4 }, marginEnd8: { marginEnd: e.spaces.space8 }, marginEnd16: { marginEnd: e.spaces.space16 }, marginBottom16: { marginBottom: e.spaces.space16 }, profileInfo: { flexDirection: "row" }, profileDetails: { justifyContent: "end" }, ownProfileDetails: { justifyContent: "center" }, profileDescription: { marginBottom: e.spaces.space4 }, profileStats: { marginBottom: e.spaces.space4, flexDirection: "row" }, profileStatsItem: { flexDirection: "row" }, buttonSection: { bottom: -e.borderWidthsPx.medium, flexDirection: "row", marginTop: e.spaces.space2, start: -e.borderWidthsPx.medium }, contentWrapper: { flex: 1 }, content: { paddingHorizontal: e.spaces.space24 }, loggedOutProfilePrompt: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: e.spaces.space64 }, noVideosContainer: { width: "100%", height: "100%", display: "flex", alignItems: "center", paddingTop: e.spaces.space64 } })),
                Ce = $(ke);
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
                        [g, _] = i.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        b = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (b.current = !0),
                                function () {
                                    b.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (b.current)
                                if (a.Z.reducedMotionEnabled) _((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, l.Z)(e.count) && g.count === e.count) ? _((e) => ({ ...e, pendingCount: null, pendingText: null })) : (_((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, _));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            b.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              b.current && _((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, _));
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
                                            })(b.current, _),
                                        style: c,
                                    },
                                    i.createElement(o.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, b, _])
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
        197318: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                r = n(890601),
                l = n(783427),
                a = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M8.7 2.4c.7-.6 1.5-1 2.3-1.4.5-.2 1.1-.3 1.7-.3.4 0 .8.1 1.1.3s.7.4.9.7c.2.3.3.6.4 1 .1.4.1.7 0 1.1-.1.5-.2 1-.4 1.4-.4.8-.8 1.5-1.3 2.2-1.8 2.8-3.9 5.1-5.7 7.7-.4.6-.9 1.3-1.3 1.9-.2.3-.4.6-.6 1.1-.3.6.2.8.8.5 2.3-1.1 10.3-11.2 12.8-9 .3.3 1.7 1.5-1.3 5.8-.4.6-.7 1.1-1.1 1.6-.5.7-1.1 1.5-1.6 2.3-.4.6-.7 1.2-1 1.9-.1.2-.2.6 0 .8.4.4 1.9-.7 3.7-2.4l3.2-3.2c.5-.5 1.2.1.7.7-1.6 1.9-5.5 6.4-7.5 6.3-.4 0-.7-.1-1-.3s-.5-.5-.6-.8c-.1-.2-.2-.7.1-1.5.3-.8.6-1.6 1.1-2.3.5-.8 1-1.7 1.5-2.4.3-.5.7-1.1 1-1.6.3-.5.8-1.4 1.2-2 .2-.3.6-.9.2-1.2-.2-.2-.5-.2-1.3.6 0 0-6.6 6.7-9 8.4-1.3.9-2.8 1.2-3.6.4-1-.9-1.6-2.5 1.5-6.4 3.1-3.8 6.5-8.7 6.8-9.6.1-.2.1-.4.1-.5.1-.5-.5-.9-1-.7-.3.2-.8.5-1.6 1.2-2.3 2-4.3 4.3-6.1 6.8-.1.2-.3.3-.5.4s-.4.2-.6.2c-.4.1-.8-.1-1.2-.3-.3-.2-.5-.6-.6-1v-.6c.1-.2.1-.4.3-.5 2.7-2.9 5-5.2 7.5-7.3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        279849: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                r = n(890601),
                l = n(783427),
                a = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(202784),
                r = n(890601),
                l = n(783427),
                a = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Account.f27f66ea.js.map
