"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.LiveEvent~bundle.Live", "bundle.AudioSpaceDetail"],
    {
        651930: (e, t, a) => {
            a.d(t, { Z: () => d });
            var r = a(202784),
                n = a(99107),
                o = a(272175),
                l = a(111677);
            const i = a.n(l)().c39b0e24,
                d = ({ deepLink: e }) => {
                    const t = i;
                    return e ? r.createElement(o.ql, null, r.createElement("meta", { content: e, property: "al:ios:url" }), r.createElement("meta", { content: n.AF, property: "al:ios:app_store_id" }), r.createElement("meta", { content: t, property: "al:ios:app_name" }), r.createElement("meta", { content: e, property: "al:android:url" }), r.createElement("meta", { content: "com.twitter.android", property: "al:android:package" }), r.createElement("meta", { content: t, property: "al:android:app_name" })) : null;
                };
        },
        572067: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                n = a(272175);
            const o = (e) => {
                const { canonical: t, description: a = "", image: o, imageAlt: l, imageH: i, imageType: d, imageW: s, title: c, ttl: m, type: u } = e;
                return r.createElement(n.ql, null, u ? r.createElement("meta", { content: u, property: "og:type" }) : null, t ? r.createElement("meta", { content: t, property: "og:url" }) : null, c ? r.createElement("meta", { content: c, property: "og:title" }) : null, r.createElement("meta", { content: a, property: "og:description" }), o ? r.createElement("meta", { content: o, property: "og:image" }) : null, d ? r.createElement("meta", { content: d, property: "og:image:type" }) : null, s ? r.createElement("meta", { content: s, property: "og:image:width" }) : null, i ? r.createElement("meta", { content: i, property: "og:image:height" }) : null, l ? r.createElement("meta", { content: l, property: "og:image:alt" }) : null, m ? r.createElement("meta", { content: m, property: "og:ttl" }) : null);
            };
        },
        293988: (e, t, a) => {
            a.d(t, { Z: () => v });
            var r = a(202784),
                n = a(154003),
                o = a(111677),
                l = a.n(o),
                i = a(74514),
                d = a(405303),
                s = a(684511),
                c = a(860174),
                m = a(71620),
                u = a(668214),
                h = a(257166),
                p = a(919022);
            const b = (e, t) => !(!t.allowPromptForPush || !h.selectShouldPromptBrowserPush(e)),
                f = (0, u.Z)()
                    .propsFromState(() => ({ shouldPromptPush: b }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, m.zr)("DEVICE_FOLLOW_BUTTON_CONTAINER"), updateDeviceFollowing: p.ZP.updateDeviceFollowing }))
                    .withAnalytics({ element: "mobile_notifications" }),
                g = l().bdba3e1a,
                D = l().c4da7d28,
                _ = l().j87c21f4,
                w = l().iebc30ca,
                y = l().dc740eb2;
            class E extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._renderButton = () => {
                            const { isFollowing: e, style: t } = this.props;
                            return e ? r.createElement(n.ZP, { "aria-label": D, hoverLabel: { label: w }, icon: r.createElement(i.default, null), onPress: this._handleUnfollow, style: t, type: "primaryOutlined" }) : r.createElement(n.ZP, { "aria-label": g, hoverLabel: { label: _ }, icon: r.createElement(d.default, null), onPress: this._handleFollow, style: t, type: "primaryOutlined" });
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
                    return r.createElement("div", null, this.state.showingPushPrompt ? r.createElement(s.Z, { fullScreen: !0, message: y }) : null, this._renderButton());
                }
                _updateDeviceFollowing(e) {
                    const { createLocalApiErrorHandler: t, updateDeviceFollowing: a, userId: r } = this.props;
                    return a(r, { device: e }).catch(t(c.Z));
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            const v = f(E);
        },
        652904: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(202784),
                n = a(500002),
                o = a(668214),
                l = a(997174),
                i = a(118823);
            const d = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: l.NH }))
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
                            location: { pathname: o, search: l },
                            locationKey: i,
                        } = e;
                    let d = !1;
                    t.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && t.pathname === a && ((this._isInBackground = !1), (d = !0));
                    const s = n || i;
                    ((s && n !== i) || (!s && a !== o) || r !== l || d) && this._performPageUpdates(this.props);
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
            const c = (0, n.ZP)(d(s));
        },
        241304: (e, t, a) => {
            a.d(t, { Z: () => A });
            var r = a(202784),
                n = a(576648),
                o = a(325686),
                l = a(154003),
                i = a(138099),
                d = a(731708),
                s = a(392237),
                c = a(111677),
                m = a.n(c),
                u = a(652255),
                h = a(376180),
                p = a(502940),
                b = a(70962),
                f = a(933340),
                g = a(321264),
                D = a(208340),
                _ = a(707305),
                w = a(748138),
                y = a(837020),
                E = a(125363),
                v = a(601576),
                M = a(919022);
            const P = m().ia5e7488,
                Z = { label: P },
                T = m().j33d8902,
                I = { label: T },
                C = m().a8ab3d08,
                k = m().d740d2d9,
                x = { bandcamp_handle: { icon: r.createElement(u.default, null), label: m().a7cf1e98, url: "https://bandcamp.com/" }, bitcoin_handle: { icon: r.createElement(h.default, null), label: m().d876e67e }, cash_app_handle: { icon: r.createElement(p.default, null), label: m().f85f6760, url: "https://cash.app/" }, ethereum_handle: { icon: r.createElement(b.default, null), label: m().a32a7c06 }, gofundme_handle: { icon: r.createElement(f.default, null), label: m().cc1a3bc4, url: "https://gofundme.com/f/" }, patreon_handle: { icon: r.createElement(g.default, null), label: m().d4d74bb4, url: "https://patreon.com/" }, pay_pal_handle: { icon: r.createElement(D.default, null), label: m().h14fbc52, url: "https://paypal.me/" }, venmo_handle: { icon: r.createElement(_.default, null), label: m().h1198dcc, url: "https://venmo.com/" } };
            function A({ style: e, userId: t }) {
                const a = (0, E.I0)(),
                    [s, c] = r.useState(!1),
                    m = (0, E.v9)((e) => M.ZP.select(e, t));
                if (!m) return null;
                const { tipjar_settings: u } = m;
                if (!u) return null;
                const { is_enabled: h, ...p } = u;
                if (!1 === h || !Object.keys(p).length) return null;
                function b() {
                    c(!1);
                }
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(l.ZP, {
                        "aria-label": T,
                        hoverLabel: I,
                        icon: r.createElement(w.default, null),
                        onPress: function () {
                            c((e) => !e);
                        },
                        style: e,
                    }),
                    s
                        ? r.createElement(
                              i.Z,
                              { onMaskClick: b, style: S.sheet, type: "bottom", withMask: !0 },
                              r.createElement(l.ZP, { "aria-label": P, hoverLabel: Z, icon: r.createElement(y.default, null), onPress: b, style: S.close, type: "primaryText" }),
                              r.createElement(o.Z, { style: S.header }, r.createElement(d.ZP, { weight: "bold" }, C), r.createElement(d.ZP, null, `@${m.screen_name}`)),
                              Object.entries(p)
                                  .filter(([e, t]) => t)
                                  .map(([e, t]) => {
                                      const o = x[e];
                                      if (o) {
                                          const l = o.url
                                                  ? void 0
                                                  : function () {
                                                        n.Z.setString(String(t)), a((0, v.fz)({ text: k({ service: o.label }) }));
                                                    },
                                              i = o.url ? `${o.url}${String(t)}` : void 0;
                                          return r.createElement(d.ZP, { color: "text", key: e, link: i, onPress: l, style: S.service, withInteractiveStyling: !1 }, o.icon, o.label);
                                      }
                                  }),
                          )
                        : null,
                );
            }
            const S = s.default.create((e) => ({ close: { end: e.spaces.space16, position: "absolute", top: e.spaces.space16 }, header: { alignItems: "center", justifyContent: "center", marginHorizontal: "auto" }, service: { display: "flex", cursor: "pointer", gap: e.spaces.space8, marginBottom: e.spaces.space16 }, sheet: { padding: e.spaces.space16 } }));
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
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-167f1698"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-8c4bd381"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9bd28fed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-9b130c11"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
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
        860174: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(615656),
                n = a(51525);
            const o = { [r.ZP.FollowError]: { customAction: n.w1 } };
        },
        10195: (e, t, a) => {
            a.d(t, { Z: () => s });
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
                d = (e) => (void 0 !== e.content ? r.createElement("meta", e) : null),
                s = (e) => r.createElement(n.ql, null, ...((e) => i(e).map(d))(e));
        },
        679180: (e, t, a) => {
            a.d(t, { H: () => f });
            var r = a(202784),
                n = a(325686),
                o = a(154003),
                l = a(371344),
                i = a(451051),
                d = a(392237),
                s = a(111677),
                c = a.n(s),
                m = a(885724),
                u = a(688356),
                h = a(741810),
                p = a(782642);
            const b = { cancel: c().cfd2f35e, defaultTitle: c().jceadc3e, edit: c().abd845fe, save: c().i2209530, toastSuccessMessage: c().d39d46c4, toastErrorMessage: c().ef4602ec };
            function f(e) {
                const { broadcastId: t, canEdit: a, remoteTitle: d } = e,
                    [s, c] = r.useState({ currentTitle: d, draftTitle: d, isEditing: !1 }),
                    f = (0, p.p)();
                r.useEffect(() => {
                    c((e) => ({ ...e, currentTitle: d, draftTitle: d }));
                }, [d]);
                const D = { user_mentions: (0, u.Z)(s.draftTitle) },
                    _ = [0, s.draftTitle.length],
                    w = s.draftTitle === s.currentTitle || "" === s.draftTitle.trim(),
                    y = r.useCallback((e) => {
                        c((t) => ({ ...t, draftTitle: e.target.value }));
                    }, []),
                    E = r.useCallback(() => {
                        Promise.resolve(h.E.replayBroadcastEdit(t, { replay_edited_title: s.draftTitle }))
                            .then(() => {
                                c((e) => ({ ...e, currentTitle: s.draftTitle, isEditing: !1 })), f({ text: b.toastSuccessMessage });
                            })
                            .catch(() => {
                                c((e) => ({ ...e, draftTitle: e.currentTitle })), f({ text: b.toastErrorMessage });
                            });
                    }, [t, s.draftTitle, f]),
                    v = r.useCallback(() => {
                        c((e) => ({ ...e, draftTitle: e.currentTitle, isEditing: !1 }));
                    }, []),
                    M = () => r.createElement(n.Z, { style: g.buttonContainer }, r.createElement(o.ZP, { onPress: v, size: "small", type: "primaryOutlined" }, b.cancel), r.createElement(o.ZP, { disabled: w, onPress: E, size: "small", type: "primaryFilled" }, b.save));
                return r.createElement(
                    n.Z,
                    { style: g.broadcastTitleRow },
                    s.isEditing
                        ? r.createElement(l.Z, { appTextSize: "headline1", inputStyle: g.titleInput, maxLength: 256, maxNumberOfLines: 3, multiline: !0, onChange: y, onSubmitEditing: w ? void 0 : E, placeholder: b.defaultTitle, rightContent: r.createElement(M, null), styleType: "selection", value: s.draftTitle })
                        : r.createElement(
                              n.Z,
                              { style: g.broadcastTitleRow },
                              r.createElement(i.Z, { displayTextRange: _, entities: D, linkify: !0, size: "headline1", style: g.broadcastTitleText, text: s.currentTitle, weight: "bold" }),
                              a &&
                                  r.createElement(o.ZP, {
                                      "aria-label": b.edit,
                                      hoverLabel: { label: b.edit },
                                      icon: r.createElement(m.default, null),
                                      onPress: () => {
                                          c((e) => ({ ...e, isEditing: !0 }));
                                      },
                                      size: "xSmall",
                                      type: "primaryText",
                                  }),
                          ),
                );
            }
            const g = d.default.create((e) => ({ buttonContainer: { flexDirection: "row", gap: e.spaces.space8 }, titleInput: { fontWeight: e.fontWeights.heavy, padding: 0 }, broadcastTitleRow: { alignItems: "center", display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%" }, broadcastTitleText: { flex: 1 } }));
        },
        386592: (e, t, a) => {
            a.d(t, { N8: () => r, rZ: () => n });
            a(136728);
            const r = { Canceled: "Canceled", Ended: "Ended", NotStarted: "NotStarted", PrePublished: "PrePublished", Running: "Running", TimedOut: "TimedOut" },
                n = { Canceled: "CANCELED", Ended: "ENDED", NotStarted: "NOT_STARTED", PrePublished: "PRE_PUBLISHED", Running: "RUNNING", TimedOut: "TIMED_OUT" };
        },
        365470: (e, t, a) => {
            a.r(t), a.d(t, { LiveScreen: () => Be, default: () => Oe });
            var r = a(202784),
                n = a(272175),
                o = a(325686),
                l = a(688715),
                i = a(537392),
                d = a(868634),
                s = a(530525),
                c = a(439592),
                m = a(392237),
                u = a(731708),
                h = a(879113),
                p = a(111677),
                b = a.n(p),
                f = a(123751),
                g = a(615656),
                D = a(545457),
                _ = a(651930),
                w = a(572067),
                y = a(443781),
                E = a(38293),
                v = a(652904),
                M = a(382285),
                P = a(181142),
                Z = a(310453),
                T = a(51525),
                I = a(655352),
                C = a(293115),
                k = a(503229),
                x = a(10195),
                A = a(679180),
                S = a(386592),
                N = a(807896),
                L = a(666305);
            const F = r.memo(({ ...e }) => {
                    const { ref: t, style: a } = U(),
                        n = r.useMemo(() => [a, e.style], [a, e.style]);
                    return r.createElement(o.Z, (0, N.Z)({ ref: t }, e, { style: n }));
                }),
                B = 16 / 9,
                U = () => {
                    const e = r.useRef(null),
                        [t, a] = r.useState(!0),
                        n = r.useCallback(() => {
                            const t = e.current,
                                r = t?.parentElement;
                            if (!t || !r) return;
                            const n = O(r),
                                o = O(t);
                            a(o >= n);
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
                    const o = r.useMemo(() => (t ? R.widthConstrained : R.heightConstrained), [t]);
                    return { ref: e, style: o };
                },
                O = (e) => {
                    const { height: t, width: a } = e.getBoundingClientRect();
                    return a / t;
                },
                R = m.default.create((e) => {
                    const t = { aspectRatio: B, marginHorizontal: "auto", top: 0 };
                    return { widthConstrained: { ...t, width: "100%", height: "auto" }, heightConstrained: { ...t, height: "100%", width: "auto" } };
                });
            var W = a(400752),
                z = a(107267),
                j = a(154003),
                H = a(978053),
                $ = a(673510),
                V = a(366635),
                q = a(360816),
                Y = a(293988),
                G = a(23134),
                K = a(907552),
                Q = a(241304),
                X = a(125363),
                J = a(427478),
                ee = a(823180),
                te = a(449998);
            const ae = b().jade381b,
                re = b().e44095a5,
                ne = b().j83f29dd,
                oe = { section: "header", component: "user_actions" },
                le = b().daca8a2c,
                ie = r.memo(({ broadcast: e, broadcastId: t, broadcaster: a, isLive: n }) => {
                    const { featureSwitches: i, viewerUserId: d } = (0, y.QZ)(),
                        s = (0, z.useHistory)(),
                        c = (0, X.I0)(),
                        m = (0, W.b9)(te.Tc),
                        h = r.useCallback(() => {
                            t && (m(t), c(J.bi(ee.N.EXPANDED)), s.goBack());
                        }, [t, c, s, m]),
                        p = r.useCallback(() => r.createElement(j.ZP, { "aria-label": le, hoverLabel: { label: le }, icon: r.createElement(q.default, null), onPress: h, type: "primaryOutlined" }), [h]),
                        b = r.useCallback((e) => {
                            const t = new Date(),
                                a = new Date(e);
                            return t.getTime() - a.getTime() > 2592e6 ? ae(a) : H.default.formatTimeSinceDate(a);
                        }, []),
                        f = r.useMemo(() => {
                            const t = e?.end_time ?? e?.timedout_time ?? e?.start_time;
                            if (!t) return null;
                            const a = b(t);
                            return r.createElement(u.ZP, { color: "gray700", size: "subtext1" }, n ? re({ timestamp: a }) : ne({ timestamp: a }));
                        }, [e, b, n]),
                        g = r.useCallback(() => (!a || d === a.id_str || a.blocked_by ? null : r.createElement(o.Z, { style: de.userActionsWrapper }, r.createElement(p, null), i.isTrue("rweb_tipjar_consumption_enabled") && r.createElement(Q.Z, { userId: a.id_str }), a.following && r.createElement(Y.Z, { allowPromptForPush: !0, isFollowing: a.notifications, userId: a.id_str }), r.createElement(G.C, { isSuperFollowSubscriptionEnabled: i.isTrue("super_follow_android_web_subscription_enabled"), promotedContent: a.promoted_content, userId: a.id_str }))), [p, a, i, d]),
                        D = r.useMemo(() => (a ? r.createElement(o.Z, { style: de.userNameWrapper }, r.createElement($.ZP, { affiliateBadgeInfo: a.highlightedLabel, avatarUri: a.profile_image_url_https, decoration: g(), isBlueVerified: a.is_blue_verified, isProtected: a.protected, isVerified: a.verified, name: a.name, screenName: a.screen_name, style: de.userCell, translatorType: a.translator_type, userId: a.id_str, verifiedType: a.verified_type, withLink: !0 })) : a?.profile_image_url && a?.screen_name ? r.createElement(o.Z, { style: de.userNameWrapper }, r.createElement(V.Z, { name: a.screen_name, profileImageUrl: a.profile_image_url })) : void 0), [g, a]);
                    return r.createElement(o.Z, { style: de.header }, D, r.createElement(o.Z, { style: de.timeAndShareWrapper }, f, t && r.createElement(K.Tz, { scribeNamespace: oe, url: (0, l.ju)(`https://x.com/i/broadcasts/${t}`) })));
                }),
                de = m.default.create((e) => ({ header: { flexDirection: "column", gap: e.spaces.space12, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, marginBottom: e.spaces.space48 }, userCell: { paddingHorizontal: 0, paddingVertical: 0, width: "100%" }, userActionsWrapper: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space8 }, userNameWrapper: { alignItems: "flex-start", flex: 1, justifyContent: "center" }, timeAndShareWrapper: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" } }));
            var se = a(71620),
                ce = a(2430),
                me = a(668214),
                ue = a(689642),
                he = a(919022),
                pe = a(312771);
            const be = (0, ce.cI)("t"),
                fe = (e, t) => {
                    const a = t.match.params.screenName;
                    if (a) return a;
                    const r = _e(e, t);
                    return r?.user_results?.result?.core?.screen_name || "";
                },
                ge = (e, t) => {
                    const a = t.match.params.broadcastId;
                    if (a) return a;
                    const r = De(e, t);
                    return r?.latest_broadcast?.broadcast_id;
                },
                De = (e, t) => {
                    const a = fe(e, t);
                    if (a) return he.ZP.selectByScreenName(e, a);
                    const r = _e(e, t);
                    return r?.user ? he.ZP.select(e, r.user) : void 0;
                },
                _e = (e, t) => {
                    const a = ge(e, t);
                    return a ? ue.Z.select(e, a) : void 0;
                },
                we = (e, t) => he.ZP.selectViewerUser(e),
                ye = (e, t) => {
                    const a = fe(e, t);
                    return ue.Z.selectLatestBroadcastFetched(e, a);
                },
                Ee = (e, t) => {
                    const a = _e(e, t),
                        r = ye(e, t),
                        n = ge(e, t);
                    return a || (!n && r) ? pe.ZP.LOADED : pe.ZP.LOADING;
                },
                ve = (0, me.Z)()
                    .propsFromState(() => ({ broadcast: _e, broadcastId: ge, broadcaster: De, fetchStatus: Ee, latestBroadcastFetched: ye, screenName: fe, timecode: be, viewerUser: we }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, se.zr)("LIVE_SCREEN"), fetchBroadcast: ue.Z.fetchOneIfNeeded, fetchLatestBroadcast: ue.Z.fetchLatestBroadcast })),
                Me = 16 / 9,
                Pe = { objectFitVideo: "contain" },
                Ze = ({ windowWidth: e }) => e >= 920,
                Te = (e) => (e ? { url: e.image_url, width: e.width, height: e.height } : null),
                Ie = b().hd0bc1eb,
                Ce = b().bea1f26b,
                ke = b().jceadc3e,
                xe = b().ab3ee97f,
                Ae = b().ac4c73d8,
                Se = b().i9028824,
                Ne = { page: "broadcast" },
                Le = { url: "https://pbs.twimg.com/lex/placeholder_live_nomargin.png", width: 1920, height: 1080 },
                Fe = (e, t) => (0, l.ju)(`https://x.com/i/broadcasts/${e}${t ? `?t=${t}` : ""}`);
            function Be(e) {
                const { broadcast: t, broadcastId: a, broadcaster: l, createLocalApiErrorHandler: p, fetchBroadcast: k, fetchLatestBroadcast: N, fetchStatus: L, latestBroadcastFetched: B, screenName: U, timecode: O } = e,
                    R = r.useContext(y.rC),
                    { viewerUserId: W } = R,
                    z = l?.id_str === W,
                    j = (0, i.Zx)(Ze),
                    H = (0, I.ZP)();
                (0, D.ph)(),
                    (0, D.hB)(),
                    r.useEffect(() => {
                        U && N(U);
                    }, [N, U]);
                const $ = r.useCallback(() => {
                    a && k(a).catch(p({ [g.ZP.GenericNotFound]: { customAction: T.vv } }));
                }, [a, p, k]);
                r.useEffect(() => {
                    $();
                }, [$, a]);
                const V = r.useMemo(() => {
                        if (t && l) {
                            const { state: e, status: a } = t,
                                { name: r } = l;
                            if (a) return a;
                            if (r)
                                switch (e) {
                                    case S.N8.Running:
                                        return Ie({ name: r });
                                    case S.N8.Ended:
                                    case S.N8.TimedOut:
                                        return Ce({ name: r });
                                    case S.N8.NotStarted:
                                    default:
                                        return ke;
                                }
                        }
                        return ke;
                    }, [t, l]),
                    q = b().d980e29f,
                    Y = b().fc209bb7,
                    G = r.useCallback(() => {
                        const e = t && t.scheduled_start_time ? new Date(parseInt(t.scheduled_start_time, 10)) : void 0,
                            a = e ? q({ date: Y(e) }) : void 0;
                        return a ? r.createElement(o.Z, { style: Ue.labelOverlay }, r.createElement(d.ZP, null, a)) : null;
                    }, [t, Y, q]),
                    K = r.useCallback(() => {
                        const e = t && t.pre_live_slate_url ? { url: t.pre_live_slate_url, width: 600, height: 337 } : Le;
                        return r.createElement(o.Z, null, r.createElement(n.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: e.url, property: "og:image" }), r.createElement("meta", { content: e.width, property: "og:image:width" }), r.createElement("meta", { content: e.height, property: "og:image:height" })), r.createElement(s.Z, { "aria-label": Ae, aspectMode: c.Z.exact(m.default.theme.aspectRatios.landscape), image: e, previewMode: !1 }), G());
                    }, [t, G]),
                    Q = r.useMemo(() => {
                        const e = t && t.media_key,
                            i = !a && l && B,
                            d = Te(t);
                        return t && t.state === S.N8.NotStarted ? K() : i ? r.createElement(o.Z, { style: Ue.offlineContainer }, r.createElement(u.ZP, { size: "title2" }, xe({ screenName: U }))) : t && l && a && d && e ? r.createElement(r.Fragment, null, r.createElement(n.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: d.url, property: "og:image" }), r.createElement("meta", { content: d.width, property: "og:image:width" }), r.createElement("meta", { content: d.height, property: "og:image:height" })), r.createElement(Z.Z, { "aria-label": Ae, aspectRatio: Me, displayOptions: Pe, poster: d, source: { variants: [], videoId: f.Z.forBroadcast(a), contentId: e }, videoType: "video" })) : null;
                    }, [t, a, l, B, K, U]),
                    X = r.useMemo(() => r.createElement(o.Z, { style: Ue.chat }, r.createElement(M.Z, { broadcastId: a ?? "", defaultChatNotice: xe({ screenName: U }) })), [a, U]),
                    J = r.useCallback(() => r.createElement(P.aM, null, r.createElement(o.Z, { style: [Ue.container, H ? Ue.navBorder : void 0] }, r.createElement(o.Z, { style: Ue.videoContainer }, r.createElement(F, null, Q), a && r.createElement(o.Z, { style: Ue.title }, r.createElement(A.H, { broadcastId: a, canEdit: z, remoteTitle: V })), r.createElement(ie, { broadcast: t, broadcastId: a, broadcaster: l, isLive: t?.state === S.N8.Running })), j && X)), [X, Q, t, a, l, z, j, H, V]);
                return r.createElement(
                    C.nO,
                    { namespace: Ne },
                    r.createElement(
                        v.Z,
                        null,
                        ((e) => {
                            const n = l?.name,
                                o = `twitter://broadcasts/${a || ""}`,
                                i = Fe(a || ""),
                                d = Fe(a || "", O);
                            return l ? r.createElement(r.Fragment, null, r.createElement(w.Z, { canonical: i, description: e, title: n, type: "article" }), r.createElement(_.Z, { deepLink: o }), r.createElement(x.Z, { broadcast: t, broadcaster: l, id: a || "", timecode: O, title: e, url: d })) : null;
                        })(V),
                        r.createElement(E.Z, { title: V, withMeta: !1 }),
                        r.createElement(h.Z, { "aria-label": Se, fetchStatus: L, onRequestRetry: $, render: J }),
                    ),
                );
            }
            const Ue = m.default.create((e) => ({ container: { display: "flex", flexDirection: "row", height: "100vh", overflow: "hidden" }, chat: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor, height: "100vh", width: "340px" }, labelOverlay: { position: "absolute", bottom: e.spaces.space12, start: e.spaces.space12 }, navBorder: { borderStartWidth: e.borderWidths.small, borderColor: e.colors.borderColor }, title: { alignItems: "center", display: "flex", flexDirection: "row", gap: e.spaces.space12, justifyContent: "space-between", paddingHorizontal: e.spaces.space12, paddingTop: e.spaces.space12 }, offlineContainer: { aspectRatio: Me, backgroundColor: e.colors.gray0, flex: 1, justifyContent: "center", alignItems: "center" }, videoContainer: { flex: 1, WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none", overflow: "auto" } })),
                Oe = ve((0, k.Z)(Be));
        },
        978053: (e, t, a) => {
            a.d(t, { default: () => b });
            var r = a(111677),
                n = a.n(r);
            const o = n().e3098e07,
                l = n().fea16a51,
                i = n().a4f2d94d,
                d = n().hf9bc787,
                s = n().efcd5885,
                c = n().c37228b5,
                m = 2592e3,
                u = 604800,
                h = 86400,
                p = 3600,
                b = {
                    formatTimeSinceDate: (e, t) => {
                        const a = ((t || new Date()).getTime() - e.getTime()) / 1e3;
                        if (a >= 31104e3) {
                            const e = Math.max(1, Math.round(a / 31536e3));
                            return c({ years: e });
                        }
                        if (a >= m) {
                            const e = Math.max(1, Math.floor(a / m));
                            return s({ months: e });
                        }
                        if (a >= 561600) {
                            const e = Math.max(1, Math.round(a / u));
                            return d({ weeks: e });
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
                            d = n > i ? i : n,
                            s = `${r.toLocaleString("en-US", { month: "short", day: "numeric" })} - ${d.toLocaleString("en-US", { month: "short", day: "numeric", year: "numeric" })}`;
                        return [r.getUTCFullYear(), l, s];
                    },
                };
        },
        502940: (e, t, a) => {
            a.r(t), a.d(t, { default: () => d });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M15.985 8.264c.215.227.573.227.775 0l1.077-1.181c.228-.227.215-.636-.026-.881-.846-.778-1.83-1.37-2.894-1.745l.34-1.726c.073-.377-.194-.731-.551-.731H12.62c-.13.001-.256.05-.356.138-.1.087-.17.209-.195.343l-.301 1.536c-2.774.15-5.125 1.635-5.125 4.678 0 2.635 1.942 3.766 3.996 4.543 1.942.781 2.972 1.072 2.972 2.171 0 1.131-1.025 1.794-2.541 1.794-1.378 0-2.825-.486-3.945-1.671-.052-.055-.114-.099-.182-.129-.068-.03-.14-.045-.214-.045-.074 0-.147.016-.215.045-.068.03-.13.074-.181.129L5.17 16.758c-.11.116-.171.273-.171.436 0 .164.061.32.17.436.905.94 2.05 1.622 3.357 1.999l-.32 1.621c-.072.378.19.727.548.732l2.088.018c.132 0 .26-.047.362-.135.102-.088.172-.21.198-.346l.302-1.54c3.337-.237 5.37-2.176 5.37-5.006 0-2.607-2.025-3.707-4.48-4.601-1.404-.55-2.618-.927-2.618-2.058 0-1.1 1.133-1.535 2.27-1.535 1.447 0 2.838.631 3.746 1.494l-.008-.01z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const d = i;
        },
        70962: (e, t, a) => {
            a.r(t), a.d(t, { default: () => d });
            var r = a(202784),
                n = a(890601),
                o = a(783427),
                l = a(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, o.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M11.749 1.072c.072-.046.157-.07.243-.072.089-.001.176.022.251.068.076.045.136.11.175.189l6.494 10.018.014.021.002.004.003.004.022.038v.003h.002l.012.03.005.012.004.01.01.034v.001l.008.039v.005l.003.029.002.027v.045l-.005.035-.008.042-.001.003-.001.002-.01.031-.003.01-.004.01-.014.034-.022.036v.003h-.002c-.008.014-.016.026-.025.038l-.03.034c-.01.01-.019.02-.029.028l-.005.005-.002.002-.028.02-.007.005-.009.007-.03.018-.01.006-6.468 3.629c-.082.063-.184.097-.288.097-.105 0-.206-.036-.288-.099l-6.474-3.632-.008-.004v-.001c-.027-.015-.052-.034-.075-.054-.012-.01-.022-.021-.032-.033l-.017-.02-.014-.016-.025-.038-.022-.04-.017-.043-.004-.013c-.007-.022-.013-.044-.016-.067l-.002-.009L5 11.557c0-.03.001-.06.007-.09.005-.031.013-.06.024-.09l.018-.04.001-.001c.01-.017.019-.033.03-.049l6.5-10.027c.037-.077.096-.142.169-.188z" }), r.createElement("path", { d: "M18.301 13.435c.072-.04.153-.062.235-.061.086 0 .17.024.244.069.073.045.132.109.17.184.04.076.056.16.048.245-.007.084-.039.165-.09.233l-6.503 8.663c-.04.07-.1.13-.17.17-.072.04-.153.062-.236.062-.083 0-.164-.022-.235-.063-.071-.04-.13-.1-.17-.17L5.09 14.105c-.051-.07-.082-.15-.09-.236-.006-.085.011-.17.051-.247.04-.076.101-.14.176-.183.075-.044.16-.066.248-.064.078.001.155.022.222.06L12 16.97l6.301-3.535z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const d = i;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.LiveEvent~bundle.Live.db267bda.js.map
