"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal~bundle.Account"],
    {
        395337: (e, i, n) => {
            n.d(i, { Z: () => r });
            var l,
                t,
                a,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [l, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [a], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "lre2gA0kvs0gf4XRNei6Qw", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "10c9183ce406af8e8ffa48a4cfd593b4";
            const r = o;
        },
        879526: (e, i, n) => {
            n.d(i, { O: () => Ce });
            var l = n(202784),
                t = n(400752),
                a = n(537392),
                s = n(688715),
                o = n(868634),
                r = n(674132),
                c = n.n(r),
                u = n(1753),
                d = n(625271),
                _ = n(883069),
                m = n(279849),
                f = n(197318),
                b = n(689582),
                p = n(256260),
                k = n(511323),
                g = n(80361),
                y = n(856151),
                v = n(53674),
                w = n(792618),
                h = n(520913),
                C = n(297896),
                T = n(175564),
                F = n(748138),
                Z = n(698891),
                L = n(68290),
                K = n(707570),
                S = n(593875),
                A = n(829110),
                x = n(839),
                O = n(720930),
                P = n(516951),
                j = n(450681),
                U = n(400915),
                V = n(420182),
                D = n(997657),
                I = n(279918),
                M = n(167725),
                R = n(880647),
                z = n(655352),
                E = n(125363),
                q = n(466036),
                Q = n(390387),
                W = n(76920),
                H = n(477403),
                $ = n(104119),
                N = n(484633),
                X = n(381904),
                Y = n(206962);
            const B = c().a15648a4,
                G = c().i3145aa0,
                J = c().cdf89b84,
                ee = c().i83d4f14,
                ie = c().aeede01a,
                ne = c().b0041756,
                le = c().ae1bbb26,
                te = c().d299431c,
                ae = c().fa98627a,
                se = c().fd442790,
                oe = c().da137d9a,
                re = c().e0cb0c72,
                ce = c().j087774e,
                ue = c().e2eef3c2,
                de = c().b55d8a78,
                _e = c().h02a6fe6,
                me = c().f75d1806,
                fe = c().j34ad558,
                be = c().a5a30af0,
                pe = c().b007440a,
                ke = c().a5cbc19a,
                ge = c().d13d697c,
                ye = c().j0e2cfa8,
                ve = c().h5e38204,
                we = c().h7d5d9fa,
                he = "rweb.navItemDecorations",
                Ce = ({ analytics: e, featureSwitches: i, onClose: n = P.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Ce, pendingFollowerCount: Te }) => {
                    let Fe = [],
                        Ze = [];
                    const Le = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Ke = (0, t.Dv)(V.lZ),
                        [Se, Ae] = l.useState(!1),
                        [xe, Oe] = l.useState(!1),
                        Pe = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        je = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ue = (0, $.Md)(je);
                    l.useEffect(() => {
                        Ue &&
                            Ke.get(he).then((e) => {
                                Ae(!e?.analyticsClickedV2), Oe(!e?.[Ue?.key]);
                            });
                    }, [Ke, Ue]);
                    const Ve = (0, E.I0)();
                    l.useEffect(() => {
                        c?.protected && Ve(q.GE());
                    }, [Ve, c]);
                    const De = (0, W.Zy)();
                    De.size > 0 && De.add("/settings");
                    const Ie = (0, E.v9)(Q.Lz),
                        Me = ({ link: e }) => !(Ie && (("string" == typeof e && ((e.startsWith("/settings") && !De.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Re = c?.screen_name || "",
                        ze = (0, a.iv)().width,
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
                        ni = i.isTrue("voice_rooms_web_space_creation") && ei !== N.Q.host && ii?.type !== N.W.space,
                        li = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        ti = i.isTrue("payments_enabled"),
                        ai = i.isTrue("recruiting_global_jobs_search_enabled"),
                        si = (0, H.vC)(),
                        oi = i.isTrue("c9s_enabled") && !!c,
                        ri = (0, M.Z)(),
                        ci = l.useMemo(() => !(Xe || !ri) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Xe, i, ri]),
                        ui = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), n && n();
                        },
                        di = { icon: u.default, label: be, link: "/compose/articles", onClick: ui("article_composer") },
                        _i = { label: oe, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: ui("german_transparency_item") },
                        mi = { label: ie, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: ui("imprint_item") },
                        fi = { icon: d.default, label: B, link: "/i/communitynotes", onClick: ui("birdwatch") },
                        bi = { icon: _.default, label: G, link: "/i/bookmarks", onClick: ui("bookmarks_overflow_item") },
                        pi = { icon: m.default, label: J, link: "/i/branded_likes_preview", onClick: ui("branded_likes_preview_overflow_item") },
                        ki = (f.default, ui("labs_item"), { icon: b.default, label: ne, link: `/${Re}/lists`, onClick: ui("lists_overflow_item") }),
                        gi = { badgeCount: Te, icon: p.default, label: ee, link: "/follower_requests", onClick: ui("follower_requests_overflow_item") },
                        yi = { icon: k.default, label: ae, link: `/${Re}`, onClick: ui("profile_overflow_item") },
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
                            decoration: Se ? l.createElement(o.ZP, { background: "blue500" }, ge) : null,
                        }),
                        Ci = () => {
                            const e = i.isTrue("subscriptions_premium_experiment_nav_text");
                            return { icon: Le ? w.default : h.default, label: e ? fe : me, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: ui("verified_overflow_item") };
                        },
                        Ti = { icon: Le ? w.default : h.default, label: me, link: "/i/premium", onClick: ui("premium_hub") },
                        Fi = { label: le, link: "/logout", icon: C.default, onClick: ui("logout_overflow_item"), testID: Y.Z.logout },
                        Zi = { icon: T.default, label: re, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: ui("twitter_ads_item") },
                        Li = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Ki = { icon: F.default, label: te, link: Li ? "/i/monetization" : "/settings/monetization", onClick: ui("monetization") },
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
                            decoration: xe && Pe && Ue ? l.createElement(o.ZP, { background: "blue500" }, Ue.label) : null,
                        }),
                        xi = { label: ue, onClick: ui("verified_organization_dashboard_item"), link: "/i/verified", icon: L.default },
                        Oi = { label: de, onClick: ui("create_space_item"), link: "/i/spaces/start", icon: K.default },
                        Pi = c ? { label: _e, onClick: ui("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        ji = Ne && c ? { label: ve, onClick: ui("chat_item"), link: "/i/chat", icon: A.default, decoration: l.createElement(o.ZP, { background: "blue500" }, we) } : void 0,
                        Ui = i.isTrue("spaces_conference_enabled") || !!si,
                        Vi = { label: "Conferences", onClick: ui("conferences_item"), link: "/i/conferences", icon: x.default },
                        Di = { label: pe, onClick: ui("jobs_item"), link: "/jobs", icon: O.default },
                        Ii = [_i, mi],
                        Mi = We && !Xe,
                        Ri = $e,
                        zi = (0, j.Z)([ji, yi, Ge ? Ti : void 0, ti ? vi : void 0, Mi ? Ci() : void 0, oi ? Pi : void 0, Re ? ki : void 0, bi, Je ? di : void 0, Ri ? (Ye ? xi : Ai()) : void 0, li ? wi : void 0, qe ? fi : void 0, Te || Ce ? gi : void 0, ci ? hi() : void 0, Ki, Zi, ai ? Di : void 0, Ui ? Vi : void 0, Si, Fi]).filter(Me),
                        Ei = l.useContext(D.hC),
                        qi = (0, j.Z)([ji, I.yw.Lists > Ei && Re ? ki : void 0, I.yw.Premium > Ei && Ge ? Ti : void 0, I.yw.PremiumSignup > Ei && Mi ? Ci() : void 0, I.yw.Bookmarks > Ei ? bi : void 0, I.yw.Payments > Ei && ti ? vi : void 0, I.yw.Communities > Ei && oi ? Pi : void 0, I.yw.Articles > Ei && Be ? di : void 0, I.yw.CommunityNotes > Ei && qe ? fi : void 0, I.yw.Analytics > Ei && ci ? hi() : void 0, Ki, I.yw.VerifiedOrgDash > Ei && Ri && Ye ? xi : void 0, (((!Ye || r.isLegacyVerifiedOrg()) && I.yw.VerifiedOrgSignup > Ei) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Ai() : void 0, li ? wi : void 0, Qe ? pi : void 0, Te || Ce ? gi : void 0, Zi, I.yw.Jobs > Ei && ai ? Di : void 0, void 0, ni ? Oi : void 0, Ui ? Vi : void 0, Si]).filter(Me);
                    return (0, z.ZP)() ? ((Fe = Fe.concat(qi)), He && Ee && (Ze = Ii)) : ((Fe = Fe.concat(zi)), He && (Ze = Ii)), { coreItems: Fe, countrySpecificItems: Ze };
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
            n.d(i, { eY: () => _, si: () => k, vC: () => d });
            n(543673), n(240753), n(128399);
            var l = n(395337),
                t = n(202784),
                a = (n(585488), n(516951)),
                s = n(952793),
                o = n(16222),
                r = n(125363),
                c = n(919022),
                u = n(535338);
            function d(e) {
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
                b = Object.values(f),
                p = l.Z;
            function k() {
                const e = (0, u.p)(p, {}),
                    i = (0, s.hC)("spaces_conference_enabled");
                return t.useMemo(() => {
                    const n = e.affiliations?.affiliated_account_ids_results,
                        l = (
                            n?.flatMap(({ rest_id: e, result: i }) => {
                                if ("User" !== i?.__typename) return [];
                                return [{ name: i.legacy.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => b.includes(e));
                    return i && !l.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...l] : l;
                }, [e.affiliations?.affiliated_account_ids_results, i]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal~bundle.Account.c9931b3a.js.map
