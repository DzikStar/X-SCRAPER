"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.OAuth"],
    {
        811105: (e, t, r) => {
            r.d(t, { Z: () => u });
            var n = r(202784),
                a = r(325686),
                o = r(731708),
                s = r(392237),
                c = r(111677),
                i = r.n(c);
            const l = i().c174e46e,
                d = i().a39075ff,
                p = s.default.create((e) => ({ listItem: { display: "list-item", listStyleType: "disc", marginBottom: e.spaces.space12, marginStart: e.spaces.space12 }, scopesHeader: { marginBottom: e.spaces.space12, marginTop: e.spaces.space12 }, toggleMoreLink: { color: e.colors.link, weight: "bold" } })),
                u = (e) => {
                    const { scopes: t, size: r, title: s } = e,
                        [c, i] = n.useState(!1),
                        u = n.useCallback(() => {
                            i((e) => !e);
                        }, []),
                        h = c ? t : t.slice(0, 3),
                        m = t.length > 3;
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(o.ZP, { style: p.scopesHeader, weight: "bold" }, s),
                        n.createElement(
                            a.Z,
                            { role: "list" },
                            h.map((e) => n.createElement(o.ZP, { color: "subtext2" === r ? "gray700" : void 0, key: e.name, role: "listitem", size: r, style: p.listItem }, e.description)),
                        ),
                        m && c ? n.createElement(o.ZP, { onPress: u, style: p.toggleMoreLink }, l) : null,
                        m && !c ? n.createElement(o.ZP, { onPress: u, style: p.toggleMoreLink }, d({ n: t.length - 3 })) : null,
                    );
                };
        },
        143019: (e, t, r) => {
            r.r(t), r.d(t, { OAuthConsentScreen: () => ue, default: () => me });
            var n = r(202784),
                a = r(325686),
                o = r(108362),
                s = r(537392),
                c = r(392237),
                i = r(992942),
                l = r(731708),
                d = r(673510),
                p = r(167630),
                u = r(154003),
                h = r(661810),
                m = r(688715),
                E = r(420740),
                g = r(111677),
                _ = r.n(g),
                y = r(811105);
            const C = _().e7dd62c4;
            function S() {
                return n.createElement(y.Z, { scopes: f, title: C });
            }
            const f = [
                { category: "can_view", description: _().debbdc98, name: "scope1", rank: 0 },
                { category: "can_view", description: _().d9cf7c9c, name: "scope2", rank: 1 },
                { category: "can_view", description: _().cdf40068, name: "scope3", rank: 2 },
            ];
            var A = r(691533),
                Z = r(520913),
                b = r(655352),
                L = r(640872);
            class T extends n.Component {
                componentDidMount() {
                    (0, b.ZP)() && (this.context.setSideNavSupport(!1), this.context.incrementDmDrawerSuppressorCount());
                }
                componentWillUnmount() {
                    (0, b.ZP)() && (this.context.setSideNavSupport(!0), this.context.decrementDmDrawerSuppressorCount());
                }
                render() {
                    const { children: e, footerContent: t } = this.props;
                    return n.createElement(a.Z, { style: P.container }, n.createElement(a.Z, { style: P.navbar }, n.createElement(Z.default, { style: P.icon })), n.createElement(a.Z, { style: P.body }, n.createElement(A.Z, { showReload: !0 }, e)), t ? n.createElement(a.Z, { style: P.footer }, n.createElement(l.ZP, { style: P.footerContent }, t)) : null);
                }
            }
            T.contextType = L.Z;
            const P = c.default.create((e) => ({ body: { flexBasis: "auto", flexGrow: 1, flexShrink: 0 }, container: { display: "flex", flexDirection: "column", height: "100%" }, footer: { alignItems: "center", backgroundColor: e.colors.gray0, display: "flex", flexShrink: 0, minHeight: e.spaces.space64, paddingStart: e.spaces.space20, paddingEnd: e.spaces.space20, textAlign: "center" }, footerContent: { margin: "auto" }, icon: { color: e.colors.text, height: e.spaces.space36, margin: "auto", width: e.spaces.space36 }, navbar: { alignItems: "center", borderColor: e.colors.borderColor, borderStyle: "solid", borderWidth: e.borderWidths.small, display: "flex", minHeight: e.spaces.space64, textAlign: "center" } })),
                w = T,
                v = ({ apiClient: e, featureSwitches: t }) => ({ fetch: (t, r = {}) => e.getUnversioned("/2/oauth2/authorize", t, r), post: (t) => e.postUnversioned("/2/oauth2/authorize", t, {}) });
            var x = r(499627),
                I = r(917799),
                U = r(312771);
            const k = "oAuthConsent",
                D = Object.freeze({ REQUEST: "rweb/oAuthConsent/FETCH_CONSENT_METADATA_REQUEST", SUCCESS: "rweb/oAuthConsent/FETCH_CONSENT_METADATA_SUCCESS", FAILURE: "rweb/oAuthConsent/FETCH_CONSENT_METADATA_FAILURE" }),
                O = Object.freeze({ REQUEST: "rweb/oAuthConsent/POST_CONSENT_REQUEST", SUCCESS: "rweb/oAuthConsent/POST_CONSENT_SUCCESS", FAILURE: "rweb/oAuthConsent/POST_CONSENT_FAILURE" }),
                N = "rweb/oAuthConsent/FETCH_FAILED",
                F = { consentMetadata: void 0, fetchStatus: U.ZP.NONE, postStatus: U.ZP.NONE, redirectUri: void 0 };
            function M(e = F, t) {
                if (!t) return e;
                switch (t.type) {
                    case D.REQUEST:
                        return { ...e, fetchStatus: U.ZP.LOADING };
                    case D.FAILURE:
                        return { ...e, fetchStatus: U.ZP.FAILED };
                    case D.SUCCESS:
                        return t.payload ? { ...e, consentMetadata: t.payload, fetchStatus: U.ZP.LOADED } : e;
                    case N:
                        return t.payload ? { ...e, fetchStatus: U.ZP.FAILED, redirectUri: t.payload.redirectUri } : e;
                    case O.REQUEST:
                        return { ...e, postStatus: U.ZP.LOADING };
                    case O.FAILURE:
                        return { ...e, postStatus: U.ZP.FAILED };
                    case O.SUCCESS:
                        return t.payload ? { ...e, redirectUri: t.payload.redirect_uri, postStatus: U.ZP.LOADED } : e;
                    default:
                        return e;
                }
            }
            x.Z.register({ [k]: M });
            const z = (e) => e[k].consentMetadata || {},
                H = (e) => e[k].redirectUri || "",
                R = (e) => e[k].fetchStatus,
                W = (e) => e[k].postStatus,
                B =
                    (e) =>
                    (t, r, { api: n }) =>
                        I._O(t, { params: e, request: n.withEndpoint(v).fetch })({ actionTypes: D, context: "FETCH_CONSENT_METADATA" }),
                Q =
                    (e) =>
                    (t, r, { api: n }) =>
                        I._O(t, { params: e, request: n.withEndpoint(v).post })({ actionTypes: O, context: "POST_CONSENT" }),
                q = {
                    customErrorHandler: (e) => {
                        const t = e.errors;
                        if (Array.isArray(t) && t.length > 0) {
                            return { payload: { redirectUri: t[0].redirect_uri }, type: N };
                        }
                        return { payload: {}, type: N };
                    },
                };
            var G = r(71620),
                j = r(668214),
                $ = r(390387),
                V = r(919022);
            const X = (0, j.Z)()
                    .propsFromState(() => ({ fetchStatus: R, isLoggedIn: $.Qb, oAuthConsentMetadata: z, postStatus: W, redirectUri: H, user: V.ZP.selectLoggedInUser }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, G.zr)("OAUTH_CONSENT"), fetchConsentMetadata: B, postConsent: Q })),
                J = "OAuth_Consent_Button",
                K = "OAuth_Consent_Error_Detail",
                Y = "OAuth_Consent_Log_In_Button",
                ee = _().a6da21a1,
                te = _().f4392d00,
                re = _().b08821f4,
                ne = _().cfd2f35e,
                ae = _().ee4dca3c,
                oe = _().eafcc76a,
                se = _().j3998a16,
                ce = _().bb347bbc,
                ie = _().be38d34e,
                le = _().e919c3bc,
                de = _().fc2a5c92,
                pe = _().e087691a;
            class ue extends n.Component {
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
                    t === U.ZP.FAILED || "" === r || e.redirectUri === r || this._changeWindowLocation(r);
                }
                render() {
                    const { fetchStatus: e, isLoggedIn: t } = this.props,
                        r = e === U.ZP.FAILED,
                        a = e === U.ZP.LOADING;
                    let s;
                    return (s = t ? (a ? this._renderLoading() : r ? this._renderErrorState() : this._renderMainContent()) : this._renderLoggedOutState()), n.createElement(w, { footerContent: this._renderFooterContent() }, n.createElement(o.Z, { style: he.layout }, s));
                }
                _renderMainContent() {
                    const {
                            oAuthConsentMetadata: { app_description: e, app_image_uri: t, app_name: r, auth_code: o },
                            postStatus: m,
                            user: E,
                        } = this.props,
                        g = m === U.ZP.FAILED,
                        _ = m === U.ZP.LOADING || m === U.ZP.LOADED,
                        { id_str: y, name: C, profile_image_url_https: S, screen_name: f } = E || {},
                        A = (0, s.iv)().width < c.default.theme.breakpoints.medium;
                    return n.createElement(n.Fragment, null, g ? this._renderErrorState() : null, n.createElement(a.Z, { style: A ? he.mobileContainer : he.container }, n.createElement(a.Z, { style: he.head }, n.createElement(i.Z, { source: t, style: he.image }), n.createElement(l.ZP, { size: "title4", style: he.headline, weight: "heavy" }, ee({ appName: r }), "."), n.createElement(d.ZP, { avatarUri: S, displayMode: "UserCompact", name: C, screenName: f, style: he.userCell, userId: y, withLink: !1 }), n.createElement(a.Z, { "aria-live": "polite", style: he.actionContainer }, _ ? n.createElement(p.Z, null) : n.createElement(u.ZP, { disabled: !o, onClick: this._handleSubmit, size: "xLarge", testID: J, type: "primaryFilled" }, te)), n.createElement(u.ZP, { "aria-label": ae, onPress: this._handleCancel, type: "destructiveText" }, ne)), n.createElement(h.Z, { spacing: "space32" }), n.createElement(l.ZP, null, e), this._renderCanDoScopes(), this._renderScopesList(), n.createElement(h.Z, { spacing: "space32" }), this._renderPrivacyAndTerms()), n.createElement(l.ZP, { link: "https://www.x.com", style: he.twitterLink }, "X"));
                }
                _renderFooterContent() {
                    return n.createElement(l.ZP, null, n.createElement(_().I18NFormatMessage, { $i18n: "b004e8bf" }, n.createElement(l.ZP, { link: (0, m.ju)("https://help.x.com/managing-your-account/connect-or-revoke-access-to-third-party-apps") }, ce)));
                }
                _renderScopesList() {
                    const {
                            oAuthConsentMetadata: { scopes: e = [] },
                            location: t,
                        } = this.props,
                        r = "string" == typeof t.query?.redirect_uri ? t.query.redirect_uri : "";
                    if (r.startsWith("xai-grok://") || r.startsWith("https://accounts.x.ai/")) return n.createElement(S, null);
                    const a = e.filter((e) => "can_view" === e.category).sort((e, t) => e.rank - t.rank);
                    return a.length ? n.createElement(y.Z, { scopes: a, title: oe }) : null;
                }
                _renderCanDoScopes() {
                    const {
                            oAuthConsentMetadata: { scopes: e = [] },
                        } = this.props,
                        t = e.filter((e) => "can_do" === e.category).sort((e, t) => e.rank - t.rank);
                    return t.length ? n.createElement(y.Z, { scopes: t, title: se }) : null;
                }
                _renderPrivacyAndTerms() {
                    const {
                        oAuthConsentMetadata: { organization_name: e, organization_privacy_policy_uri: t, organization_terms_and_conditions_uri: r, organization_uri: a },
                    } = this.props;
                    return e || t || r ? n.createElement(l.ZP, null, n.createElement(_().I18NFormatMessage, { $i18n: "afd52f45", orgName: e }, n.createElement(l.ZP, { link: a }, e), n.createElement(l.ZP, { link: t }, "privacy policy"), n.createElement(l.ZP, { link: r }, "terms"))) : null;
                }
                _renderLoading() {
                    return n.createElement(p.Z, null);
                }
                _renderLoggedOutState() {
                    const { redirectUri: e } = this.props;
                    return n.createElement(a.Z, { style: he.mobileContainer }, n.createElement(l.ZP, { size: "title4", style: he.loggedOutText, weight: "heavy" }, ie), n.createElement(u.ZP, { link: e, size: "xLarge", style: he.logInButton, testID: Y, type: "primaryFilled" }, le));
                }
                _renderErrorState() {
                    const {
                            history: { goBack: e },
                            redirectUri: t,
                        } = this.props,
                        r = { openInSameFrame: !0, pathname: t };
                    return t ? n.createElement(E.Z, { buttonLink: r, retryLabel: re, style: he.errorState, testID: K, title: de }, pe) : n.createElement(E.Z, { onRetry: (t) => e(), retryLabel: re, style: he.errorState, testID: K, title: de }, pe);
                }
                _fetchConsentMetadata() {
                    const {
                            createLocalApiErrorHandler: e,
                            fetchConsentMetadata: t,
                            history: {
                                location: { query: r },
                            },
                        } = this.props,
                        n = {};
                    for (const e of ["client_id", "code_challenge", "code_challenge_method", "redirect_uri", "response_type", "scope", "state"]) n[e] = "scope" !== e ? r[e] : String(r[e]).replaceAll("+", " ");
                    t(n).catch(e(q));
                }
            }
            const he = c.default.create((e) => ({ actionContainer: { paddingTop: e.spaces.space40, paddingBottom: e.spaces.space32 }, container: { borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderStyle: "solid", borderRadius: e.borderRadii.large, maxWidth: 414, padding: e.spaces.space32 }, errorState: { maxWidth: 414 }, head: { alignItems: "center", display: "flex", textAlign: "center" }, headline: { marginBottom: e.spaces.space40, marginTop: e.spaces.space40 }, image: { height: 100, width: 100 }, layout: { alignItems: "center", display: "flex", paddingBottom: e.spaces.space80, paddingTop: e.spaces.space40 }, loggedOutText: { marginBottom: e.spaces.space28, textAlign: "center" }, logInButton: { marginHorizontal: e.spaces.space64 }, mobileContainer: { maxWidth: 414, padding: e.spaces.space32 }, twitterLink: { marginTop: e.spaces.space32 }, userCell: { minWidth: "65%" } })),
                me = X(ue);
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                a = r(325686),
                o = r(392237);
            function s({ spacing: e, style: t }) {
                return n.createElement(a.Z, { role: "separator", style: [c.divider, { marginVertical: null != e ? o.default.theme.spaces[e] : void 0 }, t] });
            }
            const c = o.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.OAuth.43e187fa.js.map
