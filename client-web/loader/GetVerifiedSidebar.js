"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar", "icons/IconBookStrokeOn-js", "icons/IconBookmarkCollectionsStroke-js", "icons/IconCameraVideoStroke-js", "icons/IconFireStroke-js"],
    {
        920603: (e, r, t) => {
            t.d(r, { Z: () => B });
            var a = t(202784),
                i = t(325686),
                n = t(73664),
                l = t(952793),
                c = t(293115),
                s = t(725405);
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
                d = (e) => {
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
                m = (e, r) => ({ pathname: o(r), state: { referring_page: e.referrer, tier: d(r.product_category), plan: u(r.charge_interval) } });
            var p = t(807896),
                h = t(154003),
                k = t(731708),
                v = t(392237),
                f = t(498514);
            const b = ({ renderProperties: e, wrapperStyles: r }) => {
                    const t = (0, f.U)(e.icon_type),
                        i = e.icon_color ? { color: v.default.theme.colors[e.icon_color] } : null;
                    return a.createElement(t, { style: [r, i, "CircleFill" === e.icon_type ? g.smallIcon : null] });
                },
                g = v.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                y = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: n, icon: l } }) => a.createElement(h.ZP, { link: r, onClick: t, type: e?.type }, a.createElement(i.Z, { style: _.buttonInner }, l ? a.createElement(b, { renderProperties: l, wrapperStyles: _.iconWrapper }) : null, a.createElement(k.ZP, null, n))),
                _ = v.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var C = t(992942),
                w = t(439592);
            const E = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, image_url: n, primary_label: l, primary_label_icon: c, secondary_label: s } }) => {
                    const o = n ? "whiteOnColor" : void 0;
                    return a.createElement(i.Z, { style: Z.cardOuter }, n ? a.createElement(C.Z, { aspectMode: w.Z.COVER, source: { uri: n }, style: Z.image }) : null, a.createElement(i.Z, { style: Z.cardInner }, a.createElement(i.Z, { style: Z.primaryLabelContainer }, c ? a.createElement(b, { renderProperties: c, wrapperStyles: Z.primaryLabelIconWrapper }) : null, a.createElement(k.ZP, { color: o, size: "headline1", weight: "heavy" }, l)), s ? a.createElement(k.ZP, { color: o }, s) : null, a.createElement(y, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })));
                },
                Z = v.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                S = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const n = a.useMemo(() => {
                        const i = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(y, (0, p.Z)({}, i, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(E, (0, p.Z)({}, i, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, r]);
                    return a.createElement(i.Z, { testID: `super-upsell-${t.__typename ?? "default"}` }, n);
                },
                P = ({ attributionParams: e, trackClick: r, trackImpression: t, upsellContent: i }) => {
                    const c = (0, s.Z)(),
                        o = a.useRef(),
                        d = (0, n.R)(o, { threshold: 1 }),
                        u = (0, l.hC)("subscriptions_upsells_track_interactions_enabled");
                    a.useEffect(() => {
                        d && (u ? t() : c.scribeAction("impression"));
                    }, [d, c, t, u]);
                    const p = m(e, i.destination),
                        h = a.useCallback(() => {
                            u ? r() : c.scribeAction("click");
                        }, [c, r, u]);
                    return a.createElement("div", { ref: o }, a.createElement(S, { destinationLink: p, onDestinationClick: h, renderProperties: i.render_properties }));
                },
                z = (e) => a.createElement(c.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, a.createElement(P, e));
            var V = t(722517);
            const D = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: i, trackImpression: n, upsellContent: l }) => a.useMemo(() => a.createElement(z, { attributionParams: e, trackClick: t, trackDismiss: i, trackImpression: n, upsellContent: l }), [e, t, i, n, l]),
                I = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: n, trackDismiss: l, trackImpression: c, upsellContent: s } = (0, V.Z)(e);
                    return a.useMemo(() => (s && t ? a.createElement(i.Z, { style: r }, a.createElement(D, { attributionParams: t, surfaceKey: e, trackClick: n, trackDismiss: l, trackImpression: c, upsellContent: s })) : null), [t, s, e, n, l, c, r]);
                },
                B = a.memo(I);
        },
        86029: (e, r, t) => {
            t.r(r), t.d(r, { default: () => u });
            var a = t(202784),
                i = t(392237),
                n = t(727828),
                l = t(920603),
                c = t(952793),
                s = t(584770),
                o = t(668214),
                d = t(919022);
            const u = (0, o.Z)().propsFromState(() => ({ viewerUser: d.ZP.selectViewerUser }))(({ viewerUser: e }) => {
                    const r = (0, s.Z)(),
                        t = (0, c.hC)("subscriptions_upsells_home_sidebar_migration_enabled"),
                        i = "Business" === e?.verified_type ? "SidebarVerifiedOrgs" : r ? "SidebarPremiumPlus" : "SidebarDefault";
                    return "SidebarDefault" === i && t ? a.createElement(l.Z, { surfaceKey: "HomeSidebar", wrapperStyles: m.upsellWrapper }) : a.createElement(n.Z, { variant: i });
                }),
                m = i.default.create((e) => ({ upsellWrapper: { marginBottom: e.spaces.space16 } }));
        },
        584770: (e, r, t) => {
            t.d(r, { Z: () => l });
            var a = t(202784),
                i = t(443781),
                n = t(337394);
            const l = () => {
                const { userClaims: e } = a.useContext(i.rC);
                return !n.cX.some((r) => e.hasSubscription(r)) && (e.hasSubscription("premium_standard") || e.hasSubscription("premium_basic"));
            };
        },
        498514: (e, r, t) => {
            t.d(r, { U: () => z });
            t(202784);
            var a = t(521058),
                i = t(847988),
                n = t(616894),
                l = t(376021),
                c = t(625823),
                s = t(839),
                o = t(266151),
                d = t(468670),
                u = t(913973),
                m = t(1753),
                p = t(748138),
                h = t(53674),
                k = t(164174),
                v = t(926981),
                f = t(642317),
                b = t(28862),
                g = t(376278),
                y = t(511323),
                _ = t(254944),
                C = t(465072),
                w = t(189700),
                E = t(520489),
                Z = t(297938),
                S = t(136483),
                P = t(457566);
            const z = (e) => {
                switch (e) {
                    case "Fire":
                        return a.default;
                    case "BookStrokeOn":
                        return i.default;
                    case "No":
                        return n.default;
                    case "WriteStroke":
                        return l.default;
                    case "AccountNft":
                        return c.default;
                    case "CameraVideoStroke":
                        return s.default;
                    case "Feather":
                        return o.default;
                    case "LockStroke":
                        return d.default;
                    case "Checkmark":
                        return u.default;
                    case "NotesStroke":
                        return m.default;
                    case "Grok":
                        return P.x1;
                    case "MoneyStroke":
                        return p.default;
                    case "BarChart":
                        return h.default;
                    case "DeckStroke":
                        return k.default;
                    case "Film":
                        return v.default;
                    case "RocketStroke":
                        return f.default;
                    case "BookmarkCollectionsStroke":
                        return b.default;
                    case "FireStroke":
                        return g.default;
                    case "PersonStroke":
                        return y.default;
                    case "PaintbrushStroke":
                        return _.default;
                    case "ModeratorStroke":
                        return C.default;
                    case "Document":
                        return w.default;
                    case "RadarStroke":
                        return E.default;
                    case "SearchPersonStroke":
                        return Z.default;
                    case "CircleFill":
                        return S.default;
                    default:
                        return () => null;
                }
            };
        },
        847988: (e, r, t) => {
            t.r(r), t.d(r, { default: () => s });
            var a = t(202784),
                i = t(890601),
                n = t(783427),
                l = t(347101);
            const c = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.2 4c-1.2 0-2.4.5-3.2 1.3-.8-.8-2-1.3-3.2-1.3H1v16h8.2c.8 0 1.4.4 1.8 1.1l.2.3H13c.5-.9 1.1-1.5 2-1.5h8V4h-7.8zM11 18.5c-.6-.3-1.2-.5-1.8-.5H3V6h5.8c.9 0 1.8.5 2.2 1.3v11.2zm10-.5h-6.1c-.7 0-1.3.2-1.9.5V7.3c.5-.8 1.3-1.3 2.2-1.3H21v12zm-2-5v2h-4v-2h4zm0-4v2h-4V9h4zM9 9v2H5V9h4zm0 4v2H5v-2h4z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        28862: (e, r, t) => {
            t.r(r), t.d(r, { default: () => s });
            var a = t(202784),
                i = t(890601),
                n = t(783427),
                l = t(347101);
            const c = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zm2.5-.5c-.276 0-.5.22-.5.5v10.88l5-2.5 5 2.5V8.5c0-.28-.224-.5-.5-.5h-9zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        839: (e, r, t) => {
            t.r(r), t.d(r, { default: () => s });
            var a = t(202784),
                i = t(890601),
                n = t(783427),
                l = t(347101);
            const c = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        376278: (e, r, t) => {
            t.r(r), t.d(r, { default: () => s });
            var a = t(202784),
                i = t(890601),
                n = t(783427),
                l = t(347101);
            const c = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        748138: (e, r, t) => {
            t.r(r), t.d(r, { default: () => s });
            var a = t(202784),
                i = t(890601),
                n = t(783427),
                l = t(347101);
            const c = (e = {}) => {
                const { direction: r } = (0, n.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.84139cca.js.map
