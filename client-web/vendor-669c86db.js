window.__SCRIPTS_LOADED__.runtime &&
    ((self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
        ["vendor-669c86db"],
        {
            272175: (e, t, r) => {
                r.d(t, { B6: () => Y, ql: () => Z });
                var n = r(202784),
                    o = r(213980),
                    i = r.n(o),
                    a = r(578435),
                    s = r.n(a),
                    c = r(647677),
                    u = r.n(c),
                    l = r(588665),
                    p = r.n(l);
                function f() {
                    return (
                        (f =
                            Object.assign ||
                            function (e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var r = arguments[t];
                                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
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
                    var r,
                        n,
                        o = {},
                        i = Object.keys(e);
                    for (n = 0; n < i.length; n++) t.indexOf((r = i[n])) >= 0 || (o[r] = e[r]);
                    return o;
                }
                var y = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" },
                    g = { rel: ["amphtml", "canonical", "alternate"] },
                    T = { type: ["application/ld+json"] },
                    b = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] },
                    v = Object.keys(y).map(function (e) {
                        return y[e];
                    }),
                    C = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" },
                    S = Object.keys(C).reduce(function (e, t) {
                        return (e[C[t]] = t), e;
                    }, {}),
                    A = function (e, t) {
                        for (var r = e.length - 1; r >= 0; r -= 1) {
                            var n = e[r];
                            if (Object.prototype.hasOwnProperty.call(n, t)) return n[t];
                        }
                        return null;
                    },
                    O = function (e) {
                        var t = A(e, y.TITLE),
                            r = A(e, "titleTemplate");
                        if ((Array.isArray(t) && (t = t.join("")), r && t))
                            return r.replace(/%s/g, function () {
                                return t;
                            });
                        var n = A(e, "defaultTitle");
                        return t || n || void 0;
                    },
                    w = function (e) {
                        return A(e, "onChangeClientState") || function () {};
                    },
                    E = function (e, t) {
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
                    x = function (e, t) {
                        return t
                            .filter(function (e) {
                                return void 0 !== e[y.BASE];
                            })
                            .map(function (e) {
                                return e[y.BASE];
                            })
                            .reverse()
                            .reduce(function (t, r) {
                                if (!t.length)
                                    for (var n = Object.keys(r), o = 0; o < n.length; o += 1) {
                                        var i = n[o].toLowerCase();
                                        if (-1 !== e.indexOf(i) && r[i]) return t.concat(r);
                                    }
                                return t;
                            }, []);
                    },
                    I = function (e, t, r) {
                        var n = {};
                        return r
                            .filter(function (t) {
                                return !!Array.isArray(t[e]) || (void 0 !== t[e] && console && console.warn, !1);
                            })
                            .map(function (t) {
                                return t[e];
                            })
                            .reverse()
                            .reduce(function (e, r) {
                                var o = {};
                                r.filter(function (e) {
                                    for (var r, i = Object.keys(e), a = 0; a < i.length; a += 1) {
                                        var s = i[a],
                                            c = s.toLowerCase();
                                        -1 === t.indexOf(c) || ("rel" === r && "canonical" === e[r].toLowerCase()) || ("rel" === c && "stylesheet" === e[c].toLowerCase()) || (r = c), -1 === t.indexOf(s) || ("innerHTML" !== s && "cssText" !== s && "itemprop" !== s) || (r = s);
                                    }
                                    if (!r || !e[r]) return !1;
                                    var u = e[r].toLowerCase();
                                    return n[r] || (n[r] = {}), o[r] || (o[r] = {}), !n[r][u] && ((o[r][u] = !0), !0);
                                })
                                    .reverse()
                                    .forEach(function (t) {
                                        return e.push(t);
                                    });
                                for (var i = Object.keys(o), a = 0; a < i.length; a += 1) {
                                    var s = i[a],
                                        c = f({}, n[s], o[s]);
                                    n[s] = c;
                                }
                                return e;
                            }, [])
                            .reverse();
                    },
                    P = function (e, t) {
                        if (Array.isArray(e) && e.length) for (var r = 0; r < e.length; r += 1) if (e[r][t]) return !0;
                        return !1;
                    },
                    N = function (e) {
                        return Array.isArray(e) ? e.join("") : e;
                    },
                    L = function (e, t) {
                        return Array.isArray(e)
                            ? e.reduce(
                                  function (e, r) {
                                      return (
                                          (function (e, t) {
                                              for (var r = Object.keys(e), n = 0; n < r.length; n += 1) if (t[r[n]] && t[r[n]].includes(e[r[n]])) return !0;
                                              return !1;
                                          })(r, t)
                                              ? e.priority.push(r)
                                              : e.default.push(r),
                                          e
                                      );
                                  },
                                  { priority: [], default: [] },
                              )
                            : { default: e };
                    },
                    j = function (e, t) {
                        var r;
                        return f({}, e, (((r = {})[t] = void 0), r));
                    },
                    M = [y.NOSCRIPT, y.SCRIPT, y.STYLE],
                    k = function (e, t) {
                        return void 0 === t && (t = !0), !1 === t ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
                    },
                    R = function (e) {
                        return Object.keys(e).reduce(function (t, r) {
                            var n = void 0 !== e[r] ? r + '="' + e[r] + '"' : "" + r;
                            return t ? t + " " + n : n;
                        }, "");
                    },
                    D = function (e, t) {
                        return (
                            void 0 === t && (t = {}),
                            Object.keys(e).reduce(function (t, r) {
                                return (t[C[r] || r] = e[r]), t;
                            }, t)
                        );
                    },
                    _ = function (e, t) {
                        return t.map(function (t, r) {
                            var o,
                                i = (((o = { key: r })["data-rh"] = !0), o);
                            return (
                                Object.keys(t).forEach(function (e) {
                                    var r = C[e] || e;
                                    "innerHTML" === r || "cssText" === r ? (i.dangerouslySetInnerHTML = { __html: t.innerHTML || t.cssText }) : (i[r] = t[e]);
                                }),
                                n.createElement(e, i)
                            );
                        });
                    },
                    H = function (e, t, r) {
                        switch (e) {
                            case y.TITLE:
                                return {
                                    toComponent: function () {
                                        return (r = t.titleAttributes), ((o = { key: (e = t.title) })["data-rh"] = !0), (i = D(r, o)), [n.createElement(y.TITLE, i, e)];
                                        var e, r, o, i;
                                    },
                                    toString: function () {
                                        return (function (e, t, r, n) {
                                            var o = R(r),
                                                i = N(t);
                                            return o ? "<" + e + ' data-rh="true" ' + o + ">" + k(i, n) + "</" + e + ">" : "<" + e + ' data-rh="true">' + k(i, n) + "</" + e + ">";
                                        })(e, t.title, t.titleAttributes, r);
                                    },
                                };
                            case "bodyAttributes":
                            case "htmlAttributes":
                                return {
                                    toComponent: function () {
                                        return D(t);
                                    },
                                    toString: function () {
                                        return R(t);
                                    },
                                };
                            default:
                                return {
                                    toComponent: function () {
                                        return _(e, t);
                                    },
                                    toString: function () {
                                        return (function (e, t, r) {
                                            return t.reduce(function (t, n) {
                                                var o = Object.keys(n)
                                                        .filter(function (e) {
                                                            return !("innerHTML" === e || "cssText" === e);
                                                        })
                                                        .reduce(function (e, t) {
                                                            var o = void 0 === n[t] ? t : t + '="' + k(n[t], r) + '"';
                                                            return e ? e + " " + o : o;
                                                        }, ""),
                                                    i = n.innerHTML || n.cssText || "",
                                                    a = -1 === M.indexOf(e);
                                                return t + "<" + e + ' data-rh="true" ' + o + (a ? "/>" : ">" + i + "</" + e + ">");
                                            }, "");
                                        })(e, t, r);
                                    },
                                };
                        }
                    },
                    $ = function (e) {
                        var t = e.baseTag,
                            r = e.bodyAttributes,
                            n = e.encode,
                            o = e.htmlAttributes,
                            i = e.noscriptTags,
                            a = e.styleTags,
                            s = e.title,
                            c = void 0 === s ? "" : s,
                            u = e.titleAttributes,
                            l = e.linkTags,
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
                                    r = e.scriptTags,
                                    n = e.encode,
                                    o = L(e.metaTags, b),
                                    i = L(t, g),
                                    a = L(r, T);
                                return {
                                    priorityMethods: {
                                        toComponent: function () {
                                            return [].concat(_(y.META, o.priority), _(y.LINK, i.priority), _(y.SCRIPT, a.priority));
                                        },
                                        toString: function () {
                                            return H(y.META, o.priority, n) + " " + H(y.LINK, i.priority, n) + " " + H(y.SCRIPT, a.priority, n);
                                        },
                                    },
                                    metaTags: o.default,
                                    linkTags: i.default,
                                    scriptTags: a.default,
                                };
                            })(e);
                            (d = h.priorityMethods), (l = h.linkTags), (p = h.metaTags), (f = h.scriptTags);
                        }
                        return { priority: d, base: H(y.BASE, t, n), bodyAttributes: H("bodyAttributes", r, n), htmlAttributes: H("htmlAttributes", o, n), link: H(y.LINK, l, n), meta: H(y.META, p, n), noscript: H(y.NOSCRIPT, i, n), script: H(y.SCRIPT, f, n), style: H(y.STYLE, a, n), title: H(y.TITLE, { title: c, titleAttributes: u }, n) };
                    },
                    U = [],
                    q = function (e, t) {
                        var r = this;
                        void 0 === t && (t = "undefined" != typeof document),
                            (this.instances = []),
                            (this.value = {
                                setHelmet: function (e) {
                                    r.context.helmet = e;
                                },
                                helmetInstances: {
                                    get: function () {
                                        return r.canUseDOM ? U : r.instances;
                                    },
                                    add: function (e) {
                                        (r.canUseDOM ? U : r.instances).push(e);
                                    },
                                    remove: function (e) {
                                        var t = (r.canUseDOM ? U : r.instances).indexOf(e);
                                        (r.canUseDOM ? U : r.instances).splice(t, 1);
                                    },
                                },
                            }),
                            (this.context = e),
                            (this.canUseDOM = t),
                            t || (e.helmet = $({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0, htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
                    },
                    z = n.createContext({}),
                    B = i().shape({ setHelmet: i().func, helmetInstances: i().shape({ get: i().func, add: i().func, remove: i().func }) }),
                    F = "undefined" != typeof document,
                    Y = (function (e) {
                        function t(r) {
                            var n;
                            return ((n = e.call(this, r) || this).helmetData = new q(n.props.context, t.canUseDOM)), n;
                        }
                        return (
                            d(t, e),
                            (t.prototype.render = function () {
                                return n.createElement(z.Provider, { value: this.helmetData.value }, this.props.children);
                            }),
                            t
                        );
                    })(n.Component);
                (Y.canUseDOM = F), (Y.propTypes = { context: i().shape({ helmet: i().shape() }), children: i().node.isRequired }), (Y.defaultProps = { context: {} }), (Y.displayName = "HelmetProvider");
                var K = function (e, t) {
                        var r,
                            n = document.head || document.querySelector(y.HEAD),
                            o = n.querySelectorAll(e + "[data-rh]"),
                            i = [].slice.call(o),
                            a = [];
                        return (
                            t &&
                                t.length &&
                                t.forEach(function (t) {
                                    var n = document.createElement(e);
                                    for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && ("innerHTML" === o ? (n.innerHTML = t.innerHTML) : "cssText" === o ? (n.styleSheet ? (n.styleSheet.cssText = t.cssText) : n.appendChild(document.createTextNode(t.cssText))) : n.setAttribute(o, void 0 === t[o] ? "" : t[o]));
                                    n.setAttribute("data-rh", "true"),
                                        i.some(function (e, t) {
                                            return (r = t), n.isEqualNode(e);
                                        })
                                            ? i.splice(r, 1)
                                            : a.push(n);
                                }),
                            i.forEach(function (e) {
                                return e.parentNode.removeChild(e);
                            }),
                            a.forEach(function (e) {
                                return n.appendChild(e);
                            }),
                            { oldTags: i, newTags: a }
                        );
                    },
                    G = function (e, t) {
                        var r = document.getElementsByTagName(e)[0];
                        if (r) {
                            for (var n = r.getAttribute("data-rh"), o = n ? n.split(",") : [], i = [].concat(o), a = Object.keys(t), s = 0; s < a.length; s += 1) {
                                var c = a[s],
                                    u = t[c] || "";
                                r.getAttribute(c) !== u && r.setAttribute(c, u), -1 === o.indexOf(c) && o.push(c);
                                var l = i.indexOf(c);
                                -1 !== l && i.splice(l, 1);
                            }
                            for (var p = i.length - 1; p >= 0; p -= 1) r.removeAttribute(i[p]);
                            o.length === i.length ? r.removeAttribute("data-rh") : r.getAttribute("data-rh") !== a.join(",") && r.setAttribute("data-rh", a.join(","));
                        }
                    },
                    V = function (e, t) {
                        var r = e.baseTag,
                            n = e.htmlAttributes,
                            o = e.linkTags,
                            i = e.metaTags,
                            a = e.noscriptTags,
                            s = e.onChangeClientState,
                            c = e.scriptTags,
                            u = e.styleTags,
                            l = e.title,
                            p = e.titleAttributes;
                        G(y.BODY, e.bodyAttributes),
                            G(y.HTML, n),
                            (function (e, t) {
                                void 0 !== e && document.title !== e && (document.title = N(e)), G(y.TITLE, t);
                            })(l, p);
                        var f = { baseTag: K(y.BASE, r), linkTags: K(y.LINK, o), metaTags: K(y.META, i), noscriptTags: K(y.NOSCRIPT, a), scriptTags: K(y.SCRIPT, c), styleTags: K(y.STYLE, u) },
                            d = {},
                            h = {};
                        Object.keys(f).forEach(function (e) {
                            var t = f[e],
                                r = t.newTags,
                                n = t.oldTags;
                            r.length && (d[e] = r), n.length && (h[e] = f[e].oldTags);
                        }),
                            t && t(),
                            s(e, d, h);
                    },
                    J = null,
                    W = (function (e) {
                        function t() {
                            for (var t, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                            return ((t = e.call.apply(e, [this].concat(n)) || this).rendered = !1), t;
                        }
                        d(t, e);
                        var r = t.prototype;
                        return (
                            (r.shouldComponentUpdate = function (e) {
                                return !p()(e, this.props);
                            }),
                            (r.componentDidUpdate = function () {
                                this.emitChange();
                            }),
                            (r.componentWillUnmount = function () {
                                this.props.context.helmetInstances.remove(this), this.emitChange();
                            }),
                            (r.emitChange = function () {
                                var e,
                                    t,
                                    r = this.props.context,
                                    n = r.setHelmet,
                                    o = null,
                                    i =
                                        ((e = r.helmetInstances.get().map(function (e) {
                                            var t = f({}, e.props);
                                            return delete t.context, t;
                                        })),
                                        { baseTag: x(["href"], e), bodyAttributes: E("bodyAttributes", e), defer: A(e, "defer"), encode: A(e, "encodeSpecialCharacters"), htmlAttributes: E("htmlAttributes", e), linkTags: I(y.LINK, ["rel", "href"], e), metaTags: I(y.META, ["name", "charset", "http-equiv", "property", "itemprop"], e), noscriptTags: I(y.NOSCRIPT, ["innerHTML"], e), onChangeClientState: w(e), scriptTags: I(y.SCRIPT, ["src", "innerHTML"], e), styleTags: I(y.STYLE, ["cssText"], e), title: O(e), titleAttributes: E("titleAttributes", e), prioritizeSeoTags: P(e, "prioritizeSeoTags") });
                                Y.canUseDOM
                                    ? ((t = i),
                                      J && cancelAnimationFrame(J),
                                      t.defer
                                          ? (J = requestAnimationFrame(function () {
                                                V(t, function () {
                                                    J = null;
                                                });
                                            }))
                                          : (V(t), (J = null)))
                                    : $ && (o = $(i)),
                                    n(o);
                            }),
                            (r.init = function () {
                                this.rendered || ((this.rendered = !0), this.props.context.helmetInstances.add(this), this.emitChange());
                            }),
                            (r.render = function () {
                                return this.init(), null;
                            }),
                            t
                        );
                    })(n.Component);
                (W.propTypes = { context: B.isRequired }), (W.displayName = "HelmetDispatcher");
                var X = ["children"],
                    Q = ["children"],
                    Z = (function (e) {
                        function t() {
                            return e.apply(this, arguments) || this;
                        }
                        d(t, e);
                        var r = t.prototype;
                        return (
                            (r.shouldComponentUpdate = function (e) {
                                return !s()(j(this.props, "helmetData"), j(e, "helmetData"));
                            }),
                            (r.mapNestedChildrenToProps = function (e, t) {
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
                            (r.flattenArrayTypeChildren = function (e) {
                                var t,
                                    r = e.child,
                                    n = e.arrayTypeChildren;
                                return f({}, n, (((t = {})[r.type] = [].concat(n[r.type] || [], [f({}, e.newChildProps, this.mapNestedChildrenToProps(r, e.nestedChildren))])), t));
                            }),
                            (r.mapObjectTypeChildren = function (e) {
                                var t,
                                    r,
                                    n = e.child,
                                    o = e.newProps,
                                    i = e.newChildProps,
                                    a = e.nestedChildren;
                                switch (n.type) {
                                    case y.TITLE:
                                        return f({}, o, (((t = {})[n.type] = a), (t.titleAttributes = f({}, i)), t));
                                    case y.BODY:
                                        return f({}, o, { bodyAttributes: f({}, i) });
                                    case y.HTML:
                                        return f({}, o, { htmlAttributes: f({}, i) });
                                    default:
                                        return f({}, o, (((r = {})[n.type] = f({}, i)), r));
                                }
                            }),
                            (r.mapArrayTypeChildrenToProps = function (e, t) {
                                var r = f({}, t);
                                return (
                                    Object.keys(e).forEach(function (t) {
                                        var n;
                                        r = f({}, r, (((n = {})[t] = e[t]), n));
                                    }),
                                    r
                                );
                            }),
                            (r.warnOnInvalidChildren = function (e, t) {
                                return (
                                    u()(
                                        v.some(function (t) {
                                            return e.type === t;
                                        }),
                                        "function" == typeof e.type ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information." : "Only elements types " + v.join(", ") + " are allowed. Helmet does not support rendering <" + e.type + "> elements. Refer to our API for more information.",
                                    ),
                                    u()(
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
                            (r.mapChildrenToProps = function (e, t) {
                                var r = this,
                                    o = {};
                                return (
                                    n.Children.forEach(e, function (e) {
                                        if (e && e.props) {
                                            var n = e.props,
                                                i = n.children,
                                                a = m(n, X),
                                                s = Object.keys(a).reduce(function (e, t) {
                                                    return (e[S[t] || t] = a[t]), e;
                                                }, {}),
                                                c = e.type;
                                            switch (("symbol" == typeof c ? (c = c.toString()) : r.warnOnInvalidChildren(e, i), c)) {
                                                case y.FRAGMENT:
                                                    t = r.mapChildrenToProps(i, t);
                                                    break;
                                                case y.LINK:
                                                case y.META:
                                                case y.NOSCRIPT:
                                                case y.SCRIPT:
                                                case y.STYLE:
                                                    o = r.flattenArrayTypeChildren({ child: e, arrayTypeChildren: o, newChildProps: s, nestedChildren: i });
                                                    break;
                                                default:
                                                    t = r.mapObjectTypeChildren({ child: e, newProps: t, newChildProps: s, nestedChildren: i });
                                            }
                                        }
                                    }),
                                    this.mapArrayTypeChildrenToProps(o, t)
                                );
                            }),
                            (r.render = function () {
                                var e = this.props,
                                    t = e.children,
                                    r = m(e, Q),
                                    o = f({}, r),
                                    i = r.helmetData;
                                return (
                                    t && (o = this.mapChildrenToProps(t, o)),
                                    !i || i instanceof q || (i = new q(i.context, i.instances)),
                                    i
                                        ? n.createElement(W, f({}, o, { context: i.value, helmetData: void 0 }))
                                        : n.createElement(z.Consumer, null, function (e) {
                                              return n.createElement(W, f({}, o, { context: e }));
                                          })
                                );
                            }),
                            t
                        );
                    })(n.Component);
                (Z.propTypes = { base: i().object, bodyAttributes: i().object, children: i().oneOfType([i().arrayOf(i().node), i().node]), defaultTitle: i().string, defer: i().bool, encodeSpecialCharacters: i().bool, htmlAttributes: i().object, link: i().arrayOf(i().object), meta: i().arrayOf(i().object), noscript: i().arrayOf(i().object), onChangeClientState: i().func, script: i().arrayOf(i().object), style: i().arrayOf(i().object), title: i().string, titleAttributes: i().object, titleTemplate: i().string, prioritizeSeoTags: i().bool, helmetData: i().object }), (Z.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }), (Z.displayName = "Helmet");
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
                var r = "function" == typeof Symbol && Symbol.for,
                    n = r ? Symbol.for("react.element") : 60103,
                    o = r ? Symbol.for("react.portal") : 60106,
                    i = r ? Symbol.for("react.fragment") : 60107,
                    a = r ? Symbol.for("react.strict_mode") : 60108,
                    s = r ? Symbol.for("react.profiler") : 60114,
                    c = r ? Symbol.for("react.provider") : 60109,
                    u = r ? Symbol.for("react.context") : 60110,
                    l = r ? Symbol.for("react.async_mode") : 60111,
                    p = r ? Symbol.for("react.concurrent_mode") : 60111,
                    f = r ? Symbol.for("react.forward_ref") : 60112,
                    d = r ? Symbol.for("react.suspense") : 60113,
                    h = r ? Symbol.for("react.suspense_list") : 60120,
                    m = r ? Symbol.for("react.memo") : 60115,
                    y = r ? Symbol.for("react.lazy") : 60116,
                    g = r ? Symbol.for("react.block") : 60121,
                    T = r ? Symbol.for("react.fundamental") : 60117,
                    b = r ? Symbol.for("react.responder") : 60118,
                    v = r ? Symbol.for("react.scope") : 60119;
                function C(e) {
                    if ("object" == typeof e && null !== e) {
                        var t = e.$$typeof;
                        switch (t) {
                            case n:
                                switch ((e = e.type)) {
                                    case l:
                                    case p:
                                    case i:
                                    case s:
                                    case a:
                                    case d:
                                        return e;
                                    default:
                                        switch ((e = e && e.$$typeof)) {
                                            case u:
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
                function S(e) {
                    return C(e) === p;
                }
                (t.AsyncMode = l),
                    (t.ConcurrentMode = p),
                    (t.ContextConsumer = u),
                    (t.ContextProvider = c),
                    (t.Element = n),
                    (t.ForwardRef = f),
                    (t.Fragment = i),
                    (t.Lazy = y),
                    (t.Memo = m),
                    (t.Portal = o),
                    (t.Profiler = s),
                    (t.StrictMode = a),
                    (t.Suspense = d),
                    (t.isAsyncMode = function (e) {
                        return S(e) || C(e) === l;
                    }),
                    (t.isConcurrentMode = S),
                    (t.isContextConsumer = function (e) {
                        return C(e) === u;
                    }),
                    (t.isContextProvider = function (e) {
                        return C(e) === c;
                    }),
                    (t.isElement = function (e) {
                        return "object" == typeof e && null !== e && e.$$typeof === n;
                    }),
                    (t.isForwardRef = function (e) {
                        return C(e) === f;
                    }),
                    (t.isFragment = function (e) {
                        return C(e) === i;
                    }),
                    (t.isLazy = function (e) {
                        return C(e) === y;
                    }),
                    (t.isMemo = function (e) {
                        return C(e) === m;
                    }),
                    (t.isPortal = function (e) {
                        return C(e) === o;
                    }),
                    (t.isProfiler = function (e) {
                        return C(e) === s;
                    }),
                    (t.isStrictMode = function (e) {
                        return C(e) === a;
                    }),
                    (t.isSuspense = function (e) {
                        return C(e) === d;
                    }),
                    (t.isValidElementType = function (e) {
                        return "string" == typeof e || "function" == typeof e || e === i || e === p || e === s || e === a || e === d || e === h || ("object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === m || e.$$typeof === c || e.$$typeof === u || e.$$typeof === f || e.$$typeof === T || e.$$typeof === b || e.$$typeof === v || e.$$typeof === g));
                    }),
                    (t.typeOf = C);
            },
            148570: (e, t, r) => {
                e.exports = r(766866);
            },
            930926: (e, t, r) => {
                r.d(t, { J: () => c, j: () => s });
                const n = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                    o = { "&amp;": "&", "&#38;": "&", "&lt;": "<", "&#60;": "<", "&gt;": ">", "&#62;": ">", "&apos;": "'", "&#39;": "'", "&quot;": '"', "&#34;": '"', "&nbsp;": " ", "&#160;": " ", "&copy;": "©", "&#169;": "©", "&reg;": "®", "&#174;": "®", "&hellip;": "…", "&#8230;": "…", "&#x2F;": "/", "&#47;": "/" },
                    i = (e) => o[e];
                let a = { bindI18n: "languageChanged", bindI18nStore: "", transEmptyNodeValue: "", transSupportBasicHtmlNodes: !0, transWrapTextNodes: "", transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"], useSuspense: !0, unescape: (e) => e.replace(n, i) };
                const s = (e = {}) => {
                        a = { ...a, ...e };
                    },
                    c = () => a;
            },
            169065: (e, t, r) => {
                let n;
                r.d(t, { I: () => o, n: () => i });
                const o = (e) => {
                        n = e;
                    },
                    i = () => n;
            },
            679816: (e, t, r) => {
                r.d(t, { $G: () => m });
                var n = r(202784);
                r(321725);
                const o = {},
                    i = (e, t, r, n) => {
                        (u(r) && o[r]) ||
                            (u(r) && (o[r] = new Date()),
                            ((e, t, r, n) => {
                                const o = [r, { code: t, ...(n || {}) }];
                                if (e?.services?.logger?.forward) return e.services.logger.forward(o, "warn", "react-i18next::", !0);
                                u(o[0]) && (o[0] = `react-i18next:: ${o[0]}`), e?.services?.logger?.warn ? e.services.logger.warn(...o) : console;
                            })(e, t, r, n));
                    },
                    a = (e, t) => () => {
                        if (e.isInitialized) t();
                        else {
                            const r = () => {
                                setTimeout(() => {
                                    e.off("initialized", r);
                                }, 0),
                                    t();
                            };
                            e.on("initialized", r);
                        }
                    },
                    s = (e, t, r) => {
                        e.loadNamespaces(t, a(e, r));
                    },
                    c = (e, t, r, n) => {
                        if ((u(r) && (r = [r]), e.options.preload && e.options.preload.indexOf(t) > -1)) return s(e, r, n);
                        r.forEach((t) => {
                            e.options.ns.indexOf(t) < 0 && e.options.ns.push(t);
                        }),
                            e.loadLanguages(t, a(e, n));
                    },
                    u = (e) => "string" == typeof e;
                var l = r(930926);
                var p = r(169065);
                r(573936);
                const f = (0, n.createContext)();
                class d {
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
                const h = (e, t, r, n) => e.getFixedT(t, r, n),
                    m = (e, t = {}) => {
                        const { i18n: r } = t,
                            { i18n: o, defaultNS: a } = (0, n.useContext)(f) || {},
                            m = r || o || (0, p.n)();
                        if ((m && !m.reportNamespaces && (m.reportNamespaces = new d()), !m)) {
                            i(m, "NO_I18NEXT_INSTANCE", "useTranslation: You will need to pass in an i18next instance by using initReactI18next");
                            const e = (e, t) => {
                                    return u(t) ? t : "object" == typeof (r = t) && null !== r && u(t.defaultValue) ? t.defaultValue : Array.isArray(e) ? e[e.length - 1] : e;
                                    var r;
                                },
                                t = [e, {}, !1];
                            return (t.t = e), (t.i18n = {}), (t.ready = !1), t;
                        }
                        m.options.react?.wait && i(m, "DEPRECATED_OPTION", "useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                        const y = { ...(0, l.J)(), ...m.options.react, ...t },
                            { useSuspense: g, keyPrefix: T } = y;
                        let b = e || a || m.options?.defaultNS;
                        (b = u(b) ? [b] : b || ["translation"]), m.reportNamespaces.addUsedNamespaces?.(b);
                        const v =
                                (m.isInitialized || m.initializedStoreOnce) &&
                                b.every((e) =>
                                    ((e, t, r = {}) =>
                                        t.languages && t.languages.length
                                            ? t.hasLoadedNamespace(e, {
                                                  lng: r.lng,
                                                  precheck: (t, n) => {
                                                      if (r.bindI18n?.indexOf("languageChanging") > -1 && t.services.backendConnector.backend && t.isLanguageChangingTo && !n(t.isLanguageChangingTo, e)) return !1;
                                                  },
                                              })
                                            : (i(t, "NO_LANGUAGES", "i18n.languages were undefined or empty", { languages: t.languages }), !0))(e, m, y),
                                ),
                            C = ((e, t, r, o) => (0, n.useCallback)(h(e, t, r, o), [e, t, r, o]))(m, t.lng || null, "fallback" === y.nsMode ? b : b[0], T),
                            S = () => C,
                            A = () => h(m, t.lng || null, "fallback" === y.nsMode ? b : b[0], T),
                            [O, w] = (0, n.useState)(S);
                        let E = b.join();
                        t.lng && (E = `${t.lng}${E}`);
                        const x = ((e, t) => {
                                const r = (0, n.useRef)();
                                return (
                                    (0, n.useEffect)(() => {
                                        r.current = t ? r.current : e;
                                    }, [e, t]),
                                    r.current
                                );
                            })(E),
                            I = (0, n.useRef)(!0);
                        (0, n.useEffect)(() => {
                            const { bindI18n: e, bindI18nStore: r } = y;
                            (I.current = !0),
                                v ||
                                    g ||
                                    (t.lng
                                        ? c(m, t.lng, b, () => {
                                              I.current && w(A);
                                          })
                                        : s(m, b, () => {
                                              I.current && w(A);
                                          })),
                                v && x && x !== E && I.current && w(A);
                            const n = () => {
                                I.current && w(A);
                            };
                            return (
                                e && m?.on(e, n),
                                r && m?.store.on(r, n),
                                () => {
                                    (I.current = !1), m && e?.split(" ").forEach((e) => m.off(e, n)), r && m && r.split(" ").forEach((e) => m.store.off(e, n));
                                }
                            );
                        }, [m, E]),
                            (0, n.useEffect)(() => {
                                I.current && v && w(S);
                            }, [m, T, v]);
                        const P = [O, m, v];
                        if (((P.t = O), (P.i18n = m), (P.ready = v), v)) return P;
                        if (!v && !g) return P;
                        throw new Promise((e) => {
                            t.lng ? c(m, t.lng, b, () => e()) : s(m, b, () => e());
                        });
                    };
            },
            573936: (e, t, r) => {
                r.d(t, { D: () => i });
                var n = r(930926),
                    o = r(169065);
                const i = {
                    type: "3rdParty",
                    init(e) {
                        (0, n.j)(e.options.react), (0, o.I)(e);
                    },
                };
            },
        },
    ]),
    (window.__SCRIPTS_LOADED__.vendor = !0));
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/vendor-669c86db.dc9c170a.js.map
