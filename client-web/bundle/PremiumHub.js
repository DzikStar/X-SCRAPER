"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumHub", "icons/IconBookmarkCollectionsStroke-js", "icons/IconDocument-js", "icons/IconWriteStroke-js"],
    {
        252021: (e, l, n) => {
            n.d(l, { Z: () => i });
            var a = n(202784),
                t = n(107267),
                r = n(115553);
            const i = (e) => {
                (0, t.useHistory)();
                return a.createElement(r.A, e);
            };
        },
        301410: (e, l, n) => {
            n.d(l, { i: () => y.ZP, z: () => h });
            var a = n(202784),
                t = n(928123),
                r = n.n(t),
                i = n(72845),
                s = n.n(i),
                o = n(57074),
                u = n.n(o),
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
                h = (e, l) =>
                    function ({ fetchPolicy: n = "store-or-network", render: t, variables: r }) {
                        const [i, o] = s()(e),
                            c = (0, m.n7)(l.errorConfig.context),
                            d = u()(r),
                            g = a.useCallback(() => {
                                o(d, { fetchPolicy: "network-only" });
                            }, [o, d]);
                        return (
                            a.useLayoutEffect(() => {
                                o(d, { fetchPolicy: n });
                            }, [n, o, d]),
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
                i = n(111677),
                s = n.n(i),
                o = n(443781),
                u = n(301410),
                c = n(293115),
                d = n(615027),
                m = n(325686),
                g = n(731708),
                y = n(167630),
                p = n(40610),
                k = n(688715),
                b = n(154003),
                h = n(529356),
                f = n(392237),
                F = n(952793),
                S = n(125363),
                _ = n(691213);
            const E = s().d7eebb60,
                C = s().h707b180,
                P = s().a452ab68,
                K = s().g61ed8a4,
                v = s().a905eac6,
                Z = ({ tierSwitchTarget: e, tierSwitchType: l }) => {
                    const { userClaims: n } = (0, o.QZ)(),
                        [r, i] = a.useState("loading"),
                        u = (0, S.I0)(),
                        c = (0, t.useHistory)(),
                        d = (0, F.hC)("subscriptions_management_tier_switch_success_screen_enabled"),
                        f = a.useCallback(() => {
                            c.replace({ pathname: c.location.pathname }, null), c.go(0);
                        }, [c]);
                    a.useEffect(() => {
                        const a = "upgrade" === l;
                        let t = 0;
                        const r = setInterval(() => {
                            !a || (e ? n.hasSubscription(e) : n.isAnyPremiumSubscriber()) ? (i("loaded"), clearInterval(r), (l && d) || f()) : t >= 10 ? (i("failed"), clearInterval(r)) : ((t += 1), u((0, _.rS)({})));
                        }, 1e3);
                        return () => {
                            clearInterval(r);
                        };
                    }, [e, n, u, c, l, f, d]);
                    const Z = a.useMemo(() => (l && "loaded" === r && d ? C : E), [l, r, d]),
                        L = a.useMemo(() => ("loading" === r ? a.createElement(m.Z, { style: H.fullWidth }, a.createElement(g.ZP, null, P), a.createElement(y.Z, { style: H.marginTop })) : "failed" === r ? a.createElement(m.Z, { style: [H.marginTop, H.fullWidth] }, a.createElement(p.Z.Danger, { headline: K, text: a.createElement(s().I18NFormatMessage, { $i18n: "b88304a3" }, a.createElement(g.ZP, { link: (0, k.ju)("https://x.com/premium") }, s().b3bad3b2)) })) : "loaded" === r && l && d ? a.createElement(m.Z, null, a.createElement(b.ZP, { onClick: f, size: "large", style: H.exploreHubButton, type: "primaryFilled" }, v)) : null), [r, f, l, d]);
                    return a.createElement(h.Z, { graphicDisplayMode: "none", headline: Z, onAction: () => {}, subtext: L, withCloseButton: !1 });
                },
                H = f.default.create((e) => ({ marginTop: { marginTop: e.spaces.space24 }, fullWidth: { width: "100%" }, exploreHubButton: { marginTop: e.spaces.space16 } }));
            var L,
                T,
                x,
                w,
                B,
                R,
                z,
                D,
                I = n(537392),
                M = n(698891),
                A = n(252021),
                Q = n(10656),
                O = n(725516),
                V = (n(136728), n(277660)),
                N = n.n(V),
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
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "primary", plural: !0, selections: (T = [(L = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumHubQuery_section" }]), storageKey: null },
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
                                                selections: (D = [
                                                    L,
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: null,
                                                        kind: "LinkedField",
                                                        name: "blocks",
                                                        plural: !0,
                                                        selections: [
                                                            (x = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                            { kind: "TypeDiscriminator", abstractKey: "__isPremiumHubConfigBlock" },
                                                            {
                                                                kind: "InlineFragment",
                                                                selections: [
                                                                    L,
                                                                    (B = {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "button",
                                                                        plural: !1,
                                                                        selections: [
                                                                            x,
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "button_text", storageKey: null },
                                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(w = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], storageKey: null },
                                                                                ],
                                                                                type: "TimelineTextCtaButton",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    { alias: null, args: null, concreteType: "PremiumHubConfigTextLink", kind: "LinkedField", name: "text_link", plural: !1, selections: [(R = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }), w], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "card_block_type", storageKey: null },
                                                                    (z = { alias: null, args: null, kind: "ScalarField", name: "heading", storageKey: null }),
                                                                    { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                                                                ],
                                                                type: "PremiumHubConfigCardBlock",
                                                                abstractKey: null,
                                                            },
                                                            { kind: "InlineFragment", selections: [L, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, z, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [R, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, w], type: "PremiumHubConfigLinkBlock", abstractKey: null },
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
            U.hash = "af1bf05e9a6a9c643edfc3d0ab1e0895";
            const W = U;
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
            const j = q;
            var G = (function () {
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
                le = j,
                ne = W;
            var ae = n(530525),
                te = n(439592);
            const re = ({ buttonText: e, heading: l, imageUrl: n, isPrimarySection: t, subheading: r, textLink: i, type: s, url: o }) => {
                    const u = (0, O.z)();
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
                            o
                                ? a.createElement(
                                      b.ZP,
                                      {
                                          allowTextWrap: !0,
                                          link: { pathname: o, state: { referring_page: "hub" } },
                                          onClick: () => {
                                              u.scribeAction("click");
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
                se = f.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16 }, button: { alignSelf: "flex-start", paddingHorizontal: 0 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, textLink: { marginBottom: e.spaces.space16 }, image: { height: "127px" } }));
            var oe = n(868634),
                ue = n(530732),
                ce = n(909377),
                de = n(58399),
                me = n(498514),
                ge = n(693510);
            const ye = { Warning: "orange50", Info: "blue500" },
                pe = ({ blockKey: e, color: l, heading: n, icon: t, isFirst: r, isLast: i, isPrimarySection: s, pill: o, subtext: u, type: c, url: d }) => {
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
                        h = "Primary" === c,
                        S = [];
                    r && S.push(be.isFirst), i && S.push(be.isLast);
                    const _ = h || (!s && !h),
                        E = { backgroundColor: l ? f.default.theme.colors[l] : null },
                        C = a.useMemo(() => (o ? a.createElement(oe.ZP, { background: ye[o.pill_type] }, o.text) : null), [o]);
                    return a.createElement(
                        ue.Z,
                        {
                            id: p,
                            link: k,
                            onClick: () => {
                                y.scribeAction("click"), b && b();
                            },
                            style: [be.linkBlock, _ ? [be.backgroundGray, S] : null],
                        },
                        a.createElement(m.Z, { style: [be.inner, !i && _ ? be.divider : null] }, t ? a.createElement(ce.Z, { Icon: (0, me.U)(t), shape: "square", size: "large", style: E }) : null, a.createElement(g.ZP, { style: be.heading }, n), a.createElement(m.Z, { style: be.rightContent }, u ? a.createElement(g.ZP, { color: "gray700" }, u) : null, C, a.createElement(de.default, { style: be.chevron }))),
                    );
                },
                ke = a.memo(pe),
                be = f.default.create((e) => ({ linkBlock: { cursor: "pointer" }, backgroundGray: { backgroundColor: e.colors.gray0 }, inner: { paddingVertical: e.spaces.space8, marginHorizontal: e.spaces.space12, alignItems: "center", flexDirection: "row", minHeight: e.spaces.space48 }, divider: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.gray100 }, heading: { marginHorizontal: e.spaces.space12 }, isFirst: { borderTopStartRadius: e.borderRadii.medium, borderTopEndRadius: e.borderRadii.medium }, isLast: { borderBottomStartRadius: e.borderRadii.medium, borderBottomEndRadius: e.borderRadii.medium }, chevron: { color: e.colors.gray700, marginStart: e.spaces.space8 }, rightContent: { position: "absolute", end: 0, flexDirection: "row", alignItems: "center" } })),
                he = ({ blockRef: e, isFirst: l, isLast: n, isPrimarySection: t }) => {
                    const r = N()(ee, e);
                    return a.createElement(c.nO, { namespace: { component: r.key } }, "PremiumHubConfigLinkBlock" === r.__typename ? a.createElement(ke, { blockKey: r.key, color: r.color, heading: r.heading, icon: r.icon, isFirst: l, isLast: n, isPrimarySection: t, pill: r.pill, subtext: r.subtext, type: r.link_block_type, url: r.url }) : "PremiumHubConfigCardBlock" === r.__typename ? a.createElement(ie, { buttonText: r.button?.button_text, heading: r.heading, imageUrl: r.image_url, isPrimarySection: t, subheading: r.subheading, textLink: r.text_link, type: r.card_block_type, url: r?.button?.url?.url }) : null);
                },
                fe = a.memo(he),
                Fe = ({ headingRef: e }) => {
                    const l = N()(Y, e);
                    return a.createElement(m.Z, { style: _e.heading }, a.createElement(g.ZP, { size: "headline2", weight: "heavy" }, l.title), l.button ? a.createElement(b.ZP, { link: l.button?.url?.url, size: "xSmall", type: "primaryFilled" }, l.button?.button_text) : null);
                },
                Se = a.memo(Fe),
                _e = f.default.create((e) => ({ heading: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space16, flexDirection: "row", alignItems: "center", justifyContent: "space-between" } })),
                Ee = ({ isFirst: e, isLast: l, isPrimarySection: n, sectionRef: t }) => {
                    const r = N()(le, t);
                    if (0 === r.blocks.length) return null;
                    const i = r.heading ? a.createElement(Se, { headingRef: r.heading }) : null,
                        s = r?.blocks.map((e, l, t) => {
                            const r = 0 === l,
                                i = l === t.length - 1;
                            return a.createElement(fe, { blockRef: e, isFirst: r, isLast: i, isPrimarySection: n, key: `block-${l}` });
                        }),
                        o = [];
                    return e && o.push(Pe.isFirst), e || o.push(Pe.isNotFirst), l && o.push(Pe.isLast), a.createElement(m.Z, { style: o }, i, s);
                },
                Ce = a.memo(Ee),
                Pe = f.default.create((e) => ({ isNotFirst: { marginTop: e.spaces.space16 }, isFirst: { marginTop: e.spaces.space8 }, isLast: { marginBottom: e.spaces.space64 } }));
            var Ke = n(664064);
            const ve = () => (!(0, t.useLocation)().state && document.referrer.includes("premium_signup_nux_flow") ? a.createElement(m.Z, { style: Ze.confetti }, a.createElement(Ke.Z, { autoplay: !0, count: 40, duration: 4e3, image_url: "light" === f.default.theme.paletteName ? "https://abs.twimg.com/responsive-web/client-web/X_logo_black.00ba8bfa.png" : "https://abs.twimg.com/responsive-web/client-web/X_logo_white.22c1baea.png", type: "image" })) : null),
                Ze = f.default.create((e) => ({ confetti: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0, zIndex: 3 } })),
                He = s().f75d1806,
                Le = s().bb081ea2,
                Te = ({ data: e }) => {
                    const l = (0, t.useHistory)(),
                        n = (0, O.z)(),
                        r = (0, I.Zx)(({ containerWidth: e }) => Q.Z.isTwoColumnLayout(e));
                    a.useEffect(() => {
                        n.scribeAction("impression");
                    }, [n]);
                    const i = e?.premium_hub_config?.content,
                        s = e?.premium_hub_config?.content.secondary?.map((e) => e.key),
                        o = a.createElement(
                            m.Z,
                            { style: we.primaryContent },
                            i?.primary
                                ?.filter((e) => !r || !s?.includes(e.key))
                                .map((e, l, n) => {
                                    const t = 0 === l,
                                        r = l === n.length - 1;
                                    return a.createElement(c.nO, { key: `primary-section-${l}`, namespace: { section: e.key } }, a.createElement(Ce, { isFirst: t, isLast: r, isPrimarySection: !0, sectionRef: e }));
                                }),
                        ),
                        u = a.createElement(
                            m.Z,
                            { style: we.secondaryContent },
                            i?.secondary?.map((e, l, n) => {
                                const t = 0 === l,
                                    r = l === n.length - 1;
                                return a.createElement(c.nO, { key: `secondary-section-${l}`, namespace: { section: e.key } }, a.createElement(Ce, { isFirst: t, isLast: r, isPrimarySection: !1, sectionRef: e }));
                            }),
                        ),
                        d = a.createElement(b.ZP, { "aria-label": Le, icon: a.createElement(M.default, null), link: "/settings/premium", type: "primaryText" });
                    return a.createElement(a.Fragment, null, a.createElement(A.Z, { headerless: !1, history: l, primaryContent: o, rightControl: d, sidebarContent: u, title: He }), a.createElement(ve, null));
                },
                xe = a.memo(Te),
                we = f.default.create((e) => ({ primaryContent: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space24 }, secondaryContent: { paddingTop: e.spaces.space32 } })),
                Be = s().a0b4541c,
                Re = (0, u.z)(ne, { errorConfig: { context: "PREMIUM_HUB_SCREEN" } }),
                ze = () => {
                    const { userClaims: e } = (0, o.QZ)(),
                        l = (0, t.useLocation)(),
                        n = l.state?.tierSwitchTarget,
                        i = l.state?.tierSwitchType;
                    return n || !e.isAnyPremiumSubscriber() ? a.createElement(Z, { tierSwitchTarget: n, tierSwitchType: i }) : a.createElement(c.nO, { namespace: { page: "premium_hub" } }, a.createElement(Re, { render: ({ data: e, fetchStatus: l, retry: n }) => (l === u.i.FAILED ? a.createElement(r.Z, { onRequestRetry: n, retryMessage: Be }) : l === u.i.LOADED ? (e ? a.createElement(xe, { data: e }) : a.createElement(d.Z, { to: "/home" })) : null), variables: {} }));
                },
                De = a.memo(ze);
        },
        498514: (e, l, n) => {
            n.d(l, { U: () => Z });
            n(202784);
            var a = n(521058),
                t = n(847988),
                r = n(616894),
                i = n(376021),
                s = n(625823),
                o = n(839),
                u = n(266151),
                c = n(468670),
                d = n(913973),
                m = n(1753),
                g = n(748138),
                y = n(53674),
                p = n(164174),
                k = n(926981),
                b = n(642317),
                h = n(28862),
                f = n(376278),
                F = n(511323),
                S = n(254944),
                _ = n(465072),
                E = n(189700),
                C = n(520489),
                P = n(297938),
                K = n(136483),
                v = n(457566);
            const Z = (e) => {
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
                        return o.default;
                    case "Feather":
                        return u.default;
                    case "LockStroke":
                        return c.default;
                    case "Checkmark":
                        return d.default;
                    case "NotesStroke":
                        return m.default;
                    case "Grok":
                        return v.x1;
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
                        return h.default;
                    case "FireStroke":
                        return f.default;
                    case "PersonStroke":
                        return F.default;
                    case "PaintbrushStroke":
                        return S.default;
                    case "ModeratorStroke":
                        return _.default;
                    case "Document":
                        return E.default;
                    case "RadarStroke":
                        return C.default;
                    case "SearchPersonStroke":
                        return P.default;
                    case "CircleFill":
                        return K.default;
                    default:
                        return () => null;
                }
            };
        },
        28862: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.998 8.5c0-1.38 1.119-2.5 2.5-2.5h9c1.381 0 2.5 1.12 2.5 2.5v14.12l-7-3.5-7 3.5V8.5zm2.5-.5c-.276 0-.5.22-.5.5v10.88l5-2.5 5 2.5V8.5c0-.28-.224-.5-.5-.5h-9zM18.5 2H8.998c-1.105 0-2 .9-2 2H18.5c.276 0 .5.22.5.5v9.82l-.002-.01v2.28L21 17.68V4.5C21 3.12 19.881 2 18.5 2z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        189700: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8 11h8v2H8zm0-4h5v2H8z" }), a.createElement("path", { d: "M17.5 2h-11C5.12 2 4 3.12 4 4.5v15C4 20.88 5.12 22 6.5 22h6c4.14 0 7.5-3.36 7.5-7.5v-10C20 3.12 18.88 2 17.5 2zm-2.52 17.41c.01-.1.02-.21.02-.32v-1.27c0-.48.32-.82.84-.82h1.28c.09 0 .19 0 .29-.01-.53 1.04-1.39 1.89-2.43 2.42zM18 14c0 .58-.46 1-.88 1h-1.28C14.26 15 13 16.19 13 17.82v1.27c0 .46-.43.91-.97.91H6.5c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h11c.27 0 .5.22.5.5V14z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        376021: (e, l, n) => {
            n.r(l), n.d(l, { default: () => u });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(717683),
                s = n(347101);
            const o = (e = {}) => {
                const l = a.useContext(i.Z),
                    { direction: n } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, l && s.Z.iconRTL], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: n });
            };
            o.metadata = { width: 24, height: 24 };
            const u = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumHub.cc52152a.js.map
