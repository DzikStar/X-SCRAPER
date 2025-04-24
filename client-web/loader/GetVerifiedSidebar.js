"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar"],
    {
        854239: (e, r, t) => {
            t.d(r, { Z: () => v });
            var s = t(202784),
                a = t(325686),
                i = t(73664),
                n = t(952793),
                c = t(293115),
                l = t(725405);
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
                p = (e) => {
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
                u = (e) => {
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
                m = (e, r) => ({ pathname: o(r.product_category), state: { referring_page: e.referrer, tier: p(r.product_category), plan: u(r.charge_interval) } });
            var d = t(807896),
                k = t(154003);
            const b = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: a } }) => s.createElement(k.ZP, { link: r, onClick: t, type: e?.type }, a);
            var _ = t(731708),
                C = t(392237);
            const f = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, primary_label: i, secondary_label: n } }) => s.createElement(a.Z, { style: P.card }, s.createElement(_.ZP, { size: "headline1", weight: "heavy" }, i), n ? s.createElement(_.ZP, null, n) : null, s.createElement(b, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })),
                P = C.default.create((e) => ({ card: { gap: e.spaces.space12, alignItems: "flex-start", borderRadius: e.borderRadii.large, backgroundColor: e.colors.cellBackground, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 } })),
                h = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const i = s.useMemo(() => {
                        const a = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return s.createElement(b, (0, d.Z)({}, a, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return s.createElement(f, (0, d.Z)({}, a, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, r]);
                    return s.createElement(a.Z, { testID: `super-upsell-${t.__typename}` }, i);
                },
                y = ({ attributionParams: e, trackClick: r, trackImpression: t, upsellContent: a }) => {
                    const c = (0, l.Z)(),
                        o = s.useRef(),
                        p = (0, i.R)(o, { threshold: 1 }),
                        u = (0, n.hC)("subscriptions_upsells_track_interactions_enabled");
                    s.useEffect(() => {
                        p && (u ? t() : c.scribeAction("impression"));
                    }, [p, c, t, u]);
                    const d = m(e, a.destination),
                        k = s.useCallback(() => {
                            u ? r() : c.scribeAction("click");
                        }, [c, r, u]);
                    return s.createElement("div", { ref: o }, s.createElement(h, { destinationLink: d, onDestinationClick: k, renderProperties: a.render_properties }));
                },
                g = (e) => s.createElement(c.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, s.createElement(y, e));
            var E = t(834252);
            const Z = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: a, trackImpression: i, upsellContent: n }) => s.useMemo(() => s.createElement(g, { attributionParams: e, trackClick: t, trackDismiss: a, trackImpression: i, upsellContent: n }), [e, t, a, i, n]),
                w = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: i, trackDismiss: n, trackImpression: c, upsellContent: l } = (0, E.Z)(e);
                    return s.useMemo(() => (l && t ? s.createElement(a.Z, { style: r }, s.createElement(Z, { attributionParams: t, surfaceKey: e, trackClick: i, trackDismiss: n, trackImpression: c, upsellContent: l })) : null), [t, l, e, i, n, c, r]);
                },
                v = s.memo(w);
        },
        86029: (e, r, t) => {
            t.r(r), t.d(r, { default: () => u });
            var s = t(202784),
                a = t(392237),
                i = t(854239),
                n = t(316732),
                c = t(952793),
                l = t(584770),
                o = t(668214),
                p = t(919022);
            const u = (0, o.Z)().propsFromState(() => ({ viewerUser: p.ZP.selectViewerUser }))(({ viewerUser: e }) => {
                    const r = (0, l.Z)(),
                        t = (0, c.hC)("subscriptions_upsells_home_sidebar_migration_enabled"),
                        a = "Business" === e?.verified_type ? "SidebarVerifiedOrgs" : r ? "SidebarPremiumPlus" : "SidebarDefault";
                    return "SidebarDefault" === a && t ? s.createElement(i.Z, { surfaceKey: "HomeSidebar", wrapperStyles: m.superUpsellWrapper }) : s.createElement(n.Z, { variant: a });
                }),
                m = a.default.create((e) => ({ superUpsellWrapper: { marginBottom: e.spaces.space16 } }));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.8ee7aaca.js.map
