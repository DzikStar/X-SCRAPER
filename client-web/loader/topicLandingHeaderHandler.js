"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.topicLandingHeaderHandler"],
    {
        336866: (e, t, n) => {
            n.r(t), n.d(t, { default: () => p });
            var o = n(942893),
                i = n(351322),
                r = n(202784),
                a = n(725516),
                l = n(217179);
            const s = ({ entry: { content: e } }) => {
                    const t = (0, a.z)();
                    return (
                        r.useEffect(() => {
                            t.scribeAction("impression");
                        }, [t]),
                        r.createElement(l.default, { displayType: e.displayType, facepile: e.facepile, onFollowHeaderOffscreen: e.onFollowHeaderOffscreen, topicId: e.topicId, topicLandingContext: e.topicLandingContext })
                    );
                },
                c = r.memo(s),
                p = i.iH({ component: c, getScribeDataItem: ({ content: { topicId: e }, itemMetadata: { clientEventInfo: t } }) => o.Z.forTopic(e, t) }).getHandler();
        },
        217179: (e, t, n) => {
            n.r(t), n.d(t, { TopicHeader: () => M, default: () => V });
            var o = n(202784),
                i = n(325686),
                r = n(646496),
                a = n(537392),
                l = n(786475),
                s = n(392237),
                c = n(674132),
                p = n.n(c),
                d = n(791632),
                m = n(321835),
                u = n(946409),
                h = n(618566),
                f = n(638090),
                g = n(500002),
                w = n(443781),
                b = n(265196),
                x = n(233391),
                y = n(863934),
                C = n(288955),
                _ = n(177371),
                E = n(459679),
                Z = n(71620),
                S = n(668214),
                v = n(466380),
                T = n(919022);
            const F = (e, t) => v.Z.select(e, t.topicId),
                I = (e, t) => T.ZP.selectMany(e, t.facepile?.userIds || []),
                k = (e, t) => {
                    const n = I(e, t);
                    return (0, E.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                B = (0, S.Z)()
                    .propsFromState(() => ({ topic: F, users: k }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("TOPIC_HEADER"), follow: v.Z.follow, unfollow: v.Z.unfollow, undoTopicNotInterested: v.Z.undoNotInterested }))
                    .withAnalytics(),
                A = p().b1850062,
                z = p().d69b2d90,
                H = p().gf5e9ea6;
            class M extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._additionalControlsEnabled = this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),
                        (this._followButtonTextVariant = (0, h.a)(this.context.featureSwitches.getStringValue("topic_landing_page_cta_text"))),
                        (this._handleUndoTopicNotInterested = () => {
                            const { createLocalApiErrorHandler: e, topic: t, undoTopicNotInterested: n } = this.props;
                            this._scribeAction({ element: "topic", action: "un_not_interested" }), t && n(t.id).catch(e());
                        }),
                        (this._handleOnClickFacepiles = () => {
                            this._scribeAction({ element: "facepile", action: "click" });
                        }),
                        (this._handleFacepilesImpression = () => {
                            this._scribeAction({ element: "facepile", action: "impression" });
                        });
                }
                render() {
                    const { facepile: e, history: t, onFollowHeaderOffscreen: n, topic: a, topicLandingContext: l, users: s } = this.props,
                        { description: c, name: p } = a || {},
                        h = s.slice(0, 4).map((e) => e.profile_image_url_https),
                        f = e?.facepileUrl && (0, u.s9)(e.facepileUrl),
                        g = (0, d.cu)(t),
                        w = s && s.length > 3 ? { firstUsername: s[0].name || "", usersCount: s.length - 1, knownFollowersAvatarUrls: h, trendingFollowersUrl: f || "" } : void 0;
                    return a && !g
                        ? o.createElement(
                              i.Z,
                              { style: L.root },
                              o.createElement(C.Z, { customText: p, displayMode: x.BH.topic }, () => o.createElement(m.Z, { onOffscreenChange: n }, o.createElement(r.Z, { children: this._renderTopicActions(), context: l, knownFollowers: w, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: c, title: p, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: n } = this.props;
                    return n
                        ? o.createElement(a.ZP, { key: "topic-header-actions" }, ({ containerWidth: r }) => {
                              const a = l.Z.isNarrowScreenWidth(r) ? L.mainViewSmall : L.mainView,
                                  s = this._additionalControlsEnabled ? (l.Z.isNarrowScreenWidth(r) ? L.followButtonSmall : L.followButton) : null,
                                  c = l.Z.isNarrowScreenWidth(r) ? L.notInterestButtonSmall : L.notInterestButton;
                              return o.createElement(o.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === f.el.Basic ? o.createElement(i.Z, { style: a }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : o.createElement(y.Z, { size: "medium", style: c, text: A, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), o.createElement(b.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: s, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return o.createElement(_.Z, { actionText: H, children: z, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (M.contextType = w.rC), (M.defaultProps = { displayType: f.el.Basic });
            const L = s.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                V = (0, g.ZP)(B(M));
        },
        646496: (e, t, n) => {
            n.d(t, { Z: () => f });
            var o = n(202784),
                i = n(325686),
                r = n(674132),
                a = n.n(r),
                l = n(731708),
                s = n(642153),
                c = n(992942),
                p = n(530732),
                d = n(537392),
                m = n(786475),
                u = n(392237);
            const h = u.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                f = ({ children: e, context: t, imageSrc: n, knownFollowers: r, onFacepilesClick: f, onFacepilesImpression: g, subtitle: w, title: b, withAdditionalControls: x = !1 }) => {
                    const { firstUsername: y, knownFollowersAvatarUrls: C, trendingFollowersUrl: _, usersCount: E } = r || {},
                        Z = r && r.knownFollowersAvatarUrls.length > 3;
                    o.useEffect(() => {
                        Z && g && g();
                    }, [Z, g]);
                    const S = n ? o.createElement(c.Z, { source: n, style: h.iconCustom }) : null,
                        v = t ? o.createElement(i.Z, { style: x ? h.condensedContextV2 : h.condensedContext }, o.createElement(l.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), o.createElement(i.Z, { style: x ? h.buttonTopMargin : [h.buttonBottomMargin, h.buttonLeftMargin] }, e)) : null,
                        T = o.createElement(d.ZP, null, ({ containerWidth: n }) => {
                            const r = m.Z.isNarrowScreenWidth(n) ? "xLarge" : "xxLarge",
                                c = n < u.default.theme.breakpoints.xSmall ? h.buttonWrap : void 0,
                                d = x ? h.facepileV2 : null;
                            return o.createElement(
                                i.Z,
                                { style: x ? null : [h.knownFollowersContainer, c] },
                                o.createElement(p.Z, { interactiveStyles: null, link: _, onPress: f, style: x ? h.interactiveStyleV2 : h.interactiveStyle }, ({ isHovered: e }) => o.createElement(o.Fragment, null, o.createElement(s.Z, { style: [h.facepile, d], userAvatarSize: r, userAvatarUrls: C }), o.createElement(l.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && h.underline }, t || ((e, t) => o.createElement(a().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, t))(y, E)))),
                                ((t) => {
                                    const n = t < u.default.theme.breakpoints.xSmall ? h.buttonBottomMargin : [h.buttonBottomMargin, h.buttonLeftMargin];
                                    return x ? [e] : o.createElement(i.Z, { style: n }, e);
                                })(n),
                            );
                        }),
                        F = r && Z ? T : v;
                    return o.createElement(o.Fragment, null, S, o.createElement(l.ZP, { size: "title2", weight: "heavy" }, b), w ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, w) : null, F);
                };
        },
        971657: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M7.501 19.917L7.471 21H.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977.963 0 1.95.212 2.87.672-.444.478-.851 1.03-1.212 1.656-.507-.204-1.054-.329-1.658-.329-2.767 0-4.57 2.223-4.938 6.004H7.56c-.023.302-.05.599-.059.917zm8.999-8.921c-3.264 0-6.816 2.358-7 8.977L9.471 21h4.528v-2h-2.438c.367-3.781 2.17-6.004 4.938-6.004 1.089 0 2.022.356 2.784 1.004h2.632c-1.376-2.136-3.446-3.004-5.415-3.004zm0-.996c-.799 0-1.527-.279-2.116-.73C13.548 8.63 13 7.632 13 6.5 13 4.57 14.567 3 16.5 3S20 4.57 20 6.5c0 1.132-.548 2.13-1.384 2.77-.589.451-1.317.73-2.116.73zM15 6.5c0 .827.673 1.5 1.5 1.5S18 7.327 18 6.5 17.327 5 16.5 5 15 5.673 15 6.5zm-11 0C4 4.57 5.567 3 7.5 3S11 4.57 11 6.5 9.433 10 7.5 10 4 8.43 4 6.5zm2 0C6 7.327 6.673 8 7.5 8S9 7.327 9 6.5 8.327 5 7.5 5 6 5.673 6 6.5zM21 21h3v-2h-3v-3h-2v3h-3v2h3v3h2v-3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicLandingHeaderHandler.3d666f3a.js.map
