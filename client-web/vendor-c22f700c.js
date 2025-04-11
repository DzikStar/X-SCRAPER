window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-c22f700c"],
        {
            585488: (e, t, r) => {
                var n = r(677783),
                    i = r(647677);
                r(826590);
                function a(e) {
                    var t = e;
                    return "function" == typeof t ? (t = t()) : t.default && (t = t.default), t;
                }
                function s(e) {
                    var t = a(e);
                    return "object" == typeof t && null !== t && t.kind === n.FRAGMENT;
                }
                function o(e) {
                    var t = a(e);
                    return "object" == typeof t && null !== t && t.kind === n.REQUEST;
                }
                function l(e) {
                    var t = a(e);
                    return "object" == typeof t && null !== t && t.kind === n.UPDATABLE_QUERY;
                }
                function u(e) {
                    var t = a(e);
                    return "object" == typeof t && null !== t && t.kind === n.INLINE_DATA_FRAGMENT;
                }
                function c(e) {
                    var t = a(e);
                    return s(t) || i(!1), t;
                }
                e.exports = {
                    getFragment: c,
                    getNode: a,
                    getPaginationFragment: function (e) {
                        var t,
                            r = c(e),
                            n = null === (t = r.metadata) || void 0 === t ? void 0 : t.refetch,
                            i = null == n ? void 0 : n.connection;
                        return null === n || "object" != typeof n || null === i || "object" != typeof i ? null : r;
                    },
                    getRefetchableFragment: function (e) {
                        var t,
                            r = c(e),
                            n = null === (t = r.metadata) || void 0 === t ? void 0 : t.refetch;
                        return null === n || "object" != typeof n ? null : r;
                    },
                    getRequest: function (e) {
                        var t = a(e);
                        return o(t) || i(!1), t;
                    },
                    getUpdatableQuery: function (e) {
                        var t = a(e);
                        return l(t) || i(!1), t;
                    },
                    getInlineDataFragment: function (e) {
                        var t = a(e);
                        return u(t) || i(!1), t;
                    },
                    graphql: function (e) {
                        i(!1);
                    },
                    isFragment: s,
                    isRequest: o,
                    isUpdatableQuery: l,
                    isInlineDataFragment: u,
                };
            },
            580189: (e) => {
                var t = new ((function () {
                    function e() {
                        (this._preloadableQueries = new Map()), (this._callbacks = new Map());
                    }
                    var t = e.prototype;
                    return (
                        (t.set = function (e, t) {
                            this._preloadableQueries.set(e, t);
                            var r = this._callbacks.get(e);
                            null != r &&
                                r.forEach(function (e) {
                                    try {
                                        e(t);
                                    } catch (e) {
                                        setTimeout(function () {
                                            throw e;
                                        }, 0);
                                    }
                                });
                        }),
                        (t.get = function (e) {
                            return this._preloadableQueries.get(e);
                        }),
                        (t.onLoad = function (e, t) {
                            var r,
                                n = null !== (r = this._callbacks.get(e)) && void 0 !== r ? r : new Set();
                            n.add(t);
                            return (
                                this._callbacks.set(e, n),
                                {
                                    dispose: function () {
                                        n.delete(t);
                                    },
                                }
                            );
                        }),
                        (t.clear = function () {
                            this._preloadableQueries.clear();
                        }),
                        e
                    );
                })())();
                e.exports = t;
            },
            10622: (e, t, r) => {
                var n = (0, r(171600).default)(r(900814)),
                    i = r(408122),
                    a = r(767408).createOperationDescriptor,
                    s = r(927421),
                    o = r(692519),
                    l = r(585488).getRequest,
                    u = r(647677);
                function c(e, t) {
                    return o.fetchQuery(e, t).map(function () {
                        return e.lookup(t.fragment);
                    });
                }
                e.exports = function (e, t, r, o) {
                    var _,
                        h = l(t);
                    "query" !== h.params.operationKind && u(!1);
                    var d = (0, n.default)({ force: !0 }, null == o ? void 0 : o.networkCacheConfig),
                        v = a(h, r, d),
                        f = null !== (_ = null == o ? void 0 : o.fetchPolicy) && void 0 !== _ ? _ : "network-only";
                    function g(t) {
                        var r, n;
                        return s(e, t.missingRequiredFields, t.relayResolverErrors, t.errorResponseFields, null !== (r = null === (n = h.fragment.metadata) || void 0 === n ? void 0 : n.throwOnFieldError) && void 0 !== r && r), t.data;
                    }
                    switch (f) {
                        case "network-only":
                            return c(e, v).map(g);
                        case "store-or-network":
                            return "available" === e.check(v).status ? i.from(e.lookup(v.fragment)).map(g) : c(e, v).map(g);
                        default:
                            throw new Error("fetchQuery: Invalid fetchPolicy " + f);
                    }
                };
            },
            692519: (e, t, r) => {
                var n = r(408122),
                    i = r(582501),
                    a = r(647677),
                    s = "function" == typeof WeakMap ? new WeakMap() : new Map();
                function o(e, t, r) {
                    return n.create(function (s) {
                        var o = u(e),
                            l = o.get(t);
                        return (
                            l ||
                                r()
                                    .finally(function () {
                                        return o.delete(t);
                                    })
                                    .subscribe({
                                        start: function (e) {
                                            (l = { identifier: t, subject: new i(), subjectForInFlightStatus: new i(), subscription: e, promise: null }), o.set(t, l);
                                        },
                                        next: function (e) {
                                            var r = c(o, t);
                                            r.subject.next(e), r.subjectForInFlightStatus.next(e);
                                        },
                                        error: function (e) {
                                            var r = c(o, t);
                                            r.subject.error(e), r.subjectForInFlightStatus.error(e);
                                        },
                                        complete: function () {
                                            var e = c(o, t);
                                            e.subject.complete(), e.subjectForInFlightStatus.complete();
                                        },
                                        unsubscribe: function (e) {
                                            var r = c(o, t);
                                            r.subject.unsubscribe(), r.subjectForInFlightStatus.unsubscribe();
                                        },
                                    }),
                            null == l && a(!1),
                            (function (e, t) {
                                return n.create(function (r) {
                                    var n = t.subject.subscribe(r);
                                    return function () {
                                        n.unsubscribe();
                                        var r = e.get(t.identifier);
                                        if (r) {
                                            var i = r.subscription;
                                            null != i && 0 === r.subject.getObserverCount() && (i.unsubscribe(), e.delete(t.identifier));
                                        }
                                    };
                                });
                            })(o, l).subscribe(s)
                        );
                    });
                }
                function l(e, t, r) {
                    return n.create(function (t) {
                        var n = r.subjectForInFlightStatus.subscribe({
                            error: t.error,
                            next: function (n) {
                                e.isRequestActive(r.identifier) ? t.next() : t.complete();
                            },
                            complete: t.complete,
                            unsubscribe: t.complete,
                        });
                        return function () {
                            n.unsubscribe();
                        };
                    });
                }
                function u(e) {
                    var t = s.get(e);
                    if (null != t) return t;
                    var r = new Map();
                    return s.set(e, r), r;
                }
                function c(e, t) {
                    var r = e.get(t);
                    return null == r && a(!1), r;
                }
                e.exports = {
                    fetchQuery: function (e, t) {
                        return o(e, t.request.identifier, function () {
                            return e.execute({ operation: t });
                        });
                    },
                    fetchQueryDeduped: o,
                    getPromiseForActiveRequest: function (e, t) {
                        var r = u(e),
                            n = r.get(t.identifier);
                        return n && e.isRequestActive(n.identifier)
                            ? new Promise(function (t, r) {
                                  var i = !1;
                                  l(e, 0, n).subscribe({
                                      complete: t,
                                      error: r,
                                      next: function (e) {
                                          i && t(e);
                                      },
                                  }),
                                      (i = !0);
                              })
                            : null;
                    },
                    getObservableForActiveRequest: function (e, t) {
                        var r = u(e),
                            n = r.get(t.identifier);
                        return n && e.isRequestActive(n.identifier) ? l(e, 0, n) : null;
                    },
                };
            },
            46154: (e, t, r) => {
                var n = r(767408).createOperationDescriptor,
                    i = r(585488).getRequest;
                e.exports = function (e, t, r, a) {
                    var s = i(t);
                    if ("query" !== s.params.operationKind) throw new Error("fetchQuery: Expected query operation");
                    var o = n(s, r, a);
                    return e
                        .execute({ operation: o })
                        .map(function () {
                            return e.lookup(o.fragment).data;
                        })
                        .toPromise();
                };
            },
            286190: (e, t, r) => {
                var n = r(891362),
                    i = r(274469).intern,
                    a = "client:";
                var s = 0;
                e.exports = {
                    generateClientID: function (e, t, r) {
                        var s = (n.STRING_INTERN_LEVEL <= 0 ? e : i(e, n.MAX_DATA_ID_LENGTH)) + ":" + t;
                        return null != r && (s += ":" + r), 0 !== s.indexOf(a) && (s = a + s), s;
                    },
                    generateClientObjectClientID: function (e, t, r) {
                        var n = "".concat(a).concat(e, ":").concat(t);
                        return null != r && (n += ":" + r), n;
                    },
                    generateUniqueClientID: function () {
                        return "".concat(a, "local:").concat(s++);
                    },
                    isClientID: function (e) {
                        return 0 === e.indexOf(a);
                    },
                };
            },
            781530: (e, t, r) => {
                var n = (0, r(171600).default)(r(638636)),
                    i = r(957044),
                    a = r(233343),
                    s = r(471677),
                    o = r(677783),
                    l = r(286190).isClientID,
                    u = r(749110),
                    c = r(533223),
                    _ = r(700378).getLocalVariables,
                    h = r(705180),
                    d = r(193740),
                    v = d.EXISTENT,
                    f = d.UNKNOWN,
                    g = r(108475),
                    b = r(348073),
                    p = b.TYPE_SCHEMA_TYPE,
                    m = b.generateTypeID,
                    k = r(647677),
                    y = o.ACTOR_CHANGE,
                    E = o.CONDITION,
                    I = o.CLIENT_COMPONENT,
                    R = o.CLIENT_EXTENSION,
                    A = o.CLIENT_EDGE_TO_CLIENT_OBJECT,
                    S = o.DEFER,
                    F = o.FRAGMENT_SPREAD,
                    L = o.INLINE_FRAGMENT,
                    M = o.LINKED_FIELD,
                    D = o.LINKED_HANDLE,
                    T = o.MODULE_IMPORT,
                    P = o.RELAY_RESOLVER,
                    C = o.RELAY_LIVE_RESOLVER,
                    w = o.SCALAR_FIELD,
                    x = o.SCALAR_HANDLE,
                    N = o.STREAM,
                    O = o.TYPE_DISCRIMINATOR,
                    j = g.getModuleOperationKey,
                    V = g.getStorageKey,
                    q = g.getArgumentValues;
                var Q = (function () {
                    function e(e, t, r, n, i, a, s, o) {
                        (this._getSourceForActor = e), (this._getTargetForActor = t), (this._getDataID = s), (this._source = e(r)), (this._mutatorRecordSourceProxyCache = new Map());
                        var l = this._getMutatorAndRecordProxyForActor(r),
                            u = l[0],
                            c = l[1];
                        (this._mostRecentlyInvalidatedAt = null), (this._handlers = i), (this._mutator = u), (this._operationLoader = null != a ? a : null), (this._recordSourceProxy = c), (this._recordWasMissing = !1), (this._variables = n), (this._shouldProcessClientComponents = o);
                    }
                    var t = e.prototype;
                    return (
                        (t._getMutatorAndRecordProxyForActor = function (e) {
                            var t = this._mutatorRecordSourceProxyCache.get(e);
                            if (null == t) {
                                var r = this._getTargetForActor(e),
                                    n = new i(this._getSourceForActor(e), r);
                                (t = [n, new a(n, this._getDataID, void 0, this._handlers)]), this._mutatorRecordSourceProxyCache.set(e, t);
                            }
                            return t;
                        }),
                        (t.check = function (e, t) {
                            return this._assignClientAbstractTypes(e), this._traverse(e, t), !0 === this._recordWasMissing ? { status: "missing", mostRecentlyInvalidatedAt: this._mostRecentlyInvalidatedAt } : { status: "available", mostRecentlyInvalidatedAt: this._mostRecentlyInvalidatedAt };
                        }),
                        (t._getVariableValue = function (e) {
                            return this._variables.hasOwnProperty(e) || k(!1), this._variables[e];
                        }),
                        (t._handleMissing = function () {
                            this._recordWasMissing = !0;
                        }),
                        (t._handleMissingScalarField = function (e, t) {
                            if ("id" !== e.name || null != e.alias || !l(t)) {
                                var r,
                                    i = null != e.args ? q(e.args, this._variables) : {},
                                    a = (0, n.default)(this._handlers);
                                try {
                                    for (a.s(); !(r = a.n()).done; ) {
                                        var s = r.value;
                                        if ("scalar" === s.kind) {
                                            var o = s.handle(e, this._recordSourceProxy.get(t), i, this._recordSourceProxy);
                                            if (void 0 !== o) return o;
                                        }
                                    }
                                } catch (e) {
                                    a.e(e);
                                } finally {
                                    a.f();
                                }
                                this._handleMissing();
                            }
                        }),
                        (t._handleMissingLinkField = function (e, t) {
                            var r,
                                i = null != e.args ? q(e.args, this._variables) : {},
                                a = (0, n.default)(this._handlers);
                            try {
                                for (a.s(); !(r = a.n()).done; ) {
                                    var s = r.value;
                                    if ("linked" === s.kind) {
                                        var o = s.handle(e, this._recordSourceProxy.get(t), i, this._recordSourceProxy);
                                        if (void 0 !== o && (null === o || this._mutator.getStatus(o) === v)) return o;
                                    }
                                }
                            } catch (e) {
                                a.e(e);
                            } finally {
                                a.f();
                            }
                            this._handleMissing();
                        }),
                        (t._handleMissingPluralLinkField = function (e, t) {
                            var r,
                                i = this,
                                a = null != e.args ? q(e.args, this._variables) : {},
                                s = (0, n.default)(this._handlers);
                            try {
                                for (s.s(); !(r = s.n()).done; ) {
                                    var o = r.value;
                                    if ("pluralLinked" === o.kind) {
                                        var l = o.handle(e, this._recordSourceProxy.get(t), a, this._recordSourceProxy);
                                        if (null != l) {
                                            if (
                                                l.every(function (e) {
                                                    return null != e && i._mutator.getStatus(e) === v;
                                                })
                                            )
                                                return l;
                                        } else if (null === l) return null;
                                    }
                                }
                            } catch (e) {
                                s.e(e);
                            } finally {
                                s.f();
                            }
                            this._handleMissing();
                        }),
                        (t._traverse = function (e, t) {
                            var r = this._mutator.getStatus(t);
                            if ((r === f && this._handleMissing(), r === v)) {
                                var n = this._source.get(t),
                                    i = h.getInvalidationEpoch(n);
                                null != i && (this._mostRecentlyInvalidatedAt = null != this._mostRecentlyInvalidatedAt ? Math.max(this._mostRecentlyInvalidatedAt, i) : i), this._traverseSelections(e.selections, t);
                            }
                        }),
                        (t._traverseSelections = function (e, t) {
                            var r = this;
                            e.forEach(function (n) {
                                switch (n.kind) {
                                    case w:
                                        r._checkScalar(n, t);
                                        break;
                                    case M:
                                        n.plural ? r._checkPluralLink(n, t) : r._checkLink(n, t);
                                        break;
                                    case y:
                                        r._checkActorChange(n.linkedField, t);
                                        break;
                                    case E:
                                        Boolean(r._getVariableValue(n.condition)) === n.passingValue && r._traverseSelections(n.selections, t);
                                        break;
                                    case L:
                                        var i = n.abstractKey;
                                        if (null == i) {
                                            r._mutator.getType(t) === n.type && r._traverseSelections(n.selections, t);
                                        } else {
                                            var a = r._mutator.getType(t);
                                            null == a && k(!1);
                                            var s = m(a),
                                                o = r._mutator.getValue(s, i);
                                            !0 === o ? r._traverseSelections(n.selections, t) : null == o && r._handleMissing();
                                        }
                                        break;
                                    case D:
                                        var l = u(n, e, r._variables);
                                        l.plural ? r._checkPluralLink(l, t) : r._checkLink(l, t);
                                        break;
                                    case x:
                                        var h = c(n, e, r._variables);
                                        r._checkScalar(h, t);
                                        break;
                                    case T:
                                        r._checkModuleImport(n, t);
                                        break;
                                    case S:
                                    case N:
                                        r._traverseSelections(n.selections, t);
                                        break;
                                    case F:
                                        var d = r._variables;
                                        (r._variables = _(r._variables, n.fragment.argumentDefinitions, n.args)), r._traverseSelections(n.fragment.selections, t), (r._variables = d);
                                        break;
                                    case R:
                                        var v = r._recordWasMissing;
                                        r._traverseSelections(n.selections, t), (r._recordWasMissing = v);
                                        break;
                                    case O:
                                        var f = n.abstractKey,
                                            g = r._mutator.getType(t);
                                        null == g && k(!1);
                                        var b = m(g);
                                        null == r._mutator.getValue(b, f) && r._handleMissing();
                                        break;
                                    case I:
                                        if (!1 === r._shouldProcessClientComponents) break;
                                        r._traverseSelections(n.fragment.selections, t);
                                        break;
                                    case P:
                                    case C:
                                        r._checkResolver(n, t);
                                        break;
                                    case A:
                                        r._checkResolver(n.backingField, t);
                                        break;
                                    default:
                                        k(!1);
                                }
                            });
                        }),
                        (t._checkResolver = function (e, t) {
                            e.fragment && this._traverseSelections([e.fragment], t);
                        }),
                        (t._checkModuleImport = function (e, t) {
                            var r = this._operationLoader;
                            null === r && k(!1);
                            var n = j(e.documentName),
                                i = this._mutator.getValue(t, n);
                            if (null != i) {
                                var a = r.get(i);
                                if (null != a) {
                                    var o = s(a),
                                        l = this._variables;
                                    (this._variables = _(this._variables, o.argumentDefinitions, e.args)), this._traverse(o, t), (this._variables = l);
                                } else this._handleMissing();
                            } else void 0 === i && this._handleMissing();
                        }),
                        (t._checkScalar = function (e, t) {
                            var r = V(e, this._variables),
                                n = this._mutator.getValue(t, r);
                            void 0 === n && void 0 !== (n = this._handleMissingScalarField(e, t)) && this._mutator.setValue(t, r, n);
                        }),
                        (t._checkLink = function (e, t) {
                            var r = V(e, this._variables),
                                n = this._mutator.getLinkedRecordID(t, r);
                            void 0 === n && (null != (n = this._handleMissingLinkField(e, t)) ? this._mutator.setLinkedRecordID(t, r, n) : null === n && this._mutator.setValue(t, r, null)), null != n && this._traverse(e, n);
                        }),
                        (t._checkPluralLink = function (e, t) {
                            var r = this,
                                n = V(e, this._variables),
                                i = this._mutator.getLinkedRecordIDs(t, n);
                            void 0 === i && (null != (i = this._handleMissingPluralLinkField(e, t)) ? this._mutator.setLinkedRecordIDs(t, n, i) : null === i && this._mutator.setValue(t, n, null)),
                                i &&
                                    i.forEach(function (t) {
                                        null != t && r._traverse(e, t);
                                    });
                        }),
                        (t._checkActorChange = function (e, t) {
                            var r = V(e, this._variables),
                                n = this._source.get(t),
                                i = null != n ? h.getActorLinkedRecordID(n, r) : n;
                            if (null == i) void 0 === i && this._handleMissing();
                            else {
                                var a = i[0],
                                    s = i[1],
                                    o = this._source,
                                    l = this._mutator,
                                    u = this._recordSourceProxy,
                                    c = this._getMutatorAndRecordProxyForActor(a),
                                    _ = c[0],
                                    d = c[1];
                                (this._source = this._getSourceForActor(a)), (this._mutator = _), (this._recordSourceProxy = d), this._assignClientAbstractTypes(e), this._traverse(e, s), (this._source = o), (this._mutator = l), (this._recordSourceProxy = u);
                            }
                        }),
                        (t._assignClientAbstractTypes = function (e) {
                            var t = e.clientAbstractTypes;
                            if (null != t)
                                for (var r = 0, i = Object.keys(t); r < i.length; r++) {
                                    var a,
                                        s = i[r],
                                        o = (0, n.default)(t[s]);
                                    try {
                                        for (o.s(); !(a = o.n()).done; ) {
                                            var l = a.value,
                                                u = m(l);
                                            null == this._source.get(u) && this._mutator.create(u, p), null == this._mutator.getValue(u, s) && this._mutator.setValue(u, s, !0);
                                        }
                                    } catch (e) {
                                        o.e(e);
                                    } finally {
                                        o.f();
                                    }
                                }
                        }),
                        e
                    );
                })();
                e.exports = {
                    check: function (e, t, r, n, i, a, s, o) {
                        var l = n.dataID,
                            u = n.node,
                            c = n.variables;
                        return new Q(e, t, r, c, i, a, s, o).check(u, l);
                    },
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-c22f700c.f2a689ca.js.map
