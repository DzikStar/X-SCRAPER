"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"],
    {
        44952: (t, n, e) => {
            e.d(n, { A8: () => D, Cw: () => Z, Op: () => y, tF: () => g });
            var o = e(202784),
                r = e(400752),
                i = e(565058),
                c = e(987809),
                a = e(479817),
                s = e(393495),
                d = e(516951),
                u = e(610214),
                l = e(536387),
                _ = e(526250),
                p = e(396636),
                f = e(65178),
                m = e(246031),
                b = e(790997);
            function g(t, n, e) {
                const i = (0, r.b9)(k);
                o.useEffect(() => {
                    const o = t.current;
                    if (o) return i(o, n, e);
                }, [t, n, e, i]);
            }
            const w = (0, c.xu)((t) => (0, c.xu)((t) => (0, f.g)())),
                v = (0, _.v)((t, n, e, o) => {
                    const r = t(h(e)(o)),
                        i = t(D(e)(o));
                    if (!r) return i && n(t(I(e))(o), !1), d.Z;
                    const c = t(C(e)(o)) || t(u.bZ);
                    return c && !i ? n(j, { feedId: e, feedMid: o, send: !0 }) : !c && i && n(j, { feedId: e, feedMid: o, send: !1 }), d.Z;
                }),
                h = (0, c.xu)((t) => (0, c.xu)((n) => (0, i.cn)((e) => !!e((0, b.UQ)(t)(n))))),
                C = (0, c.xu)((t) => (0, c.xu)((n) => (0, i.cn)((e) => e(w(t)(n).get).includes(!0)))),
                y = (0, p.Q)(
                    () => b.qx,
                    (t, n, e) => {
                        const o = t((0, b.nX)(e)),
                            r = o?.map((t) => n(v, e, t));
                        return () => {
                            r?.forEach((t) => t());
                        };
                    },
                ),
                k = (0, _.v)((t, n, e, o, r) => {
                    if (o === t(b.kw)) return d.Z;
                    const { dispose: i, valueAtom: c } = n(w(o)(r).sub, !1),
                        u = setInterval(() => {
                            const t = e.getBoundingClientRect(),
                                o = a.Z.fromClientRect(t),
                                r = m.Z.root().getRect2D(),
                                i = !!s.Z.intersection(o, r);
                            n(c, i);
                        }, 1e3);
                    if (!window.IntersectionObserver)
                        return () => {
                            i(), clearInterval(u);
                        };
                    const l = new IntersectionObserver(
                        (t) => {
                            const [e] = t;
                            n(c, e.isIntersecting);
                        },
                        { threshold: 0 },
                    );
                    return (
                        l.observe(e),
                        () => {
                            l.disconnect(), i(), clearInterval(u);
                        }
                    );
                });
            const I = (0, l.dX)((t) => (0, i.cn)(() => (0, c.xu)((t) => (0, i.cn)(!1)), d.Z)),
                Z = (0, i.cn)(null, (t, n) => n(I.reset)),
                D = (0, c.xu)((t) => (0, c.xu)((n) => (0, i.cn)((e) => e(e(I(t))(n))))),
                j = (0, i.cn)(null, (t, n, { feedId: e, feedMid: o, send: r }) => {
                    const i = t((0, b.UQ)(e)(o));
                    if ((n(t(I(e))(o), r), i)) {
                        const { feed: e, feedMid: o } = i;
                        r ? (n(t((0, b.tB)(e))(o), 1), n(b.uV, [{ feed: e, mid: o, send: r, substream: 1 }])) : n(b.uV, [{ feed: e, mid: o, send: r }]);
                    }
                });
        },
        688327: (t, n, e) => {
            e.d(n, { Q: () => m, R: () => b });
            e(136728);
            var o = e(565058),
                r = e(840590),
                i = e(656898),
                c = e(420182),
                a = e(42134),
                s = e(869508),
                d = e(610214),
                u = e(811233),
                l = e(908599),
                _ = e(41931),
                p = e(790997),
                f = e(758614);
            const m = (0, o.cn)(null, (t, n) => {
                    n(a.Ud), n(i.QG), t(d.dO).fn("exit"), n(f.M2);
                    const e = t(c.zE);
                    s.zP(e);
                }),
                b = (0, l.Y)((t, n, e) => {
                    (t(u.o3) || t(_.v)) && r.default.push(t(u.P));
                    const o = n(p.Hs, { spaceId: e });
                    return n(m), o.catch(() => {});
                });
        },
        758614: (t, n, e) => {
            e.d(n, { $t: () => p, M2: () => g, ZQ: () => m, eN: () => w, qb: () => l });
            var o = e(400752),
                r = e(565058),
                i = e(459679),
                c = e(934871),
                a = e(254810),
                s = e(251836),
                d = e(176559),
                u = e(645708);
            function l() {
                return (0, o.b9)(_);
            }
            const _ = (0, r.cn)(null, (t, n) => {
                n(c.yw);
            });
            (0, r.cn)(null, (t, n) => {
                n(c.eR);
            });
            function p() {
                return (0, o.b9)(f);
            }
            const f = (0, r.cn)(null, (t, n) => {
                n(u.dB), n(s.qp);
            });
            function m() {
                return (0, o.b9)(b);
            }
            const b = (0, r.cn)(null, (t, n) => {
                    n(s.vE);
                }),
                g = (0, r.cn)(null, (t, n) => {
                    n(a.Qf), n(c.eR), n(s.vE);
                }),
                w = (0, r.cn)((t) => {
                    const n = t(c.nq),
                        e = t(d.Z) ?? t(s.mb);
                    if (n || e)
                        return (0, i.Z)([{ track: e }, { isMirror: !0, track: n }], ({ isMirror: t, track: n }) => {
                            if (n) return { isMirror: t, track: n };
                        });
                });
        },
        942428: (t, n, e) => {
            e.d(n, { E$: () => g, NY: () => h, Ob: () => f, Rq: () => b, WG: () => C, k8: () => w });
            var o = e(251067),
                r = e(565058),
                i = e(987809),
                c = e(323265),
                a = e(42134),
                s = e(610214),
                d = e(811322),
                u = e(625555),
                l = e(790997),
                _ = e(949725),
                p = e(719610);
            const f = (0, r.cn)(null, (t, n) => {
                    const e = t(u.F6),
                        o = t(a.rm);
                    if (o) {
                        const t = n(m, o);
                        return e.webrtcBroadcastMeta(t);
                    }
                }),
                m = (0, r.cn)(null, (t, n, e) => {
                    const r = b(e);
                    return n(h(r).finish), { publish_ready_time_seconds: t(g(r).getTime), is_audio_only: !t(s._Z), slow_link_count: t(w(r).getCountAtom), ice_failed: t(v), broadcast_duration_seconds: t(h(r).getTime) ?? 0, broadcast_id: e, guest_session_uuid: t(u.re) || e, region: t(C), janus_room_id: t(l.YX).roomID, periscope_user_id: t(u.t9), twitter_user_id: t(p.tC), default_to_hydra_broadcast: !1, app_id: "rweb", app_name: "RWeb", app_type: "twitter", app_version: o.MK ?? "", device: c.ZP.deviceInfo.join(" "), platform: c.ZP.deviceId(), platform_version: (0, p.Vk)().toString() };
                }),
                b = (0, i.xu)((t) => (0, r.cn)()),
                g = (0, d.X)((t) => (0, p._m)()),
                w = (0, d.X)((t) => {
                    const n = (0, r.cn)(0),
                        e = (0, r.cn)((t) => t(n));
                    return { incrCountAtom: (0, r.cn)(null, (t, e) => e(n, (t) => t + 1)), getCountAtom: e };
                }),
                v = (0, r.cn)((t) => "failed" === t(_.bP).iceConnectionState),
                h = (0, d.X)((t) => (0, p._m)()),
                C = (0, r.cn)("us-west-1");
        },
        212142: (t, n, e) => {
            e.d(n, { A5: () => g, CA: () => f, xi: () => w });
            var o = e(251067),
                r = e(565058),
                i = e(987809),
                c = e(323265),
                a = e(42134),
                s = e(610214),
                d = e(811322),
                u = e(625555),
                l = e(790997),
                _ = e(949725),
                p = e(719610);
            const f = (0, r.cn)(null, (t, n) => {
                    const e = t(u.F6),
                        o = t(a.rm);
                    if (o) {
                        const t = n(m, o);
                        return e.webrtcPlaybackMeta(t);
                    }
                }),
                m = (0, r.cn)(null, (t, n, e) => {
                    const r = b(e);
                    return n(w(r).finish), { is_audio_only: !t(s._Z), time_to_first_frame_seconds: t(g(r).getTime) ?? 0, ice_failed: t(v), playback_duration_seconds: t(w(r).getTime) ?? 0, broadcast_id: e, guest_session_uuid: t(u.re) || e, janus_room_id: t(l.YX).roomID, periscope_user_id: t(u.t9), twitter_user_id: t(p.tC), app_id: "rweb", app_name: "RWeb", app_type: "twitter", app_version: o.MK ?? "", device: c.ZP.deviceInfo.join(" "), platform: c.ZP.deviceId(), platform_version: (0, p.Vk)().toString() };
                }),
                b = (0, i.xu)((t) => (0, r.cn)()),
                g = (0, d.X)((t) => (0, p._m)()),
                w = (0, d.X)((t) => (0, p._m)()),
                v =
                    ((0, d.X)((t) => {
                        const n = (0, r.cn)(0),
                            e = (0, r.cn)((t) => t(n));
                        return { incrCountAtom: (0, r.cn)(null, (t, e) => e(n, (t) => t + 1)), getCountAtom: e };
                    }),
                    (0, r.cn)((t) => "failed" === t(_.V3).iceConnectionState));
        },
        719610: (t, n, e) => {
            e.d(n, { Pr: () => l, Vk: () => p, _m: () => d, fj: () => u, tC: () => _ });
            var o = e(565058),
                r = e(730086),
                i = e(323265),
                c = e(420182),
                a = e(390387),
                s = e(499573);
            function d() {
                const t = (0, o.cn)(null),
                    n = (0, o.cn)();
                return {
                    init: (0, o.cn)(null, (t, e) => {
                        t(n) || e(n, Date.now());
                    }),
                    reset: (0, o.cn)(null, (e, o) => {
                        o(n, void 0), o(t, null);
                    }),
                    finish: (0, o.cn)(null, (e, o) => {
                        const r = e(n);
                        if (r && !e(t)) {
                            const n = Date.now();
                            o(t, n - r);
                        }
                    }),
                    getTime: (0, o.cn)((n) => n(t)),
                };
            }
            function u(t) {
                const n = (0, r.Z)(t.get("local-candidate"), (t) => t.relayProtocol);
                return n ? `turn-${n}` : (0, r.Z)(t.get("local-candidate"), (t) => t.protocol);
            }
            function l(t) {
                return (0, o.cn)(null, async (n, e) => {
                    const o = n(t),
                        r = Date.now();
                    return { stats: (0, s.x)(await o.getStats()), durationMs: Date.now() - r };
                });
            }
            const _ = (0, o.cn)((t) => {
                const n = t(c.qc);
                return (0, a._h)(n.getState()) ?? "";
            });
            function p() {
                switch (i.ZP.browserString()) {
                    case i.jl.EDGE:
                        return i.ZP.edgeVersion();
                    case i.jl.CHROME:
                        return i.ZP.chromeVersion();
                    case i.jl.SAFARI:
                        return i.ZP.safariVersion();
                    case i.jl.FIREFOX:
                        return i.ZP.firefoxVersion();
                    default:
                        return 0;
                }
            }
        },
        228510: (t, n, e) => {
            e.d(n, { g: () => _ });
            var o = e(565058),
                r = e(684565),
                i = e(730086),
                c = e(42134),
                a = e(610214),
                s = e(625555),
                d = e(790997),
                u = e(949725),
                l = e(719610);
            const _ = (0, o.cn)(null, (t, n) => {
                    n(f, Date.now()), n(b);
                    const e = setInterval(async () => {
                        const e = t(s.F6),
                            o = t(c.rm);
                        if (o) {
                            const t = await n(p, o);
                            await e.webrtcBroadcastPeriodicMeta(t);
                        }
                    }, 1e4);
                    return () => {
                        clearInterval(e);
                    };
                }),
                p = (0, o.cn)(null, async (t, n, e) => {
                    const { durationMs: o, stats: c } = await n(g),
                        u = t(f),
                        _ = Date.now(),
                        p = _ - u;
                    n(f, _);
                    const b = t(m),
                        w = (0, r.C)(c.get("transport"), (t) => t.bytesSent),
                        v = ((w - b) / (p / 1e3)) * 8;
                    return n(m, w), { is_audio_only: !t(a._Z), broadcast_bitrate_bps: v, available_bandwidth_bps: (0, r.C)(c.get("candidate-pair"), (t) => t.availableOutgoingBitrate), current_round_trip_time_ms: (0, r.C)(c.get("candidate-pair"), (t) => t.currentRoundTripTime), frame_width: (0, i.Z)(c.get("outbound-rtp"), (t) => ("video" === t.kind ? t.frameWidth : void 0)) ?? null, frame_height: (0, i.Z)(c.get("outbound-rtp"), (t) => ("video" === t.kind ? t.frameHeight : void 0)) ?? null, fps: (0, i.Z)(c.get("outbound-rtp"), (t) => ("video" === t.kind ? t.framesPerSecond : void 0)) ?? null, retransmissions_sent: (0, r.C)(c.get("outbound-rtp"), (t) => t.retransmittedPacketsSent), pli_count: (0, r.C)(c.get("outbound-rtp"), (t) => t.pliCount), nack_count: (0, r.C)(c.get("outbound-rtp"), (t) => t.nackCount), fir_count: (0, r.C)(c.get("outbound-rtp"), (t) => t.firCount), target_bitrate_bps: (0, r.C)(c.get("outbound-rtp"), (t) => t.targetBitrate), video_quality: (0, r.C)(c.get("outbound-rtp"), (t) => t.qpSum), broadcast_id: e, guest_session_uuid: t(s.re) || e, janus_room_id: t(d.YX).roomID, periscope_user_id: t(s.t9), twitter_user_id: t(l.tC), transport_protocol: (0, l.fj)(c) ?? "", quality_limitation: (0, i.Z)(c.get("outbound-rtp"), (t) => t.qualityLimitationReason) ?? null, period_duration_ms: p, time_to_collect_stats_ms: o };
                }),
                f = (0, o.cn)(0),
                m = (0, o.cn)(0),
                b = (0, o.cn)(null, async (t, n) => {
                    const { stats: e } = await n(g),
                        o = (0, r.C)(e.get("transport"), (t) => t.bytesSent);
                    n(m, o);
                }),
                g = (0, l.Pr)(u.bP);
        },
        680747: (t, n, e) => {
            e.d(n, { Z: () => p });
            var o = e(565058),
                r = e(65724),
                i = e(684565),
                c = e(42134),
                a = e(610214),
                s = e(625555),
                d = e(4427),
                u = e(790997),
                l = e(949725),
                _ = e(719610);
            const p = (0, o.cn)(null, (t, n) => {
                    n(m, Date.now()), n(g);
                    const e = setInterval(async () => {
                        const e = t(s.F6),
                            o = t(c.rm);
                        if (o) {
                            const t = await n(f, o);
                            await e.webrtcPlaybackPeriodicMeta(t);
                        }
                    }, 1e4);
                    return () => {
                        clearInterval(e);
                    };
                }),
                f = (0, o.cn)(null, async (t, n, e) => {
                    const { durationMs: o, stats: c } = await n(w),
                        d = t(m),
                        l = Date.now(),
                        p = l - d;
                    n(m, l);
                    const f = t(b),
                        g = (0, i.C)(c.get("transport"), (t) => t.bytesReceived),
                        h = ((g - f) / (p / 1e3)) * 8;
                    return n(b, g), { publisher_count: t(u.qx).length, total_received_bandwidth_bps: h, janus_room_id: t(u.YX).roomID, broadcast_id: e, periscope_user_id: t(s.t9), twitter_user_id: t(_.tC), period_duration_ms: p, time_to_collect_stats_ms: o, guest_session_uuid: t(s.re) || e, is_audio_only: !t(a._Z), playback_bitrate_bps: g, available_bandwidth_bps: (0, i.C)(c.get("candidate-pair"), (t) => t.availableIncomingBitrate), current_round_trip_time_ms: (0, i.C)(c.get("candidate-pair"), (t) => t.currentRoundTripTime), pli_count: (0, i.C)(c.get("inbound-rtp"), (t) => t.pliCount), nack_count: (0, i.C)(c.get("inbound-rtp"), (t) => t.nackCount), fir_count: (0, i.C)(c.get("inbound-rtp"), (t) => t.firCount), transport_protocol: (0, _.fj)(c) ?? "", audio_frame_jitter_buffer_delay_ms: Math.max(...(0, r.KM)(c.get("inbound-rtp"), (t) => ("audio" === t.kind ? t.jitterBufferDelay : void 0))), video_frame_jitter_buffer_delay_ms: Math.max(...(0, r.KM)(c.get("inbound-rtp"), (t) => ("video" === t.kind ? t.jitterBufferDelay : void 0))), audio_packets_lost_count: (0, i.C)(c.get("inbound-rtp"), (t) => ("audio" === t.kind ? t.packetsLost : void 0)), video_packets_lost_count: (0, i.C)(c.get("inbound-rtp"), (t) => ("video" === t.kind ? t.packetsLost : void 0)), video_frames_decoded_count: (0, i.C)(c.get("inbound-rtp"), (t) => ("video" === t.kind ? t.framesDecoded : void 0)), interframe_delay_max_ms: 0, is_full_screened: t(v), stream_period_duration_ms: p, time_to_collect_stream_stats_ms: o };
                }),
                m = (0, o.cn)(0),
                b = (0, o.cn)(0),
                g = (0, o.cn)(null, async (t, n) => {
                    const { stats: e } = await n(w),
                        o = (0, i.C)(e.get("transport"), (t) => t.bytesReceived);
                    n(b, o);
                }),
                w = (0, _.Pr)(l.V3),
                v = (0, o.cn)((t) => t(d.MG));
        },
        302217: (t, n, e) => {
            e.d(n, { oN: () => b, FF: () => g, Zd: () => l });
            e(136728), e(543673), e(240753), e(128399);
            var o = e(251067),
                r = e(565058),
                i = e(420182),
                c = e(42134),
                a = e(802222),
                s = e(4427),
                d = e(719610);
            function u(t, n) {
                return {
                    tracer: (function t(e) {
                        const o = window.crypto.randomUUID();
                        function r(t) {
                            const e = { ...t, ts: Date.now(), spanId: o };
                            n?.(e);
                        }
                        return (
                            r({ trace: "start", ...e }),
                            {
                                counter: function (t, n) {
                                    r({ counter: t, count: n });
                                },
                                log: function (t) {
                                    r({ message: t });
                                },
                                gauge: function (t) {
                                    r({ gauge: t });
                                },
                                traceStart: function (n) {
                                    return t({ ...n, parentSpanId: o });
                                },
                                traceEnd: function () {
                                    r({ trace: "end" });
                                },
                                spanId: o,
                            }
                        );
                    })({ ...t, parentSpanId: void 0 }),
                };
            }
            const l = (0, r.cn)((t) => {
                    const n = t(i.zE);
                    n.set(_.disposeAll), n.set(f, []);
                    const e = `Conference ${t(s.sB) ?? "<none>"}`,
                        { tracer: o } = u({ name: e }, (t) => n.set(m, t));
                    return n.set(p, o), o;
                }),
                _ = (0, a.h)(),
                p = (0, r.cn)(null, (t, n, e) => {
                    const o = (t) => {
                        e.log({ error: t.reason, unhandledPromiseRejection: !0 });
                    };
                    window.addEventListener("unhandledrejection", o);
                    n(_.add, () => {
                        window.removeEventListener("unhandledrejection", o);
                    });
                }),
                f = (0, r.cn)([]),
                m = (0, r.cn)(null, (t, n, e) => {
                    t(f).push(e);
                });
            (0, r.cn)(null, (t, n) => {
                !(function (t, n, e) {
                    const o = document.createElement("a");
                    (o.href = URL.createObjectURL(new Blob([t], { type: e }))), (o.download = n), o.click();
                })(
                    t(f)
                        .map((t) => JSON.stringify(t))
                        .join("\n"),
                    `conference-trace-${Date.now()}.jsonl`,
                    "application/jsonl",
                );
            });
            const b = (0, r.cn)(null, (t, n) => {
                    if ((0, o.fH)(o.vw.prod)) return;
                    const e = t(c.rm);
                    if (e) {
                        const o = t(d.tC);
                        n(w);
                        const r = t(f)
                            .map((t) => JSON.stringify(t))
                            .join("\n");
                        t(i.dd)
                            .fetchClient.dispatch(`https://ton.x.com/i/ton/data/web-logs/conferences/${e}/${o}.jsonl`, { method: "POST", headers: { "X-TON-Expires": new Date(Date.now() + 12096e5).toUTCString() }, credentials: "include", body: r })
                            .catch(() => {}),
                            n(f, []);
                    }
                }),
                g = (0, r.cn)(null, async (t, n, e) => {
                    if ((0, o.fH)(o.vw.prod)) return;
                    const r = t(s.sB);
                    if (e && r) {
                        const n = t(i.dd),
                            o = `https://ton.x.com/web-logs/conferences/conf-${r}.jsonl`,
                            c = `https://ton.x.com/i/ton/data/web-logs/conferences/conf-${r}.jsonl`;
                        let a = "";
                        try {
                            const t = await n.fetchClient.dispatch(o, { cache: "no-store" });
                            if (t.ok) {
                                const n = await t.text(),
                                    o = n.split("\n");
                                if (
                                    !!o.find((t) => {
                                        try {
                                            return JSON.parse(t).spaceId === e;
                                        } catch {
                                            return !1;
                                        }
                                    })
                                )
                                    return;
                                a = n;
                            } else if (404 !== t.status) return;
                        } catch {
                            return;
                        }
                        const s = `${a}${JSON.stringify({ ts: new Date().toISOString(), spaceId: e })}\n`;
                        await n.fetchClient.dispatch(c, { method: "POST", headers: { "X-TON-Expires": new Date(Date.now() + 12096e5).toUTCString() }, credentials: "include", body: s }).catch(() => {});
                    }
                }),
                w =
                    ((0, r.cn)(null, (t, n, e) => t(l).traceStart({ name: e })),
                    (0, r.cn)(null, (t, n) => {
                        t(l).traceEnd();
                    }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04.fab2b2ca.js.map
