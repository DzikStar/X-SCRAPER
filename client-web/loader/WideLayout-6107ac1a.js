"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-6107ac1a"],
    {
        669506: (e, n, l) => {
            l.d(n, { Z: () => c });
            var a,
                t,
                r,
                i,
                s,
                o,
                u,
                d = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "JobRecommendationsModuleQuery", selections: [{ kind: "RequiredField", field: { alias: null, args: (a = [{ kind: "Literal", name: "s", value: "f3d8" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [(t = { alias: null, args: null, concreteType: "MatchingProfile", kind: "LinkedField", name: "matching_profile", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "consented_at", storageKey: null }], storageKey: null }), { alias: null, args: (r = [{ kind: "Literal", name: "count", value: 5 }]), concreteType: "ApiJobResults", kind: "LinkedField", name: "job_recommendations_results", plural: !0, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSearchListItem_item" }], storageKey: null }], storageKey: "job_recommendations_results(count:5)" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"f3d8")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "JobRecommendationsModuleQuery",
                        selections: [
                            {
                                alias: null,
                                args: a,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            t,
                                                            {
                                                                alias: null,
                                                                args: r,
                                                                concreteType: "ApiJobResults",
                                                                kind: "LinkedField",
                                                                name: "job_recommendations_results",
                                                                plural: !0,
                                                                selections: [
                                                                    i,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "result",
                                                                        plural: !1,
                                                                        selections: [
                                                                            s,
                                                                            { kind: "TypeDiscriminator", abstractKey: "__isJobResult" },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    (o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "JobCore",
                                                                                        kind: "LinkedField",
                                                                                        name: "core",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                                                                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    { alias: null, args: null, concreteType: "ApiCompanyProfileResults", kind: "LinkedField", name: "company_profile_results", plural: !1, selections: [o, i, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [o, i, { alias: null, args: null, concreteType: "CompanyProfileCore", kind: "LinkedField", name: "core", plural: !1, selections: [(u = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, { alias: null, args: null, concreteType: "CompanyLogoImage", kind: "LinkedField", name: "logo", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "normal_url", storageKey: null }], storageKey: null }], type: "ApiCompanyProfile", abstractKey: null }], storageKey: null }], storageKey: null },
                                                                                    { alias: null, args: null, kind: "ScalarField", name: "user_sentiment", storageKey: null },
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: "UserResults",
                                                                                        kind: "LinkedField",
                                                                                        name: "user_results",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            {
                                                                                                alias: null,
                                                                                                args: null,
                                                                                                concreteType: null,
                                                                                                kind: "LinkedField",
                                                                                                name: "result",
                                                                                                plural: !1,
                                                                                                selections: [
                                                                                                    s,
                                                                                                    {
                                                                                                        kind: "InlineFragment",
                                                                                                        selections: [
                                                                                                            i,
                                                                                                            { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, u], storageKey: null },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "UserVerification",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "verification",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null },
                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "profile_image_shape", storageKey: null },
                                                                                                            o,
                                                                                                        ],
                                                                                                        type: "User",
                                                                                                        abstractKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                storageKey: null,
                                                                                            },
                                                                                            o,
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                ],
                                                                                type: "ApiJob",
                                                                                abstractKey: null,
                                                                            },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    o,
                                                                ],
                                                                storageKey: "job_recommendations_results(count:5)",
                                                            },
                                                            o,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            o,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"f3d8")',
                            },
                        ],
                    },
                    params: { id: "0fTKmeS38bqgfttp4H1jSg", metadata: {}, name: "JobRecommendationsModuleQuery", operationKind: "query", text: null },
                };
            d.hash = "37b14a1d47b77462d15eba2689e65519";
            const c = d;
        },
        879113: (e, n, l) => {
            l.d(n, { Z: () => m });
            var a = l(202784),
                t = l(476984),
                r = l.n(t),
                i = l(143778),
                s = l(750410),
                o = l(682830);
            const u = "failed",
                d = "loaded",
                c = "loading",
                g = "none";
            class m extends a.Component {
                shouldComponentUpdate(e) {
                    const n = e.fetchStatus === d,
                        l = this.props.fetchStatus !== e.fetchStatus;
                    return !(!n && !l) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: n, failureMessage: l, fetchStatus: t, icon: r, loadingMessage: i, onRequestRetry: d, render: m, renderFailure: p, retryMessage: y, retryable: k } = this.props;
                    switch (t) {
                        case u:
                            return k ? a.createElement(s.Z, { icon: r, onRequestRetry: d, retryMessage: y }) : l ? a.createElement(o.m, { failureMessage: l }) : p();
                        case c:
                            return a.createElement(o.J, { "aria-label": e, color: n, loadingMessage: i });
                        case g:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        247056: (e, n, l) => {
            l.d(n, { Z: () => u });
            var a = l(202784),
                t = l(111677),
                r = l.n(t),
                i = l(149170),
                s = l(40644);
            const o = r().gaeb997e;
            const u = function ({ activeColor: e, label: n = o, Icon: l = i.default, iconSize: t = "normal", isDisabled: r, onClick: u, preventFocusShift: d, renderActionMenu: c, style: g, testID: m, withDarkBackground: p = !1 }) {
                const y = a.useCallback(
                        (e) => {
                            e && e.preventDefault(), u && u(e);
                        },
                        [u],
                    ),
                    k = a.useMemo(() => ({ label: n }), [n]);
                return a.createElement(s.ZP, { Icon: l, activeColor: e || (p ? "white" : void 0), "aria-label": n, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: k, iconSize: t, isDisabled: r, onPress: y, preventFocusShift: d, renderMenu: c, style: g, testID: m });
            };
        },
        30183: (e, n, l) => {
            l.d(n, { Z: () => s });
            var a = l(202784),
                t = l(731708),
                r = l(952428);
            const i = l(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: n, onPress: l, text: s, weight: o, withBottomRadius: u, withDarkerInteractiveBackground: d }) {
                    return a.createElement(r.Z, { link: n, onPress: l, style: [i.root, u && i.withBottomRadius], withDarkerInteractiveBackground: d }, a.createElement(t.ZP, { align: e, color: "primary", weight: o }, s));
                };
        },
        280278: (e, n, l) => {
            l.d(n, { ZP: () => y });
            var a = l(202784),
                t = l(325686),
                r = l(827515),
                i = l(461756),
                s = l(731708),
                o = l(392237);
            const u = "up",
                d = "down",
                c = (e, n, l) => {
                    l((l) => {
                        const a = (0, r.Z)(e) ? (e > (l.count || 0) ? u : d) : u;
                        return { ...l, count: e, oldText: l.text, pendingCount: null, pendingText: null, text: n, transitionDirection: a };
                    });
                },
                g = {};
            [u, d].forEach((e) => {
                const n = "0.3s";
                g[e] = { active: { transitionProperty: "transform", transitionDuration: n, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === u ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === u ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: n } };
            });
            const m = { position: "absolute" },
                p = o.default.create({ root: { overflow: "hidden" } }),
                y = (e) => {
                    const { children: n, containerStyle: l, count: o, ...d } = e,
                        [y, k] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: u }),
                        f = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (f.current)
                                if (i.Z.reducedMotionEnabled) k((l) => ({ ...l, oldText: null, text: n, pendingText: null, pendingCount: null, count: e.count }));
                                else if (n !== y.pendingText) {
                                    n === y.text || ((0, r.Z)(e.count) && y.count === e.count) ? k((e) => ({ ...e, pendingCount: null, pendingText: null })) : (k((l) => ({ ...l, pendingCount: e.count, pendingText: n })), y.animating || c(e.count, n, k));
                                }
                        }, [n]),
                        a.useEffect(() => {
                            f.current &&
                                !1 === y.animating &&
                                (y.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && k((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : y.pendingText && c(y.pendingCount, y.pendingText, k));
                        }, [y.animating, y.oldText]),
                        a.useMemo(() => {
                            const e = g[y.transitionDirection],
                                n = y.oldText && !i.Z.reducedMotionEnabled,
                                r = !y.animating && y.oldText && !i.Z.reducedMotionEnabled,
                                o = { ...m, ...(y.animating ? e.post : e.active) },
                                u = { ...(r ? e.pre : e.active) };
                            return a.createElement(
                                t.Z,
                                { style: [p.root, l] },
                                n ? a.createElement("span", { style: o }, a.createElement(s.ZP, d, y.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, n) => {
                                                e && n((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, k),
                                        style: u,
                                    },
                                    a.createElement(s.ZP, d, y.text),
                                ),
                            );
                        }, [l, d, y, f, k])
                    );
                };
        },
        98440: (e, n, l) => {
            l.r(n), l.d(n, { default: () => o });
            var a = l(202784),
                t = l(890601),
                r = l(783427),
                i = l(347101);
            const s = (e = {}) => {
                const { direction: n } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-6107ac1a.1ef4627a.js.map
