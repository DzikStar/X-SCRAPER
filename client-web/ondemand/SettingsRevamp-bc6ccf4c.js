"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsRevamp-bc6ccf4c", "icons/IconActivity-js", "icons/IconBadgeStroke-js", "icons/IconConnectArrows-js", "icons/IconDeviceTablet-js", "icons/IconDeviceTv-js", "icons/IconIllustrationSparkleOn-js"],
    {
        661810: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                a = r(325686),
                l = r(392237);
            function i({ spacing: e, style: t }) {
                return n.createElement(a.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        779610: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                a = r(325686),
                l = r(191796),
                i = r(58399),
                o = r(731708),
                c = r(952428),
                s = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: u = !1, label: h, link: g, onPress: p, paddingHorizontal: v, renderRightContent: b, role: y = "tab", styleOverride: f, testID: Z = "pivot", thumbnail: w, thumbnailSize: E, withoutArrow: C = !1 } = e,
                        z = [m.thumbnailContainer, "medium" === E && m.thumbnailContainerMedium],
                        x = "string" == typeof h ? n.createElement(o.ZP, null, h) : h,
                        M = "object" == typeof g && g.external && !g.openInSameFrame,
                        H = r ? ("string" == typeof r ? n.createElement(o.ZP, { color: "gray700", size: "subtext2", testID: `${Z}-description` }, r) : r) : null,
                        D = n.useMemo(() => ("space0" === v ? { paddingHorizontal: 0 } : { paddingHorizontal: v ? s.default.theme.spaces[v] : s.default.theme.componentDimensions.gutterHorizontal }), [v]);
                    return n.createElement(c.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : g, onPress: p, role: y, style: [m.root, D, d && m.disabled, f], testID: Z, withInteractiveStyling: !!g || !!p }, n.createElement(a.Z, { style: m.contentContainer }, w ? n.createElement(a.Z, { style: z }, w) : null, n.createElement(a.Z, { style: m.content }, x, H), b ? b() : null, (!g && !p) || d || C ? null : M ? n.createElement(l.default, { style: m.icon }) : n.createElement(i.default, { style: m.icon })), t);
                },
                m = s.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${s.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        536606: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(202784),
                a = r(325686),
                l = r(731708),
                i = r(352924),
                o = r(822399),
                c = r(98538),
                s = r(392237);
            const d = (e) => {
                const { decoration: t, isCompact: r, progressBarConfig: d, statConfig: u, title: h, valueCurrent: g, valueMax: p } = e,
                    v = (0, i.F)(),
                    b = ((y = d), s.default.theme.colors[y?.color || "blue900"]);
                var y;
                const f = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"] };
                    })(d),
                    Z = (function (e) {
                        return { borderRadius: s.default.theme.borderRadii[e?.borderRadii || "medium"], height: s.default.theme.spaces[e?.height || "space8"], backgroundColor: s.default.theme.colors.gray50 };
                    })(d);
                return n.createElement(a.Z, { style: m.root }, n.createElement(a.Z, { style: m.decoration }, t), n.createElement(a.Z, { style: m.title }, n.createElement(l.ZP, { size: "subtext2", weight: "medium" }, h)), n.createElement(a.Z, { id: v, style: m.valueLabel }, u.value ? n.createElement(c.Z, null, n.createElement(c.Z.Value, null, u.value), n.createElement(c.Z.Label, null, u.label)) : n.createElement(l.ZP, { weight: "bold" }, u.label)), n.createElement(a.Z, { style: r ? m.progressBarContainerCompact : m.progressBarContainer, testID: "progressBarStats-progressBarContainer" }, n.createElement(o.Z, { "aria-describedby": v, "aria-valuemax": p, colorValue: b, progress: g / p, progressStyle: f, style: Z })));
            };
            const m = s.default.create((e) => ({ root: { display: "grid", gridTemplateRows: "auto auto", gridTemplateColumns: "min-content auto auto", marginBottom: e.spaces.space16 }, decoration: { gridRow: "1/3", gridColumn: "1/2", fontSize: "30px" }, title: { display: "flex", alignItems: "flex-start" }, valueLabel: { display: "flex", alignItems: "flex-end" }, progressBarContainer: { gridRow: "2/3", gridColumn: "2/4", marginTop: e.spaces.space8 }, progressBarContainerCompact: { gridRow: "2/3", gridColumn: "2/4" } })),
                u = n.memo(d);
        },
        943401: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(202784),
                a = r(731708),
                l = r(392237);
            class i extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return n.createElement(a.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: r } = this.props,
                        l = o.root;
                    return t && r ? n.createElement(a.ZP, { color: "gray700", size: "subtext2", style: l }, e, " ", this._renderLearnMore()) : n.createElement(a.ZP, { color: "gray700", size: "subtext2", style: l }, e);
                }
            }
            const o = l.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                c = i;
        },
        928088: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                a = r(325686);
            const l = r(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                i = function ({ children: e }) {
                    return n.createElement(a.Z, { style: l.root }, e);
                };
        },
        98538: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(202784),
                a = r(325686),
                l = r(731708),
                i = r(891198),
                o = r(280278),
                c = r(392237);
            const s = "subtext1",
                d = n.createContext({ onMedia: !1 });
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, i.Gb)(e) !== (0, i.wl)(e) ? { label: (0, i.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: r, onPress: a } = this.props;
                    return n.createElement(l.ZP, { color: r ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: a }, n.createElement(d.Provider, { value: { onMedia: r } }, e));
                }
            }
            (m.Group = (e) =>
                n.createElement(
                    a.Z,
                    { style: [u.row, e.style] },
                    n.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, r) => n.createElement(a.Z, { key: t, style: t < r.length - 1 && u.groupItemNonLast }, e)),
                )),
                (m.Label = ({ children: e, style: t }) => n.createElement(d.Consumer, null, ({ onMedia: r }) => n.createElement(l.ZP, { children: e, color: r ? "white" : "gray700", size: s, style: t }))),
                (m.Value = ({ animated: e, children: t, count: r, style: a, weight: i = "bold" }) => n.createElement(d.Consumer, null, ({ onMedia: c }) => (e ? n.createElement(o.ZP, { children: t, count: r, size: s, style: a, weight: i }) : n.createElement(l.ZP, { children: t, color: c ? "white" : "text", size: s, style: a, weight: i }))));
            const u = c.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = m;
        },
        546351: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                l = r(783427),
                i = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M9.53 4c.41.01.77.28.91.66l4.14 11.6L16.84 11H22v2h-3.84l-2.74 6.39c-.16.38-.54.62-.95.61s-.77-.28-.91-.66L9.42 7.74 7.16 13H2v-2h3.84l2.74-6.39c.16-.38.54-.62.95-.61z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        215380: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                l = r(783427),
                i = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.5 2h-13A2.5 2.5 0 003 4.5v15A2.5 2.5 0 005.5 22h13a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0018.5 2zm.5 17.5c0 .28-.22.5-.5.5h-13c-.28 0-.5-.22-.5-.5v-15c0-.28.22-.5.5-.5h13c.28 0 .5.22.5.5v15zM9 5h6v2H9V5zm3 4.555a2.092 2.092 0 11-.001 4.185A2.092 2.092 0 0112 9.555zM16.141 18H7.859c.237-.763.586-1.431 1.074-1.949 1.036-1.105 2.31-1.277 3.067-1.277s2.031.172 3.067 1.277c.489.518.837 1.186 1.074 1.949z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        170397: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                l = r(783427),
                i = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        875516: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                l = r(783427),
                i = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M3 4.5C3 3.12 4.12 2 5.5 2h13C19.88 2 21 3.12 21 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-13C4.12 22 3 20.88 3 19.5v-15zM5.5 4c-.28 0-.5.22-.5.5v15c0 .28.22.5.5.5h13c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-13zM15 19H9v-2h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        875782: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                l = r(783427),
                i = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M1 4.5c0-1.105.895-2 2-2h18c1.105 0 2 .895 2 2v11c0 1.105-.895 2-2 2h-6v2h2c.552 0 1 .448 1 1s-.448 1-1 1H7c-.552 0-1-.448-1-1s.448-1 1-1h2v-2H3c-1.105 0-2-.895-2-2v-11zm10 15h2v-2h-2v2zm-8-14c0-.552.448-1 1-1h16c.552 0 1 .448 1 1v9c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1v-9z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        125498: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                l = r(783427),
                i = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 36 36", children: n.createElement("g", null, n.createElement("path", { d: "M35.508 15.41l-9.295-3.387L22.438 1.47c-.108-.302-.357-.48-.722-.495-.322.007-.604.22-.698.53l-3.293 10.71-9.132 3.805c-.285.118-.467.4-.46.708.007.308.203.58.492.686L17.92 20.8l3.775 10.552c.107.298.39.496.704.496h.016c.322-.007.604-.22.698-.53l3.293-10.712 9.132-3.803c.284-.118.466-.4.46-.708-.007-.308-.203-.58-.492-.686z", fill: "#61BCF6" }), n.createElement("path", { d: "M9.57 4.715l-2.906.065-.06-2.715C6.585 1.34 5.983.763 5.256.78 4.53.796 3.955 1.4 3.97 2.125l.063 2.715-2.747.062C.56 4.92-.016 5.522 0 6.248c.017.726.62 1.302 1.346 1.285l2.747-.062.062 2.716c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.062-2.715 2.905-.066c.725-.017 1.3-.62 1.285-1.346-.017-.726-.62-1.302-1.346-1.285z", fill: "#F16888" }), n.createElement("path", { d: "M14.205 29.69l-1.65.036-.034-1.518c-.016-.726-.618-1.302-1.344-1.286s-1.302.62-1.286 1.345l.034 1.518-1.54.035c-.726.016-1.302.62-1.286 1.345.017.726.62 1.302 1.345 1.286l1.54-.034.034 1.518c.017.726.62 1.302 1.345 1.286.726-.016 1.302-.62 1.286-1.345l-.034-1.518 1.65-.037c.726-.016 1.302-.62 1.286-1.345-.016-.727-.62-1.303-1.345-1.286z", fill: "#FD9E1A" })) }, { writingDirection: t });
            };
            o.metadata = { width: 36, height: 36 };
            const c = o;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var n = r(202784),
                a = r(890601),
                l = r(783427),
                i = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const c = o;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => a, Z: () => n });
            r(136728);
            const n = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (r, n, a) => {
                        const l = t ? t(n, a, e) : !!n;
                        return l && r[0].push(n), !l && r[1].push(n), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsRevamp-bc6ccf4c.7b0749fa.js.map
