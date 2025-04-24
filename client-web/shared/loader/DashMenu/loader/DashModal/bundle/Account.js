"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal~bundle.Account"],
    {
        395337: (e, i, l) => {
            l.d(i, { Z: () => r });
            var n,
                a,
                t,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (t = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW", path: "affiliations.affiliated_account_ids_results.result.legacy.name" }], storageKey: null }, action: "THROW", path: "affiliations.affiliated_account_ids_results.result.legacy" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [t], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "lre2gA0kvs0gf4XRNei6Qw", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "10c9183ce406af8e8ffa48a4cfd593b4";
            const r = o;
        },
        879526: (e, i, l) => {
            l.d(i, { O: () => Ce });
            var n = l(202784),
                a = l(400752),
                t = l(537392),
                s = l(688715),
                o = l(868634),
                r = l(674132),
                c = l.n(r),
                u = l(1753),
                d = l(625271),
                _ = l(883069),
                f = l(279849),
                m = l(197318),
                p = l(689582),
                b = l(256260),
                k = l(511323),
                g = l(80361),
                y = l(856151),
                v = l(53674),
                w = l(792618),
                h = l(520913),
                C = l(297896),
                T = l(175564),
                F = l(748138),
                Z = l(698891),
                L = l(68290),
                K = l(707570),
                S = l(593875),
                A = l(829110),
                x = l(839),
                O = l(720930),
                P = l(516951),
                j = l(450681),
                U = l(400915),
                V = l(420182),
                D = l(997657),
                I = l(279918),
                M = l(167725),
                R = l(880647),
                z = l(655352),
                E = l(125363),
                q = l(466036),
                Q = l(390387),
                W = l(76920),
                H = l(477403),
                $ = l(104119),
                N = l(484633),
                X = l(381904),
                Y = l(206962);
            const B = c().a15648a4,
                G = c().i3145aa0,
                J = c().cdf89b84,
                ee = c().i83d4f14,
                ie = c().aeede01a,
                le = c().b0041756,
                ne = c().ae1bbb26,
                ae = c().d299431c,
                te = c().fa98627a,
                se = c().fd442790,
                oe = c().da137d9a,
                re = c().e0cb0c72,
                ce = c().j087774e,
                ue = c().e2eef3c2,
                de = c().b55d8a78,
                _e = c().h02a6fe6,
                fe = c().f75d1806,
                me = c().j34ad558,
                pe = c().a5a30af0,
                be = c().b007440a,
                ke = c().a5cbc19a,
                ge = c().d13d697c,
                ye = c().j0e2cfa8,
                ve = c().h5e38204,
                we = c().h7d5d9fa,
                he = "rweb.navItemDecorations",
                Ce = ({ analytics: e, featureSwitches: i, onClose: l = P.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Ce, pendingFollowerCount: Te }) => {
                    let Fe = [],
                        Ze = [];
                    const Le = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Ke = (0, a.Dv)(V.lZ),
                        [Se, Ae] = n.useState(!1),
                        [xe, Oe] = n.useState(!1),
                        Pe = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        je = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ue = (0, $.Md)(je);
                    n.useEffect(() => {
                        Ue &&
                            Ke.get(he).then((e) => {
                                Ae(!e?.analyticsClickedV2), Oe(!e?.[Ue?.key]);
                            });
                    }, [Ke, Ue]);
                    const Ve = (0, E.I0)();
                    n.useEffect(() => {
                        c?.protected && Ve(q.GE());
                    }, [Ve, c]);
                    const De = (0, W.Zy)();
                    De.size > 0 && De.add("/settings");
                    const Ie = (0, E.v9)(Q.Lz),
                        Me = ({ link: e }) => !(Ie && (("string" == typeof e && ((e.startsWith("/settings") && !De.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        ze = (0, t.iv)().width,
                        Ee = R.Z.isOneColumnLayout(ze) || R.Z.isOneColumnSquishedLayout(ze),
                        qe = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ie,
                        Qe = i.isTrue("branded_like_preview_enabled"),
                        We = i.isTrue("subscriptions_sign_up_enabled"),
                        He = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ne = i.isTrue("rweb_xchat_enabled"),
                        Xe = r.isAnyPremiumSubscriber(),
                        Ye = r.isVerifiedOrg(),
                        Be = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        Ge = Xe,
                        Je = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, z.ZP)(),
                        { role: ei } = (0, U.l7)(),
                        { activeItem: ii } = (0, X.Y)(),
                        li = i.isTrue("voice_rooms_web_space_creation") && ei !== N.Q.host && ii?.type !== N.W.space,
                        ni = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        ai = i.isTrue("payments_enabled"),
                        ti = i.isTrue("recruiting_global_jobs_search_enabled"),
                        si = (0, H.vC)(),
                        oi = i.isTrue("c9s_enabled") && !!c,
                        ri = (0, M.Z)(),
                        ci = n.useMemo(() => !(Xe || !ri) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Xe, i, ri]),
                        ui = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), l && l();
                        },
                        di = { icon: u.default, label: pe, link: "/compose/articles", onClick: ui("article_composer") },
                        _i = { label: oe, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: ui("german_transparency_item") },
                        fi = { label: ie, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: ui("imprint_item") },
                        mi = { icon: d.default, label: B, link: "/i/communitynotes", onClick: ui("birdwatch") },
                        pi = { icon: _.default, label: G, link: "/i/bookmarks", onClick: ui("bookmarks_overflow_item") },
                        bi = { icon: f.default, label: J, link: "/i/branded_likes_preview", onClick: ui("branded_likes_preview_overflow_item") },
                        ki = (m.default, ui("labs_item"), { icon: p.default, label: le, link: `/${Re}/lists`, onClick: ui("lists_overflow_item") }),
                        gi = { badgeCount: Te, icon: b.default, label: ee, link: "/follower_requests", onClick: ui("follower_requests_overflow_item") },
                        yi = { icon: k.default, label: te, link: `/${Re}`, onClick: ui("profile_overflow_item") },
                        vi = { icon: g.default, label: "Money", link: "/i/money", onClick: ui("payments_overflow_item") },
                        wi = { icon: y.default, label: ce, link: "/i/coins", onClick: ui("twitter_coins") },
                        hi = () => ({
                            icon: v.default,
                            label: ke,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Ke.get(he).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Ke.set(he, i);
                                }),
                                ui("analytics")),
                            decoration: Se ? n.createElement(o.ZP, { background: "blue500" }, ge) : null,
                        }),
                        Ci = () => {
                            const e = i.isTrue("subscriptions_premium_experiment_nav_text");
                            return { icon: Le ? w.default : h.default, label: e ? me : fe, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: ui("verified_overflow_item") };
                        },
                        Ti = { icon: Le ? w.default : h.default, label: fe, link: "/i/premium", onClick: ui("premium_hub") },
                        Fi = { label: ne, link: "/logout", icon: C.default, onClick: ui("logout_overflow_item"), testID: Y.Z.logout },
                        Zi = { icon: T.default, label: re, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: ui("twitter_ads_item") },
                        Li = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Ki = { icon: F.default, label: ae, link: Li ? "/i/monetization" : "/settings/monetization", onClick: ui("monetization") },
                        Si = { icon: Z.default, label: se, link: "/settings", onClick: ui("settings_overflow_item"), testID: Y.Z.settings },
                        Ai = () => ({
                            label: Pe ? ye : ue,
                            onClick: () => (
                                Pe &&
                                    Ue &&
                                    Ke.get(he).then((e) => {
                                        const i = { ...e, [Ue?.key]: !0 };
                                        Ke.set(he, i);
                                    }),
                                ui("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: L.default,
                            decoration: xe && Pe && Ue ? n.createElement(o.ZP, { background: "blue500" }, Ue.label) : null,
                        }),
                        xi = { label: ue, onClick: ui("verified_organization_dashboard_item"), link: "/i/verified", icon: L.default },
                        Oi = { label: de, onClick: ui("create_space_item"), link: "/i/spaces/start", icon: K.default },
                        Pi = c ? { label: _e, onClick: ui("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        ji = Ne && c ? { label: ve, onClick: ui("chat_item"), link: "/i/chat", icon: A.default, decoration: n.createElement(o.ZP, { background: "blue500" }, we) } : void 0,
                        Ui = i.isTrue("spaces_conference_enabled") || !!si,
                        Vi = { label: "Conferences", onClick: ui("conferences_item"), link: "/i/conferences", icon: x.default },
                        Di = { label: be, onClick: ui("jobs_item"), link: "/jobs", icon: O.default },
                        Ii = [_i, fi],
                        Mi = We && !Xe,
                        Ri = $e,
                        zi = (0, j.Z)([ji, yi, Ge ? Ti : void 0, ai ? vi : void 0, Mi ? Ci() : void 0, oi ? Pi : void 0, Re ? ki : void 0, pi, Je ? di : void 0, Ri ? (Ye ? xi : Ai()) : void 0, ni ? wi : void 0, qe ? mi : void 0, Te || Ce ? gi : void 0, ci ? hi() : void 0, Ki, Zi, ti ? Di : void 0, Ui ? Vi : void 0, Si, Fi]).filter(Me),
                        Ei = n.useContext(D.hC),
                        qi = (0, j.Z)([ji, I.yw.Lists > Ei && Re ? ki : void 0, I.yw.Premium > Ei && Ge ? Ti : void 0, I.yw.PremiumSignup > Ei && Mi ? Ci() : void 0, I.yw.Bookmarks > Ei ? pi : void 0, I.yw.Payments > Ei && ai ? vi : void 0, I.yw.Communities > Ei && oi ? Pi : void 0, I.yw.Articles > Ei && Be ? di : void 0, I.yw.CommunityNotes > Ei && qe ? mi : void 0, I.yw.Analytics > Ei && ci ? hi() : void 0, Ki, I.yw.VerifiedOrgDash > Ei && Ri && Ye ? xi : void 0, (((!Ye || r.isLegacyVerifiedOrg()) && I.yw.VerifiedOrgSignup > Ei) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Ai() : void 0, ni ? wi : void 0, Qe ? bi : void 0, Te || Ce ? gi : void 0, Zi, I.yw.Jobs > Ei && ti ? Di : void 0, void 0, li ? Oi : void 0, Ui ? Vi : void 0, Si]).filter(Me);
                    return (0, z.ZP)() ? ((Fe = Fe.concat(qi)), He && Ee && (Ze = Ii)) : ((Fe = Fe.concat(zi)), He && (Ze = Ii)), { coreItems: Fe, countrySpecificItems: Ze };
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
                a = l(202784),
                t = (l(585488), l(516951)),
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
                    const i = (0, o.o)(() => new URL(e), t.Z);
                    if (!i || !f.includes(i.host)) return;
                    const l = i.pathname.slice(1).toLowerCase();
                    return m[l];
                })(c.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const f = ["twitter.com", "x.com"],
                m = { xai: "1661523610111193088" },
                p = Object.values(m),
                b = n.Z;
            function k() {
                const e = (0, u.p)(b, {}),
                    i = (0, s.hC)("spaces_conference_enabled");
                return a.useMemo(() => {
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal~bundle.Account.26321c3a.js.map
