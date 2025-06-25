"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GenericTimeline"],
    {
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var i = n(202784),
                r = n(500002),
                o = n(668214),
                a = n(997174),
                s = n(118823);
            const c = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
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
                            location: { pathname: o, search: a },
                            locationKey: s,
                        } = e;
                    let c = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (c = !0));
                    const l = r || s;
                    ((l && r !== s) || (!l && n !== o) || i !== a || c) && this._performPageUpdates(this.props);
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
            const d = (0, r.ZP)(c(l));
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
            n.d(t, { R: () => c, Z: () => s });
            var i = n(503768),
                r = n(644829),
                o = n(750085),
                a = n(218951);
            const s = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: n, timelineId: i }) => (0, a.Z)({ timelineId: i, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(r.Z).fetchGeneric, getEndpointParams: ({ count: n, cursor: i }) => ({ ...e, cursor: "string" == typeof i ? i : void 0, count: n, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                c = (e, t) => (0, a.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(i.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: n }) => ({ cursor: "string" == typeof n ? n : void 0, count: t, timelineId: e }) }, formatResponse: o.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => o });
            var i = n(553093),
                r = n(383675);
            const o = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: o } = t,
                    { cacheId: a, requestParams: s, timeline: c } = o || {};
                return c?.id ? (0, r.R)(c.id) : (0, r.Z)({ timelineId: a || `${e}${(0, i.Sz)(t)}`, endpointUrl: n, endpointParams: s || {} });
            };
        },
        306540: (e, t, n) => {
            n.r(t), n.d(t, { GenericTimelineScreen: () => g, default: () => f });
            var i = n(202784),
                r = n(111677),
                o = n.n(r),
                a = n(718e3),
                s = n(252021),
                c = n(652904),
                l = n(810641),
                d = n(725516),
                p = n(615027),
                h = n(611423);
            const m = { ...(0, n(335632).G)({ withMuteConversation: !0 }) },
                u = o().a6d5b010,
                g = (e) => {
                    const { history: t, location: n } = e,
                        r = ((e) => e.state && e.state.urtUrl)(n),
                        o = r?.urtEndpointOptions,
                        d = o ? o.title : u,
                        g = o ? o.subtitle : void 0,
                        f = i.useMemo(() => r && (0, h.Z)({ urtUrl: r, timelinePrefix: "generic-" }), [r]);
                    return f ? i.createElement(c.Z, null, i.createElement(s.Z, { backLocation: "/", history: t, primaryContent: i.createElement(l.Z, { entryConfiguration: m, module: f, title: d }), sidebarContent: i.createElement(a.Z, { withWhoToFollow: !1 }), subtitle: g, title: d })) : i.createElement(p.Z, { to: "/" });
                },
                f = (0, d.Z)(g, { page: "generic_timeline" });
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GenericTimeline.97de92ca.js.map
