"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Communities-5d92a2cf"],
    {
        274407: (e, t, n) => {
            n.d(t, { Z: () => X });
            var a = n(865989),
                i = n(202784),
                o = (n(585488), n(277660)),
                r = n.n(o),
                c = n(111677),
                s = n.n(c),
                l = n(810641),
                m = n(874684),
                u = n(561972),
                d = (n(136728), n(692659)),
                p = n(731708),
                y = n(844685),
                g = n(779610),
                h = n(593866),
                b = n(420412),
                f = n(392237),
                E = n(159340),
                _ = n(254990),
                C = n(97043),
                Z = n(121791),
                S = n(870358),
                v = n(99855),
                I = n(366635);
            const x = (e) => {
                    const t = r()(v.Z, e.community),
                        n = i.useMemo(() => new Date(t.created_at).toLocaleString("default", { day: "numeric", month: "long", year: "numeric" }), [t.created_at]),
                        a = i.useMemo(() => {
                            if ("User" === t.creator_results.result?.__typename) return i.createElement(I.Z, { isBlueVerified: t.creator_results.result.is_blue_verified || !1, isVerified: t.creator_results.result.verification?.verified || !1, screenName: t.creator_results.result.core?.screen_name || "", withLink: !0 });
                        }, [t]);
                    return t.creator_results && "User" === t.creator_results.result?.__typename ? i.createElement(p.ZP, { color: "gray700" }, i.createElement(s().I18NFormatMessage, { $i18n: "a346641b", date: n }, a)) : null;
                },
                k = i.memo(x),
                w = i.createElement(p.ZP, { weight: "bold" }),
                M = s().af7c11aa,
                P = s().fb974b24,
                F = i.createElement(s().I18NFormatMessage, { $i18n: "he99cc29" }, i.cloneElement(w, null, s().gedb877d)),
                z = s().fcef2922,
                H = s().c93dd2c8,
                O = (e) => {
                    const t = r()(d.Z, e.community),
                        n = i.useMemo(() => {
                            const e = i.createElement(k, { community: t }),
                                n = "Open" !== t.join_policy,
                                a = { CommunityMemberAllowedActions: { decoration: A, label: i.createElement(p.ZP, null, P) }, CommunityOpenMembershipEducation: { decoration: B, label: F, description: z }, CommunityRestrictedMembershipEducation: { decoration: D, label: F, description: H }, OriginationAttributionEducation: { decoration: L, label: e } },
                                o = [a.CommunityMemberAllowedActions, n ? a.CommunityRestrictedMembershipEducation : a.CommunityOpenMembershipEducation];
                            return "User" === t.creator_results.result?.__typename && o.push(a.OriginationAttributionEducation), o;
                        }, [t]);
                    return i.createElement(i.Fragment, null, i.createElement(y.Z, { text: M }), (0, S.Wh)(t.role) && t.description ? i.createElement(g.Z, { label: t.description }) : null, i.createElement(h.Z, { containerStyle: T.containerStyle, items: n }), i.createElement(b.Z, null));
                },
                T = f.default.create((e) => ({ containerStyle: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.spaces.space24, minHeight: e.spaces.space56 }, icon: { marginStart: "6px", marginEnd: e.spaces.space20, color: e.colors.gray700, height: e.spaces.space24, width: e.spaces.space24 } })),
                A = i.createElement(E.default, { style: T.icon }),
                B = i.createElement(_.default, { style: T.icon }),
                L = i.createElement(C.default, { style: T.icon }),
                D = i.createElement(Z.default, { style: T.icon }),
                N = i.memo(O);
            var $ = n(324287),
                R = n(30183),
                U = n(699910);
            const V = $.Z,
                j = s().gfca5254,
                W = s().ffd9cfe6,
                q = (e) => {
                    const { community: t } = e,
                        n = r()(V, t),
                        { rules: a } = n,
                        o = i.useMemo(() => a.map((e) => ({ rest_id: e.rest_id, name: e.name, description: e.description || "" })), [a]);
                    return 0 === a.length ? null : i.createElement(i.Fragment, null, i.createElement(y.Z, { text: j }), i.createElement(U.Z, { badgeStyle: Y.badgeStyle, headerContainerStyle: [Y.containerStyle, Y.headingContainerStyle], headerExplanationStyle: Y.explanationStyle, limit: 5, ruleContainerStyle: Y.ruleContainerStyle, rules: o }), a.length > 5 ? i.createElement(i.Fragment, null, i.createElement(R.Z, { link: `/i/communities/${n.rest_id}/rules`, text: W }), " ", i.createElement(b.Z, null)) : null);
                },
                Y = f.default.create((e) => ({ explanationStyle: { color: e.colors.text }, containerStyle: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.spaces.space24, minHeight: e.spaces.space56 }, headingContainerStyle: { paddingHorizontal: e.componentDimensions.gutterHorizontal, height: "initial" }, ruleContainerStyle: { paddingHorizontal: e.spaces.space24 }, badgeStyle: { marginEnd: e.spaces.space16, marginStart: e.spaces.space2 } })),
                Q = i.memo(q),
                G = s().i9028824,
                K = s().cc683fba,
                J = (e) => {
                    const t = (0, u.Z)(),
                        n = r()(a.Z, e.community),
                        o = i.useMemo(() => (0, m.Z)(n.rest_id), [n.rest_id]);
                    return i.createElement(i.Fragment, null, i.createElement(N, { community: n }), i.createElement(Q, { community: n }), t ? null : i.createElement(l.Z, { loadingAccessibilityLabel: G, module: o, title: K }));
                },
                X = i.memo(J);
        },
        931621: (e, t, n) => {
            n.r(t), n.d(t, { CreateCommunityModal: () => P, default: () => z });
            var a = n(202784),
                i = n(325686),
                o = n(154003),
                r = n(834324),
                c = n(731708),
                s = n(392237),
                l = n(111677),
                m = n.n(l),
                u = n(211971),
                d = n(980407),
                p = n(281598),
                y = n(952793),
                g = n(615027),
                h = n(992426),
                b = n(739658),
                f = n(890605),
                E = n(668214),
                _ = n(491963),
                C = n(390387);
            const Z = (0, E.Z)()
                    .propsFromState(() => ({ communitiesActions: C.yK }))
                    .propsFromActions(() => ({ createCommunity: _.Vz })),
                S = m().i6e7e298,
                v = m().a226497c,
                I = m().c9d56b72,
                x = m().fc2a5c92,
                k = m().c1ad5a12,
                w = m().f713fbd2,
                M = m().d1fa71fc,
                P = a.memo((e) => {
                    const { communitiesActions: t, createCommunity: n, history: s } = e,
                        l = (0, y.hC)("c9s_community_question_box_enabled"),
                        [m, E] = a.useState(!0),
                        [_, C] = a.useState(!1),
                        [Z, P] = a.useState(!1),
                        z = m || _ || Z,
                        [H, O] = a.useState(""),
                        [T, A] = a.useState(""),
                        [B, L] = a.useState(""),
                        [D, N] = a.useState(null),
                        $ = a.useCallback((e, t) => {
                            O(e), E(t);
                        }, []),
                        R = a.useCallback((e, t) => {
                            A(e), 0 === e.length ? C(!1) : C(t);
                        }, []),
                        U = a.useCallback((e, t) => {
                            L(e), P(t);
                        }, []),
                        [V, j] = (0, p.L4)(),
                        W = a.useCallback(() => ({ description: T, question: B, ...(0, p.eE)(V) }), [T, B, V]),
                        q = "CommunityRestrictedMembershipSettings" === V.access,
                        Y = a.useCallback(() => {
                            N(null),
                                n(H, W())
                                    .then((e) => {
                                        if ("Community" === e?.type) {
                                            const t = e?.normalized.result;
                                            "string" == typeof t && s.replace(`/i/communities/${t}?show_creation_summary`);
                                        } else "CreateError" === e?.type && N(e);
                                    })
                                    .catch((e) => {
                                        N({ error: "GraphQL error", reason: e });
                                    });
                        }, [H, n, W, s]);
                    if (!t?.create) return a.createElement(g.Z, { to: "/home" });
                    const Q = a.createElement(o.ZP, { disabled: z, onClick: Y, size: "small", type: "brandFilled" }, S),
                        G = D ? a.createElement(i.Z, { style: F.error }, a.createElement(r.Z, { Icon: u.default, headline: x, text: k, type: "danger" })) : void 0;
                    return a.createElement(d.Z, { containerStyle: F.root, history: s, rightControl: Q, title: v }, a.createElement(a.Fragment, null, G, a.createElement(c.ZP, { color: "gray700", style: F.text }, I), a.createElement(h.x, { autoFocus: !0, communityName: H, onChange: $ }), a.createElement(b.G, { communityPurpose: T, onChange: R }), a.createElement(c.ZP, { size: "headline2", style: F.membership, weight: "bold" }, w), a.createElement(p.ZP, { hideInvitePolicy: !0, setters: j, state: V }), l && q && a.createElement(a.Fragment, null, a.createElement(c.ZP, { size: "headline2", style: F.question }, M), a.createElement(f.W, { communityQuestion: B, onChange: U }))));
                }),
                F = s.default.create((e) => ({ error: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space12 }, root: { paddingHorizontal: e.spaces.space20, paddingVertical: e.spaces.space20 }, text: { paddingHorizontal: e.spaces.space16 }, membership: { paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space16 }, question: { paddingVertical: e.spaces.space2, paddingHorizontal: e.spaces.space16 } })),
                z = Z(P);
        },
        643454: (e, t, n) => {
            n.d(t, { Z: () => P });
            var a = n(255098),
                i = n(202784),
                o = n(325686),
                r = (n(585488), n(277660)),
                c = n.n(r),
                s = n(107267),
                l = n(731708),
                m = n(529356),
                u = n(593866),
                d = n(392237),
                p = n(111677),
                y = n.n(p),
                g = n(410418),
                h = n(544367),
                b = n(541286);
            const f = y().bf359e0e,
                E = y().e8fcdd3a,
                _ = y().b37d580e,
                C = y().c6d9c07c,
                Z = y().ea3b38fa,
                S = y().i625c42e,
                v = y().ca7eeab0,
                I = y().acae4034,
                x = y().e2186ee2,
                k = y().j24c37b2,
                w = (e) => {
                    const t = c()(a.Z, e.community),
                        n = (0, s.useHistory)(),
                        r = i.useCallback(() => {
                            n.replace(`/i/communities/${t.rest_id}/`);
                        }, [n, t.rest_id]),
                        d = i.createElement(
                            o.Z,
                            { role: "list", style: M.rulesContainer },
                            t.rules.map((e) => i.createElement(l.ZP, { color: "gray700", key: e.rest_id, role: "listitem", style: M.rule }, e.name)),
                        ),
                        p = "Open" === t.join_policy,
                        y = p ? Z : _,
                        w = p ? S : C;
                    return i.createElement(
                        m.Z,
                        { actionLabel: k, graphicDisplayMode: "none", headline: f, isFullHeightOnMobile: !0, onAction: r, subtext: E },
                        i.createElement(
                            o.Z,
                            { style: M.infoItemsContainer },
                            i.createElement(u.Z, {
                                containerStyle: M.itemContainer,
                                items: [
                                    { label: y, description: w, decoration: i.createElement(g.default, { style: M.decorationContainer }) },
                                    { label: v, decoration: i.createElement(h.default, { style: M.decorationContainer }), description: d },
                                    { label: I, description: x, decoration: i.createElement(b.default, { style: M.decorationContainer }) },
                                ],
                            }),
                        ),
                    );
                },
                M = d.default.create((e) => ({ infoItemsContainer: { paddingBottom: e.spaces.space32 }, itemContainer: { paddingHorizontal: 0 }, decorationContainer: { color: e.colors.text, height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space20 }, rulesContainer: { marginTop: e.spaces.space4, marginStart: e.spaces.space8 }, rule: { display: "list-item", listStyleType: "disc", listStylePosition: "inside" } })),
                P = i.memo(w);
        },
        625727: (e, t, n) => {
            n.d(t, { Z: () => Nt });
            var a = n(334196),
                i = n(202784),
                o = n(325686),
                r = (n(585488), n(277660)),
                c = n.n(r),
                s = n(107267),
                l = n(731708),
                m = n(154003),
                u = n(721266),
                d = n(392237),
                p = n(111677),
                y = n.n(p),
                g = n(791632),
                h = n(334963),
                b = n(507651),
                f = n(443781),
                E = n(652904),
                _ = n(952793),
                C = n(870358),
                Z = n(725516),
                S = n(125363),
                v = n(742602),
                I = n(561972),
                x = n(180796),
                k = n(278817),
                w = n(697209),
                M = n(439592),
                P = n(682474),
                F = n(401388),
                z = n(449950),
                H = n(910805);
            const O = w.Z,
                T = (e) => {
                    const t = c()(O, e.community),
                        n = (0, H.Z)(t),
                        a = d.default.theme.aspectRatios.communityBanner;
                    return n && !(0, F.Z)(n) ? i.createElement(z.Z, { "aria-label": "", aspectMode: M.Z.exact(a), backgroundColor: d.default.theme.colors.gray300, image: n }) : i.createElement(P.Z, { ratio: a }, i.createElement(o.Z, { style: A.placeholderImageContainer }));
                },
                A = d.default.create((e) => ({ placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                B = i.memo(T),
                L = d.default.create((e) => ({ descriptionContainer: { paddingHorizontal: e.spaces.space16, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, justifyContent: "flex-end", zIndex: 2 }, backgroundColor: { height: "100%", width: "100%", zIndex: 1, backgroundColor: e.colors.gray0 }, backgroundColorWhite: { height: "100%", width: "100%", backgroundColor: e.colors.white, zIndex: 0 } })),
                D = (e) => {
                    const { children: t } = e;
                    return i.createElement(o.Z, null, i.createElement(o.Z, { style: L.descriptionContainer }, t), i.createElement(o.Z, { style: [d.default.absoluteFill, L.backgroundColorWhite] }), i.createElement(o.Z, { style: [d.default.absoluteFill, L.backgroundColor] }));
                };
            var N = n(919157);
            const $ = y().hb9400dc,
                R = (e) => {
                    const { community: t } = e,
                        n = c()(N.Z, t),
                        { description: a } = n,
                        [r, s] = i.useState(!1),
                        [m, u] = i.useState(!1),
                        d = i.useCallback(
                            (e) => {
                                e.preventDefault(), e.stopPropagation(), s(!r);
                            },
                            [r],
                        );
                    return a ? i.createElement(o.Z, { style: U.description }, i.createElement(l.ZP, { color: "text", getTextOverflow: u, numberOfLines: r ? void 0 : 2 }, a), !r && m ? i.createElement(l.ZP, { color: "text", onPress: d, weight: "bold" }, $) : null) : null;
                },
                U = d.default.create((e) => ({ description: { width: "100%", marginTop: e.spaces.space4, marginBottom: e.spaces.space16 } })),
                V = i.memo(R);
            var j = n(223916),
                W = n(530732),
                q = n(58881),
                Y = n(143095),
                Q = n(784380),
                G = n(369241),
                K = n(264223);
            const J = "community-facepile",
                X = q.Z.generate({ backgroundColor: d.default.theme.colors.transparent, color: d.default.theme.colors.text, customHoverBackgroundColor: "rgba(255,255,255,0.1)" }),
                ee = d.default.create((e) => ({ description: { width: "100%", marginTop: e.spaces.space4, marginBottom: e.spaces.space16 }, membersContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", start: -e.spacesPx.space4, top: -e.spacesPx.space2, padding: e.spaces.space4, borderRadius: e.borderRadii.small }, rightSpace: { marginEnd: e.spaces.space12 } })),
                te = ({ community: e }) => {
                    const t = (0, _.hC)("c9s_list_members_action_api_enabled"),
                        n = (0, I.Z)(),
                        [a, o] = (0, Y.O)(!1),
                        r = c()(j.Z, e),
                        { actions: s, name: l, rest_id: m } = r,
                        u = !t || "CommunityListMembersAction" === s.list_members_action_result.__typename,
                        d = n || !u ? void 0 : `/i/communities/${m}/members`,
                        p = n ? o : void 0;
                    return i.createElement(i.Fragment, null, i.createElement(W.Z, { interactiveStyles: X, link: d, onClick: p, style: ee.membersContainer, testID: J }, i.createElement(Q.Z, { community: r, style: ee.rightSpace }), i.createElement(K.Z, { community: r })), a ? i.createElement(G.ZP, { customText: l, displayMode: G.BH.community, onClose: o, postLoginPath: `/i/communities/${m}` }) : null);
                };
            var ne = n(754924),
                ae = n(491831),
                ie = n(178260);
            const oe = y().b71a08a0,
                re = (e) => {
                    const { community: t } = e;
                    return c()(ne.Z, t).join_policy === ie.x.SuperFollowRequired ? i.createElement(o.Z, { style: ce.root }, i.createElement(ae.default, { style: ce.icon }), i.createElement(l.ZP, { color: "text", size: "subtext3", weight: "bold" }, oe)) : null;
                },
                ce = d.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row", marginBottom: e.spaces.space4 }, icon: { color: e.colors.text, marginEnd: e.spaces.space4, width: e.spaces.space12, height: e.spaces.space12 } })),
                se = i.memo(re);
            var le = n(405303),
                me = n(883229),
                ue = n(87778),
                de = n(67369),
                pe = n(370006),
                ye = n(386802),
                ge = n(138099),
                he = n(786998),
                be = n(844685),
                fe = n(769471),
                Ee = n(268313),
                _e = n(535338),
                Ce = n(184804),
                Ze = n(351743),
                Se = n.n(Ze),
                ve = n(601576);
            const Ie = y().i2209530,
                xe = y().g61ed8a4,
                ke = Ce.Z,
                we = (e) => {
                    const { communityId: t, handleSaveOnPress: n, notificationSettings: a } = e,
                        [o] = Se()(ke),
                        r = (0, S.I0)(),
                        c = i.useCallback(() => {
                            o({
                                variables: { community_id: t, community_notification_settings: a },
                                onCompleted(e) {
                                    n();
                                },
                                onError() {
                                    r((0, ve.fz)({ text: xe }));
                                },
                            });
                        }, [t, r, n, o, a]);
                    return i.createElement(m.ZP, { onPress: c, size: "small", type: "primaryFilled" }, Ie);
                },
                Me = i.memo(we);
            var Pe = n(954110);
            const Fe = { [Ee.x.SpaceStarted]: y().be341c46, [Ee.x.ChatStarted]: y().fbe88a32, [Ee.x.PinnedTweet]: y().b551cd1e };
            function ze(e) {
                const { handleOnChange: t, notificationSettings: n } = e;
                return [Ee.x.SpaceStarted, Ee.x.ChatStarted, Ee.x.PinnedTweet].map((e) => {
                    const a = Fe[e],
                        o = n.find((t) => t.notification_type === e);
                    return o ? i.createElement(Pe.Z, { checked: "Enabled" === o.notification_setting, key: o.notification_type, label: a, name: o.notification_type, onChange: t, withPaddingHorizontal: !0 }) : null;
                });
            }
            const He = i.memo(ze),
                Oe = y().fc16f13a,
                Te = { [Ee.x.SpaceStarted]: "spaces_2022_h2_spaces_communities", [Ee.x.ChatStarted]: "twitter_chat_communities_chat_enabled" },
                Ae = ue.Z,
                Be = (e) => {
                    const { communityId: t, handleMaskClick: n, handleSaveOnPress: a } = e,
                        { communityResults: o } = (0, _e.p)(Ae, { communityId: t }),
                        r = o.result,
                        c = i.useMemo(() => {
                            const e = {};
                            return (
                                (r?.notification_settings || []).forEach((t) => {
                                    e[t.notification_type] = { notification_type: t.notification_type, notification_setting: t.notification_setting };
                                }),
                                e
                            );
                        }, [r]),
                        [s, l] = i.useState(c),
                        m = i.useCallback(
                            (e) => {
                                e &&
                                    l((t) => {
                                        const n = (0, fe.Z)({}, t);
                                        return (n[e].notification_setting = "Enabled" === s[e].notification_setting ? "Disabled" : "Enabled"), n;
                                    });
                            },
                            [s],
                        ),
                        { featureSwitches: u } = i.useContext(f.rC),
                        d = i.useMemo(
                            () =>
                                Object.keys(s)
                                    .filter((e) => e === Ee.x.PinnedTweet || (Te[e] && u.isTrue(Te[e])))
                                    .map((e) => s[e]),
                            [u, s],
                        ),
                        p = (0, de.yu)(),
                        y = { isModal: !p };
                    return (() => {
                        const e = p ? "back" : "close";
                        return i.createElement(ye.Z.Provider, { value: y }, i.createElement(ge.Z, { enableMaskForDismiss: !0, onMaskClick: n, type: "full", withMask: !0 }, i.createElement(he.Z, { leftControl: i.createElement(pe.Z, { backButtonType: e, onClick: n }), rightControl: i.createElement(Me, { communityId: t, handleSaveOnPress: a, notificationSettings: d }), title: "Notifications" }), i.createElement(be.Z, { text: Oe }), i.createElement(He, { handleOnChange: m, notificationSettings: d })));
                    })();
                },
                Le = i.memo(Be),
                De = i.createElement(le.default, null),
                Ne = y().d0574662,
                $e = { label: Ne },
                Re = { context: "NotificationSettingsButton" },
                Ue = { type: "CustomRetry", content: () => null },
                Ve = (e) => {
                    const [t, n] = (0, Y.O)(!1),
                        a = n.toTrue,
                        o = n.toFalse,
                        r = n.toFalse;
                    return i.createElement(me.N, { errorConfig: Re, fallback: Ue }, i.createElement(m.ZP, { "aria-label": Ne, hoverLabel: $e, icon: De, onPress: a, style: je.notificationButton, type: "primaryOutlined" }), t ? i.createElement(i.Suspense, { fallback: null }, i.createElement(Le, { communityId: e.communityId, handleMaskClick: o, handleSaveOnPress: r })) : null);
                },
                je = d.default.create((e) => ({ notificationButton: { marginEnd: e.spaces.space8 } })),
                We = i.memo(Ve);
            n(136728);
            var qe = n(369642),
                Ye = n(811176),
                Qe = n(262009),
                Ge = n(137631),
                Ke = n(348256),
                Je = n(845738),
                Xe = n(709318),
                et = n(872788),
                tt = n(668214);
            const nt = (0, tt.Z)().propsFromActions(() => ({ addToast: ve.fz })),
                at = y().i9f39962,
                it = y().bc7f90a0,
                ot = y().j5a37508,
                rt = y().c7a4610a,
                ct = i.createElement(Qe.default, null),
                st = d.default.create((e) => ({ pinButton: { marginEnd: e.spaces.space8 } })),
                lt = nt((e) => {
                    const t = c()(qe.Z, e.community),
                        { name: n, rest_id: a } = t,
                        { featureSwitches: o } = (0, f.QZ)(),
                        r = o.getNumberValue("home_timeline_spheres_max_user_owned_or_subscribed_lists_count", Je.F),
                        s = o.isTrue("c9s_spotlight_creation_enabled"),
                        l = (0, S.I0)(),
                        u = (0, S.v9)(Xe.Hm) < r,
                        d = (0, S.v9)((e) => (0, Xe.H4)(e, a)),
                        p = i.useMemo(
                            () => (e) => {
                                const t = [];
                                return s && t.push({ text: it, Icon: Qe.default, link: "/settings/professional_profile/profile_spotlight" }), d ? t.push({ text: rt, Icon: Ge.default, onClick: () => l((0, Xe.bK)({ id: a, name: n, type: et.FO.COMMUNITY })) }) : t.push({ disabled: !u, text: ot, Icon: Ke.default, onClick: () => l((0, Xe.qM)({ id: a, name: n, type: et.FO.COMMUNITY })) }), i.createElement(Ye.Z, { items: t, onCloseRequested: e });
                            },
                            [a, u, l, s, d, n],
                        );
                    return i.createElement(m.ZP, { "aria-label": at, icon: ct, renderMenu: p, style: st.pinButton, type: "primaryOutlined" });
                }),
                mt = i.memo(lt);
            var ut = n(738729),
                dt = n(576648),
                pt = n(688715),
                yt = n(786272),
                gt = n(911373),
                ht = n(630715);
            const bt = (0, tt.Z)().propsFromActions(() => ({ addToast: ve.fz })),
                ft = y().bec3b8fa,
                Et = y().f88553c8,
                _t = y().cc7d5b88,
                Ct = y().e05c00b4,
                Zt = i.createElement(yt.default, null),
                St = i.createElement(gt.default, null),
                vt = d.default.create((e) => ({ shareButton: { marginEnd: e.spaces.space8 } })),
                It = bt((e) => {
                    const t = c()(ut.Z, e.community),
                        { addToast: n } = e,
                        { invites_result: a, rest_id: o, role: r } = t,
                        s = (0, C.Wh)(r) && "CommunityInvitesUnavailable" !== a?.__typename,
                        l = i.useCallback(
                            (e) => {
                                dt.Z.setString((0, pt.ju)(`https://x.com/i/communities/${o}`)), e(), n({ text: Et });
                            },
                            [n, o],
                        ),
                        u = i.useMemo(
                            () => (e) => {
                                const t = [];
                                return t.push({ text: Ct, Icon: ht.default, onClick: l }), s && t.push({ text: _t, Icon: gt.default, link: `/i/communities/${o}/invite` }), i.createElement(Ye.Z, { items: t, onCloseRequested: e });
                            },
                            [o, l, s],
                        ),
                        d = s ? _t : ft,
                        p = s ? St : Zt;
                    return i.createElement(m.ZP, { "aria-label": d, icon: p, renderMenu: u, style: vt.shareButton, type: "primaryOutlined" });
                }),
                xt = i.memo(It);
            var kt = n(970187),
                wt = n(516951);
            const Mt = { follow: y().b171d7c4, following: y().aa7ae3f6, unfollow: y().bb1d57b6 },
                Pt = ({ communityId: e, communityName: t }) => {
                    const [n, a] = (0, Y.O)(!1);
                    return i.createElement(i.Fragment, null, i.createElement(kt.Z, { buttonText: Mt, isFollowing: !1, name: t, onFollow: a, onUnfollow: wt.Z, type: "community" }), n ? i.createElement(G.ZP, { customText: t, displayMode: G.BH.community, onClose: a, postLoginPath: `/i/communities/${e}` }) : null);
                },
                Ft = i.memo(Pt),
                zt = y().a0e3ece4,
                Ht = y().d601fc20,
                Ot = y().add55c98,
                Tt = y().i66136aa,
                At = y().b721eb38,
                Bt = y().d11f73ea,
                Lt = (e) => {
                    const t = c()(a.Z, e.community),
                        { rest_id: n, role: r } = t,
                        { onSelectedTimelineChange: d, selectedTimeline: p } = e,
                        y = (0, s.useRouteMatch)(),
                        w = (0, s.useHistory)(),
                        M = (0, I.Z)(),
                        P = (0, C.Wh)(r),
                        F = (0, S.I0)(),
                        z = (0, Z.z)(),
                        H = (0, s.useLocation)(),
                        O = (0, s.matchPath)(H.pathname, { path: `/i/communities/${n}/about`, exact: !0 }),
                        T = (0, _.hC)("c9s_timelines_media_tab_enabled"),
                        [A, L] = i.useState(!!O),
                        N = i.useCallback(
                            (e) => {
                                L(!1), d(e);
                                const t = e === x.t.ForYou ? "switch_to_ranked" : "switch_to_latest",
                                    a = e === x.t.ForYou ? "latest" : "ranked";
                                z.scribe({ page: "community", element: "timeline_selector", action: t, data: { timeline_mode_switched_from: a } }), F((0, v.mB)(n, "ranked_timeline_selected", "ranked" === e)), F((0, v.mB)(n, "latest_timeline_selected", "latest" === e)), F((0, v.mB)(n, "media_timeline_selected", "media" === e));
                            },
                            [d, z, F, n],
                        ),
                        $ = i.useMemo(() => {
                            const e = { to: `/i/communities/${n}/about`, label: At, key: At, isActive: () => A, onClick: () => L(!0) },
                                t = { to: `/i/communities/${n}`, label: Ht, key: Ht, isActive: () => !A && p === x.t.Latest, onClick: () => N(x.t.Latest) },
                                a = { to: `/i/communities/${n}`, label: Tt, key: Tt, isActive: () => !A && p === x.t.ForYou, onClick: () => N(x.t.ForYou) },
                                o = T ? [a, t, { to: `/i/communities/${n}`, label: Ot, key: Ot, isActive: () => !A && p === x.t.Media, onClick: () => N(x.t.Media) }, e] : [a, t, e];
                            return i.createElement(b.Z, { "aria-label": zt, links: o });
                        }, [n, A, T, p, N]),
                        { featureSwitches: R } = i.useContext(f.rC),
                        U = R.isTrue("communities_adult_content_setting_display"),
                        j = R.isTrue("communities_topic_display");
                    return i.createElement(E.Z, null, i.createElement(o.Z, { style: Dt.container }, (0, g.cu)(w) ? null : i.createElement(o.Z, null, i.createElement(B, { community: t }), i.createElement(D, null, i.createElement(l.ZP, { color: "text", size: "title2", style: Dt.name, weight: "bold" }, t.name.trim()), i.createElement(o.Z, { style: Dt.buttons }, t.primary_community_topic?.topic_name && j ? i.createElement(m.ZP, { size: "xSmall", style: Dt.topic }, t.primary_community_topic?.topic_name) : null, i.createElement(u.Z, { size: "space2" }), t.is_nsfw && U ? i.createElement(m.ZP, { borderColor: "red600", color: "red600", size: "xSmall", style: Dt.topic }, Bt) : null), i.createElement(se, { community: t }), i.createElement(V, { community: t }), i.createElement(o.Z, { style: Dt.bottomContainer }, i.createElement(te, { community: t }), i.createElement(o.Z, { style: Dt.buttons }, (0, g.HD)(w) && i.createElement(h.Z, { community: t, variant: "HeaderDetail" }), M ? null : i.createElement(mt, { community: t }), i.createElement(xt, { community: t }), P ? i.createElement(We, { communityId: n }) : null, M ? i.createElement(Ft, { communityId: n, communityName: t.name }) : i.createElement(k.ZP, { communityId: n, match: y, onCommunityMembershipChange: e.onCommunityMembershipChange }))))), i.createElement(o.Z, { ref: e.tabsRef }, $)));
                },
                Dt = d.default.create((e) => ({ name: { flexDirection: "column", justifyContent: "left", marginBottom: e.spaces.space4 }, topic: { flexDirection: "row", width: "fit-content", marginBottom: e.spaces.space8 }, container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, bottomContainer: { flexDirection: "row", justifyContent: "space-between", flexFlow: "wrap" }, buttons: { flexDirection: "row", height: "fit-content" }, inviteButton: { marginEnd: e.spaces.space8 } })),
                Nt = i.memo(Lt);
        },
        507102: (e, t, n) => {
            n.d(t, { Z: () => h });
            var a = n(202784),
                i = n(457311),
                o = n(111677),
                r = n.n(o),
                c = n(810641),
                s = n(854594),
                l = n(519896);
            const m = r().h5245afa,
                u = r().i9b7f6ba,
                d = r().a1ab9c80,
                p = r().b32c4fb0;
            function y() {
                return a.createElement(i.Z, { buttonType: "brandOutlined", header: d, message: p });
            }
            const g = ({ module: e, onAtTop: t }) => a.createElement(s.l.Provider, { value: e }, a.createElement(c.Z, { loadingAccessibilityLabel: u, module: e, onAtTop: t, prerollDisplayLocation: l.Nw.OTHER, refreshControl: null, renderEmptyState: y, title: m })),
                h = a.memo(g);
        },
        930761: (e, t, n) => {
            n.r(t), n.d(t, { CommunityHashtagResultsScreen: () => w, Screen: () => x, default: () => M });
            var a = n(622766),
                i = n(202784),
                o = n(107267),
                r = n(457311),
                c = n(111677),
                s = n.n(c),
                l = n(718e3),
                m = n(252021),
                u = n(507651),
                d = n(736063),
                p = n(810641),
                y = n(725516),
                g = n(910212),
                h = n(535338),
                b = n(615027);
            const f = s().b7218496,
                E = s().gc09bcfe,
                _ = s().cf35a990,
                C = s().a1c41fe8,
                Z = s().d601fc20,
                S = () => i.createElement(r.Z, { header: f, message: E }),
                v = { context: "HashtagCommunityQuery" },
                I = a.Z,
                x = () => {
                    const { communityId: e, unsafeHashtagQuery: t } = (0, o.useParams)(),
                        n = i.useMemo(() => (t ? t.split("&") : []), [t]);
                    return e ? i.createElement(k, { communityId: e, hashtags: n }) : i.createElement(b.Z, { to: "/" });
                };
            function k({ communityId: e, hashtags: t }) {
                const n = (0, o.useHistory)(),
                    a = i.useMemo(() => (0, g.L)(e, t), [e, t]),
                    r = i.useMemo(() => {
                        const e = [{ key: "Latest", label: Z, to: { pathname: n.location.pathname }, isActive: () => !0 }];
                        return i.createElement(u.Z, { links: e });
                    }, [n.location.pathname]),
                    c = i.useMemo(() => i.createElement(p.Z, { loadingAccessibilityLabel: _, module: a, refreshControl: null, renderEmptyState: S, title: C }), [a]),
                    { communityResults: s } = (0, h.p)(I, { communityId: e }),
                    d = "Community" === s?.result?.__typename && s.result,
                    y = i.useMemo(() => `#${t.join(" #")}`, [t]),
                    f = i.useMemo(() => ({ selectedCommunityId: e, defaultText: y, positionCursorAtBeginning: !0 }), [e, y]);
                return d && t.length > 0 ? i.createElement(m.Z, { backLocation: `/i/communities/${e}`, composeOptions: f, history: n, primaryContent: c, secondaryBar: r, sidebarContent: i.createElement(l.Z, null), subtitle: d.name, title: y }) : i.createElement(b.Z, { to: `/i/communities/${e}` });
            }
            const w = () => i.createElement(d.H, { errorConfig: v }, i.createElement(x, null)),
                M = (0, y.Z)(w, { page: "community", section: "hashtag_results" });
        },
        400901: (e, t, n) => {
            n.r(t), n.d(t, { CommunityInviteScreen: () => $, default: () => U });
            var a = n(202784),
                i = n(325686),
                o = n(834324),
                r = n(731708),
                c = n(457311),
                s = n(154003),
                l = n(392237),
                m = n(111677),
                u = n.n(m),
                d = n(615656),
                p = n(980407),
                y = n(253558),
                g = n(874088),
                h = n(339110),
                b = n(312771),
                f = n(615027),
                E = n(71620),
                _ = n(668214),
                C = n(491963),
                Z = n(182846);
            const S = (0, _.Z)()
                    .propsFromState(() => ({ fetchStatus: Z.YE, error: Z.Kz, community: Z.ZM }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, E.zr)("COMMUNITY_INVITE_SCREEN"), fetchCommunityIfNeeded: C.ZP.fetchOneIfNeeded }))
                    .withAnalytics({ page: "community", section: "invite" }),
                v = u().b139b54a,
                I = u().dfddd842,
                x = u().cf4898a0,
                k = u().a3b3939b,
                w = u().db4f0cc9,
                M = u().h252ede6,
                P = u().a5cd93f9,
                F = u().ba5a88e4,
                z = u().i6568549,
                H = u().b772cd66,
                O = u().b4f16d00,
                T = u().ja1387a8,
                A = u().b92a21d9,
                B = u().ae85768c,
                L = [],
                D = [h.my.CommunityUsers],
                N = 999;
            function $(e) {
                const { community: t, createLocalApiErrorHandler: n, error: l, fetchCommunityIfNeeded: m, fetchStatus: u } = e,
                    { invites_result: E } = t || {},
                    _ = e.match.params.communityId || "",
                    [C, Z] = a.useState(""),
                    [S, $] = a.useState({}),
                    [U, V] = a.useState({});
                a.useEffect(() => {
                    _ && m(_).catch(n());
                }, [_, n, m]);
                const j = a.useMemo(() => {
                        if (C.length > 0 || !t) return L;
                        if ("CommunityInvites" === E.__typename) {
                            return E.users_to_invite_slice.items.map(h.O0).filter(Boolean);
                        }
                        return L;
                    }, [t, E, C.length]),
                    W = a.useCallback(
                        (e, t) => {
                            $((n) => ({ ...n, [e]: t }));
                        },
                        [$],
                    ),
                    q = a.useCallback(
                        (e) => {
                            V((t) => ({ ...t, [e]: !0 }));
                        },
                        [V],
                    ),
                    Y = a.createElement(s.ZP, { onPress: () => e.history.goBack(), size: "small", type: "brandFilled" }, H);
                return u === b.ZP.LOADING
                    ? null
                    : "CommunityInvitesUnavailable" === E?.__typename
                      ? a.createElement(f.Z, { to: _ ? `/i/communities/${_}` : "/" })
                      : _ && l && (0, d.VZ)(l, d.ZP.CommunityNotFound)
                        ? a.createElement(f.Z, { to: `/i/communities/${_}` })
                        : a.createElement(
                              p.Z,
                              { history: e.history, rightControl: Y, subtitle: I, title: v },
                              (() => {
                                  const e = E?.remaining_invite_count || 0,
                                      t = e > N;
                                  return "CommunityInvites" === E?.__typename && !t && a.createElement(i.Z, { style: R.callout }, a.createElement(o.Z, { text: z({ remaining_invite_count: e }) }));
                              })(),
                              a.createElement(g.default, {
                                  alwaysOpen: !0,
                                  communityId: e.match.params.communityId || void 0,
                                  filter: D,
                                  getItemDisabledMessage: (e) => {
                                      if ("user" === e.type) {
                                          const { id_str: t, screen_name: n } = e.data,
                                              a = S[t];
                                          if ("UserCommunityInviteActionUnavailable" === a?.__typename)
                                              switch (a.reason) {
                                                  case "UserIsInvited":
                                                      return k({ screen_name: n });
                                                  case "UserIsMember":
                                                      return w({ screen_name: n });
                                                  case "ViewerOutOfInvites":
                                                      return M;
                                                  default:
                                                      return a.message ?? P({ screen_name: n });
                                              }
                                      }
                                  },
                                  getItemIsDisabled: (e) => {
                                      if ("user" === e.type) {
                                          const { id_str: t } = e.data,
                                              n = S[t];
                                          return !U[t] && "UserCommunityInviteAction" !== n?.__typename;
                                      }
                                      return !0;
                                  },
                                  injectedItems: j,
                                  inputStyle: R.textInput,
                                  isModal: !0,
                                  onQueryChange: (e) => {
                                      Z(e);
                                  },
                                  placeholder: x,
                                  renderEmptyState: () => a.createElement(c.Z, { header: O, message: T }),
                                  renderHeader: () => 0 === C.length && a.createElement(i.Z, { style: R.input }, a.createElement(r.ZP, { size: "headline2", weight: "heavy" }, F)),
                                  renderNoResultsState: () => a.createElement(c.Z, { header: A({ query: C }), message: B }),
                                  renderUserDecoration: ({ userId: e }) => a.createElement(y.Z, { communityId: _, onInvite: q, onInviteActionResultChange: W, userId: e, viewerInvited: U[e] }),
                                  rounded: !0,
                                  shouldAutoFocus: !0,
                                  shouldFocusOnClear: !0,
                                  source: h._4.CommunityInvites,
                                  style: R.input,
                              }),
                          );
            }
            const R = l.default.create((e) => ({ callout: { marginHorizontal: e.spaces.space16, marginTop: e.spaces.space8, fontWeight: e.fontWeights.bold }, input: { marginHorizontal: e.spaces.space16, marginVertical: e.spaces.space8 }, textInput: { marginBottom: e.spaces.space8 }, dropdownText: { marginHorizontal: e.spaces.space20, marginVertical: e.spaces.space40 } })),
                U = S($);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Communities-5d92a2cf.96e58fca.js.map
