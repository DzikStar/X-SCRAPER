"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => f, default: () => M });
            var r = a(807896),
                o = (a(136728), a(202784)),
                l = a(325686),
                i = a(67369),
                n = a(154003),
                s = a(392237),
                c = a(837020),
                d = a(629949),
                h = a(757700),
                u = a(555079),
                m = a(125363),
                p = a(466036),
                v = a(714951),
                g = a(879526);
            const w = "0.1s",
                y = () => !1;
            function b(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const f = ({ closeMenu: e, ...t }) => {
                    const [a, s] = o.useState(!1);
                    o.useEffect(() => {
                        setTimeout(() => s(!0), 0);
                    }, [s]);
                    const w = (0, v.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: f, ids: M } = (0, m.v9)(p.sC),
                        { coreItems: z, countrySpecificItems: E } = (0, g.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: f.length, pendingFollowerCount: M.length - f.length }),
                        k = o.useCallback(() => {
                            s(!1),
                                setTimeout(() => {
                                    e();
                                }, 100);
                        }, [e]),
                        Z = o.useCallback(
                            (e) => {
                                e.stopPropagation(), k();
                            },
                            [k],
                        ),
                        G = (0, i.pj)(),
                        V = (0, i.GS)(),
                        S = o.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                w.forEach((a, l) => {
                                    const { component: i, renderIcon: n, ...s } = a,
                                        c = b(s.path);
                                    c && t.add(c), e.push(o.createElement(i, (0, r.Z)({}, s, { isActive: y, key: c, rank: void 0, renderIcon: () => n(!1, C.iconColor), size: V ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !V })));
                                }),
                                [...z, ...E].forEach((a, l) => {
                                    const { badgeCount: i, component: n, decoration: s, icon: c, iconColor: h, link: u, pip: m, rightControl: p, ...v } = a,
                                        g = b(u);
                                    g && !t.has(g) && e.push(o.createElement(d.ZP, (0, r.Z)({}, v, { "aria-label": v.label, isActive: y, key: w.length + l, layout: "vertical", path: g, rank: void 0, renderIcon: () => (c ? o.createElement(c, { style: [C.icon, C.iconColor] }) : null), size: V ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !V })));
                                }),
                                e
                            );
                        }, [z, E, V, w]);
                    return o.createElement(h.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: k, style: [C.modal, a && C.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, o.createElement(l.Z, { "aria-labelledby": u.Q_, "aria-modal": !0, onClick: Z, role: "dialog", style: C.dashModalStyle }, o.createElement(n.ZP, { icon: o.createElement(c.default, { size: 32, style: C.iconColor }), size: "large", style: C.closeButton, type: "primaryText" }), o.createElement(l.Z, { style: [C.dashModalGrid, G && C.dashModalGridNarrow, V && C.dashModalGridVeryNarrow, a && C.dashModalGridAnimatedIn] }, S)));
                },
                C = s.default.create((e) => ({ modal: { transition: `opacity ${w} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${w} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                M = f;
        },
        839: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                l = a(783427),
                i = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        197318: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                l = a(783427),
                i = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M8.7 2.4c.7-.6 1.5-1 2.3-1.4.5-.2 1.1-.3 1.7-.3.4 0 .8.1 1.1.3s.7.4.9.7c.2.3.3.6.4 1 .1.4.1.7 0 1.1-.1.5-.2 1-.4 1.4-.4.8-.8 1.5-1.3 2.2-1.8 2.8-3.9 5.1-5.7 7.7-.4.6-.9 1.3-1.3 1.9-.2.3-.4.6-.6 1.1-.3.6.2.8.8.5 2.3-1.1 10.3-11.2 12.8-9 .3.3 1.7 1.5-1.3 5.8-.4.6-.7 1.1-1.1 1.6-.5.7-1.1 1.5-1.6 2.3-.4.6-.7 1.2-1 1.9-.1.2-.2.6 0 .8.4.4 1.9-.7 3.7-2.4l3.2-3.2c.5-.5 1.2.1.7.7-1.6 1.9-5.5 6.4-7.5 6.3-.4 0-.7-.1-1-.3s-.5-.5-.6-.8c-.1-.2-.2-.7.1-1.5.3-.8.6-1.6 1.1-2.3.5-.8 1-1.7 1.5-2.4.3-.5.7-1.1 1-1.6.3-.5.8-1.4 1.2-2 .2-.3.6-.9.2-1.2-.2-.2-.5-.2-1.3.6 0 0-6.6 6.7-9 8.4-1.3.9-2.8 1.2-3.6.4-1-.9-1.6-2.5 1.5-6.4 3.1-3.8 6.5-8.7 6.8-9.6.1-.2.1-.4.1-.5.1-.5-.5-.9-1-.7-.3.2-.8.5-1.6 1.2-2.3 2-4.3 4.3-6.1 6.8-.1.2-.3.3-.5.4s-.4.2-.6.2c-.4.1-.8-.1-1.2-.3-.3-.2-.5-.6-.6-1v-.6c.1-.2.1-.4.3-.5 2.7-2.9 5-5.2 7.5-7.3z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        297896: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                l = a(783427),
                i = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                l = a(783427),
                i = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        662678: (e, t, a) => {
            a.d(t, { G: () => o, Z: () => r });
            a(136728);
            const r = function (e, t) {
                return o(e, t);
            };
            function o(e, t) {
                return e.reduce(
                    (a, r, o) => {
                        const l = t ? t(r, o, e) : !!r;
                        return l && a[0].push(r), !l && a[1].push(r), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.ccf9c80a.js.map
