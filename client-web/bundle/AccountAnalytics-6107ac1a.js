(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAnalytics-6107ac1a", "ondemand.Dropdown", "icons/IconLayers-js"],
    {
        797553: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => _ });
            var n = r(807896),
                o = r(202784),
                i = r(878052),
                s = r(325686),
                l = r(666536),
                a = r(815858),
                c = r(67877),
                d = r(743618),
                u = r(745153),
                h = r(666305),
                p = r(667115),
                m = r(175993),
                f = r(365023),
                v = r(292627),
                g = r(224162),
                b = r(386802),
                w = r(537392),
                y = r(392237);
            const E = y.default.create((e) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${e.spaces.space64} * 6)` }, anchor: y.default.absoluteFillObject, mask: { ...y.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...y.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class _ extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: e } = this.props;
                            e && e();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: r, ctrlKey: n, key: o, metaKey: i } = e;
                            !(r || n || i) && "Escape" === o && t();
                        }),
                        (this._receiveBodyRectHelperRef = (e) => {
                            e && this._bodyRectHelperNode !== e && ((this._bodyRectHelperNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveAnchorRef = (e) => {
                            e && this._anchorNode !== e && ((this._anchorNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveContentRef = (e) => {
                            e && this._contentNode !== e && ((this._contentNode = e), this._scheduleUpdate(), this._observe(e));
                        }),
                        (this._observe = (e) => {
                            const t = () => {
                                this._scheduleUpdate();
                            };
                            h.Z.observe(e, t),
                                this._disposeResizeObserver?.(),
                                (this._disposeResizeObserver = () => {
                                    h.Z.unobserve(e, t), (this._disposeResizeObserver = void 0);
                                });
                        }),
                        (this._updatePosition = () => {
                            if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                            const e = "rtl" === this._languageDirection,
                                t = this._contentNode.scrollHeight,
                                r = this._contentNode.scrollWidth,
                                { left: n, top: o, width: i } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: s, width: l } = (0, w.iv)();
                            let a = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (a = { ...a, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (a = this._anchorNode.getBoundingClientRect());
                            const { height: c, left: d, top: u, width: h } = a,
                                p = l - i,
                                m = d - n,
                                f = u - o,
                                v = d + h >= r,
                                g = u + c >= t,
                                b = l - d >= r,
                                y = s - u >= t,
                                E = l >= d + h / 2 + r / 2 && d >= r / 2 - h / 2,
                                _ = this.props.preferredVerticalOrientation,
                                N = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                C = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: r }) => ((t && e) || (!t && !e) ? r : t ? "up" : "down"))({ verticalPreference: _, canOrientUp: g, canOrientDown: y }),
                                D = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: r, horizontalPreference: n }) => ("center" === n && e ? "center" : !t || ("left" !== n && r) ? "right" : "left"))({ horizontalPreference: N, canOrientLeft: v, canOrientRight: b, canOrientCenter: E }),
                                Z = this.props.isFixed ? d : m,
                                O = this.props.isFixed ? u : f,
                                F = "up" === C ? O + c - t : O;
                            let M = l - Z - h - p;
                            "center" === D && (M = l - Z - h / 2 - r / 2 - p), "right" === D && (M = l - Z - r - p), this.setState({ top: Math.max(F, 0), right: M, verticalOrientation: C, horizontalOrientation: D });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, c.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, l.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), i.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), i.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: e, animateType: t, children: r, contentStyle: i, disableMask: l, isFixed: c, onDismiss: h, preventFocusShift: _, withKeyboardNavigation: N } = this.props,
                        { right: C, top: D, verticalOrientation: Z } = this.state,
                        O = void 0 === D,
                        F = N ? d.Z : o.Fragment,
                        M = `calc(100vh - ${D || 0}px)`,
                        R = (d) => {
                            const u = "rtl" === d,
                                p = [E.content, O && E.contentInitialRender, c && [E.contentFixed, { maxHeight: M }], { top: D, end: u ? void 0 : C, start: u ? C : void 0 }, i];
                            return o.createElement(
                                o.Fragment,
                                null,
                                l ? null : o.createElement(s.Z, { onClick: h, style: E.mask }),
                                o.createElement(s.Z, { ref: this._receiveBodyRectHelperRef, style: E.bodyRectHelper }),
                                o.createElement(w.ZP, null, ({ windowWidth: i }) => o.createElement(s.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [i < y.default.theme.breakpoints.medium ? E.rootNarrow : E.rootWide, p] }, O && "slide" === t ? r : o.createElement(a.Z, { animateMount: "up" !== Z, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => o.createElement(f.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => o.createElement(s.Z, (0, n.Z)({ ref: e() }, t({})), r))))),
                            );
                        };
                    return o.createElement(
                        g.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            o.createElement(
                                s.Z,
                                { ref: this._receiveAnchorRef, style: E.anchor },
                                o.createElement(
                                    v.Z.Dropdown,
                                    null,
                                    o.createElement(m.Z.Consumer, null, (t) => o.createElement(b.Z.Consumer, null, ({ isModal: r }) => o.createElement(p.Z, { history: t, isModal: r, onDismiss: h }, _ ? R(e) : o.createElement(u.Z, null, o.createElement(F, null, R(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            _.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        98538: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var n = r(202784),
                o = r(325686),
                i = r(731708),
                s = r(891198),
                l = r(280278),
                a = r(392237);
            const c = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, s.Gb)(e) !== (0, s.wl)(e) ? { label: (0, s.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: o } = this.props;
                    return n.createElement(i.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: o }, n.createElement(d.Provider, { value: { onMedia: r } }, e));
                }
            }
            (u.Group = (e) =>
                n.createElement(
                    o.Z,
                    { style: [h.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => n.createElement(o.Z, { key: t, style: t < r.length - 1 && h.groupItemNonLast }, e)),
                )),
                (u.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: r }) => n.createElement(i.ZP, { children: e, color: r ? "white" : "gray700", size: c, style: t }))),
                (u.Value = ({ animated: e, children: t, count: r, style: o, weight: s = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: a }) => (e ? n.createElement(l.ZP, { children: t, count: r, size: c, style: o, weight: s }) : n.createElement(i.ZP, { children: t, color: a ? "white" : "text", size: c, style: o, weight: s }))));
            const h = a.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                p = u;
        },
        819483: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            var n = r(202784),
                o = r(325686),
                i = r(123588),
                s = r(212145),
                l = r(382880),
                a = r(516951),
                c = r(731708),
                d = r(392237);
            const u = (e) => {
                    const { columns: t, onNearEnd: r, onRowClick: d, rows: u, setSortOptions: p, sortOptions: m } = e,
                        f = n.useRef(null),
                        v = n.useMemo(() => t.reduce((e, t) => e + t.width, 0), [t]),
                        g = n.useMemo(() => (0, l.Z)(r || a.Z), [r]);
                    n.useEffect(() => {
                        if (u.length) {
                            const e = new IntersectionObserver(
                                    (e) => {
                                        e && e.length > 0 && e[0].isIntersecting && g();
                                    },
                                    { threshold: 1 },
                                ),
                                { current: t } = f || {};
                            return (
                                t && e.observe(t),
                                () => {
                                    t && e.unobserve(t);
                                }
                            );
                        }
                    }, [f, g, u.length]);
                    return n.createElement(
                        o.Z,
                        { style: h.tableContainer },
                        n.createElement(
                            "table",
                            { style: h.table },
                            n.createElement(
                                "thead",
                                null,
                                n.createElement(
                                    "tr",
                                    { style: h.row },
                                    t.map((e) =>
                                        n.createElement(
                                            "th",
                                            {
                                                key: e.field,
                                                onClick: () =>
                                                    ((e, t = !1) => {
                                                        if (!t || !p) return;
                                                        p({ sortField: e, sortOrder: e === m?.sortField ? ("ASCENDING" === m?.sortOrder ? "DESCENDING" : "ASCENDING") : "DESCENDING" });
                                                    })(e.field, e.sortable),
                                                style: { width: `${Math.floor((100 * e.width) / v)}%`, ...h.tableHeading },
                                            },
                                            n.createElement(c.ZP, { weight: "bold" }, e.label),
                                            e.field === m?.sortField && ("ASCENDING" === m?.sortOrder ? n.createElement(i.default, null) : n.createElement(s.default, null)),
                                        ),
                                    ),
                                ),
                            ),
                            n.createElement(
                                "tbody",
                                null,
                                u.map((e, r) =>
                                    n.createElement(
                                        "tr",
                                        { key: r, onClick: () => d(e), ref: r === u.length - 5 ? f : null, style: { ...h.row, ...(d && { cursor: "pointer" }) } },
                                        t.map((t, o) => n.createElement("td", { key: `${r}-${o}`, style: h.cell }, n.createElement(c.ZP, null, e[t.field]))),
                                    ),
                                ),
                            ),
                        ),
                    );
                },
                h = d.default.create((e) => ({ tableContainer: { overflowY: "auto", height: "100%" }, table: { borderCollapse: "collapse" }, tableHeading: { textAlign: "start", padding: e.spaces.space8, position: "sticky", top: 0, backgroundColor: e.colors.gray0, zIndex: 1 }, row: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, cell: { padding: e.spaces.space8, fontVariantNumeric: "tabular-nums" } }));
        },
        67877: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => n });
            const n = (e, t) => {
                let r = null;
                const n = () => {
                    (r = null), e();
                };
                return () => (r || (r = t(n)), r);
            };
        },
        183806: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => n });
            const n = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        275450: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { default: () => a });
            var n = r(202784),
                o = r(890601),
                i = r(783427),
                s = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M2 8.5C2 7.12 3.12 6 4.5 6h11C16.88 6 18 7.12 18 8.5v11c0 1.38-1.12 2.5-2.5 2.5h-11C3.12 22 2 20.88 2 19.5v-11zM19.5 4c.28 0 .5.22.5.5v13.45c1.14-.23 2-1.24 2-2.45v-11C22 3.12 20.88 2 19.5 2h-11c-1.21 0-2.22.86-2.45 2H19.5z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const a = l;
        },
        666536: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => i });
            var n = r(936386),
                o = r.n(n);
            const i = (e, t, r) => o()(e, t, r);
        },
        936386: (e) => {
            function t(e, t, r) {
                var n, o, i, s, l;
                function a() {
                    var c = Date.now() - s;
                    c < t && c >= 0 ? (n = setTimeout(a, t - c)) : ((n = null), r || ((l = e.apply(i, o)), (i = o = null)));
                }
                null == t && (t = 100);
                var c = function () {
                    (i = this), (o = arguments), (s = Date.now());
                    var c = r && !n;
                    return n || (n = setTimeout(a, t)), c && ((l = e.apply(i, o)), (i = o = null)), l;
                };
                return (
                    (c.clear = function () {
                        n && (clearTimeout(n), (n = null));
                    }),
                    (c.flush = function () {
                        n && ((l = e.apply(i, o)), (i = o = null), clearTimeout(n), (n = null));
                    }),
                    c
                );
            }
            (t.debounce = t), (e.exports = t);
        },
        544044: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => l });
            var n = r(150729),
                o = r(595873);
            function i(e, t) {
                const r = +(0, n.Q)(e);
                return (0, o.L)(e, r + t);
            }
            var s = r(31418);
            function l(e, t) {
                return i(e, t * s.vh);
            }
        },
        777617: (e, t, r) => {
            "use strict";
            r.d(t, { z: () => i });
            var n = r(150729),
                o = r(595873);
            function i(e, t) {
                const r = (0, n.Q)(e);
                if (isNaN(t)) return (0, o.L)(e, NaN);
                if (!t) return r;
                const i = r.getDate(),
                    s = (0, o.L)(e, r.getTime());
                s.setMonth(r.getMonth() + t + 1, 0);
                return i >= s.getDate() ? s : (r.setFullYear(s.getFullYear(), s.getMonth(), i), r);
            }
        },
        991809: (e, t, r) => {
            "use strict";
            r.d(t, { j: () => o });
            var n = r(178016);
            function o(e, t) {
                const r = 7 * t;
                return (0, n.E)(e, r);
            }
        },
        112385: (e, t, r) => {
            "use strict";
            r.d(t, { B: () => o });
            var n = r(777617);
            function o(e, t) {
                return (0, n.z)(e, 12 * t);
            }
        },
        513761: (e, t, r) => {
            "use strict";
            r.d(t, { T: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return 12 * (r.getFullYear() - o.getFullYear()) + (r.getMonth() - o.getMonth());
            }
        },
        364597: (e, t, r) => {
            "use strict";
            r.d(t, { i: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e);
                return t.setHours(23, 59, 59, 999), t;
            }
        },
        428332: (e, t, r) => {
            "use strict";
            r.d(t, { g: () => o });
            var n = r(560307);
            function o(e) {
                return (0, n.v)(e, { weekStartsOn: 1 });
            }
        },
        242359: (e, t, r) => {
            "use strict";
            r.d(t, { V: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(23, 59, 59, 999), t;
            }
        },
        560307: (e, t, r) => {
            "use strict";
            r.d(t, { v: () => i });
            var n = r(150729),
                o = r(803066);
            function i(e, t) {
                const r = (0, o.j)(),
                    i = t?.weekStartsOn ?? t?.locale?.options?.weekStartsOn ?? r.weekStartsOn ?? r.locale?.options?.weekStartsOn ?? 0,
                    s = (0, n.Q)(e),
                    l = s.getDay(),
                    a = 6 + (l < i ? -7 : 0) - (l - i);
                return s.setDate(s.getDate() + a), s.setHours(23, 59, 59, 999), s;
            }
        },
        889957: (e, t, r) => {
            "use strict";
            r.d(t, { h: () => o });
            var n = r(150729);
            function o(e) {
                return (0, n.Q)(e).getTime();
            }
        },
        323568: (e, t, r) => {
            "use strict";
            r.d(t, { Q: () => o });
            var n = r(150729);
            function o(e) {
                return Math.trunc(+(0, n.Q)(e) / 1e3);
            }
        },
        242268: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => d });
            var n = r(31418),
                o = r(262014),
                i = r(537796);
            function s(e, t, r) {
                const s = (0, o.z)(e, r),
                    l = (0, o.z)(t, r),
                    a = +s - (0, i.D)(s),
                    c = +l - (0, i.D)(l);
                return Math.round((a - c) / n.jE);
            }
            var l = r(150729);
            function a(e) {
                const t = (0, l.Q)(e),
                    r = t.getMonth();
                return t.setFullYear(t.getFullYear(), r + 1, 0), t.setHours(0, 0, 0, 0), t;
            }
            var c = r(200210);
            function d(e, t) {
                return s(a(e), (0, c.N)(e), t) + 1;
            }
        },
        251461: (e, t, r) => {
            "use strict";
            r.d(t, { A: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getTime() > o.getTime();
            }
        },
        871502: (e, t, r) => {
            "use strict";
            r.d(t, { R: () => o });
            var n = r(150729);
            function o(e, t) {
                return +(0, n.Q)(e) < +(0, n.Q)(t);
            }
        },
        395121: (e, t, r) => {
            "use strict";
            r.d(t, { L: () => o });
            var n = r(150729);
            function o(e) {
                return 5 === (0, n.Q)(e).getDay();
            }
        },
        251418: (e, t, r) => {
            "use strict";
            r.d(t, { K: () => o });
            var n = r(808106);
            function o(e, t) {
                return +(0, n.b)(e) == +(0, n.b)(t);
            }
        },
        964971: (e, t, r) => {
            "use strict";
            r.d(t, { x: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getFullYear() === o.getFullYear() && r.getMonth() === o.getMonth();
            }
        },
        513371: (e, t, r) => {
            "use strict";
            r.d(t, { F: () => o });
            var n = r(150729);
            function o(e, t) {
                const r = (0, n.Q)(e),
                    o = (0, n.Q)(t);
                return r.getFullYear() === o.getFullYear();
            }
        },
        460556: (e, t, r) => {
            "use strict";
            r.d(t, { F: () => o });
            var n = r(150729);
            function o(e) {
                let t;
                return (
                    e.forEach(function (e) {
                        const r = (0, n.Q)(e);
                        (void 0 === t || t < r || isNaN(Number(r))) && (t = r);
                    }),
                    t || new Date(NaN)
                );
            }
        },
        346365: (e, t, r) => {
            "use strict";
            r.d(t, { V: () => o });
            var n = r(150729);
            function o(e) {
                let t;
                return (
                    e.forEach((e) => {
                        const r = (0, n.Q)(e);
                        (!t || t > r || isNaN(+r)) && (t = r);
                    }),
                    t || new Date(NaN)
                );
            }
        },
        961596: (e, t, r) => {
            "use strict";
            r.d(t, { c: () => l });
            var n = r(178016),
                o = r(150729);
            function i(e) {
                return (0, o.Q)(e).getDay();
            }
            function s(e, t) {
                let r = t - i(e);
                return r <= 0 && (r += 7), (0, n.E)(e, r);
            }
            function l(e) {
                return s(e, 5);
            }
        },
        663233: (e, t, r) => {
            "use strict";
            r.d(t, { q: () => s });
            var n = r(595873),
                o = r(150729);
            function i(e) {
                const t = (0, o.Q)(e),
                    r = t.getFullYear(),
                    i = t.getMonth(),
                    s = (0, n.L)(e, 0);
                return s.setFullYear(r, i + 1, 0), s.setHours(0, 0, 0, 0), s.getDate();
            }
            function s(e, t) {
                const r = (0, o.Q)(e),
                    s = r.getFullYear(),
                    l = r.getDate(),
                    a = (0, n.L)(e, 0);
                a.setFullYear(s, t, 15), a.setHours(0, 0, 0, 0);
                const c = i(a);
                return r.setMonth(t, Math.min(l, c)), r;
            }
        },
        876346: (e, t, r) => {
            "use strict";
            r.d(t, { M: () => i });
            var n = r(595873),
                o = r(150729);
            function i(e, t) {
                const r = (0, o.Q)(e);
                return isNaN(+r) ? (0, n.L)(e, NaN) : (r.setFullYear(t), r);
            }
        },
        200210: (e, t, r) => {
            "use strict";
            r.d(t, { N: () => o });
            var n = r(150729);
            function o(e) {
                const t = (0, n.Q)(e);
                return t.setDate(1), t.setHours(0, 0, 0, 0), t;
            }
        },
        524145: (e, t, r) => {
            "use strict";
            r.d(t, { l: () => l });
            var n = r(733936),
                o = r(777617);
            function i(e, t) {
                return (0, o.z)(e, -t);
            }
            var s = r(595873);
            function l(e, t) {
                const { years: r = 0, months: o = 0, weeks: l = 0, days: a = 0, hours: c = 0, minutes: d = 0, seconds: u = 0 } = t,
                    h = i(e, o + 12 * r),
                    p = (0, n.k)(h, a + 7 * l),
                    m = 1e3 * (u + 60 * (d + 60 * c));
                return (0, s.L)(e, p.getTime() - m);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAnalytics-6107ac1a.67f8ae5a.js.map
