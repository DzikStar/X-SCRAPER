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
                const { canonical: t, description: n = "", image: o, imageAlt: c, imageH: i, imageType: l, imageW: p, title: s, ttl: u, type: m } = e;
                return a.createElement(r.ql, null, m ? a.createElement("meta", { content: m, property: "og:type" }) : null, t ? a.createElement("meta", { content: t, property: "og:url" }) : null, s ? a.createElement("meta", { content: s, property: "og:title" }) : null, a.createElement("meta", { content: n, property: "og:description" }), o ? a.createElement("meta", { content: o, property: "og:image" }) : null, l ? a.createElement("meta", { content: l, property: "og:image:type" }) : null, p ? a.createElement("meta", { content: p, property: "og:image:width" }) : null, i ? a.createElement("meta", { content: i, property: "og:image:height" }) : null, c ? a.createElement("meta", { content: c, property: "og:image:alt" }) : null, u ? a.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(202784),
                r = n(500002),
                o = n(668214),
                c = n(997174),
                i = n(118823);
            const l = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: c.NH }))
                .withAnalytics();
            class p extends a.Component {
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
                    const p = r || i;
                    ((p && r !== i) || (!p && n !== o) || a !== c || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            p.defaultProps = { children: null };
            const s = (0, r.ZP)(l(p));
        },
        805137: (e, t, n) => {
            n.d(t, { B: () => y });
            var a = n(807896),
                r = (n(136728), n(202784)),
                o = n(555874),
                c = n(537392),
                i = n(457311),
                l = n(108362),
                p = n(392237),
                s = n(776342),
                u = n(111677),
                m = n.n(u),
                d = n(774654),
                h = n(755988),
                g = n(22492),
                f = n(109808);
            function y() {
                const e = d.ZM.getAppBarHeight(),
                    t = { minHeight: (0, c.iv)().height - e, paddingBottom: e },
                    n = (0, f.e)(),
                    p = n?.threads || [];
                if (!p.length) return r.createElement(i.Z, { header: v.Nothing_to_see_here });
                const s = [];
                return (
                    p.forEach((e) => {
                        if (e.live_content.audiospace) {
                            const t = e.live_content.audiospace.broadcast_id;
                            s.push({ audioSpaceId: t });
                        }
                    }),
                    r.createElement(l.Z, { withGutter: !0 }, r.createElement(o.Z, (0, a.Z)({}, _, { data: s, style: [t, E.flatList] })), r.createElement(_.ItemSeparatorComponent, null))
                );
            }
            const E = p.default.create((e) => ({ flatList: { scrollbarWidth: "none" } })),
                _ = {
                    getItemLayout: function (e, t) {
                        const n = s.default.getMinHeight(!1);
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
                v = { Nothing_to_see_here: m().e9f1fbcc };
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
                p = n(420182),
                s = n(385322),
                u = n(333259),
                m = n(536387),
                d = n(526250),
                h = n(901910),
                g = n(2138);
            function f(e, t, n) {
                return (0, r.cn)(null, (0, g.Z)(e, t, n));
            }
            var y = n(390387);
            const E = (0, m.K9)((e) => e(p.dd).withEndpoint(l.Z).spacebar()),
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
                    const n = (0, y._h)(e(p.qc).getState());
                    if (!n) return i.Z;
                    const a = `/live_content/${n}`;
                    return (0, s.Cg)({ topic: a, featureSwitches: e(p.f0), onTopic: () => t(b) });
                }),
                S = (0, r.cn)((e) => (e(E), e(E.resolved)));
            function I() {
                const e = (0, o.Dv)(S),
                    t = (0, o.b9)(w);
                (0, d.N)(Z);
                const n = (0, u.mr)();
                return (
                    a.useEffect(() => {
                        if ("active" === n) return t();
                    }, [n, t]),
                    e
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacebarScreen.ea33b3fa.js.map
