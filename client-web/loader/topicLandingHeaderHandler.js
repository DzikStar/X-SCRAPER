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
            n.r(t), n.d(t, { TopicHeader: () => O, default: () => D });
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
                    const { firstUsername: y, knownFollowersAvatarUrls: _, trendingFollowersUrl: E, usersCount: C } = r || {},
                        Z = r && r.knownFollowersAvatarUrls.length > 3;
                    o.useEffect(() => {
                        Z && g && g();
                    }, [Z, g]);
                    const T = n ? o.createElement(c.Z, { source: n, style: f.iconCustom }) : null,
                        v = t ? o.createElement(i.Z, { style: x ? f.condensedContextV2 : f.condensedContext }, o.createElement(l.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), o.createElement(i.Z, { style: x ? f.buttonTopMargin : [f.buttonBottomMargin, f.buttonLeftMargin] }, e)) : null,
                        S = o.createElement(d.ZP, null, ({ containerWidth: n }) => {
                            const r = m.Z.isNarrowScreenWidth(n) ? "xLarge" : "xxLarge",
                                c = n < u.default.theme.breakpoints.xSmall ? f.buttonWrap : void 0,
                                d = x ? f.facepileV2 : null;
                            return o.createElement(
                                i.Z,
                                { style: x ? null : [f.knownFollowersContainer, c] },
                                o.createElement(p.Z, { interactiveStyles: null, link: E, onPress: h, style: x ? f.interactiveStyleV2 : f.interactiveStyle }, ({ isHovered: e }) => o.createElement(o.Fragment, null, o.createElement(s.Z, { style: [f.facepile, d], userAvatarSize: r, userAvatarUrls: _ }), o.createElement(l.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && f.underline }, t || ((e, t) => o.createElement(a().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, t))(y, C)))),
                                ((t) => {
                                    const n = t < u.default.theme.breakpoints.xSmall ? f.buttonBottomMargin : [f.buttonBottomMargin, f.buttonLeftMargin];
                                    return x ? [e] : o.createElement(i.Z, { style: n }, e);
                                })(n),
                            );
                        }),
                        F = r && Z ? S : v;
                    return o.createElement(o.Fragment, null, T, o.createElement(l.ZP, { size: "title2", weight: "heavy" }, b), w ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, w) : null, F);
                };
            var g = n(791632),
                w = n(321835),
                b = n(946409),
                x = n(618566),
                y = n(638090),
                _ = n(500002),
                E = n(443781),
                C = n(265196),
                Z = n(233391),
                T = n(863934),
                v = n(288955),
                S = n(177371),
                F = n(459679),
                I = n(71620),
                k = n(668214),
                B = n(466380),
                A = n(919022);
            const H = (e, t) => B.Z.select(e, t.topicId),
                M = (e, t) => A.ZP.selectMany(e, t.facepile?.userIds || []),
                V = (e, t) => {
                    const n = M(e, t);
                    return (0, F.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                z = (0, k.Z)()
                    .propsFromState(() => ({ topic: H, users: V }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("TOPIC_HEADER"), follow: B.Z.follow, unfollow: B.Z.unfollow, undoTopicNotInterested: B.Z.undoNotInterested }))
                    .withAnalytics(),
                L = a().b1850062,
                P = a().d69b2d90,
                U = a().gf5e9ea6;
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
                              o.createElement(v.Z, { customText: c, displayMode: Z.BH.topic }, () => o.createElement(w.Z, { onOffscreenChange: n }, o.createElement(h, { children: this._renderTopicActions(), context: a, knownFollowers: u, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: s, title: c, withAdditionalControls: this._additionalControlsEnabled }))),
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
                              return o.createElement(o.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === y.el.Basic ? o.createElement(i.Z, { style: a }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : o.createElement(T.Z, { size: "medium", style: s, text: L, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), o.createElement(C.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: l, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return o.createElement(S.Z, { actionText: U, children: P, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (O.contextType = E.rC), (O.defaultProps = { displayType: y.el.Basic });
            const W = u.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                D = (0, _.ZP)(z(O));
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicLandingHeaderHandler.10898e5a.js.map
