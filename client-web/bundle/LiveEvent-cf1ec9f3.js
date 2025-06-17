"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.LiveEvent-cf1ec9f3"],
    {
        10195: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                i = a(272175),
                n = a(276563),
                s = a(386592);
            const o = (e) =>
                    []
                        .concat(
                            (({ id: e, timecode: t, title: a, url: r }) => [
                                { name: "twitter:card", content: n.default.CardNames.BROADCAST },
                                { name: "twitter:url:broadcast_url", content: r },
                                { name: "twitter:text:broadcast_id", content: e },
                                { name: "twitter:text:broadcast_title", content: a.replaceAll('"', "&quot;") },
                                { name: "twitter:text:broadcast_timecode", content: t },
                                { name: "twitter:image:broadcast_pre_live_slate:width", content: 1280 },
                                { name: "twitter:image:broadcast_pre_live_slate:height", content: 720 },
                                { name: "twitter:maxage", content: 210 },
                            ])(e),
                        )
                        .concat(
                            (({ broadcast: e, broadcaster: t }) =>
                                e
                                    ? [
                                          { name: "twitter:text:broadcast_media_key", content: e.media_key },
                                          { name: "twitter:text:broadcast_media_id", content: e.media_key?.split("_")?.[1] },
                                          { name: "twitter:text:broadcaster_twitter_id", content: t?.id_str },
                                          { name: "twitter:text:broadcaster_display_name", content: t?.name },
                                          { name: "twitter:text:broadcaster_username", content: t?.screen_name },
                                          { name: "twitter:text:broadcast_width", content: e.width },
                                          { name: "twitter:text:broadcast_height", content: e.height },
                                          { name: "twitter:text:broadcast_source", content: e.source },
                                          { name: "twitter:text:broadcast_orientation", content: e.camera_rotation },
                                          { name: "twitter:image:broadcast_thumbnail_original:src", content: e.image_url },
                                          { name: "twitter:image:broadcast_pre_live_slate:src", content: e.pre_live_slate_url },
                                          { name: "twitter:boolean:broadcast_is_high_latency", content: e.is_high_latency },
                                          { name: "twitter:text:broadcast_replay_edited_start_time", content: e.edited_replay?.start_time },
                                          { name: "twitter:string:broadcast_scheduled_start_time", content: e.scheduled_start_time },
                                          { name: "twitter:string:broadcast_start_time", content: e.start_time },
                                          { name: "twitter:string:broadcast_end_time", content: e.end_time },
                                          { name: "twitter:site:id", content: t?.id_str },
                                          { name: "twitter:string:broadcast_state", content: s.rZ[e.state ?? s.N8.NotStarted] },
                                      ]
                                    : [])(e),
                        ),
                c = (e) => (void 0 !== e.content ? r.createElement("meta", e) : null),
                l = (e) => r.createElement(i.ql, null, ...((e) => o(e).map(c))(e));
        },
        679180: (e, t, a) => {
            a.d(t, { H: () => g });
            var r = a(202784),
                i = a(325686),
                n = a(154003),
                s = a(371344),
                o = a(451051),
                c = a(392237),
                l = a(111677),
                d = a.n(l),
                m = a(885724),
                p = a(688356),
                h = a(741810),
                _ = a(782642);
            const u = { cancel: d().cfd2f35e, defaultTitle: d().jceadc3e, edit: d().abd845fe, save: d().i2209530, toastSuccessMessage: d().d39d46c4, toastErrorMessage: d().ef4602ec };
            function g(e) {
                const { broadcastId: t, canEdit: a, remoteTitle: c } = e,
                    [l, d] = r.useState({ currentTitle: c, draftTitle: c, isEditing: !1 }),
                    g = (0, _.p)();
                r.useEffect(() => {
                    d((e) => ({ ...e, currentTitle: c, draftTitle: c }));
                }, [c]);
                const f = { user_mentions: (0, p.Z)(l.draftTitle) },
                    w = [0, l.draftTitle.length],
                    E = l.draftTitle === l.currentTitle || "" === l.draftTitle.trim(),
                    v = r.useCallback((e) => {
                        d((t) => ({ ...t, draftTitle: e.target.value }));
                    }, []),
                    y = r.useCallback(() => {
                        Promise.resolve(h.E.replayBroadcastEdit(t, { replay_edited_title: l.draftTitle }))
                            .then(() => {
                                d((e) => ({ ...e, currentTitle: l.draftTitle, isEditing: !1 })), g({ text: u.toastSuccessMessage });
                            })
                            .catch(() => {
                                d((e) => ({ ...e, draftTitle: e.currentTitle })), g({ text: u.toastErrorMessage });
                            });
                    }, [t, l.draftTitle, g]),
                    x = r.useCallback(() => {
                        d((e) => ({ ...e, draftTitle: e.currentTitle, isEditing: !1 }));
                    }, []),
                    T = () => r.createElement(i.Z, { style: b.buttonContainer }, r.createElement(n.ZP, { onPress: x, size: "small", type: "primaryOutlined" }, u.cancel), r.createElement(n.ZP, { disabled: E, onPress: y, size: "small", type: "primaryFilled" }, u.save));
                return r.createElement(
                    i.Z,
                    { style: b.broadcastTitleRow },
                    l.isEditing
                        ? r.createElement(s.Z, { appTextSize: "headline1", inputStyle: b.titleInput, maxLength: 256, maxNumberOfLines: 3, multiline: !0, onChange: v, onSubmitEditing: E ? void 0 : y, placeholder: u.defaultTitle, rightContent: r.createElement(T, null), styleType: "selection", value: l.draftTitle })
                        : r.createElement(
                              i.Z,
                              { style: b.broadcastTitleRow },
                              r.createElement(o.Z, { displayTextRange: w, entities: f, linkify: !0, size: "headline1", style: b.broadcastTitleText, text: l.currentTitle, weight: "bold" }),
                              a &&
                                  r.createElement(n.ZP, {
                                      "aria-label": u.edit,
                                      hoverLabel: { label: u.edit },
                                      icon: r.createElement(m.default, null),
                                      onPress: () => {
                                          d((e) => ({ ...e, isEditing: !0 }));
                                      },
                                      size: "xSmall",
                                      type: "primaryText",
                                  }),
                          ),
                );
            }
            const b = c.default.create((e) => ({ buttonContainer: { flexDirection: "row", gap: e.spaces.space8 }, titleInput: { fontWeight: e.fontWeights.heavy, padding: 0 }, broadcastTitleRow: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }, broadcastTitleText: { flex: 1 } }));
        },
        90887: (e, t, a) => {
            a.r(t), a.d(t, { BroadcastScreen: () => Pe, default: () => Re });
            var r = a(202784),
                i = a(272175),
                n = a(325686),
                s = a(688715),
                o = a(978053),
                c = a(731708),
                l = a(673510),
                d = a(366635),
                m = a(868634),
                p = a(530525),
                h = a(439592),
                _ = a(392237),
                u = a(111677),
                g = a.n(u),
                b = a(123751),
                f = a(615656),
                w = a(718e3),
                E = a(290402),
                v = a(651930),
                y = a(572067),
                x = a(252021),
                T = a(443781),
                I = a(293988),
                S = a(38293),
                Z = a(23134),
                C = a(652904),
                N = a(907552),
                k = a(181142),
                A = a(241304),
                B = a(310453),
                P = a(666670),
                W = a(702001),
                R = a(51525),
                D = a(810430),
                L = a(293115),
                M = a(479506),
                j = a(503229),
                U = a(801501),
                F = a(382285);
            const O = ({ broadcastId: e }) => r.createElement(n.Z, { style: V.container }, r.createElement(F.Z, { broadcastId: e })),
                z = _.default.supports("height: 100dvh") ? "dvh" : "vh",
                V = _.default.create((e) => ({ container: { borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.xLarge, borderWidth: e.borderWidths.small, marginStart: e.spaces.space8, marginTop: e.spaces.space8, minHeight: "480px", height: `calc(100${z} - 400px)` } }));
            var G = a(10195),
                H = (a(136728), a(107267)),
                J = a(811176),
                $ = a(154003),
                q = a(149170),
                K = a(415506),
                Q = a(725516);
            function X(e) {
                const t = (function (e) {
                    const t = (0, H.useHistory)(),
                        a = (0, Q.z)(),
                        r = (0, H.useLocation)(),
                        i = [],
                        n = e.broadcast?.tweet;
                    n &&
                        i.push({
                            text: Y.Report_Broadcast,
                            Icon: K.default,
                            onClick: () => {
                                t.push({ pathname: `/i/report/status/${n}`, state: { clientReferer: r.pathname, isMedia: !0, isPromoted: !1, scribeNamespace: a.contextualScribeNamespace } });
                            },
                        });
                    return i;
                })(e);
                if (t.length < 1) return null;
                return r.createElement($.ZP, {
                    "aria-label": Y.More,
                    hoverLabel: { label: Y.More },
                    icon: r.createElement(q.default, null),
                    renderMenu: function (e) {
                        return r.createElement(J.Z, { items: t, onCloseRequested: e });
                    },
                    type: "primaryText",
                });
            }
            const Y = { More: g().h63a5c3c, Report_Broadcast: g().cbae35fa };
            var ee = a(679180),
                te = a(71620),
                ae = a(2430),
                re = a(668214),
                ie = a(689642),
                ne = a(836255),
                se = a(919022),
                oe = a(312771);
            const ce = (e, t) => t.match.params.broadcastId,
                le = (e, t) => ie.Z.select(e, ce(0, t)),
                de = (e, t) => {
                    const a = le(e, t);
                    return a && a.user ? se.ZP.select(e, a.user) : void 0;
                },
                me = (e, t) => {
                    const a = le(e, t);
                    return a && a.user ? se.ZP.select(e, a.user) : void 0;
                },
                pe = (e, t) => (t.location.state ? t.location.state.promotedContent : void 0),
                he = (e, t) => {
                    if (le(e, t)) return oe.ZP.LOADED;
                    return ie.Z.selectFetchStatus(e, ce(0, t)) ?? oe.ZP.NONE;
                },
                _e = (0, ae.cI)("t"),
                ue = (0, re.Z)()
                    .propsFromState(() => ({ broadcastId: ce, broadcast: le, user: me, twitterBroadcaster: de, fetchStatus: he, promotedContent: pe, timecode: _e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, te.zr)("BROADCAST_SCREEN"), fetchBroadcast: ie.Z.fetchOneIfNeeded, fetchUserIfNeeded: se.ZP.fetchOneIfNeeded, fetchTweetIfNeeded: ne.Z.fetchOneIfNeeded }))
                    .withAnalytics({ page: "broadcast" });
            var ge = a(386592);
            const be = 16 / 9,
                fe = { url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png", width: 1920, height: 1080 },
                we = { objectFitVideo: "contain" },
                Ee = (e) => e && e.trim().length > 0,
                ve = g().ac4c73d8,
                ye = g().e39b368e,
                xe = g().e3aac82a,
                Te = g().hd0bc1eb,
                Ie = g().bea1f26b,
                Se = g().e44095a5,
                Ze = g().j83f29dd,
                Ce = g().jceadc3e,
                Ne = g().d980e29f,
                ke = g().fc209bb7,
                Ae = g().jade381b,
                Be = (e, t) => (0, s.ju)(`https://x.com/i/broadcasts/${e}${t ? `?t=${t}` : ""}`);
            class Pe extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getTitle = () => {
                            const { broadcast: e } = this.props;
                            if (e) {
                                const { state: t, status: a } = e;
                                if (a) return a;
                                const r = this._getName(e);
                                if (r)
                                    switch (t) {
                                        case ge.N8.Running:
                                            return Te({ name: r });
                                        case ge.N8.Ended:
                                        case ge.N8.TimedOut:
                                            return Ie({ name: r });
                                        case ge.N8.NotStarted:
                                        default:
                                            return Ce;
                                    }
                            }
                            return Ce;
                        }),
                        (this._getName = (e) => {
                            if (!this.props?.twitterBroadcaster) return;
                            const { name: t, screen_name: a } = this.props.twitterBroadcaster;
                            return Ee(t) ? t : a && Ee(a) ? `@${a}` : void 0;
                        }),
                        (this._isLive = () => this.props.broadcast && this.props.broadcast.state === ge.N8.Running),
                        (this._renderTimeString = () => {
                            const { broadcast: e } = this.props,
                                { formatTimeSinceDate: t } = o.default,
                                a = new Date(),
                                i = e?.end_time ?? e?.timedout_time ?? e?.start_time;
                            if (!i) return null;
                            const n = new Date(i),
                                s = a.getTime() - n.getTime() > 2592e6 ? Ae(n) : t(n);
                            return r.createElement(c.ZP, { color: "gray700", size: "subtext1" }, this._isLive() ? Se({ timestamp: s }) : Ze({ timestamp: s }));
                        }),
                        (this._renderPrimaryContent = () => {
                            const { fetchStatus: e } = this.props;
                            return r.createElement(E.Z, { "aria-label": xe, fetchStatus: e, onRequestRetry: this._handleFetchBroadcast, render: this._render });
                        }),
                        (this._renderRightControl = () => r.createElement(n.Z, { style: We.rightControl }, r.createElement(N.Tz, { scribeNamespace: this.props.analytics.contextualScribeNamespace, url: (0, s.ju)(`https://x.com/i/broadcasts/${this.props.broadcastId}`) }), r.createElement(X, this.props))),
                        (this._render = () => {
                            const e = this._getTitle(),
                                { viewerUserId: t } = this.context,
                                { broadcastId: a, twitterBroadcaster: i } = this.props,
                                s = i?.id_str === t;
                            return r.createElement(r.Fragment, null, this._renderMedia(), r.createElement(n.Z, { style: We.header }, this._renderUserNameAndActions(), r.createElement(n.Z, { style: We.title }, r.createElement(ee.H, { broadcastId: a, canEdit: s, remoteTitle: e })), this._renderTimeString()));
                        }),
                        (this._renderUserNameAndActions = () => r.createElement(n.Z, { style: We.userNameAndActionsWrapper }, this._renderUserName())),
                        (this._renderUserName = () => {
                            const { twitterBroadcaster: e } = this.props,
                                t = this.props.user;
                            return e ? r.createElement(n.Z, { style: We.userNameWrapper }, r.createElement(l.ZP, { affiliateBadgeInfo: e.highlightedLabel, avatarUri: e.profile_image_url_https, decoration: this._renderUserActions(), isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, style: We.userCell, translatorType: "none" === e.translator_type ? void 0 : e.translator_type, userId: e.id_str, verifiedType: e.verified_type, withLink: !0 })) : t?.profile_image_url && t?.screen_name ? r.createElement(n.Z, { style: We.userNameWrapper }, r.createElement(d.Z, { name: t.screen_name, profileImageUrl: t.profile_image_url })) : void 0;
                        }),
                        (this._renderUserActions = () => {
                            const { featureSwitches: e, viewerUserId: t } = this.context,
                                { promotedContent: a, twitterBroadcaster: i } = this.props;
                            return !i || t === i.id_str || i.blocked_by ? null : r.createElement(n.Z, { style: We.userActionsWrapper }, e.isTrue("rweb_tipjar_consumption_enabled") && r.createElement(A.Z, { userId: i.id_str }), i.following && r.createElement(I.Z, { allowPromptForPush: !0, isFollowing: i.notifications, userId: i.id_str }), r.createElement(Z.C, { isSuperFollowSubscriptionEnabled: this.context.featureSwitches.isTrue("super_follow_android_web_subscription_enabled"), promotedContent: a ?? i.promoted_content, userId: i.id_str }));
                        }),
                        (this._getScribeData = () => {
                            const { broadcastId: e } = this.props;
                            return { items: [{ live_broadcast_details: { target_broadcast_id: e } }] };
                        }),
                        (this._fetchTwitterBroadcaster = () => {
                            const { broadcast: e, createLocalApiErrorHandler: t, fetchUserIfNeeded: a } = this.props,
                                r = e && e.user;
                            if (r) return a(r).catch(t(P.F));
                        }),
                        (this._startTimer = () => {
                            this._stopTimer(), (this._timer = new U.Z(3e4).interval(this._fetchUpdates)), this._timer.start();
                        }),
                        (this._stopTimer = () => {
                            this._timer && this._timer.stop(), (this._timer = void 0);
                        }),
                        (this._handleFetchBroadcast = () => {
                            const { broadcastId: e, createLocalApiErrorHandler: t, fetchBroadcast: a } = this.props;
                            e && a(e).catch(t({ [f.ZP.GenericNotFound]: { customAction: R.vv } }));
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
                        e && this.props.fetchTweetIfNeeded(e).catch(this.props.createLocalApiErrorHandler(W.c));
                    }
                }
                render() {
                    const { history: e, match: t } = this.props,
                        { featureSwitches: a } = this.context,
                        i = this._getTitle(),
                        n = this.props.broadcast?.chat_option || 0,
                        s = t?.params?.broadcastId || "",
                        o = a.isTrue("responsive_web_chat_enabled") && n > 1;
                    return r.createElement(L.nO, { data: this._getScribeData() }, r.createElement(C.Z, null, this._renderMetaTags(i), r.createElement(k.aM, null, r.createElement(x.Z, { backLocation: "/", documentTitle: i, history: e, primaryContent: this._renderPrimaryContent, rightControl: this._renderRightControl(), sidebarContent: o ? r.createElement(O, { broadcastId: s }) : r.createElement(w.Z, null), title: ye, withWideSidebar: o })), r.createElement(S.Z, { title: i, withMeta: !1 })));
                }
                _renderMetaTags(e) {
                    const { broadcast: t, broadcastId: a, timecode: i, twitterBroadcaster: n } = this.props,
                        s = n?.name,
                        o = `twitter://broadcasts/${a}`,
                        c = Be(a),
                        l = Be(a, i);
                    return r.createElement(r.Fragment, null, r.createElement(y.Z, { canonical: c, description: e, title: s, type: "article" }), r.createElement(v.Z, { deepLink: o }), r.createElement(G.Z, { broadcast: t, broadcaster: n, id: a, timecode: i, title: e, url: l }));
                }
                _renderMedia() {
                    const { broadcast: e } = this.props;
                    return e && e.state === ge.N8.NotStarted ? this._renderPreLiveSlate() : this._renderPlayer();
                }
                _renderStartDateLabel() {
                    const { broadcast: e } = this.props,
                        t = e && e.scheduled_start_time ? new Date(parseInt(e.scheduled_start_time, 10)) : void 0,
                        a = t ? Ne({ date: ke(t) }) : void 0;
                    return a ? r.createElement(n.Z, { style: We.labelOverlay }, r.createElement(m.ZP, null, a)) : null;
                }
                _renderPreLiveSlate() {
                    const { broadcast: e } = this.props,
                        t = e && e.pre_live_slate_url ? { url: e.pre_live_slate_url, width: 600, height: 337 } : fe;
                    return r.createElement(n.Z, null, r.createElement(i.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: t.url, property: "og:image" }), r.createElement("meta", { content: t.width, property: "og:image:width" }), r.createElement("meta", { content: t.height, property: "og:image:height" })), r.createElement(p.Z, { "aria-label": ve, aspectMode: h.Z.exact(_.default.theme.aspectRatios.landscape), image: t, previewMode: !1 }), this._renderStartDateLabel());
                }
                _renderPlayer() {
                    const { broadcast: e, broadcastId: t, promotedContent: a, timecode: s } = this.props,
                        o = e && e.width && e.height && { url: e.image_url || "", width: e.width, height: e.height },
                        c = e && e.media_key;
                    if (!(t && o && c)) return null;
                    const l = e && o && (0, D.d5)(e.image_url_small, e.image_url_medium, o),
                        d = e?.tweet;
                    return r.createElement(L.nO, { data: { items: [{ id: d, item_type: M.Z.ItemType.TWEET }] } }, r.createElement(n.Z, { style: We.card }, r.createElement(i.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: o.url, property: "og:image" }), r.createElement("meta", { content: o.width, property: "og:image:width" }), r.createElement("meta", { content: o.height, property: "og:image:height" })), r.createElement(B.Z, { "aria-label": ve, aspectRatio: be, customVariants: l, displayOptions: we, includeBroadcastEventAssociation: !0, poster: o, promotedContent: a, source: { variants: [], videoId: b.Z.forBroadcast(t), contentId: c }, timecode: s, videoType: "video" })));
                }
            }
            Pe.contextType = T.rC;
            const We = _.default.create((e) => ({ card: { backgroundColor: e.colors.gray0, overflow: "hidden" }, header: { flexDirection: "column", gap: e.spaces.space12, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, labelOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12 }, relatedEvent: { flexBasis: "100%" }, rightControl: { display: "flex", flexDirection: "row" }, title: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space12 }, titleText: { marginEnd: e.spaces.space4 }, userCell: { paddingHorizontal: 0, paddingVertical: 0, width: "100%" }, userNameAndActionsWrapper: { display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userActionsWrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userNameWrapper: { alignItems: "flex-start", flex: 1, justifyContent: "center" } })),
                Re = ue((0, j.Z)(Pe));
        },
        386592: (e, t, a) => {
            a.d(t, { N8: () => r, rZ: () => i });
            a(136728);
            const r = { Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" },
                i = { Canceled: "CANCELED", Ended: "ENDED", NotStarted: "NOT_STARTED", PrePublished: "PRE_PUBLISHED", Running: "RUNNING", TimedOut: "TIMED_OUT" };
        },
        734861: (e, t, a) => {
            a.d(t, { v: () => r });
            const r = { xBannerImg: "https://pbs.twimg.com/media/Gl4CGtJW0AEelSW?format=png&name=large", xBasketballImg: "https://pbs.twimg.com/media/Gl4CGtDXoAAgF8s?format=png&name=large", xbracketChallenge: "https://pbs.twimg.com/media/GmBavjVXEAAy1Pt?format=jpg&name=large", xbracketImage: "https://pbs.twimg.com/media/GmBaz49bcAAHAAd?format=jpg&name=large", xf1Image: "https://pbs.twimg.com/media/GmaqgF4a8AEyMKz?format=jpg&name=large", xNhlImg: "https://pbs.twimg.com/media/Gl4CGtJW0AEelSW?format=png&name=large", xSoccerImg: "https://pbs.twimg.com/media/Gl4CGtJW0AEelSW?format=png&name=large" };
        },
        119907: (e, t, a) => {
            a.d(t, { R: () => x });
            var r = a(202784),
                i = a(272175),
                n = a(111677),
                s = a.n(n),
                o = a(443781),
                c = a(782274),
                l = a(10622),
                d = a.n(l),
                m = (a(585488), a(437429)),
                p = a.n(m);
            const h = c.Z,
                _ = s().be548ecb,
                u = s().b23bb579;
            const g = function (e) {
                const [t, a] = r.useState(null),
                    i = p()(),
                    { featureSwitches: n } = (0, o.QZ)();
                return (
                    r.useEffect(() => {
                        if (!e) return void a(null);
                        const t = e.match(/^\/nhl\/game\/id\/(\d+)/),
                            r = t?.[1];
                        r
                            ? d()(i, h, { id: r })
                                  .toPromise()
                                  .then((e) => {
                                      if (e?.live_event_by_rest_id?.nhl_event_page) {
                                          const t = e.live_event_by_rest_id.nhl_event_page.event_info.basic_data.teams.map((e) => e.team_information.team_name),
                                              r = e.live_event_by_rest_id.nhl_event_page.event_info.basic_data.images?.[0],
                                              i = 2 === t.length;
                                          a({ rest_id: e.live_event_by_rest_id.rest_id, title: i ? _({ teamName1: t[0], teamName2: t[1] }) : null, description: i ? u({ teamName1: t[0], teamName2: t[1] }) : null, image: r });
                                      } else a(null);
                                  })
                                  .catch(() => {
                                      a(null);
                                  })
                            : a(null);
                    }, [i, n, e]),
                    t
                );
            };
            const b = a(791181).Z,
                f = s().be548ecb,
                w = s().b23bb579;
            const E = function (e) {
                    const [t, a] = r.useState(null),
                        i = p()(),
                        { featureSwitches: n } = (0, o.QZ)();
                    return (
                        r.useEffect(() => {
                            if (!e) return void a(null);
                            const t = e.match(/^\/soccer\/match\/id\/(\d+)/),
                                r = t?.[1];
                            r
                                ? d()(i, b, { id: r })
                                      .toPromise()
                                      .then((e) => {
                                          if (e?.live_event_by_rest_id?.soccer_event_page) {
                                              const t = e.live_event_by_rest_id.soccer_event_page.event_info.basic_data.teams.map((e) => e.team_information.team_name),
                                                  r = e.live_event_by_rest_id.soccer_event_page.event_info.basic_data.images?.[0],
                                                  i = 2 === t.length;
                                              a({ rest_id: e.live_event_by_rest_id.rest_id, title: i ? f({ teamName1: t[0], teamName2: t[1] }) : null, description: i ? w({ teamName1: t[0], teamName2: t[1] }) : null, image: r });
                                          } else a(null);
                                      })
                                      .catch(() => {
                                          a(null);
                                      })
                                : a(null);
                        }, [i, n, e]),
                        t
                    );
                },
                v = { jfTitle: s().b38adba2, somethingWentWrong: s().g61ed8a4 },
                y = { name: "apple-itunes-app", content: "app-id=333903271, app-clip-bundle-id=com.atebits.Tweetie2.XAppClip, app-clip-display=card" },
                x = (e, t) => {
                    const a = ((e) => (e.startsWith("/nhl/game/id/") ? "nhl" : e.startsWith("/soccer/match/id/") ? "soccer" : e.startsWith("/nfl") ? "nfl" : e.startsWith("/nba") ? "nba" : e.startsWith("/ncaamb/league/home") ? "mm_league" : e.startsWith("/ncaamb/invite/league") ? "mm_invite" : e.startsWith("/marchmadness") || e.startsWith("/ncaamb") ? "mm" : e.startsWith("/f1") ? "f1" : e.startsWith("/bracketchallenge") || e.startsWith("/i/bracketchallenge") || e.startsWith("/brackets") ? "mm_bracket" : "default"))(e),
                        n = ((e) => {
                            const t = g(e || ""),
                                a = E(e || "");
                            return t || a || void 0;
                        })(e),
                        c = ((e, t, a) => {
                            const { featureSwitches: r } = (0, o.QZ)();
                            return { default: { title: v.jfTitle, description: null, image: e.xBannerImg }, nhl: { title: a?.title || s().d05ae004, description: a?.description || s().d35ad22c, image: a?.image || e.xNhlImg }, soccer: { title: a?.title || s().e806daa2, description: a?.description || s().cc2c2eca, image: a?.image || e.xSoccerImg }, nfl: { title: "NFL Portal", description: "NFL Portal", image: e.xBannerImg }, nba: { title: "NBA Portal", description: "NBA Portal", image: e.xBasketballImg }, mm: { title: "Win a trip to Mars", description: "Join leagues. Make a bracket. Epic prizes.", image: e.xbracketChallenge }, mm_invite: { title: "Join my league!", description: "Accept your invite. Play & win epic prizes!", image: e.xbracketImage }, mm_league: { title: "Got better picks?", description: "View the league for top brackets.", image: e.xbracketChallenge }, mm_bracket: { title: "Got better picks?", description: "Perfect bracket wins a trip to Mars 🚀", image: e.xbracketImage }, f1: { title: r.getStringValue("events_f1_rweb_preview_title", s().bcdeae66), description: r.getStringValue("events_f1_rweb_preview_description", s().e30e4bea), image: r.getStringValue("events_f1_rweb_preview_image", e.xf1Image) } };
                        })(t, 0, n)[a],
                        l = r.createElement(i.ql, null, r.createElement("meta", { content: c.title, property: "og:title" }), c.description && r.createElement("meta", { content: c.description, property: "og:description" }), r.createElement("meta", { content: c.image, property: "og:image" }), r.createElement("meta", y));
                    return { title: c.title, helmet: l };
                };
        },
        625725: (e, t, a) => {
            a.r(t), a.d(t, { JetfuelFullModalScreen: () => m, default: () => h });
            var r = a(202784),
                i = a(325686),
                n = a(392237),
                s = a(38293),
                o = a(652904),
                c = a(996223),
                l = a(734861),
                d = a(119907);
            const m = ({ location: e }) => {
                    const t = e.pathname.slice(5),
                        { helmet: a, title: n } = (0, d.R)(t, l.v);
                    return r.createElement(o.Z, { locationKey: t }, a, r.createElement(s.$, { messagesUnreadCount: 0, notificationsUnreadCount: 0, title: n }), r.createElement(i.Z, { style: p.container }, r.createElement(c.J, null)));
                },
                p = n.default.create((e) => ({ container: { width: "100%", height: "100%" } })),
                h = m;
        },
        662227: (e, t, a) => {
            a.r(t), a.d(t, { JetfuelModalScreen: () => l, default: () => d });
            var r = a(202784),
                i = a(38293),
                n = a(652904),
                s = a(996223),
                o = a(734861),
                c = a(119907);
            const l = ({ location: e }) => {
                    const t = e.pathname.slice(5),
                        { helmet: a, title: l } = (0, c.R)(t, o.v);
                    return r.createElement(n.Z, { locationKey: t }, a, r.createElement(i.$, { messagesUnreadCount: 0, notificationsUnreadCount: 0, title: l }), r.createElement(s.J, null));
                },
                d = l;
        },
        237780: (e, t, a) => {
            a.r(t), a.d(t, { JetfuelScreen: () => _, default: () => u });
            var r = a(202784),
                i = a(718e3),
                n = a(252021),
                s = a(443781),
                o = a(652904),
                c = a(655352),
                l = a(996223),
                d = a(734861),
                m = a(119907);
            const p = r.createElement(i.Z, { withTrends: !1 }),
                h = r.createElement(l.J, null),
                _ = ({ history: e, location: t }) => {
                    const a = t.pathname.slice(5),
                        { featureSwitches: i } = (0, s.QZ)(),
                        l = { xBannerImg: i.getStringValue("responsive_web_jf_banner_img", d.v.xBannerImg), xNhlImg: d.v.xNhlImg, xSoccerImg: d.v.xSoccerImg, xBasketballImg: i.getStringValue("responsive_web_jf_basketball_img", d.v.xBasketballImg), xbracketChallenge: i.getStringValue("responsive_web_jf_bracket_challenge_img", d.v.xbracketChallenge), xbracketImage: i.getStringValue("responsive_web_jf_bracket_img", d.v.xbracketImage), xf1Image: i.getStringValue("responsive_web_jf_f1_img", d.v.xf1Image) },
                        { helmet: _, title: u } = (0, m.R)(a, l);
                    return r.createElement(o.Z, { locationKey: a }, _, r.createElement(n.Z, { backLocation: "/", documentTitle: u, headerless: !c.am(), history: e, primaryContent: h, sidebarContent: p }));
                },
                u = _;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.LiveEvent-cf1ec9f3.a5aa8e9a.js.map
