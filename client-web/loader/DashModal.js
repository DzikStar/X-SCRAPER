"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => f, default: () => Z });
            var r = a(807896),
                o = (a(136728), a(202784)),
                i = a(325686),
                l = a(67369),
                n = a(154003),
                s = a(392237),
                c = a(837020),
                d = a(629949),
                h = a(757700),
                u = a(555079),
                m = a(125363),
                p = a(466036),
                g = a(714951),
                w = a(879526);
            const v = "0.1s",
                y = () => !1;
            function b(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const f = ({ closeMenu: e, ...t }) => {
                    const [a, s] = o.useState(!1);
                    o.useEffect(() => {
                        setTimeout(() => s(!0), 0);
                    }, [s]);
                    const v = (0, g.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: f, ids: Z } = (0, m.v9)(p.sC),
                        { coreItems: E, countrySpecificItems: M } = (0, w.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: f.length, pendingFollowerCount: Z.length - f.length }),
                        k = o.useCallback(() => {
                            s(!1),
                                setTimeout(() => {
                                    e();
                                }, 100);
                        }, [e]),
                        z = o.useCallback(
                            (e) => {
                                e.stopPropagation(), k();
                            },
                            [k],
                        ),
                        G = (0, l.pj)(),
                        I = (0, l.GS)(),
                        L = o.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                v.forEach((a, i) => {
                                    const { component: l, renderIcon: n, ...s } = a,
                                        c = b(s.path);
                                    c && t.add(c), e.push(o.createElement(l, (0, r.Z)({}, s, { isActive: y, key: c, rank: void 0, renderIcon: () => n(!1, C.iconColor), size: I ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !I })));
                                }),
                                [...E, ...M].forEach((a, i) => {
                                    const { badgeCount: l, component: n, decoration: s, icon: c, iconColor: h, link: u, pip: m, rightControl: p, ...g } = a,
                                        w = b(u);
                                    w && !t.has(w) && e.push(o.createElement(d.ZP, (0, r.Z)({}, g, { "aria-label": g.label, isActive: y, key: v.length + i, layout: "vertical", path: w, rank: void 0, renderIcon: () => (c ? o.createElement(c, { style: [C.icon, C.iconColor] }) : null), size: I ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !I })));
                                }),
                                e
                            );
                        }, [E, M, I, v]);
                    return o.createElement(h.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: k, style: [C.modal, a && C.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, o.createElement(i.Z, { "aria-labelledby": u.Q_, "aria-modal": !0, onClick: z, role: "dialog", style: C.dashModalStyle }, o.createElement(n.ZP, { icon: o.createElement(c.default, { size: 32, style: C.iconColor }), size: "large", style: C.closeButton, type: "primaryText" }), o.createElement(i.Z, { style: [C.dashModalGrid, G && C.dashModalGridNarrow, I && C.dashModalGridVeryNarrow, a && C.dashModalGridAnimatedIn] }, L)));
                },
                C = s.default.create((e) => ({ modal: { transition: `opacity ${v} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${v} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                Z = f;
        },
        58399: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                o = a(890601),
                i = a(783427),
                l = a(717683),
                n = a(347101);
            const s = (e = {}) => {
                const t = r.useContext(l.Z),
                    { direction: a } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style, t && n.Z.iconRTL], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: a });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                i = a(783427),
                l = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        264171: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                i = a(783427),
                l = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                i = a(783427),
                l = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        262009: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                i = a(783427),
                l = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        452693: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                o = a(890601),
                i = a(783427),
                l = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, i.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
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
                        const i = t ? t(r, o, e) : !!r;
                        return i && a[0].push(r), !i && a[1].push(r), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.f4733e3a.js.map
