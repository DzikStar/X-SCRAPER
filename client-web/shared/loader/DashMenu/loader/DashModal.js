"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal", "icons/IconCameraVideoStroke-js", "icons/IconDraw-js"],
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
                g = n(511323),
                k = n(80361),
                v = n(856151),
                y = n(53674),
                h = n(792618),
                w = n(520913),
                C = n(297896),
                T = n(175564),
                Z = n(748138),
                F = n(698891),
                S = n(68290),
                L = n(707570),
                K = n(839),
                P = n(593875),
                V = n(829110),
                z = n(720930),
                O = n(516951),
                U = n(450681),
                j = n(400915),
                x = n(420182),
                D = n(997657),
                E = n(306114),
                M = n(279918),
                I = n(722517),
                A = n(880647),
                R = n(655352),
                q = n(125363),
                B = n(466036),
                Q = n(390387),
                W = n(76920),
                N = n(477403),
                $ = n(104119),
                G = n(484633),
                H = n(381904),
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
                ge = c().b007440a,
                ke = c().a5cbc19a,
                ve = c().d13d697c,
                ye = c().j0e2cfa8,
                he = c().h5e38204,
                we = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: n = O.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Fe = [],
                        Se = [];
                    const Le = (0, I.Z)("PremiumNav"),
                        Ke = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Pe = (0, t.Dv)(x.lZ),
                        [Ve, ze] = l.useState(!1),
                        [Oe, Ue] = l.useState(!1),
                        je = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        xe = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        De = (0, $.Md)(xe);
                    l.useEffect(() => {
                        De &&
                            Pe.get(Ce).then((e) => {
                                ze(!e?.analyticsClickedV2), Ue(!e?.[De?.key]);
                            });
                    }, [Pe, De]);
                    const Ee = (0, q.I0)();
                    l.useEffect(() => {
                        c?.protected && Ee(B.GE());
                    }, [Ee, c]);
                    const Me = (0, W.Zy)();
                    Me.size > 0 && Me.add("/settings");
                    const Ie = (0, q.v9)(Q.Lz),
                        Ae = ({ link: e }) => !(Ie && (("string" == typeof e && ((e.startsWith("/settings") && !Me.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        qe = (0, a.iv)().width,
                        Be = A.Z.isOneColumnLayout(qe) || A.Z.isOneColumnSquishedLayout(qe),
                        Qe = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ie,
                        We = i.isTrue("branded_like_preview_enabled"),
                        Ne = i.isTrue("subscriptions_sign_up_enabled"),
                        $e = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        Ge = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        He = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Je = r.isVerifiedOrg(),
                        Xe = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, R.ZP)(),
                        { role: ni } = (0, j.l7)(),
                        { activeItem: li } = (0, H.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && ni !== G.Q.host && li?.type !== G.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, N.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, E.Z)(),
                        _i = l.useMemo(() => !(Ye || !ui) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, ui]),
                        mi = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), n && n();
                        },
                        fi = { icon: d.default, label: be, link: "/compose/articles", onClick: mi("article_composer") },
                        pi = { label: re, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: mi("german_transparency_item") },
                        bi = { label: ne, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: mi("imprint_item") },
                        gi = { icon: u.default, label: J, link: "/i/communitynotes", onClick: mi("birdwatch") },
                        ki = { icon: _.default, label: X, link: "/i/bookmarks", onClick: mi("bookmarks_overflow_item") },
                        vi = { icon: m.default, label: ee, link: "/i/branded_likes_preview", onClick: mi("branded_likes_preview_overflow_item") },
                        yi = (f.default, mi("labs_item"), { icon: p.default, label: le, link: `/${Re}/lists`, onClick: mi("lists_overflow_item") }),
                        hi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: mi("follower_requests_overflow_item") },
                        wi = { icon: g.default, label: se, link: `/${Re}`, onClick: mi("profile_overflow_item") },
                        Ci = { icon: k.default, label: "Money", link: "/i/money", onClick: mi("payments_overflow_item") },
                        Ti = { icon: v.default, label: de, link: "/i/coins", onClick: mi("twitter_coins") },
                        Zi = () => ({
                            icon: y.default,
                            label: ke,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Pe.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Pe.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: Ve ? l.createElement(o.ZP, { background: "blue500" }, ve) : null,
                        }),
                        Fi = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: n } = e ? Le : {},
                                t = "UpsellButtonRenderProperties" === n?.render_properties.__typename && n.render_properties.action_label ? n.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === Le?.upsellContent?.render_properties.__typename ? Le.upsellContent.render_properties.decoration_label : null;
                            return { icon: Ke ? h.default : w.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? l.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        Si = { icon: Ke ? h.default : w.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        Li = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Ki = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Pi = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Vi = { icon: Z.default, label: ae, link: Pi ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        zi = { icon: F.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Oi = () => ({
                            label: je ? ye : ue,
                            onClick: () => (
                                je &&
                                    De &&
                                    Pe.get(Ce).then((e) => {
                                        const i = { ...e, [De?.key]: !0 };
                                        Pe.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: S.default,
                            decoration: Oe && je && De ? l.createElement(o.ZP, { background: "blue500" }, De.label) : null,
                        }),
                        Ui = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: S.default },
                        ji = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: L.default },
                        xi = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: K.default },
                        Di = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: P.default } : void 0,
                        Ei = He && c ? { label: he, onClick: mi("chat_item"), link: "/i/chat", icon: V.default, decoration: l.createElement(o.ZP, { background: "blue500" }, we) } : void 0,
                        Mi = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ii = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: K.default },
                        Ai = { label: ge, onClick: mi("jobs_item"), link: "/jobs", icon: z.default },
                        Ri = [pi, bi],
                        qi = Ne && !Ye,
                        Bi = Ge,
                        Qi = (0, U.Z)([Ei, wi, ei ? Si : void 0, oi ? Ci : void 0, qi ? Fi() : void 0, di ? Di : void 0, Re ? yi : void 0, ki, ii ? fi : void 0, Bi ? (Je ? Ui : Oi()) : void 0, si ? Ti : void 0, Qe ? gi : void 0, Ze || Te ? hi : void 0, _i ? Zi() : void 0, Vi, Ki, ri ? Ai : void 0, Mi ? Ii : void 0, zi, Li]).filter(Ae),
                        Wi = l.useContext(D.hC),
                        Ni = (0, U.Z)([Ei, M.yw.Lists > Wi && Re ? yi : void 0, M.yw.Premium > Wi && ei ? Si : void 0, M.yw.PremiumSignup > Wi && qi ? Fi() : void 0, M.yw.Bookmarks > Wi ? ki : void 0, M.yw.Payments > Wi && oi ? Ci : void 0, M.yw.Communities > Wi && di ? Di : void 0, M.yw.Articles > Wi && Xe ? fi : void 0, M.yw.CommunityNotes > Wi && Qe ? gi : void 0, M.yw.Analytics > Wi && _i ? Zi() : void 0, Vi, M.yw.VerifiedOrgDash > Wi && Bi && Je ? Ui : void 0, (((!Je || r.isLegacyVerifiedOrg()) && M.yw.VerifiedOrgSignup > Wi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Oi() : void 0, si ? Ti : void 0, We ? vi : void 0, Ze || Te ? hi : void 0, Ki, M.yw.Jobs > Wi && ri ? Ai : void 0, void 0, ti ? ji : void 0, ai ? xi : void 0, Mi ? Ii : void 0, zi]).filter(Ae);
                    return (0, R.ZP)() ? ((Fe = Fe.concat(Ni)), $e && Be && (Se = Ri)) : ((Fe = Fe.concat(Qi)), $e && (Se = Ri)), { coreItems: Fe, countrySpecificItems: Se };
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
            n.d(i, { eY: () => _, si: () => g, vC: () => u });
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
            function g() {
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
        839: (e, i, n) => {
            n.r(i), n.d(i, { default: () => r });
            var l = n(202784),
                t = n(890601),
                a = n(783427),
                s = n(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
        197318: (e, i, n) => {
            n.r(i), n.d(i, { default: () => r });
            var l = n(202784),
                t = n(890601),
                a = n(783427),
                s = n(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M8.7 2.4c.7-.6 1.5-1 2.3-1.4.5-.2 1.1-.3 1.7-.3.4 0 .8.1 1.1.3s.7.4.9.7c.2.3.3.6.4 1 .1.4.1.7 0 1.1-.1.5-.2 1-.4 1.4-.4.8-.8 1.5-1.3 2.2-1.8 2.8-3.9 5.1-5.7 7.7-.4.6-.9 1.3-1.3 1.9-.2.3-.4.6-.6 1.1-.3.6.2.8.8.5 2.3-1.1 10.3-11.2 12.8-9 .3.3 1.7 1.5-1.3 5.8-.4.6-.7 1.1-1.1 1.6-.5.7-1.1 1.5-1.6 2.3-.4.6-.7 1.2-1 1.9-.1.2-.2.6 0 .8.4.4 1.9-.7 3.7-2.4l3.2-3.2c.5-.5 1.2.1.7.7-1.6 1.9-5.5 6.4-7.5 6.3-.4 0-.7-.1-1-.3s-.5-.5-.6-.8c-.1-.2-.2-.7.1-1.5.3-.8.6-1.6 1.1-2.3.5-.8 1-1.7 1.5-2.4.3-.5.7-1.1 1-1.6.3-.5.8-1.4 1.2-2 .2-.3.6-.9.2-1.2-.2-.2-.5-.2-1.3.6 0 0-6.6 6.7-9 8.4-1.3.9-2.8 1.2-3.6.4-1-.9-1.6-2.5 1.5-6.4 3.1-3.8 6.5-8.7 6.8-9.6.1-.2.1-.4.1-.5.1-.5-.5-.9-1-.7-.3.2-.8.5-1.6 1.2-2.3 2-4.3 4.3-6.1 6.8-.1.2-.3.3-.5.4s-.4.2-.6.2c-.4.1-.8-.1-1.2-.3-.3-.2-.5-.6-.6-1v-.6c.1-.2.1-.4.3-.5 2.7-2.9 5-5.2 7.5-7.3z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.669d5d0a.js.map
