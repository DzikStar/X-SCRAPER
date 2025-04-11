window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-e395fecc"],
        {
            177617: (e, t, r) => {
                var n = r(647677),
                    i = "INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE";
                e.exports = {
                    assertInternalActorIdentifier: function (e) {
                        e !== i && n(!1);
                    },
                    getActorIdentifier: function (e) {
                        return e;
                    },
                    getDefaultActorIdentifier: function () {
                        throw new Error("Not Implemented");
                    },
                    INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE: i,
                };
            },
            402333: (e, t, r) => {
                var n = "actor_key",
                    i = r(177617).getActorIdentifier;
                e.exports = {
                    ACTOR_IDENTIFIER_FIELD_NAME: n,
                    getActorIdentifierFromPayload: function (e) {
                        if (null != e && "object" == typeof e && "string" == typeof e[n]) return i(e[n]);
                    },
                };
            },
            896849: (e, t, r) => {
                var n = (0, r(171600).default)(r(638636)),
                    i = r(262485),
                    o = (r(826590), Object.freeze({ RANGE_ADD: "RANGE_ADD", RANGE_DELETE: "RANGE_DELETE", NODE_DELETE: "NODE_DELETE" })),
                    a = Object.freeze({ APPEND: "append", PREPEND: "prepend" });
                function s(e) {
                    return e.fragment.selections && e.fragment.selections.length > 0 && "LinkedField" === e.fragment.selections[0].kind ? e.fragment.selections[0].name : null;
                }
                e.exports = {
                    MutationTypes: o,
                    RangeOperations: a,
                    convert: function (e, t, r, o) {
                        var a = r ? [r] : [],
                            u = o ? [o] : [];
                        return (
                            e.forEach(function (e) {
                                switch (e.type) {
                                    case "NODE_DELETE":
                                        var r = (function (e, t) {
                                            var r = e.deletedIDFieldName,
                                                n = s(t);
                                            if (!n) return null;
                                            return function (e, t) {
                                                var i = e.getRootField(n);
                                                if (i) {
                                                    var o = i.getValue(r);
                                                    (Array.isArray(o) ? o : [o]).forEach(function (t) {
                                                        t && "string" == typeof t && e.delete(t);
                                                    });
                                                }
                                            };
                                        })(e, t);
                                        r && (a.push(r), u.push(r));
                                        break;
                                    case "RANGE_ADD":
                                        var o = (function (e, t) {
                                            var r = e.parentID,
                                                o = e.connectionInfo,
                                                a = e.edgeName;
                                            if (!r) return null;
                                            var u = s(t);
                                            if (!o || !u) return null;
                                            return function (e, t) {
                                                var s = e.get(r);
                                                if (s) {
                                                    var c = e.getRootField(u);
                                                    if (c) {
                                                        var l,
                                                            f = c.getLinkedRecord(a),
                                                            d = (0, n.default)(o);
                                                        try {
                                                            for (d.s(); !(l = d.n()).done; ) {
                                                                var _ = l.value;
                                                                if (f) {
                                                                    var h = i.getConnection(s, _.key, _.filters);
                                                                    if (h) {
                                                                        var p = i.buildConnectionEdge(e, h, f);
                                                                        if (p)
                                                                            switch (_.rangeBehavior) {
                                                                                case "append":
                                                                                    i.insertEdgeAfter(h, p);
                                                                                    break;
                                                                                case "prepend":
                                                                                    i.insertEdgeBefore(h, p);
                                                                            }
                                                                    }
                                                                }
                                                            }
                                                        } catch (e) {
                                                            d.e(e);
                                                        } finally {
                                                            d.f();
                                                        }
                                                    }
                                                }
                                            };
                                        })(e, t);
                                        o && (a.push(o), u.push(o));
                                        break;
                                    case "RANGE_DELETE":
                                        var c = (function (e, t) {
                                            var r = e.parentID,
                                                o = e.connectionKeys,
                                                a = e.pathToConnection,
                                                u = e.deletedIDFieldName;
                                            if (!r) return null;
                                            var c = s(t);
                                            if (!c) return null;
                                            return function (e, t) {
                                                if (t) {
                                                    var s = [],
                                                        l = t[c];
                                                    if (l && Array.isArray(u)) {
                                                        var f,
                                                            d = (0, n.default)(u);
                                                        try {
                                                            for (d.s(); !(f = d.n()).done; ) {
                                                                var _ = f.value;
                                                                l && "object" == typeof l && (l = l[_]);
                                                            }
                                                        } catch (e) {
                                                            d.e(e);
                                                        } finally {
                                                            d.f();
                                                        }
                                                        Array.isArray(l)
                                                            ? l.forEach(function (e) {
                                                                  e && e.id && "object" == typeof e && "string" == typeof e.id && s.push(e.id);
                                                              })
                                                            : l && l.id && "string" == typeof l.id && s.push(l.id);
                                                    } else
                                                        l &&
                                                            "string" == typeof u &&
                                                            "object" == typeof l &&
                                                            ("string" == typeof (l = l[u])
                                                                ? s.push(l)
                                                                : Array.isArray(l) &&
                                                                  l.forEach(function (e) {
                                                                      "string" == typeof e && s.push(e);
                                                                  }));
                                                    !(function (e, t, r, o, a) {
                                                        var s = o.get(e);
                                                        if (!s) return;
                                                        if (r.length < 2) return;
                                                        for (var u = s, c = 1; c < r.length - 1; c++) u && (u = u.getLinkedRecord(r[c]));
                                                        if (!t || !u) return;
                                                        var l,
                                                            f = (0, n.default)(t);
                                                        try {
                                                            var d = function () {
                                                                var e = l.value,
                                                                    t = i.getConnection(u, e.key, e.filters);
                                                                t &&
                                                                    a.forEach(function (e) {
                                                                        i.deleteNode(t, e);
                                                                    });
                                                            };
                                                            for (f.s(); !(l = f.n()).done; ) d();
                                                        } catch (e) {
                                                            f.e(e);
                                                        } finally {
                                                            f.f();
                                                        }
                                                    })(r, o, a, e, s);
                                                }
                                            };
                                        })(e, t);
                                        c && (a.push(c), u.push(c));
                                }
                            }),
                            {
                                optimisticUpdater: function (e, t) {
                                    a.forEach(function (r) {
                                        r(e, t);
                                    });
                                },
                                updater: function (e, t) {
                                    u.forEach(function (r) {
                                        r(e, t);
                                    });
                                },
                            }
                        );
                    },
                };
            },
            277874: (e, t, r) => {
                var n = r(286190).generateClientID,
                    i = r(108475).getStableStorageKey,
                    o = r(647677),
                    a = (function () {
                        function e(e, t, r) {
                            (this._dataID = r), (this._mutator = t), (this._source = e);
                        }
                        var t = e.prototype;
                        return (
                            (t.copyFieldsFrom = function (e) {
                                this._mutator.copyFields(e.getDataID(), this._dataID);
                            }),
                            (t.getDataID = function () {
                                return this._dataID;
                            }),
                            (t.getType = function () {
                                var e = this._mutator.getType(this._dataID);
                                return null == e && o(!1), e;
                            }),
                            (t.getValue = function (e, t) {
                                var r = i(e, t);
                                return this._mutator.getValue(this._dataID, r);
                            }),
                            (t.setValue = function (e, t, r) {
                                return s(e) || o(!1), this.setValue__UNSAFE(e, t, r);
                            }),
                            (t.setValue__UNSAFE = function (e, t, r) {
                                var n = i(t, r);
                                return this._mutator.setValue(this._dataID, n, e), this;
                            }),
                            (t.getLinkedRecord = function (e, t) {
                                var r = i(e, t),
                                    n = this._mutator.getLinkedRecordID(this._dataID, r);
                                return null != n ? this._source.get(n) : n;
                            }),
                            (t.setLinkedRecord = function (t, r, n) {
                                t instanceof e || o(!1);
                                var a = i(r, n),
                                    s = t.getDataID();
                                return this._mutator.setLinkedRecordID(this._dataID, a, s), this;
                            }),
                            (t.getOrCreateLinkedRecord = function (e, t, r) {
                                var o = this.getLinkedRecord(e, r);
                                if (!o) {
                                    var a,
                                        s = i(e, r),
                                        u = n(this.getDataID(), s);
                                    (o = null !== (a = this._source.get(u)) && void 0 !== a ? a : this._source.create(u, t)), this.setLinkedRecord(o, e, r);
                                }
                                return o;
                            }),
                            (t.getLinkedRecords = function (e, t) {
                                var r = this,
                                    n = i(e, t),
                                    o = this._mutator.getLinkedRecordIDs(this._dataID, n);
                                return null == o
                                    ? o
                                    : o.map(function (e) {
                                          return null != e ? r._source.get(e) : e;
                                      });
                            }),
                            (t.setLinkedRecords = function (e, t, r) {
                                Array.isArray(e) || o(!1);
                                var n = i(t, r),
                                    a = e.map(function (e) {
                                        return e && e.getDataID();
                                    });
                                return this._mutator.setLinkedRecordIDs(this._dataID, n, a), this;
                            }),
                            (t.invalidateRecord = function () {
                                this._source.markIDForInvalidation(this._dataID);
                            }),
                            e
                        );
                    })();
                function s(e) {
                    return null == e || "object" != typeof e || (Array.isArray(e) && e.every(s));
                }
                e.exports = a;
            },
            957044: (e, t, r) => {
                var n = r(705180),
                    i = r(193740).EXISTENT,
                    o = r(647677),
                    a = (function () {
                        function e(e, t) {
                            (this.__sources = [t, e]), (this._base = e), (this._sink = t);
                        }
                        var t = e.prototype;
                        return (
                            (t.unstable_getRawRecordWithChanges = function (e) {
                                var t = this._base.get(e),
                                    r = this._sink.get(e);
                                return void 0 === r ? (null == t ? t : n.clone(t)) : null === r ? null : null != t ? n.update(t, r) : n.clone(r);
                            }),
                            (t._getSinkRecord = function (e) {
                                var t = this._sink.get(e);
                                if (!t) {
                                    var r = this._base.get(e);
                                    r || o(!1), (t = n.create(e, n.getType(r))), this._sink.set(e, t);
                                }
                                return t;
                            }),
                            (t.copyFields = function (e, t) {
                                var r = this._sink.get(e),
                                    i = this._base.get(e);
                                r || i || o(!1);
                                var a = this._getSinkRecord(t);
                                i && n.copyFields(i, a), r && n.copyFields(r, a);
                            }),
                            (t.copyFieldsFromRecord = function (e, t) {
                                var r = this._getSinkRecord(t);
                                n.copyFields(e, r);
                            }),
                            (t.create = function (e, t) {
                                (this._base.getStatus(e) === i || this._sink.getStatus(e) === i) && o(!1);
                                var r = n.create(e, t);
                                this._sink.set(e, r);
                            }),
                            (t.delete = function (e) {
                                this._sink.delete(e);
                            }),
                            (t.getStatus = function (e) {
                                return this._sink.has(e) ? this._sink.getStatus(e) : this._base.getStatus(e);
                            }),
                            (t.getType = function (e) {
                                for (var t = 0; t < this.__sources.length; t++) {
                                    var r = this.__sources[t].get(e);
                                    if (r) return n.getType(r);
                                    if (null === r) return null;
                                }
                            }),
                            (t.getValue = function (e, t) {
                                for (var r = 0; r < this.__sources.length; r++) {
                                    var i = this.__sources[r].get(e);
                                    if (i) {
                                        var o = n.getValue(i, t);
                                        if (void 0 !== o) return o;
                                    } else if (null === i) return null;
                                }
                            }),
                            (t.setValue = function (e, t, r) {
                                var i = this._getSinkRecord(e);
                                n.setValue(i, t, r);
                            }),
                            (t.getLinkedRecordID = function (e, t) {
                                for (var r = 0; r < this.__sources.length; r++) {
                                    var i = this.__sources[r].get(e);
                                    if (i) {
                                        var o = n.getLinkedRecordID(i, t);
                                        if (void 0 !== o) return o;
                                    } else if (null === i) return null;
                                }
                            }),
                            (t.setLinkedRecordID = function (e, t, r) {
                                var i = this._getSinkRecord(e);
                                n.setLinkedRecordID(i, t, r);
                            }),
                            (t.getLinkedRecordIDs = function (e, t) {
                                for (var r = 0; r < this.__sources.length; r++) {
                                    var i = this.__sources[r].get(e);
                                    if (i) {
                                        var o = n.getLinkedRecordIDs(i, t);
                                        if (void 0 !== o) return o;
                                    } else if (null === i) return null;
                                }
                            }),
                            (t.setLinkedRecordIDs = function (e, t, r) {
                                var i = this._getSinkRecord(e);
                                n.setLinkedRecordIDs(i, t, r);
                            }),
                            e
                        );
                    })();
                e.exports = a;
            },
            233343: (e, t, r) => {
                var n = r(705180),
                    i = r(193740),
                    o = i.EXISTENT,
                    a = i.NONEXISTENT,
                    s = r(108475),
                    u = s.ROOT_ID,
                    c = s.ROOT_TYPE,
                    l = r(368281).readUpdatableFragment,
                    f = r(289477).readUpdatableQuery,
                    d = r(277874),
                    _ = r(647677),
                    h = (function () {
                        function e(e, t, r, n) {
                            (this.__mutator = e), (this._handlerProvider = r || null), (this._proxies = {}), (this._getDataID = t), (this._invalidatedStore = !1), (this._idsMarkedForInvalidation = new Set()), (this._missingFieldHandlers = n);
                        }
                        var t = e.prototype;
                        return (
                            (t.publishSource = function (e, t) {
                                var r = this;
                                e.getRecordIDs().forEach(function (t) {
                                    var i = e.getStatus(t);
                                    if (i === o) {
                                        var s = e.get(t);
                                        s && (r.__mutator.getStatus(t) !== o && r.create(t, n.getType(s)), r.__mutator.copyFieldsFromRecord(s, t));
                                    } else i === a && r.delete(t);
                                }),
                                    t &&
                                        t.length &&
                                        t.forEach(function (e) {
                                            var t = r._handlerProvider && r._handlerProvider(e.handle);
                                            t || _(!1), t.update(r, e);
                                        });
                            }),
                            (t.create = function (e, t) {
                                this.__mutator.create(e, t), delete this._proxies[e];
                                var r = this.get(e);
                                return r || _(!1), r;
                            }),
                            (t.delete = function (e) {
                                e === u && _(!1), delete this._proxies[e], this.__mutator.delete(e);
                            }),
                            (t.get = function (e) {
                                if (!this._proxies.hasOwnProperty(e)) {
                                    var t = this.__mutator.getStatus(e);
                                    this._proxies[e] = t === o ? new d(this, this.__mutator, e) : t === a ? null : void 0;
                                }
                                return this._proxies[e];
                            }),
                            (t.getRoot = function () {
                                var e = this.get(u);
                                return e || (e = this.create(u, c)), (e && e.getType() === c) || _(!1), e;
                            }),
                            (t.invalidateStore = function () {
                                this._invalidatedStore = !0;
                            }),
                            (t.isStoreMarkedForInvalidation = function () {
                                return this._invalidatedStore;
                            }),
                            (t.markIDForInvalidation = function (e) {
                                this._idsMarkedForInvalidation.add(e);
                            }),
                            (t.getIDsMarkedForInvalidation = function () {
                                return this._idsMarkedForInvalidation;
                            }),
                            (t.readUpdatableQuery = function (e, t) {
                                return f(e, t, this, this._missingFieldHandlers);
                            }),
                            (t.readUpdatableFragment = function (e, t) {
                                return l(e, t, this, this._missingFieldHandlers);
                            }),
                            e
                        );
                    })();
                e.exports = h;
            },
            176897: (e, t, r) => {
                var n = r(108475),
                    i = n.ROOT_TYPE,
                    o = n.getStorageKey,
                    a = r(368281).readUpdatableFragment,
                    s = r(289477).readUpdatableQuery,
                    u = r(647677),
                    c = (function () {
                        function e(e, t, r, n) {
                            (this.__mutator = e), (this.__recordSource = t), (this._readSelector = r), (this._missingFieldHandlers = n);
                        }
                        var t = e.prototype;
                        return (
                            (t.create = function (e, t) {
                                return this.__recordSource.create(e, t);
                            }),
                            (t.delete = function (e) {
                                this.__recordSource.delete(e);
                            }),
                            (t.get = function (e) {
                                return this.__recordSource.get(e);
                            }),
                            (t.getRoot = function () {
                                return this.__recordSource.getRoot();
                            }),
                            (t.getOperationRoot = function () {
                                var e = this.__recordSource.get(this._readSelector.dataID);
                                return e || (e = this.__recordSource.create(this._readSelector.dataID, i)), e;
                            }),
                            (t._getRootField = function (e, t, r) {
                                var n = e.node.selections.find(function (e) {
                                    return ("LinkedField" === e.kind && e.name === t) || ("RequiredField" === e.kind && e.field.name === t);
                                });
                                return n && "RequiredField" === n.kind && (n = n.field), (n && "LinkedField" === n.kind) || u(!1), n.plural !== r && u(!1), n;
                            }),
                            (t.getRootField = function (e) {
                                var t = this._getRootField(this._readSelector, e, !1),
                                    r = o(t, this._readSelector.variables);
                                return this.getOperationRoot().getLinkedRecord(r);
                            }),
                            (t.getPluralRootField = function (e) {
                                var t = this._getRootField(this._readSelector, e, !0),
                                    r = o(t, this._readSelector.variables);
                                return this.getOperationRoot().getLinkedRecords(r);
                            }),
                            (t.invalidateStore = function () {
                                this.__recordSource.invalidateStore();
                            }),
                            (t.readUpdatableQuery = function (e, t) {
                                return s(e, t, this, this._missingFieldHandlers);
                            }),
                            (t.readUpdatableFragment = function (e, t) {
                                return a(e, t, this, this._missingFieldHandlers);
                            }),
                            e
                        );
                    })();
                e.exports = c;
            },
            602522: (e, t, r) => {
                var n = r(585488).getRequest,
                    i = r(539369),
                    o = r(767408).createOperationDescriptor,
                    a = r(896849),
                    s = r(647677);
                e.exports = function (e, t) {
                    i(e) || s(!1);
                    var r = n(t.mutation);
                    if ("mutation" !== r.params.operationKind) throw new Error("commitMutation: Expected mutation operation");
                    var u = t.optimisticUpdater,
                        c = t.configs,
                        l = t.optimisticResponse,
                        f = t.variables,
                        d = o(r, f);
                    return c && (u = a.convert(c, r, u).optimisticUpdater), e.applyMutation({ operation: d, response: l, updater: u });
                };
            },
            53647: (e) => {
                e.exports = function (e, t) {
                    e.commitUpdate(t);
                };
            },
            921622: (e, t, r) => {
                var n = (0, r(171600).default)(r(373408)),
                    i = r(585488).getRequest,
                    o = r(286190).generateUniqueClientID,
                    a = r(539369),
                    s = r(767408).createOperationDescriptor,
                    u = r(896849),
                    c = (r(724925), r(647677));
                r(826590);
                e.exports = function (e, t) {
                    a(e) || c(!1);
                    var r = i(t.mutation);
                    if ("mutation" !== r.params.operationKind) throw new Error("commitMutation: Expected mutation operation");
                    if ("Request" !== r.kind) throw new Error("commitMutation: Expected mutation to be of type request");
                    var l = t.optimisticResponse,
                        f = t.optimisticUpdater,
                        d = t.updater,
                        _ = t.configs,
                        h = t.cacheConfig,
                        p = t.onError,
                        v = t.onUnsubscribe,
                        g = t.variables,
                        E = t.uploadables,
                        m = s(r, g, h, o());
                    if (("function" == typeof l && (l = l()), _)) {
                        var b = u.convert(_, r, f, d);
                        (f = b.optimisticUpdater), (d = b.updater);
                    }
                    var R = [];
                    return {
                        dispose: e.executeMutation({ operation: m, optimisticResponse: l, optimisticUpdater: f, updater: d, uploadables: E }).subscribe({
                            next: function (e) {
                                var r;
                                Array.isArray(e)
                                    ? e.forEach(function (e) {
                                          e.errors && R.push.apply(R, (0, n.default)(e.errors));
                                      })
                                    : e.errors && R.push.apply(R, (0, n.default)(e.errors)),
                                    null === (r = t.onNext) || void 0 === r || r.call(t);
                            },
                            complete: function () {
                                var r = t.onCompleted;
                                r && r(e.lookup(m.fragment).data, 0 !== R.length ? R : null);
                            },
                            error: p,
                            unsubscribe: v,
                        }).unsubscribe,
                    };
                };
            },
            368306: (e, t, r) => {
                var n = (0, r(171600).default)(r(638636)),
                    i = r(108475).getArgumentValues,
                    o = r(677783),
                    a = o.ACTOR_CHANGE,
                    s = o.ALIASED_FRAGMENT_SPREAD,
                    u = o.ALIASED_INLINE_FRAGMENT_SPREAD,
                    c = o.CATCH_FIELD,
                    l = o.CLIENT_EDGE_TO_CLIENT_OBJECT,
                    f = o.CLIENT_EDGE_TO_SERVER_OBJECT,
                    d = o.CLIENT_EXTENSION,
                    _ = o.CONDITION,
                    h = o.DEFER,
                    p = o.FRAGMENT_SPREAD,
                    v = o.INLINE_DATA_FRAGMENT_SPREAD,
                    g = o.INLINE_FRAGMENT,
                    E = o.LINKED_FIELD,
                    m = o.MODULE_IMPORT,
                    b = o.RELAY_LIVE_RESOLVER,
                    R = o.RELAY_RESOLVER,
                    y = o.REQUIRED_FIELD,
                    I = o.SCALAR_FIELD,
                    D = o.STREAM,
                    k = ["id", "__id", "__typename", "js"];
                function T(e, t, r, o, x, F) {
                    var O,
                        w,
                        C = (0, n.default)(o);
                    try {
                        var P = function () {
                            var o = w.value;
                            switch (o.kind) {
                                case E:
                                    o.plural ? Object.defineProperty(e, null !== (U = o.alias) && void 0 !== U ? U : o.name, { get: S(o, r, t, x, F), set: A(o, r, t, x) }) : Object.defineProperty(e, null !== (M = o.alias) && void 0 !== M ? M : o.name, { get: N(o, r, t, x, F), set: L(o, r, t, x) });
                                    break;
                                case I:
                                    var C = null !== (O = o.alias) && void 0 !== O ? O : o.name;
                                    Object.defineProperty(e, C, {
                                        get: function () {
                                            var e,
                                                a = i(null !== (e = o.args) && void 0 !== e ? e : [], r),
                                                s = t.getValue(o.name, a);
                                            return (
                                                null == s &&
                                                    (s = (function (e, t, r, i, o) {
                                                        var a,
                                                            s = (0, n.default)(o);
                                                        try {
                                                            for (s.s(); !(a = s.n()).done; ) {
                                                                var u = a.value;
                                                                if ("scalar" === u.kind) {
                                                                    var c = u.handle(e, r, t, i);
                                                                    if (void 0 !== c) return c;
                                                                }
                                                            }
                                                        } catch (e) {
                                                            s.e(e);
                                                        } finally {
                                                            s.f();
                                                        }
                                                    })(o, a, t, x, F)),
                                                s
                                            );
                                        },
                                        set: k.includes(o.name)
                                            ? void 0
                                            : function (e) {
                                                  var n,
                                                      a = i(null !== (n = o.args) && void 0 !== n ? n : [], r);
                                                  t.setValue__UNSAFE(e, o.name, a);
                                              },
                                    });
                                    break;
                                case g:
                                    t.getType() === o.type && T(e, t, r, o.selections, x, F);
                                    break;
                                case d:
                                    T(e, t, r, o.selections, x, F);
                                    break;
                                case p:
                                    break;
                                case _:
                                case a:
                                case s:
                                case v:
                                case u:
                                case l:
                                case f:
                                case h:
                                case m:
                                case b:
                                case y:
                                case c:
                                case D:
                                case R:
                                    throw new Error("Encountered an unexpected ReaderSelection variant in RelayRecordSourceProxy. This indicates a bug in Relay.");
                                default:
                                    throw (o.kind, new Error("Encountered an unexpected ReaderSelection variant in RelayRecordSourceProxy. This indicates a bug in Relay."));
                            }
                        };
                        for (C.s(); !(w = C.n()).done; ) {
                            var U, M;
                            P();
                        }
                    } catch (e) {
                        C.e(e);
                    } finally {
                        C.f();
                    }
                }
                function A(e, t, r, n) {
                    return function (o) {
                        var a,
                            s = i(null !== (a = e.args) && void 0 !== a ? a : [], t);
                        if (null == o) throw new Error("Do not assign null to plural linked fields; assign an empty array instead.");
                        var u = o.map(function (e) {
                            if (null == e) throw new Error("When assigning an array of items, none of the items should be null or undefined.");
                            var t = e.__id;
                            if (null == t) throw new Error("The __id field must be present on each item passed to the setter. This indicates a bug in Relay.");
                            var r = n.get(t);
                            if (null == r) throw new Error("Did not find item with data id ".concat(t, " in the store."));
                            return r;
                        });
                        r.setLinkedRecords(u, e.name, s);
                    };
                }
                function L(e, t, r, n) {
                    return function (o) {
                        var a,
                            s = i(null !== (a = e.args) && void 0 !== a ? a : [], t);
                        if (null == o) r.setValue(o, e.name, s);
                        else {
                            var u = o.__id;
                            if (null == u) throw new Error("The __id field must be present on the argument. This indicates a bug in Relay.");
                            var c = n.get(u);
                            if (null == c) throw new Error("Did not find item with data id ".concat(u, " in the store."));
                            r.setLinkedRecord(c, e.name, s);
                        }
                    };
                }
                function S(e, t, r, o, a) {
                    return function () {
                        var s,
                            u = i(null !== (s = e.args) && void 0 !== s ? s : [], t),
                            c = r.getLinkedRecords(e.name, u);
                        return (
                            void 0 === c &&
                                (c = (function (e, t, r, i, o) {
                                    var a,
                                        s = (0, n.default)(o);
                                    try {
                                        for (s.s(); !(a = s.n()).done; ) {
                                            var u = a.value;
                                            if ("pluralLinked" === u.kind) {
                                                var c = u.handle(e, r, t, i);
                                                if (null != c)
                                                    return c.map(function (e) {
                                                        if (null != e) return i.get(e);
                                                    });
                                            }
                                        }
                                    } catch (e) {
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                })(e, u, r, o, a)),
                            null != c
                                ? c.map(function (r) {
                                      if (null != r) {
                                          var n = {};
                                          return T(n, r, t, e.selections, o, a), n;
                                      }
                                      return r;
                                  })
                                : c
                        );
                    };
                }
                function N(e, t, r, o, a) {
                    return function () {
                        var s,
                            u = i(null !== (s = e.args) && void 0 !== s ? s : [], t),
                            c = r.getLinkedRecord(e.name, u);
                        if (
                            (void 0 === c &&
                                (c = (function (e, t, r, i, o) {
                                    var a,
                                        s = (0, n.default)(o);
                                    try {
                                        for (s.s(); !(a = s.n()).done; ) {
                                            var u = a.value;
                                            if ("linked" === u.kind) {
                                                var c = u.handle(e, r, t, i);
                                                if (null != c) return i.get(c);
                                            }
                                        }
                                    } catch (e) {
                                        s.e(e);
                                    } finally {
                                        s.f();
                                    }
                                })(e, u, r, o, a)),
                            null != c)
                        ) {
                            var l = {};
                            return T(l, c, t, e.selections, o, a), l;
                        }
                        return c;
                    };
                }
                e.exports = {
                    createUpdatableProxy: function (e, t, r, n, i) {
                        var o = {};
                        return T(o, e, t, r, n, i), o;
                    },
                };
            },
            368281: (e, t, r) => {
                var n = r(585488).getFragment,
                    i = r(464711).getVariablesFromFragment,
                    o = r(108475).ID_KEY,
                    a = r(368306).createUpdatableProxy,
                    s = r(647677);
                e.exports = {
                    readUpdatableFragment: function (e, t, r, u) {
                        var c = n(e),
                            l = i(c, t),
                            f = t[o],
                            d = r.get(f);
                        return null == d && s(!1), { updatableData: a(d, l, c.selections, r, u) };
                    },
                };
            },
            289477: (e, t, r) => {
                var n = r(585488).getUpdatableQuery,
                    i = r(368306).createUpdatableProxy;
                e.exports = {
                    readUpdatableQuery: function (e, t, r, o) {
                        var a = n(e);
                        return { updatableData: i(r.getRoot(), t, a.fragment.selections, r, o) };
                    },
                };
            },
            724925: (e, t, r) => {
                (0, r(171600).default)(r(900814));
                var n = r(677783);
                n.ACTOR_CHANGE, n.CLIENT_COMPONENT, n.CLIENT_EDGE_TO_CLIENT_OBJECT, n.CLIENT_EXTENSION, n.CONDITION, n.DEFER, n.FRAGMENT_SPREAD, n.INLINE_FRAGMENT, n.LINKED_FIELD, n.LINKED_HANDLE, n.MODULE_IMPORT, n.RELAY_LIVE_RESOLVER, n.RELAY_RESOLVER, n.SCALAR_FIELD, n.SCALAR_HANDLE, n.STREAM, n.TYPE_DISCRIMINATOR, r(826590), Object.prototype.hasOwnProperty;
                e.exports = function () {};
            },
            70009: (e, t, r) => {
                var n = r(408122);
                e.exports = {
                    convertFetch: function (e) {
                        return function (t, r, i, o, a) {
                            var s = e(t, r, i, o, a);
                            return s instanceof Error
                                ? n.create(function (e) {
                                      return e.error(s);
                                  })
                                : n.from(s);
                        };
                    },
                };
            },
            895521: (e, t, r) => {
                var n = r(948598),
                    i = r(70009).convertFetch,
                    o = r(647677);
                e.exports = {
                    create: function (e, t) {
                        var r = i(e);
                        return {
                            execute: function (e, i, a, s, u) {
                                var c = n(i, e.providedVariables);
                                if ("subscription" === e.operationKind) return t || o(!1), s && o(!1), t(e, c, a);
                                var l = a.poll;
                                return null != l ? (s && o(!1), r(e, c, { force: !0 }).poll(l)) : r(e, c, a, s, u);
                            },
                        };
                    },
                };
            },
            408122: (e, t, r) => {
                var n = r(785621),
                    i = function (e, t) {},
                    o = (function () {
                        function e(e) {
                            this._source = e;
                        }
                        (e.create = function (t) {
                            return new e(t);
                        }),
                            (e.onUnhandledError = function (e) {
                                i = e;
                            }),
                            (e.from = function (e) {
                                return (function (e) {
                                    return "object" == typeof e && null !== e && "function" == typeof e.subscribe;
                                })(e)
                                    ? a(e)
                                    : n(e)
                                      ? s(e)
                                      : u(e);
                            });
                        var t = e.prototype;
                        return (
                            (t.catch = function (t) {
                                var r = this;
                                return e.create(function (e) {
                                    var n;
                                    return (
                                        r.subscribe({
                                            start: function (e) {
                                                n = e;
                                            },
                                            next: e.next,
                                            complete: e.complete,
                                            error: function (r) {
                                                try {
                                                    t(r).subscribe({
                                                        start: function (e) {
                                                            n = e;
                                                        },
                                                        next: e.next,
                                                        complete: e.complete,
                                                        error: e.error,
                                                    });
                                                } catch (t) {
                                                    e.error(t, !0);
                                                }
                                            },
                                        }),
                                        function () {
                                            return n.unsubscribe();
                                        }
                                    );
                                });
                            }),
                            (t.concat = function (t) {
                                var r = this;
                                return e.create(function (e) {
                                    var n;
                                    return (
                                        r.subscribe({
                                            start: function (e) {
                                                n = e;
                                            },
                                            next: e.next,
                                            error: e.error,
                                            complete: function () {
                                                n = t.subscribe(e);
                                            },
                                        }),
                                        function () {
                                            n && n.unsubscribe();
                                        }
                                    );
                                });
                            }),
                            (t.do = function (t) {
                                var r = this;
                                return e.create(function (e) {
                                    var n = function (r) {
                                        return function () {
                                            try {
                                                t[r] && t[r].apply(t, arguments);
                                            } catch (e) {
                                                i(e, !0);
                                            }
                                            e[r] && e[r].apply(e, arguments);
                                        };
                                    };
                                    return r.subscribe({ start: n("start"), next: n("next"), error: n("error"), complete: n("complete"), unsubscribe: n("unsubscribe") });
                                });
                            }),
                            (t.finally = function (t) {
                                var r = this;
                                return e.create(function (e) {
                                    var n = r.subscribe(e);
                                    return function () {
                                        n.unsubscribe(), t();
                                    };
                                });
                            }),
                            (t.ifEmpty = function (t) {
                                var r = this;
                                return e.create(function (e) {
                                    var n,
                                        i = !1;
                                    return (
                                        (n = r.subscribe({
                                            next: function (t) {
                                                (i = !0), e.next(t);
                                            },
                                            error: e.error,
                                            complete: function () {
                                                i ? e.complete() : (n = t.subscribe(e));
                                            },
                                        })),
                                        function () {
                                            n && n.unsubscribe();
                                        }
                                    );
                                });
                            }),
                            (t.subscribe = function (e) {
                                return (function (e, t) {
                                    var r,
                                        n = !1,
                                        o = function (e) {
                                            return Object.defineProperty(e, "closed", {
                                                get: function () {
                                                    return n;
                                                },
                                            });
                                        };
                                    function a() {
                                        if (r) {
                                            if (r.unsubscribe) r.unsubscribe();
                                            else
                                                try {
                                                    r();
                                                } catch (e) {
                                                    i(e, !0);
                                                }
                                            r = void 0;
                                        }
                                    }
                                    var s = o({
                                        unsubscribe: function () {
                                            if (!n) {
                                                n = !0;
                                                try {
                                                    t.unsubscribe && t.unsubscribe(s);
                                                } catch (e) {
                                                    i(e, !0);
                                                } finally {
                                                    a();
                                                }
                                            }
                                        },
                                    });
                                    try {
                                        t.start && t.start(s);
                                    } catch (e) {
                                        i(e, !0);
                                    }
                                    if (n) return s;
                                    var u = o({
                                        next: function (e) {
                                            if (!n && t.next)
                                                try {
                                                    t.next(e);
                                                } catch (e) {
                                                    i(e, !0);
                                                }
                                        },
                                        error: function (e, r) {
                                            if (n || !t.error) (n = !0), i(e, r || !1), a();
                                            else {
                                                n = !0;
                                                try {
                                                    t.error(e);
                                                } catch (e) {
                                                    i(e, !0);
                                                } finally {
                                                    a();
                                                }
                                            }
                                        },
                                        complete: function () {
                                            if (!n) {
                                                n = !0;
                                                try {
                                                    t.complete && t.complete();
                                                } catch (e) {
                                                    i(e, !0);
                                                } finally {
                                                    a();
                                                }
                                            }
                                        },
                                    });
                                    try {
                                        r = e(u);
                                    } catch (e) {
                                        u.error(e, !0);
                                    }
                                    0;
                                    n && a();
                                    return s;
                                })(this._source, e);
                            }),
                            (t.map = function (t) {
                                var r = this;
                                return e.create(function (e) {
                                    var n = r.subscribe({
                                        complete: e.complete,
                                        error: e.error,
                                        next: function (r) {
                                            try {
                                                var n = t(r);
                                                e.next(n);
                                            } catch (t) {
                                                e.error(t, !0);
                                            }
                                        },
                                    });
                                    return function () {
                                        n.unsubscribe();
                                    };
                                });
                            }),
                            (t.mergeMap = function (t) {
                                var r = this;
                                return e.create(function (n) {
                                    var i = [];
                                    function o(e) {
                                        (this._sub = e), i.push(e);
                                    }
                                    function a() {
                                        i.splice(i.indexOf(this._sub), 1), 0 === i.length && n.complete();
                                    }
                                    return (
                                        r.subscribe({
                                            start: o,
                                            next: function (r) {
                                                try {
                                                    n.closed || e.from(t(r)).subscribe({ start: o, next: n.next, error: n.error, complete: a });
                                                } catch (e) {
                                                    n.error(e, !0);
                                                }
                                            },
                                            error: n.error,
                                            complete: a,
                                        }),
                                        function () {
                                            i.forEach(function (e) {
                                                return e.unsubscribe();
                                            }),
                                                (i.length = 0);
                                        }
                                    );
                                });
                            }),
                            (t.poll = function (t) {
                                var r = this;
                                return e.create(function (e) {
                                    var n, i;
                                    return (
                                        (function o() {
                                            n = r.subscribe({
                                                next: e.next,
                                                error: e.error,
                                                complete: function () {
                                                    i = setTimeout(o, t);
                                                },
                                            });
                                        })(),
                                        function () {
                                            clearTimeout(i), n.unsubscribe();
                                        }
                                    );
                                });
                            }),
                            (t.toPromise = function () {
                                var e = this;
                                return new Promise(function (t, r) {
                                    var n = !1;
                                    e.subscribe({
                                        next: function (e) {
                                            n || ((n = !0), t(e));
                                        },
                                        error: r,
                                        complete: t,
                                    });
                                });
                            }),
                            e
                        );
                    })();
                function a(e) {
                    return e instanceof o
                        ? e
                        : o.create(function (t) {
                              return e.subscribe(t);
                          });
                }
                function s(e) {
                    return o.create(function (t) {
                        e.then(function (e) {
                            t.next(e), t.complete();
                        }, t.error);
                    });
                }
                function u(e) {
                    return o.create(function (t) {
                        t.next(e), t.complete();
                    });
                }
                e.exports = o;
            },
            909259: (e, t, r) => {
                var n = (0, r(171600).default)(r(900814)),
                    i = r(795178),
                    o = r(647677),
                    a = (function () {
                        function e(e) {
                            var t = e.size,
                                r = e.ttl;
                            t > 0 || o(!1), r > 0 || o(!1), (this._responses = new Map()), (this._size = t), (this._ttl = r);
                        }
                        var t = e.prototype;
                        return (
                            (t.clear = function () {
                                this._responses.clear();
                            }),
                            (t.get = function (e, t) {
                                var r = this,
                                    i = s(e, t);
                                this._responses.forEach(function (e, t) {
                                    var n, i;
                                    (n = e.fetchTime), (i = r._ttl), n + i >= Date.now() || r._responses.delete(t);
                                });
                                var o = this._responses.get(i);
                                return null == o
                                    ? null
                                    : Array.isArray(o.payload)
                                      ? o.payload.map(function (e) {
                                            return (0, n.default)((0, n.default)({}, e), {}, { extensions: (0, n.default)((0, n.default)({}, e.extensions), {}, { cacheTimestamp: o.fetchTime }) });
                                        })
                                      : (0, n.default)((0, n.default)({}, o.payload), {}, { extensions: (0, n.default)((0, n.default)({}, o.payload.extensions), {}, { cacheTimestamp: o.fetchTime }) });
                            }),
                            (t.set = function (e, t, r) {
                                var n = Date.now(),
                                    i = s(e, t);
                                if ((this._responses.delete(i), this._responses.set(i, { fetchTime: n, payload: r }), this._responses.size > this._size)) {
                                    var o = this._responses.keys().next();
                                    o.done || this._responses.delete(o.value);
                                }
                            }),
                            e
                        );
                    })();
                function s(e, t) {
                    return JSON.stringify(i({ queryID: e, variables: t }));
                }
                e.exports = a;
            },
            510311: (e, t, r) => {
                var n = r(91650);
                e.exports = function (e, t) {
                    return {
                        execute: function (r, i, o, a) {
                            var s = n(),
                                u = {
                                    start: function (t) {
                                        e.__log({ name: "network.start", networkRequestId: s, params: r, variables: i, cacheConfig: o });
                                    },
                                    next: function (t) {
                                        e.__log({ name: "network.next", networkRequestId: s, response: t });
                                    },
                                    error: function (t) {
                                        e.__log({ name: "network.error", networkRequestId: s, error: t });
                                    },
                                    complete: function () {
                                        e.__log({ name: "network.complete", networkRequestId: s });
                                    },
                                    unsubscribe: function () {
                                        e.__log({ name: "network.unsubscribe", networkRequestId: s });
                                    },
                                };
                            return t
                                .execute(r, i, o, a, function (t) {
                                    e.__log({ name: "network.info", networkRequestId: s, info: t });
                                })
                                .do(u);
                        },
                    };
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-e395fecc.1b97550a.js.map
