"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal", "icons/IconFeedback-js", "icons/IconFollowArrowLeftStroke-js"],
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
                k = l(80361),
                v = l(856151),
                y = l(53674),
                h = l(792618),
                w = l(520913),
                C = l(297896),
                T = l(175564),
                Z = l(748138),
                F = l(698891),
                L = l(68290),
                z = l(707570),
                S = l(839),
                K = l(593875),
                P = l(829110),
                E = l(720930),
                M = l(516951),
                x = l(450681),
                O = l(400915),
                U = l(420182),
                j = l(997657),
                D = l(306114),
                V = l(279918),
                A = l(722517),
                I = l(880647),
                R = l(655352),
                q = l(125363),
                B = l(466036),
                Q = l(390387),
                W = l(76920),
                H = l(477403),
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
                ke = c().a5cbc19a,
                ve = c().d13d697c,
                ye = c().j0e2cfa8,
                he = c().h5e38204,
                we = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: l = M.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Fe = [],
                        Le = [];
                    const ze = (0, A.Z)("PremiumNav"),
                        Se = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Ke = (0, t.Dv)(U.lZ),
                        [Pe, Ee] = n.useState(!1),
                        [Me, xe] = n.useState(!1),
                        Oe = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ue = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        je = (0, N.Md)(Ue);
                    n.useEffect(() => {
                        je &&
                            Ke.get(Ce).then((e) => {
                                Ee(!e?.analyticsClickedV2), xe(!e?.[je?.key]);
                            });
                    }, [Ke, je]);
                    const De = (0, q.I0)();
                    n.useEffect(() => {
                        c?.protected && De(B.GE());
                    }, [De, c]);
                    const Ve = (0, W.Zy)();
                    Ve.size > 0 && Ve.add("/settings");
                    const Ae = (0, q.v9)(Q.Lz),
                        Ie = ({ link: e }) => !(Ae && (("string" == typeof e && ((e.startsWith("/settings") && !Ve.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        qe = (0, a.iv)().width,
                        Be = I.Z.isOneColumnLayout(qe) || I.Z.isOneColumnSquishedLayout(qe),
                        Qe = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ae,
                        We = i.isTrue("branded_like_preview_enabled"),
                        He = i.isTrue("subscriptions_sign_up_enabled"),
                        Ne = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Je = r.isVerifiedOrg(),
                        Xe = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, R.ZP)(),
                        { role: li } = (0, O.l7)(),
                        { activeItem: ni } = (0, G.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && li !== $.Q.host && ni?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, H.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, D.Z)(),
                        _i = n.useMemo(() => !(Ye || !ui) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, ui]),
                        mi = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), l && l();
                        },
                        fi = { icon: d.default, label: be, link: "/compose/articles", onClick: mi("article_composer") },
                        pi = { label: re, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: mi("german_transparency_item") },
                        bi = { label: le, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: mi("imprint_item") },
                        gi = { icon: u.default, label: J, link: "/i/communitynotes", onClick: mi("birdwatch") },
                        ki = { icon: _.default, label: X, link: "/i/bookmarks", onClick: mi("bookmarks_overflow_item") },
                        vi = { icon: m.default, label: ee, link: "/i/branded_likes_preview", onClick: mi("branded_likes_preview_overflow_item") },
                        yi = (f.default, mi("labs_item"), { icon: p.default, label: ne, link: `/${Re}/lists`, onClick: mi("lists_overflow_item") }),
                        hi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: mi("follower_requests_overflow_item") },
                        wi = { icon: g.default, label: se, link: `/${Re}`, onClick: mi("profile_overflow_item") },
                        Ci = { icon: k.default, label: "Money", link: "/i/money", onClick: mi("payments_overflow_item") },
                        Ti = { icon: v.default, label: de, link: "/i/coins", onClick: mi("twitter_coins") },
                        Zi = () => ({
                            icon: y.default,
                            label: ke,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Ke.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Ke.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: Pe ? n.createElement(o.ZP, { background: "blue500" }, ve) : null,
                        }),
                        Fi = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: l } = e ? ze : {},
                                t = "UpsellButtonRenderProperties" === l?.render_properties.__typename && l.render_properties.action_label ? l.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === ze?.upsellContent?.render_properties.__typename ? ze.upsellContent.render_properties.decoration_label : null;
                            return { icon: Se ? h.default : w.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? n.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        Li = { icon: Se ? h.default : w.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        zi = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Si = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Ki = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Pi = { icon: Z.default, label: ae, link: Ki ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        Ei = { icon: F.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Mi = () => ({
                            label: Oe ? ye : ue,
                            onClick: () => (
                                Oe &&
                                    je &&
                                    Ke.get(Ce).then((e) => {
                                        const i = { ...e, [je?.key]: !0 };
                                        Ke.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: L.default,
                            decoration: Me && Oe && je ? n.createElement(o.ZP, { background: "blue500" }, je.label) : null,
                        }),
                        xi = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: L.default },
                        Oi = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: z.default },
                        Ui = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: S.default },
                        ji = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: K.default } : void 0,
                        Di = Ge && c ? { label: he, onClick: mi("chat_item"), link: "/i/chat", icon: P.default, decoration: n.createElement(o.ZP, { background: "blue500" }, we) } : void 0,
                        Vi = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ai = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: S.default },
                        Ii = { label: ge, onClick: mi("jobs_item"), link: "/jobs", icon: E.default },
                        Ri = [pi, bi],
                        qi = He && !Ye,
                        Bi = $e,
                        Qi = (0, x.Z)([Di, wi, ei ? Li : void 0, oi ? Ci : void 0, qi ? Fi() : void 0, di ? ji : void 0, Re ? yi : void 0, ki, ii ? fi : void 0, Bi ? (Je ? xi : Mi()) : void 0, si ? Ti : void 0, Qe ? gi : void 0, Ze || Te ? hi : void 0, _i ? Zi() : void 0, Pi, Si, ri ? Ii : void 0, Vi ? Ai : void 0, Ei, zi]).filter(Ie),
                        Wi = n.useContext(j.hC),
                        Hi = (0, x.Z)([Di, V.yw.Lists > Wi && Re ? yi : void 0, V.yw.Premium > Wi && ei ? Li : void 0, V.yw.PremiumSignup > Wi && qi ? Fi() : void 0, V.yw.Bookmarks > Wi ? ki : void 0, V.yw.Payments > Wi && oi ? Ci : void 0, V.yw.Communities > Wi && di ? ji : void 0, V.yw.Articles > Wi && Xe ? fi : void 0, V.yw.CommunityNotes > Wi && Qe ? gi : void 0, V.yw.Analytics > Wi && _i ? Zi() : void 0, Pi, V.yw.VerifiedOrgDash > Wi && Bi && Je ? xi : void 0, (((!Je || r.isLegacyVerifiedOrg()) && V.yw.VerifiedOrgSignup > Wi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Mi() : void 0, si ? Ti : void 0, We ? vi : void 0, Ze || Te ? hi : void 0, Si, V.yw.Jobs > Wi && ri ? Ii : void 0, void 0, ti ? Oi : void 0, ai ? Ui : void 0, Vi ? Ai : void 0, Ei]).filter(Ie);
                    return (0, R.ZP)() ? ((Fe = Fe.concat(Hi)), Ne && Be && (Le = Ri)) : ((Fe = Fe.concat(Qi)), Ne && (Le = Ri)), { coreItems: Fe, countrySpecificItems: Le };
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
        790093: (e, i, l) => {
            l.r(i), l.d(i, { default: () => r });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                s = l(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: i });
            };
            o.metadata = { width: 24, height: 24 };
            const r = o;
        },
        256260: (e, i, l) => {
            l.r(i), l.d(i, { default: () => r });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                s = l(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M10 10c2.209 0 4-1.79 4-4s-1.791-4-4-4-4 1.79-4 4 1.791 4 4 4zm0-6c1.105 0 2 .9 2 2s-.895 2-2 2-2-.9-2-2 .895-2 2-2zm5.863 9.44C14.373 11.85 12.352 11 10 11s-4.373.85-5.863 2.44c-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46zM5.596 14.81C6.682 13.65 8.162 13 10 13s3.318.65 4.404 1.81c.921.978 1.602 2.388 1.939 4.19H3.657c.337-1.802 1.018-3.212 1.939-4.19zM24 10h-4.583l1.79 1.79-1.414 1.42-3.5-3.5-.707-.71.707-.71 3.5-3.5 1.414 1.42L19.417 8H24v2z" })) }, { writingDirection: i });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.fff4e9ea.js.map
