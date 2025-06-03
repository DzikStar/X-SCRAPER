"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacebarScreen", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a = n(202784),
                r = n(99107),
                o = n(272175),
                c = n(111677);
            const i = n.n(c)().c39b0e24,
                l = ({ deepLink: e }) => {
                    const t = i;
                    return e ? a.createElement(o.ql, null, a.createElement("meta", { content: e, property: "al:ios:url" }), a.createElement("meta", { content: r.AF, property: "al:ios:app_store_id" }), a.createElement("meta", { content: t, property: "al:ios:app_name" }), a.createElement("meta", { content: e, property: "al:android:url" }), a.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), a.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(272175);
            const o = (e) => {
                const { canonical: t, description: n = "", image: o, imageAlt: c, imageH: i, imageType: l, imageW: s, title: p, ttl: m, type: d } = e;
                return a.createElement(r.ql, null, d ? a.createElement("meta", { content: d, property: "og:type" }) : null, t ? a.createElement("meta", { content: t, property: "og:url" }) : null, p ? a.createElement("meta", { content: p, property: "og:title" }) : null, a.createElement("meta", { content: n, property: "og:description" }), o ? a.createElement("meta", { content: o, property: "og:image" }) : null, l ? a.createElement("meta", { content: l, property: "og:image:type" }) : null, s ? a.createElement("meta", { content: s, property: "og:image:width" }) : null, i ? a.createElement("meta", { content: i, property: "og:image:height" }) : null, c ? a.createElement("meta", { content: c, property: "og:image:alt" }) : null, m ? a.createElement("meta", { content: m, property: "og:ttl" }) : null);
            };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(500002),
                o = n(668214),
                c = n(997174),
                i = n(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: c.NH }))
                .withAnalytics();
            class s extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: c },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const s = r || i;
                    ((s && r !== i) || (!s && n !== o) || a !== c || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const p = (0, r.ZP)(l(s));
        },
        805137: (e, t, n) => {
            n.d(t, { B: () => y });
            var a = n(807896),
                r = (n(136728), n(202784)),
                o = n(555874),
                c = n(537392),
                i = n(457311),
                l = n(108362),
                s = n(392237),
                p = n(776342),
                m = n(111677),
                d = n.n(m),
                u = n(774654),
                h = n(755988),
                g = n(22492),
                f = n(109808);
            function y() {
                const e = u.ZM.getAppBarHeight(),
                    t = { minHeight: (0, c.iv)().height - e, paddingBottom: e },
                    n = (0, f.e)(),
                    s = n?.threads || [];
                if (!s.length) return r.createElement(i.Z, { header: v.Nothing_to_see_here });
                const p = [];
                return (
                    s.forEach((e) => {
                        if (e.live_content.audiospace) {
                            const t = e.live_content.audiospace.broadcast_id;
                            p.push({ audioSpaceId: t });
                        }
                    }),
                    r.createElement(l.Z, { withGutter: !0 }, r.createElement(o.Z, (0, a.Z)({}, _, { data: p, style: [t, E.flatList] })), r.createElement(_.ItemSeparatorComponent, null))
                );
            }
            const E = s.default.create((e) => ({ flatList: { scrollbarWidth: "none" } })),
                _ = {
                    getItemLayout: function (e, t) {
                        const n = p.default.getMinHeight(!1);
                        return { index: t, length: n, offset: n * t };
                    },
                    ItemSeparatorComponent: function (e) {
                        return r.createElement(g.L, { size: "space16" });
                    },
                    renderItem: function (e) {
                        return r.createElement(h.Z, { audioSpaceId: e.item.audioSpaceId });
                    },
                    keyExtractor: function (e, t) {
                        return t;
                    },
                    windowSize: 2,
                },
                v = { Nothing_to_see_here: d().e9f1fbcc };
        },
        22492: (e, t, n) => {
            n.d(t, { L: () => c });
            var a = n(202784),
                r = n(325686),
                o = n(392237);
            function c(e) {
                return a.createElement(r.Z, { style: i[e.size] });
            }
            const i = o.default.create(
                Object.keys(o.default.theme.spacesPx).reduce((e, t) => {
                    const n = o.default.theme.spacesPx[t];
                    return (e[t] = { width: n, height: n }), e;
                }, {}),
            );
        },
        109808: (e, t, n) => {
            n.d(t, { e: () => I });
            var a = n(202784),
                r = n(565058),
                o = n(400752),
                c = n(987809),
                i = n(516951),
                l = n(176340),
                s = n(420182),
                p = n(385322),
                m = n(333259),
                d = n(536387),
                u = n(526250),
                h = n(901910),
                g = n(2138);
            function f(e, t, n) {
                return (0, r.cn)(null, (0, g.Z)(e, t, n));
            }
            var y = n(390387);
            const E = (0, d.K9)((e) => e(s.dd).withEndpoint(l.Z).spacebar()),
                _ = (0, c.xu)((e) =>
                    f(
                        (e, t) => {
                            t(E);
                        },
                        e,
                        { leading: !0, trailing: !1 },
                    ),
                ),
                v = (0, r.cn)((e) => {
                    const t = e(E.resolved)?.refresh_delay_secs;
                    return t ? _(t) : (0, r.cn)(null, () => {});
                }),
                b = f((e, t) => {
                    t(E);
                }, 1e4),
                w = (0, h.W)((e, t) => {
                    t(e(v));
                    const n = setInterval(() => {
                        t(e(v));
                    }, 3e5);
                    return () => {
                        clearInterval(n);
                    };
                }),
                Z = (0, h.W)((e, t) => {
                    const n = (0, y._h)(e(s.qc).getState());
                    if (!n) return i.Z;
                    const a = `/live_content/${n}`;
                    return (0, p.Cg)({ topic: a, featureSwitches: e(s.f0), onTopic: () => t(b) });
                }),
                S = (0, r.cn)((e) => (e(E), e(E.resolved)));
            function I() {
                const e = (0, o.Dv)(S),
                    t = (0, o.b9)(w);
                (0, u.N)(Z);
                const n = (0, m.mr)();
                return (
                    a.useEffect(() => {
                        if ("active" === n) return t();
                    }, [n, t]),
                    e
                );
            }
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                c = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacebarScreen.982c026a.js.map
