"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal", "icons/IconSound-js"],
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
                V = n(829110),
                z = n(720930),
                O = n(516951),
                U = n(450681),
                M = n(400915),
                j = n(420182),
                x = n(997657),
                D = n(306114),
                E = n(279918),
                A = n(722517),
                I = n(880647),
                R = n(655352),
                q = n(125363),
                W = n(466036),
                H = n(390387),
                Q = n(76920),
                B = n(477403),
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
                we = c().h5e38204,
                he = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: n = O.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Fe = [],
                        Le = [];
                    const Se = (0, A.Z)("PremiumNav"),
                        Ke = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Pe = (0, t.Dv)(j.lZ),
                        [Ve, ze] = l.useState(!1),
                        [Oe, Ue] = l.useState(!1),
                        Me = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        je = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        xe = (0, N.Md)(je);
                    l.useEffect(() => {
                        xe &&
                            Pe.get(Ce).then((e) => {
                                ze(!e?.analyticsClickedV2), Ue(!e?.[xe?.key]);
                            });
                    }, [Pe, xe]);
                    const De = (0, q.I0)();
                    l.useEffect(() => {
                        c?.protected && De(W.GE());
                    }, [De, c]);
                    const Ee = (0, Q.Zy)();
                    Ee.size > 0 && Ee.add("/settings");
                    const Ae = (0, q.v9)(H.Lz),
                        Ie = ({ link: e }) => !(Ae && (("string" == typeof e && ((e.startsWith("/settings") && !Ee.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        qe = (0, a.iv)().width,
                        We = I.Z.isOneColumnLayout(qe) || I.Z.isOneColumnSquishedLayout(qe),
                        He = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ae,
                        Qe = i.isTrue("branded_like_preview_enabled"),
                        Be = i.isTrue("subscriptions_sign_up_enabled"),
                        Ne = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Je = r.isVerifiedOrg(),
                        Xe = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, R.ZP)(),
                        { role: ni } = (0, M.l7)(),
                        { activeItem: li } = (0, G.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && ni !== $.Q.host && li?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, B.vC)(),
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
                        wi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: mi("follower_requests_overflow_item") },
                        hi = { icon: g.default, label: se, link: `/${Re}`, onClick: mi("profile_overflow_item") },
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
                                { upsellContent: n } = e ? Se : {},
                                t = "UpsellButtonRenderProperties" === n?.render_properties.__typename && n.render_properties.action_label ? n.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === Se?.upsellContent?.render_properties.__typename ? Se.upsellContent.render_properties.decoration_label : null;
                            return { icon: Ke ? w.default : h.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? l.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        Li = { icon: Ke ? w.default : h.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        Si = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Ki = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Pi = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Vi = { icon: Z.default, label: ae, link: Pi ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        zi = { icon: F.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Oi = () => ({
                            label: Me ? ye : ue,
                            onClick: () => (
                                Me &&
                                    xe &&
                                    Pe.get(Ce).then((e) => {
                                        const i = { ...e, [xe?.key]: !0 };
                                        Pe.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: L.default,
                            decoration: Oe && Me && xe ? l.createElement(o.ZP, { background: "blue500" }, xe.label) : null,
                        }),
                        Ui = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: L.default },
                        Mi = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: S.default },
                        ji = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: K.default },
                        xi = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: P.default } : void 0,
                        Di = Ge && c ? { label: we, onClick: mi("chat_item"), link: "/i/chat", icon: V.default, decoration: l.createElement(o.ZP, { background: "blue500" }, he) } : void 0,
                        Ei = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ai = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: K.default },
                        Ii = { label: ge, onClick: mi("jobs_item"), link: "/jobs", icon: z.default },
                        Ri = [pi, bi],
                        qi = Be && !Ye,
                        Wi = $e,
                        Hi = (0, U.Z)([Di, hi, ei ? Li : void 0, oi ? Ci : void 0, qi ? Fi() : void 0, di ? xi : void 0, Re ? yi : void 0, ki, ii ? fi : void 0, Wi ? (Je ? Ui : Oi()) : void 0, si ? Ti : void 0, He ? gi : void 0, Ze || Te ? wi : void 0, _i ? Zi() : void 0, Vi, Ki, ri ? Ii : void 0, Ei ? Ai : void 0, zi, Si]).filter(Ie),
                        Qi = l.useContext(x.hC),
                        Bi = (0, U.Z)([Di, E.yw.Lists > Qi && Re ? yi : void 0, E.yw.Premium > Qi && ei ? Li : void 0, E.yw.PremiumSignup > Qi && qi ? Fi() : void 0, E.yw.Bookmarks > Qi ? ki : void 0, E.yw.Payments > Qi && oi ? Ci : void 0, E.yw.Communities > Qi && di ? xi : void 0, E.yw.Articles > Qi && Xe ? fi : void 0, E.yw.CommunityNotes > Qi && He ? gi : void 0, E.yw.Analytics > Qi && _i ? Zi() : void 0, Vi, E.yw.VerifiedOrgDash > Qi && Wi && Je ? Ui : void 0, (((!Je || r.isLegacyVerifiedOrg()) && E.yw.VerifiedOrgSignup > Qi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Oi() : void 0, si ? Ti : void 0, Qe ? vi : void 0, Ze || Te ? wi : void 0, Ki, E.yw.Jobs > Qi && ri ? Ii : void 0, void 0, ti ? Mi : void 0, ai ? ji : void 0, Ei ? Ai : void 0, zi]).filter(Ie);
                    return (0, R.ZP)() ? ((Fe = Fe.concat(Bi)), Ne && We && (Le = Ri)) : ((Fe = Fe.concat(Hi)), Ne && (Le = Ri)), { coreItems: Fe, countrySpecificItems: Le };
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
        926628: (e, i, n) => {
            n.r(i), n.d(i, { default: () => r });
            var l = n(202784),
                t = n(890601),
                a = n(783427),
                s = n(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.92779dea.js.map
