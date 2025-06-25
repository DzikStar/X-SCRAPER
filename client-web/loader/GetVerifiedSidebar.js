"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar", "icons/IconBookmarkCollectionsStroke-js", "icons/IconFilm-js"],
    {
        920603: (e, r, t) => {
            t.d(r, { Z: () => B });
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
                h = t(392237),
                b = t(498514);
            const _ = ({ renderProperties: e, wrapperStyles: r }) => {
                    const t = (0, b.U)(e.icon_type),
                        n = e.icon_color ? { color: h.default.theme.colors[e.icon_color] } : null;
                    return a.createElement(t, { style: [r, n, "CircleFill" === e.icon_type ? v.smallIcon : null] });
                },
                v = h.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                C = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: i, icon: s } }) => a.createElement(k.ZP, { link: r, onClick: t, type: e?.type }, a.createElement(n.Z, { style: y.buttonInner }, s ? a.createElement(_, { renderProperties: s, wrapperStyles: y.iconWrapper }) : null, a.createElement(f.ZP, null, i))),
                y = h.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var g = t(992942),
                P = t(439592);
            const E = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, image_url: i, primary_label: s, primary_label_icon: l, secondary_label: c } }) => {
                    const o = i ? "whiteOnColor" : void 0;
                    return a.createElement(n.Z, { style: S.cardOuter }, i ? a.createElement(g.Z, { aspectMode: P.Z.COVER, source: { uri: i }, style: S.image }) : null, a.createElement(n.Z, { style: S.cardInner }, a.createElement(n.Z, { style: S.primaryLabelContainer }, l ? a.createElement(_, { renderProperties: l, wrapperStyles: S.primaryLabelIconWrapper }) : null, a.createElement(f.ZP, { color: o, size: "headline1", weight: "heavy" }, s)), c ? a.createElement(f.ZP, { color: o }, c) : null, a.createElement(C, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })));
                },
                S = h.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                w = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const i = a.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(C, (0, m.Z)({}, n, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(E, (0, m.Z)({}, n, { renderProperties: t }));
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
                V = (e) => a.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, a.createElement(Z, e));
            var D = t(722517);
            const I = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }) => a.useMemo(() => a.createElement(V, { attributionParams: e, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }), [e, t, n, i, s]),
                z = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c } = (0, D.Z)(e);
                    return a.useMemo(() => (c && t ? a.createElement(n.Z, { style: r }, a.createElement(I, { attributionParams: t, surfaceKey: e, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c })) : null), [t, c, e, i, s, l, r]);
                },
                B = a.memo(z);
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
            t.d(r, { U: () => V });
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
                h = t(926981),
                b = t(642317),
                _ = t(28862),
                v = t(376278),
                C = t(511323),
                y = t(254944),
                g = t(465072),
                P = t(189700),
                E = t(520489),
                S = t(297938),
                w = t(136483),
                Z = t(457566);
            const V = (e) => {
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
                        return h.default;
                    case "RocketStroke":
                        return b.default;
                    case "BookmarkCollectionsStroke":
                        return _.default;
                    case "FireStroke":
                        return v.default;
                    case "PersonStroke":
                        return C.default;
                    case "PaintbrushStroke":
                        return y.default;
                    case "ModeratorStroke":
                        return g.default;
                    case "Document":
                        return P.default;
                    case "RadarStroke":
                        return E.default;
                    case "SearchPersonStroke":
                        return S.default;
                    case "CircleFill":
                        return w.default;
                    default:
                        return () => null;
                }
            };
        },
        28862: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zm2.5-.5c-.276 0-.5.22-.5.5v10.88l5-2.5 5 2.5V8.5c0-.28-.224-.5-.5-.5h-9zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        926981: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M18.5 2h-13C4.12 2 3 3.12 3 4.5v15C3 20.88 4.12 22 5.5 22h13c1.38 0 2.5-1.12 2.5-2.5v-15C21 3.12 19.88 2 18.5 2zM7 20H5.5c-.28 0-.5-.22-.5-.5v-2h2V20zm0-4.5H5V13h2v2.5zM7 11H5V8.5h2V11zm0-4.5H5v-2c0-.28.22-.5.5-.5H7v2.5zM15 20H9v-7h6v7zm0-9H9V4h6v7zm4 8.5c0 .28-.22.5-.5.5H17v-2.5h2v2zm0-4h-2V13h2v2.5zm0-4.5h-2V8.5h2V11zm0-4.5h-2V4h1.5c.28 0 .5.22.5.5v2z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.9456041a.js.map
