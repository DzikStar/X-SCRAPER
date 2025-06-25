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
            n.r(t), n.d(t, { TopicHeader: () => L, default: () => P });
            var o = n(202784),
                i = n(325686),
                r = n(646496),
                a = n(537392),
                l = n(786475),
                s = n(392237),
                c = n(111677),
                p = n.n(c),
                d = n(791632),
                m = n(321835),
                u = n(946409),
                f = n(618566),
                h = n(638090),
                g = n(500002),
                w = n(443781),
                b = n(265196),
                x = n(233391),
                y = n(863934),
                _ = n(288955),
                C = n(177371),
                E = n(459679),
                Z = n(71620),
                T = n(668214),
                S = n(466380),
                F = n(919022);
            const I = (e, t) => S.Z.select(e, t.topicId),
                k = (e, t) => F.ZP.selectMany(e, t.facepile?.userIds || []),
                B = (e, t) => {
                    const n = k(e, t);
                    return (0, E.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                v = (0, T.Z)()
                    .propsFromState(() => ({ topic: I, users: B }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("TOPIC_HEADER"), follow: S.Z.follow, unfollow: S.Z.unfollow, undoTopicNotInterested: S.Z.undoNotInterested }))
                    .withAnalytics(),
                A = p().b1850062,
                H = p().d69b2d90,
                V = p().gf5e9ea6;
            class L extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._additionalControlsEnabled = this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),
                        (this._followButtonTextVariant = (0, f.a)(this.context.featureSwitches.getStringValue("topic_landing_page_cta_text"))),
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
                        f = s.slice(0, 4).map((e) => e.profile_image_url_https),
                        h = e?.facepileUrl && (0, u.s9)(e.facepileUrl),
                        g = (0, d.cu)(t),
                        w = s && s.length > 3 ? { firstUsername: s[0].name || "", usersCount: s.length - 1, knownFollowersAvatarUrls: f, trendingFollowersUrl: h || "" } : void 0;
                    return a && !g
                        ? o.createElement(
                              i.Z,
                              { style: M.root },
                              o.createElement(_.Z, { customText: p, displayMode: x.BH.topic }, () => o.createElement(m.Z, { onOffscreenChange: n }, o.createElement(r.Z, { children: this._renderTopicActions(), context: l, knownFollowers: w, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: c, title: p, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: n } = this.props;
                    return n
                        ? o.createElement(a.ZP, { key: "topic-header-actions" }, ({ containerWidth: r }) => {
                              const a = l.Z.isNarrowScreenWidth(r) ? M.mainViewSmall : M.mainView,
                                  s = this._additionalControlsEnabled ? (l.Z.isNarrowScreenWidth(r) ? M.followButtonSmall : M.followButton) : null,
                                  c = l.Z.isNarrowScreenWidth(r) ? M.notInterestButtonSmall : M.notInterestButton;
                              return o.createElement(o.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === h.el.Basic ? o.createElement(i.Z, { style: a }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : o.createElement(y.Z, { size: "medium", style: c, text: A, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), o.createElement(b.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: s, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return o.createElement(C.Z, { actionText: V, children: H, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (L.contextType = w.rC), (L.defaultProps = { displayType: h.el.Basic });
            const M = s.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                P = (0, g.ZP)(v(L));
        },
        646496: (e, t, n) => {
            n.d(t, { Z: () => h });
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
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicLandingHeaderHandler.e888c5ca.js.map
