"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DashMenu~loader.DashModal", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSound-js", "icons/IconSparkle-js"],
    {
        395337: (e, i, l) => {
            l.d(i, { Z: () => s });
            var n,
                t,
                a,
                o,
                r = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [n, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            r.hash = "42f499bfb2697230967b662ad70f78f8";
            const s = r;
        },
        879526: (e, i, l) => {
            l.d(i, { O: () => Ze });
            var n = l(202784),
                t = l(400752),
                a = l(537392),
                o = l(688715),
                r = l(868634),
                s = l(111677),
                c = l.n(s),
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
                h = l(53674),
                y = l(792618),
                w = l(520913),
                C = l(297896),
                Z = l(175564),
                T = l(748138),
                L = l(698891),
                z = l(68290),
                E = l(707570),
                F = l(839),
                S = l(593875),
                M = l(829110),
                x = l(720930),
                V = l(516951),
                D = l(450681),
                K = l(400915),
                P = l(420182),
                j = l(997657),
                O = l(306114),
                U = l(279918),
                I = l(722517),
                R = l(880647),
                A = l(655352),
                B = l(125363),
                q = l(466036),
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
                oe = c().fa98627a,
                re = c().fd442790,
                se = c().da137d9a,
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
                he = c().j0e2cfa8,
                ye = c().h5e38204,
                we = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Ze = ({ analytics: e, featureSwitches: i, onClose: l = V.Z, userClaims: s, viewerUser: c, acceptedFollowerCount: Ze, pendingFollowerCount: Te }) => {
                    let Le = [],
                        ze = [];
                    const Ee = (0, I.Z)("PremiumNav"),
                        Fe = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Se = (0, t.Dv)(P.lZ),
                        [Me, xe] = n.useState(!1),
                        [Ve, De] = n.useState(!1),
                        Ke = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Pe = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        je = (0, N.Md)(Pe);
                    n.useEffect(() => {
                        je &&
                            Se.get(Ce).then((e) => {
                                xe(!e?.analyticsClickedV2), De(!e?.[je?.key]);
                            });
                    }, [Se, je]);
                    const Oe = (0, B.I0)();
                    n.useEffect(() => {
                        c?.protected && Oe(q.GE());
                    }, [Oe, c]);
                    const Ue = (0, Q.Zy)();
                    Ue.size > 0 && Ue.add("/settings");
                    const Ie = (0, B.v9)(H.Lz),
                        Re = ({ link: e }) => !(Ie && (("string" == typeof e && ((e.startsWith("/settings") && !Ue.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        Ae = c?.screen_name || "",
                        Be = (0, a.iv)().width,
                        qe = R.Z.isOneColumnLayout(Be) || R.Z.isOneColumnSquishedLayout(Be),
                        He = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ie,
                        Qe = i.isTrue("branded_like_preview_enabled"),
                        We = i.isTrue("subscriptions_sign_up_enabled"),
                        Ne = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        Ge = i.isTrue("rweb_xchat_enabled"),
                        Ye = s.isAnyPremiumSubscriber(),
                        Je = s.isVerifiedOrg(),
                        Xe = s.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = s.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, A.ZP)(),
                        { role: li } = (0, K.l7)(),
                        { activeItem: ni } = (0, G.Y)(),
                        ti = i.isTrue("voice_rooms_web_space_creation") && li !== $.Q.host && ni?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        oi = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        ri = i.isTrue("payments_enabled"),
                        si = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, W.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, O.Z)(),
                        _i = n.useMemo(() => !(Ye || !ui) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, ui]),
                        mi = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), l && l();
                        },
                        fi = { icon: d.default, label: be, link: "/compose/articles", onClick: mi("article_composer") },
                        pi = { label: se, link: (0, o.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: mi("german_transparency_item") },
                        bi = { label: le, link: (0, o.ju)("https://legal.x.com/imprint.html"), onClick: mi("imprint_item") },
                        gi = { icon: u.default, label: J, link: "/i/communitynotes", onClick: mi("birdwatch") },
                        vi = { icon: _.default, label: X, link: "/i/bookmarks", onClick: mi("bookmarks_overflow_item") },
                        ki = { icon: m.default, label: ee, link: "/i/branded_likes_preview", onClick: mi("branded_likes_preview_overflow_item") },
                        hi = (f.default, mi("labs_item"), { icon: p.default, label: ne, link: `/${Ae}/lists`, onClick: mi("lists_overflow_item") }),
                        yi = { badgeCount: Te, icon: b.default, label: ie, link: "/follower_requests", onClick: mi("follower_requests_overflow_item") },
                        wi = { icon: g.default, label: oe, link: `/${Ae}`, onClick: mi("profile_overflow_item") },
                        Ci = { icon: v.default, label: "Money", link: "/i/money", onClick: mi("payments_overflow_item") },
                        Zi = { icon: k.default, label: de, link: "/i/coins", onClick: mi("twitter_coins") },
                        Ti = () => ({
                            icon: h.default,
                            label: ve,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Se.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Se.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: Me ? n.createElement(r.ZP, { background: "blue500" }, ke) : null,
                        }),
                        Li = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: l } = e ? Ee : {},
                                t = "UpsellButtonRenderProperties" === l?.render_properties.__typename && l.render_properties.action_label ? l.render_properties.action_label : pe,
                                a = "UpsellButtonRenderProperties" === Ee?.upsellContent?.render_properties.__typename ? Ee.upsellContent.render_properties.decoration_label : null;
                            return { icon: Fe ? y.default : w.default, label: t, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? n.createElement(r.ZP, { background: "blue500" }, a) : null };
                        },
                        zi = { icon: Fe ? y.default : w.default, label: pe, link: "/i/premium", onClick: mi("premium_hub") },
                        Ei = { label: te, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Fi = { icon: Z.default, label: ce, link: (0, o.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Si = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Mi = { icon: T.default, label: ae, link: Si ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        xi = { icon: L.default, label: re, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Vi = () => ({
                            label: Ke ? he : ue,
                            onClick: () => (
                                Ke &&
                                    je &&
                                    Se.get(Ce).then((e) => {
                                        const i = { ...e, [je?.key]: !0 };
                                        Se.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: z.default,
                            decoration: Ve && Ke && je ? n.createElement(r.ZP, { background: "blue500" }, je.label) : null,
                        }),
                        Di = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: z.default },
                        Ki = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: E.default },
                        Pi = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: F.default },
                        ji = c ? { label: fe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: S.default } : void 0,
                        Oi = Ge && c ? { label: ye, onClick: mi("chat_item"), link: "/i/chat", icon: M.default, decoration: n.createElement(r.ZP, { background: "blue500" }, we) } : void 0,
                        Ui = i.isTrue("spaces_conference_enabled") || !!ci,
                        Ii = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: F.default },
                        Ri = { label: ge, onClick: mi("jobs_item"), link: "/jobs", icon: x.default },
                        Ai = [pi, bi],
                        Bi = We && !Ye,
                        qi = $e,
                        Hi = (0, D.Z)([Oi, wi, ei ? zi : void 0, ri ? Ci : void 0, Bi ? Li() : void 0, di ? ji : void 0, Ae ? hi : void 0, vi, ii ? fi : void 0, qi ? (Je ? Di : Vi()) : void 0, oi ? Zi : void 0, He ? gi : void 0, Te || Ze ? yi : void 0, _i ? Ti() : void 0, Mi, Fi, si ? Ri : void 0, Ui ? Ii : void 0, xi, Ei]).filter(Re),
                        Qi = n.useContext(j.hC),
                        Wi = (0, D.Z)([Oi, U.yw.Lists > Qi && Ae ? hi : void 0, U.yw.Premium > Qi && ei ? zi : void 0, U.yw.PremiumSignup > Qi && Bi ? Li() : void 0, U.yw.Bookmarks > Qi ? vi : void 0, U.yw.Payments > Qi && ri ? Ci : void 0, U.yw.Communities > Qi && di ? ji : void 0, U.yw.Articles > Qi && Xe ? fi : void 0, U.yw.CommunityNotes > Qi && He ? gi : void 0, U.yw.Analytics > Qi && _i ? Ti() : void 0, Mi, U.yw.VerifiedOrgDash > Qi && qi && Je ? Di : void 0, (((!Je || s.isLegacyVerifiedOrg()) && U.yw.VerifiedOrgSignup > Qi) || (s.isVerifiedOrgAffiliate() && !s.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Vi() : void 0, oi ? Zi : void 0, Qe ? ki : void 0, Te || Ze ? yi : void 0, Fi, U.yw.Jobs > Qi && si ? Ri : void 0, void 0, ti ? Ki : void 0, ai ? Pi : void 0, Ui ? Ii : void 0, xi]).filter(Re);
                    return (0, A.ZP)() ? ((Le = Le.concat(Wi)), Ne && qe && (ze = Ai)) : ((Le = Le.concat(Hi)), Ne && (ze = Ai)), { coreItems: Le, countrySpecificItems: ze };
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
                o = l(952793),
                r = l(16222),
                s = l(125363),
                c = l(919022),
                d = l(535338);
            function u(e) {
                return (0, s.v9)(_);
            }
            function _(e) {
                return (function (e) {
                    if (!e) return;
                    const i = (0, r.o)(() => new URL(e), a.Z);
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
                    i = (0, o.hC)("spaces_conference_enabled");
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
        58399: (e, i, l) => {
            l.r(i), l.d(i, { default: () => c });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                o = l(717683),
                r = l(347101);
            const s = (e = {}) => {
                const i = n.useContext(o.Z),
                    { direction: l } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style, i && r.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, i, l) => {
            l.r(i), l.d(i, { default: () => s });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                o = l(347101);
            const r = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: i });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        264171: (e, i, l) => {
            l.r(i), l.d(i, { default: () => s });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                o = l(347101);
            const r = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: i });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        98440: (e, i, l) => {
            l.r(i), l.d(i, { default: () => s });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                o = l(347101);
            const r = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: i });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        926628: (e, i, l) => {
            l.r(i), l.d(i, { default: () => s });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                o = l(347101);
            const r = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: i });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
        262009: (e, i, l) => {
            l.r(i), l.d(i, { default: () => s });
            var n = l(202784),
                t = l(890601),
                a = l(783427),
                o = l(347101);
            const r = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: i });
            };
            r.metadata = { width: 24, height: 24 };
            const s = r;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DashMenu~loader.DashModal.0b7c82fa.js.map
