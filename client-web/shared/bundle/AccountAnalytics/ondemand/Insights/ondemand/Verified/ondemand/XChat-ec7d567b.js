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
            var n = r(902091).default,
                o = n(r(241856)),
                a = n(r(735138)),
                s = n(r(882792)),
                i = n(r(567003)),
                u = n(r(570782)),
                l = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
                c = r(946599),
                f = r(17352).getContainerName,
                h = r(334227).assertRelayContext,
                p = r(193860),
                d = r(202784),
                v = r(703383),
                _ = v.createFragmentSpecResolver,
                y = v.getDataIDsFromObject,
                m = v.isScalarAndEqual;
            function C(e, t) {
                var r,
                    n = f(e);
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
                            var i = h(e.__relayContext),
                                l = null !== (o = e.__rootIsQueryRenderer) && void 0 !== o && o,
                                c = _(i, n, t, e, l);
                            return (a.state = { data: c.resolve(), prevProps: e, prevPropsContext: i, relayProp: b(i.environment), resolver: c }), a;
                        }
                        (0, i.default)(c, r),
                            (c.getDerivedStateFromProps = function (e, r) {
                                var o,
                                    a = r.prevProps,
                                    s = h(e.__relayContext),
                                    i = null !== (o = e.__rootIsQueryRenderer) && void 0 !== o && o,
                                    u = y(t, a),
                                    l = y(t, e),
                                    c = r.resolver;
                                if (r.prevPropsContext.environment !== s.environment || !p(u, l)) return { data: (c = _(s, n, t, e, i)).resolve(), prevPropsContext: s, prevProps: e, relayProp: b(s.environment), resolver: c };
                                c.setProps(e);
                                var f = c.resolve();
                                return f !== r.data ? { data: f, prevProps: e, prevPropsContext: s, relayProp: b(s.environment) } : null;
                            });
                        var f = c.prototype;
                        return (
                            (f.componentDidMount = function () {
                                this._subscribeToNewResolverAndRerenderIfStoreHasChanged();
                            }),
                            (f.componentDidUpdate = function (e, t) {
                                this.state.resolver !== t.resolver ? (t.resolver.dispose(), this._subscribeToNewResolverAndRerenderIfStoreHasChanged()) : this._rerenderIfStoreHasChanged();
                            }),
                            (f.componentWillUnmount = function () {
                                this.state.resolver.dispose();
                            }),
                            (f.shouldComponentUpdate = function (e, r) {
                                if (r.data !== this.state.data) return !0;
                                for (var n = Object.keys(e), o = 0; o < n.length; o++) {
                                    var a = n[o];
                                    if ("__relayContext" === a) {
                                        if (r.prevPropsContext.environment !== this.state.prevPropsContext.environment) return !0;
                                    } else if (!t.hasOwnProperty(a) && !m(e[a], this.props[a])) return !0;
                                }
                                return !1;
                            }),
                            (f._rerenderIfStoreHasChanged = function () {
                                var e = this.state,
                                    t = e.data,
                                    r = e.resolver.resolve();
                                t !== r && this.setState({ data: r });
                            }),
                            (f._subscribeToNewResolverAndRerenderIfStoreHasChanged = function () {
                                var e = this.state,
                                    t = e.data,
                                    r = e.resolver,
                                    n = r.resolve();
                                r.setCallback(this.props, this._handleFragmentDataUpdate), t !== n && this.setState({ data: n });
                            }),
                            (f.render = function () {
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
                    return c(e, t, C);
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
                f = s.useState,
                h = s.useRef,
                p = s.useMemo,
                d = { rootIsQueryRenderer: !0 };
            e.exports = function (e) {
                var t,
                    r,
                    i = e.environment,
                    v = e.query,
                    _ = e.variables,
                    y = e.render,
                    m = ((t = _), (r = s.useRef(t)), a(r.current, t) || (r.current = t), r.current),
                    C = p(
                        function () {
                            var e = l(v);
                            return u(e, m);
                        },
                        [v, m],
                    ),
                    b = p(
                        function () {
                            return { environment: i };
                        },
                        [i],
                    ),
                    g = h(null),
                    R = f(null)[1],
                    x = h(null),
                    S = p(
                        function () {
                            i.check(C);
                            var e = i.lookup(C.fragment);
                            g.current = e.data;
                            var t = i.retain(C),
                                r = i.subscribe(e, function (e) {
                                    (g.current = e.data), R(g.current);
                                }),
                                n = !1;
                            return (
                                x.current && x.current(),
                                (x.current = function () {
                                    n || ((n = !0), (x.current = null), t.dispose(), r.dispose());
                                }),
                                e
                            );
                        },
                        [i, C],
                    );
                return (
                    c(
                        function () {
                            var e = x.current;
                            return function () {
                                e && e();
                            };
                        },
                        [S],
                    ),
                    s.createElement(n.Provider, { value: b }, s.createElement(o.Provider, { value: d }, y({ props: g.current })))
                );
            };
        },
        59432: (e, t, r) => {
            "use strict";
            var n = r(902091).default,
                o = n(r(241856)),
                a = n(r(735138)),
                s = n(r(882792)),
                i = n(r(567003)),
                u = n(r(570782)),
                l = n(r(463928)),
                c = ["componentRef"],
                f = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
                h = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
                p = r(946599),
                d = r(2775),
                v = r(17352),
                _ = v.getComponentName,
                y = v.getContainerName,
                m = r(23988),
                C = r(832907),
                b = r(334227).assertRelayContext,
                g = r(193860),
                R = r(647677),
                x = r(202784),
                S = r(703383),
                P = S.ConnectionInterface,
                F = S.Observable,
                E = S.RelayFeatureFlags,
                q = S.createFragmentSpecResolver,
                O = S.createOperationDescriptor,
                D = S.getDataIDsFromObject,
                I = S.getRequest,
                N = S.getVariablesFromObject,
                A = S.isScalarAndEqual,
                M = (r(826590), "forward");
            function k(e) {
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
            function Q(e, t, r) {
                _(e);
                var n,
                    p = y(e),
                    v = (function (e) {
                        var t = null,
                            r = !1;
                        for (var n in e) {
                            var o = e[n],
                                a = o.metadata && o.metadata.connection;
                            void 0 !== o.metadata && (r = !0), a && (1 !== a.length && R(!1), t && R(!1), (t = (0, l.default)((0, l.default)({}, a[0]), {}, { fragmentName: n })));
                        }
                        return r && null === t && R(!1), t || {};
                    })(t),
                    S =
                        r.getConnectionFromProps ||
                        (function (e) {
                            var t = e.path;
                            return (
                                t || R(!1),
                                function (r) {
                                    for (var n = r[e.fragmentName], o = 0; o < t.length; o++) {
                                        if (!n || "object" != typeof n) return null;
                                        n = n[t[o]];
                                    }
                                    return n;
                                }
                            );
                        })(v),
                    Q = r.direction || v.direction;
                Q || R(!1);
                var U =
                    r.getFragmentVariables ||
                    (function (e) {
                        var t = e.count;
                        return (
                            t || R(!1),
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
                                    return { dispose: o._fetchPage(n, k(t), { force: !0 }).unsubscribe };
                                }),
                                (0, u.default)((0, s.default)(o), "_loadMore", function (e, t, r) {
                                    if (!o._canFetchPage("loadMore")) return { dispose: function () {} };
                                    var n = k(t),
                                        a = o._getConnectionData();
                                    if (!a)
                                        return (
                                            F.create(function (e) {
                                                return e.complete();
                                            }).subscribe(n),
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
                            return (o._isARequestInFlight = !1), (o._refetchSubscription = null), (o._refetchVariables = null), !0 === E.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT ? (o._resolver = q(a, p, t, e, i)) : (o._resolver = q(a, p, t, e, i, o._handleFragmentDataUpdate)), (o.state = { data: o._resolver.resolve(), prevContext: a, contextForChildren: a, relayProp: o._buildRelayProp(a), resolverGeneration: 0 }), (o._isUnmounted = !1), (o._hasFetched = !1), o;
                        }
                        (0, i.default)(v, n);
                        var _ = v.prototype;
                        return (
                            (_.componentDidMount = function () {
                                (this._isUnmounted = !1), !0 === E.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT && this._subscribeToNewResolverAndRerenderIfStoreHasChanged();
                            }),
                            (_.componentDidUpdate = function (e, t) {
                                !0 === E.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT && (t.resolverGeneration !== this.state.resolverGeneration ? this._subscribeToNewResolverAndRerenderIfStoreHasChanged() : this._rerenderIfStoreHasChanged());
                            }),
                            (_.UNSAFE_componentWillReceiveProps = function (e) {
                                var r,
                                    n = this,
                                    o = b(e.__relayContext),
                                    a = null !== (r = e.__rootIsQueryRenderer) && void 0 !== r && r,
                                    s = D(t, this.props),
                                    i = D(t, e),
                                    u = d(t, this.props),
                                    l = d(t, e);
                                o.environment === this.state.prevContext.environment && g(u, l) && g(s, i)
                                    ? this._hasFetched || this._resolver.setProps(e)
                                    : (this._cleanup(),
                                      !0 === E.ENABLE_CONTAINERS_SUBSCRIBE_ON_COMMIT ? (this._resolver = q(o, p, t, e, a)) : (this._resolver = q(o, p, t, e, a, this._handleFragmentDataUpdate)),
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
                                    } else if (!t.hasOwnProperty(a) && !A(e[a], this.props[a])) return !0;
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
                                    n = S(r);
                                if (null == n) return null;
                                var o = P.get(),
                                    s = o.EDGES,
                                    i = o.PAGE_INFO,
                                    u = o.HAS_NEXT_PAGE,
                                    f = o.HAS_PREV_PAGE,
                                    h = o.END_CURSOR,
                                    p = o.START_CURSOR;
                                "object" != typeof n && R(!1);
                                var d = n[s],
                                    v = n[i];
                                if (null == d || null == v) return null;
                                Array.isArray(d) || R(!1), "object" != typeof v && R(!1);
                                var _ = Q === M ? v[u] : v[f],
                                    y = Q === M ? v[h] : v[p];
                                return "boolean" != typeof _ || (0 !== d.length && void 0 === y) ? null : { cursor: y, edgeCount: d.length, hasMore: _ };
                            }),
                            (_._getQueryFetcher = function () {
                                return this._queryFetcher || (this._queryFetcher = new C()), this._queryFetcher;
                            }),
                            (_._canFetchPage = function (e) {
                                return !this._isUnmounted;
                            }),
                            (_._fetchPage = function (e, n, o) {
                                var s,
                                    i = this,
                                    u = b(this.props.__relayContext).environment,
                                    c = this.props,
                                    h = (c.componentRef, c.__relayContext, c.__rootIsQueryRenderer, (0, a.default)(c, f)),
                                    p = (0, l.default)((0, l.default)({}, h), this.state.data),
                                    v = d(t, h);
                                (s = N(t, h)), (s = (0, l.default)((0, l.default)((0, l.default)({}, v), s), this._refetchVariables));
                                var _ = r.getVariables(p, { count: e.count, cursor: e.cursor }, s);
                                ("object" != typeof _ || null === _) && R(!1), (_ = (0, l.default)((0, l.default)({}, _), this._refetchVariables)), (s = (0, l.default)((0, l.default)({}, _), s));
                                var y = o ? { force: !!o.force } : void 0;
                                null != y && null != (null == o ? void 0 : o.metadata) && (y.metadata = null == o ? void 0 : o.metadata);
                                var m = I(r.query),
                                    C = O(m, _, y),
                                    x = null;
                                this._refetchSubscription && this._refetchSubscription.unsubscribe(), (this._hasFetched = !0);
                                var S = function () {
                                    i._refetchSubscription === x && ((i._refetchSubscription = null), (i._isARequestInFlight = !1));
                                };
                                return (
                                    (this._isARequestInFlight = !0),
                                    (x = this._getQueryFetcher()
                                        .execute({ environment: u, operation: C, preservePreviousReferences: !0 })
                                        .mergeMap(function (t) {
                                            return F.create(function (t) {
                                                !(function (t, r) {
                                                    var n = i._resolver.resolve();
                                                    i._resolver.setVariables(U(s, e.totalCount), C.request.node);
                                                    var o = i._resolver.resolve();
                                                    g(n, o) ? r() : i.setState({ data: o, contextForChildren: { environment: i.props.__relayContext.environment } }, r);
                                                })(0, function () {
                                                    t.next(), t.complete();
                                                });
                                            });
                                        })
                                        .do({ error: S, complete: S, unsubscribe: S })
                                        .subscribe(n || {})),
                                    (this._refetchSubscription = this._isARequestInFlight ? x : null),
                                    x
                                );
                            }),
                            (_._cleanup = function () {
                                this._resolver.dispose(), (this._refetchVariables = null), (this._hasFetched = !1), this._refetchSubscription && (this._refetchSubscription.unsubscribe(), (this._refetchSubscription = null), (this._isARequestInFlight = !1)), this._queryFetcher && this._queryFetcher.dispose();
                            }),
                            (_.render = function () {
                                var t = this.props,
                                    r = t.componentRef,
                                    n = (t.__relayContext, t.__rootIsQueryRenderer, (0, a.default)(t, h));
                                return x.createElement(m.Provider, { value: this.state.contextForChildren }, x.createElement(e, (0, o.default)({}, n, this.state.data, { ref: r, relay: this.state.relayProp })));
                            }),
                            v
                        );
                    })(x.Component)),
                    (0, u.default)(n, "displayName", p),
                    n
                );
            }
            e.exports = {
                createContainer: function (e, t, r) {
                    return p(e, t, function (e, t) {
                        return Q(e, t, r);
                    });
                },
            };
        },
        832907: (e, t, r) => {
            "use strict";
            var n = (0, r(902091).default)(r(570782)),
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
                                f = function () {
                                    t._selectionReferences = t._selectionReferences.concat(i);
                                };
                            return u(r) ? s(r, n).do({ error: l, complete: c, unsubscribe: f }) : r.execute({ operation: n }).do({ error: l, complete: c, unsubscribe: f });
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
                                f = this.execute({ environment: o, operation: c })
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
                                        f.unsubscribe();
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
            var n = r(902091).default,
                o = n(r(463928)),
                a = n(r(882792)),
                s = n(r(567003)),
                i = n(r(570782)),
                u = r(23988),
                l = r(832907),
                c = r(620793),
                f = r(193860),
                h = r(202784),
                p = r(703383),
                d = p.createOperationDescriptor,
                v = (p.deepFreeze, p.getRequest),
                _ = {},
                y = { rootIsQueryRenderer: !0 },
                m = (function (e) {
                    function t(t) {
                        var r;
                        (r = e.call(this, t) || this),
                            (0, i.default)((0, a.default)(r), "_handleDataChange", function (e) {
                                var t = null == e.error ? null : e.error,
                                    n = null == e.snapshot ? null : e.snapshot;
                                r.setState(function (e) {
                                    var r = e.requestCacheKey;
                                    return r && delete _[r], n === e.snapshot && t === e.error ? null : { renderProps: C(t, n, e.queryFetcher, e.retryCallbacks), snapshot: n, requestCacheKey: null };
                                });
                            });
                        var n,
                            s,
                            u = { handleDataChange: null, handleRetryAfterError: null };
                        if (t.query) {
                            var c = t.query;
                            (s = b(v(c).params, t.variables)), (n = _[s] ? _[s].queryFetcher : new l());
                        } else n = new l();
                        return (r._maybeHiddenOrFastRefresh = !1), (r.state = (0, o.default)({ prevPropsEnvironment: t.environment, prevPropsVariables: t.variables, prevQuery: t.query, queryFetcher: n, retryCallbacks: u }, R(t, n, u, s))), r;
                    }
                    (0, s.default)(t, e),
                        (t.getDerivedStateFromProps = function (e, t) {
                            return t.prevQuery === e.query && t.prevPropsEnvironment === e.environment && f(t.prevPropsVariables, e.variables) ? null : g(e, t);
                        });
                    var r = t.prototype;
                    return (
                        (r.componentDidMount = function () {
                            var e = this;
                            if (!0 === this._maybeHiddenOrFastRefresh)
                                return (
                                    (this._maybeHiddenOrFastRefresh = !1),
                                    void this.setState(function (t) {
                                        var r = g(e.props, t),
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
                            return h.createElement(u.Provider, { value: r }, h.createElement(c.Provider, { value: y }, this.props.render(t)));
                        }),
                        t
                    );
                })(h.Component);
            function C(e, t, r, n) {
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
            function g(e, t) {
                var r,
                    n = e.query,
                    a = t.queryFetcher.getSelectionReferences();
                if ((t.queryFetcher.disposeRequest(), n)) {
                    var s = b(v(n).params, e.variables);
                    r = _[s] ? _[s].queryFetcher : new l(a);
                } else r = new l(a);
                return (0, o.default)({ prevQuery: e.query, prevPropsEnvironment: e.environment, prevPropsVariables: e.variables, queryFetcher: r }, R(e, r, t.retryCallbacks));
            }
            function R(e, t, r, n) {
                var o = e.environment,
                    a = e.query,
                    s = e.variables,
                    i = e.cacheConfig,
                    u = o;
                if (!a) return t.dispose(), { error: null, relayContext: { environment: u }, renderProps: { error: null, props: {}, retry: null }, requestCacheKey: null };
                var l = v(a),
                    c = d(l, s, i),
                    f = { environment: u };
                if ("string" == typeof n && _[n]) {
                    var h = _[n].snapshot;
                    return h ? { error: null, relayContext: f, renderProps: C(null, h, t, r), snapshot: h, requestCacheKey: n } : { error: null, relayContext: f, renderProps: { error: null, props: null, retry: null }, snapshot: null, requestCacheKey: n };
                }
                try {
                    var p = t.lookupInStore(u, c, e.fetchPolicy),
                        y = t.fetch({ environment: u, onDataChange: null, operation: c }) || p;
                    return (n = n || b(l.params, e.variables)), (_[n] = { queryFetcher: t, snapshot: y }), y ? { error: null, relayContext: f, renderProps: C(null, y, t, r), snapshot: y, requestCacheKey: n } : { error: null, relayContext: f, renderProps: { error: null, props: null, retry: null }, snapshot: null, requestCacheKey: n };
                } catch (e) {
                    return { error: e, relayContext: f, renderProps: C(e, null, t, r), snapshot: null, requestCacheKey: n };
                }
            }
            e.exports = m;
        },
        620793: (e, t, r) => {
            "use strict";
            var n = r(202784);
            e.exports = n.createContext({ rootIsQueryRenderer: !1 });
        },
        878663: (e, t, r) => {
            "use strict";
            var n = r(902091).default,
                o = n(r(241856)),
                a = n(r(735138)),
                s = n(r(463928)),
                i = n(r(882792)),
                u = n(r(567003)),
                l = n(r(570782)),
                c = ["componentRef", "__relayContext", "__rootIsQueryRenderer"],
                f = r(946599),
                h = r(2775),
                p = r(17352).getContainerName,
                d = r(23988),
                v = r(832907),
                _ = r(334227).assertRelayContext,
                y = r(193860),
                m = r(202784),
                C = r(703383),
                b = C.Observable,
                g = C.createFragmentSpecResolver,
                R = C.createOperationDescriptor,
                x = C.getDataIDsFromObject,
                S = C.getRequest,
                P = C.getVariablesFromObject,
                F = C.isScalarAndEqual;
            r(826590);
            function E(e, t) {
                return { environment: e, refetch: t };
            }
            e.exports = {
                createContainer: function (e, t, r) {
                    return f(e, t, function (e, t) {
                        return (function (e, t, r) {
                            var n,
                                f = p(e);
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
                                                    l = h(t, a.props),
                                                    c = "function" == typeof e ? e(a._getFragmentVariables()) : e;
                                                c = (0, s.default)((0, s.default)({}, l), c);
                                                var f = n ? (0, s.default)((0, s.default)({}, c), n) : c,
                                                    p = i ? { force: !!i.force } : void 0;
                                                null != p && null != (null == i ? void 0 : i.metadata) && (p.metadata = null == i ? void 0 : i.metadata);
                                                var d,
                                                    v = "function" == typeof o ? { next: o, error: o } : o || {},
                                                    y = S(r),
                                                    m = R(y, c, p);
                                                return (
                                                    (a.state.localVariables = c),
                                                    a._refetchSubscription && a._refetchSubscription.unsubscribe(),
                                                    null != a._getQueryFetcher().lookupInStore(u, m, null == i ? void 0 : i.fetchPolicy)
                                                        ? (a.state.resolver.setVariables(f, m.request.node),
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
                                                              .execute({ environment: u, operation: m, preservePreviousReferences: !0 })
                                                              .mergeMap(function (e) {
                                                                  return (
                                                                      a.state.resolver.setVariables(f, m.request.node),
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
                                        var p = g(u, f, t, e, c);
                                        return (a.state = { data: p.resolve(), localVariables: null, prevProps: e, prevPropsContext: u, contextForChildren: u, relayProp: E(u.environment, a._refetch), resolver: p }), (a._isUnmounted = !1), a;
                                    }
                                    (0, u.default)(p, n);
                                    var C = p.prototype;
                                    return (
                                        (C.componentDidMount = function () {
                                            (this._isUnmounted = !1), this._subscribeToNewResolverAndRerenderIfStoreHasChanged();
                                        }),
                                        (C.componentDidUpdate = function (e, t) {
                                            this.state.resolver !== t.resolver ? (t.resolver.dispose(), this._queryFetcher && this._queryFetcher.dispose(), this._refetchSubscription && this._refetchSubscription.unsubscribe(), this._subscribeToNewResolverAndRerenderIfStoreHasChanged()) : this._rerenderIfStoreHasChanged();
                                        }),
                                        (p.getDerivedStateFromProps = function (e, r) {
                                            var n,
                                                o = r.prevProps,
                                                a = _(e.__relayContext),
                                                s = null !== (n = e.__rootIsQueryRenderer) && void 0 !== n && n,
                                                i = x(t, o),
                                                u = x(t, e),
                                                l = h(t, o),
                                                c = h(t, e),
                                                p = r.resolver;
                                            if (r.prevPropsContext.environment !== a.environment || !y(l, c) || !y(i, u)) return { data: (p = g(a, f, t, e, s)).resolve(), localVariables: null, prevProps: e, prevPropsContext: a, contextForChildren: a, relayProp: E(a.environment, r.relayProp.refetch), resolver: p };
                                            r.localVariables || p.setProps(e);
                                            var d = p.resolve();
                                            return d !== r.data ? { data: d, prevProps: e } : null;
                                        }),
                                        (C.componentWillUnmount = function () {
                                            (this._isUnmounted = !0), this.state.resolver.dispose(), this._queryFetcher && this._queryFetcher.dispose(), this._refetchSubscription && this._refetchSubscription.unsubscribe();
                                        }),
                                        (C.shouldComponentUpdate = function (e, r) {
                                            if (r.data !== this.state.data || r.relayProp !== this.state.relayProp) return !0;
                                            for (var n = Object.keys(e), o = 0; o < n.length; o++) {
                                                var a = n[o];
                                                if ("__relayContext" === a) {
                                                    if (this.state.prevPropsContext.environment !== r.prevPropsContext.environment) return !0;
                                                } else if (!t.hasOwnProperty(a) && !F(e[a], this.props[a])) return !0;
                                            }
                                            return !1;
                                        }),
                                        (C._rerenderIfStoreHasChanged = function () {
                                            var e = this.state,
                                                t = e.data,
                                                r = e.resolver.resolve();
                                            t !== r && this.setState({ data: r });
                                        }),
                                        (C._subscribeToNewResolverAndRerenderIfStoreHasChanged = function () {
                                            var e = this.state,
                                                t = e.data,
                                                r = e.resolver,
                                                n = r.resolve();
                                            r.setCallback(this.props, this._handleFragmentDataUpdate), t !== n && this.setState({ data: n });
                                        }),
                                        (C._getFragmentVariables = function () {
                                            return P(t, this.props);
                                        }),
                                        (C._getQueryFetcher = function () {
                                            return this._queryFetcher || (this._queryFetcher = new v()), this._queryFetcher;
                                        }),
                                        (C.render = function () {
                                            var t = this.props,
                                                r = t.componentRef,
                                                n = (t.__relayContext, t.__rootIsQueryRenderer, (0, a.default)(t, c)),
                                                s = this.state,
                                                i = s.relayProp,
                                                u = s.contextForChildren;
                                            return m.createElement(d.Provider, { value: u }, m.createElement(e, (0, o.default)({}, n, this.state.data, { ref: r, relay: i })));
                                        }),
                                        p
                                    );
                                })(m.Component)),
                                (0, l.default)(n, "displayName", f),
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
            var n = (0, r(902091).default)(r(241856)),
                o = r(499277),
                a = r(17352),
                s = a.getComponentName,
                i = a.getContainerName,
                u = r(23988),
                l = r(620793),
                c = r(647677),
                f = r(202784),
                h = r(703383).getFragment,
                p = f.useContext;
            e.exports = function (e, t, r) {
                var a = i(e);
                o(s(e), t);
                var d = {};
                for (var v in t) d[v] = h(t[v]);
                var _ = r(e, d);
                function y(e, t) {
                    var r,
                        o = p(u);
                    null == o && c(!1);
                    var a = p(l);
                    return f.createElement(_, (0, n.default)({}, e, { __relayContext: o, __rootIsQueryRenderer: null !== (r = null == a ? void 0 : a.rootIsQueryRenderer) && void 0 !== r && r, componentRef: e.componentRef || t }));
                }
                return (_.displayName = a), (y.displayName = a), f.forwardRef(y);
            };
        },
        2775: (e, t, r) => {
            "use strict";
            var n = (0, r(902091).default)(r(463928)),
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
                            f = o(l, c),
                            h = null != f && "PluralReaderSelector" === f.kind ? (null !== (s = null === (i = f.selectors[0]) || void 0 === i ? void 0 : i.owner.variables) && void 0 !== s ? s : {}) : null !== (u = null == f ? void 0 : f.owner.variables) && void 0 !== u ? u : {};
                        r = (0, n.default)((0, n.default)({}, r), h);
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
                f = r(606161).loadQuery,
                h = r(982317),
                p = r(490434),
                d = r(178733),
                v = r(265933),
                _ = r(277660),
                y = r(712696),
                m = r(351743),
                C = r(598),
                b = r(488267),
                g = r(928123),
                R = r(72845),
                x = r(463836),
                S = r(437429),
                P = r(353391),
                F = r(19663),
                E = r(703383);
            e.exports = { ConnectionHandler: E.ConnectionHandler, QueryRenderer: i, LocalQueryRenderer: a, MutationTypes: E.MutationTypes, RangeOperations: E.RangeOperations, ReactRelayContext: n, applyOptimisticMutation: E.applyOptimisticMutation, commitLocalUpdate: E.commitLocalUpdate, commitMutation: E.commitMutation, createFragmentContainer: o.createContainer, createPaginationContainer: s.createContainer, createRefetchContainer: u.createContainer, fetchQuery_DEPRECATED: E.fetchQuery_DEPRECATED, graphql: E.graphql, readInlineData: E.readInlineData, requestSubscription: E.requestSubscription, EntryPointContainer: l, RelayEnvironmentProvider: p, ProfilerContext: h, fetchQuery: E.fetchQuery, loadQuery: f, loadEntryPoint: c, useClientQuery: d, useFragment: _, useLazyLoadQuery: y, useEntryPointLoader: v, useQueryLoader: R, useMutation: m, usePaginationFragment: C, usePreloadedQuery: g, useRefetchableFragment: x, usePrefetchableForwardPaginationFragment_EXPERIMENTAL: b, useRelayEnvironment: S, useSubscribeToInvalidationState: P, useSubscription: F };
        },
        996792: (e) => {
            "use strict";
            e.exports = function (e) {
                return "object" == typeof e && null !== e && "function" == typeof e.check && "function" == typeof e.lookup && "function" == typeof e.retain && "function" == typeof e.execute && "function" == typeof e.subscribe;
            };
        },
        178733: (e, t, r) => {
            "use strict";
            var n = (0, r(902091).default)(r(463928)),
                o = r(712696);
            e.exports = function (e, t, r) {
                return o(e, t, (0, n.default)((0, n.default)({}, r), {}, { fetchPolicy: "store-only" }));
            };
        },
        488267: (e, t, r) => {
            "use strict";
            var n = (0, r(902091).default)(r(463928)),
                o = r(277660),
                a = r(528246),
                s = r(302408),
                i = r(437429),
                u = r(400023),
                l = r(647677),
                c = r(202784),
                f = c.useCallback,
                h = (c.useDebugValue, c.useEffect),
                p = c.useLayoutEffect,
                d = c.useMemo,
                v = c.useRef,
                _ = c.useState,
                y = r(703383),
                m = y.getFragment,
                C = y.getFragmentIdentifier,
                b = y.getPaginationMetadata,
                g = r(703383),
                R = g.ConnectionInterface,
                x = g.getSelector,
                S = g.getValueAtPath;
            e.exports = function (e, t, r, c, y) {
                var g,
                    P,
                    F = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 1,
                    E = m(e);
                u(E, "first argument of usePrefetchableForwardPaginationFragment_EXPERIMENTAL()");
                var q = "usePrefetchableForwardPaginationFragment_EXPERIMENTAL()",
                    O = b(E, q),
                    D = O.connectionPathInFragmentData,
                    I = O.paginationRequest,
                    N = O.paginationMetadata,
                    A = s(E, t, q),
                    M = A.fragmentData,
                    k = A.fragmentRef,
                    Q = A.refetch,
                    U = C(E, k),
                    w = d(
                        function () {
                            var e = S(M, D);
                            return null == e ? null : e[R.get().EDGES];
                        },
                        [D, M],
                    ),
                    T = null == w ? -1 : w.length,
                    V = _(null != c ? c : T),
                    H = V[0],
                    L = V[1],
                    j = H;
                -1 === H && -1 !== T && L((j = null != c ? c : T));
                var B = i(),
                    K = _(!1),
                    G = K[0],
                    W = K[1],
                    X = _(!1),
                    z = X[0],
                    J = X[1],
                    Y = v(0),
                    Z = f(
                        function (e) {
                            var t,
                                r = null === (t = B.getScheduler()) || void 0 === t ? void 0 : t.schedule;
                            r
                                ? r(function () {
                                      W(e);
                                  })
                                : W(e);
                        },
                        [B],
                    ),
                    $ = v(!1),
                    ee = d(
                        function () {
                            return {
                                start: function () {
                                    ($.current = !0), W(!0);
                                },
                                complete: function () {
                                    ($.current = !1), Z(!1);
                                },
                                error: function () {
                                    ($.current = !1), Z(!1);
                                },
                            };
                        },
                        [Z],
                    ),
                    te = f(
                        function () {
                            if (!z) {
                                var e,
                                    t = null === (e = B.getScheduler()) || void 0 === e ? void 0 : e.schedule;
                                t
                                    ? t(function () {
                                          L(-1);
                                      })
                                    : L(-1);
                            }
                            ($.current = !1), Z(!1);
                        },
                        [B, z, Z],
                    ),
                    re = a({ componentDisplayName: q, connectionPathInFragmentData: D, direction: "forward", fragmentData: M, fragmentIdentifier: U, fragmentNode: E, fragmentRef: k, paginationMetadata: N, paginationRequest: I, observer: ee, onReset: te }),
                    ne = re[0],
                    oe = re[1],
                    ae = re[2];
                p(
                    function () {
                        Y.current = T - j;
                    },
                    [j, T],
                );
                var se = null == y ? void 0 : y.UNSTABLE_extraVariables,
                    ie = null == y ? void 0 : y.onComplete,
                    ue = f(
                        function (e, t) {
                            (!$.current || Y.current >= 0) &&
                                ((Y.current -= e),
                                L(function (t) {
                                    return t + e;
                                }),
                                !$.current &&
                                    Y.current < 0 &&
                                    ne(
                                        Math.max(F, Math.min(e, r - Y.current)),
                                        null != t
                                            ? t
                                            : {
                                                  onComplete: ie,
                                                  UNSTABLE_extraVariables:
                                                      "function" == typeof se
                                                          ? se({
                                                                hasNext: oe,
                                                                data: M,
                                                                getServerEdges: function () {
                                                                    var e = x(le, w);
                                                                    return null == e
                                                                        ? []
                                                                        : ("PluralReaderSelector" !== e.kind && l(!1),
                                                                          e.selectors.map(function (e) {
                                                                              return B.lookup(e).data;
                                                                          }));
                                                                },
                                                            })
                                                          : se,
                                              },
                                    ));
                        },
                        [r, ne, F, w, M, se, ie],
                    ),
                    le = null === (g = e.metadata) || void 0 === g || null === (P = g.refetch) || void 0 === P ? void 0 : P.edgesFragment;
                null == le && l(!1),
                    h(
                        function () {
                            if (!$.current && !G && !z && oe && (T - j < r || j > T)) {
                                var e = ie;
                                ne(Math.max(r - Math.max(T - j, 0), j - T, F), {
                                    onComplete: e,
                                    UNSTABLE_extraVariables:
                                        "function" == typeof se
                                            ? se({
                                                  hasNext: oe,
                                                  data: M,
                                                  getServerEdges: function () {
                                                      var e = x(le, w);
                                                      return null == e
                                                          ? []
                                                          : ("PluralReaderSelector" !== e.kind && l(!1),
                                                            e.selectors.map(function (e) {
                                                                return B.lookup(e).data;
                                                            }));
                                                  },
                                              })
                                            : se,
                                });
                            }
                        },
                        [oe, r, z, ne, j, se, ie, T, w, G, F, B, le],
                    );
                var ce = Math.min(j, T),
                    fe = d(
                        function () {
                            var e;
                            return null !== (e = null == w ? void 0 : w.slice(0, ce)) && void 0 !== e ? e : [];
                        },
                        [w, ce],
                    ),
                    he = o(le, fe),
                    pe = f(
                        function (e, t) {
                            return (
                                ae(),
                                J(!0),
                                Q(
                                    e,
                                    (0, n.default)(
                                        (0, n.default)({}, t),
                                        {},
                                        {
                                            onComplete: function (e) {
                                                var r,
                                                    n,
                                                    o = null === (r = B.getScheduler()) || void 0 === r ? void 0 : r.schedule;
                                                o
                                                    ? o(function () {
                                                          J(!1), L(-1);
                                                      })
                                                    : (J(!1), L(-1)),
                                                    null == t || null === (n = t.onComplete) || void 0 === n || n.call(t, e);
                                            },
                                            __environment: void 0,
                                        },
                                    ),
                                )
                            );
                        },
                        [ae, B, Q],
                    );
                return { edges: he, data: M, loadNext: ue, hasNext: oe || T > j, isLoadingNext: G && j > T, refetch: pe };
            };
        },
        882792: (e) => {
            (e.exports = function (e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e;
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        241856: (e) => {
            function t() {
                return (
                    (e.exports = t =
                        Object.assign
                            ? Object.assign.bind()
                            : function (e) {
                                  for (var t = 1; t < arguments.length; t++) {
                                      var r = arguments[t];
                                      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
                                  }
                                  return e;
                              }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports),
                    t.apply(null, arguments)
                );
            }
            (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
        },
        567003: (e, t, r) => {
            var n = r(923397);
            (e.exports = function (e, t) {
                (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), n(e, t);
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        735138: (e) => {
            (e.exports = function (e, t) {
                if (null == e) return {};
                var r = {};
                for (var n in e)
                    if ({}.hasOwnProperty.call(e, n)) {
                        if (t.includes(n)) continue;
                        r[n] = e[n];
                    }
                return r;
            }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
        },
        923397: (e) => {
            function t(r, n) {
                return (
                    (e.exports = t =
                        Object.setPrototypeOf
                            ? Object.setPrototypeOf.bind()
                            : function (e, t) {
                                  return (e.__proto__ = t), e;
                              }),
                    (e.exports.__esModule = !0),
                    (e.exports.default = e.exports),
                    t(r, n)
                );
            }
            (e.exports = t), (e.exports.__esModule = !0), (e.exports.default = e.exports);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AccountAnalytics~ondemand.Insights~ondemand.Verified~ondemand.XChat-ec7d567b.b3eecfda.js.map
