"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.VideoScreen"],
    {
        252021: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                a = o(107267),
                r = o(115553);
            const i = (e) => {
                (0, a.useHistory)();
                return n.createElement(r.A, e);
            };
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                a = o(500002),
                r = o(668214),
                i = o(997174),
                c = o(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: c.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class l extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: c,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const l = a || c;
                    ((l && a !== c) || (!l && o !== r) || n !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, a.ZP)(s(l));
        },
        460283: (e, t, o) => {
            o.r(t), o.d(t, { default: () => w });
            var n = o(202784),
                a = o(392237),
                r = o(205705),
                i = o(252021),
                c = o(652904),
                s = o(810641),
                l = o(655352),
                d = o(293115),
                p = o(644829),
                m = o(750085),
                u = o(218951);
            const h = () => (0, u.Z)({ timelineId: "video", network: { getEndpoint: (e) => e.withEndpoint(p.Z).fetchMediaTabVideoMixer, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: m.Z, context: "FETCH_MEDIA_TAB_VIDEO_TIMELINE", perfKey: "video" });
            var v = o(769471),
                Z = o(674530),
                g = o(367879),
                y = o(335632),
                b = o(962741),
                f = o(742742);
            const E = (0, v.Z)({}, (0, y.G)({}), { [b.ZP.TimelineModule]: { handlers: { [f.Z.Carousel]: (0, g.Z)({ moduleDisplayType: Z.m.Carousel, divider: { top: !1, bottom: !1 } }), [f.Z.CompactCarousel]: (0, g.Z)({ moduleDisplayType: Z.m.CompactCarousel, divider: { top: !1, bottom: !1 } }) } } }),
                _ = { page: "media" };
            function w({ history: e }) {
                const t = !(0, l.ZP)(),
                    o = n.useMemo(() => h(), []),
                    a = t ? n.createElement(r.Z, { style: C.icon }) : void 0;
                return n.createElement(d.nO, { namespace: _ }, n.createElement(c.Z, { locationKey: _.page }, n.createElement(i.Z, { centeredLogo: a, history: e, isFullWidth: !0, primaryContent: n.createElement(s.Z, { entryConfiguration: E, module: o, title: "Video Screen" }), sidebarContent: null })));
            }
            const C = a.default.create((e) => ({ icon: { flexGrow: 1, height: "1.75rem", color: e.colors.brandColor } }));
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var n = o(202784),
                a = o(890601),
                r = o(783427),
                i = o(347101);
            const c = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            c.metadata = { width: 24, height: 24 };
            const s = c;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.VideoScreen.d4cef55a.js.map
