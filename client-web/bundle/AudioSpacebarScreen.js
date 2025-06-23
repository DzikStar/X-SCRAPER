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
            n.d(t, { B: () => v });
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
            function v() {
                const e = u.ZM.getAppBarHeight(),
                    t = { minHeight: (0, c.iv)().height - e, paddingBottom: e },
                    n = (0, f.e)(),
                    s = n?.threads || [];
                if (!s.length) return r.createElement(i.Z, { header: _.Nothing_to_see_here });
                const p = [];
                return (
                    s.forEach((e) => {
                        if (e.live_content.audiospace) {
                            const t = e.live_content.audiospace.broadcast_id;
                            p.push({ audioSpaceId: t });
                        }
                    }),
                    r.createElement(l.Z, { withGutter: !0 }, r.createElement(o.Z, (0, a.Z)({}, E, { data: p, style: [t, y.flatList] })), r.createElement(E.ItemSeparatorComponent, null))
                );
            }
            const y = s.default.create((e) => ({ flatList: { scrollbarWidth: "none" } })),
                E = {
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
                _ = { Nothing_to_see_here: d().e9f1fbcc };
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
            var v = n(390387);
            const y = (0, d.K9)((e) => e(s.dd).withEndpoint(l.Z).spacebar()),
                E = (0, c.xu)((e) =>
                    f(
                        (e, t) => {
                            t(y);
                        },
                        e,
                        { leading: !0, trailing: !1 },
                    ),
                ),
                _ = (0, r.cn)((e) => {
                    const t = e(y.resolved)?.refresh_delay_secs;
                    return t ? E(t) : (0, r.cn)(null, () => {});
                }),
                b = f((e, t) => {
                    t(y);
                }, 1e4),
                w = (0, h.W)((e, t) => {
                    t(e(_));
                    const n = setInterval(() => {
                        t(e(_));
                    }, 3e5);
                    return () => {
                        clearInterval(n);
                    };
                }),
                Z = (0, h.W)((e, t) => {
                    const n = (0, v._h)(e(s.qc).getState());
                    if (!n) return i.Z;
                    const a = `/live_content/${n}`;
                    return (0, p.Cg)({ topic: a, featureSwitches: e(s.f0), onTopic: () => t(b) });
                }),
                S = (0, r.cn)((e) => (e(y), e(y.resolved)));
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
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var a = n(202784),
                r = n(890601),
                o = n(783427),
                c = n(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [c.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacebarScreen.d70697ba.js.map
