"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CommunityHandler"],
    {
        812190: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(202784),
                o = n(544239),
                r = n(872788),
                a = n(71620),
                l = n(668214),
                c = n(491963),
                s = n(709318);
            const d = (e, t) => (t.communityId ? c.ZP.select(e, t.communityId) : void 0),
                u = (e, t) => !!t.communityId && (0, s.H4)(e, t.communityId),
                m = ({ community: e, communityId: t, createLocalApiErrorHandler: n, isPinned: a, onActionButtonJoinClick: l, onPress: c, pinTimeline: s, shouldDisplayPin: d, style: u, thumbnailSize: m, unpinTimeline: p, withActionButton: h }) => {
                    const g = i.useMemo(() => e && { isPinned: a, handlePinOrUnpin: () => (a ? p({ id: t, name: e.name, type: r.FO.COMMUNITY }).catch(n) : s({ id: t, name: e.name, type: r.FO.COMMUNITY }).catch(n)) }, [e, t, n, a, s, p]),
                        v = d ? g : void 0;
                    if (e) {
                        const { is_nsfw: n, media: r, member_count: a, membersFacepileUrls: s, name: d, primary_community_topic: p } = e;
                        return i.createElement(o.Z, { communityId: t, isNsfw: n, media: r, memberCount: a, membersFacepile: s, name: d, onActionButtonJoinClick: l, onPress: c, style: u, thumbnailSize: m, topic: p?.topic_name, withActionButton: h, withPinAction: v });
                    }
                    return null;
                },
                p = (0, l.Z)()
                    .propsFromState(() => ({ community: d, isPinned: u }))
                    .propsFromActions(() => ({ pinTimeline: s.qM, unpinTimeline: s.bK, createLocalApiErrorHandler: (0, a.zr)("TOGGLE_PIN_COMMUNITY") }))(i.memo(m));
        },
        325800: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var i = n(459643),
                o = n(351322),
                r = n(202784),
                a = n(812190);
            const l = ({ entry: e, shouldDisplayPin: t }) => {
                    const n = e.content.id;
                    return r.createElement(a.Z, { communityId: n, shouldDisplayPin: t });
                },
                c = r.memo(l),
                s = (e) => o.iH({ component: c, shouldDisplayBorder: (0, i.Z)(!1), isFocusable: (0, i.Z)(!0) }).getHandler(() => e);
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => g });
            var i = n(202784),
                o = n(325686),
                r = n(827515),
                a = n(461756),
                l = n(731708),
                c = n(392237);
            const s = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const i = (0, r.Z)(e) ? (e > (n.count || 0) ? s : d) : s;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: i };
                    });
                },
                m = {};
            [s, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = c.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: n, count: c, ...d } = e,
                        [g, v] = i.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: s }),
                        y = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (y.current)
                                if (a.Z.reducedMotionEnabled) v((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, r.Z)(e.count) && g.count === e.count) ? v((e) => ({ ...e, pendingCount: null, pendingText: null })) : (v((n) => ({ ...n, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, v));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            y.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              y.current && v((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, v));
                        }, [g.animating, g.oldText]),
                        i.useMemo(() => {
                            const e = m[g.transitionDirection],
                                t = g.oldText && !a.Z.reducedMotionEnabled,
                                r = !g.animating && g.oldText && !a.Z.reducedMotionEnabled,
                                c = { ...p, ...(g.animating ? e.post : e.active) },
                                s = { ...(r ? e.pre : e.active) };
                            return i.createElement(
                                o.Z,
                                { style: [h.root, n] },
                                t ? i.createElement("span", { style: c }, i.createElement(l.ZP, d, g.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, v),
                                        style: s,
                                    },
                                    i.createElement(l.ZP, d, g.text),
                                ),
                            );
                        }, [n, d, g, y, v])
                    );
                };
        },
        678773: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var i = n(202784),
                o = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        988227: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var i = n(202784),
                o = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var i = n(202784),
                o = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        730895: (e, t, n) => {
            var i = n(821176);
            e.exports = function () {
                var e = i(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.5444602a.js.map
