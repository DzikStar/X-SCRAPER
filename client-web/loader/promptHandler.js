"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.promptHandler"],
    {
        32694: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            var o = n(351322),
                r = n(202784),
                a = (n(136728), n(325686)),
                i = n(761744),
                s = n(731708),
                c = n(913309),
                l = n(392237);
            const d = "onboardingLikesGuide-emptyHeart",
                p = "onboardingLikesGuide-filledHeart",
                u = r.memo(() => r.createElement(i.default, { style: h.emptyHeart, testID: d })),
                m = r.memo(() => r.createElement(i.default, { style: h.filledHeart, testID: p })),
                h = l.default.create((e) => ({ actionContext: { marginStart: e.spaces.space8, display: "inline" }, actionGuide: { alignItems: "baseline", display: "flex", flexDirection: "row", paddingHorizontal: e.spaces.space32, marginTop: `-${e.spaces.space12}`, marginBottom: e.spaces.space16 }, actionGuideLeft: { flexGrow: "1", display: "flex", flexDirection: "row", alignItems: "center" }, actionGuideRight: { flexGrow: "1", display: "block", textAlign: "end" }, actionIcon: { display: "inline", marginStart: e.spaces.space8 }, container: { position: "relative", marginTop: e.spaces.space16 }, headerText: { marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, actionContextIconContainer: { display: "inline" }, actionContextIcon: { color: e.colors.magenta500, width: `calc(${e.spaces.space16} - ${e.spaces.space2})`, height: `calc(${e.spaces.space16} - ${e.spaces.space2})` }, actionContextIconHighlight: { display: "flex", flexDirection: "row", backgroundColor: e.colors.magenta50, borderRadius: "50%", width: `calc(${e.spaces.space32} - ${e.spaces.space4})`, height: `calc(${e.spaces.space32} - ${e.spaces.space4})`, justifyContent: "center", alignItems: "center" }, iconImage: { width: e.spaces.space64, height: e.spaces.space72 }, bodyText: { color: e.colors.gray700, marginBottom: e.spaces.space16 }, iconContainer: { display: "block" }, rightControl: { position: "absolute", top: "0px", end: "0px" }, emptyHeart: { color: e.colors.gray100, width: e.spaces.space20, height: e.spaces.space20 }, filledHeart: { color: e.colors.magenta500, width: e.spaces.space20, height: e.spaces.space20 } })),
                g = ({ bodyText: e, currentLikeCount: t, headerIconUrl: n, headerText: o, likeContext: d, rightControl: p, totalLikeCount: g }) => {
                    const y = [];
                    for (let e = 0; e < g; e++) y.push(e < t ? r.createElement(m, null) : r.createElement(u, null));
                    return r.createElement(
                        a.Z,
                        { style: h.container },
                        r.createElement(c.Z, { headline: o, image: n ? { url: n, width: 68, height: 68, isCentered: !0, style: { marginBottom: `-${l.default.theme.spaces.space16}` } } : void 0, rightControl: p, subtext: e }),
                        r.createElement(
                            a.Z,
                            { style: h.actionGuide },
                            r.createElement(a.Z, { "aria-label": d, style: h.actionGuideLeft }, r.createElement(a.Z, { style: h.actionContextIconContainer }, r.createElement(a.Z, { style: h.actionContextIconHighlight }, r.createElement(i.default, { style: h.actionContextIcon }))), r.createElement(a.Z, { style: h.actionContext }, r.createElement(s.ZP, { size: "subtext2", weight: "bold" }, d))),
                            r.createElement(
                                a.Z,
                                { "aria-label": d, "aria-live": "polite", style: h.actionGuideRight },
                                y.map((e, t) => r.createElement(a.Z, { key: `action-icon-${t}`, style: h.actionIcon }, e)),
                            ),
                        ),
                    );
                };
            var y = n(332920),
                C = n.n(y),
                b = n(725516),
                f = n(927389),
                v = n(668214),
                x = n(919022);
            const T = (e, t) => x.ZP.selectViewerUser(e),
                R = (0, v.Z)().propsFromState(() => ({ viewerUser: T })),
                E = C().a682906d,
                S = R(({ entry: e, feedbackItems: t, viewerUser: n }) => {
                    const o = (0, b.z)(),
                        a = e.content.onboardingLikesStartPrompt || void 0,
                        i = n?.favourites_count || 0,
                        s = a?.likesNeededToCompleteOnboarding || 0,
                        c = Math.max(0, s - i),
                        l = r.useMemo(() => (t?.length ? r.createElement(f.Z, { feedbackItems: t }) : void 0), [t]);
                    return (
                        r.useEffect(() => {
                            o.scribeAction("impression");
                        }, []),
                        r.createElement(g, { bodyText: a?.bodyRichText?.text, currentLikeCount: i, headerIconUrl: a?.headerIconUrl, headerText: a?.headerRichText?.text, likeContext: E({ count: c }), rightControl: l, totalLikeCount: s })
                    );
                }),
                k = o.iH({ component: S }).getHandler();
        },
        565410: (e, t, n) => {
            n.r(t), n.d(t, { default: () => Z });
            var o = n(459643),
                r = n(942893),
                a = n(351322),
                i = n(202784),
                s = n(325686),
                c = n(352924),
                l = n(154003),
                d = n(731708),
                p = n(392237),
                u = n(187669),
                m = n(23679);
            const h = Object.freeze({ Compact: "Compact", Normal: "Normal", Large: "Large", ThumbsUpAndDown: "ThumbsUpAndDown" });
            var g = n(725516),
                y = n(71620),
                C = n(668214),
                b = n(960919);
            const f = (0, C.Z)().propsFromActions(({ module: e }) => ({ applyReactionInstructions: e.applyReactionInstructions, createLocalApiErrorHandler: (0, y.zr)("RELEVANCE_PROMPT"), processCallback: b.Z, updateEntry: e.updateEntry }));
            var v = n(913973),
                x = n(837020);
            const T = (e) => ("IconCheckmark" === e ? i.createElement(v.default, null) : "IconClose" === e ? i.createElement(x.default, null) : void 0),
                R = (e, t) => {
                    if (e && e === h.ThumbsUpAndDown) return t ? "IconCheckmark" : "IconClose";
                },
                E = ({ applyReactionInstructions: e, createLocalApiErrorHandler: t, entry: n, processCallback: o, updateEntry: r }) => {
                    const a = n.content.relevancePrompt && n.content.relevancePrompt,
                        { confirmation: p, displayType: y = h.Compact, isRelevantCallback: C, isRelevantText: b, notRelevantCallback: f, notRelevantText: v, showConfirmation: x, subtitle: E, title: k } = a || {},
                        Z = (0, g.z)(),
                        P = R(y, !0),
                        w = R(y, !1),
                        I = y === h.ThumbsUpAndDown,
                        A = y === h.Compact,
                        D = y === h.Large,
                        _ = c.b();
                    (0, u.q)(() => {
                        Z.scribe({ element: "relevance_prompt", action: "impression" });
                    });
                    const H = i.useCallback(
                            (e) => {
                                a && r(n.entryId, { relevancePrompt: { ...a, showConfirmation: !0 } }), o(e).catch(t());
                            },
                            [t, n.entryId, o, a, r],
                        ),
                        M = i.useCallback(() => {
                            Z.scribe({ element: "is_relevant", action: "click" }), H(C), e({ entry: n, triggerName: m.K.ON_IS_RELEVANT });
                        }, [Z, e, n, C, H]),
                        L = i.useCallback(() => {
                            Z.scribe({ element: "not_relevant", action: "click" }), H(f);
                        }, [Z, f, H]),
                        O = k.length > 65 ? "title4" : "title3",
                        G = ({ isRelevant: e }) => {
                            const t = e ? b : v,
                                n = e ? P : w,
                                o = e ? M : L;
                            return i.createElement(l.ZP, { "aria-label": t, icon: n ? T(n) : void 0, onPress: o, size: n || D ? "large" : "xSmall", style: n ? S.icon : !D && S.button, type: "primaryOutlined" }, n ? null : t);
                        },
                        z = i.useMemo(() => [S.promptContainer, D && !x && S.promptContainerLarge], [D, x]),
                        U = i.useMemo(() => [I && S.thumbsUpDown, (A || D) && S.compact], [A, D, I]),
                        B = i.useMemo(() => [S.root, I && S.thumbsUpDown, D && S.large, A && S.compact], [I, D, A]),
                        F = i.useMemo(() => [S.buttonContainer, D && S.buttonContainerLarge], [D]);
                    return i.createElement(s.Z, { "aria-labelledby": _, role: "group", style: z }, x ? i.createElement(s.Z, { role: "alert" }, i.createElement(d.ZP, { style: U }, p)) : i.createElement(s.Z, { style: B }, i.createElement(s.Z, { style: D ? S.firstHalfLarge : S.firstHalf }, i.createElement(d.ZP, { id: _, size: D ? O : void 0, weight: D ? "heavy" : void 0 }, k), E ? i.createElement(d.ZP, { color: "gray700", size: "subtext2" }, E) : null), i.createElement(s.Z, { style: !D && S.secondHalf }, i.createElement(s.Z, { style: F }, i.createElement(G, { isRelevant: !0 }), i.createElement(G, { isRelevant: !1 })))));
                },
                S = p.default.create((e) => ({ button: { margin: "1ex" }, buttonContainer: { display: "grid", gridTemplateColumns: "repeat(2,1fr)" }, buttonContainerLarge: { display: "flex", flexDirection: "column", flexGrow: 1, rowGap: e.spacesPx.space16 }, secondHalf: { width: "50%", display: "grid", justifyContent: "end" }, firstHalf: { width: "50%", flexDirection: "column", justifyContent: "center" }, firstHalfLarge: { display: "flex", flexDirection: "column", rowGap: e.spacesPx.space8 }, root: { flexDirection: "row", justifyContent: "space-between" }, promptContainer: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, promptContainerLarge: { paddingHorizontal: e.spacesPx.space32, paddingVertical: e.spacesPx.space32 }, compact: { padding: e.spaces.space12, borderColor: e.colors.buttonOutlinedBorder, borderRadius: e.spaces.space4, borderStyle: "solid", borderWidth: e.borderWidths.small }, thumbsUpDown: { display: "flex", borderRadius: e.spaces.space8, padding: e.spaces.space12, backgroundColor: e.colors.orange0, alignItems: "center", minHeight: e.spaces.space64 }, large: { display: "flex", flexDirection: "column", rowGap: e.spacesPx.space20 }, icon: { marginStart: e.spaces.space12 } })),
                k = f(i.memo(E)),
                Z = a.iH({ component: k, getScribeDataItem: (e) => r.Z.forRelevancePrompt(e.itemMetadata.clientEventInfo), isFocusable: (0, o.Z)(!0), shouldDisplayBorder: (0, o.Z)(!0) }).getHandler();
        },
        927389: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(247056),
                a = n(392237);
            const i = (0, n(523561).Z)({ loader: () => n.e("loader.FeedbackSheet").then(n.bind(n, 774426)) });
            var s = n(725516),
                c = n(851623);
            const l = a.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, s.Z)((e) => {
                    const { analytics: t, feedbackItems: n, isDisplayedOnMedia: a } = e,
                        s = o.useCallback((e) => (n ? o.createElement(i, { actionItems: n, onClose: e }) : null), [n]),
                        d = o.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return n && n.length > 0 ? o.createElement(r.Z, { onClick: d, renderActionMenu: s, style: l.curationControl, testID: c.Z.caret, withDarkBackground: a }) : null;
                });
        },
        23679: (e, t, n) => {
            n.d(t, { K: () => o });
            const o = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        913309: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(325686),
                a = n(530525),
                i = n(731708),
                s = n(439592),
                c = n(154003),
                l = n(392237),
                d = n(444178);
            const p = "inlinePrompt",
                u = "inlinePrompt-primaryAction",
                m = "inlinePrompt-secondaryAction",
                h = "inlinePrompt-centeredImageContainer";
            class g extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = (e, t, n) => {
                            let i = o.createElement(a.Z, { "aria-label": "", aspectMode: s.Z.exact(e.width / e.height), backgroundColor: e.backgroundColor, customVariants: t, image: e });
                            return n && (i = o.createElement(d.Z, { link: n, role: "" }, " ", i)), e.isCentered ? o.createElement(r.Z, { style: y.centeredImage, testID: h }, o.createElement(r.Z, { style: { width: `${e.width}px`, height: `${e.height}px`, ...e.style } }, i)) : e.style ? o.createElement(r.Z, { style: e.style }, i) : i;
                        }),
                        (this._renderTitle = () => {
                            const { headline: e } = this.props;
                            return e ? o.createElement(i.ZP, { align: "left", role: "heading", size: "title3", style: y.flexGrow, weight: "heavy", withHashflags: !0 }, e) : null;
                        }),
                        (this._renderBodyText = () => {
                            const { subtext: e } = this.props;
                            return e ? o.createElement(i.ZP, { align: "left", color: "gray700", style: this.styles.body, withHashflags: !0 }, e) : null;
                        }),
                        (this._renderAction = ({ action: e, buttonSize: t, buttonType: n, style: a, testID: i }) => {
                            const { secondaryAction: s } = this.props,
                                { link: l, onClick: d, text: p } = e;
                            return o.createElement(r.Z, { style: [this.styles.actionContainer, a, { justifyContent: "flex-start" }], testID: i }, o.createElement(c.ZP, { link: l, onPress: d, size: t, style: { width: s ? "100%" : "auto" }, type: n }, p));
                        });
                }
                render() {
                    const { headline: e, image: t, imageActionUrl: n, imageVariants: a, primaryAction: i, rightControl: s, secondaryAction: c, shouldRenderBorder: l, subtext: d } = this.props;
                    return o.createElement(r.Z, { style: l ? [C.root, C.rootMargin] : y.root }, o.createElement(o.Fragment, null, t ? this._renderImage(t, a, n) : null, e || d || i || c ? o.createElement(r.Z, { style: this.styles.rootPadding, testID: p }, this._renderTitle(), this._renderBodyText(), i ? this._renderAction({ action: i, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: u }) : null, c ? this._renderAction({ action: c, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: m }) : null) : null), s ? o.createElement(r.Z, { style: y.rightControl }, s) : null);
                }
                get styles() {
                    return this.props.isCompact ? f : b;
                }
            }
            g.defaultProps = { shouldRenderBorder: !1 };
            const y = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, flexGrow: { flexGrow: 1 }, centeredImage: { display: "flex", flexDirection: "row", justifyContent: "center" }, rightControl: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, position: "absolute", end: 0, top: 0 } })),
                C = l.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, rootMargin: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16 } })),
                b = l.default.create((e) => ({ rootPadding: { padding: e.spaces.space32 }, body: { marginTop: e.spaces.space8 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space28 }, secondaryAction: { marginTop: e.spaces.space16 } })),
                f = l.default.create((e) => ({ rootPadding: { padding: e.spaces.space16 }, body: { marginTop: e.spaces.space2 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space4 }, secondaryAction: { marginTop: e.spaces.space2 } }));
        },
        173739: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(202784),
                r = n(31501),
                a = n(879891);
            const i = ({ accessibilityLabelValueText: e, "aria-label": t, onChange: n, onDarkBackground: i, thumbLabel: s, value: c, ...l }) => {
                const { direction: d } = (0, a.Z)(),
                    p = { ...l, endThumbAccessibilityLabel: t, endThumbAccessibilityLabelValueText: e, endThumbLabel: s, onDarkBackground: i, value: [l.min, c], onChange: (e) => n(e[1]), isSingleSlider: !0, languageWritingDirection: d };
                return o.createElement(r.Z, p);
            };
        },
        27137: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = n(157396);
            const r = (0, n(587878).Z)({ palette: o.CV.light, key: "light-blue-normal", highContrastEnabled: !1, chirpFontEnabled: !1, scale: "normal" });
        },
        151624: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(454479).Z;
        },
        454479: (e, t, n) => {
            n.d(t, { Z: () => h });
            var o = n(18198),
                r = n(661841),
                a = r.Z.currentCentroidXOfTouchesChangedAfter,
                i = r.Z.currentCentroidYOfTouchesChangedAfter,
                s = r.Z.previousCentroidXOfTouchesChangedAfter,
                c = r.Z.previousCentroidYOfTouchesChangedAfter,
                l = r.Z.currentCentroidX,
                d = r.Z.currentCentroidY,
                p = {
                    _initializeGestureState(e) {
                        (e.moveX = 0), (e.moveY = 0), (e.x0 = 0), (e.y0 = 0), (e.dx = 0), (e.dy = 0), (e.vx = 0), (e.vy = 0), (e.numberActiveTouches = 0), (e._accountsForMovesUpTo = 0);
                    },
                    _updateGestureStateOnMove(e, t) {
                        (e.numberActiveTouches = t.numberActiveTouches), (e.moveX = a(t, e._accountsForMovesUpTo)), (e.moveY = i(t, e._accountsForMovesUpTo));
                        var n = e._accountsForMovesUpTo,
                            o = s(t, n),
                            r = a(t, n),
                            l = c(t, n),
                            d = i(t, n),
                            p = e.dx + (r - o),
                            u = e.dy + (d - l),
                            m = t.mostRecentTimeStamp - e._accountsForMovesUpTo;
                        (e.vx = (p - e.dx) / m), (e.vy = (u - e.dy) / m), (e.dx = p), (e.dy = u), (e._accountsForMovesUpTo = t.mostRecentTimeStamp);
                    },
                    create(e) {
                        var t = { handle: null, shouldCancelClick: !1, timeout: null },
                            n = { stateID: Math.random(), moveX: 0, moveY: 0, x0: 0, y0: 0, dx: 0, dy: 0, vx: 0, vy: 0, numberActiveTouches: 0, _accountsForMovesUpTo: 0 };
                        return {
                            panHandlers: {
                                onStartShouldSetResponder: (t) => null != e.onStartShouldSetPanResponder && e.onStartShouldSetPanResponder(t, n),
                                onMoveShouldSetResponder: (t) => null != e.onMoveShouldSetPanResponder && e.onMoveShouldSetPanResponder(t, n),
                                onStartShouldSetResponderCapture: (t) => (1 === t.nativeEvent.touches.length && p._initializeGestureState(n), (n.numberActiveTouches = t.touchHistory.numberActiveTouches), null != e.onStartShouldSetPanResponderCapture && e.onStartShouldSetPanResponderCapture(t, n)),
                                onMoveShouldSetResponderCapture(t) {
                                    var o = t.touchHistory;
                                    return n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (p._updateGestureStateOnMove(n, o), !!e.onMoveShouldSetPanResponderCapture && e.onMoveShouldSetPanResponderCapture(t, n));
                                },
                                onResponderGrant: (r) => (
                                    t.handle || (t.handle = o.Z.createInteractionHandle()),
                                    t.timeout &&
                                        (function (e) {
                                            clearTimeout(e.timeout);
                                        })(t),
                                    (t.shouldCancelClick = !0),
                                    (n.x0 = l(r.touchHistory)),
                                    (n.y0 = d(r.touchHistory)),
                                    (n.dx = 0),
                                    (n.dy = 0),
                                    e.onPanResponderGrant && e.onPanResponderGrant(r, n),
                                    null == e.onShouldBlockNativeResponder || e.onShouldBlockNativeResponder(r, n)
                                ),
                                onResponderReject(o) {
                                    u(t, e.onPanResponderReject, o, n);
                                },
                                onResponderRelease(o) {
                                    u(t, e.onPanResponderRelease, o, n), m(t), p._initializeGestureState(n);
                                },
                                onResponderStart(t) {
                                    var o = t.touchHistory;
                                    (n.numberActiveTouches = o.numberActiveTouches), e.onPanResponderStart && e.onPanResponderStart(t, n);
                                },
                                onResponderMove(t) {
                                    var o = t.touchHistory;
                                    n._accountsForMovesUpTo !== o.mostRecentTimeStamp && (p._updateGestureStateOnMove(n, o), e.onPanResponderMove && e.onPanResponderMove(t, n));
                                },
                                onResponderEnd(o) {
                                    var r = o.touchHistory;
                                    (n.numberActiveTouches = r.numberActiveTouches), u(t, e.onPanResponderEnd, o, n);
                                },
                                onResponderTerminate(o) {
                                    u(t, e.onPanResponderTerminate, o, n), m(t), p._initializeGestureState(n);
                                },
                                onResponderTerminationRequest: (t) => null == e.onPanResponderTerminationRequest || e.onPanResponderTerminationRequest(t, n),
                                onClickCapture: (e) => {
                                    !0 === t.shouldCancelClick && (e.stopPropagation(), e.preventDefault());
                                },
                            },
                            getInteractionHandle: () => t.handle,
                        };
                    },
                };
            function u(e, t, n, r) {
                e.handle && (o.Z.clearInteractionHandle(e.handle), (e.handle = null)), t && t(n, r);
            }
            function m(e) {
                e.timeout = setTimeout(() => {
                    e.shouldCancelClick = !1;
                }, 250);
            }
            const h = p;
        },
        661841: (e, t, n) => {
            n.d(t, { Z: () => r });
            var o = {
                centroidDimension: function (e, t, n, r) {
                    var a = e.touchBank,
                        i = 0,
                        s = 0,
                        c = 1 === e.numberActiveTouches ? e.touchBank[e.indexOfSingleActiveTouch] : null;
                    if (null !== c) c.touchActive && c.currentTimeStamp > t && ((i += r && n ? c.currentPageX : r && !n ? c.currentPageY : !r && n ? c.previousPageX : c.previousPageY), (s = 1));
                    else
                        for (var l = 0; l < a.length; l++) {
                            var d = a[l];
                            if (null != d && d.touchActive && d.currentTimeStamp >= t) {
                                (i += r && n ? d.currentPageX : r && !n ? d.currentPageY : !r && n ? d.previousPageX : d.previousPageY), s++;
                            }
                        }
                    return s > 0 ? i / s : o.noCentroid;
                },
                currentCentroidXOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !0, !0);
                },
                currentCentroidYOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !1, !0);
                },
                previousCentroidXOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !0, !1);
                },
                previousCentroidYOfTouchesChangedAfter: function (e, t) {
                    return o.centroidDimension(e, t, !1, !1);
                },
                currentCentroidX: function (e) {
                    return o.centroidDimension(e, 0, !0, !0);
                },
                currentCentroidY: function (e) {
                    return o.centroidDimension(e, 0, !1, !0);
                },
                noCentroid: -1,
            };
            const r = o;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.promptHandler.4a52f05a.js.map
