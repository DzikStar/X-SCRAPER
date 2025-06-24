"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-539b1066"],
    {
        787379: (e, t, r) => {
            r.d(t, { _: () => o });
            var n = r(729002),
                s = (r(585488), r(990242)),
                i = r.n(s);
            const o = (e) => {
                const t = i()(n.Z, e);
                return t ? { description: t?.description ? { urls: t.description.urls ? t.description.urls.map((e) => ({ display_url: e.display_url || "", expanded_url: e.expanded_url || "", indices: e.indices ? e.indices.slice() : [], url: e.url || "" })) : [] } : {} } : {};
            };
        },
        932782: (e, t, r) => {
            r.d(t, { Z: () => wn });
            var n = r(202784),
                s = r(325686),
                i = r(392237),
                o = r(443781),
                l = r(170371),
                a = r(703738),
                c = r(88660),
                u = r(507986),
                d = r(293115),
                m = r(621389),
                f = r(35468),
                p = r(975950),
                _ = r(807896),
                h = r(857196),
                g = (r(585488), r(277660)),
                b = r.n(g),
                E = r(530525),
                y = r(708852),
                w = r(433460),
                Z = r(823161),
                v = r(111677),
                P = r.n(v),
                C = r(71620),
                I = r(690282),
                S = r(725516),
                B = r(125363),
                k = r(624479),
                O = r(412876),
                N = r(201123),
                R = r(668214);
            const x = (e, t) => (0, k.cY)(e, t.userId),
                U = (e, t) => {
                    const r = k.ZP.select(e, t.userId);
                    return r?.refresh_delay_secs ? 1e3 * r.refresh_delay_secs : 1e3 * k.vj;
                },
                T = (0, R.Z)().propsFromState(() => ({ userPresencePollingIntervalMs: U, userSpace: x })),
                D = E.Z.createLayoutCache(),
                F = { opensProfilePhoto: P().f30795d0 },
                W = n.memo((e) => {
                    const { isOwnProfile: t, isWithheld: r, profileImageUrlHttps: s, screenName: i, user: l, userId: a, userPresencePollingIntervalMs: c, userSpace: u } = e,
                        d = (0, y.tj)(),
                        f = (0, S.z)(),
                        { featureSwitches: p, viewerUserId: h } = (0, o.QZ)(),
                        g = (0, B.I0)(),
                        b = (0, C.n7)("SELECT_SPACE"),
                        E = Boolean(h && (p.isTrue("voice_rooms_recent_search_audiospace_ring_enabled") || p.isTrue("voice_rooms_typeahead_audiospace_ring_enabled"))),
                        v = n.useCallback(() => {
                            if (E) return g(k.ZP.fetchManyIfNeeded([a])).catch(b({}));
                        }, [b, g, E, a]);
                    n.useEffect(() => {
                        v();
                    }, [v]),
                        (0, I.Z)(() => v(), E ? c : void 0);
                    const P = !t && r,
                        R = P || !s ? void 0 : s,
                        x = n.useMemo(() => {
                            const e = {
                                imageLayoutCache: D,
                                onClick: (e) => {
                                    f.scribe({ element: "avatar", action: "click" });
                                },
                                size: "custom",
                                style: m.Z.avatar,
                            };
                            return u && E ? { ...e, "aria-label": u["aria-label"], link: u.link } : P ? e : { ...e, "aria-label": F.opensProfilePhoto, link: { pathname: `/${i}/photo` } };
                        }, [P, E, i, u, f]);
                    return u && E ? (l ? n.createElement(N.o, (0, _.Z)({ presenceRingType: u.presenceRingType, user: l }, x)) : n.createElement(w.Z, (0, _.Z)({ presenceRingType: u.presenceRingType, screenName: i, uri: R }, x))) : l ? n.createElement(O.Y, (0, _.Z)({ borderColor: "cellBackground", borderWidth: d ? "large" : "medium", user: l }, x)) : n.createElement(Z.default, (0, _.Z)({ borderColor: "cellBackground", borderWidth: d ? "large" : "medium", screenName: i, uri: R }, x));
                }),
                L = n.memo((e) => {
                    const { user: t, ...r } = e,
                        s = b()(h.Z, t);
                    return n.createElement(W, (0, _.Z)({ profileImageUrlHttps: s.avatar?.image_url ?? "", screenName: s.core?.screen_name ?? "", user: s, userId: s.rest_id }, r));
                });
            const M = n.memo(
                T(function (e) {
                    if (e.user) {
                        const { user: t, userRef: r, ...s } = e;
                        return n.createElement(W, (0, _.Z)({ profileImageUrlHttps: e.user.profile_image_url_https, screenName: e.user.screen_name, userId: e.user.id_str }, s));
                    }
                    if (e.userRef) {
                        const { user: t, userId: r, userRef: s, ...i } = e;
                        return n.createElement(L, (0, _.Z)({ user: e.userRef }, i));
                    }
                    return null;
                }),
            );
            var A = r(537500),
                V = r(682474),
                z = r(530732),
                H = r(439592),
                j = r(483677),
                $ = r(965728);
            const q = E.Z.createLayoutCache(),
                Q = n.memo(({ dominantColor: e, isOwnProfile: t, isWithheld: r, profileBannerUrl: o, screenName: l }) => {
                    const a = !t && r,
                        c = e ? (0, $.xr)(e) : i.default.theme.colors.gray200;
                    return a || !o ? n.createElement(s.Z, { "data-testid": "hiddenBanner", style: m.Z.banner }, n.createElement(V.Z, { ratio: i.default.theme.aspectRatios.profileBanner, style: { backgroundColor: c } })) : n.createElement(z.Z, { "aria-hidden": !0, link: `/${l}/header_photo` }, n.createElement(E.Z, { "aria-label": "", aspectMode: H.Z.exact(i.default.theme.aspectRatios.profileBanner), backgroundColor: c, image: o, layoutCache: q }));
                }),
                X = n.memo((e) => {
                    const t = b()(A.Z, e.user),
                        r = n.useMemo(() => {
                            const e = t.legacy?.profile_banner_extensions?.mediaColor?.r?.ok?.palette;
                            if (!e) return null;
                            const r = e.map(({ percentage: e, rgb: { blue: t, green: r, red: n } }) => ({ rgb: { red: n, green: r, blue: t }, percentage: e }));
                            return j.Z.get(r);
                        }, [t.legacy?.profile_banner_extensions]);
                    return n.createElement(Q, { dominantColor: r, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, profileBannerUrl: t.legacy?.profile_banner_url, screenName: t.core?.screen_name ?? "" });
                });
            function K(e) {
                const t = n.useMemo(() => {
                    const t = e?.user?.profile_banner_extensions_media_color?.palette;
                    return t ? j.Z.get(t) : null;
                }, [e.user]);
                return e.user ? n.createElement(Q, { dominantColor: t, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, profileBannerUrl: e.user.profile_banner_url, screenName: e.user.screen_name }) : e.userRef ? n.createElement(X, { isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, user: e.userRef }) : null;
            }
            const Y = n.memo(K);
            r(136728);
            var G = r(144956),
                J = r(107267),
                ee = r(154003),
                te = r(717160),
                re = r(35785),
                ne = r(321835),
                se = r(293988),
                ie = r(23134),
                oe = r(258199),
                le = r(26088),
                ae = r(241304),
                ce = r(952793),
                ue = r(103335),
                de = r(390387),
                me = r(340130),
                fe = r(935496);
            const pe = "sendDMFromProfile",
                _e = "editProfileButton",
                he = P().g7088266,
                ge = P().gd7acb84,
                be = P().b7636014,
                Ee = n.createElement(te.default, null),
                ye = n.createElement(re.default, null),
                we = P().haad225c,
                Ze = n.memo(({ blockedBy: e, blocking: t, canDm: r, defaultProfileImage: i, description: l, following: a, isWithheld: c, notifications: u, onFollowButtonOffscreen: d, profileBannerUrl: m, promotedContent: f, superFollowEligible: p, superFollowing: _, user: h, userId: g, userRef: b, viewerUserId: E }) => {
                    const y = (0, S.z)(),
                        w = (0, J.useHistory)(),
                        { userClaims: Z } = n.useContext(o.rC),
                        v = (0, ce.hC)("super_follow_android_web_subscription_enabled"),
                        P = (0, B.v9)(de.Lz),
                        C = g === E,
                        I = c && !C,
                        k = r && E && !t && !e && !I,
                        O = E && !t && !e && !I && !P,
                        N = null == h?.can_pay || h?.can_pay,
                        R = E && !C && !I,
                        x = (0, ce.hC)("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") && u && !a,
                        U = ((0, ce.hC)("responsive_web_device_follow_without_user_follow_enabled") || x) && !h?.protected,
                        T = (0, ce.hC)("rweb_tipjar_consumption_enabled"),
                        D = (a || U) && E && !t && !e && !c,
                        F = (0, ce.hC)("subscriptions_sign_up_enabled") && Z.isTrueAndEnabled("subscriptions_feature_can_gift_premium") && h?.premium_gifting_eligible,
                        W = i && !l && !m,
                        L = P;
                    return c
                        ? null
                        : n.createElement(
                              s.Z,
                              { style: Ce.buttons },
                              R && n.createElement(fe.Z, { buttonStyle: Ce.button, promotedContent: f, user: h, userRef: b }),
                              T ? n.createElement(ae.Z, { style: Ce.button, userId: g }) : null,
                              E && C && !L ? n.createElement(ee.ZP, { link: W ? "/i/flow/setup_profile" : "/settings/profile", style: Ce.lastButton, testID: _e, type: "primaryOutlined" }, W ? ge : he) : null,
                              !C &&
                                  k &&
                                  n.createElement(ee.ZP, {
                                      "aria-label": be,
                                      hoverLabel: { label: be },
                                      icon: Ee,
                                      onPress: () => {
                                          if (E) {
                                              const e = (0, ue.Z)(g, E);
                                              y.scribe({ element: "message", action: "click", data: { conversation_id: e, conversation_participant_count: 2, conversation_type: me.NK.ONE_TO_ONE, inbox_type: me.H6.NOT_AVAILABLE } }), w.push(`/messages/${e}`);
                                          }
                                      },
                                      style: Ce.button,
                                      testID: pe,
                                      type: "primaryOutlined",
                                  }),
                              !C && O && n.createElement(oe.Z, { buttonStyle: Ce.button, disabled: !N, userId: g }),
                              !C && D && n.createElement(se.Z, { allowPromptForPush: !0, isDeviceFollowWithoutUserFollow: U && !a, isFollowing: u, style: Ce.button, userId: g }),
                              !C && h?.screen_name && F && n.createElement(ee.ZP, { "aria-label": we, hoverLabel: { label: we }, icon: ye, link: `/${h?.screen_name}/gift-premium`, style: Ce.button }),
                              !C && v && p && !_ ? n.createElement(le.Z, { isFollowing: a, isSuperFollowing: _, style: Ce.button, userId: g }) : null,
                              !C && !e && !I && n.createElement(ne.Z, { onOffscreenChange: d }, n.createElement(ie.C, { isSuperFollowSubscriptionEnabled: v, promotedContent: f, style: Ce.lastButton, userId: g })),
                          );
                }),
                ve = (e) => {
                    const { user: t, ...r } = e,
                        s = b()(G.Z, e.user);
                    return n.createElement(Ze, (0, _.Z)({}, r, { blockedBy: s.relationship_perspectives?.blocked_by ?? !1, blocking: s.relationship_perspectives?.blocking ?? !1, canDm: Boolean(s.dm_permissions?.can_dm), defaultProfileImage: Boolean(s.legacy?.default_profile_image), description: s.legacy?.description || "", following: s.relationship_perspectives?.following ?? !1, notifications: Boolean(s.legacy?.notifications), profileBannerUrl: s.legacy?.profile_banner_url || "", superFollowEligible: Boolean(s.super_follow_eligible), superFollowing: Boolean(s.super_following), userId: s.rest_id, userRef: s }));
                };
            function Pe(e) {
                if (e.user) {
                    const { user: t } = e;
                    return n.createElement(Ze, { blockedBy: t.blocked_by, blocking: t.blocking, canDm: t.can_dm, defaultProfileImage: t.default_profile_image, description: t.description, following: t.following, isWithheld: e.isWithheld, notifications: t.notifications, onFollowButtonOffscreen: e.onFollowButtonOffscreen, profileBannerUrl: t.profile_banner_url, promotedContent: e.promotedContent, superFollowEligible: t.super_follow_eligible, superFollowing: t.super_following, user: t, userId: t.id_str, viewerUserId: e.viewerUserId });
                }
                return e.userRef ? n.createElement(ve, { isWithheld: e.isWithheld, onFollowButtonOffscreen: e.onFollowButtonOffscreen, promotedContent: e.promotedContent, user: e.userRef, viewerUserId: e.viewerUserId }) : null;
            }
            const Ce = i.default.create((e) => ({ buttons: { maxWidth: "100%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-end", flexWrap: "wrap" }, button: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 }, lastButton: { marginBottom: e.spaces.space12 } })),
                Ie = n.memo(Pe);
            var Se = r(332613),
                Be = r(14544),
                ke = r(290213),
                Oe = r(12333),
                Ne = r(731708),
                Re = r(688715),
                xe = r(529356);
            const Ue = P().df7cb6d4,
                Te = P().j24c37b2,
                De = { link: n.createElement(Ne.ZP, { link: (0, Re.ju)("https://help.x.com/rules-and-policies/profile-labels"), withInteractiveStyling: !0 }) },
                Fe = (e) => {
                    const { onAction: t } = e;
                    return n.createElement(xe.Z, { actionLabel: Te, actionType: "primaryFilled", backButtonType: "close", graphicDisplayMode: "none", headline: Ue, isFullHeightOnMobile: !1, onAction: t, subtext: n.createElement(Ne.ZP, null, n.createElement(P().I18NFormatMessage, { $i18n: "f575f533" }, n.cloneElement(De.link, null, P().ec429e79))), withCloseButton: !1 });
                },
                We = n.memo(Fe);
            var Le = r(520385),
                Me = r(462166),
                Ae = r(873302),
                Ve = r(535338);
            const ze = P().j04c717a,
                He = ({ sectionId: e }) => n.createElement(s.Z, { style: je.button }, n.createElement(ee.ZP, { link: { pathname: "/settings/bio", state: { addWorkExperience: !0, sectionId: e } } }, ze)),
                je = i.default.create((e) => ({ button: { marginBottom: e.spaces.space12, alignItems: "flex-start" } })),
                $e = () => {
                    const e = (0, Ve.p)(Me.Bq, {}),
                        t = e.viewer.user_results.result.expanded_profile_results?.result?.profile_sections?.items_results;
                    if (!e) return null;
                    const r = (0, Ae.uR)(t, Le.NB.WORK_EXPERIENCE);
                    return (0, Ae.hW)(r) ? null : n.createElement(He, { sectionId: r?.rest_id?.section_id });
                },
                qe = "UserProfileHeader_Items",
                Qe = "UserBirthdate",
                Xe = "UserDescription",
                Ke = "UserJoinDate",
                Ye = "UserLocation",
                Ge = "UserProfessionalCategory",
                Je = "UserUrl",
                et = "UserVerifiedPhone";
            var tt = r(798990),
                rt = r(836842),
                nt = r(70882),
                st = r(401388),
                it = r(614185),
                ot = r(160664),
                lt = r(252233);
            const at = P().a1ea2f12,
                ct = P().g8191e78,
                ut = ({ birthdate: e, isOwnProfile: t }) => {
                    const r = n.useRef(),
                        s = n.useCallback(() => {
                            r.current && r.current.launch();
                        }, []);
                    return !e || (0, st.Z)(e) || ("self" === e?.visibility?.toLowerCase() && "self" === e?.year_visibility?.toLowerCase())
                        ? null
                        : ((e) => {
                                const { day: t, month: r } = e;
                                if (!t || !r) return;
                                const n = new Date();
                                return r === n.getMonth() + 1 && t === n.getDate();
                            })(e)
                          ? n.createElement(
                                n.Fragment,
                                null,
                                n.createElement(lt.Z, { Icon: rt.default, onPress: s }, t ? at : ct),
                                n.createElement(it.Z, {
                                    setRef: (e) => {
                                        r.current = e;
                                    },
                                }),
                            )
                          : n.createElement(lt.Z, { Icon: nt.default, key: Qe, testID: Qe }, n.createElement(ot.Z, { birthdate: e, withBornPrefixText: !0 }));
                },
                dt = n.memo((e) => {
                    const t = b()(tt.Z, e.user),
                        r = t.legacy_extended_profile?.birthdate;
                    return n.createElement(ut, { birthdate: r, isOwnProfile: e.isOwnProfile });
                });
            function mt(e) {
                return e.user ? n.createElement(ut, { birthdate: e.user?.birthdate, isOwnProfile: e.isOwnProfile }) : e.userRef ? n.createElement(dt, { isOwnProfile: e.isOwnProfile, user: e.userRef }) : null;
            }
            const ft = n.memo(mt),
                pt = n.memo(({ children: e }) => n.createElement(s.Z, { style: _t.details }, n.createElement(Ne.ZP, { style: _t.detailsText, testID: qe }, e))),
                _t = i.default.create((e) => ({ details: { display: "block", marginBottom: e.spaces.space12 }, detailsText: { lineHeight: e.spaces.space12 } }));
            var ht = r(231684),
                gt = r(733357),
                bt = r(665468);
            const Et = n.memo(({ location: e }) => (!e || (0, gt.Z)(e) ? null : n.createElement(lt.Z, { Icon: bt.default, testID: Ye }, n.createElement(Ne.ZP, null, e)))),
                yt = n.memo((e) => {
                    const t = b()(ht.Z, e.user);
                    return n.createElement(Et, { location: t.location?.location });
                });
            function wt(e) {
                return e.location ? n.createElement(Et, { location: e.location }) : e.user ? n.createElement(yt, { user: e.user }) : null;
            }
            const Zt = n.memo(wt);
            var vt = r(720930),
                Pt = r(912021),
                Ct = r(656520);
            const It = (0, Pt.Z)((e) => (e ? r.c[r(626057).resolve(`./${e}.js`)]?.exports.default || St(e) : vt.default)),
                St = (e) => {
                    const t = n.lazy(() => r(537212)(`./${e}.js`).catch(() => ({ default: vt.default })));
                    return (e) => n.createElement(n.Suspense, { fallback: null }, n.createElement(t, e));
                },
                Bt = (e) => {
                    const { categoryIcon: t, categoryName: r, isOwnProfile: s, onPress: i } = e,
                        o = (0, S.z)(),
                        l = n.useCallback(() => {
                            o.scribe({ page: s ? "me" : "profile", ...Ct.yL() }), i();
                        }, [o, s, i]);
                    return n.createElement(lt.Z, { Icon: It(t), style: Ot.root, testID: Ge, withInteractiveStyling: !1 }, n.createElement(Ne.ZP, { onPress: l }, r));
                },
                kt = n.memo(Bt),
                Ot = i.default.create((e) => ({ root: { cursor: "pointer" } }));
            var Nt = r(268723),
                Rt = r(179562),
                xt = r(787379);
            const Ut = n.memo(({ description: e, entities: t, grokTranslatedBio: r, isProfileTranslatable: i, userId: o, withheldDescription: l, withheldEntities: a }) => (e ? n.createElement(s.Z, { style: Dt.description }, n.createElement(Rt.Z, { description: e, disableTranslation: !i, entities: t, grokTranslatedBio: r, testID: Xe, userId: o, withheldDescription: l || void 0, withheldEntities: a })) : null)),
                Tt = n.memo((e) => {
                    const { is_profile_translatable: t, legacy: r, rest_id: s } = b()(Nt.Z, e.user),
                        i = n.useMemo(() => (0, xt._)(r?.entities), [r?.entities]),
                        o = n.useMemo(() => (0, xt._)(r?.withheld_entities), [r?.withheld_entities]);
                    return n.createElement(Ut, { description: r?.description || "", entities: i, isProfileTranslatable: Boolean(t), userId: s, withheldDescription: r?.withheld_description, withheldEntities: o });
                });
            const Dt = i.default.create((e) => ({ description: { display: "block", marginBottom: e.spaces.space12 } })),
                Ft = function (e) {
                    if (e.user) {
                        const { user: t } = e;
                        return n.createElement(Ut, { description: t?.description || "", entities: t.entities, grokTranslatedBio: t.grok_translated_bio, isProfileTranslatable: Boolean(t.is_profile_translatable), userId: t.id_str, withheldDescription: t.withheld_description, withheldEntities: t.withheld_entities });
                    }
                    return e.userRef ? n.createElement(Tt, { user: e.userRef }) : null;
                };
            var Wt = r(973581),
                Lt = r(630715);
            const Mt = n.memo(({ display_url: e, url: t }) => (t ? n.createElement(lt.Z, { Icon: Lt.default, key: Je, link: { pathname: t, external: !0 }, testID: Je }, e || t) : null)),
                At = n.memo((e) => {
                    const { display_url: t, url: r } = b()(Wt.Z, e.urlsEntitity);
                    return n.createElement(Mt, { display_url: t, url: r });
                });
            function Vt(e) {
                return e.urlsEntity ? n.createElement(Mt, { display_url: e.urlsEntity.display_url, url: e.urlsEntity.url }) : e.urlsEntityRef ? n.createElement(At, { urlsEntitity: e.urlsEntityRef }) : null;
            }
            const zt = n.memo(Vt);
            var Ht = r(586672),
                jt = r(406727),
                $t = r(187669),
                qt = r(725405);
            const Qt = P().f543dbf6,
                Xt = n.memo(({ verified_phone_status: e }) => {
                    const t = (0, qt.Z)();
                    return (
                        (0, $t.q)(() => {
                            t.scribe({ element: "verified_phone_label", action: "impression" });
                        }),
                        e ? n.createElement(lt.Z, { Icon: jt.default, testID: et }, n.createElement(Ne.ZP, null, Qt)) : null
                    );
                }),
                Kt = n.memo((e) => {
                    const t = b()(Ht.Z, e.user);
                    return n.createElement(Xt, { verified_phone_status: t?.verified_phone_status || !1 });
                });
            const Yt = function (e) {
                    return (0, ce.hC)("verified_phone_label_enabled") ? (e.user ? n.createElement(Xt, { verified_phone_status: e.user?.verified_phone_status || !1 }) : e.userRef ? n.createElement(Kt, { user: e.userRef }) : null) : null;
                },
                Gt = n.memo(({ createdAt: e, isOwnProfile: t, professionalCategoryIcon: r, professionalCategoryName: s, urlEntity: i, urlEntityRef: o, user: l, userRef: a }) => {
                    const [c, u] = n.useState(!1),
                        d = n.useCallback(() => {
                            u((e) => !e);
                        }, []),
                        m = (0, ce.hC)("xprofile_profile_button_enabled");
                    return n.createElement(n.Fragment, null, n.createElement(Be.Z, null, n.createElement(Ft, { user: l, userRef: a })), n.createElement(Oe.Z, { screenName: l?.screen_name }), t && m && n.createElement($e, null), n.createElement(pt, null, s ? n.createElement(kt, { categoryIcon: r, categoryName: s, isOwnProfile: t, onPress: d }) : null, n.createElement(Zt, { location: l?.location, user: a }), n.createElement(zt, { urlsEntity: i, urlsEntityRef: o }), n.createElement(ft, { isOwnProfile: t, user: l, userRef: a }), e ? n.createElement(ke.Z, { joinDate: e, key: Ke, testID: Ke }) : null, n.createElement(Yt, { user: l, userRef: a })), c ? n.createElement(We, { onAction: d }) : null);
                }),
                Jt = n.memo((e) => {
                    const t = b()(Se.Z, e.user),
                        r = t.legacy?.entities?.url?.urls?.[0];
                    return n.createElement(Gt, { createdAt: t.core?.created_at, isOwnProfile: e.isOwnProfile, professionalCategoryIcon: e.professionalCategoryIcon, professionalCategoryName: e.professionalCategoryName, urlEntityRef: r, userRef: t });
                });
            function er(e) {
                if (e.user) {
                    const { user: t } = e,
                        r = t.entities?.url?.urls?.[0];
                    return n.createElement(Gt, { createdAt: t.created_at, isOwnProfile: e.isOwnProfile, professionalCategoryIcon: e.professionalCategoryIcon, professionalCategoryName: e.professionalCategoryName, urlEntity: r, user: t });
                }
                return e.userRef ? n.createElement(Jt, { isOwnProfile: e.isOwnProfile, professionalCategoryIcon: e.professionalCategoryIcon, professionalCategoryName: e.professionalCategoryName, user: e.userRef }) : null;
            }
            const tr = n.memo(er);
            var rr = r(564556),
                nr = r(190286),
                sr = r(847607);
            const ir = "unmuteLink";
            var or = r(601576),
                lr = r(919022);
            function ar({ screenName: e, userId: t }) {
                const r = (0, B.I0)(),
                    s = (0, C.n7)("USER_PROFILE_HEADER");
                return n.useCallback(
                    () =>
                        ((e) => r(lr.ZP.unmute(e)))(t).then(
                            () => {
                                return (t = (0, sr.X6)(e)), r(or.fz({ text: t }));
                                var t;
                            },
                            s({ showToast: !0 }),
                        ),
                    [t, s, r, e],
                );
            }
            const cr = P().cef4e8cf,
                ur = P().h03a094a,
                dr = P().a6e94418,
                mr = ({ screenName: e, userId: t }) => {
                    const [r, s] = n.useState(!1),
                        i = ar({ screenName: e, userId: t });
                    return n.createElement(
                        n.Fragment,
                        null,
                        n.createElement(
                            Ne.ZP,
                            { color: "gray700", style: _r.mute },
                            dr,
                            " ",
                            n.createElement(
                                Ne.ZP,
                                {
                                    color: "link",
                                    onPress: () => {
                                        s(!0);
                                    },
                                    role: "button",
                                    style: _r.unmuteButton,
                                    testID: ir,
                                    withInteractiveStyling: !0,
                                },
                                sr.cm,
                            ),
                        ),
                        r
                            ? n.createElement(nr.Z, {
                                  confirmButtonLabel: sr.cm,
                                  headline: cr({ screenName: e }),
                                  onCancel: () => {
                                      s(!1);
                                  },
                                  onConfirm: () => {
                                      s(!1), i();
                                  },
                                  text: ur,
                              })
                            : null,
                    );
                },
                fr = n.memo((e) => {
                    const t = b()(rr.Z, e.user);
                    return n.createElement(mr, { screenName: t.core?.screen_name || "", userId: t.rest_id });
                });
            function pr(e) {
                return e.user ? n.createElement(mr, { screenName: e.user.screen_name, userId: e.user.id_str }) : e.userRef ? n.createElement(fr, { user: e.userRef }) : null;
            }
            const _r = i.default.create((e) => ({ mute: { marginVertical: e.spaces.space12 }, unmuteButton: { cursor: "pointer" } })),
                hr = n.memo(pr);
            var gr = r(696657),
                br = r(360917),
                Er = r.n(br),
                yr = r(59871),
                wr = r(366635),
                Zr = r(392049),
                vr = r(797448),
                Pr = r(799432),
                Cr = r(998118),
                Ir = r(480056),
                Sr = r(728220),
                Br = r(32256);
            const kr = "UserName";
            var Or = r(622078),
                Nr = r(649846),
                Rr = r(686689),
                xr = r(673096),
                Ur = r(273490),
                Tr = r(479506);
            function Dr(e, t, r) {
                const s = (0, S.z)();
                return n.useCallback(() => {
                    s.scribe({ ...e, element: "automated_label", action: "click", data: { items: [{ id: t, name: r, item_type: Tr.Z.ItemType.USER }] } });
                }, [s, e, t, r]);
            }
            const Fr = n.memo(({ namespace: e, user: t }) => {
                    const r = Dr(e, t.id_str, t.screen_name),
                        s = n.useMemo(() => (t.highlightedLabel?.longDescription?.entities ? n.createElement(Rr.Z, { entities: t.highlightedLabel.longDescription.entities, forceAutoTextDirection: !0, onEntityClick: r, text: t.highlightedLabel.longDescription.text }) : t.highlightedLabel?.description || null), [r, t.highlightedLabel]);
                    return null == t.highlightedLabel && null == s ? null : n.createElement(Nr.Z, { isIconLarge: !0, label: { ...t.highlightedLabel, description: s } });
                }),
                Wr = n.memo((e) => {
                    const t = b()(Or.Z, e.user),
                        r = (function (e, t) {
                            const r = b()(Ur.Z, e);
                            return Dr(t, r.rest_id, r.core.screen_name);
                        })(t, e.namespace),
                        s = t.affiliates_highlighted_label?.label;
                    return s ? n.createElement(xr.Z, { highlightedUserLabel: s, isIconLarge: !0, onRichTextEntityClick: r }) : null;
                });
            function Lr(e) {
                return e.user ? n.createElement(Fr, { namespace: e.namespace, user: e.user }) : e.userRef ? n.createElement(Wr, { namespace: e.namespace, user: e.userRef }) : null;
            }
            const Mr = n.memo(Lr);
            var Ar = r(465067);
            const Vr = n.memo(({ getVerifiedCardShouldShow: e, isBlueVerified: t, isFollowedBy: r, isOwnProfile: i, isProtected: l, isVerified: a, isWithheld: c, name: u, namespace: d, screenName: f, translatorType: p, user: h, userId: g, userRef: b }) => {
                    const E = h?.verified_type,
                        y = h?.auxiliaryUserLabels,
                        w = h?.highlightedLabel,
                        Z = Boolean(u && f && !(c && !i)),
                        v = Z ? u : `@${f}`,
                        { featureSwitches: P, userClaims: C } = (0, o.QZ)(),
                        I = (0, ce.hC)("blue_business_multi_affiliates_ui_enabled"),
                        S = (0, Sr.Z)(),
                        B = (0, Cr.Z)({ isOwnProfile: i, userClaims: C, user: h, verifiedType: h?.verified_type, featureSwitch: "subscriptions_upsells_get_verified_profile", featureSwitches: P }),
                        k = (0, Ir.Z)(i, h?.screen_name, "x_vo_business_promotion");
                    let O = !1;
                    i && S && (O = P.isTrue("subscriptions_is_blue_verified_review_status_profile_enabled"));
                    const N = c ? Er() : { affiliateBadgeInfo: w, isBlueVerified: !!t, isProtected: !!l, isVerified: a, translatorType: p, verifiedType: E, auxiliaryUserLabels: I ? y : void 0 },
                        R = h?.verification_info,
                        x = n.useMemo(() => {
                            if (yr.Z.getVerifiedDisplayType({ isBlueVerified: t, isVerified: a, verifiedType: E }) !== yr.K.none || l) return (e, r) => n.createElement(Br.Z, { affiliateBadgeInfo: w, auxiliaryUserLabels: y, dismiss: e, isBlueVerified: t, isOwnProfile: i, isProtected: l, isVerified: a, type: r, verificationInfo: R, verifiedType: E });
                        }, [a, t, E, R, l, w, y, i]);
                    return n.createElement(s.Z, { style: m.Z.names, testID: kr }, n.createElement(s.Z, { style: m.Z.namesInner }, n.createElement(wr.Z, (0, _.Z)({}, N, { badgeContext: "account", name: v, nameSize: "headline1", renderVerifiedBadgeContext: x, screenName: f, weight: "heavy", withFollowsYou: r && !c, withNameWrap: !0, withScreenName: Z, withStackedLayout: !0 })), n.createElement(Mr, { namespace: d, user: h, userRef: b })), n.createElement(s.Z, { style: v.length > 40 ? m.Z.longNameButtons : void 0 }, k ? n.createElement(Pr.Z, null) : B && null !== e && !e ? n.createElement(vr.Z, null) : O ? n.createElement(Zr.Z, null) : null));
                }),
                zr = n.memo((e) => {
                    const t = b()(gr.Z, e.user),
                        r = (function (e) {
                            const t = b()(Ar.Z, e);
                            switch (t?.legacy?.translator_type_enum) {
                                case "None":
                                    return "none";
                                case "Badged":
                                    return "badged";
                                case "Moderator":
                                    return "moderator";
                                default:
                                    return "regular";
                            }
                        })(t);
                    return t.core ? n.createElement(Vr, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isBlueVerified: !!t.is_blue_verified, isFollowedBy: t.relationship_perspectives?.followed_by ?? !1, isOwnProfile: e.isOwnProfile, isProtected: t.privacy?.protected ?? !1, isVerified: !!t.verification?.verified, isWithheld: e.isWithheld, name: t.core.name || "", namespace: e.namespace, screenName: t.core.screen_name, translatorType: r, userId: t.rest_id, userRef: t }) : null;
                });
            function Hr(e) {
                if (e.user) {
                    const { user: t } = e;
                    return n.createElement(Vr, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isBlueVerified: t.is_blue_verified, isFollowedBy: t.followed_by, isOwnProfile: e.isOwnProfile, isProtected: t.protected, isVerified: t.verified, isWithheld: e.isWithheld, name: t.name, namespace: e.namespace, screenName: t.screen_name, translatorType: t.translator_type, user: t, userId: t.id_str });
                }
                return e.userRef ? n.createElement(zr, { getVerifiedCardShouldShow: e.getVerifiedCardShouldShow, isOwnProfile: e.isOwnProfile, isWithheld: e.isWithheld, namespace: e.namespace, user: e.userRef }) : null;
            }
            const jr = n.memo(Hr);
            var $r = r(379920),
                qr = r(312595),
                Qr = r(646797),
                Xr = r(288955),
                Kr = r(835546),
                Yr = r(893664),
                Gr = r(421813);
            const Jr = ({ isActiveCreator: e, isOwnProfile: t, user: r, viewerSubscribersCount: s }) => {
                    const { creator_subscriptions_count: i, followers_count: o, friends_count: l, has_hidden_subscriptions_on_profile: a, screen_name: c, subscribers_count: u } = r,
                        d = (0, ce.hC)("creator_subscriptions_subscriber_count_enabled"),
                        m = (0, ce.hC)("creator_subscriptions_subscription_count_enabled"),
                        f = (0, ce.D2)("creator_subscriptions_subscriber_count_min_displayed").getNumberValue(0),
                        p = e && t,
                        _ = d ? (u && (p || u >= f) ? u : void 0) : p ? s : void 0,
                        h = t || !a;
                    return n.createElement(Xr.Z, null, (e) => n.createElement(Qr.Z, { followersCount: o, friendsCount: l, onPress: e(), screenName: c, subscribersCount: _, subscriptionsCount: m ? i : void 0, withLink: (0, Kr.n5)({ isOwnProfile: t, user: r }), withSubscriptionsCount: h }));
                },
                en = (e) => {
                    const t = b()(qr.Z, e.user),
                        r = b()($r.Z, e.viewer),
                        s = (0, Yr.g)({ user: t, isOwnProfile: e.isOwnProfile }),
                        i = Boolean(r?.is_active_creator) && e.isOwnProfile;
                    return n.createElement(Xr.Z, null, (e) => n.createElement(Gr.V, { onPress: e(), user: t, viewer: r, withLink: s, withSubscribersCount: i }));
                };
            function tn(e) {
                return e.user ? n.createElement(Jr, { isActiveCreator: e.isActiveCreator || !1, isOwnProfile: e.isOwnProfile, user: e.user, viewerSubscribersCount: e.subscribersCount }) : e.userRef && e.viewer ? n.createElement(en, { isOwnProfile: e.isOwnProfile, user: e.userRef, viewer: e.viewer }) : null;
            }
            const rn = n.memo(tn);
            var nn = r(731305),
                sn = r(837020),
                on = r(144251);
            const ln = P().ea8c425f,
                an = P().b2d0c0f4,
                cn = P().f464d54d,
                un = P().g47cdc0e,
                dn = P().b68c3784,
                mn = "get_verified_profile_card_visitor",
                fn = ({ dismiss: e, profileUser: { screen_name: t }, viewerUser: { screen_name: r } }) => {
                    const l = (0, qt.Z)(),
                        { featureSwitches: a } = (0, o.QZ)(),
                        c = a.getStringValue("subscriptions_upsells_verified_profile_visitor_upsell_variant"),
                        u = n.useMemo(() => {
                            switch (c) {
                                case "variant_a":
                                default:
                                    return "variant_a";
                                case "variant_b":
                                    return "variant_b";
                                case "variant_c":
                                    return "variant_c";
                                case "variant_d":
                                    return "variant_d";
                            }
                        }, [c]),
                        d = "verified_profile_visitor_upsell";
                    (0, $t.q)(() => {
                        l.scribe({ component: d, action: "impression" });
                    });
                    const {
                        color: m,
                        description: f,
                        header: p,
                        lightColor: _,
                    } = ((e, t, r) => {
                        const n = { header: ln({ viewerScreenName: r }), description: [an, cn({ profileScreenName: t }), un] };
                        return { variant_a: { ...n, color: "blue0" }, variant_b: { ...n, color: "green50" }, variant_c: { ...n, color: "gray100", lightColor: "gray50" }, variant_d: { ...n, color: "orange0", lightColor: "orange50" } }[e];
                    })(u, t, r);
                    let h = m;
                    return (
                        "light" === i.default.theme.paletteName && _ && (h = _),
                        n.createElement(
                            s.Z,
                            { style: [gn.cardBlock, { backgroundColor: i.default.theme.colors[h] }], testID: "verified_profile_visitor_upsell" },
                            n.createElement(ee.ZP, {
                                borderColor: "transparent",
                                icon: n.createElement(sn.default, null),
                                onPress: () => {
                                    l.scribe({ component: d, action: "dismiss" }), e();
                                },
                                size: "xSmall",
                                style: gn.dismissButton,
                            }),
                            n.createElement(
                                s.Z,
                                { style: gn.inner },
                                n.createElement(Ne.ZP, { style: gn.heading, weight: "bold" }, pn(p)),
                                n.createElement(Ne.ZP, { size: "body", style: gn.subheading }, f[0], n.createElement(Ne.ZP, { weight: "bold" }, f[1]), f[2]),
                                n.createElement(
                                    ee.ZP,
                                    {
                                        link: { pathname: "/i/premium_sign_up", state: { referring_page: mn } },
                                        onPress: () => {
                                            l.scribe({ component: d, action: "click" });
                                        },
                                        style: gn.button,
                                        type: "primaryFilled",
                                    },
                                    dn,
                                ),
                            ),
                        )
                    );
                },
                pn = (e) => {
                    const t = e.lastIndexOf(" ");
                    return -1 !== t ? n.createElement(Ne.ZP, { style: gn.heading, weight: "bold" }, e.slice(0, t + 1), n.createElement(Ne.ZP, { style: gn.inlineVerified }, e.slice(t + 1), " ", n.createElement(on.default, { style: gn.verifiedIcon }))) : n.createElement(s.Z, null, e, " ", n.createElement(on.default, { style: gn.verifiedIcon }));
                },
                _n = (e) => {
                    const { dismiss: t, impress: r, shouldShow: s } = (0, c.ZP)({ showForMsec: null, reappearAfterMsec: null, dismissForMsec: c.$i, key: "verified_profile_visitor" });
                    return (
                        n.useEffect(() => {
                            r();
                        }),
                        s ? n.createElement(d.nO, { data: { referer: mn }, namespace: { component: "unified-upsell" } }, n.createElement(fn, (0, _.Z)({ dismiss: t }, e))) : null
                    );
                },
                hn = ({ userData: e }) => {
                    const { featureSwitches: t, userClaims: r } = (0, o.QZ)(),
                        s = (0, B.v9)(lr.ZP.selectViewerUser),
                        i = s?.screen_name === e?.screen_name,
                        l = e && e.is_blue_verified,
                        a = "Business" === e?.verified_type || "Government" === e?.verified_type,
                        c = "Business" === s?.verified_type || "Government" === s?.verified_type,
                        u = r.isAnyVerifiedOrgOrAffiliate(),
                        d = r.hasSubscription("premium_basic"),
                        m = r.isAnyPremiumSubscriber();
                    return !s || !e || a || c || !l || i || s?.is_blue_verified || u || (m && !d) ? null : t.isTrue("subscriptions_upsells_verified_profile_visitor_upsell_enabled") ? n.createElement(_n, { profileUser: e, viewerUser: s }) : null;
                },
                gn = i.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.large, marginHorizontal: e.spaces.space16, overflow: "hidden", flexDirection: "row", justifyContent: "flex-start" }, dismissButton: { position: "absolute", end: e.spaces.space16, top: e.spaces.space12, zIndex: 1 }, inner: { padding: e.spaces.space16, maxWidth: "100%" }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { fontSize: e.fontSizes.headline2, marginBottom: e.spaces.space8, marginEnd: e.spaces.space24 }, subheading: { marginBottom: e.spaces.space8 }, verifiedIcon: { height: 20, width: 20 }, inlineVerified: { flexDirection: "row", flexWrap: "nowrap", display: "inline-flex" } })),
                bn = { page: "profile", section: "header" },
                En = (e) => {
                    const { isActiveCreator: t, isWithheld: r, onFollowButtonOffscreen: i, professionalCategoryIcon: _, professionalCategoryName: h, promotedContent: g, showBlockedTweets: b, superFollowersCount: E, user: y, viewerUserId: w } = e,
                        { featureSwitches: Z, userClaims: v } = (0, o.QZ)(),
                        [P, C] = n.useState(!1),
                        I = n.useCallback(() => {
                            C(!1);
                        }, []),
                        [S, B] = n.useState(y.id_str),
                        [k, O] = n.useState(y.following),
                        N = { key: "verified_profile_card_upsell", showForMsec: c.IZ, reappearAfterMsec: c.IZ, dismissForMsec: null, dismissUntilNextReappear: !0 },
                        { dismiss: R, gotDismissed: x, impress: U, shouldShow: T } = (0, c.ZP)(N),
                        D = (0, a.z)();
                    n.useEffect(() => {
                        U();
                    }, [U, T, x]);
                    const F = Z.isTrue("subscriptions_upsells_get_verified_profile_rotation_enabled") && T,
                        W = Z.isTrue("subscriptions_upsells_profile_card_enabled") && !v.isAnyPremiumSubscriber();
                    S !== y.id_str && (B(y.id_str), C(!1)), !1 === k && !0 === y.following && (O(y.following), C(!0));
                    const L = (0, nn.nf)(w, y),
                        A = (0, nn.ZQ)(w, r, y),
                        V = (0, nn.jB)(w, r, y),
                        z = (0, nn.Xy)(w, r, y),
                        H = (0, nn.zi)({ isWithheld: r, showBlockedTweets: b, user: y, viewerUserId: w }),
                        [j, $] = n.useState(!1);
                    return n.createElement(d.nO, { namespace: bn }, n.createElement(s.Z, { style: D && yn.rootRedesign }, n.createElement(Y, { isOwnProfile: L, isWithheld: r, user: y }), n.createElement(s.Z, { style: [m.Z.content, yn.content, A && m.Z.withheld] }, n.createElement(s.Z, { style: m.Z.avatarAndButton }, n.createElement(M, { isOwnProfile: L, isWithheld: r, user: y, userId: y.id_str }), n.createElement(Ie, { isWithheld: r, onFollowButtonOffscreen: i, promotedContent: g, user: y, viewerUserId: w })), n.createElement(jr, { getVerifiedCardShouldShow: F, isOwnProfile: L, isWithheld: r, namespace: bn, user: y }), A ? null : n.createElement(tr, { isOwnProfile: L, professionalCategoryIcon: _, professionalCategoryName: h, user: y, userRef: void 0 }), V ? null : n.createElement(rn, { isActiveCreator: t, isOwnProfile: L, subscribersCount: E, user: y }), z ? null : n.createElement(s.Z, { style: yn.marginTopXSmall }, n.createElement(l.Z, { userId: y.id_str, userScreenName: y.screen_name })), y.muting ? n.createElement(hr, { user: y, userRef: void 0 }) : null), H ? null : n.createElement(f.U, { setIsRenderingProfileSpotlight: $, user: y, viewerUserId: w }), !j && !y.possibly_sensitive && n.createElement(hn, { userData: y }), L && (F || W) ? n.createElement(p.Z, { dismissProfileUpsellCard: R, gotDismissedProfileUpsellCard: x, shouldShowProfileUpsellCard: !!F, user: y }) : null, P ? n.createElement(u.Z, { onRemoveClusterFollow: I, userId: y.id_str }) : null));
                },
                yn = i.default.create((e) => ({ rootRedesign: { paddingHorizontal: e.spaces.space16 }, content: { marginBottom: e.spaces.space16 }, marginTopXSmall: { marginTop: e.spaces.space12 } })),
                wn = n.memo(En);
        },
        731305: (e, t, r) => {
            r.d(t, { Xy: () => o, ZQ: () => s, jB: () => i, nf: () => n, zi: () => l });
            const n = (e, t) => e === t.id_str,
                s = (e, t, r) => !n(e, r) && (r.blocking || t),
                i = (e, t, r) => !n(e, r) && t,
                o = (e, t, r) => !e || n(e, r) || r.blocking || t || (!!r.protected && !r.following),
                l = ({ isWithheld: e, showBlockedTweets: t, user: r, viewerUserId: s }) => !n(s, r) && (!s || (r.blocking && !t) || e || (!!r.protected && !r.following));
        },
        217491: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                s = r(325686),
                i = r(682474),
                o = r(392237),
                l = r(621389),
                a = r(935496),
                c = r(708852),
                u = r(823161);
            const d = (e) => {
                    const t = (0, c.tj)();
                    return n.createElement(s.Z, { "aria-hidden": !0, style: l.Z.avatar }, n.createElement(u.default, { borderColor: "cellBackground", borderWidth: t ? "large" : "medium", focusable: !1, size: "custom" }));
                },
                m = n.memo(d);
            var f = r(366635);
            const p = (e) => {
                    const { fullUser: t, restrictedUser: r } = e,
                        i = t || r,
                        o = i.name && i.screen_name,
                        a = o ? i.name : `@${i.screen_name}`;
                    return n.createElement(s.Z, { style: l.Z.names }, n.createElement(f.Z, { name: a, nameSize: "headline1", screenName: o ? i.screen_name : void 0, withStackedLayout: !0 }));
                },
                _ = n.memo(p),
                h = (e) => {
                    const { fullUser: t, restrictedUser: r, shouldDisplayUserActionSheet: c } = e;
                    return n.createElement(s.Z, null, n.createElement(s.Z, { style: l.Z.banner }, n.createElement(i.Z, { ratio: o.default.theme.aspectRatios.profileBanner })), n.createElement(s.Z, { style: [l.Z.content, l.Z.withheld] }, n.createElement(s.Z, { style: l.Z.avatarAndButton }, n.createElement(m, null), n.createElement(s.Z, { style: l.Z.buttonAffordance }), c && t && n.createElement(a.Z, { buttonStyle: l.Z.menuSheetButton, user: t })), n.createElement(_, { fullUser: t, restrictedUser: r })));
                },
                g = n.memo(h);
        },
        935496: (e, t, r) => {
            r.d(t, { Z: () => E });
            var n = r(807896),
                s = r(537107),
                i = r(202784),
                o = (r(585488), r(277660)),
                l = r.n(o),
                a = r(154003),
                c = r(111677),
                u = r.n(c),
                d = r(149170),
                m = r(90411);
            const f = "userActions",
                p = u().h63a5c3c,
                _ = i.createElement(d.default, null),
                h = (e) => {
                    const { buttonStyle: t, promotedContent: r, user: n } = e,
                        s = i.useCallback((e) => i.createElement(m.ZP, { onClose: e, promotedContent: r, user: n, view: "profile" }), [r, n]);
                    return i.createElement(a.ZP, { "aria-label": p, hoverLabel: { label: p }, icon: _, renderMenu: s, style: t, testID: f, type: "primaryOutlined" });
                },
                g = i.memo((e) => {
                    const { user: t, ...r } = e,
                        o = l()(s.Z, t),
                        a = i.useMemo(() => {
                            const { avatar: e, core: t, legacy: r, privacy: n, relationship_perspectives: s } = o;
                            return { id_str: o.rest_id, blocking: s?.blocking ?? !1, blocked_by: s?.blocked_by ?? !1, description: r?.description || "", following: s?.following ?? !1, followed_by: s?.followed_by ?? !1, muting: s?.muting || void 0, name: t?.name || "", profile_image_url_https: e?.image_url || "", promoted_content: r?.promoted_content ? { impression_id: r.promoted_content.impression_id || void 0, disclosure_type: r.promoted_content.disclosure_type || void 0 } : void 0, protected: n?.protected ?? !1, screen_name: t?.screen_name || "", want_retweets: r?.want_retweets || void 0 };
                        }, [o]);
                    return i.createElement(h, (0, n.Z)({}, r, { user: a }));
                });
            function b(e) {
                return e.user ? i.createElement(h, { buttonStyle: e.buttonStyle, promotedContent: e.promotedContent, user: e.user }) : e.userRef ? i.createElement(g, { buttonStyle: e.buttonStyle, promotedContent: e.promotedContent, user: e.userRef }) : null;
            }
            const E = i.memo(b);
        },
        621389: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = r(392237).default.create((e) => {
                const t = { width: "25%", minWidth: e.spaces.space48 };
                return { avatar: { ...t, height: "auto", marginTop: "-15%", marginBottom: e.spaces.space12 }, avatarSize: t, avatarAndButton: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap" }, buttonAffordance: { height: e.spacesPx.space36 }, content: { paddingTop: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, withheld: { paddingBottom: e.spaces.space12 }, banner: { backgroundColor: e.colors.gray200 }, menuSheetButton: { marginEnd: e.spaces.space8, marginBottom: e.spaces.space12 }, names: { marginTop: e.spaces.space4, marginBottom: e.spaces.space12, flexDirection: "row", flexWrap: "wrap" }, namesInner: { flexDirection: "column", marginEnd: e.spaces.space8, flexShrink: 1 }, longNameButtons: { flexDirection: "row", alignItems: "center", marginTop: e.spaces.space4 } };
            });
        },
        930351: (e, t, r) => {
            r.d(t, { Z: () => v });
            var n = r(202784),
                s = r(111677),
                i = r.n(s),
                o = r(163889),
                l = r(42508);
            const a = i().cb339f26,
                c = i().hf06085e,
                u = i().aa959f36,
                d = i().hf06085e,
                m = i().jf604336,
                f = i().c9bfda48,
                p = i().jf604336,
                _ = i().g29ebf26,
                h = i().aa959f36,
                g = i().jcfb7fba,
                b = { default: a, fake_account: u, offensive_profile_content: m, sensitive_media: p, timeout: h },
                E = { default: c, fake_account: d, offensive_profile_content: f, sensitive_media: _, timeout: g };
            var y = r(416699);
            const w = i().d834ab9c,
                Z = ({ onConfirm: e, screenName: t, userProfileInterstitialType: r }) => {
                    const { header: s, message: i } = ((e) => (e && Object.values(l.Z).indexOf(e) >= 0 ? { header: b[e], message: E[e] } : ((0, o.ZP)(`Unrecognized Profile Interstitial Type: ${String(e)}`), { header: b.default, message: E.default })))(r),
                        a = n.useCallback(() => {
                            e();
                        }, [e]);
                    return n.createElement(y.Z, { buttonText: w, header: s, message: i, onButtonPress: a, screenName: t });
                },
                v = n.memo(Z);
        },
        21437: (e, t, r) => {
            r.d(t, { X: () => d, Z: () => m });
            var n = r(202784),
                s = r(688715),
                i = r(731708),
                o = r(111677),
                l = r.n(o),
                a = r(416699);
            const c = l().bd598c70,
                u = (0, s.ju)("https://support.x.com/articles/14016"),
                d = (e) => {
                    const { screenName: t } = e,
                        r = n.useMemo(() => n.createElement(l().I18NFormatMessage, { $i18n: "i1824ce3", screenName: t }, n.createElement(i.ZP, { link: u }, l().e617164b)), [t]);
                    return n.createElement(a.Z, { header: c, message: r, screenName: t });
                },
                m = n.memo(d);
        },
        220544: (e, t, r) => {
            r.d(t, { Z: () => m, i: () => d });
            var n = r(202784),
                s = r(731708),
                i = r(111677),
                o = r.n(i),
                l = r(686689),
                a = r(416699);
            const c = o().g8475f82,
                u = n.createElement(o().I18NFormatMessage, { $i18n: "da9d52d7" }, n.createElement(s.ZP, { link: "https://support.x.com/articles/18311" }, o().j5e1cf59)),
                d = (e) => {
                    const { screenName: t, suspendHeader: r, suspendMessage: s } = e,
                        i = r ? n.createElement(l.Z, { entities: r.entities, rtl: r.rtl, text: r.text }) : c,
                        o = s ? n.createElement(l.Z, { entities: s.entities, rtl: s.rtl, text: s.text }) : u;
                    return n.createElement(a.Z, { header: i, message: o, screenName: t });
                },
                m = n.memo(d);
        },
        644917: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                s = r(310452),
                i = r(731708),
                o = r(354149),
                l = r(111677),
                a = r.n(l),
                c = r(416699);
            const u = (e) => {
                    const { user: t } = e,
                        r = a().gbf342a4;
                    if (!t) return null;
                    const { description: l, entities: u, id_str: d, screen_name: m } = t;
                    if (!l) return null;
                    const f = s.ZP.descriptionTextParts(l, u),
                        p = n.createElement(
                            i.ZP,
                            { align: "center", color: "gray700", dir: "auto" },
                            f.map((e, t) => n.createElement(o.ZP, { key: `user_${d}_textpart_${t}`, linkify: !0, part: e })),
                        );
                    return n.createElement(c.Z, { header: r, message: p, screenName: m });
                },
                d = n.memo(u);
        },
        923790: (e, t, r) => {
            r.d(t, { C: () => p });
            var n = r(202784),
                s = r(325686),
                i = r(310452),
                o = r(731708),
                l = r(354149),
                a = r(420412),
                c = r(392237),
                u = r(111677);
            const d = r.n(u)().gbf342a4,
                m = (e) => {
                    const { user: t } = e;
                    if (!t) return null;
                    const { description: r, entities: c, id_str: u } = t;
                    if (!r) return null;
                    const m = i.ZP.descriptionTextParts(r, c);
                    return n.createElement(
                        s.Z,
                        null,
                        n.createElement(
                            s.Z,
                            { style: f.withheldMessageRoot },
                            n.createElement(o.ZP, { align: "center", size: "title4", style: f.withheldMessageHeader, weight: "bold" }, d),
                            n.createElement(
                                o.ZP,
                                { align: "center", color: "gray700", dir: "auto" },
                                m.map((e, t) => n.createElement(l.ZP, { key: `user_${u}_textpart_${t}`, linkify: !0, part: e })),
                            ),
                        ),
                        n.createElement(a.Z, null),
                        e.children,
                    );
                },
                f = c.default.create((e) => ({ withheldMessageRoot: { paddingVertical: e.spaces.space32, paddingHorizontal: e.spaces.space16 }, withheldMessageHeader: { paddingBottom: e.spaces.space4 } })),
                p = n.memo(m);
        },
        303800: (e, t, r) => {
            r.r(t), r.d(t, { UserProfileScreenContainer: () => k, default: () => O });
            var n = r(807896),
                s = r(202784),
                i = r(71620),
                o = r(668214),
                l = r(704279),
                a = r(390387),
                c = r(38562),
                u = r(836255),
                d = r(919022);
            const m = (e, t) => {
                    const { location: r, match: n } = t;
                    return n && n.params && n.params.screenName ? n.params.screenName : r && r.query && r.query.screen_name && "string" == typeof r.query.screen_name ? r.query.screen_name : "";
                },
                f = (e, t) => d.ZP.selectIsUserSuspended(e, m(0, t)),
                p = (e, t) => d.ZP.selectUserSuspendedHeader(e, m(0, t)),
                _ = (e, t) => d.ZP.selectUserSuspendMessage(e, m(0, t)),
                h = (e, t) => d.ZP.selectIsUserWithheld(e, m(0, t)),
                g = (e, t) => d.ZP.selectByScreenName(e, m(0, t)),
                b = (0, d.W3)([d.pL]),
                E = (e, t) => b(e, m(0, t)),
                y = (e, t) => t.location.pathname.includes("/intent/"),
                w = (e, t) => d.ZP.selectIsUserNotFound(e, m(0, t)),
                Z = (e, t) => {
                    const r = g(e, t);
                    return !!r && d.ZP.selectIsLoading(e, r.id_str);
                },
                v = (e, t) => {
                    const { location: r } = t,
                        { promotedTweetState: n } = (r && r.state) || {},
                        s = g(e, t);
                    return n || (s && s.promoted_content);
                },
                P = (e, t) => {
                    const r = g(e, t);
                    return r && r.profile_interstitial_type ? r.profile_interstitial_type : null;
                },
                C = (e, t) => {
                    const r = ((e, t) => {
                        const r = g(e, t);
                        if (r?.pinned_tweet_ids_str?.length) return r.pinned_tweet_ids_str[0];
                    })(e, t);
                    return r ? u.Z.selectHydrated(e, r) : void 0;
                },
                I = (0, o.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: c.f1, fetchStatus: E, isActiveCreator: a.WM, isIntentRoute: y, isNotFound: w, isRefreshing: Z, isSuspended: f, suspendHeader: p, suspendMessage: _, isWithheld: h, pinnedTweet: C, promotedContent: v, screenName: m, superFollowersCount: a.cl, user: g, userProfileInterstitialType: P, userLanguage: a.VT }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, i.zr)("USER_PROFILE_SCREEN"), fetchOneUser: d.ZP.fetchOne, fetchOneByScreenNameWithExtraFieldsIfNeeded: d.ZP.fetchOneByScreenNameWithExtraFieldsIfNeeded, fetchSettingsIfNeeded: c.Sb, scribeAction: l.n }));
            var S = r(984915),
                B = r(722176);
            const k = (e) => s.createElement(S.Z, { userId: e.user && e.user.id_str }, ({ scribeNamespace: t }) => s.createElement(B.Z, (0, n.Z)({}, e, { scribeNamespace: t }))),
                O = I(k);
        },
        918588: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(380327),
                s = (r(585488), r(712696)),
                i = r.n(s);
            const o = n.Z;
            const l = function () {
                const e = i()(o, {});
                return (e.quick_promote_advertiser_accounts?.items ?? []).reduce((e, t) => e + (t?.campaigns?.total_count ?? 0), 0);
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-539b1066.7117c99a.js.map
