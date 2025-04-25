window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-dfe82965"],
        {
            705180: (e, t, i) => {
                var n = i(183491).default,
                    r = n(i(845621)),
                    s = n(i(173771)),
                    o = n(i(955819)),
                    a = n(i(479035)),
                    l = i(427225),
                    u = i(286190),
                    c = u.generateClientObjectClientID,
                    d = (u.isClientID, i(514840).isSuspenseSentinel),
                    h = i(108475),
                    p = h.ACTOR_IDENTIFIER_KEY,
                    f = h.ERRORS_KEY,
                    _ = h.ID_KEY,
                    v = h.INVALIDATED_AT_KEY,
                    g = h.REF_KEY,
                    S = h.REFS_KEY,
                    m = h.RELAY_RESOLVER_VALUE_KEY,
                    R = (h.ROOT_ID, h.TYPENAME_KEY),
                    y = i(193860),
                    I = i(647677);
                i(826590);
                function b(e, t) {
                    var i = e[t];
                    return i && "object" == typeof i && (i.hasOwnProperty(g) || i.hasOwnProperty(S)) && I(!1), i;
                }
                function D(e, t, i) {
                    var n = e[f];
                    if (null != i && i.length > 0) null == n ? (e[f] = (0, r.default)({}, t, i)) : (n[t] = i);
                    else if (null != n && delete n[t]) {
                        for (var s in n) if (n.hasOwnProperty(s)) return;
                        delete e[f];
                    }
                }
                function O(e, t, i) {
                    e[t] = i;
                }
                e.exports = {
                    clone: function (e) {
                        return (0, a.default)({}, e);
                    },
                    copyFields: function (e, t) {
                        for (var i in e) e.hasOwnProperty(i) && i !== _ && i !== R && (t[i] = e[i]);
                    },
                    create: function (e, t) {
                        var i = {};
                        return (i[_] = e), (i[R] = t), i;
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
                        var i;
                        return null === (i = e[f]) || void 0 === i ? void 0 : i[t];
                    },
                    getFields: function (e) {
                        return f in e
                            ? Object.keys(e).filter(function (e) {
                                  return e !== f;
                              })
                            : Object.keys(e);
                    },
                    getInvalidationEpoch: function (e) {
                        if (null == e) return null;
                        var t = e[v];
                        return "number" != typeof t ? null : t;
                    },
                    getLinkedRecordID: function (e, t) {
                        var i = e[t];
                        if (null == i) return i;
                        var n = i;
                        return ("object" == typeof n && n && "string" == typeof n[g]) || I(!1), n[g];
                    },
                    getLinkedRecordIDs: function (e, t) {
                        var i = e[t];
                        return null == i ? i : (("object" == typeof i && Array.isArray(i[S])) || I(!1), i[S]);
                    },
                    getType: function (e) {
                        return e[R];
                    },
                    getValue: b,
                    hasValue: function (e, t) {
                        return t in e;
                    },
                    hasLinkedRecordID: function (e, t) {
                        var i = e[t];
                        return null != i && "object" == typeof i && i && "string" == typeof i[g];
                    },
                    hasLinkedRecordIDs: function (e, t) {
                        var i = e[t];
                        return (
                            null != i &&
                            "object" == typeof i &&
                            Array.isArray(i[S]) &&
                            i[S].every(function (e) {
                                return "string" == typeof e;
                            })
                        );
                    },
                    merge: function (e, t) {
                        if (f in e || f in t) {
                            var i = e[f],
                                n = (0, s.default)(e, [f].map(o.default)),
                                r = t[f],
                                l = (0, s.default)(t, [f].map(o.default)),
                                u = (0, a.default)((0, a.default)({}, n), l);
                            if (null == i && null == r) return u;
                            var c = {};
                            for (var d in i) l.hasOwnProperty(d) || (c[d] = i[d]);
                            for (var h in r) c[h] = r[h];
                            for (var p in c) {
                                u[f] = c;
                                break;
                            }
                            return u;
                        }
                        return (0, a.default)((0, a.default)({}, e), t);
                    },
                    setErrors: D,
                    setValue: O,
                    setLinkedRecordID: function (e, t, i) {
                        var n = {};
                        (n[g] = i), (e[t] = n);
                    },
                    setLinkedRecordIDs: function (e, t, i) {
                        var n = {};
                        (n[S] = i), (e[t] = n);
                    },
                    update: function (e, t) {
                        var i,
                            n = e[f],
                            r = t[f],
                            s = null;
                        if (null == n && null == r) {
                            var o;
                            for (var l in t) (!s && y(e[l], t[l])) || ((s = null !== s ? s : (0, a.default)({}, e))[l] = t[l]);
                            return null !== (o = s) && void 0 !== o ? o : e;
                        }
                        for (var u in t)
                            if (u !== f) {
                                var c = t[u],
                                    d = null == r ? void 0 : r[u];
                                if (null == s) {
                                    var h = e[u],
                                        p = null == n ? void 0 : n[u];
                                    if (y(h, c) && y(p, d)) continue;
                                    (s = (0, a.default)({}, e)), null != n && (s[f] = (0, a.default)({}, n));
                                }
                                O(s, u, c), D(s, u, d);
                            }
                        return null !== (i = s) && void 0 !== i ? i : e;
                    },
                    getActorLinkedRecordID: function (e, t) {
                        var i = e[t];
                        return null == i ? i : (("object" != typeof i || "string" != typeof i[g] || null == i[p]) && I(!1), [i[p], i[g]]);
                    },
                    setActorLinkedRecordID: function (e, t, i, n) {
                        var r = {};
                        (r[g] = n), (r[p] = i), (e[t] = r);
                    },
                    getResolverLinkedRecordID: function (e, t) {
                        var i = b(e, m);
                        return null == i || d(i) ? null : ("object" == typeof i && (i = i.id), "string" != typeof i && I(!1), c(t, i));
                    },
                    getResolverLinkedRecordIDs: function (e, t) {
                        var i = b(e, m);
                        return null == i || d(i)
                            ? null
                            : (Array.isArray(i) || I(!1),
                              i.map(function (e) {
                                  return null == e ? null : ("object" == typeof e && (e = e.id), "string" != typeof e && I(!1), c(t, e));
                              }));
                    },
                    toJSON: function (e) {
                        return e;
                    },
                };
            },
            464711: (e, t, i) => {
                var n = i(700378).getFragmentVariables,
                    r = i(108475),
                    s = r.CLIENT_EDGE_TRAVERSAL_PATH,
                    o = r.FRAGMENT_OWNER_KEY,
                    a = r.FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT,
                    l = r.FRAGMENTS_KEY,
                    u = r.ID_KEY,
                    c = i(193860),
                    d = i(647677);
                i(826590);
                function h(e, t) {
                    ("object" != typeof t || null === t || Array.isArray(t)) && d(!1);
                    var i = t[u],
                        r = t[l],
                        c = t[o],
                        h = t[s];
                    if ("string" == typeof i && "object" == typeof r && null !== r && "object" == typeof r[e.name] && null !== r[e.name] && "object" == typeof c && null !== c && (null == h || Array.isArray(h))) {
                        var p = c,
                            f = h,
                            _ = r[e.name];
                        return y(e, i, n(e, p.variables, _), p, !0 === _[a], f);
                    }
                    return null;
                }
                function p(e, t) {
                    var i = null;
                    return (
                        t.forEach(function (t, n) {
                            var r = null != t ? h(e, t) : null;
                            null != r && (i = i || []).push(r);
                        }),
                        null == i ? null : { kind: "PluralReaderSelector", selectors: i }
                    );
                }
                function f(e, t) {
                    return null == t ? t : e.metadata && !0 === e.metadata.plural ? (Array.isArray(t) || d(!1), p(e, t)) : (Array.isArray(t) && d(!1), h(e, t));
                }
                function _(e, t) {
                    return null == t
                        ? t
                        : e.metadata && !0 === e.metadata.plural
                          ? (Array.isArray(t) || d(!1),
                            (function (e, t) {
                                var i = null;
                                return (
                                    t.forEach(function (t) {
                                        var n = null != t ? v(e, t) : null;
                                        null != n && (i = i || []).push(n);
                                    }),
                                    i
                                );
                            })(e, t))
                          : (Array.isArray(t) && d(!1), v(e, t));
                }
                function v(e, t) {
                    ("object" != typeof t || null === t || Array.isArray(t)) && d(!1);
                    var i = t[u];
                    return "string" == typeof i ? i : null;
                }
                function g(e, t) {
                    var i;
                    return null == t ? {} : !0 === (null === (i = e.metadata) || void 0 === i ? void 0 : i.plural) ? (Array.isArray(t) || d(!1), m(e, t)) : (Array.isArray(t) && d(!1), S(e, t) || {});
                }
                function S(e, t) {
                    var i = h(e, t);
                    return i ? i.variables : null;
                }
                function m(e, t) {
                    var i = {};
                    return (
                        t.forEach(function (t, n) {
                            if (null != t) {
                                var r = S(e, t);
                                null != r && Object.assign(i, r);
                            }
                        }),
                        i
                    );
                }
                function R(e, t) {
                    return (
                        e.dataID === t.dataID &&
                        e.node === t.node &&
                        c(e.variables, t.variables) &&
                        ((i = e.owner), (n = t.owner), i === n || (i.identifier === n.identifier && c(i.cacheConfig, n.cacheConfig))) &&
                        e.isWithinUnmatchedTypeRefinement === t.isWithinUnmatchedTypeRefinement &&
                        (function (e, t) {
                            if (e === t) return !0;
                            if (null == e || null == t || e.length !== t.length) return !1;
                            var i = e.length;
                            for (; i--; ) {
                                var n = e[i],
                                    r = t[i];
                                if (n !== r && (null == n || null == r || n.clientEdgeDestinationID !== r.clientEdgeDestinationID || n.readerClientEdge !== r.readerClientEdge)) return !1;
                            }
                            return !0;
                        })(e.clientEdgeTraversalPath, t.clientEdgeTraversalPath)
                    );
                    var i, n;
                }
                function y(e, t, i, n) {
                    var r = arguments.length > 5 ? arguments[5] : void 0;
                    return { kind: "SingularReaderSelector", dataID: t, isWithinUnmatchedTypeRefinement: arguments.length > 4 && void 0 !== arguments[4] && arguments[4], clientEdgeTraversalPath: null != r ? r : null, node: e, variables: i, owner: n };
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
                                    ? R(e, t)
                                    : "PluralReaderSelector" === e.kind &&
                                      "PluralReaderSelector" === t.kind &&
                                      e.selectors.length === t.selectors.length &&
                                      e.selectors.every(function (e, i) {
                                          return R(e, t.selectors[i]);
                                      }))
                        );
                    },
                    createReaderSelector: y,
                    createNormalizationSelector: function (e, t, i) {
                        return { dataID: t, node: e, variables: i };
                    },
                    getDataIDsFromFragment: _,
                    getDataIDsFromObject: function (e, t) {
                        var i = {};
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var r = e[n],
                                    s = t[n];
                                i[n] = _(r, s);
                            }
                        return i;
                    },
                    getSingularSelector: h,
                    getPluralSelector: p,
                    getSelector: f,
                    getSelectorsFromObject: function (e, t) {
                        var i = {};
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var r = e[n],
                                    s = t[n];
                                i[n] = f(r, s);
                            }
                        return i;
                    },
                    getVariablesFromSingularFragment: S,
                    getVariablesFromPluralFragment: m,
                    getVariablesFromFragment: g,
                    getVariablesFromObject: function (e, t) {
                        var i = {};
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var r = g(e[n], t[n]);
                                Object.assign(i, r);
                            }
                        return i;
                    },
                };
            },
            527753: (e, t, i) => {
                var n = i(183491).default,
                    r = n(i(158663)),
                    s = n(i(845621)),
                    o = i(177617),
                    a = o.INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
                    l = o.assertInternalActorIdentifier,
                    u = (i(427225), i(501832)),
                    c = i(781530),
                    d = i(892030),
                    h = i(482122),
                    p = h.LiveResolverCache,
                    f = h.RELAY_RESOLVER_LIVE_STATE_SUBSCRIPTION_KEY,
                    _ = h.getUpdatedDataIDs,
                    v = i(705180),
                    g = i(290109),
                    S = i(458076),
                    m = i(582426),
                    R = i(907554),
                    y = i(108475),
                    I = i(108475),
                    b = I.ROOT_ID,
                    D = I.ROOT_TYPE,
                    O = i(647677),
                    E = (function () {
                        function e(e, t) {
                            var i,
                                n,
                                r,
                                o,
                                a,
                                l,
                                c,
                                h = this;
                            (0, s.default)(this, "_gcStep", function () {
                                h._gcRun && (h._gcRun.next().done ? (h._gcRun = null) : h._gcScheduler(h._gcStep));
                            }),
                                (this._currentWriteEpoch = 0),
                                (this._gcHoldCounter = 0),
                                (this._gcReleaseBufferSize = null !== (i = null == t ? void 0 : t.gcReleaseBufferSize) && void 0 !== i ? i : 10),
                                (this._gcRun = null),
                                (this._gcScheduler = null !== (n = null == t ? void 0 : t.gcScheduler) && void 0 !== n ? n : u),
                                (this._getDataID = null !== (r = null == t ? void 0 : t.getDataID) && void 0 !== r ? r : d),
                                (this._globalInvalidationEpoch = null),
                                (this._invalidationSubscriptions = new Set()),
                                (this._invalidatedRecordIDs = new Set()),
                                (this.__log = null !== (o = null == t ? void 0 : t.log) && void 0 !== o ? o : null),
                                (this._queryCacheExpirationTime = null == t ? void 0 : t.queryCacheExpirationTime),
                                (this._operationLoader = null !== (a = null == t ? void 0 : t.operationLoader) && void 0 !== a ? a : null),
                                (this._optimisticSource = null),
                                (this._recordSource = e),
                                (this._releaseBuffer = []),
                                (this._roots = new Map()),
                                (this._shouldScheduleGC = !1),
                                (this._resolverCache = new p(function () {
                                    return h._getMutableRecordSource();
                                }, this)),
                                (this._storeSubscriptions = new R(null == t ? void 0 : t.log, this._resolverCache)),
                                (this._updatedRecordIDs = new Set()),
                                (this._shouldProcessClientComponents = null !== (l = null == t ? void 0 : t.shouldProcessClientComponents) && void 0 !== l && l),
                                (this._resolverContext = null == t ? void 0 : t.resolverContext),
                                (this._treatMissingFieldsAsNull = null !== (c = null == t ? void 0 : t.treatMissingFieldsAsNull) && void 0 !== c && c),
                                (this._actorIdentifier = null == t ? void 0 : t.actorIdentifier),
                                (function (e) {
                                    if (!e.has(b)) {
                                        var t = v.create(b, D);
                                        e.set(b, t);
                                    }
                                })(this._recordSource);
                        }
                        var t = e.prototype;
                        return (
                            (t.getSource = function () {
                                var e;
                                return null !== (e = this._optimisticSource) && void 0 !== e ? e : this._recordSource;
                            }),
                            (t.getOperationLoader = function () {
                                return this._operationLoader;
                            }),
                            (t._getMutableRecordSource = function () {
                                var e;
                                return null !== (e = this._optimisticSource) && void 0 !== e ? e : this._recordSource;
                            }),
                            (t.getLiveResolverPromise = function (e) {
                                return this._resolverCache.getLiveResolverPromise(e);
                            }),
                            (t.batchLiveStateUpdates = function (e) {
                                null != this.__log && this.__log({ name: "liveresolver.batch.start" });
                                try {
                                    this._resolverCache.batchLiveStateUpdates(e);
                                } finally {
                                    null != this.__log && this.__log({ name: "liveresolver.batch.end" });
                                }
                            }),
                            (t.check = function (e, t) {
                                var i,
                                    n,
                                    r,
                                    s,
                                    o = e.root,
                                    u = this._getMutableRecordSource(),
                                    d = this._globalInvalidationEpoch,
                                    h = this._roots.get(e.request.identifier),
                                    p = null != h ? h.epoch : null;
                                if (null != d && (null == p || p <= d)) return { status: "stale" };
                                var f = null !== (i = null == t ? void 0 : t.handlers) && void 0 !== i ? i : [],
                                    _ =
                                        null !== (n = null == t ? void 0 : t.getSourceForActor) && void 0 !== n
                                            ? n
                                            : function (e) {
                                                  return l(e), u;
                                              },
                                    v =
                                        null !== (r = null == t ? void 0 : t.getTargetForActor) && void 0 !== r
                                            ? r
                                            : function (e) {
                                                  return l(e), u;
                                              };
                                return (function (e, t, i, n) {
                                    var r = e.mostRecentlyInvalidatedAt,
                                        s = e.status;
                                    if ("number" == typeof r && (null == t || r > t)) return { status: "stale" };
                                    if ("missing" === s) return { status: "missing" };
                                    if (null != i && null != n) {
                                        if (i <= Date.now() - n) return { status: "stale" };
                                    }
                                    return { status: "available", fetchTime: null != i ? i : null };
                                })(c.check(_, v, null !== (s = null == t ? void 0 : t.defaultActorIdentifier) && void 0 !== s ? s : a, o, f, this._operationLoader, this._getDataID, this._shouldProcessClientComponents, this.__log), p, null == h ? void 0 : h.fetchTime, this._queryCacheExpirationTime);
                            }),
                            (t.retain = function (e) {
                                var t = this,
                                    i = e.request.identifier,
                                    n = !1,
                                    r = this._roots.get(i);
                                return (
                                    null != r
                                        ? (0 === r.refCount &&
                                              (this._releaseBuffer = this._releaseBuffer.filter(function (e) {
                                                  return e !== i;
                                              })),
                                          (r.refCount += 1))
                                        : this._roots.set(i, { operation: e, refCount: 1, epoch: null, fetchTime: null }),
                                    {
                                        dispose: function () {
                                            if (!n) {
                                                n = !0;
                                                var e = t._roots.get(i);
                                                if (null != e && (e.refCount--, 0 === e.refCount)) {
                                                    var r = t._queryCacheExpirationTime;
                                                    if (null != e.fetchTime && null != r && e.fetchTime <= Date.now() - r) t._roots.delete(i), t.scheduleGC();
                                                    else if ((t._releaseBuffer.push(i), t._releaseBuffer.length > t._gcReleaseBufferSize)) {
                                                        var s = t._releaseBuffer.shift();
                                                        t._roots.delete(s), t.scheduleGC();
                                                    }
                                                }
                                            }
                                        },
                                    }
                                );
                            }),
                            (t.lookup = function (e) {
                                var t = this.__log;
                                null != t && t({ name: "store.lookup.start", selector: e });
                                var i = this.getSource(),
                                    n = S.read(i, e, this._resolverCache, this._resolverContext);
                                return null != t && t({ name: "store.lookup.end", selector: e }), n;
                            }),
                            (t.notify = function (e, t) {
                                var i = this,
                                    n = this.__log;
                                null != n && n({ name: "store.notify.start", sourceOperation: e }), this._currentWriteEpoch++, !0 === t && (this._globalInvalidationEpoch = this._currentWriteEpoch), this._resolverCache.invalidateDataIDs(this._updatedRecordIDs);
                                var r = this.getSource(),
                                    s = [];
                                if (
                                    (this._storeSubscriptions.updateSubscriptions(r, this._updatedRecordIDs, s, e),
                                    this._invalidationSubscriptions.forEach(function (e) {
                                        i._updateInvalidationSubscription(e, !0 === t);
                                    }),
                                    null != e)
                                ) {
                                    var o = e.request.identifier,
                                        a = this._roots.get(o);
                                    if (null != a) (a.epoch = this._currentWriteEpoch), (a.fetchTime = Date.now());
                                    else if ("query" === e.request.node.params.operationKind && this._gcReleaseBufferSize > 0 && this._releaseBuffer.length < this._gcReleaseBufferSize) {
                                        var l = { operation: e, refCount: 0, epoch: this._currentWriteEpoch, fetchTime: Date.now() };
                                        this._releaseBuffer.push(o), this._roots.set(o, l);
                                    }
                                }
                                return null != n && n({ name: "store.notify.complete", sourceOperation: e, updatedRecordIDs: this._updatedRecordIDs, invalidatedRecordIDs: this._invalidatedRecordIDs, subscriptionsSize: this._storeSubscriptions.size(), updatedOwners: s }), this._updatedRecordIDs.clear(), this._invalidatedRecordIDs.clear(), s;
                            }),
                            (t.publish = function (e, t) {
                                var i = this._getMutableRecordSource();
                                !(function (e, t, i, n, r, s) {
                                    n &&
                                        n.forEach(function (n) {
                                            var r,
                                                o = e.get(n),
                                                a = t.get(n);
                                            null !== a && (r = null != o ? v.clone(o) : null != a ? v.clone(a) : null) && (v.setValue(r, y.INVALIDATED_AT_KEY, i), s.add(n), e.set(n, r));
                                        });
                                    for (var o = t.getRecordIDs(), a = 0; a < o.length; a++) {
                                        var l = o[a],
                                            u = t.get(l),
                                            c = e.get(l);
                                        if (u && c) {
                                            var d = v.update(c, u);
                                            d !== c && (r.add(l), e.set(l, d));
                                        } else null === u ? (e.delete(l), null !== c && r.add(l)) : u && (e.set(l, u), r.add(l));
                                    }
                                })(i, e, this._currentWriteEpoch + 1, t, this._updatedRecordIDs, this._invalidatedRecordIDs);
                                var n = this.__log;
                                null != n && n({ name: "store.publish", source: e, optimistic: i === this._optimisticSource });
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
                                    i = new Map();
                                return (
                                    e.forEach(function (e) {
                                        var n,
                                            r = t.getSource().get(e);
                                        i.set(e, null !== (n = v.getInvalidationEpoch(r)) && void 0 !== n ? n : null);
                                    }),
                                    i.set("global", this._globalInvalidationEpoch),
                                    { dataIDs: e, invalidations: i }
                                );
                            }),
                            (t.checkInvalidationState = function (e) {
                                var t = this.lookupInvalidationState(e.dataIDs).invalidations,
                                    i = e.invalidations;
                                if (t.get("global") !== i.get("global")) return !0;
                                var n,
                                    s = (0, r.default)(e.dataIDs);
                                try {
                                    for (s.s(); !(n = s.n()).done; ) {
                                        var o = n.value;
                                        if (t.get(o) !== i.get(o)) return !0;
                                    }
                                } catch (e) {
                                    s.e(e);
                                } finally {
                                    s.f();
                                }
                                return !1;
                            }),
                            (t.subscribeToInvalidationState = function (e, t) {
                                var i = this,
                                    n = { callback: t, invalidationState: e };
                                return (
                                    this._invalidationSubscriptions.add(n),
                                    {
                                        dispose: function () {
                                            i._invalidationSubscriptions.delete(n);
                                        },
                                    }
                                );
                            }),
                            (t._updateInvalidationSubscription = function (e, t) {
                                var i = this,
                                    n = e.callback,
                                    r = e.invalidationState.dataIDs;
                                (t ||
                                    r.some(function (e) {
                                        return i._invalidatedRecordIDs.has(e);
                                    })) &&
                                    n();
                            }),
                            (t.snapshot = function () {
                                null != this._optimisticSource && O(!1);
                                var e = this.__log;
                                null != e && e({ name: "store.snapshot" }), this._storeSubscriptions.snapshotSubscriptions(this.getSource()), this._gcRun && ((this._gcRun = null), (this._shouldScheduleGC = !0)), (this._optimisticSource = g.create(this.getSource()));
                            }),
                            (t.restore = function () {
                                var e = this._optimisticSource;
                                e || O(!1);
                                var t = this.__log;
                                null != t && t({ name: "store.restore" });
                                var i = g.getOptimisticRecordIDs(e);
                                this._resolverCache.unsubscribeFromLiveResolverRecords(i), (this._optimisticSource = null), this._shouldScheduleGC && this.scheduleGC(), this._storeSubscriptions.restoreSubscriptions(), this._resolverCache.invalidateResolverRecords(i);
                            }),
                            (t.scheduleGC = function () {
                                this._gcHoldCounter > 0 ? (this._shouldScheduleGC = !0) : this._gcRun || ((this._gcRun = this._collect()), this._gcScheduler(this._gcStep));
                            }),
                            (t.__gc = function () {
                                if (null == this._optimisticSource) for (var e = this._collect(); !e.next().done; );
                            }),
                            (t._collect = function* () {
                                var e = this.__log;
                                e: for (;;) {
                                    null != e && e({ name: "store.gc.start" });
                                    var t,
                                        i = this._currentWriteEpoch,
                                        n = new Set(),
                                        s = (0, r.default)(this._roots.values());
                                    try {
                                        for (s.s(); !(t = s.n()).done; ) {
                                            var o = t.value.operation.root;
                                            if ((m.mark(this._recordSource, o, n, this._operationLoader, this._shouldProcessClientComponents), yield, i !== this._currentWriteEpoch)) {
                                                null != e && e({ name: "store.gc.interrupted" });
                                                continue e;
                                            }
                                        }
                                    } catch (e) {
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                    if (0 === n.size) this._recordSource.clear();
                                    else
                                        for (var a = this._recordSource.getRecordIDs(), l = 0; l < a.length; l++) {
                                            var u = a[l];
                                            if (!n.has(u)) {
                                                var c = this._recordSource.get(u);
                                                if (null != c) {
                                                    var d = v.getValue(c, f);
                                                    null != d && d();
                                                }
                                                this._recordSource.remove(u);
                                            }
                                        }
                                    return void (null != e && e({ name: "store.gc.end", references: n }));
                                }
                            }),
                            (t.__getNormalizationOptions = function (e) {
                                return { path: e, getDataID: this._getDataID, treatMissingFieldsAsNull: this._treatMissingFieldsAsNull, shouldProcessClientComponents: this._shouldProcessClientComponents, actorIdentifier: this._actorIdentifier };
                            }),
                            (t.__notifyUpdatedSubscribers = function (e) {
                                var t = _(e),
                                    i = this._updatedRecordIDs;
                                (this._updatedRecordIDs = t), this.notify(), (this._updatedRecordIDs = i);
                            }),
                            e
                        );
                    })();
                e.exports = E;
            },
            349192: (e, t, i) => {
                var n = (0, i(183491).default)(i(158663)),
                    r = i(647677),
                    s = (function () {
                        function e() {
                            (this._ownersToPendingOperations = new Map()), (this._pendingOperationsToOwners = new Map()), (this._ownersToPendingPromise = new Map());
                        }
                        var t = e.prototype;
                        return (
                            (t.update = function (e, t) {
                                if (0 !== t.size) {
                                    var i,
                                        r = e.identifier,
                                        s = new Set(),
                                        o = (0, n.default)(t);
                                    try {
                                        for (o.s(); !(i = o.n()).done; ) {
                                            var a = i.value.identifier,
                                                l = this._ownersToPendingOperations.get(a);
                                            null != l ? l.has(r) || (l.set(r, e), s.add(a)) : (this._ownersToPendingOperations.set(a, new Map([[r, e]])), s.add(a));
                                        }
                                    } catch (e) {
                                        o.e(e);
                                    } finally {
                                        o.f();
                                    }
                                    if (0 !== s.size) {
                                        var u,
                                            c = this._pendingOperationsToOwners.get(r) || new Set(),
                                            d = (0, n.default)(s);
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
                                    i = this._pendingOperationsToOwners.get(t);
                                if (null != i) {
                                    var r,
                                        s = new Set(),
                                        o = new Set(),
                                        a = (0, n.default)(i);
                                    try {
                                        for (a.s(); !(r = a.n()).done; ) {
                                            var l = r.value,
                                                u = this._ownersToPendingOperations.get(l);
                                            u && (u.delete(t), u.size > 0 ? o.add(l) : s.add(l));
                                        }
                                    } catch (e) {
                                        a.e(e);
                                    } finally {
                                        a.f();
                                    }
                                    var c,
                                        d = (0, n.default)(s);
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
                                    var p,
                                        f = (0, n.default)(o);
                                    try {
                                        for (f.s(); !(p = f.n()).done; ) {
                                            var _ = p.value;
                                            this._resolveOwnerResolvers(_);
                                        }
                                    } catch (e) {
                                        f.e(e);
                                    } finally {
                                        f.f();
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
                                    i = this._ownersToPendingOperations.get(t);
                                if (null == i || 0 === i.size) return null;
                                var n,
                                    s = this._ownersToPendingPromise.get(t);
                                if (null != s) return { promise: s.promise, pendingOperations: s.pendingOperations };
                                var o = new Promise(function (e) {
                                    n = e;
                                });
                                null == n && r(!1);
                                var a = Array.from(i.values());
                                return this._ownersToPendingPromise.set(t, { promise: o, resolve: n, pendingOperations: a }), { promise: o, pendingOperations: a };
                            }),
                            e
                        );
                    })();
                e.exports = s;
            },
            290109: (e, t, i) => {
                var n = (0, i(183491).default)(i(479035)),
                    r = i(705180),
                    s = i(887428),
                    o = i(647677),
                    a = r.fromObject(Object.freeze({ __UNPUBLISH_RECORD_SENTINEL: !0 })),
                    l = (function () {
                        function e(e) {
                            (this._base = e), (this._sink = s.create());
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
                                (this._base = s.create()), this._sink.clear();
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
                                    t = (0, n.default)({}, this._base.toJSON());
                                return (
                                    this._sink.getRecordIDs().forEach(function (i) {
                                        var n = e.get(i);
                                        void 0 === n ? delete t[i] : (t[i] = r.toJSON(n));
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
                        return e instanceof l || o(!1), e.getOptimisticRecordIDs();
                    },
                };
            },
            485520: (e, t, i) => {
                var n,
                    r,
                    s = i(957044),
                    o = i(233343),
                    a = i(176897),
                    l = i(458076),
                    u = i(887428),
                    c = i(647677),
                    d = (i(826590), void 0 !== i.g ? i.g : "undefined" != typeof window ? window : void 0),
                    h =
                        null !== (n = null == d || null === (r = d.ErrorUtils) || void 0 === r ? void 0 : r.applyWithGuard) && void 0 !== n
                            ? n
                            : function (e, t, i, n, r) {
                                  return e.apply(t, i);
                              },
                    p = (function () {
                        function e(e, t, i, n) {
                            (this._hasStoreSnapshot = !1), (this._handlerProvider = t || null), (this._pendingBackupRebase = !1), (this._pendingData = new Set()), (this._pendingOptimisticUpdates = new Set()), (this._store = e), (this._appliedOptimisticUpdates = new Set()), (this._gcHold = null), (this._getDataID = i), (this._missingFieldHandlers = n);
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
                            (t.commitPayload = function (e, t, i) {
                                (this._pendingBackupRebase = !0), this._pendingData.add({ kind: "payload", operation: e, payload: t, updater: i });
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
                                var i = this._commitData();
                                return (this._pendingOptimisticUpdates.size || (this._pendingBackupRebase && this._appliedOptimisticUpdates.size)) && (this._hasStoreSnapshot || (this._store.snapshot(), (this._hasStoreSnapshot = !0)), this._applyUpdates()), (this._pendingBackupRebase = !1), this._appliedOptimisticUpdates.size > 0 ? this._gcHold || (this._gcHold = this._store.holdGC()) : this._gcHold && (this._gcHold.dispose(), (this._gcHold = null)), this._store.notify(e, i);
                            }),
                            (t._publishSourceFromPayload = function (e) {
                                var t = this,
                                    i = e.payload,
                                    n = e.operation,
                                    r = e.updater,
                                    l = i.source,
                                    u = i.fieldPayloads,
                                    d = new s(this._store.getSource(), l),
                                    h = new o(d, this._getDataID, this._handlerProvider, this._missingFieldHandlers);
                                if (
                                    (u &&
                                        u.length &&
                                        u.forEach(function (e) {
                                            var i = t._handlerProvider && t._handlerProvider(e.handle);
                                            i || c(!1), i.update(h, e);
                                        }),
                                    r)
                                ) {
                                    var p = n.fragment;
                                    null == p && c(!1), r(new a(d, h, p, this._missingFieldHandlers), f(l, p));
                                }
                                var _ = h.getIDsMarkedForInvalidation();
                                return this._store.publish(l, _), h.isStoreMarkedForInvalidation();
                            }),
                            (t._commitData = function () {
                                var e = this;
                                if (!this._pendingData.size) return !1;
                                var t = !1;
                                return (
                                    this._pendingData.forEach(function (i) {
                                        if ("payload" === i.kind) {
                                            var n = e._publishSourceFromPayload(i);
                                            t = t || n;
                                        } else if ("source" === i.kind) {
                                            var r = i.source;
                                            e._store.publish(r);
                                        } else {
                                            var a = i.updater,
                                                l = u.create(),
                                                c = new s(e._store.getSource(), l),
                                                d = new o(c, e._getDataID, e._handlerProvider, e._missingFieldHandlers);
                                            h(a, null, [d], null, "RelayPublishQueue:commitData"), (t = t || d.isStoreMarkedForInvalidation());
                                            var p = d.getIDsMarkedForInvalidation();
                                            e._store.publish(l, p);
                                        }
                                    }),
                                    this._pendingData.clear(),
                                    t
                                );
                            }),
                            (t._applyUpdates = function () {
                                var e = this,
                                    t = u.create(),
                                    i = new s(this._store.getSource(), t),
                                    n = new o(i, this._getDataID, this._handlerProvider, this._missingFieldHandlers),
                                    r = function (t) {
                                        if (t.storeUpdater) {
                                            var r = t.storeUpdater;
                                            h(r, null, [n], null, "RelayPublishQueue:applyUpdates");
                                        } else {
                                            var s = t.operation,
                                                o = t.payload,
                                                l = t.updater,
                                                u = o.source,
                                                c = o.fieldPayloads;
                                            if ((u && n.publishSource(u, c), l)) {
                                                var d;
                                                u && (d = f(u, s.fragment));
                                                var p = new a(i, n, s.fragment, e._missingFieldHandlers);
                                                h(l, null, [p, d], null, "RelayPublishQueue:applyUpdates");
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
                function f(e, t) {
                    return l.read(e, t).data;
                }
                e.exports = p;
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-dfe82965.8f17b49a.js.map
