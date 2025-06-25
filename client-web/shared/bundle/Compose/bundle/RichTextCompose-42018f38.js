"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Compose~bundle.RichTextCompose-42018f38"],
    {
        971143: (e, t, n) => {
            n.d(t, { d: () => d });
            var a = n(202784),
                i = n(991789),
                l = n(130304),
                o = n(443781),
                r = n(507824),
                s = n(791134),
                c = n(319662);
            function d(e) {
                const { isThread: t } = e,
                    n = (0, o.QZ)(),
                    d = s.kh.maxWeightedTweetLength,
                    u = e.data.text,
                    m = a.useMemo(() => (0, c.k)(u).weightedLength, [u]),
                    p = s.g0(e.userLanguage),
                    b = { ...n, isThread: t };
                if (r.Oc(b)) {
                    const e = s.WT.max_count(b),
                        t = s.WT.warning_count(b);
                    return a.createElement(i.Z, { count: m, finalMaxCount: e, finalWarningCount: t, formatNumber: p, initialMaxCount: d, initialWarningCount: s.pD });
                }
                return a.createElement(l.Z, { count: m, formatNumber: p, maxCount: d, warningCount: s.pD });
            }
        },
        302830: (e, t, n) => {
            n.d(t, { L: () => p });
            var a = n(202784),
                i = n(731708),
                l = n(626820),
                o = n(111677),
                r = n.n(o),
                s = n(443781),
                c = n(507824),
                d = n(166424),
                u = n(727828);
            const m = { noteTweetTooltip: r().hb36f723, articlesTooltip: a.createElement(r().I18NFormatMessage, { $i18n: "j0b75ce7" }, a.createElement(i.ZP, { color: "text", link: { pathname: "/compose/articles", external: !0 }, weight: "bold", withInteractiveStyling: !0, withUnderline: !0 }, r().d759c09e)) };
            function p(e) {
                const { isReply: t, isThread: n } = e,
                    i = (0, s.QZ)();
                if (!e.isActive) return null;
                const l = i.userClaims.isTrueAndEnabled("subscriptions_feature_article_composer"),
                    o = i.userClaims.isTrueAndEnabled("subscriptions_feature_1014"),
                    r = i.featureSwitches.isTrue("subscriptions_feature_article_composer"),
                    m = i.featureSwitches.isTrue("longform_notetweets_composer_upsell_enabled") && (!o || (r && !l)),
                    p = { ...i, isThread: n },
                    { editorStateRaw: f, ...h } = e.data;
                if (c.SC(h, p)) return a.createElement(b, { showArticleTip: l && !t });
                if (m && c.at(h, p, d.k.maxWeightedTweetLength)) {
                    const e = r ? "ArticlesPostComposer" : "LongformPostComposer";
                    return a.createElement(u.Z, { external: !0, variant: e });
                }
                return null;
            }
            function b({ showArticleTip: e }) {
                const [t, n] = a.useState(!1),
                    i = a.useCallback(() => n(!0), []),
                    o = d.k.maxWeightedTweetLength;
                return t ? null : a.createElement(l.Z, { backgroundColor: "primary", onClose: i, text: e ? m.articlesTooltip : m.noteTweetTooltip({ count: o }) });
            }
        },
        512561: (e, t, n) => {
            n.d(t, { B: () => s });
            var a = n(202784),
                i = n(325686),
                l = n(392237),
                o = n(443781),
                r = n(727828);
            function s({ isActive: e, isExpanded: t, isReply: n, isThread: l }) {
                const { featureSwitches: s, userClaims: d } = (0, o.QZ)(),
                    u = d.isAnyPremiumSubscriber();
                if (n && !l && e && t && !u) {
                    if (s.isTrue("subscriptions_upsells_reply_boost_enabled")) return a.createElement(i.Z, { style: c.container, testID: "reply-boost-upsell" }, a.createElement(r.Z, { variant: "ReplyBoost" }));
                }
                return null;
            }
            const c = l.default.create((e) => ({ container: { margin: e.spaces.space16 } }));
        },
        365123: (e, t, n) => {
            n.d(t, { h: () => B });
            var a = n(202784),
                i = n(325686),
                l = n(721266),
                o = n(40610),
                r = n(688715),
                s = n(111677),
                c = n.n(s),
                d = n(837880),
                u = n(417144),
                m = n(537052),
                p = n(731708),
                b = n(392237),
                f = n(443781),
                h = n(716233),
                g = n(125363),
                _ = n(497294),
                y = n(807896),
                E = (n(136728), n(30899)),
                x = n(143670),
                w = n(81233);
            function C(e) {
                const { id: t, ...n } = e;
                return a.createElement(x.Z, n);
            }
            function Z(e) {
                return e.children;
            }
            function v(e) {
                const { children: t } = e,
                    [n, l] = a.useState(!1),
                    [o] = k(Z, t),
                    r = k(C, t);
                return a.createElement(
                    E.Z,
                    {
                        onDismiss: () => l(!1),
                        onOpen: () => l(!0),
                        preferredHorizontalOrientation: "end",
                        renderContent: function (e, t) {
                            const n = ["sheet" === t && T.sheet_container];
                            return a.createElement(
                                i.Z,
                                { style: n },
                                r.map((n) =>
                                    (function ({ child: e, dismiss: t, type: n }) {
                                        const { id: i, onClick: l, ...o } = e.props,
                                            r = (e) => {
                                                "function" == typeof l && l(e), t();
                                            };
                                        return a.createElement(x.Z, (0, y.Z)({ key: i }, o, { onClick: r }));
                                    })({ child: n, dismiss: e, type: t }),
                                ),
                            );
                        },
                    },
                    a.createElement(w.P, { "aria-expanded": n, "aria-haspopup": "menu", role: "button", size: "xSmall", type: "primaryOutlined" }, o),
                );
            }
            (v.Selected = Z), (v.Item = C);
            const T = b.default.create((e) => ({ sheet_container: { paddingHorizontal: e.spacesPx.space8, paddingVertical: e.spacesPx.space16 } }));
            function k(e, t) {
                const n = [];
                return (
                    a.Children.forEach(t, (t) => {
                        t.type === e && n.push(t);
                    }),
                    n
                );
            }
            function S(e) {
                const t = (0, g.I0)(),
                    { featureSwitches: n, userClaims: o } = (0, f.QZ)();
                if (!n.isTrue("media_async_upload_longer_video_resolution_selector")) return null;
                const { enable_1080p_variant: r, id: s, mediaFile: c } = e.mediaItem;
                if ((0, h.SB)({ featureSwitches: n, userClaims: o }) < 1 || !c?.isVideo) return null;
                const { height: d, width: u } = c,
                    m = Math.min(d, u),
                    b = Math.max(d, u);
                if (!(m >= 1080 || b >= 1920)) return null;
                function y(e) {
                    t((0, _._J)({ id: s, enable_1080p_variant: e })), t((0, _.dD)(s));
                }
                let E;
                return (E = r ? a.createElement(p.ZP, null, "1080p") : a.createElement(a.Fragment, null, a.createElement(p.ZP, null, "720p"), a.createElement(l.Z, { size: "space4" }), a.createElement(p.ZP, { size: "subtext2", weight: "heavy" }, I.recommended))), a.createElement(i.Z, null, a.createElement(l.Z, { size: "space8" }), a.createElement(i.Z, { style: P.container }, a.createElement(v, null, a.createElement(v.Selected, null, a.createElement(p.ZP, { color: "text", size: "subtext1", weight: "medium" }, E)), a.createElement(v.Item, { actionSubText: I.recommended, actionText: "720p", id: "720p", onClick: () => y(!1) }), a.createElement(v.Item, { actionSubText: I.rarely_needed, actionText: "1080p", id: "1080p", onClick: () => y(!0) }))));
            }
            const P = b.default.create((e) => ({ container: { display: "inline-flex", flexDirection: "row" } })),
                I = { recommended: c().ef8f5d90, rarely_needed: c().a7046fb0 };
            function B(e) {
                const { mediaItem: t, mixedMediaUploadsEnabled: n } = e;
                if (!t?.mediaFile?.isVideo) return null;
                const r = t.uploadError?.maxSizeBytes,
                    s = t.mediaFile?.name || "unknown";
                let c = R(t, r),
                    d = { label: A.learn_more, link: D };
                const m = (function (e, t, n) {
                    if (e.uploadError?.code === u.d.FILE_TOO_LARGE && e.mediaFile?.size > t) {
                        const e = t / 1073741824;
                        return A.callout_text_file_too_big({ human_readable_max_size: e });
                    }
                    if (e.uploadError?.detail_message) return e.uploadError?.detail_message;
                    if (n) return "";
                    return A.callout_text;
                })(t, r, n);
                return n && ((c = `${s}: ${R(t, r)}`), (d = void 0)), a.createElement(i.Z, null, a.createElement(S, { mediaItem: t }), a.createElement(l.Z, { size: "space8" }), a.createElement(o.Z.Primary, { action: d, headline: c, text: m }));
            }
            function R(e, t) {
                const n = z(e.uploadProgress || 0);
                if (e.uploadError?.code === u.d.FILE_TOO_LARGE && e.mediaFile?.size > t) return A.file_too_big_error;
                if (e.uploadFailed) return A.error;
                if (n >= 1) {
                    const e = Math.floor(100 * n);
                    return A.uploaded({ percent: e });
                }
                const [a] = m.mL(n);
                if (a === m.Hf.processing) {
                    const e = L(n);
                    return A.processing({ percent: e });
                }
                const i = L(n);
                return A.uploading({ percent: i });
            }
            const A = { error: c().c20aaf3e, uploaded: c().e4472565, processing: c().a06fa8fd, uploading: c().h7f340e5, learn_more: c().i859a9d4, callout_text: c().ee016dd6, file_too_big_error: c().daad8822, callout_text_file_too_big: c().i8ff6261, deliver_1080p_variant: c().cba4fdde },
                z = (e) => (0, d.Z)(e, 0, 1),
                L = (e) => Math.floor(100 * e),
                D = (0, r.ju)("https://help.x.com/using-twitter/twitter-videos");
        },
        649173: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                i = n(392237),
                l = n(111677),
                o = n.n(l),
                r = n(473026),
                s = n(47743),
                c = n(373554);
            function d(e) {
                const { hasInlineMedia: t, isWebRedesign: n, maxMediaCount: i = s.nO, media: l, mediaAttachDisabled: o, onFilesAdded: d, setActiveParentKey: p, withMixedMedia: b } = e,
                    f = o || l.length >= i,
                    h = l.length < i - 1,
                    g = (b || 0 === l.length) && !t;
                let _;
                return l.length > 0 && (_ = b && !t ? m.addMedia : m.addPhotos), a.createElement(c.Z, { acceptGifs: g, acceptVideo: g, "aria-label": _, disabled: f, icon: a.createElement(r.default, { style: n && u.icon }), multiple: h, onChange: d, onPress: p, style: u.toolBarButton, type: n ? "primaryText" : "brandText" });
            }
            const u = i.default.create((e) => ({ icon: { color: e.colors.gray700 }, toolBarButton: { marginHorizontal: 0 } })),
                m = { addMedia: o().acf3ecf4, addPhotos: o().bdbcdd94 };
        },
        357498: (e, t, n) => {
            n.d(t, { w: () => a, Z: () => u });
            var a = {};
            n.r(a), n.d(a, { isPollButtonDisabled: () => d, shouldShowPoll: () => c });
            var i = n(807896),
                l = n(202784),
                o = n(2138),
                r = n(725516),
                s = n(698469);
            function c({ composerData: e }) {
                const { gifMetadata: t, media: n, quotedStatus: a } = e;
                return !t && 0 === n.length && !a;
            }
            function d({ composerData: e, isEditMode: t, isScheduled: n, isUserLoggedIn: a }) {
                const { media: i, pollActive: l, quotedStatus: o } = e;
                return !!(l || i.length || o || n || !a || t);
            }
            const u = ({ composerIndex: e, editable: t, initialChoices: n, initialDuration: a, isActive: c, isPollValid: d, updateComposer: u }) => {
                const m = (0, r.z)(),
                    { onChange: p, ...b } = l.useMemo(
                        () => ({
                            onChange(t) {
                                u({ pollChoices: t?.choices, pollDuration: t?.duration }, e);
                            },
                            onValid() {
                                !d && u({ pollValid: !0 }, e);
                            },
                            onInvalid() {
                                d && u({ pollValid: !1 }, e);
                            },
                            onRemove() {
                                m.scribe({ element: "remove_poll", action: "click" }), u({ pollActive: !1 }, e);
                            },
                        }),
                        [m, d, u, e],
                    ),
                    f = l.useMemo(
                        () =>
                            (0, o.Z)(
                                ({ choices: e, duration: t }) => {
                                    p({ choices: e, duration: t });
                                },
                                200,
                                { leading: !0, trailing: !0 },
                            ),
                        [p],
                    ),
                    h = l.useCallback(() => {
                        f.flush();
                    }, [f]);
                return l.createElement(s.Z, (0, i.Z)({ editable: t, initialChoices: n, initialDuration: a, isActive: c, onBlur: h, onChange: f }, b));
            };
        },
        562644: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                i = n(325686),
                l = n(392237),
                o = n(731708),
                r = n(834324),
                s = n(111677),
                c = n.n(s);
            const d = l.default.create((e) => ({ container: { marginBottom: e.spaces.space4 }, link: { color: "black" } })),
                u = c().efa265fc,
                m = a.createElement(c().I18NFormatMessage, { $i18n: "dd964cf3" }, a.createElement(o.ZP, { link: "/settings/audience_and_tagging", style: d.link, withInteractiveStyling: !0, withUnderline: !0 }, c().f2c8c04d));
            function p() {
                return a.createElement(i.Z, { style: d.container }, a.createElement(r.Z, { headline: u, text: m }));
            }
        },
        251076: (e, t, n) => {
            n.d(t, { Z: () => i.Z, w: () => a.w });
            var a = n(357498),
                i = n(525139);
        },
        95681: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = { addButton: "addButton", addSubtitlesLabel: "addSubtitlesLabel", altTextLabel: "altTextLabel", altTextWrapper: "altTextWrapper", tagPeopleLabel: "tagPeopleLabel", attachments: "attachments", composeBoxContainer: "composeBoxContainer", createPollButton: "createPollButton", geoButton: "geoButton", gifSearchButton: "gifSearchButton", scheduleOption: "scheduleOption", textareaPrefix: "tweetTextarea_", toolBar: "toolBar", scheduledTweetIndicator: "scheduledTweetIndicator", autoSaveStatus: "autoSaveStatus" };
        },
        515093: (e, t, n) => {
            n.d(t, { Z: () => B });
            var a = n(202784),
                i = n(325686),
                l = n(530732),
                o = n(96083),
                r = n(731708),
                s = n(154003),
                c = n(392237),
                d = n(111677),
                u = n.n(d),
                m = n(254990),
                p = n(388941),
                b = n(283119),
                f = n(159340),
                h = n(121791),
                g = n(144251),
                _ = n(187669),
                y = n(547416),
                E = n(952793),
                x = n(725516),
                w = n(683814),
                C = n(459660);
            const Z = a.createElement(m.default, null),
                v = a.createElement(p.default, null),
                T = a.createElement(b.default, null),
                k = a.createElement(f.default, null),
                S = a.createElement(h.default, null),
                P = a.createElement(g.default, null),
                I = u().b2df0574,
                B = (0, x.Z)((e) => {
                    const { analytics: t, broadcast: n, onBroadcastChange: c, ...d } = e,
                        { disabled: m, isAccountProtected: p, isReply: b, trustedFriendsTweetAuthorScreenName: f, value: h } = e,
                        g = p ? u().ccfc7453 : u().d4d17205;
                    let x = p ? u().df961844 : u().ce958ec8;
                    const B = p ? u().c7df589e : u().j65d7c72;
                    b && h === C.k.trusted_friends_tweet && (x = f ? g({ screenName: f }) : B);
                    const A = Object.freeze({ all: { icon: Z, label: u().i8ea6d4e }, community: { icon: T, label: u().a176d0d8 }, by_invitation: { icon: v, label: u().gc7e52ca }, subscribers: { icon: Z, label: u().feb7560a }, community_members: { icon: k, label: u().h257006e }, super_followers_exclusive: { icon: Z, label: u().ebe1d850 }, trusted_friends_tweet: { icon: S, label: x }, verified: { icon: P, label: u().b121464a }, premium: { icon: P, label: u().e69ada9e } }),
                        { icon: z, label: L } = A[h],
                        [D, M] = a.useState(!1),
                        O = a.useRef(null),
                        F = (0, E.hC)("communities_show_broadcast_option_in_composer") && h === C.k.community_members && !b;
                    (0, _.q)(() => {
                        h !== C.k.all && h !== C.k.community_members && h !== C.k.premium && M(!0);
                    });
                    const V = a.useCallback(
                            (e) => {
                                t.scribe({ element: "conversation_control", action: "click" });
                            },
                            [t],
                        ),
                        W = a.useCallback(() => {
                            c(!n);
                        }, [c, n]);
                    return a.createElement(i.Z, { style: R.educationContainer }, D ? a.createElement(y.Z, { buttonRef: O }) : null, a.createElement(i.Z, { style: R.controlsContainer }, F ? a.createElement(l.Z, { "aria-label": I, onClick: W, style: R.broadcastContainer }, a.createElement(o.Z, { checked: !!n }), a.createElement(r.ZP, { color: "gray700", size: "subtext1", weight: "bold" }, I)) : a.createElement(w.Z, d, a.createElement(s.ZP, { "aria-label": L, disabled: m, icon: z, onPress: V, ref: O, size: "xSmall", style: R.button, type: "brandText" }, L))));
                }),
                R = c.default.create((e) => ({ button: { paddingHorizontal: e.spacesPx.space8 + e.spacesPx.space2 }, educationContainer: { display: "inline-flex", flexDirection: "column" }, controlsContainer: { display: "inline-flex", flexDirection: "row", paddingBottom: e.spaces.space12 }, broadcastContainer: { flexDirection: "row", gap: e.spaces.space8, alignItems: "center", padding: e.spaces.space2, marginStart: e.spacesPx.space16 - e.spacesPx.space1 } }));
        },
        683814: (e, t, n) => {
            n.d(t, { Z: () => L });
            var a = n(807896),
                i = n(202784),
                l = n(157130),
                o = n(30899),
                r = n(325686),
                s = n(731708),
                c = n(143670),
                d = n(96083),
                u = n(154003),
                m = n(392237),
                p = n(111677),
                b = n.n(p),
                f = n(14284),
                h = n(531564),
                g = n(491831),
                _ = n(792618),
                y = n(511323),
                E = n(916910),
                x = n(443781),
                w = n(459660);
            const C = b().g6185a9e,
                Z = b().i00051cc,
                v = b().baffe39a,
                T = b().i9000126,
                k = b().dcaede8a,
                S = b().ad85cd2e,
                P = b().f19e4bfc,
                I = b().bf994ab2,
                B = b().e7b4b30a,
                R = b().cfd2f35e,
                A = m.default.create((e) => ({ root: { flexDirection: "column", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space4, borderRadius: e.borderRadii.xLarge }, popover: { maxWidth: 5 * e.spacesPx.space64 }, modal: { borderRadius: e.borderRadii.none }, title: { flexDirection: "column", paddingHorizontal: e.spaces.space16, marginBottom: e.spaces.space12 }, menuRow: { flexDirection: "row", paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, alignItems: "center", borderRadius: e.borderRadii.small }, disallowLinkRepliesCheck: { paddingHorizontal: e.spaces.space20, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space16 }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 } })),
                z = (e) => {
                    const { dismiss: t, isModal: n, midConversationTweet: a, value: l } = e,
                        { featureSwitches: o, userClaims: m } = i.useContext(x.rC),
                        p = (t) => () => {
                            e.onChange(t), e.dismiss();
                        },
                        z = o.isTrue("disallowed_reply_controls_enabled") && m.isAnyPremiumSubscriber(),
                        L = !!a,
                        D = L && !a?.entities?.user_mentions?.some((e) => e.id_str !== a.user.id_str);
                    let M = k;
                    return (
                        D ? (M = I) : L && (M = B),
                        i.createElement(
                            r.Z,
                            { "aria-describedby": "conversation-controls-details", "aria-labelledby": "conversation-controls-title", role: "dialog", style: [A.root, n ? A.modal : A.popover] },
                            i.createElement(r.Z, { style: A.title }, i.createElement(s.ZP, { id: "conversation-controls-title", weight: "bold" }, C), i.createElement(s.ZP, { color: "gray700", id: "conversation-controls-details", size: "body" }, Z)),
                            i.createElement(
                                r.Z,
                                null,
                                i.createElement(c.Z, { Icon: f.default, actionText: v, isSelected: w.k.all === l, onClick: p(w.k.all), selectable: !0, style: A.menuRow, withIconAsThumbnail: !0 }),
                                i.createElement(c.Z, { Icon: h.default, actionText: T, isSelected: w.k.community === l, onClick: p(w.k.community), selectable: !0, style: A.menuRow, withIconAsThumbnail: !0 }),
                                e.isActiveCreator && i.createElement(c.Z, { Icon: g.default, actionText: S, isSelected: w.k.subscribers === l, onClick: p(w.k.subscribers), selectable: !0, style: A.menuRow, withIconAsThumbnail: !0 }),
                                i.createElement(c.Z, { Icon: _.default, actionText: P, isSelected: w.k.verified === l, onClick: p(w.k.verified), selectable: !0, style: A.menuRow, withIconAsThumbnail: !0 }),
                                i.createElement(c.Z, { Icon: D ? y.default : E.default, actionText: M, isSelected: w.k.by_invitation === l, onClick: p(w.k.by_invitation), selectable: !0, style: A.menuRow, withIconAsThumbnail: !0 }),
                                z &&
                                    !a &&
                                    i.createElement(d.Z, {
                                        checked: e.disallowedReplyControls.includes(w.m.Links),
                                        label: b().ca6500a8,
                                        onChange:
                                            ((O = w.m.Links),
                                            () => {
                                                if (e.disallowedReplyControls.includes(O)) e.setDisallowedReplyControls(e.disallowedReplyControls.filter((e) => e !== O));
                                                else {
                                                    const t = new Set([...e.disallowedReplyControls]);
                                                    t.add(O), e.setDisallowedReplyControls([...t]);
                                                }
                                            }),
                                        style: A.disallowLinkRepliesCheck,
                                    }),
                                e.isModal ? i.createElement(u.ZP, { key: "button_cancel", onPress: t, size: "large", style: A.cancelButton, type: "primaryOutlined" }, R) : null,
                            ),
                        )
                    );
                    var O;
                },
                L = (e) => {
                    const { children: t, controlled: n = !1, disabled: r } = e,
                        [s, c] = i.useState(!1),
                        d = i.useCallback(() => c(!0), []),
                        u = i.useCallback(() => c(!1), []),
                        m = n ? (s ? l.Z.VISIBILITY_BEHAVIOR.forceVisible : l.Z.VISIBILITY_BEHAVIOR.forceHidden) : void 0,
                        p = "function" == typeof t ? t({ openPopover: d, closePopover: u }) : t;
                    return i.createElement(
                        o.Z,
                        {
                            disabled: r,
                            onDismiss: u,
                            renderContent: (t, n) => {
                                const { children: l, controlled: o, ...r } = e;
                                return i.createElement(z, (0, a.Z)({}, r, { dismiss: t, isModal: "sheet" === n }));
                            },
                            visibilityBehavior: m,
                        },
                        p,
                    );
                };
        },
        81233: (e, t, n) => {
            n.d(t, { P: () => r });
            var a = n(202784),
                i = n(154003),
                l = n(392237),
                o = n(487552);
            function r(e) {
                const { children: t, ...n } = e;
                return a.createElement(i.ZP, n, t, a.createElement(o.default, { style: s.icon }));
            }
            const s = l.default.create((e) => {
                const t = e.spaces.space16;
                return { icon: { marginStart: e.spaces.space4, width: t, height: t } };
            });
        },
        113392: (e, t, n) => {
            n.d(t, { Z: () => p });
            n(136728);
            var a = n(202784),
                i = n(154003),
                l = n(392237),
                o = n(111677),
                r = n.n(o),
                s = n(937450),
                c = n(725516);
            const d = r().a4993fa2,
                u = r().i0db46e6,
                m = l.default.create((e) => ({ icon: { color: e.colors.gray700 } })),
                p = ({ dmConversationId: e, enabled: t = !0, gifSearchKeySource: n, history: l, isWebRedesign: o, onPress: r, style: p, testID: b }) => {
                    const f = (0, c.z)(),
                        h = a.useCallback(() => {
                            r && r(), f.scribe({ element: "found_media_button", action: "click" }), l.push({ pathname: "/i/foundmedia/search", state: { gifSearchKeySource: n, dmConversationId: e } });
                        }, [e, f, n, l, r]);
                    return a.createElement(i.ZP, { "aria-label": d, disabled: !t, hoverLabel: { label: u }, icon: a.createElement(s.default, { style: o && m.icon }), onPress: h, size: "medium", style: p, testID: b, type: o ? "primaryText" : "brandText" });
                };
        },
        745475: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                i = n(731708),
                l = n(392237),
                o = n(111677),
                r = n.n(o),
                s = n(674306),
                c = n(566220),
                d = n(349745);
            const u = r().bfb895b1,
                m = l.default.create((e) => ({ icon: { fontSize: e.fontSizes.body, paddingEnd: e.spaces.space12, verticalAlign: "middle" } })),
                p = ({ onPress: e, scheduledFor: t, testID: n }) => {
                    const l = (0, c.R)()(),
                        o = (0, d.o3)(t),
                        r = !!o && (0, d.TO)(t) && !(0, d.Ul)(o, l) && !(0, d.bJ)(o, l),
                        p = Boolean(e);
                    return o && r ? a.createElement(i.ZP, { color: "gray700", onPress: e, size: "subtext2", testID: n, withInteractiveStyling: p }, a.createElement(s.default, { style: m.icon }), u({ date: (0, d.vh)(o), time: (0, d.g6)(o) })) : null;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.RichTextCompose-42018f38.1f218a1a.js.map
