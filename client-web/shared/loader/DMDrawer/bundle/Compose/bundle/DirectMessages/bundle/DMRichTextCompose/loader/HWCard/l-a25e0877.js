"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a25e0877"],
    {
        596036: (e, t, n) => {
            n.d(t, { Z: () => a });
            const a = n(202784).createContext(Object.freeze({}));
        },
        747101: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                i = n(503229),
                r = n(379869),
                o = n(836938),
                s = n(85375),
                l = n(596036),
                d = n(542908);
            const c = ({ buttonData: e, card: t, componentType: n, destinationData: a, destinationKey: l, isInteractive: c = !0, media: p, onCardLinkClick: u, onEventReminderClick: m, onPollVote: h, onPromotedLogEvent: g, promotedContent: b, scribeCardAction: _, transformUrl: y, updateCardState: f }) => {
                    if (!t || !c) return {};
                    const C = (e, t) => [t && void 0 !== t.data.index ? t.data.index : void 0, e.type === s._g.ACTION && e.data.auth_required],
                        v = (e, t, n, a) => {
                            const [i, r] = C(e, n);
                            _ && _({ action: e.data.scribe, componentType: t, ctaIndex: i, isAuthRequired: r, clickContext: a || void 0 }), S({ action: e.data.promoted_log, componentType: t, ctaIndex: i, isAuthRequired: r });
                        },
                        E = (e, t, n) => {
                            n && (f && f(n), t && o.v.storeCardState(e, n));
                        },
                        S = ({ action: e, componentType: n, ctaIndex: a, isAuthRequired: i }) => {
                            if (!t || !g) return;
                            const r = { action: e, componentType: n, isAuthRequired: i };
                            "number" == typeof a && (r.buttonIndex = a), g(r);
                        },
                        x = l ? t.destinations[l] : a,
                        k = y ?? i.Z;
                    if (!x) return {};
                    switch (x.type) {
                        case s._g.BROWSER:
                        case s._g.BROWSER_WITH_DOCKED_MEDIA:
                        case s._g.BROWSER_WITH_MEDIA:
                        case s._g.BROWSER_WITH_NEXT_STATE: {
                            const a = t.card_name === s.sj.UNIFIED_CARD;
                            return {
                                link: a && y ? y(x.data.url_data.url, { ...(x.data.scribe_element ? { element: x.data.scribe_element } : null), action: "click" }) : k(x.data.url_data.url),
                                onClick: (i) => {
                                    const o = { originalUrl: (0, r.Z)(x.data.url_data.url), embeddedUrl: (0, r.Z)(k(x.data.url_data.url)) };
                                    if (
                                        (v(x, n, e, o),
                                        u && u(i),
                                        o &&
                                            ((e, t, n, a) => {
                                                const [i, r] = C(e, n);
                                                _ && _({ action: d.bQ.CLICK_ID_EMBED, componentType: t, ctaIndex: i, isAuthRequired: r, clickContext: a });
                                            })(x, n, e, o),
                                        a &&
                                            ((e, t, n) => {
                                                const [a, i] = C(e, n);
                                                _ && _({ action: d.bQ.CLICK, element: e.data.scribe_element || void 0, componentType: t, ctaIndex: a, isAuthRequired: i });
                                            })(x, n, e),
                                        x.type === s._g.BROWSER_WITH_NEXT_STATE)
                                    ) {
                                        const { action_data: e } = x.data,
                                            { next_state: n, persist: a } = e || {};
                                        E(t.id, a, n);
                                    }
                                },
                            };
                        }
                        case s._g.MOMENT:
                            return { link: o.v.getMomentLink(x.data.moment_data.moment), onClick: () => v(x, n, e) };
                        case s._g.EVENT:
                            return { link: { pathname: o.v.getEventLink(x.data.event_data.id), state: { promotedCardState: { media: p, promotedContent: b } } }, onClick: () => v(x, n, e) };
                        case s._g.BROADCAST:
                            return { link: { pathname: o.v.getBroadcastLink(x.data.broadcast_data.id), state: { promotedContent: b } }, onClick: () => v(x, n, e) };
                        case s._g.ACTION: {
                            const { action_data: a } = x.data,
                                { next_state: i, persist: r } = a,
                                s = (s) => {
                                    switch ((v(x, n, e), a.type)) {
                                        case "compose":
                                            if (e) {
                                                const { index: n, tweet: a } = e.data,
                                                    r = { button_index: n };
                                                o.v.composeTweet(t.id, a, i, { ...b, conversational_card_details: r });
                                            }
                                            break;
                                        case "dm":
                                            a.recipient && o.v.composeDirectMessage({ recipient: a.recipient, welcomeMessageId: (e && e.data.wm_id) || void 0, messageText: (e && e.data.composer_text) || void 0 });
                                            break;
                                        case "vote":
                                            e && ((l = e.data.index), h && t && h({ cardId: t.id, choice: l }));
                                            break;
                                        case "reminder":
                                            e &&
                                                ((e) => {
                                                    if (e.data.eventId && e.data.notificationId) {
                                                        const { eventId: n, isSelected: a = !1, notificationId: i } = e.data;
                                                        m && t && m({ cardId: t.id, eventId: n, notificationId: i, remindMe: !a });
                                                    }
                                                })(e);
                                            break;
                                        default:
                                            E(t.id, r, i), s && s.stopPropagation();
                                    }
                                    var l;
                                };
                            return { onClick: s };
                        }
                        case s._g.PROFILE: {
                            const { user_id: e } = x.data;
                            return { link: { pathname: o.v.getProfileLink(e), state: { promotedContent: b } }, onClick: () => v(x, n) };
                        }
                        default:
                            return {};
                    }
                },
                p = ({ children: e, ...t }) =>
                    e(
                        ((e) => {
                            const t = a.useContext(l.Z);
                            return c({ ...e, ...t });
                        })(t),
                    );
        },
        935341: (e, t, n) => {
            n.d(t, { CO: () => p, IM: () => c, IW: () => d, Jz: () => m, nT: () => h });
            var a = n(625944),
                i = n(392237);
            const r = Object.freeze({ large: { title: 1, description: 2 }, medium: { title: 2, description: 1 }, small: { title: 2, description: 0 } }),
                o = Object.freeze({ large: { title: 1, description: 2 }, medium: { title: 2, description: 1 }, small: { title: 2, description: 0 } }),
                s = Object.freeze({ large: 5, medium: 4, small: 3 }),
                l = Object.freeze({ large: "DEPRECATED_normal", medium: "DEPRECATED_normalCompact", small: "DEPRECATED_normalCompact" }),
                d = (e, t, n, a = {}) => {
                    const i = { large: o, small: r }[e],
                        { alwaysShowDescription: s = !1, capMaxTitleLines: l = Number.MAX_SAFE_INTEGER } = a,
                        d = t >= 450 ? i.large : t >= 400 ? i.medium : i.small,
                        c = [n.category || null, n.attribution || null, n.footer || null, n.vanity || null],
                        { description: p, title: u } = n,
                        m = c.some(Boolean),
                        h = Math.min(l, d.title + (p ? 0 : d.description) + (m ? 0 : 1)),
                        g = Math.max(s ? 1 : 0, "small" !== e || u || m ? d.description : d.description + 1);
                    return "small" === e ? { titleMaxLines: h, descriptionMaxLines: g } : { titleMaxLines: Math.min(2, h), descriptionMaxLines: g };
                },
                c = (e, t) => {
                    const n = [t.category || null, t.attribution || null, t.footer || null, t.vanity || null, t.title, t.description].filter(Boolean).length,
                        a = e >= 450 ? s.large : e >= 400 ? s.medium : s.small;
                    return u(a, n);
                },
                p = (e) => (e >= 450 ? l.large : e >= 400 ? l.medium : l.small),
                u = (e, t) => {
                    const { borderWidths: n, lineHeights: a, spaces: r } = i.default.theme;
                    return `calc(${`${a.body} * ${e}`} + ${`${r.space12} * 2`} + ${`${n.small} * 2`} + ${`${r.space2} * ${t - 1}`})`;
                },
                m = (e, t) => {
                    const n = e ? Math.abs(e - t) : 1 / 0,
                        i = a.Z.getScrollbarWidth();
                    return void 0 === e || n > i;
                },
                h = ({ buttonSize: e, descriptionMaxLines: t, details: n, hasButtons: a, playOverlaySize: i, titleMaxLines: r, width: o }) => {
                    const s = n ? d("large", o, n) : { titleMaxLines: void 0, descriptionMaxLines: void 0 },
                        l = a ? p(o) : void 0,
                        c = o < 175 ? "small" : "normal",
                        { descriptionMaxLines: u, titleMaxLines: m } = s;
                    if (m !== r || u !== t || c !== i || (l && l !== e)) return { buttonSize: l, descriptionMaxLines: u, playOverlaySize: c, titleMaxLines: m };
                };
        },
        835622: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                i = n(325686),
                r = n(336373),
                o = n(392237),
                s = n(366635);
            const l = o.default.create((e) => ({ wrapper: { paddingHorizontal: e.spaces.space12 } })),
                d = (e) => {
                    const { scribeAction: t, user: n } = e,
                        o = r.Z.useAnalytics(),
                        d = a.useCallback(() => {
                            if (t) {
                                const e = { action: t };
                                o.scribe(e);
                            }
                        }, [o, t]);
                    return a.createElement(i.Z, { style: l.wrapper }, a.createElement(s.Z, { isBlueVerified: n.is_blue_verified, isProtected: n.protected, isVerified: n.verified, name: n.name, onAvatarClick: d, onLinkClick: d, profileImageUrl: n.profile_image_url_https, screenName: n.screen_name, verifiedType: n.verified_type, withLink: !0, withScreenName: !1 }));
                };
        },
        268181: (e, t, n) => {
            n.d(t, { Z: () => v });
            var a = n(807896),
                i = n(202784),
                r = n(325686),
                o = n(684869),
                s = n(717160),
                l = n(630715),
                d = n(461756),
                c = n(167630),
                p = n(815858),
                u = n(154003),
                m = n(392237),
                h = n(836938),
                g = n(596036),
                b = n(747101),
                _ = n(542908),
                y = n(966385);
            class f extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderButton = (e, t) => {
                            const { buttonLayout: n, buttonSize: a, buttonStyleType: o, cardContext: s, disableIcon: l, disabled: g, role: _, text: f, translations: v } = this.props,
                                E = e.data,
                                S = this._getButtonIcon(E.icon) || void 0,
                                x = t > 0 && "horizontal" !== n,
                                k = t > 0 && "horizontal" === n,
                                w = (0, y.v)(o, e),
                                L = "radiogroup" === _ ? "radio" : "button";
                            return "bookmark" === E.buttonType
                                ? i.createElement(r.Z, { style: k && C.buttonLeftMargin }, h.v.renderBookmarkButton(s?.tweetId))
                                : i.createElement(b.Z, { buttonData: e, componentType: "button_group", destinationKey: E.destination, key: E.index }, ({ link: e, onClick: n }) => {
                                      const r = i.createElement(u.ZP, { "aria-label": E["aria-label"], disabled: g, icon: l ? void 0 : S, key: E.index, link: e, onPress: g ? void 0 : n, role: E.role || L, size: a, style: [C.button, !g && C.buttonWithPointer, x && C.buttonTopMargin, k && C.buttonLeftMargin], type: w }, E.isLoading ? i.createElement(c.Z, { color: m.default.theme.colors.buttonWhite, style: C.activityIndicator }) : f || v?.[t] || E.cta);
                                      return E.withSlidingAnimation && !d.Z.reducedMotionEnabled ? i.createElement(p.Z, { animateMount: !0, duration: "long", show: !0, type: "slide" }, r) : r;
                                  });
                        }),
                        (this._scribeImpression = (e) => {
                            const { scribeCardAction: t } = this.props;
                            t && t({ componentType: "card_button", element: e.data.scribeElement, action: _.bQ.IMPRESSION });
                        });
                }
                componentDidMount() {
                    const { buttons: e, scribeCardAction: t } = this.props;
                    t && e.map((e) => e.data.scribeElement && this._scribeImpression(e));
                }
                render() {
                    const { "aria-describedby": e, "aria-label": t, buttonLayout: n, buttons: a, chromeless: o, role: s, style: l } = this.props;
                    return i.createElement(r.Z, { "aria-describedby": e, "aria-label": t, role: s, style: [!o && C.wrapperPadding, l, "horizontal" === n && C.horizontalLayout] }, i.createElement(i.Fragment, null, a.map(this._renderButton)));
                }
                _getButtonIcon(e) {
                    switch (e) {
                        case "bell":
                            return i.createElement(o.default, null);
                        case "dm":
                            return i.createElement(s.default, null);
                        case "link":
                            return i.createElement(l.default, null);
                        default:
                            return null;
                    }
                }
            }
            const C = m.default.create((e) => ({ wrapperPadding: { padding: e.spaces.space12 }, activityIndicator: { marginHorizontal: e.spaces.space20, marginTop: e.spaces.space4 }, button: { flexGrow: 1 }, buttonWithPointer: { cursor: "pointer" }, buttonTopMargin: { marginTop: e.spaces.space4 }, buttonLeftMargin: { marginStart: e.spaces.space12 }, horizontalLayout: { flexDirection: "row" } })),
                v = ((E = f), (e) => i.createElement(g.Z.Consumer, null, (t) => i.createElement(E, (0, a.Z)({}, e, t))));
            var E;
        },
        966385: (e, t, n) => {
            n.d(t, { v: () => a });
            const a = (e, t) => e || (t.data?.styleType ?? (t.data?.isAppDetails || t.data?.isSelected ? "brandFilled" : "DEPRECATED_secondary"));
        },
        999066: (e, t, n) => {
            n.d(t, { ZP: () => w });
            var a = n(807896),
                i = n(202784),
                r = n(325686),
                o = n(111677),
                s = n.n(o),
                l = n(803810),
                d = n(461756),
                c = n(731708),
                p = n(682474),
                u = n(521812),
                m = n(174326),
                h = n(235902),
                g = n(868634),
                b = n(392237),
                _ = n(836938),
                y = n(596036),
                f = n(542908);
            const C = s().b74bf8b8,
                v = s().a7cd5cf4,
                E = s().df8cd2af;
            class S extends i.Component {
                constructor(e) {
                    super(e),
                        (this._onViewRef = (e) => (t) => {
                            if (!t) return;
                            const n = this._createHandleOnClickCapture(e);
                            t.addEventListener("click", n, { capture: !0 });
                        }),
                        (this._renderCarousel = () => {
                            const { fullHeightSlides: e, getMediaEntityForSlide: t, items: n, navButtonStyle: a, navigationOffsetValue: o, renderSlide: s, safariShouldUseCardCarouselV2: l, shouldRenderAll: d, title: c, vanity: p } = this.props,
                                { currentSlide: h, isFullscreen: g, loadedSlide: b, transitionAccessibilityLabel: _ } = this.state,
                                y = this._shouldUseCarouselV2(),
                                f = l?.() || "control",
                                C = k(n.length, t),
                                v = n.map((e, t) => {
                                    return i.createElement(r.Z, { key: t, onClick: void 0, ref: this._onViewRef(t), testID: ((a = t), `Carousel-slideClickCaptureWrapper-${a}`) }, s({ createBoundRenderVideoPlayer: this._createBoundRenderVideoPlayer, currentSlide: h, index: t, item: e, loadedSlide: b, position: (0 === t ? "first" : t === n.length - 1 && "last") || "middle", forcedMediaAspectRatio: C, title: c, vanity: p }));
                                    var a;
                                });
                            return y ? i.createElement(m.Z, { "aria-label": _, childrenStyle: [x.fullWidth, "overflow" === f && x.safariV2OverflowVariant], navButtonStyle: a, onVisibleRangeChange: this._handleSlideChangeV2, scrollToCenter: !0, showNavButtonsOnHover: "buttons" !== f, visibleItemIndex: h, withOffscreenItems: !0, withWraparound: !1 }, v) : i.createElement(u.ZP, { cellSpacing: 5, currentSlide: h, fullHeightSlides: e, locked: g, navigationOffsetValue: o, onChange: this._handleSlideChange, onRest: this._handleUpdatingLoadedSlide, receivesFocusOnChange: u.Nr.carouselRoot, setParentAspectRatio: this._setAspectRatio, shouldRenderAll: d, showNavButtonsOnHover: !0, transitionAccessibilityLabel: _ }, v);
                        }),
                        (this._shouldUseCarouselV2 = () => {
                            const { nonSafariShouldUseCardCarouselV2: e, safariShouldUseCardCarouselV2: t } = this.props,
                                n = "control" !== t?.(),
                                a = e?.();
                            return n || a;
                        }),
                        (this._createBoundRenderVideoPlayer = (e) => {
                            if ("uc_video" !== e.type && "animated_gif" !== e.type) return;
                            const { getMediaEntityForSlide: t, isDataSaverEnabled: n, isPromoted: a, items: r, renderVideoPlayer: o, vanity: s } = this.props,
                                { shouldAutoplayWithoutMuting: l } = this.state,
                                d = k(r.length, t),
                                p = { onPlaybackComplete: this._handlePlaybackComplete, onFullscreenChange: this._handleFullscreenChange, onSetPlayerApi: this._handleSetPlayerApi, onMuteChange: this._handleMuteChange },
                                u = n ? (a ? "suboptimal" : "preview") : void 0,
                                m = s ? [i.createElement(g.ZP, { key: "vanity" }, i.createElement(c.ZP, null, s))] : [];
                            return o ? () => o(e, u, d, l, p, m) : void 0;
                        }),
                        (this._createHandleOnClickCapture = (e) => (t) => {
                            const { currentSlide: n } = this.state,
                                a = e > n ? "next" : "prev";
                            e !== n && (t.preventDefault(), t.stopPropagation(), this._handleSlideChange(e, a));
                        }),
                        (this._handleMuteChange = ({ isPlayerMuted: e }) => {
                            const { shouldAutoplayWithoutMuting: t } = this.state,
                                n = !e;
                            t !== n && this.setState({ shouldAutoplayWithoutMuting: n });
                        }),
                        (this._handleSetPlayerApi = (e) => {
                            this.setState({ currentVideoPlayer: e });
                        }),
                        (this._handleFullscreenChange = ({ isPlayerFullscreen: e }) => this.setState({ isFullscreen: e })),
                        (this._handlePlaybackComplete = () => {
                            const { items: e, shouldAutoAdvance: t } = this.props,
                                { currentSlide: n, isFullscreen: a, loadedSlide: i } = this.state,
                                r = n === e.length - 1;
                            if (!a && i === n && !r && t) {
                                const e = n + 1;
                                this._handleSlideChange(e, "next", f.bQ.AUTO_SWIPE);
                            }
                        }),
                        (this._handleSlideChange = (e, t, n = f.bQ.USER_SWIPE) => {
                            const { card: a } = this.props,
                                { currentVideoPlayer: i } = this.state,
                                r = "prev" === t ? e + 1 : e - 1,
                                o = this._shouldUseCarouselV2();
                            i && i.pause();
                            const s = d.Z.reducedMotionEnabled || o,
                                c = this._getTransitionA11yLabel(e);
                            this._updateCarouselEventDetailsState(e, r), this._scribeAndLogEvent({ currentIndex: e, previousIndex: r, scribeAction: n }), this.setState({ currentSlide: e, ...(0, l.Z)(c ? { transitionAccessibilityLabel: c } : null), ...(0, l.Z)(s ? { loadedSlide: e } : null) }, () => a && _.v.storeCarouselIndex(a.id, e));
                        }),
                        (this._handleSlideChangeV2 = ({ index: e, intersectionRatio: t }) => {
                            const { currentSlide: n } = this.state;
                            if (1 === t && n !== e) {
                                const t = e > n ? "next" : "prev";
                                this._handleSlideChange(e, t);
                            }
                        }),
                        (this._handleUpdatingLoadedSlide = (e) => {
                            this.setState({ loadedSlide: e });
                        }),
                        (this._updatePromotedLogState = (e) => {
                            const { getPromotedLogData: t, promotedLogData: n, updatePromotedLogState: a } = this.props,
                                i = { ...n, ...t(e + 1) };
                            a && a(i);
                        }),
                        (this._setAspectRatio = (e) => {
                            this.setState({ aspectRatio: e });
                        });
                    const t = e.carouselIndex || 0;
                    this.state = { aspectRatio: k(e.items.length, e.getMediaEntityForSlide, { heightOffset: e.initialHeightOffset }), currentSlide: t, loadedSlide: t, transitionAccessibilityLabel: this._getTransitionA11yLabel(t) || void 0, isFullscreen: !1, shouldAutoplayWithoutMuting: !1 };
                }
                componentDidMount() {
                    const { currentSlide: e } = this.state;
                    this._updatePromotedLogState(e), this._updateCarouselEventDetailsState(e, 0);
                }
                static getDerivedStateFromProps(e, t) {
                    return e.items.length - 1 < t.currentSlide ? { ...t, currentSlide: e.items.length - 1 } : null;
                }
                render() {
                    const { aspectRatio: e } = this.state,
                        t = this._renderCarousel();
                    return this._shouldUseCarouselV2() ? i.createElement(r.Z, null, t) : i.createElement(p.Z, { ratio: e, style: x.aspectRatio }, i.createElement(r.Z, { style: x.root }, t));
                }
                _updateCarouselEventDetailsState(e, t) {
                    const { getClientEventData: n, updateCarouselEventDetailsState: a } = this.props;
                    if (a) {
                        a(n({ currentIndex: e, previousIndex: t }));
                    }
                }
                _getTransitionA11yLabel(e) {
                    const { getMediaEntityForSlide: t, items: n } = this.props,
                        a = t(e);
                    return "photo" === a?.type ? E({ currentSlide: e + 1, itemCount: n.length, type: C, altText: a.altText || "" }) : "uc_video" === a?.type ? E({ currentSlide: e + 1, itemCount: n.length, type: v, altText: "" }) : void 0;
                }
                _scribeAndLogEvent({ currentIndex: e, previousIndex: t, scribeAction: n }) {
                    const { getClientEventData: a, getPromotedLogData: i, onPromotedLogEvent: r, scribeCardAction: o } = this.props;
                    if ((this._updatePromotedLogState(e), n === f.bQ.USER_SWIPE)) {
                        const n = i(t + 1);
                        r && r({ action: e > t ? "unified_card_carousel_swipe_next" : "unified_card_carousel_swipe_previous", ...n });
                    }
                    const s = a({ previousIndex: t, currentIndex: e });
                    o && o({ action: n, componentType: "swipeable_media", carouselEventDetails: s });
                }
            }
            S.defaultProps = { carouselIndex: 0 };
            const x = b.default.create((e) => ({ root: { height: "100%" }, aspectRatio: { overflow: "visible" }, fullWidth: { marginEnd: "6px", scrollSnapAlign: "center", width: "100%" }, safariV2OverflowVariant: { width: "90%" } })),
                k = (e, t, n) => {
                    const { heightOffset: a } = n || {};
                    let i;
                    for (let n = 0; n < e; n++) {
                        const e = t(n);
                        if ("uc_video" === e?.type || "animated_gif" === e?.type) {
                            const { height: t, width: n } = e.original_info;
                            i = n / (t + (a || 0));
                            break;
                        }
                    }
                    if (!i) {
                        const e = t(0);
                        if ("photo" === e?.type) {
                            const { height: t, width: n } = e.original_info;
                            i = n / (t + (a || 0));
                        }
                    }
                    return i || 2;
                },
                w = ((L = S), (e) => i.createElement(h.ZP.UseProps, null, ({ nonSafariShouldUseCardCarouselV2: t, safariShouldUseCardCarouselV2: n }) => i.createElement(y.Z.Consumer, null, (r) => i.createElement(L, (0, a.Z)({}, e, r, { nonSafariShouldUseCardCarouselV2: t, safariShouldUseCardCarouselV2: n })))));
            var L;
        },
        260618: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                i = n(325686),
                r = n(111677),
                o = n.n(r),
                s = n(731708),
                l = n(154003),
                d = n(642153),
                c = n(530732),
                p = n(891198),
                u = n(392237),
                m = n(836938),
                h = n(94909),
                g = n(747101),
                b = n(615919);
            const _ = o().d6885d3e,
                y = u.default.create((e) => ({ facepileContainer: { flexDirection: "row" }, count: { display: "flex", alignItems: "center", marginStart: e.spaces.space8 }, wrapper: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, spaceBelow: { marginBottom: e.spaces.space8 }, backgroundColorWhite: { height: "100%", width: "100%", backgroundColor: e.colors.white, zIndex: -2 }, backgroundColor: { height: "100%", width: "100%", zIndex: -1, backgroundColor: e.colors.gray0 } })),
                f = (e) => {
                    const { destination: t, facepileUsers: n, memberCount: r, style: f, title: C, titleMaxLines: v } = e,
                        E = n ? (0, h.VR)(n) : void 0;
                    return a.createElement(g.Z, { componentType: "community_details", destinationKey: t }, ({ link: e, onClick: t }) => a.createElement(c.Z, { interactive: !1, link: e, onClick: t, style: [y.wrapper, f] }, a.createElement(i.Z, { style: y.spaceBelow }, a.createElement(b.Z, { color: "text", dir: (0, h.XP)(C.is_rtl), numberOfLines: m.v.shouldLimitTextToSingleLine() ? 1 : v, size: "headline1", type: "title", weight: "bold" }, C.content)), a.createElement(i.Z, { style: [y.facepileContainer, y.spaceBelow] }, E ? a.createElement(i.Z, { "aria-hidden": !0 }, a.createElement(d.Z, { userAvatarSize: "large", userAvatarUrls: E })) : null, a.createElement(s.ZP, { color: "text", style: y.count }, a.createElement(o().I18NFormatMessage, { $i18n: "d6b02329", formattedCount: (0, p.wl)(r), count: r }))), a.createElement(l.ZP, { "aria-label": _, type: "primaryFilled" }, _), a.createElement(i.Z, { style: [u.default.absoluteFill, y.backgroundColor] }), a.createElement(i.Z, { style: [u.default.absoluteFill, y.backgroundColorWhite] })));
                };
        },
        719282: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(202784),
                i = n(325686),
                r = n(731708),
                o = n(530732),
                s = n(392237),
                l = n(366635),
                d = n(836938),
                c = n(94909),
                p = n(747101),
                u = n(615919);
            class m extends a.Component {
                render() {
                    const { "aria-hidden": e, "aria-label": t, destination: n } = this.props;
                    return a.createElement(p.Z, { componentType: "details", destinationKey: n }, ({ link: n, onClick: i }) => a.createElement(o.Z, { "aria-hidden": e, "aria-label": t, interactive: !1, link: n, onClick: i, style: h.detailItemsWrapper }, this._renderDetailContent(), this._renderExtraContent()));
                }
                _renderExtraContent() {
                    const { extraContent: e } = this.props;
                    return e ? a.createElement(i.Z, { style: h.extraContentWrapper }, e) : null;
                }
                _renderDPADetails() {
                    const { price: e, salePrice: t } = this.props;
                    return t ? a.createElement(i.Z, { style: h.priceWrapper }, a.createElement(r.ZP, { color: "green500", weight: "bold" }, t), a.createElement(r.ZP, { color: "gray700", style: h.previousPrice }, e)) : a.createElement(r.ZP, { weight: "bold" }, e);
                }
                _renderDetailContent() {
                    const { attribution: e, category: t, chromeless: n, description: r, descriptionColor: o, descriptionMaxLines: s, destination: p, footer: m, id: g, price: b, style: _, testID: y, title: f, titleMaxLines: C, titleWeight: v, vanity: E, vanityColor: S, withBottomPadding: x } = this.props,
                        k = !p;
                    return a.createElement(i.Z, { id: g, style: [h.textContentWrapper, !n && [h.wrapperPadding, x && h.bottomPadding], _], testID: y }, e ? a.createElement(l.Z, { isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, verifiedType: e.verified_type, withLink: k }) : null, t ? a.createElement(u.Z, { dir: (0, c.XP)(t.is_rtl), numberOfLines: 1, type: "description" }, t.content) : null, E ? a.createElement(u.Z, { color: S, dir: "auto", disableIcon: !0, numberOfLines: 1, type: "vanity" }, E) : null, f ? a.createElement(u.Z, { dir: (0, c.XP)(f.is_rtl), numberOfLines: d.v.shouldLimitTextToSingleLine() ? 1 : C, type: "title", weight: v }, f.content) : null, r ? a.createElement(u.Z, { color: o, dir: (0, c.XP)(r.is_rtl), numberOfLines: d.v.shouldLimitTextToSingleLine() ? 1 : s, type: "description" }, r.content) : null, null != b && this._renderDPADetails(), m ? a.createElement(u.Z, { dir: "auto", numberOfLines: 1, type: "description" }, m) : null);
                }
            }
            const h = s.default.create((e) => ({ attributionWrapper: { alignItems: "flex-start" }, detailItemsWrapper: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, extraContentWrapper: { flexShrink: 0, padding: e.spaces.space12 }, textContentWrapper: { flexGrow: 1, flexShrink: 1, justifyContent: "center", gap: e.spaces.space2 }, wrapperPadding: { paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space12 }, bottomPadding: { paddingBottom: e.spaces.space12 }, priceWrapper: { flexDirection: "row" }, previousPrice: { marginStart: e.spaces.space4, textDecorationLine: "line-through" } })),
                g = m;
        },
        822025: (e, t, n) => {
            n.d(t, { ZP: () => b });
            var a = n(202784),
                i = n(325686),
                r = n(731708),
                o = n(530732),
                s = n(470397),
                l = n(537392),
                d = n(392237),
                c = n(836938),
                p = n(94909),
                u = n(747101),
                m = n(615919);
            const h = 2,
                g = d.default.create((e) => {
                    const t = d.default.isDarkMode() ? "rgba(255,255,255,.12)" : "rgba(0,0,0,.1)";
                    return { bottomPadding: { paddingBottom: e.spaces.space12 }, detailItemsWrapper: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, label: { backgroundColor: t, borderRadius: e.borderRadii.xSmall, marginEnd: e.spaces.space8, paddingHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})`, paddingVertical: e.spaces.space4 }, middotGroupOnTop: { marginBottom: e.spaces.space8 }, middotGroupWithLabel: { flexDirection: "row" }, spaceAboveLarge: { marginTop: `calc(${e.spaces.space2} + ${e.spaces.space4})` }, spaceAboveRegular: { marginTop: e.spaces.space4 }, textContentWrapper: { flexGrow: 1, flexShrink: 1, gap: e.spaces.space2, justifyContent: "center", paddingTop: e.spaces.space12, paddingHorizontal: e.spaces.space12 } };
                }),
                b = (e) => {
                    const { description: t, descriptionMaxLines: n = h, descriptionTextColor: b = "gray900", destination: _, label: y, middotGroupContents: f, middotGroupOnTop: C = !1, middotGroupSize: v = "normal", middotGroupTextColor: E = "gray700", showDescriptionOnSmallScreens: S = !1, title: x, titleMaxLines: k, titleSize: w = "normal", titleWeight: L = "bold", withBottomPadding: P } = e,
                        Z = "large" === v ? "body" : "subtext1",
                        I = (e, t) => a.createElement(r.ZP, { color: E, key: t, numberOfLines: 1, size: Z }, e),
                        T = a.createElement(l.ZP, null, ({ containerWidth: e }) =>
                            ((e) => {
                                const o = !!S || !e;
                                let l,
                                    d = "headline1";
                                "large" === w ? (d = e ? "headline1" : "title4") : "normal" === w && (d = e ? "headline2" : "headline1"), (l = c.v.shouldLimitTextToSingleLine() ? 1 : "number" == typeof k ? k : e ? 2 : 1);
                                const u = x ? a.createElement(m.Z, { dir: (0, p.XP)(x.is_rtl), numberOfLines: l, size: d, type: "title", weight: L }, x.content) : null,
                                    h = c.v.shouldLimitTextToSingleLine() ? 1 : n,
                                    _ = "large" === w ? g.spaceAboveLarge : g.spaceAboveRegular,
                                    v = f && f?.length > 0 ? a.createElement(i.Z, { style: [C && g.middotGroupOnTop, y && g.middotGroupWithLabel] }, y ? a.createElement(r.ZP, { size: "subtext3", style: g.label, weight: "bold" }, y) : null, a.createElement(s.Z, null, f.map(I))) : null;
                                return a.createElement(i.Z, { style: [g.textContentWrapper, P && g.bottomPadding] }, C ? a.createElement(a.Fragment, null, v, u) : a.createElement(a.Fragment, null, u, v), o && t ? a.createElement(i.Z, { style: _ }, a.createElement(m.Z, { color: b, dir: (0, p.XP)(t.is_rtl), numberOfLines: h, type: "description" }, t.content)) : null);
                            })(e <= d.default.theme.breakpoints.small),
                        );
                    return a.createElement(u.Z, { componentType: "details_with_middot_group", destinationKey: _ }, ({ link: e, onClick: t }) => a.createElement(o.Z, { interactive: !1, link: e, onClick: t, style: g.detailItemsWrapper }, T));
                };
        },
        12022: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                i = n(325686),
                r = n(336373),
                o = n(392237),
                s = n(836938);
            const l = o.default.create((e) => ({ wrapper: { padding: e.spaces.space12 } })),
                d = ({ promotedContent: e, userId: t }) => a.createElement(r.Z.Provider, { namespace: { element: "user_recommendation" } }, a.createElement(i.Z, { style: l.wrapper }, s.v.renderFollowButton({ userId: t, promotedContent: e })));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-a25e0877.61037f2a.js.map
