"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.GetVerifiedSidebar", "icons/IconBookmarkCollectionsStroke-js", "icons/IconDocument-js", "icons/IconWriteStroke-js"],
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
                p = (e, r) => ({ pathname: o(r), state: { referring_page: e.referrer, tier: u(r.product_category), plan: d(r.charge_interval) } });
            var m = t(807896),
                k = t(154003),
                f = t(731708),
                h = t(392237),
                b = t(498514);
            const v = ({ renderProperties: e, wrapperStyles: r }) => {
                    const t = (0, b.U)(e.icon_type),
                        n = e.icon_color ? { color: h.default.theme.colors[e.icon_color] } : null;
                    return a.createElement(t, { style: [r, n, "CircleFill" === e.icon_type ? C.smallIcon : null] });
                },
                C = h.default.create((e) => ({ smallIcon: { height: ".6em" } })),
                _ = ({ buttonProps: e, destinationLink: r, onDestinationClick: t, renderProperties: { action_label: i, icon: s } }) => a.createElement(k.ZP, { link: r, onClick: t, type: e?.type }, a.createElement(n.Z, { style: g.buttonInner }, s ? a.createElement(v, { renderProperties: s, wrapperStyles: g.iconWrapper }) : null, a.createElement(f.ZP, null, i))),
                g = h.default.create((e) => ({ buttonInner: { flexDirection: "row", alignItems: "center" }, iconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } }));
            var y = t(992942),
                E = t(439592);
            const P = ({ destinationLink: e, onDestinationClick: r, renderProperties: { cta: t, image_url: i, primary_label: s, primary_label_icon: l, secondary_label: c } }) => {
                    const o = i ? "whiteOnColor" : void 0;
                    return a.createElement(n.Z, { style: Z.cardOuter }, i ? a.createElement(y.Z, { aspectMode: E.Z.COVER, source: { uri: i }, style: Z.image }) : null, a.createElement(n.Z, { style: Z.cardInner }, a.createElement(n.Z, { style: Z.primaryLabelContainer }, l ? a.createElement(v, { renderProperties: l, wrapperStyles: Z.primaryLabelIconWrapper }) : null, a.createElement(f.ZP, { color: o, size: "headline1", weight: "heavy" }, s)), c ? a.createElement(f.ZP, { color: o }, c) : null, a.createElement(_, { buttonProps: { type: "brandFilled" }, destinationLink: e, onDestinationClick: r, renderProperties: t })));
                },
                Z = h.default.create((e) => ({ cardOuter: { borderRadius: e.borderRadii.large, borderColor: e.colors.borderColor, borderWidth: e.borderWidths.small, backgroundColor: e.colors.cellBackground }, cardInner: { gap: e.spaces.space12, alignItems: "flex-start", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, image: { position: "absolute", width: "100%", height: "100%", borderRadius: e.borderRadii.large }, primaryLabelContainer: { flexDirection: "row", alignItems: "center" }, primaryLabelIconWrapper: { paddingEnd: e.spaces.space8, verticalAlign: "middle" } })),
                w = ({ destinationLink: e, onDestinationClick: r, renderProperties: t }) => {
                    const i = a.useMemo(() => {
                        const n = { destinationLink: e, onDestinationClick: r };
                        switch (t.__typename) {
                            case "UpsellButtonRenderProperties":
                                return a.createElement(_, (0, m.Z)({}, n, { renderProperties: t }));
                            case "UpsellCardRenderProperties":
                                return a.createElement(P, (0, m.Z)({}, n, { renderProperties: t }));
                            default:
                                return null;
                        }
                    }, [t, e, r]);
                    return a.createElement(n.Z, { testID: `super-upsell-${t.__typename ?? "default"}` }, i);
                },
                S = ({ attributionParams: e, trackClick: r, trackImpression: t, upsellContent: n }) => {
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
                D = (e) => a.createElement(l.nO, { data: { referer: e.attributionParams.referrer }, namespace: { component: "unified-upsell", element: e.upsellContent.key } }, a.createElement(S, e));
            var I = t(722517);
            const B = ({ attributionParams: e, surfaceKey: r, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }) => a.useMemo(() => a.createElement(D, { attributionParams: e, trackClick: t, trackDismiss: n, trackImpression: i, upsellContent: s }), [e, t, n, i, s]),
                L = ({ surfaceKey: e, wrapperStyles: r }) => {
                    const { attributionParams: t, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c } = (0, I.Z)(e);
                    return a.useMemo(() => (c && t ? a.createElement(n.Z, { style: r }, a.createElement(B, { attributionParams: t, surfaceKey: e, trackClick: i, trackDismiss: s, trackImpression: l, upsellContent: c })) : null), [t, c, e, i, s, l, r]);
                },
                M = a.memo(L);
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
                h = t(926981),
                b = t(642317),
                v = t(28862),
                C = t(376278),
                _ = t(511323),
                g = t(254944),
                y = t(465072),
                E = t(189700),
                P = t(520489),
                Z = t(297938),
                w = t(136483),
                S = t(457566);
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
                        return S.x1;
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
                        return v.default;
                    case "FireStroke":
                        return C.default;
                    case "PersonStroke":
                        return _.default;
                    case "PaintbrushStroke":
                        return g.default;
                    case "ModeratorStroke":
                        return y.default;
                    case "Document":
                        return E.default;
                    case "RadarStroke":
                        return P.default;
                    case "SearchPersonStroke":
                        return Z.default;
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
        189700: (e, r, t) => {
            t.r(r), t.d(r, { default: () => c });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(347101);
            const l = (e = {}) => {
                const { direction: r } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8 11h8v2H8zm0-4h5v2H8z" }), a.createElement("path", { d: "M17.5 2h-11C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22h6c4.14 0 7.5-3.36 7.5-7.5v-10C20 3.12 18.88 2 17.5 2zm-2.52 17.41c.01-.1.02-.21.02-.32v-1.27c0-.48.32-.82.84-.82h1.28c.09 0 .19 0 .29-.01-.53 1.04-1.39 1.89-2.43 2.42zM18 14c0 .58-.46 1-.88 1h-1.28C14.26 15 13 16.19 13 17.82v1.27c0 .46-.43.91-.97.91H6.5c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h11c.27 0 .5.22.5.5V14z" })) }, { writingDirection: r });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        376021: (e, r, t) => {
            t.r(r), t.d(r, { default: () => o });
            var a = t(202784),
                n = t(890601),
                i = t(783427),
                s = t(717683),
                l = t(347101);
            const c = (e = {}) => {
                const r = a.useContext(s.Z),
                    { direction: t } = (0, i.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, r && l.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const o = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.GetVerifiedSidebar.9621b28a.js.map
