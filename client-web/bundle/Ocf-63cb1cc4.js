"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Ocf-63cb1cc4"],
    {
        996563: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(118823),
                i = n(447281);
            const o = (0, a.YW)({ task: (e) => e.withEndpoint(i.Z).task });
        },
        395042: (e, t, n) => {
            n.d(t, { El: () => d, HR: () => u, Zc: () => p });
            var a = n(226395),
                i = n(499627),
                o = n(917799);
            const s = "settings/usernames",
                r = "rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY",
                l = Object.freeze({ REQUEST: "rweb/settings/usernames/FETCH_USERNAMES_REQUEST", SUCCESS: "rweb/settings/usernames/FETCH_USERNAMES_SUCCESS", FAILURE: "rweb/settings/usernames/FETCH_USERNAMES_FAILURE" }),
                c = { isLoaded: !1 };
            const d = (e) => e[s],
                u =
                    (e) =>
                    (t, n, { api: i }) =>
                        (0, o._O)(t, { params: e, request: i.withEndpoint(a.Z).usernameAvailable })({ actionTypes: l, context: "FETCH_SETTINGS_USERNAME_AVAILABLE", meta: { username: e.username } }),
                p = (e) => ({ type: r, meta: e });
            i.Z.register({
                [s]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l.REQUEST:
                            return { ...e, isLoading: !0 };
                        case l.FAILURE:
                            return { ...e, isLoading: !1 };
                        case l.SUCCESS:
                            return { ...e, ...t.payload, username: t.meta.username, isLoading: !1 };
                        case r:
                            return { isLoading: !1, suggestions: t.meta?.persistSuggestions ? e.suggestions : void 0 };
                        default:
                            return e;
                    }
                },
            });
        },
        466380: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(807469),
                i = n(502909),
                o = n(600823);
            const s = (0, i.ZP)({ namespace: "topics" }),
                r = (0, i.tb)(s, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(a.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (n, a) => (n(s.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, n) => {
                    const { entityId: a } = t.meta,
                        i = e.entities[a];
                    return i ? ((e, t, n, a) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [n.id]: { ...n, ...a() } } } : e))(e, t, i, n) : e;
                },
                d = { follow: (0, i.Tx)(s, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(a.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, i.Tx)(s, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(a.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, i.Tx)(s, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(a.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, i.Tx)(s, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(a.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...s, ...r, ...l, ...d, customActionTypes: (0, i.X7)(d) },
                p = o.Z.register(u);
        },
        383675: (e, t, n) => {
            n.d(t, { R: () => l, Z: () => r });
            var a = n(503768),
                i = n(644829),
                o = n(750085),
                s = n(218951);
            const r = ({ endpointParams: e, endpointUrl: t, isUserRefreshable: n, timelineId: a }) => (0, s.Z)({ timelineId: a, isUserRefreshable: n, network: { getEndpoint: (e) => e.withEndpoint(i.Z).fetchGeneric, getEndpointParams: ({ count: n, cursor: a }) => ({ ...e, cursor: "string" == typeof a ? a : void 0, count: n, endpointUrl: t }) }, context: "FETCH_TIMELINE", perfKey: "generic" }),
                l = (e, t) => (0, s.Z)({ timelineId: `generic-graphql-timeline-${e}`, isUserRefreshable: t, network: { getEndpoint: (e) => e.withEndpoint(a.ZP).fetchGenericTimelineById, getEndpointParams: ({ count: t, cursor: n }) => ({ cursor: "string" == typeof n ? n : void 0, count: t, timelineId: e }) }, formatResponse: o.Z, context: "FETCH_GENERIC_TIMELINE_GQL", perfKey: "genericGQL" });
        },
        48498: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(644829),
                i = n(218951);
            const o = ({ flow_token: e, subtask_id: t }) => (0, i.Z)({ timelineId: `nux-user-recos-${t}`, network: { getEndpoint: (e) => e.withEndpoint(a.Z).fetchNUXUserRecommendations, getEndpointParams: (n) => ({ ...n, subtask_id: t, flow_token: e }) }, context: "FETCH_NUX_USER_RECOS", perfKey: "nux-user-recos" });
        },
        745888: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(360917),
                i = n.n(a),
                o = n(24949),
                s = n(716406),
                r = n(312771),
                l = n(502909),
                c = n(600823);
            const d = (e) => ({ valid: !0 });
            function u(e = {}) {
                const { localValidator: t = d, ...n } = e,
                    a = (0, l.ZP)({ customActions: { clear: { reducer: (e, t) => ({}) } }, ...n });
                (a.clear = () => (e) => e({ type: a.customActionTypes.clear.SUCCESS })),
                    (a.validate = (e, n) => (i) => {
                        const o = t(e, n);
                        return o.valid ? i(a.fetchOneIfNeeded(e, n)) : (i(a.add({ [e]: o })), Promise.resolve());
                    });
                return (
                    (a.selectEntitiesWithFetchStatus = (0, o.P1)(
                        a.selectAll,
                        (e) => a.selectState(e).fetchStatus || i(),
                        (e, t) =>
                            (0, s.Z)(t, (t, n) => {
                                const a = e[n] || {};
                                return { ...a, valid: !!a.valid || t === r.ZP.FAILED, isLoading: t === r.ZP.LOADING };
                            }),
                    )),
                    c.Z.register(a)
                );
            }
        },
        917920: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(251067),
                i = n(111677),
                o = n.n(i),
                s = n(335149),
                r = n(745888);
            const l = new RegExp("^[a-zA-Z0-9_\\-+\\.!\\&]+@(?:[a-zA-Z0-9\\-_]+\\.)+[a-zA-Z]{2,63}$"),
                c = o().hc72e1fc,
                d = o().bc0ad88a,
                u = (0, r.Z)({ namespace: "emailValidity", fetchOneContext: "FETCH_EMAIL_VALIDITY", fetchOneEndpoint: (e) => e.withEndpoint(s.Z).isEmailAvailable, fetchOneParams: ([e], t) => ({ email: e, ...t }), localValidator: (e) => (l.test(e) ? (!a.yV && /\+\d+@/.test(e) ? { errorMessage: d, valid: !1 } : { valid: !0 }) : { errorMessage: c, valid: !1 }) });
        },
        878137: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(111677),
                i = n.n(a),
                o = n(335149),
                s = n(71620),
                r = n(623109),
                l = n(745888);
            const c = i().d5568440,
                d = (0, l.Z)({
                    namespace: "passwordValidity",
                    fetchOneContext: "FETCH_PASSWORD_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(o.Z).fetchPasswordStrength,
                    fetchOneParams: ([e], t) => ({ password: e, ...t }),
                    localValidator: (e, t) => {
                        const n = !(!t || !t.username) && e === t.username,
                            a = e.length >= r.l,
                            i = e.length <= r.E;
                        let o = c;
                        return a ? i || (o = s.IM) : (o = s.px), { errorMessage: !n && a && i ? void 0 : o, valid: a && i && !n };
                    },
                });
        },
        580134: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(111677),
                i = n.n(a),
                o = n(335149),
                s = n(745888);
            const r = new RegExp("^\\+?[0-9\\-\\.\\(\\)\\s]{7,1000}$"),
                l = i().cd24fe60,
                c = (0, s.Z)({
                    namespace: "phoneNumberValidity",
                    fetchOneContext: "FETCH_PHONE_VALIDITY",
                    fetchOneEndpoint: (e) => e.withEndpoint(o.Z).isPhoneNumberAvailable,
                    fetchOneParams: ([e], t) => ({ raw_phone_number: e, ...t }),
                    localValidator: (e) => {
                        const t = r.test(e);
                        return { errorMessage: l, valid: t };
                    },
                });
        },
        611423: (e, t, n) => {
            n.d(t, { Z: () => o });
            var a = n(553093),
                i = n(383675);
            const o = ({ timelinePrefix: e = "generic-timeline-", urtUrl: t }) => {
                const { url: n, urtEndpointOptions: o } = t,
                    { cacheId: s, requestParams: r, timeline: l } = o || {};
                return l?.id ? (0, i.R)(l.id) : (0, i.Z)({ timelineId: s || `${e}${(0, a.Sz)(t)}`, endpointUrl: n, endpointParams: r || {} });
            };
        },
        466441: (e, t, n) => {
            n.r(t), n.d(t, { NotFoundScreen: () => b, default: () => Z });
            n(571372);
            var a = n(202784),
                i = n(386802),
                o = n(108362),
                s = n(392237),
                r = n(111677),
                l = n.n(r),
                c = n(187669),
                d = n(449067),
                u = n(38293),
                p = n(56851),
                m = n(652904),
                h = n(952793),
                _ = n(163889),
                g = n(725516);
            const k = l().ba929da8,
                f = l().d203e242;
            function b(e) {
                const { splat: t } = e.match.params,
                    { isModal: n } = a.useContext(i.Z),
                    s = (0, h.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        s && t && (0, _.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    a.createElement(m.Z, null, a.createElement(d.Z.Configure, { backLocation: "/", documentTitle: k, title: f }), a.createElement(o.Z, { style: n && E.modal }, a.createElement(p.Z, null)), a.createElement(u.Z, { title: k, withMeta: !1 }))
                );
            }
            const E = s.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                Z = (0, g.Z)(b, { page: "not_found" });
        },
        588452: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            n(136728);
            var a = n(202784);
            class i extends a.Component {
                componentDidMount() {
                    const { code: e, error: t, scope: n, state: a } = this.props.location.query,
                        i = { callback_url: `https://${window.location.hostname}${window.location.pathname}`, code: e, error: t, scope: n, state: a },
                        o = window.opener;
                    o ? (o.postMessage(i, `https://${window.location.hostname}`), window.close(), o.focus()) : this.props.history.push("/");
                }
                render() {
                    return null;
                }
            }
        },
        699398: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(807896),
                i = n(202784),
                o = n(325686),
                s = n(779610),
                r = n(593866),
                l = n(731708),
                c = n(392237),
                d = n(804027),
                u = n(227991),
                p = n(663951),
                m = n(50439),
                h = n(280947),
                _ = n(975364);
            const g = "ActionListNextButton",
                k = "ActionListSkipButton";
            function f({ actionItem: e, link: t, onNavigate: n, subtaskId: o, subtaskInputs: r, updateFlow: l }) {
                const c = e.action_data.link_data,
                    d = i.useCallback(
                        (e) => {
                            e.preventDefault(), l(o, { link: t.link_id }), n(t);
                        },
                        [t, n, o, l],
                    );
                return i.createElement(s.Z, (0, a.Z)({ description: i.createElement(_.Z, (0, a.Z)({}, c.detail_text, { color: "gray700", size: "subtext2", subtaskInputs: r })), label: i.createElement(_.Z, (0, a.Z)({}, c.text, { size: "headline2", subtaskInputs: r, text: c.text?.text ?? c.link.label })), link: "#", onPress: d, role: "link" }, Z(e.action_data.link_data.icon)));
            }
            function b({ actionItem: e, onNavigate: t, subtaskInputs: n }) {
                return i.createElement(s.Z, (0, a.Z)({ description: i.createElement(_.Z, (0, a.Z)({}, e.action_data.text_data.detail_text, { color: "gray700", size: "subtext2", subtaskInputs: n })), label: i.createElement(_.Z, (0, a.Z)({}, e.action_data.text_data.text, { onNavigate: t, size: "headline2", subtaskInputs: n })), role: null }, Z(e.action_data.text_data.icon)));
            }
            function E({ actionItems: e, onNavigate: t, subtaskInputs: n }) {
                const o = e.map((e) => {
                    const o = "text" === e.action_type ? e.action_data.text_data : e.action_data.link_data;
                    return { label: i.createElement(_.Z, (0, a.Z)({}, o.text, { onNavigate: t, subtaskInputs: n, text: "text" === e.action_type ? e.action_data.text_data.text.text : (e.action_data.link_data.text?.text ?? e.action_data.link_data.link.label), weight: "bold" })), description: o.detail_text ? i.createElement(_.Z, (0, a.Z)({}, o.detail_text, { color: "gray700", style: w.bulletListDescription, subtaskInputs: n })) : null, decoration: o.icon ? i.createElement(m.Z, { icon: o.icon.icon, style: w.bulletIcon }) : null };
                });
                return i.createElement(r.Z, { items: o });
            }
            function Z(e) {
                return { thumbnail: e ? i.createElement(l.ZP, { size: "headline2", style: w.icon }, i.createElement(m.Z, { icon: e.icon })) : null, thumbnailSize: "medium" };
            }
            const w = c.default.create((e) => ({ icon: { display: "block", minWidth: e.spaces.space36, marginEnd: e.spaces.space20, textAlign: "center" }, bulletIcon: { height: e.spaces.space24, width: e.spaces.space24, color: e.colors.text, marginEnd: e.spaces.space24, justifyContent: "center", overflow: "hidden" }, bulletListDescription: { marginTop: e.spaces.space4 } })),
                y = function (e) {
                    const {
                        onNavigate: t,
                        passthroughOcfScreenProps: n,
                        subtask: { action_items: s, header: r, next_link: l, skip_link: c, style: m },
                        subtaskId: _,
                        subtaskInputs: Z,
                        updateFlow: w,
                    } = e;
                    return i.createElement(
                        h.Z,
                        (0, a.Z)({}, n, {
                            appBarPosition: "full_bleed_top" === r?.header_image?.image_type ? "absolute" : void 0,
                            appBarWithBackground: "full_bleed_top" !== r?.header_image?.image_type,
                            footer: i.createElement(u.ZP, {
                                actionLabel: l?.label,
                                actionTestID: g,
                                onAction: () => {
                                    l && (w(_, { link: l.link_id }), t(l));
                                },
                                onSecondaryAction: () => {
                                    c && (w(_, { link: c.link_id }), t(c));
                                },
                                secondaryActionLabel: c?.label,
                                secondaryActionTestID: k,
                            }),
                            header: i.createElement(p.Z, { header: r, onNavigate: t, subtaskInputs: Z, withHeaderImage: !0 }),
                            hideLogo: "full_bleed_top" === r?.header_image?.image_type,
                            providePadding: !0,
                        }),
                        m === d.R8.BulletList
                            ? i.createElement(E, (0, a.Z)({}, e, { actionItems: s }))
                            : i.createElement(
                                  o.Z,
                                  { role: "list" },
                                  s.map((t, n) => i.createElement(o.Z, { key: n, role: "listitem" }, "text" === t.action_type ? i.createElement(b, (0, a.Z)({}, e, { actionItem: t })) : i.createElement(f, (0, a.Z)({}, e, { actionItem: t, link: t.action_data.link_data.link })))),
                              ),
                    );
                };
        },
        110092: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                i = n(202784),
                o = n(190286),
                s = n(555079),
                r = n(975364);
            class l extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleConfirm = () => {
                            const { subtask: e } = this.props;
                            this._handleButtonClick(e.next_link);
                        }),
                        (this._handleCancel = () => {
                            const {
                                subtask: { cancel_link: e },
                            } = this.props;
                            e && this._handleButtonClick(e);
                        }),
                        (this._handleButtonClick = (e) => {
                            const { onNavigate: t, subtaskId: n, updateFlow: a } = this.props;
                            a(n, { link: e.link_id }), t(e);
                        });
                }
                render() {
                    const { onNavigate: e, subtask: t, subtaskInputs: n } = this.props,
                        l = t.primary_text ? i.createElement(r.Z, (0, a.Z)({}, t.primary_text, { id: s.Q_, onNavigate: e, subtaskInputs: n })) : void 0,
                        c = t.secondary_text ? i.createElement(r.Z, (0, a.Z)({}, t.secondary_text, { onNavigate: e, subtaskInputs: n })) : void 0,
                        { cancel_link: d, next_link: u } = t,
                        p = d && d.label;
                    return i.createElement(o.Z, { cancelButtonLabel: p, confirmButtonLabel: u && u.label, headline: l, onCancel: this._handleCancel, onConfirm: this._handleConfirm, onMaskClick: this._handleCancel, text: c, withCancelButton: !!p });
                }
            }
            const c = l;
        },
        125167: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(807896),
                i = n(202784),
                o = n(325686),
                s = n(530525),
                r = n(439592),
                l = n(946847),
                c = n(912021),
                d = n(516951),
                u = n(443781),
                p = n(555079),
                m = n(280947),
                h = n(975364),
                _ = n(153925);
            class g extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleCtaClick = (e) => {
                            const { onNavigate: t, subtaskId: n, updateFlow: a } = this.props;
                            a(n, { link: e.link_id }), t(e);
                        }),
                        (this._handlePrimaryActionClick = () => {
                            const { subtask: e } = this.props;
                            this.setState({ downloadLinkClicked: !0 }), this._handleCtaClick(e.primary_action_link);
                        }),
                        (this._handleSecondaryActionClick = () => {
                            const {
                                subtask: { secondary_action_link: e },
                            } = this.props;
                            e && this._handleCtaClick(e);
                        }),
                        (this._getSubText = (0, c.Z)((e, t, n) => {
                            const l = e.primary_image_url ? i.createElement(s.Z, { "aria-label": "", aspectMode: r.Z.exact(1), image: e.primary_image_url || "" }) : null,
                                c = e.secondary_text ? i.createElement(h.Z, (0, a.Z)({}, e.secondary_text, { onNavigate: t, subtaskInputs: n })) : null;
                            return i.createElement(o.Z, null, l, c);
                        })),
                        (this.state = { downloadLinkClicked: !1 });
                }
                render() {
                    const { onNavigate: e, passthroughOcfScreenProps: t, subtask: n, subtaskInputs: o } = this.props,
                        { downloadLinkClicked: s } = this.state,
                        r = n.primary_text ? i.createElement(h.Z, (0, a.Z)({}, n.primary_text, { id: p.Q_, onNavigate: e, subtaskInputs: o })) : null,
                        c = !s || !n.primary_action_text_after_click,
                        u = (s && n.primary_action_text_after_click) || n.primary_action_link.label,
                        g = n.detail_text ? i.createElement(h.Z, (0, a.Z)({}, n.detail_text, { onNavigate: e, subtaskInputs: o })) : null;
                    return i.createElement(m.Z, (0, a.Z)({ hideLogo: !0 }, t), i.createElement(l.Z, { actionLabel: u || "", actionType: (0, _.$1)(n.primary_action_style), footer: g, headline: r, onAction: c ? this._handlePrimaryActionClick : d.Z, onClose: d.Z, onSecondaryAction: this._handleSecondaryActionClick, secondaryActionLabel: (n.secondary_action_link || {}).label, secondaryActionType: n.secondary_action_style && (0, _.$1)(n.secondary_action_style), subtext: this._getSubText(n, e, o), withCloseButton: !1 }), this.props.errorDialog);
                }
            }
            g.contextType = u.rC;
        },
        85779: (e, t, n) => {
            n.d(t, { Z: () => c });
            n(543673), n(240753), n(128399);
            var a = n(202784),
                i = n(323265),
                o = n(51525),
                s = n(951790),
                r = n(711535),
                l = n(280947);
            function c(e) {
                const { onNavigate: t, passthroughOcfScreenProps: n, subtask: c, subtaskId: d, updateFlow: u } = e,
                    p = new URLSearchParams(c.url.split("?")[1]),
                    m = p.get("publicKey"),
                    h = p.get("webKey") || m,
                    _ = p.get("mobileKey") || m,
                    g = p.get("data") || void 0,
                    k = "true" === p.get("verifyOnChallengeCompleted"),
                    f = p.get("flowToken") || "",
                    b = (e) => {
                        i.ZP.isWebView() ? s.Z.openApp(e) : (u(d, { completion_deeplink: e, link: c.next_link.link_id }), t(c.next_link));
                    },
                    E = (e) => {
                        u(d, { completion_deeplink: e, link: c.fail_link.link_id }), t(c.fail_link);
                    };
                return h && _ && !(k && "" === f) ? a.createElement(l.Z, n, a.createElement(r.default, { data: g, flowToken: f, mobileKey: _, onChallengeCompleted: b, onChallengeFailed: E, shouldVerifyAfterChallengeCompleted: k, webKey: h })) : ((0, o.vv)(), null);
            }
        },
        929378: (e, t, n) => {
            n.d(t, { Z: () => r, t: () => s });
            var a = n(323265);
            const i = "arkose-subtask",
                o = "arkose",
                s = Object.freeze({ passive: "PASSIVE", interactive: "INTERACTIVE" }),
                r = {
                    loadIframe: (e, t, n, s) => {
                        e.scribe({ action: "load", data: { items: [{ guest_id: t, os: a.ZP.osString(), arkose_keys: { mobile: n, web: s } }] }, element: o, page: i });
                    },
                    loadIframeFailed: (e, t, n, s) => {
                        e.scribe({ action: "fail", data: { items: [{ guest_id: t, os: a.ZP.osString(), arkose_keys: { mobile: n, web: s } }] }, element: o, page: i });
                    },
                    completeChallenge: (e, t, n, s, r) => {
                        e.scribe({ action: "complete", data: { items: [{ guest_id: t, os: a.ZP.osString(), challenge_type: n, arkose_keys: { mobile: s, web: r } }] }, element: o, page: i });
                    },
                    suppressedChallenge: (e, t, n, r) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: s.passive, os: a.ZP.osString(), arkose_keys: { mobile: n, web: r } }] }, element: o, page: i });
                    },
                    shownChallenge: (e, t, n, r) => {
                        e.scribe({ action: "show", data: { items: [{ guest_id: t, challenge_type: s.interactive, os: a.ZP.osString(), arkose_keys: { mobile: n, web: r } }] }, element: o, page: i });
                    },
                };
        },
        711535: (e, t, n) => {
            n.r(t), n.d(t, { ArkoseSecurityChallenge: () => b, default: () => E });
            var a = n(202784),
                i = n(325686),
                o = n(392237),
                s = n(167630),
                r = n(323265),
                l = n(443781),
                c = n(51525),
                d = n(163889),
                u = n(951790),
                p = n(142253),
                m = n(725516),
                h = n(125363),
                _ = n(390387),
                g = n(929378),
                k = n(668214),
                f = n(118823);
            function b(e) {
                const { location: t, onChallengeFailed: n } = e,
                    [k, f] = a.useState(!0),
                    [b, E] = a.useState(!1),
                    { featureSwitches: T } = a.useContext(l.rC),
                    A = (0, m.z)(),
                    P = (0, h.v9)(_.OW),
                    L = a.useRef(null),
                    N = a.useRef(null),
                    O = w(t, "publicKey") ?? "",
                    R = e.mobileKey || w(t, "mobileKey") || O,
                    M = e.webKey || w(t, "webKey") || O,
                    F = e.data || w(t, "data"),
                    U = R ? T.getStringValue(R) : "",
                    $ = M ? T.getStringValue(M) : "",
                    V = e.shouldVerifyAfterChallengeCompleted || Boolean(t?.query?.verifyOnChallengeCompleted) || !1,
                    B = e.flowToken || w(t, "flowToken") || "",
                    z = Object.freeze({ light: "default", dark: "dim", darker: "dark", business: "business" }),
                    W = r.ZP.isWebView() || !("function" == typeof e.onChallengeCompleted),
                    D = W ? (window.matchMedia("(prefers-color-scheme: dark)") ? "dark" : "default") : z[o.default.theme.paletteName],
                    H = a.useMemo(() => W || window.innerWidth < v, [W]),
                    [K, q] = a.useState(H ? x : S),
                    [Q, G] = a.useState(H ? I : v),
                    [Y, j] = a.useState(g.t.passive),
                    X = a.useMemo(() => (H ? Math.min(window.innerWidth / I, window.innerHeight / x) : 1), [H]),
                    J = t?.query?.guestId,
                    ee = a.useMemo(() => (W && "string" == typeof J ? J : W ? "" : P || ""), [W, J, P]);
                a.useEffect(() => {
                    L.current = (0, p.Z)({ name: "arkose-challenge-load" });
                }, []);
                const te = (t) => {
                        W ? u.Z.openApp(t) : e.onChallengeCompleted(t);
                    },
                    ne = a.useRef(() => {});
                (ne.current = function (t) {
                    if ("string" == typeof t.data)
                        try {
                            const n = JSON.parse(t.data);
                            switch (n.eventId) {
                                case "challenge-suppressed":
                                    g.Z.suppressedChallenge(A, ee, R, M), j(g.t.passive);
                                    break;
                                case "challenge-shown":
                                    g.Z.shownChallenge(A, ee, R, M), j(g.t.interactive), f(!1);
                                    break;
                                case "challenge-complete": {
                                    g.Z.completeChallenge(A, ee, Y, R, M), N.current?.end({ endMessage: `mobile key:${R}, web key:${M}, challenge type: ${Y}` }), (N.current = null);
                                    const t = `${y}?access_token=${n.payload.sessionToken}`,
                                        a = n.payload.sessionToken;
                                    V
                                        ? e
                                              .verifyIdentifier({ arkose_access_token: a, flow_token: B })
                                              .then((e) => {
                                                  te(t);
                                              })
                                              .catch((e) => {
                                                  te(t);
                                              })
                                        : te(t);
                                    break;
                                }
                                case "challenge-iframeSize":
                                    q(n.payload.frameHeight), G(n.payload.frameWidth);
                            }
                        } catch (e) {
                            (0, d.ZP)(e);
                        }
                }),
                    a.useEffect(() => {
                        function e(...e) {
                            ne.current(...e);
                        }
                        return (
                            window.addEventListener("message", e, !1),
                            () => {
                                window.removeEventListener("message", e, !1);
                            }
                        );
                    }, []);
                const ae = a.useRef(() => {});
                (ae.current = function () {
                    g.Z.loadIframeFailed(A, ee, R, M), W ? u.Z.openApp(C) : n(C);
                }),
                    a.useEffect(() => {
                        if (b) return;
                        const e = setTimeout(() => {
                            ae.current();
                        }, 1e4);
                        return () => {
                            clearTimeout(e);
                        };
                    }, [b]);
                const ie = !U || !$;
                a.useEffect(() => {
                    ie && (0, c.vv)();
                }, [ie]);
                let oe = null;
                return (
                    (k || ie) && (oe = a.createElement(s.Z, { style: Z.spinner })),
                    a.createElement(
                        i.Z,
                        { style: Z.wrapper },
                        oe,
                        a.createElement("iframe", {
                            height: K,
                            id: "arkoseFrame",
                            onLoad: () => {
                                E(!0), L.current?.end({ endMessage: `mobile key:${R}, web key:${M}` }), (L.current = null), (N.current = (0, p.Z)({ name: "arkose-challenge-complete" })), g.Z.loadIframe(A, ee, R, M);
                            },
                            src: [H ? `https://iframe.arkoselabs.com/${U}/index.html?theme=${D}` : `https://iframe.arkoselabs.com/${$}/index.html?theme=${D}`, F && `&data=${F}`].filter(Boolean).join(""),
                            style: { MozTransform: `scale(${X})`, OTransform: `scale(${X})`, WebkitTransform: `scale(${X})`, borderWidth: 0, MozTransformOrigin: "50% 0", OTransformOrigin: "50% 0", WebkitTransformOrigin: "50% 0", alignSelf: "center" },
                            title: "arkoseFrame",
                            width: Q,
                        }),
                    )
                );
            }
            const E = (0, k.Z)().propsFromActions(() => ({ verifyIdentifier: f.if }))(b),
                Z = o.default.create((e) => ({ wrapper: { backgroundColor: e.colors.white }, spinner: { alignSelf: "center", height: "100%" } }));
            function w(e, t) {
                const n = e?.query;
                if (n) {
                    const e = n[t];
                    if (Array.isArray(e)) {
                        const [t] = e;
                        return t;
                    }
                    if (e) return e;
                }
            }
            const y = "twitter://onboarding/web_modal/next_link",
                C = "twitter://onboarding/web_modal/fail_link",
                I = 327,
                v = 558,
                x = 500,
                S = 523;
        },
        790257: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(807896),
                i = n(202784),
                o = n(114777),
                s = n(118823),
                r = n(990350);
            const l = (0, s.YW)({ task: (e) => e.withEndpoint(r.Z).task }),
                c = i.memo((e) => i.createElement(o.Z, (0, a.Z)({}, e, { ocfModule: l })));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Ocf-63cb1cc4.c7a50d2a.js.map
