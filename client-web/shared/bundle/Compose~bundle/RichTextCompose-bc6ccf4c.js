"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c"],
    {
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var o = r(807896),
                n = r(202784),
                a = r(325686),
                i = r(731708),
                s = r(58881),
                l = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const p = s.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(a.Z, { style: d.container }, n.createElement(l.Z, (0, o.Z)({}, u, { interactiveStyles: p, style: d.root }), n.createElement(i.ZP, { align: e, color: t }, r)));
                };
        },
        345128: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(815858),
                a = (r(136728), r(337637));
            const i = Object.freeze({ in: "in", out: "out", static: "static" });
            class s extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isAnimating: !1, renderChildren: o.Children.toArray(this.props.children).map((e) => ({ status: i.static, child: e })) }),
                        (this._handleEachAnimateComplete = () => {
                            const { isAnimating: e } = this.state,
                                { children: t, onAnimateComplete: r } = this.props;
                            e && (r && r(), this.setState({ renderChildren: o.Children.toArray(t).map((e) => ({ status: i.static, child: e })), isAnimating: !1 }));
                        });
                }
                static getDerivedStateFromProps(e, t) {
                    const r = ((e, t) => {
                        let r = 0,
                            o = 0;
                        const n = [];
                        for (; o < e.length; ) {
                            if (r >= t.length) {
                                n.push(...e.slice(o).map((e) => ({ child: e, status: i.out })));
                                break;
                            }
                            const s = t[r],
                                l = e[o];
                            if (s.key === l.key) n.push({ child: s, status: i.static }), (r += 1);
                            else {
                                const e = (0, a.Z)(t, (e) => e.key === l.key);
                                e >= 0 ? (n.push(...t.slice(r, e).map((e) => ({ child: e, status: i.in })), { child: t[e], status: i.static }), (r = e + 1)) : n.push({ child: l, status: i.out });
                            }
                            o += 1;
                        }
                        return r < t.length && n.push(...t.slice(r).map((e) => ({ child: e, status: i.in }))), n;
                    })(
                        t.renderChildren.map((e) => e.child),
                        o.Children.toArray(e.children),
                    );
                    return { renderChildren: r, isAnimating: !r.every((e) => e.status === i.static) };
                }
                render() {
                    const { renderChildren: e } = this.state;
                    return e.map(({ child: e, status: t }) => o.createElement(n.Z, { animateMount: t !== i.static, key: e.key, onAnimateComplete: this._handleEachAnimateComplete, show: t !== i.out }, e));
                }
            }
            const l = s;
        },
        425376: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(202784),
                n = r(325686),
                a = r(494394),
                i = r(530525),
                s = r(731708),
                l = r(439592),
                c = r(154003),
                d = r(769281),
                u = r(30899),
                p = r(138099),
                m = r(392237);
            const h = m.default.create((e) => ({ root: { paddingVertical: e.spacesPx.space32 }, rootWithImage: { paddingTop: 0 }, graphic: { marginBottom: e.spacesPx.space20 }, icon: { alignSelf: "center", height: e.spacesPx.space64, width: e.spacesPx.space64 }, container: { paddingHorizontal: e.spacesPx.space32 }, description: { marginTop: e.spacesPx.space8, marginBottom: e.spacesPx.space4 }, actionButton: { marginTop: e.spacesPx.space16 } })),
                g = ({ actionPrimary: e, actionSecondary: t, children: r, headline: g, icon: y, iconColor: f, image: C, onDismiss: Z, shouldDisplay: b, text: w, withMask: E = !0 }) => {
                    const [x, v] = o.useState(!1),
                        k = (e) => o.createElement(u.Z, { onDismiss: R, renderContent: () => D(R), switchOnlyOnXSmallBreakpoint: !0, visibilityBehavior: a.J.forceVisible, withArrow: !0, withFixedPosition: !0, withMask: E }, e),
                        I = () => o.createElement(p.Z, { onMaskClick: () => R(), type: "center", withMask: !0 }, D(R)),
                        D = (r) => o.createElement(n.Z, { style: [h.root, C && h.rootWithImage] }, P(), o.createElement(n.Z, { style: h.container }, S(), A(), M({ action: e, dismiss: r, type: t && "primaryFilled" }), M({ action: t, dismiss: r }))),
                        P = () => {
                            let e = y && o.createElement(y, { style: f ? [h.icon, { color: m.default.theme.colors[f] }] : h.icon });
                            return C && !d.Z.isEnabled && (e = o.createElement(i.Z, { "aria-label": "", aspectMode: l.Z.exact(2), image: C })), e && o.createElement(n.Z, { style: h.graphic }, e);
                        },
                        S = () => o.createElement(s.ZP, { size: "title3", weight: "heavy" }, g),
                        A = () => o.createElement(s.ZP, { color: "gray700", style: h.description }, w),
                        M = ({ action: e, dismiss: t, type: r }) => e && o.createElement(c.ZP, { link: e.link && e.link, onPress: e.onClick ? e.onClick : t, size: "large", style: h.actionButton, type: r }, e.text),
                        R = () => {
                            Z && Z(), v(!0);
                        };
                    return b && !x ? (r ? k(r) : I()) : r || null;
                };
        },
        130304: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(202784),
                n = r(466999),
                a = r(325686),
                i = r(674132),
                s = r.n(i),
                l = r(408369),
                c = r(764503),
                d = r(392237);
            const u = s().c2fc878d,
                p = s().db11b27f,
                m = (e) => e,
                h = d.default.create(({ colors: e }) => ({ root: { alignItems: "flex-start", minHeight: 30, minWidth: 30 }, center: { alignItems: "center", justifyContent: "center", margin: "auto" }, progressCircle: { transitionDuration: "0.2s", transitionProperty: "opacity" }, hide: { opacity: 0 }, text: { fontSize: 13, lineHeight: "0.8", minWidth: 16, textAlign: "center" }, gray700: { color: e.gray700 }, red500: { color: e.red500 } })),
                g = (e) => {
                    const { count: t, maxCount: r, formatNumber: i = m, warningCount: s } = e,
                        g = r - t,
                        y = g >= 0 ? p({ count: i(g) }) : u({ count: i(t - r) }),
                        f = t >= s ? o.createElement(n.Z, { "aria-atomic": !0, "aria-live": "polite", style: d.default.visuallyHidden }, y) : null,
                        C = (0, l.Z)(g, r),
                        Z = t >= r ? "red500" : t >= s ? "yellow500" : "primary",
                        b = o.createElement(c.Z, { color: Z, progress: C, size: t >= s ? 30 : 20, style: [h.progressCircle, g <= -10 && h.hide] }),
                        w = t >= s ? o.createElement(n.Z, { style: [h.text, g > 0 ? h.gray700 : h.red500] }, i(g)) : null;
                    return o.createElement(a.Z, { style: [h.root, h.center], testID: "countdown-circle" }, f, b, o.createElement(a.Z, { style: [d.default.absoluteFill, h.center] }, w));
                };
        },
        991789: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                n = r(466999),
                a = r(325686),
                i = r(674132),
                s = r.n(i),
                l = r(408369),
                c = r(764503),
                d = r(392237);
            const u = (e) => e;
            function p(e) {
                const { count: t, finalMaxCount: r, finalWarningCount: i, initialMaxCount: s, formatNumber: p = u, initialWarningCount: g } = e,
                    y = s - t,
                    f = r - t;
                let C;
                C = y >= 0 ? h.charactersRemainingInStandardTweetAndTotalMessage({ standardTweetCount: p(y), totalCount: p(f) }) : f >= 0 ? h.charactersRemainingMessage({ count: p(f) }) : h.characterOverLimitMessage({ count: p(t - r) });
                let Z = null;
                t >= g && (Z = o.createElement(n.Z, { "aria-atomic": !0, "aria-live": "polite", style: d.default.visuallyHidden }, C));
                const b = (0, l.Z)(y, s),
                    w = y > 0 || f < 0 ? 0 : (0, l.Z)(f, r);
                let E = "primary";
                t >= r ? (E = "red500") : t >= i && (E = "yellow500");
                const x = o.createElement(c.Z, { color: E, colorInner: E, progress: b, progressInner: w, size: t >= g ? 30 : 20, style: [m.progressCircle, f <= -10 && m.hide] });
                let v = null;
                return t >= g && t < s ? (v = o.createElement(n.Z, { style: [m.text, m.gray700], testID: "dual-phase-countdown-circle-text" }, p(y))) : t >= i && (v = o.createElement(n.Z, { style: [m.text, t > r ? m.red500 : m.white], testID: "dual-phase-countdown-circle-text" }, p(f))), o.createElement(a.Z, { style: [m.root, m.center], testID: "dual-phase-countdown-circle" }, Z, x, o.createElement(a.Z, { style: [d.default.absoluteFill, m.center] }, v));
            }
            const m = d.default.create(({ colors: e }) => ({ root: { alignItems: "flex-start", minHeight: 30, minWidth: 30 }, center: { alignItems: "center", justifyContent: "center", margin: "auto" }, progressCircle: { transitionDuration: "0.2s", transitionProperty: "opacity" }, hide: { opacity: 0 }, text: { fontSize: 13, lineHeight: "0.8", minWidth: 16, textAlign: "center" }, gray700: { color: e.gray700 }, red500: { color: e.red500 }, white: { color: e.white } })),
                h = { characterOverLimitMessage: s().c2fc878d, charactersRemainingInStandardTweetAndTotalMessage: s().f06ae5d3, charactersRemainingMessage: s().db11b27f };
        },
        626820: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var o = r(202784),
                n = r(325686),
                a = r(674132),
                i = r.n(a),
                s = r(797681),
                l = r(837020),
                c = r(530525),
                d = r(731708),
                u = r(439592),
                p = r(154003),
                m = r(879891),
                h = r(352924),
                g = r(392237);
            const y = g.default.create((e) => ({ root: { borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "row", alignItems: "center", width: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, contentContainer: { display: "flex", flexDirection: "row", flex: 1 }, contentTextContainer: { flex: 1, alignItems: "flex-start", justifyContent: "center" }, dismissButton: { paddingStart: e.spaces.space12 }, icon: { color: e.colors.text, marginEnd: e.spaces.space8 }, illustration: { marginEnd: e.spaces.space8, height: e.spaces.space28, width: e.spaces.space28 }, arrow: { borderStyle: "none" }, arrowContainer: { display: "flex", width: "100%", alignItems: "center" }, arrowDirectionUp: { top: e.spacesPx.space4 + e.spacesPx.space2 }, arrowDirectionDown: { top: 0 - e.spacesPx.space4 - e.spacesPx.space2 }, arrowDown: { transform: "rotate(180deg)" }, hidden: { opacity: 0 } })),
                f = g.default.create((e) => ({ primary: { backgroundColor: e.colors.primary0 }, purple: { backgroundColor: e.colors.purple0 }, plum: { backgroundColor: e.colors.plum0 } })),
                C = g.default.create((e) => ({ primary: { color: e.colors.primary0 }, purple: { color: e.colors.purple0 }, plum: { color: e.colors.plum0 } })),
                Z = ({ backgroundColor: e = "primary", containerRef: t, icon: r, illustration: a, onClose: g, text: Z }) => {
                    const b = i().af8fa2ae,
                        w = (0, h.b)(),
                        { direction: E } = (0, m.Z)(),
                        [x, v] = o.useState(Number.MIN_SAFE_INTEGER),
                        [k, I] = o.useState(Number.MIN_SAFE_INTEGER),
                        D = "rtl" === E,
                        P = (e) => {
                            const { top: t } = e.getBoundingClientRect();
                            return k > t;
                        };
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(
                            n.Z,
                            {
                                onLayout: (e) => {
                                    const {
                                        nativeEvent: {
                                            layout: { left: t, top: r, width: o },
                                        },
                                    } = e;
                                    I(r);
                                    v(t + o / 2);
                                },
                            },
                            (() => {
                                const i = !(!t || (k >= 0 && x >= 0)),
                                    m = t?.current ? ((h = t.current), P(h) ? { flexDirection: "column" } : { flexDirection: "column-reverse" }) : void 0;
                                var h;
                                const E = !t?.current || P(t.current),
                                    v = t?.current
                                        ? ((e) => {
                                              const { left: t, width: r } = e.getBoundingClientRect(),
                                                  o = t + r / 2 - x;
                                              return { start: D ? void 0 : o, end: D ? o : void 0 };
                                          })(t.current)
                                        : void 0,
                                    I = t ? ((t, r) => o.createElement(n.Z, { style: [y.arrowContainer, r, t ? y.arrowDirectionUp : y.arrowDirectionDown], testID: "tooltip-arrow" }, o.createElement(s.default, { style: [y.arrow, C[e], !t && y.arrowDown] })))(E, v) : void 0,
                                    S = [m, i && y.hidden];
                                return o.createElement(n.Z, { style: S, testID: "tooltip-content" }, I, o.createElement(n.Z, { style: [y.root, f[e]] }, o.createElement(n.Z, { style: y.contentContainer }, r && !a ? ((M = r), o.createElement(M, { style: [y.icon, { alignItem: "flex-start" }], testID: "tooltip-icon" })) : null, a && !r ? ((A = a), o.createElement(n.Z, { style: y.illustration, testID: "tooltip-illustration" }, o.createElement(c.Z, { "aria-label": "", aspectMode: u.Z.SQUARE, image: A }))) : null, o.createElement(n.Z, { style: y.contentTextContainer }, o.createElement(d.ZP, { id: w }, Z))), g && o.createElement(n.Z, { style: y.dismissButton }, o.createElement(p.ZP, { "aria-describedby": w, "aria-label": b, icon: o.createElement(l.default, { testID: "tooltip-close-icon" }), onPress: g, size: "xSmall", type: "primaryText" }))));
                                var A, M;
                            })(),
                        ),
                    );
                };
        },
        183806: (e, t, r) => {
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        408369: (e, t, r) => {
            function o(e, t) {
                return Math.min(1, 1 - e / t);
            }
            r.d(t, { Z: () => o });
        },
        156474: (e, t, r) => {
            r.d(t, { l: () => o });
            r(202784);
            function o(e) {
                const t = e.store.useState((e) => e),
                    r = e.store.useActions();
                return e.children({ state: t, actions: r });
            }
        },
        685780: (e, t, r) => {
            r.d(t, { Z: () => n });
            var o = r(973710);
            const n = (e, ...t) => (0, o.Z)(e, t);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.RichTextCompose-bc6ccf4c.098b83fa.js.map
