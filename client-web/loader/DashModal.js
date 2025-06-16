"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal", "icons/IconExiting-js", "icons/IconFeedback-js"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => C, default: () => k });
            var o = a(807896),
                r = (a(136728), a(202784)),
                l = a(325686),
                i = a(67369),
                n = a(154003),
                s = a(392237),
                c = a(837020),
                d = a(629949),
                h = a(757700),
                u = a(555079),
                p = a(125363),
                m = a(466036),
                g = a(714951),
                w = a(879526);
            const v = "0.1s",
                y = () => !1;
            function b(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const C = ({ closeMenu: e, ...t }) => {
                    const [a, s] = r.useState(!1);
                    r.useEffect(() => {
                        setTimeout(() => s(!0), 0);
                    }, [s]);
                    const v = (0, g.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: C, ids: k } = (0, p.v9)(m.sC),
                        { coreItems: M, countrySpecificItems: E } = (0, w.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: C.length, pendingFollowerCount: k.length - C.length }),
                        Z = r.useCallback(() => {
                            s(!1),
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
                        I = (0, i.GS)(),
                        S = r.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                v.forEach((a, l) => {
                                    const { component: i, renderIcon: n, ...s } = a,
                                        c = b(s.path);
                                    c && t.add(c), e.push(r.createElement(i, (0, o.Z)({}, s, { isActive: y, key: c, rank: void 0, renderIcon: () => n(!1, f.iconColor), size: I ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !I })));
                                }),
                                [...M, ...E].forEach((a, l) => {
                                    const { badgeCount: i, component: n, decoration: s, icon: c, iconColor: h, link: u, pip: p, rightControl: m, ...g } = a,
                                        w = b(u);
                                    w && !t.has(w) && e.push(r.createElement(d.ZP, (0, o.Z)({}, g, { "aria-label": g.label, isActive: y, key: v.length + l, layout: "vertical", path: w, rank: void 0, renderIcon: () => (c ? r.createElement(c, { style: [f.icon, f.iconColor] }) : null), size: I ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !I })));
                                }),
                                e
                            );
                        }, [M, E, I, v]);
                    return r.createElement(h.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: Z, style: [f.modal, a && f.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, r.createElement(l.Z, { "aria-labelledby": u.Q_, "aria-modal": !0, onClick: G, role: "dialog", style: f.dashModalStyle }, r.createElement(n.ZP, { icon: r.createElement(c.default, { size: 32, style: f.iconColor }), size: "large", style: f.closeButton, type: "primaryText" }), r.createElement(l.Z, { style: [f.dashModalGrid, z && f.dashModalGridNarrow, I && f.dashModalGridVeryNarrow, a && f.dashModalGridAnimatedIn] }, S)));
                },
                f = s.default.create((e) => ({ modal: { transition: `opacity ${v} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${v} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                k = C;
        },
        297896: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        790093: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.57cf36aa.js.map
