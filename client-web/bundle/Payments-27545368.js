(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-27545368", "shared~bundle.AccountAnalytics~ondemand.SettingsRevamp~bundle.PremiumHub~bundle.ProfessionalHome~ondemand.Ins", "bundle.Communities-8d4c5ae2"],
    {
        866432: function (e, n, t) {
            !(function (e, n) {
                "use strict";
                function t(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n &&
                            (r = r.filter(function (n) {
                                return Object.getOwnPropertyDescriptor(e, n).enumerable;
                            })),
                            t.push.apply(t, r);
                    }
                    return t;
                }
                function r(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2
                            ? t(Object(r), !0).forEach(function (n) {
                                  u(e, n, r[n]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                              : t(Object(r)).forEach(function (n) {
                                    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
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
                function u(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = t), e;
                }
                function i(e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = {},
                        u = Object.keys(e);
                    for (r = 0; r < u.length; r++) (t = u[r]), n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o;
                }
                function c(e, n) {
                    if (null == e) return {};
                    var t,
                        r,
                        o = i(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var u = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < u.length; r++) (t = u[r]), n.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t]));
                    }
                    return o;
                }
                function a(e, n) {
                    return s(e) || l(e, n) || f(e, n) || p();
                }
                function s(e) {
                    if (Array.isArray(e)) return e;
                }
                function l(e, n) {
                    var t = e && (("undefined" != typeof Symbol && e[Symbol.iterator]) || e["@@iterator"]);
                    if (null != t) {
                        var r,
                            o,
                            u = [],
                            i = !0,
                            c = !1;
                        try {
                            for (t = t.call(e); !(i = (r = t.next()).done) && (u.push(r.value), !n || u.length !== n); i = !0);
                        } catch (e) {
                            (c = !0), (o = e);
                        } finally {
                            try {
                                i || null == t.return || t.return();
                            } finally {
                                if (c) throw o;
                            }
                        }
                        return u;
                    }
                }
                function f(e, n) {
                    if (e) {
                        if ("string" == typeof e) return d(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? d(e, n) : void 0;
                    }
                }
                function d(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r;
                }
                function p() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                function m(e) {
                    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
                }
                var y,
                    h,
                    v,
                    b,
                    g = { exports: {} };
                function C() {
                    return h ? y : ((h = 1), (y = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"));
                }
                function E() {
                    if (b) return v;
                    b = 1;
                    var e = C();
                    function n() {}
                    function t() {}
                    return (
                        (t.resetWarningCache = n),
                        (v = function () {
                            function r(n, t, r, o, u, i) {
                                if (i !== e) {
                                    var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                                    throw ((c.name = "Invariant Violation"), c);
                                }
                            }
                            function o() {
                                return r;
                            }
                            r.isRequired = r;
                            var u = { array: r, bool: r, func: r, number: r, object: r, string: r, symbol: r, any: r, arrayOf: o, element: r, elementType: r, instanceOf: o, node: r, objectOf: o, oneOf: o, oneOfType: o, shape: o, exact: o, checkPropTypes: t, resetWarningCache: n };
                            return (u.PropTypes = u), u;
                        })
                    );
                }
                g.exports = E()();
                var k = m(g.exports),
                    S = function (e, t, r) {
                        var o = !!r,
                            u = n.useRef(r);
                        n.useEffect(
                            function () {
                                u.current = r;
                            },
                            [r],
                        ),
                            n.useEffect(
                                function () {
                                    if (!o || !e) return function () {};
                                    var n = function () {
                                        u.current && u.current.apply(u, arguments);
                                    };
                                    return (
                                        e.on(t, n),
                                        function () {
                                            e.off(t, n);
                                        }
                                    );
                                },
                                [o, t, e, u],
                            );
                    },
                    w = function (e) {
                        var t = n.useRef(e);
                        return (
                            n.useEffect(
                                function () {
                                    t.current = e;
                                },
                                [e],
                            ),
                            t.current
                        );
                    },
                    P = function (e) {
                        return null !== e && "object" === o(e);
                    },
                    O = function (e) {
                        return P(e) && "function" == typeof e.then;
                    },
                    j = function (e) {
                        return P(e) && "function" == typeof e.elements && "function" == typeof e.createToken && "function" == typeof e.createPaymentMethod && "function" == typeof e.confirmCardPayment;
                    },
                    x = "[object Object]",
                    R = function e(n, t) {
                        if (!P(n) || !P(t)) return n === t;
                        var r = Array.isArray(n);
                        if (r !== Array.isArray(t)) return !1;
                        var o = Object.prototype.toString.call(n) === x;
                        if (o !== (Object.prototype.toString.call(t) === x)) return !1;
                        if (!o && !r) return n === t;
                        var u = Object.keys(n),
                            i = Object.keys(t);
                        if (u.length !== i.length) return !1;
                        for (var c = {}, a = 0; a < u.length; a += 1) c[u[a]] = !0;
                        for (var s = 0; s < i.length; s += 1) c[i[s]] = !0;
                        var l = Object.keys(c);
                        if (l.length !== u.length) return !1;
                        var f = n,
                            d = t,
                            p = function (n) {
                                return e(f[n], d[n]);
                            };
                        return l.every(p);
                    },
                    _ = function (e, n, t) {
                        return P(e)
                            ? Object.keys(e).reduce(function (o, i) {
                                  var c = !P(n) || !R(e[i], n[i]);
                                  return t.includes(i) ? o : c ? r(r({}, o || {}), {}, u({}, i, e[i])) : o;
                              }, null)
                            : null;
                    },
                    A = "Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    N = function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A;
                        if (null === e || j(e)) return e;
                        throw new Error(n);
                    },
                    I = function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : A;
                        if (O(e))
                            return {
                                tag: "async",
                                stripePromise: Promise.resolve(e).then(function (e) {
                                    return N(e, n);
                                }),
                            };
                        var t = N(e, n);
                        return null === t ? { tag: "empty" } : { tag: "sync", stripe: t };
                    },
                    Q = function (e) {
                        e && e._registerWrapper && e.registerAppInfo && (e._registerWrapper({ name: "react-stripe-js", version: "3.6.0" }), e.registerAppInfo({ name: "react-stripe-js", version: "3.6.0", url: "https://stripe.com/docs/stripe-js/react" }));
                    },
                    L = n.createContext(null);
                L.displayName = "ElementsContext";
                var T = function (e, n) {
                        if (!e) throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(n, " in an <Elements> provider."));
                        return e;
                    },
                    q = function (e) {
                        var t = e.stripe,
                            r = e.options,
                            o = e.children,
                            u = n.useMemo(
                                function () {
                                    return I(t);
                                },
                                [t],
                            ),
                            i = a(
                                n.useState(function () {
                                    return { stripe: "sync" === u.tag ? u.stripe : null, elements: "sync" === u.tag ? u.stripe.elements(r) : null };
                                }),
                                2,
                            ),
                            c = i[0],
                            s = i[1];
                        n.useEffect(
                            function () {
                                var e = !0,
                                    n = function (e) {
                                        s(function (n) {
                                            return n.stripe ? n : { stripe: e, elements: e.elements(r) };
                                        });
                                    };
                                return (
                                    "async" !== u.tag || c.stripe
                                        ? "sync" !== u.tag || c.stripe || n(u.stripe)
                                        : u.stripePromise.then(function (t) {
                                              t && e && n(t);
                                          }),
                                    function () {
                                        e = !1;
                                    }
                                );
                            },
                            [u, c, r],
                        );
                        var l = w(t);
                        n.useEffect(function () {}, [l, t]);
                        var f = w(r);
                        return (
                            n.useEffect(
                                function () {
                                    if (c.elements) {
                                        var e = _(r, f, ["clientSecret", "fonts"]);
                                        e && c.elements.update(e);
                                    }
                                },
                                [r, f, c.elements],
                            ),
                            n.useEffect(
                                function () {
                                    Q(c.stripe);
                                },
                                [c.stripe],
                            ),
                            n.createElement(L.Provider, { value: c }, o)
                        );
                    };
                q.propTypes = { stripe: k.any, options: k.object };
                var D = function (e) {
                        var t = n.useContext(L);
                        return T(t, e);
                    },
                    M = function () {
                        return D("calls useElements()").elements;
                    },
                    B = function (e) {
                        return (0, e.children)(D("mounts <ElementsConsumer>"));
                    };
                B.propTypes = { children: k.func.isRequired };
                var F = ["on", "session"],
                    W = n.createContext(null);
                W.displayName = "CheckoutSdkContext";
                var Y = function (e, n) {
                        if (!e) throw new Error("Could not find CheckoutProvider context; You need to wrap the part of your app that ".concat(n, " in an <CheckoutProvider> provider."));
                        return e;
                    },
                    U = n.createContext(null);
                U.displayName = "CheckoutContext";
                var H = function (e, n) {
                        if (!e) return null;
                        e.on, e.session;
                        var t = c(e, F);
                        return n ? Object.assign(n, t) : Object.assign(e.session(), t);
                    },
                    K = "Invalid prop `stripe` supplied to `CheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    V = function (e) {
                        var t = e.stripe,
                            r = e.options,
                            o = e.children,
                            u = n.useMemo(
                                function () {
                                    return I(t, K);
                                },
                                [t],
                            ),
                            i = a(n.useState(null), 2),
                            c = i[0],
                            s = i[1],
                            l = a(
                                n.useState(function () {
                                    return { stripe: "sync" === u.tag ? u.stripe : null, checkoutSdk: null };
                                }),
                                2,
                            ),
                            f = l[0],
                            d = l[1],
                            p = function (e, n) {
                                d(function (t) {
                                    return t.stripe && t.checkoutSdk ? t : { stripe: e, checkoutSdk: n };
                                });
                            },
                            m = n.useRef(!1);
                        n.useEffect(
                            function () {
                                var e = !0;
                                return (
                                    "async" !== u.tag || f.stripe
                                        ? "sync" === u.tag &&
                                          u.stripe &&
                                          !m.current &&
                                          ((m.current = !0),
                                          u.stripe.initCheckout(r).then(function (e) {
                                              e && (p(u.stripe, e), e.on("change", s));
                                          }))
                                        : u.stripePromise.then(function (n) {
                                              n &&
                                                  e &&
                                                  !m.current &&
                                                  ((m.current = !0),
                                                  n.initCheckout(r).then(function (e) {
                                                      e && (p(n, e), e.on("change", s));
                                                  }));
                                          }),
                                    function () {
                                        e = !1;
                                    }
                                );
                            },
                            [u, f, r, s],
                        );
                        var y = w(t);
                        n.useEffect(function () {}, [y, t]);
                        var h = w(r);
                        n.useEffect(
                            function () {
                                var e, n;
                                if (f.checkoutSdk) {
                                    var t = null == h || null === (e = h.elementsOptions) || void 0 === e ? void 0 : e.appearance,
                                        o = null == r || null === (n = r.elementsOptions) || void 0 === n ? void 0 : n.appearance;
                                    o && !R(o, t) && f.checkoutSdk.changeAppearance(o);
                                }
                            },
                            [r, h, f.checkoutSdk],
                        ),
                            n.useEffect(
                                function () {
                                    Q(f.stripe);
                                },
                                [f.stripe],
                            );
                        var v = n.useMemo(
                            function () {
                                return H(f.checkoutSdk, c);
                            },
                            [f.checkoutSdk, c],
                        );
                        return f.checkoutSdk ? n.createElement(W.Provider, { value: f }, n.createElement(U.Provider, { value: v }, o)) : null;
                    };
                V.propTypes = { stripe: k.any, options: k.shape({ fetchClientSecret: k.func.isRequired, elementsOptions: k.object }).isRequired };
                var $ = function (e) {
                        var t = n.useContext(W);
                        return Y(t, e);
                    },
                    z = function (e) {
                        var t = n.useContext(W),
                            r = n.useContext(L);
                        if (t && r) throw new Error("You cannot wrap the part of your app that ".concat(e, " in both <CheckoutProvider> and <Elements> providers."));
                        return t ? Y(t, e) : T(r, e);
                    },
                    J = function () {
                        $("calls useCheckout()");
                        var e = n.useContext(U);
                        if (!e) throw new Error("Could not find Checkout Context; You need to wrap the part of your app that calls useCheckout() in an <CheckoutProvider> provider.");
                        return e;
                    },
                    G = ["mode"],
                    X = function (e) {
                        return e.charAt(0).toUpperCase() + e.slice(1);
                    },
                    Z = function (e, t) {
                        var r = "".concat(X(e), "Element"),
                            o = t
                                ? function (e) {
                                      z("mounts <".concat(r, ">"));
                                      var t = e.id,
                                          o = e.className;
                                      return n.createElement("div", { id: t, className: o });
                                  }
                                : function (t) {
                                      var o,
                                          u = t.id,
                                          i = t.className,
                                          s = t.options,
                                          l = void 0 === s ? {} : s,
                                          f = t.onBlur,
                                          d = t.onFocus,
                                          p = t.onReady,
                                          m = t.onChange,
                                          y = t.onEscape,
                                          h = t.onClick,
                                          v = t.onLoadError,
                                          b = t.onLoaderStart,
                                          g = t.onNetworksChange,
                                          C = t.onConfirm,
                                          E = t.onCancel,
                                          k = t.onShippingAddressChange,
                                          P = t.onShippingRateChange,
                                          O = z("mounts <".concat(r, ">")),
                                          j = "elements" in O ? O.elements : null,
                                          x = "checkoutSdk" in O ? O.checkoutSdk : null,
                                          R = a(n.useState(null), 2),
                                          A = R[0],
                                          N = R[1],
                                          I = n.useRef(null),
                                          Q = n.useRef(null);
                                      S(A, "blur", f),
                                          S(A, "focus", d),
                                          S(A, "escape", y),
                                          S(A, "click", h),
                                          S(A, "loaderror", v),
                                          S(A, "loaderstart", b),
                                          S(A, "networkschange", g),
                                          S(A, "confirm", C),
                                          S(A, "cancel", E),
                                          S(A, "shippingaddresschange", k),
                                          S(A, "shippingratechange", P),
                                          S(A, "change", m),
                                          p &&
                                              (o =
                                                  "expressCheckout" === e
                                                      ? p
                                                      : function () {
                                                            p(A);
                                                        }),
                                          S(A, "ready", o),
                                          n.useLayoutEffect(
                                              function () {
                                                  if (null === I.current && null !== Q.current && (j || x)) {
                                                      var n = null;
                                                      if (x)
                                                          switch (e) {
                                                              case "payment":
                                                                  n = x.createPaymentElement(l);
                                                                  break;
                                                              case "address":
                                                                  if (!("mode" in l)) throw new Error("You must supply options.mode. mode must be 'billing' or 'shipping'.");
                                                                  var t = l.mode,
                                                                      o = c(l, G);
                                                                  if ("shipping" === t) n = x.createShippingAddressElement(o);
                                                                  else {
                                                                      if ("billing" !== t) throw new Error("Invalid options.mode. mode must be 'billing' or 'shipping'.");
                                                                      n = x.createBillingAddressElement(o);
                                                                  }
                                                                  break;
                                                              case "expressCheckout":
                                                                  n = x.createExpressCheckoutElement(l);
                                                                  break;
                                                              case "currencySelector":
                                                                  n = x.createCurrencySelectorElement();
                                                                  break;
                                                              default:
                                                                  throw new Error("Invalid Element type ".concat(r, ". You must use either the <PaymentElement />, <AddressElement options={{mode: 'shipping'}} />, <AddressElement options={{mode: 'billing'}} />, or <ExpressCheckoutElement />."));
                                                          }
                                                      else j && (n = j.create(e, l));
                                                      (I.current = n), N(n), n && n.mount(Q.current);
                                                  }
                                              },
                                              [j, x, l],
                                          );
                                      var L = w(l);
                                      return (
                                          n.useEffect(
                                              function () {
                                                  if (I.current) {
                                                      var e = _(l, L, ["paymentRequest"]);
                                                      e && "update" in I.current && I.current.update(e);
                                                  }
                                              },
                                              [l, L],
                                          ),
                                          n.useLayoutEffect(function () {
                                              return function () {
                                                  if (I.current && "function" == typeof I.current.destroy)
                                                      try {
                                                          I.current.destroy(), (I.current = null);
                                                      } catch (e) {}
                                              };
                                          }, []),
                                          n.createElement("div", { id: u, className: i, ref: Q })
                                      );
                                  };
                        return (o.propTypes = { id: k.string, className: k.string, onChange: k.func, onBlur: k.func, onFocus: k.func, onReady: k.func, onEscape: k.func, onClick: k.func, onLoadError: k.func, onLoaderStart: k.func, onNetworksChange: k.func, onConfirm: k.func, onCancel: k.func, onShippingAddressChange: k.func, onShippingRateChange: k.func, options: k.object }), (o.displayName = r), (o.__elementType = e), o;
                    },
                    ee = "undefined" == typeof window,
                    ne = n.createContext(null);
                ne.displayName = "EmbeddedCheckoutProviderContext";
                var te = function () {
                        var e = n.useContext(ne);
                        if (!e) throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");
                        return e;
                    },
                    re = "Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",
                    oe = function (e) {
                        var t = e.stripe,
                            r = e.options,
                            o = e.children,
                            u = n.useMemo(
                                function () {
                                    return I(t, re);
                                },
                                [t],
                            ),
                            i = n.useRef(null),
                            c = n.useRef(null),
                            s = a(n.useState({ embeddedCheckout: null }), 2),
                            l = s[0],
                            f = s[1];
                        n.useEffect(
                            function () {
                                if (!c.current && !i.current) {
                                    var e = function (e) {
                                        c.current ||
                                            i.current ||
                                            ((c.current = e),
                                            (i.current = c.current.initEmbeddedCheckout(r).then(function (e) {
                                                f({ embeddedCheckout: e });
                                            })));
                                    };
                                    "async" !== u.tag || c.current || (!r.clientSecret && !r.fetchClientSecret)
                                        ? "sync" !== u.tag || c.current || (!r.clientSecret && !r.fetchClientSecret) || e(u.stripe)
                                        : u.stripePromise.then(function (n) {
                                              n && e(n);
                                          });
                                }
                            },
                            [u, r, l, c],
                        ),
                            n.useEffect(
                                function () {
                                    return function () {
                                        l.embeddedCheckout
                                            ? ((i.current = null), l.embeddedCheckout.destroy())
                                            : i.current &&
                                              i.current.then(function () {
                                                  (i.current = null), l.embeddedCheckout && l.embeddedCheckout.destroy();
                                              });
                                    };
                                },
                                [l.embeddedCheckout],
                            ),
                            n.useEffect(
                                function () {
                                    Q(c);
                                },
                                [c],
                            );
                        var d = w(t);
                        n.useEffect(function () {}, [d, t]);
                        var p = w(r);
                        return (
                            n.useEffect(
                                function () {
                                    null != p && null != r && (void 0 === r.clientSecret && r.fetchClientSecret, null != p.clientSecret && (r.clientSecret, p.clientSecret), null != p.fetchClientSecret && (r.fetchClientSecret, p.fetchClientSecret), null != p.onComplete && (r.onComplete, p.onComplete), null != p.onShippingDetailsChange && (r.onShippingDetailsChange, p.onShippingDetailsChange), null != p.onLineItemsChange && (r.onLineItemsChange, p.onLineItemsChange));
                                },
                                [p, r],
                            ),
                            n.createElement(ne.Provider, { value: l }, o)
                        );
                    },
                    ue = function (e) {
                        var t = e.id,
                            r = e.className,
                            o = te().embeddedCheckout,
                            u = n.useRef(!1),
                            i = n.useRef(null);
                        return (
                            n.useLayoutEffect(
                                function () {
                                    return (
                                        !u.current && o && null !== i.current && (o.mount(i.current), (u.current = !0)),
                                        function () {
                                            if (u.current && o)
                                                try {
                                                    o.unmount(), (u.current = !1);
                                                } catch (e) {}
                                        }
                                    );
                                },
                                [o],
                            ),
                            n.createElement("div", { ref: i, id: t, className: r })
                        );
                    },
                    ie = function (e) {
                        var t = e.id,
                            r = e.className;
                        return te(), n.createElement("div", { id: t, className: r });
                    },
                    ce = ee ? ie : ue,
                    ae = function () {
                        return z("calls useStripe()").stripe;
                    },
                    se = Z("auBankAccount", ee),
                    le = Z("card", ee),
                    fe = Z("cardNumber", ee),
                    de = Z("cardExpiry", ee),
                    pe = Z("cardCvc", ee),
                    me = Z("fpxBank", ee),
                    ye = Z("iban", ee),
                    he = Z("idealBank", ee),
                    ve = Z("p24Bank", ee),
                    be = Z("epsBank", ee),
                    ge = Z("payment", ee),
                    Ce = Z("expressCheckout", ee),
                    Ee = Z("currencySelector", ee),
                    ke = Z("paymentRequestButton", ee),
                    Se = Z("linkAuthentication", ee),
                    we = Z("address", ee),
                    Pe = Z("shippingAddress", ee),
                    Oe = Z("paymentMethodMessaging", ee),
                    je = Z("affirmMessage", ee),
                    xe = Z("afterpayClearpayMessage", ee);
                (e.AddressElement = we), (e.AffirmMessageElement = je), (e.AfterpayClearpayMessageElement = xe), (e.AuBankAccountElement = se), (e.CardCvcElement = pe), (e.CardElement = le), (e.CardExpiryElement = de), (e.CardNumberElement = fe), (e.CheckoutProvider = V), (e.CurrencySelectorElement = Ee), (e.Elements = q), (e.ElementsConsumer = B), (e.EmbeddedCheckout = ce), (e.EmbeddedCheckoutProvider = oe), (e.EpsBankElement = be), (e.ExpressCheckoutElement = Ce), (e.FpxBankElement = me), (e.IbanElement = ye), (e.IdealBankElement = he), (e.LinkAuthenticationElement = Se), (e.P24BankElement = ve), (e.PaymentElement = ge), (e.PaymentMethodMessagingElement = Oe), (e.PaymentRequestButtonElement = ke), (e.ShippingAddressElement = Pe), (e.useCheckout = J), (e.useElements = M), (e.useStripe = ae);
            })(n, t(202784));
        },
        85160: (e, n) => {
            "use strict";
            function t(e) {
                return (
                    (t =
                        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                            ? function (e) {
                                  return typeof e;
                              }
                            : function (e) {
                                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                              }),
                    t(e)
                );
            }
            var r,
                o = "basil",
                u = "https://js.stripe.com",
                i = "".concat(u, "/").concat(o, "/stripe.js"),
                c = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/,
                a = /^https:\/\/js\.stripe\.com\/(v3|[a-z]+)\/stripe\.js(\?.*)?$/,
                s = function (e) {
                    var n = e && !e.advancedFraudSignals ? "?advancedFraudSignals=false" : "",
                        t = document.createElement("script");
                    t.src = "".concat(i).concat(n);
                    var r = document.head || document.body;
                    if (!r) throw new Error("Expected document.body not to be null. Stripe.js requires a <body> element.");
                    return r.appendChild(t), t;
                },
                l = null,
                f = null,
                d = null,
                p = function (e) {
                    return null !== l
                        ? l
                        : (l = new Promise(function (n, t) {
                              if ("undefined" != typeof window && "undefined" != typeof document)
                                  if ((window.Stripe, window.Stripe)) n(window.Stripe);
                                  else
                                      try {
                                          var r = (function () {
                                              for (var e, n = document.querySelectorAll('script[src^="'.concat(u, '"]')), t = 0; t < n.length; t++) {
                                                  var r = n[t];
                                                  if (((e = r.src), c.test(e) || a.test(e))) return r;
                                              }
                                              return null;
                                          })();
                                          if (r && e);
                                          else if (r) {
                                              if (r && null !== d && null !== f) {
                                                  var o;
                                                  r.removeEventListener("load", d), r.removeEventListener("error", f), null === (o = r.parentNode) || void 0 === o || o.removeChild(r), (r = s(e));
                                              }
                                          } else r = s(e);
                                          (d = (function (e, n) {
                                              return function () {
                                                  window.Stripe ? e(window.Stripe) : n(new Error("Stripe.js not available"));
                                              };
                                          })(n, t)),
                                              (f = (function (e) {
                                                  return function (n) {
                                                      e(new Error("Failed to load Stripe.js", { cause: n }));
                                                  };
                                              })(t)),
                                              r.addEventListener("load", d),
                                              r.addEventListener("error", f);
                                      } catch (e) {
                                          return void t(e);
                                      }
                              else n(null);
                          })).catch(function (e) {
                              return (l = null), Promise.reject(e);
                          });
                },
                m = function (e) {
                    var n = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(e), "\n");
                    if (null === e || "object" !== t(e)) throw new Error(n);
                    if (1 === Object.keys(e).length && "boolean" == typeof e.advancedFraudSignals) return e;
                    throw new Error(n);
                },
                y = !1,
                h = function () {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    y = !0;
                    var o = Date.now();
                    return p(r).then(function (e) {
                        return (function (e, n, t) {
                            if (null === e) return null;
                            n[0].match(/^pk_test/), e.version;
                            var r = e.apply(void 0, n);
                            return (
                                (function (e, n) {
                                    e && e._registerWrapper && e._registerWrapper({ name: "stripe-js", version: "7.2.0", startTime: n });
                                })(r, t),
                                r
                            );
                        })(e, n, o);
                    });
                };
            (h.setLoadParameters = function (e) {
                if (y && r) {
                    var n = m(e);
                    if (
                        Object.keys(n).reduce(function (n, t) {
                            var o;
                            return n && e[t] === (null === (o = r) || void 0 === o ? void 0 : o[t]);
                        }, !0)
                    )
                        return;
                }
                if (y) throw new Error("You cannot change load parameters after calling loadStripe");
                r = m(e);
            }),
                (n.loadStripe = h);
        },
        497366: (e, n, t) => {
            e.exports = t(85160);
        },
        500200: (e, n, t) => {
            "use strict";
            var r = t(588386),
                o = t(151210),
                u = t(606161).loadQuery,
                i = t(982317),
                c = t(490434),
                a = t(265933),
                s = t(277660),
                l = t(712696),
                f = t(351743),
                d = t(598),
                p = t(928123),
                m = t(72845),
                y = t(463836),
                h = t(437429),
                v = t(353391),
                b = t(19663),
                g = t(703383);
            e.exports = { ConnectionHandler: g.ConnectionHandler, applyOptimisticMutation: g.applyOptimisticMutation, commitLocalUpdate: g.commitLocalUpdate, commitMutation: g.commitMutation, graphql: g.graphql, readInlineData: g.readInlineData, requestSubscription: g.requestSubscription, EntryPointContainer: r, RelayEnvironmentProvider: c, ProfilerContext: i, fetchQuery: g.fetchQuery, loadQuery: u, loadEntryPoint: o, useFragment: s, useLazyLoadQuery: l, useEntryPointLoader: a, useQueryLoader: m, useMutation: f, usePaginationFragment: d, usePreloadedQuery: p, useRefetchableFragment: y, useRelayEnvironment: h, useSubscribeToInvalidationState: v, useSubscription: b };
        },
        606161: (e, n, t) => {
            "use strict";
            var r = (0, t(902091).default)(t(463928)),
                o = t(647677),
                u = t(703383),
                i = u.__internal.fetchQueryDeduped,
                c = u.Observable,
                a = u.PreloadableQueryRegistry,
                s = u.ReplaySubject,
                l = u.createOperationDescriptor,
                f = u.getRequest,
                d = u.getRequestIdentifier,
                p = 100001;
            e.exports = {
                loadQuery: function (e, n, t, u, m) {
                    var y;
                    p++;
                    var h,
                        v,
                        b,
                        g,
                        C,
                        E,
                        k = null !== (y = null == u ? void 0 : u.fetchPolicy) && void 0 !== y ? y : "store-or-network",
                        S = (0, r.default)((0, r.default)({}, null == u ? void 0 : u.networkCacheConfig), {}, { force: !0 }),
                        w = !1,
                        P = function (n, t) {
                            return (w = !0), e.executeWithSource({ operation: n, source: t });
                        },
                        O = new s(),
                        j = c.create(function (e) {
                            return O.subscribe(e);
                        }),
                        x = null,
                        R = !1,
                        _ = function (n) {
                            R = !0;
                            var r = new s(),
                                o = "raw-network-request-" + d(n, t),
                                u = i(e, o, function () {
                                    return e.getNetwork().execute(n, t, S);
                                }).subscribe({
                                    error: function (e) {
                                        (x = e), r.error(e);
                                    },
                                    next: function (e) {
                                        r.next(e);
                                    },
                                    complete: function () {
                                        r.complete();
                                    },
                                }).unsubscribe;
                            return (
                                (v = u),
                                c.create(function (e) {
                                    var n = r.subscribe(e);
                                    return function () {
                                        n.unsubscribe(), v();
                                    };
                                })
                            );
                        },
                        A = function (n, t) {
                            R = !0;
                            var r = i(e, n.request.identifier, t).subscribe({
                                error: function (e) {
                                    O.error(e);
                                },
                                next: function (e) {
                                    O.next(e);
                                },
                                complete: function () {
                                    O.complete();
                                },
                            });
                            b = r.unsubscribe;
                        },
                        N = function (n) {
                            var r = l(n, t, S);
                            ((h = e.retain(r)), "store-only" !== k) &&
                                ("store-or-network" !== k || "available" !== e.check(r).status) &&
                                A(r, function () {
                                    var e = _(n.params);
                                    return P(r, e);
                                });
                        };
                    if ("PreloadableConcreteRequest" === n.kind) {
                        null === (E = (g = n.params).id) && o(!1);
                        var I = a.get(E);
                        if (null != I) N(I);
                        else {
                            var Q = "store-only" === k ? null : _(g),
                                L = a.onLoad(E, function (n) {
                                    C();
                                    var r = l(n, t, S);
                                    (h = e.retain(r)),
                                        null != Q &&
                                            A(r, function () {
                                                return P(r, Q);
                                            });
                                });
                            C = L.dispose;
                        }
                    } else {
                        var T = f(n);
                        (E = null != (g = T.params).cacheID ? g.cacheID : g.id), N(T);
                    }
                    var q = !1,
                        D = !1,
                        M = !1,
                        B = function () {
                            D || (h && h.dispose(), (D = !0));
                        },
                        F = function () {
                            M || (w ? b && b() : v && v(), C && C(), (M = !0));
                        };
                    return {
                        kind: "PreloadedQuery",
                        environment: e,
                        environmentProviderOptions: m,
                        dispose: function () {
                            q || (B(), F(), (q = !0));
                        },
                        releaseQuery: B,
                        cancelNetworkRequest: F,
                        fetchKey: p,
                        id: E,
                        get isDisposed() {
                            return q || D;
                        },
                        get networkError() {
                            return x;
                        },
                        name: g.name,
                        networkCacheConfig: S,
                        fetchPolicy: k,
                        source: R ? j : void 0,
                        variables: t,
                    };
                },
            };
        },
        928123: (e, n, t) => {
            "use strict";
            var r = t(138239),
                o = t(303566),
                u = t(437429),
                i = t(647677),
                c = (t(202784).useDebugValue, t(703383).__internal),
                a = c.fetchQueryDeduped,
                s = c.fetchQuery;
            t(826590);
            e.exports = function (e, n, t) {
                var c,
                    l = u(),
                    f = n.fetchKey,
                    d = n.fetchPolicy,
                    p = n.source,
                    m = n.variables,
                    y = n.networkCacheConfig,
                    h = o(e, m, y);
                if ("PreloadedQuery_DEPRECATED" === n.kind)
                    h.request.node.params.name !== n.name && i(!1),
                        (c = {
                            componentDisplayName: "usePreloadedQuery()",
                            fetchKey: f,
                            fetchObservable: a(l, h.request.identifier, function () {
                                return l === n.environment && null != p ? l.executeWithSource({ operation: h, source: p }) : l.execute({ operation: h });
                            }),
                            fetchPolicy: d,
                            query: h,
                            renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy,
                        });
                else {
                    var v = s(l, h);
                    c = { componentDisplayName: "usePreloadedQuery()", fetchObservable: null != p && l === n.environment ? p.ifEmpty(v) : (n.environment, v), fetchKey: f, fetchPolicy: d, query: h, renderPolicy: null == t ? void 0 : t.UNSTABLE_renderPolicy };
                }
                return r(c);
            };
        },
        72845: (e, n, t) => {
            "use strict";
            var r = (0, t(902091).default)(t(22395)),
                o = t(606161).loadQuery,
                u = t(995402),
                i = t(667368),
                c = t(437429),
                a = t(202784),
                s = a.useCallback,
                l = a.useEffect,
                f = a.useRef,
                d = a.useState,
                p = t(703383),
                m = p.RelayFeatureFlags,
                y = p.getRequest,
                h = { kind: "NullQueryReference" };
            function v(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== y(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                return m.ENABLE_ACTIVITY_COMPATIBILITY
                    ? i(e, n)
                    : (function (e, n) {
                          var t = null != n ? n : h,
                              i = c(),
                              a = u(),
                              p = f(new Set([t])),
                              m = d(function () {
                                  return t;
                              }),
                              y = m[0],
                              b = m[1],
                              g = d(function () {
                                  return t;
                              }),
                              C = g[0],
                              E = g[1];
                          t !== C && (p.current.add(t), E(t), b(t));
                          var k = s(
                                  function () {
                                      a.current && (p.current.add(h), b(h));
                                  },
                                  [a],
                              ),
                              S = s(
                                  function (n, t) {
                                      var r = null != t && t.hasOwnProperty("__environment") ? { fetchPolicy: t.fetchPolicy, networkCacheConfig: t.networkCacheConfig, __nameForWarning: t.__nameForWarning } : t;
                                      if (a.current) {
                                          var u,
                                              c = o(null !== (u = null == t ? void 0 : t.__environment) && void 0 !== u ? u : i, e, n, r);
                                          p.current.add(c), b(c);
                                      }
                                  },
                                  [i, e, b, a],
                              ),
                              w = f(!1);
                          return (
                              l(function () {
                                  return function () {
                                      w.current = !0;
                                  };
                              }, []),
                              l(
                                  function () {
                                      if (!0 === w.current) return (w.current = !1), void ("NullQueryReference" !== y.kind && S(y.variables, { fetchPolicy: y.fetchPolicy, networkCacheConfig: y.networkCacheConfig }));
                                      var n = p.current;
                                      if (a.current) {
                                          var t,
                                              o = (0, r.default)(n);
                                          try {
                                              for (o.s(); !(t = o.n()).done; ) {
                                                  var u = t.value;
                                                  if (u === y) break;
                                                  n.delete(u), "NullQueryReference" !== u.kind && (v(e) ? u.dispose && u.dispose() : u.releaseQuery && u.releaseQuery());
                                              }
                                          } catch (e) {
                                              o.e(e);
                                          } finally {
                                              o.f();
                                          }
                                      }
                                  },
                                  [y, a, S, e],
                              ),
                              l(
                                  function () {
                                      return function () {
                                          var n,
                                              t = (0, r.default)(p.current);
                                          try {
                                              for (t.s(); !(n = t.n()).done; ) {
                                                  var o = n.value;
                                                  "NullQueryReference" !== o.kind && (v(e) ? o.dispose && o.dispose() : o.releaseQuery && o.releaseQuery());
                                              }
                                          } catch (e) {
                                              t.e(e);
                                          } finally {
                                              t.f();
                                          }
                                      };
                                  },
                                  [e],
                              ),
                              ["NullQueryReference" === y.kind ? null : y, S, k]
                          );
                      })(e, n);
            };
        },
        667368: (e, n, t) => {
            "use strict";
            var r = (0, t(902091).default)(t(22395)),
                o = t(606161).loadQuery,
                u = t(995402),
                i = t(437429),
                c = t(202784),
                a = c.useCallback,
                s = c.useEffect,
                l = c.useInsertionEffect,
                f = c.useRef,
                d = c.useState,
                p = t(703383).getRequest,
                m = { kind: "NullQueryReference" };
            function y(e) {
                return "PreloadableConcreteRequest" === e.kind ? void 0 !== e.params.metadata.live : void 0 !== p(e).params.metadata.live;
            }
            e.exports = function (e, n) {
                var t = null != n ? n : m,
                    c = i(),
                    p = u(),
                    h = f(null);
                null == h.current && (h.current = new Set([t]));
                var v,
                    b = d(function () {
                        return t;
                    }),
                    g = b[0],
                    C = b[1],
                    E = d(function () {
                        return t;
                    }),
                    k = E[0],
                    S = E[1];
                t !== k && (null === (v = h.current) || void 0 === v || v.add(t), S(t), C(t));
                var w = a(
                        function () {
                            var e;
                            p.current && (null === (e = h.current) || void 0 === e || e.add(m), C(m));
                        },
                        [p],
                    ),
                    P = a(
                        function (n, t) {
                            var r, u;
                            if (p.current) {
                                var i = null != t && t.hasOwnProperty("__environment") ? { fetchPolicy: t.fetchPolicy, networkCacheConfig: t.networkCacheConfig, __nameForWarning: t.__nameForWarning } : t,
                                    a = o(null !== (r = null == t ? void 0 : t.__environment) && void 0 !== r ? r : c, e, n, i);
                                null === (u = h.current) || void 0 === u || u.add(a), C(a);
                            }
                        },
                        [c, e, C, p],
                    ),
                    O = a(function (e, n) {
                        var t,
                            o,
                            u = null !== (t = h.current) && void 0 !== t ? t : new Set(),
                            i = (0, r.default)(u);
                        try {
                            for (i.s(); !(o = i.n()).done; ) {
                                var c = o.value;
                                c !== n && "NullQueryReference" !== c.kind && (y(e) ? c.dispose && c.dispose() : c.releaseQuery && c.releaseQuery());
                            }
                        } catch (e) {
                            i.e(e);
                        } finally {
                            i.f();
                        }
                    }, []),
                    j = f(null);
                return (
                    s(
                        function () {
                            return (
                                O(e, g),
                                null != j.current && (clearTimeout(j.current), (j.current = null)),
                                function () {
                                    j.current = setTimeout(function () {
                                        O(e, null);
                                    }, 3e5);
                                }
                            );
                        },
                        [e, g],
                    ),
                    l(
                        function () {
                            return function () {
                                j.current && clearTimeout(j.current), (j.current = null), O(e, null);
                            };
                        },
                        [e],
                    ),
                    ["NullQueryReference" === g.kind ? null : g, P, w]
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-27545368.b7231f8a.js.map
