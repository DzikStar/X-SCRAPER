"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AdvancedSearch"],
    {
        883432: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = { AdvancedSearchPage: "advanced_search_page", CashtagClick: "cashtag_click", HashtagClick: "hashtag_click", PromotedTrendClick: "promoted_trend_click", RecentSearchClick: "recent_search_click", SavedSearchClick: "saved_search_click", RelatedQueryClick: "related_query_click", SpellingCorrectionClick: "spelling_correction_click", SpellingCorrectionRevertClick: "spelling_suggestion_revert_click", SpellingExpansionClick: "spelling_expansion_click", SpellingExpansionRevertClick: "spelling_expansion_revert_click", SpellingSuggestionClick: "spelling_suggestion_click", TrendClick: "trend_click", TrendView: "trend_view", TypeaheadClick: "typeahead_click", Typed: "typed_query", TVSearch: "TvSearch", TweetDetailQuoteTweet: "tdqt", TweetDetailSimilarPost: "tweet_detail_similar_posts" };
        },
        661461: (e, t, a) => {
            a.d(t, { Nr: () => u, ug: () => m, yt: () => g });
            var r = a(759851),
                s = a(689048),
                n = a(499627),
                l = a(917799),
                i = a(312771),
                o = a(390387);
            const c = "availableLanguages",
                d = Object.freeze({ REQUEST: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_REQUEST", SUCCESS: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_SUCCESS", FAILURE: "rweb/availableLanguages/FETCH_AVAILABLE_LANGUAGES_FAILURE" }),
                h = { fetchStatus: i.ZP.NONE, languages: [] };
            function p(e = h, t) {
                if (!t) return e;
                switch (t.type) {
                    case d.REQUEST:
                        return { ...e, fetchStatus: i.ZP.LOADING };
                    case d.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                    case d.SUCCESS: {
                        const { meta: a, payload: r } = t,
                            s = a?.lang ? a.lang : "en",
                            n = "undefined" != typeof Intl && Intl.Collator && new Intl.Collator(s),
                            l = n ? (e, t) => n.compare(e.name, t.name) : void 0;
                        return { ...e, languages: r?.slice().sort(l) || [], fetchStatus: i.ZP.LOADED };
                    }
                    default:
                        return e;
                }
            }
            n.Z.register({ [c]: p });
            const u = (e) => e[c].languages,
                m = (e, t) => {
                    const a = (0, s.o)(t).toLowerCase(),
                        r = e[c].languages.find((e) => e.code === a);
                    return r?.name;
                },
                g = () => (e, t) => (t()[c].fetchStatus === i.ZP.LOADED ? Promise.resolve() : e(f())),
                f =
                    () =>
                    (e, t, { api: a }) =>
                        l._O(e, { request: a.withEndpoint(r.Z).fetchSupportedLanguages })({ actionTypes: d, context: "FETCH_AVAILABLE_LANGUAGES", meta: { lang: (0, o.VT)(t()) } });
        },
        555083: (e, t, a) => {
            a.r(t), a.d(t, { AdvancedSearchScreen: () => J, default: () => ee });
            var r = a(202784),
                s = a(325686),
                n = a(844685),
                l = a(855488),
                i = a(466818),
                o = a(586855),
                c = a(154003),
                d = a(424028),
                h = a(420412),
                p = a(80512),
                u = a(731708),
                m = a(260706),
                g = a(392237),
                f = a(111677),
                b = a.n(f),
                y = a(912021),
                _ = a(980407),
                E = a(530745),
                C = a(883432),
                T = a(24949),
                D = a(71620),
                v = a(668214),
                S = a(661461);
            const Z = ["en-gb", "fil", "gl", "ga", "msa"],
                k = (0, v.Z)()
                    .propsFromState(() => ({ languageList: (0, T.P1)(S.Nr, (e) => e.filter((e) => -1 === Z.indexOf(e.code))) }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, D.zr)("ADVANCED_SEARCH"), fetchAvailableLanguagesIfNeeded: S.yt }))
                    .withAnalytics({ page: "search_advanced" });
            a(136728), a(571372);
            const w = Object.freeze({ AllOfTheseWords: "allOfTheseWords", ThisExactPhrase: "thisExactPhrase", AnyOfTheseWords: "anyOfTheseWords", NoneOfTheseWords: "noneOfTheseWords", Language: "language", TheseHashtags: "theseHashtags", FromTheseAccounts: "fromTheseAccounts", ToTheseAccounts: "toTheseAccounts", MentioningTheseAccounts: "mentioningTheseAccounts", FromThisDate: "fromThisDate", ToThisDate: "toThisDate", MinReplies: "minReplies", MinLikes: "minLikes", MinRetweets: "minRetweets", ReplyFilter: "replyFilter", LinkFilter: "linkFilter" }),
                F = "any";
            function I(e) {
                try {
                    return (function (e) {
                        const t = [],
                            a = [];
                        let r;
                        const s = [],
                            n = [],
                            l = [],
                            i = [],
                            o = [];
                        let c, d, h, p, u, m, g, f;
                        const b = (function (e) {
                            const t = [],
                                a = [],
                                r = [];
                            let s = "",
                                n = "default";
                            function l() {
                                const e = s.trim();
                                if (0 !== e.length) {
                                    switch (n) {
                                        case "default":
                                            t.push(e);
                                            break;
                                        case "paren":
                                            r.push(e);
                                            break;
                                        case "quote":
                                            a.push(e);
                                    }
                                    s = "";
                                }
                            }
                            for (let t = 0; t < e.length; t++) {
                                const a = e[t];
                                if ('"' === a)
                                    if (" " === e[t - 1] || 0 === t) {
                                        if ((l(), "default" !== n)) throw new Error("invalid query string");
                                        n = "quote";
                                    } else if (" " === e[t + 1] || t === e.length - 1) {
                                        if ((l(), "quote" !== n)) throw new Error("invalid query string");
                                        n = "default";
                                    } else s += a;
                                else if ("(" === a) {
                                    if ((l(), "default" !== n)) throw new Error("invalid query string");
                                    n = "paren";
                                } else if (")" === a) {
                                    if ((l(), "paren" !== n)) throw new Error("invalid query string");
                                    n = "default";
                                } else s += a;
                            }
                            if (s.length > 0) {
                                if ("default" !== n) throw new Error("invalid query string");
                                l();
                            }
                            return { defaultChunks: t, quoteChunks: a, parenChunks: r };
                        })(e);
                        b.defaultChunks.forEach((e) => {
                            e.split(" ")
                                .map((e) => e.trim())
                                .forEach((e) => {
                                    if (0 !== e.length)
                                        if (e.startsWith("lang:")) p = e.slice(5);
                                        else if (e.startsWith("since:")) u = e.slice(6);
                                        else if (e.startsWith("until:")) m = e.slice(6);
                                        else if ("filter:links" !== e && "-filter:links" !== e)
                                            if ("filter:replies" !== e && "-filter:replies" !== e)
                                                if (e.startsWith("min_replies:")) {
                                                    const t = parseInt(e.slice(12), 10);
                                                    Number.isNaN(t) || (c = t);
                                                } else if (e.startsWith("min_faves:")) {
                                                    const t = parseInt(e.slice(10), 10);
                                                    Number.isNaN(t) || (d = t);
                                                } else if (e.startsWith("min_retweets:")) {
                                                    const t = parseInt(e.slice(13), 10);
                                                    Number.isNaN(t) || (h = t);
                                                } else if (e.startsWith("-")) {
                                                    const t = e.slice(1);
                                                    t.length > 0 && a.push(t);
                                                } else t.push(e.trim());
                                            else f = e;
                                        else g = e;
                                });
                        }),
                            b.quoteChunks.forEach((e) => {
                                r = e;
                            }),
                            b.parenChunks.forEach((e) => {
                                if (e.startsWith("from:")) {
                                    return void e.split(" OR ").forEach((e) => {
                                        l.push(`@${e.trim().slice(5)}`);
                                    });
                                }
                                if (e.startsWith("to:")) {
                                    return void e.split(" OR ").forEach((e) => {
                                        i.push(`@${e.trim().slice(3)}`);
                                    });
                                }
                                if (e.startsWith("@")) {
                                    return void e.split(" OR ").forEach((e) => {
                                        o.push(e.trim());
                                    });
                                }
                                if (e.startsWith("#")) {
                                    return void e.split(" OR ").forEach((e) => {
                                        n.push(e.trim());
                                    });
                                }
                                e.split(" OR ").forEach((e) => {
                                    s.push(e.trim());
                                });
                            });
                        const y = {};
                        p && (y[w.Language] = p);
                        u && (y[w.FromThisDate] = u);
                        m && (y[w.ToThisDate] = m);
                        g && (y[w.LinkFilter] = g);
                        f && (y[w.ReplyFilter] = f);
                        c && (y[w.MinReplies] = `${c}`);
                        d && (y[w.MinLikes] = `${d}`);
                        h && (y[w.MinRetweets] = `${h}`);
                        a.length > 0 && (y[w.NoneOfTheseWords] = a.join(" "));
                        t.length > 0 && (y[w.AllOfTheseWords] = t.join(" "));
                        r && (y[w.ThisExactPhrase] = r);
                        l.length > 0 && (y[w.FromTheseAccounts] = l.join(" "));
                        i.length > 0 && (y[w.ToTheseAccounts] = i.join(" "));
                        o.length > 0 && (y[w.MentioningTheseAccounts] = o.join(" "));
                        s.length > 0 && (y[w.AnyOfTheseWords] = s.join(" "));
                        n.length > 0 && (y[w.TheseHashtags] = n.join(" "));
                        return y;
                    })(e);
                } catch (e) {
                    return {};
                }
            }
            const L = {
                    wordsFields: [
                        { label: b().b6215680, name: w.AllOfTheseWords, description: b().cceffa5e },
                        { label: b().f1c5faee, name: w.ThisExactPhrase, description: b().ad10780e },
                        { label: b().a555a3f4, name: w.AnyOfTheseWords, description: b().ee8a2b60 },
                        { label: b().f51fe348, name: w.NoneOfTheseWords, description: b().hb657ad4 },
                        { label: b().d10da5da, name: w.TheseHashtags, description: b().f0b52b50 },
                    ],
                    peopleFields: [
                        { label: b().e292598a, name: w.FromTheseAccounts, description: b().hef790d8 },
                        { label: b().g2c27394, name: w.ToTheseAccounts, description: b().d158d9d0 },
                        { label: b().a10e3230, name: w.MentioningTheseAccounts, description: b().daaf2c72 },
                    ],
                    engagementFields: [
                        { label: b().b18366ba, name: w.MinReplies, description: b().f481ba1c },
                        { label: b().ib3ddbd4, name: w.MinLikes, description: b().ef994dac },
                        { label: b().a504ca74, name: w.MinRetweets, description: b().jd9bd944 },
                    ],
                },
                R = (e) => e.filter((e) => "" !== e),
                x = (e) => e.replace(/#+/g, ""),
                A = (e) => e.replace(/@+/g, ""),
                O = (e) => `(${e})`,
                P = b().eb63de70,
                $ = b().j622effe,
                W = b().d3938be8,
                N = b().i647fb04,
                j = b().e0dded5e,
                M = b().b8e1d524,
                H = b().a097f7ba,
                B = b().a9ae1e78,
                V = b().a03dacaa,
                z = b().c03f15ca,
                q = b().c647aac8,
                G = b().ac6ce1c0,
                U = b().cb334136,
                Y = b().jdceda60,
                Q = { day: void 0, month: void 0, year: void 0 },
                K = [
                    { label: b().jf1cbcc2, value: "" },
                    { label: b().gede6f6e, value: "filter:links" },
                ],
                X = [
                    { label: b().bda44dd4, value: "" },
                    { label: b().ab870904, value: "filter:replies" },
                ];
            class J extends r.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderSectionTitle = (e) => r.createElement(n.Z, { text: e })),
                        (this._renderField = (e, t = "text") => r.createElement(s.Z, { key: e.name }, r.createElement(l.Z, { defaultValue: this._initialState[e.name], helperText: e.description, label: e.label, name: e.name, numberOfLines: 1, ref: this._setFormTextInputRef, style: te.field, type: t }))),
                        (this._handleToDateChange = (e) => {
                            this.setState({ toDate: e });
                        }),
                        (this._handleFromDateChange = (e) => {
                            this.setState({ fromDate: e });
                        }),
                        (this._handleFilterChanged = (e, t) => {
                            this.setState({ [e]: t });
                        }),
                        (this._renderLanguages = () => {
                            const e = this._getFormattedLanguageList(this.props.languageList);
                            return e.length ? r.createElement(i.ZP, { label: V, onChange: this._handleLanguageChange, options: e, style: te.languageSelector, value: this.state.language }) : null;
                        }),
                        (this._getFormattedLanguageList = (0, y.Z)((e) => [{ label: z, value: F }, ...e.map((e) => ({ label: e.name, value: e.code }))])),
                        (this._handleOnKeyDown = (e) => {
                            const { key: t } = e;
                            t === E.NW && (e.preventDefault(), this._executeSearch());
                        }),
                        (this._handleOnSearchPress = () => {
                            this._executeSearch();
                        }),
                        (this._handleLanguageChange = (e, t) => {
                            this.setState({ language: e });
                        }),
                        (this._executeSearch = () => {
                            const { history: e, location: t } = this.props,
                                a = ((e) => {
                                    const t = [];
                                    let a, r;
                                    return (
                                        Object.keys(e).forEach((s) => {
                                            const n = e[s];
                                            if (n)
                                                switch (s) {
                                                    case w.ThisExactPhrase:
                                                        t.push(`"${n}"`);
                                                        break;
                                                    case w.AnyOfTheseWords:
                                                        (a = n.split(" ")), (r = R(a)), t.push(O(r.join(" OR ")));
                                                        break;
                                                    case w.NoneOfTheseWords:
                                                        (a = `-${n}`.split(" ")), (r = R(a)), t.push(r.join(" -"));
                                                        break;
                                                    case w.TheseHashtags:
                                                        (a = `#${x(n)}`.split(" ")), (r = R(a)), t.push(O(r.join(" OR #")));
                                                        break;
                                                    case w.FromTheseAccounts:
                                                        (a = `from:${A(n)}`.split(" ")), (r = R(a)), t.push(O(r.join(" OR from:")));
                                                        break;
                                                    case w.ToTheseAccounts:
                                                        (a = `to:${A(n)}`.split(" ")), (r = R(a)), t.push(O(r.join(" OR to:")));
                                                        break;
                                                    case w.MentioningTheseAccounts:
                                                        (a = `@${A(n)}`.split(" ")), (r = R(a)), t.push(O(r.join(" OR @")));
                                                        break;
                                                    case w.FromThisDate:
                                                        t.push(`since:${n}`);
                                                        break;
                                                    case w.ToThisDate:
                                                        t.push(`until:${n}`);
                                                        break;
                                                    case w.Language:
                                                        n !== F && t.push(`lang:${n}`);
                                                        break;
                                                    case w.MinReplies:
                                                        t.push(`min_replies:${n}`);
                                                        break;
                                                    case w.MinLikes:
                                                        t.push(`min_faves:${n}`);
                                                        break;
                                                    case w.MinRetweets:
                                                        t.push(`min_retweets:${n}`);
                                                        break;
                                                    case w.AllOfTheseWords:
                                                    case w.LinkFilter:
                                                    case w.ReplyFilter:
                                                        t.push(n);
                                                }
                                        }),
                                        t.join(" ").trim()
                                    );
                                })(this._getInputValues());
                            a && e.replace({ pathname: "/search", query: { ...t.query, q: a, src: C.Z.Typed } });
                        }),
                        (this._setFormTextInputRef = (e) => {
                            e && e.props && (this._formTextInputRefs[e.props.name] = e);
                        }),
                        (this._getInputValues = () => {
                            const { fromDate: e, language: t, linkFilter: a, replyFilter: r, toDate: s } = this.state,
                                n = Object.keys(this._formTextInputRefs).reduce((e, t) => {
                                    const a = this._formTextInputRefs[t];
                                    return a && a.getValue() && (e[t] = a.getValue()), e;
                                }, {}),
                                l = o.ZP.getFormattedDateValue(s.day, s.month, s.year),
                                i = o.ZP.getFormattedDateValue(e.day, e.month, e.year);
                            return { ...n, language: t, [w.ToThisDate]: l, [w.FromThisDate]: i, [w.LinkFilter]: a, [w.ReplyFilter]: r };
                        });
                    const a = this.props.location.query.q;
                    (this._initialState = I("string" == typeof a ? a : "")), (this._formTextInputRefs = {}), (this.state = { language: this._initialState[w.Language] ?? F, linkFilter: this._initialState[w.LinkFilter] ?? "", replyFilter: this._initialState[w.ReplyFilter] ?? "", toDate: o.ZP.getDayMonthYear(this._initialState[w.ToThisDate]) ?? Q, fromDate: o.ZP.getDayMonthYear(this._initialState[w.FromThisDate]) ?? Q });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchAvailableLanguagesIfNeeded: t } = this.props;
                    t().catch(e({}));
                }
                render() {
                    const { history: e } = this.props,
                        { linkFilter: t, replyFilter: a } = this.state,
                        n = r.createElement(c.ZP, { onPress: this._handleOnSearchPress, size: "small", type: "primaryFilled" }, B);
                    return r.createElement(
                        _.w,
                        { backLocation: "/explore", documentTitle: P, history: e, rightControl: n, title: $ },
                        r.createElement(
                            s.Z,
                            { style: te.root },
                            r.createElement(
                                d.Z,
                                { onKeyDown: this._handleOnKeyDown },
                                this._renderSectionTitle(W),
                                r.createElement(
                                    s.Z,
                                    { style: te.section },
                                    L.wordsFields.map((e) => this._renderField(e)),
                                    this._renderLanguages(),
                                ),
                                r.createElement(h.Z, null),
                                this._renderSectionTitle(M),
                                r.createElement(
                                    s.Z,
                                    { style: te.section },
                                    L.peopleFields.map((e) => this._renderField(e)),
                                ),
                                r.createElement(h.Z, null),
                                this._renderSectionTitle(N),
                                r.createElement(p.Z, { label: Y, name: "replyFilter", offValue: "-filter:replies", onChange: this._handleFilterChanged, options: X, value: a }),
                                r.createElement(s.Z, { style: te.divider }),
                                r.createElement(p.Z, { label: U, name: "linkFilter", offValue: "-filter:links", onChange: this._handleFilterChanged, options: K, value: t }),
                                r.createElement(h.Z, null),
                                this._renderSectionTitle(j),
                                r.createElement(
                                    s.Z,
                                    { style: te.section },
                                    L.engagementFields.map((e) => this._renderField(e, "number")),
                                ),
                                r.createElement(h.Z, null),
                                this._renderSectionTitle(H),
                                r.createElement(s.Z, { style: te.section }, this._renderDateInputs()),
                            ),
                        ),
                    );
                }
                _renderDateInputs() {
                    const { fromDate: e, toDate: t } = this.state;
                    return r.createElement(s.Z, { style: te.dateInputs }, r.createElement(u.ZP, null, G), r.createElement(m.Z, { day: e.day, label: G, minSelectableYear: 2006, month: e.month, onChange: this._handleFromDateChange, style: te.fromDateInput, year: e.year }), r.createElement(u.ZP, null, q), r.createElement(m.Z, { day: t.day, label: q, minSelectableYear: 2006, month: t.month, onChange: this._handleToDateChange, style: te.toDateInput, year: t.year }));
                }
            }
            const ee = k(J),
                te = g.default.create((e) => ({ root: { paddingBottom: e.spaces.space16 }, section: { paddingHorizontal: e.spaces.space16 }, title: { marginBottom: e.spaces.space12 }, divider: { borderBottomColor: e.colors.gray200, borderBottomWidth: 1 }, languageSelector: { marginVertical: e.spaces.space12 }, dateInputs: { marginVertical: e.spaces.space12 }, fromDateInput: { marginTop: e.spaces.space4, marginBottom: e.spaces.space16 }, toDateInput: { marginTop: e.spaces.space4, marginBottom: 0 }, field: { paddingHorizontal: 0, paddingVertical: e.spaces.space12 } }));
        },
        260706: (e, t, a) => {
            a.d(t, { Z: () => E });
            var r = a(202784),
                s = a(325686),
                n = a(111677),
                l = a.n(n),
                i = a(97043),
                o = a(323265),
                c = a(731708),
                d = a(154003),
                h = a(950822),
                p = a(586855),
                u = a(855488),
                m = a(466818),
                g = a(392237);
            const f = l().jf83d092,
                b = l().af4abf20,
                y = l().b871f280;
            let _ = 1;
            class E extends r.Component {
                constructor(e) {
                    super(e),
                        (this._showCalendarPicker = () => {
                            this._nativeCalendarRef?.showPicker?.();
                        }),
                        (this._setNativeCalendarRef = (e) => {
                            this._nativeCalendarRef = e;
                        }),
                        (this._handleSelectorChange = (e, t) => {
                            const { day: a, month: r, year: s } = this.props,
                                n = { day: a, month: r, year: s, [e]: parseInt(t, 10) };
                            this.props.onChange(n);
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
                                a = { year: parseInt(t[0], 10), month: parseInt(t[1], 10), day: parseInt(t[2], 10) };
                            this.props.onChange(a);
                        });
                    const { day: t, maxSelectableYear: a, minSelectableYear: r, month: s, year: n } = e;
                    (this._errorID = `DATE_INPUT_${_}_ERROR`), (this._monthOptions = p.dX()), (this._nativeDefaultValue = p.ww(t, s, n)), (this._nativeMaxDate = p.ww(31, 12, a)), (this._nativeMinDate = p.ww(1, 1, r)), (_ += 1);
                }
                componentDidUpdate(e) {
                    const { day: t, month: a, onChange: r, year: s } = this.props,
                        n = a && a !== e.month,
                        l = s && s !== e.year;
                    if (n || l) {
                        p
                            .DD(a, s)
                            .map((e) => parseInt(e.value, 10))
                            .includes(t) || r({ month: a, year: s, day: void 0 });
                    }
                }
                render() {
                    const { errorMessage: e, hideDay: t } = this.props,
                        a = o.ZP.isMobileOS() && !t;
                    return r.createElement(s.Z, null, a ? this._renderNativeDateInput() : this._renderSelectors(), e ? r.createElement(c.ZP, { color: "red500", id: this._errorID }, e) : null);
                }
                _renderSelectors() {
                    const { day: e, month: t, year: a, errors: n = {}, label: l, autofocus: i, monthSelectorTestID: o, daySelectorTestID: c, yearSelectorTestID: u, style: g, minSelectableYear: _, maxSelectableYear: E, withCalendar: D, hideDay: v, disabled: S } = this.props,
                        Z = p.DD(t, a),
                        k = p.Zj(_, E, e, t);
                    return r.createElement(s.Z, { "aria-label": l, role: "group", style: [T.selectorsContainer, g] }, r.createElement(m.ZP, { "aria-describedby": n.month ? this._errorID : void 0, autofocus: i, disabled: S, hasError: n.month, label: b, onChange: this._handleMonthChange, options: this._monthOptions, style: T.monthSelector, testID: o, value: t ? `${t}` : "", withEmptyOption: !0 }), v ? null : r.createElement(m.ZP, { "aria-describedby": n.day ? this._errorID : void 0, disabled: S, hasError: n.day, label: f, onChange: this._handleDayChange, options: Z, style: T.daySelector, testID: c, value: e ? `${e}` : "", withEmptyOption: !0 }), r.createElement(m.ZP, { "aria-describedby": n.year ? this._errorID : void 0, disabled: S, hasError: n.year, label: y, onChange: this._handleYearChange, options: k, style: T.yearSelector, testID: u, value: a ? `${a}` : "", withEmptyOption: !0 }), D && r.createElement(s.Z, { role: "label", style: T.calendarLabel }, r.createElement(d.ZP, { "aria-label": "Calendar", icon: C, onPress: this._showCalendarPicker, size: "xLarge", type: "primaryText" }), (0, h.Z)("input", { max: this._nativeMaxDate, min: this._nativeMinDate, name: l, onChange: this._handleDateChange, style: T.nativeDateInput, type: "date", ref: this._setNativeCalendarRef, value: p.ww(e, t, a) })));
                }
                _renderNativeDateInput() {
                    const { label: e } = this.props;
                    return r.createElement(u.Z, { defaultValue: this._nativeDefaultValue, editable: !this.props.disabled, label: e, max: this._nativeMaxDate, min: this._nativeMinDate, name: e, numberOfLines: 1, onChange: this._handleDateChange, style: T.dateInputRoot, type: "date" });
                }
            }
            const C = r.createElement(i.default, null),
                T = g.default.create((e) => ({ selectorsContainer: { flexDirection: "row", marginVertical: e.spaces.space16 }, monthSelector: { flexGrow: 2, marginEnd: e.spaces.space12 }, daySelector: { flexGrow: 1, marginEnd: e.spaces.space12 }, yearSelector: { flexGrow: 1 }, dateInputRoot: { paddingHorizontal: 0 }, nativeDateInput: { ...g.default.absoluteFillObject, cursor: "inherit", height: "1px", margin: 0, opacity: 0, padding: 0, width: "1px" }, calendarLabel: { justifyContent: "center", marginStart: e.spaces.space12 } }));
        },
        586855: (e, t, a) => {
            a.d(t, { DD: () => k, ZP: () => F, Zj: () => S, dX: () => v, ww: () => w });
            var r = a(111677),
                s = a.n(r),
                n = a(822240);
            const l = 1,
                i = 2,
                o = 3,
                c = 4,
                d = 5,
                h = 6,
                p = 7,
                u = 8,
                m = 9,
                g = 10,
                f = 11,
                b = 12,
                y = { [l]: { label: s().hac89ab0, numDays: 31 }, [i]: { label: s().ef30b30a, numDays: 28, numDaysLeapYear: 29 }, [o]: { label: s().b56920fa, numDays: 31 }, [c]: { label: s().b1a0f1ec, numDays: 30 }, [d]: { label: s().daf779c8, numDays: 31 }, [h]: { label: s().c6ad074e, numDays: 30 }, [p]: { label: s().f1db106c, numDays: 31 }, [u]: { label: s().i4e80b7a, numDays: 31 }, [m]: { label: s().efa6cc1e, numDays: 30 }, [g]: { label: s().f40a0cbe, numDays: 31 }, [f]: { label: s().ac74a31c, numDays: 30 }, [b]: { label: s().i6c1e4b2, numDays: 31 } },
                _ = (e) => ({ label: `${e}`, value: `${e}` }),
                E = (0, n.Z)(1, 29).map(_),
                C = (0, n.Z)(1, 30).map(_),
                T = (0, n.Z)(1, 31).map(_),
                D = (0, n.Z)(1, 32).map(_),
                v = () => Object.keys(y).map((e) => ({ label: y[e].label, value: e })),
                S = (e = 1, t, a, r) => {
                    const s = t || new Date(Date.now()).getFullYear();
                    return (0, n.Z)(e, s + 1)
                        .reverse()
                        .filter((e) => (2 === r && 29 === a ? Z(e) : e))
                        .map(_);
                },
                Z = (e) => 1 === new Date(e, 1, 29).getMonth(),
                k = (e, t) => {
                    if (!e) return D;
                    switch (2 === e && (!t || (t && Z(t))) ? y[e].numDaysLeapYear : y[e].numDays) {
                        case 28:
                            return E;
                        case 29:
                            return C;
                        case 30:
                            return T;
                        default:
                            return D;
                    }
                },
                w = (e, t, a) => {
                    if ("number" == typeof e && "number" == typeof t && "number" == typeof a) {
                        return `${a}-${t < 10 ? `0${t}` : `${t}`}-${e < 10 ? `0${e}` : `${e}`}`;
                    }
                    return "";
                };
            const F = {
                getFormattedDateValue: w,
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
        420412: (e, t, a) => {
            a.d(t, { Z: () => o });
            var r = a(202784),
                s = a(325686),
                n = a(235902),
                l = a(885015),
                i = a(392237);
            function o({ borderColor: e = "borderColor", isSlim: t = !1, label: a }) {
                const { isWebRedesign: o } = n.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return a ? r.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(s.Z, { style: c.gapColumn }, r.createElement(s.Z, { style: [c.gap, d] })), r.createElement(s.Z, { style: c.gapText }, a), r.createElement(s.Z, { style: c.gapColumn }, r.createElement(s.Z, { style: [c.gap, d] }))) : r.createElement(s.Z, { style: [!t && c.root, o() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, a) => {
            a.d(t, { Z: () => c });
            var r = a(807896),
                s = a(202784),
                n = a(325686),
                l = a(392237);
            class i extends s.Component {
                render() {
                    const { children: e, style: t, withGutter: a, ...l } = this.props,
                        i = s.Children.map(e, (e) => e && s.cloneElement(e, { style: [e.props.style, o.column, a && o.withGutterColumn] }));
                    return s.createElement(n.Z, (0, r.Z)({ style: [t, o.root, a && o.withGutter] }, l), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const o = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        466818: (e, t, a) => {
            a.d(t, { ZP: () => b });
            var r = a(202784),
                s = a(325686),
                n = a(487552),
                l = a(302752),
                i = a(183806),
                o = a(731708),
                c = a(950822),
                d = a(224162),
                h = a(392237);
            const p = r.forwardRef((e, t) => (0, c.Z)("select", { ...e, ref: t })),
                u = (e) => (0, c.Z)("option", e);
            let m = 1;
            class g extends r.PureComponent {
                constructor(e) {
                    super(e),
                        (this._selectRef = r.createRef()),
                        (this.state = { isFocused: !1 }),
                        (this._handleChange = (e) => {
                            const { onChange: t, withEmptyOption: a } = this.props,
                                { selectedIndex: r, value: s } = e.target;
                            t && t(s, r - (a ? 1 : 0));
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
                    const { "aria-describedby": e, disabled: t, errorText: a, hasError: c, helperText: m, options: g, style: b, testID: y, value: _, withEmptyOption: E } = this.props,
                        { isFocused: C } = this.state,
                        T = o.ZP.getLanguage(),
                        D = void 0 === c ? !!a : c,
                        v = new Set();
                    a && v.add(this._errorID), e && v.add(e), m && v.add(this._helperID);
                    const S = v.size ? [...v].join(" ") : void 0;
                    return r.createElement(
                        r.Fragment,
                        null,
                        r.createElement(d.ZP.Consumer, null, ({ direction: e }) => {
                            const o = "ja" === T ? h.default.theme.fontFamilies.japan : "rtl" === e || l.Z.isLocaleRTL(T) ? h.default.theme.fontFamilies.rtl : h.default.theme.fontFamilies.normal;
                            return r.createElement(
                                s.Z,
                                { style: [i.Z.border, f.container, t && i.Z.disabled, C && i.Z.focusedBorderValid, D && i.Z.invalidBorderColor, C && D && i.Z.focusedBorderInvalid, b] },
                                this._renderLabel(),
                                r.createElement(
                                    p,
                                    { "aria-describedby": S, "aria-invalid": D, "aria-labelledby": this._labelID, disabled: t, id: this._id, onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, ref: this._selectRef, style: [f.select, { fontFamily: o }, t && i.Z.disabled], testID: y || "", value: _ },
                                    E ? r.createElement(u, { disabled: !0, style: f.option, value: "" }) : null,
                                    g.map((e) => {
                                        const { disabled: t, label: a, value: s } = e;
                                        return r.createElement(u, { disabled: t, key: `${a}-${s}`, style: f.option, value: s }, a);
                                    }),
                                ),
                                r.createElement(n.default, { style: [f.dropdownCaret, C && i.Z.validColor, !(!c && !a) && i.Z.invalidColor] }),
                            );
                        }),
                        m ? this._renderHelperText() : null,
                        D && a ? this._renderErrorText() : null,
                    );
                }
                _renderLabel() {
                    const { errorText: e, hasError: t, label: a } = this.props,
                        { isFocused: s } = this.state;
                    return r.createElement(o.ZP, { color: t || e ? "red500" : s ? "primary" : "gray700", id: this._labelID, role: "label", style: f.label }, a);
                }
                _renderHelperText() {
                    return r.createElement(s.Z, { "aria-live": "polite" }, r.createElement(o.ZP, { color: "gray700", id: this._helperID, style: f.helperText }, this.props.helperText));
                }
                _renderErrorText() {
                    return r.createElement(s.Z, { "aria-live": "polite" }, r.createElement(o.ZP, { color: "red500", id: this._errorID, style: f.helperText }, this.props.errorText));
                }
            }
            g.defaultProps = { disabled: !1, autofocus: !1, withEmptyOption: !1 };
            const f = h.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, dropdownCaret: { color: e.colors.gray700, height: "1.5em", pointerEvents: "none", position: "absolute", marginTop: "-0.75em", top: "50%", end: e.spaces.space12 }, label: { position: "absolute", fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space8, pointerEvents: "none", lineHeight: e.lineHeights.subtext2 }, option: { backgroundColor: e.colors.navigationBackground }, select: { appearance: "none", backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, color: e.colors.text, cursor: "pointer", fontSize: e.fontSizes.headline2, lineHeight: e.lineHeights.headline2, margin: 0, marginTop: e.spaces.space16, outlineStyle: "none", padding: 0, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8 }, helperText: { fontSize: e.fontSizes.subtext2, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space2 } })),
                b = g;
        },
        183806: (e, t, a) => {
            a.d(t, { Z: () => r });
            const r = a(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AdvancedSearch.f336634a.js.map
