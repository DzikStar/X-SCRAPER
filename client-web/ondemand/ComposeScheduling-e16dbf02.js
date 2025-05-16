"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-e16dbf02"],
    {
        495232: (e, t, n) => {
            n.d(t, { Z: () => a });
            n(202784);
            const a = {
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
            var a = n(202784),
                r = n(325686),
                s = n(332920),
                o = n.n(s),
                i = n(97043),
                l = n(323265),
                c = n(731708),
                d = n(154003),
                p = n(950822),
                u = n(586855),
                h = n(855488),
                m = n(466818),
                g = n(392237);
            const b = o().jf83d092,
                y = o().af4abf20,
                f = o().b871f280;
            let C = 1;
            class v extends a.Component {
                constructor(e) {
                    super(e),
                        (this._showCalendarPicker = () => {
                            this._nativeCalendarRef?.showPicker?.();
                        }),
                        (this._setNativeCalendarRef = (e) => {
                            this._nativeCalendarRef = e;
                        }),
                        (this._handleSelectorChange = (e, t) => {
                            const { day: n, month: a, year: r } = this.props,
                                s = { day: n, month: a, year: r, [e]: parseInt(t, 10) };
                            this.props.onChange(s);
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
                    const { day: t, maxSelectableYear: n, minSelectableYear: a, month: r, year: s } = e;
                    (this._errorID = `DATE_INPUT_${C}_ERROR`), (this._monthOptions = u.dX()), (this._nativeDefaultValue = u.ww(t, r, s)), (this._nativeMaxDate = u.ww(31, 12, n)), (this._nativeMinDate = u.ww(1, 1, a)), (C += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: n, onChange: a, year: r } = this.props,
                        s = n && n !== e.month,
                        o = r && r !== e.year;
                    if (s || o) {
                        u
                            .DD(n, r)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || a({ month: n, year: r, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        n = l.ZP.isMobileOS() && !t;
                    return a.createElement(r.Z, null, n ? this._renderNativeDateInput() : this._renderSelectors(), e ? a.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: n, errors: s = {}, label: o, autofocus: i, monthSelectorTestID: l, daySelectorTestID: c, yearSelectorTestID: h, style: g, minSelectableYear: C, maxSelectableYear: v, withCalendar: w, hideDay: x, disabled: D } = this.props,
                        Z = u.DD(t, n),
                        S = u.Zj(C, v, e, t);
                    return a.createElement(r.Z, { "aria-label": o, role: "group", style: [E.selectorsContainer, g] }, a.createElement(m.ZP, { "aria-describedby": s.month ? this._errorID : void 0, autofocus: i, disabled: D, hasError: s.month, label: y, onChange: this._handleMonthChange, options: this._monthOptions, style: E.monthSelector, testID: l, value: t ? `${t}` : "", withEmptyOption: !0 }), x ? null : a.createElement(m.ZP, { "aria-describedby": s.day ? this._errorID : void 0, disabled: D, hasError: s.day, label: b, onChange: this._handleDayChange, options: Z, style: E.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), a.createElement(m.ZP, { "aria-describedby": s.year ? this._errorID : void 0, disabled: D, hasError: s.year, label: f, onChange: this._handleYearChange, options: S, style: E.yearSelector, testID: h, value: n ? `${n}` : "", withEmptyOption: !0 }), w && a.createElement(r.Z, { role: "label", style: E.calendarLabel }, a.createElement(d.ZP, { "aria-label": "Calendar", icon: _, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, p.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: o, onChange: this._handleDateChange, style: E.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: u.ww(e, t, n) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return a.createElement(h.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: E.dateInputRoot, type: "date" });
                }
            }
            const _ = a.createElement(i.default, null),
                E = g.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...g.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, n) => {
            n.d(t, { DD: () => S, ZP: () => I, Zj: () => D, dX: () => x, ww: () => k });
            var a = n(332920),
                r = n.n(a),
                s = n(822240);
            const o = 1,
                i = 2,
                l = 3,
                c = 4,
                d = 5,
                p = 6,
                u = 7,
                h = 8,
                m = 9,
                g = 10,
                b = 11,
                y = 12,
                f = { [o]: { label: r().hac89ab0, numDays: 31 }, [i]: { label: r().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [l]: { label: r().b56920fa, numDays: 31 }, [c]: { label: r().b1a0f1ec, numDays: 30 }, [d]: { label: r().daf779c8, numDays: 31 }, [p]: { label: r().c6ad074e, numDays: 30 }, [u]: { label: r().f1db106c, numDays: 31 }, [h]: { label: r().i4e80b7a, numDays: 31 }, [m]: { label: r().efa6cc1e, numDays: 30 }, [g]: { label: r().f40a0cbe, numDays: 31 }, [b]: { label: r().ac74a31c, numDays: 30 }, [y]: { label: r().i6c1e4b2, numDays: 31 } },
                C = (e) => ({ label: `${e}`, value: `${e}` }),
                v = (0, s.Z)(1, 29).map(C),
                _ = (0, s.Z)(1, 30).map(C),
                E = (0, s.Z)(1, 31).map(C),
                w = (0, s.Z)(1, 32).map(C),
                x = () => Object.keys(f).map((e) => ({ label: f[e].label, value: e })),
                D = (e = 1, t, n, a) => {
                    const r = t || new Date(Date.now()).getFullYear();
                    return (0, s.Z)(e, r + 1)
                        .reverse()
                        .filter((e) => (2 === a && 29 === n ? Z(e) : e))
                        .map(C);
                },
                Z = (e) => 1 === new Date(e, 1, 29).getMonth(),
                S = (e, t) => {
                    if (!e) return w;
                    switch (2 === e && (!t || (t && Z(t))) ? f[e].numDaysLeapYear : f[e].numDays) {
                        case 28:
                            return v;
                        case 29:
                            return _;
                        case 30:
                            return E;
                        default:
                            return w;
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
            var a = n(202784),
                r = n(476984),
                s = n.n(r),
                o = n(143778),
                i = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                u = "none";
            class h extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: s, loadingMessage: o, onRequestRetry: d, render: h, renderFailure: m, retryMessage: g, retryable: b } = this.props;
                    switch (r) {
                        case c:
                            return b ? a.createElement(i.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : n ? a.createElement(l.m, { failureMessage: n }) : m();
                        case p:
                            return a.createElement(l.J, { "aria-label": e, color: t, loadingMessage: o });
                        case u:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => g });
            var a = n(202784),
                r = n(325686),
                s = n(332920),
                o = n.n(s),
                i = n(815858),
                l = n(731708),
                c = n(642153),
                d = n(530732),
                p = n(392237);
            const u = o().a35a5b10,
                h = o().fc8cd112,
                m = (e) => a.createElement(l.ZP, null, e);
            class g extends a.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: s, userScreenName: o, withFacepile: p } = this.props,
                        h = this._renderMessage();
                    return a.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? a.createElement(d.Z, { "aria-label": u, interactiveStyles: null, link: o ? ((m = o), `/${m}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => a.createElement(r.Z, { style: b.content }, !e && p ? a.createElement(c.Z, { userAvatarUrls: t }) : null, a.createElement(l.ZP, { color: "gray700", size: "subtext2", style: [!e && b.message, (n || i) && !!o && b.underline, s] }, e && p ? a.createElement(c.Z, { style: b.inlineFacepile, userAvatarUrls: t }) : null, h))) : a.createElement(r.Z, { style: b.content }, a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, h)));
                    var m;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : h;
                }
                _renderOneUsername(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "c9e6167d" }, m(e[0]));
                }
                _renderTwoUsernames(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "ha91d1eb" }, m(e[0]), m(e[1]));
                }
                _renderThreeUsernames(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "f1069f9b" }, m(e[0]), m(e[1]), m(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return a.createElement(o().I18NFormatMessage, { $i18n: "e8404c1f" }, m(e[0]), m(e[1]), n);
                }
            }
            g.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const b = p.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        591978: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                r = n(325686),
                s = n(872405),
                o = n(638009),
                i = n(952428),
                l = n(470397),
                c = n(392237),
                d = n(418462),
                p = n(103737),
                u = n(782261);
            function h({ role: e = "article", link: t, onBlur: n, onFocus: c, onPress: p, renderMedia: h = m, renderReplyContext: b, renderText: y, renderTimestamp: f, renderUserAvatar: C, renderUserName: v, staticLinkConfig: _, tweet: E }) {
                const { LinkConfigProvider: w, a11yIds: x, props: D } = (0, d.a)({ role: e, link: t, onBlur: n, onFocus: c, onPress: p, renderMedia: h, renderReplyContext: b, renderText: y, renderTimestamp: f, renderUserAvatar: C, renderUserName: v, staticLinkConfig: _, tweet: E }),
                    Z = u.Z.getOriginalTweet(E),
                    S = u.Z.hasMedia(Z),
                    k = a.useContext(o.ZP),
                    I = Boolean(D.link),
                    P = D.renderUserAvatar();
                return a.createElement(
                    w,
                    null,
                    a.createElement(
                        i.Z,
                        { "aria-labelledby": [x.username, x.avatar, x.timestamp, x.replyContext, x.text, x.media].join(" "), focusable: I, link: D.link ? k.withAnchorless(D.link) : void 0, onBlur: () => D.onBlur?.(), onFocus: () => D.onFocus?.(), onPress: (e) => D.onPress?.(e), role: D.role, style: g.root, withInteractiveStyling: I },
                        a.createElement(s.Z, { avatarCell: P || void 0, cellStyle: g.cellStyle, style: g.avatarRow }, a.createElement(l.Z, null, D.renderUserName(), D.renderTimestamp()), D.renderReplyContext(), D.renderText({ size: "body", withCardLinks: !0, withQuoteLinks: !0 })),
                        (() => {
                            if (!S) return null;
                            const e = D.renderMedia({ cacheLocationKey: "listTweet", displayMediaAttribution: !0, preventPlayback: !0, containerAspectRatio: 1, shouldShowAltLabelAlways: !1, singleImageMaxAspectRatio: 1, singleImageMinAspectRatio: 1, videoAspectRatio: 1, withLink: !1, withMediaTagsIcon: !1 });
                            return e ? a.createElement(r.Z, { style: g.media }, e) : null;
                        })(),
                    ),
                );
            }
            function m(e) {
                return a.createElement(p.Z, e);
            }
            (h.Media = p.Z), (h.ReplyContext = d.q.ReplyContext), (h.Text = d.q.Text), (h.Timestamp = d.q.Timestamp), (h.UserAvatar = d.q.UserAvatar), (h.UserName = d.q.UserName);
            const g = c.default.create((e) => ({ avatarRow: { alignItems: "flex-start", flex: 1, flexShrink: 1 }, cellStyle: { flexGrow: 1 }, media: { width: `calc(${c.default.theme.spaces.space12} * 10)`, marginStart: e.spaces.space12 }, root: { flexDirection: "row", paddingTop: `var(--hweb-listTweet-padding-block-start, ${e.componentDimensions.gutterVertical})`, paddingBottom: `var(--hweb-listTweet-padding-block-end, ${e.componentDimensions.gutterVertical})`, paddingStart: `var(--hweb-listTweet-padding-inline-start, ${e.componentDimensions.gutterHorizontal})`, paddingEnd: `var(--hweb-listTweet-padding-inline-end, ${e.componentDimensions.gutterHorizontal})` } }));
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => f });
            var a = n(202784),
                r = n(325686),
                s = n(530732),
                o = n(332920),
                i = n.n(o),
                l = n(731708),
                c = n(966582),
                d = n(392237);
            const p = i().d7e50a66,
                u = "INDIRECT",
                h = "NO_SPONSORSHIP",
                m = "ISSUE";
            class g extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: r, sponsorshipOrganization: s, sponsorshipOrganizationWebsite: o, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                d = o && n !== m ? a.createElement(l.ZP, { link: o, onClick: e }) : a.createElement(l.ZP, { color: "gray700", size: "subtext2" });
                            if (!s) return null;
                            const p = a.createElement(i().I18NFormatMessage, { $i18n: "e1e348dd" }, a.cloneElement(d, null, i().hdd29d51({ sponsorshipOrganization: s }))),
                                g = a.createElement(i().I18NFormatMessage, { $i18n: "c7dea0d1" }, a.cloneElement(d, null, i().b97f7079({ sponsorshipOrganization: s }))),
                                b = r ? a.createElement(i().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: r }, a.cloneElement(d, null, i().b02627a9({ sponsorshipOrganization: s }))) : null;
                            return a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, n === m ? p : c === h ? g : c === u ? b : p);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                r = n === m ? "issue_ad" : "political_ad";
                            return a.createElement(l.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(r), size: "subtext2", style: b.learnMore }, p);
                        });
                }
                render() {
                    const { promotedContent: e } = this.props;
                    if (!e.adMetadataContainer) return null;
                    const { disclaimerType: t } = e.adMetadataContainer,
                        n = c.Z.getDisclosureType(e);
                    return "POLITICAL" !== t && "ISSUE" !== t && "political" !== n && "issue" !== n ? null : a.createElement(a.Fragment, null, this._renderDisclaimerDetails(), this._renderLearnMoreLink());
                }
            }
            const b = d.default.create((e) => ({ learnMore: { alignSelf: "flex-start" } }));
            var y = n(378729);
            const f = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: o, onPromotedDisclaimerLearnMoreClick: i, onPromotedIndicatorClick: l, promotedContent: d, promotedContentAdvertiser: p, screenName: u, style: h, testID: m, withoutDisclaimerDetails: b } = e;
                if (!c.Z.isPromoted(d)) return null;
                let f = null;
                return !b && d && (f = a.createElement(g, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: o, onPromotedDisclaimerLearnMoreClick: i, promotedContent: d, screenName: u })), a.createElement(r.Z, { id: n, style: h, testID: m }, p && d ? a.createElement(s.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${p.screen_name}`, state: { promotedTweetState: d } }, onPress: l }, a.createElement(y.Z, { contentAuthorId: t, promotedContent: d })) : !!d && a.createElement(y.Z, { contentAuthorId: t, promotedContent: d }), f);
            };
        },
        466818: (e, t, n) => {
            n.d(t, { ZP: () => y });
            var a = n(202784),
                r = n(325686),
                s = n(487552),
                o = n(302752),
                i = n(183806),
                l = n(731708),
                c = n(950822),
                d = n(224162),
                p = n(392237);
            const u = a.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                h = (e) => (0, c.Z)("option", e);
            let m = 1;
            class g extends a.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = a.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: n } = this.props,
                                { selectedIndex: a, value: r } = e.target;
                            t && t(r, a - (n ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: c, helperText: m, options: g, style: y, testID: f, value: C, withEmptyOption: v } = this.props,
                        { isFocused: _ } = this.state,
                        E = l.ZP.getLanguage(),
                        w = void 0 === c ? !!n : c,
                        x = new Set();
                    n && x.add(this._errorID), e && x.add(e), m && x.add(this._helperID);
                    const D = x.size ? [...x].join(" ") : void 0;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === E ? p.default.theme.fontFamilies.japan : "rtl" === e || o.Z.isLocaleRTL(E) ? p.default.theme.fontFamilies.rtl : p.default.theme.fontFamilies.normal;
                            return a.createElement(
                                r.Z,
                                { style: [i.Z.border, b.container, t && i.Z.disabled, _ && i.Z.focusedBorderValid, w && i.Z.invalidBorderColor, _ && w && i.Z.focusedBorderInvalid, y] },
                                this._renderLabel(),
                                a.createElement(
                                    u,
                                    { "aria-describedby": D, "aria-invalid": w, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [b.select, { fontFamily: l }, t && i.Z.disabled], testID: f || "", value: C },
                                    v ? a.createElement(h, { disabled: !0, style: b.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: n, value: r } = e;
                                        return a.createElement(h, { disabled: t, key: `${n}-${r}`, style: b.option, value: r }, n);
                                    }),
                                ),
                                a.createElement(s.default, { style: [b.dropdownCaret, _ && i.Z.validColor, !(!c && !n) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        w && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: r } = this.state;
                    return a.createElement(l.ZP, { color: t || e ? "red500" : r ? "primary" : "gray700", id: this._labelID, role: "label", style: b.label }, n);
                }
                _renderHelperText() {
                    return a.createElement(r.Z, { "aria-live": "polite" }, a.createElement(l.ZP, { color: "gray700", id: this._helperID, style: b.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return a.createElement(r.Z, { "aria-live": "polite" }, a.createElement(l.ZP, { color: "red500", id: this._errorID, style: b.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const b = p.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                y = g;
        },
        98538: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                r = n(325686),
                s = n(731708),
                o = n(891198),
                i = n(280278),
                l = n(392237);
            const c = "subtext1",
                d = a.createContext({ onMedia: !1 });
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._getHoverLabel = () => {
                            const { count: e } = this.props;
                            if (!e) return;
                            return (0, o.Gb)(e) !== (0, o.wl)(e) ? { label: (0, o.Gb)(e) } : void 0;
                        });
                }
                render() {
                    const { children: e, link: t, onMedia: n, onPress: r } = this.props;
                    return a.createElement(s.ZP, { color: n ? "white" : "text", hoverLabel: this._getHoverLabel(), link: t, onClick: r }, a.createElement(d.Provider, { value: { onMedia: n } }, e));
                }
            }
            (p.Group = (e) =>
                a.createElement(
                    r.Z,
                    { style: [u.row, e.style] },
                    a.Children.toArray(e.children)
                        .filter(Boolean)
                        .map((e, t, n) => a.createElement(r.Z, { key: t, style: t < n.length - 1 && u.groupItemNonLast }, e)),
                )),
                (p.Label = ({ children: e, style: t }) => a.createElement(d.Consumer, null, ({ onMedia: n }) => a.createElement(s.ZP, { children: e, color: n ? "white" : "gray700", size: c, style: t }))),
                (p.Value = ({ animated: e, children: t, count: n, style: r, weight: o = "bold" }) => a.createElement(d.Consumer, null, ({ onMedia: l }) => (e ? a.createElement(i.ZP, { children: t, count: n, size: c, style: r, weight: o }) : a.createElement(s.ZP, { children: t, color: l ? "white" : "text", size: c, style: r, weight: o }))));
            const u = l.default.create((e) => ({ row: { flexDirection: "row", flexWrap: "wrap", flex: 1 }, groupItemNonLast: { marginEnd: e.spaces.space20 } })),
                h = p;
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => D });
            var a = n(807896),
                r = n(202784),
                s = n(194504),
                o = n(235902),
                i = n(392237),
                l = n(325686),
                c = n(332920),
                d = n.n(c),
                p = n(912021),
                u = n(516951),
                h = n(731708),
                m = n(310088),
                g = n(175993),
                b = n(58881),
                y = n(530732);
            const f = d().d2414d31,
                C = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class _ extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, p.Z)((e, t) => {
                            const { pathname: n, query: a, state: r } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: a, method: "push", state: { ...r, lockScroll: t } };
                        })),
                        (this._unlisten = u.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, a) => {
                            const r = i.default.theme.colors.text,
                                s = i.default.theme.colors.gray700;
                            return n || a ? (e || t ? r : s) : e ? r : s;
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
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: a, children: s, color: o, isActive: c, isCompact: d, isPillLink: p, isRoundedRect: u, isWebRedesign: g, retainScrollPosition: _, style: w, to: x } = this.props,
                        { location: D } = this.state,
                        Z = x ? this._getMemoizedLink(x, _) : void 0,
                        S = c ? c(x) : D?.pathname === Z?.pathname,
                        k = b.Z.generate({ backgroundColor: "transparent", color: i.default.theme.colors.text, insetFocusRing: !0 }),
                        I = g ? "medium" : S ? "bold" : "medium";
                    return r.createElement(y.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: k, link: Z, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [p ? E.pill : E.link, p && S ? E.active : null, d ? (p ? E.compactPill : E.compactLink) : null, u ? E.roundedRect : null, w], withoutInteractiveStyles: g || p }, ({ isFocused: t, isHovered: c }) => r.createElement(l.Z, { style: p && E.flexGrow }, r.createElement(h.ZP, { size: g ? "headline2" : void 0, style: [E.text, { color: this._getTextColor(S, c, g, p) }, d && E.compactText, g && t && E.focusedText], weight: I }, e && r.createElement(e, { style: E.icon }), s, g || p ? null : r.createElement(l.Z, { style: S && [E.border, { backgroundColor: i.default.theme.colors[o] }] })), n ? r.createElement(m.Z, { count: n, standalone: !0, style: [E.badge, n >= 10 && E.multiDigitBadge, n >= 20 && E.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: f, withBorder: !1 }) : a ? r.createElement(m.Z, { pip: !0, standalone: !0, style: E.badgePip, textColor: "red500", unreadCountLabel: C, withBorder: !1 }) : null));
                }
            }
            (_.contextType = g.Z), (_.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const E = i.default.create((e) => ({
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
                    pill: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray200, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                w = _,
                x = i.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                D = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: i, isRoundedRect: l, links: c, style: d, visibleItemIndex: p }) => {
                    const u = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: h } = o.ZP.useProps(),
                        m = h() && !i,
                        g = r.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: s, ...o }, c) => {
                                    const d = m ? [x.linkRedesign, 0 === c && x.firstLinkRedesign, e && 0 === c && x.withNoPaddingStart] : void 0;
                                    return r.createElement(w, (0, a.Z)({ viewType: s }, o, { isCompact: n, isPillLink: i, isRoundedRect: l, isWebRedesign: m, style: d }), t);
                                }),
                            [e, n, i, l, m, c],
                        );
                    return r.createElement(s.Z, { "aria-label": t, buttonsContainerStyle: i && x.gap, childrenStyle: !m && x.flexGrow, key: u, style: [i ? null : x.segmentedControl, m && x.leftAligned, d], visibleItemIndex: p }, g);
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-e16dbf02.2b54e97a.js.map
