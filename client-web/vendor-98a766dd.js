window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-98a766dd"],
        {
            483872: (e, r, t) => {
                var n = (0, t(286190).generateClientID)(t(108475).ROOT_ID, "viewer");
                e.exports = { VIEWER_ID: n, VIEWER_TYPE: "Viewer" };
            },
            749110: (e, r, t) => {
                var n = t(677783).LINKED_FIELD,
                    a = t(108475).getHandleStorageKey,
                    i = t(193860),
                    o = t(647677);
                e.exports = function (e, r, t) {
                    var l = r.find(function (r) {
                        return r.kind === n && r.name === e.name && r.alias === e.alias && i(r.args, e.args);
                    });
                    (l && l.kind === n) || o(!1);
                    var s = a(e, t);
                    return { kind: "LinkedField", alias: l.alias, name: s, storageKey: s, args: null, concreteType: l.concreteType, plural: l.plural, selections: l.selections };
                };
            },
            533223: (e, r, t) => {
                var n = t(677783).SCALAR_FIELD,
                    a = t(108475).getHandleStorageKey,
                    i = t(193860),
                    o = t(647677);
                e.exports = function (e, r, t) {
                    var l = r.find(function (r) {
                        return r.kind === n && r.name === e.name && r.alias === e.alias && i(r.args, e.args);
                    });
                    (l && l.kind === n) || o(!1);
                    var s = a(e, t);
                    return { kind: "ScalarField", alias: l.alias, name: s, storageKey: s, args: null };
                };
            },
            42211: (e, r, t) => {
                var n = t(685324);
                t(826590);
                e.exports = function (e, r, t, a, i, o) {
                    return new n(e, t, a, o, i);
                };
            },
            949420: (e, r, t) => {
                var n,
                    a,
                    i = t(647677);
                e.exports = function (e) {
                    return n || ((n = e.createContext(null)), (a = e)), e !== a && i(!1), n;
                };
            },
            892030: (e, r, t) => {
                var n = t(483872),
                    a = n.VIEWER_ID,
                    i = n.VIEWER_TYPE;
                e.exports = function (e, r) {
                    return r === i && null == e.id ? a : e.id;
                };
            },
            610369: (e) => {
                e.exports = function (e) {
                    0;
                };
            },
            320755: (e) => {
                var r = Symbol.iterator;
                e.exports = function (e, t) {
                    for (var n = e[r](), a = n.next(); !a.done; ) {
                        var i = a.value;
                        if (t.has(i)) return !0;
                        a = n.next();
                    }
                    return !1;
                };
            },
            600353: (e, r, t) => {
                var n = t(108475).ROOT_ID,
                    a = t(483872).VIEWER_ID,
                    i = Symbol.iterator;
                e.exports = function (e, r) {
                    for (var t = e[i](), o = t.next(); !o.done; ) {
                        var l = o.value;
                        if (r.has(l) && l !== n && l !== a) return !0;
                        o = t.next();
                    }
                    return !1;
                };
            },
            539369: (e) => {
                e.exports = function (e) {
                    return Boolean(e && e["@@RelayModernEnvironment"]);
                };
            },
            482122: (e, r, t) => {
                var n = (0, t(183491).default)(t(158663)),
                    a = t(555398),
                    i = t(677783).RELAY_LIVE_RESOLVER,
                    o = t(891362),
                    l = t(922532),
                    s = t(286190),
                    u = s.generateClientID,
                    c = s.generateClientObjectClientID,
                    v = t(705180),
                    d = t(464711).createNormalizationSelector,
                    f = t(887428),
                    _ = t(513925).normalize,
                    R = t(108475),
                    h = R.RELAY_RESOLVER_ERROR_KEY,
                    p = R.RELAY_RESOLVER_INVALIDATION_KEY,
                    g = R.RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS,
                    S = R.RELAY_RESOLVER_SNAPSHOT_KEY,
                    E = R.RELAY_RESOLVER_VALUE_KEY,
                    y = R.getStorageKey,
                    I = t(399951),
                    V = t(612765),
                    D = t(514840).isSuspenseSentinel,
                    L = t(647677),
                    b = (t(826590), "__resolverLiveStateSubscription"),
                    m = "__resolverLiveStateValue",
                    T = "__resolverLiveStateDirty",
                    x = "__RELAY_RESOLVER__";
                function w(e, r, t) {
                    var n = e.get(r);
                    n || ((n = new Set()), e.set(r, n)), n.add(t);
                }
                var O = (function () {
                    function e(e, r) {
                        (this._resolverIDToRecordIDs = new Map()), (this._recordIDToResolverIDs = new Map()), (this._getRecordSource = e), (this._store = r), (this._handlingBatch = !1), (this._liveResolverBatchRecordSource = null);
                    }
                    var r = e.prototype;
                    return (
                        (r.readFromCacheOrEvaluate = function (e, r, t, a, o) {
                            var l,
                                s = this._getRecordSource(),
                                c = P(s, e),
                                d = y(r, t),
                                f = v.getLinkedRecordID(c, d),
                                _ = null == f ? null : s.get(f);
                            if (null == _ || this._isInvalid(_, o)) {
                                var R;
                                null != _ && Y(_), (f = null !== (R = f) && void 0 !== R ? R : u(e, d)), (_ = v.create(f, x));
                                var p = a();
                                if ((v.setValue(_, S, p.snapshot), v.setValue(_, h, p.error), r.kind === i))
                                    if (null != p.resolverResult) {
                                        0, null != p.error && L(!1);
                                        var g = p.resolverResult;
                                        l = this._setLiveStateValue(_, f, g, r, t);
                                    } else;
                                else l = this._setResolverValue(_, p.resolverResult, r, t);
                                s.set(f, _);
                                var E = P(s, e),
                                    I = v.clone(E);
                                if ((v.setLinkedRecordID(I, d, f), s.set(e, I), null != r.fragment)) {
                                    var b,
                                        O = y(r.fragment, t),
                                        A = u(e, O);
                                    w(this._resolverIDToRecordIDs, A, f), w(this._recordIDToResolverIDs, e, A);
                                    var k = null === (b = p.snapshot) || void 0 === b ? void 0 : b.seenRecords;
                                    if (null != k) {
                                        var F,
                                            C = (0, n.default)(k);
                                        try {
                                            for (C.s(); !(F = C.n()).done; ) {
                                                var N = F.value;
                                                w(this._recordIDToResolverIDs, N, A);
                                            }
                                        } catch (e) {
                                            C.e(e);
                                        } finally {
                                            C.f();
                                        }
                                    }
                                }
                            } else if (r.kind === i && v.getValue(_, T)) {
                                var B;
                                (f = null !== (B = f) && void 0 !== B ? B : u(e, d)), (_ = v.clone(_));
                                var K = v.getValue(_, m);
                                V(K) || L(!1), (l = this._setLiveResolverValue(_, K, r, t)), v.setValue(_, T, !1), s.set(f, _);
                            }
                            var U,
                                z = this._getResolverValue(_),
                                M = v.getValue(_, S),
                                j = v.getValue(_, h),
                                W = null;
                            D(z) && (W = null !== (U = f) && void 0 !== U ? U : u(e, d));
                            return [z, f, j, M, W, l];
                        }),
                        (r.getLiveResolverPromise = function (e) {
                            var r = this._getRecordSource().get(e);
                            null == r && L(!1);
                            var t = v.getValue(r, m);
                            return new Promise(function (e) {
                                var r = t.subscribe(function () {
                                    r(), e();
                                });
                            });
                        }),
                        (r._setLiveStateValue = function (e, r, t, n, a) {
                            var i = this._makeLiveStateHandler(r),
                                o = t.subscribe(i);
                            v.setValue(e, m, t);
                            var l = this._setLiveResolverValue(e, t, n, a);
                            return v.setValue(e, T, !1), v.setValue(e, b, o), l;
                        }),
                        (r._makeLiveStateHandler = function (e) {
                            var r = this;
                            return function () {
                                var t = r._getRecordSource().get(e);
                                if (t && v.hasValue(t, m)) {
                                    var n = v.clone(t);
                                    v.setValue(n, T, !0), r._setLiveResolverUpdate(e, n);
                                }
                            };
                        }),
                        (r._setLiveResolverUpdate = function (e, r) {
                            if (this._handlingBatch) null == this._liveResolverBatchRecordSource && (this._liveResolverBatchRecordSource = f.create()), this._liveResolverBatchRecordSource.set(e, r);
                            else {
                                var t = f.create();
                                t.set(e, r), this._store.publish(t), this._store.notify();
                            }
                        }),
                        (r.batchLiveStateUpdates = function (e) {
                            this._handlingBatch && L(!1), (this._handlingBatch = !0);
                            try {
                                e();
                            } finally {
                                null != this._liveResolverBatchRecordSource && (this._store.publish(this._liveResolverBatchRecordSource), this._store.notify()), (this._liveResolverBatchRecordSource = null), (this._handlingBatch = !1);
                            }
                        }),
                        (r._setLiveResolverValue = function (e, r, t, n) {
                            var a = null,
                                i = null;
                            try {
                                a = r.read();
                            } catch (e) {
                                i = e;
                            }
                            return v.setValue(e, h, i), this._setResolverValue(e, a, t, n);
                        }),
                        (r._setResolverValue = function (e, r, t, a) {
                            var i = t.normalizationInfo,
                                o = null;
                            if (null == r || null == i || D(r)) l(r), v.setValue(e, E, r);
                            else {
                                var s,
                                    u = I(e),
                                    d = new Set(),
                                    _ = this._getRecordSource();
                                if (i.plural) {
                                    Array.isArray(r) || L(!1), (s = []);
                                    for (var R = f.create(), h = 0; h < r.length; h++) {
                                        var p = r[h];
                                        if (null != p) {
                                            "object" != typeof p && L(!1);
                                            var S,
                                                y = N(i, p),
                                                V = c(y, v.getDataID(e), h),
                                                b = this._normalizeOutputTypeValue(V, p, a, i, [t.path, String(h)], y),
                                                m = (0, n.default)(b.getRecordIDs());
                                            try {
                                                for (m.s(); !(S = m.n()).done; ) {
                                                    var T = S.value;
                                                    R.set(T, P(b, T)), d.add(T);
                                                }
                                            } catch (e) {
                                                m.e(e);
                                            } finally {
                                                m.f();
                                            }
                                            s.push(V);
                                        }
                                    }
                                    o = A(_, R, u);
                                } else {
                                    "object" != typeof r && L(!1);
                                    var x,
                                        w = N(i, r),
                                        O = c(w, v.getDataID(e)),
                                        k = this._normalizeOutputTypeValue(O, r, a, i, [t.path], w),
                                        F = (0, n.default)(k.getRecordIDs());
                                    try {
                                        for (F.s(); !(x = F.n()).done; ) {
                                            var C = x.value;
                                            d.add(C);
                                        }
                                    } catch (e) {
                                        F.e(e);
                                    } finally {
                                        F.f();
                                    }
                                    (s = O), (o = A(_, k, u));
                                }
                                v.setValue(e, g, d), l(s), v.setValue(e, E, s);
                            }
                            return o;
                        }),
                        (r.notifyUpdatedSubscribers = function (e) {
                            this._store.__notifyUpdatedSubscribers(e);
                        }),
                        (r._getResolverValue = function (e) {
                            return v.getValue(e, E);
                        }),
                        (r.invalidateDataIDs = function (e) {
                            for (var r = this._getRecordSource(), t = new Set(), a = Array.from(e); a.length; ) {
                                var i = a.pop();
                                t.add(i), e.add(i);
                                var o = this._recordIDToResolverIDs.get(i);
                                if (null != o) {
                                    var l,
                                        s = (0, n.default)(o);
                                    try {
                                        for (s.s(); !(l = s.n()).done; ) {
                                            var u = l.value;
                                            if (!t.has(u)) {
                                                t.add(u);
                                                var c = this._resolverIDToRecordIDs.get(u);
                                                if (null == c) continue;
                                                var v,
                                                    d = (0, n.default)(c);
                                                try {
                                                    for (d.s(); !(v = d.n()).done; ) {
                                                        var f = v.value;
                                                        k(f, r), t.has(f) || (t.add(f), a.push(f));
                                                    }
                                                } catch (e) {
                                                    d.e(e);
                                                } finally {
                                                    d.f();
                                                }
                                            }
                                        }
                                    } catch (e) {
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                }
                            }
                        }),
                        (r._isInvalid = function (e, r) {
                            if (!v.getValue(e, p)) return !1;
                            var t = v.getValue(e, S),
                                n = null == t ? void 0 : t.data,
                                i = null == t ? void 0 : t.selector;
                            if (null == n || null == i) return !0;
                            var l = r(i).data;
                            if (a(n, l) !== n) return !0;
                            if (o.MARK_RESOLVER_VALUES_AS_CLEAN_AFTER_FRAGMENT_REREAD) {
                                var s = v.clone(e);
                                v.setValue(s, p, !1), this._getRecordSource().set(v.getDataID(e), s);
                            }
                            return !1;
                        }),
                        (r._normalizeOutputTypeValue = function (e, r, t, n, a, i) {
                            var o = f.create();
                            switch (n.kind) {
                                case "OutputType":
                                    var l = v.create(e, i);
                                    o.set(e, l);
                                    var s = d(n.normalizationNode, e, t),
                                        u = this._store.__getNormalizationOptions(a);
                                    return _(o, s, r, u).source;
                                case "WeakModel":
                                    var c = v.create(e, i);
                                    return v.setValue(c, "__relay_model_instance", r), o.set(e, c), o;
                                default:
                                    n.kind, L(!1);
                            }
                        }),
                        (r.ensureClientRecord = function (e, r) {
                            var t = c(r, e),
                                n = this._getRecordSource();
                            if (!n.has(t)) {
                                var a = v.create(t, r);
                                v.setValue(a, "id", e), n.set(t, a);
                            }
                            return t;
                        }),
                        (r.unsubscribeFromLiveResolverRecords = function (e) {
                            return (function (e, r) {
                                if (0 === r.size) return;
                                var t,
                                    a = (0, n.default)(r);
                                try {
                                    for (a.s(); !(t = a.n()).done; ) {
                                        var i = t.value,
                                            o = e.get(i);
                                        null != o && C(o) && Y(o);
                                    }
                                } catch (e) {
                                    a.e(e);
                                } finally {
                                    a.f();
                                }
                            })(this._getRecordSource(), e);
                        }),
                        (r.invalidateResolverRecords = function (e) {
                            if (0 !== e.size) {
                                var r,
                                    t = (0, n.default)(e);
                                try {
                                    for (t.s(); !(r = t.n()).done; ) {
                                        var a = r.value,
                                            i = this._getRecordSource().get(a);
                                        null != i && C(i) && this._getRecordSource().delete(a);
                                    }
                                } catch (e) {
                                    t.e(e);
                                } finally {
                                    t.f();
                                }
                            }
                        }),
                        e
                    );
                })();
                function A(e, r, t) {
                    var a = new Set();
                    if (null != t) {
                        var i,
                            o = (0, n.default)(t);
                        try {
                            for (o.s(); !(i = o.n()).done; ) {
                                var l = i.value;
                                r.has(l) || (a.add(l), e.remove(l));
                            }
                        } catch (e) {
                            o.e(e);
                        } finally {
                            o.f();
                        }
                    }
                    var s,
                        u = (0, n.default)(r.getRecordIDs());
                    try {
                        for (u.s(); !(s = u.n()).done; ) {
                            var c = s.value,
                                d = P(r, c);
                            if (e.has(c)) {
                                var f = P(e, c),
                                    _ = v.update(f, d);
                                _ !== f && (a.add(c), e.set(c, _), F(f, e));
                            } else e.set(c, d);
                        }
                    } catch (e) {
                        u.e(e);
                    } finally {
                        u.f();
                    }
                    return a;
                }
                function k(e, r) {
                    var t = r.get(e);
                    if (t) {
                        var n = v.clone(t);
                        v.setValue(n, p, !0), r.set(e, n);
                    }
                }
                function F(e, r) {
                    var t,
                        a = (function (e) {
                            var r = new Set();
                            return (
                                v.getFields(e).forEach(function (t) {
                                    if (v.hasLinkedRecordID(e, t)) {
                                        var n = v.getLinkedRecordID(e, t);
                                        null != n && r.add(n);
                                    } else if (v.hasLinkedRecordIDs(e, t)) {
                                        var a;
                                        null === (a = v.getLinkedRecordIDs(e, t)) ||
                                            void 0 === a ||
                                            a.forEach(function (e) {
                                                null != e && r.add(e);
                                            });
                                    }
                                }),
                                r
                            );
                        })(e),
                        i = (0, n.default)(a);
                    try {
                        for (i.s(); !(t = i.n()).done; ) {
                            var o = t.value,
                                l = r.get(o);
                            null != l && C(l) && k(o, r);
                        }
                    } catch (e) {
                        i.e(e);
                    } finally {
                        i.f();
                    }
                }
                function C(e) {
                    return v.getType(e) === x;
                }
                function Y(e) {
                    var r = v.getValue(e, b);
                    null != r && r();
                }
                function P(e, r) {
                    var t = e.get(r);
                    return null == t && L(!1), t;
                }
                function N(e, r) {
                    var t,
                        n = null !== (t = e.concreteType) && void 0 !== t ? t : r.__typename;
                    return null == n && L(!1), n;
                }
                e.exports = {
                    LiveResolverCache: O,
                    getUpdatedDataIDs: function (e) {
                        return e;
                    },
                    RELAY_RESOLVER_LIVE_STATE_SUBSCRIPTION_KEY: b,
                };
            },
            514840: (e) => {
                var r = Object.freeze({ __LIVE_RESOLVER_SUSPENSE_SENTINEL: !0 });
                e.exports = {
                    isSuspenseSentinel: function (e) {
                        return e === r;
                    },
                    suspenseSentinel: function () {
                        return r;
                    },
                };
            },
            399951: (e, r, t) => {
                var n = t(705180),
                    a = t(108475).RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS,
                    i = t(647677);
                e.exports = function (e) {
                    var r = n.getValue(e, a);
                    return null == r ? null : (r instanceof Set || i(!1), r);
                };
            },
            612765: (e) => {
                e.exports = function (e) {
                    return null != e && "object" == typeof e && "function" == typeof e.read && "function" == typeof e.subscribe;
                };
            },
            487309: (e, r, t) => {
                var n = t(296932).readFragment,
                    a = t(647677);
                e.exports = function (e, r, t, i) {
                    var o = r;
                    return function (r, l) {
                        var s = n(e, r);
                        if (null == t) return o(s, l);
                        if (null == s) {
                            if (!0 !== i) return o(null, l);
                            a(!1);
                        }
                        if (t in s) return !0 === i && null == s[t] && a(!1), o(s[t], l);
                        a(!1);
                    };
                };
            },
            158446: (e, r, t) => {
                var n = t(183491).default,
                    a = n(t(479035)),
                    i = n(t(705180)),
                    o = n(t(887428)),
                    l = n(t(513925));
                e.exports = function (e, r, t, n) {
                    var s,
                        u = e.data,
                        c = e.errors,
                        v = o.default.create(),
                        d = i.default.create(r.dataID, t);
                    v.set(r.dataID, d);
                    var f = l.default.normalize(v, r, u, n, c);
                    return (0, a.default)((0, a.default)({}, f), {}, { isFinal: !0 === (null === (s = e.extensions) || void 0 === s ? void 0 : s.is_final) });
                };
            },
            891022: (e, r, t) => {
                var n = t(53043).default,
                    a = t(408122),
                    i = t(585488).getFragment,
                    o = t(219433),
                    l = t(927421).handlePotentialSnapshotErrors,
                    s = t(464711).getSelector,
                    u = t(647677);
                function c() {
                    return (c = n(function* (e, r, t) {
                        var n;
                        try {
                            var a,
                                i = yield new Promise(function (a, i) {
                                    n = v(e, r, t).subscribe({
                                        next: function (e) {
                                            "ok" === e.state ? a(e.value) : "error" === e.state && i(e.error);
                                        },
                                    });
                                });
                            return null === (a = n) || void 0 === a || a.unsubscribe(), i;
                        } catch (e) {
                            var o;
                            throw (null === (o = n) || void 0 === o || o.unsubscribe(), e);
                        }
                    })).apply(this, arguments);
                }
                function v(e, r, t) {
                    var n,
                        o = i(r),
                        l = s(o, t);
                    switch ((null != (null === (n = o.metadata) || void 0 === n ? void 0 : n.hasClientEdges) && u(!1), null == l && u(!1), l.kind)) {
                        case "SingularReaderSelector":
                            return (function (e, r, t) {
                                var n = e.lookup(t);
                                return a.create(function (a) {
                                    a.next(d(e, r, t.owner, n));
                                    var i = e.subscribe(n, function (n) {
                                        a.next(d(e, r, t.owner, n));
                                    });
                                    return function () {
                                        return i.dispose();
                                    };
                                });
                            })(e, r, l);
                        case "PluralReaderSelector":
                            u(!1);
                    }
                    u(!1);
                }
                function d(e, r, t, n) {
                    var a = null != n.missingLiveResolverFields && n.missingLiveResolverFields.length > 0,
                        i = null != n.missingClientEdges && n.missingClientEdges.length > 0;
                    if (a || i) return { state: "loading" };
                    if (n.isMissingData && null != o(e, r, t)) return { state: "loading" };
                    try {
                        l(e, n.errorResponseFields);
                    } catch (e) {
                        return { error: e, state: "error" };
                    }
                    return null == n.data && u(!1), { state: "ok", value: n.data };
                }
                e.exports = {
                    observeFragment: v,
                    waitForFragmentData: function (e, r, t) {
                        return c.apply(this, arguments);
                    },
                };
            },
            990242: (e, r, t) => {
                var n = t(585488).getInlineDataFragment,
                    a = t(108475).FRAGMENTS_KEY,
                    i = t(647677);
                e.exports = function (e, r) {
                    var t,
                        o = n(e);
                    if (null == r) return r;
                    "object" != typeof r && i(!1);
                    var l = null === (t = r[a]) || void 0 === t ? void 0 : t[o.name];
                    return null == l && i(!1), l;
                };
            },
            276103: (e, r, t) => {
                var n = t(53043).default,
                    a = t(891022).observeFragment;
                function i() {
                    return (i = n(function* (e, r, t) {
                        var n;
                        try {
                            var i,
                                o = yield new Promise(function (i, o) {
                                    n = a(e, r, t).subscribe({
                                        next: function (e) {
                                            "ok" === e.state ? i(e.value) : "error" === e.state && o(e.error);
                                        },
                                    });
                                });
                            return null === (i = n) || void 0 === i || i.unsubscribe(), o;
                        } catch (e) {
                            var l;
                            throw (null === (l = n) || void 0 === l || l.unsubscribe(), e);
                        }
                    })).apply(this, arguments);
                }
                e.exports = {
                    waitForFragmentData: function (e, r, t) {
                        return i.apply(this, arguments);
                    },
                };
            },
            444891: (e, r, t) => {
                var n = t(896849),
                    a = t(585488).getRequest,
                    i = t(767408).createOperationDescriptor,
                    o = t(464711).createReaderSelector;
                t(826590);
                e.exports = function (e, r) {
                    var t = a(r.subscription);
                    if ("subscription" !== t.params.operationKind) throw new Error("requestSubscription: Must use Subscription operation");
                    var l = r.configs,
                        s = r.onCompleted,
                        u = r.onError,
                        c = r.onNext,
                        v = r.variables,
                        d = r.cacheConfig,
                        f = i(t, v, d),
                        _ = (l ? n.convert(l, t, null, r.updater) : r).updater;
                    return {
                        dispose: e.executeSubscription({ operation: f, updater: _ }).subscribe({
                            next: function (r) {
                                if (null != c) {
                                    var t,
                                        n,
                                        a,
                                        i,
                                        l = f.fragment;
                                    if (Array.isArray(r)) t = null === (n = r[0]) || void 0 === n || null === (a = n.extensions) || void 0 === a ? void 0 : a.__relay_subscription_root_id;
                                    else t = null === (i = r.extensions) || void 0 === i ? void 0 : i.__relay_subscription_root_id;
                                    "string" == typeof t && (l = o(l.node, t, l.variables, l.owner));
                                    var s = e.lookup(l).data;
                                    c(s);
                                }
                            },
                            error: u,
                            complete: s,
                        }).unsubscribe,
                    };
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-98a766dd.9802f00a.js.map
