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
                r = n(111677),
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
                E = l().ba77b438,
                f = l().cfd2f35e,
                h = l().g5261e91,
                C = l().ef4602ec,
                Z = l().cc15a3ea,
                y = l().e406250c,
                v = ({ history: e, location: t, match: n }) => {
                    const r = (0, i.p)(),
                        l = t?.state?.delegateUser,
                        o = (0, c.Au)(l?.userId),
                        v = o?.handle.result.core.screen_name,
                        _ = (0, m.I0)(),
                        k = a.useCallback(() => {
                            l &&
                                v &&
                                (_((0, d.vU)(l))
                                    .then(() => {
                                        r({ text: h({ screenName: v }), withClearButton: !0, withAutoDismiss: !0 });
                                    })
                                    .catch(() => {
                                        r({ text: C, withClearButton: !0, withAutoDismiss: !0 });
                                    }),
                                e.goBack());
                        }, [l, v, _, e, r]),
                        w = a.useCallback(() => {
                            e.goBack();
                        }, [e]);
                    return l && o ? a.createElement(s.Z, { actionLabel: E, enableMaskForDismiss: !0, flag: u.s7, graphicDisplayMode: "icon", headline: b, isFullHeightOnMobile: !0, onAction: k, onClose: w, onSecondaryAction: w, secondaryActionLabel: f, shouldAddEducationFlagOnClose: !1, shouldAddEducationFlagOnPrimary: !1, shouldAddEducationFlagOnSecondary: !1, subtext: "Admin" === o.role ? Z : y, supportUrl: p.L, withCloseButton: !0 }) : a.createElement(g.default, { history: e, location: t, match: n });
                },
                _ = (0, o.P3)(v);
        },
        819761: (e, t, n) => {
            n.r(t), n.d(t, { GroupsModal: () => Z, default: () => v, groupsModalQuery: () => C });
            var a = n(354907),
                r = n(202784),
                l = n(325686),
                o = (n(585488), n(712696)),
                c = n.n(o),
                s = n(731708),
                i = n(392237),
                m = n(111677),
                u = n.n(m),
                d = n(980407),
                g = n(736063),
                p = n(553660),
                b = n(888068);
            const E = u().eccbfa26,
                f = u().f5c41e22,
                h = { context: "DelegateGroupsModal" },
                C = a.Z,
                Z = ({ history: e }) => {
                    const t = c()(C, {}),
                        n = t.viewer_v2?.user_results?.result,
                        a = r.useMemo(() => ({ loggedInUser: "User" === n?.__typename ? r.createElement(p.Z, { profileImageUrl: n.avatar?.image_url || void 0, user: n, withLink: !0 }) : null, message: r.createElement(s.ZP, { weight: "bold" }) }), [n]),
                        o = r.useMemo(() => ("User" === n?.__typename ? r.createElement(s.ZP, { color: "gray700", size: "subtext2", style: y.secondaryBar }, r.createElement(u().I18NFormatMessage, { $i18n: "a9ec3729" }, r.cloneElement(a.message, null, u().b9226ec1), r.cloneElement(a.loggedInUser, null, u().f47b48f6))) : null), [n, a]);
                    return r.createElement(d.Z, { backButtonType: "close", bottomBar: r.createElement(l.Z, { style: y.bottomBar }, r.createElement(s.ZP, { link: "/settings/delegate" }, f)), history: e, secondaryBar: o, title: E }, r.createElement(l.Z, { style: y.container }, r.createElement(g.H, { errorConfig: h }, r.createElement(b.Groups, null))));
                },
                y = i.default.create((e) => ({ container: { paddingBottom: e.spaces.space16 }, secondaryBar: { display: "flex", lineHeight: e.spaces.space24, padding: e.spaces.space16, paddingBottom: 0 }, bottomBar: { display: "flex", justifyContent: "center", flexDirection: "row", padding: e.spaces.space16 } })),
                v = r.memo(Z);
        },
        892660: (e, t, n) => {
            n.r(t), n.d(t, { DelegateNotSupported: () => E, default: () => f });
            var a = n(202784),
                r = n(731708),
                l = n(529356),
                o = n(111677),
                c = n.n(o),
                s = n(125363),
                i = n(390387),
                m = n(997210);
            const u = c().e6718a62,
                d = a.createElement(c().I18NFormatMessage, { $i18n: "g0aa3be7" }, a.createElement(r.ZP, { link: m.L }, c().ba411b6f)),
                g = a.createElement(c().I18NFormatMessage, { $i18n: "g29b68f9" }, a.createElement(r.ZP, { link: m.L }, c().f01ee14b)),
                p = c().j24c37b2,
                b = c().ba77b438;
            function E({ history: e, location: t }) {
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
            const f = E;
        },
        466441: (e, t, n) => {
            n.r(t), n.d(t, { NotFoundScreen: () => C, default: () => y });
            n(571372);
            var a = n(202784),
                r = n(386802),
                l = n(108362),
                o = n(392237),
                c = n(111677),
                s = n.n(c),
                i = n(187669),
                m = n(449067),
                u = n(38293),
                d = n(56851),
                g = n(652904),
                p = n(952793),
                b = n(163889),
                E = n(725516);
            const f = s().ba929da8,
                h = s().d203e242;
            function C(e) {
                const { splat: t } = e.match.params,
                    { isModal: n } = a.useContext(r.Z),
                    o = (0, p.hC)("responsive_web_report_page_not_found");
                return (
                    (0, i.q)(() => {
                        o && t && (0, b.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    a.createElement(g.Z, null, a.createElement(m.Z.Configure, { backLocation: "/", documentTitle: f, title: h }), a.createElement(l.Z, { style: n && Z.modal }, a.createElement(d.Z, null)), a.createElement(u.Z, { title: f, withMeta: !1 }))
                );
            }
            const Z = o.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                y = (0, E.Z)(C, { page: "not_found" });
        },
        10679: (e, t, n) => {
            n.r(t), n.d(t, { default: () => S, groupDetailQuery: () => x });
            var a = n(730319),
                r = n(202784),
                l = (n(585488), n(107267)),
                o = n(943401),
                c = n(242454),
                s = n(661810),
                i = n(111677),
                m = n.n(i),
                u = n(652904),
                d = n(736063),
                g = n(725516),
                p = n(58174),
                b = n(264922),
                E = n(838737),
                f = n(460701),
                h = n(153785),
                C = n(997210),
                Z = n(958394);
            const y = m().d2da668c,
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
                return r.createElement(b.Z, { location: e, title: y }, r.createElement(o.Z, { description: g ? k : _, learnMoreLabel: w, learnMoreLink: C.L }), g ? r.createElement(r.Fragment, null, r.createElement(c.Z, { color: "primary", label: v, onPress: I }), r.createElement(s.Z, null)) : null, P && S ? r.createElement(f.Z, { memberRole: "Contributor", restId: S, status: Z.D.Accepted, userResults: P, viewerRole: "Contributor" }) : null, r.createElement(s.Z, null), r.createElement(h.Z, { delegationMemberships: u, refetch: m, viewerRole: d?.role ?? "Contributor" }), n && i.delegation_group?.rest_id ? r.createElement(E.Z, { delegationGroup: i.delegation_group, delegationGroupId: i.delegation_group.rest_id, isOwner: !1, onDismiss: R, refetchMembers: m }) : null);
            }
            const S = (0, g.Z)(
                function () {
                    return r.createElement(u.Z, null, r.createElement(d.H, { errorConfig: { context: "DelegateGroupDetail" } }, r.createElement(P, null)));
                },
                { page: "settings", section: "delegate", component: "group-detail" },
            );
        },
        888068: (e, t, n) => {
            n.r(t), n.d(t, { Groups: () => Ae, default: () => Le, groupsDelegateQuery: () => Re });
            var a = n(403021),
                r = n(202784),
                l = (n(585488), n(107267)),
                o = n(661810),
                c = n(731708),
                s = n(40610),
                i = n(943401),
                m = n(392237),
                u = n(111677),
                d = n.n(u),
                g = n(652904),
                p = n(736063),
                b = n(943245),
                E = n(725516),
                f = n(125363),
                h = n(390387),
                C = n(58174),
                Z = n(264922),
                y = n(997210),
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
                        { avatar: l, core: o, id: c } = a,
                        { name: s, screen_name: i } = o ?? {},
                        { image_url: m } = l ?? {},
                        u = "Admin" === n ? I : R;
                    return r.createElement(S.ZP, { avatarUri: m || "", decoration: e, displayNameLabel: n ? u : void 0, name: s || "", screenName: i || "", userId: c });
                });
            var M = n(170497),
                L = n(69477),
                z = n(351743),
                D = n.n(z),
                F = n(247056),
                O = n(811176),
                N = n(190286),
                T = n(119232),
                B = n(297896),
                G = n(44946),
                j = n(601576);
            const U = d().fab787b4,
                H = d().bfbe9620,
                V = d().bb1d57b6,
                $ = d().d52a2b36,
                Q = d().df515932,
                W = d().cd00ea21,
                q = d().efa88ab1,
                J = L.Z,
                Y = M.Z;
            function K({ groupId: e, membershipId: t, refetch: n, user: a, userRole: l }) {
                const o = (0, f.I0)(),
                    c = (0, E.z)(),
                    [s] = D()(J),
                    [i, m] = r.useState(null),
                    [u, d] = r.useState(!1),
                    g = x()(Y, a),
                    p = g.core.screen_name,
                    b = r.useMemo(() => W({ screenName: p }), [p]),
                    C = r.useMemo(() => ("Admin" === l ? $ : Q), [l]),
                    Z = r.useMemo(() => q({ screenName: p }), [p]),
                    y = (function (e) {
                        const t = (0, G.rS)((0, f.oR)());
                        return r.useCallback(() => {
                            const n = t.dispatch,
                                a = (0, h.sy)(t.getState());
                            a?.userId === e && n((0, h.YJ)());
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
                                    o((0, j.fz)({ text: Z })), n();
                                },
                                updater: (e) => {
                                    e.invalidateStore(), y();
                                },
                            });
                    }, [c, s, t, o, Z, n, y]),
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
                            r.createElement(O.Z, {
                                items: [
                                    { Icon: T.default, text: H, link: `/settings/delegate/group/${encodeURIComponent(e)}` },
                                    { Icon: B.default, isEmphasized: !0, text: U, onClick: w },
                                ],
                                onCloseRequested: t,
                                shouldCloseOnClick: !0,
                            }),
                    }),
                    u ? r.createElement(N.Z, { confirmButtonLabel: V, confirmButtonType: "destructiveFilled", headline: b, onCancel: k, onConfirm: _, text: C }) : null,
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
                Ee = ee.Z;
            function fe({ membershipId: e, refetch: t, user: n, withDisabledAccept: a }) {
                const [l, o] = r.useState(!1),
                    [c] = D()(pe),
                    [s] = D()(be),
                    [i, m] = r.useState(null),
                    u = (0, f.I0)(),
                    d = (0, E.z)(),
                    g = x()(Ee, n).core.screen_name;
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
                                              u((0, j.fz)({ text: e })), t();
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
                                              u((0, j.fz)({ text: e })), t();
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
                    Z = r.useCallback(() => {
                        o(!1), p(v.D.Rejected);
                    }, [p]),
                    y = r.useCallback(() => {
                        o(!0);
                    }, [o]),
                    k = r.useCallback(() => {
                        o(!1);
                    }, [o]),
                    w = (function (e) {
                        const t = (0, f.v9)(h.VT),
                            n = (0, _.G)(),
                            a = ge({ numDelegates: n, numDelegatesLabel: n.toLocaleString((0, b.It)(t)) });
                        return r.useMemo(() => (e ? { "aria-label": a, disabled: !0, hoverLabel: { label: a } } : Object.freeze({})), [a, e]);
                    })(a);
                return r.createElement(ae.Z, { style: he.menuContainer }, r.createElement(re.ZP, (0, X.Z)({ "aria-label": ce, hoverLabel: { label: ce }, icon: r.createElement(le.default, null), onClick: C, style: he.rightMargin, type: "primaryOutlined" }, w)), r.createElement(re.ZP, { "aria-label": se, hoverLabel: { label: se }, icon: r.createElement(oe.default, null), onClick: y, type: "destructiveOutlined" }), l ? r.createElement(N.Z, { confirmButtonLabel: ie, confirmButtonType: "destructiveFilled", headline: me({ screenName: g }), onCancel: k, onConfirm: Z }) : null);
            }
            const he = m.default.create((e) => ({ menuContainer: { display: "flex", flexDirection: "row" }, rightMargin: { marginEnd: e.spacesPx.space12 } })),
                Ce = k.Z;
            function Ze({ decorationType: e, groups: t, refetch: n, shouldShowRoleLabel: a = !1, userId: l, withDisabledAccept: o = !1 }) {
                const c = x()(Ce, t);
                return r.createElement(
                    r.Fragment,
                    null,
                    c.map((t) => {
                        const c = t.members?.find((e) => e.user_results?.result?.id === l),
                            s = c?.role || "Contributor";
                        if (c?.rest_id && t.handle_results.result?.core) {
                            const l = e === v.z.InviteMenu ? r.createElement(fe, { membershipId: c.rest_id, refetch: n, user: t.handle_results.result, withDisabledAccept: o }) : e === v.z.ActionMenu ? r.createElement(K, { groupId: t.id, membershipId: c.rest_id, refetch: n, user: t.handle_results.result, userRole: c.role ?? "Contributor" }) : null;
                            if (t.handle_results.result) return r.createElement(A, { decoration: l, group: t.handle_results.result, key: t.rest_id, userRole: a ? s : void 0 });
                        }
                    }),
                );
            }
            const ye = d().i95202f6,
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
                    p = (0, f.v9)(h.VT),
                    E = Se({ numDelegates: d, numDelegatesLabel: d.toLocaleString((0, b.It)(p)) });
                return r.createElement(r.Fragment, null, l?.length ? r.createElement(r.Fragment, null, r.createElement(o.Z, { spacing: "space12" }), r.createElement(c.ZP, { size: "headline2", style: Me.header, weight: "heavy" }, ve), g && r.createElement(s.Z.Attention, { text: E }), r.createElement(Ze, { decorationType: v.z.InviteMenu, groups: l, refetch: t, shouldShowRoleLabel: !0, userId: i, withDisabledAccept: g })) : null, n?.length ? r.createElement(r.Fragment, null, r.createElement(o.Z, { spacing: "space12" }), r.createElement(c.ZP, { size: "headline2", style: Me.header, weight: "heavy" }, ke), r.createElement(Ze, { decorationType: v.z.ActionMenu, groups: n, refetch: t, userId: i })) : null, a?.length ? r.createElement(r.Fragment, null, r.createElement(o.Z, { spacing: "space12" }), r.createElement(c.ZP, { size: "headline2", style: Me.header, weight: "heavy" }, we), r.createElement(Ze, { decorationType: v.z.ActionMenu, groups: a, refetch: t, userId: i })) : null, m ? r.createElement(c.ZP, { align: "center", weight: "bold" }, Pe) : null);
            }
            const Me = m.default.create((e) => ({ header: { paddingVertical: e.spaces.space12, paddingStart: e.spaces.space16 } })),
                Le = (0, E.Z)(
                    function () {
                        const e = (0, l.useLocation)();
                        return r.createElement(g.Z, null, r.createElement(Z.Z, { location: e, title: ye }, r.createElement(i.Z, { description: _e, learnMoreLabel: xe, learnMoreLink: y.L }), r.createElement(p.H, { errorConfig: Ie }, r.createElement(Ae, null))));
                    },
                    { page: "settings", section: "delegate", component: "groups" },
                );
        },
        473514: (e, t, n) => {
            n.r(t), n.d(t, { default: () => z, membersDelegateQuery: () => M });
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
                g = n(111677),
                p = n.n(g),
                b = n(652904),
                E = n(736063),
                f = n(943245),
                h = n(725516),
                C = n(125363),
                Z = n(390387),
                y = n(58174),
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
                M = r.Z;
            function L({ delegationGroup: e, onAddMemberPress: t, refetch: n }) {
                const r = c()(a.Z, e),
                    o = l.useMemo(() => r?.members || [], [r?.members]),
                    s = (0, C.v9)(Z.vd) ?? "Owner",
                    g = (0, x.G)(),
                    p = (0, C.v9)(Z.VT),
                    b = A({ numDelegates: g, numDelegatesLabel: g.toLocaleString((0, f.It)(p)) });
                return l.createElement(l.Fragment, null, l.createElement(i.Z, { description: I, learnMoreLabel: R, learnMoreLink: w.L }), o.length >= g && l.createElement(m.Z.Attention, { text: b }), l.createElement(u.Z, { color: "primary", disabled: o.length >= g, label: P, onPress: t }), l.createElement(d.Z, null), l.createElement(k.Z, { delegationMemberships: o, refetch: n, viewerRole: s }));
            }
            const z = (0, h.Z)(
                function () {
                    const { data: e, refetch: t } = (0, y.e)(M, {}),
                        n = l.useMemo(() => e.viewer_v2?.list_delegation_groups || [], [e.viewer_v2?.list_delegation_groups])[0],
                        a = e?.viewer_v2,
                        r = a?.user?.rest_id || "",
                        o = (0, s.useLocation)(),
                        [c, i] = l.useState(!1),
                        m = !(0, C.v9)(Z.Lz),
                        u = l.useCallback(() => i(!0), []),
                        d = l.useCallback(() => i(!1), []);
                    return l.createElement(b.Z, null, l.createElement(v.Z, { location: o, title: S }, l.createElement(E.H, { errorConfig: { context: "DelegateMembers" } }, a ? l.createElement(L, { delegationGroup: n, onAddMemberPress: u, refetch: t, viewer: a }) : null), c ? l.createElement(_.Z, { delegationGroup: n, delegationGroupId: r, isOwner: m, onDismiss: d, refetchMembers: t }) : null));
                },
                { page: "settings", section: "delegate", component: "members" },
            );
        },
        838737: (e, t, n) => {
            n.d(t, { Z: () => ge });
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
                E = n(392237),
                f = n(111677),
                h = n.n(f),
                C = n(980407),
                Z = n(757700),
                y = n(339110),
                v = n(725516),
                _ = n(874088),
                k = n(27951);
            const w = [y.my.Users],
                x = h().fc9dd578,
                P = E.default.create((e) => ({ root: { flex: 1 } })),
                S = ({ disabledUserIds: e, onDropdownScrollableCheck: t, onSelect: n, source: a }) => {
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
                    return r.createElement(l.Z, { ref: o, style: P.root }, r.createElement(_.default, { alwaysOpen: !0, disableClearButton: !0, filter: w, getItemIsDisabled: s, isModal: !0, onItemClick: c, onItemsChanged: i, onQueryChange: m, placeholder: x, renderUserDecoration: k.ib, shouldAutoFocus: !0, shouldClearOnSelect: !0, shouldFocusOnClear: !0, source: a, withSectionDivider: !1 }));
                };
            var I = n(147935),
                R = n(16046),
                A = n(299640),
                M = n(51545),
                L = n(351743),
                z = n.n(L),
                D = n(88656);
            const F = h().e4a6e006,
                O = h().b5faf216,
                N = h().hcc3b4ce,
                T = h().ace0f0a4,
                B = h().e4a6e006,
                G = h().e4a6e006,
                j = Object.freeze({ DELEGATE_ERR_002: O, DELEGATE_ERR_003: N, DELEGATE_ERR_004: T, DELEGATE_ERR_005: B, DELEGATE_ERR_006: G }),
                U = M.Z;
            const H = Object.freeze({ memberSelection: "MemberSelection", roleSelection: "RoleSelection", inviteSent: "InviteSent", adminConfirmation: "AdminConfirmation", inviteError: "InviteError" }),
                V = h().efee0a50,
                $ = h().ja0a1aa6,
                Q = h().db4f623a,
                W = h().be7350e3,
                q = h().b7aa7642,
                J = h().cfd2f35e,
                Y = h().edbca224,
                K = h().cb70b894,
                X = h().f4834ca6,
                ee = h().b772cd66,
                te = h().cb04a824,
                ne = h().c3153100,
                ae = h().d4b3abde,
                re = h().b92e2700,
                le = h().hbbbf908,
                oe = h().d8eda249,
                ce = ({ disabledUserIds: e, isOwner: t, onDropdownScrollableCheck: n, onSelect: a }) => r.createElement(r.Fragment, null, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, t ? V : $), r.createElement(S, { disabledUserIds: e, onDropdownScrollableCheck: n, onSelect: a, source: y._4.Unknown })),
                se = ({ isOwner: e, onRoleChange: t, selectedRole: n, user: a }) => {
                    const o = [
                            { label: te, value: "Contributor", helpText: ae },
                            { label: ne, value: "Admin", helpText: re },
                        ],
                        { id_str: c, name: s, profile_image_url_https: d, screen_name: g } = a;
                    return r.createElement(r.Fragment, null, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, e ? Q : $), r.createElement(l.Z, { style: de.userCellContainer }, r.createElement(m.ZP, { avatarUri: d, name: s, screenName: g, style: de.userCell, userId: c })), e ? r.createElement(l.Z, { style: de.selectionGroupContainer }, r.createElement(u.Z, { name: "role", onChange: t, options: o, value: n })) : null);
                },
                ie = ({ screenName: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: de.imageContainer }, r.createElement(d.Z, { source: I, style: de.adminImage })), r.createElement(l.Z, { style: de.titleContainer }, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, W({ screenName: e }))), r.createElement(l.Z, { style: de.textContainer }, r.createElement(i.ZP, { color: "gray700" }, le))),
                me = ({ screenName: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: de.imageContainer }, r.createElement(d.Z, { source: R, style: de.image })), r.createElement(l.Z, { style: de.titleContainer }, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, q)), r.createElement(l.Z, { style: de.textContainer }, r.createElement(i.ZP, { color: "gray700" }, oe({ screenName: e })))),
                ue = ({ message: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: de.imageContainer }, r.createElement(d.Z, { source: A, style: de.image })), r.createElement(l.Z, { style: de.titleContainer }, r.createElement(i.ZP, { size: "title2", weight: "heavy" }, e)));
            const de = E.default.create((e) => ({ activityIndicatorContainer: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, modal: { minWidth: "initial" }, modalLarge: { minWidth: 600, minHeight: 600, maxHeight: 600 }, modalContent: { position: "relative", paddingHorizontal: e.spacesPx.space32, paddingVertical: e.spacesPx.space36, flex: 1, overflowY: "auto" }, modalContentLarge: { paddingHorizontal: 2 * e.spacesPx.space48, paddingVertical: e.spacesPx.space32 }, modalContentMemberSelection: { paddingBottom: 0 }, modalContentError: { minHeight: "initial" }, imageContainer: { display: "flex", justifyContent: "center", alignItems: "center" }, image: { width: 175, height: 200 }, adminImage: { width: 175, height: 160 }, titleContainer: { marginTop: e.spaces.space32 }, textContainer: { marginTop: e.spaces.space16 }, actionsContainer: { paddingVertical: e.spacesPx.space24, paddingHorizontal: 2 * e.spacesPx.space48 }, actionsContainerWithOverflow: { boxShadow: "0px 0px 3px rgb(15 20 25 / 15%), 0px 0px 16px rgb(15 20 25 / 10%)" }, secondaryAction: { marginTop: e.spacesPx.space16 }, userCell: { paddingHorizontal: 0 }, userCellContainer: { marginTop: e.spacesPx.space24 }, selectionGroupContainer: { marginTop: e.spacesPx.space12 } })),
                ge = (0, v.Z)(
                    function ({ analytics: e, delegationGroup: t, delegationGroupId: n, isOwner: o, onDismiss: i, refetchMembers: m }) {
                        const u = (0, s.useHistory)(),
                            d = c()(a.Z, t),
                            E = r.useMemo(() => d?.members?.map((e) => e.user_results?.result?.rest_id || "") || [], [d?.members]),
                            [f, h] = r.useState(H.memberSelection),
                            [v, _] = r.useState(null),
                            [k, w] = r.useState("Contributor"),
                            [x, P] = r.useState(null),
                            [S, I] = (function (e, t) {
                                const [n, a] = z()(U);
                                return [
                                    (a) =>
                                        n({
                                            variables: a,
                                            onError: (t) => {
                                                if (t instanceof D.Z) {
                                                    const n = t.errors[0] || null;
                                                    e((n?.message && j[n.message]) || F);
                                                } else e(F);
                                            },
                                            onCompleted: () => {
                                                t();
                                            },
                                        }),
                                    a,
                                ];
                            })(P, () => {
                                h(H.inviteSent), m();
                            }),
                            [R, A] = r.useState(!1);
                        r.useEffect(() => {
                            h(null !== v ? H.roleSelection : H.memberSelection);
                        }, [v]),
                            r.useEffect(() => {
                                x && h(H.inviteError);
                            }, [x]);
                        const M = r.useCallback((e) => {
                                e.type === y.El.User && _(e);
                            }, []),
                            L = r.useCallback(() => {
                                f === H.roleSelection ? _(null) : f === H.adminConfirmation ? h(H.roleSelection) : (P(null), i());
                            }, [f, i]),
                            O = r.useCallback(() => {
                                if ("Admin" === k && f !== H.adminConfirmation) h(H.adminConfirmation);
                                else if (null !== v) {
                                    e.scribe({ element: `${k}_invite_sent_by_${o ? "Owner" : "Admin"}`, action: "click" });
                                    const t = v.data.id_str;
                                    S({ userId: t, delegationGroupId: n, selectedRole: k });
                                }
                            }, [e, S, f, n, k, v, o]),
                            N = r.useCallback(() => {
                                P(null), _(null);
                            }, []),
                            T = r.useCallback((e, t) => {
                                "Contributor" === t ? w("Contributor") : "Admin" === t && w("Admin");
                            }, []),
                            B = r.useMemo(() => {
                                switch (f) {
                                    case H.memberSelection:
                                        return r.createElement(ce, { disabledUserIds: [n, ...E], isOwner: o, onDropdownScrollableCheck: A, onSelect: M });
                                    case H.roleSelection:
                                        return v ? r.createElement(se, { isOwner: o, onRoleChange: T, selectedRole: k, user: v.data }) : null;
                                    case H.adminConfirmation:
                                        return v ? r.createElement(ie, { screenName: v.data.screen_name }) : null;
                                    case H.inviteSent:
                                        return v ? r.createElement(me, { screenName: v.data.screen_name }) : null;
                                    case H.inviteError:
                                        return x ? r.createElement(ue, { message: x }) : null;
                                    default:
                                        return null;
                                }
                            }, [f, n, E, x, T, M, o, k, v]),
                            G = r.useMemo(() => {
                                switch (f) {
                                    case H.memberSelection:
                                        return r.createElement(g.ZP, { onPress: i, size: "xLarge", type: "primaryOutlined" }, J);
                                    case H.roleSelection:
                                        return r.createElement(g.ZP, { onPress: O, size: "xLarge", type: "primaryFilled" }, Y);
                                    case H.adminConfirmation:
                                        return r.createElement(r.Fragment, null, r.createElement(g.ZP, { onPress: O, size: "xLarge", type: "primaryFilled" }, Y), r.createElement(l.Z, { style: de.secondaryAction }, r.createElement(g.ZP, { onPress: L, size: "xLarge", type: "primaryOutlined" }, K)));
                                    case H.inviteError:
                                    case H.inviteSent:
                                        return r.createElement(r.Fragment, null, r.createElement(g.ZP, { onPress: N, size: "xLarge", type: "primaryFilled" }, X), r.createElement(l.Z, { style: de.secondaryAction }, r.createElement(g.ZP, { onPress: L, size: "xLarge", type: "primaryOutlined" }, ee)));
                                    default:
                                        return null;
                                }
                            }, [f, L, N, O, i]),
                            V = f === H.memberSelection || f === H.inviteSent ? "close" : "back",
                            $ = (0, p.Ji)();
                        return r.createElement(Z.ZP, { clickMaskToClose: !0, history: u, modalSize: $ ? Z.Cg.fitChildren : Z.Cg.full, onMaskClick: i, style: $ ? de.modalLarge : de.modal }, r.createElement(C.Z, { backButtonType: V, onBackClick: L }, r.createElement(l.Z, { style: [de.modalContent, $ ? de.modalContentLarge : null, f === H.memberSelection ? de.modalContentMemberSelection : null, x ? de.modalContentError : null] }, I ? r.createElement(l.Z, { style: de.activityIndicatorContainer }, r.createElement(b.Z, null)) : B), r.createElement(l.Z, { style: [de.actionsContainer, R ? de.actionsContainerWithOverflow : null] }, G)));
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
                c = n(111677),
                s = n.n(c),
                i = n(836640),
                m = n(958394),
                u = n(247056),
                d = n(811176),
                g = n(190286),
                p = n(224823),
                b = n(885724),
                E = n(725516),
                f = n(126608),
                h = n(108538),
                C = n(351743),
                Z = n.n(C),
                y = n(125363),
                v = n(601576);
            const _ = s().d472c9eb,
                k = s().h5951997,
                w = h.Z,
                x = f.Z;
            const P = s().a171ca7c,
                S = s().f68f079c,
                I = s().b2794e9e,
                R = s().gca83d6a,
                A = s().b8cac21c,
                M = s().e68b09b4,
                L = s().hd67c2e8,
                z = s().f0bd8ca9,
                D = s().a33eba47;
            function F({ memberRole: e, membershipId: t, refetch: n = () => {}, screenName: a, status: l, viewerRole: o, onChangeRolePress: c }) {
                const s = (0, E.z)(),
                    i = (function () {
                        const [e] = Z()(w),
                            [t] = Z()(x),
                            [n, a] = r.useState(null),
                            l = (0, y.I0)();
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
                    [h, C] = r.useState(!1),
                    F = r.useMemo(() => ("Admin" === e ? R : A), [e]),
                    O = r.useCallback(() => {
                        const r = `${o}_remove_${e}`;
                        s.scribe({ element: r, action: "click" }), C(!1), i.removeMember({ membershipId: t }, n, a);
                    }, [s, C, i, t, e, n, a, o]),
                    N = r.useCallback(() => {
                        const r = `${o}_cancel_invite_${e}`;
                        s.scribe({ element: r, action: "click" }), f(!1), i.cancelInvite({ membershipId: t }, n, a);
                    }, [s, f, i, t, e, n, a, o]),
                    T = r.useCallback(() => {
                        C(!1);
                    }, [C]),
                    B = r.useCallback(() => {
                        C(!0);
                    }, [C]),
                    G = r.useCallback(() => {
                        f(!1);
                    }, [f]),
                    j = r.useCallback(() => {
                        f(!0);
                    }, [f]),
                    U = [{ Icon: p.default, isEmphasized: !0, onClick: j, text: P }],
                    H = { Icon: b.default, text: S, onClick: c },
                    V = { Icon: p.default, isEmphasized: !0, text: I, onClick: B },
                    $ = { Owner: { Owner: { Pending: [], Accepted: [], Rejected: [] }, Admin: { Pending: U, Accepted: [H, V], Rejected: [] }, Contributor: { Pending: U, Accepted: [H, V], Rejected: [] } }, Admin: { Owner: { Pending: [], Accepted: [], Rejected: [] }, Admin: { Pending: [], Accepted: [], Rejected: [] }, Contributor: { Pending: U, Accepted: [V], Rejected: [] } }, Contributor: { Owner: { Pending: [], Accepted: [], Rejected: [] }, Admin: { Pending: [], Accepted: [], Rejected: [] }, Contributor: { Pending: [], Accepted: [], Rejected: [] } } }[o][e][l];
                return $.length ? r.createElement(r.Fragment, null, r.createElement(u.Z, { renderActionMenu: (e, t) => r.createElement(d.Z, { items: $, onCloseRequested: e, shouldCloseOnClick: !0 }) }), h ? r.createElement(g.Z, { confirmButtonLabel: M, confirmButtonType: "destructiveFilled", headline: z({ screenName: a }), onCancel: T, onConfirm: O, text: F }) : null, m ? r.createElement(g.Z, { confirmButtonLabel: L, confirmButtonType: "destructiveFilled", headline: D({ screenName: a }), onCancel: G, onConfirm: N }) : null) : null;
            }
            const O = r.memo(F),
                N = s().h502484e;
            function T({ memberRole: e, onChangeRolePress: t, refetch: n, restId: l, status: c, userResults: s, viewerRole: u }) {
                const d = o()(a.Z, s),
                    { avatar: g, core: p } = d,
                    b = p?.screen_name || "",
                    E = p?.name || "",
                    f = g?.image_url || "",
                    h = c === m.D.Pending,
                    C = r.useCallback(() => t && t({ id: l, profile_image_url_https: f, name: E, screen_name: b, role: e }), [e, E, t, f, l, b]);
                return r.createElement(i.J, { decoration: r.createElement(O, { memberRole: e, membershipId: l, onChangeRolePress: C, refetch: n, screenName: b, status: c, viewerRole: u }), displayNameLabel: h ? N : void 0, user: d });
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
                d = n(111677),
                g = n.n(d),
                p = n(933277),
                b = n(107267),
                E = n(673510),
                f = n(449479),
                h = n(992942),
                C = n(154003),
                Z = n(708852),
                y = n(167630),
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
                M = S.Z;
            const L = Object.freeze({ roleSelection: "RoleSelection", roleUpdated: "RoleUpdated", adminConfirmation: "AdminConfirmation", changeRoleError: "ChangeRoleError" }),
                z = g().db25d796,
                D = g().e4133790,
                F = g().a1a27c26,
                O = g().fd7b1b1c,
                N = g().b772cd66,
                T = g().cb04a824,
                B = g().c3153100,
                G = g().d4b3abde,
                j = g().b92e2700,
                U = g().hbbbf908,
                H = g().be7350e3,
                V = g().ec67d021,
                $ = ({ onRoleChange: e, selectedRole: t, user: n }) => {
                    const a = [
                            { label: T, value: "Contributor", helpText: G },
                            { label: B, value: "Admin", helpText: j },
                        ],
                        { id: o, name: c, profile_image_url_https: i, screen_name: m } = n;
                    return r.createElement(r.Fragment, null, r.createElement(s.ZP, { size: "title2", weight: "heavy" }, z), r.createElement(l.Z, { style: J.userCellContainer }, r.createElement(E.ZP, { avatarUri: i, name: c, screenName: m, style: J.userCell, userId: o })), r.createElement(l.Z, { style: J.selectionGroupContainer }, r.createElement(f.Z, { name: "role", onChange: e, options: a, value: t })));
                },
                Q = ({ screenName: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: J.imageContainer }, r.createElement(h.Z, { source: w, style: J.adminImage })), r.createElement(l.Z, { style: J.titleContainer }, r.createElement(s.ZP, { size: "title2", weight: "heavy" }, H({ screenName: e }))), r.createElement(l.Z, { style: J.textContainer }, r.createElement(s.ZP, { color: "gray700" }, U))),
                W = ({ screenName: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: J.imageContainer }, r.createElement(h.Z, { source: x, style: J.image })), r.createElement(l.Z, { style: J.titleContainer }, r.createElement(s.ZP, { size: "title2", weight: "heavy" }, D)), r.createElement(l.Z, { style: J.textContainer }, r.createElement(s.ZP, { color: "gray700" }, V({ screenName: e })))),
                q = ({ message: e }) => r.createElement(r.Fragment, null, r.createElement(l.Z, { style: J.imageContainer }, r.createElement(h.Z, { source: P, style: J.image })), r.createElement(l.Z, { style: J.titleContainer }, r.createElement(s.ZP, { size: "title2", weight: "heavy" }, e)));
            const J = u.default.create((e) => ({ activityIndicatorContainer: { flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }, modal: { minWidth: "initial" }, modalLarge: { minWidth: 600, minHeight: 600, maxHeight: 600 }, modalContent: { position: "relative", paddingHorizontal: e.spacesPx.space32, paddingVertical: e.spacesPx.space36, flex: 1, overflowY: "auto" }, modalContentLarge: { paddingHorizontal: 2 * e.spacesPx.space48, paddingVertical: e.spacesPx.space32 }, modalContentError: { minHeight: "initial" }, imageContainer: { display: "flex", justifyContent: "center", alignItems: "center" }, image: { width: 175, height: 200 }, adminImage: { width: 175, height: 160 }, titleContainer: { marginTop: e.spaces.space32 }, textContainer: { marginTop: e.spaces.space16 }, actionsContainer: { paddingVertical: e.spacesPx.space24, paddingHorizontal: 2 * e.spacesPx.space48 }, secondaryAction: { marginTop: e.spacesPx.space16 }, userCell: { paddingHorizontal: 0 }, userCellContainer: { marginTop: e.spacesPx.space24 }, selectionGroupContainer: { marginTop: e.spacesPx.space12 } })),
                Y = (0, k.Z)(
                    function ({ analytics: e, onDismiss: t, refetchMembers: n, user: a }) {
                        const o = (0, b.useHistory)(),
                            [c, s] = r.useState(L.roleSelection),
                            [i, m] = r.useState(a.role),
                            [u, d] = r.useState(null),
                            [g, p] = (function (e, t) {
                                const [n, a] = R()(M);
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
                                s(L.roleUpdated), n();
                            });
                        r.useEffect(() => {
                            u && s(L.changeRoleError);
                        }, [u]);
                        const E = r.useCallback(() => {
                                c === L.adminConfirmation ? s(L.roleSelection) : (d(null), t());
                            }, [c, t]),
                            f = r.useCallback(() => {
                                if ("Admin" === i && c !== L.adminConfirmation) s(L.adminConfirmation);
                                else {
                                    e.scribe({ element: `owner_changed_member_role_to_${i}`, action: "click" });
                                    const t = a.id;
                                    g({ userId: t, selectedRole: i });
                                }
                            }, [e, g, c, i, a.id]),
                            h = r.useCallback((e, t) => {
                                "Contributor" === t ? m("Contributor") : "Admin" === t && m("Admin");
                            }, []),
                            k = r.useMemo(() => {
                                switch (c) {
                                    case L.roleSelection:
                                        return r.createElement($, { onRoleChange: h, selectedRole: i, user: a });
                                    case L.adminConfirmation:
                                        return r.createElement(Q, { screenName: a.screen_name });
                                    case L.roleUpdated:
                                        return r.createElement(W, { screenName: a.screen_name });
                                    case L.changeRoleError:
                                        return u ? r.createElement(q, { message: u }) : null;
                                    default:
                                        return null;
                                }
                            }, [c, u, h, i, a]),
                            w = r.useMemo(() => {
                                switch (c) {
                                    case L.roleSelection:
                                        return r.createElement(C.ZP, { onPress: f, size: "xLarge", type: "primaryFilled" }, F);
                                    case L.adminConfirmation:
                                        return r.createElement(r.Fragment, null, r.createElement(C.ZP, { onPress: f, size: "xLarge", type: "primaryFilled" }, F), r.createElement(l.Z, { style: J.secondaryAction }, r.createElement(C.ZP, { onPress: E, size: "xLarge", type: "primaryOutlined" }, O)));
                                    case L.changeRoleError:
                                    case L.roleUpdated:
                                        return r.createElement(C.ZP, { onPress: E, size: "xLarge", type: "primaryOutlined" }, N);
                                    default:
                                        return null;
                                }
                            }, [c, E, f]),
                            x = c === L.roleUpdated || c === L.roleSelection ? "close" : "back",
                            P = (0, Z.Ji)();
                        return r.createElement(_.ZP, { clickMaskToClose: !0, history: o, modalSize: P ? _.Cg.fitChildren : _.Cg.full, onMaskClick: t, style: P ? J.modalLarge : J.modal }, r.createElement(v.Z, { backButtonType: x, onBackClick: E }, r.createElement(l.Z, { style: [J.modalContent, P ? J.modalContentLarge : null, u ? J.modalContentError : null] }, p ? r.createElement(l.Z, { style: J.activityIndicatorContainer }, r.createElement(y.Z, null)) : k), r.createElement(l.Z, { style: J.actionsContainer }, w)));
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
                    E = r.useMemo(() => (0, p.Z)(o, (e) => e?.role || ""), [o]),
                    f = E.Contributor?.length > 0;
                return o?.length
                    ? r.createElement(
                          r.Fragment,
                          null,
                          E.Admin?.length > 0 &&
                              r.createElement(
                                  l.Z,
                                  null,
                                  r.createElement(i.Z, { subtext: ee, text: X }),
                                  E.Admin.map((e) => {
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
                                  E.Contributor.map((e) => {
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
                p = n(111677),
                b = n.n(p),
                E = n(652904),
                f = n(736063),
                h = n(725516),
                C = n(125363),
                Z = n(390387),
                y = n(535338),
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
                M = b().i859a9d4,
                L = b().j339ef22,
                z = b().g4b0c2dc,
                D = b().i95202f6,
                F = b().cb8ebf5c,
                O = b().d9aef256,
                N = b().afb3ccf6,
                T = b().dfae5248,
                B = b().b9c91524,
                G = Object.freeze({ none: "Nobody", all: "Everyone", following: "OnlyFollowing" }),
                j = [
                    { label: L, value: G.all },
                    { label: z, value: G.following },
                ],
                U = a.Z;
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
                    n = (0, y.p)(U, {}),
                    a = n.viewer_v2?.user_results?.result?.delegation_invitation_preferences,
                    o = n.viewer_v2?.user_results?.result?.rest_id || "",
                    g = n.viewer_v2?.__id || "",
                    p = (0, C.v9)(Z.Lz),
                    [b, E] = r.useState(a || G.none),
                    [f, h] = r.useState(!1);
                r.useEffect(() => {
                    a && E(a);
                }, [a]);
                const v = r.useCallback(
                        (n) => {
                            const a = `delegate_enabled_for_${n}`;
                            e.scribe({ element: a, action: "click" }), t({ userId: o, invitationSetting: n }, g);
                        },
                        [e, t, g, o],
                    ),
                    k = r.useCallback(() => {
                        h(!1), v(G.none);
                    }, [h, v]),
                    w = r.useCallback(() => {
                        h(!1);
                    }, [h]),
                    S = r.useCallback(
                        (e, t) => {
                            t !== G.none ? v(t) : h(!0);
                        },
                        [h, v],
                    );
                return r.createElement(r.Fragment, null, r.createElement(l.Z, null, r.createElement(c.Z, { defaultOption: j.find(({ value: e }) => e === G.following), description: r.createElement(r.Fragment, null, R, r.createElement(s.ZP, { link: _.L }, " ", M)), label: A, name: "allow_others_delegation", offValue: G.none, onChange: S, options: j, value: b })), r.createElement(i.Z, { spacing: "space2" }), r.createElement(m.Z, { text: O }), !p && r.createElement(u.Z, { label: D, link: "/settings/delegate/groups" }), r.createElement(u.Z, { label: F, link: "/settings/delegate/members" }), f ? r.createElement(d.Z, { confirmButtonLabel: N, confirmButtonType: "destructiveFilled", headline: T, onCancel: w, onConfirm: k, text: B }) : null);
            }
            const V = (0, h.Z)(
                function ({ analytics: e }) {
                    const t = (0, o.useLocation)();
                    return r.createElement(E.Z, null, r.createElement(v.Z, { location: t, title: S }, r.createElement(g.Z, { description: I }), r.createElement(f.H, { errorConfig: { context: "Delegate" } }, r.createElement(H, { analytics: e }))));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Delegate-63cb1cc4.c2afc2ca.js.map
