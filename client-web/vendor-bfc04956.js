window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-bfc04956"],
        {
            703383: (e, t, r) => {
                e.exports = r(957290);
            },
            162485: (e, t, r) => {
                "use strict";
                var n = r(487309),
                    a = r(891022).observeFragment,
                    l = r(276103).waitForFragmentData;
                e.exports = {
                    resolverDataInjector: n,
                    isValueResult: function (e) {
                        return !0 === e.ok;
                    },
                    isErrorResult: function (e) {
                        return !1 === e.ok;
                    },
                    observeFragment: a,
                    waitForFragmentData: l,
                };
            },
            113725: (e, t, r) => {
                "use strict";
                var n = r(262485),
                    a = r(17276),
                    l = r(647677);
                e.exports = function (e) {
                    switch (e) {
                        case "connection":
                            return n;
                        case "deleteRecord":
                            return a.DeleteRecordHandler;
                        case "deleteEdge":
                            return a.DeleteEdgeHandler;
                        case "appendEdge":
                            return a.AppendEdgeHandler;
                        case "prependEdge":
                            return a.PrependEdgeHandler;
                        case "appendNode":
                            return a.AppendNodeHandler;
                        case "prependNode":
                            return a.PrependNodeHandler;
                    }
                    l(!1);
                };
            },
            262485: (e, t, r) => {
                "use strict";
                var n = r(286190).generateClientID,
                    a = r(108475).getStableStorageKey,
                    l = r(985594),
                    o = r(317253),
                    i = r(647677),
                    s = (r(826590), "connection"),
                    u = "__connection_next_edge_index";
                function d(e, t, r) {
                    if (null == r) return r;
                    var a = o.get().EDGES,
                        l = t.getValue(u);
                    "number" != typeof l && i(!1);
                    var s = n(t.getDataID(), a, l),
                        d = e.create(s, r.getType());
                    return d.copyFieldsFrom(r), null == d.getValue("cursor") && d.setValue(null, "cursor"), t.setValue(l + 1, u), d;
                }
                function g(e, t, r) {
                    for (var n = o.get().NODE, a = 0; a < e.length; a++) {
                        var l = e[a];
                        if (l) {
                            var i = l.getLinkedRecord(n),
                                s = i && i.getDataID();
                            if (s) {
                                if (r.has(s)) continue;
                                r.add(s);
                            }
                            t.push(l);
                        }
                    }
                }
                e.exports = {
                    buildConnectionEdge: d,
                    createEdge: function (e, t, r, a) {
                        var l = o.get().NODE,
                            i = n(t.getDataID(), r.getDataID()),
                            s = e.get(i);
                        return s || (s = e.create(i, a)), s.setLinkedRecord(r, l), null == s.getValue("cursor") && s.setValue(null, "cursor"), s;
                    },
                    deleteNode: function (e, t) {
                        var r = o.get(),
                            n = r.EDGES,
                            a = r.NODE,
                            l = e.getLinkedRecords(n);
                        if (l) {
                            for (var i, s = 0; s < l.length; s++) {
                                var u = l[s],
                                    d = u && u.getLinkedRecord(a);
                                null != d && d.getDataID() === t ? void 0 === i && (i = l.slice(0, s)) : void 0 !== i && i.push(u);
                            }
                            void 0 !== i && e.setLinkedRecords(i, n);
                        }
                    },
                    getConnection: function (e, t, r) {
                        var n = l(s, t, null);
                        return e.getLinkedRecord(n, r);
                    },
                    getConnectionID: function (e, t, r) {
                        var o = l(s, t, null),
                            i = a(o, r);
                        return n(e, i);
                    },
                    insertEdgeAfter: function (e, t, r) {
                        var n = o.get(),
                            a = n.CURSOR,
                            l = n.EDGES,
                            i = e.getLinkedRecords(l);
                        if (i) {
                            var s;
                            if (null == r) s = i.concat(t);
                            else {
                                s = [];
                                for (var u = !1, d = 0; d < i.length; d++) {
                                    var g = i[d];
                                    if ((s.push(g), null != g)) r === g.getValue(a) && (s.push(t), (u = !0));
                                }
                                u || s.push(t);
                            }
                            e.setLinkedRecords(s, l);
                        } else e.setLinkedRecords([t], l);
                    },
                    insertEdgeBefore: function (e, t, r) {
                        var n = o.get(),
                            a = n.CURSOR,
                            l = n.EDGES,
                            i = e.getLinkedRecords(l);
                        if (i) {
                            var s;
                            if (null == r) s = [t].concat(i);
                            else {
                                s = [];
                                for (var u = !1, d = 0; d < i.length; d++) {
                                    var g = i[d];
                                    if (null != g) r === g.getValue(a) && (s.push(t), (u = !0));
                                    s.push(g);
                                }
                                u || s.unshift(t);
                            }
                            e.setLinkedRecords(s, l);
                        } else e.setLinkedRecords([t], l);
                    },
                    update: function (e, t) {
                        var r = e.get(t.dataID);
                        if (r) {
                            var a = o.get(),
                                l = a.EDGES,
                                i = a.END_CURSOR,
                                s = a.HAS_NEXT_PAGE,
                                c = a.HAS_PREV_PAGE,
                                f = a.PAGE_INFO,
                                E = a.PAGE_INFO_TYPE,
                                R = a.START_CURSOR,
                                v = r.getLinkedRecord(t.fieldKey),
                                p = v && v.getLinkedRecord(f);
                            if (v) {
                                var D = n(r.getDataID(), t.handleKey),
                                    y = r.getLinkedRecord(t.handleKey),
                                    F = null != y ? y : e.get(D),
                                    m = F && F.getLinkedRecord(f);
                                if (F) {
                                    null == y && r.setLinkedRecord(F, t.handleKey);
                                    var _ = F,
                                        S = v.getLinkedRecords(l);
                                    S &&
                                        (S = S.map(function (t) {
                                            return d(e, _, t);
                                        }));
                                    var h = _.getLinkedRecords(l),
                                        I = _.getLinkedRecord(f);
                                    _.copyFieldsFrom(v), h && _.setLinkedRecords(h, l), I && _.setLinkedRecord(I, f);
                                    var V = [],
                                        b = t.args;
                                    if (h && S)
                                        if (null != b.after) {
                                            var O,
                                                P = null === (O = m) || void 0 === O ? void 0 : O.getValue(i),
                                                A = null == p ? void 0 : p.getValue(i);
                                            if (!(m && b.after === P) && !(m && P === A)) return;
                                            var L = new Set();
                                            g(h, V, L), g(S, V, L);
                                        } else if (null != b.before) {
                                            if (!m || b.before !== m.getValue(R)) return;
                                            var k = new Set();
                                            g(S, V, k), g(h, V, k);
                                        } else V = S;
                                    else V = S || h;
                                    if ((null != V && V !== h && _.setLinkedRecords(V, l), m && p))
                                        if (null == b.after && null == b.before) m.copyFieldsFrom(p);
                                        else if (null != b.before || (null == b.after && b.last)) {
                                            m.setValue(!!p.getValue(c), c);
                                            var N = p.getValue(R);
                                            "string" == typeof N && m.setValue(N, R);
                                        } else if (null != b.after || (null == b.before && b.first)) {
                                            m.setValue(!!p.getValue(s), s);
                                            var C = p.getValue(i);
                                            "string" == typeof C && m.setValue(C, i);
                                        }
                                } else {
                                    var K = e.create(D, v.getType());
                                    K.setValue(0, u), K.copyFieldsFrom(v);
                                    var T = v.getLinkedRecords(l);
                                    T &&
                                        ((T = T.map(function (t) {
                                            return d(e, K, t);
                                        })),
                                        K.setLinkedRecords(T, l)),
                                        r.setLinkedRecord(K, t.handleKey),
                                        (m = e.create(n(K.getDataID(), f), E)).setValue(!1, s),
                                        m.setValue(!1, c),
                                        m.setValue(null, i),
                                        m.setValue(null, R),
                                        p && m.copyFieldsFrom(p),
                                        K.setLinkedRecord(m, f);
                                }
                            } else r.setValue(null, t.handleKey, void 0, r.getErrors(t.fieldKey));
                        }
                    },
                };
            },
            317253: (e) => {
                "use strict";
                var t = { after: !0, before: !0, find: !0, first: !0, last: !0, surrounds: !0 },
                    r = { CURSOR: "cursor", EDGES: "edges", END_CURSOR: "endCursor", HAS_NEXT_PAGE: "hasNextPage", HAS_PREV_PAGE: "hasPreviousPage", NODE: "node", PAGE_INFO_TYPE: "PageInfo", PAGE_INFO: "pageInfo", START_CURSOR: "startCursor" },
                    n = {
                        inject: function (e) {
                            r = e;
                        },
                        get: function () {
                            return r;
                        },
                        isConnectionCall: function (e) {
                            return t.hasOwnProperty(e.name);
                        },
                    };
                e.exports = n;
            },
            17276: (e, t, r) => {
                "use strict";
                var n = (0, r(183491).default)(r(158663)),
                    a = r(262485),
                    l = r(317253),
                    o = r(647677),
                    i =
                        (r(826590),
                        {
                            update: function (e, t) {
                                var r = e.get(t.dataID);
                                if (null != r) {
                                    var n = r.getValue(t.fieldKey);
                                    "string" == typeof n
                                        ? e.delete(n)
                                        : Array.isArray(n) &&
                                          n.forEach(function (t) {
                                              "string" == typeof t && e.delete(t);
                                          });
                                }
                            },
                        }),
                    s = {
                        update: function (e, t) {
                            var r = e.get(t.dataID);
                            if (null != r) {
                                var l = t.handleArgs.connections;
                                null == l && o(!1);
                                var i = r.getValue(t.fieldKey);
                                (Array.isArray(i) ? i : [i]).forEach(function (t) {
                                    if ("string" == typeof t) {
                                        var r,
                                            o = (0, n.default)(l);
                                        try {
                                            for (o.s(); !(r = o.n()).done; ) {
                                                var i = r.value,
                                                    s = e.get(i);
                                                null != s && a.deleteNode(s, t);
                                            }
                                        } catch (e) {
                                            o.e(e);
                                        } finally {
                                            o.f();
                                        }
                                    }
                                });
                            }
                        },
                    },
                    u = { update: f(a.insertEdgeAfter) },
                    d = { update: f(a.insertEdgeBefore) },
                    g = { update: E(a.insertEdgeAfter) },
                    c = { update: E(a.insertEdgeBefore) };
                function f(e) {
                    return function (t, r) {
                        var i,
                            s = t.get(r.dataID);
                        if (null != s) {
                            var u,
                                d,
                                g = r.handleArgs.connections;
                            null == g && o(!1);
                            try {
                                u = s.getLinkedRecord(r.fieldKey);
                            } catch (e) {}
                            if (!u)
                                try {
                                    d = s.getLinkedRecords(r.fieldKey);
                                } catch (e) {}
                            if (null != u || null != d) {
                                var c,
                                    f = l.get(),
                                    E = f.NODE,
                                    R = f.EDGES,
                                    v = null !== (i = d) && void 0 !== i ? i : [u],
                                    p = (0, n.default)(v);
                                try {
                                    var D = function () {
                                        var r = c.value;
                                        if (null == r) return "continue";
                                        var l = r.getLinkedRecord("node");
                                        if (!l) return "continue";
                                        var i,
                                            s = l.getDataID(),
                                            u = (0, n.default)(g);
                                        try {
                                            for (u.s(); !(i = u.n()).done; ) {
                                                var d = i.value,
                                                    f = t.get(d);
                                                if (null != f)
                                                    if (
                                                        !(null === (y = f.getLinkedRecords(R)) || void 0 === y
                                                            ? void 0
                                                            : y.some(function (e) {
                                                                  var t;
                                                                  return (null == e || null === (t = e.getLinkedRecord(E)) || void 0 === t ? void 0 : t.getDataID()) === s;
                                                              }))
                                                    ) {
                                                        var v = a.buildConnectionEdge(t, f, r);
                                                        null == v && o(!1), e(f, v);
                                                    }
                                            }
                                        } catch (e) {
                                            u.e(e);
                                        } finally {
                                            u.f();
                                        }
                                    };
                                    for (p.s(); !(c = p.n()).done; ) {
                                        var y;
                                        D();
                                    }
                                } catch (e) {
                                    p.e(e);
                                } finally {
                                    p.f();
                                }
                            }
                        }
                    };
                }
                function E(e) {
                    return function (t, r) {
                        var i,
                            s = t.get(r.dataID);
                        if (null != s) {
                            var u,
                                d,
                                g = r.handleArgs,
                                c = g.connections,
                                f = g.edgeTypeName;
                            null == c && o(!1), null == f && o(!1);
                            try {
                                u = s.getLinkedRecord(r.fieldKey);
                            } catch (e) {}
                            if (!u)
                                try {
                                    d = s.getLinkedRecords(r.fieldKey);
                                } catch (e) {}
                            if (null != u || null != d) {
                                var E,
                                    R = l.get(),
                                    v = R.NODE,
                                    p = R.EDGES,
                                    D = null !== (i = d) && void 0 !== i ? i : [u],
                                    y = (0, n.default)(D);
                                try {
                                    var F = function () {
                                        var r = E.value;
                                        if (null == r) return "continue";
                                        var l,
                                            i = r.getDataID(),
                                            s = (0, n.default)(c);
                                        try {
                                            for (s.s(); !(l = s.n()).done; ) {
                                                var u = l.value,
                                                    d = t.get(u);
                                                if (null != d)
                                                    if (
                                                        !(null === (m = d.getLinkedRecords(p)) || void 0 === m
                                                            ? void 0
                                                            : m.some(function (e) {
                                                                  var t;
                                                                  return (null == e || null === (t = e.getLinkedRecord(v)) || void 0 === t ? void 0 : t.getDataID()) === i;
                                                              }))
                                                    ) {
                                                        var g = a.createEdge(t, d, r, f);
                                                        null == g && o(!1), e(d, g);
                                                    }
                                            }
                                        } catch (e) {
                                            s.e(e);
                                        } finally {
                                            s.f();
                                        }
                                    };
                                    for (y.s(); !(E = y.n()).done; ) {
                                        var m;
                                        F();
                                    }
                                } catch (e) {
                                    y.e(e);
                                } finally {
                                    y.f();
                                }
                            }
                        }
                    };
                }
                e.exports = { AppendEdgeHandler: u, DeleteRecordHandler: i, PrependEdgeHandler: d, AppendNodeHandler: g, PrependNodeHandler: c, DeleteEdgeHandler: s };
            },
            957290: (e, t, r) => {
                "use strict";
                var n = r(162485),
                    a = n.isErrorResult,
                    l = n.isValueResult,
                    o = r(262485),
                    i = r(317253),
                    s = r(17276),
                    u = r(113725),
                    d = r(602522),
                    g = r(53647),
                    c = r(921622),
                    f = r(896849),
                    E = r(895521),
                    R = r(408122),
                    v = r(909259),
                    p = r(10622),
                    D = r(46154),
                    y = r(692519),
                    F = r(585488),
                    m = r(580189),
                    _ = r(286190),
                    S = _.generateClientID,
                    h = _.generateUniqueClientID,
                    I = _.isClientID,
                    V = r(42211),
                    b = r(949420),
                    O = r(539369),
                    P = r(514840),
                    A = P.isSuspenseSentinel,
                    L = P.suspenseSentinel,
                    k = r(158446),
                    N = r(990242),
                    C = r(700378),
                    K = r(278490),
                    T = r(767408),
                    H = r(705180),
                    Y = r(464711),
                    G = r(527753),
                    q = r(349192),
                    w = r(887428),
                    M = r(108475),
                    U = r(296932),
                    x = r(483872),
                    j = r(444891),
                    Q = r(23727),
                    W = r(427225),
                    z = r(489834),
                    B = r(113998),
                    X = r(628114),
                    J = r(219433),
                    Z = r(792302),
                    $ = r(985594),
                    ee = r(956926),
                    te = r(487029),
                    re = r(927421).handlePotentialSnapshotErrors,
                    ne = r(785621),
                    ae = r(763131),
                    le = r(555398),
                    oe = r(677783),
                    ie = r(821270),
                    se = r(770196),
                    ue = r(891362),
                    de = r(489143),
                    ge = r(582501),
                    ce = r(795178),
                    fe = ce.hasCycle,
                    Ee = ce.stableCopy,
                    Re = r(948598);
                e.exports = {
                    Environment: K,
                    Network: E,
                    Observable: R,
                    QueryResponseCache: v,
                    RecordSource: w,
                    Record: H,
                    ReplaySubject: ge,
                    Store: G,
                    areEqualSelectors: Y.areEqualSelectors,
                    createFragmentSpecResolver: V,
                    createNormalizationSelector: Y.createNormalizationSelector,
                    createOperationDescriptor: T.createOperationDescriptor,
                    createReaderSelector: Y.createReaderSelector,
                    createRequestDescriptor: T.createRequestDescriptor,
                    getArgumentValues: M.getArgumentValues,
                    getDataIDsFromFragment: Y.getDataIDsFromFragment,
                    getDataIDsFromObject: Y.getDataIDsFromObject,
                    getNode: F.getNode,
                    getFragment: F.getFragment,
                    getInlineDataFragment: F.getInlineDataFragment,
                    getModuleComponentKey: M.getModuleComponentKey,
                    getModuleOperationKey: M.getModuleOperationKey,
                    getPaginationFragment: F.getPaginationFragment,
                    getPluralSelector: Y.getPluralSelector,
                    getRefetchableFragment: F.getRefetchableFragment,
                    getRequest: F.getRequest,
                    getRequestIdentifier: ee,
                    getSelector: Y.getSelector,
                    getSelectorsFromObject: Y.getSelectorsFromObject,
                    getSingularSelector: Y.getSingularSelector,
                    getStorageKey: M.getStorageKey,
                    getVariablesFromFragment: Y.getVariablesFromFragment,
                    getVariablesFromObject: Y.getVariablesFromObject,
                    getVariablesFromPluralFragment: Y.getVariablesFromPluralFragment,
                    getVariablesFromSingularFragment: Y.getVariablesFromSingularFragment,
                    handlePotentialSnapshotErrors: re,
                    graphql: F.graphql,
                    isErrorResult: a,
                    isValueResult: l,
                    isFragment: F.isFragment,
                    isInlineDataFragment: F.isInlineDataFragment,
                    isSuspenseSentinel: A,
                    suspenseSentinel: L,
                    isRequest: F.isRequest,
                    readInlineData: N,
                    MutationTypes: f.MutationTypes,
                    RangeOperations: f.RangeOperations,
                    DefaultHandlerProvider: u,
                    ConnectionHandler: o,
                    MutationHandlers: s,
                    VIEWER_ID: x.VIEWER_ID,
                    VIEWER_TYPE: x.VIEWER_TYPE,
                    applyOptimisticMutation: d,
                    commitLocalUpdate: g,
                    commitMutation: c,
                    fetchQuery: p,
                    fetchQuery_DEPRECATED: D,
                    isRelayModernEnvironment: O,
                    requestSubscription: j,
                    ConnectionInterface: i,
                    PreloadableQueryRegistry: m,
                    RelayProfiler: de,
                    createPayloadFor3DField: Q,
                    RelayConcreteNode: oe,
                    RelayError: se,
                    RelayFeatureFlags: ue,
                    DEFAULT_HANDLE_KEY: ie.DEFAULT_HANDLE_KEY,
                    FRAGMENTS_KEY: M.FRAGMENTS_KEY,
                    FRAGMENT_OWNER_KEY: M.FRAGMENT_OWNER_KEY,
                    ID_KEY: M.ID_KEY,
                    REF_KEY: M.REF_KEY,
                    REFS_KEY: M.REFS_KEY,
                    ROOT_ID: M.ROOT_ID,
                    ROOT_TYPE: M.ROOT_TYPE,
                    TYPENAME_KEY: M.TYPENAME_KEY,
                    deepFreeze: W,
                    generateClientID: S,
                    generateUniqueClientID: h,
                    getRelayHandleKey: $,
                    isClientID: I,
                    isPromise: ne,
                    isScalarAndEqual: ae,
                    recycleNodesInto: le,
                    stableCopy: Ee,
                    hasCycle: fe,
                    getFragmentIdentifier: z,
                    getRefetchMetadata: Z,
                    getPaginationMetadata: B,
                    getPaginationVariables: X,
                    getPendingOperationsForFragment: J,
                    getValueAtPath: te,
                    __internal: { ResolverFragments: U, OperationTracker: q, createRelayContext: b, getOperationVariables: C.getOperationVariables, getLocalVariables: C.getLocalVariables, fetchQuery: y.fetchQuery, fetchQueryDeduped: y.fetchQueryDeduped, getPromiseForActiveRequest: y.getPromiseForActiveRequest, getObservableForActiveRequest: y.getObservableForActiveRequest, normalizeResponse: k, withProvidedVariables: Re },
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-bfc04956.5b6ec3fa.js.map
