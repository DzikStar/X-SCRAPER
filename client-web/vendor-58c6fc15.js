window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-58c6fc15"],
        {
            719813: (e, t, i) => {
                var s = i(171600).default,
                    n = s(i(638636)),
                    o = s(i(373408)),
                    r = i(408122),
                    a = i(91650),
                    l = i(471677),
                    u = i(770196),
                    c = i(891362),
                    p = i(795178),
                    d = i(44352),
                    _ = i(286190),
                    h = _.generateClientID,
                    f = _.generateUniqueClientID,
                    m = i(700378).getLocalVariables,
                    v = i(705180),
                    g = i(464711),
                    P = g.createNormalizationSelector,
                    y = g.createReaderSelector,
                    I = i(887428),
                    b = i(108475),
                    S = b.ROOT_TYPE,
                    D = b.TYPENAME_KEY,
                    A = b.getStorageKey,
                    w = i(647677);
                i(826590);
                var k = (function () {
                    function e(e) {
                        var t = this,
                            i = e.actorIdentifier,
                            s = e.getDataID,
                            n = e.getPublishQueue,
                            o = e.getStore,
                            r = e.isClientPayload,
                            l = e.operation,
                            u = e.operationExecutions,
                            p = e.operationLoader,
                            d = e.operationTracker,
                            _ = e.optimisticConfig,
                            h = e.scheduler,
                            f = e.shouldProcessClientComponents,
                            m = e.sink,
                            v = e.source,
                            g = e.treatMissingFieldsAsNull,
                            P = e.updater,
                            y = e.log,
                            I = e.normalizeResponse;
                        (this._actorIdentifier = i), (this._getDataID = s), (this._treatMissingFieldsAsNull = g), (this._incrementalPayloadsPending = !1), (this._incrementalResults = new Map()), (this._log = y), (this._executeId = a()), (this._nextSubscriptionId = 0), (this._operation = l), (this._operationExecutions = u), (this._operationLoader = p), (this._operationTracker = d), (this._operationUpdateEpochs = new Map()), (this._optimisticUpdates = null), (this._pendingModulePayloadsCount = 0), (this._getPublishQueue = n), (this._scheduler = h), (this._sink = m), (this._source = new Map()), (this._state = "started"), (this._getStore = o), (this._subscriptions = new Map()), (this._updater = P), (this._isClientPayload = !0 === r), (this._isSubscriptionOperation = "subscription" === this._operation.request.node.params.operationKind), (this._shouldProcessClientComponents = f), (this._retainDisposables = new Map()), (this._seenActors = new Set()), (this._completeFns = []), (this._normalizeResponse = I);
                        var b = this._nextSubscriptionId++;
                        c.PROCESS_OPTIMISTIC_UPDATE_BEFORE_SUBSCRIPTION && null != _ && this._processOptimisticResponse(null != _.response ? { data: _.response } : null, _.updater, !1),
                            v.subscribe({
                                complete: function () {
                                    return t._complete(b);
                                },
                                error: function (e) {
                                    return t._error(e);
                                },
                                next: function (e) {
                                    try {
                                        t._next(b, e);
                                    } catch (e) {
                                        m.error(e);
                                    }
                                },
                                start: function (e) {
                                    var i;
                                    t._start(b, e), t._log({ name: "execute.start", executeId: t._executeId, params: t._operation.request.node.params, variables: t._operation.request.variables, cacheConfig: null !== (i = t._operation.request.cacheConfig) && void 0 !== i ? i : {} });
                                },
                            }),
                            c.PROCESS_OPTIMISTIC_UPDATE_BEFORE_SUBSCRIPTION || null == _ || this._processOptimisticResponse(null != _.response ? { data: _.response } : null, _.updater, !1);
                    }
                    var t = e.prototype;
                    return (
                        (t.cancel = function () {
                            var e = this;
                            if ("completed" !== this._state) {
                                (this._state = "completed"),
                                    this._operationExecutions.delete(this._operation.request.identifier),
                                    0 !== this._subscriptions.size &&
                                        (this._subscriptions.forEach(function (e) {
                                            return e.unsubscribe();
                                        }),
                                        this._subscriptions.clear());
                                var t = this._optimisticUpdates;
                                null !== t &&
                                    ((this._optimisticUpdates = null),
                                    t.forEach(function (t) {
                                        return e._getPublishQueueAndSaveActor().revertUpdate(t);
                                    }),
                                    this._runPublishQueue()),
                                    this._incrementalResults.clear(),
                                    null != this._asyncStoreUpdateDisposable && (this._asyncStoreUpdateDisposable.dispose(), (this._asyncStoreUpdateDisposable = null)),
                                    (this._completeFns = []),
                                    this._completeOperationTracker(),
                                    this._disposeRetainedData();
                            }
                        }),
                        (t._updateActiveState = function () {
                            var e;
                            switch (this._state) {
                                case "started":
                                case "loading_incremental":
                                    e = "active";
                                    break;
                                case "completed":
                                    e = "inactive";
                                    break;
                                case "loading_final":
                                    e = this._pendingModulePayloadsCount > 0 ? "active" : "inactive";
                                    break;
                                default:
                                    this._state, w(!1);
                            }
                            this._operationExecutions.set(this._operation.request.identifier, e);
                        }),
                        (t._schedule = function (e) {
                            var t = this,
                                i = this._scheduler;
                            if (null != i) {
                                var s = this._nextSubscriptionId++;
                                r.create(function (t) {
                                    var s = i.schedule(function () {
                                        try {
                                            e(), t.complete();
                                        } catch (e) {
                                            t.error(e);
                                        }
                                    });
                                    return function () {
                                        return i.cancel(s);
                                    };
                                }).subscribe({
                                    complete: function () {
                                        return t._complete(s);
                                    },
                                    error: function (e) {
                                        return t._error(e);
                                    },
                                    start: function (e) {
                                        return t._start(s, e);
                                    },
                                });
                            } else e();
                        }),
                        (t._complete = function (e) {
                            this._subscriptions.delete(e), 0 === this._subscriptions.size && (this.cancel(), this._sink.complete(), this._log({ name: "execute.complete", executeId: this._executeId }));
                        }),
                        (t._error = function (e) {
                            this.cancel(), this._sink.error(e), this._log({ name: "execute.error", executeId: this._executeId, error: e });
                        }),
                        (t._start = function (e, t) {
                            this._subscriptions.set(e, t), this._updateActiveState();
                        }),
                        (t._next = function (e, t) {
                            var i = this;
                            this._schedule(function () {
                                var e = d(function () {
                                    i._handleNext(t), i._maybeCompleteSubscriptionOperationTracking();
                                })[0];
                                i._log({ name: "execute.next", executeId: i._executeId, response: t, duration: e });
                            });
                        }),
                        (t._handleErrorResponse = function (e) {
                            var t = this,
                                i = [];
                            return (
                                e.forEach(function (e) {
                                    if (null !== e.data || null == e.extensions || e.hasOwnProperty("errors")) {
                                        if (null == e.data) {
                                            var s = e.hasOwnProperty("errors") && null != e.errors ? e.errors : null,
                                                n = s
                                                    ? s
                                                          .map(function (e) {
                                                              return e.message;
                                                          })
                                                          .join("\n")
                                                    : "(No errors)",
                                                o = u.create("RelayNetwork", "No data returned for operation `" + t._operation.request.node.params.name + "`, got error(s):\n" + n + "\n\nSee the error `source` property for more information.");
                                            throw ((o.source = { errors: s, operation: t._operation.request.node, variables: t._operation.request.variables }), o.stack, o);
                                        }
                                        var r = e;
                                        i.push(r);
                                    }
                                }),
                                i
                            );
                        }),
                        (t._handleOptimisticResponses = function (e) {
                            var t;
                            if (e.length > 1)
                                return (
                                    e.some(function (e) {
                                        var t;
                                        return !0 === (null === (t = e.extensions) || void 0 === t ? void 0 : t.isOptimistic);
                                    }) && w(!1),
                                    !1
                                );
                            var i = e[0],
                                s = !0 === (null === (t = i.extensions) || void 0 === t ? void 0 : t.isOptimistic);
                            return s && "started" !== this._state && w(!1), !!s && (this._processOptimisticResponse(i, null, this._treatMissingFieldsAsNull), this._sink.next(i), !0);
                        }),
                        (t._handleNext = function (e) {
                            if ("completed" !== this._state) {
                                this._seenActors.clear();
                                var t = Array.isArray(e) ? e : [e],
                                    i = this._handleErrorResponse(t);
                                if (0 === i.length)
                                    return (
                                        t.some(function (e) {
                                            var t;
                                            return !0 === (null === (t = e.extensions) || void 0 === t ? void 0 : t.is_final);
                                        }) && ((this._state = "loading_final"), this._updateActiveState(), (this._incrementalPayloadsPending = !1)),
                                        void this._sink.next(e)
                                    );
                                if (!this._handleOptimisticResponses(i)) {
                                    var s = (function (e) {
                                            var t = [],
                                                i = [];
                                            return (
                                                e.forEach(function (e) {
                                                    if (null != e.path || null != e.label) {
                                                        var s = e.label,
                                                            n = e.path;
                                                        (null != s && null != n) || w(!1), i.push({ label: s, path: n, response: e });
                                                    } else t.push(e);
                                                }),
                                                [t, i]
                                            );
                                        })(i),
                                        n = s[0],
                                        o = s[1],
                                        r = n.length > 0;
                                    if (r) {
                                        if (this._isSubscriptionOperation) {
                                            var a = f();
                                            this._operation = { request: this._operation.request, fragment: y(this._operation.fragment.node, a, this._operation.fragment.variables, this._operation.fragment.owner), root: P(this._operation.root.node, a, this._operation.root.variables) };
                                        }
                                        var l = this._processResponses(n);
                                        this._processPayloadFollowups(l);
                                    }
                                    if (o.length > 0) {
                                        var u = this._processIncrementalResponses(o);
                                        this._processPayloadFollowups(u);
                                    }
                                    this._isSubscriptionOperation && (null == i[0].extensions ? (i[0].extensions = { __relay_subscription_root_id: this._operation.fragment.dataID }) : (i[0].extensions.__relay_subscription_root_id = this._operation.fragment.dataID));
                                    var c = this._runPublishQueue(r ? this._operation : void 0);
                                    r && this._incrementalPayloadsPending && this._retainData(), this._updateOperationTracker(c), this._sink.next(e);
                                }
                            }
                        }),
                        (t._processOptimisticResponse = function (e, t, i) {
                            var s = this;
                            if ((null !== this._optimisticUpdates && w(!1), null != e || null != t)) {
                                var n = [];
                                if (e) {
                                    var o = this._normalizeResponse(e, this._operation.root, S, { actorIdentifier: this._actorIdentifier, getDataID: this._getDataID, path: [], shouldProcessClientComponents: this._shouldProcessClientComponents, treatMissingFieldsAsNull: i });
                                    O(o), n.push({ operation: this._operation, payload: o, updater: t }), this._processOptimisticFollowups(o, n);
                                } else t && n.push({ operation: this._operation, payload: { errors: null, fieldPayloads: null, incrementalPlaceholders: null, followupPayloads: null, source: I.create(), isFinal: !1 }, updater: t });
                                (this._optimisticUpdates = n),
                                    n.forEach(function (e) {
                                        return s._getPublishQueueAndSaveActor().applyUpdate(e);
                                    });
                                var r = this._runPublishQueue();
                                c.ENABLE_OPERATION_TRACKER_OPTIMISTIC_UPDATES && this._updateOperationTracker(r);
                            }
                        }),
                        (t._processOptimisticFollowups = function (e, t) {
                            if (e.followupPayloads && e.followupPayloads.length) {
                                var i,
                                    s = e.followupPayloads,
                                    r = (0, n.default)(s);
                                try {
                                    for (r.s(); !(i = r.n()).done; ) {
                                        var a = i.value;
                                        switch (a.kind) {
                                            case "ModuleImportPayload":
                                                var l = this._expectOperationLoader().get(a.operationReference);
                                                if (null == l) this._processAsyncOptimisticModuleImport(a);
                                                else {
                                                    var u = this._processOptimisticModuleImport(l, a);
                                                    t.push.apply(t, (0, o.default)(u));
                                                }
                                                break;
                                            case "ActorPayload":
                                                break;
                                            default:
                                                w(!1);
                                        }
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                            }
                        }),
                        (t._normalizeFollowupPayload = function (e, t) {
                            var i;
                            i = "SplitOperation" === t.kind && "ModuleImportPayload" === e.kind ? m(e.variables, t.argumentDefinitions, e.args) : e.variables;
                            var s = P(t, e.dataID, i);
                            return this._normalizeResponse({ data: e.data }, s, e.typeName, { actorIdentifier: this._actorIdentifier, getDataID: this._getDataID, path: e.path, treatMissingFieldsAsNull: this._treatMissingFieldsAsNull, shouldProcessClientComponents: this._shouldProcessClientComponents });
                        }),
                        (t._processOptimisticModuleImport = function (e, t) {
                            var i = l(e),
                                s = [],
                                n = this._normalizeFollowupPayload(t, i);
                            return O(n), s.push({ operation: this._operation, payload: n, updater: null }), this._processOptimisticFollowups(n, s), s;
                        }),
                        (t._processAsyncOptimisticModuleImport = function (e) {
                            var t = this;
                            this._expectOperationLoader()
                                .load(e.operationReference)
                                .then(function (i) {
                                    if (null != i && "started" === t._state) {
                                        var s,
                                            n = t._processOptimisticModuleImport(i, e);
                                        if (
                                            (n.forEach(function (e) {
                                                return t._getPublishQueueAndSaveActor().applyUpdate(e);
                                            }),
                                            null == t._optimisticUpdates)
                                        );
                                        else (s = t._optimisticUpdates).push.apply(s, (0, o.default)(n)), t._runPublishQueue();
                                    }
                                });
                        }),
                        (t._processResponses = function (e) {
                            var t = this;
                            return (
                                null !== this._optimisticUpdates &&
                                    (this._optimisticUpdates.forEach(function (e) {
                                        t._getPublishQueueAndSaveActor().revertUpdate(e);
                                    }),
                                    (this._optimisticUpdates = null)),
                                (this._incrementalPayloadsPending = !1),
                                this._incrementalResults.clear(),
                                this._source.clear(),
                                e.map(function (e) {
                                    var i = t._normalizeResponse(e, t._operation.root, S, { actorIdentifier: t._actorIdentifier, getDataID: t._getDataID, path: [], treatMissingFieldsAsNull: t._treatMissingFieldsAsNull, shouldProcessClientComponents: t._shouldProcessClientComponents });
                                    return t._getPublishQueueAndSaveActor().commitPayload(t._operation, i, t._updater), i;
                                })
                            );
                        }),
                        (t._processPayloadFollowups = function (e) {
                            var t = this;
                            "completed" !== this._state &&
                                e.forEach(function (e) {
                                    var i = e.incrementalPlaceholders,
                                        s = e.followupPayloads,
                                        n = e.isFinal;
                                    if (
                                        ((t._state = n ? "loading_final" : "loading_incremental"),
                                        t._updateActiveState(),
                                        n && (t._incrementalPayloadsPending = !1),
                                        s &&
                                            0 !== s.length &&
                                            s.forEach(function (e) {
                                                var i,
                                                    s = t._actorIdentifier;
                                                (t._actorIdentifier = null !== (i = e.actorIdentifier) && void 0 !== i ? i : t._actorIdentifier), t._processFollowupPayload(e), (t._actorIdentifier = s);
                                            }),
                                        i &&
                                            0 !== i.length &&
                                            ((t._incrementalPayloadsPending = "loading_final" !== t._state),
                                            i.forEach(function (i) {
                                                var s,
                                                    n = t._actorIdentifier;
                                                (t._actorIdentifier = null !== (s = i.actorIdentifier) && void 0 !== s ? s : t._actorIdentifier), t._processIncrementalPlaceholder(e, i), (t._actorIdentifier = n);
                                            }),
                                            t._isClientPayload || "loading_final" === t._state))
                                    ) {
                                        var o = [];
                                        i.forEach(function (e) {
                                            "defer" === e.kind && o.push(t._processDeferResponse(e.label, e.path, e, { data: e.data }));
                                        }),
                                            o.length > 0 && t._processPayloadFollowups(o);
                                    }
                                });
                        }),
                        (t._maybeCompleteSubscriptionOperationTracking = function () {
                            this._isSubscriptionOperation && 0 === this._pendingModulePayloadsCount && !1 === this._incrementalPayloadsPending && this._completeOperationTracker();
                        }),
                        (t._processFollowupPayload = function (e) {
                            var t = this;
                            switch (e.kind) {
                                case "ModuleImportPayload":
                                    var i = this._expectOperationLoader(),
                                        s = i.get(e.operationReference);
                                    if (null != s) this._processFollowupPayloadWithNormalizationNode(e, l(s));
                                    else {
                                        var n = this._nextSubscriptionId++;
                                        this._pendingModulePayloadsCount++;
                                        var o = function () {
                                                t._pendingModulePayloadsCount--, t._maybeCompleteSubscriptionOperationTracking();
                                            },
                                            a = r.from(
                                                new Promise(function (t, s) {
                                                    i.load(e.operationReference).then(t, s);
                                                }),
                                            );
                                        r.create(function (i) {
                                            var s,
                                                n = a.subscribe({
                                                    next: function (n) {
                                                        if (null != n) {
                                                            var o = function () {
                                                                    try {
                                                                        var s = l(n),
                                                                            o = c.BATCH_ASYNC_MODULE_UPDATES_FN,
                                                                            r = null != o && t._pendingModulePayloadsCount > 1,
                                                                            a = d(function () {
                                                                                if ((t._handleFollowupPayload(e, s), r)) t._scheduleAsyncStoreUpdate(o, i.complete);
                                                                                else {
                                                                                    var n = t._runPublishQueue();
                                                                                    t._updateOperationTracker(n);
                                                                                }
                                                                            })[0];
                                                                        t._log({ name: "execute.async.module", executeId: t._executeId, operationName: s.name, duration: a }), r || i.complete();
                                                                    } catch (e) {
                                                                        i.error(e);
                                                                    }
                                                                },
                                                                r = t._scheduler;
                                                            null == r ? o() : (s = r.schedule(o));
                                                        } else i.complete();
                                                    },
                                                    error: i.error,
                                                });
                                            return function () {
                                                n.unsubscribe(), null != t._scheduler && null != s && t._scheduler.cancel(s);
                                            };
                                        }).subscribe({
                                            complete: function () {
                                                t._complete(n), o();
                                            },
                                            error: function (e) {
                                                t._error(e), o();
                                            },
                                            start: function (e) {
                                                return t._start(n, e);
                                            },
                                        });
                                    }
                                    break;
                                case "ActorPayload":
                                    this._processFollowupPayloadWithNormalizationNode(e, e.node);
                                    break;
                                default:
                                    w(!1);
                            }
                        }),
                        (t._processFollowupPayloadWithNormalizationNode = function (e, t) {
                            this._handleFollowupPayload(e, t), this._maybeCompleteSubscriptionOperationTracking();
                        }),
                        (t._handleFollowupPayload = function (e, t) {
                            var i = this._normalizeFollowupPayload(e, t);
                            this._getPublishQueueAndSaveActor().commitPayload(this._operation, i), this._processPayloadFollowups([i]);
                        }),
                        (t._processIncrementalPlaceholder = function (e, t) {
                            var i,
                                s = t.label,
                                n = t.path.map(String).join("."),
                                o = this._incrementalResults.get(s);
                            null == o && ((o = new Map()), this._incrementalResults.set(s, o));
                            var r,
                                a = o.get(n),
                                l = null != a && "response" === a.kind ? a.responses : null;
                            o.set(n, { kind: "placeholder", placeholder: t }), "stream" === t.kind ? (r = t.parentID) : "defer" === t.kind ? (r = t.selector.dataID) : w(!1);
                            var u,
                                c,
                                d = e.source.get(r),
                                _ = (null !== (i = e.fieldPayloads) && void 0 !== i ? i : []).filter(function (e) {
                                    var t = h(e.dataID, e.fieldKey);
                                    return e.dataID === r || t === r;
                                });
                            null == d && w(!1);
                            var f = this._source.get(r);
                            if (null != f) {
                                u = v.update(f.record, d);
                                var m = new Map(),
                                    g = function (e) {
                                        var t,
                                            i,
                                            s = ((t = e), null !== (i = JSON.stringify(p(t))) && void 0 !== i ? i : "");
                                        m.set(s, e);
                                    };
                                f.fieldPayloads.forEach(g), _.forEach(g), (c = Array.from(m.values()));
                            } else (u = d), (c = _);
                            if ((this._source.set(r, { record: u, fieldPayloads: c }), null != l)) {
                                var P = this._processIncrementalResponses(l);
                                this._processPayloadFollowups(P);
                            }
                        }),
                        (t._processIncrementalResponses = function (e) {
                            var t = this,
                                i = [];
                            return (
                                e.forEach(function (e) {
                                    var s = e.label,
                                        n = e.path,
                                        o = e.response,
                                        r = t._incrementalResults.get(s);
                                    if ((null == r && ((r = new Map()), t._incrementalResults.set(s, r)), -1 !== s.indexOf("$defer$"))) {
                                        var a = n.map(String).join("."),
                                            l = r.get(a);
                                        if (null == l) return (l = { kind: "response", responses: [e] }), void r.set(a, l);
                                        if ("response" === l.kind) return void l.responses.push(e);
                                        var u = l.placeholder;
                                        "defer" !== u.kind && w(!1), i.push(t._processDeferResponse(s, n, u, o));
                                    } else {
                                        var c = n.slice(0, -2).map(String).join("."),
                                            p = r.get(c);
                                        if (null == p) return (p = { kind: "response", responses: [e] }), void r.set(c, p);
                                        if ("response" === p.kind) return void p.responses.push(e);
                                        var d = p.placeholder;
                                        "stream" !== d.kind && w(!1), i.push(t._processStreamResponse(s, n, d, o));
                                    }
                                }),
                                i
                            );
                        }),
                        (t._processDeferResponse = function (e, t, i, s) {
                            var n,
                                o = i.selector.dataID,
                                r = this._actorIdentifier;
                            this._actorIdentifier = null !== (n = i.actorIdentifier) && void 0 !== n ? n : this._actorIdentifier;
                            var a = this._normalizeResponse(s, i.selector, i.typeName, { actorIdentifier: this._actorIdentifier, getDataID: this._getDataID, path: i.path, treatMissingFieldsAsNull: this._treatMissingFieldsAsNull, shouldProcessClientComponents: this._shouldProcessClientComponents });
                            this._getPublishQueueAndSaveActor().commitPayload(this._operation, a);
                            var l = this._source.get(o);
                            null == l && w(!1);
                            var u = l.fieldPayloads;
                            if (0 !== u.length) {
                                var c,
                                    p = { errors: null, fieldPayloads: u, incrementalPlaceholders: null, followupPayloads: null, source: I.create(), isFinal: !0 === (null === (c = s.extensions) || void 0 === c ? void 0 : c.is_final) };
                                this._getPublishQueueAndSaveActor().commitPayload(this._operation, p);
                            }
                            return (this._actorIdentifier = r), a;
                        }),
                        (t._processStreamResponse = function (e, t, i, s) {
                            var n = i.parentID,
                                r = i.node,
                                a = i.variables,
                                l = i.actorIdentifier,
                                u = this._actorIdentifier;
                            this._actorIdentifier = null != l ? l : this._actorIdentifier;
                            var c = r.selections[0];
                            (null == c || "LinkedField" !== c.kind || !0 !== c.plural) && w(!1);
                            var p = this._normalizeStreamItem(s, n, c, a, t, i.path),
                                d = p.fieldPayloads,
                                _ = p.itemID,
                                h = p.itemIndex,
                                f = p.prevIDs,
                                m = p.relayPayload,
                                v = p.storageKey;
                            if (
                                (this._getPublishQueueAndSaveActor().commitPayload(this._operation, m, function (e) {
                                    var t = e.get(n);
                                    if (null != t) {
                                        var i = t.getLinkedRecords(v);
                                        if (
                                            null != i &&
                                            i.length === f.length &&
                                            !i.some(function (e, t) {
                                                return f[t] !== (e && e.getDataID());
                                            })
                                        ) {
                                            var s = (0, o.default)(i);
                                            (s[h] = e.get(_)), t.setLinkedRecords(s, v);
                                        }
                                    }
                                }),
                                0 !== d.length)
                            ) {
                                var g = { errors: null, fieldPayloads: d, incrementalPlaceholders: null, followupPayloads: null, source: I.create(), isFinal: !1 };
                                this._getPublishQueueAndSaveActor().commitPayload(this._operation, g);
                            }
                            return (this._actorIdentifier = u), m;
                        }),
                        (t._normalizeStreamItem = function (e, t, i, s, n, r) {
                            var a,
                                l,
                                u,
                                c,
                                p = e.data;
                            "object" != typeof p && w(!1);
                            var d = null !== (a = i.alias) && void 0 !== a ? a : i.name,
                                _ = A(i, s),
                                f = this._source.get(t);
                            null == f && w(!1);
                            var m = f.record,
                                g = f.fieldPayloads,
                                y = v.getLinkedRecordIDs(m, _);
                            null == y && w(!1);
                            var I = n[n.length - 1],
                                b = parseInt(I, 10);
                            (b === I && b >= 0) || w(!1);
                            var S = null !== (l = i.concreteType) && void 0 !== l ? l : p[D];
                            "string" != typeof S && w(!1);
                            var k = null !== (u = null !== (c = this._getDataID(p, S)) && void 0 !== c ? c : null == y ? void 0 : y[b]) && void 0 !== u ? u : h(t, _, b);
                            "string" != typeof k && w(!1);
                            var O = P(i, k, s),
                                C = v.clone(m),
                                R = (0, o.default)(y);
                            return (R[b] = k), v.setLinkedRecordIDs(C, _, R), this._source.set(t, { record: C, fieldPayloads: g }), { fieldPayloads: g, itemID: k, itemIndex: b, prevIDs: y, relayPayload: this._normalizeResponse(e, O, S, { actorIdentifier: this._actorIdentifier, getDataID: this._getDataID, path: [].concat((0, o.default)(r), [d, String(b)]), treatMissingFieldsAsNull: this._treatMissingFieldsAsNull, shouldProcessClientComponents: this._shouldProcessClientComponents }), storageKey: _ };
                        }),
                        (t._scheduleAsyncStoreUpdate = function (e, t) {
                            var i = this;
                            this._completeFns.push(t),
                                null == this._asyncStoreUpdateDisposable &&
                                    (this._asyncStoreUpdateDisposable = e(function () {
                                        i._asyncStoreUpdateDisposable = null;
                                        var e = i._runPublishQueue();
                                        i._updateOperationTracker(e);
                                        var t,
                                            s = (0, n.default)(i._completeFns);
                                        try {
                                            for (s.s(); !(t = s.n()).done; ) {
                                                (0, t.value)();
                                            }
                                        } catch (e) {
                                            s.e(e);
                                        } finally {
                                            s.f();
                                        }
                                        i._completeFns = [];
                                    }));
                        }),
                        (t._updateOperationTracker = function (e) {
                            null != e && e.length > 0 && this._operationTracker.update(this._operation.request, new Set(e));
                        }),
                        (t._completeOperationTracker = function () {
                            this._operationTracker.complete(this._operation.request);
                        }),
                        (t._getPublishQueueAndSaveActor = function () {
                            return this._seenActors.add(this._actorIdentifier), this._getPublishQueue(this._actorIdentifier);
                        }),
                        (t._getActorsToVisit = function () {
                            return 0 === this._seenActors.size ? new Set([this._actorIdentifier]) : this._seenActors;
                        }),
                        (t._runPublishQueue = function (e) {
                            var t,
                                i = new Set(),
                                s = (0, n.default)(this._getActorsToVisit());
                            try {
                                for (s.s(); !(t = s.n()).done; ) {
                                    var o = t.value;
                                    this._getPublishQueue(o)
                                        .run(e)
                                        .forEach(function (e) {
                                            return i.add(e);
                                        });
                                }
                            } catch (e) {
                                s.e(e);
                            } finally {
                                s.f();
                            }
                            return Array.from(i);
                        }),
                        (t._retainData = function () {
                            var e,
                                t = (0, n.default)(this._getActorsToVisit());
                            try {
                                for (t.s(); !(e = t.n()).done; ) {
                                    var i = e.value;
                                    this._retainDisposables.has(i) || this._retainDisposables.set(i, this._getStore(i).retain(this._operation));
                                }
                            } catch (e) {
                                t.e(e);
                            } finally {
                                t.f();
                            }
                        }),
                        (t._disposeRetainedData = function () {
                            var e,
                                t = (0, n.default)(this._retainDisposables.values());
                            try {
                                for (t.s(); !(e = t.n()).done; ) {
                                    e.value.dispose();
                                }
                            } catch (e) {
                                t.e(e);
                            } finally {
                                t.f();
                            }
                            this._retainDisposables.clear();
                        }),
                        (t._expectOperationLoader = function () {
                            var e = this._operationLoader;
                            return e || w(!1), e;
                        }),
                        e
                    );
                })();
                function O(e) {
                    var t = e.incrementalPlaceholders;
                    null != t && 0 !== t.length && w(!1);
                }
                e.exports = {
                    execute: function (e) {
                        return new k(e);
                    },
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-58c6fc15.752afe1a.js.map
