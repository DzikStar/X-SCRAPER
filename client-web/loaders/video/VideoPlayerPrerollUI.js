"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerPrerollUI"],
    {
        463371: (e, t, a) => {
            a.r(t), a.d(t, { default: () => h });
            var r = a(202784),
                l = a(325686),
                o = a(392237),
                n = a(314916),
                s = a(738584),
                i = a(864386),
                p = a(424713),
                c = a(251478),
                u = a(523319),
                y = a(916692),
                m = a(804455),
                d = a(162317),
                E = a(272879);
            const k = "VideoPlayerPrerollUI--root",
                S = ({ containerRef: e, playerApi: t, playerDisplayOptions: a, playerState: S, poster: b, showWatchAgain: h }) => {
                    const C = r.useContext(i.Z.Context),
                        [f, v] = r.useState(!1),
                        w = r.useCallback(() => {
                            t?.pause(), v(!0);
                        }, [t]),
                        I = r.useCallback(() => {
                            t?.nextTrack();
                        }, [t]);
                    if (!t || !S) return null;
                    const P = (0, p.Ci)(S),
                        Z = P?.displayType !== c.ak.AD || P?.playbackCompleted,
                        A = S.errorInfo?.adFailed;
                    if (f || Z || A)
                        return r.createElement(s.o, null, ({ aspectRatio: e }) => {
                            const t = b || S.posterImage;
                            return r.createElement(n.ZP, { aspectRatio: e, imageSrc: t, onTransitionComplete: I });
                        });
                    const { Observer: _, observed: R } = C,
                        g = (0, E.JN)(S, R, E.i2),
                        D = "PLAY_REQUESTED" !== S.controls?.playState,
                        T = h && S.tracksFinished,
                        O = !a?.hidePosterImage;
                    return r.createElement(_, { click: !0, interactionKey: E.IG.Root, mousemove: !0, mouseover: !0 }, r.createElement(l.Z, { style: o.default.absoluteFill, testID: k }, r.createElement(y.Z, { hideControls: g, isTouchOnlyUI: E.i2, playerApi: t, playerDisplayOptions: a, playerState: S }), O && !T && r.createElement(m.Z, { imageSrc: b, playerApi: t, playerState: S, withPlayButton: D }), r.createElement(u.Z, { playerState: S }), r.createElement(d.Z, { containerRef: e, onSkip: w, playerApi: t, playerState: S })));
                },
                b = (e) => r.createElement(i.Z, null, r.createElement(S, e)),
                h = r.memo(b);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerPrerollUI.52cd3c7a.js.map
