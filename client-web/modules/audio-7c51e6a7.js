"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["modules.audio-7c51e6a7"],
    {
        30242: (e, t, n) => {
            n.d(t, { YS: () => _, ZY: () => A, mc: () => k, qE: () => h, w9: () => v, xD: () => E });
            n(872722);
            var o = n(202784),
                s = n(565058),
                r = n(400752),
                i = n(692822),
                a = n(610214),
                c = n(142202);
            const u = 0.1,
                l = 250,
                d = 0.2,
                p = (0, s.cn)([]),
                f = (0, s.cn)([]),
                m = (0, s.cn)(0);
            function h(e) {
                return e.get(f);
            }
            const y = (0, s.cn)((e) => [...e(p), ...e(f)]),
                g = (0, s.cn)((e) => {
                    const t = e(p);
                    return 0 !== e(f).length || 0 !== t.length;
                }),
                b = (0, s.cn)(null, (e, t) => {
                    t(p, []), t(f, []), t(m, 0);
                });
            function k(e) {
                e.set(b);
            }
            function v() {
                const e = a.O5(),
                    t = (0, r.oR)();
                return (
                    o.useEffect(() => {
                        if (e !== a.HP.On) return;
                        const n = c.Z.subscribe(
                                t,
                                i.gK.ChatCaption,
                                (function (e) {
                                    return (t) => (
                                        (function (e, t) {
                                            t.filter(I).forEach((t) => {
                                                const n = t.body.body,
                                                    o = t.data.sender.twitter_id,
                                                    s = C(e, o);
                                                -1 === s
                                                    ? S(e, t)
                                                    : (function (e, t) {
                                                            const { longer: n, shorter: o } = e.length < t.length ? { longer: t, shorter: e } : { longer: e, shorter: t };
                                                            if (0 === n.length) return 1;
                                                            return (
                                                                (n.length -
                                                                    (function (e = "", t = "") {
                                                                        const n = Array(t.length + 1)
                                                                            .fill(null)
                                                                            .map(() => Array(e.length + 1).fill(null));
                                                                        for (let t = 0; t <= e.length; t += 1) n[0][t] = t;
                                                                        for (let e = 0; e <= t.length; e += 1) n[e][0] = e;
                                                                        for (let o = 1; o <= t.length; o += 1)
                                                                            for (let s = 1; s <= e.length; s += 1) {
                                                                                const r = e[s - 1] === t[o - 1] ? 0 : 1;
                                                                                n[o][s] = Math.min(n[o][s - 1] + 1, n[o - 1][s] + 1, n[o - 1][s - 1] + r);
                                                                            }
                                                                        return n[t.length][e.length];
                                                                    })(n, o)) /
                                                                parseFloat(n.length)
                                                            );
                                                        })(n, e.get(p)[s].text) > u
                                                      ? w(e, t, s)
                                                      : P(e, t, s);
                                            });
                                        })(e, t),
                                        { clearHeapForMessageType: !0 }
                                    );
                                })(t),
                            ),
                            o = c.Z.subscribe(
                                t,
                                i.gK.ServerAudioTranscription,
                                (function (e) {
                                    return (t) => (
                                        (function (e, t) {
                                            t.filter(I).forEach((t) => {
                                                const n = t.data.sender.twitter_id,
                                                    o = C(e, n);
                                                t.body.final
                                                    ? (function (e, t, n) {
                                                          const o = t.data.sender.twitter_id;
                                                          let s;
                                                          if (n > -1) {
                                                              const t = e.get(p)[n];
                                                              e.set(p, (e) => e.toSpliced(n, 1)), (s = t.sequenceId);
                                                          } else e.set(m, (e) => e + 1), (s = e.get(m));
                                                          const r = A(t, { final: !0, sequenceId: s });
                                                          e.set(f, (e) => [...e, r]), T(e, o, t.timestamp);
                                                      })(e, t, o)
                                                    : -1 === o
                                                      ? S(e, t)
                                                      : !(function (e, t, n) {
                                                              let o = !1;
                                                              const s = e.get(p)[n].text,
                                                                  r = t.body.body,
                                                                  i = t.body.final;
                                                              if (!i && r.length > 0 && s.length > 0) {
                                                                  o = r.length / s.length < d;
                                                              }
                                                              return o;
                                                          })(e, t, o)
                                                        ? w(e, t, o)
                                                        : P(e, t, o);
                                            });
                                        })(e, t),
                                        { clearHeapForMessageType: !0 }
                                    );
                                })(t),
                            );
                        return function () {
                            n(), o();
                        };
                    }, [e, t]),
                    (0, r.Dv)(y)
                );
            }
            function _() {
                return (0, r.Dv)(g);
            }
            function S(e, t) {
                const n = t.data.sender.twitter_id;
                e.set(m, (e) => e + 1);
                const o = A(t, { sequenceId: e.get(m) });
                return e.set(p, (e) => e.concat(o)), T(e, n, t.timestamp), o;
            }
            function w(e, t, n) {
                const o = e.get(p)[n];
                e.set(p, (e) => e.toSpliced(n, 1));
                const { sequenceId: s, timestamp: r } = o,
                    i = A(t, { sequenceId: s, timestamp: r });
                return e.set(p, (e) => e.concat(i)), i;
            }
            function T(e, t, n) {
                e.get(p)
                    .filter((e) => !(e.speaker.id_str === t) && n - e.timestamp > l)
                    .forEach((t) => {
                        const n = e.get(p).findIndex((e) => e.sequenceId === t.sequenceId),
                            o = e.get(p)[n];
                        e.set(p, (e) => e.toSpliced(n, 1)), e.set(f, (e) => e.concat(o));
                    });
            }
            function P(e, t, n) {
                const o = t.data.sender.twitter_id,
                    s = e.get(p)[n];
                e.set(p, (e) => e.toSpliced(n, 1)), (s.final = !0), e.set(f, (e) => e.concat(s));
                const r = S(e, t);
                return T(e, o, t.timestamp), r;
            }
            function C(e, t) {
                return e.get(p).findIndex((e) => e.speaker.id_str === t);
            }
            function I(e) {
                const {
                    body: { body: t },
                } = e;
                return !!t && t.length > 0;
            }
            function E(e) {
                const {
                    body: { body: t },
                    type: n,
                } = e;
                return i.gK.Chat === n && t.startsWith("[cc]");
            }
            function A(e, t) {
                const {
                    body: { final: n },
                    data: {
                        sender: o,
                        sender: { twitter_id: s },
                    },
                    timestamp: r,
                } = e;
                let {
                    body: { body: i },
                } = e;
                const { sequenceId: a } = t;
                return (i = i.replace(/^\[cc\]\s?/, "")), { final: n, sequenceId: a || r, speaker: { id_str: s, name: o.display_name, profile_image_url_https: o.profile_image_url, screen_name: o.username }, text: i, timestamp: r, ...t };
            }
        },
        545937: (e, t, n) => {
            n.d(t, { $T: () => p, O7: () => m, gJ: () => d, h4: () => f, mc: () => l });
            var o = n(666536),
                s = n(692822),
                r = n(30242),
                i = n(142202),
                a = n(988625),
                c = n(113788);
            let u = [];
            function l() {
                u = [];
            }
            function d(e, t) {
                return u.filter((n) => n.type === s.gK.ServerAudioTranscription && n.body.final && n.body.ntpTimeInSeconds >= e && n.body.ntpTimeInSeconds <= t && Boolean(n.body.body)).map((e) => r.ZY(e, {}));
            }
            function p(...e) {
                e.forEach((e) => {
                    const t = (0, i.y)(u, (t) => e.ntpTimeInSeconds - t.ntpTimeInSeconds);
                    u.splice(t + 1, 0, e);
                });
            }
            function f(e, t) {
                e && h(e, t);
            }
            const m = (0, o.Z)((e, t, n) => {
                if (!e) return;
                const o = e + t;
                h((0, a.c)(o), n);
            }, 100);
            function h(e, t) {
                i.Z.reset(t), r.mc(t), c.mc(t);
                const n = (0, i.y)(u, (t) => e - t.ntpTimeInSeconds);
                u.slice(n).forEach((e) => i.Z.publish(e)), i.Z.start(t);
            }
        },
        869508: (e, t, n) => {
            n.d(t, { aF: () => p, lW: () => m, zP: () => f });
            n(571372), n(136728);
            var o = n(58255),
                s = n(692822),
                r = n(163889),
                i = n(610214),
                a = n(30242),
                c = n(545937),
                u = n(142202),
                l = n(877506);
            let d = null;
            function p(e, t) {
                d ||
                    new h(e, t).connect().then((e) => {
                        u.Z.start(t), (d = e);
                    });
            }
            function f(e) {
                d?.disconnect(), (d = null), u.Z.reset(e), a.mc(e);
            }
            function m(e) {
                return (d && d.socket) || (0, r.ZP)(new Error("Unexpected exception was caught. Verify that chatmanClient and socket are defined.")), d?.socket?.send(e);
            }
            class h {
                constructor(e, t) {
                    (this.session = null),
                        (this.socket = null),
                        (this.socketState = s.xr.Uninitialized),
                        (this.handleOnOpen = () => {
                            this.authAndJoinRoom(), (this.socketState = s.xr.Connected);
                        }),
                        (this.handleOnError = (e) => {
                            (0, r.Hj)("WebSocket error", { extra: { event: e } }), clearTimeout(this._timeoutId);
                            const t = Date.now(),
                                n = this._lastErrorTime && t - this._lastErrorTime > 1e3 ? 1e3 : 5e3;
                            (this._lastErrorTime = t),
                                (this._timeoutId = setTimeout(() => {
                                    this.socket && this.openSocket();
                                }, n));
                        }),
                        (this.handleOnMessage = (e) => {
                            if ("string" == typeof e.data) {
                                const t = JSON.parse(e.data);
                                if (t.kind === s.bI.Chat) {
                                    const { payload: e, signature: n } = t,
                                        o = new s.J(e, { signature: n });
                                    u.Z.publish(o);
                                }
                            }
                        }),
                        (this.chatToken = e),
                        (this.store = t);
                }
                connectWithSession(e) {
                    this.session = e;
                    return i.gt ? this.loadChatHistory() : this.openSocket(), Promise.resolve(this);
                }
                connect() {
                    return o.w.proxsee.accessChat(this.chatToken).then(
                        (e) => ((this.session = e), this.connectWithSession(e)),
                        (e) => ((0, r.ZP)(e), Promise.reject(e)),
                    );
                }
                disconnect() {
                    this.closeSocket(), (this.session = null);
                }
                openSocket() {
                    if (this.session) {
                        const e = this.session.endpoint.replace("https://", "wss://") + s.tJ.CHATMAN_WEB_SOCKET;
                        this.closeSocket();
                        try {
                            (this.socketState = s.xr.Opening), (this.socket = new WebSocket(e)), (this.socket.onopen = this.handleOnOpen), (this.socket.onerror = this.handleOnError), (this.socket.onmessage = this.handleOnMessage);
                        } catch (e) {
                            (0, r.ZP)(e), (this.socketState = s.xr.Error);
                        }
                    }
                }
                closeSocket() {
                    this.socket && ((this.socket.onopen = () => {}), (this.socket.onmessage = () => {}), (this.socket.onclose = () => {}), this.socket.close()), (this.socket = null), (this.socketState = s.xr.Closed);
                }
                authAndJoinRoom() {
                    if (this.session) {
                        const { access_token: e, room_id: t } = this.session;
                        this.socket?.send(s.PL.build(e).toString()), this.socket?.send(s.PE.buildJoin(t).toString());
                    }
                }
                loadChatHistory() {
                    const { access_token: e, endpoint: t } = this.session || {};
                    if (!e || !t) return Promise.resolve([]);
                    try {
                        return new Promise((n, r) => {
                            const i = [];
                            let a = "";
                            const u = (r) => {
                                if (r) {
                                    const { cursor: e, messages: t } = r;
                                    if (!e) {
                                        const e = this.store.get(l.Z.currentTrackAtom)?.id3NtpTime;
                                        return c.h4(e, this.store), n(i);
                                    }
                                    (a = e), this.handleHistoryMessages(t), i.push(...t);
                                }
                                o.w.proxsee.getChatHistory({ access_token: e, host: t, path: s.tJ.CHATMAN_REPLAY, cursor: a }).then(u);
                            };
                            u();
                        });
                    } catch (e) {
                        (0, r.ZP)(e);
                    }
                }
                handleHistoryMessages(e) {
                    const t = [];
                    e.forEach((e) => {
                        if (e.kind === s.bI.Chat) {
                            const { payload: n, signature: o } = e;
                            t.push(new s.J(n, { signature: o }));
                        }
                    }),
                        c.$T(...t);
                }
            }
        },
        142202: (e, t, n) => {
            n.d(t, { Z: () => u, y: () => c });
            var o = n(565058),
                s = n(692822),
                r = n(536387),
                i = n(30242),
                a = n(877506);
            function c(e, t) {
                let n,
                    o = 0,
                    s = e.length - 1,
                    r = -1,
                    i = -1;
                if (o > s) return -1;
                for (; o <= s; ) {
                    if (((r = Math.floor((o + s) / 2)), (i = t(e[r])), void 0 !== n && 0 !== i)) return n;
                    i >= 0 ? (o = r + 1) : (s = r - 1), 0 === i && (n = r);
                }
                return void 0 !== n || i > 0 ? r : r - 1;
            }
            const u = (function () {
                let e,
                    t = !1,
                    n = 0,
                    u = 0,
                    l = 0,
                    d = 0,
                    p = (e) => !1;
                const f = {},
                    m = (0, r.dX)((e) => (0, o.cn)([])),
                    h = (0, o.cn)(null, (e, t) => {
                        t(m.reset);
                    });
                function y() {
                    (t = !1), clearTimeout(e);
                }
                function g(e, t) {
                    if (Array.isArray(f[e])) {
                        const n = c(f[e], (e) => t.ntpTimeInSeconds - e.ntpTimeInSeconds);
                        f[e].splice(n + 1, 0, t);
                    } else f[e] = [t];
                }
                function b(o) {
                    !(function (e) {
                        u === n ? ((d += 1), (l = n + (100 * d) / 1e3)) : ((d = 0), (l = u = n));
                        function t() {
                            return Object.keys(f)
                                .filter((e) => f[e] && f[e].length > 0)
                                .map((e) => Number(e))
                                .map((e) => e);
                        }
                        t().forEach((t) => {
                            const n = f[t].filter(p);
                            f[t] = f[t].filter((e) => !p(e));
                            const o = c(f[t], (e) => l - e.ntpTimeInSeconds),
                                s = o >= 0 ? f[t].splice(0, o + 1) : [];
                            e.set(m(t), (e) => (e ?? []).concat(n, s));
                        });
                    })(o),
                        t && (e = setTimeout(() => b(o), 100));
                }
                let k;
                return {
                    publish: function (e) {
                        setTimeout(() => {
                            !(function (e) {
                                switch (e.type) {
                                    case s.gK.Chat:
                                        (0, i.xD)(e) ? g(s.gK.ChatCaption, e) : g(s.gK.Chat, e);
                                        break;
                                    case s.gK.ServerAudioTranscription:
                                    case s.gK.Heart:
                                    case s.gK.ConferenceJoinRequest:
                                    case s.gK.HydraControlMessage:
                                        g(e.type, e);
                                }
                            })(e);
                        });
                    },
                    reset: function (e) {
                        y();
                        for (const e in f) delete f[e];
                        (n = 0), (u = 0), (l = 0), (d = 0), (p = (e) => !1), e.set(h), k?.();
                    },
                    setCurrentNtpTimeSeconds: function (e) {
                        n = e;
                    },
                    setDetermineShouldImmediatelyProcessMessage: function (e) {
                        p = e;
                    },
                    stacks: f,
                    start: function (e) {
                        (t = !0), b(e);
                    },
                    stop: y,
                    subscribe: function (e, t, n) {
                        return e.sub(m(t), () => {
                            const o = e.get(m(t));
                            if (o && o.length > 0) {
                                n(o).clearHeapForMessageType &&
                                    (function (e, t) {
                                        e.set(m(t), []);
                                    })(e, t);
                            }
                        });
                    },
                    subscribeNtpTime: function (e) {
                        k?.(),
                            (k = a.Z.subscribeNtpTime(e, (e) => {
                                e && (n = e);
                            }));
                    },
                    messageStoreAtom: m,
                };
            })();
        },
        920325: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(110138),
                s = n(692822),
                r = n(869508),
                i = n(142202);
            class a {
                constructor(e) {
                    this.audioSpaceId = e;
                }
                sendReaction(e) {
                    !(function (e) {
                        (0, r.lW)(e);
                        const t = new s.J(e);
                        i.Z.publish(t);
                    })(this.createReactionPayload(e, this.audioSpaceId));
                }
                createReactionPayload(e, t) {
                    const n = { body: e, type: s.gK.Heart, v: 2 },
                        r = { room: t, body: JSON.stringify(n) };
                    return JSON.stringify({ body: JSON.stringify(n), kind: s.bI.Chat, sender: o.Z.proxsee.getChatmanSender(), payload: JSON.stringify(r), type: s.gK.Heart });
                }
            }
        },
        363397: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                s = n(565058),
                r = n(400752),
                i = n(878931),
                a = n(427266),
                c = n(988625);
            const u = function (e) {
                const t = (0, s.cn)(e?.id ?? l.id),
                    n = (0, s.cn)(e?.api ?? l.api),
                    u = (0, s.cn)(e?.state ?? l.state),
                    d = (0, s.cn)(e?.guests ?? l.guests),
                    p = (0, s.cn)(e?.chatToken ?? l.chatToken),
                    f = (0, s.cn)(
                        (e) => {
                            const t = e(u);
                            return t?.tracks[t.currentTrackId];
                        },
                        (e, t, n) => {
                            const o = n ?? e(u);
                            return o?.tracks[o.currentTrackId];
                        },
                    ),
                    m = (0, s.cn)(null, (e, n, { guestsState: o, id: s, newChatTokenCallback: r, state: i }) => {
                        const a = i.tracks[i.currentTrackId]?.chatToken || null;
                        if (o && !i.isMuted) {
                            const e = (function (e) {
                                let t = "SPEAKERS";
                                const n = { host: { audioLevel: e.audioLevels.host } },
                                    o = Object.keys(e.guests);
                                for (let s = 0; s < o.length; s++) {
                                    const r = o[s],
                                        i = e.guests[r],
                                        a = i.UserId,
                                        c = e.audioLevels.guests[r];
                                    (n[a] = { guest: i, audioLevel: c }), (t += `-${a}`);
                                }
                                return { signature: t, lookup: n };
                            })(o);
                            n(d, (t) => ({ ...t, lookup: Object.assign(t.lookup, e.lookup) }));
                        }
                        n(t, s), n(u, i);
                        const c = e(p);
                        n(p, a), a && a !== c && r?.(a);
                    }),
                    h = (0, s.cn)((e) => e(d).lookup),
                    y = (0, s.cn)((e) => Boolean(e(u)?.isSeeking)),
                    g = (0, s.cn)((e) => e(u)?.playbackRate || 1),
                    b = (0, s.cn)((e) => Boolean(e(u)?.isPlaying)),
                    k = (0, s.cn)((e) => e(f)?.durationMs),
                    v = (0, s.cn)((e) => e(f)?.currentTimeMs),
                    _ = (0, s.cn)(null, (e, t) => {
                        const o = e(n),
                            s = e(u);
                        if (s && o) return s.isMuted ? (o.unmute(), "unmute") : (o.mute(), "mute");
                    }),
                    S = (0, s.cn)((e) => {
                        const t = e(u);
                        return t?.tracks[t.currentTrackId]?.id3NtpTime;
                    });
                return {
                    test_: (0, a.mZ)(void 0),
                    guestsLookupAtom: h,
                    currentTrackAtom: f,
                    isPlayingAtom: b,
                    subscribeNtpTime: (e, t) =>
                        e.sub(S, () => {
                            const n = e.get(S);
                            t(n);
                        }),
                    useSetPlayerApi: function () {
                        const e = (0, r.b9)(t),
                            s = (0, r.b9)(n);
                        return o.useCallback(
                            (t, n) => {
                                e(t), s(n);
                            },
                            [s, e],
                        );
                    },
                    useAddGuestToLookup: function () {
                        const e = (0, r.b9)(d);
                        return o.useCallback(
                            (t, n) => {
                                e((e) => ({ signature: `${e.signature}-${t}`, lookup: { ...e.lookup, [t]: { guest: e[t], audioLevel: n } } }));
                            },
                            [e],
                        );
                    },
                    useSetPlayerState: function () {
                        const e = (0, r.b9)(m);
                        return o.useCallback(
                            (t, n, o, s) => {
                                e({ id: t, state: n, guestsState: o, newChatTokenCallback: s });
                            },
                            [e],
                        );
                    },
                    useGetCurrentTime: function () {
                        const e = (0, r.b9)(f);
                        return o.useCallback(
                            (t) => {
                                const n = e(null);
                                let o, s;
                                return n && n.id3NtpTime && ((o = Math.floor(n.id3NtpTime)), t && (s = Math.floor(((0, c.E)(o).getTime() - t) / 1e3))), { ntp_timestamp: o, timecode: s };
                            },
                            [e],
                        );
                    },
                    useGetCurrentTrack: function () {
                        return (0, r.b9)(f);
                    },
                    useId: function () {
                        return (0, r.Dv)(t);
                    },
                    useApi: function () {
                        return (0, r.Dv)(n);
                    },
                    useCurrentTrack: function () {
                        return (0, r.Dv)(f);
                    },
                    useIsMuted: function () {
                        return Boolean((0, r.Dv)(u)?.isMuted);
                    },
                    useToggleMute: function () {
                        return (0, r.b9)(_);
                    },
                    useAudioLevel: function (e) {
                        const t = (e, n) => {
                                const o = e.isHost ? "host" : e.periscopeUserId;
                                if (!o) return 0;
                                const s = n.lookup[o],
                                    r = s?.audioLevel;
                                if (e.isHost && !r) {
                                    return t({ ...e, isHost: !1 }, n);
                                }
                                return "number" == typeof r ? r : 0;
                            },
                            n = (0, r.Dv)(d);
                        return t(e, n);
                    },
                    useGuestsLookup: function () {
                        return (0, r.Dv)(h);
                    },
                    useActiveSpeakersLookup: function () {
                        const e = (0, r.oR)(),
                            t = e.get(h),
                            n = (0, i.N)();
                        return (
                            o.useEffect(() => {
                                let t = e.get(d);
                                const o = e.sub(d, () => {
                                    const o = e.get(d);
                                    o.signature !== t.signature && n(), (t = o);
                                });
                                return () => {
                                    o();
                                };
                            }, [n, e]),
                            { get: (e) => t[e] }
                        );
                    },
                    usePlayerApi: function () {
                        return (0, r.Dv)(n);
                    },
                    usePlayerState: function () {
                        return (0, r.Dv)(u);
                    },
                    useIsSeeking: function () {
                        return (0, r.Dv)(y);
                    },
                    usePlaybackRate: function () {
                        return (0, r.Dv)(g);
                    },
                    useIsPlaying: function () {
                        return (0, r.Dv)(b);
                    },
                    useCurrentTrackDurationMs: function () {
                        return (0, r.Dv)(k);
                    },
                    useCurrentTrackTimeMs: function () {
                        return (0, r.Dv)(v);
                    },
                };
            };
            const l = { id: null, api: null, state: null, guests: { lookup: {}, signature: "" }, chatToken: null };
        },
        877506: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = (0, n(363397).Z)();
        },
        113788: (e, t, n) => {
            n.d(t, { DP: () => b, FN: () => k, Gf: () => g, bz: () => m, mc: () => y });
            var o = n(202784),
                s = n(565058),
                r = n(400752),
                i = n(987809),
                a = n(692822),
                c = n(142202);
            const u = (0, i.xu)((e) => (0, s.cn)(void 0 === e ? null : void 0)),
                l = (0, s.cn)(null, (e, t, { key: n, value: o }) => {
                    e(p).add(n), t(u(n), o);
                }),
                d = (0, s.cn)(null, (e, t) => {
                    const n = e(p);
                    n.forEach((e) => {
                        t(u(e), void 0 === e ? null : void 0);
                    }),
                        n.clear();
                }),
                p = (0, s.cn)(() => new Set()),
                f = (0, s.cn)(null, (e, t, n) => {
                    const o = e(u(n.participantId));
                    o && (t(l, { key: n.participantId, value: o.slice(1) }), t(m, (e) => e.filter((e) => e.id !== n.id)));
                }),
                m = (0, s.cn)([]),
                h = (0, s.cn)(null, (e, t, n) => {
                    for (const o of n) {
                        const { reaction: n, sender: s } = v(o),
                            r = n,
                            i = e(u(s.participantId));
                        t(l, { key: n.participantId, value: i ? i.concat(r) : [r] }), t(m, (e) => e.concat(r));
                    }
                });
            function y(e) {
                e.set(d);
            }
            function g(e) {
                return (0, r.Dv)(u(e));
            }
            function b() {
                return (0, r.b9)(f);
            }
            function k() {
                const e = (function () {
                        const e = (0, r.b9)(h);
                        return o.useCallback((t) => (e(t), { clearHeapForMessageType: !0 }), [e]);
                    })(),
                    t = (0, r.oR)();
                o.useEffect(() => {
                    const n = c.Z.subscribe(t, a.gK.Heart, e);
                    return function () {
                        n();
                    };
                }, [e, t]);
            }
            function v(e) {
                const t = e.data.sender?.user_id;
                return { reaction: { emoji: e.body.body, type: e.body.type, id: e.body.uuid, participantId: t }, sender: { participantId: t, twitterId: e.data.sender?.twitter_id } };
            }
        },
        42134: (e, t, n) => {
            n.d(t, { K$: () => b, rm: () => w, fU: () => I, lR: () => C, Ud: () => E, cI: () => P, rx: () => T, JD: () => A });
            var o = n(565058),
                s = n(400752),
                r = n(202784),
                i = n(125363),
                a = n(863749),
                c = n(836255);
            function u() {
                return (0, i.v9)(a.Ft);
            }
            function l() {
                const e = (0, i.I0)();
                return r.useCallback((t) => e(a.M5(t)), [e]);
            }
            var d = n(484633),
                p = n(36809);
            const f = null,
                m = null,
                h = null,
                y = null,
                g = {},
                b = (0, o.cn)(f),
                k = (0, o.cn)(m),
                v = (0, o.cn)(h),
                _ = (0, o.cn)(y),
                S = (0, o.cn)(g),
                w = (0, o.cn)((e) => {
                    const t = e(b);
                    return "space" === t?.type ? t.id : void 0;
                });
            function T() {
                return (0, s.Dv)(w);
            }
            const P = (0, o.cn)(
                    (e) => e(b)?.role ?? null,
                    (e, t, n) => {
                        const o = e(b);
                        "space" === o?.type && (n !== o.role && t(b, { ...o, role: n }), e(p.Lg));
                    },
                ),
                C = (0, o.cn)((e) => {
                    const t = e(P);
                    return [d.Q.host, d.Q.cohost, d.Q.speaker].includes(t);
                }),
                I = (0, o.cn)((e) => {
                    const t = e(P);
                    return [d.Q.host, d.Q.cohost].includes(t);
                }),
                E = (0, o.cn)(null, (e, t) => {
                    t(b, f);
                });
            function A() {
                return { activeItem: (0, s.KO)(b), playerApi: (0, s.KO)(k), playerState: (0, s.KO)(v), guestsState: (0, s.KO)(_), audioSpaceCache: (0, s.KO)(S), selectTweet: (0, i.v9)(c.Z.createHydratedSelector), audio: u(), hydrateVoiceTweetTrack: l() };
            }
        },
        670687: (e, t, n) => {
            n.d(t, { bq: () => d, j9: () => l, kD: () => c });
            var o = n(565058),
                s = n(400752),
                r = n(987809),
                i = n(790997),
                a = n(509599);
            const c = (0, r.xu)((e) => (0, o.cn)()),
                u = (0, r.xu)((e) =>
                    (0, o.cn)((t) => {
                        const n = t(a.cS).get(e);
                        return n ? n.is_muted_by_guest || n.is_muted_by_admin : void 0;
                    }),
                ),
                l = (0, r.xu)((e) =>
                    (0, o.cn)((t) => {
                        if (e && t((0, i.f)(e))) {
                            const n = t(i.Dg);
                            if (n && n !== e && !t((0, i.f)(n))) return t(l(n));
                        }
                        return t(c(e)) ?? (e ? t(u(e)) : void 0) ?? !0;
                    }),
                );
            function d(e) {
                return (0, s.Dv)(c(e));
            }
        },
        484633: (e, t, n) => {
            n.d(t, { Q: () => r, W: () => s });
            n(202784);
            var o = n(481399);
            const s = (0, o.Z)({ space: !0, voiceTweet: !0, voiceMessage: !0 }),
                r = (0, o.Z)({ host: "host", cohost: "cohost", speaker: "speaker", listener: "listener" });
        },
        381904: (e, t, n) => {
            n.d(t, { e: () => q, Y: () => K });
            var o = {};
            n.r(o), n.d(o, { buildDockConfig: () => D, useBuildPlayerProps: () => Z });
            var s = {};
            n.r(s), n.d(s, { buildDockConfig: () => R, buildPlayerProps: () => N });
            n(571372);
            var r = n(202784),
                i = n(565058),
                a = n(42134),
                c = n(863749),
                u = n(443781),
                l = n(143778),
                d = n(807896),
                p = n(400752),
                f = n(650556),
                m = n(279046),
                h = n(656898),
                y = n(400915),
                g = n(582129),
                b = n(484633),
                k = n(16057),
                v = n(106006),
                _ = n(521454),
                S = n(740386),
                w = n(978658);
            function T(e) {
                const t = e.audioSpaceId,
                    n = (0, p.Dv)(h.Cm.participantTotalAtom) ?? 0,
                    o = (0, p.Dv)(h.Cm.titleAtom),
                    s = (0, h.bd)(),
                    { role: i } = (0, y.l7)(),
                    a = (0, p.b9)(w.D),
                    c = (0, p.b9)(g.dq);
                return r.createElement(m.Z, {
                    activeSpeakers: r.createElement(k.UU, { audioSpaceId: t }),
                    isWide: e.isSideNavLayout,
                    onDockPress: () => {
                        e.onToggleCollapsed(), s(":audiospace::dock::click");
                    },
                    onRequestClose: () => {
                        i === b.Q.host ? a(!0) : c({}), e.onRequestClose(), s(":audiospace::dock:close:click");
                    },
                    title: o,
                    totalParticipants: n,
                    wideDockMaxWidth: e.width,
                });
            }
            function P(e) {
                const [t, n] = r.useState(!1),
                    o = r.useMemo(
                        () => ({
                            ...e,
                            onToggleCollapsed: function () {
                                n((e) => !e);
                            },
                        }),
                        [e],
                    );
                return r.createElement(r.Fragment, null, t ? r.createElement(T, o) : r.createElement(_.D, o), r.createElement(v.SpaceBehaviors, { audioSpaceId: e.audioSpaceId, isSideNavLayout: e.isSideNavLayout }), r.createElement(S.B, { audioSpaceId: e.audioSpaceId }), r.createElement(w.R, { audioSpaceId: e.audioSpaceId }));
            }
            var C = n(869508),
                I = n(142202),
                E = n(877506);
            function A(e) {
                const [t] = e.activeItem;
                return t ? { activeItem: t } : null;
            }
            function Z() {
                const e = E.Z.useSetPlayerApi(),
                    t = E.Z.useSetPlayerState(),
                    n = (0, p.oR)();
                return r.useCallback(
                    ({ commonApi: o, context: s }) => {
                        const r = A(s);
                        if (!r) return { media: null };
                        const { activeItem: i } = r;
                        return {
                            broadcastId: i.id,
                            disablePlaybackCoordination: !0,
                            isAnonymous: i.isAnonymous,
                            isLive: i.isLive,
                            mediaKey: i.mediaKey,
                            onPlayerApi: function (t) {
                                e(i.id, t);
                            },
                            onPlayerState: function (e, o) {
                                t(i.id, e, o, (e) => {
                                    (0, C.aF)(e, n), (0, f.H3)(e), I.Z.subscribeNtpTime(n);
                                });
                            },
                        };
                    },
                    [e, t, n],
                );
            }
            function D({ audioDockProps: e, commonApi: t, context: n, history: o }) {
                const s = A(n);
                if (!s) return null;
                const { activeItem: i } = s;
                return r.createElement(P, (0, d.Z)({ key: i.id, audioSpaceId: i.id, onRequestClose: function () {} }, e));
            }
            n(136728);
            var L = n(118149),
                M = n(425474),
                x = n(337637);
            function O(e) {
                const [t] = e.activeItem,
                    n = e.hydrateVoiceTweetTrack(t.conversationId),
                    o = (0, x.Z)(n.tweets, (e) => e.id_str === t.id),
                    s = n.tweets[o];
                if (!s) return null;
                const [r] = s.extended_entities?.media || [];
                return { activeItem: t, track: n, media: "photo" !== r?.type ? r : null, activeIndex: o, activeTweet: s };
            }
            function N({ commonApi: e, context: t }) {
                const n = O(t);
                if (!n) return { media: null };
                const { activeIndex: o, activeItem: s, media: r, track: i } = n,
                    a = i.tweets[o + 1];
                return {
                    media: r,
                    requestedTimecode: s.startTimeMs,
                    onEnded: () => {
                        a && e.load.voiceTweet(a);
                    },
                };
            }
            function R({ audioDockProps: e, commonApi: t, context: n, history: o }) {
                const [s] = n.playerApi,
                    [i] = n.playerState,
                    a = t.currentTrack;
                if (!i || !s || !a) return null;
                const c = O(n);
                if (!c) return null;
                const { activeIndex: u, activeTweet: l, media: d, track: p } = c,
                    { isMuted: f, isPlaying: m, isSeeking: h, volume: y } = i;
                let g = 0,
                    b = 0;
                H(p.tweets, ({ endMs: e, i: t }) => {
                    t === u - 1 && (b = e), (g = e);
                });
                const k = (d && d.id_str === a.contentId && a.currentTimeMs) || 0,
                    v = b + k,
                    _ = d?.url,
                    S = l.full_text,
                    w = _ && S ? S.replace(_, "").trim() : S,
                    T = l.user;
                return r.createElement(L.uP, {
                    isWide: e.isSideNavLayout,
                    width: e.width,
                    isMuted: f,
                    isPlaying: m,
                    isSeeking: h,
                    progressMs: v,
                    durationMs: g,
                    volume: 100 * y,
                    title: w,
                    user: T,
                    onRequestClose: t.clear,
                    onTogglePlayback: t.togglePlayback,
                    onDockPress: () => o.push(l.permalink),
                    onMuteToggle: t.toggleMute,
                    onVolumeChange: t.setVolume,
                    onSeek: function (e) {
                        H(p.tweets, ({ durationMs: n, endMs: o, i: r, startMs: i, tweet: a }) => {
                            if (e >= i && e <= o) {
                                const o = e - i;
                                if (r === u) {
                                    const e = o / n;
                                    s.scrubToFraction(e);
                                } else t.load.voiceTweet(a, o);
                                return !0;
                            }
                        });
                    },
                });
            }
            function H(e, t) {
                let n = 0;
                for (let o = 0; o < e.length; o++) {
                    const s = e[o],
                        r = M.Z.getVoiceTweetDuration(s),
                        i = n + r;
                    if (t({ i: o, tweet: s, startMs: n, endMs: i, durationMs: r })) break;
                    n = i;
                }
            }
            const F = { default: { buildDockConfig: l.Z }, space: o, voiceTweet: s };
            function K() {
                const e = r.useRef({}),
                    { history: t } = r.useContext(u.rC),
                    n = (0, a.JD)(),
                    [o, s] = n.activeItem,
                    [i, l] = n.playerApi,
                    [d, p] = n.playerState,
                    [f, m] = n.guestsState,
                    h = d && d.tracks[d.currentTrackId];
                (e.current.playerApi = i), (e.current.playerState = d);
                const y = r.useCallback(() => {
                        s(null);
                    }, [s]),
                    g = r.useMemo(
                        () =>
                            function () {
                                const { playerApi: t, playerState: n } = e.current;
                                if (t && n) {
                                    (n.isPlaying ? t.pause : t.play)();
                                }
                            },
                        [],
                    ),
                    k = r.useMemo(
                        () =>
                            function () {
                                const { playerApi: t, playerState: n } = e.current;
                                if (t && n) {
                                    (n.isMuted ? t.unmute : t.mute)();
                                }
                            },
                        [],
                    ),
                    v = r.useMemo(
                        () =>
                            function (t) {
                                const { playerApi: n } = e.current;
                                n && n.setVolume(t / 100);
                            },
                        [],
                    ),
                    _ = {
                        space: function ({ id: e, isAnonymous: t, isLive: n, mediaKey: o, role: r }) {
                            s({ type: b.W.space, id: e, mediaKey: o, isAnonymous: t, isLive: n, role: r });
                        },
                        voiceTweet: function (e, t) {
                            s({ type: b.W.voiceTweet, id: e.id_str, conversationId: c.ge(e), startTimeMs: t });
                        },
                    },
                    S = { load: _, clear: y, currentTrack: h, toggleMute: k, togglePlayback: g, setVolume: v },
                    w = F.space.useBuildPlayerProps();
                return {
                    activeItem: o,
                    load: _,
                    clear: y,
                    player: { api: i, state: d, guests: f, currentTrack: h, toggleMute: k, togglePlayback: g },
                    config: {
                        dock: function (e) {
                            if (!o) return F.default.buildDockConfig();
                            switch (o.type) {
                                case b.W.space:
                                    return F.space.buildDockConfig({ history: t, context: n, commonApi: S, audioDockProps: e });
                                case b.W.voiceTweet:
                                    return F.voiceTweet.buildDockConfig({ history: t, context: n, commonApi: S, audioDockProps: e });
                                default:
                                    return F.default.buildDockConfig();
                            }
                        },
                        player: function () {
                            const e = {
                                media: null,
                                onPlayerApi: function (e) {
                                    l(e);
                                },
                                onPlayerState: function (e, t) {
                                    p(e), t && m(t);
                                },
                            };
                            if (!o) return e;
                            let t;
                            switch (o.type) {
                                case b.W.space:
                                    t = w({ context: n, commonApi: S });
                                    break;
                                case b.W.voiceTweet:
                                    t = F.voiceTweet.buildPlayerProps({ context: n, commonApi: S });
                                    break;
                                default:
                                    throw new Error(`[AudioContext:Player] unhandled active item type [${o.type}]`);
                            }
                            return { ...e, ...t };
                        },
                    },
                    audioSpaces: { cache: n.audioSpaceCache },
                };
            }
            const q = (0, i.cn)(null, (e, t, n) => {
                t(a.K$, { type: b.W.space, ...n });
            });
        },
        447735: (e, t, n) => {
            n.d(t, { b: () => a });
            var o = n(202784),
                s = n(58255),
                r = n(125363),
                i = n(443781);
            function a() {
                const e = (0, r.oR)(),
                    t = (0, r.I0)()((e, t, n) => n.api),
                    { featureSwitches: n } = (0, i.QZ)();
                return o.useMemo(() => (s.w.init({ store: e, api: t, featureSwitches: n }), s.w), [e, t, n]);
            }
        },
        982790: (e, t, n) => {
            n.d(t, { $: () => w });
            n(571372);
            var o = n(202784),
                s = n(400752),
                r = n(776342),
                i = n(111677),
                a = n.n(i),
                c = n(316118),
                u = n(809674),
                l = n(400915),
                d = n(782642),
                p = n(58255),
                f = n(163889),
                m = n(582129),
                h = n(725516),
                y = n(125363),
                g = n(390387),
                b = n(312771),
                k = n(610214),
                v = n(877506),
                _ = n(484633),
                S = n(381904);
            function w(e, t) {
                const n = (0, h.z)(),
                    i = (0, y.v9)(g.Qb),
                    a = (0, d.p)(),
                    w = !!t?.skipListeners,
                    E = (function (e, t) {
                        const {
                            audioContext: n,
                            fetchAudioSpace: o,
                            getAudioSpace: s,
                            reportSpaceFor: r,
                            subscribeToScheduledSpace: i,
                            unsubscribeFromScheduledSpace: a,
                        } = (function () {
                            const e = (0, S.Y)(),
                                [t, n] = e.audioSpaces.cache;
                            return { getAudioSpace: s, fetchAudioSpace: a, subscribeToScheduledSpace: r, unsubscribeFromScheduledSpace: i, reportSpaceFor: p.w.proxsee.reportSpaceFor, audioContext: e };
                            function o(e, t) {
                                return `id:${e},skipListeners:${t.toString()}`;
                            }
                            function s(e, n) {
                                const r = o(e, n),
                                    i = t[r];
                                return i || (n ? s(e, !1) : T(b.ZP.NONE));
                            }
                            function r(e) {
                                return p.w.subscribeToScheduledSpace(e).then(() => a(e));
                            }
                            function i(e) {
                                return p.w.unsubscribeFromScheduledSpace(e).then(() => a(e));
                            }
                            function a(e, t, r) {
                                const i = !!r?.skipListeners,
                                    a = s(e, i);
                                if ("number" == typeof t && a.status !== b.ZP.NONE) {
                                    if (!((Date.now() - a.time) / 1e3 > t)) return Promise.resolve(a);
                                }
                                if (0 === e.trim().length) return Promise.resolve(a);
                                function c(t, s = {}) {
                                    const r = T(t, s),
                                        a = o(e, i);
                                    n((e) => {
                                        const t = { ...e[a], ...r };
                                        return (e[a] = t), { ...e };
                                    });
                                }
                                if (!p.w.initialized()) return Promise.reject(new Error("[useAudioSpaceMetadata] AudioModule not initialized"));
                                let u;
                                return (
                                    c(b.ZP.LOADING),
                                    p.w
                                        .audioSpace(e, i)
                                        .catch((e) => {
                                            u = e;
                                        })
                                        .then((e) => {
                                            e ? c(b.ZP.LOADED, { data: e, error: void 0 }) : u && c(b.ZP.FAILED, { error: u });
                                        })
                                );
                            }
                        })();
                        function c(t, n) {
                            return o(e, t, n);
                        }
                        function u() {
                            return s(e, t);
                        }
                        function l() {
                            return i(e);
                        }
                        function d() {
                            return a(e);
                        }
                        const f = v.Z.useGetCurrentTime();
                        function m() {
                            const t = {},
                                n = u().data?.started_at;
                            return (
                                Object.keys(r).forEach((o) => {
                                    t[o] = () => {
                                        const t = { broadcast_id: e, ...f(n) };
                                        return r[o](t);
                                    };
                                }),
                                t
                            );
                        }
                        return { fetch: c, get: u, subscribe: l, unsubscribe: d, audioContext: n, report: m() };
                    })(e, w),
                    { audioContext: A, report: Z, subscribe: D, unsubscribe: L } = E,
                    M = E.get(),
                    x = M.data,
                    O = x?.state;
                const N = { NotStarted: O === r.default.SpaceState.NotStarted, PrePublished: O === r.default.SpaceState.PrePublished, Running: O === r.default.SpaceState.Running, TimedOut: O === r.default.SpaceState.TimedOut, Ended: O === r.default.SpaceState.Ended, Canceled: O === r.default.SpaceState.Canceled, loaded: !!x || M.status === b.ZP.FAILED, loading: M.status === b.ZP.LOADING, error: M.status === b.ZP.FAILED && M.error, joined: A.activeItem?.type === _.W.space && A.activeItem?.id === e, recording: !1, joinable: !x?.disallow_join, replayable: !1, clippable: Boolean(x?.is_space_available_for_clipping), superFollowersOnly: x?.narrow_cast_space_type === r.default.AudienceEnum.superFollowersOnly };
                x?.is_space_available_for_replay && (N.Running ? (N.recording = !0) : (N.Ended || N.TimedOut) && (N.replayable = !0));
                const R = (0, m.E3)(x),
                    H = (0, m.Hi)(x),
                    F = (0, u.S)({ analytics: n, details: { broadcast_id: e, host_id: x?.host?.user_id, host_periscope_id: x?.host?.periscope_user_id, audio_space_start_type: x?.scheduled_start ? "scheduled" : "adhoc", audio_space_narrow_cast_type: H, audio_space_recording_type: R, state: O, is_logged_in: i } });
                function K() {
                    const e = x?.title?.trim(),
                        t = x?.host?.display_name;
                    return e || (t ? I.title({ name: t }) : I.titleFallback);
                }
                const q = {
                        is: N,
                        title: K,
                        hashtags: function () {
                            return (0, c.Z)(K()).map((e) => `#${e}`);
                        },
                        scribe: F,
                        state: function () {
                            const { StateEnum: e } = r.default;
                            let t;
                            return N.loaded && N.error ? (t = e.unavailable) : N.replayable ? (t = e.replay) : N.Ended || N.TimedOut ? (t = e.ended) : N.Running ? (t = e.live) : N.NotStarted || N.PrePublished ? (t = e.scheduled) : N.Canceled && (t = e.canceled), t;
                        },
                        getTunedInCount: function () {
                            const { total_live_listeners: e, total_replay_watched: t } = x || {};
                            return (e ?? 0) + (t ?? 0);
                        },
                        reportError: function (e, t) {
                            const n = { space: void 0, ...t };
                            if (x) {
                                const e = JSON.parse(JSON.stringify(x));
                                e?.participants.listeners && delete e.participants.listeners, (n.space = e);
                            }
                            (0, f.ZP)(e, { extra: n });
                        },
                        forceFetch: function () {
                            return E.fetch();
                        },
                    },
                    Q = p.w.initialized(),
                    W = o.useRef({ utils: q, audioSpaceMetadata: E });
                (W.current.utils = q), (W.current.audioSpaceMetadata = E);
                const { isUserSpeakingRole: B } = (0, l.l7)();
                o.useEffect(() => {
                    let e;
                    const t = B ? C : P;
                    return (
                        Q &&
                            (function n() {
                                const o = W.current.utils.is.loaded,
                                    s = W.current.utils.is.Running;
                                (o && !s) || (W.current.audioSpaceMetadata.fetch(t, { skipListeners: w }), (e = setTimeout(n, 1e3 * t)));
                            })(),
                        function () {
                            clearTimeout(e);
                        }
                    );
                }, [Q, e, O, w, B]);
                const U = (0, k.Hz)(),
                    J = (0, s.b9)(S.e);
                return {
                    space: x,
                    audioContext: A,
                    utils: q,
                    handlers: {
                        subscribe: D,
                        unsubscribe: L,
                        report: Z,
                        join: function ({ forceReplay: t, isAnonymous: n, origin: o, role: s } = {}) {
                            x && x.media_key && N.joinable && (0, m.j)({ contentType: x?.content_type, id: e, mediaKey: x.media_key, isLive: N.Running, isReplay: t || N.replayable, isAnonymous: !!n, isSuperFollowersOnly: N.superFollowersOnly, addToast: a, scribe: q.scribe, started_at: x?.started_at, origin: o, role: s, clearAndLoadSpace: J, resetExpandedDockStore: U });
                        },
                    },
                };
            }
            function T(e, t = {}) {
                const n = { status: e, time: Date.now() };
                return t.data && (n.data = t.data), t.error && (n.error = t.error), n;
            }
            const P = 15,
                C = 5,
                I = { title: a().cfbea177, titleFallback: a().ab4fc8bc };
        },
        87682: (e, t, n) => {
            n.d(t, { R: () => i });
            var o = n(400752),
                s = n(656898),
                r = n(443781);
            function i(e) {
                const t = (0, o.Dv)(s.Cm.spaceStateAtom),
                    { featureSwitches: n } = (0, r.QZ)(),
                    i = n.getNumberValue("spaces_2022_h2_clipping_duration_seconds"),
                    a = n.isTrue("spaces_2022_h2_clipping");
                return { isCreationEnabled: Boolean(t?.clippable) && a, maxDurationMs: 1e3 * i, maxDurationSeconds: i };
            }
        },
        384757: (e, t, n) => {
            n.d(t, { O: () => u });
            n(136728);
            var o = n(107267),
                s = n(395067),
                r = n(725516),
                i = n(443781),
                a = n(877506),
                c = n(982790);
            function u(e, t, n) {
                const u = (0, o.useHistory)(),
                    { contextualScribeNamespace: l } = (0, r.z)(),
                    { featureSwitches: d } = (0, i.QZ)(),
                    { space: p } = (0, c.$)(e),
                    f = s.C2.Space,
                    m = (0, s.Yw)(d, f),
                    h = a.Z.useGetCurrentTime();
                return () => {
                    if (!m) return t();
                    let e;
                    e = n ? Math.floor(n / 1e3) : h(p?.started_at).timecode;
                    const o = (0, s.j_)({ clientReferer: window.location.pathname, isMedia: !0, isPromoted: !1, reportType: f, reportedAtTimecode: e, reportedSpace: p, reportedUser: p?.host?.user_id, scribeNamespace: l });
                    u.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(o) } } });
                };
            }
        },
        36809: (e, t, n) => {
            n.d(t, { Lg: () => p });
            n(901951);
            var o = n(565058),
                s = n(42134),
                r = n(656898),
                i = n(304148),
                a = n(110138),
                c = n(712612),
                u = n(610214),
                l = n(877506),
                d = n(484633);
            const p = (0, o.cn)((e) => {
                const t = e(r.Cm.participantsAtom),
                    { inLookup: n, notInLookup: o } = (() => {
                        if (e(s.cI) === d.Q.listener) {
                            const t = e(l.Z.guestsLookupAtom) ?? {},
                                n = ({ periscope_user_id: e }) => Boolean(e && t[e ?? ""]);
                            return { inLookup: n, notInLookup: (e) => !n(e) };
                        }
                        const t = e(i.Cl),
                            n = ({ periscope_user_id: e }) => Boolean(e && t.get(e));
                        return { inLookup: n, notInLookup: (e) => !n(e) };
                    })();
                return {
                    ...(() => {
                        const { cohosts: r = [], host: i, participants: l } = t,
                            { speakers: p = [], listeners: f = [] } = l ?? {},
                            m = e(u.CP),
                            h = e(u.t),
                            y = { host: i, cohosts: r.filter(n), speakers: p.filter(n), listeners: m ? [] : [...r.filter(o), ...p.filter(o), ...f] },
                            g = a.Z.viewerUser();
                        if (g && !h) {
                            const t = e(s.cI),
                                n = e(c.Dy),
                                o = e(c.fg),
                                r = { avatar_url: g.profile_image_url_https, display_name: g.name, highlightedLabel: g.highlightedLabel, is_blue_verified: g.is_blue_verified, is_verified: g.verified, twitter_screen_name: g.screen_name, periscope_user_id: a.Z.proxsee.periscopeUserId(), verified_type: g.verified_type, user_id: g.id_str, ...([d.Q.host, d.Q.cohost, d.Q.speaker].includes(t) && { is_muted_by_admin: o, is_muted_by_guest: n }) },
                                i = (e) => e.periscope_user_id !== r.periscope_user_id;
                            (y.cohosts = y.cohosts.filter(i)), (y.speakers = y.speakers.filter(i)), (y.listeners = y.listeners.filter(i)), t === d.Q.host ? (y.host = r) : t === d.Q.cohost ? y.cohosts.unshift(r) : t === d.Q.speaker ? y.speakers.unshift(r) : t === d.Q.listener && y.listeners.unshift(r);
                        }
                        return y;
                    })(),
                    total: t.participants?.total ?? 0,
                };
            });
            (0, o.cn)((e) => {
                const { cohosts: t, host: n, speakers: o } = e(p);
                return [n, ...t, ...o].filter(Boolean);
            }),
                (0, o.cn)((e) => e(p).listeners);
        },
        89609: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                s = n(187669),
                r = n(982790);
            function i(e) {
                const { handlers: t, space: n, utils: i } = (0, r.$)(e),
                    [a, c] = o.useState(!1),
                    [u, l] = o.useState(!1),
                    d = { hasReminderSet: !1, onClick: void 0, scheduledStart: void 0 };
                return (
                    (0, s.q)(() => {
                        i.forceFetch().then(() => {
                            c(!0);
                        });
                    }),
                    (function (e) {
                        return e && e.host && e.scheduled_start && ("NotStarted" === e.state || "PrePublished" === e.state);
                    })(n) &&
                        ((d.hasReminderSet = Boolean(n?.is_subscribed)),
                        (d.onClick = () => {
                            const e = () => l(!1);
                            l(!0), d.hasReminderSet ? (i.scribe(":*:*:*:unset_reminder:click"), t.unsubscribe().finally(e)) : (i.scribe(":*:*:*:set_reminder:click"), t.subscribe().finally(e));
                        }),
                        a && (d.scheduledStart = n?.scheduled_start)),
                    { props: d, isSubscribing: u }
                );
            }
        },
        49905: (e, t, n) => {
            n.d(t, { R: () => a });
            var o = n(202784),
                s = n(125363),
                r = n(624479),
                i = n(982790);
            function a(e) {
                const t = o.useRef(!1),
                    n = (0, i.$)(e),
                    a = (0, s.I0)();
                o.useEffect(() => {
                    t.current = !1;
                }, [e]),
                    o.useEffect(() => {
                        const e = n.space,
                            o = t.current,
                            s = n.utils.is.Running;
                        if (!e) return;
                        const i = o && !s;
                        if (((t.current = s), i)) {
                            [...e.participants.admins, ...e.participants.speakers].forEach((e) => {
                                const t = e.user_id;
                                t && a(r.ZP.deleteOne(t));
                            });
                        }
                    }, [a, n]);
            }
        },
        763126: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m, listenerVideoPortalNodeAtom: () => p });
            var o = n(202784),
                s = n(565058),
                r = n(400752),
                i = n(702239),
                a = n(381904),
                c = n(447735),
                u = n(135328),
                l = n(610214),
                d = n(837759);
            const p = (0, s.cn)(() => (0, i.oD)());
            function f(e) {
                (0, c.b)();
                const { config: t } = (0, a.Y)(),
                    n = (0, r.Dv)(p);
                return (0, r.Dv)(l.gc) ? null : o.createElement(o.Fragment, null, t.dock(e), o.createElement(d.G3, null), o.createElement(i.Nq, { node: n }, o.createElement(u.Z, t.player())));
            }
            const m = o.memo(f);
        },
        744130: (e, t, n) => {
            n.r(t), n.d(t, { __DANGEROUS_IMPORT_VIDEOPLAYER_BASE__: () => b, __DANGEROUS_IMPORT__: () => k });
            var o = n(202784),
                s = n(803224),
                r = n(738584),
                i = n(640290),
                a = n(123751),
                c = n(396837),
                u = n(90890),
                l = n(443781),
                d = n(668214);
            const p =
                    () =>
                    (e, t, { api: n }) =>
                        n.getHttpClient(),
                f = (0, d.Z)()
                    .propsFromActions(() => ({ getTwitterAuthedHttpClient: p }))
                    .withAnalytics();
            var m = n(907187),
                h = n(58255);
            function y(e) {
                const { featureSwitches: t } = o.useContext(l.rC),
                    { acquisitionParams: n, broadcastId: r, isLive: i, isLooping: d, media: p, mediaKey: f, onEnded: y, onPlaybackEmitterCreated: b, onPlayerApi: k, onPlayerState: S, requestedTimecode: w, shouldAutoplayMuted: T } = e,
                    [P, C] = o.useState(null),
                    I = o.useRef({ playbackCoordinationEmitter: null, previousPlayerState: null }),
                    E = p || (r && f);
                if (
                    (o.useEffect(() => {
                        null === P && E && (0, c.ij)({ showControls: !1, source: {} }, t).then((e) => C(() => e));
                    }, [P, E, t]),
                    o.useEffect(() => {
                        const e = I.current;
                        return function () {
                            const { playbackCoordinationEmitter: t } = e;
                            t && t.unregister();
                        };
                    }, []),
                    null === P || !E)
                )
                    return null;
                const A = Boolean(i && r && f),
                    Z = !A && T,
                    D = A ? s.W.SPACE : s.W.NORMAL;
                const L = (function (e, t) {
                        const n = e.analytics.contextualScribeNamespace,
                            o = { isAnonymous: e.isAnonymous, enableShortFormCompleteLogging: t.isTrue("responsive_web_video_pcomplete_enabled"), periscopeAuthToken: h.w.proxsee.authToken(), scribeContext: { ...n }, userType: h.w.proxsee.userType() },
                            s = {
                                log: (t) => {
                                    const { category: n, data: o, namespace: s } = t;
                                    s?.action && e.analytics.scribe({ ...s, data: { ...o, _category_: n } });
                                },
                            };
                        return new m.Z(s, { log: () => {} }, e.getTwitterAuthedHttpClient(), o);
                    })(e, t),
                    M = {
                        analytics: L,
                        basePlayerClass: P,
                        httpClient: _,
                        onApiReady: function (t) {
                            Z || t.play(), "function" == typeof k && k(t);
                            const n = p?.video_info?.duration_millis;
                            "number" == typeof n && "number" == typeof w && t.scrubToFraction(w / n);
                            const o = {
                                onAutoPlayRequest: function () {
                                    Z && t.playPreview();
                                },
                                onPauseRequest: function () {
                                    e.disablePlaybackCoordination || t.pause();
                                },
                                playbackPriority: D,
                                canAutoplay: Boolean(T),
                                isLooping: Boolean(d),
                            };
                            (I.current.playbackCoordinationEmitter = u.Tc.register(o)), b && b(I.current.playbackCoordinationEmitter);
                        },
                        onStateUpdate: function (e, t) {
                            "function" == typeof S && S(e, t),
                                (function (e) {
                                    const t = v(e);
                                    e.isPlaying && t && t.durationMs === t.currentTimeMs && "function" == typeof y && (y(), I.current.playbackCoordinationEmitter && I.current.playbackCoordinationEmitter.signalPlaybackFinish());
                                })(e),
                                (function (e) {
                                    const { playbackCoordinationEmitter: t, previousPlayerState: n } = I.current,
                                        o = null === n,
                                        s = n?.isPlaying,
                                        r = e.isPlaying,
                                        i = !o && s && !r;
                                    (!o && s) || !r ? i && t && t.signalPause() : t && t.signalPlay();
                                })(e),
                                (I.current.previousPlayerState = e);
                        },
                        twitterAuthedHttpClient: e.getTwitterAuthedHttpClient(),
                    };
                if (r && f) {
                    const e = { ...M, configType: "static", contentId: f, contentType: "broadcast", featureProvider: t, variants: [], videoId: a.Z.forAudioSpace(r, f, i, n) };
                    return o.createElement(g, { key: r, playerConfig: e });
                }
                if (p) {
                    const e = { ...M, configType: "static", contentId: p.id_str, loop: !1, contentType: "media_entity", featureProvider: t, durationMs: p.video_info.duration_millis, variants: p.video_info.variants.map(({ bitrate: e, content_type: t, url: n }) => ({ type: t, src: n })) };
                    return o.createElement(g, { key: p.id_str, playerConfig: e });
                }
                return null;
            }
            function g({ playerConfig: e }) {
                return o.createElement(r.Z, e);
            }
            const b = y,
                k = o.memo(f(y)),
                v = (e) => e && e.tracks[e.currentTrackId],
                _ = new i.ZP({});
        },
        135328: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({
                loader: () =>
                    Promise.all([n.e("icons.0"), n.e("modules.audio-6107ac1a"), n.e("modules.audio-b953418a"), n.e("modules.audio-7c51e6a7"), n.e("modules.audio-04db59e9"), n.e("modules.audio-76583d6c"), n.e("modules.audio-b7a8a5fb"), n.e("modules.audio-51f6e793"), n.e("modules.audio-e019dbda"), n.e("modules.audio-262c94d4"), n.e("modules.audio-c6fe4ea4"), n.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-9749c7d2"), n.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-87e5a2e7"), n.e("shared~ondemand.InlinePlayer~loader.AudioOnlyVideoPlayer~loader.immersiveTweetHandler~bundle.TV~bund-44a55f38"), n.e("loader.AudioOnlyVideoPlayer")])
                        .then(n.bind(n, 744130))
                        .then((e) => ({ default: e.__DANGEROUS_IMPORT__ })),
            });
        },
        16057: (e, t, n) => {
            n.d(t, { UU: () => m, z0: () => h });
            var o = n(202784),
                s = n(400752),
                r = n(325686),
                i = n(392237),
                a = n(731708),
                c = n(646677),
                u = n(526626),
                l = n(877506),
                d = n(484633),
                p = n(36809),
                f = n(610214);
            function m(e) {
                const t = h(e.audioSpaceId, l.Z);
                if (!t) return null;
                const n = t.audioLevel,
                    s = t.user?.display_name || "";
                return o.createElement(y, { audioLevel: n, displayName: s });
            }
            function h(e, t) {
                const { cohosts: n, host: r, speakers: i } = (0, s.Dv)(p.Lg),
                    a = t.useGuestsLookup(),
                    c = [...(r ? [{ user: r, kind: d.Q.host }] : []), ...n.map((e) => ({ user: e, kind: d.Q.cohost })), ...i.map((e) => ({ user: e, kind: d.Q.speaker }))],
                    u = o.useRef(r && { user: r, audioLevel: 0, kind: d.Q.host });
                let l;
                return (
                    c.forEach((e) => {
                        const t = e.user.periscope_user_id ?? "host",
                            n = a[t];
                        n && n.audioLevel > (l?.audioLevel ?? 0) && e.user.display_name && (l = { user: e.user, kind: e.kind, audioLevel: n.audioLevel });
                    }),
                    (l?.audioLevel ?? 0) > 0 ? ((u.current = l), u.current) : u.current ? { ...u.current, audioLevel: 0 } : void 0
                );
            }
            function y(e) {
                return o.createElement(r.Z, { style: k.activeSpeakerIndicatorContainer }, o.createElement(g, null), o.createElement(u._, { audioLevel: e.audioLevel, size: i.default.theme.spacesPx.space16, withPersistZeroLevel: !0 }), o.createElement(b, { audioLevel: e.audioLevel, displayName: e.displayName }));
            }
            function g() {
                return f.jh() ? o.createElement(c.default, { style: k.superFollowsIcon, testID: "superfollows-icon" }) : null;
            }
            function b(e) {
                const t = f.QH(),
                    n = [k.activeSpeakerIndicatorName, 0 === e.audioLevel && k.activeSpeakerIndicatorNameInactive, t ? { color: t } : void 0];
                return o.createElement(a.ZP, { style: n }, e.displayName);
            }
            const k = i.default.create((e) => ({ activeSpeakerIndicatorContainer: { flexDirection: "row", alignItems: "center", width: "100%" }, activeSpeakerIndicatorName: { color: e.colors.purple500, marginStart: e.spacesPx.space4, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, activeSpeakerIndicatorNameInactive: { opacity: 0.6 }, superFollowsIcon: { color: e.colors.gray700, height: e.spaces.space16, marginEnd: e.spaces.space4, width: e.spaces.space16 } }));
        },
        123293: (e, t, n) => {
            n.d(t, { Z: () => O });
            var o = n(668371),
                s = n(202784),
                r = (n(585488), n(712696)),
                i = n.n(r),
                a = n(666670),
                c = n(736063),
                u = n(813323),
                l = n(277660),
                d = n.n(l),
                p = n(970187),
                f = n(154003),
                m = n(731708),
                h = n(111677),
                y = n.n(h),
                g = n(516951),
                b = n(443781),
                k = n(233391),
                v = n(288955),
                _ = n(71620),
                S = n(668214),
                w = n(601576),
                T = n(919022);
            const P = (0, S.Z)().propsFromActions(() => ({ addToast: w.fz, createLocalApiErrorHandler: (0, _.zr)("FOLLOW_HOST_BUTTON"), follow: T.ZP.follow })),
                C = u.Z;
            function I({ scribe: e, spaceId: t }) {
                const n = t ? `/i/spaces/${t}/peek` : void 0;
                return s.createElement(
                    f.ZP,
                    {
                        link: n,
                        onPress: () => {
                            e(D.viewDetailsClick);
                        },
                        type: "onMediaOutlined",
                    },
                    A.viewDetails,
                );
            }
            const E = (e, t) => {
                    const n = {
                            profileLink: s.createElement(
                                m.ZP,
                                {
                                    color: "whiteOnColor",
                                    link: `/${t}`,
                                    onPress: () => {
                                        e(D.viewProfileClick);
                                    },
                                    weight: "bold",
                                },
                                A.viewProfile,
                            ),
                        },
                        o = { screenName: t };
                    return s.createElement(y().I18NFormatMessage, { $i18n: "dc3a6d2d", screenName: o.screenName }, n.profileLink);
                },
                A = { followHost: y().a1a0e6d8, unfollowHost: y().a3c4e396, viewProfile: y().j58e7b00, viewDetails: y().eca4e32a },
                Z = { follow: A.followHost, following: "", unfollow: A.unfollowHost },
                D = { followHostClick: ":audiospace:audiospace_card:speaker_list:button:click", toastImpression: ":audiospace::follow_host:toast:impression", viewProfileClick: ":audiospace::follow_host:toast:click", viewDetailsClick: ":audiospace:audiospace_card:speaker_list:button:click" },
                L = P(function (e) {
                    const { scribe: t, spaceId: n, user: o } = e,
                        r = d()(C, o),
                        i = r?.relationship_perspectives?.following,
                        { viewerUserId: a } = s.useContext(b.rC);
                    return !r || i || a === r.rest_id
                        ? s.createElement(I, { scribe: t, spaceId: n })
                        : s.createElement(
                              s.Fragment,
                              null,
                              s.createElement(v.Z, { displayMode: k.BH.follow, userFullName: r.core?.name ?? "", userId: r.rest_id }, (n) =>
                                  s.createElement(p.Z, {
                                      buttonText: Z,
                                      isFollowing: r.relationship_perspectives?.following || !1,
                                      onFollow: n(() =>
                                          (() => {
                                              t(D.followHostClick);
                                              const { addToast: n, createLocalApiErrorHandler: o, follow: s } = e;
                                              r &&
                                                  s(r.rest_id, {}).then(
                                                      () => {
                                                          const e = r.core?.screen_name;
                                                          e && (t(D.toastImpression), n({ text: E(t, e) }));
                                                      },
                                                      o({ showToast: !0 }),
                                                  );
                                          })(),
                                      ),
                                      onUnfollow: g.Z,
                                      showRelationshipChangeConfirmation: !1,
                                      type: "spaces",
                                  }),
                              ),
                          );
                }),
                M = o.Z;
            function x(e) {
                const { scribe: t, space: n } = e,
                    o = n?.host?.user_id ?? "",
                    r = n?.rest_id,
                    u = i()(M, { restId: o }),
                    l = { context: "FollowHostButtonContainerQuery", options: a.F };
                return s.createElement(c.H, { errorConfig: l }, s.createElement(L, { scribe: t, spaceId: r, user: u.user.result }));
            }
            const O = s.memo(x);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/modules.audio-7c51e6a7.5ca443ba.js.map
