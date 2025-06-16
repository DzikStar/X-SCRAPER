"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Live", "bundle.AudioSpaceDetail", "icons/IconFeedback-js"],
    {
        651930: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                n = a(99107),
                l = a(272175),
                o = a(111677);
            const i = a.n(o)().c39b0e24,
                c = ({ deepLink: e }) => {
                    const t = i;
                    return e ? r.createElement(l.ql, null, r.createElement("meta", { content: e, property: "al:ios:url" }), r.createElement("meta", { content: n.AF, property: "al:ios:app_store_id" }), r.createElement("meta", { content: t, property: "al:ios:app_name" }), r.createElement("meta", { content: e, property: "al:android:url" }), r.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), r.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(202784),
                n = a(272175);
            const l = (e) => {
                const { canonical: t, description: a = "", image: l, imageAlt: o, imageH: i, imageType: c, imageW: s, title: d, ttl: m, type: u } = e;
                return r.createElement(n.ql, null, u ? r.createElement("meta", { content: u, property: "og:type" }) : null, t ? r.createElement("meta", { content: t, property: "og:url" }) : null, d ? r.createElement("meta", { content: d, property: "og:title" }) : null, r.createElement("meta", { content: a, property: "og:description" }), l ? r.createElement("meta", { content: l, property: "og:image" }) : null, c ? r.createElement("meta", { content: c, property: "og:image:type" }) : null, s ? r.createElement("meta", { content: s, property: "og:image:width" }) : null, i ? r.createElement("meta", { content: i, property: "og:image:height" }) : null, o ? r.createElement("meta", { content: o, property: "og:image:alt" }) : null, m ? r.createElement("meta", { content: m, property: "og:ttl" }) : null);
            };
        },
        293988: (e, t, a) => {
            a.d(t, { Z: () => D });
            var r = a(202784),
                n = a(154003),
                l = a(111677),
                o = a.n(l),
                i = a(74514),
                c = a(405303),
                s = a(684511),
                d = a(860174),
                m = a(71620),
                u = a(668214),
                h = a(257166),
                p = a(919022);
            const g = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                b = (0, u.Z)()
                    .propsFromState(() => ({ shouldPromptPush: g }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = o().bdba3e1a,
                w = o().c4da7d28,
                y = o().j87c21f4,
                _ = o().iebc30ca,
                E = o().dc740eb2;
            class v extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": w, hoverLabel: { label: _ }, icon: r.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": f, hoverLabel: { label: y }, icon: r.createElement(c.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
                        }),
                        (this._handleFollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e, shouldPromptPush: t } = this.props;
                            t && this.setState({ showingPushPrompt: !0 }),
                                this._updateDeviceFollowing(!0).then((t) => {
                                    e && this._scribeAction("device_follow_without_follow"), this._scribeAction("on");
                                });
                        }),
                        (this._handleUnfollow = () => {
                            const { isDeviceFollowWithoutUserFollow: e } = this.props;
                            this._updateDeviceFollowing(!1).then((t) => {
                                e && this._scribeAction("device_unfollow_without_follow"), this._scribeAction("off");
                            });
                        }),
                        (this.state = { showingPushPrompt: !1 });
                }
                render() {
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(s.Z, { fullScreen: !0, message: E }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: a, userId: r } = this.props;
                    return a(r, { device: e }).catch(t(d.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const D = b(v);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(500002),
                l = a(668214),
                o = a(997174),
                i = a(118823);
            const c = (0, l.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: o.NH }))
                .withAnalytics();
            class s extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: a, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: l, search: o },
                            locationKey: i,
                        } = e;
                    let c = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (c = !0));
                    const s = n || i;
                    ((s && n !== i) || (!s && a !== l) || r !== o || c) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            s.defaultProps = { children: null };
            const d = (0, n.ZP)(c(s));
        },
        241304: (e, t, a) => {
            a.d(t, { Z: () => S });
            var r = a(202784),
                n = a(576648),
                l = a(325686),
                o = a(154003),
                i = a(138099),
                c = a(731708),
                s = a(392237),
                d = a(111677),
                m = a.n(d),
                u = a(652255),
                h = a(376180),
                p = a(502940),
                g = a(70962),
                b = a(933340),
                f = a(321264),
                w = a(208340),
                y = a(707305),
                _ = a(748138),
                E = a(837020),
                v = a(125363),
                D = a(601576),
                Z = a(919022);
            const M = m().ia5e7488,
                P = { label: M },
                T = m().j33d8902,
                C = { label: T },
                x = m().a8ab3d08,
                I = m().d740d2d9,
                k = { bandcamp_handle: { icon: r.createElement(u.default, null), label: m().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: r.createElement(h.default, null), label: m().d876e67e }, cash_app_handle: { icon: r.createElement(p.default, null), label: m().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: r.createElement(g.default, null), label: m().a32a7c06 }, gofundme_handle: { icon: r.createElement(b.default, null), label: m().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: r.createElement(f.default, null), label: m().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: r.createElement(w.default, null), label: m().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: r.createElement(y.default, null), label: m().h1198dcc, url: "https://venmo.com/" } };
            function S({ style: e, userId: t }) {
                const a = (0, v.I0)(),
                    [s, d] = r.useState(!1),
                    m = (0, v.v9)((e) => Z.ZP.select(e, t));
                if (!m) return null;
                const { tipjar_settings: u } = m;
                if (!u) return null;
                const { is_enabled: h, ...p } = u;
                if (!1 === h || !Object.keys(p).length) return null;
                function g() {
                    d(!1);
                }
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(o.ZP, {
                        "aria-label": T,
                        hoverLabel: C,
                        icon: r.createElement(_.default, null),
                        onPress: function () {
                            d((e) => !e);
                        },
                        style: e,
                    }),
                    s
                        ? r.createElement(
                              i.Z,
                              { onMaskClick: g, style: A.sheet, type: "bottom", withMask: !0 },
                              r.createElement(o.ZP, { "aria-label": M, hoverLabel: P, icon: r.createElement(E.default, null), onPress: g, style: A.close, type: "primaryText" }),
                              r.createElement(l.Z, { style: A.header }, r.createElement(c.ZP, { weight: "bold" }, x), r.createElement(c.ZP, null, `@${m.screen_name}`)),
                              Object.entries(p)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const l = k[e];
                                      if (l) {
                                          const o = l.url
                                                  ? void 0
                                                  : function () {
                                                        n.Z.setString(String(t)), a((0, D.fz)({ text: I({ service: l.label }) }));
                                                    },
                                              i = l.url ? `${l.url}${String(t)}` : void 0;
                                          return r.createElement(c.ZP, { color: "text", key: e, link: i, onPress: o, style: A.service, withInteractiveStyling: !1 }, l.icon, l.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const A = s.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
        },
        684511: (e, t, a) => {
            a.d(t, { Z: () => r });
            a(202784);
            const r = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("modules.common-e907d115"),
                        a.e("modules.common-e019dbda"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-fd0b2cf1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c7e58553"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f7f56781"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ff4a34e0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("loader.PushNotificationsPrompt"),
                    ]).then(a.bind(a, 529629)),
            });
        },
        879596: (e, t, a) => {
            a.d(t, { D: () => n });
            var r = a(111677);
            const n = { defaultToast: { text: a.n(r)().ca96fe6e }, showToast: !0 };
        },
        860174: (e, t, a) => {
            a.d(t, { Z: () => l });
            var r = a(615656),
                n = a(51525);
            const l = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        10195: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                n = a(272175),
                l = a(276563),
                o = a(386592);
            const i = (e) =>
                    []
                        .concat(
                            (({ id: e, timecode: t, title: a, url: r }) => [
                                { name: "twitter:card", content: l.default.CardNames.BROADCAST },
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
                                          { name: "twitter:string:broadcast_state", content: o.rZ[e.state ?? o.N8.NotStarted] },
                                      ]
                                    : [])(e),
                        ),
                c = (e) => (void 0 !== e.content ? r.createElement("meta", e) : null),
                s = (e) => r.createElement(n.ql, null, ...((e) => i(e).map(c))(e));
        },
        679180: (e, t, a) => {
            a.d(t, { H: () => b });
            var r = a(202784),
                n = a(325686),
                l = a(154003),
                o = a(371344),
                i = a(451051),
                c = a(392237),
                s = a(111677),
                d = a.n(s),
                m = a(885724),
                u = a(688356),
                h = a(741810),
                p = a(782642);
            const g = { cancel: d().cfd2f35e, defaultTitle: d().jceadc3e, edit: d().abd845fe, save: d().i2209530, toastSuccessMessage: d().d39d46c4, toastErrorMessage: d().ef4602ec };
            function b(e) {
                const { broadcastId: t, canEdit: a, remoteTitle: c } = e,
                    [s, d] = r.useState({ currentTitle: c, draftTitle: c, isEditing: !1 }),
                    b = (0, p.p)();
                r.useEffect(() => {
                    d((e) => ({ ...e, currentTitle: c, draftTitle: c }));
                }, [c]);
                const w = { user_mentions: (0, u.Z)(s.draftTitle) },
                    y = [0, s.draftTitle.length],
                    _ = s.draftTitle === s.currentTitle || "" === s.draftTitle.trim(),
                    E = r.useCallback((e) => {
                        d((t) => ({ ...t, draftTitle: e.target.value }));
                    }, []),
                    v = r.useCallback(() => {
                        Promise.resolve(h.E.replayBroadcastEdit(t, { replay_edited_title: s.draftTitle }))
                            .then(() => {
                                d((e) => ({ ...e, currentTitle: s.draftTitle, isEditing: !1 })), b({ text: g.toastSuccessMessage });
                            })
                            .catch(() => {
                                d((e) => ({ ...e, draftTitle: e.currentTitle })), b({ text: g.toastErrorMessage });
                            });
                    }, [t, s.draftTitle, b]),
                    D = r.useCallback(() => {
                        d((e) => ({ ...e, draftTitle: e.currentTitle, isEditing: !1 }));
                    }, []),
                    Z = () => r.createElement(n.Z, { style: f.buttonContainer }, r.createElement(l.ZP, { onPress: D, size: "small", type: "primaryOutlined" }, g.cancel), r.createElement(l.ZP, { disabled: _, onPress: v, size: "small", type: "primaryFilled" }, g.save));
                return r.createElement(
                    n.Z,
                    { style: f.broadcastTitleRow },
                    s.isEditing
                        ? r.createElement(o.Z, { appTextSize: "headline1", inputStyle: f.titleInput, maxLength: 256, maxNumberOfLines: 3, multiline: !0, onChange: E, onSubmitEditing: _ ? void 0 : v, placeholder: g.defaultTitle, rightContent: r.createElement(Z, null), styleType: "selection", value: s.draftTitle })
                        : r.createElement(
                              n.Z,
                              { style: f.broadcastTitleRow },
                              r.createElement(i.Z, { displayTextRange: y, entities: w, linkify: !0, size: "headline1", style: f.broadcastTitleText, text: s.currentTitle, weight: "bold" }),
                              a &&
                                  r.createElement(l.ZP, {
                                      "aria-label": g.edit,
                                      hoverLabel: { label: g.edit },
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
            const f = c.default.create((e) => ({ buttonContainer: { flexDirection: "row", gap: e.spaces.space8 }, titleInput: { fontWeight: e.fontWeights.heavy, padding: 0 }, broadcastTitleRow: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }, broadcastTitleText: { flex: 1 } }));
        },
        386592: (e, t, a) => {
            a.d(t, { N8: () => r, rZ: () => n });
            a(136728);
            const r = { Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" },
                n = { Canceled: "CANCELED", Ended: "ENDED", NotStarted: "NOT_STARTED", PrePublished: "PRE_PUBLISHED", Running: "RUNNING", TimedOut: "TIMED_OUT" };
        },
        365470: (e, t, a) => {
            a.r(t), a.d(t, { LiveScreen: () => Be, default: () => Re });
            var r = a(202784),
                n = a(272175),
                l = a(325686),
                o = a(688715),
                i = a(537392),
                c = a(868634),
                s = a(530525),
                d = a(439592),
                m = a(392237),
                u = a(731708),
                h = a(879113),
                p = a(111677),
                g = a.n(p),
                b = a(123751),
                f = a(615656),
                w = a(545457),
                y = a(651930),
                _ = a(572067),
                E = a(443781),
                v = a(38293),
                D = a(652904),
                Z = a(382285),
                M = a(181142),
                P = a(310453),
                T = a(51525),
                C = a(655352),
                x = a(293115),
                I = a(503229),
                k = a(10195),
                S = a(679180),
                A = a(386592),
                N = a(807896),
                L = a(666305);
            const F = r.memo(({ ...e }) => {
                    const { ref: t, style: a } = z(),
                        n = r.useMemo(() => [a, e.style], [a, e.style]);
                    return r.createElement(l.Z, (0, N.Z)({ ref: t }, e, { style: n }));
                }),
                B = 16 / 9,
                z = () => {
                    const e = r.useRef(null),
                        [t, a] = r.useState(!0),
                        n = r.useCallback(() => {
                            const t = e.current,
                                r = t?.parentElement;
                            if (!t || !r) return;
                            const n = R(r),
                                l = R(t);
                            a(l >= n);
                        }, []);
                    r.useEffect(() => {
                        const t = e.current,
                            a = t?.parentElement;
                        if (t && a)
                            return (
                                L.Z.observe(t, n),
                                L.Z.observe(a, n),
                                () => {
                                    L.Z.unobserve(t, n), L.Z.unobserve(a, n);
                                }
                            );
                    }, [n]);
                    const l = r.useMemo(() => (t ? U.widthConstrained : U.heightConstrained), [t]);
                    return { ref: e, style: l };
                },
                R = (e) => {
                    const { height: t, width: a } = e.getBoundingClientRect();
                    return a / t;
                },
                U = m.default.create((e) => {
                    const t = { aspectRatio: B, marginHorizontal: "auto", top: 0 };
                    return { widthConstrained: { ...t, width: "100%", height: "auto" }, heightConstrained: { ...t, height: "100%", width: "auto" } };
                });
            var O = a(400752),
                W = a(107267),
                j = a(154003),
                H = a(978053),
                $ = a(673510),
                q = a(366635),
                V = a(360816),
                Y = a(293988),
                G = a(23134),
                K = a(907552),
                J = a(241304),
                Q = a(125363),
                X = a(427478),
                ee = a(823180),
                te = a(449998);
            const ae = g().jade381b,
                re = g().e44095a5,
                ne = g().j83f29dd,
                le = { section: "header", component: "user_actions" },
                oe = g().daca8a2c,
                ie = r.memo(({ broadcast: e, broadcastId: t, broadcaster: a, isLive: n }) => {
                    const { featureSwitches: i, viewerUserId: c } = (0, E.QZ)(),
                        s = (0, W.useHistory)(),
                        d = (0, Q.I0)(),
                        m = (0, O.b9)(te.Tc),
                        h = r.useCallback(() => {
                            t && (m(t), d(X.bi(ee.N.EXPANDED)), s.goBack());
                        }, [t, d, s, m]),
                        p = r.useCallback(() => r.createElement(j.ZP, { "aria-label": oe, hoverLabel: { label: oe }, icon: r.createElement(V.default, null), onPress: h, type: "primaryOutlined" }), [h]),
                        g = r.useCallback((e) => {
                            const t = new Date(),
                                a = new Date(e);
                            return t.getTime() - a.getTime() > 2592e6 ? ae(a) : H.default.formatTimeSinceDate(a);
                        }, []),
                        b = r.useMemo(() => {
                            const t = e?.end_time ?? e?.timedout_time ?? e?.start_time;
                            if (!t) return null;
                            const a = g(t);
                            return r.createElement(u.ZP, { color: "gray700", size: "subtext1" }, n ? re({ timestamp: a }) : ne({ timestamp: a }));
                        }, [e, g, n]),
                        f = r.useCallback(() => (!a || c === a.id_str || a.blocked_by ? null : r.createElement(l.Z, { style: ce.userActionsWrapper }, r.createElement(p, null), i.isTrue("rweb_tipjar_consumption_enabled") && r.createElement(J.Z, { userId: a.id_str }), a.following && r.createElement(Y.Z, { allowPromptForPush: !0, isFollowing: a.notifications, userId: a.id_str }), r.createElement(G.C, { isSuperFollowSubscriptionEnabled: i.isTrue("super_follow_android_web_subscription_enabled"), promotedContent: a.promoted_content, userId: a.id_str }))), [p, a, i, c]),
                        w = r.useMemo(() => (a ? r.createElement(l.Z, { style: ce.userNameWrapper }, r.createElement($.ZP, { affiliateBadgeInfo: a.highlightedLabel, avatarUri: a.profile_image_url_https, decoration: f(), isBlueVerified: a.is_blue_verified, isProtected: a.protected, isVerified: a.verified, name: a.name, screenName: a.screen_name, style: ce.userCell, translatorType: a.translator_type, userId: a.id_str, verifiedType: a.verified_type, withLink: !0 })) : a?.profile_image_url && a?.screen_name ? r.createElement(l.Z, { style: ce.userNameWrapper }, r.createElement(q.Z, { name: a.screen_name, profileImageUrl: a.profile_image_url })) : void 0), [f, a]);
                    return r.createElement(l.Z, { style: ce.header }, w, r.createElement(l.Z, { style: ce.timeAndShareWrapper }, b, t && r.createElement(K.Tz, { scribeNamespace: le, url: (0, o.ju)(`https://x.com/i/broadcasts/${t}`) })));
                }),
                ce = m.default.create((e) => ({ header: { flexDirection: "column", gap: e.spaces.space12, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, marginBottom: e.spaces.space48 }, userCell: { paddingHorizontal: 0, paddingVertical: 0, width: "100%" }, userActionsWrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userNameWrapper: { alignItems: "flex-start", flex: 1, justifyContent: "center" }, timeAndShareWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } }));
            var se = a(71620),
                de = a(2430),
                me = a(668214),
                ue = a(689642),
                he = a(919022),
                pe = a(312771);
            const ge = (0, de.cI)("t"),
                be = (e, t) => {
                    const a = t.match.params.screenName;
                    if (a) return a;
                    const r = ye(e, t);
                    return r?.user_results?.result?.core?.screen_name || "";
                },
                fe = (e, t) => {
                    const a = t.match.params.broadcastId;
                    if (a) return a;
                    const r = we(e, t);
                    return r?.latest_broadcast?.broadcast_id;
                },
                we = (e, t) => {
                    const a = be(e, t);
                    if (a) return he.ZP.selectByScreenName(e, a);
                    const r = ye(e, t);
                    return r?.user ? he.ZP.select(e, r.user) : void 0;
                },
                ye = (e, t) => {
                    const a = fe(e, t);
                    return a ? ue.Z.select(e, a) : void 0;
                },
                _e = (e, t) => he.ZP.selectViewerUser(e),
                Ee = (e, t) => {
                    const a = be(e, t);
                    return ue.Z.selectLatestBroadcastFetched(e, a);
                },
                ve = (e, t) => {
                    const a = ye(e, t),
                        r = Ee(e, t),
                        n = fe(e, t);
                    return a || (!n && r) ? pe.ZP.LOADED : pe.ZP.LOADING;
                },
                De = (0, me.Z)()
                    .propsFromState(() => ({ broadcast: ye, broadcastId: fe, broadcaster: we, fetchStatus: ve, latestBroadcastFetched: Ee, screenName: be, timecode: ge, viewerUser: _e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, se.zr)("LIVE_SCREEN"), fetchBroadcast: ue.Z.fetchOneIfNeeded, fetchLatestBroadcast: ue.Z.fetchLatestBroadcast })),
                Ze = 16 / 9,
                Me = { objectFitVideo: "contain" },
                Pe = ({ windowWidth: e }) => e >= 920,
                Te = (e) => (e ? { url: e.image_url, width: e.width, height: e.height } : null),
                Ce = g().hd0bc1eb,
                xe = g().bea1f26b,
                Ie = g().jceadc3e,
                ke = g().ab3ee97f,
                Se = g().ac4c73d8,
                Ae = g().i9028824,
                Ne = { page: "broadcast" },
                Le = { url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png", width: 1920, height: 1080 },
                Fe = (e, t) => (0, o.ju)(`https://x.com/i/broadcasts/${e}${t ? `?t=${t}` : ""}`);
            function Be(e) {
                const { broadcast: t, broadcastId: a, broadcaster: o, createLocalApiErrorHandler: p, fetchBroadcast: I, fetchLatestBroadcast: N, fetchStatus: L, latestBroadcastFetched: B, screenName: z, timecode: R } = e,
                    U = r.useContext(E.rC),
                    { viewerUserId: O } = U,
                    W = o?.id_str === O,
                    j = (0, i.Zx)(Pe),
                    H = (0, C.ZP)();
                (0, w.ph)(),
                    (0, w.hB)(),
                    r.useEffect(() => {
                        z && N(z);
                    }, [N, z]);
                const $ = r.useCallback(() => {
                    a && I(a).catch(p({ [f.ZP.GenericNotFound]: { customAction: T.vv } }));
                }, [a, p, I]);
                r.useEffect(() => {
                    $();
                }, [$, a]);
                const q = r.useMemo(() => {
                        if (t && o) {
                            const { state: e, status: a } = t,
                                { name: r } = o;
                            if (a) return a;
                            if (r)
                                switch (e) {
                                    case A.N8.Running:
                                        return Ce({ name: r });
                                    case A.N8.Ended:
                                    case A.N8.TimedOut:
                                        return xe({ name: r });
                                    case A.N8.NotStarted:
                                    default:
                                        return Ie;
                                }
                        }
                        return Ie;
                    }, [t, o]),
                    V = g().d980e29f,
                    Y = g().fc209bb7,
                    G = r.useCallback(() => {
                        const e = t && t.scheduled_start_time ? new Date(parseInt(t.scheduled_start_time, 10)) : void 0,
                            a = e ? V({ date: Y(e) }) : void 0;
                        return a ? r.createElement(l.Z, { style: ze.labelOverlay }, r.createElement(c.ZP, null, a)) : null;
                    }, [t, Y, V]),
                    K = r.useCallback(() => {
                        const e = t && t.pre_live_slate_url ? { url: t.pre_live_slate_url, width: 600, height: 337 } : Le;
                        return r.createElement(l.Z, null, r.createElement(n.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: e.url, property: "og:image" }), r.createElement("meta", { content: e.width, property: "og:image:width" }), r.createElement("meta", { content: e.height, property: "og:image:height" })), r.createElement(s.Z, { "aria-label": Se, aspectMode: d.Z.exact(m.default.theme.aspectRatios.landscape), image: e, previewMode: !1 }), G());
                    }, [t, G]),
                    J = r.useMemo(() => {
                        const e = t && t.media_key,
                            i = !a && o && B,
                            c = Te(t);
                        return t && t.state === A.N8.NotStarted ? K() : i ? r.createElement(l.Z, { style: ze.offlineContainer }, r.createElement(u.ZP, { size: "title2" }, ke({ screenName: z }))) : t && o && a && c && e ? r.createElement(r.Fragment, null, r.createElement(n.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: c.url, property: "og:image" }), r.createElement("meta", { content: c.width, property: "og:image:width" }), r.createElement("meta", { content: c.height, property: "og:image:height" })), r.createElement(P.Z, { "aria-label": Se, aspectRatio: Ze, displayOptions: Me, poster: c, source: { variants: [], videoId: b.Z.forBroadcast(a), contentId: e }, videoType: "video" })) : null;
                    }, [t, a, o, B, K, z]),
                    Q = r.useMemo(() => r.createElement(l.Z, { style: ze.chat }, r.createElement(Z.Z, { broadcastId: a ?? "", defaultChatNotice: ke({ screenName: z }) })), [a, z]),
                    X = r.useCallback(() => r.createElement(M.aM, null, r.createElement(l.Z, { style: [ze.container, H ? ze.navBorder : void 0] }, r.createElement(l.Z, { style: ze.videoContainer }, r.createElement(F, null, J), a && r.createElement(l.Z, { style: ze.title }, r.createElement(S.H, { broadcastId: a, canEdit: W, remoteTitle: q })), r.createElement(ie, { broadcast: t, broadcastId: a, broadcaster: o, isLive: t?.state === A.N8.Running })), j && Q)), [Q, J, t, a, o, W, j, H, q]);
                return r.createElement(
                    x.nO,
                    { namespace: Ne },
                    r.createElement(
                        D.Z,
                        null,
                        ((e) => {
                            const n = o?.name,
                                l = `twitter://broadcasts/${a || ""}`,
                                i = Fe(a || ""),
                                c = Fe(a || "", R);
                            return o ? r.createElement(r.Fragment, null, r.createElement(_.Z, { canonical: i, description: e, title: n, type: "article" }), r.createElement(y.Z, { deepLink: l }), r.createElement(k.Z, { broadcast: t, broadcaster: o, id: a || "", timecode: R, title: e, url: c })) : null;
                        })(q),
                        r.createElement(v.Z, { title: q, withMeta: !1 }),
                        r.createElement(h.Z, { "aria-label": Ae, fetchStatus: L, onRequestRetry: $, render: X }),
                    ),
                );
            }
            const ze = m.default.create((e) => ({ container: { display: "flex", flexDirection: "row", height: "100vh", overflow: "hidden" }, chat: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, height: "100vh", width: "340px" }, labelOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12 }, navBorder: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, title: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space12, justifyContent: "space-between", paddingHorizontal: e.spaces.space12, paddingTop: e.spaces.space12 }, offlineContainer: { aspectRatio: Ze, backgroundColor: e.colors.gray0, flex: 1, justifyContent: "center", alignItems: "center" }, videoContainer: { flex: 1, WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", overflow: "auto" } })),
                Re = De((0, I.Z)(Be));
        },
        978053: (e, t, a) => {
            a.d(t, { default: () => g });
            var r = a(111677),
                n = a.n(r);
            const l = n().e3098e07,
                o = n().fea16a51,
                i = n().a4f2d94d,
                c = n().hf9bc787,
                s = n().efcd5885,
                d = n().c37228b5,
                m = 2592e3,
                u = 604800,
                h = 86400,
                p = 3600,
                g = {
                    formatTimeSinceDate: (e, t) => {
                        const a = ((t || new Date()).getTime() - e.getTime()) / 1e3;
                        if (a >= 31104e3) {
                            const e = Math.max(1, Math.round(a / 31536e3));
                            return d({ years: e });
                        }
                        if (a >= m) {
                            const e = Math.max(1, Math.floor(a / m));
                            return s({ months: e });
                        }
                        if (a >= 561600) {
                            const e = Math.max(1, Math.round(a / u));
                            return c({ weeks: e });
                        }
                        if (a >= 84600) {
                            const e = Math.max(1, Math.round(a / h));
                            return i({ days: e });
                        }
                        if (a >= 3570) {
                            const e = Math.max(1, Math.round(a / p));
                            return o({ hours: e });
                        }
                        {
                            const e = Math.max(1, Math.round(a / 60));
                            return l({ minutes: e });
                        }
                    },
                    formatWeekRange: (e) => {
                        const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
                            a = t.getUTCDay(),
                            r = new Date(t);
                        r.setUTCDate(r.getUTCDate() - a);
                        const n = new Date(r);
                        n.setUTCDate(n.getUTCDate() + 6);
                        const l = new Date(Date.UTC(r.getUTCFullYear(), 0, 4)),
                            o = Math.floor((r.getTime() - l.getTime()) / 6048e5 + 1),
                            i = new Date(),
                            c = n > i ? i : n,
                            s = `${r.toLocaleString("en-US", { month: "short", day: "numeric" })} - ${c.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                        return [r.getUTCFullYear(), o, s];
                    },
                };
        },
        879113: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                n = a(476984),
                l = a.n(n),
                o = a(143778),
                i = a(750410),
                c = a(682830);
            const s = "failed",
                d = "loaded",
                m = "loading",
                u = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        a = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !a) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: a, fetchStatus: n, icon: l, loadingMessage: o, onRequestRetry: d, render: h, renderFailure: p, retryMessage: g, retryable: b } = this.props;
                    switch (n) {
                        case s:
                            return b ? r.createElement(i.Z, { icon: l, onRequestRetry: d, retryMessage: g }) : a ? r.createElement(c.m, { failureMessage: a }) : p();
                        case m:
                            return r.createElement(c.J, { "aria-label": e, color: t, loadingMessage: o });
                        case u:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        652255: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { clipRule: "evenodd", d: "M11.999 1C18.075 1 23 5.925 23 12s-4.925 11-11.001 11C5.999 23 1.12 18.198 1 12.228v-.456C1.121 5.802 6 1 11.999 1zm5.887 7.54H9.86l-3.75 6.92h8.027l3.748-6.92z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        502940: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.985 8.264c.215.227.573.227.775 0l1.077-1.181c.228-.227.215-.636-.026-.881-.846-.778-1.83-1.37-2.894-1.745l.34-1.726c.073-.377-.194-.731-.551-.731H12.62c-.13.001-.256.05-.356.138-.1.087-.17.209-.195.343l-.301 1.536c-2.774.15-5.125 1.635-5.125 4.678 0 2.635 1.942 3.766 3.996 4.543 1.942.781 2.972 1.072 2.972 2.171 0 1.131-1.025 1.794-2.541 1.794-1.378 0-2.825-.486-3.945-1.671-.052-.055-.114-.099-.182-.129-.068-.03-.14-.045-.214-.045-.074 0-.147.016-.215.045-.068.03-.13.074-.181.129L5.17 16.758c-.11.116-.171.273-.171.436 0 .164.061.32.17.436.905.94 2.05 1.622 3.357 1.999l-.32 1.621c-.072.378.19.727.548.732l2.088.018c.132 0 .26-.047.362-.135.102-.088.172-.21.198-.346l.302-1.54c3.337-.237 5.37-2.176 5.37-5.006 0-2.607-2.025-3.707-4.48-4.601-1.404-.55-2.618-.927-2.618-2.058 0-1.1 1.133-1.535 2.27-1.535 1.447 0 2.838.631 3.746 1.494l-.008-.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        790093: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.5 3h-15C3.119 3 2 4.119 2 5.5v11C2 17.881 3.119 19 4.5 19h4.15l3.34 2.793L15.37 19h4.13c1.381 0 2.5-1.119 2.5-2.5v-11C22 4.119 20.881 3 19.5 3zM8 12.25c-.69 0-1.25-.56-1.25-1.25S7.31 9.75 8 9.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm4 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        933340: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)(
                    "svg",
                    {
                        ...e,
                        role: e["aria-label"] ? e.role || "img" : void 0,
                        "aria-hidden": void 0 === e["aria-label"],
                        style: [o.Z.root, e.style],
                        viewBox: "0 0 24 24",
                        children: r.createElement(
                            "g",
                            null,
                            r.createElement("path", {
                                clipRule: "evenodd",
                                d: "M12.026 9.017c.772 0 1.42-.352 1.603-1.005.024-.09.036-.181.036-.275l.017-2.353v-.03l.002-.03c0-.904-.73-1.324-1.645-1.324-.91 0-1.65.488-1.657 1.384l-.002 2.372c-.001.093.008.185.027.275.158.68.822.986 1.619.986zm-4.248-.138c.034.303 0 .553-.264.824-.6.61-1.657.613-2.16.306-.464-.281-3.523-2.542-4.02-2.911l-.13-.13c-.148-.203-.405-.812.067-1.38.412-.496 1.386-.619 1.99-.335.03.014.06.028.092.041.097.043.194.086.28.15l3.618 2.623c.257.225.49.48.527.812zm14.95-3.197c-.412-.498-1.387-.62-1.99-.337-.031.015-.063.03-.095.043-.096.043-.192.086-.278.148L16.748 8.16c-.258.225-.491.48-.528.812-.033.303 0 .553.265.823.599.61 1.656.614 2.16.307.45-.273 3.346-2.412 3.971-2.874l.05-.037.13-.13c.148-.203.404-.812-.067-1.38zm-5.543 12.314h2.127v-.001h2.151c.048 0 .09.001.09-.076.005-.386-.01-.769-.113-1.142-.29-1.052-.923-1.79-1.991-2.093-.863-.246-1.734-.225-2.59.05-.632.204-1.133.594-1.49 1.156-.466.735-.575 1.544-.425 2.386.198 1.103.856 1.836 1.896 2.23.53.202 1.085.252 1.648.242.326-.006.647-.034.963-.113.97-.243 1.663-.798 1.99-1.767.03-.085.024-.115-.078-.115-.621.002-1.242.002-1.863 0-.073 0-.114.026-.156.082-.145.194-.33.336-.565.406-.325.098-.648.078-.967-.02-.369-.114-.59-.369-.689-.737-.023-.086-.033-.174-.044-.263l-.01-.09c-.017-.123-.006-.135.116-.135zm2.268-1.169h-1.418l-.824.001c-.069 0-.09-.01-.072-.088.117-.538.533-.89 1.083-.91.301-.011.59.017.847.197.256.181.385.441.464.734.019.07-.024.068-.064.066h-.016zM5.479 15.41v-.172c-.001-.151-.002-.293.003-.433.002-.085-.019-.114-.11-.114-.645.003-1.29.003-1.936 0-.084 0-.114.017-.114.109.002 1.873.002 3.745 0 5.618 0 .087.021.112.11.112.64-.005 1.277-.005 1.916 0 .105.001.134-.022.134-.132-.004-1.023-.003-2.046.005-3.069.001-.235.03-.473.162-.68.22-.344.635-.502 1.054-.398.355.09.572.316.643.678.038.194.044.391.044.588v.753l-.001 2.147c0 .085.018.113.11.113.648-.002 1.297-.002 1.946 0 .087.001.105-.027.105-.108-.002-.779-.003-1.558-.002-2.338v-.18c-.002-.208-.004-.416.02-.622.035-.315.116-.605.36-.833.395-.37 1.284-.366 1.469.417.05.224.074.451.072.68.002.957.002 1.912-.002 2.868 0 .094.025.117.118.117.638-.005 1.277-.005 1.915 0 .1 0 .13-.024.13-.127-.003-.662-.003-1.323-.003-1.984l-.001-1.656c0-.24-.019-.478-.059-.715-.063-.354-.213-.665-.48-.907-.531-.48-1.171-.614-1.859-.53-.694.086-1.26.41-1.655 1-.043.065-.062.053-.101-.002-.231-.34-.514-.614-.895-.784-.267-.116-.546-.186-.836-.208-.617-.054-1.199.048-1.732.377-.185.115-.349.258-.53.415zm6.352-5.619c2.118 0 3.74.384 4.968.995v.001c.955.474 1.67 1.084 2.191 1.759l-14.285.001.005-.007h-.018c1.21-1.628 3.59-2.749 7.139-2.749z",
                                fillRule: "evenodd",
                            }),
                        ),
                    },
                    { writingDirection: t },
                );
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        321264: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { clipRule: "evenodd", d: "M6 3H2v18h4V3zm9 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        208340: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { clipRule: "evenodd", d: "M19.595 7.664c.205.138.396.288.553.467.665.758.864 1.795.716 3.029-.017.11-.035.22-.057.33-.717 3.681-3.17 4.955-6.304 4.955h-.484c-.383 0-.709.278-.768.656l-.68 4.242c-.06.378-.386.657-.77.657H8.997c-.259 0-.505-.231-.463-.516.026-.172.29-1.838.557-3.524l.033-.21.55-3.466c.068-.433.437-.751.875-.751h.031l.59.002h.11l.633.002h.034c5.64 0 7.144-3.434 7.649-5.873zM13.26 2c2.142 0 3.8.466 4.742 1.508.642.71 1.014 1.64.916 2.971-.063-.024-.124-.05-.19-.07-.064-.022-.13-.043-.197-.062-.133-.04-.272-.075-.413-.106-.14-.032-.286-.059-.434-.083-.504-.081-1.067-.122-1.673-.122h-4.873c-.179 0-.351.039-.513.116-.352.17-.599.5-.66.886L7.943 19.781h-3.41c-.327 0-.577-.293-.526-.617L6.595 2.751c.068-.433.44-.751.878-.751h5.788zm2.75 4.855c.564 0 1.083.037 1.544.112.132.02.26.045.387.073.123.028.243.058.36.093.058.016.115.034.17.052.115.039.225.08.331.126-.074.382-.18.791-.324 1.233-.65 1.998-1.949 3.255-3.88 3.81-.763.218-1.627.327-2.595.327H10.18c-.1 0-.193.01-.28.026l.818-5.196c.04-.26.207-.473.432-.58.102-.05.216-.076.336-.076h4.525z", fillRule: "evenodd" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        98440: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
        707305: (e, t, a) => {
            a.r(t), a.d(t, { default: () => c });
            var r = a(202784),
                n = a(890601),
                l = a(783427),
                o = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.1 4c.62 1.02.9 2.072.9 3.4 0 4.235-3.629 9.737-6.574 13.6H6.698L4 4.927l5.89-.557 1.427 11.437c1.333-2.163 2.978-5.563 2.978-7.88 0-1.27-.218-2.134-.56-2.845L19.1 4z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const c = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Live.74b124da.js.map
