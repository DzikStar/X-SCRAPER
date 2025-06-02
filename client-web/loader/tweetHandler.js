"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.tweetHandler"],
    {
        984932: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var o = n(807896),
                i = n(202784),
                r = n(530732),
                a = n(992942),
                s = n(530525),
                c = n(439592),
                l = n(868634),
                d = n(392237),
                u = n(111677),
                p = n.n(u),
                m = n(275450),
                h = n(632658),
                f = n(325686),
                w = n(67369),
                g = n(976145),
                v = n(731708),
                y = n(161335);
            const b = { adult_content: p().faf745fa, graphic_violence: p().b96e6682, other: p().e1b4e672 },
                C = p().acc48c15,
                I = p().a0e81a2e;
            function x({ children: e, media: t, possiblySensitive: n, shouldDisplaySensitiveMedia: o }) {
                const [r, a] = i.useState(!1),
                    s = (0, w.Mv)() ? "subtext2" : "body",
                    c = t.sensitive_media_warning;
                if (!o && !r && (n || c)) {
                    let t;
                    if (n) t = C({ formattedWarningList: [b.other] });
                    else if (c) {
                        const e = Object.keys(c)
                                .filter((e) => c[e])
                                .map((e, t) => {
                                    const n = b[e];
                                    return t > 0 ? n.toLowerCase() : n;
                                }),
                            n = (0, g.Z)(e);
                        t = C({ formattedWarningList: n });
                    }
                    return i.createElement(
                        f.Z,
                        { style: E.container },
                        i.createElement(f.Z, { style: E.media }, e),
                        i.createElement(
                            f.Z,
                            { style: E.warning },
                            i.createElement(y.default, { style: E.icon }),
                            i.createElement(v.ZP, { align: "center", color: "white", size: s }, t),
                            i.createElement(
                                v.ZP,
                                {
                                    color: "link",
                                    onPress: function () {
                                        a(!0);
                                    },
                                    size: s,
                                    style: E.show,
                                },
                                I,
                            ),
                        ),
                    );
                }
                return e;
            }
            const E = d.default.create((e) => ({ container: { overflow: "hidden" }, icon: { color: e.colors.whiteOnColor }, media: { filter: "blur(30px)" }, show: { cursor: "pointer" }, warning: { alignItems: "center", bottom: 0, end: 0, gap: e.spaces.space8, justifyContent: "center", padding: e.spaces.space8, position: "absolute", start: 0, top: 0 } }));
            var _ = n(988401);
            const k = p().i0db46e6,
                S = p().f93bb3ee;
            function Z({ height: e = 0, media: t, useImage: n = !1, width: d = 0, ...u }) {
                const p = t[0],
                    f = i.useMemo(() => ({ height: p.original_info?.height ?? e, url: p.media_url_https, width: p.original_info?.width ?? d }), [p, e, d]),
                    w = i.useCallback(({ resourceSelectionHandler: o, useMinimumData: u }) => i.createElement(r.Z, { link: p.expanded_url }, n ? i.createElement(a.Z, { source: p.media_url_https, style: { height: p.original_info?.height ?? e, width: p.original_info?.width ?? d } }) : i.createElement(s.Z, { "aria-label": p.ext_alt_text ?? "", aspectMode: c.Z.SQUARE, image: f, onVariantSelection: o, previewMode: u }), !u && "animated_gif" === p.type && i.createElement(l.ZP, { bold: !0, style: T.gifLabel }, k), !u && "video" === p.type && i.createElement(l.ZP, { style: T.videoTime }, (0, _.F)(p.video_info.duration_millis ?? 0)), !u && t.length > 1 && i.createElement(m.default, { style: T.layersIcon })), [f, p, t, e, d, n]);
                return i.createElement(x, (0, o.Z)({ media: p }, u), i.createElement(h.Z, { acceptLabel: S, renderContent: w, resourceId: f.url }));
            }
            const T = d.default.create((e) => ({ gifLabel: { bottom: e.spaces.space8, position: "absolute", start: e.spaces.space8 }, layersIcon: { bottom: e.spaces.space8, color: e.colors.whiteOnColor, end: e.spaces.space8, height: e.spaces.space20, position: "absolute", width: e.spaces.space20 }, videoTime: { bottom: e.spaces.space8, position: "absolute", start: e.spaces.space8 } }));
        },
        988401: (e, t, n) => {
            n.d(t, { F: () => o });
            const o = (e) => i(Math.round(e / 1e3)),
                i = (e) => {
                    const { hours: t, minutes: n, seconds: o } = r(e),
                        i = o < 10 ? `0${o}` : o,
                        a = n < 10 && t ? `0${n}` : n;
                    return t ? `${t}:${a}:${i}` : `${a}:${i}`;
                },
                r = (e) => ({ hours: Math.floor(e / 3600), minutes: Math.floor((e % 3600) / 60), seconds: Math.floor(e % 60) });
        },
        128624: (e, t, n) => {
            n.r(t), n.d(t, { default: () => h });
            var o = n(459643),
                i = n(351322),
                r = n(202784),
                a = n(235902),
                s = n(392237),
                c = n(301758);
            const l = { isCarouselItem: () => !0 },
                d = ({ entry: e }) => {
                    const { forwardPivot: t, id: n, nudges: o } = e.content;
                    return r.createElement(a.ZP.Provider, { value: l }, r.createElement(c.Z, { forwardPivotInfo: t, isCondensed: !0, nudges: o, style: u.condensedTweet, tweetId: n }));
                },
                u = s.default.create((e) => ({ condensedTweet: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginTop: 0, marginBottom: e.spaces.space8, marginEnd: e.spaces.space2, marginStart: e.spaces.space12, height: "155px", width: "320px" } })),
                p = r.memo(d);
            var m = n(438965);
            const h = (e) => i.iH({ component: p, divider: e.divider || {}, defaultScribeNamespace: m.Oj, getScribeDataItem: m.Hx, isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, m.QO)(!0) }).getHandler(() => ({ ...e }));
        },
        438965: (e, t, n) => {
            n.d(t, { FE: () => r, Hx: () => c, Oj: () => i, P3: () => l, QO: () => s, j: () => a });
            var o = n(942893);
            const i = { component: "tweet" },
                r = { component: "thread" },
                a = Object.freeze({ CONVERSATION: "conversation", TIMELINE: "timeline" }),
                s =
                    (e = !1) =>
                    (t) => {
                        const { conversationPosition: n, conversationTreeMetadata: o } = t;
                        return !(e || (n && !n.isEnd && (!o || !1 !== o.descendantConnector || 0 !== o.indents.filter((e) => "line" === e.displayType).length)));
                    },
                c = (e) => o.Z.getTweetURTEntryItem(e),
                l = (e, t, n) => {
                    const o = ["descendant", "ancestor"].includes(n?.position) && !["profile", "me"].includes(e.page) ? ("descendant" === n?.position ? "conversation_descendants" : "conversation_ancestors") : e.section;
                    return { ...e, section: o, component: t?.component || e.component, action: t?.action || e.action, element: t?.element || e.element };
                };
        },
        308016: (e, t, n) => {
            n.d(t, { $: () => r });
            var o = n(202784),
                i = n(372703);
            const r = (e, t, n, r, a) => {
                const s = r?.length,
                    c = a && !s,
                    l = o.useCallback(
                        (o) => {
                            t({ entry: n, feedbackKeys: [i.Wb], isDismissibleFeedback: o }), e.scribe({ element: i.S4(i.SB, n), action: "click" });
                        },
                        [e, n, t],
                    );
                return { onTweetDismiss: c ? l : void 0 };
            };
        },
        139917: (e, t, n) => {
            n.r(t), n.d(t, { default: () => g });
            var o = n(459643),
                i = n(351322),
                r = n(202784),
                a = n(984932),
                s = n(267077),
                c = n(668214),
                l = n(38562),
                d = n(836255);
            const u = (0, s.Z)((e) => ({ current: e })),
                p = d.Z.createHydratedTweetSelectorWeakMap((e, t) => u(t.tweetId));
            const m = (0, c.Z)().propsFromState(() => ({ shouldDisplaySensitiveMedia: l.f1, tweet: p }))(function ({ shouldDisplaySensitiveMedia: e, tweet: t }) {
                const n = t?.extended_entities?.media,
                    o = t?.possibly_sensitive;
                return n ? r.createElement(a.Z, { media: n, possiblySensitive: o, shouldDisplaySensitiveMedia: e }) : null;
            });
            function h({ entry: e }) {
                const { id: t } = e.content;
                return r.createElement(m, { tweetId: t });
            }
            var f = n(438965);
            const w = (0, o.Z)(!0),
                g = () => i.iH({ component: h, defaultScribeNamespace: f.Oj, getScribeDataItem: f.Hx, isFocusable: w }).getHandler();
        },
        302387: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S });
            var o = n(459643),
                i = n(351322),
                r = n(202784),
                a = n(725516),
                s = n(807896),
                c = n(325686),
                l = n(782261),
                d = n(284702),
                u = n(952428),
                p = n(823161),
                m = n(392237),
                h = n(123751),
                f = n(310453);
            const w = 9 / 16;
            function g() {
                return null;
            }
            function v({ handleClick: e, isCarouselItem: t, tweet: n }) {
                const o = r.useRef(null),
                    i = l.Z.getFirstVideo(n);
                if (!i) return null;
                const a = h.Z.forTweet(n.id_str),
                    m = d.Z.extractVideoProps(a, i);
                return r.createElement(
                    u.Z,
                    {
                        link: i.expanded_url,
                        onClick: e,
                        onHoverIn: function () {
                            o.current?.playPreview();
                        },
                        style: [y.container, t && y.carouselItem],
                        withInteractiveStyling: !t,
                    },
                    r.createElement(
                        c.Z,
                        { style: y.frame },
                        r.createElement(
                            f.Z,
                            (0, s.Z)({}, m, {
                                aspectRatio: w,
                                forceLoop: !0,
                                setPlayer: function (e) {
                                    o.current = e;
                                },
                                uiStack: g,
                            }),
                        ),
                        r.createElement(p.default, { size: "xLarge", style: y.avatar, uri: n.user.profile_image_url_https, withLink: !1 }),
                    ),
                );
            }
            const y = m.default.create((e) => ({ avatar: { position: "absolute", bottom: e.spaces.space16, start: e.spaces.space16 }, container: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%" }, carouselItem: { marginVertical: e.componentDimensions.gutterVertical, paddingHorizontal: 0, paddingVertical: 0, width: 250 }, frame: { aspectRatio: w, borderRadius: e.borderRadii.medium, overflow: "hidden", pointerEvents: "none", position: "relative" } }));
            var b = n(125363),
                C = n(38562),
                I = n(836255);
            const x = function ({ handleClick: e, isCarouselItem: t, tweetId: n }) {
                const o = (0, b.v9)(C.f1),
                    i = (0, b.v9)((e) => I.Z.selectHydratedMemoized(e, n));
                return i ? r.createElement(v, { handleClick: e, isCarouselItem: t, shouldDisplaySensitiveMedia: o, tweet: i }) : null;
            };
            function E({ entry: e, isCarouselItem: t }) {
                const { id: n } = e.content,
                    o = (0, a.z)(),
                    i = r.useCallback(() => {
                        o.scribe({ action: "click", element: "video", data: { module_id: e.content.id, position: e.position, view_type: "vertical" } });
                    }, [o, e.content.id, e.position]);
                return r.createElement(x, { handleClick: i, isCarouselItem: t, tweetId: n });
            }
            const _ = r.memo(E);
            var k = n(438965);
            const S = (e) => i.iH({ component: _, divider: e.divider || {}, defaultScribeNamespace: k.Oj, getScribeDataItem: k.Hx, isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, k.QO)(!0) }).getHandler(() => ({ ...e }));
        },
        63552: (e, t, n) => {
            n.r(t), n.d(t, { default: () => R });
            var o = n(459643),
                i = n(351322),
                r = n(202784),
                a = n(725516),
                s = n(807896),
                c = n(325686),
                l = n(782261),
                d = n(284702),
                u = n(952428),
                p = n(366635),
                m = n(731708),
                h = n(451051),
                f = n(392237),
                w = n(111677),
                g = n.n(w),
                v = n(123751),
                y = n(310453);
            const b = 16 / 9,
                C = g().ac4c73d8;
            function I() {
                return null;
            }
            function x({ handleClick: e, isCarouselItem: t, tweet: n }) {
                const o = r.useRef(null),
                    i = (function (e) {
                        if (e.card) {
                            const t = e.card.binding_values.broadcast_id?.string_value ?? "",
                                n = e.card.binding_values.broadcast_media_key?.string_value ?? "",
                                o = e.card.binding_values.broadcast_height?.string_value,
                                i = e.card.binding_values.broadcast_thumbnail?.image_value.url,
                                r = e.card.binding_values.broadcast_width?.string_value,
                                a = o && i && r ? { height: parseInt(o, 10), url: i, width: parseInt(r, 10) } : void 0,
                                s = { contentId: n, videoId: v.Z.forBroadcast(t), variants: [] };
                            return { link: e.card?.binding_values?.broadcast_url?.string_value, title: e.card?.binding_values.broadcast_title?.string_value, videoProps: { "aria-label": C, aspectRatio: b, poster: a, source: s, videoType: "video" } };
                        }
                        const t = l.Z.getFirstVideo(e);
                        if (t) return { link: t.expanded_url, title: t.additional_media_info?.title, videoProps: d.Z.extractVideoProps(v.Z.forTweet(e.id_str), t) };
                    })(n);
                if (!i) return null;
                return r.createElement(
                    u.Z,
                    {
                        link: i.link,
                        onClick: e,
                        onHoverIn: function () {
                            o.current?.playPreview();
                        },
                        style: [E.container, t && E.carouselItem],
                        withInteractiveStyling: !t,
                    },
                    r.createElement(
                        c.Z,
                        { style: E.frame },
                        r.createElement(
                            y.Z,
                            (0, s.Z)({}, i.videoProps, {
                                aspectRatio: b,
                                forceLoop: !0,
                                setPlayer: function (e) {
                                    o.current = e;
                                },
                                uiStack: I,
                            }),
                        ),
                    ),
                    r.createElement(c.Z, { style: E.content }, r.createElement(p.Z, { affiliateBadgeInfo: n.user.highlightedLabel, isBlueVerified: n.user.is_blue_verified, isVerified: n.user.verified, name: n.user.name, profileImageUrl: n.user.profile_image_url_https, screenName: n.user.screen_name, verifiedType: n.user.verified_type, withLink: !0 }), i.title ? r.createElement(m.ZP, { numberOfLines: 2 }, i.title) : n.full_text ? r.createElement(h.Z, { displayTextRange: n.display_text_range, entities: n.entities, isCondensed: !0, numberOfLines: 2, text: n.full_text }) : null),
                );
            }
            const E = f.default.create((e) => ({ container: { gap: e.spaces.space8, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%" }, content: { gap: e.spaces.space8 }, carouselItem: { marginVertical: e.componentDimensions.gutterVertical, paddingHorizontal: 0, paddingVertical: 0, width: 340 }, frame: { aspectRatio: b, borderRadius: e.borderRadii.medium, overflow: "hidden", pointerEvents: "none" } }));
            var _ = n(125363),
                k = n(38562),
                S = n(836255);
            const Z = function ({ handleClick: e, isCarouselItem: t, tweetId: n }) {
                const o = (0, _.v9)(k.f1),
                    i = (0, _.v9)((e) => S.Z.selectHydratedMemoized(e, n));
                return i ? r.createElement(x, { handleClick: e, isCarouselItem: t, shouldDisplaySensitiveMedia: o, tweet: i }) : null;
            };
            function T({ entry: e, isCarouselItem: t }) {
                const { id: n } = e.content,
                    o = (0, a.z)(),
                    i = r.useCallback(() => {
                        o.scribe({ action: "click", element: "video", data: { module_id: e.content.id, position: e.position, view_type: "horizontal" } });
                    }, [o, e.content.id, e.position]);
                return r.createElement(Z, { handleClick: i, isCarouselItem: t, tweetId: n });
            }
            const P = r.memo(T);
            var M = n(438965);
            const R = (e) => i.iH({ component: P, divider: e.divider || {}, defaultScribeNamespace: M.Oj, getScribeDataItem: M.Hx, isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, M.QO)(!0) }).getHandler(() => ({ ...e }));
        },
        987791: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            var o = n(459643),
                i = n(351322),
                r = n(202784),
                a = n(235902),
                s = n(392237),
                c = n(301758);
            const l = ({ entry: e, isCarouselItem: t, isCondensed: n }) => {
                    const { forwardPivot: o, id: i, nudges: s } = e.content,
                        l = r.useMemo(() => ({ isCarouselItem: () => t }), [t]);
                    return r.createElement(a.ZP.Provider, { value: l }, r.createElement(c.Z, { forwardPivotInfo: o, isCondensed: n, nudges: s, style: t ? d.carouselQuoteTweet : d.quotedTweet, tweetId: i }));
                },
                d = s.default.create((e) => ({ quotedTweet: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginTop: 0, marginBottom: e.componentDimensions.gutterVertical }, carouselQuoteTweet: { marginTop: 0, marginBottom: 0, marginEnd: 0, marginStart: e.spaces.space12, width: "312px", height: "172px" } })),
                u = r.memo(l);
            var p = n(438965);
            const m = (e) => i.iH({ component: u, divider: e.divider || {}, defaultScribeNamespace: p.Oj, getScribeDataItem: p.Hx, isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, p.QO)(!!e.isCarouselItem) }).getHandler(() => ({ ...e }));
        },
        62938: (e, t, n) => {
            n.r(t), n.d(t, { default: () => B });
            var o = n(459643),
                i = n(351322),
                r = n(202784),
                a = n(891198),
                s = n(650028),
                c = n(111677),
                l = n.n(c),
                d = n(807896),
                u = n(325686),
                p = n(952428),
                m = n(310088),
                h = n(392237),
                f = n(263272),
                w = n(293723),
                g = n(516951),
                v = n(443781),
                y = n(988566),
                b = n(731708),
                C = n(157130);
            const I = h.default.create((e) => ({ hoverText: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, popover: { maxWidth: `calc(${e.spaces.space64} * 4)`, minWidth: e.spaces.space64 } })),
                x = (e) => {
                    const { children: t, hoverText: n } = e;
                    return r.createElement(C.Z, { contentStyle: I.popover, enableHover: !0, renderContent: () => r.createElement(b.ZP, { style: I.hoverText }, n), withArrow: !0 }, t);
                };
            var E = n(808692),
                _ = n(782261),
                k = n(71620),
                S = n(668214),
                Z = n(836255);
            const T = (e, t) => t.tweetId,
                P = (0, S.Z)()
                    .propsFromState(() => ({ tweet: Z.Z.createHydratedTweetSelector(T) }))
                    .adjustStateProps(({ tweet: e }) => ({ originalTweet: (e && _.Z.getOriginalTweet(e)) || e, tweet: e }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("TWEET_SELECT_CONTEXT") })),
                M = l().h6beb5fb,
                R = (e) => e && e.preventDefault();
            class F extends r.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderDisabledTweet = (e) => r.createElement(u.Z, { style: D.root }, this._renderContent(), r.createElement(u.Z, { style: D.disabledTweetMask }), r.createElement(u.Z, { style: [D.disabledIconWrapper, D.iconMargins] }, r.createElement(x, { hoverText: e }, r.createElement(f.default, { style: D.icon }), r.createElement(u.Z, { style: D.disabledTweetMask }))))),
                        (this._renderContent = () => {
                            const { replyContext: e, tweet: t, withActions: n } = this.props;
                            if (t) {
                                const o = (0, y.D$)(t, this.context.viewerUserId);
                                return r.createElement(u.Z, { style: D.tweet }, r.createElement(E.ZP, { linkableQuotedTweet: !0, onAnalyticsClick: g.Z, onAvatarClick: g.Z, onEngagementsClick: g.Z, onEntityClick: g.Z, onMediaClick: R, onReplyContextClick: g.Z, preventVideoPlayback: !0, replyContext: e, socialContext: o, tweet: t, withActions: n, withActionsDisabled: !0, withSocialContext: !0 }));
                            }
                            return null;
                        }),
                        (this._renderSelectIcon = (e) => (e ? r.createElement(w.default, { style: [D.icon, D.iconMargins, D.iconCheckmark] }) : r.createElement(f.default, { style: [D.icon, D.iconMargins] }))),
                        (this._handleOnClick = () => {
                            const { onClick: e, originalTweet: t, tweetId: n } = this.props;
                            if (e) {
                                e(t?.id_str || n);
                            }
                        });
                }
                render() {
                    const { disabledMessage: e, isPartOfDraggedSelection: t, isSelected: n, showDragCount: o, tweet: i, withSelectIcon: a } = this.props;
                    return e ? this._renderDisabledTweet(e) : i ? r.createElement(p.Z, { onPress: this._handleOnClick, style: D.root }, this._renderDragCount(o), this._renderContent(), a ? this._renderSelectIcon(n) : null, t && r.createElement(u.Z, { style: D.disabledTweetMask })) : null;
                }
                _renderDragCount(e) {
                    return e < 2 ? null : r.createElement(u.Z, { style: D.countBadgeContainer }, r.createElement(m.Z, { count: e, standalone: !0, style: D.countBadge, truncatedCountFormatter: M, unreadCountLabel: () => "", withBorder: !1 }));
                }
            }
            (F.contextType = v.rC), (F.defaultProps = { replyContext: s.ZP.ReplyContextTypes.Isolated, withActions: !0, withSelectIcon: !0, showDragCount: 0, isPartOfDraggedSelection: !1, isSelected: !1 });
            const D = h.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexDirection: "row" }, tweet: { flex: 1 }, disabledTweetMask: { ...h.default.absoluteFillObject, backgroundColor: e.colors.navigationBackground, opacity: "50%" }, disabledIconWrapper: { height: "100%" }, icon: { color: e.colors.gray700 }, iconMargins: { marginTop: e.spaces.space12, marginEnd: e.spaces.space12 }, iconCheckmark: { color: e.colors.green500 }, countBadge: { height: e.spaces.space32, width: e.spaces.space32 }, countBadgeContainer: { height: e.spaces.space32, width: e.spaces.space32, position: "absolute", end: `-${e.spaces.space16}`, top: `-${e.spaces.space16}` } })),
                H = r.forwardRef((e, t) => r.createElement(F, (0, d.Z)({}, e, { ref: t }))),
                O = P.forwardRef(H),
                A = ({
                    entry: {
                        content: { id: e },
                        index: t,
                    },
                    maxSelection: n,
                    onClick: o,
                    selectedTweetIds: i,
                    withSelectIcon: c,
                }) => {
                    let d = "";
                    const u = l().g034e6f1;
                    return void 0 !== n && i && i.length >= n && (i.includes(e) || (d = u({ count: a.ZP.getFormattedCount(n) }))), r.createElement(O, { disabledMessage: d, index: t, isSelected: i?.includes(e), onClick: o, replyContext: s.ZP.ReplyContextTypes.None, tweetId: e, withActions: !1, withSelectIcon: c });
                },
                N = r.memo(A),
                B = (e) => i.iH({ component: N, isClickable: (0, o.Z)(!0), isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, o.Z)(!0) }).getHandler(() => ({ ...e }));
        },
        473310: (e, t, n) => {
            n.r(t), n.d(t, { default: () => _ });
            var o = n(459643),
                i = n(351322),
                r = n(807896),
                a = n(202784),
                s = n(107267),
                c = n(650028),
                l = n(370751),
                d = n(293115),
                u = n(988566),
                p = n(788993),
                m = n(725516),
                h = n(114054),
                f = n(438965),
                w = n(308016),
                g = n(668214),
                v = n(131290),
                y = n(466380);
            const b = (e, { module: t }) => {
                    const n = t.selectMetadata(e);
                    return n?.reader_mode_config?.is_reader_mode_available || !1;
                },
                C = (e, { entry: t }) => (t.content.socialContext?.topicContext ? y.Z.select(e, t.content.socialContext.topicContext.topicId) : void 0),
                I = (0, g.Z)()
                    .propsFromState(() => ({ showReplyFilterInlineCallout: v.fh, readerModeAvailable: b, topic: C }))
                    .propsFromActions(({ module: e }) => ({ applyFeedbackAction: e.applyFeedbackAction })),
                x = (0, l.Z)([p.Z.ReplyPin]),
                E = I(({ applyFeedbackAction: e, createAdditionalProps: t = (0, o.Z)({}), dismissable: n = !1, hideReplyContextMode: i, showReplyFilterInlineCallout: l, entry: p, feedbackItems: g, readerModeAvailable: v, topic: y }) => {
                    const b = (0, s.useHistory)(),
                        C = (0, m.z)(),
                        {
                            content: { conversation_annotation: I, forwardPivot: E, hasModeratedReplies: _, id: k, innerForwardPivot: S, innerNudges: Z, innerTombstoneInfo: T, nudges: P, replyBadge: M, socialContext: R, topicFollowPrompt: F },
                            conversationPosition: D,
                            referringContext: { contextTweetId: H, contextualClientEventInfo: O, hideMedia: A, promotedContent: N, socialContext: B, topicFollowPrompt: L } = {},
                        } = p,
                        { onTweetDismiss: z } = (0, w.$)(C, e, p, g, n),
                        V = a.useMemo(() => (0, f.P3)(C.contextualScribeNamespace, O, D), [C.contextualScribeNamespace, O, D]);
                    let j;
                    i && (j = c.ZP.ReplyContextTypes.None);
                    const Q = a.useMemo(() => (0, u.Du)({ socialContext: R, topic: y }), [R, y]),
                        U = t(p, { applyFeedbackAction: e }),
                        $ = !!Q && x.has(Q.contextType);
                    return (
                        $ && (U.socialContext = Q || B),
                        a.useEffect(() => {
                            const { location: e } = b;
                            $ && e.state?.socialContext && b.replace({ ...e, state: { ...e.state, socialContext: void 0 } });
                        }, [b, $]),
                        a.createElement(d.nO, { namespace: V }, a.createElement(h.Z9, (0, r.Z)({ contextTweetId: H, conversationAnnotation: I, feedbackItems: g, forwardPivotInfo: E, hasModeratedReplies: _, innerForwardPivotInfo: S, innerNudges: Z, nudges: P, onTweetDismiss: z, promotedContent: N, quotedTweetTombstoneInfo: T, readerModeAvailable: v, replyBadge: M, replyContext: j, showReplyFilterInlineCallout: l, socialContext: Q || B, topicFollowPrompt: F || L, tweetId: k, withActions: !0, withInlineMedia: !A, withSocialContext: !0 }, U)))
                    );
                }),
                _ = (e) => i.iH({ component: E, divider: e.divider || {}, defaultScribeNamespace: f.Oj, getScribeDataItem: f.Hx, isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, f.QO)(!1) }).getHandler(() => ({ ...e }));
        },
        871986: (e, t, n) => {
            n.r(t), n.d(t, { default: () => M });
            var o = n(459643),
                i = n(351322),
                r = n(807896),
                a = n(202784),
                s = n(650028),
                c = n(844685),
                l = n(111677),
                d = n.n(l),
                u = n(293115),
                p = n(988566),
                m = n(628511),
                h = n(263863),
                f = n(23679),
                w = n(725516),
                g = n(400196),
                v = n(438965),
                y = n(308016),
                b = n(668214),
                C = n(204744),
                I = n(466380),
                x = n(324260);
            const E = (e, { entry: t, module: n }) => n.selectIsUnread(e, t.entryId),
                _ = (e, { entry: t }) => (t.content.socialContext?.topicContext ? I.Z.select(e, t.content.socialContext.topicContext.topicId) : void 0),
                k = (e, t) => {
                    const { entry: n, module: o } = t,
                        i = n.itemMetadata?.feedbackInfo?.feedbackKeys || [],
                        r = o.selectFeedbackActions(e);
                    let a = x.C.NotPinnable;
                    return (
                        i.forEach((e) => {
                            r[e]?.richBehavior?.replyPinState && (a = r[e].richBehavior.replyPinState);
                        }),
                        a
                    );
                },
                S = (0, b.Z)()
                    .propsFromState(() => ({ isUnread: E, topic: _, pinnedReplyState: k }))
                    .propsFromActions(({ module: e }) => ({ saveAsRecentSearch: C.DI, applyFeedbackAction: e.applyFeedbackAction, applyReactionInstructions: e.applyReactionInstructions })),
                Z = d().i2e0d584,
                T = ({ applyFeedbackAction: e, applyReactionInstructions: t, bookmarkFolderId: n, createAdditionalProps: i = (0, o.Z)({}), dismissable: l = !1, displayBlocked: d, entry: b, feedbackItems: C, hideConversationControlsEducationText: I = !1, hideExclusivityInfoEducationTextInReplies: x = !1, hideHighlightedUserLabel: E = !1, hideReplyContextMode: _, hideTrustedFriendsEducationTextInReplies: k = !1, isCompact: S = !1, isReaderMode: T = !1, isUnread: P, pinnedReplyState: M, saveAsRecentSearch: R, shouldSelfThreadIncludeAvatar: F = !1, shouldStoreTypeaheadItem: D, showWithheldBannerOnMyTweets: H = !1, topic: O, tweetTextSize: A, withActionsDisabled: N = !1, withMuteConversation: B = !1, withRemoveFromBookmarks: L = !1, withSelfThread: z = !1, withUserPresence: V = !1, withUnreadStyles: j = !1 }) => {
                    const Q = (0, w.z)(),
                        {
                            content: { conversation_annotation: U, displayType: $, forwardPivot: W, hasModeratedReplies: q, highlights: K, id: Y, innerForwardPivot: G, innerNudges: X, innerTombstoneInfo: J, nudges: ee, promotedMetadata: te, replyBadge: ne, ruxContext: oe, socialContext: ie, topicFollowPrompt: re, tweetContext: ae },
                            conversationPosition: se,
                            conversationTreeMetadata: ce,
                            itemMetadata: le,
                            referringContext: { contextTweetId: de, contextualClientEventInfo: ue, focalTweetId: pe, hideMedia: me, socialContext: he, topicFollowPrompt: fe } = {},
                        } = b,
                        we = !!se,
                        ge = se && se.isStart && se.isEnd,
                        ve = se && !se.isStart;
                    let ye;
                    T && (ye = s.ZP.ReplyContextTypes.None), _ === v.j.CONVERSATION && we && (ye = s.ZP.ReplyContextTypes.None), _ === v.j.TIMELINE && we && !ge && (ye = s.ZP.ReplyContextTypes.None);
                    const be = a.useCallback(() => t({ entry: b, triggerName: f.K.ON_LIKE }), [t, b]),
                        Ce = a.useMemo(() => (C && !T ? { markNotInterestedTopic: C.find((e) => e.feedbackKey === (0, m.aN)(b.entryId)) } : void 0), [C, b.entryId, T]),
                        { onTweetDismiss: Ie } = (0, y.$)(Q, e, b, C, l),
                        xe = a.useMemo(() => (0, v.P3)(Q.contextualScribeNamespace, ue, se), [Q.contextualScribeNamespace, ue, se]),
                        Ee = a.useMemo(() => (0, p.Du)({ socialContext: ie, topic: O }), [ie, O]),
                        _e = a.useMemo(() => i(b, { applyFeedbackAction: e }), [e, b, i]);
                    return a.createElement(u.nO, { namespace: xe }, a.createElement(a.Fragment, null, $ === h.Z.EmphasizedPromotedTweet ? a.createElement(c.Z, { text: Z }) : null, a.createElement(g.Z9, (0, r.Z)({ bookmarkFolderId: n, contextTweetId: de, contextualClientEventInfo: le.clientEventInfo, conversationAnnotation: U, conversationPosition: se, conversationTreeMetadata: ce, displayBlocked: d, displayPromotedContent: !0, feedbackItems: C, focalTweetId: pe, forwardPivotInfo: W, hasModeratedReplies: q, hideConversationControlsEducationText: I || ve, hideExclusivityInfoEducationTextInReplies: x, hideHighlightedUserLabel: E, hideTrustedFriendsEducationTextInReplies: k, hitHighlights: K?.textHighlights, injectedFeedbackItem: Ce, innerForwardPivotInfo: G, innerNudges: X, isCompact: S, isReaderMode: T, isUnread: j ? P : void 0, nudges: ee, onLike: be, onTweetDismiss: Ie, pinnedReplyState: M, quotedTweetTombstoneInfo: J, replyBadge: ne, replyContext: ye, ruxContext: oe, saveAsRecentSearch: R, shouldSelfThreadIncludeAvatar: F, shouldStoreTypeaheadItem: D, showWithheldBannerOnMyTweets: H, socialContext: Ee || he, topicFollowPrompt: re || fe, tweetContext: ae, tweetId: Y, tweetTextSize: A, urtPromotedContent: te, withActions: !0, withActionsDisabled: N, withInlineMedia: !me || T, withMuteConversation: B, withRemoveFromBookmarks: L, withSelfThread: z, withSocialContext: !0, withUserPresence: V }, _e))));
                },
                P = S(a.memo(T)),
                M = (e) => i.iH({ component: P, divider: e.divider || {}, defaultScribeNamespace: e.isReaderMode ? v.FE : v.Oj, getScribeDataItem: v.Hx, isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, v.QO)(e.isReaderMode) }).getHandler(() => ({ ...e }));
        },
        23679: (e, t, n) => {
            n.d(t, { K: () => o });
            const o = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        204744: (e, t, n) => {
            n.d(t, { DI: () => b, H$: () => p, OB: () => C, Ww: () => d, YB: () => u, hj: () => w, qF: () => v });
            n(901951);
            var o = n(499627),
                i = n(390387);
            const r = "recentSearches",
                a = "rweb.recentSearches",
                s =
                    (e) =>
                    (t, n, { userPersistence: o }) =>
                        o.set(a, { recentSearches: e }).catch(() => {
                            Promise.resolve();
                        }),
                c = (e, t) => {
                    let n = [];
                    if (e.user) {
                        const o = e.user;
                        n = t.filter((e) => e.event || e.keyword || e.list || e.topic || (e.user && e.user.id !== o.id));
                    } else if (e.event) {
                        const o = e.event;
                        n = t.filter((e) => e.keyword || e.list || e.topic || e.user || (e.event && e.event.id !== o.id));
                    } else if (e && e.keyword) {
                        const o = e.keyword;
                        n = t.filter((e) => e.event || e.list || e.topic || e.user || (e.keyword && e.keyword.query !== o.query));
                    } else if (e.list) {
                        const o = e.list;
                        n = t.filter((e) => e.event || e.keyword || e.topic || e.user || (e.list && e.list.id !== o.id));
                    } else if (e.topic) {
                        const o = e.topic;
                        n = t.filter((e) => e.event || e.keyword || e.list || e.user || (e.topic && e.topic.id !== o.id));
                    }
                    return n;
                },
                l = { fetched: !1, recentSearches: [] };
            const d = (e) => e[r].recentSearches,
                u = (e) => d(e)[0] || null,
                p = (e) => e[r].fetched,
                m = "rweb/recentSearches/INIT_FROM_CACHE",
                h = (e) => ({ type: m, payload: e }),
                f = "rweb/recentSearches/REMOVE_QUERY",
                w =
                    (e) =>
                    (t, n, { userPersistence: o }) => {
                        t({ payload: e, type: f });
                        const r = n(),
                            a = d(r);
                        return (0, i.Qb)(r) ? t(s(a)) : Promise.resolve();
                    },
                g = "rweb/recentSearches/CLEAR_ALL",
                v =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        e({ type: g });
                        const o = t(),
                            r = d(o);
                        return (0, i.Qb)(o) ? e(s(r)) : Promise.resolve();
                    },
                y = "rweb/recentSearches/ADD_QUERY",
                b =
                    (e) =>
                    (t, n, { userPersistence: o }) => {
                        t({ payload: e, type: y });
                        const r = n(),
                            a = d(r);
                        return (0, i.Qb)(r) ? t(s(a)) : Promise.resolve();
                    },
                C =
                    () =>
                    (e, t, { userPersistence: n }) => {
                        const o = t();
                        return p(o)
                            ? Promise.resolve()
                            : e((e, t, { userPersistence: n }) => {
                                  const o = t();
                                  return (0, i.Qb)(o)
                                      ? n
                                            .get(a)
                                            .then((t) => {
                                                e(h(t));
                                            })
                                            .catch(() => {
                                                e(h());
                                            })
                                      : (e(h()), Promise.resolve());
                              });
                    };
            o.Z.register({
                [r]: function (e = l, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case y: {
                            const n = t.payload,
                                o = n ? c(n, e.recentSearches) : [];
                            return o.length > 49 && o.splice(49, 1), n && o.unshift(n), { ...e, recentSearches: o };
                        }
                        case f: {
                            const n = t.payload,
                                o = n ? c(n, e.recentSearches) : [];
                            return { ...e, recentSearches: o };
                        }
                        case g:
                            return { fetched: !0, recentSearches: [] };
                        case m:
                            return { ...e, ...t.payload, fetched: !0 };
                        default:
                            return e;
                    }
                },
            });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.tweetHandler.05d2a5ca.js.map
