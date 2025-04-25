"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-e4e3d8bb"],
    {
        392884: (e, t, i) => {
            i.r(t), i.d(t, { AppInstallOnLandingPrompt: () => Ce, AudioModule: () => ze, BottomCookieBannerPicker: () => Se, ColumnFromPath: () => Be, ColumnTimelineAdapter: () => Ge, DtabBar: () => Ee, GlobalKeyboardShortcuts: () => Le, IntercomStarter: () => Ie, JetfuelDevBar: () => ke, LeaveSite: () => Ve, LivePipeline: () => Ae, LoggedOutNotifications: () => $e, ModalSheet: () => De, Toast: () => Te, appReloader: () => Oe, badgeTimers: () => Me, bindKeyboardShortcuts: () => Ue, getScreenReaderShortcutsDataAttribute: () => Ne, ie11Reflower: () => Pe, initGeoLocation: () => Fe, inputDetect: () => we, multiAccountListFetcher: () => Re, redirectEmailUser: () => Ze, scribeExternalReferer: () => xe, userPresence: () => je });
            var r = {};
            i.r(r), i.d(r, { KEYBOARD: () => O, MOUSE: () => M, _private: () => H, detectedType: () => F, detectedTypes: () => z, initialize: () => C, register: () => j, registerEvery: () => V, registerSome: () => $, reset: () => G, unregister: () => B });
            var s = i(567447),
                n = i(32399),
                o = i(105019),
                a = i(223543),
                c = i(80309),
                d = i(642028),
                l = i(634518),
                u = i(316391),
                p = i(551415),
                h = i(331879),
                m = i(337686),
                _ = i(58255),
                f = i(726499),
                g = i(516951),
                v = i(615656),
                b = i(806960),
                y = i(454319),
                w = i(390387),
                S = i(71620),
                E = i(801501);
            const k = (e, t = 1e3) => {
                    window.requestIdleCallback ? window.requestIdleCallback(() => e.fire()) : setTimeout(() => e.fire(), t);
                },
                I = (e) => {
                    if (!w.Qb(e.getState())) return;
                    const t = e.dispatch((0, S.zr)("BADGE_TIMERS")({ showToast: !1, [v.ZP.AccessDeniedByBouncer]: { customAction: g.Z } })),
                        i = (i) => e.dispatch(i).catch(t),
                        r = new E.Z(3e4).interval(() => {
                            "background" !== f.Z.currentState && (i((0, b.kJ)()), (0, y.Xy)(e.getState()).forEach(i));
                        });
                    r.start(), k(r);
                    f.Z.addEventListener("change", (e) => {
                        "active" === e && k(r);
                    });
                };
            var L = i(427495),
                A = i.n(L),
                D = (i(136728), i(411916)),
                T = i.n(D);
            const O = "keyboard",
                M = "mouse";
            let U = [];
            const P = { [O]: !1, [M]: !1 };
            class R {
                constructor(e) {
                    (this._handleTimerEnd = () => {
                        this._count >= 3 && this._handleDetected(), this._reset();
                    }),
                        (this._handleDetected = () => {
                            this._reset(), this.detach(), this.detected();
                        }),
                        (this._reset = () => {
                            clearTimeout(this._timer), (this._timer = void 0), (this._count = 0);
                        }),
                        (this._handleMouseMove = () => {
                            (this._count = this._count + 1), this._count >= 3 ? this._handleDetected() : this._timer || (this._timer = setTimeout(this._handleTimerEnd, 500));
                        }),
                        (this.attach = () => {
                            document.addEventListener("mousemove", this._handleMouseMove), document.addEventListener("touchend", this._reset);
                        }),
                        (this.detach = () => {
                            document.removeEventListener("mousemove", this._handleMouseMove), document.removeEventListener("touchend", this._reset);
                        }),
                        (this.detected = e),
                        (this._count = 0);
                }
            }
            class Z {
                constructor(e) {
                    (this._handleKeyDown = (e) => {
                        const { altKey: t, ctrlKey: i, metaKey: r, target: s } = e;
                        var n;
                        (!(t || i || r) && ((n = s) instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)) || (this.detach(), this.detected());
                    }),
                        (this.attach = () => {
                            document.addEventListener("keydown", this._handleKeyDown);
                        }),
                        (this.detach = () => {
                            document.removeEventListener("keydown", this._handleKeyDown);
                        }),
                        (this.detected = e);
                }
            }
            function x(e) {
                P[e] = !0;
                const t = U.filter(({ matches: e }) => e()),
                    i = U.filter(({ matches: e }) => !e());
                (U = i), t.forEach(({ callback: e }) => e());
            }
            let N;
            const C = () => {
                    (N = [new Z(() => x(O)), new R(() => x(M))]), N.forEach((e) => e.attach());
                },
                z = () => Object.keys(P).filter((e) => P[e]),
                F = (e) => P[e],
                j = (e, t) => {
                    const i = () => P[t];
                    i() ? T()(e) : U.push({ matches: i, callback: e });
                },
                $ = (e, t) => {
                    const i = () => t.some((e) => P[e]);
                    i() ? T()(e) : U.push({ matches: i, callback: e });
                },
                V = (e, t) => {
                    const i = () => t.every((e) => P[e]);
                    i() ? T()(e) : U.push({ matches: i, callback: e });
                },
                B = (e) => {
                    const t = U.indexOf(e);
                    t > -1 && U.splice(t, 1);
                },
                G = () => {
                    (U = []),
                        Object.keys(P).forEach((e) => {
                            P[e] = !1;
                        }),
                        N.forEach((e) => e.detach());
                },
                H = { MOUSE_INTERVAL_TIME_IN_MS: 500, SUCCESSIVE_MOUSE_EVENTS: 3, detected: x };
            var K = i(528840);
            var X = i(806528),
                W = i(341276),
                q = i(38562);
            const Q = (e) =>
                    navigator?.permissions
                        ? navigator?.permissions?.query({ name: "geolocation" }).then(function (t) {
                              return (
                                  e.dispatch((0, X.ey)(t.state)),
                                  (t.onchange = function () {
                                      e.dispatch((0, X.ey)(this.state));
                                  }),
                                  Promise.resolve(t.state)
                              );
                          })
                        : Promise.resolve(),
                Y = (e) =>
                    (0, q.JJ)(e.getState())
                        ? Q(e).then((t) => {
                              t === W.S.granted && e.dispatch((0, X.iG)());
                          })
                        : Promise.resolve();
            var J = i(323265);
            const ee = {
                init: (e) => {
                    const t = (t) => {
                        if ("active" === t && e && e.body) {
                            const t = e.body.style.display;
                            (e.body.style.display = "none"), e.body.clientHeight, (e.body.style.display = t);
                        }
                    };
                    J.ZP.isDesktopOS() && J.ZP.isIE() && f.Z.addEventListener("change", t);
                },
            };
            var te = i(163390),
                ie = (i(571372), i(543673), i(240753), i(128399), i(2027)),
                re = i(446914),
                se = i(88656);
            let ne;
            const oe = {
                    isSupported: (e) => "EventSource" in window && e.isTrue("livepipeline_client_enabled"),
                    isSupportedAndReady(e) {
                        return this.isSupported(e) && !!ne;
                    },
                    create(e, t, i) {
                        if (!this.isSupported(e)) throw new Error("This browser does not support LivePipeline");
                        if (ne) throw new Error("LivePipeline should only be initialized once");
                        return (
                            (ne = new ie.Z({
                                makeEventSource: (e) => {
                                    const t = ((e) => {
                                        const t = e.map(encodeURIComponent).join(","),
                                            r = (e) => `${e}/live_pipeline/events?topic=${t}`,
                                            s = r(window.location.hostname.endsWith("twitter.com") ? "https://api.twitter.com" : "https://api.x.com"),
                                            n = i.getReplacementHost(new URL(s));
                                        return n ? r(`https://${n}`) : s;
                                    })(e);
                                    return Promise.resolve(new window.EventSource(t, { withCredentials: !0 }));
                                },
                                updateSubscriptions: (e) =>
                                    t
                                        .withEndpoint(re.Z)
                                        .updateSubscriptions(e)
                                        .catch((e) => {
                                            if (e)
                                                if (e instanceof se.Z && (0, v.VZ)(e, v.ZP.SessionNotFound)) ne && ne.restartEventSource();
                                                else if (!(e instanceof se.Z) && e instanceof Error) return Promise.reject(e);
                                            return Promise.resolve();
                                        }),
                            })),
                            f.Z.addEventListener("change", (e) => this._handleAppStateChange(e)),
                            ne
                        );
                    },
                    get() {
                        if (!ne) throw new Error("LivePipeline instance has not been initialized");
                        return ne;
                    },
                    destroy() {
                        ne && ne.teardown(), (ne = void 0);
                    },
                    _handleAppStateChange(e) {
                        "active" === e ? this.get().resume() : this.get().suspend();
                    },
                },
                ae = (e) => {
                    const t = (0, S.zr)("MULTI_ACCOUNT_LIST_UPDATER"),
                        i = e.dispatch(t({ showToast: !1, [v.ZP.AccessDeniedByBouncer]: { customAction: g.Z } })),
                        r = (t) => e.dispatch(t).catch(i);
                    (window.requestIdleCallback || window.requestAnimationFrame)(() => {
                        r((0, y.s2)()).then(() => {
                            (0, y.Xy)(e.getState()).forEach(r);
                        });
                    });
                };
            var ce = i(192464),
                de = i(840590);
            const le = ["/login/error", "/i/flow/lite_login", "/i/flow/login", "/i/flow/signup"],
                ue = (e, t) => {
                    const i = !w.Qb(t),
                        r = w.$q(t),
                        { pathname: s } = de.default.location;
                    -1 === le.indexOf(s) && i && r && de.default.replace("/i/flow/lite_login");
                };
            var pe = i(401388),
                he = i(945656),
                me = i(31326),
                _e = i(840647),
                fe = i(833773),
                ge = i(396987),
                ve = i(782826);
            const be = { page: "external", action: "referred" },
                ye = (e, t, i, r) => {
                    const s = (e) => r.dispatch((0, S.zr)(e)({})),
                        n = fe.zI({ featureSwitches: t, query: de.default && de.default.location.query });
                    if ((0, pe.Z)(n)) return Promise.resolve();
                    if (n.referer && !ve.ZP.isExternalUrl(n.referer) && !ve.ZP.isInternalRedirect(n.referer)) return Promise.resolve();
                    n.referer || (n.referer = ""), n.referral_details_str || (n.referral_details_str = ""), n.referral_type || (n.referral_type = 0);
                    const o = (0, ge.hZ)(t);
                    o && (n.external_referer_cookie_value = o);
                    const a = fe.ti(n),
                        c = { ...be, client: (0, _e.Z)().clientName };
                    o && a && (c.action = "set_access_referer_cookie");
                    const d = i.createEventObject(c, "client_event", n),
                        l = i.createPayload([d]);
                    let u;
                    u = n
                        ? e
                              .withEndpoint(me.Z)
                              .referer({ landing_url: n.url, referral_details: n.referral_details_str || void 0, referrer_url: n.referer || void 0 })
                              .catch(() => s("OCF_EXTERNAL_REFERER"))
                        : Promise.resolve();
                    const p = e
                        .withEndpoint(he.Z)
                        .externalReferer(l)
                        .then((e) => {
                            e && (0, ge.QF)(t, e[0]);
                        })
                        .catch(() => s("SCRIBE_EXTERNAL_REFERER"));
                    return Promise.all([p, u]);
                },
                we = r,
                Se = o.Z,
                Ee = a.Z,
                ke = l.Z,
                Ie = d.Z,
                Le = c.ZP,
                Ae = oe,
                De = s.Z,
                Te = h.Z,
                Oe = m,
                Me = I,
                Ue = function (e, t) {
                    const i = Object.keys(e);
                    let r,
                        s = !1;
                    const n = () => {
                        s ||
                            ((r = A()(t)),
                            i.forEach((t) =>
                                r.bind(t, (i) => {
                                    var r;
                                    (0, K.z)(window.location.pathname) ||
                                        ((r = e[t]),
                                        (e) => {
                                            e.preventDefault(), e.stopPropagation(), r(e);
                                        })(i);
                                }),
                            ));
                    };
                    return (
                        $(n, [O, M]),
                        () => {
                            (s = !0), B(n), r && r.unbind(i);
                        }
                    );
                },
                Pe = ee,
                Re = ae,
                Ze = ue,
                xe = ye,
                Ne = te.wR,
                Ce = n.Z,
                ze = _.w,
                Fe = Y,
                je = ce.Z,
                $e = p.Z,
                Ve = u.Z,
                Be = null,
                Ge = null;
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => s, Q: () => n });
            const r = (e, t, i) => {
                    const r = new Date();
                    let s = r.getFullYear() - e;
                    const n = r.getMonth() + 1 - t;
                    if (n < 0) s -= 1;
                    else if (0 === n) {
                        r.getDate() - i < 0 && (s -= 1);
                    }
                    return s;
                },
                s = (e, t, i, s = !1) => (e && t && i ? r(e, t, i) < 18 : s),
                n = () => new Date().getFullYear() - 120;
        },
        396987: (e, t, i) => {
            i.d(t, { QF: () => a, Qo: () => c, hZ: () => o });
            var r = i(918621);
            const s = "external_referer",
                n = 604800;
            function o(e) {
                return (0, r.ej)({ cookieName: s, featureSwitches: e });
            }
            function a(e, t) {
                const i = (t && t.encryptedReferralDetails) || "",
                    o = (t && t.encryptedReferer) || "",
                    a = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!i && !o && !a) return;
                const c = `${encodeURIComponent(o)}|${a}|${encodeURIComponent(i)}`;
                (0, r.d8)(s, c, { cookieOptions: { maxAge: n, encode: (e) => e }, featureSwitches: e });
            }
            const c = (e) => {
                const t = o(e);
                if (t && t.split("|").length > 1) {
                    const e = t.split("|");
                    return { encryptedReferer: e[0], referralType: e[1], encryptedReferralDetails: e[2] };
                }
            };
        },
        833773: (e, t, i) => {
            i.d(t, { zI: () => a, ti: () => c, bi: () => d });
            i(396987), i(875640);
            var r = i(401388),
                s = i(2430),
                n = i(782826);
            const o = Object.freeze({ Web: 0, Email: 1, Partner: 2, Market: 3, Access: 4 });
            function a(e) {
                let t = {};
                const { emptyIfServerRendered: i = !0 } = e;
                const { httpReferer: a = document.referrer ?? "", query: c = window.location.search ?? {}, requestUrl: d = window.location.href } = e,
                    {
                        cn: l,
                        iid: u,
                        nid: p,
                        original_referer: h,
                        partner: m,
                        ref_src: _,
                        ref_url: f,
                        refsrc: g,
                        s: v,
                        uid: b,
                        url: y,
                    } = (function (e) {
                        const t = {};
                        return (
                            ["cn", "iid", "original_referer", "nid", "refsrc", "ref_src", "ref_url", "s", "partner", "uid", "url"].forEach((i) => {
                                t[i] = (0, s.BX)(e[i]);
                            }),
                            t
                        );
                    })(c);
                let w = Object.freeze({});
                if (
                    (null != e.referralMapping
                        ? (w = e.referralMapping)
                        : null != e.featureSwitches &&
                          (w = (function (e) {
                              const t = {},
                                  i = e.getArrayValue("shortened_tracking_parameters_mapping");
                              for (const e of i) {
                                  const i = e.split(":");
                                  if (2 === i.length) {
                                      const [e, r] = i;
                                      t[e] = r;
                                  }
                              }
                              return t;
                          })(e.featureSwitches)),
                    _)
                )
                    t = { referral_type: o.Web, referral_details_str: _ };
                else if ("email" === g || u) {
                    let e;
                    try {
                        e = window.atob(l);
                    } catch (t) {
                        e = "invalid";
                    }
                    const i = ["twcamp^email", p && `twsrc^${p}`, b && `twcon^${b}`, u && `twterm^${u}`, `twgr^${e}`].filter(Boolean).join("|");
                    t = { referral_type: o.Email, referral_details_str: i };
                } else if (v) {
                    const e = w[v];
                    e && (t = { referral_type: o.Web, referral_details_str: e });
                } else m ? (t = { referral_type: o.Partner, referral_details_str: `twsrc^${m}` }) : a && n.ZP.isExternalUrl(a) && (t = { referral_type: o.Web });
                let S = f ?? h ?? y ?? a;
                return S.length > 256 && (S = S.substring(0, 256)), S && (t = { ...t, referer: S }), (0, r.Z)(t) || (t = { ...t, url: d }), t;
            }
            function c(e) {
                return e.referral_type === o.Access;
            }
            function d(e) {
                return e.referral_type === o.Web;
            }
        },
        355335: (e, t, i) => {
            i.d(t, { Z: () => c, k: () => a });
            i(543673), i(240753), i(128399), i(136728);
            var r = i(202784),
                s = i(565058),
                n = i(400752),
                o = i(107267);
            const a = (0, s.cn)(!1),
                c = () => {
                    const e = (0, o.useHistory)(),
                        t = (0, o.useLocation)(),
                        [i, s] = (0, n.KO)(a);
                    r.useEffect(() => {
                        const e = new URLSearchParams(t.search).get("jfDev"),
                            i = sessionStorage.getItem("jfDev");
                        let r = !1;
                        e ? (("1" !== e && "true" !== e) || (r = !0), ("0" !== e && "false" !== e) || (r = !1)) : (r = "true" === i), r ? (s(!0), sessionStorage.setItem("jfDev", "true")) : (s(!1), sessionStorage.removeItem("jfDev"));
                    }, [t.search, s]);
                    const c = r.useCallback(
                        (i) => {
                            const r = new URLSearchParams(t.search);
                            i ? (r.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (r.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const n = r.toString();
                            e.push({ pathname: t.pathname, search: n }), s(i);
                        },
                        [e, t.pathname, t.search, s],
                    );
                    return {
                        isDev: i,
                        enableDev: r.useCallback(() => {
                            c(!0);
                        }, [c]),
                        disableDev: r.useCallback(() => {
                            c(!1);
                        }, [c]),
                    };
                };
        },
        163390: (e, t, i) => {
            i.d(t, { OX: () => p, Od: () => l, PN: () => h, uq: () => d, wR: () => _ });
            var r = i(251067),
                s = i(522171),
                n = i(674132),
                o = i.n(n),
                a = i(912021),
                c = i(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                l = (0, a.Z)((e) => {
                    const t = e ? [{ description: o().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, r.fH)(r.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: o().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: o().a83d4280, keys: d.nextItem, universal: !0 }, { description: o().g0048656, keys: d.previousItem, universal: !0 }, { description: o().a690c4d0, keys: "Space", universal: !0 }, { description: o().e893811a, keys: d.refresh, universal: !1 }, { description: o().ha8209bc, keys: d.goHome, universal: !1 }, { description: o().fcf3e54c, keys: d.goExplore, universal: !0 }, { description: o().eb75875e, keys: d.goNotifications, universal: !1 }, { description: o().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: o().fa98627a, keys: d.goProfile, universal: !1 }, { description: o().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: o().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: o().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: o().b0041756, keys: d.goLists, universal: !1 }, { description: o().d4986f86, keys: d.goMessages, universal: !1 }, { description: o().h5860a68, keys: d.goGrok, universal: !1 }, { description: o().bb081ea2, keys: d.goSettings, universal: !0 }, { description: o().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: o().eee2ed92, keys: d.goToUser, universal: !0 }, { description: o().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: o().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: o().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: o().e736990a, keys: d.newMessage, universal: !1 },
                    { description: o().a9ae1e78, keys: d.search, universal: !0 },
                    { description: o().fe731016, keys: s.Z.shortcuts.like, universal: !1 },
                    { description: o().d17df548, keys: s.Z.shortcuts.reply, universal: !1 },
                    { description: o().g062295e, keys: s.Z.shortcuts.retweet, universal: !1 },
                    { description: o().h01621a4, keys: s.Z.shortcuts.share, universal: !0 },
                    { description: o().gb303814, keys: d.bookmark, universal: !1 },
                    { description: o().c03b1126, keys: d.mute, universal: !1 },
                    { description: o().ebd2abb2, keys: d.block, universal: !1 },
                    { description: o().hc6c5510, keys: "Enter", universal: !0 },
                    { description: o().eebdef38, keys: s.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: o().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: o().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: o().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: o().b881560e, keys: d.video.mute, universal: !0 },
                    { description: o().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: o().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: o().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                m = (0, a.Z)((e) => {
                    const t = l(e),
                        i = p(),
                        r = h(),
                        s = {};
                    return (
                        [...i, ...r, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      s[t] = e;
                                  })
                                : (s[t] = e);
                        }),
                        JSON.stringify(s)
                    );
                }),
                _ = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": m(e) } };
                };
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => q, O9: () => X, ZP: () => Q, vK: () => Y });
            var r = i(688715),
                s = i(674132),
                n = i.n(s),
                o = i(653843),
                a = i(122123),
                c = i(417144),
                d = i(884495),
                l = i(716233),
                u = i(540387);
            const p = n().b8098028,
                h = n().b36f4170,
                m = n().hab3781e,
                _ = n().f6c4fb02,
                f = n().g0af3dd2,
                g = n().b8c8b0be,
                v = n().ica6d718,
                b = n().b28d44f7({ limit: 15 }),
                y = n().i1db7d13,
                w = n().baac0ed7,
                S = y({ limit: 512 }),
                E = n().a22385bb,
                k = n().be0440bf,
                I = E({ limit: 140 }),
                L = n().feeba512,
                A = n().db123c02,
                D = n().db6001e7({ limit: 5 }),
                T = n().eb96d952,
                O = n().i859a9d4,
                M = n().b3880588,
                U = n().ca058b68,
                P = n().id24379c,
                R = n().h4d7cbcc,
                Z = (0, r.ju)("https://support.x.com/articles/20156423"),
                x = (0, r.ju)("https://help.x.com/using-twitter/twitter-videos"),
                N = (e) => ({ text: e }),
                C = (e) => ({ text: e, action: { label: O, link: Z } }),
                z = (e) => ({ text: e, action: { label: O, link: x } }),
                F = { [o.Y7.GIF_IS_TOO_LARGE]: N(b), [o.Y7.CANNOT_BE_PROCESSED]: N(p), [o.Y7.FILE_IS_NOT_AN_IMAGE]: N(m) },
                j = { [c.d.ZERO_FILE_LENGTH]: N(h), [c.d.TIMEOUT]: N(M) },
                $ = { ...j, [c.d.FILE_TOO_LARGE]: N(D), [c.d.UNSUPPORTED_MEDIA]: C(A), [c.d.INVALID_MEDIA]: C(L) },
                V = { ...j, [c.d.FILE_TOO_LARGE]: N(b), [c.d.UNSUPPORTED_MEDIA]: C(f), [c.d.INVALID_MEDIA]: C(_) },
                B = { ...j, [c.d.FILE_TOO_LARGE]: N(S), [c.d.UNSUPPORTED_MEDIA]: z(v), [c.d.INVALID_MEDIA]: z(g) },
                G = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                H = 1048576,
                K = 1073741824,
                X = (e) => Object.values(G).includes(e.type),
                W = (e) => {
                    const { code: t, limit: i, type: r } = e;
                    if (t)
                        switch (r) {
                            case G.MAXSIZE:
                                return t === l.BW.GIF_IS_TOO_LARGE ? N(b) : t === l.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? N(i >= K ? w({ limit: Math.round(i / K) }) : y({ limit: Math.round(i / H) })) : N(S);
                            case G.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? N(k({ limit: Math.round(i / 60) })) : { text: E({ limit: Math.round(i) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : N(I);
                            case G.RESIZE:
                                return F[t];
                            case G.UPLOAD:
                                if (e.isImage) return $[t];
                                if (e.isGif) return V[t];
                                if (e.isVideo) return B[t];
                                break;
                            case G.METADATA:
                                return N(R);
                        }
                },
                q = (e) => {
                    if (X(e)) return e;
                };
            function Q(e, t = P) {
                const i = q(e);
                if (i) {
                    const r = e.message ? `${t} ${e.message}` : t;
                    return W(i) || N(r);
                }
            }
            function Y(e, t = U) {
                return e.type === a.gK.type && e.code === a.gK.NO_DIMENSIONS ? N(T) : e.type === u.hb.type && e.code === u.hb.NO_DIMENSIONS ? z(g) : N(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => f, Uk: () => u, Xj: () => p, ZP: () => E });
            var r = i(468811),
                s = i.n(r),
                n = i(595088),
                o = i(161821),
                a = i(184605),
                c = i(716233),
                d = i(774717);
            const l = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                u = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                p = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                h = (e) => (e ? m(e) : void 0),
                m = (e) =>
                    (0, n.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${_(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                _ = (e) =>
                    (0, o.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                f = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                g = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                v = { [f.SruUpload]: g.SruUpload, [f.UploadSubmitUntilSruFinish]: g.UploadSubmitUntilSruFinish },
                b = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                y = (e, t) => ((0, a.Z)(e) && (0, a.Z)(t) ? Math.round(t - e) : void 0),
                w = () => (window.performance ? window.performance.now() : Date.now()),
                S = (e, t) => (e === c.xz.DMGif || e === c.xz.TweetGif ? b.All : (e !== c.xz.DMVideo && e !== c.xz.TweetVideo && e !== c.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? b.Short : t < 20 ? b.Medium : t < 45 ? b.Long : t < 90 ? b.XLong : t < 140 ? b.L90to140s : t < 300 ? b.L140to300s : t < 600 ? b.L300to600s : t < 1200 ? b.L600to1200s : t < 1800 ? b.L1200to1800s : t < 2700 ? b.L1800to2700s : t < 3600 ? b.L2700to3600s : t < 4500 ? b.L3600to4500s : t < 5400 ? b.L4500to5400s : t < 6300 ? b.L5400to6300s : t < 7200 ? b.L6300to7200s : t < 10800 ? b.L7200to10800s : t < 14400 ? b.L10800to14400s : b.LGT14400s);
            class E {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = s().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: r } = e;
                            return `${t ? l.Remote : l.LocalFile}:${i}:${S(i, r)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = y(this._startTimes[e], w());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const r = this._getKey(e, t);
                            this._record(r, i, e === f.Full ? this._metadata : e === f.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
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
                    let e = y(this._startTimes[f.Full], w());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[f.Full] && (e -= this._pausedDuration[f.Full]);
                        const t = this._getKey(f.Full, "submit");
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
                        const t = y(this._pauseTimes[e], w());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && v[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const r = { duration_ms: t, impression_id: this._impressionId, metadata: h(i) };
                    d.IM(e, r, "media_upload");
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
            i.d(t, { BW: () => f, SB: () => S, TO: () => k, Tz: () => v, U$: () => w, ff: () => g, vC: () => y, vn: () => E, xz: () => b, y$: () => m });
            var r = i(182056),
                s = i(323265),
                n = i(540387);
            const o = 1024,
                a = 1024 * o,
                c = 1,
                d = 4096,
                l = 2048,
                u = 400,
                p = 1500,
                h = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                m = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                _ = 600,
                f = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                g = { VIDEO_IS_TOO_LONG: 1 },
                v = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                b = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                y = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                w = (e) => {
                    const { height: t, left: i, width: r } = e,
                        s = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + r / 2)},${s},1,1`;
                };
            function S(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function E(e, t, i, f, g) {
                const v = f?.location,
                    b = S({ featureSwitches: e, userClaims: t });
                let w, E;
                if (i.isSubtitles) w = 0;
                else if (i.isGif)
                    switch (v) {
                        case y.Avatar:
                            w = e.getNumberValue("media_async_upload_max_avatar_gif_size", h.Avatar_Gif) * a;
                            break;
                        case y.Dm:
                        case y.Tweet:
                        default:
                            w = e.getNumberValue("media_async_upload_max_gif_size", h.Gif) * a;
                    }
                else {
                    if (!(i instanceof n.ZP))
                        return (function (e, t, i) {
                            let n;
                            switch (t) {
                                case y.Avatar:
                                    n = u;
                                    break;
                                case y.CommunityBanner:
                                case y.ListBanner:
                                case y.ProfileBanner:
                                    n = p;
                                    break;
                                default:
                                    n = s.ZP.isDesktopOS() ? d : l;
                            }
                            const c = e.getNumberValue("media_async_upload_max_image_size", h.Image) * a;
                            return r.Z.getConnectionInfo().then(
                                (r) => {
                                    let a = c;
                                    return "slow-2g" === r.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * o) : i || "2g" === r.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * o) : "3g" === r.effectiveType ? (a = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * o) : "4g" !== r.effectiveType || s.ZP.isDesktopOS() || t !== y.Tweet || (n = d), { maxDimension: n, maxFileSize: Math.min(c, a) };
                                },
                                () => ({ maxDimension: n, maxFileSize: c }),
                            );
                        })(e, v, g);
                    if (1 === b) {
                        if ("dm" === v) E = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", _);
                        else E = e.getNumberValue("media_async_upload_longer_video_max_video_duration", m.Duration[b]) * c;
                        w = e.getNumberValue("media_async_upload_longer_video_max_video_size", m.Size[b]) * a;
                    } else (E = e.getNumberValue("media_async_upload_max_video_duration", m.Duration[b]) * c), (w = e.getNumberValue("media_async_upload_max_video_size", m.Size[b]) * a);
                }
                return Promise.resolve({ maxFileSize: w, maxDuration: E });
            }
            function k(e) {
                return !(s.ZP.isIOS() && e.size > 3e8);
            }
        },
        135698: (e, t, i) => {
            i.d(t, { c: () => n });
            const r = 4194304;
            function s(e) {
                for (let t = 0; t < e.byteLength - 8; t++)
                    if (109 === e.getUint8(t + 4) && 111 === e.getUint8(t + 5) && 111 === e.getUint8(t + 6) && 118 === e.getUint8(t + 7)) {
                        if (e.getUint32(t) > 0) return !0;
                    }
                return !1;
            }
            async function n(e) {
                const t = e.slice(0, r),
                    i = await t.arrayBuffer();
                if (s(new DataView(i))) return !0;
                const n = Math.max(0, e.size - r),
                    o = e.slice(n),
                    a = await o.arrayBuffer();
                return s(new DataView(a));
            }
        },
        951790: (e, t, i) => {
            i.d(t, { Z: () => o });
            var r = i(323265);
            const s = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = n(e),
                            i = [t.android, t.ios],
                            r = i.find((e) => e.matches());
                        return r ? [r] : i;
                    },
                    getiOSAppStoreLink(e) {
                        const t = n(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = n(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && s.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        s.setLocation(e);
                    },
                },
                n = (e = "rwoiah") => ({ android: { platform: "android", matches: () => r.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => r.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                o = s;
        },
        147595: (e, t, i) => {
            i.d(t, { R: () => s });
            var r = i(337394);
            const s = (e) => {
                const t = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    i = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    s = e.find((e) => e.product?.rest_id && r.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return t || i || s;
            };
        },
        192464: (e, t, i) => {
            i.d(t, { Z: () => a });
            i(571372);
            var r = i(2138),
                s = i(666536),
                n = i(624479),
                o = i(163889);
            const a = new (class {
                constructor() {
                    (this.usersInApp = {}),
                        (this._throttledInitialFetch = (0, r.Z)(() => {
                            this.store.dispatch(n.ZP.fetchManyIfNeeded(Object.keys(this.usersInApp)));
                        }, 1500));
                }
                init(e) {
                    (this.store = e), (this.usersInApp = {});
                }
                registerUserInApp(e) {
                    Object.keys(this.usersInApp).length > 50 && ((this.usersInApp = {}), (0, o.ZP)(new Error("Registered users in app has exceeded 50"), { level: "warning" })), this.usersInApp[e] ? (this.usersInApp[e] = this.usersInApp[e] + 1) : ((this.usersInApp[e] = 1), (0, s.Z)(this._throttledInitialFetch(), 100));
                }
                deregisterUserInApp(e) {
                    this.usersInApp[e] && this.usersInApp[e] > 1 ? (this.usersInApp[e] = this.usersInApp[e] - 1) : delete this.usersInApp[e];
                }
            })();
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => r, ZP: () => o, h_: () => s });
            i(543673), i(240753), i(128399);
            const r = [".srt", "text/plain", ""],
                s = (e) => -1 !== r.indexOf(e.type),
                n = (e) =>
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
                                this.vtt = URL.createObjectURL(new Blob([n(e)], { type: "text/plain charset=UTF-8" }));
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
        540387: (e, t, i) => {
            i.d(t, { Wv: () => s, ZP: () => o, hb: () => n, jn: () => r });
            i(571372), i(543673), i(240753), i(128399);
            const r = ["video/mp4", "video/quicktime"],
                s = (e) => -1 !== r.indexOf(e.type),
                n = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
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
                        new Promise((i, r) => {
                            const s = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = n.type), r(i);
                                },
                                o = document.createElement("video");
                            (o.onloadedmetadata = () => {
                                t || (o.videoWidth && o.videoHeight) ? i(o) : s("Video lacks height or width", n.NO_DIMENSIONS);
                            }),
                                (o.onerror = () => {
                                    s("Error loading image", n.LOAD_FAILED);
                                }),
                                (o.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: r } = e;
                        return (this.width = r), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === r)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-e4e3d8bb.4b32fdaa.js.map
