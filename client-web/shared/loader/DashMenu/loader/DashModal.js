"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal", "icons/IconDraw-js", "icons/IconHeartBurst-js"],
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
                z = n(68290),
                L = n(707570),
                M = n(839),
                S = n(593875),
                K = n(829110),
                P = n(720930),
                V = n(516951),
                O = n(450681),
                U = n(400915),
                j = n(420182),
                x = n(997657),
                D = n(306114),
                E = n(279918),
                I = n(722517),
                A = n(880647),
                R = n(655352),
                q = n(125363),
                B = n(466036),
                H = n(390387),
                W = n(76920),
                Q = n(477403),
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
                ge = c().b007440a,
                ke = c().a5cbc19a,
                ve = c().d13d697c,
                ye = c().j0e2cfa8,
                he = c().h5e38204,
                we = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: n = V.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Fe = [],
                        ze = [];
                    const Le = (0, I.Z)("PremiumNav"),
                        Me = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Se = (0, t.Dv)(j.lZ),
                        [Ke, Pe] = l.useState(!1),
                        [Ve, Oe] = l.useState(!1),
                        Ue = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        je = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        xe = (0, N.Md)(je);
                    l.useEffect(() => {
                        xe &&
                            Se.get(Ce).then((e) => {
                                Pe(!e?.analyticsClickedV2), Oe(!e?.[xe?.key]);
                            });
                    }, [Se, xe]);
                    const De = (0, q.I0)();
                    l.useEffect(() => {
                        c?.protected && De(B.GE());
                    }, [De, c]);
                    const Ee = (0, W.Zy)();
                    Ee.size > 0 && Ee.add("/settings");
                    const Ie = (0, q.v9)(H.Lz),
                        Ae = ({ link: e }) => !(Ie && (("string" == typeof e && ((e.startsWith("/settings") && !Ee.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        qe = (0, a.iv)().width,
                        Be = A.Z.isOneColumnLayout(qe) || A.Z.isOneColumnSquishedLayout(qe),
                        He = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ie,
                        We = i.isTrue("branded_like_preview_enabled"),
                        Qe = i.isTrue("subscriptions_sign_up_enabled"),
                        Ne = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Je = r.isVerifiedOrg(),
                        Xe = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, R.ZP)(),
                        { role: ni } = (0, U.l7)(),
                        { activeItem: li } = (0, G.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && ni !== $.Q.host && li?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, Q.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, D.Z)(),
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
                                (Se.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Se.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: Ke ? l.createElement(o.ZP, { background: "blue500" }, ve) : null,
                        }),
                        Fi = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: n } = e ? Le : {},
                                t = "UpsellButtonRenderProperties" === n?.render_properties.__typename && n.render_properties.action_label ? n.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === Le?.upsellContent?.render_properties.__typename ? Le.upsellContent.render_properties.decoration_label : null;
                            return { icon: Me ? h.default : w.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? l.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        zi = { icon: Me ? h.default : w.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        Li = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Mi = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Si = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Ki = { icon: Z.default, label: ae, link: Si ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        Pi = { icon: F.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Vi = () => ({
                            label: Ue ? ye : ue,
                            onClick: () => (
                                Ue &&
                                    xe &&
                                    Se.get(Ce).then((e) => {
                                        const i = { ...e, [xe?.key]: !0 };
                                        Se.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: z.default,
                            decoration: Ve && Ue && xe ? l.createElement(o.ZP, { background: "blue500" }, xe.label) : null,
                        }),
                        Oi = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: z.default },
                        Ui = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: L.default },
                        ji = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: M.default },
                        xi = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        Di = Ge && c ? { label: he, onClick: mi("chat_item"), link: "/i/chat", icon: K.default, decoration: l.createElement(o.ZP, { background: "blue500" }, we) } : void 0,
                        Ei = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ii = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: M.default },
                        Ai = { label: ge, onClick: mi("jobs_item"), link: "/jobs", icon: P.default },
                        Ri = [pi, bi],
                        qi = Qe && !Ye,
                        Bi = $e,
                        Hi = (0, O.Z)([Di, wi, ei ? zi : void 0, oi ? Ci : void 0, qi ? Fi() : void 0, di ? xi : void 0, Re ? yi : void 0, ki, ii ? fi : void 0, Bi ? (Je ? Oi : Vi()) : void 0, si ? Ti : void 0, He ? gi : void 0, Ze || Te ? hi : void 0, _i ? Zi() : void 0, Ki, Mi, ri ? Ai : void 0, Ei ? Ii : void 0, Pi, Li]).filter(Ae),
                        Wi = l.useContext(x.hC),
                        Qi = (0, O.Z)([Di, E.yw.Lists > Wi && Re ? yi : void 0, E.yw.Premium > Wi && ei ? zi : void 0, E.yw.PremiumSignup > Wi && qi ? Fi() : void 0, E.yw.Bookmarks > Wi ? ki : void 0, E.yw.Payments > Wi && oi ? Ci : void 0, E.yw.Communities > Wi && di ? xi : void 0, E.yw.Articles > Wi && Xe ? fi : void 0, E.yw.CommunityNotes > Wi && He ? gi : void 0, E.yw.Analytics > Wi && _i ? Zi() : void 0, Ki, E.yw.VerifiedOrgDash > Wi && Bi && Je ? Oi : void 0, (((!Je || r.isLegacyVerifiedOrg()) && E.yw.VerifiedOrgSignup > Wi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Vi() : void 0, si ? Ti : void 0, We ? vi : void 0, Ze || Te ? hi : void 0, Mi, E.yw.Jobs > Wi && ri ? Ai : void 0, void 0, ti ? Ui : void 0, ai ? ji : void 0, Ei ? Ii : void 0, Pi]).filter(Ae);
                    return (0, R.ZP)() ? ((Fe = Fe.concat(Qi)), Ne && Be && (ze = Ri)) : ((Fe = Fe.concat(Hi)), Ne && (ze = Ri)), { coreItems: Fe, countrySpecificItems: ze };
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
        279849: (e, i, n) => {
            n.r(i), n.d(i, { default: () => r });
            var l = n(202784),
                t = n(890601),
                a = n(783427),
                s = n(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.33c040ca.js.map
