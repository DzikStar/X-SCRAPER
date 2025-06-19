"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.PremiumHub", "icons/IconCameraVideoStroke-js", "icons/IconDeckStroke-js", "icons/IconFireStroke-js"],
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
            const C = s().d7eebb60,
                E = s().h707b180,
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
                    const Z = a.useMemo(() => (l && "loaded" === r && d ? E : C), [l, r, d]),
                        T = a.useMemo(() => ("loading" === r ? a.createElement(m.Z, { style: H.fullWidth }, a.createElement(g.ZP, null, P), a.createElement(y.Z, { style: H.marginTop })) : "failed" === r ? a.createElement(m.Z, { style: [H.marginTop, H.fullWidth] }, a.createElement(p.Z.Danger, { headline: K, text: a.createElement(s().I18NFormatMessage, { $i18n: "b88304a3" }, a.createElement(g.ZP, { link: (0, k.ju)("https://x.com/premium") }, s().b3bad3b2)) })) : "loaded" === r && l && d ? a.createElement(m.Z, null, a.createElement(b.ZP, { onClick: f, size: "large", style: H.exploreHubButton, type: "primaryFilled" }, v)) : null), [r, f, l, d]);
                    return a.createElement(h.Z, { graphicDisplayMode: "none", headline: Z, onAction: () => {}, subtext: T, withCloseButton: !1 });
                },
                H = f.default.create((e) => ({ marginTop: { marginTop: e.spaces.space24 }, fullWidth: { width: "100%" }, exploreHubButton: { marginTop: e.spaces.space16 } }));
            var T,
                x,
                L,
                w,
                B,
                z,
                R,
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
                                            { alias: null, args: null, concreteType: "PremiumHubConfigSection", kind: "LinkedField", name: "primary", plural: !0, selections: (x = [(T = { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null }), { args: null, kind: "FragmentSpread", name: "PremiumHubQuery_section" }]), storageKey: null },
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
                                                    T,
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
                                                                    T,
                                                                    (B = {
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
                                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(w = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], storageKey: null },
                                                                                ],
                                                                                type: "TimelineTextCtaButton",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    }),
                                                                    { alias: null, args: null, concreteType: "PremiumHubConfigTextLink", kind: "LinkedField", name: "text_link", plural: !1, selections: [(z = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }), w], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "card_block_type", storageKey: null },
                                                                    (R = { alias: null, args: null, kind: "ScalarField", name: "heading", storageKey: null }),
                                                                    { alias: null, args: null, kind: "ScalarField", name: "subheading", storageKey: null },
                                                                ],
                                                                type: "PremiumHubConfigCardBlock",
                                                                abstractKey: null,
                                                            },
                                                            { kind: "InlineFragment", selections: [T, { alias: null, args: null, kind: "ScalarField", name: "color", storageKey: null }, R, { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "link_block_type", storageKey: null }, { alias: null, args: null, concreteType: "PremiumHubConfigPill", kind: "LinkedField", name: "pill", plural: !1, selections: [z, { alias: null, args: null, kind: "ScalarField", name: "pill_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "subtext", storageKey: null }, w], type: "PremiumHubConfigLinkBlock", abstractKey: null },
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
            const q = U;
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
            const j = W;
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
                ne = q;
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
                        C = { backgroundColor: l ? f.default.theme.colors[l] : null },
                        E = a.useMemo(() => (o ? a.createElement(oe.ZP, { background: ye[o.pill_type] }, o.text) : null), [o]);
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
                        a.createElement(m.Z, { style: [be.inner, !i && _ ? be.divider : null] }, t ? a.createElement(ce.Z, { Icon: (0, me.U)(t), shape: "square", size: "large", style: C }) : null, a.createElement(g.ZP, { style: be.heading }, n), a.createElement(m.Z, { style: be.rightContent }, u ? a.createElement(g.ZP, { color: "gray700" }, u) : null, E, a.createElement(de.default, { style: be.chevron }))),
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
                Ce = ({ isFirst: e, isLast: l, isPrimarySection: n, sectionRef: t }) => {
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
                Ee = a.memo(Ce),
                Pe = f.default.create((e) => ({ isNotFirst: { marginTop: e.spaces.space16 }, isFirst: { marginTop: e.spaces.space8 }, isLast: { marginBottom: e.spaces.space64 } }));
            var Ke = n(664064);
            const ve = () => (!(0, t.useLocation)().state && document.referrer.includes("premium_signup_nux_flow") ? a.createElement(m.Z, { style: Ze.confetti }, a.createElement(Ke.Z, { autoplay: !0, count: 40, duration: 4e3, image_url: "light" === f.default.theme.paletteName ? "https://abs.twimg.com/responsive-web/client-web/X_logo_black.00ba8bfa.png" : "https://abs.twimg.com/responsive-web/client-web/X_logo_white.22c1baea.png", type: "image" })) : null),
                Ze = f.default.create((e) => ({ confetti: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0, zIndex: 3 } })),
                He = s().f75d1806,
                Te = s().bb081ea2,
                xe = ({ data: e }) => {
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
                                    return a.createElement(c.nO, { key: `primary-section-${l}`, namespace: { section: e.key } }, a.createElement(Ee, { isFirst: t, isLast: r, isPrimarySection: !0, sectionRef: e }));
                                }),
                        ),
                        u = a.createElement(
                            m.Z,
                            { style: we.secondaryContent },
                            i?.secondary?.map((e, l, n) => {
                                const t = 0 === l,
                                    r = l === n.length - 1;
                                return a.createElement(c.nO, { key: `secondary-section-${l}`, namespace: { section: e.key } }, a.createElement(Ee, { isFirst: t, isLast: r, isPrimarySection: !1, sectionRef: e }));
                            }),
                        ),
                        d = a.createElement(b.ZP, { "aria-label": Te, icon: a.createElement(M.default, null), link: "/settings/premium", type: "primaryText" });
                    return a.createElement(a.Fragment, null, a.createElement(A.Z, { headerless: !1, history: l, primaryContent: o, rightControl: d, sidebarContent: u, title: He }), a.createElement(ve, null));
                },
                Le = a.memo(xe),
                we = f.default.create((e) => ({ primaryContent: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space24 }, secondaryContent: { paddingTop: e.spaces.space32 } })),
                Be = s().a0b4541c,
                ze = (0, u.z)(ne, { errorConfig: { context: "PREMIUM_HUB_SCREEN" } }),
                Re = () => {
                    const { userClaims: e } = (0, o.QZ)(),
                        l = (0, t.useLocation)(),
                        n = l.state?.tierSwitchTarget,
                        i = l.state?.tierSwitchType;
                    return n || !e.isAnyPremiumSubscriber() ? a.createElement(Z, { tierSwitchTarget: n, tierSwitchType: i }) : a.createElement(c.nO, { namespace: { page: "premium_hub" } }, a.createElement(ze, { render: ({ data: e, fetchStatus: l, retry: n }) => (l === u.i.FAILED ? a.createElement(r.Z, { onRequestRetry: n, retryMessage: Be }) : l === u.i.LOADED ? (e ? a.createElement(Le, { data: e }) : a.createElement(d.Z, { to: "/home" })) : null), variables: {} }));
                },
                De = a.memo(Re);
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
                C = n(189700),
                E = n(520489),
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
                        return C.default;
                    case "RadarStroke":
                        return E.default;
                    case "SearchPersonStroke":
                        return P.default;
                    case "CircleFill":
                        return K.default;
                    default:
                        return () => null;
                }
            };
        },
        839: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        164174: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M8 18V6H4.5c-.28 0-.5.22-.5.5v11c0 .28.22.5.5.5H8zm11.5 0c.28 0 .5-.22.5-.5v-11c0-.28-.22-.5-.5-.5H16v12h3.5zM10 6v12h4V6h-4zM4.5 20C3.12 20 2 18.88 2 17.5v-11C2 5.12 3.12 4 4.5 4h15C20.88 4 22 5.12 22 6.5v11c0 1.38-1.12 2.5-2.5 2.5h-15z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        376278: (e, l, n) => {
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.PremiumHub.26a8cc9a.js.map
