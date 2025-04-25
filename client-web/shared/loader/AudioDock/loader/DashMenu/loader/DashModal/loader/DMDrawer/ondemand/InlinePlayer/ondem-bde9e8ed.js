"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"],
    {
        224175: (e, t, i) => {
            i.d(t, { Z: () => o });
            i(136728);
            var n = i(503882),
                r = i(781268),
                s = i(700534);
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
                    return new n.Z(e.top + this._offsetTop, e.height);
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
                scrollTo(e, t, i) {
                    const n = t - this.scrollY();
                    i ? this._domNode.scrollTo({ top: e, left: t, behavior: i }) : ((this._domNode.scrollLeft = e), (this._domNode.scrollTop = t)), this._programmaticScrollListeners.forEach((e) => e(n));
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
                addIntersectionObserverListener(e, t, i) {
                    if (!this._intersectionObserver) {
                        this._intersectionThreshold = i;
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
                        i = getComputedStyle(this._domNode).paddingRight;
                    return `${getComputedStyle(this._domNode).paddingTop} ${i} ${e} ${t}`;
                }
                _getIOConfigOptions() {
                    return { root: this._domNode, rootMargin: this.getRootMargin(), threshold: this._intersectionThreshold };
                }
                _addListener(e, t) {
                    const i = () => t();
                    this._domNode.addEventListener(e, i);
                    return () => {
                        this._domNode.removeEventListener(e, i);
                    };
                }
            }
        },
        333259: (e, t, i) => {
            i.d(t, { $: () => r, a: () => n });
            const n = i(726499).Z,
                r = { background: "background", active: "active" };
        },
        445250: (e, t, i) => {
            i.d(t, { Z: () => n });
            const n = (e, t, i) => {
                const n = [...e];
                if (e.length > 0) {
                    const e = n[t];
                    n.splice(t, 1), n.splice(i, 0, e);
                }
                return n;
            };
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => r, Q: () => s });
            const n = (e, t, i) => {
                    const n = new Date();
                    let r = n.getFullYear() - e;
                    const s = n.getMonth() + 1 - t;
                    if (s < 0) r -= 1;
                    else if (0 === s) {
                        n.getDate() - i < 0 && (r -= 1);
                    }
                    return r;
                },
                r = (e, t, i, r = !1) => (e && t && i ? n(e, t, i) < 18 : r),
                s = () => new Date().getFullYear() - 120;
        },
        393134: (e, t, i) => {
            function n() {
                let e = () => {},
                    t = () => {};
                return {
                    promise: new Promise((i, n) => {
                        (e = i), (t = n);
                    }),
                    resolve: e,
                    reject: t,
                };
            }
            i.d(t, { g: () => n });
        },
        297436: (e, t, i) => {
            i.d(t, { E5: () => d, lk: () => l });
            var n = i(450681),
                r = i(275365),
                s = i(162664);
            const o = { entries: {}, entryIdsByConversationId: {}, reactionsByMessageId: {} },
                a = (e = [], t = {}) => e.map((e) => ({ ...e, user: (0, s.b)(t[e.user_id]) || { created_at: "", description: "", entities: {}, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, id: parseInt(e.user_id, 10), id_str: e.user_id, name: "", profile_image_url_https: "", protected: !1, screen_name: "", verified: !1 } }));
            function c(e, t) {
                const { entries: i, entryIdsByConversationId: n } = t;
                return (n[e] || []).map((e) => i[e] && i[e].data).filter(Boolean);
            }
            const d = (e, t = o, i) => {
                    const { conversation_id: n, participants: r, ...s } = e;
                    return { conversation_id: n, ...s, entries: t.entryIdsByConversationId[n] || [], participants: a(r, i) };
                },
                l = (e, t, i) => {
                    const { conversation_id: o, participants: d, social_proof: l, ...u } = e,
                        _ = { conversation_id: o, ...u, entries: c(o, t), participants: a(d, i), social_proof: void 0 };
                    return (
                        l &&
                            (_.social_proof = ((e = [], t = {}) =>
                                e.map((e) => {
                                    if (e.proof_type === r.UN.MUTUAL_FRIENDS) {
                                        const { users: i, ...r } = e;
                                        return { ...r, users: (0, n.Z)(i.map((e) => (0, s.b)(t[e]))) };
                                    }
                                    return e;
                                }))(l, i)),
                        _
                    );
                };
        },
        234296: (e, t, i) => {
            i.d(t, { Z: () => o, l: () => s });
            var n = i(147143),
                r = i(856674);
            const s = (e, t) => {
                    const i = e.data?.labels?.find((e) => e.label_type === n.w1.PINNED)?.timestamp,
                        r = t.data?.labels?.find((e) => e.label_type === n.w1.PINNED)?.timestamp;
                    return i ? (r ? i - r : -1) : 1;
                },
                o = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, r.ZP)(t, e) : 1) : -1);
        },
        198506: (e, t, i) => {
            i.d(t, { Z: () => d, R: () => l });
            var n = i(662678),
                r = i(275365),
                s = i(856674);
            const o = (e = 0) => new Date(Number(e)),
                a = (e, t) => o(e.join_time) - o(t.join_time),
                c = ({ user: e }, { user: t }) => (0, s.ZP)(e.id_str, t.id_str),
                d = (e, t) => {
                    const { created_by_user_id: i, participants: s, type: o } = e,
                        [d, l] = (0, n.Z)(s, ({ user: e }) => e.id_str === t);
                    return l.length
                        ? o === r.eD.GROUP && 1 === l.length
                            ? [...d, ...l]
                            : i
                              ? l.sort(
                                    (
                                        (...e) =>
                                        (t, i) =>
                                            e.map((e) => e(t, i)).filter((e) => !!e)[0] || 0
                                    )(
                                        (
                                            (e) =>
                                            ({ user: t }, { user: i }) => {
                                                switch (e) {
                                                    case t.id_str:
                                                        return -1;
                                                    case i.id_str:
                                                        return 1;
                                                    default:
                                                        return 0;
                                                }
                                            }
                                        )(i),
                                        a,
                                        c,
                                    ),
                                )
                              : l
                        : d;
                },
                l = (e, t) => (e.includes("-") ? e.replace(t, "").replace(/[e-]/g, "") : null);
        },
        66242: (e, t, i) => {
            i.d(t, { ZP: () => _, e7: () => m });
            var n = i(976145),
                r = i(674132),
                s = i.n(r),
                o = i(275365),
                a = i(198506);
            const c = s().b5b7fb94,
                d = s().g755fcde,
                l = s().f6b1ff81,
                u = s().j652293d,
                _ = (e, t, i, n) => {
                    const { type: r, name: s, participants: d = {} } = e;
                    if (r === o.eD.GROUP && s) return s;
                    if (!d.length) return;
                    if (r === o.eD.GROUP && i) return c;
                    const l = (0, a.Z)(e, t).map(({ user: e }) => e);
                    return m(l, t, r, n);
                },
                m = (e = [], t, i = o.eD.GROUP, r) => {
                    const s = e.filter((e) => e.id_str !== t).map((e) => e.name);
                    switch (s.length) {
                        case 0:
                            return d;
                        case 1: {
                            const [e] = s;
                            return i === o.eD.GROUP ? l({ name: e }) : e;
                        }
                        default: {
                            const e = !0,
                                t = r ? s.slice(0, r) : s,
                                i = (0, n.Z)(t, e),
                                o = r ? Math.max(s.length - r, 0) : 0;
                            return o > 0 ? u({ listOfParticipants: i, count: o }) : i;
                        }
                    }
                };
        },
        495707: (e, t, i) => {
            i.d(t, { E: () => r });
            var n = i(202784);
            function r(e) {
                const t = n.useRef(e);
                (t.current = e),
                    n.useEffect(() => {
                        try {
                            const e = (function () {
                                if ("mediaSession" in navigator) return navigator.mediaSession;
                            })();
                            if (!e) return;
                            const i = t.current;
                            return (
                                e.setActionHandler("enterpictureinpicture", () => {
                                    i();
                                }),
                                () => {
                                    e.setActionHandler("enterpictureinpicture", null);
                                }
                            );
                        } catch {}
                    }, []);
            }
        },
        359127: (e, t, i) => {
            i.d(t, { Q$: () => l, ZQ: () => d, zI: () => c });
            var n = i(202784),
                r = i(928316),
                s = i(392237),
                o = i(398601),
                a = i(392644);
            const c = "documentPictureInPicture" in window;
            function d(e) {
                const { children: t, dpipWindow: i } = e;
                return i ? n.createElement(u, { children: t, dpipWindow: i }) : t;
            }
            async function l(e) {
                const { featureSwitches: t, options: i } = e,
                    n = await window.documentPictureInPicture.requestWindow(i),
                    r = (0, a.Z)(t, s.default.theme.paletteName, n.document);
                return (
                    n.addEventListener("pagehide", () => {
                        r?.();
                    }),
                    await (function (e) {
                        return Promise.all(
                            [...document.styleSheets].map((t) => {
                                try {
                                    const i = [...t.cssRules]
                                            .map(function (e) {
                                                return e.cssText;
                                            })
                                            .join(""),
                                        n = document.createElement("style");
                                    (n.textContent = i), e.document.head?.appendChild(n);
                                } catch (i) {
                                    const n = document.createElement("link");
                                    if (null == t.href) return Promise.resolve();
                                    (n.rel = "stylesheet"), (n.type = t.type), (n.media = t.media.toString()), (n.href = t.href), e.document.head?.appendChild(n);
                                }
                            }),
                        );
                    })(n),
                    { dispose: r, dpip: n }
                );
            }
            function u(e) {
                const { children: t, dpipWindow: i } = e;
                return (0, r.createPortal)(n.createElement(o.Bt, null, t), i.document.body);
            }
        },
        735e3: (e, t, i) => {
            i.d(t, { o: () => r });
            var n = i(459643);
            const r = (0, n.Z)([]);
            (0, n.Z)({});
        },
        585454: (e, t, i) => {
            i.d(t, { h: () => s });
            var n = i(565058),
                r = i(420182);
            function s(e, t, i) {
                return (0, n.cn)(null, (n, s) => {
                    const o = e(),
                        a = n(r.zE);
                    let c = i ? i.initialState : n(o);
                    const d = () => {
                        const e = n(o);
                        c !== e && t(n, s, c, e), (c = e);
                    };
                    i && d();
                    const l = a.sub(o, d);
                    return () => {
                        l(), i && t(n, s, c, i.initialState);
                    };
                });
            }
        },
        811322: (e, t, i) => {
            function n(e) {
                const t = new WeakMap();
                return (i) =>
                    t.get(i) ??
                    (() => {
                        const n = e(i);
                        return t.set(i, n), n;
                    })();
            }
            i.d(t, { X: () => n });
        },
        551423: (e, t, i) => {
            i.d(t, { r: () => r });
            var n = i(565058);
            function r(e) {
                const t = (0, n.cn)(e, (e, i, n) => i(t, n));
                return t;
            }
        },
        563781: (e, t, i) => {
            i.d(t, { O: () => o, u: () => s });
            var n = i(565058),
                r = i(420182);
            function s() {
                const e = (0, n.cn)(0);
                return (0, n.cn)(
                    (t) => (
                        t(e),
                        () => {
                            t(r.zE).set(e, (e) => e + 1);
                        }
                    ),
                    (t, i) => {
                        i(e, (e) => e + 1);
                    },
                );
            }
            function o(e) {
                const t = s();
                return (0, n.cn)(
                    (i) => (i(t), e(i)),
                    (e, i) => {
                        i(t);
                    },
                );
            }
        },
        396636: (e, t, i) => {
            i.d(t, { Q: () => c });
            var n = i(987809),
                r = i(427266),
                s = i(585454),
                o = i(526250),
                a = i(551423);
            function c(e, t) {
                const i = (0, n.xu)((e) => (0, a.r)());
                return (0, s.h)(
                    e,
                    (e, n, r, s) => {
                        const a = new Set(r),
                            c = s.filter((e) => !a.has(e));
                        for (const e of c) {
                            const r = n((0, o.v)(t), e);
                            n(i(e), r);
                        }
                        const d = new Set(s),
                            l = r.filter((e) => !d.has(e));
                        for (const t of l) e(i(t))?.(), n(i(t), void 0);
                    },
                    { initialState: (0, r.dW)([]) },
                );
            }
        },
        908599: (e, t, i) => {
            i.d(t, { Y: () => r });
            var n = i(565058);
            function r(e) {
                const t = (0, n.cn)();
                return (0, n.cn)(
                    (e) => e(t),
                    (i, n, ...r) => {
                        const s = e(i, n, ...r);
                        return n(t, s), s;
                    },
                );
            }
        },
        608925: (e, t, i) => {
            i.d(t, { G: () => r });
            var n = i(585454);
            function r(e, t, i) {
                const r = i?.getKey;
                return (0, n.h)(e, (e, i, n, s) => {
                    const o = new Set(r ? n.map((e) => r(e)) : n),
                        a = s.filter((e) => !o.has(r ? r(e) : e)),
                        c = new Set(r ? s.map((e) => r(e)) : s),
                        d = n.filter((e) => !c.has(r ? r(e) : e));
                    t(e, i, { added: a, removed: d });
                });
            }
        },
        358572: (e, t, i) => {
            i.d(t, { u: () => a });
            var n = i(476984),
                r = i.n(n),
                s = i(565058),
                o = i(420182);
            function a(e) {
                const t = (0, s.cn)();
                return (0, s.cn)((i) => {
                    const n = i(o.zE),
                        s = n.get(t),
                        a = e(i);
                    return n.set(t, a), s && r()(a, s) ? s : a;
                });
            }
        },
        901910: (e, t, i) => {
            i.d(t, { W: () => s });
            var n = i(565058),
                r = i(551423);
            function s(e) {
                const t = (0, n.cn)(0),
                    i = (0, r.r)();
                return (0, n.cn)(
                    null,
                    (n, r, ...s) => (
                        r(t, (e) => e + 1),
                        1 === n(t) && r(i, e(n, r, ...s)),
                        () => {
                            r(t, (e) => e - 1), 0 === n(t) && n(i)?.();
                        }
                    ),
                );
            }
        },
        65178: (e, t, i) => {
            i.d(t, { g: () => r });
            var n = i(565058);
            function r() {
                const e = (0, n.cn)([]),
                    t = (0, n.cn)(null, (t, i, r) => {
                        const s = (0, n.cn)(r);
                        i(e, (e) => e.concat(s));
                        return {
                            dispose: () => {
                                i(e, (e) => e.filter((e) => e !== s));
                            },
                            valueAtom: s,
                        };
                    });
                return { get: (0, n.cn)((t) => t(e).map((e) => t(e))), sub: t };
            }
        },
        24466: (e, t, i) => {
            i.d(t, { L: () => o });
            var n = i(565058),
                r = i(901910),
                s = i(477635);
            function o(e, t) {
                const i = (0, n.cn)(e),
                    o = (0, r.W)((i, n) => {
                        const r = setInterval(() => {
                            n(a, e(i));
                        }, t);
                        return () => clearInterval(r);
                    }),
                    a = (0, s.t)(() => i);
                return { sub: o, value: a };
            }
        },
        477635: (e, t, i) => {
            i.d(t, { t: () => r });
            var n = i(565058);
            function r(e) {
                const t = (0, n.cn)(),
                    i = (0, n.cn)(
                        (i) => {
                            const n = i(t);
                            return n ? n.value : i(e());
                        },
                        (e, n, r) => {
                            n(t, "function" == typeof r ? { value: r(e(i)) } : { value: r });
                        },
                    );
                return i;
            }
        },
        108922: (e, t, i) => {
            i.d(t, { J: () => s });
            var n = i(565058),
                r = i(551423);
            function s(e) {
                const t = (0, r.r)(),
                    i = (0, n.cn)(null, (i, n) => {
                        i(t)?.();
                        const r = setTimeout(() => {
                            n(s, void 0);
                        }, e);
                        n(t, () => {
                            clearTimeout(r);
                        });
                    }),
                    s = (0, n.cn)(void 0, (e, t, n) => {
                        t(s, "function" == typeof n ? n(e(s)) : n), t(i);
                    });
                return s;
            }
        },
        613533: (e, t, i) => {
            i.d(t, { G: () => r });
            var n = i(565058);
            function r(e) {
                const t = (0, n.cn)(() => new Map());
                return (0, n.cn)(null, (i, n, ...r) => {
                    const s = i(t),
                        o = JSON.stringify(r),
                        a = s.get(o);
                    if (a) return a;
                    const c = e(i, n, ...r);
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
        802222: (e, t, i) => {
            i.d(t, { h: () => r });
            i(136728);
            var n = i(565058);
            function r() {
                const e = (0, n.cn)([]);
                return {
                    add: (0, n.cn)(null, (t, i, n) => {
                        i(e, (e) => e.concat(n));
                    }),
                    disposeAll: (0, n.cn)(null, (t, i) => {
                        const n = t(e),
                            r = [];
                        if (
                            (n.forEach((e) => {
                                try {
                                    e();
                                } catch (e) {
                                    r.push(e);
                                }
                            }),
                            i(e, []),
                            r.length)
                        )
                            throw r[0];
                    }),
                };
            }
        },
        513588: (e, t, i) => {
            i.d(t, { J: () => a });
            var n = i(565058),
                r = i(987809),
                s = i(516951);
            const o = (0, r.xu)((e) => (0, n.cn)(() => e, s.Z));
            function a(e) {
                return o(e);
            }
        },
        53317: (e, t, i) => {
            i.d(t, { P: () => o });
            var n = i(202784),
                r = i(400752);
            const s = n.createContext({ isLoading: !1 });
            function o({ children: e, renderAtom: t }) {
                return n.createElement(n.Suspense, { fallback: n.createElement(s.Provider, { value: c }, "function" == typeof e ? e(!0) : e) }, n.createElement(a, { renderAtom: t }), "function" == typeof e ? e(!1) : e);
            }
            function a({ renderAtom: e }) {
                (0, r.Dv)(e);
            }
            const c = { isLoading: !0 };
        },
        530745: (e, t, i) => {
            i.d(t, { Ci: () => E, Ct: () => p, Dd: () => w, Dy: () => b, E4: () => D, EF: () => N, F$: () => l, G0: () => x, KH: () => I, L_: () => U, NW: () => a, Pf: () => g, QK: () => s, Qs: () => o, R2: () => C, Rv: () => d, Si: () => h, UH: () => m, Ur: () => y, W2: () => L, WX: () => n, Yt: () => u, ZP: () => A, Zd: () => T, cY: () => f, i_: () => S, jF: () => O, kl: () => r, nQ: () => c, oh: () => P, tI: () => M, uR: () => _, xp: () => v });
            const n = "ArrowDown",
                r = "ArrowUp",
                s = "ArrowLeft",
                o = "ArrowRight",
                a = "Enter",
                c = "Escape",
                d = 27,
                l = "XF86Back",
                u = "XF86PlayBack",
                _ = "XF86Exit",
                m = "GoBack",
                f = 461,
                p = "Exit",
                h = 415,
                g = 19,
                v = 417,
                b = 412,
                L = 413,
                y = "ESC",
                S = "Exit",
                w = "Tab",
                O = "Delete",
                E = "Backspace",
                T = "Play",
                D = "Pause",
                I = "Stop",
                M = "MediaPlayPause",
                A = "MediaPlay",
                N = "MediaPause",
                P = "MediaStop",
                x = "MediaFastForward",
                C = "MediaRewind",
                U = "Space";
        },
        481399: (e, t, i) => {
            function n(e) {
                const t = {};
                return (
                    Object.keys(e).forEach((e) => {
                        t[e] = e;
                    }),
                    Object.freeze(t)
                );
            }
            i.d(t, { Z: () => n });
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => H, O9: () => Y, ZP: () => Q, vK: () => J });
            var n = i(688715),
                r = i(674132),
                s = i.n(r),
                o = i(653843),
                a = i(122123),
                c = i(417144),
                d = i(884495),
                l = i(716233),
                u = i(540387);
            const _ = s().b8098028,
                m = s().b36f4170,
                f = s().hab3781e,
                p = s().f6c4fb02,
                h = s().g0af3dd2,
                g = s().b8c8b0be,
                v = s().ica6d718,
                b = s().b28d44f7({ limit: 15 }),
                L = s().i1db7d13,
                y = s().baac0ed7,
                S = L({ limit: 512 }),
                w = s().a22385bb,
                O = s().be0440bf,
                E = w({ limit: 140 }),
                T = s().feeba512,
                D = s().db123c02,
                I = s().db6001e7({ limit: 5 }),
                M = s().eb96d952,
                A = s().i859a9d4,
                N = s().b3880588,
                P = s().ca058b68,
                x = s().id24379c,
                C = s().h4d7cbcc,
                U = (0, n.ju)("https://support.x.com/articles/20156423"),
                R = (0, n.ju)("https://help.x.com/using-twitter/twitter-videos"),
                Z = (e) => ({ text: e }),
                F = (e) => ({ text: e, action: { label: A, link: U } }),
                B = (e) => ({ text: e, action: { label: A, link: R } }),
                z = { [o.Y7.GIF_IS_TOO_LARGE]: Z(b), [o.Y7.CANNOT_BE_PROCESSED]: Z(_), [o.Y7.FILE_IS_NOT_AN_IMAGE]: Z(f) },
                G = { [c.d.ZERO_FILE_LENGTH]: Z(m), [c.d.TIMEOUT]: Z(N) },
                k = { ...G, [c.d.FILE_TOO_LARGE]: Z(I), [c.d.UNSUPPORTED_MEDIA]: F(D), [c.d.INVALID_MEDIA]: F(T) },
                V = { ...G, [c.d.FILE_TOO_LARGE]: Z(b), [c.d.UNSUPPORTED_MEDIA]: F(h), [c.d.INVALID_MEDIA]: F(p) },
                $ = { ...G, [c.d.FILE_TOO_LARGE]: Z(S), [c.d.UNSUPPORTED_MEDIA]: B(v), [c.d.INVALID_MEDIA]: B(g) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                W = 1048576,
                X = 1073741824,
                Y = (e) => Object.values(j).includes(e.type),
                K = (e) => {
                    const { code: t, limit: i, type: n } = e;
                    if (t)
                        switch (n) {
                            case j.MAXSIZE:
                                return t === l.BW.GIF_IS_TOO_LARGE ? Z(b) : t === l.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? Z(i >= X ? y({ limit: Math.round(i / X) }) : L({ limit: Math.round(i / W) })) : Z(S);
                            case j.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? Z(O({ limit: Math.round(i / 60) })) : { text: w({ limit: Math.round(i) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : Z(E);
                            case j.RESIZE:
                                return z[t];
                            case j.UPLOAD:
                                if (e.isImage) return k[t];
                                if (e.isGif) return V[t];
                                if (e.isVideo) return $[t];
                                break;
                            case j.METADATA:
                                return Z(C);
                        }
                },
                H = (e) => {
                    if (Y(e)) return e;
                };
            function Q(e, t = x) {
                const i = H(e);
                if (i) {
                    const n = e.message ? `${t} ${e.message}` : t;
                    return K(i) || Z(n);
                }
            }
            function J(e, t = P) {
                return e.type === a.gK.type && e.code === a.gK.NO_DIMENSIONS ? Z(M) : e.type === u.hb.type && e.code === u.hb.NO_DIMENSIONS ? B(g) : Z(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => h, Uk: () => u, Xj: () => _, ZP: () => w });
            var n = i(468811),
                r = i.n(n),
                s = i(595088),
                o = i(161821),
                a = i(184605),
                c = i(716233),
                d = i(774717);
            const l = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                u = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                _ = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                m = (e) => (e ? f(e) : void 0),
                f = (e) =>
                    (0, s.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${p(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                p = (e) =>
                    (0, o.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                h = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                g = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                v = { [h.SruUpload]: g.SruUpload, [h.UploadSubmitUntilSruFinish]: g.UploadSubmitUntilSruFinish },
                b = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                L = (e, t) => ((0, a.Z)(e) && (0, a.Z)(t) ? Math.round(t - e) : void 0),
                y = () => (window.performance ? window.performance.now() : Date.now()),
                S = (e, t) => (e === c.xz.DMGif || e === c.xz.TweetGif ? b.All : (e !== c.xz.DMVideo && e !== c.xz.TweetVideo && e !== c.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? b.Short : t < 20 ? b.Medium : t < 45 ? b.Long : t < 90 ? b.XLong : t < 140 ? b.L90to140s : t < 300 ? b.L140to300s : t < 600 ? b.L300to600s : t < 1200 ? b.L600to1200s : t < 1800 ? b.L1200to1800s : t < 2700 ? b.L1800to2700s : t < 3600 ? b.L2700to3600s : t < 4500 ? b.L3600to4500s : t < 5400 ? b.L4500to5400s : t < 6300 ? b.L5400to6300s : t < 7200 ? b.L6300to7200s : t < 10800 ? b.L7200to10800s : t < 14400 ? b.L10800to14400s : b.LGT14400s);
            class w {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = r().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: n } = e;
                            return `${t ? l.Remote : l.LocalFile}:${i}:${S(i, n)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = L(this._startTimes[e], y());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const n = this._getKey(e, t);
                            this._record(n, i, e === h.Full ? this._metadata : e === h.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = y()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = L(this._startTimes[h.Full], y());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[h.Full] && (e -= this._pausedDuration[h.Full]);
                        const t = this._getKey(h.Full, "submit");
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
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = y();
                    else if (!t) {
                        const t = L(this._pauseTimes[e], y());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && v[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const n = { duration_ms: t, impression_id: this._impressionId, metadata: m(i) };
                    d.IM(e, n, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, i) => {
            i.d(t, { BW: () => h, SB: () => S, TO: () => O, Tz: () => v, U$: () => y, ff: () => g, vC: () => L, vn: () => w, xz: () => b, y$: () => f });
            var n = i(182056),
                r = i(323265),
                s = i(540387);
            const o = 1024,
                a = 1024 * o,
                c = 1,
                d = 4096,
                l = 2048,
                u = 400,
                _ = 1500,
                m = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                f = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                p = 600,
                h = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                g = { VIDEO_IS_TOO_LONG: 1 },
                v = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                b = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                L = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                y = (e) => {
                    const { height: t, left: i, width: n } = e,
                        r = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + n / 2)},${r},1,1`;
                };
            function S(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function w(e, t, i, h, g) {
                const v = h?.location,
                    b = S({ featureSwitches: e, userClaims: t });
                let y, w;
                if (i.isSubtitles) y = 0;
                else if (i.isGif)
                    switch (v) {
                        case L.Avatar:
                            y = e.getNumberValue("media_async_upload_max_avatar_gif_size", m.Avatar_Gif) * a;
                            break;
                        case L.Dm:
                        case L.Tweet:
                        default:
                            y = e.getNumberValue("media_async_upload_max_gif_size", m.Gif) * a;
                    }
                else {
                    if (!(i instanceof s.ZP))
                        return (function (e, t, i) {
                            let s;
                            switch (t) {
                                case L.Avatar:
                                    s = u;
                                    break;
                                case L.CommunityBanner:
                                case L.ListBanner:
                                case L.ProfileBanner:
                                    s = _;
                                    break;
                                default:
                                    s = r.ZP.isDesktopOS() ? d : l;
                            }
                            const c = e.getNumberValue("media_async_upload_max_image_size", m.Image) * a;
                            return n.Z.getConnectionInfo().then(
                                (n) => {
                                    let a = c;
                                    return "slow-2g" === n.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * o) : i || "2g" === n.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * o) : "3g" === n.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * o) : "4g" !== n.effectiveType || r.ZP.isDesktopOS() || t !== L.Tweet || (s = d), { maxDimension: s, maxFileSize: Math.min(c, a) };
                                },
                                () => ({ maxDimension: s, maxFileSize: c }),
                            );
                        })(e, v, g);
                    if (1 === b) {
                        if ("dm" === v) w = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", p);
                        else w = e.getNumberValue("media_async_upload_longer_video_max_video_duration", f.Duration[b]) * c;
                        y = e.getNumberValue("media_async_upload_longer_video_max_video_size", f.Size[b]) * a;
                    } else (w = e.getNumberValue("media_async_upload_max_video_duration", f.Duration[b]) * c), (y = e.getNumberValue("media_async_upload_max_video_size", f.Size[b]) * a);
                }
                return Promise.resolve({ maxFileSize: y, maxDuration: w });
            }
            function O(e) {
                return !(r.ZP.isIOS() && e.size > 3e8);
            }
        },
        135698: (e, t, i) => {
            i.d(t, { c: () => s });
            const n = 4194304;
            function r(e) {
                for (let t = 0; t < e.byteLength - 8; t++)
                    if (109 === e.getUint8(t + 4) && 111 === e.getUint8(t + 5) && 111 === e.getUint8(t + 6) && 118 === e.getUint8(t + 7)) {
                        if (e.getUint32(t) > 0) return !0;
                    }
                return !1;
            }
            async function s(e) {
                const t = e.slice(0, n),
                    i = await t.arrayBuffer();
                if (r(new DataView(i))) return !0;
                const s = Math.max(0, e.size - n),
                    o = e.slice(s),
                    a = await o.arrayBuffer();
                return r(new DataView(a));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed.3df3580a.js.map
