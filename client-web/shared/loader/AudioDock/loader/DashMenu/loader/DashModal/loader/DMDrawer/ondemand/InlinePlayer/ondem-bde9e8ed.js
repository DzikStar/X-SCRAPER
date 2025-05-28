"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"],
    {
        224175: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(136728);
            var i = n(503882),
                r = n(781268),
                s = n(700534);
            class o {
                constructor(e) {
                    (this._offsetTop = 0),
                        (this._handleIntersectionChange = (e, t) => {
                            (0, s.pd)(e, t, this._observedElementsMap);
                        }),
                        (this._domNode = e),
                        (this._programmaticScrollListeners = []),
                        (this._rectChangeListeners = []),
                        (this._suppressListeners = !1),
                        (this._observedElementsMap = new Map());
                }
                notifyRectChanged() {
                    this._rectChangeListeners.forEach((e) => e());
                }
                getRect() {
                    const e = this._domNode.getBoundingClientRect();
                    return new i.Z(e.top + this._offsetTop, e.height);
                }
                getRect2D() {
                    const e = this._domNode.getBoundingClientRect();
                    return new r.Z(e.left, e.top + this._offsetTop, e.width, e.height);
                }
                getWidth() {
                    return this._domNode.getBoundingClientRect().width;
                }
                getViewport() {
                    return this._domNode;
                }
                scrollBy(e, t) {
                    t ? this._domNode.scrollBy({ top: e, behavior: t }) : (this._domNode.scrollTop += e), this._programmaticScrollListeners.forEach((t) => t(e));
                }
                scrollTo(e, t, n) {
                    const i = t - this.scrollY();
                    n ? this._domNode.scrollTo({ top: e, left: t, behavior: n }) : ((this._domNode.scrollLeft = e), (this._domNode.scrollTop = t)), this._programmaticScrollListeners.forEach((e) => e(i));
                }
                scrollToBottom() {
                    this.scrollBy(this._domNode.clientHeight - this.scrollY());
                }
                scrollToTop(e) {
                    this.scrollTo(0, 0, e);
                }
                scrollX() {
                    return this._domNode.scrollLeft;
                }
                scrollY() {
                    return this._domNode.scrollTop;
                }
                setOffsetBottom(e) {}
                setOffsetTop(e) {
                    this._offsetTop = e;
                }
                getOffsetTop() {
                    return this._offsetTop;
                }
                getOffsetBottom() {
                    return 0;
                }
                addProgrammaticScrollListener(e) {
                    return this._programmaticScrollListeners.indexOf(e) < 0 && this._programmaticScrollListeners.push(e), () => this.removeProgrammaticScrollListener(e);
                }
                removeProgrammaticScrollListener(e) {
                    const t = this._programmaticScrollListeners.indexOf(e);
                    t > -1 && this._programmaticScrollListeners.splice(t, 1);
                }
                addRectChangeListener(e) {
                    return this._rectChangeListeners.indexOf(e) < 0 && this._rectChangeListeners.push(e), () => this.removeRectChangeListener(e);
                }
                removeRectChangeListener(e) {
                    const t = this._rectChangeListeners.indexOf(e);
                    t > -1 && this._rectChangeListeners.splice(t, 1);
                }
                addScrollListener(e) {
                    return this._addListener("scroll", () => {
                        this._suppressListeners || e();
                    });
                }
                temporarilySuppressScrollListeners(e) {
                    (this._suppressListeners = !0),
                        window.setTimeout(() => {
                            this._suppressListeners = !1;
                        }, e);
                }
                addIntersectionObserverListener(e, t, n) {
                    if (!this._intersectionObserver) {
                        this._intersectionThreshold = n;
                        const e = this._getIOConfigOptions();
                        this._intersectionObserver = (0, s.wE)(e, this._observedElementsMap, this._handleIntersectionChange);
                    }
                    if (this._intersectionObserver) {
                        return (0, s.D1)(this._intersectionObserver, this._observedElementsMap, t, e);
                    }
                }
                getRootMargin() {
                    const e = getComputedStyle(this._domNode).paddingBottom,
                        t = getComputedStyle(this._domNode).paddingLeft,
                        n = getComputedStyle(this._domNode).paddingRight;
                    return `${getComputedStyle(this._domNode).paddingTop} ${n} ${e} ${t}`;
                }
                _getIOConfigOptions() {
                    return { root: this._domNode, rootMargin: this.getRootMargin(), threshold: this._intersectionThreshold };
                }
                _addListener(e, t) {
                    const n = () => t();
                    this._domNode.addEventListener(e, n);
                    return () => {
                        this._domNode.removeEventListener(e, n);
                    };
                }
            }
        },
        333259: (e, t, n) => {
            n.d(t, { $7: () => o, aB: () => s, mr: () => a });
            var i = n(726499),
                r = n(214407);
            const s = i.Z,
                o = { background: "background", active: "active" };
            function a() {
                return (0, r.q)(
                    ({ check: e, query: t }) => {
                        const { remove: n } = s.addEventListener("change", () => {
                            e(s.currentState);
                        });
                        return () => n();
                    },
                    () => s.currentState,
                );
            }
        },
        445250: (e, t, n) => {
            n.d(t, { Z: () => i });
            const i = (e, t, n) => {
                const i = [...e];
                if (e.length > 0) {
                    const e = i[t];
                    i.splice(t, 1), i.splice(n, 0, e);
                }
                return i;
            };
        },
        944681: (e, t, n) => {
            n.d(t, { k: () => r, Q: () => s });
            const i = (e, t, n) => {
                    const i = new Date();
                    let r = i.getFullYear() - e;
                    const s = i.getMonth() + 1 - t;
                    if (s < 0) r -= 1;
                    else if (0 === s) {
                        i.getDate() - n < 0 && (r -= 1);
                    }
                    return r;
                },
                r = (e, t, n, r = !1) => (e && t && n ? i(e, t, n) < 18 : r),
                s = () => new Date().getFullYear() - 120;
        },
        393134: (e, t, n) => {
            function i() {
                let e = () => {},
                    t = () => {};
                return {
                    promise: new Promise((n, i) => {
                        (e = n), (t = i);
                    }),
                    resolve: e,
                    reject: t,
                };
            }
            n.d(t, { g: () => i });
        },
        297436: (e, t, n) => {
            n.d(t, { E5: () => d, lk: () => u });
            var i = n(450681),
                r = n(275365),
                s = n(162664);
            const o = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
                a = (e = [], t = {}) => e.map((e) => ({ ...e, user: (0, s.b)(t[e.user_id]) || { created_at: "", description: "", entities: {}, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, id: parseInt(e.user_id, 10), id_str: e.user_id, name: "", profile_image_url_https: "", protected: !1, screen_name: "", verified: !1 } }));
            function c(e, t) {
                const { entries: n, entryIdsByConversationId: i } = t;
                return (i[e] || []).map((e) => n[e] && n[e].data).filter(Boolean);
            }
            const d = (e, t = o, n) => {
                    const { conversation_id: i, participants: r, ...s } = e;
                    return { conversation_id: i, ...s, entries: t.entryIdsByConversationId[i] || [], participants: a(r, n) };
                },
                u = (e, t, n) => {
                    const { conversation_id: o, participants: d, social_proof: u, ...l } = e,
                        m = { conversation_id: o, ...l, entries: c(o, t), participants: a(d, n), social_proof: void 0 };
                    return (
                        u &&
                            (m.social_proof = ((e = [], t = {}) =>
                                e.map((e) => {
                                    if (e.proof_type === r.UN.MUTUAL_FRIENDS) {
                                        const { users: n, ...r } = e;
                                        return { ...r, users: (0, i.Z)(n.map((e) => (0, s.b)(t[e]))) };
                                    }
                                    return e;
                                }))(u, n)),
                        m
                    );
                };
        },
        234296: (e, t, n) => {
            n.d(t, { Z: () => o, l: () => s });
            var i = n(147143),
                r = n(856674);
            const s = (e, t) => {
                    const n = e.data?.labels?.find((e) => e.label_type === i.w1.PINNED)?.timestamp,
                        r = t.data?.labels?.find((e) => e.label_type === i.w1.PINNED)?.timestamp;
                    return n ? (r ? n - r : -1) : 1;
                },
                o = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, r.ZP)(t, e) : 1) : -1);
        },
        198506: (e, t, n) => {
            n.d(t, { Z: () => d, R: () => u });
            var i = n(662678),
                r = n(275365),
                s = n(856674);
            const o = (e = 0) => new Date(Number(e)),
                a = (e, t) => o(e.join_time) - o(t.join_time),
                c = ({ user: e }, { user: t }) => (0, s.ZP)(e.id_str, t.id_str),
                d = (e, t) => {
                    const { created_by_user_id: n, participants: s, type: o } = e,
                        [d, u] = (0, i.Z)(s, ({ user: e }) => e.id_str === t);
                    return u.length
                        ? o === r.eD.GROUP && 1 === u.length
                            ? [...d, ...u]
                            : n
                              ? u.sort(
                                    (
                                        (...e) =>
                                        (t, n) =>
                                            e.map((e) => e(t, n)).filter((e) => !!e)[0] || 0
                                    )(
                                        (
                                            (e) =>
                                            ({ user: t }, { user: n }) => {
                                                switch (e) {
                                                    case t.id_str:
                                                        return -1;
                                                    case n.id_str:
                                                        return 1;
                                                    default:
                                                        return 0;
                                                }
                                            }
                                        )(n),
                                        a,
                                        c,
                                    ),
                                )
                              : u
                        : d;
                },
                u = (e, t) => (e.includes("-") ? e.replace(t, "").replace(/[e-]/g, "") : null);
        },
        66242: (e, t, n) => {
            n.d(t, { ZP: () => m, e7: () => f });
            var i = n(976145),
                r = n(111677),
                s = n.n(r),
                o = n(275365),
                a = n(198506);
            const c = s().b5b7fb94,
                d = s().g755fcde,
                u = s().f6b1ff81,
                l = s().j652293d,
                m = (e, t, n, i) => {
                    const { type: r, name: s, participants: d = {} } = e;
                    if (r === o.eD.GROUP && s) return s;
                    if (!d.length) return;
                    if (r === o.eD.GROUP && n) return c;
                    const u = (0, a.Z)(e, t).map(({ user: e }) => e);
                    return f(u, t, r, i);
                },
                f = (e = [], t, n = o.eD.GROUP, r) => {
                    const s = e.filter((e) => e.id_str !== t).map((e) => e.name);
                    switch (s.length) {
                        case 0:
                            return d;
                        case 1: {
                            const [e] = s;
                            return n === o.eD.GROUP ? u({ name: e }) : e;
                        }
                        default: {
                            const e = !0,
                                t = r ? s.slice(0, r) : s,
                                n = (0, i.Z)(t, e),
                                o = r ? Math.max(s.length - r, 0) : 0;
                            return o > 0 ? l({ listOfParticipants: n, count: o }) : n;
                        }
                    }
                };
        },
        495707: (e, t, n) => {
            n.d(t, { E: () => r });
            var i = n(202784);
            function r(e) {
                const t = i.useRef(e);
                (t.current = e),
                    i.useEffect(() => {
                        try {
                            const e = (function () {
                                if ("mediaSession" in navigator) return navigator.mediaSession;
                            })();
                            if (!e) return;
                            const n = t.current;
                            return (
                                e.setActionHandler("enterpictureinpicture", () => {
                                    n();
                                }),
                                () => {
                                    e.setActionHandler("enterpictureinpicture", null);
                                }
                            );
                        } catch {}
                    }, []);
            }
        },
        359127: (e, t, n) => {
            n.d(t, { Q$: () => u, ZQ: () => d, zI: () => c });
            var i = n(202784),
                r = n(928316),
                s = n(392237),
                o = n(398601),
                a = n(392644);
            const c = "documentPictureInPicture" in window;
            function d(e) {
                const { children: t, dpipWindow: n } = e;
                return n ? i.createElement(l, { children: t, dpipWindow: n }) : t;
            }
            async function u(e) {
                const { featureSwitches: t, options: n } = e,
                    i = await window.documentPictureInPicture.requestWindow(n),
                    r = (0, a.Z)(t, s.default.theme.paletteName, i.document);
                return (
                    i.addEventListener("pagehide", () => {
                        r?.();
                    }),
                    await (function (e) {
                        return Promise.all(
                            [...document.styleSheets].map((t) => {
                                try {
                                    const n = [...t.cssRules]
                                            .map(function (e) {
                                                return e.cssText;
                                            })
                                            .join(""),
                                        i = document.createElement("style");
                                    (i.textContent = n), e.document.head?.appendChild(i);
                                } catch (n) {
                                    const i = document.createElement("link");
                                    if (null == t.href) return Promise.resolve();
                                    (i.rel = "stylesheet"), (i.type = t.type), (i.media = t.media.toString()), (i.href = t.href), e.document.head?.appendChild(i);
                                }
                            }),
                        );
                    })(i),
                    { dispose: r, dpip: i }
                );
            }
            function l(e) {
                const { children: t, dpipWindow: n } = e;
                return (0, r.createPortal)(i.createElement(o.Bt, null, t), n.document.body);
            }
        },
        735e3: (e, t, n) => {
            n.d(t, { o: () => r });
            var i = n(459643);
            const r = (0, i.Z)([]);
            (0, i.Z)({});
        },
        585454: (e, t, n) => {
            n.d(t, { h: () => s });
            var i = n(565058),
                r = n(420182);
            function s(e, t, n) {
                return (0, i.cn)(null, (i, s) => {
                    const o = e(),
                        a = i(r.zE);
                    let c = n ? n.initialState : i(o);
                    const d = () => {
                        const e = i(o);
                        c !== e && t(i, s, c, e), (c = e);
                    };
                    n && d();
                    const u = a.sub(o, d);
                    return () => {
                        u(), n && t(i, s, c, n.initialState);
                    };
                });
            }
        },
        811322: (e, t, n) => {
            function i(e) {
                const t = new WeakMap();
                return (n) =>
                    t.get(n) ??
                    (() => {
                        const i = e(n);
                        return t.set(n, i), i;
                    })();
            }
            n.d(t, { X: () => i });
        },
        551423: (e, t, n) => {
            n.d(t, { r: () => r });
            var i = n(565058);
            function r(e) {
                const t = (0, i.cn)(e, (e, n, i) => n(t, i));
                return t;
            }
        },
        563781: (e, t, n) => {
            n.d(t, { O: () => o, u: () => s });
            var i = n(565058),
                r = n(420182);
            function s() {
                const e = (0, i.cn)(0);
                return (0, i.cn)(
                    (t) => (
                        t(e),
                        () => {
                            t(r.zE).set(e, (e) => e + 1);
                        }
                    ),
                    (t, n) => {
                        n(e, (e) => e + 1);
                    },
                );
            }
            function o(e) {
                const t = s();
                return (0, i.cn)(
                    (n) => (n(t), e(n)),
                    (e, n) => {
                        n(t);
                    },
                );
            }
        },
        396636: (e, t, n) => {
            n.d(t, { Q: () => c });
            var i = n(987809),
                r = n(427266),
                s = n(585454),
                o = n(526250),
                a = n(551423);
            function c(e, t) {
                const n = (0, i.xu)((e) => (0, a.r)());
                return (0, s.h)(
                    e,
                    (e, i, r, s) => {
                        const a = new Set(r),
                            c = s.filter((e) => !a.has(e));
                        for (const e of c) {
                            const r = i((0, o.v)(t), e);
                            i(n(e), r);
                        }
                        const d = new Set(s),
                            u = r.filter((e) => !d.has(e));
                        for (const t of u) e(n(t))?.(), i(n(t), void 0);
                    },
                    { initialState: (0, r.dW)([]) },
                );
            }
        },
        908599: (e, t, n) => {
            n.d(t, { Y: () => r });
            var i = n(565058);
            function r(e) {
                const t = (0, i.cn)();
                return (0, i.cn)(
                    (e) => e(t),
                    (n, i, ...r) => {
                        const s = e(n, i, ...r);
                        return i(t, s), s;
                    },
                );
            }
        },
        608925: (e, t, n) => {
            n.d(t, { G: () => r });
            var i = n(585454);
            function r(e, t, n) {
                const r = n?.getKey;
                return (0, i.h)(e, (e, n, i, s) => {
                    const o = new Set(r ? i.map((e) => r(e)) : i),
                        a = s.filter((e) => !o.has(r ? r(e) : e)),
                        c = new Set(r ? s.map((e) => r(e)) : s),
                        d = i.filter((e) => !c.has(r ? r(e) : e));
                    t(e, n, { added: a, removed: d });
                });
            }
        },
        358572: (e, t, n) => {
            n.d(t, { u: () => a });
            var i = n(476984),
                r = n.n(i),
                s = n(565058),
                o = n(420182);
            function a(e) {
                const t = (0, s.cn)();
                return (0, s.cn)((n) => {
                    const i = n(o.zE),
                        s = i.get(t),
                        a = e(n);
                    return i.set(t, a), s && r()(a, s) ? s : a;
                });
            }
        },
        901910: (e, t, n) => {
            n.d(t, { W: () => s });
            var i = n(565058),
                r = n(551423);
            function s(e) {
                const t = (0, i.cn)(0),
                    n = (0, r.r)();
                return (0, i.cn)(
                    null,
                    (i, r, ...s) => (
                        r(t, (e) => e + 1),
                        1 === i(t) && r(n, e(i, r, ...s)),
                        () => {
                            r(t, (e) => e - 1), 0 === i(t) && i(n)?.();
                        }
                    ),
                );
            }
        },
        65178: (e, t, n) => {
            n.d(t, { g: () => r });
            var i = n(565058);
            function r() {
                const e = (0, i.cn)([]),
                    t = (0, i.cn)(null, (t, n, r) => {
                        const s = (0, i.cn)(r);
                        n(e, (e) => e.concat(s));
                        return {
                            dispose: () => {
                                n(e, (e) => e.filter((e) => e !== s));
                            },
                            valueAtom: s,
                        };
                    });
                return { get: (0, i.cn)((t) => t(e).map((e) => t(e))), sub: t };
            }
        },
        24466: (e, t, n) => {
            n.d(t, { L: () => o });
            var i = n(565058),
                r = n(901910),
                s = n(477635);
            function o(e, t) {
                const n = (0, i.cn)(e),
                    o = (0, r.W)((n, i) => {
                        const r = setInterval(() => {
                            i(a, e(n));
                        }, t);
                        return () => clearInterval(r);
                    }),
                    a = (0, s.t)(() => n);
                return { sub: o, value: a };
            }
        },
        477635: (e, t, n) => {
            n.d(t, { t: () => r });
            var i = n(565058);
            function r(e) {
                const t = (0, i.cn)(),
                    n = (0, i.cn)(
                        (n) => {
                            const i = n(t);
                            return i ? i.value : n(e());
                        },
                        (e, i, r) => {
                            i(t, "function" == typeof r ? { value: r(e(n)) } : { value: r });
                        },
                    );
                return n;
            }
        },
        108922: (e, t, n) => {
            n.d(t, { J: () => s });
            var i = n(565058),
                r = n(551423);
            function s(e) {
                const t = (0, r.r)(),
                    n = (0, i.cn)(null, (n, i) => {
                        n(t)?.();
                        const r = setTimeout(() => {
                            i(s, void 0);
                        }, e);
                        i(t, () => {
                            clearTimeout(r);
                        });
                    }),
                    s = (0, i.cn)(void 0, (e, t, i) => {
                        t(s, "function" == typeof i ? i(e(s)) : i), t(n);
                    });
                return s;
            }
        },
        613533: (e, t, n) => {
            n.d(t, { G: () => r });
            var i = n(565058);
            function r(e) {
                const t = (0, i.cn)(() => new Map());
                return (0, i.cn)(null, (n, i, ...r) => {
                    const s = n(t),
                        o = JSON.stringify(r),
                        a = s.get(o);
                    if (a) return a;
                    const c = e(n, i, ...r);
                    return (
                        s.set(o, c),
                        c.finally(() => {
                            s.delete(o);
                        }),
                        c
                    );
                });
            }
        },
        802222: (e, t, n) => {
            n.d(t, { h: () => r });
            n(136728);
            var i = n(565058);
            function r() {
                const e = (0, i.cn)([]);
                return {
                    add: (0, i.cn)(null, (t, n, i) => {
                        n(e, (e) => e.concat(i));
                    }),
                    disposeAll: (0, i.cn)(null, (t, n) => {
                        const i = t(e),
                            r = [];
                        if (
                            (i.forEach((e) => {
                                try {
                                    e();
                                } catch (e) {
                                    r.push(e);
                                }
                            }),
                            n(e, []),
                            r.length)
                        )
                            throw r[0];
                    }),
                };
            }
        },
        513588: (e, t, n) => {
            n.d(t, { J: () => a });
            var i = n(565058),
                r = n(987809),
                s = n(516951);
            const o = (0, r.xu)((e) => (0, i.cn)(() => e, s.Z));
            function a(e) {
                return o(e);
            }
        },
        53317: (e, t, n) => {
            n.d(t, { P: () => o });
            var i = n(202784),
                r = n(400752);
            const s = i.createContext({ isLoading: !1 });
            function o({ children: e, renderAtom: t }) {
                return i.createElement(i.Suspense, { fallback: i.createElement(s.Provider, { value: c }, "function" == typeof e ? e(!0) : e) }, i.createElement(a, { renderAtom: t }), "function" == typeof e ? e(!1) : e);
            }
            function a({ renderAtom: e }) {
                (0, r.Dv)(e);
            }
            const c = { isLoading: !0 };
        },
        530745: (e, t, n) => {
            n.d(t, { Ci: () => D, Ct: () => _, Dd: () => E, Dy: () => b, E4: () => I, EF: () => P, F$: () => u, G0: () => x, KH: () => T, L_: () => C, NW: () => a, Pf: () => v, QK: () => s, Qs: () => o, R2: () => R, Rv: () => d, Si: () => p, UH: () => f, Ur: () => w, W2: () => L, WX: () => i, Yt: () => l, ZP: () => M, Zd: () => O, cY: () => h, i_: () => y, jF: () => S, kl: () => r, nQ: () => c, oh: () => N, tI: () => A, uR: () => m, xp: () => g });
            const i = "ArrowDown",
                r = "ArrowUp",
                s = "ArrowLeft",
                o = "ArrowRight",
                a = "Enter",
                c = "Escape",
                d = 27,
                u = "XF86Back",
                l = "XF86PlayBack",
                m = "XF86Exit",
                f = "GoBack",
                h = 461,
                _ = "Exit",
                p = 415,
                v = 19,
                g = 417,
                b = 412,
                L = 413,
                w = "ESC",
                y = "Exit",
                E = "Tab",
                S = "Delete",
                D = "Backspace",
                O = "Play",
                I = "Pause",
                T = "Stop",
                A = "MediaPlayPause",
                M = "MediaPlay",
                P = "MediaPause",
                N = "MediaStop",
                x = "MediaFastForward",
                R = "MediaRewind",
                C = "Space";
        },
        481399: (e, t, n) => {
            function i(e) {
                const t = {};
                return (
                    Object.keys(e).forEach((e) => {
                        t[e] = e;
                    }),
                    Object.freeze(t)
                );
            }
            n.d(t, { Z: () => i });
        },
        166677: (e, t, n) => {
            n.d(t, { $r: () => H, O9: () => q, ZP: () => K, vK: () => Y });
            var i = n(688715),
                r = n(111677),
                s = n.n(r),
                o = n(653843),
                a = n(122123),
                c = n(417144),
                d = n(884495),
                u = n(716233),
                l = n(540387);
            const m = s().b8098028,
                f = s().b36f4170,
                h = s().hab3781e,
                _ = s().f6c4fb02,
                p = s().g0af3dd2,
                v = s().b8c8b0be,
                g = s().ica6d718,
                b = s().b28d44f7({ limit: 15 }),
                L = s().i1db7d13,
                w = s().baac0ed7,
                y = L({ limit: 512 }),
                E = s().a22385bb,
                S = s().be0440bf,
                D = E({ limit: 140 }),
                O = s().feeba512,
                I = s().db123c02,
                T = s().db6001e7({ limit: 5 }),
                A = s().eb96d952,
                M = s().i859a9d4,
                P = s().b3880588,
                N = s().ca058b68,
                x = s().id24379c,
                R = s().h4d7cbcc,
                C = (0, i.ju)("https://support.x.com/articles/20156423"),
                U = (0, i.ju)("https://help.x.com/using-twitter/twitter-videos"),
                k = (e) => ({ text: e }),
                Z = (e) => ({ text: e, action: { label: M, link: C } }),
                G = (e) => ({ text: e, action: { label: M, link: U } }),
                B = { [o.Y7.GIF_IS_TOO_LARGE]: k(b), [o.Y7.CANNOT_BE_PROCESSED]: k(m), [o.Y7.FILE_IS_NOT_AN_IMAGE]: k(h) },
                F = { [c.d.ZERO_FILE_LENGTH]: k(f), [c.d.TIMEOUT]: k(P) },
                z = { ...F, [c.d.FILE_TOO_LARGE]: k(T), [c.d.UNSUPPORTED_MEDIA]: Z(I), [c.d.INVALID_MEDIA]: Z(O) },
                V = { ...F, [c.d.FILE_TOO_LARGE]: k(b), [c.d.UNSUPPORTED_MEDIA]: Z(p), [c.d.INVALID_MEDIA]: Z(_) },
                j = { ...F, [c.d.FILE_TOO_LARGE]: k(y), [c.d.UNSUPPORTED_MEDIA]: G(g), [c.d.INVALID_MEDIA]: G(v) },
                $ = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                W = 1048576,
                Q = 1073741824,
                q = (e) => Object.values($).includes(e.type),
                X = (e) => {
                    const { code: t, limit: n, type: i } = e;
                    if (t)
                        switch (i) {
                            case $.MAXSIZE:
                                return t === u.BW.GIF_IS_TOO_LARGE ? k(b) : t === u.BW.VIDEO_IS_TOO_LARGE && void 0 !== n ? k(n >= Q ? w({ limit: Math.round(n / Q) }) : L({ limit: Math.round(n / W) })) : k(y);
                            case $.MAXDURATION:
                                return void 0 !== n ? (n > 140 ? k(S({ limit: Math.round(n / 60) })) : { text: E({ limit: Math.round(n) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : k(D);
                            case $.RESIZE:
                                return B[t];
                            case $.UPLOAD:
                                if (e.isImage) return z[t];
                                if (e.isGif) return V[t];
                                if (e.isVideo) return j[t];
                                break;
                            case $.METADATA:
                                return k(R);
                        }
                },
                H = (e) => {
                    if (q(e)) return e;
                };
            function K(e, t = x) {
                const n = H(e);
                if (n) {
                    const i = e.message ? `${t} ${e.message}` : t;
                    return X(n) || k(i);
                }
            }
            function Y(e, t = N) {
                return e.type === a.gK.type && e.code === a.gK.NO_DIMENSIONS ? k(A) : e.type === l.hb.type && e.code === l.hb.NO_DIMENSIONS ? G(v) : k(t);
            }
        },
        221562: (e, t, n) => {
            n.d(t, { BX: () => p, Uk: () => l, Xj: () => m, ZP: () => E });
            var i = n(468811),
                r = n.n(i),
                s = n(595088),
                o = n(161821),
                a = n(184605),
                c = n(716233),
                d = n(774717);
            const u = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                l = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                m = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                f = (e) => (e ? h(e) : void 0),
                h = (e) =>
                    (0, s.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, n]) => ("object" == typeof n ? `${t}=${_(e[t])}` : `${t}=${String(n)}`))
                        .join(";"),
                _ = (e) =>
                    (0, o.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                p = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                v = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                g = { [p.SruUpload]: v.SruUpload, [p.UploadSubmitUntilSruFinish]: v.UploadSubmitUntilSruFinish },
                b = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                L = (e, t) => ((0, a.Z)(e) && (0, a.Z)(t) ? Math.round(t - e) : void 0),
                w = () => (window.performance ? window.performance.now() : Date.now()),
                y = (e, t) => (e === c.xz.DMGif || e === c.xz.TweetGif ? b.All : (e !== c.xz.DMVideo && e !== c.xz.TweetVideo && e !== c.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? b.Short : t < 20 ? b.Medium : t < 45 ? b.Long : t < 90 ? b.XLong : t < 140 ? b.L90to140s : t < 300 ? b.L140to300s : t < 600 ? b.L300to600s : t < 1200 ? b.L600to1200s : t < 1800 ? b.L1200to1800s : t < 2700 ? b.L1800to2700s : t < 3600 ? b.L2700to3600s : t < 4500 ? b.L3600to4500s : t < 5400 ? b.L4500to5400s : t < 6300 ? b.L5400to6300s : t < 7200 ? b.L6300to7200s : t < 10800 ? b.L7200to10800s : t < 14400 ? b.L10800to14400s : b.LGT14400s);
            class E {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = r().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: n, videoDuration: i } = e;
                            return `${t ? u.Remote : u.LocalFile}:${n}:${y(n, i)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let n = L(this._startTimes[e], w());
                        if (this._keyPrefix && void 0 !== n) {
                            void 0 !== this._pausedDuration[e] && (n -= this._pausedDuration[e]);
                            const i = this._getKey(e, t);
                            this._record(i, n, e === p.Full ? this._metadata : e === p.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = w()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = L(this._startTimes[p.Full], w());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[p.Full] && (e -= this._pausedDuration[p.Full]);
                        const t = this._getKey(p.Full, "submit");
                        this._record(t, e, this._metadata);
                    }
                }
                setMetadata(e) {
                    this._metadata = { ...this._metadata, ...e };
                }
                setFileMetadata(e) {
                    this._fileMetadata = { ...this._fileMetadata, ...e };
                }
                toggleOperationPaused(e, t) {
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = w();
                    else if (!t) {
                        const t = L(this._pauseTimes[e], w());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const n = (this._eagerUploadDisabled && g[e]) || e;
                    return `${this._keyPrefix}:${n}:${t}`;
                }
                _record(e, t, n) {
                    const i = { duration_ms: t, impression_id: this._impressionId, metadata: f(n) };
                    d.IM(e, i, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, n) => {
            n.d(t, { BW: () => p, SB: () => y, TO: () => S, Tz: () => g, U$: () => w, ff: () => v, vC: () => L, vn: () => E, xz: () => b, y$: () => h });
            var i = n(182056),
                r = n(323265),
                s = n(540387);
            const o = 1024,
                a = 1024 * o,
                c = 1,
                d = 4096,
                u = 2048,
                l = 400,
                m = 1500,
                f = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                h = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                _ = 600,
                p = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                v = { VIDEO_IS_TOO_LONG: 1 },
                g = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                b = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                L = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                w = (e) => {
                    const { height: t, left: n, width: i } = e,
                        r = Math.round(t / 2);
                    return `&salient_rect=${Math.round(n + i / 2)},${r},1,1`;
                };
            function y(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    n = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || n ? 1 : 0;
            }
            function E(e, t, n, p, v) {
                const g = p?.location,
                    b = y({ featureSwitches: e, userClaims: t });
                let w, E;
                if (n.isSubtitles) w = 0;
                else if (n.isGif)
                    switch (g) {
                        case L.Avatar:
                            w = e.getNumberValue("media_async_upload_max_avatar_gif_size", f.Avatar_Gif) * a;
                            break;
                        case L.Dm:
                        case L.Tweet:
                        default:
                            w = e.getNumberValue("media_async_upload_max_gif_size", f.Gif) * a;
                    }
                else {
                    if (!(n instanceof s.ZP))
                        return (function (e, t, n) {
                            let s;
                            switch (t) {
                                case L.Avatar:
                                    s = l;
                                    break;
                                case L.CommunityBanner:
                                case L.ListBanner:
                                case L.ProfileBanner:
                                    s = m;
                                    break;
                                default:
                                    s = r.ZP.isDesktopOS() ? d : u;
                            }
                            const c = e.getNumberValue("media_async_upload_max_image_size", f.Image) * a;
                            return i.Z.getConnectionInfo().then(
                                (i) => {
                                    let a = c;
                                    return "slow-2g" === i.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * o) : n || "2g" === i.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * o) : "3g" === i.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * o) : "4g" !== i.effectiveType || r.ZP.isDesktopOS() || t !== L.Tweet || (s = d), { maxDimension: s, maxFileSize: Math.min(c, a) };
                                },
                                () => ({ maxDimension: s, maxFileSize: c }),
                            );
                        })(e, g, v);
                    if (1 === b) {
                        if ("dm" === g) E = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", _);
                        else E = e.getNumberValue("media_async_upload_longer_video_max_video_duration", h.Duration[b]) * c;
                        w = e.getNumberValue("media_async_upload_longer_video_max_video_size", h.Size[b]) * a;
                    } else (E = e.getNumberValue("media_async_upload_max_video_duration", h.Duration[b]) * c), (w = e.getNumberValue("media_async_upload_max_video_size", h.Size[b]) * a);
                }
                return Promise.resolve({ maxFileSize: w, maxDuration: E });
            }
            function S(e) {
                return !(r.ZP.isIOS() && e.size > 3e8);
            }
        },
        159573: (e, t, n) => {
            n.d(t, { z: () => r });
            var i = n(401013);
            class r {
                constructor() {
                    this._queue = new i.c();
                }
                isEmpty() {
                    return this._queue.isEmpty();
                }
                enqueue(e) {
                    const t = this._queue,
                        n = t.isEmpty();
                    t.enqueue(e), n && this._dequeue();
                }
                _dequeue() {
                    const e = this._queue,
                        t = e.peek();
                    t &&
                        t().finally(() => {
                            e.dequeue(), this._dequeue();
                        });
                }
            }
        },
        101879: (e, t, n) => {
            n.d(t, { Z: () => i });
            n(202784), n(163301), n(443781);
            const i = (e, t) => e;
        },
        946208: (e, t, n) => {
            n.d(t, { Id: () => i, ZP: () => o, h_: () => r });
            n(543673), n(240753), n(128399);
            const i = [".srt", "text/plain", ""],
                r = (e) => -1 !== i.indexOf(e.type),
                s = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class o {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([s(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        934871: (e, t, n) => {
            n.d(t, { HO: () => w, RY: () => f, Ux: () => m, VQ: () => d, _e: () => h, cf: () => p, eR: () => D, fx: () => L, jq: () => l, nq: () => b, rW: () => u, yw: () => y });
            var i = n(202784),
                r = n(400752),
                s = n(565058),
                o = n(536387),
                a = n(526250),
                c = n(856824);
            function d() {
                !(function () {
                    const e = (0, r.b9)(O);
                    i.useEffect(() => e(), [e]);
                })(),
                    (function () {
                        const e = (0, r.b9)(T);
                        i.useEffect(() => e(), [e]);
                    })(),
                    (0, a.N)(A);
            }
            function u() {
                return (0, r.Dv)(I);
            }
            function l() {
                return (0, r.Dv)(b);
            }
            function m() {
                return (0, r.Dv)(g);
            }
            function f() {
                return (0, r.b9)(D);
            }
            function h() {
                return (0, r.b9)(S);
            }
            function _() {
                return (0, c.GQ)()
                    .enumerateDevices()
                    .then((e) => e.filter(({ kind: e }) => "videoinput" === e));
            }
            const p = (0, o.K9)(
                    (e) => (
                        e(I),
                        (0, c.GQ)()
                            .enumerateDevices()
                            .then((e) => e.filter(({ kind: e }) => "videoinput" === e))
                    ),
                ),
                v = (0, s.cn)(null, (e, t) => {
                    t(p);
                }),
                g = (0, s.cn)(!1),
                b = (0, s.cn)(),
                L = (0, s.cn)(),
                w = (0, s.cn)(null, (e, t, n) => {
                    const i = e(b);
                    return (
                        i?.stop(),
                        t(L, n),
                        t(g, !0),
                        (function (e) {
                            return (0, c.GQ)()
                                .getUserMedia({ video: { width: 1280, height: 720, facingMode: "user", deviceId: e.deviceId } })
                                .then((e) => e.getVideoTracks()[0]);
                        })(n)
                            .then(
                                (i) => {
                                    e(L) === n
                                        ? (t(b, i),
                                          n.label ||
                                              (t(v),
                                              _().then((e) => {
                                                  t(L, e[0]);
                                              })))
                                        : i.stop();
                                },
                                () => {
                                    t(b, void 0);
                                },
                            )
                            .finally(() => {
                                t(g, !1);
                            })
                    );
                }),
                y = (0, s.cn)(null, (e, t) => {
                    const n = t(S);
                    return n instanceof Promise ? n.then(() => e(b)) : Promise.resolve(e(b));
                }),
                E = (0, s.cn)(null, async (e, t) => {
                    let n = await _();
                    if (n.length && (n[0].deviceId || (await t(w, n[0]), !e(b))) && ((n = await _()), n[0]?.deviceId)) for (const i of n) if ((await t(w, i), e(b))) break;
                }),
                S = (0, s.cn)(null, (e, t) => {
                    if (!e(b)) return t(E);
                }),
                D = (0, s.cn)(null, (e, t) => {
                    const n = e(b);
                    n && (n.stop(), t(b, void 0), t(L, void 0));
                }),
                O = (0, c._D)(v),
                { isPermissionDeniedAtom: I, listenPermissionStateAtom: T } = (0, c.Cv)("camera");
            const A = (0, c.wc)(b);
        },
        856824: (e, t, n) => {
            n.d(t, { Cv: () => d, GQ: () => c, XI: () => m, _D: () => l, wc: () => u });
            n(571372);
            var i = n(565058),
                r = n(516951),
                s = n(2138),
                o = n(526250),
                a = n(563781);
            function c() {
                if (!navigator.mediaDevices) throw new Error("navigator.mediaDevices was not found");
                return navigator.mediaDevices;
            }
            function d(e) {
                const t = (0, i.cn)("prompt"),
                    n = (0, i.cn)((e) => "denied" === e(t));
                return {
                    listenPermissionStateAtom: (0, i.cn)(null, (n, i) => {
                        let r = !0;
                        return (
                            navigator.permissions?.query({ name: e }).then(
                                (e) => {
                                    r &&
                                        (i(t, e.state),
                                        e.addEventListener("change", () => {
                                            i(t, e.state);
                                        }));
                                },
                                () => {},
                            ),
                            () => {
                                r = !1;
                            }
                        );
                    }),
                    isPermissionDeniedAtom: n,
                };
            }
            function u(e, t) {
                return (0, o.v)((n, i) => {
                    const s = n(e);
                    if (!s) return r.Z;
                    const o = () => {
                        i(e, void 0), t && i(t);
                    };
                    return (
                        s.addEventListener("ended", o),
                        () => {
                            s.removeEventListener("ended", o);
                        }
                    );
                });
            }
            function l(e) {
                return (0, i.cn)(null, (t, n) => {
                    const i = (0, s.Z)(
                        (t) => {
                            n(e);
                        },
                        500,
                        { trailing: !0 },
                    );
                    return (
                        c().addEventListener("devicechange", i),
                        () => {
                            c().removeEventListener("devicechange", i);
                        }
                    );
                });
            }
            function m(e) {
                const t = (0, a.O)((t) => t(e())?.muted),
                    n = (0, o.v)((n, i) => {
                        const s = n(e());
                        if (!s) return r.Z;
                        const o = () => i(t);
                        return (
                            s.addEventListener("mute", o),
                            s.addEventListener("unmute", o),
                            () => {
                                s.removeEventListener("mute", o), s.removeEventListener("unmute", o);
                            }
                        );
                    });
                return { isMutedAtom: t, isMutedEffectAtom: n };
            }
        },
        309487: (e, t, n) => {
            n.d(t, { W: () => o });
            var i = n(934871),
                r = n(254810),
                s = n(251836);
            function o() {
                (0, r.LA)(), (0, i.VQ)(), (0, s.vr)();
            }
        },
        254810: (e, t, n) => {
            n.d(t, { Ao: () => w, LA: () => u, LK: () => l, Qc: () => O, Qf: () => T, Vv: () => S, dB: () => p, fm: () => v, fx: () => b, jq: () => k, lc: () => U, pL: () => E, vl: () => f });
            var i = n(202784),
                r = n(400752),
                s = n(565058),
                o = n(536387),
                a = n(526250),
                c = n(563781),
                d = n(856824);
            function u() {
                !(function () {
                    const e = (0, r.b9)(M);
                    i.useEffect(() => e(), [e]);
                })(),
                    (function () {
                        const e = (0, r.b9)(N);
                        i.useEffect(() => e(), [e]);
                    })(),
                    (0, a.N)(x),
                    (0, a.N)(C);
            }
            function l() {
                return (0, r.Dv)(P);
            }
            function m() {
                return (0, d.GQ)()
                    .enumerateDevices()
                    .then((e) => {
                        const t = window.location.pathname.startsWith("/i/conferences-room");
                        return e.find(({ deviceId: e, kind: n, label: i }) => "audioinput" === n && !(t && i.includes("Logitech Tap")));
                    });
            }
            const f = (0, o.K9)(
                    (e) => (
                        e(P),
                        (0, d.GQ)()
                            .enumerateDevices()
                            .then((e) => e.filter(({ kind: e }) => "audioinput" === e))
                    ),
                ),
                h = (0, s.cn)(null, (e, t) => {
                    t(f);
                }),
                _ = (0, s.cn)(!1),
                p = (0, s.cn)(),
                v = (0, s.cn)((e) => !!e(p)),
                g = (0, s.cn)(!0),
                b = (0, s.cn)(),
                L = (0, s.cn)(null, (e, t) =>
                    m().then((n) => {
                        const i = e(b);
                        if (n && n.label !== i?.label) return t(w, n);
                    }),
                ),
                w = (0, s.cn)(null, (e, t, n) => {
                    const i = e(p);
                    i?.stop(), t(b, n), t(_, !0);
                    const r = e(O);
                    return (function (e, { noiseSuppression: t }) {
                        return (0, d.GQ)()
                            .getUserMedia({ audio: { deviceId: e.deviceId, autoGainControl: !0, noiseSuppression: t, voiceIsolation: !0, echoCancellation: !0 } })
                            .then((e) => e.getAudioTracks()[0]);
                    })(n, { noiseSuppression: r })
                        .then(
                            (i) => {
                                e(b) === n
                                    ? (t(p, i),
                                      n.label ||
                                          (t(h),
                                          m().then((e) => {
                                              t(b, e);
                                          })))
                                    : i.stop();
                            },
                            () => {
                                t(p, void 0);
                            },
                        )
                        .finally(() => {
                            t(_, !1);
                        });
                }),
                y = (0, c.O)((e) => e(p)?.enabled),
                E = (0, s.cn)(
                    (e) => e(y),
                    (e, t, n) => {
                        const i = e(p);
                        if (i) (i.enabled = n), t(y);
                        else if (n) return t(D);
                    },
                ),
                S = (0, s.cn)(null, (e, t) => {
                    const n = t(I);
                    return n instanceof Promise ? n.then(() => e(p)) : Promise.resolve(e(p));
                }),
                D = (0, s.cn)(null, (e, t) =>
                    m().then((e) => {
                        if (e) return t(w, e);
                    }),
                ),
                O = (0, s.cn)(
                    (e) => e(g),
                    (e, t, n) => {
                        t(g, n);
                        if (e(p)) {
                            const n = e(b);
                            n && t(w, n);
                        }
                    },
                ),
                I = (0, s.cn)(null, (e, t) => t(E, !0)),
                T = (0, s.cn)(null, (e, t) => {
                    const n = e(p);
                    n && (n.stop(), t(p, void 0), t(b, void 0));
                }),
                A = (0, s.cn)(null, (e, t) => {
                    const n = e(b);
                    "default" === n?.deviceId && t(L), t(h);
                }),
                M = (0, d._D)(A),
                { isPermissionDeniedAtom: P, listenPermissionStateAtom: N } = (0, d.Cv)("microphone");
            const x = (0, d.wc)(p, L);
            const { isMutedAtom: R, isMutedEffectAtom: C } = (0, d.XI)(() => p);
            const U = (0, s.cn)((e) => !e(p) || e(R) || !e(E)),
                k = (0, s.cn)((e) => !!(e(p) && e(R) && e(E)));
        },
        251836: (e, t, n) => {
            n.d(t, { Db: () => f, Mr: () => p, Qh: () => S, cj: () => m, eC: () => l, mb: () => _, qp: () => g, vE: () => b, vr: () => u });
            var i = n(400752),
                r = n(565058),
                s = n(526250),
                o = n(563781),
                a = n(509599),
                c = n(856824),
                d = n(122411);
            function u() {
                (0, s.N)(L), (0, s.N)(w), (0, s.N)(E);
            }
            function l() {
                return (0, i.Dv)(_);
            }
            function m() {
                return (0, i.Dv)(h);
            }
            function f() {
                return "getDisplayMedia" in (0, c.GQ)();
            }
            const h = (0, r.cn)(!1),
                _ = (0, r.cn)(),
                p = (0, r.cn)(),
                v = (0, o.O)((e) => e(p)?.enabled),
                g = (0, r.cn)(
                    null,
                    (e, t) => (
                        t(h, !0),
                        (0, c.GQ)()
                            .getDisplayMedia({ video: { width: { ideal: 1920 }, height: { ideal: 1080 } }, audio: (0, d.w8)() })
                            .then(
                                (n) => {
                                    e(_)?.stop(), e(p)?.stop();
                                    const i = n.getVideoTracks()[0],
                                        r = n.getAudioTracks()[0];
                                    e(a.C) && i.applyConstraints({ frameRate: { min: 15 } }), t(_, i), t(p, r);
                                },
                                () => {},
                            )
                            .finally(() => {
                                t(h, !1);
                            })
                    ),
                ),
                b = (0, r.cn)(null, (e, t) => {
                    e(_)?.stop(), e(p)?.stop(), t(_, void 0), t(p, void 0);
                }),
                L = (0, c.wc)(_),
                w = (0, c.wc)(p);
            const { isMutedAtom: y, isMutedEffectAtom: E } = (0, c.XI)(() => p);
            const S = (0, r.cn)((e) => !e(p) || e(y) || !e(v));
        },
        122411: (e, t, n) => {
            n.d(t, { Jg: () => a, kq: () => f, w8: () => d, zw: () => l });
            var i = n(565058),
                r = n(752624),
                s = n(516951),
                o = n(420182);
            function a() {
                return c();
            }
            function c() {
                return "AudioContext" in window;
            }
            function d() {
                return a();
            }
            const u = (0, i.cn)(!1),
                l = (0, i.cn)((e) => {
                    if (!h) {
                        const { unsubscribe: t } = m.subscribe(() => {
                            t(), e(o.zE).set(u, h);
                        });
                        return e(u);
                    }
                    return !0;
                }),
                m = new r.Z();
            let f = s.Z,
                h = !1;
            if (c()) {
                f = (function (e) {
                    let t;
                    return () => (t || (t = { value: e() }), t.value);
                })(() => new AudioContext());
                const e = () => {
                    f()?.resume(), (h = !0), m.notify();
                };
                window.addEventListener("click", e, { once: !0 });
            }
        },
        540387: (e, t, n) => {
            n.d(t, { Wv: () => r, ZP: () => o, hb: () => s, jn: () => i });
            n(571372), n(543673), n(240753), n(128399);
            const i = ["video/mp4", "video/quicktime"],
                r = (e) => -1 !== i.indexOf(e.type),
                s = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class o {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((n, i) => {
                            const r = (e, t) => {
                                    const n = new Error(e);
                                    (n.code = t), (n.type = s.type), i(n);
                                },
                                o = document.createElement("video");
                            (o.onloadedmetadata = () => {
                                t || (o.videoWidth && o.videoHeight) ? n(o) : r("Video lacks height or width", s.NO_DIMENSIONS);
                            }),
                                (o.onerror = () => {
                                    r("Error loading image", s.LOAD_FAILED);
                                }),
                                (o.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: n, videoWidth: i } = e;
                        return (this.width = i), (this.height = n), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === n || 0 === i)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        480599: (e, t, n) => {
            n.d(t, { c: () => a, n: () => c });
            var i = n(565058),
                r = n(459679),
                s = n(536387),
                o = n(790997);
            const a = (0, i.cn)(null, (e, t) => {
                    const n = new Map(),
                        i = new Map(),
                        s = setInterval(() => {
                            const e = t(o.Xm);
                            Promise.all(e.map(([e, t]) => t())).then((s) => {
                                s.map((t, s) => {
                                    const o = t,
                                        a = (0, r.Z)(o, (e) => (("bytesSent" in e && "outbound-rtp" === e.type) || ("bytesReceived" in e && "inbound-rtp" === e.type) ? e : void 0)),
                                        c = a.reduce((e, { bytesReceived: t }) => (t ? t + e : e), 0),
                                        d = a.reduce((e, { bytesSent: t }) => (t ? t + e : e), 0),
                                        [u] = e[s],
                                        l = n.get(u),
                                        m = i.get(u);
                                    if ((n.set(u, d), i.set(u, c), void 0 !== l && void 0 !== m)) {
                                        return [u, { sendingBitrate: 8 * (d - l), receivingBitrate: 8 * (c - m) }];
                                    }
                                    return [u, { sendingBitrate: 0, receivingBitrate: 0 }];
                                }).forEach(([e, n]) => t(c(e), n));
                            });
                        }, 1e3);
                    return () => {
                        clearInterval(s);
                    };
                }),
                c = (0, s.dX)((e) => (0, i.cn)({ receivingBitrate: 0, sendingBitrate: 0 }));
        },
        499573: (e, t, n) => {
            n.d(t, { x: () => i });
            n(136728);
            function i(e) {
                const t = new Map();
                for (const n of [...e.values()]) {
                    (
                        t.get(n.type) ??
                        (() => {
                            const e = [];
                            return t.set(n.type, e), e;
                        })()
                    ).push(n);
                }
                return { get: (e) => t.get(e) ?? [] };
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed.21f03c4a.js.map
