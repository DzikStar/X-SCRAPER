"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"],
    {
        645708: (e, n, t) => {
            t.d(n, { GG: () => E, Lv: () => b, _3: () => w, bq: () => T, dB: () => y, vM: () => g, x0: () => x });
            var s = t(202784),
                i = t(565058),
                c = t(400752),
                o = t(154003),
                r = t(111677),
                d = t.n(r),
                a = t(360816),
                u = t(516951),
                l = t(420182),
                f = t(333259),
                m = t(359127),
                p = t(495707),
                h = t(526250),
                v = t(251836);
            const g = (0, i.cn)(),
                b = (0, i.cn)((e) => !!e(g));
            function w() {
                (0, h.N)(I);
                const e = (0, c.b9)(_);
                s.useEffect(() => () => e(), [e]);
            }
            const _ = (0, i.cn)(null, (e, n) => {
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
                return s.createElement(o.ZP, { "aria-label": S, borderColor: "transparent", color: "text", hoverLabel: Z, icon: k, onPress: n, size: "medium" });
            }
            const S = d().f027fed8,
                Z = { label: S },
                I = (0, h.v)((e, n) => {
                    const { remove: t } = f.aB.addEventListener("change", (e) => {
                        e === f.$7.active && n(_);
                    });
                    return () => t();
                }),
                M = (0, i.cn)(),
                R = (0, i.cn)(null, (e, n, t) => {
                    e(M)?.fn(), n(M, t);
                }),
                A = (0, i.cn)(null, async (e, n) => {
                    if (e(g) || !m.zI) return;
                    const t = e(l.f0),
                        { dispose: s, dpip: i } = await (0, m.Q$)({ options: { width: 400, height: 400 }, featureSwitches: t });
                    n(g, i),
                        i.addEventListener("pagehide", () => {
                            n(g, void 0);
                        }),
                        s && n(M, { fn: s });
                }),
                E = (0, h.v)((e, n) => (e(v.mb) && n(P), u.Z)),
                P = (0, i.cn)(null, (e, n) => {
                    const { remove: t } = f.aB.addEventListener("change", (e) => {
                        e === f.$7.background && n(A), t();
                    });
                    setTimeout(() => {
                        t();
                    }, 500);
                });
            function T() {
                const e = (0, c.b9)(A);
                (0, p.E)(() => {
                    e();
                });
            }
        },
        4427: (e, n, t) => {
            t.d(n, { MG: () => g, MM: () => M, Qg: () => b, Uk: () => A, Xk: () => _, bu: () => w, fJ: () => R, oK: () => y, pv: () => k, rK: () => Z, sB: () => S });
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
                m = t(536387),
                p = t(526250),
                h = t(790997),
                v = t(509599);
            const g = (0, i.cn)(!1);
            function b() {
                return (0, c.Dv)(g);
            }
            function w() {
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
            const _ = (0, o.xu)((e) => (0, m.K9)(() => a.E.joinConference(e).then(({ spaces_id: e }) => e))),
                y = (0, i.cn)(null, (e, n, t) => n(_(t)));
            function k(e) {
                return (0, c.Dv)(_(e));
            }
            const x = (0, i.cn)(),
                S = (0, i.cn)((e) => e(x));
            function Z(e) {
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
            const I = (0, o.xu)((e) =>
                (0, i.cn)((n) =>
                    n(_(e)).then(
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
                return (0, c.Dv)(I(e));
            }
            const R = (0, i.cn)(!1);
            function A() {
                (0, p.N)(E);
            }
            const E = (0, p.v)((e, n) => {
                const t = e(S);
                if (!t) return d.Z;
                const s = e(_(t).resolved);
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
            t.d(n, { $R: () => ve, B$: () => it, Bz: () => vn, Cr: () => Nn, De: () => gn, Dg: () => Gn, E3: () => En, Eg: () => We, Gz: () => kn, Hs: () => xt, M6: () => Dt, Mh: () => Rt, My: () => Sn, Q6: () => rt, Rz: () => St, Sk: () => ge, UQ: () => yn, Xm: () => ht, YX: () => Ke, Yq: () => Cn, Z8: () => cn, ZD: () => Fe, bq: () => hn, d4: () => Ye, ee: () => Ln, f: () => wn, gu: () => be, jo: () => It, kD: () => xn, kw: () => sn, l5: () => Ze, n0: () => He, nX: () => fn, pI: () => Mt, qx: () => Se, r1: () => xe, tB: () => Me, u1: () => Vn, uV: () => lt, xQ: () => qn, xZ: () => Ie, yA: () => Wn });
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
                m = t(456766),
                p = t(759013),
                h = t(400915),
                v = t(219442),
                g = t(420182),
                b = t(42134),
                w = t(484633),
                _ = t(610214),
                y = t(25252),
                k = t(253547),
                x = t(445250),
                S = t(663859),
                Z = t(536387),
                I = t(526250),
                M = t(811322),
                R = t(396636),
                A = t(908599),
                E = t(608925),
                P = t(358572),
                T = t(24466),
                D = t(108922),
                j = t(613533),
                L = t(802222),
                C = t(159573),
                N = t(934871),
                q = t(254810),
                z = t(251836),
                Y = t(582129),
                G = t(625555),
                B = t(139613),
                U = t(835515),
                O = t(405070),
                Q = t(94751),
                V = t(41931),
                $ = t(176559),
                X = t(645708),
                F = t(4427),
                K = t(44952),
                J = t(688327),
                H = t(758614),
                W = t(942428),
                ee = t(212142),
                ne = t(228510),
                te = t(680747),
                se = t(302217),
                ie = t(712612),
                ce = t(729418),
                oe = t(949725),
                re = t(217220),
                de = t(838859),
                ae = t(895229),
                ue = t(611702),
                le = t(825177),
                fe = t(509599),
                me = t(622388),
                pe = t(520197);
            const he = (0, s.cn)(null, (e, n) => {
                    const t = e(G.F6),
                        s = e(G.yj),
                        i = e(F.sB),
                        c = e(b.rm);
                    i && c && n(de.CN, { conferenceId: i, broadcastId: c, proxseeAuth: t.getAuth(), roomConfig: e(Ke), janusSessionId: e(Fe), guestServicesAuth: { guestServiceToken: s.guestServiceToken, chatToken: s.chatmanAccessToken, guestServicesSessionUuid: e(G.re) } });
                }),
                ve = (0, j.G)(async (e, n, t) => {
                    const { createRoom: s, negotiate: i, spaceId: c } = t,
                        o = e(be),
                        r = e(b.lR);
                    if (o && r) return;
                    n((0, W.E$)((0, W.Rq)(t.spaceId)).init), n((0, W.NY)((0, W.Rq)(t.spaceId)).init), e(V.v) && (n(N.eR), n(q.Qf)), n(h.ri, !1);
                    const d = n(oe.gP);
                    if (i) {
                        const t = await n(G.Bl, c),
                            s = e(G.re),
                            i = { roomID: c, streamName: c, vidManToken: t.janus_jwt, janusURL: t.webrtc_gw_url, guestServicesSessionUuid: s, isAudioOnly: !0, isPrivate: !1 };
                        n(Ke, i);
                    }
                    (!e(F.MG) || e(fe.RS).length > 6) && n(ie.Dy, !0),
                        await d,
                        n(_t.add, () => {
                            (e(G.yj).initialized = !1), n((0, fe.Go)(c));
                        }),
                        n(Ct),
                        n(_t.add, n(Q._$)),
                        n(_t.add, () => n(V.S, !1)),
                        n(_t.add, () => n(U.lV, 1)),
                        await n(we, s);
                }),
                ge = (0, s.cn)(null, async (e, n, t) => {
                    const { role: s } = t,
                        i = e(be),
                        c = e(b.lR);
                    (i && c) || (n(h.ri, !1), await n(oe.gP), n(_e), n(b.cI, s));
                }),
                be = (0, s.cn)(!1),
                we = (0, s.cn)(null, async (e, n, t) => {
                    await n(Xe), n(he);
                    const s = e(ae.lY);
                    s ? (n(yt.add, () => n(en)), await n(tn).then((e) => n(We, e))) : await n(nn), n(on), s || n(Lt), n(jt), n(Re), s || n(un);
                    const i = e(We);
                    if (!s && t) {
                        const n = e(_._Z);
                        await i.createRoom({ withDummyPublisher: n });
                    }
                    await e(We).joinRoomAsPublisher(), n(yt.add, n(Xn)), n(yt.add, n(Fn)), n(yt.add, n(re.Y5)), n(be, !0), n(yt.add, () => n(be, !1)), n(ye);
                }),
                _e = (0, s.cn)(null, async (e, n) => {
                    n(yt.add, () => n(en)), await n(tn).then((e) => n(He, e)), n(on), n(Tt), n(Lt), n(un), n(be, !0), n(yt.add, () => n(be, !1));
                }),
                ye = (0, s.cn)(null, (e, n) => {
                    const t = e(g.f0),
                        s = e(_.gc),
                        i = !t.isTrue("rweb_conf_multi_video_enabled");
                    if (!s || i) n(Be);
                    else {
                        const e = n(De, { trackAtom: N.nq, transceiverAtom: je, isSimulcast: !0 }),
                            t = n(De, { trackAtom: z.mb, transceiverAtom: Le, isPresentation: !0, isSimulcast: !0 });
                        n(_t.add, () => {
                            e(), t();
                        });
                    }
                    return n(Ee);
                });
            function ke(e) {
                return "disconnected" === e || "failed" === e;
            }
            const xe = (0, s.cn)((e) => e(Se).filter((n) => !e(wn(n)))),
                Se = (0, s.cn)([]),
                Ze = (0, c.xu)((e) =>
                    (0, s.cn)((n) => {
                        const t = n(xe);
                        return e < t.length + 1 ? (0, o.Z)(t.slice(), [(e) => n(kn(e))], ["desc"]).slice(0, Math.max(e - 2, 1)) : t;
                    }),
                ),
                Ie = (0, s.cn)((e) => e(xe).filter((n) => e(kn(n)))),
                Me = (0, Z.dX)((e) => (0, s.cn)(() => (0, c.xu)((e) => (0, s.cn)()), r.Z)),
                Re = (0, s.cn)(null, (e, n) => {
                    n(Qe, []);
                    const t = e(oe.bP);
                    function s(s = bt) {
                        e(Ae).enqueue(async () => {
                            const i = await t.createOffer(s);
                            n(ce.UT, i), await t.setLocalDescription(i);
                            const c = e(We);
                            await c.sendSdpOffer(i, void 0, s.iceRestart);
                            const o = e(b.rm);
                            o && n((0, W.E$)((0, W.Rq)(o)).finish);
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
                        n(mt, !1),
                        n(yt.add, n(ne.g)),
                        n(yt.add, n($.V)),
                        e(F.MG) && n(_t.add, n(X.GG)),
                        t.addEventListener("iceconnectionstatechange", function (i) {
                            const c = t.iceConnectionState;
                            ke(c) ? ("stable" === t.signalingState ? (e(dn).handleFlakyNetwork(), s({ iceRestart: !0 }), n(mt, !1)) : n(mt, !0)) : "connected" === c && n(mt, !1);
                        }),
                        t.addEventListener("signalingstatechange", function (i) {
                            const c = t.iceConnectionState;
                            "stable" === t.signalingState && ke(c) && e(mt) && (s({ iceRestart: !0 }), n(mt, !1));
                        });
                });
            const Ae = (0, s.cn)(() => new C.z()),
                Ee = (0, s.cn)(null, async (e, n) => {
                    await n(ie.F3);
                    const t = e(B.Ny);
                    if (!t) return;
                    const s = n($e, { track: t });
                    n(Pe, s), n(_t.add, n(Te));
                }),
                Pe = (0, s.cn)(),
                Te =
                    ((0, M.X)((e) => (0, s.cn)()),
                    (0, I.v)((e, n) => {
                        const t = e(B.Ny);
                        if (t) {
                            const n = e(Pe);
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
                        n(o, e), n(_t.add, () => n(o, void 0));
                    } else if (a && (d ? (a.sender.replaceTrack(d), "inactive" === a.direction && (a.direction = "sendonly")) : (a.direction = "inactive"), s && a.mid)) {
                        const n = a.mid,
                            t = e(We),
                            s = d ? "presentation" : "";
                        e(se.Zd).log({ description: s }), e(Oe).enqueue(() => t.configure({ descriptions: [{ mid: n, description: s }] }));
                    }
                    return r.Z;
                }),
                je = (0, s.cn)(),
                Le = (0, s.cn)(),
                Ce = (0, T.L)((e) => e(je)?.mid, 1e3),
                Ne = (0, T.L)((e) => e(Le)?.mid, 1e3),
                qe = (0, M.X)((e) => (0, s.cn)((n) => (n(N.nq) === e ? Ce : Ne))),
                ze = (0, M.X)((e) =>
                    (0, s.cn)((n) => {
                        const t = n(n(qe(e)).value);
                        if (t) return n(le.F)[t];
                    }),
                );
            function Ye(e) {
                (0, I.N)(le.m);
                const n = (0, i.Dv)(qe(e));
                return (0, I.N)(n.sub), (0, i.Dv)(ze(e));
            }
            const Ge = (0, s.cn)(),
                Be = (0, s.cn)(null, (e, n) => {
                    const t = (0, d.Z)(
                        () => {
                            const t = e(z.mb),
                                s = e($.Z),
                                i = e(Ue),
                                c = i && (i === t || i === s),
                                o = e(Ge);
                            if (!o && i) {
                                const t = n($e, { track: i, isSimulcast: e(fe.C), isPresentation: c });
                                n(Ge, t),
                                    n(_t.add, () => {
                                        n(Ge, void 0);
                                    });
                            } else if (o && (i ? (o.sender.replaceTrack(i), "inactive" === o.direction && (o.direction = "sendonly")) : (o.direction = "inactive"), o.mid)) {
                                const n = o.mid,
                                    t = e(We),
                                    s = c ? "presentation" : "";
                                e(se.Zd).log({ description: s }), e(Oe).enqueue(() => t.configure({ descriptions: [{ mid: n, description: s }] }));
                            }
                        },
                        100,
                        { leading: !1 },
                    );
                    t();
                    const s = e(g.zE).sub(Ue, t);
                    n(_t.add, s);
                }),
                Ue = (0, s.cn)((e) => e(H.eN)?.[0]?.track ?? e(O.U)),
                Oe = (0, s.cn)(() => new C.z()),
                Qe = (0, s.cn)([]),
                Ve = (0, s.cn)(null, (e, n) => {
                    e(Qe).forEach((e) => e()), n(Qe, []);
                }),
                $e = (0, s.cn)(null, (e, n, t) => {
                    const { isPresentation: s, isSimulcast: i, track: c } = t,
                        o = e(oe.bP).addTransceiver(c, {
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
                            n(Qe, (n) =>
                                n.concat(() => {
                                    const n = o.mid;
                                    if (!n) return;
                                    const t = e(We),
                                        s = "presentation";
                                    e(se.Zd).log({ description: s }), e(Oe).enqueue(() => t.configure({ descriptions: [{ mid: n, description: s }] }));
                                }),
                            ),
                        o
                    );
                }),
                Xe = (0, s.cn)(null, (e, n) =>
                    e(Je)
                        .create()
                        .then(({ data: e }) => {
                            n(Fe, e.id);
                        }),
                ),
                Fe = (0, Z.Yh)(),
                Ke = (0, Z.Yh)(),
                Je = (0, s.cn)((e) => {
                    const { janusURL: n, vidManToken: t } = e(Ke);
                    return new f.G({ janusUrl: n, vidManToken: t, store: e(g.zE) });
                }),
                He = (0, Z.Yh)(),
                We = (0, Z.Yh)(),
                en = (0, s.cn)(null, (e, n) => {
                    n(Se, []), n(Me.reset), n(st, void 0), n(it, void 0), n(re.Kg), n(sn, void 0);
                }),
                nn = (0, s.cn)(null, (e, n) => (n(yt.add, () => n(en)), Promise.all([n(tn).then((e) => n(We, e)), n(tn).then((e) => n(He, e))]))),
                tn = (0, s.cn)(null, (e, n) => {
                    const t = e(Je),
                        s = e(Ke),
                        i = e(Fe);
                    return t.attachVideoRoom(i).then((n) => {
                        if ("success" !== n.janus) throw n;
                        const t = n.data.id;
                        return new p.x({ janusSessionId: i, handlerId: t, periscopeUserId: e(G.t9), vidManToken: s.vidManToken, roomId: s.roomID, streamName: s.streamName, janusURL: s.janusURL, guestServicesSessionUuid: s.guestServicesSessionUuid }, e(g.zE), e(ae.p_) ? void 0 : e(v.r));
                    });
                }),
                sn = (0, s.cn)(),
                cn = (0, c.xu)((e) => (0, s.cn)((n) => !e || n(sn) === e)),
                on = (0, s.cn)(null, (e, n) => {
                    const t = new m.h({
                        handlers: {
                            onJsep: (e, t) => {
                                n(et, e);
                            },
                            onPublisherId: (e) => n(sn, e),
                            onLeave: (e) => n(nt, e),
                            onNewPublishers: (e) => n(at, e),
                            onAttached: (e) => n(In, e),
                            onDummyMetadata: (e) => n($n, e),
                            onJanusRestart: () => {
                                n(Kn);
                            },
                        },
                        janusApi: e(Je),
                        janusSessionId: e(Fe),
                        store: e(g.zE),
                        transactionStore: e(v.r),
                        filter: e(rn),
                    });
                    if ((e(ae.p_) || t.start(), e(ae.lY))) {
                        const e = t.listen((e) => {
                            n(de.AE, e);
                        });
                        n(yt.add, e);
                    }
                    n(dn, t), n(yt.add, () => t.stop());
                }),
                rn = (0, s.cn)((e) => (e(ae.lY) ? (n) => n.sender === e(We).config.handlerId && !n.plugindata?.data.publishers : e(ae.p_) ? (n) => n.sender === e(He).config.handlerId || !!n.plugindata?.data.publishers || !!(n.plugindata?.data.unpublished ?? n.plugindata?.data.leaving ?? n.plugindata?.data.kicked) : void 0)),
                dn = (0, Z.Yh)(),
                an = (0, R.Q)(
                    () => Se,
                    (e, n, t) => {
                        const s = e(fn(t)),
                            i = s?.map((e) => n(ue.Ai, t, e));
                        return () => {
                            i?.forEach((e) => e());
                        };
                    },
                ),
                un = (0, s.cn)(null, (e, n) => {
                    n(yt.add, () => {
                        n(ln.reset);
                    }),
                        n(Et),
                        n(yt.add, n(an)),
                        n(yt.add, n(K.Op)),
                        n(yt.add, n(Jn)),
                        n(yt.add, () => n(K.Cw));
                    const t = e(ut);
                    n(yt.add, () => t.clear()), n(yt.add, () => n(Pn.reset)), n(yt.add, n(ct));
                    const s = e(oe.V3);
                    function i() {
                        const t = s.iceConnectionState;
                        if (ke(t))
                            if ("stable" === s.signalingState) {
                                const t = e(He);
                                e(dn).handleFlakyNetwork(), t.restartIce(), n(pt, !1);
                            } else n(pt, !0);
                        else "connected" === t && n(pt, !1);
                    }
                    function c() {
                        const t = s.iceConnectionState;
                        if ("stable" === s.signalingState && ke(t) && e(pt)) {
                            const t = e(He);
                            e(dn).handleFlakyNetwork(), t.restartIce(), n(pt, !1);
                        }
                    }
                    (s.ontrack = (t) => {
                        const s = t.transceiver.mid;
                        if (!s) return;
                        const i = t.track;
                        if ((n(Pn(s), i), "audio" === i.kind))
                            if (e(V.v)) {
                                const e = new MediaStream();
                                e.addTrack(i), (new Audio().srcObject = e);
                            } else n(U.sq, { track: i, mid: s });
                        const c = e(b.rm);
                        c && n((0, ee.A5)((0, W.Rq)(c)).finish);
                    }),
                        s.addEventListener("iceconnectionstatechange", i),
                        n(yt.add, () => s.removeEventListener("iceconnectionstatechange", i)),
                        s.addEventListener("signalingstatechange", c),
                        n(yt.add, () => s.removeEventListener("signalingstatechange", c));
                }),
                ln = (0, Z.dX)((e) => (0, s.cn)()),
                fn = (0, c.xu)((e) =>
                    (0, P.u)((n) => {
                        const t = n(ln(e));
                        if (t) return (0, a.Z)(t.streams, ({ disabled: e, mid: n, type: t }) => ("video" !== t || e ? void 0 : n));
                    }),
                ),
                mn = (0, c.xu)((e) =>
                    (0, P.u)((n) => {
                        const t = n(ln(e));
                        if (!t) return;
                        const s = (0, a.Z)(t.streams, ({ description: e, disabled: n, mid: t, type: s }) => ("video" !== s || n ? void 0 : t));
                        if (s.length < 2 || e !== n(Gn)) return s;
                        const i = n(Bn);
                        return i ? s.filter((e) => e !== i) : s;
                    }),
                ),
                pn = (0, c.xu)((e) =>
                    (0, P.u)((n) => {
                        const t = n(ln(e));
                        if (!t) return;
                        const s = n(Bn),
                            i = n(Gn);
                        return (0, a.Z)(t.streams, ({ disabled: n, mid: t, type: c }) => ("video" !== c || n || (i && i === e && s && s !== t) ? void 0 : t));
                    }),
                ),
                hn = (0, c.xu)((e) => (0, s.cn)((n) => n(ln(e))?.periscope_user_id ?? (n(cn(e)) ? n(G.t9) : void 0))),
                vn = (0, c.xu)((e) => (0, s.cn)()),
                gn = (0, c.xu)((e) =>
                    (0, s.cn)((n) => {
                        if (e === n(G.t9)) {
                            const e = n(sn);
                            if (e) return e;
                        }
                        const t = n(vn(e));
                        return t || bn++;
                    }),
                );
            let bn = 100;
            const wn = (0, c.xu)((e) => (0, s.cn)((n) => n(ln(e))?.dummy)),
                _n = (0, s.cn)(null, (e, n, { feed: t, mid: s }) => e(Zn).find(({ feed_id: e, feed_mid: n }) => e === t && n === s)),
                yn = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            const s = t(ln(e)),
                                i = s?.streams.filter(({ disabled: e, type: n }) => "video" === n && !e);
                            if (s && i?.length)
                                return (0, u.Z)(i, (e) => {
                                    const i = s.id,
                                        c = t(Zn).find(({ feed_id: e, feed_mid: t }) => e === i && t === n)?.mid;
                                    return { feed: i, feedMid: n, mid: c, simulcast: e.simulcast };
                                });
                        }),
                    ),
                ),
                kn = (0, c.xu)((e) =>
                    (0, s.cn)((n) => {
                        const t = e && n(wn(e)) ? n(Gn) : e;
                        if (!t || n(cn(e))) return !!n(H.eN)?.length;
                        const s = n(ln(t));
                        return s?.streams.some(({ disabled: e, type: n }) => "video" === n && !e) ?? !1;
                    }),
                ),
                xn = (0, s.cn)((e) =>
                    e(xe).find((n) => {
                        const t = e(ln(n));
                        return t?.streams.some(({ description: e, disabled: n, type: t }) => "video" === t && "presentation" === e && !n);
                    }),
                ),
                Sn = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            if (wn(e)) {
                                const n = t(Gn),
                                    s = t(Bn);
                                if (n && s && !t(wn(n)) && n !== e) return t(Sn(n)(s));
                            }
                            return !!t(ln(e))?.streams.find(({ description: e, disabled: t, mid: s, type: i }) => !t && s === n && "presentation" === e && "video" === i);
                        }),
                    ),
                ),
                Zn = (0, s.cn)([]),
                In = (0, s.cn)(null, (e, n, t) => {
                    const s = t.filter(({ active: e }) => e);
                    n(Zn, s);
                }),
                Mn = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            const s = t(Rn)?.get(e);
                            if (!s) return;
                            const i = (0, u.Z)(s, (e) => (e.active && e.feed_mid === n ? e.mid : void 0));
                            return i ? t(Pn(i)) : void 0;
                        }),
                    ),
                ),
                Rn = (0, s.cn)((e) => {
                    const n = new Map(),
                        t = e(Zn);
                    for (const e of t) {
                        if (!e.active) continue;
                        const t = n.get(e.feed_id) ?? [];
                        t.push(e), n.set(e.feed_id, t);
                    }
                    return n;
                }),
                An = (0, c.xu)((e) =>
                    (0, P.u)((n) => {
                        const t = n(Rn);
                        return t.get(e)?.map(({ mid: e }) => e) ?? [];
                    }),
                ),
                En = (0, s.cn)((e) => {
                    const n = e(st);
                    if (!n) return [];
                    const t = e(ln(n));
                    if (!t) return [];
                    return (0, a.Z)(t.streams, ({ disabled: e, mid: n, type: t }) => ("audio" !== t || e ? void 0 : n)).map((t) => e(Mn(n)(t)));
                }),
                Pn = (0, Z.dX)((e) => (0, s.cn)()),
                Tn = (0, c.xu)((e) =>
                    (0, P.u)((n) => {
                        const t = n(An(e));
                        return t ? (t.sort(), t.map((e) => n(Pn(e))).filter(Boolean)) : [];
                    }),
                ),
                Dn = (0, c.xu)((e) => (0, P.u)((n) => n(Tn(e)).filter(({ kind: e }) => "audio" === e))),
                jn = (0, c.xu)((e) => (0, P.u)((n) => n(Tn(e)).filter(({ kind: e }) => "video" === e))),
                Ln = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            const s = t(Rn)
                                ?.get(e)
                                ?.find(({ feed_mid: e }) => e === n);
                            if (s) return t(Pn(s.mid));
                        }),
                    ),
                ),
                Cn = (0, c.xu)((e) =>
                    (0, P.u)((n) => {
                        const t = n(mn(e));
                        return t ? (0, a.Z)(t, (t) => ({ feedMid: t, track: n(Mn(e)(t)) })) : [];
                    }),
                ),
                Nn = (0, c.xu)((e) =>
                    (0, P.u)((n) => {
                        const t = n(pn(e));
                        return t ? (0, a.Z)(t, (t) => ({ feedMid: t, track: n(Mn(e)(t)) })) : [];
                    }),
                ),
                qn = (0, c.xu)((e) => (0, s.cn)((n) => n(Dn(e))[0] ?? n(Qn(e)))),
                zn = (0, c.xu)((e) => (0, D.J)(3e3)),
                Yn = (0, s.cn)(null, (e, n, t) => {
                    const s = e(Se).indexOf(t);
                    if (-1 === s) return;
                    if (s < 3) return;
                    if (e(zn(t))) return;
                    n(zn(t), !0);
                    const i = e(An(t));
                    i?.forEach((e) => n(U.S$, e, s)), n(Se, (e) => (0, x.Z)(e, s, 0));
                }),
                Gn = (0, s.cn)(),
                Bn = (0, s.cn)(),
                Un = (0, s.cn)({}),
                On = (0, s.cn)(new Map()),
                Qn = (0, c.xu)((e) => (0, s.cn)((n) => n(On).get(e))),
                Vn = (0, s.cn)([]),
                $n = (0, s.cn)(null, (e, n, t) => {
                    const s = {},
                        i = new Map(),
                        c = e(st),
                        o = [];
                    for (const r of t)
                        if ("video" === r.t) {
                            const t = r.feed ?? e(vn(r.uid));
                            t && !e(wn(t)) ? (n(Gn, t), n(Bn, r.mid)) : (n(Gn, void 0), n(Bn, void 0));
                        } else if ("audio" === r.t) {
                            const n = r.feed ?? e(vn(r.uid));
                            if ((o.push(n), n)) {
                                if (c && r.uid !== e(G.t9)) {
                                    const t = e(Tn(c))[r.tr];
                                    t && i.set(n, t);
                                }
                                s[n] = 1 - r.lvl / 255;
                            }
                        }
                    n(Vn, o), n(Un, s), n(On, i);
                }),
                Xn = (0, E.G)(
                    () => Vn,
                    (e, n, { added: t }) => {
                        const s = e(Hn);
                        if (e(k.f)) for (const e of t) e && s.has(e) && n(Yn, e);
                    },
                ),
                Fn = (0, R.Q)(
                    () => Vn,
                    (e, n, t) => {
                        if (!t) return r.Z;
                        const s = e(Qn(t));
                        return s
                            ? (0, S.y)(s, ({ normLevel: e }) => {
                                  e > 0.5 && n(Yn, t);
                              })
                            : r.Z;
                    },
                ),
                Kn = (0, s.cn)(null, async (e, n) => {
                    const t = e(b.rm);
                    t && (await n(xt, { spaceId: t }));
                }),
                Jn = (0, I.v)((e, n) => {
                    e(U.Z4);
                    const t = e(st);
                    if (!t) return r.Z;
                    const s = e(An(t));
                    return s?.filter((n) => "audio" === e(Pn(n))?.kind).forEach((e, t) => n(U.S$, e, t)), r.Z;
                }),
                Hn = (0, s.cn)((e) => new Set(e(xe))),
                Wn = (0, c.xu)((e) => (0, s.cn)((n) => n(Un)[e])),
                et = (0, s.cn)(null, async (e, n, t) => {
                    if ("answer" === t.type) {
                        const s = e(oe.bP);
                        n(ce.hF, t), s.setRemoteDescription(t), n(Ve);
                    } else if ("offer" === t.type) {
                        n(ce.t8, t);
                        const s = e(oe.V3);
                        await s.setRemoteDescription(t);
                        const i = await s.createAnswer(wt);
                        n(ce.Qr, i), await s.setLocalDescription(i);
                        return e(He).sendSdpAnswer(i);
                    }
                }),
                nt = (0, s.cn)(null, (e, n, t) => {
                    if (e(cn(t))) {
                        const t = e(b.rm);
                        if (t)
                            return void (e(F.MG)
                                ? n(J.R, t)
                                : n(xt, { spaceId: t, wasKicked: !0 }).finally(() => {
                                      n(b.cI, w.Q.listener);
                                  }));
                    }
                    n(ln(t), void 0), n(Se, (e) => e.filter((e) => e !== t));
                    e(ut).delete(t);
                }),
                tt = (0, c.xu)((e) =>
                    (0, c.xu)((n) =>
                        (0, s.cn)((t) => {
                            if (t(F.MG)) {
                                return !t(wn(n)) || "video" === e;
                            }
                            const s = t(wn(n));
                            return "video" === e ? !s : s;
                        }),
                    ),
                ),
                st = (0, s.cn)(),
                it = (0, s.cn)(),
                ct = (0, I.v)((e, n) => {
                    const t = e(it);
                    return t && !e(Hn).has(t) && n(it, void 0), r.Z;
                }),
                ot = (0, s.cn)((e) => !!e(Ie).length),
                rt = (0, s.cn)((e) => e(it) ?? (e(z.mb) || (e(F.MG) && !e(xe).length) || (e(y.Y) && !e(ot)) ? e(sn) : void 0) ?? e(st) ?? e(xe)[0]),
                dt = (0, s.cn)(!1),
                at = (0, s.cn)(null, (e, n, t) => {
                    const s = e(F.MG);
                    t.forEach((e) => {
                        n(ln(e.id), e), n(vn(e.periscope_user_id), e.id), e.dummy && (n(st, e.id), n(_t.add, () => n(st, void 0)));
                    });
                    const i = t.map((e) => e.id);
                    n(Se, (e) => {
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
                        })({ streams: c.filter(((o = i), (n) => !n.disabled && !e(tt(n.type)(o)))), isConferencing: s, publisherId: i, isDummy: !!t, setSubstream: (t, s) => n(e(Me(i))(t), s) });
                        var o;
                    });
                    if ((c.length && n(lt, c), e(dt))) {
                        const s = e(ut),
                            i = t.flatMap(({ id: e, streams: n }) =>
                                (0, a.Z)(n, ({ disabled: n, mid: t }) => {
                                    if (n) {
                                        const n = s.get(e);
                                        if (n?.includes(t)) return { feed: e, mid: t, unsub: !0 };
                                    }
                                }),
                            );
                        i.length && n(lt, i);
                    }
                }),
                ut = (0, s.cn)(() => new Map()),
                lt = (0, pe.m1)(
                    (e, n, t) => {
                        const s = e(ut),
                            [i, c] = (0, l.G)(t, (e) => !!e.unsub),
                            [o, r] = (0, l.Z)(c, (e) => s.get(e.feed)?.includes(e.mid) ?? !1),
                            d = [];
                        if (r.length) {
                            const t = e(He);
                            if (e(dt)) {
                                const e = t.subscribeNewStreams(r);
                                d.push(e);
                            } else {
                                n(dt, !0), n(_t.add, () => n(dt, !1)), n(ft);
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
                                const n = e(He).configure({ streams: t });
                                d.push(n);
                            }
                        }
                        if (i.length) {
                            const n = i.map(({ feed: e, mid: n }) => ({ feed: e, mid: n })),
                                t = e(He).updateStreams({ unsubscribe: n });
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
                ft = (0, s.cn)(null, (e, n) => {
                    const t = e(b.rm);
                    t && (n((0, ee.A5)((0, W.Rq)(t)).init), n((0, ee.xi)((0, W.Rq)(t)).init));
                    const s = n(te.Z);
                    n(_t.add, s);
                });
            const mt = (0, s.cn)(!1),
                pt = (0, s.cn)(!1),
                ht = (0, s.cn)(null, (e, n) => {
                    const t = e(Se),
                        s = e(sn);
                    return (s ? [[s, () => n(vt)]] : []).concat((0, a.Z)(t, (e) => [e, () => n(gt, e)]));
                }),
                vt = (0, s.cn)(null, (e, n) =>
                    e(oe.bP)
                        .getStats()
                        .then((e) => [...e.values()]),
                ),
                gt = (0, s.cn)(null, (e, n, t) => {
                    const s = e(oe.V3),
                        i = [...e(jn(t)), ...e(Dn(t))].filter(Boolean);
                    return Promise.all(i.map((e) => s.getStats(e).then((e) => [...e.values()]))).then((e) => e.flat());
                }),
                bt = { offerToReceiveAudio: !1, offerToReceiveVideo: !1 },
                wt = { offerToReceiveAudio: !0, offerToReceiveVideo: !0 },
                _t = (0, L.h)(),
                yt = (0, L.h)(),
                kt = (0, s.cn)(null, (e, n) => {
                    n(G.re.reset), n(oe.Og), n(Fe.reset), n(Ke.reset), n(He.reset), n(We.reset), n(dn.reset);
                }),
                xt = (0, A.Y)((e, n, { spaceId: t, spaceUserRole: s, wasKicked: i }) => {
                    n(F.fJ, !1), n(se.oN);
                    const c = e(b.cI) ?? s,
                        o = [],
                        r = [];
                    e(h.ri) && o.push(n(G.Vp)), c === w.Q.cohost && o.push(n(G.iq)), c === w.Q.host || i ? r.push(Promise.all(o).then(() => {})) : r.push(Promise.all(o).then(() => n(G.NG, t)));
                    return (
                        e(be) && r.push(n(Zt)),
                        e(ae.lY) && n(de.c),
                        Promise.allSettled(r).then(() => {
                            n(_t.disposeAll), n(kt);
                        })
                    );
                }),
                St = (0, s.cn)(null, (e, n, t) => (n(se.oN), e(ae.lY) && n(de.c), n(_t.disposeAll), n(kt), n(Y.HQ, t))),
                Zt = (0, s.cn)(null, (e, n) => {
                    if (e(ae.p_))
                        return Promise.all([e(He).leave(), n(ee.CA)])
                            .then(r.Z, r.Z)
                            .then(() => {
                                n(yt.disposeAll), e(oe.V3).close();
                            });
                    if (e(ae.lY))
                        return Promise.all([e(We).leave(), n(W.Ob)])
                            .then(() => i.destroy(c))
                            .then(r.Z, r.Z)
                            .then(() => {
                                n(yt.disposeAll), e(oe.bP).close();
                            });
                    const t = e(We),
                        s = e(He),
                        i = e(Je),
                        c = e(Fe);
                    return Promise.all([t.leave(), s.leave(), n(W.Ob), n(ee.CA)])
                        .then(() => i.destroy(c))
                        .then(r.Z, r.Z)
                        .then(() => {
                            n(yt.disposeAll), e(oe.bP).close(), e(oe.V3).close();
                        });
                }),
                It = (0, s.cn)(null, (e, n, t, s) => {
                    const i = e(We),
                        { handlerId: c, janusSessionId: o } = i.config,
                        r = e(hn(s));
                    if (r) return n(G.fP, { spaceId: t, janusSessionId: o, periscopeUserId: r, handlerId: c, janusTargetId: s });
                }),
                Mt = (0, s.cn)(null, (e, n) => e(We).destroyRoom()),
                Rt = (0, s.cn)((e) =>
                    (0, o.Z)(
                        e(xe).filter((n) => e(Gn) !== n),
                        [(n) => e(kn(n))],
                        ["desc"],
                    ),
                ),
                At = (0, s.cn)((e) => e(xe).flatMap((n) => e(An(n)) ?? [])),
                Et = (0, s.cn)(null, (e, n) => {
                    let t = e(At);
                    const s = e(g.zE).sub(At, () => {
                        const s = e(At),
                            i = (function (e, n) {
                                const t = new Set(n),
                                    s = [];
                                for (const n of e) t.has(n) || s.push(n);
                                return s;
                            })(t, s);
                        for (const e of i) n(U.zb, e);
                        t = s;
                    });
                    n(_t.add, s);
                });
            const Pt = (0, s.cn)([]),
                Tt = (0, s.cn)(null, (e, n) => {
                    e(Pt).forEach((n) => e(dn).handleResponse(n)), n(Pt, []);
                }),
                Dt = (0, s.cn)(null, (e, n, t) => {
                    if (!e(dn.isInit)) return void n(Pt, (e) => e.concat(t));
                    e(dn).handleResponse(t);
                }),
                jt = (0, s.cn)(null, (e, n) => {
                    const t = e(oe.bP),
                        s = e(We);
                    t.onicecandidate = (e) => {
                        if (e.candidate) {
                            const n = e.candidate;
                            s.sendTrickleCandidate({ candidate: n.candidate, sdpMLineIndex: n.sdpMLineIndex, sdpMid: n.sdpMid });
                        }
                    };
                }),
                Lt = (0, s.cn)(null, (e, n) => {
                    const t = e(oe.V3),
                        s = e(He);
                    t.onicecandidate = (e) => {
                        if (e.candidate) {
                            const n = e.candidate;
                            s.sendTrickleCandidate({ candidate: n.candidate, sdpMLineIndex: n.sdpMLineIndex, sdpMid: n.sdpMid });
                        }
                    };
                }),
                Ct = (0, s.cn)(null, (e, n) => {
                    e(ae.Fn) || n(_t.add, n(me.C));
                });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5.ecef0bfa.js.map
