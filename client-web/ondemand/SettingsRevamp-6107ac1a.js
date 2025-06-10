"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-6107ac1a", "icons/IconActivity-js", "icons/IconBookStrokeOn-js", "icons/IconDeviceLaptop-js", "icons/IconDeviceUnknown-js"],
    {
        520512: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r,
                a,
                i = { fragment: { argumentDefinitions: (r = [{ defaultValue: null, kind: "LocalArgument", name: "allowGamblingAds" }]), kind: "Fragment", metadata: null, name: "AdsCategoriesMutation", selections: (a = [{ alias: null, args: [{ kind: "Variable", name: "allow_gambling_ads", variableName: "allowGamblingAds" }], kind: "ScalarField", name: "user_preferences_put", storageKey: null }]), type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: r, kind: "Operation", name: "AdsCategoriesMutation", selections: a }, params: { id: "eRWyTnzFgPgv9D4W8ujf6A", metadata: {}, name: "AdsCategoriesMutation", operationKind: "mutation", text: null } };
            i.hash = "58347e2cd632b3c8fb00f7f08a6b5c7d";
            const l = i;
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
            n.d(t, { Z: () => l });
            var r = n(202784),
                a = n(325686),
                i = n(392237);
            function l({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                a = n(476984),
                i = n.n(a),
                l = n(143778),
                o = n(750410),
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
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: i, loadingMessage: l, onRequestRetry: d, render: g, renderFailure: h, retryMessage: p, retryable: v } = this.props;
                    switch (a) {
                        case c:
                            return v ? r.createElement(o.Z, { icon: i, onRequestRetry: d, retryMessage: p }) : n ? r.createElement(s.m, { failureMessage: n }) : h();
                        case u:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case m:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        536606: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                a = n(325686),
                i = n(731708),
                l = n(352924),
                o = n(822399),
                s = n(98538),
                c = n(392237);
            const d = (e) => {
                const { decoration: t, isCompact: n, progressBarConfig: d, statConfig: m, title: g, valueCurrent: h, valueMax: p } = e,
                    v = (0, l.F)(),
                    f = ((y = d), c.default.theme.colors[y?.color || "blue900"]);
                var y;
                const b = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    Z = (function (e) {
                        return { borderRadius: c.default.theme.borderRadii[e?.borderRadii || "medium"], height: c.default.theme.spaces[e?.height || "space8"], backgroundColor: c.default.theme.colors.gray50 };
                    })(d);
                return r.createElement(a.Z, { style: u.root }, r.createElement(a.Z, { style: u.decoration }, t), r.createElement(a.Z, { style: u.title }, r.createElement(i.ZP, { size: "subtext2", weight: "medium" }, g)), r.createElement(a.Z, { id: v, style: u.valueLabel }, m.value ? r.createElement(s.Z, null, r.createElement(s.Z.Value, null, m.value), r.createElement(s.Z.Label, null, m.label)) : r.createElement(i.ZP, { weight: "bold" }, m.label)), r.createElement(a.Z, { style: n ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, r.createElement(o.Z, { "aria-describedby": v, "aria-valuemax": p, colorValue: f, progress: h / p, progressStyle: b, style: Z })));
            };
            const u = c.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = r.memo(d);
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                a = n(325686);
            const i = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = function ({ children: e }) {
                    return r.createElement(a.Z, { style: i.root }, e);
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var r = n(202784),
                a = n(325686),
                i = n(827515),
                l = n(461756),
                o = n(731708),
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
                h = s.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [p, v] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (f.current)
                                if (l.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== p.pendingText) {
                                    t === p.text || ((0, i.Z)(e.count) && p.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), p.animating || u(e.count, t, v));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            f.current &&
                                !1 === p.animating &&
                                (p.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : p.pendingText && u(p.pendingCount, p.pendingText, v));
                        }, [p.animating, p.oldText]),
                        r.useMemo(() => {
                            const e = m[p.transitionDirection],
                                t = p.oldText && !l.Z.reducedMotionEnabled,
                                i = !p.animating && p.oldText && !l.Z.reducedMotionEnabled,
                                s = { ...g, ...(p.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return r.createElement(
                                a.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(o.ZP, d, p.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, v),
                                        style: c,
                                    },
                                    r.createElement(o.ZP, d, p.text),
                                ),
                            );
                        }, [n, d, p, f, v])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                a = n(325686),
                i = n(731708),
                l = n(891198),
                o = n(280278),
                s = n(392237);
            const c = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, l.Gb)(e) !== (0, l.wl)(e) ? { label: (0, l.Gb)(e) } : void 0;
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
                (u.Value = ({ animated: e, children: t, count: n, style: a, weight: l = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? r.createElement(o.ZP, { children: t, count: n, size: c, style: a, weight: l }) : r.createElement(i.ZP, { children: t, color: s ? "white" : "text", size: c, style: a, weight: l }))));
            const m = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = u;
        },
        546351: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        847988: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.2 4c-1.2 0-2.4.5-3.2 1.3-.8-.8-2-1.3-3.2-1.3H1v16h8.2c.8 0 1.4.4 1.8 1.1l.2.3H13c.5-.9 1.1-1.5 2-1.5h8V4h-7.8zM11 18.5c-.6-.3-1.2-.5-1.8-.5H3V6h5.8c.9 0 1.8.5 2.2 1.3v11.2zm10-.5h-6.1c-.7 0-1.3.2-1.9.5V7.3c.5-.8 1.3-1.3 2.2-1.3H21v12zm-2-5v2h-4v-2h4zm0-4v2h-4V9h4zM9 9v2H5V9h4zm0 4v2H5v-2h4z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        762863: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M21 16V4.5C21 3.12 19.88 2 18.5 2h-13C4.12 2 3 3.12 3 4.5V16H1v4c0 1.103.897 2 2 2h18c1.103 0 2-.897 2-2v-4h-2zM5 4.5c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5V16H5V4.5zM3 20v-2h18v2H3z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        932466: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13zm6.07 6.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                a = n(890601),
                i = n(783427),
                l = n(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-6107ac1a.7140a65a.js.map
