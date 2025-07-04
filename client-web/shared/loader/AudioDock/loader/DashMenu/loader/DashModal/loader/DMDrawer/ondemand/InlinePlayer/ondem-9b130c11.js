(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"],
    {
        790925: (e) => {
            e.exports = { queryId: "TYpVV9QioZfViHqEqRZxJA", operationName: "BrowseSpaceTopics", operationType: "query", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        433261: (e) => {
            e.exports = { queryId: "Sxn4YOlaAwEKjnjWV0h7Mw", operationName: "SubscribeToScheduledSpace", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        359215: (e) => {
            e.exports = { queryId: "Zevhh76Msw574ZSs2NQHGQ", operationName: "UnsubscribeFromScheduledSpace", operationType: "mutation", metadata: { featureSwitches: [], fieldToggles: [] } };
        },
        650556: (e, t, s) => {
            "use strict";
            s.d(t, { p$: () => _, H3: () => d, VI: () => c });
            s(571372);
            var n = s(640290),
                a = s(752624),
                o = s(988625),
                i = s(268940),
                r = s(741810),
                u = s(51249);
            s(136728);
            const c = new (class {
                constructor() {
                    (this.environment = (0, i.M)()),
                        (this.initialized = !1),
                        (this._onInitialized = new a.Z()),
                        (this.waitInitialized = () =>
                            new Promise((e) => {
                                this.initialized ? e() : this._onInitialized.subscribe(e);
                            })),
                        (this._maybeReinit = (e) => (t) => {
                            if (401 === t?.status && this.chatmanAccessToken) return this.initialize(this.chatmanAccessToken).then(() => this.client.dispatch(e));
                            throw t;
                        });
                }
                setEnvironment(e) {
                    (this.environment = e), (this.initialized = !1);
                }
                initialize(e) {
                    return (
                        (this.client = new n.ZP({ errorFilter: p, host: h(this.environment), dispatcher: g || void 0 })),
                        r.E.login()
                            .then(() => r.E.getTokenForService("guest"))
                            .then((t) => {
                                (this.guestServiceToken = t.authorization_token), (this.chatmanAccessToken = e), (this.initialized = !0), this._onInitialized.notify();
                            })
                    );
                }
                customInit(e, t) {
                    (this.client = new n.ZP({ errorFilter: p, host: h(this.environment), dispatcher: g || void 0 })), (this.guestServiceToken = e), (this.chatmanAccessToken = t), (this.initialized = !0), this._onInitialized.notify();
                }
                dispatch(e, t, s, n = 0) {
                    const a = JSON.stringify({ ...t }),
                        o = { method: s, path: e, headers: { "Content-Type": "application/json", authorization: this.guestServiceToken }, data: a, timeout: n };
                    return this.client.dispatch(o).catch(this._maybeReinit(o)).then(u.Z);
                }
                post(e, t) {
                    const s = `/api/v1/${e}`;
                    return this.dispatch(s, t, "POST");
                }
                get(e, t, s) {
                    const n = `/api/v1/${e}`;
                    return this.dispatch(n, t, "GET", s);
                }
                _getNtpMetadata() {
                    const e = 1e9 * (0, o.c)(new Date().getUTCDate());
                    return { ntpForBroadcasterFrame: e, ntpForLiveFrame: e };
                }
                joinAsSpeaker(e, t) {
                    const s = { ...this._getNtpMetadata(), broadcast_id: e, join_as_admin: t.join_as_admin, should_auto_join: t.should_auto_join, chat_token: this.chatmanAccessToken };
                    return this.post("audiospace/join", s);
                }
                submitSpeakerRequest(e) {
                    const t = { ...this._getNtpMetadata(), broadcast_id: e, chat_token: this.chatmanAccessToken };
                    return this.post("audiospace/request/submit", t);
                }
                cancelSpeakerRequest(e, t) {
                    const s = { ...this._getNtpMetadata(), broadcast_id: e, session_uuid: t, chat_token: this.chatmanAccessToken };
                    return this.post("audiospace/request/cancel", s);
                }
                negotiateStream(e) {
                    const t = { session_uuid: e };
                    return this.post("audiospace/stream/negotiate", t);
                }
                publishStream(e) {
                    const t = { ...this._getNtpMetadata(), ...e, chat_token: this.chatmanAccessToken };
                    return this.post("audiospace/stream/publish", t);
                }
                endStream(e) {
                    return this.post("audiospace/stream/end", { ...this._getNtpMetadata(), ...e, chat_token: this.chatmanAccessToken });
                }
                muteSpeaker(e, t) {
                    const s = { ...this._getNtpMetadata(), session_uuid: e, broadcast_id: t, chat_token: this.chatmanAccessToken };
                    return this.post("audiospace/muteSpeaker", s);
                }
                unmuteSpeaker(e, t) {
                    const s = { ...this._getNtpMetadata(), session_uuid: e, broadcast_id: t, chat_token: this.chatmanAccessToken };
                    return this.post("audiospace/unmuteSpeaker", s);
                }
                getCallStatus(e, t) {
                    return this.post("audiospace/call/status", { broadcast_id: e, include_non_active_sessions: t });
                }
                inviteToSpeak(e, t) {
                    return this.post("audiospace/admin/setAudiospaceSettings", { broadcast_id: t, conversation_controls: 0, mentioned_twitter_user_ids: [e] });
                }
                adminInvite(e) {
                    return this.post("audiospace/admin/invite", { ...e, chat_token: this.chatmanAccessToken });
                }
                setSpaceSettings(e, t, s, n) {
                    return this.post("audiospace/admin/setAudiospaceSettings", { broadcast_id: e, conversation_controls: t, topics: s, mentioned_twitter_user_ids: n });
                }
                sendPrivateMessage(e, t, s, n) {
                    return this.post("chat/forward/private", { broadcast_id: n, chat_token: this.chatmanAccessToken, recipients: [s], chat_type: t, body: e });
                }
                removeParticipants(e, t) {
                    return this.post("audiospace/admin/removeParticipant", { ...this._getNtpMetadata(), chat_token: this.chatmanAccessToken, broadcast_id: t, twitter_user_ids: e });
                }
                muteSpace(e) {
                    return this.post("audiospace/admin/muteSpace", { ...this._getNtpMetadata(), chat_token: this.chatmanAccessToken, broadcast_id: e });
                }
                unmuteSpace(e) {
                    return this.post("audiospace/admin/unmuteSpace", { ...this._getNtpMetadata(), chat_token: this.chatmanAccessToken, broadcast_id: e });
                }
                approveRequest(e) {
                    return this.post("audiospace/request/approve", { ...this._getNtpMetadata(), chat_token: this.chatmanAccessToken, session_uuid: e });
                }
                rejectRequest(e) {
                    return this.post("audiospace/request/reject", { session_uuid: e, chat_token: this.chatmanAccessToken });
                }
                streamEject(e) {
                    return this.post("audiospace/stream/eject", { ...this._getNtpMetadata(), ...e, chat_token: this.chatmanAccessToken });
                }
                removeAdmin(e) {
                    return this.post("audiospace/removeAdmin", { ...this._getNtpMetadata(), ...e, chat_token: this.chatmanAccessToken });
                }
                addAdmin(e) {
                    return this.post("audiospace/admin/addAdmin", { ...this._getNtpMetadata(), ...e, chat_token: this.chatmanAccessToken });
                }
                setAudiospaceSettings() {
                    return Promise.reject(new Error("not implemented"));
                }
                endAudioSpace(e) {
                    return this.post("audiospace/admin/endAudiospace", { broadcast_id: e, chat_token: this.chatmanAccessToken });
                }
                raiseHand(e) {
                    return this.post("audiospace/raiseHand", { ...e, chat_token: this.chatmanAccessToken });
                }
                lowerHand(e) {
                    return this.post("audiospace/lowerHand", { ...e, chat_token: this.chatmanAccessToken });
                }
            })();
            function d(e) {
                return !e || c.initialized ? Promise.resolve() : r.E.accessChat(e).then((e) => c.initialize(e.access_token));
            }
            const l = (e) => e < 200 || e > 399;
            function p(e, t) {
                return t(e).then((t) =>
                    t.status && l(t.status)
                        ? Promise.reject(
                              (function (e, t) {
                                  const { uri: s } = e,
                                      { status: n } = t,
                                      a = t.body;
                                  return new m({ uri: s, status: n, errorBody: a });
                              })(e, t),
                          )
                        : t,
                );
            }
            function h(e, t = "guest") {
                switch (e) {
                    case "development":
                        return `https://dev-${t}.pscp.tv`;
                    case "canary":
                        return `https://canary-${t}.pscp.tv`;
                    default:
                        return `https://${t}.pscp.tv`;
                }
            }
            class m extends Error {
                constructor({ errorBody: e, status: t, uri: s }) {
                    super(`${s} HTTP-${t} message: ${e}`), (this.name = "GuestServiceApiError"), (this.uri = s), (this.status = t);
                }
            }
            const _ = Object.freeze({ RequestSubmitted: 1, RequestCancelled: 2, RequestRejected: 3, RequestApproved: 4, InvitationSent: 5, InvitationWithdrawn: 6, InvitationDeclined: 7, InvitationAccepted: 8, StreamNegotiated: 9, StreamPublished: 10, StreamEjected: 11, StreamEnded: 12, StreamTimedOut: 13, SessionTerminated: 14, StreamCountdown: 15, AdminStreamPublished: 16, HostStreamPublished: 17, HostStreamReconnecting: 18 });
            let g;
        },
        239496: (e, t, s) => {
            "use strict";
            s.d(t, { FH: () => u });
            s(571372);
            var n = s(640290),
                a = s(268940),
                o = s(51249);
            class i {
                constructor() {
                    (this.environment = (0, a.M)()), this._setup();
                }
                _setup() {
                    this.client = new n.ZP({ errorFilter: d, dispatcher: r ?? void 0, host: p(this.environment, "signer") });
                }
                setEnvironment(e) {
                    (this.environment = e), this._setup();
                }
                dispatch(e, t, s, n = 0) {
                    const a = { method: s, path: e, headers: { "Content-Type": "application/json" }, data: JSON.stringify({ ...t }), timeout: n };
                    return this.client.dispatch(a).then(o.Z);
                }
                post(e, t) {
                    const s = `/${e}`;
                    return this.dispatch(s, t, "POST");
                }
                getRegion() {
                    return this.post("region");
                }
            }
            let r;
            let u = new i();
            const c = (e) => e < 200 || e > 399;
            function d(e, t) {
                return t(e).then((t) => (t.status && c(t.status) ? Promise.reject(new l(e.uri, t.status, t.body)) : t));
            }
            class l extends Error {
                constructor(e, t, s) {
                    super(`${e} HTTP-${t} message: ${s}`), (this.name = "SignerApiError"), (this.url = e), (this.status = t);
                }
            }
            function p(e, t) {
                switch (e) {
                    case "development":
                        return `https://dev-${t}.pscp.tv`;
                    case "canary":
                        return `https://canary-${t}.pscp.tv`;
                    default:
                        return `https://${t}.pscp.tv`;
                }
            }
        },
        656898: (e, t, s) => {
            "use strict";
            s.d(t, { $e: () => J, Cm: () => R, QG: () => P, bP: () => S, bd: () => w, lo: () => f });
            var n = s(565058),
                a = s(400752),
                o = s(668260),
                i = s(111677),
                r = s.n(i),
                u = s(42134),
                c = s(484633),
                d = s(610214),
                l = s(110138),
                p = s(163889),
                h = s(582129),
                m = s(4427),
                _ = s(725405),
                g = s(125363),
                v = s(390387),
                E = s(809674);
            const b = (0, n.cn)(null),
                f = (0, n.cn)(null, (e, t, s) => {
                    t(b, s);
                    const n = e(u.cI) ?? c.Q.listener,
                        a = s?.cohosts?.find((e) => e.periscope_user_id === l.Z.proxsee.periscopeUserId());
                    a && n === c.Q.speaker && t(u.cI, c.Q.cohost), (s?.state !== o.default.SpaceState.Ended && s?.state !== o.default.SpaceState.TimedOut) || e(d.CP) || e(m.MG) || s?.rest_id !== e(u.rm) || t(h.dq, { isEnded: !0 });
                }),
                P = (0, n.cn)(null, (e, t) => {
                    t(b, null);
                }),
                R = {
                    _test: {
                        activeSpaceMetadataAtom: (0, n.cn)(
                            (e) => e(b),
                            (e, t, s) => t(b, s),
                        ),
                    },
                    isMutedAtom: (0, n.cn)((e) => e(b)?.is_muted),
                    participantTotalAtom: (0, n.cn)((e) => e(b)?.participants.total),
                    replayStartTimeAtom: (0, n.cn)((e) => e(b)?.replay_start_time),
                    endedAtAtom: (0, n.cn)((e) => e(b)?.ended_at),
                    maxCapacityAtom: (0, n.cn)((e) => {
                        const t = e(b);
                        return { max_admin_capacity: t?.max_admin_capacity ?? 3, max_guest_sessions: t?.max_guest_sessions ?? 10 };
                    }),
                    followedByHostAtom: (0, n.cn)((e) => e(b)?.followed_by_host),
                    pendingAdminTwitterUserIdsAtom: (0, n.cn)((e) => e(b)?.pending_admin_twitter_user_ids),
                    mentionedUsersAtom: (0, n.cn)((e) => e(b)?.mentioned_users),
                    conversationControlsAtom: (0, n.cn)((e) => e(b)?.conversation_controls),
                    participantsAtom: (0, n.cn)((e) => {
                        const t = e(b);
                        return { host: t?.host, cohosts: t?.cohosts, participants: t?.participants };
                    }),
                    sharingsAtom: (0, n.cn)((e) => e(b)?.sharings),
                    tweetResultsAtom: (0, n.cn)((e) => e(b)?.tweet_results),
                    titleAtom: (0, n.cn)((e) => {
                        const t = e(b),
                            s = t?.title?.trim(),
                            n = t?.host?.display_name;
                        return s || (n ? r().cfbea177({ name: n }) : r().ab4fc8bc);
                    }),
                    tunedInCountAtom: (0, n.cn)((e) => {
                        const t = e(b),
                            { total_live_listeners: s, total_replay_watched: n } = t || {};
                        return (s ?? 0) + (n ?? 0);
                    }),
                    spaceStateAtom: (0, n.cn)((e) => {
                        const t = e(b),
                            s = t?.state;
                        return { NotStarted: s === o.default.SpaceState.NotStarted, PrePublished: s === o.default.SpaceState.PrePublished, Running: s === o.default.SpaceState.Running, TimedOut: s === o.default.SpaceState.TimedOut, Ended: s === o.default.SpaceState.Ended, Canceled: s === o.default.SpaceState.Canceled, loaded: Boolean(t), loading: !t, error: !t, joined: !0, recording: Boolean(t?.is_space_available_for_replay) && s === o.default.SpaceState.Running, joinable: !t?.disallow_join, replayable: Boolean(t?.is_space_available_for_replay) && (s === o.default.SpaceState.Ended || s === o.default.SpaceState.TimedOut), clippable: Boolean(t?.is_space_available_for_clipping), superFollowersOnly: t?.narrow_cast_space_type === o.default.AudienceEnum.superFollowersOnly };
                    }),
                    adminsAtom: (0, n.cn)((e) => e(b)?.participants.admins),
                },
                S = () => (0, a.Dv)(R.spaceStateAtom),
                k = (0, n.cn)(null),
                w = () => {
                    const e = (0, a.Dv)(b),
                        t = (0, _.Z)(),
                        s = (0, a.Dv)(k),
                        n = (0, a.Dv)(R.spaceStateAtom),
                        i = (0, g.v9)(v.Qb);
                    if (s) return s;
                    if (!e) return (0, E.S)({ analytics: t, details: {} });
                    let r;
                    e?.narrow_cast_space_type === o.default.AudienceEnum.superFollowersOnly ? (r = "super_followers") : e?.narrow_cast_space_type === o.default.AudienceEnum.employeesOnly ? (r = "employees") : e?.community && (r = "community");
                    let u = "live_not_recording";
                    return e?.is_space_available_for_replay && (u = n?.Running ? "live_recording" : "replay"), (0, E.S)({ analytics: t, details: { broadcast_id: e?.rest_id, host_id: e?.host?.user_id, host_periscope_id: e?.host?.periscope_user_id, audio_space_start_type: e?.scheduled_start ? "scheduled" : "adhoc", audio_space_narrow_cast_type: r, audio_space_recording_type: u, state: e?.state, is_logged_in: i } });
                },
                J = () => {
                    const e = (0, n.cn)((e) => {
                        const t = e(b);
                        return (e, s) => {
                            const n = { space: void 0, ...s };
                            if (t) {
                                const e = JSON.parse(JSON.stringify(t));
                                e?.participants.listeners && delete e.participants.listeners, (n.space = e);
                            }
                            (0, p.ZP)(e, { extra: n });
                        };
                    });
                    return (0, a.Dv)(e);
                };
        },
        304148: (e, t, s) => {
            "use strict";
            s.d(t, { Cl: () => u, zC: () => c });
            var n = s(565058),
                a = s(400752),
                o = s(193089),
                i = s(509599),
                r = s(650556);
            const u = (0, n.cn)((e) => {
                    const t = e(i.RS);
                    return (0, o.Z)(t.map((e) => [e.guest_user_id, e]));
                }),
                c = () => (0, a.Dv)(i.RS).filter((e) => e.session_state === r.p$.RequestSubmitted);
        },
        358809: (e, t, s) => {
            "use strict";
            s.d(t, { G: () => i });
            s(571372);
            var n = s(251067),
                a = s(163889),
                o = s(4643);
            class i {
                constructor({ janusUrl: e, store: t, vidManToken: s }) {
                    (this.create = () => this._dispatch(this.janusUrl, { janus: "create" })),
                        (this.attachVideoRoom = (e) => {
                            const t = `${this.janusUrl}/${e}`;
                            return this._dispatch(t, { janus: "attach", plugin: "janus.plugin.videoroom" });
                        }),
                        (this.destroy = (e) => {
                            const t = `${this.janusUrl}/${e}`;
                            return this._dispatch(t, { janus: "destroy" });
                        }),
                        (this.longPoll = (e) => {
                            const t = new AbortController();
                            return (
                                (this.longPollAbortController = t),
                                this.networkHelper.get(`${this.janusUrl}/${e}?maxev=1`, {}, 32e3, t.signal).catch((e) => {
                                    if ((0 === e.status && !0 !== e.request?.signal?.aborted && ((0, n.fH)(n.vw.prod) || (0, a.Hj)(new Error("network partition with janus poller"), { level: "warning" })), 0 !== e.status && !0 !== e.request?.signal?.aborted)) throw e;
                                })
                            );
                        }),
                        (this._dispatch = (e, t) => {
                            const s = { transaction: (0, o.E6)(), ...t };
                            return this.networkHelper.post(e, s).then((e) => {
                                if ("error" === e.janus) throw new Error(`JanusApi: [${e.error.code}] ${e.error.reason}`);
                                return e;
                            });
                        }),
                        (this.janusUrl = e),
                        (this.networkHelper = new o.ZP(s, t));
                }
            }
        },
        456766: (e, t, s) => {
            "use strict";
            s.d(t, { h: () => d });
            s(571372);
            var n = s(251067),
                a = s(2138),
                o = s(42134),
                i = s(163889),
                r = s(942428);
            const u = Object.freeze({ JanusPollerResponseEnumWebRtcUp: "JanusPollerResponseEnumWebRtcUp", JanusPollerResponseEnumMediaVideo: "JanusPollerResponseEnumMediaVideo", JanusPollerResponseEnumMediaAudio: "JanusPollerResponseEnumMediaAudio", JanusPollerResponseEnumJanusSlowLink: "JanusPollerResponseEnumJanusSlowLink", JanusPollerResponseEnumKeepAlive: "JanusPollerResponseEnumKeepAlive", JanusPollerResponseEnumHangup: "JanusPollerResponseEnumHangup", JanusPollerResponseEnumDetached: "JanusPollerResponseEnumDetached", JanusPollerResponseEnumVideoRoomDestroyed: "JanusPollerResponseEnumVideoRoomDestroyed", JanusPollerResponseEnumEventPublishersList: "JanusPollerResponseEnumEventPublishersList", JanusPollerResponseEnumUpdated: "JanusPollerResponseEnumUpdated", JanusPollerResponseEnumEventUnpublished: "JanusPollerResponseEnumEventUnpublished", JanusPollerResponseEnumEventLoggedInUserUnpublished: "JanusPollerResponseEnumEventLoggedInUserUnpublished", JanusPollerResponseEnumEventKicked: "JanusPollerResponseEnumEventKicked", JanusPollerResponseEnumEventLoggedInUserLeaving: "JanusPollerResponseEnumEventLoggedInUserLeaving", JanusPollerResponseEnumEventLeaving: "JanusPollerResponseEnumEventLeaving", JanusPollerResponseEnumVideoRoomSlowLink: "JanusPollerResponseEnumVideoRoomSlowLink", JanusPollerResponseEnumEventJoined: "JanusPollerResponseEnumEventJoined", JanusPollerResponseEnumEventConfigured: "JanusPollerResponseEnumEventConfigured", JanusPollerResponseEnumEventListenerAttached: "JanusPollerResponseEnumEventListenerAttached", JanusPollerResponseEnumEventStarted: "JanusPollerResponseEnumEventStarted", JanusPollerResponseEnumEventLeft: "JanusPollerResponseEnumEventLeft", JanusPollerResponseParseError: "JanusPollerResponseParseError", JanusPollerResponseEnumUnknown: "JanusPollerResponseEnumUnknown", JanusPollerResponseEnumError: "JanusPollerResponseEnumError" });
            function c(e) {
                let t = u.JanusPollerResponseEnumUnknown;
                switch (e.janus) {
                    case "detached":
                        t = u.JanusPollerResponseEnumDetached;
                        break;
                    case "webrtcup":
                        t = u.JanusPollerResponseEnumWebRtcUp;
                        break;
                    case "slowlink":
                        t = u.JanusPollerResponseEnumVideoRoomSlowLink;
                        break;
                    case "hangup":
                        t = u.JanusPollerResponseEnumHangup;
                        break;
                    case "keepalive":
                        t = u.JanusPollerResponseEnumKeepAlive;
                        break;
                    case "error":
                        t = u.JanusPollerResponseEnumError;
                        break;
                    case "media":
                        if (!e.type) {
                            t = u.JanusPollerResponseParseError;
                            break;
                        }
                        "video" === e.type && (t = u.JanusPollerResponseEnumMediaVideo), "audio" === e.type && (t = u.JanusPollerResponseEnumMediaAudio);
                        break;
                    case "event":
                        if (!e.plugindata.data) {
                            t = u.JanusPollerResponseParseError;
                            break;
                        }
                        if (!e.plugindata.data.videoroom) break;
                        t = ((e) => {
                            const t = e.plugindata?.data;
                            let s = u.JanusPollerResponseEnumUnknown;
                            switch (t?.videoroom) {
                                case "joined":
                                    s = u.JanusPollerResponseEnumEventJoined;
                                    break;
                                case "attached":
                                    s = u.JanusPollerResponseEnumEventListenerAttached;
                                    break;
                                case "slow_link":
                                    s = u.JanusPollerResponseEnumVideoRoomSlowLink;
                                    break;
                                case "destroyed":
                                    s = u.JanusPollerResponseEnumVideoRoomDestroyed;
                                    break;
                                case "updated":
                                    s = u.JanusPollerResponseEnumUpdated;
                                    break;
                                case "event":
                                    t.error && (s = u.JanusPollerResponseEnumError), t.configured && (s = u.JanusPollerResponseEnumEventConfigured), t.started && (s = u.JanusPollerResponseEnumEventStarted), t.kicked && (s = u.JanusPollerResponseEnumEventKicked), t.unpublished && (s = "ok" === t.unpublished ? u.JanusPollerResponseEnumEventLoggedInUserUnpublished : u.JanusPollerResponseEnumEventUnpublished), t.leaving && (s = "ok" === t.leaving ? u.JanusPollerResponseEnumEventLoggedInUserLeaving : u.JanusPollerResponseEnumEventLeaving), t.left && (s = u.JanusPollerResponseEnumEventLeft), t.publishers && (s = u.JanusPollerResponseEnumEventPublishersList);
                            }
                            return s;
                        })(e);
                }
                return { ...e, parsedType: t };
            }
            class d {
                constructor({ filter: e, handlers: t, janusApi: s, janusSessionId: u, store: d, transactionStore: p }) {
                    (this._running = !1),
                        (this.handleFlakyNetwork = (0, a.Z)(
                            () => {
                                this._running && this.janusApi.longPollAbortController?.abort();
                            },
                            1e4,
                            { leading: !0, trailing: !1 },
                        )),
                        (this._subscriptions = new Set()),
                        (this._notify = (e) => {
                            this._subscriptions.forEach((t) => t(e));
                        }),
                        (this._startJanusVideoRoomPollerIfNeeded = () => {
                            this._running &&
                                this.janusApi
                                    .longPoll(this.janusSessionId)
                                    .then(
                                        (e) => {
                                            e && (this._notify(e), this.handleResponse(e));
                                        },
                                        (e) => {
                                            404 === e.status ? (this.handlers.onJanusRestart(), (0, n.fH)(n.vw.prod) || (0, i.ZP)(e, { level: "warning" })) : this._running && (0, i.ZP)(e);
                                        },
                                    )
                                    .finally(() => {
                                        this._startJanusVideoRoomPollerIfNeeded();
                                    });
                        }),
                        (this.handleResponse = (e) => {
                            if (e.plugindata?.data.error && e.plugindata.data.error_code) {
                                const { error: t, error_code: s } = e.plugindata.data,
                                    n = new l(s, t);
                                return e.transaction ? this.transactionStore.reject(e.transaction, n) : (0, i.ZP)(n), void (433 === s && this.handlers.onJanusRestart());
                            }
                            e.transaction && this.transactionStore.resolve(e.transaction);
                            const t = c(e);
                            if ((this._recordMetrics(t), this.filter && !this.filter(e))) return;
                            if ("joined" === t.plugindata?.data.videoroom) {
                                const e = t.plugindata?.data.id;
                                void 0 !== e && this.handlers.onPublisherId(e);
                            }
                            if ((t.plugindata?.data.publishers && this.handlers.onNewPublishers(t.plugindata?.data.publishers), t.jsep && this.handlers.onJsep(t.jsep, t), "attached" === t.plugindata?.data.videoroom || "updated" === t.plugindata?.data.videoroom)) {
                                const e = t.plugindata.data.streams;
                                e && this.handlers.onAttached(e);
                            }
                            if ("fs_metadata" === t.plugindata?.data.videoroom) {
                                const e = t.plugindata.data.media;
                                this.handlers.onDummyMetadata(e);
                            }
                            const s = t.plugindata?.data.unpublished ?? t.plugindata?.data.kicked ?? ("ok" === t.plugindata?.data.leaving ? t.plugindata.data.id : void 0);
                            s && "number" == typeof s && this.handlers.onLeave(s);
                        }),
                        (this._recordMetrics = (e) => {
                            const t = this.store,
                                s = t.get(o.rm);
                            s && "slowlink" === e.janus && t.set((0, r.k8)((0, r.Rq)(s)).incrCountAtom);
                        }),
                        (this.filter = e),
                        (this.janusApi = s),
                        (this.janusSessionId = u),
                        (this.handlers = t),
                        (this.store = d),
                        (this.transactionStore = p);
                }
                start() {
                    (this._running = !0), this._startJanusVideoRoomPollerIfNeeded();
                }
                stop() {
                    (this._running = !1), (0, n.fH)(n.vw.prod) || (0, i.ZP)("janus poller stopped", { level: "warning" }), this.janusApi.longPollAbortController?.abort();
                }
                listen(e) {
                    return (
                        this._subscriptions.add(e),
                        () => {
                            this._subscriptions.delete(e);
                        }
                    );
                }
            }
            class l extends Error {
                constructor(e, t) {
                    super(`[${e}] ${t}`), (this.name = "JanusPushError");
                }
            }
        },
        759013: (e, t, s) => {
            "use strict";
            s.d(t, { x: () => a });
            s(571372);
            var n = s(4643);
            class a {
                constructor(e, t, s) {
                    (this.detach = () => this._dispatch({ janus: "detach" })),
                        (this.createRoom = ({ withDummyPublisher: e }) => this._message({ request: "create", audiocodec: "opus", videocodec: "h264", transport_wide_cc_ext: !0, app_component: "audio-room", h264_profile: "42e01f", dummy_publisher: e })),
                        (this.destroyRoom = () => this._message({ request: "destroy" })),
                        (this.joinRoomAsPublisher = () => this._message({ request: "join", ptype: "publisher", display: this.config.periscopeUserId })),
                        (this.joinRoomAsSubscriber = (e) => this._message({ request: "join", ptype: "subscriber", streams: e })),
                        (this.unpublish = () => this._message({ request: "unpublish" })),
                        (this.leave = () => this._message({ request: "leave" })),
                        (this.subscribeNewStreams = (e) => this._message({ request: "subscribe", streams: e })),
                        (this.updateStreams = ({ subscribe: e, unsubscribe: t }) => this._message({ request: "update", subscribe: e, unsubscribe: t })),
                        (this.switch = (e) => this._message({ request: "switch", streams: e })),
                        (this.restartIce = () => this._message({ request: "configure", stream_name: this.config.streamName, vidman_token: this.config.vidManToken, restart: !0 })),
                        (this.configure = (e) => this._message({ request: "configure", stream_name: this.config.streamName, vidman_token: this.config.vidManToken, ...e })),
                        (this.sendSdpOffer = (e, t, s) => this._message({ request: "configure", session_uuid: this.config.guestServicesSessionUuid, stream_name: this.config.streamName, vidman_token: this.config.vidManToken, descriptions: t, ...(s && { restart: !0 }) }, e)),
                        (this.sendSdpAnswer = (e) => this._message({ request: "start" }, e)),
                        (this._message = (e, t) => this._dispatch({ janus: "message", body: { room: this.config.roomId, periscope_user_id: this.config.periscopeUserId, ...e }, jsep: t })),
                        (this.sendTrickleCandidate = (e) => this._dispatch({ janus: "trickle", candidate: e })),
                        (this._dispatch = (e) => {
                            const t = `${this.config.janusURL}/${this.config.janusSessionId}/${this.config.handlerId}`,
                                s = (0, n.E6)(),
                                a = this.transactionStore?.listen(s),
                                o = { transaction: s, ...e };
                            return this.networkHelper.post(t, o).then((e) => {
                                if ("error" === e.janus) throw new Error(`JanusVideoRoomPluginApi: [${e.error.code}] ${e.error.reason}`);
                                return a && "ack" === e.janus ? Promise.race([a.promise, ((t = 5e3), new Promise((e) => setTimeout(e, t)))]).then(() => e) : e;
                                var t;
                            });
                        }),
                        (this.networkHelper = new n.ZP(e.vidManToken, t)),
                        (this.config = e),
                        (this.transactionStore = s);
                }
            }
        },
        4643: (e, t, s) => {
            "use strict";
            s.d(t, { ZP: () => c, E6: () => l });
            s(571372);
            var n = s(251067),
                a = s(961111),
                o = s.n(a),
                i = s(640290),
                r = s(51249);
            s(136728);
            var u = s(521799);
            class c {
                constructor(e, t, s = {}) {
                    (this.credentials = e), d() && (s.filters = [...(s.filters ?? []), u.oT]), _ && (s.dispatcher = _), (s.errorFilter = h), (this.client = new i.ZP(s));
                }
                httpRequest(e, t, s, n = 0, a) {
                    const i = JSON.stringify(t),
                        u = { method: s, path: e, headers: { "Content-Type": "application/json", Authorization: this.credentials }, data: i, timeout: n, signal: a };
                    return o()((e) =>
                        this.client.dispatch(u).catch((t) => {
                            if (0 === t.status && !0 !== t.request.signal?.aborted) throw t;
                            return e(t), t;
                        }),
                    ).then(r.Z);
                }
                post(e, t) {
                    return this.httpRequest(e, t, "POST");
                }
                get(e, t, s, n) {
                    return this.httpRequest(e, t, "GET", s, n);
                }
            }
            const d = () => !(0, n.fH)(n.vw.prod),
                l = () => Math.random().toString(36).slice(2),
                p = (e) => e < 200 || e > 399;
            function h(e, t) {
                return t(e).then((t) => (t.status && p(t.status) ? Promise.reject(new m({ uri: e.uri, status: t.status, errorBody: t.body })) : t));
            }
            class m extends Error {
                constructor({ errorBody: e, status: t, uri: s }) {
                    super(`${s} HTTP-${t} message: ${e}`), (this.name = "JanusApiError"), (this.uri = s), (this.status = t);
                }
            }
            let _;
        },
        400915: (e, t, s) => {
            "use strict";
            s.d(t, { l7: () => r, ri: () => c });
            var n = s(565058),
                a = s(400752),
                o = s(42134),
                i = s(484633);
            (0, n.cn)(), (0, n.cn)();
            function r() {
                const e = (0, a.Dv)(o.cI);
                return { role: e || i.Q.listener, isUserSpeakingRole: [i.Q.host, i.Q.cohost, i.Q.speaker].includes(e), isUserAdminRole: [i.Q.host, i.Q.cohost].includes(e) };
            }
            const u = (0, n.cn)(!1),
                c = (0, n.cn)(
                    (e) => e(u),
                    (e, t, s) => {
                        t(u, s);
                    },
                );
        },
        521799: (e, t, s) => {
            "use strict";
            s.d(t, { oT: () => i, yu: () => o });
            s(136728), s(543673), s(240753), s(128399), s(202784);
            var n = s(752624);
            const a = (function () {
                const e = [],
                    t = new n.Z();
                return {
                    push: function (s) {
                        e.push({ ...s, timestamp: new Date().toISOString() }), t.notify();
                    },
                    getLog: function () {
                        return e;
                    },
                    clear: function () {
                        e.splice(0, e.length), t.notify();
                    },
                    subscribe: function (e) {
                        return t.subscribe(e);
                    },
                    upload: function (s) {
                        s[0].text().then((s) => {
                            e.splice(0, e.length, ...JSON.parse(s)), t.notify();
                        });
                    },
                };
            })();
            function o() {
                var e, t;
                (e = JSON.stringify(a.getLog(), null, 2)),
                    (t = `webrtc-log-${Date.now()}.json`),
                    (function (e, t, s) {
                        const n = document.createElement("a");
                        (n.href = URL.createObjectURL(new Blob([e], { type: s }))), (n.download = t), n.click();
                    })(e, t, "appication/json");
            }
            const i = (e, t) =>
                t(e)
                    .then((t) => {
                        const { data: s, headers: n, host: o, params: i, ...u } = e,
                            { body: c, headers: d, request: l, ...p } = t;
                        return a.push({ request: { ...u, data: r(s) }, response: { ...p, body: r(c) } }), t;
                    })
                    .catch((t) => {
                        const { data: s, headers: n, host: o, params: i, ...u } = e;
                        return a.push({ request: { ...u, data: r(s) }, response: { error: t } }), Promise.reject(t);
                    });
            function r(e) {
                try {
                    return JSON.parse(e);
                } catch {
                    return e;
                }
            }
        },
        219442: (e, t, s) => {
            "use strict";
            s.d(t, { r: () => o });
            var n = s(565058),
                a = s(393134);
            const o = (0, n.cn)(() =>
                (function () {
                    const e = new Map();
                    return {
                        listen: function (t) {
                            const s = (0, a.g)();
                            return e.set(t, s), s;
                        },
                        resolve: function (t) {
                            e.get(t)?.resolve(), e.delete(t);
                        },
                        reject: function (t, s) {
                            e.get(t)?.reject(s), e.delete(t);
                        },
                    };
                })(),
            );
        },
        275220: (e, t, s) => {
            "use strict";
            s.d(t, { o: () => i });
            var n = s(565058),
                a = s(390387),
                o = s(420182);
            const i = (0, n.cn)((e) => {
                const t = e(o.qc);
                return (0, a._h)(t.getState());
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11.f50b189a.js.map
