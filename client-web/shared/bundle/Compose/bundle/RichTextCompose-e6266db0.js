"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.Compose~bundle.RichTextCompose-e6266db0"],
    {
        621416: (e, t, n) => {
            n.d(t, { m: () => a });
            n(890103);
            var o = n(202784),
                r = n(175698);
            function a(e) {
                const t = (0, r.A)();
                return [
                    !!t && !t.flags[e],
                    o.useCallback(() => {
                        t?.addFlag(e);
                    }, [t, e]),
                ];
            }
        },
        670094: (e, t, n) => {
            n.d(t, { d: () => l });
            var o = n(332920),
                r = n.n(o),
                a = n(88656),
                i = n(601576),
                s = n(163889);
            const c = r().a5d4fda0,
                l = (e = c, t = !0) => ({
                    customErrorHandler: (n) => {
                        const { context: o } = n;
                        return (!n) instanceof a.Z && (n.message = `Strato error occurred in ${o.id}: ${o.action}`), (0, s.ZP)(n, { extra: { context: o, isStrato: !0 } }), t ? (0, i.mf)({ text: e }) : [];
                    },
                });
        },
        450562: (e, t, n) => {
            n.d(t, { V: () => a, Z: () => i });
            var o = n(189676),
                r = n(545521);
            const a = (e) => `communitiesMembershipsSlice-${e}`,
                i = (e) => (0, r.Z)({ contextSuffix: "COMMUNITIES_MEMBERSHIPS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(o.Z).fetchCommunitiesMembershipsSlice, getEndpointParams: (e) => e, sliceKey: a(e) });
        },
        465814: (e, t, n) => {
            n.d(t, { Z: () => i });
            var o = n(502909),
                r = n(600823);
            const a = { ...(0, o.ZP)({ namespace: "legacyAndUnifiedCards" }) },
                i = r.Z.register(a);
        },
        651723: (e, t, n) => {
            n.d(t, { Z: () => E });
            var o = n(202784),
                r = n(325686),
                a = n(67369),
                i = n(650028),
                s = n(872405),
                c = n(731708),
                l = n(392237),
                u = n(516951),
                d = n(808692),
                m = n(47743),
                p = n(163889),
                g = n(332920),
                h = n.n(g);
            const f = o.createElement(c.ZP, { weight: "bold" }),
                w = o.createElement(c.ZP, { color: "link", dir: "ltr" }),
                y = (e) => `@${e}`,
                b = (e) => e?.screen_name || "",
                T = ({ communityName: e, excludedRecipients: t, inReplyToStatus: n, viewerUser: r }) => {
                    const a = {
                            replyToOne: ({ userName: e }) => o.createElement(h().I18NFormatMessage, { $i18n: "e34022a7" }, o.cloneElement(w, null, h().b50e199a({ userName: y(e) }))),
                            replyToTwo: ({ userOneName: e, userTwoName: t }) => o.createElement(h().I18NFormatMessage, { $i18n: "bfd9c99b" }, o.cloneElement(w, null, h().c3033e8a({ replyUserName: y(e), otherUserName: y(t) }))),
                            replyToThree: ({ userOneName: e, userThreeName: t, userTwoName: n }) => o.createElement(h().I18NFormatMessage, { $i18n: "g7a1000f" }, o.cloneElement(w, null, h().e50dae2a({ userOneName: y(e), userTwoName: y(n), userThreeName: y(t) }))),
                            replyToMany: ({ othersCount: e, userOneName: t, userTwoName: n }) => o.createElement(h().I18NFormatMessage, { $i18n: "i558c201" }, o.cloneElement(w, null, h().h758cd23({ userOneName: y(t), userTwoName: y(n), othersCount: e }))),
                            communityReplyToOne: ({ communityName: e, userName: t }) => o.createElement(h().I18NFormatMessage, { $i18n: "j935bcdf", communityName: e }, o.cloneElement(w, null, h().fba61ad6({ userName: y(t) }))),
                            communityReplyToTwo: ({ communityName: e, userOneName: t, userTwoName: n }) => o.createElement(h().I18NFormatMessage, { $i18n: "i7bd9c8f", communityName: e }, o.cloneElement(w, null, h().ce87c872({ replyUserName: y(t), otherUserName: y(n) }))),
                            communityReplyToThree: ({ communityName: e, userOneName: t, userThreeName: n, userTwoName: r }) => o.createElement(h().I18NFormatMessage, { $i18n: "cfa0049d", communityName: e }, o.cloneElement(w, null, h().b45fa506({ userOneName: y(t), userTwoName: y(r), userThreeName: y(n) }))),
                            communityReplyToMany: ({ communityName: e, othersCount: t, userOneName: n, userTwoName: r }) => o.createElement(h().I18NFormatMessage, { $i18n: "jfc8e4b5", communityName: e }, o.cloneElement(w, null, h().b8168f25({ userOneName: y(n), userTwoName: y(r), othersCount: t }))),
                            exclusiveReplyToOne: ({ userName: e }) => o.createElement(h().I18NFormatMessage, { $i18n: "fe06c9f5" }, o.cloneElement(w, null, h().ab67a7ac({ userName: y(e) })), o.cloneElement(f, null, h().g571ef41)),
                            exclusiveReplyToTwo: ({ userOneName: e, userTwoName: t }) => o.createElement(h().I18NFormatMessage, { $i18n: "f7e12e15" }, o.cloneElement(w, null, h().d48d6476({ replyUserName: y(e), otherUserName: y(t) })), o.cloneElement(f, null, h().i9451241)),
                            exclusiveReplyToThree: ({ userOneName: e, userThreeName: t, userTwoName: n }) => o.createElement(h().I18NFormatMessage, { $i18n: "eade6035" }, o.cloneElement(w, null, h().hdf48104({ userOneName: y(e), userTwoName: y(n), userThreeName: y(t) })), o.cloneElement(f, null, h().dcbb6a0b)),
                            exclusiveReplyToMany: ({ othersCount: e, userOneName: t, userTwoName: n }) => o.createElement(h().I18NFormatMessage, { $i18n: "da018b37" }, o.cloneElement(w, null, h().ba74e38b({ userOneName: y(t), userTwoName: y(n), othersCount: e })), o.cloneElement(f, null, h().c65916af)),
                            trustedFriendsReplyToOne({ isProtected: e, trustedFriendsTweetOwner: t, userName: n }) {
                                const r = { recipientsText: w, boldAppText: f },
                                    a = { userName: y(n), trustedFriendsTweetOwner: y(t) };
                                return e ? o.createElement(h().I18NFormatMessage, { $i18n: "e119d033", trustedFriendsTweetOwner: a.trustedFriendsTweetOwner }, o.cloneElement(r.recipientsText, null, h().g5c5ebb8({ userName: a.userName }))) : o.createElement(h().I18NFormatMessage, { $i18n: "d0c02e7b", trustedFriendsTweetOwner: a.trustedFriendsTweetOwner }, o.cloneElement(r.recipientsText, null, h().b86ff336({ userName: a.userName })));
                            },
                            trustedFriendsReplyToTwo({ isProtected: e, trustedFriendsTweetOwner: t, userOneName: n, userTwoName: r }) {
                                const a = { recipientsText: w, boldAppText: f },
                                    i = { userOneName: y(n), userTwoName: y(r), trustedFriendsTweetOwner: y(t) };
                                return e ? o.createElement(h().I18NFormatMessage, { $i18n: "bce67b49" }, o.cloneElement(a.recipientsText, null, h().e0af5609({ userOneName: i.userOneName, userTwoName: i.userTwoName })), o.cloneElement(a.recipientsText, null, h().ae834d19({ trustedFriendsTweetOwner: i.trustedFriendsTweetOwner }))) : o.createElement(h().I18NFormatMessage, { $i18n: "e460ccf1" }, o.cloneElement(a.recipientsText, null, h().g3d6f043({ userOneName: i.userOneName, userTwoName: i.userTwoName })), o.cloneElement(a.recipientsText, null, h().ade845a5({ trustedFriendsTweetOwner: i.trustedFriendsTweetOwner })));
                            },
                            trustedFriendsReplyToThree({ isProtected: e, trustedFriendsTweetOwner: t, userOneName: n, userThreeName: r, userTwoName: a }) {
                                const i = { recipientsText: w, boldAppText: f },
                                    s = { userOneName: y(n), userTwoName: y(a), userThreeName: y(r), trustedFriendsTweetOwner: y(t) };
                                return e ? o.createElement(h().I18NFormatMessage, { $i18n: "i421898b" }, o.cloneElement(i.recipientsText, null, h().ef5386dc({ userOneName: s.userOneName, userTwoName: s.userTwoName, userThreeName: s.userThreeName })), o.cloneElement(i.recipientsText, null, h().acd17e4b({ trustedFriendsTweetOwner: s.trustedFriendsTweetOwner }))) : o.createElement(h().I18NFormatMessage, { $i18n: "c70a17eb" }, o.cloneElement(i.recipientsText, null, h().g1ee3d90({ userOneName: s.userOneName, userTwoName: s.userTwoName, userThreeName: s.userThreeName })), o.cloneElement(i.recipientsText, null, h().f6da070f({ trustedFriendsTweetOwner: s.trustedFriendsTweetOwner })));
                            },
                            trustedFriendsReplyToMany({ isProtected: e, othersCount: t, trustedFriendsTweetOwner: n, userOneName: r, userTwoName: a }) {
                                const i = { recipientsText: w, boldAppText: f },
                                    s = { userOneName: y(r), userTwoName: y(a), trustedFriendsTweetOwner: y(n), othersCount: t };
                                return e ? o.createElement(h().I18NFormatMessage, { $i18n: "b0d6bca7" }, o.cloneElement(i.recipientsText, null, h().a035ba65({ userOneName: s.userOneName, userTwoName: s.userTwoName, othersCount: s.othersCount })), o.cloneElement(i.recipientsText, null, h().e4c52c45({ trustedFriendsTweetOwner: s.trustedFriendsTweetOwner }))) : o.createElement(h().I18NFormatMessage, { $i18n: "aacf46d1" }, o.cloneElement(i.recipientsText, null, h().baf2c639({ userOneName: s.userOneName, userTwoName: s.userTwoName, othersCount: s.othersCount })), o.cloneElement(i.recipientsText, null, h().j8e134e5({ trustedFriendsTweetOwner: s.trustedFriendsTweetOwner })));
                            },
                        },
                        i = r?.id_str,
                        s = m.YT({ inReplyToStatus: n, viewerUserId: i }).filter(({ id_str: e }) => t.indexOf(e) < 0),
                        { exclusivity_info: c, trusted_friends_info: l, user: u } = n.retweeted_status || n,
                        [d, g] = s.filter(({ id_str: e }) => e !== u.id_str),
                        [T, v, C] = [u, d, g].map(b),
                        x = s.length - 2,
                        E = n?.trusted_friends_info?.screen_name,
                        _ = r?.protected;
                    switch (s.length) {
                        case 0:
                            return (0, p.ZP)("Compose reply context should not have 0 recipients"), null;
                        case 1:
                            return e ? a.communityReplyToOne({ communityName: e, userName: T }) : c ? a.exclusiveReplyToOne({ userName: T }) : l && E ? a.trustedFriendsReplyToOne({ userName: T, trustedFriendsTweetOwner: E, isProtected: _ }) : a.replyToOne({ userName: T });
                        case 2:
                            return e ? a.communityReplyToTwo({ communityName: e, userOneName: T, userTwoName: v }) : c ? a.exclusiveReplyToTwo({ userOneName: T, userTwoName: v }) : l && E ? a.trustedFriendsReplyToTwo({ userOneName: T, userTwoName: v, trustedFriendsTweetOwner: E, isProtected: _ }) : a.replyToTwo({ userOneName: T, userTwoName: v });
                        case 3:
                            return e ? a.communityReplyToThree({ communityName: e, userOneName: T, userTwoName: v, userThreeName: C }) : c ? a.exclusiveReplyToThree({ userOneName: T, userTwoName: v, userThreeName: C }) : l && E ? a.trustedFriendsReplyToThree({ userOneName: T, userTwoName: v, userThreeName: C, trustedFriendsTweetOwner: E, isProtected: _ }) : a.replyToThree({ userOneName: T, userTwoName: v, userThreeName: C });
                        default:
                            return e ? a.communityReplyToMany({ communityName: e, userOneName: T, userTwoName: v, othersCount: x }) : c ? a.exclusiveReplyToMany({ userOneName: T, userTwoName: v, othersCount: x }) : l && E ? a.trustedFriendsReplyToMany({ userOneName: T, userTwoName: v, othersCount: x, trustedFriendsTweetOwner: E, isProtected: _ }) : a.replyToMany({ userOneName: T, userTwoName: v, othersCount: x });
                    }
                },
                v = o.memo(T);
            function C(e) {
                e?.preventDefault();
            }
            const x = l.default.create((e) => ({ replyUsersContainer: { flexDirection: "row", minHeight: e.spaces.space12, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: 0 }, grid: { flexGrow: 1, flexShrink: 1 }, repliesTextContainer: { flexGrow: 1 }, repliesMessage: { flexGrow: 1, paddingBottom: e.spaces.space16, paddingTop: e.spaces.space4 }, conversationLineContainer: { alignItems: "center" }, conversationLineContainerHidden: { display: "none" }, conversationLine: { backgroundColor: e.colors.gray200, flexGrow: 1, marginBottom: e.spaces.space4, minHeight: 0, width: e.componentDimensions.conversationLineWidth } })),
                E = ({ communityName: e, excludedRecipients: t, inReplyToStatus: n, onPress: l, shouldDisplayRepliesText: m, showParentTweet: p = !0, viewerUser: g }) => {
                    const h = (0, a.$W)();
                    return o.createElement(r.Z, null, p ? o.createElement(d.ZP, { conversationPosition: { isStart: !0 }, linkableQuotedTweet: !1, linkify: !1, onAnalyticsClick: u.Z, onAvatarClick: C, onEngagementsClick: u.Z, onEntityClick: C, onMediaClick: C, onReplyContextClick: C, replyContext: i.ZP.ReplyContextTypes.None, tweet: n, withAvatarLink: !1, withCardLinks: !0, withInlineMedia: !1, withQuotedTweetLinks: !0, withSocialContext: !1, withTimestampLink: !1, withUserHoverCard: !1 }) : null, o.createElement(r.Z, { style: x.replyUsersContainer }, o.createElement(s.Z, { avatarCell: p ? o.createElement(r.Z, { style: x.conversationLine }) : null, avatarCellStyle: h ? x.conversationLineContainerHidden : x.conversationLineContainer, cellStyle: x.repliesTextContainer, style: x.grid }, m ? o.createElement(c.ZP, { color: "gray700", onPress: l, role: "button", style: p && x.repliesMessage }, o.createElement(v, { communityName: e, excludedRecipients: t, inReplyToStatus: n, viewerUser: g })) : null)));
                };
        },
        698469: (e, t, n) => {
            n.d(t, { Z: () => z });
            var o = n(202784),
                r = n(325686),
                a = n(154003),
                i = n(242454),
                s = n(392237),
                c = n(332920),
                l = n.n(c),
                u = n(379327),
                d = n(725516),
                m = n(855488),
                p = n(733357);
            class g extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._setInputRef = (e) => {
                            this._inputRef = e;
                        });
                }
                render() {
                    const { autoFocus: e, defaultValue: t, editable: n, label: a, name: i, onBlur: s, onChange: c } = this.props;
                    return o.createElement(r.Z, { style: h.root }, o.createElement(m.Z, { autoCapitalize: "none", autoCorrect: !1, autoFocus: e, defaultValue: t, editable: n, label: a, maxLength: 25, name: i, onBlur: s, onChange: c, ref: this._setInputRef, spellCheck: "false", style: h.formTextInput }));
                }
                get value() {
                    return this._inputRef && this._inputRef.getValue();
                }
                get isValid() {
                    const { optional: e } = this.props;
                    return (!this.value && e) || (this.value && !(0, p.Z)(this.value) && this._inputRef && this._inputRef.isValidLength());
                }
            }
            g.defaultProps = { autoFocus: !1, editable: !0, optional: !1 };
            const h = s.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 1 }, action: { width: e.spaces.space40 }, addButton: { flexGrow: 1, minHeight: "100%", padding: 0 }, formTextInput: { flexGrow: 1, flexShrink: 1, marginVertical: 0, paddingTop: 0, paddingHorizontal: 0, paddingBottom: e.spaces.space12 } })),
                f = g;
            var w = n(731708);
            const y = "addPollChoice",
                b = "selectPollDays",
                T = "selectPollHours",
                v = "selectPollMinutes",
                C = "removePollButton";
            var x = n(466818),
                E = n(822240);
            class _ extends o.PureComponent {
                render() {
                    const { editable: e, label: t, last: n, max: r, min: a, onChange: i, testID: s, value: c } = this.props,
                        u = !e || a === r,
                        d = c.toString(),
                        m = (0, E.Z)(a, r + 1).map((e) => ({ label: `${l().ia24dc8d(e)}`, value: `${e}` }));
                    return o.createElement(x.ZP, { disabled: u, label: t, onChange: i, options: m, style: [N.selector, !n && N.rightMargin], testID: s, value: d });
                }
            }
            _.defaultProps = { last: !1 };
            const N = s.default.create((e) => ({ rightMargin: { marginEnd: e.spaces.space20 }, selector: { flexGrow: 1 } })),
                S = _,
                k = l().caf8edc4,
                P = l().g93586be,
                O = l().d073b644,
                Z = l().a2f0728e;
            class F extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleDaysChange = (e) => {
                            const { onChange: t } = this.props,
                                n = parseInt(e, 10);
                            this.setState((e) => {
                                const { hours: o, minutes: r } = e.duration,
                                    a = 0 === n && 0 === o && 0 === r ? 1 : 7 === n ? 0 : o,
                                    i = { days: n, hours: a, minutes: 7 === n ? 0 : 0 === n && 0 === a && r < 5 ? 5 : r };
                                return t && t(i), { duration: i };
                            });
                        }),
                        (this._handleHoursChange = (e) => {
                            const { onChange: t } = this.props,
                                n = parseInt(e, 10);
                            this.setState((e) => {
                                const { days: o, minutes: r } = e.duration,
                                    a = { days: o, hours: n, minutes: 0 === o && 0 === n && r < 5 ? 5 : r };
                                return t && t(a), { duration: a };
                            });
                        }),
                        (this._handleMinutesChange = (e) => {
                            const { onChange: t } = this.props,
                                n = parseInt(e, 10);
                            this.setState((e) => {
                                const { days: o, hours: r } = e.duration,
                                    a = { days: o, hours: r, minutes: n };
                                return t && t(a), { duration: a };
                            });
                        }),
                        (this.state = { duration: e.initialDuration });
                }
                render() {
                    const { isActive: e, style: t } = this.props;
                    return o.createElement(r.Z, { style: t }, o.createElement(w.ZP, { style: B.durationLabel }, e ? k : ""), this._renderPicker());
                }
                _renderPicker() {
                    const { editable: e, isActive: t } = this.props,
                        {
                            duration: { days: n, hours: a, minutes: i },
                        } = this.state;
                    return o.createElement(r.Z, { style: B.durationControls }, o.createElement(S, { editable: e && t, label: P, max: 7, min: 0, onChange: this._handleDaysChange, testID: b, value: n }), o.createElement(S, { editable: e && t, label: O, max: 7 === n ? 0 : 23, min: 0, onChange: this._handleHoursChange, testID: T, value: a }), o.createElement(S, { editable: e && t, label: Z, last: !0, max: 7 === n ? 0 : 59, min: 0 === n && 0 === a ? 5 : 0, onChange: this._handleMinutesChange, testID: v, value: i }));
                }
                get duration() {
                    return this.state.duration;
                }
            }
            F.defaultProps = { editable: !0, initialDuration: { days: 1, hours: 0, minutes: 0 } };
            const B = s.default.create((e) => ({ durationControls: { flexDirection: "row", justifyContent: "space-between" }, durationLabel: { marginBottom: e.spaces.space4 } })),
                I = F,
                D = l().g589c2e2,
                R = l().a1e6c3a2,
                M = l().a739e006,
                L = l().d89a5b92,
                A = l().c2a8118e,
                j = l().a8ede1de,
                $ = l().af40a8e0;
            class K extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._setChoice1Ref = (e) => {
                            this._choice1 = e;
                        }),
                        (this._setChoice2Ref = (e) => {
                            this._choice2 = e;
                        }),
                        (this._setChoice3Ref = (e) => {
                            this._choice3 = e;
                        }),
                        (this._setChoice4Ref = (e) => {
                            this._choice4 = e;
                        }),
                        (this._setDurationPickerRef = (e) => {
                            this._durationPicker = e;
                        }),
                        (this._handleValidation = () => {
                            const { onChange: e, onInvalid: t, onValid: n } = this.props,
                                o = this.choices,
                                { _choice1: r, _choice2: a, _choice3: i, _choice4: s } = this,
                                c = [r, a, i, s].filter(Boolean).every((e) => e.isValid);
                            o && o.length >= 2 && c ? n() : t(), e && e({ choices: o, duration: this.duration });
                        }),
                        (this._handleAdd = () => {
                            const { analytics: e } = this.props;
                            e.scribe({ element: "add_poll_option", action: "click" }), this.setState(({ choiceCount: e }) => ({ autoFocus: !0, choiceCount: e + 1 }));
                        }),
                        (this._handleDurationChange = (e) => {
                            const { onChange: t } = this.props;
                            t && t({ choices: this.choices, duration: e });
                        }),
                        (this._handleBlur = () => {
                            const { onBlur: e } = this.props;
                            e?.();
                        });
                    const { initialChoices: n } = e,
                        o = void 0 === n,
                        r = (n || []).length,
                        a = r > 2 ? r : 2;
                    this.state = { autoFocus: o, choiceCount: a };
                }
                _renderChoices() {
                    const { editable: e, initialChoices: t = [], isActive: n } = this.props,
                        { autoFocus: i, choiceCount: s } = this.state,
                        c = o.createElement(r.Z, { style: q.rightColumn }, s < 4 ? o.createElement(a.ZP, { "aria-label": j, disabled: !(e && n), hoverLabel: { label: $ }, icon: o.createElement(u.default, null), onPress: this._handleAdd, size: "medium", style: q.addButton, testID: y, type: "brandText" }) : null);
                    return o.createElement(r.Z, { style: q.choicesAndAddButton }, o.createElement(r.Z, { style: q.choices }, o.createElement(f, { autoFocus: i, defaultValue: t[0], editable: e && n, label: D, name: "Choice1", onBlur: this._handleBlur, onChange: this._handleValidation, ref: this._setChoice1Ref }), o.createElement(f, { defaultValue: t[1], editable: e && n, label: R, name: "Choice2", onBlur: this._handleBlur, onChange: this._handleValidation, ref: this._setChoice2Ref }), s >= 3 ? o.createElement(f, { autoFocus: i, defaultValue: t[2], editable: e && n, label: M, name: "Choice3", onBlur: this._handleBlur, onChange: this._handleValidation, optional: !0, ref: this._setChoice3Ref }) : null, 4 === s ? o.createElement(f, { autoFocus: i, defaultValue: t[3], editable: e && n, label: L, name: "Choice4", onBlur: this._handleBlur, onChange: this._handleValidation, optional: !0, ref: this._setChoice4Ref }) : null), c);
                }
                render() {
                    const { editable: e, initialDuration: t, isActive: n, onRemove: a } = this.props;
                    return o.createElement(r.Z, { style: q.root }, this._renderChoices(), o.createElement(I, { editable: e, initialDuration: t, isActive: n, onChange: this._handleDurationChange, ref: this._setDurationPickerRef, style: q.durationPicker }), o.createElement(r.Z, { style: q.removePollButton }, o.createElement(i.Z, { color: "red500", label: A, onPress: a, testID: C })));
                }
                get choices() {
                    const { _choice1: e, _choice2: t, _choice3: n, _choice4: o } = this;
                    return [e && e.value, t && t.value, n && n.value, o && o.value].filter(Boolean);
                }
                get duration() {
                    return this._durationPicker ? this._durationPicker.duration : void 0;
                }
            }
            const q = s.default.create((e) => ({ root: { backgroundColor: e.colors.transparent, borderColor: e.colors.nestedBorderColor, borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.small, flexDirection: "column", overflow: "hidden", paddingTop: e.spaces.space12 }, choicesAndAddButton: { paddingHorizontal: e.spaces.space12, flexDirection: "row" }, choices: { flexGrow: 1, flexShrink: 1 }, removePollButton: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge }, rightColumn: { flexDirection: "column-reverse" }, addButton: { marginBottom: e.spaces.space24, marginStart: e.spaces.space4 }, durationPicker: { borderTopColor: e.colors.nestedBorderColor, borderTopWidth: e.borderWidths.small, borderBottomColor: e.colors.nestedBorderColor, borderBottomWidth: e.borderWidths.small, padding: e.spaces.space12 } })),
                z = (0, d.Z)(K);
        },
        934878: (e, t, n) => {
            n.d(t, { O: () => s, d: () => i });
            n(202784);
            var o = n(187669),
                r = n(774717),
                a = n(441408);
            const i = (e) => {
                    (0, o.q)(() => {
                        const t = r.P_(),
                            n = () => {
                                t.resume();
                            },
                            o = () => {
                                t.pause();
                            };
                        return (
                            window.addEventListener("focus", n),
                            window.addEventListener("blur", o),
                            () => {
                                r.IM(`${a.uB}:dwell:${e}`, t.end()), window.removeEventListener("focus", n), window.removeEventListener("blur", o);
                            }
                        );
                    });
                },
                s = ({ screenType: e }) => (i(e), null);
        },
        953884: (e, t, n) => {
            n.d(t, { $_: () => l, FR: () => c, ZP: () => d });
            var o = n(202784),
                r = n(325686),
                a = n(67369),
                i = n(537392),
                s = n(392237);
            const c = (e) =>
                    o.createElement(i.ZP, null, ({ windowWidth: t }) => {
                        const n = t < s.default.theme.breakpoints.small;
                        return e(n ? "space32" : "space80");
                    }),
                l = (e) =>
                    o.createElement(i.ZP, null, ({ windowWidth: t }) => {
                        const n = t < s.default.theme.breakpoints.small;
                        return e(n ? u.mobileContainer : u.webContainer);
                    }),
                u = s.default.create((e) => ({ webContainer: { paddingHorizontal: e.spaces.space80 }, mobileContainer: { paddingHorizontal: e.spaces.space32 } })),
                d = ({ children: e }) => {
                    const t = (0, a.yu)() ? u.mobileContainer : u.webContainer;
                    return o.createElement(r.Z, { style: t }, e);
                };
        },
        963379: (e, t, n) => {
            n.d(t, { Z: () => O });
            var o = n(202784),
                r = n(953884),
                a = n(363895),
                i = n(668214),
                s = n(852657);
            const c = (e) => e.quickPromote.targeting.contextualKeywords,
                l = (0, i.Z)()
                    .propsFromState(() => ({ contextualKeywords: c }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: s.ch }))
                    .withAnalytics(a.EP),
                u = (0, i.Z)()
                    .propsFromState(() => ({ contextualKeywords: c }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: s.ch }))
                    .withAnalytics(a.EP);
            var d = n(325686),
                m = n(370006),
                p = n(786998),
                g = n(392237),
                h = n(457637);
            function f({ children: e, onBack: t }) {
                const n = o.useMemo(() => o.createElement(m.Z, { onClick: t }), [t]);
                return o.createElement(d.Z, { style: w.qpContainer, testID: h.Z.targetingKeywordsScreen }, o.createElement(p.Z, { leftControl: n, style: w.appBar, title: "Select some keywords" }), e);
            }
            const w = g.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, noSpacing: { paddingHorizontal: "0" } }));
            var y = n(855488),
                b = n(332920),
                T = n.n(b),
                v = n(187669),
                C = n(934878),
                x = n(599190),
                E = n(973014);
            function _({ contextualKeywords: e, index: t, keyword: n, setTargetedContextualKeywords: r }) {
                const a = o.useCallback(() => r(e.filter((e, n) => n !== t)), [e, t, r]),
                    i = o.useMemo(() => ({ disabled: !1, mode: x.D.Remove, onSecondaryClick: a }), [a]);
                return o.createElement(E.Z, { secondaryAction: i, style: N.withMarginEnd, text: n });
            }
            const N = g.default.create((e) => ({ withMarginEnd: { marginEnd: e.spaces.space8, marginBlockEnd: e.spaces.space8 } })),
                S = T().fe26420a;
            function k({ analytics: e, contextualKeywords: t, recommendedKeywords: n = [], setTargetedContextualKeywords: r }) {
                const [i, s] = o.useState(""),
                    c = o.useCallback((e) => {
                        const t = e.target.value;
                        s(t);
                    }, []),
                    l = o.useCallback(
                        (e) => {
                            switch (e.key) {
                                case ",":
                                case "Enter": {
                                    e.preventDefault();
                                    const n = i.trim(),
                                        o = t.some((e) => e.toLowerCase() === n.toLowerCase());
                                    "" === n || o || (r(t.concat(n)), s(""));
                                    break;
                                }
                            }
                        },
                        [t, i, r],
                    );
                return (
                    (0, v.q)(() => () => {
                        (0, a.hq)(e)(a.Ur.setTargetingKeywords(t.join(",")));
                    }),
                    (0, v.q)(() => {
                        r(n);
                    }),
                    (0, C.d)(a.MN.TargetingKeywords),
                    o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(d.Z, { style: P.selectionGroupContainer }, o.createElement(y.Z, { editable: t.length < 200, label: S, name: "keywords", onChange: c, onKeyDown: l, style: P.noSpacing, testID: h.Z.targetingKeywordsInput, value: i })),
                        o.createElement(
                            d.Z,
                            { style: P.row },
                            t.map((e, n) => o.createElement(_, { contextualKeywords: t, index: n, key: n, keyword: e, setTargetedContextualKeywords: r })),
                        ),
                    )
                );
            }
            u(k);
            const P = g.default.create((e) => ({ selectionGroupContainer: { paddingTop: e.spaces.space16 }, row: { alignContent: "flex-start", flexDirection: "row", flexWrap: "wrap", minHeight: "150px", overflowX: "auto" }, noSpacing: { paddingHorizontal: "0" } }));
            const O = l(function (e) {
                const { analytics: t, contextualKeywords: n, history: i, location: s, match: c, setTargetedContextualKeywords: l } = e,
                    u = o.useCallback(() => {
                        const { quickPromotePlatform: e, quickPromoteScreenName: t, screenName: n, statusId: o } = c.params;
                        (0, a.Mi)(i, s)(n, o, e, t);
                    }, [i, s, c.params]),
                    d = { analytics: t, contextualKeywords: n, setTargetedContextualKeywords: l };
                return o.createElement(f, { onBack: u }, o.createElement(r.ZP, null, o.createElement(k, d)));
            });
        },
        457637: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = { introButton: "introButton", nextButton: "nextButton", objectiveScreen: "objectiveScreen", targetingScreen: "targetingScreen", getObjective: (e) => `objectiveScreenObjective${e}`, targetingLocationScreen: "targetingLocationScreen", targetingGenderScreen: "targetingGenderScreen", targetingKeywordsScreen: "targetingKeywordsScreen", budgetSelectScreen: "budgetSelectScreen", reviewScreen: "reviewScreen", reviewButton: "reviewButton", reviewObjectiveDescription: "reviewObjectiveDescription", reviewTargetingDescription: "reviewTargetingDescription", reviewBudgetAndDurationDescription: "reviewBudgetAndDurationDescription", reviewPaymentPivot: "reviewPaymentPivot", reviewPromotionTotalDescription: "reviewPromotionTotalDescription", targetingLocationPivot: "targetingLocationPivot", targetingGenderPivot: "targetingGenderPivot", targetingKeywordsPivot: "targetingKeywordsPivot", backButton: "backButton", targetingLocationSearch: "targetingLocationSearch", targetingLocationItem: "targetingLocationItem", getTargetingGender: (e) => `targetingGenderScreenGender${e}`, targetingKeywordsInput: "targetingKeywordsInput", paymentMethodSelect: "paymentMethodSelect", dropoffScreen: "dropoffScreen" };
        },
        203421: (e, t, n) => {
            n.d(t, { O: () => s, d: () => i });
            n(202784);
            var o = n(187669),
                r = n(774717),
                a = n(441408);
            const i = (e) => {
                    (0, o.q)(() => {
                        const t = r.P_(),
                            n = () => {
                                t.resume();
                            },
                            o = () => {
                                t.pause();
                            };
                        return (
                            window.addEventListener("focus", n),
                            window.addEventListener("blur", o),
                            () => {
                                r.IM(`${a.uB}:dwell:${e}`, t.end()), window.removeEventListener("focus", n), window.removeEventListener("blur", o);
                            }
                        );
                    });
                },
                s = ({ screenType: e }) => (i(e), null);
        },
        200904: (e, t, n) => {
            n.d(t, { $_: () => l, FR: () => c, ZP: () => d });
            var o = n(202784),
                r = n(325686),
                a = n(67369),
                i = n(537392),
                s = n(392237);
            const c = (e) =>
                    o.createElement(i.ZP, null, ({ windowWidth: t }) => {
                        const n = t < s.default.theme.breakpoints.small;
                        return e(n ? "space32" : "space80");
                    }),
                l = (e) =>
                    o.createElement(i.ZP, null, ({ windowWidth: t }) => {
                        const n = t < s.default.theme.breakpoints.small;
                        return e(n ? u.mobileContainer : u.webContainer);
                    }),
                u = s.default.create((e) => ({ webContainer: { paddingHorizontal: e.spaces.space80 }, mobileContainer: { paddingHorizontal: e.spaces.space32 } })),
                d = ({ children: e }) => {
                    const t = (0, a.yu)() ? u.mobileContainer : u.webContainer;
                    return o.createElement(r.Z, { style: t }, e);
                };
        },
        430996: (e, t, n) => {
            n.d(t, { Y: () => P, Z: () => Z });
            var o = n(202784),
                r = n(200904),
                a = n(202205),
                i = n(668214),
                s = n(852657);
            const c = (e) => e.quickPromote.targeting.contextualKeywords,
                l = (0, i.Z)()
                    .propsFromState(() => ({ contextualKeywords: c }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: s.ch }))
                    .withAnalytics(a.EP),
                u = (0, i.Z)()
                    .propsFromState(() => ({ contextualKeywords: c }))
                    .propsFromActions(() => ({ setTargetedContextualKeywords: s.ch }))
                    .withAnalytics(a.EP);
            var d = n(325686),
                m = n(370006),
                p = n(786998),
                g = n(392237),
                h = n(192731);
            function f({ children: e, onBack: t }) {
                const n = o.useMemo(() => o.createElement(m.Z, { onClick: t }), [t]);
                return o.createElement(d.Z, { style: w.qpContainer, testID: h.Z.targetingKeywordsScreen }, o.createElement(p.Z, { leftControl: n, style: w.appBar, title: "Select some keywords" }), e);
            }
            const w = g.default.create((e) => ({ qpContainer: { flex: 1 }, appBar: { borderBottomWidth: 1, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, paddingStart: e.spaces.space8 }, noSpacing: { paddingHorizontal: "0" } }));
            var y = n(855488),
                b = n(332920),
                T = n.n(b),
                v = n(187669),
                C = n(203421),
                x = n(599190),
                E = n(973014);
            function _({ contextualKeywords: e, index: t, keyword: n, setTargetedContextualKeywords: r }) {
                const a = o.useCallback(() => r(e.filter((e, n) => n !== t)), [e, t, r]),
                    i = o.useMemo(() => ({ disabled: !1, mode: x.D.Remove, onSecondaryClick: a }), [a]);
                return o.createElement(E.Z, { secondaryAction: i, style: N.withMarginEnd, text: n });
            }
            const N = g.default.create((e) => ({ withMarginEnd: { marginEnd: e.spaces.space8, marginBlockEnd: e.spaces.space8 } })),
                S = T().fe26420a;
            function k({ analytics: e, contextualKeywords: t, recommendedKeywords: n = [], setTargetedContextualKeywords: r }) {
                const [i, s] = o.useState(""),
                    c = o.useCallback((e) => {
                        const t = e.target.value;
                        s(t);
                    }, []),
                    l = o.useCallback(
                        (e) => {
                            switch (e.key) {
                                case ",":
                                case "Enter": {
                                    e.preventDefault();
                                    const n = i.trim(),
                                        o = t.some((e) => e.toLowerCase() === n.toLowerCase());
                                    "" === n || o || (r(t.concat(n)), s(""));
                                    break;
                                }
                            }
                        },
                        [t, i, r],
                    );
                return (
                    (0, v.q)(() => () => {
                        (0, a.hq)(e)(a.Ur.setTargetingKeywords(t.join(",")));
                    }),
                    (0, v.q)(() => {
                        r(n);
                    }),
                    (0, C.d)(a.MN.TargetingKeywords),
                    o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(d.Z, { style: O.selectionGroupContainer }, o.createElement(y.Z, { editable: t.length < 200, label: S, name: "keywords", onChange: c, onKeyDown: l, style: O.noSpacing, testID: h.Z.targetingKeywordsInput, value: i })),
                        o.createElement(
                            d.Z,
                            { style: O.row },
                            t.map((e, n) => o.createElement(_, { contextualKeywords: t, index: n, key: n, keyword: e, setTargetedContextualKeywords: r })),
                        ),
                    )
                );
            }
            const P = u(k),
                O = g.default.create((e) => ({ selectionGroupContainer: { paddingTop: e.spaces.space16 }, row: { alignContent: "flex-start", flexDirection: "row", flexWrap: "wrap", minHeight: "150px", overflowX: "auto" }, noSpacing: { paddingHorizontal: "0" } }));
            const Z = l(function (e) {
                const { analytics: t, contextualKeywords: n, history: i, location: s, match: c, setTargetedContextualKeywords: l } = e,
                    u = o.useCallback(() => {
                        const { quickPromotePlatform: e, quickPromoteScreenName: t, screenName: n, statusId: o } = c.params;
                        (0, a.Mi)(i, s)(n, o, e, t);
                    }, [i, s, c.params]),
                    d = { analytics: t, contextualKeywords: n, setTargetedContextualKeywords: l };
                return o.createElement(f, { onBack: u }, o.createElement(r.ZP, null, o.createElement(k, d)));
            });
        },
        346789: (e, t, n) => {
            n.d(t, { Z: () => Ce });
            var o = n(202784),
                r = n(443781),
                a = n(736063),
                i = n(725516),
                s = n(535338),
                c = n(455125),
                l = (n(585488), n(392237)),
                u = n(332920),
                d = n.n(u);
            d().c14cdb18;
            l.default.create((e) => ({ inModal: { marginStart: e.spaces.space12 } }));
            const m = c.Z;
            var p = n(325686),
                g = n(107267),
                h = n(688715),
                f = n(67369),
                w = n(362075),
                y = n(731708),
                b = n(154003),
                T = n(138099),
                v = n(879113),
                C = n(163889),
                x = n(315032),
                E = n(202205),
                _ = n(943245),
                N = n(71620),
                S = n(668214),
                k = n(852657),
                P = n(813604);
            const O = (e) => (t) => {
                    const n = (0, k.WK)(t)(e);
                    return e.ads.typeahead.forecastAudience[n]?.result?.estimatedImpressions;
                },
                Z = (0, S.Z)()
                    .propsFromState(() => ({ getAudience: O }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, N.zr)("QUICK_PROMOTE_BUDGET_SELECT_SCREEN"), fetchBoostForecastedReachForBudgetIfNeeded: P.Lm }))
                    .withAnalytics(),
                F = d().h7c29de6,
                B = d().hd435bf1;
            const I = Z(function (e) {
                const { analytics: t, budget: n, createLocalApiErrorHandler: r, fetchBoostForecastedReachForBudgetIfNeeded: a, getAudience: i } = e;
                o.useEffect(() => {
                    a(n, t).catch(r());
                }, [t, n, r, a]);
                const s = i(n);
                if (!s) return null;
                const { high: c, low: l } = s,
                    u = d().cf8abf59(l),
                    m = d().cf8abf59(c);
                return o.createElement(o.Fragment, null, o.createElement(y.ZP, { size: "subtext1", weight: "bold" }, F), o.createElement(y.ZP, { size: "subtext1" }, B({ audienceLow: u, audienceHigh: m })));
            });
            var D = n(807896),
                R = n(896632),
                M = n(352924),
                L = n(868634),
                A = n(952428),
                j = n(516951);
            const $ = ({ "aria-label": e, "aria-posinset": t, "aria-setsize": n, checked: r, description: a, disabled: i, endContent: s, horizontal: c, illustration: l, label: u, name: d, onChange: m, pillText: g, pillType: h, reverseLabels: f, secondaryDescription: w, switchStyle: b, testID: T }) => {
                    const v = M.b(),
                        C = M.b(),
                        x = M.b(),
                        E = o.createElement(y.ZP, { color: b ? (r ? "text" : "gray700") : "text", id: v, role: "label", size: b ? "subtext1" : "headline2", testID: "headline-label", weight: "bold" }, u),
                        _ = !!a && o.createElement(y.ZP, { color: "gray700", id: C, size: "subtext1", style: g ? K.descriptionWithPill : K.description, testID: "description-label" }, a),
                        N = o.createElement(y.ZP, { color: "gray700", role: "label", size: "subtext2", style: K.description }, w),
                        S = g ? o.createElement(L.ZP, { style: K.marginStart8, type: h }, g) : null,
                        k = o.createElement(o.Fragment, null, o.createElement(p.Z, { style: K.row }, f ? _ : E, S), o.createElement(p.Z, { style: [K.row, f && K.marginTop4] }, f ? E : _), w ? N : null),
                        P = (n ? 100 / n : 100) + "%",
                        O = b ? [K.padding4, K.borderRadiusInfinite, r ? K.backgroundDefault : K.backgroundGrey] : [K.padding16, K.boxShadow, K.borderRadiusLarge, r ? K.checked : null, K.backgroundDefault];
                    return o.createElement(A.Z, { disabled: i, style: [K.root, ...O, c ? { maxWidth: P, ...K.grow } : null, 1 === t || c ? null : K.withMarginTop, t !== n && c && K.withMarginEnd, !i && K.interactive], testID: T, withInteractiveStyling: !b }, !!l && o.createElement(p.Z, { style: K.iconContainer, testID: "illustration" }, l), o.createElement(p.Z, { style: [K.labelContainer, b && K.alignCenter] }, k), !!s && o.createElement(p.Z, { style: K.endContentContainer, testID: "endContent" }, s), o.createElement("input", { "aria-describedby": `${C} ${x}`, "aria-label": e, "aria-labelledby": v, "aria-posinset": t, "aria-setsize": n, checked: r, disabled: i, name: d, onChange: r ? j.Z : m, style: q, type: "radio" }));
                },
                K = l.default.create((e) => ({ backgroundGrey: { backgroundColor: e.colors.gray100 }, backgroundDefault: { backgroundColor: e.colors.elevatedBackground }, root: { overflow: "hidden", flexDirection: "row", justifyContent: "space-between", gap: e.spaces.space16, flexGrow: 1, borderColor: e.colors.transparent, borderWidth: e.borderWidths.medium }, alignCenter: { alignItems: "center" }, padding16: { padding: e.spaces.space16 }, padding4: { padding: e.spaces.space4 }, boxShadow: { boxShadow: "0px 2px 12px rgba(15, 20, 25, 0.12)" }, withMarginTop: { marginTop: e.spaces.space20 }, borderRadiusLarge: { borderRadius: e.borderRadii.large }, borderRadiusInfinite: { borderRadius: e.borderRadii.infinite }, checked: { borderColor: e.colors.primary }, interactive: { cursor: "pointer" }, withMarginEnd: { marginEnd: e.spaces.space20 }, grow: { flexGrow: 1 }, iconContainer: { alignSelf: "flex-start", flexDirection: "column", justifyContent: "center", width: e.spaces.space40, height: e.spaces.space40 }, labelContainer: { flexDirection: "column", justifyContent: "center", flex: 2 }, inlineCalloutContainer: { marginTop: e.spaces.space8 }, description: { marginTop: e.spaces.space4 }, descriptionWithPill: { marginTop: e.spaces.space2 }, endContentContainer: { justifyContent: "center", flexDirection: "column", flex: 3 }, row: { flexDirection: "row", alignItems: "center" }, marginStart8: { marginStart: e.spaces.space8 }, marginTop4: { marginTop: e.spaces.space4 } })),
                q = { ...l.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" },
                z = (e) => {
                    const t = o.useCallback(({ value: e, ...t }) => o.createElement($, (0, D.Z)({}, t, { key: e })), []);
                    return o.createElement(R.Z, (0, D.Z)({}, e, { renderSelector: t }));
                };
            var G = n(390387);
            function H(e) {
                return e.quickPromote.budget.availableBudgets ?? [];
            }
            function U(e) {
                return e.quickPromote.budget.currency ?? "USD";
            }
            function W(e) {
                return e.quickPromote.budget.dailyBudget;
            }
            const V = (0, S.Z)()
                    .propsFromState(() => ({ availableBudgets: H, currency: U, dailyBudget: W, language: G.VT }))
                    .propsFromActions(() => ({ setDailyBudget: k.p_ }))
                    .withAnalytics(),
                J = d().i3656b52;
            function Q(e, t, n) {
                return e.toLocaleString((0, _.It)(t), { currency: n, style: "currency", maximumFractionDigits: 0, minimumFractionDigits: 0 });
            }
            const Y = V(function (e) {
                    const { availableBudgets: t, currency: n, dailyBudget: r, language: a, setDailyBudget: i } = e,
                        s = o.useMemo(() => [t[3], t[5], t[6], t[8]].filter(Boolean), [t]),
                        c = o.useMemo(() => s.map((e, t) => ({ label: Q(e, a, n), value: e, endContent: o.createElement(I, { budget: e }) })), [s, n, a]);
                    return o.createElement(
                        p.Z,
                        { style: X.tileRadioPadding },
                        o.createElement(y.ZP, { style: X.radioTextSpacing }, J),
                        o.createElement(z, {
                            name: "budget-select",
                            onChange: function (e, t) {
                                i(t);
                            },
                            options: c,
                            value: r,
                        }),
                    );
                }),
                X = l.default.create((e) => ({ radioTextSpacing: { marginBottom: e.spaces.space8 }, tileRadioPadding: { marginVertical: e.spaces.space24 } }));
            var ee = n(919022),
                te = n(312771);
            const ne = (e) => (0, te.h1)(e.quickPromote.budget.availableBudgetsFetchStatus, e.quickPromote.targeting.initialTargetedLocationsFetchStatus, e.quickPromote.account.accountDataFetchStatus),
                oe = (e) => e.quickPromote.account.adsAccount,
                re = (e) => e.quickPromote.account.selectedFundingInstrument,
                ae = (0, S.Z)()
                    .propsFromState(() => ({ adsAccount: oe, fetchStatus: ne, fundingInstrument: re, viewerUser: ee.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, N.zr)("QUICK_PROMOTE_SCREEN"), createPromotion: k.kb, fetchCurrentTargetingLocationIfNeeded: k.yW, fetchAvailableBudgetsIfNeeded: k.WS, fetchAdsAccountDataIfNeeded: k.Ek, resetState: k.oA, setBudgetDuration: k.g_, setTargetedAgeBucket: k.l$ }))
                    .withAnalytics(E.EP);
            var ie = n(249422);
            n(963379);
            const se = ie.Z;
            var ce = n(430996);
            const le = { context: "RECOMMENDED_KEYWORDS_QUERY" };
            function ue(e) {
                const t = (0, s.p)(se, { tweetText: e.tweetText.slice(0, 280) }),
                    n = o.useMemo(() => (t.get_recommended_keywords ?? []).slice(), [t.get_recommended_keywords]);
                return o.createElement(ce.Y, { recommendedKeywords: n });
            }
            function de(e) {
                return o.createElement(a.H, { errorConfig: le }, o.createElement(ue, e));
            }
            const me = d().f11264ac,
                pe = d().j619ec94,
                ge = d().h1fcb36c;
            const he = ae(function (e) {
                    const { analytics: t, createLocalApiErrorHandler: n, fetchAdsAccountDataIfNeeded: a, fetchAvailableBudgetsIfNeeded: i, fetchCurrentTargetingLocationIfNeeded: s, resetState: c, setBudgetDuration: l, setTargetedAgeBucket: u, tweetText: m } = e,
                        [_, N] = o.useState("main"),
                        S = (0, g.useHistory)(),
                        { viewerUserId: k } = (0, r.QZ)(),
                        P = (0, f.yu)(),
                        O = o.useCallback(() => {
                            k &&
                                Promise.all([a(k, t), s()])
                                    .then(() => {
                                        i().catch(n());
                                    })
                                    .catch(n());
                        }, [t, n, a, i, s, k]);
                    if (
                        (o.useEffect(() => {
                            c(), O();
                        }, [O, c]),
                        o.useEffect(() => {
                            l(1), u(x.s.AGE_OVER_18);
                        }, [l, u]),
                        !k)
                    )
                        return null;
                    function Z() {
                        N("payment");
                    }
                    function F(e) {
                        e && "quick_promote" === e.name && ("close" === e.type && N("main"), "cardAdded" === e.type && (a(k, t, !0), N("main")));
                    }
                    function B() {
                        const n = e.viewerUser?.screen_name;
                        n &&
                            ((0, E.hq)(t)(E.Ur.boostCreationClick()),
                            e.sendAndGetTweetId().then((o) => {
                                if (!o) return;
                                const r = (0, E.gC)(n, o);
                                e.createPromotion({ analytics: t, fromComposer: !0, history: S, statusId: o, nextPath: r });
                            }));
                    }
                    const I = P ? fe.mobileTitleContainer : fe.titleContainer,
                        D = "payment" === _ ? fe.fullHeight : void 0,
                        R = "payment" === _ ? [I, fe.fullHeight] : I;
                    return o.createElement(
                        T.Z,
                        { onMaskClick: e.onDismiss, style: D, type: "bottom", withMask: !0 },
                        o.createElement(
                            p.Z,
                            { style: R },
                            o.createElement(v.Z, {
                                fetchStatus: e.fetchStatus,
                                onRequestRetry: O,
                                render: function () {
                                    if ("payment" === _) {
                                        const n = ((t = e.adsAccount?.id), (0, h.ju)(`https://x.com/i/payments/${parseInt(t, 10).toString(36)}/quick-promote/new`));
                                        return o.createElement(w.Z, { allowForms: !0, onMessage: F, reportError: C.ZP, src: n, style: fe.iframe, title: "Payment Form" });
                                    }
                                    var t;
                                    return o.createElement(o.Fragment, null, o.createElement(y.ZP, { align: "left", "aria-level": 1, role: "heading", size: "title4", weight: "heavy" }, ge), o.createElement(de, { tweetText: m }), o.createElement(Y, null), o.createElement(p.Z, { style: fe.bottomElements }, !e.fundingInstrument || e.adsAccount?.needs_vat ? o.createElement(b.ZP, { onPress: Z, size: "xLarge", type: "primaryFilled" }, me) : o.createElement(b.ZP, { onPress: B, size: "xLarge", type: "primaryFilled" }, pe)), o.createElement(y.ZP, { color: "gray700", style: fe.adsDisclaimer }, o.createElement(d().I18NFormatMessage, { $i18n: "ff2f533f" }, o.createElement(y.ZP, { link: (0, h.ju)("https://legal.x.com/ads-terms/us.html") }, d().fd22cfe0))));
                                },
                            }),
                        ),
                    );
                }),
                fe = l.default.create((e) => ({ titleContainer: { paddingHorizontal: e.spaces.space80, paddingVertical: e.spaces.space24 }, mobileTitleContainer: { paddingHorizontal: e.spaces.space32, paddingVertical: e.spaces.space40 }, bottomElements: { marginTop: e.spaces.space12, marginBottom: e.spaces.space20 }, paymentContainer: { height: "100%" }, fullHeight: { height: "100%" }, iframe: { flexGrow: 1, paddingTop: 0 }, adsDisclaimer: { fontSize: e.fontSizes.subtext2 } })),
                we = d().c14cdb18;
            function ye(e) {
                const { isModal: t } = e,
                    n = t ? "medium" : "small";
                return o.createElement(b.ZP, { disabled: e.isDisabled, onPress: e.onPress, size: n, style: t ? be.inModal : void 0, type: "brandOutlined" }, we);
            }
            const be = l.default.create((e) => ({ inModal: { marginStart: e.spaces.space12 } }));
            function Te(e) {
                const [t, n] = o.useState(!1),
                    r = (0, s.p)(m, {}),
                    a = !!r.quick_promote_eligibility?.is_eligible,
                    c = (0, i.z)();
                return a
                    ? o.createElement(
                          o.Fragment,
                          null,
                          o.createElement(ye, {
                              isDisabled: e.disabled,
                              isModal: e.isModal,
                              onPress: function () {
                                  c.scribe({ section: "composer", component: "boost", action: "click" }), n(!0);
                              },
                          }),
                          t
                              ? o.createElement(he, {
                                    onDismiss: function () {
                                        n(!1);
                                    },
                                    sendAndGetTweetId: e.onTweetWithBoostPress,
                                    tweetText: e.tweetText,
                                })
                              : null,
                      )
                    : (e.renderFallback?.() ?? null);
            }
            const ve = { context: "TWEET_BOOST_ELIGIBILITY_QUERY" };
            function Ce(e) {
                const { viewer: t } = e,
                    { featureSwitches: n } = (0, r.QZ)(),
                    i = e.isAudienceAll && e.isComposerValid && !e.isEdit && !e.isQuote && !e.isReply && !e.isScheduled && !e.isSelfThreadReply && !e.isThread && !e.isRetweet,
                    s = !(!t?.is_blue_verified && !t?.verified_type);
                return e.shouldShow && s && i && n.isTrue("rweb_tweets_boosting_enabled") ? o.createElement(a.H, { errorConfig: ve, suspenseFallback: null }, o.createElement(Te, e)) : (e.renderFallback?.() ?? null);
            }
        },
        192731: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = { introButton: "introButton", nextButton: "nextButton", objectiveScreen: "objectiveScreen", targetingScreen: "targetingScreen", getObjective: (e) => `objectiveScreenObjective${e}`, targetingLocationScreen: "targetingLocationScreen", targetingGenderScreen: "targetingGenderScreen", targetingKeywordsScreen: "targetingKeywordsScreen", budgetSelectScreen: "budgetSelectScreen", reviewScreen: "reviewScreen", reviewButton: "reviewButton", reviewObjectiveDescription: "reviewObjectiveDescription", reviewTargetingDescription: "reviewTargetingDescription", reviewBudgetAndDurationDescription: "reviewBudgetAndDurationDescription", reviewPaymentPivot: "reviewPaymentPivot", reviewPromotionTotalDescription: "reviewPromotionTotalDescription", targetingLocationPivot: "targetingLocationPivot", targetingGenderPivot: "targetingGenderPivot", targetingKeywordsPivot: "targetingKeywordsPivot", backButton: "backButton", targetingLocationSearch: "targetingLocationSearch", targetingLocationItem: "targetingLocationItem", getTargetingGender: (e) => `targetingGenderScreenGender${e}`, targetingKeywordsInput: "targetingKeywordsInput", paymentMethodSelect: "paymentMethodSelect", dropoffScreen: "dropoffScreen" };
        },
        202205: (e, t, n) => {
            n.d(t, { ZV: () => ne, D_: () => oe, MN: () => te, cU: () => de, gC: () => X, bx: () => Te, C0: () => be, Jy: () => me, lg: () => re, WS: () => Y, s0: () => he, YZ: () => se, Mi: () => ee, Ur: () => o, EP: () => le, hq: () => ue });
            var o = {};
            n.r(o), n.d(o, { audienceEstimateCall: () => G, audienceEstimateFail: () => U, audienceEstimateSuccess: () => H, back: () => y, boostCreationClick: () => $, budgetSelectPageLoad: () => d, donePageLoad: () => h, dropOffScreenCancel: () => w, dropOffScreenConfirm: () => f, enrollCouponFail: () => A, enrollCouponSuccess: () => L, fetchCouponFailed: () => M, fetchCouponSuccess: () => R, goalSelectionPageLoad: () => u, graphQlFetchReturnedInvalidData: () => D, introPageLoad: () => s, liteLoadFail: () => v, pageLoadFail: () => T, paymentMethodChanged: () => J, paymentMethodDeleted: () => Q, paymentPageLoad: () => m, paymentPageLoadAddingCard: () => p, paymentSelectPageLoad: () => V, professionalAccountsEligible: () => x, professionalAccountsIneligible: () => E, professionalAccountsNotRetrieved: () => _, professionalAccountsSignup: () => C, promotionCall: () => K, promotionClick: () => j, promotionError: () => q, promotionSuccess: () => z, qpExperimentIntro: () => W, reload: () => b, reviewPageLoad: () => g, setBudgetDuration: () => F, setDailyBudget: () => B, setPromoteGoal: () => N, setTargetingAgeBucket: () => P, setTargetingGender: () => O, setTargetingKeywords: () => Z, setTargetingLocation: () => S, targetingLocationInvalid: () => I, targetingLocationPageLoad: () => l, targetingLocationSearch: () => k, targetingPageLoad: () => c });
            n(136728);
            var r = n(688715),
                a = n(323265),
                i = n(163889);
            function s(e) {
                return { component: "intro", element: "page", action: "load", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function c() {
                return { component: "targeting", element: "page", action: "load" };
            }
            function l() {
                return { component: "targeting_location", element: "page", action: "load" };
            }
            function u() {
                return { component: "objective", element: "page", action: "load" };
            }
            function d() {
                return { component: "budget_select", element: "page", action: "load" };
            }
            function m(e) {
                return { component: "payment", element: "page", action: "load", data: { context: e, event_info: e } };
            }
            function p() {
                return { component: "payment", element: "page", action: "load", data: { context: "isAddingCard", event_info: "isAddingCard" } };
            }
            function g(e) {
                return { component: "review", element: "page", action: "load", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function h() {
                return { component: "done", element: "page", action: "load" };
            }
            function f() {
                return { component: "drop_off_screen", element: "interaction", action: "close" };
            }
            function w() {
                return { component: "drop_off_screen", element: "interaction", action: "back" };
            }
            function y(e) {
                return { component: e, element: "interaction", action: "back" };
            }
            function b(e) {
                return { component: e, element: "interaction", action: "reload" };
            }
            function T(e) {
                return { component: "intro", element: "page", action: "fail", data: { context: e, event_info: e } };
            }
            function v(e) {
                return { component: "lite", element: "page", action: "fail", data: { context: e, event_info: e } };
            }
            function C() {
                return { component: "professional_accounts", element: "page", action: "change" };
            }
            function x() {
                return { component: "professional_accounts", element: "page", action: "success" };
            }
            function E() {
                return { component: "professional_accounts", element: "page", action: "fail" };
            }
            function _() {
                return { component: "professional_accounts", element: "page", action: "error" };
            }
            function N(e) {
                return { component: "objective", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function S(e) {
                return { component: "targeting_location", element: "interaction", action: "change", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function k(e) {
                return { component: "targeting_location", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function P(e) {
                return { component: "targeting_age", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function O(e) {
                return { component: "targeting_gender", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function Z(e) {
                return { component: "targeting_keywords", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function F(e) {
                return { component: "budget_select_days", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function B(e) {
                return { component: "budget_select_daily_budget", element: "interaction", action: "change", data: { context: e, event_info: e } };
            }
            function I() {
                return { component: "targeting_location", element: "interaction", action: "invalid" };
            }
            function D(e) {
                return { component: "intro", element: "use_gql_ads_account_data", action: "error", data: { context: e, event_info: e } };
            }
            function R(e) {
                return { component: "intro", element: "fetch_coupon", action: "success", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function M(e) {
                return { component: "intro", element: "fetch_coupon", action: "fail", data: { context: e, event_info: e } };
            }
            function L(e) {
                return { component: "review", element: "enroll_coupon", action: "success", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function A(e) {
                return { component: "review", element: "enroll_coupon", action: "fail", data: { context: e, event_info: e } };
            }
            function j() {
                return { component: "review", element: "promotion", action: "click" };
            }
            function $() {
                return { component: "boost", element: "promotion", action: "click" };
            }
            function K(e) {
                return { component: "review", element: "promotion", action: "call", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function q(e) {
                return { component: "review", element: "promotion", action: "error", data: { context: e, event_info: e } };
            }
            function z(e) {
                return { component: "review", element: "promotion", action: "success", data: { context: e, event_info: e } };
            }
            function G(e) {
                return { component: "budget_select", element: "audience_estimate", action: "call", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function H(e) {
                return { component: "budget_select", element: "audience_estimate", action: "success", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function U(e) {
                return { component: "budget_select", element: "audience_estimate", action: "fail", data: { context: JSON.stringify(e), event_info: JSON.stringify(e) } };
            }
            function W(e) {
                return { component: "experiment", element: "intro_skip", action: e ? "enabled" : "disabled" };
            }
            function V() {
                return { component: "payment_select", element: "page", action: "load" };
            }
            function J(e) {
                return { component: "payment_select", element: "change_payment_method", action: e ? "fail" : "success", data: e ? { context: e, event_info: e } : void 0 };
            }
            function Q(e) {
                return { component: "payment_select", element: "delete_payment_method", action: e ? "fail" : "success", data: e ? { context: e, event_info: e } : void 0 };
            }
            function Y(e, t, n, o) {
                return `/${e}/status/${t}/${n}/${o}`;
            }
            function X(e, t) {
                return `/${e}/status/${t}/analytics`;
            }
            const ee = (e, t) => (t, n, o, r) => {
                const a = (function (e, t, n, o) {
                    switch (o) {
                        case "intro":
                        case "objective":
                        case "targeting":
                            return X(e, t);
                        case "budget_select":
                        case "targeting_location":
                        case "targeting_gender":
                        case "targeting_keywords":
                            return Y(e, t, n, te.Targeting);
                        case "review":
                            return Y(e, t, n, te.BudgetSelect);
                        case "payment":
                        case "payment_select":
                        case "done":
                            return Y(e, t, n, te.Review);
                        default:
                            (0, i.ZP)(`handleGoBack: screenType ${o} is invalid`);
                    }
                })(t, n, o, r);
                e.goBack({ backLocation: a });
            };
            const te = Object.freeze({ Intro: "intro", Objective: "objective", Targeting: "targeting", TargetingLocation: "targeting_location", TargetingGender: "targeting_gender", TargetingKeywords: "targeting_keywords", BudgetSelect: "budget_select", Review: "review", Payment: "payment", Done: "done", PaymentSelect: "payment_select" }),
                ne = Object.freeze({ Webview: "quick_promote", Rweb: "quick_promote_web" }),
                oe = Object.freeze({ Objective: 0.2, Targeting: 0.4, BudgetSelect: 0.6, Review: 0.8, Finish: 1 });
            function re(e, t, n, o, r, a) {
                return e === ne.Webview ? { isSameHost: !1, url: r ? ae(n, window.location.hostname) : ie(window.location.hostname, t, n, o, a) } : { isSameHost: !0, url: r ? ae(n, window.location.hostname) : ie(window.location.hostname, t, n, o, a) };
            }
            const ae = (e, t) => (0, r.ju)(`https://${t}/i/tfb/v1/advertiser_signup/${ce()}/payment?tweetId=${e}&isAddingPayment=true`);
            function ie(e, t, n, o, a) {
                if (a && a.isTrue("responsive_web_qp_new_payment_enabled") && t?.id) return (0, r.ju)(`https://x.com/i/payments/${parseInt(t.id, 10).toString(36)}/quick-promote/new`);
                const i = (0, r.ju)(`https://${e}/i/tfb/v1/advertiser_signup`),
                    s = `?tweetId=${n}`,
                    c = ce();
                return t ? (t.timezone && t.country_code ? (o ? `${i}/${c}/vat${s}` : `${i}/${c}/payment${s}`) : `${i}/${c}/setup${s}`) : `${i}/${c}/create_account${s}`;
            }
            const se = (e) => (t, n, o) => {
                switch (o) {
                    case "quick_promote":
                    case "quick_promote_web":
                        return void e.push(X(t, n));
                    default:
                        (0, i.ZP)(`Unknown platformType: "${o}"`), e.push(X(t, n));
                }
            };
            function ce() {
                return a.ZP.isIOS() ? "ios" : a.ZP.isAndroid() ? "android" : "lite";
            }
            const le = { page: "quick_promote" },
                ue = (e) => (t) => {
                    const n = a.ZP.osString(),
                        o = a.ZP.isTwitterApp();
                    e.scribe({ section: o ? `${n}-webview` : n, ...t, data: { url: window.location.href, ...t.data } });
                },
                de = Object.freeze({ CurrentCountryMatch: "currentCountryMatch", Match: "match", NoMatch: "noMatch" }),
                me = (e) => (t, n, o) => (t.toLowerCase().includes(o.toLowerCase()) ? (e.toLowerCase() === n.toLowerCase() ? de.CurrentCountryMatch : de.Match) : de.NoMatch),
                pe = Object.freeze({ AU: (0, r.ju)("https://legal.x.com/ads-terms/apac.html"), BR: (0, r.ju)("https://legal.x.com/ads-terms/brazil.html"), GB: (0, r.ju)("https://legal.x.com/ads-terms/uk.html"), ID: (0, r.ju)("https://legal.x.com/ads-terms/indonesia.html"), JP: (0, r.ju)("https://legal.x.com/ads-terms/japan.html"), NZ: (0, r.ju)("https://legal.x.com/ads-terms/apac.html"), US: (0, r.ju)("https://legal.x.com/ads-terms/us.html") }),
                ge = (0, r.ju)("https://legal.x.com/ads-terms/international.html");
            function he(e) {
                return (e && pe[e]) || ge;
            }
            const fe = Object.freeze({ en: (0, r.ju)("https://business.x.com/en/campaign/quick-promote-conditional-coupon-terms.html"), de: (0, r.ju)("https://business.x.com/de/campaign/quick-promote-conditional-coupon-terms.html"), es: (0, r.ju)("https://business.x.com/es/campaign/quick-promote-conditional-coupon-terms.html"), fr: (0, r.ju)("https://business.x.com/fr/campaign/quick-promote-conditional-coupon-terms.html"), ja: (0, r.ju)("https://business.x.com/ja/campaign/quick-promote-conditional-coupon-terms.html"), pt: (0, r.ju)("https://business.x.com/pt/campaign/quick-promote-conditional-coupon-terms.html"), ar: (0, r.ju)("https://business.x.com/ar/campaign/quick-promote-conditional-coupon-terms.html"), "zh-cn": (0, r.ju)("https://business.x.com/zh-cn/campaign/quick-promote-conditional-coupon-terms.html") }),
                we = Object.freeze({ en: (0, r.ju)("https://business.x.com/en/campaign/quick-promote-coupon-terms.html"), de: (0, r.ju)("https://business.x.com/de/campaign/quick-promote-coupon-terms.html"), es: (0, r.ju)("https://business.x.com/es/campaign/quick-promote-coupon-terms.html"), fr: (0, r.ju)("https://business.x.com/fr/campaign/quick-promote-coupon-terms.html"), ja: (0, r.ju)("https://business.x.com/ja/campaign/quick-promote-coupon-terms.html"), pt: (0, r.ju)("https://business.x.com/pt/campaign/quick-promote-coupon-terms.html"), ar: (0, r.ju)("https://business.x.com/ar/campaign/quick-promote-coupon-terms.html"), "zh-cn": (0, r.ju)("https://business.x.com/zh-cn/campaign/quick-promote-coupon-terms.html") }),
                ye = ["en", "de", "es", "fr", "pt", "ja", "ar", "da", "ko", "ru", "zh-cn", "zh-tw", "tr", "no", "sv"];
            function be(e) {
                const t = e.toLowerCase(),
                    n = ye.find((e) => e.startsWith(t)) ? t : "en";
                return (0, r.ju)(`https://business.x.com/${n}/help/ads-policies/campaign-considerations/housing-lending-and-employment-opportunities.html`);
            }
            function Te(e, t) {
                return "conditionalCoupon" === t ? (e && fe[e]) || fe.en : (e && we[e]) || fe.en;
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.Compose~bundle.RichTextCompose-e6266db0.20210bca.js.map
