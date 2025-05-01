"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.CommunityHandler"],
    {
        812190: (n, t, e) => {
            e.d(t, { Z: () => p });
            var i = e(202784),
                o = e(544239),
                r = e(872788),
                a = e(71620),
                l = e(668214),
                c = e(491963),
                s = e(709318);
            const u = (n, { communityId: t }) => (t ? c.ZP.select(n, t) : void 0),
                d = (n, { communityId: t }) => !!t && (0, s.H4)(n, t),
                m = ({ community: n, communityId: t, createLocalApiErrorHandler: e, isPinned: a, onActionButtonJoinClick: l, onPress: c, pinTimeline: s, shouldDisplayPin: u, style: d, thumbnailSize: m, unpinTimeline: p, withActionButton: g }) => {
                    const h = i.useMemo(() => n && { isPinned: a, handlePinOrUnpin: () => (a ? p({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e) : s({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e)) }, [n, t, e, a, s, p]),
                        y = u ? h : void 0;
                    if (n) {
                        const { is_nsfw: e, media: r, member_count: a, membersFacepileUrls: s, name: u, primary_community_topic: p } = n;
                        return i.createElement(o.Z, { communityId: t, isNsfw: e, media: r, memberCount: a, membersFacepile: s, name: u, onActionButtonJoinClick: l, onPress: c, style: d, thumbnailSize: m, topic: p?.topic_name, withActionButton: g, withPinAction: y });
                    }
                    return null;
                },
                p = (0, l.Z)()
                    .propsFromState(() => ({ community: u, isPinned: d }))
                    .propsFromActions(() => ({ pinTimeline: s.qM, unpinTimeline: s.bK, createLocalApiErrorHandler: (0, a.zr)("TOGGLE_PIN_COMMUNITY") }))(i.memo(m));
        },
        325800: (n, t, e) => {
            e.r(t), e.d(t, { default: () => s });
            var i = e(459643),
                o = e(351322),
                r = e(202784),
                a = e(812190);
            const l = ({ entry: n, shouldDisplayPin: t }) => {
                    const e = n.content.id;
                    return r.createElement(a.Z, { communityId: e, shouldDisplayPin: t });
                },
                c = r.memo(l),
                s = (n) => o.iH({ component: c, shouldDisplayBorder: (0, i.Z)(!1), isFocusable: (0, i.Z)(!0) }).getHandler(() => n);
        },
        280278: (n, t, e) => {
            e.d(t, { ZP: () => h });
            var i = e(202784),
                o = e(325686),
                r = e(827515),
                a = e(461756),
                l = e(731708),
                c = e(392237);
            const s = "up",
                u = "down",
                d = (n, t, e) => {
                    e((e) => {
                        const i = (0, r.Z)(n) ? (n > (e.count || 0) ? s : u) : s;
                        return { ...e, count: n, oldText: e.text, pendingCount: null, pendingText: null, text: t, transitionDirection: i };
                    });
                },
                m = {};
            [s, u].forEach((n) => {
                const t = "0.3s";
                m[n] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${n === s ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${n === s ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                g = c.default.create({ root: { overflow: "hidden" } }),
                h = (n) => {
                    const { children: t, containerStyle: e, count: c, ...u } = n,
                        [h, y] = i.useState({ animating: !1, count: n.count, pendingCount: null, text: n.children, oldText: null, pendingText: null, transitionDirection: s }),
                        f = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (f.current)
                                if (a.Z.reducedMotionEnabled) y((e) => ({ ...e, oldText: null, text: t, pendingText: null, pendingCount: null, count: n.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, r.Z)(n.count) && h.count === n.count) ? y((n) => ({ ...n, pendingCount: null, pendingText: null })) : (y((e) => ({ ...e, pendingCount: n.count, pendingText: t })), h.animating || d(n.count, t, y));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            f.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && y((n) => ({ ...n, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && d(h.pendingCount, h.pendingText, y));
                        }, [h.animating, h.oldText]),
                        i.useMemo(() => {
                            const n = m[h.transitionDirection],
                                t = h.oldText && !a.Z.reducedMotionEnabled,
                                r = !h.animating && h.oldText && !a.Z.reducedMotionEnabled,
                                c = { ...p, ...(h.animating ? n.post : n.active) },
                                s = { ...(r ? n.pre : n.active) };
                            return i.createElement(
                                o.Z,
                                { style: [g.root, e] },
                                t ? i.createElement("span", { style: c }, i.createElement(l.ZP, u, h.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((n, t) => {
                                                n && t((n) => ({ ...n, animating: !1, oldText: null }));
                                            })(f.current, y),
                                        style: s,
                                    },
                                    i.createElement(l.ZP, u, h.text),
                                ),
                            );
                        }, [e, u, h, f, y])
                    );
                };
        },
        678773: (n, t, e) => {
            e.r(t), e.d(t, { default: () => c });
            var i = e(202784),
                o = e(890601),
                r = e(783427),
                a = e(347101);
            const l = (n = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...n, role: n["aria-label"] ? n.role || "img" : void 0, "aria-hidden": void 0 === n["aria-label"], style: [a.Z.root, n.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M19.996 10h-16V8h16v2zm0 6h-16v-2h16v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        730895: (n, t, e) => {
            var i = e(821176);
            n.exports = function () {
                var n = i(this),
                    t = "";
                return n.hasIndices && (t += "d"), n.global && (t += "g"), n.ignoreCase && (t += "i"), n.multiline && (t += "m"), n.dotAll && (t += "s"), n.unicode && (t += "u"), n.unicodeSets && (t += "v"), n.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.46444e3a.js.map
