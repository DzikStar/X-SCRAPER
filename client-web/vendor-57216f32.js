window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-57216f32"],
        {
            280587: (e, r, t) => {
                var n = (0, t(171600).default)(t(638636)),
                    a = t(555398),
                    o = t(677783).RELAY_LIVE_RESOLVER,
                    l = t(891362),
                    i = t(922532),
                    u = t(286190).generateClientID,
                    s = t(705180),
                    v = t(108475),
                    d = v.RELAY_RESOLVER_ERROR_KEY,
                    c = v.RELAY_RESOLVER_INVALIDATION_KEY,
                    f = v.RELAY_RESOLVER_SNAPSHOT_KEY,
                    _ = v.RELAY_RESOLVER_VALUE_KEY,
                    R = v.getStorageKey,
                    E = t(647677),
                    I = (t(826590), new Set()),
                    g = (function () {
                        function e() {}
                        var r = e.prototype;
                        return (
                            (r.readFromCacheOrEvaluate = function (e, r, t, n, a) {
                                r.kind === o && E(!1);
                                var l = n(),
                                    i = l.resolverResult,
                                    u = l.snapshot;
                                return [i, void 0, l.error, u, void 0, void 0];
                            }),
                            (r.invalidateDataIDs = function (e) {}),
                            (r.ensureClientRecord = function (e, r) {
                                E(!1);
                            }),
                            (r.notifyUpdatedSubscribers = function (e) {}),
                            e
                        );
                    })();
                function S(e, r, t) {
                    var n = e.get(r);
                    n || ((n = new Set()), e.set(r, n)), n.add(t);
                }
                var p = (function () {
                    function e(e) {
                        (this._resolverIDToRecordIDs = new Map()), (this._recordIDToResolverIDs = new Map()), (this._getRecordSource = e);
                    }
                    var r = e.prototype;
                    return (
                        (r.readFromCacheOrEvaluate = function (e, r, t, a, o) {
                            var l = this._getRecordSource(),
                                v = l.get(e);
                            null == v && E(!1);
                            var c = R(r, t),
                                I = s.getLinkedRecordID(v, c),
                                g = null == I ? null : l.get(I);
                            if (null == g || this._isInvalid(g, o)) {
                                var p;
                                (I = null !== (p = I) && void 0 !== p ? p : u(e, c)), (g = s.create(I, "__RELAY_RESOLVER__"));
                                var D = a();
                                i(D.resolverResult), s.setValue(g, _, D.resolverResult), s.setValue(g, f, D.snapshot), s.setValue(g, d, D.error), l.set(I, g);
                                var h = l.get(e);
                                null == h && E(!1);
                                var L = s.clone(h);
                                if ((s.setLinkedRecordID(L, c, I), l.set(e, L), null != r.fragment)) {
                                    var T,
                                        V = R(r.fragment, t),
                                        y = u(e, V);
                                    S(this._resolverIDToRecordIDs, y, I), S(this._recordIDToResolverIDs, e, y);
                                    var A = null === (T = D.snapshot) || void 0 === T ? void 0 : T.seenRecords;
                                    if (null != A) {
                                        var m,
                                            x = (0, n.default)(A);
                                        try {
                                            for (x.s(); !(m = x.n()).done; ) {
                                                var O = m.value;
                                                S(this._recordIDToResolverIDs, O, y);
                                            }
                                        } catch (e) {
                                            x.e(e);
                                        } finally {
                                            x.f();
                                        }
                                    }
                                }
                            }
                            var w = s.getValue(g, _),
                                C = s.getValue(g, f);
                            return [w, I, s.getValue(g, d), C, void 0, void 0];
                        }),
                        (r.invalidateDataIDs = function (e) {
                            for (var r = this._getRecordSource(), t = new Set(), a = Array.from(e); a.length; ) {
                                var o = a.pop();
                                e.add(o);
                                var l,
                                    i = (0, n.default)(null !== (u = this._recordIDToResolverIDs.get(o)) && void 0 !== u ? u : I);
                                try {
                                    for (i.s(); !(l = i.n()).done; ) {
                                        var u,
                                            s = l.value;
                                        if (!t.has(s)) {
                                            var v,
                                                d = (0, n.default)(null !== (c = this._resolverIDToRecordIDs.get(s)) && void 0 !== c ? c : I);
                                            try {
                                                for (d.s(); !(v = d.n()).done; ) {
                                                    var c,
                                                        f = v.value;
                                                    this._markInvalidatedResolverRecord(f, r, e), t.has(f) || a.push(f);
                                                }
                                            } catch (e) {
                                                d.e(e);
                                            } finally {
                                                d.f();
                                            }
                                        }
                                    }
                                } catch (e) {
                                    i.e(e);
                                } finally {
                                    i.f();
                                }
                            }
                        }),
                        (r._markInvalidatedResolverRecord = function (e, r, t) {
                            var n = r.get(e);
                            if (n) {
                                var a = s.clone(n);
                                s.setValue(a, c, !0), r.set(e, a);
                            }
                        }),
                        (r._isInvalid = function (e, r) {
                            if (!s.getValue(e, c)) return !1;
                            var t = s.getValue(e, f),
                                n = null == t ? void 0 : t.data,
                                o = null == t ? void 0 : t.selector;
                            if (null == n || null == o) return !0;
                            var i = r(o).data;
                            if (a(n, i) !== n) return !0;
                            if (l.MARK_RESOLVER_VALUES_AS_CLEAN_AFTER_FRAGMENT_REREAD) {
                                var u = s.clone(e);
                                s.setValue(u, c, !1), this._getRecordSource().set(s.getDataID(e), u);
                            }
                            return !1;
                        }),
                        (r.ensureClientRecord = function (e, r) {
                            E(!1);
                        }),
                        (r.notifyUpdatedSubscribers = function (e) {
                            E(!1);
                        }),
                        e
                    );
                })();
                e.exports = { NoopResolverCache: g, RecordResolverCache: p };
            },
            296932: (e, r, t) => {
                var n = t(585488).getFragment,
                    a = t(464711).getSelector,
                    o = t(647677),
                    l = [];
                var i = {};
                e.exports = {
                    readFragment: function (e, r) {
                        if (!l.length) throw new Error("readFragment should be called only from within a Relay Resolver function.");
                        var t = l[l.length - 1],
                            u = n(e),
                            s = a(u, r);
                        null == s && o(!1), "SingularReaderSelector" !== s.kind && o(!1);
                        var v = t.getDataForResolverFragment(s, r),
                            d = v.data;
                        if (v.isMissingData) throw i;
                        return d;
                    },
                    withResolverContext: function (e, r) {
                        l.push(e);
                        try {
                            return r();
                        } finally {
                            l.pop();
                        }
                    },
                    RESOLVER_FRAGMENT_MISSING_DATA_SENTINEL: i,
                };
            },
            348073: (e) => {
                var r = "client:__type:";
                e.exports = {
                    generateTypeID: function (e) {
                        return r + e;
                    },
                    isTypeID: function (e) {
                        return 0 === e.indexOf(r);
                    },
                    TYPE_SCHEMA_TYPE: "__TypeSchema",
                };
            },
            483872: (e, r, t) => {
                var n = (0, t(286190).generateClientID)(t(108475).ROOT_ID, "viewer");
                e.exports = { VIEWER_ID: n, VIEWER_TYPE: "Viewer" };
            },
            749110: (e, r, t) => {
                var n = t(677783).LINKED_FIELD,
                    a = t(108475).getHandleStorageKey,
                    o = t(193860),
                    l = t(647677);
                e.exports = function (e, r, t) {
                    var i = r.find(function (r) {
                        return r.kind === n && r.name === e.name && r.alias === e.alias && o(r.args, e.args);
                    });
                    (i && i.kind === n) || l(!1);
                    var u = a(e, t);
                    return { kind: "LinkedField", alias: i.alias, name: u, storageKey: u, args: null, concreteType: i.concreteType, plural: i.plural, selections: i.selections };
                };
            },
            533223: (e, r, t) => {
                var n = t(677783).SCALAR_FIELD,
                    a = t(108475).getHandleStorageKey,
                    o = t(193860),
                    l = t(647677);
                e.exports = function (e, r, t) {
                    var i = r.find(function (r) {
                        return r.kind === n && r.name === e.name && r.alias === e.alias && o(r.args, e.args);
                    });
                    (i && i.kind === n) || l(!1);
                    var u = a(e, t);
                    return { kind: "ScalarField", alias: i.alias, name: u, storageKey: u, args: null };
                };
            },
            42211: (e, r, t) => {
                var n = t(685324);
                t(826590);
                e.exports = function (e, r, t, a, o, l) {
                    return new n(e, t, a, l, o);
                };
            },
            949420: (e, r, t) => {
                var n,
                    a,
                    o = t(647677);
                e.exports = function (e) {
                    return n || ((n = e.createContext(null)), (a = e)), e !== a && o(!1), n;
                };
            },
            892030: (e, r, t) => {
                var n = t(483872),
                    a = n.VIEWER_ID,
                    o = n.VIEWER_TYPE;
                e.exports = function (e, r) {
                    return r === o && null == e.id ? a : e.id;
                };
            },
            610369: (e) => {
                e.exports = function (e) {
                    0;
                };
            },
            798452: (e) => {
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
            679321: (e, r, t) => {
                var n = t(705180),
                    a = t(108475).RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS,
                    o = t(647677);
                e.exports = function (e) {
                    var r = n.getValue(e, a);
                    return null == r ? null : (r instanceof Set || o(!1), r);
                };
            },
            320755: (e) => {
                var r = Symbol.iterator;
                e.exports = function (e, t) {
                    for (var n = e[r](), a = n.next(); !a.done; ) {
                        var o = a.value;
                        if (t.has(o)) return !0;
                        a = n.next();
                    }
                    return !1;
                };
            },
            600353: (e, r, t) => {
                var n = t(108475).ROOT_ID,
                    a = t(483872).VIEWER_ID,
                    o = Symbol.iterator;
                e.exports = function (e, r) {
                    for (var t = e[o](), l = t.next(); !l.done; ) {
                        var i = l.value;
                        if (r.has(i) && i !== n && i !== a) return !0;
                        l = t.next();
                    }
                    return !1;
                };
            },
            539369: (e) => {
                e.exports = function (e) {
                    return Boolean(e && e["@@RelayModernEnvironment"]);
                };
            },
            158446: (e, r, t) => {
                var n = t(171600).default,
                    a = n(t(900814)),
                    o = n(t(705180)),
                    l = n(t(887428)),
                    i = n(t(513925));
                e.exports = function (e, r, t, n) {
                    var u,
                        s = e.data,
                        v = e.errors,
                        d = l.default.create(),
                        c = o.default.create(r.dataID, t);
                    d.set(r.dataID, c);
                    var f = i.default.normalize(d, r, s, n, v);
                    return (0, a.default)((0, a.default)({}, f), {}, { isFinal: !0 === (null === (u = e.extensions) || void 0 === u ? void 0 : u.is_final) });
                };
            },
            990242: (e, r, t) => {
                var n = t(585488).getInlineDataFragment,
                    a = t(108475).FRAGMENTS_KEY,
                    o = t(647677);
                e.exports = function (e, r) {
                    var t,
                        l = n(e);
                    if (null == r) return r;
                    "object" != typeof r && o(!1);
                    var i = null === (t = r[a]) || void 0 === t ? void 0 : t[l.name];
                    return null == i && o(!1), i;
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-57216f32.ef22925a.js.map
