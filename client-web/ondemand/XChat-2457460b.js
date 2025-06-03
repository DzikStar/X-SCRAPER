"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.XChat-2457460b"],
    {
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
            var l = n(426636),
                s = n(202784);
            const a = s.createContext(null),
                u = "react-aria-focus-scope-restore";
            let c = null;
            function d(e) {
                let { children: t, contain: n, restoreFocus: r, autoFocus: i } = e,
                    d = (0, s.useRef)(null),
                    f = (0, s.useRef)(null),
                    v = (0, s.useRef)([]),
                    { parentNode: p } = (0, s.useContext)(a) || {},
                    N = (0, s.useMemo)(() => new M({ scopeRef: v }), [v]);
                (0, l.b)(() => {
                    let e = p || S.root;
                    if (S.getTreeNode(e.scopeRef) && c && !R(c, e.scopeRef)) {
                        let t = S.getTreeNode(c);
                        t && (e = t);
                    }
                    e.addChild(N), S.addNode(N);
                }, [N, p]),
                    (0, l.b)(() => {
                        let e = S.getTreeNode(v);
                        e && (e.contain = !!n);
                    }, [n]),
                    (0, l.b)(() => {
                        var e;
                        let t = null === (e = d.current) || void 0 === e ? void 0 : e.nextSibling,
                            n = [],
                            r = (e) => e.stopPropagation();
                        for (; t && t !== f.current; ) n.push(t), t.addEventListener(u, r), (t = t.nextSibling);
                        return (
                            (v.current = n),
                            () => {
                                for (let e of n) e.removeEventListener(u, r);
                            }
                        );
                    }, [t]),
                    (function (e, t, n) {
                        (0, l.b)(() => {
                            if (t || n) return;
                            let r = e.current;
                            const i = (0, o.r)(r ? r[0] : void 0);
                            let l = (t) => {
                                let n = t.target;
                                h(n, e.current) ? (c = e) : E(n) || (c = null);
                            };
                            return (
                                i.addEventListener("focusin", l, !1),
                                null == r || r.forEach((e) => e.addEventListener("focusin", l, !1)),
                                () => {
                                    i.removeEventListener("focusin", l, !1), null == r || r.forEach((e) => e.removeEventListener("focusin", l, !1));
                                }
                            );
                        }, [e, t, n]);
                    })(v, r, n),
                    (function (e, t) {
                        let n = (0, s.useRef)(void 0),
                            r = (0, s.useRef)(void 0);
                        (0, l.b)(() => {
                            let i = e.current;
                            if (!t) return void (r.current && (cancelAnimationFrame(r.current), (r.current = void 0)));
                            const l = (0, o.r)(i ? i[0] : void 0);
                            let s = (t) => {
                                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !b(e) || t.isComposing) return;
                                    let n = l.activeElement,
                                        r = e.current;
                                    if (!r || !h(n, r)) return;
                                    let o = L(m(r), { tabbable: !0 }, r);
                                    if (!n) return;
                                    o.currentNode = n;
                                    let i = t.shiftKey ? o.previousNode() : o.nextNode();
                                    i || ((o.currentNode = t.shiftKey ? r[r.length - 1].nextElementSibling : r[0].previousElementSibling), (i = t.shiftKey ? o.previousNode() : o.nextNode())), t.preventDefault(), i && T(i, !0);
                                },
                                a = (t) => {
                                    (c && !R(c, e)) || !h(t.target, e.current) ? (b(e) && !g(t.target, e) ? (n.current ? n.current.focus() : c && c.current && y(c.current)) : b(e) && (n.current = t.target)) : ((c = e), (n.current = t.target));
                                },
                                u = (t) => {
                                    r.current && cancelAnimationFrame(r.current),
                                        (r.current = requestAnimationFrame(() => {
                                            var r;
                                            l.activeElement && b(e) && !g(l.activeElement, e) && ((c = e), l.body.contains(t.target) ? ((n.current = t.target), null === (r = n.current) || void 0 === r || r.focus()) : c.current && y(c.current));
                                        }));
                                };
                            return (
                                l.addEventListener("keydown", s, !1),
                                l.addEventListener("focusin", a, !1),
                                null == i || i.forEach((e) => e.addEventListener("focusin", a, !1)),
                                null == i || i.forEach((e) => e.addEventListener("focusout", u, !1)),
                                () => {
                                    l.removeEventListener("keydown", s, !1), l.removeEventListener("focusin", a, !1), null == i || i.forEach((e) => e.removeEventListener("focusin", a, !1)), null == i || i.forEach((e) => e.removeEventListener("focusout", u, !1));
                                }
                            );
                        }, [e, t]),
                            (0, l.b)(
                                () => () => {
                                    r.current && cancelAnimationFrame(r.current);
                                },
                                [r],
                            );
                    })(v, n),
                    (function (e, t, n) {
                        const r = (0, s.useRef)("undefined" != typeof document ? (0, o.r)(e.current ? e.current[0] : void 0).activeElement : null);
                        (0, l.b)(() => {
                            let r = e.current;
                            const i = (0, o.r)(r ? r[0] : void 0);
                            if (!t || n) return;
                            let l = () => {
                                (c && !R(c, e)) || !h(i.activeElement, e.current) || (c = e);
                            };
                            return (
                                i.addEventListener("focusin", l, !1),
                                null == r || r.forEach((e) => e.addEventListener("focusin", l, !1)),
                                () => {
                                    i.removeEventListener("focusin", l, !1), null == r || r.forEach((e) => e.removeEventListener("focusin", l, !1));
                                }
                            );
                        }, [e, n]),
                            (0, l.b)(() => {
                                const r = (0, o.r)(e.current ? e.current[0] : void 0);
                                if (!t) return;
                                let i = (t) => {
                                    if ("Tab" !== t.key || t.altKey || t.ctrlKey || t.metaKey || !b(e) || t.isComposing) return;
                                    let n = r.activeElement;
                                    if (!h(n, e.current)) return;
                                    let o = S.getTreeNode(e);
                                    if (!o) return;
                                    let i = o.nodeToRestore,
                                        l = L(r.body, { tabbable: !0 });
                                    l.currentNode = n;
                                    let s = t.shiftKey ? l.previousNode() : l.nextNode();
                                    if (((i && r.body.contains(i) && i !== r.body) || ((i = void 0), (o.nodeToRestore = void 0)), (!s || !h(s, e.current)) && i)) {
                                        l.currentNode = i;
                                        do {
                                            s = t.shiftKey ? l.previousNode() : l.nextNode();
                                        } while (h(s, e.current));
                                        t.preventDefault(), t.stopPropagation(), s ? T(s, !0) : E(i) ? T(i, !0) : n.blur();
                                    }
                                };
                                return (
                                    n || r.addEventListener("keydown", i, !0),
                                    () => {
                                        n || r.removeEventListener("keydown", i, !0);
                                    }
                                );
                            }, [e, t, n]),
                            (0, l.b)(() => {
                                const n = (0, o.r)(e.current ? e.current[0] : void 0);
                                if (!t) return;
                                let i = S.getTreeNode(e);
                                var l;
                                return i
                                    ? ((i.nodeToRestore = null !== (l = r.current) && void 0 !== l ? l : void 0),
                                      () => {
                                          let r = S.getTreeNode(e);
                                          if (!r) return;
                                          let o = r.nodeToRestore;
                                          if (
                                              t &&
                                              o &&
                                              (h(n.activeElement, e.current) ||
                                                  (n.activeElement === n.body &&
                                                      (function (e) {
                                                          let t = S.getTreeNode(c);
                                                          for (; t && t.scopeRef !== e; ) {
                                                              if (t.nodeToRestore) return !1;
                                                              t = t.parent;
                                                          }
                                                          return (null == t ? void 0 : t.scopeRef) === e;
                                                      })(e)))
                                          ) {
                                              let t = S.clone();
                                              requestAnimationFrame(() => {
                                                  if (n.activeElement === n.body) {
                                                      let n = t.getTreeNode(e);
                                                      for (; n; ) {
                                                          if (n.nodeToRestore && n.nodeToRestore.isConnected) return void C(n.nodeToRestore);
                                                          n = n.parent;
                                                      }
                                                      for (n = t.getTreeNode(e); n; ) {
                                                          if (n.scopeRef && n.scopeRef.current && S.getTreeNode(n.scopeRef)) {
                                                              return void C(x(n.scopeRef.current, !0));
                                                          }
                                                          n = n.parent;
                                                      }
                                                  }
                                              });
                                          }
                                      })
                                    : void 0;
                            }, [e, t]);
                    })(v, r, n),
                    (function (e, t) {
                        const n = s.useRef(t);
                        (0, s.useEffect)(() => {
                            if (n.current) {
                                c = e;
                                !h((0, o.r)(e.current ? e.current[0] : void 0).activeElement, c.current) && e.current && y(e.current);
                            }
                            n.current = !1;
                        }, [e]);
                    })(v, i),
                    (0, s.useEffect)(() => {
                        const e = (0, o.r)(v.current ? v.current[0] : void 0).activeElement;
                        let t = null;
                        if (h(e, v.current)) {
                            for (let n of S.traverse()) n.scopeRef && h(e, n.scopeRef.current) && (t = n);
                            t === S.getTreeNode(v) && (c = t.scopeRef);
                        }
                    }, [v]),
                    (0, l.b)(
                        () => () => {
                            var e, t, n;
                            let r = null !== (n = null === (t = S.getTreeNode(v)) || void 0 === t || null === (e = t.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null;
                            (v !== c && !R(v, c)) || (r && !S.getTreeNode(r)) || (c = r), S.removeTreeNode(v);
                        },
                        [v],
                    );
                let w = (0, s.useMemo)(
                        () =>
                            (function (e) {
                                return {
                                    focusNext(t = {}) {
                                        let n = e.current,
                                            { from: r, tabbable: i, wrap: l, accept: s } = t,
                                            a = r || (0, o.r)(n[0]).activeElement,
                                            u = n[0].previousElementSibling,
                                            c = L(m(n), { tabbable: i, accept: s }, n);
                                        c.currentNode = h(a, n) ? a : u;
                                        let d = c.nextNode();
                                        return !d && l && ((c.currentNode = u), (d = c.nextNode())), d && T(d, !0), d;
                                    },
                                    focusPrevious(t = {}) {
                                        let n = e.current,
                                            { from: r, tabbable: i, wrap: l, accept: s } = t,
                                            a = r || (0, o.r)(n[0]).activeElement,
                                            u = n[n.length - 1].nextElementSibling,
                                            c = L(m(n), { tabbable: i, accept: s }, n);
                                        c.currentNode = h(a, n) ? a : u;
                                        let d = c.previousNode();
                                        return !d && l && ((c.currentNode = u), (d = c.previousNode())), d && T(d, !0), d;
                                    },
                                    focusFirst(t = {}) {
                                        let n = e.current,
                                            { tabbable: r, accept: o } = t,
                                            i = L(m(n), { tabbable: r, accept: o }, n);
                                        i.currentNode = n[0].previousElementSibling;
                                        let l = i.nextNode();
                                        return l && T(l, !0), l;
                                    },
                                    focusLast(t = {}) {
                                        let n = e.current,
                                            { tabbable: r, accept: o } = t,
                                            i = L(m(n), { tabbable: r, accept: o }, n);
                                        i.currentNode = n[n.length - 1].nextElementSibling;
                                        let l = i.previousNode();
                                        return l && T(l, !0), l;
                                    },
                                };
                            })(v),
                        [],
                    ),
                    O = (0, s.useMemo)(() => ({ focusManager: w, parentNode: N }), [N, w]);
                return s.createElement(a.Provider, { value: O }, s.createElement("span", { "data-focus-scope-start": !0, hidden: !0, ref: d }), t, s.createElement("span", { "data-focus-scope-end": !0, hidden: !0, ref: f }));
            }
            const f = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[contenteditable]"],
                v = f.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
            f.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
            const p = f.join(':not([hidden]):not([tabindex="-1"]),');
            function m(e) {
                return e[0].parentElement;
            }
            function b(e) {
                let t = S.getTreeNode(c);
                for (; t && t.scopeRef !== e; ) {
                    if (t.contain) return !1;
                    t = t.parent;
                }
                return !0;
            }
            function E(e) {
                return g(e);
            }
            function h(e, t) {
                return !!e && !!t && t.some((t) => t.contains(e));
            }
            function g(e, t = null) {
                if (e instanceof Element && e.closest("[data-react-aria-top-layer]")) return !0;
                for (let { scopeRef: n } of S.traverse(S.getTreeNode(t))) if (n && h(e, n.current)) return !0;
                return !1;
            }
            function N(e) {
                return g(e, c);
            }
            function R(e, t) {
                var n;
                let r = null === (n = S.getTreeNode(t)) || void 0 === n ? void 0 : n.parent;
                for (; r; ) {
                    if (r.scopeRef === e) return !0;
                    r = r.parent;
                }
                return !1;
            }
            function T(e, t = !1) {
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
            function x(e, t = !0) {
                let n = e[0].previousElementSibling,
                    r = m(e),
                    o = L(r, { tabbable: t }, e);
                o.currentNode = n;
                let i = o.nextNode();
                return t && !i && ((r = m(e)), (o = L(r, { tabbable: !1 }, e)), (o.currentNode = n), (i = o.nextNode())), i;
            }
            function y(e, t = !0) {
                T(x(e, t));
            }
            function C(e) {
                e.dispatchEvent(new CustomEvent(u, { bubbles: !0, cancelable: !0 })) && T(e);
            }
            function L(e, t, n) {
                let r = (null == t ? void 0 : t.tabbable) ? p : v,
                    l = (0, o.r)(e).createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                        acceptNode(e) {
                            var o;
                            return (null == t || null === (o = t.from) || void 0 === o ? void 0 : o.contains(e)) ? NodeFilter.FILTER_REJECT : !e.matches(r) || !i(e) || (n && !h(e, n)) || ((null == t ? void 0 : t.accept) && !t.accept(e)) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
                        },
                    });
                return (null == t ? void 0 : t.from) && (l.currentNode = t.from), l;
            }
            class w {
                get size() {
                    return this.fastMap.size;
                }
                getTreeNode(e) {
                    return this.fastMap.get(e);
                }
                addTreeNode(e, t, n) {
                    let r = this.fastMap.get(null != t ? t : null);
                    if (!r) return;
                    let o = new M({ scopeRef: e });
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
                    for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && h(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
                    let r = t.children;
                    n && (n.removeChild(t), r.size > 0 && r.forEach((e) => n && n.addChild(e))), this.fastMap.delete(t.scopeRef);
                }
                *traverse(e = this.root) {
                    if ((null != e.scopeRef && (yield e), e.children.size > 0)) for (let t of e.children) yield* this.traverse(t);
                }
                clone() {
                    var e;
                    let t = new w();
                    var n;
                    for (let r of this.traverse()) t.addTreeNode(r.scopeRef, null !== (n = null === (e = r.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== n ? n : null, r.nodeToRestore);
                    return t;
                }
                constructor() {
                    (this.fastMap = new Map()), (this.root = new M({ scopeRef: null })), this.fastMap.set(null, this.root);
                }
            }
            class M {
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
            let S = new w();
        },
        533131: (e, t, n) => {
            n.d(t, { u_: () => g, ZA: () => R });
            var r = n(203230),
                o = n(202784);
            const i = (0, o.createContext)(null);
            var l = n(623047),
                s = n(864295),
                a = n(217849),
                u = n(659203),
                c = n(640566),
                d = n(325250),
                f = n(277108),
                v = n(23296),
                p = n(282733),
                m = n(340252);
            const b = (0, o.createContext)(null),
                E = (0, o.createContext)(null);
            function h(e, t) {
                if ((0, o.useContext)(E)) return o.createElement(x, { ...e, modalRef: t }, e.children);
                let { isDismissable: n, isKeyboardDismissDisabled: r, isOpen: i, defaultOpen: l, onOpenChange: s, children: a, isEntering: u, isExiting: c, UNSTABLE_portalContainer: d, shouldCloseOnInteractOutside: f, ...v } = e;
                return o.createElement(R, { isDismissable: n, isKeyboardDismissDisabled: r, isOpen: i, defaultOpen: l, onOpenChange: s, isEntering: u, isExiting: c, UNSTABLE_portalContainer: d, shouldCloseOnInteractOutside: f }, o.createElement(x, { ...v, modalRef: t }, a));
            }
            const g = (0, o.forwardRef)(h);
            function N(e, t) {
                [e, t] = (0, r.pE)(e, t, b);
                let n = (0, o.useContext)(i),
                    s = (0, m.d)(e),
                    a = null == e.isOpen && null == e.defaultOpen && n ? n : s,
                    u = (0, c.B)(t),
                    d = (0, o.useRef)(null),
                    f = (0, r.xB)(u, a.isOpen),
                    v = (0, r.xB)(d, a.isOpen),
                    p = f || v || e.isExiting || !1,
                    E = (0, l.Av)();
                return (!a.isOpen && !p) || E ? null : o.createElement(T, { ...e, state: a, isExiting: p, overlayRef: u, modalRef: d });
            }
            const R = (0, o.forwardRef)(N);
            function T({ UNSTABLE_portalContainer: e, ...t }) {
                let n = t.modalRef,
                    { state: l } = t,
                    { modalProps: u, underlayProps: c } = (0, s.N)(t, l, n),
                    p = (0, r.iW)(t.overlayRef) || t.isEntering || !1,
                    m = (0, r.aX)({ ...t, defaultClassName: "react-aria-ModalOverlay", values: { isEntering: p, isExiting: t.isExiting, state: l } }),
                    b = (0, d.n)(),
                    h = { ...m.style, "--visual-viewport-height": b.height + "px" };
                return o.createElement(
                    a.aV,
                    { isExiting: t.isExiting, portalContainer: e },
                    o.createElement(
                        "div",
                        { ...(0, f.d)((0, v.z)(t), c), ...m, style: h, ref: t.overlayRef, "data-entering": p || void 0, "data-exiting": t.isExiting || void 0 },
                        o.createElement(
                            r.zt,
                            {
                                values: [
                                    [E, { modalProps: u, modalRef: n, isExiting: t.isExiting, isDismissable: t.isDismissable }],
                                    [i, l],
                                ],
                            },
                            m.children,
                        ),
                    ),
                );
            }
            function x(e) {
                let { modalProps: t, modalRef: n, isExiting: l, isDismissable: s } = (0, o.useContext)(E),
                    a = (0, o.useContext)(i),
                    d = (0, o.useMemo)(() => (0, p.l)(e.modalRef, n), [e.modalRef, n]),
                    m = (0, c.B)(d),
                    b = (0, r.iW)(m),
                    h = (0, r.aX)({ ...e, defaultClassName: "react-aria-Modal", values: { isEntering: b, isExiting: l, state: a } });
                return o.createElement("div", { ...(0, f.d)((0, v.z)(e), t), ...h, ref: m, "data-entering": b || void 0, "data-exiting": l || void 0 }, s && o.createElement(u.U, { onDismiss: a.close }), h.children);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.XChat-2457460b.f492922a.js.map
