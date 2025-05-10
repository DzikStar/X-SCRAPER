"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal~bundle.Account"],
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
                r = l(674132),
                c = l.n(r),
                u = l(1753),
                d = l(625271),
                _ = l(883069),
                m = l(279849),
                f = l(197318),
                b = l(689582),
                p = l(256260),
                k = l(511323),
                g = l(80361),
                v = l(856151),
                y = l(53674),
                w = l(792618),
                h = l(520913),
                C = l(297896),
                T = l(175564),
                F = l(748138),
                Z = l(698891),
                L = l(68290),
                K = l(707570),
                S = l(839),
                A = l(593875),
                x = l(829110),
                O = l(720930),
                P = l(516951),
                j = l(450681),
                U = l(400915),
                V = l(420182),
                D = l(997657),
                I = l(306114),
                M = l(279918),
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
                te = c().d299431c,
                ae = c().fa98627a,
                se = c().fd442790,
                oe = c().da137d9a,
                re = c().e0cb0c72,
                ce = c().j087774e,
                ue = c().e2eef3c2,
                de = c().b55d8a78,
                _e = c().e5323e36,
                me = c().h02a6fe6,
                fe = c().f75d1806,
                be = c().j34ad558,
                pe = c().a5a30af0,
                ke = c().b007440a,
                ge = c().a5cbc19a,
                ve = c().d13d697c,
                ye = c().j0e2cfa8,
                we = c().h5e38204,
                he = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: l = P.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Fe }) => {
                    let Ze = [],
                        Le = [];
                    const Ke = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Se = (0, t.Dv)(V.lZ),
                        [Ae, xe] = n.useState(!1),
                        [Oe, Pe] = n.useState(!1),
                        je = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ue = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ve = (0, $.Md)(Ue);
                    n.useEffect(() => {
                        Ve &&
                            Se.get(Ce).then((e) => {
                                xe(!e?.analyticsClickedV2), Pe(!e?.[Ve?.key]);
                            });
                    }, [Se, Ve]);
                    const De = (0, E.I0)();
                    n.useEffect(() => {
                        c?.protected && De(q.GE());
                    }, [De, c]);
                    const Ie = (0, W.Zy)();
                    Ie.size > 0 && Ie.add("/settings");
                    const Me = (0, E.v9)(Q.Lz),
                        Re = ({ link: e }) => !(Me && (("string" == typeof e && ((e.startsWith("/settings") && !Ie.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        ze = c?.screen_name || "",
                        Ee = (0, a.iv)().width,
                        qe = R.Z.isOneColumnLayout(Ee) || R.Z.isOneColumnSquishedLayout(Ee),
                        Qe = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Me,
                        We = i.isTrue("branded_like_preview_enabled"),
                        He = i.isTrue("subscriptions_sign_up_enabled"),
                        $e = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        Ne = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Xe = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Be = r.isVerifiedOrg(),
                        Ge = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        Je = Ye,
                        ei = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, z.ZP)(),
                        { role: ii } = (0, U.l7)(),
                        { activeItem: li } = (0, X.Y)(),
                        ni = i.isTrue("voice_rooms_web_space_creation") && ii !== N.Q.host && li?.type !== N.W.space,
                        ti = i.isTrue("rweb_go_live_enabled"),
                        ai = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        si = i.isTrue("payments_enabled"),
                        oi = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ri = (0, H.vC)(),
                        ci = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, I.Z)(),
                        di = n.useMemo(() => !(Ye || !ui) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, ui]),
                        _i = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), l && l();
                        },
                        mi = { icon: u.default, label: pe, link: "/compose/articles", onClick: _i("article_composer") },
                        fi = { label: oe, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: _i("german_transparency_item") },
                        bi = { label: ie, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: _i("imprint_item") },
                        pi = { icon: d.default, label: B, link: "/i/communitynotes", onClick: _i("birdwatch") },
                        ki = { icon: _.default, label: G, link: "/i/bookmarks", onClick: _i("bookmarks_overflow_item") },
                        gi = { icon: m.default, label: J, link: "/i/branded_likes_preview", onClick: _i("branded_likes_preview_overflow_item") },
                        vi = (f.default, _i("labs_item"), { icon: b.default, label: le, link: `/${ze}/lists`, onClick: _i("lists_overflow_item") }),
                        yi = { badgeCount: Fe, icon: p.default, label: ee, link: "/follower_requests", onClick: _i("follower_requests_overflow_item") },
                        wi = { icon: k.default, label: ae, link: `/${ze}`, onClick: _i("profile_overflow_item") },
                        hi = { icon: g.default, label: "Money", link: "/i/money", onClick: _i("payments_overflow_item") },
                        Ci = { icon: v.default, label: ce, link: "/i/coins", onClick: _i("twitter_coins") },
                        Ti = () => ({
                            icon: y.default,
                            label: ge,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Se.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Se.set(Ce, i);
                                }),
                                _i("analytics")),
                            decoration: Ae ? n.createElement(o.ZP, { background: "blue500" }, ve) : null,
                        }),
                        Fi = () => {
                            const e = i.isTrue("subscriptions_premium_experiment_nav_text");
                            return { icon: Ke ? w.default : h.default, label: e ? be : fe, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: _i("verified_overflow_item") };
                        },
                        Zi = { icon: Ke ? w.default : h.default, label: fe, link: "/i/premium", onClick: _i("premium_hub") },
                        Li = { label: ne, link: "/logout", icon: C.default, onClick: _i("logout_overflow_item"), testID: Y.Z.logout },
                        Ki = { icon: T.default, label: re, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: _i("twitter_ads_item") },
                        Si = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Ai = { icon: F.default, label: te, link: Si ? "/i/monetization" : "/settings/monetization", onClick: _i("monetization") },
                        xi = { icon: Z.default, label: se, link: "/settings", onClick: _i("settings_overflow_item"), testID: Y.Z.settings },
                        Oi = () => ({
                            label: je ? ye : ue,
                            onClick: () => (
                                je &&
                                    Ve &&
                                    Se.get(Ce).then((e) => {
                                        const i = { ...e, [Ve?.key]: !0 };
                                        Se.set(Ce, i);
                                    }),
                                _i("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: L.default,
                            decoration: Oe && je && Ve ? n.createElement(o.ZP, { background: "blue500" }, Ve.label) : null,
                        }),
                        Pi = { label: ue, onClick: _i("verified_organization_dashboard_item"), link: "/i/verified", icon: L.default },
                        ji = { label: de, onClick: _i("create_space_item"), link: "/i/spaces/start", icon: K.default },
                        Ui = { label: _e, onClick: _i("go_live_item"), link: "/i/go-live", icon: S.default },
                        Vi = c ? { label: me, onClick: _i("communities_item"), link: `/${c.screen_name}/communities`, icon: A.default } : void 0,
                        Di = Xe && c ? { label: we, onClick: _i("chat_item"), link: "/i/chat", icon: x.default, decoration: n.createElement(o.ZP, { background: "blue500" }, he) } : void 0,
                        Ii = i.isTrue("spaces_conference_enabled") || !!ri,
                        Mi = { label: "Conferences", onClick: _i("conferences_item"), link: "/i/conferences", icon: S.default },
                        Ri = { label: ke, onClick: _i("jobs_item"), link: "/jobs", icon: O.default },
                        zi = [fi, bi],
                        Ei = He && !Ye,
                        qi = Ne,
                        Qi = (0, j.Z)([Di, wi, Je ? Zi : void 0, si ? hi : void 0, Ei ? Fi() : void 0, ci ? Vi : void 0, ze ? vi : void 0, ki, ei ? mi : void 0, qi ? (Be ? Pi : Oi()) : void 0, ai ? Ci : void 0, Qe ? pi : void 0, Fe || Te ? yi : void 0, di ? Ti() : void 0, Ai, Ki, oi ? Ri : void 0, Ii ? Mi : void 0, xi, Li]).filter(Re),
                        Wi = n.useContext(D.hC),
                        Hi = (0, j.Z)([Di, M.yw.Lists > Wi && ze ? vi : void 0, M.yw.Premium > Wi && Je ? Zi : void 0, M.yw.PremiumSignup > Wi && Ei ? Fi() : void 0, M.yw.Bookmarks > Wi ? ki : void 0, M.yw.Payments > Wi && si ? hi : void 0, M.yw.Communities > Wi && ci ? Vi : void 0, M.yw.Articles > Wi && Ge ? mi : void 0, M.yw.CommunityNotes > Wi && Qe ? pi : void 0, M.yw.Analytics > Wi && di ? Ti() : void 0, Ai, M.yw.VerifiedOrgDash > Wi && qi && Be ? Pi : void 0, (((!Be || r.isLegacyVerifiedOrg()) && M.yw.VerifiedOrgSignup > Wi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Oi() : void 0, ai ? Ci : void 0, We ? gi : void 0, Fe || Te ? yi : void 0, Ki, M.yw.Jobs > Wi && oi ? Ri : void 0, void 0, ni ? ji : void 0, ti ? Ui : void 0, Ii ? Mi : void 0, xi]).filter(Re);
                    return (0, z.ZP)() ? ((Ze = Ze.concat(Hi)), $e && qe && (Le = zi)) : ((Ze = Ze.concat(Qi)), $e && (Le = zi)), { coreItems: Ze, countrySpecificItems: Le };
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
                b = Object.values(f),
                p = n.Z;
            function k() {
                const e = (0, u.p)(p, {}),
                    i = (0, s.hC)("spaces_conference_enabled");
                return t.useMemo(() => {
                    const l = e.affiliations?.affiliated_account_ids_results,
                        n = (
                            l?.flatMap(({ rest_id: e, result: i }) => {
                                if ("User" !== i?.__typename) return [];
                                return [{ name: i.legacy.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => b.includes(e));
                    return i && !n.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...n] : n;
                }, [e.affiliations?.affiliated_account_ids_results, i]);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal~bundle.Account.a01c175a.js.map
