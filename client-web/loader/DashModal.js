"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.DashModal", "icons/IconChevronRight-js"],
    {
        232870: (e, t, a) => {
            a.r(t), a.d(t, { DashModal: () => v, default: () => k });
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
                g = a(714951),
                w = a(879526);
            const y = "0.1s",
                b = () => !1;
            function f(e) {
                return null == e ? null : "string" == typeof e ? e : e.pathname;
            }
            const v = ({ closeMenu: e, ...t }) => {
                    const [a, n] = r.useState(!1);
                    r.useEffect(() => {
                        setTimeout(() => n(!0), 0);
                    }, [n]);
                    const y = (0, g.Q)({ ...t, withExtendedItems: !0 }),
                        { acceptedIds: v, ids: k } = (0, p.v9)(m.sC),
                        { coreItems: M, countrySpecificItems: E } = (0, w.O)({ analytics: t.analytics, featureSwitches: t.featureSwitches, onClose: e, userClaims: t.userClaims, viewerUser: t.viewerUser, acceptedFollowerCount: v.length, pendingFollowerCount: k.length - v.length }),
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
                        I = (0, i.pj)(),
                        S = (0, i.GS)(),
                        L = r.useMemo(() => {
                            const e = [],
                                t = new Set();
                            return (
                                y.forEach((a, l) => {
                                    const { component: i, renderIcon: s, ...n } = a,
                                        c = f(n.path);
                                    c && t.add(c), e.push(r.createElement(i, (0, o.Z)({}, n, { isActive: b, key: c, rank: void 0, renderIcon: () => s(!1, C.iconColor), size: S ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !S })));
                                }),
                                [...M, ...E].forEach((a, l) => {
                                    const { badgeCount: i, component: s, decoration: n, icon: c, iconColor: h, link: u, pip: p, rightControl: m, ...g } = a,
                                        w = f(u);
                                    w && !t.has(w) && e.push(r.createElement(d.ZP, (0, o.Z)({}, g, { "aria-label": g.label, isActive: b, key: y.length + l, layout: "vertical", path: w, rank: void 0, renderIcon: () => (c ? r.createElement(c, { style: [C.icon, C.iconColor] }) : null), size: S ? "normal" : "large", withBorder: !0, withHoverLabel: !1, withLabel: !1, withSubLabel: !S })));
                                }),
                                e
                            );
                        }, [M, E, S, y]);
                    return r.createElement(h.ZP, { clickMaskToClose: !0, modalSize: "full", onMaskClick: Z, style: [C.modal, a && C.modalVisible], withBackground: !1, withMask: !1, withPassthroughEvents: !1 }, r.createElement(l.Z, { "aria-labelledby": u.Q_, "aria-modal": !0, onClick: G, role: "dialog", style: C.dashModalStyle }, r.createElement(s.ZP, { icon: r.createElement(c.default, { size: 32, style: C.iconColor }), size: "large", style: C.closeButton, type: "primaryText" }), r.createElement(l.Z, { style: [C.dashModalGrid, I && C.dashModalGridNarrow, S && C.dashModalGridVeryNarrow, a && C.dashModalGridAnimatedIn] }, L)));
                },
                C = n.default.create((e) => ({ modal: { transition: `opacity ${y} ease-in-out`, opacity: "0" }, modalVisible: { opacity: "1" }, dashModalStyle: { width: "100%", height: "100%", backgroundColor: e.colors.cellBackground, padding: e.spaces.space32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }, dashModalGrid: { display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space80, transition: `transform ${y} ease-in-out`, transform: "translate(0,15%)" }, dashModalGridAnimatedIn: { transform: "translate(0,0)" }, dashModalGridNarrow: { display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gridAutoFlow: "row", gridGap: e.spaces.space64 }, dashModalGridVeryNarrow: { gridGap: e.spaces.space24 }, closeButton: { position: "absolute", top: e.spaces.space32, start: e.spaces.space32 }, icon: { width: e.spaces.space32, height: e.spaces.space32 }, iconColor: { color: e.colors.text } })),
                k = v;
        },
        58399: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(717683),
                s = a(347101);
            const n = (e = {}) => {
                const t = o.useContext(i.Z),
                    { direction: a } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style, t && s.Z.iconRTL], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: a });
            };
            n.metadata = { width: 24, height: 24 };
            const c = n;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => n });
            var o = a(202784),
                r = a(890601),
                l = a(783427),
                i = a(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.DashModal.b1c8b37a.js.map
