"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.topicLandingHeaderHandler"],
    {
        336866: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
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
                d = i.iH({ component: c, getScribeDataItem: ({ content: { topicId: e }, itemMetadata: { clientEventInfo: t } }) => o.Z.forTopic(e, t) }).getHandler();
        },
        904694: (e, t, n) => {
            n.r(t), n.d(t, { TopicHeader: () => D, default: () => W });
            var o = n(202784),
                i = n(325686),
                r = n(111677),
                a = n.n(r),
                l = n(731708),
                s = n(642153),
                c = n(992942),
                d = n(530732),
                p = n(537392),
                m = n(786475),
                u = n(392237);
            const h = u.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                f = ({ children: e, context: t, imageSrc: n, knownFollowers: r, onFacepilesClick: f, onFacepilesImpression: g, subtitle: w, title: b, withAdditionalControls: x = !1 }) => {
                    const { firstUsername: y, knownFollowersAvatarUrls: E, trendingFollowersUrl: _, usersCount: C } = r || {},
                        Z = r && r.knownFollowersAvatarUrls.length > 3;
                    o.useEffect(() => {
                        Z && g && g();
                    }, [Z, g]);
                    const v = n ? o.createElement(c.Z, { source: n, style: h.iconCustom }) : null,
                        S = t ? o.createElement(i.Z, { style: x ? h.condensedContextV2 : h.condensedContext }, o.createElement(l.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), o.createElement(i.Z, { style: x ? h.buttonTopMargin : [h.buttonBottomMargin, h.buttonLeftMargin] }, e)) : null,
                        T = o.createElement(p.ZP, null, ({ containerWidth: n }) => {
                            const r = m.Z.isNarrowScreenWidth(n) ? "xLarge" : "xxLarge",
                                c = n < u.default.theme.breakpoints.xSmall ? h.buttonWrap : void 0,
                                p = x ? h.facepileV2 : null;
                            return o.createElement(
                                i.Z,
                                { style: x ? null : [h.knownFollowersContainer, c] },
                                o.createElement(d.Z, { interactiveStyles: null, link: _, onPress: f, style: x ? h.interactiveStyleV2 : h.interactiveStyle }, ({ isHovered: e }) => o.createElement(o.Fragment, null, o.createElement(s.Z, { style: [h.facepile, p], userAvatarSize: r, userAvatarUrls: E }), o.createElement(l.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && h.underline }, t || ((e, t) => o.createElement(a().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, t))(y, C)))),
                                ((t) => {
                                    const n = t < u.default.theme.breakpoints.xSmall ? h.buttonBottomMargin : [h.buttonBottomMargin, h.buttonLeftMargin];
                                    return x ? [e] : o.createElement(i.Z, { style: n }, e);
                                })(n),
                            );
                        }),
                        F = r && Z ? T : S;
                    return o.createElement(o.Fragment, null, v, o.createElement(l.ZP, { size: "title2", weight: "heavy" }, b), w ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, w) : null, F);
                };
            var g = n(791632),
                w = n(321835),
                b = n(946409),
                x = n(618566),
                y = n(638090),
                E = n(500002),
                _ = n(443781),
                C = n(265196),
                Z = n(233391),
                v = n(863934),
                S = n(288955),
                T = n(177371),
                F = n(459679),
                I = n(71620),
                B = n(668214),
                k = n(466380),
                z = n(919022);
            const A = (e, t) => k.Z.select(e, t.topicId),
                H = (e, t) => z.ZP.selectMany(e, t.facepile?.userIds || []),
                M = (e, t) => {
                    const n = H(e, t);
                    return (0, F.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                V = (0, B.Z)()
                    .propsFromState(() => ({ topic: A, users: M }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("TOPIC_HEADER"), follow: k.Z.follow, unfollow: k.Z.unfollow, undoTopicNotInterested: k.Z.undoNotInterested }))
                    .withAnalytics(),
                L = a().b1850062,
                P = a().d69b2d90,
                U = a().gf5e9ea6;
            class D extends o.Component {
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
                        d = l.slice(0, 4).map((e) => e.profile_image_url_https),
                        p = e?.facepileUrl && (0, b.s9)(e.facepileUrl),
                        m = (0, g.cu)(t),
                        u = l && l.length > 3 ? { firstUsername: l[0].name || "", usersCount: l.length - 1, knownFollowersAvatarUrls: d, trendingFollowersUrl: p || "" } : void 0;
                    return r && !m
                        ? o.createElement(
                              i.Z,
                              { style: O.root },
                              o.createElement(S.Z, { customText: c, displayMode: Z.BH.topic }, () => o.createElement(w.Z, { onOffscreenChange: n }, o.createElement(f, { children: this._renderTopicActions(), context: a, knownFollowers: u, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: s, title: c, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: n } = this.props;
                    return n
                        ? o.createElement(p.ZP, { key: "topic-header-actions" }, ({ containerWidth: r }) => {
                              const a = m.Z.isNarrowScreenWidth(r) ? O.mainViewSmall : O.mainView,
                                  l = this._additionalControlsEnabled ? (m.Z.isNarrowScreenWidth(r) ? O.followButtonSmall : O.followButton) : null,
                                  s = m.Z.isNarrowScreenWidth(r) ? O.notInterestButtonSmall : O.notInterestButton;
                              return o.createElement(o.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === y.el.Basic ? o.createElement(i.Z, { style: a }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : o.createElement(v.Z, { size: "medium", style: s, text: L, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), o.createElement(C.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: l, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return o.createElement(T.Z, { actionText: U, children: P, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (D.contextType = _.rC), (D.defaultProps = { displayType: y.el.Basic });
            const O = u.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                W = (0, E.ZP)(V(D));
        },
        41065: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicLandingHeaderHandler.e28de52a.js.map
