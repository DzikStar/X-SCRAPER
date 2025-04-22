"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumHub"],
    {
        301410: (e, n, l) => {
            l.d(n, { i: () => y.ZP, z: () => b });
            var a = l(202784),
                t = l(928123),
                r = l.n(t),
                i = l(72845),
                s = l.n(i),
                u = l(57074),
                o = l.n(u),
                c = l(516951),
                d = l(88656),
                m = l(71620),
                g = l(163889),
                y = l(312771);
            const p = ({ render: e }) => e({ fetchStatus: y.ZP.LOADING, data: null, error: null, retry: c.Z });
            class k extends a.Component {
                constructor(...e) {
                    super(...e), (this.state = { error: null });
                }
                static getDerivedStateFromError(e) {
                    return { error: e };
                }
                componentDidCatch(e, n) {
                    if (!(e instanceof d.Z)) throw e;
                    this.props.errorHandler(e), (0, g.Hj)(e, { level: "warning", tags: { userVisible: !0 } });
                }
                render() {
                    return this.props.children(this.state.error, this.props.retry);
                }
            }
            const f = ({ query: e, queryRef: n, render: l }) => {
                    const a = r()(e, n);
                    return l({ fetchStatus: y.ZP.LOADED, data: a, error: null, retry: c.Z });
                },
                b = (e, n) =>
                    function ({ fetchPolicy: l = "store-or-network", render: t, variables: r }) {
                        const [i, u] = s()(e),
                            c = (0, m.n7)(n.errorConfig.context),
                            d = o()(r),
                            g = a.useCallback(() => {
                                u(d, { fetchPolicy: "network-only" });
                            }, [u, d]);
                        return (
                            a.useLayoutEffect(() => {
                                u(d, { fetchPolicy: l });
                            }, [l, u, d]),
                            i
                                ? a.createElement(
                                      a.Suspense,
                                      { fallback: a.createElement(p, { render: t }) },
                                      a.createElement(k, { errorHandler: c(n.errorConfig.options || {}), key: i.fetchKey, retry: g }, (n, l) => (n ? t({ fetchStatus: y.ZP.FAILED, error: n, data: null, retry: l }) : a.createElement(f, { query: e, queryRef: i, render: t }))),
                                  )
                                : null
                        );
                    };
        },
        99065: (e, n, l) => {
            l.r(n), l.d(n, { default: () => Qe });
            var a = l(202784),
                t = l(107267),
                r = l(750410),
                i = l(674132),
                s = l.n(i),
                u = l(443781),
                o = l(301410),
                c = l(337394),
                d = l(293115),
                m = l(615027),
                g = (l(136728), l(325686)),
                y = l(731708),
                p = l(167630),
                k = l(40610),
                f = l(688715),
                b = l(529356),
                h = l(392237),
                S = l(125363),
                F = l(215929);
            const P = s().d7eebb60,
                _ = s().a452ab68,
                C = s().g61ed8a4,
                E = ({ tierSwitchTarget: e, tierSwitchType: n }) => {
                    const { userClaims: l } = (0, u.QZ)(),
                        [r, i] = a.useState("loading"),
                        o = (0, S.I0)(),
                        c = (0, t.useHistory)();
                    a.useEffect(() => {
                        const a = "downgrade" === n;
                        let t = 0;
                        const r = setInterval(() => {
                            !!a || (e ? l.hasSubscription(e) : l.isAnyPremiumSubscriber()) ? (i("loaded"), clearInterval(r), c.replace({ pathname: c.location.pathname }, null), c.go(0)) : t >= 10 ? (i("failed"), clearInterval(r)) : ((t += 1), o((0, F.rS)({})));
                        }, 1e3);
                        return () => {
                            clearInterval(r);
                        };
                    }, [e, l, o, c, n]);
                    const d = a.useMemo(() => ("loading" === r ? a.createElement(g.Z, { style: K.fullWidth }, a.createElement(y.ZP, null, _), a.createElement(p.Z, { style: K.marginTop })) : "failed" === r ? a.createElement(g.Z, { style: [K.marginTop, K.fullWidth] }, a.createElement(k.Z.Danger, { headline: C, text: a.createElement(s().I18NFormatMessage, { $i18n: "b88304a3" }, a.createElement(y.ZP, { link: (0, f.ju)("https://x.com/premium") }, s().b3bad3b2)) })) : null), [r]);
                    return a.createElement(b.Z, { graphicDisplayMode: "none", headline: P, onAction: () => {}, onClose: () => c.push("/home"), subtext: d });
                },
                K = h.default.create((e) => ({ marginTop: { marginTop: e.spaces.space24 }, fullWidth: { width: "100%" } }));
            var v,
                T,
                L,
                x,
                H,
                w,
                Z,
                R,
                B = l(537392),
                Q = l(154003),
                D = l(698891),
                I = l(252021),
                N = l(10656),
                A = l(725516),
                q = l(277660),
                z = l.n(q),
                O = {
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
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "primary", plural: !0, selections: (T = [(v = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumHubQuery_section" }]), storageKey: null },
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "secondary", plural: !0, selections: T, storageKey: null },
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
                                                selections: (R = [
                                                    v,
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
                                                                    v,
                                                                    (H = {
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
                                                                    (Z = { alias: null, args: null, kind: "ScalarField", name: "heading", storageKey: null }),
                                                                    { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                                                                ],
                                                                type: "PremiumHubConfigCardBlock",
                                                                abstractKey: null,
                                                            },
                                                            { kind: "InlineFragment", selections: [v, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, Z, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [w, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, x], type: "PremiumHubConfigLinkBlock", abstractKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "PremiumHubConfigHeading", kind: "LinkedField", name: "heading", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }, H], storageKey: null },
                                                ]),
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "secondary", plural: !0, selections: R, storageKey: null },
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
            O.hash = "af1bf05e9a6a9c643edfc3d0ab1e0895";
            const M = O;
            var U = {
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
            const W = U;
            var V = (function () {
                var e = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                    l = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
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
                                n,
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
                                                { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [l], storageKey: null },
                                            ],
                                            type: "TimelineTextCtaButton",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                { alias: null, args: null, concreteType: "PremiumHubConfigTextLink", kind: "LinkedField", name: "text_link", plural: !1, selections: [a, l], storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "card_block_type", storageKey: null },
                                t,
                                { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                            ],
                            type: "PremiumHubConfigCardBlock",
                            abstractKey: null,
                        },
                        { kind: "InlineFragment", selections: [e, n, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, t, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [a, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, l], type: "PremiumHubConfigLinkBlock", abstractKey: null },
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
            l(585488);
            const X = j,
                J = G,
                Y = W,
                ee = M;
            var ne = l(530525),
                le = l(439592);
            const ae = ({ buttonText: e, heading: n, imageUrl: l, isPrimarySection: t, subheading: r, textLink: i, type: s, url: u }) => {
                    const o = (0, A.z)();
                    return a.createElement(
                        g.Z,
                        { style: re.cardBlock },
                        l ? a.createElement(g.Z, { style: re.image }, a.createElement(ne.Z, { "aria-label": "todo", aspectMode: le.Z.COVER, image: { url: l, height: 124, width: 343 } })) : null,
                        a.createElement(
                            g.Z,
                            { style: re.inner },
                            a.createElement(y.ZP, { size: "title4", style: re.heading, weight: "heavy" }, n),
                            a.createElement(y.ZP, { color: "gray700", style: re.subheading }, r),
                            i ? a.createElement(y.ZP, { link: i.url, style: re.textLink }, i.text) : null,
                            u
                                ? a.createElement(
                                      Q.ZP,
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
            var ie = l(868634),
                se = l(530732),
                ue = l(909377),
                oe = l(58399),
                ce = l(498514),
                de = l(952793),
                me = l(693510);
            const ge = { Warning: "orange50", Info: "blue500" },
                ye = ({ blockKey: e, color: n, heading: l, icon: t, isFirst: r, isLast: i, isPrimarySection: s, pill: u, subtext: o, type: c, url: d }) => {
                    const m = (0, A.z)(),
                        {
                            id: p,
                            link: k,
                            onClick: f,
                        } = (function ({ blockKey: e, url: n }) {
                            const { hasVerifiedOrgFeature: l } = (0, me.ZP)(),
                                a = l("BusinessPreapprovalAdminPortalAccess");
                            return (0, de.hC)("responsive_web_verified_organizations_intercom_enabled") && !a && "verified_orgs_support_link" === e ? { link: void 0, id: "intercom_launcher" } : { link: n, onClick: void 0 };
                        })({ blockKey: e, url: d }),
                        b = "Primary" === c,
                        S = [];
                    r && S.push(ke.isFirst), i && S.push(ke.isLast);
                    const F = b || (!s && !b),
                        P = { backgroundColor: n ? h.default.theme.colors[n] : null },
                        _ = a.useMemo(() => (u ? a.createElement(ie.ZP, { background: ge[u.pill_type] }, u.text) : null), [u]);
                    return a.createElement(
                        se.Z,
                        {
                            id: p,
                            link: k,
                            onClick: () => {
                                m.scribeAction("click"), f && f();
                            },
                            style: [ke.linkBlock, F ? [ke.backgroundGray, S] : null],
                        },
                        a.createElement(g.Z, { style: [ke.inner, !i && F ? ke.divider : null] }, t ? a.createElement(ue.Z, { Icon: (0, ce.U)(t), shape: "square", size: "large", style: P }) : null, a.createElement(y.ZP, { style: ke.heading }, l), a.createElement(g.Z, { style: ke.rightContent }, o ? a.createElement(y.ZP, { color: "gray700" }, o) : null, _, a.createElement(oe.default, { style: ke.chevron }))),
                    );
                },
                pe = a.memo(ye),
                ke = h.default.create((e) => ({ linkBlock: { cursor: "pointer" }, backgroundGray: { backgroundColor: e.colors.gray0 }, inner: { paddingVertical: e.spaces.space8, marginHorizontal: e.spaces.space12, alignItems: "center", flexDirection: "row", minHeight: e.spaces.space48 }, divider: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.gray100 }, heading: { marginHorizontal: e.spaces.space12 }, isFirst: { borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium }, isLast: { borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium }, chevron: { color: e.colors.gray700, marginStart: e.spaces.space8 }, rightContent: { position: "absolute", end: 0, flexDirection: "row", alignItems: "center" } })),
                fe = ({ blockRef: e, isFirst: n, isLast: l, isPrimarySection: t }) => {
                    const r = z()(J, e);
                    return a.createElement(d.nO, { namespace: { component: r.key } }, "PremiumHubConfigLinkBlock" === r.__typename ? a.createElement(pe, { blockKey: r.key, color: r.color, heading: r.heading, icon: r.icon, isFirst: n, isLast: l, isPrimarySection: t, pill: r.pill, subtext: r.subtext, type: r.link_block_type, url: r.url }) : "PremiumHubConfigCardBlock" === r.__typename ? a.createElement(te, { buttonText: r.button?.button_text, heading: r.heading, imageUrl: r.image_url, isPrimarySection: t, subheading: r.subheading, textLink: r.text_link, type: r.card_block_type, url: r?.button?.url?.url }) : null);
                },
                be = a.memo(fe),
                he = ({ headingRef: e }) => {
                    const n = z()(X, e);
                    return a.createElement(g.Z, { style: Fe.heading }, a.createElement(y.ZP, { size: "headline2", weight: "heavy" }, n.title), n.button ? a.createElement(Q.ZP, { link: n.button?.url?.url, size: "xSmall", type: "primaryFilled" }, n.button?.button_text) : null);
                },
                Se = a.memo(he),
                Fe = h.default.create((e) => ({ heading: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" } })),
                Pe = ({ isFirst: e, isLast: n, isPrimarySection: l, sectionRef: t }) => {
                    const r = z()(Y, t);
                    if (0 === r.blocks.length) return null;
                    const i = r.heading ? a.createElement(Se, { headingRef: r.heading }) : null,
                        s = r?.blocks.map((e, n, t) => {
                            const r = 0 === n,
                                i = n === t.length - 1;
                            return a.createElement(be, { blockRef: e, isFirst: r, isLast: i, isPrimarySection: l, key: `block-${n}` });
                        }),
                        u = [];
                    return e && u.push(Ce.isFirst), e || u.push(Ce.isNotFirst), n && u.push(Ce.isLast), a.createElement(g.Z, { style: u }, i, s);
                },
                _e = a.memo(Pe),
                Ce = h.default.create((e) => ({ isNotFirst: { marginTop: e.spaces.space16 }, isFirst: { marginTop: e.spaces.space8 }, isLast: { marginBottom: e.spaces.space64 } }));
            var Ee = l(664064);
            const Ke = () => (!(0, t.useLocation)().state && document.referrer.includes("premium_signup_nux_flow") ? a.createElement(g.Z, { style: ve.confetti }, a.createElement(Ee.Z, { autoplay: !0, count: 40, duration: 4e3, image_url: "light" === h.default.theme.paletteName ? "https://abs.twimg.com/responsive-web/client-web/X_logo_black.00ba8bfa.png" : "https://abs.twimg.com/responsive-web/client-web/X_logo_white.22c1baea.png", type: "image" })) : null),
                ve = h.default.create((e) => ({ confetti: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0, zIndex: 3 } })),
                Te = s().f75d1806,
                Le = s().bb081ea2,
                xe = ({ data: e }) => {
                    const n = (0, t.useHistory)(),
                        l = (0, A.z)(),
                        r = (0, B.Zx)(({ containerWidth: e }) => N.Z.isTwoColumnLayout(e));
                    a.useEffect(() => {
                        l.scribeAction("impression");
                    }, [l]);
                    const i = e?.premium_hub_config?.content,
                        s = e?.premium_hub_config?.content.secondary?.map((e) => e.key),
                        u = a.createElement(
                            g.Z,
                            { style: we.primaryContent },
                            i?.primary
                                ?.filter((e) => !r || !s?.includes(e.key))
                                .map((e, n, l) => {
                                    const t = 0 === n,
                                        r = n === l.length - 1;
                                    return a.createElement(d.nO, { key: `primary-section-${n}`, namespace: { section: e.key } }, a.createElement(_e, { isFirst: t, isLast: r, isPrimarySection: !0, sectionRef: e }));
                                }),
                        ),
                        o = a.createElement(
                            g.Z,
                            { style: we.secondaryContent },
                            i?.secondary?.map((e, n, l) => {
                                const t = 0 === n,
                                    r = n === l.length - 1;
                                return a.createElement(d.nO, { key: `secondary-section-${n}`, namespace: { section: e.key } }, a.createElement(_e, { isFirst: t, isLast: r, isPrimarySection: !1, sectionRef: e }));
                            }),
                        ),
                        c = a.createElement(Q.ZP, { "aria-label": Le, icon: a.createElement(D.default, null), link: "/settings/premium", type: "primaryText" });
                    return a.createElement(a.Fragment, null, a.createElement(I.Z, { headerless: !1, history: n, primaryContent: u, rightControl: c, sidebarContent: o, title: Te }), a.createElement(Ke, null));
                },
                He = a.memo(xe),
                we = h.default.create((e) => ({ primaryContent: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space24 }, secondaryContent: { paddingTop: e.spaces.space32 } })),
                Ze = s().a0b4541c,
                Re = (0, o.z)(ee, { errorConfig: { context: "PREMIUM_HUB_SCREEN" } }),
                Be = () => {
                    const { userClaims: e } = (0, u.QZ)(),
                        n = (0, t.useLocation)(),
                        l = a.useMemo(() => {
                            const e = n.state?.tierSwitchTarget;
                            return e ? c.MW[e] : null;
                        }, [n.state]),
                        i = n.state?.tierSwitchType;
                    return (l && !e.hasSubscription(l)) || !e.isAnyPremiumSubscriber() ? a.createElement(E, { tierSwitchTarget: l, tierSwitchType: i }) : a.createElement(d.nO, { namespace: { page: "premium_hub" } }, a.createElement(Re, { render: ({ data: e, fetchStatus: n, retry: l }) => (n === o.i.FAILED ? a.createElement(r.Z, { onRequestRetry: l, retryMessage: Ze }) : n === o.i.LOADED ? (e ? a.createElement(He, { data: e }) : a.createElement(m.Z, { to: "/home" })) : null), variables: {} }));
                },
                Qe = a.memo(Be);
        },
        498514: (e, n, l) => {
            l.d(n, { U: () => v });
            l(202784);
            var a = l(521058),
                t = l(847988),
                r = l(616894),
                i = l(376021),
                s = l(625823),
                u = l(839),
                o = l(266151),
                c = l(468670),
                d = l(913973),
                m = l(1753),
                g = l(748138),
                y = l(53674),
                p = l(164174),
                k = l(926981),
                f = l(642317),
                b = l(28862),
                h = l(376278),
                S = l(511323),
                F = l(254944),
                P = l(465072),
                _ = l(189700),
                C = l(520489),
                E = l(297938),
                K = l(457566);
            const v = (e) => {
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
                        return f.default;
                    case "BookmarkCollectionsStroke":
                        return b.default;
                    case "FireStroke":
                        return h.default;
                    case "PersonStroke":
                        return S.default;
                    case "PaintbrushStroke":
                        return F.default;
                    case "ModeratorStroke":
                        return P.default;
                    case "Document":
                        return _.default;
                    case "RadarStroke":
                        return C.default;
                    case "SearchPersonStroke":
                        return E.default;
                    default:
                        return () => null;
                }
            };
        },
        928123: (e, n, l) => {
            var a = l(606161).useTrackLoadQueryInRender,
                t = l(138239),
                r = l(303566),
                i = l(437429),
                s = l(647677),
                u = (l(202784).useDebugValue, l(703383).__internal),
                o = u.fetchQueryDeduped,
                c = u.fetchQuery;
            l(826590);
            e.exports = function (e, n, l) {
                a();
                var u,
                    d = i(),
                    m = n.fetchKey,
                    g = n.fetchPolicy,
                    y = n.source,
                    p = n.variables,
                    k = n.networkCacheConfig,
                    f = r(e, p, k);
                if ("PreloadedQuery_DEPRECATED" === n.kind)
                    f.request.node.params.name !== n.name && s(!1),
                        (u = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: m,
                            fetchObservable: o(d, f.request.identifier, function () {
                                return d === n.environment && null != y ? d.executeWithSource({ operation: f, source: y }) : d.execute({ operation: f });
                            }),
                            fetchPolicy: g,
                            query: f,
                            renderPolicy: null == l ? void 0 : l.UNSTABLE_renderPolicy,
                        });
                else {
                    var b = c(d, f);
                    u = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != y && d === n.environment ? y.ifEmpty(b) : (n.environment, b), fetchKey: m, fetchPolicy: g, query: f, renderPolicy: null == l ? void 0 : l.UNSTABLE_renderPolicy };
                }
                return t(u);
            };
        },
        72845: (e, n, l) => {
            var a = (0, l(171600).default)(l(638636)),
                t = l(606161),
                r = t.loadQuery,
                i = t.useTrackLoadQueryInRender,
                s = l(995402),
                u = l(437429),
                o = l(202784),
                c = o.useCallback,
                d = o.useEffect,
                m = o.useRef,
                g = o.useState,
                y = l(703383).getRequest,
                p = { kind: "NullQueryReference" };
            function k(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== y(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                var l = null != n ? n : p,
                    t = u();
                i();
                var o = s(),
                    y = m(new Set([l])),
                    f = g(function () {
                        return l;
                    }),
                    b = f[0],
                    h = f[1],
                    S = g(function () {
                        return l;
                    }),
                    F = S[0],
                    P = S[1];
                l !== F && (y.current.add(l), P(l), h(l));
                var _ = c(
                        function () {
                            o.current && (y.current.add(p), h(p));
                        },
                        [o],
                    ),
                    C = c(
                        function (n, l) {
                            var a = null != l && l.hasOwnProperty("__environment") ? { fetchPolicy: l.fetchPolicy, networkCacheConfig: l.networkCacheConfig, __nameForWarning: l.__nameForWarning } : l;
                            if (o.current) {
                                var i,
                                    s = r(null !== (i = null == l ? void 0 : l.__environment) && void 0 !== i ? i : t, e, n, a);
                                y.current.add(s), h(s);
                            }
                        },
                        [t, e, h, o],
                    ),
                    E = m(!1);
                return (
                    d(function () {
                        return function () {
                            E.current = !0;
                        };
                    }, []),
                    d(
                        function () {
                            if (!0 === E.current) return (E.current = !1), void ("NullQueryReference" !== b.kind && C(b.variables, { fetchPolicy: b.fetchPolicy, networkCacheConfig: b.networkCacheConfig }));
                            var n = y.current;
                            if (o.current) {
                                var l,
                                    t = (0, a.default)(n);
                                try {
                                    for (t.s(); !(l = t.n()).done; ) {
                                        var r = l.value;
                                        if (r === b) break;
                                        n.delete(r), "NullQueryReference" !== r.kind && (k(e) ? r.dispose && r.dispose() : r.releaseQuery && r.releaseQuery());
                                    }
                                } catch (e) {
                                    t.e(e);
                                } finally {
                                    t.f();
                                }
                            }
                        },
                        [b, o, C, e],
                    ),
                    d(
                        function () {
                            return function () {
                                var n,
                                    l = (0, a.default)(y.current);
                                try {
                                    for (l.s(); !(n = l.n()).done; ) {
                                        var t = n.value;
                                        "NullQueryReference" !== t.kind && (k(e) ? t.dispose && t.dispose() : t.releaseQuery && t.releaseQuery());
                                    }
                                } catch (e) {
                                    l.e(e);
                                } finally {
                                    l.f();
                                }
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === b.kind ? null : b, C, _]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumHub.e34e1d4a.js.map
