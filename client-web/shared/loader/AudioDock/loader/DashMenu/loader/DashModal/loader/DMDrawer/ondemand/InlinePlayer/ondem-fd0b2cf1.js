"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"],
    {
        712612: (e, t, n) => {
            n.d(t, { Dy: () => l, F3: () => p, R2: () => m, fg: () => f });
            n(571372);
            var r = n(565058),
                s = n(516951),
                o = n(42134),
                c = n(670687),
                i = n(837759),
                a = n(526250),
                u = n(254810),
                d = n(41931);
            const l = (0, r.cn)(!1),
                f = (0, r.cn)(!1, (e, t, n) => {
                    t(f, n), t(l, !0);
                }),
                p = (0, r.cn)(
                    () => new Error("Use the setter to get an instance of the stream"),
                    (e, t) => {
                        const n = e(u.dB);
                        return n ? Promise.resolve(n) : navigator.mediaDevices ? (e(d.v) ? Promise.resolve() : t(u.Vv).catch(() => (t(i.eD, !0), Promise.resolve()))) : (t(i.eD, !0), Promise.resolve());
                    },
                ),
                v = (0, a.v)((e, t) => {
                    const n = e(o.lR),
                        r = e(d.v);
                    if ((!e(u.fm) && !n) || r) return s.Z;
                    const i = !e(u.pL),
                        a = e(l);
                    return a !== i && (t(u.pL, !a), t((0, c.kD)(), a)), s.Z;
                }),
                m = () => (0, a.N)(v);
        },
        729418: (e, t, n) => {
            n.d(t, { Qr: () => d, UT: () => u, hF: () => i, t8: () => a });
            n(136728);
            var r = n(565058),
                s = n(420182),
                o = n(4427),
                c = n(340140);
            const i = (0, r.cn)(null, (e, t, n) => {
                    if (e(s.f0).isTrue("rweb_spaces_next_codec_enabled")) {
                        const e = RTCRtpSender.getCapabilities("video").codecs,
                            t = ["42001f"].find((t) => e.some(({ sdpFmtpLine: e }) => e?.includes(t)));
                        t && (n.sdp = n.sdp?.replace(/profile-level-id=\w{6}/, `profile-level-id=${t}`));
                    }
                }),
                a = (0, r.cn)(null, (e, t, n) => {
                    n.sdp = n.sdp?.replace(/profile-level-id=\w{6}/, "profile-level-id=42e01f");
                }),
                u = (0, r.cn)(null, (e, t, n) => {
                    const r = n.sdp;
                    r &&
                        (n.sdp = (0, c.c)(
                            (function (e) {
                                const t = e.split(/\r\n/),
                                    n = [],
                                    r = new Set();
                                function s() {
                                    if (!n.length) return;
                                    let e = 8;
                                    for (const { id: s, idx: o } of n) {
                                        for (; r.has(e.toString()); ) ++e;
                                        t[o] = t[o].replace(`a=extmap:${s}`, "a=extmap:" + e++);
                                    }
                                    n.splice(0, n.length), r.clear();
                                }
                                for (let e = 0; e < t.length; ++e) {
                                    const o = t[e];
                                    if (!o.startsWith("a=extmap")) {
                                        s();
                                        continue;
                                    }
                                    const c = /^a=extmap:(\d+) (.+)$/.exec(o);
                                    if (!c) continue;
                                    const [, i, a] = c,
                                        u = p[a];
                                    u ? i !== u && (t[e] = t[e].replace(`a=extmap:${i}`, `a=extmap:${u}`)) : f[i] ? n.push({ idx: e, id: i }) : r.add(i);
                                }
                                return s(), t.join("\r\n");
                            })(r),
                            e(o.MG),
                            e(s.f0),
                        ));
                }),
                d = (0, r.cn)(null, (e, t, n) => {
                    const r = n.sdp;
                    r && (n.sdp = (0, c.c)(r, e(o.MG), e(s.f0)));
                });
            const l = [
                    ["1", "urn:ietf:params:rtp-hdrext:ssrc-audio-level"],
                    ["2", "urn:ietf:params:rtp-hdrext:toffset"],
                    ["3", "http://www.webrtc.org/experiments/rtp-hdrext/abs-send-time"],
                    ["4", "urn:3gpp:video-orientation"],
                    ["5", "http://www.ietf.org/id/draft-holmer-rmcat-transport-wide-cc-extensions-01"],
                    ["6", "http://www.webrtc.org/experiments/rtp-hdrext/playout-delay"],
                    ["7", "http://www.webrtc.org/experiments/rtp-hdrext/video-content-type"],
                ],
                f = l.reduce((e, [t, n]) => ((e[t] = n), e), {}),
                p = l.reduce((e, [t, n]) => ((e[n] = t), e), {});
        },
        280859: (e, t, n) => {
            n.d(t, { Nt: () => a, ZK: () => d, ql: () => u });
            var r = n(202784),
                s = n(565058),
                o = n(400752),
                c = n(333259);
            const i = (0, s.cn)("prompt");
            function a() {
                const [e, t] = (0, o.KO)(i);
                return (
                    r.useEffect(() => {
                        let e,
                            n = !0;
                        return (
                            navigator.permissions?.query({ name: "notifications" }).then((r) => {
                                if (!n) return;
                                t(r.state);
                                const s = () => {
                                    t(r.state);
                                };
                                r.addEventListener("change", s),
                                    (e = () => {
                                        r.removeEventListener("change", s);
                                    });
                            }),
                            () => {
                                (n = !1), e?.(), l.forEach((e) => e.close()), (l = []);
                            }
                        );
                    }, [t]),
                    "prompt" === e
                );
            }
            function u(e) {
                if ("background" === c.aB.currentState)
                    return (function ({ body: e, title: t }) {
                        if (
                            "granted" !==
                            (function () {
                                if (!("Notification" in window)) return "denied";
                                return Notification.permission;
                            })()
                        )
                            return;
                        const n = (function () {
                            const e = document.querySelector('[rel="shortcut icon"]');
                            if (e instanceof HTMLLinkElement) return e?.href;
                        })();
                        return new Notification(t, { body: e, icon: n });
                    })(e);
            }
            function d() {
                return Notification.requestPermission().then((e) => "granted" === e);
            }
            let l = [];
        },
        949725: (e, t, n) => {
            n.d(t, { Og: () => u, V3: () => l, bP: () => d, gP: () => i });
            var r = n(565058),
                s = n(536387),
                o = n(563781),
                c = n(625555);
            const i = (0, r.cn)(null, (e, t) =>
                    e(c.F6)
                        .getTurnServers()
                        .then((e) => {
                            const n = { urls: e.uris, username: e.username, credential: e.password };
                            t(a, n);
                        }),
                ),
                a = (0, s.Yh)(),
                u = (0, r.cn)(null, (e, t) => t(a.reset)),
                d = (0, o.O)((e) => {
                    const t = e(a);
                    return new RTCPeerConnection({ iceServers: [t] });
                }),
                l = (0, o.O)((e) => {
                    const t = e(a);
                    return new RTCPeerConnection({ iceServers: [t] });
                });
        },
        217220: (e, t, n) => {
            n.d(t, { Y5: () => Y, HV: () => Z, lW: () => k, Kg: () => L, sv: () => I, Mg: () => E, fB: () => M });
            var r = n(565058),
                s = n(400752),
                o = n(987809),
                c = n(516951),
                i = n(420182),
                a = n(42134),
                u = n(663859),
                d = n(536387),
                l = n(526250),
                f = n(108922),
                p = n(513588),
                v = n(254810),
                m = n(625555),
                h = n(790997),
                w = n(396963),
                g = n(4427),
                _ = n(280859),
                b = n(509599);
            const S = (0, r.cn)(null, (e, t, { feedId: n, raisedHandEmoji: r }) => {
                    if (!e(g.MG)) return;
                    const s = e((0, w.Kz)(n));
                    if (!s) return;
                    const o = e(b.qx),
                        c = (0, _.ql)({ title: o, body: `${r} ${s} raised their hand!` });
                    t(x(n), c);
                }),
                x = (0, o.xu)((e) =>
                    (0, r.cn)(null, (t, n, r) => {
                        const s = t(y(e));
                        s && s.close(), n(y(e), r);
                    }),
                ),
                y = (0, o.xu)((e) => (0, r.cn)()),
                k = (0, r.cn)([]);
            (0, r.cn)(null, (e, t) => {
                const n = e(k);
                for (const e of n) t(O, e, "");
            });
            const Z = (0, o.xu)((e) =>
                    (0, r.cn)(
                        (t) => t(R(e)),
                        (t, n, r) => {
                            n(O, e, r);
                        },
                    ),
                ),
                I = () => {
                    const e = (0, s.Dv)(h.kw);
                    return { raisedHandEmoji: (0, s.Dv)(e ? R(e) : (0, p.J)("")), toggleRaiseHand: (0, s.b9)(T) };
                },
                E = (e) => (0, s.Dv)(j(e)),
                M = (e) => (0, s.Dv)(D(e)),
                D = (0, o.xu)((e) =>
                    (0, r.cn)((t) => {
                        const n = t((0, h.De)(e));
                        return t(j(n));
                    }),
                ),
                j = (0, o.xu)((e) =>
                    (0, r.cn)((t) => {
                        const n = e ?? t(h.kw);
                        return n ? t(R(n)) : void 0;
                    }),
                ),
                R = (0, o.xu)((e) => (0, r.cn)((t) => t(C(e)) ?? t(P(e)))),
                P = (0, o.xu)((e) =>
                    (0, r.cn)((t) => {
                        const n = t(b.cS).get(e);
                        return n?.raise_hand_emoji;
                    }),
                ),
                C = (0, d.dX)((e) => (0, f.J)(6e5)),
                L = (0, r.cn)(null, (e, t) => t(C.reset)),
                O = (0, r.cn)(null, (e, t, n, r) => {
                    t(C(n), r), r ? (t(S, { feedId: n, raisedHandEmoji: r }), t(k, (e) => e.filter((e) => e !== n).concat(n))) : (t(x(n), void 0), t(k, (e) => e.filter((e) => e !== n)));
                }),
                T = (0, r.cn)(null, (e, t) => {
                    const n = e(a.rm);
                    if (!n) return;
                    const r = e(h.kw);
                    if (!r) return;
                    const s = e(Z(r)),
                        o = s ? "" : m.xB;
                    t(Z(r), o), t(s ? m.X8 : m.Sd, n);
                }),
                Y = (0, l.v)((e, t) => {
                    const n = e(h.kw);
                    if (!n) return c.Z;
                    if (e(Z(n)) && !e(i.zE).get(v.pL)) {
                        const n = e(v.dB);
                        if (!n) return c.Z;
                        let r = 100;
                        return (0, u.y)(n, ({ normLevel: e }) => {
                            n.muted || (0 !== r && e > 0.5 && 0 == --r && t(T));
                        });
                    }
                    return c.Z;
                });
        },
        847982: (e, t, n) => {
            n.d(t, { $: () => c });
            var r = n(266568),
                s = (n(585488), n(535338));
            const o = r.Z;
            function c(e) {
                return (0, s.p)(o, { userId: e }).user.result;
            }
        },
        42778: (e, t, n) => {
            n.d(t, { JK: () => o, Wj: () => d, bU: () => l, wM: () => i });
            n(543673), n(240753), n(128399), n(571372);
            var r = n(565058),
                s = n(163889);
            const o = (0, r.cn)(null, (e, t, o) => {
                const { audioContext: d, channelCount: l, destination: f, source: p } = o;
                let v = !1;
                return (
                    (function (e, t) {
                        if (c)
                            if (c instanceof Promise)
                                c.then((e) => {
                                    e && t(e);
                                });
                            else {
                                const { value: e } = c;
                                e && t(e);
                            }
                        else
                            (c = (async function (e) {
                                if (!("AudioWorkletNode" in window)) return;
                                const t = new URL(n(659322), n.b),
                                    r = (function (e) {
                                        return e.audioWorklet;
                                    })(e);
                                if (!r) return;
                                try {
                                    await r.addModule(t);
                                } catch (e) {
                                    return;
                                }
                                return new AudioWorkletNode(e, "NoiseSuppressorWorklet");
                            })(e)),
                                c.then((e) => {
                                    e && t(e);
                                });
                    })(d, (e) => {
                        t(i, !0);
                        const n = ((e) => (t) => {
                                v ||
                                    (t
                                        ? (function (e, t, n, r, s) {
                                              if ((n.disconnect(), 1 === s)) {
                                                  const s = e.createChannelMerger(1);
                                                  n.connect(t).connect(s).connect(r);
                                              } else n.connect(t).connect(r);
                                          })(d, e, p, f, l)
                                        : (function (e, t, n) {
                                              t.disconnect(), t.connect(n);
                                          })(0, p, f));
                            })(e),
                            o = ((c = n), (0, r.cn)(null, (e, t) => c(e(u))));
                        var c;
                        t(o),
                            (e.onprocessorerror = (e) => {
                                (0, s.Hj)(Error(e.message)), n(!1), t(i, !1);
                            }),
                            t(a, (e) => e.concat(o));
                    }),
                    () => {
                        p.disconnect(), (v = !0);
                    }
                );
            });
            let c;
            const i = (0, r.cn)(!1),
                a = (0, r.cn)([]),
                u = (0, r.cn)(!0),
                d = (0, r.cn)((e) => e(i) && e(u)),
                l = (0, r.cn)(null, (e, t, n) => {
                    t(u, n), e(a).forEach((e) => t(e));
                });
        },
        895229: (e, t, n) => {
            n.d(t, { Fn: () => c, lY: () => o, p_: () => s });
            var r = n(565058);
            const s = (0, r.cn)(!1),
                o = (0, r.cn)(!1),
                c = (0, r.cn)((e) => e(o) || e(s));
        },
        838859: (e, t, n) => {
            n.d(t, { AE: () => R, CN: () => D, Kn: () => q, az: () => Z, c: () => C });
            n(136728);
            var r = n(202784),
                s = n(565058),
                o = n(400752),
                c = n(537392),
                i = n(840590),
                a = n(516951),
                u = n(323265),
                d = n(811233),
                l = n(741382),
                f = n(526250),
                p = n(934871),
                v = n(254810),
                m = n(582129),
                h = n(625555),
                w = n(835515),
                g = n(4427),
                _ = n(790997),
                b = n(712612),
                S = n(895229),
                x = n(520197);
            const y = (0, s.cn)(() => (0, l.y)("conference-room")),
                k = (0, x.A6)(1e3);
            function Z() {
                const e = (0, d.gt)(),
                    t = (0, o.b9)(I);
                k.useLayoutEffect(r.useCallback(() => (e && u.ZP.isChromeOS() ? t() : a.Z), [e, t]));
            }
            const I = (0, f.v)((e, t) => {
                    const n = [t(E), t(M), t(j), t(P), t(L), t(T), t(O), t(Y), t(K), t(B), t(F), t(N)];
                    return () => {
                        n.forEach((e) => e());
                    };
                }),
                E = (0, f.v)((e, t) => {
                    const n = e(y),
                        r = n.sub("join", (e) => {
                            const { height: t, width: r } = (0, c.iv)();
                            n.postMessage("joined", { width: r, height: t }), o(e);
                        }),
                        s = n.sub("joined", (e) => {
                            o(e);
                        });
                    function o({ height: n, width: r }) {
                        const s = (0, c.iv)();
                        s.width < r ? e(S.p_) || t(S.lY, !0) : s.width > r && (t(S.p_, !0), t(S.lY, !1));
                    }
                    const { height: i, width: a } = (0, c.iv)();
                    return (
                        n.postMessage("join", { width: a, height: i }),
                        () => {
                            r(), s();
                        }
                    );
                }),
                M = (0, f.v)((e, t) => {
                    const n = e(y);
                    return e(S.p_)
                        ? n.sub("enter", (n) => {
                              const { broadcastId: r, conferenceId: s, janusSessionId: o, proxseeAuth: c, roomConfig: a } = n,
                                  { chatToken: u, guestServiceToken: d, guestServicesSessionUuid: l } = n.guestServicesAuth,
                                  f = `/i/conferences-room/${s}`;
                              i.default.push(f);
                              const p = e(h.F6),
                                  v = e(h.yj);
                              p.setAuth(c), v.customInit(d, u), t(_.YX, a), t(_.ZD, o), t(h.re, l), t(m.V$, { conferenceId: s, broadcastId: r });
                          })
                        : a.Z;
                }),
                D = (0, s.cn)(null, (e, t, n) => {
                    e(y).postMessage("enter", n);
                }),
                j = (0, f.v)((e, t) => {
                    const n = e(y);
                    return e(S.p_)
                        ? n.sub("janusPush", (e) => {
                              t(_.M6, e);
                          })
                        : a.Z;
                }),
                R = (0, s.cn)(null, (e, t, n) => {
                    e(y).postMessage("janusPush", n);
                }),
                P = (0, f.v)((e, t) => {
                    const n = e(y);
                    return e(S.p_)
                        ? n.sub("leave", () => {
                              i.default.replace("/i/conferences-room");
                          })
                        : a.Z;
                }),
                C = (0, s.cn)(null, (e, t) => {
                    e(y).postMessage("leave");
                }),
                L = (0, f.v)((e, t) => {
                    const n = e(y);
                    return e(S.p_)
                        ? n.sub("camera", (n) => {
                              (async () => {
                                  const r = n && (await e(p.cf).then((e) => e.find((e) => e.deviceId === n)));
                                  r ? t(p.HO, r) : t(p.eR);
                              })();
                          })
                        : a.Z;
                }),
                O = (0, f.v)((e, t) => {
                    if (!e(S.lY)) return a.Z;
                    const n = e(p.fx);
                    return e(y).postMessage("camera", n?.deviceId), a.Z;
                }),
                T = (0, f.v)((e, t) => {
                    const n = e(y);
                    if (!e(S.p_)) return a.Z;
                    const r = n.sub("mic", (n) => {
                            (async () => {
                                const r = n && (await e(v.vl).then((e) => e.find((e) => e.deviceId === n)));
                                r && t(v.Ao, r);
                            })();
                        }),
                        s = n.sub("micMuted", (n) => {
                            n !== e(b.Dy) && t(b.Dy, n);
                        });
                    return () => {
                        s(), r();
                    };
                }),
                Y = (0, f.v)((e, t) => {
                    if (!e(S.lY)) return a.Z;
                    const n = e(v.fx)?.deviceId;
                    return n && e(y).postMessage("mic", n), a.Z;
                }),
                K = (0, f.v)((e, t) => {
                    if (!e(S.lY)) return a.Z;
                    const n = e(b.Dy);
                    return e(y).postMessage("micMuted", n), a.Z;
                }),
                B = (0, f.v)((e, t) => {
                    if (!e(S.p_)) return a.Z;
                    return e(y).sub("reload", () => {
                        location.reload();
                    });
                }),
                q = (0, s.cn)(null, (e, t, n) => {
                    e(S.lY) && e(y).postMessage("reload", { ttsToken: n });
                }),
                F = (0, f.v)((e, t) => {
                    if (e(S.lY)) {
                        const t = e(w.lV);
                        return e(y).postMessage("volume", t), a.Z;
                    }
                    if (e(S.p_)) {
                        return e(y).sub("volume", (e) => {
                            t(w.lV, e);
                        });
                    }
                    return a.Z;
                }),
                N = (0, f.v)((e, t) => {
                    if (e(S.lY)) {
                        const t = e(g.fJ);
                        return e(y).postMessage("isJoined", t), a.Z;
                    }
                    if (e(S.p_)) {
                        return e(y).sub("isJoined", (e) => {
                            t(g.fJ, e);
                        });
                    }
                    return a.Z;
                });
        },
        825177: (e, t, n) => {
            n.d(t, { F: () => u, m: () => d });
            var r = n(565058),
                s = n(156275),
                o = n(526250),
                c = n(901910),
                i = n(949725);
            const a = (0, r.cn)({}),
                u = (0, r.cn)((e) => e(a)),
                d = (0, o.v)((e, t) => {
                    const n = e(i.bP);
                    return t(l, n);
                }),
                l = (0, c.W)((e, t, n) => {
                    let r;
                    function o() {
                        n.getStats().then((e) => {
                            if (r) {
                                const n = (function (e, t) {
                                    const n = f(e),
                                        r = f(t);
                                    return (0, s.Y)(r).reduce((e, t) => (p(r, n, t, "h") ? (e[t] = 3) : p(r, n, t, "m") ? (e[t] = 2) : p(r, n, t, "l") ? (e[t] = 1) : r[t].h && (e[t] = 0), e), {});
                                })(r, e);
                                t(a, n);
                            }
                            r = e;
                        });
                    }
                    o();
                    const c = setInterval(o, 5e3);
                    return () => {
                        clearInterval(c);
                    };
                });
            function f(e) {
                return [...e.values()].reduce((e, t) => ("outbound-rtp" !== t.type || (e[t.mid] = { ...e[t.mid], [t.rid]: { packetsSent: t.packetsSent } }), e), {});
            }
            function p(e, t, n, r) {
                return (function (e, t) {
                    if ("number" == typeof e && "number" == typeof t) return e - t;
                })(e[n]?.[r]?.packetsSent, t[n]?.[r]?.packetsSent);
            }
        },
        611702: (e, t, n) => {
            n.d(t, { Ai: () => k, Zn: () => S });
            var r = n(202784),
                s = n(565058),
                o = n(987809),
                c = n(666305),
                i = n(161821),
                a = n(744531),
                u = n(516951),
                d = n(420182),
                l = n(536387),
                f = n(526250),
                p = n(790997),
                v = n(949725),
                m = n(459679);
            function h(e, t, n, r = 1e3) {
                let s = null,
                    o = null,
                    c = null;
                function i() {
                    (function (e) {
                        return e.getStats().then((e) => {
                            const t = [...e.values()];
                            return (0, m.Z)(t, (e) => ("packetsLost" in e && "packetsReceived" in e && e.timestamp > Date.now() - 1e3 && "inbound-rtp" === e.type ? e : void 0));
                        });
                    })(e).then((e) => {
                        const t = e.find(({ kind: e }) => "video" === e);
                        if (t) {
                            const e = Date.now();
                            if (null !== o && null !== s && null !== c) {
                                const r = (e - c) / 1e3;
                                if (0 !== r) {
                                    const e = (t.packetsLost - s) / r,
                                        c = (t.packetsReceived - o) / r;
                                    n({ packetsLostPerSec: e, packetsReceivedPerSec: c });
                                }
                            }
                            (c = e), (s = t.packetsLost), (o = t.packetsReceived);
                        }
                    });
                }
                i();
                const a = setInterval(i, r);
                return () => clearInterval(a);
            }
            const w = Object.freeze({ normal: 2, small: 1, xSmall: 0 }),
                g = { normal: 720, small: 360, xSmall: 180 };
            const _ = (0, o.xu)((e) => (0, o.xu)((e) => (0, s.cn)({}))),
                b = (0, o.xu)((e) =>
                    (0, o.xu)((t) =>
                        (0, s.cn)((n) => {
                            const r = (0, i.Z)(n(_(e)(t)));
                            return r.length ? Math.max(...r) : void 0;
                        }),
                    ),
                );
            function S(e, t, n) {
                const s = (0, l.xO)(),
                    [o] = r.useState(() => "substream-" + x++);
                r.useLayoutEffect(() => {
                    const r = n.current;
                    if (!r || !e) return;
                    const i = () => {
                        const { height: n } = r.getBoundingClientRect(),
                            c = (function (e) {
                                const t = e * devicePixelRatio * 1.3;
                                return t > g.normal ? w.normal : t > g.small ? w.small : w.xSmall;
                            })(n);
                        s.set(_(e)(t), (e) => ({ ...e, [o]: c }));
                    };
                    return (
                        i(),
                        c.Z.observe(r, i),
                        () => {
                            c.Z.unobserve(r, i), s.set(_(e)(t), (e) => (0, a.Z)(e, o));
                        }
                    );
                }, [e, t, o, s, n]);
            }
            let x = 0;
            const y = (0, o.xu)((e) => (0, o.xu)((t) => (0, s.cn)((n) => !!n((0, p.UQ)(e)(t))?.simulcast))),
                k = (0, f.v)((e, t, n, r) => {
                    const s = e((0, p.ee)(n)(r));
                    if (!s) return u.Z;
                    if (!e(y(n)(r))) return u.Z;
                    const o = e(b(n)(r));
                    if (void 0 === o) return u.Z;
                    const c = e(v.V3);
                    if (!c) return u.Z;
                    let i = 0,
                        a = 0;
                    return h(c, 0, ({ packetsLostPerSec: s, packetsReceivedPerSec: c }) => {
                        const u = e(d.zE),
                            l = u.get(u.get((0, p.tB)(n))(r));
                        if (void 0 === l) return;
                        if (c + s < 5) return;
                        let f = l;
                        l > o && (f = o), s > 0 ? ((a = Date.now()), ++i) : (i = 0), s > 0.5 * c && i > 2 ? (l === w.normal ? (f = s > 1 * c ? w.xSmall : w.small) : l === w.small && (f = 0)) : 0 === s && l < o && a <= Date.now() - 3e3 && (l === w.xSmall ? (f = w.small) : f === w.small && (f = w.normal), (a = Date.now())), f !== l && t(Z, { feedId: n, feedMid: r, substream: f });
                    });
                }),
                Z = (0, s.cn)(null, (e, t, { feedId: n, feedMid: r, substream: s }) => {
                    t(e((0, p.tB)(n))(r), s), t(I, { feedId: n, feedMid: r, substream: s });
                }),
                I = (0, s.cn)(null, (e, t, { feedId: n, feedMid: r, substream: s }) => {
                    const o = e((0, p.UQ)(n)(r)),
                        c = o?.mid;
                    if (c) {
                        return e(p.n0).configure({ streams: [{ mid: c, substream: s }] });
                    }
                });
        },
        509599: (e, t, n) => {
            n.d(t, { C: () => T, CP: () => J, F$: () => F, FG: () => $, Go: () => K, Ix: () => C, KK: () => Q, PO: () => A, RS: () => q, Xn: () => G, ZO: () => O, cS: () => N, d3: () => E, jQ: () => W, jm: () => H, lw: () => D, of: () => V, p5: () => U, qH: () => X, qx: () => R, sJ: () => Y, tq: () => k, zX: () => Z });
            n(571372);
            var r = n(202784),
                s = n(961111),
                o = n.n(s),
                c = n(400752),
                i = n(565058),
                a = n(987809),
                u = n(668260),
                d = n(459679),
                l = n(176340),
                f = n(877293),
                p = n(656898),
                v = n(420182),
                m = n(42134),
                h = n(390387),
                w = n(536387),
                g = n(526250),
                _ = n(563781),
                b = n(358572),
                S = n(625555),
                x = n(4427),
                y = n(900147);
            const k = (0, a.xu)((e) => (0, w.K9)((t) => o()(() => t(v.dd).withEndpoint(l.Z).byId(e, { skipListeners: !1 }), { retries: 2, minTimeout: 1e3, maxTimeout: 1500 })));
            function Z(e) {
                return (0, c.Dv)(k(e));
            }
            const I = (0, a.xu)((e) =>
                (0, i.cn)((t) => {
                    const n = t(k(e).resolved);
                    return !!n && (n.state === u.default.SpaceState.Running || ((n.state === u.default.SpaceState.Ended || n.state === u.default.SpaceState.TimedOut) && n.is_space_available_for_replay));
                }),
            );
            function E(e) {
                const t = (0, c.Dv)(I(e)),
                    n = (0, c.Dv)(m.lR),
                    s = (0, c.b9)(k(e)),
                    o = (0, c.b9)(p.lo),
                    i = (0, c.b9)(M);
                r.useEffect(() => {
                    if (!t) return;
                    i(e);
                    const r = setInterval(
                        () => {
                            s().then((e) => {
                                e && o(e);
                            });
                        },
                        n ? 5e3 : 15e3,
                    );
                    return () => {
                        clearInterval(r);
                    };
                }, [e, i, s, t, n, o]);
            }
            const M = (0, i.cn)(null, (e, t, n) => {
                const r = e(k(n).resolved);
                r && t(p.lo, r);
            });
            function D(e) {
                const t = Z(e);
                if (!t) throw new Error("expected space to be defined");
                return t;
            }
            const j = (0, a.xu)((e) =>
                    (0, i.cn)((t) => {
                        const n = t(k(e).resolved);
                        if (!n) throw new Error("expected space to be defined");
                        return n;
                    }),
                ),
                R = (0, i.cn)((e) => {
                    const t = e(m.rm);
                    return t ? (e(j(t)).title ?? t) : "";
                }),
                P = (0, a.xu)((e) => (0, i.cn)((t) => t(j(e)).title));
            function C(e) {
                return (0, c.Dv)(P(e));
            }
            const L = (0, a.xu)((e) => (0, i.cn)((t) => t(k(e).resolved)?.media_key)),
                O = (0, a.xu)((e) =>
                    (0, i.cn)((t) => {
                        const n = t(k(e).resolved),
                            r = (0, h._h)(t(v.qc).getState());
                        switch (n?.conversation_controls) {
                            case y.iY.InvitedOnly:
                                return !!n?.mentioned_users?.map((e) => e.rest_id).includes(r);
                            case y.iY.FollowedOnly:
                                return !!n?.followed_by_host;
                            case y.iY.Everyone:
                                return !0;
                            default:
                                return !1;
                        }
                    }),
                ),
                T = (0, i.cn)((e) => {
                    const t = e(m.rm);
                    if (!t) return !1;
                    const n = e(k(t).resolved);
                    return n?.conversation_controls === y.iY.InvitedOnly;
                }),
                Y = (0, a.xu)((e) =>
                    (0, i.cn)((t) => {
                        const n = t(v.dd),
                            r = t(L(e));
                        if (!r) throw new Error("media key not found");
                        return n
                            .withEndpoint(f.Z)
                            .fetchLiveVideoStreamStatus({ mediaKey: r })
                            .then((e) => e.chatToken);
                    }),
                ),
                K = (0, a.xu)((e) =>
                    (0, _.O)(async (t) => {
                        const n = t(S.yj);
                        if (t(x.MG)) {
                            if (!n.initialized) {
                                const r = await t(Y(e)),
                                    { access_token: s } = await t(S.F6).accessChat(r);
                                return await n.initialize(s), n;
                            }
                        } else if (!n.initialized) return await n.waitInitialized(), n;
                        return n;
                    }),
                ),
                B = (0, a.xu)((e) => (0, w.K9)((t) => t(K(e)).then((n) => n.getCallStatus(e, t(m.fU))))),
                q = (0, i.cn)((e) => {
                    const t = e(m.rm);
                    return t ? (e(B(t).resolved)?.guest_sessions ?? []) : [];
                }),
                F = (0, i.cn)((e) => new Set(e(q).map(({ twitter_user_id: e }) => e))),
                N = (0, i.cn)((e) => {
                    const t = new Map();
                    return (
                        e(q).forEach((e) => {
                            void 0 !== e.guest_participant_id && t.set(e.guest_participant_id, e);
                        }),
                        t
                    );
                }),
                $ = (0, i.cn)((e) => {
                    const t = new Map();
                    return (
                        e(q).forEach((e) => {
                            void 0 !== e.guest_user_id && t.set(e.guest_user_id, e);
                        }),
                        t
                    );
                }),
                z = (0, i.cn)((e) => {
                    const t = new Map();
                    return (
                        e(q).forEach((e) => {
                            t.set(e.session_uuid, e);
                        }),
                        t
                    );
                }),
                A = (0, a.xu)((e) => (0, i.cn)((t) => t(z).get(e)?.guest_participant_id)),
                U = (0, i.cn)((e) => {
                    const t = e(q).find((t) => t.guest_user_id === e(S.t9));
                    return t?.is_employee ?? !1;
                }),
                J = (0, a.xu)((e) =>
                    (0, w.K9)((t) =>
                        t(B(e)).then(({ guest_sessions: e }) => {
                            const n = (0, h._h)(t(v.qc).getState());
                            if (e) return (0, d.Z)(e, ({ session_uuid: e, twitter_user_id: t }) => (t === n ? e : void 0));
                        }),
                    ),
                ),
                H = (0, i.cn)(null, (e, t, n) => {
                    const r = e(S.yj),
                        s = e(J(n).resolved) ?? [];
                    return Promise.all(s.map((e) => r.endStream({ session_uuid: e })));
                }),
                V = (e) => {
                    const t = (0, c.Dv)(m.lR),
                        n = (0, c.b9)(B(e)),
                        s = !!(0, c.Dv)(k(e)),
                        o = (0, c.oR)();
                    r.useEffect(() => {
                        if (s && t) {
                            n();
                            const e = setInterval(() => {
                                n();
                            }, 3e3);
                            return () => clearInterval(e);
                        }
                    }, [s, n, t, o]);
                },
                W = (0, w.K9)((e) => {
                    const t = e(x.sB);
                    if (t) return e(S.F6).getConference(t);
                }),
                G = (0, b.u)((e) => (e(W), e(W.resolved)?.attendees_twitter_user_ids)),
                X = (0, g.v)((e, t) => {
                    e(W);
                    const n = setInterval(() => {
                        t(W);
                    }, 3e4);
                    return () => {
                        clearInterval(n);
                    };
                }),
                Q = (0, i.cn)((e) => {
                    const t = e(m.rm);
                    if (!t) return;
                    const n = e(k(t).resolved);
                    return n ? n.host?.user_id : void 0;
                });
        },
        622388: (e, t, n) => {
            n.d(t, { C: () => l });
            var r = n(516951),
                s = n(585454),
                o = n(526250),
                c = n(251836),
                i = n(625555),
                a = n(790997),
                u = n(302217),
                d = n(509599);
            const l = (0, o.v)((e, t) => {
                    const n = [t(f), t(p), t(v)];
                    return () => {
                        n.forEach((e) => e());
                    };
                }),
                f = (0, s.h)(
                    () => d.RS,
                    (e, t, n, r) => {
                        const s = n.map((e) => e.guest_user_id),
                            o = r.map((e) => e.guest_user_id),
                            c = new Set(s),
                            a = new Set(o);
                        c.add(e(i.t9)), a.add(e(i.t9));
                        const d = o.filter((e) => !c.has(e));
                        d.length && e(u.Zd).log({ newSessions: JSON.stringify(d) });
                        const l = s.filter((e) => !a.has(e));
                        l.length && e(u.Zd).log({ removedSessions: JSON.stringify(l) });
                    },
                ),
                p = (0, o.v)((e, t) => {
                    const n = e(a.kD) ?? null;
                    return e(u.Zd).log({ presentation: n }), r.Z;
                }),
                v = (0, o.v)((e, t) => {
                    const n = !!e(c.mb);
                    return e(u.Zd).log({ isScreenShare: n }), r.Z;
                });
        },
        520197: (e, t, n) => {
            n.d(t, { A6: () => a, m1: () => i });
            n(136728);
            var r = n(202784),
                s = n(565058),
                o = n(400752),
                c = n(551423);
            function i(e, t, n) {
                const r = (0, s.cn)([]),
                    o = (0, s.cn)(!1),
                    c = (0, s.cn)(!1);
                return (0, s.cn)(null, (s, i, a) => {
                    if ((i(r, (e) => e.concat(a)), !s(o) && !s(c)))
                        return (
                            setTimeout(() => {
                                i(c, !1), u();
                            }, n),
                            void i(c, !0)
                        );
                    function u() {
                        const n = s(r);
                        i(r, []);
                        const c =
                            n.length > 1
                                ? (function (e, t) {
                                      const n = new Map();
                                      return e.reduce((e, r) => {
                                          const s = t(r),
                                              o = n.get(s);
                                          if (o) Object.assign(o, r);
                                          else {
                                              const t = { ...r };
                                              n.set(s, t), e.push(t);
                                          }
                                          return e;
                                      }, []);
                                  })(n, t)
                                : n;
                        i(o, !0),
                            e(s, i, c).finally(() => {
                                s(r).length ? u() : i(o, !1);
                            });
                    }
                });
            }
            function a(e = 200) {
                const t = (0, c.r)(),
                    n = (0, c.r)();
                function s(r) {
                    const s = (0, o.oR)();
                    return () => {
                        const o = s.get(t);
                        o && (o(), s.set(t, void 0));
                        const c = o ? (s.get(n) ?? r()) : r();
                        return (
                            s.set(n, c),
                            () => {
                                if (null === e) c(), s.set(n, void 0), s.set(t, void 0);
                                else {
                                    const r = setTimeout(() => {
                                        c(), s.set(n, void 0), s.set(t, void 0);
                                    }, e);
                                    s.set(t, () => {
                                        clearTimeout(r), s.set(t, void 0);
                                    });
                                }
                            }
                        );
                    };
                }
                return {
                    useEffect: function (e) {
                        r.useEffect(s(e), [e]);
                    },
                    useLayoutEffect: function (e) {
                        r.useLayoutEffect(s(e), [e]);
                    },
                };
            }
        },
        261703: (e, t, n) => {
            n.d(t, { D: () => v, U: () => p });
            n(571372);
            var r = n(614983),
                s = n.n(r),
                o = n(565058),
                c = n(741810),
                i = n(42134),
                a = n(484633),
                u = n(625555),
                d = n(790997),
                l = n(712612),
                f = n(509599);
            const p = (0, o.cn)(null, async (e, t, n) => {
                    const r = await c.E.createBroadcast(n);
                    if (!r?.broadcast) return Promise.reject(new Error("Broadcast call did not return a broadcast!"));
                    const s = e(u.yj);
                    await s.initialize(r.access_token);
                    const o = r.broadcast.id,
                        i = n.conversation_controls || 0,
                        a = await e((0, f.Go)(o));
                    return await a.setSpaceSettings(o, i, n.topics), r;
                }),
                v = (0, o.cn)(null, async (e, t, n) => {
                    const { broadcastOptions: r, conversationControls: o, title: c } = n;
                    t(i.cI, a.Q.host);
                    const f = e(u.F6),
                        p = await f.createBroadcast(r);
                    if (!p?.broadcast) return { audioSpaceId: "", mediaKey: "" };
                    const v = p.broadcast.id,
                        m = p.access_token;
                    t(u.re, "");
                    const h = e(u.yj);
                    await h.initialize(m);
                    const w = { roomID: p.room_id, streamName: p.stream_name, vidManToken: p.credential, janusURL: p.webrtc_gw_url, isAudioOnly: !0, isPrivate: !1, guestServicesSessionUuid: "" };
                    t(d.YX, w), t(l.Dy, !0), await t(d.$R, { spaceId: v, negotiate: !1, createRoom: !0 });
                    const g = e(d.kw),
                        _ = e(d.Eg);
                    return s()(g, "Could not create space due to lack of publisherId"), await f.publishBroadcast({ broadcast_id: v, webrtc_handle_id: _.config.handlerId, webrtc_session_id: _.config.janusSessionId, janus_publisher_id: g, janus_room_id: v, status: c, topics: r.topics, conversation_controls: o }), await t(u.TM, { broadcast_id: v, twitter_user_ids: [p.broadcast.twitter_id] }), { audioSpaceId: v, mediaKey: p.broadcast.media_key };
                });
        },
        333259: (e, t, n) => {
            n.d(t, { $7: () => c, aB: () => o, mr: () => i });
            var r = n(726499),
                s = n(214407);
            const o = r.Z,
                c = { background: "background", active: "active" };
            function i() {
                return (0, s.q)(
                    ({ check: e, query: t }) => {
                        const { remove: n } = o.addEventListener("change", () => {
                            e(o.currentState);
                        });
                        return () => n();
                    },
                    () => o.currentState,
                );
            }
        },
        445250: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = (e, t, n) => {
                const r = [...e];
                if (e.length > 0) {
                    const e = r[t];
                    r.splice(t, 1), r.splice(n, 0, e);
                }
                return r;
            };
        },
        659322: (e, t, n) => {
            e.exports = n.p + "noise-suppressor.worklet.666eba9a.js";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1.cd91ea4a.js.map
