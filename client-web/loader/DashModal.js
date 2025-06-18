"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => C, default: () => k });
            var o = a(807896),
                r = (a(136728), a(202784)),
                l = a(325686),
                s = a(67369),
                i = a(154003),
                n = a(392237),
                c = a(837020),
                d = a(629949),
                u = a(757700),
                h = a(555079),
                p = a(125363),
                m = a(466036),
                w = a(714951),
                g = a(879526);
            const y = "0.1s",
                f = () => !1;
            function b(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const C = ({ closeMenu: e, ...t }) => {
                    const [a, n] = r.useState(!1);
                    r.useEffect(() => {
                        setTimeout(() => n(!0), 0);
                    }, [n]);
                    const y = (0, w.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: C, ids: k } = (0, p.v9)(m.sC),
                        { coreItems: M, countrySpecificItems: E } = (0, g.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: C.length, pendingFollowerCount: k.length - C.length }),
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
                        I = (0, s.GS)(),
                        z = r.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                y.forEach((a, l) => {
                                    const { component: s, renderIcon: i, ...n } = a,
                                        c = b(n.path);
                                    c && t.add(c), e.push(r.createElement(s, (0, o.Z)({}, n, { isActive: f, key: c, rank: void 0, renderIcon: () => i(!1, v.iconColor), size: I ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !I })));
                                }),
                                [...M, ...E].forEach((a, l) => {
                                    const { badgeCount: s, component: i, decoration: n, icon: c, iconColor: u, link: h, pip: p, rightControl: m, ...w } = a,
                                        g = b(h);
                                    g && !t.has(g) && e.push(r.createElement(d.ZP, (0, o.Z)({}, w, { "aria-label": w.label, isActive: f, key: y.length + l, layout: "vertical", path: g, rank: void 0, renderIcon: () => (c ? r.createElement(c, { style: [v.icon, v.iconColor] }) : null), size: I ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !I })));
                                }),
                                e
                            );
                        }, [M, E, I, y]);
                    return r.createElement(u.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: G, style: [v.modal, a && v.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, r.createElement(l.Z, { "aria-labelledby": h.Q_, "aria-modal": !0, onClick: S, role: "dialog", style: v.dashModalStyle }, r.createElement(i.ZP, { icon: r.createElement(c.default, { size: 32, style: v.iconColor }), size: "large", style: v.closeButton, type: "primaryText" }), r.createElement(l.Z, { style: [v.dashModalGrid, Z && v.dashModalGridNarrow, I && v.dashModalGridVeryNarrow, a && v.dashModalGridAnimatedIn] }, z)));
                },
                v = n.default.create((e) => ({ modal: { transition: `opacity ${y} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${y} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                k = C;
        },
        452693: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                s = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.8c0abcea.js.map
