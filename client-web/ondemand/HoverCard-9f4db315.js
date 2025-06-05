"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-9f4db315", "loader.directMessagesData-63cb1cc4"],
    {
        904940: (e, t, i) => {
            i.d(t, { Z: () => r });
            const r = ({ apiClient: e, featureSwitches: t }) => ({ metadataCreate: (t, i) => e.post("media/metadata/create", t, {}, { ...i, "content-type": "application/json" }), attachSubtitles: (t, i) => e.post("media/subtitles/create", { media_id: t.videoMediaUploadId, media_category: t.videoMediaCategory, subtitle_info: { subtitles: [{ media_id: t.subtitlesMediaUploadId, language_code: t.subtitlesLang, display_name: t.subtitlesDisplayName }] } }, {}, { ...i, "content-type": "application/json" }) });
        },
        708482: (e, t, i) => {
            i.d(t, { s: () => s });
            var r = i(10622),
                o = i.n(r);
            function s(e, t, i, r) {
                return o()(e, t, i, r ? { networkCacheConfig: { metadata: { isFatalError: r } } } : void 0).toPromise();
            }
        },
        290402: (e, t, i) => {
            i.d(t, { Z: () => _ });
            var r = i(807896),
                o = i(202784),
                s = i(182056),
                a = i(879113),
                n = i(392237),
                l = i(111677),
                d = i.n(l),
                u = i(968478);
            const c = d().aa6e3300,
                p = ({ retryMessage: e, ...t }, i) => {
                    const n = s.Z.isOnline();
                    return o.createElement(a.Z, (0, r.Z)({}, t, { icon: n ? void 0 : o.createElement(u.default, { style: m.icon }), retryMessage: n ? e : c }));
                },
                m = n.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                _ = o.forwardRef(p);
        },
        582751: (e, t, i) => {
            i.d(t, { Z8: () => a, mM: () => o, vx: () => s });
            var r = i(882122);
            const o = (e, t) => {
                    const i = r.lP(e, t);
                    if (void 0 === i) return i;
                    const o = r.c1(e, t),
                        s = r.og(e, t);
                    return i - (o.length - s.length);
                },
                s = (e, t) => r.og(e, t).map(({ profile_image_url_https: e }) => e),
                a = (e, t) => r.og(e, t).map(({ name: e }) => e);
        },
        217179: (e, t, i) => {
            i.r(t), i.d(t, { TopicHeader: () => D, default: () => Z });
            var r = i(202784),
                o = i(325686),
                s = i(646496),
                a = i(537392),
                n = i(786475),
                l = i(392237),
                d = i(111677),
                u = i.n(d),
                c = i(791632),
                p = i(321835),
                m = i(946409),
                _ = i(618566),
                h = i(638090),
                f = i(500002),
                g = i(443781),
                w = i(265196),
                b = i(233391),
                S = i(863934),
                I = i(288955),
                y = i(177371),
                v = i(459679),
                E = i(71620),
                T = i(668214),
                O = i(466380),
                A = i(919022);
            const P = (e, t) => O.Z.select(e, t.topicId),
                x = (e, t) => A.ZP.selectMany(e, t.facepile?.userIds || []),
                C = (e, t) => {
                    const i = x(e, t);
                    return (0, v.Z)(i, (e) => (!e || e.blocking || e.muting ? void 0 : e));
                },
                F = (0, T.Z)()
                    .propsFromState(() => ({ topic: P, users: C }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("TOPIC_HEADER"), follow: O.Z.follow, unfollow: O.Z.unfollow, undoTopicNotInterested: O.Z.undoNotInterested }))
                    .withAnalytics(),
                U = u().b1850062,
                M = u().d69b2d90,
                L = u().gf5e9ea6;
            class D extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._additionalControlsEnabled = this.context.featureSwitches.isTrue("topic_landing_page_clearer_controls_enabled")),
                        (this._followButtonTextVariant = (0, _.a)(this.context.featureSwitches.getStringValue("topic_landing_page_cta_text"))),
                        (this._handleUndoTopicNotInterested = () => {
                            const { createLocalApiErrorHandler: e, topic: t, undoTopicNotInterested: i } = this.props;
                            this._scribeAction({ element: "topic", action: "un_not_interested" }), t && i(t.id).catch(e());
                        }),
                        (this._handleOnClickFacepiles = () => {
                            this._scribeAction({ element: "facepile", action: "click" });
                        }),
                        (this._handleFacepilesImpression = () => {
                            this._scribeAction({ element: "facepile", action: "impression" });
                        });
                }
                render() {
                    const { facepile: e, history: t, onFollowHeaderOffscreen: i, topic: a, topicLandingContext: n, users: l } = this.props,
                        { description: d, name: u } = a || {},
                        _ = l.slice(0, 4).map((e) => e.profile_image_url_https),
                        h = e?.facepileUrl && (0, m.s9)(e.facepileUrl),
                        f = (0, c.cu)(t),
                        g = l && l.length > 3 ? { firstUsername: l[0].name || "", usersCount: l.length - 1, knownFollowersAvatarUrls: _, trendingFollowersUrl: h || "" } : void 0;
                    return a && !f
                        ? r.createElement(
                              o.Z,
                              { style: N.root },
                              r.createElement(I.Z, { customText: u, displayMode: b.BH.topic }, () => r.createElement(p.Z, { onOffscreenChange: i }, r.createElement(s.Z, { children: this._renderTopicActions(), context: n, knownFollowers: g, onFacepilesClick: this._handleOnClickFacepiles, onFacepilesImpression: this._handleFacepilesImpression, subtitle: d, title: u, withAdditionalControls: this._additionalControlsEnabled }))),
                          )
                        : null;
                }
                _renderTopicActions() {
                    const { displayType: e, showRelationshipChangeConfirmation: t, topic: i } = this.props;
                    return i
                        ? r.createElement(a.ZP, { key: "topic-header-actions" }, ({ containerWidth: s }) => {
                              const a = n.Z.isNarrowScreenWidth(s) ? N.mainViewSmall : N.mainView,
                                  l = this._additionalControlsEnabled ? (n.Z.isNarrowScreenWidth(s) ? N.followButtonSmall : N.followButton) : null,
                                  d = n.Z.isNarrowScreenWidth(s) ? N.notInterestButtonSmall : N.notInterestButton;
                              return r.createElement(r.Fragment, null, i.not_interested && this._additionalControlsEnabled ? this._renderTopicContextTombstone() : e === h.el.Basic ? r.createElement(o.Z, { style: a }, !this._additionalControlsEnabled || i.following || i.not_interested ? null : r.createElement(S.Z, { size: "medium", style: d, text: U, topicId: i.id, type: "primaryOutlined", withIconOnly: !1 }), r.createElement(w.ZP, { showRelationshipChangeConfirmation: t, size: "medium", style: l, textMode: this._followButtonTextVariant, topic: i })) : null);
                          })
                        : null;
                }
                _renderTopicContextTombstone() {
                    return r.createElement(y.Z, { actionText: L, children: M, inline: !0, onClick: this._handleUndoTopicNotInterested });
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribe(e);
                }
            }
            (D.contextType = g.rC), (D.defaultProps = { displayType: h.el.Basic });
            const N = l.default.create((e) => ({ root: { marginHorizontal: e.componentDimensions.gutterHorizontal, marginVertical: e.componentDimensions.gutterVertical }, mainView: { flexDirection: "row", flexGrow: 1 }, mainViewSmall: { flexWrap: "wrap" }, notInterestButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginEnd: e.spaces.space4 }, followButton: { justifyContent: "center", flexBasis: 1, flexGrow: 1, marginStart: e.spaces.space4, minWidth: "inherit" }, followButtonSmall: { marginTop: e.spaces.space8, marginStart: 0, width: "100%" }, notInterestButtonSmall: { width: "100%" } })),
                Z = (0, f.ZP)(F(D));
        },
        365112: (e, t, i) => {
            i.r(t), i.d(t, { UserProfileCardContainer: () => N, default: () => Z });
            var r = i(202784),
                o = i(266704),
                s = i(290402),
                a = i(666670),
                n = i(835546),
                l = i(312771),
                d = i(154003),
                u = i(111677),
                c = i.n(u),
                p = i(457566),
                m = i(725516),
                _ = i(979512);
            const h = c().fc7db594;
            function f({ screenName: e }) {
                const { openGrok: t } = (0, _.Z)(),
                    i = (0, m.z)(),
                    o = r.useCallback(() => {
                        t({ text: `@${e}`, autoSubmit: !0, source: "user_profile_summary" }), i.scribe({ element: "grok-user-info-button", action: "click" });
                    }, [i, t, e]);
                return r.createElement(d.ZP, { icon: r.createElement(p.x1, null), onPress: o }, h);
            }
            var g = i(461900),
                w = i(443781),
                b = i(23134),
                S = i(288955),
                I = i(71620),
                y = i(668214),
                v = i(882122),
                E = i(38562),
                T = i(919022),
                O = i(582751);
            const A = (0, T.W3)([T.pL]),
                P = (e, t) => A(e, t.screenName),
                x = (e, t) => T.ZP.selectByScreenName(e, t.screenName),
                C = (e, t) => T.ZP.selectIsUserNotFound(e, t.screenName),
                F = (e, t) => T.ZP.selectIsUserSuspended(e, t.screenName),
                U = (e, t) => T.ZP.selectIsUserWithheld(e, t.screenName),
                M = (e, t) => {
                    const i = x(e, t);
                    return i?.highlightedLabel;
                },
                L = (e, t) => {
                    const i = ((e, t) => T.ZP.selectIdByScreenName(e, t.screenName))(e, t);
                    return { avatarUrls: O.vx(e, i), count: O.mM(e, i), names: O.Z8(e, i) };
                },
                D = (0, y.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: E.f1, fetchStatus: P, isNotFound: C, isSuspended: F, isWithheld: U, knownFollowers: L, user: x, userHighlightedLabel: M }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, I.zr)("USER_PROFILE_CARD"), fetchOneUserByScreenNameIfNeeded: T.ZP.fetchOneByScreenNameIfNeeded, fetchKnownFollowersIfNeeded: v.Hq }))
                    .withAnalytics();
            class N extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderUserProfileCard = () => {
                            const { displaySensitiveMedia: e, isNotFound: t, isSuspended: i, isWithheld: s, knownFollowers: a, onAvatarClick: l, onScreenNameClick: d, profileLink: u, promotedContent: c, screenName: p, user: m, userHighlightedLabel: _ } = this.props;
                            if (i) return r.createElement(o.Z.Suspended, { onAvatarClick: l, onScreenNameClick: d, userScreenName: p });
                            if (!m) return null;
                            const { viewerUserId: h } = this.context,
                                f = !!h && h === m.id_str,
                                g = (0, n.n5)({ isOwnProfile: f, isSoftBlockEnabled: this.context.featureSwitches.isTrue("xprofile_blocked_by_view_enabled"), user: m }),
                                w = this.context.featureSwitches.isTrue("creator_subscriptions_subscription_count_enabled"),
                                b = (0, n.ZP)({ displaySensitiveMedia: e, isNotFound: t, isSuspended: i, isWithheld: s, viewerUserId: h, user: m }),
                                I = { ...b, subscriptionsCount: b.subscriptionsCount && w, label: b.label };
                            return r.createElement(S.Z, null, (e) => r.createElement(o.Z, { followButton: this._renderFollowUserButton(), grokButton: this._renderGrokButton(), isAllowedToViewOptions: I, isLoggedIn: !!h, isUserBlueVerified: m.is_blue_verified, isUserProtected: m.protected, isUserStatsWithLink: g, isUserVerified: m.verified, knownFollowers: a, onAvatarClick: l, onScreenNameClick: d, onUserStatsPress: e(), profileLink: u, promotedContent: c, subscriptionsCount: m.creator_subscriptions_count, userAvatarUri: m.profile_image_url_https, userDescription: m.description, userEntities: m.entities, userFollowersCount: m.followers_count, userFriendsCount: m.friends_count, userHighlightedLabel: _, userId: m.id_str, userName: m.name, userScreenName: p, userTranslatorType: m.translator_type, userVerifiedType: m.verified_type, userWithFollowsYou: m.followed_by, userWithheldDescription: m.withheld_description, userWithheldEntities: m.withheld_entities }));
                        }),
                        (this._renderFollowUserButton = () => {
                            const { promotedContent: e, showRelationshipChangeConfirmation: t, user: i } = this.props,
                                o = i?.id_str;
                            return o ? r.createElement(b.C, { promotedContent: e, showRelationshipChangeConfirmation: t, userId: o }) : void 0;
                        }),
                        (this._renderGrokButton = () => {
                            const e = (0, g.$)(this.context),
                                t = this.context.featureSwitches.isTrue("responsive_web_grok_profile_summary_enabled"),
                                i = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_followers", 1e6),
                                o = this.context.featureSwitches.getNumberValue("responsive_web_grok_profile_summary_min_posts", 100),
                                s = this.props.user?.followers_count ?? 0,
                                a = this.props.user?.statuses_count ?? 0,
                                n = this.props.user?.screen_name,
                                l = this.props.user?.protected,
                                d = !this.props.user?.verified_type || "User" === this.props.user?.verified_type;
                            return !e || !t || !n || s < i || a < o || l || !d ? null : r.createElement(f, { screenName: n });
                        }),
                        (this._handleFetchUser = () => {
                            const { createLocalApiErrorHandler: e, fetchOneUserByScreenNameIfNeeded: t, screenName: i } = this.props;
                            t(i).catch((t) => {
                                e(a.F)(t);
                            });
                        }),
                        (this._handleFetchKnownFollowers = () => {
                            const { createLocalApiErrorHandler: e, fetchKnownFollowersIfNeeded: t, user: i } = this.props,
                                r = i?.id_str;
                            r && t(r).catch(e({}));
                        });
                }
                componentDidMount() {
                    this._handleFetchUser(), this._handleFetchKnownFollowers();
                }
                componentDidUpdate(e) {
                    e.user?.id_str !== this.props.user?.id_str && this._handleFetchKnownFollowers();
                }
                render() {
                    const { fetchStatus: e, isSuspended: t } = this.props;
                    return r.createElement(s.Z, { fetchStatus: t ? l.ZP.LOADED : e, onRequestRetry: this._handleFetchUser, render: this._renderUserProfileCard });
                }
            }
            N.contextType = w.rC;
            const Z = D(N);
        },
        782642: (e, t, i) => {
            i.d(t, { p: () => a });
            var r = i(202784),
                o = i(125363),
                s = i(601576);
            const a = () => {
                    const e = (0, o.I0)(),
                        t = n(),
                        i = r.useRef(null);
                    return (
                        r.useEffect(() => () => clearTimeout(i.current), [t]),
                        r.useCallback(
                            (r) => {
                                e((0, s.fz)(r)), (i.current = setTimeout(() => t(), 3e3));
                            },
                            [e, t],
                        )
                    );
                },
                n = () => {
                    const e = (0, o.I0)();
                    return r.useCallback(() => e((0, s.RS)()), [e]);
                };
        },
        879596: (e, t, i) => {
            i.d(t, { D: () => o });
            var r = i(111677);
            const o = { defaultToast: { text: i.n(r)().ca96fe6e }, showToast: !0 };
        },
        944681: (e, t, i) => {
            i.d(t, { k: () => o, Q: () => s });
            const r = (e, t, i) => {
                    const r = new Date();
                    let o = r.getFullYear() - e;
                    const s = r.getMonth() + 1 - t;
                    if (s < 0) o -= 1;
                    else if (0 === s) {
                        r.getDate() - i < 0 && (o -= 1);
                    }
                    return o;
                },
                o = (e, t, i, o = !1) => (e && t && i ? r(e, t, i) < 18 : o),
                s = () => new Date().getFullYear() - 120;
        },
        166677: (e, t, i) => {
            i.d(t, { $r: () => Y, O9: () => W, ZP: () => q, vK: () => J });
            var r = i(688715),
                o = i(111677),
                s = i.n(o),
                a = i(653843),
                n = i(122123),
                l = i(417144),
                d = i(884495),
                u = i(716233),
                c = i(540387);
            const p = s().b8098028,
                m = s().b36f4170,
                _ = s().hab3781e,
                h = s().f6c4fb02,
                f = s().g0af3dd2,
                g = s().b8c8b0be,
                w = s().ica6d718,
                b = s().b28d44f7({ limit: 15 }),
                S = s().i1db7d13,
                I = s().baac0ed7,
                y = S({ limit: 512 }),
                v = s().a22385bb,
                E = s().be0440bf,
                T = v({ limit: 140 }),
                O = s().feeba512,
                A = s().db123c02,
                P = s().db6001e7({ limit: 5 }),
                x = s().eb96d952,
                C = s().i859a9d4,
                F = s().b3880588,
                U = s().ca058b68,
                M = s().id24379c,
                L = s().h4d7cbcc,
                D = (0, r.ju)("https://support.x.com/articles/20156423"),
                N = (0, r.ju)("https://help.x.com/using-twitter/twitter-videos"),
                Z = (e) => ({ text: e }),
                z = (e) => ({ text: e, action: { label: C, link: D } }),
                B = (e) => ({ text: e, action: { label: C, link: N } }),
                k = { [a.Y7.GIF_IS_TOO_LARGE]: Z(b), [a.Y7.CANNOT_BE_PROCESSED]: Z(p), [a.Y7.FILE_IS_NOT_AN_IMAGE]: Z(_) },
                V = { [l.d.ZERO_FILE_LENGTH]: Z(m), [l.d.TIMEOUT]: Z(F) },
                R = { ...V, [l.d.FILE_TOO_LARGE]: Z(P), [l.d.UNSUPPORTED_MEDIA]: z(A), [l.d.INVALID_MEDIA]: z(O) },
                G = { ...V, [l.d.FILE_TOO_LARGE]: Z(b), [l.d.UNSUPPORTED_MEDIA]: z(f), [l.d.INVALID_MEDIA]: z(h) },
                H = { ...V, [l.d.FILE_TOO_LARGE]: Z(y), [l.d.UNSUPPORTED_MEDIA]: B(w), [l.d.INVALID_MEDIA]: B(g) },
                j = Object.freeze({ RESIZE: "resize", UPLOAD: "upload", METADATA: "metadata", MAXDURATION: "maxduration", MAXSIZE: "maxsize" }),
                $ = 1048576,
                X = 1073741824,
                W = (e) => Object.values(j).includes(e.type),
                K = (e) => {
                    const { code: t, limit: i, type: r } = e;
                    if (t)
                        switch (r) {
                            case j.MAXSIZE:
                                return t === u.BW.GIF_IS_TOO_LARGE ? Z(b) : t === u.BW.VIDEO_IS_TOO_LARGE && void 0 !== i ? Z(i >= X ? I({ limit: Math.round(i / X) }) : S({ limit: Math.round(i / $) })) : Z(y);
                            case j.MAXDURATION:
                                return void 0 !== i ? (i > 140 ? Z(E({ limit: Math.round(i / 60) })) : { text: v({ limit: Math.round(i) }), action: { label: d.Z.LongerVideoUpload.defaultContent.actionLabel, link: { pathname: `/i/premium_sign_up?referring_page=${d.Z.LongerVideoUpload.referringPage}`, external: !0 } } }) : Z(T);
                            case j.RESIZE:
                                return k[t];
                            case j.UPLOAD:
                                if (e.isImage) return R[t];
                                if (e.isGif) return G[t];
                                if (e.isVideo) return H[t];
                                break;
                            case j.METADATA:
                                return Z(L);
                        }
                },
                Y = (e) => {
                    if (W(e)) return e;
                };
            function q(e, t = M) {
                const i = Y(e);
                if (i) {
                    const r = e.message ? `${t} ${e.message}` : t;
                    return K(i) || Z(r);
                }
            }
            function J(e, t = U) {
                return e.type === n.gK.type && e.code === n.gK.NO_DIMENSIONS ? Z(x) : e.type === c.hb.type && e.code === c.hb.NO_DIMENSIONS ? B(g) : Z(t);
            }
        },
        221562: (e, t, i) => {
            i.d(t, { BX: () => f, Uk: () => c, Xj: () => p, ZP: () => v });
            var r = i(468811),
                o = i.n(r),
                s = i(595088),
                a = i(161821),
                n = i(184605),
                l = i(716233),
                d = i(774717);
            const u = Object.freeze({ LocalFile: "local_file", Remote: "remote" }),
                c = Object.freeze({ Cancel: "cancel", Failure: "failure", Success: "success", Complete: "complete", Invalid: "invalid" }),
                p = Object.freeze({ InProgress: "in_progress", Complete: "complete", Failure: "failure", Canceled: "canceled" }),
                m = (e) => (e ? _(e) : void 0),
                _ = (e) =>
                    (0, s.Z)(e)
                        .filter(([e, t]) => void 0 !== t)
                        .map(([t, i]) => ("object" == typeof i ? `${t}=${h(e[t])}` : `${t}=${String(i)}`))
                        .join(";"),
                h = (e) =>
                    (0, a.Z)(e)
                        .filter((e) => void 0 !== e)
                        .map(String)
                        .join(":"),
                f = Object.freeze({ Full: "full", Hash: "hash", Processing: "processing", SruUpload: "sru_upload", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish", Metadata: "metadata" }),
                g = Object.freeze({ SruUpload: "sru_upload_no_eager", UploadSubmitUntilSruFinish: "upload_submit_until_sru_finish_no_eager" }),
                w = { [f.SruUpload]: g.SruUpload, [f.UploadSubmitUntilSruFinish]: g.UploadSubmitUntilSruFinish },
                b = Object.freeze({ All: "all", Short: "short", Medium: "medium", Long: "long", XLong: "xlong", L90to140s: "l90to140s", L140to300s: "l140to300s", L300to600s: "l300to600s", L600to1200s: "l600to1200s", L1200to1800s: "l1200to1800s", L1800to2700s: "l1800to2700s", L2700to3600s: "l2700to3600s", L3600to4500s: "l3600to4500s", L4500to5400s: "l4500to5400s", L5400to6300s: "l5400to6300s", L6300to7200s: "l6300to7200s", L7200to10800s: "l7200to10800s", L10800to14400s: "l10800to14400s", LGT14400s: "lgt14400s" }),
                S = (e, t) => ((0, n.Z)(e) && (0, n.Z)(t) ? Math.round(t - e) : void 0),
                I = () => (window.performance ? window.performance.now() : Date.now()),
                y = (e, t) => (e === l.xz.DMGif || e === l.xz.TweetGif ? b.All : (e !== l.xz.DMVideo && e !== l.xz.TweetVideo && e !== l.xz.AmplifyVideo) || void 0 === t ? "" : t < 10 ? b.Short : t < 20 ? b.Medium : t < 45 ? b.Long : t < 90 ? b.XLong : t < 140 ? b.L90to140s : t < 300 ? b.L140to300s : t < 600 ? b.L300to600s : t < 1200 ? b.L600to1200s : t < 1800 ? b.L1200to1800s : t < 2700 ? b.L1800to2700s : t < 3600 ? b.L2700to3600s : t < 4500 ? b.L3600to4500s : t < 5400 ? b.L4500to5400s : t < 6300 ? b.L5400to6300s : t < 7200 ? b.L6300to7200s : t < 10800 ? b.L7200to10800s : t < 14400 ? b.L10800to14400s : b.LGT14400s);
            class v {
                constructor(e, t = !1) {
                    (this._pausedDuration = {}),
                        (this._pauseTimes = {}),
                        (this._startTimes = {}),
                        (this._eagerUploadDisabled = t),
                        (this._impressionId = o().v4()),
                        (this._keyPrefix = ((e) => {
                            const { isExternal: t, mediaCategory: i, videoDuration: r } = e;
                            return `${t ? u.Remote : u.LocalFile}:${i}:${y(i, r)}`;
                        })(e)),
                        this.setMetadata({ submitted: !1 });
                }
                reportOperationComplete(e, t) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        void 0 !== this._pauseTimes[e] && this.toggleOperationPaused(e, !1);
                        let i = S(this._startTimes[e], I());
                        if (this._keyPrefix && void 0 !== i) {
                            void 0 !== this._pausedDuration[e] && (i -= this._pausedDuration[e]);
                            const r = this._getKey(e, t);
                            this._record(r, i, e === f.Full ? this._metadata : e === f.Metadata ? this._fileMetadata : void 0), (this._startTimes[e] = void 0);
                        }
                    });
                }
                reportOperationStart(e, t = !1) {
                    (Array.isArray(e) ? e : [e]).forEach((e) => {
                        if (void 0 === this._startTimes[e] && ((this._startTimes[e] = I()), this._keyPrefix && t)) {
                            const t = this._getKey(e, "start");
                            this._record(t, 0);
                        }
                    });
                }
                reportUploadSubmit() {
                    if (this._metadata?.submitted) return;
                    this.setMetadata({ submitted: !0 });
                    let e = S(this._startTimes[f.Full], I());
                    if (this._keyPrefix && void 0 !== e) {
                        void 0 !== this._pausedDuration[f.Full] && (e -= this._pausedDuration[f.Full]);
                        const t = this._getKey(f.Full, "submit");
                        this._record(t, e, this._metadata);
                    }
                }
                setMetadata(e) {
                    this._metadata = { ...this._metadata, ...e };
                }
                setFileMetadata(e) {
                    this._fileMetadata = { ...this._fileMetadata, ...e };
                }
                toggleOperationPaused(e, t) {
                    if (t && void 0 === this._pauseTimes[e]) this._pauseTimes[e] = I();
                    else if (!t) {
                        const t = S(this._pauseTimes[e], I());
                        void 0 !== t && ((this._pausedDuration[e] = this._pausedDuration[e] ? this._pausedDuration[e] + t : t), (this._pauseTimes[e] = void 0));
                    }
                }
                _getKey(e, t) {
                    const i = (this._eagerUploadDisabled && w[e]) || e;
                    return `${this._keyPrefix}:${i}:${t}`;
                }
                _record(e, t, i) {
                    const r = { duration_ms: t, impression_id: this._impressionId, metadata: m(i) };
                    d.IM(e, r, "media_upload");
                }
                _getStartTimes() {
                    return this._startTimes;
                }
                _resetStartTimes(e) {
                    this._startTimes = { ...e };
                }
            }
        },
        716233: (e, t, i) => {
            i.d(t, { BW: () => f, SB: () => y, TO: () => E, Tz: () => w, U$: () => I, ff: () => g, vC: () => S, vn: () => v, xz: () => b, y$: () => _ });
            var r = i(182056),
                o = i(323265),
                s = i(540387);
            const a = 1024,
                n = 1024 * a,
                l = 1,
                d = 4096,
                u = 2048,
                c = 400,
                p = 1500,
                m = { Image: 5, Gif: 15, Avatar_Gif: 5 },
                _ = { Duration: { 0: 140, 1: 600, 2: 7200 }, Size: { 0: 512, 1: 1024, 2: 40960 } },
                h = 600,
                f = { GIF_IS_TOO_LARGE: 1, VIDEO_IS_TOO_LARGE: 2 },
                g = { VIDEO_IS_TOO_LONG: 1 },
                w = { MEDIA_NOT_FOUND: 0, INVALID_MEDIA_CODE: 1 },
                b = Object.freeze({ AmplifyVideo: "amplify_video", CommunityBanner: "community_banner_image", ListBanner: "list_banner_image", TweetImage: "tweet_image", TweetVideo: "tweet_video", TweetGif: "tweet_gif", DMImage: "dm_image", DMVideo: "dm_video", DMGif: "dm_gif", Subtitles: "subtitles", ProfileBanner: "banner_image" }),
                S = Object.freeze({ Tweet: "tweet", Dm: "dm", CommunityBanner: "community_banner", ListBanner: "list_banner", ProfileBanner: "profile_banner", Avatar: "avatar", Verification: "verification", TwitterArticle: "twitter_article" }),
                I = (e) => {
                    const { height: t, left: i, width: r } = e,
                        o = Math.round(t / 2);
                    return `&salient_rect=${Math.round(i + r / 2)},${o},1,1`;
                };
            function y(e) {
                const t = e.featureSwitches?.isTrue("blue_longer_video_enabled"),
                    i = (function (e) {
                        return e.userClaims.isTrueAndEnabled("subscriptions_long_video_upload") || e.featureSwitches.isTrue("subscriptions_long_video_upload_override") || !1;
                    })(e);
                return t || i ? 1 : 0;
            }
            function v(e, t, i, f, g) {
                const w = f?.location,
                    b = y({ featureSwitches: e, userClaims: t });
                let I, v;
                if (i.isSubtitles) I = 0;
                else if (i.isGif)
                    switch (w) {
                        case S.Avatar:
                            I = e.getNumberValue("media_async_upload_max_avatar_gif_size", m.Avatar_Gif) * n;
                            break;
                        case S.Dm:
                        case S.Tweet:
                        default:
                            I = e.getNumberValue("media_async_upload_max_gif_size", m.Gif) * n;
                    }
                else {
                    if (!(i instanceof s.ZP))
                        return (function (e, t, i) {
                            let s;
                            switch (t) {
                                case S.Avatar:
                                    s = c;
                                    break;
                                case S.CommunityBanner:
                                case S.ListBanner:
                                case S.ProfileBanner:
                                    s = p;
                                    break;
                                default:
                                    s = o.ZP.isDesktopOS() ? d : u;
                            }
                            const l = e.getNumberValue("media_async_upload_max_image_size", m.Image) * n;
                            return r.Z.getConnectionInfo().then(
                                (r) => {
                                    let n = l;
                                    return "slow-2g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_slow_2g", 150) * a) : i || "2g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_2g", 250) * a) : "3g" === r.effectiveType ? (n = e.getNumberValue("responsive_web_media_upload_limit_3g", 1500) * a) : "4g" !== r.effectiveType || o.ZP.isDesktopOS() || t !== S.Tweet || (s = d), { maxDimension: s, maxFileSize: Math.min(l, n) };
                                },
                                () => ({ maxDimension: s, maxFileSize: l }),
                            );
                        })(e, w, g);
                    if (1 === b) {
                        if ("dm" === w) v = e.getNumberValue("media_async_upload_longer_dm_video_max_video_duration", h);
                        else v = e.getNumberValue("media_async_upload_longer_video_max_video_duration", _.Duration[b]) * l;
                        I = e.getNumberValue("media_async_upload_longer_video_max_video_size", _.Size[b]) * n;
                    } else (v = e.getNumberValue("media_async_upload_max_video_duration", _.Duration[b]) * l), (I = e.getNumberValue("media_async_upload_max_video_size", _.Size[b]) * n);
                }
                return Promise.resolve({ maxFileSize: I, maxDuration: v });
            }
            function E(e) {
                return !(o.ZP.isIOS() && e.size > 3e8);
            }
        },
        946208: (e, t, i) => {
            i.d(t, { Id: () => r, ZP: () => a, h_: () => o });
            i(543673), i(240753), i(128399);
            const r = [".srt", "text/plain", ""],
                o = (e) => -1 !== r.indexOf(e.type),
                s = (e) =>
                    `WEBVTT FILE\r\n\r\n${e
                        .replace(/\{\\([ibu])\}/g, "</$1>")
                        .replace(/\{\\([ibu])1\}/g, "<$1>")
                        .replace(/\{([ibu])\}/g, "<$1>")
                        .replace(/\{\/([ibu])\}/g, "</$1>")
                        .replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g, "$1.$2")
                        .replace(/\r\n\{\\an8\}/g, " line:5%\r\n")}`;
            class a {
                constructor(e) {
                    (this.fileHandle = new Blob([e], { type: "text/plain charset=UTF-8" })),
                        e instanceof File && (this.name = e.name),
                        (this.size = e.size),
                        (this.type = this.fileHandle.type),
                        (this.url = window.URL.createObjectURL(this.fileHandle)),
                        this.fileHandle.text &&
                            this.fileHandle.text().then((e) => {
                                this.vtt = URL.createObjectURL(new Blob([s(e)], { type: "text/plain charset=UTF-8" }));
                            }),
                        (this.isVideo = !1),
                        (this.isImage = !1),
                        (this.isGif = !1),
                        (this.isSubtitles = !0);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url) && window.URL.revokeObjectURL(this.vtt);
                }
            }
        },
        540387: (e, t, i) => {
            i.d(t, { Wv: () => o, ZP: () => a, hb: () => s, jn: () => r });
            i(571372), i(543673), i(240753), i(128399);
            const r = ["video/mp4", "video/quicktime"],
                o = (e) => -1 !== r.indexOf(e.type),
                s = { type: "video-load", NO_DIMENSIONS: 10, LOAD_FAILED: 11, TOO_LARGE: 12 };
            class a {
                constructor(e, t) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type);
                    try {
                        this.url = window.URL.createObjectURL(this.fileHandle);
                    } catch (e) {
                        this.url = "";
                    }
                    (this.isVideo = !0), (this.isImage = !1), (this.isGif = !1), (this.isSubtitles = !1), (this.isAmplify = !!t);
                }
                withDimensionsAndOrientation(e) {
                    return ((e, t) =>
                        new Promise((i, r) => {
                            const o = (e, t) => {
                                    const i = new Error(e);
                                    (i.code = t), (i.type = s.type), r(i);
                                },
                                a = document.createElement("video");
                            (a.onloadedmetadata = () => {
                                t || (a.videoWidth && a.videoHeight) ? i(a) : o("Video lacks height or width", s.NO_DIMENSIONS);
                            }),
                                (a.onerror = () => {
                                    o("Error loading image", s.LOAD_FAILED);
                                }),
                                (a.src = e);
                        }))(this.url, e).then((e) => {
                        const { duration: t, videoHeight: i, videoWidth: r } = e;
                        return (this.width = r), (this.height = i), (this.duration = t), (this.video = e), (this.isBrowserSupported = !(0 === i || 0 === r)), this;
                    });
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        806528: (e, t, i) => {
            i.d(t, { Bz: () => d, ZW: () => _, ey: () => c, fw: () => n, iG: () => m, wM: () => l });
            var r = i(499627),
                o = i(341276);
            const s = "geoLocation",
                a = Object.freeze({ permissionStatus: void 0, position: void 0 });
            const n = (e) => e[s],
                l = (e) => e[s].permissionStatus,
                d = (e) => e[s].position,
                u = "rweb/geoLocation/SET_PERMISSION_STATUS",
                c = (e) => ({ payload: e, type: u }),
                p = "rweb/geoLocation/SET_POSITION",
                m = () => (e, t) =>
                    h()
                        .then((t) => e({ payload: t, type: p }))
                        .catch((t) => (e(c(o.S.denied)), Promise.reject(t))),
                _ = () => (e, t) => (d(t()) ? Promise.resolve() : e(m())),
                h = () =>
                    new Promise((e, t) =>
                        navigator.geolocation.getCurrentPosition((t) => {
                            const i = { timestamp: t.timestamp, coords: { latitude: t.coords.latitude, longitude: t.coords.longitude, altitude: t.coords.altitude, accuracy: t.coords.accuracy, altitudeAccuracy: t.coords.altitudeAccuracy, heading: t.coords.heading, speed: t.coords.speed } };
                            return e(i);
                        }, t),
                    );
            r.Z.register({
                [s]: function (e = a, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case u:
                            return { ...e, permissionStatus: t.payload };
                        case p:
                            return { ...e, position: t.payload };
                        default:
                            return e;
                    }
                },
            });
        },
        341276: (e, t, i) => {
            i.d(t, { M: () => o, S: () => r });
            const r = Object.freeze({ granted: "granted", denied: "denied", prompt: "prompt" }),
                o = Object.freeze({ PERMISSION_DENIED: 1, POSITION_UNAVAILABLE: 2, TIMEOUT: 3 });
        },
        882122: (e, t, i) => {
            i.d(t, { Hq: () => w, c1: () => _, lP: () => f, og: () => h });
            var r = i(745123);
            var o = i(499627),
                s = i(917799),
                a = i(56519),
                n = i(919022);
            const l = "knownFollowers",
                d = `rweb/${l}`,
                u = [],
                c = (0, s.dg)(d, "FETCH_KNOWN_FOLLOWERS"),
                p = {};
            o.Z.register({
                [l]: function (e = p, t) {
                    if (!t) return e;
                    if (t.type === c.SUCCESS) {
                        const i = t.payload || {},
                            { total_count: r, users: o } = i && i.result,
                            { user_id: s } = t.meta || {};
                        return s ? { ...e, [s]: { knownFollowersCount: r, knownFollowerIds: o } } : e;
                    }
                    return e;
                },
            });
            const m = (e, t) => e[l][t],
                _ = (e, t) => {
                    if (t) {
                        const o = g(e, t);
                        return (i = n.ZP.selectMany(e, o)), (r = (e) => !!e), i.filter(r);
                    }
                    var i, r;
                    return u;
                },
                h = (e, t) => _(e, t).filter(({ name: e, profile_image_url_https: t }) => !!t?.length && !!e?.length),
                f = (e, t) => {
                    let i;
                    if (t) {
                        const r = m(e, t);
                        i = r?.knownFollowersCount;
                    }
                    return i;
                },
                g = (e, t) => {
                    const i = m(e, t);
                    return i?.knownFollowerIds || u;
                },
                w =
                    (e) =>
                    (t, i, { api: o }) =>
                        void 0 !== f(i(), e)
                            ? Promise.resolve()
                            : t(
                                  (
                                      (e) =>
                                      (t, i, { api: o }) =>
                                          (0, s._O)(t, { request: o.withEndpoint(r.Z).fetchFollowersYouFollow, params: { user_id: e, count: 3, with_total_count: !0 } })({ actionTypes: c, context: "FETCH_KNOWN_FOLLOWERS", meta: { user_id: e } }, (e) => {
                                              if (e) {
                                                  const { entities: t } = e;
                                                  return t ? [(0, a.dP)(t)] : void 0;
                                              }
                                          })
                                  )(e),
                              );
        },
        537052: (e, t, i) => {
            i.d(t, { Hf: () => a, OA: () => o, mL: () => s });
            i(571372);
            var r = i(837880);
            function o(e, t) {
                const i = (0, r.Z)(t / 100, 0, 1),
                    o = n[e],
                    s = i * (o.max - o.min);
                return d(o.min + s, 3);
            }
            function s(e) {
                const t = (0, r.Z)(e, 0, 1);
                for (let e = 0; e < l.length; e++) {
                    const i = l[e];
                    if ((0 === e && t <= i.min) || (e === l.length - 1 && t >= i.max) || (t >= i.min && t < i.max)) {
                        let e = u(t, i.min, i.max);
                        return (e = d(e, 3)), [i.name, e];
                    }
                }
                throw new Error("unreachable");
            }
            const a = Object.freeze({ uploading: "uploading", processing: "processing" }),
                n = { [a.uploading]: { name: a.uploading, min: 0, max: 0.5 }, [a.processing]: { name: a.processing, min: 0.5, max: 1 } },
                l = [n.uploading, n.processing];
            function d(e, t) {
                const i = Math.pow(10, t);
                return Math.round(e * i) / i;
            }
            function u(e, t, i) {
                return (e - t) / (i - t);
            }
            !(function () {
                let e,
                    t = 0;
                for (const i of l) {
                    if (((t += i.max - i.min), i.max <= i.min)) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX MUST BE GREATER THAN MIN [${e}]`);
                    }
                    if (i.min < 0) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MIN IS LESS THAN ZERO [${e}]`);
                    }
                    if (i.max > 1) {
                        const e = JSON.stringify({ stage: i });
                        throw new Error(`INVALID STAGE MAX IS GREATER THAN ONE [${e}]`);
                    }
                    if (e && i.min !== e.max) {
                        const t = JSON.stringify({ stage: i, last_stage: e });
                        throw new Error(`INVALID STAGE MIN MUST EQUAL PREVIOUS MAX [${t}]`);
                    }
                    e = i;
                }
                if (1 !== t) {
                    const e = JSON.stringify({ total: t });
                    throw new Error(`INVALID STAGE TOTAL MUST EQUAL EXACTLY 1.0 [${e}]`);
                }
            })();
        },
        111531: (e, t, i) => {
            i.d(t, { EM: () => c, K3: () => u, Xp: () => p });
            var r = i(882127),
                o = i(498510),
                s = (i(585488), i(277660)),
                a = i.n(s),
                n = i(708482),
                l = i(944681),
                d = i(535338);
            function u(e) {
                return (function (e) {
                    return (0, n.s)(e, _, {});
                })(e).then(
                    (e) =>
                        !m(e) &&
                        (function (e) {
                            return e?.user_preferences.allow_video_downloads ?? !0;
                        })(e),
                );
            }
            function c() {
                return m((0, d.p)(_, {}));
            }
            function p(e) {
                return (function (e) {
                    const t = e.user_results?.result;
                    if ("User" === t?.__typename) {
                        const e = t?.legacy_extended_profile?.birthdate;
                        if (e) {
                            const { day: t, month: i, year: r } = e;
                            return (0, l.k)(r, i, t, !0);
                        }
                    }
                    return !0;
                })(a()(h, e));
            }
            function m(e) {
                const t = e?.viewer?.user_results?.result;
                if ("User" === t?.__typename) {
                    const e = t?.legacy_extended_profile?.birthdate;
                    if (e) {
                        const { day: t, month: i, year: r } = e;
                        return (0, l.k)(r, i, t, !0);
                    }
                }
                return !0;
            }
            const _ = o.Z,
                h = r.Z;
        },
        497294: (e, t, i) => {
            i.d(t, { $i: () => pe, C4: () => K, G$: () => Y, Q6: () => X, TU: () => J, WU: () => Q, _B: () => oe, _J: () => ie, _T: () => R, dD: () => re, gz: () => k, m3: () => V, o6: () => ne, oZ: () => me, pJ: () => ue, rA: () => $ });
            i(571372), i(136728);
            var r = i(99107),
                o = i(411916),
                s = i.n(o),
                a = i(10622),
                n = i.n(a),
                l = i(111677),
                d = i.n(l),
                u = i(205074),
                c = i(653843),
                p = i(514354),
                m = i(908478),
                _ = i(417144),
                h = i(904940),
                f = i(918621),
                g = i(829053),
                w = i(716233),
                b = i(166677),
                S = i(221562),
                I = i(755296),
                y = i(946208),
                v = i(540387),
                E = i(653798),
                T = i(499627),
                O = i(917799),
                A = i(390387),
                P = i(38562),
                x = i(601576),
                C = i(111531),
                F = i(537052);
            const U = d().g40ff2b4,
                M = "mediaUpload",
                L = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload2.json",
                D = `rweb/${M}`,
                N = [],
                Z = "upload";
            class z extends Error {
                constructor(e, { code: t, isGif: i, isImage: r, isVideo: o, type: s }) {
                    super(e), (this.code = t), (this.type = s), (this.isGif = !!i), (this.isImage = !!r), (this.isVideo = !!o);
                }
            }
            function B(e, t, i) {
                let o = null,
                    s = {},
                    a = {};
                if ((t.getNumberValue("optimized_sru_parameters_enabled") && (a = { sruParameterOverrides: { minSegmentBytes: t.getNumberValue("optimized_sru_parameters_min_segment_bytes"), idealUploadTimeMs: t.getNumberValue("optimized_sru_parameters_ideal_upload_time_ms"), maxSegmentBytes: t.getNumberValue("optimized_sru_parameters_max_segment_bytes"), clientsideSruUploadTimeoutMs: t.getNumberValue("optimized_sru_parameters_client_side_timeout_ms") } }), (0, I.s)().isLoggedIn)) {
                    const e = (0, f.ej)({ cookieName: r.qj, featureSwitches: t });
                    if (e) {
                        const t = i?.actAsUserId;
                        a.sruHeaders = { ...(0, g.L)(t), "x-twitter-auth-type": "OAuth2Session", authorization: (0, r.Oj)(!1), [r.d4]: e };
                    }
                }
                return (
                    i?.useLongVideoEndpoint && (a.uploadUrl = L),
                    {
                        upload(t) {
                            (o = new _.Z(e, a)), (s = t), o.upload(s);
                        },
                        amendUpload(e) {
                            (s = { ...s, ...e }), o && o.upload(s);
                        },
                        uploadExternalMedia(t, i, r, s) {
                            (o = new _.Z(e, a)), o.uploadExternalMedia(t, i, r, s);
                        },
                        cancel() {
                            o && o.cancel();
                        },
                    }
                );
            }
            const k = (e) => e[M],
                V = (e, t) => {
                    const i = Array.isArray(t) ? t : [t];
                    return e[M].filter((e) => i.some((t) => t === e.id));
                },
                R = (e, t) => {
                    const i = V(e, t);
                    if (!i.length) return 0;
                    const r = i.reduce((e, t) => e + (t.uploadProgress || 0), 0) / i.length;
                    return Math.min(r, 1);
                },
                G = "rweb/mediaUpload/ADD_MEDIA",
                H = (e) => ({ payload: e, type: G });
            let j = 1;
            function $(e, t) {
                return (i, r, { featureSwitches: o, relayEnvironment: s }) => {
                    const a = Array.from(e, (e) => {
                            if ((0, v.Wv)(e)) {
                                const i = new v.ZP(e, t.isAmplify);
                                if ((0, w.TO)(e)) {
                                    const e = o.isTrue("responsive_web_hevc_upload_preview_enabled") && o.isTrue("responsive_web_composer_configurable_video_player_enabled");
                                    return i.withDimensionsAndOrientation(e);
                                }
                                return Promise.resolve(i);
                            }
                            return (0, y.h_)(e) ? Promise.resolve(new y.ZP(e)) : new u.ZP(e).withDimensionsAndOrientation();
                        }),
                        l = i((e, t, { relayEnvironment: i }) =>
                            n()(i, E.S, {}, { fetchPolicy: "store-or-network" })
                                .toPromise()
                                .then((e) => {
                                    const t = e?.viewer?.user_results?.result;
                                    return "User" === t?.__typename && (t?.sensitive_media_settings?.can_user_allow_sensitive_content ?? !1);
                                })
                                .catch(() => !1),
                        ).then((e) => e && (0, C.K3)(s));
                    return Promise.all(a)
                        .then(
                            (e) => {
                                const r = i(
                                    (function (e, t) {
                                        return (i, r, { featureSwitches: o, userClaims: s }) => {
                                            const { uploadIds: a = [], altTexts: n = [] } = t,
                                                l = (0, P.IX)(r()),
                                                d = (Array.isArray(e) ? e : [e]).map((e, d) => {
                                                    const p = o.isTrue("responsive_web_media_upload_metrics_enabled");
                                                    let m;
                                                    t.location && (m = _e(t.location, e, !1, { featureSwitches: o, userClaims: s }));
                                                    const _ = e instanceof v.ZP ? e.duration : void 0,
                                                        h = e instanceof u.ZP ? e.orientation : void 0,
                                                        f = p && m ? new S.ZP({ isExternal: !1, mediaCategory: m, videoDuration: _ }, l) : void 0,
                                                        g = o.isTrue("responsive_web_media_upload_md5_hashing_enabled") && e.isImage && e instanceof u.ZP,
                                                        b = o.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte");
                                                    return (
                                                        e instanceof v.ZP &&
                                                            (function (e) {
                                                                const { video: t } = e;
                                                                t &&
                                                                    ((t.currentTime = Math.min(0.1, t.duration)),
                                                                    t.addEventListener("timeupdate", () => {
                                                                        const i = document.createElement("canvas"),
                                                                            { height: r, width: o } = e;
                                                                        (i.width = o), (i.height = r);
                                                                        i.getContext("2d").drawImage(t, 0, 0, o, r), (e.thumbnail = i.toDataURL("image/png"));
                                                                    }));
                                                            })(e),
                                                        f?.setFileMetadata({ fileSize: e.size, mime: e.type, duration: _, width: e.width, height: e.height, orientation: h }),
                                                        (0, w.vn)(o, s, e, t, l).then(({ maxDimension: l, maxFileSize: p }) => {
                                                            const m = e.isImage && e instanceof u.ZP && (0, c.m2)(e, { maxFileSize: p, maxDimension: l, jpgPixelsPerByteForResize: b }),
                                                                _ = (0, w.SB)({ featureSwitches: o, userClaims: s }),
                                                                h = { useLongVideoEndpoint: e.isVideo && _ >= 1, actAsUserId: (0, A.dY)(r()) },
                                                                S = m ? void 0 : B(e.fileHandle, o, h),
                                                                I = W({ originalMediaFile: e, mediaFile: e, mediaFileHash: g ? void 0 : null, needsProcessing: m, location: t.location, uploadId: a[d] ?? "", reporter: f, uploader: S, mediaMetadata: { altText: n[d] }, abortController: g ? new AbortController() : void 0 });
                                                            return g && fe(i, r, I.id, e.fileHandle, I.reporter, I.abortController), I;
                                                        })
                                                    );
                                                });
                                            return Promise.all(d).then((e) => (i(H(e)), e));
                                        };
                                    })(e, t),
                                );
                                return r;
                            },
                            (e) => {
                                const t = (0, b.vK)(e);
                                return t && i((0, x.fz)(t)), Promise.reject(e);
                            },
                        )
                        .then((e) =>
                            l
                                .then((t) => {
                                    if (t) for (const t of e) i(oe(t.id, { ...t.mediaMetadata, allowDownloadStatus: { allowDownload: !0 } }));
                                    return e;
                                })
                                .catch(() => e),
                        );
                };
            }
            const X =
                ({ height: e, mediaCategory: t, mediaType: i, previewMediaType: r, previewUrl: o, sourceUrl: s, stillMediaUrl: a, width: n }) =>
                (l, d, { featureSwitches: u }) => {
                    const c = u.isTrue("responsive_web_media_upload_metrics_enabled") && t ? new S.ZP({ isExternal: !0, mediaCategory: t }) : void 0;
                    c?.reportOperationStart(S.BX.Full, !0);
                    const p = { actAsUserId: (0, A.dY)(d()) },
                        m = W({ externalMediaDetails: { mediaCategory: t, mediaType: i, previewUrl: o || s, previewMediaType: r || i, sourceUrl: s, stillMediaUrl: a, width: n, height: e }, reporter: c, uploader: B(null, u, p) });
                    return l(H(m)), c?.toggleOperationPaused(S.BX.Full, !0), [m];
                };
            function W(e) {
                const t = { ...e, id: j, uploadFailed: !1, uploading: !1, uploadProgress: 1, mediaMetadata: void 0 };
                return (j += 1), t.uploadId || ((t.uploadId = ""), (t.uploadProgress = 0)), t;
            }
            const K =
                    (e) =>
                    (t, i, { featureSwitches: r, userClaims: o }) => {
                        const [s] = V(i(), e);
                        if (!s) return Promise.reject(new Error("media item not found"));
                        const { abortController: a, cropData: n, id: l, location: d, mediaFile: p, needsProcessing: m, originalMediaFile: _ } = s;
                        if (!_) return Promise.reject(new Error("media item not found"));
                        const h = r.getNumberValue("responsive_web_media_upload_target_jpg_pixels_per_byte"),
                            f = (0, P.IX)(i()),
                            g = { location: d };
                        return (0, w.vn)(r, o, _, g, f).then((e) => {
                            const o = { cropData: n, jpgPixelsPerByteForResize: h, maxFileSize: e.maxFileSize, maxDimension: e.maxDimension },
                                d = e.maxFileSize || 0,
                                f = e.maxDuration || 0;
                            if (_.isImage && _ instanceof u.ZP)
                                return m
                                    ? (0, c.ZP)(_, o)
                                          .then(
                                              (e) => new u.ZP(e).withDimensionsAndOrientation(),
                                              (e) => {
                                                  throw (a?.abort(), (e.type = "resize"), e);
                                              },
                                          )
                                          .then((e) => {
                                              _ !== p && p && p.dispose(), s.uploader && s.uploader.cancel && s.uploader.cancel();
                                              const o = { actAsUserId: (0, A.dY)(i()) },
                                                  a = B(e.fileHandle, r, o),
                                                  n = t(ie({ id: l, mediaFile: e, needsProcessing: !1, uploadPromise: void 0, uploadProgress: 0, uploading: !1, uploadId: void 0, uploader: a }));
                                              return (s.uploadId || s.uploading) && t(pe([l])), n;
                                          })
                                    : Promise.resolve(s);
                            if (_.size > d) {
                                const e = Error("Exceeds size limit");
                                return ([e.type, e.code, e.limit] = ["maxsize", _.isGif ? w.BW.GIF_IS_TOO_LARGE : w.BW.VIDEO_IS_TOO_LARGE, d]), Promise.reject(e);
                            }
                            if (_.isVideo && _ instanceof v.ZP && _.duration > f) {
                                const e = Error("Exceeds duration limit");
                                return ([e.type, e.code, e.limit] = ["maxduration", w.ff.VIDEO_IS_TOO_LONG, f]), Promise.reject(e);
                            }
                            return Promise.resolve(s);
                        });
                    },
                Y = (e, t) => (i, r) => {
                    const { onFailure: o } = t,
                        a = [];
                    return new Promise((t, r) => {
                        const n = (e) => {
                            if (!e.length) return t(a);
                            const [r] = e;
                            s()(() => {
                                r.reporter?.reportOperationStart(S.BX.Full, !0),
                                    r.reporter?.reportOperationStart([S.BX.Processing, S.BX.Metadata]),
                                    r.reporter?.reportOperationComplete(S.BX.Metadata, S.Uk.Complete),
                                    i(K(r.id)).then(
                                        (t) => {
                                            a.push(t), t?.reporter?.reportOperationComplete(S.BX.Processing, S.Uk.Success), t?.reporter?.toggleOperationPaused(S.BX.Full, !0), n(e.slice(1));
                                        },
                                        (t) => {
                                            const s = (0, b.ZP)(t, U);
                                            s && i((0, x.fz)(s));
                                            const { code: a, message: l, name: d, type: u } = t;
                                            r.reporter?.setMetadata({ reason: { name: d, message: l, code: a } });
                                            const p = "maxsize" === u || "maxduration" === u || ("resize" === u && (a === c.Y7.FILE_IS_NOT_AN_IMAGE || a === c.Y7.GIF_IS_TOO_LARGE)) ? S.Uk.Invalid : S.Uk.Failure;
                                            r.reporter?.reportOperationComplete([S.BX.Full, S.BX.Processing], p), o && o(r.id), n(e.slice(1));
                                        },
                                    );
                            });
                        };
                        n(e);
                    });
                },
                q = "rweb/mediaUpload/REMOVE_MEDIA",
                J = (e) => ({ payload: Array.isArray(e) ? e : [e], type: q });
            function Q(e) {
                return (t, i) => {
                    V(i(), e).forEach((e) => {
                        const { abortController: t, mediaFile: i, originalMediaFile: r, reporter: o, uploader: s } = e;
                        t?.abort(), s && s.cancel && s.cancel(), o?.reportOperationComplete(S.BX.Full, S.Uk.Cancel), i && i.dispose(), r && r.dispose();
                    }),
                        t(J(e));
                };
            }
            const ee = "rweb/mediaUpload/UPDATE_MEDIA",
                te = (e) => ({ payload: e, type: ee });
            function ie(e) {
                return (t, i) => {
                    t(te(e));
                    const [r] = V(i(), e.id);
                    return r;
                };
            }
            function re(e) {
                return (t, i) => {
                    const [r] = V(i(), e);
                    r.uploader?.cancel(), t(pe(e));
                };
            }
            function oe(e, t) {
                return (i) => i(ie({ id: e, mediaMetadata: t }));
            }
            const se = "SEND_METADATA",
                ae = O.dg(D, se);
            function ne(e) {
                return (t, i, { api: r }) => O._O(t, { params: e, request: r.withEndpoint(h.Z).metadataCreate })({ actionTypes: ae, context: se });
            }
            const le = "ATTACH_SUBTITLES",
                de = O.dg(D, le);
            function ue(e) {
                return (t, i, r) => {
                    const { subtitlesDisplayName: o, subtitlesLang: s, subtitlesMediaUploadId: a, videoMediaUploadId: n } = e,
                        { api: l, featureSwitches: d, userClaims: u } = r,
                        c = he(e.mediaItem, !1, { featureSwitches: d, userClaims: u }) || "";
                    return O._O(t, { params: { videoMediaUploadId: n, videoMediaCategory: c, subtitlesLang: s, subtitlesMediaUploadId: a, subtitlesDisplayName: o }, request: l.withEndpoint(h.Z).attachSubtitles })({ actionTypes: de, context: le });
                };
            }
            const ce = (e) => {
                const t = e.trimData;
                if (t) return `${t.startTime.toFixed(3)}-${t.endTime.toFixed(3)}`;
            };
            const pe =
                    (e, t = Object.freeze({})) =>
                    (i, r, { featureSwitches: o, userClaims: s }) => {
                        const a = V(r(), e),
                            n = (e) => i(ie(e));
                        function l(e, i = !1) {
                            const r = o.isTrue("responsive_web_media_upload_md5_hashing_enabled"),
                                { abortController: a, id: d, mediaFile: c, mediaFileHash: p, reporter: m, uploader: h } = e,
                                f = r && c && c.isImage && c instanceof u.ZP,
                                g = void 0 === p;
                            return (
                                m?.toggleOperationPaused(S.BX.Full, !1),
                                t.withoutReUpload && e.uploadId
                                    ? Promise.resolve(n({ id: d, uploadProgress: 1, uploading: !1 }))
                                    : (t.preUpload || (m?.reportOperationStart(S.BX.UploadSubmitUntilSruFinish), m?.reportUploadSubmit(), f && g && a?.abort(), e.uploading && h && h.amendUpload({ pauseBeforeFinalize: !1, trimRanges: ce(e) })),
                                      e.uploadPromise
                                          ? e.uploadPromise.then((t) => ({ ...t, mediaMetadata: e.mediaMetadata }))
                                          : h
                                            ? (function (e) {
                                                  const { featureSwitches: t, gifAsStaticImage: i, mediaItem: r, updateMediaItem: o, uploadMediaItem: s, uploadOptions: a, userClaims: n } = e,
                                                      { abortController: l, externalMediaDetails: d, id: u, reporter: c, uploader: p } = r,
                                                      m = new Promise((e, m) => {
                                                          const h = (t) => {
                                                                  c?.setMetadata({ mediaId: t }), c?.reportOperationComplete([S.BX.Full, S.BX.UploadSubmitUntilSruFinish], S.Uk.Success), e(o({ id: u, uploadId: t, uploadProgress: 1, uploading: !1 }));
                                                              },
                                                              f = (e, t, i) => {
                                                                  c?.setMetadata({ mediaId: i }), "uploading" === t ? (o({ id: u, uploadProgress: F.OA("uploading", e) }), 100 === e && c?.reportOperationComplete(S.BX.SruUpload, S.Uk.Success)) : "processing" === t && o({ id: u, uploadProgress: F.OA("processing", e) });
                                                              },
                                                              g = () => {
                                                                  c?.toggleOperationPaused(S.BX.Full, !0);
                                                              },
                                                              b = (t) => {
                                                                  const { code: a, detail_message: n, maxSizeBytes: d, mediaId: h, message: f, name: g } = t;
                                                                  if (r.mediaFile?.isGif && !i && a === w.Tz.INVALID_MEDIA_CODE) p?.amendUpload({ pauseBeforeFinalize: !1 }), o({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !1, uploadPromise: void 0 }), s(r, !0).then(e).catch(m);
                                                                  else {
                                                                      l?.abort(), o({ id: u, uploadProgress: 0, uploading: !1, uploadFailed: !0, uploadError: { code: a, message: f, detail_message: n, maxSizeBytes: d }, uploadPromise: void 0 });
                                                                      const e = new z(f ? `${f}` : `Media upload failed [Error code: ${a}]${h ? ` ${h}` : ""}`, { code: a, type: Z, isGif: !!r.externalMediaDetails || (r.mediaFile && r.mediaFile.isGif), isImage: r.mediaFile && r.mediaFile.isImage, isVideo: r.mediaFile && r.mediaFile instanceof v.ZP && r.mediaFile.isVideo }),
                                                                          t = a === _.d.CANCELED ? S.Uk.Cancel : S.Uk.Failure;
                                                                      c?.setMetadata({ reason: { name: g, message: f, code: a } }), c?.reportOperationComplete([S.BX.Full, S.BX.SruUpload, S.BX.UploadSubmitUntilSruFinish], t), m(e);
                                                                  }
                                                              };
                                                          if (d && r.uploader) r.uploader?.uploadExternalMedia(d.sourceUrl, d.mediaType, d.mediaCategory, { success: h, progress: f, error: b, mediaItem: r });
                                                          else if (r.uploader) {
                                                              const { extraInitParams: e = "", preUpload: o = !1 } = a,
                                                                  { enable_1080p_variant: s, mediaFile: l, mediaFileHash: d } = r,
                                                                  u = t.isTrue("media_async_upload_longer_video_resolution_selector"),
                                                                  p = l && l.size > 1e8 && t.isTrue("rweb_media_multi_requests_enabled"),
                                                                  m = he(r, i, { featureSwitches: t, userClaims: n }),
                                                                  _ = m ? `&media_category=${m}` : "";
                                                              c?.reportOperationStart(S.BX.SruUpload), r.uploader?.upload({ success: h, progress: f, pause: g, error: b, extraInitParams: e + _, extraFinalizeParams: d ? `&original_md5=${d}` : void 0, trimRanges: ce(r), pauseBeforeFinalize: o, withMultiRequests: p, withMultiRequestsDefaultPoolSize: t.getNumberValue("rweb_media_multi_requests_default_pool_size", l && l.size > 2e9 ? 4 : 1), enable_1080p_variant: !u || s, mediaItem: r });
                                                          }
                                                      });
                                                  return o({ id: u, uploading: !0, uploadFailed: !1, uploadProgress: 0, uploadPromise: m }), m;
                                              })({ mediaItem: e, updateMediaItem: n, uploadMediaItem: l, gifAsStaticImage: i, uploadOptions: t, featureSwitches: o, userClaims: s })
                                            : Promise.reject(new Error("Media has no uploader. Did you forget to call resizeMedia?")))
                            );
                        }
                        const d = a.map((e) => l(e));
                        return Promise.all(d).catch((e) => {
                            throw (e.type || (e.type = Z), e);
                        });
                    },
                me = (e, t) => {
                    const i = pe(e, { ...t, preUpload: !0 });
                    return (...e) =>
                        i(...e).catch((e) => {
                            if (e.code !== _.d.CANCELED) throw e;
                        });
                };
            function _e(e, t, i, r) {
                const o = e === w.vC.Tweet || e === w.vC.TwitterArticle,
                    s = e === w.vC.TwitterArticle;
                if (t.isSubtitles) return w.xz.Subtitles;
                if (t.isGif && !i) return o ? w.xz.TweetGif : w.xz.DMGif;
                if (t.isAmplify) return w.xz.AmplifyVideo;
                if (t.isVideo) {
                    const e = t.duration || 0,
                        { featureSwitches: i, userClaims: a } = r,
                        n = (0, w.SB)({ featureSwitches: i, userClaims: a }),
                        l = i.getNumberValue("media_async_upload_amplify_duration_threshold", w.y$.Duration[n]);
                    return "number" == typeof n && 1 === n && e > l ? w.xz.AmplifyVideo : s ? w.xz.TweetVideo : o ? w.xz.AmplifyVideo : w.xz.DMVideo;
                }
                return o ? w.xz.TweetImage : w.xz.DMImage;
            }
            function he(e, t, i) {
                const { location: r, mediaFile: o } = e;
                if (!r || !o) return null;
                switch (r) {
                    case w.vC.Tweet:
                    case w.vC.Dm:
                    case w.vC.TwitterArticle:
                        return _e(r, o, t, i);
                    case w.vC.CommunityBanner:
                        return w.xz.CommunityBanner;
                    case w.vC.ListBanner:
                        return w.xz.ListBanner;
                    case w.vC.ProfileBanner:
                        return w.xz.ProfileBanner;
                    default:
                        return null;
                }
            }
            const fe = (e, t, i, r, o, s) => {
                o?.reportOperationStart(S.BX.Hash, !0),
                    o?.setMetadata({ hashState: S.Xj.InProgress }),
                    (0, p.Q)(r, s)
                        .then((r) => {
                            const [s] = V(t(), i);
                            if (!s) {
                                throw new z("Media item was removed", { code: p.S.HASHING_ABORTED, type: Z, isGif: !1, isImage: !0, isVideo: !1 });
                            }
                            e(ie({ id: i, mediaFileHash: r, abortController: void 0 }));
                            const { uploadPromise: a, uploader: n, uploading: l } = s;
                            a && l && n && n.amendUpload({ extraFinalizeParams: r ? `&original_md5=${r}` : void 0 }), o?.setMetadata({ hashState: S.Xj.Complete }), o?.reportOperationComplete(S.BX.Hash, S.Uk.Success);
                        })
                        .catch((r) => {
                            const [s] = V(t(), i);
                            s && e(ie({ id: i, mediaFileHash: null, abortController: void 0 })), r.code === p.S.HASHING_ABORTED ? (o?.setMetadata({ hashState: S.Xj.Canceled }), o?.reportOperationComplete(S.BX.Hash, S.Uk.Cancel)) : (o?.setMetadata({ hashState: S.Xj.Failure }), o?.reportOperationComplete(S.BX.Hash, S.Uk.Failure));
                        });
            };
            T.Z.register({
                [M]: function (e = N, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case G:
                            return t.payload ? e.concat(t.payload) : e;
                        case q: {
                            const i = t.payload;
                            return i && i.length ? e.filter((e) => -1 === i.indexOf(e.id)) : e;
                        }
                        case ee: {
                            const i = t.payload;
                            return i
                                ? e.map((e) => {
                                      if (e.id === i.id) {
                                          const t = e.needsProcessing || (i.hasOwnProperty("cropData") && !(0, m.Z)(i.cropData, e.cropData));
                                          return { ...e, needsProcessing: t, uploader: t ? void 0 : e.uploader, ...i };
                                      }
                                      return e;
                                  })
                                : e;
                        }
                        default:
                            return e;
                    }
                },
            });
        },
        466380: (e, t, i) => {
            i.d(t, { Z: () => p });
            var r = i(807469),
                o = i(502909),
                s = i(600823);
            const a = (0, o.ZP)({ namespace: "topics" }),
                n = (0, o.tb)(a, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(r.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return c.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (i, r) => (i(a.updateOne(e, { following: t })), Promise.resolve()),
                },
                d = (e, t, i) => {
                    const { entityId: r } = t.meta,
                        o = e.entities[r];
                    return o ? ((e, t, i, r) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [i.id]: { ...i, ...r() } } } : e))(e, t, o, i) : e;
                },
                u = { follow: (0, o.Tx)(a, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).follow, reducer: (e, t) => d(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, o.Tx)(a, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).unfollow, reducer: (e, t) => d(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, o.Tx)(a, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).notInterested, reducer: (e, t) => d(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, o.Tx)(a, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(r.ZP).undoNotInterested, reducer: (e, t) => d(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                c = { ...a, ...n, ...l, ...u, customActionTypes: (0, o.X7)(u) },
                p = s.Z.register(c);
        },
        653798: (e, t, i) => {
            i.d(t, { S: () => o });
            var r = i(326439);
            i(585488);
            const o = r.Z;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-9f4db315.b1a012da.js.map
