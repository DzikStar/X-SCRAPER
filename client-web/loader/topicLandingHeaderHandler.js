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
                l = n(904694);
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
        904694: (e, t, n) => {
            n.r(t), n.d(t, { TopicHeader: () => O, default: () => N });
            var o = n(202784),
                i = n(325686),
                r = n(111677),
                a = n.n(r),
                l = n(731708),
                s = n(642153),
                c = n(992942),
                p = n(530732),
                d = n(537392),
                m = n(786475),
                u = n(392237);
            const f = u.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                h = ({ children: e, context: t, imageSrc: n, knownFollowers: r, onFacepilesClick: h, onFacepilesImpression: g, subtitle: w, title: b, withAdditionalControls: x = !1 }) => {
                    const { firstUsername: y, knownFollowersAvatarUrls: _, trendingFollowersUrl: C, usersCount: E } = r || {},
                        Z = r && r.knownFollowersAvatarUrls.length > 3;
                    o.useEffect(() => {
                        Z && g && g();
                    }, [Z, g]);
                    const T = n ? o.createElement(c.Z, { source: n, style: f.iconCustom }) : null,
                        S = t ? o.createElement(i.Z, { style: x ? f.condensedContextV2 : f.condensedContext }, o.createElement(l.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), o.createElement(i.Z, { style: x ? f.buttonTopMargin : [f.buttonBottomMargin, f.buttonLeftMargin] }, e)) : null,
                        F = o.createElement(d.ZP, null, ({ containerWidth: n }) => {
                            const r = m.Z.isNarrowScreenWidth(n) ? "xLarge" : "xxLarge",
                                c = n < u.default.theme.breakpoints.xSmall ? f.buttonWrap : void 0,
                                d = x ? f.facepileV2 : null;
                            return o.createElement(
                                i.Z,
                                { style: x ? null : [f.knownFollowersContainer, c] },
                                o.createElement(p.Z, { interactiveStyles: null, link: C, onPress: h, style: x ? f.interactiveStyleV2 : f.interactiveStyle }, ({ isHovered: e }) => o.createElement(o.Fragment, null, o.createElement(s.Z, { style: [f.facepile, d], userAvatarSize: r, userAvatarUrls: _ }), o.createElement(l.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && f.underline }, t || ((e, t) => o.createElement(a().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, t))(y, E)))),
                                ((t) => {
                                    const n = t < u.default.theme.breakpoints.xSmall ? f.buttonBottomMargin : [f.buttonBottomMargin, f.buttonLeftMargin];
                                    return x ? [e] : o.createElement(i.Z, { style: n }, e);
                                })(n),
                            );
                        }),
                        I = r && Z ? F : S;
                    return o.createElement(o.Fragment, null, T, o.createElement(l.ZP, { size: "title2", weight: "heavy" }, b), w ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, w) : null, I);
                };
            var g = n(791632),
                w = n(321835),
                b = n(946409),
                x = n(618566),
                y = n(638090),
                _ = n(500002),
                C = n(443781),
                E = n(265196),
                Z = n(233391),
                T = n(863934),
                S = n(288955),
                F = n(177371),
                I = n(459679),
                k = n(71620),
                B = n(668214),
                v = n(466380),
                A = n(919022);
            const H = (e, t) => v.Z.select(e, t.topicId),
                V = (e, t) => A.ZP.selectMany(e, t.facepile?.userIds || []),
                L = (e, t) => {
                    const n = V(e, t);
                    return (0, I.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                M = (0, B.Z)()
                    .propsFromState(() => ({ topic: H, users: L }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, k.zr)("TOPIC_HEADER"), follow: v.Z.follow, unfollow: v.Z.unfollow, undoTopicNotInterested: v.Z.undoNotInterested }))
                    .withAnalytics(),
                P = a().b1850062,
                U = a().d69b2d90,
                z = a().gf5e9ea6;
            class O extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._additionalControlsEnabled = this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),
                        (this._followButtonTextVariant = (0, x.a)(this.context.featureSwitches.getStringValue("topic_landing_page_cta_text"))),
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
                    const { facepile: e, history: t, onFollowHeaderOffscreen: n, topic: r, topicLandingContext: a, users: l } = this.props,
                        { description: s, name: c } = r || {},
                        p = l.slice(0, 4).map((e) => e.profile_image_url_https),
                        d = e?.facepileUrl && (0, b.s9)(e.facepileUrl),
                        m = (0, g.cu)(t),
                        u = l && l.length > 3 ? { firstUsername: l[0].name || "", usersCount: l.length - 1, knownFollowersAvatarUrls: p, trendingFollowersUrl: d || "" } : void 0;
                    return r && !m
                        ? o.createElement(
                              i.Z,
                              { style: W.root },
                              o.createElement(S.Z, { customText: c, displayMode: Z.BH.topic }, () => o.createElement(w.Z, { onOffscreenChange: n }, o.createElement(h, { children: this._renderTopicActions(), context: a, knownFollowers: u, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: s, title: c, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: n } = this.props;
                    return n
                        ? o.createElement(d.ZP, { key: "topic-header-actions" }, ({ containerWidth: r }) => {
                              const a = m.Z.isNarrowScreenWidth(r) ? W.mainViewSmall : W.mainView,
                                  l = this._additionalControlsEnabled ? (m.Z.isNarrowScreenWidth(r) ? W.followButtonSmall : W.followButton) : null,
                                  s = m.Z.isNarrowScreenWidth(r) ? W.notInterestButtonSmall : W.notInterestButton;
                              return o.createElement(o.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === y.el.Basic ? o.createElement(i.Z, { style: a }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : o.createElement(T.Z, { size: "medium", style: s, text: P, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), o.createElement(E.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: l, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return o.createElement(F.Z, { actionText: z, children: U, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (O.contextType = C.rC), (O.defaultProps = { displayType: y.el.Basic });
            const W = u.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                N = (0, _.ZP)(M(O));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicLandingHeaderHandler.b9a0731a.js.map
