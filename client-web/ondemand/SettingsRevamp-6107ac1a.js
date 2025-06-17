"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-6107ac1a", "icons/IconConnectArrows-js", "icons/IconDeviceLaptop-js", "icons/IconDevicePhone-js", "icons/IconFireStroke-js"],
    {
        520512: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r,
                a,
                i = { fragment: { argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "allowGamblingAds" }]), kind: "Fragment", metadata: null, name: "AdsCategoriesMutation", selections: (a = [{ alias: null, args: [{ kind: "Variable", name: "allow_gambling_ads", variableName: "allowGamblingAds" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: r, kind: "Operation", name: "AdsCategoriesMutation", selections: a }, params: { id: "eRWyTnzFgPgv9D4W8ujf6A", metadata: {}, name: "AdsCategoriesMutation", operationKind: "mutation", text: null } };
            i.hash = "58347e2cd632b3c8fb00f7f08a6b5c7d";
            const o = i;
        },
        795738: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r,
                a = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "AdsCategoriesQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: (r = {
                                    alias: null,
                                    args: null,
                                    concreteType: "UserPreferences",
                                    kind: "LinkedField",
                                    name: "user_preferences",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "allow_gambling_ads", storageKey: null },
                                        { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                    ],
                                    storageKey: null,
                                }),
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "AdsCategoriesQuery", selections: [r] },
                    params: { id: "FO_KX1o77E3vYL14rATn9Q", metadata: {}, name: "AdsCategoriesQuery", operationKind: "query", text: null },
                };
            a.hash = "5cedb9567de269f8e1609fd181602c63";
            const i = a;
        },
        661810: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                a = n(325686),
                i = n(392237);
            function o({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                a = n(476984),
                i = n.n(a),
                o = n(143778),
                l = n(750410),
                s = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class g extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !i()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: i, loadingMessage: o, onRequestRetry: d, render: g, renderFailure: p, retryMessage: h, retryable: f } = this.props;
                    switch (a) {
                        case c:
                            return f ? r.createElement(l.Z, { icon: i, onRequestRetry: d, retryMessage: h }) : n ? r.createElement(s.m, { failureMessage: n }) : p();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: o });
                        case m:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        536606: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                a = n(325686),
                i = n(731708),
                o = n(352924),
                l = n(822399),
                s = n(98538),
                c = n(392237);
            const d = (e) => {
                const { decoration: t, isCompact: n, progressBarConfig: d, statConfig: m, title: g, valueCurrent: p, valueMax: h } = e,
                    f = (0, o.F)(),
                    v = ((b = d), c.default.theme.colors[b?.color || "blue900"]);
                var b;
                const y = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    C = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return r.createElement(a.Z, { style: u.root }, r.createElement(a.Z, { style: u.decoration }, t), r.createElement(a.Z, { style: u.title }, r.createElement(i.ZP, { size: "subtext2", weight: "medium" }, g)), r.createElement(a.Z, { id: f, style: u.valueLabel }, m.value ? r.createElement(s.Z, null, r.createElement(s.Z.Value, null, m.value), r.createElement(s.Z.Label, null, m.label)) : r.createElement(i.ZP, { weight: "bold" }, m.label)), r.createElement(a.Z, { style: n ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, r.createElement(l.Z, { "aria-describedby": f, "aria-valuemax": h, colorValue: v, progress: p / h, progressStyle: y, style: C })));
            };
            const u = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = r.memo(d);
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784),
                a = n(325686);
            const i = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                o = function ({ children: e }) {
                    return r.createElement(a.Z, { style: i.root }, e);
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var r = n(202784),
                a = n(325686),
                i = n(827515),
                o = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, i.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const g = { position: "absolute" },
                p = s.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [h, f] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        v = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (v.current = !0),
                                function () {
                                    v.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (v.current)
                                if (o.Z.reducedMotionEnabled) f((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, i.Z)(e.count) && h.count === e.count) ? f((e) => ({ ...e, pendingCount: null, pendingText: null })) : (f((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || u(e.count, t, f));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            v.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              v.current && f((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && u(h.pendingCount, h.pendingText, f));
                        }, [h.animating, h.oldText]),
                        r.useMemo(() => {
                            const e = m[h.transitionDirection],
                                t = h.oldText && !o.Z.reducedMotionEnabled,
                                i = !h.animating && h.oldText && !o.Z.reducedMotionEnabled,
                                s = { ...g, ...(h.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return r.createElement(
                                a.Z,
                                { style: [p.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, d, h.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(v.current, f),
                                        style: c,
                                    },
                                    r.createElement(l.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, v, f])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                a = n(325686),
                i = n(731708),
                o = n(891198),
                l = n(280278),
                s = n(392237);
            const c = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, o.Gb)(e) !== (0, o.wl)(e) ? { label: (0, o.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: a } = this.props;
                    return r.createElement(i.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: a }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                r.createElement(
                    a.Z,
                    { style: [m.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(a.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(i.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: a, weight: o = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: c, style: a, weight: o }) : r.createElement(i.ZP, { children: t, color: s ? "white" : "text", size: c, style: a, weight: o }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = u;
        },
        170397: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                o = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        762863: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                o = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M21 16V4.5C21 3.12 19.88 2 18.5 2h-13C4.12 2 3 3.12 3 4.5V16H1v4c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2v-4h-2zM5 4.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V16H5V4.5zM3 20v-2h18v2H3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        501578: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                o = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 4.5C5 3.12 6.12 2 7.5 2h9C17.88 2 19 3.12 19 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-9C6.12 22 5 20.88 5 19.5v-15zM7.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h9c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-9zM15 19H9v-2h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        376278: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                o = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => a, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (n, r, a) => {
                        const i = t ? t(r, a, e) : !!r;
                        return i && n[0].push(r), !i && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-6107ac1a.50e5788a.js.map
