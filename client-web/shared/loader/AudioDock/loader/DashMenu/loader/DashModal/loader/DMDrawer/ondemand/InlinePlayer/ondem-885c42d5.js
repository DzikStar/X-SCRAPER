"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"],
    {
        645708: (e, n, t) => {
            t.d(n, { GG: () => E, Lv: () => b, _3: () => _, bq: () => D, dB: () => y, vM: () => g, x0: () => x });
            var s = t(202784),
                i = t(565058),
                c = t(400752),
                o = t(154003),
                r = t(674132),
                d = t.n(r),
                a = t(360816),
                u = t(516951),
                l = t(420182),
                f = t(333259),
                p = t(359127),
                m = t(495707),
                h = t(526250),
                v = t(251836);
            const g = (0, i.cn)(),
                b = (0, i.cn)((e) => !!e(g));
            function _() {
                (0, h.N)(Z);
                const e = (0, c.b9)(w);
                s.useEffect(() => () => e(), [e]);
            }
            const w = (0, i.cn)(null, (e, n) => {
                    const t = e(g);
                    t && (n(R, void 0), t.close(), n(g, void 0));
                }),
                y = (0, i.cn)(null, (e, n) => {
                    e(g)?.opener.focus();
                }),
                k = s.createElement(a.default, null);
            function x() {
                const e = (0, c.b9)(A),
                    n = s.useCallback(() => {
                        e();
                    }, [e]);
                return s.createElement(o.ZP, { "aria-label": S, borderColor: "transparent", color: "text", hoverLabel: I, icon: k, onPress: n, size: "medium" });
            }
            const S = d().f027fed8,
                I = { label: S },
                Z = (0, h.v)((e, n) => {
                    const { remove: t } = f.a.addEventListener("change", (e) => {
                        e === f.$.active && n(w);
                    });
                    return () => t();
                }),
                M = (0, i.cn)(),
                R = (0, i.cn)(null, (e, n, t) => {
                    e(M)?.fn(), n(M, t);
                }),
                A = (0, i.cn)(null, async (e, n) => {
                    if (e(g) || !p.zI) return;
                    const t = e(l.f0),
                        { dispose: s, dpip: i } = await (0, p.Q$)({ options: { width: 400, height: 400 }, featureSwitches: t });
                    n(g, i),
                        i.addEventListener("pagehide", () => {
                            n(g, void 0);
                        }),
                        s && n(M, { fn: s });
                }),
                E = (0, h.v)((e, n) => (e(v.mb) && n(P), u.Z)),
                P = (0, i.cn)(null, (e, n) => {
                    const { remove: t } = f.a.addEventListener("change", (e) => {
                        e === f.$.background && n(A), t();
                    });
                    setTimeout(() => {
                        t();
                    }, 500);
                });
            function D() {
                const e = (0, c.b9)(A);
                (0, m.E)(() => {
                    e();
                });
            }
        },
        4427: (e, n, t) => {
            t.d(n, { MG: () => g, MM: () => M, Qg: () => b, Uk: () => A, Xk: () => w, bu: () => _, fJ: () => R, oK: () => y, pv: () => k, rK: () => I, sB: () => S });
            var s = t(202784),
                i = t(565058),
                c = t(400752),
                o = t(987809),
                r = t(776342),
                d = t(516951),
                a = t(741810),
                u = t(614646),
                l = t(396963),
                f = t(163889),
                p = t(536387),
                m = t(526250),
                h = t(790997),
                v = t(509599);
            const g = (0, i.cn)(!1);
            function b() {
                return (0, c.Dv)(g);
            }
            function _() {
                const e = (0, c.b9)(g);
                e(!0),
                    s.useLayoutEffect(
                        () => (
                            e(!0),
                            () => {
                                e(!1);
                            }
                        ),
                        [e],
                    );
            }
            const w = (0, o.xu)((e) => (0, p.K9)(() => a.E.joinConference(e).then(({ spaces_id: e }) => e))),
                y = (0, i.cn)(null, (e, n, t) => n(w(t)));
            function k(e) {
                return (0, c.Dv)(w(e));
            }
            const x = (0, i.cn)(),
                S = (0, i.cn)((e) => e(x));
            function I(e) {
                const n = (0, c.b9)(x);
                s.useLayoutEffect(
                    () => (
                        n(e),
                        () => {
                            n(void 0);
                        }
                    ),
                    [e, n],
                );
            }
            const Z = (0, o.xu)((e) =>
                (0, i.cn)((n) =>
                    n(w(e)).then(
                        () => !0,
                        (e) => {
                            if (e instanceof u.$ && [403, 412].includes(e.status)) return !1;
                            throw e;
                        },
                    ),
                ),
            );
            function M() {
                const e = (0, l.nY)();
                return (0, c.Dv)(Z(e));
            }
            const R = (0, i.cn)(!1);
            function A() {
                (0, m.N)(E);
            }
            const E = (0, m.v)((e, n) => {
                const t = e(S);
                if (!t) return d.Z;
                const s = e(w(t).resolved);
                if (!s) return d.Z;
                const i = e((0, v.tq)(s).resolved);
                return i
                    ? (i.state === r.default.SpaceState.TimedOut &&
                          ((0, f.Hj)("conference: timeout after join", { level: "warning" }),
                          n(y, t).then((t) => {
                              e(R) && n(h.Rz, t);
                          })),
                      d.Z)
                    : d.Z;
            });
        },
        340140: (e, n, t) => {
            t.d(n, { c: () => s });
            t(136728);
            function s(e, n, t) {
                const s = n ? t.isTrue("spaces_conference_opus_dtx_enabled") : t.isTrue("spaces_dtx_opus_dtx_enabled");
                if (!s) return e;
                const i = e.split(/\r?\n/),
                    c = [],
                    o = [],
                    r = [];
                for (let e = 0; e < i.length; e++) {
                    const n = i[e];
                    if ((n.startsWith("m=") && (o.push(e), r.push(new Map())), 0 === o.length)) c.push(n);
                    else {
                        const e = /^a=rtpmap:([0-9]+) ([a-z0-9]+)\//gi.exec(n);
                        e && r[r.length - 1].set(e[1], e[2]);
                    }
                }
                for (let e = 0; e < o.length; e++) {
                    const n = e === o.length - 1 ? i.length : o[e + 1];
                    for (let t = o[e]; t < n; t++) {
                        const n = i[t],
                            o = /^a=fmtp:([0-9]+) /g.exec(n);
                        o && s && "opus" === r[e].get(o[1]) ? c.push(n.concat(";usedtx=1")) : c.push(n);
                    }
                }
                return c.join("\r\n");
            }
        },
        900147: (e, n, t) => {
            t.d(n, { Bx: () => o, iY: () => i });
            var s = t(18873);
            const i = Object.freeze({ Everyone: 2, FollowedOnly: 1, InvitedOnly: 0 }),
                c = Object.freeze({ All: 0, Employees: 1, Subscribers: 2 }),
                o = { app_component: "audio-room", content_type: s.zc.AUDIO, conversation_controls: i.InvitedOnly, description: "", height: 1080, is_360: !1, is_space_available_for_clipping: !1, is_space_available_for_replay: !1, is_webrtc: !0, languages: [], narrow_cast_space_type: c.All, region: "us-west-1", replaykit_app_bundle: "", replaykit_app_name: "", requires_psp_version: [], scheduled_start_time: 0, source: "", ticket_group_id: "", tickets_total: 0, topics: [], width: 1920 };
        },
        790997: (e, n, t) => {
            t.d(n, { $R: () => he, B$: () => tt, Bz: () => hn, Cr: () => Cn, De: () => vn, Dg: () => Yn, E3: () => An, Eg: () => He, Gz: () => yn, Hs: () => yt, M6: () => Pt, Mh: () => Zt, My: () => xn, Q6: () => ct, Rz: () => kt, Sk: () => ve, UQ: () => wn, Xm: () => pt, YX: () => Fe, Yq: () => Ln, Z8: () => sn, ZD: () => Xe, bq: () => mn, d4: () => ze, ee: () => jn, f: () => bn, gu: () => ge, jo: () => St, kD: () => kn, kw: () => tn, l5: () => Se, n0: () => Je, nX: () => ln, pI: () => It, qx: () => xe, r1: () => ke, tB: () => Ze, u1: () => Vn, uV: () => at, xQ: () => Nn, xZ: () => Ie, yA: () => Jn });
            t(136728);
            var s = t(565058),
                i = t(400752),
                c = t(987809),
                o = t(326399),
                r = t(516951),
                d = t(2138),
                a = t(459679),
                u = t(730086),
                l = t(662678),
                f = t(358809),
                p = t(456766),
                m = t(759013),
                h = t(400915),
                v = t(219442),
                g = t(420182),
                b = t(42134),
                _ = t(484633),
                w = t(610214),
                y = t(25252),
                k = t(253547),
                x = t(445250),
                S = t(536387),
                I = t(526250),
                Z = t(811322),
                M = t(396636),
                R = t(908599),
                A = t(608925),
                E = t(358572),
                P = t(24466),
                D = t(108922),
                T = t(613533),
                j = t(802222),
                L = t(159573),
                C = t(934871),
                N = t(254810),
                q = t(251836),
                z = t(582129),
                Y = t(625555),
                G = t(139613),
                U = t(835515),
                B = t(405070),
                O = t(94751),
                V = t(41931),
                $ = t(176559),
                Q = t(645708),
                X = t(4427),
                F = t(44952),
                K = t(688327),
                J = t(758614),
                H = t(942428),
                W = t(212142),
                ee = t(228510),
                ne = t(680747),
                te = t(302217),
                se = t(712612),
                ie = t(729418),
                ce = t(949725),
                oe = t(217220),
                re = t(838859),
                de = t(895229),
                ae = t(611702),
                ue = t(825177),
                le = t(509599),
                fe = t(622388),
                pe = t(520197);
            const me = (0, s.cn)(null, (e, n) => {
                    const t = e(Y.F6),
                        s = e(Y.yj),
                        i = e(X.sB),
                        c = e(b.rm);
                    i && c && n(re.CN, { conferenceId: i, broadcastId: c, proxseeAuth: t.getAuth(), roomConfig: e(Fe), janusSessionId: e(Xe), guestServicesAuth: { guestServiceToken: s.guestServiceToken, chatToken: s.chatmanAccessToken, guestServicesSessionUuid: e(Y.re) } });
                }),
                he = (0, T.G)(async (e, n, t) => {
                    const { createRoom: s, negotiate: i, spaceId: c } = t,
                        o = e(ge),
                        r = e(b.lR);
                    if (o && r) return;
                    n((0, H.E$)((0, H.Rq)(t.spaceId)).init), n((0, H.NY)((0, H.Rq)(t.spaceId)).init), e(V.v) && (n(C.eR), n(N.Qf)), n(h.ri, !1);
                    const d = n(ce.gP);
                    if (i) {
                        const t = await n(Y.Bl, c),
                            s = e(Y.re),
                            i = { roomID: c, streamName: c, vidManToken: t.janus_jwt, janusURL: t.webrtc_gw_url, guestServicesSessionUuid: s, isAudioOnly: !0, isPrivate: !1 };
                        n(Fe, i);
                    }
                    (!e(X.MG) || e(le.RS).length > 6) && n(se.Dy, !0),
                        await d,
                        n(bt.add, () => {
                            (e(Y.yj).initialized = !1), n((0, le.Go)(c));
                        }),
                        n(jt),
                        n(bt.add, n(O._$)),
                        n(bt.add, () => n(V.S, !1)),
                        n(bt.add, () => n(U.lV, 1)),
                        await n(be, s);
                }),
                ve = (0, s.cn)(null, async (e, n, t) => {
                    const { role: s } = t,
                        i = e(ge),
                        c = e(b.lR);
                    (i && c) || (n(h.ri, !1), await n(ce.gP), n(_e), n(b.cI, s));
                }),
                ge = (0, s.cn)(!1),
                be = (0, s.cn)(null, async (e, n, t) => {
                    await n(Qe), n(me);
                    const s = e(de.lY);
                    s ? (n(_t.add, () => n(We)), await n(nn).then((e) => n(He, e))) : await n(en), n(cn), s || n(Tt), n(Dt), n(Me), s || n(an);
                    const i = e(He);
                    if (!s && t) {
                        const n = e(w._Z);
                        await i.createRoom({ withDummyPublisher: n });
                    }
                    await e(He).joinRoomAsPublisher(), n(_t.add, n(Qn)), n(_t.add, n(oe.Y5)), n(ge, !0), n(_t.add, () => n(ge, !1)), n(we);
                }),
                _e = (0, s.cn)(null, async (e, n) => {
                    n(_t.add, () => n(We)), await n(nn).then((e) => n(Je, e)), n(cn), n(Et), n(Tt), n(an), n(ge, !0), n(_t.add, () => n(ge, !1));
                }),
                we = (0, s.cn)(null, (e, n) => {
                    const t = e(g.f0),
                        s = e(w.gc),
                        i = !t.isTrue("rweb_conf_multi_video_enabled");
                    if (!s || i) n(Ge);
                    else {
                        const e = n(De, { trackAtom: C.nq, transceiverAtom: Te, isSimulcast: !0 }),
                            t = n(De, { trackAtom: q.mb, transceiverAtom: je, isPresentation: !0, isSimulcast: !0 });
                        n(bt.add, () => {
                            e(), t();
                        });
                    }
                    return n(Ae);
                });
            function ye(e) {
                return "disconnected" === e || "failed" === e;
            }
            const ke = (0, s.cn)((e) => e(xe).filter((n) => !e(bn(n)))),
                xe = (0, s.cn)([]),
                Se = (0, c.xu)((e) =>
                    (0, s.cn)((n) => {
                        const t = n(ke);
                        return e < t.length + 1 ? (0, o.Z)(t.slice(), [(e) => n(yn(e))], ["desc"]).slice(0, Math.max(e - 2, 1)) : t;
                    }),
                ),
                Ie = (0, s.cn)((e) => e(ke).filter((n) => e(yn(n)))),
                Ze = (0, S.dX)((e) => (0, s.cn)(() => (0, c.xu)((e) => (0, s.cn)()), r.Z)),
                Me = (0, s.cn)(null, (e, n) => {
                    n(Oe, []);
                    const t = e(ce.bP);
                    function s(s = vt) {
                        e(Re).enqueue(async () => {
                            const i = await t.createOffer(s);
                            n(ie.UT, i), await t.setLocalDescription(i);
                            const c = e(He);
                            await c.sendSdpOffer(i, void 0, s.iceRestart);
                            const o = e(b.rm);
                            o && n((0, H.E$)((0, H.Rq)(o)).finish);
                        });
                    }
                    (t.onnegotiationneeded = (function (e) {
                        let n;
                        return () => {
                            clearTimeout(n), (n = setTimeout(e));
                        };
                    })(() => {
                        s();
                    })),
                        n(lt, !1),
                        n(_t.add, n(ee.g)),
                        n(_t.add, n($.V)),
                        e(X.MG) && n(bt.add, n(Q.GG)),
                        t.addEventListener("iceconnectionstatechange", function (i) {
                            const c = t.iceConnectionState;
                            ye(c) ? ("stable" === t.signalingState ? (e(rn).handleFlakyNetwork(), s({ iceRestart: !0 }), n(lt, !1)) : n(lt, !0)) : "connected" === c && n(lt, !1);
                        }),
                        t.addEventListener("signalingstatechange", function (i) {
                            const c = t.iceConnectionState;
                            "stable" === t.signalingState && ye(c) && e(lt) && (s({ iceRestart: !0 }), n(lt, !1));
                        });
                });
            const Re = (0, s.cn)(() => new L.z()),
                Ae = (0, s.cn)(null, async (e, n) => {
                    await n(se.F3);
                    const t = e(G.Ny);
                    if (!t) return;
                    const s = n($e, { track: t });
                    n(Ee, s), n(bt.add, n(Pe));
                }),
                Ee = (0, s.cn)(),
                Pe =
                    ((0, Z.X)((e) => (0, s.cn)()),
                    (0, I.v)((e, n) => {
                        const t = e(G.Ny);
                        if (t) {
                            const n = e(Ee);
                            n?.sender.replaceTrack(t);
                        }
                        return r.Z;
                    })),
                De = (0, I.v)((e, n, t) => {
                    const { isPresentation: s, isSimulcast: i, trackAtom: c, transceiverAtom: o } = t,
                        d = e(c),
                        a = e(g.zE).get(o);
                    if (!a && d) {
                        const e = n($e, { track: d, isSimulcast: i, isPresentation: s });
                        n(o, e), n(bt.add, () => n(o, void 0));
                    } else if (a && (d ? (a.sender.replaceTrack(d), "inactive" === a.direction && (a.direction = "sendonly")) : (a.direction = "inactive"), s && a.mid)) {
                        const n = a.mid,
                            t = e(He),
                            s = d ? "presentation" : "";
                        e(te.Zd).log({ description: s }), e(Be).enqueue(() => t.configure({ descriptions: [{ mid: n, description: s }] }));
                    }
                    return r.Z;
                }),
                Te = (0, s.cn)(),
                je = (0, s.cn)(),
                Le = (0, P.L)((e) => e(Te)?.mid, 1e3),
                Ce = (0, P.L)((e) => e(je)?.mid, 1e3),
                Ne = (0, Z.X)((e) => (0, s.cn)((n) => (n(C.nq) === e ? Le : Ce))),
                qe = (0, Z.X)((e) =>
                    (0, s.cn)((n) => {
                        const t = n(n(Ne(e)).value);
                        if (t) return n(ue.F)[t];
                    }),
                );
            function ze(e) {
                (0, I.N)(ue.m);
                const n = (0, i.Dv)(Ne(e));
                return (0, I.N)(n.sub), (0, i.Dv)(qe(e));
            }
            const Ye = (0, s.cn)(),
                Ge = (0, s.cn)(null, (e, n) => {
                    const t = (0, d.Z)(
                        () => {
                            const t = e(q.mb),
                                s = e($.Z),
                                i = e(Ue),
                                c = i && (i === t || i === s),
                                o = e(Ye);
                            if (!o && i) {
                                const t = n($e, { track: i, isSimulcast: e(le.C), isPresentation: c });
                                n(Ye, t),
                                    n(bt.add, () => {
                                        n(Ye, void 0);
                                    });
                            } else if (o && (i ? (o.sender.replaceTrack(i), "inactive" === o.direction && (o.direction = "sendonly")) : (o.direction = "inactive"), o.mid)) {
                                const n = o.mid,
                                    t = e(He),
                                    s = c ? "presentation" : "";
                                e(te.Zd).log({ description: s }), e(Be).enqueue(() => t.configure({ descriptions: [{ mid: n, description: s }] }));
                            }
                        },
                        100,
                        { leading: !1 },
                    );
                    t();
                    const s = e(g.zE).sub(Ue, t);
                    n(bt.add, s);
                }),
                Ue = (0, s.cn)((e) => e(J.eN)?.[0]?.track ?? e(B.U)),
                Be = (0, s.cn)(() => new L.z()),
                Oe = (0, s.cn)([]),
                Ve = (0, s.cn)(null, (e, n) => {
                    e(Oe).forEach((e) => e()), n(Oe, []);
                }),
                $e = (0, s.cn)(null, (e, n, t) => {
                    const { isPresentation: s, isSimulcast: i, track: c } = t,
                        o = e(ce.bP).addTransceiver(c, {
                            direction: "sendonly",
                            sendEncodings: i
                                ? [
                                      { rid: "h", maxBitrate: 2e6 },
                                      { rid: "m", maxBitrate: 5e5, scaleResolutionDownBy: 2 },
                                      { rid: "l", maxBitrate: 25e4, scaleResolutionDownBy: 4 },
                                  ]
                                : void 0,
                        });
                    return (
                        s &&
                            n(Oe, (n) =>
                                n.concat(() => {
                                    const n = o.mid;
                                    if (!n) return;
                                    const t = e(He),
                                        s = "presentation";
                                    e(te.Zd).log({ description: s }), e(Be).enqueue(() => t.configure({ descriptions: [{ mid: n, description: s }] }));
                                }),
                            ),
                        o
                    );
                }),
                Qe = (0, s.cn)(null, (e, n) =>
                    e(Ke)
                        .create()
                        .then(({ data: e }) => {
                            n(Xe, e.id);
                        }),
                ),
                Xe = (0, S.Yh)(),
                Fe = (0, S.Yh)(),
                Ke = (0, s.cn)((e) => {
                    const { janusURL: n, vidManToken: t } = e(Fe);
                    return new f.G({ janusUrl: n, vidManToken: t, store: e(g.zE) });
                }),
                Je = (0, S.Yh)(),
                He = (0, S.Yh)(),
                We = (0, s.cn)(null, (e, n) => {
                    n(xe, []), n(Ze.reset), n(nt, void 0), n(tt, void 0), n(oe.Kg), n(tn, void 0);
                }),
                en = (0, s.cn)(null, (e, n) => (n(_t.add, () => n(We)), Promise.all([n(nn).then((e) => n(He, e)), n(nn).then((e) => n(Je, e))]))),
                nn = (0, s.cn)(null, (e, n) => {
                    const t = e(Ke),
                        s = e(Fe),
                        i = e(Xe);
                    return t.attachVideoRoom(i).then((n) => {
                        if ("success" !== n.janus) throw n;
                        const t = n.data.id;
                        return new m.x({ janusSessionId: i, handlerId: t, periscopeUserId: e(Y.t9), vidManToken: s.vidManToken, roomId: s.roomID, streamName: s.streamName, janusURL: s.janusURL, guestServicesSessionUuid: s.guestServicesSessionUuid }, e(g.zE), e(de.p_) ? void 0 : e(v.r));
                    });
                }),
                tn = (0, s.cn)(),
                sn = (0, c.xu)((e) => (0, s.cn)((n) => !e || n(tn) === e)),
                cn = (0, s.cn)(null, (e, n) => {
                    const t = new p.h({
                        handlers: {
                            onJsep: (e, t) => {
                                n(Hn, e);
                            },
                            onPublisherId: (e) => n(tn, e),
                            onLeave: (e) => n(Wn, e),
                            onNewPublishers: (e) => n(rt, e),
                            onAttached: (e) => n(In, e),
                            onDummyMetadata: (e) => n($n, e),
                            onJanusRestart: () => {
                                n(Xn);
                            },
                        },
                        janusApi: e(Ke),
                        janusSessionId: e(Xe),
                        store: e(g.zE),
                        transactionStore: e(v.r),
                        filter: e(on),
                    });
                    if ((e(de.p_) || t.start(), e(de.lY))) {
                        const e = t.listen((e) => {
                            n(re.AE, e);
                        });
                        n(_t.add, e);
                    }
                    n(rn, t), n(_t.add, () => t.stop());
                }),
                on = (0, s.cn)((e) => (e(de.lY) ? (n) => n.sender === e(He).config.handlerId && !n.plugindata?.data.publishers : e(de.p_) ? (n) => n.sender === e(Je).config.handlerId || !!n.plugindata?.data.publishers || !!(n.plugindata?.data.unpublished ?? n.plugindata?.data.leaving ?? n.plugindata?.data.kicked) : void 0)),
                rn = (0, S.Yh)(),
                dn = (0, M.Q)(
                    () => xe,
                    (e, n, t) => {
                        const s = e(ln(t)),
                            i = s?.map((e) => n(ae.Ai, t, e));
                        return () => {
                            i?.forEach((e) => e());
                        };
                    },
                ),
                an = (0, s.cn)(null, (e, n) => {
                    n(_t.add, () => {
                        n(un.reset);
                    }),
                        n(Rt),
                        n(_t.add, n(dn)),
                        n(_t.add, n(F.Op)),
                        n(_t.add, n(Fn)),
                        n(_t.add, () => n(F.Cw));
                    const t = e(dt);
                    n(_t.add, () => t.clear()), n(_t.add, () => n(En.reset)), n(_t.add, n(st));
                    const s = e(ce.V3);
                    (s.ontrack = (t) => {
                        const s = t.transceiver.mid;
                        if (!s) return;
                        const i = t.track;
                        n(En(s), i), "audio" !== i.kind || e(V.v) || n(U.sq, { track: i, mid: s });
                        const c = e(b.rm);
                        c && n((0, W.A5)((0, H.Rq)(c)).finish);
                    }),
                        s.addEventListener("iceconnectionstatechange", function (t) {
                            const i = s.iceConnectionState;
                            if (ye(i))
                                if ("stable" === s.signalingState) {
                                    const t = e(Je);
                                    e(rn).handleFlakyNetwork(), t.restartIce(), n(ft, !1);
                                } else n(ft, !0);
                            else "connected" === i && n(ft, !1);
                        }),
                        s.addEventListener("signalingstatechange", function (t) {
                            const i = s.iceConnectionState;
                            if ("stable" === s.signalingState && ye(i) && e(ft)) {
                                const t = e(Je);
                                e(rn).handleFlakyNetwork(), t.restartIce(), n(ft, !1);
                            }
                        });
                }),
                un = (0, S.dX)((e) => (0, s.cn)()),
                ln = (0, c.xu)((e) =>
                    (0, E.u)((n) => {
                        const t = n(un(e));
                        if (t) return (0, a.Z)(t.streams, ({ disabled: e, mid: n, type: t }) => ("video" !== t || e ? void 0 : n));
                    }),
                ),
                fn = (0, c.xu)((e) =>
                    (0, E.u)((n) => {
                        const t = n(un(e));
                        if (!t) return;
                        const s = (0, a.Z)(t.streams, ({ description: e, disabled: n, mid: t, type: s }) => ("video" !== s || n ? void 0 : t));
                        if (s.length < 2 || e !== n(Yn)) return s;
                        const i = n(Gn);
                        return i ? s.filter((e) => e !== i) : s;
                    }),
                ),
                pn = (0, c.xu)((e) =>
                    (0, E.u)((n) => {
                        const t = n(un(e));
                        if (!t) return;
                        const s = n(Gn),
                            i = n(Yn);
                        return (0, a.Z)(t.streams, ({ disabled: n, mid: t, type: c }) => ("video" !== c || n || (i && i === e && s && s !== t) ? void 0 : t));
                    }),
                ),
                mn = (0, c.xu)((e) => (0, s.cn)((n) => n(un(e))?.periscope_user_id ?? (n(sn(e)) ? n(Y.t9) : void 0))),
                hn = (0, c.xu)((e) => (0, s.cn)()),
                vn = (0, c.xu)((e) =>
                    (0, s.cn)((n) => {
                        if (e === n(Y.t9)) {
                            const e = n(tn);
                            if (e) return e;
                        }
                        const t = n(hn(e));
                        return t || gn++;
                    }),
                );
            let gn = 100;
            const bn = (0, c.xu)((e) => (0, s.cn)((n) => n(un(e))?.dummy)),
                _n = (0, s.cn)(null, (e, n, { feed: t, mid: s }) => e(Sn).find(({ feed_id: e, feed_mid: n }) => e === t && n === s)),
                wn = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            const s = t(un(e)),
                                i = s?.streams.filter(({ disabled: e, type: n }) => "video" === n && !e);
                            if (s && i?.length)
                                return (0, u.Z)(i, (e) => {
                                    const i = s.id,
                                        c = t(Sn).find(({ feed_id: e, feed_mid: t }) => e === i && t === n)?.mid;
                                    return { feed: i, feedMid: n, mid: c, simulcast: e.simulcast };
                                });
                        }),
                    ),
                ),
                yn = (0, c.xu)((e) =>
                    (0, s.cn)((n) => {
                        const t = e && n(bn(e)) ? n(Yn) : e;
                        if (!t || n(sn(e))) return !!n(J.eN)?.length;
                        const s = n(un(t));
                        return s?.streams.some(({ disabled: e, type: n }) => "video" === n && !e) ?? !1;
                    }),
                ),
                kn = (0, s.cn)((e) =>
                    e(ke).find((n) => {
                        const t = e(un(n));
                        return t?.streams.some(({ description: e, disabled: n, type: t }) => "video" === t && "presentation" === e && !n);
                    }),
                ),
                xn = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            if (bn(e)) {
                                const n = t(Yn),
                                    s = t(Gn);
                                if (n && s && !t(bn(n)) && n !== e) return t(xn(n)(s));
                            }
                            return !!t(un(e))?.streams.find(({ description: e, disabled: t, mid: s, type: i }) => !t && s === n && "presentation" === e && "video" === i);
                        }),
                    ),
                ),
                Sn = (0, s.cn)([]),
                In = (0, s.cn)(null, (e, n, t) => {
                    const s = t.filter(({ active: e }) => e);
                    n(Sn, s);
                }),
                Zn = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            const s = t(Mn)?.get(e);
                            if (!s) return;
                            const i = (0, u.Z)(s, (e) => (e.active && e.feed_mid === n ? e.mid : void 0));
                            return i ? t(En(i)) : void 0;
                        }),
                    ),
                ),
                Mn = (0, s.cn)((e) => {
                    const n = new Map(),
                        t = e(Sn);
                    for (const e of t) {
                        if (!e.active) continue;
                        const t = n.get(e.feed_id) ?? [];
                        t.push(e), n.set(e.feed_id, t);
                    }
                    return n;
                }),
                Rn = (0, c.xu)((e) =>
                    (0, E.u)((n) => {
                        const t = n(Mn);
                        return t.get(e)?.map(({ mid: e }) => e) ?? [];
                    }),
                ),
                An = (0, s.cn)((e) => {
                    const n = e(nt);
                    if (!n) return [];
                    const t = e(un(n));
                    if (!t) return [];
                    return (0, a.Z)(t.streams, ({ disabled: e, mid: n, type: t }) => ("audio" !== t || e ? void 0 : n)).map((t) => e(Zn(n)(t)));
                }),
                En = (0, S.dX)((e) => (0, s.cn)()),
                Pn = (0, c.xu)((e) =>
                    (0, E.u)((n) => {
                        const t = n(Rn(e));
                        return t ? (t.sort(), t.map((e) => n(En(e))).filter(Boolean)) : [];
                    }),
                ),
                Dn = (0, c.xu)((e) => (0, E.u)((n) => n(Pn(e)).filter(({ kind: e }) => "audio" === e))),
                Tn = (0, c.xu)((e) => (0, E.u)((n) => n(Pn(e)).filter(({ kind: e }) => "video" === e))),
                jn = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            const s = t(Mn)
                                ?.get(e)
                                ?.find(({ feed_mid: e }) => e === n);
                            if (s) return t(En(s.mid));
                        }),
                    ),
                ),
                Ln = (0, c.xu)((e) =>
                    (0, E.u)((n) => {
                        const t = n(fn(e));
                        return t ? (0, a.Z)(t, (t) => ({ feedMid: t, track: n(Zn(e)(t)) })) : [];
                    }),
                ),
                Cn = (0, c.xu)((e) =>
                    (0, E.u)((n) => {
                        const t = n(pn(e));
                        return t ? (0, a.Z)(t, (t) => ({ feedMid: t, track: n(Zn(e)(t)) })) : [];
                    }),
                ),
                Nn = (0, c.xu)((e) => (0, s.cn)((n) => n(Dn(e))[0] ?? n(On(e)))),
                qn = (0, c.xu)((e) => (0, D.J)(3e3)),
                zn = (0, s.cn)(null, (e, n, t) => {
                    const s = e(xe).indexOf(t);
                    if (-1 === s) return;
                    if (s < 3) return;
                    if (e(qn(t))) return;
                    n(qn(t), !0);
                    const i = e(Rn(t));
                    i?.forEach((e) => n(U.S$, e, s)), n(xe, (e) => (0, x.Z)(e, s, 0));
                }),
                Yn = (0, s.cn)(),
                Gn = (0, s.cn)(),
                Un = (0, s.cn)({}),
                Bn = (0, s.cn)(new Map()),
                On = (0, c.xu)((e) => (0, s.cn)((n) => n(Bn).get(e))),
                Vn = (0, s.cn)([]),
                $n = (0, s.cn)(null, (e, n, t) => {
                    const s = {},
                        i = new Map(),
                        c = e(nt),
                        o = [];
                    for (const r of t)
                        if ("video" === r.t) {
                            const t = r.feed ?? e(hn(r.uid));
                            t && !e(bn(t)) ? (n(Yn, t), n(Gn, r.mid)) : (n(Yn, void 0), n(Gn, void 0));
                        } else if ("audio" === r.t) {
                            const n = r.feed ?? e(hn(r.uid));
                            if ((o.push(n), n)) {
                                if (c && r.uid !== e(Y.t9)) {
                                    const t = e(Pn(c))[r.tr];
                                    t && i.set(n, t);
                                }
                                s[n] = 1 - r.lvl / 255;
                            }
                        }
                    n(Vn, o), n(Un, s), n(Bn, i);
                }),
                Qn = (0, A.G)(
                    () => Vn,
                    (e, n, { added: t }) => {
                        const s = e(Kn);
                        if (e(k.f)) for (const e of t) e && s.has(e) && n(zn, e);
                    },
                ),
                Xn = (0, s.cn)(null, async (e, n) => {
                    const t = e(b.rm);
                    t && (await n(yt, { spaceId: t }));
                }),
                Fn = (0, I.v)((e, n) => {
                    e(U.Z4);
                    const t = e(nt);
                    if (!t) return r.Z;
                    const s = e(Rn(t));
                    return s?.filter((n) => "audio" === e(En(n))?.kind).forEach((e, t) => n(U.S$, e, t)), r.Z;
                }),
                Kn = (0, s.cn)((e) => new Set(e(ke))),
                Jn = (0, c.xu)((e) => (0, s.cn)((n) => n(Un)[e])),
                Hn = (0, s.cn)(null, async (e, n, t) => {
                    if ("answer" === t.type) {
                        const s = e(ce.bP);
                        n(ie.hF, t), s.setRemoteDescription(t), n(Ve);
                    } else if ("offer" === t.type) {
                        n(ie.t8, t);
                        const s = e(ce.V3);
                        await s.setRemoteDescription(t);
                        const i = await s.createAnswer(gt);
                        n(ie.Qr, i), await s.setLocalDescription(i);
                        return e(Je).sendSdpAnswer(i);
                    }
                }),
                Wn = (0, s.cn)(null, (e, n, t) => {
                    if (e(sn(t))) {
                        const t = e(b.rm);
                        if (t)
                            return void (e(X.MG)
                                ? n(K.R, t)
                                : n(yt, { spaceId: t, wasKicked: !0 }).finally(() => {
                                      n(b.cI, _.Q.listener);
                                  }));
                    }
                    n(un(t), void 0), n(xe, (e) => e.filter((e) => e !== t));
                    e(dt).delete(t);
                }),
                et = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            if (t(X.MG)) {
                                return !t(bn(n)) || "video" === e;
                            }
                            const s = t(bn(n));
                            return "video" === e ? !s : s;
                        }),
                    ),
                ),
                nt = (0, s.cn)(),
                tt = (0, s.cn)(),
                st = (0, I.v)((e, n) => {
                    const t = e(tt);
                    return t && !e(Kn).has(t) && n(tt, void 0), r.Z;
                }),
                it = (0, s.cn)((e) => !!e(Ie).length),
                ct = (0, s.cn)((e) => e(tt) ?? (e(q.mb) || (e(X.MG) && !e(ke).length) || (e(y.Y) && !e(it)) ? e(tn) : void 0) ?? e(nt) ?? e(ke)[0]),
                ot = (0, s.cn)(!1),
                rt = (0, s.cn)(null, (e, n, t) => {
                    const s = e(X.MG);
                    t.forEach((e) => {
                        n(un(e.id), e), n(hn(e.periscope_user_id), e.id), e.dummy && (n(nt, e.id), n(bt.add, () => n(nt, void 0)));
                    });
                    const i = t.map((e) => e.id);
                    n(xe, (e) => {
                        const n = i.filter((n) => !e.includes(n));
                        return e.concat(n);
                    });
                    const c = t.flatMap(({ dummy: t, id: i, streams: c }) => {
                        return (function (e) {
                            const { isConferencing: n, isDummy: t, publisherId: s, setSubstream: i, streams: c } = e;
                            return c.map(({ mid: e, simulcast: c, type: o }) => {
                                const r = n && "video" === o && c ? (t ? 2 : 1) : void 0;
                                return void 0 !== r && i(e, r), { feed: s, mid: e, substream: r, send: !0 };
                            });
                        })({ streams: c.filter(((o = i), (n) => !n.disabled && !e(et(n.type)(o)))), isConferencing: s, publisherId: i, isDummy: !!t, setSubstream: (t, s) => n(e(Ze(i))(t), s) });
                        var o;
                    });
                    if ((c.length && n(at, c), e(ot))) {
                        const s = e(dt),
                            i = t.flatMap(({ id: e, streams: n }) =>
                                (0, a.Z)(n, ({ disabled: n, mid: t }) => {
                                    if (n) {
                                        const n = s.get(e);
                                        if (n?.includes(t)) return { feed: e, mid: t, unsub: !0 };
                                    }
                                }),
                            );
                        i.length && n(at, i);
                    }
                }),
                dt = (0, s.cn)(() => new Map()),
                at = (0, pe.m1)(
                    (e, n, t) => {
                        const s = e(dt),
                            [i, c] = (0, l.G)(t, (e) => !!e.unsub),
                            [o, r] = (0, l.Z)(c, (e) => s.get(e.feed)?.includes(e.mid) ?? !1),
                            d = [];
                        if (r.length) {
                            const t = e(Je);
                            if (e(ot)) {
                                const e = t.subscribeNewStreams(r);
                                d.push(e);
                            } else {
                                n(ot, !0), n(bt.add, () => n(ot, !1)), n(ut);
                                const e = t.joinRoomAsSubscriber(r);
                                d.push(e);
                            }
                            for (const e of r) {
                                const n = s.get(e.feed) ?? [];
                                e.mid && (n.push(e.mid), s.set(e.feed, n));
                            }
                        }
                        if (o.length) {
                            const t = (0, a.Z)(o, ({ feed: e, mid: t, send: s, substream: i }) => {
                                const c = n(_n, { feed: e, mid: t });
                                return c ? { mid: c.mid, send: s, substream: i } : void 0;
                            });
                            if (t.length) {
                                const n = e(Je).configure({ streams: t });
                                d.push(n);
                            }
                        }
                        if (i.length) {
                            const n = i.map(({ feed: e, mid: n }) => ({ feed: e, mid: n })),
                                t = e(Je).updateStreams({ unsubscribe: n });
                            d.push(t);
                            for (const e of n) {
                                const { feed: n, mid: t } = e;
                                let i = s.get(n) ?? [];
                                (i = i.filter((e) => e !== t)), s.set(n, i);
                            }
                        }
                        return Promise.all(d);
                    },
                    ({ feed: e, mid: n }) => `${e}-${n}`,
                    100,
                ),
                ut = (0, s.cn)(null, (e, n) => {
                    const t = e(b.rm);
                    t && (n((0, W.A5)((0, H.Rq)(t)).init), n((0, W.xi)((0, H.Rq)(t)).init));
                    const s = n(ne.Z);
                    n(bt.add, s);
                });
            const lt = (0, s.cn)(!1),
                ft = (0, s.cn)(!1),
                pt = (0, s.cn)(null, (e, n) => {
                    const t = e(xe),
                        s = e(tn);
                    return (s ? [[s, () => n(mt)]] : []).concat((0, a.Z)(t, (e) => [e, () => n(ht, e)]));
                }),
                mt = (0, s.cn)(null, (e, n) =>
                    e(ce.bP)
                        .getStats()
                        .then((e) => [...e.values()]),
                ),
                ht = (0, s.cn)(null, (e, n, t) => {
                    const s = e(ce.V3),
                        i = [...e(Tn(t)), ...e(Dn(t))].filter(Boolean);
                    return Promise.all(i.map((e) => s.getStats(e).then((e) => [...e.values()]))).then((e) => e.flat());
                }),
                vt = { offerToReceiveAudio: !1, offerToReceiveVideo: !1 },
                gt = { offerToReceiveAudio: !0, offerToReceiveVideo: !0 },
                bt = (0, j.h)(),
                _t = (0, j.h)(),
                wt = (0, s.cn)(null, (e, n) => {
                    n(Y.re.reset), n(ce.Og), n(Xe.reset), n(Fe.reset), n(Je.reset), n(He.reset), n(rn.reset);
                }),
                yt = (0, R.Y)((e, n, { spaceId: t, spaceUserRole: s, wasKicked: i }) => {
                    n(X.fJ, !1), n(te.oN);
                    const c = e(b.cI) ?? s,
                        o = [],
                        r = [];
                    e(h.ri) && o.push(n(Y.Vp)), c === _.Q.cohost && o.push(n(Y.iq)), c === _.Q.host || i ? r.push(Promise.all(o).then(() => {})) : r.push(Promise.all(o).then(() => n(Y.NG, t)));
                    return (
                        e(ge) && r.push(n(xt)),
                        e(de.lY) && n(re.c),
                        Promise.allSettled(r).then(() => {
                            n(bt.disposeAll), n(wt);
                        })
                    );
                }),
                kt = (0, s.cn)(null, (e, n, t) => (n(te.oN), e(de.lY) && n(re.c), n(bt.disposeAll), n(wt), n(z.HQ, t))),
                xt = (0, s.cn)(null, (e, n) => {
                    if (e(de.p_))
                        return Promise.all([e(Je).leave(), n(W.CA)])
                            .then(r.Z, r.Z)
                            .then(() => {
                                n(_t.disposeAll), e(ce.V3).close();
                            });
                    if (e(de.lY))
                        return Promise.all([e(He).leave(), n(H.Ob)])
                            .then(() => i.destroy(c))
                            .then(r.Z, r.Z)
                            .then(() => {
                                n(_t.disposeAll), e(ce.bP).close();
                            });
                    const t = e(He),
                        s = e(Je),
                        i = e(Ke),
                        c = e(Xe);
                    return Promise.all([t.leave(), s.leave(), n(H.Ob), n(W.CA)])
                        .then(() => i.destroy(c))
                        .then(r.Z, r.Z)
                        .then(() => {
                            n(_t.disposeAll), e(ce.bP).close(), e(ce.V3).close();
                        });
                }),
                St = (0, s.cn)(null, (e, n, t, s) => {
                    const i = e(He),
                        { handlerId: c, janusSessionId: o } = i.config,
                        r = e(mn(s));
                    if (r) return n(Y.fP, { spaceId: t, janusSessionId: o, periscopeUserId: r, handlerId: c, janusTargetId: s });
                }),
                It = (0, s.cn)(null, (e, n) => e(He).destroyRoom()),
                Zt = (0, s.cn)((e) =>
                    (0, o.Z)(
                        e(ke).filter((n) => e(Yn) !== n),
                        [(n) => e(yn(n))],
                        ["desc"],
                    ),
                ),
                Mt = (0, s.cn)((e) => e(ke).flatMap((n) => e(Rn(n)) ?? [])),
                Rt = (0, s.cn)(null, (e, n) => {
                    let t = e(Mt);
                    const s = e(g.zE).sub(Mt, () => {
                        const s = e(Mt),
                            i = (function (e, n) {
                                const t = new Set(n),
                                    s = [];
                                for (const n of e) t.has(n) || s.push(n);
                                return s;
                            })(t, s);
                        for (const e of i) n(U.zb, e);
                        t = s;
                    });
                    n(bt.add, s);
                });
            const At = (0, s.cn)([]),
                Et = (0, s.cn)(null, (e, n) => {
                    e(At).forEach((n) => e(rn).handleResponse(n)), n(At, []);
                }),
                Pt = (0, s.cn)(null, (e, n, t) => {
                    if (!e(rn.isInit)) return void n(At, (e) => e.concat(t));
                    e(rn).handleResponse(t);
                }),
                Dt = (0, s.cn)(null, (e, n) => {
                    const t = e(ce.bP),
                        s = e(He);
                    t.onicecandidate = (e) => {
                        if (e.candidate) {
                            const n = e.candidate;
                            s.sendTrickleCandidate({ candidate: n.candidate, sdpMLineIndex: n.sdpMLineIndex, sdpMid: n.sdpMid });
                        }
                    };
                }),
                Tt = (0, s.cn)(null, (e, n) => {
                    const t = e(ce.V3),
                        s = e(Je);
                    t.onicecandidate = (e) => {
                        if (e.candidate) {
                            const n = e.candidate;
                            s.sendTrickleCandidate({ candidate: n.candidate, sdpMLineIndex: n.sdpMLineIndex, sdpMid: n.sdpMid });
                        }
                    };
                }),
                jt = (0, s.cn)(null, (e, n) => {
                    e(de.Fn) || n(bt.add, n(fe.C));
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5.bb1850aa.js.map
