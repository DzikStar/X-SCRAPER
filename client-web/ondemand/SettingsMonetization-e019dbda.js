"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.SettingsMonetization-e019dbda"],
    {
        856522: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(807896),
                a = n(9410),
                o = n(202784),
                s = (n(585488), n(277660)),
                l = n.n(s),
                c = n(23134);
            function i({ user: e, ...t }) {
                const n = l()(a.Z, e),
                    s = o.useMemo(() => (n ? { id_str: n.rest_id, screen_name: n.core?.screen_name || "", name: n.core?.name || "", follow_request_sent: n.legacy?.follow_request_sent || !1, protected: n.privacy?.protected || !1, following: n.relationship_perspectives?.following || !1, followed_by: n.relationship_perspectives?.followed_by || !1, super_following: n.super_following || void 0, super_follow_eligible: n.super_follow_eligible || void 0, super_followed_by: n.super_followed_by || void 0, blocking: n.relationship_perspectives?.blocking || void 0, highlightedLabel: n.affiliates_highlighted_label?.label ? { userLabelType: n.affiliates_highlighted_label.label.user_label_type || void 0 } : void 0 } : void 0), [n]);
                return o.createElement(c.C, (0, r.Z)({}, t, { isRelay: !0, user: s, userId: n?.rest_id ?? "" }));
            }
        },
        23134: (e, t, n) => {
            n.d(t, { C: () => $ });
            n(136728);
            var r = n(202784),
                a = n(190286),
                o = n(723587),
                s = n(111677),
                l = n.n(s),
                c = n(615656),
                i = n(666670),
                u = n(757953),
                p = n(879596),
                m = n(323683),
                d = n(479506),
                _ = n(942893),
                h = n(500002),
                b = n(233391),
                E = n(288955),
                g = n(71620),
                w = n(668214),
                f = n(390387),
                Z = n(601576),
                y = n(919022);
            const v = (e, t) => t.user || y.ZP.select(e, t.userId),
                S = (0, w.Z)()
                    .propsFromState(() => ({ isLoggedIn: f.Qb, user: v }))
                    .propsFromActions(() => ({ addToast: Z.fz, cancelPendingFollow: y.ZP.cancelPendingFollow, createLocalApiErrorHandler: (0, g.zr)("FOLLOW_USER_BUTTON"), fetchOneUserIfNeeded: y.ZP.fetchOneIfNeeded, follow: y.ZP.follow, unblock: y.ZP.unblock, unfollow: y.ZP.unfollow }))
                    .withAnalytics(),
                x = (e) => `${e}-follow`,
                T = (e) => `${e}-unfollow`,
                k = (e) => `${e}-block`,
                P = (e) => `${e}-unblock`,
                C = (e) => `${e}-cancel`,
                I = (e) => `${e}-subscribe`,
                L = (e) => `${e}-manageSubscription`,
                R = l().hbe4feb5,
                A = l().df4c86b0,
                F = l().bba40ffa,
                N = l().f558829e,
                O = l().a6941096,
                U = l().j24c37b2,
                H = l().if8cd2a4,
                D = l().b5972260;
            class B extends r.Component {
                constructor(e) {
                    super(e),
                        (this._fetchUserIfNeeded = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserIfNeeded: t, isRelay: n, userId: r } = this.props;
                            r && !n && t(r).catch(e(i.F));
                        }),
                        (this._handleClose = () => {
                            this.setState({ showDialog: !1, dialogText: void 0, dialogHeadline: void 0 });
                        }),
                        (this._handleCancelPendingFollow = () => {
                            const { cancelPendingFollow: e, createLocalApiErrorHandler: t, user: n } = this.props;
                            n && e(n.id_str).catch(t({ defaultToast: { text: D }, showToast: !0 }));
                        }),
                        (this._handleLoggedInFollow = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, follow: n, isFollowNudge: r, onFollowClick: a, promotedContent: o, user: s } = this.props;
                            s && n(s.id_str, { promotedContent: o, isFollowNudge: r }).then(() => (s.protected && e({ text: R({ screenName: s.screen_name }) }), a && a(), this._scribe({ action: "follow" })), t({ ...this._followApiErrorHandlingConfiguration, showToast: !0 }));
                        }),
                        (this._handleLoggedOutFollow = () => {
                            this._scribe({ action: "follow_attempt" });
                        }),
                        (this._handleUnblock = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unblock: n, user: r } = this.props;
                            r && (n(r.id_str, { promotedContent: t }).catch(e(p.D)), this._scribe({ action: "unblock" }));
                        }),
                        (this._handleUnfollow = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unfollow: n, user: r } = this.props;
                            if (r) return n(r.id_str, { promotedContent: t }).catch(e(m.X)), this._scribe({ action: "unfollow" });
                        }),
                        (this._handleSuperFollow = () => {
                            const { history: e, referringPage: t, user: n } = this.props;
                            if (n) return this._scribe({ element: "super_follow_subscribe_button", action: "click" }), e.push(`/${n.screen_name}/creator-subscriptions/subscribe`, { referring_page: t ?? "profile_intent" });
                        }),
                        (this._handleUnSuperFollow = () => {
                            const { history: e, user: t } = this.props;
                            if (t) return this._scribe({ element: "super_follow_unsubscribe_button", action: "click" }), e.push(`/${t.screen_name}/creator-subscriptions/manage`);
                        }),
                        (this.state = { showDialog: !1 });
                }
                componentDidMount() {
                    this.props.isLoggedIn && this._fetchUserIfNeeded(),
                        (this._followApiErrorHandlingConfiguration = {
                            ...u.H,
                            [c.ZP.UserMustBeAlcoholAgeScreened]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: H, dialogHeadline: F });
                                },
                            },
                            [c.ZP.CannotFollowFromCountry]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: O, dialogHeadline: F });
                                },
                            },
                            [c.ZP.BirthdateRequired]: {
                                customAction: () => {
                                    this.setState({ showDialog: !0, dialogText: N, dialogHeadline: A });
                                },
                            },
                        });
                }
                render() {
                    const { buttonType: e, isLoggedIn: t, isSuperFollowSubscriptionEnabled: n, isTransparent: s, relationshipMode: l, showRelationshipChangeConfirmation: c, size: i, style: u, user: p, userId: m } = this.props,
                        { dialogHeadline: d, dialogText: _, showDialog: h } = this.state,
                        g = p?.screen_name,
                        w = g ? `/${g}` : "",
                        f = { follow: x(m), unfollow: T(m), cancel: C(m), block: k(m), unblock: P(m), subscribe: I(m), manageSubscription: L(m) },
                        Z = !(!p?.follow_request_sent || !p.protected || p.following);
                    return (
                        !!p &&
                        r.createElement(
                            r.Fragment,
                            null,
                            h ? r.createElement(a.Z, { confirmButtonLabel: U, headline: d, onCancel: this._handleClose, onConfirm: this._handleClose, text: _, withCancelButton: !1 }) : null,
                            r.createElement(E.Z, { displayMode: b.BH.follow, postLoginPath: w, userFullName: p.name, userId: m }, (a) => r.createElement(o.Z, { buttonType: e, isBlocking: p.blocking, isFollowRequestSent: Z, isFollowed: !!p.followed_by, isFollowing: !!p.following, isSuperFollowEligible: !!n && p.super_follow_eligible, isSuperFollowing: p.super_following, isTransparent: s, name: g, onCancelPendingFollow: a(this._handleCancelPendingFollow), onFollow: a(this._handleLoggedInFollow, this._handleLoggedOutFollow), onSuperFollow: a(this._handleSuperFollow), onUnSuperFollow: a(this._handleUnSuperFollow), onUnblock: a(this._handleUnblock), onUnfollow: a(this._handleUnfollow), relationshipMode: l, showRelationshipChangeConfirmation: t && c, size: i, style: u, testIDs: f, type: "user" })),
                        )
                    );
                }
                _scribe(e) {
                    const { action: t, element: n } = e,
                        { analytics: r, location: a, promotedContent: o, user: s } = this.props,
                        { items: l } = r.contextualScribeData,
                        c = l?.find((e) => e.item_type === d.Z.ItemType.USER && e.id === s?.id_str),
                        i = [];
                    s ? i.push({ ...c, ..._.Z.getUserItem(s, o) }) : c && i.push(c);
                    const u = a.query && a.query.screen_name ? { items: i, context: "profile_intent" } : { items: i };
                    return r.scribe({ element: n, action: t, data: u });
                }
            }
            const $ = (0, h.ZP)(S(B));
        },
        288955: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                a = n(202784),
                o = n(443781),
                s = n(369241);
            class l extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showLoginPrompt: !1 }),
                        (this._getHandler =
                            (e, t) =>
                            (n, ...r) => {
                                this.props.disabled || this.context.loggedInUserId ? e && e(n, ...r) : (n && n.preventDefault && n.preventDefault(), t && t(), this.setState({ showLoginPrompt: !0 }));
                            }),
                        (this._handleClose = () => {
                            this.setState({ showLoginPrompt: !1 });
                        });
                }
                render() {
                    const { children: e, disabled: t, ...n } = this.props;
                    return a.createElement(a.Fragment, null, e(this._getHandler), this.state.showLoginPrompt && a.createElement(s.ZP, (0, r.Z)({ onClose: this._handleClose }, n)));
                }
            }
            (l.defaultProps = { disabled: !1 }), (l.contextType = o.rC);
            const c = l;
        },
        666670: (e, t, n) => {
            n.d(t, { F: () => s });
            var r = n(516951),
                a = n(615656),
                o = n(51525);
            const s = { [a.ZP.AddressBookLookupNotFound]: { customAction: o.vv }, [a.ZP.GenericUserNotFound]: { customAction: r.Z }, [a.ZP.OtherUserSuspended]: { customAction: r.Z }, showToast: !0 };
        },
        757953: (e, t, n) => {
            n.d(t, { H: () => _ });
            var r = n(111677),
                a = n.n(r),
                o = n(516951),
                s = n(615656),
                l = n(51525);
            const c = a().j4292c24,
                i = a().a0ba5842,
                u = a().i859a9d4,
                p = a().a5202b82,
                m = a().f8cbf714,
                d = a().f2e66452,
                _ = { defaultToast: { text: p }, [s.ZP.CurrentUserSuspended]: { toast: { text: d, action: { label: u, link: "https://support.twitter.com/articles/15790" } } }, [s.ZP.DuplicateFollowRequest]: { customAction: o.Z }, [s.ZP.FollowBlockedUserError]: { toast: { text: c } }, [s.ZP.FollowError]: { customAction: l.w1 }, [s.ZP.FollowRateLimitExceeded]: { toast: { action: { label: u, link: "https://support.twitter.com/articles/66885" }, text: i } }, [s.ZP.TargetUserNotFound]: { toast: { text: m } } };
        },
        879596: (e, t, n) => {
            n.d(t, { D: () => a });
            var r = n(111677);
            const a = { defaultToast: { text: n.n(r)().ca96fe6e }, showToast: !0 };
        },
        323683: (e, t, n) => {
            n.d(t, { X: () => a });
            var r = n(111677);
            const a = { defaultToast: { text: n.n(r)().e1a0aaca }, showToast: !0 };
        },
        566220: (e, t, n) => {
            n.d(t, { R: () => s });
            var r = n(202784);
            const a = () => new Date(),
                o = r.createContext(a),
                s = () => r.useContext(o);
        },
        317897: (e, t, n) => {
            n.r(t), n.d(t, { default: () => or });
            var r = n(807896),
                a = n(202784),
                o = n(107267),
                s = n(725516),
                l = n(300497),
                c = n(615027),
                i = n(111677),
                u = n.n(i),
                p = n(507651),
                m = n(652904),
                d = n(264922),
                _ = n(518180),
                h = n(717626),
                b = n(325686),
                E = (n(585488), n(844685)),
                g = n(731708),
                w = n(154003),
                f = n(392237),
                Z = n(309043),
                y = n(831984),
                v = n(875586),
                S = n(468869),
                x = n(603e3),
                T = n(199213),
                k = n(736063),
                P = n(535338);
            const C = u().bc43a32e,
                I = u().i4c3b046,
                L = u().ca516a66,
                R = h.Z,
                A = ({ slice: e }) => {
                    const { recentItems: t } = (0, S.h9)(e);
                    return a.createElement(
                        a.Fragment,
                        null,
                        a.createElement(E.Z, { text: C }),
                        t.length > 0
                            ? a.createElement(
                                  b.Z,
                                  { role: "list" },
                                  t.map((e) => a.createElement(y.Z, { item: e, key: e.transaction_id })),
                              )
                            : a.createElement(g.ZP, { color: "gray700", style: O.emptyState }, I),
                        a.createElement(w.ZP, { link: _.OB.transactions.root, style: O.button }, L),
                    );
                },
                F = () => {
                    const e = (0, P.p)(R, { recent_awards_limit: 3 }).viewer.user_results.result,
                        { awards_granted_slice: t } = e;
                    return a.createElement(a.Fragment, null, a.createElement(v.Z, { revenueType: x.AU.awards_revenue, showEarnedRevenueSinceLastPayout: !0, user: e }), a.createElement(Z.Z, { user: e }), a.createElement(T.Z, { revenueType: x.AU.awards_revenue, showHelperText: !0, showProgress: !0, stripeStatus: e.stripe_account_status, user: e }), t && a.createElement(A, { slice: t }));
                },
                N = { context: "MONETIZATION_AWARDS_REVENUE" },
                O = f.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } })),
                U = (0, s.Z)(() => a.createElement(k.H, { errorConfig: N }, a.createElement(F, null)), { component: "awards_revenue" });
            var H = n(470206),
                D = (n(136728), n(688715)),
                B = n(420412),
                $ = n(190286),
                V = n(782642),
                z = n(977126),
                M = n(428606),
                W = n(97141),
                j = n(614983),
                q = n.n(j),
                G = n(277660),
                J = n.n(G),
                X = n(351743),
                Y = n.n(X);
            const Q = W.Z,
                K = M.Z,
                ee = (e) => {
                    const t = J()(Q, e),
                        [n, r] = Y()(K);
                    return [
                        a.useCallback(
                            () =>
                                new Promise((e, r) => {
                                    n({
                                        variables: {},
                                        onCompleted: (t, n) => e(),
                                        onError: r,
                                        updater: (e, n) => {
                                            const r = t.__id;
                                            q()(r, "userId must be specified");
                                            const a = e.get(r);
                                            q()(a, "userRecord must be specified"), a.invalidateRecord();
                                        },
                                    });
                                }),
                            [n, t.__id],
                        ),
                        r,
                    ];
                },
                te = u().f3ce76c0,
                ne = u().i8982e7e,
                re = u().fbbfe8aa,
                ae = u().e4f29140,
                oe = u().f66d24be,
                se = u().g5925628,
                le = u().e58e85d2,
                ce = u().be8e87b4,
                ie = u().cfd2f35e,
                ue = u().bee26fa8,
                pe = u().f0145c9a,
                me = u().ef4602ec,
                de = { helpCenter: (0, D.ju)("https://help.x.com/using-twitter/coins"), contactUs: (0, D.ju)("https://help.x.com/forms/paid-features/general") },
                _e = f.default.create((e) => ({ other: { gap: e.spaces.space24, marginTop: e.spaces.space12 }, buttons: { flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space8 }, button: { flexBasis: `${e.breakpoints.micro}px`, flexGrow: 1, flexShrink: 1 } })),
                he = (0, s.Z)(
                    ({ backLocation: e, user: t }) => {
                        const n = (0, o.useHistory)(),
                            r = (0, V.p)(),
                            [s, l] = ee(t),
                            [c, i] = a.useState(!1),
                            u = a.useCallback(() => {
                                i(!0);
                            }, []),
                            p = a.useCallback(() => {
                                s()
                                    .then(() => {
                                        i(!1), r({ text: pe }), n.push(e);
                                    })
                                    .catch(() => {
                                        r({ text: me });
                                    });
                            }, [r, s, n, e]),
                            m = a.useCallback(() => {
                                i(!1);
                            }, []);
                        return a.createElement(a.Fragment, null, a.createElement(z.Z, { childrenStyle: _e.other, headline: te, illustration: z.j.LifeSaver }, a.createElement(g.ZP, { color: "gray700" }, ne), a.createElement(b.Z, { style: _e.buttons }, a.createElement(w.ZP, { link: de.helpCenter, style: _e.button, type: "primaryOutlined" }, oe), a.createElement(w.ZP, { link: de.contactUs, style: _e.button, type: "primaryOutlined" }, se))), a.createElement(B.Z, null), a.createElement(z.Z, { childrenStyle: _e.other, headline: re, illustration: z.j.Cone }, a.createElement(g.ZP, { color: "gray700" }, ae), a.createElement(b.Z, { style: _e.buttons }, a.createElement(w.ZP, { disabled: l, onPress: u, style: _e.button, type: "destructiveOutlined" }, le), c && a.createElement($.Z, { cancelButtonLabel: ie, confirmButtonLabel: ue, confirmButtonType: "destructiveFilled", headline: ce, onCancel: m, onConfirm: p, text: ae }))));
                    },
                    { component: "awards_management_summary" },
                ),
                be = H.Z,
                Ee = () => {
                    const e = (0, P.p)(be, {}).viewer.user_results.result;
                    return "User" === e.__typename && e.award_eligible ? a.createElement(he, { backLocation: _.Jz, user: e }) : null;
                },
                ge = { context: "MONETIZATION_AWARDS_SETTINGS" },
                we = (0, s.Z)(() => a.createElement(k.H, { errorConfig: ge }, a.createElement(Ee, null)), { component: "awards_settings" }),
                fe = u().j087774e,
                Ze = _.OB.dashboard.revenue,
                ye = _.OB.dashboard.manage,
                ve = u().ja73ebac,
                Se = u().h16eeb42,
                xe = (0, s.Z)(
                    () => {
                        const e = (0, o.useLocation)(),
                            t = [
                                { key: "revenue", label: ve, to: { pathname: Ze }, isActive: () => e.pathname === Ze },
                                { key: "manage", label: Se, to: { pathname: ye }, isActive: () => e.pathname === ye },
                            ];
                        return a.createElement(m.Z, null, a.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: fe }, a.createElement(p.Z, { links: t }), a.createElement(o.Switch, null, a.createElement(o.Route, { exact: !0, path: Ze }, a.createElement(U, null)), a.createElement(o.Route, { exact: !0, path: ye }, a.createElement(we, null)), a.createElement(o.Route, null, a.createElement(c.Z, { to: Ze })))));
                    },
                    { component: "awards_dashboard" },
                );
            var Te = n(967670),
                ke = n(315984),
                Pe = n(127218);
            const Ce = u().a22f6808,
                Ie = Te.Z,
                Le = () => {
                    const e = (0, o.useLocation)(),
                        { data: t, fetchNext: n } = (0, Pe.C)(Ie, { limit: 25 }),
                        r = t.viewer.user_results.result;
                    if ("User" !== r.__typename) return null;
                    const s = r.awards_granted_slice;
                    return s ? a.createElement(m.Z, null, a.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: Ce }, a.createElement(v.Z, { revenueType: x.AU.awards_revenue, showEarnedRevenueSinceLastPayout: !0, user: r }), a.createElement(ke.Z, { fetchNext: n, slice: s }))) : null;
                },
                Re = { context: "MONETIZATION_AWARDS_TRANSACTIONS" },
                Ae = (0, s.Z)(() => a.createElement(k.H, { errorConfig: Re }, a.createElement(Le, null)), { component: "awards_transactions" });
            var Fe = n(676812),
                Ne = n(860747),
                Oe = n(253518),
                Ue = n(443781);
            const He = u().ff9ed474,
                De = u().d59dbf8a,
                Be = u().c76972f0,
                $e = Fe.Z,
                Ve = () => {
                    const e = (0, o.useLocation)(),
                        { featureSwitches: t } = a.useContext(Ue.rC),
                        n = t.isTrue("creator_monetization_web_tips_dashboard_enabled"),
                        { viewer: r } = (0, P.p)($e, { awardsEnabled: n }),
                        s = !!r.is_active_creator,
                        l = r.user_results.result;
                    return a.createElement(m.Z, null, a.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: He }, a.createElement(v.Z, { revenueType: x.AU.total_revenue, showEarnedRevenueSinceLastPayout: !0, user: l }), a.createElement(T.Z, { showHelperText: !0, stripeStatus: l.stripe_account_status, type: "payoutHistory", user: l }), a.createElement(E.Z, { subtext: Be, text: De }), a.createElement(Oe.Z, { isActiveCreator: s, user: l }), a.createElement(Ne.Z, { user: l })));
                },
                ze = { context: "MONETIZATION_EARNINGS" },
                Me = (0, s.Z)(() => a.createElement(k.H, { errorConfig: ze }, a.createElement(Ve, null)), { component: "earnings" });
            var We = n(668214),
                je = n(390387);
            const qe = (0, We.Z)().propsFromState(() => ({ isActiveCreator: je.WM }))((e) => (!!e.isActiveCreator ? e.children : null));
            var Ge = n(175270),
                Je = n(933317);
            const Xe = u().ee0510c2,
                Ye = u().g652fc4c,
                Qe = Ge.Z,
                Ke = () => {
                    const e = (0, o.useLocation)(),
                        { data: t, fetchNext: n } = (0, Pe.C)(Qe, { limit: 25 }),
                        r = t.viewer.user_results.result;
                    if ("User" !== r.__typename) return null;
                    const s = r.creator_payouts_slice;
                    return s ? a.createElement(m.Z, null, a.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: Xe }, a.createElement(v.Z, { revenueType: x.AU.total_revenue, user: r }), a.createElement(Je.Z, { emptyStateDescription: Ye, fetchNext: n, slice: s }))) : null;
                },
                et = { context: "MONETIZATION_PAYOUT_HISTORY" },
                tt = (0, s.Z)(() => a.createElement(k.H, { errorConfig: et }, a.createElement(Ke, null)), { component: "payout_history" });
            var nt = n(181089),
                rt = n(656166),
                at = n(822441),
                ot = n(952793);
            const st = u().d978f43e,
                lt = u().d113fc10,
                ct = u().h7a41c02,
                it = u().eedf2eaa,
                ut = u().d93308d8,
                pt = nt.Z,
                mt = ({ emptyStateDescription: e, heading: t, slice: n, type: r }) => {
                    const { recentItems: o } = (0, S._5)(n),
                        s = ((e) => a.useCallback((t) => a.createElement(at.Z, { item: t, key: t.__id, type: e }), [e]))(r);
                    return a.createElement(a.Fragment, null, a.createElement(E.Z, { text: t }), o.length > 0 ? a.createElement(b.Z, { role: "list" }, o.map(s)) : a.createElement(g.ZP, { color: "gray700", style: bt.emptyState }, e));
                },
                dt = () => {
                    const e = (0, P.p)(pt, { new_subscribers_limit: 3, renewals_limit: 3 }).viewer.user_results.result,
                        { superfollows_new_subscribers_slice: t, superfollows_renewals_slice: n } = e,
                        r = (0, ot.hC)("creator_monetization_web_tips_dashboard_enabled") && e.award_eligible;
                    return a.createElement(a.Fragment, null, a.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: e }), a.createElement(T.Z, { showHelperText: !0, showProgress: !0, stripeStatus: e.stripe_account_status, type: r ? void 0 : "payoutHistory", user: e }), t && a.createElement(a.Fragment, null, a.createElement(mt, { emptyStateDescription: lt, heading: st, slice: t, type: rt.x.InitialSale }), a.createElement(w.ZP, { link: _.Vt.transactions.newSubscriptions, style: bt.button }, ut)), n && a.createElement(a.Fragment, null, a.createElement(mt, { emptyStateDescription: it, heading: ct, slice: n, type: rt.x.Renewal }), a.createElement(w.ZP, { link: _.Vt.transactions.renewals, style: bt.button }, ut)));
                },
                _t = { context: "MONETIZATION_SUPER_FOLLOWS_REVENUE" },
                ht = (0, s.Z)(() => a.createElement(k.H, { errorConfig: _t }, a.createElement(dt, null)), { component: "super_follows_revenue" }),
                bt = f.default.create((e) => ({ button: { marginTop: e.spaces.space16, marginBottom: e.spaces.space32, marginHorizontal: e.spaces.space16 }, emptyState: { marginVertical: e.spaces.space12, textAlign: "center" } }));
            var Et = n(747208),
                gt = n(893903);
            const wt = Et.Z,
                ft = () => {
                    const { subscriptions_price_offerings: e, super_follows_price_offerings: t, viewer: n } = (0, P.p)(wt, {}),
                        r = n.user_results.result;
                    return "User" !== r.__typename ? null : a.createElement(gt.Z, { backLocation: _.Jz, perksConfirmLocation: _.Vt.perks.confirm, perksDescriptionLocation: _.Vt.perks.description, perksIntroLocation: _.Vt.perks.intro, perksPricingLocation: _.Vt.perks.pricing, priceOfferings: t, subscriptionsPriceOfferings: e, user: r, viewer: n });
                },
                Zt = { context: "MONETIZATION_SUPER_FOLLOWS_SETTINGS" },
                yt = (0, s.Z)(() => a.createElement(k.H, { errorConfig: Zt }, a.createElement(ft, null)), { component: "super_follows_settings" }),
                vt = u().d7b51c68,
                St = u().ja73ebac,
                xt = u().h16eeb42,
                Tt = _.Vt.dashboard.revenue,
                kt = _.Vt.dashboard.manage,
                Pt = (0, s.Z)(
                    () => {
                        const e = (0, o.useLocation)(),
                            t = [
                                { key: "revenue", label: St, to: { pathname: Tt }, isActive: () => e.pathname === Tt },
                                { key: "manage", label: xt, to: { pathname: kt }, isActive: () => e.pathname === kt },
                            ];
                        return a.createElement(m.Z, null, a.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: vt }, a.createElement(p.Z, { links: t }), a.createElement(o.Switch, null, a.createElement(o.Route, { exact: !0, path: Tt }, a.createElement(ht, null)), a.createElement(o.Route, { path: kt }, a.createElement(yt, null)), a.createElement(o.Route, null, a.createElement(c.Z, { to: Tt })))));
                    },
                    { component: "super_follows_dashboard" },
                );
            var Ct = n(19533),
                It = n(320848),
                Lt = n(62151),
                Rt = n(949985),
                At = n(50998),
                Ft = n(642097),
                Nt = n(43512),
                Ot = n(220693),
                Ut = n(102614),
                Ht = n(371758),
                Dt = n(399384),
                Bt = n(466818),
                $t = n(513120),
                Vt = n(357770),
                zt = n(541659),
                Mt = n(973316),
                Wt = n(467874),
                jt = n(870242),
                qt = n(376755);
            const Gt = jt.Z,
                Jt = Wt.Z,
                Xt = (e, { price: t }) => {
                    const n = J()(Gt, e),
                        r = (0, qt.Ex)(n),
                        o = t || r || "",
                        [s, l] = Y()(Jt);
                    return [
                        a.useCallback(
                            () =>
                                new Promise((t, n) => {
                                    s({
                                        variables: { new_price: o },
                                        onCompleted: (e, n) => t(),
                                        onError: n,
                                        updater: (t) => {
                                            const n = t.get(e.__id);
                                            n && n.setLinkedRecord(t.create(`client:${e.__id}:super_follow_pending_price_change`, "SuperFollowPendingPriceChange").setValue(o, "new_price"), "super_follow_pending_price_change");
                                        },
                                    });
                                }),
                            [o, s, e],
                        ),
                        l,
                    ];
                };
            var Yt = n(274257),
                Qt = n(176544);
            const Kt = u().hadd463a,
                en = u().fce14f56,
                tn = u().b0c58272,
                nn = a.createElement(u().I18NFormatMessage, { $i18n: "ede65a59" }, a.createElement(g.ZP, { link: Qt._t }, u().edc014fb)),
                rn = u().d5737f0e,
                an = Dt.Z,
                on = Ht.Z,
                sn = Ut.Z,
                ln = f.default.create((e) => ({ interstitial: { marginTop: e.spaces.space32 }, prices: { marginBottom: e.spaces.space32, marginTop: e.spaces.space28 }, bottomBar: { gap: e.spaces.space24, marginBottom: e.spaces.space32, marginTop: e.spaces.space16 }, input: { borderRadius: e.borderRadii.small, marginBottom: e.spaces.space20, paddingStart: 0, paddingEnd: 0 }, subtext: { marginTop: e.spaces.space8 }, selector: { marginTop: e.spaces.space12 } })),
                cn = (0, s.Z)(
                    ({ backLocation: e, subscriptionsPriceOfferings: t, user: n, viewer: r }) => {
                        const o = J()(an, n),
                            s = J()(on, r),
                            l = J()(sn, t).offers.map((e) => ({ label: e.price, value: e.key })),
                            c = (0, qt.Ex)(o),
                            i = (0, Yt.qO)(s),
                            u = i && i !== c,
                            p = (0, Yt.NP)(s, "selected_price"),
                            [m, d] = Xt(o, { price: i || "" }),
                            _ = a.useMemo(() => a.createElement($t.Z, { style: ln.bottomBar }, a.createElement(Mt.Z, { disabled: !u || d, label: "Save", onPress: m, path: e, size: "xLarge", type: "primaryFilled" })), [u, d, m, e]);
                        return a.createElement(
                            zt.Z,
                            { bottomBar: _, withInfoButton: !0 },
                            a.createElement($t.Z, { style: ln.interstitial }, a.createElement(Vt.Z, { headline: Kt })),
                            a.createElement(
                                $t.Z,
                                { style: ln.prices },
                                a.createElement(g.ZP, { "aria-level": 4, role: "heading", size: "title4", weight: "heavy" }, en),
                                a.createElement(g.ZP, { color: "gray700", style: ln.subtext }, tn),
                                a.createElement(g.ZP, { color: "gray700", style: ln.subtext }, nn),
                                a.createElement(Bt.ZP, {
                                    autofocus: !0,
                                    label: rn,
                                    onChange: (e) => {
                                        p(e);
                                    },
                                    options: l,
                                    style: ln.selector,
                                    value: i || c || "",
                                    withEmptyOption: !0,
                                }),
                            ),
                        );
                    },
                    { component: "management_perks_intro" },
                );
            var un = n(945338);
            const pn = Rt.Z,
                mn = Lt.Z,
                dn = It.Z,
                _n = ({ subscriptionsPriceOfferings: e, user: t, viewer: n }) => {
                    const r = J()(pn, t),
                        s = J()(mn, n),
                        l = J()(dn, e),
                        c = (0, qt.IU)(r),
                        i = (0, qt.IH)(r),
                        u = (0, qt.Ex)(r),
                        { discardChanges: p, shouldBlockNavigation: m } = (0, un.Z)({ rootPath: _.Vt.dashboard.manage, user: r, viewer: s });
                    return (0, Yt.zG)(s, { creator_intro: c, description: i, selected_price: u }), a.createElement(a.Fragment, null, a.createElement(At.Z, { onNavigation: p, shouldBlockNavigation: m }), a.createElement(o.Switch, null, a.createElement(o.Route, { exact: !0, path: _.Vt.perks.intro }, a.createElement(Ot.Z, { backLocation: _.Vt.dashboard.manage, user: r, viewer: s })), a.createElement(o.Route, { exact: !0, path: _.Vt.perks.description }, a.createElement(Nt.Z, { backLocation: _.Vt.dashboard.manage, user: r, viewer: s })), a.createElement(o.Route, { exact: !0, path: _.Vt.perks.confirm }, a.createElement(Ft.Z, { user: r, viewer: s })), a.createElement(o.Route, { exact: !0, path: _.Vt.perks.pricing }, a.createElement(cn, { backLocation: _.Vt.dashboard.manage, subscriptionsPriceOfferings: l, user: r, viewer: s }))));
                },
                hn = Ct.Z,
                bn = (0, s.Z)(
                    () => {
                        const e = (0, P.p)(hn, {}),
                            t = e.viewer.user_results.result,
                            n = e.viewer,
                            r = e?.subscriptions_price_offerings;
                        return "User" !== t.__typename || null == r ? null : a.createElement(_n, { subscriptionsPriceOfferings: r, user: t, viewer: n });
                    },
                    { component: "super_follows_perks" },
                );
            var En = n(246489),
                gn = n(322121),
                wn = n(470199),
                fn = n(371445),
                Zn = n(856522),
                yn = n(97882),
                vn = n(114084);
            const Sn = u().h810143c,
                xn = u().ga57b610,
                Tn = u().h3b68828,
                kn = u().d7b51c68,
                Pn = u().cc2aa67a,
                Cn = u().b313bb24,
                In = u().e5188502,
                Ln = u().ba2e82a1,
                Rn = { [wn.x.PlayStore]: u().i8385a2c, [wn.x.AppStore]: u().h201c4c2, [wn.x.Stripe]: u().g33f3050, [wn.x.Web]: u().g33f3050 },
                An = En.Z,
                Fn = ({ transactionType: e }) => {
                    const t = (0, o.useLocation)(),
                        { transactionId: n } = (0, o.useParams)(),
                        r = (0, P.p)(An, { rest_id: n ?? "0", subscription_event_type: e }).superfollows_subscription_by_rest_id,
                        s = r.consumer_results.result,
                        l = "User" === s.__typename,
                        c = r.payment_platform,
                        i = Ln(new Date(r.created_at_msec)),
                        u = r.price_in_hundred,
                        p = u ? (0, yn.x)({ amount: u, formatter: 100 }) : a.createElement(gn.default, { testID: "icon-minus" }),
                        _ = a.useMemo(() => a.createElement(Zn.Z, { user: s }), [s]);
                    return a.createElement(m.Z, null, a.createElement(d.Z, { location: t, screenType: "secondaryDetail", title: Sn }, l ? a.createElement(vn.Z, { avatarSize: "jumbo", decoration: _, user: s, withUsernameCenterAligned: !0 }) : null, a.createElement(b.Z, { style: On.root }, a.createElement(fn.Z, { header: xn, text: i }), a.createElement(fn.Z, { header: Tn, text: kn }), c && a.createElement(fn.Z, { header: Pn, text: Rn[c] }), a.createElement(fn.Z, { header: Cn, text: p }), a.createElement(g.ZP, { color: "gray700", size: "subtext2", style: On.disclaimer }, In))));
                },
                Nn = { context: "MONETIZATION_SUPER_FOLLOWS_TRANSACTION_DETAILS" },
                On = f.default.create((e) => ({ root: { paddingHorizontal: e.spaces.space16 }, userProfile: { alignItems: "center" }, userAvatar: { height: "76px", width: "76px", marginBottom: e.spaces.space12 }, disclaimer: { marginTop: e.spaces.space4 } })),
                Un = (0, s.Z)((e) => a.createElement(k.H, { errorConfig: Nn }, a.createElement(Fn, e)), { component: "super_follows_transaction_details" });
            var Hn = n(240312),
                Dn = n(839681);
            const Bn = u().ed3efef0,
                $n = Hn.Z,
                Vn = () => {
                    const { data: e, fetchNext: t } = (0, Pe.C)($n, { limit: 25 }),
                        n = e.viewer.user_results.result;
                    if ("User" !== n.__typename) return null;
                    const r = n.superfollows_new_subscribers_slice;
                    return r ? a.createElement(a.Fragment, null, a.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: n }), a.createElement(Dn.Z, { emptyStateDescription: Bn, fetchNext: t, slice: r, type: rt.x.InitialSale })) : null;
                },
                zn = { context: "MONETIZATION_SUPER_FOLLOWS_NEW_SUBSCRIPTIONS" },
                Mn = (0, s.Z)(() => a.createElement(k.H, { errorConfig: zn }, a.createElement(Vn, null)), { component: "super_follows_new_subscriptions" });
            var Wn = n(862828);
            const jn = u().b5f9ec14,
                qn = Wn.Z,
                Gn = () => {
                    const { data: e, fetchNext: t } = (0, Pe.C)(qn, { limit: 25 }),
                        n = e.viewer.user_results.result;
                    if ("User" !== n.__typename) return null;
                    const r = n.superfollows_renewals_slice;
                    return r ? a.createElement(a.Fragment, null, a.createElement(v.Z, { showEarnedRevenueSinceLastPayout: !0, user: n }), a.createElement(Dn.Z, { emptyStateDescription: jn, fetchNext: t, slice: r, type: rt.x.Renewal })) : null;
                },
                Jn = { context: "MONETIZATION_SUPER_FOLLOWS_NEW_SUBSCRIPTIONS" },
                Xn = (0, s.Z)(() => a.createElement(k.H, { errorConfig: Jn }, a.createElement(Gn, null)), { component: "super_follows_renewals" }),
                Yn = u().bf364d62,
                Qn = u().d978f43e,
                Kn = u().h7a41c02,
                er = _.Vt.transactions.newSubscriptions,
                tr = _.Vt.transactions.renewals,
                nr = (0, s.Z)(
                    () => {
                        const e = (0, o.useLocation)(),
                            t = a.useMemo(
                                () => [
                                    { key: "newSubscriptions", label: Qn, to: { pathname: er }, isActive: () => e.pathname === er },
                                    { key: "renewals", label: Kn, to: { pathname: tr }, isActive: () => e.pathname === tr },
                                ],
                                [e.pathname],
                            );
                        return a.createElement(m.Z, null, a.createElement(d.Z, { location: e, screenType: "secondaryDetail", title: Yn }, a.createElement(p.Z, { links: t }), a.createElement(o.Switch, null, a.createElement(o.Route, { exact: !0, path: er }, a.createElement(Mn, null)), a.createElement(o.Route, { exact: !0, path: tr }, a.createElement(Xn, null)), a.createElement(o.Route, null, a.createElement(c.Z, { to: er })))));
                    },
                    { component: "super_follows_transactions" },
                ),
                rr = (e) => a.createElement(l.Z, (0, r.Z)({}, e, { component: xe, featureSwitchName: "creator_monetization_web_tips_dashboard_enabled" })),
                ar = (e) => a.createElement(l.Z, (0, r.Z)({}, e, { component: Ae, featureSwitchName: "creator_monetization_web_tips_dashboard_enabled" })),
                or = a.memo((0, s.Z)(() => a.createElement(o.Switch, null, a.createElement(o.Route, { exact: !0, path: _.vl }, a.createElement(qe, null, a.createElement(Me, null))), a.createElement(o.Route, { exact: !0, path: _.BJ }, a.createElement(qe, null, a.createElement(tt, null))), a.createElement(o.Route, { path: _.Vt.dashboard.root }, a.createElement(qe, null, a.createElement(Pt, null))), a.createElement(o.Route, { component: rr, path: _.OB.dashboard.root }), a.createElement(o.Route, { component: ar, path: _.OB.transactions.root }), a.createElement(o.Route, { path: _.Vt.perks.root }, a.createElement(bn, null)), a.createElement(o.Route, { exact: !0, path: _.Vt.transactions.newSubscriptionDetails }, a.createElement(Un, { transactionType: "InitialSale" })), a.createElement(o.Route, { exact: !0, path: _.Vt.transactions.renewalDetails }, a.createElement(Un, { transactionType: "Renewal" })), a.createElement(o.Route, { path: _.Vt.transactions.root }, a.createElement(nr, null)), a.createElement(o.Route, null, a.createElement(c.Z, { to: _.vl }))), { page: "settings", section: "monetization_earnings" }));
        },
        518180: (e, t, n) => {
            n.d(t, { BJ: () => s, Jz: () => a, OB: () => c, Vt: () => l, vl: () => o });
            var r = n(189244);
            const a = "/settings/monetization",
                o = `${a}/earnings`,
                s = `${a}/payout_history`,
                l = { dashboard: { root: `${a}/subscriptions/dashboard`, revenue: `${a}/subscriptions/dashboard/revenue`, manage: `${a}/subscriptions/dashboard/manage` }, perks: { root: `${a}/subscriptions/perks`, intro: `${a}/subscriptions/perks/intro`, description: `${a}/subscriptions/perks/description`, pricing: `${a}/subscriptions/perks/pricing`, confirm: `${a}/subscriptions/perks/confirm` }, transactions: { root: `${a}/subscriptions/transactions`, newSubscriptions: `${a}/subscriptions/transactions/new_subscriptions`, newSubscriptionDetails: `${a}/subscriptions/transactions/new_subscriptions/${r.Hr}`, renewals: `${a}/subscriptions/transactions/renewals`, renewalDetails: `${a}/subscriptions/transactions/renewals/${r.Hr}` } },
                c = { dashboard: { root: `${a}/awards/dashboard`, revenue: `${a}/awards/dashboard/revenue`, manage: `${a}/awards/dashboard/manage` }, transactions: { root: `${a}/awards/transactions` } };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.SettingsMonetization-e019dbda.c7482c7a.js.map
