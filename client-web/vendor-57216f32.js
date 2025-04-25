window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-57216f32"],
        {
            887428: (e, t, r) => {
                var a = (0, r(183491).default)(r(158663)),
                    i = r(705180),
                    n = r(193740),
                    s = n.EXISTENT,
                    o = n.NONEXISTENT,
                    l = n.UNKNOWN,
                    c = (function () {
                        function e(e) {
                            var t = this;
                            (this._records = new Map()),
                                null != e &&
                                    Object.keys(e).forEach(function (r) {
                                        var a = e[r],
                                            n = i.fromObject(a);
                                        t._records.set(r, n);
                                    });
                        }
                        e.create = function (t) {
                            return new e(t);
                        };
                        var t = e.prototype;
                        return (
                            (t.clear = function () {
                                this._records = new Map();
                            }),
                            (t.delete = function (e) {
                                this._records.set(e, null);
                            }),
                            (t.get = function (e) {
                                return this._records.get(e);
                            }),
                            (t.getRecordIDs = function () {
                                return Array.from(this._records.keys());
                            }),
                            (t.getStatus = function (e) {
                                return this._records.has(e) ? (null == this._records.get(e) ? o : s) : l;
                            }),
                            (t.has = function (e) {
                                return this._records.has(e);
                            }),
                            (t.remove = function (e) {
                                this._records.delete(e);
                            }),
                            (t.set = function (e, t) {
                                this._records.set(e, t);
                            }),
                            (t.size = function () {
                                return this._records.size;
                            }),
                            (t.toJSON = function () {
                                var e,
                                    t = {},
                                    r = (0, a.default)(this._records);
                                try {
                                    for (r.s(); !(e = r.n()).done; ) {
                                        var n = e.value,
                                            s = n[0],
                                            o = n[1];
                                        t[s] = i.toJSON(o);
                                    }
                                } catch (e) {
                                    r.e(e);
                                } finally {
                                    r.f();
                                }
                                return t;
                            }),
                            e
                        );
                    })();
                e.exports = c;
            },
            193740: (e) => {
                e.exports = { EXISTENT: "EXISTENT", NONEXISTENT: "NONEXISTENT", UNKNOWN: "UNKNOWN" };
            },
            582426: (e, t, r) => {
                var a = (0, r(183491).default)(r(158663)),
                    i = r(471677),
                    n = r(749110),
                    s = r(399951),
                    o = r(700378).getLocalVariables,
                    l = r(705180),
                    c = r(108475),
                    u = r(348073).generateTypeID,
                    _ = r(647677),
                    d = c.getStorageKey,
                    h = c.getModuleOperationKey;
                var v = (function () {
                    function e(e, t, r, a, i) {
                        (this._operationLoader = null != a ? a : null), (this._operationName = null), (this._recordSource = e), (this._references = r), (this._variables = t), (this._shouldProcessClientComponents = i);
                    }
                    var t = e.prototype;
                    return (
                        (t.mark = function (e, t) {
                            ("Operation" !== e.kind && "SplitOperation" !== e.kind) || (this._operationName = e.name), this._traverse(e, t);
                        }),
                        (t._traverse = function (e, t) {
                            this._references.add(t);
                            var r = this._recordSource.get(t);
                            null != r && this._traverseSelections(e.selections, r);
                        }),
                        (t._getVariableValue = function (e) {
                            return this._variables.hasOwnProperty(e) || _(!1), this._variables[e];
                        }),
                        (t._traverseSelections = function (e, t) {
                            var r = this;
                            e.forEach(function (a) {
                                switch (a.kind) {
                                    case "ActorChange":
                                        r._traverseLink(a.linkedField, t);
                                        break;
                                    case "LinkedField":
                                        a.plural ? r._traversePluralLink(a, t) : r._traverseLink(a, t);
                                        break;
                                    case "Condition":
                                        Boolean(r._getVariableValue(a.condition)) === a.passingValue && r._traverseSelections(a.selections, t);
                                        break;
                                    case "InlineFragment":
                                        if (null == a.abstractKey) {
                                            var i = l.getType(t);
                                            ((null != i && i === a.type) || i === c.ROOT_TYPE) && r._traverseSelections(a.selections, t);
                                        } else {
                                            var s = l.getType(t),
                                                d = u(s);
                                            r._references.add(d), r._traverseSelections(a.selections, t);
                                        }
                                        break;
                                    case "FragmentSpread":
                                        var h = r._variables;
                                        (r._variables = o(r._variables, a.fragment.argumentDefinitions, a.args)), r._traverseSelections(a.fragment.selections, t), (r._variables = h);
                                        break;
                                    case "LinkedHandle":
                                        var v = n(a, e, r._variables);
                                        v.plural ? r._traversePluralLink(v, t) : r._traverseLink(v, t);
                                        break;
                                    case "Defer":
                                    case "Stream":
                                    case "ClientExtension":
                                        r._traverseSelections(a.selections, t);
                                        break;
                                    case "ScalarField":
                                    case "ScalarHandle":
                                        break;
                                    case "TypeDiscriminator":
                                        var f = l.getType(t),
                                            p = u(f);
                                        r._references.add(p);
                                        break;
                                    case "ModuleImport":
                                        r._traverseModuleImport(a, t);
                                        break;
                                    case "ClientComponent":
                                        if (!1 === r._shouldProcessClientComponents) break;
                                        r._traverseSelections(a.fragment.selections, t);
                                        break;
                                    case "RelayResolver":
                                    case "RelayLiveResolver":
                                        r._traverseResolverField(a, t);
                                        break;
                                    case "ClientEdgeToClientObject":
                                        r._traverseClientEdgeToClientObject(a, t);
                                        break;
                                    default:
                                        _(!1);
                                }
                            });
                        }),
                        (t._traverseClientEdgeToClientObject = function (e, t) {
                            var r = this._traverseResolverField(e.backingField, t);
                            if (null != r) {
                                var i = this._recordSource.get(r);
                                if (null != i)
                                    if (e.backingField.isOutputType) {
                                        var n = s(i);
                                        if (null != n) {
                                            var o,
                                                c = (0, a.default)(n);
                                            try {
                                                for (c.s(); !(o = c.n()).done; ) {
                                                    var u = o.value;
                                                    this._references.add(u);
                                                }
                                            } catch (e) {
                                                c.e(e);
                                            } finally {
                                                c.f();
                                            }
                                        }
                                    } else {
                                        var _ = e.linkedField,
                                            d = _.concreteType;
                                        if (null == d) return;
                                        if (_.plural) {
                                            var h = l.getResolverLinkedRecordIDs(i, d);
                                            if (null != h) {
                                                var v,
                                                    f = (0, a.default)(h);
                                                try {
                                                    for (f.s(); !(v = f.n()).done; ) {
                                                        var p = v.value;
                                                        null != p && this._traverse(_, p);
                                                    }
                                                } catch (e) {
                                                    f.e(e);
                                                } finally {
                                                    f.f();
                                                }
                                            }
                                        } else {
                                            var g = l.getResolverLinkedRecordID(i, d);
                                            null != g && this._traverse(_, g);
                                        }
                                    }
                            }
                        }),
                        (t._traverseResolverField = function (e, t) {
                            var r = d(e, this._variables),
                                a = l.getLinkedRecordID(t, r);
                            null != a && this._references.add(a);
                            var i = e.fragment;
                            return null != i && this._traverseSelections([i], t), a;
                        }),
                        (t._traverseModuleImport = function (e, t) {
                            var r = this._operationLoader;
                            null === r && _(!1);
                            var a = h(e.documentName),
                                n = l.getValue(t, a);
                            if (null != n) {
                                var s = r.get(n);
                                if (null != s) {
                                    var c = i(s),
                                        u = this._variables;
                                    (this._variables = o(this._variables, c.argumentDefinitions, e.args)), this._traverseSelections(c.selections, t), (this._variables = u);
                                }
                            }
                        }),
                        (t._traverseLink = function (e, t) {
                            var r = d(e, this._variables),
                                a = l.getLinkedRecordID(t, r);
                            null != a && this._traverse(e, a);
                        }),
                        (t._traversePluralLink = function (e, t) {
                            var r = this,
                                a = d(e, this._variables),
                                i = l.getLinkedRecordIDs(t, a);
                            null != i &&
                                i.forEach(function (t) {
                                    null != t && r._traverse(e, t);
                                });
                        }),
                        e
                    );
                })();
                e.exports = {
                    mark: function (e, t, r, a, i) {
                        var n = t.dataID,
                            s = t.node,
                            o = t.variables;
                        new v(e, o, r, a, i).mark(s, n);
                    },
                };
            },
            513925: (e, t, r) => {
                var a = r(183491).default,
                    i = a(r(158663)),
                    n = a(r(434323)),
                    s = r(402333),
                    o = (s.ACTOR_IDENTIFIER_FIELD_NAME, s.getActorIdentifierFromPayload),
                    l = r(891362),
                    c = r(286190),
                    u = c.generateClientID,
                    _ = (c.isClientID, r(700378).getLocalVariables),
                    d = r(507567),
                    h = d.buildErrorTrie,
                    v = d.getErrorsByKey,
                    f = d.getNestedErrorTrieByKey,
                    p = r(705180),
                    g = r(464711).createNormalizationSelector,
                    E = r(108475),
                    b = (E.ROOT_ID, E.TYPENAME_KEY),
                    m = E.getArgumentValues,
                    y = E.getHandleStorageKey,
                    R = E.getModuleComponentKey,
                    T = E.getModuleOperationKey,
                    S = E.getStorageKey,
                    I = r(348073),
                    k = I.TYPE_SCHEMA_TYPE,
                    N = I.generateTypeID,
                    D = (r(193860), r(647677));
                r(826590);
                var O = (function () {
                    function e(e, t, r) {
                        (this._actorIdentifier = r.actorIdentifier), (this._getDataId = r.getDataID), (this._handleFieldPayloads = []), (this._treatMissingFieldsAsNull = r.treatMissingFieldsAsNull), (this._incrementalPlaceholders = []), (this._isClientExtension = !1), (this._isUnmatchedAbstractType = !1), (this._followupPayloads = []), (this._path = r.path ? (0, n.default)(r.path) : []), (this._recordSource = e), (this._variables = t), (this._shouldProcessClientComponents = r.shouldProcessClientComponents);
                    }
                    var t = e.prototype;
                    return (
                        (t.normalizeResponse = function (e, t, r, a) {
                            var i = this._recordSource.get(t);
                            return i || D(!1), this._assignClientAbstractTypes(e), (this._errorTrie = h(a)), this._traverseSelections(e, i, r), { errors: a, fieldPayloads: this._handleFieldPayloads, incrementalPlaceholders: this._incrementalPlaceholders, followupPayloads: this._followupPayloads, source: this._recordSource, isFinal: !1 };
                        }),
                        (t._assignClientAbstractTypes = function (e) {
                            var t = e.clientAbstractTypes;
                            if (null != t)
                                for (var r = 0, a = Object.keys(t); r < a.length; r++) {
                                    var n,
                                        s = a[r],
                                        o = (0, i.default)(t[s]);
                                    try {
                                        for (o.s(); !(n = o.n()).done; ) {
                                            var l = n.value,
                                                c = N(l),
                                                u = this._recordSource.get(c);
                                            null == u && ((u = p.create(c, k)), this._recordSource.set(c, u)), p.setValue(u, s, !0);
                                        }
                                    } catch (e) {
                                        o.e(e);
                                    } finally {
                                        o.f();
                                    }
                                }
                        }),
                        (t._getVariableValue = function (e) {
                            return this._variables.hasOwnProperty(e) || D(!1), this._variables[e];
                        }),
                        (t._getRecordType = function (e) {
                            var t = e[b];
                            return null == t && D(!1), t;
                        }),
                        (t._traverseSelections = function (e, t, r) {
                            for (var a = 0; a < e.selections.length; a++) {
                                var i = e.selections[a];
                                switch (i.kind) {
                                    case "ScalarField":
                                    case "LinkedField":
                                        this._normalizeField(i, t, r);
                                        break;
                                    case "Condition":
                                        Boolean(this._getVariableValue(i.condition)) === i.passingValue && this._traverseSelections(i, t, r);
                                        break;
                                    case "FragmentSpread":
                                        var n = this._variables;
                                        (this._variables = _(this._variables, i.fragment.argumentDefinitions, i.args)), this._traverseSelections(i.fragment, t, r), (this._variables = n);
                                        break;
                                    case "InlineFragment":
                                        var s = i.abstractKey;
                                        if (null == s) {
                                            p.getType(t) === i.type && this._traverseSelections(i, t, r);
                                        } else {
                                            var o = r.hasOwnProperty(s),
                                                l = p.getType(t),
                                                c = N(l),
                                                u = this._recordSource.get(c);
                                            null == u && ((u = p.create(c, k)), this._recordSource.set(c, u)), p.setValue(u, s, o), o && this._traverseSelections(i, t, r);
                                        }
                                        break;
                                    case "TypeDiscriminator":
                                        var d = i.abstractKey,
                                            h = r.hasOwnProperty(d),
                                            v = p.getType(t),
                                            f = N(v),
                                            g = this._recordSource.get(f);
                                        null == g && ((g = p.create(f, k)), this._recordSource.set(f, g)), p.setValue(g, d, h);
                                        break;
                                    case "LinkedHandle":
                                    case "ScalarHandle":
                                        var E = i.args ? m(i.args, this._variables) : {},
                                            b = S(i, this._variables),
                                            R = y(i, this._variables);
                                        this._handleFieldPayloads.push({ args: E, dataID: p.getDataID(t), fieldKey: b, handle: i.handle, handleKey: R, handleArgs: i.handleArgs ? m(i.handleArgs, this._variables) : {} });
                                        break;
                                    case "ModuleImport":
                                        this._normalizeModuleImport(i, t, r);
                                        break;
                                    case "Defer":
                                        this._normalizeDefer(i, t, r);
                                        break;
                                    case "Stream":
                                        this._normalizeStream(i, t, r);
                                        break;
                                    case "ClientExtension":
                                        var T = this._isClientExtension;
                                        (this._isClientExtension = !0), this._traverseSelections(i, t, r), (this._isClientExtension = T);
                                        break;
                                    case "ClientComponent":
                                        if (!1 === this._shouldProcessClientComponents) break;
                                        this._traverseSelections(i.fragment, t, r);
                                        break;
                                    case "ActorChange":
                                        this._normalizeActorChange(i, t, r);
                                        break;
                                    case "RelayResolver":
                                    case "RelayLiveResolver":
                                        this._normalizeResolver(i, t, r);
                                        break;
                                    case "ClientEdgeToClientObject":
                                        this._normalizeResolver(i.backingField, t, r);
                                        break;
                                    default:
                                        D(!1);
                                }
                            }
                        }),
                        (t._normalizeResolver = function (e, t, r) {
                            null != e.fragment && this._traverseSelections(e.fragment, t, r);
                        }),
                        (t._normalizeDefer = function (e, t, r) {
                            !1 === (null === e.if || this._getVariableValue(e.if)) ? this._traverseSelections(e, t, r) : this._incrementalPlaceholders.push({ kind: "defer", data: r, label: e.label, path: (0, n.default)(this._path), selector: g(e, p.getDataID(t), this._variables), typeName: p.getType(t), actorIdentifier: this._actorIdentifier });
                        }),
                        (t._normalizeStream = function (e, t, r) {
                            this._traverseSelections(e, t, r), !0 === (null === e.if || this._getVariableValue(e.if)) && this._incrementalPlaceholders.push({ kind: "stream", label: e.label, path: (0, n.default)(this._path), parentID: p.getDataID(t), node: e, variables: this._variables, actorIdentifier: this._actorIdentifier });
                        }),
                        (t._normalizeModuleImport = function (e, t, r) {
                            ("object" == typeof r && r) || D(!1);
                            var a = p.getType(t),
                                i = R(e.documentName),
                                s = e.componentModuleProvider || r[i];
                            p.setValue(t, i, null != s ? s : null);
                            var o = T(e.documentName),
                                l = e.operationModuleProvider || r[o];
                            p.setValue(t, o, null != l ? l : null), null != l && this._followupPayloads.push({ kind: "ModuleImportPayload", args: e.args, data: r, dataID: p.getDataID(t), operationReference: l, path: (0, n.default)(this._path), typeName: a, variables: this._variables, actorIdentifier: this._actorIdentifier });
                        }),
                        (t._normalizeField = function (e, t, r) {
                            ("object" == typeof r && r) || D(!1);
                            var a = e.alias || e.name,
                                i = S(e, this._variables),
                                n = r[a];
                            if (null == n || (l.ENABLE_NONCOMPLIANT_ERROR_HANDLING_ON_LISTS && Array.isArray(n) && 0 === n.length)) {
                                if (void 0 === n) {
                                    if (this._isClientExtension || this._isUnmatchedAbstractType) return;
                                    if (!this._treatMissingFieldsAsNull) return void 0;
                                }
                                p.setValue(t, i, null);
                                var s = this._errorTrie;
                                if (null != s) {
                                    var o = v(s, a);
                                    null != o && p.setErrors(t, i, o);
                                }
                            } else if ("ScalarField" === e.kind) p.setValue(t, i, n);
                            else if ("LinkedField" === e.kind) {
                                this._path.push(a);
                                var c = this._errorTrie;
                                (this._errorTrie = null == c ? null : f(c, a)), e.plural ? this._normalizePluralLink(e, t, i, n) : this._normalizeLink(e, t, i, n), (this._errorTrie = c), this._path.pop();
                            } else D(!1);
                        }),
                        (t._normalizeActorChange = function (e, t, r) {
                            var a,
                                i = e.linkedField;
                            ("object" == typeof r && r) || D(!1);
                            var s = i.alias || i.name,
                                l = S(i, this._variables),
                                c = r[s];
                            if (null != c) {
                                var _ = o(c);
                                if (null != _) {
                                    var d = null !== (a = i.concreteType) && void 0 !== a ? a : this._getRecordType(c),
                                        h = this._getDataId(c, d) || p.getLinkedRecordID(t, l) || u(p.getDataID(t), l);
                                    "string" != typeof h && D(!1), p.setActorLinkedRecordID(t, l, _, h), this._followupPayloads.push({ kind: "ActorPayload", data: c, dataID: h, path: [].concat((0, n.default)(this._path), [s]), typeName: d, variables: this._variables, node: i, actorIdentifier: _ });
                                } else p.setValue(t, l, null);
                            } else {
                                if (void 0 === c) {
                                    if (this._isClientExtension || this._isUnmatchedAbstractType) return;
                                    if (!this._treatMissingFieldsAsNull) return void 0;
                                }
                                p.setValue(t, l, null);
                            }
                        }),
                        (t._normalizeLink = function (e, t, r, a) {
                            var i;
                            ("object" == typeof a && a) || D(!1);
                            var n = this._getDataId(a, null !== (i = e.concreteType) && void 0 !== i ? i : this._getRecordType(a)) || p.getLinkedRecordID(t, r) || u(p.getDataID(t), r);
                            "string" != typeof n && D(!1), p.setLinkedRecordID(t, r, n);
                            var s = this._recordSource.get(n);
                            if (s) 0;
                            else {
                                var o = e.concreteType || this._getRecordType(a);
                                (s = p.create(n, o)), this._recordSource.set(n, s);
                            }
                            this._traverseSelections(e, s, a);
                        }),
                        (t._normalizePluralLink = function (e, t, r, a) {
                            var i = this;
                            Array.isArray(a) || D(!1);
                            var n = p.getLinkedRecordIDs(t, r),
                                s = [];
                            a.forEach(function (a, o) {
                                var l;
                                if (null != a) {
                                    i._path.push(String(o));
                                    var c = i._errorTrie;
                                    (i._errorTrie = null == c ? null : f(c, o)), "object" != typeof a && D(!1);
                                    var _ = i._getDataId(a, null !== (l = e.concreteType) && void 0 !== l ? l : i._getRecordType(a)) || (n && n[o]) || u(p.getDataID(t), r, o);
                                    "string" != typeof _ && D(!1), s.push(_);
                                    var d = i._recordSource.get(_);
                                    if (d) 0;
                                    else {
                                        var h = e.concreteType || i._getRecordType(a);
                                        (d = p.create(_, h)), i._recordSource.set(_, d);
                                    }
                                    0, i._traverseSelections(e, d, a), (i._errorTrie = c), i._path.pop();
                                } else s.push(a);
                            }),
                                p.setLinkedRecordIDs(t, r, s);
                        }),
                        (t._validateRecordType = function (e, t, r) {
                            var a;
                            (null !== (a = t.concreteType) && void 0 !== a) || this._getRecordType(r), p.getDataID(e);
                        }),
                        (t._validateConflictingFieldsWithIdenticalId = function (e, t, r) {}),
                        (t._validateConflictingLinkedFieldsWithIdenticalId = function (e, t, r) {
                            0;
                        }),
                        e
                    );
                })();
                e.exports = {
                    normalize: function (e, t, r, a, i) {
                        var n = t.dataID,
                            s = t.node,
                            o = t.variables;
                        return new O(e, o, a).normalizeResponse(s, n, r, i);
                    },
                };
            },
            907554: (e, t, r) => {
                r(427225);
                var a = r(555398),
                    i = r(891362),
                    n = r(320755),
                    s = r(600353),
                    o = r(458076),
                    l = (function () {
                        function e(e, t, r) {
                            (this._subscriptions = new Set()), (this.__log = e), (this._resolverCache = t), (this._resolverContext = r);
                        }
                        var t = e.prototype;
                        return (
                            (t.subscribe = function (e, t) {
                                var r = this,
                                    a = { backup: null, callback: t, snapshot: e, stale: !1 };
                                return (
                                    this._subscriptions.add(a),
                                    {
                                        dispose: function () {
                                            r._subscriptions.delete(a);
                                        },
                                    }
                                );
                            }),
                            (t.snapshotSubscriptions = function (e) {
                                var t = this;
                                this._subscriptions.forEach(function (r) {
                                    if (r.stale) {
                                        var i = r.snapshot,
                                            n = o.read(e, i.selector, t._resolverCache, t._resolverContext),
                                            s = a(i.data, n.data);
                                        (n.data = s), (r.backup = n);
                                    } else r.backup = r.snapshot;
                                });
                            }),
                            (t.restoreSubscriptions = function () {
                                this._subscriptions.forEach(function (e) {
                                    var t = e.backup;
                                    (e.backup = null), t ? (t.data !== e.snapshot.data && (e.stale = !0), (e.snapshot = { data: e.snapshot.data, isMissingData: t.isMissingData, missingClientEdges: t.missingClientEdges, missingLiveResolverFields: t.missingLiveResolverFields, seenRecords: t.seenRecords, selector: t.selector, errorResponseFields: t.errorResponseFields })) : (e.stale = !0);
                                });
                            }),
                            (t.updateSubscriptions = function (e, t, r, a) {
                                var i = this,
                                    n = 0 !== t.size;
                                this._subscriptions.forEach(function (s) {
                                    var o = i._updateSubscription(e, s, t, n, a);
                                    null != o && r.push(o);
                                });
                            }),
                            (t._updateSubscription = function (e, t, r, l, c) {
                                var u = t.backup,
                                    _ = t.callback,
                                    d = t.snapshot,
                                    h = t.stale,
                                    v = l && n(d.seenRecords, r);
                                if (h || v) {
                                    var f = v || !u ? o.read(e, d.selector, this._resolverCache, this._resolverContext) : u;
                                    return (f = { data: a(d.data, f.data), isMissingData: f.isMissingData, missingClientEdges: f.missingClientEdges, missingLiveResolverFields: f.missingLiveResolverFields, seenRecords: f.seenRecords, selector: f.selector, errorResponseFields: f.errorResponseFields }), (t.snapshot = f), (t.stale = !1), f.data !== d.data ? (this.__log && i.ENABLE_NOTIFY_SUBSCRIPTION && this.__log({ name: "store.notify.subscription", sourceOperation: c, snapshot: d, nextSnapshot: f }), _(f), d.selector.owner) : i.ENABLE_LOOSE_SUBSCRIPTION_ATTRIBUTION && (h || s(d.seenRecords, r)) ? d.selector.owner : void 0;
                                }
                            }),
                            (t.size = function () {
                                return this._subscriptions.size;
                            }),
                            e
                        );
                    })();
                e.exports = l;
            },
            108475: (e, t, r) => {
                var a = (0, r(183491).default)(r(434323)),
                    i = r(985594),
                    n = r(677783),
                    s = r(795178).stableCopy,
                    o = r(647677),
                    l = n.VARIABLE,
                    c = n.LITERAL,
                    u = n.OBJECT_VALUE,
                    _ = n.LIST_VALUE;
                function d(e, t) {
                    if (e.kind === l)
                        return (function (e, t) {
                            return t.hasOwnProperty(e) || o(!1), s(t[e]);
                        })(e.variableName, t);
                    if (e.kind === c) return e.value;
                    if (e.kind === u) {
                        var r = {};
                        return (
                            e.fields.forEach(function (e) {
                                r[e.name] = d(e, t);
                            }),
                            r
                        );
                    }
                    if (e.kind === _) {
                        var a = [];
                        return (
                            e.items.forEach(function (e) {
                                null != e && a.push(d(e, t));
                            }),
                            a
                        );
                    }
                }
                function h(e, t, r) {
                    var a = {};
                    return (
                        r && (a[f.FRAGMENT_POINTER_IS_WITHIN_UNMATCHED_TYPE_REFINEMENT] = !0),
                        e &&
                            e.forEach(function (e) {
                                a[e.name] = d(e, t);
                            }),
                        a
                    );
                }
                function v(e, t) {
                    if (!t) return e;
                    var r = [];
                    for (var a in t)
                        if (t.hasOwnProperty(a)) {
                            var i,
                                n = t[a];
                            if (null != n) r.push(a + ":" + (null !== (i = JSON.stringify(n)) && void 0 !== i ? i : "undefined"));
                        }
                    return 0 === r.length ? e : e + "(".concat(r.join(","), ")");
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
                    getHandleStorageKey: function (e, t) {
                        var r = e.dynamicKey,
                            n = e.handle,
                            s = e.key,
                            o = e.name,
                            l = e.args,
                            c = e.filters,
                            u = i(n, s, o),
                            _ = null;
                        return (
                            l &&
                                c &&
                                0 !== l.length &&
                                0 !== c.length &&
                                (_ = l.filter(function (e) {
                                    return c.indexOf(e.name) > -1;
                                })),
                            r && (_ = null != _ ? [r].concat((0, a.default)(_)) : [r]),
                            null === _ ? u : v(u, h(_, t))
                        );
                    },
                    getStorageKey: function (e, t) {
                        if (e.storageKey) return e.storageKey;
                        var r = (function (e) {
                                if ("RelayResolver" === e.kind || "RelayLiveResolver" === e.kind) {
                                    var t, r;
                                    return null == e.args ? (null === (r = e.fragment) || void 0 === r ? void 0 : r.args) : null == (null === (t = e.fragment) || void 0 === t ? void 0 : t.args) ? e.args : e.args.concat(e.fragment.args);
                                }
                                var a = void 0 === e.args ? void 0 : e.args;
                                return a;
                            })(e),
                            a = e.name;
                        return r && 0 !== r.length ? v(a, h(r, t)) : a;
                    },
                    getStableStorageKey: function (e, t) {
                        return v(e, s(t));
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
            280587: (e, t, r) => {
                var a = r(677783).RELAY_LIVE_RESOLVER,
                    i = r(647677),
                    n = (function () {
                        function e() {}
                        var t = e.prototype;
                        return (
                            (t.readFromCacheOrEvaluate = function (e, t, r, n, s) {
                                t.kind === a && i(!1);
                                var o = n(),
                                    l = o.resolverResult,
                                    c = o.snapshot;
                                return [l, void 0, o.error, c, void 0, void 0];
                            }),
                            (t.invalidateDataIDs = function (e) {}),
                            (t.ensureClientRecord = function (e, t) {
                                i(!1);
                            }),
                            (t.notifyUpdatedSubscribers = function (e) {}),
                            e
                        );
                    })();
                e.exports = { NoopResolverCache: n };
            },
            296932: (e, t, r) => {
                var a = r(585488).getFragment,
                    i = r(927421).eventShouldThrow,
                    n = r(464711).getSelector,
                    s = r(647677),
                    o = [];
                var l = {};
                e.exports = {
                    readFragment: function (e, t) {
                        if (!o.length) throw new Error("readFragment should be called only from within a Relay Resolver function.");
                        var r = o[o.length - 1],
                            c = a(e),
                            u = n(c, t);
                        null == u && s(!1), "SingularReaderSelector" !== u.kind && s(!1);
                        var _ = r.getDataForResolverFragment(u, t),
                            d = _.data,
                            h = _.isMissingData,
                            v = _.errorResponseFields;
                        if (h || (null != v && v.some(i))) throw l;
                        return d;
                    },
                    withResolverContext: function (e, t) {
                        o.push(e);
                        try {
                            return t();
                        } finally {
                            o.pop();
                        }
                    },
                    RESOLVER_FRAGMENT_ERRORED_SENTINEL: l,
                };
            },
            348073: (e) => {
                var t = "client:__type:";
                e.exports = {
                    generateTypeID: function (e) {
                        return t + e;
                    },
                    isTypeID: function (e) {
                        return 0 === e.indexOf(t);
                    },
                    TYPE_SCHEMA_TYPE: "__TypeSchema",
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-57216f32.d6191e3a.js.map
