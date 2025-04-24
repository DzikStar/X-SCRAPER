"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-d96105ec"],
    {
        199237: (e, t, n) => {
            n.d(t, { fC: () => x, bU: () => y });
            var r = n(202784),
                o = n(717998),
                i = n(262656),
                s = n(552322);
            function a(...e) {
                const t = e[0];
                if (1 === e.length) return t;
                const n = () => {
                    const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }));
                    return function (e) {
                        const o = n.reduce((t, { useScope: n, scopeName: r }) => ({ ...t, ...n(e)[`__scope${r}`] }), {});
                        return r.useMemo(() => ({ [`__scope${t.scopeName}`]: o }), [o]);
                    };
                };
                return (n.scopeName = t.scopeName), n;
            }
            var c = n(387695),
                l = n(890022),
                u = n(335019),
                d = n(172714),
                f = "Switch",
                [p, v] = (function (e, t = []) {
                    let n = [];
                    const o = () => {
                        const t = n.map((e) => r.createContext(e));
                        return function (n) {
                            const o = n?.[e] || t;
                            return r.useMemo(() => ({ [`__scope${e}`]: { ...n, [e]: o } }), [n, o]);
                        };
                    };
                    return (
                        (o.scopeName = e),
                        [
                            function (t, o) {
                                const i = r.createContext(o),
                                    a = n.length;
                                function c(t) {
                                    const { scope: n, children: o, ...c } = t,
                                        l = n?.[e][a] || i,
                                        u = r.useMemo(() => c, Object.values(c));
                                    return (0, s.jsx)(l.Provider, { value: u, children: o });
                                }
                                return (
                                    (n = [...n, o]),
                                    (c.displayName = t + "Provider"),
                                    [
                                        c,
                                        function (n, s) {
                                            const c = s?.[e][a] || i,
                                                l = r.useContext(c);
                                            if (l) return l;
                                            if (void 0 !== o) return o;
                                            throw new Error(`\`${n}\` must be used within \`${t}\``);
                                        },
                                    ]
                                );
                            },
                            a(o, ...t),
                        ]
                    );
                })(f),
                [m, b] = p(f),
                h = r.forwardRef((e, t) => {
                    const { __scopeSwitch: n, name: a, checked: l, defaultChecked: u, required: f, disabled: p, value: v = "on", onCheckedChange: b, ...h } = e,
                        [E, g] = r.useState(null),
                        x = (0, i.e)(t, (e) => g(e)),
                        y = r.useRef(!1),
                        T = !E || Boolean(E.closest("form")),
                        [C = !1, w] = (0, c.T)({ prop: l, defaultProp: u, onChange: b });
                    return (0, s.jsxs)(m, {
                        scope: n,
                        checked: C,
                        disabled: p,
                        children: [
                            (0, s.jsx)(d.WV.button, {
                                type: "button",
                                role: "switch",
                                "aria-checked": C,
                                "aria-required": f,
                                "data-state": R(C),
                                "data-disabled": p ? "" : void 0,
                                disabled: p,
                                value: v,
                                ...h,
                                ref: x,
                                onClick: (0, o.M)(e.onClick, (e) => {
                                    w((e) => !e), T && ((y.current = e.isPropagationStopped()), y.current || e.stopPropagation());
                                }),
                            }),
                            T && (0, s.jsx)(N, { control: E, bubbles: !y.current, name: a, value: v, checked: C, required: f, disabled: p, style: { transform: "translateX(-100%)" } }),
                        ],
                    });
                });
            h.displayName = f;
            var E = "SwitchThumb",
                g = r.forwardRef((e, t) => {
                    const { __scopeSwitch: n, ...r } = e,
                        o = b(E, n);
                    return (0, s.jsx)(d.WV.span, { "data-state": R(o.checked), "data-disabled": o.disabled ? "" : void 0, ...r, ref: t });
                });
            g.displayName = E;
            var N = (e) => {
                const { control: t, checked: n, bubbles: o = !0, ...i } = e,
                    a = r.useRef(null),
                    c = (0, l.D)(n),
                    d = (0, u.t)(t);
                return (
                    r.useEffect(() => {
                        const e = a.current,
                            t = window.HTMLInputElement.prototype,
                            r = Object.getOwnPropertyDescriptor(t, "checked").set;
                        if (c !== n && r) {
                            const t = new Event("click", { bubbles: o });
                            r.call(e, n), e.dispatchEvent(t);
                        }
                    }, [c, n, o]),
                    (0, s.jsx)("input", { type: "checkbox", "aria-hidden": !0, defaultChecked: n, ...i, tabIndex: -1, ref: a, style: { ...e.style, ...d, position: "absolute", pointerEvents: "none", opacity: 0, margin: 0 } })
                );
            };
            function R(e) {
                return e ? "checked" : "unchecked";
            }
            var x = h,
                y = g;
        },
        390478: (e, t, n) => {
            n.d(t, { MT: () => d, cW: () => N });
            var r = n(728514),
                o = n(852053);
            function i(e, t) {
                return (
                    "#comment" !== e.nodeName &&
                    (function (e) {
                        const t = (0, o.k)(e);
                        if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
                        let { display: n, visibility: r } = e.style,
                            i = "none" !== n && "hidden" !== r && "collapse" !== r;
                        if (i) {
                            const { getComputedStyle: t } = e.ownerDocument.defaultView;
                            let { display: n, visibility: r } = t(e);
                            i = "none" !== n && "hidden" !== r && "collapse" !== r;
                        }
                        return i;
                    })(e) &&
                    (function (e, t) {
                        return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"));
                    })(e, t) &&
                    (!e.parentElement || i(e.parentElement, e))
                );
            }
            var s = n(426636),
                a = n(202784);
            const c = a.createContext(null),
                l = "react-aria-focus-scope-restore";
            let u = null;
            function d(e) {
                let { children: t, contain: n, restoreFocus: r, autoFocus: i } = e,
                    d = (0, a.useRef)(null),
                    f = (0, a.useRef)(null),
                    p = (0, a.useRef)([]),
                    { parentNode: v } = (0, a.useContext)(c) || {},
                    N = (0, a.useMemo)(() => new k({ scopeRef: p }), [p]);
                (0, s.b)(() => {
                    let e = v || M.root;
                    if (M.getTreeNode(e.scopeRef) && u && !R(u, e.scopeRef)) {
                        let t = M.getTreeNode(u);
                        t && (e = t);
                    }
                    e.addChild(N), M.addNode(N);
                }, [N, v]),
                    (0, s.b)(() => {
                        let e = M.getTreeNode(p);
                        e && (e.contain = !!n);
                    }, [n]),
                    (0, s.b)(() => {
                        var e;
                        let t = null === (e = d.current) || void 0 === e ? void 0 : e.nextSibling,
                            n = [],
                            r = (e) => e.stopPropagation();
                        for (; t && t !== f.current; ) n.push(t), t.addEventListener(l, r), (t = t.nextSibling);
                        return (
                            (p.current = n),
                            () => {
                                for (let e of n) e.removeEventListener(l, r);
                            }
                        );
                    }, [t]),
                    (function (e, t, n) {
                        (0, s.b)(() => {
                            if (t || n) return;
                            let r = e.current;
                            const i = (0, o.r)(r ? r[0] : void 0);
                            let s = (t) => {
                                let n = t.target;
                                E(n, e.current) ? (u = e) : h(n) || (u = null);
                            };
                            return (
                                i.addEventListener("focusin", s, !1),
                                null == r || r.forEach((e) => e.addEventListener("focusin", s, !1)),
                                () => {
                                    i.removeEventListener("focusin", s, !1), null == r || r.forEach((e) => e.removeEventListener("focusin", s, !1));
                                }
                            );
                        }, [e, t, n]);
                    })(p, r, n),
                    (function (e, t) {
                        let n = (0, a.useRef)(void 0),
                            r = (0, a.useRef)(void 0);
                        (0, s.b)(() => {
                            let i = e.current;
                            if (!t) return void (r.current && (cancelAnimationFrame(r.current), (r.current = void 0)));
                            const s = (0, o.r)(i ? i[0] : void 0);
                            let a = (t) => {
                                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !b(e) || t.isComposing) return;
                                    let n = s.activeElement,
                                        r = e.current;
                                    if (!r || !E(n, r)) return;
                                    let o = w(m(r), { tabbable: !0 }, r);
                                    if (!n) return;
                                    o.currentNode = n;
                                    let i = t.shiftKey ? o.previousNode() : o.nextNode();
                                    i || ((o.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling), (i = t.shiftKey ? o.previousNode() : o.nextNode())), t.preventDefault(), i && x(i, !0);
                                },
                                c = (t) => {
                                    (u && !R(u, e)) || !E(t.target, e.current) ? (b(e) && !g(t.target, e) ? (n.current ? n.current.focus() : u && u.current && T(u.current)) : b(e) && (n.current = t.target)) : ((u = e), (n.current = t.target));
                                },
                                l = (t) => {
                                    r.current && cancelAnimationFrame(r.current),
                                        (r.current = requestAnimationFrame(() => {
                                            var r;
                                            s.activeElement && b(e) && !g(s.activeElement, e) && ((u = e), s.body.contains(t.target) ? ((n.current = t.target), null === (r = n.current) || void 0 === r || r.focus()) : u.current && T(u.current));
                                        }));
                                };
                            return (
                                s.addEventListener("keydown", a, !1),
                                s.addEventListener("focusin", c, !1),
                                null == i || i.forEach((e) => e.addEventListener("focusin", c, !1)),
                                null == i || i.forEach((e) => e.addEventListener("focusout", l, !1)),
                                () => {
                                    s.removeEventListener("keydown", a, !1), s.removeEventListener("focusin", c, !1), null == i || i.forEach((e) => e.removeEventListener("focusin", c, !1)), null == i || i.forEach((e) => e.removeEventListener("focusout", l, !1));
                                }
                            );
                        }, [e, t]),
                            (0, s.b)(
                                () => () => {
                                    r.current && cancelAnimationFrame(r.current);
                                },
                                [r],
                            );
                    })(p, n),
                    (function (e, t, n) {
                        const r = (0, a.useRef)("undefined" != typeof document ? (0, o.r)(e.current ? e.current[0] : void 0).activeElement : null);
                        (0, s.b)(() => {
                            let r = e.current;
                            const i = (0, o.r)(r ? r[0] : void 0);
                            if (!t || n) return;
                            let s = () => {
                                (u && !R(u, e)) || !E(i.activeElement, e.current) || (u = e);
                            };
                            return (
                                i.addEventListener("focusin", s, !1),
                                null == r || r.forEach((e) => e.addEventListener("focusin", s, !1)),
                                () => {
                                    i.removeEventListener("focusin", s, !1), null == r || r.forEach((e) => e.removeEventListener("focusin", s, !1));
                                }
                            );
                        }, [e, n]),
                            (0, s.b)(() => {
                                const r = (0, o.r)(e.current ? e.current[0] : void 0);
                                if (!t) return;
                                let i = (t) => {
                                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !b(e) || t.isComposing) return;
                                    let n = r.activeElement;
                                    if (!E(n, e.current)) return;
                                    let o = M.getTreeNode(e);
                                    if (!o) return;
                                    let i = o.nodeToRestore,
                                        s = w(r.body, { tabbable: !0 });
                                    s.currentNode = n;
                                    let a = t.shiftKey ? s.previousNode() : s.nextNode();
                                    if (((i && r.body.contains(i) && i !== r.body) || ((i = void 0), (o.nodeToRestore = void 0)), (!a || !E(a, e.current)) && i)) {
                                        s.currentNode = i;
                                        do {
                                            a = t.shiftKey ? s.previousNode() : s.nextNode();
                                        } while (E(a, e.current));
                                        t.preventDefault(), t.stopPropagation(), a ? x(a, !0) : h(i) ? x(i, !0) : n.blur();
                                    }
                                };
                                return (
                                    n || r.addEventListener("keydown", i, !0),
                                    () => {
                                        n || r.removeEventListener("keydown", i, !0);
                                    }
                                );
                            }, [e, t, n]),
                            (0, s.b)(() => {
                                const n = (0, o.r)(e.current ? e.current[0] : void 0);
                                if (!t) return;
                                let i = M.getTreeNode(e);
                                var s;
                                return i
                                    ? ((i.nodeToRestore = null !== (s = r.current) && void 0 !== s ? s : void 0),
                                      () => {
                                          let r = M.getTreeNode(e);
                                          if (!r) return;
                                          let o = r.nodeToRestore;
                                          if (
                                              t &&
                                              o &&
                                              (E(n.activeElement, e.current) ||
                                                  (n.activeElement === n.body &&
                                                      (function (e) {
                                                          let t = M.getTreeNode(u);
                                                          for (; t && t.scopeRef !== e; ) {
                                                              if (t.nodeToRestore) return !1;
                                                              t = t.parent;
                                                          }
                                                          return (null == t ? void 0 : t.scopeRef) === e;
                                                      })(e)))
                                          ) {
                                              let t = M.clone();
                                              requestAnimationFrame(() => {
                                                  if (n.activeElement === n.body) {
                                                      let n = t.getTreeNode(e);
                                                      for (; n; ) {
                                                          if (n.nodeToRestore && n.nodeToRestore.isConnected) return void C(n.nodeToRestore);
                                                          n = n.parent;
                                                      }
                                                      for (n = t.getTreeNode(e); n; ) {
                                                          if (n.scopeRef && n.scopeRef.current && M.getTreeNode(n.scopeRef)) {
                                                              return void C(y(n.scopeRef.current, !0));
                                                          }
                                                          n = n.parent;
                                                      }
                                                  }
                                              });
                                          }
                                      })
                                    : void 0;
                            }, [e, t]);
                    })(p, r, n),
                    (function (e, t) {
                        const n = a.useRef(t);
                        (0, a.useEffect)(() => {
                            if (n.current) {
                                u = e;
                                !E((0, o.r)(e.current ? e.current[0] : void 0).activeElement, u.current) && e.current && T(e.current);
                            }
                            n.current = !1;
                        }, [e]);
                    })(p, i),
                    (0, a.useEffect)(() => {
                        const e = (0, o.r)(p.current ? p.current[0] : void 0).activeElement;
                        let t = null;
                        if (E(e, p.current)) {
                            for (let n of M.traverse()) n.scopeRef && E(e, n.scopeRef.current) && (t = n);
                            t === M.getTreeNode(p) && (u = t.scopeRef);
                        }
                    }, [p]),
                    (0, s.b)(
                        () => () => {
                            var e, t, n;
                            let r = null !== (n = null === (t = M.getTreeNode(p)) || void 0 === t || null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
                            (p !== u && !R(p, u)) || (r && !M.getTreeNode(r)) || (u = r), M.removeTreeNode(p);
                        },
                        [p],
                    );
                let L = (0, a.useMemo)(
                        () =>
                            (function (e) {
                                return {
                                    focusNext(t = {}) {
                                        let n = e.current,
                                            { from: r, tabbable: i, wrap: s, accept: a } = t,
                                            c = r || (0, o.r)(n[0]).activeElement,
                                            l = n[0].previousElementSibling,
                                            u = w(m(n), { tabbable: i, accept: a }, n);
                                        u.currentNode = E(c, n) ? c : l;
                                        let d = u.nextNode();
                                        return !d && s && ((u.currentNode = l), (d = u.nextNode())), d && x(d, !0), d;
                                    },
                                    focusPrevious(t = {}) {
                                        let n = e.current,
                                            { from: r, tabbable: i, wrap: s, accept: a } = t,
                                            c = r || (0, o.r)(n[0]).activeElement,
                                            l = n[n.length - 1].nextElementSibling,
                                            u = w(m(n), { tabbable: i, accept: a }, n);
                                        u.currentNode = E(c, n) ? c : l;
                                        let d = u.previousNode();
                                        return !d && s && ((u.currentNode = l), (d = u.previousNode())), d && x(d, !0), d;
                                    },
                                    focusFirst(t = {}) {
                                        let n = e.current,
                                            { tabbable: r, accept: o } = t,
                                            i = w(m(n), { tabbable: r, accept: o }, n);
                                        i.currentNode = n[0].previousElementSibling;
                                        let s = i.nextNode();
                                        return s && x(s, !0), s;
                                    },
                                    focusLast(t = {}) {
                                        let n = e.current,
                                            { tabbable: r, accept: o } = t,
                                            i = w(m(n), { tabbable: r, accept: o }, n);
                                        i.currentNode = n[n.length - 1].nextElementSibling;
                                        let s = i.previousNode();
                                        return s && x(s, !0), s;
                                    },
                                };
                            })(p),
                        [],
                    ),
                    S = (0, a.useMemo)(() => ({ focusManager: L, parentNode: N }), [N, L]);
                return a.createElement(c.Provider, { value: S }, a.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: d }), t, a.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: f }));
            }
            const f = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
                p = f.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
            f.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
            const v = f.join(':not([hidden]):not([tabindex="-1"]),');
            function m(e) {
                return e[0].parentElement;
            }
            function b(e) {
                let t = M.getTreeNode(u);
                for (; t && t.scopeRef !== e; ) {
                    if (t.contain) return !1;
                    t = t.parent;
                }
                return !0;
            }
            function h(e) {
                return g(e);
            }
            function E(e, t) {
                return !!e && !!t && t.some((t) => t.contains(e));
            }
            function g(e, t = null) {
                if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
                for (let { scopeRef: n } of M.traverse(M.getTreeNode(t))) if (n && E(e, n.current)) return !0;
                return !1;
            }
            function N(e) {
                return g(e, u);
            }
            function R(e, t) {
                var n;
                let r = null === (n = M.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
                for (; r; ) {
                    if (r.scopeRef === e) return !0;
                    r = r.parent;
                }
                return !1;
            }
            function x(e, t = !1) {
                if (null == e || t) {
                    if (null != e)
                        try {
                            e.focus();
                        } catch (e) {}
                } else
                    try {
                        (0, r.e)(e);
                    } catch (e) {}
            }
            function y(e, t = !0) {
                let n = e[0].previousElementSibling,
                    r = m(e),
                    o = w(r, { tabbable: t }, e);
                o.currentNode = n;
                let i = o.nextNode();
                return t && !i && ((r = m(e)), (o = w(r, { tabbable: !1 }, e)), (o.currentNode = n), (i = o.nextNode())), i;
            }
            function T(e, t = !0) {
                x(y(e, t));
            }
            function C(e) {
                e.dispatchEvent(new CustomEvent(l, { bubbles: !0, cancelable: !0 })) && x(e);
            }
            function w(e, t, n) {
                let r = (null == t ? void 0 : t.tabbable) ? v : p,
                    s = (0, o.r)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode(e) {
                            var o;
                            return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(r) || !i(e) || (n && !E(e, n)) || ((null == t ? void 0 : t.accept) && !t.accept(e)) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
                        },
                    });
                return (null == t ? void 0 : t.from) && (s.currentNode = t.from), s;
            }
            class L {
                get size() {
                    return this.fastMap.size;
                }
                getTreeNode(e) {
                    return this.fastMap.get(e);
                }
                addTreeNode(e, t, n) {
                    let r = this.fastMap.get(null != t ? t : null);
                    if (!r) return;
                    let o = new k({ scopeRef: e });
                    r.addChild(o), (o.parent = r), this.fastMap.set(e, o), n && (o.nodeToRestore = n);
                }
                addNode(e) {
                    this.fastMap.set(e.scopeRef, e);
                }
                removeTreeNode(e) {
                    if (null === e) return;
                    let t = this.fastMap.get(e);
                    if (!t) return;
                    let n = t.parent;
                    for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && E(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
                    let r = t.children;
                    n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
                }
                *traverse(e = this.root) {
                    if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
                }
                clone() {
                    var e;
                    let t = new L();
                    var n;
                    for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
                    return t;
                }
                constructor() {
                    (this.fastMap = new Map()), (this.root = new k({ scopeRef: null })), this.fastMap.set(null, this.root);
                }
            }
            class k {
                addChild(e) {
                    this.children.add(e), (e.parent = this);
                }
                removeChild(e) {
                    this.children.delete(e), (e.parent = void 0);
                }
                constructor(e) {
                    (this.children = new Set()), (this.contain = !1), (this.scopeRef = e.scopeRef);
                }
            }
            let M = new L();
        },
        533131: (e, t, n) => {
            n.d(t, { u_: () => g, ZA: () => R });
            var r = n(203230),
                o = n(202784);
            const i = (0, o.createContext)(null);
            var s = n(623047),
                a = n(864295),
                c = n(217849),
                l = n(659203),
                u = n(640566),
                d = n(325250),
                f = n(277108),
                p = n(23296),
                v = n(282733),
                m = n(340252);
            const b = (0, o.createContext)(null),
                h = (0, o.createContext)(null);
            function E(e, t) {
                if ((0, o.useContext)(h)) return o.createElement(y, { ...e, modalRef: t }, e.children);
                let { isDismissable: n, isKeyboardDismissDisabled: r, isOpen: i, defaultOpen: s, onOpenChange: a, children: c, isEntering: l, isExiting: u, UNSTABLE_portalContainer: d, shouldCloseOnInteractOutside: f, ...p } = e;
                return o.createElement(R, { isDismissable: n, isKeyboardDismissDisabled: r, isOpen: i, defaultOpen: s, onOpenChange: a, isEntering: l, isExiting: u, UNSTABLE_portalContainer: d, shouldCloseOnInteractOutside: f }, o.createElement(y, { ...p, modalRef: t }, c));
            }
            const g = (0, o.forwardRef)(E);
            function N(e, t) {
                [e, t] = (0, r.pE)(e, t, b);
                let n = (0, o.useContext)(i),
                    a = (0, m.d)(e),
                    c = null == e.isOpen && null == e.defaultOpen && n ? n : a,
                    l = (0, u.B)(t),
                    d = (0, o.useRef)(null),
                    f = (0, r.xB)(l, c.isOpen),
                    p = (0, r.xB)(d, c.isOpen),
                    v = f || p || e.isExiting || !1,
                    h = (0, s.Av)();
                return (!c.isOpen && !v) || h ? null : o.createElement(x, { ...e, state: c, isExiting: v, overlayRef: l, modalRef: d });
            }
            const R = (0, o.forwardRef)(N);
            function x({ UNSTABLE_portalContainer: e, ...t }) {
                let n = t.modalRef,
                    { state: s } = t,
                    { modalProps: l, underlayProps: u } = (0, a.N)(t, s, n),
                    v = (0, r.iW)(t.overlayRef) || t.isEntering || !1,
                    m = (0, r.aX)({ ...t, defaultClassName: "react-aria-ModalOverlay", values: { isEntering: v, isExiting: t.isExiting, state: s } }),
                    b = (0, d.n)(),
                    E = { ...m.style, "--visual-viewport-height": b.height + "px" };
                return o.createElement(
                    c.aV,
                    { isExiting: t.isExiting, portalContainer: e },
                    o.createElement(
                        "div",
                        { ...(0, f.d)((0, p.z)(t), u), ...m, style: E, ref: t.overlayRef, "data-entering": v || void 0, "data-exiting": t.isExiting || void 0 },
                        o.createElement(
                            r.zt,
                            {
                                values: [
                                    [h, { modalProps: l, modalRef: n, isExiting: t.isExiting, isDismissable: t.isDismissable }],
                                    [i, s],
                                ],
                            },
                            m.children,
                        ),
                    ),
                );
            }
            function y(e) {
                let { modalProps: t, modalRef: n, isExiting: s, isDismissable: a } = (0, o.useContext)(h),
                    c = (0, o.useContext)(i),
                    d = (0, o.useMemo)(() => (0, v.l)(e.modalRef, n), [e.modalRef, n]),
                    m = (0, u.B)(d),
                    b = (0, r.iW)(m),
                    E = (0, r.aX)({ ...e, defaultClassName: "react-aria-Modal", values: { isEntering: b, isExiting: s, state: c } });
                return o.createElement("div", { ...(0, f.d)((0, p.z)(e), t), ...E, ref: m, "data-entering": b || void 0, "data-exiting": s || void 0 }, a && o.createElement(l.U, { onDismiss: c.close }), E.children);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-d96105ec.60a0dcfa.js.map
