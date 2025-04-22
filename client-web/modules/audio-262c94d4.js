"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["modules.audio-262c94d4"],
    {
        701814: (e, t, a) => {
            a.r(t), a.d(t, { AudioSpaceAnalytics: () => F, default: () => x });
            var n = a(202784),
                c = a(776342),
                s = a(420740),
                r = a(370006),
                o = a(138099),
                l = a(786998),
                i = a(392237),
                d = a(674132),
                u = a.n(d),
                p = a(323265),
                m = a(982790),
                h = a(58255),
                g = a(713596),
                b = a(325686),
                f = a(738545),
                y = a(794215),
                E = a(755988);
            const S = (e, t, a) => {
                    const { label: c, popover: s } = C[e];
                    let r;
                    return (r = e === v.Duration ? w(t) : Z(e, t)), r ? n.createElement(f.ZP, { key: e, label: c, popover: s, size: a, value: r }) : null;
                },
                Z = (e, t) => {
                    const { space: a, utils: n } = t,
                        c = a?.is_space_available_for_replay,
                        s = a?.total_live_listeners,
                        r = a?.total_replay_watched;
                    let o;
                    switch (e) {
                        case v.Cohosts:
                            o = a?.cohosts.length;
                            break;
                        case v.LiveListeners:
                            o = c ? s : void 0;
                            break;
                        case v.RecordingReplays:
                            o = c ? r : void 0;
                            break;
                        case v.Speakers:
                            o = a?.participants?.speakers.length;
                            break;
                        case v.TunedIn:
                            o = n.getTunedInCount();
                            break;
                        default:
                            o = void 0;
                    }
                    return o?.toString() || null;
                },
                w = (e) => {
                    const { space: t } = e,
                        a = t?.ended_at,
                        c = t?.started_at;
                    if (!a || !c) return null;
                    const s = a - c;
                    return n.createElement(y.Z, { narrow: !0, timeMs: s });
                },
                v = Object.freeze({ Cohosts: "Cohosts", Duration: "Duration", LiveListeners: "LiveListeners", RecordingReplays: "RecordingReplays", Speakers: "Speakers", TunedIn: "TunedIn" }),
                _ = [v.LiveListeners, v.RecordingReplays, v.Cohosts, v.Speakers, v.Duration],
                C = { [v.Cohosts]: { label: u().i2caef48 }, [v.Duration]: { label: u().d9d6e10e }, [v.LiveListeners]: { label: u().fcb205da }, [v.RecordingReplays]: { label: u().jb088200 }, [v.Speakers]: { label: u().j245c654 }, [v.TunedIn]: { label: u().if65328a } },
                k = i.default.create((e) => ({ cardContainer: { marginTop: e.spaces.space12 }, container: { paddingHorizontal: e.spaces.space16 }, grid: { display: "grid", marginBottom: e.spaces.space40, gridTemplateColumns: "1fr", gridGap: i.default.theme.spaces.space40, marginTop: i.default.theme.spaces.space40, marginHorizontal: i.default.theme.spaces.space32 }, minorDataPointsGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: i.default.theme.spaces.space40 } })),
                T = function (e) {
                    const t = (0, g.z)(e.match),
                        a = (0, m.$)(t);
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(b.Z, { style: k.container }, n.createElement(b.Z, { style: k.cardContainer }, n.createElement(E.Z, { audioSpaceId: t, isInteractive: !1, withoutButton: !0 }))),
                        n.createElement(
                            b.Z,
                            { style: k.grid },
                            S(v.TunedIn, a, "title1"),
                            n.createElement(
                                b.Z,
                                { style: k.minorDataPointsGrid },
                                _.map((e) => S(e, a, "title3")),
                            ),
                        ),
                    );
                };
            function F(e) {
                const [t, a] = n.useState(void 0),
                    i = (0, g.z)(e.match),
                    { utils: d } = (0, m.$)(i),
                    u = d.state() === c.default.StateEnum.unavailable;
                n.useEffect(() => {
                    h.w.proxsee
                        .login()
                        .then(() => {
                            a(!0);
                        })
                        .catch(() => {
                            a(!1);
                        });
                }, []);
                const b = () => e.history.goBackThroughModals(),
                    f = n.createElement(r.Z, { backButtonType: "close", onClick: b });
                return void 0 !== d.state() && void 0 !== t ? n.createElement(o.Z, { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: b, role: "menu", type: "full", withKeyboardNavigation: !0, withMask: !0 }, !p.ZP.isTwitterApp() && n.createElement(l.Z, { leftControl: f, style: I.appBar, title: B.title, withGutter: !0 }), !1 === t ? n.createElement(s.Z, { onRetry: null, title: B.wrongUser }) : u ? n.createElement(s.Z, { onRetry: null, title: B.genericError }) : n.createElement(T, e)) : null;
            }
            const B = { title: u().g7e3d2a4, wrongUser: u().abebdfae, genericError: u().ef4602ec },
                I = i.default.create((e) => ({ appBar: { paddingVertical: e.spaces.space8 }, closeIcon: { width: e.spaces.space20, height: e.spaces.space20 } })),
                x = F;
        },
        409006: (e, t, a) => {
            a.r(t), a.d(t, { default: () => m });
            var n = a(202784),
                c = a(325686),
                s = a(103165),
                r = a(392237),
                o = a(674132),
                l = a.n(o),
                i = a(718e3),
                d = a(252021),
                u = a(642252),
                p = a(713596);
            function m(e) {
                return n.createElement(u.Y, e, n.createElement(h, e));
            }
            function h(e) {
                const t = f.title;
                return n.createElement(n.Fragment, null, n.createElement(d.Z, { backLocation: "/", history: e.history, primaryContent: n.createElement(g, e), sidebarContent: n.createElement(i.Z, null), title: t }));
            }
            function g(e) {
                const t = (0, p.z)(e.match);
                return n.createElement(c.Z, { style: b.container }, n.createElement(c.Z, { style: b.cardContainer }, n.createElement(s.Z, { audioSpaceId: t, withDirectJoin: !0 })));
            }
            const b = r.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space16 }, cardContainer: { marginTop: e.spaces.space12 } })),
                f = { title: l().ab4fc8bc };
        },
        193487: (e, t, a) => {
            a.r(t), a.d(t, { default: () => l });
            var n = a(807896),
                c = a(202784),
                s = a(642252),
                r = a(201899),
                o = a(713596);
            function l(e) {
                return c.createElement(s.Y, e, c.createElement(i, e));
            }
            function i(e) {
                const t = (0, o.z)(e.match);
                return c.createElement(r.d, (0, n.Z)({}, e, { broadcastId: t }));
            }
        },
        548583: (e, t, a) => {
            a.r(t), a.d(t, { default: () => r });
            var n = a(202784),
                c = a(818885),
                s = a(713596);
            function r(e) {
                const t = (0, s.z)(e.match);
                return n.createElement(c.Z, { audioSpaceId: t });
            }
        },
        642252: (e, t, a) => {
            a.d(t, { Y: () => _ });
            var n = a(202784),
                c = a(58255),
                s = a(293115),
                r = a(503229),
                o = a(176340),
                l = a(668214),
                i = a(713596);
            const d = (e, t) => (0, i.z)(t.match),
                u =
                    (e) =>
                    (t, a, { api: n }) =>
                        n.withEndpoint(o.Z).byId(e, { isMetatagsQuery: !0 }),
                p = (0, l.Z)()
                    .propsFromState(() => ({ broadcastId: d }))
                    .propsFromActions(() => ({ fetchAudioSpace: u }));
            var m = a(272175),
                h = a(279046),
                g = a(776342),
                b = a(688715),
                f = a(674132),
                y = a.n(f),
                E = a(572067);
            function S(e) {
                const t = e.space;
                if (!t) return null;
                const a = (function (e) {
                    const {
                        canonical: t,
                        description: a,
                        title: n,
                        ttl: c,
                    } = (function (e) {
                        const t = e?.host?.display_name,
                            a = t ? Z.hostSpace({ name: t }) : Z.hostSpaceFallback,
                            n = e.title || a,
                            c = Z.descriptionGeneric,
                            s = e?.participants.total || 0,
                            r = h.Z.formatCountShort(s),
                            o = Z.descriptionListening({ count: r });
                        let l, i, d;
                        if (e.state === g.default.SpaceState.Running) (l = Z.titleRunning({ spaceTitle: n })), (i = Z.descriptionFormatRunning({ hostSpace: a, descriptionListening: o, descriptionGeneric: c })), (d = w.ttl.Frequent);
                        else if (e.state === g.default.SpaceState.NotStarted || e.state === g.default.SpaceState.PrePublished) {
                            const e = Z.scheduledSpaceGeneric;
                            (l = Z.titleScheduled({ date: e, spaceTitle: n })), (i = Z.descriptionFormatScheduled({ hostSpace: a, descriptionGeneric: c })), (d = w.ttl.Frequent);
                        } else (e.state !== g.default.SpaceState.Ended && e.state !== g.default.SpaceState.TimedOut) || !e.is_space_available_for_replay ? ((l = Z.titleEnded({ spaceTitle: n })), (i = Z.descriptionFormatEnded({ hostSpace: a, descriptionGeneric: c })), (d = w.ttl.LongLivedCache)) : ((l = Z.titleRecording({ spaceTitle: n })), (i = Z.descriptionFormatEnded({ hostSpace: a, descriptionGeneric: c })), (d = w.ttl.LongLivedCache));
                        const u = (0, b.ju)(`https://x.com/i/spaces/${e.rest_id}`);
                        return { title: l, canonical: u, description: i, ttl: d };
                    })(e);
                    return { type: "website", canonical: t, title: n, description: a, image: w.image.url, imageType: w.image.type, imageW: w.image.width, imageH: w.image.height, imageAlt: w.image.alt, ttl: c };
                })(t);
                return n.createElement(n.Fragment, null, n.createElement(E.Z, a), n.createElement(m.ql, { prioritizeSeoTags: !0 }, n.createElement("title", null, a.title), n.createElement("meta", { content: a.title, name: "title" }), n.createElement("meta", { content: a.description, name: "description" })));
            }
            const Z = { twitterSpaces: y().ded416b0, hostSpace: y().cfbea177, hostSpaceFallback: y().ab4fc8bc, descriptionGeneric: y().fec3c1e0, descriptionListeners: y().ce447fcb, descriptionListening: y().ef7da97f, scheduledSpaceGeneric: y().f8464692, titleRunning: y().a065e7e7, titleScheduled: y().hd5e7b21, titleEnded: y().f651e375, titleRecording: y().i8478ae7, descriptionFormatRunning: y().b2a94e93, descriptionFormatScheduled: y().f6432ce5, descriptionFormatEnded: y().f6432ce5 },
                w = { ttl: { Frequent: 300, LongLivedCache: 86400 }, image: { type: "image/jpeg", url: "https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.3.jpg", width: 1200, height: 630, alt: Z.twitterSpaces } };
            class v extends n.Component {
                constructor(...e) {
                    super(...e), (this.state = { space: null }), (this.mounted = !0);
                }
                componentWillUnmount() {
                    this.mounted = !1;
                }
                componentDidMount() {
                    this.props
                        .fetchAudioSpace(this.props.broadcastId)
                        .catch(() => null)
                        .then((e) => {
                            this.mounted && e && this.setState({ space: e });
                        });
                }
                render() {
                    return n.createElement(s.nO, { namespace: k }, n.createElement(n.Fragment, null, n.createElement(C, this.props), n.createElement(S, { space: this.state.space })));
                }
            }
            const _ = p((0, r.Z)(v));
            function C(e) {
                return (
                    n.useEffect(function () {
                        c.w.initialized() && c.w.proxsee.login();
                    }, []),
                    e.children
                );
            }
            const k = { page: "audiospace" };
        },
        52340: (e, t, a) => {
            a.d(t, { Bd: () => T, D9: () => y, Ex: () => w, WJ: () => S, Wy: () => C, aZ: () => Z, sD: () => k });
            a(571372);
            var n = a(565058),
                c = a(674132),
                s = a.n(c),
                r = a(176340),
                o = a(741810),
                l = a(420182),
                i = a(536387),
                d = a(660812),
                u = a(563781),
                p = a(349745),
                m = a(582129),
                h = a(712612),
                g = a(261703),
                b = a(632960),
                f = a(865698);
            const y = (0, d.R)(async (e, t, a) => {
                    const { addToast: n, communityId: c, conversationControls: s, isSuperFollowersOnly: r, narrowCastType: i, onClose: d, options: u, title: p } = a;
                    if (!t(h.F3)) throw (d(), new Error("Failed to request audio stream"));
                    const g = await t(m.QJ, { addToast: n, conversationControls: s, isSuperFollowersOnly: r, onClose: d, options: u, title: p });
                    if (!g || i === f.g.EMPLOYEES) return;
                    const { dispatch: y } = e(l.qc),
                        E = await y(b.lW({ broadcast: !!c, conversationControlsValue: i === f.g.SUBSCRIBERS ? "subscribers" : "all", communityIdValue: c, composeSemanticCoreId: c ? `8.31.${c}` : void 0, excludedRecipients: [], exclusivityControlValue: void 0, disallowedReplyControls: [], sendData: [{ key: g, isEmpty: !1, isValid: !0, media: [], mediaTags: [], pollActive: !1, pollValid: !1, text: `${p} https://x.com/i/spaces/${g}` }] }));
                    if (E[0]?.id_str) {
                        const e = E[0].id_str;
                        o.E.associateTweetWithBroadcast({ broadcast_id: g, tweet_id: e, tweet_external: !1 });
                    }
                }),
                E = (0, i.K9)((e, t) => o.E.getScheduledSpaces().then((e) => (e?.broadcasts && 0 !== e.broadcasts?.length ? (e.broadcasts.sort((e, t) => (new Date(e.broadcast.scheduled_start || 0) > new Date(t.broadcast.scheduled_start || 0) ? 1 : -1)), e.broadcasts) : []))),
                S = (0, n.cn)(null, (e, t) => t(E)),
                Z = (0, u.O)((e) => {
                    const t = e(E.resolved);
                    return t ? [...t] : [];
                }),
                w = (0, n.cn)(null, (e, t, a) =>
                    o.E.cancelScheduledSpace(a).then(() => {
                        const n = e(E.resolved) ?? [],
                            c = n.findIndex(({ broadcast: e }) => e.id === a);
                        -1 !== c && n.splice(c, 1), t(Z);
                    }),
                ),
                v = s().ha9f14b1,
                _ = s().jafbef80,
                C = (0, d.R)((e, t, a) => {
                    const { addToast: n, onClose: c, payload: s } = a;
                    return t(g.U, s)
                        .then(() => {
                            const e = s.scheduled_start_time,
                                t = new Date(e);
                            n({ text: v({ scheduleDate: (0, p.vh)(t), scheduleTime: (0, p.g6)(t) }) });
                        })
                        .catch(() => {
                            n({ text: _ });
                        })
                        .finally(() => {
                            c();
                        });
                }),
                k = (0, n.cn)((e) => e(C.isLoading) || e(y.isLoading)),
                T = (0, n.cn)((e) => e(l.dd).withEndpoint(r.Z).fetchTopics());
        },
        742113: (e, t, a) => {
            a.r(t), a.d(t, { StartSpaceSheet: () => Te, default: () => Te });
            var n = a(807896),
                c = (a(136728), a(202784)),
                s = a(400752),
                r = a(325686),
                o = a(107267),
                l = a(786998),
                i = a(154003),
                d = a(731708),
                u = a(466818),
                p = a(371344),
                m = a(451566),
                h = a(138099),
                g = a(392237),
                b = a(674132),
                f = a.n(b),
                y = a(711223),
                E = a(837020),
                S = a(404971),
                Z = a(97043),
                w = a(674306),
                v = a(600291),
                _ = a(637692),
                C = a(279902),
                k = a(610214),
                T = a(443781),
                F = a(782642),
                B = a(427266),
                I = a(900147),
                x = a(125363),
                D = a(390387),
                P = a(214997),
                L = a(13720),
                R = a(108837),
                V = a(992942),
                z = a(973014);
            const M = { goBack: f().cb70b894, deleteScheduledSpace: f().h61d92b0, selectedSpaces: f().a488f2eb };
            function A({ allTopics: e, setTopics: t, setView: a, topics: n }) {
                const [s, o] = c.useState(n),
                    l = s.map((e) => e.topic_id),
                    u = e?.browse_space_topics?.categories;
                if (!u) return;
                const p = () => {
                    a("start");
                };
                return c.createElement(
                    h.Z,
                    { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: p, restoreFocusInFocusTrapView: !0, style: j.root, type: "center", withMask: !0 },
                    c.createElement(
                        P.Z,
                        { showsVerticalScrollIndicator: !1, style: j.accordion },
                        c.createElement(
                            L.Z,
                            null,
                            u?.map((e) =>
                                c.createElement(
                                    R.Z,
                                    { iconImage: c.createElement(V.Z, { source: { uri: `https://abs-0.twimg.com/emoji/v2/svg/${e.icon}.svg` }, style: j.image }), key: e.semantic_core_entity_id, title: e.name || "" },
                                    c.createElement(
                                        r.Z,
                                        null,
                                        e.subtopics?.map((e, t) => {
                                            const a = { topic_id: e.topic_id, name: e.name };
                                            return c.createElement(z.Z, {
                                                "aria-label": e.name,
                                                compact: !0,
                                                disabled: 3 === s.length && !l.includes(e.topic_id),
                                                key: e.topic_id,
                                                onClick: () => {
                                                    s.map((e) => e.topic_id).includes(e.topic_id) ? o(s.filter((t) => t.topic_id !== e.topic_id)) : o((e) => [...e, a]);
                                                },
                                                selected: l.includes(e.topic_id),
                                                style: [j.selectionPill, 0 !== t ? { borderTopWidth: 0 } : {}],
                                                text: e.name,
                                            });
                                        }),
                                    ),
                                ),
                            ),
                        ),
                    ),
                    c.createElement(
                        i.ZP,
                        {
                            onClick: () => {
                                t(s), p();
                            },
                            style: j.saveButton,
                            type: "brandFilled",
                        },
                        "Save",
                    ),
                    c.createElement(d.ZP, { size: "subtext3", style: j.infoText }, M.selectedSpaces({ count: s.length, total: 3 })),
                );
            }
            const j = g.default.create((e) => ({ root: { maxHeight: "70vh", margin: e.spaces.space16 }, accordion: { marginBottom: e.spaces.space8, borderBottomWidth: 1, borderBottomColor: e.colors.gray200, borderStyle: "solid" }, saveButton: { margin: e.spaces.space8 }, selectionPill: { borderRadius: 0, textAlign: "center" }, infoText: { textAlign: "center", marginBottom: e.spaces.space8, color: e.colors.gray700 }, image: { width: e.spaces.space20, height: e.spaces.space20, marginStart: e.spaces.space8, justifyContent: "center" } }));
            var O = a(952428),
                H = a(894966),
                W = a(349745),
                $ = a(489253);
            const N = { goBack: f().cb70b894, deleteScheduledSpace: f().h61d92b0, scheduleSpace: f().e9b73da8 };
            function q({ cancelScheduledSpace: e, scheduledSpaces: t, setFocusedScheduledSpace: a, setView: n }) {
                return (
                    0 === t.length && n("start"),
                    c.createElement(
                        h.Z,
                        { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: () => n("start"), restoreFocusInFocusTrapView: !0, type: "bottom", withMask: !0 },
                        c.createElement(
                            r.Z,
                            { style: G.container },
                            c.createElement(i.ZP, { "aria-label": N.goBack, hoverLabel: { label: N.goBack }, icon: c.createElement(H.default, null), onPress: () => n("start"), pullLeft: !0, style: G.backButton, type: "primaryText" }),
                            c.createElement(
                                r.Z,
                                { style: G.form },
                                c.createElement(
                                    r.Z,
                                    { style: G.border },
                                    t.map((e) =>
                                        e.broadcast.scheduled_start
                                            ? c.createElement(
                                                  O.Z,
                                                  {
                                                      key: e.broadcast.id,
                                                      onPress: () => {
                                                          a(e), n("manage");
                                                      },
                                                      style: G.broadcastItem,
                                                  },
                                                  c.createElement(r.Z, null, c.createElement($.Z, { isExistingSpace: !0, scheduledFor: (0, W.BR)(new Date(e.broadcast.scheduled_start).getTime()) }), c.createElement(d.ZP, { size: "subtext2", weight: "bold" }, e.broadcast.status ? e.broadcast.status : "Scheduled Space")),
                                              )
                                            : null,
                                    ),
                                ),
                            ),
                        ),
                    )
                );
            }
            const G = g.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space16, justifyContent: "center", padding: e.spaces.space32 }, broadcastItem: { padding: e.spaces.space8, borderBottomWidth: e.spaces.space1, borderColor: e.colors.gray200, borderStyle: "solid" }, backButton: { position: "absolute", top: e.spaces.space16, start: e.spaces.space16 }, actionButton: { marginStart: e.spaces.space12 }, actionButtons: { gap: e.spaces.space12 }, form: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, border: { borderColor: e.colors.gray200, borderStyle: "solid", borderWidth: e.spaces.space1, borderBottomWidth: 0 }, formItem: { marginBottom: e.spaces.space20 }, date: { marginVertical: 0, marginTop: e.spaces.space2 } }));
            var Q = a(103165),
                Y = a(999769);
            const U = { goBack: f().cb70b894, deleteScheduledSpace: f().h61d92b0, editDetails: f().a7069f2e };
            function J({ cancelScheduledSpace: e, focusedScheduledSpace: t, setFocusedScheduledSpace: a, setView: n }) {
                if (!t.broadcast.scheduled_start) return null;
                const s = t.broadcast.id,
                    o = () => {
                        a(void 0), n("list");
                    };
                return c.createElement(
                    h.Z,
                    { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: o, restoreFocusInFocusTrapView: !0, type: "bottom", withMask: !0 },
                    c.createElement(
                        r.Z,
                        { style: K.container },
                        c.createElement(r.Z, { style: K.shareButton }, c.createElement(Y.ZP, { audioSpaceId: s, pullRight: !0, type: "icon-borderless" })),
                        c.createElement(i.ZP, { "aria-label": U.goBack, hoverLabel: { label: U.goBack }, icon: c.createElement(H.default, null), onPress: o, pullLeft: !0, style: K.backButton, type: "primaryText" }),
                        c.createElement(
                            r.Z,
                            { style: K.content },
                            c.createElement(r.Z, { style: K.spaceDetails }, c.createElement(r.Z, { style: K.mediaProxy }, c.createElement(Q.Z, { audioSpaceId: s }))),
                            c.createElement(
                                r.Z,
                                { style: K.actionButtons },
                                c.createElement(
                                    i.ZP,
                                    {
                                        onPress: () => {
                                            n("schedule");
                                        },
                                        size: "medium",
                                        type: "primaryFilled",
                                    },
                                    U.editDetails,
                                ),
                                c.createElement(
                                    i.ZP,
                                    {
                                        onPress: () => {
                                            e(), o();
                                        },
                                        size: "medium",
                                        type: "destructiveFilled",
                                    },
                                    U.deleteScheduledSpace,
                                ),
                            ),
                        ),
                    ),
                );
            }
            const K = g.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space16, justifyContent: "center", padding: e.spaces.space32 }, actionButtonContainer: { flexDirection: "row" }, backButton: { position: "absolute", top: e.spaces.space16, start: e.spaces.space32 }, shareButton: { position: "absolute", top: e.spaces.space16, end: e.spaces.space32 }, headerRightItem: { marginStart: e.spaces.space8 }, actionButton: { marginStart: e.spaces.space12 }, actionButtons: { gap: e.spaces.space12 }, mediaProxy: { marginTop: e.spaces.space4 }, content: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, marginTop: e.spaces.space16 }, spaceDetails: { marginBottom: e.spaces.space20 }, date: { marginVertical: 0, marginTop: e.spaces.space2 } }));
            var X = a(260706),
                ee = a(564619),
                te = a(184605),
                ae = a(741810),
                ne = a(566220),
                ce = a(943245),
                se = a(865698);
            const re = { goBack: f().cb70b894, outbox: f().a15f06fc, title: f().h735a98e, clear: f().dbd5d400, confirm: f().g9677c6e, update: f().h3701ffe, timeLabel: f().c5dd0190, dateLabel: f().edeff232, timezoneLabel: f().fddf24b4, recordSpace: f().e93f3c2a, errorMessageSpaceInPast: f().f6cfa3fe, errorMessageSpaceTooFarFormatter: f().a8f71a2b, deleteFailedMessage: f().ae092f6c, scheduledSpaceUpdated: f().jd7f0030, scheduleSpace: f().e9b73da8, saveChanges: f().a26da034 },
                oe = { year: !0, month: !0, day: !0 },
                le = {};
            function ie({ existingScheduledSpace: e, goBack: t, scheduledFor: a, setScheduledFor: n }) {
                const s = (0, x.v9)(D.VT),
                    l = (0, F.p)(),
                    u = (0, o.useHistory)(),
                    [p, g] = c.useState(e?.broadcast.available_for_replay);
                let b;
                b = e && e.broadcast.scheduled_start ? new Date(e.broadcast.scheduled_start) : a ? new Date(a) : (0, W.o3)();
                const f = (0, ne.R)(),
                    [y, E] = c.useState({ dateError: !1, timeError: !1, tooFarInFuture: !1, invalidDateTime: !1 }),
                    S = b || new Date(f().getTime() + 432e6),
                    [Z, w] = c.useState({ date: { year: S.getFullYear(), month: S.getMonth() + 1, day: S.getDate() }, time: { hour: S.getHours(), minute: S.getMinutes() } }),
                    v = c.useCallback(() => {
                        t();
                    }, [t]),
                    _ = c.useCallback(() => {
                        const a = (0, W.o3)(Z),
                            c = f();
                        if (a && !(0, W.bJ)(a, c) && !(0, W.WN)(a, c, se.i)) {
                            const c = a?.getTime() || 0;
                            if (e)
                                return void ae.E.replayBroadcastEdit(e.broadcast.id, { replay_edited_title: e.broadcast.status, scheduled_start_time: c, is_space_available_for_replay: p }).then(() => {
                                    u.goBack(), l({ text: re.scheduledSpaceUpdated });
                                });
                            n(c), t();
                        }
                    }, [f, Z, t, p, n, l, e, u]),
                    C = c.useCallback(
                        ({ date: e, time: t }) => {
                            const a = (0, W.o3)({ date: e, time: t }),
                                n = f();
                            let c = !1,
                                s = !1,
                                r = !1,
                                o = !1;
                            a && a <= n ? (n.getFullYear() === e.year && n.getMonth() + 1 === e.month && n.getDate() === e.day ? (s = !0) : (c = !0)) : a && (0, W.WN)(a, n, se.i) && ((c = !0), (r = !0)), ((0, te.Z)(e.year) && (0, te.Z)(e.month) && (0, te.Z)(e.day) && (0, te.Z)(t.hour) && (0, te.Z)(t.minute)) || (o = !0), E({ timeError: s, tooFarInFuture: r, dateError: c, invalidDateTime: o });
                        },
                        [f],
                    ),
                    k = c.useCallback(
                        (e) => {
                            const t = { ...Z, time: e };
                            w(t), C(t);
                        },
                        [Z, C],
                    ),
                    T = c.useCallback(
                        (e) => {
                            const t = { ...Z, date: e };
                            w(t), C(t);
                        },
                        [Z, C],
                    ),
                    { date: B, time: I } = Z,
                    { hour: P, minute: L } = I,
                    { day: R, month: V, year: z } = B,
                    M = f().getFullYear(),
                    A = M + 2,
                    j = ((e) => {
                        try {
                            const t = (0, W.o3)(Z) || new Date(),
                                a = (0, ce.It)(e || "en"),
                                n = t.toLocaleDateString(a),
                                c = t.toLocaleDateString(a, { timeZoneName: "long" }),
                                s = c.indexOf(n);
                            if (s >= 0) {
                                return (c.substring(0, s) + c.substring(s + n.length)).replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, "");
                            }
                            return c;
                        } catch (e) {
                            return null;
                        }
                    })(s),
                    { dateError: O, timeError: N, tooFarInFuture: q } = y,
                    G = q ? re.errorMessageSpaceTooFarFormatter({ days: se.i }) : re.errorMessageSpaceInPast,
                    Q = !e?.broadcast.narrow_cast_space_type || e?.broadcast.narrow_cast_space_type === se.g.ALL;
                return c.createElement(
                    h.Z,
                    { allowBackNavigation: !0, enableMaskForDismiss: !0, onMaskClick: v, restoreFocusInFocusTrapView: !0, type: "bottom", withMask: !0 },
                    c.createElement(
                        r.Z,
                        { style: de.container },
                        c.createElement(i.ZP, { "aria-label": re.goBack, hoverLabel: { label: re.goBack }, icon: c.createElement(H.default, null), onPress: v, pullLeft: !0, style: de.backButton, type: "primaryText" }),
                        c.createElement(
                            r.Z,
                            { style: de.form },
                            c.createElement(r.Z, { style: de.formItem }, c.createElement($.Z, { scheduledFor: Z })),
                            c.createElement(r.Z, { style: de.formItem }, c.createElement(d.ZP, { color: "gray700" }, re.dateLabel), c.createElement(X.Z, { day: R, errorMessage: O ? G : "", errors: O ? oe : le, label: re.dateLabel, maxSelectableYear: A, minSelectableYear: M, month: V, onChange: T, style: de.date, withCalendar: !0, year: z })),
                            c.createElement(r.Z, { style: de.formItem }, c.createElement(ee.Z, { errorText: N ? re.errorMessageSpaceInPast : "", hour: P, invalid: N, label: re.timeLabel, minute: L, onChange: k })),
                            j && c.createElement(r.Z, { style: de.formItem }, c.createElement(d.ZP, { color: "gray700" }, re.timezoneLabel), c.createElement(d.ZP, { size: "headline1" }, j)),
                            e &&
                                Q &&
                                c.createElement(
                                    r.Z,
                                    { style: [de.rowContainer, de.formItem] },
                                    c.createElement(d.ZP, null, re.recordSpace),
                                    c.createElement(m.Z, {
                                        onValueChange: () => {
                                            g((e) => !e);
                                        },
                                        value: p,
                                    }),
                                ),
                            c.createElement(i.ZP, { onPress: _, size: "large", type: "brandFilled" }, e ? re.saveChanges : re.scheduleSpace),
                        ),
                    ),
                );
            }
            const de = g.default.create((e) => ({ container: { display: "flex", flexDirection: "column", gap: e.spaces.space16, justifyContent: "center", padding: e.spaces.space32 }, actionButtonContainer: { flexDirection: "row" }, backButton: { position: "absolute", top: e.spaces.space16, start: e.spaces.space16 }, actionButton: { marginStart: e.spaces.space12 }, form: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, formItem: { marginBottom: e.spaces.space20 }, date: { marginVertical: 0, marginTop: e.spaces.space2 }, rowContainer: { flexDirection: "row", justifyContent: "space-between" } }));
            var ue = a(337631),
                pe = (a(585488), a(712696)),
                me = a.n(pe),
                he = a(736063);
            const ge = ue.Z,
                be = f().jb38600c,
                fe = f().b3633046;
            function ye({ communityId: e, onSelect: t }) {
                const a = me()(ge, {}),
                    n = [{ label: be, value: "" }, ...a.space_hostable_communities.map((e) => ({ label: e.name, value: e.rest_id }))];
                return a.space_hostable_communities.length
                    ? c.createElement(u.ZP, {
                          label: fe,
                          onChange: function (e) {
                              t(e || void 0);
                          },
                          options: n,
                          value: e,
                      })
                    : null;
            }
            function Ee(e) {
                return c.createElement(he.H, { errorConfig: { context: "spaces_community_select" }, suspenseFallback: null }, c.createElement(ye, e));
            }
            var Se = a(52340);
            const Ze = { anyone: f().c5d40fe2, close: f().ia5e7488, createYourSpace: f().b55d8a78, enableVideo: f().a8df1d34, everyone: f().baffe39a, getToKnowSpaces: f().if410292, loading: f().c02e7e3c, onlyEmployees: "Only X employees", onlyInvited: f().e3a87142, addTopics: f().i43fdce9, unauthorizedScheduleSpace: f().jafbef80, peopleYouFollow: f().af293dc2, placeholder: f().e32e99ec, recordSpace: f().e93f3c2a, scheduledSpaceDeleted: f().b701d610, manageScheduledSpaces: f().b028792d, more: f().h63a5c3c, scheduleSpace: f().e9b73da8, startNow: f().cdf630be, subscribers: f().d52a1caa, title: f().ic05a146, whoCanJoin: f().acd1bcb0, whoCanSpeak: f().h07146a2 },
                we = "2",
                ve = "1",
                _e = "0",
                Ce = [
                    { label: Ze.onlyInvited, value: _e },
                    { label: Ze.peopleYouFollow, value: ve },
                    { label: Ze.everyone, value: we },
                ],
                ke = c.createElement(y.default, null),
                Te = () => {
                    const e = (0, o.useHistory)(),
                        { featureSwitches: t } = (0, T.QZ)(),
                        a = (0, x.v9)(D.WM),
                        [n, g] = c.useState(""),
                        [b, f] = c.useState([]),
                        [y, Z] = c.useState(!1),
                        [w, P] = c.useState(!1),
                        [L, R] = c.useState(),
                        [V, z] = c.useState(),
                        M = (0, F.p)(),
                        [A, j] = c.useState("start"),
                        [O, H] = c.useState(se.g.ALL),
                        [W, $] = c.useState(_e),
                        N = [se.g.ALL, se.g.SUBSCRIBERS].includes(O),
                        q = w ? k.zc.VIDEO : k.zc.AUDIO,
                        G = t.isTrue("spaces_video_creation_enabled"),
                        Q = c.useCallback(() => {
                            e.goBack();
                        }, [e]),
                        Y = (0, s.b9)(Se.WJ);
                    c.useEffect(() => {
                        Y();
                    }, [Y]);
                    const U = c.useCallback(() => {
                            Z((e) => !e);
                        }, []),
                        J = c.useCallback(() => {
                            j("start");
                        }, []),
                        K = c.useCallback(() => {
                            P((e) => !e);
                        }, []),
                        X = c.useCallback((e) => {
                            g(e.target.value);
                        }, []),
                        ee = c.useCallback(() => {
                            j("general_education");
                        }, []),
                        te = c.useCallback(() => {
                            j("recording_education");
                        }, []),
                        ae = (0, s.b9)(Se.Wy),
                        ne = c.useCallback(() => {
                            if (!V) return;
                            const e = { ...I.Bx, community_id: L, content_type: q, conversation_controls: parseInt(W, 10), description: n, is_space_available_for_replay: N && y, narrow_cast_space_type: parseInt(O, 10), scheduled_start_time: V, topics: b };
                            ae({ payload: e, addToast: M, onClose: Q });
                        }, [M, N, L, q, W, y, O, Q, ae, V, n, b]),
                        ce = (0, s.b9)(Se.D9),
                        re = c.useCallback(() => {
                            ce({ narrowCastType: O, isActiveCreator: a, communityId: L, addToast: M, conversationControls: (0, B.mZ)(parseInt(W, 10)), isSuperFollowersOnly: a && O === se.g.SUBSCRIBERS, onClose: Q, options: { ...I.Bx, community_id: L, content_type: q, is_space_available_for_replay: N && y, narrow_cast_space_type: parseInt(O, 10), topics: b }, title: n });
                        }, [ce, O, a, L, M, W, Q, q, N, y, b, n]),
                        oe = c.useMemo(() => {
                            const e = [{ label: Ze.anyone, value: se.g.ALL }];
                            return t.isTrue("voice_rooms_employee_only_enabled") && e.push({ label: Ze.onlyEmployees, value: se.g.EMPLOYEES }), a && e.push({ label: Ze.subscribers, value: se.g.SUBSCRIBERS }), e;
                        }, [t, a]),
                        le = c.useCallback(
                            (e) => {
                                oe.some((t) => t.value === e) && H(e);
                            },
                            [oe],
                        ),
                        ie = c.useCallback((e) => {
                            Ce.some((t) => t.value === e) && $(e);
                        }, []),
                        de = (0, s.Dv)(Se.sD),
                        ue = () => c.createElement(c.Fragment, null, c.createElement(l.Z, { leftControl: c.createElement(i.ZP, { "aria-label": Ze.close, hoverLabel: { label: Ze.close }, icon: c.createElement(E.default, null), onPress: Q, type: "primaryText" }), rightControl: c.createElement(v.X, null, c.createElement(Fe, { setView: j })) }), c.createElement(S.default, { style: Ve.decorationIcon }), c.createElement(r.Z, { style: Ve.container }, c.createElement(d.ZP, { size: "title3", weight: "bold" }, Ze.createYourSpace), oe.length > 1 ? c.createElement(u.ZP, { label: Ze.whoCanJoin, onChange: le, options: oe, value: O }) : null, c.createElement(u.ZP, { label: Ze.whoCanSpeak, onChange: ie, options: Ce, value: W }), c.createElement(Ee, { communityId: L, onSelect: R }), c.createElement(p.Z, { onChange: X, placeholder: Ze.placeholder, style: Ve.textInput, value: n }), c.createElement(i.ZP, { onPress: () => j("add_topics"), type: "brandText" }, Ze.addTopics({ count: b.length, total: 3 })), N ? c.createElement(r.Z, { style: Ve.rowContainer }, c.createElement(r.Z, { style: Ve.innerRowContainer }, c.createElement(d.ZP, null, Ze.recordSpace), c.createElement(i.ZP, { hoverLabel: { label: Ze.more }, icon: ke, onPress: te, size: "xSmall", type: "brandText" })), c.createElement(m.Z, { onValueChange: U, value: y })) : null, G && c.createElement(r.Z, { style: Ve.rowContainer }, c.createElement(d.ZP, null, Ze.enableVideo), c.createElement(m.Z, { onValueChange: K, value: w })), c.createElement(r.Z, { style: Ve.rowCreateSpace }, c.createElement(i.ZP, { disabled: de, onPress: V ? ne : re, size: "large", style: Ve.flex, type: "brandFilled" }, V ? Ze.scheduleSpace : Ze.startNow), c.createElement(c.Suspense, { fallback: Pe }, c.createElement(xe, { setView: j }))), c.createElement(i.ZP, { onPress: ee, type: "brandText" }, Ze.getToKnowSpaces)));
                    return c.createElement(
                        h.Z,
                        { allowBackNavigation: !de, enableMaskForDismiss: !de, onMaskClick: Q, restoreFocusInFocusTrapView: !0, type: "bottom", withMask: !0 },
                        (() => {
                            switch (A) {
                                case "general_education":
                                    return c.createElement(C.ZP, { onDismiss: J });
                                case "recording_education":
                                    return c.createElement(_.ZP, { onDismiss: J });
                                case "start":
                                    return ue();
                                case "add_topics":
                                    return c.createElement(r.Z, { style: Ve.container }, c.createElement(v.X, null, c.createElement(Re, { setTopics: (e) => f(e), setView: (e) => j(e), topics: b })));
                                case "schedule":
                                case "list":
                                case "manage":
                                    return c.createElement(r.Z, { style: Ve.container }, c.createElement(Le, { scheduledFor: V, setScheduledFor: z, setView: j, view: A }));
                            }
                        })(),
                    );
                };
            function Fe(e) {
                const { setView: t } = e,
                    a = (0, s.Dv)(Se.aZ),
                    n = a.length > 0,
                    r = n ? Ze.manageScheduledSpaces({ count: a.length }) : void 0;
                return n ? c.createElement(i.ZP, { "aria-label": r, hoverLabel: { label: r }, icon: c.createElement(Z.default, null), onPress: () => t("list"), type: "primaryText" }) : null;
            }
            const Be = c.createElement(w.default, null),
                Ie = { label: Ze.scheduleSpace };
            function xe(e) {
                const { setView: t } = e,
                    a = (0, s.Dv)(Se.aZ);
                return c.createElement(De, { disabled: 10 === a.length, onPress: () => t("schedule") });
            }
            function De(e) {
                return c.createElement(i.ZP, (0, n.Z)({ "aria-label": Ze.scheduleSpace, hoverLabel: Ie, icon: Be, size: "large", type: "brandOutlined" }, e));
            }
            const Pe = c.createElement(De, { disabled: !0 });
            function Le(e) {
                const { scheduledFor: t, setScheduledFor: a, setView: n, view: r } = e,
                    [o, l] = c.useState(),
                    i = (0, F.p)(),
                    d = (0, s.b9)(Se.Ex),
                    u = c.useCallback(
                        (e) => {
                            d(e).then(() => {
                                i({ text: Ze.scheduledSpaceDeleted });
                            }),
                                l(void 0);
                        },
                        [d, i],
                    ),
                    p = (0, s.Dv)(Se.aZ) ?? [];
                switch (r) {
                    case "schedule":
                        return c.createElement(ie, { existingScheduledSpace: o, goBack: () => n(o ? "list" : "start"), scheduledFor: t, setScheduledFor: (e) => a(e) });
                    case "list":
                        return c.createElement(q, { cancelScheduledSpace: u, scheduledSpaces: p, setFocusedScheduledSpace: l, setView: (e) => n(e) });
                    case "manage":
                        if (!o) return;
                        return c.createElement(J, {
                            cancelScheduledSpace: () => {
                                u(o.broadcast.id);
                            },
                            focusedScheduledSpace: o,
                            setFocusedScheduledSpace: l,
                            setView: n,
                        });
                    default:
                        return null;
                }
            }
            function Re(e) {
                const t = (0, s.Dv)(Se.Bd);
                return c.createElement(A, (0, n.Z)({ allTopics: t }, e));
            }
            const Ve = g.default.create((e) => ({ container: { gap: e.spaces.space16, justifyContent: "center", padding: e.spaces.space32 }, decorationIcon: { alignSelf: "center", color: e.colors.purple500, height: e.spaces.space48, width: e.spaces.space48 }, innerRowContainer: { alignItems: "center", flexDirection: "row", gap: e.spaces.space4 }, rowContainer: { flexDirection: "row", justifyContent: "space-between" }, rowCreateSpace: { display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "stretch", gap: e.spaces.space8 }, flex: { flex: 1 }, textInput: { width: "100%" } }));
        },
        224192: (e, t, a) => {
            a.r(t), a.d(t, { AudioSpaceDiscovery: () => le, default: () => ie });
            var n = a(202784),
                c = a(688715),
                s = a(674132),
                r = a.n(s),
                o = a(718e3),
                l = a(651930),
                i = a(572067),
                d = a(252021),
                u = a(652904),
                p = a(325686),
                m = a(457311),
                h = a(879113),
                g = a(392237),
                b = a(293115),
                f = a(312771),
                y = a(731708),
                E = a(776342),
                S = a(174326),
                Z = a(755988),
                w = a(725516);
            const v = { section: "search_results" },
                _ = { emptyStateTitle: r().e5b5f091, emptyStateBody: r().g5812140, emptySectionText: r().e8fe1ecb };
            function C({ hasItems: e, name: t, searchQuery: a }) {
                const c = e ? null : n.createElement(y.ZP, { size: "subtext1", style: B.title }, _.emptySectionText({ section: t, searchQuery: a }));
                return n.createElement(n.Fragment, null, n.createElement(y.ZP, { size: "title4", style: e && B.title, weight: "heavy" }, t), c);
            }
            function k({ shouldFetch: e, spaceId: t }) {
                return e ? n.createElement(Z.Z, { audioSpaceId: t }) : n.createElement(E.default, null);
            }
            function T({ items: e, name: t, searchQuery: a }) {
                const [c, s] = n.useState(0),
                    r = !!e.length;
                return n.createElement(
                    n.Fragment,
                    null,
                    n.createElement(C, { hasItems: r, name: t, searchQuery: a }),
                    r
                        ? n.createElement(
                              S.Z,
                              {
                                  childrenStyle: [B.children],
                                  onVisibleRangeChange: ({ index: e, intersectionRatio: t }) => {
                                      1 === t && s(e);
                                  },
                                  style: B.carousel,
                              },
                              e.map((e, t) => {
                                  const a = t - 3 < c;
                                  return n.createElement(k, { key: e, shouldFetch: a, spaceId: e });
                              }),
                          )
                        : null,
                );
            }
            function F(e) {
                const { data: t, searchQuery: a } = e,
                    c = (0, w.z)();
                n.useEffect(() => {
                    c.scribeAction("impression");
                }, [c, t]);
                const s = t.sections.some((e) => !!e.items.length)
                    ? n.createElement(
                          p.Z,
                          { style: B.root },
                          t.sections.map(({ items: e, name: t }) => n.createElement(T, { items: e, key: `${a}${t}`, name: t, searchQuery: a })),
                      )
                    : n.createElement(m.Z, { header: _.emptyStateTitle({ searchQuery: a }), message: _.emptyStateBody });
                return n.createElement(b.nO, { namespace: v }, s);
            }
            const B = g.default.create((e) => ({ root: { paddingStart: e.componentDimensions.gutterHorizontal, paddingTop: e.spaces.space36 }, title: { marginBottom: e.spaces.space20 }, carousel: { marginBottom: e.spaces.space28 }, children: { width: "75%", height: "100%", marginEnd: e.spaces.space20 } }));
            var I = a(71620),
                x = a(58255);
            var D = a(107267),
                P = a(405661),
                L = a(2430),
                R = a(903019);
            function V() {
                const e = (0, D.useLocation)(),
                    t = (0, L.BX)(e.query?.q),
                    a = (0, R.CT)(P.e, P.e.Top, e);
                return { searchQuery: t?.trim(), searchFilter: a };
            }
            const z = r().fc962610,
                M = { section: "search_results" },
                A = (e, t) => {
                    const a = ["" + (e ? `f=${e}` : ""), "" + (t ? `q=${t}` : "")].filter(Boolean);
                    return "twitter://spaces/search" + (a.length ? `?${a.join("&")}` : "");
                };
            const j = g.default.create((e) => ({ root: { paddingVertical: e.componentDimensions.gutterVertical, paddingBottom: e.spaces.space64 }, loading: { paddingTop: e.spaces.space36 } })),
                O = function (e) {
                    const { searchFilter: t, searchQuery: a } = V(),
                        {
                            fetchStatus: c,
                            searchAudioSpaces: s,
                            searchResults: r,
                        } = (function () {
                            const [e, t] = n.useState(f.ZP.NONE),
                                [a, c] = n.useState(),
                                s = (0, I.n7)("useAudioSpaceSearch");
                            return {
                                searchAudioSpaces: n.useCallback(
                                    (e, a) => {
                                        if (e) {
                                            const n = s({ showToast: !1 });
                                            t(f.ZP.LOADING);
                                            const r = () => {
                                                x.w
                                                    .searchAudioSpace(e, a)
                                                    .then((e) => {
                                                        c(e), t(f.ZP.LOADED);
                                                    })
                                                    .catch((e) => {
                                                        throw (t(f.ZP.FAILED), e);
                                                    })
                                                    .catch(n);
                                            };
                                            x.w.initialized() ? r() : setTimeout(r, 100);
                                        }
                                    },
                                    [s],
                                ),
                                searchResults: a,
                                fetchStatus: e,
                            };
                        })();
                    n.useEffect(() => {
                        a && s(a, t);
                    }, [a, t, s]);
                    const o = a ? { ...M, component: `search_filter_${t.toLowerCase()}` } : M,
                        i = c === f.ZP.NONE ? n.createElement(m.Z, { header: z }) : null,
                        d = n.createElement(h.Z, { fetchStatus: c, onRequestRetry: () => (a ? s(a, t) : void 0), render: () => (a && r ? n.createElement(F, { data: r, searchQuery: a }) : null) });
                    return n.createElement(b.nO, { namespace: o }, n.createElement(n.Fragment, null, n.createElement(l.Z, { deepLink: A(t, a) }), n.createElement(p.Z, { style: j.root }, i || d)));
                };
            a(136728);
            var H = a(371344),
                W = a(956272),
                $ = a(649872),
                N = a(121522);
            const q = r().c432d2b2,
                G = { component: "search_box" },
                Q = "/i/spaces/search",
                Y = "/i/spaces/";
            function U() {
                const { inputRef: e } = (0, N.j)(),
                    t = (0, D.useHistory)(),
                    a = (0, D.useLocation)(),
                    c = (0, w.z)(),
                    { searchQuery: s } = V(),
                    [r, o] = n.useState(s);
                return n.createElement(
                    b.nO,
                    { namespace: G },
                    n.createElement(
                        p.Z,
                        { style: J.container },
                        n.createElement(
                            $.Z,
                            {
                                onSubmit: (n) => {
                                    if ((n.preventDefault(), n.stopPropagation(), r)) {
                                        const n = r?.trim();
                                        t.push({ pathname: Q, query: { ...a.query, q: n } }), c.scribe({ action: "search", data: { search_details: { query: r } } }), e.current?.blur();
                                    }
                                },
                                role: "search",
                                style: J.form,
                            },
                            n.createElement(H.Z, {
                                Icon: W.default,
                                autoComplete: "off",
                                focusOnClear: !0,
                                onChange: (e) => {
                                    o(e.target.value);
                                },
                                onClear: () => {
                                    o(""), c.scribeAction("clear"), t.push(Y);
                                },
                                onFocus: () => {
                                    c.scribe({ action: "click", data: { message: s } });
                                },
                                placeholder: q,
                                ref: e,
                                returnKeyType: "search",
                                spellCheck: "false",
                                value: r,
                                withClearButton: !0,
                            }),
                        ),
                    ),
                );
            }
            const J = g.default.create((e) => ({ container: { flex: 1, flexDirection: "row" }, form: { alignItems: "stretch", flex: 1 } }));
            a(543673), a(240753), a(128399);
            var K = a(507651),
                X = a(358198);
            const ee = [
                { label: r().i66136aa, id: "Top" },
                { label: r().b6da6b02, id: "Live" },
                { label: r().f178e38c, id: "Upcoming" },
            ];
            const te = function () {
                const e = (0, D.useLocation)(),
                    t = (0, w.z)(),
                    {
                        query: { f: a = ee[0].id },
                        search: c,
                    } = e,
                    s = new URLSearchParams(c);
                s.has("f") && s.delete("f");
                const r = ee.map(({ id: e, label: n }) => ({
                    key: e,
                    to: `${X.yy.AudioSpaceSearch}?f=${e}${Array.from(s).length ? `&${s.toString()}` : ""}`,
                    label: n,
                    isActive: () => a === e,
                    onClick: () =>
                        (function (e) {
                            t.scribe({ component: `search_filter_${e.toLowerCase()}`, action: "click" });
                        })(e),
                }));
                return n.createElement(K.Z, { links: r });
            };
            const ae = (0, a(668214).Z)().withAnalytics({ page: "audiospace", section: "tab" }),
                ne = n.createElement(U, null),
                ce = n.createElement(O, null),
                se = n.createElement(te, null),
                re = n.createElement(o.Z, { withSearchBox: !1, withTrends: !1 }),
                oe = r().ded416b0;
            function le(e) {
                const { history: t } = e;
                return n.createElement(u.Z, null, n.createElement(i.Z, { canonical: (0, c.ju)("https://x.com/i/spaces"), title: oe, type: "article" }), n.createElement(l.Z, null), n.createElement(d.Z, { customSearchBox: ne, history: t, primaryContent: ce, secondaryBar: se, sidebarContent: re, title: oe, withSearchBox: !0 }));
            }
            const ie = ae(le);
        },
        230378: (e, t, a) => {
            a.r(t), a.d(t, { default: () => g });
            var n = a(202784),
                c = a(107267),
                s = a(688715),
                r = a(674132),
                o = a.n(r),
                l = a(718e3),
                i = a(651930),
                d = a(572067),
                u = a(252021),
                p = a(652904),
                m = a(805137),
                h = a(293115);
            function g(e) {
                const t = (0, c.useHistory)();
                return n.createElement(h.nO, { namespace: f.scribe_namespace }, n.createElement(p.Z, null, n.createElement(d.Z, { canonical: f.canonical_url, description: b.Where_live_audio_conversations_happen, image: f.meta_image.url, imageAlt: f.meta_image.alt, imageH: f.meta_image.height, imageType: f.meta_image.type, imageW: f.meta_image.width, title: b.Spaces, type: "article" }), n.createElement(i.Z, null), n.createElement(u.Z, { backLocation: "/", history: t, primaryContent: n.createElement(m.B, null), sidebarContent: n.createElement(l.Z, null), title: b.Spaces })));
            }
            const b = { Spaces: o().ded416b0, Live_Twitter_Spaces: o().hd908df2, Where_live_audio_conversations_happen: o().fec3c1e0 },
                f = { canonical_url: (0, s.ju)("https://x.com/i/spacebar"), scribe_namespace: { page: "audiospace", section: "spacebar" }, meta_image: { type: "image/jpeg", url: "https://abs.twimg.com/sticky/cards/TwitterSpacesCardImage.3.jpg", width: 1200, height: 630, alt: b.Spaces } };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/modules.audio-262c94d4.5619e75a.js.map
