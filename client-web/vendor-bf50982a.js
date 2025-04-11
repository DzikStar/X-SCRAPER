window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-bf50982a"],
        {
            887428: (e, r, t) => {
                var a = (0, t(171600).default)(t(638636)),
                    s = t(705180),
                    i = t(193740),
                    n = i.EXISTENT,
                    o = i.NONEXISTENT,
                    l = i.UNKNOWN,
                    c = (function () {
                        function e(e) {
                            var r = this;
                            (this._records = new Map()),
                                null != e &&
                                    Object.keys(e).forEach(function (t) {
                                        var a = e[t],
                                            i = s.fromObject(a);
                                        r._records.set(t, i);
                                    });
                        }
                        e.create = function (r) {
                            return new e(r);
                        };
                        var r = e.prototype;
                        return (
                            (r.clear = function () {
                                this._records = new Map();
                            }),
                            (r.delete = function (e) {
                                this._records.set(e, null);
                            }),
                            (r.get = function (e) {
                                return this._records.get(e);
                            }),
                            (r.getRecordIDs = function () {
                                return Array.from(this._records.keys());
                            }),
                            (r.getStatus = function (e) {
                                return this._records.has(e) ? (null == this._records.get(e) ? o : n) : l;
                            }),
                            (r.has = function (e) {
                                return this._records.has(e);
                            }),
                            (r.remove = function (e) {
                                this._records.delete(e);
                            }),
                            (r.set = function (e, r) {
                                this._records.set(e, r);
                            }),
                            (r.size = function () {
                                return this._records.size;
                            }),
                            (r.toJSON = function () {
                                var e,
                                    r = {},
                                    t = (0, a.default)(this._records);
                                try {
                                    for (t.s(); !(e = t.n()).done; ) {
                                        var i = e.value,
                                            n = i[0],
                                            o = i[1];
                                        r[n] = s.toJSON(o);
                                    }
                                } catch (e) {
                                    t.e(e);
                                } finally {
                                    t.f();
                                }
                                return r;
                            }),
                            e
                        );
                    })();
                e.exports = c;
            },
            193740: (e) => {
                e.exports = { EXISTENT: "EXISTENT", NONEXISTENT: "NONEXISTENT", UNKNOWN: "UNKNOWN" };
            },
            582426: (e, r, t) => {
                var a = (0, t(171600).default)(t(638636)),
                    s = t(471677),
                    i = t(677783),
                    n = t(749110),
                    o = t(679321),
                    l = t(700378).getLocalVariables,
                    c = t(705180),
                    _ = t(108475),
                    u = t(348073).generateTypeID,
                    d = t(647677),
                    h = i.ACTOR_CHANGE,
                    v = i.CONDITION,
                    f = i.CLIENT_COMPONENT,
                    E = i.CLIENT_EXTENSION,
                    p = i.DEFER,
                    g = i.FRAGMENT_SPREAD,
                    R = i.INLINE_FRAGMENT,
                    T = i.LINKED_FIELD,
                    I = i.MODULE_IMPORT,
                    b = i.LINKED_HANDLE,
                    m = i.SCALAR_FIELD,
                    y = i.SCALAR_HANDLE,
                    N = i.STREAM,
                    S = i.TYPE_DISCRIMINATOR,
                    L = i.RELAY_RESOLVER,
                    D = i.RELAY_LIVE_RESOLVER,
                    k = i.CLIENT_EDGE_TO_CLIENT_OBJECT,
                    A = _.getStorageKey,
                    O = _.getModuleOperationKey;
                var C = (function () {
                    function e(e, r, t, a, s) {
                        (this._operationLoader = null != a ? a : null), (this._operationName = null), (this._recordSource = e), (this._references = t), (this._variables = r), (this._shouldProcessClientComponents = s);
                    }
                    var r = e.prototype;
                    return (
                        (r.mark = function (e, r) {
                            ("Operation" !== e.kind && "SplitOperation" !== e.kind) || (this._operationName = e.name), this._traverse(e, r);
                        }),
                        (r._traverse = function (e, r) {
                            this._references.add(r);
                            var t = this._recordSource.get(r);
                            null != t && this._traverseSelections(e.selections, t);
                        }),
                        (r._getVariableValue = function (e) {
                            return this._variables.hasOwnProperty(e) || d(!1), this._variables[e];
                        }),
                        (r._traverseSelections = function (e, r) {
                            var t = this;
                            e.forEach(function (a) {
                                switch (a.kind) {
                                    case h:
                                        t._traverseLink(a.linkedField, r);
                                        break;
                                    case T:
                                        a.plural ? t._traversePluralLink(a, r) : t._traverseLink(a, r);
                                        break;
                                    case v:
                                        Boolean(t._getVariableValue(a.condition)) === a.passingValue && t._traverseSelections(a.selections, r);
                                        break;
                                    case R:
                                        if (null == a.abstractKey) {
                                            var s = c.getType(r);
                                            ((null != s && s === a.type) || s === _.ROOT_TYPE) && t._traverseSelections(a.selections, r);
                                        } else {
                                            var i = c.getType(r),
                                                o = u(i);
                                            t._references.add(o), t._traverseSelections(a.selections, r);
                                        }
                                        break;
                                    case g:
                                        var A = t._variables;
                                        (t._variables = l(t._variables, a.fragment.argumentDefinitions, a.args)), t._traverseSelections(a.fragment.selections, r), (t._variables = A);
                                        break;
                                    case b:
                                        var O = n(a, e, t._variables);
                                        O.plural ? t._traversePluralLink(O, r) : t._traverseLink(O, r);
                                        break;
                                    case p:
                                    case N:
                                        t._traverseSelections(a.selections, r);
                                        break;
                                    case m:
                                    case y:
                                        break;
                                    case S:
                                        var C = c.getType(r),
                                            P = u(C);
                                        t._references.add(P);
                                        break;
                                    case I:
                                        t._traverseModuleImport(a, r);
                                        break;
                                    case E:
                                        t._traverseSelections(a.selections, r);
                                        break;
                                    case f:
                                        if (!1 === t._shouldProcessClientComponents) break;
                                        t._traverseSelections(a.fragment.selections, r);
                                        break;
                                    case L:
                                    case D:
                                        t._traverseResolverField(a, r);
                                        break;
                                    case k:
                                        t._traverseClientEdgeToClientObject(a, r);
                                        break;
                                    default:
                                        d(!1);
                                }
                            });
                        }),
                        (r._traverseClientEdgeToClientObject = function (e, r) {
                            var t = this._traverseResolverField(e.backingField, r);
                            if (null != t) {
                                var s = this._recordSource.get(t);
                                if (null != s)
                                    if (e.backingField.isOutputType) {
                                        var i = o(s);
                                        if (null != i) {
                                            var n,
                                                l = (0, a.default)(i);
                                            try {
                                                for (l.s(); !(n = l.n()).done; ) {
                                                    var _ = n.value;
                                                    this._references.add(_);
                                                }
                                            } catch (e) {
                                                l.e(e);
                                            } finally {
                                                l.f();
                                            }
                                        }
                                    } else {
                                        var u = e.linkedField,
                                            d = u.concreteType;
                                        if (null == d) return;
                                        if (u.plural) {
                                            var h = c.getResolverLinkedRecordIDs(s, d);
                                            if (null != h) {
                                                var v,
                                                    f = (0, a.default)(h);
                                                try {
                                                    for (f.s(); !(v = f.n()).done; ) {
                                                        var E = v.value;
                                                        null != E && this._traverse(u, E);
                                                    }
                                                } catch (e) {
                                                    f.e(e);
                                                } finally {
                                                    f.f();
                                                }
                                            }
                                        } else {
                                            var p = c.getResolverLinkedRecordID(s, d);
                                            null != p && this._traverse(u, p);
                                        }
                                    }
                            }
                        }),
                        (r._traverseResolverField = function (e, r) {
                            var t = A(e, this._variables),
                                a = c.getLinkedRecordID(r, t);
                            null != a && this._references.add(a);
                            var s = e.fragment;
                            return null != s && this._traverseSelections([s], r), a;
                        }),
                        (r._traverseModuleImport = function (e, r) {
                            var t = this._operationLoader;
                            null === t && d(!1);
                            var a = O(e.documentName),
                                i = c.getValue(r, a);
                            if (null != i) {
                                var n = t.get(i);
                                if (null != n) {
                                    var o = s(n),
                                        _ = this._variables;
                                    (this._variables = l(this._variables, o.argumentDefinitions, e.args)), this._traverseSelections(o.selections, r), (this._variables = _);
                                }
                            }
                        }),
                        (r._traverseLink = function (e, r) {
                            var t = A(e, this._variables),
                                a = c.getLinkedRecordID(r, t);
                            null != a && this._traverse(e, a);
                        }),
                        (r._traversePluralLink = function (e, r) {
                            var t = this,
                                a = A(e, this._variables),
                                s = c.getLinkedRecordIDs(r, a);
                            null != s &&
                                s.forEach(function (r) {
                                    null != r && t._traverse(e, r);
                                });
                        }),
                        e
                    );
                })();
                e.exports = {
                    mark: function (e, r, t, a, s) {
                        var i = r.dataID,
                            n = r.node,
                            o = r.variables;
                        new C(e, o, t, a, s).mark(n, i);
                    },
                };
            },
            513925: (e, r, t) => {
                var a = t(171600).default,
                    s = a(t(638636)),
                    i = a(t(373408)),
                    n = t(402333),
                    o = (n.ACTOR_IDENTIFIER_FIELD_NAME, n.getActorIdentifierFromPayload),
                    l = t(677783),
                    c = l.ACTOR_CHANGE,
                    _ = l.CLIENT_COMPONENT,
                    u = l.CLIENT_EDGE_TO_CLIENT_OBJECT,
                    d = l.CLIENT_EXTENSION,
                    h = l.CONDITION,
                    v = l.DEFER,
                    f = l.FRAGMENT_SPREAD,
                    E = l.INLINE_FRAGMENT,
                    p = l.LINKED_FIELD,
                    g = l.LINKED_HANDLE,
                    R = l.MODULE_IMPORT,
                    T = l.RELAY_LIVE_RESOLVER,
                    I = l.RELAY_RESOLVER,
                    b = l.SCALAR_FIELD,
                    m = l.SCALAR_HANDLE,
                    y = l.STREAM,
                    N = l.TYPE_DISCRIMINATOR,
                    S = t(286190),
                    L = S.generateClientID,
                    D = (S.isClientID, t(700378).getLocalVariables),
                    k = t(507567),
                    A = k.buildErrorTrie,
                    O = k.getErrorsByKey,
                    C = k.getNestedErrorTrieByKey,
                    P = t(705180),
                    F = t(464711).createNormalizationSelector,
                    M = t(108475),
                    V = (M.ROOT_ID, M.TYPENAME_KEY),
                    K = M.getArgumentValues,
                    Y = M.getHandleStorageKey,
                    w = M.getModuleComponentKey,
                    z = M.getModuleOperationKey,
                    U = M.getStorageKey,
                    H = t(348073),
                    x = H.TYPE_SCHEMA_TYPE,
                    B = H.generateTypeID,
                    G = (t(193860), t(647677));
                t(826590);
                var j = (function () {
                    function e(e, r, t) {
                        (this._actorIdentifier = t.actorIdentifier), (this._getDataId = t.getDataID), (this._handleFieldPayloads = []), (this._treatMissingFieldsAsNull = t.treatMissingFieldsAsNull), (this._incrementalPlaceholders = []), (this._isClientExtension = !1), (this._isUnmatchedAbstractType = !1), (this._followupPayloads = []), (this._path = t.path ? (0, i.default)(t.path) : []), (this._recordSource = e), (this._variables = r), (this._shouldProcessClientComponents = t.shouldProcessClientComponents);
                    }
                    var r = e.prototype;
                    return (
                        (r.normalizeResponse = function (e, r, t, a) {
                            var s = this._recordSource.get(r);
                            return s || G(!1), this._assignClientAbstractTypes(e), (this._errorTrie = A(a)), this._traverseSelections(e, s, t), { errors: a, fieldPayloads: this._handleFieldPayloads, incrementalPlaceholders: this._incrementalPlaceholders, followupPayloads: this._followupPayloads, source: this._recordSource, isFinal: !1 };
                        }),
                        (r._assignClientAbstractTypes = function (e) {
                            var r = e.clientAbstractTypes;
                            if (null != r)
                                for (var t = 0, a = Object.keys(r); t < a.length; t++) {
                                    var i,
                                        n = a[t],
                                        o = (0, s.default)(r[n]);
                                    try {
                                        for (o.s(); !(i = o.n()).done; ) {
                                            var l = i.value,
                                                c = B(l),
                                                _ = this._recordSource.get(c);
                                            null == _ && ((_ = P.create(c, x)), this._recordSource.set(c, _)), P.setValue(_, n, !0);
                                        }
                                    } catch (e) {
                                        o.e(e);
                                    } finally {
                                        o.f();
                                    }
                                }
                        }),
                        (r._getVariableValue = function (e) {
                            return this._variables.hasOwnProperty(e) || G(!1), this._variables[e];
                        }),
                        (r._getRecordType = function (e) {
                            var r = e[V];
                            return null == r && G(!1), r;
                        }),
                        (r._traverseSelections = function (e, r, t) {
                            for (var a = 0; a < e.selections.length; a++) {
                                var s = e.selections[a];
                                switch (s.kind) {
                                    case b:
                                    case p:
                                        this._normalizeField(s, r, t);
                                        break;
                                    case h:
                                        Boolean(this._getVariableValue(s.condition)) === s.passingValue && this._traverseSelections(s, r, t);
                                        break;
                                    case f:
                                        var i = this._variables;
                                        (this._variables = D(this._variables, s.fragment.argumentDefinitions, s.args)), this._traverseSelections(s.fragment, r, t), (this._variables = i);
                                        break;
                                    case E:
                                        var n = s.abstractKey;
                                        if (null == n) {
                                            P.getType(r) === s.type && this._traverseSelections(s, r, t);
                                        } else {
                                            var o = t.hasOwnProperty(n),
                                                l = P.getType(r),
                                                S = B(l),
                                                L = this._recordSource.get(S);
                                            null == L && ((L = P.create(S, x)), this._recordSource.set(S, L)), P.setValue(L, n, o), o && this._traverseSelections(s, r, t);
                                        }
                                        break;
                                    case N:
                                        var k = s.abstractKey,
                                            A = t.hasOwnProperty(k),
                                            O = P.getType(r),
                                            C = B(O),
                                            F = this._recordSource.get(C);
                                        null == F && ((F = P.create(C, x)), this._recordSource.set(C, F)), P.setValue(F, k, A);
                                        break;
                                    case g:
                                    case m:
                                        var M = s.args ? K(s.args, this._variables) : {},
                                            V = U(s, this._variables),
                                            w = Y(s, this._variables);
                                        this._handleFieldPayloads.push({ args: M, dataID: P.getDataID(r), fieldKey: V, handle: s.handle, handleKey: w, handleArgs: s.handleArgs ? K(s.handleArgs, this._variables) : {} });
                                        break;
                                    case R:
                                        this._normalizeModuleImport(s, r, t);
                                        break;
                                    case v:
                                        this._normalizeDefer(s, r, t);
                                        break;
                                    case y:
                                        this._normalizeStream(s, r, t);
                                        break;
                                    case d:
                                        var z = this._isClientExtension;
                                        (this._isClientExtension = !0), this._traverseSelections(s, r, t), (this._isClientExtension = z);
                                        break;
                                    case _:
                                        if (!1 === this._shouldProcessClientComponents) break;
                                        this._traverseSelections(s.fragment, r, t);
                                        break;
                                    case c:
                                        this._normalizeActorChange(s, r, t);
                                        break;
                                    case I:
                                    case T:
                                        this._normalizeResolver(s, r, t);
                                        break;
                                    case u:
                                        this._normalizeResolver(s.backingField, r, t);
                                        break;
                                    default:
                                        G(!1);
                                }
                            }
                        }),
                        (r._normalizeResolver = function (e, r, t) {
                            null != e.fragment && this._traverseSelections(e.fragment, r, t);
                        }),
                        (r._normalizeDefer = function (e, r, t) {
                            !1 === (null === e.if || this._getVariableValue(e.if)) ? this._traverseSelections(e, r, t) : this._incrementalPlaceholders.push({ kind: "defer", data: t, label: e.label, path: (0, i.default)(this._path), selector: F(e, P.getDataID(r), this._variables), typeName: P.getType(r), actorIdentifier: this._actorIdentifier });
                        }),
                        (r._normalizeStream = function (e, r, t) {
                            this._traverseSelections(e, r, t), !0 === (null === e.if || this._getVariableValue(e.if)) && this._incrementalPlaceholders.push({ kind: "stream", label: e.label, path: (0, i.default)(this._path), parentID: P.getDataID(r), node: e, variables: this._variables, actorIdentifier: this._actorIdentifier });
                        }),
                        (r._normalizeModuleImport = function (e, r, t) {
                            ("object" == typeof t && t) || G(!1);
                            var a = P.getType(r),
                                s = w(e.documentName),
                                n = e.componentModuleProvider || t[s];
                            P.setValue(r, s, null != n ? n : null);
                            var o = z(e.documentName),
                                l = e.operationModuleProvider || t[o];
                            P.setValue(r, o, null != l ? l : null), null != l && this._followupPayloads.push({ kind: "ModuleImportPayload", args: e.args, data: t, dataID: P.getDataID(r), operationReference: l, path: (0, i.default)(this._path), typeName: a, variables: this._variables, actorIdentifier: this._actorIdentifier });
                        }),
                        (r._normalizeField = function (e, r, t) {
                            ("object" == typeof t && t) || G(!1);
                            var a = e.alias || e.name,
                                s = U(e, this._variables),
                                i = t[a];
                            if (null != i)
                                if (e.kind === b) P.setValue(r, s, i);
                                else if (e.kind === p) {
                                    this._path.push(a);
                                    var n = this._errorTrie;
                                    (this._errorTrie = null == n ? null : C(n, a)), e.plural ? this._normalizePluralLink(e, r, s, i) : this._normalizeLink(e, r, s, i), (this._errorTrie = n), this._path.pop();
                                } else G(!1);
                            else {
                                if (void 0 === i) {
                                    if (this._isClientExtension || this._isUnmatchedAbstractType) return;
                                    if (!this._treatMissingFieldsAsNull) return void 0;
                                }
                                P.setValue(r, s, null);
                                var o = this._errorTrie;
                                if (null != o) {
                                    var l = O(o, a);
                                    null != l && P.setErrors(r, s, l);
                                }
                            }
                        }),
                        (r._normalizeActorChange = function (e, r, t) {
                            var a,
                                s = e.linkedField;
                            ("object" == typeof t && t) || G(!1);
                            var n = s.alias || s.name,
                                l = U(s, this._variables),
                                c = t[n];
                            if (null != c) {
                                var _ = o(c);
                                if (null != _) {
                                    var u = null !== (a = s.concreteType) && void 0 !== a ? a : this._getRecordType(c),
                                        d = this._getDataId(c, u) || P.getLinkedRecordID(r, l) || L(P.getDataID(r), l);
                                    "string" != typeof d && G(!1), P.setActorLinkedRecordID(r, l, _, d), this._followupPayloads.push({ kind: "ActorPayload", data: c, dataID: d, path: [].concat((0, i.default)(this._path), [n]), typeName: u, variables: this._variables, node: s, actorIdentifier: _ });
                                } else P.setValue(r, l, null);
                            } else {
                                if (void 0 === c) {
                                    if (this._isClientExtension || this._isUnmatchedAbstractType) return;
                                    if (!this._treatMissingFieldsAsNull) return void 0;
                                }
                                P.setValue(r, l, null);
                            }
                        }),
                        (r._normalizeLink = function (e, r, t, a) {
                            var s;
                            ("object" == typeof a && a) || G(!1);
                            var i = this._getDataId(a, null !== (s = e.concreteType) && void 0 !== s ? s : this._getRecordType(a)) || P.getLinkedRecordID(r, t) || L(P.getDataID(r), t);
                            "string" != typeof i && G(!1), P.setLinkedRecordID(r, t, i);
                            var n = this._recordSource.get(i);
                            if (n) 0;
                            else {
                                var o = e.concreteType || this._getRecordType(a);
                                (n = P.create(i, o)), this._recordSource.set(i, n);
                            }
                            this._traverseSelections(e, n, a);
                        }),
                        (r._normalizePluralLink = function (e, r, t, a) {
                            var s = this;
                            Array.isArray(a) || G(!1);
                            var i = P.getLinkedRecordIDs(r, t),
                                n = [];
                            a.forEach(function (a, o) {
                                var l;
                                if (null != a) {
                                    s._path.push(String(o));
                                    var c = s._errorTrie;
                                    (s._errorTrie = null == c ? null : C(c, o)), "object" != typeof a && G(!1);
                                    var _ = s._getDataId(a, null !== (l = e.concreteType) && void 0 !== l ? l : s._getRecordType(a)) || (i && i[o]) || L(P.getDataID(r), t, o);
                                    "string" != typeof _ && G(!1), n.push(_);
                                    var u = s._recordSource.get(_);
                                    if (u) 0;
                                    else {
                                        var d = e.concreteType || s._getRecordType(a);
                                        (u = P.create(_, d)), s._recordSource.set(_, u);
                                    }
                                    0, s._traverseSelections(e, u, a), (s._errorTrie = c), s._path.pop();
                                } else n.push(a);
                            }),
                                P.setLinkedRecordIDs(r, t, n);
                        }),
                        (r._validateRecordType = function (e, r, t) {
                            var a;
                            (null !== (a = r.concreteType) && void 0 !== a) || this._getRecordType(t), P.getDataID(e);
                        }),
                        (r._validateConflictingFieldsWithIdenticalId = function (e, r, t) {}),
                        (r._validateConflictingLinkedFieldsWithIdenticalId = function (e, r, t) {
                            0;
                        }),
                        e
                    );
                })();
                e.exports = {
                    normalize: function (e, r, t, a, s) {
                        var i = r.dataID,
                            n = r.node,
                            o = r.variables;
                        return new j(e, o, a).normalizeResponse(n, i, t, s);
                    },
                };
            },
            907554: (e, r, t) => {
                t(427225);
                var a = t(555398),
                    s = t(891362),
                    i = t(320755),
                    n = t(600353),
                    o = t(458076),
                    l = (function () {
                        function e(e, r) {
                            (this._subscriptions = new Set()), (this.__log = e), (this._resolverCache = r);
                        }
                        var r = e.prototype;
                        return (
                            (r.subscribe = function (e, r) {
                                var t = this,
                                    a = { backup: null, callback: r, snapshot: e, stale: !1 };
                                return (
                                    this._subscriptions.add(a),
                                    {
                                        dispose: function () {
                                            t._subscriptions.delete(a);
                                        },
                                    }
                                );
                            }),
                            (r.snapshotSubscriptions = function (e) {
                                var r = this;
                                this._subscriptions.forEach(function (t) {
                                    if (t.stale) {
                                        var s = t.snapshot,
                                            i = o.read(e, s.selector, r._resolverCache),
                                            n = a(s.data, i.data);
                                        (i.data = n), (t.backup = i);
                                    } else t.backup = t.snapshot;
                                });
                            }),
                            (r.restoreSubscriptions = function () {
                                this._subscriptions.forEach(function (e) {
                                    var r = e.backup;
                                    (e.backup = null), r ? (r.data !== e.snapshot.data && (e.stale = !0), (e.snapshot = { data: e.snapshot.data, isMissingData: r.isMissingData, missingClientEdges: r.missingClientEdges, missingLiveResolverFields: r.missingLiveResolverFields, seenRecords: r.seenRecords, selector: r.selector, missingRequiredFields: r.missingRequiredFields, relayResolverErrors: r.relayResolverErrors, errorResponseFields: r.errorResponseFields })) : (e.stale = !0);
                                });
                            }),
                            (r.updateSubscriptions = function (e, r, t, a) {
                                var s = this,
                                    i = 0 !== r.size;
                                this._subscriptions.forEach(function (n) {
                                    var o = s._updateSubscription(e, n, r, i, a);
                                    null != o && t.push(o);
                                });
                            }),
                            (r._updateSubscription = function (e, r, t, l, c) {
                                var _ = r.backup,
                                    u = r.callback,
                                    d = r.snapshot,
                                    h = r.stale,
                                    v = l && i(d.seenRecords, t);
                                if (h || v) {
                                    var f = v || !_ ? o.read(e, d.selector, this._resolverCache) : _;
                                    return (f = { data: a(d.data, f.data), isMissingData: f.isMissingData, missingClientEdges: f.missingClientEdges, missingLiveResolverFields: f.missingLiveResolverFields, seenRecords: f.seenRecords, selector: f.selector, missingRequiredFields: f.missingRequiredFields, relayResolverErrors: f.relayResolverErrors, errorResponseFields: f.errorResponseFields }), (r.snapshot = f), (r.stale = !1), f.data !== d.data ? (this.__log && s.ENABLE_NOTIFY_SUBSCRIPTION && this.__log({ name: "store.notify.subscription", sourceOperation: c, snapshot: d, nextSnapshot: f }), u(f), d.selector.owner) : s.ENABLE_LOOSE_SUBSCRIPTION_ATTRIBUTION && (h || n(d.seenRecords, t)) ? d.selector.owner : void 0;
                                }
                            }),
                            e
                        );
                    })();
                e.exports = l;
            },
            108475: (e, r, t) => {
                var a = (0, t(171600).default)(t(373408)),
                    s = t(985594),
                    i = t(677783),
                    n = t(795178),
                    o = t(647677),
                    l = i.VARIABLE,
                    c = i.LITERAL,
                    _ = i.OBJECT_VALUE,
                    u = i.LIST_VALUE;
                function d(e, r) {
                    if (e.kind === l)
                        return (function (e, r) {
                            return r.hasOwnProperty(e) || o(!1), n(r[e]);
                        })(e.variableName, r);
                    if (e.kind === c) return e.value;
                    if (e.kind === _) {
                        var t = {};
                        return (
                            e.fields.forEach(function (e) {
                                t[e.name] = d(e, r);
                            }),
                            t
                        );
                    }
                    if (e.kind === u) {
                        var a = [];
                        return (
                            e.items.forEach(function (e) {
                                null != e && a.push(d(e, r));
                            }),
                            a
                        );
                    }
                }
                function h(e, r, t) {
                    var a = {};
                    return (
                        t && (a[f.FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT] = !0),
                        e &&
                            e.forEach(function (e) {
                                a[e.name] = d(e, r);
                            }),
                        a
                    );
                }
                function v(e, r) {
                    if (!r) return e;
                    var t = [];
                    for (var a in r)
                        if (r.hasOwnProperty(a)) {
                            var s,
                                i = r[a];
                            if (null != i) t.push(a + ":" + (null !== (s = JSON.stringify(i)) && void 0 !== s ? s : "undefined"));
                        }
                    return 0 === t.length ? e : e + "(".concat(t.join(","), ")");
                }
                var f = {
                    ACTOR_IDENTIFIER_KEY: "__actorIdentifier",
                    CLIENT_EDGE_TRAVERSAL_PATH: "__clientEdgeTraversalPath",
                    FRAGMENTS_KEY: "__fragments",
                    FRAGMENT_OWNER_KEY: "__fragmentOwner",
                    FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT: "$isWithinUnmatchedTypeRefinement",
                    FRAGMENT_PROP_NAME_KEY: "__fragmentPropName",
                    MODULE_COMPONENT_KEY: "__module_component",
                    ERRORS_KEY: "__errors",
                    ID_KEY: "__id",
                    REF_KEY: "__ref",
                    REFS_KEY: "__refs",
                    ROOT_ID: "client:root",
                    ROOT_TYPE: "__Root",
                    TYPENAME_KEY: "__typename",
                    INVALIDATED_AT_KEY: "__invalidated_at",
                    RELAY_RESOLVER_VALUE_KEY: "__resolverValue",
                    RELAY_RESOLVER_INVALIDATION_KEY: "__resolverValueMayBeInvalid",
                    RELAY_RESOLVER_SNAPSHOT_KEY: "__resolverSnapshot",
                    RELAY_RESOLVER_ERROR_KEY: "__resolverError",
                    RELAY_RESOLVER_OUTPUT_TYPE_RECORD_IDS: "__resolverOutputTypeRecordIDs",
                    formatStorageKey: v,
                    getArgumentValue: d,
                    getArgumentValues: h,
                    getHandleStorageKey: function (e, r) {
                        var t = e.dynamicKey,
                            i = e.handle,
                            n = e.key,
                            o = e.name,
                            l = e.args,
                            c = e.filters,
                            _ = s(i, n, o),
                            u = null;
                        return (
                            l &&
                                c &&
                                0 !== l.length &&
                                0 !== c.length &&
                                (u = l.filter(function (e) {
                                    return c.indexOf(e.name) > -1;
                                })),
                            t && (u = null != u ? [t].concat((0, a.default)(u)) : [t]),
                            null === u ? _ : v(_, h(u, r))
                        );
                    },
                    getStorageKey: function (e, r) {
                        if (e.storageKey) return e.storageKey;
                        var t = (function (e) {
                                if ("RelayResolver" === e.kind || "RelayLiveResolver" === e.kind) {
                                    var r, t;
                                    return null == e.args ? (null === (t = e.fragment) || void 0 === t ? void 0 : t.args) : null == (null === (r = e.fragment) || void 0 === r ? void 0 : r.args) ? e.args : e.args.concat(e.fragment.args);
                                }
                                var a = void 0 === e.args ? void 0 : e.args;
                                return a;
                            })(e),
                            a = e.name;
                        return t && 0 !== t.length ? v(a, h(t, r)) : a;
                    },
                    getStableStorageKey: function (e, r) {
                        return v(e, n(r));
                    },
                    getModuleComponentKey: function (e) {
                        return "".concat("__module_component_").concat(e);
                    },
                    getModuleOperationKey: function (e) {
                        return "".concat("__module_operation_").concat(e);
                    },
                };
                e.exports = f;
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-bf50982a.32b3beca.js.map
