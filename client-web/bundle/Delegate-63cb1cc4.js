"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Delegate-63cb1cc4"],
    {
        58174: (e, t, n) => {
            n.d(t, { e: () => u });
            var a = n(202784),
                r = n(57074),
                l = n.n(r),
                o = n(585488),
                c = n(956926),
                s = n.n(c),
                i = n(67644),
                m = n(535338);
            function u(e, t, n) {
                const r = l()(t),
                    [, c] = a.useState(0),
                    u = a.useMemo(() => s()((0, o.getRequest)(e).params, r), [e, r]),
                    d = (0, i.h)(),
                    g = a.useCallback(() => {
                        d.incrementFetchKey(u), d.flush(), c((e) => e + 1);
                    }, [d, u]),
                    p = (0, m.p)(e, t, n);
                return a.useMemo(() => ({ data: p, refetch: g }), [p, g]);
            }
        },
        366305: (e, t, n) => {
            n.r(t), n.d(t, { ConfirmSwitchModal: () => v, default: () => _ });
            var a = n(202784),
                r = n(332920),
                l = n.n(r),
                o = n(105131),
                c = n(193850),
                s = n(25704),
                i = n(782642),
                m = n(125363),
                u = n(175856),
                d = n(390387),
                g = n(466441),
                p = n(997210);
            const b = l().b2ca74aa,
                h = l().ba77b438,
                f = l().cfd2f35e,
                E = l().g5261e91,
                C = l().ef4602ec,
                y = l().cc15a3ea,
                Z = l().e406250c,
                v = ({ history: e, location: t, match: n }) => {
                    const r = (0, i.p)(),
                        l = t?.state?.delegateUser,
                        o = (0, c.Au)(l?.userId),
                        v = o?.handle.result.legacy.screen_name,
                        _ = (0, m.I0)(),
                        k = a.useCallback(() => {
                            l &&
                                v &&
                                (_((0, d.vU)(l))
                                    .then(() => {
                                        r({ text: E({ screenName: v }), withClearButton: !0, withAutoDismiss: !0 });
                                    })
                                    .catch(() => {
                                        r({ text: C, withClearButton: !0, withAutoDismiss: !0 });
                                    }),
                                e.goBack());
                        }, [l, v, _, e, r]),
                        w = a.useCallback(() => {
                            e.goBack();
                        }, [e]);
                    return l && o ? a.createElement(s.Z, { actionLabel: h, enableMaskForDismiss: !0, flag: u.s7, graphicDisplayMode: "icon", headline: b, isFullHeightOnMobile: !0, onAction: k, onClose: w, onSecondaryAction: w, secondaryActionLabel: f, shouldAddEducationFlagOnClose: !1, shouldAddEducationFlagOnPrimary: !1, shouldAddEducationFlagOnSecondary: !1, subtext: "Admin" === o.role ? y : Z, supportUrl: p.L, withCloseButton: !0 }) : a.createElement(g.default, { history: e, location: t, match: n });
                },
                _ = (0, o.P3)(v);
        },
        819761: (e, t, n) => {
            n.r(t), n.d(t, { GroupsModal: () => y, default: () => v, groupsModalQuery: () => C });
            var a = n(354907),
                r = n(202784),
                l = n(325686),
                o = (n(585488), n(712696)),
                c = n.n(o),
                s = n(731708),
                i = n(392237),
                m = n(332920),
                u = n.n(m),
                d = n(980407),
                g = n(736063),
                p = n(553660),
                b = n(888068);
            const h = u().eccbfa26,
                f = u().f5c41e22,
                E = { context: "DelegateGroupsModal" },
                C = a.Z,
                y = ({ history: e }) => {
                    const t = c()(C, {}),
                        n = t.viewer_v2?.user_results?.result,
                        a = r.useMemo(() => ({ loggedInUser: "User" === n?.__typename ? r.createElement(p.Z, { profileImageUrl: n.legacy?.profile_image_url_https || void 0, user: n, withLink: !0 }) : null, message: r.createElement(s.ZP, { weight: "bold" }) }), [n]),
                        o = r.useMemo(() => ("User" === n?.__typename ? r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: Z.secondaryBar }, r.createElement(u().I18NFormatMessage, { $i18n: "a9ec3729" }, r.cloneElement(a.message, null, u().b9226ec1), r.cloneElement(a.loggedInUser, null, u().f47b48f6))) : null), [n, a]);
                    return r.createElement(d.Z, { backButtonType: "close", bottomBar: r.createElement(l.Z, { style: Z.bottomBar }, r.createElement(s.ZP, { link: "/settings/delegate" }, f)), history: e, secondaryBar: o, title: h }, r.createElement(l.Z, { style: Z.container }, r.createElement(g.H, { errorConfig: E }, r.createElement(b.Groups, null))));
                },
                Z = i.default.create((e) => ({ container: { paddingBottom: e.spaces.space16 }, secondaryBar: { display: "flex", lineHeight: e.spaces.space24, padding: e.spaces.space16, paddingBottom: 0 }, bottomBar: { display: "flex", justifyContent: "center", flexDirection: "row", padding: e.spaces.space16 } })),
                v = r.memo(y);
        },
        892660: (e, t, n) => {
            n.r(t), n.d(t, { DelegateNotSupported: () => h, default: () => f });
            var a = n(202784),
                r = n(731708),
                l = n(529356),
                o = n(332920),
                c = n.n(o),
                s = n(125363),
                i = n(390387),
                m = n(997210);
            const u = c().e6718a62,
                d = a.createElement(c().I18NFormatMessage, { $i18n: "g0aa3be7" }, a.createElement(r.ZP, { link: m.L }, c().ba411b6f)),
                g = a.createElement(c().I18NFormatMessage, { $i18n: "g29b68f9" }, a.createElement(r.ZP, { link: m.L }, c().f01ee14b)),
                p = c().j24c37b2,
                b = c().ba77b438;
            function h({ history: e, location: t }) {
                const n = t.state?.goHome,
                    r = (0, s.v9)(i.vd),
                    o = a.useCallback(() => {
                        n ? e.replace("/home") : e.goBack({ backLocation: "/home" });
                    }, [n, e]),
                    c = a.useCallback(() => {
                        e.replace("/account/switch");
                    }, [e]);
                return a.createElement(l.Z, { actionLabel: p, graphicDisplayMode: "none", headline: u, isFullHeightOnMobile: !0, onAction: o, onSecondaryAction: c, secondaryActionLabel: b, subtext: "Admin" === r ? g : d });
            }
            const f = h;
        },
        466441: (e, t, n) => {
            n.r(t), n.d(t, { NotFoundScreen: () => C, default: () => Z });
            n(571372);
            var a = n(202784),
                r = n(386802),
                l = n(108362),
                o = n(392237),
                c = n(332920),
                s = n.n(c),
                i = n(187669),
                m = n(449067),
                u = n(38293),
                d = n(231035),
                g = n(652904),
                p = n(952793),
                b = n(163889),
                h = n(725516);
            const f = s().ba929da8,
                E = s().d203e242;
            function C(e) {
                const { splat: t } = e.match.params,
                    { isModal: n } = a.useContext(r.Z),
                    o = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        o && t && (0, b.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    a.createElement(g.Z, null, a.createElement(m.Z.Configure, { backLocation: "/", documentTitle: f, title: E }), a.createElement(l.Z, { style: n && y.modal }, a.createElement(d.Z, null)), a.createElement(u.Z, { title: f, withMeta: !1 }))
                );
            }
            const y = o.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                Z = (0, h.Z)(C, { page: "not_found" });
        },
        10679: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S, groupDetailQuery: () => x });
            var a = n(730319),
                r = n(202784),
                l = (n(585488), n(107267)),
                o = n(943401),
                c = n(242454),
                s = n(661810),
                i = n(332920),
                m = n.n(i),
                u = n(652904),
                d = n(736063),
                g = n(725516),
                p = n(58174),
                b = n(264922),
                h = n(838737),
                f = n(460701),
                E = n(153785),
                C = n(997210),
                y = n(958394);
            const Z = m().d2da668c,
                v = m().ddf27b8e,
                _ = m().jba63182,
                k = m().af59527e,
                w = m().i859a9d4,
                x = a.Z;
            function P() {
                const e = (0, l.useLocation)(),
                    t = (0, l.useParams)(),
                    [n, a] = r.useState(!1),
                    { data: i, refetch: m } = (0, p.e)(x, { groupId: decodeURIComponent(t.groupId || "") }),
                    u = r.useMemo(() => i?.delegation_group?.members || [], [i?.delegation_group?.members]),
                    d = u.find((e) => e?.user_results?.result?.id === i?.viewer_v2?.user?.id),
                    g = "Admin" === d?.role,
                    P = i.delegation_group?.handle_results?.result,
                    S = P?.rest_id,
                    I = r.useCallback(() => a(!0), []),
                    R = r.useCallback(() => a(!1), []);
                return r.createElement(b.Z, { location: e, title: Z }, r.createElement(o.Z, { description: g ? k : _, learnMoreLabel: w, learnMoreLink: C.L }), g ? r.createElement(r.Fragment, null, r.createElement(c.Z, { color: "primary", label: v, onPress: I }), r.createElement(s.Z, null)) : null, P && S ? r.createElement(f.Z, { memberRole: "Contributor", restId: S, status: y.D.Accepted, userResults: P, viewerRole: "Contributor" }) : null, r.createElement(s.Z, null), r.createElement(E.Z, { delegationMemberships: u, refetch: m, viewerRole: d?.role ?? "Contributor" }), n && i.delegation_group?.rest_id ? r.createElement(h.Z, { delegationGroup: i.delegation_group, delegationGroupId: i.delegation_group.rest_id, isOwner: !1, onDismiss: R, refetchMembers: m }) : null);
            }
            const S = (0, g.Z)(
                function () {
                    return r.createElement(u.Z, null, r.createElement(d.H, { errorConfig: { context: "DelegateGroupDetail" } }, r.createElement(P, null)));
                },
                { page: "settings", section: "delegate", component: "group-detail" },
            );
        },
        888068: (e, t, n) => {
            n.r(t), n.d(t, { Groups: () => Ae, default: () => Me, groupsDelegateQuery: () => Re });
            var a = n(403021),
                r = n(202784),
                l = (n(585488), n(107267)),
                o = n(661810),
                c = n(731708),
                s = n(40610),
                i = n(943401),
                m = n(392237),
                u = n(332920),
                d = n.n(u),
                g = n(652904),
                p = n(736063),
                b = n(943245),
                h = n(725516),
                f = n(125363),
                E = n(390387),
                C = n(58174),
                y = n(264922),
                Z = n(997210),
                v = n(958394),
                _ = n(325204),
                k = n(211150),
                w = n(277660),
                x = n.n(w),
                P = n(793565),
                S = n(673510);
            const I = d().c3153100,
                R = d().cb04a824,
                A = r.memo(({ decoration: e, group: t, userRole: n }) => {
                    const a = x()(P.Z, t),
                        { id: l, legacy: o } = a,
                        { name: c, profile_image_url_https: s, screen_name: i } = o ?? {},
                        m = "Admin" === n ? I : R;
                    return r.createElement(S.ZP, { avatarUri: s || "", decoration: e, displayNameLabel: n ? m : void 0, name: c || "", screenName: i || "", userId: l });
                });
            var L = n(170497),
                M = n(69477),
                z = n(351743),
                D = n.n(z),
                F = n(247056),
                B = n(811176),
                O = n(190286),
                T = n(119232),
                N = n(297896),
                U = n(44946),
                G = n(601576);
            const j = d().fab787b4,
                H = d().bfbe9620,
                V = d().bb1d57b6,
                $ = d().d52a2b36,
                W = d().df515932,
                Q = d().cd00ea21,
                q = d().efa88ab1,
                J = M.Z,
                Y = L.Z;
            function K({ groupId: e, membershipId: t, refetch: n, user: a, userRole: l }) {
                const o = (0, f.I0)(),
                    c = (0, h.z)(),
                    [s] = D()(J),
                    [i, m] = r.useState(null),
                    [u, d] = r.useState(!1),
                    g = x()(Y, a),
                    p = g.legacy.screen_name,
                    b = r.useMemo(() => Q({ screenName: p }), [p]),
                    C = r.useMemo(() => ("Admin" === l ? $ : W), [l]),
                    y = r.useMemo(() => q({ screenName: p }), [p]),
                    Z = (function (e) {
                        const t = (0, U.rS)((0, f.oR)());
                        return r.useCallback(() => {
                            const n = t.dispatch,
                                a = (0, E.sy)(t.getState());
                            a?.userId === e && n((0, E.YJ)());
                        }, [t, e]);
                    })(g.rest_id);
                if (i) throw i;
                const v = r.useCallback(() => {
                        c.scribe({ element: "leave-group", action: "click" }),
                            s({
                                variables: { membershipId: t },
                                onError: (e) => {
                                    m(e);
                                },
                                onCompleted: () => {
                                    o((0, G.fz)({ text: y })), n();
                                },
                                updater: (e) => {
                                    e.invalidateStore(), Z();
                                },
                            });
                    }, [c, s, t, o, y, n, Z]),
                    _ = r.useCallback(() => {
                        d(!1), v();
                    }, [d, v]),
                    k = r.useCallback(() => {
                        d(!1);
                    }, [d]),
                    w = r.useCallback(() => {
                        d(!0);
                    }, [d]);
                return r.createElement(
                    r.Fragment,
                    null,
                    r.createElement(F.Z, {
                        renderActionMenu: (t, n) =>
                            r.createElement(B.Z, {
                                items: [
                                    { Icon: T.default, text: H, link: `/settings/delegate/group/${encodeURIComponent(e)}` },
                                    { Icon: N.default, isEmphasized: !0, text: j, onClick: w },
                                ],
                                onCloseRequested: t,
                                shouldCloseOnClick: !0,
                            }),
                    }),
                    u ? r.createElement(O.Z, { confirmButtonLabel: V, confirmButtonType: "destructiveFilled", headline: b, onCancel: k, onConfirm: _, text: C }) : null,
                );
            }
            var X = n(807896),
                ee = n(831250),
                te = n(610442),
                ne = n(907107),
                ae = n(325686),
                re = n(154003),
                le = n(913973),
                oe = n(837020);
            const ce = d().c6dae164,
                se = d().f8376170,
                ie = d().a68c45e4,
                me = d().aa35b48d,
                ue = d().ed2a4b05,
                de = d().e73f9635,
                ge = d().cd5c5e73,
                pe = ne.Z,
                be = te.Z,
                he = ee.Z;
            function fe({ membershipId: e, refetch: t, user: n, withDisabledAccept: a }) {
                const [l, o] = r.useState(!1),
                    [c] = D()(pe),
                    [s] = D()(be),
                    [i, m] = r.useState(null),
                    u = (0, f.I0)(),
                    d = (0, h.z)(),
                    g = x()(he, n).legacy.screen_name;
                if (i) throw i;
                const p = r.useCallback(
                        (n) => {
                            const a = `${n}_invite`;
                            d.scribe({ action: "click", element: a }),
                                n === v.D.Accepted
                                    ? c({
                                          variables: { membershipId: e },
                                          onCompleted: () => {
                                              const e = de({ screenName: g });
                                              u((0, G.fz)({ text: e })), t();
                                          },
                                          onError: (e) => {
                                              m(e);
                                          },
                                          updater: (e) => {
                                              e.invalidateStore();
                                          },
                                      })
                                    : s({
                                          variables: { membershipId: e },
                                          onCompleted: () => {
                                              const e = ue({ screenName: g });
                                              u((0, G.fz)({ text: e })), t();
                                          },
                                          onError: (e) => {
                                              m(e);
                                          },
                                      });
                        },
                        [d, u, e, t, s, g, m, c],
                    ),
                    C = r.useCallback(() => {
                        p(v.D.Accepted);
                    }, [p]),
                    y = r.useCallback(() => {
                        o(!1), p(v.D.Rejected);
                    }, [p]),
                    Z = r.useCallback(() => {
                        o(!0);
                    }, [o]),
                    k = r.useCallback(() => {
                        o(!1);
                    }, [o]),
                    w = (function (e) {
                        const t = (0, f.v9)(E.VT),
                            n = (0, _.G)(),
                            a = ge({ numDelegates: n, numDelegatesLabel: n.toLocaleString((0, b.It)(t)) });
                        return r.useMemo(() => (e ? { "aria-label": a, disabled: !0, hoverLabel: { label: a } } : Object.freeze({})), [a, e]);
                    })(a);
                return r.createElement(ae.Z, { style: Ee.menuContainer }, r.createElement(re.ZP, (0, X.Z)({ "aria-label": ce, hoverLabel: { label: ce }, icon: r.createElement(le.default, null), onClick: C, style: Ee.rightMargin, type: "primaryOutlined" }, w)), r.createElement(re.ZP, { "aria-label": se, hoverLabel: { label: se }, icon: r.createElement(oe.default, null), onClick: Z, type: "destructiveOutlined" }), l ? r.createElement(O.Z, { confirmButtonLabel: ie, confirmButtonType: "destructiveFilled", headline: me({ screenName: g }), onCancel: k, onConfirm: y }) : null);
            }
            const Ee = m.default.create((e) => ({ menuContainer: { display: "flex", flexDirection: "row" }, rightMargin: { marginEnd: e.spacesPx.space12 } })),
                Ce = k.Z;
            function ye({ decorationType: e, groups: t, refetch: n, shouldShowRoleLabel: a = !1, userId: l, withDisabledAccept: o = !1 }) {
                const c = x()(Ce, t);
                return r.createElement(
                    r.Fragment,
                    null,
                    c.map((t) => {
                        const c = t.members?.find((e) => e.user_results?.result?.id === l),
                            s = c?.role || "Contributor";
                        if (c?.rest_id && t.handle_results.result?.legacy) {
                            const l = e === v.z.InviteMenu ? r.createElement(fe, { membershipId: c.rest_id, refetch: n, user: t.handle_results.result, withDisabledAccept: o }) : e === v.z.ActionMenu ? r.createElement(K, { groupId: t.id, membershipId: c.rest_id, refetch: n, user: t.handle_results.result, userRole: c.role ?? "Contributor" }) : null;
                            if (t.handle_results.result) return r.createElement(A, { decoration: l, group: t.handle_results.result, key: t.rest_id, userRole: a ? s : void 0 });
                        }
                    }),
                );
            }
            const Ze = d().i95202f6,
                ve = d().a44c6034,
                _e = d().e39bc936,
                ke = d().h0d3bddc,
                we = d().c54aafb0,
                xe = d().i859a9d4,
                Pe = d().idc35f32,
                Se = d().cd5c5e73,
                Ie = { context: "DelegateGroups" },
                Re = a.Z;
            function Ae() {
                const { data: e, refetch: t } = (0, C.e)(Re, {}),
                    n = e.viewer_v2?.acceptedAdminGroups,
                    a = e.viewer_v2?.acceptedContributorGroups,
                    l = e.viewer_v2?.pendingGroups,
                    i = e.viewer_v2?.user?.id || "",
                    m = !n?.length && !a?.length && !l?.length,
                    u = (n?.length ?? 0) + (a?.length ?? 0),
                    d = (0, _.G)(),
                    g = u >= d,
                    p = (0, f.v9)(E.VT),
                    h = Se({ numDelegates: d, numDelegatesLabel: d.toLocaleString((0, b.It)(p)) });
                return r.createElement(r.Fragment, null, l?.length ? r.createElement(r.Fragment, null, r.createElement(o.Z, { spacing: "space12" }), r.createElement(c.ZP, { size: "headline2", style: Le.header, weight: "heavy" }, ve), g && r.createElement(s.Z.Attention, { text: h }), r.createElement(ye, { decorationType: v.z.InviteMenu, groups: l, refetch: t, shouldShowRoleLabel: !0, userId: i, withDisabledAccept: g })) : null, n?.length ? r.createElement(r.Fragment, null, r.createElement(o.Z, { spacing: "space12" }), r.createElement(c.ZP, { size: "headline2", style: Le.header, weight: "heavy" }, ke), r.createElement(ye, { decorationType: v.z.ActionMenu, groups: n, refetch: t, userId: i })) : null, a?.length ? r.createElement(r.Fragment, null, r.createElement(o.Z, { spacing: "space12" }), r.createElement(c.ZP, { size: "headline2", style: Le.header, weight: "heavy" }, we), r.createElement(ye, { decorationType: v.z.ActionMenu, groups: a, refetch: t, userId: i })) : null, m ? r.createElement(c.ZP, { align: "center", weight: "bold" }, Pe) : null);
            }
            const Le = m.default.create((e) => ({ header: { paddingVertical: e.spaces.space12, paddingStart: e.spaces.space16 } })),
                Me = (0, h.Z)(
                    function () {
                        const e = (0, l.useLocation)();
                        return r.createElement(g.Z, null, r.createElement(y.Z, { location: e, title: Ze }, r.createElement(i.Z, { description: _e, learnMoreLabel: xe, learnMoreLink: Z.L }), r.createElement(p.H, { errorConfig: Ie }, r.createElement(Ae, null))));
                    },
                    { page: "settings", section: "delegate", component: "groups" },
                );
        },
        473514: (e, t, n) => {
            n.r(t), n.d(t, { default: () => z, membersDelegateQuery: () => L });
            var a = n(338529),
                r = n(837800),
                l = n(202784),
                o = (n(585488), n(277660)),
                c = n.n(o),
                s = n(107267),
                i = n(943401),
                m = n(40610),
                u = n(242454),
                d = n(661810),
                g = n(332920),
                p = n.n(g),
                b = n(652904),
                h = n(736063),
                f = n(943245),
                E = n(725516),
                C = n(125363),
                y = n(390387),
                Z = n(58174),
                v = n(264922),
                _ = n(838737),
                k = n(153785),
                w = n(997210),
                x = n(325204);
            const P = p().c349b958,
                S = p().cb8ebf5c,
                I = p().e177f72a,
                R = p().i859a9d4,
                A = p().cd5c5e73,
                L = r.Z;
            function M({ delegationGroup: e, onAddMemberPress: t, refetch: n }) {
                const r = c()(a.Z, e),
                    o = l.useMemo(() => r?.members || [], [r?.members]),
                    s = (0, C.v9)(y.vd) ?? "Owner",
                    g = (0, x.G)(),
                    p = (0, C.v9)(y.VT),
                    b = A({ numDelegates: g, numDelegatesLabel: g.toLocaleString((0, f.It)(p)) });
                return l.createElement(l.Fragment, null, l.createElement(i.Z, { description: I, learnMoreLabel: R, learnMoreLink: w.L }), o.length >= g && l.createElement(m.Z.Attention, { text: b }), l.createElement(u.Z, { color: "primary", disabled: o.length >= g, label: P, onPress: t }), l.createElement(d.Z, null), l.createElement(k.Z, { delegationMemberships: o, refetch: n, viewerRole: s }));
            }
            const z = (0, E.Z)(
                function () {
                    const { data: e, refetch: t } = (0, Z.e)(L, {}),
                        n = l.useMemo(() => e.viewer_v2?.list_delegation_groups || [], [e.viewer_v2?.list_delegation_groups])[0],
                        a = e?.viewer_v2,
                        r = a?.user?.rest_id || "",
                        o = (0, s.useLocation)(),
                        [c, i] = l.useState(!1),
                        m = !(0, C.v9)(y.Lz),
                        u = l.useCallback(() => i(!0), []),
                        d = l.useCallback(() => i(!1), []);
                    return l.createElement(b.Z, null, l.createElement(v.Z, { location: o, title: S }, l.createElement(h.H, { errorConfig: { context: "DelegateMembers" } }, a ? l.createElement(M, { delegationGroup: n, onAddMemberPress: u, refetch: t, viewer: a }) : null), c ? l.createElement(_.Z, { delegationGroup: n, delegationGroupId: r, isOwner: m, onDismiss: d, refetchMembers: t }) : null));
                },
                { page: "settings", section: "delegate", component: "members" },
            );
        },
        838737: (e, t, n) => {
            n.d(t, { Z: () => pe });
            var a = n(937202),
                r = n(202784),
                l = n(325686),
                o = (n(585488), n(277660)),
                c = n.n(o),
                s = n(107267),
                i = n(731708),
                m = n(673510),
                u = n(449479),
                d = n(992942),
                g = n(154003),
                p = n(708852),
                b = n(167630),
                h = n(392237),
                f = n(332920),
                E = n.n(f),
                C = n(33104),
                y = n(980407),
                Z = n(757700),
                v = n(339110),
                _ = n(725516),
                k = n(874088),
                w = n(27951);
            const x = [v.my.Users],
                P = E().fc9dd578,
                S = h.default.create((e) => ({ root: { flex: 1 } })),
                I = ({ disabledUserIds: e, onDropdownScrollableCheck: t, onSelect: n, source: a }) => {
                    const o = r.useRef(null),
                        c = r.useCallback(
                            (e) => {
                                n(e);
                            },
                            [n],
                        ),
                        s = r.useCallback((t) => e.includes(t.id), [e]),
                        i = r.useCallback(
                            (e, n) => {
                                t(n);
                            },
                            [t],
                        ),
                        m = r.useCallback(
                            (e) => {
                                e || t(!1);
                            },
                            [t],
                        );
                    return r.createElement(l.Z, { ref: o, style: S.root }, r.createElement(k.default, { alwaysOpen: !0, disableClearButton: !0, filter: x, getItemIsDisabled: s, isModal: !0, onItemClick: c, onItemsChanged: i, onQueryChange: m, placeholder: P, renderUserDecoration: w.ib, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: a, withSectionDivider: !1 }));
                };
            var R = n(147935),
                A = n(16046),
                L = n(299640),
                M = n(51545),
                z = n(351743),
                D = n.n(z),
                F = n(88656);
            const B = E().e4a6e006,
                O = E().b5faf216,
                T = E().hcc3b4ce,
                N = E().ace0f0a4,
                U = E().e4a6e006,
                G = E().e4a6e006,
                j = Object.freeze({ DELEGATE_ERR_002: O, DELEGATE_ERR_003: T, DELEGATE_ERR_004: N, DELEGATE_ERR_005: U, DELEGATE_ERR_006: G }),
                H = M.Z;
            const V = Object.freeze({ memberSelection: "MemberSelection", roleSelection: "RoleSelection", inviteSent: "InviteSent", adminConfirmation: "AdminConfirmation", inviteError: "InviteError" }),
                $ = E().efee0a50,
                W = E().ja0a1aa6,
                Q = E().db4f623a,
                q = E().be7350e3,
                J = E().b7aa7642,
                Y = E().cfd2f35e,
                K = E().edbca224,
                X = E().cb70b894,
                ee = E().f4834ca6,
                te = E().b772cd66,
                ne = E().cb04a824,
                ae = E().c3153100,
                re = E().d4b3abde,
                le = E().b92e2700,
                oe = E().hbbbf908,
                ce = E().d8eda249,
                se = ({ disabledUserIds: e, isOwner: t, onDropdownScrollableCheck: n, onSelect: a }) => r.createElement(r.Fragment, null, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, t ? $ : W), r.createElement(I, { disabledUserIds: e, onDropdownScrollableCheck: n, onSelect: a, source: v._4.Unknown })),
                ie = ({ isOwner: e, onRoleChange: t, selectedRole: n, user: a }) => {
                    const o = [
                            { label: ne, value: "Contributor", helpText: re },
                            { label: ae, value: "Admin", helpText: le },
                        ],
                        { id_str: c, name: s, profile_image_url_https: d, screen_name: g } = a;
                    return r.createElement(r.Fragment, null, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, e ? Q : W), r.createElement(l.Z, { style: ge.userCellContainer }, r.createElement(m.ZP, { avatarUri: d, name: s, screenName: g, style: ge.userCell, userId: c })), e ? r.createElement(l.Z, { style: ge.selectionGroupContainer }, r.createElement(u.Z, { name: "role", onChange: t, options: o, value: n })) : null);
                },
                me = ({ screenName: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: ge.imageContainer }, r.createElement(d.Z, { source: R, style: ge.adminImage })), r.createElement(l.Z, { style: ge.titleContainer }, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, q({ screenName: e }))), r.createElement(l.Z, { style: ge.textContainer }, r.createElement(i.ZP, { color: "gray700" }, oe))),
                ue = ({ screenName: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: ge.imageContainer }, r.createElement(d.Z, { source: A, style: ge.image })), r.createElement(l.Z, { style: ge.titleContainer }, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, J)), r.createElement(l.Z, { style: ge.textContainer }, r.createElement(i.ZP, { color: "gray700" }, ce({ screenName: e })))),
                de = ({ message: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: ge.imageContainer }, r.createElement(d.Z, { source: L, style: ge.image })), r.createElement(l.Z, { style: ge.titleContainer }, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, e)));
            const ge = h.default.create((e) => ({ activityIndicatorContainer: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, modal: { minWidth: "initial" }, modalLarge: { minWidth: 600, minHeight: 600, maxHeight: 600 }, modalContent: { position: "relative", paddingHorizontal: e.spacesPx.space32, paddingVertical: e.spacesPx.space36, flex: 1, overflowY: "auto" }, modalContentLarge: { paddingHorizontal: 2 * e.spacesPx.space48, paddingVertical: e.spacesPx.space32 }, modalContentMemberSelection: { paddingBottom: 0 }, modalContentError: { minHeight: "initial" }, imageContainer: { display: "flex", justifyContent: "center", alignItems: "center" }, image: { width: 175, height: 200 }, adminImage: { width: 175, height: 160 }, titleContainer: { marginTop: e.spaces.space32 }, textContainer: { marginTop: e.spaces.space16 }, actionsContainer: { paddingVertical: e.spacesPx.space24, paddingHorizontal: 2 * e.spacesPx.space48 }, actionsContainerWithOverflow: { boxShadow: "0px 0px 3px rgb(15 20 25 / 15%), 0px 0px 16px rgb(15 20 25 / 10%)" }, secondaryAction: { marginTop: e.spacesPx.space16 }, userCell: { paddingHorizontal: 0 }, userCellContainer: { marginTop: e.spacesPx.space24 }, selectionGroupContainer: { marginTop: e.spacesPx.space12 } })),
                pe = (0, _.Z)(
                    function ({ analytics: e, delegationGroup: t, delegationGroupId: n, isOwner: o, onDismiss: i, refetchMembers: m }) {
                        const u = (0, s.useHistory)(),
                            d = c()(a.Z, t),
                            h = r.useMemo(() => d?.members?.map((e) => e.user_results?.result?.rest_id || "") || [], [d?.members]),
                            [f, E] = r.useState(V.memberSelection),
                            [_, k] = r.useState(null),
                            [w, x] = r.useState("Contributor"),
                            [P, S] = r.useState(null),
                            [I, R] = (function (e, t) {
                                const [n, a] = D()(H);
                                return [
                                    (a) =>
                                        n({
                                            variables: a,
                                            onError: (t) => {
                                                if (t instanceof F.Z) {
                                                    const n = t.errors[0] || null;
                                                    e((n?.message && j[n.message]) || B);
                                                } else e(B);
                                            },
                                            onCompleted: () => {
                                                t();
                                            },
                                        }),
                                    a,
                                ];
                            })(S, () => {
                                E(V.inviteSent), m();
                            }),
                            [A, L] = r.useState(!1);
                        r.useEffect(() => {
                            E(null !== _ ? V.roleSelection : V.memberSelection);
                        }, [_]),
                            r.useEffect(() => {
                                P && E(V.inviteError);
                            }, [P]);
                        const M = r.useCallback((e) => {
                                e.type === v.El.User && k(e);
                            }, []),
                            z = r.useCallback(() => {
                                f === V.roleSelection ? k(null) : f === V.adminConfirmation ? E(V.roleSelection) : (S(null), i());
                            }, [f, i]),
                            O = r.useCallback(() => {
                                if ("Admin" === w && f !== V.adminConfirmation) E(V.adminConfirmation);
                                else if (null !== _) {
                                    e.scribe({ element: `${w}_invite_sent_by_${o ? "Owner" : "Admin"}`, action: "click" });
                                    const t = _.data.id_str;
                                    I({ userId: t, delegationGroupId: n, selectedRole: w });
                                }
                            }, [e, I, f, n, w, _, o]),
                            T = r.useCallback(() => {
                                S(null), k(null);
                            }, []),
                            N = r.useCallback((e, t) => {
                                "Contributor" === t ? x("Contributor") : "Admin" === t && x("Admin");
                            }, []),
                            U = r.useMemo(() => {
                                switch (f) {
                                    case V.memberSelection:
                                        return r.createElement(se, { disabledUserIds: [n, ...h], isOwner: o, onDropdownScrollableCheck: L, onSelect: M });
                                    case V.roleSelection:
                                        return _ ? r.createElement(ie, { isOwner: o, onRoleChange: N, selectedRole: w, user: _.data }) : null;
                                    case V.adminConfirmation:
                                        return _ ? r.createElement(me, { screenName: _.data.screen_name }) : null;
                                    case V.inviteSent:
                                        return _ ? r.createElement(ue, { screenName: _.data.screen_name }) : null;
                                    case V.inviteError:
                                        return P ? r.createElement(de, { message: P }) : null;
                                    default:
                                        return null;
                                }
                            }, [f, n, h, P, N, M, o, w, _]),
                            G = r.useMemo(() => {
                                switch (f) {
                                    case V.memberSelection:
                                        return r.createElement(g.ZP, { onPress: i, size: "xLarge", type: "primaryOutlined" }, Y);
                                    case V.roleSelection:
                                        return r.createElement(g.ZP, { onPress: O, size: "xLarge", type: "primaryFilled" }, K);
                                    case V.adminConfirmation:
                                        return r.createElement(r.Fragment, null, r.createElement(g.ZP, { onPress: O, size: "xLarge", type: "primaryFilled" }, K), r.createElement(l.Z, { style: ge.secondaryAction }, r.createElement(g.ZP, { onPress: z, size: "xLarge", type: "primaryOutlined" }, X)));
                                    case V.inviteError:
                                    case V.inviteSent:
                                        return r.createElement(r.Fragment, null, r.createElement(g.ZP, { onPress: T, size: "xLarge", type: "primaryFilled" }, ee), r.createElement(l.Z, { style: ge.secondaryAction }, r.createElement(g.ZP, { onPress: z, size: "xLarge", type: "primaryOutlined" }, te)));
                                    default:
                                        return null;
                                }
                            }, [f, z, T, O, i]),
                            $ = f === V.memberSelection || f === V.inviteSent ? "close" : "back",
                            W = (0, p.Ji)();
                        return r.createElement(Z.ZP, { clickMaskToClose: !0, history: u, modalSize: W ? Z.Cg.fitChildren : Z.Cg.full, onMaskClick: i, style: W ? ge.modalLarge : ge.modal }, r.createElement(y.Z, { backButtonType: $, onBackClick: z }, r.createElement(C.Z, { style: [ge.modalContent, W ? ge.modalContentLarge : null, f === V.memberSelection ? ge.modalContentMemberSelection : null, P ? ge.modalContentError : null] }, R ? r.createElement(l.Z, { style: ge.activityIndicatorContainer }, r.createElement(b.Z, null)) : U), r.createElement(l.Z, { style: [ge.actionsContainer, A ? ge.actionsContainerWithOverflow : null] }, G)));
                    },
                    { page: "settings", section: "delegate", component: "add-member-modal" },
                );
        },
        460701: (e, t, n) => {
            n.d(t, { Z: () => T });
            var a = n(900301),
                r = n(202784),
                l = (n(585488), n(277660)),
                o = n.n(l),
                c = n(332920),
                s = n.n(c),
                i = n(836640),
                m = n(958394),
                u = n(247056),
                d = n(811176),
                g = n(190286),
                p = n(224823),
                b = n(885724),
                h = n(725516),
                f = n(126608),
                E = n(108538),
                C = n(351743),
                y = n.n(C),
                Z = n(125363),
                v = n(601576);
            const _ = s().d472c9eb,
                k = s().h5951997,
                w = E.Z,
                x = f.Z;
            const P = s().a171ca7c,
                S = s().f68f079c,
                I = s().b2794e9e,
                R = s().gca83d6a,
                A = s().b8cac21c,
                L = s().e68b09b4,
                M = s().hd67c2e8,
                z = s().f0bd8ca9,
                D = s().a33eba47;
            function F({ memberRole: e, membershipId: t, refetch: n = () => {}, screenName: a, status: l, viewerRole: o, onChangeRolePress: c }) {
                const s = (0, h.z)(),
                    i = (function () {
                        const [e] = y()(w),
                            [t] = y()(x),
                            [n, a] = r.useState(null),
                            l = (0, Z.I0)();
                        if (n) throw n;
                        return {
                            cancelInvite: (e, n, r) =>
                                t({
                                    variables: e,
                                    onError: (e) => {
                                        a(e);
                                    },
                                    onCompleted: (e) => {
                                        n();
                                        const t = k({ screenName: r });
                                        l((0, v.fz)({ text: t }));
                                    },
                                }),
                            removeMember: (t, n, r) =>
                                e({
                                    variables: t,
                                    onError: (e) => {
                                        a(e);
                                    },
                                    onCompleted: (e) => {
                                        n();
                                        const t = _({ screenName: r });
                                        l((0, v.fz)({ text: t }));
                                    },
                                }),
                        };
                    })(),
                    [m, f] = r.useState(!1),
                    [E, C] = r.useState(!1),
                    F = r.useMemo(() => ("Admin" === e ? R : A), [e]),
                    B = r.useCallback(() => {
                        const r = `${o}_remove_${e}`;
                        s.scribe({ element: r, action: "click" }), C(!1), i.removeMember({ membershipId: t }, n, a);
                    }, [s, C, i, t, e, n, a, o]),
                    O = r.useCallback(() => {
                        const r = `${o}_cancel_invite_${e}`;
                        s.scribe({ element: r, action: "click" }), f(!1), i.cancelInvite({ membershipId: t }, n, a);
                    }, [s, f, i, t, e, n, a, o]),
                    T = r.useCallback(() => {
                        C(!1);
                    }, [C]),
                    N = r.useCallback(() => {
                        C(!0);
                    }, [C]),
                    U = r.useCallback(() => {
                        f(!1);
                    }, [f]),
                    G = r.useCallback(() => {
                        f(!0);
                    }, [f]),
                    j = [{ Icon: p.default, isEmphasized: !0, onClick: G, text: P }],
                    H = { Icon: b.default, text: S, onClick: c },
                    V = { Icon: p.default, isEmphasized: !0, text: I, onClick: N },
                    $ = { Owner: { Owner: { Pending: [], Accepted: [], Rejected: [] }, Admin: { Pending: j, Accepted: [H, V], Rejected: [] }, Contributor: { Pending: j, Accepted: [H, V], Rejected: [] } }, Admin: { Owner: { Pending: [], Accepted: [], Rejected: [] }, Admin: { Pending: [], Accepted: [], Rejected: [] }, Contributor: { Pending: j, Accepted: [V], Rejected: [] } }, Contributor: { Owner: { Pending: [], Accepted: [], Rejected: [] }, Admin: { Pending: [], Accepted: [], Rejected: [] }, Contributor: { Pending: [], Accepted: [], Rejected: [] } } }[o][e][l];
                return $.length ? r.createElement(r.Fragment, null, r.createElement(u.Z, { renderActionMenu: (e, t) => r.createElement(d.Z, { items: $, onCloseRequested: e, shouldCloseOnClick: !0 }) }), E ? r.createElement(g.Z, { confirmButtonLabel: L, confirmButtonType: "destructiveFilled", headline: z({ screenName: a }), onCancel: T, onConfirm: B, text: F }) : null, m ? r.createElement(g.Z, { confirmButtonLabel: M, confirmButtonType: "destructiveFilled", headline: D({ screenName: a }), onCancel: U, onConfirm: O }) : null) : null;
            }
            const B = r.memo(F),
                O = s().h502484e;
            function T({ memberRole: e, onChangeRolePress: t, refetch: n, restId: l, status: c, userResults: s, viewerRole: u }) {
                const d = o()(a.Z, s),
                    { legacy: g } = d,
                    p = g?.screen_name || "",
                    b = g?.name || "",
                    h = g?.profile_image_url_https || "",
                    f = c === m.D.Pending,
                    E = r.useCallback(() => t && t({ id: l, profile_image_url_https: h, name: b, screen_name: p, role: e }), [e, b, t, h, l, p]);
                return r.createElement(i.J, { decoration: r.createElement(B, { memberRole: e, membershipId: l, onChangeRolePress: E, refetch: n, screenName: p, status: c, viewerRole: u }), displayNameLabel: f ? O : void 0, user: d });
            }
        },
        153785: (e, t, n) => {
            n.d(t, { Z: () => ae });
            var a = n(189807),
                r = n(202784),
                l = n(325686),
                o = (n(585488), n(277660)),
                c = n.n(o),
                s = n(731708),
                i = n(844685),
                m = n(661810),
                u = n(392237),
                d = n(332920),
                g = n.n(d),
                p = n(933277),
                b = n(107267),
                h = n(673510),
                f = n(449479),
                E = n(992942),
                C = n(154003),
                y = n(708852),
                Z = n(167630),
                v = n(980407),
                _ = n(757700),
                k = n(725516),
                w = n(147935),
                x = n(16046),
                P = n(299640),
                S = n(272121),
                I = n(351743),
                R = n.n(I);
            const A = g().e4a6e006,
                L = S.Z;
            const M = Object.freeze({ roleSelection: "RoleSelection", roleUpdated: "RoleUpdated", adminConfirmation: "AdminConfirmation", changeRoleError: "ChangeRoleError" }),
                z = g().db25d796,
                D = g().e4133790,
                F = g().a1a27c26,
                B = g().fd7b1b1c,
                O = g().b772cd66,
                T = g().cb04a824,
                N = g().c3153100,
                U = g().d4b3abde,
                G = g().b92e2700,
                j = g().hbbbf908,
                H = g().be7350e3,
                V = g().ec67d021,
                $ = ({ onRoleChange: e, selectedRole: t, user: n }) => {
                    const a = [
                            { label: T, value: "Contributor", helpText: U },
                            { label: N, value: "Admin", helpText: G },
                        ],
                        { id: o, name: c, profile_image_url_https: i, screen_name: m } = n;
                    return r.createElement(r.Fragment, null, r.createElement(s.ZP, { size: "title2", weight: "heavy" }, z), r.createElement(l.Z, { style: J.userCellContainer }, r.createElement(h.ZP, { avatarUri: i, name: c, screenName: m, style: J.userCell, userId: o })), r.createElement(l.Z, { style: J.selectionGroupContainer }, r.createElement(f.Z, { name: "role", onChange: e, options: a, value: t })));
                },
                W = ({ screenName: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: J.imageContainer }, r.createElement(E.Z, { source: w, style: J.adminImage })), r.createElement(l.Z, { style: J.titleContainer }, r.createElement(s.ZP, { size: "title2", weight: "heavy" }, H({ screenName: e }))), r.createElement(l.Z, { style: J.textContainer }, r.createElement(s.ZP, { color: "gray700" }, j))),
                Q = ({ screenName: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: J.imageContainer }, r.createElement(E.Z, { source: x, style: J.image })), r.createElement(l.Z, { style: J.titleContainer }, r.createElement(s.ZP, { size: "title2", weight: "heavy" }, D)), r.createElement(l.Z, { style: J.textContainer }, r.createElement(s.ZP, { color: "gray700" }, V({ screenName: e })))),
                q = ({ message: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: J.imageContainer }, r.createElement(E.Z, { source: P, style: J.image })), r.createElement(l.Z, { style: J.titleContainer }, r.createElement(s.ZP, { size: "title2", weight: "heavy" }, e)));
            const J = u.default.create((e) => ({ activityIndicatorContainer: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, modal: { minWidth: "initial" }, modalLarge: { minWidth: 600, minHeight: 600, maxHeight: 600 }, modalContent: { position: "relative", paddingHorizontal: e.spacesPx.space32, paddingVertical: e.spacesPx.space36, flex: 1, overflowY: "auto" }, modalContentLarge: { paddingHorizontal: 2 * e.spacesPx.space48, paddingVertical: e.spacesPx.space32 }, modalContentError: { minHeight: "initial" }, imageContainer: { display: "flex", justifyContent: "center", alignItems: "center" }, image: { width: 175, height: 200 }, adminImage: { width: 175, height: 160 }, titleContainer: { marginTop: e.spaces.space32 }, textContainer: { marginTop: e.spaces.space16 }, actionsContainer: { paddingVertical: e.spacesPx.space24, paddingHorizontal: 2 * e.spacesPx.space48 }, secondaryAction: { marginTop: e.spacesPx.space16 }, userCell: { paddingHorizontal: 0 }, userCellContainer: { marginTop: e.spacesPx.space24 }, selectionGroupContainer: { marginTop: e.spacesPx.space12 } })),
                Y = (0, k.Z)(
                    function ({ analytics: e, onDismiss: t, refetchMembers: n, user: a }) {
                        const o = (0, b.useHistory)(),
                            [c, s] = r.useState(M.roleSelection),
                            [i, m] = r.useState(a.role),
                            [u, d] = r.useState(null),
                            [g, p] = (function (e, t) {
                                const [n, a] = R()(L);
                                return [
                                    (a) =>
                                        n({
                                            variables: a,
                                            onError: (t) => {
                                                t && e(A);
                                            },
                                            onCompleted: () => {
                                                t();
                                            },
                                        }),
                                    a,
                                ];
                            })(d, () => {
                                s(M.roleUpdated), n();
                            });
                        r.useEffect(() => {
                            u && s(M.changeRoleError);
                        }, [u]);
                        const h = r.useCallback(() => {
                                c === M.adminConfirmation ? s(M.roleSelection) : (d(null), t());
                            }, [c, t]),
                            f = r.useCallback(() => {
                                if ("Admin" === i && c !== M.adminConfirmation) s(M.adminConfirmation);
                                else {
                                    e.scribe({ element: `owner_changed_member_role_to_${i}`, action: "click" });
                                    const t = a.id;
                                    g({ userId: t, selectedRole: i });
                                }
                            }, [e, g, c, i, a.id]),
                            E = r.useCallback((e, t) => {
                                "Contributor" === t ? m("Contributor") : "Admin" === t && m("Admin");
                            }, []),
                            k = r.useMemo(() => {
                                switch (c) {
                                    case M.roleSelection:
                                        return r.createElement($, { onRoleChange: E, selectedRole: i, user: a });
                                    case M.adminConfirmation:
                                        return r.createElement(W, { screenName: a.screen_name });
                                    case M.roleUpdated:
                                        return r.createElement(Q, { screenName: a.screen_name });
                                    case M.changeRoleError:
                                        return u ? r.createElement(q, { message: u }) : null;
                                    default:
                                        return null;
                                }
                            }, [c, u, E, i, a]),
                            w = r.useMemo(() => {
                                switch (c) {
                                    case M.roleSelection:
                                        return r.createElement(C.ZP, { onPress: f, size: "xLarge", type: "primaryFilled" }, F);
                                    case M.adminConfirmation:
                                        return r.createElement(r.Fragment, null, r.createElement(C.ZP, { onPress: f, size: "xLarge", type: "primaryFilled" }, F), r.createElement(l.Z, { style: J.secondaryAction }, r.createElement(C.ZP, { onPress: h, size: "xLarge", type: "primaryOutlined" }, B)));
                                    case M.changeRoleError:
                                    case M.roleUpdated:
                                        return r.createElement(C.ZP, { onPress: h, size: "xLarge", type: "primaryOutlined" }, O);
                                    default:
                                        return null;
                                }
                            }, [c, h, f]),
                            x = c === M.roleUpdated || c === M.roleSelection ? "close" : "back",
                            P = (0, y.Ji)();
                        return r.createElement(_.ZP, { clickMaskToClose: !0, history: o, modalSize: P ? _.Cg.fitChildren : _.Cg.full, onMaskClick: t, style: P ? J.modalLarge : J.modal }, r.createElement(v.Z, { backButtonType: x, onBackClick: h }, r.createElement(l.Z, { style: [J.modalContent, P ? J.modalContentLarge : null, u ? J.modalContentError : null] }, p ? r.createElement(l.Z, { style: J.activityIndicatorContainer }, r.createElement(Z.Z, null)) : k), r.createElement(l.Z, { style: J.actionsContainer }, w)));
                    },
                    { page: "settings", section: "delegate", component: "change-member-role-modal" },
                );
            var K = n(460701);
            const X = g().c2e8f726,
                ee = g().fade0942,
                te = g().b7d6e5d6,
                ne = g().cd76a282;
            function ae({ delegationMemberships: e, refetch: t, viewerRole: n }) {
                const o = c()(a.Z, e),
                    [u, d] = r.useState(null),
                    g = r.useCallback((e) => d(e), []),
                    b = r.useCallback(() => d(null), []),
                    h = r.useMemo(() => (0, p.Z)(o, (e) => e?.role || ""), [o]),
                    f = h.Contributor?.length > 0;
                return o?.length
                    ? r.createElement(
                          r.Fragment,
                          null,
                          h.Admin?.length > 0 &&
                              r.createElement(
                                  l.Z,
                                  null,
                                  r.createElement(i.Z, { subtext: ee, text: X }),
                                  h.Admin.map((e) => {
                                      const { rest_id: a, status: l, user_results: o } = e,
                                          c = o?.result;
                                      return l && c && "User" === c.__typename ? r.createElement(K.Z, { key: a, memberRole: "Admin", onChangeRolePress: g, refetch: t, restId: a, status: l, userResults: c, viewerRole: n }) : null;
                                  }),
                                  f ? r.createElement(m.Z, null) : null,
                              ),
                          f &&
                              r.createElement(
                                  l.Z,
                                  null,
                                  r.createElement(i.Z, { text: te }),
                                  h.Contributor.map((e) => {
                                      const { rest_id: a, status: l, user_results: o } = e,
                                          c = o?.result;
                                      return l && c && "User" === c.__typename ? r.createElement(K.Z, { key: a, memberRole: "Contributor", onChangeRolePress: g, refetch: t, restId: a, status: l, userResults: c, viewerRole: n }) : null;
                                  }),
                              ),
                          u && t ? r.createElement(Y, { onDismiss: b, refetchMembers: t, user: u }) : null,
                      )
                    : r.createElement(s.ZP, { align: "center", style: re.emptyState, weight: "bold" }, ne);
            }
            const re = u.default.create((e) => ({ emptyState: { marginTop: e.spaces.space16 } }));
        },
        997210: (e, t, n) => {
            n.d(t, { L: () => a });
            const a = (0, n(688715).ju)("https://help.x.com/managing-your-account/how-to-use-the-delegate-feature");
        },
        221125: (e, t, n) => {
            n.r(t), n.d(t, { default: () => V });
            var a = n(216179),
                r = n(202784),
                l = n(325686),
                o = (n(585488), n(107267)),
                c = n(80512),
                s = n(731708),
                i = n(661810),
                m = n(844685),
                u = n(779610),
                d = n(190286),
                g = n(943401),
                p = n(332920),
                b = n.n(p),
                h = n(652904),
                f = n(736063),
                E = n(725516),
                C = n(125363),
                y = n(390387),
                Z = n(535338),
                v = n(264922),
                _ = n(997210),
                k = n(710594),
                w = n(351743),
                x = n.n(w);
            const P = k.Z;
            const S = b().g9230d00,
                I = b().d623aecc,
                R = b().f3029d5c,
                A = b().cd1305e8,
                L = b().i859a9d4,
                M = b().j339ef22,
                z = b().g4b0c2dc,
                D = b().i95202f6,
                F = b().cb8ebf5c,
                B = b().d9aef256,
                O = b().afb3ccf6,
                T = b().dfae5248,
                N = b().b9c91524,
                U = Object.freeze({ none: "Nobody", all: "Everyone", following: "OnlyFollowing" }),
                G = [
                    { label: M, value: U.all },
                    { label: z, value: U.following },
                ],
                j = a.Z;
            function H({ analytics: e }) {
                const t = (function () {
                        const [e] = x()(P),
                            [t, n] = r.useState(null);
                        if (t) throw t;
                        return function (t, a) {
                            return e({
                                variables: t,
                                onError: (e) => {
                                    n(e);
                                },
                                updater: (e) => {
                                    const n = e.get(a),
                                        r = n?.getLinkedRecord("user_results")?.getLinkedRecord("result");
                                    r?.setValue(t.invitationSetting, "delegation_invitation_preferences");
                                },
                            });
                        };
                    })(),
                    n = (0, Z.p)(j, {}),
                    a = n.viewer_v2?.user_results?.result?.delegation_invitation_preferences,
                    o = n.viewer_v2?.user_results?.result?.rest_id || "",
                    g = n.viewer_v2?.__id || "",
                    p = (0, C.v9)(y.Lz),
                    [b, h] = r.useState(a || U.none),
                    [f, E] = r.useState(!1);
                r.useEffect(() => {
                    a && h(a);
                }, [a]);
                const v = r.useCallback(
                        (n) => {
                            const a = `delegate_enabled_for_${n}`;
                            e.scribe({ element: a, action: "click" }), t({ userId: o, invitationSetting: n }, g);
                        },
                        [e, t, g, o],
                    ),
                    k = r.useCallback(() => {
                        E(!1), v(U.none);
                    }, [E, v]),
                    w = r.useCallback(() => {
                        E(!1);
                    }, [E]),
                    S = r.useCallback(
                        (e, t) => {
                            t !== U.none ? v(t) : E(!0);
                        },
                        [E, v],
                    );
                return r.createElement(r.Fragment, null, r.createElement(l.Z, null, r.createElement(c.Z, { defaultOption: G.find(({ value: e }) => e === U.following), description: r.createElement(r.Fragment, null, R, r.createElement(s.ZP, { link: _.L }, " ", L)), label: A, name: "allow_others_delegation", offValue: U.none, onChange: S, options: G, value: b })), r.createElement(i.Z, { spacing: "space2" }), r.createElement(m.Z, { text: B }), !p && r.createElement(u.Z, { label: D, link: "/settings/delegate/groups" }), r.createElement(u.Z, { label: F, link: "/settings/delegate/members" }), f ? r.createElement(d.Z, { confirmButtonLabel: O, confirmButtonType: "destructiveFilled", headline: T, onCancel: w, onConfirm: k, text: N }) : null);
            }
            const V = (0, E.Z)(
                function ({ analytics: e }) {
                    const t = (0, o.useLocation)();
                    return r.createElement(h.Z, null, r.createElement(v.Z, { location: t, title: S }, r.createElement(g.Z, { description: I }), r.createElement(f.H, { errorConfig: { context: "Delegate" } }, r.createElement(H, { analytics: e }))));
                },
                { page: "settings", section: "delegate" },
            );
        },
        958394: (e, t, n) => {
            n.d(t, { D: () => a, z: () => r });
            const a = Object.freeze({ Pending: "Pending", Accepted: "Accepted", Rejected: "Rejected" }),
                r = Object.freeze({ ActionMenu: "ActionMenu", InviteMenu: "InviteMenu", NotificationCount: "NotificationCount" });
        },
        325204: (e, t, n) => {
            n.d(t, { G: () => r });
            var a = n(443781);
            function r() {
                const { featureSwitches: e, userClaims: t } = (0, a.QZ)();
                return t.isAnyPremiumSubscriber() ? e.getNumberValue("twitter_delegate_subscriber_limit", 25) : e.getNumberValue("twitter_delegate_normal_limit", 5);
            }
        },
        264922: (e, t, n) => {
            n.d(t, { Z: () => Z });
            var a = n(202784),
                r = n(108362),
                l = n(420412),
                o = n(154003),
                c = n(392237),
                s = n(332920),
                i = n.n(s),
                m = n(290402),
                u = n(253493),
                d = n(71620),
                g = n(668214),
                p = n(38562),
                b = n(919022);
            const h = (0, g.Z)()
                    .propsFromState(() => ({ fetchStatus: p.UD, viewerUser: b.ZP.selectViewerUser }))
                    .propsFromActions(() => ({ fetchSettingsIfNeeded: p.Sb, createLocalApiErrorHandler: (0, d.zr)("SETTINGS_LOADER") })),
                f = "settingsDetailSave",
                E = i().i2209530;
            class C extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderWithFetchSettings = () => {
                            const { fetchStatus: e } = this.props;
                            return a.createElement(m.Z, { fetchStatus: e, onRequestRetry: this._handleFetch, render: this._render });
                        }),
                        (this._render = () => {
                            const { children: e, onSubmit: t, submitDisabled: n, submitLabel: c, submitType: s, withMarginBottom: i } = this.props;
                            return a.createElement(r.Z, { style: [y.contentRoot, i && y.withMarginBottom] }, e, t ? a.createElement(a.Fragment, null, a.createElement(l.Z, null), a.createElement(r.Z, { style: y.buttonContainer }, a.createElement(o.ZP, { disabled: n, onPress: t, style: y.button, testID: f, type: s }, c))) : null);
                        }),
                        (this._handleFetch = () => {
                            const { createLocalApiErrorHandler: e, fetchSettingsIfNeeded: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    this._handleFetch();
                }
                getBackLocation() {
                    const { location: e, viewerUser: t } = this.props,
                        n = t ? "/settings" : "/settings/account/personalization";
                    return e && e.pathname === n ? "/" : n;
                }
                render() {
                    const { onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, title: l, viewerUser: o, withBottomBorder: c } = this.props,
                        s = this.getBackLocation(),
                        i = o ? `@${o.screen_name}` : void 0;
                    return a.createElement(u.Z, { backLocation: s, onBackClick: e, rightControl: t, screenType: n, secondaryBar: r, showSubtitleOnWideDetail: !1, subtitle: i, title: l, withBottomBorder: c }, o ? this._renderWithFetchSettings() : this._render());
                }
            }
            C.defaultProps = { submitLabel: E, submitType: "brandFilled", withMarginBottom: !0 };
            const y = c.default.create((e) => ({ contentRoot: { backgroundColor: e.colors.cellBackground, backgroundClip: "content-box", justifyContent: "flex-start" }, buttonContainer: { backgroundColor: e.colors.cellBackground, flexDirection: "row", justifyContent: "flex-end", marginVertical: 0, marginHorizontal: "auto", paddingVertical: e.spaces.space12, paddingHorizontal: 0 }, button: { marginVertical: 0, marginHorizontal: e.spaces.space12 }, withMarginBottom: { marginBottom: `calc(${e.spaces.space64} + ${c.default.iPhoneOffsetBottom})` } })),
                Z = h(C);
        },
        147935: (e, t, n) => {
            e.exports = n.p + "clipboard.2c9cc50a.png";
        },
        16046: (e, t, n) => {
            e.exports = n.p + "paper_planes.cbeffc6a.png";
        },
        299640: (e, t, n) => {
            e.exports = n.p + "pause.8802a56a.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-63cb1cc4.bc34204a.js.map
