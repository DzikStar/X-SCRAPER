"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-39a9bfe0"],
    {
        477403: (e, t, n) => {
            n.d(t, { eY: () => m, si: () => y, vC: () => d });
            n(543673), n(240753), n(128399);
            var r = n(395337),
                l = n(202784),
                a = (n(585488), n(516951)),
                o = n(952793),
                c = n(16222),
                s = n(125363),
                i = n(919022),
                u = n(535338);
            function d(e) {
                return (0, s.v9)(m);
            }
            function m(e) {
                return (function (e) {
                    if (!e) return;
                    const t = (0, c.o)(() => new URL(e), a.Z);
                    if (!t || !f.includes(t.host)) return;
                    const n = t.pathname.slice(1).toLowerCase();
                    return p[n];
                })(i.ZP.selectViewerUser(e)?.highlightedLabel?.url?.url);
            }
            const f = ["twitter.com", "x.com"],
                p = { xai: "1661523610111193088" },
                E = Object.values(p),
                g = r.Z;
            function y() {
                const e = (0, u.p)(g, {}),
                    t = (0, o.hC)("spaces_conference_enabled");
                return l.useMemo(() => {
                    const n = e.affiliations?.affiliated_account_ids_results,
                        r = (
                            n?.flatMap(({ rest_id: e, result: t }) => {
                                if ("User" !== t?.__typename) return [];
                                return [{ name: t.legacy.name, id: e }];
                            }) ?? []
                        ).filter(({ id: e }) => E.includes(e));
                    return t && !r.some(({ id: e }) => "783214" === e) ? [{ id: "783214", name: "X" }, ...r] : r;
                }, [e.affiliations?.affiliated_account_ids_results, t]);
            }
        },
        131631: (e, t, n) => {
            n.r(t), n.d(t, { ScheduledConferences: () => Oe, default: () => je });
            var r = n(807896),
                l = (n(136728), n(202784)),
                a = n(400752),
                o = n(565058),
                c = n(325686),
                s = n(107267),
                i = n(731708),
                u = n(530525),
                d = n(167630),
                m = n(439592),
                f = n(124964),
                p = n(154003),
                E = n(952428),
                g = n(811176),
                y = n(392237),
                h = n(520913),
                w = n(737691),
                b = n(447735),
                Z = n(908599),
                v = n(965728),
                C = n(582129),
                k = n(625555),
                S = n(4427),
                D = n(838859),
                x = n(895229),
                T = n(741881),
                P = n(125363),
                _ = n(601576),
                L = n(919022),
                I = n(115307),
                z = n(923128),
                R = n(477403),
                j = n(956056),
                B = n(878931),
                W = n(526250),
                H = (n(571372), n(459679)),
                F = n(516951),
                N = n(536387),
                V = n(601798);
            const O = (0, N.K9)(async (e) => {
                    const t = await e($).catch(() => {});
                    if (t)
                        return (0, H.Z)(t.result.items, (e) => {
                            const t = e.conferenceData?.entryPoints.find(({ entryPointType: e, uri: t }) => "video" === e && t.startsWith("https://x.com"))?.uri,
                                n = "declined" === e.attendees?.find((e) => e.self)?.responseStatus;
                            if (!t || n) return;
                            const r = /conferences\/(\w+)/.exec(t)?.[1];
                            if (!r) return;
                            const l = t.replace("/conferences/", "/conferences-room/"),
                                a = e.summary,
                                o = e.start.dateTime,
                                c = e.end.dateTime,
                                s = o
                                    ? (function (e) {
                                          const t = new Date(e),
                                              n = new Date(),
                                              r = t.toDateString() !== n.toDateString();
                                          return t.toLocaleString(void 0, { dateStyle: r ? "short" : void 0, timeStyle: "short" });
                                      })(o)
                                    : "";
                            return { id: e.id, conferenceId: r, link: t, roomLink: l, title: a, time: s, startDateTime: o, endDateTime: c };
                        });
                }),
                G = (0, o.cn)(null, (e, t, n) => {
                    null === J().client.getToken() && t(K, !0);
                });
            const K = (0, o.cn)(!1),
                M = (0, N.K9)((e) => e(k.F6).getCalendarToken()),
                q = (0, W.v)((e, t) => {
                    const n = setInterval(() => {
                        t(M), e(O).catch(F.Z);
                    }, 6e4);
                    return () => {
                        clearInterval(n);
                    };
                }),
                U = (0, o.cn)(async (e) => {
                    const t = await e(M).catch(() => {});
                    if (t && "google" === t.vendor) {
                        J().client.setToken({ access_token: t.token });
                        const n = { calendarId: t.calendar_id ?? "primary", timeMin: new Date().toISOString(), showDeleted: !1, singleEvents: !0, maxResults: 20, orderBy: "startTime", eventTypes: ["default"] };
                        try {
                            return await J().client.calendar.events.list(n);
                        } catch (t) {
                            J().client.setToken(null), 401 === t.status && e(k.F6).deleteCalendarToken();
                        }
                    }
                }),
                $ = (0, o.cn)(async (e) => {
                    const [, t] = await Promise.all([e(A), e(X)]),
                        n = await e(U);
                    return (
                        n ||
                        new Promise((n, r) => {
                            e(K)
                                ? ((t.callback = (e) => {
                                      if (void 0 !== e.error) return void r(e.error);
                                      const t = { calendarId: "primary", timeMin: new Date().toISOString(), showDeleted: !1, singleEvents: !0, maxResults: 10, orderBy: "startTime", eventTypes: ["default"] };
                                      J().client.calendar.events.list(t).then(n, r);
                                  }),
                                  t.requestAccessToken({ prompt: "" }))
                                : n();
                        })
                    );
                }),
                A = (0, o.cn)(
                    (e) =>
                        new Promise((e, t) => {
                            V.Z.inject({
                                callback: () => {
                                    J().load("client", () => {
                                        J()
                                            .client.init({ apiKey: "AIzaSyDp7TRc_08A1cHAUgIiukX4VbmPo358LR0", discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"] })
                                            .then(e, t);
                                    });
                                },
                                scriptId: "googleGapiLibrary",
                                src: "https://apis.google.com/js/api.js",
                            });
                        }),
                ),
                X = (0, o.cn)(async (e) => {
                    await e(Y);
                    return (function () {
                        if (!window.google) throw new Error("google gsi client not loaded");
                        return window.google;
                    })().accounts.oauth2.initTokenClient({ client_id: "974832127819-trlhgbi82uprn3akrur6vpcfnqp8pj4n.apps.googleusercontent.com", scope: "https://www.googleapis.com/auth/calendar.readonly", callback: "" });
                }),
                Y = (0, o.cn)(
                    (e) =>
                        new Promise((e) => {
                            V.Z.inject({ callback: e, scriptId: "googleGSILibrary", src: "https://accounts.google.com/gsi/client" });
                        }),
                );
            function J() {
                if (!window.gapi) throw new Error("Gapi not loaded");
                return window.gapi;
            }
            var Q = n(811233);
            const ee = l.memo(function () {
                    const e = (0, a.Dv)(O.resolved),
                        t = (0, a.Dv)(x.p_);
                    return (0, W.N)(q), l.createElement(c.Z, { style: t ? de.roomContainer : de.container }, e ? l.createElement(ne, null) : l.createElement(le, null));
                }),
                te = 576e5;
            function ne() {
                const e = Date.now(),
                    t = (0, a.Dv)(O.resolved)?.filter(({ endDateTime: t, startDateTime: n }) => !(!n || !t) && new Date(n).getTime() - e < te && new Date(t).getTime() > e),
                    n = (0, B.N)();
                l.useEffect(() => {
                    if (!t?.length) return;
                    const e = t[0].endDateTime;
                    if (!e) return;
                    const r = new Date(e).getTime() - Date.now();
                    setTimeout(n, r);
                }, [t, n]);
                const r = (0, a.Dv)(x.Fn);
                return t?.length
                    ? l.createElement(
                          c.Z,
                          { style: de.calendarList },
                          t?.map((e) => l.createElement(re, { calendarEvent: e, key: e.id })),
                      )
                    : r
                      ? l.createElement(c.Z, { style: de.calendarList }, l.createElement(c.Z, { style: de.item }, l.createElement(i.ZP, { color: "gray700" }, "Nothing scheduled")))
                      : null;
            }
            function re({ calendarEvent: e }) {
                const { conferenceId: t, link: n, roomLink: r, time: o, title: s } = e,
                    u = (0, Q.gt)(),
                    d = (0, a.b9)((0, C.Tx)(t)),
                    m = l.useCallback(() => {
                        d();
                    }, [d]);
                return l.createElement(E.Z, { link: u ? r : n, onPress: u ? m : void 0, style: de.item }, l.createElement(c.Z, { style: de.flexShrink }, l.createElement(i.ZP, { numberOfLines: 2, size: "headline1", weight: "bold" }, s)), l.createElement(c.Z, null, l.createElement(i.ZP, { size: "headline1" }, o)));
            }
            function le() {
                return l.createElement(l.Suspense, { fallback: null }, l.createElement(oe, null));
            }
            const ae = !0;
            function oe() {
                (0, a.Dv)(O);
                return (0, a.Dv)(x.Fn) || ae ? null : l.createElement(ce, null);
            }
            function ce() {
                return l.createElement(l.Suspense, { fallback: l.createElement(ie, null) }, l.createElement(se, null));
            }
            function se() {
                (0, a.Dv)(O);
                const e = (0, a.b9)(G);
                return l.createElement(p.ZP, { icon: ue, onClick: e, style: de.flexStart }, "Show calendar");
            }
            function ie() {
                return l.createElement(p.ZP, { disabled: !0, icon: ue, style: de.flexStart }, "Show calendar");
            }
            const ue = l.createElement(j.default, null),
                de = y.default.create((e) => ({ container: { width: "100%", maxWidth: 600 * e.scaleMultiplier }, roomContainer: {}, calendarList: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, item: { padding: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: e.spaces.space8, borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, flexStart: { alignSelf: "flex-start" }, flexShrink: { flexShrink: 1 } }));
            var me = n(371344),
                fe = n(131907),
                pe = n(163889);
            function Ee() {
                const e = (0, a.Dv)(De);
                !(function () {
                    const e = (0, a.b9)(De);
                    l.useEffect(
                        () => () => {
                            e("");
                        },
                        [e],
                    );
                })();
                const t = (0, a.b9)(Pe),
                    n = (0, a.b9)(_e),
                    r = (0, a.Dv)(xe),
                    o = (0, s.useHistory)(),
                    c = l.useCallback(
                        (e) => {
                            t(o, e);
                        },
                        [t, o],
                    );
                return l.createElement(me.Z, { invalid: r, onChange: n, onKeyPress: c, placeholder: ge, rightContent: we, value: e });
            }
            const ge = "Enter a code",
                ye = l.createElement(fe.default, null);
            function he() {
                return l.createElement(l.Suspense, { fallback: be }, Ze);
            }
            const we = l.createElement(he, null),
                be = l.createElement(Ce, null),
                Ze = l.createElement(ve, null);
            function ve() {
                const [, e] = (0, a.KO)(Te),
                    t = (0, s.useHistory)(),
                    n = l.useCallback(() => {
                        e(t);
                    }, [t, e]);
                return l.createElement(p.ZP, { "aria-label": ke, hoverLabel: Se, icon: ye, onPress: n, size: "medium", style: Le.button, type: "primaryText" });
            }
            function Ce() {
                return l.createElement(p.ZP, { "aria-label": ke, disabled: !0, hoverLabel: Se, icon: ye, size: "medium", style: Le.button, type: "primaryText" });
            }
            const ke = "Join",
                Se = { label: ke },
                De = (0, o.cn)(""),
                xe = (0, o.cn)(!1),
                Te = (0, Z.Y)(async (e, t, n) => {
                    const r = e(De);
                    return t((0, S.Xk)(r)).then(
                        (l) => {
                            const a = `${n.location.pathname}/${r}`;
                            n.push(a), e(Q.o3) && t(C.V$, { conferenceId: r, broadcastId: l });
                        },
                        (e) => {
                            (0, pe.Hj)(e, { extra: { input_code: !0 }, level: "warning" }), t(xe, !0);
                        },
                    );
                });
            const Pe = (0, o.cn)(null, (e, t, n, r) => {
                    "Enter" !== r.key || r.shiftKey || (r.preventDefault(), t(Te, n));
                }),
                _e = (0, o.cn)(null, (e, t, n) => {
                    t(xe, !1), t(De, n.target.value);
                }),
                Le = y.default.create((e) => ({ button: { marginStart: e.spaces.space4 } }));
            function Ie() {
                return l.createElement(p.ZP, { onClick: () => window.open("/i/conferences"), tabIndex: -1, type: "primaryText" });
            }
            function ze() {
                l.useEffect(() => {
                    const e = setTimeout(
                        () => {
                            window.location.reload(!0);
                        },
                        (function () {
                            const e = new Date(),
                                t = new Date();
                            t.setHours(5, 0, 0, 0), e.getHours() >= 5 && t.setDate(t.getDate() + 1);
                            return t.getTime() - e.getTime();
                        })(),
                    );
                    return () => clearTimeout(e);
                }, []);
            }
            var Re = n(565235);
            function je(e) {
                const t = (0, R.si)();
                (0, b.b)(), (0, Re.z)(), (0, S.bu)();
                const n = (0, Q.gt)(),
                    r = (0, a.Dv)(x.Fn);
                return t.length ? (n ? (r ? l.createElement(We, null) : l.createElement(He, null)) : l.createElement(c.Z, { style: Ae.root }, l.createElement(i.ZP, { size: "title2" }, l.createElement(h.default, null), "Conferences"), l.createElement(c.Z, { style: Ae.inputRow }, l.createElement(Ge, null), l.createElement(c.Z, { style: Ae.separator }), l.createElement(Ee, null)), l.createElement(c.Z, { style: Ae.space16Vertical }), l.createElement(ee, null))) : l.createElement(z.Z, e);
            }
            const Be = u.Z.createLayoutCache();
            function We() {
                ze();
                const e = (0, a.Dv)(x.p_),
                    t = (0, a.Dv)(x.lY),
                    n = (0, a.Dv)(S.fJ),
                    r = (0, P.v9)(L.ZP.selectViewerUser),
                    o = (0, v.C_)(r).rgb;
                if (!r) return null;
                const s = r.profile_banner_url;
                return e ? (n ? l.createElement(c.Z, { style: Ae.rootLoading }, l.createElement(d.Z, null), ";") : l.createElement(c.Z, { style: Ae.rootRoomLeaderFollower }, s ? l.createElement(u.Z, { "aria-label": "", aspectMode: m.Z.COVER, backgroundColor: o, image: s, layoutCache: Be }) : l.createElement(c.Z, { style: Ae.backgroundProfile }, l.createElement(i.ZP, { size: "title1" }, l.createElement(h.default, null), "Conferences")), l.createElement(c.Z, { style: Ae.topBar }, l.createElement(i.ZP, { size: "headline1" }, l.createElement(h.default, null), "Conferences", l.createElement(c.Z, { style: Ae.space16Horizontal }), l.createElement(I.q, null), l.createElement(f.Z, null), l.createElement(I.u, null)), l.createElement(c.Z, { style: Ae.spacer }), l.createElement(i.ZP, { size: "headline1" }, r.name)), l.createElement(c.Z, { style: Ae.floatingSide }, l.createElement(c.Z, { style: Ae.calendarWrapper }, l.createElement(ee, null))))) : t ? l.createElement(c.Z, { style: Ae.rootRoomLeaderFollower }, l.createElement(c.Z, { style: Ae.topBar }, l.createElement(i.ZP, { size: "headline1" }, l.createElement(h.default, null), "Conferences", l.createElement(c.Z, { style: Ae.space16Horizontal }), l.createElement(I.q, null), l.createElement(f.Z, null), l.createElement(I.u, null)), l.createElement(c.Z, { style: Ae.spacer }), l.createElement(Fe, null)), l.createElement(c.Z, { style: Ae.leaderRow }, l.createElement(c.Z, { style: Ae.columnDetails }, l.createElement(i.ZP, { align: "center", size: "title2" }, r.name), l.createElement(c.Z, { style: Ae.space16Vertical }), l.createElement(c.Z, { style: Ae.inputRow }, l.createElement(Ge, null), l.createElement(c.Z, { style: Ae.separator }), l.createElement(Ee, null))), l.createElement(c.Z, { style: Ae.columnCalendar }, l.createElement(ee, null), l.createElement(Ie, null)))) : null;
            }
            function He() {
                return ze(), l.createElement(c.Z, { style: Ae.rootRoom }, l.createElement(i.ZP, { align: "center", size: "title2" }, l.createElement(h.default, null), "Conferences"), l.createElement(c.Z, { style: Ae.inputRow }, l.createElement(Ge, null), l.createElement(c.Z, { style: Ae.separator }), l.createElement(Ee, null)), l.createElement(c.Z, { style: Ae.space16Vertical }), l.createElement(ee, null), l.createElement(c.Z, { style: Ae.topEnd }, l.createElement(Fe, null)), l.createElement(c.Z, { style: Ae.topStart }, l.createElement(Ie, null)));
            }
            function Fe() {
                const e = (0, a.b9)(Ve);
                return l.createElement(p.ZP, { icon: Ne, onClick: e, type: "primaryText" });
            }
            const Ne = l.createElement(w.default, null),
                Ve = (0, o.cn)(null, (e, t, n) => {
                    t(D.Kn, void 0), location.reload();
                });
            function Oe() {
                const e = (0, a.Dv)(T.d),
                    t = (0, a.oR)();
                return e
                    ? l.createElement(
                          c.Z,
                          { style: Ae.scheduledContainer },
                          e.conferences.map(({ key: e, scheduled_start_time: n, title: r }) =>
                              l.createElement(
                                  E.Z,
                                  { key: e, link: t.get((0, Q.je)(e)), style: Ae.scheduled },
                                  l.createElement(c.Z, null, l.createElement(i.ZP, { size: "headline1", weight: "bold" }, r)),
                                  n &&
                                      l.createElement(
                                          c.Z,
                                          null,
                                          l.createElement(
                                              i.ZP,
                                              { size: "headline1" },
                                              (function (e) {
                                                  const t = new Date(e),
                                                      n = new Date(),
                                                      r = t.toDateString() !== n.toDateString();
                                                  return new Date(e).toLocaleString(void 0, { dateStyle: r ? "short" : void 0, timeStyle: "short" });
                                              })(n),
                                          ),
                                      ),
                              ),
                          ),
                      )
                    : null;
            }
            function Ge() {
                return l.createElement(l.Suspense, { fallback: l.createElement(Ue, null) }, l.createElement(Ke, null));
            }
            function Ke() {
                const e = (0, R.si)(),
                    t = (function (e) {
                        const t = (0, s.useHistory)(),
                            [, n] = (0, a.KO)($e);
                        return l.useCallback(() => {
                            n(t, e);
                        }, [e, n, t]);
                    })(e[0].id),
                    n = e.length > 1 ? { renderMenu: Me } : { onPress: t };
                return l.createElement(p.ZP, (0, r.Z)({}, n, { type: "primaryFilled" }), "New conference");
            }
            const Me = (e) => l.createElement(qe, { onClose: e });
            function qe({ onClose: e }) {
                const t = (function () {
                    const e = (0, R.si)(),
                        [, t] = (0, a.KO)($e),
                        n = (0, s.useHistory)();
                    return e.map(({ id: e, name: r }) => ({
                        text: r,
                        onClick: () => {
                            t(n, e);
                        },
                    }));
                })();
                return l.createElement(g.Z, { items: t, onCloseRequested: e, shouldCloseOnClick: !0 });
            }
            function Ue() {
                return l.createElement(p.ZP, { disabled: !0, type: "primaryFilled" }, "New conference");
            }
            const $e = (0, Z.Y)((e, t, n, r) =>
                    e(k.F6)
                        .scheduleConference({ attendeesUserIds: [], orgId: r })
                        .then(async ({ key: r }) => {
                            const l = await e((0, S.Xk)(r));
                            n.push(e((0, Q.je)(r))), t(C.V$, { conferenceId: r, broadcastId: l });
                        })
                        .catch(() => {
                            (0, _.fz)({ text: "something went wrong" });
                        }),
                ),
                Ae = y.default.create((e) => {
                    const t = { flexGrow: 1, padding: e.spaces.space8, gap: e.spaces.space8 },
                        n = { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical };
                    return { root: { ...t, alignItems: "flex-start", paddingTop: e.spaces.space32 }, rootRoom: { ...t, justifyContent: "center", alignItems: "center" }, rootRoomLeaderFollower: { flexGrow: 1 }, rootLoading: { flexGrow: 1, justifyContent: "center" }, broadcastItem: { padding: e.spaces.space8, borderBottomWidth: e.spaces.space1, borderColor: e.colors.gray200, borderStyle: "solid" }, scheduled: { padding: e.spaces.space8, flexDirection: "row", justifyContent: "space-between", alignItems: "center", borderTopWidth: 1, borderTopStyle: "solid", borderTopColor: e.colors.borderColor }, scheduledContainer: { width: "100%", maxWidth: 600, borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, inputRow: { flexDirection: "row", gap: e.spaces.space16 }, separator: { borderRightWidth: e.spaces.space1, borderColor: e.colors.gray200, borderStyle: "solid" }, button: { marginStart: e.spaces.space4 }, roomBackground: { position: "absolute", inset: 0 }, topBar: { ...n, flexDirection: "row", backgroundColor: e.colors.appBarBackground, backdropFilter: "blur(12px)", alignItems: "center" }, space16Horizontal: { paddingEnd: e.spaces.space16 }, space16Vertical: { paddingBottom: e.spaces.space16 }, spacer: { flexGrow: 1 }, floatingSide: { justifyContent: "center", flexGrow: 1, marginEnd: e.spaces.space32, marginStart: "auto" }, calendarWrapper: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.large, contain: "paint", maxWidth: 600 * e.scaleMultiplier, width: `calc(100vw - ${e.spaces.space32} * 2)`, boxShadow: e.boxShadows.medium }, leaderRow: { flexDirection: "row", flexGrow: 1 }, columnDetails: { ...n, width: "50%", justifyContent: "center" }, columnCalendar: { ...n, flexGrow: 1, flexShrink: 1 }, topEnd: { position: "absolute", top: 0, end: 0 }, topStart: { position: "absolute", top: 0, start: 0 }, backgroundProfile: { position: "absolute", inset: 0, justifyContent: "center", alignItems: "center" } };
                });
        },
        565235: (e, t, n) => {
            n.d(t, { z: () => D });
            var r = n(202784),
                l = n(107267),
                a = n(157396),
                o = n(537392),
                c = n(392237),
                s = n(516951),
                i = n(640872),
                u = n(526250),
                d = n(703286),
                m = n(838859),
                f = n(811233),
                p = n(565058),
                E = n(420182),
                g = n(333259),
                y = n(563781),
                h = n(772544);
            const w = (0, p.cn)((e) => e(f.o3)),
                b = (0, p.cn)(),
                Z = (0, u.v)((e, t) => {
                    if (!e(w)) return s.Z;
                    const n = e((0, y.u)()),
                        { remove: r } = g.aB.addEventListener("change", (e) => {
                            e === g.$7.active && n();
                        }),
                        l = e(E.zE).get(b);
                    return (
                        (!l || l.released) && t(v),
                        () => {
                            r(), e(b)?.release();
                        }
                    );
                }),
                v = (0, p.cn)(null, (e, t) =>
                    (0, h.s)()
                        ?.request("screen")
                        .then(
                            (n) => {
                                if (!e(w)) return n.release();
                                t(b, n),
                                    n.addEventListener("release", () => {
                                        t(b, void 0);
                                    });
                            },
                            () => {},
                        ),
                ),
                { ThemeScaleNames: C } = a.default,
                k = Object.freeze({ [C.xSmall]: 1.3, [C.small]: 1.4, [C.normal]: 1.5, [C.large]: 1.5, [C.xLarge]: 1.6 }),
                S = Object.freeze({ [C.xSmall]: 1.8, [C.small]: 1.9, [C.normal]: 2, [C.large]: 2, [C.xLarge]: 2.1 });
            function D() {
                const { setSideNavSupport: e } = r.useContext(i.Z),
                    t = (0, f.gt)(),
                    n = (0, o.Zx)(({ windowWidth: e }) => e > 3e3),
                    p = (0, o.Zx)(({ windowWidth: e }) => e < 1e3),
                    E = (0, l.useHistory)();
                r.useLayoutEffect(
                    () =>
                        t
                            ? (e(!1),
                              () => {
                                  e(!0);
                              })
                            : s.Z,
                    [t, e],
                ),
                    (0, f.J2)(),
                    (function () {
                        const e = (0, f.gt)();
                        r.useEffect(() => {
                            e && c.default.theme.paletteName !== a.default.ThemePaletteNames.darker && c.default.setPalette(a.default.ThemePaletteNames.darker);
                        }, [e]);
                    })(),
                    r.useLayoutEffect(() => {
                        if (!t || p) return s.Z;
                        const e = c.default.theme.scales;
                        c.default.setScales(n ? S : k);
                        const r = c.default.theme.scale;
                        return (
                            c.default.setScale(C.large),
                            () => {
                                (function (e) {
                                    return e.pathname.startsWith("/i/conferences-room");
                                })(E.location) || (c.default.setScale(r), c.default.setScales(e));
                            }
                        );
                    }, [E, n, p, t]),
                    (0, m.az)(),
                    (0, u.N)(Z),
                    (0, u.N)(d.p);
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-39a9bfe0.b801a54a.js.map
