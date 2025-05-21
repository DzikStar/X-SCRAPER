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
                c = e(668214),
                l = e(491963),
                s = e(709318);
            const u = (n, t) => (t.communityId ? l.ZP.select(n, t.communityId) : void 0),
                d = (n, t) => !!t.communityId && (0, s.H4)(n, t.communityId),
                m = ({ community: n, communityId: t, createLocalApiErrorHandler: e, isPinned: a, onActionButtonJoinClick: c, onPress: l, pinTimeline: s, shouldDisplayPin: u, style: d, thumbnailSize: m, unpinTimeline: p, withActionButton: g }) => {
                    const y = i.useMemo(() => n && { isPinned: a, handlePinOrUnpin: () => (a ? p({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e) : s({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e)) }, [n, t, e, a, s, p]),
                        h = u ? y : void 0;
                    if (n) {
                        const { is_nsfw: e, media: r, member_count: a, membersFacepileUrls: s, name: u, primary_community_topic: p } = n;
                        return i.createElement(o.Z, { communityId: t, isNsfw: e, media: r, memberCount: a, membersFacepile: s, name: u, onActionButtonJoinClick: c, onPress: l, style: d, thumbnailSize: m, topic: p?.topic_name, withActionButton: g, withPinAction: h });
                    }
                    return null;
                },
                p = (0, c.Z)()
                    .propsFromState(() => ({ community: u, isPinned: d }))
                    .propsFromActions(() => ({ pinTimeline: s.qM, unpinTimeline: s.bK, createLocalApiErrorHandler: (0, a.zr)("TOGGLE_PIN_COMMUNITY") }))(i.memo(m));
        },
        325800: (n, t, e) => {
            e.r(t), e.d(t, { default: () => s });
            var i = e(459643),
                o = e(351322),
                r = e(202784),
                a = e(812190);
            const c = ({ entry: n, shouldDisplayPin: t }) => {
                    const e = n.content.id;
                    return r.createElement(a.Z, { communityId: e, shouldDisplayPin: t });
                },
                l = r.memo(c),
                s = (n) => o.iH({ component: l, shouldDisplayBorder: (0, i.Z)(!1), isFocusable: (0, i.Z)(!0) }).getHandler(() => n);
        },
        280278: (n, t, e) => {
            e.d(t, { ZP: () => y });
            var i = e(202784),
                o = e(325686),
                r = e(827515),
                a = e(461756),
                c = e(731708),
                l = e(392237);
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
                g = l.default.create({ root: { overflow: "hidden" } }),
                y = (n) => {
                    const { children: t, containerStyle: e, count: l, ...u } = n,
                        [y, h] = i.useState({ animating: !1, count: n.count, pendingCount: null, text: n.children, oldText: null, pendingText: null, transitionDirection: s }),
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
                                if (a.Z.reducedMotionEnabled) h((e) => ({ ...e, oldText: null, text: t, pendingText: null, pendingCount: null, count: n.count }));
                                else if (t !== y.pendingText) {
                                    t === y.text || ((0, r.Z)(n.count) && y.count === n.count) ? h((n) => ({ ...n, pendingCount: null, pendingText: null })) : (h((e) => ({ ...e, pendingCount: n.count, pendingText: t })), y.animating || d(n.count, t, h));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            f.current &&
                                !1 === y.animating &&
                                (y.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && h((n) => ({ ...n, animating: !0 }));
                                          }),
                                      )
                                    : y.pendingText && d(y.pendingCount, y.pendingText, h));
                        }, [y.animating, y.oldText]),
                        i.useMemo(() => {
                            const n = m[y.transitionDirection],
                                t = y.oldText && !a.Z.reducedMotionEnabled,
                                r = !y.animating && y.oldText && !a.Z.reducedMotionEnabled,
                                l = { ...p, ...(y.animating ? n.post : n.active) },
                                s = { ...(r ? n.pre : n.active) };
                            return i.createElement(
                                o.Z,
                                { style: [g.root, e] },
                                t ? i.createElement("span", { style: l }, i.createElement(c.ZP, u, y.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((n, t) => {
                                                n && t((n) => ({ ...n, animating: !1, oldText: null }));
                                            })(f.current, h),
                                        style: s,
                                    },
                                    i.createElement(c.ZP, u, y.text),
                                ),
                            );
                        }, [e, u, y, f, h])
                    );
                };
        },
        41065: (n, t, e) => {
            e.r(t), e.d(t, { default: () => l });
            var i = e(202784),
                o = e(890601),
                r = e(783427),
                a = e(347101);
            const c = (n = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...n, role: n["aria-label"] ? n.role || "img" : void 0, "aria-hidden": void 0 === n["aria-label"], style: [a.Z.root, n.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const l = c;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.75e2f06a.js.map
