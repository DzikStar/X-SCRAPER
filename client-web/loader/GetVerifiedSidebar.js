"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar", "icons/IconCameraVideoStroke-js", "icons/IconDrafts-js"],
    {
        920603: (e, r, t) => {
            t.d(r, { Z: () => M });
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
                m = (e, r) => ({ pathname: o(r), state: { referring_page: e.referrer, tier: u(r.product_category), plan: d(r.charge_interval) } });
            var p = t(807896),
                k = t(154003),
                h = t(731708),
                f = t(392237),
                b = t(498514);
            const v = ({ renderProperties: e, wrapperStyles: r }) => {
                    const t = (0, b.U)(e.icon_type),
                        n = e.icon_color ? { color: f.default.theme.colors[e.icon_color] } : null;
                    return a.createElement(t, { style: [r, n, "CircleFill" === e.icon_type ? _.smallIcon : null] });
                },
                _ = f.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                g = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: i, icon: s } }) => a.createElement(k.ZP, { link: r, onClick: t, type: e?.type }, a.createElement(n.Z, { style: y.buttonInner }, s ? a.createElement(v, { renderProperties: s, wrapperStyles: y.iconWrapper }) : null, a.createElement(h.ZP, null, i))),
                y = f.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var C = t(992942),
                E = t(439592);
            const P = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, image_url: i, primary_label: s, primary_label_icon: l, secondary_label: c } }) => {
                    const o = i ? "whiteOnColor" : void 0;
                    return a.createElement(n.Z, { style: w.cardOuter }, i ? a.createElement(C.Z, { aspectMode: E.Z.COVER, source: { uri: i }, style: w.image }) : null, a.createElement(n.Z, { style: w.cardInner }, a.createElement(n.Z, { style: w.primaryLabelContainer }, l ? a.createElement(v, { renderProperties: l, wrapperStyles: w.primaryLabelIconWrapper }) : null, a.createElement(h.ZP, { color: o, size: "headline1", weight: "heavy" }, s)), c ? a.createElement(h.ZP, { color: o }, c) : null, a.createElement(g, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })));
                },
                w = f.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                S = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const i = a.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(g, (0, p.Z)({}, n, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(P, (0, p.Z)({}, n, { renderProperties: t }));
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
                    const p = m(e, n.destination),
                        k = a.useCallback(() => {
                            d ? r() : l.scribeAction("click");
                        }, [l, r, d]);
                    return a.createElement("div", { ref: o }, a.createElement(S, { destinationLink: p, onDestinationClick: k, renderProperties: n.render_properties }));
                },
                D = (e) => a.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, a.createElement(Z, e));
            var z = t(722517);
            const I = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }) => a.useMemo(() => a.createElement(D, { attributionParams: e, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }), [e, t, n, i, s]),
                V = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c } = (0, z.Z)(e);
                    return a.useMemo(() => (c && t ? a.createElement(n.Z, { style: r }, a.createElement(I, { attributionParams: t, surfaceKey: e, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c })) : null), [t, c, e, i, s, l, r]);
                },
                M = a.memo(V);
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
                    return "SidebarDefault" === n && t ? a.createElement(s.Z, { surfaceKey: "HomeSidebar", wrapperStyles: m.upsellWrapper }) : a.createElement(i.Z, { variant: n });
                }),
                m = n.default.create((e) => ({ upsellWrapper: { marginBottom: e.spaces.space16 } }));
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
                m = t(1753),
                p = t(748138),
                k = t(53674),
                h = t(164174),
                f = t(926981),
                b = t(642317),
                v = t(28862),
                _ = t(376278),
                g = t(511323),
                y = t(254944),
                C = t(465072),
                E = t(189700),
                P = t(520489),
                w = t(297938),
                S = t(136483),
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
                        return m.default;
                    case "Grok":
                        return Z.x1;
                    case "MoneyStroke":
                        return p.default;
                    case "BarChart":
                        return k.default;
                    case "DeckStroke":
                        return h.default;
                    case "Film":
                        return f.default;
                    case "RocketStroke":
                        return b.default;
                    case "BookmarkCollectionsStroke":
                        return v.default;
                    case "FireStroke":
                        return _.default;
                    case "PersonStroke":
                        return g.default;
                    case "PaintbrushStroke":
                        return y.default;
                    case "ModeratorStroke":
                        return C.default;
                    case "Document":
                        return E.default;
                    case "RadarStroke":
                        return P.default;
                    case "SearchPersonStroke":
                        return w.default;
                    case "CircleFill":
                        return S.default;
                    default:
                        return () => null;
                }
            };
        },
        839: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        266151: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M10 5H2V3h8v2zM7 7H2v2h5V7zm12.94 4.946C19.48 15.918 16.1 19 12 19H8.19c-.12.988-.19 1.993-.19 3H6c0-4.669 1.29-9.39 3.95-12.97C12.62 5.421 16.38 2.9 23 3c.17 3.359-.21 7.147-3.06 8.946zM21 5.033c-4.16.276-7.29 2.275-9.45 5.187-1.43 1.929-2.43 4.268-3 6.78H12c2.68 0 4.95-1.76 5.72-4.188-.52.108-1.09.172-1.72.188h-1.5v-2H16c3.9 0 4.95-2.921 5-5.967z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        748138: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.dc02020a.js.map
