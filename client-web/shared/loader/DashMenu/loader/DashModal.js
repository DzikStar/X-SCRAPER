"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal", "icons/IconFollowArrowLeftStroke-js"],
    {
        395337: (e, i, n) => {
            n.d(i, { Z: () => r });
            var l,
                t,
                a,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [l, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const r = o;
        },
        879526: (e, i, n) => {
            n.d(i, { O: () => Te });
            var l = n(202784),
                t = n(400752),
                a = n(537392),
                s = n(688715),
                o = n(868634),
                r = n(111677),
                c = n.n(r),
                d = n(1753),
                u = n(625271),
                _ = n(883069),
                m = n(279849),
                f = n(197318),
                p = n(689582),
                b = n(256260),
                k = n(511323),
                g = n(80361),
                v = n(856151),
                y = n(53674),
                w = n(792618),
                h = n(520913),
                C = n(297896),
                T = n(175564),
                Z = n(748138),
                F = n(698891),
                L = n(68290),
                S = n(707570),
                K = n(839),
                P = n(593875),
                z = n(829110),
                O = n(720930),
                U = n(516951),
                V = n(450681),
                j = n(400915),
                x = n(420182),
                M = n(997657),
                A = n(306114),
                D = n(279918),
                E = n(722517),
                I = n(880647),
                R = n(655352),
                q = n(125363),
                W = n(466036),
                Q = n(390387),
                B = n(76920),
                H = n(477403),
                N = n(104119),
                $ = n(484633),
                G = n(381904),
                Y = n(206962);
            const J = c().a15648a4,
                X = c().i3145aa0,
                ee = c().cdf89b84,
                ie = c().i83d4f14,
                ne = c().aeede01a,
                le = c().b0041756,
                te = c().ae1bbb26,
                ae = c().d299431c,
                se = c().fa98627a,
                oe = c().fd442790,
                re = c().da137d9a,
                ce = c().e0cb0c72,
                de = c().j087774e,
                ue = c().e2eef3c2,
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
                Te = ({ analytics: e, featureSwitches: i, onClose: n = U.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Fe = [],
                        Le = [];
                    const Se = (0, E.Z)("PremiumNav"),
                        Ke = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Pe = (0, t.Dv)(x.lZ),
                        [ze, Oe] = l.useState(!1),
                        [Ue, Ve] = l.useState(!1),
                        je = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        xe = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Me = (0, N.Md)(xe);
                    l.useEffect(() => {
                        Me &&
                            Pe.get(Ce).then((e) => {
                                Oe(!e?.analyticsClickedV2), Ve(!e?.[Me?.key]);
                            });
                    }, [Pe, Me]);
                    const Ae = (0, q.I0)();
                    l.useEffect(() => {
                        c?.protected && Ae(W.GE());
                    }, [Ae, c]);
                    const De = (0, B.Zy)();
                    De.size > 0 && De.add("/settings");
                    const Ee = (0, q.v9)(Q.Lz),
                        Ie = ({ link: e }) => !(Ee && (("string" == typeof e && ((e.startsWith("/settings") && !De.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        qe = (0, a.iv)().width,
                        We = I.Z.isOneColumnLayout(qe) || I.Z.isOneColumnSquishedLayout(qe),
                        Qe = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ee,
                        Be = i.isTrue("branded_like_preview_enabled"),
                        He = i.isTrue("subscriptions_sign_up_enabled"),
                        Ne = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Je = r.isVerifiedOrg(),
                        Xe = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, R.ZP)(),
                        { role: ni } = (0, j.l7)(),
                        { activeItem: li } = (0, G.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && ni !== $.Q.host && li?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, H.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, A.Z)(),
                        _i = l.useMemo(() => !(Ye || !ui) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, ui]),
                        mi = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), n && n();
                        },
                        fi = { icon: d.default, label: be, link: "/compose/articles", onClick: mi("article_composer") },
                        pi = { label: re, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: mi("german_transparency_item") },
                        bi = { label: ne, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: mi("imprint_item") },
                        ki = { icon: u.default, label: J, link: "/i/communitynotes", onClick: mi("birdwatch") },
                        gi = { icon: _.default, label: X, link: "/i/bookmarks", onClick: mi("bookmarks_overflow_item") },
                        vi = { icon: m.default, label: ee, link: "/i/branded_likes_preview", onClick: mi("branded_likes_preview_overflow_item") },
                        yi = (f.default, mi("labs_item"), { icon: p.default, label: le, link: `/${Re}/lists`, onClick: mi("lists_overflow_item") }),
                        wi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: mi("follower_requests_overflow_item") },
                        hi = { icon: k.default, label: se, link: `/${Re}`, onClick: mi("profile_overflow_item") },
                        Ci = { icon: g.default, label: "Money", link: "/i/money", onClick: mi("payments_overflow_item") },
                        Ti = { icon: v.default, label: de, link: "/i/coins", onClick: mi("twitter_coins") },
                        Zi = () => ({
                            icon: y.default,
                            label: ge,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Pe.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Pe.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: ze ? l.createElement(o.ZP, { background: "blue500" }, ve) : null,
                        }),
                        Fi = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: n } = e ? Se : {},
                                t = "UpsellButtonRenderProperties" === n?.render_properties.__typename && n.render_properties.action_label ? n.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === Se?.upsellContent?.render_properties.__typename ? Se.upsellContent.render_properties.decoration_label : null;
                            return { icon: Ke ? w.default : h.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? l.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        Li = { icon: Ke ? w.default : h.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        Si = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Ki = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Pi = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        zi = { icon: Z.default, label: ae, link: Pi ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        Oi = { icon: F.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Ui = () => ({
                            label: je ? ye : ue,
                            onClick: () => (
                                je &&
                                    Me &&
                                    Pe.get(Ce).then((e) => {
                                        const i = { ...e, [Me?.key]: !0 };
                                        Pe.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: L.default,
                            decoration: Ue && je && Me ? l.createElement(o.ZP, { background: "blue500" }, Me.label) : null,
                        }),
                        Vi = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: L.default },
                        ji = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: S.default },
                        xi = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: K.default },
                        Mi = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: P.default } : void 0,
                        Ai = Ge && c ? { label: we, onClick: mi("chat_item"), link: "/i/chat", icon: z.default, decoration: l.createElement(o.ZP, { background: "blue500" }, he) } : void 0,
                        Di = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ei = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: K.default },
                        Ii = { label: ke, onClick: mi("jobs_item"), link: "/jobs", icon: O.default },
                        Ri = [pi, bi],
                        qi = He && !Ye,
                        Wi = $e,
                        Qi = (0, V.Z)([Ai, hi, ei ? Li : void 0, oi ? Ci : void 0, qi ? Fi() : void 0, di ? Mi : void 0, Re ? yi : void 0, gi, ii ? fi : void 0, Wi ? (Je ? Vi : Ui()) : void 0, si ? Ti : void 0, Qe ? ki : void 0, Ze || Te ? wi : void 0, _i ? Zi() : void 0, zi, Ki, ri ? Ii : void 0, Di ? Ei : void 0, Oi, Si]).filter(Ie),
                        Bi = l.useContext(M.hC),
                        Hi = (0, V.Z)([Ai, D.yw.Lists > Bi && Re ? yi : void 0, D.yw.Premium > Bi && ei ? Li : void 0, D.yw.PremiumSignup > Bi && qi ? Fi() : void 0, D.yw.Bookmarks > Bi ? gi : void 0, D.yw.Payments > Bi && oi ? Ci : void 0, D.yw.Communities > Bi && di ? Mi : void 0, D.yw.Articles > Bi && Xe ? fi : void 0, D.yw.CommunityNotes > Bi && Qe ? ki : void 0, D.yw.Analytics > Bi && _i ? Zi() : void 0, zi, D.yw.VerifiedOrgDash > Bi && Wi && Je ? Vi : void 0, (((!Je || r.isLegacyVerifiedOrg()) && D.yw.VerifiedOrgSignup > Bi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Ui() : void 0, si ? Ti : void 0, Be ? vi : void 0, Ze || Te ? wi : void 0, Ki, D.yw.Jobs > Bi && ri ? Ii : void 0, void 0, ti ? ji : void 0, ai ? xi : void 0, Di ? Ei : void 0, Oi]).filter(Ie);
                    return (0, R.ZP)() ? ((Fe = Fe.concat(Hi)), Ne && We && (Le = Ri)) : ((Fe = Fe.concat(Qi)), Ne && (Le = Ri)), { coreItems: Fe, countrySpecificItems: Le };
                };
        },
        206962: (e, i, n) => {
            n.d(i, { Z: () => l });
            const l = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        16222: (e, i, n) => {
            function l(e, i) {
                try {
                    return e();
                } catch (e) {
                    return i(e);
                }
            }
            n.d(i, { o: () => l });
        },
        477403: (e, i, n) => {
            n.d(i, { eY: () => _, si: () => k, vC: () => u });
            n(543673), n(240753), n(128399);
            var l = n(395337),
                t = n(202784),
                a = (n(585488), n(516951)),
                s = n(952793),
                o = n(16222),
                r = n(125363),
                c = n(919022),
                d = n(535338);
            function u(e) {
                return (0, r.v9)(_);
            }
            function _(e) {
                return (function (e) {
                    if (!e) return;
                    const i = (0, o.o)(() => new URL(e), a.Z);
                    if (!i || !m.includes(i.host)) return;
                    const n = i.pathname.slice(1).toLowerCase();
                    return f[n];
                })(c.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const m = ["twitter.com", "x.com"],
                f = { xai: "1661523610111193088" },
                p = Object.values(f),
                b = l.Z;
            function k() {
                const e = (0, d.p)(b, {}),
                    i = (0, s.hC)("spaces_conference_enabled");
                return t.useMemo(() => {
                    const n = e.affiliations?.affiliated_account_ids_results,
                        l = (
                            n?.flatMap(({ rest_id: e, result: i }) => {
                                if ("User" !== i?.__typename) return [];
                                return [{ name: i.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => p.includes(e));
                    return i && !l.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...l] : l;
                }, [e.affiliations?.affiliated_account_ids_results, i]);
            }
        },
        256260: (e, i, n) => {
            n.r(i), n.d(i, { default: () => r });
            var l = n(202784),
                t = n(890601),
                a = n(783427),
                s = n(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M10 10c2.209 0 4-1.79 4-4s-1.791-4-4-4-4 1.79-4 4 1.791 4 4 4zm0-6c1.105 0 2 .9 2 2s-.895 2-2 2-2-.9-2-2 .895-2 2-2zm5.863 9.44C14.373 11.85 12.352 11 10 11s-4.373.85-5.863 2.44c-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46zM5.596 14.81C6.682 13.65 8.162 13 10 13s3.318.65 4.404 1.81c.921.978 1.602 2.388 1.939 4.19H3.657c.337-1.802 1.018-3.212 1.939-4.19zM24 10h-4.583l1.79 1.79-1.414 1.42-3.5-3.5-.707-.71.707-.71 3.5-3.5 1.414 1.42L19.417 8H24v2z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.e0342eaa.js.map
