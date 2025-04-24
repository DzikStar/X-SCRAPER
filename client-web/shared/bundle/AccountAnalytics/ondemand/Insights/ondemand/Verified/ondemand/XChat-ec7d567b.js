(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-ec7d567b"],
    {
        889906: (e, t, r) => {
            e.exports = r(871543);
        },
        17352: (e) => {
            "use strict";
            function t(e) {
                return e.displayName || e.name || "Component";
            }
            e.exports = {
                getComponentName: t,
                getContainerName: function (e) {
                    return "Relay(" + t(e) + ")";
                },
            };
        },
        470300: (e, t, r) => {
            "use strict";
            var n = r(171600).default,
                o = n(r(277028)),
                a = n(r(515538)),
                s = n(r(985297)),
                i = n(r(236531)),
                u = n(r(226290)),
                l = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
                c = r(946599),
                h = r(17352).getContainerName,
                f = r(334227).assertRelayContext,
                p = r(193860),
                d = r(202784),
                v = r(703383),
                _ = v.createFragmentSpecResolver,
                y = v.getDataIDsFromObject,
                C = v.isScalarAndEqual;
            function m(e, t) {
                var r,
                    n = h(e);
                return (
                    (r = (function (r) {
                        function c(e) {
                            var o, a;
                            (a = r.call(this, e) || this),
                                (0, u.default)((0, s.default)(a), "_handleFragmentDataUpdate", function () {
                                    var e = a.state.resolver;
                                    a.setState(function (t) {
                                        return e === t.resolver ? { data: t.resolver.resolve(), relayProp: b(t.relayProp.environment) } : null;
                                    });
                                });
                            var i = f(e.__relayContext),
                                l = null !== (o = e.__rootIsQueryRenderer) && void 0 !== o && o,
                                c = _(i, n, t, e, l);
                            return (a.state = { data: c.resolve(), prevProps: e, prevPropsContext: i, relayProp: b(i.environment), resolver: c }), a;
                        }
                        (0, i.default)(c, r),
                            (c.getDerivedStateFromProps = function (e, r) {
                                var o,
                                    a = r.prevProps,
                                    s = f(e.__relayContext),
                                    i = null !== (o = e.__rootIsQueryRenderer) && void 0 !== o && o,
                                    u = y(t, a),
                                    l = y(t, e),
                                    c = r.resolver;
                                if (r.prevPropsContext.environment !== s.environment || !p(u, l)) return { data: (c = _(s, n, t, e, i)).resolve(), prevPropsContext: s, prevProps: e, relayProp: b(s.environment), resolver: c };
                                c.setProps(e);
                                var h = c.resolve();
                                return h !== r.data ? { data: h, prevProps: e, prevPropsContext: s, relayProp: b(s.environment) } : null;
                            });
                        var h = c.prototype;
                        return (
                            (h.componentDidMount = function () {
                                this._subscribeToNewResolverAndRerenderIfStoreHasChanged();
                            }),
                            (h.componentDidUpdate = function (e, t) {
                                this.state.resolver !== t.resolver ? (t.resolver.dispose(), this._subscribeToNewResolverAndRerenderIfStoreHasChanged()) : this._rerenderIfStoreHasChanged();
                            }),
                            (h.componentWillUnmount = function () {
                                this.state.resolver.dispose();
                            }),
                            (h.shouldComponentUpdate = function (e, r) {
                                if (r.data !== this.state.data) return !0;
                                for (var n = Object.keys(e), o = 0; o < n.length; o++) {
                                    var a = n[o];
                                    if ("__relayContext" === a) {
                                        if (r.prevPropsContext.environment !== this.state.prevPropsContext.environment) return !0;
                                    } else if (!t.hasOwnProperty(a) && !C(e[a], this.props[a])) return !0;
                                }
                                return !1;
                            }),
                            (h._rerenderIfStoreHasChanged = function () {
                                var e = this.state,
                                    t = e.data,
                                    r = e.resolver.resolve();
                                t !== r && this.setState({ data: r });
                            }),
                            (h._subscribeToNewResolverAndRerenderIfStoreHasChanged = function () {
                                var e = this.state,
                                    t = e.data,
                                    r = e.resolver,
                                    n = r.resolve();
                                r.setCallback(this.props, this._handleFragmentDataUpdate), t !== n && this.setState({ data: n });
                            }),
                            (h.render = function () {
                                var t = this.props,
                                    r = t.componentRef,
                                    n = (t.__relayContext, t.__rootIsQueryRenderer, (0, a.default)(t, l));
                                return d.createElement(e, (0, o.default)({}, n, this.state.data, { ref: r, relay: this.state.relayProp }));
                            }),
                            c
                        );
                    })(d.Component)),
                    (0, u.default)(r, "displayName", n),
                    r
                );
            }
            function b(e) {
                return { environment: e };
            }
            e.exports = {
                createContainer: function (e, t) {
                    return c(e, t, m);
                },
            };
        },
        349499: (e, t, r) => {
            "use strict";
            var n = r(23988),
                o = r(620793),
                a = r(193860),
                s = r(202784),
                i = r(703383),
                u = i.createOperationDescriptor,
                l = (i.deepFreeze, i.getRequest),
                c = s.useLayoutEffect,
                h = s.useState,
                f = s.useRef,
                p = s.useMemo,
                d = { rootIsQueryRenderer: !0 };
            e.exports = function (e) {
                var t,
                    r,
                    i = e.environment,
                    v = e.query,
                    _ = e.variables,
                    y = e.render,
                    C = ((t = _), (r = s.useRef(t)), a(r.current, t) || (r.current = t), r.current),
                    m = p(
                        function () {
                            var e = l(v);
                            return u(e, C);
                        },
                        [v, C],
                    ),
                    b = p(
                        function () {
                            return { environment: i };
                        },
                        [i],
                    ),
                    R = f(null),
                    g = h(null)[1],
                    S = f(null),
                    F = p(
                        function () {
                            i.check(m);
                            var e = i.lookup(m.fragment);
                            R.current = e.data;
                            var t = i.retain(m),
                                r = i.subscribe(e, function (e) {
                                    (R.current = e.data), g(R.current);
                                }),
                                n = !1;
                            return (
                                S.current && S.current(),
                                (S.current = function () {
                                    n || ((n = !0), (S.current = null), t.dispose(), r.dispose());
                                }),
                                e
                            );
                        },
                        [i, m],
                    );
                return (
                    c(
                        function () {
                            var e = S.current;
                            return function () {
                                e && e();
                            };
                        },
                        [F],
                    ),
                    s.createElement(n.Provider, { value: b }, s.createElement(o.Provider, { value: d }, y({ props: R.current })))
                );
            };
        },
        59432: (e, t, r) => {
            "use strict";
            var n = r(171600).default,
                o = n(r(277028)),
                a = n(r(515538)),
                s = n(r(985297)),
                i = n(r(236531)),
                u = n(r(226290)),
                l = n(r(900814)),
                c = ["componentRef"],
                h = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
                f = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
                p = r(946599),
                d = r(2775),
                v = r(17352),
                _ = v.getComponentName,
                y = v.getContainerName,
                C = r(23988),
                m = r(832907),
                b = r(334227).assertRelayContext,
                R = r(193860),
                g = r(647677),
                S = r(202784),
                F = r(703383),
                P = F.ConnectionInterface,
                x = F.Observable,
                q = F.RelayFeatureFlags,
                D = F.createFragmentSpecResolver,
                O = F.createOperationDescriptor,
                I = F.getDataIDsFromObject,
                E = F.getRequest,
                A = F.getVariablesFromObject,
                N = F.isScalarAndEqual,
                Q = (r(826590), "forward");
            function U(e) {
                return "function" == typeof e
                    ? {
                          error: e,
                          complete: e,
                          unsubscribe: function (t) {
                              "function" == typeof e && e();
                          },
                      }
                    : e || {};
            }
            function k(e, t, r) {
                _(e);
                var n,
                    p = y(e),
                    v = (function (e) {
                        var t = null,
                            r = !1;
                        for (var n in e) {
                            var o = e[n],
                                a = o.metadata && o.metadata.connection;
                            void 0 !== o.metadata && (r = !0), a && (1 !== a.length && g(!1), t && g(!1), (t = (0, l.default)((0, l.default)({}, a[0]), {}, { fragmentName: n })));
                        }
                        return r && null === t && g(!1), t || {};
                    })(t),
                    F =
                        r.getConnectionFromProps ||
                        (function (e) {
                            var t = e.path;
                            return (
                                t || g(!1),
                                function (r) {
                                    for (var n = r[e.fragmentName], o = 0; o < t.length; o++) {
                                        if (!n || "object" != typeof n) return null;
                                        n = n[t[o]];
                                    }
                                    return n;
                                }
                            );
                        })(v),
                    k = r.direction || v.direction;
                k || g(!1);
                var w =
                    r.getFragmentVariables ||
                    (function (e) {
                        var t = e.count;
                        return (
                            t || g(!1),
                            function (e, r) {
                                return (0, l.default)((0, l.default)({}, e), {}, (0, u.default)({}, t, r));
                            }
                        );
                    })(v);
                return (
                    (n = (function (n) {
                        function v(e) {
                            var r, o;
                            (o = n.call(this, e) || this),
                                (0, u.default)((0, s.default)(o), "_handleFragmentDataUpdate", function () {
                                    o.setState({ data: o._resolver.resolve() });
                                }),
                                (0, u.default)((0, s.default)(o), "_hasMore", function () {
                                    var e = o._getConnectionData();
                                    return !!(e && e.hasMore && e.cursor);
                                }),
                                (0, u.default)((0, s.default)(o), "_isLoading", function () {
                                    return !!o._refetchSubscription;
                                }),
                                (0, u.default)((0, s.default)(o), "_refetchConnection", function (e, t, r) {
                                    if (!o._canFetchPage("refetchConnection")) return { dispose: function () {} };
                                    o._refetchVariables = r;
                                    var n = { count: e, cursor: null, totalCount: e };
                                    return { dispose: o._fetchPage(n, U(t), { force: !0 }).unsubscribe };
                                }),
                                (0, u.default)((0, s.default)(o), "_loadMore", function (e, t, r) {
                                    if (!o._canFetchPage("loadMore")) return { dispose: function () {} };
                                    var n = U(t),
                                        a = o._getConnectionData();
                                    if (!a)
                                        return (
                                            x
                                                .create(function (e) {
                                                    return e.complete();
                                                })
                                                .subscribe(n),
                                            null
                                        );
                                    var s = a.edgeCount + e;
                                    if (r && r.force) return o._refetchConnection(s, t);
                                    var i = P.get(),
                                        u = (i.END_CURSOR, i.START_CURSOR, { count: e, cursor: a.cursor, totalCount: s });
                                    return { dispose: o._fetchPage(u, n, r).unsubscribe };
                                });
                            var a = b(e.__relayContext),
                                i = null !== (r = e.__rootIsQueryRenderer) && void 0 !== r && r;
                            return (o._isARequestInFlight = !1), (o._refetchSubscription = null), (o._refetchVariables = null), !0 === q.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT ? (o._resolver = D(a, p, t, e, i)) : (o._resolver = D(a, p, t, e, i, o._handleFragmentDataUpdate)), (o.state = { data: o._resolver.resolve(), prevContext: a, contextForChildren: a, relayProp: o._buildRelayProp(a), resolverGeneration: 0 }), (o._isUnmounted = !1), (o._hasFetched = !1), o;
                        }
                        (0, i.default)(v, n);
                        var _ = v.prototype;
                        return (
                            (_.componentDidMount = function () {
                                (this._isUnmounted = !1), !0 === q.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT && this._subscribeToNewResolverAndRerenderIfStoreHasChanged();
                            }),
                            (_.componentDidUpdate = function (e, t) {
                                !0 === q.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT && (t.resolverGeneration !== this.state.resolverGeneration ? this._subscribeToNewResolverAndRerenderIfStoreHasChanged() : this._rerenderIfStoreHasChanged());
                            }),
                            (_.UNSAFE_componentWillReceiveProps = function (e) {
                                var r,
                                    n = this,
                                    o = b(e.__relayContext),
                                    a = null !== (r = e.__rootIsQueryRenderer) && void 0 !== r && r,
                                    s = I(t, this.props),
                                    i = I(t, e),
                                    u = d(t, this.props),
                                    l = d(t, e);
                                o.environment === this.state.prevContext.environment && R(u, l) && R(s, i)
                                    ? this._hasFetched || this._resolver.setProps(e)
                                    : (this._cleanup(),
                                      !0 === q.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT ? (this._resolver = D(o, p, t, e, a)) : (this._resolver = D(o, p, t, e, a, this._handleFragmentDataUpdate)),
                                      this.setState(function (e) {
                                          return { prevContext: o, contextForChildren: o, relayProp: n._buildRelayProp(o), resolverGeneration: e.resolverGeneration + 1 };
                                      }));
                                var c = this._resolver.resolve();
                                c !== this.state.data && this.setState({ data: c });
                            }),
                            (_.componentWillUnmount = function () {
                                (this._isUnmounted = !0), this._cleanup();
                            }),
                            (_.shouldComponentUpdate = function (e, r) {
                                if (r.data !== this.state.data || r.relayProp !== this.state.relayProp || r.resolverGeneration !== this.state.resolverGeneration) return !0;
                                for (var n = Object.keys(e), o = 0; o < n.length; o++) {
                                    var a = n[o];
                                    if ("__relayContext" === a) {
                                        if (r.prevContext.environment !== this.state.prevContext.environment) return !0;
                                    } else if (!t.hasOwnProperty(a) && !N(e[a], this.props[a])) return !0;
                                }
                                return !1;
                            }),
                            (_._buildRelayProp = function (e) {
                                return { hasMore: this._hasMore, isLoading: this._isLoading, loadMore: this._loadMore, refetchConnection: this._refetchConnection, environment: e.environment };
                            }),
                            (_._rerenderIfStoreHasChanged = function () {
                                var e = this.state.data,
                                    t = this._resolver.resolve();
                                e !== t && this.setState({ data: t });
                            }),
                            (_._subscribeToNewResolverAndRerenderIfStoreHasChanged = function () {
                                var e = this.state.data,
                                    t = this._resolver.resolve();
                                this._resolver.setCallback(this.props, this._handleFragmentDataUpdate), e !== t && this.setState({ data: t });
                            }),
                            (_._getConnectionData = function () {
                                var e = this.props,
                                    t = (e.componentRef, (0, a.default)(e, c)),
                                    r = (0, l.default)((0, l.default)({}, t), this.state.data),
                                    n = F(r);
                                if (null == n) return null;
                                var o = P.get(),
                                    s = o.EDGES,
                                    i = o.PAGE_INFO,
                                    u = o.HAS_NEXT_PAGE,
                                    h = o.HAS_PREV_PAGE,
                                    f = o.END_CURSOR,
                                    p = o.START_CURSOR;
                                "object" != typeof n && g(!1);
                                var d = n[s],
                                    v = n[i];
                                if (null == d || null == v) return null;
                                Array.isArray(d) || g(!1), "object" != typeof v && g(!1);
                                var _ = k === Q ? v[u] : v[h],
                                    y = k === Q ? v[f] : v[p];
                                return "boolean" != typeof _ || (0 !== d.length && void 0 === y) ? null : { cursor: y, edgeCount: d.length, hasMore: _ };
                            }),
                            (_._getQueryFetcher = function () {
                                return this._queryFetcher || (this._queryFetcher = new m()), this._queryFetcher;
                            }),
                            (_._canFetchPage = function (e) {
                                return !this._isUnmounted;
                            }),
                            (_._fetchPage = function (e, n, o) {
                                var s,
                                    i = this,
                                    u = b(this.props.__relayContext).environment,
                                    c = this.props,
                                    f = (c.componentRef, c.__relayContext, c.__rootIsQueryRenderer, (0, a.default)(c, h)),
                                    p = (0, l.default)((0, l.default)({}, f), this.state.data),
                                    v = d(t, f);
                                (s = A(t, f)), (s = (0, l.default)((0, l.default)((0, l.default)({}, v), s), this._refetchVariables));
                                var _ = r.getVariables(p, { count: e.count, cursor: e.cursor }, s);
                                ("object" != typeof _ || null === _) && g(!1), (_ = (0, l.default)((0, l.default)({}, _), this._refetchVariables)), (s = (0, l.default)((0, l.default)({}, _), s));
                                var y = o ? { force: !!o.force } : void 0;
                                null != y && null != (null == o ? void 0 : o.metadata) && (y.metadata = null == o ? void 0 : o.metadata);
                                var C = E(r.query),
                                    m = O(C, _, y),
                                    S = null;
                                this._refetchSubscription && this._refetchSubscription.unsubscribe(), (this._hasFetched = !0);
                                var F = function () {
                                    i._refetchSubscription === S && ((i._refetchSubscription = null), (i._isARequestInFlight = !1));
                                };
                                return (
                                    (this._isARequestInFlight = !0),
                                    (S = this._getQueryFetcher()
                                        .execute({ environment: u, operation: m, preservePreviousReferences: !0 })
                                        .mergeMap(function (t) {
                                            return x.create(function (t) {
                                                !(function (t, r) {
                                                    var n = i._resolver.resolve();
                                                    i._resolver.setVariables(w(s, e.totalCount), m.request.node);
                                                    var o = i._resolver.resolve();
                                                    R(n, o) ? r() : i.setState({ data: o, contextForChildren: { environment: i.props.__relayContext.environment } }, r);
                                                })(0, function () {
                                                    t.next(), t.complete();
                                                });
                                            });
                                        })
                                        .do({ error: F, complete: F, unsubscribe: F })
                                        .subscribe(n || {})),
                                    (this._refetchSubscription = this._isARequestInFlight ? S : null),
                                    S
                                );
                            }),
                            (_._cleanup = function () {
                                this._resolver.dispose(), (this._refetchVariables = null), (this._hasFetched = !1), this._refetchSubscription && (this._refetchSubscription.unsubscribe(), (this._refetchSubscription = null), (this._isARequestInFlight = !1)), this._queryFetcher && this._queryFetcher.dispose();
                            }),
                            (_.render = function () {
                                var t = this.props,
                                    r = t.componentRef,
                                    n = (t.__relayContext, t.__rootIsQueryRenderer, (0, a.default)(t, f));
                                return S.createElement(C.Provider, { value: this.state.contextForChildren }, S.createElement(e, (0, o.default)({}, n, this.state.data, { ref: r, relay: this.state.relayProp })));
                            }),
                            v
                        );
                    })(S.Component)),
                    (0, u.default)(n, "displayName", p),
                    n
                );
            }
            e.exports = {
                createContainer: function (e, t, r) {
                    return p(e, t, function (e, t) {
                        return k(e, t, r);
                    });
                },
            };
        },
        832907: (e, t, r) => {
            "use strict";
            var n = (0, r(171600).default)(r(226290)),
                o = r(647677),
                a = r(703383),
                s = a.__internal.fetchQuery,
                i = a.createOperationDescriptor,
                u = a.isRelayModernEnvironment,
                l = (function () {
                    function e(e) {
                        (0, n.default)(this, "_selectionReferences", []), (0, n.default)(this, "_didFetchFinish", !1), null != e && ((this._cacheSelectionReference = e.cacheSelectionReference), (this._selectionReferences = e.selectionReferences));
                    }
                    var t = e.prototype;
                    return (
                        (t.getSelectionReferences = function () {
                            return { cacheSelectionReference: this._cacheSelectionReference, selectionReferences: this._selectionReferences };
                        }),
                        (t.lookupInStore = function (e, t, r) {
                            return ("store-and-network" !== r && "store-or-network" !== r) || "available" !== e.check(t).status ? null : (this._retainCachedOperation(e, t), e.lookup(t.fragment));
                        }),
                        (t.getFetchResult = function () {
                            return this._didFetchFinish ? (null != this._error ? { error: this._error } : null != this._snapshot ? { snapshot: this._snapshot } : void 0) : null;
                        }),
                        (t.execute = function (e) {
                            var t = this,
                                r = e.environment,
                                n = e.operation,
                                o = e.preservePreviousReferences,
                                a = void 0 !== o && o,
                                i = r.retain(n),
                                l = function () {
                                    t._selectionReferences = t._selectionReferences.concat(i);
                                },
                                c = function () {
                                    a || t.disposeSelectionReferences(), (t._selectionReferences = t._selectionReferences.concat(i));
                                },
                                h = function () {
                                    t._selectionReferences = t._selectionReferences.concat(i);
                                };
                            return u(r) ? s(r, n).do({ error: l, complete: c, unsubscribe: h }) : r.execute({ operation: n }).do({ error: l, complete: c, unsubscribe: h });
                        }),
                        (t.setOnDataChange = function (e) {
                            this._fetchOptions || o(!1), "function" == typeof e && ((this._fetchOptions.onDataChangeCallbacks = this._fetchOptions.onDataChangeCallbacks || []), this._fetchOptions.onDataChangeCallbacks.push(e), this._didFetchFinish && (null != this._error ? e({ error: this._error }) : null != this._snapshot && e({ snapshot: this._snapshot })));
                        }),
                        (t.fetch = function (e, t) {
                            var r,
                                n = this,
                                o = e.environment,
                                a = e.operation,
                                s = e.onDataChange,
                                u = !1;
                            this.disposeRequest();
                            var l = this._fetchOptions && this._fetchOptions.onDataChangeCallbacks;
                            (this._fetchOptions = { environment: o, onDataChangeCallbacks: l || [], operation: a }), s && -1 === this._fetchOptions.onDataChangeCallbacks.indexOf(s) && this._fetchOptions.onDataChangeCallbacks.push(s);
                            var c = t ? i(a.request.node, a.request.variables, t) : a,
                                h = this.execute({ environment: o, operation: c })
                                    .finally(function () {
                                        n._pendingRequest = null;
                                    })
                                    .subscribe({
                                        next: function () {
                                            (n._didFetchFinish = !0), (n._error = null), n._onQueryDataAvailable({ notifyFirstResult: u });
                                        },
                                        error: function (e) {
                                            (n._didFetchFinish = !0), (n._error = e), (n._snapshot = null);
                                            var t = n._fetchOptions && n._fetchOptions.onDataChangeCallbacks;
                                            u
                                                ? t &&
                                                  t.forEach(function (t) {
                                                      t({ error: e });
                                                  })
                                                : (r = e);
                                        },
                                    });
                            if (
                                ((this._pendingRequest = {
                                    dispose: function () {
                                        h.unsubscribe();
                                    },
                                }),
                                (u = !0),
                                r)
                            )
                                throw r;
                            return this._snapshot;
                        }),
                        (t.retry = function (e) {
                            return this._fetchOptions || o(!1), this.fetch({ environment: this._fetchOptions.environment, operation: this._fetchOptions.operation, onDataChange: null }, e);
                        }),
                        (t.dispose = function () {
                            this.disposeRequest(), this.disposeSelectionReferences();
                        }),
                        (t.disposeRequest = function () {
                            (this._error = null), (this._snapshot = null), this._pendingRequest && this._pendingRequest.dispose(), this._rootSubscription && (this._rootSubscription.dispose(), (this._rootSubscription = null));
                        }),
                        (t._retainCachedOperation = function (e, t) {
                            this._disposeCacheSelectionReference(), (this._cacheSelectionReference = e.retain(t));
                        }),
                        (t._disposeCacheSelectionReference = function () {
                            this._cacheSelectionReference && this._cacheSelectionReference.dispose(), (this._cacheSelectionReference = null);
                        }),
                        (t.disposeSelectionReferences = function () {
                            this._disposeCacheSelectionReference(),
                                this._selectionReferences.forEach(function (e) {
                                    return e.dispose();
                                }),
                                (this._selectionReferences = []);
                        }),
                        (t._onQueryDataAvailable = function (e) {
                            var t = this,
                                r = e.notifyFirstResult;
                            this._fetchOptions || o(!1);
                            var n = this._fetchOptions,
                                a = n.environment,
                                s = n.onDataChangeCallbacks,
                                i = n.operation;
                            if (
                                !this._snapshot &&
                                ((this._snapshot = a.lookup(i.fragment)),
                                (this._rootSubscription = a.subscribe(this._snapshot, function (e) {
                                    if (null != t._fetchOptions) {
                                        var r = t._fetchOptions.onDataChangeCallbacks;
                                        Array.isArray(r) &&
                                            r.forEach(function (t) {
                                                return t({ snapshot: e });
                                            });
                                    }
                                })),
                                this._snapshot && r && Array.isArray(s))
                            ) {
                                var u = this._snapshot;
                                s.forEach(function (e) {
                                    return e({ snapshot: u });
                                });
                            }
                        }),
                        e
                    );
                })();
            e.exports = l;
        },
        698556: (e, t, r) => {
            "use strict";
            var n = r(171600).default,
                o = n(r(900814)),
                a = n(r(985297)),
                s = n(r(236531)),
                i = n(r(226290)),
                u = r(23988),
                l = r(832907),
                c = r(620793),
                h = r(193860),
                f = r(202784),
                p = r(703383),
                d = p.createOperationDescriptor,
                v = (p.deepFreeze, p.getRequest),
                _ = {},
                y = { rootIsQueryRenderer: !0 },
                C = (function (e) {
                    function t(t) {
                        var r;
                        (r = e.call(this, t) || this),
                            (0, i.default)((0, a.default)(r), "_handleDataChange", function (e) {
                                var t = null == e.error ? null : e.error,
                                    n = null == e.snapshot ? null : e.snapshot;
                                r.setState(function (e) {
                                    var r = e.requestCacheKey;
                                    return r && delete _[r], n === e.snapshot && t === e.error ? null : { renderProps: m(t, n, e.queryFetcher, e.retryCallbacks), snapshot: n, requestCacheKey: null };
                                });
                            });
                        var n,
                            s,
                            u = { handleDataChange: null, handleRetryAfterError: null };
                        if (t.query) {
                            var c = t.query;
                            (s = b(v(c).params, t.variables)), (n = _[s] ? _[s].queryFetcher : new l());
                        } else n = new l();
                        return (r._maybeHiddenOrFastRefresh = !1), (r.state = (0, o.default)({ prevPropsEnvironment: t.environment, prevPropsVariables: t.variables, prevQuery: t.query, queryFetcher: n, retryCallbacks: u }, g(t, n, u, s))), r;
                    }
                    (0, s.default)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            return t.prevQuery === e.query && t.prevPropsEnvironment === e.environment && h(t.prevPropsVariables, e.variables) ? null : R(e, t);
                        });
                    var r = t.prototype;
                    return (
                        (r.componentDidMount = function () {
                            var e = this;
                            if (!0 === this._maybeHiddenOrFastRefresh)
                                return (
                                    (this._maybeHiddenOrFastRefresh = !1),
                                    void this.setState(function (t) {
                                        var r = R(e.props, t),
                                            n = r.requestCacheKey,
                                            o = r.queryFetcher;
                                        return null != n && null != _[n] && o.setOnDataChange(e._handleDataChange), r;
                                    })
                                );
                            var t = this.state,
                                r = t.retryCallbacks,
                                n = t.queryFetcher,
                                o = t.requestCacheKey;
                            o && delete _[o],
                                (r.handleDataChange = this._handleDataChange),
                                (r.handleRetryAfterError = function (t) {
                                    return e.setState(function (e) {
                                        var t = e.requestCacheKey;
                                        return t && delete _[t], { renderProps: { error: null, props: null, retry: null }, requestCacheKey: null };
                                    });
                                }),
                                this.props.query && n.setOnDataChange(this._handleDataChange);
                        }),
                        (r.componentDidUpdate = function (e, t) {
                            var r = this.state,
                                n = r.queryFetcher,
                                o = r.requestCacheKey;
                            o && (delete _[o], delete this.state.requestCacheKey), this.props.query && n !== t.queryFetcher && n.setOnDataChange(this._handleDataChange);
                        }),
                        (r.componentWillUnmount = function () {
                            this.state.queryFetcher.dispose(), (this._maybeHiddenOrFastRefresh = !0);
                        }),
                        (r.shouldComponentUpdate = function (e, t) {
                            return e.render !== this.props.render || t.renderProps !== this.state.renderProps;
                        }),
                        (r.render = function () {
                            var e = this.state,
                                t = e.renderProps,
                                r = e.relayContext;
                            return f.createElement(u.Provider, { value: r }, f.createElement(c.Provider, { value: y }, this.props.render(t)));
                        }),
                        t
                    );
                })(f.Component);
            function m(e, t, r, n) {
                return {
                    error: e || null,
                    props: t ? t.data : null,
                    retry: function (t) {
                        var o = r.retry(t);
                        o && "function" == typeof n.handleDataChange ? n.handleDataChange({ snapshot: o }) : e && "function" == typeof n.handleRetryAfterError && n.handleRetryAfterError(e);
                    },
                };
            }
            function b(e, t) {
                return JSON.stringify({ id: e.cacheID ? e.cacheID : e.id, variables: t });
            }
            function R(e, t) {
                var r,
                    n = e.query,
                    a = t.queryFetcher.getSelectionReferences();
                if ((t.queryFetcher.disposeRequest(), n)) {
                    var s = b(v(n).params, e.variables);
                    r = _[s] ? _[s].queryFetcher : new l(a);
                } else r = new l(a);
                return (0, o.default)({ prevQuery: e.query, prevPropsEnvironment: e.environment, prevPropsVariables: e.variables, queryFetcher: r }, g(e, r, t.retryCallbacks));
            }
            function g(e, t, r, n) {
                var o = e.environment,
                    a = e.query,
                    s = e.variables,
                    i = e.cacheConfig,
                    u = o;
                if (!a) return t.dispose(), { error: null, relayContext: { environment: u }, renderProps: { error: null, props: {}, retry: null }, requestCacheKey: null };
                var l = v(a),
                    c = d(l, s, i),
                    h = { environment: u };
                if ("string" == typeof n && _[n]) {
                    var f = _[n].snapshot;
                    return f ? { error: null, relayContext: h, renderProps: m(null, f, t, r), snapshot: f, requestCacheKey: n } : { error: null, relayContext: h, renderProps: { error: null, props: null, retry: null }, snapshot: null, requestCacheKey: n };
                }
                try {
                    var p = t.lookupInStore(u, c, e.fetchPolicy),
                        y = t.fetch({ environment: u, onDataChange: null, operation: c }) || p;
                    return (n = n || b(l.params, e.variables)), (_[n] = { queryFetcher: t, snapshot: y }), y ? { error: null, relayContext: h, renderProps: m(null, y, t, r), snapshot: y, requestCacheKey: n } : { error: null, relayContext: h, renderProps: { error: null, props: null, retry: null }, snapshot: null, requestCacheKey: n };
                } catch (e) {
                    return { error: e, relayContext: h, renderProps: m(e, null, t, r), snapshot: null, requestCacheKey: n };
                }
            }
            e.exports = C;
        },
        620793: (e, t, r) => {
            "use strict";
            var n = r(202784);
            e.exports = n.createContext({ rootIsQueryRenderer: !1 });
        },
        878663: (e, t, r) => {
            "use strict";
            var n = r(171600).default,
                o = n(r(277028)),
                a = n(r(515538)),
                s = n(r(900814)),
                i = n(r(985297)),
                u = n(r(236531)),
                l = n(r(226290)),
                c = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
                h = r(946599),
                f = r(2775),
                p = r(17352).getContainerName,
                d = r(23988),
                v = r(832907),
                _ = r(334227).assertRelayContext,
                y = r(193860),
                C = r(202784),
                m = r(703383),
                b = m.Observable,
                R = m.createFragmentSpecResolver,
                g = m.createOperationDescriptor,
                S = m.getDataIDsFromObject,
                F = m.getRequest,
                P = m.getVariablesFromObject,
                x = m.isScalarAndEqual;
            r(826590);
            function q(e, t) {
                return { environment: e, refetch: t };
            }
            e.exports = {
                createContainer: function (e, t, r) {
                    return h(e, t, function (e, t) {
                        return (function (e, t, r) {
                            var n,
                                h = p(e);
                            return (
                                (n = (function (n) {
                                    function p(e) {
                                        var o, a;
                                        (a = n.call(this, e) || this),
                                            (0, l.default)((0, i.default)(a), "_handleFragmentDataUpdate", function () {
                                                var e = a.state.resolver;
                                                a.setState(function (t) {
                                                    return e === t.resolver ? { data: t.resolver.resolve() } : null;
                                                });
                                            }),
                                            (0, l.default)((0, i.default)(a), "_refetch", function (e, n, o, i) {
                                                if (a._isUnmounted) return { dispose: function () {} };
                                                var u = _(a.props.__relayContext).environment,
                                                    l = f(t, a.props),
                                                    c = "function" == typeof e ? e(a._getFragmentVariables()) : e;
                                                c = (0, s.default)((0, s.default)({}, l), c);
                                                var h = n ? (0, s.default)((0, s.default)({}, c), n) : c,
                                                    p = i ? { force: !!i.force } : void 0;
                                                null != p && null != (null == i ? void 0 : i.metadata) && (p.metadata = null == i ? void 0 : i.metadata);
                                                var d,
                                                    v = "function" == typeof o ? { next: o, error: o } : o || {},
                                                    y = F(r),
                                                    C = g(y, c, p);
                                                return (
                                                    (a.state.localVariables = c),
                                                    a._refetchSubscription && a._refetchSubscription.unsubscribe(),
                                                    null != a._getQueryFetcher().lookupInStore(u, C, null == i ? void 0 : i.fetchPolicy)
                                                        ? (a.state.resolver.setVariables(h, C.request.node),
                                                          a.setState(
                                                              function (e) {
                                                                  return { data: e.resolver.resolve(), contextForChildren: { environment: a.props.__relayContext.environment } };
                                                              },
                                                              function () {
                                                                  v.next && v.next(), v.complete && v.complete();
                                                              },
                                                          ),
                                                          { dispose: function () {} })
                                                        : (a
                                                              ._getQueryFetcher()
                                                              .execute({ environment: u, operation: C, preservePreviousReferences: !0 })
                                                              .mergeMap(function (e) {
                                                                  return (
                                                                      a.state.resolver.setVariables(h, C.request.node),
                                                                      b.create(function (e) {
                                                                          return a.setState(
                                                                              function (e) {
                                                                                  return { data: e.resolver.resolve(), contextForChildren: { environment: a.props.__relayContext.environment } };
                                                                              },
                                                                              function () {
                                                                                  e.next(), e.complete();
                                                                              },
                                                                          );
                                                                      })
                                                                  );
                                                              })
                                                              .finally(function () {
                                                                  a._refetchSubscription === d && (a._refetchSubscription = null);
                                                              })
                                                              .subscribe(
                                                                  (0, s.default)(
                                                                      (0, s.default)({}, v),
                                                                      {},
                                                                      {
                                                                          start: function (e) {
                                                                              (a._refetchSubscription = d = e), v.start && v.start(e);
                                                                          },
                                                                      },
                                                                  ),
                                                              ),
                                                          {
                                                              dispose: function () {
                                                                  d && d.unsubscribe();
                                                              },
                                                          })
                                                );
                                            });
                                        var u = _(e.__relayContext),
                                            c = null !== (o = e.__rootIsQueryRenderer) && void 0 !== o && o;
                                        a._refetchSubscription = null;
                                        var p = R(u, h, t, e, c);
                                        return (a.state = { data: p.resolve(), localVariables: null, prevProps: e, prevPropsContext: u, contextForChildren: u, relayProp: q(u.environment, a._refetch), resolver: p }), (a._isUnmounted = !1), a;
                                    }
                                    (0, u.default)(p, n);
                                    var m = p.prototype;
                                    return (
                                        (m.componentDidMount = function () {
                                            (this._isUnmounted = !1), this._subscribeToNewResolverAndRerenderIfStoreHasChanged();
                                        }),
                                        (m.componentDidUpdate = function (e, t) {
                                            this.state.resolver !== t.resolver ? (t.resolver.dispose(), this._queryFetcher && this._queryFetcher.dispose(), this._refetchSubscription && this._refetchSubscription.unsubscribe(), this._subscribeToNewResolverAndRerenderIfStoreHasChanged()) : this._rerenderIfStoreHasChanged();
                                        }),
                                        (p.getDerivedStateFromProps = function (e, r) {
                                            var n,
                                                o = r.prevProps,
                                                a = _(e.__relayContext),
                                                s = null !== (n = e.__rootIsQueryRenderer) && void 0 !== n && n,
                                                i = S(t, o),
                                                u = S(t, e),
                                                l = f(t, o),
                                                c = f(t, e),
                                                p = r.resolver;
                                            if (r.prevPropsContext.environment !== a.environment || !y(l, c) || !y(i, u)) return { data: (p = R(a, h, t, e, s)).resolve(), localVariables: null, prevProps: e, prevPropsContext: a, contextForChildren: a, relayProp: q(a.environment, r.relayProp.refetch), resolver: p };
                                            r.localVariables || p.setProps(e);
                                            var d = p.resolve();
                                            return d !== r.data ? { data: d, prevProps: e } : null;
                                        }),
                                        (m.componentWillUnmount = function () {
                                            (this._isUnmounted = !0), this.state.resolver.dispose(), this._queryFetcher && this._queryFetcher.dispose(), this._refetchSubscription && this._refetchSubscription.unsubscribe();
                                        }),
                                        (m.shouldComponentUpdate = function (e, r) {
                                            if (r.data !== this.state.data || r.relayProp !== this.state.relayProp) return !0;
                                            for (var n = Object.keys(e), o = 0; o < n.length; o++) {
                                                var a = n[o];
                                                if ("__relayContext" === a) {
                                                    if (this.state.prevPropsContext.environment !== r.prevPropsContext.environment) return !0;
                                                } else if (!t.hasOwnProperty(a) && !x(e[a], this.props[a])) return !0;
                                            }
                                            return !1;
                                        }),
                                        (m._rerenderIfStoreHasChanged = function () {
                                            var e = this.state,
                                                t = e.data,
                                                r = e.resolver.resolve();
                                            t !== r && this.setState({ data: r });
                                        }),
                                        (m._subscribeToNewResolverAndRerenderIfStoreHasChanged = function () {
                                            var e = this.state,
                                                t = e.data,
                                                r = e.resolver,
                                                n = r.resolve();
                                            r.setCallback(this.props, this._handleFragmentDataUpdate), t !== n && this.setState({ data: n });
                                        }),
                                        (m._getFragmentVariables = function () {
                                            return P(t, this.props);
                                        }),
                                        (m._getQueryFetcher = function () {
                                            return this._queryFetcher || (this._queryFetcher = new v()), this._queryFetcher;
                                        }),
                                        (m.render = function () {
                                            var t = this.props,
                                                r = t.componentRef,
                                                n = (t.__relayContext, t.__rootIsQueryRenderer, (0, a.default)(t, c)),
                                                s = this.state,
                                                i = s.relayProp,
                                                u = s.contextForChildren;
                                            return C.createElement(d.Provider, { value: u }, C.createElement(e, (0, o.default)({}, n, this.state.data, { ref: r, relay: i })));
                                        }),
                                        p
                                    );
                                })(C.Component)),
                                (0, l.default)(n, "displayName", h),
                                n
                            );
                        })(e, t, r);
                    });
                },
            };
        },
        334227: (e, t, r) => {
            "use strict";
            var n = r(996792),
                o = r(647677);
            function a(e) {
                return "object" == typeof e && null !== e && !Array.isArray(e) && n(e.environment);
            }
            e.exports = {
                assertRelayContext: function (e) {
                    return a(e) || o(!1), e;
                },
                isRelayContext: a,
            };
        },
        499277: (e, t, r) => {
            "use strict";
            var n = r(647677);
            e.exports = function (e, t) {
                for (var r in ((t && "object" == typeof t) || n(!1), t))
                    if (t.hasOwnProperty(r)) {
                        var o = t[r];
                        (!o || ("object" != typeof o && "function" != typeof o)) && n(!1);
                    }
            };
        },
        946599: (e, t, r) => {
            "use strict";
            var n = (0, r(171600).default)(r(277028)),
                o = r(499277),
                a = r(17352),
                s = a.getComponentName,
                i = a.getContainerName,
                u = r(23988),
                l = r(620793),
                c = r(647677),
                h = r(202784),
                f = r(703383).getFragment,
                p = h.useContext;
            e.exports = function (e, t, r) {
                var a = i(e);
                o(s(e), t);
                var d = {};
                for (var v in t) d[v] = f(t[v]);
                var _ = r(e, d);
                function y(e, t) {
                    var r,
                        o = p(u);
                    null == o && c(!1);
                    var a = p(l);
                    return h.createElement(_, (0, n.default)({}, e, { __relayContext: o, __rootIsQueryRenderer: null !== (r = null == a ? void 0 : a.rootIsQueryRenderer) && void 0 !== r && r, componentRef: e.componentRef || t }));
                }
                return (_.displayName = a), (y.displayName = a), h.forwardRef(y);
            };
        },
        2775: (e, t, r) => {
            "use strict";
            var n = (0, r(171600).default)(r(900814)),
                o = r(703383).getSelector;
            e.exports = function (e, t) {
                var r = {};
                return (
                    Object.keys(e).forEach(function (a) {
                        var s,
                            i,
                            u,
                            l = e[a],
                            c = t[a],
                            h = o(l, c),
                            f = null != h && "PluralReaderSelector" === h.kind ? (null !== (s = null === (i = h.selectors[0]) || void 0 === i ? void 0 : i.owner.variables) && void 0 !== s ? s : {}) : null !== (u = null == h ? void 0 : h.owner.variables) && void 0 !== u ? u : {};
                        r = (0, n.default)((0, n.default)({}, r), f);
                    }),
                    r
                );
            };
        },
        871543: (e, t, r) => {
            "use strict";
            var n = r(23988),
                o = r(470300),
                a = r(349499),
                s = r(59432),
                i = r(698556),
                u = r(878663),
                l = r(588386),
                c = r(151210),
                h = r(606161).loadQuery,
                f = r(982317),
                p = r(490434),
                d = r(178733),
                v = r(265933),
                _ = r(277660),
                y = r(712696),
                C = r(351743),
                m = r(598),
                b = r(928123),
                R = r(72845),
                g = r(463836),
                S = r(437429),
                F = r(353391),
                P = r(19663),
                x = r(703383);
            e.exports = { ConnectionHandler: x.ConnectionHandler, QueryRenderer: i, LocalQueryRenderer: a, MutationTypes: x.MutationTypes, RangeOperations: x.RangeOperations, ReactRelayContext: n, applyOptimisticMutation: x.applyOptimisticMutation, commitLocalUpdate: x.commitLocalUpdate, commitMutation: x.commitMutation, createFragmentContainer: o.createContainer, createPaginationContainer: s.createContainer, createRefetchContainer: u.createContainer, fetchQuery_DEPRECATED: x.fetchQuery_DEPRECATED, graphql: x.graphql, readInlineData: x.readInlineData, requestSubscription: x.requestSubscription, EntryPointContainer: l, RelayEnvironmentProvider: p, ProfilerContext: f, fetchQuery: x.fetchQuery, loadQuery: h, loadEntryPoint: c, useClientQuery: d, useFragment: _, useLazyLoadQuery: y, useEntryPointLoader: v, useQueryLoader: R, useMutation: C, usePaginationFragment: m, usePreloadedQuery: b, useRefetchableFragment: g, useRelayEnvironment: S, useSubscribeToInvalidationState: F, useSubscription: P };
        },
        996792: (e) => {
            "use strict";
            e.exports = function (e) {
                return "object" == typeof e && null !== e && "function" == typeof e.check && "function" == typeof e.lookup && "function" == typeof e.retain && "function" == typeof e.execute && "function" == typeof e.subscribe;
            };
        },
        178733: (e, t, r) => {
            "use strict";
            var n = (0, r(171600).default)(r(900814)),
                o = r(712696);
            e.exports = function (e, t, r) {
                return o(e, t, (0, n.default)((0, n.default)({}, r), {}, { fetchPolicy: "store-only" }));
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-ec7d567b.9a68157a.js.map
