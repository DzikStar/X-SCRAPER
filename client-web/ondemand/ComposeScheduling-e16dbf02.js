"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-e16dbf02", "shared~bundle.ReportCenter~bundle.SafetyCenter-e16dbf02"],
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
            n.d(t, { Z: () => C });
            var a = n(202784),
                r = n(325686),
                o = n(111677),
                s = n.n(o),
                i = n(97043),
                l = n(323265),
                c = n(731708),
                d = n(154003),
                u = n(950822),
                p = n(586855),
                m = n(855488),
                h = n(466818),
                y = n(392237);
            const g = s().jf83d092,
                f = s().af4abf20,
                b = s().b871f280;
            let E = 1;
            class C extends a.Component {
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
                                o = { day: n, month: a, year: r, [e]: parseInt(t, 10) };
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
                    const { day: t, maxSelectableYear: n, minSelectableYear: a, month: r, year: o } = e;
                    (this._errorID = `DATE_INPUT_${E}_ERROR`), (this._monthOptions = p.dX()), (this._nativeDefaultValue = p.ww(t, r, o)), (this._nativeMaxDate = p.ww(31, 12, n)), (this._nativeMinDate = p.ww(1, 1, a)), (E += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: n, onChange: a, year: r } = this.props,
                        o = n && n !== e.month,
                        s = r && r !== e.year;
                    if (o || s) {
                        p
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
                    const { day: e, month: t, year: n, errors: o = {}, label: s, autofocus: i, monthSelectorTestID: l, daySelectorTestID: c, yearSelectorTestID: m, style: y, minSelectableYear: E, maxSelectableYear: C, withCalendar: w, hideDay: D, disabled: x } = this.props,
                        Z = p.DD(t, n),
                        S = p.Zj(E, C, e, t);
                    return a.createElement(r.Z, { "aria-label": s, role: "group", style: [_.selectorsContainer, y] }, a.createElement(h.ZP, { "aria-describedby": o.month ? this._errorID : void 0, autofocus: i, disabled: x, hasError: o.month, label: f, onChange: this._handleMonthChange, options: this._monthOptions, style: _.monthSelector, testID: l, value: t ? `${t}` : "", withEmptyOption: !0 }), D ? null : a.createElement(h.ZP, { "aria-describedby": o.day ? this._errorID : void 0, disabled: x, hasError: o.day, label: g, onChange: this._handleDayChange, options: Z, style: _.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), a.createElement(h.ZP, { "aria-describedby": o.year ? this._errorID : void 0, disabled: x, hasError: o.year, label: b, onChange: this._handleYearChange, options: S, style: _.yearSelector, testID: m, value: n ? `${n}` : "", withEmptyOption: !0 }), w && a.createElement(r.Z, { role: "label", style: _.calendarLabel }, a.createElement(d.ZP, { "aria-label": "Calendar", icon: v, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, u.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: s, onChange: this._handleDateChange, style: _.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: p.ww(e, t, n) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return a.createElement(m.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: _.dateInputRoot, type: "date" });
                }
            }
            const v = a.createElement(i.default, null),
                _ = y.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...y.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, n) => {
            n.d(t, { DD: () => S, ZP: () => I, Zj: () => x, dX: () => D, ww: () => T });
            var a = n(111677),
                r = n.n(a),
                o = n(822240);
            const s = 1,
                i = 2,
                l = 3,
                c = 4,
                d = 5,
                u = 6,
                p = 7,
                m = 8,
                h = 9,
                y = 10,
                g = 11,
                f = 12,
                b = { [s]: { label: r().hac89ab0, numDays: 31 }, [i]: { label: r().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [l]: { label: r().b56920fa, numDays: 31 }, [c]: { label: r().b1a0f1ec, numDays: 30 }, [d]: { label: r().daf779c8, numDays: 31 }, [u]: { label: r().c6ad074e, numDays: 30 }, [p]: { label: r().f1db106c, numDays: 31 }, [m]: { label: r().i4e80b7a, numDays: 31 }, [h]: { label: r().efa6cc1e, numDays: 30 }, [y]: { label: r().f40a0cbe, numDays: 31 }, [g]: { label: r().ac74a31c, numDays: 30 }, [f]: { label: r().i6c1e4b2, numDays: 31 } },
                E = (e) => ({ label: `${e}`, value: `${e}` }),
                C = (0, o.Z)(1, 29).map(E),
                v = (0, o.Z)(1, 30).map(E),
                _ = (0, o.Z)(1, 31).map(E),
                w = (0, o.Z)(1, 32).map(E),
                D = () => Object.keys(b).map((e) => ({ label: b[e].label, value: e })),
                x = (e = 1, t, n, a) => {
                    const r = t || new Date(Date.now()).getFullYear();
                    return (0, o.Z)(e, r + 1)
                        .reverse()
                        .filter((e) => (2 === a && 29 === n ? Z(e) : e))
                        .map(E);
                },
                Z = (e) => 1 === new Date(e, 1, 29).getMonth(),
                S = (e, t) => {
                    if (!e) return w;
                    switch (2 === e && (!t || (t && Z(t))) ? b[e].numDaysLeapYear : b[e].numDays) {
                        case 28:
                            return C;
                        case 29:
                            return v;
                        case 30:
                            return _;
                        default:
                            return w;
                    }
                },
                T = (e, t, n) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof n) {
                        return `${n}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const I = {
                getFormattedDateValue: T,
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
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(476984),
                o = n.n(r),
                s = n(143778),
                i = n(750410),
                l = n(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class m extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        n = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !n) || !o()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: n, fetchStatus: r, icon: o, loadingMessage: s, onRequestRetry: d, render: m, renderFailure: h, retryMessage: y, retryable: g } = this.props;
                    switch (r) {
                        case c:
                            return g ? a.createElement(i.Z, { icon: o, onRequestRetry: d, retryMessage: y }) : n ? a.createElement(l.m, { failureMessage: n }) : h();
                        case u:
                            return a.createElement(l.J, { "aria-label": e, color: t, loadingMessage: s });
                        case p:
                            return null;
                        default:
                            return m();
                    }
                }
            }
            m.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => y });
            var a = n(202784),
                r = n(325686),
                o = n(111677),
                s = n.n(o),
                i = n(815858),
                l = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const p = s().a35a5b10,
                m = s().fc8cd112,
                h = (e) => a.createElement(l.ZP, null, e);
            class y extends a.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: o, userScreenName: s, withFacepile: u } = this.props,
                        m = this._renderMessage();
                    return a.createElement(i.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? a.createElement(d.Z, { "aria-label": p, interactiveStyles: null, link: s ? ((h = s), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: i }) => a.createElement(r.Z, { style: g.content }, !e && u ? a.createElement(c.Z, { userAvatarUrls: t }) : null, a.createElement(l.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || i) && !!s && g.underline, o] }, e && u ? a.createElement(c.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, m))) : a.createElement(r.Z, { style: g.content }, a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, m)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : m;
                }
                _renderOneUsername(e) {
                    return a.createElement(s().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return a.createElement(s().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return a.createElement(s().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return a.createElement(s().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
                }
            }
            y.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const g = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        591978: (e, t, n) => {
            n.d(t, { Z: () => m });
            var a = n(202784),
                r = n(325686),
                o = n(872405),
                s = n(638009),
                i = n(952428),
                l = n(470397),
                c = n(392237),
                d = n(418462),
                u = n(103737),
                p = n(782261);
            function m({ role: e = "article", link: t, onBlur: n, onFocus: c, onPress: u, renderMedia: m = h, renderReplyContext: g, renderText: f, renderTimestamp: b, renderUserAvatar: E, renderUserName: C, staticLinkConfig: v, tweet: _ }) {
                const { LinkConfigProvider: w, a11yIds: D, props: x } = (0, d.a)({ role: e, link: t, onBlur: n, onFocus: c, onPress: u, renderMedia: m, renderReplyContext: g, renderText: f, renderTimestamp: b, renderUserAvatar: E, renderUserName: C, staticLinkConfig: v, tweet: _ }),
                    Z = p.Z.getOriginalTweet(_),
                    S = p.Z.hasMedia(Z),
                    T = a.useContext(s.ZP),
                    I = Boolean(x.link),
                    P = x.renderUserAvatar();
                return a.createElement(
                    w,
                    null,
                    a.createElement(
                        i.Z,
                        { "aria-labelledby": [D.username, D.avatar, D.timestamp, D.replyContext, D.text, D.media].join(" "), focusable: I, link: x.link ? T.withAnchorless(x.link) : void 0, onBlur: () => x.onBlur?.(), onFocus: () => x.onFocus?.(), onPress: (e) => x.onPress?.(e), role: x.role, style: y.root, withInteractiveStyling: I },
                        a.createElement(o.Z, { avatarCell: P || void 0, cellStyle: y.cellStyle, style: y.avatarRow }, a.createElement(l.Z, null, x.renderUserName(), x.renderTimestamp()), x.renderReplyContext(), x.renderText({ size: "body", withCardLinks: !0, withQuoteLinks: !0 })),
                        (() => {
                            if (!S) return null;
                            const e = x.renderMedia({ cacheLocationKey: "listTweet", displayMediaAttribution: !0, preventPlayback: !0, containerAspectRatio: 1, shouldShowAltLabelAlways: !1, singleImageMaxAspectRatio: 1, singleImageMinAspectRatio: 1, videoAspectRatio: 1, withLink: !1, withMediaTagsIcon: !1 });
                            return e ? a.createElement(r.Z, { style: y.media }, e) : null;
                        })(),
                    ),
                );
            }
            function h(e) {
                return a.createElement(u.Z, e);
            }
            (m.Media = u.Z), (m.ReplyContext = d.q.ReplyContext), (m.Text = d.q.Text), (m.Timestamp = d.q.Timestamp), (m.UserAvatar = d.q.UserAvatar), (m.UserName = d.q.UserName);
            const y = c.default.create((e) => ({ avatarRow: { alignItems: "flex-start", flex: 1, flexShrink: 1 }, cellStyle: { flexGrow: 1 }, media: { width: `calc(${c.default.theme.spaces.space12} * 10)`, marginStart: e.spaces.space12 }, root: { flexDirection: "row", paddingTop: `var(--hweb-listTweet-padding-block-start, ${e.componentDimensions.gutterVertical})`, paddingBottom: `var(--hweb-listTweet-padding-block-end, ${e.componentDimensions.gutterVertical})`, paddingStart: `var(--hweb-listTweet-padding-inline-start, ${e.componentDimensions.gutterHorizontal})`, paddingEnd: `var(--hweb-listTweet-padding-inline-end, ${e.componentDimensions.gutterHorizontal})` } }));
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => a });
            class a {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new a();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => g });
            n(571372);
            var a = n(202784),
                r = n(325686),
                o = n(392237),
                s = n(111677),
                i = n.n(s),
                l = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
                p = n(173739);
            const m = i().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [n, o] = a.useState(t),
                    [s, i] = a.useState(0);
                return (
                    a.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && i(Math.round(e.currentTime));
                        });
                    }, [e]),
                    a.createElement(
                        r.Z,
                        { style: y.container },
                        a.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? a.createElement(l.default, null) : a.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), o(!1)) : (e.play(), o(!0));
                            },
                            type: "primaryText",
                        }),
                        a.createElement(d.ZP, { style: y.frames }, `${s}/${e.totalFrames}`),
                        a.createElement(
                            r.Z,
                            { style: y.slider },
                            a.createElement(p.Z, {
                                "aria-label": m,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), o(!1);
                                },
                                value: s,
                            }),
                        ),
                    )
                );
            }
            const y = o.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: o, onAnimationStart: s, onError: i, withControls: l } = e,
                    c = a.useRef(void 0),
                    d = a.useRef({ animationLoaded: !1 }),
                    u = a.useRef(null),
                    [p, m] = a.useState(!1);
                return (
                    a.useEffect(() => {
                        function a(e, t) {
                            "function" == typeof o && o(t), e && e.destroy();
                        }
                        const { animationLoaded: r } = d.current;
                        r ||
                            ((d.current.animationLoaded = !0),
                            f.load().then((r) => {
                                if (r && u.current) {
                                    const o = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = r.loadAnimation(o);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new b(e);
                                            "function" == typeof i && i(t), a(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            m(!0), t && (l.play(), s && s());
                                        }),
                                        l.addEventListener("complete", () => {
                                            a(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, o, s, i, l]),
                    a.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    a.createElement(r.Z, null, a.createElement(r.Z, { style: [e.animationContainerStyle, E.centerAnimation] }, a.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && p && a.createElement(h, { animation: c.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    a.useEffect(() => {
                        f.load();
                    }, []),
                    null
                );
            };
            const f = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class b extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, b), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const E = o.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(202784),
                r = n(111677),
                o = n.n(r),
                s = n(149170),
                i = n(40644);
            const l = o().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = s.default, iconSize: r = "normal", isDisabled: o, onClick: c, preventFocusShift: d, renderActionMenu: u, style: p, testID: m, withDarkBackground: h = !1 }) {
                const y = a.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = a.useMemo(() => ({ label: t }), [t]);
                return a.createElement(i.ZP, { Icon: n, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: g, iconSize: r, isDisabled: o, onPress: y, preventFocusShift: d, renderMenu: u, style: p, testID: m });
            };
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => b });
            var a = n(202784),
                r = n(325686),
                o = n(530732),
                s = n(111677),
                i = n.n(s),
                l = n(731708),
                c = n(966582),
                d = n(392237);
            const u = i().d7e50a66,
                p = "INDIRECT",
                m = "NO_SPONSORSHIP",
                h = "ISSUE";
            class y extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: r, sponsorshipOrganization: o, sponsorshipOrganizationWebsite: s, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                d = s && n !== h ? a.createElement(l.ZP, { link: s, onClick: e }) : a.createElement(l.ZP, { color: "gray700", size: "subtext2" });
                            if (!o) return null;
                            const u = a.createElement(i().I18NFormatMessage, { $i18n: "e1e348dd" }, a.cloneElement(d, null, i().hdd29d51({ sponsorshipOrganization: o }))),
                                y = a.createElement(i().I18NFormatMessage, { $i18n: "c7dea0d1" }, a.cloneElement(d, null, i().b97f7079({ sponsorshipOrganization: o }))),
                                g = r ? a.createElement(i().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: r }, a.cloneElement(d, null, i().b02627a9({ sponsorshipOrganization: o }))) : null;
                            return a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, n === h ? u : c === m ? y : c === p ? g : u);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                r = n === h ? "issue_ad" : "political_ad";
                            return a.createElement(l.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(r), size: "subtext2", style: g.learnMore }, u);
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
            var f = n(378729);
            const b = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: s, onPromotedDisclaimerLearnMoreClick: i, onPromotedIndicatorClick: l, promotedContent: d, promotedContentAdvertiser: u, screenName: p, style: m, testID: h, withoutDisclaimerDetails: g } = e;
                if (!c.Z.isPromoted(d)) return null;
                let b = null;
                return !g && d && (b = a.createElement(y, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: s, onPromotedDisclaimerLearnMoreClick: i, promotedContent: d, screenName: p })), a.createElement(r.Z, { id: n, style: m, testID: h }, u && d ? a.createElement(o.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${u.screen_name}`, state: { promotedTweetState: d } }, onPress: l }, a.createElement(f.Z, { contentAuthorId: t, promotedContent: d })) : !!d && a.createElement(f.Z, { contentAuthorId: t, promotedContent: d }), b);
            };
        },
        466818: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var a = n(202784),
                r = n(325686),
                o = n(487552),
                s = n(302752),
                i = n(183806),
                l = n(731708),
                c = n(950822),
                d = n(224162),
                u = n(392237);
            const p = a.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                m = (e) => (0, c.Z)("option", e);
            let h = 1;
            class y extends a.PureComponent {
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
                        (this._id = `SELECTOR_${h}`),
                        (this._errorID = `${this._id}_ERROR`),
                        (this._helperID = `${this._id}_HELP`),
                        (this._labelID = `${this._id}_LABEL`),
                        (h += 1);
                }
                componentDidMount() {
                    this.props.autofocus && this._selectRef && this._selectRef.current && this._selectRef.current.focus();
                }
                render() {
                    const { "aria-describedby": e, disabled: t, errorText: n, hasError: c, helperText: h, options: y, style: f, testID: b, value: E, withEmptyOption: C } = this.props,
                        { isFocused: v } = this.state,
                        _ = l.ZP.getLanguage(),
                        w = void 0 === c ? !!n : c,
                        D = new Set();
                    n && D.add(this._errorID), e && D.add(e), h && D.add(this._helperID);
                    const x = D.size ? [...D].join(" ") : void 0;
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const l = "ja" === _ ? u.default.theme.fontFamilies.japan : "rtl" === e || s.Z.isLocaleRTL(_) ? u.default.theme.fontFamilies.rtl : u.default.theme.fontFamilies.normal;
                            return a.createElement(
                                r.Z,
                                { style: [i.Z.border, g.container, t && i.Z.disabled, v && i.Z.focusedBorderValid, w && i.Z.invalidBorderColor, v && w && i.Z.focusedBorderInvalid, f] },
                                this._renderLabel(),
                                a.createElement(
                                    p,
                                    { "aria-describedby": x, "aria-invalid": w, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [g.select, { fontFamily: l }, t && i.Z.disabled], testID: b || "", value: E },
                                    C ? a.createElement(m, { disabled: !0, style: g.option, value: "" }) : null,
                                    y.map((e) => {
                                        const { disabled: t, label: n, value: r } = e;
                                        return a.createElement(m, { disabled: t, key: `${n}-${r}`, style: g.option, value: r }, n);
                                    }),
                                ),
                                a.createElement(o.default, { style: [g.dropdownCaret, v && i.Z.validColor, !(!c && !n) && i.Z.invalidColor] }),
                            );
                        }),
                        h ? this._renderHelperText() : null,
                        w && n ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: n } = this.props,
                        { isFocused: r } = this.state;
                    return a.createElement(l.ZP, { color: t || e ? "red500" : r ? "primary" : "gray700", id: this._labelID, role: "label", style: g.label }, n);
                }
                _renderHelperText() {
                    return a.createElement(r.Z, { "aria-live": "polite" }, a.createElement(l.ZP, { color: "gray700", id: this._helperID, style: g.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return a.createElement(r.Z, { "aria-live": "polite" }, a.createElement(l.ZP, { color: "red500", id: this._errorID, style: g.helperText }, this.props.errorText));
                }
            }
            y.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const g = u.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                f = y;
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => y });
            var a = n(202784),
                r = n(325686),
                o = n(827515),
                s = n(461756),
                i = n(731708),
                l = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const a = (0, o.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: a };
                    });
                },
                p = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                p[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                h = l.default.create({ root: { overflow: "hidden" } }),
                y = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [y, g] = a.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        f = a.useRef(!1);
                    return (
                        a.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        a.useEffect(() => {
                            if (f.current)
                                if (s.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== y.pendingText) {
                                    t === y.text || ((0, o.Z)(e.count) && y.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), y.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        a.useEffect(() => {
                            f.current &&
                                !1 === y.animating &&
                                (y.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : y.pendingText && u(y.pendingCount, y.pendingText, g));
                        }, [y.animating, y.oldText]),
                        a.useMemo(() => {
                            const e = p[y.transitionDirection],
                                t = y.oldText && !s.Z.reducedMotionEnabled,
                                o = !y.animating && y.oldText && !s.Z.reducedMotionEnabled,
                                l = { ...m, ...(y.animating ? e.post : e.active) },
                                c = { ...(o ? e.pre : e.active) };
                            return a.createElement(
                                r.Z,
                                { style: [h.root, n] },
                                t ? a.createElement("span", { style: l }, a.createElement(i.ZP, d, y.oldText)) : null,
                                a.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, g),
                                        style: c,
                                    },
                                    a.createElement(i.ZP, d, y.text),
                                ),
                            );
                        }, [n, d, y, f, g])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-e16dbf02.24ec740a.js.map
