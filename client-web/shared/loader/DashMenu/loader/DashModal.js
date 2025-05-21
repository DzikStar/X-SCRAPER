"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal"],
    {
        395337: (e, i, l) => {
            l.d(i, { Z: () => r });
            var n,
                t,
                a,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [a], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "lre2gA0kvs0gf4XRNei6Qw", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "10c9183ce406af8e8ffa48a4cfd593b4";
            const r = o;
        },
        879526: (e, i, l) => {
            l.d(i, { O: () => Te });
            var n = l(202784),
                t = l(400752),
                a = l(537392),
                s = l(688715),
                o = l(868634),
                r = l(332920),
                c = l.n(r),
                u = l(1753),
                d = l(625271),
                _ = l(883069),
                m = l(279849),
                f = l(197318),
                p = l(689582),
                b = l(256260),
                k = l(511323),
                g = l(80361),
                v = l(856151),
                y = l(53674),
                w = l(792618),
                h = l(520913),
                C = l(297896),
                T = l(175564),
                Z = l(748138),
                F = l(698891),
                L = l(68290),
                K = l(707570),
                P = l(839),
                S = l(593875),
                A = l(829110),
                O = l(720930),
                U = l(516951),
                x = l(450681),
                R = l(400915),
                V = l(420182),
                j = l(997657),
                D = l(306114),
                E = l(279918),
                I = l(722517),
                M = l(880647),
                z = l(655352),
                q = l(125363),
                Q = l(466036),
                W = l(390387),
                B = l(76920),
                H = l(477403),
                N = l(104119),
                $ = l(484633),
                X = l(381904),
                Y = l(206962);
            const G = c().a15648a4,
                J = c().i3145aa0,
                ee = c().cdf89b84,
                ie = c().i83d4f14,
                le = c().aeede01a,
                ne = c().b0041756,
                te = c().ae1bbb26,
                ae = c().d299431c,
                se = c().fa98627a,
                oe = c().fd442790,
                re = c().da137d9a,
                ce = c().e0cb0c72,
                ue = c().j087774e,
                de = c().e2eef3c2,
                _e = c().b55d8a78,
                me = c().e5323e36,
                fe = c().h02a6fe6,
                pe = c().f75d1806,
                be = c().a5a30af0,
                ke = c().b007440a,
                ge = c().a5cbc19a,
                ve = c().d13d697c,
                ye = c().j0e2cfa8,
                we = c().h5e38204,
                he = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: l = U.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Fe = [],
                        Le = [];
                    const Ke = (0, I.Z)("PremiumNav"),
                        Pe = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Se = (0, t.Dv)(V.lZ),
                        [Ae, Oe] = n.useState(!1),
                        [Ue, xe] = n.useState(!1),
                        Re = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ve = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        je = (0, N.Md)(Ve);
                    n.useEffect(() => {
                        je &&
                            Se.get(Ce).then((e) => {
                                Oe(!e?.analyticsClickedV2), xe(!e?.[je?.key]);
                            });
                    }, [Se, je]);
                    const De = (0, q.I0)();
                    n.useEffect(() => {
                        c?.protected && De(Q.GE());
                    }, [De, c]);
                    const Ee = (0, B.Zy)();
                    Ee.size > 0 && Ee.add("/settings");
                    const Ie = (0, q.v9)(W.Lz),
                        Me = ({ link: e }) => !(Ie && (("string" == typeof e && ((e.startsWith("/settings") && !Ee.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        ze = c?.screen_name || "",
                        qe = (0, a.iv)().width,
                        Qe = M.Z.isOneColumnLayout(qe) || M.Z.isOneColumnSquishedLayout(qe),
                        We = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ie,
                        Be = i.isTrue("branded_like_preview_enabled"),
                        He = i.isTrue("subscriptions_sign_up_enabled"),
                        Ne = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Xe = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Ge = r.isVerifiedOrg(),
                        Je = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, z.ZP)(),
                        { role: li } = (0, R.l7)(),
                        { activeItem: ni } = (0, X.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && li !== $.Q.host && ni?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, H.vC)(),
                        ui = i.isTrue("c9s_enabled") && !!c,
                        di = (0, D.Z)(),
                        _i = n.useMemo(() => !(Ye || !di) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, di]),
                        mi = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), l && l();
                        },
                        fi = { icon: u.default, label: be, link: "/compose/articles", onClick: mi("article_composer") },
                        pi = { label: re, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: mi("german_transparency_item") },
                        bi = { label: le, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: mi("imprint_item") },
                        ki = { icon: d.default, label: G, link: "/i/communitynotes", onClick: mi("birdwatch") },
                        gi = { icon: _.default, label: J, link: "/i/bookmarks", onClick: mi("bookmarks_overflow_item") },
                        vi = { icon: m.default, label: ee, link: "/i/branded_likes_preview", onClick: mi("branded_likes_preview_overflow_item") },
                        yi = (f.default, mi("labs_item"), { icon: p.default, label: ne, link: `/${ze}/lists`, onClick: mi("lists_overflow_item") }),
                        wi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: mi("follower_requests_overflow_item") },
                        hi = { icon: k.default, label: se, link: `/${ze}`, onClick: mi("profile_overflow_item") },
                        Ci = { icon: g.default, label: "Money", link: "/i/money", onClick: mi("payments_overflow_item") },
                        Ti = { icon: v.default, label: ue, link: "/i/coins", onClick: mi("twitter_coins") },
                        Zi = () => ({
                            icon: y.default,
                            label: ge,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Se.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Se.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: Ae ? n.createElement(o.ZP, { background: "blue500" }, ve) : null,
                        }),
                        Fi = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: l } = e ? Ke : {},
                                t = "UpsellButtonRenderProperties" === l?.render_properties.__typename && l.render_properties.action_label ? l.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === Ke?.upsellContent?.render_properties.__typename ? Ke.upsellContent.render_properties.decoration_label : null;
                            return { icon: Pe ? w.default : h.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? n.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        Li = { icon: Pe ? w.default : h.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        Ki = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Pi = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Si = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Ai = { icon: Z.default, label: ae, link: Si ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        Oi = { icon: F.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Ui = () => ({
                            label: Re ? ye : de,
                            onClick: () => (
                                Re &&
                                    je &&
                                    Se.get(Ce).then((e) => {
                                        const i = { ...e, [je?.key]: !0 };
                                        Se.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: L.default,
                            decoration: Ue && Re && je ? n.createElement(o.ZP, { background: "blue500" }, je.label) : null,
                        }),
                        xi = { label: de, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: L.default },
                        Ri = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: K.default },
                        Vi = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: P.default },
                        ji = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        Di = Xe && c ? { label: we, onClick: mi("chat_item"), link: "/i/chat", icon: A.default, decoration: n.createElement(o.ZP, { background: "blue500" }, he) } : void 0,
                        Ei = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ii = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: P.default },
                        Mi = { label: ke, onClick: mi("jobs_item"), link: "/jobs", icon: O.default },
                        zi = [pi, bi],
                        qi = He && !Ye,
                        Qi = $e,
                        Wi = (0, x.Z)([Di, hi, ei ? Li : void 0, oi ? Ci : void 0, qi ? Fi() : void 0, ui ? ji : void 0, ze ? yi : void 0, gi, ii ? fi : void 0, Qi ? (Ge ? xi : Ui()) : void 0, si ? Ti : void 0, We ? ki : void 0, Ze || Te ? wi : void 0, _i ? Zi() : void 0, Ai, Pi, ri ? Mi : void 0, Ei ? Ii : void 0, Oi, Ki]).filter(Me),
                        Bi = n.useContext(j.hC),
                        Hi = (0, x.Z)([Di, E.yw.Lists > Bi && ze ? yi : void 0, E.yw.Premium > Bi && ei ? Li : void 0, E.yw.PremiumSignup > Bi && qi ? Fi() : void 0, E.yw.Bookmarks > Bi ? gi : void 0, E.yw.Payments > Bi && oi ? Ci : void 0, E.yw.Communities > Bi && ui ? ji : void 0, E.yw.Articles > Bi && Je ? fi : void 0, E.yw.CommunityNotes > Bi && We ? ki : void 0, E.yw.Analytics > Bi && _i ? Zi() : void 0, Ai, E.yw.VerifiedOrgDash > Bi && Qi && Ge ? xi : void 0, (((!Ge || r.isLegacyVerifiedOrg()) && E.yw.VerifiedOrgSignup > Bi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Ui() : void 0, si ? Ti : void 0, Be ? vi : void 0, Ze || Te ? wi : void 0, Pi, E.yw.Jobs > Bi && ri ? Mi : void 0, void 0, ti ? Ri : void 0, ai ? Vi : void 0, Ei ? Ii : void 0, Oi]).filter(Me);
                    return (0, z.ZP)() ? ((Fe = Fe.concat(Hi)), Ne && Qe && (Le = zi)) : ((Fe = Fe.concat(Wi)), Ne && (Le = zi)), { coreItems: Fe, countrySpecificItems: Le };
                };
        },
        206962: (e, i, l) => {
            l.d(i, { Z: () => n });
            const n = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        16222: (e, i, l) => {
            function n(e, i) {
                try {
                    return e();
                } catch (e) {
                    return i(e);
                }
            }
            l.d(i, { o: () => n });
        },
        477403: (e, i, l) => {
            l.d(i, { eY: () => _, si: () => k, vC: () => d });
            l(543673), l(240753), l(128399);
            var n = l(395337),
                t = l(202784),
                a = (l(585488), l(516951)),
                s = l(952793),
                o = l(16222),
                r = l(125363),
                c = l(919022),
                u = l(535338);
            function d(e) {
                return (0, r.v9)(_);
            }
            function _(e) {
                return (function (e) {
                    if (!e) return;
                    const i = (0, o.o)(() => new URL(e), a.Z);
                    if (!i || !m.includes(i.host)) return;
                    const l = i.pathname.slice(1).toLowerCase();
                    return f[l];
                })(c.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const m = ["twitter.com", "x.com"],
                f = { xai: "1661523610111193088" },
                p = Object.values(f),
                b = n.Z;
            function k() {
                const e = (0, u.p)(b, {}),
                    i = (0, s.hC)("spaces_conference_enabled");
                return t.useMemo(() => {
                    const l = e.affiliations?.affiliated_account_ids_results,
                        n = (
                            l?.flatMap(({ rest_id: e, result: i }) => {
                                if ("User" !== i?.__typename) return [];
                                return [{ name: i.legacy.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => p.includes(e));
                    return i && !n.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...n] : n;
                }, [e.affiliations?.affiliated_account_ids_results, i]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.7aef2a5a.js.map
