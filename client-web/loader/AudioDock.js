"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSound-js", "icons/IconSparkle-js"],
    {
        420412: (e, t, r) => {
            r.d(t, { Z: () => c });
            var o = r(202784),
                l = r(325686),
                a = r(235902),
                i = r(885015),
                n = r(392237);
            function c({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: c } = a.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? s[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return r ? o.createElement(i.Z, { style: !t && s.root, withGutter: !0 }, o.createElement(l.Z, { style: s.gapColumn }, o.createElement(l.Z, { style: [s.gap, d] })), o.createElement(l.Z, { style: s.gapText }, r), o.createElement(l.Z, { style: s.gapColumn }, o.createElement(l.Z, { style: [s.gap, d] }))) : o.createElement(l.Z, { style: [!t && s.root, c() && s.rootRedesign, s.gap, d] });
            }
            const s = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(807896),
                l = r(202784),
                a = r(325686),
                i = r(392237);
            class n extends l.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...i } = this.props,
                        n = l.Children.map(e, (e) => e && l.cloneElement(e, { style: [e.props.style, c.column, r && c.withGutterColumn] }));
                    return l.createElement(a.Z, (0, o.Z)({ style: [t, c.root, r && c.withGutter] }, i), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const c = i.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                s = n;
        },
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                i = r(717683),
                n = r(347101);
            const c = (e = {}) => {
                const t = o.useContext(i.Z),
                    { direction: r } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style, t && n.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const c = n;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const c = n;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const c = n;
        },
        926628: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const c = n;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const c = n;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var o = r(202784),
                l = r(890601),
                a = r(783427),
                i = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const c = n;
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => l, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return l(e, t);
            };
            function l(e, t) {
                return e.reduce(
                    (r, o, l) => {
                        const a = t ? t(o, l, e) : !!o;
                        return a && r[0].push(o), !a && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AudioDock.0108594a.js.map
