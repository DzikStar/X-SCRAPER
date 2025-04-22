"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AudioSpacebarScreen", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(202784),
                r = n(99107),
                o = n(272175),
                c = n(674132);
            const s = n.n(c)().c39b0e24,
                i = ({ deepLink: e }) => {
                    const t = s;
                    return e ? a.createElement(o.ql, null, a.createElement("meta", { content: e, property: "al:ios:url" }), a.createElement("meta", { content: r.AF, property: "al:ios:app_store_id" }), a.createElement("meta", { content: t, property: "al:ios:app_name" }), a.createElement("meta", { content: e, property: "al:android:url" }), a.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), a.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(202784),
                r = n(272175);
            const o = (e) => {
                const { canonical: t, description: n = "", image: o, imageAlt: c, imageH: s, imageType: i, imageW: l, title: p, ttl: u, type: d } = e;
                return a.createElement(r.ql, null, d ? a.createElement("meta", { content: d, property: "og:type" }) : null, t ? a.createElement("meta", { content: t, property: "og:url" }) : null, p ? a.createElement("meta", { content: p, property: "og:title" }) : null, a.createElement("meta", { content: n, property: "og:description" }), o ? a.createElement("meta", { content: o, property: "og:image" }) : null, i ? a.createElement("meta", { content: i, property: "og:image:type" }) : null, l ? a.createElement("meta", { content: l, property: "og:image:width" }) : null, s ? a.createElement("meta", { content: s, property: "og:image:height" }) : null, c ? a.createElement("meta", { content: c, property: "og:image:alt" }) : null, u ? a.createElement("meta", { content: u, property: "og:ttl" }) : null);
            };
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(500002),
                o = n(668214),
                c = n(997174),
                s = n(118823);
            const i = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: c.NH }))
                .withAnalytics();
            class l extends a.Component {
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
                            locationKey: s,
                        } = e;
                    let i = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (i = !0));
                    const l = r || s;
                    ((l && r !== s) || (!l && n !== o) || a !== c || i) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const p = (0, r.ZP)(i(l));
        },
        805137: (e, t, n) => {
            n.d(t, { B: () => y });
            var a = n(807896),
                r = (n(136728), n(202784)),
                o = n(555874),
                c = n(537392),
                s = n(457311),
                i = n(108362),
                l = n(392237),
                p = n(776342),
                u = n(674132),
                d = n.n(u),
                m = n(774654),
                h = n(755988),
                g = n(22492),
                f = n(782394);
            function y() {
                const e = m.ZM.getAppBarHeight(),
                    t = { minHeight: (0, c.iv)().height - e, paddingBottom: e },
                    n = (0, f.e)(),
                    l = n?.threads || [];
                if (!l.length) return r.createElement(s.Z, { header: b.Nothing_to_see_here });
                const p = [];
                return (
                    l.forEach((e) => {
                        if (e.live_content.audiospace) {
                            const t = e.live_content.audiospace.broadcast_id;
                            p.push({ audioSpaceId: t });
                        }
                    }),
                    r.createElement(i.Z, { withGutter: !0 }, r.createElement(o.Z, (0, a.Z)({}, E, { data: p, style: [t, _.flatList] })), r.createElement(E.ItemSeparatorComponent, null))
                );
            }
            const _ = l.default.create((e) => ({ flatList: { scrollbarWidth: "none" } })),
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
                b = { Nothing_to_see_here: d().e9f1fbcc };
        },
        22492: (e, t, n) => {
            n.d(t, { L: () => c });
            var a = n(202784),
                r = n(325686),
                o = n(392237);
            function c(e) {
                return a.createElement(r.Z, { style: s[e.size] });
            }
            const s = o.default.create(
                Object.keys(o.default.theme.spacesPx).reduce((e, t) => {
                    const n = o.default.theme.spacesPx[t];
                    return (e[t] = { width: n, height: n }), e;
                }, {}),
            );
        },
        782394: (e, t, n) => {
            n.d(t, { e: () => m });
            var a = n(202784),
                r = n(565058),
                o = n(400752),
                c = n(465233),
                s = n(952793),
                i = n(58255);
            const l = (0, r.cn)({ data: void 0, lastFetched: 0, errorCount: 0 }),
                p = (0, r.cn)(0),
                u = (0, r.cn)(
                    (e) => (e(p), e(l).data),
                    async (e, t) => {
                        try {
                            const { lastFetched: n } = e(l),
                                a = Date.now();
                            if (a - n < 3e4) return;
                            const r = await i.w.spacebar();
                            t(l, { data: r, lastFetched: a, errorCount: 0 }), t(p, e(p) + 1);
                        } catch (n) {
                            const a = e(l),
                                r = Date.now();
                            t(l, { ...a, lastFetched: r, errorCount: a.errorCount + 1 }), t(p, e(p) + 1);
                        }
                    },
                ),
                d = (0, r.cn)(
                    (e) => e(u),
                    (e, t) => {
                        let n;
                        const a = async () => {
                            await t(u);
                            const r = e(u),
                                o = h(r?.refresh_delay_secs) ? 1e3 * r.refresh_delay_secs : 3e4;
                            n = setTimeout(a, o);
                        };
                        return a(), () => clearTimeout(n);
                    },
                );
            function m() {
                const e = (function () {
                        const [e, t] = (0, o.KO)(d);
                        return a.useEffect(() => t(), [t]), e;
                    })(),
                    t = (function () {
                        const [e, t] = a.useState(),
                            r = (0, s.hC)("spaces_2022_h2_spacebar_use_mock_data");
                        return (
                            a.useEffect(
                                function () {
                                    r &&
                                        n
                                            .e("ondemand.Spacebar.Mocks")
                                            .then(n.bind(n, 731020))
                                            .then((e) => {
                                                t(e);
                                            });
                                },
                                [r],
                            ),
                            e ? e.default : []
                        );
                    })(),
                    r = (0, c.Z)(e);
                return Array.isArray(r?.threads) && (r.threads = r.threads.concat(t)), r;
            }
            const h = (e) => "number" == typeof e && e > 0;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AudioSpacebarScreen.3e0b789a.js.map
