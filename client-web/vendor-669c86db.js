window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-669c86db"],
        {
            272175: (e, t, n) => {
                n.d(t, { B6: () => q, ql: () => Q });
                var r = n(202784),
                    o = n(213980),
                    i = n.n(o),
                    a = n(578435),
                    s = n.n(a),
                    c = n(647677),
                    l = n.n(c),
                    u = n(588665),
                    p = n.n(u);
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = arguments[t];
                                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                                }
                                return e;
                            }),
                        f.apply(this, arguments)
                    );
                }
                function d(e, t) {
                    (e.prototype = Object.create(t.prototype)), (e.prototype.constructor = e), h(e, t);
                }
                function h(e, t) {
                    return (
                        (h =
                            Object.setPrototypeOf ||
                            function (e, t) {
                                return (e.__proto__ = t), e;
                            }),
                        h(e, t)
                    );
                }
                function m(e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) t.indexOf((n = i[r])) >= 0 || (o[n] = e[n]);
                    return o;
                }
                var y = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" },
                    g = { rel: ["amphtml", "canonical", "alternate"] },
                    b = { type: ["application/ld+json"] },
                    T = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] },
                    v = Object.keys(y).map(function (e) {
                        return y[e];
                    }),
                    S = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" },
                    A = Object.keys(S).reduce(function (e, t) {
                        return (e[S[t]] = t), e;
                    }, {}),
                    C = function (e, t) {
                        for (var n = e.length - 1; n >= 0; n -= 1) {
                            var r = e[n];
                            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
                        }
                        return null;
                    },
                    O = function (e) {
                        var t = C(e, y.TITLE),
                            n = C(e, "titleTemplate");
                        if ((Array.isArray(t) && (t = t.join("")), n && t))
                            return n.replace(/%s/g, function () {
                                return t;
                            });
                        var r = C(e, "defaultTitle");
                        return t || r || void 0;
                    },
                    E = function (e) {
                        return C(e, "onChangeClientState") || function () {};
                    },
                    x = function (e, t) {
                        return t
                            .filter(function (t) {
                                return void 0 !== t[e];
                            })
                            .map(function (t) {
                                return t[e];
                            })
                            .reduce(function (e, t) {
                                return f({}, e, t);
                            }, {});
                    },
                    N = function (e, t) {
                        return t
                            .filter(function (e) {
                                return void 0 !== e[y.BASE];
                            })
                            .map(function (e) {
                                return e[y.BASE];
                            })
                            .reverse()
                            .reduce(function (t, n) {
                                if (!t.length)
                                    for (var r = Object.keys(n), o = 0; o < r.length; o += 1) {
                                        var i = r[o].toLowerCase();
                                        if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                                    }
                                return t;
                            }, []);
                    },
                    w = function (e, t, n) {
                        var r = {};
                        return n
                            .filter(function (t) {
                                return !!Array.isArray(t[e]) || (void 0 !== t[e] && console && console.warn, !1);
                            })
                            .map(function (t) {
                                return t[e];
                            })
                            .reverse()
                            .reduce(function (e, n) {
                                var o = {};
                                n.filter(function (e) {
                                    for (var n, i = Object.keys(e), a = 0; a < i.length; a += 1) {
                                        var s = i[a],
                                            c = s.toLowerCase();
                                        -1 === t.indexOf(c) || ("rel" === n && "canonical" === e[n].toLowerCase()) || ("rel" === c && "stylesheet" === e[c].toLowerCase()) || (n = c), -1 === t.indexOf(s) || ("innerHTML" !== s && "cssText" !== s && "itemprop" !== s) || (n = s);
                                    }
                                    if (!n || !e[n]) return !1;
                                    var l = e[n].toLowerCase();
                                    return r[n] || (r[n] = {}), o[n] || (o[n] = {}), !r[n][l] && ((o[n][l] = !0), !0);
                                })
                                    .reverse()
                                    .forEach(function (t) {
                                        return e.push(t);
                                    });
                                for (var i = Object.keys(o), a = 0; a < i.length; a += 1) {
                                    var s = i[a],
                                        c = f({}, r[s], o[s]);
                                    r[s] = c;
                                }
                                return e;
                            }, [])
                            .reverse();
                    },
                    I = function (e, t) {
                        if (Array.isArray(e) && e.length) for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
                        return !1;
                    },
                    j = function (e) {
                        return Array.isArray(e) ? e.join("") : e;
                    },
                    k = function (e, t) {
                        return Array.isArray(e)
                            ? e.reduce(
                                  function (e, n) {
                                      return (
                                          (function (e, t) {
                                              for (var n = Object.keys(e), r = 0; r < n.length; r += 1) if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                                              return !1;
                                          })(n, t)
                                              ? e.priority.push(n)
                                              : e.default.push(n),
                                          e
                                      );
                                  },
                                  { priority: [], default: [] },
                              )
                            : { default: e };
                    },
                    L = function (e, t) {
                        var n;
                        return f({}, e, (((n = {})[t] = void 0), n));
                    },
                    P = [y.NOSCRIPT, y.SCRIPT, y.STYLE],
                    $ = function (e, t) {
                        return void 0 === t && (t = !0), !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
                    },
                    M = function (e) {
                        return Object.keys(e).reduce(function (t, n) {
                            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
                            return t ? t + " " + r : r;
                        }, "");
                    },
                    _ = function (e, t) {
                        return (
                            void 0 === t && (t = {}),
                            Object.keys(e).reduce(function (t, n) {
                                return (t[S[n] || n] = e[n]), t;
                            }, t)
                        );
                    },
                    R = function (e, t) {
                        return t.map(function (t, n) {
                            var o,
                                i = (((o = { key: n })["data-rh"] = !0), o);
                            return (
                                Object.keys(t).forEach(function (e) {
                                    var n = S[e] || e;
                                    "innerHTML" === n || "cssText" === n ? (i.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText }) : (i[n] = t[e]);
                                }),
                                r.createElement(e, i)
                            );
                        });
                    },
                    D = function (e, t, n) {
                        switch (e) {
                            case y.TITLE:
                                return {
                                    toComponent: function () {
                                        return (n = t.titleAttributes), ((o = { key: (e = t.title) })["data-rh"] = !0), (i = _(n, o)), [r.createElement(y.TITLE, i, e)];
                                        var e, n, o, i;
                                    },
                                    toString: function () {
                                        return (function (e, t, n, r) {
                                            var o = M(n),
                                                i = j(t);
                                            return o ? "<" + e + ' data-rh="true" ' + o + ">" + $(i, r) + "</" + e + ">" : "<" + e + ' data-rh="true">' + $(i, r) + "</" + e + ">";
                                        })(e, t.title, t.titleAttributes, n);
                                    },
                                };
                            case "bodyAttributes":
                            case "htmlAttributes":
                                return {
                                    toComponent: function () {
                                        return _(t);
                                    },
                                    toString: function () {
                                        return M(t);
                                    },
                                };
                            default:
                                return {
                                    toComponent: function () {
                                        return R(e, t);
                                    },
                                    toString: function () {
                                        return (function (e, t, n) {
                                            return t.reduce(function (t, r) {
                                                var o = Object.keys(r)
                                                        .filter(function (e) {
                                                            return !("innerHTML" === e || "cssText" === e);
                                                        })
                                                        .reduce(function (e, t) {
                                                            var o = void 0 === r[t] ? t : t + '="' + $(r[t], n) + '"';
                                                            return e ? e + " " + o : o;
                                                        }, ""),
                                                    i = r.innerHTML || r.cssText || "",
                                                    a = -1 === P.indexOf(e);
                                                return t + "<" + e + ' data-rh="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">");
                                            }, "");
                                        })(e, t, n);
                                    },
                                };
                        }
                    },
                    H = function (e) {
                        var t = e.baseTag,
                            n = e.bodyAttributes,
                            r = e.encode,
                            o = e.htmlAttributes,
                            i = e.noscriptTags,
                            a = e.styleTags,
                            s = e.title,
                            c = void 0 === s ? "" : s,
                            l = e.titleAttributes,
                            u = e.linkTags,
                            p = e.metaTags,
                            f = e.scriptTags,
                            d = {
                                toComponent: function () {},
                                toString: function () {
                                    return "";
                                },
                            };
                        if (e.prioritizeSeoTags) {
                            var h = (function (e) {
                                var t = e.linkTags,
                                    n = e.scriptTags,
                                    r = e.encode,
                                    o = k(e.metaTags, T),
                                    i = k(t, g),
                                    a = k(n, b);
                                return {
                                    priorityMethods: {
                                        toComponent: function () {
                                            return [].concat(R(y.META, o.priority), R(y.LINK, i.priority), R(y.SCRIPT, a.priority));
                                        },
                                        toString: function () {
                                            return D(y.META, o.priority, r) + " " + D(y.LINK, i.priority, r) + " " + D(y.SCRIPT, a.priority, r);
                                        },
                                    },
                                    metaTags: o.default,
                                    linkTags: i.default,
                                    scriptTags: a.default,
                                };
                            })(e);
                            (d = h.priorityMethods), (u = h.linkTags), (p = h.metaTags), (f = h.scriptTags);
                        }
                        return { priority: d, base: D(y.BASE, t, r), bodyAttributes: D("bodyAttributes", n, r), htmlAttributes: D("htmlAttributes", o, r), link: D(y.LINK, u, r), meta: D(y.META, p, r), noscript: D(y.NOSCRIPT, i, r), script: D(y.SCRIPT, f, r), style: D(y.STYLE, a, r), title: D(y.TITLE, { title: c, titleAttributes: l }, r) };
                    },
                    U = [],
                    K = function (e, t) {
                        var n = this;
                        void 0 === t && (t = "undefined" != typeof document),
                            (this.instances = []),
                            (this.value = {
                                setHelmet: function (e) {
                                    n.context.helmet = e;
                                },
                                helmetInstances: {
                                    get: function () {
                                        return n.canUseDOM ? U : n.instances;
                                    },
                                    add: function (e) {
                                        (n.canUseDOM ? U : n.instances).push(e);
                                    },
                                    remove: function (e) {
                                        var t = (n.canUseDOM ? U : n.instances).indexOf(e);
                                        (n.canUseDOM ? U : n.instances).splice(t, 1);
                                    },
                                },
                            }),
                            (this.context = e),
                            (this.canUseDOM = t),
                            t || (e.helmet = H({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
                    },
                    V = r.createContext({}),
                    B = i().shape({ setHelmet: i().func, helmetInstances: i().shape({ get: i().func, add: i().func, remove: i().func }) }),
                    F = "undefined" != typeof document,
                    q = (function (e) {
                        function t(n) {
                            var r;
                            return ((r = e.call(this, n) || this).helmetData = new K(r.props.context, t.canUseDOM)), r;
                        }
                        return (
                            d(t, e),
                            (t.prototype.render = function () {
                                return r.createElement(V.Provider, { value: this.helmetData.value }, this.props.children);
                            }),
                            t
                        );
                    })(r.Component);
                (q.canUseDOM = F), (q.propTypes = { context: i().shape({ helmet: i().shape() }), children: i().node.isRequired }), (q.defaultProps = { context: {} }), (q.displayName = "HelmetProvider");
                var z = function (e, t) {
                        var n,
                            r = document.head || document.querySelector(y.HEAD),
                            o = r.querySelectorAll(e + "[data-rh]"),
                            i = [].slice.call(o),
                            a = [];
                        return (
                            t &&
                                t.length &&
                                t.forEach(function (t) {
                                    var r = document.createElement(e);
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && ("innerHTML" === o ? (r.innerHTML = t.innerHTML) : "cssText" === o ? (r.styleSheet ? (r.styleSheet.cssText = t.cssText) : r.appendChild(document.createTextNode(t.cssText))) : r.setAttribute(o, void 0 === t[o] ? "" : t[o]));
                                    r.setAttribute("data-rh", "true"),
                                        i.some(function (e, t) {
                                            return (n = t), r.isEqualNode(e);
                                        })
                                            ? i.splice(n, 1)
                                            : a.push(r);
                                }),
                            i.forEach(function (e) {
                                return e.parentNode.removeChild(e);
                            }),
                            a.forEach(function (e) {
                                return r.appendChild(e);
                            }),
                            { oldTags: i, newTags: a }
                        );
                    },
                    Y = function (e, t) {
                        var n = document.getElementsByTagName(e)[0];
                        if (n) {
                            for (var r = n.getAttribute("data-rh"), o = r ? r.split(",") : [], i = [].concat(o), a = Object.keys(t), s = 0; s < a.length; s += 1) {
                                var c = a[s],
                                    l = t[c] || "";
                                n.getAttribute(c) !== l && n.setAttribute(c, l), -1 === o.indexOf(c) && o.push(c);
                                var u = i.indexOf(c);
                                -1 !== u && i.splice(u, 1);
                            }
                            for (var p = i.length - 1; p >= 0; p -= 1) n.removeAttribute(i[p]);
                            o.length === i.length ? n.removeAttribute("data-rh") : n.getAttribute("data-rh") !== a.join(",") && n.setAttribute("data-rh", a.join(","));
                        }
                    },
                    G = function (e, t) {
                        var n = e.baseTag,
                            r = e.htmlAttributes,
                            o = e.linkTags,
                            i = e.metaTags,
                            a = e.noscriptTags,
                            s = e.onChangeClientState,
                            c = e.scriptTags,
                            l = e.styleTags,
                            u = e.title,
                            p = e.titleAttributes;
                        Y(y.BODY, e.bodyAttributes),
                            Y(y.HTML, r),
                            (function (e, t) {
                                void 0 !== e && document.title !== e && (document.title = j(e)), Y(y.TITLE, t);
                            })(u, p);
                        var f = { baseTag: z(y.BASE, n), linkTags: z(y.LINK, o), metaTags: z(y.META, i), noscriptTags: z(y.NOSCRIPT, a), scriptTags: z(y.SCRIPT, c), styleTags: z(y.STYLE, l) },
                            d = {},
                            h = {};
                        Object.keys(f).forEach(function (e) {
                            var t = f[e],
                                n = t.newTags,
                                r = t.oldTags;
                            n.length && (d[e] = n), r.length && (h[e] = f[e].oldTags);
                        }),
                            t && t(),
                            s(e, d, h);
                    },
                    J = null,
                    W = (function (e) {
                        function t() {
                            for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++) r[o] = arguments[o];
                            return ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t;
                        }
                        d(t, e);
                        var n = t.prototype;
                        return (
                            (n.shouldComponentUpdate = function (e) {
                                return !p()(e, this.props);
                            }),
                            (n.componentDidUpdate = function () {
                                this.emitChange();
                            }),
                            (n.componentWillUnmount = function () {
                                this.props.context.helmetInstances.remove(this), this.emitChange();
                            }),
                            (n.emitChange = function () {
                                var e,
                                    t,
                                    n = this.props.context,
                                    r = n.setHelmet,
                                    o = null,
                                    i =
                                        ((e = n.helmetInstances.get().map(function (e) {
                                            var t = f({}, e.props);
                                            return delete t.context, t;
                                        })),
                                        { baseTag: N(["href"], e), bodyAttributes: x("bodyAttributes", e), defer: C(e, "defer"), encode: C(e, "encodeSpecialCharacters"), htmlAttributes: x("htmlAttributes", e), linkTags: w(y.LINK, ["rel", "href"], e), metaTags: w(y.META, ["name", "charset", "http-equiv", "property", "itemprop"], e), noscriptTags: w(y.NOSCRIPT, ["innerHTML"], e), onChangeClientState: E(e), scriptTags: w(y.SCRIPT, ["src", "innerHTML"], e), styleTags: w(y.STYLE, ["cssText"], e), title: O(e), titleAttributes: x("titleAttributes", e), prioritizeSeoTags: I(e, "prioritizeSeoTags") });
                                q.canUseDOM
                                    ? ((t = i),
                                      J && cancelAnimationFrame(J),
                                      t.defer
                                          ? (J = requestAnimationFrame(function () {
                                                G(t, function () {
                                                    J = null;
                                                });
                                            }))
                                          : (G(t), (J = null)))
                                    : H && (o = H(i)),
                                    r(o);
                            }),
                            (n.init = function () {
                                this.rendered || ((this.rendered = !0), this.props.context.helmetInstances.add(this), this.emitChange());
                            }),
                            (n.render = function () {
                                return this.init(), null;
                            }),
                            t
                        );
                    })(r.Component);
                (W.propTypes = { context: B.isRequired }), (W.displayName = "HelmetDispatcher");
                var X = ["children"],
                    Z = ["children"],
                    Q = (function (e) {
                        function t() {
                            return e.apply(this, arguments) || this;
                        }
                        d(t, e);
                        var n = t.prototype;
                        return (
                            (n.shouldComponentUpdate = function (e) {
                                return !s()(L(this.props, "helmetData"), L(e, "helmetData"));
                            }),
                            (n.mapNestedChildrenToProps = function (e, t) {
                                if (!t) return null;
                                switch (e.type) {
                                    case y.SCRIPT:
                                    case y.NOSCRIPT:
                                        return { innerHTML: t };
                                    case y.STYLE:
                                        return { cssText: t };
                                    default:
                                        throw new Error("<" + e.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
                                }
                            }),
                            (n.flattenArrayTypeChildren = function (e) {
                                var t,
                                    n = e.child,
                                    r = e.arrayTypeChildren;
                                return f({}, r, (((t = {})[n.type] = [].concat(r[n.type] || [], [f({}, e.newChildProps, this.mapNestedChildrenToProps(n, e.nestedChildren))])), t));
                            }),
                            (n.mapObjectTypeChildren = function (e) {
                                var t,
                                    n,
                                    r = e.child,
                                    o = e.newProps,
                                    i = e.newChildProps,
                                    a = e.nestedChildren;
                                switch (r.type) {
                                    case y.TITLE:
                                        return f({}, o, (((t = {})[r.type] = a), (t.titleAttributes = f({}, i)), t));
                                    case y.BODY:
                                        return f({}, o, { bodyAttributes: f({}, i) });
                                    case y.HTML:
                                        return f({}, o, { htmlAttributes: f({}, i) });
                                    default:
                                        return f({}, o, (((n = {})[r.type] = f({}, i)), n));
                                }
                            }),
                            (n.mapArrayTypeChildrenToProps = function (e, t) {
                                var n = f({}, t);
                                return (
                                    Object.keys(e).forEach(function (t) {
                                        var r;
                                        n = f({}, n, (((r = {})[t] = e[t]), r));
                                    }),
                                    n
                                );
                            }),
                            (n.warnOnInvalidChildren = function (e, t) {
                                return (
                                    l()(
                                        v.some(function (t) {
                                            return e.type === t;
                                        }),
                                        "function" == typeof e.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + v.join(", ") + " are allowed. Helmet does not support rendering <" + e.type + "> elements. Refer to our API for more information.",
                                    ),
                                    l()(
                                        !t ||
                                            "string" == typeof t ||
                                            (Array.isArray(t) &&
                                                !t.some(function (e) {
                                                    return "string" != typeof e;
                                                })),
                                        "Helmet expects a string as a child of <" + e.type + ">. Did you forget to wrap your children in braces? ( <" + e.type + ">{``}</" + e.type + "> ) Refer to our API for more information.",
                                    ),
                                    !0
                                );
                            }),
                            (n.mapChildrenToProps = function (e, t) {
                                var n = this,
                                    o = {};
                                return (
                                    r.Children.forEach(e, function (e) {
                                        if (e && e.props) {
                                            var r = e.props,
                                                i = r.children,
                                                a = m(r, X),
                                                s = Object.keys(a).reduce(function (e, t) {
                                                    return (e[A[t] || t] = a[t]), e;
                                                }, {}),
                                                c = e.type;
                                            switch (("symbol" == typeof c ? (c = c.toString()) : n.warnOnInvalidChildren(e, i), c)) {
                                                case y.FRAGMENT:
                                                    t = n.mapChildrenToProps(i, t);
                                                    break;
                                                case y.LINK:
                                                case y.META:
                                                case y.NOSCRIPT:
                                                case y.SCRIPT:
                                                case y.STYLE:
                                                    o = n.flattenArrayTypeChildren({ child: e, arrayTypeChildren: o, newChildProps: s, nestedChildren: i });
                                                    break;
                                                default:
                                                    t = n.mapObjectTypeChildren({ child: e, newProps: t, newChildProps: s, nestedChildren: i });
                                            }
                                        }
                                    }),
                                    this.mapArrayTypeChildrenToProps(o, t)
                                );
                            }),
                            (n.render = function () {
                                var e = this.props,
                                    t = e.children,
                                    n = m(e, Z),
                                    o = f({}, n),
                                    i = n.helmetData;
                                return (
                                    t && (o = this.mapChildrenToProps(t, o)),
                                    !i || i instanceof K || (i = new K(i.context, i.instances)),
                                    i
                                        ? r.createElement(W, f({}, o, { context: i.value, helmetData: void 0 }))
                                        : r.createElement(V.Consumer, null, function (e) {
                                              return r.createElement(W, f({}, o, { context: e }));
                                          })
                                );
                            }),
                            t
                        );
                    })(r.Component);
                (Q.propTypes = { base: i().object, bodyAttributes: i().object, children: i().oneOfType([i().arrayOf(i().node), i().node]), defaultTitle: i().string, defer: i().bool, encodeSpecialCharacters: i().bool, htmlAttributes: i().object, link: i().arrayOf(i().object), meta: i().arrayOf(i().object), noscript: i().arrayOf(i().object), onChangeClientState: i().func, script: i().arrayOf(i().object), style: i().arrayOf(i().object), title: i().string, titleAttributes: i().object, titleTemplate: i().string, prioritizeSeoTags: i().bool, helmetData: i().object }), (Q.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }), (Q.displayName = "Helmet");
            },
            766866: (e, t) => {
                /** @license React v16.13.1
                 * react-is.production.min.js
                 *
                 * Copyright (c) Facebook, Inc. and its affiliates.
                 *
                 * This source code is licensed under the MIT license found in the
                 * LICENSE file in the root directory of this source tree.
                 */
                var n = "function" == typeof Symbol && Symbol.for,
                    r = n ? Symbol.for("react.element") : 60103,
                    o = n ? Symbol.for("react.portal") : 60106,
                    i = n ? Symbol.for("react.fragment") : 60107,
                    a = n ? Symbol.for("react.strict_mode") : 60108,
                    s = n ? Symbol.for("react.profiler") : 60114,
                    c = n ? Symbol.for("react.provider") : 60109,
                    l = n ? Symbol.for("react.context") : 60110,
                    u = n ? Symbol.for("react.async_mode") : 60111,
                    p = n ? Symbol.for("react.concurrent_mode") : 60111,
                    f = n ? Symbol.for("react.forward_ref") : 60112,
                    d = n ? Symbol.for("react.suspense") : 60113,
                    h = n ? Symbol.for("react.suspense_list") : 60120,
                    m = n ? Symbol.for("react.memo") : 60115,
                    y = n ? Symbol.for("react.lazy") : 60116,
                    g = n ? Symbol.for("react.block") : 60121,
                    b = n ? Symbol.for("react.fundamental") : 60117,
                    T = n ? Symbol.for("react.responder") : 60118,
                    v = n ? Symbol.for("react.scope") : 60119;
                function S(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case r:
                                switch ((e = e.type)) {
                                    case u:
                                    case p:
                                    case i:
                                    case s:
                                    case a:
                                    case d:
                                        return e;
                                    default:
                                        switch ((e = e && e.$$typeof)) {
                                            case l:
                                            case f:
                                            case y:
                                            case m:
                                            case c:
                                                return e;
                                            default:
                                                return t;
                                        }
                                }
                            case o:
                                return t;
                        }
                    }
                }
                function A(e) {
                    return S(e) === p;
                }
                (t.AsyncMode = u),
                    (t.ConcurrentMode = p),
                    (t.ContextConsumer = l),
                    (t.ContextProvider = c),
                    (t.Element = r),
                    (t.ForwardRef = f),
                    (t.Fragment = i),
                    (t.Lazy = y),
                    (t.Memo = m),
                    (t.Portal = o),
                    (t.Profiler = s),
                    (t.StrictMode = a),
                    (t.Suspense = d),
                    (t.isAsyncMode = function (e) {
                        return A(e) || S(e) === u;
                    }),
                    (t.isConcurrentMode = A),
                    (t.isContextConsumer = function (e) {
                        return S(e) === l;
                    }),
                    (t.isContextProvider = function (e) {
                        return S(e) === c;
                    }),
                    (t.isElement = function (e) {
                        return "object" == typeof e && null !== e && e.$$typeof === r;
                    }),
                    (t.isForwardRef = function (e) {
                        return S(e) === f;
                    }),
                    (t.isFragment = function (e) {
                        return S(e) === i;
                    }),
                    (t.isLazy = function (e) {
                        return S(e) === y;
                    }),
                    (t.isMemo = function (e) {
                        return S(e) === m;
                    }),
                    (t.isPortal = function (e) {
                        return S(e) === o;
                    }),
                    (t.isProfiler = function (e) {
                        return S(e) === s;
                    }),
                    (t.isStrictMode = function (e) {
                        return S(e) === a;
                    }),
                    (t.isSuspense = function (e) {
                        return S(e) === d;
                    }),
                    (t.isValidElementType = function (e) {
                        return "string" == typeof e || "function" == typeof e || e === i || e === p || e === s || e === a || e === d || e === h || ("object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === c || e.$$typeof === l || e.$$typeof === f || e.$$typeof === b || e.$$typeof === T || e.$$typeof === v || e.$$typeof === g));
                    }),
                    (t.typeOf = S);
            },
            148570: (e, t, n) => {
                e.exports = n(766866);
            },
            930926: (e, t, n) => {
                n.d(t, { J: () => c, j: () => s });
                const r = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                    o = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" },
                    i = (e) => o[e];
                let a = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: (e) => e.replace(r, i) };
                const s = (e = {}) => {
                        a = { ...a, ...e };
                    },
                    c = () => a;
            },
            169065: (e, t, n) => {
                let r;
                n.d(t, { I: () => o, n: () => i });
                const o = (e) => {
                        r = e;
                    },
                    i = () => r;
            },
            679816: (e, t, n) => {
                n.d(t, { cC: () => O, $G: () => x });
                var r = n(202784),
                    o = n(321725);
                const i = (e, t, n, r) => {
                        const o = [n, { code: t, ...(r || {}) }];
                        if (e?.services?.logger?.forward) return e.services.logger.forward(o, "warn", "react-i18next::", !0);
                        p(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...o) : console;
                    },
                    a = {},
                    s = (e, t, n, r) => {
                        (p(n) && a[n]) || (p(n) && (a[n] = new Date()), i(e, t, n, r));
                    },
                    c = (e, t) => () => {
                        if (e.isInitialized) t();
                        else {
                            const n = () => {
                                setTimeout(() => {
                                    e.off("initialized", n);
                                }, 0),
                                    t();
                            };
                            e.on("initialized", n);
                        }
                    },
                    l = (e, t, n) => {
                        e.loadNamespaces(t, c(e, n));
                    },
                    u = (e, t, n, r) => {
                        if ((p(n) && (n = [n]), e.options.preload && e.options.preload.indexOf(t) > -1)) return l(e, n, r);
                        n.forEach((t) => {
                            e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
                        }),
                            e.loadLanguages(t, c(e, r));
                    },
                    p = (e) => "string" == typeof e,
                    f = (e) => "object" == typeof e && null !== e;
                var d = n(930926),
                    h = n(169065);
                const m = (e, t) => {
                        if (!e) return !1;
                        const n = e.props?.children ?? e.children;
                        return t ? n.length > 0 : !!n;
                    },
                    y = (e) => {
                        if (!e) return [];
                        const t = e.props?.children ?? e.children;
                        return e.props?.i18nIsDynamicList ? g(t) : t;
                    },
                    g = (e) => (Array.isArray(e) ? e : [e]),
                    b = (e, t, n, o) => {
                        if (!e) return "";
                        let a = "";
                        const s = g(e),
                            c = t?.transSupportBasicHtmlNodes ? (t.transKeepBasicHtmlNodesFor ?? []) : [];
                        return (
                            s.forEach((e, s) => {
                                if (p(e)) a += `${e}`;
                                else if ((0, r.isValidElement)(e)) {
                                    const { props: r, type: i } = e,
                                        l = Object.keys(r).length,
                                        u = c.indexOf(i) > -1,
                                        f = r.children;
                                    if (!f && u && !l) return void (a += `<${i}/>`);
                                    if ((!f && (!u || l)) || r.i18nIsDynamicList) return void (a += `<${s}></${s}>`);
                                    if (u && 1 === l && p(f)) return void (a += `<${i}>${f}</${i}>`);
                                    const d = b(f, t, n, o);
                                    a += `<${s}>${d}</${s}>`;
                                } else if (null !== e)
                                    if (f(e)) {
                                        const { format: t, ...r } = e,
                                            s = Object.keys(r);
                                        if (1 === s.length) {
                                            const e = t ? `${s[0]}, ${t}` : s[0];
                                            return void (a += `{{${e}}}`);
                                        }
                                        i(n, "TRANS_INVALID_OBJ", "Invalid child - Object should only have keys {{ value, format }} (format is optional).", { i18nKey: o, child: e });
                                    } else i(n, "TRANS_INVALID_VAR", "Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.", { i18nKey: o, child: e });
                                else i(n, "TRANS_NULL_VALUE", "Passed in a null value as child", { i18nKey: o });
                            }),
                            a
                        );
                    },
                    T = (e, t, n, i, a, s) => {
                        if ("" === t) return [];
                        const c = i.transKeepBasicHtmlNodesFor || [],
                            l = t && new RegExp(c.map((e) => `<${e}`).join("|")).test(t);
                        if (!e && !l && !s) return [t];
                        const u = {},
                            d = (e) => {
                                g(e).forEach((e) => {
                                    p(e) || (m(e) ? d(y(e)) : f(e) && !(0, r.isValidElement)(e) && Object.assign(u, e));
                                });
                            };
                        d(e);
                        const h = o.Z.parse(`<0>${t}</0>`),
                            b = { ...u, ...a },
                            T = (e, t, n) => {
                                const o = y(e),
                                    i = S(o, t.children, n);
                                return (((e) => Array.isArray(e) && e.every(r.isValidElement))(o) && 0 === i.length) || e.props?.i18nIsDynamicList ? o : i;
                            },
                            v = (e, t, n, o, i) => {
                                e.dummy
                                    ? ((e.children = t), n.push((0, r.cloneElement)(e, { key: o }, i ? void 0 : t)))
                                    : n.push(
                                          ...r.Children.map([e], (e) => {
                                              const n = { ...e.props };
                                              return delete n.i18nIsDynamicList, (0, r.createElement)(e.type, { ...n, key: o, ref: e.props.ref ?? e.ref }, i ? null : t);
                                          }),
                                      );
                            },
                            S = (t, o, a) => {
                                const u = g(t);
                                return g(o).reduce((t, o, d) => {
                                    const h = o.children?.[0]?.content && n.services.interpolator.interpolate(o.children[0].content, b, n.language);
                                    if ("tag" === o.type) {
                                        let s = u[parseInt(o.name, 10)];
                                        1 !== a.length || s || (s = a[0][o.name]), s || (s = {});
                                        const y =
                                                0 !== Object.keys(o.attrs).length
                                                    ? ((e, t) => {
                                                          const n = { ...t };
                                                          return (n.props = Object.assign(e.props, t.props)), n;
                                                      })({ props: o.attrs }, s)
                                                    : s,
                                            g = (0, r.isValidElement)(y),
                                            A = g && m(o, !0) && !o.voidElement,
                                            C = l && f(y) && y.dummy && !g,
                                            O = f(e) && Object.hasOwnProperty.call(e, o.name);
                                        if (p(y)) {
                                            const e = n.services.interpolator.interpolate(y, b, n.language);
                                            t.push(e);
                                        } else if (m(y) || A) {
                                            const e = T(y, o, a);
                                            v(y, e, t, d);
                                        } else if (C) {
                                            const e = S(u, o.children, a);
                                            v(y, e, t, d);
                                        } else if (Number.isNaN(parseFloat(o.name)))
                                            if (O) {
                                                const e = T(y, o, a);
                                                v(y, e, t, d, o.voidElement);
                                            } else if (i.transSupportBasicHtmlNodes && c.indexOf(o.name) > -1)
                                                if (o.voidElement) t.push((0, r.createElement)(o.name, { key: `${o.name}-${d}` }));
                                                else {
                                                    const e = S(u, o.children, a);
                                                    t.push((0, r.createElement)(o.name, { key: `${o.name}-${d}` }, e));
                                                }
                                            else if (o.voidElement) t.push(`<${o.name} />`);
                                            else {
                                                const e = S(u, o.children, a);
                                                t.push(`<${o.name}>${e}</${o.name}>`);
                                            }
                                        else if (f(y) && !g) {
                                            const e = o.children[0] ? h : null;
                                            e && t.push(e);
                                        } else v(y, h, t, d, 1 !== o.children.length || !h);
                                    } else if ("text" === o.type) {
                                        const e = i.transWrapTextNodes,
                                            a = s ? i.unescape(n.services.interpolator.interpolate(o.content, b, n.language)) : n.services.interpolator.interpolate(o.content, b, n.language);
                                        e ? t.push((0, r.createElement)(e, { key: `${o.name}-${d}` }, a)) : t.push(a);
                                    }
                                    return t;
                                }, []);
                            },
                            A = S([{ dummy: !0, children: e || [] }], h, g(e || []));
                        return y(A[0]);
                    },
                    v = (e, t, n) => {
                        const o = e.key || t,
                            i = (0, r.cloneElement)(e, { key: o });
                        if (!i.props || !i.props.children || (n.indexOf(`${t}/>`) < 0 && n.indexOf(`${t} />`) < 0)) return i;
                        return (0, r.createElement)(
                            function () {
                                return (0, r.createElement)(r.Fragment, null, i);
                            },
                            { key: o },
                        );
                    },
                    S = (e, t, n, r) =>
                        e
                            ? Array.isArray(e)
                                ? ((e, t) => e.map((e, n) => v(e, n, t)))(e, t)
                                : f(e)
                                  ? ((e, t) => {
                                        const n = {};
                                        return (
                                            Object.keys(e).forEach((r) => {
                                                Object.assign(n, { [r]: v(e[r], r, t) });
                                            }),
                                            n
                                        );
                                    })(e, t)
                                  : (s(n, "TRANS_INVALID_COMPONENTS", '<Trans /> "components" prop expects an object or array', { i18nKey: r }), null)
                            : null;
                n(573936);
                const A = (0, r.createContext)();
                class C {
                    constructor() {
                        this.usedNamespaces = {};
                    }
                    addUsedNamespaces(e) {
                        e.forEach((e) => {
                            this.usedNamespaces[e] || (this.usedNamespaces[e] = !0);
                        });
                    }
                    getUsedNamespaces() {
                        return Object.keys(this.usedNamespaces);
                    }
                }
                function O({ children: e, count: t, parent: n, i18nKey: o, context: i, tOptions: a = {}, values: c, defaults: l, components: u, ns: f, i18n: m, t: y, shouldUnescape: g, ...v }) {
                    const { i18n: C, defaultNS: O } = (0, r.useContext)(A) || {},
                        E = m || C || (0, h.n)(),
                        x = y || E?.t.bind(E);
                    return (function ({ children: e, count: t, parent: n, i18nKey: o, context: i, tOptions: a = {}, values: c, defaults: l, components: u, ns: f, i18n: m, t: y, shouldUnescape: g, ...v }) {
                        const A = m || (0, h.n)();
                        if (!A) return s(A, "NO_I18NEXT_INSTANCE", "Trans: You need to pass in an i18next instance using i18nextReactModule", { i18nKey: o }), e;
                        const C = y || A.t.bind(A) || ((e) => e),
                            O = { ...(0, d.J)(), ...A.options?.react };
                        let E = f || C.ns || A.options?.defaultNS;
                        E = p(E) ? [E] : E || ["translation"];
                        const x = b(e, O, A, o),
                            N = l || x || O.transEmptyNodeValue || o,
                            { hashTransKey: w } = O,
                            I = o || (w ? w(x || N) : x || N);
                        A.options?.interpolation?.defaultVariables && (c = c && Object.keys(c).length > 0 ? { ...c, ...A.options.interpolation.defaultVariables } : { ...A.options.interpolation.defaultVariables });
                        const j = c || (void 0 !== t && !A.options?.interpolation?.alwaysFormat) || !e ? a.interpolation : { interpolation: { ...a.interpolation, prefix: "#$?", suffix: "?$#" } },
                            k = { ...a, context: i || a.context, count: t, ...c, ...j, defaultValue: N, ns: E },
                            L = I ? C(I, k) : N,
                            P = S(u, L, A, o),
                            $ = T(P || e, L, A, O, k, g),
                            M = n ?? O.defaultTransParent;
                        return M ? (0, r.createElement)(M, v, $) : $;
                    })({ children: e, count: t, parent: n, i18nKey: o, context: i, tOptions: a, values: c, defaults: l, components: u, ns: f || x?.ns || O || E?.options?.defaultNS, i18n: E, t: y, shouldUnescape: g, ...v });
                }
                const E = (e, t, n, r) => e.getFixedT(t, n, r),
                    x = (e, t = {}) => {
                        const { i18n: n } = t,
                            { i18n: o, defaultNS: i } = (0, r.useContext)(A) || {},
                            a = n || o || (0, h.n)();
                        if ((a && !a.reportNamespaces && (a.reportNamespaces = new C()), !a)) {
                            s(a, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
                            const e = (e, t) => (p(t) ? t : f(t) && p(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e),
                                t = [e, {}, !1];
                            return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
                        }
                        a.options.react?.wait && s(a, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                        const c = { ...(0, d.J)(), ...a.options.react, ...t },
                            { useSuspense: m, keyPrefix: y } = c;
                        let g = e || i || a.options?.defaultNS;
                        (g = p(g) ? [g] : g || ["translation"]), a.reportNamespaces.addUsedNamespaces?.(g);
                        const b =
                                (a.isInitialized || a.initializedStoreOnce) &&
                                g.every((e) =>
                                    ((e, t, n = {}) =>
                                        t.languages && t.languages.length
                                            ? t.hasLoadedNamespace(e, {
                                                  lng: n.lng,
                                                  precheck: (t, r) => {
                                                      if (n.bindI18n?.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !r(t.isLanguageChangingTo, e)) return !1;
                                                  },
                                              })
                                            : (s(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0))(e, a, c),
                                ),
                            T = ((e, t, n, o) => (0, r.useCallback)(E(e, t, n, o), [e, t, n, o]))(a, t.lng || null, "fallback" === c.nsMode ? g : g[0], y),
                            v = () => T,
                            S = () => E(a, t.lng || null, "fallback" === c.nsMode ? g : g[0], y),
                            [O, x] = (0, r.useState)(v);
                        let N = g.join();
                        t.lng && (N = `${t.lng}${N}`);
                        const w = ((e, t) => {
                                const n = (0, r.useRef)();
                                return (
                                    (0, r.useEffect)(() => {
                                        n.current = t ? n.current : e;
                                    }, [e, t]),
                                    n.current
                                );
                            })(N),
                            I = (0, r.useRef)(!0);
                        (0, r.useEffect)(() => {
                            const { bindI18n: e, bindI18nStore: n } = c;
                            (I.current = !0),
                                b ||
                                    m ||
                                    (t.lng
                                        ? u(a, t.lng, g, () => {
                                              I.current && x(S);
                                          })
                                        : l(a, g, () => {
                                              I.current && x(S);
                                          })),
                                b && w && w !== N && I.current && x(S);
                            const r = () => {
                                I.current && x(S);
                            };
                            return (
                                e && a?.on(e, r),
                                n && a?.store.on(n, r),
                                () => {
                                    (I.current = !1), a && e?.split(" ").forEach((e) => a.off(e, r)), n && a && n.split(" ").forEach((e) => a.store.off(e, r));
                                }
                            );
                        }, [a, N]),
                            (0, r.useEffect)(() => {
                                I.current && b && x(v);
                            }, [a, y, b]);
                        const j = [O, a, b];
                        if (((j.t = O), (j.i18n = a), (j.ready = b), b)) return j;
                        if (!b && !m) return j;
                        throw new Promise((e) => {
                            t.lng ? u(a, t.lng, g, () => e()) : l(a, g, () => e());
                        });
                    };
            },
            573936: (e, t, n) => {
                n.d(t, { D: () => i });
                var r = n(930926),
                    o = n(169065);
                const i = {
                    type: "3rdParty",
                    init(e) {
                        (0, r.j)(e.options.react), (0, o.I)(e);
                    },
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-669c86db.6f019c3a.js.map
