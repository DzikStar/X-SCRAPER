"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar", "icons/IconBookStrokeOn-js"],
    {
        920603: (e, r, t) => {
            t.d(r, { Z: () => L });
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
                h = t(498514);
            const _ = ({ renderProperties: e, wrapperStyles: r }) => {
                    const t = (0, h.U)(e.icon_type),
                        n = e.icon_color ? { color: b.default.theme.colors[e.icon_color] } : null;
                    return a.createElement(t, { style: [r, n, "CircleFill" === e.icon_type ? C.smallIcon : null] });
                },
                C = b.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                y = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: i, icon: s } }) => a.createElement(k.ZP, { link: r, onClick: t, type: e?.type }, a.createElement(n.Z, { style: g.buttonInner }, s ? a.createElement(_, { renderProperties: s, wrapperStyles: g.iconWrapper }) : null, a.createElement(f.ZP, null, i))),
                g = b.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var P = t(992942),
                v = t(439592);
            const S = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, image_url: i, primary_label: s, primary_label_icon: l, secondary_label: c } }) => {
                    const o = i ? "whiteOnColor" : void 0;
                    return a.createElement(n.Z, { style: E.cardOuter }, i ? a.createElement(P.Z, { aspectMode: v.Z.COVER, source: { uri: i }, style: E.image }) : null, a.createElement(n.Z, { style: E.cardInner }, a.createElement(n.Z, { style: E.primaryLabelContainer }, l ? a.createElement(_, { renderProperties: l, wrapperStyles: E.primaryLabelIconWrapper }) : null, a.createElement(f.ZP, { color: o, size: "headline1", weight: "heavy" }, s)), c ? a.createElement(f.ZP, { color: o }, c) : null, a.createElement(y, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })));
                },
                E = b.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                w = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const i = a.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(y, (0, m.Z)({}, n, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(S, (0, m.Z)({}, n, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, r]);
                    return a.createElement(n.Z, { testID: `super-upsell-${t.__typename ?? "default"}` }, i);
                },
                Z = ({ attributionParams: e, trackClick: r, trackImpression: t, upsellContent: n }) => {
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
                    return a.createElement("div", { ref: o }, a.createElement(w, { destinationLink: m, onDestinationClick: k, renderProperties: n.render_properties }));
                },
                D = (e) => a.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, a.createElement(Z, e));
            var I = t(722517);
            const B = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }) => a.useMemo(() => a.createElement(D, { attributionParams: e, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }), [e, t, n, i, s]),
                V = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c } = (0, I.Z)(e);
                    return a.useMemo(() => (c && t ? a.createElement(n.Z, { style: r }, a.createElement(B, { attributionParams: t, surfaceKey: e, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c })) : null), [t, c, e, i, s, l, r]);
                },
                L = a.memo(V);
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
                h = t(642317),
                _ = t(28862),
                C = t(376278),
                y = t(511323),
                g = t(254944),
                P = t(465072),
                v = t(189700),
                S = t(520489),
                E = t(297938),
                w = t(136483),
                Z = t(457566);
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
                        return Z.x1;
                    case "MoneyStroke":
                        return m.default;
                    case "BarChart":
                        return k.default;
                    case "DeckStroke":
                        return f.default;
                    case "Film":
                        return b.default;
                    case "RocketStroke":
                        return h.default;
                    case "BookmarkCollectionsStroke":
                        return _.default;
                    case "FireStroke":
                        return C.default;
                    case "PersonStroke":
                        return y.default;
                    case "PaintbrushStroke":
                        return g.default;
                    case "ModeratorStroke":
                        return P.default;
                    case "Document":
                        return v.default;
                    case "RadarStroke":
                        return S.default;
                    case "SearchPersonStroke":
                        return E.default;
                    case "CircleFill":
                        return w.default;
                    default:
                        return () => null;
                }
            };
        },
        847988: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.2 4c-1.2 0-2.4.5-3.2 1.3-.8-.8-2-1.3-3.2-1.3H1v16h8.2c.8 0 1.4.4 1.8 1.1l.2.3H13c.5-.9 1.1-1.5 2-1.5h8V4h-7.8zM11 18.5c-.6-.3-1.2-.5-1.8-.5H3V6h5.8c.9 0 1.8.5 2.2 1.3v11.2zm10-.5h-6.1c-.7 0-1.3.2-1.9.5V7.3c.5-.8 1.3-1.3 2.2-1.3H21v12zm-2-5v2h-4v-2h4zm0-4v2h-4V9h4zM9 9v2H5V9h4zm0 4v2H5v-2h4z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.d2b628da.js.map
