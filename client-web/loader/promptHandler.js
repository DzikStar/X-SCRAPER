"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.promptHandler"],
    {
        32694: (e, t, a) => {
            a.r(t), a.d(t, { default: () => v });
            var n = a(351322),
                o = a(202784),
                r = (a(136728), a(325686)),
                s = a(761744),
                i = a(731708),
                l = a(913309),
                c = a(392237);
            const p = "onboardingLikesGuide-emptyHeart",
                d = "onboardingLikesGuide-filledHeart",
                m = o.memo(() => o.createElement(s.default, { style: g.emptyHeart, testID: p })),
                u = o.memo(() => o.createElement(s.default, { style: g.filledHeart, testID: d })),
                g = c.default.create((e) => ({ actionContext: { marginStart: e.spaces.space8, display: "inline" }, actionGuide: { alignItems: "baseline", display: "flex", flexDirection: "row", paddingHorizontal: e.spaces.space32, marginTop: `-${e.spaces.space12}`, marginBottom: e.spaces.space16 }, actionGuideLeft: { flexGrow: "1", display: "flex", flexDirection: "row", alignItems: "center" }, actionGuideRight: { flexGrow: "1", display: "block", textAlign: "end" }, actionIcon: { display: "inline", marginStart: e.spaces.space8 }, container: { position: "relative", marginTop: e.spaces.space16 }, headerText: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, actionContextIconContainer: { display: "inline" }, actionContextIcon: { color: e.colors.magenta500, width: `calc(${e.spaces.space16} - ${e.spaces.space2})`, height: `calc(${e.spaces.space16} - ${e.spaces.space2})` }, actionContextIconHighlight: { display: "flex", flexDirection: "row", backgroundColor: e.colors.magenta50, borderRadius: "50%", width: `calc(${e.spaces.space32} - ${e.spaces.space4})`, height: `calc(${e.spaces.space32} - ${e.spaces.space4})`, justifyContent: "center", alignItems: "center" }, iconImage: { width: e.spaces.space64, height: e.spaces.space72 }, bodyText: { color: e.colors.gray700, marginBottom: e.spaces.space16 }, iconContainer: { display: "block" }, rightControl: { position: "absolute", top: "0px", end: "0px" }, emptyHeart: { color: e.colors.gray100, width: e.spaces.space20, height: e.spaces.space20 }, filledHeart: { color: e.colors.magenta500, width: e.spaces.space20, height: e.spaces.space20 } })),
                y = ({ bodyText: e, currentLikeCount: t, headerIconUrl: a, headerText: n, likeContext: p, rightControl: d, totalLikeCount: y }) => {
                    const h = [];
                    for (let e = 0; e < y; e++) h.push(e < t ? o.createElement(u, null) : o.createElement(m, null));
                    return o.createElement(
                        r.Z,
                        { style: g.container },
                        o.createElement(l.Z, { headline: n, image: a ? { url: a, width: 68, height: 68, isCentered: !0, style: { marginBottom: `-${c.default.theme.spaces.space16}` } } : void 0, rightControl: d, subtext: e }),
                        o.createElement(
                            r.Z,
                            { style: g.actionGuide },
                            o.createElement(r.Z, { "aria-label": p, style: g.actionGuideLeft }, o.createElement(r.Z, { style: g.actionContextIconContainer }, o.createElement(r.Z, { style: g.actionContextIconHighlight }, o.createElement(s.default, { style: g.actionContextIcon }))), o.createElement(r.Z, { style: g.actionContext }, o.createElement(i.ZP, { size: "subtext2", weight: "bold" }, p))),
                            o.createElement(
                                r.Z,
                                { "aria-label": p, "aria-live": "polite", style: g.actionGuideRight },
                                h.map((e, t) => o.createElement(r.Z, { key: `action-icon-${t}`, style: g.actionIcon }, e)),
                            ),
                        ),
                    );
                };
            var h = a(111677),
                b = a.n(h),
                f = a(725516),
                C = a(927389),
                x = a(668214),
                E = a(919022);
            const w = (e, t) => E.ZP.selectViewerUser(e),
                k = (0, x.Z)().propsFromState(() => ({ viewerUser: w })),
                I = b().a682906d,
                Z = k(({ entry: e, feedbackItems: t, viewerUser: a }) => {
                    const n = (0, f.z)(),
                        r = e.content.onboardingLikesStartPrompt || void 0,
                        s = a?.favourites_count || 0,
                        i = r?.likesNeededToCompleteOnboarding || 0,
                        l = Math.max(0, i - s),
                        c = o.useMemo(() => (t?.length ? o.createElement(C.Z, { feedbackItems: t }) : void 0), [t]);
                    return (
                        o.useEffect(() => {
                            n.scribeAction("impression");
                        }, []),
                        o.createElement(y, { bodyText: r?.bodyRichText?.text, currentLikeCount: s, headerIconUrl: r?.headerIconUrl, headerText: r?.headerRichText?.text, likeContext: I({ count: l }), rightControl: c, totalLikeCount: i })
                    );
                }),
                v = n.iH({ component: Z }).getHandler();
        },
        565410: (e, t, a) => {
            a.r(t), a.d(t, { default: () => T });
            var n = a(459643),
                o = a(942893),
                r = a(351322),
                s = a(202784),
                i = a(325686),
                l = a(352924),
                c = a(154003),
                p = a(731708),
                d = a(392237),
                m = a(187669),
                u = a(23679);
            const g = Object.freeze({ Compact: "Compact", Normal: "Normal", Large: "Large", ThumbsUpAndDown: "ThumbsUpAndDown" });
            var y = a(725516),
                h = a(71620),
                b = a(668214),
                f = a(960919);
            const C = (0, b.Z)().propsFromActions(({ module: e }) => ({ applyReactionInstructions: e.applyReactionInstructions, createLocalApiErrorHandler: (0, h.zr)("RELEVANCE_PROMPT"), processCallback: f.Z, updateEntry: e.updateEntry }));
            var x = a(913973),
                E = a(837020);
            const w = (e) => ("IconCheckmark" === e ? s.createElement(x.default, null) : "IconClose" === e ? s.createElement(E.default, null) : void 0),
                k = (e, t) => {
                    if (e && e === g.ThumbsUpAndDown) return t ? "IconCheckmark" : "IconClose";
                },
                I = ({ applyReactionInstructions: e, createLocalApiErrorHandler: t, entry: a, processCallback: n, updateEntry: o }) => {
                    const r = a.content.relevancePrompt && a.content.relevancePrompt,
                        { confirmation: d, displayType: h = g.Compact, isRelevantCallback: b, isRelevantText: f, notRelevantCallback: C, notRelevantText: x, showConfirmation: E, subtitle: I, title: v } = r || {},
                        T = (0, y.z)(),
                        D = k(h, !0),
                        H = k(h, !1),
                        P = h === g.ThumbsUpAndDown,
                        L = h === g.Compact,
                        R = h === g.Large,
                        _ = l.b();
                    (0, m.q)(() => {
                        T.scribe({ element: "relevance_prompt", action: "impression" });
                    });
                    const A = s.useCallback(
                            (e) => {
                                r && o(a.entryId, { relevancePrompt: { ...r, showConfirmation: !0 } }), n(e).catch(t());
                            },
                            [t, a.entryId, n, r, o],
                        ),
                        z = s.useCallback(() => {
                            T.scribe({ element: "is_relevant", action: "click" }), A(b), e({ entry: a, triggerName: u.K.ON_IS_RELEVANT });
                        }, [T, e, a, b, A]),
                        G = s.useCallback(() => {
                            T.scribe({ element: "not_relevant", action: "click" }), A(C);
                        }, [T, C, A]),
                        O = v.length > 65 ? "title4" : "title3",
                        S = ({ isRelevant: e }) => {
                            const t = e ? f : x,
                                a = e ? D : H,
                                n = e ? z : G;
                            return s.createElement(c.ZP, { "aria-label": t, icon: a ? w(a) : void 0, onPress: n, size: a || R ? "large" : "xSmall", style: a ? Z.icon : !R && Z.button, type: "primaryOutlined" }, a ? null : t);
                        },
                        M = s.useMemo(() => [Z.promptContainer, R && !E && Z.promptContainerLarge], [R, E]),
                        N = s.useMemo(() => [P && Z.thumbsUpDown, (L || R) && Z.compact], [L, R, P]),
                        U = s.useMemo(() => [Z.root, P && Z.thumbsUpDown, R && Z.large, L && Z.compact], [P, R, L]),
                        B = s.useMemo(() => [Z.buttonContainer, R && Z.buttonContainerLarge], [R]);
                    return s.createElement(i.Z, { "aria-labelledby": _, role: "group", style: M }, E ? s.createElement(i.Z, { role: "alert" }, s.createElement(p.ZP, { style: N }, d)) : s.createElement(i.Z, { style: U }, s.createElement(i.Z, { style: R ? Z.firstHalfLarge : Z.firstHalf }, s.createElement(p.ZP, { id: _, size: R ? O : void 0, weight: R ? "heavy" : void 0 }, v), I ? s.createElement(p.ZP, { color: "gray700", size: "subtext2" }, I) : null), s.createElement(i.Z, { style: !R && Z.secondHalf }, s.createElement(i.Z, { style: B }, s.createElement(S, { isRelevant: !0 }), s.createElement(S, { isRelevant: !1 })))));
                },
                Z = d.default.create((e) => ({ button: { margin: "1ex" }, buttonContainer: { display: "grid", gridTemplateColumns: "repeat(2,1fr)" }, buttonContainerLarge: { display: "flex", flexDirection: "column", flexGrow: 1, rowGap: e.spacesPx.space16 }, secondHalf: { width: "50%", display: "grid", justifyContent: "end" }, firstHalf: { width: "50%", flexDirection: "column", justifyContent: "center" }, firstHalfLarge: { display: "flex", flexDirection: "column", rowGap: e.spacesPx.space8 }, root: { flexDirection: "row", justifyContent: "space-between" }, promptContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, promptContainerLarge: { paddingHorizontal: e.spacesPx.space32, paddingVertical: e.spacesPx.space32 }, compact: { padding: e.spaces.space12, borderColor: e.colors.buttonOutlinedBorder, borderRadius: e.spaces.space4, borderStyle: "solid", borderWidth: e.borderWidths.small }, thumbsUpDown: { display: "flex", borderRadius: e.spaces.space8, padding: e.spaces.space12, backgroundColor: e.colors.orange0, alignItems: "center", minHeight: e.spaces.space64 }, large: { display: "flex", flexDirection: "column", rowGap: e.spacesPx.space20 }, icon: { marginStart: e.spaces.space12 } })),
                v = C(s.memo(I)),
                T = r.iH({ component: v, getScribeDataItem: (e) => o.Z.forRelevancePrompt(e.itemMetadata.clientEventInfo), isFocusable: (0, n.Z)(!0), shouldDisplayBorder: (0, n.Z)(!0) }).getHandler();
        },
        927389: (e, t, a) => {
            a.d(t, { Z: () => p });
            var n = a(202784),
                o = a(247056),
                r = a(392237);
            const s = (0, a(523561).Z)({ loader: () => a.e("loader.FeedbackSheet").then(a.bind(a, 774426)) });
            var i = a(725516),
                l = a(851623);
            const c = r.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                p = (0, i.Z)((e) => {
                    const { analytics: t, feedbackItems: a, isDisplayedOnMedia: r } = e,
                        i = n.useCallback((e) => (a ? n.createElement(s, { actionItems: a, onClose: e }) : null), [a]),
                        p = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return a && a.length > 0 ? n.createElement(o.Z, { onClick: p, renderActionMenu: i, style: c.curationControl, testID: l.Z.caret, withDarkBackground: r }) : null;
                });
        },
        23679: (e, t, a) => {
            a.d(t, { K: () => n });
            const n = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        913309: (e, t, a) => {
            a.d(t, { Z: () => y });
            var n = a(202784),
                o = a(325686),
                r = a(530525),
                s = a(731708),
                i = a(439592),
                l = a(154003),
                c = a(392237),
                p = a(444178);
            const d = "inlinePrompt",
                m = "inlinePrompt-primaryAction",
                u = "inlinePrompt-secondaryAction",
                g = "inlinePrompt-centeredImageContainer";
            class y extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = (e, t, a) => {
                            let s = n.createElement(r.Z, { "aria-label": "", aspectMode: i.Z.exact(e.width / e.height), backgroundColor: e.backgroundColor, customVariants: t, image: e });
                            return a && (s = n.createElement(p.Z, { link: a, role: "" }, " ", s)), e.isCentered ? n.createElement(o.Z, { style: h.centeredImage, testID: g }, n.createElement(o.Z, { style: { width: `${e.width}px`, height: `${e.height}px`, ...e.style } }, s)) : e.style ? n.createElement(o.Z, { style: e.style }, s) : s;
                        }),
                        (this._renderTitle = () => {
                            const { headline: e } = this.props;
                            return e ? n.createElement(s.ZP, { align: "left", role: "heading", size: "title3", style: h.flexGrow, weight: "heavy", withHashflags: !0 }, e) : null;
                        }),
                        (this._renderBodyText = () => {
                            const { subtext: e } = this.props;
                            return e ? n.createElement(s.ZP, { align: "left", color: "gray700", style: this.styles.body, withHashflags: !0 }, e) : null;
                        }),
                        (this._renderAction = ({ action: e, buttonSize: t, buttonType: a, style: r, testID: s }) => {
                            const { secondaryAction: i } = this.props,
                                { link: c, onClick: p, text: d } = e;
                            return n.createElement(o.Z, { style: [this.styles.actionContainer, r, { justifyContent: "flex-start" }], testID: s }, n.createElement(l.ZP, { link: c, onPress: p, size: t, style: { width: i ? "100%" : "auto" }, type: a }, d));
                        });
                }
                render() {
                    const { headline: e, image: t, imageActionUrl: a, imageVariants: r, primaryAction: s, rightControl: i, secondaryAction: l, shouldRenderBorder: c, subtext: p } = this.props;
                    return n.createElement(o.Z, { style: c ? [b.root, b.rootMargin] : h.root }, n.createElement(n.Fragment, null, t ? this._renderImage(t, r, a) : null, e || p || s || l ? n.createElement(o.Z, { style: this.styles.rootPadding, testID: d }, this._renderTitle(), this._renderBodyText(), s ? this._renderAction({ action: s, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: m }) : null, l ? this._renderAction({ action: l, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: u }) : null) : null), i ? n.createElement(o.Z, { style: h.rightControl }, i) : null);
                }
                get styles() {
                    return this.props.isCompact ? C : f;
                }
            }
            y.defaultProps = { shouldRenderBorder: !1 };
            const h = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, flexGrow: { flexGrow: 1 }, centeredImage: { display: "flex", flexDirection: "row", justifyContent: "center" }, rightControl: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, position: "absolute", end: 0, top: 0 } })),
                b = c.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, rootMargin: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16 } })),
                f = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space32 }, body: { marginTop: e.spaces.space8 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space28 }, secondaryAction: { marginTop: e.spaces.space16 } })),
                C = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space16 }, body: { marginTop: e.spaces.space2 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space4 }, secondaryAction: { marginTop: e.spaces.space2 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.promptHandler.180fddaa.js.map
