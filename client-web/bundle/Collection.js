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
            n.r(t), n.d(t, { default: () => $ });
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
                b = { objects: { timelines: new u.fK.Values(g), tweets: new u.fK.Values(m.Z), users: new u.fK.Values(h.Z) } };
            var f = n(265617),
                C = n(120071);
            const Z = (e) => ({ ...C.k(e), ...f.kX(e), count: 5 }),
                _ = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchCollection(n, o = {}) {
                        const { id: s } = n;
                        return e.get("collections/entries", { ...Z(t), ...n, id: `custom-${s}` }, o).then((e) => (0, u.Fv)(e, b));
                    },
                });
            var I = n(218951),
                v = (n(136728), n(459679));
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
                        o = (0, v.Z)(n, (e) => (e.tweet ? L(e.tweet) : void 0)),
                        s = x(o, (e, t) => -(0, E.ZP)(e.sortIndex, t.sortIndex)),
                        r = x(o, (e, t) => (0, E.ZP)(e.sortIndex, t.sortIndex)),
                        { min_position: i } = e.result.response.position || {},
                        a = i && r && N(i, r.sortIndex);
                    a && o.push(a);
                    const c = e.result.response.timeline_id.replace("custom-", ""),
                        { cards: l, collections: d, publishedArticles: p, tweets: u, users: m } = e.entities,
                        h = d && d[c],
                        w = !t?.cursor && h && K(c, s ? s.sortIndex : "0", h),
                        y = w ? [w, ...o] : o;
                    return { globalObjects: { cards: l || {}, tweets: u || {}, users: m || {}, ...(p ? { publishedArticles: p } : null) }, timeline: { instructions: y.length > 0 ? [{ type: M.Z.AddEntries, parameters: { entries: y } }] : [], responseObjects: {} } };
                },
                K = (e, t, n) => ({ type: "legacy_CollectionHeader", entryId: `header-${e}`, sortIndex: k.n(t), itemMetadata: {}, content: { authorId: n.user_id, name: n.name, description: n.description } }),
                L = (e) => ({ type: "tweet", entryId: `tweet-${e.id}`, sortIndex: e.sort_index, itemMetadata: {}, content: { id: e.id, displayType: z.Z.Tweet } }),
                N = (e, t) => ({ type: P.ZP.TimelineCursor, entryId: `cursor-${e}`, sortIndex: k.M(t), itemMetadata: {}, content: { value: e, cursorType: T.CursorType.Bottom } }),
                S = (e) => (0, I.Z)({ timelineId: `legacy-collection-${e}`, network: { getEndpoint: (e) => e.withEndpoint(_).fetchCollection, getEndpointParams: ({ cursor: t, ...n }) => ({ ...n, id: e, max_position: t }) }, context: "FETCH_LEGACY_COLLECTION_CONTEXT", perfKey: "legacyCollection", formatResponse: A });
            const D = (0, n(335632).G)({}),
                O = i().fd12ab58,
                B = i().ddf0ba7e,
                H = { page: "collection", section: "tweets" },
                $ = ({ history: e, match: t }) => {
                    const { collectionId: n } = t.params;
                    return o.createElement(p.nO, { namespace: H }, o.createElement(l.Z, null, o.createElement(c.Z, { backLocation: "/", history: e, primaryContent: o.createElement(s.Z, null, o.createElement(d.Z, { entryConfiguration: D, module: S(n), title: O })), sidebarContent: o.createElement(a.Z, null), title: B })));
                };
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var o = n(202784),
                s = n(890601),
                r = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const c = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Collection.a84ec4aa.js.map
