(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-27545368"],
    {
        866432: function (e, t, n) {
            !(function (e, t) {
                "use strict";
                function n(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                            (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            n.push.apply(n, r);
                    }
                    return n;
                }
                function r(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? n(Object(r), !0).forEach(function (t) {
                                  i(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                              : n(Object(r)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                });
                    }
                    return e;
                }
                function o(e) {
                    return (
                        (o =
                            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                ? function (e) {
                                      return typeof e;
                                  }
                                : function (e) {
                                      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                  }),
                        o(e)
                    );
                }
                function i(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                }
                function u(e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                }
                function a(e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = u(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                    }
                    return o;
                }
                function c(e, t) {
                    return l(e) || s(e, t) || d(e, t) || f();
                }
                function l(e) {
                    if (Array.isArray(e)) return e;
                }
                function s(e, t) {
                    var n = e && (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
                    if (null != n) {
                        var r,
                            o,
                            i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
                        } catch (e) {
                            (a = !0), (o = e);
                        } finally {
                            try {
                                u || null == n.return || n.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        return i;
                    }
                }
                function d(e, t) {
                    if (e) {
                        if ("string" == typeof e) return p(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? p(e, t) : void 0;
                    }
                }
                function p(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                function f() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                function m(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                }
                var y,
                    h,
                    v,
                    b,
                    E = { exports: {} };
                function S() {
                    return h ? y : ((h = 1), (y = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
                }
                function g() {
                    if (b) return v;
                    b = 1;
                    var e = S();
                    function t() {}
                    function n() {}
                    return (
                        (n.resetWarningCache = t),
                        (v = function () {
                            function r(t, n, r, o, i, u) {
                                if (u !== e) {
                                    var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                    throw ((a.name = "Invariant Violation"), a);
                                }
                            }
                            function o() {
                                return r;
                            }
                            r.isRequired = r;
                            var i = { array: r, bool: r, func: r, number: r, object: r, string: r, symbol: r, any: r, arrayOf: o, element: r, elementType: r, instanceOf: o, node: r, objectOf: o, oneOf: o, oneOfType: o, shape: o, exact: o, checkPropTypes: n, resetWarningCache: t };
                            return (i.PropTypes = i), i;
                        })
                    );
                }
                E.exports = g()();
                var C = m(E.exports),
                    k = function (e, n, r) {
                        var o = !!r,
                            i = t.useRef(r);
                        t.useEffect(
                            function () {
                                i.current = r;
                            },
                            [r],
                        ),
                            t.useEffect(
                                function () {
                                    if (!o || !e) return function () {};
                                    var t = function () {
                                        i.current && i.current.apply(i, arguments);
                                    };
                                    return (
                                        e.on(n, t),
                                        function () {
                                            e.off(n, t);
                                        }
                                    );
                                },
                                [o, n, e, i],
                            );
                    },
                    O = function (e) {
                        var n = t.useRef(e);
                        return (
                            t.useEffect(
                                function () {
                                    n.current = e;
                                },
                                [e],
                            ),
                            n.current
                        );
                    },
                    w = function (e) {
                        return null !== e && "object" === o(e);
                    },
                    P = function (e) {
                        return w(e) && "function" == typeof e.then;
                    },
                    j = function (e) {
                        return w(e) && "function" == typeof e.elements && "function" == typeof e.createToken && "function" == typeof e.createPaymentMethod && "function" == typeof e.confirmCardPayment;
                    },
                    x = "[object Object]",
                    R = function e(t, n) {
                        if (!w(t) || !w(n)) return t === n;
                        var r = Array.isArray(t);
                        if (r !== Array.isArray(n)) return !1;
                        var o = Object.prototype.toString.call(t) === x;
                        if (o !== (Object.prototype.toString.call(n) === x)) return !1;
                        if (!o && !r) return t === n;
                        var i = Object.keys(t),
                            u = Object.keys(n);
                        if (i.length !== u.length) return !1;
                        for (var a = {}, c = 0; c < i.length; c += 1) a[i[c]] = !0;
                        for (var l = 0; l < u.length; l += 1) a[u[l]] = !0;
                        var s = Object.keys(a);
                        if (s.length !== i.length) return !1;
                        var d = t,
                            p = n,
                            f = function (t) {
                                return e(d[t], p[t]);
                            };
                        return s.every(f);
                    },
                    T = function (e, t, n) {
                        return w(e)
                            ? Object.keys(e).reduce(function (o, u) {
                                  var a = !w(t) || !R(e[u], t[u]);
                                  return n.includes(u) ? o : a ? r(r({}, o || {}), {}, i({}, u, e[u])) : o;
                              }, null)
                            : null;
                    },
                    I = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    _ = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
                        if (null === e || j(e)) return e;
                        throw new Error(t);
                    },
                    N = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : I;
                        if (P(e))
                            return {
                                tag: "async",
                                stripePromise: Promise.resolve(e).then(function (e) {
                                    return _(e, t);
                                }),
                            };
                        var n = _(e, t);
                        return null === n ? { tag: "empty" } : { tag: "sync", stripe: n };
                    },
                    A = function (e) {
                        e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({ name: "react-stripe-js", version: "3.6.0" }), e.registerAppInfo({ name: "react-stripe-js", version: "3.6.0", url: "https://stripe.com/docs/stripe-js/react" }));
                    },
                    L = t.createContext(null);
                L.displayName = "ElementsContext";
                var F = function (e, t) {
                        if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t, " in an <Elements> provider."));
                        return e;
                    },
                    M = function (e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            i = t.useMemo(
                                function () {
                                    return N(n);
                                },
                                [n],
                            ),
                            u = c(
                                t.useState(function () {
                                    return { stripe: "sync" === i.tag ? i.stripe : null, elements: "sync" === i.tag ? i.stripe.elements(r) : null };
                                }),
                                2,
                            ),
                            a = u[0],
                            l = u[1];
                        t.useEffect(
                            function () {
                                var e = !0,
                                    t = function (e) {
                                        l(function (t) {
                                            return t.stripe ? t : { stripe: e, elements: e.elements(r) };
                                        });
                                    };
                                return (
                                    "async" !== i.tag || a.stripe
                                        ? "sync" !== i.tag || a.stripe || t(i.stripe)
                                        : i.stripePromise.then(function (n) {
                                              n && e && t(n);
                                          }),
                                    function () {
                                        e = !1;
                                    }
                                );
                            },
                            [i, a, r],
                        );
                        var s = O(n);
                        t.useEffect(function () {}, [s, n]);
                        var d = O(r);
                        return (
                            t.useEffect(
                                function () {
                                    if (a.elements) {
                                        var e = T(r, d, ["clientSecret", "fonts"]);
                                        e && a.elements.update(e);
                                    }
                                },
                                [r, d, a.elements],
                            ),
                            t.useEffect(
                                function () {
                                    A(a.stripe);
                                },
                                [a.stripe],
                            ),
                            t.createElement(L.Provider, { value: a }, o)
                        );
                    };
                M.propTypes = { stripe: C.any, options: C.object };
                var D = function (e) {
                        var n = t.useContext(L);
                        return F(n, e);
                    },
                    B = function () {
                        return D("calls useElements()").elements;
                    },
                    q = function (e) {
                        return (0, e.children)(D("mounts <ElementsConsumer>"));
                    };
                q.propTypes = { children: C.func.isRequired };
                var U = ["on", "session"],
                    H = t.createContext(null);
                H.displayName = "CheckoutSdkContext";
                var K = function (e, t) {
                        if (!e) throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(t, " in an <CheckoutProvider> provider."));
                        return e;
                    },
                    Z = t.createContext(null);
                Z.displayName = "CheckoutContext";
                var Y = function (e, t) {
                        if (!e) return null;
                        e.on, e.session;
                        var n = a(e, U);
                        return t ? Object.assign(t, n) : Object.assign(e.session(), n);
                    },
                    W = "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    z = function (e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            i = t.useMemo(
                                function () {
                                    return N(n, W);
                                },
                                [n],
                            ),
                            u = c(t.useState(null), 2),
                            a = u[0],
                            l = u[1],
                            s = c(
                                t.useState(function () {
                                    return { stripe: "sync" === i.tag ? i.stripe : null, checkoutSdk: null };
                                }),
                                2,
                            ),
                            d = s[0],
                            p = s[1],
                            f = function (e, t) {
                                p(function (n) {
                                    return n.stripe && n.checkoutSdk ? n : { stripe: e, checkoutSdk: t };
                                });
                            },
                            m = t.useRef(!1);
                        t.useEffect(
                            function () {
                                var e = !0;
                                return (
                                    "async" !== i.tag || d.stripe
                                        ? "sync" === i.tag &&
                                          i.stripe &&
                                          !m.current &&
                                          ((m.current = !0),
                                          i.stripe.initCheckout(r).then(function (e) {
                                              e && (f(i.stripe, e), e.on("change", l));
                                          }))
                                        : i.stripePromise.then(function (t) {
                                              t &&
                                                  e &&
                                                  !m.current &&
                                                  ((m.current = !0),
                                                  t.initCheckout(r).then(function (e) {
                                                      e && (f(t, e), e.on("change", l));
                                                  }));
                                          }),
                                    function () {
                                        e = !1;
                                    }
                                );
                            },
                            [i, d, r, l],
                        );
                        var y = O(n);
                        t.useEffect(function () {}, [y, n]);
                        var h = O(r);
                        t.useEffect(
                            function () {
                                var e, t;
                                if (d.checkoutSdk) {
                                    var n = null == h || null === (e = h.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                                        o = null == r || null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
                                    o && !R(o, n) && d.checkoutSdk.changeAppearance(o);
                                }
                            },
                            [r, h, d.checkoutSdk],
                        ),
                            t.useEffect(
                                function () {
                                    A(d.stripe);
                                },
                                [d.stripe],
                            );
                        var v = t.useMemo(
                            function () {
                                return Y(d.checkoutSdk, a);
                            },
                            [d.checkoutSdk, a],
                        );
                        return d.checkoutSdk ? t.createElement(H.Provider, { value: d }, t.createElement(Z.Provider, { value: v }, o)) : null;
                    };
                z.propTypes = { stripe: C.any, options: C.shape({ fetchClientSecret: C.func.isRequired, elementsOptions: C.object }).isRequired };
                var Q = function (e) {
                        var n = t.useContext(H);
                        return K(n, e);
                    },
                    V = function (e) {
                        var n = t.useContext(H),
                            r = t.useContext(L);
                        if (n && r) throw new Error("You cannot wrap the part of your app that ".concat(e, " in both <CheckoutProvider> and <Elements> providers."));
                        return n ? K(n, e) : F(r, e);
                    },
                    $ = function () {
                        Q("calls useCheckout()");
                        var e = t.useContext(Z);
                        if (!e) throw new Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
                        return e;
                    },
                    G = ["mode"],
                    J = function (e) {
                        return e.charAt(0).toUpperCase() + e.slice(1);
                    },
                    X = function (e, n) {
                        var r = "".concat(J(e), "Element"),
                            o = n
                                ? function (e) {
                                      V("mounts <".concat(r, ">"));
                                      var n = e.id,
                                          o = e.className;
                                      return t.createElement("div", { id: n, className: o });
                                  }
                                : function (n) {
                                      var o,
                                          i = n.id,
                                          u = n.className,
                                          l = n.options,
                                          s = void 0 === l ? {} : l,
                                          d = n.onBlur,
                                          p = n.onFocus,
                                          f = n.onReady,
                                          m = n.onChange,
                                          y = n.onEscape,
                                          h = n.onClick,
                                          v = n.onLoadError,
                                          b = n.onLoaderStart,
                                          E = n.onNetworksChange,
                                          S = n.onConfirm,
                                          g = n.onCancel,
                                          C = n.onShippingAddressChange,
                                          w = n.onShippingRateChange,
                                          P = V("mounts <".concat(r, ">")),
                                          j = "elements" in P ? P.elements : null,
                                          x = "checkoutSdk" in P ? P.checkoutSdk : null,
                                          R = c(t.useState(null), 2),
                                          I = R[0],
                                          _ = R[1],
                                          N = t.useRef(null),
                                          A = t.useRef(null);
                                      k(I, "blur", d),
                                          k(I, "focus", p),
                                          k(I, "escape", y),
                                          k(I, "click", h),
                                          k(I, "loaderror", v),
                                          k(I, "loaderstart", b),
                                          k(I, "networkschange", E),
                                          k(I, "confirm", S),
                                          k(I, "cancel", g),
                                          k(I, "shippingaddresschange", C),
                                          k(I, "shippingratechange", w),
                                          k(I, "change", m),
                                          f &&
                                              (o =
                                                  "expressCheckout" === e
                                                      ? f
                                                      : function () {
                                                            f(I);
                                                        }),
                                          k(I, "ready", o),
                                          t.useLayoutEffect(
                                              function () {
                                                  if (null === N.current && null !== A.current && (j || x)) {
                                                      var t = null;
                                                      if (x)
                                                          switch (e) {
                                                              case "payment":
                                                                  t = x.createPaymentElement(s);
                                                                  break;
                                                              case "address":
                                                                  if (!("mode" in s)) throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                                                                  var n = s.mode,
                                                                      o = a(s, G);
                                                                  if ("shipping" === n) t = x.createShippingAddressElement(o);
                                                                  else {
                                                                      if ("billing" !== n) throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                                                                      t = x.createBillingAddressElement(o);
                                                                  }
                                                                  break;
                                                              case "expressCheckout":
                                                                  t = x.createExpressCheckoutElement(s);
                                                                  break;
                                                              case "currencySelector":
                                                                  t = x.createCurrencySelectorElement();
                                                                  break;
                                                              default:
                                                                  throw new Error("Invalid Element type ".concat(r, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
                                                          }
                                                      else j && (t = j.create(e, s));
                                                      (N.current = t), _(t), t && t.mount(A.current);
                                                  }
                                              },
                                              [j, x, s],
                                          );
                                      var L = O(s);
                                      return (
                                          t.useEffect(
                                              function () {
                                                  if (N.current) {
                                                      var e = T(s, L, ["paymentRequest"]);
                                                      e && "update" in N.current && N.current.update(e);
                                                  }
                                              },
                                              [s, L],
                                          ),
                                          t.useLayoutEffect(function () {
                                              return function () {
                                                  if (N.current && "function" == typeof N.current.destroy)
                                                      try {
                                                          N.current.destroy(), (N.current = null);
                                                      } catch (e) {}
                                              };
                                          }, []),
                                          t.createElement("div", { id: i, className: u, ref: A })
                                      );
                                  };
                        return (o.propTypes = { id: C.string, className: C.string, onChange: C.func, onBlur: C.func, onFocus: C.func, onReady: C.func, onEscape: C.func, onClick: C.func, onLoadError: C.func, onLoaderStart: C.func, onNetworksChange: C.func, onConfirm: C.func, onCancel: C.func, onShippingAddressChange: C.func, onShippingRateChange: C.func, options: C.object }), (o.displayName = r), (o.__elementType = e), o;
                    },
                    ee = "undefined" == typeof window,
                    te = t.createContext(null);
                te.displayName = "EmbeddedCheckoutProviderContext";
                var ne = function () {
                        var e = t.useContext(te);
                        if (!e) throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
                        return e;
                    },
                    re = "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    oe = function (e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            i = t.useMemo(
                                function () {
                                    return N(n, re);
                                },
                                [n],
                            ),
                            u = t.useRef(null),
                            a = t.useRef(null),
                            l = c(t.useState({ embeddedCheckout: null }), 2),
                            s = l[0],
                            d = l[1];
                        t.useEffect(
                            function () {
                                if (!a.current && !u.current) {
                                    var e = function (e) {
                                        a.current ||
                                            u.current ||
                                            ((a.current = e),
                                            (u.current = a.current.initEmbeddedCheckout(r).then(function (e) {
                                                d({ embeddedCheckout: e });
                                            })));
                                    };
                                    "async" !== i.tag || a.current || (!r.clientSecret && !r.fetchClientSecret)
                                        ? "sync" !== i.tag || a.current || (!r.clientSecret && !r.fetchClientSecret) || e(i.stripe)
                                        : i.stripePromise.then(function (t) {
                                              t && e(t);
                                          });
                                }
                            },
                            [i, r, s, a],
                        ),
                            t.useEffect(
                                function () {
                                    return function () {
                                        s.embeddedCheckout
                                            ? ((u.current = null), s.embeddedCheckout.destroy())
                                            : u.current &&
                                              u.current.then(function () {
                                                  (u.current = null), s.embeddedCheckout && s.embeddedCheckout.destroy();
                                              });
                                    };
                                },
                                [s.embeddedCheckout],
                            ),
                            t.useEffect(
                                function () {
                                    A(a);
                                },
                                [a],
                            );
                        var p = O(n);
                        t.useEffect(function () {}, [p, n]);
                        var f = O(r);
                        return (
                            t.useEffect(
                                function () {
                                    null != f && null != r && (void 0 === r.clientSecret && r.fetchClientSecret, null != f.clientSecret && (r.clientSecret, f.clientSecret), null != f.fetchClientSecret && (r.fetchClientSecret, f.fetchClientSecret), null != f.onComplete && (r.onComplete, f.onComplete), null != f.onShippingDetailsChange && (r.onShippingDetailsChange, f.onShippingDetailsChange), null != f.onLineItemsChange && (r.onLineItemsChange, f.onLineItemsChange));
                                },
                                [f, r],
                            ),
                            t.createElement(te.Provider, { value: s }, o)
                        );
                    },
                    ie = function (e) {
                        var n = e.id,
                            r = e.className,
                            o = ne().embeddedCheckout,
                            i = t.useRef(!1),
                            u = t.useRef(null);
                        return (
                            t.useLayoutEffect(
                                function () {
                                    return (
                                        !i.current && o && null !== u.current && (o.mount(u.current), (i.current = !0)),
                                        function () {
                                            if (i.current && o)
                                                try {
                                                    o.unmount(), (i.current = !1);
                                                } catch (e) {}
                                        }
                                    );
                                },
                                [o],
                            ),
                            t.createElement("div", { ref: u, id: n, className: r })
                        );
                    },
                    ue = function (e) {
                        var n = e.id,
                            r = e.className;
                        return ne(), t.createElement("div", { id: n, className: r });
                    },
                    ae = ee ? ue : ie,
                    ce = function () {
                        return V("calls useStripe()").stripe;
                    },
                    le = X("auBankAccount", ee),
                    se = X("card", ee),
                    de = X("cardNumber", ee),
                    pe = X("cardExpiry", ee),
                    fe = X("cardCvc", ee),
                    me = X("fpxBank", ee),
                    ye = X("iban", ee),
                    he = X("idealBank", ee),
                    ve = X("p24Bank", ee),
                    be = X("epsBank", ee),
                    Ee = X("payment", ee),
                    Se = X("expressCheckout", ee),
                    ge = X("currencySelector", ee),
                    Ce = X("paymentRequestButton", ee),
                    ke = X("linkAuthentication", ee),
                    Oe = X("address", ee),
                    we = X("shippingAddress", ee),
                    Pe = X("paymentMethodMessaging", ee),
                    je = X("affirmMessage", ee),
                    xe = X("afterpayClearpayMessage", ee);
                (e.AddressElement = Oe), (e.AffirmMessageElement = je), (e.AfterpayClearpayMessageElement = xe), (e.AuBankAccountElement = le), (e.CardCvcElement = fe), (e.CardElement = se), (e.CardExpiryElement = pe), (e.CardNumberElement = de), (e.CheckoutProvider = z), (e.CurrencySelectorElement = ge), (e.Elements = M), (e.ElementsConsumer = q), (e.EmbeddedCheckout = ae), (e.EmbeddedCheckoutProvider = oe), (e.EpsBankElement = be), (e.ExpressCheckoutElement = Se), (e.FpxBankElement = me), (e.IbanElement = ye), (e.IdealBankElement = he), (e.LinkAuthenticationElement = ke), (e.P24BankElement = ve), (e.PaymentElement = Ee), (e.PaymentMethodMessagingElement = Pe), (e.PaymentRequestButtonElement = Ce), (e.ShippingAddressElement = we), (e.useCheckout = $), (e.useElements = B), (e.useStripe = ce);
            })(t, n(202784));
        },
        85160: (e, t) => {
            "use strict";
            function n(e) {
                return (
                    (n =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    n(e)
                );
            }
            var r,
                o = "basil",
                i = "https://js.stripe.com",
                u = "".concat(i, "/").concat(o, "/stripe.js"),
                a = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                c = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
                l = function (e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        n = document.createElement("script");
                    n.src = "".concat(u).concat(t);
                    var r = document.head || document.body;
                    if (!r) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return r.appendChild(n), n;
                },
                s = null,
                d = null,
                p = null,
                f = function (e) {
                    return null !== s
                        ? s
                        : (s = new Promise(function (t, n) {
                              if ("undefined" != typeof window && "undefined" != typeof document)
                                  if ((window.Stripe, window.Stripe)) t(window.Stripe);
                                  else
                                      try {
                                          var r = (function () {
                                              for (var e, t = document.querySelectorAll('script[src^="'.concat(i, '"]')), n = 0; n < t.length; n++) {
                                                  var r = t[n];
                                                  if (((e = r.src), a.test(e) || c.test(e))) return r;
                                              }
                                              return null;
                                          })();
                                          if (r && e);
                                          else if (r) {
                                              if (r && null !== p && null !== d) {
                                                  var o;
                                                  r.removeEventListener("load", p), r.removeEventListener("error", d), null === (o = r.parentNode) || void 0 === o || o.removeChild(r), (r = l(e));
                                              }
                                          } else r = l(e);
                                          (p = (function (e, t) {
                                              return function () {
                                                  window.Stripe ? e(window.Stripe) : t(new Error("Stripe.js not available"));
                                              };
                                          })(t, n)),
                                              (d = (function (e) {
                                                  return function (t) {
                                                      e(new Error("Failed to load Stripe.js", { cause: t }));
                                                  };
                                              })(n)),
                                              r.addEventListener("load", p),
                                              r.addEventListener("error", d);
                                      } catch (e) {
                                          return void n(e);
                                      }
                              else t(null);
                          })).catch(function (e) {
                              return (s = null), Promise.reject(e);
                          });
                },
                m = function (e) {
                    var t = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== n(e)) throw new Error(t);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw new Error(t);
                },
                y = !1,
                h = function () {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    y = !0;
                    var o = Date.now();
                    return f(r).then(function (e) {
                        return (function (e, t, n) {
                            if (null === e) return null;
                            t[0].match(/^pk_test/), e.version;
                            var r = e.apply(void 0, t);
                            return (
                                (function (e, t) {
                                    e && e._registerWrapper && e._registerWrapper({ name: "stripe-js", version: "7.2.0", startTime: t });
                                })(r, n),
                                r
                            );
                        })(e, t, o);
                    });
                };
            (h.setLoadParameters = function (e) {
                if (y && r) {
                    var t = m(e);
                    if (
                        Object.keys(t).reduce(function (t, n) {
                            var o;
                            return t && e[n] === (null === (o = r) || void 0 === o ? void 0 : o[n]);
                        }, !0)
                    )
                        return;
                }
                if (y) throw new Error("You cannot change load parameters after calling loadStripe");
                r = m(e);
            }),
                (t.loadStripe = h);
        },
        497366: (e, t, n) => {
            e.exports = n(85160);
        },
        3348: (e, t, n) => {
            "use strict";
            n.d(t, { Z: () => g });
            var r = n(202784),
                o = n(890601),
                i = n(730464),
                u = n(389641),
                a = n(317709),
                c = n(156905),
                l = n(752778),
                s = n(805719),
                d = n(111453),
                p = n(981040),
                f = n(297689),
                m = n(901736),
                y = n(180612),
                h = (e, t) => {
                    if (
                        ((e, t) => {
                            var n = e.selectionEnd,
                                r = e.selectionStart,
                                o = t.start,
                                i = t.end;
                            return o !== r || i !== n;
                        })(e, t)
                    ) {
                        var n = t.start,
                            r = t.end;
                        try {
                            e.setSelectionRange(n, r || n);
                        } catch (e) {}
                    }
                },
                v = Object.assign({}, i.lG, i.LO, i._T, i.YB, i.Uy, i.hJ, i.E5, i.vr, { autoCapitalize: !0, autoComplete: !0, autoCorrect: !0, autoFocus: !0, defaultValue: !0, disabled: !0, lang: !0, maxLength: !0, onChange: !0, onScroll: !0, placeholder: !0, pointerEvents: !0, readOnly: !0, rows: !0, spellCheck: !0, value: !0, type: !0 });
            var b = null,
                E = r.forwardRef((e, t) => {
                    var n,
                        i,
                        f = e.autoCapitalize,
                        E = void 0 === f ? "sentences" : f,
                        g = e.autoComplete,
                        C = e.autoCompleteType,
                        k = e.autoCorrect,
                        O = void 0 === k || k,
                        w = e.blurOnSubmit,
                        P = e.caretHidden,
                        j = e.clearTextOnFocus,
                        x = e.dir,
                        R = e.editable,
                        T = e.enterKeyHint,
                        I = e.inputMode,
                        _ = e.keyboardType,
                        N = e.multiline,
                        A = void 0 !== N && N,
                        L = e.numberOfLines,
                        F = e.onBlur,
                        M = e.onChange,
                        D = e.onChangeText,
                        B = e.onContentSizeChange,
                        q = e.onFocus,
                        U = e.onKeyPress,
                        H = e.onLayout,
                        K = e.onMoveShouldSetResponder,
                        Z = e.onMoveShouldSetResponderCapture,
                        Y = e.onResponderEnd,
                        W = e.onResponderGrant,
                        z = e.onResponderMove,
                        Q = e.onResponderReject,
                        V = e.onResponderRelease,
                        $ = e.onResponderStart,
                        G = e.onResponderTerminate,
                        J = e.onResponderTerminationRequest,
                        X = e.onScrollShouldSetResponder,
                        ee = e.onScrollShouldSetResponderCapture,
                        te = e.onSelectionChange,
                        ne = e.onSelectionChangeShouldSetResponder,
                        re = e.onSelectionChangeShouldSetResponderCapture,
                        oe = e.onStartShouldSetResponder,
                        ie = e.onStartShouldSetResponderCapture,
                        ue = e.onSubmitEditing,
                        ae = e.placeholderTextColor,
                        ce = e.readOnly,
                        le = void 0 !== ce && ce,
                        se = e.returnKeyType,
                        de = e.rows,
                        pe = e.secureTextEntry,
                        fe = void 0 !== pe && pe,
                        me = e.selection,
                        ye = e.selectTextOnFocus,
                        he = e.showSoftInputOnFocus,
                        ve = e.spellCheck;
                    if (null != I) (i = I), (n = "email" === I ? "email" : "tel" === I ? "tel" : "search" === I ? "search" : "url" === I ? "url" : "text");
                    else if (null != _)
                        switch (((0, y.O)("keyboardType", "keyboardType is deprecated. Use inputMode."), _)) {
                            case "email-address":
                                n = "email";
                                break;
                            case "number-pad":
                            case "numeric":
                                i = "numeric";
                                break;
                            case "decimal-pad":
                                i = "decimal";
                                break;
                            case "phone-pad":
                                n = "tel";
                                break;
                            case "search":
                            case "web-search":
                                n = "search";
                                break;
                            case "url":
                                n = "url";
                                break;
                            default:
                                n = "text";
                        }
                    fe && (n = "password");
                    var be = r.useRef({ height: null, width: null }),
                        Ee = r.useRef(null),
                        Se = r.useRef(null),
                        ge = r.useRef(!1);
                    r.useEffect(() => {
                        Ee.current && Se.current && h(Ee.current, Se.current), (ge.current = fe);
                    }, [fe]);
                    var Ce = r.useCallback(
                            (e) => {
                                if (A && B && null != e) {
                                    var t = e.scrollHeight,
                                        n = e.scrollWidth;
                                    (t === be.current.height && n === be.current.width) || ((be.current.height = t), (be.current.width = n), B({ nativeEvent: { contentSize: { height: be.current.height, width: be.current.width } } }));
                                }
                            },
                            [A, B],
                        ),
                        ke = r.useMemo(
                            () => (e) => {
                                null != e &&
                                    ((e.clear = function () {
                                        null != e && (e.value = "");
                                    }),
                                    (e.isFocused = function () {
                                        return null != e && m.Z.currentlyFocusedField() === e;
                                    }),
                                    Ce(e));
                            },
                            [Ce],
                        );
                    (0, c.Z)(() => {
                        var e = Ee.current;
                        null != e && null != me && h(e, me), document.activeElement === e && (m.Z._currentlyFocusedNode = e);
                    }, [Ee, me]);
                    var Oe = A ? "textarea" : "input";
                    (0, a.Z)(Ee, H), (0, d.Z)(Ee, { onMoveShouldSetResponder: K, onMoveShouldSetResponderCapture: Z, onResponderEnd: Y, onResponderGrant: W, onResponderMove: z, onResponderReject: Q, onResponderRelease: V, onResponderStart: $, onResponderTerminate: G, onResponderTerminationRequest: J, onScrollShouldSetResponder: X, onScrollShouldSetResponderCapture: ee, onSelectionChangeShouldSetResponder: ne, onSelectionChangeShouldSetResponderCapture: re, onStartShouldSetResponder: oe, onStartShouldSetResponderCapture: ie });
                    var we = (0, p.PE)().direction,
                        Pe = ((e) => (0, u.Z)(e, v))(e);
                    (Pe.autoCapitalize = E),
                        (Pe.autoComplete = g || C || "on"),
                        (Pe.autoCorrect = O ? "on" : "off"),
                        (Pe.dir = void 0 !== x ? x : "auto"),
                        null != se && (0, y.O)("returnKeyType", "returnKeyType is deprecated. Use enterKeyHint."),
                        (Pe.enterKeyHint = T || se),
                        (Pe.inputMode = i),
                        (Pe.onBlur = function (e) {
                            (m.Z._currentlyFocusedNode = null), F && ((e.nativeEvent.text = e.target.value), F(e));
                        }),
                        (Pe.onChange = function (e) {
                            var t = e.target,
                                n = t.value;
                            (e.nativeEvent.text = n), Ce(t), M && M(e), D && D(n);
                        }),
                        (Pe.onFocus = function (e) {
                            var t = e.target;
                            q && ((e.nativeEvent.text = t.value), q(e)),
                                null != t &&
                                    ((m.Z._currentlyFocusedNode = t),
                                    j && (t.value = ""),
                                    ye &&
                                        (null != b && clearTimeout(b),
                                        (b = setTimeout(() => {
                                            null != t && t.select();
                                        }, 0))));
                        }),
                        (Pe.onKeyDown = function (e) {
                            var t = e.target;
                            e.stopPropagation();
                            var n = null == w ? !A : w,
                                r = e.nativeEvent,
                                o = (function (e) {
                                    return e.isComposing || 229 === e.keyCode;
                                })(r);
                            U && U(e), "Enter" !== e.key || e.shiftKey || o || e.isDefaultPrevented() || ((!w && A) || !ue || (e.preventDefault(), (r.text = e.target.value), ue(e)), n && null != t && setTimeout(() => t.blur(), 0));
                        }),
                        (Pe.onSelect = function (e) {
                            try {
                                var t = e.target,
                                    n = { start: t.selectionStart, end: t.selectionEnd };
                                te && ((e.nativeEvent.selection = n), (e.nativeEvent.text = e.target.value), te(e)), ge.current === fe && (Se.current = n);
                            } catch (e) {}
                        }),
                        null != R && (0, y.O)("editable", "editable is deprecated. Use readOnly."),
                        (Pe.readOnly = !0 === le || !1 === R),
                        null != L && (0, y.O)("numberOfLines", "TextInput numberOfLines is deprecated. Use rows."),
                        (Pe.rows = A ? (null != de ? de : L) : 1),
                        (Pe.spellCheck = null != ve ? ve : O),
                        (Pe.style = [{ "--placeholderTextColor": ae }, S.textinput$raw, S.placeholder, e.style, P && S.caretHidden]),
                        (Pe.type = A ? void 0 : n),
                        (Pe.virtualkeyboardpolicy = !1 === he ? "manual" : "auto");
                    var je = (0, s.Z)(Pe),
                        xe = (0, l.Z)(Ee, je, ke, t);
                    Pe.ref = xe;
                    var Re = null != e.lang ? (0, p.w1)(e.lang) : null,
                        Te = e.dir || Re || we;
                    return (0, o.Z)(Oe, Pe, { writingDirection: Te });
                });
            (E.displayName = "TextInput"), (E.State = m.Z);
            var S = f.Z.create({ textinput$raw: { MozAppearance: "textfield", WebkitAppearance: "none", backgroundColor: "transparent", border: "0 solid black", borderRadius: 0, boxSizing: "border-box", font: "14px System", margin: 0, padding: 0, resize: "none" }, placeholder: { placeholderTextColor: "var(--placeholderTextColor)" }, caretHidden: { caretColor: "transparent" } });
            const g = E;
        },
        40567: function (e, t, n) {
            !(function (e, t) {
                "use strict";
                var r = "default" in t ? t.default : t;
                function o(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        t &&
                            (r = r.filter(function (t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable;
                            })),
                            n.push.apply(n, r);
                    }
                    return n;
                }
                function i(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                            ? o(Object(n), !0).forEach(function (t) {
                                  u(e, t, n[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                              : o(Object(n)).forEach(function (t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                                });
                    }
                    return e;
                }
                function u(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
                }
                function a(e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
                    return o;
                }
                function c(e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        o = a(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                    }
                    return o;
                }
                function l(e, t) {
                    return s(e) || d(e, t) || p(e, t) || m();
                }
                function s(e) {
                    if (Array.isArray(e)) return e;
                }
                function d(e, t) {
                    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                        var r,
                            o,
                            i = [],
                            u = !0,
                            a = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
                        } catch (e) {
                            (a = !0), (o = e);
                        } finally {
                            try {
                                u || null == n.return || n.return();
                            } finally {
                                if (a) throw o;
                            }
                        }
                        return i;
                    }
                }
                function p(e, t) {
                    if (e) {
                        if ("string" == typeof e) return f(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
                    }
                }
                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                    return r;
                }
                function m() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var y = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : {};
                function h(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                }
                function v(e, t) {
                    return e((t = { exports: {} }), t.exports), t.exports;
                }
                var b = v(function (e, t) {
                    var n =
                        (y && y.__rest) ||
                        function (e, t) {
                            var n = {};
                            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                            if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
                                var o = 0;
                                for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
                            }
                            return n;
                        };
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.scripts = void 0), (t.scripts = {});
                    var o = function (e) {
                        var n = document.querySelector('script[src="' + e + '"]');
                        if (n) return (t.scripts[e] = { loading: !1, error: null, scriptEl: n });
                    };
                    function i(e) {
                        var i = e.src,
                            a = e.checkForExisting,
                            c = void 0 !== a && a,
                            l = n(e, ["src", "checkForExisting"]),
                            s = i ? t.scripts[i] : void 0;
                        !s && c && i && u && (s = o(i));
                        var d = (0, r.useState)(s ? s.loading : Boolean(i)),
                            p = d[0],
                            f = d[1],
                            m = (0, r.useState)(s ? s.error : null),
                            y = m[0],
                            h = m[1];
                        return (
                            (0, r.useEffect)(
                                function () {
                                    if (u && i && p && !y) {
                                        var e;
                                        !(s = t.scripts[i]) && c && (s = o(i)),
                                            s
                                                ? (e = s.scriptEl)
                                                : (((e = document.createElement("script")).src = i),
                                                  Object.keys(l).forEach(function (t) {
                                                      void 0 === e[t] ? e.setAttribute(t, l[t]) : (e[t] = l[t]);
                                                  }),
                                                  (s = t.scripts[i] = { loading: !0, error: null, scriptEl: e }));
                                        var n = function () {
                                                s && (s.loading = !1), f(!1);
                                            },
                                            r = function (e) {
                                                s && (s.error = e), h(e);
                                            };
                                        return (
                                            e.addEventListener("load", n),
                                            e.addEventListener("error", r),
                                            document.body.appendChild(e),
                                            function () {
                                                e.removeEventListener("load", n), e.removeEventListener("error", r);
                                            }
                                        );
                                    }
                                },
                                [i],
                            ),
                            [p, y]
                        );
                    }
                    t.default = i;
                    var u = "undefined" != typeof window && void 0 !== window.document;
                });
                h(b), b.scripts;
                var E = v(function (e, t) {
                        var n =
                            (y && y.__importDefault) ||
                            function (e) {
                                return e && e.__esModule ? e : { default: e };
                            };
                        Object.defineProperty(t, "__esModule", { value: !0 }),
                            (t.scripts = t.default = void 0),
                            Object.defineProperty(t, "default", {
                                enumerable: !0,
                                get: function () {
                                    return n(b).default;
                                },
                            }),
                            Object.defineProperty(t, "scripts", {
                                enumerable: !0,
                                get: function () {
                                    return b.scripts;
                                },
                            });
                    }),
                    S = h(E),
                    g =
                        (E.scripts,
                        function (e, t, n) {
                            var r = {};
                            return delete Object.assign(r, e, u({}, n, e[t]))[t], r;
                        }),
                    C = function (e, t) {
                        var n = { plaid: null, open: !1, onExitCallback: null };
                        if ("undefined" == typeof window || !window.Plaid) throw new Error("Plaid not loaded");
                        return (
                            (n.plaid = t(
                                i(
                                    i({}, e),
                                    {},
                                    {
                                        onExit: function (t, r) {
                                            (n.open = !1), e.onExit && e.onExit(t, r), n.onExitCallback && n.onExitCallback();
                                        },
                                    },
                                ),
                            )),
                            {
                                open: function () {
                                    n.plaid && ((n.open = !0), (n.onExitCallback = null), n.plaid.open());
                                },
                                exit: function (e, t) {
                                    n.open && n.plaid ? ((n.onExitCallback = t), n.plaid.exit(e), e && e.force && (n.open = !1)) : t && t();
                                },
                                destroy: function () {
                                    n.plaid && (n.plaid.destroy(), (n.plaid = null));
                                },
                            }
                        );
                    },
                    k = function (e, t) {
                        var n = g(e, "publicKey", "key");
                        return C(n, t);
                    },
                    O = "https://cdn.plaid.com/link/v2/stable/link-initialize.js",
                    w = function () {},
                    P = function (e) {
                        var n = l(S({ src: O, checkForExisting: !0 }), 2),
                            r = n[0],
                            o = n[1],
                            u = l(t.useState(null), 2),
                            a = u[0],
                            c = u[1],
                            s = l(t.useState(!1), 2),
                            d = s[0],
                            p = s[1],
                            f = (e.product || []).slice().sort().join(",");
                        t.useEffect(
                            function () {
                                if (!r && (e.token || e.publicKey || e.receivedRedirectUri) && !o && window.Plaid) {
                                    null != a &&
                                        a.exit({ force: !0 }, function () {
                                            return a.destroy();
                                        });
                                    var t = k(
                                        i(
                                            i({}, e),
                                            {},
                                            {
                                                onLoad: function () {
                                                    p(!0), e.onLoad && e.onLoad();
                                                },
                                            },
                                        ),
                                        window.Plaid.create,
                                    );
                                    return (
                                        c(t),
                                        function () {
                                            return t.exit({ force: !0 }, function () {
                                                return t.destroy();
                                            });
                                        }
                                    );
                                }
                            },
                            [r, o, e.publicKey, e.token, f],
                        );
                        var m = function () {
                            e.token;
                        };
                        return { error: o, ready: null != a && (!r || d), exit: a ? a.exit : w, open: a ? a.open : m };
                    },
                    j = ["children", "style", "className"],
                    x = function (e) {
                        var t = e.children,
                            n = e.style,
                            o = e.className,
                            u = c(e, j),
                            a = P(i({}, u)),
                            l = a.error,
                            s = a.open;
                        return r.createElement(
                            "button",
                            {
                                disabled: Boolean(l),
                                type: "button",
                                className: o,
                                style: i({ padding: "6px 4px", outline: "none", background: "#FFFFFF", border: "2px solid #F1F1F1", borderRadius: "4px" }, n),
                                onClick: function () {
                                    return s();
                                },
                            },
                            t,
                        );
                    };
                x.displayName = "PlaidLink";
                var R,
                    T = ["style", "className"],
                    I = function (e) {
                        var n = e.style,
                            o = e.className,
                            u = c(e, T),
                            a = l(S({ src: O, checkForExisting: !0 }), 2),
                            s = a[0],
                            d = a[1],
                            p = t.useRef(null);
                        return (
                            t.useEffect(
                                function () {
                                    if (!s && !d && window.Plaid && null != u.token && "" != u.token) {
                                        var e = window.Plaid.createEmbedded(i({}, u), p.current).destroy;
                                        return function () {
                                            e();
                                        };
                                    }
                                },
                                [s, d, u, p],
                            ),
                            r.createElement("div", { style: n, className: o, ref: p })
                        );
                    };
                ((R = e.PlaidLinkStableEvent || (e.PlaidLinkStableEvent = {})).OPEN = "OPEN"), (R.EXIT = "EXIT"), (R.HANDOFF = "HANDOFF"), (R.SELECT_INSTITUTION = "SELECT_INSTITUTION"), (R.ERROR = "ERROR"), (R.BANK_INCOME_INSIGHTS_COMPLETED = "BANK_INCOME_INSIGHTS_COMPLETED"), (R.IDENTITY_VERIFICATION_PASS_SESSION = "IDENTITY_VERIFICATION_PASS_SESSION"), (R.IDENTITY_VERIFICATION_FAIL_SESSION = "IDENTITY_VERIFICATION_FAIL_SESSION"), (e.PlaidEmbeddedLink = I), (e.PlaidLink = x), (e.usePlaidLink = P), Object.defineProperty(e, "__esModule", { value: !0 });
            })(t, n(202784));
        },
        500200: (e, t, n) => {
            "use strict";
            var r = n(588386),
                o = n(151210),
                i = n(606161).loadQuery,
                u = n(982317),
                a = n(490434),
                c = n(265933),
                l = n(277660),
                s = n(712696),
                d = n(351743),
                p = n(598),
                f = n(928123),
                m = n(72845),
                y = n(463836),
                h = n(437429),
                v = n(353391),
                b = n(19663),
                E = n(703383);
            e.exports = { ConnectionHandler: E.ConnectionHandler, applyOptimisticMutation: E.applyOptimisticMutation, commitLocalUpdate: E.commitLocalUpdate, commitMutation: E.commitMutation, graphql: E.graphql, readInlineData: E.readInlineData, requestSubscription: E.requestSubscription, EntryPointContainer: r, RelayEnvironmentProvider: a, ProfilerContext: u, fetchQuery: E.fetchQuery, loadQuery: i, loadEntryPoint: o, useFragment: l, useLazyLoadQuery: s, useEntryPointLoader: c, useQueryLoader: m, useMutation: d, usePaginationFragment: p, usePreloadedQuery: f, useRefetchableFragment: y, useRelayEnvironment: h, useSubscribeToInvalidationState: v, useSubscription: b };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-27545368.c1f5419a.js.map
