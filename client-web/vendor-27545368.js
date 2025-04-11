window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-27545368"],
        {
            444891: (d, u, f) => {
                var e = f(896849),
                    c = f(585488).getRequest,
                    r = f(767408).createOperationDescriptor,
                    n = f(464711).createReaderSelector;
                f(826590);
                d.exports = function (d, u) {
                    var f = c(u.subscription);
                    if ("subscription" !== f.params.operationKind) throw new Error("requestSubscription: Must use Subscription operation");
                    var t = u.configs,
                        a = u.onCompleted,
                        o = u.onError,
                        i = u.onNext,
                        l = u.variables,
                        s = u.cacheConfig,
                        b = r(f, l, s),
                        _ = (t ? e.convert(t, f, null, u.updater) : u).updater;
                    return {
                        dispose: d.executeSubscription({ operation: b, updater: _ }).subscribe({
                            next: function (u) {
                                if (null != i) {
                                    var f,
                                        e,
                                        c,
                                        r,
                                        t = b.fragment;
                                    if (Array.isArray(u)) f = null === (e = u[0]) || void 0 === e || null === (c = e.extensions) || void 0 === c ? void 0 : c.__relay_subscription_root_id;
                                    else f = null === (r = u.extensions) || void 0 === r ? void 0 : r.__relay_subscription_root_id;
                                    "string" == typeof f && (t = n(t.node, f, t.variables, t.owner));
                                    var a = d.lookup(t).data;
                                    i(a);
                                }
                            },
                            error: o,
                            complete: a,
                        }).unsubscribe,
                    };
                };
            },
            677783: (d) => {
                d.exports = { ACTOR_CHANGE: "ActorChange", CATCH_FIELD: "CatchField", CONDITION: "Condition", CLIENT_COMPONENT: "ClientComponent", CLIENT_EDGE_TO_SERVER_OBJECT: "ClientEdgeToServerObject", CLIENT_EDGE_TO_CLIENT_OBJECT: "ClientEdgeToClientObject", CLIENT_EXTENSION: "ClientExtension", DEFER: "Defer", CONNECTION: "Connection", FRAGMENT: "Fragment", FRAGMENT_SPREAD: "FragmentSpread", INLINE_DATA_FRAGMENT_SPREAD: "InlineDataFragmentSpread", INLINE_DATA_FRAGMENT: "InlineDataFragment", INLINE_FRAGMENT: "InlineFragment", LINKED_FIELD: "LinkedField", LINKED_HANDLE: "LinkedHandle", LITERAL: "Literal", LIST_VALUE: "ListValue", LOCAL_ARGUMENT: "LocalArgument", MODULE_IMPORT: "ModuleImport", ALIASED_FRAGMENT_SPREAD: "AliasedFragmentSpread", ALIASED_INLINE_FRAGMENT_SPREAD: "AliasedInlineFragmentSpread", RELAY_RESOLVER: "RelayResolver", RELAY_LIVE_RESOLVER: "RelayLiveResolver", REQUIRED_FIELD: "RequiredField", OBJECT_VALUE: "ObjectValue", OPERATION: "Operation", REQUEST: "Request", ROOT_ARGUMENT: "RootArgument", SCALAR_FIELD: "ScalarField", SCALAR_HANDLE: "ScalarHandle", SPLIT_OPERATION: "SplitOperation", STREAM: "Stream", TYPE_DISCRIMINATOR: "TypeDiscriminator", UPDATABLE_QUERY: "UpdatableQuery", VARIABLE: "Variable" };
            },
            821270: (d) => {
                d.exports = { DEFAULT_HANDLE_KEY: "" };
            },
            770196: (d) => {
                function u(d, u, f) {
                    for (var e = arguments.length, c = new Array(e > 3 ? e - 3 : 0), r = 3; r < e; r++) c[r - 3] = arguments[r];
                    var n = 0,
                        t = f.replace(/%s/g, function () {
                            return String(c[n++]);
                        }),
                        a = new Error(t),
                        o = Object.assign(a, { name: u, messageFormat: f, messageParams: c, type: d, taalOpcodes: [2, 2] });
                    if (void 0 === o.stack)
                        try {
                            throw o;
                        } catch (d) {}
                    return o;
                }
                d.exports = {
                    create: function (d, f) {
                        for (var e = arguments.length, c = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) c[r - 2] = arguments[r];
                        return u.apply(void 0, ["error", d, f].concat(c));
                    },
                    createWarning: function (d, f) {
                        for (var e = arguments.length, c = new Array(e > 2 ? e - 2 : 0), r = 2; r < e; r++) c[r - 2] = arguments[r];
                        return u.apply(void 0, ["warn", d, f].concat(c));
                    },
                };
            },
            891362: (d) => {
                d.exports = { ENABLE_VARIABLE_CONNECTION_KEY: !1, ENABLE_RELAY_RESOLVERS: !1, ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION: !1, ENABLE_FRIENDLY_QUERY_NAME_GQL_URL: !1, ENABLE_LOAD_QUERY_REQUEST_DEDUPING: !0, ENABLE_DO_NOT_WRAP_LIVE_QUERY: !1, ENABLE_NOTIFY_SUBSCRIPTION: !1, BATCH_ASYNC_MODULE_UPDATES_FN: null, ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT: !1, MAX_DATA_ID_LENGTH: null, STRING_INTERN_LEVEL: 0, LOG_MISSING_RECORDS_IN_PROD: !1, ENABLE_LOOSE_SUBSCRIPTION_ATTRIBUTION: !1, ENABLE_OPERATION_TRACKER_OPTIMISTIC_UPDATES: !1, ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE: !1, ENABLE_FIELD_ERROR_HANDLING: !1, ENABLE_FIELD_ERROR_HANDLING_THROW_BY_DEFAULT: !1, ENABLE_FIELD_ERROR_HANDLING_CATCH_DIRECTIVE: !1, PROCESS_OPTIMISTIC_UPDATE_BEFORE_SUBSCRIPTION: !1, MARK_RESOLVER_VALUES_AS_CLEAN_AFTER_FRAGMENT_REREAD: !1 };
            },
            489143: (d) => {
                var u = {},
                    f = { stop: function () {} },
                    e = {
                        profile: function (d, e) {
                            var c = u[d];
                            if (c && c.length > 0) {
                                for (var r = [], n = c.length - 1; n >= 0; n--) {
                                    var t = c[n](d, e);
                                    r.unshift(t);
                                }
                                return {
                                    stop: function (d) {
                                        r.forEach(function (u) {
                                            return u(d);
                                        });
                                    },
                                };
                            }
                            return f;
                        },
                        attachProfileHandler: function (d, f) {
                            u.hasOwnProperty(d) || (u[d] = []), u[d].push(f);
                        },
                        detachProfileHandler: function (d, f) {
                            var e, c, r;
                            u.hasOwnProperty(d) && ((e = u[d]), (c = f), -1 !== (r = e.indexOf(c)) && e.splice(r, 1));
                        },
                    };
                d.exports = e;
            },
            582501: (d, u, f) => {
                var e = f(171600).default,
                    c = e(f(638636)),
                    r = e(f(226290)),
                    n = f(408122),
                    t = f(647677),
                    a = (function () {
                        function d() {
                            var d = this;
                            (0, r.default)(this, "_complete", !1),
                                (0, r.default)(this, "_events", []),
                                (0, r.default)(this, "_sinks", new Set()),
                                (0, r.default)(this, "_subscription", []),
                                (this._observable = n.create(function (u) {
                                    d._sinks.add(u);
                                    for (var f = d._events, e = 0; e < f.length && !u.closed; e++) {
                                        var c = f[e];
                                        switch (c.kind) {
                                            case "complete":
                                                u.complete();
                                                break;
                                            case "error":
                                                u.error(c.error);
                                                break;
                                            case "next":
                                                u.next(c.data);
                                                break;
                                            default:
                                                c.kind, t(!1);
                                        }
                                    }
                                    return function () {
                                        d._sinks.delete(u);
                                    };
                                }));
                        }
                        var u = d.prototype;
                        return (
                            (u.complete = function () {
                                !0 !== this._complete &&
                                    ((this._complete = !0),
                                    this._events.push({ kind: "complete" }),
                                    this._sinks.forEach(function (d) {
                                        return d.complete();
                                    }));
                            }),
                            (u.error = function (d) {
                                !0 !== this._complete &&
                                    ((this._complete = !0),
                                    this._events.push({ kind: "error", error: d }),
                                    this._sinks.forEach(function (u) {
                                        return u.error(d);
                                    }));
                            }),
                            (u.next = function (d) {
                                !0 !== this._complete &&
                                    (this._events.push({ kind: "next", data: d }),
                                    this._sinks.forEach(function (u) {
                                        return u.next(d);
                                    }));
                            }),
                            (u.subscribe = function (d) {
                                var u = this._observable.subscribe(d);
                                return this._subscription.push(u), u;
                            }),
                            (u.unsubscribe = function () {
                                var d,
                                    u = (0, c.default)(this._subscription);
                                try {
                                    for (u.s(); !(d = u.n()).done; ) {
                                        d.value.unsubscribe();
                                    }
                                } catch (d) {
                                    u.e(d);
                                } finally {
                                    u.f();
                                }
                                this._subscription = [];
                            }),
                            (u.getObserverCount = function () {
                                return this._sinks.size;
                            }),
                            d
                        );
                    })();
                d.exports = a;
            },
            274469: (d) => {
                var u = new Map(),
                    f = 1,
                    e = (function () {
                        for (var d = new Set(), u = 0; u < 10; ++u) d.add(u.toString());
                        return d;
                    })();
                d.exports = {
                    intern: function (d, c) {
                        if (null == c || d.length < c)
                            return (function (d) {
                                return ("\t" === d[0] && e.has(d[1])) || "\v" === d[0] ? "\v" + d : d;
                            })(d);
                        var r = u.get(d);
                        return null != r || ((r = "\t" + f++), u.set(d, r)), r;
                    },
                };
            },
            23727: (d, u, f) => {
                var e = (0, f(171600).default)(f(900814)),
                    c = f(108475),
                    r = c.getModuleComponentKey,
                    n = c.getModuleOperationKey;
                d.exports = function (d, u, f, c) {
                    var t = (0, e.default)({}, c);
                    return (t[r(d)] = f), (t[n(d)] = u), t;
                };
            },
            427225: (d) => {
                d.exports = function d(u) {
                    return null != (f = u) && (Array.isArray(f) || ("object" == typeof f && f.constructor === Object))
                        ? (Object.freeze(u),
                          Object.getOwnPropertyNames(u).forEach(function (f) {
                              var e = u[f];
                              e && "object" == typeof e && !Object.isFrozen(e) && d(e);
                          }),
                          u)
                        : u;
                    var f;
                };
            },
            91650: (d) => {
                var u = 1e5;
                d.exports = function () {
                    return u++;
                };
            },
            489834: (d, u, f) => {
                var e = f(464711),
                    c = e.getDataIDsFromFragment,
                    r = e.getSelector,
                    n = e.getVariablesFromFragment,
                    t = f(170089),
                    a = f(891362),
                    o = f(795178),
                    i = f(274469).intern;
                d.exports = function (d, u) {
                    var f = r(d, u),
                        e =
                            null == f
                                ? "null"
                                : "SingularReaderSelector" === f.kind
                                  ? f.owner.identifier
                                  : "[" +
                                    f.selectors
                                        .map(function (d) {
                                            return d.owner.identifier;
                                        })
                                        .join(",") +
                                    "]",
                        l = n(d, u),
                        s = c(d, u);
                    if (a.ENABLE_GETFRAGMENTIDENTIFIER_OPTIMIZATION) {
                        var b = void 0 === s ? "missing" : null == s ? "null" : Array.isArray(s) ? "[" + s.join(",") + "]" : s;
                        return (b = a.STRING_INTERN_LEVEL <= 1 ? b : i(b, a.MAX_DATA_ID_LENGTH)), e + "/" + d.name + "/" + (null == l || t(l) ? "{}" : JSON.stringify(o(l))) + "/" + b;
                    }
                    var _,
                        E = null !== (_ = JSON.stringify(s)) && void 0 !== _ ? _ : "missing";
                    return (E = a.STRING_INTERN_LEVEL <= 1 ? E : i(E, a.MAX_DATA_ID_LENGTH)), e + "/" + d.name + "/" + JSON.stringify(o(l)) + "/" + E;
                };
            },
            471677: (d, u, f) => {
                var e = f(677783),
                    c = e.REQUEST;
                e.SPLIT_OPERATION;
                d.exports = function (d) {
                    return d.kind === c ? d.operation : d;
                };
            },
            113998: (d, u, f) => {
                var e = f(792302),
                    c = f(647677);
                d.exports = function (d, u) {
                    var f,
                        r,
                        n = e(d, u),
                        t = n.refetchableRequest,
                        a = n.refetchMetadata,
                        o = a.connection;
                    null == o && c(!1);
                    var i = o.path,
                        l = (null !== (f = null === (r = d.metadata) || void 0 === r ? void 0 : r.connection) && void 0 !== f ? f : [])[0];
                    null == l && c(!1);
                    var s = a.identifierInfo;
                    return null != (null == s ? void 0 : s.identifierField) && "string" != typeof s.identifierField && c(!1), { connectionPathInFragmentData: i, identifierField: null == s ? void 0 : s.identifierField, paginationRequest: t, paginationMetadata: o, stream: !0 === l.stream };
                };
            },
            628114: (d, u, f) => {
                var e = f(171600).default,
                    c = e(f(226290)),
                    r = e(f(900814)),
                    n = f(647677);
                f(826590);
                d.exports = function (d, u, f, e, t, a) {
                    var o,
                        i = a.backward,
                        l = a.forward;
                    if ("backward" === d) {
                        var s;
                        (null == i || null == i.count || null == i.cursor) && n(!1);
                        var b = (0, r.default)((0, r.default)((0, r.default)({}, e), t), {}, ((s = {}), (0, c.default)(s, i.cursor, f), (0, c.default)(s, i.count, u), s));
                        return l && l.cursor && (b[l.cursor] = null), l && l.count && (b[l.count] = null), b;
                    }
                    (null == l || null == l.count || null == l.cursor) && n(!1);
                    var _ = (0, r.default)((0, r.default)((0, r.default)({}, e), t), {}, ((o = {}), (0, c.default)(o, l.cursor, f), (0, c.default)(o, l.count, u), o));
                    return i && i.cursor && (_[i.cursor] = null), i && i.count && (_[i.count] = null), _;
                };
            },
            219433: (d, u, f) => {
                var e = f(692519).getPromiseForActiveRequest;
                d.exports = function (d, u, f) {
                    var c,
                        r,
                        n = [],
                        t = e(d, f);
                    if (null != t) n = [f];
                    else {
                        var a,
                            o,
                            i = d.getOperationTracker().getPendingOperationsAffectingOwner(f);
                        (n = null !== (a = null == i ? void 0 : i.pendingOperations) && void 0 !== a ? a : []), (t = null !== (o = null == i ? void 0 : i.promise) && void 0 !== o ? o : null);
                    }
                    if (!t) return null;
                    var l =
                        null !==
                            (c =
                                null === (r = n) || void 0 === r
                                    ? void 0
                                    : r
                                          .map(function (d) {
                                              return d.node.params.name;
                                          })
                                          .join(",")) && void 0 !== c
                            ? c
                            : null;
                    (null != l && 0 !== l.length) || (l = "Unknown pending operation");
                    var s = u.name,
                        b = l === s ? "Relay(".concat(l, ")") : "Relay(".concat(l, ":").concat(s, ")");
                    return (t.displayName = b), d.__log({ name: "pendingoperation.found", fragment: u, fragmentOwner: f, pendingOperations: n }), { promise: t, pendingOperations: n };
                };
            },
            792302: (d, u, f) => {
                var e = f(647677);
                d.exports = function (d, u) {
                    var f, c;
                    !0 === (null === (f = d.metadata) || void 0 === f ? void 0 : f.plural) && e(!1);
                    var r = null === (c = d.metadata) || void 0 === c ? void 0 : c.refetch;
                    null == r && e(!1);
                    var n = r.operation.default ? r.operation.default : r.operation,
                        t = r.fragmentPathInResult;
                    "string" == typeof n && e(!1);
                    var a = r.identifierInfo;
                    return null != a && (null != a.identifierField && "string" != typeof a.identifierField && e(!1), null != a.identifierQueryVariableName && "string" != typeof a.identifierQueryVariableName && e(!1)), { fragmentRefPathInResponse: t, identifierInfo: a, refetchableRequest: n, refetchMetadata: r };
                };
            },
            985594: (d, u, f) => {
                var e = f(821270).DEFAULT_HANDLE_KEY,
                    c = f(647677);
                d.exports = function (d, u, f) {
                    return u && u !== e ? "__".concat(u, "_").concat(d) : (null == f && c(!1), "__".concat(f, "_").concat(d));
                };
            },
            956926: (d, u, f) => {
                var e = f(795178),
                    c = f(647677);
                d.exports = function (d, u) {
                    var f = null != d.cacheID ? d.cacheID : d.id;
                    return null == f && c(!1), f + JSON.stringify(e(u));
                };
            },
            487029: (d, u, f) => {
                var e = (0, f(171600).default)(f(638636)),
                    c = f(647677);
                d.exports = function (d, u) {
                    var f,
                        r = d,
                        n = (0, e.default)(u);
                    try {
                        for (n.s(); !(f = n.n()).done; ) {
                            var t = f.value;
                            if (null == r) return null;
                            "number" == typeof t ? (Array.isArray(r) || c(!1), (r = r[t])) : (("object" != typeof r || Array.isArray(r)) && c(!1), (r = r[t]));
                        }
                    } catch (d) {
                        n.e(d);
                    } finally {
                        n.f();
                    }
                    return r;
                };
            },
            927421: (d, u, f) => {
                var e = f(171600).default,
                    c = e(f(638636)),
                    r = f(507567),
                    n = e(f(891362));
                d.exports = function (d, u, f, e, t) {
                    var a,
                        o = (0, c.default)(f);
                    try {
                        for (o.s(); !(a = o.n()).done; ) {
                            var i = a.value;
                            d.relayFieldLogger({ kind: "relay_resolver.error", owner: i.field.owner, fieldPath: i.field.path, error: i.error });
                        }
                    } catch (d) {
                        o.e(d);
                    } finally {
                        o.f();
                    }
                    if (f.length > 0 && (n.default.ENABLE_FIELD_ERROR_HANDLING_THROW_BY_DEFAULT || t))
                        throw new r.RelayFieldError(
                            "Relay: Unexpected resolver exception",
                            f.map(function (d) {
                                return { message: d.error.message };
                            }),
                        );
                    if ((n.default.ENABLE_FIELD_ERROR_HANDLING || t) && null != e) {
                        if (null != e) {
                            var l,
                                s = (0, c.default)(e);
                            try {
                                for (s.s(); !(l = s.n()).done; ) {
                                    var b = l.value,
                                        _ = b.path,
                                        E = b.owner,
                                        p = b.error;
                                    d.relayFieldLogger({ kind: "relay_field_payload.error", owner: E, fieldPath: _, error: p });
                                }
                            } catch (d) {
                                s.e(d);
                            } finally {
                                s.f();
                            }
                        }
                        if (n.default.ENABLE_FIELD_ERROR_HANDLING_THROW_BY_DEFAULT || t)
                            throw new r.RelayFieldError(
                                "Relay: Unexpected response payload - this object includes an errors property in which you can access the underlying errors",
                                e.map(function (d) {
                                    return d.error;
                                }),
                            );
                    }
                    if (null != u)
                        switch (u.action) {
                            case "THROW":
                                var v = u.field,
                                    A = v.path,
                                    R = v.owner;
                                throw (d.relayFieldLogger({ kind: "missing_field.throw", owner: R, fieldPath: A }), new Error("Relay: Missing @required value at path '".concat(A, "' in '").concat(R, "'.")));
                            case "LOG":
                                u.fields.forEach(function (u) {
                                    var f = u.path,
                                        e = u.owner;
                                    d.relayFieldLogger({ kind: "missing_field.log", owner: e, fieldPath: f });
                                });
                                break;
                            default:
                                u.action;
                        }
                };
            },
            170089: (d) => {
                var u = Object.prototype.hasOwnProperty;
                d.exports = function (d) {
                    for (var f in d) if (u.call(d, f)) return !1;
                    return !0;
                };
            },
            785621: (d) => {
                d.exports = function (d) {
                    return null != d && "object" == typeof d && "function" == typeof d.then;
                };
            },
            763131: (d) => {
                d.exports = function (d, u) {
                    return d === u && (null === d || "object" != typeof d);
                };
            },
            555398: (d) => {
                function u(d, f, e) {
                    if (d === f || "object" != typeof d || !d || (d.constructor !== Object && !Array.isArray(d)) || "object" != typeof f || !f || (f.constructor !== Object && !Array.isArray(f))) return f;
                    var c = !1,
                        r = Array.isArray(d) ? d : null,
                        n = Array.isArray(f) ? f : null;
                    if (r && n) {
                        var t = e && !Object.isFrozen(n);
                        c =
                            n.reduce(function (d, f, e) {
                                var c = u(r[e], f, t);
                                return c !== n[e] && t && (n[e] = c), d && c === r[e];
                            }, !0) && r.length === n.length;
                    } else if (!r && !n) {
                        var a = d,
                            o = f,
                            i = Object.keys(a),
                            l = Object.keys(o),
                            s = e && !Object.isFrozen(o);
                        c =
                            l.reduce(function (d, f) {
                                var e = u(a[f], o[f], s);
                                return e !== o[f] && s && (o[f] = e), d && e === a[f];
                            }, !0) && i.length === l.length;
                    }
                    return c ? d : f;
                }
                d.exports = function (d, f) {
                    return u(d, f, !0);
                };
            },
            570469: (d, u, f) => {
                d.exports = function (d) {
                    var u = void 0 !== f.g ? f.g : "undefined" != typeof window ? window : void 0,
                        e = u && u.__RELAY_DEVTOOLS_HOOK__;
                    e && e.registerEnvironment(d);
                };
            },
            501832: (d) => {
                var u = Promise.resolve();
                function f(d) {
                    setTimeout(function () {
                        throw d;
                    }, 0);
                }
                d.exports = function (d) {
                    u.then(d).catch(f);
                };
            },
            922532: (d) => {
                d.exports = function (d) {
                    "object" != typeof d || null == d || (!Array.isArray(d) && d.constructor !== Object) || Object.freeze(d);
                };
            },
            795178: (d) => {
                d.exports = function d(u) {
                    if (!u || "object" != typeof u) return u;
                    if (Array.isArray(u)) return u.map(d);
                    for (var f = Object.keys(u).sort(), e = {}, c = 0; c < f.length; c++) e[f[c]] = d(u[f[c]]);
                    return e;
                };
            },
            44352: (d) => {
                var u,
                    f,
                    e = "undefined" != typeof window && "function" == typeof (null === (u = window) || void 0 === u || null === (f = u.performance) || void 0 === f ? void 0 : f.now);
                function c() {
                    return e ? window.performance.now() : Date.now();
                }
                d.exports = function (d) {
                    var u = c(),
                        f = d();
                    return [c() - u, f];
                };
            },
            948598: (d, u, f) => {
                f(193860), f(826590);
                var e = "function" == typeof WeakMap ? new WeakMap() : new Map();
                function c(d, u) {
                    if (null != u) {
                        var f = {};
                        return (
                            Object.assign(f, d),
                            Object.keys(u).forEach(function (d) {
                                var c = u[d].get,
                                    r = c();
                                if (e.has(c)) {
                                    var n = e.get(c);
                                    0, (f[d] = n);
                                } else e.set(c, r), (f[d] = r);
                            }),
                            f
                        );
                    }
                    return d;
                }
                (c.tests_only_resetDebugCache = void 0), (d.exports = c);
            },
            24949: (d, u) => {
                function f(d, u) {
                    return d === u;
                }
                function e(d) {
                    var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : f,
                        e = null,
                        c = null;
                    return function () {
                        return (
                            (function (d, u, f) {
                                if (null === u || null === f || u.length !== f.length) return !1;
                                for (var e = u.length, c = 0; c < e; c++) if (!d(u[c], f[c])) return !1;
                                return !0;
                            })(u, e, arguments) || (c = d.apply(null, arguments)),
                            (e = arguments),
                            c
                        );
                    };
                }
                function c(d) {
                    for (var u = arguments.length, f = Array(u > 1 ? u - 1 : 0), c = 1; c < u; c++) f[c - 1] = arguments[c];
                    return function () {
                        for (var u = arguments.length, c = Array(u), r = 0; r < u; r++) c[r] = arguments[r];
                        var n = 0,
                            t = c.pop(),
                            a = (function (d) {
                                var u = Array.isArray(d[0]) ? d[0] : d;
                                if (
                                    !u.every(function (d) {
                                        return "function" == typeof d;
                                    })
                                ) {
                                    var f = u
                                        .map(function (d) {
                                            return typeof d;
                                        })
                                        .join(", ");
                                    throw new Error("Selector creators expect all input-selectors to be functions, instead received the following types: [" + f + "]");
                                }
                                return u;
                            })(c),
                            o = d.apply(
                                void 0,
                                [
                                    function () {
                                        return n++, t.apply(null, arguments);
                                    },
                                ].concat(f),
                            ),
                            i = e(function () {
                                for (var d = [], u = a.length, f = 0; f < u; f++) d.push(a[f].apply(null, arguments));
                                return o.apply(null, d);
                            });
                        return (
                            (i.resultFunc = t),
                            (i.recomputations = function () {
                                return n;
                            }),
                            (i.resetRecomputations = function () {
                                return (n = 0);
                            }),
                            i
                        );
                    };
                }
                (u.PW = e),
                    (u.wN = c),
                    (u.zB = function (d) {
                        var u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r;
                        if ("object" != typeof d) throw new Error("createStructuredSelector expects first argument to be an object where each property is a selector, instead received a " + typeof d);
                        var f = Object.keys(d);
                        return u(
                            f.map(function (u) {
                                return d[u];
                            }),
                            function () {
                                for (var d = arguments.length, u = Array(d), e = 0; e < d; e++) u[e] = arguments[e];
                                return u.reduce(function (d, u, e) {
                                    return (d[f[e]] = u), d;
                                }, {});
                            },
                        );
                    });
                var r = (u.P1 = c(e));
            },
            849938: (d, u, f) => {
                (u.Qj = void 0),
                    (u.Qc = function (d, u) {
                        var f = u && u.assetType ? u.assetType : "svg",
                            e =
                                u && u.buildUrl
                                    ? u.buildUrl
                                    : function (d, u) {
                                          return "png" === u ? "https://twemoji.maxcdn.com/v/latest/72x72/" + d + ".png" : "https://twemoji.maxcdn.com/v/latest/svg/" + d + ".svg";
                                      },
                            c = [];
                        r.default.lastIndex = 0;
                        for (;;) {
                            var t = r.default.exec(d);
                            if (!t) break;
                            var a = t[0],
                                l = i(o(a)).join("-");
                            c.push({ url: l ? e(l, f) : "", indices: [t.index, r.default.lastIndex], text: a, type: n });
                        }
                        return c;
                    }),
                    (u.w1 = i);
                var e,
                    c = f(181216),
                    r = (e = c) && e.__esModule ? e : { default: e };
                var n = (u.Qj = "emoji");
                var t = /\uFE0F/g,
                    a = String.fromCharCode(8205),
                    o = function (d) {
                        return d.indexOf(a) < 0 ? d.replace(t, "") : d;
                    };
                function i(d) {
                    for (var u = [], f = 0, e = 0, c = 0; c < d.length; ) (f = d.charCodeAt(c++)), e ? (u.push((65536 + ((e - 55296) << 10) + (f - 56320)).toString(16)), (e = 0)) : f > 55296 && f <= 56319 ? (e = f) : u.push(f.toString(16));
                    return u;
                }
            },
            181216: (d, u) => {
                Object.defineProperty(u, "__esModule", { value: !0 }),
                    (u.default =
                        /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83e\udef1\ud83c\udffb\u200d\ud83e\udef2\ud83c[\udffc-\udfff]|\ud83e\udef1\ud83c\udffc\u200d\ud83e\udef2\ud83c[\udffb\udffd-\udfff]|\ud83e\udef1\ud83c\udffd\u200d\ud83e\udef2\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\udef1\ud83c\udffe\u200d\ud83e\udef2\ud83c[\udffb-\udffd\udfff]|\ud83e\udef1\ud83c\udfff\u200d\ud83e\udef2\ud83c[\udffb-\udffe]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83e\udd1d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91]|\ud83e\udd1d)|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b|\ud83d\udc26\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd\udec3-\udec5\udef0-\udef8]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udedc-\udedf\udeeb\udeec\udef4-\udefc\udfe0-\udfeb\udff0]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78-\uddb4\uddb7\uddba\uddbc-\uddcc\uddd0\uddde-\uddff\ude70-\ude7c\ude80-\ude88\ude90-\udebd\udebf-\udec2\udece-\udedb\udee0-\udee8]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g);
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-27545368.b1c27dda.js.map
