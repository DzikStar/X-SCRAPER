"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.OAuth"],
    {
        811105: (e, t, r) => {
            r.d(t, { Z: () => p });
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(392237),
                s = r(674132),
                l = r.n(s);
            const c = l().c174e46e,
                d = l().a39075ff,
                u = i.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                p = (e) => {
                    const { scopes: t, size: r, title: i } = e,
                        [s, l] = o.useState(!1),
                        p = o.useCallback(() => {
                            l((e) => !e);
                        }, []),
                        m = s ? t : t.slice(0, 3),
                        h = t.length > 3;
                    return o.createElement(
                        o.Fragment,
                        null,
                        o.createElement(n.ZP, { style: u.scopesHeader, weight: "bold" }, i),
                        o.createElement(
                            a.Z,
                            { role: "list" },
                            m.map((e) => o.createElement(n.ZP, { color: "subtext2" === r ? "gray700" : void 0, key: e.name, role: "listitem", size: r, style: u.listItem }, e.description)),
                        ),
                        h && s ? o.createElement(n.ZP, { onPress: p, style: u.toggleMoreLink }, c) : null,
                        h && !s ? o.createElement(n.ZP, { onPress: p, style: u.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        143019: (e, t, r) => {
            r.r(t), r.d(t, { OAuthConsentScreen: () => pe, default: () => he });
            var o = r(202784),
                a = r(325686),
                n = r(108362),
                i = r(537392),
                s = r(392237),
                l = r(992942),
                c = r(731708),
                d = r(673510),
                u = r(167630),
                p = r(154003),
                m = r(661810),
                h = r(688715),
                g = r(420740),
                y = r(674132),
                f = r.n(y),
                E = r(811105);
            const C = f().e7dd62c4;
            function b() {
                return o.createElement(E.Z, { scopes: w, title: C });
            }
            const w = [
                { category: "can_view", description: f().debbdc98, name: "scope1", rank: 0 },
                { category: "can_view", description: f().d9cf7c9c, name: "scope2", rank: 1 },
                { category: "can_view", description: f().cdf40068, name: "scope3", rank: 2 },
            ];
            var v = r(691533),
                x = r(520913),
                S = r(655352),
                Z = r(640872);
            class _ extends o.Component {
                componentDidMount() {
                    (0, S.ZP)() && (this.context.setSideNavSupport(!1), this.context.incrementDmDrawerSuppressorCount());
                }
                componentWillUnmount() {
                    (0, S.ZP)() && (this.context.setSideNavSupport(!0), this.context.decrementDmDrawerSuppressorCount());
                }
                render() {
                    const { children: e, footerContent: t } = this.props;
                    return o.createElement(a.Z, { style: A.container }, o.createElement(a.Z, { style: A.navbar }, o.createElement(x.default, { style: A.icon })), o.createElement(a.Z, { style: A.body }, o.createElement(v.Z, { showReload: !0 }, e)), t ? o.createElement(a.Z, { style: A.footer }, o.createElement(c.ZP, { style: A.footerContent }, t)) : null);
                }
            }
            _.contextType = Z.Z;
            const A = s.default.create((e) => ({ body: { flexBasis: "auto", flexGrow: 1, flexShrink: 0 }, container: { display: "flex", flexDirection: "column", height: "100%" }, footer: { alignItems: "center", backgroundColor: e.colors.gray0, display: "flex", flexShrink: 0, minHeight: e.spaces.space64, paddingStart: e.spaces.space20, paddingEnd: e.spaces.space20, textAlign: "center" }, footerContent: { margin: "auto" }, icon: { color: e.colors.text, height: e.spaces.space36, margin: "auto", width: e.spaces.space36 }, navbar: { alignItems: "center", borderColor: e.colors.borderColor, borderStyle: "solid", borderWidth: e.borderWidths.small, display: "flex", minHeight: e.spaces.space64, textAlign: "center" } })),
                L = _,
                P = ({ apiClient: e, featureSwitches: t }) => ({ fetch: (t, r = {}) => e.getUnversioned("/2/oauth2/authorize", t, r), post: (t) => e.postUnversioned("/2/oauth2/authorize", t, {}) });
            var T = r(499627),
                k = r(917799),
                I = r(312771);
            const D = "oAuthConsent",
                F = Object.freeze({ REQUEST: "rweb/oAuthConsent/FETCH_CONSENT_METADATA_REQUEST", SUCCESS: "rweb/oAuthConsent/FETCH_CONSENT_METADATA_SUCCESS", FAILURE: "rweb/oAuthConsent/FETCH_CONSENT_METADATA_FAILURE" }),
                N = Object.freeze({ REQUEST: "rweb/oAuthConsent/POST_CONSENT_REQUEST", SUCCESS: "rweb/oAuthConsent/POST_CONSENT_SUCCESS", FAILURE: "rweb/oAuthConsent/POST_CONSENT_FAILURE" }),
                R = "rweb/oAuthConsent/FETCH_FAILED",
                U = { consentMetadata: void 0, fetchStatus: I.ZP.NONE, postStatus: I.ZP.NONE, redirectUri: void 0 };
            function B(e = U, t) {
                if (!t) return e;
                switch (t.type) {
                    case F.REQUEST:
                        return { ...e, fetchStatus: I.ZP.LOADING };
                    case F.FAILURE:
                        return { ...e, fetchStatus: I.ZP.FAILED };
                    case F.SUCCESS:
                        return t.payload ? { ...e, consentMetadata: t.payload, fetchStatus: I.ZP.LOADED } : e;
                    case R:
                        return t.payload ? { ...e, fetchStatus: I.ZP.FAILED, redirectUri: t.payload.redirectUri } : e;
                    case N.REQUEST:
                        return { ...e, postStatus: I.ZP.LOADING };
                    case N.FAILURE:
                        return { ...e, postStatus: I.ZP.FAILED };
                    case N.SUCCESS:
                        return t.payload ? { ...e, redirectUri: t.payload.redirect_uri, postStatus: I.ZP.LOADED } : e;
                    default:
                        return e;
                }
            }
            T.Z.register({ [D]: B });
            const M = (e) => e[D].consentMetadata || {},
                O = (e) => e[D].redirectUri || "",
                z = (e) => e[D].fetchStatus,
                H = (e) => e[D].postStatus,
                W =
                    (e) =>
                    (t, r, { api: o }) =>
                        k._O(t, { params: e, request: o.withEndpoint(P).fetch })({ actionTypes: F, context: "FETCH_CONSENT_METADATA" }),
                Q =
                    (e) =>
                    (t, r, { api: o }) =>
                        k._O(t, { params: e, request: o.withEndpoint(P).post })({ actionTypes: N, context: "POST_CONSENT" }),
                j = {
                    customErrorHandler: (e) => {
                        const t = e.errors;
                        if (Array.isArray(t) && t.length > 0) {
                            return { payload: { redirectUri: t[0].redirect_uri }, type: R };
                        }
                        return { payload: {}, type: R };
                    },
                };
            var G = r(71620),
                V = r(668214),
                $ = r(390387),
                q = r(919022);
            const X = (0, V.Z)()
                    .propsFromState(() => ({ fetchStatus: z, isLoggedIn: $.Qb, oAuthConsentMetadata: M, postStatus: H, redirectUri: O, user: q.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, G.zr)("OAUTH_CONSENT"), fetchConsentMetadata: W, postConsent: Q })),
                K = "OAuth_Consent_Button",
                Y = "OAuth_Consent_Error_Detail",
                J = "OAuth_Consent_Log_In_Button",
                ee = f().a6da21a1,
                te = f().f4392d00,
                re = f().b08821f4,
                oe = f().cfd2f35e,
                ae = f().ee4dca3c,
                ne = f().eafcc76a,
                ie = f().j3998a16,
                se = f().bb347bbc,
                le = f().be38d34e,
                ce = f().e919c3bc,
                de = f().fc2a5c92,
                ue = f().e087691a;
            class pe extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSubmit = () => {
                            const {
                                createLocalApiErrorHandler: e,
                                oAuthConsentMetadata: { auth_code: t },
                                postConsent: r,
                            } = this.props;
                            r({ approval: !0, code: t }).catch(e());
                        }),
                        (this._handleCancel = () => {
                            const {
                                createLocalApiErrorHandler: e,
                                oAuthConsentMetadata: { auth_code: t },
                                postConsent: r,
                            } = this.props;
                            t && r({ approval: !1, code: t }).catch(e());
                        }),
                        (this._changeWindowLocation = (e) => {
                            window.location.href = e;
                        });
                }
                componentDidMount() {
                    this._fetchConsentMetadata();
                }
                componentDidUpdate(e) {
                    const { fetchStatus: t, redirectUri: r } = this.props;
                    t === I.ZP.FAILED || "" === r || e.redirectUri === r || this._changeWindowLocation(r);
                }
                render() {
                    const { fetchStatus: e, isLoggedIn: t } = this.props,
                        r = e === I.ZP.FAILED,
                        a = e === I.ZP.LOADING;
                    let i;
                    return (i = t ? (a ? this._renderLoading() : r ? this._renderErrorState() : this._renderMainContent()) : this._renderLoggedOutState()), o.createElement(L, { footerContent: this._renderFooterContent() }, o.createElement(n.Z, { style: me.layout }, i));
                }
                _renderMainContent() {
                    const {
                            oAuthConsentMetadata: { app_description: e, app_image_uri: t, app_name: r, auth_code: n },
                            postStatus: h,
                            user: g,
                        } = this.props,
                        y = h === I.ZP.FAILED,
                        f = h === I.ZP.LOADING || h === I.ZP.LOADED,
                        { id_str: E, name: C, profile_image_url_https: b, screen_name: w } = g || {},
                        v = (0, i.iv)().width < s.default.theme.breakpoints.medium;
                    return o.createElement(o.Fragment, null, y ? this._renderErrorState() : null, o.createElement(a.Z, { style: v ? me.mobileContainer : me.container }, o.createElement(a.Z, { style: me.head }, o.createElement(l.Z, { source: t, style: me.image }), o.createElement(c.ZP, { size: "title4", style: me.headline, weight: "heavy" }, ee({ appName: r }), "."), o.createElement(d.ZP, { avatarUri: b, displayMode: "UserCompact", name: C, screenName: w, style: me.userCell, userId: E, withLink: !1 }), o.createElement(a.Z, { "aria-live": "polite", style: me.actionContainer }, f ? o.createElement(u.Z, null) : o.createElement(p.ZP, { disabled: !n, onClick: this._handleSubmit, size: "xLarge", testID: K, type: "primaryFilled" }, te)), o.createElement(p.ZP, { "aria-label": ae, onPress: this._handleCancel, type: "destructiveText" }, oe)), o.createElement(m.Z, { spacing: "space32" }), o.createElement(c.ZP, null, e), this._renderCanDoScopes(), this._renderScopesList(), o.createElement(m.Z, { spacing: "space32" }), this._renderPrivacyAndTerms()), o.createElement(c.ZP, { link: "https://www.x.com", style: me.twitterLink }, "X"));
                }
                _renderFooterContent() {
                    return o.createElement(c.ZP, null, o.createElement(f().I18NFormatMessage, { $i18n: "b004e8bf" }, o.createElement(c.ZP, { link: (0, h.ju)("https://help.x.com/managing-your-account/connect-or-revoke-access-to-third-party-apps") }, se)));
                }
                _renderScopesList() {
                    const {
                            oAuthConsentMetadata: { scopes: e = [] },
                            location: t,
                        } = this.props,
                        r = "string" == typeof t.query?.redirect_uri ? t.query.redirect_uri : "";
                    if (r.startsWith("xai-grok://") || r.startsWith("https://accounts.x.ai/")) return o.createElement(b, null);
                    const a = e.filter((e) => "can_view" === e.category).sort((e, t) => e.rank - t.rank);
                    return a.length ? o.createElement(E.Z, { scopes: a, title: ne }) : null;
                }
                _renderCanDoScopes() {
                    const {
                            oAuthConsentMetadata: { scopes: e = [] },
                        } = this.props,
                        t = e.filter((e) => "can_do" === e.category).sort((e, t) => e.rank - t.rank);
                    return t.length ? o.createElement(E.Z, { scopes: t, title: ie }) : null;
                }
                _renderPrivacyAndTerms() {
                    const {
                        oAuthConsentMetadata: { organization_name: e, organization_privacy_policy_uri: t, organization_terms_and_conditions_uri: r, organization_uri: a },
                    } = this.props;
                    return e || t || r ? o.createElement(c.ZP, null, o.createElement(f().I18NFormatMessage, { $i18n: "afd52f45", orgName: e }, o.createElement(c.ZP, { link: a }, e), o.createElement(c.ZP, { link: t }, "privacy policy"), o.createElement(c.ZP, { link: r }, "terms"))) : null;
                }
                _renderLoading() {
                    return o.createElement(u.Z, null);
                }
                _renderLoggedOutState() {
                    const { redirectUri: e } = this.props;
                    return o.createElement(a.Z, { style: me.mobileContainer }, o.createElement(c.ZP, { size: "title4", style: me.loggedOutText, weight: "heavy" }, le), o.createElement(p.ZP, { link: e, size: "xLarge", style: me.logInButton, testID: J, type: "primaryFilled" }, ce));
                }
                _renderErrorState() {
                    const {
                            history: { goBack: e },
                            redirectUri: t,
                        } = this.props,
                        r = { openInSameFrame: !0, pathname: t };
                    return t ? o.createElement(g.Z, { buttonLink: r, retryLabel: re, style: me.errorState, testID: Y, title: de }, ue) : o.createElement(g.Z, { onRetry: (t) => e(), retryLabel: re, style: me.errorState, testID: Y, title: de }, ue);
                }
                _fetchConsentMetadata() {
                    const {
                            createLocalApiErrorHandler: e,
                            fetchConsentMetadata: t,
                            history: {
                                location: { query: r },
                            },
                        } = this.props,
                        o = {};
                    for (const e of ["client_id", "code_challenge", "code_challenge_method", "redirect_uri", "response_type", "scope", "state"]) o[e] = "scope" !== e ? r[e] : String(r[e]).replaceAll("+", " ");
                    t(o).catch(e(j));
                }
            }
            const me = s.default.create((e) => ({ actionContainer: { paddingTop: e.spaces.space40, paddingBottom: e.spaces.space32 }, container: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large, maxWidth: 414, padding: e.spaces.space32 }, errorState: { maxWidth: 414 }, head: { alignItems: "center", display: "flex", textAlign: "center" }, headline: { marginBottom: e.spaces.space40, marginTop: e.spaces.space40 }, image: { height: 100, width: 100 }, layout: { alignItems: "center", display: "flex", paddingBottom: e.spaces.space80, paddingTop: e.spaces.space40 }, loggedOutText: { marginBottom: e.spaces.space28, textAlign: "center" }, logInButton: { marginHorizontal: e.spaces.space64 }, mobileContainer: { maxWidth: 414, padding: e.spaces.space32 }, twitterLink: { marginTop: e.spaces.space32 }, userCell: { minWidth: "65%" } })),
                he = X(pe);
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686),
                n = r(392237);
            function i({ spacing: e, style: t }) {
                return o.createElement(a.Z, { role: "separator", style: [s.divider, { marginVertical: null != e ? n.default.theme.spaces[e] : void 0 }, t] });
            }
            const s = n.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        642153: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(202784),
                a = r(325686),
                n = r(392237),
                i = r(823161);
            const s = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: s, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: u } = e,
                        p = d.length,
                        m = "transparent" === t;
                    return o.createElement(
                        a.Z,
                        { style: [l.root, s, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, a) => o.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : r, key: a, size: c, style: [0 !== a && { marginStart: -1 * n.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: p - a }], uri: e })),
                    );
                },
                l = n.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686);
            class n extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const o = t[r];
                                    let a = "";
                                    return o && (a = ` ${100 * o}%`), e + a;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: n } = this.props;
                    return o.createElement(a.Z, { style: [n, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            n.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const i = n;
        },
        378729: (e, t, r) => {
            r.d(t, { Z: () => y });
            var o = r(202784),
                a = r(325686),
                n = r(674132),
                i = r.n(n),
                s = r(283379),
                l = r(731708),
                c = r(392237);
            const d = i().f1a1b791,
                u = i().if2bf8b4,
                p = i().f3624b5c,
                m = i().b4b3b113,
                h = i().be222050,
                g = i().hcbbe447;
            class y extends o.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return o.createElement(a.Z, { style: [f.root, r] }, o.createElement(s.default, { style: [f.icon, e && f[e]] }), o.createElement(l.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: o, advertiser: a, advertiser_name: n, disclosure_type: i } = r,
                        s = e && a && e === a.id_str,
                        l = "string" == typeof i && "political" === i.toLowerCase(),
                        c = "string" == typeof i && "issue" === i.toLowerCase(),
                        y = !(!o || "POLITICAL" !== o.disclaimerType) || l,
                        f = !(!o || "ISSUE" !== o.disclaimerType) || c,
                        { removePromotedAttributionForPreroll: E } = o || {};
                    let C;
                    return (C = t || (!n || s || E ? (y ? p : f ? h : u) : y ? m({ fullName: n }) : f ? g({ fullName: n }) : d({ fullName: n }))), C;
                }
            }
            y.defaultProps = { color: "gray700" };
            const f = c.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        537439: (e, t, r) => {
            r.d(t, { Z: () => B });
            var o = r(202784),
                a = r(674132),
                n = r.n(a),
                i = r(492140),
                s = r(720600),
                l = r(761744),
                c = r(25001),
                d = r(453333),
                u = r(136483),
                p = r(98440),
                m = r(790093),
                h = r(452693),
                g = r(544367),
                y = r(264171),
                f = r(159340),
                E = r(404971),
                C = r(262009),
                b = r(76388),
                w = r(488746),
                v = r(246492),
                x = r(520913),
                S = r(731708),
                Z = r(642153),
                _ = r(879891),
                A = r(392237),
                L = r(54606);
            const P = n().ae408b76,
                T = n().j355f008,
                k = n().habf9678,
                I = n().db0798ed,
                D = n().dc716ec9,
                F = ({ text: e }) => {
                    const { direction: t } = (0, _.Z)();
                    return o.createElement(S.ZP, { dir: t, withHashflags: !0 }, e);
                },
                N = (e, t) =>
                    t
                        ? P
                        : ((e) => {
                              const t = o.createElement(F, { text: e });
                              return o.createElement(n().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                R = A.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                U = A.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                B = ({ contextType: e, iconColor: t, iconSize: r, link: a, retweetData: n, text: S, topicData: _, userAvatarUrls: P }) => {
                    const { isSelfRetweet: B, name: M, screenName: O } = n || {},
                        z = ((e, t, r, a = []) => {
                            const n = R[t],
                                S = [r ? { color: A.default.theme.colors[r] } : U.colorDeepGray, n],
                                _ = o.createElement(i.default, { style: S }),
                                P = o.createElement(s.default, { style: S }),
                                T = o.createElement(l.default, { style: S }),
                                k = o.createElement(c.default, { style: S }),
                                I = o.createElement(d.default, { style: S }),
                                D = o.createElement(u.default, { style: U.circle }),
                                F = o.createElement(p.default, { style: S }),
                                N = o.createElement(m.default, { style: S }),
                                B = o.createElement(h.default, { style: S }),
                                M = o.createElement(g.default, { style: S }),
                                O = o.createElement(y.default, { style: S }),
                                z = o.createElement(f.default, { style: S }),
                                H = o.createElement(E.default, { style: S }),
                                W = o.createElement(C.default, { style: S }),
                                Q = o.createElement(b.default, { style: S }),
                                j = o.createElement(w.default, { style: S }),
                                G = o.createElement(v.default, { style: S }),
                                V = o.createElement(Z.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: a }),
                                $ = o.createElement(x.default, { style: S });
                            switch (e) {
                                case L.Q.Pin:
                                case L.Q.ReplyPin:
                                    return _;
                                case L.Q.Retweet:
                                    return P;
                                case L.Q.Like:
                                    return T;
                                case L.Q.Follow:
                                    return k;
                                case L.Q.Moment:
                                    return I;
                                case L.Q.NewTweets:
                                    return D;
                                case L.Q.Reply:
                                case L.Q.Conversation:
                                    return F;
                                case L.Q.Feedback:
                                    return N;
                                case L.Q.Topic:
                                    return B;
                                case L.Q.List:
                                    return M;
                                case L.Q.Location:
                                    return O;
                                case L.Q.Community:
                                    return z;
                                case L.Q.Spaces:
                                    return H;
                                case L.Q.Sparkle:
                                    return W;
                                case L.Q.SocialProof:
                                case L.Q.FollowFollowed:
                                    return G;
                                case L.Q.FollowMutual:
                                    return j;
                                case L.Q.FollowFollowing:
                                    return Q;
                                case L.Q.Facepile:
                                    return V;
                                case L.Q.Bird:
                                    return $;
                                case L.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, r, t, P);
                    switch (e) {
                        case L.Q.Retweet:
                            return { Icon: z, text: S || N(M, B), link: O ? `https://twitter.com/${O}` : void 0 };
                        case L.Q.Pin:
                            return { Icon: z, text: S || T };
                        case L.Q.ReplyPin:
                            return { Icon: z, text: k };
                        case L.Q.Topic:
                            return { Icon: z, "aria-label": "Recommendation" === _?.functionalityType || "RecWithEducation" === _?.functionalityType ? D({ topicName: S }) : I({ topicName: S }), text: S ? o.createElement(F, { text: S }) : null, link: a };
                        default:
                            return { Icon: z, text: S ? o.createElement(F, { text: S }) : null, link: a };
                    }
                };
        },
        126962: (e, t, r) => {
            r.d(t, { Z: () => g });
            r(136728);
            var o = r(202784),
                a = r(325686),
                n = r(731708),
                i = r(872405),
                s = r(235902),
                l = r(392237),
                c = r(139052),
                d = r(488684),
                u = r(537439),
                p = r(54606);
            class m extends o.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: r, id: l, onLayout: c, rightControl: d, style: p, testID: m, textColor: g, textSize: y, topControl: f, weight: E, withBottomBorder: C, withLeftPadding: b, withTextCentered: w, ...v } = this.props,
                        { Icon: x, "aria-label": S, link: Z, text: _ } = (0, u.Z)(v),
                        A = o.createElement(n.ZP, { "aria-label": S, color: g, id: l, numberOfLines: 2, size: y, testID: m, weight: E, withoutTwemojiAndHashflags: !0 }, _),
                        { cellStyle: L, viewStyle: P } = this._getStyles();
                    return _ ? o.createElement(s.ZP.UseProps, null, (n) => o.createElement(o.Fragment, null, f || null, o.createElement(a.Z, { onLayout: c, style: [p, P, n.socialContextRefreshEnabled() && !b && h.socialContextRefresh] }, o.createElement(i.Z, { avatarCell: x || (b ? null : void 0), avatarCellStyle: [r, h.socialContextIconColumn, !b && h.unsetIconWidth, n.socialContextRefreshEnabled() && !b && h.socialContextRefreshIcon], avatarSize: e, cellStyle: L }, o.createElement(a.Z, { style: h.cellWrapper }, o.createElement(a.Z, { style: [h.socialContextTextColumn, n.socialContextRefreshEnabled() && !b && h.socialContextRefreshTextColumn] }, Z ? this._renderLink(Z, A) : A), d || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: r, id: a, onClick: i, retweetData: s, textColor: l, topicData: u } = this.props,
                        { screenName: m } = s || {},
                        h = o.createElement(n.ZP, { color: l, id: a, link: e, onClick: i, withoutTwemojiAndHashflags: !0 }, t);
                    return r === p.Q.Topic && u ? o.createElement(c.Z, { topicId: u.topicId }, h) : r === p.Q.Retweet && m ? o.createElement(d.Z, { screenName: m }, h) : h;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: r, withTextCentered: o } = this.props,
                        a = t === p.Q.TextOnly,
                        n = r ? [h.bottomBorderMargin, !!e && h.bottomBorder] : [],
                        i = r && !e ? [h.bottomBorder] : [];
                    return a && i.push(h.topicContext), o && i.push(h.socialContextTextCentered), { viewStyle: n, cellStyle: i };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const h = l.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = m;
        },
        54606: (e, t, r) => {
            r.d(t, { Q: () => o });
            r(202784);
            const o = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                i = r(215337),
                s = r(392237),
                l = r(977220);
            const c = (e) => `${e}%`,
                d = s.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: c(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: c(-80) }] } } } }));
            function u() {
                const e = (0, l.ai)();
                return a.createElement("defs", null, a.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: p, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, a.createElement("stop", { stopColor: e.primary }), a.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const p = "space-gradient";
            u.fill = `url(#${p})`;
            const m = {
                    Default: function ({ children: e, style: t, type: r = "audiospace" }) {
                        return a.createElement(
                            i.Z,
                            (0, o.Z)(
                                {},
                                (function (e) {
                                    const t = (0, l.ai)(e);
                                    return { ...(0, l.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(r),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return a.createElement(
                            n.Z,
                            { style: [d.container, e.style] },
                            a.createElement(
                                i.Z,
                                (0, o.Z)(
                                    {},
                                    (function () {
                                        const e = (0, l.ai)();
                                        return { ...(0, l.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: d.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: u,
                    getColors: l.ai,
                    getDarkModeColors: l.K,
                },
                h = Object.freeze(m);
        },
        977220: (e, t, r) => {
            r.d(t, { Cs: () => d, K: () => s, ai: () => l });
            var o = r(465233),
                a = r(483054),
                n = r(295559),
                i = r(392237);
            function s(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? p(u.HighContrast[e]) : p(u.Default[e]);
            }
            function l(e = "audiospace") {
                return i.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const c = { angle: 61.63, angleUnit: "deg" };
            function d() {
                return (0, o.Z)(c);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function p(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = n.xO(e),
                    r = a.$n({ color: t, coefficient: 0.5 });
                return n.vq(n.rb(r)).slice(0, -2);
            }
        },
        433460: (e, t, r) => {
            r.d(t, { Z: () => h });
            var o = r(807896),
                a = r(202784),
                n = r(325686),
                i = r(674132),
                s = r.n(i),
                l = r(404971),
                c = r(868634),
                d = r(336373),
                u = r(181054),
                p = r(392237),
                m = r(823161);
            const h = function (e) {
                const t = d.Z.useAnalytics(),
                    [r, n] = a.useState(),
                    i = !!(r && r > 70),
                    { "aria-label": s, presenceRingType: l, spaceId: c, ...p } = e,
                    h =
                        s ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return E.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return E.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(l, e.screenName);
                a.useEffect(() => {
                    switch (l) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [l]);
                const y = a.useCallback((e) => a.createElement(u.Z.Default, (0, o.Z)({}, e, { type: l })), [l]);
                return a.createElement(
                    m.default,
                    (0, o.Z)({}, p, {
                        BorderComponent: y,
                        "aria-label": h,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== r && n(t.width);
                            }
                        },
                        borderWidth: i ? "large" : "medium",
                        decoration: a.createElement(g, { isWide: i, type: l }),
                        gapWidth: i ? "space4" : "space2",
                        onClick: function () {
                            switch (l) {
                                case "audiospace":
                                    t.scribe({ action: "click", element: "audiospace_ring" });
                                    break;
                                case "livevideo":
                                    t.scribe({ action: "click", element: "livevideo_ring" });
                            }
                        },
                        withLink: !0,
                    }),
                );
            };
            function g(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return a.createElement(y, e);
                    default:
                        return null;
                }
            }
            function y(e) {
                return "livevideo" === e.type ? a.createElement(c.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [f.liveVideoLabelContainer, f.borderNarrow, e.isWide ? f.liveVideoLabel : f.liveVideoLabelNarrow], type: "live" }) : a.createElement(n.Z, { style: [f.root, e.isWide ? f.rootWide : f.rootNarrow] }, a.createElement(u.Z.Default, { style: [f.spaceGradient, e.isWide ? f.borderWide : f.borderNarrow] }, a.createElement(l.default, { style: f.spaceIcon })));
            }
            const f = p.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        r = "100%",
                        o = e.spacesPx.space4,
                        a = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * o, bottom: -1 * o }, rootNarrow: { end: -1 * a, bottom: -1 * a }, borderWide: { borderWidth: o }, borderNarrow: { borderWidth: a }, spaceGradient: { justifyContent: "center", width: r, height: r, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                E = { withoutUsernameFallback: s().b3688156, activeAudioSpace: s().c0eb8825, activeLiveVideo: s().d068dc6d };
        },
        238406: (e, t, r) => {
            r.d(t, { Z: () => l });
            var o = r(202784),
                a = r(731708),
                n = r(354149),
                i = r(310452),
                s = r(720283);
            const l = ({ animateIn: e, description: t, entities: r, isConcise: l, style: c, testID: d, userId: u, withheldDescription: p, withheldEntities: m }) => {
                const { description: h, entities: g } = (0, s.H)({ description: t, entities: r, withheldDescription: p, withheldEntities: m }),
                    y = i.ZP.descriptionTextParts(h, g);
                return y.length
                    ? o.createElement(
                          a.ZP,
                          { dir: "auto", numberOfLines: l ? 2 : void 0, style: c, testID: d },
                          y.map((t, r) => o.createElement(n.ZP, { animateIn: e, key: `user_${u}_textpart_${r}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, r) => {
            r.d(t, { H: () => o });
            const o = ({ description: e, entities: t, withheldDescription: r, withheldEntities: o }) => (r ? { description: r, entities: o } : { description: e, entities: t });
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        452693: (e, t, r) => {
            r.r(t), r.d(t, { default: () => l });
            var o = r(202784),
                a = r(890601),
                n = r(783427),
                i = r(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(716406);
            function a(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(a) : (0, o.Z)(e, (e) => a(e));
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.OAuth.aeaf842a.js.map
