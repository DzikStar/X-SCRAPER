"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.AppModules-e4e3d8bb"],
    {
        392884: (e, t, i) => {
            i.r(t), i.d(t, { AppInstallOnLandingPrompt: () => we, AudioModule: () => ke, BottomCookieBannerPicker: () => Le, ColumnFromPath: () => Ae, ColumnTimelineAdapter: () => De, DtabBar: () => Te, GlobalKeyboardShortcuts: () => Me, IntercomStarter: () => Ue, JetfuelDevBar: () => xe, LeaveSite: () => Ne, LivePipeline: () => Ce, LoggedOutNotifications: () => ze, ModalSheet: () => Fe, Toast: () => Be, appReloader: () => Ee, badgeTimers: () => Se, bindKeyboardShortcuts: () => Ie, getScreenReaderShortcutsDataAttribute: () => Oe, ie11Reflower: () => Pe, initGeoLocation: () => Re, inputDetect: () => Ze, multiAccountListFetcher: () => je, redirectEmailUser: () => $e, scribeExternalReferer: () => Ve, userPresence: () => Ge });
            var s = {};
            i.r(s), i.d(s, { KEYBOARD: () => O, MOUSE: () => M, _private: () => H, detectedType: () => F, detectedTypes: () => z, initialize: () => C, register: () => j, registerEvery: () => V, registerSome: () => $, reset: () => G, unregister: () => B });
            var r = i(567447),
                n = i(32399),
                a = i(105019),
                o = i(223543),
                c = i(80309),
                d = i(642028),
                l = i(634518),
                u = i(316391),
                p = i(551415),
                h = i(331879),
                _ = i(337686),
                m = i(58255),
                f = i(726499),
                g = i(516951),
                v = i(615656),
                b = i(806960),
                y = i(454319),
                w = i(390387),
                E = i(71620),
                k = i(801501);
            const S = (e, t = 1e3) => {
                    window.requestIdleCallback ? window.requestIdleCallback(() => e.fire()) : setTimeout(() => e.fire(), t);
                },
                I = (e) => {
                    if (!w.Qb(e.getState())) return;
                    const t = e.dispatch((0, E.zr)("BADGE_TIMERS")({ showToast: !1, [v.ZP.AccessDeniedByBouncer]: { customAction: g.Z } })),
                        i = (i) => e.dispatch(i).catch(t),
                        s = new k.Z(3e4).interval(() => {
                            "background" !== f.Z.currentState && (i((0, b.kJ)()), (0, y.Xy)(e.getState()).forEach(i));
                        });
                    s.start(), S(s);
                    f.Z.addEventListener("change", (e) => {
                        "active" === e && S(s);
                    });
                };
            var L = i(427495),
                A = i.n(L),
                D = (i(136728), i(411916)),
                T = i.n(D);
            const O = "keyboard",
                M = "mouse";
            let P = [];
            const R = { [O]: !1, [M]: !1 };
            class Z {
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
            class U {
                constructor(e) {
                    (this._handleKeyDown = (e) => {
                        const { altKey: t, ctrlKey: i, metaKey: s, target: r } = e;
                        var n;
                        (!(t || i || s) && ((n = r) instanceof HTMLInputElement || n instanceof HTMLTextAreaElement)) || (this.detach(), this.detected());
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
                R[e] = !0;
                const t = P.filter(({ matches: e }) => e()),
                    i = P.filter(({ matches: e }) => !e());
                (P = i), t.forEach(({ callback: e }) => e());
            }
            let N;
            const C = () => {
                    (N = [new U(() => x(O)), new Z(() => x(M))]), N.forEach((e) => e.attach());
                },
                z = () => Object.keys(R).filter((e) => R[e]),
                F = (e) => R[e],
                j = (e, t) => {
                    const i = () => R[t];
                    i() ? T()(e) : P.push({ matches: i, callback: e });
                },
                $ = (e, t) => {
                    const i = () => t.some((e) => R[e]);
                    i() ? T()(e) : P.push({ matches: i, callback: e });
                },
                V = (e, t) => {
                    const i = () => t.every((e) => R[e]);
                    i() ? T()(e) : P.push({ matches: i, callback: e });
                },
                B = (e) => {
                    const t = P.indexOf(e);
                    t > -1 && P.splice(t, 1);
                },
                G = () => {
                    (P = []),
                        Object.keys(R).forEach((e) => {
                            R[e] = !1;
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
                se = i(446914),
                re = i(88656);
            let ne;
            const ae = {
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
                                            s = (e) => `${e}/live_pipeline/events?topic=${t}`,
                                            r = s(window.location.hostname.endsWith("twitter.com") ? "https://api.twitter.com" : "https://api.x.com"),
                                            n = i.getReplacementHost(new URL(r));
                                        return n ? s(`https://${n}`) : r;
                                    })(e);
                                    return Promise.resolve(new window.EventSource(t, { withCredentials: !0 }));
                                },
                                updateSubscriptions: (e) =>
                                    t
                                        .withEndpoint(se.Z)
                                        .updateSubscriptions(e)
                                        .catch((e) => {
                                            if (e)
                                                if (e instanceof re.Z && (0, v.VZ)(e, v.ZP.SessionNotFound)) ne && ne.restartEventSource();
                                                else if (!(e instanceof re.Z) && e instanceof Error) return Promise.reject(e);
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
                oe = (e) => {
                    const t = (0, E.zr)("MULTI_ACCOUNT_LIST_UPDATER"),
                        i = e.dispatch(t({ showToast: !1, [v.ZP.AccessDeniedByBouncer]: { customAction: g.Z } })),
                        s = (t) => e.dispatch(t).catch(i);
                    (window.requestIdleCallback || window.requestAnimationFrame)(() => {
                        s((0, y.s2)()).then(() => {
                            (0, y.Xy)(e.getState()).forEach(s);
                        });
                    });
                };
            var ce = i(192464),
                de = i(840590);
            const le = ["/login/error", "/i/flow/lite_login", "/i/flow/login", "/i/flow/signup"],
                ue = (e, t) => {
                    const i = !w.Qb(t),
                        s = w.$q(t),
                        { pathname: r } = de.default.location;
                    -1 === le.indexOf(r) && i && s && de.default.replace("/i/flow/lite_login");
                };
            var pe = i(401388),
                he = i(945656),
                _e = i(31326),
                me = i(840647),
                fe = i(833773),
                ge = i(396987),
                ve = i(782826);
            const be = { page: "external", action: "referred" },
                ye = (e, t, i, s) => {
                    const r = (e) => s.dispatch((0, E.zr)(e)({})),
                        n = fe.zI({ featureSwitches: t, query: de.default && de.default.location.query });
                    if ((0, pe.Z)(n)) return Promise.resolve();
                    if (n.referer && !ve.ZP.isExternalUrl(n.referer) && !ve.ZP.isInternalRedirect(n.referer)) return Promise.resolve();
                    n.referer || (n.referer = ""), n.referral_details_str || (n.referral_details_str = ""), n.referral_type || (n.referral_type = 0);
                    const a = (0, ge.hZ)(t);
                    a && (n.external_referer_cookie_value = a);
                    const o = fe.ti(n),
                        c = { ...be, client: (0, me.Z)().clientName };
                    a && o && (c.action = "set_access_referer_cookie");
                    const d = i.createEventObject(c, "client_event", n),
                        l = i.createPayload([d]);
                    let u;
                    u = n
                        ? e
                              .withEndpoint(_e.Z)
                              .referer({ landing_url: n.url, referral_details: n.referral_details_str || void 0, referrer_url: n.referer || void 0 })
                              .catch(() => r("OCF_EXTERNAL_REFERER"))
                        : Promise.resolve();
                    const p = e
                        .withEndpoint(he.Z)
                        .externalReferer(l)
                        .then((e) => {
                            e && (0, ge.QF)(t, e[0]);
                        })
                        .catch(() => r("SCRIBE_EXTERNAL_REFERER"));
                    return Promise.all([p, u]);
                },
                we = n.Z,
                Ee = _,
                ke = m.w,
                Se = I,
                Ie = function (e, t) {
                    const i = Object.keys(e);
                    let s,
                        r = !1;
                    const n = () => {
                        r ||
                            ((s = A()(t)),
                            i.forEach((t) =>
                                s.bind(t, (i) => {
                                    var s;
                                    (0, K.z)(window.location.pathname) ||
                                        ((s = e[t]),
                                        (e) => {
                                            e.preventDefault(), e.stopPropagation(), s(e);
                                        })(i);
                                }),
                            ));
                    };
                    return (
                        $(n, [O, M]),
                        () => {
                            (r = !0), B(n), s && s.unbind(i);
                        }
                    );
                },
                Le = a.Z,
                Ae = null,
                De = null,
                Te = o.Z,
                Oe = te.wR,
                Me = c.ZP,
                Pe = ee,
                Re = Y,
                Ze = s,
                Ue = d.Z,
                xe = l.Z,
                Ne = u.Z,
                Ce = ae,
                ze = p.Z,
                Fe = r.Z,
                je = oe,
                $e = ue,
                Ve = ye,
                Be = h.Z,
                Ge = ce.Z;
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => r, Q: () => n });
            const s = (e, t, i) => {
                    const s = new Date();
                    let r = s.getFullYear() - e;
                    const n = s.getMonth() + 1 - t;
                    if (n < 0) r -= 1;
                    else if (0 === n) {
                        s.getDate() - i < 0 && (r -= 1);
                    }
                    return r;
                },
                r = (e, t, i, r = !1) => (e && t && i ? s(e, t, i) < 18 : r),
                n = () => new Date().getFullYear() - 120;
        },
        396987: (e, t, i) => {
            i.d(t, { QF: () => o, Qo: () => c, hZ: () => a });
            var s = i(918621);
            const r = "external_referer",
                n = 604800;
            function a(e) {
                return (0, s.ej)({ cookieName: r, featureSwitches: e });
            }
            function o(e, t) {
                const i = (t && t.encryptedReferralDetails) || "",
                    a = (t && t.encryptedReferer) || "",
                    o = t && void 0 !== t.referralType ? `${t.referralType}` : "";
                if (!i && !a && !o) return;
                const c = `${encodeURIComponent(a)}|${o}|${encodeURIComponent(i)}`;
                (0, s.d8)(r, c, { cookieOptions: { maxAge: n, encode: (e) => e }, featureSwitches: e });
            }
            const c = (e) => {
                const t = a(e);
                if (t && t.split("|").length > 1) {
                    const e = t.split("|");
                    return { encryptedReferer: e[0], referralType: e[1], encryptedReferralDetails: e[2] };
                }
            };
        },
        833773: (e, t, i) => {
            i.d(t, { zI: () => o, ti: () => c, bi: () => d });
            i(396987), i(875640);
            var s = i(401388),
                r = i(2430),
                n = i(782826);
            const a = Object.freeze({ Web: 0, Email: 1, Partner: 2, Market: 3, Access: 4 });
            function o(e) {
                let t = {};
                const { emptyIfServerRendered: i = !0 } = e;
                const { httpReferer: o = document.referrer ?? "", query: c = window.location.search ?? {}, requestUrl: d = window.location.href } = e,
                    {
                        cn: l,
                        iid: u,
                        nid: p,
                        original_referer: h,
                        partner: _,
                        ref_src: m,
                        ref_url: f,
                        refsrc: g,
                        s: v,
                        uid: b,
                        url: y,
                    } = (function (e) {
                        const t = {};
                        return (
                            ["cn", "iid", "original_referer", "nid", "refsrc", "ref_src", "ref_url", "s", "partner", "uid", "url"].forEach((i) => {
                                t[i] = (0, r.BX)(e[i]);
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
                                      const [e, s] = i;
                                      t[e] = s;
                                  }
                              }
                              return t;
                          })(e.featureSwitches)),
                    m)
                )
                    t = { referral_type: a.Web, referral_details_str: m };
                else if ("email" === g || u) {
                    let e;
                    try {
                        e = window.atob(l);
                    } catch (t) {
                        e = "invalid";
                    }
                    const i = ["twcamp^email", p && `twsrc^${p}`, b && `twcon^${b}`, u && `twterm^${u}`, `twgr^${e}`].filter(Boolean).join("|");
                    t = { referral_type: a.Email, referral_details_str: i };
                } else if (v) {
                    const e = w[v];
                    e && (t = { referral_type: a.Web, referral_details_str: e });
                } else _ ? (t = { referral_type: a.Partner, referral_details_str: `twsrc^${_}` }) : o && n.ZP.isExternalUrl(o) && (t = { referral_type: a.Web });
                let E = f ?? h ?? y ?? o;
                return E.length > 256 && (E = E.substring(0, 256)), E && (t = { ...t, referer: E }), (0, s.Z)(t) || (t = { ...t, url: d }), t;
            }
            function c(e) {
                return e.referral_type === a.Access;
            }
            function d(e) {
                return e.referral_type === a.Web;
            }
        },
        355335: (e, t, i) => {
            i.d(t, { Z: () => c, k: () => o });
            i(543673), i(240753), i(128399), i(136728);
            var s = i(202784),
                r = i(565058),
                n = i(400752),
                a = i(107267);
            const o = (0, r.cn)(!1),
                c = () => {
                    const e = (0, a.useHistory)(),
                        t = (0, a.useLocation)(),
                        [i, r] = (0, n.KO)(o);
                    s.useEffect(() => {
                        const e = new URLSearchParams(t.search).get("jfDev"),
                            i = sessionStorage.getItem("jfDev");
                        let s = !1;
                        e ? (("1" !== e && "true" !== e) || (s = !0), ("0" !== e && "false" !== e) || (s = !1)) : (s = "true" === i), s ? (r(!0), sessionStorage.setItem("jfDev", "true")) : (r(!1), sessionStorage.removeItem("jfDev"));
                    }, [t.search, r]);
                    const c = s.useCallback(
                        (i) => {
                            const s = new URLSearchParams(t.search);
                            i ? (s.set("jfDev", "1"), sessionStorage.setItem("jfDev", "true")) : (s.delete("jfDev"), sessionStorage.removeItem("jfDev"));
                            const n = s.toString();
                            e.push({ pathname: t.pathname, search: n }), r(i);
                        },
                        [e, t.pathname, t.search, r],
                    );
                    return {
                        isDev: i,
                        enableDev: s.useCallback(() => {
                            c(!0);
                        }, [c]),
                        disableDev: s.useCallback(() => {
                            c(!1);
                        }, [c]),
                    };
                };
        },
        163390: (e, t, i) => {
            i.d(t, { OX: () => p, Od: () => l, PN: () => h, uq: () => d, wR: () => m });
            var s = i(251067),
                r = i(522171),
                n = i(111677),
                a = i.n(n),
                o = i(912021),
                c = i(323265);
            const d = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                l = (0, o.Z)((e) => {
                    const t = e ? [{ description: a().b7fa0cfe, keys: d.goTopArticles, universal: !1 }] : [];
                    return [...((0, s.fH)(s.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: a().d5696fcc, keys: d.openKeyboardShortcuts, universal: !0 }, { description: a().a83d4280, keys: d.nextItem, universal: !0 }, { description: a().g0048656, keys: d.previousItem, universal: !0 }, { description: a().a690c4d0, keys: "Space", universal: !0 }, { description: a().e893811a, keys: d.refresh, universal: !1 }, { description: a().ha8209bc, keys: d.goHome, universal: !1 }, { description: a().fcf3e54c, keys: d.goExplore, universal: !1 }, { description: a().eb75875e, keys: d.goNotifications, universal: !1 }, { description: a().cdb53d7a, keys: d.goMentions, universal: !1 }, { description: a().fa98627a, keys: d.goProfile, universal: !1 }, { description: a().d4ebc798, keys: d.goToDrafts, universal: !1 }, { description: a().fd6a3f30, keys: d.goToScheduled, universal: !1 }, { description: a().d7b8ebaa, keys: d.goLikes, universal: !1 }, { description: a().b0041756, keys: d.goLists, universal: !1 }, { description: a().d4986f86, keys: d.goMessages, universal: !1 }, { description: a().h5860a68, keys: d.goGrok, universal: !1 }, { description: a().bb081ea2, keys: d.goSettings, universal: !1 }, { description: a().i3145aa0, keys: d.goBookmarks, universal: !1 }, ...t, { description: a().eee2ed92, keys: d.goToUser, universal: !1 }, { description: a().ee5ccf3e, keys: d.goDisplay, universal: !1 }];
                }),
                u = c.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: a().ab3d53f8, keys: d.newTweet, universal: !1 },
                    { description: a().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: a().e736990a, keys: d.newMessage, universal: !1 },
                    { description: a().a9ae1e78, keys: d.search, universal: !1 },
                    { description: a().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: a().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: a().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: a().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: a().gb303814, keys: d.bookmark, universal: !1 },
                    { description: a().c03b1126, keys: d.mute, universal: !1 },
                    { description: a().ebd2abb2, keys: d.block, universal: !1 },
                    { description: a().hc6c5510, keys: "Enter", universal: !0 },
                    { description: a().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: a().b488758c, keys: d.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: a().c82314e0, keys: d.video.play1, universal: !0 },
                    { description: a().c82314e0, keys: d.video.play2, universal: !0 },
                    { description: a().b881560e, keys: d.video.mute, universal: !0 },
                    { description: a().a94f7302, keys: d.audio.dock, universal: !1 },
                    { description: a().a7e604c6, keys: d.audio.play, universal: !1 },
                    { description: a().f978c4fc, keys: d.audio.mute, universal: !1 },
                ],
                _ = (0, o.Z)((e) => {
                    const t = l(e),
                        i = p(),
                        s = h(),
                        r = {};
                    return (
                        [...i, ...s, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                m = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": _(e) } };
                };
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => q, O9: () => X, ZP: () => Q, vK: () => Y });
            var s = i(688715),
                r = i(111677),
                n = i.n(r),
                a = i(653843),
                o = i(122123),
                c = i(417144),
                d = i(884495),
                l = i(716233),
                u = i(540387);
            const p = n().b8098028,
                h = n().b36f4170,
                _ = n().hab3781e,
                m = n().f6c4fb02,
                f = n().g0af3dd2,
                g = n().b8c8b0be,
                v = n().ica6d718,
                b = n().b28d44f7({ limit: 15 }),
                y = n().i1db7d13,
                w = n().baac0ed7,
                E = y({ limit: 512 }),
                k = n().a22385bb,
                S = n().be0440bf,
                I = k({ limit: 140 }),
                L = n().feeba512,
                A = n().db123c02,
                D = n().db6001e7({ limit: 5 }),
                T = n().eb96d952,
                O = n().i859a9d4,
                M = n().b3880588,
                P = n().ca058b68,
                R = n().id24379c,
                Z = n().h4d7cbcc,
                U = (0, s.ju)("https://support.x.com/articles/20156423"),
                x = (0, s.ju)("https://help.x.com/using-twitter/twitter-videos"),
                N = (e) => ({ text: e }),
                C = (e) => ({ text: e, action: { label: O, link: U } }),
                z = (e) => ({ text: e, action: { label: O, link: x } }),
                F = { [a.Y7.GIF_IS_TOO_LARGE]: N(b), [a.Y7.CANNOT_BE_PROCESSED]: N(p), [a.Y7.FILE_IS_NOT_AN_IMAGE]: N(_) },
                j = { [c.d.ZERO_FILE_LENGTH]: N(h), [c.d.TIMEOUT]: N(M) },
                $ = { ...j, [c.d.FILE_TOO_LARGE]: N(D), [c.d.UNSUPPORTED_MEDIA]: C(A), [c.d.INVALID_MEDIA]: C(L) },
                V = { ...j, [c.d.FILE_TOO_LARGE]: N(b), [c.d.UNSUPPORTED_MEDIA]: C(f), [c.d.INVALID_MEDIA]: C(m) },
                B = { ...j, [c.d.FILE_TOO_LARGE]: N(E), [c.d.UNSUPPORTED_MEDIA]: z(v), [c.d.INVALID_MEDIA]: z(g) },
                G = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                H = 1048576,
                K = 1073741824,
                X = (e) => Object.values(G).includes(e.type),
                W = (e) => {
                    const { code: t, limit: i, type: s } = e;
                    if (t)
                        switch (s) {
                            case G.MAXSIZE:
                                return t === l.BW.GIF_IS_TOO_LARGE ? N(b) : t === l.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? N(i >= K ? w({ limit: Math.round(i / K) }) : y({ limit: Math.round(i / H) })) : N(E);
                            case G.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? N(S({ limit: Math.round(i / 60) })) : { text: k({ limit: Math.round(i) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : N(I);
                            case G.RESIZE:
                                return F[t];
                            case G.UPLOAD:
                                if (e.isImage) return $[t];
                                if (e.isGif) return V[t];
                                if (e.isVideo) return B[t];
                                break;
                            case G.METADATA:
                                return N(Z);
                        }
                },
                q = (e) => {
                    if (X(e)) return e;
                };
            function Q(e, t = R) {
                const i = q(e);
                if (i) {
                    const s = e.message ? `${t} ${e.message}` : t;
                    return W(i) || N(s);
                }
            }
            function Y(e, t = P) {
                return e.type === o.gK.type && e.code === o.gK.NO_DIMENSIONS ? N(T) : e.type === u.hb.type && e.code === u.hb.NO_DIMENSIONS ? z(g) : N(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => f, Uk: () => u, Xj: () => p, ZP: () => k });
            var s = i(468811),
                r = i.n(s),
                n = i(595088),
                a = i(161821),
                o = i(184605),
                c = i(716233),
                d = i(774717);
            const l = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                u = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                p = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                h = (e) => (e ? _(e) : void 0),
                _ = (e) =>
                    (0, n.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${m(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                m = (e) =>
                    (0, a.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                f = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                g = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                v = { [f.SruUpload]: g.SruUpload, [f.UploadSubmitUntilSruFinish]: g.UploadSubmitUntilSruFinish },
                b = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                y = (e, t) => ((0, o.Z)(e) && (0, o.Z)(t) ? Math.round(t - e) : void 0),
                w = () => (window.performance ? window.performance.now() : Date.now()),
                E = (e, t) => (e === c.xz.DMGif || e === c.xz.TweetGif ? b.All : (e !== c.xz.DMVideo && e !== c.xz.TweetVideo && e !== c.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? b.Short : t < 20 ? b.Medium : t < 45 ? b.Long : t < 90 ? b.XLong : t < 140 ? b.L90to140s : t < 300 ? b.L140to300s : t < 600 ? b.L300to600s : t < 1200 ? b.L600to1200s : t < 1800 ? b.L1200to1800s : t < 2700 ? b.L1800to2700s : t < 3600 ? b.L2700to3600s : t < 4500 ? b.L3600to4500s : t < 5400 ? b.L4500to5400s : t < 6300 ? b.L5400to6300s : t < 7200 ? b.L6300to7200s : t < 10800 ? b.L7200to10800s : t < 14400 ? b.L10800to14400s : b.LGT14400s);
            class k {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = r().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: s } = e;
                            return `${t ? l.Remote : l.LocalFile}:${i}:${E(i, s)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = y(this._startTimes[e], w());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const s = this._getKey(e, t);
                            this._record(s, i, e === f.Full ? this._metadata : e === f.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
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
                    const s = { duration_ms: t, impression_id: this._impressionId, metadata: h(i) };
                    d.IM(e, s, "media_upload");
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
            i.d(t, { BW: () => f, SB: () => E, TO: () => S, Tz: () => v, U$: () => w, ff: () => g, vC: () => y, vn: () => k, xz: () => b, y$: () => _ });
            var s = i(182056),
                r = i(323265),
                n = i(540387);
            const a = 1024,
                o = 1024 * a,
                c = 1,
                d = 4096,
                l = 2048,
                u = 400,
                p = 1500,
                h = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                _ = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                m = 600,
                f = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                g = { VIDEO_IS_TOO_LONG: 1 },
                v = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                b = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                y = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                w = (e) => {
                    const { height: t, left: i, width: s } = e,
                        r = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + s / 2)},${r},1,1`;
                };
            function E(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function k(e, t, i, f, g) {
                const v = f?.location,
                    b = E({ featureSwitches: e, userClaims: t });
                let w, k;
                if (i.isSubtitles) w = 0;
                else if (i.isGif)
                    switch (v) {
                        case y.Avatar:
                            w = e.getNumberValue("media_async_upload_max_avatar_gif_size", h.Avatar_Gif) * o;
                            break;
                        case y.Dm:
                        case y.Tweet:
                        default:
                            w = e.getNumberValue("media_async_upload_max_gif_size", h.Gif) * o;
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
                                    n = r.ZP.isDesktopOS() ? d : l;
                            }
                            const c = e.getNumberValue("media_async_upload_max_image_size", h.Image) * o;
                            return s.Z.getConnectionInfo().then(
                                (s) => {
                                    let o = c;
                                    return "slow-2g" === s.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * a) : i || "2g" === s.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * a) : "3g" === s.effectiveType ? (o = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * a) : "4g" !== s.effectiveType || r.ZP.isDesktopOS() || t !== y.Tweet || (n = d), { maxDimension: n, maxFileSize: Math.min(c, o) };
                                },
                                () => ({ maxDimension: n, maxFileSize: c }),
                            );
                        })(e, v, g);
                    if (1 === b) {
                        if ("dm" === v) k = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", m);
                        else k = e.getNumberValue("media_async_upload_longer_video_max_video_duration", _.Duration[b]) * c;
                        w = e.getNumberValue("media_async_upload_longer_video_max_video_size", _.Size[b]) * o;
                    } else (k = e.getNumberValue("media_async_upload_max_video_duration", _.Duration[b]) * c), (w = e.getNumberValue("media_async_upload_max_video_size", _.Size[b]) * o);
                }
                return Promise.resolve({ maxFileSize: w, maxDuration: k });
            }
            function S(e) {
                return !(r.ZP.isIOS() && e.size > 3e8);
            }
        },
        147595: (e, t, i) => {
            i.d(t, { R: () => r });
            var s = i(337394);
            const r = (e) => {
                const t = e.find((e) => e.product?.rest_id && s.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Stripe" === e.payment_source),
                    i = e.find((e) => e.product?.rest_id && s.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && "Twitter" !== e.payment_source && "Ads" !== e.payment_source),
                    r = e.find((e) => e.product?.rest_id && s.v5.premium[e.product?.rest_id] && "Inactive" !== e.state && ("Twitter" === e.payment_source || "Ads" === e.payment_source));
                return t || i || r;
            };
        },
        192464: (e, t, i) => {
            i.d(t, { Z: () => o });
            i(571372);
            var s = i(2138),
                r = i(666536),
                n = i(624479),
                a = i(163889);
            const o = new (class {
                constructor() {
                    (this.usersInApp = {}),
                        (this._throttledInitialFetch = (0, s.Z)(() => {
                            this.store.dispatch(n.ZP.fetchManyIfNeeded(Object.keys(this.usersInApp)));
                        }, 1500));
                }
                init(e) {
                    (this.store = e), (this.usersInApp = {});
                }
                registerUserInApp(e) {
                    Object.keys(this.usersInApp).length > 50 && ((this.usersInApp = {}), (0, a.ZP)(new Error("Registered users in app has exceeded 50"), { level: "warning" })), this.usersInApp[e] ? (this.usersInApp[e] = this.usersInApp[e] + 1) : ((this.usersInApp[e] = 1), (0, r.Z)(this._throttledInitialFetch(), 100));
                }
                deregisterUserInApp(e) {
                    this.usersInApp[e] && this.usersInApp[e] > 1 ? (this.usersInApp[e] = this.usersInApp[e] - 1) : delete this.usersInApp[e];
                }
            })();
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => s, ZP: () => a, h_: () => r });
            i(543673), i(240753), i(128399);
            const s = [".srt", "text/plain", ""],
                r = (e) => -1 !== s.indexOf(e.type),
                n = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class a {
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
            i.d(t, { Wv: () => r, ZP: () => a, hb: () => n, jn: () => s });
            i(571372), i(543673), i(240753), i(128399);
            const s = ["video/mp4", "video/quicktime"],
                r = (e) => -1 !== s.indexOf(e.type),
                n = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class a {
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
                        new Promise((i, s) => {
                            const r = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = n.type), s(i);
                                },
                                a = document.createElement("video");
                            (a.onloadedmetadata = () => {
                                t || (a.videoWidth && a.videoHeight) ? i(a) : r("Video lacks height or width", n.NO_DIMENSIONS);
                            }),
                                (a.onerror = () => {
                                    r("Error loading image", n.LOAD_FAILED);
                                }),
                                (a.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: s } = e;
                        return (this.width = s), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === s)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.AppModules-e4e3d8bb.3a9058ba.js.map
