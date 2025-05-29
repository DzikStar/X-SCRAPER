"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal", "icons/IconDraw-js", "icons/IconHeartBurst-js"],
    {
        395337: (e, i, l) => {
            l.d(i, { Z: () => r });
            var n,
                t,
                a,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const r = o;
        },
        879526: (e, i, l) => {
            l.d(i, { O: () => Te });
            var n = l(202784),
                t = l(400752),
                a = l(537392),
                s = l(688715),
                o = l(868634),
                r = l(111677),
                c = l.n(r),
                d = l(1753),
                u = l(625271),
                _ = l(883069),
                m = l(279849),
                f = l(197318),
                p = l(689582),
                b = l(256260),
                g = l(511323),
                v = l(80361),
                k = l(856151),
                y = l(53674),
                h = l(792618),
                w = l(520913),
                C = l(297896),
                T = l(175564),
                Z = l(748138),
                z = l(698891),
                F = l(68290),
                L = l(707570),
                M = l(839),
                S = l(593875),
                K = l(829110),
                P = l(720930),
                V = l(516951),
                E = l(450681),
                x = l(400915),
                D = l(420182),
                O = l(997657),
                U = l(306114),
                j = l(279918),
                I = l(722517),
                A = l(880647),
                R = l(655352),
                q = l(125363),
                B = l(466036),
                H = l(390387),
                Q = l(76920),
                W = l(477403),
                N = l(104119),
                $ = l(484633),
                G = l(381904),
                Y = l(206962);
            const J = c().a15648a4,
                X = c().i3145aa0,
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
                de = c().j087774e,
                ue = c().e2eef3c2,
                _e = c().b55d8a78,
                me = c().e5323e36,
                fe = c().h02a6fe6,
                pe = c().f75d1806,
                be = c().a5a30af0,
                ge = c().b007440a,
                ve = c().a5cbc19a,
                ke = c().d13d697c,
                ye = c().j0e2cfa8,
                he = c().h5e38204,
                we = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: l = V.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let ze = [],
                        Fe = [];
                    const Le = (0, I.Z)("PremiumNav"),
                        Me = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Se = (0, t.Dv)(D.lZ),
                        [Ke, Pe] = n.useState(!1),
                        [Ve, Ee] = n.useState(!1),
                        xe = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        De = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Oe = (0, N.Md)(De);
                    n.useEffect(() => {
                        Oe &&
                            Se.get(Ce).then((e) => {
                                Pe(!e?.analyticsClickedV2), Ee(!e?.[Oe?.key]);
                            });
                    }, [Se, Oe]);
                    const Ue = (0, q.I0)();
                    n.useEffect(() => {
                        c?.protected && Ue(B.GE());
                    }, [Ue, c]);
                    const je = (0, Q.Zy)();
                    je.size > 0 && je.add("/settings");
                    const Ie = (0, q.v9)(H.Lz),
                        Ae = ({ link: e }) => !(Ie && (("string" == typeof e && ((e.startsWith("/settings") && !je.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        qe = (0, a.iv)().width,
                        Be = A.Z.isOneColumnLayout(qe) || A.Z.isOneColumnSquishedLayout(qe),
                        He = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ie,
                        Qe = i.isTrue("branded_like_preview_enabled"),
                        We = i.isTrue("subscriptions_sign_up_enabled"),
                        Ne = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Je = r.isVerifiedOrg(),
                        Xe = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, R.ZP)(),
                        { role: li } = (0, x.l7)(),
                        { activeItem: ni } = (0, G.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && li !== $.Q.host && ni?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, W.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, U.Z)(),
                        _i = n.useMemo(() => !(Ye || !ui) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, ui]),
                        mi = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), l && l();
                        },
                        fi = { icon: d.default, label: be, link: "/compose/articles", onClick: mi("article_composer") },
                        pi = { label: re, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: mi("german_transparency_item") },
                        bi = { label: le, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: mi("imprint_item") },
                        gi = { icon: u.default, label: J, link: "/i/communitynotes", onClick: mi("birdwatch") },
                        vi = { icon: _.default, label: X, link: "/i/bookmarks", onClick: mi("bookmarks_overflow_item") },
                        ki = { icon: m.default, label: ee, link: "/i/branded_likes_preview", onClick: mi("branded_likes_preview_overflow_item") },
                        yi = (f.default, mi("labs_item"), { icon: p.default, label: ne, link: `/${Re}/lists`, onClick: mi("lists_overflow_item") }),
                        hi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: mi("follower_requests_overflow_item") },
                        wi = { icon: g.default, label: se, link: `/${Re}`, onClick: mi("profile_overflow_item") },
                        Ci = { icon: v.default, label: "Money", link: "/i/money", onClick: mi("payments_overflow_item") },
                        Ti = { icon: k.default, label: de, link: "/i/coins", onClick: mi("twitter_coins") },
                        Zi = () => ({
                            icon: y.default,
                            label: ve,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Se.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Se.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: Ke ? n.createElement(o.ZP, { background: "blue500" }, ke) : null,
                        }),
                        zi = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: l } = e ? Le : {},
                                t = "UpsellButtonRenderProperties" === l?.render_properties.__typename && l.render_properties.action_label ? l.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === Le?.upsellContent?.render_properties.__typename ? Le.upsellContent.render_properties.decoration_label : null;
                            return { icon: Me ? h.default : w.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? n.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        Fi = { icon: Me ? h.default : w.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        Li = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Mi = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Si = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Ki = { icon: Z.default, label: ae, link: Si ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        Pi = { icon: z.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Vi = () => ({
                            label: xe ? ye : ue,
                            onClick: () => (
                                xe &&
                                    Oe &&
                                    Se.get(Ce).then((e) => {
                                        const i = { ...e, [Oe?.key]: !0 };
                                        Se.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: F.default,
                            decoration: Ve && xe && Oe ? n.createElement(o.ZP, { background: "blue500" }, Oe.label) : null,
                        }),
                        Ei = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: F.default },
                        xi = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: L.default },
                        Di = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: M.default },
                        Oi = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        Ui = Ge && c ? { label: he, onClick: mi("chat_item"), link: "/i/chat", icon: K.default, decoration: n.createElement(o.ZP, { background: "blue500" }, we) } : void 0,
                        ji = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ii = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: M.default },
                        Ai = { label: ge, onClick: mi("jobs_item"), link: "/jobs", icon: P.default },
                        Ri = [pi, bi],
                        qi = We && !Ye,
                        Bi = $e,
                        Hi = (0, E.Z)([Ui, wi, ei ? Fi : void 0, oi ? Ci : void 0, qi ? zi() : void 0, di ? Oi : void 0, Re ? yi : void 0, vi, ii ? fi : void 0, Bi ? (Je ? Ei : Vi()) : void 0, si ? Ti : void 0, He ? gi : void 0, Ze || Te ? hi : void 0, _i ? Zi() : void 0, Ki, Mi, ri ? Ai : void 0, ji ? Ii : void 0, Pi, Li]).filter(Ae),
                        Qi = n.useContext(O.hC),
                        Wi = (0, E.Z)([Ui, j.yw.Lists > Qi && Re ? yi : void 0, j.yw.Premium > Qi && ei ? Fi : void 0, j.yw.PremiumSignup > Qi && qi ? zi() : void 0, j.yw.Bookmarks > Qi ? vi : void 0, j.yw.Payments > Qi && oi ? Ci : void 0, j.yw.Communities > Qi && di ? Oi : void 0, j.yw.Articles > Qi && Xe ? fi : void 0, j.yw.CommunityNotes > Qi && He ? gi : void 0, j.yw.Analytics > Qi && _i ? Zi() : void 0, Ki, j.yw.VerifiedOrgDash > Qi && Bi && Je ? Ei : void 0, (((!Je || r.isLegacyVerifiedOrg()) && j.yw.VerifiedOrgSignup > Qi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Vi() : void 0, si ? Ti : void 0, Qe ? ki : void 0, Ze || Te ? hi : void 0, Mi, j.yw.Jobs > Qi && ri ? Ai : void 0, void 0, ti ? xi : void 0, ai ? Di : void 0, ji ? Ii : void 0, Pi]).filter(Ae);
                    return (0, R.ZP)() ? ((ze = ze.concat(Wi)), Ne && Be && (Fe = Ri)) : ((ze = ze.concat(Hi)), Ne && (Fe = Ri)), { coreItems: ze, countrySpecificItems: Fe };
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
            l.d(i, { eY: () => _, si: () => g, vC: () => u });
            l(543673), l(240753), l(128399);
            var n = l(395337),
                t = l(202784),
                a = (l(585488), l(516951)),
                s = l(952793),
                o = l(16222),
                r = l(125363),
                c = l(919022),
                d = l(535338);
            function u(e) {
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
            function g() {
                const e = (0, d.p)(b, {}),
                    i = (0, s.hC)("spaces_conference_enabled");
                return t.useMemo(() => {
                    const l = e.affiliations?.affiliated_account_ids_results,
                        n = (
                            l?.flatMap(({ rest_id: e, result: i }) => {
                                if ("User" !== i?.__typename) return [];
                                return [{ name: i.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => p.includes(e));
                    return i && !n.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...n] : n;
                }, [e.affiliations?.affiliated_account_ids_results, i]);
            }
        },
        197318: (e, i, l) => {
            l.r(i), l.d(i, { default: () => r });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                s = l(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M8.7 2.4c.7-.6 1.5-1 2.3-1.4.5-.2 1.1-.3 1.7-.3.4 0 .8.1 1.1.3s.7.4.9.7c.2.3.3.6.4 1 .1.4.1.7 0 1.1-.1.5-.2 1-.4 1.4-.4.8-.8 1.5-1.3 2.2-1.8 2.8-3.9 5.1-5.7 7.7-.4.6-.9 1.3-1.3 1.9-.2.3-.4.6-.6 1.1-.3.6.2.8.8.5 2.3-1.1 10.3-11.2 12.8-9 .3.3 1.7 1.5-1.3 5.8-.4.6-.7 1.1-1.1 1.6-.5.7-1.1 1.5-1.6 2.3-.4.6-.7 1.2-1 1.9-.1.2-.2.6 0 .8.4.4 1.9-.7 3.7-2.4l3.2-3.2c.5-.5 1.2.1.7.7-1.6 1.9-5.5 6.4-7.5 6.3-.4 0-.7-.1-1-.3s-.5-.5-.6-.8c-.1-.2-.2-.7.1-1.5.3-.8.6-1.6 1.1-2.3.5-.8 1-1.7 1.5-2.4.3-.5.7-1.1 1-1.6.3-.5.8-1.4 1.2-2 .2-.3.6-.9.2-1.2-.2-.2-.5-.2-1.3.6 0 0-6.6 6.7-9 8.4-1.3.9-2.8 1.2-3.6.4-1-.9-1.6-2.5 1.5-6.4 3.1-3.8 6.5-8.7 6.8-9.6.1-.2.1-.4.1-.5.1-.5-.5-.9-1-.7-.3.2-.8.5-1.6 1.2-2.3 2-4.3 4.3-6.1 6.8-.1.2-.3.3-.5.4s-.4.2-.6.2c-.4.1-.8-.1-1.2-.3-.3-.2-.5-.6-.6-1v-.6c.1-.2.1-.4.3-.5 2.7-2.9 5-5.2 7.5-7.3z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
        279849: (e, i, l) => {
            l.r(i), l.d(i, { default: () => r });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                s = l(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
        98440: (e, i, l) => {
            l.r(i), l.d(i, { default: () => r });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                s = l(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.210d4fda.js.map
