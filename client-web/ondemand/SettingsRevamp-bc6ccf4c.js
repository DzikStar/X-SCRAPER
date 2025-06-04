"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-bc6ccf4c", "icons/IconCookies-js", "icons/IconDeviceTv-js", "icons/IconDraggable-js", "icons/IconNotificationsSecurityAlert-js", "icons/IconTimelineStroke-js"],
    {
        661810: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(325686),
                i = n(392237);
            function a({ spacing: e, style: t }) {
                return r.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != e ? i.default.theme.spaces[e] : void 0 }, t] });
            }
            const l = i.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(325686),
                i = n(191796),
                a = n(58399),
                l = n(731708),
                c = n(952428),
                s = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: m = !1, label: p, link: h, onPress: g, paddingHorizontal: v, renderRightContent: f, role: b = "tab", styleOverride: y, testID: E = "pivot", thumbnail: Z, thumbnailSize: x, withoutArrow: w = !1 } = e,
                        C = [u.thumbnailContainer, "medium" === x && u.thumbnailContainerMedium],
                        z = "string" == typeof p ? r.createElement(l.ZP, null, p) : p,
                        M = "object" == typeof h && h.external && !h.openInSameFrame,
                        D = n ? ("string" == typeof n ? r.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${E}-description` }, n) : n) : null,
                        T = r.useMemo(() => ("space0" === v ? { paddingHorizontal: 0 } : { paddingHorizontal: v ? s.default.theme.spaces[v] : s.default.theme.componentDimensions.gutterHorizontal }), [v]);
                    return r.createElement(c.Z, { "aria-selected": "tab" === b ? m : null, disabled: d, link: d ? void 0 : h, onPress: g, role: b, style: [u.root, T, d && u.disabled, y], testID: E, withInteractiveStyling: !!h || !!g }, r.createElement(o.Z, { style: u.contentContainer }, Z ? r.createElement(o.Z, { style: C }, Z) : null, r.createElement(o.Z, { style: u.content }, z, D), f ? f() : null, (!h && !g) || d || w ? null : M ? r.createElement(i.default, { style: u.icon }) : r.createElement(a.default, { style: u.icon })), t);
                },
                u = s.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${s.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, t, n) => {
            n.d(t, { Z: () => m });
            var r = n(202784),
                o = n(325686),
                i = n(731708),
                a = n(352924),
                l = n(822399),
                c = n(98538),
                s = n(392237);
            const d = (e) => {
                const { decoration: t, isCompact: n, progressBarConfig: d, statConfig: m, title: p, valueCurrent: h, valueMax: g } = e,
                    v = (0, a.F)(),
                    f = ((b = d), s.default.theme.colors[b?.color || "blue900"]);
                var b;
                const y = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    E = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"], height: s.default.theme.spaces[e?.height || "space8"], backgroundColor: s.default.theme.colors.gray50 };
                    })(d);
                return r.createElement(o.Z, { style: u.root }, r.createElement(o.Z, { style: u.decoration }, t), r.createElement(o.Z, { style: u.title }, r.createElement(i.ZP, { size: "subtext2", weight: "medium" }, p)), r.createElement(o.Z, { id: v, style: u.valueLabel }, m.value ? r.createElement(c.Z, null, r.createElement(c.Z.Value, null, m.value), r.createElement(c.Z.Label, null, m.label)) : r.createElement(i.ZP, { weight: "bold" }, m.label)), r.createElement(o.Z, { style: n ? u.progressBarContainerCompact : u.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, r.createElement(l.Z, { "aria-describedby": v, "aria-valuemax": g, colorValue: f, progress: h / g, progressStyle: y, style: E })));
            };
            const u = s.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                m = r.memo(d);
        },
        943401: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(731708),
                i = n(392237);
            class a extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return r.createElement(o.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: n } = this.props,
                        i = l.root;
                    return t && n ? r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: i }, e, " ", this._renderLearnMore()) : r.createElement(o.ZP, { color: "gray700", size: "subtext2", style: i }, e);
                }
            }
            const l = i.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                c = a;
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(202784),
                o = n(325686);
            const i = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                a = function ({ children: e }) {
                    return r.createElement(o.Z, { style: i.root }, e);
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var r = n(202784),
                o = n(325686),
                i = n(827515),
                a = n(461756),
                l = n(731708),
                c = n(392237);
            const s = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, i.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = c.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [g, v] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
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
                                if (a.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, i.Z)(e.count) && g.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, v));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            f.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, v));
                        }, [g.animating, g.oldText]),
                        r.useMemo(() => {
                            const e = m[g.transitionDirection],
                                t = g.oldText && !a.Z.reducedMotionEnabled,
                                i = !g.animating && g.oldText && !a.Z.reducedMotionEnabled,
                                c = { ...p, ...(g.animating ? e.post : e.active) },
                                s = { ...(i ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: c }, r.createElement(l.ZP, d, g.oldText)) : null,
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
                                    r.createElement(l.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, f, v])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                i = n(731708),
                a = n(891198),
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
                            return (0, a.Gb)(e) !== (0, a.wl)(e) ? { label: (0, a.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: o } = this.props;
                    return r.createElement(i.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                r.createElement(
                    o.Z,
                    { style: [m.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(o.Z, { key: t, style: t < n.length - 1 && m.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(i.ZP, { children: e, color: n ? "white" : "gray700", size: s, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: o, weight: a = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: c }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: s, style: o, weight: a }) : r.createElement(i.ZP, { children: t, color: c ? "white" : "text", size: s, style: o, weight: a }))));
            const m = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
        851386: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M20.906 12.499l1.145.035-.189 1.13-.986-.165.03-1zm-.03 1l.986.165c-.793 4.731-4.905 8.337-9.862 8.337-5.523 0-10-4.477-10-10S6.477 2 12 2h.111l1.21.013-.24 1.186c-.052.258-.08.526-.08.801 0 2.209 1.791 4 4 4h.025l1.139-.007-.141 1.131c-.015.123-.023.248-.023.376 0 1.625 1.293 2.949 2.906 2.999l-.03 1zm-1.219.802c-1.975-.553-3.439-2.279-3.615-4.384-2.835-.456-5.004-2.892-5.038-5.848C7.057 4.561 4.001 7.92 4.001 12c0 4.418 3.582 8 8 8 3.617 0 6.668-2.404 7.657-5.7zM8.5 13.001c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm0-6c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm6 8c-.828 0-1.5.672-1.5 1.5s.672 1.5 1.5 1.5 1.5-.672 1.5-1.5-.672-1.5-1.5-1.5zm-.5-3.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5.672 1.5 1.5 1.5 1.5-.672 1.5-1.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        875782: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1 4.5c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2h-6v2h2c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2v-2H3c-1.105 0-2-.895-2-2v-11zm10 15h2v-2h-2v2zm-8-14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v9c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        678773: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        503089: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23.098 17.97l-8.62-14.93c-.54-.94-1.51-1.5-2.6-1.5h-.02c-1.09 0-2.06.58-2.6 1.53L.888 18c-.53.94-.52 2.06.03 2.99.54.92 1.49 1.47 2.55 1.47h17.07c1.06 0 2.02-.55 2.56-1.48.54-.94.54-2.07 0-3.01z", fill: "#F4212E" }), r.createElement("path", { d: "M11.998 18.89c-.76 0-1.38-.62-1.38-1.38s.62-1.37 1.38-1.37 1.37.61 1.37 1.37-.61 1.38-1.37 1.38zm1.72-9.03l-.93 4.39c-.07.38-.4.64-.79.64s-.71-.26-.8-.64l-.93-4.39c-.1-.52.03-1.06.36-1.47.67-.83 2.07-.83 2.74 0 .33.41.46.95.35 1.47z", fill: "#FFF" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        47286: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                i = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M5 5c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2H5zm2.5 5.75c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zM11 13h7v-2h-7v2zm0 4h4v-2h-4v2zm8.5-10C20.88 7 22 8.12 22 9.5v9c0 1.38-1.12 2.5-2.5 2.5h-15C3.12 21 2 19.88 2 18.5v-9C2 8.12 3.12 7 4.5 7h15zM4 18.5c0 .28.22.5.5.5h15c.28 0 .5-.22.5-.5v-9c0-.28-.22-.5-.5-.5h-15c-.28 0-.5.22-.5.5v9z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        662678: (e, t, n) => {
            n.d(t, { G: () => o, Z: () => r });
            n(136728);
            const r = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (n, r, o) => {
                        const i = t ? t(r, o, e) : !!r;
                        return i && n[0].push(r), !i && n[1].push(r), n;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-bc6ccf4c.bf20314a.js.map
