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
                u = e(709318);
            const s = (n, t) => (t.communityId ? l.ZP.select(n, t.communityId) : void 0),
                m = (n, t) => !!t.communityId && (0, u.H4)(n, t.communityId),
                d = ({ community: n, communityId: t, createLocalApiErrorHandler: e, isPinned: a, onActionButtonJoinClick: c, onPress: l, pinTimeline: u, shouldDisplayPin: s, style: m, thumbnailSize: d, unpinTimeline: p, withActionButton: y }) => {
                    const T = i.useMemo(() => n && { isPinned: a, handlePinOrUnpin: () => (a ? p({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e) : u({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e)) }, [n, t, e, a, u, p]),
                        f = s ? T : void 0;
                    if (n) {
                        const { is_nsfw: e, media: r, member_count: a, membersFacepileUrls: u, name: s, primary_community_topic: p } = n;
                        return i.createElement(o.Z, { communityId: t, isNsfw: e, media: r, memberCount: a, membersFacepile: u, name: s, onActionButtonJoinClick: c, onPress: l, style: m, thumbnailSize: d, topic: p?.topic_name, withActionButton: y, withPinAction: f });
                    }
                    return null;
                },
                p = (0, c.Z)()
                    .propsFromState(() => ({ community: s, isPinned: m }))
                    .propsFromActions(() => ({ pinTimeline: u.qM, unpinTimeline: u.bK, createLocalApiErrorHandler: (0, a.zr)("TOGGLE_PIN_COMMUNITY") }))(i.memo(d));
        },
        325800: (n, t, e) => {
            e.r(t), e.d(t, { default: () => u });
            var i = e(459643),
                o = e(351322),
                r = e(202784),
                a = e(812190);
            const c = ({ entry: n, shouldDisplayPin: t }) => {
                    const e = n.content.id;
                    return r.createElement(a.Z, { communityId: e, shouldDisplayPin: t });
                },
                l = r.memo(c),
                u = (n) => o.iH({ component: l, shouldDisplayBorder: (0, i.Z)(!1), isFocusable: (0, i.Z)(!0) }).getHandler(() => n);
        },
        280278: (n, t, e) => {
            e.d(t, { ZP: () => T });
            var i = e(202784),
                o = e(325686),
                r = e(827515),
                a = e(461756),
                c = e(731708),
                l = e(392237);
            const u = "up",
                s = "down",
                m = (n, t, e) => {
                    e((e) => {
                        const i = (0, r.Z)(n) ? (n > (e.count || 0) ? u : s) : u;
                        return { ...e, count: n, oldText: e.text, pendingCount: null, pendingText: null, text: t, transitionDirection: i };
                    });
                },
                d = {};
            [u, s].forEach((n) => {
                const t = "0.3s";
                d[n] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${n === u ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${n === u ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                y = l.default.create({ root: { overflow: "hidden" } }),
                T = (n) => {
                    const { children: t, containerStyle: e, count: l, ...s } = n,
                        [T, f] = i.useState({ animating: !1, count: n.count, pendingCount: null, text: n.children, oldText: null, pendingText: null, transitionDirection: u }),
                        x = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (x.current = !0),
                                function () {
                                    x.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (x.current)
                                if (a.Z.reducedMotionEnabled) f((e) => ({ ...e, oldText: null, text: t, pendingText: null, pendingCount: null, count: n.count }));
                                else if (t !== T.pendingText) {
                                    t === T.text || ((0, r.Z)(n.count) && T.count === n.count) ? f((n) => ({ ...n, pendingCount: null, pendingText: null })) : (f((e) => ({ ...e, pendingCount: n.count, pendingText: t })), T.animating || m(n.count, t, f));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            x.current &&
                                !1 === T.animating &&
                                (T.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              x.current && f((n) => ({ ...n, animating: !0 }));
                                          }),
                                      )
                                    : T.pendingText && m(T.pendingCount, T.pendingText, f));
                        }, [T.animating, T.oldText]),
                        i.useMemo(() => {
                            const n = d[T.transitionDirection],
                                t = T.oldText && !a.Z.reducedMotionEnabled,
                                r = !T.animating && T.oldText && !a.Z.reducedMotionEnabled,
                                l = { ...p, ...(T.animating ? n.post : n.active) },
                                u = { ...(r ? n.pre : n.active) };
                            return i.createElement(
                                o.Z,
                                { style: [y.root, e] },
                                t ? i.createElement("span", { style: l }, i.createElement(c.ZP, s, T.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((n, t) => {
                                                n && t((n) => ({ ...n, animating: !1, oldText: null }));
                                            })(x.current, f),
                                        style: u,
                                    },
                                    i.createElement(c.ZP, s, T.text),
                                ),
                            );
                        }, [e, s, T, x, f])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.c4d3cd0a.js.map
