"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal", "icons/IconCameraVideoStroke-js"],
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
                k = t(80361),
                h = t(856151),
                y = t(53674),
                v = t(792618),
                w = t(520913),
                C = t(297896),
                T = t(175564),
                Z = t(748138),
                S = t(698891),
                M = t(68290),
                E = t(707570),
                F = t(839),
                L = t(593875),
                P = t(829110),
                I = t(720930),
                V = t(516951),
                z = t(450681),
                x = t(400915),
                A = t(420182),
                K = t(997657),
                U = t(306114),
                G = t(279918),
                O = t(722517),
                j = t(880647),
                D = t(655352),
                B = t(125363),
                R = t(466036),
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
                ke = c().a5cbc19a,
                he = c().d13d697c,
                ye = c().j0e2cfa8,
                ve = c().h5e38204,
                we = c().h7d5d9fa,
                Ce = "rweb.navItemDecorations",
                Te = ({ analytics: e, featureSwitches: i, onClose: t = V.Z, userClaims: r, viewerUser: c, acceptedFollowerCount: Te, pendingFollowerCount: Ze }) => {
                    let Se = [],
                        Me = [];
                    const Ee = (0, O.Z)("PremiumNav"),
                        Fe = i.isTrue("subscriptions_branding_checkmark_logo_enabled"),
                        Le = (0, n.Dv)(A.lZ),
                        [Pe, Ie] = l.useState(!1),
                        [Ve, ze] = l.useState(!1),
                        xe = i.isTrue("subscriptions_upsells_vo_nav_decoration_enabled"),
                        Ae = i.getStringValue("subscriptions_upsells_vo_nav_decoration_variant"),
                        Ke = (0, W.Md)(Ae);
                    l.useEffect(() => {
                        Ke &&
                            Le.get(Ce).then((e) => {
                                Ie(!e?.analyticsClickedV2), ze(!e?.[Ke?.key]);
                            });
                    }, [Le, Ke]);
                    const Ue = (0, B.I0)();
                    l.useEffect(() => {
                        c?.protected && Ue(R.GE());
                    }, [Ue, c]);
                    const Ge = (0, N.Zy)();
                    Ge.size > 0 && Ge.add("/settings");
                    const Oe = (0, B.v9)(q.Lz),
                        je = ({ link: e }) => !(Oe && (("string" == typeof e && ((e.startsWith("/settings") && !Ge.has(e)) || e.includes("ads.twitter.com") || e.includes("studio.twitter.com") || e.includes("analytics.twitter.com") || e.includes("ads.x.com") || e.startsWith("/i/chat") || e.includes("studio.x.com") || e.includes("analytics.x.com"))) || ("object" == typeof e && e.pathname.startsWith("/i/flow")))),
                        De = c?.screen_name || "",
                        Be = (0, a.iv)().width,
                        Re = j.Z.isOneColumnLayout(Be) || j.Z.isOneColumnSquishedLayout(Be),
                        qe = i.isTrue("responsive_web_birdwatch_note_writing_enabled") && !Oe,
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
                        { role: ti } = (0, x.l7)(),
                        { activeItem: li } = (0, H.Y)(),
                        ni = i.isTrue("voice_rooms_web_space_creation") && ti !== $.Q.host && li?.type !== $.W.space,
                        ai = i.isTrue("rweb_go_live_enabled"),
                        oi = i.isTrue("tweet_awards_web_coin_purchase_enabled"),
                        si = i.isTrue("payments_enabled"),
                        ri = i.isTrue("recruiting_global_jobs_search_enabled"),
                        ci = (0, Q.vC)(),
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
                        ki = { icon: m.default, label: X, link: "/i/bookmarks", onClick: _i("bookmarks_overflow_item") },
                        hi = { icon: _.default, label: ee, link: "/i/branded_likes_preview", onClick: _i("branded_likes_preview_overflow_item") },
                        yi = (p.default, _i("labs_item"), { icon: f.default, label: le, link: `/${De}/lists`, onClick: _i("lists_overflow_item") }),
                        vi = { badgeCount: Ze, icon: b.default, label: ie, link: "/follower_requests", onClick: _i("follower_requests_overflow_item") },
                        wi = { icon: g.default, label: oe, link: `/${De}`, onClick: _i("profile_overflow_item") },
                        Ci = { icon: k.default, label: "Money", link: "/i/money", onClick: _i("payments_overflow_item") },
                        Ti = { icon: h.default, label: de, link: "/i/coins", onClick: _i("twitter_coins") },
                        Zi = () => ({
                            icon: y.default,
                            label: ke,
                            link: { pathname: "/i/account_analytics", state: { cameFromUpsell: !0, referring_page: "analytics_dash_menu" } },
                            onClick:
                                (Le.get(Ce).then((e) => {
                                    const i = { ...e, analyticsClicked: !0, analyticsClickedV2: !0 };
                                    Le.set(Ce, i);
                                }),
                                _i("analytics")),
                            decoration: Pe ? l.createElement(s.ZP, { background: "blue500" }, he) : null,
                        }),
                        Si = () => {
                            const e = i.isTrue("subscriptions_upsells_premium_nav_migration_enabled"),
                                { upsellContent: t } = e ? Ee : {},
                                n = "UpsellButtonRenderProperties" === t?.render_properties.__typename && t.render_properties.action_label ? t.render_properties.action_label : fe,
                                a = "UpsellButtonRenderProperties" === Ee?.upsellContent?.render_properties.__typename ? Ee.upsellContent.render_properties.decoration_label : null;
                            return { icon: Fe ? v.default : w.default, label: n, link: { pathname: "/i/premium_sign_up", state: { referring_page: "dash_menu" } }, onClick: _i("verified_overflow_item"), decoration: a ? l.createElement(s.ZP, { background: "blue500" }, a) : null };
                        },
                        Mi = { icon: Fe ? v.default : w.default, label: fe, link: "/i/premium", onClick: _i("premium_hub") },
                        Ei = { label: ne, link: "/logout", icon: C.default, onClick: _i("logout_overflow_item"), testID: Y.Z.logout },
                        Fi = { icon: T.default, label: ce, link: (0, o.ju)("https://ads.x.com/?ref=gl-tw-tw-twitter-ads-rweb"), onClick: _i("twitter_ads_item") },
                        Li = i.isTrue("subscriptions_upsells_monetization_redesign_enabled"),
                        Pi = { icon: Z.default, label: ae, link: Li ? "/i/monetization" : "/settings/monetization", onClick: _i("monetization") },
                        Ii = { icon: S.default, label: se, link: "/settings", onClick: _i("settings_overflow_item"), testID: Y.Z.settings },
                        Vi = () => ({
                            label: xe ? ye : ue,
                            onClick: () => (
                                xe &&
                                    Ke &&
                                    Le.get(Ce).then((e) => {
                                        const i = { ...e, [Ke?.key]: !0 };
                                        Le.set(Ce, i);
                                    }),
                                _i("verified_organization_signup_item")()
                            ),
                            link: { pathname: "/i/verified-orgs-signup", state: { referring_page: "dash_menu" } },
                            icon: M.default,
                            decoration: Ve && xe && Ke ? l.createElement(s.ZP, { background: "blue500" }, Ke.label) : null,
                        }),
                        zi = { label: ue, onClick: _i("verified_organization_dashboard_item"), link: "/i/verified", icon: M.default },
                        xi = { label: me, onClick: _i("create_space_item"), link: "/i/spaces/start", icon: E.default },
                        Ai = { label: _e, onClick: _i("go_live_item"), link: "/i/go-live", icon: F.default },
                        Ki = c ? { label: pe, onClick: _i("communities_item"), link: `/${c.screen_name}/communities`, icon: L.default } : void 0,
                        Ui = He && c ? { label: ve, onClick: _i("chat_item"), link: "/i/chat", icon: P.default, decoration: l.createElement(s.ZP, { background: "blue500" }, we) } : void 0,
                        Gi = i.isTrue("spaces_conference_enabled") || !!ci,
                        Oi = { label: "Conferences", onClick: _i("conferences_item"), link: "/i/conferences", icon: F.default },
                        ji = { label: ge, onClick: _i("jobs_item"), link: "/jobs", icon: I.default },
                        Di = [fi, bi],
                        Bi = Qe && !Ye,
                        Ri = $e,
                        qi = (0, z.Z)([Ui, wi, ei ? Mi : void 0, si ? Ci : void 0, Bi ? Si() : void 0, di ? Ki : void 0, De ? yi : void 0, ki, ii ? pi : void 0, Ri ? (Je ? zi : Vi()) : void 0, oi ? Ti : void 0, qe ? gi : void 0, Ze || Te ? vi : void 0, mi ? Zi() : void 0, Pi, Fi, ri ? ji : void 0, Gi ? Oi : void 0, Ii, Ei]).filter(je),
                        Ni = l.useContext(K.hC),
                        Qi = (0, z.Z)([Ui, G.yw.Lists > Ni && De ? yi : void 0, G.yw.Premium > Ni && ei ? Mi : void 0, G.yw.PremiumSignup > Ni && Bi ? Si() : void 0, G.yw.Bookmarks > Ni ? ki : void 0, G.yw.Payments > Ni && si ? Ci : void 0, G.yw.Communities > Ni && di ? Ki : void 0, G.yw.Articles > Ni && Xe ? pi : void 0, G.yw.CommunityNotes > Ni && qe ? gi : void 0, G.yw.Analytics > Ni && mi ? Zi() : void 0, Pi, G.yw.VerifiedOrgDash > Ni && Ri && Je ? zi : void 0, (((!Je || r.isLegacyVerifiedOrg()) && G.yw.VerifiedOrgSignup > Ni) || (r.isVerifiedOrgAffiliate() && !r.isVerifiedOrg())) && i.isTrue("blue_business_vo_nav_for_legacy_verified") ? Vi() : void 0, oi ? Ti : void 0, Ne ? hi : void 0, Ze || Te ? vi : void 0, Fi, G.yw.Jobs > Ni && ri ? ji : void 0, void 0, ni ? xi : void 0, ai ? Ai : void 0, Gi ? Oi : void 0, Ii]).filter(je);
                    return (0, D.ZP)() ? ((Se = Se.concat(Qi)), We && Re && (Me = Di)) : ((Se = Se.concat(qi)), We && (Me = Di)), { coreItems: Se, countrySpecificItems: Me };
                };
        },
        206962: (e, i, t) => {
            t.d(i, { Z: () => l });
            const l = { iconPlus: "iconPlus", iconMore: "iconMore", logout: "logout", switcher: "switcher", settings: "settings", help: "help", icon: "icon", settingsAndSupport: "settingsAndSupport" };
        },
        232870: (e, i, t) => {
            t.r(i), t.d(i, { DashModal: () => y, default: () => w });
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
                k = () => !1;
            function h(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const y = ({ closeMenu: e, ...i }) => {
                    const [t, r] = n.useState(!1);
                    n.useEffect(() => {
                        setTimeout(() => r(!0), 0);
                    }, [r]);
                    const g = (0, f.Q)({ ...i, withExtendedItems: !0 }),
                        { acceptedIds: y, ids: w } = (0, _.v9)(p.sC),
                        { coreItems: C, countrySpecificItems: T } = (0, b.O)({ analytics: i.analytics, featureSwitches: i.featureSwitches, onClose: e, userClaims: i.userClaims, viewerUser: i.viewerUser, acceptedFollowerCount: y.length, pendingFollowerCount: w.length - y.length }),
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
                        M = (0, o.pj)(),
                        E = (0, o.GS)(),
                        F = n.useMemo(() => {
                            const e = [],
                                i = new Set();
                            return (
                                g.forEach((t, a) => {
                                    const { component: o, renderIcon: s, ...r } = t,
                                        c = h(r.path);
                                    c && i.add(c), e.push(n.createElement(o, (0, l.Z)({}, r, { isActive: k, key: c, rank: void 0, renderIcon: () => s(!1, v.iconColor), size: E ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !E })));
                                }),
                                [...C, ...T].forEach((t, a) => {
                                    const { badgeCount: o, component: s, decoration: r, icon: c, iconColor: u, link: m, pip: _, rightControl: p, ...f } = t,
                                        b = h(m);
                                    b && !i.has(b) && e.push(n.createElement(d.ZP, (0, l.Z)({}, f, { "aria-label": f.label, isActive: k, key: g.length + a, layout: "vertical", path: b, rank: void 0, renderIcon: () => (c ? n.createElement(c, { style: [v.icon, v.iconColor] }) : null), size: E ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !E })));
                                }),
                                e
                            );
                        }, [C, T, E, g]);
                    return n.createElement(u.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: Z, style: [v.modal, t && v.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, n.createElement(a.Z, { "aria-labelledby": m.Q_, "aria-modal": !0, onClick: S, role: "dialog", style: v.dashModalStyle }, n.createElement(s.ZP, { icon: n.createElement(c.default, { size: 32, style: v.iconColor }), size: "large", style: v.closeButton, type: "primaryText" }), n.createElement(a.Z, { style: [v.dashModalGrid, M && v.dashModalGridNarrow, E && v.dashModalGridVeryNarrow, t && v.dashModalGridAnimatedIn] }, F)));
                },
                v = r.default.create((e) => ({ modal: { transition: `opacity ${g} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${g} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                w = y;
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
        839: (e, i, t) => {
            t.r(i), t.d(i, { default: () => r });
            var l = t(202784),
                n = t(890601),
                a = t(783427),
                o = t(347101);
            const s = (e = {}) => {
                const { direction: i } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: l.createElement("g", null, l.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: i });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.c689a38a.js.map
