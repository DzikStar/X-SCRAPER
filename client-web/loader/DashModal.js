"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => b, default: () => M });
            var o = a(807896),
                r = (a(136728), a(202784)),
                s = a(325686),
                l = a(67369),
                i = a(154003),
                n = a(392237),
                c = a(837020),
                d = a(629949),
                u = a(757700),
                p = a(555079),
                h = a(125363),
                m = a(466036),
                w = a(714951),
                g = a(879526);
            const y = "0.1s",
                f = () => !1;
            function C(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const b = ({ closeMenu: e, ...t }) => {
                    const [a, n] = r.useState(!1);
                    r.useEffect(() => {
                        setTimeout(() => n(!0), 0);
                    }, [n]);
                    const y = (0, w.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: b, ids: M } = (0, h.v9)(m.sC),
                        { coreItems: v, countrySpecificItems: E } = (0, g.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: b.length, pendingFollowerCount: M.length - b.length }),
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
                        I = (0, l.pj)(),
                        Z = (0, l.GS)(),
                        _ = r.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                y.forEach((a, s) => {
                                    const { component: l, renderIcon: i, ...n } = a,
                                        c = C(n.path);
                                    c && t.add(c), e.push(r.createElement(l, (0, o.Z)({}, n, { isActive: f, key: c, rank: void 0, renderIcon: () => i(!1, k.iconColor), size: Z ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !Z })));
                                }),
                                [...v, ...E].forEach((a, s) => {
                                    const { badgeCount: l, component: i, decoration: n, icon: c, iconColor: u, link: p, pip: h, rightControl: m, ...w } = a,
                                        g = C(p);
                                    g && !t.has(g) && e.push(r.createElement(d.ZP, (0, o.Z)({}, w, { "aria-label": w.label, isActive: f, key: y.length + s, layout: "vertical", path: g, rank: void 0, renderIcon: () => (c ? r.createElement(c, { style: [k.icon, k.iconColor] }) : null), size: Z ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !Z })));
                                }),
                                e
                            );
                        }, [v, E, Z, y]);
                    return r.createElement(u.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: G, style: [k.modal, a && k.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, r.createElement(s.Z, { "aria-labelledby": p.Q_, "aria-modal": !0, onClick: S, role: "dialog", style: k.dashModalStyle }, r.createElement(i.ZP, { icon: r.createElement(c.default, { size: 32, style: k.iconColor }), size: "large", style: k.closeButton, type: "primaryText" }), r.createElement(s.Z, { style: [k.dashModalGrid, I && k.dashModalGridNarrow, Z && k.dashModalGridVeryNarrow, a && k.dashModalGridAnimatedIn] }, _)));
                },
                k = n.default.create((e) => ({ modal: { transition: `opacity ${y} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${y} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                M = b;
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
                        const s = t ? t(o, r, e) : !!o;
                        return s && a[0].push(o), !s && a[1].push(o), a;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.16d1d88a.js.map
