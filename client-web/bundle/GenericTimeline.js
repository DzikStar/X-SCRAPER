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
                m = n(611423);
            const u = { ...(0, n(335632).G)({ withMuteConversation: !0 }) },
                h = o().a6d5b010,
                g = (e) => {
                    const { history: t, location: n } = e,
                        r = ((e) => e.state && e.state.urtUrl)(n),
                        o = r?.urtEndpointOptions,
                        d = o ? o.title : h,
                        g = o ? o.subtitle : void 0,
                        f = i.useMemo(() => r && (0, m.Z)({ urtUrl: r, timelinePrefix: "generic-" }), [r]);
                    return f ? i.createElement(c.Z, null, i.createElement(s.Z, { backLocation: "/", history: t, primaryContent: i.createElement(l.Z, { entryConfiguration: u, module: f, title: d }), sidebarContent: i.createElement(a.Z, { withWhoToFollow: !1 }), subtitle: g, title: d })) : i.createElement(p.Z, { to: "/" });
                },
                f = (0, d.Z)(g, { page: "generic_timeline" });
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var i = n(202784),
                r = n(890601),
                o = n(783427),
                a = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GenericTimeline.db143cea.js.map
