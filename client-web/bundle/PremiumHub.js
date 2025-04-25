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
            n.r(l), n.d(l, { default: () => Ie });
            var a = n(202784),
                t = n(107267),
                r = n(750410),
                i = n(674132),
                s = n.n(i),
                u = n(443781),
                o = n(301410),
                c = n(337394),
                d = n(293115),
                m = n(615027),
                g = (n(136728), n(325686)),
                y = n(731708),
                p = n(167630),
                k = n(40610),
                b = n(688715),
                f = n(529356),
                h = n(392237),
                F = n(125363),
                S = n(215929);
            const _ = s().d7eebb60,
                P = s().a452ab68,
                K = s().g61ed8a4,
                E = ({ tierSwitchTarget: e, tierSwitchType: l }) => {
                    const { userClaims: n } = (0, u.QZ)(),
                        [r, i] = a.useState("loading"),
                        o = (0, F.I0)(),
                        c = (0, t.useHistory)();
                    a.useEffect(() => {
                        const a = "downgrade" === l;
                        let t = 0;
                        const r = setInterval(() => {
                            !!a || (e ? n.hasSubscription(e) : n.isAnyPremiumSubscriber()) ? (i("loaded"), clearInterval(r), c.replace({ pathname: c.location.pathname }, null), c.go(0)) : t >= 10 ? (i("failed"), clearInterval(r)) : ((t += 1), o((0, S.rS)({})));
                        }, 1e3);
                        return () => {
                            clearInterval(r);
                        };
                    }, [e, n, o, c, l]);
                    const d = a.useMemo(() => ("loading" === r ? a.createElement(g.Z, { style: C.fullWidth }, a.createElement(y.ZP, null, P), a.createElement(p.Z, { style: C.marginTop })) : "failed" === r ? a.createElement(g.Z, { style: [C.marginTop, C.fullWidth] }, a.createElement(k.Z.Danger, { headline: K, text: a.createElement(s().I18NFormatMessage, { $i18n: "b88304a3" }, a.createElement(y.ZP, { link: (0, b.ju)("https://x.com/premium") }, s().b3bad3b2)) })) : null), [r]);
                    return a.createElement(f.Z, { graphicDisplayMode: "none", headline: _, onAction: () => {}, onClose: () => c.push("/home"), subtext: d });
                },
                C = h.default.create((e) => ({ marginTop: { marginTop: e.spaces.space24 }, fullWidth: { width: "100%" } }));
            var T,
                L,
                H,
                x,
                Z,
                w,
                v,
                B,
                R = n(537392),
                I = n(154003),
                D = n(698891),
                z = n(252021),
                A = n(10656),
                M = n(725516),
                Q = n(277660),
                O = n.n(Q),
                N = {
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
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "primary", plural: !0, selections: (L = [(T = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumHubQuery_section" }]), storageKey: null },
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "secondary", plural: !0, selections: L, storageKey: null },
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
                                                selections: (B = [
                                                    T,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "blocks",
                                                        plural: !0,
                                                        selections: [
                                                            (H = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            { kind: "TypeDiscriminator", abstractKey: "__isPremiumHubConfigBlock" },
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    T,
                                                                    (Z = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "button",
                                                                        plural: !1,
                                                                        selections: [
                                                                            H,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "button_text", storageKey: null },
                                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(x = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], storageKey: null },
                                                                                ],
                                                                                type: "TimelineTextCtaButton",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    { alias: null, args: null, concreteType: "PremiumHubConfigTextLink", kind: "LinkedField", name: "text_link", plural: !1, selections: [(w = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }), x], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "card_block_type", storageKey: null },
                                                                    (v = { alias: null, args: null, kind: "ScalarField", name: "heading", storageKey: null }),
                                                                    { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                                                                ],
                                                                type: "PremiumHubConfigCardBlock",
                                                                abstractKey: null,
                                                            },
                                                            { kind: "InlineFragment", selections: [T, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, v, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [w, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, x], type: "PremiumHubConfigLinkBlock", abstractKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "PremiumHubConfigHeading", kind: "LinkedField", name: "heading", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }, Z], storageKey: null },
                                                ]),
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "secondary", plural: !0, selections: B, storageKey: null },
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
            N.hash = "af1bf05e9a6a9c643edfc3d0ab1e0895";
            const U = N;
            var W = {
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
            const q = W;
            var V = (function () {
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
            V.hash = "ffc77d5aea0ab2b78d44fe861caba669";
            const G = V;
            var $ = {
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
            const j = $;
            n(585488);
            const X = j,
                J = G,
                Y = q,
                ee = U;
            var le = n(530525),
                ne = n(439592);
            const ae = ({ buttonText: e, heading: l, imageUrl: n, isPrimarySection: t, subheading: r, textLink: i, type: s, url: u }) => {
                    const o = (0, M.z)();
                    return a.createElement(
                        g.Z,
                        { style: re.cardBlock },
                        n ? a.createElement(g.Z, { style: re.image }, a.createElement(le.Z, { "aria-label": "todo", aspectMode: ne.Z.COVER, image: { url: n, height: 124, width: 343 } })) : null,
                        a.createElement(
                            g.Z,
                            { style: re.inner },
                            a.createElement(y.ZP, { size: "title4", style: re.heading, weight: "heavy" }, l),
                            a.createElement(y.ZP, { color: "gray700", style: re.subheading }, r),
                            i ? a.createElement(y.ZP, { link: i.url, style: re.textLink }, i.text) : null,
                            u
                                ? a.createElement(
                                      I.ZP,
                                      {
                                          allowTextWrap: !0,
                                          link: { pathname: u, state: { referring_page: "hub" } },
                                          onClick: () => {
                                              o.scribeAction("click");
                                          },
                                          style: re.button,
                                          type: "primaryFilled",
                                      },
                                      e,
                                  )
                                : null,
                        ),
                    );
                },
                te = a.memo(ae),
                re = h.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16 }, button: { alignSelf: "flex-start", paddingHorizontal: 0 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, textLink: { marginBottom: e.spaces.space16 }, image: { height: "127px" } }));
            var ie = n(868634),
                se = n(530732),
                ue = n(909377),
                oe = n(58399),
                ce = n(498514),
                de = n(952793),
                me = n(693510);
            const ge = { Warning: "orange50", Info: "blue500" },
                ye = ({ blockKey: e, color: l, heading: n, icon: t, isFirst: r, isLast: i, isPrimarySection: s, pill: u, subtext: o, type: c, url: d }) => {
                    const m = (0, M.z)(),
                        {
                            id: p,
                            link: k,
                            onClick: b,
                        } = (function ({ blockKey: e, url: l }) {
                            const { hasVerifiedOrgFeature: n } = (0, me.ZP)(),
                                a = n("BusinessPreapprovalAdminPortalAccess");
                            return (0, de.hC)("responsive_web_verified_organizations_intercom_enabled") && !a && "verified_orgs_support_link" === e ? { link: void 0, id: "intercom_launcher" } : { link: l, onClick: void 0 };
                        })({ blockKey: e, url: d }),
                        f = "Primary" === c,
                        F = [];
                    r && F.push(ke.isFirst), i && F.push(ke.isLast);
                    const S = f || (!s && !f),
                        _ = { backgroundColor: l ? h.default.theme.colors[l] : null },
                        P = a.useMemo(() => (u ? a.createElement(ie.ZP, { background: ge[u.pill_type] }, u.text) : null), [u]);
                    return a.createElement(
                        se.Z,
                        {
                            id: p,
                            link: k,
                            onClick: () => {
                                m.scribeAction("click"), b && b();
                            },
                            style: [ke.linkBlock, S ? [ke.backgroundGray, F] : null],
                        },
                        a.createElement(g.Z, { style: [ke.inner, !i && S ? ke.divider : null] }, t ? a.createElement(ue.Z, { Icon: (0, ce.U)(t), shape: "square", size: "large", style: _ }) : null, a.createElement(y.ZP, { style: ke.heading }, n), a.createElement(g.Z, { style: ke.rightContent }, o ? a.createElement(y.ZP, { color: "gray700" }, o) : null, P, a.createElement(oe.default, { style: ke.chevron }))),
                    );
                },
                pe = a.memo(ye),
                ke = h.default.create((e) => ({ linkBlock: { cursor: "pointer" }, backgroundGray: { backgroundColor: e.colors.gray0 }, inner: { paddingVertical: e.spaces.space8, marginHorizontal: e.spaces.space12, alignItems: "center", flexDirection: "row", minHeight: e.spaces.space48 }, divider: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.gray100 }, heading: { marginHorizontal: e.spaces.space12 }, isFirst: { borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium }, isLast: { borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium }, chevron: { color: e.colors.gray700, marginStart: e.spaces.space8 }, rightContent: { position: "absolute", end: 0, flexDirection: "row", alignItems: "center" } })),
                be = ({ blockRef: e, isFirst: l, isLast: n, isPrimarySection: t }) => {
                    const r = O()(J, e);
                    return a.createElement(d.nO, { namespace: { component: r.key } }, "PremiumHubConfigLinkBlock" === r.__typename ? a.createElement(pe, { blockKey: r.key, color: r.color, heading: r.heading, icon: r.icon, isFirst: l, isLast: n, isPrimarySection: t, pill: r.pill, subtext: r.subtext, type: r.link_block_type, url: r.url }) : "PremiumHubConfigCardBlock" === r.__typename ? a.createElement(te, { buttonText: r.button?.button_text, heading: r.heading, imageUrl: r.image_url, isPrimarySection: t, subheading: r.subheading, textLink: r.text_link, type: r.card_block_type, url: r?.button?.url?.url }) : null);
                },
                fe = a.memo(be),
                he = ({ headingRef: e }) => {
                    const l = O()(X, e);
                    return a.createElement(g.Z, { style: Se.heading }, a.createElement(y.ZP, { size: "headline2", weight: "heavy" }, l.title), l.button ? a.createElement(I.ZP, { link: l.button?.url?.url, size: "xSmall", type: "primaryFilled" }, l.button?.button_text) : null);
                },
                Fe = a.memo(he),
                Se = h.default.create((e) => ({ heading: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" } })),
                _e = ({ isFirst: e, isLast: l, isPrimarySection: n, sectionRef: t }) => {
                    const r = O()(Y, t);
                    if (0 === r.blocks.length) return null;
                    const i = r.heading ? a.createElement(Fe, { headingRef: r.heading }) : null,
                        s = r?.blocks.map((e, l, t) => {
                            const r = 0 === l,
                                i = l === t.length - 1;
                            return a.createElement(fe, { blockRef: e, isFirst: r, isLast: i, isPrimarySection: n, key: `block-${l}` });
                        }),
                        u = [];
                    return e && u.push(Ke.isFirst), e || u.push(Ke.isNotFirst), l && u.push(Ke.isLast), a.createElement(g.Z, { style: u }, i, s);
                },
                Pe = a.memo(_e),
                Ke = h.default.create((e) => ({ isNotFirst: { marginTop: e.spaces.space16 }, isFirst: { marginTop: e.spaces.space8 }, isLast: { marginBottom: e.spaces.space64 } }));
            var Ee = n(664064);
            const Ce = () => (!(0, t.useLocation)().state && document.referrer.includes("premium_signup_nux_flow") ? a.createElement(g.Z, { style: Te.confetti }, a.createElement(Ee.Z, { autoplay: !0, count: 40, duration: 4e3, image_url: "light" === h.default.theme.paletteName ? "https://abs.twimg.com/responsive-web/client-web/X_logo_black.00ba8bfa.png" : "https://abs.twimg.com/responsive-web/client-web/X_logo_white.22c1baea.png", type: "image" })) : null),
                Te = h.default.create((e) => ({ confetti: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0, zIndex: 3 } })),
                Le = s().f75d1806,
                He = s().bb081ea2,
                xe = ({ data: e }) => {
                    const l = (0, t.useHistory)(),
                        n = (0, M.z)(),
                        r = (0, R.Zx)(({ containerWidth: e }) => A.Z.isTwoColumnLayout(e));
                    a.useEffect(() => {
                        n.scribeAction("impression");
                    }, [n]);
                    const i = e?.premium_hub_config?.content,
                        s = e?.premium_hub_config?.content.secondary?.map((e) => e.key),
                        u = a.createElement(
                            g.Z,
                            { style: we.primaryContent },
                            i?.primary
                                ?.filter((e) => !r || !s?.includes(e.key))
                                .map((e, l, n) => {
                                    const t = 0 === l,
                                        r = l === n.length - 1;
                                    return a.createElement(d.nO, { key: `primary-section-${l}`, namespace: { section: e.key } }, a.createElement(Pe, { isFirst: t, isLast: r, isPrimarySection: !0, sectionRef: e }));
                                }),
                        ),
                        o = a.createElement(
                            g.Z,
                            { style: we.secondaryContent },
                            i?.secondary?.map((e, l, n) => {
                                const t = 0 === l,
                                    r = l === n.length - 1;
                                return a.createElement(d.nO, { key: `secondary-section-${l}`, namespace: { section: e.key } }, a.createElement(Pe, { isFirst: t, isLast: r, isPrimarySection: !1, sectionRef: e }));
                            }),
                        ),
                        c = a.createElement(I.ZP, { "aria-label": He, icon: a.createElement(D.default, null), link: "/settings/premium", type: "primaryText" });
                    return a.createElement(a.Fragment, null, a.createElement(z.Z, { headerless: !1, history: l, primaryContent: u, rightControl: c, sidebarContent: o, title: Le }), a.createElement(Ce, null));
                },
                Ze = a.memo(xe),
                we = h.default.create((e) => ({ primaryContent: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space24 }, secondaryContent: { paddingTop: e.spaces.space32 } })),
                ve = s().a0b4541c,
                Be = (0, o.z)(ee, { errorConfig: { context: "PREMIUM_HUB_SCREEN" } }),
                Re = () => {
                    const { userClaims: e } = (0, u.QZ)(),
                        l = (0, t.useLocation)(),
                        n = a.useMemo(() => {
                            const e = l.state?.tierSwitchTarget;
                            return e ? c.MW[e] : null;
                        }, [l.state]),
                        i = l.state?.tierSwitchType;
                    return (n && !e.hasSubscription(n)) || !e.isAnyPremiumSubscriber() ? a.createElement(E, { tierSwitchTarget: n, tierSwitchType: i }) : a.createElement(d.nO, { namespace: { page: "premium_hub" } }, a.createElement(Be, { render: ({ data: e, fetchStatus: l, retry: n }) => (l === o.i.FAILED ? a.createElement(r.Z, { onRequestRetry: n, retryMessage: ve }) : l === o.i.LOADED ? (e ? a.createElement(Ze, { data: e }) : a.createElement(m.Z, { to: "/home" })) : null), variables: {} }));
                },
                Ie = a.memo(Re);
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
                K = n(520489),
                E = n(297938),
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
                        return K.default;
                    case "SearchPersonStroke":
                        return E.default;
                    default:
                        return () => null;
                }
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumHub.cb76e6fa.js.map
