"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GenericTimeline"],
    {
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(202784),
                r = n(500002),
                o = n(668214),
                s = n(997174),
                a = n(118823);
            const c = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: s.NH }))
                .withAnalytics();
            class l extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: i },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: s },
                            locationKey: a,
                        } = e;
                    let c = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (c = !0));
                    const l = r || a;
                    ((l && r !== a) || (!l && n !== o) || i !== s || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: i } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), i(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const p = (0, r.ZP)(c(l));
        },
        553093: (e, t, n) => {
            n.d(t, { Sz: () => i });
            const i = (e) => {
                    const t = (JSON.stringify(e) || "").split("");
                    t.sort();
                    const n = t.join("");
                    return r(n, 0).toString();
                },
                r = (e, t) => {
                    const n = "string" == typeof e ? e : String(e);
                    let i = t;
                    for (let e = 0; e < n.length; e++) {
                        (i = (i << 5) - i + n.charCodeAt(e)), (i |= 0);
                    }
                    return i;
                };
        },
        383675: (e, t, n) => {
            n.d(t, { R: () => c, Z: () => a });
            var i = n(503768),
                r = n(644829),
                o = n(750085),
                s = n(218951);
            const a = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: n, timelineId: i }) => (0, s.Z)({ timelineId: i, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchGeneric, getEndpointParams: ({ count: n, cursor: i }) => ({ ...e, cursor: "string" == typeof i ? i : void 0, count: n, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                c = (e, t) => (0, s.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(i.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: n }) => ({ cursor: "string" == typeof n ? n : void 0, count: t, timelineId: e }) }, formatResponse: o.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => o });
            var i = n(553093),
                r = n(383675);
            const o = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: o } = t,
                    { cacheId: s, requestParams: a, timeline: c } = o || {};
                return c?.id ? (0, r.R)(c.id) : (0, r.Z)({ timelineId: s || `${e}${(0, i.Sz)(t)}`, endpointUrl: n, endpointParams: a || {} });
            };
        },
        306540: (e, t, n) => {
            n.r(t), n.d(t, { GenericTimelineScreen: () => g, default: () => f });
            var i = n(202784),
                r = n(111677),
                o = n.n(r),
                s = n(718e3),
                a = n(252021),
                c = n(652904),
                l = n(810641),
                p = n(725516),
                d = n(615027),
                u = n(611423);
            const m = { ...(0, n(335632).G)({ withMuteConversation: !0 }) },
                h = o().a6d5b010,
                g = (e) => {
                    const { history: t, location: n } = e,
                        r = ((e) => e.state && e.state.urtUrl)(n),
                        o = r?.urtEndpointOptions,
                        p = o ? o.title : h,
                        g = o ? o.subtitle : void 0,
                        f = i.useMemo(() => r && (0, u.Z)({ urtUrl: r, timelinePrefix: "generic-" }), [r]);
                    return f ? i.createElement(c.Z, null, i.createElement(a.Z, { backLocation: "/", history: t, primaryContent: i.createElement(l.Z, { entryConfiguration: m, module: f, title: p }), sidebarContent: i.createElement(s.Z, { withWhoToFollow: !1 }), subtitle: g, title: p })) : i.createElement(d.Z, { to: "/" });
                },
                f = (0, p.Z)(g, { page: "generic_timeline" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GenericTimeline.b4e5066a.js.map
