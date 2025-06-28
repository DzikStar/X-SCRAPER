(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.WideLayout-6107ac1a"],
    {
        669506: (e, l, n) => {
            "use strict";
            n.d(l, { Z: () => d });
            var a,
                t,
                r,
                i,
                s,
                o,
                u,
                c = {
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
            c.hash = "37b14a1d47b77462d15eba2689e65519";
            const d = c;
        },
        879113: (e, l, n) => {
            "use strict";
            n.d(l, { Z: () => m });
            var a = n(202784),
                t = n(476984),
                r = n.n(t),
                i = n(143778),
                s = n(750410),
                o = n(682830);
            const u = "failed",
                c = "loaded",
                d = "loading",
                g = "none";
            class m extends a.Component {
                shouldComponentUpdate(e) {
                    const l = e.fetchStatus === c,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!l && !n) || !r()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: l, failureMessage: n, fetchStatus: t, icon: r, loadingMessage: i, onRequestRetry: c, render: m, renderFailure: p, retryMessage: y, retryable: k } = this.props;
                    switch (t) {
                        case u:
                            return k ? a.createElement(s.Z, { icon: r, onRequestRetry: c, retryMessage: y }) : n ? a.createElement(o.m, { failureMessage: n }) : p();
                        case d:
                            return a.createElement(o.J, { "aria-label": e, color: l, loadingMessage: i });
                        case g:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        247056: (e, l, n) => {
            "use strict";
            n.d(l, { Z: () => u });
            var a = n(202784),
                t = n(111677),
                r = n.n(t),
                i = n(149170),
                s = n(40644);
            const o = r().gaeb997e;
            const u = function ({ activeColor: e, label: l = o, Icon: n = i.default, iconSize: t = "normal", isDisabled: r, onClick: u, preventFocusShift: c, renderActionMenu: d, style: g, testID: m, withDarkBackground: p = !1 }) {
                const y = a.useCallback(
                        (e) => {
                            e && e.preventDefault(), u && u(e);
                        },
                        [u],
                    ),
                    k = a.useMemo(() => ({ label: l }), [l]);
                return a.createElement(s.ZP, { Icon: n, activeColor: e || (p ? "white" : void 0), "aria-label": l, backgroundColor: p ? "translucentBlack77" : "transparent", color: p ? "white" : "gray700", hoverLabel: k, iconSize: t, isDisabled: r, onPress: y, preventFocusShift: c, renderMenu: d, style: g, testID: m });
            };
        },
        30183: (e, l, n) => {
            "use strict";
            n.d(l, { Z: () => s });
            var a = n(202784),
                t = n(731708),
                r = n(952428);
            const i = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, withBottomRadius: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge } })),
                s = function ({ align: e, link: l, onPress: n, text: s, weight: o, withBottomRadius: u, withDarkerInteractiveBackground: c }) {
                    return a.createElement(r.Z, { link: l, onPress: n, style: [i.root, u && i.withBottomRadius], withDarkerInteractiveBackground: c }, a.createElement(t.ZP, { align: e, color: "primary", weight: o }, s));
                };
        },
        280278: (e, l, n) => {
            "use strict";
            n.d(l, { ZP: () => y });
            var a = n(202784),
                t = n(325686),
                r = n(827515),
                i = n(461756),
                s = n(731708),
                o = n(392237);
            const u = "up",
                c = "down",
                d = (e, l, n) => {
                    n((n) => {
                        const a = (0, r.Z)(e) ? (e > (n.count || 0) ? u : c) : u;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: l, transitionDirection: a };
                    });
                },
                g = {};
            [u, c].forEach((e) => {
                const l = "0.3s";
                g[e] = { active: { transitionProperty: "transform", transitionDuration: l, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === u ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === u ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: l } };
            });
            const m = { position: "absolute" },
                p = o.default.create({ root: { overflow: "hidden" } }),
                y = (e) => {
                    const { children: l, containerStyle: n, count: o, ...c } = e,
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
                                if (i.Z.reducedMotionEnabled) k((n) => ({ ...n, oldText: null, text: l, pendingText: null, pendingCount: null, count: e.count }));
                                else if (l !== y.pendingText) {
                                    l === y.text || ((0, r.Z)(e.count) && y.count === e.count) ? k((e) => ({ ...e, pendingCount: null, pendingText: null })) : (k((n) => ({ ...n, pendingCount: e.count, pendingText: l })), y.animating || d(e.count, l, k));
                                }
                        }, [l]),
                        a.useEffect(() => {
                            f.current &&
                                !1 === y.animating &&
                                (y.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && k((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : y.pendingText && d(y.pendingCount, y.pendingText, k));
                        }, [y.animating, y.oldText]),
                        a.useMemo(() => {
                            const e = g[y.transitionDirection],
                                l = y.oldText && !i.Z.reducedMotionEnabled,
                                r = !y.animating && y.oldText && !i.Z.reducedMotionEnabled,
                                o = { ...m, ...(y.animating ? e.post : e.active) },
                                u = { ...(r ? e.pre : e.active) };
                            return a.createElement(
                                t.Z,
                                { style: [p.root, n] },
                                l ? a.createElement("span", { style: o }, a.createElement(s.ZP, c, y.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, l) => {
                                                e && l((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, k),
                                        style: u,
                                    },
                                    a.createElement(s.ZP, c, y.text),
                                ),
                            );
                        }, [n, c, y, f, k])
                    );
                };
        },
        98440: (e, l, n) => {
            "use strict";
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        226597: (e, l, n) => {
            "use strict";
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M3.707 21.707l18-18-1.414-1.414-2.088 2.088C17.688 4.137 17.11 4 16.5 4H11v2h5.5c.028 0 .056 0 .084.002l-10.88 10.88c-.131-.266-.204-.565-.204-.882V7.551l2.068 1.93 1.365-1.462L4.5 3.882.068 8.019l1.365 1.462 2.068-1.93V16c0 .871.278 1.677.751 2.334l-1.959 1.959 1.414 1.414zM18.5 9h2v7.449l2.068-1.93 1.365 1.462-4.433 4.137-4.432-4.137 1.365-1.462 2.067 1.93V9zm-8.964 9l-2 2H13v-2H9.536z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        155353: (e, l, n) => {
            "use strict";
            n.r(l), n.d(l, { default: () => o });
            var a = n(202784),
                t = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: l } = (0, r.Z)();
                return (0, t.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" })) }, { writingDirection: l });
            };
            s.metadata = { width: 24, height: 24 };
            const o = s;
        },
        666536: (e, l, n) => {
            "use strict";
            n.d(l, { Z: () => r });
            var a = n(936386),
                t = n.n(a);
            const r = (e, l, n) => t()(e, l, n);
        },
        936386: (e) => {
            function l(e, l, n) {
                var a, t, r, i, s;
                function o() {
                    var u = Date.now() - i;
                    u < l && u >= 0 ? (a = setTimeout(o, l - u)) : ((a = null), n || ((s = e.apply(r, t)), (r = t = null)));
                }
                null == l && (l = 100);
                var u = function () {
                    (r = this), (t = arguments), (i = Date.now());
                    var u = n && !a;
                    return a || (a = setTimeout(o, l)), u && ((s = e.apply(r, t)), (r = t = null)), s;
                };
                return (
                    (u.clear = function () {
                        a && (clearTimeout(a), (a = null));
                    }),
                    (u.flush = function () {
                        a && ((s = e.apply(r, t)), (r = t = null), clearTimeout(a), (a = null));
                    }),
                    u
                );
            }
            (l.debounce = l), (e.exports = l);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.WideLayout-6107ac1a.9420e2da.js.map
