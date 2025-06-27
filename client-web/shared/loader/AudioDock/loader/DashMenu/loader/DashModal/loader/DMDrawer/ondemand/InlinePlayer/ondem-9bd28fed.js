"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed", "icons/IconBirdwatchFlagStroke-js", "icons/IconClosedcaptioningStroke-js", "icons/IconMediaSlowmotion-js", "icons/IconMicrophone-js", "icons/IconMicrophoneStroke-js", "icons/IconShareStrokeBold-js", "icons/IconSound-js"],
    {
        796684: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(202784),
                a = r(325686),
                o = r(913973),
                l = r(516951),
                c = r(731708),
                i = r(454740),
                s = r(58881),
                d = r(530732),
                u = r(392237);
            const h = (e) => {
                    const { "aria-label": t, "aria-posinset": r, "aria-setsize": h, checked: p, containerStyle: v, decoration: b, description: y, disabled: f, label: Z, name: w, onChange: C, testID: E } = e,
                        z = "string" == typeof Z ? n.createElement(c.ZP, { weight: "bold" }, Z) : Z,
                        k = "string" == typeof y,
                        M = y ? (k ? n.createElement(c.ZP, { color: "gray700", style: i.W.description }, y) : n.createElement(a.Z, { style: g.descriptionComponent }, y)) : null,
                        S = s.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, customHoverBackgroundColor: u.default.theme.colors.transparent, customPressedBackgroundColor: u.default.theme.colors.transparent }),
                        B = s.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: p ? u.default.theme.colors.primary : u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(d.Z, { disabled: f, interactiveStyles: S, role: "label", style: [i.W.root, v], testID: E }, (e) => n.createElement(n.Fragment, null, b ? n.createElement(a.Z, { style: i.W.decorationContainer }, b) : null, n.createElement(a.Z, { style: i.W.content }, z, k && M), n.createElement(a.Z, { style: g.radioContainer }, n.createElement(d.Z, { disabled: f, interactiveStyles: B, interactivityState: e, style: g.radioBackground }, n.createElement(a.Z, { style: [g.circle, p && g.circleActive, f && g.circleDisabled, p && f && g.circleCheckedAndDisabled] }, p ? n.createElement(o.default, { style: g.checkMark }) : null)), n.createElement("input", { "aria-label": t, "aria-posinset": r, "aria-setsize": h, checked: p, disabled: f, name: w, onChange: p ? l.Z : C, style: m, type: "radio" })))),
                        k ? null : M,
                    );
                },
                g = u.default.create((e) => ({ radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space24 }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, descriptionComponent: { marginHorizontal: e.spaces.space32 } })),
                m = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" };
        },
        896632: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                l = r(392237);
            let c = 1;
            const i = l.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large } })),
                s = (e) => {
                    const { "aria-label": t, backgroundStyles: r, description: l, disabled: s, horizontal: d, label: u, name: h, onChange: g, options: m, renderBorderWhenSelected: p, renderSelector: v, selectorBackgroundStyles: b, switchStyle: y, value: f } = e,
                        Z = (() => {
                            const e = n.useRef("");
                            return (
                                n.useEffect(() => {
                                    (e.current = `CONTROL_${c}_LABEL`), (c += 1);
                                }, []),
                                e
                            );
                        })(),
                        w = (e) => () => {
                            g(h, e);
                        };
                    return n.createElement(
                        a.Z,
                        { "aria-label": t, "aria-labelledby": u && !t ? Z.current : void 0, role: "radiogroup", style: s && i.disabled },
                        u ? n.createElement(a.Z, { id: Z.current, role: "label", style: i.header }, n.createElement(o.ZP, { style: i.label, weight: "bold" }, u), l ? n.createElement(o.ZP, { color: "gray700", size: "subtext2" }, l) : null) : null,
                        n.createElement(
                            a.Z,
                            { style: [d && i.row, y && i.switchVariant, r] },
                            m.map((e, t) => v({ "aria-posinset": t + 1, "aria-setsize": m.length, checked: e.value === f, disabled: s, name: h, switchStyle: y, horizontal: d, renderBorderWhenSelected: p, selectorBackgroundStyles: b, onChange: w(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(157396);
            const a = (0, r(587878).Z)({ palette: n.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        806143: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                l = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M18.425 10.77h.001c.182.372.025.82-.348 1-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496zM22 2.439v14.205l-.579.269c-1.803.837-3.466 1.11-5.015 1.11-1.561 0-3.005-.278-4.359-.539-2.443-.471-4.581-.863-7.047.17V22H3V2h2v1.514c2.705-.89 5.1-.443 7.425.005 2.633.509 5.12.988 8.154-.422L22 2.438zM20 5.47c-3.009.967-5.616.464-7.953.014-2.443-.471-4.581-.863-7.047.17v9.86c2.705-.891 5.1-.442 7.425.005 2.462.475 4.798.925 7.575-.173V5.47z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        804579: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                l = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M5.747 12c0-1.8 1.388-3.22 3.26-3.22 1.26 0 2.075.53 2.62 1.29l-1.207.94c-.306-.42-.798-.7-1.357-.7-.93 0-1.684.76-1.684 1.69s.755 1.68 1.685 1.68c.578 0 1.087-.29 1.39-.73l1.22.87c-.583.8-1.368 1.39-2.737 1.39h-.003c-1.766 0-3.187-1.35-3.187-3.19V12zm6.584.02c0 1.84 1.421 3.19 3.185 3.19 1.368 0 2.154-.59 2.738-1.39l-1.22-.87c-.304.44-.813.73-1.39.73-.93 0-1.684-.75-1.684-1.68s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.94c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.42-3.258 3.22v.02zM18.5 3C19.881 3 21 4.12 21 5.5v13c0 1.38-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.88 3 18.5v-13C3 4.12 4.119 3 5.5 3h13zM5 18.5c0 .28.224.5.5.5h13c.276 0 .5-.22.5-.5v-13c0-.28-.224-.5-.5-.5h-13c-.276 0-.5.22-.5.5v13z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        315951: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                l = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13 2v4h-2V2h2zm-2 16v4h2v-4h-2zm6.294-14.54l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-9.74 12.69l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-1-6.86L2.729 8.12l-.584 1.91L5.97 11.2l.584-1.91zm15.301 4.68L18.03 12.8l-.585 1.91 3.826 1.17.584-1.91zm-.584-5.85l-3.826 1.17.585 1.91 3.825-1.17-.584-1.91zM5.97 12.8l-3.825 1.17.584 1.91 3.825-1.17-.584-1.91zm3.171-6.17L6.706 3.46 5.119 4.67l2.435 3.18 1.587-1.22zm9.74 12.69l-2.435-3.17-1.587 1.22 2.435 3.17 1.587-1.22z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        133272: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                l = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M17 7v4c0 2.76-2.239 5-5 5s-5-2.24-5-5V7c0-2.76 2.239-5 5-5s5 2.24 5 5zm-4 12.947c4.677-.504 7.228-4.469 7.949-6.631l-1.896-.635c-.074.217-1.866 5.318-7.052 5.318s-6.979-5.102-7.051-5.316l-1.897.633c.721 2.162 3.271 6.127 7.949 6.631V22h2v-2.053H13z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        620763: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                l = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13 22h-2v-2.053c-4.677-.504-7.228-4.469-7.949-6.631l1.897-.633c.073.215 1.865 5.316 7.051 5.316s6.979-5.102 7.052-5.318l1.896.635c-.721 2.162-3.271 6.127-7.949 6.631V22H13zm-1-6c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v4c0 2.757-2.243 5-5 5zm0-12c-1.654 0-3 1.346-3 3v4c0 1.654 1.346 3 3 3s3-1.346 3-3V7c0-1.654-1.346-3-3-3z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        406727: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                l = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M7.79 11.71l1.42-1.42 1.79 1.8 3.79-3.8 1.42 1.42-5.21 5.2-3.21-3.2zM3 4.38v7.64c0 2.8 1.16 5.57 3.49 7.3.86.64 1.82 1.29 2.74 1.78.88.48 1.88.9 2.77.9s1.89-.42 2.77-.9c.92-.49 1.88-1.14 2.74-1.78 2.33-1.73 3.49-4.5 3.49-7.3V4.38c-1.03-.51-2.09-.96-3.18-1.33C16.27 2.53 14.15 2 12 2s-4.27.53-5.82 1.05c-1.09.37-2.15.82-3.18 1.33zm3.82.57C8.27 4.47 10.15 4 12 4s3.73.47 5.18.95c.77.25 1.4.51 1.82.69v6.38c0 2.27-.94 4.4-2.68 5.69-.82.61-1.7 1.2-2.5 1.63-.85.46-1.46.66-1.82.66s-.97-.2-1.82-.66c-.8-.43-1.68-1.02-2.5-1.63C5.93 16.42 5 14.29 5 12.02V5.64c.42-.18 1.05-.44 1.82-.69z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        786272: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                l = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        926628: (e, t, r) => {
            r.r(t), r.d(t, { default: () => i });
            var n = r(202784),
                a = r(890601),
                o = r(783427),
                l = r(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15 22.94V1.06L6.68 7H3.5C2.12 7 1 8.12 1 9.5v5C1 15.88 2.12 17 3.5 17h3.18L15 22.94zM3.5 9H6v6H3.5c-.28 0-.5-.22-.5-.5v-5c0-.28.22-.5.5-.5zM13 19.06l-5-3.57V8.51l5-3.57v14.12zm5.95-12.01c-.24-.24-.49-.45-.75-.65l1-1.75c.41.29.8.62 1.16.99 3.52 3.51 3.52 9.21 0 12.72-.36.37-.75.7-1.16.99l-1-1.75c.26-.2.51-.41.75-.65 2.73-2.73 2.73-7.17 0-9.9zM17 12c0-.8-.31-1.52-.82-2.06l1.02-1.78c1.1.91 1.8 2.29 1.8 3.84s-.7 2.93-1.8 3.84l-1.02-1.78c.51-.54.82-1.26.82-2.06z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const i = c;
        },
        364837: (e, t, r) => {
            r.d(t, { R: () => s });
            var n = r(19697),
                a = r(549755),
                o = r(205074);
            const l = 1,
                c = 2,
                i = 3,
                s = (e) => {
                    if ((0, o.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: r, orientation: o, width: l } = e;
                            return (0, n.$i)(r, l, t, o).then(
                                (e) => (0, n.q8)(e),
                                (e) => {
                                    throw new a.Z("Gif preview could not be generated", i);
                                },
                            );
                        }
                        {
                            const e = new a.Z("The provided image must be a gif", c);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new a.Z("The provided file is not a valid image", l);
                        return Promise.reject(e);
                    }
                };
        },
        220760: (e, t, r) => {
            r.d(t, { E: () => c });
            var n = r(202784),
                a = r(715729),
                o = r(465233),
                l = r(516951);
            function c(e) {
                const t = e || {},
                    r = (0, o.Z)(t);
                let c = (0, o.Z)(r);
                const s = new Set();
                function d(e) {
                    return (
                        s.add(e),
                        function () {
                            s.delete(e);
                        }
                    );
                }
                function u() {
                    s.forEach((e) => {
                        e(c);
                    });
                }
                function h(e) {
                    return function (t) {
                        const r = e.current.slice,
                            n = e.current.state,
                            a = e.current.selector(t);
                        e.current.equality(a, r, t, n) || ((e.current.slice = a), (e.current.state = t), e.current.onUpdate(e.current.slice));
                    };
                }
                return {
                    getState: function () {
                        return c;
                    },
                    setState: function (e) {
                        (c = (0, a.ZP)(c, (t) => e(t))), u();
                    },
                    reset: function () {
                        (c = (0, o.Z)(r)), u();
                    },
                    useSlice: function (e, t) {
                        const r = t?.equalityFn || i.equality,
                            a = l.Z,
                            o = n.useRef({ state: c, slice: e(c), selector: e, equality: r, onUpdate: a });
                        (o.current.selector = e), (o.current.equality = r);
                        const [s, u] = n.useState(() => o.current.slice);
                        return (
                            n.useEffect(() => {
                                let e = !0;
                                o.current.onUpdate = (e) => u(() => e);
                                const t = h(o);
                                function r(r) {
                                    e && t(r);
                                }
                                r(c);
                                const n = d(r);
                                return function () {
                                    (e = !1), n();
                                };
                            }, []),
                            s
                        );
                    },
                    subscribe: function (e, t, r) {
                        const n = r?.equalityFn || i.equality,
                            a = { current: { state: c, slice: e(c), selector: e, equality: n, onUpdate: t } },
                            o = d(h(a));
                        return a.current.onUpdate(a.current.slice), o;
                    },
                };
            }
            (0, a.GP)();
            const i = { equality: (e, t, r, n) => e === t };
        },
        193089: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = (e) => {
                const t = new Map();
                return (
                    e.forEach(([e, r]) => {
                        t.set(e, r);
                    }),
                    t
                );
            };
        },
        166502: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = (e, t) => {
                const r = null == e ? 0 : e.length;
                if (!r || t < 1) return [];
                let n = 0,
                    a = 0;
                const o = new Array(Math.ceil(r / t));
                for (; n < r; ) (o[a] = e.slice(n, (n += t))), (a += 1);
                return o;
            };
        },
        326399: (e, t, r) => {
            r.d(t, { Z: () => c });
            var n = r(827515),
                a = r(676145);
            const o = (e, t) => {
                if ((0, n.Z)(e) && (0, n.Z)(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                } else if ((0, a.Z)(e) && (0, a.Z)(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                } else if (l(e) && l(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                }
                return 0;
            };
            function l(e) {
                return "boolean" == typeof e;
            }
            const c = (e, t, r) => {
                const c = (0, a.Z)(r) ? Array(t.length).fill(r) : r,
                    i = t.map((e) =>
                        (0, a.Z)(e)
                            ? (t) => {
                                  const r = "object" == typeof t ? t?.[e] : void 0;
                                  return (0, a.Z)(r) || (0, n.Z)(r) || l(r) ? r : void 0;
                              }
                            : e,
                    );
                return e.concat().sort(
                    ((e, t) => (r, n) => {
                        for (let a = 0; a < e.length; a++) {
                            const l = e[a],
                                c = t[a] || "asc",
                                i = o(l(r), l(n));
                            if (0 !== i) return "desc" === c ? -1 * i : i;
                        }
                        return 0;
                    })(i, c),
                );
            };
        },
        822240: (e, t, r) => {
            r.d(t, { Z: () => n });
            r(136728);
            const n = (e, t, r = 1) => {
                const n = [];
                for (let a = e; r > 0 ? a < t : a > t; a += r) n.push(a);
                return n;
            };
        },
        684565: (e, t, r) => {
            r.d(t, { C: () => n });
            const n = (e, t) =>
                e.reduce((e, r) => {
                    const n = t(r);
                    return "number" == typeof n ? e + n : e;
                }, 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed.464d9cba.js.map
