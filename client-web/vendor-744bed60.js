window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-744bed60"],
        {
            458076: (e, r, i) => {
                var s = i(183491).default,
                    t = s(i(479035)),
                    n = s(i(845621)),
                    a = s(i(173771)),
                    l = s(i(158663)),
                    o = s(i(434323)),
                    d = ["message"],
                    h = i(514840).isSuspenseSentinel,
                    u = i(700378),
                    _ = i(705180),
                    c = i(108475),
                    v = c.CLIENT_EDGE_TRAVERSAL_PATH,
                    g = c.FRAGMENT_OWNER_KEY,
                    f = c.FRAGMENT_PROP_NAME_KEY,
                    p = c.FRAGMENTS_KEY,
                    m = c.ID_KEY,
                    R = c.MODULE_COMPONENT_KEY,
                    F = c.ROOT_ID,
                    E = c.getArgumentValues,
                    k = c.getModuleComponentKey,
                    y = c.getStorageKey,
                    b = i(280587).NoopResolverCache,
                    D = i(296932),
                    C = D.RESOLVER_FRAGMENT_ERRORED_SENTINEL,
                    T = D.withResolverContext,
                    w = i(348073).generateTypeID,
                    P = i(647677);
                function I(e, r, i, s) {
                    return new S(e, r, null != i ? i : new b(), s).read();
                }
                var S = (function () {
                    function e(e, r, i, s) {
                        var t, n;
                        (this._clientEdgeTraversalPath = null !== (t = r.clientEdgeTraversalPath) && void 0 !== t && t.length ? (0, o.default)(r.clientEdgeTraversalPath) : []), (this._missingClientEdges = []), (this._missingLiveResolverFields = []), (this._isMissingData = !1), (this._isWithinUnmatchedTypeRefinement = !1), (this._errorResponseFields = null), (this._owner = r.owner), (this._useExecTimeResolvers = null !== (n = this._owner.node.operation.use_exec_time_resolvers) && void 0 !== n && n), (this._recordSource = e), (this._seenRecords = new Set()), (this._selector = r), (this._variables = r.variables), (this._resolverCache = i), (this._fragmentName = r.node.name), (this._updatedDataIDs = new Set()), (this._resolverContext = s);
                    }
                    var r = e.prototype;
                    return (
                        (r.read = function () {
                            var e,
                                r = this._selector,
                                i = r.node,
                                s = r.dataID,
                                t = r.isWithinUnmatchedTypeRefinement,
                                n = i.abstractKey,
                                a = this._recordSource.get(s),
                                l = !t;
                            (l && null == n && null != a && (this._recordMatchesTypeCondition(a, i.type) || (l = !1)), l && null != n && null != a) && !1 === this._implementsInterface(a, n) && (l = !1);
                            this._isWithinUnmatchedTypeRefinement = !l;
                            var o = this._traverse(i, s, null),
                                d = null === (e = this._selector.node.metadata) || void 0 === e ? void 0 : e.catchTo;
                            return null != d && (o = this._catchErrors(o, d, null)), this._updatedDataIDs.size > 0 && (this._resolverCache.notifyUpdatedSubscribers(this._updatedDataIDs), this._updatedDataIDs.clear()), { data: o, isMissingData: this._isMissingData && l, missingClientEdges: this._missingClientEdges.length ? this._missingClientEdges : null, missingLiveResolverFields: this._missingLiveResolverFields, seenRecords: this._seenRecords, selector: this._selector, errorResponseFields: this._errorResponseFields };
                        }),
                        (r._maybeAddErrorResponseFields = function (e, r) {
                            var i = _.getErrors(e, r);
                            if (null != i) {
                                var s = this._fragmentName;
                                null == this._errorResponseFields && (this._errorResponseFields = []);
                                var t,
                                    n = (0, l.default)(i);
                                try {
                                    for (n.s(); !(t = n.n()).done; ) {
                                        var a,
                                            o,
                                            d,
                                            h = t.value;
                                        this._errorResponseFields.push({ kind: "relay_field_payload.error", owner: s, fieldPath: (null !== (a = h.path) && void 0 !== a ? a : []).join("."), error: h, shouldThrow: null !== (o = null === (d = this._selector.node.metadata) || void 0 === d ? void 0 : d.throwOnFieldError) && void 0 !== o && o, handled: !1 });
                                    }
                                } catch (e) {
                                    n.e(e);
                                } finally {
                                    n.f();
                                }
                            }
                        }),
                        (r._markDataAsMissing = function (e) {
                            var r, i;
                            if (!this._isWithinUnmatchedTypeRefinement) {
                                null == this._errorResponseFields && (this._errorResponseFields = []);
                                var s = this._fragmentName;
                                if ((this._errorResponseFields.push(null !== (r = null === (i = this._selector.node.metadata) || void 0 === i ? void 0 : i.throwOnFieldError) && void 0 !== r && r ? { kind: "missing_expected_data.throw", owner: s, fieldPath: e, handled: !1 } : { kind: "missing_expected_data.log", owner: s, fieldPath: e }), (this._isMissingData = !0), this._clientEdgeTraversalPath.length)) {
                                    var t = this._clientEdgeTraversalPath[this._clientEdgeTraversalPath.length - 1];
                                    null !== t && this._missingClientEdges.push({ request: t.readerClientEdge.operation, clientEdgeDestinationID: t.clientEdgeDestinationID });
                                }
                            }
                        }),
                        (r._traverse = function (e, r, i) {
                            var s = this._recordSource.get(r);
                            if ((this._seenRecords.add(r), null == s)) return void 0 === s && this._markDataAsMissing("<record>"), s;
                            var t = i || {};
                            return this._traverseSelections(e.selections, s, t) ? t : null;
                        }),
                        (r._getVariableValue = function (e) {
                            return this._variables.hasOwnProperty(e) || P(!1), this._variables[e];
                        }),
                        (r._maybeReportUnexpectedNull = function (e) {
                            if ("NONE" !== e.action) {
                                var r,
                                    i,
                                    s,
                                    t = this._fragmentName;
                                if ((null == this._errorResponseFields && (this._errorResponseFields = []), null != e.field.linkedField)) r = null !== (i = e.field.linkedField.alias) && void 0 !== i ? i : e.field.linkedField.name;
                                else r = null !== (s = e.field.alias) && void 0 !== s ? s : e.field.name;
                                switch (e.action) {
                                    case "THROW":
                                        return void this._errorResponseFields.push({ kind: "missing_required_field.throw", fieldPath: r, owner: t, handled: !1 });
                                    case "LOG":
                                        return void this._errorResponseFields.push({ kind: "missing_required_field.log", fieldPath: r, owner: t });
                                    default:
                                        e.action;
                                }
                            }
                        }),
                        (r._handleRequiredFieldValue = function (e, r) {
                            return null != r || (this._maybeReportUnexpectedNull(e), !1);
                        }),
                        (r._catchErrors = function (e, r, i) {
                            var s = e;
                            switch (r) {
                                case "RESULT":
                                    s = this._asResult(e);
                                    break;
                                case "NULL":
                                    null != this._errorResponseFields && this._errorResponseFields.length > 0 && (s = null);
                            }
                            var t = this._errorResponseFields;
                            if (((this._errorResponseFields = i), null != t)) {
                                null == this._errorResponseFields && (this._errorResponseFields = []);
                                for (var n = 0; n < t.length; n++) this._errorResponseFields.push(M(t[n]));
                            }
                            return s;
                        }),
                        (r._asResult = function (e) {
                            return null == this._errorResponseFields || 0 === this._errorResponseFields.length
                                ? { ok: !0, value: e }
                                : {
                                      ok: !1,
                                      errors: this._errorResponseFields
                                          .map(function (e) {
                                              switch (e.kind) {
                                                  case "relay_field_payload.error":
                                                      var r = e.error;
                                                      r.message;
                                                      return (0, a.default)(r, d);
                                                  case "missing_expected_data.throw":
                                                  case "missing_expected_data.log":
                                                      return { path: e.fieldPath.split(".") };
                                                  case "relay_resolver.error":
                                                      return { message: "Relay: Error in resolver for field at ".concat(e.fieldPath, " in ").concat(e.owner) };
                                                  case "missing_required_field.throw":
                                                      return { message: "Relay: Missing @required value at path '".concat(e.fieldPath, "' in '").concat(e.owner, "'.") };
                                                  case "missing_required_field.log":
                                                      return null;
                                                  default:
                                                      e.kind, P(!1);
                                              }
                                          })
                                          .filter(Boolean),
                                  };
                        }),
                        (r._traverseSelections = function (e, r, i) {
                            for (var s = 0; s < e.length; s++) {
                                var t = e[s];
                                switch (t.kind) {
                                    case "RequiredField":
                                        var n = this._readClientSideDirectiveField(t, r, i);
                                        if (!this._handleRequiredFieldValue(t, n)) return !1;
                                        break;
                                    case "CatchField":
                                        var a,
                                            l,
                                            o,
                                            d = this._errorResponseFields;
                                        this._errorResponseFields = null;
                                        var h = this._readClientSideDirectiveField(t, r, i),
                                            u = null !== (a = null === (l = t.field) || void 0 === l ? void 0 : l.backingField) && void 0 !== a ? a : t.field,
                                            _ = null !== (o = null == u ? void 0 : u.alias) && void 0 !== o ? o : null == u ? void 0 : u.name;
                                        null == _ && P(!1), (i[_] = this._catchErrors(h, t.to, d));
                                        break;
                                    case "ScalarField":
                                        this._readScalar(t, r, i);
                                        break;
                                    case "LinkedField":
                                        t.plural ? this._readPluralLink(t, r, i) : this._readLink(t, r, i);
                                        break;
                                    case "Condition":
                                        if (Boolean(this._getVariableValue(t.condition)) === t.passingValue) if (!this._traverseSelections(t.selections, r, i)) return !1;
                                        break;
                                    case "InlineFragment":
                                        if (!1 === this._readInlineFragment(t, r, i, !1)) return !1;
                                        break;
                                    case "RelayLiveResolver":
                                    case "RelayResolver":
                                        this._useExecTimeResolvers ? this._readScalar(t, r, i) : this._readResolverField(t, r, i);
                                        break;
                                    case "FragmentSpread":
                                        this._createFragmentPointer(t, r, i);
                                        break;
                                    case "AliasedInlineFragmentSpread":
                                        this._readAliasedInlineFragment(t, r, i);
                                        break;
                                    case "ModuleImport":
                                        this._readModuleImport(t, r, i);
                                        break;
                                    case "InlineDataFragmentSpread":
                                        this._createInlineDataOrResolverFragmentPointer(t, r, i);
                                        break;
                                    case "Defer":
                                    case "ClientExtension":
                                        var c = this._isMissingData,
                                            v = this._missingClientEdges.length;
                                        this._clientEdgeTraversalPath.push(null);
                                        var g = this._traverseSelections(t.selections, r, i);
                                        if (((this._isMissingData = c || this._missingClientEdges.length > v || this._missingLiveResolverFields.length > 0), this._clientEdgeTraversalPath.pop(), !g)) return !1;
                                        break;
                                    case "Stream":
                                        if (!this._traverseSelections(t.selections, r, i)) return !1;
                                        break;
                                    case "ActorChange":
                                        this._readActorChange(t, r, i);
                                        break;
                                    case "ClientEdgeToClientObject":
                                    case "ClientEdgeToServerObject":
                                        if (!this._useExecTimeResolvers || ("RelayResolver" !== t.backingField.kind && "RelayLiveResolver" !== t.backingField.kind)) this._readClientEdge(t, r, i);
                                        else {
                                            var f = t.linkedField;
                                            f.plural ? this._readPluralLink(f, r, i) : this._readLink(f, r, i);
                                        }
                                        break;
                                    default:
                                        P(!1);
                                }
                            }
                            return !0;
                        }),
                        (r._readClientSideDirectiveField = function (e, r, i) {
                            switch (e.field.kind) {
                                case "ScalarField":
                                    return this._readScalar(e.field, r, i);
                                case "LinkedField":
                                    return e.field.plural ? this._readPluralLink(e.field, r, i) : this._readLink(e.field, r, i);
                                case "RelayResolver":
                                case "RelayLiveResolver":
                                    return this._readResolverField(e.field, r, i);
                                case "ClientEdgeToClientObject":
                                case "ClientEdgeToServerObject":
                                    return this._readClientEdge(e.field, r, i);
                                case "AliasedInlineFragmentSpread":
                                    return this._readAliasedInlineFragment(e.field, r, i);
                                default:
                                    e.field.kind, P(!1);
                            }
                        }),
                        (r._readResolverField = function (e, r, i) {
                            var s,
                                t = _.getDataID(r),
                                n = this._errorResponseFields;
                            this._errorResponseFields = null;
                            var a = this._readResolverFieldImpl(e, t),
                                l = null !== (s = e.alias) && void 0 !== s ? s : e.name;
                            return this._prependPreviousErrors(n, l), (i[l] = a), a;
                        }),
                        (r._readResolverFieldImpl = function (e, r) {
                            var i,
                                s = this,
                                t = e.fragment,
                                a = function (e) {
                                    return null != i ? { data: i.data, isMissingData: i.isMissingData, errorResponseFields: i.errorResponseFields } : { data: (i = I(s._recordSource, e, s._resolverCache)).data, isMissingData: i.isMissingData, errorResponseFields: i.errorResponseFields };
                                },
                                l = this._resolverCache.readFromCacheOrEvaluate(
                                    r,
                                    e,
                                    this._variables,
                                    function () {
                                        if (null != t) {
                                            var l = { __id: r, __fragmentOwner: s._owner, __fragments: (0, n.default)({}, t.name, t.args ? E(t.args, s._variables) : {}) };
                                            return T({ getDataForResolverFragment: a }, function () {
                                                var r = L(e, s._variables, l, s._resolverContext),
                                                    t = r[0],
                                                    n = r[1];
                                                return { resolverResult: t, snapshot: i, error: n };
                                            });
                                        }
                                        var o = L(e, s._variables, null, s._resolverContext);
                                        return { resolverResult: o[0], snapshot: void 0, error: o[1] };
                                    },
                                    a,
                                ),
                                o = l[0],
                                d = l[1],
                                h = l[2],
                                u = l[3],
                                _ = l[4],
                                c = l[5];
                            return this._propagateResolverMetadata(e.path, u, h, d, _, c), o;
                        }),
                        (r._propagateResolverMetadata = function (e, r, i, s, t, n) {
                            if (null != r) {
                                if (null != r.missingClientEdges) {
                                    var a,
                                        o = (0, l.default)(r.missingClientEdges);
                                    try {
                                        for (o.s(); !(a = o.n()).done; ) {
                                            var d = a.value;
                                            this._missingClientEdges.push(d);
                                        }
                                    } catch (e) {
                                        o.e(e);
                                    } finally {
                                        o.f();
                                    }
                                }
                                if (null != r.missingLiveResolverFields) {
                                    this._isMissingData = this._isMissingData || r.missingLiveResolverFields.length > 0;
                                    var h,
                                        u = (0, l.default)(r.missingLiveResolverFields);
                                    try {
                                        for (u.s(); !(h = u.n()).done; ) {
                                            var _ = h.value;
                                            this._missingLiveResolverFields.push(_);
                                        }
                                    } catch (e) {
                                        u.e(e);
                                    } finally {
                                        u.f();
                                    }
                                }
                                if (null != r.errorResponseFields) {
                                    null == this._errorResponseFields && (this._errorResponseFields = []);
                                    var c,
                                        v = (0, l.default)(r.errorResponseFields);
                                    try {
                                        for (v.s(); !(c = v.n()).done; ) {
                                            var g,
                                                f = c.value;
                                            !0 === (null === (g = this._selector.node.metadata) || void 0 === g ? void 0 : g.throwOnFieldError) ? this._errorResponseFields.push(f) : this._errorResponseFields.push(M(f));
                                        }
                                    } catch (e) {
                                        v.e(e);
                                    } finally {
                                        v.f();
                                    }
                                }
                                this._isMissingData = this._isMissingData || r.isMissingData;
                            }
                            if (i) {
                                var p,
                                    m,
                                    R = { kind: "relay_resolver.error", fieldPath: e, owner: this._fragmentName, error: i, shouldThrow: null !== (p = null === (m = this._selector.node.metadata) || void 0 === m ? void 0 : m.throwOnFieldError) && void 0 !== p && p, handled: !1 };
                                null == this._errorResponseFields ? (this._errorResponseFields = [R]) : this._errorResponseFields.push(R);
                            }
                            if ((null != s && this._seenRecords.add(s), null != t && ((this._isMissingData = !0), this._missingLiveResolverFields.push(t)), null != n)) {
                                var F,
                                    E = (0, l.default)(n);
                                try {
                                    for (E.s(); !(F = E.n()).done; ) {
                                        var k = F.value;
                                        this._updatedDataIDs.add(k);
                                    }
                                } catch (e) {
                                    E.e(e);
                                } finally {
                                    E.f();
                                }
                            }
                        }),
                        (r._readClientEdge = function (e, r, i) {
                            var s,
                                t = this,
                                n = e.backingField;
                            "ClientExtension" === n.kind && P(!1);
                            var a = null !== (s = n.alias) && void 0 !== s ? s : n.name,
                                l = {};
                            this._traverseSelections([n], r, l);
                            var o = l[a];
                            if (null == o || h(o)) return (i[a] = o), o;
                            if (e.linkedField.plural) {
                                var d;
                                Array.isArray(o) || P(!1),
                                    "ClientEdgeToClientObject" !== e.kind && P(!1),
                                    (d =
                                        null == e.backingField.normalizationInfo
                                            ? o.map(function (r) {
                                                  var i,
                                                      s = null !== (i = e.concreteType) && void 0 !== i ? i : r.__typename;
                                                  "string" != typeof s && P(!1);
                                                  var a = A(r, n.path, t._owner.identifier),
                                                      l = t._resolverCache.ensureClientRecord(a, s),
                                                      o = e.modelResolvers;
                                                  if (null != o) {
                                                      var d = o[s];
                                                      return void 0 === d && P(!1), null != t._readResolverFieldImpl(d, l) ? l : null;
                                                  }
                                                  return l;
                                              })
                                            : o.map(function (e) {
                                                  return A(e, n.path, t._owner.identifier);
                                              })),
                                    this._clientEdgeTraversalPath.push(null);
                                var u = this._readLinkedIds(e.linkedField, d, r, i);
                                return this._clientEdgeTraversalPath.pop(), (i[a] = u), u;
                            }
                            var _,
                                c,
                                v,
                                g = A(o, n.path, this._owner.identifier),
                                f = null !== (_ = e.concreteType) && void 0 !== _ ? _ : o.__typename;
                            "ClientEdgeToClientObject" === e.kind ? (null == e.backingField.normalizationInfo ? ("string" != typeof f && P(!1), (c = this._resolverCache.ensureClientRecord(g, f)), (v = null)) : ((c = g), (v = null))) : ((c = g), (v = { readerClientEdge: e, clientEdgeDestinationID: g }));
                            var p = e.modelResolvers;
                            if (null != p) {
                                "string" != typeof f && P(!1);
                                var m = p[f];
                                if ((void 0 === m && P(!1), null == this._readResolverFieldImpl(m, c))) return (i[a] = null), null;
                            }
                            this._clientEdgeTraversalPath.push(v);
                            var R = i[a];
                            null != R && "object" != typeof R && P(!1);
                            var F = this._errorResponseFields;
                            this._errorResponseFields = null;
                            var E = this._traverse(e.linkedField, c, R);
                            return this._prependPreviousErrors(F, a), this._clientEdgeTraversalPath.pop(), (i[a] = E), E;
                        }),
                        (r._readScalar = function (e, r, i) {
                            var s,
                                t = null !== (s = e.alias) && void 0 !== s ? s : e.name,
                                n = y(e, this._variables),
                                a = _.getValue(r, n);
                            return null === a ? this._maybeAddErrorResponseFields(r, n) : void 0 === a && this._markDataAsMissing(t), (i[t] = a), a;
                        }),
                        (r._readLink = function (e, r, i) {
                            var s,
                                t = null !== (s = e.alias) && void 0 !== s ? s : e.name,
                                n = y(e, this._variables),
                                a = _.getLinkedRecordID(r, n);
                            if (null == a) return (i[t] = a), null === a ? this._maybeAddErrorResponseFields(r, n) : void 0 === a && this._markDataAsMissing(t), a;
                            var l = i[t];
                            null != l && "object" != typeof l && P(!1);
                            var o = this._errorResponseFields;
                            this._errorResponseFields = null;
                            var d = this._traverse(e, a, l);
                            return this._prependPreviousErrors(o, t), (i[t] = d), d;
                        }),
                        (r._prependPreviousErrors = function (e, r) {
                            if (null != this._errorResponseFields) {
                                for (var i = 0; i < this._errorResponseFields.length; i++) {
                                    var s = this._errorResponseFields[i];
                                    s.owner !== this._fragmentName || ("missing_expected_data.throw" !== s.kind && "missing_expected_data.log" !== s.kind && "missing_required_field.throw" !== s.kind && "missing_required_field.log" !== s.kind) || (s.fieldPath = "".concat(r, ".").concat(s.fieldPath));
                                }
                                if (null != e) {
                                    for (var t = this._errorResponseFields.length - 1; t >= 0; t--) e.push(this._errorResponseFields[t]);
                                    this._errorResponseFields = e;
                                }
                            } else this._errorResponseFields = e;
                        }),
                        (r._readActorChange = function (e, r, i) {
                            var s,
                                t = null !== (s = e.alias) && void 0 !== s ? s : e.name,
                                n = y(e, this._variables),
                                a = _.getActorLinkedRecordID(r, n);
                            if (null == a) return (i[t] = a), void 0 === a ? this._markDataAsMissing(t) : null === a && this._maybeAddErrorResponseFields(r, n), i[t];
                            var l = a[0],
                                o = a[1],
                                d = {};
                            return this._createFragmentPointer(e.fragmentSpread, _.fromObject({ __id: o }), d), (i[t] = { __fragmentRef: d, __viewer: l }), i[t];
                        }),
                        (r._readPluralLink = function (e, r, i) {
                            var s = y(e, this._variables),
                                t = _.getLinkedRecordIDs(r, s);
                            return null === t && this._maybeAddErrorResponseFields(r, s), this._readLinkedIds(e, t, r, i);
                        }),
                        (r._readLinkedIds = function (e, r, i, s) {
                            var t,
                                n = this,
                                a = null !== (t = e.alias) && void 0 !== t ? t : e.name;
                            if (null == r) return (s[a] = r), void 0 === r && this._markDataAsMissing(a), r;
                            var l = s[a];
                            null == l || Array.isArray(l) || P(!1);
                            var o = this._errorResponseFields;
                            this._errorResponseFields = null;
                            var d = l || [];
                            return (
                                r.forEach(function (r, i) {
                                    if (null == r) return void 0 === r && n._markDataAsMissing(String(i)), void (d[i] = r);
                                    var s = d[i];
                                    null != s && "object" != typeof s && P(!1);
                                    var t = n._errorResponseFields;
                                    (n._errorResponseFields = null), (d[i] = n._traverse(e, r, s)), n._prependPreviousErrors(t, i);
                                }),
                                this._prependPreviousErrors(o, a),
                                (s[a] = d),
                                d
                            );
                        }),
                        (r._readModuleImport = function (e, r, i) {
                            var s,
                                t = k(e.documentName),
                                n = null !== (s = e.componentModuleProvider) && void 0 !== s ? s : _.getValue(r, t);
                            null != n ? (this._createFragmentPointer({ kind: "FragmentSpread", name: e.fragmentName, args: e.args }, r, i), (i[f] = e.fragmentPropName), (i[R] = n)) : void 0 === n && this._markDataAsMissing("<module-import>");
                        }),
                        (r._readAliasedInlineFragment = function (e, r, i) {
                            var s = this._errorResponseFields;
                            this._errorResponseFields = null;
                            var t = this._readInlineFragment(e.fragment, r, {}, !0);
                            this._prependPreviousErrors(s, e.name), !1 === t && (t = null), (i[e.name] = t);
                        }),
                        (r._readInlineFragment = function (e, r, i, s) {
                            if (null == e.type) return !1 !== this._traverseSelections(e.selections, r, i) && i;
                            var t = e.abstractKey;
                            if (null == t) {
                                if (!this._recordMatchesTypeCondition(r, e.type)) return null;
                                if (!this._traverseSelections(e.selections, r, i)) return !1;
                            } else {
                                var n = this._implementsInterface(r, t);
                                if (!1 === n && s) return null;
                                var a = this._isMissingData,
                                    l = this._isWithinUnmatchedTypeRefinement;
                                this._isWithinUnmatchedTypeRefinement = l || !1 === n;
                                var o = this._traverseSelections(e.selections, r, i);
                                if (((this._isWithinUnmatchedTypeRefinement = l), !1 === n)) return (this._isMissingData = a), null;
                                if (null == n) return;
                                if (!1 === o) return !1;
                            }
                            return i;
                        }),
                        (r._recordMatchesTypeCondition = function (e, r) {
                            var i = _.getType(e);
                            return (null != i && i === r) || _.getDataID(e) === F;
                        }),
                        (r._createFragmentPointer = function (e, r, i) {
                            var s = i[p];
                            null == s && (s = i[p] = {}), ("object" != typeof s || null == s) && P(!1), null == i[m] && (i[m] = _.getDataID(r)), (s[e.name] = E(e.args, this._variables, this._isWithinUnmatchedTypeRefinement)), (i[g] = this._owner), this._clientEdgeTraversalPath.length > 0 && null !== this._clientEdgeTraversalPath[this._clientEdgeTraversalPath.length - 1] && (i[v] = (0, o.default)(this._clientEdgeTraversalPath));
                        }),
                        (r._createInlineDataOrResolverFragmentPointer = function (e, r, i) {
                            var s = i[p];
                            null == s && (s = i[p] = {}), ("object" != typeof s || null == s) && P(!1), null == i[m] && (i[m] = _.getDataID(r));
                            var t = {},
                                n = this._fragmentName;
                            this._fragmentName = e.name;
                            var a = this._variables,
                                l = e.args ? E(e.args, this._variables) : {};
                            (this._variables = u.getFragmentVariables(e, this._owner.variables, l)), this._traverseSelections(e.selections, r, t), (this._variables = a), (this._fragmentName = n), (s[e.name] = t);
                        }),
                        (r._implementsInterface = function (e, r) {
                            var i = _.getType(e),
                                s = this._recordSource.get(w(i)),
                                t = null != s ? _.getValue(s, r) : null;
                            return null == t && this._markDataAsMissing("<abstract-type-hint>"), t;
                        }),
                        e
                    );
                })();
                function M(e) {
                    switch (e.kind) {
                        case "missing_expected_data.throw":
                        case "missing_required_field.throw":
                        case "relay_field_payload.error":
                        case "relay_resolver.error":
                            return (0, t.default)((0, t.default)({}, e), {}, { handled: !0 });
                        case "missing_expected_data.log":
                        case "missing_required_field.log":
                            return e;
                        default:
                            e.kind, P(!1);
                    }
                }
                function L(e, r, i, s) {
                    var t = "function" == typeof e.resolverModule ? e.resolverModule : e.resolverModule.default,
                        n = null,
                        a = null;
                    try {
                        var l = [];
                        null != e.fragment && l.push(i);
                        var o = e.args ? E(e.args, r) : void 0;
                        l.push(o), l.push(s), (n = t.apply(null, l));
                    } catch (e) {
                        (n = null), e !== C && (a = e);
                    }
                    return [n, a];
                }
                function A(e, r, i) {
                    return "string" == typeof e ? e : "object" == typeof e && null != e && "string" == typeof e.id ? e.id : void P(!1);
                }
                e.exports = { read: I };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-744bed60.79286f6a.js.map
