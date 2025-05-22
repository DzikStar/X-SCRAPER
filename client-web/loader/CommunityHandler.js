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
                m = ({ community: n, communityId: t, createLocalApiErrorHandler: e, isPinned: a, onActionButtonJoinClick: l, onPress: c, pinTimeline: s, shouldDisplayPin: u, style: d, thumbnailSize: m, unpinTimeline: p, withActionButton: y }) => {
                    const g = i.useMemo(() => n && { isPinned: a, handlePinOrUnpin: () => (a ? p({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e) : s({ id: t, name: n.name, type: r.FO.COMMUNITY }).catch(e)) }, [n, t, e, a, s, p]),
                        f = u ? g : void 0;
                    if (n) {
                        const { is_nsfw: e, media: r, member_count: a, membersFacepileUrls: s, name: u, primary_community_topic: p } = n;
                        return i.createElement(o.Z, { communityId: t, isNsfw: e, media: r, memberCount: a, membersFacepile: s, name: u, onActionButtonJoinClick: l, onPress: c, style: d, thumbnailSize: m, topic: p?.topic_name, withActionButton: y, withPinAction: f });
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
        661810: (n, t, e) => {
            e.d(t, { Z: () => a });
            var i = e(202784),
                o = e(325686),
                r = e(392237);
            function a({ spacing: n, style: t }) {
                return i.createElement(o.Z, { role: "separator", style: [l.divider, { marginVertical: null != n ? r.default.theme.spaces[n] : void 0 }, t] });
            }
            const l = r.default.create((n) => ({ divider: { backgroundColor: n.colors.borderColor, height: n.borderWidths.small } }));
        },
        280278: (n, t, e) => {
            e.d(t, { ZP: () => g });
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
                y = c.default.create({ root: { overflow: "hidden" } }),
                g = (n) => {
                    const { children: t, containerStyle: e, count: c, ...u } = n,
                        [g, f] = i.useState({ animating: !1, count: n.count, pendingCount: null, text: n.children, oldText: null, pendingText: null, transitionDirection: s }),
                        T = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (T.current = !0),
                                function () {
                                    T.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (T.current)
                                if (a.Z.reducedMotionEnabled) f((e) => ({ ...e, oldText: null, text: t, pendingText: null, pendingCount: null, count: n.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, r.Z)(n.count) && g.count === n.count) ? f((n) => ({ ...n, pendingCount: null, pendingText: null })) : (f((e) => ({ ...e, pendingCount: n.count, pendingText: t })), g.animating || d(n.count, t, f));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            T.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              T.current && f((n) => ({ ...n, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && d(g.pendingCount, g.pendingText, f));
                        }, [g.animating, g.oldText]),
                        i.useMemo(() => {
                            const n = m[g.transitionDirection],
                                t = g.oldText && !a.Z.reducedMotionEnabled,
                                r = !g.animating && g.oldText && !a.Z.reducedMotionEnabled,
                                c = { ...p, ...(g.animating ? n.post : n.active) },
                                s = { ...(r ? n.pre : n.active) };
                            return i.createElement(
                                o.Z,
                                { style: [y.root, e] },
                                t ? i.createElement("span", { style: c }, i.createElement(l.ZP, u, g.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((n, t) => {
                                                n && t((n) => ({ ...n, animating: !1, oldText: null }));
                                            })(T.current, f),
                                        style: s,
                                    },
                                    i.createElement(l.ZP, u, g.text),
                                ),
                            );
                        }, [e, u, g, T, f])
                    );
                };
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.CommunityHandler.014ea2ea.js.map
