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
                s = n(111677),
                o = n.n(s),
                i = n(97043),
                l = n(323265),
                c = n(731708),
                d = n(154003),
                m = n(950822),
                u = n(586855),
                p = n(855488),
                h = n(466818),
                y = n(392237);
            const g = o().jf83d092,
                b = o().af4abf20,
                C = o().b871f280;
            let f = 1;
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
                    (this._errorID = `DATE_INPUT_${f}_ERROR`), (this._monthOptions = u.dX()), (this._nativeDefaultValue = u.ww(t, r, s)), (this._nativeMaxDate = u.ww(31, 12, n)), (this._nativeMinDate = u.ww(1, 1, a)), (f += 1);
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
                    const { day: e, month: t, year: n, errors: s = {}, label: o, autofocus: i, monthSelectorTestID: l, daySelectorTestID: c, yearSelectorTestID: p, style: y, minSelectableYear: f, maxSelectableYear: v, withCalendar: E, hideDay: _, disabled: I } = this.props,
                        Z = u.DD(t, n),
                        S = u.Zj(f, v, e, t);
                    return a.createElement(r.Z, { "aria-label": o, role: "group", style: [D.selectorsContainer, y] }, a.createElement(h.ZP, { "aria-describedby": s.month ? this._errorID : void 0, autofocus: i, disabled: I, hasError: s.month, label: b, onChange: this._handleMonthChange, options: this._monthOptions, style: D.monthSelector, testID: l, value: t ? `${t}` : "", withEmptyOption: !0 }), _ ? null : a.createElement(h.ZP, { "aria-describedby": s.day ? this._errorID : void 0, disabled: I, hasError: s.day, label: g, onChange: this._handleDayChange, options: Z, style: D.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), a.createElement(h.ZP, { "aria-describedby": s.year ? this._errorID : void 0, disabled: I, hasError: s.year, label: C, onChange: this._handleYearChange, options: S, style: D.yearSelector, testID: p, value: n ? `${n}` : "", withEmptyOption: !0 }), E && a.createElement(r.Z, { role: "label", style: D.calendarLabel }, a.createElement(d.ZP, { "aria-label": "Calendar", icon: w, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, m.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: o, onChange: this._handleDateChange, style: D.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: u.ww(e, t, n) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return a.createElement(p.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: D.dateInputRoot, type: "date" });
                }
            }
            const w = a.createElement(i.default, null),
                D = y.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...y.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, n) => {
            n.d(t, { DD: () => S, ZP: () => M, Zj: () => I, dX: () => _, ww: () => x });
            var a = n(111677),
                r = n.n(a),
                s = n(822240);
            const o = 1,
                i = 2,
                l = 3,
                c = 4,
                d = 5,
                m = 6,
                u = 7,
                p = 8,
                h = 9,
                y = 10,
                g = 11,
                b = 12,
                C = { [o]: { label: r().hac89ab0, numDays: 31 }, [i]: { label: r().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [l]: { label: r().b56920fa, numDays: 31 }, [c]: { label: r().b1a0f1ec, numDays: 30 }, [d]: { label: r().daf779c8, numDays: 31 }, [m]: { label: r().c6ad074e, numDays: 30 }, [u]: { label: r().f1db106c, numDays: 31 }, [p]: { label: r().i4e80b7a, numDays: 31 }, [h]: { label: r().efa6cc1e, numDays: 30 }, [y]: { label: r().f40a0cbe, numDays: 31 }, [g]: { label: r().ac74a31c, numDays: 30 }, [b]: { label: r().i6c1e4b2, numDays: 31 } },
                f = (e) => ({ label: `${e}`, value: `${e}` }),
                v = (0, s.Z)(1, 29).map(f),
                w = (0, s.Z)(1, 30).map(f),
                D = (0, s.Z)(1, 31).map(f),
                E = (0, s.Z)(1, 32).map(f),
                _ = () => Object.keys(C).map((e) => ({ label: C[e].label, value: e })),
                I = (e = 1, t, n, a) => {
                    const r = t || new Date(Date.now()).getFullYear();
                    return (0, s.Z)(e, r + 1)
                        .reverse()
                        .filter((e) => (2 === a && 29 === n ? Z(e) : e))
                        .map(f);
                },
                Z = (e) => 1 === new Date(e, 1, 29).getMonth(),
                S = (e, t) => {
                    if (!e) return E;
                    switch (2 === e && (!t || (t && Z(t))) ? C[e].numDaysLeapYear : C[e].numDays) {
                        case 28:
                            return v;
                        case 29:
                            return w;
                        case 30:
                            return D;
                        default:
                            return E;
                    }
                },
                x = (e, t, n) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof n) {
                        return `${n}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const M = {
                getFormattedDateValue: x,
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
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(476984),
                s = n.n(r),
                o = n(143778),
                i = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                m = "loading",
                u = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: s, loadingMessage: o, onRequestRetry: d, render: p, renderFailure: h, retryMessage: y, retryable: g } = this.props;
                    switch (r) {
                        case c:
                            return g ? a.createElement(i.Z, { icon: s, onRequestRetry: d, retryMessage: y }) : n ? a.createElement(l.m, { failureMessage: n }) : h();
                        case m:
                            return a.createElement(l.J, { "aria-label": e, color: t, loadingMessage: o });
                        case u:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: o.Z, retryable: !0 };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                s = n(111677),
                o = n.n(s),
                i = n(815858),
                l = n(731708),
                c = n(642153),
                d = n(530732),
                m = n(392237);
            const u = o().a35a5b10,
                p = o().fc8cd112,
                h = (e) => a.createElement(l.ZP, null, e);
            class y extends a.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: s, userScreenName: o, withFacepile: m } = this.props,
                        p = this._renderMessage();
                    return a.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? a.createElement(d.Z, { "aria-label": u, interactiveStyles: null, link: o ? ((h = o), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => a.createElement(r.Z, { style: g.content }, !e && m ? a.createElement(c.Z, { userAvatarUrls: t }) : null, a.createElement(l.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || i) && !!o && g.underline, s] }, e && m ? a.createElement(c.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, p))) : a.createElement(r.Z, { style: g.content }, a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, p)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : p;
                }
                _renderOneUsername(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return a.createElement(o().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return a.createElement(o().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
                }
            }
            y.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const g = m.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        591978: (e, t, n) => {
            n.d(t, { Z: () => p });
            var a = n(202784),
                r = n(325686),
                s = n(872405),
                o = n(638009),
                i = n(952428),
                l = n(470397),
                c = n(392237),
                d = n(418462),
                m = n(103737),
                u = n(782261);
            function p({ role: e = "article", link: t, onBlur: n, onFocus: c, onPress: m, renderMedia: p = h, renderReplyContext: g, renderText: b, renderTimestamp: C, renderUserAvatar: f, renderUserName: v, staticLinkConfig: w, tweet: D }) {
                const { LinkConfigProvider: E, a11yIds: _, props: I } = (0, d.a)({ role: e, link: t, onBlur: n, onFocus: c, onPress: m, renderMedia: p, renderReplyContext: g, renderText: b, renderTimestamp: C, renderUserAvatar: f, renderUserName: v, staticLinkConfig: w, tweet: D }),
                    Z = u.Z.getOriginalTweet(D),
                    S = u.Z.hasMedia(Z),
                    x = a.useContext(o.ZP),
                    M = Boolean(I.link),
                    k = I.renderUserAvatar();
                return a.createElement(
                    E,
                    null,
                    a.createElement(
                        i.Z,
                        { "aria-labelledby": [_.username, _.avatar, _.timestamp, _.replyContext, _.text, _.media].join(" "), focusable: M, link: I.link ? x.withAnchorless(I.link) : void 0, onBlur: () => I.onBlur?.(), onFocus: () => I.onFocus?.(), onPress: (e) => I.onPress?.(e), role: I.role, style: y.root, withInteractiveStyling: M },
                        a.createElement(s.Z, { avatarCell: k || void 0, cellStyle: y.cellStyle, style: y.avatarRow }, a.createElement(l.Z, null, I.renderUserName(), I.renderTimestamp()), I.renderReplyContext(), I.renderText({ size: "body", withCardLinks: !0, withQuoteLinks: !0 })),
                        (() => {
                            if (!S) return null;
                            const e = I.renderMedia({ cacheLocationKey: "listTweet", displayMediaAttribution: !0, preventPlayback: !0, containerAspectRatio: 1, shouldShowAltLabelAlways: !1, singleImageMaxAspectRatio: 1, singleImageMinAspectRatio: 1, videoAspectRatio: 1, withLink: !1, withMediaTagsIcon: !1 });
                            return e ? a.createElement(r.Z, { style: y.media }, e) : null;
                        })(),
                    ),
                );
            }
            function h(e) {
                return a.createElement(m.Z, e);
            }
            (p.Media = m.Z), (p.ReplyContext = d.q.ReplyContext), (p.Text = d.q.Text), (p.Timestamp = d.q.Timestamp), (p.UserAvatar = d.q.UserAvatar), (p.UserName = d.q.UserName);
            const y = c.default.create((e) => ({ avatarRow: { alignItems: "flex-start", flex: 1, flexShrink: 1 }, cellStyle: { flexGrow: 1 }, media: { width: `calc(${c.default.theme.spaces.space12} * 10)`, marginStart: e.spaces.space12 }, root: { flexDirection: "row", paddingTop: `var(--hweb-listTweet-padding-block-start, ${e.componentDimensions.gutterVertical})`, paddingBottom: `var(--hweb-listTweet-padding-block-end, ${e.componentDimensions.gutterVertical})`, paddingStart: `var(--hweb-listTweet-padding-inline-start, ${e.componentDimensions.gutterHorizontal})`, paddingEnd: `var(--hweb-listTweet-padding-inline-end, ${e.componentDimensions.gutterHorizontal})` } }));
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => C });
            var a = n(202784),
                r = n(325686),
                s = n(530732),
                o = n(111677),
                i = n.n(o),
                l = n(731708),
                c = n(966582),
                d = n(392237);
            const m = i().d7e50a66,
                u = "INDIRECT",
                p = "NO_SPONSORSHIP",
                h = "ISSUE";
            class y extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: r, sponsorshipOrganization: s, sponsorshipOrganizationWebsite: o, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                d = o && n !== h ? a.createElement(l.ZP, { link: o, onClick: e }) : a.createElement(l.ZP, { color: "gray700", size: "subtext2" });
                            if (!s) return null;
                            const m = a.createElement(i().I18NFormatMessage, { $i18n: "e1e348dd" }, a.cloneElement(d, null, i().hdd29d51({ sponsorshipOrganization: s }))),
                                y = a.createElement(i().I18NFormatMessage, { $i18n: "c7dea0d1" }, a.cloneElement(d, null, i().b97f7079({ sponsorshipOrganization: s }))),
                                g = r ? a.createElement(i().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: r }, a.cloneElement(d, null, i().b02627a9({ sponsorshipOrganization: s }))) : null;
                            return a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, n === h ? m : c === p ? y : c === u ? g : m);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                r = n === h ? "issue_ad" : "political_ad";
                            return a.createElement(l.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(r), size: "subtext2", style: g.learnMore }, m);
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
            const g = d.default.create((e) => ({ learnMore: { alignSelf: "flex-start" } }));
            var b = n(378729);
            const C = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: o, onPromotedDisclaimerLearnMoreClick: i, onPromotedIndicatorClick: l, promotedContent: d, promotedContentAdvertiser: m, screenName: u, style: p, testID: h, withoutDisclaimerDetails: g } = e;
                if (!c.Z.isPromoted(d)) return null;
                let C = null;
                return !g && d && (C = a.createElement(y, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: o, onPromotedDisclaimerLearnMoreClick: i, promotedContent: d, screenName: u })), a.createElement(r.Z, { id: n, style: p, testID: h }, m && d ? a.createElement(s.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${m.screen_name}`, state: { promotedTweetState: d } }, onPress: l }, a.createElement(b.Z, { contentAuthorId: t, promotedContent: d })) : !!d && a.createElement(b.Z, { contentAuthorId: t, promotedContent: d }), C);
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-e16dbf02.88ce8c2a.js.map
