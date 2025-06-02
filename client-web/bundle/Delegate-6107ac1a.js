"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-6107ac1a", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        937202: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "AddMemberModal_members", selections: [{ alias: null, args: null, concreteType: "DelegationMembership", kind: "LinkedField", name: "members", plural: !0, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "DelegationGroup", abstractKey: null, hash: "a50917ff28a2d3590cc0ddc6bee97efc" };
            const l = n;
        },
        242454: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(807896),
                l = r(202784),
                o = r(325686),
                a = r(731708),
                i = r(58881),
                s = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const m = i.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return l.createElement(o.Z, { style: d.container }, l.createElement(s.Z, (0, n.Z)({}, u, { interactiveStyles: m, style: d.root }), l.createElement(a.ZP, { align: e, color: t }, r)));
                };
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784),
                l = r(325686),
                o = r(392237);
            function a({ spacing: e, style: t }) {
                return n.createElement(l.Z, { role: "separator", style: [i.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const i = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                l = r(476984),
                o = r.n(l),
                a = r(143778),
                i = r(750410),
                s = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                m = "none";
            class g extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: l, icon: o, loadingMessage: a, onRequestRetry: d, render: g, renderFailure: p, retryMessage: h, retryable: y } = this.props;
                    switch (l) {
                        case c:
                            return y ? n.createElement(i.Z, { icon: o, onRequestRetry: d, retryMessage: h }) : r ? n.createElement(s.m, { failureMessage: r }) : p();
                        case u:
                            return n.createElement(s.J, { "aria-label": e, color: t, loadingMessage: a });
                        case m:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                l = r(325686),
                o = r(235902),
                a = r(885015),
                i = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = o.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return r ? n.createElement(a.Z, { style: !t && c.root, withGutter: !0 }, n.createElement(l.Z, { style: c.gapColumn }, n.createElement(l.Z, { style: [c.gap, d] })), n.createElement(l.Z, { style: c.gapText }, r), n.createElement(l.Z, { style: c.gapColumn }, n.createElement(l.Z, { style: [c.gap, d] }))) : n.createElement(l.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(807896),
                l = r(202784),
                o = r(325686),
                a = r(392237);
            class i extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...a } = this.props,
                        i = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return l.createElement(o.Z, (0, n.Z)({ style: [t, s.root, r && s.withGutter] }, a), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const s = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                l = r(325686),
                o = r(191796),
                a = r(58399),
                i = r(731708),
                s = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: m = !1, label: g, link: p, onPress: h, paddingHorizontal: y, renderRightContent: b, role: f = "tab", styleOverride: v, testID: Z = "pivot", thumbnail: C, thumbnailSize: w, withoutArrow: E = !1 } = e,
                        k = [u.thumbnailContainer, "medium" === w && u.thumbnailContainerMedium],
                        x = "string" == typeof g ? n.createElement(i.ZP, null, g) : g,
                        z = "object" == typeof p && p.external && !p.openInSameFrame,
                        M = r ? ("string" == typeof r ? n.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${Z}-description` }, r) : r) : null,
                        D = n.useMemo(() => ("space0" === y ? { paddingHorizontal: 0 } : { paddingHorizontal: y ? c.default.theme.spaces[y] : c.default.theme.componentDimensions.gutterHorizontal }), [y]);
                    return n.createElement(s.Z, { "aria-selected": "tab" === f ? m : null, disabled: d, link: d ? void 0 : p, onPress: h, role: f, style: [u.root, D, d && u.disabled, v], testID: Z, withInteractiveStyling: !!p || !!h }, n.createElement(l.Z, { style: u.contentContainer }, C ? n.createElement(l.Z, { style: k }, C) : null, n.createElement(l.Z, { style: u.content }, x, M), b ? b() : null, (!p && !h) || d || E ? null : z ? n.createElement(o.default, { style: u.icon }) : n.createElement(a.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        943401: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                l = r(731708),
                o = r(392237);
            class a extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return n.createElement(l.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: r } = this.props,
                        o = i.root;
                    return t && r ? n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: o }, e, " ", this._renderLearnMore()) : n.createElement(l.ZP, { color: "gray700", size: "subtext2", style: o }, e);
                }
            }
            const i = o.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = a;
        },
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                l = r(890601),
                o = r(783427),
                a = r(717683),
                i = r(347101);
            const s = (e = {}) => {
                const t = n.useContext(a.Z),
                    { direction: r } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style, t && i.Z.iconRTL], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                l = r(890601),
                o = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                l = r(890601),
                o = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                l = r(890601),
                o = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(202784),
                l = r(890601),
                o = r(783427),
                a = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => l, Z: () => n });
            r(136728);
            const n = function (e, t) {
                return l(e, t);
            };
            function l(e, t) {
                return e.reduce(
                    (r, n, l) => {
                        const o = t ? t(n, l, e) : !!n;
                        return o && r[0].push(n), !o && r[1].push(n), r;
                    },
                    [[], []],
                );
            }
        },
        730895: (e, t, r) => {
            var n = r(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, r) => {
            var n = r(609859),
                l = r(807400),
                o = r(396616),
                a = r(730895),
                i = r(824229),
                s = n.RegExp,
                c = s.prototype;
            l &&
                i(function () {
                    var e = !0;
                    try {
                        s(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        r = "",
                        n = e ? "dgimsy" : "gimsy",
                        l = function (e, n) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (r += n), !0;
                                },
                            });
                        },
                        o = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var a in (e && (o.hasIndices = "d"), o)) l(a, o[a]);
                    return Object.getOwnPropertyDescriptor(c, "flags").get.call(t) !== n || r !== n;
                }) &&
                o(c, "flags", { configurable: !0, get: a });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-6107ac1a.968db88a.js.map
