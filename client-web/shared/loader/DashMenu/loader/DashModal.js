"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal", "icons/IconCameraVideoStroke-js", "icons/IconHeartBurst-js"],
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
                z = l(698891),
                F = l(68290),
                V = l(707570),
                L = l(839),
                M = l(593875),
                S = l(829110),
                K = l(720930),
                P = l(516951),
                O = l(450681),
                U = l(400915),
                j = l(420182),
                x = l(997657),
                E = l(306114),
                D = l(279918),
                I = l(722517),
                A = l(880647),
                R = l(655352),
                q = l(125363),
                B = l(466036),
                H = l(390387),
                W = l(76920),
                Q = l(477403),
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
                Te = ({ analytics: e, featureSwitches: i, onClose: l = P.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let ze = [],
                        Fe = [];
                    const Ve = (0, I.Z)("PremiumNav"),
                        Le = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Me = (0, t.Dv)(j.lZ),
                        [Se, Ke] = n.useState(!1),
                        [Pe, Oe] = n.useState(!1),
                        Ue = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        je = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        xe = (0, N.Md)(je);
                    n.useEffect(() => {
                        xe &&
                            Me.get(Ce).then((e) => {
                                Ke(!e?.analyticsClickedV2), Oe(!e?.[xe?.key]);
                            });
                    }, [Me, xe]);
                    const Ee = (0, q.I0)();
                    n.useEffect(() => {
                        c?.protected && Ee(B.GE());
                    }, [Ee, c]);
                    const De = (0, W.Zy)();
                    De.size > 0 && De.add("/settings");
                    const Ie = (0, q.v9)(H.Lz),
                        Ae = ({ link: e }) => !(Ie && (("string" == typeof e && ((e.startsWith("/settings") && !De.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
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
                        { role: li } = (0, U.l7)(),
                        { activeItem: ni } = (0, G.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && li !== $.Q.host && ni?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, Q.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, E.Z)(),
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
                                (Me.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Me.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: Se ? n.createElement(o.ZP, { background: "blue500" }, ve) : null,
                        }),
                        zi = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: l } = e ? Ve : {},
                                t = "UpsellButtonRenderProperties" === l?.render_properties.__typename && l.render_properties.action_label ? l.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === Ve?.upsellContent?.render_properties.__typename ? Ve.upsellContent.render_properties.decoration_label : null;
                            return { icon: Le ? h.default : w.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? n.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        Fi = { icon: Le ? h.default : w.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        Vi = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Li = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Mi = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Si = { icon: Z.default, label: ae, link: Mi ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        Ki = { icon: z.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Pi = () => ({
                            label: Ue ? ye : ue,
                            onClick: () => (
                                Ue &&
                                    xe &&
                                    Me.get(Ce).then((e) => {
                                        const i = { ...e, [xe?.key]: !0 };
                                        Me.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: F.default,
                            decoration: Pe && Ue && xe ? n.createElement(o.ZP, { background: "blue500" }, xe.label) : null,
                        }),
                        Oi = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: F.default },
                        Ui = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: V.default },
                        ji = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: L.default },
                        xi = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: M.default } : void 0,
                        Ei = Ge && c ? { label: he, onClick: mi("chat_item"), link: "/i/chat", icon: S.default, decoration: n.createElement(o.ZP, { background: "blue500" }, we) } : void 0,
                        Di = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ii = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: L.default },
                        Ai = { label: ge, onClick: mi("jobs_item"), link: "/jobs", icon: K.default },
                        Ri = [pi, bi],
                        qi = Qe && !Ye,
                        Bi = $e,
                        Hi = (0, O.Z)([Ei, wi, ei ? Fi : void 0, oi ? Ci : void 0, qi ? zi() : void 0, di ? xi : void 0, Re ? yi : void 0, ki, ii ? fi : void 0, Bi ? (Je ? Oi : Pi()) : void 0, si ? Ti : void 0, He ? gi : void 0, Ze || Te ? hi : void 0, _i ? Zi() : void 0, Si, Li, ri ? Ai : void 0, Di ? Ii : void 0, Ki, Vi]).filter(Ae),
                        Wi = n.useContext(x.hC),
                        Qi = (0, O.Z)([Ei, D.yw.Lists > Wi && Re ? yi : void 0, D.yw.Premium > Wi && ei ? Fi : void 0, D.yw.PremiumSignup > Wi && qi ? zi() : void 0, D.yw.Bookmarks > Wi ? ki : void 0, D.yw.Payments > Wi && oi ? Ci : void 0, D.yw.Communities > Wi && di ? xi : void 0, D.yw.Articles > Wi && Xe ? fi : void 0, D.yw.CommunityNotes > Wi && He ? gi : void 0, D.yw.Analytics > Wi && _i ? Zi() : void 0, Si, D.yw.VerifiedOrgDash > Wi && Bi && Je ? Oi : void 0, (((!Je || r.isLegacyVerifiedOrg()) && D.yw.VerifiedOrgSignup > Wi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Pi() : void 0, si ? Ti : void 0, We ? vi : void 0, Ze || Te ? hi : void 0, Li, D.yw.Jobs > Wi && ri ? Ai : void 0, void 0, ti ? Ui : void 0, ai ? ji : void 0, Di ? Ii : void 0, Ki]).filter(Ae);
                    return (0, R.ZP)() ? ((ze = ze.concat(Qi)), Ne && Be && (Fe = Ri)) : ((ze = ze.concat(Hi)), Ne && (Fe = Ri)), { coreItems: ze, countrySpecificItems: Fe };
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
        839: (e, i, l) => {
            l.r(i), l.d(i, { default: () => r });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                s = l(347101);
            const o = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: i });
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
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.b29fd1ba.js.map
