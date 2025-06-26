"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-bc6ccf4c", "icons/IconActivity-js", "icons/IconDeviceUnknown-js", "icons/IconDraggable-js", "icons/IconFireStroke-js", "icons/IconPlayCircle-js"],
    {
        661810: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                a = n(325686),
                o = n(392237);
            function i({ spacing: e, style: t }) {
                return r.createElement(a.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                a = n(476984),
                o = n.n(a),
                i = n(143778),
                l = n(750410),
                c = n(682830);
            const s = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class g extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: o, loadingMessage: i, onRequestRetry: d, render: g, renderFailure: h, retryMessage: p, retryable: v } = this.props;
                    switch (a) {
                        case s:
                            return v ? r.createElement(l.Z, { icon: o, onRequestRetry: d, retryMessage: p }) : n ? r.createElement(c.m, { failureMessage: n }) : h();
                        case u:
                            return r.createElement(c.J, { "aria-label": e, color: t, loadingMessage: i });
                        case m:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        536606: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                a = n(325686),
                o = n(731708),
                i = n(352924),
                l = n(822399),
                c = n(98538),
                s = n(392237);
            const d = (e) => {
                const { decoration: t, isCompact: n, progressBarConfig: d, statConfig: m, title: g, valueCurrent: h, valueMax: p } = e,
                    v = (0, i.F)(),
                    f = ((b = d), s.default.theme.colors[b?.color || "blue900"]);
                var b;
                const Z = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    y = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"], height: s.default.theme.spaces[e?.height || "space8"], backgroundColor: s.default.theme.colors.gray50 };
                    })(d);
                return r.createElement(a.Z, { style: u.root }, r.createElement(a.Z, { style: u.decoration }, t), r.createElement(a.Z, { style: u.title }, r.createElement(o.ZP, { size: "subtext2", weight: "medium" }, g)), r.createElement(a.Z, { id: v, style: u.valueLabel }, m.value ? r.createElement(c.Z, null, r.createElement(c.Z.Value, null, m.value), r.createElement(c.Z.Label, null, m.label)) : r.createElement(o.ZP, { weight: "bold" }, m.label)), r.createElement(a.Z, { style: n ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, r.createElement(l.Z, { "aria-describedby": v, "aria-valuemax": p, colorValue: f, progress: h / p, progressStyle: Z, style: y })));
            };
            const u = s.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = r.memo(d);
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                a = n(325686);
            const o = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                i = function ({ children: e }) {
                    return r.createElement(a.Z, { style: o.root }, e);
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var r = n(202784),
                a = n(325686),
                o = n(827515),
                i = n(461756),
                l = n(731708),
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
            const g = { position: "absolute" },
                h = c.default.create({ root: { overflow: "hidden" } }),
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
                                if (i.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
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
                                t = p.oldText && !i.Z.reducedMotionEnabled,
                                o = !p.animating && p.oldText && !i.Z.reducedMotionEnabled,
                                c = { ...g, ...(p.animating ? e.post : e.active) },
                                s = { ...(o ? e.pre : e.active) };
                            return r.createElement(
                                a.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(l.ZP, d, p.oldText)) : null,
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
                                    r.createElement(l.ZP, d, p.text),
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
                o = n(731708),
                i = n(891198),
                l = n(280278),
                c = n(392237);
            const s = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
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
                (u.Value = ({ animated: e, children: t, count: n, style: a, weight: i = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: c }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: s, style: a, weight: i }) : r.createElement(o.ZP, { children: t, color: c ? "white" : "text", size: s, style: a, weight: i }))));
            const m = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                g = u;
        },
        546351: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        932466: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13zm6.07 6.96l.99-.79c.33-.26.56-.53.7-.8.15-.27.22-.57.22-.91 0-.41-.12-.74-.38-.97s-.62-.35-1.09-.35-.85.12-1.13.37c-.26.25-.4.59-.4 1.03 0 .2.03.42.08.65l-2.07-.15c-.06-.29-.09-.55-.09-.79 0-.84.33-1.51.98-2.01.67-.49 1.55-.74 2.66-.74 1.17 0 2.07.24 2.71.73.63.48.95 1.16.95 2.04 0 .98-.47 1.86-1.4 2.65l-.87.73c-.17.15-.29.28-.36.4-.06.11-.09.26-.09.45v.46h-2.1v-.67c0-.3.06-.55.17-.75.12-.2.29-.39.52-.58zm-.52 5.17c.24.25.56.37.93.37.39 0 .7-.12.94-.37.25-.25.37-.56.37-.94 0-.39-.12-.7-.37-.95-.24-.25-.55-.37-.94-.37-.37 0-.69.12-.93.37s-.36.56-.36.95c0 .38.12.69.36.94z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        678773: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        376278: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11 1.28v.09c0 1.79 0 3.53-.829 5.18-.42-.78-1.061-1.36-1.707-1.94l-.268-.24c-.501 1-1.151 1.98-1.807 2.97C4.959 9.5 3.5 11.7 3.5 14.25c0 2.52.949 4.55 2.538 5.94 1.437 1.26 3.334 1.94 5.378 2.04.122.01.539.02.584.02 4.615 0 8.5-3.37 8.5-8C20.5 8.29 15.797 4 11 1.28zm2.534 18.08c-.521.56-1.144.87-1.681.89-.111 0-.221-.01-.331-.01-.454-.05-.684-.23-.82-.41-.192-.24-.313-.64-.313-1.14 0-.75.362-1.26 1.214-2.02.166-.14.35-.3.548-.46.47-.4 1.017-.86 1.56-1.41l.031.07c.35.83.647 1.78.647 2.54 0 .65-.317 1.38-.855 1.95zm2.572-.42c.18-.48.283-1 .283-1.53 0-1.17-.429-2.43-.804-3.32-.194-.46-.388-.85-.533-1.13-.073-.14-1.02-1.78-1.02-1.78l-.901 1.23c-.678.92-1.425 1.55-2.18 2.19-.224.19-.449.38-.673.58-.94.83-1.889 1.85-1.889 3.51 0 .22.014.44.047.67C6.673 18.38 5.5 16.6 5.5 14.25c0-2.01 1.133-3.61 2.246-5.18.284-.4.568-.8.831-1.21.419.89.419 2.18.173 3.08l.117-.11c1.971-1.7 3.514-3.03 3.969-6.06.632.47 1.415 1.12 2.195 1.93 1.79 1.84 3.469 4.42 3.469 7.55 0 1.92-.921 3.61-2.394 4.69z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        234558: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                a = n(890601),
                o = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M9.5 16.45v-8.9l7 4.45-7 4.45zM22.25 12c0 5.66-4.589 10.25-10.25 10.25S1.75 17.66 1.75 12 6.339 1.75 12 1.75 22.25 6.34 22.25 12zM12 20.25c4.556 0 8.25-3.69 8.25-8.25S16.556 3.75 12 3.75 3.75 7.44 3.75 12s3.694 8.25 8.25 8.25z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-bc6ccf4c.afc238da.js.map
