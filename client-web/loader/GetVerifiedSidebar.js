"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar", "icons/IconFireStroke-js"],
    {
        920603: (e, r, t) => {
            t.d(r, { Z: () => R });
            var a = t(202784),
                n = t(325686),
                i = t(73664),
                s = t(952793),
                l = t(293115),
                c = t(725405);
            const o = (e) => {
                    let r = "/i/premium_sign_up";
                    switch (e.product_category) {
                        case "PremiumBasic":
                        case "BlueVerified":
                        case "BlueVerifiedPlus":
                            r = "/i/premium_sign_up";
                            break;
                        case "QuickFreeTrial": {
                            let t = "";
                            if ("NoAds" === e.quick_free_trial_product_type) t = "/no-ads";
                            r = `/i/quick-free-trial${t}`;
                            break;
                        }
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
                d = (e) => {
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
                p = (e, r) => ({ pathname: o(r), state: { referring_page: e.referrer, tier: u(r.product_category), plan: d(r.charge_interval) } });
            var m = t(807896),
                k = t(154003),
                f = t(731708),
                b = t(392237),
                _ = t(498514);
            const h = ({ renderProperties: e, wrapperStyles: r }) => {
                    const t = (0, _.U)(e.icon_type),
                        n = e.icon_color ? { color: b.default.theme.colors[e.icon_color] } : null;
                    return a.createElement(t, { style: [r, n, "CircleFill" === e.icon_type ? C.smallIcon : null] });
                },
                C = b.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                y = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: i, icon: s } }) => a.createElement(k.ZP, { link: r, onClick: t, type: e?.type }, a.createElement(n.Z, { style: g.buttonInner }, s ? a.createElement(h, { renderProperties: s, wrapperStyles: g.iconWrapper }) : null, a.createElement(f.ZP, null, i))),
                g = b.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var P = t(992942),
                S = t(439592);
            const E = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, image_url: i, primary_label: s, primary_label_icon: l, secondary_label: c } }) => {
                    const o = i ? "whiteOnColor" : void 0;
                    return a.createElement(n.Z, { style: w.cardOuter }, i ? a.createElement(P.Z, { aspectMode: S.Z.COVER, source: { uri: i }, style: w.image }) : null, a.createElement(n.Z, { style: w.cardInner }, a.createElement(n.Z, { style: w.primaryLabelContainer }, l ? a.createElement(h, { renderProperties: l, wrapperStyles: w.primaryLabelIconWrapper }) : null, a.createElement(f.ZP, { color: o, size: "headline1", weight: "heavy" }, s)), c ? a.createElement(f.ZP, { color: o }, c) : null, a.createElement(y, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })));
                },
                w = b.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                Z = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const i = a.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(y, (0, m.Z)({}, n, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(E, (0, m.Z)({}, n, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, r]);
                    return a.createElement(n.Z, { testID: `super-upsell-${t.__typename ?? "default"}` }, i);
                },
                v = ({ attributionParams: e, trackClick: r, trackImpression: t, upsellContent: n }) => {
                    const l = (0, c.Z)(),
                        o = a.useRef(),
                        u = (0, i.R)(o, { threshold: 1 }),
                        d = (0, s.hC)("subscriptions_upsells_track_interactions_enabled");
                    a.useEffect(() => {
                        u && (d ? t() : l.scribeAction("impression"));
                    }, [u, l, t, d]);
                    const m = p(e, n.destination),
                        k = a.useCallback(() => {
                            d ? r() : l.scribeAction("click");
                        }, [l, r, d]);
                    return a.createElement("div", { ref: o }, a.createElement(Z, { destinationLink: m, onDestinationClick: k, renderProperties: n.render_properties }));
                },
                D = (e) => a.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, a.createElement(v, e));
            var I = t(722517);
            const B = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }) => a.useMemo(() => a.createElement(D, { attributionParams: e, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }), [e, t, n, i, s]),
                L = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c } = (0, I.Z)(e);
                    return a.useMemo(() => (c && t ? a.createElement(n.Z, { style: r }, a.createElement(B, { attributionParams: t, surfaceKey: e, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c })) : null), [t, c, e, i, s, l, r]);
                },
                R = a.memo(L);
        },
        86029: (e, r, t) => {
            t.r(r), t.d(r, { default: () => d });
            var a = t(202784),
                n = t(392237),
                i = t(727828),
                s = t(920603),
                l = t(952793),
                c = t(584770),
                o = t(668214),
                u = t(919022);
            const d = (0, o.Z)().propsFromState(() => ({ viewerUser: u.ZP.selectViewerUser }))(({ viewerUser: e }) => {
                    const r = (0, c.Z)(),
                        t = (0, l.hC)("subscriptions_upsells_home_sidebar_migration_enabled"),
                        n = "Business" === e?.verified_type ? "SidebarVerifiedOrgs" : r ? "SidebarPremiumPlus" : "SidebarDefault";
                    return "SidebarDefault" === n && t ? a.createElement(s.Z, { surfaceKey: "HomeSidebar", wrapperStyles: p.upsellWrapper }) : a.createElement(i.Z, { variant: n });
                }),
                p = n.default.create((e) => ({ upsellWrapper: { marginBottom: e.spaces.space16 } }));
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
        498514: (e, r, t) => {
            t.d(r, { U: () => D });
            t(202784);
            var a = t(521058),
                n = t(847988),
                i = t(616894),
                s = t(376021),
                l = t(625823),
                c = t(839),
                o = t(266151),
                u = t(468670),
                d = t(913973),
                p = t(1753),
                m = t(748138),
                k = t(53674),
                f = t(164174),
                b = t(926981),
                _ = t(642317),
                h = t(28862),
                C = t(376278),
                y = t(511323),
                g = t(254944),
                P = t(465072),
                S = t(189700),
                E = t(520489),
                w = t(297938),
                Z = t(136483),
                v = t(457566);
            const D = (e) => {
                switch (e) {
                    case "Fire":
                        return a.default;
                    case "BookStrokeOn":
                        return n.default;
                    case "No":
                        return i.default;
                    case "WriteStroke":
                        return s.default;
                    case "AccountNft":
                        return l.default;
                    case "CameraVideoStroke":
                        return c.default;
                    case "Feather":
                        return o.default;
                    case "LockStroke":
                        return u.default;
                    case "Checkmark":
                        return d.default;
                    case "NotesStroke":
                        return p.default;
                    case "Grok":
                        return v.x1;
                    case "MoneyStroke":
                        return m.default;
                    case "BarChart":
                        return k.default;
                    case "DeckStroke":
                        return f.default;
                    case "Film":
                        return b.default;
                    case "RocketStroke":
                        return _.default;
                    case "BookmarkCollectionsStroke":
                        return h.default;
                    case "FireStroke":
                        return C.default;
                    case "PersonStroke":
                        return y.default;
                    case "PaintbrushStroke":
                        return g.default;
                    case "ModeratorStroke":
                        return P.default;
                    case "Document":
                        return S.default;
                    case "RadarStroke":
                        return E.default;
                    case "SearchPersonStroke":
                        return w.default;
                    case "CircleFill":
                        return Z.default;
                    default:
                        return () => null;
                }
            };
        },
        376278: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.ed64b4da.js.map
