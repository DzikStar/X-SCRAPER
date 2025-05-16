"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileProfileSpotlight-8ed0fac5"],
    {
        97882: (e, t, o) => {
            o.d(t, { T: () => n, x: () => s });
            var a = o(332920),
                r = o.n(a);
            const n = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                s = ({ amount: e, currencyCode: t = "USD", formatter: o = 1e6, removeTrailingZeros: a = !1, strictAmount: r = !1 }) => {
                    const s = r ? e : parseInt(e, 10) / o,
                        l = n[t]?.(s);
                    return a ? i(l) : l;
                },
                i = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        955010: (e, t, o) => {
            o.d(t, { B: () => p });
            var a = o(265433),
                r = o(202784),
                n = (o(585488), o(351743)),
                s = o.n(n),
                i = o(468811),
                l = o.n(i),
                c = o(71620);
            const d = a.Z;
            function p(e, t, o) {
                const [a] = s()(d),
                    n = (0, c.po)();
                return r.useCallback(
                    (r, s) => {
                        a({
                            variables: { module_id: s, enabled_for_display: r },
                            optimisticResponse: { user_update_module_visibility: { user_results: { id: l().v4(), result: { __typename: "User", id: e, editable_profilemodules: { modules_for_display: r ? [{ module_id: s }] : [] } } } } },
                            onError: (e) => {
                                n(e);
                            },
                            onCompleted: () => {
                                t && o && (t(!1), o());
                            },
                        });
                    },
                    [n, o, t, e, a],
                );
            }
        },
        882602: (e, t, o) => {
            o.r(t), o.d(t, { ProfileSpotlightScreen: () => ie, default: () => ce, profileSpotlightsQuery: () => se });
            o(136728);
            var a = o(184329),
                r = o(202784),
                n = o(325686),
                s = (o(585488), o(107267)),
                i = o(682830),
                l = o(834324),
                c = o(457311),
                d = o(392237),
                p = o(332920),
                u = o.n(p),
                m = o(262009),
                b = o(370751),
                f = o(187669),
                g = o(443781),
                _ = o(725516),
                C = o(535338),
                h = o(262316),
                y = o(709402),
                E = o(955010);
            const Z = Object.freeze({ Shop: "Shop", Newsletter: "Newsletter", Location: "About", App: "App", Link: "Link", Communities: "Communities", Jobs: "Jobs" }),
                w = Object.freeze({ [Z.App]: "app_module", [Z.Location]: "about_module", [Z.Newsletter]: "revue_module", [Z.Shop]: "shop_module", [Z.Link]: "link_module", [Z.Communities]: "communities_module", [Z.Jobs]: "jobs_module" });
            function S(e, t) {
                return { section: "module_overview", component: w[e], element: "switch", action: t ? "enabled" : "disabled" };
            }
            function R(e) {
                return { section: "module_overview", component: w[e], element: "configure", action: "click" };
            }
            var v = o(83005),
                D = o(277660),
                T = o.n(D),
                k = o(731708),
                P = o(451566),
                B = o(242454),
                A = o(800536);
            const H = { spotlightConfigRow: "spotlight_config_row" },
                L = u().abd845fe,
                I = u().i6e7e298,
                z = v.Z;
            function F(e) {
                const { isConfigurable: t, isFeatured: o, onFeatureSpotlight: a, spotlightRef: i } = e,
                    l = T()(z, i),
                    c = (0, s.useHistory)(),
                    d = (0, _.z)(),
                    p = l.module_data?.module_id,
                    u = l.module_type,
                    m = !!p,
                    b = t && A.bL[u],
                    f = t || m,
                    g = r.useCallback(
                        (e) => {
                            d.scribe(S(u, e)), p ? a(e, p) : b && c.push(b);
                        },
                        [d, b, c, a, p, u],
                    ),
                    C = r.useCallback(() => {
                        d.scribe(R(u)), b && c.push(b);
                    }, [d, b, c, u]);
                return f ? r.createElement(n.Z, { testID: H.spotlightConfigRow }, r.createElement(n.Z, { role: "label", style: N.row }, r.createElement(n.Z, { style: N.title }, r.createElement(k.ZP, { weight: "bold" }, l.title), r.createElement(P.Z, { onValueChange: g, value: o })), r.createElement(n.Z, { style: N.descriptionContainer }, r.createElement(k.ZP, { color: "gray700", size: "subtext2" }, l.subtitle))), b && r.createElement(n.Z, { style: N.editRow }, r.createElement(n.Z, { style: N.editButtonWrapper }, r.createElement(B.Z, { align: "left", color: "primary", label: m ? L : I, onPress: C })))) : null;
            }
            const N = d.default.create((e) => ({ descriptionContainer: { paddingTop: e.spaces.space2 }, editRow: { paddingStart: e.spaces.space12 }, editButtonWrapper: { borderTopColor: e.colors.borderColor, borderTopWidth: e.spaces.space1 }, emptyStateContainer: { height: "100%", display: "flex", alignItems: "center", flexDirection: "row" }, row: { borderTopColor: e.colors.borderColor, borderTopWidth: e.spaces.space1, paddingBottom: e.spaces.space12, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingTop: e.spaces.space12 }, title: { alignItems: "center", flexDirection: "row", flexGrow: 1, justifyContent: "space-between" } }));
            var x = o(285485),
                K = o(273086),
                W = o(154003),
                U = o(885724),
                j = o(585356),
                G = o(257466);
            const M = u().abd845fe,
                O = u().i6e7e298,
                Y = u().a71d7584,
                J = u().fc779c28,
                Q = r.createElement(U.default, null),
                V = K.Z,
                X = x.Z;
            function q(e) {
                const { isConfigurable: t, isFeatured: o, onFeatureSpotlight: a, spotlightRef: i, userRef: l } = e,
                    c = T()(V, l),
                    d = T()(X, i),
                    p = (0, s.useHistory)(),
                    u = (0, _.z)(),
                    m = d.module_data?.module_id,
                    b = d.module_type,
                    f = !!m,
                    g = A.bL[b],
                    C = t || f,
                    h = r.useCallback(() => {
                        u.scribe(R(b)), g && p.push(g);
                    }, [u, g, p, b]),
                    y = r.useCallback(() => {
                        u.scribe(S(b, !o)), m && a(!o, m);
                    }, [u, o, a, m, b]);
                if (!C) return null;
                return r.createElement(
                    n.Z,
                    { style: $.root, testID: H.spotlightConfigRow },
                    r.createElement(n.Z, { style: $.summaryContainer }, r.createElement(k.ZP, { size: "headline1", style: $.summaryTitle, weight: "bold" }, d.title), r.createElement(k.ZP, { color: "gray700", size: "body" }, d.subtitle)),
                    (function () {
                        if (f && d.module_data?.profile_module && c) return r.createElement(j.Z, null, r.createElement(G.Z, { profileSpotlightRef: d.module_data?.profile_module, showLabel: !1, userRef: c }));
                    })(),
                    (function () {
                        const e = "large";
                        return f ? r.createElement(n.Z, { style: $.actionsContainer }, r.createElement(W.ZP, { onPress: y, size: e, style: $.mainActionButton, type: o ? "primaryFilled" : "primaryOutlined" }, o ? Y : J), r.createElement(W.ZP, { "aria-label": M, disabled: !t, icon: Q, onPress: h, size: e })) : r.createElement(n.Z, { style: $.actionsContainer }, r.createElement(W.ZP, { disabled: !t, onPress: h, size: e, style: $.mainActionButton, type: "primaryOutlined" }, O));
                    })(),
                );
            }
            const $ = d.default.create((e) => ({ root: { borderTopColor: e.colors.borderColor, borderTopWidth: e.spaces.space1, paddingBottom: e.spaces.space12, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingTop: e.spaces.space12 }, summaryContainer: { paddingBottom: e.spaces.space8 }, summaryTitle: { paddingBottom: e.spaces.space4 }, previewContainer: { paddingBottom: e.spaces.space4 }, actionsContainer: { flexDirection: "row", gap: e.spaces.space12, justifyContent: "space-between", paddingBottom: e.spaces.space4 }, mainActionButton: { flex: 1 } }));
            var ee = o(478282);
            const te = u().d4b6a6e0,
                oe = u().e44eab74,
                ae = u().ce4185bc,
                re = u().b5aed332,
                ne = "/settings/professional_profile",
                se = a.Z;
            function ie(e) {
                const { viewerUserId: t } = e,
                    o = (0, s.useHistory)(),
                    a = (0, _.z)(),
                    { featureSwitches: i } = r.useContext(g.rC),
                    d = (0, C.p)(se, { userId: t }, { fetchPolicy: "store-and-network" }),
                    p = (0, E.B)(d.user.result?.id);
                (0, f.q)(() => {
                    a.scribe({ section: "module_overview", action: "impression" });
                });
                const u = d.user.result?.editable_profilemodules,
                    h = r.useMemo(() => (0, b.Z)(u?.modules_for_display?.map(({ module_id: e }) => e) || []), [u]),
                    Z = r.useMemo(() => {
                        const e = [];
                        return i.isTrue("responsive_web_location_spotlight_v1_config") && e.push(y.Y.Location), i.isTrue("responsive_web_mobile_app_spotlight_v1_config") && e.push(y.Y.App), e.push(y.Y.Communities), (0, b.Z)(e);
                    }, [i]),
                    w = r.useMemo(() => u?.configurable_modules_v1?.filter(({ module_data: e, module_type: t }) => Z.has(t) || !!e?.module_id) || [], [Z, u]),
                    S = r.useCallback(
                        (e, t) => {
                            p(e, t);
                        },
                        [p],
                    ),
                    R = r.useCallback(() => {
                        o.goBack({ backLocation: ne });
                    }, [o]);
                if (!t) return o.push("/login"), null;
                d?.user?.result?.editable_profilemodules || R();
                const v = i.isTrue("professional_scp_v2_enabled") ? q : F;
                return r.createElement(
                    ee.Z,
                    { backButtonType: "back", onBackClick: R, title: te },
                    r.createElement(
                        r.Fragment,
                        null,
                        w.map((e) => r.createElement(v, { isConfigurable: Z.has(e.module_type), isFeatured: h.has(e.module_data?.module_id), key: e.module_type, onFeatureSpotlight: S, spotlightRef: e, userRef: d.user.result })),
                        w.length > 0 ? r.createElement(n.Z, { style: le.moreSpotlightsComingSoon }, r.createElement(l.Z, { Icon: m.default, headline: ae, type: "primary" })) : r.createElement(n.Z, { style: le.emptyStateContainer }, r.createElement(c.Z, { header: re, message: oe, style: le.emptyState })),
                    ),
                );
            }
            ie.Fallback = () => r.createElement(ee.Z, { title: te }, r.createElement(i.J, null));
            const le = d.default.create((e) => ({ editRow: { paddingStart: e.spaces.space12 }, emptyState: { width: "100%", maxWidth: "100%" }, emptyStateContainer: { height: "100%", display: "flex", alignItems: "center", flexDirection: "row" }, moreSpotlightsComingSoon: { borderTopColor: e.colors.borderColor, borderTopWidth: e.spaces.space1, paddingBottom: e.spaces.space12, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingTop: e.spaces.space12 } })),
                ce = (0, h._)(ie, { context: "PROFILE_SPOTLIGHT_SCREEN" }, r.createElement(ie.Fallback, null));
        },
        262316: (e, t, o) => {
            o.d(t, { _: () => l });
            var a = o(202784),
                r = o(443781),
                n = o(736063),
                s = o(615027);
            function i(e) {
                const { WrappedComponent: t, errorConfig: o, suspenseFallback: i } = e,
                    { viewerUserId: l } = a.useContext(r.rC);
                return l ? a.createElement(n.H, { errorConfig: o, suspenseFallback: i }, a.createElement(t, { viewerUserId: l })) : a.createElement(s.Z, { to: "/login" });
            }
            function l(e, t, o) {
                return () => a.createElement(i, { WrappedComponent: e, errorConfig: t, suspenseFallback: o });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileProfileSpotlight-8ed0fac5.2dcdcc0a.js.map
