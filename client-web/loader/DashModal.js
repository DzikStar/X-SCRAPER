"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => f, default: () => C });
            var o = a(807896),
                r = (a(136728), a(202784)),
                l = a(325686),
                i = a(67369),
                s = a(154003),
                n = a(392237),
                c = a(837020),
                d = a(629949),
                h = a(757700),
                u = a(555079),
                p = a(125363),
                m = a(466036),
                w = a(714951),
                g = a(879526);
            const v = "0.1s",
                y = () => !1;
            function b(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const f = ({ closeMenu: e, ...t }) => {
                    const [a, n] = r.useState(!1);
                    r.useEffect(() => {
                        setTimeout(() => n(!0), 0);
                    }, [n]);
                    const v = (0, w.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: f, ids: C } = (0, p.v9)(m.sC),
                        { coreItems: k, countrySpecificItems: z } = (0, g.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: f.length, pendingFollowerCount: C.length - f.length }),
                        E = r.useCallback(() => {
                            n(!1),
                                setTimeout(() => {
                                    e();
                                }, 100);
                        }, [e]),
                        Z = r.useCallback(
                            (e) => {
                                e.stopPropagation(), E();
                            },
                            [E],
                        ),
                        G = (0, i.pj)(),
                        S = (0, i.GS)(),
                        I = r.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                v.forEach((a, l) => {
                                    const { component: i, renderIcon: s, ...n } = a,
                                        c = b(n.path);
                                    c && t.add(c), e.push(r.createElement(i, (0, o.Z)({}, n, { isActive: y, key: c, rank: void 0, renderIcon: () => s(!1, M.iconColor), size: S ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !S })));
                                }),
                                [...k, ...z].forEach((a, l) => {
                                    const { badgeCount: i, component: s, decoration: n, icon: c, iconColor: h, link: u, pip: p, rightControl: m, ...w } = a,
                                        g = b(u);
                                    g && !t.has(g) && e.push(r.createElement(d.ZP, (0, o.Z)({}, w, { "aria-label": w.label, isActive: y, key: v.length + l, layout: "vertical", path: g, rank: void 0, renderIcon: () => (c ? r.createElement(c, { style: [M.icon, M.iconColor] }) : null), size: S ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !S })));
                                }),
                                e
                            );
                        }, [k, z, S, v]);
                    return r.createElement(h.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: E, style: [M.modal, a && M.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, r.createElement(l.Z, { "aria-labelledby": u.Q_, "aria-modal": !0, onClick: Z, role: "dialog", style: M.dashModalStyle }, r.createElement(s.ZP, { icon: r.createElement(c.default, { size: 32, style: M.iconColor }), size: "large", style: M.closeButton, type: "primaryText" }), r.createElement(l.Z, { style: [M.dashModalGrid, G && M.dashModalGridNarrow, S && M.dashModalGridVeryNarrow, a && M.dashModalGridAnimatedIn] }, I)));
                },
                M = n.default.create((e) => ({ modal: { transition: `opacity ${v} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${v} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                C = f;
        },
        839: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M2.008 6.5c0-1.381 1.119-2.5 2.5-2.5h11c1.381 0 2.5 1.119 2.5 2.5v1.882l4-2v11.236l-4-2V17.5c0 1.381-1.119 2.5-2.5 2.5h-11c-1.381 0-2.5-1.119-2.5-2.5v-11zm16 6.882l2 1V9.618l-2 1v2.764zM4.508 6c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h11c.276 0 .5-.224.5-.5v-11c0-.276-.224-.5-.5-.5h-11zm5.5 4c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.896-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const n = s;
        },
        279849: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M18.037 13.084c-.918 1.685-2.719 3.479-5.694 5.212l-.342.204-.343-.204c-2.976-1.733-4.777-3.527-5.696-5.212-.924-1.699-.958-3.303-.349-4.533.603-1.216 1.799-1.978 3.127-2.046 1.122-.061 2.289.381 3.261 1.366.971-.985 2.138-1.427 3.259-1.366 1.328.068 2.524.829 3.127 2.046.609 1.23.575 2.834-.349 4.533zM19.42 3.16l1.42 1.42-1.77 1.76-1.41-1.41 1.76-1.77zM13 .5h-2V3h2V.5zM.5 13H3v-2H.5v2zm2.66 6.42l1.42 1.42 1.76-1.77-1.41-1.41-1.77 1.76zM21 11v2h2.5v-2H21zM11 23.5h2V21h-2v2.5zm6.66-4.43l1.76 1.77 1.42-1.42-1.77-1.76-1.41 1.41zM6.34 4.93L4.58 3.16 3.16 4.58l1.77 1.76 1.41-1.41z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const n = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.e83ff7ea.js.map
