"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.DirectMessages~bundle.DMRichTextCompose"],
    {
        318823: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(706758);
            const i = () => (0, a.ZP)().then(({ inputDetect: e }) => e);
        },
        225351: (e, t, n) => {
            n.d(t, { RU: () => C, T5: () => v, eN: () => x });
            var a = n(111677),
                i = n.n(a),
                s = n(516951),
                r = n(615656);
            const o = i().c3752568,
                l = i().f78aa3ea,
                c = i().f9690dc0,
                d = i().i859a9d4,
                u = i().b1d35408,
                p = i().g539cca6,
                m = i().bbac001a,
                h = i().a1d2a68e,
                g = i().ec2bb9d4,
                _ = i().hf383be4,
                y = i().b25c5b2a,
                b = i().c4fdbd16,
                f = i().hf3e7e38,
                C = { [r.ZP.DirectMessageConversationNotFound]: { customAction: () => !1 } },
                x = (e) => ({ defaultToast: { text: l }, [r.ZP.DirectMessageSenderIsNotVerifiedRateLimited]: { customAction: e ?? s.Z }, showToast: !0 }),
                v = (e) => ({ defaultToast: { text: o }, [r.ZP.CurrentUserSuspended]: { toast: { text: p, action: { label: d, link: "https://support.twitter.com/articles/15790" } } }, [r.ZP.DirectMessageCannotDmOtherUser]: { toast: { text: c } }, [r.ZP.DirectMessageDuplicate]: { toast: { text: y } }, [r.ZP.DirectMessageOtherUserNotFollowing]: { toast: { text: h, action: { label: d, link: "https://support.twitter.com/articles/14606" } } }, [r.ZP.DirectMessagesSenderBlocksRecipient]: { toast: { text: b } }, [r.ZP.DirectMessageTooLongError]: { toast: { text: m } }, [r.ZP.DirectMessageTweetNotFound]: { toast: { text: g } }, [r.ZP.GenericBadRequest]: { customAction: s.Z }, [r.ZP.MessageSendError]: { toast: { text: f } }, [r.ZP.OverStatusUpdateLimit]: { toast: { action: { label: d, link: "https://support.twitter.com/articles/15364" }, text: u } }, [r.ZP.TargetUserNotFound]: { toast: { text: _ } }, [r.ZP.DirectMessageSenderIsNotVerifiedRateLimited]: { customAction: e ?? s.Z }, showToast: !0 });
        },
        111311: (e, t, n) => {
            n.d(t, { Z: () => i });
            var a = n(801501);
            class i {
                constructor(e, t = Object.freeze({})) {
                    const { interval: n = 6e4, burstInterval: i = 3e3, burstDuration: s = 3e5 } = t;
                    (this.pollTimer = new a.Z(n).interval(e)), (this.burstTimer = new a.z(this.pollTimer, i, s));
                }
                start(e) {
                    return this.pollTimer.start(), e && this.burstTimer.requestBurst(), this;
                }
                stop() {
                    return this.burstTimer.stopBurst(), this.pollTimer.stop(), this;
                }
                restart() {
                    return this.stop(), this.start(), this;
                }
            }
        },
        575522: (e, t, n) => {
            n.d(t, { F: () => i, T: () => a });
            const a = (e) => (e ? "medium" : "normal"),
                i = (e, t) => (e || t ? "text" : "gray700");
        },
        26339: (e, t, n) => {
            n.d(t, { QD: () => u, Tt: () => c, c: () => i, ik: () => s, js: () => r, lf: () => o });
            var a = n(275365);
            const i = (e) => e && e.type === a.Cr.MESSAGE,
                s = (e) => e && e.type === a.Cr.WELCOME_MESSAGE,
                r = (e) => e && e.type === a.Cr.TRUST_CONVERSATION,
                o = (e) => e && e.type === a.Cr.REACTION_CREATE,
                l = [a.Cr.CONVERSATION_AVATAR_UPDATE, a.Cr.CONVERSATION_NAME_UPDATE, a.Cr.JOIN_CONVERSATION, a.Cr.PARTICIPANTS_JOIN, a.Cr.PARTICIPANTS_LEAVE],
                c = (e) => e && l.indexOf(e.type) > -1,
                d = [a.Cr.END_AV_BROADCAST],
                u = (e) => e && d.indexOf(e.type) > -1;
        },
        187891: (e, t, n) => {
            n.d(t, { ZP: () => E });
            var a = n(202784),
                i = n(325686),
                s = n(143670),
                r = n(154003),
                o = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(607127),
                u = n(616894),
                p = n(415506);
            const m = c().fcd4d489,
                h = c().gbed8594,
                g = c().g9074da4,
                _ = c().ad63377e,
                y = c().h09b49f8,
                b = c().i6b19b08,
                f = c().j7bb1a43,
                C = c().cdb1a05a,
                x = c().cfd2f35e,
                v = o.default.create((e) => ({ roundCorners: { borderRadius: e.borderRadii.xLarge }, flatCorners: { borderRadius: e.borderRadii.none }, cancelButton: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space16 } })),
                E = ({ dismiss: e, flatBorders: t = !1, isGroup: n = !1, onBlockClick: o, onDeleteClick: l, onReportClick: c, requestorScreenName: E, showBlock: T = !1, showCancel: k = !1, showDelete: S = !1 }) => {
                    const I = a.useCallback(() => {
                            c && c(), e();
                        }, [e, c]),
                        P = a.useCallback(() => {
                            o && o(), e();
                        }, [e, o]),
                        w = a.useCallback(() => {
                            l && l(), e();
                        }, [e, l]);
                    return a.createElement(i.Z, { role: "dialog", style: t ? v.flatCorners : v.roundCorners }, S ? a.createElement(s.Z, { Icon: d.default, actionSubText: y, actionText: n ? g : _, onClick: w, textColor: "red500" }) : null, T ? a.createElement(s.Z, { Icon: u.default, actionSubText: h, actionText: m({ screenName: E }), onClick: P }) : null, a.createElement(s.Z, { Icon: p.default, actionSubText: C, actionText: n ? b : f({ screenName: E }), onClick: I }), k ? a.createElement(r.ZP, { onPress: e, style: v.cancelButton, type: "primaryOutlined" }, x) : null);
                };
        },
        716354: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                i = n(688715),
                s = n(439592),
                r = n(530732),
                o = n(111677),
                l = n.n(o),
                c = n(449950),
                d = n(965728);
            const u = l().b327c12a,
                p = (e) => {
                    e.stopPropagation();
                },
                m = ({ hideAltLabel: e, media: t, mediaUrl: n }) => {
                    const o = t.ext_alt_text || u,
                        l = (0, i.ib)(t.media_url_https),
                        { height: m, width: h } = t.original_info || {},
                        g = (0, d.Rb)(t).rgb,
                        _ = a.createElement(c.Z, { "aria-label": o, aspectMode: s.Z.withinRange(9 / 16, 10), backgroundColor: g, image: { url: l, width: h, height: m }, shouldShowAltLabel: !e && !!t.ext_alt_text });
                    return n ? a.createElement(r.Z, { interactiveStyles: null, link: n, onPress: p }, _) : _;
                };
        },
        754310: (e, t, n) => {
            n.d(t, { H2: () => d, Ip: () => r, Is: () => c, LJ: () => u, Rw: () => o, fw: () => l, qn: () => p });
            var a = n(849938),
                i = n(392237);
            const s = (e, t) => {
                    if (null == e) return !1;
                    const [n, a] = t || [0, 0];
                    return !((0 === n || 1 === n) && e.length === a);
                },
                r = (e) => {
                    if (!e) return !1;
                    const { attachment: t } = e;
                    if (!t) return !0;
                    if (t.sticker) return !1;
                    const n = t.tweet || t.photo || t.animated_gif || t.video || void 0;
                    if (n) return s(e.text, n.indices);
                    if (t.card) {
                        const n = (e.entities?.urls || []).find((e) => e.url === t.card);
                        return s(e.text, n && n.indices);
                    }
                    return !0;
                },
                o = (e) => {
                    const t = e?.message_data?.attachment;
                    return !(!t || !(t.card || t.tweet || t.photo || t.animated_gif || t.video));
                },
                l = (e) => {
                    const t = e?.message_data?.attachment;
                    return !(!t || !t.fleet);
                },
                c = (e) => !r(e.message_data) && o(e),
                d = (e, t, n) => {
                    const a = 1.25 * i.default.theme.fontSizesPx.body;
                    return { compositeRendered: e ? void 0 !== t && void 0 !== n : void 0 !== t, isTextSquared: void 0 !== t && void 0 !== n && n === t, isAttachmentSquared: void 0 !== n && void 0 !== t && (t === n || t <= n - a) };
                },
                u = (e) => {
                    const { message_data: t } = e;
                    if (!t) return !1;
                    if (o(e) && !l(e)) return !1;
                    if (!t.text) return !1;
                    const n = (0, a.Qc)(t.text);
                    if (!n || 0 === n.length) return !1;
                    const i = n
                        .sort((e, t) => t.indices[1] - e.indices[1])
                        .reduce((e, t) => `${e.slice(0, t.indices[0])}${e.slice(t.indices[1])}`, t.text)
                        .trim();
                    return n.length <= 10 && 0 === i.length;
                },
                p = (e, t) => {
                    if (!e?.urls || !t) return e;
                    const n = e.urls.filter((e) => e.display_url !== t.display_url);
                    return { ...e, urls: n, media: [t] };
                };
        },
        699897: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                i = n(325686),
                s = n(392237),
                r = n(731708),
                o = n(111677),
                l = n.n(o),
                c = n(575522);
            const d = s.default.create((e) => ({ root: { paddingBottom: e.spaces.space20 } })),
                u = l().d84b485e,
                p = l().be0c83d8,
                m = ({ entry: e, isCompact: t, isSelected: n = !1, unread: s = !1 }) => {
                    const o = "follow" === e.reason ? u : p,
                        l = (0, c.T)(s),
                        m = (0, c.F)(s, n);
                    return t ? a.createElement(r.ZP, { color: m, weight: l }, o) : a.createElement(i.Z, { style: d.root }, a.createElement(r.ZP, { align: "center", color: m, size: "subtext2", weight: l }, o));
                };
        },
        213386: (e, t, n) => {
            n.d(t, { X: () => c });
            var a = n(202784),
                i = n(868634),
                s = n(731708),
                r = n(392237),
                o = n(111677);
            const l = n.n(o)().bcc13060,
                c = (e) => a.createElement(i.ZP, { background: "gray50", style: d.label }, a.createElement(s.ZP, { color: "gray700", numberOfLines: 1, size: "subtext3", style: d.content, weight: "medium" }, l)),
                d = r.default.create((e) => ({ label: { alignSelf: "center", borderRadius: e.borderRadii.infinite, borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.gray200 }, content: { marginHorizontal: e.spaces.space4, marginVertical: e.spaces.space8, textTransform: "uppercase" } }));
        },
        228245: (e, t, n) => {
            n.d(t, { FC: () => h, Mk: () => g });
            var a = n(202784),
                i = n(124964),
                s = n(111677),
                r = n.n(s),
                o = n(275365);
            const l = r().e2cd3b7c,
                c = r().f42f365a,
                d = r().a7570f2c,
                u = r().jd9831b2,
                p = r().f0985268,
                m = r().ca397a48,
                h = (e, t, n) => {
                    const a = n === e.by_user_id;
                    switch (e.end_reason) {
                        case o.td.HUNG_UP:
                        case o.td.TIMED_OUT:
                            return e.call_type === o.v1.AUDIO_ONLY ? l : c;
                        case o.td.MISSED:
                        case o.td.CANCELED:
                        case o.td.DECLINED:
                            return a ? (e.call_type === o.v1.AUDIO_ONLY ? p : m) : e.call_type === o.v1.AUDIO_ONLY ? d : u;
                        default:
                            return "";
                    }
                },
                g = (e) => {
                    switch (e.end_reason) {
                        case o.td.HUNG_UP:
                        case o.td.TIMED_OUT:
                            return a.createElement(a.Fragment, null, _(e), " ", a.createElement(i.Z, null), " ", y(e));
                        case o.td.MISSED:
                        case o.td.CANCELED:
                        case o.td.DECLINED:
                            return _(e);
                        default:
                            return "";
                    }
                },
                _ = (e) => {
                    const t = parseInt(e.time, 10);
                    return (0, r().b6ca7bcb)(new Date(t));
                },
                y = (e) => {
                    const t = (parseInt(e.ended_at_ms, 10) - parseInt(e.started_at_ms, 10)) / 1e3,
                        n = { seconds: Math.floor(t % 60), minutes: Math.floor(t / 60) % 60, hours: Math.floor(t / 3600) };
                    return t < 60 ? a.createElement(r().I18NFormatMessage, { $i18n: "ie5066ff", seconds: n.seconds }) : t < 3600 ? a.createElement(r().I18NFormatMessage, { $i18n: "idcd199b", minutes: n.minutes, seconds: n.seconds }) : a.createElement(r().I18NFormatMessage, { $i18n: "ee530bbf", hours: n.hours, minutes: n.minutes });
                };
        },
        778787: (e, t, n) => {
            n.d(t, { Z: () => He });
            var a = n(807896),
                i = (n(136728), n(202784)),
                s = n(928316),
                r = n(325686),
                o = n(392237),
                l = n(682474),
                c = n(154003),
                d = n(157130),
                u = n(111677),
                p = n.n(u),
                m = n(826363),
                h = n(19197),
                g = n(58399),
                _ = n(912021),
                y = n(323265),
                b = n(913670),
                f = n(113392),
                C = n(373554),
                x = n(304059),
                v = n(822399);
            const E = [
                { waitMs: 1e3, progress: 0.1 },
                { waitMs: 1400, progress: 0.3 },
                { waitMs: 1800, progress: 0.5 },
                { waitMs: 2400, progress: 0.6 },
                { waitMs: 3e3, progress: 0.9 },
            ];
            class T extends i.Component {
                constructor(...e) {
                    super(...e), (this.state = { currentStepIndex: -1 });
                }
                componentDidMount() {
                    this._scheduleNextStep(0);
                }
                componentWillUnmount() {
                    this._currentTimeoutId && clearTimeout(this._currentTimeoutId);
                }
                render() {
                    const { currentStepIndex: e } = this.state,
                        t = e >= 0 && e < E.length ? E[e].progress : 0;
                    return i.createElement(v.Z, { progress: t });
                }
                _scheduleNextStep(e) {
                    e < E.length &&
                        (this._currentTimeoutId = setTimeout(() => {
                            (this._currentTimeoutId = void 0), this.setState({ currentStepIndex: e }), this._scheduleNextStep(e + 1);
                        }, E[e].waitMs));
                }
            }
            function k({ isSending: e, isUploading: t, progress: n }) {
                return e && !t ? i.createElement(T, null) : i.createElement(v.Z, { progress: e ? Math.max(n, 0.02) : 0 });
            }
            const S = i.memo(k);
            var I = n(90511),
                P = n(490834),
                w = n(318823),
                A = n(655352),
                R = n(96206),
                M = n(47743),
                D = n(511985),
                Z = n(716233),
                O = n(339110),
                F = n(292627),
                N = n(365023),
                L = n(358493);
            const B = function (e) {
                    const { "aria-label": t, children: n, onLayout: s, role: o, sideNavPresent: l, style: c } = e,
                        d = i.useContext(L.hr);
                    return l
                        ? i.createElement(i.Fragment, null, i.createElement(r.Z, { "aria-label": t, onLayout: s, role: o, style: c }, n))
                        : i.createElement(
                              F.Z.BottomComposer,
                              null,
                              i.createElement(N.Z, { id: "DMComposerWrapper" }, (e, l) => i.createElement(r.Z, (0, a.Z)({ ref: e() }, l({ "aria-label": t, role: o, onLayout: s, style: c })), n, i.createElement(r.Z, { style: !1 === d.keyboardVisible && U.offsetBottom }))),
                          );
                },
                U = o.default.create(() => ({ offsetBottom: { paddingBottom: o.default.iPhoneOffsetBottom } }));
            var V = n(385438),
                W = n(928965),
                Q = n(125363),
                K = n(919022),
                q = n(754310),
                G = n(731708),
                H = n(451051),
                z = n(837020),
                $ = n(716354);
            const j = ({ author: e, entities: t, icon: n, media: a, onCancel: s, text: o }) => {
                    const l = a && !a.possibly_sensitive ? { id_str: a.id_str, media_url_https: a.media_url_https, display_url: a.display_url, type: "photo", ext_alt_text: a.ext_alt_text, original_info: a.original_info } : null;
                    return i.createElement(r.Z, { style: J.root }, i.createElement(r.Z, { style: J.container }, i.createElement(G.ZP, { size: "subtext2", weight: "medium" }, e), i.createElement(r.Z, { style: J.textContainer }, n, i.createElement(H.Z, { displayTextRange: [0, o?.length || 0], entities: t, numberOfLines: 3, size: "subtext2", text: o || "", withMediaLinks: !1 }))), i.createElement(r.Z, { style: J.mediaContainer }, l ? i.createElement(r.Z, { style: J.image }, i.createElement($.Z, { hideAltLabel: !0, media: l, mediaUrl: null })) : null, i.createElement(c.ZP, { icon: i.createElement(z.default, { style: J.closeIcon }), onClick: s, type: "primaryText" })));
                },
                J = o.default.create((e) => ({ root: { display: "flex", flexDirection: "row", backgroundColor: e.colors.gray0, width: "100%", gap: "4px", alignItems: "center", justifyContent: "space-between", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12, borderStartColor: e.colors.gray1000, borderStartWidth: e.spaces.space4, borderTopStyle: "solid" }, container: { flexDirection: "column", flexShrink: 1 }, textContainer: { flexDirection: "row", alignItems: "center", gap: "4px" }, image: { width: e.spaces.space32, maxHeight: e.spaces.space32 }, mediaContainer: { flexDirection: "row", alignItems: "center", height: "100%" }, closeIcon: { color: e.colors.gray700 } })),
                Y = p().af71ef68,
                X = p().b327c12a,
                ee = p().fc64990e,
                te = p().i0db46e6,
                ne = ({ messageData: e, onCancel: t }) => {
                    const n = (0, Q.v9)((t) => K.ZP.select(t, e.sender_id));
                    let a = e.text;
                    const s = e.attachment?.photo || e.attachment?.video || e.attachment?.animated_gif;
                    let r,
                        o = (0, q.qn)(e.entities, s);
                    return !(0, q.Ip)(e) && e.attachment && (e.attachment.video?.audio_only ? ((a = Y), (o = void 0), (r = i.createElement(V.default, null))) : e.attachment.photo ? ((a = X), (o = void 0), (r = i.createElement(W.default, null))) : e.attachment.video ? ((a = ee), (o = void 0), (r = i.createElement(W.default, null))) : e.attachment.animated_gif && ((a = te), (o = void 0), (r = i.createElement(W.default, null)))), i.createElement(j, { author: n?.name || "", entities: o, icon: r, media: s, onCancel: t, text: a });
                };
            var ae = n(537392),
                ie = n(108362),
                se = n(10656),
                re = n(952428);
            function oe({ closeQuickReplyPicker: e, conversationId: t, description: n, id: a, isWide: s, label: r, onClick: o, perspective: l, quickReplyId: c }) {
                const d = i.useCallback(() => {
                    o({ id: a, label: r });
                }, [a, r, o]);
                return i.createElement(re.Z, { onClick: d, role: "button", style: [le.root, s ? le.isWide : le.isNarrow] }, i.createElement(G.ZP, { weight: "bold" }, r), i.createElement(G.ZP, { color: "gray700", size: "subtext2" }, n));
            }
            const le = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.borderColor, borderStyle: "solid", paddingStart: "1rem", paddingVertical: "1rem" }, isWide: { borderRadius: e.borderRadii.xLarge, paddingVertical: "0.5rem", borderWidth: e.borderWidths.small }, isNarrow: { borderTopWidth: e.borderWidths.small } }));
            class ce extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleOptionChoose = (e) => {
                            const {
                                onOptionChoose: t,
                                quickReplyOptions: { id: n },
                            } = this.props;
                            return t(n, e);
                        });
                }
                render() {
                    const {
                            quickReplyOptions: { options: e },
                        } = this.props,
                        t = 1 === e.length;
                    return i.createElement(ae.ZP, null, ({ containerWidth: n }) => {
                        const a = se.Z.isTwoColumnLayout(n),
                            s = [a && de.isWide, a && t && de.oneButtonOnly, !a && de.isNarrow];
                        return i.createElement(
                            ie.Z,
                            { style: s, withGutter: a },
                            e.map((e) => this.renderOption(e, a)),
                        );
                    });
                }
                renderOption(e, t) {
                    const { closeQuickReplyPicker: n, conversationId: a, perspective: s, quickReplyOptions: r } = this.props;
                    return i.createElement(oe, { closeQuickReplyPicker: n, conversationId: a, description: e.description, id: e.id, isWide: t, key: e.id, label: e.label, onClick: this._handleOptionChoose, perspective: s, quickReplyId: r.id });
                }
            }
            const de = o.default.create((e) => ({ oneButtonOnly: { gridTemplateColumns: "1fr" }, isWide: { backgroundColor: e.colors.gray0, display: "grid", gridColumnGap: e.spaces.space12, gridRowGap: e.spaces.space12, gridTemplateColumns: "1fr 1fr", paddingVertical: e.spaces.space12 }, isNarrow: { maxHeight: "168px", overflow: "auto" } })),
                ue = ce,
                pe = "dmComposerAttachments",
                me = "iconDrawer",
                he = "iconDrawerOn",
                ge = "dmComposerTextInputComponent",
                _e = "dmComposerTextInput",
                ye = "dmComposerSendButton",
                be = o.default.create((e) => ({ actionButton: { marginStart: e.spaces.space4 } }));
            var fe = n(109491);
            const Ce = p().e3275464,
                xe = i.createElement(fe.default, null);
            function ve(e) {
                const { onDidSend: t, onSend: n, onWillSend: a, showIconInsteadOfLabel: s } = e,
                    r = e.disabledFunc();
                return i.createElement(
                    c.ZP,
                    {
                        "aria-label": Ce,
                        disabled: r,
                        hoverLabel: { label: Ce },
                        icon: s ? xe : void 0,
                        onPress: (e) => {
                            r ||
                                (a && a(),
                                n(e).then(({ conversationId: e, text: n }) => {
                                    t && t(e, n);
                                }));
                        },
                        size: "medium",
                        style: be.actionButton,
                        testID: ye,
                        type: s ? "brandText" : "brandFilled",
                    },
                    s ? null : Ce,
                );
            }
            var Ee = n(593953),
                Te = n(668214),
                ke = n(704279),
                Se = n(723819),
                Ie = n(497294),
                Pe = n(390387),
                we = n(38562),
                Ae = n(601576);
            const Re = (0, Te.Z)()
                .propsFromState(() => ({ dataSaverMode: we.IX, perspective: Pe._h, showGraduatedAccess: Se.nQ }))
                .propsFromActions(() => ({ addMedia: Ie.rA, addToast: Ae.fz, processMultipleMedia: Ie.G$, removeMediaUpload: Ie.WU, scribeAction: ke.n, preUploadMedia: Ie.oZ }));
            var Me = n(371344);
            const De = o.default.create((e) => ({ composeInput: { backgroundColor: "transparent", width: "100%" } })),
                Ze = p().ca0ce0e4,
                Oe = (e, t) => {
                    const { disabled: n, editorState: a, isSendDisabledFunc: s, keyboardOrMouseDetectedFunc: r, mediaButtonsCollapsible: o, onBlur: l, onDidHandleReturn: c, onFilesAdded: d, onFocus: u, onReturn: p, onRichTextChange: m, onWillHandleReturn: h, placeholderText: g, renderAttachmentsFunc: _, richTextInputContext: y, value: b } = e,
                        f = g || Ze,
                        C = !!y,
                        x = y ? { editorState: a, element: y.element } : void 0,
                        v = (e) => {
                            const {
                                nativeEvent: { ctrlKey: t, key: n, metaKey: a, shiftKey: i },
                            } = e;
                            if (!("Enter" === n && r() && !(i || a || t))) return "not-handled";
                            const s = h(e);
                            return (
                                p(e).then(({ conversationId: e, text: t }) => {
                                    c(e, t);
                                }),
                                s
                            );
                        };
                    return i.createElement(Me.Z, {
                        contentAbove: _(),
                        editable: !n,
                        handleReturn: C ? v : void 0,
                        isCompact: !0,
                        leftAligned: !0,
                        maxNumberOfLines: C ? 8 : 4,
                        multiline: !0,
                        numberOfLines: 1,
                        onBlur: l,
                        onChange: m,
                        onFilesAdded: d,
                        onFocus: u,
                        onKeyPress: C
                            ? void 0
                            : (e) => {
                                  v(e);
                              },
                        placeholder: f,
                        ref: t,
                        richTextInputContext: n ? void 0 : x,
                        style: De.composeInput,
                        styleType: "selection",
                        testID: _e,
                        useCacheForDOMMeasurements: !s() && !o,
                        value: b,
                    });
                },
                Fe = i.forwardRef(Oe);
            function Ne({ attachment: e, enabled: t, handleSecondaryAction: n, messageText: a, newConversationParticipants: s, perspective: r, secondaryActionLabel: o }) {
                const l = i.useCallback(
                    (e) => {
                        n(e);
                    },
                    [n],
                );
                return i.createElement(c.ZP, { "aria-label": o, disabled: !t, onPress: l, style: Le.root, type: "primaryOutlined" }, o);
            }
            const Le = o.default.create((e) => ({ root: { marginStart: e.spaces.space4 } })),
                Be = p().ee230734,
                Ue = p().ic8c615e,
                Ve = p().a04077c4,
                We = p().c07367d8,
                Qe = (e) => !(!e || !e.media),
                Ke = (0, M.yN)({ maxNumberOfMedia: 1 });
            class qe extends i.Component {
                constructor(e) {
                    super(e),
                        (this._isSecretConversation = () => {
                            const { conversationId: e } = this.props;
                            return (0, Ee.NL)(e);
                        }),
                        (this._handleLayout = (e) => {
                            const { onHeightChange: t } = this.props,
                                { mediaButtonsCollapsible: n } = this.state,
                                a = e.nativeEvent.layout;
                            a && ((0, A.ZP)() || (t && t(a.height)), a.width <= o.default.theme.breakpoints.small && !n ? this.setState({ mediaButtonsCollapsible: !0 }) : a.width > o.default.theme.breakpoints.small && n && this.setState({ mediaButtonsCollapsible: !1 }));
                        }),
                        (this._renderMainContent = () => {
                            const { richTextInputContext: e, typeaheadWrapper: t } = this.props,
                                { value: n } = this.state,
                                a = t;
                            return a ? i.createElement(a, { contextText: n, isInline: !0, onTextUpdated: e ? this._handleRichTextChange : this._handlePlainTextChange, onTypeaheadStateChange: this._handleTypeaheadStateChange, source: O._4.ComposeMessage }, this._renderFieldTextInput) : this._renderFieldTextInput();
                        }),
                        (this._renderFieldTextInput = (e) => {
                            const { disabled: t, placeholderText: n, richTextInputContext: a } = this.props,
                                { editorState: s, mediaButtonsCollapsible: r, value: o } = this.state,
                                l = { disabled: t || !1, editorState: s, isSendDisabledFunc: this._isSendDisabled, keyboardOrMouseDetectedFunc: () => this._keyboardOrMouseDetected, mediaButtonsCollapsible: r, onBlur: this._handleOnBlur, onDidHandleReturn: this._didPerformPrimaryAction, onFilesAdded: this._handleAddMediaFiles, onFocus: this._handleTextInputFocus, onInputChange: e || (() => {}), onPlainTextChange: this._handlePlainTextChange, onReturn: this._handleReturn, onRichTextChange: this._getHandleRichTextChange(e), onWillHandleReturn: this._willPerformPrimaryAction, placeholderText: n || "", ref: this._setTextInputRef, renderAttachmentsFunc: this._renderAttachments, richTextInputContext: a, testID: ge, value: o };
                            return i.createElement(Fe, l);
                        }),
                        (this._getHandleRichTextChange = (0, _.Z)((e) => (t) => {
                            e?.(t), this._handleRichTextChange(t);
                        })),
                        (this._handleTypeaheadStateChange = (e) => {
                            this.setState({ isTypeaheadActive: e });
                        }),
                        (this._renderAttachments = () => {
                            const { attachment: e, conversationId: t, isCardPreviewTombstoned: n, isShareViaDM: a, isUploading: s } = this.props,
                                { value: o } = this.state,
                                { height: c, width: d } = (e && ((e.media && e.media.mediaFile) || (e.provider && e.media && e.media.externalMediaDetails))) || {},
                                u = e?.media,
                                p = u?.mediaMetadata,
                                m = p?.altText,
                                h = p?.defaultAltText,
                                g = (0, I.dm)(o);
                            return i.createElement(i.Fragment, null, u ? i.createElement(r.Z, { style: Ge.attachmentContainer, testID: pe }, i.createElement(l.Z, { ratio: d / c, style: Ge.aspectContainer }, i.createElement(r.Z, { style: Ge.mediaPreviewContainer }, i.createElement(x.Z, { "aria-label": m || h, mediaItem: u, onClick: this._canEditImage ? this._handleClickMediaDetail : void 0, onEdit: this._canEditGif || this._canEditImage || this._canEditVideo ? this._handleClickMediaDetail : void 0, onRemove: this._handleRemoveMedia(u.id), resizeIfNeeded: "width", style: Ge.mediaPreview, withAltTextLabel: !!m, withCloseButton: !s, withEditButton: (this._canEditGif || this._canEditImage || this._canEditVideo) && !s, withEditIcon: !0 }))), e && e.provider && e.gifUrl && i.createElement(r.Z, { style: Ge.gifAttribution }, i.createElement(P.Z, { gifUrl: e.gifUrl, provider: e.provider }))) : g && !a ? i.createElement(I.ZP, { conversationId: t, isCardPreviewTombstoned: n, style: Ge.cardPreviewContainer, urls: g }) : null);
                        }),
                        (this._renderPrimaryActionButton = (e) => {
                            const { onDidPerformPrimaryAction: t, quickReplyOptions: n } = this.props,
                                s = this._hasMessageText();
                            if (!n || s || e) {
                                const n = {
                                    disabledFunc: this._isSendDisabled,
                                    showIconInsteadOfLabel: !0,
                                    messageText: this._getMessageText(),
                                    onWillSend: () => {
                                        this._willPerformPrimaryAction();
                                    },
                                    onDidSend: (e, n) => {
                                        t && t(e, { type: "richText" }, n);
                                    },
                                };
                                return i.createElement(ve, (0, a.Z)({}, n, { hasAttachment: e, onSend: this._performPrimaryAction }));
                            }
                            return i.createElement(c.ZP, { "aria-label": Ue, icon: this.state.isQuickReplyOpen ? i.createElement(m.default, { testID: he }) : i.createElement(h.default, { testID: me }), onPress: this._handleQuickReplyPickerToggle, size: "medium", style: Ge.actionButton, type: "brandText" });
                        }),
                        (this._renderSecondaryActionButton = () => {
                            const { attachment: e, newConversationParticipants: t, perspective: n, secondaryActionDisabledPopoverRenderer: a, secondaryActionLabel: s, shouldEnableSecondaryActionFunc: r, shouldShowSecondaryActionFunc: o } = this.props;
                            if ((o && !o()) || !s) return null;
                            const l = !r || r(),
                                c = i.createElement(Ne, { attachment: e, enabled: l, handleSecondaryAction: this._handleSecondaryAction, messageText: this._getMessageText(), newConversationParticipants: t, perspective: n, secondaryActionLabel: s });
                            return l || !a ? c : i.createElement(d.Z, { enableHover: !0, preferredVerticalOrientation: "up", renderContent: a, withArrow: !0 }, c);
                        }),
                        (this._renderComposer = () => {
                            const { attachment: e } = this.props,
                                t = Qe(e);
                            return i.createElement(r.Z, { style: [Ge.composer, t && Ge.composerWithAttachment] }, t ? null : this._renderMediaButtons(), i.createElement(r.Z, { style: Ge.composeBoxContainer }, this._renderMainContent()), this._renderSecondaryActionButton(), this._renderPrimaryActionButton(t));
                        }),
                        (this._renderMediaButtons = () => {
                            const { conversationId: e, history: t } = this.props,
                                n = !this._isSecretConversation() && this.props.withMediaPicker,
                                a = !this._isSecretConversation() && this.props.withGifPicker,
                                s = y.ZP.isDesktopOS() && this.props.withEmojiPicker,
                                o = [n, a, s].filter((e) => e).length,
                                { mediaButtonsCollapsed: l, mediaButtonsCollapsible: d } = this.state,
                                u = d && l && o > 1;
                            return i.createElement(r.Z, { style: Ge.uploadButtons }, u ? i.createElement(c.ZP, { "aria-label": Be, icon: i.createElement(g.default, null), onMouseDown: this._handleShowMediaControlsMouseDown, type: "brandText" }) : null, n && !u ? i.createElement(C.Z, { onChange: this._handleAddMediaFiles, style: Ge.mediaPicker, type: "brandText" }) : null, a && !u ? i.createElement(f.Z, { dmConversationId: e, enabled: !0, gifSearchKeySource: D.AD.DMComposition, history: t }) : null, s && !u ? i.createElement(b.Z, { disabled: this.props.disabled, onEmojiSelect: this._handleEmojiSelect, size: "medium", textInputRef: this._textInput || void 0 }) : null);
                        }),
                        (this._handleShowMediaControlsMouseDown = () => {
                            const { scribeAction: e, scribeNamespace: t } = this.props;
                            this.setState({ mediaButtonsCollapsed: !1 }), e({ ...t, component: "dm_composer", element: "toggle", action: "expand" });
                        }),
                        (this._handleReturn = (e) => {
                            const { isTypeaheadActive: t } = this.state;
                            return !t && !this._isSendDisabled() ? (e.preventDefault(), this._performPrimaryAction(e)) : Promise.resolve({ conversationId: "", text: "" });
                        }),
                        (this._handleClickMediaDetail = () => {
                            const { attachment: e, conversationId: t, history: n } = this.props;
                            if (this._canEditGif || this._canEditImage || this._canEditVideo) {
                                const a = e && e.media ? e.media.id : 0,
                                    i = this._canEditGif ? "alt_text" : this._canEditVideo ? "trimmer" : "crop";
                                n.push("/messages/compose/media", { mediaId: a, conversationId: t, tab: i });
                            }
                        }),
                        (this._handleAddMediaFiles = (e) => {
                            const { addMedia: t, addToast: n, dataSaverMode: a, onAddMedia: i, preUploadMedia: s, processMultipleMedia: r, removeMedia: o, removeMediaUpload: l } = this.props;
                            this._isSecretConversation()
                                ? n({ text: We })
                                : t(e, { location: Z.vC.Dm }).then((e) => {
                                      const t = e.map((e) => e.id);
                                      this._validateMedia(e)
                                          ? (i && i(t),
                                            r(e, { onFailure: o }).then((e) => {
                                                a || s(e.filter((e) => !!e && !!e.id).map((e) => e.id));
                                            }))
                                          : (n({ text: Ve }), l(t));
                                  });
                        }),
                        (this._handleEmojiSelect = (e) => {
                            const { editorState: t } = this.state,
                                { richTextInputContext: n } = this.props;
                            if (!n || !t) return;
                            const a = n.insertTextAtCursor(t, e.text);
                            this._handleRichTextChange(a);
                        }),
                        (this._handleRemoveMedia = (e) => () => {
                            this.props.removeMedia && this.props.removeMedia(e);
                        }),
                        (this._willPerformPrimaryAction = () => {
                            const { history: e, onWillPerformPrimaryAction: t, showGraduatedAccess: n } = this.props,
                                { isTypeaheadActive: a } = this.state;
                            return (
                                !this._isSendDisabled() &&
                                    !a &&
                                    this._textInput?.applyFinalValue((e) => {
                                        t && t({ type: "richText" }, e);
                                    }),
                                n && e.push({ pathname: "/i/graduated-access", query: { graduatedAccessScribeSrc: "messages" } }),
                                "handled"
                            );
                        }),
                        (this._performPrimaryAction = (e) => this.props.onPrimaryAction({ type: "richText" }, this._textInput?.getValue() || "")),
                        (this._didPerformPrimaryAction = (e, t) => {
                            const { onDidPerformPrimaryAction: n } = this.props;
                            this._closeQuickReplyPicker(), n && n(e, { type: "richText" }, t);
                        }),
                        (this._handleSecondaryAction = (e) => {
                            const { onSecondaryAction: t } = this.props;
                            this._textInput &&
                                this._textInput.applyFinalValue((e) => {
                                    t && t({ type: "richText" }, e);
                                });
                        }),
                        (this._handleRichTextChange = (e) => {
                            const { onTyping: t, richTextInputContext: n } = this.props,
                                { value: a } = this.state,
                                i = n ? e.getCurrentContent().getPlainText() : e.target.value,
                                s = n ? n.convertEmojiToEntities(e) : null;
                            this.setState({ editorState: s, value: i }), a !== i && t?.();
                        }),
                        (this._handlePlainTextChange = (e) => {
                            const { onTyping: t } = this.props,
                                { value: n } = this.state,
                                a = e.target.value;
                            this.setState({ value: a }), n !== a && t?.();
                        }),
                        (this._handleOnBlur = () => {
                            const { onBlur: e } = this.props,
                                { mediaButtonsCollapsible: t } = this.state;
                            e && e(), t && this.setState({ mediaButtonsCollapsed: !1 });
                        }),
                        (this._handleTextInputFocus = () => {
                            const { quickReplyOptions: e } = this.props,
                                { isQuickReplyOpen: t, mediaButtonsCollapsible: n } = this.state;
                            e && t && this._closeQuickReplyPicker(), n && this.setState({ mediaButtonsCollapsed: !0 });
                        }),
                        (this._handleQROptionSelection = (e, t) => {
                            const { disabled: n, onPrimaryAction: a } = this.props;
                            n || (a({ quickReply: { id: e, selected_id: t.id } }, t.label), this._closeQuickReplyPicker());
                        }),
                        (this._handleQuickReplyPickerToggle = () => {
                            this.setState({ isQuickReplyOpen: !this.state.isQuickReplyOpen });
                        }),
                        (this._validateMedia = (e) => !Qe(this.props.attachment) && Ke(e)),
                        (this._detectKeyboardOrMouse = (e) => {
                            const { KEYBOARD: t, MOUSE: n, registerSome: a } = e;
                            a(() => {
                                this._keyboardOrMouseDetected = !0;
                            }, [t, n]);
                        }),
                        (this._isSendDisabled = () => {
                            const { attachment: e, canSendEmptyMessage: t, disabled: n, isUploading: a } = this.props,
                                i = Qe(e),
                                s = this._hasMessageText() || t,
                                r = !(!e || !e.media) && (e.media.needsProcessing || a);
                            return n || (!s && !i) || r || a;
                        }),
                        (this._getMessageText = () => (this.state.value || "").trim()),
                        (this._hasMessageText = () => !!this._getMessageText()),
                        (this._closeQuickReplyPicker = () => {
                            this.setState({ isQuickReplyOpen: !1 });
                        }),
                        (this.handleAddMediaFiles = (e) => this._handleAddMediaFiles(e)),
                        (this._setTextInputRef = (e) => {
                            this._textInput = e;
                        });
                    const { prefillText: t, richTextInputContext: n } = e;
                    this.state = { isQuickReplyOpen: !0, value: t, editorState: n?.initEditorState?.(t) ?? null, isTypeaheadActive: !1, mediaButtonsCollapsed: !1, mediaButtonsCollapsible: !1 };
                }
                componentDidMount() {
                    (0, w.Z)().then(this._detectKeyboardOrMouse), (this._unlockReload = R.Z.acquire());
                }
                componentWillUnmount() {
                    this._unlockReload && this._unlockReload();
                }
                componentDidUpdate() {
                    this.props.quickReplyOptions && this.state.isQuickReplyOpen && this._textInput && this._textInput.blur();
                }
                UNSAFE_componentWillReceiveProps(e) {
                    const t = this.props.quickReplyOptions,
                        n = e.quickReplyOptions;
                    if ((t && !n ? this.setState({ isQuickReplyOpen: !1 }) : ((!t && n) || (t && n && t.id !== n.id)) && this.setState({ isQuickReplyOpen: !0 }), this.props.conversationId !== e.conversationId && this.clear(), this.props.editDm?.id !== e.editDm?.id && e.editDm?.message_data?.text)) {
                        const t = e.editDm?.message_data?.text;
                        this.setState({ value: t }), this.setState({ editorState: e.richTextInputContext?.initEditorState?.(t) ?? null });
                    }
                }
                render() {
                    const { conversationId: e, dtabBarInfo: t, editDm: n, isSending: a, isUploading: s, mediaUploadProgress: r, onCancelEdit: o, onCancelReply: l, perspective: c, placeholderText: d, quickReplyOptions: u, replyTo: p, style: m } = this.props,
                        { isQuickReplyOpen: h } = this.state,
                        g = d || Ze,
                        _ = (0, A.ZP)(),
                        y = _ && t && (t.dtabAll || t.ttsToken) && !t.hide;
                    return i.createElement(B, { "aria-label": g, onLayout: this._handleLayout, role: "complementary", sideNavPresent: _, style: [Ge.root, y && Ge.dtabOffset, m] }, p?.message_data ? i.createElement(ne, { messageData: p.message_data, onCancel: l }) : null, n?.message_data ? i.createElement(ne, { messageData: n.message_data, onCancel: o }) : null, i.createElement(S, { isSending: a, isUploading: s, progress: a ? Math.max(r, 0.02) : 0 }), this._renderComposer(), u && h ? i.createElement(ue, { closeQuickReplyPicker: this._closeQuickReplyPicker, conversationId: e, onOptionChoose: this._handleQROptionSelection, perspective: c, quickReplyOptions: u }) : null);
                }
                get _canEditGif() {
                    return !!this.props.attachment?.gifUrl || !!this.props.attachment?.media?.mediaFile?.isGif;
                }
                get _canEditImage() {
                    return !!this.props.attachment?.media?.mediaFile?.isImage;
                }
                get _canEditVideo() {
                    const { attachment: e } = this.props;
                    let t = e?.media?.mediaFile?.isVideo;
                    return t && (t = this.props.withVideoTrimmer), !!t;
                }
                clear() {
                    const { richTextInputContext: e } = this.props;
                    if (e) {
                        const { initEditorState: t } = e || {};
                        (0, s.flushSync)(() => {
                            this.setState({ value: "", editorState: t && t("") });
                        });
                    } else
                        (0, s.flushSync)(() => {
                            this.setState({ value: "" });
                        });
                }
                focus() {
                    this._textInput && this._textInput.focus();
                }
                value() {
                    return this.state.value;
                }
            }
            qe.defaultProps = { prefillText: "", withEmojiPicker: !0, withGifPicker: !0, withMediaPicker: !0, withVideoTrimmer: !1 };
            const Ge = o.default.create((e) => ({ root: { backgroundColor: e.colors.navigationBackground, borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, attachmentContainer: { maxHeight: "10rem", margin: e.spaces.space12 }, aspectContainer: { flexShrink: 1 }, cardPreviewContainer: { margin: e.spaces.space12 }, dtabOffset: { marginBottom: e.spaces.space40 }, gifAttribution: { flexDirection: "row", marginVertical: e.spaces.space4, marginHorizontal: 0 }, mediaPicker: { margin: 0 }, icon: { color: e.colors.primary, fontSize: "1.5em" }, composeBoxContainer: { flexGrow: 1, flexShrink: 1, alignSelf: "center" }, mediaPreviewContainer: { flexDirection: "row", height: "100%" }, mediaPreview: { borderRadius: e.borderRadii.xLarge, overflow: "hidden", minWidth: "10em" }, composer: { alignItems: "center", backgroundColor: e.colors.gray50, borderRadius: e.borderRadii.xLarge, flexDirection: "row", padding: e.spaces.space4, marginHorizontal: e.spaces.space12, marginVertical: e.spaces.space4, width: "calc(100% - 2 * ${theme.spaces.space12})" }, composerWithAttachment: { paddingStart: e.spaces.space12 }, actionButton: { marginStart: e.spaces.space4 }, uploadButtons: { flexDirection: "row", marginEnd: e.spaces.space4 } })),
                He = Re.forwardRef(qe);
        },
        342478: (e, t, n) => {
            n.d(t, { Z: () => d, f: () => c });
            var a = n(24949),
                i = n(166852);
            const s = (e) => {
                const { sender_id: t, by_user_id: n, participants: a = [] } = e;
                return (0, i.Z)(
                    a
                        .map(({ user_id: e }) => e)
                        .concat([t, n])
                        .filter(Boolean),
                );
            };
            var r = n(668214),
                o = n(919022);
            const l = (e, t) => t.entry,
                c = (e, t) => s(t).reduce((t, n) => ((t[n] = e[n]), t), {}),
                d = (0, r.Z)().propsFromState(() => ({ users: (0, a.P1)(o.ZP.selectAll, l, c) }));
        },
        513805: (e, t, n) => {
            n.d(t, { FC: () => h, Fn: () => p });
            var a = n(202784),
                i = n(731708),
                s = n(111677),
                r = n.n(s),
                o = n(275365);
            const l = r().c1d4ac84,
                c = r().abc7b032,
                d = r().i263b294,
                u = ({ children: e, conversationId: t }) => a.createElement(i.ZP, { link: `/messages/${t}/participants` }, e),
                p = (e, t) => (e >= 2 ? a.createElement(r().I18NFormatMessage, { $i18n: "e3534477" }, a.createElement(u, { conversationId: t }, r().i8d5e62b({ count: e }))) : a.createElement(r().I18NFormatMessage, { $i18n: "b6656851", count: e })),
                m = ({ entry: e, users: t }) =>
                    e.participants
                        ? a.createElement(
                              "span",
                              null,
                              e.participants.map(({ user_id: e }, n) => {
                                  const s = t[e];
                                  return s ? a.createElement("span", { key: n }, n > 0 ? ", " : null, a.createElement(i.ZP, null, s.name)) : null;
                              }),
                          )
                        : null,
                h = (e, t, n, s) => {
                    const u = n === e.by_user_id;
                    let p;
                    switch (t) {
                        case o.Cr.CONVERSATION_AVATAR_UPDATE:
                            return (p = e.by_user_id && s[e.by_user_id] && s[e.by_user_id].name), p ? (u ? l : ((e) => a.createElement(r().I18NFormatMessage, { $i18n: "bff29c95" }, a.createElement(i.ZP, null, e)))(p)) : c;
                        case o.Cr.CONVERSATION_NAME_UPDATE: {
                            const t = a.createElement(i.ZP, null, e.conversation_name);
                            return (p = e.by_user_id && s[e.by_user_id] && s[e.by_user_id].name), p ? (u ? ((e) => a.createElement(r().I18NFormatMessage, { $i18n: "b16e4d45" }, e))(t) : ((e, t) => a.createElement(r().I18NFormatMessage, { $i18n: "c5760699" }, a.createElement(i.ZP, null, e), t))(p, t)) : ((e) => a.createElement(r().I18NFormatMessage, { $i18n: "a72730a1" }, e))(t);
                        }
                        case o.Cr.JOIN_CONVERSATION:
                            return (p = e.sender_id && s[e.sender_id] && s[e.sender_id].name), p ? ((e) => a.createElement(r().I18NFormatMessage, { $i18n: "fa95b019" }, a.createElement(i.ZP, null, e)))(p) : d;
                        case o.Cr.PARTICIPANTS_LEAVE:
                            return ((e) => a.createElement(r().I18NFormatMessage, { $i18n: "fc10875f" }, e))(a.createElement(m, { entry: e, users: s }));
                        case o.Cr.PARTICIPANTS_JOIN:
                            p = e.sender_id && s[e.sender_id] && s[e.sender_id].name;
                            return ((e, t) => (e ? a.createElement(r().I18NFormatMessage, { $i18n: "a4bc88c3" }, a.createElement(i.ZP, null, e), t) : a.createElement(r().I18NFormatMessage, { $i18n: "bfdff0c3" }, t)))(p, a.createElement(m, { entry: e, users: s }));
                        default:
                            return "";
                    }
                };
        },
        792098: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a,
                i,
                s,
                r,
                o,
                l,
                c,
                d = {
                    fragment: {
                        argumentDefinitions: [(a = { defaultValue: null, kind: "LocalArgument", name: "count" }), (i = { defaultValue: null, kind: "LocalArgument", name: "cursor" })],
                        kind: "Fragment",
                        metadata: null,
                        name: "useFetchDMConvoLabelsQuery",
                        selections: [
                            {
                                kind: "RequiredField",
                                field: {
                                    alias: "viewer",
                                    args: (s = [{ kind: "Literal", name: "s", value: "84b0" }]),
                                    concreteType: "Viewer",
                                    kind: "LinkedField",
                                    name: "viewer_v2",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "RequiredField",
                                            field: {
                                                alias: null,
                                                args: null,
                                                concreteType: "UserResults",
                                                kind: "LinkedField",
                                                name: "user_results",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        kind: "RequiredField",
                                                        field: {
                                                            alias: null,
                                                            args: null,
                                                            concreteType: null,
                                                            kind: "LinkedField",
                                                            name: "result",
                                                            plural: !1,
                                                            selections: [
                                                                (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                                {
                                                                    kind: "InlineFragment",
                                                                    selections: [
                                                                        {
                                                                            alias: "labeled_conversation_collection_slice",
                                                                            args: null,
                                                                            concreteType: "LabeledConversationCollectionsSlice",
                                                                            kind: "LinkedField",
                                                                            name: "__dmLabelsList_slice",
                                                                            plural: !1,
                                                                            selections: (l = [
                                                                                { alias: null, args: null, concreteType: "LabeledConversationCollection", kind: "LinkedField", name: "items", plural: !0, selections: [(o = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] }], storageKey: null },
                                                                                {
                                                                                    alias: null,
                                                                                    args: null,
                                                                                    concreteType: "SliceInfo",
                                                                                    kind: "LinkedField",
                                                                                    name: "slice_info",
                                                                                    plural: !1,
                                                                                    selections: [
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "previous_cursor", storageKey: null },
                                                                                        { alias: null, args: null, kind: "ScalarField", name: "next_cursor", storageKey: null },
                                                                                    ],
                                                                                    storageKey: null,
                                                                                },
                                                                            ]),
                                                                            storageKey: null,
                                                                        },
                                                                    ],
                                                                    type: "User",
                                                                    abstractKey: null,
                                                                },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        action: "THROW",
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            action: "THROW",
                                        },
                                    ],
                                    storageKey: 'viewer_v2(s:"84b0")',
                                },
                                action: "THROW",
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [i, a],
                        kind: "Operation",
                        name: "useFetchDMConvoLabelsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: s,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
                                        plural: !1,
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: null,
                                                kind: "LinkedField",
                                                name: "result",
                                                plural: !1,
                                                selections: [
                                                    r,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: (c = [
                                                                    { kind: "Variable", name: "count", variableName: "count" },
                                                                    { kind: "Variable", name: "cursor", variableName: "cursor" },
                                                                ]),
                                                                concreteType: "LabeledConversationCollectionsSlice",
                                                                kind: "LinkedField",
                                                                name: "labeled_conversation_collection_slice",
                                                                plural: !1,
                                                                selections: l,
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: c, filters: null, handle: "slice", key: "dmLabelsList", kind: "LinkedHandle", name: "labeled_conversation_collection_slice" },
                                                            o,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            o,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"84b0")',
                            },
                        ],
                    },
                    params: { id: "vYGGmXcZ1beDpRJk6hSQhQ", metadata: { features: ["responsive_web_dm_label_enabled"], sliceInfoPath: ["viewer", "user_results", "result", "labeled_conversation_collection_slice", "slice_info"] }, name: "useFetchDMConvoLabelsQuery", operationKind: "query", text: null },
                };
            d.hash = "ce5b0d45c71fe3474ee8b2664cee0ac1";
            const u = d;
            n(585488);
            var p = n(127218);
            const m = u,
                h = () => {
                    const { data: e, fetchNext: t, refetch: n } = (0, p.C)(m, { count: 20 });
                    return [e, t, n];
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.DirectMessages~bundle.DMRichTextCompose.07d046da.js.map
