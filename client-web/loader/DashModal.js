"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal"],
    {
        395337: (e, i, t) => {
            t.d(i, { Z: () => r });
            var l,
                n,
                a,
                s,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [l, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [n, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            o.hash = "42f499bfb2697230967b662ad70f78f8";
            const r = o;
        },
        879526: (e, i, t) => {
            t.d(i, { O: () => Te });
            var l = t(202784),
                n = t(400752),
                a = t(537392),
                s = t(688715),
                o = t(868634),
                r = t(111677),
                c = t.n(r),
                d = t(1753),
                u = t(625271),
                _ = t(883069),
                m = t(279849),
                p = t(197318),
                f = t(689582),
                b = t(256260),
                g = t(511323),
                k = t(80361),
                y = t(856151),
                h = t(53674),
                v = t(792618),
                w = t(520913),
                C = t(297896),
                T = t(175564),
                Z = t(748138),
                S = t(698891),
                F = t(68290),
                M = t(707570),
                L = t(839),
                E = t(593875),
                P = t(829110),
                I = t(720930),
                V = t(516951),
                x = t(450681),
                A = t(400915),
                K = t(420182),
                U = t(997657),
                G = t(306114),
                O = t(279918),
                z = t(722517),
                j = t(880647),
                D = t(655352),
                R = t(125363),
                B = t(466036),
                q = t(390387),
                N = t(76920),
                Q = t(477403),
                W = t(104119),
                $ = t(484633),
                H = t(381904),
                Y = t(206962);
            const J = c().a15648a4,
                X = c().i3145aa0,
                ee = c().cdf89b84,
                ie = c().i83d4f14,
                te = c().aeede01a,
                le = c().b0041756,
                ne = c().ae1bbb26,
                ae = c().d299431c,
                se = c().fa98627a,
                oe = c().fd442790,
                re = c().da137d9a,
                ce = c().e0cb0c72,
                de = c().j087774e,
                ue = c().e2eef3c2,
                _e = c().b55d8a78,
                me = c().e5323e36,
                pe = c().h02a6fe6,
                fe = c().f75d1806,
                be = c().a5a30af0,
                ge = c().b007440a,
                ke = c().a5cbc19a,
                ye = c().d13d697c,
                he = c().j0e2cfa8,
                ve = c().h5e38204,
                we = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: t = V.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Se = [],
                        Fe = [];
                    const Me = (0, z.Z)("PremiumNav"),
                        Le = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Ee = (0, n.Dv)(K.lZ),
                        [Pe, Ie] = l.useState(!1),
                        [Ve, xe] = l.useState(!1),
                        Ae = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ke = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ue = (0, W.Md)(Ke);
                    l.useEffect(() => {
                        Ue &&
                            Ee.get(Ce).then((e) => {
                                Ie(!e?.analyticsClickedV2), xe(!e?.[Ue?.key]);
                            });
                    }, [Ee, Ue]);
                    const Ge = (0, R.I0)();
                    l.useEffect(() => {
                        c?.protected && Ge(B.GE());
                    }, [Ge, c]);
                    const Oe = (0, N.Zy)();
                    Oe.size > 0 && Oe.add("/settings");
                    const ze = (0, R.v9)(q.Lz),
                        je = ({ link: e }) => !(ze && (("string" == typeof e && ((e.startsWith("/settings") && !Oe.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        De = c?.screen_name || "",
                        Re = (0, a.iv)().width,
                        Be = j.Z.isOneColumnLayout(Re) || j.Z.isOneColumnSquishedLayout(Re),
                        qe = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !ze,
                        Ne = i.isTrue("branded_like_preview_enabled"),
                        Qe = i.isTrue("subscriptions_sign_up_enabled"),
                        We = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        $e = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        He = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Je = r.isVerifiedOrg(),
                        Xe = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, D.ZP)(),
                        { role: ti } = (0, A.l7)(),
                        { activeItem: li } = (0, H.Y)(),
                        ni = i.isTrue("voice_rooms_web_space_creation") && ti !== $.Q.host && li?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        si = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        oi = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, Q.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, G.Z)(),
                        _i = l.useMemo(() => !(Ye || !ui) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, ui]),
                        mi = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), t && t();
                        },
                        pi = { icon: d.default, label: be, link: "/compose/articles", onClick: mi("article_composer") },
                        fi = { label: re, link: (0, s.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: mi("german_transparency_item") },
                        bi = { label: te, link: (0, s.ju)("https://legal.x.com/imprint.html"), onClick: mi("imprint_item") },
                        gi = { icon: u.default, label: J, link: "/i/communitynotes", onClick: mi("birdwatch") },
                        ki = { icon: _.default, label: X, link: "/i/bookmarks", onClick: mi("bookmarks_overflow_item") },
                        yi = { icon: m.default, label: ee, link: "/i/branded_likes_preview", onClick: mi("branded_likes_preview_overflow_item") },
                        hi = (p.default, mi("labs_item"), { icon: f.default, label: le, link: `/${De}/lists`, onClick: mi("lists_overflow_item") }),
                        vi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: mi("follower_requests_overflow_item") },
                        wi = { icon: g.default, label: se, link: `/${De}`, onClick: mi("profile_overflow_item") },
                        Ci = { icon: k.default, label: "Money", link: "/i/money", onClick: mi("payments_overflow_item") },
                        Ti = { icon: y.default, label: de, link: "/i/coins", onClick: mi("twitter_coins") },
                        Zi = () => ({
                            icon: h.default,
                            label: ke,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Ee.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Ee.set(Ce, i);
                                }),
                                mi("analytics")),
                            decoration: Pe ? l.createElement(o.ZP, { background: "blue500" }, ye) : null,
                        }),
                        Si = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: t } = e ? Me : {},
                                n = "UpsellButtonRenderProperties" === t?.render_properties.__typename && t.render_properties.action_label ? t.render_properties.action_label : fe,
                                a = "UpsellButtonRenderProperties" === Me?.upsellContent?.render_properties.__typename ? Me.upsellContent.render_properties.decoration_label : null;
                            return { icon: Le ? v.default : w.default, label: n, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: mi("verified_overflow_item"), decoration: a ? l.createElement(o.ZP, { background: "blue500" }, a) : null };
                        },
                        Fi = { icon: Le ? v.default : w.default, label: fe, link: "/i/premium", onClick: mi("premium_hub") },
                        Mi = { label: ne, link: "/logout", icon: C.default, onClick: mi("logout_overflow_item"), testID: Y.Z.logout },
                        Li = { icon: T.default, label: ce, link: (0, s.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: mi("twitter_ads_item") },
                        Ei = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Pi = { icon: Z.default, label: ae, link: Ei ? "/i/monetization" : "/settings/monetization", onClick: mi("monetization") },
                        Ii = { icon: S.default, label: oe, link: "/settings", onClick: mi("settings_overflow_item"), testID: Y.Z.settings },
                        Vi = () => ({
                            label: Ae ? he : ue,
                            onClick: () => (
                                Ae &&
                                    Ue &&
                                    Ee.get(Ce).then((e) => {
                                        const i = { ...e, [Ue?.key]: !0 };
                                        Ee.set(Ce, i);
                                    }),
                                mi("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: F.default,
                            decoration: Ve && Ae && Ue ? l.createElement(o.ZP, { background: "blue500" }, Ue.label) : null,
                        }),
                        xi = { label: ue, onClick: mi("verified_organization_dashboard_item"), link: "/i/verified", icon: F.default },
                        Ai = { label: _e, onClick: mi("create_space_item"), link: "/i/spaces/start", icon: M.default },
                        Ki = { label: me, onClick: mi("go_live_item"), link: "/i/go-live", icon: L.default },
                        Ui = c ? { label: pe, onClick: mi("communities_item"), link: `/${c.screen_name}/communities`, icon: E.default } : void 0,
                        Gi = He && c ? { label: ve, onClick: mi("chat_item"), link: "/i/chat", icon: P.default, decoration: l.createElement(o.ZP, { background: "blue500" }, we) } : void 0,
                        Oi = i.isTrue("spaces_conference_enabled") || !!ci,
                        zi = { label: "Conferences", onClick: mi("conferences_item"), link: "/i/conferences", icon: L.default },
                        ji = { label: ge, onClick: mi("jobs_item"), link: "/jobs", icon: I.default },
                        Di = [fi, bi],
                        Ri = Qe && !Ye,
                        Bi = $e,
                        qi = (0, x.Z)([Gi, wi, ei ? Fi : void 0, oi ? Ci : void 0, Ri ? Si() : void 0, di ? Ui : void 0, De ? hi : void 0, ki, ii ? pi : void 0, Bi ? (Je ? xi : Vi()) : void 0, si ? Ti : void 0, qe ? gi : void 0, Ze || Te ? vi : void 0, _i ? Zi() : void 0, Pi, Li, ri ? ji : void 0, Oi ? zi : void 0, Ii, Mi]).filter(je),
                        Ni = l.useContext(U.hC),
                        Qi = (0, x.Z)([Gi, O.yw.Lists > Ni && De ? hi : void 0, O.yw.Premium > Ni && ei ? Fi : void 0, O.yw.PremiumSignup > Ni && Ri ? Si() : void 0, O.yw.Bookmarks > Ni ? ki : void 0, O.yw.Payments > Ni && oi ? Ci : void 0, O.yw.Communities > Ni && di ? Ui : void 0, O.yw.Articles > Ni && Xe ? pi : void 0, O.yw.CommunityNotes > Ni && qe ? gi : void 0, O.yw.Analytics > Ni && _i ? Zi() : void 0, Pi, O.yw.VerifiedOrgDash > Ni && Bi && Je ? xi : void 0, (((!Je || r.isLegacyVerifiedOrg()) && O.yw.VerifiedOrgSignup > Ni) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Vi() : void 0, si ? Ti : void 0, Ne ? yi : void 0, Ze || Te ? vi : void 0, Li, O.yw.Jobs > Ni && ri ? ji : void 0, void 0, ni ? Ai : void 0, ai ? Ki : void 0, Oi ? zi : void 0, Ii]).filter(je);
                    return (0, D.ZP)() ? ((Se = Se.concat(Qi)), We && Be && (Fe = Di)) : ((Se = Se.concat(qi)), We && (Fe = Di)), { coreItems: Se, countrySpecificItems: Fe };
                };
        },
        206962: (e, i, t) => {
            t.d(i, { Z: () => l });
            const l = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        232870: (e, i, t) => {
            t.r(i), t.d(i, { DashModal: () => h, default: () => w });
            var l = t(807896),
                n = (t(136728), t(202784)),
                a = t(325686),
                s = t(67369),
                o = t(154003),
                r = t(392237),
                c = t(837020),
                d = t(629949),
                u = t(757700),
                _ = t(555079),
                m = t(125363),
                p = t(466036),
                f = t(714951),
                b = t(879526);
            const g = "0.1s",
                k = () => !1;
            function y(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const h = ({ closeMenu: e, ...i }) => {
                    const [t, r] = n.useState(!1);
                    n.useEffect(() => {
                        setTimeout(() => r(!0), 0);
                    }, [r]);
                    const g = (0, f.Q)({ ...i, withExtendedItems: !0 }),
                        { acceptedIds: h, ids: w } = (0, m.v9)(p.sC),
                        { coreItems: C, countrySpecificItems: T } = (0, b.O)({ analytics: i.analytics, featureSwitches: i.featureSwitches, onClose: e, userClaims: i.userClaims, viewerUser: i.viewerUser, acceptedFollowerCount: h.length, pendingFollowerCount: w.length - h.length }),
                        Z = n.useCallback(() => {
                            r(!1),
                                setTimeout(() => {
                                    e();
                                }, 100);
                        }, [e]),
                        S = n.useCallback(
                            (e) => {
                                e.stopPropagation(), Z();
                            },
                            [Z],
                        ),
                        F = (0, s.pj)(),
                        M = (0, s.GS)(),
                        L = n.useMemo(() => {
                            const e = [],
                                i = new Set();
                            return (
                                g.forEach((t, a) => {
                                    const { component: s, renderIcon: o, ...r } = t,
                                        c = y(r.path);
                                    c && i.add(c), e.push(n.createElement(s, (0, l.Z)({}, r, { isActive: k, key: c, rank: void 0, renderIcon: () => o(!1, v.iconColor), size: M ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !M })));
                                }),
                                [...C, ...T].forEach((t, a) => {
                                    const { badgeCount: s, component: o, decoration: r, icon: c, iconColor: u, link: _, pip: m, rightControl: p, ...f } = t,
                                        b = y(_);
                                    b && !i.has(b) && e.push(n.createElement(d.ZP, (0, l.Z)({}, f, { "aria-label": f.label, isActive: k, key: g.length + a, layout: "vertical", path: b, rank: void 0, renderIcon: () => (c ? n.createElement(c, { style: [v.icon, v.iconColor] }) : null), size: M ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !M })));
                                }),
                                e
                            );
                        }, [C, T, M, g]);
                    return n.createElement(u.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: Z, style: [v.modal, t && v.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, n.createElement(a.Z, { "aria-labelledby": _.Q_, "aria-modal": !0, onClick: S, role: "dialog", style: v.dashModalStyle }, n.createElement(o.ZP, { icon: n.createElement(c.default, { size: 32, style: v.iconColor }), size: "large", style: v.closeButton, type: "primaryText" }), n.createElement(a.Z, { style: [v.dashModalGrid, F && v.dashModalGridNarrow, M && v.dashModalGridVeryNarrow, t && v.dashModalGridAnimatedIn] }, L)));
                },
                v = r.default.create((e) => ({ modal: { transition: `opacity ${g} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${g} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                w = h;
        },
        16222: (e, i, t) => {
            function l(e, i) {
                try {
                    return e();
                } catch (e) {
                    return i(e);
                }
            }
            t.d(i, { o: () => l });
        },
        477403: (e, i, t) => {
            t.d(i, { eY: () => _, si: () => g, vC: () => u });
            t(543673), t(240753), t(128399);
            var l = t(395337),
                n = t(202784),
                a = (t(585488), t(516951)),
                s = t(952793),
                o = t(16222),
                r = t(125363),
                c = t(919022),
                d = t(535338);
            function u(e) {
                return (0, r.v9)(_);
            }
            function _(e) {
                return (function (e) {
                    if (!e) return;
                    const i = (0, o.o)(() => new URL(e), a.Z);
                    if (!i || !m.includes(i.host)) return;
                    const t = i.pathname.slice(1).toLowerCase();
                    return p[t];
                })(c.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const m = ["twitter.com", "x.com"],
                p = { xai: "1661523610111193088" },
                f = Object.values(p),
                b = l.Z;
            function g() {
                const e = (0, d.p)(b, {}),
                    i = (0, s.hC)("spaces_conference_enabled");
                return n.useMemo(() => {
                    const t = e.affiliations?.affiliated_account_ids_results,
                        l = (
                            t?.flatMap(({ rest_id: e, result: i }) => {
                                if ("User" !== i?.__typename) return [];
                                return [{ name: i.core.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => f.includes(e));
                    return i && !l.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...l] : l;
                }, [e.affiliations?.affiliated_account_ids_results, i]);
            }
        },
        662678: (e, i, t) => {
            t.d(i, { G: () => n, Z: () => l });
            t(136728);
            const l = function (e, i) {
                return n(e, i);
            };
            function n(e, i) {
                return e.reduce(
                    (t, l, n) => {
                        const a = i ? i(l, n, e) : !!l;
                        return a && t[0].push(l), !a && t[1].push(l), t;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.904f31aa.js.map
