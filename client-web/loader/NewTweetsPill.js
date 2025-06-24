"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.NewTweetsPill"],
    {
        560080: (e, t, r) => {
            r.r(t), r.d(t, { default: () => k });
            var a = r(202784),
                n = r(325686),
                l = r(316046),
                i = r(123588),
                o = r(731708),
                s = r(642153),
                c = r(58881),
                u = r(530732),
                d = r(392237);
            const p = d.default.create((e) => ({ root: { backgroundColor: e.colors.primary, borderRadius: e.borderRadii.infinite, boxShadow: e.boxShadows.small, justifyContent: "center", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space4 }, pillContent: { flexDirection: "row" }, icon: { alignSelf: "center", color: e.colors.whiteOnColor, width: e.spaces.space20 }, facepile: { marginStart: e.spaces.space4, marginEnd: e.spaces.space2 }, pillText: { marginStart: e.spaces.space4, alignSelf: "center" } })),
                m = function (e) {
                    const { ariaHidden: t, ariaLabel: r, label: l, onClick: m, userAvatarUrls: f } = e,
                        h = c.Z.generate({ backgroundColor: d.default.theme.colors.primary, color: d.default.theme.colors.whiteOnColor });
                    return a.createElement(u.Z, { "aria-hidden": t, "aria-label": r, interactiveStyles: h, onClick: m, role: "button", style: p.root }, a.createElement(n.Z, { style: p.pillContent }, a.createElement(i.default, { style: p.icon }), f && f.length > 0 ? a.createElement(n.Z, { style: p.facepile, testID: "userAvatars" }, a.createElement(s.Z, { borderColor: "primary", userAvatarSize: "large", userAvatarUrls: f })) : null, a.createElement(o.ZP, { color: "whiteOnColor", numberOfLines: 1, style: p.pillText, testID: "pillLabel" }, l)));
                };
            var f = r(111677),
                h = r.n(f),
                w = r(24949),
                b = r(450681),
                g = r(668214),
                y = r(919022);
            const v = [],
                C = (e, t) => (t.alert && t.alert.userIds) || v,
                E = (0, g.Z)()
                    .propsFromState(() => ({
                        userImageUrls: (0, w.P1)(y.ZP.selectAll, C, (e, t) =>
                            t.length
                                ? (0, b.Z)(
                                      t.map((t) => {
                                          const r = e[t];
                                          return r ? r.profile_image_url_https : void 0;
                                      }),
                                  )
                                : v,
                        ),
                    }))
                    .withAnalytics({ component: "new_tweet_prompt" }),
                x = h().e04033be,
                T = h().hec711c0;
            const Z = d.default.create((e) => {
                    const t = { marginVertical: e.spaces.space16, transitionDuration: "0.15s", transitionProperty: "transform, opacity" };
                    return { hide: { ...t, opacity: 0, transform: [{ translate3d: "0, -3.5em, 0" }], transitionTimingFunction: "ease, ease, step-end" }, show: { ...t, opacity: 1, transform: [{ translate3d: "0, 0, 0" }], transitionTimingFunction: "ease, ease, step-start", pointerEvents: "all" } };
                }),
                k = E(function (e) {
                    const { alert: t } = e,
                        r = a.useRef(null),
                        i = a.useRef(null),
                        o = a.useRef(e);
                    a.useEffect(() => {
                        o.current = e;
                    }),
                        a.useEffect(() => {
                            if (t) {
                                const e = o.current.analytics,
                                    t = o.current.isAtNewest?.() ?? !1,
                                    a = o.current.remainVisibleIntervalMs ?? 12e4,
                                    n = o.current.removeAlert;
                                if (t) return void n();
                                e.scribeAction("show"),
                                    (r.current = setTimeout(() => {
                                        (r.current = null), n();
                                    }, a));
                            }
                            return () => {
                                r.current && clearTimeout(r.current);
                            };
                        }, [t]);
                    const s = a.useCallback(() => {
                        const e = o.current.analytics,
                            t = o.current.applyNewTweetsBarInstructions,
                            r = { action: "click", data: void 0 };
                        window.performance && (r.data = { time_since_launch: (window.performance.now() / 1e3).toFixed(2) }), e.scribe(r);
                        (o.current.scrollToTop ?? (() => window.scrollTo(0, 0)))(),
                            (i.current = setTimeout(() => {
                                (i.current = null), t?.();
                            }, 200));
                    }, []);
                    a.useEffect(
                        () => () => {
                            i.current && clearTimeout(i.current);
                        },
                        [],
                    );
                    const c = t?.richText ? a.createElement(l.Z, { entities: t.richText.entities, text: t.richText.text }) : (e.label ?? T),
                        u = t ? Z.show : Z.hide;
                    return a.createElement(n.Z, { role: "status", style: u }, a.createElement(m, { ariaHidden: !t, ariaLabel: x, label: c, onClick: s, userAvatarUrls: e.userImageUrls }));
                });
        },
        642153: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(202784),
                n = r(325686),
                l = r(392237),
                i = r(823161);
            const o = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: o, userAvatarSize: c = "medium", userAvatarUrls: u, withIncreasedSpacing: d } = e,
                        p = u.length,
                        m = "transparent" === t;
                    return a.createElement(
                        n.Z,
                        { style: [s.root, o, { height: i.default.getSizeStyle(c)?.height }] },
                        u.map((e, n) => a.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : r, key: n, size: c, style: [0 !== n && { marginStart: -1 * l.default.theme.spacesPx[d ? "space4" : "space12"] }, { zIndex: p - n }], uri: e })),
                    );
                },
                s = l.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        123588: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var a = r(202784),
                n = r(890601),
                l = r(783427),
                i = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 3.59l7.457 7.45-1.414 1.42L13 7.41V21h-2V7.41l-5.043 5.05-1.414-1.42L12 3.59z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const s = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.NewTweetsPill.f60fbc5a.js.map
