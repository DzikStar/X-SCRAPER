"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpacePeek~bundle.Communities~loader.CommunityHandler-63cb1cc4"],
    {
        450562: (e, t, n) => {
            n.d(t, { V: () => s, Z: () => r });
            var i = n(189676),
                a = n(545521);
            const s = (e) => `communitiesMembershipsSlice-${e}`,
                r = (e) => (0, a.Z)({ contextSuffix: "COMMUNITIES_MEMBERSHIPS_SLICE", getFetchApiEndpoint: (e) => e.withEndpoint(i.Z).fetchCommunitiesMembershipsSlice, getEndpointParams: (e) => e, sliceKey: s(e) });
        },
        299226: (e, t, n) => {
            n.d(t, { Lm: () => d, Wr: () => p, tV: () => y });
            n(136728);
            var i = n(491963),
                a = n(56519),
                s = n(709318),
                r = n(872788),
                o = n(390387),
                c = n(841198),
                l = n(919022),
                u = n(172497),
                m = n(450562);
            const d =
                    (e) =>
                    (t, n, { api: a }) =>
                        t(i.ZP.join(e)).then((a) => {
                            const l = n(),
                                d = ((e, t) => (e.some((e) => e === t) ? e : [t, ...e]))((0, u.eF)(l), e),
                                p = [(0, u.H_)(d)],
                                y = (0, o._h)(l);
                            y && p.push((0, c.Be)((0, m.V)(y)));
                            const h = a?.entities?.communities[e];
                            return h && (p.push(i.ZP.updateOne(e, h)), h.is_pinned && p.push((0, s.Co)({ id: e, name: h.name, type: r.FO.COMMUNITY }))), t(p);
                        }),
                p =
                    (e) =>
                    (t, n, { api: a }) =>
                        t(i.ZP.leave(e)).then((a) => {
                            const d = n(),
                                p = ((e, t) => e.filter((e) => t !== e))((0, u.eF)(d), e),
                                y = [(0, u.H_)(p)],
                                h = (0, o._h)(d);
                            h && y.push((0, c.Be)((0, m.V)(h)));
                            const f = a?.entities?.communities[e];
                            if (f) {
                                const t = l.ZP.selectViewerUser(d);
                                f.membersFacepileUrls && t?.profile_image_url_https && (f.membersFacepileUrls = f.membersFacepileUrls?.filter((e) => e !== t?.profile_image_url_https)), y.push(i.ZP.updateOne(e, f)), y.push((0, s.Vu)({ id: e, name: f.name, type: r.FO.COMMUNITY }));
                            }
                            return t(y);
                        }),
                y =
                    (e, t) =>
                    (n, s, { api: r }) =>
                        n(i.ZP.invite(e, { userId: t })).then((r) => {
                            const o = s();
                            if (r)
                                switch (r.type) {
                                    case "UserCommunityRelationship": {
                                        r.normalized.entities && n((0, a.dP)(r.normalized.entities));
                                        const t = ((e, t, n) => {
                                            const a = e.entities.communities.entities[t];
                                            if ("CommunityInvites" === a?.invites_result.__typename) {
                                                const e = { invites_result: { ...a.invites_result, remaining_invite_count: n(a.invites_result.remaining_invite_count) } };
                                                return i.ZP.updateOne(a.id_str, e);
                                            }
                                        })(o, e, () => r.remainingInviteCount);
                                        t && n(t);
                                        break;
                                    }
                                    case "UserCommunityInviteActionUnavailable": {
                                        const i = `${e}_${t}`,
                                            s = { id_str: i, __typename: "UserCommunityInviteActionUnavailable", reason: r.reason, message: r.message };
                                        n((0, a.dP)({ userCommunityInviteActionResult: { [i]: s } }));
                                        break;
                                    }
                                }
                        });
        },
        492057: (e, t, n) => {
            n.d(t, { BL: () => a, tc: () => s });
            var i = n(491963);
            const a = (e, t) => {
                    if (t.communityId) return i.ZP.select(e, t.communityId);
                },
                s = (e, t, n) => {
                    const a = n || t.communityId;
                    if (a) return i.ZP.selectFetchStatus(e, a);
                };
        },
        545521: (e, t, n) => {
            n.d(t, { Z: () => m });
            var i = n(99107),
                a = n(166852),
                s = n(841198),
                r = n(917799),
                o = n(312771),
                c = n(56519),
                l = n(877848);
            const u = (e) => [(0, c.dP)(e)];
            function m({ contextSuffix: e, getEndpointParams: t, getFetchApiEndpoint: n, mapEntitiesToActions: c = u, sliceKey: m, injectionOptions: { identityFunction: d } = {} }) {
                const p = [],
                    y = (e) => e[s.Yf]?.[m],
                    h = (e) => {
                        const t = y(e);
                        if (!t) return p;
                        const n = t.items || p,
                            i = t.injections;
                        return i?.length > 0 ? (0, a.Z)(i.concat(n), d) : n;
                    },
                    f = (e) => {
                        const t = y(e),
                            n = h(e),
                            i = n?.length > 0;
                        return t ? (0, o.ke)(t.fetchStatus, i) : o.ZP.NONE;
                    },
                    b =
                        (i) =>
                        (a, o, { api: l }) => {
                            const u = t(i);
                            return (0, r._O)(a, { params: u, request: n(l) })(s.t5({ contextSuffix: e, params: i, sliceKey: m }), (e) => {
                                if (e) return c(e.entities);
                            });
                        };
                return {
                    select: y,
                    selectItems: h,
                    selectFetchStatus: f,
                    fetch: b,
                    fetchIfNeeded: (e) => (t, n) => {
                        const a = n(),
                            s = y(a),
                            r = f(a);
                        return !s || (r !== o.ZP.LOADING && r !== o.ZP.LOADED) ? t(b(e)) : i.O4.resolve();
                    },
                    fetchBottom: (e) => (t, n) => {
                        const a = n(),
                            s = y(a),
                            r = ((e) => {
                                const t = y(e);
                                return t?.cursors?.next_cursor;
                            })(a);
                        return s.fetchStatus[l.Yj.BOTTOM] !== o.ZP.LOADING && r ? t(b({ ...e, cursor: r })) : i.O4.resolve();
                    },
                    injectItems: (e) => s.WC({ items: e, sliceKey: m, identityFunction: d }),
                    removeItems: (e) => s.Er({ items: e, sliceKey: m, identityFunction: d }),
                };
            }
        },
        841198: (e, t, n) => {
            n.d(t, { Be: () => E, Er: () => w, Ev: () => f, WC: () => _, Yf: () => m, t5: () => Z });
            n(571372);
            var i = n(166852),
                a = n(370751),
                s = n(499627),
                r = n(917799),
                o = n(312771),
                c = n(877848);
            const l = {},
                u = [],
                m = "slices",
                d = () => ({ cursors: {}, fetchStatus: { top: o.ZP.NONE, bottom: o.ZP.NONE }, items: u, injections: u }),
                p = (0, r.dg)("rweb/slices", "FETCH");
            const y = (e, t) => {
                    if (!t) return e;
                    switch (t.type) {
                        case p.REQUEST: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, fetchStatus: { ...e.fetchStatus, [n]: o.ZP.LOADING } } : e;
                        }
                        case p.SUCCESS: {
                            const { direction: n } = t.meta,
                                a = t.payload,
                                s = e.items;
                            return !n || a instanceof Error ? e : { ...e, items: (0, i.Z)(s.concat(a?.result)), cursors: { ...a?.slice_info }, error: null, fetchStatus: { ...e.fetchStatus, [n]: o.ZP.LOADED } };
                        }
                        case p.FAILURE: {
                            const { direction: n } = t.meta;
                            return n ? { ...e, error: t.payload, fetchStatus: { ...e.fetchStatus, [n]: o.ZP.FAILED } } : e;
                        }
                        default:
                            return e;
                    }
                },
                h = "rweb/slices/CLEAR_PARTIAL_SLICES_CACHE",
                f = (e) => ({ type: h, meta: { sliceKey: e } }),
                b = "rweb/slices/DELETE_SLICE",
                E = (e) => ({ type: b, meta: { sliceKey: e } }),
                v = "rweb/slices/RESTORE_SLICE",
                g = "rweb/slices/INJECT_ITEMS_SLICE",
                _ = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: g, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                C = "rweb/slices/REMOVE_ITEMS_SLICE",
                w = ({ identityFunction: e, items: t, sliceKey: n }) => ({ type: C, meta: { sliceKey: n, identityFunction: e }, payload: t }),
                Z = ({ contextSuffix: e, params: t, sliceKey: n }) => ({ actionTypes: p, context: `FETCH_${e}`, meta: { sliceKey: n, direction: t?.cursor ? c.Yj.BOTTOM : c.Yj.TOP } });
            s.Z.register({
                [m]: function (e = l, t) {
                    if (!t) return e;
                    const { sliceKey: n } = t.meta || {};
                    if (!n) return e;
                    switch (t.type) {
                        case b: {
                            const t = { ...e };
                            return delete t[n], t;
                        }
                        case v:
                            return { ...e, [n]: t.payload };
                        case h: {
                            const t = { ...e };
                            return (
                                Object.keys(t).forEach((e) => {
                                    e.includes(n) && delete t[e];
                                }),
                                t
                            );
                        }
                        case g: {
                            const a = e[n] || d(),
                                s = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                r = Array.isArray(t.payload) ? t.payload : void 0;
                            return r?.length ? { ...e, [n]: { ...a, injections: (0, i.Z)(r.concat(a.injections), s) } } : e;
                        }
                        case C: {
                            const i = e[n] || d(),
                                s = t.meta.identityFunction ? t.meta.identityFunction : void 0,
                                r = Array.isArray(t.payload) ? (0, a.Z)(s ? t.payload.map(s) : t.payload) : void 0,
                                o = (e, t) => !r?.has(s ? s(e, t, i.injections) : e);
                            return r?.size ? { ...e, [n]: { ...i, injections: i.injections.filter(o), items: i.items.filter(o) } } : e;
                        }
                        default: {
                            const i = e[n] || d(),
                                a = y(i, t);
                            return { ...e, [n]: { ...a } };
                        }
                    }
                },
            });
        },
        278817: (e, t, n) => {
            n.d(t, { ZP: () => Q });
            var i = n(807896),
                a = n(202784),
                s = n(325686),
                r = n(107267),
                o = n(154003),
                c = n(723587),
                l = n(529356),
                u = n(392237),
                m = n(111677),
                d = n.n(m),
                p = n(870358),
                y = n(581335),
                h = n(71620),
                f = n(668214),
                b = n(491963),
                E = n(299226),
                v = n(492057),
                g = n(919022),
                _ = n(182846);
            const C = (0, f.Z)()
                .propsFromState(() => ({ community: v.BL, viewerUser: g.ZP.selectViewerUser, joinActionResultType: _.HN }))
                .adjustStateProps((e) => {
                    const { viewerUser: t, ...n } = e;
                    return { isProtectedUser: t?.protected, ...n };
                })
                .propsFromActions(() => ({ createLocalApiErrorHandler: (0, h.zr)("COMMUNITY_DETAIL"), join: E.Lm, requestToJoin: b.ZP.requestToJoin, leave: E.Wr }));
            var w = n(708852),
                Z = n(386802),
                I = n(138099),
                S = n(757700);
            function A(e) {
                const { children: t, onMaskClick: n } = e,
                    i = (0, w.D2)(),
                    s = a.useMemo(() => ({ isModal: i }), [i]);
                let r = { type: "full" };
                return i && (r = { ...r, onMaskClick: n, enableMaskForDismiss: !0, allowBackNavigation: !0, withKeyboardNavigation: !0, withMask: !0, style: S.CA[S.Cg.fixed] }), a.createElement(Z.Z.Provider, { value: s }, a.createElement(I.Z, r, t));
            }
            const P = a.memo(A);
            var M = n(731708);
            const R = d().bc7a7af4,
                O = ({ offendingRule: e }) => a.createElement(s.Z, null, e ? a.createElement(s.Z, { style: F.offendingRule }, ((e) => a.createElement(d().I18NFormatMessage, { $i18n: "jb124a07" }, a.createElement(M.ZP, { weight: "bold" }, d().a0e0a52c({ offendingRule: e }))))(e)) : null, a.createElement(M.ZP, null, R)),
                F = u.default.create((e) => ({ offendingRule: { display: "flex", marginBottom: e.spaces.space12 } })),
                L = d().hafa07f2,
                V = d().e7969518,
                N = d().c15bee32,
                U = d().efa265fc,
                j = a.createElement(d().I18NFormatMessage, { $i18n: "gb7eca21" }, a.createElement(M.ZP, { link: "/settings/audience_and_tagging" }, d().fe832999)),
                T = d().fc2a5c92,
                x = d().f9cecf48,
                k = d().bf7bdb60,
                q = d().h27d6950,
                D = d().b02360f6,
                H = Object.freeze({ joinAvailable: "CommunityJoinAction", joinUnavailable: "CommunityJoinActionUnavailable", leaveAvailable: "CommunityLeaveAction", leaveUnavailable: "CommunityLeaveActionUnavailable" }),
                K = Object.freeze({ Unavailable: "Unavailable", ViewerNotMember: "ViewerNotMember", ViewerIsSoleAdmin: "ViewerIsSoleAdmin" }),
                z = Object.freeze({ Unavailable: "Unavailable", ViewerIsMember: "ViewerIsMember", ViewerIsRemoved: "ViewerIsRemoved", ViewerNotInvited: "ViewerNotInvited", ViewerIsProtected: "ViewerIsProtected", ViewerRequestPending: "ViewerRequestPending", ViewerJoinRequestRequired: "ViewerRequestRequired" });
            const J = d().e6057014,
                B = d().b5334780,
                Y = { follow: d().b171d7c4, following: d().aa7ae3f6, unfollow: d().bb1d57b6 },
                $ = d().j24c37b2,
                W = (e) => {
                    const [t, n] = a.useState(void 0),
                        [u, m] = a.useState(!1),
                        d = { history: (0, r.useHistory)(), location: (0, r.useLocation)(), match: (0, r.useRouteMatch)() },
                        { community: h, createLocalApiErrorHandler: f, isProtectedUser: b, join: E, leave: v, onCommunityMembershipChange: g, onJoinClick: _, requestToJoin: C } = e,
                        { actions: w, id_str: Z, name: I, role: S } = h,
                        A = w?.join_action_result,
                        M = w?.leave_action_result,
                        R = (0, p.Wh)(S),
                        F = A?.reason === z.ViewerJoinRequestRequired,
                        W = A?.reason === z.ViewerRequestPending,
                        Q = a.useCallback(() => {
                            const { rules: e, viewerViolatedRule: t } = h,
                                { canAction: i, message: s } = (function (e, t, n) {
                                    const { __typename: i, message: s, reason: r } = e,
                                        o = (e) => ({ canAction: !0, message: e }),
                                        c = (e) => ({ canAction: !1, message: e }),
                                        l = c({ headline: x, text: k });
                                    switch (i) {
                                        case H.joinAvailable:
                                            return o();
                                        case H.joinUnavailable:
                                            switch (r) {
                                                case z.ViewerIsRemoved:
                                                    return c({ headline: N, text: a.createElement(O, { offendingRule: n?.name }) });
                                                case z.ViewerNotInvited:
                                                    return c({ headline: L, text: V });
                                                case z.ViewerIsProtected:
                                                    return t ? c({ headline: U, text: j }) : o();
                                                case z.Unavailable:
                                                    return c({ headline: x, text: s });
                                                case z.ViewerJoinRequestRequired:
                                                    return o();
                                                default:
                                                    return l;
                                            }
                                        default:
                                            return l;
                                    }
                                })(A, b, t);
                            _ && _(), !i && s && n(s), i && (e && e.length > 0 ? m(!0) : F ? C(Z).catch(f({})) : E(Z).then(g).catch(f({})));
                        }, [h, Z, f, b, E, F, A, C, g, _]),
                        X = a.useCallback(() => {
                            const { canAction: e, message: t } = (function (e) {
                                const { __typename: t, reason: n } = e,
                                    i = (e) => ({ canAction: !1, message: e }),
                                    a = i({ headline: T, text: k });
                                switch (t) {
                                    case H.leaveAvailable:
                                        return { canAction: !0, message: s };
                                    case H.leaveUnavailable:
                                        return n === K.ViewerIsSoleAdmin ? i({ headline: q, text: D }) : a;
                                    default:
                                        return a;
                                }
                                var s;
                            })(M);
                            !e && t && n(t), e && v(Z).then(g).catch(f({}));
                        }, [Z, f, v, M, g]),
                        ee = a.useCallback(() => {
                            n(void 0);
                        }, []),
                        te = a.useCallback(() => {
                            m(!1);
                        }, []),
                        ne = a.useMemo(() => (F ? { ...Y, follow: J } : Y), [F]);
                    return a.createElement(s.Z, { style: G.button }, u ? a.createElement(P, { onMaskClick: te }, a.createElement(y.default, (0, i.Z)({ communityId: Z, onCommunityMembershipChange: g, onDismiss: te }, d))) : null, W ? a.createElement(o.ZP, { disabled: !0, type: "primaryOutlined" }, B) : I ? a.createElement(c.Z, { buttonText: ne, isFollowing: R, name: I, onFollow: Q, onUnfollow: X, type: "community" }) : null, t ? a.createElement(l.Z, { actionLabel: $, graphicDisplayMode: "none", headline: t.headline, onAction: ee, onClose: ee, subtext: t.text, withCloseButton: !1 }) : null);
                },
                G = u.default.create((e) => ({ button: { justifyContent: "right" } })),
                Q = C((e) => {
                    const { community: t, communityId: n, match: s, ...r } = e;
                    return t ? a.createElement(W, (0, i.Z)({ community: t }, r)) : null;
                });
        },
        581335: (e, t, n) => {
            n.r(t), n.d(t, { CommunityRulesModal: () => U, default: () => j });
            var i = n(202784),
                a = n(325686),
                s = n(731708),
                r = n(154003),
                o = n(834324),
                c = n(661810),
                l = n(855488),
                u = n(392237),
                m = n(111677),
                d = n.n(m),
                p = n(211971),
                y = n(980407),
                h = n(699910),
                f = n(724328),
                b = n(443781),
                E = n(870358),
                v = n(87063),
                g = n(615027),
                _ = n(71620),
                C = n(668214),
                w = n(491963),
                Z = n(299226),
                I = n(492057),
                S = n(182846);
            const A = (e, t) => {
                    const { communityId: n, location: i } = t;
                    return n ? I.BL(e, t) : i.state?.community || S.ZM(e, t);
                },
                P = (0, C.Z)()
                    .propsFromState(() => ({ community: A, fetchStatus: S.YE, isCommunityMember: S.Cp }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("COMMUNITY_RULES_SCREEN"), join: Z.Lm, requestToJoin: w.ZP.requestToJoin, fetchCommunityIfNeeded: w.ZP.fetchOneIfNeeded }))
                    .withAnalytics({ page: "community", section: "rules", component: "modal" }),
                M = d().h4fbfa58,
                R = d().ea8cfb1e,
                O = d().dc1b14a1,
                F = d().fc2a5c92,
                L = d().c966ac64,
                V = d().g690e07e,
                N = d().a5d21bf4,
                U = (e) => {
                    const { community: t, createLocalApiErrorHandler: n, fetchCommunityIfNeeded: u, fetchStatus: m, history: d, isCommunityMember: _, join: C, match: w, onCommunityMembershipChange: Z, onDismiss: I, requestToJoin: S } = e,
                        [A, P] = i.useState(""),
                        U = i.useCallback(
                            (e) => {
                                P(e.target.value);
                            },
                            [P],
                        ),
                        { featureSwitches: j } = i.useContext(b.rC),
                        x = j.getNumberValue("c9s_max_community_answer_length", 280),
                        k = j.isTrue("c9s_community_answer_box_join_page_enabled"),
                        q = e.communityId || w.params.communityId,
                        D = "ViewerRequestRequired" === t?.actions?.join_action_result?.reason,
                        [H, K] = i.useState(!1);
                    i.useEffect(() => {
                        q && !t && m !== v.Z.LOADED && u(q).catch(n());
                    });
                    const z = i.useCallback((e) => i.createElement(s.ZP, { size: "title4", weight: "bold" }, O({ communityName: e })), []),
                        J = D ? R : M,
                        B = i.useCallback(() => {
                            if (t) {
                                const { id_str: e } = t;
                                if (D)
                                    return void S(e, { answer: A })
                                        .then((e) => {
                                            if ("CommunityJoinRequest" === e?.type) I();
                                            else K(!0);
                                        })
                                        .catch(n);
                                C(e).then(Z).then(I).catch(n());
                            }
                        }, [A, t, n, K, C, D, Z, I, S]),
                        Y = i.useCallback(() => i.createElement(r.ZP, { onPress: B, size: "small", type: "brandFilled" }, J), [J, B]),
                        $ = H ? i.createElement(a.Z, { style: T.error }, i.createElement(o.Z, { Icon: p.default, headline: F, text: L, type: "danger" })) : void 0;
                    if (t) {
                        const { name: e, question: n, rules: r } = t;
                        return r && r.length && !_ ? i.createElement(y.Z, { history: d, onBackClick: I, rightControl: Y(), title: (0, f.E)({ communityName: e }) }, i.createElement(c.Z, { spacing: "space2" }), n && "" !== n?.trim() && D && k && i.createElement(a.Z, null, i.createElement(s.ZP, { size: "title4", style: T.divStyles, weight: "bold" }, n), i.createElement(l.Z, { calculateLength: E.Z, helperText: N, label: V, maxLength: x, multiline: !0, name: "typedJoinRequestAnswer", numberOfLines: 3, onChange: U }), i.createElement(c.Z, { spacing: "space2" })), $, i.createElement(h.Z, { badgeStyle: T.badgeStyle, headerContainerStyle: T.containerStyle, headerExplanationStyle: T.headerExplanationStyle, heading: z(e), rules: r })) : i.createElement(g.Z, { to: `/i/communities/${t.id_str}` });
                    }
                    return m === v.Z.LOADED ? i.createElement(g.Z, { to: "/" }) : null;
                },
                j = P(U),
                T = u.default.create((e) => ({ error: { paddingHorizontal: e.spaces.space16 }, badgeStyle: { marginEnd: e.spaces.space16 }, headerExplanationStyle: { marginTop: e.spaces.space8 }, containerStyle: { paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.componentDimensions.gutterHorizontal }, divStyles: { marginEnd: e.spaces.space16, marginTop: e.spaces.space8, marginStart: e.spaces.space16 } }));
        },
        182846: (e, t, n) => {
            n.d(t, { Cp: () => u, Dt: () => m, HN: () => p, Kz: () => l, XH: () => r, YE: () => d, ZM: () => c, be: () => s, sq: () => o });
            var i = n(870358),
                a = n(491963);
            n(919022);
            const s = (e, t) => t.match.params.screenName || void 0,
                r = (e, t) => t.match.params.communityId || void 0,
                o = (e, t) => t.match.params.communityRuleId || void 0,
                c = (e, t) => {
                    const n = r(e, t);
                    return n ? a.ZP.select(e, n) : void 0;
                },
                l = (e, t) => {
                    const n = r(e, t);
                    if (n) return a.ZP.selectErrors(e)[n];
                },
                u = (e, t) => {
                    const n = c(e, t);
                    return (0, i.Wh)(n?.role);
                },
                m = (e, t) => {
                    const n = c(e, t),
                        i = o(e, t);
                    return n?.rules?.find((e) => e.rest_id === i);
                },
                d = (e, t, n) => {
                    const i = n || r(e, t);
                    if (i) return a.ZP.selectFetchStatus(e, i);
                },
                p = (e, t) => {
                    const n = c(e, t);
                    return n?.actions?.join_action_result?.__typename;
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpacePeek~bundle.Communities~loader.CommunityHandler-63cb1cc4.8eaf491a.js.map
