"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loaders.video.VideoPlayerPrerollUI"],
    {
        215337: (e, t, r) => {
            r.d(t, { Z: () => o });
            var a = r(202784),
                l = r(325686);
            class n extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const a = t[r];
                                    let l = "";
                                    return a && (l = ` ${100 * a}%`), e + l;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: n } = this.props;
                    return a.createElement(l.Z, { style: [n, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            n.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const o = n;
        },
        463371: (e, t, r) => {
            r.r(t), r.d(t, { default: () => C });
            var a = r(202784),
                l = r(325686),
                n = r(392237),
                o = r(314916),
                s = r(738584),
                i = r(864386),
                c = r(424713),
                p = r(251478),
                u = r(523319),
                m = r(916692),
                y = r(804455),
                d = r(162317),
                g = r(272879);
            const h = "VideoPlayerPrerollUI--root",
                E = ({ containerRef: e, playerApi: t, playerDisplayOptions: r, playerState: E, poster: k, showWatchAgain: C }) => {
                    const b = a.useContext(i.Z.Context),
                        [S, f] = a.useState(!1),
                        Z = a.useCallback(() => {
                            t?.pause(), f(!0);
                        }, [t]),
                        v = a.useCallback(() => {
                            t?.nextTrack();
                        }, [t]);
                    if (!t || !E) return null;
                    const I = (0, c.Ci)(E),
                        P = I?.displayType !== p.ak.AD || I?.playbackCompleted,
                        w = E.errorInfo?.adFailed;
                    if (S || P || w)
                        return a.createElement(s.o, null, ({ aspectRatio: e }) => {
                            const t = k || E.posterImage;
                            return a.createElement(o.ZP, { aspectRatio: e, imageSrc: t, onTransitionComplete: v });
                        });
                    const { Observer: A, observed: _ } = b,
                        R = (0, g.JN)(E, _, g.i2),
                        U = "PLAY_REQUESTED" !== E.controls?.playState,
                        D = C && E.tracksFinished,
                        T = !r?.hidePosterImage;
                    return a.createElement(A, { click: !0, interactionKey: g.IG.Root, mousemove: !0, mouseover: !0 }, a.createElement(l.Z, { style: n.default.absoluteFill, testID: h }, a.createElement(m.Z, { hideControls: R, isTouchOnlyUI: g.i2, playerApi: t, playerDisplayOptions: r, playerState: E }), T && !D && a.createElement(y.Z, { imageSrc: k, playerApi: t, playerState: E, withPlayButton: U }), a.createElement(u.Z, { playerState: E }), a.createElement(d.Z, { containerRef: e, onSkip: Z, playerApi: t, playerState: E })));
                },
                k = (e) => a.createElement(i.Z, null, a.createElement(E, e)),
                C = a.memo(k);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loaders.video.VideoPlayerPrerollUI.0059e1da.js.map
