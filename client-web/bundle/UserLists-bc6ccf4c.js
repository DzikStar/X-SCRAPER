"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserLists-bc6ccf4c", "icons/IconChevronRight-js", "icons/IconConnectArrows-js", "icons/IconEye-js"],
    {
        242454: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                i = n(731708),
                l = n(58881),
                s = n(530732),
                c = n(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: n, ...u }) => {
                    const h = l.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return o.createElement(a.Z, { style: d.container }, o.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: h, style: d.root }), o.createElement(i.ZP, { align: e, color: t }, n)));
                };
        },
        15038: (e, t, n) => {
            n.d(t, { ZP: () => d });
            var r = n(202784),
                o = n(325686),
                a = n(950822),
                i = n(392237);
            const l = (e) => (0, a.Z)("div", e);
            class s extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: n, style: a } = this.props,
                        { active: i } = this.state,
                        s = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return r.createElement(l, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, a, i && s, i && e] }, r.createElement(o.Z, { style: c.inner }, "function" == typeof n ? n(i) : n));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            s.defaultProps = { allowDragDrop: !0 };
            const c = i.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = s;
        },
        449161: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(807896),
                o = n(202784),
                a = n(111677),
                i = n.n(a),
                l = n(154003),
                s = n(950822),
                c = n(392237);
            const d = i().i5450bec,
                u = i().f7432494;
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                r = n.files;
                            r.length && t && t(r), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: a, testID: i, ...c } = this.props,
                        h = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(l.ZP, (0, r.Z)({ hoverLabel: e ? { label: h ? u : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, s.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: i, type: "file" }));
                }
            }
            h.defaultProps = { disabled: !1, multiple: !1 };
            const p = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                g = h;
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(325686),
                a = n(191796),
                i = n(58399),
                l = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: h = !1, label: p, link: g, onPress: m, paddingHorizontal: v, renderRightContent: f, role: b = "tab", styleOverride: y, testID: E = "pivot", thumbnail: C, thumbnailSize: x, withoutArrow: w = !1 } = e,
                        Z = [u.thumbnailContainer, "medium" === x && u.thumbnailContainerMedium],
                        D = "string" == typeof p ? r.createElement(l.ZP, null, p) : p,
                        _ = "object" == typeof g && g.external && !g.openInSameFrame,
                        z = n ? ("string" == typeof n ? r.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${E}-description` }, n) : n) : null,
                        I = r.useMemo(() => ("space0" === v ? { paddingHorizontal: 0 } : { paddingHorizontal: v ? c.default.theme.spaces[v] : c.default.theme.componentDimensions.gutterHorizontal }), [v]);
                    return r.createElement(s.Z, { "aria-selected": "tab" === b ? h : null, disabled: d, link: d ? void 0 : g, onPress: m, role: b, style: [u.root, I, d && u.disabled, y], testID: E, withInteractiveStyling: !!g || !!m }, r.createElement(o.Z, { style: u.contentContainer }, C ? r.createElement(o.Z, { style: Z }, C) : null, r.createElement(o.Z, { style: u.content }, D, z), f ? f() : null, (!g && !m) || d || w ? null : _ ? r.createElement(a.default, { style: u.icon }) : r.createElement(i.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => m });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                i = n(461756),
                l = n(731708),
                s = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                h = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                g = s.default.create({ root: { overflow: "hidden" } }),
                m = (e) => {
                    const { children: t, containerStyle: n, count: s, ...d } = e,
                        [m, v] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
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
                                else if (t !== m.pendingText) {
                                    t === m.text || ((0, a.Z)(e.count) && m.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), m.animating || u(e.count, t, v));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            f.current &&
                                !1 === m.animating &&
                                (m.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : m.pendingText && u(m.pendingCount, m.pendingText, v));
                        }, [m.animating, m.oldText]),
                        r.useMemo(() => {
                            const e = h[m.transitionDirection],
                                t = m.oldText && !i.Z.reducedMotionEnabled,
                                a = !m.animating && m.oldText && !i.Z.reducedMotionEnabled,
                                s = { ...p, ...(m.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [g.root, n] },
                                t ? r.createElement("span", { style: s }, r.createElement(l.ZP, d, m.oldText)) : null,
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
                                    r.createElement(l.ZP, d, m.text),
                                ),
                            );
                        }, [n, d, m, f, v])
                    );
                };
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(325686),
                a = n(731708),
                i = n(891198),
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
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: o } = this.props;
                    return r.createElement(a.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (u.Group = (e) =>
                r.createElement(
                    o.Z,
                    { style: [h.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(o.Z, { key: t, style: t < n.length - 1 && h.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(a.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: n, style: o, weight: i = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: s }) => (e ? r.createElement(l.ZP, { children: t, count: n, size: c, style: o, weight: i }) : r.createElement(a.ZP, { children: t, color: s ? "white" : "text", size: c, style: o, weight: i }))));
            const h = s.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        58399: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(717683),
                l = n(347101);
            const s = (e = {}) => {
                const t = r.useContext(i.Z),
                    { direction: n } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style, t && l.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: n });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        170397: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        988227: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var r = n(202784),
                o = n(890601),
                a = n(783427),
                i = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserLists-bc6ccf4c.0f33324a.js.map
