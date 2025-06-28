"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed", "icons/IconBirdwatchFlagStroke-js", "icons/IconCameraVideo-js", "icons/IconClipStroke-js", "icons/IconClosedcaptioningNone-js", "icons/IconFeedback-js", "icons/IconFlask-js", "icons/IconGovernmentFlag-js", "icons/IconPencilStroke-js", "icons/IconSkipForward-js", "icons/IconStarRising-js"],
    {
        796684: (e, t, r) => {
            r.d(t, { Z: () => h });
            var a = r(202784),
                n = r(325686),
                l = r(913973),
                o = r(516951),
                i = r(731708),
                c = r(454740),
                s = r(58881),
                d = r(530732),
                u = r(392237);
            const h = (e) => {
                    const { "aria-label": t, "aria-posinset": r, "aria-setsize": h, checked: v, containerStyle: p, decoration: b, description: y, disabled: f, label: Z, name: w, onChange: E, testID: C } = e,
                        z = "string" == typeof Z ? a.createElement(i.ZP, { weight: "bold" }, Z) : Z,
                        k = "string" == typeof y,
                        S = y ? (k ? a.createElement(i.ZP, { color: "gray700", style: c.W.description }, y) : a.createElement(n.Z, { style: g.descriptionComponent }, y)) : null,
                        M = s.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, customHoverBackgroundColor: u.default.theme.colors.transparent, customPressedBackgroundColor: u.default.theme.colors.transparent }),
                        D = s.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: v ? u.default.theme.colors.primary : u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 });
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(d.Z, { disabled: f, interactiveStyles: M, role: "label", style: [c.W.root, p], testID: C }, (e) => a.createElement(a.Fragment, null, b ? a.createElement(n.Z, { style: c.W.decorationContainer }, b) : null, a.createElement(n.Z, { style: c.W.content }, z, k && S), a.createElement(n.Z, { style: g.radioContainer }, a.createElement(d.Z, { disabled: f, interactiveStyles: D, interactivityState: e, style: g.radioBackground }, a.createElement(n.Z, { style: [g.circle, v && g.circleActive, f && g.circleDisabled, v && f && g.circleCheckedAndDisabled] }, v ? a.createElement(l.default, { style: g.checkMark }) : null)), a.createElement("input", { "aria-label": t, "aria-posinset": r, "aria-setsize": h, checked: v, disabled: f, name: w, onChange: v ? o.Z : E, style: m, type: "radio" })))),
                        k ? null : S,
                    );
                },
                g = u.default.create((e) => ({ radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space24 }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, descriptionComponent: { marginHorizontal: e.spaces.space32 } })),
                m = { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" };
        },
        896632: (e, t, r) => {
            r.d(t, { Z: () => s });
            var a = r(202784),
                n = r(325686),
                l = r(731708),
                o = r(392237);
            let i = 1;
            const c = o.default.create((e) => ({ header: { alignItems: "flex-start" }, row: { flexDirection: "row" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 }, switchVariant: { padding: e.spaces.space2, backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.large } })),
                s = (e) => {
                    const { "aria-label": t, backgroundStyles: r, description: o, disabled: s, horizontal: d, label: u, name: h, onChange: g, options: m, renderBorderWhenSelected: v, renderSelector: p, selectorBackgroundStyles: b, switchStyle: y, value: f } = e,
                        Z = (() => {
                            const e = a.useRef("");
                            return (
                                a.useEffect(() => {
                                    (e.current = `CONTROL_${i}_LABEL`), (i += 1);
                                }, []),
                                e
                            );
                        })(),
                        w = (e) => () => {
                            g(h, e);
                        };
                    return a.createElement(
                        n.Z,
                        { "aria-label": t, "aria-labelledby": u && !t ? Z.current : void 0, role: "radiogroup", style: s && c.disabled },
                        u ? a.createElement(n.Z, { id: Z.current, role: "label", style: c.header }, a.createElement(l.ZP, { style: c.label, weight: "bold" }, u), o ? a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, o) : null) : null,
                        a.createElement(
                            n.Z,
                            { style: [d && c.row, y && c.switchVariant, r] },
                            m.map((e, t) => p({ "aria-posinset": t + 1, "aria-setsize": m.length, checked: e.value === f, disabled: s, name: h, switchStyle: y, horizontal: d, renderBorderWhenSelected: v, selectorBackgroundStyles: b, onChange: w(e.value), ...e })),
                        ),
                    );
                };
        },
        27137: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(157396);
            const n = (0, r(587878).Z)({ palette: a.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        806143: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M18.425 10.77h.001c.182.372.025.82-.348 1-.372.182-.822.025-1.002-.348-.78-1.61-2.878-1.556-3.575.124l-.306.74c-.116.281-.391.463-.694.463s-.577-.184-.693-.464l-.308-.74c-.697-1.679-2.795-1.733-3.575-.123-.182.373-.629.529-1.002.347-.373-.18-.528-.628-.348-1 1.23-2.542 4.46-2.648 5.925-.495 1.465-2.154 4.695-2.047 5.925.496zM22 2.439v14.205l-.579.269c-1.803.837-3.466 1.11-5.015 1.11-1.561 0-3.005-.278-4.359-.539-2.443-.471-4.581-.863-7.047.17V22H3V2h2v1.514c2.705-.89 5.1-.443 7.425.005 2.633.509 5.12.988 8.154-.422L22 2.438zM20 5.47c-3.009.967-5.616.464-7.953.014-2.443-.471-4.581-.863-7.047.17v9.86c2.705-.891 5.1-.442 7.425.005 2.462.475 4.798.925 7.575-.173V5.47z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        213279: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm7.992 9c1.933 0 3.5-1.567 3.5-3.5S11.933 8.5 10 8.5 6.5 10.067 6.5 12s1.567 3.5 3.5 3.5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        804417: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23.367 8.254l-3.455-2.878c-.73-.608-1.763-.751-2.63-.358L12.471 7.19c-.895.403-1.472 1.298-1.472 2.279v.692l-1.771-.8c.492-.673.771-1.496.771-2.361 0-2.206-1.794-4-4-4S2 4.794 2 7s1.794 4 4 4c.486 0 .969-.089 1.421-.261L10.212 12l-2.791 1.261C6.968 13.089 6.485 13 6 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4c0-.865-.278-1.688-.771-2.361l1.771-.8v.692c0 .981.578 1.876 1.471 2.278l4.812 2.173c.869.393 1.9.25 2.629-.357l3.455-2.879L15.073 12l8.294-3.746zm-16.42.509C6.654 8.92 6.335 9 6 9c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2c0 .736-.403 1.412-1.053 1.763zM6 19c-1.103 0-2-.897-2-2s.897-2 2-2c.335 0 .654.08.947.237C7.596 15.588 8 16.263 8 17c0 1.103-.897 2-2 2zm7-9.531c0-.196.115-.375.294-.456l4.812-2.173c.065-.029.135-.044.205-.044.116 0 .23.04.321.116l1.001.834L13 10.741V9.469zm6.633 6.785l-1.001.835c-.146.121-.352.149-.525.071l-4.812-2.174c-.178-.08-.293-.259-.293-.455v-1.272l6.633 2.995z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        498844: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16.043 6.54l4.75-4.75 1.414 1.42-4.75 4.75-1.414-1.42zM3.207 22.21l4.75-4.75-1.414-1.42-4.75 4.75 1.414 1.42zm5.727-7h.002c1.369 0 2.154-.59 2.737-1.39l-1.22-.87c-.303.44-.812.73-1.39.73-.93 0-1.685-.75-1.685-1.68s.754-1.69 1.684-1.69c.559 0 1.051.28 1.357.7l1.207-.94c-.545-.76-1.36-1.29-2.62-1.29-1.872 0-3.26 1.42-3.26 3.22v.02c0 1.84 1.421 3.19 3.187 3.19zm9.319-1.39l-1.22-.87c-.304.44-.813.73-1.39.73-.93 0-1.684-.75-1.684-1.68s.755-1.68 1.685-1.68c.559 0 1.051.27 1.356.69l1.21-.94c-.547-.76-1.36-1.29-2.622-1.29-1.872 0-3.258 1.42-3.258 3.22v.02c0 1.84 1.421 3.19 3.185 3.19 1.368 0 2.154-.59 2.738-1.39zM3 5.74V15h2V5.74c0-.27.224-.5.5-.5h9.258l2-2H5.5C4.119 3.24 3 4.36 3 5.74zM18.5 19H9.243l-2 2H18.5c1.381 0 2.5-1.12 2.5-2.5V9h-2v9.5c0 .28-.224.5-.5.5z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        790093: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        373595: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M7 6h10v2h-1v2.7l3.316 4.97c.446.67.684 1.46.684 2.26 0 2.25-1.822 4.07-4.07 4.07H8.07C5.822 22 4 20.18 4 17.93c0-.8.238-1.59.684-2.26L8 10.7V8H7V6zm9.742 9.42c-.227-.04-.531-.08-.873-.12-.757-.08-1.62-.13-2.25-.06-.572.07-.983.15-1.424.24h-.005c-.445.09-.92.19-1.571.26-.869.11-1.922.03-2.707-.05-.288-.04-.55-.07-.769-.1l-.795 1.19c-.227.34-.348.74-.348 1.15C6 19.07 6.927 20 8.07 20h7.86c1.143 0 2.07-.93 2.07-2.07 0-.41-.121-.81-.348-1.15l-.91-1.36zM10 3c-.552 0-1 .45-1 1s.448 1 1 1 1-.45 1-1-.448-1-1-1zm3.5-2c-.828 0-1.5.67-1.5 1.5S12.672 4 13.5 4 15 3.33 15 2.5 14.328 1 13.5 1z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        410547: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6 3v1.5S7.504 4 8.5 4c3 0 4.5 2 7 2 1.782 0 4.5-.75 4.5-.75v11s-2.7.75-4.5.75c-3 0-4.756-2-7-2-1 0-2.5.75-2.5.75V21H4V3h2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        885724: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M14.23 2.854c.98-.977 2.56-.977 3.54 0l3.38 3.378c.97.977.97 2.559 0 3.536L9.91 21H3v-6.914L14.23 2.854zm2.12 1.414c-.19-.195-.51-.195-.7 0L5 14.914V19h4.09L19.73 8.354c.2-.196.2-.512 0-.708l-3.38-3.378zM14.75 19l-2 2H21v-2h-6.25z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        415269: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M15.457.04L19.414 4l-3.957 3.96-1.414-1.42L15.586 5H12c-4.142 0-7.5 3.36-7.5 7.5S7.858 20 12 20s7.5-3.36 7.5-7.5v-1h2v1c0 5.25-4.253 9.5-9.5 9.5s-9.5-4.25-9.5-9.5S6.753 3 12 3h3.586l-1.543-1.54L15.457.04zM9.046 9.5c-.245.65-.659.91-1.394.94H7.5v1.3h.228c.414 0 .811-.11 1.048-.31v3.94h1.454V9.5H9.046zm5.005 1.84c-.6 0-1.048.19-1.31.54l.152-1.25h2.738V9.5h-3.803l-.363 3.35 1.284.11c.135-.38.431-.59.879-.59.549 0 .87.41.87 1.03 0 .61-.329.98-.887.98-.473 0-.786-.26-.879-.66l-1.394.28c.177.93 1.039 1.5 2.29 1.5 1.445 0 2.324-.81 2.324-2.14 0-1.25-.718-2.02-1.901-2.02z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        17412: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                o = r(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M16.81 1.11l1.39 4.78 4.73 1.57-4.11 2.8-.03 4.98-3.94-3.05-4.74 1.52 1.68-4.69-2.91-4.04 4.98.15 2.95-4.02zM7.05 9.54l-4.5 4.5 1.41 1.42 4.5-4.5-1.41-1.42zm1 5l-5.5 5.5 1.41 1.42 5.5-5.5-1.41-1.42zm5 1l-4.5 4.5 1.41 1.42 4.5-4.5-1.41-1.42z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        364837: (e, t, r) => {
            r.d(t, { R: () => s });
            var a = r(19697),
                n = r(549755),
                l = r(205074);
            const o = 1,
                i = 2,
                c = 3,
                s = (e) => {
                    if ((0, l.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: r, orientation: l, width: o } = e;
                            return (0, a.$i)(r, o, t, l).then(
                                (e) => (0, a.q8)(e),
                                (e) => {
                                    throw new n.Z("Gif preview could not be generated", c);
                                },
                            );
                        }
                        {
                            const e = new n.Z("The provided image must be a gif", i);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new n.Z("The provided file is not a valid image", o);
                        return Promise.reject(e);
                    }
                };
        },
        220760: (e, t, r) => {
            r.d(t, { E: () => i });
            var a = r(202784),
                n = r(715729),
                l = r(465233),
                o = r(516951);
            function i(e) {
                const t = e || {},
                    r = (0, l.Z)(t);
                let i = (0, l.Z)(r);
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
                        e(i);
                    });
                }
                function h(e) {
                    return function (t) {
                        const r = e.current.slice,
                            a = e.current.state,
                            n = e.current.selector(t);
                        e.current.equality(n, r, t, a) || ((e.current.slice = n), (e.current.state = t), e.current.onUpdate(e.current.slice));
                    };
                }
                return {
                    getState: function () {
                        return i;
                    },
                    setState: function (e) {
                        (i = (0, n.ZP)(i, (t) => e(t))), u();
                    },
                    reset: function () {
                        (i = (0, l.Z)(r)), u();
                    },
                    useSlice: function (e, t) {
                        const r = t?.equalityFn || c.equality,
                            n = o.Z,
                            l = a.useRef({ state: i, slice: e(i), selector: e, equality: r, onUpdate: n });
                        (l.current.selector = e), (l.current.equality = r);
                        const [s, u] = a.useState(() => l.current.slice);
                        return (
                            a.useEffect(() => {
                                let e = !0;
                                l.current.onUpdate = (e) => u(() => e);
                                const t = h(l);
                                function r(r) {
                                    e && t(r);
                                }
                                r(i);
                                const a = d(r);
                                return function () {
                                    (e = !1), a();
                                };
                            }, []),
                            s
                        );
                    },
                    subscribe: function (e, t, r) {
                        const a = r?.equalityFn || c.equality,
                            n = { current: { state: i, slice: e(i), selector: e, equality: a, onUpdate: t } },
                            l = d(h(n));
                        return n.current.onUpdate(n.current.slice), l;
                    },
                };
            }
            (0, n.GP)();
            const c = { equality: (e, t, r, a) => e === t };
        },
        193089: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = (e) => {
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
            r.d(t, { Z: () => a });
            const a = (e, t) => {
                const r = null == e ? 0 : e.length;
                if (!r || t < 1) return [];
                let a = 0,
                    n = 0;
                const l = new Array(Math.ceil(r / t));
                for (; a < r; ) (l[n] = e.slice(a, (a += t))), (n += 1);
                return l;
            };
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(716406);
            function n(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(n) : (0, a.Z)(e, (e) => n(e));
            }
        },
        326399: (e, t, r) => {
            r.d(t, { Z: () => i });
            var a = r(827515),
                n = r(676145);
            const l = (e, t) => {
                if ((0, a.Z)(e) && (0, a.Z)(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                } else if ((0, n.Z)(e) && (0, n.Z)(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                } else if (o(e) && o(t)) {
                    if (e > t) return 1;
                    if (e < t) return -1;
                }
                return 0;
            };
            function o(e) {
                return "boolean" == typeof e;
            }
            const i = (e, t, r) => {
                const i = (0, n.Z)(r) ? Array(t.length).fill(r) : r,
                    c = t.map((e) =>
                        (0, n.Z)(e)
                            ? (t) => {
                                  const r = "object" == typeof t ? t?.[e] : void 0;
                                  return (0, n.Z)(r) || (0, a.Z)(r) || o(r) ? r : void 0;
                              }
                            : e,
                    );
                return e.concat().sort(
                    ((e, t) => (r, a) => {
                        for (let n = 0; n < e.length; n++) {
                            const o = e[n],
                                i = t[n] || "asc",
                                c = l(o(r), o(a));
                            if (0 !== c) return "desc" === i ? -1 * c : c;
                        }
                        return 0;
                    })(c, i),
                );
            };
        },
        822240: (e, t, r) => {
            r.d(t, { Z: () => a });
            r(136728);
            const a = (e, t, r = 1) => {
                const a = [];
                for (let n = e; r > 0 ? n < t : n > t; n += r) a.push(n);
                return a;
            };
        },
        684565: (e, t, r) => {
            r.d(t, { C: () => a });
            const a = (e, t) =>
                e.reduce((e, r) => {
                    const a = t(r);
                    return "number" == typeof a ? e + a : e;
                }, 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed.96e886fa.js.map
