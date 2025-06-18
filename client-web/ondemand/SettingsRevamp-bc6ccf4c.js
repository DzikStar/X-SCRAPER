"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-bc6ccf4c", "icons/IconActivity-js", "icons/IconBadgeStroke-js", "icons/IconConnectArrows-js", "icons/IconDeviceTablet-js", "icons/IconDeviceTv-js", "icons/IconIllustrationSparkleOn-js"],
    {
        661810: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                a = n(325686),
                o = n(392237);
            function l({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(476984),
                o = n.n(a),
                l = n(143778),
                i = n(750410),
                c = n(682830);
            const s = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: o, loadingMessage: l, onRequestRetry: d, render: h, renderFailure: g, retryMessage: p, retryable: v } = this.props;
                    switch (a) {
                        case s:
                            return v ? r.createElement(i.Z, { icon: o, onRequestRetry: d, retryMessage: p }) : n ? r.createElement(c.m, { failureMessage: n }) : g();
                        case u:
                            return r.createElement(c.J, { "aria-label": e, color: t, loadingMessage: l });
                        case m:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        536606: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                a = n(325686),
                o = n(731708),
                l = n(352924),
                i = n(822399),
                c = n(98538),
                s = n(392237);
            const d = (e) => {
                const { decoration: t, isCompact: n, progressBarConfig: d, statConfig: m, title: h, valueCurrent: g, valueMax: p } = e,
                    v = (0, l.F)(),
                    f = ((b = d), s.default.theme.colors[b?.color || "blue900"]);
                var b;
                const Z = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    E = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"], height: s.default.theme.spaces[e?.height || "space8"], backgroundColor: s.default.theme.colors.gray50 };
                    })(d);
                return r.createElement(a.Z, { style: u.root }, r.createElement(a.Z, { style: u.decoration }, t), r.createElement(a.Z, { style: u.title }, r.createElement(o.ZP, { size: "subtext2", weight: "medium" }, h)), r.createElement(a.Z, { id: v, style: u.valueLabel }, m.value ? r.createElement(c.Z, null, r.createElement(c.Z.Value, null, m.value), r.createElement(c.Z.Label, null, m.label)) : r.createElement(o.ZP, { weight: "bold" }, m.label)), r.createElement(a.Z, { style: n ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, r.createElement(i.Z, { "aria-describedby": v, "aria-valuemax": p, colorValue: f, progress: g / p, progressStyle: Z, style: E })));
            };
            const u = s.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = r.memo(d);
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(202784),
                a = n(325686);
            const o = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                l = function ({ children: e }) {
                    return r.createElement(a.Z, { style: o.root }, e);
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var r = n(202784),
                a = n(325686),
                o = n(827515),
                l = n(461756),
                i = n(731708),
                c = n(392237);
            const s = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, o.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const h = { position: "absolute" },
                g = c.default.create({ root: { overflow: "hidden" } }),
                p = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [p, v] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
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
                                    t === p.text || ((0, o.Z)(e.count) && p.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), p.animating || u(e.count, t, v));
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
                                o = !p.animating && p.oldText && !l.Z.reducedMotionEnabled,
                                c = { ...h, ...(p.animating ? e.post : e.active) },
                                s = { ...(o ? e.pre : e.active) };
                            return r.createElement(
                                a.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(i.ZP, d, p.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, v),
                                        style: s,
                                    },
                                    r.createElement(i.ZP, d, p.text),
                                ),
                            );
                        }, [n, d, p, f, v])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(325686),
                o = n(731708),
                l = n(891198),
                i = n(280278),
                c = n(392237);
            const s = "subtext1",
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
                    return r.createElement(o.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: a }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
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
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(o.ZP, { children: e, color: n ? "white" : "gray700", size: s, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: a, weight: l = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: c }) => (e ? r.createElement(i.ZP, { children: t, count: n, size: s, style: a, weight: l }) : r.createElement(o.ZP, { children: t, color: c ? "white" : "text", size: s, style: a, weight: l }))));
            const m = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = u;
        },
        546351: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        215380: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm.5 17.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v15zM9 5h6v2H9V5zm3 4.555a2.092 2.092 0 11-.001 4.185A2.092 2.092 0 0112 9.555zM16.141 18H7.859c.237-.763.586-1.431 1.074-1.949 1.036-1.105 2.31-1.277 3.067-1.277s2.031.172 3.067 1.277c.489.518.837 1.186 1.074 1.949z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        170397: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        875516: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM15 19H9v-2h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        875782: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1 4.5c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2h-6v2h2c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2v-2H3c-1.105 0-2-.895-2-2v-11zm10 15h2v-2h-2v2zm-8-14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v9c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        125498: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 36 36", children: r.createElement("g", null, r.createElement("path", { d: "M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z", fill: "#61BCF6" }), r.createElement("path", { d: "M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z", fill: "#F16888" }), r.createElement("path", { d: "M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z", fill: "#FD9E1A" })) }, { writingDirection: t });
            };
            i.metadata = { width: 36, height: 36 };
            const c = i;
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                l = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
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
                        const o = t ? t(r, a, e) : !!r;
                        return o && n[0].push(r), !o && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-bc6ccf4c.f823905a.js.map
