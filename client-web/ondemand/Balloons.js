"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.Balloons", "icons/IconMediaSlowmotion-js"],
    {
        103609: (t, e, a) => {
            a.r(e), a.d(e, { default: () => g });
            var n = a(202784),
                o = a(900664),
                i = a(325686),
                l = a(157396),
                s = a(392237),
                r = a(292627),
                m = a(461756),
                h = a(537392),
                d = a(111677),
                c = a.n(d),
                p = a(315951),
                u = a(836842),
                f = a(323265);
            const y = c().c1b819ba,
                b = Object.keys(l.default.ThemePrimaryColorNames);
            class v extends n.Component {
                constructor(...t) {
                    super(...t),
                        (this.state = { balloons: void 0 }),
                        (this._renderResponsive = ({ windowHeight: t, windowWidth: e }) => {
                            const { balloons: a } = this.state,
                                o = s.default.theme.spacesPx.space64;
                            return a
                                ? n.createElement(
                                      r.Z.Persistent,
                                      null,
                                      n.createElement(
                                          i.Z,
                                          { "aria-label": y, pointerEvents: "none", style: _.overlay },
                                          a.map((a, l) => n.createElement(i.Z, { focusable: !1, key: l, ref: 0 === l ? this._setFinalBalloonRef(a) : void 0, style: [_.animationLift, { height: t, start: this._getLeft(a.left, e - o), animationDelay: `${a.delay}ms` }] }, n.createElement(i.Z, { focusable: !1, onClick: this._handlePop(l), onMouseOver: this._handlePop(l), pointerEvents: a.popped ? "none" : "auto", style: [_.animationWobble, { animationDelay: `${a.delay}ms` }] }, a.popped ? n.createElement(p.default, { style: [_.balloon, _.animationPop, { fontSize: o, color: a.color }] }) : n.createElement(u.default, { style: [_.balloon, { fontSize: o, color: a.color }] })))),
                                      ),
                                  )
                                : null;
                        }),
                        (this._launchBalloons = () => {
                            this.setState({ balloons: [...new Array(20)].map((t) => ({ color: s.default.theme.colors[b[Math.floor(Math.random() * b.length)]], delay: Math.floor(2 * Math.random() * 1e3), left: Math.random(), popped: !1 })).sort((t, e) => e.delay - t.delay) });
                        }),
                        (this._getLeft = (t, e) => Math.floor(e * t)),
                        (this._handlePop = (t) => (e) => {
                            const { balloons: a } = this.state,
                                n = Array.from(a || []);
                            (n[t].popped = !0), f.ZP.isFirefox() || o.Z.vibrate(10), this.setState({ balloons: n });
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
            const _ = s.default.create((t) => ({ overlay: { position: "fixed", top: 0, start: 0, height: "100%", width: "100%", willChange: "transform" }, balloon: { opacity: 0.7 }, animationPop: { animationDuration: "0.2s", animationKeyframes: [{ "0%": { transform: "scale(1)", opacity: 1 }, "100%": { transform: "scale(1.5)", opacity: 0 } }], animationTimingFunction: "linear", animationIterationCount: 1, opacity: 0, willChange: "transform" }, animationLift: { opacity: 0, position: "absolute", animationDuration: "2s", animationKeyframes: [{ "0%": { transform: "translateY(100vh)", opacity: 1 }, "100%": { transform: `translateY(calc(-2*${s.default.theme.spaces.space64}))`, opacity: 1 } }], animationTimingFunction: "ease-in", animationIterationCount: 1, zIndex: 1 }, animationWobble: { animationDuration: "1.5s", animationKeyframes: [{ "0%": { transform: "translateX(-10px) rotate(10deg)" }, "50%": { transform: "translateX(10px) rotate(-10deg)" }, "100%": { transform: "translateX(-10px) rotate(10deg)" } }], animationTimingFunction: "ease", animationIterationCount: "infinite" } })),
                g = v;
        },
        315951: (t, e, a) => {
            a.r(e), a.d(e, { default: () => r });
            var n = a(202784),
                o = a(890601),
                i = a(783427),
                l = a(347101);
            const s = (t = {}) => {
                const { direction: e } = (0, i.Z)();
                return (0, o.Z)("svg", { ...t, role: t["aria-label"] ? t.role || "img" : void 0, "aria-hidden": void 0 === t["aria-label"], style: [l.Z.root, t.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M13 2v4h-2V2h2zm-2 16v4h2v-4h-2zm6.294-14.54l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-9.74 12.69l-2.435 3.17 1.587 1.22 2.435-3.17-1.587-1.22zm-1-6.86L2.729 8.12l-.584 1.91L5.97 11.2l.584-1.91zm15.301 4.68L18.03 12.8l-.585 1.91 3.826 1.17.584-1.91zm-.584-5.85l-3.826 1.17.585 1.91 3.825-1.17-.584-1.91zM5.97 12.8l-3.825 1.17.584 1.91 3.825-1.17-.584-1.91zm3.171-6.17L6.706 3.46 5.119 4.67l2.435 3.18 1.587-1.22zm9.74 12.69l-2.435-3.17-1.587 1.22 2.435 3.17 1.587-1.22z" })) }, { writingDirection: e });
            };
            s.metadata = { width: 24, height: 24 };
            const r = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.Balloons.8efd923a.js.map
