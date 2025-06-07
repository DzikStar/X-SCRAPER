"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Collection"],
    {
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                s = n(500002),
                r = n(668214),
                i = n(997174),
                a = n(118823);
            const c = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class l extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: a,
                        } = e;
                    let c = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (c = !0));
                    const l = s || a;
                    ((l && s !== a) || (!l && n !== r) || o !== i || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            l.defaultProps = { children: null };
            const d = (0, s.ZP)(c(l));
        },
        795517: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var o = n(202784),
                s = n(108362),
                r = n(111677),
                i = n.n(r),
                a = n(718e3),
                c = n(252021),
                l = n(652904),
                d = n(810641),
                p = n(293115),
                u = n(506899),
                m = n(88963),
                h = n(304819),
                w = n(318752);
            const y = /^[^-]+-/,
                g = new u.fK.Entity("collections", {}, { idAttribute: (e, t, n) => n.replace(y, ""), processStrategy: w.Z }),
                v = { objects: { timelines: new u.fK.Values(g), tweets: new u.fK.Values(m.Z), users: new u.fK.Values(h.Z) } };
            var b = n(265617),
                f = n(120071);
            const Z = (e) => ({ ...f.k(e), ...b.kX(e), count: 5 }),
                _ = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchCollection(n, o = {}) {
                        const { id: s } = n;
                        return e.get("collections/entries", { ...Z(t), ...n, id: `custom-${s}` }, o).then((e) => (0, u.Fv)(e, v));
                    },
                });
            var I = n(218951),
                C = (n(136728), n(459679));
            const x = (e, t) => {
                if (0 === e.length) return;
                let n = e[0];
                for (let o = 1; o < e.length; o++) {
                    const s = e[o];
                    t(s, n) < 0 && (n = s);
                }
                return n;
            };
            var E = n(856674),
                k = n(226513),
                T = n(192337),
                P = n(962741),
                M = n(650706),
                z = n(263863);
            const A = (e, t) => {
                    const n = e.result.response.timeline,
                        o = (0, C.Z)(n, (e) => (e.tweet ? K(e.tweet) : void 0)),
                        s = x(o, (e, t) => -(0, E.ZP)(e.sortIndex, t.sortIndex)),
                        r = x(o, (e, t) => (0, E.ZP)(e.sortIndex, t.sortIndex)),
                        { min_position: i } = e.result.response.position || {},
                        a = i && r && N(i, r.sortIndex);
                    a && o.push(a);
                    const c = e.result.response.timeline_id.replace("custom-", ""),
                        { cards: l, collections: d, publishedArticles: p, tweets: u, users: m } = e.entities,
                        h = d && d[c],
                        w = !t?.cursor && h && H(c, s ? s.sortIndex : "0", h),
                        y = w ? [w, ...o] : o;
                    return { globalObjects: { cards: l || {}, tweets: u || {}, users: m || {}, ...(p ? { publishedArticles: p } : null) }, timeline: { instructions: y.length > 0 ? [{ type: M.Z.AddEntries, parameters: { entries: y } }] : [], responseObjects: {} } };
                },
                H = (e, t, n) => ({ type: "legacy_CollectionHeader", entryId: `header-${e}`, sortIndex: k.n(t), itemMetadata: {}, content: { authorId: n.user_id, name: n.name, description: n.description } }),
                K = (e) => ({ type: "tweet", entryId: `tweet-${e.id}`, sortIndex: e.sort_index, itemMetadata: {}, content: { id: e.id, displayType: z.Z.Tweet } }),
                N = (e, t) => ({ type: P.ZP.TimelineCursor, entryId: `cursor-${e}`, sortIndex: k.M(t), itemMetadata: {}, content: { value: e, cursorType: T.CursorType.Bottom } }),
                V = (e) => (0, I.Z)({ timelineId: `legacy-collection-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_).fetchCollection, getEndpointParams: ({ cursor: t, ...n }) => ({ ...n, id: e, max_position: t }) }, context: "FETCH_LEGACY_COLLECTION_CONTEXT", perfKey: "legacyCollection", formatResponse: A });
            const D = (0, n(335632).G)({}),
                L = i().fd12ab58,
                O = i().ddf0ba7e,
                B = { page: "collection", section: "tweets" },
                S = ({ history: e, match: t }) => {
                    const { collectionId: n } = t.params;
                    return o.createElement(p.nO, { namespace: B }, o.createElement(l.Z, null, o.createElement(c.Z, { backLocation: "/", history: e, primaryContent: o.createElement(s.Z, null, o.createElement(d.Z, { entryConfiguration: D, module: V(n), title: L })), sidebarContent: o.createElement(a.Z, null), title: O })));
                };
        },
        748138: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                s = n(890601),
                r = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Collection.09f257fa.js.map
