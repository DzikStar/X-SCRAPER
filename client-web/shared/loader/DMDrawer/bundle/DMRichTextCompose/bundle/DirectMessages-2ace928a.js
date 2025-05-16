"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-2ace928a"],
    {
        40093: (e, t, a) => {
            a.d(t, { Z: () => Tt });
            var i = a(807896),
                s = a(202784),
                r = a(325686),
                n = a(392237),
                o = a(443781),
                d = a(593953),
                l = a(516951),
                c = a(242454);
            const p = n.default.create((e) => ({ root: { borderColor: e.colors.gray50, borderStyle: "solid", borderWidth: e.borderWidths.small, borderBottomWidth: e.borderWidths.none, boxSizing: "border-box", overflow: "hidden" }, isLast: { borderBottomWidth: e.borderWidths.small }, insideTopRoundedSent: { borderTopStartRadius: e.borderRadii.xLarge }, insideTopRoundedReceived: { borderTopEndRadius: e.borderRadii.xLarge }, outsideTopRoundedSent: { borderTopEndRadius: e.borderRadii.xLarge }, outsideTopRoundedReceived: { borderTopStartRadius: e.borderRadii.xLarge }, sentLast: { borderBottomStartRadius: e.borderRadii.xLarge }, receivedLast: { borderBottomEndRadius: e.borderRadii.xLarge } })),
                u = ({ insideTopRounded: e, isLast: t, isSent: a, label: i, onClick: n, outsideTopRounded: o, tcoUrl: d }) => {
                    const l = [p.root, t && p.isLast, t && a && p.sentLast, t && !a && p.receivedLast, e && a && p.insideTopRoundedSent, e && !a && p.insideTopRoundedReceived, o && a && p.outsideTopRoundedSent, o && !a && p.outsideTopRoundedReceived];
                    return s.createElement(r.Z, { style: l }, s.createElement(c.Z, { align: "center", color: "primary", label: i, link: d, onClick: n }));
                };
            class m extends s.Component {
                componentDidMount() {
                    this.props.onImpression();
                }
                render() {
                    const { callToActions: e, isSent: t, onCtaClick: a, withSticker: i, withUserText: n } = this.props,
                        o = e.map((r, o) => {
                            const d = 0 === o;
                            return s.createElement(u, { insideTopRounded: d && (i || !n), isLast: o === e.length - 1, isSent: t, key: o, label: r.label, onClick: a, outsideTopRounded: d && i, tcoUrl: r.tco_url });
                        });
                    return s.createElement(r.Z, null, o);
                }
            }
            m.defaultProps = { onCtaClick: l.Z, onImpression: l.Z };
            const h = m;
            var g = a(276563),
                b = a(247979),
                f = a(754310),
                y = a(530732),
                v = a(616055);
            const S = "DMCompositeMessage",
                x = n.default.create((e) => ({ root: { width: "100%" }, invisible: { opacity: 0 }, visible: { opacity: 1 }, card: { borderRadius: e.borderRadii.xLarge }, animation: { animationDuration: "0.15s", animationKeyframes: [{ "100%": { boxShadow: "none", zIndex: -1 } }], animationTimingFunction: "step-start" }, border: { borderRadius: v.O8, boxShadow: `0px 2px 12px ${e.colors.gray100}` } })),
                R = ({ attachmentContent: e, attachmentHeader: t, isCard: a = !1, isTweet: i = !1, isVisible: n = !0, textContent: o }) => {
                    const d = [n ? x.visible : x.invisible, x.root];
                    return s.createElement(
                        r.Z,
                        { style: d, testID: S },
                        t,
                        s.createElement(y.Z, { interactiveStyles: null }, ({ isPressed: t }) => s.createElement(r.Z, { style: [!i && !a && x.border, (a || i) && x.card, t && !i && x.animation] }, e)),
                        o,
                    );
                };
            var w = a(840065),
                E = a(58881),
                C = a(451051);
            const _ = n.default.create((e) => ({ tweetText: { overflow: "hidden", wordBreak: "break-word" }, messageTextContainer: { borderRadius: v.O8, boxSizing: "border-box", maxWidth: "100%", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16 }, textAlignLeft: { textAlign: "start" }, textAlignRight: { textAlign: "end" }, sent: { alignSelf: "flex-end", backgroundColor: e.colors.primary, borderBottomEndRadius: v.O8, borderColor: e.colors.primary }, received: { alignSelf: "flex-start", backgroundColor: e.colors.dmReceivedBubbleBackground, borderBottomStartRadius: v.O8, borderColor: e.colors.gray200 }, activeSent: { backgroundColor: e.colors.primary600 }, activeReceived: { backgroundColor: e.colors.gray200 }, failedDraft: { backgroundColor: e.colors.magenta500 }, rapidFireLastSent: { borderBottomEndRadius: e.borderRadii.small }, rapidFireLastReceived: { borderBottomStartRadius: e.borderRadii.small }, withCta: { borderBottomEndRadius: e.borderRadii.none, borderBottomStartRadius: e.borderRadii.none } })),
                A = ({ excludeCardUrl: e, isActive: t = !1, isFailedDraft: a, isFirstRapidFire: i = !1, isLastRapidFire: r = !1, isRapidFire: o = !1, isSent: d, hasAssociatedAttachment: l, messageData: c = {}, rootStyle: p, tweetId: u, withCta: m, withMediaLinks: h = !1, withMessageBubble: g }) => {
                    const b = [p, g && _.messageTextContainer, g && d && _.sent, g && !d && _.received, a && _.failedDraft, (!o || r) && d && _.rapidFireLastSent, (!o || r) && !d && _.rapidFireLastReceived, g && t && d && _.activeSent, g && t && !d && !w.Z.isEnabled && _.activeReceived, m && _.withCta],
                        f = [_.tweetText, g && _.textAlignLeft, !g && d && _.textAlignRight],
                        { gray0: v, magenta500: S, primary: x, text: R, white: A } = n.default.theme.colors,
                        T = E.Z.generate({ color: d ? A : R, backgroundColor: a ? S : d ? x : v }),
                        M = (c.text && c.text.length) || 0;
                    return s.createElement(y.Z, { interactive: d, interactiveStyles: g ? T : null, role: "none", style: b }, s.createElement(C.Z, { color: n.default.isDarkMode() || d ? "whiteOnColor" : void 0, displayTextRange: [0, M], entities: c.entities, excludeCardUrl: e, linkColor: (g && d) || n.default.isDarkMode() ? "whiteOnColor" : "link", linkify: !0, quotedTweetId: u, size: g ? void 0 : "title2", style: f, text: c.text || "", underlineLinks: !0, withMediaLinks: h }));
                },
                T = ({ isActive: e = !1, isFailedDraft: t, isFirstRapidFire: a = !1, isLastRapidFire: i = !1, isRapidFire: r = !1, isSent: n, messageData: o, withCta: d, withMessageBubble: l }) => s.createElement(A, { isActive: e, isFailedDraft: t, isFirstRapidFire: a, isLastRapidFire: i, isRapidFire: r, isSent: n, messageData: o, withCta: d, withMediaLinks: !0, withMessageBubble: l });
            var M = a(71620),
                Z = a(668214),
                L = a(276001),
                D = a(550293);
            const k = (e, t) => t.cardUrl,
                F = (0, Z.Z)()
                    .propsFromState(() => ({ card: L.Z.createSingleHydratedSelector(k) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, M.zr)("DM_CARD_MESSAGE"), popOutConversation: D.DO })),
                { CardNames: B } = g.default;
            class W extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { attachmentWidth: void 0, textContentWidth: void 0 }),
                        (this._getWrapperStyles = (e) => [e ? I.sentMessageWrapper : I.receivedMessageWrapper, I.vdlMessageWrapper]),
                        (this._handleAttachmentLayout = (e) => {
                            const {
                                    nativeEvent: {
                                        layout: { width: t },
                                    },
                                } = e,
                                { attachmentWidth: a } = this.state;
                            if (a !== t) {
                                const e = { attachmentWidth: t };
                                this.setState(e);
                            }
                        }),
                        (this._handleOnClick = (e) => {
                            const { conversationId: t, popOutConversation: a } = this.props;
                            t && a(t);
                        }),
                        (this._handleTextContentLayout = (e) => {
                            const {
                                    nativeEvent: {
                                        layout: { width: t },
                                    },
                                } = e,
                                { textContentWidth: a } = this.state;
                            if (a !== t) {
                                const e = { textContentWidth: t };
                                this.setState(e);
                            }
                        });
                }
                render() {
                    const { card: e, hasUserText: t, isActive: a, isFailedDraft: i, isFirstRapidFire: n, isLastRapidFire: o, isRapidFire: d, isSent: l, messageData: c, withCta: p, withMessageBubble: u } = this.props,
                        { attachmentWidth: m, textContentWidth: h } = this.state,
                        y = !!Object.values(B).includes(e?.name),
                        v = (0, f.H2)(t, m, h),
                        S = e ? s.createElement(r.Z, { onClick: this._handleOnClick, onLayout: this._handleAttachmentLayout }, s.createElement(b.Z, { card: { name: e.name, url: e.url, binding_values: e.binding_values, users: e.users }, cardContext: { tweetUserId: c.sender_id }, dmSentOrReceived: l ? "sent" : "received" })) : null,
                        x = this._getWrapperStyles(l),
                        w = g.default.isCardDisabled(e?.name) ? void 0 : e?.url,
                        E = t ? s.createElement(r.Z, { onLayout: this._handleTextContentLayout, style: x }, s.createElement(A, { excludeCardUrl: w, hasAssociatedAttachment: !0, isActive: a, isFailedDraft: i, isFirstRapidFire: n, isLastRapidFire: o, isRapidFire: d, isSent: l, messageData: c, withCta: p, withMessageBubble: u })) : null;
                    return y ? s.createElement(R, { attachmentContent: S, isCard: !0, isVisible: v.compositeRendered, textContent: E }) : s.createElement(T, { isActive: a, isFailedDraft: i, isFirstRapidFire: n, isLastRapidFire: o, isRapidFire: d, isSent: l, messageData: c, withCta: p, withMessageBubble: u });
                }
            }
            (W.defaultProps = { hasUserText: !1 }), (W.contextType = o.rC);
            const I = n.default.create((e) => ({ attachmentReceivedSquared: { borderBottomEndRadius: e.borderRadii.none }, attachmentSentSquared: { borderBottomStartRadius: e.borderRadii.none }, card: { marginBottom: e.spaces.space2 }, receivedMessageWrapper: { alignSelf: "flex-start" }, sentMessageWrapper: { alignSelf: "flex-end" }, vdlMessageWrapper: { paddingTop: e.spaces.space4 }, received: { borderBottomStartRadius: e.borderRadii.none }, sent: { borderBottomEndRadius: e.borderRadii.none }, textReceivedSquared: { borderTopEndRadius: e.borderRadii.none }, textSentSquared: { borderTopStartRadius: e.borderRadii.none } })),
                P = F(W);
            var O = a(731708),
                q = a(332920),
                z = a.n(q);
            const H = z().f7204380;
            class U extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { attachmentWidth: void 0, textContentWidth: void 0 }),
                        (this._getSquareBottomStyles = (e) => {
                            const { isSent: t } = this.props;
                            let a = "left";
                            return e ? (a = "both") : t && (a = "right"), V[a];
                        }),
                        (this._handleAttachmentLayout = (e) => {
                            const {
                                    nativeEvent: {
                                        layout: { width: t },
                                    },
                                } = e,
                                { attachmentWidth: a } = this.state;
                            a !== t && this.setState({ attachmentWidth: t });
                        }),
                        (this._handleTextContentLayout = (e) => {
                            const {
                                    nativeEvent: {
                                        layout: { width: t },
                                    },
                                } = e,
                                { textContentWidth: a } = this.state;
                            a !== t && this.setState({ textContentWidth: t });
                        });
                }
                render() {
                    const { hasUserText: e, isActive: t, isFailedDraft: a, isFirstRapidFire: i, isLastRapidFire: n, isRapidFire: o, isSent: d, messageData: l, withCta: c, withMessageBubble: p } = this.props,
                        { attachmentWidth: u, textContentWidth: m } = this.state;
                    if (!l || !l.attachment || !l.attachment.fleet) return null;
                    const { compositeRendered: h, isAttachmentSquared: g, isTextSquared: b } = (0, f.H2)(e, u, m),
                        y = [$.tombstoneWrapper, d ? $.sentMessageWrapper : $.receivedMessageWrapper, this._getSquareBottomStyles(g)],
                        v = s.createElement(r.Z, { onLayout: this._handleAttachmentLayout, style: y }, s.createElement(O.ZP, { color: "gray700" }, H)),
                        S = e ? s.createElement(r.Z, { onLayout: this._handleTextContentLayout, style: [d ? $.sentMessageWrapper : $.receivedMessageWrapper, !p && $.fleetReactionSpacing] }, s.createElement(A, { hasAssociatedAttachment: !0, isActive: t, isFailedDraft: a, isFirstRapidFire: i, isLastRapidFire: n, isRapidFire: o, isSent: d, messageData: l, rootStyle: b ? (d ? $.sentSquared : $.receivedSquared) : void 0, withCta: c, withMessageBubble: p })) : null;
                    return s.createElement(R, { attachmentContent: v, isVisible: h, textContent: S });
                }
            }
            const V = n.default.create((e) => ({ both: { borderBottomEndRadius: e.borderRadii.none, borderBottomStartRadius: e.borderRadii.none }, left: { borderBottomStartRadius: e.borderRadii.none }, right: { borderBottomEndRadius: e.borderRadii.none } })),
                $ = n.default.create((e) => ({ fleetReactionSpacing: { marginTop: e.spaces.space4 }, receivedMessageWrapper: { alignSelf: "flex-start" }, receivedSquared: { borderTopEndRadius: e.borderRadii.none }, sentMessageWrapper: { alignSelf: "flex-end" }, sentSquared: { borderTopStartRadius: e.borderRadii.none }, tombstoneWrapper: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50, borderRadius: e.borderRadii.xLarge, boxSizing: "border-box", flexDirection: "row", borderWidth: e.borderWidths.small, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, overflow: "auto" } })),
                G = U;
            a(571372);
            var Y = a(295417),
                j = a(716354),
                N = a(688715),
                K = a(284702),
                Q = a(782578),
                J = a(123751),
                X = a(310453);
            const ee = ({ media: e, messageId: t }) => {
                e && (e.media_url_https = (0, N.ib)(e.media_url_https));
                const a = e && K.Z.extractVideoProps(J.Z.forDm(t), e);
                return a ? s.createElement(X.Z, (0, i.Z)({}, a, { aspectRatio: Q.Z.getAspectRatio(e.video_info), withPostPlayback: !0 })) : null;
            };
            var te = a(154003),
                ae = a(725516);
            const ie = (0, Z.Z)().withAnalytics();
            class se extends s.PureComponent {
                constructor(e, t) {
                    super(e, t),
                        (this._handleLayout = (e) => {
                            const {
                                nativeEvent: {
                                    layout: { width: t },
                                },
                            } = e;
                            this.state.width !== t && this.setState({ width: t });
                        }),
                        (this._getElement = () => {
                            const { contentType: e, isSensitive: t } = this.props;
                            return `${t ? "sensitive" : "untrusted"}_${e}_interstitial`;
                        }),
                        (this._handleClick = () => {
                            const { analytics: e } = this.props;
                            this.setState({ hide: !1 }), e.scribe({ element: this._getElement(), action: "reveal" });
                        }),
                        (this.state = { hide: !0, width: 0 });
                }
                componentDidMount() {
                    const { analytics: e } = this.props;
                    e.scribe({ element: this._getElement(), action: "impression" });
                }
                render() {
                    const { children: e, ctaText: t, description: a, withSquareBottomBorderRadius: i } = this.props,
                        { hide: o, width: d } = this.state,
                        l = d < n.default.theme.breakpoints.micro;
                    return o ? s.createElement(r.Z, { focusable: !0, onLayout: this._handleLayout, style: [ne.root, l ? { flexDirection: "column" } : { flexDirection: "row", alignItems: "center" }, i && re[i]] }, s.createElement(r.Z, { style: ne.description }, s.createElement(O.ZP, null, a)), s.createElement(r.Z, { style: [ne.button, l ? ne.breakButtonWrapper : void 0] }, s.createElement(te.ZP, { onClick: this._handleClick, size: "small", style: ne.buttonElement, type: "brandText" }, t))) : e;
                }
            }
            se.defaultProps = { isSensitive: !1 };
            const re = n.default.create((e) => ({ both: { borderBottomEndRadius: e.borderRadii.none, borderBottomStartRadius: e.borderRadii.none }, left: { borderBottomStartRadius: e.borderRadii.none }, right: { borderBottomEndRadius: e.borderRadii.none } })),
                ne = n.default.create((e) => ({ breakButtonWrapper: { marginTop: n.default.theme.spaces.space4, marginStart: `calc(-1 * ${e.spaces.space12})` }, button: { flexGrow: 1, alignItems: "flex-start" }, buttonElement: { paddingHorizontal: e.spaces.space12 }, description: { flexGrow: 1, flexShrink: 1 }, root: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50, borderRadius: e.borderRadii.xLarge, boxSizing: "border-box", borderWidth: e.borderWidths.small, maxWidth: "100%", paddingStart: e.spaces.space16, paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, paddingEnd: e.spaces.space4, overflow: "auto", display: "flex" } })),
                oe = (0, ae.Z)(ie(se)),
                de = s.createElement(Y.Z, null),
                le = z().d9de7b58,
                ce = z().f2879f4e,
                pe = z().b518221e,
                ue = z().eeaa9f90,
                me = z().g2b43664,
                he = z().f277e94a;
            class ge extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { attachmentWidth: void 0, textContentWidth: void 0 }),
                        (this._renderAttachment = () => {
                            const { entry: e, hasUserText: t, isSent: a, isTrusted: i, messageData: n } = this.props,
                                { attachmentWidth: o, textContentWidth: l } = this.state,
                                { attachment: c } = n || {},
                                p = e.is_draft,
                                u = (0, f.H2)(t, o, l),
                                m = [be.mediaAttachment, be.borderRadius];
                            let h,
                                g,
                                b = null;
                            if ((!p && e.conversation_id && (b = `/messages/${e.conversation_id}/media/${e.id}`), c))
                                if (c.photo) (h = c.photo), (g = s.createElement(j.Z, { media: h, mediaUrl: b }));
                                else if (c.animated_gif) (h = c.animated_gif), (g = s.createElement(ee, { media: h, messageId: e.id }));
                                else if (c.video) {
                                    if (((h = c.video), (0, d.dI)(c, this.context.featureSwitches))) throw new Error("DMMediaMessage should not be used to render voice messages");
                                    g = s.createElement(ee, { media: h, messageId: e.id });
                                }
                            const y = u.isAttachmentSquared ? "both" : a ? "right" : "left",
                                v = h && g && (a ? g : this._getMediaContentWithGuard(h, i, g, y));
                            return { attachmentContent: s.createElement(r.Z, { onLayout: this._handleAttachmentLayout, style: m }, v), media: h };
                        }),
                        (this._handleAttachmentLayout = (e) => {
                            const {
                                    nativeEvent: {
                                        layout: { width: t },
                                    },
                                } = e,
                                { attachmentWidth: a } = this.state;
                            if (a !== t) {
                                const e = { attachmentWidth: t };
                                this.setState(e);
                            }
                        }),
                        (this._handleTextContentLayout = (e) => {
                            const {
                                    nativeEvent: {
                                        layout: { width: t },
                                    },
                                } = e,
                                { textContentWidth: a } = this.state;
                            if (a !== t) {
                                const e = { textContentWidth: t };
                                this.setState(e);
                            }
                        });
                }
                render() {
                    const { entry: e, hasUserText: t, isActive: a, isFailedDraft: i, isFirstRapidFire: n, isLastRapidFire: o, isRapidFire: d, isSent: l, messageData: c, withCta: p, withMessageBubble: u } = this.props,
                        { attachmentWidth: m, textContentWidth: h } = this.state,
                        g = e.is_draft,
                        b = (0, f.H2)(t, m, h),
                        { attachmentContent: y, media: v } = this._renderAttachment(),
                        S = t ? s.createElement(r.Z, { onLayout: this._handleTextContentLayout, style: [l ? be.sentMessageWrapper : be.receivedMessageWrapper, be.messageWrapper] }, s.createElement(A, { hasAssociatedAttachment: !0, isActive: !!a, isFailedDraft: i, isFirstRapidFire: !!n, isLastRapidFire: !!o, isRapidFire: !!d, isSent: l, messageData: g ? c : this._parseMessageData(c, v), withCta: p, withMessageBubble: u })) : null;
                    return s.createElement(R, { attachmentContent: y, isVisible: b.compositeRendered, textContent: S });
                }
                _getMediaContentWithGuard(e, t, a, i) {
                    const { displaySensitiveMedia: r, isDmNsfwMediaFilterEnabled: n } = this.props;
                    if (e.possibly_sensitive && this.context.featureSwitches.isTrue("dm_conversations_nsfw_media_filter_enabled")) {
                        if (n) {
                            const t = ("animated_gif" === e.type && me) || ("video" === e.type && ue) || pe;
                            return s.createElement(oe, { contentType: e.type, ctaText: t, description: ce, isSensitive: !0, withSquareBottomBorderRadius: i }, a);
                        }
                    } else if (!r && e.possibly_sensitive) return s.createElement(oe, { contentType: e.type, ctaText: he, description: de, isSensitive: !0, withSquareBottomBorderRadius: i }, a);
                    return t ? a : s.createElement(oe, { contentType: e.type, ctaText: he, description: le, withSquareBottomBorderRadius: i }, a);
                }
                _parseMessageData(e, t) {
                    const a = e?.entities?.urls && t ? e.entities.urls.filter((e) => e.display_url !== t.display_url) : null;
                    return e && a ? { ...e, entities: { ...e.entities, urls: a, media: t ? [t] : [] } } : e;
                }
            }
            (ge.contextType = o.rC), (ge.defaultProps = { hasUserText: !1 });
            const be = n.default.create((e) => ({ invisible: { opacity: 0 }, mediaAttachment: { borderRadius: e.borderRadii.xLarge, WebkitMaskImage: "url(data:image/png;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==)" }, borderRadius: { borderRadius: v.O8 }, receivedMessageWrapper: { alignSelf: "flex-start" }, sentMessageWrapper: { alignSelf: "flex-end" }, messageWrapper: { paddingTop: e.spaces.space4 }, receivedSquared: { borderTopEndRadius: e.borderRadii.none }, sentSquared: { borderTopStartRadius: e.borderRadii.none }, visible: { opacity: 1 } })),
                fe = ge;
            var ye = a(392032),
                ve = a(125363),
                Se = a(919022),
                xe = a(449404);
            const Re = ({ children: e, isSent: t }) => {
                    const a = [we.messageTextContainer, t ? we.sent : we.received];
                    return s.createElement(r.Z, { style: a }, e);
                },
                we = n.default.create((e) => ({ messageTextContainer: { display: "flex", flexDirection: "row", alignItems: "center", borderRadius: v.O8, boxSizing: "border-box", maxWidth: "100%", marginTop: e.spaces.space2, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space32, backgroundColor: e.colors.gray0, borderColor: e.colors.gray0 }, sent: { alignSelf: "flex-end" }, received: { alignSelf: "flex-start" } })),
                Ee = z().f5a07f7c,
                Ce = ({ isSent: e }) => s.createElement(Re, { isSent: e }, s.createElement(xe.default, { style: _e.iconStyle }), s.createElement(O.ZP, { color: "gray700", size: "subtext2", style: e ? _e.textAlignLeft : _e.textAlignRight }, Ee)),
                _e = n.default.create((e) => ({ iconStyle: { color: e.colors.gray700, marginEnd: e.spaces.space4 }, textAlignLeft: { textAlign: "start" }, textAlignRight: { textAlign: "end" } })),
                Ae = ({ isSent: e, isStandalone: t, media: a }) => {
                    const i = { id_str: a.id_str, media_url_https: a.media_url_https, display_url: a.display_url, type: "photo", ext_alt_text: a.ext_alt_text, original_info: a.original_info };
                    return s.createElement(r.Z, { style: [Te.roundCornersContainer, t && Te.standaloneContainer, e ? Te.sent : Te.received] }, s.createElement(j.Z, { hideAltLabel: !0, media: i, mediaUrl: null }));
                },
                Te = n.default.create((e) => ({ roundCornersContainer: { borderRadius: e.borderRadii.small, overflow: "hidden", width: e.spaces.space32 }, standaloneContainer: { borderRadius: e.borderRadii.large, width: e.spaces.space80, marginBottom: e.spaces.space32 }, sent: { alignSelf: "flex-end" }, received: { alignSelf: "flex-start" } })),
                Me = ({ isSent: e, messageData: t }) => {
                    const a = [Ze.messageTextContainer, e ? Ze.sent : Ze.received],
                        i = t.text?.length || 0,
                        n = [Ze.tweetText, Ze.textAlignLeft, e && Ze.textAlignRight],
                        o = t.attachment?.photo || t.attachment?.video || t.attachment?.animated_gif,
                        d = (0, f.qn)(t.entities, o);
                    return s.createElement(r.Z, { style: a }, s.createElement(C.Z, { color: "gray700", displayTextRange: [0, i], entities: d, size: "subtext2", style: n, text: t.text || "" }), o && !o.possibly_sensitive ? s.createElement(Ae, { isSent: e, media: o }) : null);
                },
                Ze = n.default.create((e) => ({ tweetText: { overflow: "hidden", wordBreak: "break-word" }, messageTextContainer: { flexDirection: "row", gap: e.spaces.space12, borderRadius: v.O8, boxSizing: "border-box", maxWidth: "100%", marginTop: e.spaces.space2, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space32, backgroundColor: e.colors.gray0, borderColor: e.colors.gray0 }, textAlignLeft: { textAlign: "start" }, textAlignRight: { textAlign: "end" }, sent: { alignSelf: "flex-end" }, received: { alignSelf: "flex-start" } }));
            var Le = a(301758);
            const De = ({ tweetId: e }) => s.createElement(Le.Z, { isCondensed: !0, shouldShowBorder: !0, style: ke.tweet, tweetId: e, withBirdwatchPivot: !1 }),
                ke = n.default.create((e) => ({ tweet: { paddingBottom: e.spaces.space28 } }));
            var Fe = a(385438);
            const Be = z().af71ef68,
                We = ({ isSent: e }) => s.createElement(Re, { isSent: e }, s.createElement(Fe.default, { style: Ie.iconStyle }), s.createElement(O.ZP, { color: "gray700", size: "subtext2", style: e ? Ie.textAlignLeft : Ie.textAlignRight }, Be)),
                Ie = n.default.create((e) => ({ iconStyle: { color: e.colors.gray700, marginEnd: e.spaces.space4 }, textAlignLeft: { textAlign: "start" }, textAlignRight: { textAlign: "end" } })),
                Pe = z().c55eed72,
                Oe = z().d99de549,
                qe = ({ isGroupDM: e, isSent: t, messageData: a }) => {
                    const i = (0, ve.v9)((e) => Se.ZP.select(e, a.sender_id)),
                        n = e && i?.name ? Oe({ name: i.name }) : Pe,
                        o = !!a.attachment?.video?.audio_only,
                        d = a.attachment?.photo || a.attachment?.video || a.attachment?.animated_gif;
                    return s.createElement(r.Z, { style: [ze.root, t && ze.sent] }, s.createElement(r.Z, { style: ze.titleRow }, s.createElement(ye.default, { style: [ze.iconShare, t && ze.iconShareSent] }), s.createElement(O.ZP, { color: "gray700", size: "subtext3" }, n)), s.createElement(r.Z, { style: ze.originalMessageContainer }, !(0, f.Ip)(a) && a.attachment ? (o ? s.createElement(We, { isSent: t }) : a.attachment.tweet ? s.createElement(De, { tweetId: a.attachment.tweet.id || "" }) : d && !d.possibly_sensitive ? s.createElement(Ae, { isSent: t, isStandalone: !0, media: d }) : s.createElement(Ce, { isSent: t })) : s.createElement(Me, { isSent: t, messageData: a })));
                },
                ze = n.default.create((e) => ({ root: { display: "flex", flexDirection: "column", marginTop: e.spaces.space12, marginBottom: -e.spacesPx.space28, width: "100%" }, titleRow: { display: "flex", flexDirection: "row", gap: e.spaces.space4, alignItems: "baseline", paddingBottom: e.spaces.space8 }, iconShare: { color: e.colors.gray700, width: e.spacesPx.space8 + e.spacesPx.space2, height: e.spacesPx.space8 + e.spacesPx.space2 }, iconShareSent: { transform: [{ scaleX: -1 }] }, originalMessageContainer: { width: "100%" }, sent: { alignItems: "flex-end" } }));
            var He = a(296196);
            const Ue = (0, Z.Z)().propsFromActions(() => ({ markSpamStatus: He.markSpamStatus })),
                Ve = z().fd079470,
                $e = z().c7a92dca,
                Ge = z().f277e94a,
                Ye = z().fb3ccb56;
            class je extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => () => {
                            const { conversationId: t, dmId: a, markSpamStatus: i } = this.props;
                            i({ conversationId: t, dmId: a, markSpam: e });
                        });
                }
                render() {
                    const { children: e } = this.props;
                    return s.createElement(oe, { contentType: "dm", ctaText: Ge, description: Ye }, e, this._renderButtons());
                }
                _renderButtons() {
                    return s.createElement(r.Z, { style: Ke.buttons }, s.createElement(te.ZP, { onPress: this._handlePress(!1), style: Ke.leftButton, type: "brandOutlined" }, $e), s.createElement(te.ZP, { onPress: this._handlePress(!0), type: "brandOutlined" }, Ve));
                }
            }
            const Ne = Ue(je),
                Ke = n.default.create((e) => ({ buttons: { flexDirection: "row", paddingTop: e.spaces.space4 }, leftButton: { marginEnd: e.spaces.space12 } }));
            var Qe = a(992942);
            const Je = (e) => {
                    const t = e.images,
                        a = t.svg || t.size_1x;
                    if (a) return a.url;
                },
                Xe = n.default.create((e) => ({ stickerItem: { height: `calc(3 * ${e.fontSizes.title2})`, width: `calc(3 * ${e.fontSizes.title2})` } })),
                et = ({ sticker: e }) => s.createElement(Qe.Z, { "aria-label": e.display_name, source: Je(e), style: Xe.stickerItem });
            var tt = a(879891),
                at = a(794215),
                it = a(643442),
                st = a(466445),
                rt = a(313758),
                nt = a(386714);
            function ot(e) {
                const t = s.useContext(rt.kr),
                    { isLowQuality: a, isSent: i, isTrusted: r } = e;
                if (!e.media?.video_info) return null;
                const [n, o] = t.activeVoiceMessage,
                    [d] = t.playerApi,
                    [l] = t.playerState,
                    { scribeAction: c } = t,
                    [p] = n,
                    u = e.messageId === p;
                if (!c) return null;
                e.media && (e.media.media_url_https = (0, N.ib)(e.media.media_url_https));
                const m = lt(l),
                    h = e.media?.video_info.duration_millis || 0,
                    g = { durationMs: h, isActive: u, isSent: i, playerApi: null, playerState: null, onImpression: () => c.impression({ isLowQuality: a, isTrusted: r }), onPlayRequest: () => o([e.messageId, e.media]), onPlay: () => c.play({ data: { duration_ms: h } }), onPause: () => c.pause() };
                return u && m && m.contentId === e.media.id_str && ((g.playerApi = d), (g.playerState = l), m?.durationMs && (g.durationMs = m?.durationMs)), s.createElement(dt, g);
            }
            function dt(e) {
                const { direction: t } = (0, tt.Z)(),
                    a = "rtl" === t,
                    { isActive: o, isSent: d, playerApi: l, playerState: c } = e,
                    p = c?.isPlaying,
                    u = lt(c),
                    m = u?.currentTimeMs || 0,
                    h = u?.durationMs || e.durationMs,
                    g = Math.max(o ? h - m : h, 0);
                s.useLayoutEffect(() => {
                    e.onImpression();
                }, []),
                    s.useEffect(() => {
                        l && 0 === m && (l.play(), e.onPlay());
                    }, [l]);
                const b = n.default.isDarkMode() || d,
                    f = { color: b ? "whiteOnColor" : "text" },
                    y = [ut.voiceMessage, a ? ut.voiceMessageRtl : ut.voiceMessageLtr, mt({ isSent: d, squared: o }), d ? ut.voiceMessageSent : ut.voiceMessageReceived, (0, nt.F)(n.default.theme.scale, a).voiceMessage({ isVoiceMessageActive: o, isSent: d })],
                    v = p ? it.default : st.default;
                return s.createElement(
                    r.Z,
                    { style: [ut.container, (0, nt.F)(n.default.theme.scale, a).voiceMessageContainer({ isVoiceMessageActive: o, isSent: d })] },
                    s.createElement(
                        r.Z,
                        { style: y },
                        s.createElement(r.Z, { style: ut.startSpacer }),
                        s.createElement(te.ZP, {
                            "aria-label": p ? pt : ct,
                            icon: s.createElement(v, { style: b ? ut.iconColorDark : ut.iconColorDefault }),
                            onPress: () => {
                                l ? (p ? (l.pause(), e.onPause()) : (l.play(), e.onPlay())) : e.onPlayRequest();
                            },
                            type: "onMediaText",
                        }),
                        s.createElement(r.Z, { style: ut.durationSpacer }),
                        s.createElement(r.Z, { style: d ? ut.durationOpacity : void 0 }, s.createElement(at.Z, (0, i.Z)({ countdown: !0, timeMs: g }, f, { color: "gray700", size: "subtext2", style: d ? ut.durationDark : void 0, weight: "bold", withCountdownSymbol: o }))),
                        s.createElement(r.Z, { style: ut.endSpacer }),
                    ),
                );
            }
            const lt = (e) => (e ? e.tracks[e.currentTrackId] : null),
                ct = z().c94b7d8a,
                pt = z().eb6f9582,
                ut = n.default.create((e) => ({ displayNone: { display: "none" }, container: { flexDirection: "row", alignSelf: "flex-end", alignItems: "center", justifyContent: "center" }, voiceMessage: { alignSelf: "flex-end", alignItems: "center", justifyContent: "center" }, voiceMessageLtr: { flexDirection: "row" }, voiceMessageRtl: { flexDirection: "row-reverse" }, voiceMessageSent: { backgroundColor: e.colors.primary }, voiceMessageReceived: { backgroundColor: e.colors.dmReceivedBubbleBackground }, durationSpacer: { width: e.spaces.space4 }, durationOpacity: { opacity: 0.75 }, durationDark: { color: e.colors.whiteOnColor }, iconColorDark: { color: e.colors.whiteOnColor }, iconColorDefault: { color: e.colors.alwaysBaseGray1100 }, startSpacer: { width: e.spaces.space4 }, endSpacer: { width: e.spaces.space16 } }));
            function mt({ isSent: e, squared: t }) {
                return [ht.base, ht.vdlBorderRadius, t ? (e ? ht.sentSquared : ht.receivedSquared) : void 0];
            }
            const ht = n.default.create((e) => ({ base: { borderRadius: e.borderRadii.xLarge, WebkitMaskImage: "url(data:image/png;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICRAEAOw==)" }, vdlBorderRadius: { borderRadius: v.O8 }, sent: { borderBottomEndRadius: e.borderRadii.none }, sentSquared: { borderTopEndRadius: e.borderRadii.none }, received: { borderBottomStartRadius: e.borderRadii.none }, receivedSquared: { borderTopStartRadius: e.borderRadii.none } }));
            var gt = a(181746),
                bt = a(836255);
            const ft = (e, t) => {
                    const a = t.messageData?.attachment;
                    if (a && a.tweet) return a.tweet.status;
                },
                yt = (0, Z.Z)()
                    .propsFromState(() => ({ tweet: bt.Z.createHydratedTweetSelector(ft) }))
                    .propsFromActions(() => ({ popOutConversation: D.DO })),
                vt = z().b6b4142e,
                St = z().f277e94a,
                xt = z().fda60d78,
                Rt = z().b59a9004,
                wt = s.createElement(gt.Z, null);
            const Et = n.default.create((e) => ({ attachment: { marginBottom: 0 }, receivedMessageWrapper: { alignSelf: "flex-start" }, sentMessageWrapper: { alignSelf: "flex-end" }, messageWrapper: { paddingTop: e.spaces.space4 }, animation: { animationDuration: "0.15s", animationKeyframes: [{ "100%": { backgroundColor: e.colors.activeBlack, boxShadow: "none", transform: [{ scale: 0.99 }], zIndex: -1 } }], animationTimingFunction: "step-start" }, animationOverlay: { animationDuration: "0.15s", animationKeyframes: [{ "100%": { backgroundColor: e.colors.activeBlack } }], animationTimingFunction: "step-start" }, overlayBorder: { borderRadius: e.borderRadii.xLarge }, tweetStyle: { boxShadow: `0px 2px 12px ${e.colors.gray100}`, borderRadius: e.borderRadii.xLarge } })),
                Ct = yt(function (e) {
                    const { featureSwitches: t } = s.useContext(o.rC),
                        { conversationId: a, displaySensitiveMedia: i, hasUserText: n = !1, isActive: d = !1, isDmNsfwMediaFilterEnabled: l, isFailedDraft: c, isFirstRapidFire: p = !1, isLastRapidFire: u = !1, isRapidFire: m = !1, isSent: h, isTrusted: g, messageData: b, popOutConversation: v, tweet: S, withCta: x, withMessageBubble: w } = e,
                        [E, C] = s.useState(void 0),
                        [_, T] = s.useState(void 0),
                        M = s.useMemo(
                            () =>
                                function () {
                                    a && v(a);
                                },
                            [a, v],
                        ),
                        Z = s.useMemo(
                            () =>
                                function (e) {
                                    const {
                                        nativeEvent: {
                                            layout: { width: t },
                                        },
                                    } = e;
                                    E !== t && C(t);
                                },
                            [E],
                        ),
                        L = s.useMemo(
                            () =>
                                function (e) {
                                    const {
                                        nativeEvent: {
                                            layout: { width: t },
                                        },
                                    } = e;
                                    _ !== t && T(t);
                                },
                            [_],
                        );
                    if (!b || !b.attachment || !b.attachment.tweet) return null;
                    const D = b.attachment.tweet,
                        k = (0, f.H2)(n, E, _),
                        F = s.createElement(y.Z, { interactiveStyles: null }, ({ isPressed: e }) => s.createElement(r.Z, { style: [Et.overlayBorder, e && Et.animationOverlay] }, s.createElement(Le.Z, { onPress: M, shouldShowBorder: !1, style: [Et.tweetStyle, n && Et.attachment, e && Et.animation], tweetId: D.status }))),
                        B = k.isAttachmentSquared ? "both" : h ? "right" : "left",
                        W = (() => {
                            if (!S) return null;
                            if (h) return F;
                            if (S.possibly_sensitive && t.isTrue("dm_conversations_nsfw_media_filter_enabled")) {
                                if (l || void 0 === l) return s.createElement(oe, { contentType: "photo", ctaText: Rt, description: xt, withSquareBottomBorderRadius: B }, F);
                            } else if (!i && S.possibly_sensitive) return s.createElement(oe, { contentType: "photo", ctaText: St, description: wt, withSquareBottomBorderRadius: B }, F);
                            return g ? F : s.createElement(oe, { contentType: "tweet", ctaText: St, description: vt, withSquareBottomBorderRadius: B }, F);
                        })(),
                        I = s.createElement(r.Z, { onLayout: Z, style: Et.attachment }, W),
                        P = n ? s.createElement(r.Z, { onLayout: L, style: [h ? Et.sentMessageWrapper : Et.receivedMessageWrapper, Et.messageWrapper] }, s.createElement(A, { hasAssociatedAttachment: !0, isActive: d, isFailedDraft: c, isFirstRapidFire: p, isLastRapidFire: u, isRapidFire: m, isSent: h, messageData: b, tweetId: D.status, withCta: x, withMediaLinks: !0, withMessageBubble: w })) : null;
                    return s.createElement(R, { attachmentContent: I, isTweet: !0, isVisible: k.compositeRendered, textContent: P });
                });
            class _t extends s.Component {
                render() {
                    const { entry: e, isGroupDM: t, isSent: a, onCtaClick: i, onCtaImpression: n } = this.props,
                        { message_data: o } = e,
                        l = o && o.attachment ? o.attachment : {},
                        c = e.marked_as_spam,
                        p = (0, f.Rw)(e),
                        u = !!o && !!o.ctas,
                        m = (0, f.Ip)(o),
                        g = (0, f.LJ)(e),
                        b = !(m && g),
                        y = (0, f.fw)(e);
                    let v;
                    v = l.sticker ? s.createElement(et, { sticker: l.sticker }) : this._renderDMMessage(m, u, b);
                    const S = o?.reply_data ? s.createElement(s.Fragment, null, s.createElement(qe, { isGroupDM: t, isSent: a, messageData: o.reply_data }), v) : v,
                        x = c ? s.createElement(Ne, { conversationId: e.conversation_id, dmId: e.id }, S) : S,
                        R = p && !y && !(0, d.dI)(o?.attachment, this.context.featureSwitches),
                        w = [a ? At.isSent : At.isReceived, u && At.withCta, R ? At.mediaRoot : At.flexShrink, this.props.style];
                    return s.createElement(r.Z, { style: w }, x, o && o.ctas ? s.createElement(h, { callToActions: o.ctas, isSent: a, onCtaClick: i, onImpression: n, withSticker: !!l.sticker || g, withUserText: m }) : null);
                }
                _renderDMMessage(e, t, a) {
                    const { displaySensitiveMedia: r, entry: n, isActive: o, isDmNsfwMediaFilterEnabled: l, isFirstRapidFire: c, isLastRapidFire: p, isLowQuality: u, isRapidFire: m, isSent: h, isTrusted: g } = this.props,
                        { error: b, message_data: f } = n,
                        y = f && { ...f, entities: (f && f.entities) || void 0, error: b },
                        v = y?.attachment,
                        S = { isActive: o, isFailedDraft: !!b, isFirstRapidFire: c, isLastRapidFire: p, isRapidFire: m, isSent: h, withCta: t, withMessageBubble: a };
                    if (y && v) {
                        if (v.tweet) return s.createElement(Ct, (0, i.Z)({ conversationId: n.conversation_id, displaySensitiveMedia: r, hasUserText: e, isDmNsfwMediaFilterEnabled: l, isTrusted: g, messageData: y }, S));
                        if (v.photo || v.animated_gif || v.video) return v.video && (0, d.dI)(v, this.context.featureSwitches) ? s.createElement(ot, { isLowQuality: u, isSent: !!h, isTrusted: g, media: v.video, messageId: n.id }) : s.createElement(fe, (0, i.Z)({ displaySensitiveMedia: r, entry: n, hasUserText: e, isDmNsfwMediaFilterEnabled: l, isTrusted: g, messageData: y }, S));
                        if (v.card) return s.createElement(P, (0, i.Z)({ cardUrl: v.card, conversationId: n.conversation_id, hasUserText: e, messageData: y }, S));
                        if (v.fleet) return s.createElement(G, (0, i.Z)({ entry: n, hasUserText: e, messageData: y }, S));
                    }
                    return s.createElement(T, (0, i.Z)({}, S, { messageData: y }));
                }
            }
            _t.contextType = o.rC;
            const At = n.default.create((e) => ({ flexShrink: { flexShrink: 1 }, mediaRoot: { flex: 1 }, isSent: { alignItems: "flex-end" }, isReceived: { alignItems: "flex-start" }, withCta: { alignItems: "stretch" } })),
                Tt = _t;
        },
        427620: (e, t, a) => {
            a.d(t, { Z: () => c });
            var i = a(202784),
                s = a(58881),
                r = a(392237),
                n = a(530732),
                o = a(731708),
                d = a(280278),
                l = a(691108);
            const c = ({ accessibilityLabelFormatter: e, count: t, emojiReaction: a, emojiSize: c, enableHoverStyle: u, focusable: m, onPress: h, style: g }) => {
                    const b = e && a ? e({ emoji: a, count: t }) : void 0,
                        f = s.Z.generate({ backgroundColor: r.default.theme.colors.gray50, color: r.default.theme.colors.gray700 });
                    return i.createElement(n.Z, { "aria-label": b, focusable: m, interactiveStyles: u ? f : null, onPress: h, style: [p.container, ...(g || [])], testID: `${l.Z.reaction}-${a}` }, i.createElement(o.ZP, { size: c, style: p.unsetLineHeight }, a), t ? i.createElement(d.ZP, { color: "gray700", containerStyle: p.count, count: t, size: "subtext3" }, t) : null);
                },
                p = r.default.create((e) => ({ container: { flexDirection: "row" }, count: { alignSelf: "center", minWidth: e.spaces.space16, paddingStart: e.spaces.space2 }, unsetLineHeight: { lineHeight: "unset" } }));
        },
        675385: (e, t, a) => {
            a.d(t, { ZP: () => q });
            var i = a(202784),
                s = a(161821),
                r = a(443781),
                n = a(706758),
                o = a(173396),
                d = a(668214),
                l = a(296196),
                c = a(627279);
            const p = (e, t) => {
                    const a = (0, c.gz)(e, t.conversationId),
                        i = a && (0, o.Z)(a);
                    return i ? (0, l.selectEntry)(e, i) : void 0;
                },
                u = (0, d.Z)().propsFromState(() => ({ lastEntry: p }));
            a(136728);
            var m = a(196001),
                h = a(466999),
                g = a(325686),
                b = a(823161),
                f = a(392237),
                y = a(459643),
                v = a(908478),
                S = a(978989),
                x = a(24949),
                R = a(919022);
            const w = (0, x.P1)(
                    (e, t) => R.ZP.selectMany(e, t.userIds || []),
                    (e) => ({ users: e }),
                ),
                E = (0, S.$j)(w),
                C = "overflow",
                _ = (e, t) => (e.id_str < t.id_str ? -1 : e.id_str > t.id_str ? 1 : 0),
                A = { stiffness: 1e3, damping: 70 },
                T = 140,
                M = { scale: (0, m.ST)(1, A), translateY: (0, m.ST)(0, A) },
                Z = (e, t) => ({ key: e.id_str, data: e, style: M }),
                L = (0, y.Z)({ translateY: T, scale: 0 }),
                D = (0, y.Z)({ scale: (0, m.ST)(1, A), translateY: (0, m.ST)(T, A) }),
                k = [{ key: "bubble", style: { scale: (0, m.ST)(1, A), translateY: (0, m.ST)(0, A) } }],
                F = (0, y.Z)({ translateY: T, scale: 0 }),
                B = (e) => {
                    const t = [];
                    return isFinite(e.scale) && t.push({ scale: e.scale }), isFinite(e.translateY) && t.push({ translateY: `${Math.round(e.translateY)}%` }), t;
                };
            class W extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isHidden: !0 }),
                        (this._bubbleWillLeave = () => {
                            const { users: e } = this.props;
                            return this.setState((t) => ({ isHidden: 0 === e.length })), { scale: (0, m.ST)(1, A), translateY: (0, m.ST)(T, A) };
                        });
                }
                componentDidUpdate(e, t) {
                    this.state.isHidden && this.props.users && this.props.users.length && this.setState({ isHidden: !1 });
                }
                shouldComponentUpdate(e, t) {
                    return !(0, v.Z)(this.props, e) || !(0, v.Z)(this.state, t);
                }
                render() {
                    const { isHidden: e } = this.state,
                        { users: t } = this.props,
                        a = t.sort(_).slice(0, 5).map(Z);
                    return (
                        t.length > 5 && a.push({ key: C, style: M }),
                        i.createElement(
                            g.Z,
                            { style: [I.root, e && I.hidden] },
                            i.createElement(
                                g.Z,
                                { style: I.avatarRow },
                                i.createElement(m.bg, { styles: a, willEnter: L, willLeave: D }, (e) =>
                                    i.createElement(
                                        i.Fragment,
                                        null,
                                        e.map((e, a) => {
                                            if (e.style.scale <= 0.05) return null;
                                            const s = B(e.style);
                                            return e.key === C ? i.createElement(g.Z, { key: e.key, style: [I.avatar, I.avatarSpacer, I.overflowAvatar, { transform: s }] }, i.createElement(h.Z, { style: I.overflowAvatarText }, "+", t.length - 5)) : i.createElement(g.Z, { key: e.key, style: [I.avatar, { transform: s }] }, i.createElement(b.default, { "aria-label": e.data && e.data.name, size: "xLarge", uri: e.data && e.data.profile_image_url_https }));
                                        }),
                                    ),
                                ),
                            ),
                            i.createElement(m.bg, { styles: t.length > 0 ? k : [], willEnter: F, willLeave: this._bubbleWillLeave }, (e) =>
                                i.createElement(
                                    i.Fragment,
                                    null,
                                    e.map((e) => i.createElement(g.Z, { key: e.key, style: [I.messageBubble, { transform: B(e.style) }] }, i.createElement(g.Z, { style: I.dot }), i.createElement(g.Z, { style: [I.dot, I.dot1] }), i.createElement(g.Z, { style: [I.dot, I.dot2] }))),
                                ),
                            ),
                        )
                    );
                }
            }
            const I = f.default.create((e) => ({ root: { flexDirection: "row", paddingBottom: e.spaces.space20, paddingEnd: e.spaces.space12, width: "calc(100% * 7/8)", position: "relative", transitionProperty: "height, padding-bottom", transitionDuration: "0.2s", overflow: "hidden" }, hidden: { paddingBottom: 0, paddingEnd: 0, height: 0, width: 0 }, avatarRow: { display: "inline-flex", alignItems: "flex-start", flexDirection: "row" }, avatar: { marginEnd: e.spaces.space12, transformOrigin: "50% 100%" }, avatarSpacer: { height: e.spaces.space40, width: e.spaces.space40 }, overflowAvatar: { borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.primary, alignItems: "center", justifyContent: "center" }, overflowAvatarText: { color: "white" }, messageBubble: { alignItems: "center", borderRadius: e.borderRadii.infinite, maxWidth: "100%", paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space16, backgroundColor: e.colors.gray50, borderBottomStartRadius: e.borderRadii.none, borderColor: e.colors.gray200, flexDirection: "row", height: e.spaces.space40, overflow: "hidden", transformOrigin: "0% 100%" }, dot: { display: "flex-inline", position: "relative", width: e.spaces.space12, height: e.spaces.space12, overflow: "hidden", borderRadius: e.borderRadii.infinite, backgroundColor: e.colors.gray700, marginEnd: e.spaces.space4, animationDuration: "1.2s", animationIterationCount: "infinite", animationTimingFunction: "linear", animationKeyframes: [{ "15%": { transform: [{ scale: 1.4 }], backgroundColor: e.colors.primary }, "30%": { transform: [{ scale: 1 }] } }] }, dot1: { animationDelay: "0.1s" }, dot2: { animationDelay: "0.2s" } })),
                P = E(W);
            class O extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._timers = {}),
                        (this.state = { forceHide: !1, userIds: [] }),
                        (this._handleLivePipelineUpdate = (e) => {
                            const { user_id: t } = e.dm_typing;
                            t !== this.context.viewerUserId && (this._timers[t] && clearTimeout(this._timers[t]), (this._timers[t] = setTimeout(() => this._removeAvatar(t), 4e3)), this.setState((e) => ({ forceHide: !1, userIds: [...e.userIds.filter((e) => e !== t), t] })));
                        }),
                        (this._removeAvatar = (e, t = !1) => {
                            this.setState((a) => {
                                const i = a.userIds.filter((t) => t !== e);
                                return { forceHide: t && 0 === i.length, userIds: i };
                            });
                        });
                }
                componentDidMount() {
                    this._initializeLivePipeline();
                }
                componentDidUpdate(e, t) {
                    if (this.props.lastEntry) {
                        const { lastEntry: t = {} } = e || {},
                            { lastEntry: a } = this.props;
                        t && t.id !== a.id && a.message_data && this._removeAvatar(a.message_data.sender_id, !0);
                    }
                    e.conversationId !== this.props.conversationId && (this._teardownLivePipeline(), this._initializeLivePipeline());
                }
                componentWillUnmount() {
                    this._teardownLivePipeline();
                }
                render() {
                    const { forceHide: e, userIds: t } = this.state;
                    return !e && i.createElement(P, { userIds: t });
                }
                _teardownLivePipeline() {
                    (0, s.Z)(this._timers).forEach((e) => clearTimeout(e)), this._livePipelineSubscription && this._livePipelineSubscription.teardown();
                }
                _initializeLivePipeline() {
                    const { conversationId: e } = this.props;
                    (0, n.ZP)().then(({ LivePipeline: t }) => {
                        t.isSupportedAndReady(this.context.featureSwitches) && !this._livePipelineSubscription && (this._livePipelineSubscription = t.get().subscribeTopic(`/dm_typing/${e}`, this._handleLivePipelineUpdate));
                    });
                }
            }
            O.contextType = r.rC;
            const q = u(O);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DMRichTextCompose~bundle.DirectMessages-2ace928a.7226bf0a.js.map
