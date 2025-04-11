window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-bfc04956"],
        {
            703383: (e, t, r) => {
                e.exports = r(957290);
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
                    d = (r(826590), "connection"),
                    u = "__connection_next_edge_index";
                function s(e, t, r) {
                    if (null == r) return r;
                    var a = o.get().EDGES,
                        l = t.getValue(u);
                    "number" != typeof l && i(!1);
                    var d = n(t.getDataID(), a, l),
                        s = e.create(d, r.getType());
                    return s.copyFieldsFrom(r), null == s.getValue("cursor") && s.setValue(null, "cursor"), t.setValue(l + 1, u), s;
                }
                function g(e, t, r) {
                    for (var n = o.get().NODE, a = 0; a < e.length; a++) {
                        var l = e[a];
                        if (l) {
                            var i = l.getLinkedRecord(n),
                                d = i && i.getDataID();
                            if (d) {
                                if (r.has(d)) continue;
                                r.add(d);
                            }
                            t.push(l);
                        }
                    }
                }
                e.exports = {
                    buildConnectionEdge: s,
                    createEdge: function (e, t, r, a) {
                        var l = o.get().NODE,
                            i = n(t.getDataID(), r.getDataID()),
                            d = e.get(i);
                        return d || (d = e.create(i, a)), d.setLinkedRecord(r, l), null == d.getValue("cursor") && d.setValue(null, "cursor"), d;
                    },
                    deleteNode: function (e, t) {
                        var r = o.get(),
                            n = r.EDGES,
                            a = r.NODE,
                            l = e.getLinkedRecords(n);
                        if (l) {
                            for (var i, d = 0; d < l.length; d++) {
                                var u = l[d],
                                    s = u && u.getLinkedRecord(a);
                                null != s && s.getDataID() === t ? void 0 === i && (i = l.slice(0, d)) : void 0 !== i && i.push(u);
                            }
                            void 0 !== i && e.setLinkedRecords(i, n);
                        }
                    },
                    getConnection: function (e, t, r) {
                        var n = l(d, t, null);
                        return e.getLinkedRecord(n, r);
                    },
                    getConnectionID: function (e, t, r) {
                        var o = l(d, t, null),
                            i = a(o, r);
                        return n(e, i);
                    },
                    insertEdgeAfter: function (e, t, r) {
                        var n = o.get(),
                            a = n.CURSOR,
                            l = n.EDGES,
                            i = e.getLinkedRecords(l);
                        if (i) {
                            var d;
                            if (null == r) d = i.concat(t);
                            else {
                                d = [];
                                for (var u = !1, s = 0; s < i.length; s++) {
                                    var g = i[s];
                                    if ((d.push(g), null != g)) r === g.getValue(a) && (d.push(t), (u = !0));
                                }
                                u || d.push(t);
                            }
                            e.setLinkedRecords(d, l);
                        } else e.setLinkedRecords([t], l);
                    },
                    insertEdgeBefore: function (e, t, r) {
                        var n = o.get(),
                            a = n.CURSOR,
                            l = n.EDGES,
                            i = e.getLinkedRecords(l);
                        if (i) {
                            var d;
                            if (null == r) d = [t].concat(i);
                            else {
                                d = [];
                                for (var u = !1, s = 0; s < i.length; s++) {
                                    var g = i[s];
                                    if (null != g) r === g.getValue(a) && (d.push(t), (u = !0));
                                    d.push(g);
                                }
                                u || d.unshift(t);
                            }
                            e.setLinkedRecords(d, l);
                        } else e.setLinkedRecords([t], l);
                    },
                    update: function (e, t) {
                        var r = e.get(t.dataID);
                        if (r) {
                            var a = o.get(),
                                l = a.EDGES,
                                i = a.END_CURSOR,
                                d = a.HAS_NEXT_PAGE,
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
                                            return s(e, _, t);
                                        }));
                                    var h = _.getLinkedRecords(l),
                                        I = _.getLinkedRecord(f);
                                    _.copyFieldsFrom(v), h && _.setLinkedRecords(h, l), I && _.setLinkedRecord(I, f);
                                    var O = [],
                                        V = t.args;
                                    if (h && S)
                                        if (null != V.after) {
                                            var A,
                                                P = null === (A = m) || void 0 === A ? void 0 : A.getValue(i),
                                                b = null == p ? void 0 : p.getValue(i);
                                            if (!(m && V.after === P) && !(m && P === b)) return;
                                            var L = new Set();
                                            g(h, O, L), g(S, O, L);
                                        } else if (null != V.before) {
                                            if (!m || V.before !== m.getValue(R)) return;
                                            var k = new Set();
                                            g(S, O, k), g(h, O, k);
                                        } else O = S;
                                    else O = S || h;
                                    if ((null != O && O !== h && _.setLinkedRecords(O, l), m && p))
                                        if (null == V.after && null == V.before) m.copyFieldsFrom(p);
                                        else if (null != V.before || (null == V.after && V.last)) {
                                            m.setValue(!!p.getValue(c), c);
                                            var N = p.getValue(R);
                                            "string" == typeof N && m.setValue(N, R);
                                        } else if (null != V.after || (null == V.before && V.first)) {
                                            m.setValue(!!p.getValue(d), d);
                                            var C = p.getValue(i);
                                            "string" == typeof C && m.setValue(C, i);
                                        }
                                } else {
                                    var K = e.create(D, v.getType());
                                    K.setValue(0, u), K.copyFieldsFrom(v);
                                    var T = v.getLinkedRecords(l);
                                    T &&
                                        ((T = T.map(function (t) {
                                            return s(e, K, t);
                                        })),
                                        K.setLinkedRecords(T, l)),
                                        r.setLinkedRecord(K, t.handleKey),
                                        (m = e.create(n(K.getDataID(), f), E)).setValue(!1, d),
                                        m.setValue(!1, c),
                                        m.setValue(null, i),
                                        m.setValue(null, R),
                                        p && m.copyFieldsFrom(p),
                                        K.setLinkedRecord(m, f);
                                }
                            } else r.setValue(null, t.handleKey);
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
                var n = (0, r(171600).default)(r(638636)),
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
                    d = {
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
                                                    d = e.get(i);
                                                null != d && a.deleteNode(d, t);
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
                    s = { update: f(a.insertEdgeBefore) },
                    g = { update: E(a.insertEdgeAfter) },
                    c = { update: E(a.insertEdgeBefore) };
                function f(e) {
                    return function (t, r) {
                        var i,
                            d = t.get(r.dataID);
                        if (null != d) {
                            var u,
                                s,
                                g = r.handleArgs.connections;
                            null == g && o(!1);
                            try {
                                u = d.getLinkedRecord(r.fieldKey);
                            } catch (e) {}
                            if (!u)
                                try {
                                    s = d.getLinkedRecords(r.fieldKey);
                                } catch (e) {}
                            if (null != u || null != s) {
                                var c,
                                    f = l.get(),
                                    E = f.NODE,
                                    R = f.EDGES,
                                    v = null !== (i = s) && void 0 !== i ? i : [u],
                                    p = (0, n.default)(v);
                                try {
                                    var D = function () {
                                        var r = c.value;
                                        if (null == r) return "continue";
                                        var l = r.getLinkedRecord("node");
                                        if (!l) return "continue";
                                        var i,
                                            d = l.getDataID(),
                                            u = (0, n.default)(g);
                                        try {
                                            for (u.s(); !(i = u.n()).done; ) {
                                                var s = i.value,
                                                    f = t.get(s);
                                                if (null != f)
                                                    if (
                                                        !(null === (y = f.getLinkedRecords(R)) || void 0 === y
                                                            ? void 0
                                                            : y.some(function (e) {
                                                                  var t;
                                                                  return (null == e || null === (t = e.getLinkedRecord(E)) || void 0 === t ? void 0 : t.getDataID()) === d;
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
                            d = t.get(r.dataID);
                        if (null != d) {
                            var u,
                                s,
                                g = r.handleArgs,
                                c = g.connections,
                                f = g.edgeTypeName;
                            null == c && o(!1), null == f && o(!1);
                            try {
                                u = d.getLinkedRecord(r.fieldKey);
                            } catch (e) {}
                            if (!u)
                                try {
                                    s = d.getLinkedRecords(r.fieldKey);
                                } catch (e) {}
                            if (null != u || null != s) {
                                var E,
                                    R = l.get(),
                                    v = R.NODE,
                                    p = R.EDGES,
                                    D = null !== (i = s) && void 0 !== i ? i : [u],
                                    y = (0, n.default)(D);
                                try {
                                    var F = function () {
                                        var r = E.value;
                                        if (null == r) return "continue";
                                        var l,
                                            i = r.getDataID(),
                                            d = (0, n.default)(c);
                                        try {
                                            for (d.s(); !(l = d.n()).done; ) {
                                                var u = l.value,
                                                    s = t.get(u);
                                                if (null != s)
                                                    if (
                                                        !(null === (m = s.getLinkedRecords(p)) || void 0 === m
                                                            ? void 0
                                                            : m.some(function (e) {
                                                                  var t;
                                                                  return (null == e || null === (t = e.getLinkedRecord(v)) || void 0 === t ? void 0 : t.getDataID()) === i;
                                                              }))
                                                    ) {
                                                        var g = a.createEdge(t, s, r, f);
                                                        null == g && o(!1), e(s, g);
                                                    }
                                            }
                                        } catch (e) {
                                            d.e(e);
                                        } finally {
                                            d.f();
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
                e.exports = { AppendEdgeHandler: u, DeleteRecordHandler: i, PrependEdgeHandler: s, AppendNodeHandler: g, PrependNodeHandler: c, DeleteEdgeHandler: d };
            },
            957290: (e, t, r) => {
                "use strict";
                var n = r(262485),
                    a = r(317253),
                    l = r(17276),
                    o = r(113725),
                    i = r(602522),
                    d = r(53647),
                    u = r(921622),
                    s = r(896849),
                    g = r(895521),
                    c = r(408122),
                    f = r(909259),
                    E = r(10622),
                    R = r(46154),
                    v = r(692519),
                    p = r(585488),
                    D = r(580189),
                    y = r(286190),
                    F = y.generateClientID,
                    m = y.generateUniqueClientID,
                    _ = y.isClientID,
                    S = r(42211),
                    h = r(949420),
                    I = r(798452),
                    O = I.isSuspenseSentinel,
                    V = I.suspenseSentinel,
                    A = r(539369),
                    P = r(158446),
                    b = r(990242),
                    L = r(700378),
                    k = r(278490),
                    N = r(767408),
                    C = r(705180),
                    K = r(464711),
                    T = r(527753),
                    H = r(349192),
                    Y = r(887428),
                    G = r(108475),
                    q = r(296932),
                    M = r(483872),
                    w = r(444891),
                    U = r(23727),
                    x = r(427225),
                    j = r(489834),
                    Q = r(113998),
                    W = r(628114),
                    z = r(219433),
                    B = r(792302),
                    X = r(985594),
                    J = r(956926),
                    Z = r(487029),
                    $ = r(927421),
                    ee = r(785621),
                    te = r(763131),
                    re = r(555398),
                    ne = r(677783),
                    ae = r(821270),
                    le = r(770196),
                    oe = r(891362),
                    ie = r(489143),
                    de = r(582501),
                    ue = r(795178),
                    se = r(948598);
                e.exports = {
                    Environment: k,
                    Network: g,
                    Observable: c,
                    QueryResponseCache: f,
                    RecordSource: Y,
                    Record: C,
                    ReplaySubject: de,
                    Store: T,
                    areEqualSelectors: K.areEqualSelectors,
                    createFragmentSpecResolver: S,
                    createNormalizationSelector: K.createNormalizationSelector,
                    createOperationDescriptor: N.createOperationDescriptor,
                    createReaderSelector: K.createReaderSelector,
                    createRequestDescriptor: N.createRequestDescriptor,
                    getArgumentValues: G.getArgumentValues,
                    getDataIDsFromFragment: K.getDataIDsFromFragment,
                    getDataIDsFromObject: K.getDataIDsFromObject,
                    getNode: p.getNode,
                    getFragment: p.getFragment,
                    getInlineDataFragment: p.getInlineDataFragment,
                    getModuleComponentKey: G.getModuleComponentKey,
                    getModuleOperationKey: G.getModuleOperationKey,
                    getPaginationFragment: p.getPaginationFragment,
                    getPluralSelector: K.getPluralSelector,
                    getRefetchableFragment: p.getRefetchableFragment,
                    getRequest: p.getRequest,
                    getRequestIdentifier: J,
                    getSelector: K.getSelector,
                    getSelectorsFromObject: K.getSelectorsFromObject,
                    getSingularSelector: K.getSingularSelector,
                    getStorageKey: G.getStorageKey,
                    getVariablesFromFragment: K.getVariablesFromFragment,
                    getVariablesFromObject: K.getVariablesFromObject,
                    getVariablesFromPluralFragment: K.getVariablesFromPluralFragment,
                    getVariablesFromSingularFragment: K.getVariablesFromSingularFragment,
                    handlePotentialSnapshotErrors: $,
                    graphql: p.graphql,
                    isFragment: p.isFragment,
                    isInlineDataFragment: p.isInlineDataFragment,
                    isSuspenseSentinel: O,
                    suspenseSentinel: V,
                    isRequest: p.isRequest,
                    readInlineData: b,
                    MutationTypes: s.MutationTypes,
                    RangeOperations: s.RangeOperations,
                    DefaultHandlerProvider: o,
                    ConnectionHandler: n,
                    MutationHandlers: l,
                    VIEWER_ID: M.VIEWER_ID,
                    VIEWER_TYPE: M.VIEWER_TYPE,
                    applyOptimisticMutation: i,
                    commitLocalUpdate: d,
                    commitMutation: u,
                    fetchQuery: E,
                    fetchQuery_DEPRECATED: R,
                    isRelayModernEnvironment: A,
                    requestSubscription: w,
                    ConnectionInterface: a,
                    PreloadableQueryRegistry: D,
                    RelayProfiler: ie,
                    createPayloadFor3DField: U,
                    RelayConcreteNode: ne,
                    RelayError: le,
                    RelayFeatureFlags: oe,
                    DEFAULT_HANDLE_KEY: ae.DEFAULT_HANDLE_KEY,
                    FRAGMENTS_KEY: G.FRAGMENTS_KEY,
                    FRAGMENT_OWNER_KEY: G.FRAGMENT_OWNER_KEY,
                    ID_KEY: G.ID_KEY,
                    REF_KEY: G.REF_KEY,
                    REFS_KEY: G.REFS_KEY,
                    ROOT_ID: G.ROOT_ID,
                    ROOT_TYPE: G.ROOT_TYPE,
                    TYPENAME_KEY: G.TYPENAME_KEY,
                    deepFreeze: x,
                    generateClientID: F,
                    generateUniqueClientID: m,
                    getRelayHandleKey: X,
                    isClientID: _,
                    isPromise: ee,
                    isScalarAndEqual: te,
                    recycleNodesInto: re,
                    stableCopy: ue,
                    getFragmentIdentifier: j,
                    getRefetchMetadata: B,
                    getPaginationMetadata: Q,
                    getPaginationVariables: W,
                    getPendingOperationsForFragment: z,
                    getValueAtPath: Z,
                    __internal: { ResolverFragments: q, OperationTracker: H, createRelayContext: h, getOperationVariables: L.getOperationVariables, getLocalVariables: L.getLocalVariables, fetchQuery: v.fetchQuery, fetchQueryDeduped: v.fetchQueryDeduped, getPromiseForActiveRequest: v.getPromiseForActiveRequest, getObservableForActiveRequest: v.getObservableForActiveRequest, normalizeResponse: P, withProvidedVariables: se },
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-bfc04956.9055797a.js.map
