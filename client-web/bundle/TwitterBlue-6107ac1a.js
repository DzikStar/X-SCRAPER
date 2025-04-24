"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterBlue-6107ac1a"],
    {
        427369: (e, l, a) => {
            a.d(l, { Z: () => w });
            var n,
                t,
                i,
                r,
                s,
                o,
                c,
                u,
                d,
                g,
                p,
                m,
                k,
                y,
                b,
                h,
                f,
                F = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "referringPage" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "PremiumContentQuery",
                        selections: [
                            {
                                alias: null,
                                args: (t = [
                                    { kind: "Literal", name: "s", value: "4721" },
                                    { fields: [{ kind: "Variable", name: "referring_page", variableName: "referringPage" }], kind: "ObjectValue", name: "view" },
                                ]),
                                concreteType: "TwitterBlueMarketingPageConfig",
                                kind: "LinkedField",
                                name: "blue_marketing_page_config",
                                plural: !1,
                                selections: [
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageProduct", kind: "LinkedField", name: "products", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "product_category", storageKey: null }), (r = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), (m = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [r, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "badge", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }), r, (c = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "learn_more_text", storageKey: null }), (d = { alias: null, args: null, kind: "ScalarField", name: "learn_more_title", storageKey: null }), (g = { alias: null, args: null, kind: "ScalarField", name: "learn_more_description", storageKey: null }), { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [(p = { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }), r, c, { alias: null, args: null, kind: "ScalarField", name: "variant", storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumContentQuery_product" }], storageKey: null },
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageHeader", kind: "LinkedField", name: "header", plural: !1, selections: [r, c, (k = { alias: null, args: null, kind: "ScalarField", name: "image", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumContentQuery_header" }], storageKey: null },
                                    (y = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCard", kind: "LinkedField", name: "card", plural: !1, selections: [r, c, o, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCardItemBadge", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }], storageKey: null }], storageKey: null }),
                                    (b = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [r, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [s, o, r, c, u, d, g, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [p, r, c], storageKey: null }], storageKey: null }], storageKey: null }),
                                    (h = { alias: null, args: null, concreteType: "TwitterBlueMarketingPageCarousel", kind: "LinkedField", name: "carousel", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageCarouselItem", kind: "LinkedField", name: "items", plural: !0, selections: [o, { alias: null, args: null, kind: "ScalarField", name: "headline", storageKey: null }, r, c], storageKey: null }], storageKey: null }),
                                    { alias: null, args: null, concreteType: "TwitterBlueMarketingPageSubscribeButton", kind: "LinkedField", name: "subscribe_button", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "PremiumContentQuery_disclaimer" }, (f = { alias: null, args: null, kind: "ScalarField", name: "disabled_explanation_text", storageKey: null })], storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: n, kind: "Operation", name: "PremiumContentQuery", selections: [{ alias: null, args: t, concreteType: "TwitterBlueMarketingPageConfig", kind: "LinkedField", name: "blue_marketing_page_config", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageProduct", kind: "LinkedField", name: "products", plural: !0, selections: [i, r, m, o, c, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "summary_bucket", plural: !1, selections: [c, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [r, c, p], storageKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageHeader", kind: "LinkedField", name: "header", plural: !1, selections: [r, c, k], storageKey: null }, y, b, h, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageSubscribeButton", kind: "LinkedField", name: "subscribe_button", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "detail_text", storageKey: null }, f, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url_text", storageKey: null }], storageKey: null }], storageKey: null }] },
                    params: { id: "XiSXQPFu8S8e_TwAC0AOTw", metadata: {}, name: "PremiumContentQuery", operationKind: "query", text: null },
                };
            F.hash = "6e8667466f84f7f3a126460c56847b74";
            const w = F;
        },
        391416: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PremiumContentQuery_disclaimer",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "detail_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disabled_explanation_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_url_text", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "disclaimer_cancel_url_text", storageKey: null },
                ],
                type: "TwitterBlueMarketingPageSubscribeButton",
                abstractKey: null,
                hash: "92bde70cde3c2bc74e3a06d1ad582ad3",
            };
            const t = n;
        },
        461904: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PremiumContentQuery_header",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                ],
                type: "TwitterBlueMarketingPageHeader",
                abstractKey: null,
                hash: "f469778f3ae5649dffcafbaae5f8c124",
            };
            const t = n;
        },
        553659: (e, l, a) => {
            a.d(l, { Z: () => s });
            var n,
                t,
                i,
                r = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "PremiumContentQuery_product", selections: [{ alias: null, args: null, kind: "ScalarField", name: "product_category", storageKey: null }, (n = { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }, (t = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "summary_bucket", plural: !1, selections: [t, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [n, t, (i = { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null })], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBuckets", kind: "LinkedField", name: "feature_buckets", plural: !1, selections: [{ alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeatureBucket", kind: "LinkedField", name: "buckets", plural: !0, selections: [n, { alias: null, args: null, kind: "ScalarField", name: "learn_more_text", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "learn_more_description", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "learn_more_title", storageKey: null }, { alias: null, args: null, concreteType: "TwitterBlueMarketingPageFeature", kind: "LinkedField", name: "features", plural: !0, selections: [n, t, i, { alias: null, args: null, kind: "ScalarField", name: "variant", storageKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "TwitterBlueMarketingPageProduct", abstractKey: null };
            r.hash = "03d9bfe21a2a9a527aeb7d6ca79c64bb";
            const s = r;
        },
        310456: (e, l, a) => {
            a.d(l, { p: () => n });
            const n = Object.freeze({ Advertising: "Advertising", BlueVerified: "BlueVerified", BlueVerifiedPlus: "BlueVerifiedPlus", Chirps: "Chirps", Coins: "Coins", OneDollar: "OneDollar", OneDollarSubscription: "OneDollarSubscription", PremiumBasic: "PremiumBasic", PremiumGift: "PremiumGift", PremiumPlusGift: "PremiumPlusGift", QuickFreeTrial: "QuickFreeTrial", QuickPromoteBudget: "QuickPromoteBudget", Seeds: "Seeds", Spaces: "Spaces", Subscriptions: "Subscriptions", SuperFollows: "SuperFollows", SuperLikes: "SuperLikes", VerifiedOrganizations: "VerifiedOrganizations", VerifiedOrganizationsBasic: "VerifiedOrganizationsBasic" });
        },
        403556: (e, l, a) => {
            a.d(l, { Z: () => P });
            var n = a(807896),
                t = a(202784),
                i = a(194504),
                r = a(235902),
                s = a(392237),
                o = a(325686),
                c = a(674132),
                u = a.n(c),
                d = a(912021),
                g = a(516951),
                p = a(731708),
                m = a(310088),
                k = a(175993),
                y = a(58881),
                b = a(530732);
            const h = u().d2414d31,
                f = () => u().ce4e85ae,
                F = u().fb9f6f39;
            class w extends t.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, d.Z)((e, l) => {
                            const { pathname: a, query: n, state: t } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: a, query: n, method: "push", state: { ...t, lockScroll: l } };
                        })),
                        (this._unlisten = g.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, l, a, n) => {
                            const t = s.default.theme.colors.text,
                                i = s.default.theme.colors.gray700;
                            return a || n ? (e || l ? t : i) : e ? t : i;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: l } = this.props;
                            l && l(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": l, badgeCount: a, badgePip: n, children: i, color: r, isActive: c, isCompact: u, isPillLink: d, isRoundedRect: g, isWebRedesign: k, retainScrollPosition: w, style: S, to: _ } = this.props,
                        { location: P } = this.state,
                        T = _ ? this._getMemoizedLink(_, w) : void 0,
                        x = c ? c(_) : P?.pathname === T?.pathname,
                        B = y.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0 }),
                        K = k ? "medium" : x ? "bold" : "medium";
                    return t.createElement(b.Z, { "aria-label": l, "aria-selected": x, focusable: !!x, interactiveStyles: B, link: T, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [d ? C.pill : C.link, d && x ? C.active : null, u ? (d ? C.compactPill : C.compactLink) : null, g ? C.roundedRect : null, S], withoutInteractiveStyles: k || d }, ({ isFocused: l, isHovered: c }) => t.createElement(o.Z, { style: d && C.flexGrow }, t.createElement(p.ZP, { size: k ? "headline2" : void 0, style: [C.text, { color: this._getTextColor(x, c, k, d) }, u && C.compactText, k && l && C.focusedText], weight: K }, e && t.createElement(e, { style: C.icon }), i, k || d ? null : t.createElement(o.Z, { style: x && [C.border, { backgroundColor: s.default.theme.colors[r] }] })), a ? t.createElement(m.Z, { count: a, standalone: !0, style: [C.badge, a >= 10 && C.multiDigitBadge, a >= 20 && C.truncatedCountBadge], truncatedCountFormatter: F, unreadCountLabel: h, withBorder: !1 }) : n ? t.createElement(m.Z, { pip: !0, standalone: !0, style: C.badgePip, textColor: "red500", unreadCountLabel: f, withBorder: !1 }) : null));
                }
            }
            (w.contextType = k.Z), (w.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const C = s.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                S = w,
                _ = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                P = ({ alignFirstItem: e, "aria-label": l, isCompact: a, isPillLink: s, isRoundedRect: o, links: c, style: u, visibleItemIndex: d }) => {
                    const g = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: p } = r.ZP.useProps(),
                        m = p() && !s,
                        k = t.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: l, viewType: i, ...r }, c) => {
                                    const u = m ? [_.linkRedesign, 0 === c && _.firstLinkRedesign, e && 0 === c && _.withNoPaddingStart] : void 0;
                                    return t.createElement(S, (0, n.Z)({ viewType: i }, r, { isCompact: a, isPillLink: s, isRoundedRect: o, isWebRedesign: m, style: u }), l);
                                }),
                            [e, a, s, o, m, c],
                        );
                    return t.createElement(i.Z, { "aria-label": l, buttonsContainerStyle: s && _.gap, childrenStyle: !m && _.flexGrow, key: g, style: [s ? null : _.segmentedControl, m && _.leftAligned, u], visibleItemIndex: d }, k);
                };
        },
        782947: (e, l, a) => {
            a.d(l, { Z: () => b });
            var n = a(807896),
                t = a(202784),
                i = a(896632),
                r = a(325686),
                s = a(711223),
                o = a(516951),
                c = a(731708),
                u = a(868634),
                d = a(952428),
                g = a(352924),
                p = a(392237);
            const m = p.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.cellBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding8: { paddingHorizontal: e.spaces.space8, paddingVertical: e.spaces.space4 }, boxShadow: { boxShadow: e.boxShadows.medium }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 1 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column" }, row: { flexDirection: "row", alignItems: "center" }, marginTop4: { marginTop: e.spaces.space4 }, marginBottom8: { marginBottom: e.spaces.space8 }, info: { flexDirection: "row", justifyContent: "space-between", marginBottom: e.spaces.space8 }, infoIcon: { fontSize: ".74em", color: e.colors.gray700 }, backgroundTransparent: { backgroundColor: e.colors.transparent }, pill: { marginBottom: e.spaces.space4 }, inlinePill: { marginStart: e.spaces.space4 } })),
                k = { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                y = ({ "aria-label": e, "aria-posinset": l, "aria-setsize": a, checked: n, dedicatedPillRow: i, description: p, disabled: y, disabledInlineCallout: b, endContent: h, horizontal: f, illustration: F, infoLabel: w, infoLabelType: C, inlineCallout: S, label: _, name: P, onChange: T, pillText: x, pillType: B, reverseLabels: K, secondaryContent: L, secondaryDescription: v, switchStyle: Z, testID: M }) => {
                    const R = (0, g.b)(),
                        D = (0, g.b)(),
                        E = (0, g.b)(),
                        I = t.createElement(c.ZP, { color: "text", id: R, role: "label", size: Z ? "body" : "headline2", testID: "headline-label", weight: Z ? "normal" : "bold" }, _),
                        z = !!p && t.createElement(c.ZP, { color: "gray700", id: D, size: "subtext1", style: x ? m.descriptionWithPill : m.description, testID: "description-label" }, p),
                        W = t.createElement(c.ZP, { color: "gray700", role: "label", size: "subtext2", style: m.description }, v),
                        G = x ? t.createElement(u.ZP, { style: i ? m.pill : m.inlinePill, type: B }, x) : null,
                        Q = t.createElement(t.Fragment, null, i ? G : null, t.createElement(r.Z, { style: [m.row, w && m.marginBottom8] }, K ? z : I, i ? null : G), t.createElement(r.Z, { style: [m.row, K && m.marginTop4] }, K ? I : z), L || (v ? W : void 0)),
                        O = Z ? "unset" : (a ? 100 / a : 100) + "%",
                        j = Z ? [m.padding8, m.borderRadiusInfinite, n ? m.backgroundDefault : m.backgroundTransparent] : [m.padding16, m.boxShadow, m.borderRadiusLarge, n ? m.checked : null, m.backgroundDefault];
                    return t.createElement(t.Fragment, null, t.createElement(d.Z, { disabled: y, style: [m.root, ...j, f ? { maxWidth: O, ...m.grow } : null, 1 === l || f ? null : m.withMarginTop, l !== a && f && !Z && m.withMarginEnd, !y && m.interactive], testID: M, withInteractiveStyling: !Z }, !!F && t.createElement(r.Z, { style: m.iconContainer, testID: "illustration" }, F), t.createElement(r.Z, { style: [m.labelContainer, Z && m.alignCenter] }, !!w && t.createElement(r.Z, { style: m.info }, t.createElement(u.ZP, { background: "green" === C ? "green500" : "red" === C ? "magenta500" : "yellow" === C ? "orange50" : "gray500" }, t.createElement(c.ZP, { color: "yellow" === C ? "orange900" : "whiteOnColor", size: "subtext3", weight: "bold" }, w)), "red" !== C && "yellow" !== C && t.createElement(s.default, { style: m.infoIcon, testID: "infoIcon" })), Q, n && !!S && t.createElement(r.Z, { style: m.inlineCalloutContainer, testID: "inlineCallout" }, S)), !!h && t.createElement(r.Z, { style: m.endContentContainer, testID: "endContent" }, t.createElement(c.ZP, { id: E, size: "subtext1", weight: "bold" }, h)), t.createElement("input", { "aria-describedby": `${D} ${E}`, "aria-label": e, "aria-labelledby": R, "aria-posinset": l, "aria-setsize": a, checked: n, disabled: y, name: P, onChange: n ? o.Z : T, style: k, type: "radio" })), y && b ? b : null);
                },
                b = (e) => {
                    const l = t.useCallback(({ value: e, ...l }) => t.createElement(y, (0, n.Z)({}, l, { key: e })), []);
                    return t.createElement(i.Z, (0, n.Z)({}, e, { renderSelector: l }));
                };
        },
        74882: (e, l, a) => {
            var n = a(23103),
                t = a(21178),
                i = a(910905),
                r = a(609736),
                s = Array;
            n(
                { target: "Array", proto: !0 },
                {
                    toReversed: function () {
                        return t(i(this), s);
                    },
                },
            ),
                r("toReversed");
        },
        196670: (e, l, a) => {
            e.exports = a.p + "X_logo_black.00ba8bfa.png";
        },
        885216: (e, l, a) => {
            e.exports = a.p + "X_logo_white.22c1baea.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterBlue-6107ac1a.91f8e38a.js.map
