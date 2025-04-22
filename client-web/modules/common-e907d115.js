"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["modules.common-e907d115"],
    {
        855488: (e, t, n) => {
            n.d(t, { Z: () => w });
            var i = n(807896),
                s = n(202784),
                r = n(614983),
                a = n.n(r),
                o = n(325686),
                l = n(674132),
                c = n.n(l),
                h = n(161335),
                d = n(988227),
                u = n(47086),
                p = n(293723),
                m = n(912021),
                g = n(183806),
                b = n(461756),
                y = n(731708),
                _ = n(154003),
                f = n(392237),
                x = n(959812);
            const v = (e) => e.length,
                C = (e, t = v) => t(e),
                T = c().de540c32,
                S = c().b4abfdb4;
            class w extends s.Component {
                constructor(e) {
                    super(e),
                        (this._isLabelLarge = () => {
                            const { actualCount: e, isFocused: t } = this.state;
                            return !e && !t;
                        }),
                        (this._getTextInputStyle = (0, m.Z)((e) => [L.root, !e && L.disabled])),
                        (this._getTextInputType = () => {
                            const { showPasswordVisibilityIcon: e, type: t } = this.props,
                                { isPasswordRevealed: n } = this.state;
                            return "password" === t && e ? (n ? "text" : "password") : t;
                        }),
                        (this._calculateLength = (e) => C(e, this.props.calculateLength)),
                        (this._shouldRenderDisplayCount = () => {
                            const { isFocused: e } = this.state,
                                t = this._isFormInvalid();
                            return Boolean((e || t) && this._getMaxDisplayCount());
                        }),
                        (this._isInvalidNumber = () => {
                            const { type: e } = this.props,
                                t = this._textInput?.textInputNode?.value,
                                n = this._textInput?.textInputNode?.validity?.badInput;
                            return "number" === e && "" === t && !0 === n;
                        }),
                        (this._getActualCount = (e) => {
                            let t = e.length;
                            return this._isInvalidNumber() && (t = 1), t;
                        }),
                        (this._handleBlur = () => {
                            const { onBlur: e } = this.props,
                                t = this._textInput?.getValue() || "",
                                n = this._calculateLength(t),
                                i = this._getActualCount(t);
                            this.setState({ isFocused: !1, displayCount: n, actualCount: i }), e && e();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                { previousValue: n } = this.state,
                                { value: i } = e.currentTarget,
                                s = this._calculateLength(i),
                                r = this._getActualCount(i),
                                a = this._getAdjustedMaxLength();
                            void 0 !== a && i.length > a && n.length < i.length ? (e.currentTarget.value = n) : (this.setState({ isFocused: !0, displayCount: s, actualCount: r, previousValue: e.currentTarget.value }), t && t(e));
                        }),
                        (this._handleFocus = () => {
                            const { onFocus: e } = this.props;
                            this.setState({ isFocused: !0 }), e && e();
                        }),
                        (this._handleKeyPress = (e) => {
                            const { multiline: t, onKeyPress: n, onSubmitEditing: i } = this.props;
                            n && n(e), e.isDefaultPrevented() || "Enter" !== e.key || e.shiftKey || t || !i || (e.preventDefault(), i(e));
                        }),
                        (this._handleKeyDown = (e) => {
                            const { onKeyDown: t } = this.props;
                            t && t(e);
                        }),
                        (this._handleKeyUp = (e) => {
                            const { onKeyUp: t } = this.props;
                            t && t(e);
                        }),
                        (this._handlePasswordVisibilityClick = (e) => {
                            this.setState((e) => ({ isPasswordRevealed: !e.isPasswordRevealed }));
                        }),
                        (this._setTextInputRef = (e) => {
                            this._textInput = e;
                        }),
                        (this._checkComponentPropsUsageCorrectness = (e) => {
                            const { defaultValue: t, maxLength: n, onChange: i, validLength: s, value: r } = e,
                                o = !!i,
                                l = "string" == typeof r,
                                c = "string" == typeof t;
                            a()(!(!c && l && !o), "A controlled component, a component with a value prop, must have an onChange handler. The value prop cannot be undefined."), a()(!(n && s && s > n), "Max length should be equal or greater than valid length."), a()(!((void 0 !== n && n <= 0) || (void 0 !== s && s <= 0)), "Set editable to false instead of limiting the valid character count to 0.");
                        }),
                        (this._exceedsValidLength = (e) => {
                            const t = this._getMaxDisplayCount();
                            return !!t && e > t;
                        }),
                        (this._getMaxDisplayCount = () => this.props.validLength || this.props.maxLength),
                        (this._getAdjustedMaxLength = () => {
                            const { maxLength: e } = this.props,
                                t = this.getValue(),
                                n = this._calculateLength(t);
                            return e ? e + t.length - n : void 0;
                        }),
                        this._checkComponentPropsUsageCorrectness(e);
                    const { defaultValue: t, value: n } = e,
                        i = n || t || "";
                    this.state = { displayCount: this._calculateLength(i), actualCount: v(i), isFocused: !1, isPasswordRevealed: !1, previousValue: i };
                }
                componentDidUpdate(e) {
                    const { maxLength: t, onChange: n, validLength: i, value: s } = this.props,
                        { maxLength: r, onChange: a, validLength: o, value: l } = e;
                    (o === i && t === r && !!n === !!a && ("string" == typeof s) === ("string" == typeof l)) || this._checkComponentPropsUsageCorrectness(this.props);
                }
                static getDerivedStateFromProps(e, t) {
                    const { calculateLength: n, value: i } = e,
                        s = "string" == typeof i ? C(i, n) : 0;
                    return "string" == typeof i && s !== t.displayCount ? { displayCount: s, actualCount: i.length } : null;
                }
                render() {
                    const { "aria-label": e, editable: t, errorText: n, helperText: i, style: r } = this.props,
                        { isFocused: a } = this.state,
                        l = this._isFormInvalid();
                    return s.createElement(o.Z, { style: [I.root, r] }, s.createElement(o.Z, { "aria-label": e, role: "label", style: [g.Z.border, I.textInputFormStyle, l && g.Z.invalidBorderColor, a && l && g.Z.focusedBorderInvalid, a && !l && g.Z.focusedBorderValid, !t && g.Z.disabled] }, s.createElement(o.Z, { style: I.textInputFormWrapper }, s.createElement(o.Z, { style: I.textInputHeader }, this._renderLabel(), this._shouldRenderDisplayCount() ? this._renderDisplayCount() : null), this._renderTextInput())), s.createElement(o.Z, { style: [I.sidePadding, I.underTextInputForm] }, s.createElement(o.Z, { style: I.subtextWrapper }, i ? this._renderHelperText() : null, l && n ? this._renderErrorText() : null)));
                }
                _renderLabel() {
                    const { label: e } = this.props,
                        { isFocused: t } = this.state,
                        n = t ? "primary" : "gray700",
                        i = this._isFormInvalid() ? "red500" : n,
                        r = this._isLabelLarge();
                    return s.createElement(y.ZP, { color: r ? "gray700" : i, numberOfLines: 1, size: r ? "headline1" : "subtext2", style: [I.textInputHeaderItem, r && I.placeholderText, !b.Z.reducedMotionEnabled && I.transition] }, e);
                }
                _renderTextInput() {
                    const { Icon: e, "aria-label": t, calculateLength: n, editable: r, endContent: a, errorText: l, helperText: c, invalid: h, label: d, maxLength: u, onBlur: p, onChange: m, onFocus: g, onKeyDown: b, onKeyPress: _, onKeyUp: f, onSubmitEditing: v, showPasswordVisibilityIcon: C, showValidationIcon: T, startContent: S, style: w, type: I, validLength: k, ...R } = this.props;
                    return s.createElement(o.Z, { style: L.container }, e && !this._isLabelLarge() ? this._renderIcon() : null, S ? this._renderStartContent() : null, s.createElement(y.ZP, { size: "headline1", style: L.wrapper }, s.createElement(x.Z, (0, i.Z)({}, R, { editable: r, maxLength: this._getAdjustedMaxLength(), onBlur: this._handleBlur, onChange: this._handleChange, onFocus: this._handleFocus, onKeyDown: this._handleKeyDown, onKeyPress: this._handleKeyPress, onKeyUp: this._handleKeyUp, ref: this._setTextInputRef, style: this._getTextInputStyle(r), type: this._getTextInputType() }))), a ? this._renderEndContent() : null, T && !this._isLabelLarge() ? this._renderValidationIcon() : null, this._renderPasswordVisibilityIcon());
                }
                _renderPasswordVisibilityIcon() {
                    const { showPasswordVisibilityIcon: e, type: t } = this.props,
                        { isPasswordRevealed: n } = this.state;
                    return "password" === t && e ? s.createElement(o.Z, { style: I.passwordVisibilityIconContainer }, s.createElement(_.ZP, { "aria-label": n ? S : T, focusable: !0, hoverLabel: { label: n ? S : T }, icon: n ? s.createElement(h.default, null) : s.createElement(d.default, null), onPress: this._handlePasswordVisibilityClick, size: "smallCompact", type: "primaryText" })) : null;
                }
                _renderHelperText() {
                    return s.createElement(o.Z, { "aria-live": "polite" }, s.createElement(y.ZP, { color: "gray700", size: "subtext2", style: I.subtext }, this.props.helperText));
                }
                _renderErrorText() {
                    return s.createElement(o.Z, { "aria-live": "assertive" }, s.createElement(y.ZP, { color: "red500", size: "subtext2", style: I.subtext }, this.props.errorText));
                }
                _renderDisplayCount() {
                    const { displayCount: e } = this.state,
                        t = this._getMaxDisplayCount(),
                        n = this._exceedsValidLength(e),
                        i = t && c().ia24dc8d(t),
                        r = c().ia24dc8d(e);
                    return s.createElement(o.Z, { "aria-live": "polite", style: [I.textInputHeaderItem, I.displayCount] }, s.createElement(y.ZP, { color: n ? "red500" : "gray700", size: "subtext2" }, i ? `${r} / ${i}` : ""));
                }
                _renderIcon() {
                    const { Icon: e } = this.props,
                        { isFocused: t } = this.state,
                        n = [I.icon, t && I.focusedIcon];
                    return e && s.createElement(e, { style: n });
                }
                _renderStartContent() {
                    const { startContent: e } = this.props;
                    return e;
                }
                _renderEndContent() {
                    const { endContent: e } = this.props;
                    return e;
                }
                _renderValidationIcon() {
                    return this._isFormInvalid() ? s.createElement(u.default, { style: [I.validationIcon, g.Z.invalidColor] }) : s.createElement(p.default, { style: [I.validationIcon, g.Z.validIconColor] });
                }
                _isFormInvalid() {
                    const { displayCount: e } = this.state;
                    return !!this.props.invalid || this._exceedsValidLength(e) || this._isInvalidNumber();
                }
                blur() {
                    this._textInput && this._textInput.blur();
                }
                getValue() {
                    return (this._textInput && this._textInput.getValue()) || "";
                }
                focus() {
                    this._textInput && this._textInput.focus();
                }
                isValidLength() {
                    const e = this.getValue(),
                        t = this._calculateLength(e);
                    return !this._exceedsValidLength(t);
                }
            }
            w.defaultProps = { autoComplete: "on", autoCorrect: !0, autoFocus: !1, editable: !0, invalid: !1 };
            const L = f.default.create((e) => ({ container: { flexDirection: "row", flexGrow: 1, flexShrink: 1, overflow: "hidden", paddingBottom: e.spaces.space8, paddingHorizontal: e.spaces.space8, paddingTop: e.spaces.space12, marginTop: e.spaces.space16 }, root: { backgroundColor: "transparent", borderRadius: e.borderRadii.none, borderWidth: e.borderWidths.none, boxSizing: "border-box", color: "inherit", fontFamily: "inherit", fontSize: "inherit", textAlign: "inherit", outlineStyle: "none", padding: 0 }, wrapper: { alignItems: "center", display: "flex", fontSize: e.fontSizes.headline2, width: "100%" }, disabled: { color: e.colors.gray700 } })),
                I = f.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, textInputFormStyle: { flexDirection: "row" }, textInputFormWrapper: { flexGrow: 1, flexShrink: 1 }, textInputHeader: { flexDirection: "row", justifyContent: "space-between", position: "absolute", height: "100%", width: "100%" }, textInputHeaderItem: { paddingTop: e.spaces.space8, paddingHorizontal: e.spaces.space8, fontSize: "small" }, placeholderText: { paddingTop: e.spaces.space16, fontSize: e.fontSizes.headline2, userSelect: "none" }, displayCount: { flexGrow: 1, alignItems: "flex-end" }, sidePadding: { paddingHorizontal: e.spaces.space8 }, underTextInputForm: { flexDirection: "row" }, subtextWrapper: { flexDirection: "column", flex: 1, paddingEnd: e.spaces.space20, paddingTop: e.spaces.space4 }, subtext: { alignSelf: "flex-start" }, focusedIcon: { color: e.colors.primary }, icon: { alignSelf: "center", color: e.colors.gray700, paddingEnd: e.spaces.space4 }, validationIcon: { alignSelf: "center", paddingStart: e.spaces.space4 }, transition: { transition: "transform 150ms cubic-bezier(0.4, 0, 0.2, 1), color 150ms cubic-bezier(0.4, 0, 0.2, 1), font-size 150ms cubic-bezier(0.4, 0, 0.2, 1), padding-top 150ms cubic-bezier(0.4, 0, 0.2, 1)" }, passwordVisibilityIconContainer: { alignSelf: "center", paddingStart: e.spaces.space4 }, passwordVisibilityIcon: { color: e.colors.gray700 } }));
        },
        308158: (e, t, n) => {
            n.d(t, { Z: () => a });
            var i = n(202784),
                s = n(731708),
                r = n(669474);
            function a({ role: e, align: t, color: n, dir: a, entities: o, id: l, onEntityClick: c, renderFragment: h = {}, size: d, style: u, text: p, weight: m, withHashflags: g }) {
                const b = (0, r.ZP)(p, o);
                return i.createElement(
                    s.ZP,
                    { align: t, color: n, dir: a, id: l, role: e, size: d, style: u, weight: m, withHashflags: g },
                    b.map((e, t) => {
                        const n = h[e.type],
                            r = { children: e.text, color: e.color, dir: e.dir, link: e.link, onClick: e.link ? c : void 0, weight: e.weight, withHashflags: g };
                        return i.createElement(i.Fragment, { key: `${e.text}:${t}` }, n ? n(r, e.ref) : i.createElement(s.ZP, r));
                    }),
                );
            }
            (a.makeEntityLink = r.ie), (a.internal_parseRichTextEntities = r.ZP), (a.TextFragment = s.ZP);
        },
        669474: (e, t, n) => {
            n.d(t, { ZP: () => p, ie: () => h, nt: () => c });
            n(136728);
            var i = n(982795),
                s = n(688715),
                r = n(210707),
                a = n(442730);
            const o = Object.freeze({ Cashtag: "cashtag", Hashtag: "hashtag", Mention: "mention", Url: "url", List: "twitterList" }),
                l = Object.freeze({ CashtagClick: "cashtag_click", HashtagClick: "hashtag_click" });
            function c(e) {
                return e.screenName ? o.Mention : e.hashtag ? o.Hashtag : e.cashtag ? o.Cashtag : e.url ? o.Url : null;
            }
            function h(e, t) {
                const n = (0, s.ju)("https://twitter.com");
                switch (e) {
                    case o.Cashtag:
                        return `${n}/search?q=${encodeURIComponent(`${t}`)}&src=${l.CashtagClick}`;
                    case o.Hashtag:
                        return `${n}/search?q=${encodeURIComponent(`${t}`)}&src=${l.HashtagClick}`;
                    case o.Mention:
                        return `${n}/${t}`;
                    case o.List:
                        return `${n}/i/lists/${t}`;
                    case o.Url:
                        return t.startsWith("http://") || t.startsWith("https://") ? t : `//${t}`;
                }
            }
            const d = { cashtag: (e, t) => ({ color: "link", dir: "ltr", link: h(o.Cashtag, `$${t.text}`), ref: t, text: `$${t.text}`, type: o.Cashtag }), hashtag: (e, t) => ({ color: "link", dir: a.Z.getTextDirection(t.text), link: h(o.Hashtag, `#${t.text}`), ref: t, text: `#${t.text}`, type: o.Hashtag }), mention: (e, t) => ({ color: "link", dir: "ltr", link: h(o.Mention, t.screenName), ref: t, text: `@${t.screenName}`, type: o.Mention }), text: (e, t) => ({ ref: {}, text: r.Z.replaceCarriageReturns(e), type: "text", weight: "Strong" === t ? "bold" : void 0 }), twitterList: (e, t) => ({ color: "text", link: h(o.List, t.id), ref: t, text: e, type: o.List, weight: "bold" }), url: (e, t) => ({ color: "link", link: h(o.Url, t.url), ref: t, text: e, type: o.Url }), user: (e, t) => ({ ref: t, text: e, type: "user", weight: "bold" }) },
                u = (e, t) =>
                    e.map((e) => {
                        const [n, s] = (0, i.Z)(t, e.fromIndex, e.toIndex);
                        return { ...e, fromIndex: n, toIndex: s };
                    });
            function p(e, t) {
                const n = [];
                if (t.length) {
                    const i = u(t, e);
                    let s = 0;
                    for (const t of i) {
                        const { format: i, fromIndex: r, ref: a, toIndex: o } = t;
                        o !== s && r > s && n.push(d.text(e.slice(s, r)));
                        const l = e.slice(r, o);
                        if (a) {
                            const e = Object.keys(a).find((e) => null != a[e]);
                            if (e) {
                                const t = d[e];
                                t ? n.push(t(l, a[e])) : n.push(d.text(l));
                            }
                        } else n.push(d.text(l, i));
                        s = o;
                    }
                    s < e.length && n.push(d.text(e.slice(s)));
                } else n.push(d.text(e));
                return n;
            }
        },
        673510: (e, t, n) => {
            n.d(t, { ZP: () => I });
            var i = n(807896),
                s = n(202784),
                r = n(325686),
                a = n(530525),
                o = n(731708),
                l = n(872405),
                c = n(155727),
                h = n(384153),
                d = n(235902),
                u = n(649846),
                p = n(952428),
                m = n(378729),
                g = n(126962),
                b = n(537439),
                y = n(392237),
                _ = n(823161),
                f = n(433460),
                x = n(238406),
                v = n(366635);
            const C = Object.freeze({ TWEET: "tweets", USER: "users" }),
                T = Object.freeze({ UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", SubscribableUser: "SubscribableUser" }),
                S = a.Z.createLayoutCache();
            class w extends s.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._renderUserName = () => {
                            const { affiliateBadgeInfo: e, badgeContext: t, disabledMessage: n, displayNameLabel: i, displayNameLabelType: a, isBlocking: l, isBlueVerified: c, isDisabled: h, isFollowedBy: d, isProtected: u, isVerified: p, name: m, onScreenNameClick: g, promotedContent: b, promotedItemType: y, screenName: _, screenNameSuffix: f, translatorType: x, verifiedType: T, withFollowsYou: S, withLink: w } = this.props,
                                I = s.createElement(v.Z, { affiliateBadgeInfo: e, badgeContext: t, displayNameLabel: i, displayNameLabelType: a, isBlueVerified: c, isProtected: u, isVerified: p, name: m, onLinkClick: g, promotedContent: y === C.TWEET ? b : void 0, screenName: _, screenNameSuffix: f, translatorType: x, verifiedType: T, withFollowsYou: S && d, withHoverCard: !l && !h && w, withLink: !h && w, withScreenName: !n, withStackedLayout: !0 });
                            return n ? s.createElement(r.Z, { style: L.disabledMessageContainer }, I, s.createElement(o.ZP, { color: "gray700" }, n)) : I;
                        }),
                        (this._renderSocialContext = () => {
                            const { avatarSize: e, socialContext: t } = this.props;
                            return t ? s.createElement(d.ZP.UseProps, null, (n) => s.createElement(g.Z, { avatarSize: e, contextType: t.contextType, iconSize: "large", link: t.link, style: L.socialContext, text: t.text, weight: "bold", withLeftPadding: !0 })) : null;
                        }),
                        (this._renderUserTypeaheadSocialContext = () => {
                            const { socialContext: e } = this.props,
                                { Icon: t, text: n } = (e && (0, b.Z)({ link: e.link, text: e.text, iconSize: "small", contextType: e.contextType })) || {};
                            return e ? s.createElement(r.Z, { style: L.userTypeaheadSocialContext }, s.createElement(r.Z, { style: L.userTypeaheadSocialContextIcon }, t), s.createElement(o.ZP, { color: "gray700", numberOfLines: 1, style: L.userTypeaheadSocialContextText }, n)) : null;
                        }),
                        (this._renderHighlightedUserLabel = () => {
                            const { highlightedLabel: e } = this.props;
                            return e ? s.createElement(u.Z, { label: e }) : null;
                        }),
                        (this._isEligibleForBio = () => {
                            const { displayMode: e } = this.props;
                            return -1 !== [T.UserDetailed, T.UserConcise, T.SubscribableUser].indexOf(e);
                        }),
                        (this._handleKeyPress = (e) => {
                            e.defaultPrevented || "Enter" !== e.key || this._handleClick(e);
                        }),
                        (this._handleClick = h.Z.selectiveClickHandler((e) => {
                            const { onCellClick: t } = this.props;
                            e.preventDefault(), t && t();
                        }));
                }
                _getAccessibilityRole() {
                    const { "aria-checked": e, isFakeButtonRoleWithListItem: t, onCellClick: n } = this.props;
                    return null != e ? "radio" : n && !t ? "button" : "listitem";
                }
                _getIsFocusable() {
                    const { "aria-checked": e, onCellClick: t } = this.props;
                    return null != e || null != t;
                }
                render() {
                    const { "aria-checked": e, "aria-label": t, avatarDecoration: n, avatarShape: a, avatarSize: o, avatarUri: h, bottomControl: d, decoration: u, displayMode: g, isBlocking: b, isDisabled: y, isFakeButtonRoleWithListItem: x, onAvatarClick: v, onCellClick: w, onScreenNameClick: I, presenceIndicator: k, promotedContent: R, promotedItemType: E, screenName: D, style: P, testID: Z, userId: V, withBottomSocialContext: M, withDarkerInteractiveBackground: z, withInteractiveStyling: H, withLink: B, withUsernameCenterAligned: F } = this.props,
                        U = B && !b,
                        K = g === T.UserCompact || F,
                        A = R && E === C.USER && "earned" !== (R.disclosure_type && R.disclosure_type.toLowerCase()) ? s.createElement(m.Z, { contentAuthorId: V, promotedContent: R, style: L.promotedIndicator }) : null,
                        N = { "aria-hidden": !0, decoration: n, focusable: !1, imageLayoutCache: S, onClick: v, onHoverCardScreenNameClick: I, promotedContent: R, screenName: D, style: L.avatar, uri: h, withHoverCard: U, withLink: B, shape: a },
                        $ = s.createElement(c.Z.Consumer, null, ({ avatarSize: e }) => (k ? s.createElement(f.Z, (0, i.Z)({}, N, k, { size: e })) : s.createElement(_.default, (0, i.Z)({ size: e }, N)))),
                        O = this._getAccessibilityRole(),
                        W = this._getIsFocusable(),
                        G = this._renderUserName(),
                        j = this._renderHighlightedUserLabel(),
                        Y = this._renderBio(),
                        X = j || Y || A || d,
                        q = s.createElement(s.Fragment, null, j, Y, A, d ? s.createElement(r.Z, { style: L.bottomControl }, d) : null);
                    return s.createElement(p.Z, { actAsButtonRole: x, "aria-checked": e, "aria-label": t, disabled: !!y, focusable: W, onClick: this._handleClick, onKeyPress: this._handleKeyPress, pointerEvents: y ? "none" : void 0, role: O, style: [L.root, P], testID: Z, withDarkerInteractiveBackground: z, withInteractiveStyling: H ?? !!w }, M ? null : this._renderSocialContext(), s.createElement(l.Z, { avatarCell: $, avatarCellStyle: [L.avatarColumn, K && L.bodyColumnCentered], avatarSize: o, cellStyle: [L.bodyColumn, K && L.bodyColumnCentered] }, s.createElement(r.Z, { style: L.body }, G, u), K ? null : q, M ? this._renderUserTypeaheadSocialContext() : null), X && K ? s.createElement(l.Z, { avatarCell: null, avatarCellStyle: L.avatarColumn, cellStyle: L.bodyColumn }, q) : null);
                }
                _renderBio() {
                    const { description: e, displayMode: t, entities: n, isConcise: i, userId: r, withheldDescription: a, withheldEntities: o } = this.props;
                    return n && e && this._isEligibleForBio() ? s.createElement(x.Z, { description: e, entities: n, isConcise: i || t === T.UserConcise, style: L.bio, userId: r, withheldDescription: a, withheldEntities: o }) : null;
                }
            }
            w.defaultProps = { testID: "UserCell", withLink: !0 };
            const L = y.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, avatarColumn: { justifyContent: "flex-start" }, bodyColumn: { flexGrow: 1 }, bodyColumnCentered: { justifyContent: "center" }, avatar: { display: "block", width: "100%" }, bio: { paddingTop: e.spaces.space4, whiteSpace: "normal" }, socialContext: { marginBottom: e.spaces.space4 }, userTypeaheadSocialContext: { alignItems: "center", flexDirection: "row", textColor: e.colors.gray700 }, userTypeaheadSocialContextIcon: { flexShrink: 0 }, userTypeaheadSocialContextText: { paddingStart: e.spaces.space2 }, body: { alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, promotedIndicator: { margin: 0, paddingTop: e.spaces.space4, paddingBottom: 0, paddingHorizontal: 0 }, bottomControl: { paddingTop: e.spaces.space4 }, disabledMessageContainer: { flexShrink: 1 } })),
                I = w;
        },
        31501: (e, t, n) => {
            n.d(t, { Z: () => w });
            var i = n(807896),
                s = n(202784),
                r = n(928316),
                a = n(151624),
                o = n(325686),
                l = n(731708),
                c = n(483054),
                h = n(295559),
                d = n(466792),
                u = n(58881),
                p = n(530732),
                m = n(392237),
                g = n(933895),
                b = n(301049),
                y = n(27137);
            const _ = Object.freeze({ START: "start", END: "end" }),
                f = y.Z.spaces.space16,
                x = y.Z.spacesPx.space16,
                v = y.Z.spaces.space32,
                C = (y.Z.spacesPx.space32 - x) / 2;
            class T extends s.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._sliderVisibleLength = 1),
                        (this._activeThumb = null),
                        (this._keyPressValueDelta = 1),
                        (this._renderInteractiveMarkers = ({ cssColor: e, dimmedBackgroundColorStyle: t, positionStyleDirection: n, solidBackgroundColorStyle: i }) => {
                            const r = u.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: e }),
                                a = this._shouldOverrideRTL(),
                                l = this._getThumbButtonStyles(a),
                                c = this._getMarkers(n, i, t);
                            return s.createElement(
                                s.Fragment,
                                null,
                                c.map((e) => s.createElement(p.Z, { hoverLabel: e.hoverLabel ? { label: e.hoverLabel } : void 0, interactiveStyles: r, key: e.value, role: "none", style: [l, e.style] }, s.createElement(o.Z, { style: [S.markerThumb, e.thumbStyle] }))),
                            );
                        }),
                        (this._renderIcon = (e) => {
                            const { endThumbLabel: t, isVertical: n, maxIcon: i, minIcon: r, startThumbLabel: a } = this.props;
                            if (!r && !i) return null;
                            const l = e ? (n ? i : r) : n ? r : i,
                                c = e ? S.maxIconVerticalMargin : S.minIconVerticalMargin,
                                h = e ? S.minIconHorizontalMarginOverrideRTL : S.maxIconHorizontalMarginOverrideRTL,
                                d = this._shouldOverrideRTL() ? h : e ? S.minIconHorizontalMargin : S.maxIconHorizontalMargin,
                                u = [n ? c : d, n || (!a && !t) ? null : S.horizontalIconWithThumbLabel];
                            return s.createElement(o.Z, { style: u }, l);
                        }),
                        (this._renderThumb = (e, { isTrackHovered: t, solidBackgroundColorStyle: n }) => {
                            const {
                                hoverLabels: i,
                                startThumbAccessibilityLabel: r,
                                startThumbAccessibilityLabelValueText: a,
                                endThumbAccessibilityLabel: c,
                                endThumbAccessibilityLabelValueText: h,
                                min: d,
                                max: g,
                                value: [b, y],
                                color: f,
                                withHidingThumb: x,
                                isVertical: v,
                                startThumbLabel: C,
                                endThumbLabel: T,
                                onDarkBackground: w,
                                isSingleSlider: L,
                                disabled: I,
                            } = this.props;
                            if (L && e) return null;
                            const k = e ? a : h,
                                R = e ? r : c,
                                E = e ? b : y,
                                D = this._shouldOverrideRTL(),
                                P = m.default.theme.colors[f],
                                Z = u.Z.generate({ backgroundColor: m.default.theme.colors.transparent, color: P }),
                                V = v ? "bottom" : D ? "end" : "start",
                                M = (this.state.focusedThumb || this._activeThumb) === (e ? _.START : _.END),
                                z = this._isRTL(),
                                H = x && !t && !M,
                                B = this._getThumbButtonStyles(D),
                                { positionStyle: F } = this._getPositionStyleForValue({ value: E, positionStyleDirection: V }),
                                U = e ? C : T,
                                K = e ? this._handleFocusRingGainedStart : this._handleFocusRingGainedEnd;
                            return s.createElement(p.Z, { "aria-label": R, "aria-valuemax": g, "aria-valuemin": d, "aria-valuenow": E, "aria-valuetext": k || E.toString(), focusable: !I, hoverLabel: i ? { label: i[E] } : void 0, interactive: !I, interactiveStyles: Z, onFocusRingGained: K, onFocusRingLost: this._handleFocusRingLost, onKeyUp: this._handleKeyUp, onMouseDown: this._handleMouseDown, ref: this._handleThumbRef(e), role: "adjustable", style: [B, F] }, s.createElement(o.Z, { style: [S.thumb, H && S.thumbHidden, M && S.thumbActive, n] }), U ? s.createElement(l.ZP, { color: w ? "white" : void 0, size: "subtext2", style: [S.thumbLabel, z ? S.thumbLabelLeftRTL : S.thumbLabelLeft] }, U) : null);
                        }),
                        (this._getPositionStyleForValue = ({ positionStyleDirection: e, value: t }) => {
                            const { max: n, min: i } = this.props,
                                s = (t - i) / (n - i),
                                r = {};
                            return (r[e] = `calc(${100 * s}% - ${f} * ${s})`), { valuePosition: s, positionStyle: r };
                        }),
                        (this._markerValueIsInsideRange = (e) => {
                            const { value: t } = this.props,
                                [n, i] = t;
                            return e >= n && e <= i;
                        }),
                        (this._getThumbButtonStyles = (e) => {
                            const { disabled: t, isVertical: n } = this.props;
                            return [S.thumbButton, n ? S.verticalThumbButton : e ? S.horizontalThumbButtonOverrideRTL : S.horizontalThumbButton, t && S.thumbButtonDisabled];
                        }),
                        (this._shouldOverrideRTL = () => this._isLanguageRTL() && this.props.keepLTR),
                        (this._isLanguageRTL = () => "rtl" === this.props.languageWritingDirection),
                        (this._isRTL = () => this._isLanguageRTL() && !this.props.keepLTR),
                        (this._handleRootRef = (e) => {
                            e && (this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener(), (this._removeTouchMoveToScrollListener = (0, g.O)(e, this._handleTouchMoveToScroll, !1)));
                        }),
                        (this._handleThumbRef = (e) => (t) => {
                            this._removeHandlerIfExists(e, e ? this._startThumbRef : this._endThumbRef), e ? (this._startThumbRef = t) : (this._endThumbRef = t);
                            const n = r.findDOMNode(t);
                            n && (e ? ((this._existingKeyDownStartHandler = this._handleKeyDown(e)), n.addEventListener("keydown", this._existingKeyDownStartHandler)) : ((this._existingKeyDownEndHandler = this._handleKeyDown(e)), n.addEventListener("keydown", this._existingKeyDownEndHandler)));
                        }),
                        (this._removeHandlerIfExists = (e, t) => {
                            if (!t) return;
                            const n = r.findDOMNode(t);
                            if (n) {
                                const t = e ? this._existingKeyDownStartHandler : this._existingKeyDownEndHandler;
                                n.removeEventListener("keydown", t);
                            }
                        }),
                        (this._existingKeyDownStartHandler = null),
                        (this._existingKeyDownEndHandler = null),
                        (this._handleLayout = (e) => {
                            const { isVertical: t } = this.props;
                            this._sliderVisibleLength = e.nativeEvent.layout[t ? "height" : "width"];
                        }),
                        (this._resetKeyPressValueDelta = () => {
                            const { max: e, min: t, step: n } = this.props;
                            this._keyPressValueDelta = "number" == typeof n ? n : 0.001 * (e - t);
                        }),
                        (this._handleKeyUp = (e) => {
                            this._resetKeyPressValueDelta();
                        }),
                        (this._handleKeyDown = (e) => (t) => {
                            const { keyboardStep: n, max: i, min: s, step: r, value: a } = this.props,
                                [o, l] = a,
                                c = e ? o : l,
                                { altKey: h, ctrlKey: d, metaKey: u } = t;
                            if (h || d || u) return;
                            const p = this._isRTL(),
                                m = t.key === b.Z.ArrowUp || t.key === (p ? b.Z.ArrowLeft : b.Z.ArrowRight),
                                g = t.key === b.Z.ArrowDown || t.key === (p ? b.Z.ArrowRight : b.Z.ArrowLeft);
                            if (m || g) {
                                let o = a;
                                if (n) o = this._normalizeValue(c + n * (m ? 1 : -1));
                                else {
                                    let e = 0.05 * (i - s);
                                    "number" == typeof r && e < r && (e = r);
                                    const t = Math.min(this._keyPressValueDelta, e) * (m ? 1 : -1);
                                    (this._keyPressValueDelta *= 1.4), (o = this._normalizeValue(c + t));
                                }
                                this._triggerChange(e, o), (o !== s && o !== i) || this._resetKeyPressValueDelta(), t.preventDefault();
                            }
                        }),
                        (this._handleMouseDown = (e) => {
                            e.preventDefault();
                        }),
                        (this._normalizeValue = (e) => {
                            const { max: t, min: n } = this.props,
                                i = this._roundToMultipleOfStep(e);
                            return Math.max(n, Math.min(i, t));
                        }),
                        (this._roundToMultipleOfStep = (e) => {
                            const { step: t } = this.props;
                            return "number" == typeof t ? t * Math.round(e / t) : e;
                        }),
                        (this._triggerChange = (e, t) => {
                            const { onChange: n } = this.props;
                            n(this._getNewRangeValues(e, t), e);
                        }),
                        (this._getNewRangeValues = (e, t) => {
                            const { value: n } = this.props,
                                [i, s] = n,
                                [r, a] = this._calculateNewRangeValuesWithoutConstraint(e, t, [i, s]);
                            return [Math.min(r, s), Math.max(i, a)];
                        }),
                        (this._calculateNewRangeValuesWithoutConstraint = (e, t, n) => {
                            const [i, s] = n,
                                r = this._normalizeValue(t);
                            return e ? [r, s] : [i, r];
                        }),
                        (this._handleStartShouldSetPanResponder = (e, t) => {
                            const { disabled: n } = this.props;
                            return !n;
                        }),
                        (this._handleMoveShouldSetPanResponder = (e, t) => {
                            const { disabled: n } = this.props;
                            return !n;
                        }),
                        (this._handlePanResponderGrant = (e, t) => {
                            const { disabled: n, isVertical: i, min: s } = this.props;
                            if (n) return;
                            const r = i ? this._getLocationY(e) : this._getLocationX(e),
                                a = this._normalizeValue(s + this._scaleLengthByMinMaxRatio(r)),
                                o = this._isValueClosestToRangeStart(a);
                            this._setPanResponderSelected(o), this._triggerChange(o, a), (this._valueOnGrant = a), this._setActive(!0, o);
                        }),
                        (this._getSliderInteractiveLength = () => this._sliderVisibleLength - x),
                        (this._scaleLengthByMinMaxRatio = (e) => {
                            const { max: t, min: n } = this.props;
                            return (e / this._getSliderInteractiveLength()) * (t - n);
                        }),
                        (this._getLocationX = (e) => {
                            const t = e.currentTarget,
                                n = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : { left: 0 },
                                i = e.nativeEvent.pageX - window.pageXOffset - ((n && n.left) || 0) - C;
                            return this._isRTL() ? this._getSliderInteractiveLength() - i : i;
                        }),
                        (this._getLocationY = (e) => {
                            const t = e.currentTarget,
                                n = "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : { top: 0 },
                                i = e.nativeEvent.pageY - window.pageYOffset - ((n && n.top) || 0) - C;
                            return this._getSliderInteractiveLength() - i;
                        }),
                        (this._setActive = (e, t) => {
                            const { onActive: n } = this.props;
                            (this._activeThumb = e ? (t ? _.START : _.END) : null), n && n(!!this._activeThumb);
                        }),
                        (this._setPanResponderSelected = (e) => {
                            this._panResponderFocusedRangeStart = e;
                        }),
                        (this._handleTouchMoveToScroll = (e) => {
                            e.preventDefault();
                        }),
                        (this._handlePanResponderChange = (e) => {
                            const { disabled: t, isVertical: n } = this.props;
                            if (t) return;
                            let i = 0;
                            (i = n ? -1 * e.dy : (this._isRTL() ? -1 : 1) * e.dx), this._triggerChange(this._panResponderFocusedRangeStart, this._valueOnGrant + this._scaleLengthByMinMaxRatio(i));
                        }),
                        (this._handlePanResponderMove = (e, t) => {
                            this._handlePanResponderChange(t);
                        }),
                        (this._handlePanResponderEnd = (e, t) => {
                            this._handlePanResponderChange(t), this._setActive(!1, !1);
                        }),
                        (this._handleFocusRingGainedStart = () => {
                            this.setState({ focusedThumb: _.START });
                        }),
                        (this._handleFocusRingGainedEnd = () => {
                            this.setState({ focusedThumb: _.END });
                        }),
                        (this._handleFocusRingLost = () => {
                            this.setState({ focusedThumb: null });
                        }),
                        (this.state = { focusedThumb: null }),
                        this._resetKeyPressValueDelta(),
                        (this._panResponder = a.Z.create({ onStartShouldSetPanResponder: this._handleStartShouldSetPanResponder, onMoveShouldSetPanResponder: this._handleMoveShouldSetPanResponder, onPanResponderGrant: this._handlePanResponderGrant, onPanResponderMove: this._handlePanResponderMove, onPanResponderRelease: this._handlePanResponderEnd, onPanResponderTerminate: this._handlePanResponderEnd }));
                }
                componentDidMount() {
                    const { autoFocus: e, isSingleSlider: t } = this.props;
                    e && (t ? this._endThumbRef?.focus() : this._startThumbRef?.focus());
                }
                componentWillUnmount() {
                    this._removeTouchMoveToScrollListener && this._removeTouchMoveToScrollListener();
                }
                render() {
                    const { color: e, disabled: t, endThumbLabel: n, isVertical: r, startThumbLabel: a, value: l, withGrayBackground: u, withHidingThumb: p } = this.props,
                        [g, b] = l,
                        y = m.default.theme.colors[e],
                        _ = (0, h.xO)(u ? m.default.theme.colors.gray200 : y),
                        f = (0, c.oL)({ color: _, percent: 0.33, replace: !0 }),
                        x = (0, h.rb)(f),
                        v = "white" === e ? (0, c._j)({ color: _, coefficient: 0.4 }) : (0, c.$n)({ color: _, coefficient: 0.5 }),
                        C = (0, h.rb)(v),
                        T = { backgroundColor: y },
                        w = { backgroundColor: C },
                        L = { backgroundColor: x },
                        I = this._shouldOverrideRTL(),
                        k = this.props.isVertical ? "bottom" : I ? "end" : "start";
                    return s.createElement(
                        o.Z,
                        { style: [S.root, r && S.verticalRoot, I && S.ltr, t && S.disabled] },
                        this._renderIcon(!0),
                        s.createElement(d.Z, null, ({ isHovered: l }) => {
                            const c = this.state.focusedThumb || this._activeThumb,
                                h = p && !l && !c,
                                { valuePosition: d } = this._getPositionStyleForValue({ value: g, positionStyleDirection: k }),
                                { valuePosition: u } = this._getPositionStyleForValue({ value: b, positionStyleDirection: k }),
                                m = { flexGrow: d },
                                _ = { flexGrow: u - d };
                            return s.createElement(o.Z, (0, i.Z)({}, this._panResponder.panHandlers, { onLayout: this._handleLayout, ref: this._handleRootRef, style: [S.slider, r ? S.verticalSlider : S.horizontalSlider, r || (!a && !n) ? null : S.horizontalSliderWithLabel, t && S.sliderDisabled] }), s.createElement(o.Z, { style: [S.track, r ? S.verticalTrack : S.horizontalTrack, h && (r ? S.verticalTrackWithHiddenThumb : S.horizontalTrackWithHiddenThumb), "white" === e ? L : w] }, s.createElement(o.Z, { style: [S.hiddenTrack, m] }), s.createElement(o.Z, { style: [S.progress, T, _] }), this._renderThumb(!0, { solidBackgroundColorStyle: T, isTrackHovered: l }), this._renderThumb(!1, { solidBackgroundColorStyle: T, isTrackHovered: l }), this._renderInteractiveMarkers({ cssColor: y, positionStyleDirection: k, solidBackgroundColorStyle: T, dimmedBackgroundColorStyle: w })));
                        }),
                        this._renderIcon(!1),
                    );
                }
                _getMarkers(e, t, n) {
                    const { hoverLabels: i, isSingleSlider: s, max: r, min: a, step: o, value: l, withMarkers: c } = this.props;
                    if (!c || "number" != typeof o) return [];
                    const h = r - a / o + 1;
                    return Array.from({ length: h })
                        .map((e, t) => t * o + a)
                        .filter((e) => (s ? l[1] !== e : !l.includes(e)))
                        .map((s) => {
                            const { positionStyle: r } = this._getPositionStyleForValue({ value: s, positionStyleDirection: e }),
                                a = this._markerValueIsInsideRange(s) ? t : n;
                            return { hoverLabel: i && i[s], value: s, style: r, thumbStyle: a };
                        });
                }
                _isValueClosestToRangeStart(e) {
                    const { isSingleSlider: t, value: n } = this.props,
                        [i, s] = n;
                    if (t) return !1;
                    if (i === s && i === this.props.min) return !1;
                    if (i === s && e === this.props.max) return !0;
                    if (e < i) return !0;
                    if (e > s) return !1;
                    return Math.abs(e - i) < Math.abs(e - s);
                }
            }
            T.defaultProps = { color: "primary", step: 1 };
            const S = m.default.create((e) => ({
                    root: { userSelect: "none", flexDirection: "row", alignItems: "center" },
                    disabled: { opacity: 0.5 },
                    ltr: { writingDirection: "ltr" },
                    verticalRoot: { flexDirection: "column", flexGrow: 1 },
                    minIconHorizontalMargin: { marginEnd: e.spaces.space12 },
                    maxIconHorizontalMargin: { marginStart: e.spaces.space12 },
                    minIconHorizontalMarginOverrideRTL: { marginStart: e.spaces.space12 },
                    maxIconHorizontalMarginOverrideRTL: { marginEnd: e.spaces.space12 },
                    horizontalIconWithThumbLabel: { marginTop: e.spaces.space16 },
                    maxIconVerticalMargin: { marginBottom: e.spaces.space12 },
                    minIconVerticalMargin: { marginTop: e.spaces.space12 },
                    slider: { cursor: "pointer", flexGrow: 1, alignItems: "center" },
                    sliderDisabled: { cursor: "auto" },
                    verticalSlider: { width: e.spaces.space20, flexDirection: "column" },
                    horizontalSlider: { height: e.spaces.space20, flexDirection: "row" },
                    horizontalSliderWithLabel: { marginTop: e.spaces.space16 },
                    track: { backgroundColor: e.colors.gray200, borderRadius: e.borderRadii.medium, flexGrow: 1, alignItems: "center" },
                    verticalTrack: { width: e.spaces.space4, flexDirection: "column-reverse", justifyContent: "flex-start" },
                    horizontalTrack: { height: e.spaces.space4, flexDirection: "row" },
                    hiddenTrack: { opacity: 0 },
                    verticalTrackWithHiddenThumb: { width: `calc(${e.spaces.space4} / 2)` },
                    horizontalTrackWithHiddenThumb: { height: `calc(${e.spaces.space4} / 2)` },
                    progress: { backgroundColor: e.colors.primary, borderRadius: e.borderRadii.medium, alignSelf: "stretch" },
                    thumbButton: { borderRadius: e.borderRadii.infinite, cursor: "pointer", height: v, width: v, alignItems: "center", justifyContent: "center", position: "absolute" },
                    thumbButtonDisabled: { cursor: "auto" },
                    verticalThumbButton: { marginBottom: `calc(-1 * ${C}px)` },
                    horizontalThumbButton: { marginStart: `calc(-1 * ${C}px)` },
                    horizontalThumbButtonOverrideRTL: { marginEnd: `calc(-1 * ${C}px)` },
                    thumb: { backgroundColor: e.colors.white, height: f, width: f, borderRadius: e.borderRadii.infinite, transitionProperty: "transform", transitionDuration: "0.1s", transform: [{ scale: 1 }], boxShadow: e.boxShadows.xSmall },
                    thumbLabel: { position: "absolute", top: C - e.spacesPx.space4 + "px", transform: "translate(-50%,-100%)", whiteSpace: "nowrap", pointerEvents: "none" },
                    thumbLabelLeft: { start: "50%" },
                    thumbLabelLeftRTL: { end: "50%" },
                    markerThumb: { height: 12, width: 12, borderRadius: e.borderRadii.infinite, boxShadow: e.boxShadows.xSmall },
                    thumbActive: { transform: [{ scale: 1.2 }] },
                    thumbHidden: { transform: [{ scale: 0 }] },
                })),
                w = T;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/modules.common-e907d115.faf570ea.js.map
