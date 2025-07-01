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
            o.d(t, { Z: () => l });
            var n = o(202784),
                a = o(500002),
                r = o(668214),
                i = o(997174),
                s = o(118823);
            const c = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class p extends n.Component {
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
                            locationKey: s,
                        } = e;
                    let c = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (c = !0));
                    const p = a || s;
                    ((p && a !== s) || (!p && o !== r) || n !== i || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            p.defaultProps = { children: null };
            const l = (0, a.ZP)(c(p));
        },
        460283: (e, t, o) => {
            o.r(t), o.d(t, { default: () => E });
            var n = o(202784),
                a = o(392237),
                r = o(205705),
                i = o(252021),
                s = o(652904),
                c = o(810641),
                p = o(655352),
                l = o(293115),
                d = o(644829),
                u = o(750085),
                m = o(218951);
            const h = () => (0, m.Z)({ timelineId: "video", network: { getEndpoint: (e) => e.withEndpoint(d.Z).fetchMediaTabVideoMixer, getEndpointParams: ({ count: e, cursor: t }) => ({ count: e, cursor: "string" == typeof t ? t : void 0 }) }, formatResponse: u.Z, context: "FETCH_MEDIA_TAB_VIDEO_TIMELINE", perfKey: "video" });
            var y = o(769471),
                Z = o(674530),
                _ = o(367879),
                f = o(335632),
                g = o(962741),
                b = o(742742);
            const v = (0, y.Z)({}, (0, f.G)({}), { [g.ZP.TimelineModule]: { handlers: { [b.Z.Carousel]: (0, _.Z)({ moduleDisplayType: Z.m.Carousel, divider: { top: !1, bottom: !1 } }), [b.Z.CompactCarousel]: (0, _.Z)({ moduleDisplayType: Z.m.CompactCarousel, divider: { top: !1, bottom: !1 } }) } } }),
                C = { page: "media" };
            function E({ history: e }) {
                const t = !(0, p.ZP)(),
                    o = n.useMemo(() => h(), []),
                    a = t ? n.createElement(r.Z, { style: w.icon }) : void 0;
                return n.createElement(l.nO, { namespace: C }, n.createElement(s.Z, { locationKey: C.page }, n.createElement(i.Z, { centeredLogo: a, history: e, isFullWidth: !0, primaryContent: n.createElement(c.Z, { entryConfiguration: v, module: o, title: "Video Screen" }), sidebarContent: null })));
            }
            const w = a.default.create((e) => ({ icon: { flexGrow: 1, height: "1.75rem", color: e.colors.brandColor } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.VideoScreen.1f8bb0aa.js.map
