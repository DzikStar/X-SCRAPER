window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-744bed60"],
        {
            458076: (e, i, s) => {
                var r = s(171600).default,
                    t = r(s(226290)),
                    a = r(s(638636)),
                    n = r(s(373408)),
                    l = s(677783),
                    d = l.ACTOR_CHANGE,
                    o = l.ALIASED_FRAGMENT_SPREAD,
                    u = l.ALIASED_INLINE_FRAGMENT_SPREAD,
                    _ = l.CATCH_FIELD,
                    h = l.CLIENT_EDGE_TO_CLIENT_OBJECT,
                    v = l.CLIENT_EDGE_TO_SERVER_OBJECT,
                    c = l.CLIENT_EXTENSION,
                    g = l.CONDITION,
                    f = l.DEFER,
                    m = l.FRAGMENT_SPREAD,
                    R = l.INLINE_DATA_FRAGMENT_SPREAD,
                    E = l.INLINE_FRAGMENT,
                    p = l.LINKED_FIELD,
                    F = l.MODULE_IMPORT,
                    D = l.RELAY_LIVE_RESOLVER,
                    I = l.RELAY_RESOLVER,
                    y = l.REQUIRED_FIELD,
                    A = l.SCALAR_FIELD,
                    T = l.STREAM,
                    L = s(891362),
                    b = s(798452).isSuspenseSentinel,
                    S = s(700378),
                    N = s(705180),
                    k = s(108475),
                    C = k.CLIENT_EDGE_TRAVERSAL_PATH,
                    M = k.FRAGMENT_OWNER_KEY,
                    O = k.FRAGMENT_PROP_NAME_KEY,
                    w = k.FRAGMENTS_KEY,
                    P = k.ID_KEY,
                    q = k.MODULE_COMPONENT_KEY,
                    V = k.ROOT_ID,
                    G = k.getArgumentValues,
                    U = k.getModuleComponentKey,
                    W = k.getStorageKey,
                    H = s(280587).NoopResolverCache,
                    K = s(296932),
                    Y = K.RESOLVER_FRAGMENT_MISSING_DATA_SENTINEL,
                    j = K.withResolverContext,
                    B = s(348073).generateTypeID,
                    x = s(647677);
                function z(e, i, s) {
                    return new J(e, i, null != s ? s : new H()).read();
                }
                var J = (function () {
                    function e(e, i, s) {
                        var r;
                        (this._clientEdgeTraversalPath = null !== (r = i.clientEdgeTraversalPath) && void 0 !== r && r.length ? (0, n.default)(i.clientEdgeTraversalPath) : []), (this._missingClientEdges = []), (this._missingLiveResolverFields = []), (this._isMissingData = !1), (this._isWithinUnmatchedTypeRefinement = !1), (this._missingRequiredFields = null), (this._errorResponseFields = null), (this._owner = i.owner), (this._recordSource = e), (this._seenRecords = new Set()), (this._selector = i), (this._variables = i.variables), (this._resolverCache = s), (this._resolverErrors = []), (this._fragmentName = i.node.name), (this._updatedDataIDs = new Set());
                    }
                    var i = e.prototype;
                    return (
                        (i.read = function () {
                            var e = this._selector,
                                i = e.node,
                                s = e.dataID,
                                r = e.isWithinUnmatchedTypeRefinement,
                                t = i.abstractKey,
                                a = this._recordSource.get(s),
                                n = !r;
                            n && null == t && null != a && N.getType(a) !== i.type && s !== V && (n = !1);
                            if (n && null != t && null != a) {
                                var l = this._implementsInterface(a, t);
                                !1 === l ? (n = !1) : null == l && (this._isMissingData = !0);
                            }
                            this._isWithinUnmatchedTypeRefinement = !n;
                            var d = this._traverse(i, s, null);
                            return this._updatedDataIDs.size > 0 && (this._resolverCache.notifyUpdatedSubscribers(this._updatedDataIDs), this._updatedDataIDs.clear()), { data: d, isMissingData: this._isMissingData && n, missingClientEdges: this._missingClientEdges.length ? this._missingClientEdges : null, missingLiveResolverFields: this._missingLiveResolverFields, seenRecords: this._seenRecords, selector: this._selector, missingRequiredFields: this._missingRequiredFields, relayResolverErrors: this._resolverErrors, errorResponseFields: this._errorResponseFields };
                        }),
                        (i._maybeAddErrorResponseFields = function (e, i) {
                            if (L.ENABLE_FIELD_ERROR_HANDLING) {
                                var s = N.getErrors(e, i);
                                if (null != s) {
                                    var r = this._fragmentName;
                                    null == this._errorResponseFields && (this._errorResponseFields = []);
                                    var t,
                                        n = (0, a.default)(s);
                                    try {
                                        for (n.s(); !(t = n.n()).done; ) {
                                            var l,
                                                d = t.value;
                                            this._errorResponseFields.push({ owner: r, path: (null !== (l = d.path) && void 0 !== l ? l : []).join("."), error: d });
                                        }
                                    } catch (e) {
                                        n.e(e);
                                    } finally {
                                        n.f();
                                    }
                                }
                            }
                        }),
                        (i._markDataAsMissing = function () {
                            if (((this._isMissingData = !0), this._clientEdgeTraversalPath.length)) {
                                var e = this._clientEdgeTraversalPath[this._clientEdgeTraversalPath.length - 1];
                                null !== e && this._missingClientEdges.push({ request: e.readerClientEdge.operation, clientEdgeDestinationID: e.clientEdgeDestinationID });
                            }
                        }),
                        (i._traverse = function (e, i, s) {
                            var r = this._recordSource.get(i);
                            if ((this._seenRecords.add(i), null == r)) return void 0 === r && this._markDataAsMissing(), r;
                            var t = s || {};
                            return this._traverseSelections(e.selections, r, t) ? t : null;
                        }),
                        (i._getVariableValue = function (e) {
                            return this._variables.hasOwnProperty(e) || x(!1), this._variables[e];
                        }),
                        (i._maybeReportUnexpectedNull = function (e, i) {
                            var s;
                            if ("THROW" !== (null === (s = this._missingRequiredFields) || void 0 === s ? void 0 : s.action)) {
                                var r = this._fragmentName;
                                switch (i) {
                                    case "THROW":
                                        return void (this._missingRequiredFields = { action: i, field: { path: e, owner: r } });
                                    case "LOG":
                                        return void (null == this._missingRequiredFields ? (this._missingRequiredFields = { action: i, fields: [{ path: e, owner: r }] }) : (this._missingRequiredFields = { action: i, fields: [].concat((0, n.default)(this._missingRequiredFields.fields), [{ path: e, owner: r }]) }));
                                }
                            }
                        }),
                        (i._handleCatchFieldValue = function (e, i, s, r) {
                            var t,
                                a,
                                n,
                                l,
                                d = e.to,
                                o = null !== (t = null === (a = e.field) || void 0 === a ? void 0 : a.backingField) && void 0 !== t ? t : e.field,
                                u = null !== (n = null == o ? void 0 : o.alias) && void 0 !== n ? n : null == o ? void 0 : o.name;
                            if ((null == u && x(!1), null != this._errorResponseFields)) for (var _ = 0; _ < this._errorResponseFields.length; _++) this._errorResponseFields[_].to = d;
                            if ("THROW" === (null === (l = this._missingRequiredFields) || void 0 === l ? void 0 : l.action)) {
                                var h;
                                if (null == (null === (h = this._missingRequiredFields) || void 0 === h ? void 0 : h.field)) return;
                                null == this._errorResponseFields && (this._errorResponseFields = []);
                                var v = this._missingRequiredFields.field,
                                    c = v.owner,
                                    g = v.path;
                                return this._errorResponseFields.push({ owner: c, path: g, error: { message: "Relay: Missing @required value at path '".concat(g, "' in '").concat(c, "'.") }, to: d }), void (this._missingRequiredFields = null);
                            }
                            if (null == this._errorResponseFields) s[u] = { ok: !0, value: r };
                            else {
                                var f = this._errorResponseFields.map(function (e) {
                                    return e.error;
                                });
                                s[u] = { ok: !1, errors: f };
                            }
                        }),
                        (i._handleRequiredFieldValue = function (e, i) {
                            if (null == i) {
                                var s = e.action;
                                return "NONE" !== s && this._maybeReportUnexpectedNull(e.path, s), !1;
                            }
                            return !0;
                        }),
                        (i._traverseSelections = function (e, i, s) {
                            for (var r = 0; r < e.length; r++) {
                                var t = e[r];
                                switch (t.kind) {
                                    case y:
                                        var a = this._readClientSideDirectiveField(t, i, s);
                                        if (!this._handleRequiredFieldValue(t, a)) return !1;
                                        break;
                                    case _:
                                        var n = this._readClientSideDirectiveField(t, i, s);
                                        L.ENABLE_FIELD_ERROR_HANDLING_CATCH_DIRECTIVE && "NULL" != t.to && this._handleCatchFieldValue(t, i, s, n);
                                        break;
                                    case A:
                                        this._readScalar(t, i, s);
                                        break;
                                    case p:
                                        t.plural ? this._readPluralLink(t, i, s) : this._readLink(t, i, s);
                                        break;
                                    case g:
                                        if (Boolean(this._getVariableValue(t.condition)) === t.passingValue) if (!this._traverseSelections(t.selections, i, s)) return !1;
                                        break;
                                    case E:
                                        if (!1 === this._readInlineFragment(t, i, s)) return !1;
                                        break;
                                    case D:
                                    case I:
                                        if (!L.ENABLE_RELAY_RESOLVERS) throw new Error("Relay Resolver fields are not yet supported.");
                                        this._readResolverField(t, i, s);
                                        break;
                                    case m:
                                        this._createFragmentPointer(t, i, s);
                                        break;
                                    case o:
                                        s[t.name] = this._createAliasedFragmentSpread(t, i);
                                        break;
                                    case u:
                                        var l = this._readInlineFragment(t.fragment, i, {});
                                        !1 === l && (l = null), (s[t.name] = l);
                                        break;
                                    case F:
                                        this._readModuleImport(t, i, s);
                                        break;
                                    case R:
                                        this._createInlineDataOrResolverFragmentPointer(t, i, s);
                                        break;
                                    case f:
                                    case c:
                                        var b = this._isMissingData,
                                            S = this._missingClientEdges.length;
                                        this._clientEdgeTraversalPath.push(null);
                                        var N = this._traverseSelections(t.selections, i, s);
                                        if (((this._isMissingData = b || this._missingClientEdges.length > S || this._missingLiveResolverFields.length > 0), this._clientEdgeTraversalPath.pop(), !N)) return !1;
                                        break;
                                    case T:
                                        if (!this._traverseSelections(t.selections, i, s)) return !1;
                                        break;
                                    case d:
                                        this._readActorChange(t, i, s);
                                        break;
                                    case h:
                                    case v:
                                        this._readClientEdge(t, i, s);
                                        break;
                                    default:
                                        x(!1);
                                }
                            }
                            return !0;
                        }),
                        (i._readClientSideDirectiveField = function (e, i, s) {
                            switch (e.field.kind) {
                                case A:
                                    return this._readScalar(e.field, i, s);
                                case p:
                                    return e.field.plural ? this._readPluralLink(e.field, i, s) : this._readLink(e.field, i, s);
                                case I:
                                case D:
                                    if (!L.ENABLE_RELAY_RESOLVERS) throw new Error("Relay Resolver fields are not yet supported.");
                                    return this._readResolverField(e.field, i, s);
                                case h:
                                case v:
                                    if (!L.ENABLE_RELAY_RESOLVERS) throw new Error("Relay Resolver fields are not yet supported.");
                                    return this._readClientEdge(e.field, i, s);
                                default:
                                    e.field.kind, x(!1);
                            }
                        }),
                        (i._readResolverField = function (e, i, s) {
                            var r,
                                t = N.getDataID(i),
                                a = this._readResolverFieldImpl(e, t);
                            return (s[null !== (r = e.alias) && void 0 !== r ? r : e.name] = a), a;
                        }),
                        (i._readResolverFieldImpl = function (e, i) {
                            var s,
                                r = this,
                                a = e.fragment,
                                n = function (e) {
                                    return null != s ? { data: s.data, isMissingData: s.isMissingData } : { data: (s = z(r._recordSource, e, r._resolverCache)).data, isMissingData: s.isMissingData };
                                },
                                l = this._resolverCache.readFromCacheOrEvaluate(
                                    i,
                                    e,
                                    this._variables,
                                    function () {
                                        if (null != a) {
                                            var l = { __id: i, __fragmentOwner: r._owner, __fragments: (0, t.default)({}, a.name, a.args ? G(a.args, r._variables) : {}) };
                                            return j({ getDataForResolverFragment: n }, function () {
                                                var i = Q(e, r._variables, l),
                                                    t = i[0],
                                                    a = i[1];
                                                return { resolverResult: t, snapshot: s, error: a };
                                            });
                                        }
                                        var d = Q(e, r._variables, null);
                                        return { resolverResult: d[0], snapshot: void 0, error: d[1] };
                                    },
                                    n,
                                ),
                                d = l[0],
                                o = l[1],
                                u = l[2],
                                _ = l[3],
                                h = l[4],
                                v = l[5];
                            return this._propogateResolverMetadata(e.path, _, u, o, h, v), d;
                        }),
                        (i._propogateResolverMetadata = function (e, i, s, r, t, n) {
                            if (null != i) {
                                if ((null != i.missingRequiredFields && this._addMissingRequiredFields(i.missingRequiredFields), null != i.missingClientEdges)) {
                                    var l,
                                        d = (0, a.default)(i.missingClientEdges);
                                    try {
                                        for (d.s(); !(l = d.n()).done; ) {
                                            var o = l.value;
                                            this._missingClientEdges.push(o);
                                        }
                                    } catch (e) {
                                        d.e(e);
                                    } finally {
                                        d.f();
                                    }
                                }
                                if (null != i.missingLiveResolverFields) {
                                    this._isMissingData = this._isMissingData || i.missingLiveResolverFields.length > 0;
                                    var u,
                                        _ = (0, a.default)(i.missingLiveResolverFields);
                                    try {
                                        for (_.s(); !(u = _.n()).done; ) {
                                            var h = u.value;
                                            this._missingLiveResolverFields.push(h);
                                        }
                                    } catch (e) {
                                        _.e(e);
                                    } finally {
                                        _.f();
                                    }
                                }
                                var v,
                                    c = (0, a.default)(i.relayResolverErrors);
                                try {
                                    for (c.s(); !(v = c.n()).done; ) {
                                        var g = v.value;
                                        this._resolverErrors.push(g);
                                    }
                                } catch (e) {
                                    c.e(e);
                                } finally {
                                    c.f();
                                }
                                this._isMissingData = this._isMissingData || i.isMissingData;
                            }
                            if ((s && this._resolverErrors.push({ field: { path: e, owner: this._fragmentName }, error: s }), null != r && this._seenRecords.add(r), null != t && ((this._isMissingData = !0), this._missingLiveResolverFields.push({ path: "".concat(this._fragmentName, ".").concat(e), liveStateID: t })), null != n)) {
                                var f,
                                    m = (0, a.default)(n);
                                try {
                                    for (m.s(); !(f = m.n()).done; ) {
                                        var R = f.value;
                                        this._updatedDataIDs.add(R);
                                    }
                                } catch (e) {
                                    m.e(e);
                                } finally {
                                    m.f();
                                }
                            }
                        }),
                        (i._readClientEdge = function (e, i, s) {
                            var r,
                                t = this,
                                a = e.backingField;
                            "ClientExtension" === a.kind && x(!1);
                            var n = null !== (r = a.alias) && void 0 !== r ? r : a.name,
                                l = {};
                            this._traverseSelections([a], i, l);
                            var d = l[n];
                            if (null == d || b(d)) return (s[n] = d), d;
                            if (e.linkedField.plural) {
                                var o;
                                Array.isArray(d) || x(!1),
                                    e.kind !== h && x(!1),
                                    (o =
                                        null == e.backingField.normalizationInfo
                                            ? d.map(function (i) {
                                                  var s,
                                                      r = null !== (s = e.concreteType) && void 0 !== s ? s : i.__typename;
                                                  "string" != typeof r && x(!1);
                                                  var a = X(i),
                                                      n = t._resolverCache.ensureClientRecord(a, r),
                                                      l = e.modelResolvers;
                                                  if (null != l) {
                                                      var d = l[r];
                                                      return void 0 === d && x(!1), null != t._readResolverFieldImpl(d, n) ? n : null;
                                                  }
                                                  return n;
                                              })
                                            : d.map(X)),
                                    this._clientEdgeTraversalPath.push(null);
                                var u = this._readLinkedIds(e.linkedField, o, i, s);
                                return this._clientEdgeTraversalPath.pop(), (s[n] = u), u;
                            }
                            var _,
                                v,
                                c,
                                g = X(d),
                                f = null !== (_ = e.concreteType) && void 0 !== _ ? _ : d.__typename;
                            e.kind === h ? (null == e.backingField.normalizationInfo ? ("string" != typeof f && x(!1), (v = this._resolverCache.ensureClientRecord(g, f)), (c = null)) : ((v = g), (c = null))) : ((v = g), (c = { readerClientEdge: e, clientEdgeDestinationID: g }));
                            var m = e.modelResolvers;
                            if (null != m) {
                                "string" != typeof f && x(!1);
                                var R = m[f];
                                if ((void 0 === R && x(!1), null == this._readResolverFieldImpl(R, v))) return (s[n] = null), null;
                            }
                            this._clientEdgeTraversalPath.push(c);
                            var E = s[n];
                            null != E && "object" != typeof E && x(!1);
                            var p = this._traverse(e.linkedField, v, E);
                            return this._clientEdgeTraversalPath.pop(), (s[n] = p), p;
                        }),
                        (i._readScalar = function (e, i, s) {
                            var r,
                                t = null !== (r = e.alias) && void 0 !== r ? r : e.name,
                                a = W(e, this._variables),
                                n = N.getValue(i, a);
                            return null === n ? this._maybeAddErrorResponseFields(i, a) : void 0 === n && this._markDataAsMissing(), (s[t] = n), n;
                        }),
                        (i._readLink = function (e, i, s) {
                            var r,
                                t = null !== (r = e.alias) && void 0 !== r ? r : e.name,
                                a = W(e, this._variables),
                                n = N.getLinkedRecordID(i, a);
                            if (null == n) return (s[t] = n), null === n ? this._maybeAddErrorResponseFields(i, a) : void 0 === n && this._markDataAsMissing(), n;
                            var l = s[t];
                            null != l && "object" != typeof l && x(!1);
                            var d = this._traverse(e, n, l);
                            return (s[t] = d), d;
                        }),
                        (i._readActorChange = function (e, i, s) {
                            var r,
                                t = null !== (r = e.alias) && void 0 !== r ? r : e.name,
                                a = W(e, this._variables),
                                n = N.getActorLinkedRecordID(i, a);
                            if (null == n) return (s[t] = n), void 0 === n ? this._markDataAsMissing() : null === n && this._maybeAddErrorResponseFields(i, a), s[t];
                            var l = n[0],
                                d = n[1],
                                o = {};
                            return this._createFragmentPointer(e.fragmentSpread, N.fromObject({ __id: d }), o), (s[t] = { __fragmentRef: o, __viewer: l }), s[t];
                        }),
                        (i._readPluralLink = function (e, i, s) {
                            var r = W(e, this._variables),
                                t = N.getLinkedRecordIDs(i, r);
                            return null === t && this._maybeAddErrorResponseFields(i, r), this._readLinkedIds(e, t, i, s);
                        }),
                        (i._readLinkedIds = function (e, i, s, r) {
                            var t,
                                a = this,
                                n = null !== (t = e.alias) && void 0 !== t ? t : e.name;
                            if (null == i) return (r[n] = i), void 0 === i && this._markDataAsMissing(), i;
                            var l = r[n];
                            null == l || Array.isArray(l) || x(!1);
                            var d = l || [];
                            return (
                                i.forEach(function (i, s) {
                                    if (null == i) return void 0 === i && a._markDataAsMissing(), void (d[s] = i);
                                    var r = d[s];
                                    null != r && "object" != typeof r && x(!1), (d[s] = a._traverse(e, i, r));
                                }),
                                (r[n] = d),
                                d
                            );
                        }),
                        (i._readModuleImport = function (e, i, s) {
                            var r = U(e.documentName),
                                t = N.getValue(i, r);
                            null != t ? (this._createFragmentPointer({ kind: "FragmentSpread", name: e.fragmentName, args: e.args }, i, s), (s[O] = e.fragmentPropName), (s[q] = t)) : void 0 === t && this._markDataAsMissing();
                        }),
                        (i._createAliasedFragmentSpread = function (e, i) {
                            var s = e.abstractKey;
                            if (null == s) {
                                var r = N.getType(i);
                                if (null == r || r !== e.type) return null;
                            } else {
                                var t = this._implementsInterface(i, s);
                                if (!1 === t) return null;
                                if (null == t) return void this._markDataAsMissing();
                            }
                            var a = {};
                            return this._createFragmentPointer(e.fragment, i, a), N.fromObject(a);
                        }),
                        (i._readInlineFragment = function (e, i, s) {
                            if (null == e.type) return !1 !== this._traverseSelections(e.selections, i, s) && s;
                            var r = e.abstractKey;
                            if (null == r) {
                                var t = N.getType(i);
                                if (null == t || t !== e.type) return null;
                                if (!this._traverseSelections(e.selections, i, s)) return !1;
                            } else {
                                var a = this._implementsInterface(i, r),
                                    n = this._isMissingData,
                                    l = this._isWithinUnmatchedTypeRefinement;
                                if (((this._isWithinUnmatchedTypeRefinement = l || !1 === a), this._traverseSelections(e.selections, i, s), (this._isWithinUnmatchedTypeRefinement = l), !1 === a)) return void (this._isMissingData = n);
                                if (null == a) return this._markDataAsMissing(), null;
                            }
                            return s;
                        }),
                        (i._createFragmentPointer = function (e, i, s) {
                            var r = s[w];
                            null == r && (r = s[w] = {}), ("object" != typeof r || null == r) && x(!1), null == s[P] && (s[P] = N.getDataID(i)), (r[e.name] = G(e.args, this._variables, this._isWithinUnmatchedTypeRefinement)), (s[M] = this._owner), this._clientEdgeTraversalPath.length > 0 && null !== this._clientEdgeTraversalPath[this._clientEdgeTraversalPath.length - 1] && (s[C] = (0, n.default)(this._clientEdgeTraversalPath));
                        }),
                        (i._createInlineDataOrResolverFragmentPointer = function (e, i, s) {
                            var r = s[w];
                            null == r && (r = s[w] = {}), ("object" != typeof r || null == r) && x(!1), null == s[P] && (s[P] = N.getDataID(i));
                            var t = {},
                                a = this._fragmentName;
                            this._fragmentName = e.name;
                            var n = this._variables,
                                l = e.args ? G(e.args, this._variables) : {};
                            (this._variables = S.getFragmentVariables(e, this._owner.variables, l)), this._traverseSelections(e.selections, i, t), (this._variables = n), (this._fragmentName = a), (r[e.name] = t);
                        }),
                        (i._addMissingRequiredFields = function (e) {
                            null != this._missingRequiredFields ? "THROW" !== this._missingRequiredFields.action && ("THROW" !== e.action ? (this._missingRequiredFields = { action: "LOG", fields: [].concat((0, n.default)(this._missingRequiredFields.fields), (0, n.default)(e.fields)) }) : (this._missingRequiredFields = e)) : (this._missingRequiredFields = e);
                        }),
                        (i._implementsInterface = function (e, i) {
                            var s = N.getType(e),
                                r = this._recordSource.get(B(s));
                            return null != r ? N.getValue(r, i) : null;
                        }),
                        e
                    );
                })();
                function Q(e, i, s) {
                    var r = "function" == typeof e.resolverModule ? e.resolverModule : e.resolverModule.default,
                        t = null,
                        a = null;
                    try {
                        var n = [];
                        null != e.fragment && n.push(s);
                        var l = e.args ? G(e.args, i) : void 0;
                        n.push(l), (t = r.apply(null, n));
                    } catch (e) {
                        e === Y ? (t = void 0) : (a = e);
                    }
                    return [t, a];
                }
                function X(e) {
                    return "string" == typeof e ? e : "object" == typeof e && null != e && "string" == typeof e.id ? e.id : void x(!1);
                }
                e.exports = { read: z };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-744bed60.4b2752ba.js.map
