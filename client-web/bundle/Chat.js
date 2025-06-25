"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Chat"],
    {
        200189: (e, t, a) => {
            a.r(t), a.d(t, { ChatScreen: () => _, default: () => I });
            var r = a(202784),
                n = a(325686),
                s = a(731708),
                c = a(154003),
                o = a(392237),
                l = a(111677),
                i = a.n(l),
                d = a(737691),
                h = a(382285),
                m = a(181142),
                u = a(668214),
                f = a(689642),
                p = a(919022);
            const b = (e, t) => t.match.params.screenName || "",
                w = (e, t) => {
                    const a = b(0, t);
                    return p.ZP.selectByScreenName(e, a);
                },
                C = (e, t) => {
                    const a = w(e, t);
                    return a?.latest_broadcast?.broadcast_id;
                },
                y = (0, u.Z)()
                    .propsFromState(() => ({ screenName: b, broadcastId: C, broadcaster: w }))
                    .propsFromActions(() => ({ fetchLatestBroadcast: f.Z.fetchLatestBroadcast })),
                E = i().ab3ee97f,
                Z = i().deaf5b16,
                _ = (e) => {
                    const [t, a] = r.useState(!1),
                        { broadcastId: o, fetchLatestBroadcast: l, screenName: i } = e;
                    return (
                        r.useEffect(() => {
                            i &&
                                l(i).then(() => {
                                    a(!0);
                                });
                        }, [l, i]),
                        !o && t ? r.createElement(n.Z, { style: v.retryContainer }, r.createElement(s.ZP, { size: "title4" }, E({ screenName: i })), r.createElement(c.ZP, { icon: r.createElement(d.default, null), onPress: () => window.location.reload(), type: "brandFilled" }, Z)) : r.createElement(m.aM, null, r.createElement(n.Z, { style: v.container, testID: "chatContainer" }, o ? r.createElement(h.Z, { broadcastId: o }) : null))
                    );
                },
                v = o.default.create((e) => ({ container: { alignItems: "center", justifyContent: "center", flexDirection: "row", overflowX: "hidden", overflowY: "hidden", height: "100%", width: "100%", position: "relative" }, retryContainer: { alignItems: "center", justifyContent: "center", height: "100%", gap: e.spaces.space16 } })),
                I = y(_);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Chat.8643e4ca.js.map
