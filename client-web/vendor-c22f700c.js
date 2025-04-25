window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-c22f700c"],
        {
            585488: (e, t, r) => {
                var n = r(677783),
                    a = r(647677);
                r(826590);
                function i(e) {
                    var t = e;
                    return "function" == typeof t ? (t = t()) : t.default && (t = t.default), t;
                }
                function s(e) {
                    var t = i(e);
                    return "object" == typeof t && null !== t && t.kind === n.FRAGMENT;
                }
                function o(e) {
                    var t = i(e);
                    return "object" == typeof t && null !== t && t.kind === n.REQUEST;
                }
                function l(e) {
                    var t = i(e);
                    return "object" == typeof t && null !== t && t.kind === n.UPDATABLE_QUERY;
                }
                function c(e) {
                    var t = i(e);
                    return "object" == typeof t && null !== t && t.kind === n.INLINE_DATA_FRAGMENT;
                }
                function u(e) {
                    var t = i(e);
                    return s(t) || a(!1), t;
                }
                e.exports = {
                    getFragment: u,
                    getNode: i,
                    getPaginationFragment: function (e) {
                        var t,
                            r = u(e),
                            n = null === (t = r.metadata) || void 0 === t ? void 0 : t.refetch,
                            a = null == n ? void 0 : n.connection;
                        return null === n || "object" != typeof n || null === a || "object" != typeof a ? null : r;
                    },
                    getRefetchableFragment: function (e) {
                        var t,
                            r = u(e),
                            n = null === (t = r.metadata) || void 0 === t ? void 0 : t.refetch;
                        return null === n || "object" != typeof n ? null : r;
                    },
                    getRequest: function (e) {
                        var t = i(e);
                        return o(t) || a(!1), t;
                    },
                    getUpdatableQuery: function (e) {
                        var t = i(e);
                        return l(t) || a(!1), t;
                    },
                    getInlineDataFragment: function (e) {
                        var t = i(e);
                        return c(t) || a(!1), t;
                    },
                    graphql: function (e) {
                        a(!1);
                    },
                    isFragment: s,
                    isRequest: o,
                    isUpdatableQuery: l,
                    isInlineDataFragment: c,
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
                var n = (0, r(183491).default)(r(479035)),
                    a = r(408122),
                    i = r(767408).createOperationDescriptor,
                    s = r(927421).handlePotentialSnapshotErrors,
                    o = r(692519),
                    l = r(585488).getRequest,
                    c = r(647677);
                function u(e, t) {
                    return o.fetchQuery(e, t).map(function () {
                        return e.lookup(t.fragment);
                    });
                }
                e.exports = function (e, t, r, o) {
                    var h,
                        d = l(t);
                    "query" !== d.params.operationKind && c(!1);
                    var _ = (0, n.default)({ force: !0 }, null == o ? void 0 : o.networkCacheConfig),
                        f = i(d, r, _),
                        v = null !== (h = null == o ? void 0 : o.fetchPolicy) && void 0 !== h ? h : "network-only";
                    function g(t) {
                        return s(e, t.errorResponseFields), t.data;
                    }
                    switch (v) {
                        case "network-only":
                            return u(e, f).map(g);
                        case "store-or-network":
                            return "available" === e.check(f).status ? a.from(e.lookup(f.fragment)).map(g) : u(e, f).map(g);
                        default:
                            throw new Error("fetchQuery: Invalid fetchPolicy " + v);
                    }
                };
            },
            692519: (e, t, r) => {
                var n = r(408122),
                    a = r(582501),
                    i = r(647677),
                    s = "function" == typeof WeakMap ? new WeakMap() : new Map();
                function o(e, t, r) {
                    return n.create(function (s) {
                        var o = c(e),
                            l = o.get(t);
                        return (
                            l ||
                                r()
                                    .finally(function () {
                                        return o.delete(t);
                                    })
                                    .subscribe({
                                        start: function (e) {
                                            (l = { identifier: t, subject: new a(), subjectForInFlightStatus: new a(), subscription: e, promise: null }), o.set(t, l);
                                        },
                                        next: function (e) {
                                            var r = u(o, t);
                                            r.subject.next(e), r.subjectForInFlightStatus.next(e);
                                        },
                                        error: function (e) {
                                            var r = u(o, t);
                                            r.subject.error(e), r.subjectForInFlightStatus.error(e);
                                        },
                                        complete: function () {
                                            var e = u(o, t);
                                            e.subject.complete(), e.subjectForInFlightStatus.complete();
                                        },
                                        unsubscribe: function (e) {
                                            var r = u(o, t);
                                            r.subject.unsubscribe(), r.subjectForInFlightStatus.unsubscribe();
                                        },
                                    }),
                            null == l && i(!1),
                            (function (e, t) {
                                return n.create(function (r) {
                                    var n = t.subject.subscribe(r);
                                    return function () {
                                        n.unsubscribe();
                                        var r = e.get(t.identifier);
                                        if (r) {
                                            var a = r.subscription;
                                            null != a && 0 === r.subject.getObserverCount() && (a.unsubscribe(), e.delete(t.identifier));
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
                function c(e) {
                    var t = s.get(e);
                    if (null != t) return t;
                    var r = new Map();
                    return s.set(e, r), r;
                }
                function u(e, t) {
                    var r = e.get(t);
                    return null == r && i(!1), r;
                }
                e.exports = {
                    fetchQuery: function (e, t) {
                        return o(e, t.request.identifier, function () {
                            return e.execute({ operation: t });
                        });
                    },
                    fetchQueryDeduped: o,
                    getPromiseForActiveRequest: function (e, t) {
                        var r = c(e),
                            n = r.get(t.identifier);
                        return n && e.isRequestActive(n.identifier)
                            ? new Promise(function (t, r) {
                                  var a = !1;
                                  l(e, 0, n).subscribe({
                                      complete: t,
                                      error: r,
                                      next: function (e) {
                                          a && t(e);
                                      },
                                  }),
                                      (a = !0);
                              })
                            : null;
                    },
                    getObservableForActiveRequest: function (e, t) {
                        var r = c(e),
                            n = r.get(t.identifier);
                        return n && e.isRequestActive(n.identifier) ? l(e, 0, n) : null;
                    },
                };
            },
            46154: (e, t, r) => {
                var n = r(767408).createOperationDescriptor,
                    a = r(585488).getRequest;
                e.exports = function (e, t, r, i) {
                    var s = a(t);
                    if ("query" !== s.params.operationKind) throw new Error("fetchQuery: Expected query operation");
                    var o = n(s, r, i);
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
                    a = r(274469).intern,
                    i = "client:";
                var s = 0;
                e.exports = {
                    generateClientID: function (e, t, r) {
                        var s = (n.STRING_INTERN_LEVEL <= 0 ? e : a(e, n.MAX_DATA_ID_LENGTH)) + ":" + t;
                        return null != r && (s += ":" + r), 0 !== s.indexOf(i) && (s = i + s), s;
                    },
                    generateClientObjectClientID: function (e, t, r) {
                        var n = "".concat(i).concat(e, ":").concat(t);
                        return null != r && (n += ":" + r), n;
                    },
                    generateUniqueClientID: function () {
                        return "".concat(i, "local:").concat(s++);
                    },
                    isClientID: function (e) {
                        return 0 === e.indexOf(i);
                    },
                };
            },
            781530: (e, t, r) => {
                var n = (0, r(183491).default)(r(158663)),
                    a = r(957044),
                    i = r(233343),
                    s = r(471677),
                    o = r(286190).isClientID,
                    l = r(749110),
                    c = r(533223),
                    u = r(700378).getLocalVariables,
                    h = r(705180),
                    d = r(193740),
                    _ = d.EXISTENT,
                    f = d.UNKNOWN,
                    v = r(108475),
                    g = r(348073),
                    b = g.TYPE_SCHEMA_TYPE,
                    p = g.generateTypeID,
                    m = r(647677),
                    k = v.getModuleOperationKey,
                    y = v.getStorageKey,
                    S = v.getArgumentValues;
                var A = (function () {
                    function e(e, t, r, n, a, i, s, o) {
                        (this._getSourceForActor = e), (this._getTargetForActor = t), (this._getDataID = s), (this._source = e(r)), (this._mutatorRecordSourceProxyCache = new Map());
                        var l = this._getMutatorAndRecordProxyForActor(r),
                            c = l[0],
                            u = l[1];
                        (this._mostRecentlyInvalidatedAt = null), (this._handlers = a), (this._mutator = c), (this._operationLoader = null != i ? i : null), (this._recordSourceProxy = u), (this._recordWasMissing = !1), (this._variables = n), (this._shouldProcessClientComponents = o);
                    }
                    var t = e.prototype;
                    return (
                        (t._getMutatorAndRecordProxyForActor = function (e) {
                            var t = this._mutatorRecordSourceProxyCache.get(e);
                            if (null == t) {
                                var r = this._getTargetForActor(e),
                                    n = new a(this._getSourceForActor(e), r);
                                (t = [n, new i(n, this._getDataID, void 0, this._handlers)]), this._mutatorRecordSourceProxyCache.set(e, t);
                            }
                            return t;
                        }),
                        (t.check = function (e, t) {
                            return this._assignClientAbstractTypes(e), this._traverse(e, t), !0 === this._recordWasMissing ? { status: "missing", mostRecentlyInvalidatedAt: this._mostRecentlyInvalidatedAt } : { status: "available", mostRecentlyInvalidatedAt: this._mostRecentlyInvalidatedAt };
                        }),
                        (t._getVariableValue = function (e) {
                            return this._variables.hasOwnProperty(e) || m(!1), this._variables[e];
                        }),
                        (t._handleMissing = function () {
                            this._recordWasMissing = !0;
                        }),
                        (t._handleMissingScalarField = function (e, t) {
                            if ("id" !== e.name || null != e.alias || !o(t)) {
                                var r,
                                    a = null != e.args ? S(e.args, this._variables) : {},
                                    i = (0, n.default)(this._handlers);
                                try {
                                    for (i.s(); !(r = i.n()).done; ) {
                                        var s = r.value;
                                        if ("scalar" === s.kind) {
                                            var l = s.handle(e, this._recordSourceProxy.get(t), a, this._recordSourceProxy);
                                            if (void 0 !== l) return l;
                                        }
                                    }
                                } catch (e) {
                                    i.e(e);
                                } finally {
                                    i.f();
                                }
                                this._handleMissing();
                            }
                        }),
                        (t._handleMissingLinkField = function (e, t) {
                            var r,
                                a = null != e.args ? S(e.args, this._variables) : {},
                                i = (0, n.default)(this._handlers);
                            try {
                                for (i.s(); !(r = i.n()).done; ) {
                                    var s = r.value;
                                    if ("linked" === s.kind) {
                                        var o = s.handle(e, this._recordSourceProxy.get(t), a, this._recordSourceProxy);
                                        if (void 0 !== o && (null === o || this._mutator.getStatus(o) === _)) return o;
                                    }
                                }
                            } catch (e) {
                                i.e(e);
                            } finally {
                                i.f();
                            }
                            this._handleMissing();
                        }),
                        (t._handleMissingPluralLinkField = function (e, t) {
                            var r,
                                a = this,
                                i = null != e.args ? S(e.args, this._variables) : {},
                                s = (0, n.default)(this._handlers);
                            try {
                                for (s.s(); !(r = s.n()).done; ) {
                                    var o = r.value;
                                    if ("pluralLinked" === o.kind) {
                                        var l = o.handle(e, this._recordSourceProxy.get(t), i, this._recordSourceProxy);
                                        if (null != l) {
                                            if (
                                                l.every(function (e) {
                                                    return null != e && a._mutator.getStatus(e) === _;
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
                            if ((r === f && this._handleMissing(), r === _)) {
                                var n = this._source.get(t),
                                    a = h.getInvalidationEpoch(n);
                                null != a && (this._mostRecentlyInvalidatedAt = null != this._mostRecentlyInvalidatedAt ? Math.max(this._mostRecentlyInvalidatedAt, a) : a), this._traverseSelections(e.selections, t);
                            }
                        }),
                        (t._traverseSelections = function (e, t) {
                            var r = this;
                            e.forEach(function (n) {
                                switch (n.kind) {
                                    case "ScalarField":
                                        r._checkScalar(n, t);
                                        break;
                                    case "LinkedField":
                                        n.plural ? r._checkPluralLink(n, t) : r._checkLink(n, t);
                                        break;
                                    case "ActorChange":
                                        r._checkActorChange(n.linkedField, t);
                                        break;
                                    case "Condition":
                                        Boolean(r._getVariableValue(n.condition)) === n.passingValue && r._traverseSelections(n.selections, t);
                                        break;
                                    case "InlineFragment":
                                        var a = n.abstractKey;
                                        if (null == a) {
                                            r._mutator.getType(t) === n.type && r._traverseSelections(n.selections, t);
                                        } else {
                                            var i = r._mutator.getType(t);
                                            null == i && m(!1);
                                            var s = p(i),
                                                o = r._mutator.getValue(s, a);
                                            !0 === o ? r._traverseSelections(n.selections, t) : null == o && r._handleMissing();
                                        }
                                        break;
                                    case "LinkedHandle":
                                        var h = l(n, e, r._variables);
                                        h.plural ? r._checkPluralLink(h, t) : r._checkLink(h, t);
                                        break;
                                    case "ScalarHandle":
                                        var d = c(n, e, r._variables);
                                        r._checkScalar(d, t);
                                        break;
                                    case "ModuleImport":
                                        r._checkModuleImport(n, t);
                                        break;
                                    case "Defer":
                                    case "Stream":
                                        r._traverseSelections(n.selections, t);
                                        break;
                                    case "FragmentSpread":
                                        var _ = r._variables;
                                        (r._variables = u(r._variables, n.fragment.argumentDefinitions, n.args)), r._traverseSelections(n.fragment.selections, t), (r._variables = _);
                                        break;
                                    case "ClientExtension":
                                        var f = r._recordWasMissing;
                                        r._traverseSelections(n.selections, t), (r._recordWasMissing = f);
                                        break;
                                    case "TypeDiscriminator":
                                        var v = n.abstractKey,
                                            g = r._mutator.getType(t);
                                        null == g && m(!1);
                                        var b = p(g);
                                        null == r._mutator.getValue(b, v) && r._handleMissing();
                                        break;
                                    case "ClientComponent":
                                        if (!1 === r._shouldProcessClientComponents) break;
                                        r._traverseSelections(n.fragment.selections, t);
                                        break;
                                    case "RelayResolver":
                                    case "RelayLiveResolver":
                                        r._checkResolver(n, t);
                                        break;
                                    case "ClientEdgeToClientObject":
                                        r._checkResolver(n.backingField, t);
                                        break;
                                    default:
                                        m(!1);
                                }
                            });
                        }),
                        (t._checkResolver = function (e, t) {
                            e.fragment && this._traverseSelections([e.fragment], t);
                        }),
                        (t._checkModuleImport = function (e, t) {
                            var r = this._operationLoader;
                            null === r && m(!1);
                            var n = k(e.documentName),
                                a = this._mutator.getValue(t, n);
                            if (null != a) {
                                var i = r.get(a);
                                if (null != i) {
                                    var o = s(i),
                                        l = this._variables;
                                    (this._variables = u(this._variables, o.argumentDefinitions, e.args)), this._traverse(o, t), (this._variables = l);
                                } else this._handleMissing();
                            } else void 0 === a && this._handleMissing();
                        }),
                        (t._checkScalar = function (e, t) {
                            var r = y(e, this._variables),
                                n = this._mutator.getValue(t, r);
                            void 0 === n && void 0 !== (n = this._handleMissingScalarField(e, t)) && this._mutator.setValue(t, r, n);
                        }),
                        (t._checkLink = function (e, t) {
                            var r = y(e, this._variables),
                                n = this._mutator.getLinkedRecordID(t, r);
                            void 0 === n && (null != (n = this._handleMissingLinkField(e, t)) ? this._mutator.setLinkedRecordID(t, r, n) : null === n && this._mutator.setValue(t, r, null)), null != n && this._traverse(e, n);
                        }),
                        (t._checkPluralLink = function (e, t) {
                            var r = this,
                                n = y(e, this._variables),
                                a = this._mutator.getLinkedRecordIDs(t, n);
                            void 0 === a && (null != (a = this._handleMissingPluralLinkField(e, t)) ? this._mutator.setLinkedRecordIDs(t, n, a) : null === a && this._mutator.setValue(t, n, null)),
                                a &&
                                    a.forEach(function (t) {
                                        null != t && r._traverse(e, t);
                                    });
                        }),
                        (t._checkActorChange = function (e, t) {
                            var r = y(e, this._variables),
                                n = this._source.get(t),
                                a = null != n ? h.getActorLinkedRecordID(n, r) : n;
                            if (null == a) void 0 === a && this._handleMissing();
                            else {
                                var i = a[0],
                                    s = a[1],
                                    o = this._source,
                                    l = this._mutator,
                                    c = this._recordSourceProxy,
                                    u = this._getMutatorAndRecordProxyForActor(i),
                                    d = u[0],
                                    _ = u[1];
                                (this._source = this._getSourceForActor(i)), (this._mutator = d), (this._recordSourceProxy = _), this._assignClientAbstractTypes(e), this._traverse(e, s), (this._source = o), (this._mutator = l), (this._recordSourceProxy = c);
                            }
                        }),
                        (t._assignClientAbstractTypes = function (e) {
                            var t = e.clientAbstractTypes;
                            if (null != t)
                                for (var r = 0, a = Object.keys(t); r < a.length; r++) {
                                    var i,
                                        s = a[r],
                                        o = (0, n.default)(t[s]);
                                    try {
                                        for (o.s(); !(i = o.n()).done; ) {
                                            var l = i.value,
                                                c = p(l);
                                            null == this._source.get(c) && this._mutator.create(c, b), null == this._mutator.getValue(c, s) && this._mutator.setValue(c, s, !0);
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
                    check: function (e, t, r, n, a, i, s, o, l) {
                        null != l && l({ name: "store.datachecker.start", selector: n });
                        var c = n.dataID,
                            u = n.node,
                            h = n.variables,
                            d = new A(e, t, r, h, a, i, s, o).check(u, c);
                        return null != l && l({ name: "store.datachecker.end", selector: n }), d;
                    },
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-c22f700c.0254af5a.js.map
