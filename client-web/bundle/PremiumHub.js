"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumHub", "icons/IconBookStrokeOn-js", "icons/IconBookmarkCollectionsStroke-js", "icons/IconCameraVideoStroke-js", "icons/IconChevronRight-js", "icons/IconFireStroke-js"],
    {
        252021: (e, l, n) => {
            n.d(l, { Z: () => i });
            var t = n(202784),
                a = n(107267),
                r = n(115553);
            const i = (e) => {
                (0, a.useHistory)();
                return t.createElement(r.A, e);
            };
        },
        301410: (e, l, n) => {
            n.d(l, { i: () => y.ZP, z: () => b });
            var t = n(202784),
                a = n(928123),
                r = n.n(a),
                i = n(72845),
                s = n.n(i),
                o = n(57074),
                c = n.n(o),
                u = n(516951),
                d = n(88656),
                m = n(71620),
                g = n(163889),
                y = n(312771);
            const p = ({ render: e }) => e({ fetchStatus: y.ZP.LOADING, data: null, error: null, retry: u.Z });
            class k extends t.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, l) {
                    if (!(e instanceof d.Z)) throw e;
                    this.props.errorHandler(e), (0, g.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const h = ({ query: e, queryRef: l, render: n }) => {
                    const t = r()(e, l);
                    return n({ fetchStatus: y.ZP.LOADED, data: t, error: null, retry: u.Z });
                },
                b = (e, l) =>
                    function ({ fetchPolicy: n = "store-or-network", render: a, variables: r }) {
                        const [i, o] = s()(e),
                            u = (0, m.n7)(l.errorConfig.context),
                            d = c()(r),
                            g = t.useCallback(() => {
                                o(d, { fetchPolicy: "network-only" });
                            }, [o, d]);
                        return (
                            t.useLayoutEffect(() => {
                                o(d, { fetchPolicy: n });
                            }, [n, o, d]),
                            i
                                ? t.createElement(
                                      t.Suspense,
                                      { fallback: t.createElement(p, { render: a }) },
                                      t.createElement(k, { errorHandler: u(l.errorConfig.options || {}), key: i.fetchKey, retry: g }, (l, n) => (l ? a({ fetchStatus: y.ZP.FAILED, error: l, data: null, retry: n }) : t.createElement(h, { query: e, queryRef: i, render: a }))),
                                  )
                                : null
                        );
                    };
        },
        99065: (e, l, n) => {
            n.r(l), n.d(l, { default: () => De });
            var t = n(202784),
                a = n(107267),
                r = n(750410),
                i = n(111677),
                s = n.n(i),
                o = n(443781),
                c = n(301410),
                u = n(293115),
                d = n(615027),
                m = n(325686),
                g = n(731708),
                y = n(167630),
                p = n(40610),
                k = n(688715),
                h = n(154003),
                b = n(529356),
                f = n(392237),
                F = n(952793),
                v = n(125363),
                S = n(691213);
            const E = s().d7eebb60,
                _ = s().h707b180,
                C = s().a452ab68,
                P = s().g61ed8a4,
                K = s().a905eac6,
                Z = ({ tierSwitchTarget: e, tierSwitchType: l }) => {
                    const { userClaims: n } = (0, o.QZ)(),
                        [r, i] = t.useState("loading"),
                        c = (0, v.I0)(),
                        u = (0, a.useHistory)(),
                        d = (0, F.hC)("subscriptions_management_tier_switch_success_screen_enabled"),
                        f = t.useCallback(() => {
                            u.replace({ pathname: u.location.pathname }, null), u.go(0);
                        }, [u]);
                    t.useEffect(() => {
                        const t = "upgrade" === l;
                        let a = 0;
                        const r = setInterval(() => {
                            !t || (e ? n.hasSubscription(e) : n.isAnyPremiumSubscriber()) ? (i("loaded"), clearInterval(r), (l && d) || f()) : a >= 10 ? (i("failed"), clearInterval(r)) : ((a += 1), c((0, S.rS)({})));
                        }, 1e3);
                        return () => {
                            clearInterval(r);
                        };
                    }, [e, n, c, u, l, f, d]);
                    const Z = t.useMemo(() => (l && "loaded" === r && d ? _ : E), [l, r, d]),
                        w = t.useMemo(() => ("loading" === r ? t.createElement(m.Z, { style: H.fullWidth }, t.createElement(g.ZP, null, C), t.createElement(y.Z, { style: H.marginTop })) : "failed" === r ? t.createElement(m.Z, { style: [H.marginTop, H.fullWidth] }, t.createElement(p.Z.Danger, { headline: P, text: t.createElement(s().I18NFormatMessage, { $i18n: "b88304a3" }, t.createElement(g.ZP, { link: (0, k.ju)("https://x.com/premium") }, s().b3bad3b2)) })) : "loaded" === r && l && d ? t.createElement(m.Z, null, t.createElement(h.ZP, { onClick: f, size: "large", style: H.exploreHubButton, type: "primaryFilled" }, K)) : null), [r, f, l, d]);
                    return t.createElement(b.Z, { graphicDisplayMode: "none", headline: Z, onAction: () => {}, subtext: w, withCloseButton: !1 });
                },
                H = f.default.create((e) => ({ marginTop: { marginTop: e.spaces.space24 }, fullWidth: { width: "100%" }, exploreHubButton: { marginTop: e.spaces.space16 } }));
            var w,
                x,
                L,
                T,
                z,
                B,
                R,
                D,
                I = n(537392),
                M = n(698891),
                V = n(252021),
                A = n(10656),
                O = n(725516),
                Q = (n(136728), n(277660)),
                N = n.n(Q),
                U = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "PremiumHubQuery",
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "PremiumHubConfig",
                                kind: "LinkedField",
                                name: "premium_hub_config",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "PremiumHubConfigContent",
                                        kind: "LinkedField",
                                        name: "content",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "primary", plural: !0, selections: (x = [(w = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumHubQuery_section" }]), storageKey: null },
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "secondary", plural: !0, selections: x, storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "PremiumHubQuery",
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: "PremiumHubConfig",
                                kind: "LinkedField",
                                name: "premium_hub_config",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "PremiumHubConfigContent",
                                        kind: "LinkedField",
                                        name: "content",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "PremiumHubConfigSection",
                                                kind: "LinkedField",
                                                name: "primary",
                                                plural: !0,
                                                selections: (D = [
                                                    w,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "blocks",
                                                        plural: !0,
                                                        selections: [
                                                            (L = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            { kind: "TypeDiscriminator", abstractKey: "__isPremiumHubConfigBlock" },
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    w,
                                                                    (z = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "button",
                                                                        plural: !1,
                                                                        selections: [
                                                                            L,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "button_text", storageKey: null },
                                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(T = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], storageKey: null },
                                                                                ],
                                                                                type: "TimelineTextCtaButton",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    { alias: null, args: null, concreteType: "PremiumHubConfigTextLink", kind: "LinkedField", name: "text_link", plural: !1, selections: [(B = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }), T], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "card_block_type", storageKey: null },
                                                                    (R = { alias: null, args: null, kind: "ScalarField", name: "heading", storageKey: null }),
                                                                    { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                                                                ],
                                                                type: "PremiumHubConfigCardBlock",
                                                                abstractKey: null,
                                                            },
                                                            { kind: "InlineFragment", selections: [w, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, R, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [B, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, T], type: "PremiumHubConfigLinkBlock", abstractKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "PremiumHubConfigHeading", kind: "LinkedField", name: "heading", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }, z], storageKey: null },
                                                ]),
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "secondary", plural: !0, selections: D, storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "ZSf-h40cwVaFsNHK_PiHUw", metadata: {}, name: "PremiumHubQuery", operationKind: "query", text: null },
                };
            U.hash = "af1bf05e9a6a9c643edfc3d0ab1e0895";
            const j = U;
            var q = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PremiumHubQuery_section",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                    { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "blocks", plural: !0, selections: [{ args: null, kind: "FragmentSpread", name: "PremiumHubQuery_block" }], storageKey: null },
                    { alias: null, args: null, concreteType: "PremiumHubConfigHeading", kind: "LinkedField", name: "heading", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "PremiumHubQuery_heading" }], storageKey: null },
                ],
                type: "PremiumHubConfigSection",
                abstractKey: null,
                hash: "d02fbfd13f031b00c03e0a3189cf2fe0",
            };
            const W = q;
            var G = (function () {
                var e = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    l = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
                    t = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "heading", storageKey: null };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "PremiumHubQuery_block",
                    selections: [
                        {
                            kind: "InlineFragment",
                            selections: [
                                e,
                                l,
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "button",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                { alias: null, args: null, kind: "ScalarField", name: "button_text", storageKey: null },
                                                { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [n], storageKey: null },
                                            ],
                                            type: "TimelineTextCtaButton",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                { alias: null, args: null, concreteType: "PremiumHubConfigTextLink", kind: "LinkedField", name: "text_link", plural: !1, selections: [t, n], storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "card_block_type", storageKey: null },
                                a,
                                { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                            ],
                            type: "PremiumHubConfigCardBlock",
                            abstractKey: null,
                        },
                        { kind: "InlineFragment", selections: [e, l, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, a, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [t, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, n], type: "PremiumHubConfigLinkBlock", abstractKey: null },
                    ],
                    type: "PremiumHubConfigBlock",
                    abstractKey: "__isPremiumHubConfigBlock",
                };
            })();
            G.hash = "ffc77d5aea0ab2b78d44fe861caba669";
            const $ = G;
            var X = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "PremiumHubQuery_heading",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "button",
                        plural: !1,
                        selections: [
                            {
                                kind: "InlineFragment",
                                selections: [
                                    { alias: null, args: null, kind: "ScalarField", name: "button_text", storageKey: null },
                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                ],
                                type: "TimelineTextCtaButton",
                                abstractKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "PremiumHubConfigHeading",
                abstractKey: null,
                hash: "36246f1a2db2255cf4992248d26661e9",
            };
            const J = X;
            n(585488);
            const Y = J,
                ee = $,
                le = W,
                ne = j;
            var te = n(530525),
                ae = n(439592);
            const re = ({ buttonText: e, heading: l, imageUrl: n, isPrimarySection: a, subheading: r, textLink: i, type: s, url: o }) => {
                    const c = (0, O.z)();
                    return t.createElement(
                        m.Z,
                        { style: se.cardBlock },
                        n ? t.createElement(m.Z, { style: se.image }, t.createElement(te.Z, { "aria-label": "todo", aspectMode: ae.Z.COVER, image: { url: n, height: 124, width: 343 } })) : null,
                        t.createElement(
                            m.Z,
                            { style: se.inner },
                            t.createElement(g.ZP, { size: "title4", style: se.heading, weight: "heavy" }, l),
                            t.createElement(g.ZP, { color: "gray700", style: se.subheading }, r),
                            i ? t.createElement(g.ZP, { link: i.url, style: se.textLink }, i.text) : null,
                            o
                                ? t.createElement(
                                      h.ZP,
                                      {
                                          allowTextWrap: !0,
                                          link: { pathname: o, state: { referring_page: "hub" } },
                                          onClick: () => {
                                              c.scribeAction("click");
                                          },
                                          style: se.button,
                                          type: "primaryFilled",
                                      },
                                      e,
                                  )
                                : null,
                        ),
                    );
                },
                ie = t.memo(re),
                se = f.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16 }, button: { alignSelf: "flex-start", paddingHorizontal: 0 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, textLink: { marginBottom: e.spaces.space16 }, image: { height: "127px" } }));
            var oe = n(868634),
                ce = n(530732),
                ue = n(909377),
                de = n(58399),
                me = n(498514),
                ge = n(693510);
            const ye = { Warning: "orange50", Info: "blue500" },
                pe = ({ blockKey: e, color: l, heading: n, icon: a, isFirst: r, isLast: i, isPrimarySection: s, pill: o, subtext: c, type: u, url: d }) => {
                    const y = (0, O.z)(),
                        {
                            id: p,
                            link: k,
                            onClick: h,
                        } = (function ({ blockKey: e, url: l }) {
                            const { hasVerifiedOrgFeature: n } = (0, ge.ZP)(),
                                t = n("BusinessPreapprovalAdminPortalAccess");
                            return (0, F.hC)("responsive_web_verified_organizations_intercom_enabled") && !t && "verified_orgs_support_link" === e ? { link: void 0, id: "intercom_launcher" } : { link: l, onClick: void 0 };
                        })({ blockKey: e, url: d }),
                        b = "Primary" === u,
                        v = [];
                    r && v.push(he.isFirst), i && v.push(he.isLast);
                    const S = b || (!s && !b),
                        E = { backgroundColor: l ? f.default.theme.colors[l] : null },
                        _ = t.useMemo(() => (o ? t.createElement(oe.ZP, { background: ye[o.pill_type] }, o.text) : null), [o]);
                    return t.createElement(
                        ce.Z,
                        {
                            id: p,
                            link: k,
                            onClick: () => {
                                y.scribeAction("click"), h && h();
                            },
                            style: [he.linkBlock, S ? [he.backgroundGray, v] : null],
                        },
                        t.createElement(m.Z, { style: [he.inner, !i && S ? he.divider : null] }, a ? t.createElement(ue.Z, { Icon: (0, me.U)(a), shape: "square", size: "large", style: E }) : null, t.createElement(g.ZP, { style: he.heading }, n), t.createElement(m.Z, { style: he.rightContent }, c ? t.createElement(g.ZP, { color: "gray700" }, c) : null, _, t.createElement(de.default, { style: he.chevron }))),
                    );
                },
                ke = t.memo(pe),
                he = f.default.create((e) => ({ linkBlock: { cursor: "pointer" }, backgroundGray: { backgroundColor: e.colors.gray0 }, inner: { paddingVertical: e.spaces.space8, marginHorizontal: e.spaces.space12, alignItems: "center", flexDirection: "row", minHeight: e.spaces.space48 }, divider: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.gray100 }, heading: { marginHorizontal: e.spaces.space12 }, isFirst: { borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium }, isLast: { borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium }, chevron: { color: e.colors.gray700, marginStart: e.spaces.space8 }, rightContent: { position: "absolute", end: 0, flexDirection: "row", alignItems: "center" } })),
                be = ({ blockRef: e, isFirst: l, isLast: n, isPrimarySection: a }) => {
                    const r = N()(ee, e);
                    return t.createElement(u.nO, { namespace: { component: r.key } }, "PremiumHubConfigLinkBlock" === r.__typename ? t.createElement(ke, { blockKey: r.key, color: r.color, heading: r.heading, icon: r.icon, isFirst: l, isLast: n, isPrimarySection: a, pill: r.pill, subtext: r.subtext, type: r.link_block_type, url: r.url }) : "PremiumHubConfigCardBlock" === r.__typename ? t.createElement(ie, { buttonText: r.button?.button_text, heading: r.heading, imageUrl: r.image_url, isPrimarySection: a, subheading: r.subheading, textLink: r.text_link, type: r.card_block_type, url: r?.button?.url?.url }) : null);
                },
                fe = t.memo(be),
                Fe = ({ headingRef: e }) => {
                    const l = N()(Y, e);
                    return t.createElement(m.Z, { style: Se.heading }, t.createElement(g.ZP, { size: "headline2", weight: "heavy" }, l.title), l.button ? t.createElement(h.ZP, { link: l.button?.url?.url, size: "xSmall", type: "primaryFilled" }, l.button?.button_text) : null);
                },
                ve = t.memo(Fe),
                Se = f.default.create((e) => ({ heading: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" } })),
                Ee = ({ isFirst: e, isLast: l, isPrimarySection: n, sectionRef: a }) => {
                    const r = N()(le, a);
                    if (0 === r.blocks.length) return null;
                    const i = r.heading ? t.createElement(ve, { headingRef: r.heading }) : null,
                        s = r?.blocks.map((e, l, a) => {
                            const r = 0 === l,
                                i = l === a.length - 1;
                            return t.createElement(fe, { blockRef: e, isFirst: r, isLast: i, isPrimarySection: n, key: `block-${l}` });
                        }),
                        o = [];
                    return e && o.push(Ce.isFirst), e || o.push(Ce.isNotFirst), l && o.push(Ce.isLast), t.createElement(m.Z, { style: o }, i, s);
                },
                _e = t.memo(Ee),
                Ce = f.default.create((e) => ({ isNotFirst: { marginTop: e.spaces.space16 }, isFirst: { marginTop: e.spaces.space8 }, isLast: { marginBottom: e.spaces.space64 } }));
            var Pe = n(664064);
            const Ke = () => (!(0, a.useLocation)().state && document.referrer.includes("premium_signup_nux_flow") ? t.createElement(m.Z, { style: Ze.confetti }, t.createElement(Pe.Z, { autoplay: !0, count: 40, duration: 4e3, image_url: "light" === f.default.theme.paletteName ? "https://abs.twimg.com/responsive-web/client-web/X_logo_black.00ba8bfa.png" : "https://abs.twimg.com/responsive-web/client-web/X_logo_white.22c1baea.png", type: "image" })) : null),
                Ze = f.default.create((e) => ({ confetti: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0, zIndex: 3 } })),
                He = s().f75d1806,
                we = s().bb081ea2,
                xe = ({ data: e }) => {
                    const l = (0, a.useHistory)(),
                        n = (0, O.z)(),
                        r = (0, I.Zx)(({ containerWidth: e }) => A.Z.isTwoColumnLayout(e));
                    t.useEffect(() => {
                        n.scribeAction("impression");
                    }, [n]);
                    const i = e?.premium_hub_config?.content,
                        s = e?.premium_hub_config?.content.secondary?.map((e) => e.key),
                        o = t.createElement(
                            m.Z,
                            { style: Te.primaryContent },
                            i?.primary
                                ?.filter((e) => !r || !s?.includes(e.key))
                                .map((e, l, n) => {
                                    const a = 0 === l,
                                        r = l === n.length - 1;
                                    return t.createElement(u.nO, { key: `primary-section-${l}`, namespace: { section: e.key } }, t.createElement(_e, { isFirst: a, isLast: r, isPrimarySection: !0, sectionRef: e }));
                                }),
                        ),
                        c = t.createElement(
                            m.Z,
                            { style: Te.secondaryContent },
                            i?.secondary?.map((e, l, n) => {
                                const a = 0 === l,
                                    r = l === n.length - 1;
                                return t.createElement(u.nO, { key: `secondary-section-${l}`, namespace: { section: e.key } }, t.createElement(_e, { isFirst: a, isLast: r, isPrimarySection: !1, sectionRef: e }));
                            }),
                        ),
                        d = t.createElement(h.ZP, { "aria-label": we, icon: t.createElement(M.default, null), link: "/settings/premium", type: "primaryText" });
                    return t.createElement(t.Fragment, null, t.createElement(V.Z, { headerless: !1, history: l, primaryContent: o, rightControl: d, sidebarContent: c, title: He }), t.createElement(Ke, null));
                },
                Le = t.memo(xe),
                Te = f.default.create((e) => ({ primaryContent: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space24 }, secondaryContent: { paddingTop: e.spaces.space32 } })),
                ze = s().a0b4541c,
                Be = (0, c.z)(ne, { errorConfig: { context: "PREMIUM_HUB_SCREEN" } }),
                Re = () => {
                    const { userClaims: e } = (0, o.QZ)(),
                        l = (0, a.useLocation)(),
                        n = l.state?.tierSwitchTarget,
                        i = l.state?.tierSwitchType;
                    return n || !e.isAnyPremiumSubscriber() ? t.createElement(Z, { tierSwitchTarget: n, tierSwitchType: i }) : t.createElement(u.nO, { namespace: { page: "premium_hub" } }, t.createElement(Be, { render: ({ data: e, fetchStatus: l, retry: n }) => (l === c.i.FAILED ? t.createElement(r.Z, { onRequestRetry: n, retryMessage: ze }) : l === c.i.LOADED ? (e ? t.createElement(Le, { data: e }) : t.createElement(d.Z, { to: "/home" })) : null), variables: {} }));
                },
                De = t.memo(Re);
        },
        498514: (e, l, n) => {
            n.d(l, { U: () => Z });
            n(202784);
            var t = n(521058),
                a = n(847988),
                r = n(616894),
                i = n(376021),
                s = n(625823),
                o = n(839),
                c = n(266151),
                u = n(468670),
                d = n(913973),
                m = n(1753),
                g = n(748138),
                y = n(53674),
                p = n(164174),
                k = n(926981),
                h = n(642317),
                b = n(28862),
                f = n(376278),
                F = n(511323),
                v = n(254944),
                S = n(465072),
                E = n(189700),
                _ = n(520489),
                C = n(297938),
                P = n(136483),
                K = n(457566);
            const Z = (e) => {
                switch (e) {
                    case "Fire":
                        return t.default;
                    case "BookStrokeOn":
                        return a.default;
                    case "No":
                        return r.default;
                    case "WriteStroke":
                        return i.default;
                    case "AccountNft":
                        return s.default;
                    case "CameraVideoStroke":
                        return o.default;
                    case "Feather":
                        return c.default;
                    case "LockStroke":
                        return u.default;
                    case "Checkmark":
                        return d.default;
                    case "NotesStroke":
                        return m.default;
                    case "Grok":
                        return K.x1;
                    case "MoneyStroke":
                        return g.default;
                    case "BarChart":
                        return y.default;
                    case "DeckStroke":
                        return p.default;
                    case "Film":
                        return k.default;
                    case "RocketStroke":
                        return h.default;
                    case "BookmarkCollectionsStroke":
                        return b.default;
                    case "FireStroke":
                        return f.default;
                    case "PersonStroke":
                        return F.default;
                    case "PaintbrushStroke":
                        return v.default;
                    case "ModeratorStroke":
                        return S.default;
                    case "Document":
                        return E.default;
                    case "RadarStroke":
                        return _.default;
                    case "SearchPersonStroke":
                        return C.default;
                    case "CircleFill":
                        return P.default;
                    default:
                        return () => null;
                }
            };
        },
        847988: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var t = n(202784),
                a = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M15.2 4c-1.2 0-2.4.5-3.2 1.3-.8-.8-2-1.3-3.2-1.3H1v16h8.2c.8 0 1.4.4 1.8 1.1l.2.3H13c.5-.9 1.1-1.5 2-1.5h8V4h-7.8zM11 18.5c-.6-.3-1.2-.5-1.8-.5H3V6h5.8c.9 0 1.8.5 2.2 1.3v11.2zm10-.5h-6.1c-.7 0-1.3.2-1.9.5V7.3c.5-.8 1.3-1.3 2.2-1.3H21v12zm-2-5v2h-4v-2h4zm0-4v2h-4V9h4zM9 9v2H5V9h4zm0 4v2H5v-2h4z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        28862: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var t = n(202784),
                a = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zm2.5-.5c-.276 0-.5.22-.5.5v10.88l5-2.5 5 2.5V8.5c0-.28-.224-.5-.5-.5h-9zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        839: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var t = n(202784),
                a = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        58399: (e, l, n) => {
            n.r(l), n.d(l, { default: () => c });
            var t = n(202784),
                a = n(890601),
                r = n(783427),
                i = n(717683),
                s = n(347101);
            const o = (e = {}) => {
                const l = t.useContext(i.Z),
                    { direction: n } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, l && s.Z.iconRTL], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        376278: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var t = n(202784),
                a = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        748138: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var t = n(202784),
                a = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumHub.822134da.js.map
