"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["modules.common-e019dbda"],
    {
        176376: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                r = o(308158),
                s = o(731708),
                i = o(519172),
                l = o(392237),
                a = o(956336),
                c = o(24949),
                d = o(668214),
                h = o(919022);
            const p = (e, t) => (t.entityId && h.ZP.select(e, t.entityId)) || void 0,
                m = (e) => `/${e.screen_name}`,
                u = (e) => e.name,
                _ = (0, d.Z)()
                    .propsFromState(() => ({ user: p, badging: (0, c.P1)(p, (e) => (e ? { displayContext: "content", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, verifiedType: e.verified_type, translatorType: e.translator_type, affiliateBadgeInfo: e.highlightedLabel } : void 0)) }))
                    .adjustStateProps(({ badging: e, user: t }) => ({ badging: e, link: t && m(t), screenName: t && t.screen_name, text: (t && u(t)) || "" }));
            class b extends n.PureComponent {
                render() {
                    const { color: e, link: t, onClick: o, screenName: s, text: i, weight: l, withHashflags: c } = this.props,
                        d = n.createElement(r.Z.TextFragment, { color: e, link: t, onClick: o, style: f.wordBreak, weight: l, withHashflags: c }, i, this._renderBadges());
                    return s ? n.createElement(a.Z, { screenName: s }, d) : d;
                }
                _renderBadges() {
                    const { badging: e } = this.props;
                    return e ? n.createElement(s.ZP, { style: f.badges }, n.createElement(i.Z, e)) : null;
                }
            }
            const f = l.default.create((e) => ({ wordBreak: { wordBreak: "break-word", display: "inline-flex", flexWrap: "wrap" }, badges: { position: "relative", top: 1 } })),
                g = _(b);
        },
        686689: (e, t, o) => {
            o.d(t, { Z: () => m });
            var n = o(807896),
                r = o(202784),
                s = o(308158),
                i = o(392237),
                l = o(946409),
                a = o(176376);
            const c = "Center",
                d = "Natural";
            class h extends r.PureComponent {
                render() {
                    const { alignment: e, animateIn: t, color: o, entities: i, forceAutoTextDirection: d, id: h, onEntityClick: m, role: u, rtl: _, size: b, style: f, text: g, weight: C, withHashflags: w } = this.props,
                        k = e === c ? "center" : void 0,
                        I = d ? "auto" : _ ? "rtl" : "ltr";
                    return r.createElement(s.Z, { align: k, color: o, dir: I, entities: i, id: h, onEntityClick: m, renderFragment: { user: (e, t) => r.createElement(a.Z, (0, n.Z)({}, e, { color: "text", entityId: t.id })), url: (e, t) => r.createElement(s.Z.TextFragment, (0, n.Z)({}, e, { link: (0, l.s9)(t) })) }, role: u, size: b, style: [p.hideOverflow, f, t && p.animateIn], text: g, weight: C, withHashflags: w });
                }
            }
            h.defaultProps = { alignment: d };
            const p = i.default.create((e) => ({ hideOverflow: { overflow: "hidden" }, animateIn: { animationDuration: "0.5s", animationKeyframes: [{ "0%": { opacity: 0 }, "100%": { opacity: 1 } }], animationTimingFunction: "ease-out", animationFillMode: "both" } })),
                m = h;
        },
        90411: (e, t, o) => {
            o.d(t, { KV: () => X, ZP: () => le, F0: () => Q });
            o(136728);
            var n = o(202784),
                r = o(576648),
                s = o(688715),
                i = o(111677),
                l = o.n(i),
                a = o(333241),
                c = (o(901951), o(638236)),
                d = o(811176),
                h = o(689582),
                p = o(873990),
                m = o(415506),
                u = o(226597),
                _ = o(155353),
                b = o(630715),
                f = o(516951),
                g = o(376293),
                C = o(946099),
                w = o(916585),
                k = o(847607),
                I = o(417714),
                v = o(988823);
            const x = "block",
                y = "mute",
                E = "reportIllegalContentProfile",
                R = l().hef5960c,
                U = l().ibd0b842,
                A = l().b9c26480,
                Z = l().e922ce0c,
                T = l().ge54bb8c,
                S = l().h5ef9bc8,
                F = l().j7bb1a43,
                P = (0, v.M)((e) => {
                    const t = void 0 !== window.navigator.share,
                        { isFixed: o, onClose: s, user: i } = e,
                        l = () => {
                            const { Icon: e, onClick: t, testID: o, text: n } = (0, I.l)({ user: i, removeFollowerAction: K });
                            return { Icon: e, text: n, onClick: t, testID: o };
                        },
                        a = () => {
                            const { Icon: e, onClick: t, testID: o, text: n } = (0, g.op)({ blockAction: q, source: g.SC.PROFILE, testID: x, unblockAction: z, user: i });
                            return { Icon: e, text: n, onClick: t, testID: o };
                        },
                        v = () => ({ Icon: h.default, text: S, onClick: O, link: `/${i.screen_name}/lists` }),
                        P = () => ({ Icon: p.default, text: A, link: `/${i.screen_name}/topics` }),
                        L = () => {
                            const { Icon: e, onClick: t, text: o } = (0, k.N1)(i, $, V);
                            return { Icon: e, text: o, onClick: t, testID: y };
                        },
                        B = (t) => {
                            const { Icon: o, link: n, testID: r, text: s } = (0, C.AL)({ testID: E, screenName: i.screen_name, reportUrl: t });
                            return {
                                Icon: o,
                                text: s,
                                link: n,
                                testID: r,
                                onClick: () => {
                                    e.onClose(), e.onReportUserIllegalContent();
                                },
                            };
                        },
                        D = () => ({
                            Icon: m.default,
                            text: F({ screenName: i.screen_name }),
                            onClick: () => {
                                e.onClose(), e.onReportUser();
                            },
                        }),
                        N = () => ({
                            Icon: i.want_retweets ? u.default : _.default,
                            text: i.want_retweets ? T : Z,
                            onClick: () => {
                                i.want_retweets ? J() : W();
                            },
                        }),
                        M = () => ({
                            Icon: c.Z,
                            text: R,
                            onClick: () => {
                                e.onClose(), e.onShare();
                            },
                        }),
                        H = () => ({
                            Icon: b.default,
                            text: U,
                            onClick: () => {
                                e.onClose(), e.onCopyLink();
                            },
                        }),
                        O = () => {
                            e.onClose(), e.onViewLists();
                        },
                        j = () => {
                            e.onClose(), e.onAddToRemoveFromList();
                        },
                        $ = () => {
                            e.onMuteUser(), e.onClose();
                        },
                        V = () => {
                            e.onUnmuteUser(), e.onClose();
                        },
                        q = (t) => {
                            G(t, e.onBlockUser);
                        },
                        z = (t) => {
                            G(t, e.onUnblockUser);
                        },
                        K = (t) => {
                            G(t, e.onRemoveFollower);
                        },
                        W = () => {
                            e.onEnableRetweets(), e.onClose();
                        },
                        J = () => {
                            e.onDisableRetweets(), e.onClose();
                        },
                        G = (t, o) => {
                            const { confirm: n, onClose: r } = e;
                            if (t) {
                                const { label: e, ...s } = t;
                                n({ confirmButtonLabel: e, ...s })
                                    .then(o, f.Z)
                                    .finally(r);
                            } else o();
                        };
                    return n.createElement(d.Z, {
                        isFixed: o,
                        items: (() => {
                            const { dsaIllegalContentreportUrl: o, perspective: n } = e,
                                s = [];
                            return i.blocked_by || ((!i.following && i.id_str !== n && i.protected) || (!i.blocking && s.unshift((0, w.k)(i, j)), s.push(v()), s.unshift(P())), i.protected || i.blocking || (t && s.push(M()), r.Z.isAvailable() && s.push(H()))), i.id_str !== n && (i.following && s.unshift(N()), !i.blocking && s.push(L()), i.followed_by && s.push(l()), s.push(a()), s.push(D()), o && s.push(B(o))), s;
                        })(),
                        onCloseRequested: s,
                    });
                });
            var L = o(545334),
                B = o(712816),
                D = o(48886),
                N = o(879596),
                M = o(860174),
                H = o(395067),
                O = o(942893),
                j = o(701796),
                $ = o(500002),
                V = o(443781),
                q = o(71620),
                z = o(668214),
                K = o(629196),
                W = o(390387),
                J = o(601576),
                G = o(919022);
            const Y = (0, z.Z)()
                    .propsFromState(() => ({ perspective: W.x0, sessionToken: W.Jv }))
                    .propsFromActions(() => ({ addToast: J.fz, block: G.ZP.block, createLocalApiErrorHandler: (0, q.zr)("USER_ACTION_SHEET_CONTAINER"), disableRetweets: G.ZP.disableRetweets, enableRetweets: G.ZP.enableRetweets, mute: K.r, removeFollower: G.ZP.removeFollower, unblock: G.ZP.unblock, unmute: G.ZP.unmute }))
                    .withAnalytics(),
                X = l().a9fd20be,
                Q = l().e133be4e,
                ee = l().dca669ad,
                te = l().f88553c8,
                oe = l().ce6da5d7,
                ne = l().c6ea308b,
                re = l().a1fef729,
                se = l().c32a3d03;
            class ie extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderFollowerActionMenu = () => {
                            const { onClose: e, user: t } = this.props;
                            return n.createElement(a.Z, { onBlock: this._handleBlockUser, onClose: e, onMute: this._handleMuteUser, onRemoveFollower: this._handleRemoveFollower, onReportUser: this._handleReportUser, onShare: this._handleShare, onUnblock: this._handleUnblockUser, onUnmute: this._handleUnmuteUser, user: t });
                        }),
                        (this._handleAddToRemoveFromList = () => {
                            this._scribeAction("add_to_list");
                        }),
                        (this._handleReportUserIllegalContent = () => {
                            this._scribeAction("report", "eu_illegal_content_profile");
                        }),
                        (this._handleReportUser = () => {
                            const { analytics: e, history: t, promotedContent: o, user: n } = this.props,
                                r = H.C2.User,
                                { featureSwitches: s } = this.context;
                            if ((this._scribeAction("report"), (0, H.Yw)(s, r))) {
                                const s = (0, H.j_)({ clientReferer: window.location.pathname, isMedia: !1, isPromoted: void 0 !== o, reportType: r, reportedUser: n.id_str, scribeNamespace: e.contextualScribeNamespace });
                                t.push({ pathname: "/i/safety/report_story_start", state: { input: { requested_variant: JSON.stringify(s) } } });
                            } else t.push({ pathname: `/i/report/user/${n.id_str}`, state: { clientReferer: window.location.pathname, promotedContent: o, scribeNamespace: e.contextualScribeNamespace } });
                        }),
                        (this._handleBlockUser = () => {
                            const { addToast: e, block: t, createLocalApiErrorHandler: o, promotedContent: n, user: r } = this.props;
                            t(r.id_str, { promotedContent: n }).then(() => {
                                e({ action: { label: Q, onAction: this._handleUnblockUser }, text: X });
                            }, o(B.d)),
                                this._scribeAction("block");
                        }),
                        (this._handleUnblockUser = () => {
                            const { createLocalApiErrorHandler: e, promotedContent: t, unblock: o, user: n } = this.props;
                            o(n.id_str, { promotedContent: t }).catch(e(N.D)), this._scribeAction("unblock");
                        }),
                        (this._handleMuteUser = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, mute: o, promotedContent: n, user: r } = this.props;
                            o(r.id_str, { promotedContent: n }).then(
                                () => {
                                    e({ action: { label: L.d, onAction: this._handleUnmuteUser }, text: (0, k.FK)(r.screen_name) });
                                },
                                t({ showToast: !0 }),
                            ),
                                this._scribeAction("mute_user");
                        }),
                        (this._handleUnmuteUser = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, promotedContent: o, unmute: n, user: r } = this.props;
                            n(r.id_str, { promotedContent: o }).then(
                                () => {
                                    e({ text: (0, k.X6)(r.screen_name) });
                                },
                                t({ showToast: !0 }),
                            ),
                                this._scribeAction("unmute_user");
                        }),
                        (this._handleViewLists = () => {
                            this._scribeAction("view_lists");
                        }),
                        (this._handleDisableRetweets = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, disableRetweets: o, user: n } = this.props,
                                { name: r } = n;
                            o(n.id_str).then(() => {
                                e({ text: ee({ name: r }) });
                            }, t(M.Z)),
                                this._scribeAction("disable_retweets");
                        }),
                        (this._handleEnableRetweets = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, enableRetweets: o, user: n } = this.props,
                                { name: r } = n;
                            o(n.id_str).then(() => {
                                e({ text: oe({ name: r }) });
                            }, t(M.Z)),
                                this._scribeAction("enable_retweets");
                        }),
                        (this._handleShare = () => {
                            const { sessionToken: e, user: t } = this.props,
                                o = (0, j.w)((0, s.ju)(`https://x.com/${t.screen_name}`), e),
                                n = { title: ne({ fullName: t.name, screenName: t.screen_name }), text: re({ fullName: t.name, bio: t.description }), url: o };
                            window.navigator.share &&
                                window.navigator
                                    .share(n)
                                    .then(() => {
                                        this._scribeAction("share");
                                    })
                                    .catch(() => {
                                        this._scribeAction("share_error");
                                    });
                        }),
                        (this._handleCopyLink = () => {
                            const { sessionToken: e, user: t } = this.props;
                            r.Z.setString((0, j.w)((0, s.ju)(`https://x.com/${t.screen_name}`), e)), this.props.addToast({ text: te }), this._scribeAction("copy_link");
                        }),
                        (this._handleRemoveFollower = () => {
                            const { addToast: e, createLocalApiErrorHandler: t, removeFollower: o, user: n } = this.props;
                            o(n.id_str).then(() => {
                                e({ text: se({ screenName: n.screen_name }) });
                            }, t(D.q)),
                                this._scribeAction("remove_follower");
                        });
                }
                _renderUserActionMenu() {
                    const { isFixed: e, onClose: t, perspective: o, user: r } = this.props,
                        { featureSwitches: s } = this.context,
                        i = s.isTrue("dsa_profile_report_flow_enabled") ? s.getStringValue("dsa_report_illegal_content_url") : void 0;
                    return n.createElement(P, { dsaIllegalContentreportUrl: i, isFixed: e, onAddToRemoveFromList: this._handleAddToRemoveFromList, onBlockUser: this._handleBlockUser, onClose: t, onCopyLink: this._handleCopyLink, onDisableRetweets: this._handleDisableRetweets, onEnableRetweets: this._handleEnableRetweets, onMuteUser: this._handleMuteUser, onRemoveFollower: this._handleRemoveFollower, onReportUser: this._handleReportUser, onReportUserIllegalContent: this._handleReportUserIllegalContent, onShare: this._handleShare, onUnblockUser: this._handleUnblockUser, onUnmuteUser: this._handleUnmuteUser, onViewLists: this._handleViewLists, perspective: o, user: r });
                }
                render() {
                    return "profile" === this.props.view ? this._renderUserActionMenu() : this._renderFollowerActionMenu();
                }
                _scribeAction(e, t = "user_action") {
                    const { analytics: o, user: n } = this.props,
                        r = { items: [O.Z.getUserItem(n)] };
                    return o.scribe({ component: t, action: e, data: r });
                }
            }
            ie.contextType = V.rC;
            const le = (0, $.ZP)(Y(ie));
        },
        240089: (e, t, o) => {
            o.d(t, { Z9: () => M, ZP: () => H, TJ: () => F, ET: () => P, C_: () => B, dk: () => L });
            var n = o(807896),
                r = (o(136728), o(202784)),
                s = o(235902),
                i = o(673510),
                l = o(392237),
                a = o(908478),
                c = o(864479),
                d = o(946409),
                h = o(663550),
                p = o(293115),
                m = o(479506),
                u = o(942893),
                _ = o(903019),
                b = o(409438),
                f = o(443781),
                g = o(293988),
                C = o(23134),
                w = o(325686),
                k = o(247056),
                I = o(90411);
            const v = (e) => {
                    const { children: t, promotedContent: o, user: n } = e;
                    return r.createElement(w.Z, { style: x.decorationWrapper }, t, r.createElement(k.Z, { renderActionMenu: (e) => r.createElement(I.ZP, { onClose: e, promotedContent: o, user: n, view: "follower" }), style: x.actionMenu }));
                },
                x = l.default.create((e) => ({ decorationWrapper: { flexDirection: "row" }, actionMenu: { marginStart: e.spaces.space12 } }));
            var y = o(71620),
                E = o(668214),
                R = o(694180),
                U = o(919022);
            const A = (e, t) => U.ZP.select(e, t.userId),
                Z = (e, t) => t.promotedContent,
                T = (0, E.Z)()
                    .propsFromState(() => ({ promotedContent: Z, user: A }))
                    .adjustStateProps(({ promotedContent: e, user: t }) => ({ promotedContent: e || (t ? t.promoted_content : void 0), user: t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, y.zr)("USER_CELL_CONTAINER"), log: R.cM }))
                    .withAnalytics(),
                S = (e) => {
                    const { user: t } = e;
                    return t && t.profile_image_url_https ? r.createElement(D, (0, n.Z)({}, e, { avatarUri: t.profile_image_url_https, description: t.description, entities: t.entities, followRequestReceived: t.follow_request_received, highlightedLabel: t.highlightedLabel, isBlockedBy: t.blocked_by, isBlocking: t.blocking, isBlueVerified: t.is_blue_verified, isDeviceFollowing: t.notifications, isFollowedBy: t.followed_by, isFollowing: t.following, isProtected: t.protected, isVerified: t.verified, name: t.name, screenName: t.screen_name, translatorType: t.translator_type, user: t, verifiedType: t.verified_type, withheldDescription: t.withheld_description, withheldEntities: t.withheld_entities })) : null;
                };
            S.defaultProps = { cellClickable: !0, decoration: null, displayMode: b.Z.UserCompact, followRequestReceived: !1, hideBlocked: !1, promotedItemType: h.bj.USER, shouldScribeProfileClick: !0, shouldScribeImpression: !1, withFollowsYou: !1 };
            const F = ({ isDeviceFollowing: e, userId: t }) => r.createElement(g.Z, { isFollowing: e, style: N.followButton, userId: t }),
                P = ({ onFollowClick: e, promotedContent: t, userId: o, viewerUserId: n }) => (n !== o ? r.createElement(C.C, { onFollowClick: e, promotedContent: t, size: "small", style: N.followButton, userId: o }) : null),
                L = ({ referringPage: e, userId: t, viewerUserId: o }) => (o !== t ? r.createElement(C.C, { buttonType: "primaryFilled", isSuperFollowSubscriptionEnabled: !0, referringPage: e, relationshipMode: "subscribe", size: "small", style: N.followButton, userId: t }) : null),
                B = (e) => r.createElement(v, { promotedContent: e.promotedContent, user: e.user }, P(e));
            class D extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleAvatarClick = () => {
                            const { shouldScribeProfileClick: e } = this.props;
                            this._handleSaveAsRecentSearch(), e && this._scribeAction({ element: "avatar", action: "profile_click" }), this._handleAsyncPromotedEvent(h.dx.PROFILE_IMAGE_CLICK);
                        }),
                        (this._handleCellClick = () => {
                            const { onClick: e, screenName: t, user: o, userId: n } = this.props,
                                { history: r } = this.context,
                                s = this._getPromotedTweetState();
                            this._handleSaveAsRecentSearch(), this._handleScreenNameClick(), e ? e({ user: o, state: s }) : r.push({ pathname: `/${t}`, state: { userId: n, ...(s || {}) } });
                        }),
                        (this._handleScreenNameClick = () => {
                            const { shouldScribeProfileClick: e } = this.props;
                            this._handleSaveAsRecentSearch(), e && this._scribeAction({ action: "profile_click" }), this._handleAsyncPromotedEvent(h.dx.SCREEN_NAME_CLICK);
                        }),
                        (this._handleSaveAsRecentSearch = () => {
                            const { saveAsRecentSearch: e, shouldStoreTypeaheadItem: t, userId: o } = this.props;
                            e && t && t(m.Z.ItemType.USER) && e({ user: { id: o, type: _.g2.User } });
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t, promotedContent: o, user: n, userId: r } = this.props,
                                s = t.contextualScribeData?.items?.find((e) => e.item_type === m.Z.ItemType.USER && e.id === r),
                                i = t.contextualScribeData?.search_details,
                                l = { items: [{ ...s, ...u.Z.getUserItem(n, o) }], profile_id: r, search_details: i };
                            t.scribe({ ...e, data: l });
                        });
                }
                componentDidMount() {
                    this._shouldRender() && this._handleImpression();
                }
                shouldComponentUpdate(e) {
                    return !(0, a.Z)(this.props, e);
                }
                render() {
                    const { analytics: e, avatarDecoration: t, bottomControl: o, cellClickable: l, createLocalApiErrorHandler: a, decoration: c, followRequestReceived: h, hideBlocked: p, highlightedLabel: m, isBlockedBy: u, isBlocking: _, isDeviceFollowing: b, isFollowing: f, isInSidebar: g, log: C, onClick: w, onFollowClick: k, promotedItemId: I, referringPage: v, saveAsRecentSearch: x, shouldScribeImpression: y, shouldScribeProfileClick: E, shouldStoreTypeaheadItem: R, socialContext: U, user: A, ...Z } = this.props;
                    return this._shouldRender() ? r.createElement(s.ZP.Provider, { value: { socialContextRefreshEnabled: () => this.context.featureSwitches.isTrue("social_context_and_topic_context_refresh_alignment_enabled") } }, r.createElement(i.ZP, (0, n.Z)({}, Z, { affiliateBadgeInfo: A.highlightedLabel, avatarDecoration: t, bottomControl: this._renderBottomControl(), decoration: this._renderDecoration(), highlightedLabel: A.highlightedLabel, isBlocking: A.blocking, onAvatarClick: this._handleAvatarClick, onCellClick: l ? this._handleCellClick : void 0, onScreenNameClick: this._handleScreenNameClick, socialContext: U ? { contextType: U.contextType, text: U.text, link: U.landingUrl ? (0, d.s9)(U.landingUrl) : void 0 } : void 0, withDarkerInteractiveBackground: g }))) : null;
                }
                _renderBottomControl() {
                    return this._renderControl(this.props.bottomControl || null);
                }
                _renderDecoration() {
                    const { decoration: e, onFollowClick: t } = this.props;
                    return this._renderControl(e, t);
                }
                _renderControl(e, t) {
                    const { viewerUserId: o } = this.context,
                        { displayMode: n, followRequestReceived: r, isBlocking: s, isDeviceFollowing: i, isFollowing: l, promotedContent: a, referringPage: c, screenName: d, user: h, userId: p } = this.props;
                    return "function" == typeof e ? e({ displayMode: n, followRequestReceived: r, isBlocking: s, isDeviceFollowing: !!i, isFollowing: !!l, viewerUserId: o, promotedContent: a, screenName: d, user: h, userId: p, onFollowClick: t, referringPage: c }) : e;
                }
                _shouldRender() {
                    const { hideBlocked: e, isBlockedBy: t, isBlocking: o, screenName: n, userId: r } = this.props;
                    return r && n && !(e && (t || o));
                }
                _getHighlightedLabel() {
                    const { highlightedLabel: e } = this.props.user;
                    return e;
                }
                _getPromotedTweetState() {
                    const { promotedContent: e, promotedItemType: t } = this.props;
                    return e && t === h.bj.TWEET ? { promotedTweetState: e } : null;
                }
                _handleAsyncPromotedEvent(e) {
                    const { createLocalApiErrorHandler: t, log: o, promotedContent: n, promotedItemId: r, promotedItemType: s, userId: i } = this.props;
                    if (n) {
                        const { disclosure_type: l, impression_id: a } = n;
                        o({ disclosureType: l, itemId: r || i, itemType: s, params: { event: e, impression_id: a } }).catch(t());
                    }
                }
                _handleImpression() {
                    const { createLocalApiErrorHandler: e, log: t, promotedContent: o, promotedItemType: n, shouldScribeImpression: r, userId: s } = this.props;
                    if (o && n === h.bj.USER) {
                        const { disclosure_type: n, impression_id: r } = o;
                        t({ disclosureType: n, itemId: s, itemType: h.bj.USER, params: { event: h.dx.IMPRESSION, impression_id: r } }).catch(e());
                    } else r && this._scribeAction({ action: "impression" });
                }
            }
            (D.contextType = f.rC), (D.defaultProps = S.defaultProps);
            const N = l.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                M = (0, c.Z)(T(S)),
                H = (e) => r.createElement(p.nO, { namespace: { element: "user" } }, r.createElement(M, e));
        },
        382779: (e, t, o) => {
            o.d(t, { H: () => m });
            var n = o(807896),
                r = o(704979),
                s = o(202784),
                i = (o(585488), o(277660)),
                l = o.n(i),
                a = o(308158),
                c = o(256563),
                d = o(176376),
                h = o(946409);
            const p = { user: (e, t) => s.createElement(d.Z, (0, n.Z)({}, e, { color: "text", entityId: t.id })), url: (e, t) => s.createElement(a.Z.TextFragment, (0, n.Z)({}, e, { link: (0, h.s9)(t) })) },
                m = ({ forceAutoTextDirection: e, timelineRichText: t, ...o }) => {
                    const i = l()(r.Z, t),
                        d = s.useMemo(() => (0, c._)(i), [i]),
                        { alignment: h, rtl: m, text: u } = i,
                        _ = "Center" === h ? "center" : void 0,
                        b = e ? "auto" : m ? "rtl" : "ltr";
                    return s.createElement(a.Z, (0, n.Z)({}, o, { align: _, dir: b, entities: d, renderFragment: p, text: u }));
                };
        },
        114084: (e, t, o) => {
            o.d(t, { H: () => h, Z: () => p });
            var n = o(807896),
                r = o(929446),
                s = o(202784),
                i = (o(585488), o(277660)),
                l = o.n(i),
                a = o(673510),
                c = o(44527);
            const d = r.Z,
                h = ({ user: e, ...t }) => {
                    const o = l()(d, e),
                        { avatar: r, core: i, is_blue_verified: h, legacy: p, privacy: m, relationship_perspectives: u, verification: _ } = o,
                        b = (0, c.H)(o?.identity_profile_labels_highlighted_label?.label);
                    return s.createElement(a.ZP, (0, n.Z)({}, t, { affiliateBadgeInfo: b, avatarUri: r?.image_url ?? "", isBlueVerified: h || !1, isFollowedBy: u?.followed_by ?? !1, isProtected: m?.protected ?? !1, isVerified: _?.verified ?? !1, name: i?.name ?? "", screenName: i?.screen_name ?? "", userId: p?.id_str ?? "", verifiedType: _?.verified_type ?? void 0 }));
                },
                p = s.memo(h);
        },
        975364: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(202784),
                r = o(807896),
                s = (o(136728), o(731708)),
                i = o(153925),
                l = o(804027);
            const a = (e) => {
                    const {
                        entity: { navigation_link: t, subtask_data_reference: o },
                        onClick: r,
                        onNavigate: a,
                        subtaskInputs: c,
                    } = e;
                    let d = e.children,
                        h = {};
                    if (t) {
                        h = {
                            withInteractiveStyling: !0,
                            ...(t.link_type === l.Iq.ChromelessWeb && t.url
                                ? { link: { external: !0, pathname: t.url } }
                                : {
                                      role: "button",
                                      color: "link",
                                      onClick:
                                          ((p = t),
                                          (e) => {
                                              e.preventDefault(), a ? a(p) : r && r();
                                          }),
                                  }),
                        };
                    } else o && (d = (0, i.OG)(c, o));
                    var p;
                    return n.createElement(s.ZP, h, d);
                },
                c = (e) => {
                    const {
                        children: t,
                        stylingRange: { styling_type: o, type: r },
                    } = e;
                    switch (r || o) {
                        case l.Hm.UnorderedList:
                        case l.Hm.DEPRECATED_UnorderedList:
                            return n.createElement("ul", null, t);
                        case l.Hm.ListItem:
                        case l.Hm.DEPRECATED_ListItem:
                            return n.createElement("li", null, t);
                        default:
                            return n.createElement(n.Fragment, null, t);
                    }
                };
            class d {
                constructor(e, t, o) {
                    (this._renderChildren = (e) => {
                        const { text: t } = e;
                        if (!t) return [];
                        let o = this.fromIndex;
                        const r = [];
                        return (
                            this.children.forEach((i) => {
                                o < i.fromIndex && r.push(n.createElement(s.ZP, { key: `${o},${i.fromIndex}` }, t.slice(o, i.fromIndex))), i.rangeObject && r.push(i.render(e)), (o = i.toIndex);
                            }),
                            o < this.toIndex && r.push(n.createElement(s.ZP, { key: `${o},${this.toIndex}` }, t.slice(o, this.toIndex))),
                            r
                        );
                    }),
                        (this.fromIndex = e),
                        (this.toIndex = t),
                        (this.rangeObject = o),
                        (this.children = []);
                }
                insert(e) {
                    const t = this.children.find((t) => t.fromIndex <= e.fromIndex && t.toIndex >= e.toIndex);
                    t ? t.insert(e) : (this.children.push(e), this.children.sort((e, t) => e.fromIndex - t.fromIndex));
                }
                render(e) {
                    const { align: t, "aria-level": o, color: l, id: d, role: h, size: p, style: m, testID: u, weight: _ } = e,
                        b = this._renderChildren(e),
                        f = (0, i.eU)(m),
                        g = `${this.fromIndex},${this.toIndex}`;
                    return this.rangeObject?.type || this.rangeObject?.styling_type ? n.createElement(c, (0, r.Z)({}, e, { fromIndex: this.fromIndex, key: g, stylingRange: this.rangeObject, toIndex: this.toIndex }), b) : this.rangeObject ? n.createElement(a, (0, r.Z)({}, e, { entity: this.rangeObject, fromIndex: this.fromIndex, key: g, toIndex: this.toIndex }), b) : n.createElement(s.ZP, { align: t, "aria-level": o, color: l, id: d, key: g, role: h, size: p, style: m, testID: u, weight: f || _ }, b);
                }
            }
            class h extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._generateRichTextTree = () => {
                            const { entities: e, styling_ranges: t, text: o } = this.props,
                                n = [...(t ?? []), ...(e ?? [])].sort((e, t) => t.to_index - t.from_index - (e.to_index - e.from_index)),
                                r = new d(0, o?.length || 0);
                            return (
                                n.forEach((e) => {
                                    r.insert(new d(e.from_index, e.to_index, e));
                                }),
                                r
                            );
                        });
                }
                render() {
                    return this._generateRichTextTree().render(this.props);
                }
            }
            const p = h;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/modules.common-e019dbda.686e298a.js.map
