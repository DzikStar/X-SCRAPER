"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar"],
    {
        341979: (e, t, r) => {
            r.d(t, { Z: () => O });
            var a = r(202784),
                n = r(325686),
                i = r(73664),
                s = r(952793),
                l = r(293115),
                c = r(725405);
            const o = (e) => {
                    let t = "/i/premium_sign_up";
                    switch (e) {
                        case "PremiumBasic":
                        case "BlueVerified":
                        case "BlueVerifiedPlus":
                            t = "/i/premium_sign_up";
                    }
                    return t;
                },
                u = (e) => {
                    let t = "premium";
                    switch (e) {
                        case "PremiumBasic":
                            t = "premium_basic";
                            break;
                        case "BlueVerified":
                            t = "premium";
                            break;
                        case "BlueVerifiedPlus":
                            t = "premium_plus";
                    }
                    return t;
                },
                m = (e) => {
                    let t = "Year";
                    switch (e) {
                        case "Year":
                            t = "Year";
                            break;
                        case "Month":
                            t = "Month";
                    }
                    return t;
                },
                p = (e, t) => ({ pathname: o(t.product_category), state: { referring_page: e.referrer, tier: u(t.product_category), plan: m(t.charge_interval) } });
            var d = r(807896),
                k = r(154003);
            const b = ({ buttonProps: e, destinationLink: t, onDestinationClick: r, renderProperties: { action_label: n } }) => a.createElement(k.ZP, { link: t, onClick: r, type: e?.type }, n);
            var f = r(731708),
                _ = r(392237);
            const y = ({ destinationLink: e, onDestinationClick: t, renderProperties: { cta: r, primary_label: i, secondary_label: s } }) => a.createElement(n.Z, { style: C.card }, a.createElement(f.ZP, { size: "headline1", weight: "heavy" }, i), s ? a.createElement(f.ZP, null, s) : null, a.createElement(b, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: t, renderProperties: r })),
                C = _.default.create((e) => ({ card: { gap: e.spaces.space12, alignItems: "flex-start", borderRadius: e.borderRadii.large, backgroundColor: e.colors.cellBackground, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                g = ({ destinationLink: e, onDestinationClick: t, renderProperties: r }) => {
                    const i = a.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: t };
                        switch (r.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(b, (0, d.Z)({}, n, { renderProperties: r }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(y, (0, d.Z)({}, n, { renderProperties: r }));
                            default:
                                return null;
                        }
                    }, [r, e, t]);
                    return a.createElement(n.Z, { testID: `super-upsell-${r.__typename}` }, i);
                },
                P = ({ attributionParams: e, trackClick: t, trackImpression: r, upsellContent: n }) => {
                    const o = (0, c.Z)(),
                        u = a.useRef(),
                        m = (0, i.R)(u, { threshold: 1 }),
                        d = (0, s.hC)("subscriptions_upsells_track_interactions_enabled");
                    a.useEffect(() => {
                        m && (d ? r() : o.scribeAction("impression"));
                    }, [m, o, r, d]);
                    const k = p(e, n.destination),
                        b = a.useCallback(() => {
                            d ? t() : o.scribeAction("click");
                        }, [o, t, d]);
                    return a.createElement("div", { ref: u }, a.createElement(l.nO, { data: { referer: e.referrer }, namespace: { component: "unified-upsell", element: n.key } }, a.createElement(g, { destinationLink: k, onDestinationClick: b, renderProperties: n.render_properties })));
                },
                h = (e) => a.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell" } }, a.createElement(P, e));
            var v = r(443781),
                E = r(125363),
                D = r(390387);
            const Z = (e, t) => {
                if (!e) return null;
                const {
                    value: { default_content: r, variant_config: a },
                } = e;
                let n = r;
                if (a) {
                    const e = t.getStringValue(a.ddg_experiment_gate, void 0),
                        r = a?.variants.find((t) => t.key === e);
                    r && (n = r);
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
            r(585488);
            var M = r(351743),
                I = r.n(M),
                L = r(516951);
            const B = V,
                U = ({ attributionParams: e, surfaceKey: t, upsellContentKey: r }) => {
                    const [n] = I()(B),
                        i = (0, c.Z)(),
                        s = a.useCallback(
                            (a) => () => {
                                const s = "unified-upsell",
                                    l = { referer: e?.referrer };
                                switch (a) {
                                    case "Impression":
                                        i.scribe({ component: s, element: r, action: "impression", data: l });
                                        break;
                                    case "Dismiss":
                                        i.scribe({ component: s, element: r, action: "dismiss", data: l });
                                        break;
                                    case "Click":
                                        i.scribe({ component: s, element: r, action: "click", data: l });
                                }
                                n({ variables: { surfaceKey: t, upsellContentKey: r, interactionType: a }, onCompleted: L.Z, onError: L.Z });
                            },
                            [n, t, r, i, e],
                        );
                    return { trackImpression: a.useMemo(() => s("Impression"), [s]), trackDismiss: a.useMemo(() => s("Dismiss"), [s]), trackClick: a.useMemo(() => s("Click"), [s]) };
                },
                R = (e) => {
                    const { featureSwitches: t } = (0, v.QZ)(),
                        r = (0, E.v9)(D.as),
                        a = r?.find((t) => t.key === e),
                        n = a?.value.attribution_params,
                        i = Z(a, t),
                        { trackClick: s, trackDismiss: l, trackImpression: c } = U({ upsellContentKey: i?.key || "undefined", surfaceKey: e, attributionParams: n });
                    return { attributionParams: n, upsellContent: i, trackClick: s, trackImpression: c, trackDismiss: l };
                },
                T = ({ attributionParams: e, surfaceKey: t, trackClick: r, trackDismiss: n, trackImpression: i, upsellContent: s }) => a.useMemo(() => a.createElement(h, { attributionParams: e, trackClick: r, trackDismiss: n, trackImpression: i, upsellContent: s }), [e, r, n, i, s]),
                A = ({ surfaceKey: e, wrapperStyles: t }) => {
                    const { attributionParams: r, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c } = R(e);
                    return a.useMemo(() => (c && r ? a.createElement(n.Z, { style: t }, a.createElement(T, { attributionParams: r, surfaceKey: e, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c })) : null), [r, c, e, i, s, l, t]);
                },
                O = a.memo(A);
        },
        86029: (e, t, r) => {
            r.r(t), r.d(t, { default: () => m });
            var a = r(202784),
                n = r(392237),
                i = r(341979),
                s = r(316732),
                l = r(952793),
                c = r(584770),
                o = r(668214),
                u = r(919022);
            const m = (0, o.Z)().propsFromState(() => ({ viewerUser: u.ZP.selectViewerUser }))(({ viewerUser: e }) => {
                    const t = (0, c.Z)(),
                        r = (0, l.hC)("subscriptions_upsells_home_sidebar_migration_enabled"),
                        n = "Business" === e?.verified_type ? "SidebarVerifiedOrgs" : t ? "SidebarPremiumPlus" : "SidebarDefault";
                    return "SidebarDefault" === n && r ? a.createElement(i.Z, { surfaceKey: "HomeSidebar", wrapperStyles: p.superUpsellWrapper }) : a.createElement(s.Z, { variant: n });
                }),
                p = n.default.create((e) => ({ superUpsellWrapper: { marginBottom: e.spaces.space16 } }));
        },
        584770: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                n = r(443781),
                i = r(337394);
            const s = () => {
                const { userClaims: e } = a.useContext(n.rC);
                return !i.cX.some((t) => e.hasSubscription(t)) && (e.hasSubscription("premium_standard") || e.hasSubscription("premium_basic"));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.bcffb42a.js.map
