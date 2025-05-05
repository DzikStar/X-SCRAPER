"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Account", "shared~loader.DashMenu~loader.DashModal"],
    {
        395337: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i,
                l,
                r,
                a,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [l, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [r], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (a = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, a], storageKey: null }], storageKey: null }] },
                    params: { id: "lre2gA0kvs0gf4XRNei6Qw", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "10c9183ce406af8e8ffa48a4cfd593b4";
            const s = o;
        },
        906433: (e, t, n) => {
            n.d(t, { Z: () => g });
            n(136728);
            var i = n(202784),
                l = n(325686),
                r = n(952428),
                a = n(731708),
                o = n(310088),
                s = n(392237),
                c = n(674132),
                d = n.n(c),
                u = n(206962);
            const m = () => d().d9ef2842,
                p = d().d86bbf0f,
                f = d().h6beb5fb,
                g = ({ badgeCount: e, decoration: t, icon: n, iconColor: s, label: c, link: d, onClick: g, pip: b, rightControl: y, testID: h }) =>
                    i.createElement(
                        l.Z,
                        { style: _.dashMenuItem },
                        i.createElement(
                            r.Z,
                            { link: d, onClick: g, style: _.link, testID: h },
                            i.createElement(
                                l.Z,
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
                                e || b ? i.createElement(l.Z, { style: _.itemAccessory }, i.createElement(o.Z, { count: e, pip: b, standalone: !0, truncatedCountFormatter: f, unreadCountLabel: b ? m : p })) : null,
                                t ? i.createElement(l.Z, { style: _.leftMargin }, t) : null,
                            ),
                        ),
                        y,
                    ),
                _ = s.default.create((e) => ({ dashMenuItem: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.text, flexShrink: 0, marginEnd: e.spaces.space12 }, iconWithDashRedesign: { alignSelf: "center", marginEnd: e.spaces.space24, height: e.spaces.space24, width: e.spaces.space24 }, item: { paddingVertical: e.spaces.space16, paddingHorizontal: e.spaces.space16, flexDirection: "row", flexGrow: 1, alignItems: "center" }, itemAccessory: { flexShrink: 1, marginStart: e.spaces.space20, minWidth: e.spaces.space24, alignItems: "center" }, itemLabel: { flexGrow: 1 }, leftMargin: { marginStart: e.spaces.space16 }, link: { flexGrow: 1, maxWidth: "100%" } }));
        },
        120735: (e, t, n) => {
            n.d(t, { Z: () => k });
            var i = n(202784),
                l = n(325686),
                r = n(661810),
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
            const y = (0, p.Z)()
                .propsFromState(() => ({ communitiesActions: _.yK, hasCommunityMemberships: f.fn, pendingFollowersInfo: g.sC, viewerUser: b.ZP.selectViewerUser, userFeatures: _.TP }))
                .adjustStateProps(({ communitiesActions: e, hasCommunityMemberships: t, pendingFollowersInfo: n, userFeatures: i, viewerUser: l }) => {
                    const { acceptedIds: r, ids: a } = n;
                    return { communitiesActions: e, acceptedFollowerCount: r.length, hasCommunityMemberships: t, viewerUser: l, pendingFollowerCount: a.length - r.length };
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
                                const { component: n = h.Z, ...l } = e,
                                    r = { ...l },
                                    a = i.createElement(n, r);
                                return i.createElement(i.Fragment, { key: t }, a);
                            }))(f),
                        ((_ = g),
                        i.createElement(
                            i.Fragment,
                            null,
                            i.createElement(l.Z, { style: E.redesignDivider }, i.createElement(r.Z, { space: "space12", style: E.divider })),
                            _.map((e, t) => i.createElement(a.Z, { key: t, link: e.link, onClick: e.onClick, style: E.countrySpecificItem }, i.createElement(o.ZP, { weight: "bold" }, e.label))),
                        )),
                    );
                    var _;
                },
                k = (0, d.ZP)(y(i.memo(v))),
                E = s.default.create((e) => ({ redesignDivider: { width: "89%", alignSelf: "center" }, countrySpecificItem: { flexGrow: 1, padding: e.spaces.space16, flexDirection: "row", justifyContent: "space-between" }, divider: { width: "89%", margin: "auto" } }));
        },
        879526: (e, t, n) => {
            n.d(t, { O: () => Ce });
            var i = n(202784),
                l = n(400752),
                r = n(537392),
                a = n(688715),
                o = n(868634),
                s = n(674132),
                c = n.n(s),
                d = n(1753),
                u = n(625271),
                m = n(883069),
                p = n(279849),
                f = n(197318),
                g = n(689582),
                _ = n(256260),
                b = n(511323),
                y = n(80361),
                h = n(856151),
                w = n(53674),
                v = n(792618),
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
                A = n(720930),
                D = n(516951),
                L = n(450681),
                M = n(400915),
                N = n(420182),
                V = n(997657),
                U = n(306114),
                O = n(279918),
                z = n(880647),
                R = n(655352),
                $ = n(125363),
                B = n(466036),
                j = n(390387),
                K = n(76920),
                H = n(477403),
                W = n(104119),
                q = n(484633),
                G = n(381904),
                Q = n(206962);
            const X = c().a15648a4,
                Y = c().i3145aa0,
                J = c().cdf89b84,
                ee = c().i83d4f14,
                te = c().aeede01a,
                ne = c().b0041756,
                ie = c().ae1bbb26,
                le = c().d299431c,
                re = c().fa98627a,
                ae = c().fd442790,
                oe = c().da137d9a,
                se = c().e0cb0c72,
                ce = c().j087774e,
                de = c().e2eef3c2,
                ue = c().b55d8a78,
                me = c().e5323e36,
                pe = c().h02a6fe6,
                fe = c().f75d1806,
                ge = c().j34ad558,
                _e = c().a5a30af0,
                be = c().b007440a,
                ye = c().a5cbc19a,
                he = c().d13d697c,
                we = c().j0e2cfa8,
                ve = c().h5e38204,
                ke = c().h7d5d9fa,
                Ee = "rweb.navItemDecorations",
                Ce = ({ analytics: e, featureSwitches: t, onClose: n = D.Z, userClaims: s, viewerUser: c, acceptedFollowerCount: Ce, pendingFollowerCount: Ze }) => {
                    let xe = [],
                        Te = [];
                    const Pe = t.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Fe = (0, l.Dv)(N.lZ),
                        [Se, Ie] = i.useState(!1),
                        [Ae, De] = i.useState(!1),
                        Le = t.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Me = t.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ne = (0, W.Md)(Me);
                    i.useEffect(() => {
                        Ne &&
                            Fe.get(Ee).then((e) => {
                                Ie(!e?.analyticsClickedV2), De(!e?.[Ne?.key]);
                            });
                    }, [Fe, Ne]);
                    const Ve = (0, $.I0)();
                    i.useEffect(() => {
                        c?.protected && Ve(B.GE());
                    }, [Ve, c]);
                    const Ue = (0, K.Zy)();
                    Ue.size > 0 && Ue.add("/settings");
                    const Oe = (0, $.v9)(j.Lz),
                        ze = ({ link: e }) => !(Oe && (("string" == typeof e && ((e.startsWith("/settings") && !Ue.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        $e = (0, r.iv)().width,
                        Be = z.Z.isOneColumnLayout($e) || z.Z.isOneColumnSquishedLayout($e),
                        je = t.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Oe,
                        Ke = t.isTrue("branded_like_preview_enabled"),
                        He = t.isTrue("subscriptions_sign_up_enabled"),
                        We = t.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        qe = t.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = t.isTrue("rweb_xchat_enabled"),
                        Qe = s.isAnyPremiumSubscriber(),
                        Xe = s.isVerifiedOrg(),
                        Ye = s.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        Je = Qe,
                        et = s.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, R.ZP)(),
                        { role: tt } = (0, M.l7)(),
                        { activeItem: nt } = (0, G.Y)(),
                        it = t.isTrue("voice_rooms_web_space_creation") && tt !== q.Q.host && nt?.type !== q.W.space,
                        lt = t.isTrue("rweb_go_live_enabled"),
                        rt = t.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        at = t.isTrue("payments_enabled"),
                        ot = t.isTrue("recruiting_global_jobs_search_enabled"),
                        st = (0, H.vC)(),
                        ct = t.isTrue("c9s_enabled") && !!c,
                        dt = (0, U.Z)(),
                        ut = i.useMemo(() => !(Qe || !dt) && t.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Qe, t, dt]),
                        mt = (t) => () => {
                            t && e.scribe({ section: "overflow_menu", element: t, action: "click", data: { message: "VDL redesign dash menu item" } }), n && n();
                        },
                        pt = { icon: d.default, label: _e, link: "/compose/articles", onClick: mt("article_composer") },
                        ft = { label: oe, link: (0, a.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: mt("german_transparency_item") },
                        gt = { label: te, link: (0, a.ju)("https://legal.x.com/imprint.html"), onClick: mt("imprint_item") },
                        _t = { icon: u.default, label: X, link: "/i/communitynotes", onClick: mt("birdwatch") },
                        bt = { icon: m.default, label: Y, link: "/i/bookmarks", onClick: mt("bookmarks_overflow_item") },
                        yt = { icon: p.default, label: J, link: "/i/branded_likes_preview", onClick: mt("branded_likes_preview_overflow_item") },
                        ht = (f.default, mt("labs_item"), { icon: g.default, label: ne, link: `/${Re}/lists`, onClick: mt("lists_overflow_item") }),
                        wt = { badgeCount: Ze, icon: _.default, label: ee, link: "/follower_requests", onClick: mt("follower_requests_overflow_item") },
                        vt = { icon: b.default, label: re, link: `/${Re}`, onClick: mt("profile_overflow_item") },
                        kt = { icon: y.default, label: "Money", link: "/i/money", onClick: mt("payments_overflow_item") },
                        Et = { icon: h.default, label: ce, link: "/i/coins", onClick: mt("twitter_coins") },
                        Ct = () => ({
                            icon: w.default,
                            label: ye,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Fe.get(Ee).then((e) => {
                                    const t = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Fe.set(Ee, t);
                                }),
                                mt("analytics")),
                            decoration: Se ? i.createElement(o.ZP, { background: "blue500" }, he) : null,
                        }),
                        Zt = () => {
                            const e = t.isTrue("subscriptions_premium_experiment_nav_text");
                            return { icon: Pe ? v.default : k.default, label: e ? ge : fe, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mt("verified_overflow_item") };
                        },
                        xt = { icon: Pe ? v.default : k.default, label: fe, link: "/i/premium", onClick: mt("premium_hub") },
                        Tt = { label: ie, link: "/logout", icon: E.default, onClick: mt("logout_overflow_item"), testID: Q.Z.logout },
                        Pt = { icon: C.default, label: se, link: (0, a.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mt("twitter_ads_item") },
                        Ft = t.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        St = { icon: Z.default, label: le, link: Ft ? "/i/monetization" : "/settings/monetization", onClick: mt("monetization") },
                        It = { icon: x.default, label: ae, link: "/settings", onClick: mt("settings_overflow_item"), testID: Q.Z.settings },
                        At = () => ({
                            label: Le ? we : de,
                            onClick: () => (
                                Le &&
                                    Ne &&
                                    Fe.get(Ee).then((e) => {
                                        const t = { ...e, [Ne?.key]: !0 };
                                        Fe.set(Ee, t);
                                    }),
                                mt("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: T.default,
                            decoration: Ae && Le && Ne ? i.createElement(o.ZP, { background: "blue500" }, Ne.label) : null,
                        }),
                        Dt = { label: de, onClick: mt("verified_organization_dashboard_item"), link: "/i/verified", icon: T.default },
                        Lt = { label: ue, onClick: mt("create_space_item"), link: "/i/spaces/start", icon: P.default },
                        Mt = { label: me, onClick: mt("go_live_item"), link: "/i/go-live", icon: F.default },
                        Nt = c ? { label: pe, onClick: mt("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        Vt = Ge && c ? { label: ve, onClick: mt("chat_item"), link: "/i/chat", icon: I.default, decoration: i.createElement(o.ZP, { background: "blue500" }, ke) } : void 0,
                        Ut = t.isTrue("spaces_conference_enabled") || !!st,
                        Ot = { label: "Conferences", onClick: mt("conferences_item"), link: "/i/conferences", icon: F.default },
                        zt = { label: be, onClick: mt("jobs_item"), link: "/jobs", icon: A.default },
                        Rt = [ft, gt],
                        $t = He && !Qe,
                        Bt = qe,
                        jt = (0, L.Z)([Vt, vt, Je ? xt : void 0, at ? kt : void 0, $t ? Zt() : void 0, ct ? Nt : void 0, Re ? ht : void 0, bt, et ? pt : void 0, Bt ? (Xe ? Dt : At()) : void 0, rt ? Et : void 0, je ? _t : void 0, Ze || Ce ? wt : void 0, ut ? Ct() : void 0, St, Pt, ot ? zt : void 0, Ut ? Ot : void 0, It, Tt]).filter(ze),
                        Kt = i.useContext(V.hC),
                        Ht = (0, L.Z)([Vt, O.yw.Lists > Kt && Re ? ht : void 0, O.yw.Premium > Kt && Je ? xt : void 0, O.yw.PremiumSignup > Kt && $t ? Zt() : void 0, O.yw.Bookmarks > Kt ? bt : void 0, O.yw.Payments > Kt && at ? kt : void 0, O.yw.Communities > Kt && ct ? Nt : void 0, O.yw.Articles > Kt && Ye ? pt : void 0, O.yw.CommunityNotes > Kt && je ? _t : void 0, O.yw.Analytics > Kt && ut ? Ct() : void 0, St, O.yw.VerifiedOrgDash > Kt && Bt && Xe ? Dt : void 0, (((!Xe || s.isLegacyVerifiedOrg()) && O.yw.VerifiedOrgSignup > Kt) || (s.isVerifiedOrgAffiliate() && !s.isVerifiedOrg())) && t.isTrue("blue_business_vo_nav_for_legacy_verified") ? At() : void 0, rt ? Et : void 0, Ke ? yt : void 0, Ze || Ce ? wt : void 0, Pt, O.yw.Jobs > Kt && ot ? zt : void 0, void 0, it ? Lt : void 0, lt ? Mt : void 0, Ut ? Ot : void 0, It]).filter(ze);
                    return (0, R.ZP)() ? ((xe = xe.concat(Ht)), We && Be && (Te = Rt)) : ((xe = xe.concat(jt)), We && (Te = Rt)), { coreItems: xe, countrySpecificItems: Te };
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
            n.r(t), n.d(t, { AccountScreen: () => b, default: () => h });
            var i = n(202784),
                l = n(325686),
                r = n(366635),
                a = n(392237),
                o = n(674132),
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
                    return i.createElement(u.Z, null, i.createElement(c.Z.Configure, { documentTitle: _, title: this._renderUserName() }, i.createElement(l.Z, { style: y.dashmenu }, i.createElement(d.Z, null))));
                }
                _renderUserName() {
                    const { loggedInUser: e } = this.props;
                    return e ? i.createElement(r.Z, { badgeContext: "account", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, translatorType: e.translator_type, withScreenName: !1 }) : null;
                }
            }
            const y = a.default.create((e) => ({ dashmenu: { marginBottom: e.componentDimensions.appBarHeight } })),
                h = (0, m.Z)(g(b));
        },
        477403: (e, t, n) => {
            n.d(t, { eY: () => m, si: () => b, vC: () => u });
            n(543673), n(240753), n(128399);
            var i = n(395337),
                l = n(202784),
                r = (n(585488), n(516951)),
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
                    const t = (0, o.o)(() => new URL(e), r.Z);
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
                return l.useMemo(() => {
                    const n = e.affiliations?.affiliated_account_ids_results,
                        i = (
                            n?.flatMap(({ rest_id: e, result: t }) => {
                                if ("User" !== t?.__typename) return [];
                                return [{ name: t.legacy.name, id: e }];
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
                l = n(396342),
                r = n(214997),
                a = n(325686),
                o = n(731708),
                s = n(98538),
                c = n(891198),
                d = n(366635),
                u = n(392237),
                m = n(674132),
                p = n.n(m),
                f = n(516951),
                g = n(187669),
                _ = n(290402),
                b = n(363047),
                y = n(902641),
                h = n(273413),
                w = n(602737),
                v = n(905346),
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
                A = n(919022),
                D = n(312771),
                L = n(673932),
                M = n(87063),
                N = n(668214),
                V = n(903558),
                U = n(682461);
            const O = (e, t) => {
                    const { match: n } = t,
                        i = n.params.screenName,
                        l = e.tv?.profile?.[i?.toLowerCase() || ""];
                    return l;
                },
                z = (e) => e.tv?.player,
                R = (e, t) => {
                    const { match: n } = t,
                        i = n.params.screenName;
                    return e.tv?.profile?.[i?.toLowerCase() || ""]?.cursor;
                },
                $ = (e) => e.tv?.profileFetchStatus === M.Z.LOADING,
                B = (0, N.Z)()
                    .propsFromState(() => ({ tvProfile: O, tvPlayer: z, cursor: R, isLoading: $ }))
                    .propsFromActions(() => ({ playerOpen: V.eX.playerOpen, fetchUserProfileAndVideos: U.Sn }))
                    .withAnalytics({ page: "profile" });
            var j = n(708411),
                K = n(154003),
                H = n(524483),
                W = n(467537),
                q = n(725516);
            const G = "tv-follow-button",
                Q = p().eb5f060c,
                X = p().d960b55c,
                Y = p().c0f56044,
                J = p().cfd2f35e,
                ee = p().ja66a2b5,
                te = p().e4c91b70,
                ne = ({ style: e, user: t }) => {
                    const { closeModal: n, openModal: l } = (0, H.N)(),
                        r = (0, I.I0)(),
                        a = (0, q.z)(),
                        o = i.useCallback(() => {
                            t?.following
                                ? (a.scribe({ element: "unfollow-button", action: "click", data: { profile_id: t.id_str } }),
                                  l({
                                      primaryText: ee({ screenName: t.screen_name }),
                                      secondaryText: te,
                                      primaryAction: {
                                          buttonText: Y,
                                          onClick: () => {
                                              r(U.fv({ userId: t.id_str, screenName: t?.screen_name })), n();
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
                                : (a.scribe({ element: "follow-button", action: "click", data: { profile_id: t.id_str } }), r(U.ZN({ userId: t.id_str, screenName: t?.screen_name })));
                        }, [a, n, r, l, t?.following, t.id_str, t.screen_name]);
                    return i.createElement(W.C, { "aria-label": t?.following ? Y : Q, focusedStyle: t?.following ? ie.interactiveViewUnfollowFocused : void 0, name: G, onPress: o, role: "button", style: [ie.interactiveView, e] }, ({ hasFocus: e }) => {
                        const n = t?.following ? (e ? Y : X) : Q;
                        return i.createElement(K.ZP, { "aria-label": n, size: "small", style: ie.button, type: t?.following ? (e ? "destructiveOutlined" : "primaryOutlined") : "primaryFilled" }, n);
                    });
                },
                ie = u.default.create((e) => ({ interactiveView: { borderRadius: e.borderRadii.infinite }, interactiveViewUnfollowFocused: { borderColor: e.colors.red500 }, button: { width: 128 * e.scaleMultiplier } }));
            var le = n(74514),
                re = n(405303);
            const ae = p().j87c21f4,
                oe = p().iebc30ca,
                se = ({ style: e, user: t }) => {
                    const n = (0, I.I0)(),
                        l = (0, q.z)(),
                        r = i.useCallback(() => {
                            l.scribe({ element: "notify-button", action: "click", data: { profile_id: t.id_str } }), n(U.BX({ userId: t.id_str, notificationsEnabled: !t.notifications, screenName: t?.screen_name }));
                        }, [l, n, t.id_str, t.notifications, t?.screen_name]);
                    return i.createElement(W.C, { "aria-label": t?.notifications ? oe : ae, name: "tv-notify-button", onPress: r, role: "button", style: [ce.interactiveView, e] }, i.createElement(K.ZP, { icon: t?.notifications ? i.createElement(le.default, null) : i.createElement(re.default, null), size: "small", type: "primaryOutlined" }));
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
                                    e.push(b.C2);
                                },
                            },
                            fe,
                        ),
                    );
                },
                he = ({ user: e }) => i.createElement(a.Z, { style: [Ee.profileStats, Ee.marginBottom6] }, i.createElement(a.Z, { style: [Ee.profileStatsItem, Ee.marginEnd8] }, i.createElement(p().I18NFormatMessage, { $i18n: "d2924acb" }, i.createElement(s.Z.Value, { style: Ee.marginEnd4 }, p().ec08efe4({ formattedCount: c.ZP.getTruncatedCount(e?.followers_count || 0) })), i.createElement(s.Z.Label, { style: Ee.marginEnd4 }, p().h9f711f0({ count: e?.followers_count || 0 })))), i.createElement(a.Z, { style: [Ee.profileStatsItem, Ee.marginEnd8] }, i.createElement(p().I18NFormatMessage, { $i18n: "a8f9642d" }, i.createElement(s.Z.Value, { style: Ee.marginEnd4 }, p().bef78294({ formattedCount: c.ZP.getTruncatedCount(e?.friends_count || 0) })), i.createElement(s.Z.Label, { style: Ee.marginEnd4 }, p().hda3bb87({ count: e?.friends_count || 0 }))))),
                we = (e) => `${T.sN}.${L.rQ}.${de}.carousel-${e}`,
                ve = (e) => `${T.sN}.${L.rQ}.${de}.${ue}.video-${e}`,
                ke = ({ cursor: e, fetchUserProfileAndVideos: t, history: n, isLoading: s, match: c, playerOpen: u, tvProfile: m }) => {
                    const p = c.params.screenName,
                        b = m?.user,
                        w = m?.modules,
                        M = m?.videos,
                        N = (0, I.v9)(A.ZP.selectViewerUser),
                        V = N && b && N.id_str === b.id_str,
                        U = (w?.length || 0) + 1,
                        O = i.useRef(null),
                        z = i.useRef(Array(U).fill(null));
                    (0, g.q)(() => {
                        ((p && !b) || !M) && t({ screenName: p });
                    });
                    const { clearVoiceHandlers: R, registerVoiceHandlers: $ } = (0, y.B)();
                    i.useEffect(
                        () => (
                            $({ onupdatestate: () => h.E.List }),
                            function () {
                                R();
                            }
                        ),
                        [R, $],
                    );
                    const B = i.useCallback(() => {
                            p && !s && t({ screenName: p, cursor: e });
                        }, [p, s, t, e]),
                        K = (0, I.I0)(),
                        H = i.useCallback(
                            (e) => {
                                K(u(e)), n.push((0, L.X5)(e));
                            },
                            [K, n, u],
                        ),
                        W = ((e) => ("https://abs.twimg.com/sticky/default_profile_images/default_profile_normal.png" === e ? j.jz : e ? e.replace(j.KB, "_400x400.jpg") : j.jz))(b?.profile_image_url_https),
                        q = i.useCallback(() => !1, []),
                        Q = i.useMemo(
                            () =>
                                w?.map((e, t) => () => {
                                    O.current?.positionRef.current !== t && O.current?.setPosition(t);
                                }),
                            [w],
                        ),
                        X = i.useCallback(() => {
                            O.current?.positionRef.current !== U - 1 && O.current?.setPosition(U - 1);
                        }, [U]),
                        Y = i.useMemo(
                            () =>
                                w?.map((e, t) =>
                                    i.createElement(
                                        a.Z,
                                        {
                                            key: t,
                                            ref: (e) => {
                                                z.current[t] = e;
                                            },
                                        },
                                        i.createElement(v.Z, { content: e.content, displayType: (0, F.qU)(e.displayType), handleNoriginArrowPress: q, name: `carousel-${t.toString()}`, onFocus: Q?.[t], onSelectVideo: H, title: e.title }),
                                    ),
                                ),
                            [q, w, Q, H],
                        ),
                        J = i.useMemo(() => {
                            const e = w && w.length > 0;
                            if (M && M?.length > 0)
                                return i.createElement(
                                    a.Z,
                                    {
                                        ref: (e) => {
                                            z.current[U - 1] = e;
                                        },
                                    },
                                    i.createElement(Z.Z, { autoFocus: !e, content: M, handleNoriginArrowPress: q, name: ue, onFocus: X, onNearEnd: B, onSelectVideo: H, returnToFirstElementOnEscape: !0, style: Ee.content, title: e ? be : void 0, width: 4 }),
                                );
                        }, [B, q, w, X, H, U, M]),
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
                                        if (0 === t) return (0, l.setFocus)(`${T.sN}.${L.rQ}.${G}`), !0;
                                        (n = Math.max(t - 1, 0)), (0, l.setFocus)(we(n));
                                        break;
                                    case "ArrowDown":
                                        if (((n = Math.min(t + 1, U)), n === U)) return !1;
                                        if (n === U - 1) return (0, l.setFocus)(ve(0)), !0;
                                        break;
                                    case "ArrowLeft":
                                        (0, l.setFocus)(`${T.sN}.${T.TZ}`);
                                }
                                return !0;
                            },
                            [U],
                        ),
                        ie = (0, S.Z)(),
                        le = i.useMemo(() => (ie ? i.createElement(a.Z, null, Y, J) : i.createElement(C.k, { getGPUScrollerApi: ee, renderedItemRefs: z, scrollX: !1, scrollY: !0 }, Y, J)), [ee, Y, J, ie]),
                        re = (0, l.getCurrentFocusKey)(),
                        ae = i.useCallback((e) => (w?.length ? re !== we(0) && ((0, l.setFocus)(we(0)), !0) : !!M?.length && re !== ve(0) && ((0, l.setFocus)(ve(0)), !0)), [re, w?.length, M?.length]),
                        oe = i.useMemo(() => (M?.length || w?.length ? i.createElement(E.Z, { "aria-label": void 0, autoFocus: !0, name: de, onArrowPress: te, onEscapeOrBack: ae, role: "grid", saveLastFocusedChild: !0, trackChildren: !0 }, le) : i.createElement(a.Z, { style: Ee.noVideosContainer }, i.createElement(o.ZP, { size: "headline1", weight: "bold" }, V ? ge : _e({ name: `@${b?.screen_name || ""}` })))), [te, ae, V, w?.length, le, b?.screen_name, M?.length]),
                        ce = i.useCallback(() => (N ? oe : i.createElement(ye, { history: n, user: b })), [n, oe, b, N]),
                        me = i.useMemo(() => i.createElement(_.Z, { fetchStatus: b && M ? D.ZP.LOADED : D.ZP.LOADING, onRequestRetry: f.Z, render: ce, retryable: !1 }), [ce, b, M]);
                    return i.createElement(i.Fragment, null, i.createElement(x.Z, null, i.createElement(a.Z, { style: Ee.header }, b ? i.createElement(a.Z, { style: Ee.profileInfo }, i.createElement(P.Z, { source: W, style: [Ee.userAvatar, Ee.marginEnd16], verifiedType: b.verified_type, withOuterBorder: !0 }), i.createElement(a.Z, { style: [Ee.profileDetails, V && Ee.ownProfileDetails, Ee.marginEnd16] }, i.createElement(d.Z, { affiliateBadgeInfo: b.highlightedLabel, badgeContext: "content", isBlueVerified: b.is_blue_verified, isProtected: b.protected, isVerified: b.verified, name: b.name, nameSize: "headline1", screenName: b.screen_name, screenNameSize: "body", style: Ee.marginBottom6, verifiedType: b.verified_type, withLink: !1, withNameWrap: !0 }), b.description ? i.createElement(o.ZP, { style: [Ee.profileDescription, Ee.marginBottom6] }, i.createElement(k.x, { text: b.description })) : null, i.createElement(he, { user: b }), N && !V ? i.createElement(a.Z, { style: [Ee.buttonSection, Ee.marginBottom6] }, i.createElement(ne, { style: Ee.marginEnd8, user: b }), i.createElement(se, { style: Ee.marginEnd8, user: b })) : null)) : null), ie ? i.createElement(r.Z, null, me) : i.createElement(a.Z, { style: ie ? void 0 : Ee.overflowHidden }, me)));
                },
                Ee = u.default.create((e) => ({ header: { minHeight: 128 * e.scaleMultiplier, paddingHorizontal: e.spaces.space24, paddingTop: 60 * e.scaleMultiplier, paddingBottom: e.spaces.space32 }, userAvatar: { minHeight: 128 * e.scaleMultiplier, width: 128 * e.scaleMultiplier }, overflowHidden: { overflow: "hidden" }, marginBottom6: { marginBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, marginEnd4: { marginEnd: e.spaces.space4 }, marginEnd8: { marginEnd: e.spaces.space8 }, marginEnd16: { marginEnd: e.spaces.space16 }, marginBottom16: { marginBottom: e.spaces.space16 }, profileInfo: { flexDirection: "row" }, profileDetails: { justifyContent: "end" }, ownProfileDetails: { justifyContent: "center" }, profileDescription: { marginBottom: e.spaces.space4 }, profileStats: { marginBottom: e.spaces.space4, flexDirection: "row" }, profileStatsItem: { flexDirection: "row" }, buttonSection: { bottom: -e.borderWidthsPx.medium, flexDirection: "row", marginTop: e.spaces.space2, start: -e.borderWidthsPx.medium }, contentWrapper: { flex: 1 }, content: { paddingHorizontal: e.spaces.space24 }, loggedOutProfilePrompt: { display: "flex", flexDirection: "column", alignItems: "center", paddingTop: e.spaces.space64 }, noVideosContainer: { width: "100%", height: "100%", display: "flex", alignItems: "center", paddingTop: e.spaces.space64 } })),
                Ce = B(ke);
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var i = n(202784),
                l = n(325686),
                r = n(827515),
                a = n(461756),
                o = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const i = (0, r.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
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
                                    t === g.text || ((0, r.Z)(e.count) && g.count === e.count) ? _((e) => ({ ...e, pendingCount: null, pendingText: null })) : (_((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, _));
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
                                r = !g.animating && g.oldText && !a.Z.reducedMotionEnabled,
                                s = { ...p, ...(g.animating ? e.post : e.active) },
                                c = { ...(r ? e.pre : e.active) };
                            return i.createElement(
                                l.Z,
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
                l = n(325686),
                r = n(731708),
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
                    const { children: e, link: t, onMedia: n, onPress: l } = this.props;
                    return i.createElement(r.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: l }, i.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                i.createElement(
                    l.Z,
                    { style: [m.row, e.style] },
                    i.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => i.createElement(l.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => i.createElement(d.Consumer, null, ({ onMedia: n }) => i.createElement(r.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: l, weight: a = "bold" }) => i.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? i.createElement(o.ZP, { children: t, count: n, size: c, style: l, weight: a }) : i.createElement(r.ZP, { children: t, color: s ? "white" : "text", size: c, style: l, weight: a }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Account.d136b08a.js.map
