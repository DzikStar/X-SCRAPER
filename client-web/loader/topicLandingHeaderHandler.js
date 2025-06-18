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
                d = i.iH({ component: c, getScribeDataItem: ({ content: { topicId: e }, itemMetadata: { clientEventInfo: t } }) => o.Z.forTopic(e, t) }).getHandler();
        },
        217179: (e, t, n) => {
            n.r(t), n.d(t, { TopicHeader: () => V, default: () => L });
            var o = n(202784),
                i = n(325686),
                r = n(646496),
                a = n(537392),
                l = n(786475),
                s = n(392237),
                c = n(111677),
                d = n.n(c),
                p = n(791632),
                m = n(321835),
                u = n(946409),
                h = n(618566),
                f = n(638090),
                g = n(500002),
                w = n(443781),
                b = n(265196),
                x = n(233391),
                y = n(863934),
                E = n(288955),
                _ = n(177371),
                C = n(459679),
                Z = n(71620),
                v = n(668214),
                T = n(466380),
                S = n(919022);
            const F = (e, t) => T.Z.select(e, t.topicId),
                I = (e, t) => S.ZP.selectMany(e, t.facepile?.userIds || []),
                B = (e, t) => {
                    const n = I(e, t);
                    return (0, C.Z)(n, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                k = (0, v.Z)()
                    .propsFromState(() => ({ topic: F, users: B }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, Z.zr)("TOPIC_HEADER"), follow: T.Z.follow, unfollow: T.Z.unfollow, undoTopicNotInterested: T.Z.undoNotInterested }))
                    .withAnalytics(),
                A = d().b1850062,
                H = d().d69b2d90,
                M = d().gf5e9ea6;
            class V extends o.Component {
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
                        { description: c, name: d } = a || {},
                        h = s.slice(0, 4).map((e) => e.profile_image_url_https),
                        f = e?.facepileUrl && (0, u.s9)(e.facepileUrl),
                        g = (0, p.cu)(t),
                        w = s && s.length > 3 ? { firstUsername: s[0].name || "", usersCount: s.length - 1, knownFollowersAvatarUrls: h, trendingFollowersUrl: f || "" } : void 0;
                    return a && !g
                        ? o.createElement(
                              i.Z,
                              { style: z.root },
                              o.createElement(E.Z, { customText: d, displayMode: x.BH.topic }, () => o.createElement(m.Z, { onOffscreenChange: n }, o.createElement(r.Z, { children: this._renderTopicActions(), context: l, knownFollowers: w, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: c, title: d, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: n } = this.props;
                    return n
                        ? o.createElement(a.ZP, { key: "topic-header-actions" }, ({ containerWidth: r }) => {
                              const a = l.Z.isNarrowScreenWidth(r) ? z.mainViewSmall : z.mainView,
                                  s = this._additionalControlsEnabled ? (l.Z.isNarrowScreenWidth(r) ? z.followButtonSmall : z.followButton) : null,
                                  c = l.Z.isNarrowScreenWidth(r) ? z.notInterestButtonSmall : z.notInterestButton;
                              return o.createElement(o.Fragment, null, n.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === f.el.Basic ? o.createElement(i.Z, { style: a }, !this._additionalControlsEnabled || n.following || n.not_interested ? null : o.createElement(y.Z, { size: "medium", style: c, text: A, topicId: n.id, type: "primaryOutlined", withIconOnly: !1 }), o.createElement(b.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: s, textMode: this._followButtonTextVariant, topic: n })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return o.createElement(_.Z, { actionText: M, children: H, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (V.contextType = w.rC), (V.defaultProps = { displayType: f.el.Basic });
            const z = s.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                L = (0, g.ZP)(k(V));
        },
        646496: (e, t, n) => {
            n.d(t, { Z: () => f });
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
                        T = t ? o.createElement(i.Z, { style: x ? h.condensedContextV2 : h.condensedContext }, o.createElement(l.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), o.createElement(i.Z, { style: x ? h.buttonTopMargin : [h.buttonBottomMargin, h.buttonLeftMargin] }, e)) : null,
                        S = o.createElement(p.ZP, null, ({ containerWidth: n }) => {
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
                        F = r && Z ? S : T;
                    return o.createElement(o.Fragment, null, v, o.createElement(l.ZP, { size: "title2", weight: "heavy" }, b), w ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, w) : null, F);
                };
        },
        98440: (e, t, n) => {
            n.r(t), n.d(t, { default: () => s });
            var o = n(202784),
                i = n(890601),
                r = n(783427),
                a = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.topicLandingHeaderHandler.659518aa.js.map
