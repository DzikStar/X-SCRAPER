"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumHub"],
    {
        301410: (e, l, n) => {
            n.d(l, { i: () => y.ZP, z: () => f });
            var a = n(202784),
                t = n(928123),
                r = n.n(t),
                i = n(72845),
                s = n.n(i),
                u = n(57074),
                o = n.n(u),
                c = n(516951),
                d = n(88656),
                m = n(71620),
                g = n(163889),
                y = n(312771);
            const p = ({ render: e }) => e({ fetchStatus: y.ZP.LOADING, data: null, error: null, retry: c.Z });
            class k extends a.Component {
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
            const b = ({ query: e, queryRef: l, render: n }) => {
                    const a = r()(e, l);
                    return n({ fetchStatus: y.ZP.LOADED, data: a, error: null, retry: c.Z });
                },
                f = (e, l) =>
                    function ({ fetchPolicy: n = "store-or-network", render: t, variables: r }) {
                        const [i, u] = s()(e),
                            c = (0, m.n7)(l.errorConfig.context),
                            d = o()(r),
                            g = a.useCallback(() => {
                                u(d, { fetchPolicy: "network-only" });
                            }, [u, d]);
                        return (
                            a.useLayoutEffect(() => {
                                u(d, { fetchPolicy: n });
                            }, [n, u, d]),
                            i
                                ? a.createElement(
                                      a.Suspense,
                                      { fallback: a.createElement(p, { render: t }) },
                                      a.createElement(k, { errorHandler: c(l.errorConfig.options || {}), key: i.fetchKey, retry: g }, (l, n) => (l ? t({ fetchStatus: y.ZP.FAILED, error: l, data: null, retry: n }) : a.createElement(b, { query: e, queryRef: i, render: t }))),
                                  )
                                : null
                        );
                    };
        },
        99065: (e, l, n) => {
            n.r(l), n.d(l, { default: () => De });
            var a = n(202784),
                t = n(107267),
                r = n(750410),
                i = n(674132),
                s = n.n(i),
                u = n(443781),
                o = n(301410),
                c = n(293115),
                d = n(615027),
                m = n(325686),
                g = n(731708),
                y = n(167630),
                p = n(40610),
                k = n(688715),
                b = n(154003),
                f = n(529356),
                h = n(392237),
                F = n(952793),
                S = n(125363),
                _ = n(215929);
            const P = s().d7eebb60,
                E = s().h707b180,
                K = s().a452ab68,
                C = s().g61ed8a4,
                T = s().a905eac6,
                H = ({ tierSwitchTarget: e, tierSwitchType: l }) => {
                    const { userClaims: n } = (0, u.QZ)(),
                        [r, i] = a.useState("loading"),
                        o = (0, S.I0)(),
                        c = (0, t.useHistory)(),
                        d = (0, F.hC)("subscriptions_management_tier_switch_success_screen_enabled"),
                        h = a.useCallback(() => {
                            c.replace({ pathname: c.location.pathname }, null), c.go(0);
                        }, [c]);
                    a.useEffect(() => {
                        const a = "upgrade" === l;
                        let t = 0;
                        const r = setInterval(() => {
                            !a || (e ? n.hasSubscription(e) : n.isAnyPremiumSubscriber()) ? (i("loaded"), clearInterval(r), (l && d) || h()) : t >= 10 ? (i("failed"), clearInterval(r)) : ((t += 1), o((0, _.rS)({})));
                        }, 1e3);
                        return () => {
                            clearInterval(r);
                        };
                    }, [e, n, o, c, l, h, d]);
                    const H = a.useMemo(() => (l && "loaded" === r && d ? E : P), [l, r, d]),
                        x = a.useMemo(() => ("loading" === r ? a.createElement(m.Z, { style: L.fullWidth }, a.createElement(g.ZP, null, K), a.createElement(y.Z, { style: L.marginTop })) : "failed" === r ? a.createElement(m.Z, { style: [L.marginTop, L.fullWidth] }, a.createElement(p.Z.Danger, { headline: C, text: a.createElement(s().I18NFormatMessage, { $i18n: "b88304a3" }, a.createElement(g.ZP, { link: (0, k.ju)("https://x.com/premium") }, s().b3bad3b2)) })) : "loaded" === r && l && d ? a.createElement(m.Z, null, a.createElement(b.ZP, { onClick: h, size: "large", style: L.exploreHubButton, type: "primaryFilled" }, T)) : null), [r, h, l, d]);
                    return a.createElement(f.Z, { graphicDisplayMode: "none", headline: H, onAction: () => {}, subtext: x, withCloseButton: !1 });
                },
                L = h.default.create((e) => ({ marginTop: { marginTop: e.spaces.space24 }, fullWidth: { width: "100%" }, exploreHubButton: { marginTop: e.spaces.space16 } }));
            var x,
                Z,
                w,
                v,
                B,
                R,
                I,
                D,
                z = n(537392),
                A = n(698891),
                Q = n(252021),
                M = n(10656),
                O = n(725516),
                N = (n(136728), n(277660)),
                U = n.n(N),
                q = {
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
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "primary", plural: !0, selections: (Z = [(x = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumHubQuery_section" }]), storageKey: null },
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "secondary", plural: !0, selections: Z, storageKey: null },
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
                                                    x,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "blocks",
                                                        plural: !0,
                                                        selections: [
                                                            (w = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            { kind: "TypeDiscriminator", abstractKey: "__isPremiumHubConfigBlock" },
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    x,
                                                                    (B = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "button",
                                                                        plural: !1,
                                                                        selections: [
                                                                            w,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "button_text", storageKey: null },
                                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(v = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], storageKey: null },
                                                                                ],
                                                                                type: "TimelineTextCtaButton",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    { alias: null, args: null, concreteType: "PremiumHubConfigTextLink", kind: "LinkedField", name: "text_link", plural: !1, selections: [(R = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }), v], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "card_block_type", storageKey: null },
                                                                    (I = { alias: null, args: null, kind: "ScalarField", name: "heading", storageKey: null }),
                                                                    { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                                                                ],
                                                                type: "PremiumHubConfigCardBlock",
                                                                abstractKey: null,
                                                            },
                                                            { kind: "InlineFragment", selections: [x, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, I, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [R, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, v], type: "PremiumHubConfigLinkBlock", abstractKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "PremiumHubConfigHeading", kind: "LinkedField", name: "heading", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }, B], storageKey: null },
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
            q.hash = "af1bf05e9a6a9c643edfc3d0ab1e0895";
            const W = q;
            var V = {
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
            const G = V;
            var $ = (function () {
                var e = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    l = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
                    a = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null },
                    t = { alias: null, args: null, kind: "ScalarField", name: "heading", storageKey: null };
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
                                { alias: null, args: null, concreteType: "PremiumHubConfigTextLink", kind: "LinkedField", name: "text_link", plural: !1, selections: [a, n], storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "card_block_type", storageKey: null },
                                t,
                                { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                            ],
                            type: "PremiumHubConfigCardBlock",
                            abstractKey: null,
                        },
                        { kind: "InlineFragment", selections: [e, l, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, t, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [a, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, n], type: "PremiumHubConfigLinkBlock", abstractKey: null },
                    ],
                    type: "PremiumHubConfigBlock",
                    abstractKey: "__isPremiumHubConfigBlock",
                };
            })();
            $.hash = "ffc77d5aea0ab2b78d44fe861caba669";
            const j = $;
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
                ee = j,
                le = G,
                ne = W;
            var ae = n(530525),
                te = n(439592);
            const re = ({ buttonText: e, heading: l, imageUrl: n, isPrimarySection: t, subheading: r, textLink: i, type: s, url: u }) => {
                    const o = (0, O.z)();
                    return a.createElement(
                        m.Z,
                        { style: se.cardBlock },
                        n ? a.createElement(m.Z, { style: se.image }, a.createElement(ae.Z, { "aria-label": "todo", aspectMode: te.Z.COVER, image: { url: n, height: 124, width: 343 } })) : null,
                        a.createElement(
                            m.Z,
                            { style: se.inner },
                            a.createElement(g.ZP, { size: "title4", style: se.heading, weight: "heavy" }, l),
                            a.createElement(g.ZP, { color: "gray700", style: se.subheading }, r),
                            i ? a.createElement(g.ZP, { link: i.url, style: se.textLink }, i.text) : null,
                            u
                                ? a.createElement(
                                      b.ZP,
                                      {
                                          allowTextWrap: !0,
                                          link: { pathname: u, state: { referring_page: "hub" } },
                                          onClick: () => {
                                              o.scribeAction("click");
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
                ie = a.memo(re),
                se = h.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16 }, button: { alignSelf: "flex-start", paddingHorizontal: 0 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, textLink: { marginBottom: e.spaces.space16 }, image: { height: "127px" } }));
            var ue = n(868634),
                oe = n(530732),
                ce = n(909377),
                de = n(58399),
                me = n(498514),
                ge = n(693510);
            const ye = { Warning: "orange50", Info: "blue500" },
                pe = ({ blockKey: e, color: l, heading: n, icon: t, isFirst: r, isLast: i, isPrimarySection: s, pill: u, subtext: o, type: c, url: d }) => {
                    const y = (0, O.z)(),
                        {
                            id: p,
                            link: k,
                            onClick: b,
                        } = (function ({ blockKey: e, url: l }) {
                            const { hasVerifiedOrgFeature: n } = (0, ge.ZP)(),
                                a = n("BusinessPreapprovalAdminPortalAccess");
                            return (0, F.hC)("responsive_web_verified_organizations_intercom_enabled") && !a && "verified_orgs_support_link" === e ? { link: void 0, id: "intercom_launcher" } : { link: l, onClick: void 0 };
                        })({ blockKey: e, url: d }),
                        f = "Primary" === c,
                        S = [];
                    r && S.push(be.isFirst), i && S.push(be.isLast);
                    const _ = f || (!s && !f),
                        P = { backgroundColor: l ? h.default.theme.colors[l] : null },
                        E = a.useMemo(() => (u ? a.createElement(ue.ZP, { background: ye[u.pill_type] }, u.text) : null), [u]);
                    return a.createElement(
                        oe.Z,
                        {
                            id: p,
                            link: k,
                            onClick: () => {
                                y.scribeAction("click"), b && b();
                            },
                            style: [be.linkBlock, _ ? [be.backgroundGray, S] : null],
                        },
                        a.createElement(m.Z, { style: [be.inner, !i && _ ? be.divider : null] }, t ? a.createElement(ce.Z, { Icon: (0, me.U)(t), shape: "square", size: "large", style: P }) : null, a.createElement(g.ZP, { style: be.heading }, n), a.createElement(m.Z, { style: be.rightContent }, o ? a.createElement(g.ZP, { color: "gray700" }, o) : null, E, a.createElement(de.default, { style: be.chevron }))),
                    );
                },
                ke = a.memo(pe),
                be = h.default.create((e) => ({ linkBlock: { cursor: "pointer" }, backgroundGray: { backgroundColor: e.colors.gray0 }, inner: { paddingVertical: e.spaces.space8, marginHorizontal: e.spaces.space12, alignItems: "center", flexDirection: "row", minHeight: e.spaces.space48 }, divider: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.gray100 }, heading: { marginHorizontal: e.spaces.space12 }, isFirst: { borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium }, isLast: { borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium }, chevron: { color: e.colors.gray700, marginStart: e.spaces.space8 }, rightContent: { position: "absolute", end: 0, flexDirection: "row", alignItems: "center" } })),
                fe = ({ blockRef: e, isFirst: l, isLast: n, isPrimarySection: t }) => {
                    const r = U()(ee, e);
                    return a.createElement(c.nO, { namespace: { component: r.key } }, "PremiumHubConfigLinkBlock" === r.__typename ? a.createElement(ke, { blockKey: r.key, color: r.color, heading: r.heading, icon: r.icon, isFirst: l, isLast: n, isPrimarySection: t, pill: r.pill, subtext: r.subtext, type: r.link_block_type, url: r.url }) : "PremiumHubConfigCardBlock" === r.__typename ? a.createElement(ie, { buttonText: r.button?.button_text, heading: r.heading, imageUrl: r.image_url, isPrimarySection: t, subheading: r.subheading, textLink: r.text_link, type: r.card_block_type, url: r?.button?.url?.url }) : null);
                },
                he = a.memo(fe),
                Fe = ({ headingRef: e }) => {
                    const l = U()(Y, e);
                    return a.createElement(m.Z, { style: _e.heading }, a.createElement(g.ZP, { size: "headline2", weight: "heavy" }, l.title), l.button ? a.createElement(b.ZP, { link: l.button?.url?.url, size: "xSmall", type: "primaryFilled" }, l.button?.button_text) : null);
                },
                Se = a.memo(Fe),
                _e = h.default.create((e) => ({ heading: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" } })),
                Pe = ({ isFirst: e, isLast: l, isPrimarySection: n, sectionRef: t }) => {
                    const r = U()(le, t);
                    if (0 === r.blocks.length) return null;
                    const i = r.heading ? a.createElement(Se, { headingRef: r.heading }) : null,
                        s = r?.blocks.map((e, l, t) => {
                            const r = 0 === l,
                                i = l === t.length - 1;
                            return a.createElement(he, { blockRef: e, isFirst: r, isLast: i, isPrimarySection: n, key: `block-${l}` });
                        }),
                        u = [];
                    return e && u.push(Ke.isFirst), e || u.push(Ke.isNotFirst), l && u.push(Ke.isLast), a.createElement(m.Z, { style: u }, i, s);
                },
                Ee = a.memo(Pe),
                Ke = h.default.create((e) => ({ isNotFirst: { marginTop: e.spaces.space16 }, isFirst: { marginTop: e.spaces.space8 }, isLast: { marginBottom: e.spaces.space64 } }));
            var Ce = n(664064);
            const Te = () => (!(0, t.useLocation)().state && document.referrer.includes("premium_signup_nux_flow") ? a.createElement(m.Z, { style: He.confetti }, a.createElement(Ce.Z, { autoplay: !0, count: 40, duration: 4e3, image_url: "light" === h.default.theme.paletteName ? "https://abs.twimg.com/responsive-web/client-web/X_logo_black.00ba8bfa.png" : "https://abs.twimg.com/responsive-web/client-web/X_logo_white.22c1baea.png", type: "image" })) : null),
                He = h.default.create((e) => ({ confetti: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0, zIndex: 3 } })),
                Le = s().f75d1806,
                xe = s().bb081ea2,
                Ze = ({ data: e }) => {
                    const l = (0, t.useHistory)(),
                        n = (0, O.z)(),
                        r = (0, z.Zx)(({ containerWidth: e }) => M.Z.isTwoColumnLayout(e));
                    a.useEffect(() => {
                        n.scribeAction("impression");
                    }, [n]);
                    const i = e?.premium_hub_config?.content,
                        s = e?.premium_hub_config?.content.secondary?.map((e) => e.key),
                        u = a.createElement(
                            m.Z,
                            { style: ve.primaryContent },
                            i?.primary
                                ?.filter((e) => !r || !s?.includes(e.key))
                                .map((e, l, n) => {
                                    const t = 0 === l,
                                        r = l === n.length - 1;
                                    return a.createElement(c.nO, { key: `primary-section-${l}`, namespace: { section: e.key } }, a.createElement(Ee, { isFirst: t, isLast: r, isPrimarySection: !0, sectionRef: e }));
                                }),
                        ),
                        o = a.createElement(
                            m.Z,
                            { style: ve.secondaryContent },
                            i?.secondary?.map((e, l, n) => {
                                const t = 0 === l,
                                    r = l === n.length - 1;
                                return a.createElement(c.nO, { key: `secondary-section-${l}`, namespace: { section: e.key } }, a.createElement(Ee, { isFirst: t, isLast: r, isPrimarySection: !1, sectionRef: e }));
                            }),
                        ),
                        d = a.createElement(b.ZP, { "aria-label": xe, icon: a.createElement(A.default, null), link: "/settings/premium", type: "primaryText" });
                    return a.createElement(a.Fragment, null, a.createElement(Q.Z, { headerless: !1, history: l, primaryContent: u, rightControl: d, sidebarContent: o, title: Le }), a.createElement(Te, null));
                },
                we = a.memo(Ze),
                ve = h.default.create((e) => ({ primaryContent: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space24 }, secondaryContent: { paddingTop: e.spaces.space32 } })),
                Be = s().a0b4541c,
                Re = (0, o.z)(ne, { errorConfig: { context: "PREMIUM_HUB_SCREEN" } }),
                Ie = () => {
                    const { userClaims: e } = (0, u.QZ)(),
                        l = (0, t.useLocation)(),
                        n = l.state?.tierSwitchTarget,
                        i = l.state?.tierSwitchType;
                    return n || !e.isAnyPremiumSubscriber() ? a.createElement(H, { tierSwitchTarget: n, tierSwitchType: i }) : a.createElement(c.nO, { namespace: { page: "premium_hub" } }, a.createElement(Re, { render: ({ data: e, fetchStatus: l, retry: n }) => (l === o.i.FAILED ? a.createElement(r.Z, { onRequestRetry: n, retryMessage: Be }) : l === o.i.LOADED ? (e ? a.createElement(we, { data: e }) : a.createElement(d.Z, { to: "/home" })) : null), variables: {} }));
                },
                De = a.memo(Ie);
        },
        498514: (e, l, n) => {
            n.d(l, { U: () => T });
            n(202784);
            var a = n(521058),
                t = n(847988),
                r = n(616894),
                i = n(376021),
                s = n(625823),
                u = n(839),
                o = n(266151),
                c = n(468670),
                d = n(913973),
                m = n(1753),
                g = n(748138),
                y = n(53674),
                p = n(164174),
                k = n(926981),
                b = n(642317),
                f = n(28862),
                h = n(376278),
                F = n(511323),
                S = n(254944),
                _ = n(465072),
                P = n(189700),
                E = n(520489),
                K = n(297938),
                C = n(457566);
            const T = (e) => {
                switch (e) {
                    case "Fire":
                        return a.default;
                    case "BookStrokeOn":
                        return t.default;
                    case "No":
                        return r.default;
                    case "WriteStroke":
                        return i.default;
                    case "AccountNft":
                        return s.default;
                    case "CameraVideoStroke":
                        return u.default;
                    case "Feather":
                        return o.default;
                    case "LockStroke":
                        return c.default;
                    case "Checkmark":
                        return d.default;
                    case "NotesStroke":
                        return m.default;
                    case "Grok":
                        return C.x1;
                    case "MoneyStroke":
                        return g.default;
                    case "BarChart":
                        return y.default;
                    case "DeckStroke":
                        return p.default;
                    case "Film":
                        return k.default;
                    case "RocketStroke":
                        return b.default;
                    case "BookmarkCollectionsStroke":
                        return f.default;
                    case "FireStroke":
                        return h.default;
                    case "PersonStroke":
                        return F.default;
                    case "PaintbrushStroke":
                        return S.default;
                    case "ModeratorStroke":
                        return _.default;
                    case "Document":
                        return P.default;
                    case "RadarStroke":
                        return E.default;
                    case "SearchPersonStroke":
                        return K.default;
                    default:
                        return () => null;
                }
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumHub.10519b2a.js.map
