"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-cf1ec9f3"],
    {
        90887: (e, t, i) => {
            i.r(t), i.d(t, { BroadcastScreen: () => Be, default: () => Le });
            var a = i(202784),
                r = i(272175),
                n = i(325686),
                s = i(688715),
                o = i(978053),
                l = i(731708),
                c = i(673510),
                d = i(366635),
                m = i(868634),
                h = i(530525),
                p = i(439592),
                u = i(392237),
                _ = i(111677),
                g = i.n(_),
                b = i(123751),
                v = i(615656),
                f = i(718e3),
                E = i(290402),
                I = i(651930),
                w = i(572067),
                S = i(252021),
                y = i(443781),
                D = i(293988),
                T = i(38293),
                x = i(23134),
                C = i(652904),
                Z = i(907552),
                P = i(181142),
                A = i(241304),
                N = i(310453),
                B = i(666670),
                k = i(702001),
                L = i(51525),
                O = i(810430),
                F = i(293115),
                M = i(479506),
                W = i(503229),
                U = i(801501),
                V = i(382285);
            const R = ({ broadcastId: e }) => a.createElement(n.Z, { style: z.container }, a.createElement(V.Z, { broadcastId: e })),
                j = u.default.supports("height: 100dvh") ? "dvh" : "vh",
                z = u.default.create((e) => ({ container: { borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, borderWidth: e.borderWidths.small, marginStart: e.spaces.space8, marginTop: e.spaces.space8, minHeight: "480px", height: `calc(100${j} - 400px)` } }));
            var G = i(10195),
                H = (i(136728), i(107267)),
                q = i(811176),
                $ = i(154003),
                J = i(149170),
                K = i(415506),
                Q = i(725516);
            function Y(e) {
                const t = (function (e) {
                    const t = (0, H.useHistory)(),
                        i = (0, Q.z)(),
                        a = (0, H.useLocation)(),
                        r = [],
                        n = e.broadcast?.tweet;
                    n &&
                        r.push({
                            text: X.Report_Broadcast,
                            Icon: K.default,
                            onClick: () => {
                                t.push({ pathname: `/i/report/status/${n}`, state: { clientReferer: a.pathname, isMedia: !0, isPromoted: !1, scribeNamespace: i.contextualScribeNamespace } });
                            },
                        });
                    return r;
                })(e);
                if (t.length < 1) return null;
                return a.createElement($.ZP, {
                    "aria-label": X.More,
                    hoverLabel: { label: X.More },
                    icon: a.createElement(J.default, null),
                    renderMenu: function (e) {
                        return a.createElement(q.Z, { items: t, onCloseRequested: e });
                    },
                    type: "primaryText",
                });
            }
            const X = { More: g().h63a5c3c, Report_Broadcast: g().cbae35fa };
            var ee = i(679180),
                te = i(71620),
                ie = i(2430),
                ae = i(668214),
                re = i(689642),
                ne = i(836255),
                se = i(919022),
                oe = i(312771);
            const le = (e, t) => t.match.params.broadcastId,
                ce = (e, t) => re.Z.select(e, le(0, t)),
                de = (e, t) => {
                    const i = ce(e, t);
                    return i && i.user ? se.ZP.select(e, i.user) : void 0;
                },
                me = (e, t) => {
                    const i = ce(e, t);
                    return i && i.user ? se.ZP.select(e, i.user) : void 0;
                },
                he = (e, t) => (t.location.state ? t.location.state.promotedContent : void 0),
                pe = (e, t) => {
                    if (ce(e, t)) return oe.ZP.LOADED;
                    return re.Z.selectFetchStatus(e, le(0, t)) ?? oe.ZP.NONE;
                },
                ue = (0, ie.cI)("t"),
                _e = (0, ae.Z)()
                    .propsFromState(() => ({ broadcastId: le, broadcast: ce, user: me, twitterBroadcaster: de, fetchStatus: pe, promotedContent: he, timecode: ue }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, te.zr)("BROADCAST_SCREEN"), fetchBroadcast: re.Z.fetchOneIfNeeded, fetchUserIfNeeded: se.ZP.fetchOneIfNeeded, fetchTweetIfNeeded: ne.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "broadcast" });
            var ge = i(386592);
            const be = 16 / 9,
                ve = { url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png", width: 1920, height: 1080 },
                fe = { objectFitVideo: "contain" },
                Ee = (e) => e && e.trim().length > 0,
                Ie = g().ac4c73d8,
                we = g().e39b368e,
                Se = g().e3aac82a,
                ye = g().hd0bc1eb,
                De = g().bea1f26b,
                Te = g().e44095a5,
                xe = g().j83f29dd,
                Ce = g().jceadc3e,
                Ze = g().d980e29f,
                Pe = g().fc209bb7,
                Ae = g().jade381b,
                Ne = (e, t) => (0, s.ju)(`https://x.com/i/broadcasts/${e}${t ? `?t=${t}` : ""}`);
            class Be extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTitle = () => {
                            const { broadcast: e } = this.props;
                            if (e) {
                                const { state: t, status: i } = e;
                                if (i) return i;
                                const a = this._getName(e);
                                if (a)
                                    switch (t) {
                                        case ge.N8.Running:
                                            return ye({ name: a });
                                        case ge.N8.Ended:
                                        case ge.N8.TimedOut:
                                            return De({ name: a });
                                        case ge.N8.NotStarted:
                                        default:
                                            return Ce;
                                    }
                            }
                            return Ce;
                        }),
                        (this._getName = (e) => {
                            if (!this.props?.twitterBroadcaster) return;
                            const { name: t, screen_name: i } = this.props.twitterBroadcaster;
                            return Ee(t) ? t : i && Ee(i) ? `@${i}` : void 0;
                        }),
                        (this._isLive = () => this.props.broadcast && this.props.broadcast.state === ge.N8.Running),
                        (this._renderTimeString = () => {
                            const { broadcast: e } = this.props,
                                { formatTimeSinceDate: t } = o.default,
                                i = new Date(),
                                r = e?.end_time ?? e?.timedout_time ?? e?.start_time;
                            if (!r) return null;
                            const n = new Date(r),
                                s = i.getTime() - n.getTime() > 2592e6 ? Ae(n) : t(n);
                            return a.createElement(l.ZP, { color: "gray700", size: "subtext1" }, this._isLive() ? Te({ timestamp: s }) : xe({ timestamp: s }));
                        }),
                        (this._renderPrimaryContent = () => {
                            const { fetchStatus: e } = this.props;
                            return a.createElement(E.Z, { "aria-label": Se, fetchStatus: e, onRequestRetry: this._handleFetchBroadcast, render: this._render });
                        }),
                        (this._renderRightControl = () => a.createElement(n.Z, { style: ke.rightControl }, a.createElement(Z.Tz, { scribeNamespace: this.props.analytics.contextualScribeNamespace, url: (0, s.ju)(`https://x.com/i/broadcasts/${this.props.broadcastId}`) }), a.createElement(Y, this.props))),
                        (this._render = () => {
                            const e = this._getTitle(),
                                { viewerUserId: t } = this.context,
                                { broadcastId: i, twitterBroadcaster: r } = this.props,
                                s = r?.id_str === t;
                            return a.createElement(a.Fragment, null, this._renderMedia(), a.createElement(n.Z, { style: ke.header }, this._renderUserNameAndActions(), a.createElement(n.Z, { style: ke.title }, a.createElement(ee.H, { broadcastId: i, canEdit: s, remoteTitle: e })), this._renderTimeString()));
                        }),
                        (this._renderUserNameAndActions = () => a.createElement(n.Z, { style: ke.userNameAndActionsWrapper }, this._renderUserName())),
                        (this._renderUserName = () => {
                            const { twitterBroadcaster: e } = this.props,
                                t = this.props.user;
                            return e ? a.createElement(n.Z, { style: ke.userNameWrapper }, a.createElement(c.ZP, { affiliateBadgeInfo: e.highlightedLabel, avatarUri: e.profile_image_url_https, decoration: this._renderUserActions(), isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, style: ke.userCell, translatorType: "none" === e.translator_type ? void 0 : e.translator_type, userId: e.id_str, verifiedType: e.verified_type, withLink: !0 })) : t?.profile_image_url && t?.screen_name ? a.createElement(n.Z, { style: ke.userNameWrapper }, a.createElement(d.Z, { name: t.screen_name, profileImageUrl: t.profile_image_url })) : void 0;
                        }),
                        (this._renderUserActions = () => {
                            const { featureSwitches: e, viewerUserId: t } = this.context,
                                { promotedContent: i, twitterBroadcaster: r } = this.props;
                            return !r || t === r.id_str || r.blocked_by ? null : a.createElement(n.Z, { style: ke.userActionsWrapper }, e.isTrue("rweb_tipjar_consumption_enabled") && a.createElement(A.Z, { userId: r.id_str }), r.following && a.createElement(D.Z, { allowPromptForPush: !0, isFollowing: r.notifications, userId: r.id_str }), a.createElement(x.C, { isSuperFollowSubscriptionEnabled: this.context.featureSwitches.isTrue("super_follow_android_web_subscription_enabled"), promotedContent: i ?? r.promoted_content, userId: r.id_str }));
                        }),
                        (this._getScribeData = () => {
                            const { broadcastId: e } = this.props;
                            return { items: [{ live_broadcast_details: { target_broadcast_id: e } }] };
                        }),
                        (this._fetchTwitterBroadcaster = () => {
                            const { broadcast: e, createLocalApiErrorHandler: t, fetchUserIfNeeded: i } = this.props,
                                a = e && e.user;
                            if (a) return i(a).catch(t(B.F));
                        }),
                        (this._startTimer = () => {
                            this._stopTimer(), (this._timer = new U.Z(3e4).interval(this._fetchUpdates)), this._timer.start();
                        }),
                        (this._stopTimer = () => {
                            this._timer && this._timer.stop(), (this._timer = void 0);
                        }),
                        (this._handleFetchBroadcast = () => {
                            const { broadcastId: e, createLocalApiErrorHandler: t, fetchBroadcast: i } = this.props;
                            e && i(e).catch(t({ [v.ZP.GenericNotFound]: { customAction: L.vv } }));
                        }),
                        (this._fetchUpdates = () => {
                            this._handleFetchBroadcast();
                        });
                }
                componentWillUnmount() {
                    this._stopTimer();
                }
                componentDidMount() {
                    this._handleFetchBroadcast();
                }
                componentDidUpdate(e) {
                    if ((e.broadcastId !== this.props.broadcastId && this._handleFetchBroadcast(), this.props.broadcast && (e.broadcast && e.broadcast.broadcast_id) !== (this.props.broadcast && this.props.broadcast.broadcast_id))) {
                        this._startTimer(), this._fetchTwitterBroadcaster();
                        const e = this.props.broadcast?.tweet;
                        e && this.props.fetchTweetIfNeeded(e).catch(this.props.createLocalApiErrorHandler(k.c));
                    }
                }
                render() {
                    const { history: e, match: t } = this.props,
                        { featureSwitches: i } = this.context,
                        r = this._getTitle(),
                        n = this.props.broadcast?.chat_option || 0,
                        s = t?.params?.broadcastId || "",
                        o = i.isTrue("responsive_web_chat_enabled") && n > 1;
                    return a.createElement(F.nO, { data: this._getScribeData() }, a.createElement(C.Z, null, this._renderMetaTags(r), a.createElement(P.aM, null, a.createElement(S.Z, { backLocation: "/", documentTitle: r, history: e, primaryContent: this._renderPrimaryContent, rightControl: this._renderRightControl(), sidebarContent: o ? a.createElement(R, { broadcastId: s }) : a.createElement(f.Z, null), title: we, withWideSidebar: o })), a.createElement(T.Z, { title: r, withMeta: !1 })));
                }
                _renderMetaTags(e) {
                    const { broadcast: t, broadcastId: i, timecode: r, twitterBroadcaster: n } = this.props,
                        s = n?.name,
                        o = `twitter://broadcasts/${i}`,
                        l = Ne(i),
                        c = Ne(i, r);
                    return a.createElement(a.Fragment, null, a.createElement(w.Z, { canonical: l, description: e, title: s, type: "article" }), a.createElement(I.Z, { deepLink: o }), a.createElement(G.Z, { broadcast: t, broadcaster: n, id: i, timecode: r, title: e, url: c }));
                }
                _renderMedia() {
                    const { broadcast: e } = this.props;
                    return e && e.state === ge.N8.NotStarted ? this._renderPreLiveSlate() : this._renderPlayer();
                }
                _renderStartDateLabel() {
                    const { broadcast: e } = this.props,
                        t = e && e.scheduled_start_time ? new Date(parseInt(e.scheduled_start_time, 10)) : void 0,
                        i = t ? Ze({ date: Pe(t) }) : void 0;
                    return i ? a.createElement(n.Z, { style: ke.labelOverlay }, a.createElement(m.ZP, null, i)) : null;
                }
                _renderPreLiveSlate() {
                    const { broadcast: e } = this.props,
                        t = e && e.pre_live_slate_url ? { url: e.pre_live_slate_url, width: 600, height: 337 } : ve;
                    return a.createElement(n.Z, null, a.createElement(r.ql, { prioritizeSeoTags: !0 }, a.createElement("meta", { content: t.url, property: "og:image" }), a.createElement("meta", { content: t.width, property: "og:image:width" }), a.createElement("meta", { content: t.height, property: "og:image:height" })), a.createElement(h.Z, { "aria-label": Ie, aspectMode: p.Z.exact(u.default.theme.aspectRatios.landscape), image: t, previewMode: !1 }), this._renderStartDateLabel());
                }
                _renderPlayer() {
                    const { broadcast: e, broadcastId: t, promotedContent: i, timecode: s } = this.props,
                        o = e && e.width && e.height && { url: e.image_url || "", width: e.width, height: e.height },
                        l = e && e.media_key;
                    if (!(t && o && l)) return null;
                    const c = e && o && (0, O.d5)(e.image_url_small, e.image_url_medium, o),
                        d = e?.tweet;
                    return a.createElement(F.nO, { data: { items: [{ id: d, item_type: M.Z.ItemType.TWEET }] } }, a.createElement(n.Z, { style: ke.card }, a.createElement(r.ql, { prioritizeSeoTags: !0 }, a.createElement("meta", { content: o.url, property: "og:image" }), a.createElement("meta", { content: o.width, property: "og:image:width" }), a.createElement("meta", { content: o.height, property: "og:image:height" })), a.createElement(N.Z, { "aria-label": Ie, aspectRatio: be, customVariants: c, displayOptions: fe, includeBroadcastEventAssociation: !0, poster: o, promotedContent: i, source: { variants: [], videoId: b.Z.forBroadcast(t), contentId: l }, timecode: s, videoType: "video" })));
                }
            }
            Be.contextType = y.rC;
            const ke = u.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, overflow: "hidden" }, header: { flexDirection: "column", gap: e.spaces.space12, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, labelOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12 }, relatedEvent: { flexBasis: "100%" }, rightControl: { display: "flex", flexDirection: "row" }, title: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space12 }, titleText: { marginEnd: e.spaces.space4 }, userCell: { paddingHorizontal: 0, paddingVertical: 0, width: "100%" }, userNameAndActionsWrapper: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userActionsWrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userNameWrapper: { alignItems: "flex-start", flex: 1, justifyContent: "center" } })),
                Le = _e((0, W.Z)(Be));
        },
        734861: (e, t, i) => {
            i.d(t, { v: () => a });
            const a = { xBannerImg: "https://pbs.twimg.com/media/Gl4CGtJW0AEelSW?format=png&name=large", xBasketballImg: "https://pbs.twimg.com/media/Gl4CGtDXoAAgF8s?format=png&name=large", xbracketChallenge: "https://pbs.twimg.com/media/GmBavjVXEAAy1Pt?format=jpg&name=large", xbracketImage: "https://pbs.twimg.com/media/GmBaz49bcAAHAAd?format=jpg&name=large", xf1Image: "https://pbs.twimg.com/media/GmaqgF4a8AEyMKz?format=jpg&name=large", xNhlImg: "https://pbs.twimg.com/media/Gl4CGtJW0AEelSW?format=png&name=large", xSoccerImg: "https://pbs.twimg.com/media/Gl4CGtJW0AEelSW?format=png&name=large" };
        },
        119907: (e, t, i) => {
            i.d(t, { R: () => S });
            var a = i(202784),
                r = i(272175),
                n = i(111677),
                s = i.n(n),
                o = i(443781),
                l = i(782274),
                c = i(10622),
                d = i.n(c),
                m = (i(585488), i(437429)),
                h = i.n(m);
            const p = l.Z,
                u = s().be548ecb,
                _ = s().b23bb579;
            const g = function (e) {
                const [t, i] = a.useState(null),
                    r = h()(),
                    { featureSwitches: n } = (0, o.QZ)();
                return (
                    a.useEffect(() => {
                        if (!e) return void i(null);
                        const t = e.match(/^\/nhl\/game\/id\/(\d+)/),
                            a = t?.[1];
                        a
                            ? d()(r, p, { id: a })
                                  .toPromise()
                                  .then((e) => {
                                      if (e?.live_event_by_rest_id?.nhl_event_page) {
                                          const t = e.live_event_by_rest_id.nhl_event_page.event_info.basic_data.teams.map((e) => e.team_information.team_name),
                                              a = e.live_event_by_rest_id.nhl_event_page.event_info.basic_data.images?.[0],
                                              r = 2 === t.length;
                                          i({ rest_id: e.live_event_by_rest_id.rest_id, title: r ? u({ teamName1: t[0], teamName2: t[1] }) : null, description: r ? _({ teamName1: t[0], teamName2: t[1] }) : null, image: a });
                                      } else i(null);
                                  })
                                  .catch(() => {
                                      i(null);
                                  })
                            : i(null);
                    }, [r, n, e]),
                    t
                );
            };
            const b = i(791181).Z,
                v = s().be548ecb,
                f = s().b23bb579;
            const E = function (e) {
                    const [t, i] = a.useState(null),
                        r = h()(),
                        { featureSwitches: n } = (0, o.QZ)();
                    return (
                        a.useEffect(() => {
                            if (!e) return void i(null);
                            const t = e.match(/^\/soccer\/match\/id\/(\d+)/),
                                a = t?.[1];
                            a
                                ? d()(r, b, { id: a })
                                      .toPromise()
                                      .then((e) => {
                                          if (e?.live_event_by_rest_id?.soccer_event_page) {
                                              const t = e.live_event_by_rest_id.soccer_event_page.event_info.basic_data.teams.map((e) => e.team_information.team_name),
                                                  a = e.live_event_by_rest_id.soccer_event_page.event_info.basic_data.images?.[0],
                                                  r = 2 === t.length;
                                              i({ rest_id: e.live_event_by_rest_id.rest_id, title: r ? v({ teamName1: t[0], teamName2: t[1] }) : null, description: r ? f({ teamName1: t[0], teamName2: t[1] }) : null, image: a });
                                          } else i(null);
                                      })
                                      .catch(() => {
                                          i(null);
                                      })
                                : i(null);
                        }, [r, n, e]),
                        t
                    );
                },
                I = { jfTitle: s().b38adba2, somethingWentWrong: s().g61ed8a4 },
                w = { name: "apple-itunes-app", content: "app-id=333903271, app-clip-bundle-id=com.atebits.Tweetie2.XAppClip, app-clip-display=card" },
                S = (e, t) => {
                    const i = ((e) => (e.startsWith("/nhl/game/id/") ? "nhl" : e.startsWith("/soccer/match/id/") ? "soccer" : e.startsWith("/nfl") ? "nfl" : e.startsWith("/nba") ? "nba" : e.startsWith("/ncaamb/league/home") ? "mm_league" : e.startsWith("/ncaamb/invite/league") ? "mm_invite" : e.startsWith("/marchmadness") || e.startsWith("/ncaamb") ? "mm" : e.startsWith("/f1") ? "f1" : e.startsWith("/bracketchallenge") || e.startsWith("/i/bracketchallenge") || e.startsWith("/brackets") ? "mm_bracket" : "default"))(e),
                        n = ((e) => {
                            const t = g(e || ""),
                                i = E(e || "");
                            return t || i || void 0;
                        })(e),
                        l = ((e, t, i) => {
                            const { featureSwitches: a } = (0, o.QZ)();
                            return { default: { title: I.jfTitle, description: null, image: e.xBannerImg }, nhl: { title: i?.title || s().d05ae004, description: i?.description || s().d35ad22c, image: i?.image || e.xNhlImg }, soccer: { title: i?.title || s().e806daa2, description: i?.description || s().cc2c2eca, image: i?.image || e.xSoccerImg }, nfl: { title: "NFL Portal", description: "NFL Portal", image: e.xBannerImg }, nba: { title: "NBA Portal", description: "NBA Portal", image: e.xBasketballImg }, mm: { title: "Win a trip to Mars", description: "Join leagues. Make a bracket. Epic prizes.", image: e.xbracketChallenge }, mm_invite: { title: "Join my league!", description: "Accept your invite. Play & win epic prizes!", image: e.xbracketImage }, mm_league: { title: "Got better picks?", description: "View the league for top brackets.", image: e.xbracketChallenge }, mm_bracket: { title: "Got better picks?", description: "Perfect bracket wins a trip to Mars 🚀", image: e.xbracketImage }, f1: { title: a.getStringValue("events_f1_rweb_preview_title", s().bcdeae66), description: a.getStringValue("events_f1_rweb_preview_description", s().e30e4bea), image: a.getStringValue("events_f1_rweb_preview_image", e.xf1Image) } };
                        })(t, 0, n)[i],
                        c = a.createElement(r.ql, null, a.createElement("meta", { content: l.title, property: "og:title" }), l.description && a.createElement("meta", { content: l.description, property: "og:description" }), a.createElement("meta", { content: l.image, property: "og:image" }), a.createElement("meta", w));
                    return { title: l.title, helmet: c };
                };
        },
        625725: (e, t, i) => {
            i.r(t), i.d(t, { JetfuelFullModalScreen: () => m, default: () => p });
            var a = i(202784),
                r = i(325686),
                n = i(392237),
                s = i(38293),
                o = i(652904),
                l = i(635322),
                c = i(734861),
                d = i(119907);
            const m = ({ location: e }) => {
                    const t = e.pathname.slice(5),
                        { helmet: i, title: n } = (0, d.R)(t, c.v);
                    return a.createElement(o.Z, { locationKey: t }, i, a.createElement(s.$, { messagesUnreadCount: 0, notificationsUnreadCount: 0, title: n }), a.createElement(r.Z, { style: h.container }, a.createElement(l.J, null)));
                },
                h = n.default.create((e) => ({ container: { width: "100%", height: "100%" } })),
                p = m;
        },
        662227: (e, t, i) => {
            i.r(t), i.d(t, { JetfuelModalScreen: () => c, default: () => d });
            var a = i(202784),
                r = i(38293),
                n = i(652904),
                s = i(635322),
                o = i(734861),
                l = i(119907);
            const c = ({ location: e }) => {
                    const t = e.pathname.slice(5),
                        { helmet: i, title: c } = (0, l.R)(t, o.v);
                    return a.createElement(n.Z, { locationKey: t }, i, a.createElement(r.$, { messagesUnreadCount: 0, notificationsUnreadCount: 0, title: c }), a.createElement(s.J, null));
                },
                d = c;
        },
        237780: (e, t, i) => {
            i.r(t), i.d(t, { JetfuelScreen: () => u, default: () => _ });
            var a = i(202784),
                r = i(718e3),
                n = i(252021),
                s = i(443781),
                o = i(652904),
                l = i(655352),
                c = i(635322),
                d = i(734861),
                m = i(119907);
            const h = a.createElement(r.Z, { withTrends: !1 }),
                p = a.createElement(c.J, null),
                u = ({ history: e, location: t }) => {
                    const i = t.pathname.slice(5),
                        { featureSwitches: r } = (0, s.QZ)(),
                        c = { xBannerImg: r.getStringValue("responsive_web_jf_banner_img", d.v.xBannerImg), xNhlImg: d.v.xNhlImg, xSoccerImg: d.v.xSoccerImg, xBasketballImg: r.getStringValue("responsive_web_jf_basketball_img", d.v.xBasketballImg), xbracketChallenge: r.getStringValue("responsive_web_jf_bracket_challenge_img", d.v.xbracketChallenge), xbracketImage: r.getStringValue("responsive_web_jf_bracket_img", d.v.xbracketImage), xf1Image: r.getStringValue("responsive_web_jf_f1_img", d.v.xf1Image) },
                        { helmet: u, title: _ } = (0, m.R)(i, c);
                    return a.createElement(o.Z, { locationKey: i }, u, a.createElement(n.Z, { backLocation: "/", documentTitle: _, headerless: !l.am(), history: e, primaryContent: p, sidebarContent: h }));
                },
                _ = u;
        },
        820577: (e, t, i) => {
            i.r(t), i.d(t, { LiveEventScreen: () => be, default: () => fe });
            var a = i(202784),
                r = i(325686),
                n = i(731708),
                s = i(688715),
                o = i(392237),
                l = i(111677),
                c = i.n(l),
                d = i(337637),
                m = i(912021),
                h = i(615656),
                p = i(718e3),
                u = i(22952),
                _ = i(651930),
                g = i(983389),
                b = i(572067),
                v = i(898948),
                f = i(514029),
                E = i(252021),
                I = i(443781),
                w = i(5530),
                S = i(56851),
                y = i(652904),
                D = i(51525),
                T = i(810430),
                x = i(293115),
                C = i(503229),
                Z = i(24949),
                P = i(782578),
                A = i(309854),
                N = i(161821),
                B = i(849376),
                k = i(71620),
                L = i(668214),
                O = i(558369),
                F = i(125793),
                M = i(197914),
                W = i(312771);
            const U = (e, t) => t.match.params.eventId,
                V = (e, t) => [].concat(t.location.query?.timeline)[0],
                R = (e, t) => M.Z.select(e, U(0, t)),
                j = (e, t) => (0, T.fF)(R(e, t)),
                z = (e, t) => (0, T.vy)(R(e, t)),
                G = (e, t) => (0, T.yU)(R(e, t)),
                H = (e, t) => M.Z.selectFetchStatus(e, U(0, t)),
                q = (e, t) => {
                    const i = (M.Z.selectErrors(e) || {})[U(0, t)],
                        { errors: a = [] } = i || {},
                        r = a.find((e) => e.code === h.ZP.BlockedUserError);
                    return r && r.message && r.message.replace("@", "");
                },
                $ = (e, t) => M.Z.selectIsTOO(e, U(0, t)),
                J = (e, t) => t.location.state?.promotedCardState,
                K = (e, t) => (0, F.mF)(e, U(0, t)),
                Q = (0, Z.P1)(R, (e) => {
                    if (!e) return;
                    const { carousel: t } = e.response,
                        i = t.find((e) => !!e.selected),
                        a = i?.slate?.id || i?.fallback_slate?.id;
                    if (a) {
                        const t = e?.slates[a];
                        if (t.focus_rects) {
                            return { cropCandidate: P.Z.selectBestCropCandidate(16 / 9, t.focus_rects), image: t.variants.find((e) => "orig" === e.name) };
                        }
                        if (t.tweet_id) {
                            const i = e?.tweets?.[t.tweet_id];
                            if (i) {
                                const { extended_entities: e } = i,
                                    { media: r } = e || {};
                                if (r) {
                                    const e = r.find(({ media_key: e }) => e === a),
                                        i = e ? A.Z.getCropCandidates(e) : t.focus_rects;
                                    return { cropCandidate: i ? P.Z.selectBestCropCandidate(16 / 9, i) : void 0, image: t.variants.find((e) => "orig" === e.name), altText: e?.ext_alt_text };
                                }
                            }
                        }
                    }
                }),
                Y = (0, Z.P1)(U, R, (e, t) => (t ? (0, T.Op)(e, t) : { eventId: e })),
                X = (0, Z.P1)(R, J, (e, t) => (e ? (0, T.yC)(e, t) : [])),
                ee = (e) => !0 === (0, O.FG)(e, "responsive_web_live_commerce_enabled"),
                te = (0, Z.P1)(U, R, V, ee, (e, t, i, a) => (t ? (0, T.a9)(e, t, i, a) : { composeDetails: { defaultText: "" }, eventId: e, timelineId: T.aE, timelineIndex: 0, timelineLinks: [] })),
                ie = (0, Z.P1)(U, q, H, (e, t, i) => ((e, t, i) => ({ liveEventDetails: { eventId: e }, fetchStatus: t ? W.ZP.LOADED : i, refreshStatus: i, timelineDetails: { composeDetails: { defaultText: "" }, eventId: e, timelineId: T.aE, timelineIndex: 0, timelineLinks: [] }, hasSeenEvent: !1, interstitialOrderToDisplay: t ? (0, B.F)({ isBlockedBy: !0, screenName: t }) : void 0, isTOO: !1, isUserSuspended: !1 }))(e, t, i)),
                ae = (0, Z.P1)(R, Y, (e, t) => {
                    if (!e) return;
                    const { blocked_by: i, blocking: a, screen_name: r } = t.author || {},
                        { sensitive: n } = e.liveEventDetails;
                    return (0, B.F)({ isBlockedBy: i, isBlocking: a, isSensitive: n, screenName: r });
                }),
                re = (0, L.Z)()
                    .propsFromState(() => ({ eventId: U, event: R, bettingOdds: z, scoreData: j, blockedByScreenName: q, fetchStatus: H, liveEventTimelineId: V, promotedCardState: J, isTOO: $, isLiveCommerceEnabled: ee, hasSeenEvent: K, serverPollingIntervalSeconds: G, eventCardImage: Q, liveEventDetails: Y, timelineDetails: te, carousel: X, requiredProps: ie, interstitialOrderToDisplay: ae }))
                    .adjustStateProps(({ blockedByScreenName: e, carousel: t, event: i, eventId: a, fetchStatus: r, hasSeenEvent: n, isLiveCommerceEnabled: s, liveEventDetails: o, liveEventTimelineId: l, promotedCardState: c, requiredProps: d, ...m }) => {
                        if (!i) return d;
                        const h = ((e) => {
                            const { liveEventDetails: t, users: i } = e || {},
                                { attribution_user_id: a } = t ?? {};
                            return !!a && !(0, N.Z)(i || {}).some((e) => e.id_str === a);
                        })(i);
                        return { ...d, ...m, liveEventDetails: o, fetchStatus: i ? W.ZP.LOADED : r, refreshStatus: r, isUserSuspended: h, hasSeenEvent: n, carousel: t.length > 0 ? t : void 0 };
                    })
                    .propsFromActions(() => ({ addSeenEventId: F.At, createLocalApiErrorHandler: (0, k.zr)("LIVE_EVENT_SCREEN"), fetchLiveEvent: M.Z.fetchOne, fetchSeenEventIds: F.d_, remindMeButtonSubscribe: M.Z.subscribe, remindMeButtonUnsubscribe: M.Z.unSubscribe }))
                    .withAnalytics({ page: "live_event_timeline" });
            var ne = i(272175),
                se = i(276563),
                oe = i(827515);
            const le = ({ content: e, name: t }) => (e || (0, oe.Z)(e) ? a.createElement("meta", { content: e, key: t, name: t }) : null),
                ce = Object.freeze({ broadcast: "broadcast", video: "video", image: "image" }),
                de = ({ carousel: e, eventCardImage: t, liveEventDetails: i, timelineDetails: r }) => {
                    const { eventId: n, title: s } = i,
                        { timelineId: o } = r,
                        { altText: l, cropCandidate: c, image: d } = t || {},
                        m = e[(0, T.Q_)(e)],
                        h = ((e) => {
                            const {
                                carouselItemInfo: { type: t },
                            } = e;
                            let i;
                            return t === T.Tr.LIVE_BROADCAST || t === T.Tr.REPLAY_BROADCAST ? (i = ce.broadcast) : t === T.Tr.VOD || t === T.Tr.GIF ? (i = ce.video) : t === T.Tr.SLATE && (i = ce.image), i;
                        })(m);
                    return s
                        ? a.createElement(
                              ne.ql,
                              null,
                              (({ eventId: e, image: t, timelineId: i, title: a }) => [
                                  { name: "twitter:card", content: se.default.CardNames.LIVE_EVENT },
                                  { name: "twitter:text:event_id", content: e },
                                  { name: "twitter:text:event_title", content: a },
                                  { name: "twitter:text:event_timeline_id", content: i },
                                  { name: "twitter:image:event_thumbnail:src", content: t?.url },
                                  { name: "twitter:image:event_thumbnail:height", content: t?.height },
                                  { name: "twitter:image:event_thumbnail:width", content: t?.width },
                              ])({ title: s, eventId: n, image: d, timelineId: o }).map(le),
                              (({ altText: e, cardMediaType: t, cropCandidate: i, image: a, liveEventDetails: r, selectedItem: n, timelineDetails: s }) => [
                                  { name: "twitter:text:event_subtitle", content: r.description },
                                  { name: "twitter:text:event_category", content: r.category },
                                  { name: "twitter:text:broadcast_id", content: n.mediaDetails?.broadcastId },
                                  { name: "twitter:text:broadcast_media_key", content: n.mediaDetails?.broadcastMediaKey },
                                  { name: "twitter:text:broadcast_media_id", content: n.mediaDetails?.broadcastId && n.mediaDetails?.mediaId },
                                  { name: "twitter:text:broadcast_title", content: n.mediaDetails?.broadcastTitle },
                                  { name: "twitter:text:broadcaster_twitter_id", content: n.mediaDetails?.broadcastTwitterId },
                                  { name: "twitter:text:broadcaster_display_name", content: n.mediaDetails?.broadcastDisplayName },
                                  { name: "twitter:text:broadcaster_username", content: n.mediaDetails?.broadcastUsername },
                                  { name: "twitter:text:broadcast_width", content: n.mediaDetails?.broadcastWidth },
                                  { name: "twitter:text:broadcast_height", content: n.mediaDetails?.broadcastHeight },
                                  { name: "twitter:text:broadcast_source", content: n.mediaDetails?.broadcastSource },
                                  { name: "twitter:text:broadcast_orientation", content: n.mediaDetails?.broadcastOrientation },
                                  { name: "twitter:user:author:id", content: r.author?.id_str },
                                  { name: "twitter:text:event_badge", content: n.slate?.label },
                                  { name: "twitter:string:media_tweet_id", content: "photo" !== n.mediaDetails?.coverMedia?.type ? n.mediaDetails?.coverTweet?.id_str : void 0 },
                                  { name: "twitter:image:square_thumbnail:src", content: a?.url },
                                  { name: "twitter:image:square_thumbnail:height", content: a?.height },
                                  { name: "twitter:image:square_thumbnail:width", content: a?.width },
                                  { name: "twitter:image:event_thumbnail:alt", content: e },
                                  { name: "twitter:text:event_thumbnail:media:size:crops:16x9:w", content: i?.w },
                                  { name: "twitter:text:event_thumbnail:media:size:crops:16x9:h", content: i?.h },
                                  { name: "twitter:text:event_thumbnail:media:size:crops:16x9:x", content: i?.x },
                                  { name: "twitter:text:event_thumbnail:media:size:crops:16x9:y", content: i?.y },
                                  { name: "twitter:text:remind_me_notification_id", content: r.remindMeSubscription?.notification_id },
                                  { name: "twitter:image:broadcast_thumbnail:src", content: n.mediaDetails?.broadcastThumbnail },
                                  { name: "twitter:string:broadcast_replay_edited_start_time", content: n.mediaDetails?.broadcastReplayStartTime },
                                  { name: "twitter:string:media_type", content: t },
                              ])({ liveEventDetails: i, timelineDetails: r, selectedItem: m, cardMediaType: h, cropCandidate: c, altText: l || "", image: d }).map(le),
                          )
                        : null;
                };
            var me = i(907552);
            const he = { page: "live_event_timeline", section: "live_event_header" },
                pe = (e) => {
                    const { hashtag: t, id: i } = e,
                        r = (0, T.Ju)(i);
                    return a.createElement(me.ZP, { scribeNamespace: he, shareText: t, url: r });
                },
                ue = (e) => ({ items: [_e(e)] }),
                _e = ({ carouselLength: e, carouselPosition: t, includeTimelineSource: i = !1, liveEventDetails: a, mediaDetails: r, selectedTimeline: n, tilePosition: s, timelineTabPosition: o }) => {
                    const { eventId: l, remindMeSubscription: c } = a,
                        { broadcastId: d } = r || {},
                        { timelineId: m, timelineSourceId: h, timelineSourceType: p } = n || {},
                        { notification_id: u, subscribed: _, toggle_visible: g } = c || {},
                        b = {},
                        v = {},
                        f = {};
                    return l && (v.host_event_id = l), m && (v.timeline_id = m), i && ((v.timeline_source_id = h), (v.timeline_source_type = p)), void 0 !== o && (v.timeline_tab_position = o), e && ((v.carousel_count = e), (v.carousel_position = t)), void 0 !== s && (v.tile_position = s), c && ((v.remind_me_notification_id = u), (v.remind_me_subscribed = _), (v.remind_me_toggle_visible = g)), d && (f.host_broadcast_id = d), Object.keys(v).length > 0 && (b.live_video_event_details = v), Object.keys(f).length > 0 && (b.live_broadcast_details = f), b;
                },
                ge = c().ecb3df70;
            class be extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._carouselIndexReceived = !1),
                        (this._newSegmentedControlDesign = !1),
                        (this._eventsSeenCacheEnabled = this.context.featureSwitches.isTrue("live_event_interstitial_seen_cache_enabled")),
                        (this.state = { isPlayerFullscreen: !1, selectedCarouselItemId: void 0 }),
                        (this._renderPrimaryContent = ({ isWide: e }) => {
                            const { bettingOdds: t, carousel: i, fetchStatus: r, history: n, isTOO: s, liveEventDetails: o, location: l, refreshStatus: c, remindMeButtonSubscribe: d, remindMeButtonUnsubscribe: m, scoreData: h, serverPollingIntervalSeconds: p, timelineDetails: u } = this.props,
                                { isPlayerFullscreen: _ } = this.state,
                                g = (({ featureSwitches: e, serverPollingIntervalSeconds: t = 0 }) => {
                                    const i = e.isTrue("live_event_timeline_server_controlled_refresh_rate_enabled"),
                                        a = e.getNumberValue("live_event_timeline_default_refresh_rate_interval_seconds", 30),
                                        r = e.getNumberValue("live_event_timeline_minimum_refresh_rate_interval_seconds", 10);
                                    return 1e3 * (i ? Math.max(t, r) : a);
                                })({ featureSwitches: this.context.featureSwitches, serverPollingIntervalSeconds: p }),
                                b = this._getInterstitialsToDisplay();
                            return a.createElement(v.Z, { collectionName: ge }, a.createElement(w.Z, { bettingOdds: t, carousel: i, fetchStatus: r, history: n, interstitialOrderToDisplay: b, isPlayerFullscreen: _, isTOO: s, isWide: e, liveEventDetails: o, location: l, onChildScribeAction: this._handleChildScribeAction, onFetch: this._handleInitialFetch, onFullscreenChange: this._handleFullscreenChange, onInterstitialSubmit: this._handleInterstitialSubmit, onSelectedCarouselItemChange: this._handleSelectedCarouselItemChanged, onTimelinePoll: this._handleTimelinePoll, pollingIntervalMs: g, refreshStatus: c, remindMeButtonSubscribe: d, remindMeButtonUnsubscribe: m, scoreData: h, timelineDetails: u, withFloatingComposeButton: !0 }));
                        }),
                        (this._getSelectedItem = () => {
                            const { carousel: e } = this.props,
                                { selectedCarouselItemId: t } = this.state;
                            return (0, T.to)(e, t);
                        }),
                        (this._getSelectedItemIndex = () => {
                            const { carousel: e } = this.props,
                                t = this._getSelectedItem();
                            return e && t ? (0, d.Z)(e, (e) => e.id === t.id) : void 0;
                        }),
                        (this._getScribeProviderMetadata = (0, m.Z)((e, t, i, a, r) => {
                            const { timelineId: n, timelineIndex: s, timelineLinks: o } = i,
                                { mediaDetails: l } = r || {},
                                c = o && o.find((e) => e.timelineId === n);
                            return { event_id: t.eventId, ...ue({ carouselLength: e && e.length, carouselPosition: a, liveEventDetails: t, mediaDetails: l, timelineTabPosition: s, selectedTimeline: c }) };
                        })),
                        (this._handleInitialFetch = () => {
                            this._fetchLiveEvent();
                        }),
                        (this._fetchLiveEvent = () => {
                            const {
                                createLocalApiErrorHandler: e,
                                fetchLiveEvent: t,
                                liveEventDetails: { eventId: i },
                            } = this.props;
                            return t(i).catch(e({ [h.ZP.GenericNotFound]: { customAction: D.vv } }));
                        }),
                        (this._fetchSeenIds = () => {
                            const { createLocalApiErrorHandler: e, fetchSeenEventIds: t } = this.props;
                            return t().catch(e);
                        }),
                        (this._handleInterstitialSubmit = ({ type: e }) => {
                            const {
                                addSeenEventId: t,
                                createLocalApiErrorHandler: i,
                                liveEventDetails: { eventId: a },
                            } = this.props;
                            e === u.T.SENSITIVE && this._eventsSeenCacheEnabled && t(a).catch(i);
                        }),
                        (this._handleTimelinePoll = () => {
                            this._fetchLiveEvent();
                        }),
                        (this._handleFullscreenChange = ({ isPlayerFullscreen: e }) => {
                            this.setState({ isPlayerFullscreen: e });
                        }),
                        (this._handleSelectedCarouselItemChanged = (e) => {
                            this.setState({ selectedCarouselItemId: e.id });
                        }),
                        (this._handleChildScribeAction = (e, t) => this._scribeActionWithEventItems(e, t)),
                        (this._scribeTimelineImpression = () => {
                            const {
                                    analytics: e,
                                    carousel: t,
                                    liveEventDetails: i,
                                    timelineDetails: { timelineId: a, timelineLinks: r },
                                } = this.props,
                                n = this._getSelectedItemIndex(),
                                { mediaDetails: s } = this._getSelectedItem() || {},
                                o = r.find((e) => e && e.timelineId === a);
                            o && e.scribe({ action: "impression", data: { ...ue({ liveEventDetails: i, includeTimelineSource: !0, mediaDetails: s, selectedTimeline: o, carouselLength: t && t.length, carouselPosition: n }) } });
                        });
                }
                componentDidMount() {
                    this._handleInitialFetch(), this._fetchSeenIds();
                }
                componentDidUpdate(e, t) {
                    const {
                            liveEventDetails: { eventId: i },
                            timelineDetails: { timelineId: a, timelineLinks: r },
                        } = this.props,
                        {
                            liveEventDetails: { eventId: n },
                            timelineDetails: { timelineId: s, timelineLinks: o },
                        } = e;
                    n !== i ? this._handleInitialFetch() : s !== a && (this._scribeTimelineTabChange(), this._scribeTimelineImpression()), 0 === o.length && r.length > 0 && this._scribeTimelineTabImpressions();
                }
                render() {
                    const { carousel: e, history: t, isUserSuspended: i, liveEventDetails: r, timelineDetails: s } = this.props,
                        { shortTitle: o, title: l } = r,
                        { composeDetails: c } = s,
                        { isPlayerFullscreen: d } = this.state;
                    if (i) return a.createElement(S.Z, null);
                    const m = l || T.AZ,
                        h = this._renderScoreCard(),
                        u = o ? a.createElement(n.ZP, { withHashflags: !0 }, o) : T.zd,
                        _ = a.createElement(p.Z, { withWhoToFollow: !1 }, h),
                        g = this.context.viewerUserId && !d ? this._renderRightButtons() : void 0,
                        b = this._getScribeProviderMetadata(e, r, s, this._getSelectedItemIndex(), this._getSelectedItem());
                    return a.createElement(x.nO, { data: b }, a.createElement(y.Z, null, null, a.createElement(E.Z, { backLocation: "/", composeOptions: c, documentTitle: m, headerless: d, history: t, primaryContent: this._renderPrimaryContent, rightControl: g, sidebarContent: _, title: u })));
                }
                _renderPageMeta(e) {
                    const { carousel: t, eventCardImage: i, liveEventDetails: r, timelineDetails: n } = this.props,
                        { description: o, eventId: l } = r,
                        c = l && `twitter://events/timeline/${l}`,
                        d = l && (0, s.ju)(`https://x.com/i/events/${l || ""}`);
                    return a.createElement(a.Fragment, null, o ? a.createElement(g.Z, { description: o }) : null, a.createElement(b.Z, { canonical: d, description: o, image: i?.image?.url, imageH: i?.image?.height, imageW: i?.image?.width, title: e, type: "article" }), null, a.createElement(_.Z, { deepLink: c }), t ? a.createElement(de, { carousel: t, eventCardImage: i, liveEventDetails: r, timelineDetails: n }) : null);
                }
                _renderRightButtons() {
                    const {
                        liveEventDetails: { author: e, eventId: t, title: i },
                        timelineDetails: { hashtag: n },
                    } = this.props;
                    return a.createElement(r.Z, { style: ve.rightButtonContainer }, a.createElement(pe, { author: e, hashtag: n, id: t, title: i }));
                }
                _renderScoreCard() {
                    const { scoreData: e } = this.props;
                    return e ? a.createElement(f.Z, { scoreData: e, withContainer: !0, withHeader: !0 }) : null;
                }
                _getInterstitialsToDisplay() {
                    const { hasSeenEvent: e, interstitialOrderToDisplay: t } = this.props;
                    return this._eventsSeenCacheEnabled && e ? t?.filter(({ type: e }) => e !== u.T.SENSITIVE) : t;
                }
                _scribeActionWithEventItems(e, t) {
                    const {
                            analytics: i,
                            carousel: a,
                            liveEventDetails: r,
                            timelineDetails: { timelineId: n, timelineLinks: s },
                        } = this.props,
                        o = this._getSelectedItemIndex(),
                        { mediaDetails: l } = this._getSelectedItem() || {},
                        c = s.find((e) => e.timelineId === n);
                    e.action && i.scribe({ ...e, action: e.action, data: { ...ue({ liveEventDetails: r, mediaDetails: l, selectedTimeline: c, carouselLength: a && a.length, carouselPosition: o, ...t }) } });
                }
                _scribeTimelineTabChange() {
                    const {
                            analytics: e,
                            liveEventDetails: t,
                            timelineDetails: { timelineId: i, timelineIndex: a, timelineLinks: r },
                        } = this.props,
                        { mediaDetails: n } = this._getSelectedItem() || {},
                        s = r && r.find((e) => e.timelineId === i);
                    e.scribe({ component: i, element: "tab", action: "selected", data: { ...ue({ liveEventDetails: t, timelineTabPosition: a, mediaDetails: n, selectedTimeline: s, includeTimelineSource: !0 }) } });
                }
                _scribeTimelineTabImpressions() {
                    const {
                        analytics: e,
                        liveEventDetails: t,
                        timelineDetails: { timelineLinks: i },
                    } = this.props;
                    i.forEach((i) => {
                        e.scribe({ component: "tabs", element: i.timelineId, action: "impression", data: { ...ue({ liveEventDetails: t }) } });
                    });
                }
            }
            be.contextType = I.rC;
            const ve = o.default.create((e) => ({ rightButtonContainer: { flexDirection: "row" }, segmentedControl: { borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                fe = re((0, C.Z)(be));
        },
        152957: (e, t, i) => {
            i.d(t, { I: () => a });
            Object.freeze({ BROADCAST_MEDIA_TYPE: "broadcast", VIDEO_MEDIA_TYPE: "video" });
            const a = Object.freeze({ COMPLETED: "COMPLETED", DELAYED: "DELAYED", LIVE: "LIVE", UPCOMING: "UPCOMING" });
        },
        61675: (e, t, i) => {
            i.r(t), i.d(t, { default: () => N });
            var a = i(202784),
                r = i(325686),
                n = (i(688715), i(392237)),
                s = i(111677),
                o = i.n(s),
                l = i(615656),
                c = i(219770),
                d = i(718e3),
                m = (i(651930), i(983389), i(572067), i(898948)),
                h = i(252021),
                p = i(443781),
                u = i(652904),
                _ = i(180401),
                g = i(720275),
                b = i(51525),
                v = i(503229),
                f = i(71620),
                E = i(810430),
                I = i(668214),
                w = i(148843),
                S = i(836255),
                y = i(312771);
            const D = (e, t) => t.match.params.trendId,
                T = (e, t) => {
                    const i = w.Z.select(e, D(0, t)),
                        a = i?.page,
                        r = a?.media_carousel;
                    if (a && r && r.length > 0) {
                        const t = r.reduce((t, { media_id: i, tweet: a }) => {
                            if (i && a) {
                                const r = ((e, { media_id: t, tweet_id: i }) => {
                                    const a = S.Z.selectHydrated(e, i);
                                    if (!a) return;
                                    const { user: r } = a,
                                        n = a.extended_entities?.media?.find((e) => e.id_str === t);
                                    if (!n || !r) return;
                                    const s = { animated_gif: E.Tr.GIF, photo: E.Tr.SLATE, video: E.Tr.VOD, vine: E.Tr.VOD }[n.type] || "vod";
                                    return { id: t, selected: !1, mediaDetails: { isLive: !1, coverMedia: n, coverTweet: a }, slate: { id: t, image: { name: "cover", height: n.original_info?.height || 0, width: n.original_info?.width || 0, url: n.media_url_https }, tweetId: i }, carouselItemInfo: { verified: r.verified, is_blue_verified: r.is_blue_verified, screenName: r.screen_name, name: r.name, type: s, playbackDuration: "photo" === n.type ? void 0 : n.video_info.duration_millis, userId: r.id_str, profileImageUrl: r.profile_background_image_url_https } };
                                })(e, { media_id: i, tweet_id: a });
                                return r ? [...t, r] : t;
                            }
                            return t;
                        }, []);
                        return { ...i, page: { ...a, media_carousel: t } };
                    }
                    return a ? { ...i, page: { ...a, media_carousel: void 0 } } : void 0;
                },
                x = (e, t) => w.Z.selectFetchStatus(e, D(0, t)) || y.ZP.NONE,
                C = (e, t) => [].concat(t.location.query?.timeline)[0],
                Z = (0, I.Z)()
                    .propsFromState(() => ({ trendId: D, trendInfo: T, fetchStatus: x, timelineId: C }))
                    .adjustStateProps(({ fetchStatus: e, timelineId: t, trendId: i, trendInfo: a }) => {
                        const { birdwatch_pivot: r, community_note_url: n, page: s } = a || {};
                        if (!s) return ((e, t) => ({ id: e, is_saved: !1, title: "", fetchStatus: t, refreshStatus: t, composerDetails: { defaultText: "" }, additionalActions: [] }))(i, y.ZP.NONE);
                        const { article: o, composer_config: l, disclaimer: c, is_saved: d, last_updated_at_ms: m, media_carousel: h, post_timelines: p, prompt_question: u } = s,
                            { article_text: _, title: g } = o || {},
                            b = (p || []).map((e) => ({ timelineId: e.post_timeline.id, label: e.label })),
                            v = { text: _?.text || "", textEntities: [] },
                            f = b?.findIndex((e) => e.timelineId === t),
                            E = f && -1 !== f ? f : 0,
                            I = b[E].timelineId,
                            w = `/i/trending/${i}`,
                            S = a?.page.available_actions ?? [],
                            D = { timelineId: I, timelineIndex: E, timelineLinks: b.map((e) => ({ isActive: () => I === e.timelineId, label: e.label, timelineId: e.timelineId, to: { pathname: w, query: { timeline: e.timelineId } } })), trendId: i };
                        return { disclaimer: c, id: i, is_saved: d || !1, title: g, trendArticle: v, fetchStatus: a ? y.ZP.LOADED : e, refreshStatus: e, birdwatchPivot: r, communityNoteUrl: n, carousel: h && h.length > 0 ? h : void 0, timelineDetails: D, last_updated_at_ms: m, trendPrompt: u || g, composerDetails: { defaultText: l?.prompt_text || "" }, additionalActions: S };
                    })
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("TRENDING_EVENT_SCREEN"), fetchTrendInfo: w.Z.fetchOne }))
                    .withAnalytics({ page: "trending_event_timeline" }),
                P = o().c3077694,
                A = n.default.create((e) => ({ rightButtonContainer: { flexDirection: "row" }, segmentedControl: { borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor } })),
                N = Z(
                    (0, v.Z)(({ additionalActions: e, birdwatchPivot: t, carousel: i, communityNoteUrl: n, composerDetails: s, createLocalApiErrorHandler: o, disclaimer: v, fetchStatus: f, fetchTrendInfo: E, history: I, id: w, is_saved: S, last_updated_at_ms: y, location: D, refreshStatus: T, timelineDetails: x, title: C, trendArticle: Z, trendPrompt: N }) => {
                        const [B] = a.useState(!1),
                            k = a.useContext(p.rC),
                            L = a.useCallback(() => {
                                E(w).catch(o({ [l.ZP.GenericNotFound]: { customAction: b.vv } }));
                            }, [w, o, E]);
                        a.useEffect(() => {
                            L();
                        }, [w, L]);
                        const O = a.createElement(d.Z, { withMaxHeight: !1, withWhoToFollow: !1 }, a.createElement(g.Z, { trendId: w })),
                            F = k.viewerUserId && !B ? a.createElement(r.Z, { style: A.rightButtonContainer }, a.createElement(c.Z, { additionalActions: e, communityNoteUrl: n, id: w, isSaved: S })) : void 0;
                        return a.createElement(u.Z, null, null, a.createElement(h.Z, { backLocation: "/", composeOptions: s, documentTitle: C, headerless: B, history: I, primaryContent: (e) => (({ isWide: e }) => a.createElement(m.Z, { collectionName: P }, a.createElement(_.Z, { birdwatchPivot: t, disclaimer: v, fetchStatus: f, history: I, id: w, isWide: e, lastUpdatedAt: y, location: D, onFetch: L, pollingIntervalMs: 6e4, refreshStatus: T, timelineDetails: x, title: C, trendArticle: Z, trendPrompt: N })))(e), rightControl: F, sidebarContent: O }));
                    }),
                );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-cf1ec9f3.6e3d9c9a.js.map
