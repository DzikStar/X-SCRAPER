"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar"],
    {
        341979: (e, r, t) => {
            t.d(r, { Z: () => O });
            var a = t(202784),
                n = t(325686),
                i = t(73664),
                s = t(952793),
                l = t(293115),
                c = t(725405);
            const o = (e) => {
                    let r = "/i/premium_sign_up";
                    switch (e) {
                        case "PremiumBasic":
                        case "BlueVerified":
                        case "BlueVerifiedPlus":
                            r = "/i/premium_sign_up";
                    }
                    return r;
                },
                u = (e) => {
                    let r = "premium";
                    switch (e) {
                        case "PremiumBasic":
                            r = "premium_basic";
                            break;
                        case "BlueVerified":
                            r = "premium";
                            break;
                        case "BlueVerifiedPlus":
                            r = "premium_plus";
                    }
                    return r;
                },
                p = (e) => {
                    let r = "Year";
                    switch (e) {
                        case "Year":
                            r = "Year";
                            break;
                        case "Month":
                            r = "Month";
                    }
                    return r;
                },
                m = (e, r) => ({ pathname: o(r.product_category), state: { referring_page: e.referrer, tier: u(r.product_category), plan: p(r.charge_interval) } });
            var d = t(807896),
                k = t(154003);
            const b = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: n } }) => a.createElement(k.ZP, { link: r, onClick: t, type: e?.type }, n);
            var f = t(731708),
                _ = t(392237);
            const C = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, primary_label: i, secondary_label: s } }) => a.createElement(n.Z, { style: y.card }, a.createElement(f.ZP, { size: "headline1", weight: "heavy" }, i), s ? a.createElement(f.ZP, null, s) : null, a.createElement(b, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })),
                y = _.default.create((e) => ({ card: { gap: e.spaces.space12, alignItems: "flex-start", borderRadius: e.borderRadii.large, backgroundColor: e.colors.cellBackground, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                g = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const i = a.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(b, (0, d.Z)({}, n, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(C, (0, d.Z)({}, n, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, r]);
                    return a.createElement(n.Z, { testID: `super-upsell-${t.__typename}` }, i);
                },
                P = ({ attributionParams: e, trackClick: r, trackImpression: t, upsellContent: n }) => {
                    const o = (0, c.Z)(),
                        u = a.useRef(),
                        p = (0, i.R)(u, { threshold: 1 }),
                        d = (0, s.hC)("subscriptions_upsells_track_interactions_enabled");
                    a.useEffect(() => {
                        p && (d ? t() : o.scribeAction("impression"));
                    }, [p, o, t, d]);
                    const k = m(e, n.destination),
                        b = a.useCallback(() => {
                            d ? r() : o.scribeAction("click");
                        }, [o, r, d]);
                    return a.createElement("div", { ref: u }, a.createElement(l.nO, { data: { referer: e.referrer }, namespace: { component: "unified-upsell" } }, a.createElement(g, { destinationLink: k, onDestinationClick: b, renderProperties: n.render_properties })));
                },
                h = (e) => a.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell" } }, a.createElement(P, e));
            var v = t(443781),
                E = t(125363),
                D = t(390387);
            const Z = (e, r) => {
                if (!e) return null;
                const {
                    value: { default_content: t, variant_config: a },
                } = e;
                let n = t;
                if (a) {
                    const e = r.getStringValue(a.ddg_experiment_gate, void 0),
                        t = a?.variants.find((r) => r.key === e);
                    t && (n = t);
                }
                return n;
            };
            var w,
                S,
                K = {
                    fragment: {
                        argumentDefinitions: (w = [
                            { defaultValue: null, kind: "LocalArgument", name: "interactionType" },
                            { defaultValue: null, kind: "LocalArgument", name: "surfaceKey" },
                            { defaultValue: null, kind: "LocalArgument", name: "upsellContentKey" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useSuperUpsellTrackingMutation",
                        selections: (S = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "interaction_type", variableName: "interactionType" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { kind: "Variable", name: "surface_key", variableName: "surfaceKey" },
                                    { kind: "Variable", name: "upsell_content_key", variableName: "upsellContentKey" },
                                ],
                                kind: "ScalarField",
                                name: "user_upsell_interact",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: w, kind: "Operation", name: "useSuperUpsellTrackingMutation", selections: S },
                    params: { id: "l9d9OtMg46Lt3efR1aqgEg", metadata: {}, name: "useSuperUpsellTrackingMutation", operationKind: "mutation", text: null },
                };
            K.hash = "e05753868b52fdcfa31057ee6aa957ff";
            const V = K;
            t(585488);
            var M = t(351743),
                I = t.n(M),
                L = t(516951);
            const B = V,
                U = ({ attributionParams: e, surfaceKey: r, upsellContentKey: t }) => {
                    const [n] = I()(B),
                        i = (0, c.Z)(),
                        s = a.useCallback(
                            (a) => () => {
                                const s = "unified-upsell",
                                    l = { referer: e?.referrer };
                                switch (a) {
                                    case "Impression":
                                        i.scribe({ component: s, action: "impression", data: l });
                                        break;
                                    case "Dismiss":
                                        i.scribe({ component: s, action: "dismiss", data: l });
                                        break;
                                    case "Click":
                                        i.scribe({ component: s, action: "click", data: l });
                                }
                                n({ variables: { surfaceKey: r, upsellContentKey: t, interactionType: a }, onCompleted: L.Z, onError: L.Z });
                            },
                            [n, r, t, i, e],
                        );
                    return { trackImpression: a.useMemo(() => s("Impression"), [s]), trackDismiss: a.useMemo(() => s("Dismiss"), [s]), trackClick: a.useMemo(() => s("Click"), [s]) };
                },
                R = (e) => {
                    const { featureSwitches: r } = (0, v.QZ)(),
                        t = (0, E.v9)(D.as),
                        a = t?.find((r) => r.key === e),
                        n = a?.value.attribution_params,
                        i = Z(a, r),
                        { trackClick: s, trackDismiss: l, trackImpression: c } = U({ upsellContentKey: i?.key || "undefined", surfaceKey: e, attributionParams: n });
                    return { attributionParams: n, upsellContent: i, trackClick: s, trackImpression: c, trackDismiss: l };
                },
                T = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }) => a.useMemo(() => a.createElement(h, { attributionParams: e, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }), [e, t, n, i, s]),
                A = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c } = R(e);
                    return a.useMemo(() => (c && t ? a.createElement(n.Z, { style: r }, a.createElement(T, { attributionParams: t, surfaceKey: e, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c })) : null), [t, c, e, i, s, l, r]);
                },
                O = a.memo(A);
        },
        86029: (e, r, t) => {
            t.r(r), t.d(r, { default: () => p });
            var a = t(202784),
                n = t(392237),
                i = t(341979),
                s = t(316732),
                l = t(952793),
                c = t(584770),
                o = t(668214),
                u = t(919022);
            const p = (0, o.Z)().propsFromState(() => ({ viewerUser: u.ZP.selectViewerUser }))(({ viewerUser: e }) => {
                    const r = (0, c.Z)(),
                        t = (0, l.hC)("subscriptions_upsells_home_sidebar_migration_enabled"),
                        n = "Business" === e?.verified_type ? "SidebarVerifiedOrgs" : r ? "SidebarPremiumPlus" : "SidebarDefault";
                    return "SidebarDefault" === n && t ? a.createElement(i.Z, { surfaceKey: "HomeSidebar", wrapperStyles: m.superUpsellWrapper }) : a.createElement(s.Z, { variant: n });
                }),
                m = n.default.create((e) => ({ superUpsellWrapper: { marginBottom: e.spaces.space16 } }));
        },
        584770: (e, r, t) => {
            t.d(r, { Z: () => s });
            var a = t(202784),
                n = t(443781),
                i = t(337394);
            const s = () => {
                const { userClaims: e } = a.useContext(n.rC);
                return !i.cX.some((r) => e.hasSubscription(r)) && (e.hasSubscription("premium_standard") || e.hasSubscription("premium_basic"));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.ee4bcdfa.js.map
