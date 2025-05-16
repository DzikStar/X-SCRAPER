"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Balloons"],
    {
        103609: (t, e, a) => {
            a.r(e), a.d(e, { default: () => g });
            var n = a(202784),
                o = a(900664),
                i = a(325686),
                s = a(157396),
                l = a(392237),
                r = a(292627),
                m = a(461756),
                h = a(537392),
                d = a(332920),
                c = a.n(d),
                p = a(315951),
                f = a(836842),
                u = a(323265);
            const y = c().c1b819ba,
                b = Object.keys(s.default.ThemePrimaryColorNames);
            class _ extends n.Component {
                constructor(...t) {
                    super(...t),
                        (this.state = { balloons: void 0 }),
                        (this._renderResponsive = ({ windowHeight: t, windowWidth: e }) => {
                            const { balloons: a } = this.state,
                                o = l.default.theme.spacesPx.space64;
                            return a
                                ? n.createElement(
                                      r.Z.Persistent,
                                      null,
                                      n.createElement(
                                          i.Z,
                                          { "aria-label": y, pointerEvents: "none", style: v.overlay },
                                          a.map((a, s) => n.createElement(i.Z, { focusable: !1, key: s, ref: 0 === s ? this._setFinalBalloonRef(a) : void 0, style: [v.animationLift, { height: t, start: this._getLeft(a.left, e - o), animationDelay: `${a.delay}ms` }] }, n.createElement(i.Z, { focusable: !1, onClick: this._handlePop(s), onMouseOver: this._handlePop(s), pointerEvents: a.popped ? "none" : "auto", style: [v.animationWobble, { animationDelay: `${a.delay}ms` }] }, a.popped ? n.createElement(p.default, { style: [v.balloon, v.animationPop, { fontSize: o, color: a.color }] }) : n.createElement(f.default, { style: [v.balloon, { fontSize: o, color: a.color }] })))),
                                      ),
                                  )
                                : null;
                        }),
                        (this._launchBalloons = () => {
                            this.setState({ balloons: [...new Array(20)].map((t) => ({ color: l.default.theme.colors[b[Math.floor(Math.random() * b.length)]], delay: Math.floor(2 * Math.random() * 1e3), left: Math.random(), popped: !1 })).sort((t, e) => e.delay - t.delay) });
                        }),
                        (this._getLeft = (t, e) => Math.floor(e * t)),
                        (this._handlePop = (t) => (e) => {
                            const { balloons: a } = this.state,
                                n = Array.from(a || []);
                            (n[t].popped = !0), u.ZP.isFirefox() || o.Z.vibrate(10), this.setState({ balloons: n });
                        }),
                        (this._setFinalBalloonRef = (t) => (t) => {
                            t && t.addEventListener("animationend", this._handleAnimationEnd);
                        }),
                        (this._handleAnimationEnd = (t) => {
                            this.setState({ balloons: void 0 });
                        });
                }
                componentDidMount() {
                    const { setRef: t } = this.props;
                    t && t(this), this._launchBalloons();
                }
                shouldComponentUpdate(t, e) {
                    return this.state !== e;
                }
                launch() {
                    this.state.balloons || this._launchBalloons();
                }
                render() {
                    return m.Z.reducedMotionEnabled ? null : n.createElement(h.ZP, null, this._renderResponsive);
                }
            }
            const v = l.default.create((t) => ({ overlay: { position: "fixed", top: 0, start: 0, height: "100%", width: "100%", willChange: "transform" }, balloon: { opacity: 0.7 }, animationPop: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { transform: "scale(1)", opacity: 1 }, "100%": { transform: "scale(1.5)", opacity: 0 } }], animationTimingFunction: "linear", animationIterationCount: 1, opacity: 0, willChange: "transform" }, animationLift: { opacity: 0, position: "absolute", animationDuration: "2s", animationKeyframes: [{ "0%": { transform: "translateY(100vh)", opacity: 1 }, "100%": { transform: `translateY(calc(-2*${l.default.theme.spaces.space64}))`, opacity: 1 } }], animationTimingFunction: "ease-in", animationIterationCount: 1, zIndex: 1 }, animationWobble: { animationDuration: "1.5s", animationKeyframes: [{ "0%": { transform: "translateX(-10px) rotate(10deg)" }, "50%": { transform: "translateX(10px) rotate(-10deg)" }, "100%": { transform: "translateX(-10px) rotate(10deg)" } }], animationTimingFunction: "ease", animationIterationCount: "infinite" } })),
                g = _;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Balloons.da60ab3a.js.map
