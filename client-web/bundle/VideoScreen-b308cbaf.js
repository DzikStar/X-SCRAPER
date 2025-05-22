"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.VideoScreen-b308cbaf", "bundle.Articles-9fdb7097"],
    {
        290402: (e, t, i) => {
            i.d(t, { Z: () => m });
            var n = i(807896),
                r = i(202784),
                s = i(182056),
                o = i(879113),
                a = i(392237),
                l = i(332920),
                c = i.n(l),
                d = i(968478);
            const p = c().aa6e3300,
                h = ({ retryMessage: e, ...t }, i) => {
                    const a = s.Z.isOnline();
                    return r.createElement(o.Z, (0, n.Z)({}, t, { icon: a ? void 0 : r.createElement(d.default, { style: u.icon }), retryMessage: a ? e : p }));
                },
                u = a.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = r.forwardRef(h);
        },
        959658: (e, t, i) => {
            i.d(t, { b: () => _ });
            var n = i(807896),
                r = i(202784),
                s = i(325686),
                o = i(292627),
                a = i(365023),
                l = i(664064),
                c = i(392237);
            const d = r.createContext({ query: null });
            var p = i(687103),
                h = i(461756),
                u = i(925885),
                m = i(952793);
            function y() {
                const e = (0, m.hC)("hashfetti_enabled"),
                    t = (0, m.hC)("hashfetti_all_hashflags"),
                    i = (0, m.D2)("hashfetti_duration_ms").getNumberValue(4e3),
                    n = (0, m.D2)("hashfetti_particle_count").getNumberValue(30),
                    { query: s } = r.useContext(d),
                    o = (0, p.Ck)();
                if (!e || !s || h.Z.reducedMotionEnabled) return null;
                const a = (0, u.Z)(s);
                let l;
                for (const e of a) {
                    const t = o.getBrandedHashtag(e.hashtag);
                    if (t) {
                        l = t;
                        break;
                    }
                }
                const c = l?.url;
                return c && (l?.hashfetti || t) ? { url: c, duration_ms: i, count: n } : null;
            }
            function f() {
                const e = y();
                if (!e) return null;
                const t = b.container;
                return r.createElement(
                    o.Z.Hashfetti,
                    null,
                    r.createElement(a.Z, { id: "Hashfetti" }, (i, o) => r.createElement(s.Z, (0, n.Z)({ ref: i() }, o({ style: t })), r.createElement(l.Z, { autoplay: !0, count: e.count, duration: e.duration_ms, image_url: e.url, max_rotation: 0.125 * Math.PI, type: "image" }))),
                );
            }
            f.Provider = function (e) {
                const { query: t } = e;
                return r.createElement(d.Provider, { value: { query: t } }, e.children);
            };
            const _ = f,
                b = c.default.create((e) => ({ container: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0 } }));
        },
        334346: (e, t, i) => {
            i.d(t, { C: () => l, Z: () => a });
            var n = i(807896),
                r = i(202784),
                s = i(524084),
                o = i(768572);
            const a = "stable_sort_index",
                l = r.forwardRef((e, t) => {
                    const i = e.cacheKey;
                    return r.createElement(o.ZP, { identifier: i }, r.createElement(s.Z, (0, n.Z)({ ref: t }, e)));
                });
        },
        674530: (e, t, i) => {
            i.d(t, { m: () => n });
            i(202784);
            const n = Object.freeze({ Carousel: "Carousel", CompactCarousel: "CompactCarousel", GridCarousel: "GridCarousel", PagedCarousel: "PagedCarousel", Vertical: "Vertical" });
        },
        252021: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n = i(202784),
                r = i(107267),
                s = i(115553);
            const o = (e) => {
                (0, r.useHistory)();
                return n.createElement(s.A, e);
            };
        },
        638537: (e, t, i) => {
            i.d(t, { Z: () => y });
            var n = i(332920),
                r = i.n(n),
                s = i(833458),
                o = i(530813);
            const a = r().e40252de,
                l = r().ae225c26,
                c = r().a96d2628,
                d = r().d00abae0,
                p = r().e566dd06,
                h = r().j3cc1526,
                u = r().h435716e,
                m = r().e8ba412e,
                y = (e) => {
                    const { hideSubtext: t = !1, list: i } = e,
                        n = i.muting,
                        r = { text: n ? l : a, Icon: n ? s.default : o.default, onClick: () => f(e), subText: n ? u : d };
                    return t && ((r.text = n ? h : c), (r.subText = void 0)), r;
                },
                f = (e) => {
                    const { addToast: t, list: i, scribe: n, toggleMute: r } = e;
                    if (!i || !i.id_str) return;
                    const { id_str: s, muting: o } = i,
                        a = o ? m : p,
                        l = o ? "unmute_list" : "mute_list";
                    r(s, { mute: !o }).then(() => {
                        t && t({ text: a });
                    }),
                        n({ action: "click", element: l });
                };
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(202784),
                r = i(500002),
                s = i(668214),
                o = i(997174),
                a = i(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: s, search: o },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const c = r || a;
                    ((c && r !== a) || (!c && i !== s) || n !== o || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(l(c));
        },
        324260: (e, t, i) => {
            i.d(t, { $: () => g, C: () => a });
            var n = i(332920),
                r = i.n(n),
                s = i(833057),
                o = i(676145);
            const a = Object.freeze({ Pinnable: "Pinnable", Pinned: "Pinned", NotPinnable: "NotPinnable" }),
                l = { headline: r().d66e95cc, label: r().i24ed0de, text: r().b1033082 },
                c = { headline: r().e96a5962, label: r().ec04e6fc, text: r().d05618f2 },
                d = { [a.NotPinnable]: void 0, [a.Pinnable]: l, [a.Pinned]: c },
                p = { [a.NotPinnable]: "", [a.Pinnable]: r().j9aedfdc, [a.Pinned]: r().c034211a },
                h = { [a.NotPinnable]: "", [a.Pinnable]: r().ie4538b4, [a.Pinned]: r().ad135a24 },
                u = { [a.NotPinnable]: "", [a.Pinnable]: r().ee369efc, [a.Pinned]: r().c3e7f572 },
                m = { [a.NotPinnable]: !1, [a.Pinnable]: !0, [a.Pinned]: !0 },
                y = (e) => !!m[e],
                f = (e) => (e?.content?.id && (0, o.Z)(e.content.id) ? e.content.id : null);
            const _ = "click",
                b = "pinned_reply";
            function g(e, t) {
                const { feedbackAction: i, feedbackEntry: n, feedbackKey: r, pinReply: o, scribe: l, scribeData: c, scribeNamespace: m, unpinReply: g } = t,
                    E = i.richBehavior?.replyPinState || a.NotPinnable,
                    T = (e) => {
                        l({ ...m, action: _, component: b, element: e }, c);
                    },
                    I = { feedbackKey: r, willScribe: !0, skipDefaultAction: !0 },
                    v = f(n),
                    k = y(E);
                if (!v || !k || !e.isTrue("responsive_web_pinned_replies_enabled") || e.isTrue("responsive_web_lbm_v2_replies_enabled")) return { ...I, excludeFromActionMenu: !0, text: "" };
                const R = E === a.Pinnable ? (e) => (T("pin"), o(e)) : (e) => (T("unpin"), g(e)),
                    P = (function (e, { addToast: t, gracefullyReloadTimeline: i, pinReply: n, unpinReply: r }) {
                        return ({ error: n, success: r }) => {
                            !n && r ? (t({ text: h[e] }), i()) : t({ text: u[e] });
                        };
                    })(E, t);
                return {
                    ...I,
                    text: p[E],
                    Icon: s.default,
                    feedbackKey: r,
                    excludeFromActionMenu: !1,
                    confirmation: {
                        ...d[E],
                        onCancel: () => {
                            T("cancel_" + (E === a.Pinnable ? "pin" : "unpin"));
                        },
                    },
                    onClick: () => {
                        R(v)
                            .then(P)
                            .catch((e) => P({ error: e, success: !1 }));
                    },
                };
            }
        },
        107914: (e, t, i) => {
            i.d(t, { N: () => g, w: () => b });
            var n = i(856430),
                r = i(369676),
                s = i(609980),
                o = i(450646),
                a = i(648539),
                l = i(873990),
                c = i(820803),
                d = i(415506),
                p = i(616894),
                h = i(391366),
                u = i(40904),
                m = i(372703),
                y = i(576513);
            const f = { [y.Z.FEEDBACK_CLOSE]: n.default, [y.Z.FEEDBACK]: r.default, [y.Z.FROWN]: s.default, [y.Z.SMILE]: o.default, [y.Z.MODERATION]: a.default, [y.Z.TOPIC]: l.default, [y.Z.TOPIC_CLOSE]: c.default, [y.Z.FLAG]: d.default, [y.Z.NO]: p.default, [y.Z.SPEAKER]: h.default, [y.Z.SPEAKER_OFF]: u.default },
                _ = { [m.ZP.SeeFewer]: s.default, [m.ZP.SeeMore]: o.default, [m.ZP.DontLike]: s.default },
                b = (e) => {
                    const { feedbackType: t, icon: i } = e;
                    return (i && f[i]) || _[t];
                },
                g = (e) => e && f[e.toUpperCase()];
        },
        371277: (e, t, i) => {
            i.d(t, { Z: () => K });
            i(136728);
            var n = i(202784),
                r = i(332920),
                s = i.n(r),
                o = i(666536),
                a = i(912021),
                l = i(290402),
                c = i(163889),
                d = i(962741),
                p = i(742742),
                h = i(312771),
                u = i(443781),
                m = i(110293),
                y = i(452840);
            const f = Object.values(d.no),
                _ = ({ dismissedEntries: e, entries: t, handlerRegistry: i, pinnedEntry: n }) => {
                    const r = new E(),
                        s = (t) => {
                            const n = i.getHandler(t),
                                o = n && (n.splice || n.render);
                            if (n && o) {
                                let i = n.divider || b;
                                "function" == typeof i && (i = i(t)), i.top && r.addDividerFor(t, g.TOP);
                                const o = e[t.entryId];
                                if (o && o.length) r.addEntry((0, y.Z)({ entry: t, feedbackKeys: o }), n), r.getIncrementedPosition();
                                else if (n.splice) {
                                    const e = n.splice(t),
                                        i = r.getIncrementedPosition();
                                    e.forEach((e) => s({ ...e, position: i })), r.resetPositionCursor();
                                } else n.isEmpty ? r.addEmptyEntry(t) : ((a = t.type), f.includes(a) ? r.addEntry(t, n) : r.addEntryWithPosition(t, n));
                                i.bottom && r.addDividerFor(t, g.BOTTOM);
                            }
                            var a;
                        };
                    return n && (s(n), r.addDividerFor(n, g.BOTTOM)), t.forEach(s), r.list;
                },
                b = { top: !1, bottom: !1 },
                g = { TOP: "top", BOTTOM: "bottom" };
            class E {
                constructor() {
                    (this._position = -1), (this._cursor = -1), (this.list = []), (this._pendingDividerEntryId = null), (this._pendingDividerOrientation = null), (this._previousEntryHasBorder = void 0);
                }
                addEntry(e, t) {
                    this._flushDivider(), this.list.push(e), (this._previousEntryHasBorder = t.shouldDisplayBorder && t.shouldDisplayBorder(e));
                }
                addEntryWithPosition(e, t) {
                    const i = void 0 !== e.position ? { ...e, cursor: this.getIncrementedPositionCursor() } : { ...e, position: this.getIncrementedPosition() };
                    this.addEntry(i, t);
                }
                addEmptyEntry(e) {
                    this.list.push(e);
                }
                addDividerFor(e, t) {
                    this.list.length > 0 && !this._pendingDividerEntryId && this._needsDivider() && ((this._pendingDividerEntryId = e.entryId), (this._pendingDividerOrientation = t));
                }
                getIncrementedPosition() {
                    return (this._position += 1), this._position;
                }
                getIncrementedPositionCursor() {
                    return (this._cursor += 1), this._cursor;
                }
                resetPositionCursor() {
                    this._cursor = -1;
                }
                _needsDivider() {
                    return !this._previousEntryHasBorder;
                }
                _flushDivider() {
                    this._pendingDividerEntryId && this._pendingDividerOrientation && (this.list.push(this._newDivider(this._pendingDividerEntryId, this._pendingDividerOrientation)), (this._pendingDividerEntryId = null), (this._pendingDividerOrientation = null));
                }
                _newDivider(e, t) {
                    return (0, m.Z)(`$divider-${t}-${e}`);
                }
            }
            class T {
                constructor(e) {
                    (this.configuration = e), (this._alreadyReported = {});
                }
                supportsEntryType(e) {
                    return this.configuration.hasOwnProperty(e);
                }
                getDisplayType(e) {
                    const t = this.configuration[e.type];
                    return t ? t.selectDisplayType(e) : (this._reportMissingEntryType(e.type), null);
                }
                getNeedsLoad(e) {
                    const t = this.getHandlerOrLoader(e);
                    return !(!t || !t.loader) || !(!t || !t.isLoadingPlaceholder);
                }
                getHandlerOrLoader(e) {
                    const t = this.configuration[e.type];
                    if (!t) return this._reportMissingEntryType(e.type), null;
                    const i = t.selectDisplayType(e),
                        n = t.handlers[i];
                    return n || (this._reportMissingDisplayType(e.type, i), null);
                }
                getHandler(e) {
                    const t = this.getHandlerOrLoader(e);
                    return t ? (t.loader ? null : t) : null;
                }
                _reportMissingEntryType(e) {
                    this._alreadyReported[e] || ((this._alreadyReported[e] = {}), (0, c.ZP)(`HandlerRegistry: No configuration for entryType=${e}`));
                }
                _reportMissingDisplayType(e, t) {
                    this._alreadyReported[e] || (this._alreadyReported[e] = {}), this._alreadyReported[e][t] || ((this._alreadyReported[e][t] = !0), (0, c.ZP)(`HandlerRegistry: No configuration for entryType=${e}, displayType=${t}`));
                }
            }
            var I = i(961111),
                v = i.n(I),
                k = i(752624),
                R = i(697926),
                P = i(516951),
                D = i(351322),
                A = i(325686),
                Z = i(392237),
                S = i(143778);
            const w = (e) => {
                    const { fetchStatus: t, onRequestRetry: i } = e,
                        [r, s] = n.useState(!1);
                    return (
                        n.useEffect(() => {
                            const e = setTimeout(() => s(!0), 1e3);
                            return () => {
                                clearTimeout(e);
                            };
                        }, [s]),
                        r || t === h.ZP.FAILED ? n.createElement(l.Z, { fetchStatus: t, onRequestRetry: i, render: S.Z }) : n.createElement(A.Z, { style: F.placeholder })
                    );
                },
                F = Z.default.create((e) => ({ placeholder: { height: 50 } })),
                C = n.memo(w);
            var L = i(590980),
                O = i(220184),
                M = i(509738);
            const N = { [d.no.Divider]: L.Z, [d.no.Tombstone]: O.Z },
                B = (e, t, i) => `${e}-${t}-${i?.loader ? i?.loaderKey : "handler"}`,
                H = (new WeakMap(), new Map());
            class x {
                constructor(e, t) {
                    (this._initialized = !1), (this._subscriptionSet = new k.Z()), (this._configuration = { ...N, ...e }), (this._handlerStatusMap = new Map());
                    const i = (e, t) => {
                        const i =
                            ((e, t) => {
                                if (!t.loader) return;
                                const i = H.get(e);
                                return i ? ("function" == typeof i ? i(t.loaderOptions || {}) : i) : void 0;
                            })(e, t) || t;
                        this._handlerStatusMap.set(e, { handler: i.render ? i : void 0, key: e, loader: i.loader ? i : void 0, strategy: i.loader ? i.strategy : void 0, status: i.render || i.splice || i.isOmitted ? h.ZP.LOADED : h.ZP.NONE });
                    };
                    Object.keys(this._configuration).forEach((e) => {
                        Object.keys(this._configuration[e].handlers).forEach((t) => {
                            const n = this._configuration[e].handlers[t],
                                r = B(e, t, n);
                            i(r, n);
                        });
                    });
                }
                initialize() {
                    if (!this._initialized) {
                        const e = Promise.all([this._loadHandlers(this._getUnloadedHandlersByStrategy(M.C.Critical)), this._loadHandlers(this._getUnloadedHandlersByStrategy(M.C.Preload))]);
                        return (this._initialized = !0), this._subscriptionSet.notify(), e;
                    }
                }
                getFetchStatus() {
                    const e = this._filterHandlerInfoBy(({ strategy: e }) => e === M.C.Critical);
                    let t = !1;
                    for (let i = 0; i < e.length; i++) {
                        const { status: n } = e[i];
                        if (n === h.ZP.FAILED) return h.ZP.FAILED;
                        if (n === h.ZP.LOADING) return h.ZP.LOADING;
                        n === h.ZP.NONE && (t = !0);
                    }
                    return t ? h.ZP.NONE : h.ZP.LOADED;
                }
                static TEST_ONLY_clearLoadedHandlersCache() {
                    H.clear();
                }
                getPartiallyLoadedConfiguration() {
                    return (0, R.Z)(
                        Object.keys(this._configuration),
                        (e) => e,
                        (e) => {
                            const t = this._configuration[e],
                                i = (0, R.Z)(
                                    Object.keys(t.handlers),
                                    (e) => e,
                                    (i) => {
                                        const r = B(e, i, t.handlers[i]),
                                            s = this._handlerStatusMap.get(r),
                                            o = s?.status === h.ZP.LOADING || s?.status === h.ZP.FAILED;
                                        return s && s.loader && o
                                            ? ((a = () => {
                                                  this._loadHandler(s);
                                              }),
                                              (l = s.status),
                                              D.lC({ isLoadingPlaceholder: !0, render: () => n.createElement(C, { fetchStatus: l, onRequestRetry: a }) }))
                                            : s?.handler || s?.loader || t.handlers[i];
                                        var a, l;
                                    },
                                );
                            return { ...t, handlers: i };
                        },
                    );
                }
                subscribe(e) {
                    return this._subscriptionSet.subscribe(e);
                }
                loadOnDemand(e) {
                    return Promise.all(
                        e.map((e) => {
                            const { type: t } = e,
                                i = this._configuration[t],
                                n = i && i.selectDisplayType(e),
                                r = B(t, n, i?.handlers[n]),
                                s = this._handlerStatusMap.get(r);
                            if (s && !s.handler && s.status !== h.ZP.LOADING && s.loader) return this._loadHandler(s);
                        }),
                    );
                }
                retryAll() {
                    const e = this._filterHandlerInfoBy(({ status: e }) => e === h.ZP.FAILED);
                    return this._loadHandlers(e);
                }
                _loadHandlers(e) {
                    return Promise.all(e.map((e) => this._loadHandler(e)));
                }
                _loadHandler(e, t) {
                    const { handler: i, loader: n, status: r } = e;
                    if (!i && n && r !== h.ZP.LOADING)
                        return (
                            (e.status = h.ZP.LOADING),
                            v()(
                                () =>
                                    n.loader().then(({ default: t }) => {
                                        (e.status = h.ZP.LOADED), (e.handler = "function" == typeof t ? t(n.loaderOptions || {}) : t), H.set(e.key, t);
                                    }),
                                { retries: 4, minTimeout: 2e3, maxTimeout: 5e3 },
                            )
                                .catch((t) => {
                                    (e.status = h.ZP.FAILED), (0, c.ZP)(`Failed to load URT loader for ${e.key}`, { extra: { error: t } });
                                })
                                .finally(() => {
                                    this._subscriptionSet.notify();
                                })
                        );
                }
                _filterHandlerInfoBy(e) {
                    const t = [];
                    return (
                        this._handlerStatusMap.forEach((i) => {
                            e(i) && t.push(i);
                        }),
                        t
                    );
                }
                _getUnloadedHandlersByStrategy(e) {
                    return this._filterHandlerInfoBy(({ status: t, strategy: i }) => i === e && (t === h.ZP.NONE || t === h.ZP.FAILED));
                }
            }
            x.ssrEagerLoad = P.Z;
            const U = s().i9028824;
            class K extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._mounted = !1),
                        (this._unmounted = !1),
                        (this._createAndSubscribeToHandlerRegistryManager = () => {
                            const { entryConfiguration: e } = this.props;
                            this._handlerRegistryManagerSubscription?.unsubscribe(), (this._handlerRegistryManager = new x(e, this.context)), (this._handlerRegistryManagerSubscription = this._handlerRegistryManager.subscribe(this._handleConfigurationChanged)), this._handlerRegistryManager.initialize(), this._handlerRegistryManager.loadOnDemand(this._getEntriesNeedingLoad());
                        }),
                        (this._handleConfigurationChanged = (0, o.Z)(() => {
                            if (this._mounted && !this._unmounted) {
                                this.setState({ processedEntryConfiguration: this._handlerRegistryManager.getPartiallyLoadedConfiguration(), fetchStatus: this._handlerRegistryManager.getFetchStatus() });
                                const e = this._getEntriesNeedingLoad();
                                e.length && this._handlerRegistryManager.loadOnDemand(e);
                            }
                        }, 100)),
                        (this._handleRetry = () => {
                            this._handlerRegistryManager.retryAll();
                        }),
                        (this._render = () => {
                            const { children: e, dismissedEntries: t, entries: i, perfKey: n, pinnedEntry: r, preprocessEntryList: s } = this.props;
                            performance?.mark?.(`${n}-timeline-prepared-start`);
                            const o = this._getMemoizedHandlerRegistry(this.state.processedEntryConfiguration),
                                a = this._getMemoizedFinalEntries(o, t, i, r, s);
                            this._pendingEntries || (this._pendingEntries = this._getEntriesNeedingLoad());
                            const l = this._pendingEntries?.length > 0;
                            return performance?.measure?.(`${n}-timeline-prepared-end`, `${n}-timeline-prepared-start`), e(o, a, l);
                        }),
                        (this._getEntriesNeedingLoad = () => {
                            const { dismissedEntries: e, entries: t, pinnedEntry: i, preprocessEntryList: n } = this.props,
                                r = this._handlerRegistryManager.getPartiallyLoadedConfiguration(),
                                s = (({ dismissedEntries: e, entries: t, handlerRegistry: i, pinnedEntry: n }) => {
                                    const r = new Set(),
                                        s = [],
                                        o = (e) => {
                                            const t = i.getHandlerOrLoader(e);
                                            if (t)
                                                if (t.splice) t.splice(e).forEach(o);
                                                else {
                                                    if (t.render) return;
                                                    t.loader && (r.has(t) || (r.add(t), s.push(e)));
                                                }
                                        };
                                    return (
                                        n && o(n),
                                        t.forEach((t) => {
                                            o(t), t.type === d.ZP.TimelineModule && t.content.displayType === p.u.VerticalGrid && t.content.items.forEach(o);
                                            const i = e[t.entryId];
                                            i && s.push((0, y.Z)({ entry: t, feedbackKeys: i }));
                                        }),
                                        s
                                    );
                                })({ dismissedEntries: e, handlerRegistry: new T(r), entries: n ? n(t) : t, pinnedEntry: i });
                            return (this._pendingEntries = s), s;
                        }),
                        (this._getMemoizedFinalEntries = (0, a.Z)((e, t, i, n, r) => (({ dismissedEntries: e, entries: t, handlerRegistry: i, pinnedEntry: n, preprocessEntryList: r }) => _({ entries: r(t), handlerRegistry: i, dismissedEntries: e, pinnedEntry: n }))({ handlerRegistry: e, entries: i, dismissedEntries: t, pinnedEntry: n, preprocessEntryList: r }))),
                        (this._getMemoizedHandlerRegistry = (0, a.Z)((e) => new T(e))),
                        this._createAndSubscribeToHandlerRegistryManager(),
                        (this.state = { processedEntryConfiguration: this._handlerRegistryManager.getPartiallyLoadedConfiguration(), fetchStatus: this._handlerRegistryManager.getFetchStatus() });
                }
                componentDidMount() {
                    this._mounted = !0;
                }
                componentWillUnmount() {
                    this._handlerRegistryManagerSubscription?.unsubscribe(), (this._unmounted = !0);
                }
                componentDidUpdate(e, t) {
                    const { dismissedEntries: i, entries: n, entryConfiguration: r } = this.props,
                        { fetchStatus: s } = this.state;
                    e.entryConfiguration !== r && this._createAndSubscribeToHandlerRegistryManager(), t.fetchStatus !== s && s === h.ZP.FAILED && (0, c.ZP)("URT HandlerRegistryProvider: Failed to load critical handlers"), (e.entries === n && e.dismissedEntries === i) || this._handlerRegistryManager.loadOnDemand(this._getEntriesNeedingLoad());
                }
                render() {
                    const { fetchStatus: e } = this.state;
                    return n.createElement(l.Z, { "aria-label": U, fetchStatus: e, onRequestRetry: this._handleRetry, render: this._render });
                }
            }
            (K.contextType = u.rC), (K.defaultProps = { preprocessEntryList: (e) => e });
        },
        880598: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = i(202784).createContext({ impressionTracker: void 0 });
        },
        238776: (e, t, i) => {
            i.d(t, { Z: () => ue });
            var n = i(807896),
                r = (i(136728), i(202784)),
                s = i(726499),
                o = i(393495),
                a = i(457311),
                l = i(332920),
                c = i.n(l),
                d = i(2138),
                p = i(516951),
                h = i(791632),
                u = i(290402),
                m = i(959658),
                y = i(334346),
                f = i(385322),
                _ = i(109002),
                b = i(262785),
                g = i(3138),
                E = i(479506),
                T = i(942893),
                I = i(503229),
                v = i(801501),
                k = i(192337),
                R = i(962741),
                P = i(224175),
                D = i(246031),
                A = i(347155),
                Z = i(312771),
                S = i(443781),
                w = i(71620),
                F = i(87063),
                C = i(668214),
                L = i(481242),
                O = i(863749),
                M = i(109223),
                N = i(390387);
            const B = [],
                H = (e, t) => t.module.selectEntries(e) || B,
                x = (e, t) => t.previewEntries || B,
                U = (e, t) => t.module.selectInitialFetchStatus(e) || F.Z.LOADING,
                K = (e, t) => t.module.selectBottomFetchStatus(e),
                z = (e, t) => t.module.selectTopFetchStatus(e),
                G = (e, t) => t.module.selectCanRefresh(e),
                j = (e, t) => t.module.timelineId,
                $ = (e, t) => t.module.selectUnavailableReason(e),
                V = (e, t) => t.module.selectDismissedEntries(e),
                q = (e, t) => t.module.selectPinnedEntry(e),
                W = (e, t) => t.module.selectAlert(e),
                Y = (e, t) => t.module.selectActiveCover(e),
                J = (e, t) => !!t.module.selectInitialFetchStatus(e),
                Q = (e, t) => t.pollingIntervalMsOverride || t.module.selectPollingIntervalMs(e),
                X = (e, t) => t.module.selectDroppedAds(e),
                ee = (e, t) => t.module.selectHasHoistedAnEntry(e),
                te = (e, t) => t.module.selectNewTweetsBar(e),
                ie = (e, t) => t.module.perfKey,
                ne = (0, C.Z)()
                    .propsFromState(() => ({ activeCover: Y, alert: W, bottomFetchStatus: K, canRefresh: G, dismissedEntries: V, droppedAds: X, entries: H, initialFetchStatus: U, isRestrictedSession: N._S, newTweetsBarContent: te, perfKey: ie, pinnedEntry: q, pollingIntervalMs: Q, previewEntries: x, timelineExist: J, timelineId: j, topFetchStatus: z, unavailableReason: $, wasAtleastOneEntryHoisted: ee }))
                    .adjustStateProps(({ bottomFetchStatus: e, entries: t, initialFetchStatus: i, previewEntries: n, unavailableReason: r, ...s }) => {
                        const o = i === F.Z.FAILED && r,
                            a = n.length > 0 && i !== F.Z.LOADED && !o,
                            l = i === F.Z.LOADED && 0 === t.length && n.length > 0;
                        return a || l ? { bottomFetchStatus: i, entries: n, initialFetchStatus: F.Z.LOADED, shouldFetchInitialOnBottomRetry: !0, unavailableReason: r, ...s } : { bottomFetchStatus: e, entries: t, initialFetchStatus: i, shouldFetchInitialOnBottomRetry: !1, unavailableReason: r, ...s };
                    })
                    .propsFromActions(({ module: e }) => ({ applyNewTweetsBarInstructions: e.applyNewTweetsBarInstructions, applyReactionInstructions: e.applyReactionInstructions, clearActiveCover: e.clearActiveCover, clearDroppedAds: e.clearDroppedAds, createLocalApiErrorHandler: (0, w.zr)("RICH_TIMELINE"), fetchBottom: e.fetchBottom, fetchInitial: e.fetchInitial, fetchInitialOrTop: e.fetchInitialOrTop, markAllRead: e.markTopEntrySeen, processCallback: e.processCallback, removeAlert: e.removeAlert, richScribeAction: L.richScribeAction, updateInstreamVideoEntries: M.C, updateVoiceEntries: O.Be }))
                    .withAnalytics();
            var re = i(931162),
                se = i(371277),
                oe = i(743197),
                ae = i(335632);
            const le = c().d6e2f9be,
                ce = c().afb4c24a,
                de = {},
                pe = (0, ae.G)({});
            class he extends r.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._lastRefresh = -1),
                        (this._render = () => {
                            const { analytics: e, apiErrorHandlerMap: t, bottomFetchStatus: i, createLocalApiErrorHandler: s, dismissedEntries: o, entries: a, entryConfiguration: l, fetchBottom: c, fetchInitial: d, fetchInitialOrTop: p, fetchOptions: h, fetchTopOptions: u, loadingAccessibilityLabel: y, markAllRead: f, olderAtTop: _, onEntriesRendered: g, perfKey: E, pinnedEntry: T, preprocessEntryList: I, processCallback: v, renderUnavailable: k, shouldFetchInitialOnBottomRetry: R, timelineExist: P, timelineRef: D, unavailableReason: A, updateInstreamVideoEntries: Z, withoutHeadroom: S, ...w } = this.props;
                            return r.createElement(
                                r.Fragment,
                                null,
                                r.createElement(se.Z, { dismissedEntries: o, entries: a, entryConfiguration: l, perfKey: E, pinnedEntry: T || void 0, preprocessEntryList: I }, (e, t, s) => r.createElement(b.Z, (0, n.Z)({}, w, { bottomFetchStatus: i || void 0, entries: t, handlerRegistry: e, hasPendingHandlers: s, onAtBottom: this._handleAtBottom, onAtTop: this._handleAtTop, onBottomRetry: this._handleBottomRetry, onEntriesRendered: this._handleEntriesRendered, onNearBottom: this._handleNearBottom, onNearTop: this._handleNearTop, onRef: this._handleTimelineRendererRef, onRefresh: this._handleRefresh, perfKey: E, processCallback: this._processCallback, withoutHeadroom: S }))),
                                r.createElement(m.b, null),
                            );
                        }),
                        (this._processCallback = (e) => {
                            const { createLocalApiErrorHandler: t, processCallback: i } = this.props;
                            i(e).catch(t());
                        }),
                        (this._handleTimelineRendererRef = (e) => {
                            this._timelineRenderer = e;
                        }),
                        (this._renderUnavailable = () => {
                            const { renderUnavailable: e, unavailableReason: t } = this.props;
                            return e && t ? e(t) : null;
                        }),
                        (this._handleEntriesRendered = () => {
                            const { entries: e, initialFetchStatus: t } = this.props;
                            this.props.onEntriesRendered({ entries: e, fetchStatus: t });
                        }),
                        (this._getForegroundPoller = (e) => {
                            const { history: t } = this.props;
                            return new v.Z(e).interval(() => {
                                ("active" === s.Z.currentState || ((0, h.HD)(t) && !this._shouldSkipPoll())) && this._foregroundPollAction();
                            });
                        }),
                        (this._foregroundPollAction = (0, d.Z)(
                            () => {
                                const { onTimelinePoll: e } = this.props;
                                this._fetchInitialOrTop({ polling: !0 }, oe.l.FOREGROUND_POLL), e && e();
                            },
                            5e3,
                            { leading: !0, trailing: !0 },
                        )),
                        (this._shouldSkipPoll = () => {
                            const e = this._timelineRenderer?.props.viewport;
                            if (e instanceof P.Z) {
                                const t = e.getRect2D(),
                                    i = D.Z.root().getRect2D();
                                if (!o.Z.intersection(i, t)) {
                                    return (t.left > i.left ? t.left - i.right : i.left - t.right) < 2 * t.width ? Math.random() > 0.5 : Math.random() > 0.1;
                                }
                                if ("active" !== s.Z.currentState) return Math.random() > 0.4;
                            }
                            return !1;
                        }),
                        (this._handleInitialRetry = () => {
                            this._fetchInitial();
                        }),
                        (this._handleBottomRetry = () => {
                            const { shouldFetchInitialOnBottomRetry: e } = this.props;
                            e ? this._fetchInitial() : this._fetchBottom();
                        }),
                        (this._handleAtTop = () => {
                            const { markAllRead: e, onAtTop: t } = this.props;
                            t?.(), e();
                        }),
                        (this._handleNearTop = () => {
                            const { isSingleDirection: e, olderAtTop: t } = this.props;
                            e || this._fetchInitialOrTop({ onlyIfStale: !t }, oe.l.NEAR_TOP);
                        }),
                        (this._handleAtBottom = () => {
                            const { analytics: e } = this.props;
                            e.scribeAction("bottom");
                        }),
                        (this._handleNearBottom = () => {
                            this._fetchBottom();
                        }),
                        (this._handleRefresh = () => {
                            const e = Date.now();
                            this._fetchInitialOrTop({ requestContext: A.f.REFRESH }, oe.l.PULL_TO_REFRESH).then(() => {
                                this._lastRefresh = e;
                            });
                        }),
                        (this._timelineAPI = { fetchTop: (e) => this._fetchInitialOrTop(e, oe.l.TIMELINE_SPECIFIC_FETCH_TOP), refreshOrGoTop: () => this._refreshOrGoTop() }),
                        b.Z.preload();
                }
                componentDidMount() {
                    this._initialize();
                    const { timelineRef: e } = this.props;
                    e(this._timelineAPI);
                }
                componentWillUnmount() {
                    const { timelineRef: e } = this.props;
                    e(null), this._cleanupTimelinePolling(), this._localRefreshTimeout && clearTimeout(this._localRefreshTimeout), this._foregroundPollAction.cancel();
                }
                componentDidUpdate(e) {
                    const { droppedAds: t, entries: i, isRestrictedSession: n, newTweetsBarContent: r, pollingIntervalMs: s, timelineExist: o, timelineId: a, wasAtleastOneEntryHoisted: l } = this.props;
                    if (a !== e.timelineId || s !== e.pollingIntervalMs || (e.timelineExist && !o) || e.isRestrictedSession !== n) this._initialize();
                    else if (i !== e.entries) {
                        this._onEntriesUpdated(e.entries);
                        const t = !!e.entries.length && !!e.newTweetsBarContent.count && !r.count;
                        t && this._timelineRenderer && this._timelineRenderer.scrollAndFocusNewest(), l && !e.wasAtleastOneEntryHoisted && this._scribeHoistedEntry(t);
                    }
                    t.length && t.length !== e.droppedAds.length && this._scribeAndClearDroppedAds();
                }
                render() {
                    const { initialFetchStatus: e, livePipelineTopic: t, loadingAccessibilityLabel: i, prerollDisplayLocation: n, renderUnavailable: s, unavailableReason: o } = this.props;
                    return r.createElement(r.Fragment, null, t ? r.createElement(f._W, { callback: this._foregroundPollAction, topic: t }) : null, r.createElement(re.D, { prerollDisplayLocation: n }, r.createElement(u.Z, { "aria-label": i, fetchStatus: e, onRequestRetry: this._handleInitialRetry, render: this._render, renderFailure: o && s ? this._renderUnavailable : void 0, retryable: !o })));
                }
                _initialize() {
                    const { history: e, initialFetchStatus: t, isSingleDirection: i } = this.props,
                        n = t === Z.ZP.LOADED,
                        r = "POP" === e.action && t === Z.ZP.LOADED;
                    (i ? !n : !r) && this._fetchInitialOrTop({ onlyIfStale: !0 }, oe.l.TIMELINE_MOUNTING), this._onEntriesUpdated(), this._maybeInitializeTimelinePolling();
                }
                _onEntriesUpdated(e) {
                    const { entries: t, pinnedEntry: i, prerollDisplayLocation: n, updateInstreamVideoEntries: r, updateVoiceEntries: s } = this.props;
                    n && r(t, n);
                    const o = [...t];
                    i && o.push(i), o.length && s(o);
                }
                _maybeInitializeTimelinePolling() {
                    const { pollingIntervalMs: e } = this.props;
                    this._cleanupTimelinePolling(), e && e > 0 && ((this._timelinePoller = this._getForegroundPoller(e)), this._timelinePoller.start());
                }
                _cleanupTimelinePolling() {
                    this._timelinePoller && this._timelinePoller.stop(), (this._timelinePoller = void 0);
                }
                _fetchInitialOrTop(e, t) {
                    const { analytics: i, fetchInitialOrTop: n, fetchOptions: r, fetchTopOptions: s } = this.props;
                    return n({ ...{ ...e, ...r }, top: s }).then(({ cursorType: n, newEntries: r, newTweets: s, performed: o }) => {
                        if (!o) return;
                        const a = n === k.CursorType.Top ? "get_newer" : "get_initial",
                            l = Date.now();
                        i.scribe({ action: a, data: { event_initiator: e?.polling ? E.Z.EventInitiator.CLIENT_SIDE_APP : E.Z.EventInitiator.CLIENT_SIDE_USER, new_entries: r, new_tweets: s, last_refresh: "get_newer" === a && this._lastRefresh > 0 ? Math.round((l - this._lastRefresh) / 1e3) : void 0 } }), (this._mostRecentRequestType = t);
                    }, this._createLocalApiErrorHandler());
                }
                _fetchInitial() {
                    const { analytics: e, fetchInitial: t, fetchOptions: i } = this.props;
                    return t(i).then(({ newEntries: t, newTweets: i, performed: n }) => {
                        n && e.scribe({ action: "get_initial", data: { new_entries: t, new_tweets: i } });
                    }, this._createLocalApiErrorHandler());
                }
                _fetchBottom() {
                    const { analytics: e, fetchBottom: t, fetchOptions: i } = this.props;
                    t(i).then(({ newEntries: t, newTweets: i, performed: n }) => {
                        n && (e.scribe({ action: "get_older", data: { new_entries: t, new_tweets: i } }), (this._mostRecentRequestType = oe.l.FETCH_BOTTOM));
                    }, this._createLocalApiErrorHandler());
                }
                _createLocalApiErrorHandler() {
                    const { apiErrorHandlerMap: e, createLocalApiErrorHandler: t } = this.props,
                        { customErrorHandler: i, defaultToast: n, showToast: r, ...s } = e;
                    return t({ ...s, ...{ customErrorHandler: i || g.M.customErrorHandler, defaultToast: n || g.M.defaultToast, showToast: r || g.M.showToast } });
                }
                _refreshOrGoTop() {
                    this._timelineRenderer ? this._timelineRenderer.refreshOrGoTop() : this._handleRefresh();
                }
                _scribeAndClearDroppedAds() {
                    const { analytics: e, clearDroppedAds: t, droppedAds: i } = this.props;
                    i.forEach(({ adDropInfo: t, entry: i }) => {
                        const n = i.type === R.ZP.Tweet ? T.Z.getTweetURTEntryItem(i) : { id: i.entryId };
                        e.scribe({ action: "minimum_spacing_ad_removal", data: { items: [n] } }), e.scribe({ action: "minimum_spacing_ad_removal_drop_info", data: { custom_json_payload: JSON.stringify({ ad_drop_info: { dropped_id: t.droppedId, retained_id: t.retainedId } }) } });
                    }),
                        t();
                }
                _scribeHoistedEntry(e) {
                    const { analytics: t } = this.props,
                        i = e ? "new_tweets_bar" : this._mostRecentRequestType;
                    t.scribe({ element: i, action: "entry_hoisted" });
                }
            }
            (he.defaultProps = { apiErrorHandlerMap: {}, fetchOptions: de, fetchTopOptions: de, entryConfiguration: pe, loadingAccessibilityLabel: le, olderAtTop: !1, onEntriesRendered: p.Z, preprocessEntryList: (e) => e, renderEmptyState: () => r.createElement(a.Z, { message: ce }), scroller: y.C, newTweetsPill: _.Z, showLoadingFooter: !0, timelineRef: p.Z, withoutHeadroom: !1 }), (he.contextType = S.rC);
            const ue = ne((0, I.Z)(he));
        },
        351322: (e, t, i) => {
            i.d(t, { KM: () => De, iH: () => ke, ov: () => fe, lC: () => Re, OZ: () => be, ub: () => Pe });
            var n = i(202784),
                r = i(516951),
                s = i(459643),
                o = i(807896),
                a = i(476984),
                l = i.n(a),
                c = i(912021),
                d = i(908478),
                p = i(293115),
                h = i(443781),
                u = i(325686),
                m = i(880598);
            class y extends n.Component {
                constructor(...e) {
                    super(...e), (this._ref = n.createRef());
                }
                componentDidMount() {
                    const { impressionTracker: e } = this.context;
                    e && e.observe(this._ref.current, this.props.entryId);
                }
                componentWillUnmount() {
                    const { impressionTracker: e } = this.context;
                    e && e.unobserve(this._ref.current, this.props.entryId);
                }
                render() {
                    return n.createElement(u.Z, { ref: this._ref }, this.props.children);
                }
            }
            y.contextType = m.Z;
            const f = function (e) {
                const t = window.IntersectionObserver,
                    i = !(e.entryId.startsWith("impressionPlaceholder") || "newEntriesItem" === e.entryId);
                return t && i ? n.createElement(y, e) : e.children;
            };
            i(136728);
            var _ = i(459679),
                b = i(71620),
                g = i(973572),
                E = i(163889),
                T = i(668214),
                I = i(481242),
                v = i(576469),
                k = i(40037),
                R = i(601576),
                P = i(466380),
                D = i(735313),
                A = i(919022);
            const Z = [],
                S = (e, t) => {
                    const { config: i, entry: n, module: r } = t,
                        s = i.feedbackEntrySelector ? i.feedbackEntrySelector(n) : n,
                        o = s.itemMetadata?.feedbackInfo?.feedbackKeys || Z,
                        a = r.selectFeedbackActions(e);
                    return (0, _.Z)(o, (e) => (a[e] ? e : ((0, E.ZP)(`Feedback key has no backing action ${e}`), null)));
                },
                w = (e, t) => {
                    const i = t.module.selectFeedbackActions(e);
                    return S(e, t).map((e) => i[e]);
                },
                F = (e, t) => {
                    let i;
                    return (
                        w(e, t).forEach((t) => {
                            t.richBehavior?.toggleMuteList && (i = v.Z.select(e, t.richBehavior.toggleMuteList.listId));
                        }),
                        i
                    );
                },
                C = (e, t) => {
                    let i;
                    return (
                        w(e, t).forEach((t) => {
                            t.richBehavior?.toggleFollowTopicV2 ? (i = P.Z.select(e, t.richBehavior.toggleFollowTopicV2.topicId)) : t.richBehavior?.markNotInterestedTopic && (i = P.Z.select(e, t.richBehavior.markNotInterestedTopic.topicId));
                        }),
                        i
                    );
                },
                L = (e, t) => {
                    const i = ((e, t) => {
                        const i = w(e, t),
                            n = [];
                        return (
                            i.forEach((e) => {
                                e.richBehavior?.blockUser && n.push(e.richBehavior.blockUser.userId);
                            }),
                            n
                        );
                    })(e, t);
                    return A.ZP.selectMany(e, i);
                },
                O = (0, T.Z)()
                    .propsFromState(() => ({ feedbackActions: (0, g.Z)(S, w, (e, t) => t.map((t, i) => ({ ...t, feedbackKey: e[i] }))), richFeedbackList: F, richFeedbackTopic: C, richFeedbackUsers: (0, g.Z)(L, (e) => e) }))
                    .propsFromActions(({ module: e }) => ({ addToast: R.fz, applyFeedbackAction: e.applyFeedbackAction, block: A.ZP.block, createLocalApiErrorHandler: (0, b.zr)("FEEDBACK_ACTIONS_ENTRY_CONTAINER"), gracefullyReloadTimeline: () => (0, D.Z)(e), pinReply: k.C, scribe: I.richScribeAction, setTopicNotInterested: P.Z.notInterested, toggleListMuting: v.Z.toggleMute, topicFollow: P.Z.follow, topicUnfollow: P.Z.unfollow, unblock: A.ZP.unblock, undoFeedbackAction: e.undoFeedbackAction, undoTopicNotInterested: P.Z.undoNotInterested, unpinReply: k.e }))
                    .withAnalytics();
            var M = i(332920),
                N = i.n(M),
                B = i(372703),
                H = i(360917),
                x = i.n(H),
                U = i(820803),
                K = i(873990),
                z = i(376293),
                G = i(712816),
                j = i(879596),
                $ = i(962741),
                V = i(638090),
                q = i(638537),
                W = i(324260);
            const Y = N().e43138c5,
                J = N().be65f2e7,
                Q = N().a649d337,
                X = N().e2f2b658,
                ee = N().b51f7edf,
                te = N().gac366b3,
                ie = N().gf5e9ea6;
            var ne = i(107914);
            const re = N().gf5e9ea6,
                se = (e, t, i) => {
                    const { details: n, entityToken: r, ...s } = i || {},
                        { action: o, component: a, element: l } = s;
                    return { page: t.page, section: t.section, component: a || t.component, element: l || t.element || e, action: o || t.action || "click" };
                },
                oe = (e, { addToast: t, block: i, createLocalApiErrorHandler: n, feedbackActions: r, feedbackEntry: s, feedbackMethods: o, gracefullyReloadTimeline: a, history: l, pinReply: c, richList: d, richTopic: p, richUsers: h, scribe: u, scribeData: m, scribeNamespace: y, setTopicNotInterested: f, toggleListMuting: _, topicFollow: b, topicUnfollow: g, unblock: E, undoTopicNotInterested: T, unpinReply: I }) =>
                    r.map((r) => {
                        const { clientEventInfo: v, excludeFromActionMenu: k, feedbackKey: R, feedbackType: P, prompt: D, subprompt: A } = r,
                            Z = ((e, t) => {
                                const { addToast: i, block: n, createLocalApiErrorHandler: r, feedbackAction: s, feedbackEntry: o, feedbackKey: a, history: l, richList: c, richTopic: d, richUsers: p, scribe: h, scribeData: u, scribeNamespace: m, setTopicNotInterested: y, toggleListMuting: f, topicFollow: _, topicUnfollow: b, unblock: g, undoTopicNotInterested: E } = t;
                                if (!s.richBehavior) return x();
                                if (s.richBehavior.replyPinState) return (0, W.$)(e, t);
                                if (s.richBehavior?.blockUser) {
                                    const t = s.richBehavior?.blockUser?.userId,
                                        i = p.find((e) => e.id_str === t);
                                    return i && t
                                        ? {
                                              ...(0, z.op)({
                                                  blockAction: () => {
                                                      n(t).catch(r(G.d)), h({ ...m, action: "block" }, u);
                                                  },
                                                  blockSubtext: () => s.subprompt,
                                                  isSoftBlockEnabled: e.isTrue("xprofile_blocked_by_view_enabled"),
                                                  source: z.SC.RICH_FEEDBACK,
                                                  unblockAction: () => {
                                                      g(t).catch(r(j.D)), h({ ...m, action: "unblock" }, u);
                                                  },
                                                  user: i,
                                              }),
                                              feedbackKey: a,
                                              willScribe: !0,
                                          }
                                        : x();
                                }
                                if (s.richBehavior.reportList) {
                                    const { listId: e } = s.richBehavior.reportList,
                                        t = { pathname: `/i/report/list/${e}`, state: { clientReferer: window.location.pathname, scribeNamespace: m } };
                                    return { feedbackKey: a, onClick: () => l.push(t) };
                                }
                                if (s.richBehavior.toggleMuteList && c) {
                                    const { id_str: e } = c;
                                    return {
                                        ...(0, q.Z)({ hideSubtext: !0, list: c, toggleMute: f, scribe: (e) => h({ ...m, ...e }, u) }),
                                        feedbackKey: a,
                                        onUndo: () => {
                                            f(e, { mute: !1 });
                                        },
                                        skipDefaultAction: !1,
                                        willScribe: !0,
                                    };
                                }
                                if (s.richBehavior.toggleFollowTopicV2 && d) {
                                    const { following: e, id: t, name: n } = d;
                                    return {
                                        text: e ? J({ name: n }) : Y({ name: n }),
                                        Icon: e ? U.default : K.default,
                                        onClick: () => {
                                            (e ? b(t) : _(t)).then(() => {
                                                i({ text: e ? ee({ name: n }) : te({ name: n }) }), h({ ...m, element: e ? "feedback_unfollow_topic" : "feedback_follow_topic", action: "click" }, u);
                                            });
                                        },
                                        feedbackKey: a,
                                        skipDefaultAction: !0,
                                        willScribe: !0,
                                    };
                                }
                                if (s.richBehavior.markNotInterestedTopic && d) {
                                    const { id: e, name: t } = d,
                                        n = o.type === $.ZP.Topic && o.content?.topicDisplayType === V.M6.Pill,
                                        r = (0, B.DE)(s, o),
                                        l = (0, B.S4)(s, o),
                                        c = (0, B.C_)(s, o),
                                        p = r ? "click" : "not_interested",
                                        f = () => {
                                            E(e), n && h({ ...m, element: l, action: c }, u);
                                        };
                                    return {
                                        text: Q({ name: t }),
                                        Icon: U.default,
                                        onClick: () => {
                                            y(e).then(() => {
                                                h({ ...m, element: l, action: p }, u), n && i({ text: X, action: { label: ie, onAction: f } });
                                            });
                                        },
                                        onUndo: f,
                                        feedbackKey: a,
                                        skipDefaultAction: n,
                                        willScribe: !0,
                                    };
                                }
                                return x();
                            })(e, { addToast: t, block: i, createLocalApiErrorHandler: n, feedbackAction: r, feedbackEntry: s, feedbackKey: R, gracefullyReloadTimeline: a, history: l, pinReply: c, richList: d, richTopic: p, richUsers: h, scribe: u, scribeData: m, scribeNamespace: y, setTopicNotInterested: f, toggleListMuting: _, topicFollow: b, topicUnfollow: g, unblock: E, undoTopicNotInterested: T, unpinReply: I });
                        return {
                            text: D || "",
                            subText: A,
                            Icon: (0, ne.w)(r),
                            excludeFromActionMenu: !!k,
                            ...Z,
                            onClick: () => {
                                const e = P !== B.ZP.SeeMore,
                                    i = { entry: s, feedbackKeys: [R], isDismissibleFeedback: e },
                                    n = s.itemMetadata?.feedbackInfo?.clientEventInfo;
                                let a = { ...v };
                                n && (a = { ...n, ...v });
                                const l = (0, B.S4)(r, s);
                                if ((l || a) && !Z.willScribe) {
                                    const e = se(l, y, a);
                                    u(e, m);
                                }
                                P === B.ZP.RichBehavior && (Z.onClick && Z.onClick(), Z.skipDefaultAction && (i.isDismissibleFeedback = !1)),
                                    o.applyFeedbackAction(i).then(() => {
                                        if (!e) {
                                            let e;
                                            r.hasUndoAction &&
                                                (e = {
                                                    label: re,
                                                    onAction: () => {
                                                        o.undoFeedbackAction(i);
                                                    },
                                                }),
                                                t({ action: e, text: r.confirmation || "" });
                                        }
                                    });
                            },
                        };
                    }),
                ae = {};
            class le extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedInjectedProps = (0, c.Z)((e, t, i, n) => (e ? e({ entry: t, module: i, feedbackItems: n }) : void 0))),
                        (this._getSynthesizedFeedbackItems = () => {
                            const { addToast: e, analytics: t, applyFeedbackAction: i, block: n, config: r, createLocalApiErrorHandler: s, entry: o, feedbackActions: a, gracefullyReloadTimeline: l, pinReply: c, richFeedbackList: d, richFeedbackTopic: p, richFeedbackUsers: h, scribe: u, setTopicNotInterested: m, toggleListMuting: y, topicFollow: f, topicUnfollow: _, unblock: b, undoFeedbackAction: g, undoTopicNotInterested: E, unpinReply: T } = this.props,
                                I = r.feedbackEntrySelector ? r.feedbackEntrySelector(o) : o,
                                v = t.contextualScribeNamespace,
                                k = this._getEntryScribeData(o, r.getScribeDataItem),
                                R = this._getEntryScribeNamespace(v, o, r.defaultScribeNamespace);
                            return this._getMemoizedFeedbackItems(e, i, n, s, a, I, l, c, d, p, h, u, k, R, m, y, f, _, b, g, E, T);
                        }),
                        (this._getMemoizedFeedbackItems = (0, c.Z)((e, t, i, n, r, s, o, a, l, c, d, p, h, u, m, y, f, _, b, g, E, T) => oe(this.context.featureSwitches, { addToast: e, block: i, createLocalApiErrorHandler: n, feedbackActions: r, feedbackEntry: s, feedbackMethods: { applyFeedbackAction: t, undoFeedbackAction: g }, gracefullyReloadTimeline: o, history: this.context.history, pinReply: a, richList: l, richTopic: c, richUsers: d, scribe: p, scribeData: h, scribeNamespace: u, setTopicNotInterested: m, toggleListMuting: y, topicFollow: f, topicUnfollow: _, unblock: b, undoTopicNotInterested: E, unpinReply: T }))),
                        (this._getEntryScribeData = (0, c.Z)((e, t) => {
                            const { analytics: i } = this.props,
                                n = i.contextualScribeData;
                            if (t) {
                                const i = t(e);
                                return i ? { ...n, items: [...(n?.items ? n.items : []), i] } : n;
                            }
                        })),
                        (this._getEntryScribeNamespace = (0, c.Z)((e, t, i) => {
                            const n = ce(t);
                            return { ...e, ...((n && { ...n }) || i || ae) };
                        }));
                }
                shouldComponentUpdate(e) {
                    const t = this.props;
                    return e.feedbackActions !== this.props.feedbackActions || e.richFeedbackUsers !== this.props.richFeedbackUsers || e.richFeedbackList !== this.props.richFeedbackList || e.richFeedbackTopic !== this.props.richFeedbackTopic || !(0, d.Z)(t.entry, e.entry) || !l()(t.config, e.config);
                }
                render() {
                    const { analytics: e, config: t, entry: i, module: r, renderEntry: s } = this.props,
                        a = e.contextualScribeNamespace,
                        l = this._getSynthesizedFeedbackItems(),
                        { component: c } = t,
                        d = this._getInjectedProps();
                    return n.createElement(p.nO, { data: this._getEntryScribeData(i, t.getScribeDataItem), namespace: this._getEntryScribeNamespace(a, i, t.defaultScribeNamespace) }, n.createElement(f, { entryId: i.entryId }, n.createElement(c, (0, o.Z)({ entry: i, feedbackItems: l, module: r, renderEntry: s }, d))));
                }
                _getInjectedProps() {
                    const { config: e, entry: t, module: i } = this.props,
                        { injectProps: n } = e,
                        r = this._getSynthesizedFeedbackItems();
                    return this._getMemoizedInjectedProps(n, t, i, r);
                }
            }
            le.contextType = h.rC;
            const ce = (e) => {
                    const { itemMetadata: t } = e;
                    if (t && t.clientEventInfo) {
                        const { component: e, element: i } = t.clientEventInfo,
                            n = {};
                        return e && (n.component = e), i && (n.element = i), n.component || n.element ? n : null;
                    }
                    return null;
                },
                de = O(le);
            var pe = i(392237),
                he = i(952428);
            const ue = pe.default.create((e) => ({ divider: { display: "block", borderBottomColor: e.colors.borderColor, borderBottomWidth: 1 }, item: { display: "block" } })),
                me = ({ children: e }) => e,
                ye =
                    (e, { isClickable: t, isEmpty: i, isFocusable: r, shouldDisplayBorder: s }) =>
                    (i, o, a, l) => {
                        const c = e(i, o);
                        if (!c) return null;
                        const d = r(i) && a ? (e) => a(!!e) : () => a?.(!1);
                        return n.createElement(me, { displayType: l, entry: i }, n.createElement(he.Z, { style: s(i) ? ue.divider : ue.item, viewRef: d, withInteractiveStyling: t(i) }, c));
                    },
                fe = ({ handlers: e, selectDisplayType: t }) => ({ selectDisplayType: t, handlers: e }),
                _e = "defaultDisplayType",
                be = (e) => ({ selectDisplayType: () => _e, handlers: { [_e]: e } }),
                ge = r.Z,
                Ee = { top: !1, bottom: !1 },
                Te = (0, s.Z)(!1),
                Ie = (0, s.Z)(!1),
                ve = (0, s.Z)(!1),
                ke = ({ divider: e, shouldDisplayBorder: t = Te, isClickable: i = Ie, isFocusable: r = ve, isEmpty: s, ...o }) => {
                    const a = (e) => !e.parentModuleMetadata?.verticalMetadata?.suppressDividers && t(e);
                    return {
                        getHandler: (t) => {
                            const l = { ...o, injectProps: t };
                            return { render: ye((e, { module: t, renderEntry: i }) => n.createElement(de, { config: l, entry: e, module: t, renderEntry: i }), { isClickable: i, shouldDisplayBorder: a, isFocusable: r }), splice: void 0, divider: e || Ee, getScribeDataItem: o.getScribeDataItem || ge, isEmpty: s, shouldDisplayBorder: a };
                        },
                    };
                },
                Re = ({ render: e, divider: t, shouldDisplayBorder: i = Te, isClickable: n = Ie, getScribeDataItem: r = ge, isFocusable: s = ve, isEmpty: o, isLoadingPlaceholder: a }) => ({ render: ye(e, { shouldDisplayBorder: i, isClickable: n, isFocusable: s }), splice: void 0, divider: t || Ee, getScribeDataItem: r, isEmpty: o, shouldDisplayBorder: i, isLoadingPlaceholder: a }),
                Pe = ({ splice: e, divider: t, getScribeDataItem: i = ge }) => ({ render: void 0, splice: e, divider: t || Ee, getScribeDataItem: i }),
                De = (0, s.Z)({ render: void 0, splice: void 0, divider: Ee, getScribeDataItem: ge, isOmitted: !0 });
        },
        931162: (e, t, i) => {
            i.d(t, { D: () => s, R: () => r });
            var n = i(202784);
            const r = n.createContext({ prerollDisplayLocation: void 0 }),
                s = ({ children: e, prerollDisplayLocation: t }) => {
                    const i = n.useMemo(() => ({ prerollDisplayLocation: t }), [t]);
                    return n.createElement(r.Provider, { value: i }, e);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.VideoScreen-b308cbaf.0b32ae8a.js.map
