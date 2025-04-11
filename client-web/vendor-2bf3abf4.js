window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-2bf3abf4"],
        {
            700378: (e, t, r) => {
                var i = (0, r(171600).default)(r(900814)),
                    s = r(108475).getArgumentValues,
                    n = r(647677);
                e.exports = {
                    getLocalVariables: function (e, t, r) {
                        if (null == t) return e;
                        var n = (0, i.default)({}, e),
                            o = r ? s(r, e) : {};
                        return (
                            t.forEach(function (e) {
                                var t,
                                    r = null !== (t = o[e.name]) && void 0 !== t ? t : e.defaultValue;
                                n[e.name] = r;
                            }),
                            n
                        );
                    },
                    getFragmentVariables: function (e, t, r) {
                        return null == e.argumentDefinitions
                            ? r
                            : (e.argumentDefinitions.forEach(function (e) {
                                  if (!r.hasOwnProperty(e.name))
                                      switch (((s = s || (0, i.default)({}, r)), e.kind)) {
                                          case "LocalArgument":
                                              s[e.name] = e.defaultValue;
                                              break;
                                          case "RootArgument":
                                              if (!t.hasOwnProperty(e.name)) {
                                                  s[e.name] = void 0;
                                                  break;
                                              }
                                              s[e.name] = t[e.name];
                                              break;
                                          default:
                                              n(!1);
                                      }
                              }),
                              s || r);
                        var s;
                    },
                    getOperationVariables: function (e, t, r) {
                        var i = {};
                        return (
                            e.argumentDefinitions.forEach(function (e) {
                                var t = e.defaultValue;
                                null != r[e.name] && (t = r[e.name]), (i[e.name] = t);
                            }),
                            null != t &&
                                Object.keys(t).forEach(function (e) {
                                    i[e] = t[e].get();
                                }),
                            i
                        );
                    },
                };
            },
            507567: (e, t, r) => {
                var i = r(171600).default,
                    s = i(r(900814)),
                    n = i(r(515538)),
                    o = i(r(638636)),
                    a = i(r(236531)),
                    l = i(r(978365)),
                    u = i(r(373408)),
                    c = ["path", "locations"],
                    h = r(891362),
                    _ = Symbol("$SELF"),
                    d = (function (e) {
                        function t(t) {
                            var r,
                                i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return ((r = e.call(this, t) || this).name = "RelayFieldError"), (r.message = t), (r.errors = i), r;
                        }
                        return (0, a.default)(t, e), t;
                    })((0, l.default)(Error));
                function p(e, t) {
                    var r,
                        i = (0, o.default)(e);
                    try {
                        for (i.s(); !(r = i.n()).done; ) {
                            var n = r.value,
                                a = n[0],
                                l = n[1],
                                c = t.length;
                            if ((Array.isArray(l) ? t.push.apply(t, (0, u.default)(l)) : p(l, t), a !== _))
                                for (var h = t.length, d = c; d < h; d++) {
                                    var f = t[d];
                                    null == f.path ? (t[d] = (0, s.default)((0, s.default)({}, f), {}, { path: [a] })) : f.path.unshift(a);
                                }
                        }
                    } catch (e) {
                        i.e(e);
                    } finally {
                        i.f();
                    }
                }
                e.exports = {
                    SELF: _,
                    buildErrorTrie: function (e) {
                        if (null == e) return null;
                        if (!h.ENABLE_FIELD_ERROR_HANDLING) return null;
                        var t,
                            r = new Map(),
                            i = (0, o.default)(e);
                        try {
                            for (i.s(); !(t = i.n()).done; ) {
                                var s = t.value,
                                    a = s.path,
                                    l = (s.locations, (0, n.default)(s, c));
                                if (null != a) {
                                    var u = a.length;
                                    if (0 !== u) {
                                        for (var d = u - 1, p = r, f = 0; f < d; f++) {
                                            var v = a[f],
                                                g = p.get(v);
                                            if (g instanceof Map) p = g;
                                            else {
                                                var m = new Map();
                                                Array.isArray(g) && m.set(_, g), p.set(v, m), (p = m);
                                            }
                                        }
                                        var b = a[d],
                                            y = p.get(b);
                                        y instanceof Map && ((y = (p = y).get(b)), (b = _)), Array.isArray(y) ? y.push(l) : p.set(b, [l]);
                                    }
                                }
                            }
                        } catch (e) {
                            i.e(e);
                        } finally {
                            i.f();
                        }
                        return r;
                    },
                    getNestedErrorTrieByKey: function (e, t) {
                        var r = e.get(t);
                        return r instanceof Map ? r : null;
                    },
                    getErrorsByKey: function (e, t) {
                        var r = e.get(t);
                        if (null == r) return null;
                        if (Array.isArray(r)) return r;
                        var i = [];
                        return p(r, i), i;
                    },
                    RelayFieldError: d,
                };
            },
            278490: (e, t, r) => {
                var i = (0, r(171600).default)(r(900814)),
                    s = r(113725),
                    n = r(177617),
                    o = n.INTERNAL_ACTOR_IDENTIFIER_DO_NOT_USE,
                    a = n.assertInternalActorIdentifier,
                    l = r(408122),
                    u = r(510311),
                    c = r(349192),
                    h = r(570469),
                    _ = r(892030),
                    d = r(610369),
                    p = r(158446),
                    f = r(719813),
                    v = r(485520),
                    g = r(887428),
                    m =
                        (r(647677),
                        (function () {
                            function e(e) {
                                var t,
                                    r,
                                    i,
                                    n,
                                    o,
                                    a,
                                    l,
                                    f,
                                    g,
                                    m,
                                    y = this;
                                (this.configName = e.configName), (this._treatMissingFieldsAsNull = !0 === e.treatMissingFieldsAsNull);
                                var R = e.operationLoader;
                                (this.__log = null !== (t = e.log) && void 0 !== t ? t : b),
                                    (this.relayFieldLogger = null !== (r = e.relayFieldLogger) && void 0 !== r ? r : d),
                                    (this._defaultRenderPolicy = null !== (i = e.UNSTABLE_defaultRenderPolicy) && void 0 !== i ? i : "partial"),
                                    (this._operationLoader = R),
                                    (this._operationExecutions = new Map()),
                                    (this._network = u(this, e.network)),
                                    (this._getDataID = null !== (n = e.getDataID) && void 0 !== n ? n : _),
                                    (this._missingFieldHandlers = null !== (o = e.missingFieldHandlers) && void 0 !== o ? o : []),
                                    (this._publishQueue = new v(e.store, null !== (a = e.handlerProvider) && void 0 !== a ? a : s, this._getDataID, this._missingFieldHandlers)),
                                    (this._scheduler = null !== (l = e.scheduler) && void 0 !== l ? l : null),
                                    (this._store = e.store),
                                    (this.options = e.options),
                                    (this._isServer = null !== (f = e.isServer) && void 0 !== f && f),
                                    (this._normalizeResponse = null !== (g = e.normalizeResponse) && void 0 !== g ? g : p),
                                    (this.__setNet = function (e) {
                                        return (y._network = u(y, e));
                                    }),
                                    (this._operationTracker = null !== (m = e.operationTracker) && void 0 !== m ? m : new c()),
                                    (this._shouldProcessClientComponents = e.shouldProcessClientComponents),
                                    h(this);
                            }
                            var t = e.prototype;
                            return (
                                (t.getStore = function () {
                                    return this._store;
                                }),
                                (t.getNetwork = function () {
                                    return this._network;
                                }),
                                (t.getOperationTracker = function () {
                                    return this._operationTracker;
                                }),
                                (t.getScheduler = function () {
                                    return this._scheduler;
                                }),
                                (t.isRequestActive = function (e) {
                                    return "active" === this._operationExecutions.get(e);
                                }),
                                (t.UNSTABLE_getDefaultRenderPolicy = function () {
                                    return this._defaultRenderPolicy;
                                }),
                                (t.applyUpdate = function (e) {
                                    var t = this;
                                    return (
                                        this._scheduleUpdates(function () {
                                            t._publishQueue.applyUpdate(e), t._publishQueue.run();
                                        }),
                                        {
                                            dispose: function () {
                                                t._scheduleUpdates(function () {
                                                    t._publishQueue.revertUpdate(e), t._publishQueue.run();
                                                });
                                            },
                                        }
                                    );
                                }),
                                (t.revertUpdate = function (e) {
                                    var t = this;
                                    this._scheduleUpdates(function () {
                                        t._publishQueue.revertUpdate(e), t._publishQueue.run();
                                    });
                                }),
                                (t.replaceUpdate = function (e, t) {
                                    var r = this;
                                    this._scheduleUpdates(function () {
                                        r._publishQueue.revertUpdate(e), r._publishQueue.applyUpdate(t), r._publishQueue.run();
                                    });
                                }),
                                (t.applyMutation = function (e) {
                                    var t = this._execute({
                                        createSource: function () {
                                            return l.create(function (e) {});
                                        },
                                        isClientPayload: !1,
                                        operation: e.operation,
                                        optimisticConfig: e,
                                        updater: null,
                                    }).subscribe({});
                                    return {
                                        dispose: function () {
                                            return t.unsubscribe();
                                        },
                                    };
                                }),
                                (t.check = function (e) {
                                    return 0 !== this._missingFieldHandlers.length ||
                                        (function (e) {
                                            return "Operation" === e.root.node.kind && null != e.root.node.clientAbstractTypes;
                                        })(e)
                                        ? this._checkSelectorAndHandleMissingFields(e, this._missingFieldHandlers)
                                        : this._store.check(e);
                                }),
                                (t.commitPayload = function (e, t) {
                                    this._execute({
                                        createSource: function () {
                                            return l.from({ data: t });
                                        },
                                        isClientPayload: !0,
                                        operation: e,
                                        optimisticConfig: null,
                                        updater: null,
                                    }).subscribe({});
                                }),
                                (t.commitUpdate = function (e) {
                                    var t = this;
                                    this._scheduleUpdates(function () {
                                        t._publishQueue.commitUpdate(e), t._publishQueue.run();
                                    });
                                }),
                                (t.lookup = function (e) {
                                    return this._store.lookup(e);
                                }),
                                (t.subscribe = function (e, t) {
                                    return this._store.subscribe(e, t);
                                }),
                                (t.retain = function (e) {
                                    return this._store.retain(e);
                                }),
                                (t.isServer = function () {
                                    return this._isServer;
                                }),
                                (t._checkSelectorAndHandleMissingFields = function (e, t) {
                                    var r = this,
                                        i = g.create(),
                                        s = this._store.getSource(),
                                        n = this._store.check(e, {
                                            handlers: t,
                                            defaultActorIdentifier: o,
                                            getSourceForActor: function (e) {
                                                return a(e), s;
                                            },
                                            getTargetForActor: function (e) {
                                                return a(e), i;
                                            },
                                        });
                                    return (
                                        i.size() > 0 &&
                                            this._scheduleUpdates(function () {
                                                r._publishQueue.commitSource(i), r._publishQueue.run();
                                            }),
                                        n
                                    );
                                }),
                                (t._scheduleUpdates = function (e) {
                                    var t = this._scheduler;
                                    null != t ? t.schedule(e) : e();
                                }),
                                (t.execute = function (e) {
                                    var t = this,
                                        r = e.operation;
                                    return this._execute({
                                        createSource: function () {
                                            return t.getNetwork().execute(r.request.node.params, r.request.variables, r.request.cacheConfig || {}, null);
                                        },
                                        isClientPayload: !1,
                                        operation: r,
                                        optimisticConfig: null,
                                        updater: null,
                                    });
                                }),
                                (t.executeSubscription = function (e) {
                                    var t = this,
                                        r = e.operation,
                                        i = e.updater;
                                    return this._execute({
                                        createSource: function () {
                                            return t.getNetwork().execute(r.request.node.params, r.request.variables, r.request.cacheConfig || {}, null);
                                        },
                                        isClientPayload: !1,
                                        operation: r,
                                        optimisticConfig: null,
                                        updater: i,
                                    });
                                }),
                                (t.executeMutation = function (e) {
                                    var t,
                                        r = this,
                                        s = e.operation,
                                        n = e.optimisticResponse,
                                        o = e.optimisticUpdater,
                                        a = e.updater,
                                        l = e.uploadables;
                                    return (
                                        (n || o) && (t = { operation: s, response: n, updater: o }),
                                        this._execute({
                                            createSource: function () {
                                                return r.getNetwork().execute(s.request.node.params, s.request.variables, (0, i.default)((0, i.default)({}, s.request.cacheConfig), {}, { force: !0 }), l);
                                            },
                                            isClientPayload: !1,
                                            operation: s,
                                            optimisticConfig: t,
                                            updater: a,
                                        })
                                    );
                                }),
                                (t.executeWithSource = function (e) {
                                    var t = e.operation,
                                        r = e.source;
                                    return this._execute({
                                        createSource: function () {
                                            return r;
                                        },
                                        isClientPayload: !1,
                                        operation: t,
                                        optimisticConfig: null,
                                        updater: null,
                                    });
                                }),
                                (t.toJSON = function () {
                                    var e;
                                    return "RelayModernEnvironment(".concat(null !== (e = this.configName) && void 0 !== e ? e : "", ")");
                                }),
                                (t._execute = function (e) {
                                    var t = this,
                                        r = e.createSource,
                                        i = e.isClientPayload,
                                        s = e.operation,
                                        n = e.optimisticConfig,
                                        u = e.updater,
                                        c = this._publishQueue,
                                        h = this._store;
                                    return l.create(function (e) {
                                        var l = f.execute({
                                            actorIdentifier: o,
                                            getDataID: t._getDataID,
                                            isClientPayload: i,
                                            log: t.__log,
                                            operation: s,
                                            operationExecutions: t._operationExecutions,
                                            operationLoader: t._operationLoader,
                                            operationTracker: t._operationTracker,
                                            optimisticConfig: n,
                                            getPublishQueue: function (e) {
                                                return a(e), c;
                                            },
                                            scheduler: t._scheduler,
                                            shouldProcessClientComponents: t._shouldProcessClientComponents,
                                            sink: e,
                                            source: r(),
                                            getStore: function (e) {
                                                return a(e), h;
                                            },
                                            treatMissingFieldsAsNull: t._treatMissingFieldsAsNull,
                                            updater: u,
                                            normalizeResponse: t._normalizeResponse,
                                        });
                                        return function () {
                                            return l.cancel();
                                        };
                                    });
                                }),
                                e
                            );
                        })());
                function b() {}
                (m.prototype["@@RelayModernEnvironment"] = !0), (e.exports = m);
            },
            685324: (e, t, r) => {
                var i = r(171600).default,
                    s = i(r(900814)),
                    n = i(r(226290)),
                    o = r(219433),
                    a = r(927421),
                    l = r(763131),
                    u = r(555398),
                    c = r(891362),
                    h = r(767408).createRequestDescriptor,
                    _ = r(464711),
                    d = _.areEqualSelectors,
                    p = _.createReaderSelector,
                    f = _.getSelectorsFromObject,
                    v = r(193860),
                    g = r(647677),
                    m =
                        (r(826590),
                        (function () {
                            function e(e, t, r, i, s) {
                                var o = this;
                                (0, n.default)(this, "_onChange", function () {
                                    (o._stale = !0), "function" == typeof o._callback && o._callback();
                                }),
                                    (this._callback = i),
                                    (this._context = e),
                                    (this._data = {}),
                                    (this._fragments = t),
                                    (this._props = {}),
                                    (this._resolvers = {}),
                                    (this._stale = !1),
                                    (this._rootIsQueryRenderer = s),
                                    this.setProps(r);
                            }
                            var t = e.prototype;
                            return (
                                (t.dispose = function () {
                                    for (var e in this._resolvers) this._resolvers.hasOwnProperty(e) && R(this._resolvers[e]);
                                }),
                                (t.resolve = function () {
                                    if (this._stale) {
                                        var e,
                                            t = this._data;
                                        for (var r in this._resolvers)
                                            if (this._resolvers.hasOwnProperty(r)) {
                                                var i = this._resolvers[r],
                                                    n = t[r];
                                                if (i) {
                                                    var o = i.resolve();
                                                    (e || o !== n) && ((e = e || (0, s.default)({}, t))[r] = o);
                                                } else {
                                                    var a = this._props[r],
                                                        u = void 0 !== a ? a : null;
                                                    (!e && l(u, n)) || ((e = e || (0, s.default)({}, t))[r] = u);
                                                }
                                            }
                                        (this._data = e || t), (this._stale = !1);
                                    }
                                    return this._data;
                                }),
                                (t.setCallback = function (e, t) {
                                    (this._callback = t), !0 === c.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT && this.setProps(e);
                                }),
                                (t.setProps = function (e) {
                                    this._props = {};
                                    var t = f(this._fragments, e);
                                    for (var r in t)
                                        if (t.hasOwnProperty(r)) {
                                            var i = t[r],
                                                s = this._resolvers[r];
                                            null == i ? (null != s && s.dispose(), (s = null)) : "PluralReaderSelector" === i.kind ? (null == s ? (s = new y(this._context.environment, this._rootIsQueryRenderer, i, null != this._callback, this._onChange)) : (s instanceof y || g(!1), s.setSelector(i))) : null == s ? (s = new b(this._context.environment, this._rootIsQueryRenderer, i, null != this._callback, this._onChange)) : (s instanceof b || g(!1), s.setSelector(i)), (this._props[r] = e[r]), (this._resolvers[r] = s);
                                        }
                                    this._stale = !0;
                                }),
                                (t.setVariables = function (e, t) {
                                    for (var r in this._resolvers)
                                        if (this._resolvers.hasOwnProperty(r)) {
                                            var i = this._resolvers[r];
                                            i && i.setVariables(e, t);
                                        }
                                    this._stale = !0;
                                }),
                                e
                            );
                        })()),
                    b = (function () {
                        function e(e, t, r, i, s) {
                            var o = this;
                            (0, n.default)(this, "_onChange", function (e) {
                                (o._data = e.data), (o._isMissingData = e.isMissingData), (o._missingRequiredFields = e.missingRequiredFields), (o._errorResponseFields = e.errorResponseFields), (o._relayResolverErrors = e.relayResolverErrors), o._callback();
                            });
                            var a = e.lookup(r);
                            (this._callback = s), (this._data = a.data), (this._isMissingData = a.isMissingData), (this._missingRequiredFields = a.missingRequiredFields), (this._errorResponseFields = a.errorResponseFields), (this._relayResolverErrors = a.relayResolverErrors), (this._environment = e), (this._rootIsQueryRenderer = t), (this._selector = r), !0 === c.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT ? i && (this._subscription = e.subscribe(a, this._onChange)) : (this._subscription = e.subscribe(a, this._onChange));
                        }
                        var t = e.prototype;
                        return (
                            (t.dispose = function () {
                                this._subscription && (this._subscription.dispose(), (this._subscription = null));
                            }),
                            (t.resolve = function () {
                                var e, t;
                                if (!0 === this._isMissingData) {
                                    var r = o(this._environment, this._selector.node, this._selector.owner),
                                        i = null == r ? void 0 : r.promise;
                                    if (null != i && !this._rootIsQueryRenderer) {
                                        var s,
                                            n = null !== (s = null == r ? void 0 : r.pendingOperations) && void 0 !== s ? s : [];
                                        throw (this._environment.__log({ name: "suspense.fragment", data: this._data, fragment: this._selector.node, isRelayHooks: !1, isMissingData: this._isMissingData, isPromiseCached: !1, pendingOperations: n }), i);
                                    }
                                }
                                return a(this._environment, this._missingRequiredFields, this._relayResolverErrors, this._errorResponseFields, null !== (e = null === (t = this._selector.node.metadata) || void 0 === t ? void 0 : t.throwOnFieldError) && void 0 !== e && e), this._data;
                            }),
                            (t.setSelector = function (e) {
                                if (null == this._subscription || !d(e, this._selector)) {
                                    this.dispose();
                                    var t = this._environment.lookup(e);
                                    (this._data = u(this._data, t.data)), (this._isMissingData = t.isMissingData), (this._missingRequiredFields = t.missingRequiredFields), (this._errorResponseFields = t.errorResponseFields), (this._relayResolverErrors = t.relayResolverErrors), (this._selector = e), (this._subscription = this._environment.subscribe(t, this._onChange));
                                }
                            }),
                            (t.setVariables = function (e, t) {
                                if (!v(e, this._selector.variables)) {
                                    var r = h(t, e),
                                        i = p(this._selector.node, this._selector.dataID, e, r);
                                    this.setSelector(i);
                                }
                            }),
                            e
                        );
                    })(),
                    y = (function () {
                        function e(e, t, r, i, s) {
                            var o = this;
                            (0, n.default)(this, "_onChange", function (e) {
                                (o._stale = !0), o._callback();
                            }),
                                (this._callback = s),
                                (this._data = []),
                                (this._environment = e),
                                (this._resolvers = []),
                                (this._stale = !0),
                                (this._rootIsQueryRenderer = t),
                                (this._subscribeOnConstruction = i),
                                this.setSelector(r);
                        }
                        var t = e.prototype;
                        return (
                            (t.dispose = function () {
                                this._resolvers.forEach(R);
                            }),
                            (t.resolve = function () {
                                if (this._stale) {
                                    for (var e, t = this._data, r = 0; r < this._resolvers.length; r++) {
                                        var i = t[r],
                                            s = this._resolvers[r].resolve();
                                        (e || s !== i) && (e = e || t.slice(0, r)).push(s);
                                    }
                                    e || this._resolvers.length === t.length || (e = t.slice(0, this._resolvers.length)), (this._data = e || t), (this._stale = !1);
                                }
                                return this._data;
                            }),
                            (t.setSelector = function (e) {
                                for (var t = e.selectors; this._resolvers.length > t.length; ) {
                                    this._resolvers.pop().dispose();
                                }
                                for (var r = 0; r < t.length; r++) r < this._resolvers.length ? this._resolvers[r].setSelector(t[r]) : (this._resolvers[r] = new b(this._environment, this._rootIsQueryRenderer, t[r], this._subscribeOnConstruction, this._onChange));
                                this._stale = !0;
                            }),
                            (t.setVariables = function (e, t) {
                                this._resolvers.forEach(function (r) {
                                    return r.setVariables(e, t);
                                }),
                                    (this._stale = !0);
                            }),
                            e
                        );
                    })();
                function R(e) {
                    e && e.dispose();
                }
                e.exports = m;
            },
            767408: (e, t, r) => {
                r(427225);
                var i = r(956926),
                    s = r(700378).getOperationVariables,
                    n = r(464711),
                    o = n.createNormalizationSelector,
                    a = n.createReaderSelector,
                    l = r(108475).ROOT_ID;
                function u(e, t, r) {
                    return { identifier: i(e.params, t), node: e, variables: t, cacheConfig: r };
                }
                e.exports = {
                    createOperationDescriptor: function (e, t, r) {
                        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l,
                            n = e.operation,
                            c = s(n, e.params.providedVariables, t),
                            h = u(e, c, r);
                        return { fragment: a(e.fragment, i, c, h), request: h, root: o(n, i, c) };
                    },
                    createRequestDescriptor: u,
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-2bf3abf4.c03b35aa.js.map
