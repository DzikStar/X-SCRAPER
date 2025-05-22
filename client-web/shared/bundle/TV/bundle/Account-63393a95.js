"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.TV~bundle.Account-63393a95"],
    {
        949626: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            var r = n(950822);
            const o = (e) => (0, r.Z)("div", e);
        },
        965612: (e, t, n) => {
            n.d(t, { Z: () => o });
            var r = n(202784);
            const o = ({ children: e, onReady: t, placeholder: n, priority: o }) => {
                const [i, s] = r.useState(!1),
                    a = r.useCallback(() => {
                        s(!0);
                    }, []);
                return (
                    r.useEffect(() => {
                        window.requestIdleCallback ? (o ? setTimeout(a, 1) : window.requestIdleCallback(a, { timeout: 1e4 })) : setTimeout(a, o ? 1 : 1e4);
                    }, [o, a]),
                    r.useEffect(() => {
                        i &&
                            setTimeout(() => {
                                t?.();
                            }, 0);
                    }, [t, i]),
                    i ? e : n || null
                );
            };
        },
        709406: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(461756),
                i = n(392237),
                s = n(952793),
                a = n(949626);
            const l = i.default.create((e) => ({ reduceMotion: { backgroundPosition: "200% 0%", animationName: "none" }, container: { backgroundColor: e.colors.gray700, borderRadius: e.borderRadii.large, display: "block", height: "100%", width: "100%" }, containerAnimation: { animationDuration: "8s", animationKeyframes: [{ "0%": { backgroundPosition: "200% 0%" }, "100%": { backgroundPosition: "-200% 0%" } }], animationTimingFunction: "ease-in-out", animationIterationCount: "infinite", backgroundImage: `linear-gradient(270deg, ${e.colors.gray700}, ${e.colors.gray900}, ${e.colors.gray900}, ${e.colors.gray700})`, backgroundSize: "400% 100%" } })),
                c = ({ style: e }) => {
                    const t = (0, s.hC)("responsive_web_tv_placeholder_animation_enabled");
                    return r.createElement(a.Z, { style: [l.container, t && l.containerAnimation, o.Z.reducedMotionEnabled && l.reduceMotion, e] });
                };
        },
        524483: (e, t, n) => {
            n.d(t, { N: () => g, X: () => p });
            n(571372);
            var r = n(202784),
                o = n(396342),
                i = n(332920),
                s = n.n(i),
                a = n(516951);
            const l = s().e5b4aafa,
                c = s().g43c3b36,
                u = r.createContext({ modalConfig: void 0, openModal: a.Z, closeModal: a.Z }),
                d = { autoRestoreFocus: !0, handleEscape: () => {}, primaryText: l, secondaryText: c },
                p = ({ children: e, initialFocusedElement: t, isEnabled: n }) => {
                    const [i, s] = r.useState(),
                        a = r.useRef(),
                        l = r.useCallback((e) => {
                            e.autoRestoreFocus && (a.current = (0, o.getCurrentFocusKey)()), s(e);
                        }, []),
                        c = r.useCallback(() => {
                            s(void 0), (0, o.setFocus)(a.current || "main"), (a.current = void 0);
                        }, []),
                        p = r.useCallback(() => {
                            l(d);
                        }, [l]),
                        g = r.useCallback(() => {
                            c();
                        }, [c]);
                    r.useEffect(
                        () => (
                            window.addEventListener("offline", p),
                            window.addEventListener("online", g),
                            function () {
                                window.removeEventListener("offline", p), window.removeEventListener("online", g);
                            }
                        ),
                        [p, g],
                    );
                    const h = { modalConfig: i, openModal: l, closeModal: c };
                    return r.createElement(u.Provider, { value: h }, e);
                };
            function g() {
                const e = r.useContext(u);
                if (void 0 === e) throw new Error("useTVModalContext was used outside of its provider TVModalContext");
                return e;
            }
        },
        902641: (e, t, n) => {
            n.d(t, { r: () => f, B: () => w });
            n(136728), n(571372);
            var r = n(202784),
                o = n(516951),
                i = n(952793),
                s = n(601798),
                a = n(363047),
                l = n(426200);
            const c = "samsung-continue-watching-service-message-received",
                u = (e, t) => {
                    const n = parseInt(e.timestamp, 10),
                        r = parseInt(t.timestamp, 10);
                    return n > r ? -1 : r > n ? 1 : 0;
                };
            const d = new (class {
                constructor() {
                    (this._initialized = !1),
                        (this._processingRequest = !1),
                        (this._launchAppControl = (e, t) => {
                            const n = window?.tizen?.ApplicationControlData,
                                r = window?.tizen?.ApplicationControl,
                                o = new r("http://tizen.org/appcontrol/operation/CWservice", null, null, null, [new n(e, [JSON.stringify(t)])]);
                            window?.tizen.application.launchAppControl(
                                o,
                                "xWoxak64Je.ContinueWatchingService",
                                () => {
                                    this._initialized = !0;
                                },
                                (e) => {},
                            );
                        }),
                        (this._getItems = async () =>
                            new Promise((e, t) => {
                                const n = setTimeout(() => {
                                        t(new Error("Samsung Continue Watching API get items timed out after 10000ms"));
                                    }, 1e4),
                                    r = (t) => {
                                        e(t.detail.data || []), clearTimeout(n), window.removeEventListener(c, r);
                                    };
                                window.addEventListener(c, r), this._launchAppControl("get", null);
                            })),
                        (this._addItem = async (e) =>
                            new Promise((t, n) => {
                                const r = setTimeout(() => {
                                        n(new Error("Samsung Continue Watching API add item timed out after 10000ms"));
                                    }, 1e4),
                                    o = () => {
                                        clearTimeout(r), t(), window.removeEventListener(c, o);
                                    };
                                window.addEventListener(c, o), this._launchAppControl("add", e);
                            })),
                        (this._deleteItem = async (e) =>
                            e
                                ? new Promise((t, n) => {
                                      const r = setTimeout(() => {
                                              n(new Error("Samsung Continue Watching API delete item timed out after 10000ms"));
                                          }, 1e4),
                                          o = () => {
                                              clearTimeout(r), t(), window.removeEventListener(c, o);
                                          };
                                      window.addEventListener(c, o), this._launchAppControl("delete", e);
                                  })
                                : Promise.resolve()),
                        this._listenOnLocalMessagePort();
                }
                _listenOnLocalMessagePort() {
                    const e = window?.tizen?.messageport?.requestLocalMessagePort("CW_PORT");
                    e?.addMessagePortListener((e, t) => {
                        for (let t = 0; t < e.length; t++)
                            if (("logs" === e[t].key && this._logger?.(e[t].value.toString()), "currentItems" === e[t].key)) {
                                const n = JSON.parse(e[t].value),
                                    r = new CustomEvent(c, { detail: { message: c, data: n } });
                                window.dispatchEvent(r);
                            }
                    });
                }
                addOrUpdateItem(e) {
                    this._processingRequest ||
                        ((this._processingRequest = !0),
                        this._getItems()
                            .then((t) => [...t.filter((t) => t.content_id !== e.content_id), e].sort(u)[4])
                            .then(this._deleteItem)
                            .then(() => e)
                            .then(this._addItem)
                            .then(() => {
                                this._processingRequest = !1;
                            })
                            .catch((e) => {
                                throw ((this._processingRequest = !1), e);
                            }));
                }
                deleteItem(e) {
                    this._processingRequest ||
                        ((this._processingRequest = !0),
                        this._deleteItem(e)
                            .then(() => {
                                this._processingRequest = !1;
                            })
                            .catch((e) => {
                                throw ((this._processingRequest = !1), e);
                            }));
                }
                setLogger(e) {
                    this._logger = e;
                }
            })();
            var p = n(273413);
            const g = 15e3,
                h = r.createContext({ isSamsungTV: void 0, tizenApplication: void 0, tvInputDevice: void 0, samsungContinueWatchingEnabled: void 0, samsungPlayerSubscriptionHandler: o.Z, registerVoiceHandlers: o.Z, clearVoiceHandlers: o.Z }),
                m = (e, t, n) => {
                    const r = Date.now(),
                        o = (n || "")
                            .replaceAll(/[\n]+/g, " ")
                            .replaceAll(/(https:\/\/[^\s]*)/g, "")
                            .replaceAll(/[^a-zA-Z0-9 \t'"/.,]/g, "")
                            .trim(),
                        i = (e.tracks?.[0]?.currentTimeMs / 1e3).toFixed(0);
                    return { field: "0", app_id: "3202404034932", app_name: "xtv", app_icon: "https://pbs.twimg.com/media/GZ3ui9RXkAEcwaT?format=png&name=240x240", content_id: t || "", payload: `${t || ""}${i ? `?t=${i}` : ""}`, image_url: e.posterImage, content_title: o, sub_title: "", description: "", rate: "13", duration: e.tracks?.[0]?.durationMs.toFixed(0), playback: e.tracks?.[0]?.currentTimeMs.toFixed(0), expiry: r + 5184e6, timestamp: r.toString() };
                },
                f = ({ children: e, history: t }) => {
                    const n = r.useRef(new Map()),
                        o = r.useRef({}),
                        { logMessageToScreen: c } = (0, l.n)(),
                        u = r.useCallback(
                            (e, t, r) => {
                                if (!t) return;
                                const o = e.source?.id || "";
                                n.current.has(o) || n.current.set(o, 0);
                                const i = Math.floor((n.current?.get(o) || 0) / g),
                                    s = Math.floor((e.tracks?.[0]?.currentTimeMs || n.current?.get(o) || 0) / g);
                                if (s >= Math.floor((e.tracks?.[0]?.durationMs || 0) / g) && i !== s) {
                                    const n = m(e, t, r);
                                    c(`[Samsung Continue Watching] Deleting continue watching entry for ${t || ""}`), d.deleteItem(n);
                                } else if (o && e.isPlaying && i !== s) {
                                    const n = m(e, t, r);
                                    c(`[Samsung Continue Watching] Updating playback to ${n?.playback || 0}ms for ${t || ""}`), d.addOrUpdateItem(n);
                                }
                                n.current.set(o, e.tracks?.[0]?.currentTimeMs || n.current.get(o) || 0);
                            },
                            [c],
                        ),
                        f = r.useCallback(() => {
                            c("[TVSamsungContext] handleDeepLink", "purple");
                            const e = window?.tizen?.application?.getCurrentApplication?.().getRequestedAppControl?.();
                            let n, r;
                            if (e) {
                                c(`[TVSamsungContext] handleDeepLink has requestedAppControl: ${e.toString()}`, "purple"), (n = e.appControl.data);
                                for (let e = 0; e < n.length; e++)
                                    if ("PAYLOAD" === n[e].key) {
                                        c(`[TVSamsungContext] handleDeepLink found PAYLOAD: ${n[e].toString()}`, "purple"), (r = JSON.parse(n[e].value[0]).values);
                                        const o = r.content_id;
                                        t.push(`/i/tv/player/${o}`);
                                    }
                            }
                        }, [t, c]);
                    r.useEffect(() => {
                        if (window?.tizen)
                            return (
                                window.addEventListener("appcontrol", f),
                                function () {
                                    window.removeEventListener("appcontrol", f);
                                }
                            );
                    }, [f]);
                    const w = (0, i.hC)("tv_app_samsung_continue_watching_enabled");
                    w && d.setLogger(c);
                    const v = r.useCallback((e) => {
                            o.current = e;
                        }, []),
                        y = r.useCallback(() => {
                            o.current = {};
                        }, []),
                        b = { isSamsungTV: !!window?.tizen, tizenApplication: window?.tizen?.application?.getCurrentApplication(), tvInputDevice: window?.tizen?.tvinputdevice, samsungContinueWatchingEnabled: w, samsungPlayerSubscriptionHandler: u, registerVoiceHandlers: v, clearVoiceHandlers: y };
                    r.useEffect(() => {
                        window?.tizen?.tvinputdevice?.registerKey("MediaPlayPause"), window?.tizen?.tvinputdevice?.registerKey("MediaPlay"), window?.tizen?.tvinputdevice?.registerKey("MediaPause"), window?.tizen?.tvinputdevice?.registerKey("MediaStop"), window?.tizen?.tvinputdevice?.registerKey("MediaFastForward"), window?.tizen?.tvinputdevice?.registerKey("MediaRewind"), window?.tizen?.tvinputdevice?.unregisterKey("Exit");
                    }, []);
                    const C = r.useRef(() => {
                        try {
                            window.webapis.voiceinteraction.setCallback({ onupdatestate: () => (o.current?.onupdatestate ? o.current.onupdatestate() : p.E.None), onchangenexttrack: () => o.current?.onchangenexttrack?.(), onskipbackward: (e) => o.current?.onskipbackward?.(e) || !1, onskipforward: (e) => o.current?.onskipforward?.(e) || !1, onsetplayposition: (e) => o.current?.onsetplayposition?.(e) || !1, onchangesubtitlemode: (e) => o.current?.onchangesubtitlemode?.(e) || !1, onsearch: (e) => (o.current?.onsearch ? o.current?.onsearch?.(e) : (t.push((0, a.OU)(e?.utterance || "")), !0)) }), window.webapis.voiceinteraction.listen();
                        } catch (e) {}
                    });
                    return (
                        r.useEffect(() => {
                            window?.tizen && s.Z.inject({ callback: C.current, scriptId: "samsungTVProductApi", src: "$WEBAPIS/webapis/webapis.js" });
                        }, []),
                        r.createElement(h.Provider, { value: b }, e)
                    );
                };
            function w() {
                const e = r.useContext(h);
                if (void 0 === e) throw new Error("useTVSamsungContext was used outside of its provider Index");
                return e;
            }
        },
        273413: (e, t, n) => {
            n.d(t, { E: () => r });
            const r = Object.freeze({ None: "None", Home: "Home", List: "List", Player: "Player", Setting: "Setting", Search: "Search", Unknown: "Unknown" });
        },
        426200: (e, t, n) => {
            n.d(t, { G: () => s, n: () => a });
            n(136728), n(571372);
            var r = n(202784),
                o = n(516951);
            const i = r.createContext({ logMessageToScreen: o.Z }),
                s = ({ children: e }) => {
                    const t = r.useRef([]),
                        n = r.useRef(null),
                        [o, s] = r.useState(!1),
                        a = r.useRef(!1),
                        l = r.useRef("");
                    r.useEffect(
                        () => (
                            document.addEventListener("keydown", ({ key: e }) => {
                                if (
                                    ((l.current += ((e) => {
                                        switch (e) {
                                            case "ArrowUp":
                                                return "U";
                                            case "ArrowDown":
                                                return "D";
                                            case "ArrowLeft":
                                                return "L";
                                            case "ArrowRight":
                                                return "R";
                                            default:
                                                return "X";
                                        }
                                    })(e)),
                                    l.current.length > 12 && (l.current = l.current.substring(1)),
                                    "UDLRUDLRLRLR" === l.current)
                                ) {
                                    const e = !a.current;
                                    s(e), (a.current = e);
                                }
                            }),
                            () => {}
                        ),
                        [],
                    ),
                        r.useEffect(() => {
                            if (o) {
                                if (((n.current = document.createElement("div")), n.current)) {
                                    const e = n.current;
                                    (e.id = "log-container"), (e.style.position = "absolute"), (e.style.top = "0"), (e.style.left = "0"), (e.style.width = "100vw"), (e.style.height = "100vh"), (e.style.zIndex = "10000"), (e.style.display = "flex"), (e.style.flexDirection = "column-reverse"), document.body.appendChild(e);
                                }
                            } else if (n.current) {
                                const e = n.current.parentElement;
                                e?.removeChild(n.current);
                            }
                        }, [o]);
                    const c = r.useCallback(() => {
                            if (n.current) {
                                const e = n.current;
                                for (; e.lastChild; ) e.removeChild(e.lastChild);
                                t.current.slice(-100).forEach((t) => {
                                    const n = document.createElement("div");
                                    (n.style.fontSize = "18px"), (n.style.color = t.color || ""), (n.textContent = t.msg), e.prepend(n);
                                });
                            }
                        }, []),
                        u = {
                            logMessageToScreen: r.useCallback(
                                (e, n) => {
                                    t.current.push({ msg: e, color: n }), c();
                                },
                                [c],
                            ),
                        };
                    return r.createElement(i.Provider, { value: u }, e);
                };
            function a() {
                const e = r.useContext(i);
                if (void 0 === e) throw new Error("useTVScreenLoggingContext was used outside of its provider TVScreenLoggingContext");
                return e;
            }
        },
        363047: (e, t, n) => {
            n.d(t, { BO: () => a, C2: () => r, OU: () => i, ZW: () => s, ho: () => l, sH: () => o });
            const r = "/i/tv/login",
                o = "/i/tv/search",
                i = (e) => `${o}${e ? `?q=${e}` : ""}`,
                s = "/i/tv/cast",
                a = "/i/tv/cookies",
                l = { page: "tv" };
        },
        729922: (e, t, n) => {
            n.d(t, { M: () => s });
            var r = n(807896),
                o = n(202784),
                i = n(325686);
            const s = ({ aspectRatio: e, children: t, style: n, ...s }) => {
                const [a, l] = o.useState(!1),
                    c = o.useRef(null),
                    u = { height: (c.current?.getBoundingClientRect?.().width || 0) * (1 / e) };
                return o.createElement(
                    i.Z,
                    (0, r.Z)({}, s, {
                        ref: (e) => {
                            a || l(!0), (c.current = e);
                        },
                        style: [n, u],
                    }),
                    t,
                );
            };
        },
        602737: (e, t, n) => {
            n.d(t, { K: () => a });
            var r = n(202784),
                o = n(154003),
                i = n(392237),
                s = n(467537);
            const a = ({ autoFocus: e, children: t, name: n, onPress: i, style: a, type: c, ...u }) => r.createElement(s.C, { "aria-label": u["aria-label"] ?? void 0, autoFocus: e, name: n, onPress: i, role: "button", style: [l.interactiveView, a] }, r.createElement(o.ZP, { style: l.fluidButton, type: c }, t)),
                l = i.default.create((e) => ({ interactiveView: { borderRadius: e.borderRadii.infinite }, fluidButton: { width: "100%" } }));
        },
        651961: (e, t, n) => {
            n.d(t, { X: () => o, m: () => r });
            const r = "carousel-video",
                o = (e) => `${r}-${e}`;
        },
        905346: (e, t, n) => {
            n.d(t, { Z: () => P });
            var r = n(202784),
                o = n(873930),
                i = n(555874),
                s = n(325686),
                a = n(731708),
                l = n(392237),
                c = n(334522),
                u = n(293115),
                d = n(725516),
                p = n(686010),
                g = n(596219),
                h = n(788958),
                m = n(905979),
                f = n(651961);
            const w = { behavior: "smooth", block: "nearest", inline: "nearest" },
                v = (e) => e.id_str,
                y = ({ content: e, displayType: t, name: n, onFocus: o, onSelectVideo: l, playVideoPreview: y, scrollOptions: C, title: k, videoCardStyle: S }) => {
                    const E = (0, d.z)(),
                        R = (0, c.Z)(n) || n,
                        x = r.useMemo(() => e.filter((e) => !!e?.id_str), [e]),
                        P = r.useCallback(
                            ({ index: e, item: n }) => {
                                let o;
                                const i = () => {
                                    e === x.length - 1 && E.scribe({ element: "tv-carousel", action: "reached_end" });
                                };
                                switch (t) {
                                    case g.Y.VIDEO:
                                        o = r.createElement(m.Z, { authorTextSize: "subtext1", key: n.id_str, name: (0, f.X)(e.toString()), onFocus: i, onPress: l, playVideoPreview: y, scrollOptions: w, style: [b.video, S], tweet: n });
                                        break;
                                    case g.Y.SHORT_VIDEO:
                                        o = r.createElement(h.e, { analytics: E, key: n.id_str, name: (0, f.X)(e.toString()), onFocus: i, onPress: l, playVideoPreview: y, scrollOptions: w, tweet: n });
                                        break;
                                    default:
                                        o = null;
                                }
                                return r.createElement(s.Z, { key: `tv-carousel-item-${n.id_str}-${e}`, style: e === x.length - 1 ? void 0 : b.scrollSnapElement }, r.createElement(u.nO, { data: { position: e } }, o));
                            },
                            [E, t, x.length, l, y, S],
                        );
                    return r.createElement(
                        p.Z,
                        {
                            "aria-label": void 0,
                            name: n,
                            onFocus: () => {
                                o?.(!0, !1, R);
                            },
                            preferredChildName: (0, f.X)("0"),
                            role: "region",
                            saveLastFocusedChild: !0,
                            scrollOptions: C,
                            style: b.container,
                            trackChildren: !0,
                        },
                        k ? r.createElement(a.ZP, { size: "headline1", style: b.title, weight: "bold" }, k) : null,
                        r.createElement(i.Z, { contentContainerStyle: b.flatListContentContainer, data: x, horizontal: !0, initialNumToRender: 5, keyExtractor: v, renderItem: P, showsHorizontalScrollIndicator: !1, style: b.flatList }),
                    );
                },
                b = l.default.create((e) => ({ container: { overflow: "hidden", width: "100%" }, scrollSnapElement: { marginEnd: e.spaces.space16 }, video: { width: 340 * e.scaleMultiplier }, flatList: {}, flatListContentContainer: { display: "flex", flexDirection: "row" }, title: { color: e.colors.text, marginTop: e.spaces.space12, marginBottom: e.spaces.space20 } }));
            var C = n(396342),
                k = n(879891),
                S = n(516951),
                E = n(291394);
            const R = ({ content: e, displayType: t, getSetPositionFn: n, handleNoriginArrowPress: o, name: i, onFocus: l, onFocusChild: u, onReady: w, onSelectVideo: v, playVideoPreview: y, title: b, videoCardStyle: R }) => {
                    const P = r.useRef(null),
                        _ = (0, c.Z)(i) || i,
                        Z = (0, d.z)(),
                        F = r.useMemo(() => e.filter((e) => !!e?.id_str), [e]),
                        z = r.useRef(Array(F?.length).fill(null)),
                        { direction: A } = (0, k.Z)(),
                        M = "rtl" === A,
                        T = r.useCallback(
                            (e) => {
                                if (P.current?.isAnimating.current) return !0;
                                const t = P.current?.positionRef.current || 0,
                                    n = P.current?.setPosition || S.Z;
                                let r;
                                switch (e.key) {
                                    case "ArrowLeft":
                                        r = M ? Math.min(t + 1, F.length - 1) : Math.max(t - 1, 0);
                                        break;
                                    case "ArrowRight":
                                        r = M ? Math.max(t - 1, 0) : Math.min(t + 1, F.length - 1);
                                        break;
                                    default:
                                        return !1;
                                }
                                return r !== t && (n(r), (0, C.setFocus)(`${_}.${(0, f.X)(r.toString())}`), !0);
                            },
                            [F.length, _, M],
                        ),
                        L = r.useMemo(
                            () =>
                                F.map((e, t) => (e, n, r) => {
                                    u?.(r), P.current?.setPosition(t);
                                }),
                            [F, u],
                        ),
                        I = r.useMemo(() => [x.video, R || null], [R]),
                        $ = r.useCallback(
                            ({ index: e, item: n }) => {
                                let i;
                                const a = P.current?.positionRef.current || 0;
                                switch (t) {
                                    case g.Y.VIDEO:
                                        i = r.createElement(m.Z, { authorTextSize: "subtext1", handleNoriginArrowPress: o, isNearView: e >= a - 1 && e <= a + 3, key: n.id_str, name: (0, f.X)(e.toString()), onFocus: L[e], onPress: v, onReady: w, playVideoPreview: y, style: I, tweet: n });
                                        break;
                                    case g.Y.SHORT_VIDEO:
                                        i = r.createElement(h.e, { analytics: Z, handleNoriginArrowPress: o, isNearView: e >= a - 1 && e <= a + 7, key: n.id_str, name: (0, f.X)(e.toString()), onFocus: L[e], onPress: v, playVideoPreview: y, tweet: n });
                                        break;
                                    default:
                                        i = null;
                                }
                                return r.createElement(
                                    s.Z,
                                    {
                                        key: `tv-carousel-item-${n.id_str}-${e}`,
                                        ref: (t) => {
                                            z.current[e] = t;
                                        },
                                        style: e === F.length - 1 ? void 0 : x.item,
                                    },
                                    i,
                                );
                            },
                            [Z, t, F.length, o, L, w, v, y, I],
                        ),
                        O = r.useMemo(() => F.map((e, t) => $({ item: e, index: t })), [F, $]),
                        V = r.useCallback(
                            (e) => {
                                (P.current = e), n?.(e.setPosition);
                            },
                            [n],
                        );
                    return r.createElement(p.Z, { "aria-label": void 0, name: i, onArrowPress: T, onFocus: () => l?.(!0, !1, _), preferredChildName: (0, f.X)("0"), role: "region", saveLastFocusedChild: !0, trackChildren: !0 }, b ? r.createElement(a.ZP, { size: "headline1", style: x.title, weight: "bold" }, b) : null, r.createElement(E.k, { getGPUScrollerApi: V, renderedItemRefs: z, scrollX: !0, scrollY: !1 }, r.createElement(s.Z, { style: x.itemContainer }, O)));
                },
                x = l.default.create((e) => ({ item: { marginEnd: e.spaces.space16 }, video: { width: 490 * e.scaleMultiplier }, itemContainer: { display: "flex", flexDirection: "row" }, title: { color: e.colors.text, marginTop: e.spaces.space12, marginBottom: e.spaces.space20 } }));
            function P(e) {
                return (0, o.Z)() ? r.createElement(y, e) : r.createElement(R, e);
            }
        },
        834048: (e, t, n) => {
            n.d(t, { D: () => o });
            n(202784);
            var r = n(950822);
            const o = (e) => (0, r.Z)("span", e);
        },
        91946: (e, t, n) => {
            n.d(t, { Kh: () => d, Ee: () => E, G7: () => b });
            var r = n(807896),
                o = n(202784),
                i = n(879891),
                s = n(302752),
                a = n(392237),
                l = n(125363),
                c = n(390387),
                u = n(834048);
            const d = ({ color: e = "text", extendedWidth: t, lang: n = "en", numberOfLines: d = 0, size: f = "body", style: w, weight: v = "regular", ...y }) => {
                    const { direction: b } = (0, i.Z)(),
                        C = (0, l.v9)(c.VT) || "en",
                        k = o.useCallback(() => {
                            const e = "rtl" === b;
                            let r;
                            return (r = t ? "chirpExtended" : "normal"), b ? ("rtl" === b ? "forceRtl" : r) : n ? ("ja" === n ? "ja" : s.Z.isLocaleRTL(n) ? "forceRtl" : r) : "ja" === C ? "ja" : e || s.Z.isLocaleRTL(C) ? "rtl" : r;
                        }, [b, t, n, C]),
                        S = o.useMemo(() => a.default.supports("-webkit-line-clamp: 1"), []),
                        E = o.useCallback(
                            (e) => {
                                if (!d || d <= 1 || S) {
                                    return { textOverflow: "unset", ...(S ? { WebkitLineClamp: d } : {}) };
                                }
                                const t = a.default.flatten(e),
                                    n = t && t.lineHeight;
                                if (!n || "string" != typeof n) return {};
                                return { maxHeight: `calc(${`${d} * ${n}`.replace(/calc/g, "")})` };
                            },
                            [S, d],
                        ),
                        R = o.useMemo(() => k(), [k]),
                        x = o.useMemo(() => E(), [E]);
                    return o.createElement(u.D, (0, r.Z)({}, y, { style: [p.container, g[R], { ...x }, { color: a.default.theme.colors[e] }, h[f], m[v], p.lines, w] }));
                },
                p = a.default.create((e) => ({ container: { display: "flex", flexDirection: "row", fontFamily: e.fontFamilies.normal }, lines: { WebkitBoxOrient: "vertical", display: "-webkit-box", overflow: "hidden" } })),
                g = a.default.create((e) => ({ inherit: { fontFamily: "inherit" }, normal: { fontFamily: e.fontFamilies.normal }, ja: { fontFamily: e.fontFamilies.japan }, rtl: { fontFamily: e.fontFamilies.rtl }, forceRtl: { fontFamily: e.fontFamilies.rtl, writingDirection: "rtl" }, chirpExtended: { fontFamily: e.fontFamilies.chirpExtended } })),
                h = a.default.create((e) => ({ subtext3: { fontSize: e.fontSizes.subtext3, lineHeight: e.lineHeights.subtext3 }, subtext2: { fontSize: e.fontSizes.subtext2, lineHeight: e.lineHeights.subtext2 }, subtext1: { fontSize: e.fontSizes.subtext1, lineHeight: e.lineHeights.subtext1 }, body: { fontSize: e.fontSizes.body, lineHeight: e.lineHeights.body }, headline2: { fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2 }, headline1: { fontSize: e.fontSizes.headline1, lineHeight: e.lineHeights.headline1 }, title4: { fontSize: e.fontSizes.title4, lineHeight: e.lineHeights.title4 }, title3: { fontSize: e.fontSizes.title3, lineHeight: e.lineHeights.title3 }, title2: { fontSize: e.fontSizes.title2, lineHeight: e.lineHeights.title2 }, title1: { fontSize: e.fontSizes.title1, lineHeight: e.lineHeights.title1 } })),
                m = a.default.create((e) => ({ normal: { fontWeight: e.fontWeights.regular }, medium: { fontWeight: e.fontWeights.medium }, bold: { fontWeight: e.fontWeights.bold }, heavy: { fontWeight: e.fontWeights.heavy } }));
            var f = n(950822),
                w = n(351686),
                v = n(297689),
                y = n(494210);
            const b = o.forwardRef((e, t) => {
                    const { hrefAttrs: n, onLayout: r, onMoveShouldSetResponder: i, onMoveShouldSetResponderCapture: s, onResponderEnd: a, onResponderGrant: l, onResponderMove: c, onResponderReject: u, onResponderRelease: d, onResponderStart: p, onResponderTerminate: g, onResponderTerminationRequest: h, onScrollShouldSetResponder: m, onScrollShouldSetResponderCapture: w, onSelectionChangeShouldSetResponder: v, onSelectionChangeShouldSetResponderCapture: b, onStartShouldSetResponder: k, onStartShouldSetResponderCapture: S, ...E } = e;
                    const R = o.useContext(y.Z);
                    let x = "div";
                    const P = E;
                    if (((P.style = [C.view$raw, R && C.inline, e.style]), null != e.href && ((x = "a"), null != n))) {
                        const { download: e, rel: t, target: r } = n;
                        null != e && (P.download = e), null != t && (P.rel = t), "string" == typeof r && (P.target = "_" !== r.charAt(0) ? `_${r}` : r);
                    }
                    return (P.ref = t), (0, f.Z)(x, P, {});
                }),
                C = v.Z.create({ view$raw: { alignItems: "stretch", backgroundColor: "transparent", border: "0 solid black", boxSizing: "border-box", display: "flex", flexBasis: "auto", flexDirection: "column", flexShrink: 0, listStyle: "none", margin: 0, minHeight: 0, minWidth: 0, padding: 0, position: "relative", textDecoration: "none", zIndex: 0 }, inline: { display: "inline-flex" } }),
                k = window?.devicePixelRatio || 2,
                S = (e) => (0, f.Z)("img", e),
                E = (e) => {
                    const { "aria-label": t, borderStyle: n, source: r, style: i } = e,
                        [s, a] = o.useState(!1),
                        l = o.useRef(null),
                        c = o.useMemo(() => [R.root, i], [i]),
                        u = o.useMemo(() => {
                            const e = l.current?.getBoundingClientRect().width || 0,
                                t = l.current?.getBoundingClientRect().height || e,
                                n = { width: e * k, height: t * k },
                                o = { width: e * k, height: t * k, url: r?.toString() || "" };
                            return s && e ? w.Z.selectBestUrl(n, o, void 0, k) : r;
                        }, [s, r]),
                        d = o.useMemo(() => [R.background, { backgroundImage: `url('${"string" == typeof u ? u : ""}')` }, n], [n, u]),
                        p = o.useMemo(() => [R.image, n], [n]);
                    return o.createElement(
                        b,
                        {
                            ref: (e) => {
                                (l.current = e), a(!0);
                            },
                            style: c,
                        },
                        s ? o.createElement(o.Fragment, null, o.createElement(b, { style: [R.backgroundImage, d] }), o.createElement(S, { alt: t || t || "", draggable: !1, loading: "lazy", style: p })) : null,
                    );
                },
                R = a.default.create((e) => ({ root: { overflow: "hidden" }, background: { backgroundColor: "rgba(0,0,0,0.00)", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", bottom: 0, end: 0, height: "100%", start: 0, top: 0, width: "100%", zIndex: -1 }, backgroundImage: { imageRendering: "pixelated" }, image: { ...a.default.absoluteFillObject, opacity: "0", zIndex: -1, imageRendering: "pixelated" } }));
        },
        269653: (e, t, n) => {
            n.d(t, { x: () => s });
            n(136728);
            var r = n(202784),
                o = n(899492),
                i = n(225790);
            const s = ({ text: e }) => {
                const t = o.Z.getTwemojiEntities(e);
                if (0 === t.length) return e;
                const n = [];
                let s = 0;
                t.forEach((t, o) => {
                    const [a, l] = t.indices;
                    t?.text && t?.url ? (n.push(e.substring(s, a)), n.push(r.createElement(i.X, { key: o, text: t.text, url: t.url }))) : n.push(e.substring(s, l)), (s = l);
                });
                const a = t[t.length - 1],
                    l = e.substring(a.indices[1], e.length);
                return n.push(l), n;
            };
        },
        686010: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(807896),
                o = n(202784),
                i = n(396342),
                s = n(325686),
                a = n(392237),
                l = n(334522),
                c = n(898063),
                u = n(530745);
            const d = (e) => {
                    const { autoFocus: t, autoRestoreFocus: n = !1, children: a, computeStyle: d, extraProps: g, focusBoundaryDirections: h, focusable: m = !0, forceFocus: f, handleNoriginArrowPress: w, isFocusBoundary: v, name: y, onArrowPress: b, onBlur: C, onEscapeOrBack: k, onFocus: S, onPress: E, preferredChildName: R, ready: x = !0, saveLastFocusedChild: P = !1, scrollOptions: _, style: Z, testID: F, trackChildren: z, withNestedName: A = !0, ...M } = e,
                        T = (0, l.Z)(y, A),
                        L = (0, l.Z)(R && y ? `${y}.${R}` : R, A),
                        I = o.useRef(!1),
                        $ = o.useCallback(
                            (e, t, n) => {
                                (I.current = n.isScrollRestoration), S?.(e, t, n);
                            },
                            [S],
                        ),
                        { focusKey: O, focusSelf: V, focused: D, hasFocusedChild: H, ref: B } = (0, i.useFocusable)({ autoRestoreFocus: n, extraProps: g, focusable: !!m, focusBoundaryDirections: h, forceFocus: f, focusKey: T || void 0, isFocusBoundary: v, onArrowPress: w, onBlur: C, onFocus: $, preferredChildFocusKey: L || void 0, saveLastFocusedChild: P, trackChildren: z });
                    o.useEffect(() => {
                        t && x && V();
                    }, [t, V, x]),
                        o.useEffect(() => {
                            void 0 !== _ && (D || H) && (B.current?.scrollIntoView("boolean" == typeof _ ? _ : { ..._, behavior: I.current ? "instant" : _.behavior }), (I.current = !1));
                        }, [D, B, _, H]);
                    const W = o.useMemo(() => (d ? d({ hasFocus: D, hasFocusedChild: H }) : Z), [d, D, H, Z]),
                        N = o.useCallback(
                            (e) => {
                                D || H || V();
                                const t = E?.(e);
                                t && e.stopPropagation();
                            },
                            [V, D, H, E],
                        );
                    return (0, c.ZP)("Arrow", D || (z && H) ? b : void 0, O), (0, c.ZP)("EscapeOrBack", D || (z && H) ? k : void 0, O), (0, c.ZP)(u.NW, D || (z && H) ? E : void 0, O), o.createElement(i.FocusContext.Provider, { value: O }, o.createElement(s.Z, (0, r.Z)({}, M, { onClick: N, ref: B, style: [W, p.noOutline], tabIndex: -1, testID: F || T }), "function" == typeof a ? a({ hasFocus: D, hasFocusedChild: H }) : a));
                },
                p = a.default.create((e) => ({ noOutline: { outlineStyle: "none" } })),
                g = o.memo(d);
        },
        291394: (e, t, n) => {
            n.d(t, { k: () => c });
            var r = n(202784),
                o = n(325686),
                i = n(879891),
                s = n(392237),
                a = n(673932);
            const l = (e) => {
                    e.preventDefault(), e.stopPropagation();
                    const t = e.target;
                    t && (t.scrollTop = 0);
                },
                c = ({ children: e, getGPUScrollerApi: t, renderedItemRefs: n, scrollContainerStyle: s, scrollX: c, scrollY: d, style: p }) => {
                    const { direction: g } = (0, i.Z)(),
                        h = "rtl" === g,
                        [m, f] = r.useState(0),
                        w = r.useRef(m),
                        v = r.useRef(!1),
                        y = r.useRef(null),
                        b = r.useCallback((e) => {
                            (w.current = e), f(e);
                        }, []),
                        C = r.useCallback(
                            (e) => {
                                const t = n.current?.[0]?.getBoundingClientRect(),
                                    r = n.current?.[e]?.getBoundingClientRect(),
                                    o = t?.top || 0,
                                    i = (r?.top || 0) - o;
                                let s;
                                if (h) {
                                    s = (t?.right || 0) - (r?.right || 0);
                                } else {
                                    const e = t?.left || 0;
                                    s = (r?.left || 0) - e;
                                }
                                return `translate(-${c ? s : 0}px, -${d ? i : 0}px)`;
                            },
                            [h, n, c, d],
                        ),
                        k = r.useCallback(
                            (e) => {
                                const t = y.current;
                                var n;
                                t && (t.style.transform = C(e)),
                                    (n = () => {
                                        b(e);
                                    }),
                                    (v.current = !0),
                                    setTimeout(() => {
                                        (v.current = !1), n?.();
                                    }, a.jP);
                            },
                            [C, b],
                        );
                    return (
                        r.useEffect(() => {
                            t?.({ setPosition: k, positionRef: w, isAnimating: v });
                        }, [t, k]),
                        r.createElement(o.Z, { onScroll: l, style: [u.container, p] }, r.createElement(o.Z, { ref: y, style: [u.virtualScrollContainer, s] }, e))
                    );
                },
                u = s.default.create(() => ({ container: { width: "100%", height: "100%", overflow: "hidden" }, virtualScrollContainer: { willChange: "transform", transition: `transform ${a.$P}ms ease`, transform: "translate(0,0)" } }));
        },
        650093: (e, t, n) => {
            n.d(t, { Z: () => E });
            var r = n(202784),
                o = n(873930),
                i = n(396342),
                s = n(555874),
                a = n(325686),
                l = n(879891),
                c = n(731708),
                u = n(392237),
                d = n(334522),
                p = n(602070),
                g = n(725516),
                h = n(686010),
                m = n(905979);
            const f = { behavior: "smooth", block: "start", inline: "nearest" },
                w = ({ autoFocus: e, content: t, flatListStyle: n, gridStyle: o, name: u, onSelectVideo: w, playVideoPreview: y, returnToFirstElementOnEscape: b, scrollOptions: C, style: k, title: S, width: E = 3, withScrollRestoration: R = !0 }) => {
                    const x = (0, g.z)(),
                        { direction: P } = (0, l.Z)(),
                        _ = r.useRef(null),
                        Z = r.useRef(Array(t?.length).fill(null)),
                        F = (0, d.Z)(`${u}.video-0`);
                    (0, p.ZP)(R);
                    const z = r.useCallback(
                            (e) => {
                                if (b && F && (0, i.getCurrentFocusKey)() !== F) return (0, i.setFocus)(F), !0;
                            },
                            [F, b],
                        ),
                        A = r.useCallback(
                            ({ index: e, item: t }) =>
                                r.createElement(
                                    a.Z,
                                    {
                                        key: t.id_str,
                                        ref: (t) => {
                                            Z.current[e] = t;
                                        },
                                        style: v,
                                    },
                                    r.createElement(m.K, { name: `video-${e}`, onPress: w, playVideoPreview: y, scrollOptions: C || f, style: v.videoCard, tweet: t }),
                                ),
                            [w, y, C],
                        ),
                        M = r.useCallback(
                            (e) => {
                                let t = "scroll";
                                switch (e.key) {
                                    case "ArrowUp":
                                        t = "scroll_up";
                                        break;
                                    case "ArrowDown":
                                        t = "scroll_down";
                                        break;
                                    case "ArrowLeft":
                                        t = "rtl" === P ? "scroll_right" : "scroll_left";
                                        break;
                                    case "ArrowRight":
                                        t = "rtl" === P ? "scroll_left" : "scroll_right";
                                }
                                return x.scribe({ element: "tv-grid", action: t }), !0;
                            },
                            [x, P],
                        );
                    return r.createElement(h.Z, { "aria-label": void 0, autoFocus: e, name: u, onArrowPress: M, onEscapeOrBack: z, role: "grid", saveLastFocusedChild: !0, style: v.container, trackChildren: !0 }, S ? r.createElement(c.ZP, { size: "headline1", style: v.title, weight: "bold" }, S) : null, r.createElement(a.Z, { ref: _, style: [v.gridContainer, k] }, r.createElement(s.Z, { contentContainerStyle: [v.grid, { gridTemplateColumns: `repeat(${E}, 1fr)` }, o], data: t, keyExtractor: (e) => e.id_str, renderItem: A, style: n })));
                },
                v = u.default.create((e) => ({ container: { flex: 1, height: "100%", width: "100%", overflow: "hidden" }, gridContainer: { justifyContent: "space-between", height: "100%", overflowY: "hidden", width: "100%" }, grid: { display: "grid", gridColumnGap: `calc(${e.spaces.space8} + ${e.spaces.space2})`, gridRowGap: e.spaces.space16, gridTemplateColumns: "repeat(3, 1fr)", marginBottom: e.spaces.space16 }, videoCard: { scrollMargin: e.spaces.space12 }, title: { color: e.colors.text, marginTop: e.spaces.space12, marginBottom: e.spaces.space20 } }));
            var y = n(382880),
                b = n(516951),
                C = n(291394);
            const k = ({ autoFocus: e, content: t, gridStyle: n, handleNoriginArrowPress: o, name: s, onFocus: u, onNearEnd: f, onSelectVideo: w, playVideoPreview: v, returnToFirstElementOnEscape: k, title: E, width: R = 3, withScrollRestoration: x = !0 }) => {
                    const P = (0, d.Z)(s) || s,
                        _ = r.useRef(null),
                        Z = r.useRef(!1),
                        F = (0, g.z)(),
                        { direction: z } = (0, l.Z)(),
                        A = r.useRef(Array(t?.length).fill(null)),
                        M = r.useMemo(() => (0, y.Z)(f || b.Z), [t?.length]);
                    (0, p.ZP)(x);
                    const T = (0, d.Z)(`${s}.video-0`),
                        L = r.useCallback(() => {
                            if (k && 0 !== _.current?.positionRef.current) return (0, i.setFocus)(T || ""), _.current?.setPosition(0), !0;
                        }, [T, k]),
                        I = r.useCallback(() => Z.current || !1, []),
                        $ = r.useCallback(
                            ({ index: e, item: n }) =>
                                r.createElement(
                                    a.Z,
                                    {
                                        key: e,
                                        ref: (t) => {
                                            A.current[e] = t;
                                        },
                                        style: S,
                                    },
                                    r.createElement(m.K, {
                                        handleNoriginArrowPress: o || I,
                                        name: `video-${e}`,
                                        onFocus: () => {
                                            _.current?.setPosition(e);
                                            const n = Math.floor((_.current?.positionRef.current || 0) / R);
                                            Math.ceil((t?.length || 0) / R) - n <= 3 && M();
                                        },
                                        onPress: w,
                                        playVideoPreview: v,
                                        style: S.videoCard,
                                        tweet: n,
                                    }),
                                ),
                            [t?.length, I, o, M, w, v, R],
                        ),
                        O = r.useMemo(() => t?.map((e, t) => $({ item: e, index: t })) || null, [t, $]),
                        V = r.useCallback(
                            (e) => {
                                let n = "scroll";
                                const r = _.current?.positionRef.current || 0;
                                let o = r,
                                    s = !0;
                                switch (e.key) {
                                    case "ArrowUp":
                                        (o = r - R), o < 0 && (s = !1), (n = "scroll_up");
                                        break;
                                    case "ArrowDown":
                                        (n = "scroll_down"), (o = r + R), o > (t?.length || 0) && (s = !1);
                                        break;
                                    case "ArrowLeft":
                                        (n = "rtl" === z ? "scroll_right" : "scroll_left"), (r % R != 0 && r !== (t?.length || 0)) || (s = !1), (o = r - 1);
                                        break;
                                    case "ArrowRight":
                                        (n = "rtl" === z ? "scroll_left" : "scroll_right"), r % R == R - 1 && (s = !1), (o = r + 1);
                                }
                                return s ? (F.scribe({ element: "tv-grid", action: n }), (0, i.setFocus)(`${P}.video-${o}`), (Z.current = !1), !0) : ((Z.current = !0), !1);
                            },
                            [F, t?.length, z, P, R],
                        ),
                        D = r.useMemo(() => ({ gridTemplateColumns: `repeat(${R}, 1fr)` }), [R]),
                        H = r.useCallback((e) => {
                            _.current = e;
                        }, []),
                        B = r.useCallback(() => u?.(!0, !1, P), [P, u]);
                    return r.createElement(h.Z, { "aria-label": void 0, autoFocus: e, handleNoriginArrowPress: o, name: s, onArrowPress: V, onEscapeOrBack: L, onFocus: B, role: "grid", saveLastFocusedChild: !0, style: S.container, trackChildren: !0 }, E ? r.createElement(c.ZP, { size: "headline1", style: S.title, weight: "bold" }, E) : null, r.createElement(C.k, { getGPUScrollerApi: H, renderedItemRefs: A, scrollX: !1, scrollY: !0 }, r.createElement(a.Z, { style: [S.grid, D, n] }, O)));
                },
                S = u.default.create((e) => ({ container: { flex: 1, height: "100%", width: "100%" }, grid: { display: "grid", gridColumnGap: `calc(${e.spaces.space8} + ${e.spaces.space2})`, gridRowGap: e.spaces.space16, gridTemplateColumns: "repeat(3, 1fr)", marginBottom: e.spaces.space16 }, videoCard: { scrollMargin: e.spaces.space12, height: "100%", width: "100%" }, title: { color: e.colors.text, marginTop: e.spaces.space12, marginBottom: e.spaces.space20 } }));
            function E(e) {
                return (0, o.Z)() ? r.createElement(w, e) : r.createElement(k, e);
            }
        },
        596219: (e, t, n) => {
            n.d(t, { Y: () => r });
            const r = Object.freeze({ VIDEO: "VIDEO", SHORT_VIDEO: "SHORT_VIDEO" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.TV~bundle.Account-63393a95.10921eba.js.map
