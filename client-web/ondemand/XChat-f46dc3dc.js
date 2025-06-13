"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-f46dc3dc"],
    {
        659203: (e, t, n) => {
            n.d(t, { U: () => f });
            var i = {};
            i = { "ar-AE": { dismiss: "تجاهل" }, "bg-BG": { dismiss: "Отхвърляне" }, "cs-CZ": { dismiss: "Odstranit" }, "da-DK": { dismiss: "Luk" }, "de-DE": { dismiss: "Schließen" }, "el-GR": { dismiss: "Απόρριψη" }, "en-US": { dismiss: "Dismiss" }, "es-ES": { dismiss: "Descartar" }, "et-EE": { dismiss: "Lõpeta" }, "fi-FI": { dismiss: "Hylkää" }, "fr-FR": { dismiss: "Rejeter" }, "he-IL": { dismiss: "התעלם" }, "hr-HR": { dismiss: "Odbaci" }, "hu-HU": { dismiss: "Elutasítás" }, "it-IT": { dismiss: "Ignora" }, "ja-JP": { dismiss: "閉じる" }, "ko-KR": { dismiss: "무시" }, "lt-LT": { dismiss: "Atmesti" }, "lv-LV": { dismiss: "Nerādīt" }, "nb-NO": { dismiss: "Lukk" }, "nl-NL": { dismiss: "Negeren" }, "pl-PL": { dismiss: "Zignoruj" }, "pt-BR": { dismiss: "Descartar" }, "pt-PT": { dismiss: "Dispensar" }, "ro-RO": { dismiss: "Revocare" }, "ru-RU": { dismiss: "Пропустить" }, "sk-SK": { dismiss: "Zrušiť" }, "sl-SI": { dismiss: "Opusti" }, "sr-SP": { dismiss: "Odbaci" }, "sv-SE": { dismiss: "Avvisa" }, "tr-TR": { dismiss: "Kapat" }, "uk-UA": { dismiss: "Скасувати" }, "zh-CN": { dismiss: "取消" }, "zh-TW": { dismiss: "關閉" } };
            var r = n(202784),
                o = n(32196),
                s = n(202136),
                l = n(313324),
                d = n(11425);
            const a = new WeakMap();
            function u(e, t) {
                return (
                    (t && l.J.getGlobalDictionaryForPackage(t)) ||
                    (function (e) {
                        let t = a.get(e);
                        return t || ((t = new (0, l.J)(e)), a.set(e, t)), t;
                    })(e)
                );
            }
            function c(e, t) {
                let { locale: n } = (0, s.j)(),
                    i = u(e, t);
                return (0, r.useMemo)(() => new (0, d.E)(n, i), [n, i]);
            }
            var m = n(536574);
            function f(e) {
                let { onDismiss: t, ...n } = e,
                    s = c((l = i) && l.__esModule ? l.default : l, "@react-aria/overlays");
                var l;
                let d = (0, o.b)(n, s.format("dismiss"));
                return r.createElement(
                    m.T,
                    null,
                    r.createElement("button", {
                        ...d,
                        tabIndex: -1,
                        onClick: () => {
                            t && t();
                        },
                        style: { width: 1, height: 1 },
                    }),
                );
            }
        },
        217849: (e, t, n) => {
            n.d(t, { aV: () => f, Bq: () => v });
            var i = n(202784);
            const r = (0, i.createContext)({});
            function o() {
                var e;
                return null !== (e = (0, i.useContext)(r)) && void 0 !== e ? e : {};
            }
            var s = n(613853);
            function l({ children: e }) {
                let t = (0, i.useMemo)(() => ({ register: () => {} }), []);
                return i.createElement(s.O.Provider, { value: t }, e);
            }
            var d = n(390478),
                a = n(928316),
                u = n(623047),
                c = n(426636);
            const m = i.createContext(null);
            function f(e) {
                let t = (0, u.Av)(),
                    { portalContainer: n = t ? null : document.body, isExiting: r } = e,
                    [s, c] = (0, i.useState)(!1),
                    f = (0, i.useMemo)(() => ({ contain: s, setContain: c }), [s, c]),
                    { getContainer: v } = o();
                if ((!e.portalContainer && v && (n = v()), !n)) return null;
                let p = e.children;
                return e.disableFocusManagement || (p = i.createElement(d.MT, { restoreFocus: !0, contain: s && !r }, p)), (p = i.createElement(m.Provider, { value: f }, i.createElement(l, null, p))), a.createPortal(p, n);
            }
            function v() {
                let e = (0, i.useContext)(m),
                    t = null == e ? void 0 : e.setContain;
                (0, c.b)(() => {
                    null == t || t(!0);
                }, [t]);
            }
        },
        864295: (e, t, n) => {
            n.d(t, { N: () => A });
            let i = new WeakMap(),
                r = [];
            function o(e, t = document.body) {
                let n = new Set(e),
                    o = new Set(),
                    s = (e) => {
                        for (let t of e.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]")) n.add(t);
                        let t = (e) => {
                                if (n.has(e) || (o.has(e.parentElement) && "row" !== e.parentElement.getAttribute("role"))) return NodeFilter.FILTER_REJECT;
                                for (let t of n) if (e.contains(t)) return NodeFilter.FILTER_SKIP;
                                return NodeFilter.FILTER_ACCEPT;
                            },
                            i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: t }),
                            r = t(e);
                        if ((r === NodeFilter.FILTER_ACCEPT && l(e), r !== NodeFilter.FILTER_REJECT)) {
                            let e = i.nextNode();
                            for (; null != e; ) l(e), (e = i.nextNode());
                        }
                    },
                    l = (e) => {
                        var t;
                        let n = null !== (t = i.get(e)) && void 0 !== t ? t : 0;
                        ("true" === e.getAttribute("aria-hidden") && 0 === n) || (0 === n && e.setAttribute("aria-hidden", "true"), o.add(e), i.set(e, n + 1));
                    };
                r.length && r[r.length - 1].disconnect(), s(t);
                let d = new MutationObserver((e) => {
                    for (let t of e)
                        if ("childList" === t.type && 0 !== t.addedNodes.length && ![...n, ...o].some((e) => e.contains(t.target))) {
                            for (let e of t.removedNodes) e instanceof Element && (n.delete(e), o.delete(e));
                            for (let e of t.addedNodes) !(e instanceof HTMLElement || e instanceof SVGElement) || ("true" !== e.dataset.liveAnnouncer && "true" !== e.dataset.reactAriaTopLayer) ? e instanceof Element && s(e) : n.add(e);
                        }
                });
                d.observe(t, { childList: !0, subtree: !0 });
                let a = {
                    observe() {
                        d.observe(t, { childList: !0, subtree: !0 });
                    },
                    disconnect() {
                        d.disconnect();
                    },
                };
                return (
                    r.push(a),
                    () => {
                        d.disconnect();
                        for (let e of o) {
                            let t = i.get(e);
                            1 === t ? (e.removeAttribute("aria-hidden"), i.delete(e)) : i.set(e, t - 1);
                        }
                        a === r[r.length - 1] ? (r.pop(), r.length && r[r.length - 1].observe()) : r.splice(r.indexOf(a), 1);
                    }
                );
            }
            var s = n(390478),
                l = n(202784),
                d = n(985378),
                a = n(852053);
            function u(e) {
                let { ref: t, onInteractOutside: n, isDisabled: i, onInteractOutsideStart: r } = e,
                    o = (0, l.useRef)({ isPointerDown: !1, ignoreEmulatedMouseEvents: !1 }),
                    s = (0, d.i)((e) => {
                        n && c(e, t) && (r && r(e), (o.current.isPointerDown = !0));
                    }),
                    u = (0, d.i)((e) => {
                        n && n(e);
                    });
                (0, l.useEffect)(() => {
                    let e = o.current;
                    if (i) return;
                    const n = t.current,
                        r = (0, a.r)(n);
                    if ("undefined" != typeof PointerEvent) {
                        let n = (n) => {
                            e.isPointerDown && c(n, t) && u(n), (e.isPointerDown = !1);
                        };
                        return (
                            r.addEventListener("pointerdown", s, !0),
                            r.addEventListener("pointerup", n, !0),
                            () => {
                                r.removeEventListener("pointerdown", s, !0), r.removeEventListener("pointerup", n, !0);
                            }
                        );
                    }
                    {
                        let n = (n) => {
                                e.ignoreEmulatedMouseEvents ? (e.ignoreEmulatedMouseEvents = !1) : e.isPointerDown && c(n, t) && u(n), (e.isPointerDown = !1);
                            },
                            i = (n) => {
                                (e.ignoreEmulatedMouseEvents = !0), e.isPointerDown && c(n, t) && u(n), (e.isPointerDown = !1);
                            };
                        return (
                            r.addEventListener("mousedown", s, !0),
                            r.addEventListener("mouseup", n, !0),
                            r.addEventListener("touchstart", s, !0),
                            r.addEventListener("touchend", i, !0),
                            () => {
                                r.removeEventListener("mousedown", s, !0), r.removeEventListener("mouseup", n, !0), r.removeEventListener("touchstart", s, !0), r.removeEventListener("touchend", i, !0);
                            }
                        );
                    }
                }, [t, i, s, u]);
            }
            function c(e, t) {
                if (e.button > 0) return !1;
                if (e.target) {
                    const t = e.target.ownerDocument;
                    if (!t || !t.documentElement.contains(e.target)) return !1;
                    if (e.target.closest("[data-react-aria-top-layer]")) return !1;
                }
                return t.current && !t.current.contains(e.target);
            }
            var m = n(525757);
            const f = [];
            function v(e, t) {
                let { onClose: n, shouldCloseOnBlur: i, isOpen: r, isDismissable: o = !1, isKeyboardDismissDisabled: d = !1, shouldCloseOnInteractOutside: a } = e;
                (0, l.useEffect)(
                    () => (
                        r && f.push(t),
                        () => {
                            let e = f.indexOf(t);
                            e >= 0 && f.splice(e, 1);
                        }
                    ),
                    [r, t],
                );
                let c = () => {
                    f[f.length - 1] === t && n && n();
                };
                u({
                    ref: t,
                    onInteractOutside:
                        o && r
                            ? (e) => {
                                  (a && !a(e.target)) || (f[f.length - 1] === t && (e.stopPropagation(), e.preventDefault()), c());
                              }
                            : null,
                    onInteractOutsideStart: (e) => {
                        (a && !a(e.target)) || (f[f.length - 1] === t && (e.stopPropagation(), e.preventDefault()));
                    },
                });
                let { focusWithinProps: v } = (0, m.L)({
                    isDisabled: !i,
                    onBlurWithin: (e) => {
                        e.relatedTarget && !(0, s.cW)(e.relatedTarget) && ((a && !a(e.relatedTarget)) || n());
                    },
                });
                return {
                    overlayProps: {
                        onKeyDown: (e) => {
                            "Escape" !== e.key || d || e.nativeEvent.isComposing || (e.stopPropagation(), e.preventDefault(), c());
                        },
                        ...v,
                    },
                    underlayProps: {
                        onPointerDown: (e) => {
                            e.target === e.currentTarget && e.preventDefault();
                        },
                    },
                };
            }
            var p = n(217849),
                E = n(426636),
                h = n(979870),
                g = n(760080);
            function w(e, t) {
                let n = window.getComputedStyle(e),
                    i = /(auto|scroll)/.test(n.overflow + n.overflowX + n.overflowY);
                return i && t && (i = e.scrollHeight !== e.clientHeight || e.scrollWidth !== e.clientWidth), i;
            }
            function b(e, t) {
                let n = e;
                for (w(n, t) && (n = n.parentElement); n && !w(n, t); ) n = n.parentElement;
                return n || document.scrollingElement || document.documentElement;
            }
            const L = "undefined" != typeof document && window.visualViewport,
                y = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
            let C,
                T = 0;
            function D(e = {}) {
                let { isDisabled: t } = e;
                (0, E.b)(() => {
                    if (!t)
                        return (
                            T++,
                            1 === T &&
                                (C = (0, h.gn)()
                                    ? (function () {
                                          let e,
                                              t,
                                              n = (n) => {
                                                  (e = b(n.target, !0)), (e === document.documentElement && e === document.body) || (e instanceof HTMLElement && "auto" === window.getComputedStyle(e).overscrollBehavior && (t = O(e, "overscrollBehavior", "contain")));
                                              },
                                              i = (t) => {
                                                  e && e !== document.documentElement && e !== document.body ? e.scrollHeight === e.clientHeight && e.scrollWidth === e.clientWidth && t.preventDefault() : t.preventDefault();
                                              },
                                              r = (e) => {
                                                  let n = e.target;
                                                  k(n) &&
                                                      n !== document.activeElement &&
                                                      (e.preventDefault(),
                                                      l(),
                                                      (n.style.transform = "translateY(-2000px)"),
                                                      n.focus(),
                                                      requestAnimationFrame(() => {
                                                          n.style.transform = "";
                                                      })),
                                                      t && t();
                                              },
                                              o = (e) => {
                                                  let t = e.target;
                                                  k(t) &&
                                                      (l(),
                                                      (t.style.transform = "translateY(-2000px)"),
                                                      requestAnimationFrame(() => {
                                                          (t.style.transform = ""),
                                                              L &&
                                                                  (L.height < window.innerHeight
                                                                      ? requestAnimationFrame(() => {
                                                                            R(t);
                                                                        })
                                                                      : L.addEventListener("resize", () => R(t), { once: !0 }));
                                                      }));
                                              },
                                              s = null,
                                              l = () => {
                                                  if (s) return;
                                                  let e = () => {
                                                          window.scrollTo(0, 0);
                                                      },
                                                      t = window.pageXOffset,
                                                      n = window.pageYOffset;
                                                  (s = (0, g.t)(P(window, "scroll", e), O(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"), O(document.documentElement, "overflow", "hidden"), O(document.body, "marginTop", `-${n}px`), () => {
                                                      window.scrollTo(t, n);
                                                  })),
                                                      window.scrollTo(0, 0);
                                              },
                                              d = (0, g.t)(P(document, "touchstart", n, { passive: !1, capture: !0 }), P(document, "touchmove", i, { passive: !1, capture: !0 }), P(document, "touchend", r, { passive: !1, capture: !0 }), P(document, "focus", o, !0));
                                          return () => {
                                              null == t || t(), null == s || s(), d();
                                          };
                                      })()
                                    : (0, g.t)(O(document.documentElement, "paddingRight", window.innerWidth - document.documentElement.clientWidth + "px"), O(document.documentElement, "overflow", "hidden"))),
                            () => {
                                T--, 0 === T && C();
                            }
                        );
                }, [t]);
            }
            function O(e, t, n) {
                let i = e.style[t];
                return (
                    (e.style[t] = n),
                    () => {
                        e.style[t] = i;
                    }
                );
            }
            function P(e, t, n, i) {
                return (
                    e.addEventListener(t, n, i),
                    () => {
                        e.removeEventListener(t, n, i);
                    }
                );
            }
            function R(e) {
                let t = document.scrollingElement || document.documentElement;
                for (; e && e !== t; ) {
                    let t = b(e);
                    if (t !== document.documentElement && t !== document.body && t !== e) {
                        let n = t.getBoundingClientRect().top,
                            i = e.getBoundingClientRect().top;
                        i > n + e.clientHeight && (t.scrollTop += i - n);
                    }
                    e = t.parentElement;
                }
            }
            function k(e) {
                return (e instanceof HTMLInputElement && !y.has(e.type)) || e instanceof HTMLTextAreaElement || (e instanceof HTMLElement && e.isContentEditable);
            }
            var S = n(277108);
            function A(e, t, n) {
                let { overlayProps: i, underlayProps: r } = v({ ...e, isOpen: t.isOpen, onClose: t.close }, n);
                return (
                    D({ isDisabled: !t.isOpen }),
                    (0, p.Bq)(),
                    (0, l.useEffect)(() => {
                        if (t.isOpen) return o([n.current]);
                    }, [t.isOpen, n]),
                    { modalProps: (0, S.d)(i), underlayProps: r }
                );
            }
        },
        325250: (e, t, n) => {
            n.d(t, { n: () => s });
            var i = n(202784),
                r = n(623047);
            let o = "undefined" != typeof document && window.visualViewport;
            function s() {
                let e = (0, r.Av)(),
                    [t, n] = (0, i.useState)(() => (e ? { width: 0, height: 0 } : l()));
                return (
                    (0, i.useEffect)(() => {
                        let e = () => {
                            n((e) => {
                                let t = l();
                                return t.width === e.width && t.height === e.height ? e : t;
                            });
                        };
                        return (
                            o ? o.addEventListener("resize", e) : window.addEventListener("resize", e),
                            () => {
                                o ? o.removeEventListener("resize", e) : window.removeEventListener("resize", e);
                            }
                        );
                    }, []),
                    t
                );
            }
            function l() {
                return { width: (o && (null == o ? void 0 : o.width)) || window.innerWidth, height: (o && (null == o ? void 0 : o.height)) || window.innerHeight };
            }
        },
        340252: (e, t, n) => {
            n.d(t, { d: () => o });
            var i = n(202784),
                r = n(223717);
            function o(e) {
                let [t, n] = (0, r.z)(e.isOpen, e.defaultOpen || !1, e.onOpenChange);
                const o = (0, i.useCallback)(() => {
                        n(!0);
                    }, [n]),
                    s = (0, i.useCallback)(() => {
                        n(!1);
                    }, [n]),
                    l = (0, i.useCallback)(() => {
                        n(!t);
                    }, [n, t]);
                return { isOpen: t, setOpen: n, open: o, close: s, toggle: l };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-f46dc3dc.1b7276ca.js.map
