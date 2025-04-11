window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-85aa29ea"],
        {
            286496: (e, r, n) => {
                n.d(r, { X: () => a });
                var t = n(209256);
                const i = { notify() {}, get: () => [] };
                function a(e, r) {
                    let n,
                        a = i,
                        o = 0,
                        u = !1;
                    function s() {
                        f.onStateChange && f.onStateChange();
                    }
                    function l() {
                        o++,
                            n ||
                                ((n = r ? r.addNestedSub(s) : e.subscribe(s)),
                                (a = (function () {
                                    const e = (0, t.k)();
                                    let r = null,
                                        n = null;
                                    return {
                                        clear() {
                                            (r = null), (n = null);
                                        },
                                        notify() {
                                            e(() => {
                                                let e = r;
                                                for (; e; ) e.callback(), (e = e.next);
                                            });
                                        },
                                        get() {
                                            let e = [],
                                                n = r;
                                            for (; n; ) e.push(n), (n = n.next);
                                            return e;
                                        },
                                        subscribe(e) {
                                            let t = !0,
                                                i = (n = { callback: e, next: null, prev: n });
                                            return (
                                                i.prev ? (i.prev.next = i) : (r = i),
                                                function () {
                                                    t && null !== r && ((t = !1), i.next ? (i.next.prev = i.prev) : (n = i.prev), i.prev ? (i.prev.next = i.next) : (r = i.next));
                                                }
                                            );
                                        },
                                    };
                                })()));
                    }
                    function c() {
                        o--, n && 0 === o && (n(), (n = void 0), a.clear(), (a = i));
                    }
                    const f = {
                        addNestedSub: function (e) {
                            l();
                            const r = a.subscribe(e);
                            let n = !1;
                            return () => {
                                n || ((n = !0), r(), c());
                            };
                        },
                        notifyNestedSubs: function () {
                            a.notify();
                        },
                        handleChangeWrapper: s,
                        isSubscribed: function () {
                            return u;
                        },
                        trySubscribe: function () {
                            u || ((u = !0), l());
                        },
                        tryUnsubscribe: function () {
                            u && ((u = !1), c());
                        },
                        getListeners: () => a,
                    };
                    return f;
                }
            },
            209256: (e, r, n) => {
                n.d(r, { F: () => i, k: () => a });
                let t = function (e) {
                    e();
                };
                const i = (e) => (t = e),
                    a = () => t;
            },
            463480: (e, r, n) => {
                function t(e, r) {
                    const n = {};
                    for (const t in e) {
                        const i = e[t];
                        "function" == typeof i && (n[t] = (...e) => r(i(...e)));
                    }
                    return n;
                }
                n.d(r, { Z: () => t });
            },
            471679: (e, r, n) => {
                n.d(r, { m: () => t.unstable_batchedUpdates });
                var t = n(928316);
            },
            235067: (e, r, n) => {
                function t(e, r) {
                    return e === r ? 0 !== e || 0 !== r || 1 / e == 1 / r : e != e && r != r;
                }
                function i(e, r) {
                    if (t(e, r)) return !0;
                    if ("object" != typeof e || null === e || "object" != typeof r || null === r) return !1;
                    const n = Object.keys(e),
                        i = Object.keys(r);
                    if (n.length !== i.length) return !1;
                    for (let i = 0; i < n.length; i++) if (!Object.prototype.hasOwnProperty.call(r, n[i]) || !t(e[n[i]], r[n[i]])) return !1;
                    return !0;
                }
                n.d(r, { Z: () => i });
            },
            501881: (e, r, n) => {
                n.d(r, { L: () => i });
                var t = n(202784);
                const i = !("undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement) ? t.useLayoutEffect : t.useEffect;
            },
            876726: (e, r, n) => {
                n.d(r, { B: () => t });
                const t = () => {
                    throw new Error("uSES not initialized!");
                };
            },
            88359: (e, r) => {
                var n,
                    t = Symbol.for("react.element"),
                    i = Symbol.for("react.portal"),
                    a = Symbol.for("react.fragment"),
                    o = Symbol.for("react.strict_mode"),
                    u = Symbol.for("react.profiler"),
                    s = Symbol.for("react.provider"),
                    l = Symbol.for("react.context"),
                    c = Symbol.for("react.server_context"),
                    f = Symbol.for("react.forward_ref"),
                    d = Symbol.for("react.suspense"),
                    v = Symbol.for("react.suspense_list"),
                    p = Symbol.for("react.memo"),
                    h = Symbol.for("react.lazy"),
                    m = Symbol.for("react.offscreen");
                /**
                 * @license React
                 * react-is.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */ function y(e) {
                    if ("object" == typeof e && null !== e) {
                        var r = e.$$typeof;
                        switch (r) {
                            case t:
                                switch ((e = e.type)) {
                                    case a:
                                    case u:
                                    case o:
                                    case d:
                                    case v:
                                        return e;
                                    default:
                                        switch ((e = e && e.$$typeof)) {
                                            case c:
                                            case l:
                                            case f:
                                            case h:
                                            case p:
                                            case s:
                                                return e;
                                            default:
                                                return r;
                                        }
                                }
                            case i:
                                return r;
                        }
                    }
                }
                (n = Symbol.for("react.module.reference")),
                    (r.isContextConsumer = function (e) {
                        return y(e) === l;
                    });
            },
            372973: (e, r, n) => {
                e.exports = n(88359);
            },
            23988: (e, r, n) => {
                var t = n(202784),
                    i = n(703383).__internal.createRelayContext;
                e.exports = i(t);
            },
            566504: (e, r, n) => {
                var t = n(647677),
                    i = (function () {
                        function e(e) {
                            (this._capacity = e), this._capacity > 0 || t(!1), (this._map = new Map());
                        }
                        var r = e.prototype;
                        return (
                            (r.set = function (e, r) {
                                if ((this._map.delete(e), this._map.set(e, r), this._map.size > this._capacity)) {
                                    var n = this._map.keys().next();
                                    n.done || this._map.delete(n.value);
                                }
                            }),
                            (r.get = function (e) {
                                var r = this._map.get(e);
                                return null != r && (this._map.delete(e), this._map.set(e, r)), r;
                            }),
                            (r.has = function (e) {
                                return this._map.has(e);
                            }),
                            (r.delete = function (e) {
                                this._map.delete(e);
                            }),
                            (r.size = function () {
                                return this._map.size;
                            }),
                            (r.capacity = function () {
                                return this._capacity - this._map.size;
                            }),
                            (r.clear = function () {
                                this._map.clear();
                            }),
                            e
                        );
                    })();
                e.exports = {
                    create: function (e) {
                        return new i(e);
                    },
                };
            },
            982317: (e, r, n) => {
                var t = n(202784).createContext({
                    wrapPrepareQueryResource: function (e) {
                        return e();
                    },
                });
                e.exports = t;
            },
            993801: (e, r, n) => {
                var t = n(171600).default,
                    i = t(n(900814)),
                    a = t(n(226290)),
                    o = n(566504),
                    u = n(871331),
                    s = n(647677),
                    l = n(703383).isPromise,
                    c = (n(826590), "store-or-network"),
                    f = "store-and-network",
                    d = "function" == typeof WeakMap;
                function v(e) {
                    return void 0 !== e.request.node.params.metadata.live;
                }
                function p(e, r, n, t, i) {
                    var a = null != n ? n : v(r) ? f : c,
                        o = null != t ? t : e.UNSTABLE_getDefaultRenderPolicy(),
                        u = "".concat(a, "-").concat(o, "-").concat(r.request.identifier);
                    return null != i ? "".concat(u, "-").concat(i) : u;
                }
                function h(e, r) {
                    var n = { __id: e.fragment.dataID, __fragments: (0, a.default)({}, e.fragment.node.name, e.request.variables), __fragmentOwner: e.request };
                    return { cacheIdentifier: r, fragmentNode: e.request.node.fragment, fragmentRef: n, operation: e };
                }
                var m = 2e5;
                function y(e, r, n, t, i, a) {
                    var o = v(r),
                        s = t,
                        l = i,
                        c = new u(function (e) {
                            var n = e.retain(r);
                            return {
                                dispose: function () {
                                    o && null != l && l.unsubscribe(), n.dispose(), a(f);
                                },
                            };
                        }),
                        f = {
                            cacheIdentifier: e,
                            id: m++,
                            processedPayloadsCount: 0,
                            operationAvailability: n,
                            getValue: function () {
                                return s;
                            },
                            setValue: function (e) {
                                s = e;
                            },
                            setNetworkSubscription: function (e) {
                                o && null != l && l.unsubscribe(), (l = e);
                            },
                            temporaryRetain: function (e) {
                                return c.temporaryRetain(e);
                            },
                            permanentRetain: function (e) {
                                return c.permanentRetain(e);
                            },
                            releaseTemporaryRetain: function () {
                                c.releaseTemporaryRetain();
                            },
                        };
                    return f;
                }
                var _ = (function () {
                    function e(e) {
                        var r = this;
                        (0, a.default)(this, "_clearCacheEntry", function (e) {
                            r._cache.delete(e.cacheIdentifier);
                        }),
                            (this._environment = e),
                            (this._cache = o.create(1e3));
                    }
                    var r = e.prototype;
                    return (
                        (r.prepare = function (e, r, n, t, i, a, o) {
                            var u = p(this._environment, e, n, t, a);
                            return this.prepareWithIdentifier(u, e, r, n, t, i, o);
                        }),
                        (r.prepareWithIdentifier = function (e, r, n, t, a, o, u) {
                            var s = this._environment,
                                d = null != t ? t : v(r) ? f : c,
                                p = null != a ? a : s.UNSTABLE_getDefaultRenderPolicy(),
                                h = this._cache.get(e),
                                m = null,
                                y = null != h;
                            null == h &&
                                (h = this._fetchAndSaveQuery(
                                    e,
                                    r,
                                    n,
                                    d,
                                    p,
                                    u,
                                    (0, i.default)(
                                        (0, i.default)({}, o),
                                        {},
                                        {
                                            unsubscribe: function (e) {
                                                null != m && m.dispose();
                                                var r = null == o ? void 0 : o.unsubscribe;
                                                r && r(e);
                                            },
                                        },
                                    ),
                                )),
                                (m = h.temporaryRetain(s));
                            var _ = h.getValue();
                            if (l(_)) throw (s.__log({ name: "suspense.query", fetchPolicy: d, isPromiseCached: y, operation: r, queryAvailability: h.operationAvailability, renderPolicy: p }), _);
                            if (_ instanceof Error) throw _;
                            return _;
                        }),
                        (r.retain = function (e, r) {
                            var n = this._environment,
                                t = e.cacheIdentifier,
                                i = e.operation,
                                a = this._getOrCreateCacheEntry(t, i, null, e, null),
                                o = a.permanentRetain(n);
                            return (
                                n.__log({ name: "queryresource.retain", profilerContext: r, resourceID: a.id }),
                                {
                                    dispose: function () {
                                        o.dispose();
                                    },
                                }
                            );
                        }),
                        (r.releaseTemporaryRetain = function (e) {
                            var r = this._cache.get(e.cacheIdentifier);
                            null != r && r.releaseTemporaryRetain();
                        }),
                        (r.TESTS_ONLY__getCacheEntry = function (e, r, n, t) {
                            var i = p(this._environment, e, r, n, t);
                            return this._cache.get(i);
                        }),
                        (r._getOrCreateCacheEntry = function (e, r, n, t, i) {
                            var a = this._cache.get(e);
                            return null == a && ((a = y(e, r, n, t, i, this._clearCacheEntry)), this._cache.set(e, a)), a;
                        }),
                        (r._fetchAndSaveQuery = function (e, r, n, t, a, o, u) {
                            var l,
                                c,
                                f = this,
                                d = this._environment,
                                p = d.check(r),
                                m = p.status,
                                _ = "available" === m,
                                g = _ || ("partial" === a && "stale" !== m),
                                b = function () {};
                            switch (t) {
                                case "store-only":
                                    (l = !1), (c = !0);
                                    break;
                                case "store-or-network":
                                    (l = !_), (c = g);
                                    break;
                                case "store-and-network":
                                    (l = !0), (c = g);
                                    break;
                                default:
                                    (l = !0), (c = !1);
                            }
                            if (c) {
                                var R = h(r, e),
                                    E = y(e, r, p, R, null, this._clearCacheEntry);
                                this._cache.set(e, E);
                            }
                            if (l) {
                                var k,
                                    S = h(r, e);
                                n.subscribe({
                                    start: function (n) {
                                        k = n;
                                        var t = f._cache.get(e);
                                        t && t.setNetworkSubscription(k);
                                        var a = null == u ? void 0 : u.start;
                                        a &&
                                            a(
                                                (0, i.default)(
                                                    (0, i.default)({}, n),
                                                    {},
                                                    {
                                                        unsubscribe: function () {
                                                            v(r) && n.unsubscribe();
                                                        },
                                                    },
                                                ),
                                            );
                                    },
                                    next: function () {
                                        var n = f._getOrCreateCacheEntry(e, r, p, S, k);
                                        (n.processedPayloadsCount += 1), n.setValue(S), b();
                                        var t = null == u ? void 0 : u.next;
                                        null != t && t(d.lookup(r.fragment));
                                    },
                                    error: function (n) {
                                        var t = f._getOrCreateCacheEntry(e, r, p, n, k);
                                        0 === t.processedPayloadsCount && t.setValue(n), b(), (k = null), t.setNetworkSubscription(null);
                                        var i = null == u ? void 0 : u.error;
                                        i && i(n);
                                    },
                                    complete: function () {
                                        b(), (k = null);
                                        var r = f._cache.get(e);
                                        r && r.setNetworkSubscription(null);
                                        var n = null == u ? void 0 : u.complete;
                                        n && n();
                                    },
                                    unsubscribe: null == u ? void 0 : u.unsubscribe,
                                });
                                var C = this._cache.get(e);
                                if (!C) {
                                    var w = new Promise(function (e) {
                                        b = e;
                                    });
                                    (w.displayName = "Relay(" + r.fragment.node.name + ")"), (C = y(e, r, p, w, k, this._clearCacheEntry)), this._cache.set(e, C);
                                }
                            } else {
                                var x = null == u ? void 0 : u.complete;
                                x && x();
                            }
                            var D = this._cache.get(e);
                            return null == D && s(!1), d.__log({ name: "queryresource.fetch", resourceID: D.id, operation: r, profilerContext: o, fetchPolicy: t, renderPolicy: a, queryAvailability: p, shouldFetch: l }), D;
                        }),
                        e
                    );
                })();
                function g(e) {
                    return new _(e);
                }
                var b = d ? new WeakMap() : new Map();
                e.exports = {
                    createQueryResource: g,
                    getQueryResourceForEnvironment: function (e) {
                        var r = b.get(e);
                        if (r) return r;
                        var n = g(e);
                        return b.set(e, n), n;
                    },
                    getQueryCacheIdentifier: p,
                };
            },
            490434: (e, r, n) => {
                var t = n(23988),
                    i = n(202784),
                    a = i.useMemo;
                e.exports = function (e) {
                    var r = e.children,
                        n = e.environment,
                        o = e.getEnvironmentForActor,
                        u = a(
                            function () {
                                return { environment: n, getEnvironmentForActor: o };
                            },
                            [n, o],
                        );
                    return i.createElement(t.Provider, { value: u }, r);
                };
            },
            871331: (e, r, n) => {
                var t = (0, n(171600).default)(n(226290)),
                    i =
                        (n(826590),
                        (function () {
                            function e(e) {
                                var r = this;
                                (0, t.default)(this, "_retainCount", 0),
                                    (0, t.default)(this, "_retainDisposable", null),
                                    (0, t.default)(this, "_releaseTemporaryRetain", null),
                                    (this._retain = function (n) {
                                        return (
                                            r._retainCount++,
                                            1 === r._retainCount && (r._retainDisposable = e(n)),
                                            {
                                                dispose: function () {
                                                    (r._retainCount = Math.max(0, r._retainCount - 1)), 0 === r._retainCount && null != r._retainDisposable && (r._retainDisposable.dispose(), (r._retainDisposable = null));
                                                },
                                            }
                                        );
                                    });
                            }
                            var r = e.prototype;
                            return (
                                (r.temporaryRetain = function (e) {
                                    var r,
                                        n = this;
                                    if (e.isServer()) return { dispose: function () {} };
                                    var t = this._retain(e),
                                        i = null,
                                        a = function () {
                                            clearTimeout(i), (i = null), (n._releaseTemporaryRetain = null), t.dispose();
                                        };
                                    return (
                                        (i = setTimeout(a, 3e5)),
                                        null === (r = this._releaseTemporaryRetain) || void 0 === r || r.call(this),
                                        (this._releaseTemporaryRetain = a),
                                        {
                                            dispose: function () {
                                                var e;
                                                null === (e = n._releaseTemporaryRetain) || void 0 === e || e.call(n);
                                            },
                                        }
                                    );
                                }),
                                (r.permanentRetain = function (e) {
                                    var r = this._retain(e);
                                    return this.releaseTemporaryRetain(), r;
                                }),
                                (r.releaseTemporaryRetain = function () {
                                    var e;
                                    null === (e = this._releaseTemporaryRetain) || void 0 === e || e.call(this), (this._releaseTemporaryRetain = null);
                                }),
                                (r.getRetainCount = function () {
                                    return this._retainCount;
                                }),
                                e
                            );
                        })());
                e.exports = i;
            },
            606161: (e, r, n) => {
                var t = (0, n(171600).default)(n(900814)),
                    i = n(647677),
                    a = n(202784),
                    o = n(703383),
                    u = o.__internal.fetchQueryDeduped,
                    s = o.Observable,
                    l = o.PreloadableQueryRegistry,
                    c = o.RelayFeatureFlags,
                    f = o.ReplaySubject,
                    d = o.createOperationDescriptor,
                    v = o.getRequest,
                    p = o.getRequestIdentifier,
                    h = (n(826590), null),
                    m = 100001;
                e.exports = {
                    loadQuery: function (e, r, n, o, h) {
                        var y, _, g;
                        null === (y = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === y || null === (_ = y.ReactCurrentDispatcher) || void 0 === _ || _.current, m++;
                        var b,
                            R,
                            E,
                            k,
                            S,
                            C,
                            w = null !== (g = null == o ? void 0 : o.fetchPolicy) && void 0 !== g ? g : "store-or-network",
                            x = (0, t.default)((0, t.default)({}, null == o ? void 0 : o.networkCacheConfig), {}, { force: !0 }),
                            D = !1,
                            F = function (r, n) {
                                return (D = !0), e.executeWithSource({ operation: r, source: n });
                            },
                            P = new f(),
                            N = s.create(function (e) {
                                return P.subscribe(e);
                            }),
                            O = null,
                            I = !1,
                            L = function (r) {
                                var t;
                                I = !0;
                                var i = new f();
                                if (!0 === c.ENABLE_LOAD_QUERY_REQUEST_DEDUPING) {
                                    var a = "raw-network-request-" + p(r, n);
                                    t = u(e, a, function () {
                                        return e.getNetwork().execute(r, n, x);
                                    });
                                } else {
                                    t = e.getNetwork().execute(r, n, x);
                                }
                                var o = t.subscribe({
                                    error: function (e) {
                                        (O = e), i.error(e);
                                    },
                                    next: function (e) {
                                        i.next(e);
                                    },
                                    complete: function () {
                                        i.complete();
                                    },
                                }).unsubscribe;
                                return (
                                    (R = o),
                                    s.create(function (e) {
                                        var r = i.subscribe(e);
                                        return function () {
                                            r.unsubscribe(), R();
                                        };
                                    })
                                );
                            },
                            T = function (r, n) {
                                !0 === c.ENABLE_LOAD_QUERY_REQUEST_DEDUPING && (I = !0);
                                var t = u(e, r.request.identifier, n).subscribe({
                                    error: function (e) {
                                        P.error(e);
                                    },
                                    next: function (e) {
                                        P.next(e);
                                    },
                                    complete: function () {
                                        P.complete();
                                    },
                                });
                                E = t.unsubscribe;
                            },
                            A = function (r) {
                                var t = d(r, n, x);
                                ((b = e.retain(t)), "store-only" !== w) &&
                                    ("store-or-network" !== w || "available" !== e.check(t).status) &&
                                    T(t, function () {
                                        var e = L(r.params);
                                        return F(t, e);
                                    });
                            };
                        if ("PreloadableConcreteRequest" === r.kind) {
                            null === (C = (k = r.params).id) && i(!1);
                            var q = l.get(C);
                            if (null != q) A(q);
                            else {
                                var Q = "store-only" === w ? null : L(k),
                                    U = l.onLoad(C, function (r) {
                                        S();
                                        var t = d(r, n, x);
                                        (b = e.retain(t)),
                                            null != Q &&
                                                T(t, function () {
                                                    return F(t, Q);
                                                });
                                    });
                                S = U.dispose;
                            }
                        } else {
                            var M = v(r);
                            (C = null != (k = M.params).cacheID ? k.cacheID : k.id), A(M);
                        }
                        var B = !1,
                            W = !1,
                            z = !1,
                            V = function () {
                                W || (b && b.dispose(), (W = !0));
                            },
                            j = function () {
                                z || (D ? E && E() : R && R(), S && S(), (z = !0));
                            };
                        return {
                            kind: "PreloadedQuery",
                            environment: e,
                            environmentProviderOptions: h,
                            dispose: function () {
                                B || (V(), j(), (B = !0));
                            },
                            releaseQuery: V,
                            cancelNetworkRequest: j,
                            fetchKey: m,
                            id: C,
                            get isDisposed() {
                                return B || W;
                            },
                            get networkError() {
                                return O;
                            },
                            name: k.name,
                            networkCacheConfig: x,
                            fetchPolicy: w,
                            source: I ? N : void 0,
                            variables: n,
                        };
                    },
                    useTrackLoadQueryInRender: function () {
                        var e, r;
                        null === h && (h = null === (e = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === e || null === (r = e.ReactCurrentDispatcher) || void 0 === r ? void 0 : r.current);
                    },
                };
            },
            61383: (e, r, n) => {
                var t = n(623380),
                    i = n(202784),
                    a = i.useCallback,
                    o = i.useEffect;
                e.exports = function () {
                    var e = t(null),
                        r = t(!1),
                        n = a(function () {
                            null != e.current && (e.current.unsubscribe(), (e.current = null)), (r.current = !1);
                        }, []),
                        i = a(function (n) {
                            (e.current = n), (r.current = !0);
                        }, []),
                        u = a(function () {
                            (e.current = null), (r.current = !1);
                        }, []);
                    return (
                        o(
                            function () {
                                return n;
                            },
                            [n],
                        ),
                        { isFetchingRef: r, startFetch: i, disposeFetch: n, completeFetch: u }
                    );
                };
            },
            277660: (e, r, n) => {
                var t = n(606161).useTrackLoadQueryInRender,
                    i = n(799384),
                    a = n(400023),
                    o = (n(202784).useDebugValue, n(703383).getFragment);
                e.exports = function (e, r) {
                    t();
                    var n = o(e);
                    return a(n, "first argument of useFragment()"), i(n, r, "useFragment()");
                };
            },
            799384: (e, r, n) => {
                var t = n(171600).default,
                    i = t(n(900814)),
                    a = t(n(638636)),
                    o = t(n(373408)),
                    u = n(993801).getQueryResourceForEnvironment,
                    s = n(437429),
                    l = n(647677),
                    c = n(202784),
                    f = (c.useDebugValue, c.useEffect),
                    d = c.useMemo,
                    v = c.useRef,
                    p = c.useState,
                    h = n(703383),
                    m = h.__internal,
                    y = m.fetchQuery,
                    _ = m.getPromiseForActiveRequest,
                    g = h.RelayFeatureFlags,
                    b = h.areEqualSelectors,
                    R = h.createOperationDescriptor,
                    E = h.getPendingOperationsForFragment,
                    k = h.getSelector,
                    S = h.getVariablesFromFragment,
                    C = h.handlePotentialSnapshotErrors,
                    w = h.recycleNodesInto;
                n(826590);
                function x(e, r) {
                    if ("bailout" === r.kind) return null;
                    var n = e.getStore().getEpoch();
                    if (n === r.epoch) return null;
                    if ("singular" === r.kind) {
                        var t = e.lookup(r.snapshot.selector),
                            i = w(r.snapshot.data, t.data),
                            a = { data: i, isMissingData: t.isMissingData, missingClientEdges: t.missingClientEdges, missingLiveResolverFields: t.missingLiveResolverFields, seenRecords: t.seenRecords, selector: t.selector, missingRequiredFields: t.missingRequiredFields, relayResolverErrors: t.relayResolverErrors, errorResponseFields: t.errorResponseFields };
                        return [i !== r.snapshot.data, { kind: "singular", snapshot: a, epoch: n }];
                    }
                    for (var o = !1, u = [], s = 0; s < r.snapshots.length; s++) {
                        var c = r.snapshots[s],
                            f = e.lookup(c.selector),
                            d = w(c.data, f.data),
                            v = { data: d, isMissingData: f.isMissingData, missingClientEdges: f.missingClientEdges, missingLiveResolverFields: f.missingLiveResolverFields, seenRecords: f.seenRecords, selector: f.selector, missingRequiredFields: f.missingRequiredFields, relayResolverErrors: f.relayResolverErrors, errorResponseFields: f.errorResponseFields };
                        d !== c.data && (o = !0), u.push(v);
                    }
                    return u.length !== r.snapshots.length && l(!1), [o, { kind: "plural", snapshots: u, epoch: n }];
                }
                function D(e, r, n, t, a) {
                    var o = S(r, n),
                        s = (0, i.default)((0, i.default)({}, o), {}, { id: t.clientEdgeDestinationID }),
                        l = R(t.request, s, null == a ? void 0 : a.networkCacheConfig);
                    return [u(e).prepare(l, y(e, l), null == a ? void 0 : a.fetchPolicy), _(e, l.request)];
                }
                function F(e, r) {
                    return null == r
                        ? { kind: "bailout" }
                        : "PluralReaderSelector" === r.kind
                          ? {
                                kind: "plural",
                                snapshots: r.selectors.map(function (r) {
                                    return e.lookup(r);
                                }),
                                epoch: e.getStore().getEpoch(),
                            }
                          : { kind: "singular", snapshot: e.lookup(r), epoch: e.getStore().getEpoch() };
                }
                e.exports = function (e, r, n, t) {
                    var i,
                        c,
                        h = d(
                            function () {
                                return k(e, r);
                            },
                            [e, r],
                        ),
                        m = !0 === (null == e || null === (i = e.metadata) || void 0 === i ? void 0 : i.plural);
                    m ? null == r || Array.isArray(r) || l(!1) : Array.isArray(r) && l(!1), null == r || (m && Array.isArray(r) && 0 === r.length) || null != h || l(!1);
                    var y = s(),
                        _ = p(function () {
                            return F(y, h);
                        }),
                        R = _[0],
                        S = _[1],
                        w = R,
                        P = p(w),
                        N = P[0],
                        O = P[1],
                        I = N,
                        L = p(h),
                        T = L[0],
                        A = L[1],
                        q = p(y),
                        Q = q[0],
                        U = q[1];
                    if (!b(h, T) || y !== Q) {
                        A(h), U(y);
                        var M = F(y, h);
                        S(M), O(M), (w = M), (I = M);
                    }
                    var B = v(!1);
                    if (
                        (f(
                            function () {
                                B.current = h;
                            },
                            [h],
                        ),
                        !0 === (null === (c = e.metadata) || void 0 === c ? void 0 : c.hasClientEdges))
                    ) {
                        var W = d(
                                function () {
                                    var n,
                                        i = (function (e) {
                                            if ("bailout" === e.kind) return null;
                                            var r;
                                            if ("singular" === e.kind) return null !== (r = e.snapshot.missingClientEdges) && void 0 !== r ? r : null;
                                            var n,
                                                t = null,
                                                i = (0, a.default)(e.snapshots);
                                            try {
                                                for (i.s(); !(n = i.n()).done; ) {
                                                    var o = n.value;
                                                    if (o.missingClientEdges) {
                                                        var u;
                                                        t = null !== (u = t) && void 0 !== u ? u : [];
                                                        var s,
                                                            l = (0, a.default)(o.missingClientEdges);
                                                        try {
                                                            for (l.s(); !(s = l.n()).done; ) {
                                                                var c = s.value;
                                                                t.push(c);
                                                            }
                                                        } catch (e) {
                                                            l.e(e);
                                                        } finally {
                                                            l.f();
                                                        }
                                                    }
                                                }
                                            } catch (e) {
                                                i.e(e);
                                            } finally {
                                                i.f();
                                            }
                                            return t;
                                        })(w),
                                        o = [];
                                    if (null != i && i.length) {
                                        n = [];
                                        var u,
                                            s = (0, a.default)(i);
                                        try {
                                            for (s.s(); !(u = s.n()).done; ) {
                                                var l = u.value,
                                                    c = D(y, e, r, l, t),
                                                    f = c[0],
                                                    d = c[1];
                                                n.push(f), null != d && o.push(d);
                                            }
                                        } catch (e) {
                                            s.e(e);
                                        } finally {
                                            s.f();
                                        }
                                    }
                                    return [n, o];
                                },
                                [w, y, e, r, t],
                            ),
                            z = W[0],
                            V = W[1];
                        if (V.length) throw Promise.all(V);
                        f(
                            function () {
                                var e = u(y);
                                if (null != z && z.length) {
                                    var r,
                                        n = [],
                                        t = (0, a.default)(z);
                                    try {
                                        for (t.s(); !(r = t.n()).done; ) {
                                            var i = r.value;
                                            n.push(e.retain(i));
                                        }
                                    } catch (e) {
                                        t.e(e);
                                    } finally {
                                        t.f();
                                    }
                                    return function () {
                                        var e,
                                            r = (0, a.default)(n);
                                        try {
                                            for (r.s(); !(e = r.n()).done; ) {
                                                e.value.dispose();
                                            }
                                        } catch (e) {
                                            r.e(e);
                                        } finally {
                                            r.f();
                                        }
                                    };
                                }
                            },
                            [y, z],
                        );
                    }
                    if (
                        (function (e) {
                            return (
                                "bailout" !== e.kind &&
                                ("singular" === e.kind
                                    ? e.snapshot.isMissingData
                                    : e.snapshots.some(function (e) {
                                          return e.isMissingData;
                                      }))
                            );
                        })(w)
                    ) {
                        var j = (function (e) {
                            if ("bailout" === e.kind) return null;
                            var r;
                            if ("singular" === e.kind) return null !== (r = e.snapshot.missingLiveResolverFields) && void 0 !== r ? r : null;
                            var n,
                                t = null,
                                i = (0, a.default)(e.snapshots);
                            try {
                                for (i.s(); !(n = i.n()).done; ) {
                                    var o = n.value;
                                    if (o.missingLiveResolverFields) {
                                        var u;
                                        t = null !== (u = t) && void 0 !== u ? u : [];
                                        var s,
                                            l = (0, a.default)(o.missingLiveResolverFields);
                                        try {
                                            for (l.s(); !(s = l.n()).done; ) {
                                                var c = s.value;
                                                t.push(c);
                                            }
                                        } catch (e) {
                                            l.e(e);
                                        } finally {
                                            l.f();
                                        }
                                    }
                                }
                            } catch (e) {
                                i.e(e);
                            } finally {
                                i.f();
                            }
                            return t;
                        })(w);
                        if (null != j && j.length > 0)
                            throw Promise.all(
                                j.map(function (e) {
                                    var r = e.liveStateID;
                                    return y.getStore().getLiveResolverPromise(r);
                                }),
                            );
                        if (g.ENABLE_RELAY_OPERATION_TRACKER_SUSPENSE || y !== Q || !B.current || !b(B.current, h)) {
                            null == h && l(!1);
                            var Y = "PluralReaderSelector" === h.kind ? h.selectors[0].owner : h.owner,
                                K = E(y, e, Y);
                            if (K) throw K.promise;
                        }
                    }
                    !(function (e, r) {
                        var n, t;
                        if ("singular" === r.kind) C(e, r.snapshot.missingRequiredFields, r.snapshot.relayResolverErrors, r.snapshot.errorResponseFields, null !== (n = null === (t = r.snapshot.selector.node.metadata) || void 0 === t ? void 0 : t.throwOnFieldError) && void 0 !== n && n);
                        else if ("plural" === r.kind) {
                            var i,
                                o = (0, a.default)(r.snapshots);
                            try {
                                for (o.s(); !(i = o.n()).done; ) {
                                    var u,
                                        s,
                                        l = i.value;
                                    C(e, l.missingRequiredFields, l.relayResolverErrors, l.errorResponseFields, null !== (u = null === (s = l.selector.node.metadata) || void 0 === s ? void 0 : s.throwOnFieldError) && void 0 !== u && u);
                                }
                            } catch (e) {
                                o.e(e);
                            } finally {
                                o.f();
                            }
                        }
                    })(y, w);
                    var G,
                        $ = v(!1);
                    if (
                        (f(
                            function () {
                                var e = I,
                                    r = x(y, I);
                                if (null !== r) {
                                    var n = r[0],
                                        t = r[1];
                                    n && S(t), (e = t);
                                }
                                return (function (e, r, n, t) {
                                    if ("bailout" === r.kind) return function () {};
                                    if ("singular" === r.kind) {
                                        var i = e.subscribe(r.snapshot, function (r) {
                                            n(function (n) {
                                                if ("singular" !== n.kind || n.snapshot.selector !== r.selector) {
                                                    var i = x(e, n);
                                                    if (null != i) {
                                                        var a = i[0],
                                                            o = i[1];
                                                        return e.__log({ name: "useFragment.subscription.missedUpdates", hasDataChanges: a }), (t.current = a), a ? o : n;
                                                    }
                                                    return n;
                                                }
                                                return (t.current = !0), { kind: "singular", snapshot: r, epoch: e.getStore().getEpoch() };
                                            });
                                        });
                                        return function () {
                                            i.dispose();
                                        };
                                    }
                                    var u = r.snapshots.map(function (r, i) {
                                        return e.subscribe(r, function (r) {
                                            n(function (n) {
                                                var a;
                                                if ("plural" !== n.kind || (null === (a = n.snapshots[i]) || void 0 === a ? void 0 : a.selector) !== r.selector) {
                                                    var u = x(e, n);
                                                    if (null != u) {
                                                        var s = u[0],
                                                            l = u[1];
                                                        return e.__log({ name: "useFragment.subscription.missedUpdates", hasDataChanges: s }), (t.current = t.current || s), s ? l : n;
                                                    }
                                                    return n;
                                                }
                                                var c = (0, o.default)(n.snapshots);
                                                return (c[i] = r), (t.current = !0), { kind: "plural", snapshots: c, epoch: e.getStore().getEpoch() };
                                            });
                                        });
                                    });
                                    return function () {
                                        var e,
                                            r = (0, a.default)(u);
                                        try {
                                            for (r.s(); !(e = r.n()).done; ) e.value.dispose();
                                        } catch (e) {
                                            r.e(e);
                                        } finally {
                                            r.f();
                                        }
                                    };
                                })(y, e, S, $);
                            },
                            [y, I],
                        ),
                        $.current)
                    ) {
                        var Z = x(y, w);
                        if (null != Z) {
                            var X = Z[0],
                                H = Z[1];
                            X && (S(H), (w = H));
                        }
                        $.current = !1;
                    }
                    if (m) {
                        var J = null == r;
                        G = d(
                            function () {
                                return "bailout" === w.kind
                                    ? J
                                        ? null
                                        : []
                                    : ("plural" !== w.kind && l(!1),
                                      w.snapshots.map(function (e) {
                                          return e.data;
                                      }));
                            },
                            [w, J],
                        );
                    } else "bailout" === w.kind ? (G = null) : ("singular" !== w.kind && l(!1), (G = w.snapshot.data));
                    return (
                        g.LOG_MISSING_RECORDS_IN_PROD &&
                            null != r &&
                            (void 0 === G ||
                                (Array.isArray(G) &&
                                    G.length > 0 &&
                                    G.every(function (e) {
                                        return void 0 === e;
                                    }))),
                        G
                    );
                };
            },
            995402: (e, r, n) => {
                var t = n(202784),
                    i = t.useEffect,
                    a = t.useRef;
                e.exports = function () {
                    var e = a(!0);
                    return (
                        i(function () {
                            return (
                                (e.current = !0),
                                function () {
                                    e.current = !1;
                                }
                            );
                        }, []),
                        e
                    );
                };
            },
            712696: (e, r, n) => {
                var t = n(606161).useTrackLoadQueryInRender,
                    i = n(138239),
                    a = n(303566),
                    o = n(437429),
                    u = n(703383).__internal.fetchQuery;
                e.exports = function (e, r, n) {
                    t();
                    var s = o(),
                        l = a(e, r, n && n.networkCacheConfig ? n.networkCacheConfig : { force: !0 });
                    return i({ componentDisplayName: "useLazyLoadQuery()", fetchKey: null == n ? void 0 : n.fetchKey, fetchObservable: u(s, l), fetchPolicy: null == n ? void 0 : n.fetchPolicy, query: l, renderPolicy: null == n ? void 0 : n.UNSTABLE_renderPolicy });
                };
            },
            138239: (e, r, n) => {
                var t = n(982317),
                    i = n(993801),
                    a = i.getQueryCacheIdentifier,
                    o = i.getQueryResourceForEnvironment,
                    u = n(61383),
                    s = n(799384),
                    l = n(437429),
                    c = n(202784),
                    f = c.useContext,
                    d = c.useEffect,
                    v = c.useState,
                    p = c.useRef;
                e.exports = function (e) {
                    var r = e.query,
                        n = e.componentDisplayName,
                        i = e.fetchObservable,
                        c = e.fetchPolicy,
                        h = e.fetchKey,
                        m = e.renderPolicy,
                        y = l(),
                        _ = f(t),
                        g = o(y),
                        b = v(0),
                        R = b[0],
                        E = b[1],
                        k = u(),
                        S = k.startFetch,
                        C = k.completeFetch,
                        w = "".concat(R, "-").concat(null != h ? h : ""),
                        x = a(y, r, c, m, w),
                        D = _.wrapPrepareQueryResource(function () {
                            return g.prepareWithIdentifier(x, r, i, c, m, { start: S, complete: C, error: C }, _);
                        }),
                        F = p(!1);
                    d(function () {
                        return function () {
                            F.current = !0;
                        };
                    }, []),
                        d(
                            function () {
                                if (!0 === F.current)
                                    return (
                                        (F.current = !1),
                                        void E(function (e) {
                                            return e + 1;
                                        })
                                    );
                                var e = g.retain(D, _);
                                return function () {
                                    e.dispose();
                                };
                            },
                            [y, x],
                        ),
                        d(function () {
                            g.releaseTemporaryRetain(D);
                        });
                    var P = D.fragmentNode,
                        N = D.fragmentRef;
                    return s(P, N, n);
                };
            },
            303566: (e, r, n) => {
                var t = n(57074),
                    i = n(202784),
                    a = n(703383),
                    o = a.createOperationDescriptor,
                    u = a.getRequest,
                    s = i.useMemo;
                e.exports = function (e, r, n) {
                    var i = t(r),
                        a = t(n || {});
                    return s(
                        function () {
                            return o(u(e), i, a);
                        },
                        [e, i, a],
                    );
                };
            },
            57074: (e, r, n) => {
                var t = n(193860),
                    i = n(202784).useState;
                e.exports = function (e) {
                    var r = i(e),
                        n = r[0],
                        a = r[1];
                    return t(e, n) ? n : (a(e), e);
                };
            },
            351743: (e, r, n) => {
                var t = (0, n(171600).default)(n(900814)),
                    i = n(995402),
                    a = n(437429),
                    o = n(202784),
                    u = n(703383).commitMutation,
                    s = o.useState,
                    l = o.useEffect,
                    c = o.useRef,
                    f = o.useCallback;
                e.exports = function (e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u,
                        n = a(),
                        o = i(),
                        d = c(n),
                        v = c(e),
                        p = c(new Set()),
                        h = s(!1),
                        m = h[0],
                        y = h[1],
                        _ = f(
                            function (r) {
                                d.current === n && v.current === e && (p.current.delete(r), o.current && y(p.current.size > 0));
                            },
                            [n, o, e],
                        );
                    return (
                        l(
                            function () {
                                (d.current === n && v.current === e) || ((p.current = new Set()), o.current && y(!1), (d.current = n), (v.current = e));
                            },
                            [n, o, e],
                        ),
                        [
                            f(
                                function (i) {
                                    o.current && y(!0);
                                    var a = r(
                                        n,
                                        (0, t.default)(
                                            (0, t.default)({}, i),
                                            {},
                                            {
                                                mutation: e,
                                                onCompleted: function (e, r) {
                                                    var n;
                                                    _(a), null === (n = i.onCompleted) || void 0 === n || n.call(i, e, r);
                                                },
                                                onError: function (e) {
                                                    var r;
                                                    _(a), null === (r = i.onError) || void 0 === r || r.call(i, e);
                                                },
                                                onUnsubscribe: function () {
                                                    var e;
                                                    _(a), null === (e = i.onUnsubscribe) || void 0 === e || e.call(i);
                                                },
                                                onNext: function () {
                                                    var e;
                                                    null === (e = i.onNext) || void 0 === e || e.call(i);
                                                },
                                            },
                                        ),
                                    );
                                    return p.current.add(a), a;
                                },
                                [_, r, n, o, e],
                            ),
                            m,
                        ]
                    );
                };
            },
            437429: (e, r, n) => {
                var t = n(23988),
                    i = n(647677),
                    a = n(202784).useContext;
                e.exports = function () {
                    var e = a(t);
                    return null == e && i(!1), e.environment;
                };
            },
            400023: (e, r, n) => {
                n(623380), n(826590);
                e.exports = function (e, r) {};
            },
            623380: (e, r, n) => {
                var t = n(202784).useMemo;
                e.exports = function (e) {
                    return t(function () {
                        return { current: e };
                    }, []);
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-85aa29ea.23e2ae7a.js.map
