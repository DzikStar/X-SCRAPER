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
                function c(e, t) {
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
                function a(e, t) {
                    return s(e) || l(e, t) || f(e, t) || d();
                }
                function s(e) {
                    if (Array.isArray(e)) return e;
                }
                function l(e, t) {
                    var n = e && (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
                    if (null != n) {
                        var r,
                            o,
                            i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
                        } catch (e) {
                            (c = !0), (o = e);
                        } finally {
                            try {
                                u || null == n.return || n.return();
                            } finally {
                                if (c) throw o;
                            }
                        }
                        return i;
                    }
                }
                function f(e, t) {
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
                function d() {
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
                function g() {
                    return h ? y : ((h = 1), (y = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
                }
                function S() {
                    if (b) return v;
                    b = 1;
                    var e = g();
                    function t() {}
                    function n() {}
                    return (
                        (n.resetWarningCache = t),
                        (v = function () {
                            function r(t, n, r, o, i, u) {
                                if (u !== e) {
                                    var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                    throw ((c.name = "Invariant Violation"), c);
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
                E.exports = S()();
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
                    I = function e(t, n) {
                        if (!w(t) || !w(n)) return t === n;
                        var r = Array.isArray(t);
                        if (r !== Array.isArray(n)) return !1;
                        var o = Object.prototype.toString.call(t) === x;
                        if (o !== (Object.prototype.toString.call(n) === x)) return !1;
                        if (!o && !r) return t === n;
                        var i = Object.keys(t),
                            u = Object.keys(n);
                        if (i.length !== u.length) return !1;
                        for (var c = {}, a = 0; a < i.length; a += 1) c[i[a]] = !0;
                        for (var s = 0; s < u.length; s += 1) c[u[s]] = !0;
                        var l = Object.keys(c);
                        if (l.length !== i.length) return !1;
                        var f = t,
                            p = n,
                            d = function (t) {
                                return e(f[t], p[t]);
                            };
                        return l.every(d);
                    },
                    _ = function (e, t, n) {
                        return w(e)
                            ? Object.keys(e).reduce(function (o, u) {
                                  var c = !w(t) || !I(e[u], t[u]);
                                  return n.includes(u) ? o : c ? r(r({}, o || {}), {}, i({}, u, e[u])) : o;
                              }, null)
                            : null;
                    },
                    N = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    A = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
                        if (null === e || j(e)) return e;
                        throw new Error(t);
                    },
                    T = function (e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
                        if (P(e))
                            return {
                                tag: "async",
                                stripePromise: Promise.resolve(e).then(function (e) {
                                    return A(e, t);
                                }),
                            };
                        var n = A(e, t);
                        return null === n ? { tag: "empty" } : { tag: "sync", stripe: n };
                    },
                    L = function (e) {
                        e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({ name: "react-stripe-js", version: "3.6.0" }), e.registerAppInfo({ name: "react-stripe-js", version: "3.6.0", url: "https://stripe.com/docs/stripe-js/react" }));
                    },
                    R = t.createContext(null);
                R.displayName = "ElementsContext";
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
                                    return T(n);
                                },
                                [n],
                            ),
                            u = a(
                                t.useState(function () {
                                    return { stripe: "sync" === i.tag ? i.stripe : null, elements: "sync" === i.tag ? i.stripe.elements(r) : null };
                                }),
                                2,
                            ),
                            c = u[0],
                            s = u[1];
                        t.useEffect(
                            function () {
                                var e = !0,
                                    t = function (e) {
                                        s(function (t) {
                                            return t.stripe ? t : { stripe: e, elements: e.elements(r) };
                                        });
                                    };
                                return (
                                    "async" !== i.tag || c.stripe
                                        ? "sync" !== i.tag || c.stripe || t(i.stripe)
                                        : i.stripePromise.then(function (n) {
                                              n && e && t(n);
                                          }),
                                    function () {
                                        e = !1;
                                    }
                                );
                            },
                            [i, c, r],
                        );
                        var l = O(n);
                        t.useEffect(function () {}, [l, n]);
                        var f = O(r);
                        return (
                            t.useEffect(
                                function () {
                                    if (c.elements) {
                                        var e = _(r, f, ["clientSecret", "fonts"]);
                                        e && c.elements.update(e);
                                    }
                                },
                                [r, f, c.elements],
                            ),
                            t.useEffect(
                                function () {
                                    L(c.stripe);
                                },
                                [c.stripe],
                            ),
                            t.createElement(R.Provider, { value: c }, o)
                        );
                    };
                M.propTypes = { stripe: C.any, options: C.object };
                var D = function (e) {
                        var n = t.useContext(R);
                        return F(n, e);
                    },
                    B = function () {
                        return D("calls useElements()").elements;
                    },
                    q = function (e) {
                        return (0, e.children)(D("mounts <ElementsConsumer>"));
                    };
                q.propTypes = { children: C.func.isRequired };
                var Y = ["on", "session"],
                    U = t.createContext(null);
                U.displayName = "CheckoutSdkContext";
                var W = function (e, t) {
                        if (!e) throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(t, " in an <CheckoutProvider> provider."));
                        return e;
                    },
                    H = t.createContext(null);
                H.displayName = "CheckoutContext";
                var Q = function (e, t) {
                        if (!e) return null;
                        e.on, e.session;
                        var n = c(e, Y);
                        return t ? Object.assign(t, n) : Object.assign(e.session(), n);
                    },
                    K = "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    V = function (e) {
                        var n = e.stripe,
                            r = e.options,
                            o = e.children,
                            i = t.useMemo(
                                function () {
                                    return T(n, K);
                                },
                                [n],
                            ),
                            u = a(t.useState(null), 2),
                            c = u[0],
                            s = u[1],
                            l = a(
                                t.useState(function () {
                                    return { stripe: "sync" === i.tag ? i.stripe : null, checkoutSdk: null };
                                }),
                                2,
                            ),
                            f = l[0],
                            p = l[1],
                            d = function (e, t) {
                                p(function (n) {
                                    return n.stripe && n.checkoutSdk ? n : { stripe: e, checkoutSdk: t };
                                });
                            },
                            m = t.useRef(!1);
                        t.useEffect(
                            function () {
                                var e = !0;
                                return (
                                    "async" !== i.tag || f.stripe
                                        ? "sync" === i.tag &&
                                          i.stripe &&
                                          !m.current &&
                                          ((m.current = !0),
                                          i.stripe.initCheckout(r).then(function (e) {
                                              e && (d(i.stripe, e), e.on("change", s));
                                          }))
                                        : i.stripePromise.then(function (t) {
                                              t &&
                                                  e &&
                                                  !m.current &&
                                                  ((m.current = !0),
                                                  t.initCheckout(r).then(function (e) {
                                                      e && (d(t, e), e.on("change", s));
                                                  }));
                                          }),
                                    function () {
                                        e = !1;
                                    }
                                );
                            },
                            [i, f, r, s],
                        );
                        var y = O(n);
                        t.useEffect(function () {}, [y, n]);
                        var h = O(r);
                        t.useEffect(
                            function () {
                                var e, t;
                                if (f.checkoutSdk) {
                                    var n = null == h || null === (e = h.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                                        o = null == r || null === (t = r.elementsOptions) || void 0 === t ? void 0 : t.appearance;
                                    o && !I(o, n) && f.checkoutSdk.changeAppearance(o);
                                }
                            },
                            [r, h, f.checkoutSdk],
                        ),
                            t.useEffect(
                                function () {
                                    L(f.stripe);
                                },
                                [f.stripe],
                            );
                        var v = t.useMemo(
                            function () {
                                return Q(f.checkoutSdk, c);
                            },
                            [f.checkoutSdk, c],
                        );
                        return f.checkoutSdk ? t.createElement(U.Provider, { value: f }, t.createElement(H.Provider, { value: v }, o)) : null;
                    };
                V.propTypes = { stripe: C.any, options: C.shape({ fetchClientSecret: C.func.isRequired, elementsOptions: C.object }).isRequired };
                var $ = function (e) {
                        var n = t.useContext(U);
                        return W(n, e);
                    },
                    z = function (e) {
                        var n = t.useContext(U),
                            r = t.useContext(R);
                        if (n && r) throw new Error("You cannot wrap the part of your app that ".concat(e, " in both <CheckoutProvider> and <Elements> providers."));
                        return n ? W(n, e) : F(r, e);
                    },
                    G = function () {
                        $("calls useCheckout()");
                        var e = t.useContext(H);
                        if (!e) throw new Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
                        return e;
                    },
                    X = ["mode"],
                    J = function (e) {
                        return e.charAt(0).toUpperCase() + e.slice(1);
                    },
                    Z = function (e, n) {
                        var r = "".concat(J(e), "Element"),
                            o = n
                                ? function (e) {
                                      z("mounts <".concat(r, ">"));
                                      var n = e.id,
                                          o = e.className;
                                      return t.createElement("div", { id: n, className: o });
                                  }
                                : function (n) {
                                      var o,
                                          i = n.id,
                                          u = n.className,
                                          s = n.options,
                                          l = void 0 === s ? {} : s,
                                          f = n.onBlur,
                                          p = n.onFocus,
                                          d = n.onReady,
                                          m = n.onChange,
                                          y = n.onEscape,
                                          h = n.onClick,
                                          v = n.onLoadError,
                                          b = n.onLoaderStart,
                                          E = n.onNetworksChange,
                                          g = n.onConfirm,
                                          S = n.onCancel,
                                          C = n.onShippingAddressChange,
                                          w = n.onShippingRateChange,
                                          P = z("mounts <".concat(r, ">")),
                                          j = "elements" in P ? P.elements : null,
                                          x = "checkoutSdk" in P ? P.checkoutSdk : null,
                                          I = a(t.useState(null), 2),
                                          N = I[0],
                                          A = I[1],
                                          T = t.useRef(null),
                                          L = t.useRef(null);
                                      k(N, "blur", f),
                                          k(N, "focus", p),
                                          k(N, "escape", y),
                                          k(N, "click", h),
                                          k(N, "loaderror", v),
                                          k(N, "loaderstart", b),
                                          k(N, "networkschange", E),
                                          k(N, "confirm", g),
                                          k(N, "cancel", S),
                                          k(N, "shippingaddresschange", C),
                                          k(N, "shippingratechange", w),
                                          k(N, "change", m),
                                          d &&
                                              (o =
                                                  "expressCheckout" === e
                                                      ? d
                                                      : function () {
                                                            d(N);
                                                        }),
                                          k(N, "ready", o),
                                          t.useLayoutEffect(
                                              function () {
                                                  if (null === T.current && null !== L.current && (j || x)) {
                                                      var t = null;
                                                      if (x)
                                                          switch (e) {
                                                              case "payment":
                                                                  t = x.createPaymentElement(l);
                                                                  break;
                                                              case "address":
                                                                  if (!("mode" in l)) throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                                                                  var n = l.mode,
                                                                      o = c(l, X);
                                                                  if ("shipping" === n) t = x.createShippingAddressElement(o);
                                                                  else {
                                                                      if ("billing" !== n) throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                                                                      t = x.createBillingAddressElement(o);
                                                                  }
                                                                  break;
                                                              case "expressCheckout":
                                                                  t = x.createExpressCheckoutElement(l);
                                                                  break;
                                                              case "currencySelector":
                                                                  t = x.createCurrencySelectorElement();
                                                                  break;
                                                              default:
                                                                  throw new Error("Invalid Element type ".concat(r, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
                                                          }
                                                      else j && (t = j.create(e, l));
                                                      (T.current = t), A(t), t && t.mount(L.current);
                                                  }
                                              },
                                              [j, x, l],
                                          );
                                      var R = O(l);
                                      return (
                                          t.useEffect(
                                              function () {
                                                  if (T.current) {
                                                      var e = _(l, R, ["paymentRequest"]);
                                                      e && "update" in T.current && T.current.update(e);
                                                  }
                                              },
                                              [l, R],
                                          ),
                                          t.useLayoutEffect(function () {
                                              return function () {
                                                  if (T.current && "function" == typeof T.current.destroy)
                                                      try {
                                                          T.current.destroy(), (T.current = null);
                                                      } catch (e) {}
                                              };
                                          }, []),
                                          t.createElement("div", { id: i, className: u, ref: L })
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
                                    return T(n, re);
                                },
                                [n],
                            ),
                            u = t.useRef(null),
                            c = t.useRef(null),
                            s = a(t.useState({ embeddedCheckout: null }), 2),
                            l = s[0],
                            f = s[1];
                        t.useEffect(
                            function () {
                                if (!c.current && !u.current) {
                                    var e = function (e) {
                                        c.current ||
                                            u.current ||
                                            ((c.current = e),
                                            (u.current = c.current.initEmbeddedCheckout(r).then(function (e) {
                                                f({ embeddedCheckout: e });
                                            })));
                                    };
                                    "async" !== i.tag || c.current || (!r.clientSecret && !r.fetchClientSecret)
                                        ? "sync" !== i.tag || c.current || (!r.clientSecret && !r.fetchClientSecret) || e(i.stripe)
                                        : i.stripePromise.then(function (t) {
                                              t && e(t);
                                          });
                                }
                            },
                            [i, r, l, c],
                        ),
                            t.useEffect(
                                function () {
                                    return function () {
                                        l.embeddedCheckout
                                            ? ((u.current = null), l.embeddedCheckout.destroy())
                                            : u.current &&
                                              u.current.then(function () {
                                                  (u.current = null), l.embeddedCheckout && l.embeddedCheckout.destroy();
                                              });
                                    };
                                },
                                [l.embeddedCheckout],
                            ),
                            t.useEffect(
                                function () {
                                    L(c);
                                },
                                [c],
                            );
                        var p = O(n);
                        t.useEffect(function () {}, [p, n]);
                        var d = O(r);
                        return (
                            t.useEffect(
                                function () {
                                    null != d && null != r && (void 0 === r.clientSecret && r.fetchClientSecret, null != d.clientSecret && (r.clientSecret, d.clientSecret), null != d.fetchClientSecret && (r.fetchClientSecret, d.fetchClientSecret), null != d.onComplete && (r.onComplete, d.onComplete), null != d.onShippingDetailsChange && (r.onShippingDetailsChange, d.onShippingDetailsChange), null != d.onLineItemsChange && (r.onLineItemsChange, d.onLineItemsChange));
                                },
                                [d, r],
                            ),
                            t.createElement(te.Provider, { value: l }, o)
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
                    ce = ee ? ue : ie,
                    ae = function () {
                        return z("calls useStripe()").stripe;
                    },
                    se = Z("auBankAccount", ee),
                    le = Z("card", ee),
                    fe = Z("cardNumber", ee),
                    pe = Z("cardExpiry", ee),
                    de = Z("cardCvc", ee),
                    me = Z("fpxBank", ee),
                    ye = Z("iban", ee),
                    he = Z("idealBank", ee),
                    ve = Z("p24Bank", ee),
                    be = Z("epsBank", ee),
                    Ee = Z("payment", ee),
                    ge = Z("expressCheckout", ee),
                    Se = Z("currencySelector", ee),
                    Ce = Z("paymentRequestButton", ee),
                    ke = Z("linkAuthentication", ee),
                    Oe = Z("address", ee),
                    we = Z("shippingAddress", ee),
                    Pe = Z("paymentMethodMessaging", ee),
                    je = Z("affirmMessage", ee),
                    xe = Z("afterpayClearpayMessage", ee);
                (e.AddressElement = Oe), (e.AffirmMessageElement = je), (e.AfterpayClearpayMessageElement = xe), (e.AuBankAccountElement = se), (e.CardCvcElement = de), (e.CardElement = le), (e.CardExpiryElement = pe), (e.CardNumberElement = fe), (e.CheckoutProvider = V), (e.CurrencySelectorElement = Se), (e.Elements = M), (e.ElementsConsumer = q), (e.EmbeddedCheckout = ce), (e.EmbeddedCheckoutProvider = oe), (e.EpsBankElement = be), (e.ExpressCheckoutElement = ge), (e.FpxBankElement = me), (e.IbanElement = ye), (e.IdealBankElement = he), (e.LinkAuthenticationElement = ke), (e.P24BankElement = ve), (e.PaymentElement = Ee), (e.PaymentMethodMessagingElement = Pe), (e.PaymentRequestButtonElement = Ce), (e.ShippingAddressElement = we), (e.useCheckout = G), (e.useElements = B), (e.useStripe = ae);
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
                c = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                a = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
                s = function (e) {
                    var t = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        n = document.createElement("script");
                    n.src = "".concat(u).concat(t);
                    var r = document.head || document.body;
                    if (!r) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return r.appendChild(n), n;
                },
                l = null,
                f = null,
                p = null,
                d = function (e) {
                    return null !== l
                        ? l
                        : (l = new Promise(function (t, n) {
                              if ("undefined" != typeof window && "undefined" != typeof document)
                                  if ((window.Stripe, window.Stripe)) t(window.Stripe);
                                  else
                                      try {
                                          var r = (function () {
                                              for (var e, t = document.querySelectorAll('script[src^="'.concat(i, '"]')), n = 0; n < t.length; n++) {
                                                  var r = t[n];
                                                  if (((e = r.src), c.test(e) || a.test(e))) return r;
                                              }
                                              return null;
                                          })();
                                          if (r && e);
                                          else if (r) {
                                              if (r && null !== p && null !== f) {
                                                  var o;
                                                  r.removeEventListener("load", p), r.removeEventListener("error", f), null === (o = r.parentNode) || void 0 === o || o.removeChild(r), (r = s(e));
                                              }
                                          } else r = s(e);
                                          (p = (function (e, t) {
                                              return function () {
                                                  window.Stripe ? e(window.Stripe) : t(new Error("Stripe.js not available"));
                                              };
                                          })(t, n)),
                                              (f = (function (e) {
                                                  return function (t) {
                                                      e(new Error("Failed to load Stripe.js", { cause: t }));
                                                  };
                                              })(n)),
                                              r.addEventListener("load", p),
                                              r.addEventListener("error", f);
                                      } catch (e) {
                                          return void n(e);
                                      }
                              else t(null);
                          })).catch(function (e) {
                              return (l = null), Promise.reject(e);
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
                    return d(r).then(function (e) {
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
                function c(e, t) {
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
                        o = c(e, t);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) (n = i[r]), t.indexOf(n) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
                    }
                    return o;
                }
                function s(e, t) {
                    return l(e) || f(e, t) || p(e, t) || m();
                }
                function l(e) {
                    if (Array.isArray(e)) return e;
                }
                function f(e, t) {
                    var n = null == e ? null : ("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                    if (null != n) {
                        var r,
                            o,
                            i = [],
                            u = !0,
                            c = !1;
                        try {
                            for (n = n.call(e); !(u = (r = n.next()).done) && (i.push(r.value), !t || i.length !== t); u = !0);
                        } catch (e) {
                            (c = !0), (o = e);
                        } finally {
                            try {
                                u || null == n.return || n.return();
                            } finally {
                                if (c) throw o;
                            }
                        }
                        return i;
                    }
                }
                function p(e, t) {
                    if (e) {
                        if ("string" == typeof e) return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(e, t) : void 0;
                    }
                }
                function d(e, t) {
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
                            c = e.checkForExisting,
                            a = void 0 !== c && c,
                            s = n(e, ["src", "checkForExisting"]),
                            l = i ? t.scripts[i] : void 0;
                        !l && a && i && u && (l = o(i));
                        var f = (0, r.useState)(l ? l.loading : Boolean(i)),
                            p = f[0],
                            d = f[1],
                            m = (0, r.useState)(l ? l.error : null),
                            y = m[0],
                            h = m[1];
                        return (
                            (0, r.useEffect)(
                                function () {
                                    if (u && i && p && !y) {
                                        var e;
                                        !(l = t.scripts[i]) && a && (l = o(i)),
                                            l
                                                ? (e = l.scriptEl)
                                                : (((e = document.createElement("script")).src = i),
                                                  Object.keys(s).forEach(function (t) {
                                                      void 0 === e[t] ? e.setAttribute(t, s[t]) : (e[t] = s[t]);
                                                  }),
                                                  (l = t.scripts[i] = { loading: !0, error: null, scriptEl: e }));
                                        var n = function () {
                                                l && (l.loading = !1), d(!1);
                                            },
                                            r = function (e) {
                                                l && (l.error = e), h(e);
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
                    g = h(E),
                    S =
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
                        var n = S(e, "publicKey", "key");
                        return C(n, t);
                    },
                    O = "https://cdn.plaid.com/link/v2/stable/link-initialize.js",
                    w = function () {},
                    P = function (e) {
                        var n = s(g({ src: O, checkForExisting: !0 }), 2),
                            r = n[0],
                            o = n[1],
                            u = s(t.useState(null), 2),
                            c = u[0],
                            a = u[1],
                            l = s(t.useState(!1), 2),
                            f = l[0],
                            p = l[1],
                            d = (e.product || []).slice().sort().join(",");
                        t.useEffect(
                            function () {
                                if (!r && (e.token || e.publicKey || e.receivedRedirectUri) && !o && window.Plaid) {
                                    null != c &&
                                        c.exit({ force: !0 }, function () {
                                            return c.destroy();
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
                                        a(t),
                                        function () {
                                            return t.exit({ force: !0 }, function () {
                                                return t.destroy();
                                            });
                                        }
                                    );
                                }
                            },
                            [r, o, e.publicKey, e.token, d],
                        );
                        var m = function () {
                            e.token;
                        };
                        return { error: o, ready: null != c && (!r || f), exit: c ? c.exit : w, open: c ? c.open : m };
                    },
                    j = ["children", "style", "className"],
                    x = function (e) {
                        var t = e.children,
                            n = e.style,
                            o = e.className,
                            u = a(e, j),
                            c = P(i({}, u)),
                            s = c.error,
                            l = c.open;
                        return r.createElement(
                            "button",
                            {
                                disabled: Boolean(s),
                                type: "button",
                                className: o,
                                style: i({ padding: "6px 4px", outline: "none", background: "#FFFFFF", border: "2px solid #F1F1F1", borderRadius: "4px" }, n),
                                onClick: function () {
                                    return l();
                                },
                            },
                            t,
                        );
                    };
                x.displayName = "PlaidLink";
                var I,
                    _ = ["style", "className"],
                    N = function (e) {
                        var n = e.style,
                            o = e.className,
                            u = a(e, _),
                            c = s(g({ src: O, checkForExisting: !0 }), 2),
                            l = c[0],
                            f = c[1],
                            p = t.useRef(null);
                        return (
                            t.useEffect(
                                function () {
                                    if (!l && !f && window.Plaid && null != u.token && "" != u.token) {
                                        var e = window.Plaid.createEmbedded(i({}, u), p.current).destroy;
                                        return function () {
                                            e();
                                        };
                                    }
                                },
                                [l, f, u, p],
                            ),
                            r.createElement("div", { style: n, className: o, ref: p })
                        );
                    };
                ((I = e.PlaidLinkStableEvent || (e.PlaidLinkStableEvent = {})).OPEN = "OPEN"), (I.EXIT = "EXIT"), (I.HANDOFF = "HANDOFF"), (I.SELECT_INSTITUTION = "SELECT_INSTITUTION"), (I.ERROR = "ERROR"), (I.BANK_INCOME_INSIGHTS_COMPLETED = "BANK_INCOME_INSIGHTS_COMPLETED"), (I.IDENTITY_VERIFICATION_PASS_SESSION = "IDENTITY_VERIFICATION_PASS_SESSION"), (I.IDENTITY_VERIFICATION_FAIL_SESSION = "IDENTITY_VERIFICATION_FAIL_SESSION"), (e.PlaidEmbeddedLink = N), (e.PlaidLink = x), (e.usePlaidLink = P), Object.defineProperty(e, "__esModule", { value: !0 });
            })(t, n(202784));
        },
        500200: (e, t, n) => {
            "use strict";
            var r = n(588386),
                o = n(151210),
                i = n(606161).loadQuery,
                u = n(982317),
                c = n(490434),
                a = n(265933),
                s = n(277660),
                l = n(712696),
                f = n(351743),
                p = n(598),
                d = n(928123),
                m = n(72845),
                y = n(463836),
                h = n(437429),
                v = n(353391),
                b = n(19663),
                E = n(703383);
            e.exports = { ConnectionHandler: E.ConnectionHandler, applyOptimisticMutation: E.applyOptimisticMutation, commitLocalUpdate: E.commitLocalUpdate, commitMutation: E.commitMutation, graphql: E.graphql, readInlineData: E.readInlineData, requestSubscription: E.requestSubscription, EntryPointContainer: r, RelayEnvironmentProvider: c, ProfilerContext: u, fetchQuery: E.fetchQuery, loadQuery: i, loadEntryPoint: o, useFragment: s, useLazyLoadQuery: l, useEntryPointLoader: a, useQueryLoader: m, useMutation: f, usePaginationFragment: p, usePreloadedQuery: d, useRefetchableFragment: y, useRelayEnvironment: h, useSubscribeToInvalidationState: v, useSubscription: b };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-27545368.e19a98fa.js.map
