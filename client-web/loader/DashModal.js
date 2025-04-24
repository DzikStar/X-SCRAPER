"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => v, default: () => k });
            var o = a(807896),
                r = (a(136728), a(202784)),
                l = a(325686),
                s = a(67369),
                i = a(154003),
                n = a(392237),
                c = a(837020),
                d = a(629949),
                h = a(757700),
                u = a(555079),
                p = a(125363),
                m = a(466036),
                w = a(714951),
                g = a(879526);
            const y = "0.1s",
                f = () => !1;
            function b(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const v = ({ closeMenu: e, ...t }) => {
                    const [a, n] = r.useState(!1);
                    r.useEffect(() => {
                        setTimeout(() => n(!0), 0);
                    }, [n]);
                    const y = (0, w.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: v, ids: k } = (0, p.v9)(m.sC),
                        { coreItems: M, countrySpecificItems: E } = (0, g.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: v.length, pendingFollowerCount: k.length - v.length }),
                        G = r.useCallback(() => {
                            n(!1),
                                setTimeout(() => {
                                    e();
                                }, 100);
                        }, [e]),
                        S = r.useCallback(
                            (e) => {
                                e.stopPropagation(), G();
                            },
                            [G],
                        ),
                        Z = (0, s.pj)(),
                        z = (0, s.GS)(),
                        I = r.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                y.forEach((a, l) => {
                                    const { component: s, renderIcon: i, ...n } = a,
                                        c = b(n.path);
                                    c && t.add(c), e.push(r.createElement(s, (0, o.Z)({}, n, { isActive: f, key: c, rank: void 0, renderIcon: () => i(!1, C.iconColor), size: z ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !z })));
                                }),
                                [...M, ...E].forEach((a, l) => {
                                    const { badgeCount: s, component: i, decoration: n, icon: c, iconColor: h, link: u, pip: p, rightControl: m, ...w } = a,
                                        g = b(u);
                                    g && !t.has(g) && e.push(r.createElement(d.ZP, (0, o.Z)({}, w, { "aria-label": w.label, isActive: f, key: y.length + l, layout: "vertical", path: g, rank: void 0, renderIcon: () => (c ? r.createElement(c, { style: [C.icon, C.iconColor] }) : null), size: z ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !z })));
                                }),
                                e
                            );
                        }, [M, E, z, y]);
                    return r.createElement(h.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: G, style: [C.modal, a && C.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, r.createElement(l.Z, { "aria-labelledby": u.Q_, "aria-modal": !0, onClick: S, role: "dialog", style: C.dashModalStyle }, r.createElement(i.ZP, { icon: r.createElement(c.default, { size: 32, style: C.iconColor }), size: "large", style: C.closeButton, type: "primaryText" }), r.createElement(l.Z, { style: [C.dashModalGrid, Z && C.dashModalGridNarrow, z && C.dashModalGridVeryNarrow, a && C.dashModalGridAnimatedIn] }, I)));
                },
                C = n.default.create((e) => ({ modal: { transition: `opacity ${y} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${y} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                k = v;
        },
        839: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                s = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const n = i;
        },
        662678: (e, t, a) => {
            a.d(t, { G: () => r, Z: () => o });
            a(136728);
            const o = function (e, t) {
                return r(e, t);
            };
            function r(e, t) {
                return e.reduce(
                    (a, o, r) => {
                        const l = t ? t(o, r, e) : !!o;
                        return l && a[0].push(o), !l && a[1].push(o), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.06579a2a.js.map
