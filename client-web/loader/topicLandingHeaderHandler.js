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
            n.r(t), n.d(t, { TopicHeader: () => M, default: () => z });
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
                f = n(618566),
                h = n(638090),
                g = n(500002),
                w = n(443781),
                b = n(265196),
                x = n(233391),
                y = n(863934),
                _ = n(288955),
                E = n(177371),
                C = n(459679),
                Z = n(71620),
                T = n(668214),
                S = n(466380),
                v = n(919022);
            const F = (e, t) => S.Z.select(e, t.topicId),
                I = (e, t) => v.ZP.selectMany(e, t.facepile?.userIds || []),
                k = (e, t) => {
                    const n = I(e, t);
                    return (0, C.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                B = (0, T.Z)()
                    .propsFromState(() => ({ topic: F, users: k }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("TOPIC_HEADER"), follow: S.Z.follow, unfollow: S.Z.unfollow, undoTopicNotInterested: S.Z.undoNotInterested }))
                    .withAnalytics(),
                A = p().b1850062,
                L = p().d69b2d90,
                H = p().gf5e9ea6;
            class M extends o.Component {
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
                              { style: V.root },
                              o.createElement(_.Z, { customText: p, displayMode: x.BH.topic }, () => o.createElement(m.Z, { onOffscreenChange: n }, o.createElement(r.Z, { children: this._renderTopicActions(), context: l, knownFollowers: w, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: c, title: p, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: n } = this.props;
                    return n
                        ? o.createElement(a.ZP, { key: "topic-header-actions" }, ({ containerWidth: r }) => {
                              const a = l.Z.isNarrowScreenWidth(r) ? V.mainViewSmall : V.mainView,
                                  s = this._additionalControlsEnabled ? (l.Z.isNarrowScreenWidth(r) ? V.followButtonSmall : V.followButton) : null,
                                  c = l.Z.isNarrowScreenWidth(r) ? V.notInterestButtonSmall : V.notInterestButton;
                              return o.createElement(o.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === h.el.Basic ? o.createElement(i.Z, { style: a }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : o.createElement(y.Z, { size: "medium", style: c, text: A, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), o.createElement(b.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: s, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return o.createElement(E.Z, { actionText: H, children: L, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (M.contextType = w.rC), (M.defaultProps = { displayType: h.el.Basic });
            const V = s.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                z = (0, g.ZP)(B(M));
        },
        646496: (e, t, n) => {
            n.d(t, { Z: () => h });
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
            const f = u.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                h = ({ children: e, context: t, imageSrc: n, knownFollowers: r, onFacepilesClick: h, onFacepilesImpression: g, subtitle: w, title: b, withAdditionalControls: x = !1 }) => {
                    const { firstUsername: y, knownFollowersAvatarUrls: _, trendingFollowersUrl: E, usersCount: C } = r || {},
                        Z = r && r.knownFollowersAvatarUrls.length > 3;
                    o.useEffect(() => {
                        Z && g && g();
                    }, [Z, g]);
                    const T = n ? o.createElement(c.Z, { source: n, style: f.iconCustom }) : null,
                        S = t ? o.createElement(i.Z, { style: x ? f.condensedContextV2 : f.condensedContext }, o.createElement(l.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), o.createElement(i.Z, { style: x ? f.buttonTopMargin : [f.buttonBottomMargin, f.buttonLeftMargin] }, e)) : null,
                        v = o.createElement(d.ZP, null, ({ containerWidth: n }) => {
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
                        F = r && Z ? v : S;
                    return o.createElement(o.Fragment, null, T, o.createElement(l.ZP, { size: "title2", weight: "heavy" }, b), w ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, w) : null, F);
                };
        },
        258292: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12.013 1l3.527 7.15 7.886 1.14-5.707 5.56 1.347 7.86L12.013 19 4.96 22.71l1.347-7.86L.6 9.29l7.886-1.14L12.013 1z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicLandingHeaderHandler.dc70686a.js.map
