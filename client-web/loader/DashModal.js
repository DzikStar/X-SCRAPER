"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => b, default: () => M });
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
            const y = "0.1s",
                v = () => !1;
            function C(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const b = ({ closeMenu: e, ...t }) => {
                    const [a, n] = r.useState(!1);
                    r.useEffect(() => {
                        setTimeout(() => n(!0), 0);
                    }, [n]);
                    const y = (0, w.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: b, ids: M } = (0, p.v9)(m.sC),
                        { coreItems: k, countrySpecificItems: E } = (0, g.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: b.length, pendingFollowerCount: M.length - b.length }),
                        Z = r.useCallback(() => {
                            n(!1),
                                setTimeout(() => {
                                    e();
                                }, 100);
                        }, [e]),
                        G = r.useCallback(
                            (e) => {
                                e.stopPropagation(), Z();
                            },
                            [Z],
                        ),
                        z = (0, i.pj)(),
                        S = (0, i.GS)(),
                        I = r.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                y.forEach((a, l) => {
                                    const { component: i, renderIcon: s, ...n } = a,
                                        c = C(n.path);
                                    c && t.add(c), e.push(r.createElement(i, (0, o.Z)({}, n, { isActive: v, key: c, rank: void 0, renderIcon: () => s(!1, f.iconColor), size: S ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !S })));
                                }),
                                [...k, ...E].forEach((a, l) => {
                                    const { badgeCount: i, component: s, decoration: n, icon: c, iconColor: h, link: u, pip: p, rightControl: m, ...w } = a,
                                        g = C(u);
                                    g && !t.has(g) && e.push(r.createElement(d.ZP, (0, o.Z)({}, w, { "aria-label": w.label, isActive: v, key: y.length + l, layout: "vertical", path: g, rank: void 0, renderIcon: () => (c ? r.createElement(c, { style: [f.icon, f.iconColor] }) : null), size: S ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !S })));
                                }),
                                e
                            );
                        }, [k, E, S, y]);
                    return r.createElement(h.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: Z, style: [f.modal, a && f.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, r.createElement(l.Z, { "aria-labelledby": u.Q_, "aria-modal": !0, onClick: G, role: "dialog", style: f.dashModalStyle }, r.createElement(s.ZP, { icon: r.createElement(c.default, { size: 32, style: f.iconColor }), size: "large", style: f.closeButton, type: "primaryText" }), r.createElement(l.Z, { style: [f.dashModalGrid, z && f.dashModalGridNarrow, S && f.dashModalGridVeryNarrow, a && f.dashModalGridAnimatedIn] }, I)));
                },
                f = n.default.create((e) => ({ modal: { transition: `opacity ${y} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${y} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                M = b;
        },
        297896: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const n = s;
        },
        256260: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M10 10c2.209 0 4-1.79 4-4s-1.791-4-4-4-4 1.79-4 4 1.791 4 4 4zm0-6c1.105 0 2 .9 2 2s-.895 2-2 2-2-.9-2-2 .895-2 2-2zm5.863 9.44C14.373 11.85 12.352 11 10 11s-4.373.85-5.863 2.44c-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46zM5.596 14.81C6.682 13.65 8.162 13 10 13s3.318.65 4.404 1.81c.921.978 1.602 2.388 1.939 4.19H3.657c.337-1.802 1.018-3.212 1.939-4.19zM24 10h-4.583l1.79 1.79-1.414 1.42-3.5-3.5-.707-.71.707-.71 3.5-3.5 1.414 1.42L19.417 8H24v2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.dc62737a.js.map
