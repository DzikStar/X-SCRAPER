"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PreviewActions"],
    {
        58336: (e, t, n) => {
            n.r(t), n.d(t, { PreviewActions: () => v, default: () => D });
            n(136728);
            var r = n(202784),
                a = n(325686),
                i = n(107267),
                o = n(731708),
                s = n(408369),
                d = n(764503),
                u = n(392237);
            const l = u.default.create(({ colors: e }) => ({ root: { alignItems: "flex-start", minHeight: 30, minWidth: 30, justifyContent: "center", margin: "auto" }, progressCircle: { transitionDuration: "0.2s", transitionProperty: "opacity" } })),
                c = (e) => {
                    const { "aria-label": t, count: n, maxCount: i } = e,
                        o = i - n,
                        u = (0, s.Z)(o, i),
                        c = r.createElement(d.Z, { "aria-label": t, color: "primary", progress: u, size: 20, strokeWidth: "thick", style: l.progressCircle });
                    return r.createElement(a.Z, { style: l.root }, c);
                };
            var p = n(154003),
                m = n(674132),
                w = n.n(m);
            var y = n(668214),
                f = n(24546),
                b = n(936572);
            const S = (0, y.Z)()
                    .propsFromState(() => ({ previewTweet: f.Qx, undoTweetSettings: b.zD }))
                    .adjustStateProps(({ previewTweet: e, undoTweetSettings: t }) => {
                        const n = e?.timeToSend,
                            r = e?.previewData?.trustedFriendsValue,
                            a = e?.previewData?.communityIdValue,
                            i = e?.previewData?.inReplyToStatus,
                            o = e?.previewData.sendData[0]?.quotedStatus?.id_str,
                            s = e?.previewData.tweetType,
                            d = e?.undoDurationSecs ?? f.Qz;
                        return { timeToSend: n, inReplyToStatusId: i?.id_str, undoPeriod: d, communityIdValue: a, quotedStatusId: o, tweetType: s, trustedFriendsValue: r };
                    })
                    .propsFromActions(() => ({ undoTweet: f.dD, sendNow: f.NS }))
                    .withAnalytics({ page: "undo_tweet_details", section: "timeline" }),
                T = w().b97f5eb2,
                g = w().gf5e9ea6,
                _ = w().j4c40da4,
                h = w().b23688c8,
                v = (e) => {
                    const t = (0, i.useHistory)(),
                        { analytics: n, communityIdValue: s, inReplyToStatusId: d, previewTweetId: u, quotedStatusId: l, sendNow: m, timeToSend: w, trustedFriendsValue: y, tweetType: f, undoPeriod: b, undoTweet: S } = e,
                        [v, D] = r.useState(),
                        [x, C] = r.useState(!1),
                        [E] = r.useState(1e3 * parseInt(b, 10)),
                        [Z] = r.useState(parseInt(w, 10) - E),
                        F = (function (e, t) {
                            const [n, a] = r.useState(0),
                                i = r.useRef();
                            return (
                                r.useEffect(() => {
                                    const n = () => {
                                        const r = Math.min(1, (Date.now() - t) / e);
                                        r < 1 && (a(r), (i.current = window.requestAnimationFrame(n)));
                                    };
                                    return (
                                        (i.current = window.requestAnimationFrame(n)),
                                        () => {
                                            window.cancelAnimationFrame(i.current);
                                        }
                                    );
                                }, [t, e]),
                                n
                            );
                        })(E, Z);
                    if (F >= 1) return null;
                    return "number" != typeof w
                        ? null
                        : r.createElement(
                              a.Z,
                              {
                                  onLayout: function (e) {
                                      D(e?.nativeEvent?.layout?.width || 0);
                                  },
                                  style: I.root,
                              },
                              r.createElement(a.Z, { style: I.timer }, r.createElement(a.Z, { style: I.timerWrapper }, r.createElement(c, { "aria-label": h, count: F, maxCount: 1 })), !v || v < 470 ? null : r.createElement(o.ZP, { style: I.sendingLabel, weight: "bold" }, T)),
                              r.createElement(
                                  a.Z,
                                  { style: I.buttonWrapper },
                                  r.createElement(
                                      p.ZP,
                                      {
                                          disabled: x,
                                          onClick: function () {
                                              m(u), C(!0), n.scribe({ element: "send_now", action: "send_now", data: { subscription_details: { draft_id: u, undo_period: b, tweet_type: f } } });
                                          },
                                          size: "xSmall",
                                          style: { marginEnd: 4 },
                                          type: "brandText",
                                      },
                                      _,
                                  ),
                                  r.createElement(
                                      p.ZP,
                                      {
                                          onClick: function () {
                                              n.scribe({ element: "undo_tweet", action: "undo", data: { subscription_details: { draft_id: u, undo_period: b, tweet_type: f } } }), S(u), t.push({ pathname: "/compose/post", state: { previewTweetId: u, inReplyToStatusId: d, selectedCommunityId: s, quotedStatusId: l, trustedFriendsValue: y } });
                                          },
                                          size: "xSmall",
                                          type: "brandFilled",
                                      },
                                      g,
                                  ),
                              ),
                          );
                },
                I = u.default.create((e) => ({ root: { marginTop: e.spaces.space12, paddingTop: e.spaces.space12, borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.gray50, flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap" }, timer: { justifyContent: "flex-start", flexDirection: "row", alignItems: "center" }, timerWrapper: { width: "2em", height: "2em" }, sendingLabel: { fontWeight: "bold", marginStart: e.spaces.space8 }, buttonWrapper: { display: "flex", flexDirection: "row" } })),
                D = S(v);
        },
        408369: (e, t, n) => {
            function r(e, t) {
                return Math.min(1, 1 - e / t);
            }
            n.d(t, { Z: () => r });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PreviewActions.eb17443a.js.map
