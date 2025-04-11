window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-91c40cd8"],
        {
            506899: (e, t, n) => {
                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                function i(e, t, n) {
                    return t && r(e.prototype, t), n && r(e, n), e;
                }
                function o() {
                    return (
                        (o =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        o.apply(this, arguments)
                    );
                }
                function u(e, t) {
                    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), (e.__proto__ = t);
                }
                function a(e) {
                    return !(!e || "function" != typeof e.hasOwnProperty || !(e.hasOwnProperty("__ownerID") || (e._map && e._map.hasOwnProperty("__ownerID"))));
                }
                function c(e, t, n) {
                    return Object.keys(e).reduce(function (t, r) {
                        var i = "" + r;
                        return t.has(i) ? t.set(i, n(t.get(i), e[i])) : t;
                    }, t);
                }
                n.d(t, { Fv: () => k, cY: () => A, fK: () => _ });
                var f = (function () {
                        function e(e, t, n) {
                            if ((void 0 === t && (t = {}), void 0 === n && (n = {}), !e || "string" != typeof e)) throw new Error("Expected a string key for Entity, but found " + e + ".");
                            var r = n,
                                i = r.idAttribute,
                                u = void 0 === i ? "id" : i,
                                c = r.mergeStrategy,
                                f =
                                    void 0 === c
                                        ? function (e, t) {
                                              return o({}, e, t);
                                          }
                                        : c,
                                s = r.processStrategy,
                                h =
                                    void 0 === s
                                        ? function (e) {
                                              return o({}, e);
                                          }
                                        : s,
                                l = r.fallbackStrategy,
                                p = void 0 === l ? function (e, t) {} : l;
                            (this._key = e),
                                (this._getId =
                                    "function" == typeof u
                                        ? u
                                        : (function (e) {
                                              return function (t) {
                                                  return a(t) ? t.get(e) : t[e];
                                              };
                                          })(u)),
                                (this._idAttribute = u),
                                (this._mergeStrategy = f),
                                (this._processStrategy = h),
                                (this._fallbackStrategy = p),
                                this.define(t);
                        }
                        var t = e.prototype;
                        return (
                            (t.define = function (e) {
                                this.schema = Object.keys(e).reduce(function (t, n) {
                                    var r,
                                        i = e[n];
                                    return o({}, t, (((r = {})[n] = i), r));
                                }, this.schema || {});
                            }),
                            (t.getId = function (e, t, n) {
                                return this._getId(e, t, n);
                            }),
                            (t.merge = function (e, t) {
                                return this._mergeStrategy(e, t);
                            }),
                            (t.fallback = function (e, t) {
                                return this._fallbackStrategy(e, t);
                            }),
                            (t.normalize = function (e, t, n, r, i, o) {
                                var u = this,
                                    a = this.getId(e, t, n),
                                    c = this.key;
                                if (
                                    (c in o || (o[c] = {}),
                                    a in o[c] || (o[c][a] = []),
                                    o[c][a].some(function (t) {
                                        return t === e;
                                    }))
                                )
                                    return a;
                                o[c][a].push(e);
                                var f = this._processStrategy(e, t, n);
                                return (
                                    Object.keys(this.schema).forEach(function (t) {
                                        if (f.hasOwnProperty(t) && "object" == typeof f[t]) {
                                            var n = u.schema[t],
                                                a = "function" == typeof n ? n(e) : n;
                                            f[t] = r(f[t], f, t, a, i, o);
                                        }
                                    }),
                                    i(this, f, e, t, n),
                                    a
                                );
                            }),
                            (t.denormalize = function (e, t) {
                                var n = this;
                                return a(e)
                                    ? c(this.schema, e, t)
                                    : (Object.keys(this.schema).forEach(function (r) {
                                          if (e.hasOwnProperty(r)) {
                                              var i = n.schema[r];
                                              e[r] = t(e[r], i);
                                          }
                                      }),
                                      e);
                            }),
                            i(e, [
                                {
                                    key: "key",
                                    get: function () {
                                        return this._key;
                                    },
                                },
                                {
                                    key: "idAttribute",
                                    get: function () {
                                        return this._idAttribute;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    s = (function () {
                        function e(e, t) {
                            t &&
                                (this._schemaAttribute =
                                    "string" == typeof t
                                        ? function (e) {
                                              return e[t];
                                          }
                                        : t),
                                this.define(e);
                        }
                        var t = e.prototype;
                        return (
                            (t.define = function (e) {
                                this.schema = e;
                            }),
                            (t.getSchemaAttribute = function (e, t, n) {
                                return !this.isSingleSchema && this._schemaAttribute(e, t, n);
                            }),
                            (t.inferSchema = function (e, t, n) {
                                if (this.isSingleSchema) return this.schema;
                                var r = this.getSchemaAttribute(e, t, n);
                                return this.schema[r];
                            }),
                            (t.normalizeValue = function (e, t, n, r, i, o) {
                                var u = this.inferSchema(e, t, n);
                                if (!u) return e;
                                var a = r(e, t, n, u, i, o);
                                return this.isSingleSchema || null == a ? a : { id: a, schema: this.getSchemaAttribute(e, t, n) };
                            }),
                            (t.denormalizeValue = function (e, t) {
                                var n = a(e) ? e.get("schema") : e.schema;
                                return this.isSingleSchema || n ? t((this.isSingleSchema ? void 0 : a(e) ? e.get("id") : e.id) || e, this.isSingleSchema ? this.schema : this.schema[n]) : e;
                            }),
                            i(e, [
                                {
                                    key: "isSingleSchema",
                                    get: function () {
                                        return !this._schemaAttribute;
                                    },
                                },
                            ]),
                            e
                        );
                    })(),
                    h = (function (e) {
                        function t(t, n) {
                            if (!n) throw new Error('Expected option "schemaAttribute" not found on UnionSchema.');
                            return e.call(this, t, n) || this;
                        }
                        u(t, e);
                        var n = t.prototype;
                        return (
                            (n.normalize = function (e, t, n, r, i, o) {
                                return this.normalizeValue(e, t, n, r, i, o);
                            }),
                            (n.denormalize = function (e, t) {
                                return this.denormalizeValue(e, t);
                            }),
                            t
                        );
                    })(s),
                    l = (function (e) {
                        function t() {
                            return e.apply(this, arguments) || this;
                        }
                        u(t, e);
                        var n = t.prototype;
                        return (
                            (n.normalize = function (e, t, n, r, i, u) {
                                var a = this;
                                return Object.keys(e).reduce(function (t, n, c) {
                                    var f,
                                        s = e[n];
                                    return null != s ? o({}, t, (((f = {})[n] = a.normalizeValue(s, e, n, r, i, u)), f)) : t;
                                }, {});
                            }),
                            (n.denormalize = function (e, t) {
                                var n = this;
                                return Object.keys(e).reduce(function (r, i) {
                                    var u,
                                        a = e[i];
                                    return o({}, r, (((u = {})[i] = n.denormalizeValue(a, t)), u));
                                }, {});
                            }),
                            t
                        );
                    })(s),
                    p = function (e) {
                        if (Array.isArray(e) && e.length > 1) throw new Error("Expected schema definition to be a single schema, but found " + e.length + ".");
                        return e[0];
                    },
                    y = function (e) {
                        return Array.isArray(e)
                            ? e
                            : Object.keys(e).map(function (t) {
                                  return e[t];
                              });
                    },
                    m = function (e, t, n, r, i, o, u) {
                        return (
                            (e = p(e)),
                            y(t).map(function (t, a) {
                                return i(t, n, r, e, o, u);
                            })
                        );
                    },
                    d = function (e, t, n) {
                        return (
                            (e = p(e)),
                            t && t.map
                                ? t.map(function (t) {
                                      return n(t, e);
                                  })
                                : t
                        );
                    },
                    v = (function (e) {
                        function t() {
                            return e.apply(this, arguments) || this;
                        }
                        u(t, e);
                        var n = t.prototype;
                        return (
                            (n.normalize = function (e, t, n, r, i, o) {
                                var u = this;
                                return y(e)
                                    .map(function (e, a) {
                                        return u.normalizeValue(e, t, n, r, i, o);
                                    })
                                    .filter(function (e) {
                                        return null != e;
                                    });
                            }),
                            (n.denormalize = function (e, t) {
                                var n = this;
                                return e && e.map
                                    ? e.map(function (e) {
                                          return n.denormalizeValue(e, t);
                                      })
                                    : e;
                            }),
                            t
                        );
                    })(s),
                    b = function (e, t, n, r, i, u, a) {
                        var c = o({}, t);
                        return (
                            Object.keys(e).forEach(function (n) {
                                var r = e[n],
                                    o = "function" == typeof r ? r(t) : r,
                                    f = i(t[n], t, n, o, u, a);
                                null == f ? delete c[n] : (c[n] = f);
                            }),
                            c
                        );
                    },
                    g = function (e, t, n) {
                        if (a(t)) return c(e, t, n);
                        var r = o({}, t);
                        return (
                            Object.keys(e).forEach(function (t) {
                                null != r[t] && (r[t] = n(r[t], e[t]));
                            }),
                            r
                        );
                    },
                    j = (function () {
                        function e(e) {
                            this.define(e);
                        }
                        var t = e.prototype;
                        return (
                            (t.define = function (e) {
                                this.schema = Object.keys(e).reduce(function (t, n) {
                                    var r,
                                        i = e[n];
                                    return o({}, t, (((r = {})[n] = i), r));
                                }, this.schema || {});
                            }),
                            (t.normalize = function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return b.apply(void 0, [this.schema].concat(t));
                            }),
                            (t.denormalize = function () {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                return g.apply(void 0, [this.schema].concat(t));
                            }),
                            e
                        );
                    })(),
                    O = function e(t, n, r, i, o, u) {
                        return "object" == typeof t && t ? ("object" != typeof i || (i.normalize && "function" == typeof i.normalize) ? i.normalize(t, n, r, e, o, u) : (Array.isArray(i) ? m : b)(i, t, n, r, e, o, u)) : t;
                    },
                    _ = { Array: v, Entity: f, Object: j, Union: h, Values: l },
                    k = function (e, t) {
                        if (!e || "object" != typeof e) throw new Error('Unexpected input given to normalize. Expected type to be "object", found "' + (null === e ? "null" : typeof e) + '".');
                        var n = {},
                            r = (function (e) {
                                return function (t, n, r, i, o) {
                                    var u = t.key,
                                        a = t.getId(r, i, o);
                                    u in e || (e[u] = {});
                                    var c = e[u][a];
                                    e[u][a] = c ? t.merge(c, n) : n;
                                };
                            })(n);
                        return { entities: n, result: O(e, e, null, t, r, {}) };
                    },
                    w = function (e) {
                        var t = {},
                            n = S(e);
                        return function e(r, i) {
                            return "object" != typeof i || (i.denormalize && "function" == typeof i.denormalize)
                                ? null == r
                                    ? r
                                    : i instanceof f
                                      ? (function (e, t, n, r, i) {
                                            var u = r(e, t);
                                            if ((void 0 === u && t instanceof f && (u = t.fallback(e, t)), "object" != typeof u || null === u)) return u;
                                            if ((i[t.key] || (i[t.key] = {}), !i[t.key][e])) {
                                                var c = a(u) ? u : o({}, u);
                                                (i[t.key][e] = c), (i[t.key][e] = t.denormalize(c, n));
                                            }
                                            return i[t.key][e];
                                        })(r, i, e, n, t)
                                      : i.denormalize(r, e)
                                : (Array.isArray(i) ? d : g)(i, r, e);
                        };
                    },
                    S = function (e) {
                        var t = a(e);
                        return function (n, r) {
                            var i = r.key;
                            return "object" == typeof n ? n : t ? e.getIn([i, n.toString()]) : e[i] && e[i][n];
                        };
                    },
                    A = function (e, t, n) {
                        if (void 0 !== e) return w(n)(e, t);
                    };
            },
            537320: (e) => {
                /*
object-assign
(c) Sindre Sorhus
@license MIT
*/
                var t = Object.getOwnPropertySymbols,
                    n = Object.prototype.hasOwnProperty,
                    r = Object.prototype.propertyIsEnumerable;
                e.exports = (function () {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0])) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if (
                            "0123456789" !==
                            Object.getOwnPropertyNames(t)
                                .map(function (e) {
                                    return t[e];
                                })
                                .join("")
                        )
                            return !1;
                        var r = {};
                        return (
                            "abcdefghijklmnopqrst".split("").forEach(function (e) {
                                r[e] = e;
                            }),
                            "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                        );
                    } catch (e) {
                        return !1;
                    }
                })()
                    ? Object.assign
                    : function (e, i) {
                          for (
                              var o,
                                  u,
                                  a = (function (e) {
                                      if (null == e) throw new TypeError("Object.assign cannot be called with null or undefined");
                                      return Object(e);
                                  })(e),
                                  c = 1;
                              c < arguments.length;
                              c++
                          ) {
                              for (var f in (o = Object(arguments[c]))) n.call(o, f) && (a[f] = o[f]);
                              if (t) {
                                  u = t(o);
                                  for (var s = 0; s < u.length; s++) r.call(o, u[s]) && (a[u[s]] = o[u[s]]);
                              }
                          }
                          return a;
                      };
            },
            192808: (e) => {
                function t(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t);
                }
                e.exports = function (e, n, r, i) {
                    (n = n || "&"), (r = r || "=");
                    var o = {};
                    if ("string" != typeof e || 0 === e.length) return o;
                    var u = /\+/g;
                    e = e.split(n);
                    var a = 1e3;
                    i && "number" == typeof i.maxKeys && (a = i.maxKeys);
                    var c = e.length;
                    a > 0 && c > a && (c = a);
                    for (var f = 0; f < c; ++f) {
                        var s,
                            h,
                            l,
                            p,
                            y = e[f].replace(u, "%20"),
                            m = y.indexOf(r);
                        m >= 0 ? ((s = y.substr(0, m)), (h = y.substr(m + 1))) : ((s = y), (h = "")), (l = decodeURIComponent(s)), (p = decodeURIComponent(h)), t(o, l) ? (Array.isArray(o[l]) ? o[l].push(p) : (o[l] = [o[l], p])) : (o[l] = p);
                    }
                    return o;
                };
            },
            31368: (e) => {
                var t = function (e) {
                    switch (typeof e) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return "";
                    }
                };
                e.exports = function (e, n, r, i) {
                    return (
                        (n = n || "&"),
                        (r = r || "="),
                        null === e && (e = void 0),
                        "object" == typeof e
                            ? Object.keys(e)
                                  .map(function (i) {
                                      var o = encodeURIComponent(t(i)) + r;
                                      return Array.isArray(e[i])
                                          ? e[i]
                                                .map(function (e) {
                                                    return o + encodeURIComponent(t(e));
                                                })
                                                .join(n)
                                          : o + encodeURIComponent(t(e[i]));
                                  })
                                  .join(n)
                            : i
                              ? encodeURIComponent(t(i)) + r + encodeURIComponent(t(e))
                              : ""
                    );
                };
            },
            856642: (e, t, n) => {
                (t.decode = t.parse = n(192808)), (t.encode = t.stringify = n(31368));
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-91c40cd8.e33ef86a.js.map
