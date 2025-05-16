"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GenericTimeline"],
    {
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
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
            n.r(t), n.d(t, { GenericTimelineScreen: () => g, default: () => b });
            var i = n(202784),
                r = n(332920),
                o = n.n(r),
                a = n(718e3),
                s = n(252021),
                c = n(652904),
                l = n(810641),
                p = n(725516),
                u = n(615027),
                d = n(611423);
            const m = { ...(0, n(335632).G)({ withMuteConversation: !0 }) },
                h = o().a6d5b010,
                g = (e) => {
                    const { history: t, location: n } = e,
                        r = ((e) => e.state && e.state.urtUrl)(n),
                        o = r?.urtEndpointOptions,
                        p = o ? o.title : h,
                        g = o ? o.subtitle : void 0,
                        b = i.useMemo(() => r && (0, d.Z)({ urtUrl: r, timelinePrefix: "generic-" }), [r]);
                    return b ? i.createElement(c.Z, null, i.createElement(s.Z, { backLocation: "/", history: t, primaryContent: i.createElement(l.Z, { entryConfiguration: m, module: b, title: p }), sidebarContent: i.createElement(a.Z, { withWhoToFollow: !1 }), subtitle: g, title: p })) : i.createElement(u.Z, { to: "/" });
                },
                b = (0, p.Z)(g, { page: "generic_timeline" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GenericTimeline.32e513aa.js.map
