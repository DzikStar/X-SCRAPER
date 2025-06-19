"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal", "icons/IconExiting-js"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => b, default: () => k });
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
                C = () => !1;
            function f(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const b = ({ closeMenu: e, ...t }) => {
                    const [a, n] = r.useState(!1);
                    r.useEffect(() => {
                        setTimeout(() => n(!0), 0);
                    }, [n]);
                    const y = (0, w.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: b, ids: k } = (0, p.v9)(m.sC),
                        { coreItems: M, countrySpecificItems: E } = (0, g.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: b.length, pendingFollowerCount: k.length - b.length }),
                        G = r.useCallback(() => {
                            n(!1),
                                setTimeout(() => {
                                    e();
                                }, 100);
                        }, [e]),
                        I = r.useCallback(
                            (e) => {
                                e.stopPropagation(), G();
                            },
                            [G],
                        ),
                        S = (0, s.pj)(),
                        Z = (0, s.GS)(),
                        L = r.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                y.forEach((a, l) => {
                                    const { component: s, renderIcon: i, ...n } = a,
                                        c = f(n.path);
                                    c && t.add(c), e.push(r.createElement(s, (0, o.Z)({}, n, { isActive: C, key: c, rank: void 0, renderIcon: () => i(!1, v.iconColor), size: Z ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !Z })));
                                }),
                                [...M, ...E].forEach((a, l) => {
                                    const { badgeCount: s, component: i, decoration: n, icon: c, iconColor: h, link: u, pip: p, rightControl: m, ...w } = a,
                                        g = f(u);
                                    g && !t.has(g) && e.push(r.createElement(d.ZP, (0, o.Z)({}, w, { "aria-label": w.label, isActive: C, key: y.length + l, layout: "vertical", path: g, rank: void 0, renderIcon: () => (c ? r.createElement(c, { style: [v.icon, v.iconColor] }) : null), size: Z ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !Z })));
                                }),
                                e
                            );
                        }, [M, E, Z, y]);
                    return r.createElement(h.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: G, style: [v.modal, a && v.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, r.createElement(l.Z, { "aria-labelledby": u.Q_, "aria-modal": !0, onClick: I, role: "dialog", style: v.dashModalStyle }, r.createElement(i.ZP, { icon: r.createElement(c.default, { size: 32, style: v.iconColor }), size: "large", style: v.closeButton, type: "primaryText" }), r.createElement(l.Z, { style: [v.dashModalGrid, S && v.dashModalGridNarrow, Z && v.dashModalGridVeryNarrow, a && v.dashModalGridAnimatedIn] }, L)));
                },
                v = n.default.create((e) => ({ modal: { transition: `opacity ${y} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${y} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                k = b;
        },
        297896: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                s = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.58e4d47a.js.map
