"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Collection"],
    {
        652904: (e, t, n) => {
            n.d(t, { Z: () => p });
            var s = n(202784),
                o = n(500002),
                r = n(668214),
                i = n(997174),
                a = n(118823);
            const c = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class l extends s.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: s },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: a,
                        } = e;
                    let c = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (c = !0));
                    const l = o || a;
                    ((l && o !== a) || (!l && n !== r) || s !== i || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: s } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), s(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const p = (0, o.ZP)(c(l));
        },
        795517: (e, t, n) => {
            n.r(t), n.d(t, { default: () => U });
            var s = n(202784),
                o = n(108362),
                r = n(111677),
                i = n.n(r),
                a = n(718e3),
                c = n(252021),
                l = n(652904),
                p = n(810641),
                d = n(293115),
                u = n(506899),
                m = n(88963),
                h = n(304819),
                y = n(318752);
            const w = /^[^-]+-/,
                f = new u.fK.Entity("collections", {}, { idAttribute: (e, t, n) => n.replace(w, ""), processStrategy: y.Z }),
                _ = { objects: { timelines: new u.fK.Values(f), tweets: new u.fK.Values(m.Z), users: new u.fK.Values(h.Z) } };
            var b = n(265617),
                g = n(120071);
            const I = (e) => ({ ...g.k(e), ...b.kX(e), count: 5 }),
                C = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchCollection(n, s = {}) {
                        const { id: o } = n;
                        return e.get("collections/entries", { ...I(t), ...n, id: `custom-${o}` }, s).then((e) => (0, u.Fv)(e, _));
                    },
                });
            var Z = n(218951),
                x = (n(136728), n(459679));
            const E = (e, t) => {
                if (0 === e.length) return;
                let n = e[0];
                for (let s = 1; s < e.length; s++) {
                    const o = e[s];
                    t(o, n) < 0 && (n = o);
                }
                return n;
            };
            var v = n(856674),
                k = n(226513),
                T = n(192337),
                P = n(962741),
                A = n(650706),
                K = n(263863);
            const N = (e, t) => {
                    const n = e.result.response.timeline,
                        s = (0, x.Z)(n, (e) => (e.tweet ? O(e.tweet) : void 0)),
                        o = E(s, (e, t) => -(0, v.ZP)(e.sortIndex, t.sortIndex)),
                        r = E(s, (e, t) => (0, v.ZP)(e.sortIndex, t.sortIndex)),
                        { min_position: i } = e.result.response.position || {},
                        a = i && r && D(i, r.sortIndex);
                    a && s.push(a);
                    const c = e.result.response.timeline_id.replace("custom-", ""),
                        { cards: l, collections: p, publishedArticles: d, tweets: u, users: m } = e.entities,
                        h = p && p[c],
                        y = !t?.cursor && h && L(c, o ? o.sortIndex : "0", h),
                        w = y ? [y, ...s] : s;
                    return { globalObjects: { cards: l || {}, tweets: u || {}, users: m || {}, ...(d ? { publishedArticles: d } : null) }, timeline: { instructions: w.length > 0 ? [{ type: A.Z.AddEntries, parameters: { entries: w } }] : [], responseObjects: {} } };
                },
                L = (e, t, n) => ({ type: "legacy_CollectionHeader", entryId: `header-${e}`, sortIndex: k.n(t), itemMetadata: {}, content: { authorId: n.user_id, name: n.name, description: n.description } }),
                O = (e) => ({ type: "tweet", entryId: `tweet-${e.id}`, sortIndex: e.sort_index, itemMetadata: {}, content: { id: e.id, displayType: K.Z.Tweet } }),
                D = (e, t) => ({ type: P.ZP.TimelineCursor, entryId: `cursor-${e}`, sortIndex: k.M(t), itemMetadata: {}, content: { value: e, cursorType: T.CursorType.Bottom } }),
                M = (e) => (0, Z.Z)({ timelineId: `legacy-collection-${e}`, network: { getEndpoint: (e) => e.withEndpoint(C).fetchCollection, getEndpointParams: ({ cursor: t, ...n }) => ({ ...n, id: e, max_position: t }) }, context: "FETCH_LEGACY_COLLECTION_CONTEXT", perfKey: "legacyCollection", formatResponse: N });
            const S = (0, n(335632).G)({}),
                $ = i().fd12ab58,
                B = i().ddf0ba7e,
                F = { page: "collection", section: "tweets" },
                U = ({ history: e, match: t }) => {
                    const { collectionId: n } = t.params;
                    return s.createElement(d.nO, { namespace: F }, s.createElement(l.Z, null, s.createElement(c.Z, { backLocation: "/", history: e, primaryContent: s.createElement(o.Z, null, s.createElement(p.Z, { entryConfiguration: S, module: M(n), title: $ })), sidebarContent: s.createElement(a.Z, null), title: B })));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Collection.6b113c5a.js.map
