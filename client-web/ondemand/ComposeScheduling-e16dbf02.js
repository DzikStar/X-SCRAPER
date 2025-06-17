"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-e16dbf02"],
    {
        495232: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = {
                getEducationType: (e, t) => {
                    switch (e) {
                        case "followers":
                            return t ? "conversationControlsFollowersCanEngage" : "conversationControlsFollowersCannotEngage";
                        case "community":
                            return t ? "conversationControlsCommunityCanEngage" : "conversationControlsCommunityCannotEngage";
                        case "by_invitation":
                            return t ? "conversationControlsByInvitationCanEngage" : "conversationControlsByInvitationCannotEngage";
                        case "subscribers":
                            return t ? "conversationControlsSubscribersCanEngage" : "conversationControlsSubscribersCannotEngage";
                        case "community_hidden_tweet":
                            return "communityHiddenTweetEducation";
                        case "community_tweet_member_removed":
                            return "communityRemovedMemberEducation";
                        case "verified":
                            return t ? "conversationControlsVerifiedCanEngage" : "conversationControlsVerifiedCannotEngage";
                        default:
                            return;
                    }
                },
            };
        },
        260706: (e, t, n) => {
            n.d(t, { Z: () => v });
            var r = n(202784),
                a = n(325686),
                o = n(111677),
                s = n.n(o),
                i = n(97043),
                l = n(323265),
                c = n(731708),
                d = n(154003),
                p = n(950822),
                u = n(586855),
                h = n(855488),
                m = n(466818),
                g = n(392237);
            const y = s().jf83d092,
                b = s().af4abf20,
                f = s().b871f280;
            let C = 1;
            class v extends r.Component {
                constructor(e) {
                    super(e),
                        (this._showCalendarPicker = () => {
                            this._nativeCalendarRef?.showPicker?.();
                        }),
                        (this._setNativeCalendarRef = (e) => {
                            this._nativeCalendarRef = e;
                        }),
                        (this._handleSelectorChange = (e, t) => {
                            const { day: n, month: r, year: a } = this.props,
                                o = { day: n, month: r, year: a, [e]: parseInt(t, 10) };
                            this.props.onChange(o);
                        }),
                        (this._handleDayChange = (e) => {
                            this._handleSelectorChange("day", e);
                        }),
                        (this._handleMonthChange = (e) => {
                            this._handleSelectorChange("month", e);
                        }),
                        (this._handleYearChange = (e) => {
                            this._handleSelectorChange("year", e);
                        }),
                        (this._handleDateChange = (e) => {
                            const t = e.target.value.split("-"),
                                n = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) };
                            this.props.onChange(n);
                        });
                    const { day: t, maxSelectableYear: n, minSelectableYear: r, month: a, year: o } = e;
                    (this._errorID = `DATE_INPUT_${C}_ERROR`), (this._monthOptions = u.dX()), (this._nativeDefaultValue = u.ww(t, a, o)), (this._nativeMaxDate = u.ww(31, 12, n)), (this._nativeMinDate = u.ww(1, 1, r)), (C += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: n, onChange: r, year: a } = this.props,
                        o = n && n !== e.month,
                        s = a && a !== e.year;
                    if (o || s) {
                        u
                            .DD(n, a)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || r({ month: n, year: a, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        n = l.ZP.isMobileOS() && !t;
                    return r.createElement(a.Z, null, n ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: n, errors: o = {}, label: s, autofocus: i, monthSelectorTestID: l, daySelectorTestID: c, yearSelectorTestID: h, style: g, minSelectableYear: C, maxSelectableYear: v, withCalendar: E, hideDay: w, disabled: S } = this.props,
                        D = u.DD(t, n),
                        Z = u.Zj(C, v, e, t);
                    return r.createElement(a.Z, { "aria-label": s, role: "group", style: [_.selectorsContainer, g] }, r.createElement(m.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: i, disabled: S, hasError: o.month, label: b, onChange: this._handleMonthChange, options: this._monthOptions, style: _.monthSelector, testID: l, value: t ? `${t}` : "", withEmptyOption: !0 }), w ? null : r.createElement(m.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: S, hasError: o.day, label: y, onChange: this._handleDayChange, options: D, style: _.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(m.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: S, hasError: o.year, label: f, onChange: this._handleYearChange, options: Z, style: _.yearSelector, testID: h, value: n ? `${n}` : "", withEmptyOption: !0 }), E && r.createElement(a.Z, { role: "label", style: _.calendarLabel }, r.createElement(d.ZP, { "aria-label": "Calendar", icon: x, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, p.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: s, onChange: this._handleDateChange, style: _.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: u.ww(e, t, n) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return r.createElement(h.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: _.dateInputRoot, type: "date" });
                }
            }
            const x = r.createElement(i.default, null),
                _ = g.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...g.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, n) => {
            n.d(t, { DD: () => Z, ZP: () => I, Zj: () => S, dX: () => w, ww: () => k });
            var r = n(111677),
                a = n.n(r),
                o = n(822240);
            const s = 1,
                i = 2,
                l = 3,
                c = 4,
                d = 5,
                p = 6,
                u = 7,
                h = 8,
                m = 9,
                g = 10,
                y = 11,
                b = 12,
                f = { [s]: { label: a().hac89ab0, numDays: 31 }, [i]: { label: a().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [l]: { label: a().b56920fa, numDays: 31 }, [c]: { label: a().b1a0f1ec, numDays: 30 }, [d]: { label: a().daf779c8, numDays: 31 }, [p]: { label: a().c6ad074e, numDays: 30 }, [u]: { label: a().f1db106c, numDays: 31 }, [h]: { label: a().i4e80b7a, numDays: 31 }, [m]: { label: a().efa6cc1e, numDays: 30 }, [g]: { label: a().f40a0cbe, numDays: 31 }, [y]: { label: a().ac74a31c, numDays: 30 }, [b]: { label: a().i6c1e4b2, numDays: 31 } },
                C = (e) => ({ label: `${e}`, value: `${e}` }),
                v = (0, o.Z)(1, 29).map(C),
                x = (0, o.Z)(1, 30).map(C),
                _ = (0, o.Z)(1, 31).map(C),
                E = (0, o.Z)(1, 32).map(C),
                w = () => Object.keys(f).map((e) => ({ label: f[e].label, value: e })),
                S = (e = 1, t, n, r) => {
                    const a = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, a + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === n ? D(e) : e))
                        .map(C);
                },
                D = (e) => 1 === new Date(e, 1, 29).getMonth(),
                Z = (e, t) => {
                    if (!e) return E;
                    switch (2 === e && (!t || (t && D(t))) ? f[e].numDaysLeapYear : f[e].numDays) {
                        case 28:
                            return v;
                        case 29:
                            return x;
                        case 30:
                            return _;
                        default:
                            return E;
                    }
                },
                k = (e, t, n) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof n) {
                        return `${n}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const I = {
                getFormattedDateValue: k,
                getDayMonthYear: function (e) {
                    if (null == e) return { year: void 0, month: void 0, day: void 0 };
                    const t = e.split("-").map((e) => {
                        const t = parseInt(e, 10);
                        if (!Number.isNaN(t)) return t;
                    });
                    return { year: t[0], month: t[1], day: t[2] };
                },
            };
        },
        879113: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(476984),
                o = n.n(a),
                s = n(143778),
                i = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                u = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: a, icon: o, loadingMessage: s, onRequestRetry: d, render: h, renderFailure: m, retryMessage: g, retryable: y } = this.props;
                    switch (a) {
                        case c:
                            return y ? r.createElement(i.Z, { icon: o, onRequestRetry: d, retryMessage: g }) : n ? r.createElement(l.m, { failureMessage: n }) : m();
                        case p:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: s });
                        case u:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => g });
            var r = n(202784),
                a = n(325686),
                o = n(111677),
                s = n.n(o),
                i = n(815858),
                l = n(731708),
                c = n(642153),
                d = n(530732),
                p = n(392237);
            const u = s().a35a5b10,
                h = s().fc8cd112,
                m = (e) => r.createElement(l.ZP, null, e);
            class g extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: o, userScreenName: s, withFacepile: p } = this.props,
                        h = this._renderMessage();
                    return r.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(d.Z, { "aria-label": u, interactiveStyles: null, link: s ? ((m = s), `/${m}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => r.createElement(a.Z, { style: y.content }, !e && p ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(l.ZP, { color: "gray700", size: "subtext2", style: [!e && y.message, (n || i) && !!s && y.underline, o] }, e && p ? r.createElement(c.Z, { style: y.inlineFacepile, userAvatarUrls: t }) : null, h))) : r.createElement(a.Z, { style: y.content }, r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var m;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return r.createElement(s().I18NFormatMessage, { $i18n: "c9e6167d" }, m(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(s().I18NFormatMessage, { $i18n: "ha91d1eb" }, m(e[0]), m(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(s().I18NFormatMessage, { $i18n: "f1069f9b" }, m(e[0]), m(e[1]), m(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(s().I18NFormatMessage, { $i18n: "e8404c1f" }, m(e[0]), m(e[1]), n);
                }
            }
            g.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const y = p.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        591978: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(325686),
                o = n(872405),
                s = n(638009),
                i = n(952428),
                l = n(470397),
                c = n(392237),
                d = n(418462),
                p = n(103737),
                u = n(782261);
            function h({ role: e = "article", link: t, onBlur: n, onFocus: c, onPress: p, renderMedia: h = m, renderReplyContext: y, renderText: b, renderTimestamp: f, renderUserAvatar: C, renderUserName: v, staticLinkConfig: x, tweet: _ }) {
                const { LinkConfigProvider: E, a11yIds: w, props: S } = (0, d.a)({ role: e, link: t, onBlur: n, onFocus: c, onPress: p, renderMedia: h, renderReplyContext: y, renderText: b, renderTimestamp: f, renderUserAvatar: C, renderUserName: v, staticLinkConfig: x, tweet: _ }),
                    D = u.Z.getOriginalTweet(_),
                    Z = u.Z.hasMedia(D),
                    k = r.useContext(s.ZP),
                    I = Boolean(S.link),
                    P = S.renderUserAvatar();
                return r.createElement(
                    E,
                    null,
                    r.createElement(
                        i.Z,
                        { "aria-labelledby": [w.username, w.avatar, w.timestamp, w.replyContext, w.text, w.media].join(" "), focusable: I, link: S.link ? k.withAnchorless(S.link) : void 0, onBlur: () => S.onBlur?.(), onFocus: () => S.onFocus?.(), onPress: (e) => S.onPress?.(e), role: S.role, style: g.root, withInteractiveStyling: I },
                        r.createElement(o.Z, { avatarCell: P || void 0, cellStyle: g.cellStyle, style: g.avatarRow }, r.createElement(l.Z, null, S.renderUserName(), S.renderTimestamp()), S.renderReplyContext(), S.renderText({ size: "body", withCardLinks: !0, withQuoteLinks: !0 })),
                        (() => {
                            if (!Z) return null;
                            const e = S.renderMedia({ cacheLocationKey: "listTweet", displayMediaAttribution: !0, preventPlayback: !0, containerAspectRatio: 1, shouldShowAltLabelAlways: !1, singleImageMaxAspectRatio: 1, singleImageMinAspectRatio: 1, videoAspectRatio: 1, withLink: !1, withMediaTagsIcon: !1 });
                            return e ? r.createElement(a.Z, { style: g.media }, e) : null;
                        })(),
                    ),
                );
            }
            function m(e) {
                return r.createElement(p.Z, e);
            }
            (h.Media = p.Z), (h.ReplyContext = d.q.ReplyContext), (h.Text = d.q.Text), (h.Timestamp = d.q.Timestamp), (h.UserAvatar = d.q.UserAvatar), (h.UserName = d.q.UserName);
            const g = c.default.create((e) => ({ avatarRow: { alignItems: "flex-start", flex: 1, flexShrink: 1 }, cellStyle: { flexGrow: 1 }, media: { width: `calc(${c.default.theme.spaces.space12} * 10)`, marginStart: e.spaces.space12 }, root: { flexDirection: "row", paddingTop: `var(--hweb-listTweet-padding-block-start, ${e.componentDimensions.gutterVertical})`, paddingBottom: `var(--hweb-listTweet-padding-block-end, ${e.componentDimensions.gutterVertical})`, paddingStart: `var(--hweb-listTweet-padding-inline-start, ${e.componentDimensions.gutterHorizontal})`, paddingEnd: `var(--hweb-listTweet-padding-inline-end, ${e.componentDimensions.gutterHorizontal})` } }));
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                a = n(325686),
                o = n(530732),
                s = n(111677),
                i = n.n(s),
                l = n(731708),
                c = n(966582),
                d = n(392237);
            const p = i().d7e50a66,
                u = "INDIRECT",
                h = "NO_SPONSORSHIP",
                m = "ISSUE";
            class g extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: a, sponsorshipOrganization: o, sponsorshipOrganizationWebsite: s, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                d = s && n !== m ? r.createElement(l.ZP, { link: s, onClick: e }) : r.createElement(l.ZP, { color: "gray700", size: "subtext2" });
                            if (!o) return null;
                            const p = r.createElement(i().I18NFormatMessage, { $i18n: "e1e348dd" }, r.cloneElement(d, null, i().hdd29d51({ sponsorshipOrganization: o }))),
                                g = r.createElement(i().I18NFormatMessage, { $i18n: "c7dea0d1" }, r.cloneElement(d, null, i().b97f7079({ sponsorshipOrganization: o }))),
                                y = a ? r.createElement(i().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: a }, r.cloneElement(d, null, i().b02627a9({ sponsorshipOrganization: o }))) : null;
                            return r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, n === m ? p : c === h ? g : c === u ? y : p);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                a = n === m ? "issue_ad" : "political_ad";
                            return r.createElement(l.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(a), size: "subtext2", style: y.learnMore }, p);
                        });
                }
                render() {
                    const { promotedContent: e } = this.props;
                    if (!e.adMetadataContainer) return null;
                    const { disclaimerType: t } = e.adMetadataContainer,
                        n = c.Z.getDisclosureType(e);
                    return "POLITICAL" !== t && "ISSUE" !== t && "political" !== n && "issue" !== n ? null : r.createElement(r.Fragment, null, this._renderDisclaimerDetails(), this._renderLearnMoreLink());
                }
            }
            const y = d.default.create((e) => ({ learnMore: { alignSelf: "flex-start" } }));
            var b = n(378729);
            const f = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: s, onPromotedDisclaimerLearnMoreClick: i, onPromotedIndicatorClick: l, promotedContent: d, promotedContentAdvertiser: p, screenName: u, style: h, testID: m, withoutDisclaimerDetails: y } = e;
                if (!c.Z.isPromoted(d)) return null;
                let f = null;
                return !y && d && (f = r.createElement(g, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: s, onPromotedDisclaimerLearnMoreClick: i, promotedContent: d, screenName: u })), r.createElement(a.Z, { id: n, style: h, testID: m }, p && d ? r.createElement(o.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${p.screen_name}`, state: { promotedTweetState: d } }, onPress: l }, r.createElement(b.Z, { contentAuthorId: t, promotedContent: d })) : !!d && r.createElement(b.Z, { contentAuthorId: t, promotedContent: d }), f);
            };
        },
        466818: (e, t, n) => {
            n.d(t, { ZP: () => b });
            var r = n(202784),
                a = n(325686),
                o = n(487552),
                s = n(302752),
                i = n(183806),
                l = n(731708),
                c = n(950822),
                d = n(224162),
                p = n(392237);
            const u = r.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                h = (e) => (0, c.Z)("option", e);
            let m = 1;
            class g extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: n } = this.props,
                                { selectedIndex: r, value: a } = e.target;
                            t && t(a, r - (n ? 1 : 0));
                        }),
                        (this._handleBlur = (e) => {
                            const { onBlur: t } = this.props;
                            this.setState({ isFocused: !1 }), t && t();
                        }),
                        (this._handleFocus = (e) => {
                            const { onFocus: t } = this.props;
                            this.setState({ isFocused: !0 }), t && t();
                        }),
                        (this._id = `SELECTOR_${m}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (m += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: c, helperText: m, options: g, style: b, testID: f, value: C, withEmptyOption: v } = this.props,
                        { isFocused: x } = this.state,
                        _ = l.ZP.getLanguage(),
                        E = void 0 === c ? !!n : c,
                        w = new Set();
                    n && w.add(this._errorID), e && w.add(e), m && w.add(this._helperID);
                    const S = w.size ? [...w].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === _ ? p.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(_) ? p.default.theme.fontFamilies.rtl : p.default.theme.fontFamilies.normal;
                            return r.createElement(
                                a.Z,
                                { style: [i.Z.border, y.container, t && i.Z.disabled, x && i.Z.focusedBorderValid, E && i.Z.invalidBorderColor, x && E && i.Z.focusedBorderInvalid, b] },
                                this._renderLabel(),
                                r.createElement(
                                    u,
                                    { "aria-describedby": S, "aria-invalid": E, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [y.select, { fontFamily: l }, t && i.Z.disabled], testID: f || "", value: C },
                                    v ? r.createElement(h, { disabled: !0, style: y.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: n, value: a } = e;
                                        return r.createElement(h, { disabled: t, key: `${n}-${a}`, style: y.option, value: a }, n);
                                    }),
                                ),
                                r.createElement(o.default, { style: [y.dropdownCaret, x && i.Z.validColor, !(!c && !n) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        E && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: a } = this.state;
                    return r.createElement(l.ZP, { color: t || e ? "red500" : a ? "primary" : "gray700", id: this._labelID, role: "label", style: y.label }, n);
                }
                _renderHelperText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "gray700", id: this._helperID, style: y.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(a.Z, { "aria-live": "polite" }, r.createElement(l.ZP, { color: "red500", id: this._errorID, style: y.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const y = p.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                b = g;
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                a = n(325686),
                o = n(731708),
                s = n(891198),
                i = n(280278),
                l = n(392237);
            const c = "subtext1",
                d = r.createContext({ onMedia: !1 });
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, s.Gb)(e) !== (0, s.wl)(e) ? { label: (0, s.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: a } = this.props;
                    return r.createElement(o.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: a }, r.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (p.Group = (e) =>
                r.createElement(
                    a.Z,
                    { style: [u.row, e.style] },
                    r.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => r.createElement(a.Z, { key: t, style: t < n.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => r.createElement(d.Consumer, null, ({ onMedia: n }) => r.createElement(o.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: n, style: a, weight: s = "bold" }) => r.createElement(d.Consumer, null, ({ onMedia: l }) => (e ? r.createElement(i.ZP, { children: t, count: n, size: c, style: a, weight: s }) : r.createElement(o.ZP, { children: t, color: l ? "white" : "text", size: c, style: a, weight: s }))));
            const u = l.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = p;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => S });
            var r = n(807896),
                a = n(202784),
                o = n(194504),
                s = n(235902),
                i = n(392237),
                l = n(325686),
                c = n(111677),
                d = n.n(c),
                p = n(912021),
                u = n(516951),
                h = n(731708),
                m = n(310088),
                g = n(175993),
                y = n(58881),
                b = n(530732);
            const f = d().d2414d31,
                C = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class x extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: r, state: a } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: r, method: "push", state: { ...a, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, r) => {
                            const a = i.default.theme.colors.text,
                                o = i.default.theme.colors.gray700;
                            return n || r ? (e || t ? a : o) : e ? a : o;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: r, children: o, color: s, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: x, style: E, to: w } = this.props,
                        { location: S } = this.state,
                        D = w ? this._getMemoizedLink(w, x) : void 0,
                        Z = c ? c(w) : S?.pathname === D?.pathname,
                        k = y.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: p ? _.pillHoverStyle.backgroundColor : void 0 }),
                        I = g ? "medium" : Z ? "bold" : "medium";
                    return a.createElement(b.Z, { "aria-label": t, "aria-selected": Z, focusable: !!Z, interactiveStyles: k, link: D, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(p ? [_.pillStyle] : [_.link]), ...(p && Z ? [_.pillActiveStyle] : []), d ? (p ? _.compactPill : _.compactLink) : null, u ? _.roundedRect : null, E], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => a.createElement(l.Z, { style: p && _.flexGrow }, a.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [_.text, { color: this._getTextColor(Z, c, g, p) }, d && _.compactText, g && t && _.focusedText, p && _.pillTextStyle, p && Z && _.pillActiveTextStyle, p && c && _.pillHoverTextStyle], weight: I }, e && a.createElement(e, { style: _.icon }), o, g || p ? null : a.createElement(l.Z, { style: Z && [_.border, { backgroundColor: i.default.theme.colors[s] }] })), n ? a.createElement(m.Z, { count: n, standalone: !0, style: [_.badge, n >= 10 && _.multiDigitBadge, n >= 20 && _.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: f, withBorder: !1 }) : r ? a.createElement(m.Z, { pip: !0, standalone: !0, style: _.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (x.contextType = g.Z), (x.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const _ = i.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                E = x,
                w = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                S = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: i, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = s.ZP.useProps(),
                        m = h() && !i,
                        g = a.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: o, ...s }, c) => {
                                    const d = m ? [w.linkRedesign, 0 === c && w.firstLinkRedesign, e && 0 === c && w.withNoPaddingStart] : void 0;
                                    return a.createElement(E, (0, r.Z)({ viewType: o }, s, { isCompact: n, isPillLink: i, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, n, i, l, m, c],
                        );
                    return a.createElement(o.Z, { "aria-label": t, buttonsContainerStyle: i && w.gap, childrenStyle: !m && w.flexGrow, key: u, style: [i ? null : w.segmentedControl, m && w.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-e16dbf02.1b0041ba.js.map
