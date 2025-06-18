"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal", "icons/IconDraw-js", "icons/IconHeartBurst-js"],
    {
        395337: (e, i, t) => {
            t.d(i, { Z: () => r });
            var l,
                n,
                a,
                o,
                s = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(l = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [l, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [n, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, o], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            s.hash = "42f499bfb2697230967b662ad70f78f8";
            const r = s;
        },
        879526: (e, i, t) => {
            t.d(i, { O: () => Te });
            var l = t(202784),
                n = t(400752),
                a = t(537392),
                o = t(688715),
                s = t(868634),
                r = t(111677),
                c = t.n(r),
                d = t(1753),
                u = t(625271),
                m = t(883069),
                _ = t(279849),
                p = t(197318),
                f = t(689582),
                b = t(256260),
                g = t(511323),
                h = t(80361),
                k = t(856151),
                v = t(53674),
                y = t(792618),
                w = t(520913),
                C = t(297896),
                T = t(175564),
                Z = t(748138),
                M = t(698891),
                S = t(68290),
                E = t(707570),
                z = t(839),
                F = t(593875),
                L = t(829110),
                I = t(720930),
                P = t(516951),
                V = t(450681),
                x = t(400915),
                A = t(420182),
                K = t(997657),
                U = t(306114),
                j = t(279918),
                G = t(722517),
                O = t(880647),
                D = t(655352),
                B = t(125363),
                R = t(466036),
                H = t(390387),
                q = t(76920),
                N = t(477403),
                Q = t(104119),
                W = t(484633),
                $ = t(381904),
                Y = t(206962);
            const J = c().a15648a4,
                X = c().i3145aa0,
                ee = c().cdf89b84,
                ie = c().i83d4f14,
                te = c().aeede01a,
                le = c().b0041756,
                ne = c().ae1bbb26,
                ae = c().d299431c,
                oe = c().fa98627a,
                se = c().fd442790,
                re = c().da137d9a,
                ce = c().e0cb0c72,
                de = c().j087774e,
                ue = c().e2eef3c2,
                me = c().b55d8a78,
                _e = c().e5323e36,
                pe = c().h02a6fe6,
                fe = c().f75d1806,
                be = c().a5a30af0,
                ge = c().b007440a,
                he = c().a5cbc19a,
                ke = c().d13d697c,
                ve = c().j0e2cfa8,
                ye = c().h5e38204,
                we = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: t = P.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Me = [],
                        Se = [];
                    const Ee = (0, G.Z)("PremiumNav"),
                        ze = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Fe = (0, n.Dv)(A.lZ),
                        [Le, Ie] = l.useState(!1),
                        [Pe, Ve] = l.useState(!1),
                        xe = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ae = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ke = (0, Q.Md)(Ae);
                    l.useEffect(() => {
                        Ke &&
                            Fe.get(Ce).then((e) => {
                                Ie(!e?.analyticsClickedV2), Ve(!e?.[Ke?.key]);
                            });
                    }, [Fe, Ke]);
                    const Ue = (0, B.I0)();
                    l.useEffect(() => {
                        c?.protected && Ue(R.GE());
                    }, [Ue, c]);
                    const je = (0, q.Zy)();
                    je.size > 0 && je.add("/settings");
                    const Ge = (0, B.v9)(H.Lz),
                        Oe = ({ link: e }) => !(Ge && (("string" == typeof e && ((e.startsWith("/settings") && !je.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        De = c?.screen_name || "",
                        Be = (0, a.iv)().width,
                        Re = O.Z.isOneColumnLayout(Be) || O.Z.isOneColumnSquishedLayout(Be),
                        He = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Ge,
                        qe = i.isTrue("branded_like_preview_enabled"),
                        Ne = i.isTrue("subscriptions_sign_up_enabled"),
                        Qe = i.isTrue("dash_region_specific_de_media_transparency_items_enabled"),
                        We = i.isTrue("blue_business_vo_nav_for_legacy_verified"),
                        $e = i.isTrue("rweb_xchat_enabled"),
                        Ye = r.isAnyPremiumSubscriber(),
                        Je = r.isVerifiedOrg(),
                        Xe = r.isTrueAndEnabled("subscriptions_feature_article_composer"),
                        ei = Ye,
                        ii = r.isTrueAndEnabled("subscriptions_feature_article_composer") && !(0, D.ZP)(),
                        { role: ti } = (0, x.l7)(),
                        { activeItem: li } = (0, $.Y)(),
                        ni = i.isTrue("voice_rooms_web_space_creation") && ti !== W.Q.host && li?.type !== W.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        oi = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        si = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, N.vC)(),
                        di = i.isTrue("c9s_enabled") && !!c,
                        ui = (0, U.Z)(),
                        mi = l.useMemo(() => !(Ye || !ui) && i.isTrue("subscriptions_upsells_app_tab_bar_analytics_upsell_enabled"), [Ye, i, ui]),
                        _i = (i) => () => {
                            i && e.scribe({ section: "overflow_menu", element: i, action: "click", data: { message: "VDL redesign dash menu item" } }), t && t();
                        },
                        pi = { icon: d.default, label: be, link: "/compose/articles", onClick: _i("article_composer") },
                        fi = { label: re, link: (0, o.ju)("https://help.x.com/de/using-twitter/twitter-timeline"), onClick: _i("german_transparency_item") },
                        bi = { label: te, link: (0, o.ju)("https://legal.x.com/imprint.html"), onClick: _i("imprint_item") },
                        gi = { icon: u.default, label: J, link: "/i/communitynotes", onClick: _i("birdwatch") },
                        hi = { icon: m.default, label: X, link: "/i/bookmarks", onClick: _i("bookmarks_overflow_item") },
                        ki = { icon: _.default, label: ee, link: "/i/branded_likes_preview", onClick: _i("branded_likes_preview_overflow_item") },
                        vi = (p.default, _i("labs_item"), { icon: f.default, label: le, link: `/${De}/lists`, onClick: _i("lists_overflow_item") }),
                        yi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: _i("follower_requests_overflow_item") },
                        wi = { icon: g.default, label: oe, link: `/${De}`, onClick: _i("profile_overflow_item") },
                        Ci = { icon: h.default, label: "Money", link: "/i/money", onClick: _i("payments_overflow_item") },
                        Ti = { icon: k.default, label: de, link: "/i/coins", onClick: _i("twitter_coins") },
                        Zi = () => ({
                            icon: v.default,
                            label: he,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Fe.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Fe.set(Ce, i);
                                }),
                                _i("analytics")),
                            decoration: Le ? l.createElement(s.ZP, { background: "blue500" }, ke) : null,
                        }),
                        Mi = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: t } = e ? Ee : {},
                                n = "UpsellButtonRenderProperties" === t?.render_properties.__typename && t.render_properties.action_label ? t.render_properties.action_label : fe,
                                a = "UpsellButtonRenderProperties" === Ee?.upsellContent?.render_properties.__typename ? Ee.upsellContent.render_properties.decoration_label : null;
                            return { icon: ze ? y.default : w.default, label: n, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: _i("verified_overflow_item"), decoration: a ? l.createElement(s.ZP, { background: "blue500" }, a) : null };
                        },
                        Si = { icon: ze ? y.default : w.default, label: fe, link: "/i/premium", onClick: _i("premium_hub") },
                        Ei = { label: ne, link: "/logout", icon: C.default, onClick: _i("logout_overflow_item"), testID: Y.Z.logout },
                        zi = { icon: T.default, label: ce, link: (0, o.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: _i("twitter_ads_item") },
                        Fi = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Li = { icon: Z.default, label: ae, link: Fi ? "/i/monetization" : "/settings/monetization", onClick: _i("monetization") },
                        Ii = { icon: M.default, label: se, link: "/settings", onClick: _i("settings_overflow_item"), testID: Y.Z.settings },
                        Pi = () => ({
                            label: xe ? ve : ue,
                            onClick: () => (
                                xe &&
                                    Ke &&
                                    Fe.get(Ce).then((e) => {
                                        const i = { ...e, [Ke?.key]: !0 };
                                        Fe.set(Ce, i);
                                    }),
                                _i("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: S.default,
                            decoration: Pe && xe && Ke ? l.createElement(s.ZP, { background: "blue500" }, Ke.label) : null,
                        }),
                        Vi = { label: ue, onClick: _i("verified_organization_dashboard_item"), link: "/i/verified", icon: S.default },
                        xi = { label: me, onClick: _i("create_space_item"), link: "/i/spaces/start", icon: E.default },
                        Ai = { label: _e, onClick: _i("go_live_item"), link: "/i/go-live", icon: z.default },
                        Ki = c ? { label: pe, onClick: _i("communities_item"), link: `/${c.screen_name}/communities`, icon: F.default } : void 0,
                        Ui = $e && c ? { label: ye, onClick: _i("chat_item"), link: "/i/chat", icon: L.default, decoration: l.createElement(s.ZP, { background: "blue500" }, we) } : void 0,
                        ji = i.isTrue("spaces_conference_enabled") || !!ci,
                        Gi = { label: "Conferences", onClick: _i("conferences_item"), link: "/i/conferences", icon: z.default },
                        Oi = { label: ge, onClick: _i("jobs_item"), link: "/jobs", icon: I.default },
                        Di = [fi, bi],
                        Bi = Ne && !Ye,
                        Ri = We,
                        Hi = (0, V.Z)([Ui, wi, ei ? Si : void 0, si ? Ci : void 0, Bi ? Mi() : void 0, di ? Ki : void 0, De ? vi : void 0, hi, ii ? pi : void 0, Ri ? (Je ? Vi : Pi()) : void 0, oi ? Ti : void 0, He ? gi : void 0, Ze || Te ? yi : void 0, mi ? Zi() : void 0, Li, zi, ri ? Oi : void 0, ji ? Gi : void 0, Ii, Ei]).filter(Oe),
                        qi = l.useContext(K.hC),
                        Ni = (0, V.Z)([Ui, j.yw.Lists > qi && De ? vi : void 0, j.yw.Premium > qi && ei ? Si : void 0, j.yw.PremiumSignup > qi && Bi ? Mi() : void 0, j.yw.Bookmarks > qi ? hi : void 0, j.yw.Payments > qi && si ? Ci : void 0, j.yw.Communities > qi && di ? Ki : void 0, j.yw.Articles > qi && Xe ? pi : void 0, j.yw.CommunityNotes > qi && He ? gi : void 0, j.yw.Analytics > qi && mi ? Zi() : void 0, Li, j.yw.VerifiedOrgDash > qi && Ri && Je ? Vi : void 0, (((!Je || r.isLegacyVerifiedOrg()) && j.yw.VerifiedOrgSignup > qi) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Pi() : void 0, oi ? Ti : void 0, qe ? ki : void 0, Ze || Te ? yi : void 0, zi, j.yw.Jobs > qi && ri ? Oi : void 0, void 0, ni ? xi : void 0, ai ? Ai : void 0, ji ? Gi : void 0, Ii]).filter(Oe);
                    return (0, D.ZP)() ? ((Me = Me.concat(Ni)), Qe && Re && (Se = Di)) : ((Me = Me.concat(Hi)), Qe && (Se = Di)), { coreItems: Me, countrySpecificItems: Se };
                };
        },
        206962: (e, i, t) => {
            t.d(i, { Z: () => l });
            const l = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        232870: (e, i, t) => {
            t.r(i), t.d(i, { DashModal: () => v, default: () => w });
            var l = t(807896),
                n = (t(136728), t(202784)),
                a = t(325686),
                o = t(67369),
                s = t(154003),
                r = t(392237),
                c = t(837020),
                d = t(629949),
                u = t(757700),
                m = t(555079),
                _ = t(125363),
                p = t(466036),
                f = t(714951),
                b = t(879526);
            const g = "0.1s",
                h = () => !1;
            function k(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const v = ({ closeMenu: e, ...i }) => {
                    const [t, r] = n.useState(!1);
                    n.useEffect(() => {
                        setTimeout(() => r(!0), 0);
                    }, [r]);
                    const g = (0, f.Q)({ ...i, withExtendedItems: !0 }),
                        { acceptedIds: v, ids: w } = (0, _.v9)(p.sC),
                        { coreItems: C, countrySpecificItems: T } = (0, b.O)({ analytics: i.analytics, featureSwitches: i.featureSwitches, onClose: e, userClaims: i.userClaims, viewerUser: i.viewerUser, acceptedFollowerCount: v.length, pendingFollowerCount: w.length - v.length }),
                        Z = n.useCallback(() => {
                            r(!1),
                                setTimeout(() => {
                                    e();
                                }, 100);
                        }, [e]),
                        M = n.useCallback(
                            (e) => {
                                e.stopPropagation(), Z();
                            },
                            [Z],
                        ),
                        S = (0, o.pj)(),
                        E = (0, o.GS)(),
                        z = n.useMemo(() => {
                            const e = [],
                                i = new Set();
                            return (
                                g.forEach((t, a) => {
                                    const { component: o, renderIcon: s, ...r } = t,
                                        c = k(r.path);
                                    c && i.add(c), e.push(n.createElement(o, (0, l.Z)({}, r, { isActive: h, key: c, rank: void 0, renderIcon: () => s(!1, y.iconColor), size: E ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !E })));
                                }),
                                [...C, ...T].forEach((t, a) => {
                                    const { badgeCount: o, component: s, decoration: r, icon: c, iconColor: u, link: m, pip: _, rightControl: p, ...f } = t,
                                        b = k(m);
                                    b && !i.has(b) && e.push(n.createElement(d.ZP, (0, l.Z)({}, f, { "aria-label": f.label, isActive: h, key: g.length + a, layout: "vertical", path: b, rank: void 0, renderIcon: () => (c ? n.createElement(c, { style: [y.icon, y.iconColor] }) : null), size: E ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !E })));
                                }),
                                e
                            );
                        }, [C, T, E, g]);
                    return n.createElement(u.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: Z, style: [y.modal, t && y.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, n.createElement(a.Z, { "aria-labelledby": m.Q_, "aria-modal": !0, onClick: M, role: "dialog", style: y.dashModalStyle }, n.createElement(s.ZP, { icon: n.createElement(c.default, { size: 32, style: y.iconColor }), size: "large", style: y.closeButton, type: "primaryText" }), n.createElement(a.Z, { style: [y.dashModalGrid, S && y.dashModalGridNarrow, E && y.dashModalGridVeryNarrow, t && y.dashModalGridAnimatedIn] }, z)));
                },
                y = r.default.create((e) => ({ modal: { transition: `opacity ${g} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${g} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                w = v;
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
            t.d(i, { eY: () => m, si: () => g, vC: () => u });
            t(543673), t(240753), t(128399);
            var l = t(395337),
                n = t(202784),
                a = (t(585488), t(516951)),
                o = t(952793),
                s = t(16222),
                r = t(125363),
                c = t(919022),
                d = t(535338);
            function u(e) {
                return (0, r.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const i = (0, s.o)(() => new URL(e), a.Z);
                    if (!i || !_.includes(i.host)) return;
                    const t = i.pathname.slice(1).toLowerCase();
                    return p[t];
                })(c.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const _ = ["twitter.com", "x.com"],
                p = { xai: "1661523610111193088" },
                f = Object.values(p),
                b = l.Z;
            function g() {
                const e = (0, d.p)(b, {}),
                    i = (0, o.hC)("spaces_conference_enabled");
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
        197318: (e, i, t) => {
            t.r(i), t.d(i, { default: () => r });
            var l = t(202784),
                n = t(890601),
                a = t(783427),
                o = t(347101);
            const s = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M8.7 2.4c.7-.6 1.5-1 2.3-1.4.5-.2 1.1-.3 1.7-.3.4 0 .8.1 1.1.3s.7.4.9.7c.2.3.3.6.4 1 .1.4.1.7 0 1.1-.1.5-.2 1-.4 1.4-.4.8-.8 1.5-1.3 2.2-1.8 2.8-3.9 5.1-5.7 7.7-.4.6-.9 1.3-1.3 1.9-.2.3-.4.6-.6 1.1-.3.6.2.8.8.5 2.3-1.1 10.3-11.2 12.8-9 .3.3 1.7 1.5-1.3 5.8-.4.6-.7 1.1-1.1 1.6-.5.7-1.1 1.5-1.6 2.3-.4.6-.7 1.2-1 1.9-.1.2-.2.6 0 .8.4.4 1.9-.7 3.7-2.4l3.2-3.2c.5-.5 1.2.1.7.7-1.6 1.9-5.5 6.4-7.5 6.3-.4 0-.7-.1-1-.3s-.5-.5-.6-.8c-.1-.2-.2-.7.1-1.5.3-.8.6-1.6 1.1-2.3.5-.8 1-1.7 1.5-2.4.3-.5.7-1.1 1-1.6.3-.5.8-1.4 1.2-2 .2-.3.6-.9.2-1.2-.2-.2-.5-.2-1.3.6 0 0-6.6 6.7-9 8.4-1.3.9-2.8 1.2-3.6.4-1-.9-1.6-2.5 1.5-6.4 3.1-3.8 6.5-8.7 6.8-9.6.1-.2.1-.4.1-.5.1-.5-.5-.9-1-.7-.3.2-.8.5-1.6 1.2-2.3 2-4.3 4.3-6.1 6.8-.1.2-.3.3-.5.4s-.4.2-.6.2c-.4.1-.8-.1-1.2-.3-.3-.2-.5-.6-.6-1v-.6c.1-.2.1-.4.3-.5 2.7-2.9 5-5.2 7.5-7.3z" })) }, { writingDirection: i });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
        279849: (e, i, t) => {
            t.r(i), t.d(i, { default: () => r });
            var l = t(202784),
                n = t(890601),
                a = t(783427),
                o = t(347101);
            const s = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: i });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.2b1c482a.js.map
