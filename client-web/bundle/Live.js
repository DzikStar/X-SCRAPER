"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Live", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, a) => {
            a.d(t, { Z: () => s });
            var r = a(202784),
                n = a(99107),
                o = a(272175),
                l = a(111677);
            const i = a.n(l)().c39b0e24,
                s = ({ deepLink: e }) => {
                    const t = i;
                    return e ? r.createElement(o.ql, null, r.createElement("meta", { content: e, property: "al:ios:url" }), r.createElement("meta", { content: n.AF, property: "al:ios:app_store_id" }), r.createElement("meta", { content: t, property: "al:ios:app_name" }), r.createElement("meta", { content: e, property: "al:android:url" }), r.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), r.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                n = a(272175);
            const o = (e) => {
                const { canonical: t, description: a = "", image: o, imageAlt: l, imageH: i, imageType: s, imageW: c, title: d, ttl: m, type: u } = e;
                return r.createElement(n.ql, null, u ? r.createElement("meta", { content: u, property: "og:type" }) : null, t ? r.createElement("meta", { content: t, property: "og:url" }) : null, d ? r.createElement("meta", { content: d, property: "og:title" }) : null, r.createElement("meta", { content: a, property: "og:description" }), o ? r.createElement("meta", { content: o, property: "og:image" }) : null, s ? r.createElement("meta", { content: s, property: "og:image:type" }) : null, c ? r.createElement("meta", { content: c, property: "og:image:width" }) : null, i ? r.createElement("meta", { content: i, property: "og:image:height" }) : null, l ? r.createElement("meta", { content: l, property: "og:image:alt" }) : null, m ? r.createElement("meta", { content: m, property: "og:ttl" }) : null);
            };
        },
        293988: (e, t, a) => {
            a.d(t, { Z: () => v });
            var r = a(202784),
                n = a(154003),
                o = a(111677),
                l = a.n(o),
                i = a(74514),
                s = a(405303),
                c = a(684511),
                d = a(860174),
                m = a(71620),
                u = a(668214),
                h = a(257166),
                p = a(919022);
            const b = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                g = (0, u.Z)()
                    .propsFromState(() => ({ shouldPromptPush: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                f = l().bdba3e1a,
                _ = l().c4da7d28,
                w = l().j87c21f4,
                y = l().iebc30ca,
                E = l().dc740eb2;
            class D extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": _, hoverLabel: { label: y }, icon: r.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": f, hoverLabel: { label: w }, icon: r.createElement(s.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(c.Z, { fullScreen: !0, message: E }) : null, this._renderButton());
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
            const v = g(D);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(500002),
                o = a(668214),
                l = a(997174),
                i = a(118823);
            const s = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends r.Component {
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
                            location: { pathname: o, search: l },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (s = !0));
                    const c = n || i;
                    ((c && n !== i) || (!c && a !== o) || r !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: a, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), a(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(s(c));
        },
        241304: (e, t, a) => {
            a.d(t, { Z: () => S });
            var r = a(202784),
                n = a(576648),
                o = a(325686),
                l = a(154003),
                i = a(138099),
                s = a(731708),
                c = a(392237),
                d = a(111677),
                m = a.n(d),
                u = a(652255),
                h = a(376180),
                p = a(502940),
                b = a(70962),
                g = a(933340),
                f = a(321264),
                _ = a(208340),
                w = a(707305),
                y = a(748138),
                E = a(837020),
                D = a(125363),
                v = a(601576),
                Z = a(919022);
            const M = m().ia5e7488,
                P = { label: M },
                T = m().j33d8902,
                C = { label: T },
                x = m().a8ab3d08,
                I = m().d740d2d9,
                k = { bandcamp_handle: { icon: r.createElement(u.default, null), label: m().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: r.createElement(h.default, null), label: m().d876e67e }, cash_app_handle: { icon: r.createElement(p.default, null), label: m().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: r.createElement(b.default, null), label: m().a32a7c06 }, gofundme_handle: { icon: r.createElement(g.default, null), label: m().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: r.createElement(f.default, null), label: m().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: r.createElement(_.default, null), label: m().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: r.createElement(w.default, null), label: m().h1198dcc, url: "https://venmo.com/" } };
            function S({ style: e, userId: t }) {
                const a = (0, D.I0)(),
                    [c, d] = r.useState(!1),
                    m = (0, D.v9)((e) => Z.ZP.select(e, t));
                if (!m) return null;
                const { tipjar_settings: u } = m;
                if (!u) return null;
                const { is_enabled: h, ...p } = u;
                if (!1 === h || !Object.keys(p).length) return null;
                function b() {
                    d(!1);
                }
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(l.ZP, {
                        "aria-label": T,
                        hoverLabel: C,
                        icon: r.createElement(y.default, null),
                        onPress: function () {
                            d((e) => !e);
                        },
                        style: e,
                    }),
                    c
                        ? r.createElement(
                              i.Z,
                              { onMaskClick: b, style: A.sheet, type: "bottom", withMask: !0 },
                              r.createElement(l.ZP, { "aria-label": M, hoverLabel: P, icon: r.createElement(E.default, null), onPress: b, style: A.close, type: "primaryText" }),
                              r.createElement(o.Z, { style: A.header }, r.createElement(s.ZP, { weight: "bold" }, x), r.createElement(s.ZP, null, `@${m.screen_name}`)),
                              Object.entries(p)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const o = k[e];
                                      if (o) {
                                          const l = o.url
                                                  ? void 0
                                                  : function () {
                                                        n.Z.setString(String(t)), a((0, v.fz)({ text: I({ service: o.label }) }));
                                                    },
                                              i = o.url ? `${o.url}${String(t)}` : void 0;
                                          return r.createElement(s.ZP, { color: "text", key: e, link: i, onPress: l, style: A.service, withInteractiveStyling: !1 }, o.icon, o.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const A = c.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
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
            a.d(t, { Z: () => o });
            var r = a(615656),
                n = a(51525);
            const o = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        10195: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                n = a(272175),
                o = a(276563),
                l = a(386592);
            const i = (e) =>
                    []
                        .concat(
                            (({ id: e, timecode: t, title: a, url: r }) => [
                                { name: "twitter:card", content: o.default.CardNames.BROADCAST },
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
                                          { name: "twitter:string:broadcast_state", content: l.rZ[e.state ?? l.N8.NotStarted] },
                                      ]
                                    : [])(e),
                        ),
                s = (e) => (void 0 !== e.content ? r.createElement("meta", e) : null),
                c = (e) => r.createElement(n.ql, null, ...((e) => i(e).map(s))(e));
        },
        679180: (e, t, a) => {
            a.d(t, { H: () => g });
            var r = a(202784),
                n = a(325686),
                o = a(154003),
                l = a(371344),
                i = a(451051),
                s = a(392237),
                c = a(111677),
                d = a.n(c),
                m = a(885724),
                u = a(688356),
                h = a(741810),
                p = a(782642);
            const b = { cancel: d().cfd2f35e, defaultTitle: d().jceadc3e, edit: d().abd845fe, save: d().i2209530, toastSuccessMessage: d().d39d46c4, toastErrorMessage: d().ef4602ec };
            function g(e) {
                const { broadcastId: t, canEdit: a, remoteTitle: s } = e,
                    [c, d] = r.useState({ currentTitle: s, draftTitle: s, isEditing: !1 }),
                    g = (0, p.p)();
                r.useEffect(() => {
                    d((e) => ({ ...e, currentTitle: s, draftTitle: s }));
                }, [s]);
                const _ = { user_mentions: (0, u.Z)(c.draftTitle) },
                    w = [0, c.draftTitle.length],
                    y = c.draftTitle === c.currentTitle || "" === c.draftTitle.trim(),
                    E = r.useCallback((e) => {
                        d((t) => ({ ...t, draftTitle: e.target.value }));
                    }, []),
                    D = r.useCallback(() => {
                        Promise.resolve(h.E.replayBroadcastEdit(t, { replay_edited_title: c.draftTitle }))
                            .then(() => {
                                d((e) => ({ ...e, currentTitle: c.draftTitle, isEditing: !1 })), g({ text: b.toastSuccessMessage });
                            })
                            .catch(() => {
                                d((e) => ({ ...e, draftTitle: e.currentTitle })), g({ text: b.toastErrorMessage });
                            });
                    }, [t, c.draftTitle, g]),
                    v = r.useCallback(() => {
                        d((e) => ({ ...e, draftTitle: e.currentTitle, isEditing: !1 }));
                    }, []),
                    Z = () => r.createElement(n.Z, { style: f.buttonContainer }, r.createElement(o.ZP, { onPress: v, size: "small", type: "primaryOutlined" }, b.cancel), r.createElement(o.ZP, { disabled: y, onPress: D, size: "small", type: "primaryFilled" }, b.save));
                return r.createElement(
                    n.Z,
                    { style: f.broadcastTitleRow },
                    c.isEditing
                        ? r.createElement(l.Z, { appTextSize: "headline1", inputStyle: f.titleInput, maxLength: 256, maxNumberOfLines: 3, multiline: !0, onChange: E, onSubmitEditing: y ? void 0 : D, placeholder: b.defaultTitle, rightContent: r.createElement(Z, null), styleType: "selection", value: c.draftTitle })
                        : r.createElement(
                              n.Z,
                              { style: f.broadcastTitleRow },
                              r.createElement(i.Z, { displayTextRange: w, entities: _, linkify: !0, size: "headline1", style: f.broadcastTitleText, text: c.currentTitle, weight: "bold" }),
                              a &&
                                  r.createElement(o.ZP, {
                                      "aria-label": b.edit,
                                      hoverLabel: { label: b.edit },
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
            const f = s.default.create((e) => ({ buttonContainer: { flexDirection: "row", gap: e.spaces.space8 }, titleInput: { fontWeight: e.fontWeights.heavy, padding: 0 }, broadcastTitleRow: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }, broadcastTitleText: { flex: 1 } }));
        },
        386592: (e, t, a) => {
            a.d(t, { N8: () => r, rZ: () => n });
            a(136728);
            const r = { Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" },
                n = { Canceled: "CANCELED", Ended: "ENDED", NotStarted: "NOT_STARTED", PrePublished: "PRE_PUBLISHED", Running: "RUNNING", TimedOut: "TIMED_OUT" };
        },
        365470: (e, t, a) => {
            a.r(t), a.d(t, { LiveScreen: () => Be, default: () => Ue });
            var r = a(202784),
                n = a(272175),
                o = a(325686),
                l = a(688715),
                i = a(537392),
                s = a(868634),
                c = a(530525),
                d = a(439592),
                m = a(392237),
                u = a(731708),
                h = a(879113),
                p = a(111677),
                b = a.n(p),
                g = a(123751),
                f = a(615656),
                _ = a(545457),
                w = a(651930),
                y = a(572067),
                E = a(443781),
                D = a(38293),
                v = a(652904),
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
                F = a(666305);
            const L = r.memo(({ ...e }) => {
                    const { ref: t, style: a } = z(),
                        n = r.useMemo(() => [a, e.style], [a, e.style]);
                    return r.createElement(o.Z, (0, N.Z)({ ref: t }, e, { style: n }));
                }),
                B = 16 / 9,
                z = () => {
                    const e = r.useRef(null),
                        [t, a] = r.useState(!0),
                        n = r.useCallback(() => {
                            const t = e.current,
                                r = t?.parentElement;
                            if (!t || !r) return;
                            const n = U(r),
                                o = U(t);
                            a(o >= n);
                        }, []);
                    r.useEffect(() => {
                        const t = e.current,
                            a = t?.parentElement;
                        if (t && a)
                            return (
                                F.Z.observe(t, n),
                                F.Z.observe(a, n),
                                () => {
                                    F.Z.unobserve(t, n), F.Z.unobserve(a, n);
                                }
                            );
                    }, [n]);
                    const o = r.useMemo(() => (t ? R.widthConstrained : R.heightConstrained), [t]);
                    return { ref: e, style: o };
                },
                U = (e) => {
                    const { height: t, width: a } = e.getBoundingClientRect();
                    return a / t;
                },
                R = m.default.create((e) => {
                    const t = { aspectRatio: B, marginHorizontal: "auto", top: 0 };
                    return { widthConstrained: { ...t, width: "100%", height: "auto" }, heightConstrained: { ...t, height: "100%", width: "auto" } };
                });
            var O = a(400752),
                H = a(107267),
                W = a(154003),
                j = a(978053),
                V = a(673510),
                $ = a(366635),
                q = a(360816),
                Y = a(293988),
                G = a(23134),
                K = a(907552),
                J = a(241304),
                Q = a(125363),
                X = a(427478),
                ee = a(823180),
                te = a(449998);
            const ae = b().jade381b,
                re = b().e44095a5,
                ne = b().j83f29dd,
                oe = { section: "header", component: "user_actions" },
                le = b().daca8a2c,
                ie = r.memo(({ broadcast: e, broadcastId: t, broadcaster: a, isLive: n }) => {
                    const { featureSwitches: i, viewerUserId: s } = (0, E.QZ)(),
                        c = (0, H.useHistory)(),
                        d = (0, Q.I0)(),
                        m = (0, O.b9)(te.Tc),
                        h = r.useCallback(() => {
                            t && (m(t), d(X.bi(ee.N.EXPANDED)), c.goBack());
                        }, [t, d, c, m]),
                        p = r.useCallback(() => r.createElement(W.ZP, { "aria-label": le, hoverLabel: { label: le }, icon: r.createElement(q.default, null), onPress: h, type: "primaryOutlined" }), [h]),
                        b = r.useCallback((e) => {
                            const t = new Date(),
                                a = new Date(e);
                            return t.getTime() - a.getTime() > 2592e6 ? ae(a) : j.default.formatTimeSinceDate(a);
                        }, []),
                        g = r.useMemo(() => {
                            const t = e?.end_time ?? e?.timedout_time ?? e?.start_time;
                            if (!t) return null;
                            const a = b(t);
                            return r.createElement(u.ZP, { color: "gray700", size: "subtext1" }, n ? re({ timestamp: a }) : ne({ timestamp: a }));
                        }, [e, b, n]),
                        f = r.useCallback(() => (!a || s === a.id_str || a.blocked_by ? null : r.createElement(o.Z, { style: se.userActionsWrapper }, r.createElement(p, null), i.isTrue("rweb_tipjar_consumption_enabled") && r.createElement(J.Z, { userId: a.id_str }), a.following && r.createElement(Y.Z, { allowPromptForPush: !0, isFollowing: a.notifications, userId: a.id_str }), r.createElement(G.C, { isSuperFollowSubscriptionEnabled: i.isTrue("super_follow_android_web_subscription_enabled"), promotedContent: a.promoted_content, userId: a.id_str }))), [p, a, i, s]),
                        _ = r.useMemo(() => (a ? r.createElement(o.Z, { style: se.userNameWrapper }, r.createElement(V.ZP, { affiliateBadgeInfo: a.highlightedLabel, avatarUri: a.profile_image_url_https, decoration: f(), isBlueVerified: a.is_blue_verified, isProtected: a.protected, isVerified: a.verified, name: a.name, screenName: a.screen_name, style: se.userCell, translatorType: a.translator_type, userId: a.id_str, verifiedType: a.verified_type, withLink: !0 })) : a?.profile_image_url && a?.screen_name ? r.createElement(o.Z, { style: se.userNameWrapper }, r.createElement($.Z, { name: a.screen_name, profileImageUrl: a.profile_image_url })) : void 0), [f, a]);
                    return r.createElement(o.Z, { style: se.header }, _, r.createElement(o.Z, { style: se.timeAndShareWrapper }, g, t && r.createElement(K.Tz, { scribeNamespace: oe, url: (0, l.ju)(`https://x.com/i/broadcasts/${t}`) })));
                }),
                se = m.default.create((e) => ({ header: { flexDirection: "column", gap: e.spaces.space12, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, marginBottom: e.spaces.space48 }, userCell: { paddingHorizontal: 0, paddingVertical: 0, width: "100%" }, userActionsWrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userNameWrapper: { alignItems: "flex-start", flex: 1, justifyContent: "center" }, timeAndShareWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } }));
            var ce = a(71620),
                de = a(2430),
                me = a(668214),
                ue = a(689642),
                he = a(919022),
                pe = a(312771);
            const be = (0, de.cI)("t"),
                ge = (e, t) => {
                    const a = t.match.params.screenName;
                    if (a) return a;
                    const r = we(e, t);
                    return r?.user_results?.result?.core?.screen_name || "";
                },
                fe = (e, t) => {
                    const a = t.match.params.broadcastId;
                    if (a) return a;
                    const r = _e(e, t);
                    return r?.latest_broadcast?.broadcast_id;
                },
                _e = (e, t) => {
                    const a = ge(e, t);
                    if (a) return he.ZP.selectByScreenName(e, a);
                    const r = we(e, t);
                    return r?.user ? he.ZP.select(e, r.user) : void 0;
                },
                we = (e, t) => {
                    const a = fe(e, t);
                    return a ? ue.Z.select(e, a) : void 0;
                },
                ye = (e, t) => he.ZP.selectViewerUser(e),
                Ee = (e, t) => {
                    const a = ge(e, t);
                    return ue.Z.selectLatestBroadcastFetched(e, a);
                },
                De = (e, t) => {
                    const a = we(e, t),
                        r = Ee(e, t),
                        n = fe(e, t);
                    return a || (!n && r) ? pe.ZP.LOADED : pe.ZP.LOADING;
                },
                ve = (0, me.Z)()
                    .propsFromState(() => ({ broadcast: we, broadcastId: fe, broadcaster: _e, fetchStatus: De, latestBroadcastFetched: Ee, screenName: ge, timecode: be, viewerUser: ye }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, ce.zr)("LIVE_SCREEN"), fetchBroadcast: ue.Z.fetchOneIfNeeded, fetchLatestBroadcast: ue.Z.fetchLatestBroadcast })),
                Ze = 16 / 9,
                Me = { objectFitVideo: "contain" },
                Pe = ({ windowWidth: e }) => e >= 920,
                Te = (e) => (e ? { url: e.image_url, width: e.width, height: e.height } : null),
                Ce = b().hd0bc1eb,
                xe = b().bea1f26b,
                Ie = b().jceadc3e,
                ke = b().ab3ee97f,
                Se = b().ac4c73d8,
                Ae = b().i9028824,
                Ne = { page: "broadcast" },
                Fe = { url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png", width: 1920, height: 1080 },
                Le = (e, t) => (0, l.ju)(`https://x.com/i/broadcasts/${e}${t ? `?t=${t}` : ""}`);
            function Be(e) {
                const { broadcast: t, broadcastId: a, broadcaster: l, createLocalApiErrorHandler: p, fetchBroadcast: I, fetchLatestBroadcast: N, fetchStatus: F, latestBroadcastFetched: B, screenName: z, timecode: U } = e,
                    R = r.useContext(E.rC),
                    { viewerUserId: O } = R,
                    H = l?.id_str === O,
                    W = (0, i.Zx)(Pe),
                    j = (0, C.ZP)();
                (0, _.ph)(),
                    (0, _.hB)(),
                    r.useEffect(() => {
                        z && N(z);
                    }, [N, z]);
                const V = r.useCallback(() => {
                    a && I(a).catch(p({ [f.ZP.GenericNotFound]: { customAction: T.vv } }));
                }, [a, p, I]);
                r.useEffect(() => {
                    V();
                }, [V, a]);
                const $ = r.useMemo(() => {
                        if (t && l) {
                            const { state: e, status: a } = t,
                                { name: r } = l;
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
                    }, [t, l]),
                    q = b().d980e29f,
                    Y = b().fc209bb7,
                    G = r.useCallback(() => {
                        const e = t && t.scheduled_start_time ? new Date(parseInt(t.scheduled_start_time, 10)) : void 0,
                            a = e ? q({ date: Y(e) }) : void 0;
                        return a ? r.createElement(o.Z, { style: ze.labelOverlay }, r.createElement(s.ZP, null, a)) : null;
                    }, [t, Y, q]),
                    K = r.useCallback(() => {
                        const e = t && t.pre_live_slate_url ? { url: t.pre_live_slate_url, width: 600, height: 337 } : Fe;
                        return r.createElement(o.Z, null, r.createElement(n.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: e.url, property: "og:image" }), r.createElement("meta", { content: e.width, property: "og:image:width" }), r.createElement("meta", { content: e.height, property: "og:image:height" })), r.createElement(c.Z, { "aria-label": Se, aspectMode: d.Z.exact(m.default.theme.aspectRatios.landscape), image: e, previewMode: !1 }), G());
                    }, [t, G]),
                    J = r.useMemo(() => {
                        const e = t && t.media_key,
                            i = !a && l && B,
                            s = Te(t);
                        return t && t.state === A.N8.NotStarted ? K() : i ? r.createElement(o.Z, { style: ze.offlineContainer }, r.createElement(u.ZP, { size: "title2" }, ke({ screenName: z }))) : t && l && a && s && e ? r.createElement(r.Fragment, null, r.createElement(n.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: s.url, property: "og:image" }), r.createElement("meta", { content: s.width, property: "og:image:width" }), r.createElement("meta", { content: s.height, property: "og:image:height" })), r.createElement(P.Z, { "aria-label": Se, aspectRatio: Ze, displayOptions: Me, poster: s, source: { variants: [], videoId: g.Z.forBroadcast(a), contentId: e }, videoType: "video" })) : null;
                    }, [t, a, l, B, K, z]),
                    Q = r.useMemo(() => r.createElement(o.Z, { style: ze.chat }, r.createElement(Z.Z, { broadcastId: a ?? "", defaultChatNotice: ke({ screenName: z }) })), [a, z]),
                    X = r.useCallback(() => r.createElement(M.aM, null, r.createElement(o.Z, { style: [ze.container, j ? ze.navBorder : void 0] }, r.createElement(o.Z, { style: ze.videoContainer }, r.createElement(L, null, J), a && r.createElement(o.Z, { style: ze.title }, r.createElement(S.H, { broadcastId: a, canEdit: H, remoteTitle: $ })), r.createElement(ie, { broadcast: t, broadcastId: a, broadcaster: l, isLive: t?.state === A.N8.Running })), W && Q)), [Q, J, t, a, l, H, W, j, $]);
                return r.createElement(
                    x.nO,
                    { namespace: Ne },
                    r.createElement(
                        v.Z,
                        null,
                        ((e) => {
                            const n = l?.name,
                                o = `twitter://broadcasts/${a || ""}`,
                                i = Le(a || ""),
                                s = Le(a || "", U);
                            return l ? r.createElement(r.Fragment, null, r.createElement(y.Z, { canonical: i, description: e, title: n, type: "article" }), r.createElement(w.Z, { deepLink: o }), r.createElement(k.Z, { broadcast: t, broadcaster: l, id: a || "", timecode: U, title: e, url: s })) : null;
                        })($),
                        r.createElement(D.Z, { title: $, withMeta: !1 }),
                        r.createElement(h.Z, { "aria-label": Ae, fetchStatus: F, onRequestRetry: V, render: X }),
                    ),
                );
            }
            const ze = m.default.create((e) => ({ container: { display: "flex", flexDirection: "row", height: "100vh", overflow: "hidden" }, chat: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, height: "100vh", width: "340px" }, labelOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12 }, navBorder: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, title: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space12, justifyContent: "space-between", paddingHorizontal: e.spaces.space12, paddingTop: e.spaces.space12 }, offlineContainer: { aspectRatio: Ze, backgroundColor: e.colors.gray0, flex: 1, justifyContent: "center", alignItems: "center" }, videoContainer: { flex: 1, WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", overflow: "auto" } })),
                Ue = ve((0, I.Z)(Be));
        },
        978053: (e, t, a) => {
            a.d(t, { default: () => b });
            var r = a(111677),
                n = a.n(r);
            const o = n().e3098e07,
                l = n().fea16a51,
                i = n().a4f2d94d,
                s = n().hf9bc787,
                c = n().efcd5885,
                d = n().c37228b5,
                m = 2592e3,
                u = 604800,
                h = 86400,
                p = 3600,
                b = {
                    formatTimeSinceDate: (e, t) => {
                        const a = ((t || new Date()).getTime() - e.getTime()) / 1e3;
                        if (a >= 31104e3) {
                            const e = Math.max(1, Math.round(a / 31536e3));
                            return d({ years: e });
                        }
                        if (a >= m) {
                            const e = Math.max(1, Math.floor(a / m));
                            return c({ months: e });
                        }
                        if (a >= 561600) {
                            const e = Math.max(1, Math.round(a / u));
                            return s({ weeks: e });
                        }
                        if (a >= 84600) {
                            const e = Math.max(1, Math.round(a / h));
                            return i({ days: e });
                        }
                        if (a >= 3570) {
                            const e = Math.max(1, Math.round(a / p));
                            return l({ hours: e });
                        }
                        {
                            const e = Math.max(1, Math.round(a / 60));
                            return o({ minutes: e });
                        }
                    },
                    formatWeekRange: (e) => {
                        const t = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate())),
                            a = t.getUTCDay(),
                            r = new Date(t);
                        r.setUTCDate(r.getUTCDate() - a);
                        const n = new Date(r);
                        n.setUTCDate(n.getUTCDate() + 6);
                        const o = new Date(Date.UTC(r.getUTCFullYear(), 0, 4)),
                            l = Math.floor((r.getTime() - o.getTime()) / 6048e5 + 1),
                            i = new Date(),
                            s = n > i ? i : n,
                            c = `${r.toLocaleString("en-US", { month: "short", day: "numeric" })} - ${s.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                        return [r.getUTCFullYear(), l, c];
                    },
                };
        },
        879113: (e, t, a) => {
            a.d(t, { Z: () => h });
            var r = a(202784),
                n = a(476984),
                o = a.n(n),
                l = a(143778),
                i = a(750410),
                s = a(682830);
            const c = "failed",
                d = "loaded",
                m = "loading",
                u = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        a = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !a) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: a, fetchStatus: n, icon: o, loadingMessage: l, onRequestRetry: d, render: h, renderFailure: p, retryMessage: b, retryable: g } = this.props;
                    switch (n) {
                        case c:
                            return g ? r.createElement(i.Z, { icon: o, onRequestRetry: d, retryMessage: b }) : a ? r.createElement(s.m, { failureMessage: a }) : p();
                        case m:
                            return r.createElement(s.J, { "aria-label": e, color: t, loadingMessage: l });
                        case u:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        502940: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.985 8.264c.215.227.573.227.775 0l1.077-1.181c.228-.227.215-.636-.026-.881-.846-.778-1.83-1.37-2.894-1.745l.34-1.726c.073-.377-.194-.731-.551-.731H12.62c-.13.001-.256.05-.356.138-.1.087-.17.209-.195.343l-.301 1.536c-2.774.15-5.125 1.635-5.125 4.678 0 2.635 1.942 3.766 3.996 4.543 1.942.781 2.972 1.072 2.972 2.171 0 1.131-1.025 1.794-2.541 1.794-1.378 0-2.825-.486-3.945-1.671-.052-.055-.114-.099-.182-.129-.068-.03-.14-.045-.214-.045-.074 0-.147.016-.215.045-.068.03-.13.074-.181.129L5.17 16.758c-.11.116-.171.273-.171.436 0 .164.061.32.17.436.905.94 2.05 1.622 3.357 1.999l-.32 1.621c-.072.378.19.727.548.732l2.088.018c.132 0 .26-.047.362-.135.102-.088.172-.21.198-.346l.302-1.54c3.337-.237 5.37-2.176 5.37-5.006 0-2.607-2.025-3.707-4.48-4.601-1.404-.55-2.618-.927-2.618-2.058 0-1.1 1.133-1.535 2.27-1.535 1.447 0 2.838.631 3.746 1.494l-.008-.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        748138: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        74514: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 2C7.93 2 4.51 5.02 4 9.05L2.87 18H7.1c.46 2.28 2.48 4 4.9 4s4.44-1.72 4.9-4h4.24l-.64-5h-2.02l.38 3H5.13l.85-6.7C6.36 6.27 8.94 4 12 4V2zm0 18c-1.31 0-2.42-.83-2.83-2h5.66c-.41 1.17-1.52 2-2.83 2zm.3-12.29l1.41-1.42 1.76 1.76 4.29-4.72 1.48 1.34-5.7 6.28-3.24-3.24z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        452693: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
        707305: (e, t, a) => {
            a.r(t), a.d(t, { default: () => s });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.1 4c.62 1.02.9 2.072.9 3.4 0 4.235-3.629 9.737-6.574 13.6H6.698L4 4.927l5.89-.557 1.427 11.437c1.333-2.163 2.978-5.563 2.978-7.88 0-1.27-.218-2.134-.56-2.845L19.1 4z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const s = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Live.9f168cda.js.map
