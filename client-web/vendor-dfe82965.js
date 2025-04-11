window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-dfe82965"],
        {
            705180: (e, t, n) => {
                var i = n(171600).default,
                    r = i(n(226290)),
                    o = i(n(515538)),
                    s = i(n(247739)),
                    a = i(n(900814)),
                    l = n(427225),
                    u = n(286190),
                    c = u.generateClientObjectClientID,
                    d = (u.isClientID, n(798452).isSuspenseSentinel),
                    h = n(108475),
                    f = h.ACTOR_IDENTIFIER_KEY,
                    p = h.ERRORS_KEY,
                    _ = h.ID_KEY,
                    v = h.INVALIDATED_AT_KEY,
                    g = h.REF_KEY,
                    S = h.REFS_KEY,
                    m = h.RELAY_RESOLVER_VALUE_KEY,
                    y = (h.ROOT_ID, h.TYPENAME_KEY),
                    R = n(193860),
                    b = n(647677);
                n(826590);
                function I(e, t) {
                    var n = e[t];
                    return n && "object" == typeof n && (n.hasOwnProperty(g) || n.hasOwnProperty(S)) && b(!1), n;
                }
                function D(e, t, n) {
                    var i = e[p];
                    if (null != n && n.length > 0) null == i ? (e[p] = (0, r.default)({}, t, n)) : (i[t] = n);
                    else if (null != i && delete i[t]) {
                        for (var o in i) if (i.hasOwnProperty(o)) return;
                        delete e[p];
                    }
                }
                function O(e, t, n) {
                    e[t] = n;
                }
                e.exports = {
                    clone: function (e) {
                        return (0, a.default)({}, e);
                    },
                    copyFields: function (e, t) {
                        for (var n in e) e.hasOwnProperty(n) && n !== _ && n !== y && (t[n] = e[n]);
                    },
                    create: function (e, t) {
                        var n = {};
                        return (n[_] = e), (n[y] = t), n;
                    },
                    freeze: function (e) {
                        l(e);
                    },
                    fromObject: function (e) {
                        return e;
                    },
                    getDataID: function (e) {
                        return e[_];
                    },
                    getErrors: function (e, t) {
                        var n;
                        return null === (n = e[p]) || void 0 === n ? void 0 : n[t];
                    },
                    getFields: function (e) {
                        return p in e
                            ? Object.keys(e).filter(function (e) {
                                  return e !== p;
                              })
                            : Object.keys(e);
                    },
                    getInvalidationEpoch: function (e) {
                        if (null == e) return null;
                        var t = e[v];
                        return "number" != typeof t ? null : t;
                    },
                    getLinkedRecordID: function (e, t) {
                        var n = e[t];
                        if (null == n) return n;
                        var i = n;
                        return ("object" == typeof i && i && "string" == typeof i[g]) || b(!1), i[g];
                    },
                    getLinkedRecordIDs: function (e, t) {
                        var n = e[t];
                        return null == n ? n : (("object" == typeof n && Array.isArray(n[S])) || b(!1), n[S]);
                    },
                    getType: function (e) {
                        return e[y];
                    },
                    getValue: I,
                    hasValue: function (e, t) {
                        return t in e;
                    },
                    hasLinkedRecordID: function (e, t) {
                        var n = e[t];
                        return null != n && "object" == typeof n && n && "string" == typeof n[g];
                    },
                    hasLinkedRecordIDs: function (e, t) {
                        var n = e[t];
                        return (
                            null != n &&
                            "object" == typeof n &&
                            Array.isArray(n[S]) &&
                            n[S].every(function (e) {
                                return "string" == typeof e;
                            })
                        );
                    },
                    merge: function (e, t) {
                        if (p in e || p in t) {
                            var n = e[p],
                                i = (0, o.default)(e, [p].map(s.default)),
                                r = t[p],
                                l = (0, o.default)(t, [p].map(s.default)),
                                u = (0, a.default)((0, a.default)({}, i), l);
                            if (null == n && null == r) return u;
                            var c = {};
                            for (var d in n) l.hasOwnProperty(d) || (c[d] = n[d]);
                            for (var h in r) c[h] = r[h];
                            for (var f in c) {
                                u[p] = c;
                                break;
                            }
                            return u;
                        }
                        return (0, a.default)((0, a.default)({}, e), t);
                    },
                    setErrors: D,
                    setValue: O,
                    setLinkedRecordID: function (e, t, n) {
                        var i = {};
                        (i[g] = n), (e[t] = i);
                    },
                    setLinkedRecordIDs: function (e, t, n) {
                        var i = {};
                        (i[S] = n), (e[t] = i);
                    },
                    update: function (e, t) {
                        var n,
                            i = e[p],
                            r = t[p],
                            o = null;
                        if (null == i && null == r) {
                            var s;
                            for (var l in t) (!o && R(e[l], t[l])) || ((o = null !== o ? o : (0, a.default)({}, e))[l] = t[l]);
                            return null !== (s = o) && void 0 !== s ? s : e;
                        }
                        for (var u in t)
                            if (u !== p) {
                                var c = t[u],
                                    d = null == r ? void 0 : r[u];
                                if (null == o) {
                                    var h = e[u],
                                        f = null == i ? void 0 : i[u];
                                    if (R(h, c) && R(f, d)) continue;
                                    (o = (0, a.default)({}, e)), null != i && (o[p] = (0, a.default)({}, i));
                                }
                                O(o, u, c), D(o, u, d);
                            }
                        return null !== (n = o) && void 0 !== n ? n : e;
                    },
                    getActorLinkedRecordID: function (e, t) {
                        var n = e[t];
                        return null == n ? n : (("object" != typeof n || "string" != typeof n[g] || null == n[f]) && b(!1), [n[f], n[g]]);
                    },
                    setActorLinkedRecordID: function (e, t, n, i) {
                        var r = {};
                        (r[g] = i), (r[f] = n), (e[t] = r);
                    },
                    getResolverLinkedRecordID: function (e, t) {
                        var n = I(e, m);
                        return null == n || d(n) ? null : ("object" == typeof n && (n = n.id), "string" != typeof n && b(!1), c(t, n));
                    },
                    getResolverLinkedRecordIDs: function (e, t) {
                        var n = I(e, m);
                        return null == n || d(n)
                            ? null
                            : (Array.isArray(n) || b(!1),
                              n.map(function (e) {
                                  return null == e ? null : ("object" == typeof e && (e = e.id), "string" != typeof e && b(!1), c(t, e));
                              }));
                    },
                    toJSON: function (e) {
                        return e;
                    },
                };
            },
            464711: (e, t, n) => {
                var i = n(700378).getFragmentVariables,
                    r = n(108475),
                    o = r.CLIENT_EDGE_TRAVERSAL_PATH,
                    s = r.FRAGMENT_OWNER_KEY,
                    a = r.FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT,
                    l = r.FRAGMENTS_KEY,
                    u = r.ID_KEY,
                    c = n(193860),
                    d = n(647677);
                n(826590);
                function h(e, t) {
                    ("object" != typeof t || null === t || Array.isArray(t)) && d(!1);
                    var n = t[u],
                        r = t[l],
                        c = t[s],
                        h = t[o];
                    if ("string" == typeof n && "object" == typeof r && null !== r && "object" == typeof r[e.name] && null !== r[e.name] && "object" == typeof c && null !== c && (null == h || Array.isArray(h))) {
                        var f = c,
                            p = h,
                            _ = r[e.name];
                        return R(e, n, i(e, f.variables, _), f, !0 === _[a], p);
                    }
                    return null;
                }
                function f(e, t) {
                    var n = null;
                    return (
                        t.forEach(function (t, i) {
                            var r = null != t ? h(e, t) : null;
                            null != r && (n = n || []).push(r);
                        }),
                        null == n ? null : { kind: "PluralReaderSelector", selectors: n }
                    );
                }
                function p(e, t) {
                    return null == t ? t : e.metadata && !0 === e.metadata.plural ? (Array.isArray(t) || d(!1), f(e, t)) : (Array.isArray(t) && d(!1), h(e, t));
                }
                function _(e, t) {
                    return null == t
                        ? t
                        : e.metadata && !0 === e.metadata.plural
                          ? (Array.isArray(t) || d(!1),
                            (function (e, t) {
                                var n = null;
                                return (
                                    t.forEach(function (t) {
                                        var i = null != t ? v(e, t) : null;
                                        null != i && (n = n || []).push(i);
                                    }),
                                    n
                                );
                            })(e, t))
                          : (Array.isArray(t) && d(!1), v(e, t));
                }
                function v(e, t) {
                    ("object" != typeof t || null === t || Array.isArray(t)) && d(!1);
                    var n = t[u];
                    return "string" == typeof n ? n : null;
                }
                function g(e, t) {
                    var n;
                    return null == t ? {} : !0 === (null === (n = e.metadata) || void 0 === n ? void 0 : n.plural) ? (Array.isArray(t) || d(!1), m(e, t)) : (Array.isArray(t) && d(!1), S(e, t) || {});
                }
                function S(e, t) {
                    var n = h(e, t);
                    return n ? n.variables : null;
                }
                function m(e, t) {
                    var n = {};
                    return (
                        t.forEach(function (t, i) {
                            if (null != t) {
                                var r = S(e, t);
                                null != r && Object.assign(n, r);
                            }
                        }),
                        n
                    );
                }
                function y(e, t) {
                    return (
                        e.dataID === t.dataID &&
                        e.node === t.node &&
                        c(e.variables, t.variables) &&
                        ((n = e.owner), (i = t.owner), n === i || (n.identifier === i.identifier && c(n.cacheConfig, i.cacheConfig))) &&
                        e.isWithinUnmatchedTypeRefinement === t.isWithinUnmatchedTypeRefinement &&
                        (function (e, t) {
                            if (e === t) return !0;
                            if (null == e || null == t || e.length !== t.length) return !1;
                            var n = e.length;
                            for (; n--; ) {
                                var i = e[n],
                                    r = t[n];
                                if (i !== r && (null == i || null == r || i.clientEdgeDestinationID !== r.clientEdgeDestinationID || i.readerClientEdge !== r.readerClientEdge)) return !1;
                            }
                            return !0;
                        })(e.clientEdgeTraversalPath, t.clientEdgeTraversalPath)
                    );
                    var n, i;
                }
                function R(e, t, n, i) {
                    var r = arguments.length > 5 ? arguments[5] : void 0;
                    return { kind: "SingularReaderSelector", dataID: t, isWithinUnmatchedTypeRefinement: arguments.length > 4 && void 0 !== arguments[4] && arguments[4], clientEdgeTraversalPath: null != r ? r : null, node: e, variables: n, owner: i };
                }
                e.exports = {
                    areEqualSelectors: function (e, t) {
                        return (
                            e === t ||
                            (null == e
                                ? null == t
                                : null == t
                                  ? null == e
                                  : "SingularReaderSelector" === e.kind && "SingularReaderSelector" === t.kind
                                    ? y(e, t)
                                    : "PluralReaderSelector" === e.kind &&
                                      "PluralReaderSelector" === t.kind &&
                                      e.selectors.length === t.selectors.length &&
                                      e.selectors.every(function (e, n) {
                                          return y(e, t.selectors[n]);
                                      }))
                        );
                    },
                    createReaderSelector: R,
                    createNormalizationSelector: function (e, t, n) {
                        return { dataID: t, node: e, variables: n };
                    },
                    getDataIDsFromFragment: _,
                    getDataIDsFromObject: function (e, t) {
                        var n = {};
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var r = e[i],
                                    o = t[i];
                                n[i] = _(r, o);
                            }
                        return n;
                    },
                    getSingularSelector: h,
                    getPluralSelector: f,
                    getSelector: p,
                    getSelectorsFromObject: function (e, t) {
                        var n = {};
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var r = e[i],
                                    o = t[i];
                                n[i] = p(r, o);
                            }
                        return n;
                    },
                    getVariablesFromSingularFragment: S,
                    getVariablesFromPluralFragment: m,
                    getVariablesFromFragment: g,
                    getVariablesFromObject: function (e, t) {
                        var n = {};
                        for (var i in e)
                            if (e.hasOwnProperty(i)) {
                                var r = g(e[i], t[i]);
                                Object.assign(n, r);
                            }
                        return n;
                    },
                };
            },
            527753: (e, t, n) => {
                var i = n(171600).default,
                    r = i(n(638636)),
                    o = i(n(226290)),
                    s = n(177617),
                    a = s.INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
                    l = s.assertInternalActorIdentifier,
                    u = (n(427225), n(891362)),
                    c = n(501832),
                    d = n(781530),
                    h = n(892030),
                    f = n(705180),
                    p = n(290109),
                    _ = n(458076),
                    v = n(582426),
                    g = n(907554),
                    S = n(108475),
                    m = n(108475),
                    y = m.ROOT_ID,
                    R = m.ROOT_TYPE,
                    b = n(280587).RecordResolverCache,
                    I = n(647677),
                    D = (function () {
                        function e(e, t) {
                            var n,
                                i,
                                r,
                                s,
                                a,
                                l = this;
                            (0, o.default)(this, "_gcStep", function () {
                                l._gcRun && (l._gcRun.next().done ? (l._gcRun = null) : l._gcScheduler(l._gcStep));
                            }),
                                (this._currentWriteEpoch = 0),
                                (this._gcHoldCounter = 0),
                                (this._gcReleaseBufferSize = null !== (n = null == t ? void 0 : t.gcReleaseBufferSize) && void 0 !== n ? n : 10),
                                (this._gcRun = null),
                                (this._gcScheduler = null !== (i = null == t ? void 0 : t.gcScheduler) && void 0 !== i ? i : c),
                                (this._getDataID = null !== (r = null == t ? void 0 : t.getDataID) && void 0 !== r ? r : h),
                                (this._globalInvalidationEpoch = null),
                                (this._invalidationSubscriptions = new Set()),
                                (this._invalidatedRecordIDs = new Set()),
                                (this.__log = null !== (s = null == t ? void 0 : t.log) && void 0 !== s ? s : null),
                                (this._queryCacheExpirationTime = null == t ? void 0 : t.queryCacheExpirationTime),
                                (this._operationLoader = null !== (a = null == t ? void 0 : t.operationLoader) && void 0 !== a ? a : null),
                                (this._optimisticSource = null),
                                (this._recordSource = e),
                                (this._releaseBuffer = []),
                                (this._roots = new Map()),
                                (this._shouldScheduleGC = !1),
                                (this._resolverCache = new b(function () {
                                    return l._getMutableRecordSource();
                                })),
                                (this._storeSubscriptions = new g(null == t ? void 0 : t.log, this._resolverCache)),
                                (this._updatedRecordIDs = new Set()),
                                (this._shouldProcessClientComponents = null == t ? void 0 : t.shouldProcessClientComponents),
                                (function (e) {
                                    if (!e.has(y)) {
                                        var t = f.create(y, R);
                                        e.set(y, t);
                                    }
                                })(this._recordSource);
                        }
                        var t = e.prototype;
                        return (
                            (t.getSource = function () {
                                var e;
                                return null !== (e = this._optimisticSource) && void 0 !== e ? e : this._recordSource;
                            }),
                            (t._getMutableRecordSource = function () {
                                var e;
                                return null !== (e = this._optimisticSource) && void 0 !== e ? e : this._recordSource;
                            }),
                            (t.check = function (e, t) {
                                var n,
                                    i,
                                    r,
                                    o,
                                    s = e.root,
                                    u = this._getMutableRecordSource(),
                                    c = this._globalInvalidationEpoch,
                                    h = this._roots.get(e.request.identifier),
                                    f = null != h ? h.epoch : null;
                                if (null != c && (null == f || f <= c)) return { status: "stale" };
                                var p = null !== (n = null == t ? void 0 : t.handlers) && void 0 !== n ? n : [],
                                    _ =
                                        null !== (i = null == t ? void 0 : t.getSourceForActor) && void 0 !== i
                                            ? i
                                            : function (e) {
                                                  return l(e), u;
                                              },
                                    v =
                                        null !== (r = null == t ? void 0 : t.getTargetForActor) && void 0 !== r
                                            ? r
                                            : function (e) {
                                                  return l(e), u;
                                              };
                                return (function (e, t, n, i) {
                                    var r = e.mostRecentlyInvalidatedAt,
                                        o = e.status;
                                    if ("number" == typeof r && (null == t || r > t)) return { status: "stale" };
                                    if ("missing" === o) return { status: "missing" };
                                    if (null != n && null != i) {
                                        if (n <= Date.now() - i) return { status: "stale" };
                                    }
                                    return { status: "available", fetchTime: null != n ? n : null };
                                })(d.check(_, v, null !== (o = null == t ? void 0 : t.defaultActorIdentifier) && void 0 !== o ? o : a, s, p, this._operationLoader, this._getDataID, this._shouldProcessClientComponents), f, null == h ? void 0 : h.fetchTime, this._queryCacheExpirationTime);
                            }),
                            (t.retain = function (e) {
                                var t = this,
                                    n = e.request.identifier,
                                    i = !1,
                                    r = this._roots.get(n);
                                return (
                                    null != r
                                        ? (0 === r.refCount &&
                                              (this._releaseBuffer = this._releaseBuffer.filter(function (e) {
                                                  return e !== n;
                                              })),
                                          (r.refCount += 1))
                                        : this._roots.set(n, { operation: e, refCount: 1, epoch: null, fetchTime: null }),
                                    {
                                        dispose: function () {
                                            if (!i) {
                                                i = !0;
                                                var e = t._roots.get(n);
                                                if (null != e && (e.refCount--, 0 === e.refCount)) {
                                                    var r = t._queryCacheExpirationTime;
                                                    if (null != e.fetchTime && null != r && e.fetchTime <= Date.now() - r) t._roots.delete(n), t.scheduleGC();
                                                    else if ((t._releaseBuffer.push(n), t._releaseBuffer.length > t._gcReleaseBufferSize)) {
                                                        var o = t._releaseBuffer.shift();
                                                        t._roots.delete(o), t.scheduleGC();
                                                    }
                                                }
                                            }
                                        },
                                    }
                                );
                            }),
                            (t.lookup = function (e) {
                                var t = this.getSource();
                                return _.read(t, e, this._resolverCache);
                            }),
                            (t.notify = function (e, t) {
                                var n = this,
                                    i = this.__log;
                                null != i && i({ name: "store.notify.start", sourceOperation: e }), this._currentWriteEpoch++, !0 === t && (this._globalInvalidationEpoch = this._currentWriteEpoch), u.ENABLE_RELAY_RESOLVERS && this._resolverCache.invalidateDataIDs(this._updatedRecordIDs);
                                var r = this.getSource(),
                                    o = [];
                                if (
                                    (this._storeSubscriptions.updateSubscriptions(r, this._updatedRecordIDs, o, e),
                                    this._invalidationSubscriptions.forEach(function (e) {
                                        n._updateInvalidationSubscription(e, !0 === t);
                                    }),
                                    null != i && i({ name: "store.notify.complete", sourceOperation: e, updatedRecordIDs: this._updatedRecordIDs, invalidatedRecordIDs: this._invalidatedRecordIDs }),
                                    this._updatedRecordIDs.clear(),
                                    this._invalidatedRecordIDs.clear(),
                                    null != e)
                                ) {
                                    var s = e.request.identifier,
                                        a = this._roots.get(s);
                                    if (null != a) (a.epoch = this._currentWriteEpoch), (a.fetchTime = Date.now());
                                    else if ("query" === e.request.node.params.operationKind && this._gcReleaseBufferSize > 0 && this._releaseBuffer.length < this._gcReleaseBufferSize) {
                                        var l = { operation: e, refCount: 0, epoch: this._currentWriteEpoch, fetchTime: Date.now() };
                                        this._releaseBuffer.push(s), this._roots.set(s, l);
                                    }
                                }
                                return o;
                            }),
                            (t.publish = function (e, t) {
                                var n = this._getMutableRecordSource();
                                !(function (e, t, n, i, r, o) {
                                    i &&
                                        i.forEach(function (i) {
                                            var r,
                                                s = e.get(i),
                                                a = t.get(i);
                                            null !== a && (r = null != s ? f.clone(s) : null != a ? f.clone(a) : null) && (f.setValue(r, S.INVALIDATED_AT_KEY, n), o.add(i), e.set(i, r));
                                        });
                                    for (var s = t.getRecordIDs(), a = 0; a < s.length; a++) {
                                        var l = s[a],
                                            u = t.get(l),
                                            c = e.get(l);
                                        if (u && c) {
                                            var d = f.update(c, u);
                                            d !== c && (r.add(l), e.set(l, d));
                                        } else null === u ? (e.delete(l), null !== c && r.add(l)) : u && (e.set(l, u), r.add(l));
                                    }
                                })(n, e, this._currentWriteEpoch + 1, t, this._updatedRecordIDs, this._invalidatedRecordIDs);
                                var i = this.__log;
                                null != i && i({ name: "store.publish", source: e, optimistic: n === this._optimisticSource });
                            }),
                            (t.subscribe = function (e, t) {
                                return this._storeSubscriptions.subscribe(e, t);
                            }),
                            (t.holdGC = function () {
                                var e = this;
                                this._gcRun && ((this._gcRun = null), (this._shouldScheduleGC = !0)), this._gcHoldCounter++;
                                return {
                                    dispose: function () {
                                        e._gcHoldCounter > 0 && (e._gcHoldCounter--, 0 === e._gcHoldCounter && e._shouldScheduleGC && (e.scheduleGC(), (e._shouldScheduleGC = !1)));
                                    },
                                };
                            }),
                            (t.toJSON = function () {
                                return "RelayModernStore()";
                            }),
                            (t.getEpoch = function () {
                                return this._currentWriteEpoch;
                            }),
                            (t.__getUpdatedRecordIDs = function () {
                                return this._updatedRecordIDs;
                            }),
                            (t.lookupInvalidationState = function (e) {
                                var t = this,
                                    n = new Map();
                                return (
                                    e.forEach(function (e) {
                                        var i,
                                            r = t.getSource().get(e);
                                        n.set(e, null !== (i = f.getInvalidationEpoch(r)) && void 0 !== i ? i : null);
                                    }),
                                    n.set("global", this._globalInvalidationEpoch),
                                    { dataIDs: e, invalidations: n }
                                );
                            }),
                            (t.checkInvalidationState = function (e) {
                                var t = this.lookupInvalidationState(e.dataIDs).invalidations,
                                    n = e.invalidations;
                                if (t.get("global") !== n.get("global")) return !0;
                                var i,
                                    o = (0, r.default)(e.dataIDs);
                                try {
                                    for (o.s(); !(i = o.n()).done; ) {
                                        var s = i.value;
                                        if (t.get(s) !== n.get(s)) return !0;
                                    }
                                } catch (e) {
                                    o.e(e);
                                } finally {
                                    o.f();
                                }
                                return !1;
                            }),
                            (t.subscribeToInvalidationState = function (e, t) {
                                var n = this,
                                    i = { callback: t, invalidationState: e };
                                return (
                                    this._invalidationSubscriptions.add(i),
                                    {
                                        dispose: function () {
                                            n._invalidationSubscriptions.delete(i);
                                        },
                                    }
                                );
                            }),
                            (t._updateInvalidationSubscription = function (e, t) {
                                var n = this,
                                    i = e.callback,
                                    r = e.invalidationState.dataIDs;
                                (t ||
                                    r.some(function (e) {
                                        return n._invalidatedRecordIDs.has(e);
                                    })) &&
                                    i();
                            }),
                            (t.snapshot = function () {
                                null != this._optimisticSource && I(!1);
                                var e = this.__log;
                                null != e && e({ name: "store.snapshot" }), this._storeSubscriptions.snapshotSubscriptions(this.getSource()), this._gcRun && ((this._gcRun = null), (this._shouldScheduleGC = !0)), (this._optimisticSource = p.create(this.getSource()));
                            }),
                            (t.restore = function () {
                                null == this._optimisticSource && I(!1);
                                var e = this.__log;
                                null != e && e({ name: "store.restore" }), (this._optimisticSource = null), this._shouldScheduleGC && this.scheduleGC(), this._storeSubscriptions.restoreSubscriptions();
                            }),
                            (t.scheduleGC = function () {
                                this._gcHoldCounter > 0 ? (this._shouldScheduleGC = !0) : this._gcRun || ((this._gcRun = this._collect()), this._gcScheduler(this._gcStep));
                            }),
                            (t.__gc = function () {
                                if (null == this._optimisticSource) for (var e = this._collect(); !e.next().done; );
                            }),
                            (t._collect = function* () {
                                e: for (;;) {
                                    var e,
                                        t = this._currentWriteEpoch,
                                        n = new Set(),
                                        i = (0, r.default)(this._roots.values());
                                    try {
                                        for (i.s(); !(e = i.n()).done; ) {
                                            var o = e.value.operation.root;
                                            if ((v.mark(this._recordSource, o, n, this._operationLoader, this._shouldProcessClientComponents), yield, t !== this._currentWriteEpoch)) continue e;
                                        }
                                    } catch (e) {
                                        i.e(e);
                                    } finally {
                                        i.f();
                                    }
                                    var s = this.__log;
                                    if ((null != s && s({ name: "store.gc", references: n }), 0 === n.size)) this._recordSource.clear();
                                    else
                                        for (var a = this._recordSource.getRecordIDs(), l = 0; l < a.length; l++) {
                                            var u = a[l];
                                            n.has(u) || this._recordSource.remove(u);
                                        }
                                    return;
                                }
                            }),
                            e
                        );
                    })();
                e.exports = D;
            },
            349192: (e, t, n) => {
                var i = (0, n(171600).default)(n(638636)),
                    r = n(647677),
                    o = (function () {
                        function e() {
                            (this._ownersToPendingOperations = new Map()), (this._pendingOperationsToOwners = new Map()), (this._ownersToPendingPromise = new Map());
                        }
                        var t = e.prototype;
                        return (
                            (t.update = function (e, t) {
                                if (0 !== t.size) {
                                    var n,
                                        r = e.identifier,
                                        o = new Set(),
                                        s = (0, i.default)(t);
                                    try {
                                        for (s.s(); !(n = s.n()).done; ) {
                                            var a = n.value.identifier,
                                                l = this._ownersToPendingOperations.get(a);
                                            null != l ? l.has(r) || (l.set(r, e), o.add(a)) : (this._ownersToPendingOperations.set(a, new Map([[r, e]])), o.add(a));
                                        }
                                    } catch (e) {
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                    if (0 !== o.size) {
                                        var u,
                                            c = this._pendingOperationsToOwners.get(r) || new Set(),
                                            d = (0, i.default)(o);
                                        try {
                                            for (d.s(); !(u = d.n()).done; ) {
                                                var h = u.value;
                                                this._resolveOwnerResolvers(h), c.add(h);
                                            }
                                        } catch (e) {
                                            d.e(e);
                                        } finally {
                                            d.f();
                                        }
                                        this._pendingOperationsToOwners.set(r, c);
                                    }
                                }
                            }),
                            (t.complete = function (e) {
                                var t = e.identifier,
                                    n = this._pendingOperationsToOwners.get(t);
                                if (null != n) {
                                    var r,
                                        o = new Set(),
                                        s = new Set(),
                                        a = (0, i.default)(n);
                                    try {
                                        for (a.s(); !(r = a.n()).done; ) {
                                            var l = r.value,
                                                u = this._ownersToPendingOperations.get(l);
                                            u && (u.delete(t), u.size > 0 ? s.add(l) : o.add(l));
                                        }
                                    } catch (e) {
                                        a.e(e);
                                    } finally {
                                        a.f();
                                    }
                                    var c,
                                        d = (0, i.default)(o);
                                    try {
                                        for (d.s(); !(c = d.n()).done; ) {
                                            var h = c.value;
                                            this._resolveOwnerResolvers(h), this._ownersToPendingOperations.delete(h);
                                        }
                                    } catch (e) {
                                        d.e(e);
                                    } finally {
                                        d.f();
                                    }
                                    var f,
                                        p = (0, i.default)(s);
                                    try {
                                        for (p.s(); !(f = p.n()).done; ) {
                                            var _ = f.value;
                                            this._resolveOwnerResolvers(_);
                                        }
                                    } catch (e) {
                                        p.e(e);
                                    } finally {
                                        p.f();
                                    }
                                    this._pendingOperationsToOwners.delete(t);
                                }
                            }),
                            (t._resolveOwnerResolvers = function (e) {
                                var t = this._ownersToPendingPromise.get(e);
                                null != t && t.resolve(), this._ownersToPendingPromise.delete(e);
                            }),
                            (t.getPendingOperationsAffectingOwner = function (e) {
                                var t = e.identifier,
                                    n = this._ownersToPendingOperations.get(t);
                                if (null == n || 0 === n.size) return null;
                                var i,
                                    o = this._ownersToPendingPromise.get(t);
                                if (null != o) return { promise: o.promise, pendingOperations: o.pendingOperations };
                                var s = new Promise(function (e) {
                                    i = e;
                                });
                                null == i && r(!1);
                                var a = Array.from(n.values());
                                return this._ownersToPendingPromise.set(t, { promise: s, resolve: i, pendingOperations: a }), { promise: s, pendingOperations: a };
                            }),
                            e
                        );
                    })();
                e.exports = o;
            },
            290109: (e, t, n) => {
                var i = (0, n(171600).default)(n(900814)),
                    r = n(705180),
                    o = n(887428),
                    s = n(647677),
                    a = r.fromObject(Object.freeze({ __UNPUBLISH_RECORD_SENTINEL: !0 })),
                    l = (function () {
                        function e(e) {
                            (this._base = e), (this._sink = o.create());
                        }
                        var t = e.prototype;
                        return (
                            (t.has = function (e) {
                                return this._sink.has(e) ? this._sink.get(e) !== a : this._base.has(e);
                            }),
                            (t.get = function (e) {
                                if (this._sink.has(e)) {
                                    var t = this._sink.get(e);
                                    return t === a ? void 0 : t;
                                }
                                return this._base.get(e);
                            }),
                            (t.getStatus = function (e) {
                                var t = this.get(e);
                                return void 0 === t ? "UNKNOWN" : null === t ? "NONEXISTENT" : "EXISTENT";
                            }),
                            (t.clear = function () {
                                (this._base = o.create()), this._sink.clear();
                            }),
                            (t.delete = function (e) {
                                this._sink.delete(e);
                            }),
                            (t.remove = function (e) {
                                this._sink.set(e, a);
                            }),
                            (t.set = function (e, t) {
                                this._sink.set(e, t);
                            }),
                            (t.getRecordIDs = function () {
                                return Object.keys(this.toJSON());
                            }),
                            (t.size = function () {
                                return Object.keys(this.toJSON()).length;
                            }),
                            (t.toJSON = function () {
                                var e = this,
                                    t = (0, i.default)({}, this._base.toJSON());
                                return (
                                    this._sink.getRecordIDs().forEach(function (n) {
                                        var i = e.get(n);
                                        void 0 === i ? delete t[n] : (t[n] = r.toJSON(i));
                                    }),
                                    t
                                );
                            }),
                            (t.getOptimisticRecordIDs = function () {
                                return new Set(this._sink.getRecordIDs());
                            }),
                            e
                        );
                    })();
                e.exports = {
                    create: function (e) {
                        return new l(e);
                    },
                    getOptimisticRecordIDs: function (e) {
                        return e instanceof l || s(!1), e.getOptimisticRecordIDs();
                    },
                };
            },
            485520: (e, t, n) => {
                var i,
                    r,
                    o = n(957044),
                    s = n(233343),
                    a = n(176897),
                    l = n(458076),
                    u = n(887428),
                    c = n(647677),
                    d = (n(826590), void 0 !== n.g ? n.g : "undefined" != typeof window ? window : void 0),
                    h =
                        null !== (i = null == d || null === (r = d.ErrorUtils) || void 0 === r ? void 0 : r.applyWithGuard) && void 0 !== i
                            ? i
                            : function (e, t, n, i, r) {
                                  return e.apply(t, n);
                              },
                    f = (function () {
                        function e(e, t, n, i) {
                            (this._hasStoreSnapshot = !1), (this._handlerProvider = t || null), (this._pendingBackupRebase = !1), (this._pendingData = new Set()), (this._pendingOptimisticUpdates = new Set()), (this._store = e), (this._appliedOptimisticUpdates = new Set()), (this._gcHold = null), (this._getDataID = n), (this._missingFieldHandlers = i);
                        }
                        var t = e.prototype;
                        return (
                            (t.applyUpdate = function (e) {
                                (this._appliedOptimisticUpdates.has(e) || this._pendingOptimisticUpdates.has(e)) && c(!1), this._pendingOptimisticUpdates.add(e);
                            }),
                            (t.revertUpdate = function (e) {
                                this._pendingOptimisticUpdates.has(e) ? this._pendingOptimisticUpdates.delete(e) : this._appliedOptimisticUpdates.has(e) && ((this._pendingBackupRebase = !0), this._appliedOptimisticUpdates.delete(e));
                            }),
                            (t.revertAll = function () {
                                (this._pendingBackupRebase = !0), this._pendingOptimisticUpdates.clear(), this._appliedOptimisticUpdates.clear();
                            }),
                            (t.commitPayload = function (e, t, n) {
                                (this._pendingBackupRebase = !0), this._pendingData.add({ kind: "payload", operation: e, payload: t, updater: n });
                            }),
                            (t.commitUpdate = function (e) {
                                (this._pendingBackupRebase = !0), this._pendingData.add({ kind: "updater", updater: e });
                            }),
                            (t.commitSource = function (e) {
                                (this._pendingBackupRebase = !0), this._pendingData.add({ kind: "source", source: e });
                            }),
                            (t.run = function (e) {
                                var t = 0 === this._appliedOptimisticUpdates && !!this._gcHold;
                                if (!this._pendingBackupRebase && 0 === this._pendingOptimisticUpdates.size && !t) return [];
                                this._pendingBackupRebase && this._hasStoreSnapshot && (this._store.restore(), (this._hasStoreSnapshot = !1));
                                var n = this._commitData();
                                return (this._pendingOptimisticUpdates.size || (this._pendingBackupRebase && this._appliedOptimisticUpdates.size)) && (this._hasStoreSnapshot || (this._store.snapshot(), (this._hasStoreSnapshot = !0)), this._applyUpdates()), (this._pendingBackupRebase = !1), this._appliedOptimisticUpdates.size > 0 ? this._gcHold || (this._gcHold = this._store.holdGC()) : this._gcHold && (this._gcHold.dispose(), (this._gcHold = null)), this._store.notify(e, n);
                            }),
                            (t._publishSourceFromPayload = function (e) {
                                var t = this,
                                    n = e.payload,
                                    i = e.operation,
                                    r = e.updater,
                                    l = n.source,
                                    u = n.fieldPayloads,
                                    d = new o(this._store.getSource(), l),
                                    h = new s(d, this._getDataID, this._handlerProvider, this._missingFieldHandlers);
                                if (
                                    (u &&
                                        u.length &&
                                        u.forEach(function (e) {
                                            var n = t._handlerProvider && t._handlerProvider(e.handle);
                                            n || c(!1), n.update(h, e);
                                        }),
                                    r)
                                ) {
                                    var f = i.fragment;
                                    null == f && c(!1), r(new a(d, h, f, this._missingFieldHandlers), p(l, f));
                                }
                                var _ = h.getIDsMarkedForInvalidation();
                                return this._store.publish(l, _), h.isStoreMarkedForInvalidation();
                            }),
                            (t._commitData = function () {
                                var e = this;
                                if (!this._pendingData.size) return !1;
                                var t = !1;
                                return (
                                    this._pendingData.forEach(function (n) {
                                        if ("payload" === n.kind) {
                                            var i = e._publishSourceFromPayload(n);
                                            t = t || i;
                                        } else if ("source" === n.kind) {
                                            var r = n.source;
                                            e._store.publish(r);
                                        } else {
                                            var a = n.updater,
                                                l = u.create(),
                                                c = new o(e._store.getSource(), l),
                                                d = new s(c, e._getDataID, e._handlerProvider, e._missingFieldHandlers);
                                            h(a, null, [d], null, "RelayPublishQueue:commitData"), (t = t || d.isStoreMarkedForInvalidation());
                                            var f = d.getIDsMarkedForInvalidation();
                                            e._store.publish(l, f);
                                        }
                                    }),
                                    this._pendingData.clear(),
                                    t
                                );
                            }),
                            (t._applyUpdates = function () {
                                var e = this,
                                    t = u.create(),
                                    n = new o(this._store.getSource(), t),
                                    i = new s(n, this._getDataID, this._handlerProvider, this._missingFieldHandlers),
                                    r = function (t) {
                                        if (t.storeUpdater) {
                                            var r = t.storeUpdater;
                                            h(r, null, [i], null, "RelayPublishQueue:applyUpdates");
                                        } else {
                                            var o = t.operation,
                                                s = t.payload,
                                                l = t.updater,
                                                u = s.source,
                                                c = s.fieldPayloads;
                                            if ((u && i.publishSource(u, c), l)) {
                                                var d;
                                                u && (d = p(u, o.fragment));
                                                var f = new a(n, i, o.fragment, e._missingFieldHandlers);
                                                h(l, null, [f, d], null, "RelayPublishQueue:applyUpdates");
                                            }
                                        }
                                    };
                                this._pendingBackupRebase && this._appliedOptimisticUpdates.size && this._appliedOptimisticUpdates.forEach(r),
                                    this._pendingOptimisticUpdates.size &&
                                        (this._pendingOptimisticUpdates.forEach(function (t) {
                                            r(t), e._appliedOptimisticUpdates.add(t);
                                        }),
                                        this._pendingOptimisticUpdates.clear()),
                                    this._store.publish(t);
                            }),
                            e
                        );
                    })();
                function p(e, t) {
                    return l.read(e, t).data;
                }
                e.exports = f;
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-dfe82965.4682ab4a.js.map
