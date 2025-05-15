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
            const u = (n, t) => (t.communityId ? c.ZP.select(n, t.communityId) : void 0),
                d = (n, t) => !!t.communityId && (0, s.H4)(n, t.communityId),
                m = ({ community: n, communityId: t, createLocalApiErrorHandler: e, isPinned: a, onActionButtonJoinClick: l, onPress: c, pinTimeline: s, shouldDisplayPin: u, style: d, thumbnailSize: m, unpinTimeline: p, withActionButton: g }) => {
                    const y = i.useMemo(() => n && { isPinned: a, handlePinOrUnpin: () => (a ? p({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e) : s({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e)) }, [n, t, e, a, s, p]),
                        f = u ? y : void 0;
                    if (n) {
                        const { is_nsfw: e, media: r, member_count: a, membersFacepileUrls: s, name: u, primary_community_topic: p } = n;
                        return i.createElement(o.Z, { communityId: t, isNsfw: e, media: r, memberCount: a, membersFacepile: s, name: u, onActionButtonJoinClick: l, onPress: c, style: d, thumbnailSize: m, topic: p?.topic_name, withActionButton: g, withPinAction: f });
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
            e.d(t, { ZP: () => y });
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
                y = (n) => {
                    const { children: t, containerStyle: e, count: c, ...u } = n,
                        [y, f] = i.useState({ animating: !1, count: n.count, pendingCount: null, text: n.children, oldText: null, pendingText: null, transitionDirection: s }),
                        h = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (h.current = !0),
                                function () {
                                    h.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (h.current)
                                if (a.Z.reducedMotionEnabled) f((e) => ({ ...e, oldText: null, text: t, pendingText: null, pendingCount: null, count: n.count }));
                                else if (t !== y.pendingText) {
                                    t === y.text || ((0, r.Z)(n.count) && y.count === n.count) ? f((n) => ({ ...n, pendingCount: null, pendingText: null })) : (f((e) => ({ ...e, pendingCount: n.count, pendingText: t })), y.animating || d(n.count, t, f));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            h.current &&
                                !1 === y.animating &&
                                (y.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              h.current && f((n) => ({ ...n, animating: !0 }));
                                          }),
                                      )
                                    : y.pendingText && d(y.pendingCount, y.pendingText, f));
                        }, [y.animating, y.oldText]),
                        i.useMemo(() => {
                            const n = m[y.transitionDirection],
                                t = y.oldText && !a.Z.reducedMotionEnabled,
                                r = !y.animating && y.oldText && !a.Z.reducedMotionEnabled,
                                c = { ...p, ...(y.animating ? n.post : n.active) },
                                s = { ...(r ? n.pre : n.active) };
                            return i.createElement(
                                o.Z,
                                { style: [g.root, e] },
                                t ? i.createElement("span", { style: c }, i.createElement(l.ZP, u, y.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((n, t) => {
                                                n && t((n) => ({ ...n, animating: !1, oldText: null }));
                                            })(h.current, f),
                                        style: s,
                                    },
                                    i.createElement(l.ZP, u, y.text),
                                ),
                            );
                        }, [e, u, y, h, f])
                    );
                };
        },
        988227: (n, t, e) => {
            e.r(t), e.d(t, { default: () => c });
            var i = e(202784),
                o = e(890601),
                r = e(783427),
                a = e(347101);
            const l = (n = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...n, role: n["aria-label"] ? n.role || "img" : void 0, "aria-hidden": void 0 === n["aria-label"], style: [a.Z.root, n.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 21c-7.605 0-10.804-8.296-10.937-8.648L.932 12l.131-.352C1.196 11.295 4.394 3 12 3s10.804 8.296 10.937 8.648l.131.352-.131.352C22.804 12.705 19.606 21 12 21zm-8.915-9c.658 1.467 3.5 7 8.915 7s8.257-5.533 8.915-7c-.658-1.467-3.5-7-8.915-7s-8.257 5.533-8.915 7zM12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.c1d353ca.js.map
