"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar"],
    {
        463236: (e, r, t) => {
            t.d(r, { Z: () => S });
            var s = t(202784),
                a = t(325686),
                i = t(73664),
                n = t(952793),
                o = t(293115),
                c = t(725405);
            const l = (e) => {
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
                d = (e, r) => ({ pathname: l(r.product_category), state: { referring_page: e.referrer, tier: u(r.product_category), plan: p(r.charge_interval) } });
            var m = t(807896),
                b = t(154003);
            const k = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: a } }) => s.createElement(b.ZP, { link: r, onClick: t, type: e?.type }, a);
            var _ = t(992942),
                C = t(439592),
                f = t(731708),
                h = t(392237);
            const P = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, image_url: i, primary_label: n, secondary_label: o } }) => {
                    const c = i ? "whiteOnColor" : void 0;
                    return s.createElement(a.Z, { style: g.cardOuter }, i ? s.createElement(_.Z, { aspectMode: C.Z.COVER, source: { uri: i }, style: g.image }) : null, s.createElement(a.Z, { style: g.cardInner }, s.createElement(f.ZP, { color: c, size: "headline1", weight: "heavy" }, n), o ? s.createElement(f.ZP, { color: c }, o) : null, s.createElement(k, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })));
                },
                g = h.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large } })),
                y = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const i = s.useMemo(() => {
                        const a = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return s.createElement(k, (0, m.Z)({}, a, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return s.createElement(P, (0, m.Z)({}, a, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, r]);
                    return s.createElement(a.Z, { testID: `super-upsell-${t.__typename ?? "default"}` }, i);
                },
                E = ({ attributionParams: e, trackClick: r, trackImpression: t, upsellContent: a }) => {
                    const o = (0, c.Z)(),
                        l = s.useRef(),
                        u = (0, i.R)(l, { threshold: 1 }),
                        p = (0, n.hC)("subscriptions_upsells_track_interactions_enabled");
                    s.useEffect(() => {
                        u && (p ? t() : o.scribeAction("impression"));
                    }, [u, o, t, p]);
                    const m = d(e, a.destination),
                        b = s.useCallback(() => {
                            p ? r() : o.scribeAction("click");
                        }, [o, r, p]);
                    return s.createElement("div", { ref: l }, s.createElement(y, { destinationLink: m, onDestinationClick: b, renderProperties: a.render_properties }));
                },
                Z = (e) => s.createElement(o.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, s.createElement(E, e));
            var w = t(722517);
            const v = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: a, trackImpression: i, upsellContent: n }) => s.useMemo(() => s.createElement(Z, { attributionParams: e, trackClick: t, trackDismiss: a, trackImpression: i, upsellContent: n }), [e, t, a, i, n]),
                D = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: i, trackDismiss: n, trackImpression: o, upsellContent: c } = (0, w.Z)(e);
                    return s.useMemo(() => (c && t ? s.createElement(a.Z, { style: r }, s.createElement(v, { attributionParams: t, surfaceKey: e, trackClick: i, trackDismiss: n, trackImpression: o, upsellContent: c })) : null), [t, c, e, i, n, o, r]);
                },
                S = s.memo(D);
        },
        86029: (e, r, t) => {
            t.r(r), t.d(r, { default: () => p });
            var s = t(202784),
                a = t(392237),
                i = t(727828),
                n = t(463236),
                o = t(952793),
                c = t(584770),
                l = t(668214),
                u = t(919022);
            const p = (0, l.Z)().propsFromState(() => ({ viewerUser: u.ZP.selectViewerUser }))(({ viewerUser: e }) => {
                    const r = (0, c.Z)(),
                        t = (0, o.hC)("subscriptions_upsells_home_sidebar_migration_enabled"),
                        a = "Business" === e?.verified_type ? "SidebarVerifiedOrgs" : r ? "SidebarPremiumPlus" : "SidebarDefault";
                    return "SidebarDefault" === a && t ? s.createElement(n.Z, { surfaceKey: "HomeSidebar", wrapperStyles: d.upsellWrapper }) : s.createElement(i.Z, { variant: a });
                }),
                d = a.default.create((e) => ({ upsellWrapper: { marginBottom: e.spaces.space16 } }));
        },
        584770: (e, r, t) => {
            t.d(r, { Z: () => n });
            var s = t(202784),
                a = t(443781),
                i = t(337394);
            const n = () => {
                const { userClaims: e } = s.useContext(a.rC);
                return !i.cX.some((r) => e.hasSubscription(r)) && (e.hasSubscription("premium_standard") || e.hasSubscription("premium_basic"));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.da8b2dfa.js.map
